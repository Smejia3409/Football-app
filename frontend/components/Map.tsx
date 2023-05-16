import React, { useMemo } from "react";

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

const Map = () => {
  let apikey: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apikey,
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
