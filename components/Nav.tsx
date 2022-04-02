import Link from "./ActiveLink";
import styles from "../styles/local/components/navbar.module.scss"
import { useState } from 'react'
import ModeButton from '../components/modeCustomizeButton'
import LanguageSwitcher from '../components/LanguageSwitch'
import Complex from '../components/ComplexitySwitch'


function Nav({setCustom, Custom}) {
	const [opened, setOpened] = useState(false)

	return (
		<>
			<nav >
				<ul className="">
					<li>
						<Link href="/">
							<a onClick={() => setOpened(false)}>About</a>
						</Link>
					</li>

					<li>
						<Link href="/blog">
							<a onClick={() => setOpened(false)}>Blog</a>
						</Link>
					</li>
					<section id="customize" aria-label="customize the website">
						<ModeButton setMode={setCustom} Custom={Custom} />
						<LanguageSwitcher setLanguage={setCustom} Custom={Custom} />
						<Complex setComplexity={setCustom} Custom={Custom} />
					</section>

				</ul>
			</nav>
		</>
	);
}

export default Nav;

/**
						<li>
						<Link href="/projects">
							<a onClick={() => setOpened(false)}>Projects</a>
						</Link>
					</li>
 */