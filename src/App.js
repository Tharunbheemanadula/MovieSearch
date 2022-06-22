import {useEffect, useState} from "react";
import "./App.css";
import Search from "./Search.svg";
import MovieCard from "./MovieCard";



const API_URL="http://www.omdbapi.com?apikey=6d14d7e3";
// const movie={
//     "Title": "Spider-Man 3",
//     "Year": "2007",
//     "imdbID": "tt0413300",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
// };
const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSeachTerm]=useState('');
    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies("spider-man");

    },[]); 
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="seach for movies"
                value={searchTerm}
                onChange={(e)=>setSeachTerm(e.target.value)}/>
                <img src={Search}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}/>
            </div>
            {
                movies?.length>0
                ?(<div className="container">
                {movies.map((movie)=>(
                <MovieCard movie={movie}/>
                ))}
              </div>
              ):
                (
                    <div className="empty"><h2>NO movies found</h2></div>
                )
            }
            
       </div>
    );
}
export default App;