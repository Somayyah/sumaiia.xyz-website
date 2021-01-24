import Link from "next/link"

function Nav() {
	return (
        <nav className="">
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
	);
}

export default Nav;
