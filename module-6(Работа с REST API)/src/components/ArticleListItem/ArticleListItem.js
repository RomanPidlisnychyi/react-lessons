import React from 'react';

export default function ArticleListItem({ url, title }) {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </li>
    );
}
