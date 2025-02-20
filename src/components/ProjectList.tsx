const ProjectList = ({ projects }: IProjects) => {
    return (
        <div className="projects">
            <ul className="projects-list">
                {projects.map((project, indx) => (
                    <li className="project-elem" key={indx}>
                        <img src={project.img} alt={project.category} className="project-img" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectList;