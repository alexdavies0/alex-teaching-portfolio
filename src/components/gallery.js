import React from 'react';
import { artworks } from "../data";

export default function Gallery() {
  return (
      <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-4">
          <div>
            {artworks.map((artwork) => (
            <div className="center-screen">
              <div className="project-card">
                <img className="project-image"
                alt={artwork.title}
                src={artwork.image_url}
                />
              <div className="project-text">
                <h2>
                  <strong>{artwork.title}</strong>
                  <br />
                  <em>{artwork.media}</em>
                  <br />
                  {artwork.ks}
                </h2>
              </div>


              <p>
                {artwork.description}
              </p>
              <br />
              <br />
              <hr />
              <br />
              <br />

            </div>
            </div>

            ))}
          </div>
        </div>

      </div>

  );
}
