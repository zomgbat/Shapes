import React from 'react';
import '../styles/Gallery.css'

function Gallery() {
    const images = [
        'https://ourshapes.files.wordpress.com/2023/02/2-1.jpg?w=1024',
        'https://ourshapes.files.wordpress.com/2023/02/1.jpg',
        'https://ourshapes.files.wordpress.com/2023/02/dsc_0180.jpg?w=1024&h=576',
        'https://ourshapes.files.wordpress.com/2023/02/ayr.jpg',
        'https://ourshapes.files.wordpress.com/2023/02/5-4.jpg?w=1024&h=576',
        'https://ourshapes.files.wordpress.com/2023/02/img20220601171105.jpg?w=1024&h=768',
        'https://ourshapes.files.wordpress.com/2023/02/al-2.webp',
        'https://ourshapes.files.wordpress.com/2023/02/map2.png',
        'https://ourshapes.files.wordpress.com/2023/02/day-7-2.webp',
        'https://ourshapes.files.wordpress.com/2023/02/picture3.jpg',
        'https://ourshapes.files.wordpress.com/2023/02/13.webp',
        'https://ourshapes.files.wordpress.com/2023/02/night-6.webp'
    ];

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}


export default Gallery;


