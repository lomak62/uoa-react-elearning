import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styles from "../App.module.css"

function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <span className={styles.sectionSubtitle}>Επικοινωνία</span>
        <h2 className={styles.sectionTitle}>Επικοινωνήστε Μαζί μας</h2>

        <Row className="justify-content-center">
          <Col lg={8} xl={7}>
            <Form className="p-4 p-md-5 rounded-4 border border-light border-opacity-25" aria-label="Contact form">
              <Row className="g-3">
                <Col md={6}>
                  <Form.Label htmlFor="fullName">Ονοματεπώνυμο</Form.Label>
                  <Form.Control id="fullName" name="fullName" type="text" autoComplete="name" required />
                </Col>

                <Col md={6}>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control id="email" name="email" type="email" autoComplete="email" required />
                </Col>

                <Col xs={12}>
                  <Form.Label htmlFor="message">Μήνυμα</Form.Label>
                  <Form.Control id="message" name="message" as="textarea" rows={5} required />
                </Col>

                <Col xs={12} className="d-flex justify-content-end pt-2">
                  <Button type="submit" className={styles.button}>
                    Αποστολή
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection
