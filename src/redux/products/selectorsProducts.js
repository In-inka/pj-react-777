export const selectProductsList = (state) => state.products.list;
export const selectModalOpen = (state) => state.products.modalIsOpen;
export const selectCategoriesProducts = (state) => state.products.categories;
export const selectFilter = (state) => state.products.filter;
export const selectIsLoadingProduct = (state) => state.products.isLoading;
export const selectSuccessModal = (state) => state.products.successModalOpen;

export const selectPage = (state) => state.products.page;
export const selectTotal = (state) => state.products.total;
