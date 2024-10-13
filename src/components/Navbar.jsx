import React, { useState } from 'react';

function Navbar({ setCategory, onSearch }) {

    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['Trending', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-brand" href="#" onClick={() => setCategory('general')}>NewsApp</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {categories.map(category => (
                            <li className="nav-item" key={category}>
                                <button
                                    className="nav-link btn btn-link"
                                    onClick={() => setCategory(category.toLowerCase())}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;