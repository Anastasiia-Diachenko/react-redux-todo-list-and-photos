import React from "react";

const Album = ({ album }) => {
  return (
    <div className="photo-container">
      <ul>
        {album?.map((photo) => (
          <>
            <li className="photo-item" key={photo.id}>
              <h2>{photo.title[0].toUpperCase() + photo.title.slice(1)}</h2>
              <img src={photo.url} alt="" />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Album;
