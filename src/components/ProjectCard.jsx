import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, github, live }) {
    return (
        <motion.div
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.98 }}
            style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
                width: '300px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s ease'
            }}
        >
            <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ marginTop: '15px' }}>{title}</h3>
            <p>{description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>GitHub</a>
                <a href={live} target="_blank" rel="noopener noreferrer" style={{ color: '#28a745' }}>Live</a>
            </div>
        </motion.div>
    );
}

export default ProjectCard;