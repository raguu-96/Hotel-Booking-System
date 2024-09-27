/*import React from 'react';
import PropertyCard from '../Cards/PropertyCard';
import './Listings.css';

const properties = [
    {
      name: 'The Black Forest',
      location: 'Aasa, Ooty, Tamilnadu',
      price: '₹12,999',
      originalPrice: '₹15,000',
      rating: 4.5,
      reviews: 32,
      guests: 'Up to 12 Adults',
      rooms: '3 Rooms',
      baths: '4 Baths',
      features: ['WiFi', 'AC', 'Parking', 'Swimming Pool', 'More...'],
      discount: 'Use Coupon and Get up to 50% off',
      image: 'https://via.placeholder.com/300'  // <-- Add this image field
    }
  ];
const Listings = () => {
    return (
        <section className="listings">
            {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
            ))}
        </section>
    );
};

export default Listings;*/

import React from 'react';
import PropertyCard from '../Cards/PropertyCard';
import './Listings.css';
import Photos from '../assets/photos.jfif';
const Listing = () => {
  const properties = [
    {
      image: Photos,
      title: 'The Black Forest',
      location: 'Ooty, Tamilnadu',
      details: 'Upto 12 Adults • 3 Rooms • 4 Baths',
      price: '12,999'
    },
    // Add more property objects here
    {
      image: Photos,
      title: 'The Black Forest',
      location: 'Ooty, Tamilnadu',
      details: 'Upto 12 Adults • 3 Rooms • 4 Baths',
      price: '12,999'
    },

    {
      image: Photos,
      title: 'The Black Forest',
      location: 'Ooty, Tamilnadu',
      details: 'Upto 12 Adults • 3 Rooms • 4 Baths',
      price: '12,999'
    },
    {
      image: Photos,
      title: 'The Black Forest',
      location: 'Ooty, Tamilnadu',
      details: 'Upto 12 Adults • 3 Rooms • 4 Baths',
      price: '12,999'
    },
    {
      image: Photos,
      title: 'The Black Forest',
      location: 'Ooty, Tamilnadu',
      details: 'Upto 12 Adults • 3 Rooms • 4 Baths',
      price: '12,999'
    },
  ];

  return (
    <div className="property-listing">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
        
      ))}
    </div>
  );
};

export default Listing;