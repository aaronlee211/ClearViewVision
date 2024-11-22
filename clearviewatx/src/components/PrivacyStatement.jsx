import React from 'react';

function PrivacyStatement() {
    const containerStyle = {
        maxWidth: '900px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.8',
    };

    const headingStyle = {
        fontSize: '2rem',
        color: '#222',
        marginBottom: '10px',
    };

    const dateStyle = {
        fontSize: '0.9rem',
        color: '#777',
        marginBottom: '20px',
    };

    const subheadingStyle = {
        fontSize: '1.5rem',
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px',
    };

    const listStyle = {
        marginLeft: '20px',
        paddingLeft: '20px',
        listStyleType: 'disc',
    };

    const paragraphStyle = {
        fontSize: '1rem',
        color: '#444',
        marginBottom: '15px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Privacy Statement</h1>
            <p style={dateStyle}>Effective: June 13, 2023</p>
            <p style={paragraphStyle}>
                ClearView Vision is committed to safeguarding the privacy of our users. We want to assure you that we do not share your personal information with third parties. This Notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
            </p>

            <h2 style={subheadingStyle}>We Are Required By Law To:</h2>
            <ul style={listStyle}>
                <li>Maintain the privacy of your protected health information;</li>
                <li>Give you this notice of our duties and privacy practices regarding health information about you;</li>
                <li>Follow the terms of our notice that is currently in effect.</li>
            </ul>

            <h2 style={subheadingStyle}>Information Collection</h2>
            <p style={paragraphStyle}>
                We collect only the information necessary to provide and improve our services. This may include name, email address, etc. We do not sell, rent, or share this information with any third parties for their own marketing purposes.
            </p>

            <h2 style={subheadingStyle}>How We May Use Your Information</h2>
            <p style={paragraphStyle}>
                The information collected is used solely for communicating with the intended party. Described as follows are the ways we may use and disclose health information that identifies you (Health Information, or PHI). Except for the following purposes, we will use and disclose Health Information only with your written permission.
            </p>

            <h3 style={subheadingStyle}>Appointment Reminders, Treatment Alternatives & Health Related Benefits and Services</h3>
            <p style={paragraphStyle}>
                We may use and share your health information to contact you with appointment reminders. Additionally, we may use and share your information to inform you about treatment options or health-related benefits and services that might interest you.
            </p>

            <h3 style={subheadingStyle}>Treatment</h3>
            <p style={paragraphStyle}>
                We may use and share your health information to support your treatment and provide related health care services. For instance, we may share your information with doctors, nurses, or other personnel involved in your care.
            </p>

            <h3 style={subheadingStyle}>Healthcare Operations</h3>
            <p style={paragraphStyle}>
                We may use and share your health information for health care operations, which are essential to ensuring that all our patients receive high-quality care and to managing our office effectively.
            </p>

            <h3 style={subheadingStyle}>Payment</h3>
            <p style={paragraphStyle}>
                We may use and share your health information to bill and collect payment from you, your insurance company, or a third party for the treatment and services you have received.
            </p>

            <h3 style={subheadingStyle}>Other Instances</h3>
            <p style={paragraphStyle}>
                As required by law, we will disclose Health Information when required to do so by federal, state, or local law.
            </p>

            <h2 style={subheadingStyle}>Your Choices</h2>
            <p style={paragraphStyle}>
                You have the right to access, correct, or delete your information. If you have any concerns or questions about your data, please contact us at 512-957-6001.
            </p>

            <h2 style={subheadingStyle}>Changes to This Notice</h2>
            <p style={paragraphStyle}>
                We may update our privacy policy from time to time. Any changes will be communicated to you, and your continued use of our services implies your acceptance of the updated policy.
            </p>

            <h2 style={subheadingStyle}>Complaints</h2>
            <p style={paragraphStyle}>
                If you believe your privacy rights have been violated, you may file a complaint with our office or with the Secretary of the Department of Health and Human Services.
            </p>
            <p style={paragraphStyle}>Privacy Contact Officer: Micaela Lee</p>
            <p style={paragraphStyle}>Last updated: November 21, 2024</p>
        </div>
    );
}

export default PrivacyStatement;
