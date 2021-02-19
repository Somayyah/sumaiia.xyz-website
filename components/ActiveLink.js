import { useRouter } from "next/router";
import active from "../styles/local/components/navbaractive.module.scss"

function ActiveLink({ children, href }) {
	const router = useRouter();

	const classN = router.pathname === href ? active.active : null;

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={href} onClick={handleClick} className={classN}>
			{children}
		</a>
	);
}

export default ActiveLink;
