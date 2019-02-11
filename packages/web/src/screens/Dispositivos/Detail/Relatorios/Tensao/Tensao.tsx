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
    { name: "Jan", uv: 290, pv: 700, amt: 200 },
    { name: "Fev", uv: 568, pv: 167, amt: 706 },
    { name: "Mar", uv: 897, pv: 298, amt: 889 },
    { name: "Abr", uv: 480, pv: 700, amt: 528 },
    { name: "Mai", uv: 920, pv: 108, amt: 400 }
];

const Tensao = () => (
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

export default Tensao;
