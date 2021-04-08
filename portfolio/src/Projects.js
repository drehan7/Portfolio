
import React from 'react'

function Projects({ setSection }) {
    return (
        <div>
            <h1>Projects go here</h1>
            <button onClick={setSection(null)}>Back</button>
        </div>
    )
}

export default Projects
