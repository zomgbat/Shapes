import React from 'react';
import '../styles/Gallery.css'

function Gallery() {
    const images = [
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/1-1.jpg?strip=info&w=1920',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/2-1.jpg?strip=info&w=900',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/dsc_0180.jpg?strip=info&w=900',
        'https://ourshapes.files.wordpress.com/2023/02/ayr.jpg',
        'https://ourshapes.files.wordpress.com/2023/02/5-4.jpg?w=1024&h=576',
        'https://ourshapes.files.wordpress.com/2023/02/img20220601171105.jpg?w=1024&h=768',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/dallc2b7e-2024-08-21-11.22.26-a-mystical-old-fashioned-room-with-dark-wood-and-antique-furniture-shelves-filled-with-ancient-books-and-warm-candlelight-casting-a-soft-glow.-a-di.webp',
        'https://ourshapes.files.wordpress.com/2023/02/map2.png',
        'https://ourshapes.files.wordpress.com/2023/02/day-7-2.webp',
        'https://yourshapes.wordpress.com/wp-content/uploads/2024/09/unnamed.jpg',
        'https://ourshapes.files.wordpress.com/2023/02/13.webp',
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


