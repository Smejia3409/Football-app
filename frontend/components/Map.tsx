import React, { useMemo } from "react";

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>loading...</div>;
  return (
    <div>
      <Gmap />
    </div>
  );
};

const Gmap = () => {
  const center = useMemo(() => ({ lat: 40.73061, lng: -73.935242 }), []);

  return (
    <GoogleMap
      zoom={11}
      center={{ lat: 40.73061, lng: -73.935242 }}
      mapContainerClassName="mapContainer"
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

//map markers
const Markers = () => {};

export default Map;
