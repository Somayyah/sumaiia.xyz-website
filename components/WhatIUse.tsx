export default function WhatIUse(prop) {
    console.log("==============\nprop:",prop.prop.list)
    return (
        <div className='WhatIUse'>
            <h1>What I use</h1>
            <hr />
            <ul>
                {prop.prop.list.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}