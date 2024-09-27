import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './Search/SearchBar';
import Sidebar from './pages/Sidebar';
import Listings from './PropertyList/Listings';
import Footer from './Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />

      <div className="main-content">
        <Sidebar/>
        <Listings/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
