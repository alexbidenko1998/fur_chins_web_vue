import { mapActions } from 'vuex';

export default {

  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  methods: {
    addProduct() {
      this.startAddProductAnimation();
      this.addProductToBasket(this.product);
    },
    ...mapActions([
      'startAddProductAnimation',
      'addProductToBasket',
    ])
  }
}
