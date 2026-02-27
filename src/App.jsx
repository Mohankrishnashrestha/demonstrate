import React, { useState } from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
function App() {
  const [state,setState]=useState();
  setState("my name is dfds")
  console.log(state);
  const fruits = [{ name: "mango", price: 140 }];
  return (
    <div>
      <Navbar name={fruits} />
      <Footer />
    </div>
  );
}

export default App;
