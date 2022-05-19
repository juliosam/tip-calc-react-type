import { useState } from "react";
import { Bill } from "./components/Bill";

function App() {

  const [bill, setBill] = useState(0)

  return (
   <>
     <h1>SPLI</h1>
     <h1>TTER</h1>
     <Bill ></Bill>        
      {/* bill={bill} */}
   </>
  );
}

export default App;
