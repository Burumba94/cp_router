import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './home';

const Movie = ({ title, description, image, onClick }) => {
    return (
    <Router>
        <div className="movie" onClick={onClick}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt={title} />
            <Route path='/' Component={Home} />
        </div>
    </Router>
    );
};

export default Movie;