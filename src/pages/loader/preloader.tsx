import React from "react";
import "./preloader.css";

const Preloader = () => {
    return (
        <div className="preloader-container">
            <div className="main-loader">
                <span className="loader1"></span>
                <span className="loader2"></span>
                <span className="loader3"></span>
            </div>
        </div>
    );
};

export default Preloader;
