import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { Col, Row } from "react-bootstrap";
import Map from "@/components/Map";
import { getCookie } from "@/cookies";
import mongoose from "mongoose";
import { IEvent, IField } from "@/interfaces";
import FieldList from "@/components/FieldList";
import axios from "axios";

//interface to handle data json format
interface IDataJson {
  data: IField[];
  eventData: IEvent[];
}

const home = (data: IDataJson) => {
  const router = useRouter();

  useEffect(() => {
    if (!getCookie()) {
      router.push("/");
    }

    console.log(data);
  });

  return (
    <div className="vh-100 border border-primary">
      <Nav />

      <Row className="h-100">
        <Col md={8} className="border border-danger">
          <Map fields={data.data} events={data.eventData} />
        </Col>

        <Col md={4} className="border border-success">
          <p>Fields</p>
          <FieldList fields={data.data} events={data.eventData} />
        </Col>
      </Row>
    </div>
  );
};

export async function getServerSideProps() {
  const fieldsRes = await fetch("http://localhost:3000/api/field");
  const eventsRes = await fetch("http://localhost:3000/api/event");

  let data = await fieldsRes.json();
  let eventData = await eventsRes.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data, eventData }, // will be passed to the page component as props
  };
}

export default home;
