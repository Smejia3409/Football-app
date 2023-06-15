import React, { useEffect, useMemo, useState } from "react";

import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import mongoose from "mongoose";
import { IEvent, IField } from "@/types";

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

  const [fieldPage, setFieldPage] = useState<boolean>(false);

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
  const getField = () => {
    console.log(props.name);
    setFieldPage(!fieldPage);
    console.log(!fieldPage);
  };

  return (
    <>
      <MarkerF position={center} onClick={getField} />;
      <MarkerF
        position={{ lat: mymarker.lat, lng: mymarker.lng }}
        title="My location"
        icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        }}
      />
      {fieldPage && <FieldPage field={""} events={props.events} />}
    </>
  );
};

const FieldPage = (props: { field: string; events: IEvent[] }) => {
  let fieldEvents: IEvent[] = props.events.filter((event: IEvent) => {
    return event.field == props.field;
  });

  useEffect(() => {
    console.log(fieldEvents);
  }, [fieldEvents, props.events]);

  return (
    <div className="w-100 h-100 border border-success">
      <h3>{props.field}</h3>
      <div>
        {fieldEvents.map((event: IEvent) => {
          return (
            <div>
              <p>{event.event}</p>
              <p>{event.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Map;
