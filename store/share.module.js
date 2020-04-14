const state = () => ({
  openBasket: false,
  basketAddAnimation: 0,
});

const actions = {
  startAddProductAnimation({ state, commit }) {
    commit('setProductAnimation', state.basketAddAnimation + 1);
  },
};

const mutations = {
  setBasketState(state, value) {
    state.openBasket = value;
  },
  setProductAnimation(state, value) {
    state.basketAddAnimation = value;
  },
};

const getters = {
  openBasket: state => state.openBasket,
  basketAddAnimation: state => state.basketAddAnimation,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
