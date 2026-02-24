import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "../App.module.css"
import { HeroParagraph } from "./StyledParagraphs"
import heroBg from "../assets/hero-bg.jpg"

// Style για το background της Hero Section,
// συνδυάζοντας την εικόνα με ένα ημιδιαφανές μαύρο overlay για καλύτερη αναγνωσιμότητα του κειμένου.
const heroBackground = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
}

function HeroSection() {
  return (
    <section className={styles.heroSection} style={heroBackground}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <h1 className={styles.heroTitle}>
              Δημιουργούμε <span className={styles.heroTitleAccent}>εμπειρίες</span> που εμπνέουν
            </h1>

            <div className="mx-auto text-center" style={{ maxWidth: 600 }}>
              <HeroParagraph>
                Ειδικευόμαστε στη δημιουργία μοντέρνων, responsive ιστοσελίδων που συνδυάζουν εξαιρετικό σχεδιασμό με
                άψογη λειτουργικότητα. Από το πρώτο wireframe μέχρι το τελικό release, σχεδιάζουμε ψηφιακές εμπειρίες
                που κάνουν τη διαφορά.
              </HeroParagraph>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
