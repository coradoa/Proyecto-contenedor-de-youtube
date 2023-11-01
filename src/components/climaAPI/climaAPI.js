import React, { useState } from "react";
import axios from "axios";

function ClimaAPI(){
    //Estado para almacenar los datos del clima
    const [weatherData, setWeatherData]= useState(null);

    //funcion para hacer la solicitud a la API
    const getWeatherData = () => {
        axios.get('https://api.weatherapi.com/v1/current.json?key=614a6dbb71474167937164438233008&q=Guatemala&aqi=no')
        .then(response => {
            //Actualizamos el estado con los datos recibidos
            setWeatherData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("Hubo un error al obtener los datos: ",error);
        });
    };

    return(
        <div>
            <button onClick={getWeatherData}>Obtener Clima</button>
            {/* Mostrar los datos si existen */}
            {weatherData && (
                <div style={{color:'black'}}>
                    <h1 style={{textAlign:'center'}}>{weatherData.location.name} - {weatherData.location.country}</h1>
                    <p style={{textAlign:'center'}}>Temperatura: {weatherData.current.temp_c}ºC</p>
                </div>
            )}
        </div>
    );
}
export default ClimaAPI;