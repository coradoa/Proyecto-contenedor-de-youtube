import React from "react";

import './contenedorYoutube.css';

function contenedorYoutube({titulo, fechapubli,antiguedad,iconoCanal,nombrecanal,cantsubs,descripcion}){
    //Pueden colocar JS
    function mostrarMas(e){
        e.preventDefault();
       // e.target.previousSibling.style.maxHeight='none';
       document.getElementById("parrafo").style.maxHeight='none';
        e.target.style.display ='none';
    }

    return( //pueden colocar HTML (JSX)
       <div>
        <div className="contenerdorYoutube">
        <iframe 
            width="70%" 
            height="600px" 
            src="https://www.youtube.com/embed/HNW2ACJgvgQ?si=kPlMTibGDX6KJbdc" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
        </div>

        <div className="contenedorBase">
            <h3>{titulo}</h3>
            <h4>{fechapubli}-{antiguedad}</h4>
            
            
            <div style={{textAlign:'left' , marginLeft: '10px'}}>
                <div className="iconoCanal">
                    <img id="imagen" src={iconoCanal}/>
                </div>
                <div className="iconoCanal">
                <h4>{nombrecanal} - {cantsubs}</h4>
                </div>
            </div>
            
            <p style={{maxHeight:'20px', overflow:'hidden'}} id="parrafo">
                {descripcion}
            </p>
            <a href='#' onClick={mostrarMas}>Mostrar más</a>
        </div>

       </div> 
    );

}

export default contenedorYoutube;