import React from 'react';

const CountryCard = ({ country }) => {
    return (
        <div className="countryCard">
            <img src={country.flags.png} alt={`${country.name.common} Flag`} />
            <p>{country.name.common}</p>
        </div>
    );
};

export default CountryCard;
