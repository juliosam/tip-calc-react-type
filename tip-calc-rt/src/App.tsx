import { useState } from "react";
import { Bill } from "./components/Bill";
import { BillPerPerson } from "./components/BillPerPerson";
import { PeopleNumber } from "./components/PeopleNumber";
import { TipPercent } from "./components/TipPercent";
import { TipPerPerson } from "./components/TipPerPerson";

export const App = () => {

  const [bill, setBill] = useState(0)

  const [payersNumber, setPayersNumber] = useState(1)

  const [tipPercent,setTipPercent] = useState(0.15)

  return (
   <>
    <div className="App">
      <h3 className="spli">SPLI</h3>
      <h3 className="tter">TTER</h3>
      <div className="content">
        <div className="input-area">
          <Bill setBill={setBill}/> 
          <TipPercent setTipPercent={setTipPercent}/>
          <PeopleNumber setPayersNumber={setPayersNumber}/>
        </div>
        <div className="output-area">
          <BillPerPerson bill={bill} payersNumber={payersNumber}/>
          <TipPerPerson bill={bill} payersNumber={payersNumber} tipPercent={tipPercent}/>
        </div>
      </div>
    </div> 
   </>
  );
}

export default App;
