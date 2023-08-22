import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div>
            <form className='search-form' onSubmit={handleFormSubmit}>
                <input 
                    className='search-bar' 
                    placeholder='Enter Search Term' 
                    value={term} 
                    onChange={handleChange} 
                />
            </form>
        </div>
    );
}

export default SearchBar;