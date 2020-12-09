import React, { useState, useEffect } from 'react';

export default function News() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);

        fetch('https://hn.algolia.com/api/v1/search?query=react')
            .then(response => response.json())
            .then(data => setArticles(data.hits))
            .catch(error => setError(error))
            .finally(() => setLoading(false));

        // return fetch(
        //     'https://hn.algolia.com/api/v1/search?query=react',
        //     signal,
        // );
    }, []);

    return (
        <ul>
            {articles.map(article => (
                <li key={article.objectID}>{article.title}</li>
            ))}
        </ul>
    );
}
