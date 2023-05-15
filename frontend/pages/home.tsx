import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { Col, Row } from "react-bootstrap";
import Map from "@/components/Map";

const home = () => {
  const router = useRouter();

  const getCookie = () => {
    let cookie: any = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie;
  };

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
