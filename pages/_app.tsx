import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import Nav from '../components/Nav'

const Footer = dynamic(() => import('../components/Footer'))
//const Customizing = dynamic(() => import('../components/Customizing'))

//import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  /*const [Custom, setCustom] = useState({
    theme: "",
    complexity: "minimalist",
    language: "english"
  });*/
  return (
    <div className={`main minimalist english`}>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <section aria-label="navigation menu">
        <Nav/>
      </section>
      <main id="mainContent" tabIndex={-1}>
        <Component {...pageProps} />
        <div className="push"></div>
      </main>
      <Footer />
    </div>
  )
}

export default MyApp

//       <Customizing Custom={Custom} setCustom={setCustom}/>
