import { useActionState } from "react"
import { useState } from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./App.css"

import { getRandomTwoQuestions } from "./data/questionBank"
import QuizHeader from "./components/QuizHeader"
import QuizPersonalInfo from "./components/QuizPersonalInfo"
import QuizQuestion from "./components/QuizQuestion"
import QuizFooter from "./components/QuizFooter"

// Αρχική κατάσταση της εφαρμογής
// (στοιχεία χρήστη, απαντήσεις, errors, κατάσταση submit, resetKey για reset των Select)
const initialState = {
  name: "",
  email: "",
  answer1: "",
  answer2: "",
  submitted: false,
  errorName: "",
  errorEmail: "",
  errorQ1: "",
  errorQ2: "",
  resetKey: 0,
}

function App() {
  // Κρατάμε 2 ενεργές ερωτήσεις για το τρέχον quiz
  // (αλλάζουν μόνο όταν ο χρήστης πετύχει 100% και πατήσει ξανά)
  const [activeQuestions, setActiveQuestions] = useState(getRandomTwoQuestions())

  /*
   * Το useActionState διαχειρίζεται την κατάσταση της φόρμας.
   * Επιστρέφει: state (τρέχουσα κατάσταση) και formAction (περνάμε στο Form action).
   *
   * - Στο submit διαβάζουμε τιμές από FormData και κάνουμε validation.
   * - Αν όλα είναι σωστά, εμφανίζουμε αποτέλεσμα/βαθμολογία.
   * - Στο retake κρατάμε name/email και καθαρίζουμε τις απαντήσεις.
   *
   * Το resetKey βοηθά να γίνει reset στα Form.Select.
   */
  const [state, formAction] = useActionState((prevState: typeof initialState, formData: FormData) => {
    // Έλεγχος αν είναι επανεκκίνηση (retake)
    const retake = formData.get("retake")
    if (retake === "true") {
      const percentage = formData.get("percentage") as string
      if (percentage === "100") {
        setActiveQuestions(getRandomTwoQuestions())
      }
      return {
        name: prevState.name,
        email: prevState.email, // Κρατάμε όνομα/email ώστε να μη χρειάζεται νέα πληκτρολόγηση
        answer1: "",
        answer2: "",
        submitted: false,
        errorName: "",
        errorEmail: "",
        errorQ1: "",
        errorQ2: "",
        resetKey: prevState.resetKey + 1,
      }
    }

    // Παίρνουμε τις τιμές της φόρμας από τα name attributes των πεδίων
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const answer1 = (formData.get("question1") as string) || ""
    const answer2 = (formData.get("question2") as string) || ""

    // Έλεγχος εγκυρότητας και δημιουργία μηνυμάτων λάθους
    let errorName = ""
    let errorEmail = ""
    let errorQ1 = ""
    let errorQ2 = ""
    let isValid = true

    if (name.trim() === "") {
      errorName = "Συμπλήρωσε όνομα"
      isValid = false
    }

    if (email.trim() === "") {
      errorEmail = "Συμπλήρωσε email"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorEmail = "Μη έγκυρο email"
      isValid = false
    }

    if (answer1 === "") {
      errorQ1 = "Επίλεξε Σωστό ή Λάθος"
      isValid = false
    }

    if (answer2 === "") {
      errorQ2 = "Επίλεξε Σωστό ή Λάθος"
      isValid = false
    }

    return {
      name,
      email,
      answer1,
      answer2,
      submitted: isValid,
      errorName,
      errorEmail,
      errorQ1,
      errorQ2,
      resetKey: prevState.resetKey + 1, // Αλλαγή key για επανεμφάνιση των Select με τη σωστή τιμή που έχουμε στο state (π.χ. μετά από submit με λάθη)
    }
  }, initialState)

  // Υπολογισμός βαθμολογίας μετά την υποβολή
  const correct1 = activeQuestions[0].correct
  const correct2 = activeQuestions[1].correct

  let score = 0
  if (state.answer1 === correct1) {
    score = score + 1
  }
  if (state.answer2 === correct2) {
    score = score + 1
  }

  const totalQuestions = activeQuestions.length
  const percentage = Math.round((score / totalQuestions) * 100)

  // Μήνυμα και χρώμα που εμφανίζονται ανάλογα με το ποσοστό επιτυχίας
  let resultMessage = "Συνέχισε την προσπάθεια, μπορείς καλύτερα!"
  let scoreClass = "text-danger"
  if (percentage === 100) {
    resultMessage = "Άριστο αποτέλεσμα, μπράβο!"
    scoreClass = "text-success"
  } else if (percentage >= 50) {
    resultMessage = "Καλό αποτέλεσμα, αλλά μπορείς καλύτερα!"
    scoreClass = "text-warning"
  }

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center py-4 px-3">
      <Container className="quiz-container">
        <article>
          <QuizHeader questionsLength={activeQuestions.length} />

          <Card className="quiz-card border-white border-opacity-10 rounded-4 rounded-top-0 border-top-0 bg-body-secondary bg-opacity-25">
            <Card.Body className="quiz-card-body">
              <Form action={formAction} noValidate>
                <QuizPersonalInfo
                  name={state.name}
                  email={state.email}
                  errorName={state.errorName}
                  errorEmail={state.errorEmail}
                  disabled={state.submitted}
                />

                {/* Ενότητα ερωτήσεων (με εμφάνιση βαθμολογίας μετά το submit) */}
                <section aria-labelledby="questions-heading">
                  <h2
                    id="questions-heading"
                    className="small fw-semibold text-secondary mb-4 pb-2 border-bottom border-white border-opacity-10"
                  >
                    ΕΡΩΤΗΣΕΙΣ
                    {state.submitted && (
                      <span className={"quiz-score-inline small " + scoreClass}>
                        {percentage >= 50 ? (
                          <i className="bi bi-graph-up-arrow ms-3 me-1"></i>
                        ) : (
                          <i className="bi bi-graph-down-arrow ms-3 me-1"></i>
                        )}
                        Η βαθμολογία σου {score} από {totalQuestions} = {percentage}% - {resultMessage}
                      </span>
                    )}
                  </h2>

                  <QuizQuestion
                    question={activeQuestions[0]}
                    fieldName="question1"
                    userAnswer={state.answer1}
                    error={state.errorQ1}
                    submitted={state.submitted}
                    resetKey={state.resetKey}
                  />

                  <QuizQuestion
                    question={activeQuestions[1]}
                    fieldName="question2"
                    userAnswer={state.answer2}
                    error={state.errorQ2}
                    submitted={state.submitted}
                    resetKey={state.resetKey}
                  />
                </section>

                {/* Κρυφά πεδία για επανεκκίνηση (retake) με διατήρηση της βαθμολογίας και των απαντήσεων */}
                {state.submitted && <input type="hidden" name="retake" value="true" />}
                {state.submitted && <input type="hidden" name="percentage" value={String(percentage)} />}

                {/* Το κουμπί αλλάζει κείμενο ανάλογα με κατάσταση: submit → retake ή νέες ερωτήσεις (αν 100%) */}
                <div className="d-grid mt-4">
                  <Button type="submit" size="lg" className="quiz-submit-btn fw-semibold p-2 mt-2">
                    {!state.submitted ? "Υποβολή απαντήσεων" : percentage === 100 ? "Νέες ερωτήσεις" : "Δοκίμασε ξανά"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <QuizFooter />
        </article>
      </Container>
    </main>
  )
}

export default App
