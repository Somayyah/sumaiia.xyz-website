import Head from 'next/head'

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
      <div className="introduction">
        I'm a self-taught programmer with a passion for anything{" "}
        <span>Linux</span>,<span> Networking</span>, <span>DevOps</span> and{" "}
        <span>web development</span>. I write about{" "}
        <span>Cloud computing</span>, <span>cybersecurity</span>,{" "}
        <span>React.js</span>, <span>Kubernetes </span>
        and much more. Here, I document my projects, interests and a way to
        reach me out. I always try to diversify my Knowledge and challenge
        myself. Stay tuned!!
      </div>
    </>
  )
}
