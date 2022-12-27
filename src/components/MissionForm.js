import React from "react";

const MissionForm = (props) => {
    return (
        <div>
            <button onClick= {props.getDataBtn}> Get updated missions </button>
        </div>
    );
}

export default MissionForm