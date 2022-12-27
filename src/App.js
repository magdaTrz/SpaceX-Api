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
    console.log("botton pushed");
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then(response => {
        console.log('response: ' + response)
      })
      .catch(error => {
      console.log(`error  ${error}`)
      setError(error);
    })
  }

  return (
    <div className="App">
      <h1>Space X Upcomming Missions</h1>
      <MissionForm getDataBtn={getData} />
      <MissionsList name={"balasdad"} />
    </div>
  );
}

export default App;
