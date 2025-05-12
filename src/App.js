import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import './App.css';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                id="searchBar"
                placeholder="Search for countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div id="countriesContainer">
                {filteredCountries.map(country => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
};

export default App;
