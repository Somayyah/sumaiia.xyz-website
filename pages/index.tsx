import Head from 'next/head'
import { GetStaticProps } from 'next'
import parse from 'html-react-parser'
import { motion } from "framer-motion"

export default function Home(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name={props.name}
          content={props.content} />
        <title>{props.title}</title>
      </Head>
      <motion.div className="introduction" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        {parse(props.introduction.content)}
      </motion.div>
      <motion.div className='WhatIUse' animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        <h1>What I use</h1>
        <hr />
        <ul>
          {props.WhatIUse.list.map((item, index) => (
            <li key={`WhatIUse${index}`}>{item}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="ContactInfo" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        <h1>Find me at</h1>
        <hr />
        <ul>
          {props.ContactInfo.list.map((item, index) => (
            <li key={`contactInfo${index}`}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </>
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
    list: ["next js",
      "React js",
      "C++",
      "Linux",
      "Docker",
      "Google Cloud Platform",
      "HTML5/CSS3/JS/TS"]
  }

  const introduction: intro = {
    content: "I'm a self-taught programmer with a passion for anything <span>Linux</span>,<span> Networking</span>, <span>DevOps</span> and <span>web development</span>. I write about <span>Cloud computing</span>, <span>cybersecurity</span>, <span>React.js</span>, <span>Kubernetes </span> and much more. Here, I document my projects, interests and a way to reach me out. I always try to diversify my Knowledge and challenge myself.<span className='stayTuned'>Stay tuned!!</span>"
  }

  const ContactInfo: template = {
    title: "Find me at",
    list: ["linkedIn",
      "github",
      "codepen",
      "YouTube"]
  }

  return {
    props: {
      introduction: introduction,
      WhatIUse: WhatIUse,
      ContactInfo: ContactInfo,
      title: "alt f4 - DevOps, Frontend, Cloud and Daring opinions",
      name: "description",
      content: "For DevOps, frontend and cloud computing. I write about IT automation, python, Controversial opinions, UI/UX design and Google Cloud Platform."
    }
  }
}