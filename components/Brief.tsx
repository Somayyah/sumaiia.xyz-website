import dynamic from 'next/dynamic'

const Intro = dynamic(() => import('./Introduction'))
const WhatIUse = dynamic(() => import('./WhatIuse'))
const Contact = dynamic(() => import('./Contact'))


const Brief = (props) => {
    return (
        <>
            <Intro prop={props[0]} />
            <WhatIUse prop={props[1]} />
            <Contact prop={props[2]} />
        </>
    )
}

export async function getStaticProps() {
    const WhatIUse = <div className="WhatIUse">
        <h1>What I use</h1>
        <ul>
            <li>next js</li>
            <li>React js</li>
            <li>C++</li>
            <li>Linux</li>
            <li>Docker</li>
            <li>Google Cloud Platform</li>
            <li>HTML5/CSS3/JS/TS</li>
        </ul>
    </div>

    const introduction = <div className="introduction">
        I'm a self-taught programmer with a passion for anything{" "}
        <span>Linux</span>,<span> Networking</span>, <span>DevOps</span> and{" "}
        <span>web development</span>. I write about{" "}
        <span>Cloud computing</span>, <span>cybersecurity</span>,{" "}
        <span>React.js</span>, <span>Kubernetes </span>
and much more. Here, I document my projects, interests and a way to
reach me out. I always try to diversify my Knowledge and challenge
myself. <span className="stayTuned">Stay tuned!!</span>
    </div>

    const ContactInfo = <div className="ContactInfo">
        <h1>Find me at:</h1>
        <ul>
            <li>linkedIn</li>
            <li>github</li>
            <li>codepen</li>
            <li>YouTube</li>
        </ul>
    </div>

    return {
        props: [introduction, WhatIUse, ContactInfo]
    }
}

export default Brief