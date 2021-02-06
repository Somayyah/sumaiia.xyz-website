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
    <button className="" onClick={()=> {handleICON(); handlecomplexity()}}>
        {mode}
    </button>
    )
}
