type Question = {
  id: number
  text: string
  correct: "true" | "false" // string και όχι boolean, γιατί η FormData επιστρέφει strings → συγκρίνουμε απευθείας χωρίς μετατροπή
}

// Επιστρέφει όλες τις διαθέσιμες ερωτήσεις του quiz.
function getQuestionBank(): Question[] {
  return [
    {
      id: 1,
      text: "Το useState χρησιμοποιείται για να αποθηκεύουμε state σε function component.",
      correct: "true",
    },
    {
      id: 2,
      text: "Το useState επιστρέφει ένα array με δύο στοιχεία: την τιμή και τη συνάρτηση ενημέρωσης.",
      correct: "true",
    },
    {
      id: 3,
      text: "Η συνάρτηση ενημέρωσης που δίνει το useState μπορεί να προκαλέσει re-render.",
      correct: "true",
    },
    {
      id: 4,
      text: "Η αρχική τιμή του useState χρησιμοποιείται μόνο στο πρώτο render.",
      correct: "true",
    },
    {
      id: 5,
      text: "Μπορούμε να καλέσουμε hooks (π.χ. useState) μέσα σε if block.",
      correct: "false",
    },
    {
      id: 6,
      text: "Το useEffect χρησιμοποιείται για side effects (π.χ. fetch, timers).",
      correct: "true",
    },
    {
      id: 7,
      text: "Το useEffect εκτελείται πάντα πριν γίνει το πρώτο render.",
      correct: "false",
    },
    {
      id: 8,
      text: "Αν το dependency array του useEffect είναι κενό, τρέχει μόνο μία φορά μετά το πρώτο render.",
      correct: "true",
    },
    {
      id: 9,
      text: "Αν δεν βάλουμε dependency array, το useEffect τρέχει μετά από κάθε render.",
      correct: "true",
    },
    {
      id: 10,
      text: "Το useEffect μπορεί να επιστρέψει μια συνάρτηση cleanup που τρέχει πριν το επόμενο effect ή όταν αποσυνδεθεί το component.",
      correct: "true",
    },
    {
      id: 11,
      text: "Το useReducer είναι εναλλακτική του useState για πιο σύνθετο state.",
      correct: "true",
    },
    {
      id: 12,
      text: "Το useReducer χρησιμοποιεί reducer function και dispatch.",
      correct: "true",
    },
    {
      id: 13,
      text: "Το useReducer μπορεί να χρησιμοποιηθεί μόνο σε class components.",
      correct: "false",
    },
    {
      id: 14,
      text: "Η reducer function δέχεται ως ορίσματα το τρέχον state και μια action.",
      correct: "true",
    },
    {
      id: 15,
      text: "Το useActionState επιστρέφει state, action function και isPending.",
      correct: "true",
    },
    {
      id: 16,
      text: "Η action function του useActionState καλείται αυτόματα όταν υποβληθεί η φόρμα.",
      correct: "true",
    },
    {
      id: 17,
      text: "Το useActionState είναι React Hook και άρα μπορεί να χρησιμοποιηθεί μόνο μέσα σε function component.",
      correct: "true",
    },
  ]
}

// Επιλέγει 2 τυχαίες και διαφορετικές ερωτήσεις από το question bank.
// Τεχνική: επιλέγουμε i1 κανονικά, μετά i2 από bank.length-1 θέσεις
// και κάνουμε i2++ αν i2 >= i1, ώστε να "παραλείψουμε" τη θέση του i1
// και να εξασφαλίσουμε ότι i1 !== i2 (οι 2 ερωτήσεις να είναι διαφορετικές).
function getRandomTwoQuestions(): [Question, Question] {
  const bank = getQuestionBank()
  const i1 = Math.floor(Math.random() * bank.length)
  let i2 = Math.floor(Math.random() * (bank.length - 1))
  if (i2 >= i1) i2++
  return [bank[i1], bank[i2]]
}

export type { Question }
export { getRandomTwoQuestions }
