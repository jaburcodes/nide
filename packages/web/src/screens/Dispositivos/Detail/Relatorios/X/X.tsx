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
    { name: "Jan", uv: 920, pv: 300, amt: 400 },
    { name: "Fev", uv: 868, pv: 467, amt: 506 },
    { name: "Mar", uv: 197, pv: 598, amt: 489 },
    { name: "Abr", uv: 430, pv: 700, amt: 328 },
    { name: "Mai", uv: 320, pv: 108, amt: 200 }
];

const X = () => (
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

export default X;
