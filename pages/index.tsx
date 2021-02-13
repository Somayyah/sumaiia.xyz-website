import Head from 'next/head'
import { GetStaticProps } from 'next'
import parse from 'html-react-parser'
import { motion, useViewportScroll } from "framer-motion"


export default function Home(props) {
  const { scrollYProgress } = useViewportScroll()

  return (
    <div >
      <Head>
        <meta charSet="utf-8" />
        <meta
          name={props.name}
          content={props.content} />
        <title>{props.title}</title>
      </Head>
      <motion.div className="introduction" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        {parse(props.introduction.content)}
      </motion.div>
      <div className='WhatIUse'>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>What I use</motion.h1>
        <hr />
        {props.WhatIUse.list.map((item, index) => (
          <motion.img key={`WhatIUse${index}`} src={item}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}/>
        ))}
      </div>
      <motion.div className="ContactInfo" style={{ scale: scrollYProgress }}>
        <h1>Find me at</h1>
        <hr />
        <ul>
          {props.ContactInfo.list.map((item, index) => (
            <li key={`contactInfo${index}`}>{item}</li>
          ))}
        </ul>
      </motion.div>
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
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png",
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
      "https://iconape.com/wp-content/files/an/351546/svg/tailwind-css-seeklogo.com.svg",
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
      "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Linux_Logo_in_Linux_Libertine_Font.svg/1200px-Linux_Logo_in_Linux_Libertine_Font.svg.png",
      "https://newhorizons.com.sg/wp-content/uploads/2019/04/python.png"
    ]
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