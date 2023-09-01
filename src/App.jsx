import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbFileLike } from "react-icons/tb";
import axios from "axios";
import { Spinner } from "./components/Spinner/Spinner";
import { NavbarComp } from "./components/Navbar/Navbar";
import { MovieList } from "./components/MovieList/MovieList";
import { FavMovies } from "./components/FavMovies/FavMovies";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Wrapper } from "./components/Styled-components/Styles";



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
      isFailed: false,
      isFiltered: "",
    };
  }

  componentDidMount() {
    const lStr = JSON.parse(localStorage.getItem("favorites")) || [];
    const { searchQuery } = this.state;
    setTimeout(() => {
      this.fetchData(searchQuery);
    }, 2000);
    this.setState(prevState => {
      return({
        ...prevState,
        favMov: lStr
      })
    })
  
  }

  fetchData = (movieName) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=c0790adf&page=1&s=${movieName}`)
      .then((res) => {
        if (res.data.Response === "True") {
          console.log(res.data);
          this.setState((prevState) => {
            return {
              ...prevState,
              movies: res.data.Search,
              isFailed: false,
              isLoaded: true,
            };
          });
        } else {
          this.setState((prevState) => {
            console.log(res.data);
            return {
              ...prevState,
              isLoaded: true,
              isFailed: true,
            };
          });
        }
      });
  };

  handleClick = () => {
    const { searchQuery } = this.state;
    setTimeout(() => {
      this.fetchData(searchQuery);
    }, 1000);
    this.setState((prevState) => {
      return {
        ...prevState,
        searchQuery: "",
      };
    });
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleAdd = (id) => {
    // console.log("hey");

    const { movies, favMov } = this.state;
    const filtered = movies.filter((movie) => movie.imdbID === id);
    if (!favMov.some((movie) => movie.imdbID === id)) {
      this.setState((prevState) => {
        return {
          ...prevState,
          favMov: [...favMov, ...filtered],
          isFav: true,
        };
      });
      localStorage.setItem("favorites", JSON.stringify([...favMov, ...filtered]));
    } else {
      alert("Already in favourites!!!")
    }


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
    const filtered = this.state.favMov.filter((movie) => movie.imdbID !== id);

    this.setState((prevState) => {
      return {
        ...prevState,
        favMov: filtered,
      };
    });
  };

  handleFilter = (args) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isFiltered: args,
      };
    });
  };


  checkFav = (id) => {
    return this.state.favMov.some(movie => movie.imdbID === id )
  }

  render() {
    const {
      movies,
      searchQuery,
      isLoaded,
      isFav,
      favRendered,
      favMov,
      isFailed,
      isFiltered,
    } = this.state;
    const {
      handleChange,
      handleClick,
      handleAdd,
      handleFavRender,
      handleDelete,
      handleFilter,
      checkFav
    } = this;

    let sorted = movies;

    /*   Dropdown(filtering)   */
    if (isFiltered === "movies") {
      sorted = movies.filter((movie) => movie.Type === "movie");
    } else if (isFiltered === "series") {
      sorted = movies.filter((movie) => movie.Type === "series");

    } else if (isFiltered === "new"){
      const copy = movies.slice().sort((a, b) => {
        const yearDifference = parseInt(b.Year) - parseInt(a.Year);
        if (yearDifference !== 0) return yearDifference;
      });
      sorted  = copy
    } else if (isFiltered === "title") {
  sorted = movies.slice().sort((a, b) => a.Title.localeCompare(b.Title));
    } else {
      /*   Searching   */
      sorted = movies?.filter((movie) =>
        movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }


    console.log(sorted)

    return (
      <div className="App">
        <NavbarComp
        handleFavRender={handleFavRender}
          handleChange={handleChange}
          handleClick={handleClick}
          handleFilter={handleFilter}
          searchQuery={searchQuery}
          favRendered={favRendered}
          favMov={favMov}
        />
        {isLoaded ? (
          <>
            {!isFailed ? (
              <>
                <MovieList data={sorted} handleAdd={handleAdd} isFav={isFav} checkFav={checkFav}/>
                {favMov.length && (
                  <>
                    <TbFileLike className="favIcon" onClick={handleFavRender} />
                    <p id="favTitle">Favorite movies</p>
                    <FavMovies
                      data={favMov}
                      isRendered={favRendered}
                      handleFavRender={handleFavRender}
                      handleDelete={handleDelete}
                    />
                  </>
                )}
              </>
            ) : (
              <ErrorPage className="ms-5" errText={"Movie not found"} />
            )}
          </>
        ) : (
          <Wrapper>
            <Spinner />
          </Wrapper>
        )}
      </div>
    );
  }
}

export default App;
