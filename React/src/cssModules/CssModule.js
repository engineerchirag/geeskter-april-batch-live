import React from 'react';
import style from "./Style.module.css";

function CssModule(props) {
    return (
        <div className={style.container}>
            <h1>Applied styling using css modules</h1>
        </div>
    );
}

export default CssModule;