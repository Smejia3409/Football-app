import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { Col, Row } from "react-bootstrap";
import Map from "@/components/Map";
import { getCookie } from "@/cookies";

const home = () => {
  const router = useRouter();

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

export default home;
