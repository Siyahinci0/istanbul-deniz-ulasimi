import React, { useEffect, useState } from "react";
import axios from 'axios';

const Vapur = ({ }) => {

    const duraklarArasindakiSure = 10;

    const [nereden, setNereden] = useState('Durak giriniz..');
    const [nereye, setNereye] = useState('Durak giriniz');

    const [neredenDurakSirasi, setNeredenDurakSirasi] = useState(0);
    const [nereyeDurakSirasi, setNereyeDurakSirasi] = useState(0);

    const [yolculukZamani, setYolculukZamani] = useState(0);

    const yolculukHesapla = () => {

        axios.all([
            axios.get('http://localhost:3000/bogaz/' + nereden),
            axios.get('http://localhost:3000/bogaz/' + nereye)

        ]).then(axios.spread((data1, data2) => {
            setNeredenDurakSirasi(data1.data.sira);
            setNereyeDurakSirasi(data2.data.sira);
        })).finally(
            setYolculukZamani((neredenDurakSirasi - nereyeDurakSirasi) * duraklarArasindakiSure)
            );

        // axios.get('http://localhost:3000/bogaz/' + nereden)
        //     .then(({data}) => 
        //         setNeredenDurakSirasi(data.sira))
        //     .then(axios.get('http://localhost:3000/bogaz/' + nereye)
        //     .then(({data}) => 
        //         setNereyeDurakSirasi(data.sira)
        //     )
        //     .then(
        //         setYolculukZamani((neredenDurakSirasi - nereyeDurakSirasi) * duraklarArasindakiSure)
        //     ));
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-4">

                    <label>Nereden: </label>
                    <input type={'text'}
                        onChange={(e) => {
                            setNereden(e.target.value);
                        }} />
                </div>
                <div className="col-sm-4">
                    <label>Nereye: </label>

                    <input type={'text'}
                        onChange={(e) => {
                            setNereye(e.target.value);
                        }} />
                </div>

            </div>
            <div className="row">
                <button onClick={yolculukHesapla}>Yolculugu Hesapla</button>
            </div>

            <div className="row">
                {Math.abs(yolculukZamani)}
            </div>

        </div>
    )
};

export default Vapur;