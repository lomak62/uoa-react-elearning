import Badge from "react-bootstrap/Badge"
import "./QuizHeader.css"

function QuizHeader(props: { questionsLength: number }) {
  return (
    <header className="quiz-header text-center mb-0 rounded-top-3 pt-5 pb-4 px-4">
      <Badge
        pill
        bg="primary"
        text="white"
        className="quiz-header-badge fw-semibold text-opacity-75 mb-2 px-3 py-1 bg-opacity-50 shadow-sm"
      >
        React Advanced
      </Badge>
      <h1 className="quiz-header-title text-white fs-3 fw-bold lh-sm m-0">Quiz React Hooks</h1>
      <p className="small mt-1 mb-0 text-white text-opacity-75">
        {props.questionsLength} ερωτήσεις · Δοκιμάστε τις γνώσεις σας
      </p>
    </header>
  )
}
export default QuizHeader
