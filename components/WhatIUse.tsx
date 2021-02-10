export default function WhatIUse(prop) {
    return (
        <div className='WhatIUse'>
            <h1>What I use</h1>
            <hr />
            <ul>
                {prop.prop.list ? prop.prop.list.map((item, index) => (
                    <li key={`WhatIUse${index}`}>{item}</li>
                )) : null}
            </ul>
        </div>
    )
}