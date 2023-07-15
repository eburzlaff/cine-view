import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';


const API_URL = "http://www.omdbapi.com?apikey=1aa6b9ca";

function MainScreen(props) {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("Batman");
    }, []);
    
    return (
        <div className="app">
            <h1>CineView</h1>
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