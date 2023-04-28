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
          <Col sm={12} md={8}>
            content
          </Col>
          <Col sm={12} md={4}>
            <Login />
          </Col>
        </Row>
      </Container>
    </>
  );
}
