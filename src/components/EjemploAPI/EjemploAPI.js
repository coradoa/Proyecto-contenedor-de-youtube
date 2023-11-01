import React, { useState } from "react";
import axios from "axios";


function EjemploAPI(){
    const [dato, setDato] = useState();


    const peticionAPI =() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')//es para jalar codigo json
        .then(response=>{
                console.log(response.data);
                setDato(response.data.title);
            });//response es una variable que se usa para apis
    }

    return(
        <div>
            <h1>USO DE APIs</h1>
            <button onClick={peticionAPI} >Quiero usar mi API</button>
            <p style={{textAlign:'center', color:'black'}}>{dato}</p>
        </div>

    );


}

export default EjemploAPI;