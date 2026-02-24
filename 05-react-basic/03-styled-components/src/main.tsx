import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css" /* Εισαγωγή του Bootstrap CSS για χρήση των προεπιλεγμένων στυλ και components
του Bootstrap σε αυτό το σημείο, ώστε να είναι διαθέσιμα πριν από τα custom styles του App.module.css,
επιτρέποντας στα custom styles να υπερισχύσουν όπου χρειάζεται. */
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
