import React from "react";
import './positiveButton.css';

function positiveButton({label,buttonClass})
{
    return(
        <button className={buttonClass}>{label}</button>
    );
}

export default positiveButton;