import ListGroup from "react-bootstrap/ListGroup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./TaskList.css"

// Σταθερή λίστα εργασιών για επίδειξη
function TaskRow({
  description,
  checked,
  onToggle,
  id,
}: {
  description: string
  checked: boolean
  onToggle: () => void
  id: string
}) {
  return (
    <ListGroup.Item className="d-flex align-items-center border-0 px-3 py-2 mb-1 rounded-2">
      <Form.Check type="checkbox" id={id} className="round-check flex-grow-1 d-flex align-items-center">
        <Form.Check.Input type="checkbox" className="me-3" checked={checked} onChange={onToggle} />
        <Form.Check.Label
          style={checked ? { textDecoration: "line-through" } : {}}
          className={checked ? "text-secondary" : "text-light"}
        >
          {description}
        </Form.Check.Label>
      </Form.Check>
      <Button variant="outline-secondary" size="sm" className="border-0" disabled>
        <i className="bi bi-trash"></i>
      </Button>
    </ListGroup.Item>
  )
}

function TaskList(props: any) {
  return (
    <div>
      <ListGroup>
        <TaskRow
          id="task0"
          description="Παράδοση εργασίας React update document.title"
          checked={props.check0}
          onToggle={props.onToggle0}
        />
        <TaskRow
          id="task1"
          description="Ενημέρωση portfolio με το τελευταίο project"
          checked={props.check1}
          onToggle={props.onToggle1}
        />
        <TaskRow
          id="task2"
          description="Διάβασμα React Hooks useEffect και useState"
          checked={props.check2}
          onToggle={props.onToggle2}
        />
      </ListGroup>
    </div>
  )
}

export default TaskList
