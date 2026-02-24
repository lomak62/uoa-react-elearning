import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled, { css } from "styled-components"
import styles from "../App.module.css"
import { FeatureText } from "./StyledParagraphs"

// Styled component για τα feature titles με conditional styling για διαφορετικά χρώματα
const FeatureTitle = styled.h3<{ $gold?: boolean; $sage?: boolean; $rose?: boolean }>`
  font-family: Georgia, "Times New Roman", Times, serif;
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: #e8e4df;

  ${(props) =>
    props.$gold &&
    css`
      color: #c9a87c;
    `}
  ${(props) =>
    props.$sage &&
    css`
      color: #7d9a78;
    `}
  ${(props) =>
    props.$rose &&
    css`
      color: #c4a3a3;
    `}
`

function FeaturesSection() {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <span className={styles.sectionSubtitle}>Τι προσφέρουμε</span>
        <h2 className={styles.sectionTitle}>Οι Υπηρεσίες μας</h2>

        <Row className="g-4">
          <Col md={6} lg={4}>
            <article className={`h-100 p-4 rounded-4 ${styles.featureCard}`}>
              <FeatureTitle $gold>Web Design</FeatureTitle>
              <FeatureText>
                Δημιουργούμε responsive websites με εξατομικευμένο σχεδιασμό που ενισχύει την ταυτότητα και την
                παρουσίασή σας στο διαδίκτυο.
              </FeatureText>
            </article>
          </Col>

          <Col md={6} lg={4}>
            <article className={`h-100 p-4 rounded-4 ${styles.featureCard}`}>
              <FeatureTitle $sage>Brand Identity</FeatureTitle>
              <FeatureText>
                Χτίζουμε ταυτότητες που ξεχωρίζουν. Λογότυπα, χρωματικές παλέτες, typography systems και visual
                guidelines που αντικατοπτρίζουν την ουσία του brand σας.
              </FeatureText>
            </article>
          </Col>

          <Col md={6} lg={4}>
            <article className={`h-100 p-4 rounded-4 ${styles.featureCard}`}>
              <FeatureTitle $rose>Development</FeatureTitle>
              <FeatureText>
                Μετατρέπουμε designs σε λειτουργικό κώδικα. React και TypeScript, με σύγχρονη CSS αρχιτεκτονική.
                Χρησιμοποιούμε τις καλύτερες τεχνολογίες για άψογα αποτελέσματα.
              </FeatureText>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturesSection
