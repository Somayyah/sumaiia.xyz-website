import Head from 'next/head'
import Link from "next/link"
import { GetStaticProps } from 'next'

export default function Blog(props) {
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
        <meta
          name={props.name}
          content={props.content} />
        <title>{props.title}</title>
      </Head>
      <Link href="/posts/first">
        <a>Go to posts</a>
      </Link>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      title: "Blog - alt f4",
      name: "description",
      content: "Read about technologies and topics like cloud computing, DevOps, react front end development. Find tips about Kubernetes, Docker, Puppet, Azure, Firebase and Google cloud platform. Explore tutorials on Python programming, and front end."
    }
  }
}
