import Head from 'next/head'
import { GetStaticProps } from 'next'
import dynamic from "next/dynamic"

const Intro = dynamic(import("../components/Intro"))
const WhatIUse = dynamic(import("../components/WhatIUse"))
const Contact = dynamic(import("../components/Contact"))


export default function Home(props) {
//  console.log(props.introduction)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="For DevOps, frontend and cloud computing. I write about IT automation, python, Controversial opinions, UI/UX design and Google Cloud Platform." />
        <title>alt f4 - DevOps, Frontend, Cloud and Daring opinions</title>
      </Head>
      <Intro prop={props.introduction}/>
      <WhatIUse prop={props.WhatIUse}/>
      <Contact prop={props.ContactInfo}/>
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
      ContactInfo: ContactInfo
    }
  }
}