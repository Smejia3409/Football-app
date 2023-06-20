import React, { useEffect, useMemo, useState } from "react";

import {
  GoogleMap,
  InfoBoxF,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import mongoose from "mongoose";
import { IEvent, IField } from "@/interfaces";

const Map = (props: { fields: IField[]; events: IEvent[] }) => {
  let apikey: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apikey,
  });

  if (!isLoaded) return <div>loading...</div>;

  console.log(props.events);

  return (
    <div>
      <Gmap fields={props.fields} events={props.events} />
    </div>
  );
};

const Gmap = (props: { fields: IField[]; events: IEvent[] }) => {
  const center = useMemo(() => ({ lat: 40.73061, lng: -73.935242 }), []);
  const fields = props.fields;

  return (
    <GoogleMap
      zoom={11}
      center={{ lat: 40.73061, lng: -73.935242 }}
      mapContainerClassName="mapContainer"
    >
      {fields.map((field: IField) => {
        return (
          <MapMarkers
            key={field._id.toString()}
            lat={Number(field.lat)}
            lng={Number(field.lng)}
            name={field.name}
            events={props.events}
          />
        );
      })}
    </GoogleMap>
  );
};

//map markers
const MapMarkers = (props: {
  lat: any;
  lng: any;
  name: string;
  events: IEvent[];
}) => {
  interface ImyCoordinates {
    lat: number;
    lng: number;
  }

  const events = props.events.filter((event: IEvent) => {
    return event.field === props.name;
  });

  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  const [mymarker, setMyMarker] = useState<ImyCoordinates>({
    lat: -0,
    lng: -0,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  });
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);

  return (
    <>
      <MarkerF
        position={center}
        onClick={() => {
          setSelectedMarker(center);
        }}
      />

      {selectedMarker && (
        <InfoWindowF
          position={center}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
            <p>{props.name}</p>
            <p># of events: {events.length} </p>
          </div>
        </InfoWindowF>
      )}
      {/* my location marker */}
      <MarkerF
        position={{ lat: mymarker.lat, lng: mymarker.lng }}
        title="My location"
        icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        }}
      />
    </>
  );
};

// const FieldPage = (props: { field: string; events: IEvent[] }) => {

//   return (
//     <InfoWindowF>
//       <h3>{props.field}</h3>
//       <p># of events: {props.events.length}</p>

//     </InfoWindowF>
//   );
// };

export default Map;
