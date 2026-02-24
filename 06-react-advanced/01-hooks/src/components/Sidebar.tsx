import ListGroup from "react-bootstrap/ListGroup"
import Badge from "react-bootstrap/Badge"
import "./Sidebar.css"

function Sidebar(props: any) {
  return (
    <>
      {/* Brand */}
      <div className="px-4 pt-5 pb-3">
        <h1 className="fs-5 fw-bold text-white m-0">
          <i className="bi bi-check2-square me-2 text-primary"></i>TaskFlow
        </h1>
      </div>

      <div className="border-bottom border-secondary-subtle mt-3">
        {/* Nav items */}
        <ListGroup variant="flush" className="px-2">
          <ListGroup.Item
            active
            action
            variant="dark"
            className="d-flex justify-content-between align-items-center border-0 rounded-2 mb-1"
          >
            <span>
              <i className="bi bi-house-door me-2 text-primary"></i>Εργασίες
            </span>
            <Badge bg="dark" className="shadow-sm" pill>
              {props.totalCount}
            </Badge>
          </ListGroup.Item>

          <ListGroup.Item
            action
            variant="dark"
            className="d-flex justify-content-between align-items-center border-0 rounded-2 mb-1"
            onClick={(e) => (e.currentTarget as HTMLElement).blur()} /* Απομάκρυνση του focus μετά το κλικ */
          >
            <span>
              <i className="bi bi-clock me-2 text-warning"></i>Εκκρεμείς
            </span>
            <Badge bg="dark" className="shadow-sm" pill>
              {props.pendingCount}
            </Badge>
          </ListGroup.Item>

          <ListGroup.Item
            action
            variant="dark"
            className="d-flex justify-content-between align-items-center border-0 rounded-2 mb-1"
            onClick={(e) => (e.currentTarget as HTMLElement).blur()} /* Απομάκρυνση του focus μετά το κλικ */
          >
            <span>
              <i className="bi bi-check-circle me-2 text-success"></i>Ολοκληρωμένες
            </span>
            <Badge bg="dark" className="shadow-sm" pill>
              {props.completedCount}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* Footer */}
      <div className="mt-auto px-3 pb-3">
        <small className="text-secondary" style={{ fontSize: "0.72rem" }}>
          <i className="bi bi-c-circle me-1"></i>
          {new Date().getFullYear()} TaskFlow Inc. All rights reserved
        </small>
      </div>
    </>
  )
}

export default Sidebar
