// import asyncComponent from './components/hoc/asyncComponent';

// const asyncComponentView = asyncComponent(() =>
//     import('./views/SwiperViewView'),
// );
import { lazy } from 'react';

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() =>
            import('./views/Home' /* webpackChunkName: "home-view" */),
        ),
    },
    {
        path: '/shows',
        label: 'Shows',
        exact: true,
        component: lazy(() =>
            import('./views/Shows' /* webpackChunkName: "shows-view" */),
        ),
    },
    {
        path: '/shows/:showId',
        label: 'ShowDetails',
        exact: true,
        component: lazy(() =>
            import(
                './views/ShowDetails' /* webpackChunkName: "show-details-view" */
            ),
        ),
    },
    {
        path: '',
        label: 'NotFound',
        exact: false,
        component: lazy(() =>
            import('./views/NotFound' /* webpackChunkName: "not-found-view" */),
        ),
    },
];
