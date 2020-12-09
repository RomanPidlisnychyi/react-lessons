const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;
const getUserId = state => state.auth.user.id;
const getToken = state => state.auth.token;

export default { isAuthenticated, getUserName, getUserId, getToken };
