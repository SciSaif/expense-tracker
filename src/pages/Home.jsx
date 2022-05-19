import React from "react";
import Add from "../components/Add";
import Expenses from "../components/Expenses";

function Home() {
  return (
    <div className="max-w-[600px] mx-auto ">
      <Add />
      <Expenses />
    </div>
  );
}

export default Home;
