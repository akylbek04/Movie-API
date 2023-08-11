import { Movie } from "../Movie/Movie";
import './MovieList.css'

export const MovieList = ({ data, handleAdd, isFav }) => {
  
  return (
    <div className="container my-5 p-0">
      {data?.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} handleAdd={handleAdd} isFav={isFav}/>;
      })}
    </div>
  );
};
