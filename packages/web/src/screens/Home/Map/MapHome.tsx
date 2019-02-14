import React, { useState } from "react";
import * as L from "leaflet";
import { Map, TileLayer } from "react-leaflet";

import StyledHomeWrapper from "../../../utils/components/Home/Home";
import Intro from "../../../utils/components/Home/Map/Intro/Intro";
import Wrapper from "../../../utils/components/Home/Map/Wrapper/Wrapper";

import Title from "../../../utils/styles/Title/Title";

import Markers from "./Markers/Markers";

interface Props {
    lat: number;
    lng: number;
    zoom: number;
}

const MapHome: React.FC<Props> = props => {
    const [lat, setLat] = useState<number>(51.505);
    const [lng, setLng] = useState<number>(-0.09);
    const [zoom, setZoom] = useState<number>(13);

    const center: L.LatLngExpression = [lat, lng];

    return (
        <StyledHomeWrapper>
            <Intro>
                <Wrapper>
                    <Title color="black" fontSize={1.4}>
                        Para iniciar, selecione um ponto.
                    </Title>
                </Wrapper>
            </Intro>
            <Map center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Markers />
            </Map>
        </StyledHomeWrapper>
    );
};

export default MapHome;
