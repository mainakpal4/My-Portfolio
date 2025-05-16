import React from 'react';
import './ArtZest.css';

const paintings = [
  {
    title: 'Mountain Escape',
    image: '/Dancing-Tribals.jpg',
    // price: '₹5000',
    // link: 'https://yourstorelink.com/sunset-bliss',
  },
  {
    title: 'Boho Girl',
    image: '/Boho-painting.jpg',
    // price: '₹4500',
    // link: 'https://yourstorelink.com/mountain-escape',
  },
  {
    title: 'Wisdom',
    image: '/Buddha.jpg',
    // price: '₹6000',
    // link: 'https://yourstorelink.com/ocean-breeze',
  },
];

function ArtZest() {
  return (
    <section className="artzest-section" id="artzest">
      <h2>ArtZest Studios</h2>
      <p>Explore my paintings for sale. Click to buy or inquire about custom artworks!</p>
      <div className="artwork-grid">
        {paintings.map((artwork, index) => (
          <div className="artwork-card" key={index}>
            <img src={artwork.image} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            {/* <p>{artwork.price}</p>
            <a href={artwork.link} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtZest;
