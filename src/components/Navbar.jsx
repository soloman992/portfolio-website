import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 30px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative'
        }}>
            <NavLink to="/" style={{ textDecoration: 'none', color: '#007bff', cursor: 'pointer' }}>
                <h2>Fahim</h2>
            </NavLink>

            {/* <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
                display: 'none',
                flexDirection: 'column',
                cursor: 'pointer',
                gap: '5px'
            }}>
                <div style={{ width: '25px', height: '3px', backgroundColor: '#333' }}></div>
                <div style={{ width: '25px', height: '3px', backgroundColor: '#333' }}></div>
                <div style={{ width: '25px', height: '3px', backgroundColor: '#333' }}></div>
            </div> */}

            {/* Hamburger / Close Button */}
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
                display: 'none',
                cursor: 'pointer',
                fontSize: '30px',
                position: 'relative',
                zIndex: 9999
            }}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </div>


            <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
                <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{
                            position: 'absolute',
                            top: '60px',
                            left: 0,
                            right: 0,
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            padding: '60px 20px 20px 20px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            zIndex: 1000
                        }}
                    >
                        <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
