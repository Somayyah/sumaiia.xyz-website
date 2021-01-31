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
  console.log(JSON.stringify(Custom))
  return (
    <body className={`${Custom.theme} ${Custom.complexity} ${Custom.language}`}>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <Nav/>
      <main id="mainContent" tabIndex={-1} className="bg-primary text-secondary">
        <section>
          <Component {...pageProps} />
        </section>
        <section id="#customize">
          <ThemeButton setTheme={setCustom} Custom={Custom}/>
          <LanguageSwitcher setLanguage={setCustom} Custom={Custom}/>
          <Complex setComplexity={setCustom} Custom={Custom}/>
        </section>
      </main>
      <footer>empty footer</footer>
    </body>
  )
}

export default MyApp
