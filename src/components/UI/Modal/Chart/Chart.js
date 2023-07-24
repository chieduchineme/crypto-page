import React from "react";
import { Area, AreaChart, Tooltip, ResponsiveContainer } from "recharts";

const DataChart = (props) => {

  const chartData = props.xLabels.map((date, index) => ({
    date: date,
    price: props.yLabels[index],
  }));

  return (
    <div id="chart" style={{ width: "95%", height: 200 }}>
      <ResponsiveContainer>
      <AreaChart width={730} height={250} data={chartData}
          margin={{ top: 70, right: 30, left: 0, bottom: 0 }}>
          <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#ff8c00" fillOpacity={0.5} fill="#fff9da" />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataChart;
