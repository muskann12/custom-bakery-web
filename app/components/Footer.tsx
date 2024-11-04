import React from 'react';

const Footer: React.FC = () => {
    // Define inline styles
    const footerStyle: React.CSSProperties = {
        backgroundColor: '#fbb6ce', 
        color: 'white',
        padding: '2.5rem 0',
        textAlign: 'center',
    };

    const textStyle: React.CSSProperties = {
        color: '#db2777',
        margin: 0, 
    };

    return (
        <footer style={footerStyle}>
            <p style={textStyle}>@Sprinkle & Dash. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
