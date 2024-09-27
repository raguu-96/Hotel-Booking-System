import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="filter-section">
        <h4>Property Type</h4>
        <ul>
          <li><input type="checkbox" /> Resort</li>
          <li><input type="checkbox" /> Villa</li>
          <li><input type="checkbox" /> Cottage</li>
          <li><input type="checkbox" /> Hotel</li>
        </ul>
      </div>
      <div className="filter-section">
        <h4>Ratings</h4>
        <ul>
          <li><input type="checkbox" /> 5 Star</li>
          <li><input type="checkbox" /> 4 Star</li>
          <li><input type="checkbox" /> 3 Star</li>
        </ul>
      </div>
      <div className="filter-section">
        <h4>Price</h4>
        <ul>
          <li><input type="checkbox" /> Below 10k</li>
          <li><input type="checkbox" /> 10k - 20k</li>
          <li><input type="checkbox" /> 20k - 30k</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 

