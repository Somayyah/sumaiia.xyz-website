import { GetStaticProps } from 'next'

interface template {
    title: string;
    list: string[];
}

interface intro {
    content:string;
}

const Brief = (props) => {

    console.log(props)
    return (
        <>
            
        </>
    )
}

/*
<div className="introduction">
                <p>{props.introduction.content}</p>
                <h1 className="stayTuned">Stay tuned!!</h1>
            </div>
            <div className='WhatIUse'>
                <h1>What I use</h1>
                <ul>
                    {props.WhatIUse.list.map( item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="ContactInfo">
                <h1>Find me at</h1>
                <ul>
                    {props.ContactInfo.list.map( item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
*/

export const getStaticProps: GetStaticProps = async () => {

    const WhatIUse: template = {
        title: "What I use",
        list: [ "next js",
            "React js",
            "C++",
            "Linux",
            "Docker",
            "Google Cloud Platform",
            "HTML5/CSS3/JS/TS" ]
    }

    const introduction: intro = {
        content: " I'm a self-taught programmer with a passion for anything Linux, Networking, DevOps and web development. I write about Cloud computing,  cybersecurity, React.js,  Kubernetes and much more. Here, I document my projects, interests and a way to reach me out. I always try to diversify my Knowledge and challenge myself." 
    }

    const ContactInfo: template = {
        title: "Find me at",
        list: [ "linkedIn",
        "github",
        "codepen",
        "YouTube" ]
    }

    return {
        props: {
                introduction: introduction,
                WhatIUse: WhatIUse,
                ContactInfo: ContactInfo
        }
    }
}

export default Brief