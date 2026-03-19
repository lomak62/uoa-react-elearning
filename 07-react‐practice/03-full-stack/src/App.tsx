import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react"
import axios from "axios"
import Container from "react-bootstrap/Container"
import Badge from "react-bootstrap/Badge"
import Spinner from "react-bootstrap/Spinner"
import CustomerCard from "./components/CustomerCard"

export type Customer = {
  customer_id: number
  customer_name: string
  customer_email: string
  customer_address: string
}

function App() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await axios.get<Customer[]>("/api/customers")
        setCustomers(response.data)
      } catch (err) {
        setError("Δεν ήταν δυνατή η φόρτωση των δεδομένων.")
        console.error("Υπήρξε ένα σφάλμα κατά τη φόρτωση των δεδομένων:", err)
      } finally {
        setLoading(false)
      }
    }
    void fetchCustomers()
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
        {loading ? (
          <div className="text-center py-4">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Φόρτωση...</span>
            </Spinner>
          </div>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : customers.length === 0 ? (
          <p className="text-body-secondary fst-italic">Δεν βρέθηκαν πελάτες.</p>
        ) : (
          <ol className="d-flex flex-column gap-3 ps-3">
            {customers.map((customer) => (
              <li className="ps-2" key={customer.customer_id}>
                <CustomerCard customer={customer} />
              </li>
            ))}
          </ol>
        )}
      </section>

      <footer className="border-top mt-5 pt-3 text-center">
        <p className="small text-body-secondary">Customer Directory &copy; {new Date().getFullYear()}</p>
      </footer>
      <Analytics />
    </Container>
  )
}

export default App
