import { mapGetters, mapActions, mapMutations } from 'vuex';
import BasketBlock from './BasketBlock/BasketBlock.vue';
import BasketProductBlock from './BasketProductBlock/BasketProductBlock.vue';

const KEY_CHINCHILLAS = 'basket_chinchillas';
const KEY_PRODUCTS = 'basket_products';

export default {

  name: 'BaseBasket',

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    BasketBlock,
    BasketProductBlock,
  },

  created() {
    this.$nextTick(() => {
      this.setBasket({
        chinchillas: process.browser && localStorage[KEY_CHINCHILLAS] ? JSON.parse(localStorage[KEY_CHINCHILLAS]) : [],
        products: process.browser && localStorage[KEY_PRODUCTS] ? JSON.parse(localStorage[KEY_PRODUCTS]) : [],
      });
    });
  },

  methods: {
    hide() {
      this.$emit('hide');
    },
    ...mapActions([
      'clearBasket'
    ]),
    ...mapMutations([
      'setBasket'
    ]),
  },

  computed: {
    totalCost() {
      let totalCost = 0;
      this.chinchillas.forEach(chinchilla =>
        totalCost += chinchilla.count * chinchilla.chinchilla.variant.cost
      );
      this.products.forEach(product =>
        totalCost += product.count * product.product.cost
      );
      return totalCost;
    },
    ...mapGetters({
      chinchillas: 'basketChinchillas',
      products: 'basketProducts',
    })
  }
}
