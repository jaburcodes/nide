import React, { useState } from "react";
import * as L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Query } from "react-apollo";

import { devices } from "../../../graphql/queries";

import StyledHomeWrapper from "../../../utils/components/Home/Home";
import Intro from "../../../utils/components/Home/Map/Intro/Intro";
import Wrapper from "../../../utils/components/Home/Map/Wrapper/Wrapper";

import MapDetail from "./MapDetail";

interface Device {
    _id: string;
    xid: string;
    name: string;
    dataSourceType: number;
    latitude: number;
    longitude: number;
}

interface Props {
    lat: number;
    lng: number;
    zoom: number;
}

const MapHome: React.FC<Props> = props => {
    const [lat, setLat] = useState<number>(-25.4809);
    const [lng, setLng] = useState<number>(-49.3044);
    const [zoom, setZoom] = useState<number>(13);

    const [name, setName] = useState<string>("");

    const center: L.LatLngExpression = [lat, lng];

    return (
        <Query query={devices}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                const { devices } = data;

                return (
                    <StyledHomeWrapper>
                        <Intro>
                            <Wrapper>
                                <MapDetail
                                    name="Ponto ACME Ltda."
                                    pointNivel="Aceitável"
                                    pointX={0.394}
                                    pointY={0.452}
                                />
                            </Wrapper>
                        </Intro>
                        <Map center={center} zoom={zoom}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {devices.map((device: Device) => (
                                <Marker
                                    key={device._id}
                                    position={[
                                        device.latitude,
                                        device.longitude
                                    ]}
                                    onClick={() =>
                                        console.log("OIA O DEVICE", device)
                                    }
                                />
                            ))}
                        </Map>
                    </StyledHomeWrapper>
                );
            }}
        </Query>
    );
};

export default MapHome;
