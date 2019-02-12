import React, { useState } from "react";
import styled from "styled-components";
import * as L from "leaflet";
import { Children, Map, Marker, Popup, TileLayer } from "react-leaflet";

import StyledHomeWrapper from "../../utils/components/Home/Home";
import Intro from "../../utils/components/Home/Map/Intro/Intro";
// import Map from "../../utils/components/Home/Map/Map/Map";

import Title from "../../utils/styles/Title/Title";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 70%;
`;

// custom-component.js
interface MyPopupMarkerProps {
    children: Children;
    position: L.LatLngExpression;
}

interface MyMarker extends MyPopupMarkerProps {
    key: string;
}

const MyPopupMarker = ({ children, position }: MyPopupMarkerProps) => (
    <Marker position={position}>
        <Popup>
            <span>{children}</span>
        </Popup>
    </Marker>
);

interface MyMarkersListProps {
    markers: MyMarker[];
}

const MyMarkersList = ({ markers }: MyMarkersListProps) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ));
    return <div style={{ display: "none" }}>{items}</div>;
};

interface CustomComponentState {
    lat: number;
    lng: number;
    zoom: number;
}

class MapHome extends React.Component<{}, CustomComponentState> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13
    };

    render() {
        const center: L.LatLngExpression = [this.state.lat, this.state.lng];

        const markers: MyMarker[] = [
            {
                key: "marker1",
                position: [51.5, -0.1],
                children: "My first popup"
            },
            {
                key: "marker2",
                position: [51.51, -0.1],
                children: "My second popup"
            },
            {
                key: "marker3",
                position: [51.49, -0.05],
                children: "My third popup"
            }
        ];

        return (
            <StyledHomeWrapper>
                <Intro>
                    <Wrapper>
                        <Title color="black">
                            Para iniciar, selecione um ponto.
                        </Title>
                    </Wrapper>
                </Intro>
                <Map center={center} zoom={this.state.zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <MyMarkersList markers={markers} />
                </Map>
            </StyledHomeWrapper>
        );
    }
}

export default MapHome;
