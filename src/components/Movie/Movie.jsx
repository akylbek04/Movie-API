import "./Movie.css";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";
import  { useState } from 'react';

export const Movie = ({ imdbID, Title, Year, Poster, handleAdd, isFav }) => {
  
  const [editId, setEditId] = useState(null)

  const handleSetId = (id) => {
    setEditId(id)
    handleAdd(id)
  }

  const clName = editId !== null && editId === imdbID ? 'heart-active' : 'heart'
  return (
    <div className="movie-card">
      <img
        src={
          Poster || "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        }
        alt={Title}
        className="img-fluid"
      />
      <BiSolidCameraMovie className="movie" />
      <p className="card-title">
        {Title}{" "}
        <AiFillHeart onClick={() => handleSetId(imdbID)} className={clName} />
      </p>
    </div>
  );
};
