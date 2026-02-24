import { useState } from "react";
import reactLogo from "./assets/react.svg";
import arrowIcon from "./assets/arrow-counterclockwise.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Σταθερές για την αρχική τιμή, τον πολλαπλασιαστή, το μέγιστο αριθμό clicks και το όριο προειδοποίησης
const START = 10;
const MULTIPLIER = 2;
const MAX_CLICKS = 20;
const WARNING_THRESHOLD = 5;

// Βοηθητική συνάρτηση για τον υπολογισμό του μηνύματος κατάστασης και της κλάσης CSS
function getStatusMessage(clicks: number, maxClicks: number) {
  const remainingClicks = maxClicks - clicks;
  let message: string;
  let className: string;

  if (remainingClicks === 0) {
    message = "Έχεις φτάσει το όριο των " + maxClicks + " clicks!";
    className = "limit-reached";
  } else if (remainingClicks <= WARNING_THRESHOLD) {
    message = "Απομένουν " + remainingClicks + " από " + maxClicks + " clicks!";
    className = "warning";
  } else {
    message = "Έχεις πατήσει το κουμπί " + clicks + (clicks === 1 ? " φορά" : " φορές") + ".";
    className = "clicks-info";
  }
  return { message, className };
}

function App() {

  // Καταγραφή της τιμής του μετρητή
  const [count, setCount] = useState(START);

  // Καταγραφή του αριθμού των clicks
  const [clicks, setClicks] = useState(0);

  // Καταγραφή αν το animation είναι ενεργό
  const [isAnimating, setIsAnimating] = useState(false);

  // Λήψη του μηνύματος κατάστασης και της κλάσης CSS
  const { message, className } = getStatusMessage(clicks, MAX_CLICKS);

  // Συνάρτηση που αυξάνει τον μετρητή πολλαπλασιάζοντάς τον με το MULTIPLIER
  // functional update για αποφυγή προβλημάτων με γρήγορη διαδοχή κλικ
  function countMultiplier() {
    setCount(prevCount => prevCount * MULTIPLIER);
    setClicks(prevClicks => prevClicks + 1);
  }

  // Συνάρτηση που επαναφέρει τον μετρητή και τα clicks στην αρχική τους τιμή
  // και ενεργοποιεί το animation
  function reset() {
    setCount(START);
    setClicks(0);
    setIsAnimating(true);
  }

  // Συνάρτηση που σταματά το animation
  function stopAnimation() {
    setIsAnimating(false);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <header>
        <h1 className={"title " + (isAnimating ? "animate" : "")} onAnimationEnd={stopAnimation}>ΛΟΥΚΑΣ</h1>
      </header>

      <main className="card">
        <div className="button-group">

          <button onClick={countMultiplier} disabled={clicks >= MAX_CLICKS} className="main-btn">
            Μετρητής: {count}
          </button>

          <button onClick={reset} className="reset-btn">
            <img src={arrowIcon} alt="reset" /><span className="reset-text"> reset</span>
          </button>
        </div>

        <p className={className}>{message}</p>
      </main>
    </>
  );
}

export default App;
