import React, { useMemo } from "react";

import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import mongoose from "mongoose";
import { IField } from "@/types";

const Map = (props: { fields: IField[] }) => {
  let apikey: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apikey,
  });

  if (!isLoaded) return <div>loading...</div>;
  return (
    <div>
      <Gmap fields={props.fields} />
    </div>
  );
};

const Gmap = (props: { fields: IField[] }) => {
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
          />
        );
      })}
    </GoogleMap>
  );
};

//map markers
const MapMarkers = (props: { lat: any; lng: any; name: string }) => {
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);

  const getField = () => {
    console.log(props.name);
  };

  return <MarkerF position={center} onClick={getField} />;
};

export default Map;
