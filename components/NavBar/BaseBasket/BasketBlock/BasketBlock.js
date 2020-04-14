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
      this.deleteChinchillaFromBasket({
        title: this.data.chinchilla.overall.title,
        description: this.data.chinchilla.variant.description
      });
    },
    ...mapActions([
      'deleteChinchillaFromBasket'
    ])
  }
}
