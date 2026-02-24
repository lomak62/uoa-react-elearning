import Button from "react-bootstrap/Button"
import "./Header.css"

function Header(props: any) {
  return (
    <header className="px-4 pt-4 pb-2">
      {/* Toggle button — ορατό μόνο σε κινητά */}
      <Button variant="outline-secondary" size="sm" className="d-md-none mb-2 mx-1 border-0" onClick={props.onBtnClick}>
        <i className="bi bi-list fs-5"></i>
      </Button>

      <h2 className="fw-bold fs-4 mb-1 mx-2 task-header">
        <i className="bi bi-house-door me-2"></i>Εργασίες
      </h2>
      <small className="text-secondary mx-2">
        {props.pendingCount} {props.pendingCount === 1 ? "εργασία υπολείπεται" : "εργασίες υπολείπονται"}
      </small>
    </header>
  )
}
export default Header
