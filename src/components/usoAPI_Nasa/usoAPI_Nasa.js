import React, { useState } from "react";
import axios from "axios";


function UsoAPI_Nasa(){
    const [nasaData, setNasaData]= useState(null);

    const getNasaData = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=sbdyCaAnglC1gCZrckhg3ii4tfn905Aslnq5Wsox')
        .then(response => {
            //Actualizamos el estado con los datos recibidos
            setNasaData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("Hubo un error al obtener los datos: ",error);
        });
    };

    return(
        <div>
            <button onClick={getNasaData}>Obtener Imagen Nasa</button>
            {nasaData && (
                <div style={{color:'black'}}>
                    <h1>{nasaData.copyright}</h1>
                    <p style={{textAlign:'center'}}>Explanation: {nasaData.explanation}</p>
                    <img src={nasaData.url}></img>
                </div>
            )}
        </div>
    );

}

export default UsoAPI_Nasa;