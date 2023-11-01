import React, {useState} from "react";
import './contenedorHooks.css'

function ContenedorHooks(){
    
    const[cuenta,setCuenta]=useState(0);
    
    const incrementar = () => {
        setCuenta(cuenta + 1);
    }
    const decrementar = () => {
        setCuenta(cuenta - 1);
    }
    return(
        <div >
            <h1>{cuenta}</h1>
            <div className="btn-container">
            <button onClick={incrementar} className="custom-btn ">INCREMENTAR</button>
            <button onClick={decrementar} className="custom-btn ">DECREMENTAR</button>
            </div>
        </div>
    );

}
export default ContenedorHooks;