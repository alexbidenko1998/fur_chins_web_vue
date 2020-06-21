import { mapGetters } from 'vuex';
import BuyingBlock from '~/components/BuyingBlock/BuyingBlock.vue';

export default {

  head() {
    return {
      title: 'Aliance of breaders fur chinchillas - Купить шиншиллу',
      meta: [
        {hid: 'keywords', name: 'keywords', content: 'Шиншиллы, купить шиншилл, меховые шиншиллы, золото, серебро, бронза, бонитированные'},
        {hid: 'description', name: 'description', content: 'Купить шиншилл, меховых шиншилл прошедших оценку экспертов (бонитироваку), получивших бронзу, серебро или золото на выставках'},
        {hid: 'og:title', property: 'og:title', content: 'Aliance of breaders fur chinchillas - Купить шиншиллу'},
        {hid: 'og:description', property: 'og:description', content: 'Купить шиншилл, меховых шиншилл прошедших оценку экспертов (бонитироваку), получивших бронзу, серебро или золото на выставках'}
      ],
      bodyAttrs: {
        class: this.$exp.$classes.join(' ')
      },
    };
  },

  components: {
    BuyingBlock
  },

  computed: {
    ...mapGetters({
      chinchillas: 'chinchillas'
    }),
  },
};
