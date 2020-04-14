const KEY_CHINCHILLAS = 'basket_chinchillas';
const KEY_PRODUCTS = 'basket_products';

const state = () => ({
  chinchillas: [],
  products: [],
});

const actions = {
  addChinchillaToBasket({ state }, chinchilla) {
    let isFound = false;
    state.chinchillas.forEach(el => {
      if (el.chinchilla.overall.title === chinchilla.overall.title &&
        el.chinchilla.variant.description === chinchilla.variant.description) {
        isFound = true;
        el.count++;
      }
    });
    if (!isFound) {
      state.chinchillas.push({
        chinchilla,
        count: 1
      });
    }
    localStorage.setItem(KEY_CHINCHILLAS, JSON.stringify(state.chinchillas));
  },
  deleteChinchillaFromBasket({ state }, { title, description }) {
    Object.keys(state.chinchillas).forEach(i => {
      if (state.chinchillas[i].chinchilla.overall.title === title &&
        state.chinchillas[i].chinchilla.variant.description === description) {
        state.chinchillas.splice(+i, 1);
      }
    });
    localStorage.setItem(KEY_CHINCHILLAS, JSON.stringify(state.chinchillas));
  },
  addProductToBasket({ state }, product) {
    let ifFound = false;
    state.products.forEach(elem => {
      if (elem.product.key === product.key) {
        elem.count++;
        ifFound = true;
      }
    });
    if (!ifFound) {
      state.products.push({
        count: 1,
        product
      });
    }
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(state.products));
  },
  deleteProductFromBasket({ state }, keyProduct) {
    Object.keys(state.products).forEach(i => {
      if (state.products[i].product.key === keyProduct) {
        state.products.splice(+i, 1);
      }
    });
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(state.products));
  },
  clearBasket({ state }) {
    state.chinchillas = [];
    state.products = [];
    localStorage.clear();
  }
};

const mutations = {
  setBasket(state, { chinchillas, products}) {
    state.chinchillas = chinchillas;
    state.products = products;
  }
};

const getters = {
  basketChinchillas: state => state.chinchillas,
  basketProducts: state => state.products,
};

export default {
  state,
  actions,
  mutations,
  getters,
}
