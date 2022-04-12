import React, { useState } from "react";
import { getPhotos } from "../../api/api";
import Album from "./Album";

import "./Photos.css";

const Photos = () => {
  const [album, setAlbum] = useState(null);
  const [id, setId] = useState("");
  const [, setIsFound] = useState(true);

  const searchAlbum = () => {
    getPhotos(id).then((data) => {
      if (data.Response === "False") {
        setIsFound(false);
        setAlbum(null);

        return;
      }

      setAlbum(data);
      setId("");
      setIsFound(true);
    });
  };

  return (
    <div>
      <h1 className="photo-title">Photos</h1>
      <input
        className="input-search"
        type="text"
        placeholder="Enter an album id"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <div>
        <button className="btn-add" onClick={searchAlbum}>
          Get photos
        </button>
      </div>

      <div className="">{album && <Album album={album} />}</div>
    </div>
  );
};

export default Photos;
