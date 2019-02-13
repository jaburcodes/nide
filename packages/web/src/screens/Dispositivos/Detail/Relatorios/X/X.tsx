import React from "react";
import { VictoryTheme, VictoryBar, VictoryLine, VictoryChart } from "victory";

import Sensor from "../../../../../utils/components/Dispositivos/Detail/Sensor/Sensor";

const X = () => {
    const data = [
        { x: 1, y: 2 },
        { x: 5, y: 3 },
        { x: 3, y: 4 },
        { x: 6, y: 5 }
    ];

    return (
        <Sensor>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 20 }}
                width={600}
            >
                <VictoryBar
                    barWidth={40}
                    style={{
                        data: {
                            fill: (d: any) => (d.y > 4 ? "#EB5757" : "#27AE60")
                        }
                    }}
                    data={data}
                    labels={(d: any) => d.x}
                />
                <VictoryLine interpolation="natural" data={data} />
            </VictoryChart>
        </Sensor>
    );
};

export default X;
