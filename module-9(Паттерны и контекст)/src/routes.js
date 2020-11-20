import { lazy } from 'react';

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() =>
            import('./views/HomePage' /* webpackChunkName: "home-page-view" */),
        ),
    },
    {
        path: '/movies/:movieId/cast',
        label: 'Cast',
        exact: false,
        component: lazy(() =>
            import('./views/Cast' /* webpackChunkName: "cast-view" */),
        ),
    },
    {
        path: '/movies/:movieId/reviews',
        label: 'Reviews',
        exact: false,
        component: lazy(() =>
            import('./views/Reviews' /* webpackChunkName: "reviews-view" */),
        ),
    },
    {
        path: '/movies/:movieId',
        label: 'MovieDetails',
        exact: false,
        component: lazy(() =>
            import(
                './views/MovieDetailsPage' /* webpackChunkName: "movie-detail-page-view" */
            ),
        ),
    },
    {
        path: '/movies',
        label: 'Movies',
        exact: false,
        component: lazy(() =>
            import(
                './views/MoviesPage' /* webpackChunkName: "movies-page-view" */
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
