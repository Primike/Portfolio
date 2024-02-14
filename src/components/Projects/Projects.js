import Project from "./components/Project"
import projects from "./data/ProjectData"
import "./Projects.css"

function Projects() {
    return (
        <div className="projects-div">
            <h1 className="projects-title">iOS/FullStack Projects</h1>
            <div className="project-collection">
                {projects.map ((project)=> {
                    return <Project project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects