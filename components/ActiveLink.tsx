import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
	const router: any = useRouter();

	const classN: string = router.pathname === href ? "active" : null;

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
