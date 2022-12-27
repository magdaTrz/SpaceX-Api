import React from "react";
import "../styles/MissionFormStyles.css";

//whatever ? true : false

const MissionForm = (props) => {
    return (
        <div>
            {
                props.ifFetchingData ? 
                (<p>Ładowanie danych o misji...</p>) : 
                (<button onClick= {props.getDataBtn}> Pobierz dane o misjach </button>)
            }
        </div>
    );
}

export default MissionForm