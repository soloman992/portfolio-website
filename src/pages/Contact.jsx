import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mzzgygqv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again.');
        }
    };



    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px',
            minHeight: '80vh',
            textAlign: 'center'
        }}>
            <h1>Contact Me</h1>
            <p>Let's vibe together! Fill out the form below to get in touch.</p>

            <form 
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: '400px',
                    marginTop: '20px',
                    gap: '15px'
            }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd'
                    }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd'
                    }}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd'
                    }}
                ></textarea>
                <button type="submit" style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    cursor: 'pointer'
                }}>
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
