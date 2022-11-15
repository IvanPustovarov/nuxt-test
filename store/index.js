export const state = () => ({
  products: []
});

export const getters = {
  getProducts (state) {
    return state.products;
  }
};

export const mutations = {
  setProducts (state, value) {
    state.products = value;
  }
};

export const actions = {
  async fetchProducts ({ commit }) {
    const products = await this.$axios.$get('https://rangeweb.ru/test/products/');
    commit('setProducts', products);
  }
};
