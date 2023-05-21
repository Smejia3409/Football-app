import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { Col, Row } from "react-bootstrap";
import Map from "@/components/Map";
import { getCookie } from "@/cookies";
import mongoose from "mongoose";
import { IField } from "@/types";
import FieldList from "@/components/FieldList";

//interface to handle data json format
interface IDataJson {
  data: IField[];
}

const home = (data: IDataJson) => {
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
          <Map fields={data.data} />
        </Col>

        <Col md={4} className="border border-success">
          <p>Fields</p>
          <FieldList fields={data.data} />
        </Col>
      </Row>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/field/getFields");
  let data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default home;
