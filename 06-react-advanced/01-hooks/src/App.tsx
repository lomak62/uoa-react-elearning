import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Offcanvas from "react-bootstrap/Offcanvas"
import "./App.css"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TaskList from "./components/TaskList"
import AddTaskBar from "./components/AddTaskBar"

function App() {
  // Καταστάσεις για το αν κάθε εργασία έχει ολοκληρωθεί ή όχι
  const [check0, setCheck0] = useState(false)
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(false)

  // Κατάσταση για εμφάνιση/απόκρυψη sidebar σε κινητές συσκευές
  const [showSidebar, setShowSidebar] = useState(false)

  // Υπολογισμός πλήθους ολοκληρωμένων και εκκρεμών εργασιών
  const completedCount = (check0 ? 1 : 0) + (check1 ? 1 : 0) + (check2 ? 1 : 0)
  const totalCount = 3 // Συνολικός αριθμός εργασιών (μπορεί να γίνει δυναμικός αν προσθέσουμε λειτουργία προσθήκης εργασιών)
  const pendingCount = totalCount - completedCount

  // Ενημέρωση του τίτλου της σελίδας με βάση τον αριθμό των εκκρεμών εργασιών
  useEffect(() => {
    document.title =
      pendingCount > 0
        ? `(${pendingCount} ${pendingCount === 1 ? "εκκρεμεί" : "εκκρεμούν"}) - TaskFlow`
        : "✓ Ολοκληρώθηκαν - TaskFlow"
  }, [pendingCount])

  // Κοινό περιεχόμενο για το sidebar, χρησιμοποιείται τόσο στην desktop όσο και στην mobile έκδοση
  const sidebarContent = <Sidebar totalCount={totalCount} pendingCount={pendingCount} completedCount={completedCount} />

  return (
    <Container fluid className="d-flex vh-100 p-0">
      {/* Desktop sidebar — ορατό σε md+ οθόνες, κρυμμένο σε κινητά */}
      <div className="d-none d-md-flex flex-column sidebar-width">{sidebarContent}</div>

      {/* Mobile Offcanvas — εμφανίζεται σε κινητά, κρυμμένο σε md+ */}
      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} className="text-light offcanvas-width">
        <Offcanvas.Header closeButton closeVariant="white"></Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column p-0">{sidebarContent}</Offcanvas.Body>
      </Offcanvas>

      {/* Κύριο περιεχόμενο — πάντα ορατό, καταλαμβάνει όλο το διαθέσιμο χώρο */}
      <div className="flex-grow-1 d-flex flex-column main-bg">
        <Header pendingCount={pendingCount} onBtnClick={() => setShowSidebar(true)} />

        <div className="flex-grow-1 overflow-auto px-4 py-2">
          <TaskList
            check0={check0}
            check1={check1}
            check2={check2}
            onToggle0={() => setCheck0(!check0)}
            onToggle1={() => setCheck1(!check1)}
            onToggle2={() => setCheck2(!check2)}
          />
        </div>

        {/* Προσθήκη TaskBar στο κάτω μέρος */}
        <AddTaskBar />
      </div>
    </Container>
  )
}

export default App
