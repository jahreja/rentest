import { useEffect, useState } from "react";
import './App.css';

function App() {

  return (
    <div>
      <NamePicker />
    </div>
  );
}

export default App;

function NamePicker() {
  const [income, setIncome] = useState(0);
  const [monthly, setMonthly] = useState();
  const [location, setLocation] = useState("");
  const [multiplier, setMultiplier] = useState();
  

  useEffect(() => {
    setMonthly((income / 12).toFixed());
  }, [income]);

  useEffect(() => {
    if (location === "North West") {
      setMultiplier(28.7)
    } else if (location === "North East") {
      setMultiplier(24.4)
    } else if (location === "South West") {
      setMultiplier(32.5)
    } else if (location === "South East") {
      setMultiplier(31.8)
    } else if (location === "London") {
      setMultiplier(35.9)
    } else if (location === "Scotland") {
      setMultiplier(27)
    } else if (location === "Wales") {
      setMultiplier(28.7)
    } else if (location === "Other") {
      setMultiplier(29.7)
      setLocation("UK")
    }
  }, [location])

  return(
    <div id="page">
      <h1>RentEst</h1>
      <div id="main">
      <h3>Enter your yearly income (after tax):</h3>
      <input type="number" value={income} onChange={(event) => {setIncome(event.target.value)}} />
      <h3>£{income} is £{monthly} per month.</h3>
      <h3>Select your location:</h3>
      <select name="location" id="location" onChange={(event) => {setLocation(event.target.value)}}>
        <option value="">Select an option...</option>
        <option value="North West">North West</option>
        <option value="North East">North East</option>
        <option value="South West">South West</option>
        <option value="South East">South East</option>
        <option value="London">London</option>
        <option value="Scotland">Scotland</option>
        <option value="Wales">Wales</option>
        <option value="Other">Other</option>
      </select>
      <h3>Recommended rent per month: <span id="range">£{(monthly * ((multiplier - 5) / 100)).toFixed()} - £{(monthly * ((multiplier + 5) / 100)).toFixed()}</span></h3>
      <a href="http://jacktaylor.works" target="_blank" rel="noreferrer"><h4>Created by Jack Taylor</h4></a>
      </div>
    </div>
  );

}