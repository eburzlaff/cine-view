import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';


const API_URL = "http://www.omdbapi.com?apikey=1aa6b9ca";

function MainScreen({theme, setTheme}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("Batman");
    }, []);
    
    return (
        <div className="app">
            <h1>CineView</h1>

            {theme === 'dark' 
            ?
            <>
            <div style={{display: "flex", justifyContent: "left"}}>
                <p style={{size: 20, color: "white", alignSelf: "center", marginRight: "20px"}}>Dark Mode</p>
                <FontAwesomeIcon icon={faToggleOff} size="2xl" style={{color: "#f3d4b8", cursor: "pointer"}} onClick={() => setTheme('light')} />
            </div>
            </>
            : 
            <>  
            <div style={{display: "flex"}}> 
                <p style={{size: 20, color: "black", alignSelf: "center", marginRight: "20px"}}>Light Mode</p>
                <FontAwesomeIcon icon={faToggleOn} size="2xl" style={{color: "#4abaf2", cursor: "pointer"}} onClick={() => setTheme('dark')} />
            </div>
            </>
            }

            <SearchBar 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for Movies"
                onClick={() => searchMovies(searchTerm)}
            />
            {movies?.length > 0 ? (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
                </div>
            ) : (
                <div className="empty">
                <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default MainScreen;