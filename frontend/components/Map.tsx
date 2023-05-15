import React, { useMemo } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB48EYQNc8pXeMofgg5goiyX4scdMWNESI",
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
      zoom={10}
      center={{ lat: 40.73061, lng: -73.935242 }}
      mapContainerClassName="mapContainer"
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
