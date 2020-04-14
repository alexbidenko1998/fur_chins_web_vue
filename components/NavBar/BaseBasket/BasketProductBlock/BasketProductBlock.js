import { mapActions } from 'vuex';

export default {

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deleteFromBasket() {
      this.deleteProductFromBasket(this.data.product.key);
    },
    ...mapActions([
      'deleteProductFromBasket'
    ]),
  }
}
