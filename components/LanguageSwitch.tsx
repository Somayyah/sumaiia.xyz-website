import ICONS from '../components/icons'
import { useState } from 'react'

export default function LanguageSwitch({ setLanguage, Custom }) {
  const [label, setLabel] = useState("ترجم الموقع الى العربية")
  const [icon, setIcon] = useState(ICONS.arabic2Eng)

  const handleICON = () => {
    icon === ICONS.arabic2Eng 
    ? () => { setIcon(ICONS.eng2Arabic) ; setLabel("Translate website to English");}
    : () => { setIcon(ICONS.arabic2Eng) ; setLabel("ترجم الموقع الى العربية")}
  }

  const handlelanguage = () => {
    Custom.language === "english" ?
      setLanguage({...Custom,language: "arabic"})
      : setLanguage({...Custom,language: "english"})
  }

return (
    <button aria-label={label} className="" onClick={()=> {handleICON(); handlelanguage()}}>
        {icon}
    </button>
    )
}
