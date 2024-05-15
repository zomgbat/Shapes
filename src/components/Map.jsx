import React from 'react';

const MapComponent = () => {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.804049924635!2d2.1745438750386032!3d41.37834181536751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a257780e068d%3A0x39197aaabbf0eac5!2sMoog!5e0!3m2!1sen!2ses!4v1715785555007!5m2!1sen!2ses"
            width="400"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
}

export default MapComponent;

