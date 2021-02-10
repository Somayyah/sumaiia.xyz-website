import parse from 'html-react-parser'

export default function Intro (prop) {
    return (
        <div className="introduction">
            {parse(prop.prop.content)}
        </div>
    )
}