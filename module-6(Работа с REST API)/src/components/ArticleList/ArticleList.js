import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

export default function ArticleList({ articles }) {
    return (
        <ul>
            {articles.map(article => (
                <ArticleListItem
                    key={article.objectID}
                    url={article.url}
                    title={article.title}
                />
            ))}
        </ul>
    );
}
