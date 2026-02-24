import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./ContactSection.css";

const ContactCard = (props: any) => (
  <Col md={4}>
    <Card
      bg="transparent"
      text="white"
      className="text-sm-start text-md-center px-4"
    >
      <p className="mb-1">
        <i className={"bi me-1 " + props.icon}></i>{" "}
        <a href={props.link} className="link-light text-decoration-none">
          {props.description}
        </a>
      </p>
    </Card>
  </Col>
);

const ContactFooter = (props: any) => (
  <footer className="contact-footer">
    <p className="text-center text-secondary">
      &copy; {new Date().getFullYear()} {props.companyName}. All rights
      reserved.
    </p>
  </footer>
);

function ContactSection(props: any) {
  return (
    <section className="contact-section overflow-hidden pt-5">
      <Container className="col-lg-8">
        <header className="mx-auto text-center text-white pb-5">
          <p className="contact-name lead fw-semibold">{props.shopName}</p>
          <h2 className="contact-title fw-semibold mb-3">{props.title}</h2>
          <p className="lead">{props.subtitle}</p>
        </header>
      </Container>

      <Row className="contact-row bg-black bg-opacity-75 py-3 justify-content-center">
        <ContactCard
          icon={props.contact.icon}
          link={props.contact.link}
          description={props.contact.description}
        />
        <ContactCard
          icon={props.shopping.icon}
          link={props.shopping.link}
          description={props.shopping.description}
        />
        <ContactCard
          icon={props.location.icon}
          link={props.location.link}
          description={props.location.description}
        />
      </Row>

      <Row className="footer-row p-2 bg-black">
        <ContactFooter companyName={props.footer.companyName} />
      </Row>
    </section>
  );
}
export default ContactSection;
