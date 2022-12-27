import {useState} from "react";
import "../styles/MissionsListStyles.css";

const MissiosnList = (props) => {

    const [isReadMoreShown, setReadMoreShown] = useState(false);

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState);
    };

    return (
        <div className="missions">{
            props.errorDisplay ? (
                <p>Erorr: {props.errorDisplay} </p>
            ) : (
                props.missionsDisplay.map(mission => (
                    <div className=" mission">
                        <h2>{mission.mission_name}</h2>
                        <p>{mission.description.substr(0, 200)}</p>
                        {/* {isReadMoreShown ? mission.description : mission.description.substr(0, 200)}*/
                        
                        <button onClick={toggleBtn}> {isReadMoreShown ? 'Czytaj mniej...' : '...Czytaj wiecej'}</button>}
                    </div> 
                ))
            )
        }
        </div>
    );
};

export default MissiosnList