import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) setIsMenuOpen(false);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px 30px',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                justifyContent: 'space-between',
                height: '60px',
                zIndex: 1000,
            }}>

                <NavLink to="/" style={{ 
                    textDecoration: 'none',
                    color: '#007bff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                }}>
                    <h2 style={{ margin: 0, lineHeight: 1, fontSize: '1.5rem' }}>Fahim</h2>
                </NavLink>

                <div className="spacer" style={{ flexGrow: 1 }} />

                {isMobile && (
                    <div
                        className="hamburger"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            cursor: 'pointer',
                            fontSize: '30px',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </div>
                )}

                {!isMobile && (
                    <div className="nav-links" style={{ display: 'flex', gap: '20px',}}>
                        <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                    </div>
                )}
            </nav>

            <AnimatePresence>
                {isMobile && isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{
                            backgroundColor: '#ffffff',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            position: 'absolute',
                            top: '70px',
                            left: 0,
                            right: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '20px 30px',
                            gap: '15px',
                            zIndex: 999,
                        }}
                    >
                        <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;