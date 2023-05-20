import React, { useMemo } from "react";

import {
  GoogleMap,
  MarkerF,
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
      {/* <Marker position={center} /> */}
      {/* <MapMarkers lat={40.73061} lng={-73.935242} /> */}
    </GoogleMap>
  );
};

//map markers
const MapMarkers = (props: { lat: any; lng: any }) => {
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);

  return <MarkerF position={center} />;
};

export async function getServerSideProps() {
  const res = "";
}

export default Map;
