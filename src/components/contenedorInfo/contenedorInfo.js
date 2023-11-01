import React from "react";

import './contenedorInfo.css';


function ContenedorInfo({titulo,iconoInfo,instricciones,descripcion})
{
    return(
        <div>
            <div className="contenedorBase">
                <div className="paragraph">
                    <h3>{titulo}</h3>
                    <p style={{maxHeight:'20px'}}>
                            {descripcion}
                    </p>
                </div>
                <div className="iconoCanal">
                        <img id="imagen" src={iconoInfo}/>
                        <h4>{instricciones}</h4>
                </div>
            </div>
        </div>
    );
}

function ContenedorInfo2 ({titulo,iconoInfo,instricciones,descripcion}){
    return(
        <div>
            <div className="contenedorBase">
                <div className="paragraph2">
                    <h3>{titulo}</h3>
                    <p style={{maxHeight:'20px'}}>
                            {descripcion}
                    </p>
                </div>
                <div className="iconoCanal2">
                        <img id="imagen" src={iconoInfo}/>
                        <h4>{instricciones}</h4>
                </div>
            </div>
        </div>
    );
}

export {ContenedorInfo,ContenedorInfo2};