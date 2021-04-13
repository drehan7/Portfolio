
import React from 'react'

import { project_data } from "./project-data"

function Projects({ section, setSection }) {
    return (
        <>{
            (section === 'projects') && (
                <div className="projects-container">
                    <h1>Projects</h1>
                    <hr />
                    <br />
                    {project_data.map((project) => (
                        <div className="project">
                            <ul>
                                <li>{project.title}</li>
                                <li>{project.description}</li>
                                <li>{project.code_link}</li>

                            </ul>
                        </div>
                    ))}
                </div>
            )
        }
        </>
    )
}

export default Projects
