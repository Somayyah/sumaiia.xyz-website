import '../styles/globals.css'
import Nav from '../components/Nav'
import ThemeButton from '../components/themeCustomizeButton'
import LanguageSwitcher from '../components/LanguageSwitch'
import Complex from '../components/ComplexitySwitch'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [Custom, setCustom] = useState({
    theme: "",
    complexity: "minimalist",
    language: "english"
  });
  return (
    <div className={`${Custom.theme} ${Custom.complexity} ${Custom.language}`}>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <section aria-label="navigation menu">
        <Nav/>
      </section>
      <main id="mainContent" tabIndex={-1} className="bg-primary text-secondary">
        <section aria-label="main content">
          <Component {...pageProps} />
        </section>
        <section id="customize"  aria-label="customize the website">
          <ThemeButton setTheme={setCustom} Custom={Custom}/>
          <LanguageSwitcher setLanguage={setCustom} Custom={Custom}/>
          <Complex setComplexity={setCustom} Custom={Custom}/>
        </section>
      </main>
      <footer  aria-label="footer">empty footer</footer>
    </div>
  )
}

export default MyApp
