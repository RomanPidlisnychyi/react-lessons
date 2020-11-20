import React, { Component } from 'react';
import filsmApi from '../services/filmsApi';
import routes from '../routes';

export default class ShowDetails extends Component {
    state = { show: null };

    componentDidMount() {
        filsmApi
            .getImagesById(this.props.match.params.showId)

            .then(show => this.setState({ show }));
    }

    handleGoBack = () => {
        const { state } = this.props.location;
        if (state && state.from) {
            return this.props.history.push(state.from);
        }

        this.props.history.push(routes.shows);
    };

    render() {
        const { show } = this.state;

        return (
            <div>
                {show && (
                    <>
                        <button type="button" onClick={this.handleGoBack}>
                            Back to Shows
                        </button>
                        <br />

                        <h1>{show.tags}</h1>
                        <img src={show.previewURL} alt={show.tags} />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Comments: {show.comments}</td>
                                </tr>
                                <tr>
                                    <td>Downloads: {show.downloads}</td>
                                </tr>
                                <tr>
                                    <td>Favorites: {show.favorites}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        );
    }
}
