import { useState } from 'react'

export default function ThemeCustomizeButton({ setTheme, Custom }) {
  const [scheme, setScheme] = useState(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-93 -55 300 11"stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </>
  )

  const handleICON = () => {
    scheme ===
      <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-93 -55 300 11"stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </>
    ? setScheme(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-93 -55 300 11"fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    )
    : setScheme(
      <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-93 -55 300 11"stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </>
    )
  }

  const handleTheme = () => {
    Custom.theme === "dark" ? setTheme({...Custom, theme: ""}) : setTheme({...Custom, theme: "dark"})
  }

return (
    <button className="switchTheme" onClick={()=> {handleICON(); handleTheme()}}>
        {scheme}
    </button>
    )
}
