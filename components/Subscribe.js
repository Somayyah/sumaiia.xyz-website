import { useState } from "preact/hooks"
import axios from "axios"
//import styles from "../styles/local/components/newsletter.module.scss"

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
    <fieldset >
      <legend >SUBSCRIBE TO MY NEWSLETTER</legend>
      <input
        
        type="text"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        
        type="button"
        disabled={state === "LOADING"}
        onClick={subscribe}
      >
        {state === "LOADING" ? "Loading" : "Submit"}
      </button>
      {state === "ERROR" && <p >{errorMessage}</p>}
      {state === "SUCCESS" && <p >Success!</p>}
    </fieldset>
  )
}
