import Link from "./ActiveLink";
//import styles from "../styles/local/components/navbar.module.scss"
import { useState } from 'react'

function Nav() {
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