import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { Col, Row } from "react-bootstrap";
import Map from "@/components/Map";
import { getCookie } from "@/cookies";

interface IField {
  name: string;
  lat: string;
  lng: string;
}

const home = (data: IField[]) => {
  const router = useRouter();

  console.log(data);

  useEffect(() => {
    if (!getCookie()) {
      router.push("/");
    }
  });

  return (
    <div className="vh-100 border border-primary">
      <Nav />

      <Row className="h-100">
        <Col md={8} className="border border-danger">
          <Map />
        </Col>

        <Col md={4} className="border border-success">
          field list
        </Col>
      </Row>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/field/getFields");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default home;
