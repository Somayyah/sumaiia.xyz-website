import ThemeButton from '../components/themeCustomizeButton'
import LanguageSwitcher from '../components/LanguageSwitch'
import Complex from '../components/ComplexitySwitch'

export default function ThemeCustomizeButton({setCustom}) {

return (
    <section>
      <ThemeButton setTheme={setCustom}/>
      <LanguageSwitcher setLanguage={setCustom}/>
      <Complex setComplexity={setCustom}/>
    </section>
    )
}
