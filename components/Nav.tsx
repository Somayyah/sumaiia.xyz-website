import Link from "next/link"
import ICONS from '../components/icons'
function Nav() {
	return (
  	<div className="">
			<button className="block">{ICONS.list}</button>
			<nav aria-label="navigation menu" className="navigation">
					<ul className="">
							<li>
									<Link href="/">
											<a>Main</a>
									</Link>
							</li>
							<li>
									<Link href="/resume">
											<a>Resume</a>
									</Link>
							</li>
							<li>
									<Link href="/projects">
											<a>Projects</a>
									</Link>
							</li>

							<li>
									<Link href="/blog">
											<a>Blog</a>
									</Link>
							</li>
							<li>
									<Link href="/contact">
											<a>Get in touch</a>
									</Link>
							</li>

					</ul>
			</nav>
		</div>
	);
}

export default Nav;
