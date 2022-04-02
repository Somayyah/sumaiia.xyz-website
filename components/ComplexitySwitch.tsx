import ICONS from '../components/icons'
import { useState } from 'react'

export default function ComplexitySwitch({ setComplexity, Custom }) {
  const [mode, setMode] = useState(ICONS.minimalist)

  const handleICON = () => {
    mode === ICONS.complex ? setMode(ICONS.minimalist) : setMode(ICONS.complex)
  }

  const handlecomplexity = () => {
    Custom.complexity === "" ? setComplexity({...Custom,complexity: "minimalist"}) : setComplexity({...Custom,complexity: ""})
  }

return (
    <button aria-label="switch website theme" onClick={()=> {handleICON(); handlecomplexity()}}>
        <img alt="" src={mode}/>
    </button>
    )
}

