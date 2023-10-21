import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//     { name: '1', uv: 4000 },
//     { name: '2', uv: 3000 },
//     { name: '3', uv: 2000 },
//   ];
const Chart = ({ data }) => {
    return (
        <div style={{ width: "100%" }} className="chart">
            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="index" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="balance" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
