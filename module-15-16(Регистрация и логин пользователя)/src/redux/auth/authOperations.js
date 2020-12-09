import authActions from './authActions';
import authSelectors from './authSelectors';

const baseURL = 'https://raschitalochka.goit.co.ua/api';

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    };

    fetch(`${baseURL}/register`, options)
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                dispatch(authActions.registerError(data.message));
                console.log(data.message);
                return;
            }
            dispatch(authActions.registerSuccess(credentials));
        })
        .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    };

    fetch(`${baseURL}/login`, options)
        .then(response => response.json())
        .then(data => {
            dispatch(authActions.loginSuccess(data));
        })
        .catch(error => dispatch(authActions.loginError(error)));
};

const logOut = () => (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();
    dispatch(authActions.logoutRequest());

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${persistedToken}`,
            'Content-Type': 'application/json',
        },
    };
    fetch(`${baseURL}/logout`, options)
        .then(() => dispatch(authActions.logoutSuccess()))
        .catch(error => dispatch(authActions.logoutError(error)));
};

const getAllTasks = () => (dispatch, getState) => {
    const userId = authSelectors.getUserId(getState());
    const token = authSelectors.getToken(getState());

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };

    fetch(`${baseURL}/finance/${userId}`, options)
        .then(response => response.json())
        .then(data => console.log(data));
};

const getCurrentUser = () => (dispatch, getState) => {
    const persistedToken = authSelectors.getToken(getState());
    if (!persistedToken) {
        return;
    }
    dispatch(authActions.getCurrentUserRequest());

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${persistedToken}`,
            'Content-Type': 'application/json',
        },
    };

    fetch(`${baseURL}/login`, options)
        .then(response => response.json())
        .then(data => {
            dispatch(authActions.loginSuccess(data));
        });
};

// const deleteTask = (userId, token, taskId) => dispatch => {
//     const options = {
//         method: 'DELETE',
//         headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//         },
//     };

//     fetch(`${baseURL}/finance/${userId}`, options)
//         .then(response => response.json())
//         .then(data => console.log(data));
// };

export default { register, logIn, logOut, getAllTasks, getCurrentUser };
