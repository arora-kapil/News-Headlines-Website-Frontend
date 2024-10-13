import React from 'react';
import NewsItem from './NewsItem';

function News({ articles }) {
    if (articles.length === 0) {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="card shadow-sm">
                            <div className="card-body py-5">
                                <h3 className="card-title mb-3">No Records Found</h3>
                                <p className="card-text text-muted">
                                    We couldn't find any news articles matching your request.
                                    Try adjusting your search or explore different categories.
                                </p>
                                <i className="bi bi-search" style={{ fontSize: '3rem', color: '#6c757d' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {articles.length === 0 && <div>No records found.</div>}
            {console.log(articles.length)}
            {articles.map((article, index) => (
                article.title !== "[Removed]" && (
                    <div className="col" key={index}>
                        <NewsItem
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                            publishedAt={article.publishedAt}
                            source={article.source}
                        />
                    </div>
                )
            ))}
        </div>
    );
}

export default News;