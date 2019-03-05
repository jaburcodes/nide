import React from "react";
import * as L from "leaflet";
import { Marker } from "react-leaflet";

type Position = [number, number];

interface MyDevices {
    position: Position;
}

interface DevicesListProps {
    devices: MyDevices[];
}

const DevicesList = ({ devices }: DevicesListProps) => {
    const position = devices.map(({ latitude, longitude }: any) => [
        latitude,
        longitude
    ]);

    return <Marker position={position} />;
};

const Markers: React.FC = ({ devices }: DevicesListProps) => (
    <DevicesList devices={devices} />
);

export default Markers;
