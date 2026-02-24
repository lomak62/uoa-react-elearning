import Container from "react-bootstrap/Container"
import styles from "../App.module.css"

function SiteFooter() {
  return (
    <footer className="py-5 border-top border-light border-opacity-10">
      <Container>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Magic Pixel Studios. Design & Development Studio.
        </p>
      </Container>
    </footer>
  )
}

export default SiteFooter
