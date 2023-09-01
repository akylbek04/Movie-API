import "./FavMovies.css";
import { FavMovie } from "../FavMovie/FavMovie";
import { AiOutlineFolderOpen } from "react-icons/ai";

export const FavMovies = ({ data, isRendered, handleDelete }) => {
    // console.log(data, 'dnkfdsjkvdb', isRendered)
  return (
    <div className="container my-5 p-0">
      {isRendered && data.length ? (
        data.map(({ imdbID, Title, Poster }) => {
          return (
            <FavMovie
              key={imdbID}
              title={Title}
              id={imdbID}
              url={Poster}
              handleDelete={handleDelete}
            />
          );
        })
      ) : (
        <AiOutlineFolderOpen />
      )}
    </div>
  );
};
