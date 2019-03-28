import React, { useState } from "react";
import * as L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Query } from "react-apollo";

import { devices } from "../../../graphql/queries";

import StyledHomeWrapper from "../../../utils/components/Home/Home";
import Intro from "../../../utils/components/Home/Map/Intro/Intro";
import Wrapper from "../../../utils/components/Home/Map/Wrapper/Wrapper";
import Title from "../../../utils/styles/Title/Title";

import MapDetail from "./Detail/MapDetail";

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
    const [device, setDevice] = useState<string>("");

    const onDevice = (_id: string) => {
        setDevice(_id);
        console.log(device);
    };

    const center: L.LatLngExpression = [lat, lng];

    return (
        <Query query={devices}>
            {({ loading, error, data }) => {
                if (loading) return "";
                if (error) return `Error! ${error.message}`;

                const { devices } = data;

                return (
                    <StyledHomeWrapper>
                        <Intro>
                            <Wrapper>
                                {(device === "" && (
                                    <Title color="black">
                                        Para iniciar selecione um ponto.
                                    </Title>
                                )) || <MapDetail _id={device} />}
                            </Wrapper>
                        </Intro>
                        <Map center={center} zoom={zoom}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {devices.map(
                                ({ _id, latitude, longitude }: Device) => (
                                    <Marker
                                        key={_id}
                                        position={[latitude, longitude]}
                                        onClick={() => onDevice(_id)}
                                    />
                                )
                            )}
                        </Map>
                    </StyledHomeWrapper>
                );
            }}
        </Query>
    );
};

export default MapHome;
