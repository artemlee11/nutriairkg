import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
// import img1 from '../../img/nutriair.png';
import img2 from '../../img/gallery-energy.jpg';
import img3 from '../../img/gallery-sleep.jpg';
import img4 from '../../img/gallery-relax.jpg';
import img5 from '../../img/gallery-focus.jpg';
import img6 from '../../img/gallery-diet.jpg';
import img7 from '../../img/gallery-immune.jpg';
import img8 from '../../img/gallery-sweet.jpg';
import img9 from '../../img/gallery-img2.jpg';
import img10 from '../../img/gallery-img3.jpg';
import './Gallery.css';
const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    img2,
    img6,
    img3,
    img5,
    img4,
    img7,
    img8,
    img9,
    img10,

  ]
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
    return (
        <div className='Gallery'>
            <div className='gallery-text'>
                <h1>Галерея</h1>
                <p>Посмотрите фото из нашего Instagram</p>
            </div>
            {images.map((src, index) => (
              <img
              src={ src }
              className="gallery-img"
              onClick={ () => openImageViewer(index) }
              width="320"
              key={ index }
              alt=""
              />
              ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
        </div>
    );
};

export default Gallery;