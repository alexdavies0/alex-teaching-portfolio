import React from 'react';
import { artworks } from "../data";

export default function Gallery() {
  return (
      <div>
        {artworks.map((artwork) => (
        <div className="center-screen">
        <div className="project-card">
          <img className="project-image"
          alt={artwork.title}
          src={artwork.image}
          />
          <div className="center-text">
            <h2>
              <strong>{artwork.title}</strong>
              <br />
              <em>{artwork.artist}</em> ({artwork.year})
              <br />
              {artwork.media[0]}
            </h2>

          </div>


          <p>
            {artwork.description}
          </p>

        </div>
        </div>

        ))}
      </div>

  );
}
