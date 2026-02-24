function QuizFooter() {
  return (
    <footer className="text-center px-0 pt-3 pb-1">
      <small className="text-white text-opacity-25">
        &copy; {new Date().getFullYear()} Quiz App. All rights reserved.
        <a
          href="https://react.dev/reference/rules/rules-of-hooks"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-opacity-25 text-decoration-none d-block d-sm-inline ms-sm-3"
        >
          <i className="bi bi-box-arrow-up-right me-1" style={{ fontSize: "0.7rem" }}></i>
          Rules of Hooks – React
        </a>
      </small>
    </footer>
  )
}
export default QuizFooter
