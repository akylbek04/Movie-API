import "./FavMovies.css";
import { FavMovie } from "../FavMovie/FavMovie";

export const FavMovies = ({ data, isRendered, handleDelete }) => {
    console.log(data, 'dnkfdsjkvdb', isRendered)
  return (
    <div className="container my-5 p-0">
      {isRendered &&
        data.length ? data.map(({ imdbID, Title, Poster }) => {
          return (
            <FavMovie key={imdbID} title={Title} id={imdbID} url={Poster} handleDelete={handleDelete}/>
          );
        }) : <div className="err" >No favourite movies found!!!</div>
  }
    </div>
  );
};
