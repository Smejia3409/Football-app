import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Login from "../components/Login";
import Nav from "../components/Nav";
import { useRouter } from "next/navigation";
import startpage1 from "../public/media/startpage1.jpeg";

export default function Home() {
  const router = useRouter();

  return (
    <div className="vh-100 main-page">
      <Nav />

      <Container className="border border-success ">
        <Row className="h-100 main-sub-row ">
          <Col sm={12} md={6} className="d-flex  align-items-center ">
            <div>
              <h1 className="header headings">Where can football take you?</h1>
              <p className="sub-headings">
                A New York City Football social media ⚽️
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

      <br />

      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card
              className="light-attention"
              style={{ width: "30rem", height: "30rem" }}
            >
              <Card.Body>
                <Card.Title>New Adventure</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1378425/pexels-photo-1378425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  molestias quaerat ratione dolore reprehenderit recusandae
                  sapiente magni dolores. Mollitia nostrum illo libero
                  accusantium quod, aspernatur optio cumque nam voluptates
                  soluta.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="dark-attention"
              style={{ width: "30rem", height: "30rem" }}
            >
              <Card.Body>
                <Card.Title>Endless Memories</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1378425/pexels-photo-1378425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Card.Text>
                  Discover new places, meet new people, create unforgetable
                  moments
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
