import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./ProductsSection.css";

const ProductCard = (props: any) => (
  <Col xs={6} md={4} lg={3}>
    <Card className="product-card h-100 text-center border border-1 border-opacity-10">
      <Card.Img src={props.image} alt={props.title} className="product-image" />
      <Card.Body>
        <Card.Title role="button" className="product-title h5 mb-3">
          {props.title}
        </Card.Title>
        <Card.Text className="mb-0">{props.price.toFixed(2)} €</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

function ProductsSection(props: any) {
  return (
    <section className="products-section py-5">
      <Container>
        <header className="mx-auto text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">
            {props.sectionTitle}
          </h2>
          <p className="lead text-muted">{props.sectionSubtitle}</p>
        </header>
        <Row className="gy-4">
          <ProductCard
            image={props.card1.image}
            title={props.card1.title}
            price={props.card1.price}
          />
          <ProductCard
            image={props.card2.image}
            title={props.card2.title}
            price={props.card2.price}
          />
          <ProductCard
            image={props.card3.image}
            title={props.card3.title}
            price={props.card3.price}
          />
          <ProductCard
            image={props.card4.image}
            title={props.card4.title}
            price={props.card4.price}
          />
          <ProductCard
            image={props.card5.image}
            title={props.card5.title}
            price={props.card5.price}
          />
          <ProductCard
            image={props.card6.image}
            title={props.card6.title}
            price={props.card6.price}
          />
          <ProductCard
            image={props.card7.image}
            title={props.card7.title}
            price={props.card7.price}
          />
          <ProductCard
            image={props.card8.image}
            title={props.card8.title}
            price={props.card8.price}
          />
        </Row>
      </Container>
    </section>
  );
}

export default ProductsSection;
