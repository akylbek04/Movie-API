import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Spinner, Button } from "reactstrap";
import { NavbarComp } from "./components/Navbar/Navbar";
import { MovieList } from "./components/MovieList/MovieList";
import { TbFileLike } from "react-icons/tb";
import { FavMovies } from "./components/FavMovies/FavMovies";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchQuery: "",
      favMov: [],
      isLoaded: false,
      isFav: false,
      favRendered: false,
    };
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    setTimeout(() => {
      this.fetchData(searchQuery);
    }, 1000);
  }

  fetchData = (movieName) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=c0790adf&s=${movieName}`)
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            movies: res.data.Search,
            isLoaded: true,
          };
        });
      });
  };

  handleClick = () => {
    const { searchQuery } = this.state;
    console.log(searchQuery);
    this.fetchData(searchQuery);
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleAdd = (id) => {
    console.log("hey");
    const { movies, favMov } = this.state;
    const copy = [...movies];
    const filtered = copy.filter((movie) => movie.imdbID === id);
    this.setState((prevState) => {
      return {
        ...prevState,
        favMov: [...favMov, ...filtered],
        isFav: true,
      };
    });
  };

  handleFavRender = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        favRendered: !this.state.favRendered,
      };
    });
  };
    
  handleDelete = (id) => {
    const filtered = this.state.favMov.filter(movie => movie.imdbID !== id );

    this.setState(prevState => {
      return({
        ...prevState,
        favMov: filtered
      })
    })
  }

  render() {
    const { movies, searchQuery, isLoaded, isFav, favRendered, favMov } =
      this.state;
    const { handleChange, handleClick, handleAdd, handleFavRender, handleDelete } = this;
    const filtered = movies?.filter((movie) =>
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(movies);
    return (
      <div className="App">
        <NavbarComp handleChange={handleChange} handleClick={handleClick} />
        {isLoaded ? (
          <>
            <MovieList data={filtered} handleAdd={handleAdd} isFav={isFav} />
            <TbFileLike className="favIcon" onClick={handleFavRender} />
            <p id="favTitle">Favorite movies</p>
            <FavMovies
              data={favMov}
              isRendered={favRendered}
              handleFavRender={handleFavRender}
              handleDelete={handleDelete}
            />
          </>
        ) : (
          <Spinner className="spinner"></Spinner>
        )}
      </div>
    );
  }
}

export default App;
