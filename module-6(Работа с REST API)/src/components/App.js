import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Spinner from './Spinner/Spinner';
import Notification from './Notification/Notification';
import ArticleList from './ArticleList/ArticleList';
import articlesApi from '../services/articlesApi';
import SearchForm from './SearchForm/SearchForm';

export default class App extends Component {
    state = {
        articles: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 0,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchArticles();
        }
    }

    fetchArticles = () => {
        this.setState({ loading: true });

        articlesApi
            .fetchArticlesWithQuery(this.state.searchQuery, this.state.page)
            .then(articles =>
                this.setState(prevState => ({
                    articles: [...prevState.articles, ...articles],
                    page: prevState.page + 1,
                })),
            )
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    };

    handleSearchFormSubmit = query => {
        this.setState({ searchQuery: query, page: 0, articles: [] });
    };

    render() {
        const { articles, loading, error } = this.state;

        return (
            <Layout>
                <>
                    <SearchForm onSubmit={this.handleSearchFormSubmit} />
                    {error && (
                        <Notification
                            message={`Woops, something went wrong: ${error}`}
                        />
                    )}

                    {articles.length > 0 && <ArticleList articles={articles} />}

                    {loading && <Spinner message="Loading..." />}

                    {articles.length > 0 && !loading && (
                        <button type="button" onClick={this.fetchArticles}>
                            Load more...
                        </button>
                    )}
                </>
            </Layout>
        );
    }
}
