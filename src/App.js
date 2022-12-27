import React, {useState} from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import MissionForm from "./components/MissionForm";
import MissionsList from "./components/MissionsList";

function App() {
  
  const [error, setError] = useState('');
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [missions, setMissions] = useState([]);

  const getData = () => {

    setIsFetchingData(true);

    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then(response => {
        setMissions(response.data);
        console.log("response:" + response.data);
        setIsFetchingData(false);
      })
      .catch(error => {
        console.log(`error  ${error}`)
        setError(error);
        setIsFetchingData(false);
    })
  };

  return (
    <div className="App">
      <h1>Space X Upcomming Missions</h1>
      <MissionForm getDataBtn={getData} isFetchingData={isFetchingData} />
      <MissionsList missionsDisplay={missions} errorDisplay={error} />
    </div>
  );
}

export default App;
