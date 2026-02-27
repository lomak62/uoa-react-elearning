import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Badge from "react-bootstrap/Badge"
import CustomerCard from "./components/CustomerCard"

export type Customer = {
  id: number
  customer_name: string
  customer_email: string
  customer_address: string
}

function App() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [error, setError] = useState<string>("")
  useEffect(() => {
    fetch("/api/customers.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setCustomers(data)
      })
      .catch((error) => {
        setError("Δεν ήταν δυνατή η φόρτωση των δεδομένων.")
        console.error("Υπήρξε ένα σφάλμα κατά τη φόρτωση των δεδομένων:", error)
      })
  }, [])

  return (
    <Container className="py-5" style={{ maxWidth: "500px" }}>
      <header className="mb-4">
        <Badge bg="primary-subtle" text="primary-emphasis" pill className="mb-2">
          CRM Directory
        </Badge>
        <h1 className="display-5 fw-bold">Πελατολόγιο</h1>
        <p className="text-body-secondary">
          Κατάλογος πελατών &middot; {customers.length} {customers.length === 1 ? "εγγραφή" : "εγγραφές"}
        </p>
      </header>

      <section aria-label="Λίστα πελατών">
        {error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <ol className="d-flex flex-column gap-3 ps-3">
            {customers.map((customer) => (
              <li className="ps-2" key={customer.id}>
                <CustomerCard customer={customer} />
              </li>
            ))}
          </ol>
        )}
      </section>

      <footer className="border-top mt-5 pt-3 text-center">
        <p className="small text-body-secondary">Customer Directory &copy; {new Date().getFullYear()}</p>
      </footer>
    </Container>
  )
}

export default App
