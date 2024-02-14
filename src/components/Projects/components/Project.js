function Project({ project }) {    
    const imagePath = require(`../assets/${project.image}`);
    
    return (
        <div className="project-card">
            <img className="project-image" src={imagePath} alt="projectimage"/>
            <h1 className="project-name">{project.name}</h1>
            <p className="project-description">{project.description}</p>
            <div className="links-div">
                <a id="project-link" href={project.git}>Github</a>
                <a id="project-link" href={project.demo}>Demo</a>
            </div>
        </div>
    )
}

export default Project