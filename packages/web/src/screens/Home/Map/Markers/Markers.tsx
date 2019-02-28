import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin } from "react-feather";
import * as L from "leaflet";
import { Children, Marker, Popup } from "react-leaflet";

const redIconMarkup = renderToStaticMarkup(
    <MapPin fill="#FE0000" size={32} stroke="#000000" strokeWidth={1} />
);

const customRedMarkerIcon = L.divIcon({
    html: redIconMarkup
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
    <Marker position={position} icon={customRedMarkerIcon}>
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
            position: [-25.4825, -49.3042],
            children: "My first popup",
            icon: customRedMarkerIcon
        },
        {
            key: "marker2",
            position: [-25.4801, -49.3049],
            children: "My second popup",
            icon: customRedMarkerIcon
        },
        {
            key: "marker3",
            position: [-25.4816, -49.3040],
            children: "My third popup",
            icon: customRedMarkerIcon
        }
    ];

    return <MarkersList markers={markers} />;
};

export default Markers;
