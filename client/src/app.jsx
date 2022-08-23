import React from "react";
import Vapur from "./vapur";

const App = ({ pageName }) => {

    const pageToShow = () => {
        if (pageName === 'vapur') return <Vapur />;

        return <div>Not Found</div>;
    };
    return (
        <div>
            {pageToShow()}
        </div>
    )
};

export default App;
