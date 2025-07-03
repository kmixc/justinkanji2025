import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects';

import './ProjectPage.css';

export default function ProjectPage() {

    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="project-not-found-page">
                <div className="project-not-found-message">
                    Project not found
                </div>
                <Link className="project-not-found-back" to="/work">
                    Back to my work.
                </Link>
            </div>
        );
    }

    console.log(project.image);

    return (
        <div className="project-page">
            <p className="project-label">{project.label}</p>
            <h1 className="project-title">{project.title}</h1>
            <div className="project-hero-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-description">
                <h3>About</h3>
                <p>{project.about}</p>
            </div>

            <div className="project-back-link">
                <Link to="/work" >
                    Back to my work.
                </Link>
            </div>
        </div>
    );
}
