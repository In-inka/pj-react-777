const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = (state) => state.auth.user.email;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const getUserMetricData = (state) => state.auth.bodyParams;


const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getIsFetchingCurrentUser,
  getUserMetricData,
};

export default authSelectors;