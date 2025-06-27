import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px 20px',
            height: '80vh',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Hey, I’m Fahim 👋</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
                A vibe-driven Full Stack Web Developer. I build, I create, I vibe.
            </p>
            
            <NavLink to="/projects" style={{ textDecoration: 'none', color: '#fff' }}>
                <motion.div
                href="#projects"
                    whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        marginTop: '30px',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        display: 'inline-block',
                        textDecoration: 'none'
                    }}
                >
                    Check My Work
                </motion.div>
            </NavLink>
        </div>
    );
}

export default Home;