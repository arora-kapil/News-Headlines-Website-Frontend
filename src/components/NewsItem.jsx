import React from 'react';

function NewsItem({ title, description, url, urlToImage, publishedAt, source }) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="card h-100">
            <div className="card-img-top" style={{ height: '200px', overflow: 'hidden' }}>
                {urlToImage ? (
                    <img src={urlToImage} alt={title} className="w-100 h-100 object-fit-cover" />
                ) : (
                    <div className="w-100 h-100 bg-secondary d-flex align-items-center justify-content-center">
                        <span className="text-white">No image available</span>
                    </div>
                )}
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text flex-grow-1">{description}</p>
                <div className="mt-2 mb-2">
                    <small className="text-muted">
                        Source: {source.name} | Published: {formatDate(publishedAt)}
                    </small>
                </div>
                <a href={url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
}

export default NewsItem;