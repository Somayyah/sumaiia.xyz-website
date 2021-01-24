import ICONS from '../components/icons'
import { useState } from 'react'

export default function ThemeCustomizeButton({ setTheme, Custom }) {
  const [scheme, setScheme] = useState(ICONS.light)

  const handleICON = () => {
    scheme === ICONS.light ? setScheme(ICONS.dark) : setScheme(ICONS.light)
  }

  const handleTheme = () => {
    Custom.theme === "dark" ? setTheme({...Custom, theme: ""}) : setTheme({...Custom, theme: "dark"})
  }

return (
    <button className="" onClick={()=> {handleICON(); handleTheme()}}>
        {scheme}
    </button>
    )
}
