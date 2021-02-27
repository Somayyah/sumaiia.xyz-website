import { useState } from 'react'
import ICONS from "./icons"

export default function ThemeCustomizeButton({ setTheme, Custom }) {
  const [scheme, setScheme] = useState(ICONS.light)

  const handleICON = () => {
    scheme === ICONS.light
    ? setScheme(ICONS.dark)
    : setScheme(ICONS.light)
  }

  const handleTheme = () => {
    Custom.theme === "dark" ? setTheme({...Custom, theme: ""}) : setTheme({...Custom, theme: "dark"})
  }

return (
    <button onClick={()=> {handleICON(); handleTheme()}}>
        <img src={scheme}/>
    </button>
    )
}
