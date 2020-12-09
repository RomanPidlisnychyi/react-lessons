import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

export default [
    {
        path: '/',
        exact: true,
        label: 'Home',
        type: 'Prived',
        component: HomeView,
    },
    {
        path: '/login',
        exact: true,
        label: 'Login',
        type: 'Pablic',
        component: LoginView,
    },
    {
        path: '/register',
        exact: true,
        label: 'Register',
        type: 'Pablic',
        component: RegisterView,
    },
];
