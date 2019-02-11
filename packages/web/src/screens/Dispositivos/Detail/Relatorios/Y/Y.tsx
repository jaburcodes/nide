import React from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import Sensor from "../../../../../utils/components/Dispositivos/Detail/Sensor/Sensor";

const data = [
    { name: "Jan", uv: 590, pv: 800, amt: 400 },
    { name: "Fev", uv: 868, pv: 967, amt: 206 },
    { name: "Mar", uv: 397, pv: 398, amt: 989 },
    { name: "Abr", uv: 480, pv: 200, amt: 228 },
    { name: "Mai", uv: 520, pv: 1108, amt: 100 }
];

const Y = () => (
    <Sensor>
        <ComposedChart
            width={320}
            height={200}
            data={data}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
    </Sensor>
);

export default Y;
