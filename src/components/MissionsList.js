import React from "react";
import "../styles/MissionsListStyles.css";

const MissiosnList = (props) => {
    return (
        <div className="missions">{
            props.errorDisplay ? (
                <p>Erorr: {props.errorDisplay} </p>
            ) : (
                props.missionsDisplay.map(mission => (
                    <div>
                        <h2>{mission.mission_name}</h2>
                        <p>{mission.description}</p>
                    </div>
                ))
            )
        }
        </div>
    );
};

export default MissiosnList