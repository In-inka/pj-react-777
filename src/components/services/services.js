const bodyParamsReset = {
  height: null,
  currentWeight: null,
  desiredWeight: null,
  birthday: null,
  blood: null,
  sex: null,
  levelActivity: null,
};
//-----------------------AUTH
export const handleFulfilledRegister = (state, { payload }) => {
      state.user.email = payload.email;
      state.user.name = payload.name;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.user.email = payload.user.email;
  state.user.name = payload.user.name;
  state.user.avatarUrl = payload.user.avatarUrl;
  state.user.bodyParams = { ...state.user.bodyParams, ...payload.user.bodyParams };
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

export const handleFulfilledLogout = (state) => {
      state.user.name = null;
      state.user.email = null;
    state.user.avatarUrl = null;
  state.user.bodyParams = bodyParamsReset;
      state.token = "";
      state.isLoggedIn = false;
      state.isLoading = false;
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user.name = payload.ResponseBody.name;
  state.user.avatarUrl = payload.ResponseBody.avatarUrl;
  state.user.email = payload.ResponseBody.email;
  state.user.bodyParams = {
    ...state.user.bodyParams, ...payload.ResponseBody.bodyParams,
  };
  state.isLoggedIn = true;
  state.isFetchingCurrentUser = false;
  state.isLoading = false;
};

export const handleFulfilledMetricData = (state, { payload }) => {
  state.user.name = payload.data.name;
  state.user.bodyParams = {...state.user.bodyParams,...payload.data.bodyParams};
  state.isLoading = false;
};

export const handleFulfilledAvatarUpdate = (state) => {
  state.isLoading = false;
};


export const handlePendingCurrentUser = (state) => {
      state.isFetchingCurrentUser = true;
      state.isLoading = true;
};

export const handleRejectedCurrentUser = (state) => {
  state.isFetchingCurrentUser = false;
  state.isLoading = false;
};

//--------------------------DIARY
export const handleFulfilledGet = (state, { payload }) => {
  state.diary.data = payload;
  state.isLoading = false;
};

export const handleFulfilledAddProduct = (state, { payload }) => {
  state.products.push(payload);
  state.isLoading = false;
};
export const handleFulfilledDeleteProduct = (state, { payload }) => {
  state.products = state.products.filter(
    (el) => el.productId !== payload.productId,
  );
};

export const handleFulfilledAddExercise = (state, { payload }) => {
  state.exercises.push(payload);
    state.isLoading = false;
};

export const handleFulfilledDeleteExercise = (state, { payload }) => {
  state.exercises = state.exercises.filter(
    (el) => el.exerciseId !== payload.exerciseId,
  );
};

export const handleFulfilledFilterExercisesBody = (state, { payload }) => {
  state.filter.body.push(payload);
  state.isLoading = false;
};


export const handleFulfilledFilterExercisesEquipment = (state, { payload }) => {
  state.filter.equipment.push(payload);
  state.isLoading = false;
};

export const handleFulfilledFilterExercisesMuscles = (state, { payload }) => {
  state.filter.muscles.push(payload);
  state.isLoading = false;
};

export const handleFulfilled = (state, { payload }) => {
  state.data = {...state.data, ...payload};
  state.isLoading = false;
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};