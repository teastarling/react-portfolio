import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => {
    return (
        <div className="container-fluid overflow-hidden">
            <div className="row vh-100 overflow-auto">
                <PortfolioContainer />
            </div>
        </div>
    );
};

export default App;

