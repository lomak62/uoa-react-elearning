import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "../App.module.css"
import { TestimonialQuote } from "./StyledParagraphs"

function TestimonialsSection() {
  return (
    <section id="testimonials" className={`${styles.section} bg-black bg-opacity-25`}>
      <Container>
        <span className={styles.sectionSubtitle}>Τι λένε οι πελάτες μας</span>
        <h2 className={styles.sectionTitle}>Εμπιστοσύνη που χτίζεται</h2>

        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <figure className="mx-auto text-center px-3 px-md-5 py-4" style={{ maxWidth: 700 }}>
              <blockquote>
                <TestimonialQuote>
                  Η ομάδα κατάφερε να μεταφράσει το όραμά μας σε ένα website που πραγματικά αντιπροσωπεύει το brand μας.
                  Κάθε λεπτομέρεια ήταν προσεγμένη και η επικοινωνία άψογη καθ' όλη τη διάρκεια του project.
                </TestimonialQuote>
              </blockquote>

              <figcaption className={styles.testimonialAuthor}>
                <strong className={styles.authorName}>Μαρία Παπαδοπούλου</strong>
                Creative Director, Studio Minimal
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TestimonialsSection
