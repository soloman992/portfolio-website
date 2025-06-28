import ProjectCard from '../components/ProjectCard';

function Projects() {
    const projectData = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio to showcase my work.',
            image: '/portfolio-website/images/pic1.jpg',
            github: 'https://github.com/soloman992/portfolio-website',
            live: 'https://soloman992.github.io/portfolio-website/'
        },
        {
            title: 'Blog App',
            description: 'A full stack blog application with CRUD features.',
            image: '/portfolio-website/images/pic2.jpg',
            github: 'https://github.com/',
            live: 'https://google.com'
        },
        // Add more projects as you build them
    ];

    return (
        <div style={{
            padding: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
        }}>
            {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    live={project.live}
                />
            ))}
        </div>
    );
}

export default Projects;
