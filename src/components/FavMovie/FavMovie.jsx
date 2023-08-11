import { BsTrash2Fill } from "react-icons/bs";
import { BiSolidCameraMovie } from "react-icons/bi";
import "./FavMovie.css";

export const FavMovie = ({ url, id, title, handleDelete }) => {
  return (
    <div className="movie-card">
      <img src={url} alt={title} className="img-fluid" />
      <BiSolidCameraMovie className="movie" />
      <p className="card-title">
        {title}{" "}
        <BsTrash2Fill onClick={() => handleDelete(id)} className="trash" />
      </p>
    </div>
  );
};
