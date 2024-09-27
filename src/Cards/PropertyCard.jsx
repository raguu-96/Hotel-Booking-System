/*import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <img src={property.image} alt={property.name} />
            <div className="property-details">
                <h2>{property.name}</h2>
                <p>{property.location}</p>
                <ul>
                    <li>Up to {property.capacity} Adults</li>
                    <li>{property.rooms} Rooms</li>
                    <li>{property.baths} Baths</li>
                </ul>
            
                <p className="price">₹{property.price}</p>
                <button className="visit-btn">Visit Now</button>
            </div>
        </div>
    );
};

export default PropertyCard;*/

import React from 'react';
import './PropertyCard.css';
const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p>{property.details}</p>
        <p>{property.price}</p>
        <button>Visit Now</button>
      </div>
    </div>
  );
};

export default PropertyCard;