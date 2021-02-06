import Link from "./ActiveLink";
import { useState } from 'react'

function Nav() {
	const [opened, setOpened] = useState(false)

	return (
		<>
			<nav className={`navigation`}>
				<ul className="">
					<li>
						<Link href="/">
							<a onClick={() => setOpened(false)}>Main</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a onClick={() => setOpened(false)}>Projects</a>
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
