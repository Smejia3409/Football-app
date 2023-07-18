import { Button, Col, Container, Row } from "react-bootstrap";
import Login from "../components/Login";
import Nav from "../components/Nav";
import { useRouter } from "next/navigation";
import startpage1 from "../public/media/startpage1.jpeg";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Nav />

      <Container className="vh-100">
        <Row className="">
          <Col sm={12} md={6} className="d-flex  align-items-center ">
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
            md={6}
            style={{ width: "100" }}
            className=" d-flex justify-content-center align-items-center border border-danger"
          >
            {/* <Login /> */}
            <img
              src="https://images.pexels.com/photos/2935982/pexels-photo-2935982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
