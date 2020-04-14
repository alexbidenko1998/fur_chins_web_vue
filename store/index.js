import Vue from 'vue';
import Vuex from 'vuex';
import chinchillas from './chinchillas.module';
import products from './products.module';
import information from './information.module';
import sendMessage from './sendMessage.module';
import basket from './basket.module';
import share from './share.module';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  modules: {
    chinchillas,
    products,
    information,
    sendMessage,
    basket,
    share,
  },
});

export default store;
