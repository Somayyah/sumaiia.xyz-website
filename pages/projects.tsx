import Head from 'next/head'
import { GetStaticProps } from 'next'

export default function Projects(props) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name={props.name}
					content={props.content} />
				<title>{props.title}</title>
			</Head>
      Projects page
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {

	return {
		props: {
			title: "Projects - Frontend Development, Programming and DevOps",
			name: "description",
			content: "My projects and contributions for DevOps, frontend and cloud computing. This includes Python programming, IT automation, system administration and frontend development."
		}
	}
}

