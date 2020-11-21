import React from 'react'
import './Components.css'

function Projects({match}) {
    return (
        <div className="projects">
            <h2>This is Project {match.params.projectId}</h2>
        </div>
    )
}

export default Projects
