import React from 'react';
import '../styles/Gallery.css'

function Gallery() {
    const images = [
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/1-1.jpg?strip=info&w=1920',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/2-1.jpg?strip=info&w=900',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/dsc_0180.jpg?strip=info&w=900',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/5-4.jpg?strip=info&w=2000',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/6-6.jpg?strip=info&w=2000',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/img20220601171105.jpg?strip=info&w=2000',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/dallc2b7e-2024-08-21-11.22.26-a-mystical-old-fashioned-room-with-dark-wood-and-antique-furniture-shelves-filled-with-ancient-books-and-warm-candlelight-casting-a-soft-glow.-a-di.webp',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/unnamed-2.jpg',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/unnamed.png',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/unnamed.jpg',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/3-2.jpg',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/a08b0c85-76f8-4b61-8324-0beb92efb112.webp'
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


