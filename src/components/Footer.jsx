function Footer() {
    return (
        <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f2f2f2', marginTop: '20px' }}>
            <p>© {new Date().getFullYear()} Fahim's Portfolio. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;