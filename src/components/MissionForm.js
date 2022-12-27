import React from "react";

//whatever ? true : false

const MissionForm = (props) => {
    return (
        <div>
            {
                props.ifFetchingData ? 
                (<p>Loading upcomming missions...</p>) : 
                (<button onClick= {props.getDataBtn}> Get updated missions </button>)
            }
        </div>
    );
}

export default MissionForm