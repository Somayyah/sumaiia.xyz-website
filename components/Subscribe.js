import { useState } from "preact/hooks"
import axios from "axios"
import styles from "../styles/local/components/newsletter.module.scss"

export default () => {
  const [email, setEmail] = useState("")
  const [state, setState] = useState("IDLE")
  const [errorMessage, setErrorMessage] = useState(null)

  const subscribe = async () => {
    setState("LOADING")
    setErrorMessage(null)
    try {
      const response = await axios.post("/api/newsletter", { email })
      setState("SUCCESS")
    } catch (e) {
      setErrorMessage(e.response.data.error)
      setState("ERROR")
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          {state === "LOADING" ? "Loading" : "Subscribe"}
        </button>
      </div>
      {state === "ERROR" && <p className={styles.errorMsg}>{errorMessage}</p>}
      {state === "SUCCESS" && <p className={styles.successMsg}>Success!</p>}
    </div>
  )
}
