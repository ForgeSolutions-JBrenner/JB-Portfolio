import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
    return (
        <Typewriter
        options={{
            strings: [
                "Full-stack Developer",
                "Data Engineer",
                "MERN Stack Developer",
                "Open Source Contributor"
            ],
            autoStart: true,
            loop: true, 
            deleteSpeed: 80
        }}
        
        />
    )
}

export default Type
