import React from "react";
import { Marker } from "react-leaflet";

interface Device {
    _id: string;
    xid: string;
    name: string;
    dataSourceType: number;
    latitude: number;
    longitude: number;
}

interface DevicesListProps {
    devices: Device[];
}

const Markers: React.FC<DevicesListProps> = (devices: any) => {
    const position = devices.map(({ latitude, longitude }: any) => [
        latitude,
        longitude
    ]);

    return <Marker position={position} />;
};

export default Markers;
