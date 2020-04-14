import BuyingBlockVariant from '~/components/BuyingBlockVariant/BuyingBlockVariant.vue';

export default {

  props: {
    chinchilla: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  components: {
    BuyingBlockVariant,
  },
}
