import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
	const router = useRouter();

	const classN = router.pathname === href ? "active" : null;

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
