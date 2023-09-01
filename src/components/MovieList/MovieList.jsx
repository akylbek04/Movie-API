import { Movie } from "../Movie/Movie";
import './MovieList.css'

export const MovieList = ({ data, handleAdd, isFav, checkFav }) => {
  
  return (
    <div className="container my-5 p-0">
      
      {data?.map((movie) => {
        const check = checkFav(movie.imdbID);
        return <Movie key={movie.imdbID} {...movie} handleAdd={handleAdd} isFav={isFav}  check={check}/>;
      })}
    </div>
  );
};
