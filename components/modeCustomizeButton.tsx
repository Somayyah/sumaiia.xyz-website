import { useState } from 'react'
import ICONS from "./icons"

export default function ModeCustomizeButton({ setMode, Custom }) {
  const [scheme, setScheme] = useState(ICONS.light)

  const handleICON = () => {
    scheme === ICONS.light
    ? setScheme(ICONS.dark)
    : setScheme(ICONS.light)
  }

  const handleMode = () => {
    Custom.mode === "dark" ? setMode({...Custom, mode: ""}) : setMode({...Custom, mode: "dark"})
  }

return (
    <button aria-label="Switch website color scheme" onClick={()=> {handleICON(); handleMode()}}>
        <img alt="" src={scheme}/>
    </button>
    )
}
