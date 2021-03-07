import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export default function Blog(props) {
  props.articles.map(article => {
    console.log(article.fields.title)
  })
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name={props.name}
          content={props.content} />
        <title>{props.title}</title>
      </Head>
      <ul>
        {props.articles.map(article => (
          <li key={article.sys.id}>
            <Link href={'/blog/' + article.fields.slug}>
              <a href="">
              {article.fields.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data = await client.getEntries({
    content_type: 'article',
  })
  return {
    props: {
      title: "Blog - alt f4",
      name: "description",
      content: "Read about technologies and topics like cloud computing, DevOps, react front end development. Find tips about Kubernetes, Docker, Puppet, Azure, Firebase and Google cloud platform. Explore tutorials on Python programming, and front end.",
      articles: data.items
    }
  }
}
