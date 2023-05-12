import React from "react";
import { BsChevronDown } from "react-icons/bs";

function RevenueGrowth() {
  return (
    <div className="w-49 md-width-full box growth-box">
      <div className="flex">
        <h3>Revenue Growth</h3>
        <div className="yearly flex lh-1">
          <span>Yearly </span>
          <BsChevronDown className="down-arrow" />
        </div>
      </div>
      <hr></hr>
      <div className="flex mtb-1">
        <div className="flex flex-col h-125 range">
          <span className="growth-range">40000</span>
          <span className="growth-range">30000</span>
          <span className="growth-range">20000</span>
          <span className="growth-range">10000</span>
          <span className="growth-range">0</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col">
            <div className="scale-full jan"></div>
          </div>
          <span className="month">Jan</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col">
            <div className="scale-full feb"></div>
          </div>
          <span className="month">Feb</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col">
            <div className="scale-full mar"></div>
          </div>
          <span className="month">Mar</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col">
            <div className="scale-full apr"></div>
          </div>
          <span className="month">Apr</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col">
            <div className="scale-full may"></div>
          </div>
          <span className="month">May</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col"></div>
          <span className="month">Jun</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col"></div>
          <span className="month">Jul</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col"></div>
          <span className="month">Aug</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col"></div>
          <span className="month">Sep</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col"></div>
          <span className="month">Oct</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col"></div>
          <span className="month">Nov</span>
        </div>
        <div>
          <div className="scale-emp flex flex-col"></div>
          <span className="month">dec</span>
        </div>
      </div>
    </div>
  );
}

export default RevenueGrowth;
