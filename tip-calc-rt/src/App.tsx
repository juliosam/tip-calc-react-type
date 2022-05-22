import { useState } from "react";
import { Bill } from "./components/Bill";

export const App = () => {

  const [bill, setBill] = useState(0)

  return (
   <>
    <div className="App">
      <h1>SPLI</h1>
      <h1>TTER</h1>
      <div className="content">
        <div className="input-area">
          <Bill setBill={setBill}/> 
        </div>
        <div className="output-area">
        </div>
      </div>
    </div> 
   </>
  );
}

export default App;
