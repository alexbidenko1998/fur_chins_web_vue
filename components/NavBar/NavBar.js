import { mapGetters } from 'vuex';
import BaseBasket from './BaseBasket/BaseBasket.vue';

export default {

  components: {
    BaseBasket,
  },

  data() {
    return {
      isMenuOpen: false,
      isBasketOpen: false,
      isAddProductAnimation: false
    };
  },

  watch: {
    openBasket(value) {
      this.isBasketOpen = value;
      this.isMenuOpen = value;
    },
    basketAddAnimation() {
      this.isAddProductAnimation = true;
      setTimeout(() => this.isAddProductAnimation = false, 300);
    },
  },

  methods: {
    hideMenu() {
      this.isMenuOpen = false;
    },
    navigate() {
      this.isMenuOpen = false;
      this.isBasketOpen = false;
    },
    toggleBasket() {
      this.isBasketOpen = !this.isBasketOpen;
      this.isMenuOpen = false;
    },
  },

  computed: {
    ...mapGetters([
      'openBasket',
      'basketAddAnimation'
    ])
  }
}
