import { Col, Container, Row } from "react-bootstrap";
import Login from "../components/Login";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <>
      <Container>
        {/* content */}
        <Nav />
        <Row>
          <Col sm={12} md={8} style={{ height: "100%" }}>
            <div>
              <h2>Where would football take you?</h2>
              <img
                src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={"100%"}
              />
            </div>
          </Col>
          <Col
            sm={12}
            md={4}
            style={{ width: "100" }}
            className=" d-flex justify-content-center align-items-center "
          >
            <Login />
          </Col>
        </Row>
      </Container>
    </>
  );
}
