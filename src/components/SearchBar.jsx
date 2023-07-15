import React from 'react';
import SearchIcon from "../search.svg";

const SearchBar = ({ value, onChange, placeholder, onClick}) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          onClick();
        }
    }

    return (
        <div className="search">
            <input
            type='text'
            value={value}
            onKeyDown={handleKeyDown}
            onChange={onChange}
            placeholder={placeholder}
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={onClick}
            />
        </div>
    );
}

export default SearchBar;