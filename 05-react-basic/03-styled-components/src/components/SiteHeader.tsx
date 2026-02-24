import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import styles from "../App.module.css"

function SiteHeader() {
  return (
    <header className="py-4">
      <Container>
        <Navbar expand="md" variant="dark" className="p-0">
          <Navbar.Brand href="#" className={styles.logo}>
            Magic Pixel Studios
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#features" className={styles.navLink}>
                ΥΠΗΡΕΣΙΕΣ
              </Nav.Link>
              <Nav.Link href="#testimonials" className={styles.navLink}>
                ΠΕΛΑΤΕΣ
              </Nav.Link>
              <Nav.Link href="#contact" className={styles.navLink}>
                ΕΠΙΚΟΙΝΩΝΙΑ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default SiteHeader
