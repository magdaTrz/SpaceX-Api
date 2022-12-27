import React from "react";

const MissiosnList = (props) => {
    return (
        <div>
        {
            props.errorDisplay ? (
                <p>Erorr: {props.errorDisplay} </p>
            ) : (
                props.missionsDisplay.map(mission => (
                    <div>
                        <h2>{mission.mission_name}</h2>
                    </div>
                ))
            )
        }
        </div>
    );
};

export default MissiosnList