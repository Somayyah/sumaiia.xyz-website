export default function Contact(prop) {
    return (
        <div className="ContactInfo">
            <h1>Find me at</h1>
            <hr />
            <ul>
                {prop.prop.list.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}