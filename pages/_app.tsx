import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import Nav from '../components/Nav'

const Footer = dynamic(() => import('../components/Footer'))

function MyApp({ Component, pageProps }) {
  return (
    <div className={`minimalist english`}>
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
