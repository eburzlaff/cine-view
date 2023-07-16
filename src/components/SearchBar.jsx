import React from 'react';
import SearchIcon from "../search.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={onClick} className='searchIcon'/>
        </div>
    );
}

export default SearchBar;