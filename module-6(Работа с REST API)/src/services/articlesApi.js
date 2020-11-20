function fetchArticlesWithQuery(serchQuery, page = 0) {
    return fetch(
        `https://hn.algolia.com/api/v1/search?query=${serchQuery}&page=${page}&hitsPerPage=10`,
    )
        .then(response => response.json())
        .then(data => data.hits);
}

export default {
    fetchArticlesWithQuery,
};
