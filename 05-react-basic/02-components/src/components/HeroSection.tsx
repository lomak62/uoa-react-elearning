import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./HeroSection.css";

function HeroSection(props: any) {
  return (
    <header className="hero-section overflow-hidden py-4 py-md-0">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={8} className="mx-auto text-center">
            <img
              src={props.imgSrc}
              className="mb-1 mb-md-4"
              alt="Baker Fresh Cake Shop"
            />
            <h1 className="display-1 fw-bold text-white mb-1 mb-md-4">
              {props.shopName}
            </h1>
            <p className="display-6 lead text-white mb-3 mb-md-5">
              {props.tagline}
            </p>
            <Button size="lg" className="border-0 px-md-5 py-md-3 fw-semibold">
              {props.btnText}
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default HeroSection;
