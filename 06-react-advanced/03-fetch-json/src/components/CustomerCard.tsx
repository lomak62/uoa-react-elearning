import Card from "react-bootstrap/Card"
import styles from "./CustomerCard.module.css"
import type { Customer } from "../App"

type CustomerCardProps = {
  customer: Customer
}

function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <Card bg="white" className={`${styles.card} border-0 shadow-sm rounded-4 w-100`}>
      <Card.Body className="p-4">
        <Card.Title className="mb-2">{customer.customer_name}</Card.Title>
        <Card.Text as="div" className="mb-0 small text-body-secondary">
          <p className="mb-1">
            <i className="bi bi-envelope-fill me-2 text-body" aria-hidden="true"></i>
            <a href={`mailto:${customer.customer_email}`} className="text-body text-decoration-none">
              {customer.customer_email}
            </a>
          </p>
          <p className="mb-0">
            <i className="bi bi-house-door-fill me-2 text-body" aria-hidden="true"></i>
            {customer.customer_address}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CustomerCard
