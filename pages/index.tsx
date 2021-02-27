import Head from 'next/head'
import { GetStaticProps } from 'next'
import styles from "../styles/local/pages/index.module.scss"

export default function Home(props) {

  return (
    <div >
      <Head>
        <meta charSet="utf-8" />
        <meta
          name={props.name}
          content={props.content} />
        <title>{props.title}</title>
      </Head>
      <div className={styles.introduction}>
        <p>
          I'm a self-taught programmer with a passion for anything <span>Linux</span>,<span> Networking</span>, <span>DevOps</span> and <span>web development</span>. I write about <span>Cloud computing</span>, <span>cybersecurity</span>, <span>React.js</span>, <span>Kubernetes </span> and much more. Here, I document my projects, interests and a way to reach me out. I always try to diversify my Knowledge and challenge myself.<h1 className='stayTuned'>Stay tuned!!</h1>
        </p>
      </div>
      <div className={styles.WhatIUse} >
        <ul>
          {props.WhatIUse.list.map((item, index) => (
            <li key={`WhatIUse${index}`}>#{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  interface template {
    title: string;
    list: string[];
  }

  interface intro {
    content: string;
  }

  const WhatIUse: template = {
    title: "What I use",
    list: [
      "next js",
      "React js",
      "C++",
      "Linux",
      "Docker",
      "Google Cloud Platform",
      "HTML5/CSS3/JS/TS",
      "Microsoft Azure",
      "Rust",
      "Python",
      "C/C++"
    ]
  }

  return {
    props: {
      WhatIUse: WhatIUse,
      title: "alt f4 - DevOps, Frontend, Cloud and Daring opinions",
      name: "description",
      content: "For DevOps, frontend and cloud computing. I write about IT automation, python, Controversial opinions, UI/UX design and Google Cloud Platform."
    }
  }
}