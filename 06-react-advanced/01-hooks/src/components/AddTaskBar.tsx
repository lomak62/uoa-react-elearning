import { useState } from "react"
import Form from "react-bootstrap/Form"
import "./AddTaskBar.css"

function AddTaskBar() {
  const [inputFocused, setInputFocused] = useState(false)

  return (
    <Form className="px-4 py-4">
      <div className="input-group add-task">
        <span className="input-group-text">
          <i className={`bi ${inputFocused ? "bi-circle" : "bi-plus-lg"}`}></i>
        </span>
        <Form.Control
          type="text"
          size="sm"
          className="py-2"
          placeholder={inputFocused ? "Υπό κατασκευή..." : "Προσθήκη εργασίας"}
          readOnly
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </div>
    </Form>
  )
}

export default AddTaskBar
