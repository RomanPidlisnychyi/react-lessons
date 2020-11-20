// import { lazy } from 'react';
// component: lazy(() =>
// import('./views/Home' /* webpackChunkName: "home-page-view" */),
// ),
import Home from './views/Home';
import CommentsView from './views/CommentsView';
import TasksView from './views/TasksView';
import SwiperView from './views/SwiperView';
import CardsView from './views/CardsView';

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: Home,
    },
    {
        path: '/comments',
        label: 'Comments',
        exact: false,
        component: CommentsView,
    },
    {
        path: '/tasks',
        label: 'Tasks',
        exact: false,
        component: TasksView,
    },
    {
        path: '/swiper',
        label: 'Swiper',
        exact: false,
        component: SwiperView,
    },
    {
        path: '/cards',
        label: 'Cards',
        exact: false,
        component: CardsView,
    },
    // {
    //     path: '',
    //     label: 'NotFound',
    //     exact: false,
    //     component: lazy(() =>
    //         import('./views/NotFound' /* webpackChunkName: "not-found-view" */),
    //     ),
    // },
];
