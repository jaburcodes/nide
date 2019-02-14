import React from "react";
import { VictoryTheme, VictoryBar, VictoryLine, VictoryChart } from "victory";

import Sensor from "../../../../../utils/components/Dispositivos/Detail/Sensor/Sensor";

import MiniTitle from '../../../../../utils/styles/MiniTitle/MiniTitle'

interface DataType {
    x: number | string;
    y: number;
}

interface GraphProps { 
    name: string;
    data: DataType[]
}

const Graph: React.FC<GraphProps> = ({ name, data }) => {
    return (
        <Sensor>
            <MiniTitle color="black">Sensor {name}</MiniTitle>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 20 }}
                width={400}
                height={300}
            >
                <VictoryBar
                    barWidth={40}
                    style={{
                        data: {
                            fill: (data: any) => (data.y > 4 ? "#EB5757" : "#27AE60")
                        }
                    }}
                    data={data}
                    labels={(data: any) => data.y}
                />
                <VictoryLine interpolation="natural" data={data} />
            </VictoryChart>
        </Sensor>
    );
};

export default Graph;
