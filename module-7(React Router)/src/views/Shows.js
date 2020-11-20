import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import filmsApi from '../services/filmsApi';
// import InlineShowDetails from './InlineShowDetails';

export default class Shows extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        filmsApi.getImages().then(shows => this.setState({ shows }));
    }

    render() {
        const { shows } = this.state;
        const { match } = this.props;
        return (
            <>
                {shows.length > 0 && (
                    <ul>
                        {shows.map(show => (
                            <li key={show.id}>
                                <Link to={`${match.url}/${show.id}`}>
                                    {show.tags}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {/* <Route
                    path={`${match.path}/:showId`}
                    component={InlineShowDetails}
                /> */}
            </>
        );
    }
}
