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
I'm a self-taught programmer with a passion for anything Linux, Networking, DevOps, and web development. I write about Cloud computing, cybersecurity, React.js, Kubernetes, and much more. Here, I document my projects, interests, and a way to reach out. I always try to diversify my knowledge and challenge myself.
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

  const WhatIUse: template = {
    title: "What I use",
    list: [
      "next js",
      "React js",
      "C++",
      "Linux",
      "Docker",
      "GCP",
      "HTML5/CSS3/JS/TS",
      "MS Azure",
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
