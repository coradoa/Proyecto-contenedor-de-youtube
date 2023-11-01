import React, { useState } from "react";
import axios from "axios";
import './AgenteValo.css';

function AgenteValo(){
    const [agentData, setagentData]= useState(null);

    const getagentData = () => {
        axios.get('https://valorant-api.com/v1/agents/1e58de9c-4950-5125-93e9-a0aee9f98746')
        .then(response => {
            //Actualizamos el estado con los datos recibidos
            setagentData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("Hubo un error al obtener los datos: ",error);
        });
    };

    return(
        <div>
            <button onClick={getagentData} className="custom-btn">Ver Agente</button>
            <div id="apiDataContainer">
            <h1 className="titulo-grande">VALORANT</h1>
            {agentData && (
                <div>
                    
                    <h1 className="kill">{agentData.data.displayName}</h1>
                    <p className="paragraph">Descripcion:{agentData.data.description}</p>
                    <img src={agentData.data.displayIcon} className="icono"></img>
                </div>  
            )}
        </div>
        </div>
        
    );
}

export default AgenteValo;