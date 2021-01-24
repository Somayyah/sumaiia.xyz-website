import ICONS from '../components/icons'
import { useState } from 'react'

export default function LanguageSwitch({ setLanguage, Custom }) {
  const [icon, setIcon] = useState(ICONS.arabic2Eng)

  const handleICON = () => {
    icon === ICONS.arabic2Eng ? setIcon(ICONS.arabic2Eng) : setIcon(ICONS.arabic2Eng)
  }

  const handlelanguage = () => {
    Custom.language === "english" ?
      setLanguage({...Custom,language: "arabic"})
      : setLanguage({...Custom,language: "english"})
  }

return (
    <button className="" onClick={()=> {handleICON(); handlelanguage()}}>
        {icon}
    </button>
    )
}
