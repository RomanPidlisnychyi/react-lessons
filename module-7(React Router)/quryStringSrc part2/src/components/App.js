import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../views/Home';
import Shows from '../views/Shows';
import ShowDetails from '../views/ShowDetails';
import NotFound from '../views/NotFound';
import routes from '../routes';

export default class App extends Component {
    state = {};
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={routes.home} exact component={Home} />
                    <Route path={routes.shows} exact component={Shows} />
                    <Route path={routes.showDetails} component={ShowDetails} />
                    {/* <Redirect to="/shows" /> */}
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        );
    }
}
