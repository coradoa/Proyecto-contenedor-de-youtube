import React from "react";
import './postBlog.css';

function postBlog({imagen,imgName,imgClass,parra,buttonClass,label})
{
   return (
        <div>  
            <img src={imagen} alt={imgName} className={imgClass}></img>
            <p>{parra}</p>
            <button className={buttonClass}>{label}</button>
        </div>
   );

}

export default postBlog;