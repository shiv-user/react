import React,{useState,useEffect} from 'react';
import './App.css';
import Axios from "axios";
import Card from './Card'

function App() {
  const [details,setDetails] = useState({})
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;


const fetchDetails =async ()=>{
  const {data}= await Axios.get("https://api.covid19api.com/country/india?from=2020-01-01T00:00:00Z&to=todayT00:00:00Z")
  
  const details = data[data.length-1]
  setDetails(details)
  // console.log(details)
  console.log(details.Confirmed)
  // console.log(details.Recovered)
  // console.log(details.Deaths)

}
useEffect(() => {
  fetchDetails()
}, [])



  return (
    <div className="App">
      <header className="App-header">
     <Card details={details.Deaths} confirm = {details.Confirmed} recover = {details.Recovered}/>
      </header>
    </div>
  );
}

export default App;
