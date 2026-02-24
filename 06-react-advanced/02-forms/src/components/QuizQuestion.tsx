import Form from "react-bootstrap/Form"
import Badge from "react-bootstrap/Badge"
import "./QuizQuestion.css"

import type { Question } from "../data/questionBank"

type Props = {
  question: Question
  fieldName: string
  userAnswer: string
  error: string
  submitted: boolean
  resetKey: number // Χρησιμοποιείται ως key στο Form.Select. Όταν αλλάζει, το Select ξαναφτιάχνεται και επιστρέφει στην αρχική τιμή
}

function QuizQuestion(props: Props) {
  // True όταν ο χρήστης υπέβαλε τη φόρμα αλλά η απάντησή του είναι λάθος.
  // Χρησιμοποιείται στο isInvalid για να εμφανιστεί κόκκινο περίγραμμα στο Select.
  const submittedWrong = props.submitted && props.userAnswer !== props.question.correct

  return (
    <fieldset className="quiz-question mb-4" disabled={props.submitted}>
      <legend className="quiz-question-legend d-flex gap-3 align-items-baseline fs-6 fw-semibold text-light-50">
        <Badge
          bg="primary"
          pill
          className="quiz-question-number d-inline-flex align-items-center justify-content-center"
          style={{ minWidth: "1.55rem", height: "1.55rem", fontSize: "0.72rem" }}
        >
          {props.question.id}
        </Badge>
        {props.question.text}
      </legend>

      <Form.Group className="px-5">
        <Form.Select
          key={props.resetKey} // Αλλαγή key → remount → επαναφορά defaultValue
          name={props.fieldName}
          defaultValue={props.userAnswer}
          isInvalid={props.error !== "" || submittedWrong} // validation error ή λάθος απάντηση μετά το submit
          isValid={props.submitted && props.userAnswer === props.question.correct}
          className="quiz-select bg-secondary bg-opacity-10 text-white text-opacity-75 rounded-3"
        >
          <option value="">Επίλεξε</option>
          <option value="true">Σωστό</option>
          <option value="false">Λάθος</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {props.error !== "" ? props.error : "Λάθος απάντηση!"}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">Σωστή απάντηση!</Form.Control.Feedback>
      </Form.Group>
    </fieldset>
  )
}

export default QuizQuestion
