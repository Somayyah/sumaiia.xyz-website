import dynamic from 'next/dynamic'

const Intro = dynamic(() => import('./Introduction'))
const WhatIUse = dynamic(() => import('./WhatIuse'))
const Contact = dynamic(() => import('./Contact'))


const Brief = () => {
    return (
        <>
            <Intro />
            <WhatIUse />
            <Contact />
        </>
    )
}

export default Brief