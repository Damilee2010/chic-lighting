import React, { useState } from "react";
import "../styles/Gallery.css";

function Gallery() {
  const GALLERY = [
    { src: "/images/led-spot.jpg" },
    { src: "/images/led-decoration.jpg" },
    { src: "/images/accent-light.jpg" },
    { src: "/images/atlas-garden-lantern.jpg" },
    { src: "/images/apart-led.jpg" },
    { src: "/images/chandelier.jpg" },
    { src: "/images/eclipse-garden-lamp.jpg" },
    { src: "/images/nimbus-lantern.jpg" },
    { src: "/images/wall-sconce.jpg" },
    { src: "/images/strip-led.jpg" },
    { src: "/images/lyra-outdoor-lantern.jpg" },
    { src: "/images/solara-hanging-light.jpg" },
    { src: "/images/vintage-lamp.jpg" },
    { src: "/images/pendant-lamp.jpg" },
    { src: "/images/zen-accent-light.jpg" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  return (
    <section className="gallery-section animate-up">
      <h2 className="section-title">Gallery</h2>
      <p className="gallery-subtitle">
        Explore our lighting and fan collections — where modern design meets comfort.
      </p>
      <div className="gallery-grid">
        {GALLERY.map((item, i) => (
          <div key={i} className="gallery-item" onClick={() => openModal(item.src)}>
            <img src={item.src} alt={`Gallery ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img src={selectedImage} alt="Enlarged view" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;