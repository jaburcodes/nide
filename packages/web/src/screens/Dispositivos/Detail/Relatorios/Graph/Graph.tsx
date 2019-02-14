import React from "react";
import { VictoryTheme, VictoryBar, VictoryLine, VictoryChart } from "victory";
import moment from 'moment';

import Sensor from "../../../../../utils/components/Dispositivos/Detail/Sensor/Sensor";

const lastMonths = moment("07/2017", "MM/YYYY").subtract(1, 'months').format('YYMM');

interface DataType {
    x: number;
    y: number;
}

interface GraphProps { 
    name: string;
    data: DataType[]
}

const Graph: React.FC<GraphProps> = ({ name, data }) => {
    return (
        <Sensor>
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
                    labels={(data: any) => data.x}
                />
                <VictoryLine interpolation="natural" data={data} />
            </VictoryChart>
        </Sensor>
    );
};

export default Graph;
