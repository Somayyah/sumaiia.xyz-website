import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import Nav from '../components/Nav'
import { useState } from 'react'

const Footer = dynamic(() => import('../components/Footer'))

function MyApp({ Component, pageProps }) {
  const [Custom, setCustom] = useState({
    mode: "",
    complexity: "minimalist",
    language: "english"
  });
  return (
    <div className={`${Custom.mode} ${Custom.complexity} ${Custom.language}`}>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <section aria-label="navigation menu">
        <Nav setCustom={setCustom} Custom={Custom} />
      </section>
      <main id="mainContent" tabIndex={-1}>
        <section aria-label="main content" className="pageContent">
          <Component {...pageProps} />
        </section>
      </main>
      <Footer />
    </div>)
}

export default MyApp
