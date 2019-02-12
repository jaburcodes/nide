import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin } from "react-feather";
import * as L from "leaflet";
import { Children, Marker, Popup } from "react-leaflet";

const iconMarkup = renderToStaticMarkup(
    <MapPin fill="#FE0000" size={32} stroke="#000000" strokeWidth={1} />
);

const customMarkerIcon = L.divIcon({
    html: iconMarkup
});

interface PopupMarkerProps {
    children: Children;
    position: L.LatLngExpression;
    icon: L.DivIcon;
}

interface MyMakers extends PopupMarkerProps {
    key: string;
}

const MyPopupMarker = ({ children, position }: PopupMarkerProps) => (
    <Marker position={position} icon={customMarkerIcon}>
        <Popup>
            <span>{children}</span>
        </Popup>
    </Marker>
);

interface MarkersListProps {
    markers: MyMakers[];
}

const MarkersList = ({ markers }: MarkersListProps) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ));
    return <div style={{ display: "none" }}>{items}</div>;
};

const Markers: React.FC = () => {
    const markers: MyMakers[] = [
        {
            key: "marker1",
            position: [51.5, -0.1],
            children: "My first popup",
            icon: customMarkerIcon
        },
        {
            key: "marker2",
            position: [51.51, -0.1],
            children: "My second popup",
            icon: customMarkerIcon
        },
        {
            key: "marker3",
            position: [51.49, -0.05],
            children: "My third popup",
            icon: customMarkerIcon
        }
    ];

    return <MarkersList markers={markers} />;
};

export default Markers;
