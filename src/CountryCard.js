import React from 'react';

const CountryCard = ({ country }) => {
    return (
        <div className="countryCard">
            <img src={country.png} alt={`${country.common} Flag`} />
            <p>{country.common}</p>
        </div>
    );
};

export default CountryCard;
