import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Make sure to match the URL that Cypress intercepts
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error('API fetch error:', error);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Country Search</h1>
      <input
        type="text"
        placeholder="Search countries"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div id="countriesContainer">
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;
