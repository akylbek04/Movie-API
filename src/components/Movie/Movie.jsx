import "./Movie.css";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Card } from "../Styled-components/Styles";


export const Movie = ({ imdbID, Title, Poster, handleAdd, check }) => {

  const clName = check ? "heart-active" : "heart";
  return (
    <Card>
      <img
        src={
          Poster ||
          "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        }
        alt={Title}
        className="img-fluid"
      />
      <BiSolidCameraMovie className="movie" />
      <p className="card-title">
        {Title}
        <AiFillHeart onClick={() => handleAdd(imdbID)} className={clName} />
      </p>
    </Card>
  );
};
