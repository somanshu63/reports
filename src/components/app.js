import React from "react";
import Data from "./data";
import RevenueGrowth from "./revenueGrowth";
import Sports from "./sports";
import Table from "./table";

function App() {
  return (
    <div className="container">
      <div className="flex sm-column">
        <h1>Reports</h1>
        <div className="timeframe">
          <label className="timeframe-label">Timeframe: </label>
          <input type="month" className="date" />
        </div>
      </div>
      <div className="flex w-95 md-column mt-1-5">
        <Data />
        <RevenueGrowth />
      </div>
      <div className="flex w-95 md-column mt-1-5">
        <Sports />
        <Table />
      </div>
    </div>
  );
}

export default App;
