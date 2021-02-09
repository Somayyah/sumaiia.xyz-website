import parse from 'html-react-parser'

export default function Intro (prop) {
    //console.log("==============\nprop:",prop.prop.content)
    return (
        <div className="introduction">
            {parse(prop.prop.content)}
        </div>
    )
}