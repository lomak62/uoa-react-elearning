import Form from "react-bootstrap/Form"
import "./QuizPersonalInfo.css"

type Props = {
  name: string
  email: string
  errorName: string
  errorEmail: string
  disabled: boolean
}

// Χρησιμοποιούμε defaultValue αντί για value → uncontrolled inputs.
// Σε uncontrolled input η React θέτει την αρχική τιμή αλλά δεν ελέγχει το πεδίο σε κάθε re-render.
// Ο χρήστης πληκτρολογεί ελεύθερα και η τιμή διαβάζεται μόνο στο submit μέσω FormData.
// (Αντίθετα, controlled input χρησιμοποιεί value + onChange για να συγχρονίζεται συνεχώς με το state.)
// Εδώ δεν χρειάζεται resetKey/remount επειδή το name/email δεν αλλάζει στο retake,
// σε αντίθεση με τα Form.Select στο QuizQuestion που πρέπει να επαναφερθούν στο "".
function QuizPersonalInfo(props: Props) {
  return (
    <section aria-labelledby="info-heading">
      <h2
        id="info-heading"
        className="small fw-semibold text-secondary mb-4 pb-2 border-bottom border-white border-opacity-10"
      >
        ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ
      </h2>

      <Form.Group>
        <Form.Floating className="mb-3">
          <Form.Control
            id="quizName"
            type="text"
            name="name"
            placeholder="Ονοματεπώνυμο"
            defaultValue={props.name}
            isInvalid={props.errorName !== ""}
            disabled={props.disabled}
            className="quiz-input bg-secondary bg-opacity-10 rounded-3"
          />
          <label htmlFor="quizName">Ονοματεπώνυμο</label>
          <Form.Control.Feedback type="invalid">{props.errorName}</Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Floating className="mb-3">
          <Form.Control
            id="quizEmail"
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={props.email}
            isInvalid={props.errorEmail !== ""}
            disabled={props.disabled}
            className="quiz-input bg-secondary bg-opacity-10 rounded-3"
          />
          <label htmlFor="quizEmail">Email</label>
          <Form.Control.Feedback type="invalid">{props.errorEmail}</Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>
    </section>
  )
}

export default QuizPersonalInfo
