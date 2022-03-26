
import ThemeButton from '../components/themeCustomizeButton'
import LanguageSwitcher from '../components/LanguageSwitch'
import Complex from '../components/ComplexitySwitch'
import styles from "../styles/local/components/customize.module.scss"

function Customizing({setCustom, Custom}) {
    return(
        <section   aria-label="customize the website">
            <ThemeButton setTheme={setCustom} Custom={Custom}/>
            <LanguageSwitcher setLanguage={setCustom} Custom={Custom}/>
            <Complex setComplexity={setCustom} Custom={Custom}/>
        </section>
    )
}

export default Customizing