import { Button, Col, Container, Row } from "react-bootstrap";
import Login from "../components/Login";
import Nav from "../components/Nav";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Nav />

      <Container className="vh-100">
        <Row className="">
          <Col sm={12} md={8} className="d-flex  align-items-center ">
            <div>
              <h1 className="header">Where can football take you?</h1>
              <p className="">
                The first ever New York City Football social media ⚽️
              </p>
              <Row className="">
                <Col sm={6} md={6} lg={6}>
                  <Button
                    variant="success"
                    onClick={() => {
                      router.push("/home");
                    }}
                  >
                    Find a pick-up
                  </Button>
                </Col>

                <Col sm={6} md={6} lg={6}>
                  <Button
                    variant="outline-success"
                    onClick={() => router.push("/register")}
                  >
                    Join for free
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            sm={12}
            md={4}
            style={{ width: "100" }}
            className=" d-flex justify-content-center align-items-center "
          >
            {/* <Login /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
