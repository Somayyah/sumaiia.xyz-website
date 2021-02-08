import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicBrief = dynamic(() => import('../components/Brief'))

export default function Home() {
  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <meta
          name="description"
          content="For DevOps, frontend and cloud computing. I write about IT automation, python, Controversial opinions, UI/UX design and Google Cloud Platform."/>
          <title>alt f4 - DevOps, Frontend, Cloud and Daring opinions</title>
      </Head>
      <DynamicBrief />
    </>
  )
}
