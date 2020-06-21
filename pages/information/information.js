import { mapGetters } from 'vuex';

export default {

  head() {
    return {
      title: 'Aliance of breaders fur chinchillas - Информация о содержании',
      meta: [
        {hid: 'keywords', name: 'keywords', content: 'Шиншиллы, содержание шиншилл, питание, температура, беременность, купание'},
        {hid: 'description', name: 'description', content: 'Узнать больше о содержании шиншилл, как их кормить, купать, в какой держать температуре, как ухаживать во время беременности'},
        {hid: 'og:title', property: 'og:title', content: 'Aliance of breaders fur chinchillas - Информация о содержании'},
        {hid: 'og:description', property: 'og:description', content: 'Узнать больше о содержании шиншилл, как их кормить, купать, в какой держать температуре, как ухаживать во время беременности'}
      ]
    };
  },

  data() {
    return {
      articleId: null,
      isShowArticle: true,
    };
  },

  methods: {
    openArticleAt(index) {
      this.isShowArticle = false;
      setTimeout(() => {
        this.articleId = this.information[index].id;
        this.isShowArticle = true;
      }, 150);
    },
  },

  computed: {
    ...mapGetters({
      information: 'information'
    }),
  },
}
