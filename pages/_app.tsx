import '../styles/globals.css'
import Nav from '../components/Nav'
import ThemeButton from '../components/themeCustomizeButton'
import LanguageSwitcher from '../components/LanguageSwitch'
import Complex from '../components/ComplexitySwitch'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [Custom, setCustom] = useState({
    theme: "",
    complexity: "",
    language: "english"
  });
  console.log(JSON.stringify(Custom))
  return (
    <div className={`${Custom.theme} ${Custom.complexity} ${Custom.language}`}>
      <main className="bg-primary">
        <Nav/>
        <section>
          <Component {...pageProps} />
        </section>
        <section>
          <ThemeButton setTheme={setCustom} Custom={Custom}/>
          <LanguageSwitcher setLanguage={setCustom} Custom={Custom}/>
          <Complex setComplexity={setCustom} Custom={Custom}/>
        </section>
      </main>
      <footer>empty footer</footer>
    </div>
  )
}

export default MyApp
