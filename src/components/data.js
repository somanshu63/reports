import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
const data = [
  {
    uv: 200,
  },
  {
    uv: 100,
  },
  {
    uv: 300,
  },
  {
    uv: 0,
  },
  {
    uv: 150,
  },
  {
    uv: 100,
  },
  {
    uv: 300,
  },
  {
    uv: 400,
  },
  {
    uv: 500,
  },
  {
    uv: 300,
  },
  {
    uv: 350,
  },
];

function Data() {
  return (
    <div className="w-49 md-width-full box-con flex wrap">
      <div className="box box-sq">
        <h3>Active Batches</h3>
        <p className="data">22/43</p>
      </div>
      <div className="box box-sq">
        <h3>Total Bookings</h3>
        <p className="data">211</p>
      </div>
      <div className="box box-sq">
        <h3>No. of Coaches</h3>
        <p className="data">41</p>
      </div>
      <div className="box box-sq">
        <div className="flex lh-1">
          <h3>No. of Sports</h3>
          <span>
            <AiOutlineInfoCircle />
          </span>
        </div>
        <p className="data">8</p>
      </div>
      <div className="box box-sq">
        <h3>Reverse Share</h3>
        <p className="data">₹25,000</p>
        <div className="chart">
          <ResponsiveContainer width="100%" height={35}>
            <AreaChart
              width={140}
              height={35}
              data={data}
              margin={{
                bottom: 10,
              }}
            >
              <Area type="monotone" dataKey="uv" stroke="red" fill="#FEEDE6" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="box box-sq">
        <h3>Growth %</h3>
        <p className="data">+34%</p>
        <div className="chart">
          <ResponsiveContainer width="100%" height={35}>
            <AreaChart
              width={140}
              height={35}
              data={data}
              margin={{
                bottom: 10,
              }}
            >
              <Area type="monotone" dataKey="uv" stroke="red" fill="#FEEDE6" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
export default Data;
