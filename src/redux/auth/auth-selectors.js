const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getUserAvatar = (state) => state.auth.user.avatarUrl;
const getUserEmail = (state) => state.auth.user.email;
const getIsFetchingCurrentUser = (state) => state.auth.isFetchingCurrentUser;
const getUserMetricData = (state) => state.auth.user.bodyParams;
const getIsHasUserMetricData = (state) => state.auth.user.bodyParams.sex;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getIsFetchingCurrentUser,
  getUserMetricData,
  getIsHasUserMetricData,
  getUserAvatar,
};

export default authSelectors;
