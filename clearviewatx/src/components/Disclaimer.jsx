import React from 'react';

function Disclaimer() {
    const containerStyle = {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
    };

    const headingStyle = {
        fontSize: '1.8rem',
        color: '#333',
        marginBottom: '15px',
    };

    const paragraphStyle = {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '10px',
    };

    const linkStyle = {
        color: '#007bff',
        textDecoration: 'none',
    };

    const linkHoverStyle = {
        ...linkStyle,
        textDecoration: 'underline',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Disclaimer</h1>
            <p style={paragraphStyle}>
                By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message from ClearView Vision. 
                Message frequency may vary. Message & data rates may apply. Reply STOP to opt-out of further messaging. Reply HELP for more information. 
                See our{' '}
                <a 
                    href="http://www.clearviewatx.com/privacypolicy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={(e) => e.target.style = linkHoverStyle}
                    onMouseOut={(e) => e.target.style = linkStyle}
                >
                    Privacy Policy
                </a>.
            </p>
        </div>
    );
}

export default Disclaimer;
