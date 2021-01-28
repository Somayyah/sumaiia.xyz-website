import Link from "next/link"
import {useState} from 'react'

function Nav() {
	const [opened, setOpened] = useState(false)

	return (
		<>
			<button className="hamburger" onClick={() => setOpened(!opened)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="-276 -12 314 50" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
				</svg>
			</button>
			<nav aria-label="navigation menu" className={`navigation nav-visible-${opened}`}>
				<ul className="">
					<li>
							<Link href="/">
									<a onClick={() => setOpened(false)}>Main</a>
							</Link>
					</li>
					<li>
							<Link href="/resume">
									<a onClick={() => setOpened(false)}>Resume</a>
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
					<li>
							<Link href="/contact">
									<a onClick={() => setOpened(false)}>Get in touch</a>
							</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
