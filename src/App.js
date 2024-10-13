import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  const [category, setCategory] = useState('general');
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let url;
        if (searchQuery) {
          url = `http://3.110.136.102:8080/api/v1/news/search?query=${searchQuery}`;
        } else {
          url = `http://3.110.136.102:8080/api/v1/news/category?category=${category}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        console.log("API Response: ", data);

        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
          console.log(data.articles);
        } else {
          console.error("Invalid data structure: ", data);
          setError("Received invalid data structure from the server.");
          setArticles([]);
        }
        setError(null);
      } catch (error) {
        console.error('Error fetching news: ', error);
        setError('Unable to fetch news. Please try again later.');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCategory('');
  };

  const handleSetCategory = (newCategory) => {
    setCategory(newCategory);
    setSearchQuery('');
  };

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="min-vh-100 bg-light">
      <Navbar setCategory={handleSetCategory} onSearch={handleSearch} />
      <main className="container py-4">
        <h1 className="text-center mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : `Top ${capitalizeWord(category)} Headlines`}
        </h1>
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          <News articles={articles} />
        )}
      </main>
    </div>
  );
}

export default App;