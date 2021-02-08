import Head from 'next/head'
import Link from "next/link"

export default function Blog() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Read about technologies and topics like cloud computing, DevOps, react front end development. Find tips about Kubernetes, Docker, Puppet, Azure, Firebase and Google cloud platform. Explore tutorials on Python programming, and front end."
        />
        <title>Blog - alt f4</title>
      </Head>
      <Link href="/first">
        <a>Go to posts</a>
      </Link>
    </>
  )
}
