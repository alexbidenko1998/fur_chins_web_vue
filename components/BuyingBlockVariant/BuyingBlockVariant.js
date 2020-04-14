import { mapActions } from 'vuex';

export default {

  props: {
    keyChinchilla: {
      type: String,
      requires: true,
    },
    sex: {
      type: String,
      requires: true,
    },
    costs: {
      type: Object,
      requires: true,
    },
  },

  data() {
    return {
      isOpenedVariants: false,
    };
  },

  methods: {
    getDescription(sex, type) {
      if (sex === 'male' && type === 'usual') {
        return 'Не прошедший оценку\nсамец';
      } else if (sex === 'female' && type === 'usual') {
        return 'Не прошедшая оценку\nсамка';
      } else if (sex === 'male') {
        return 'Прошедший оценку\nсамец';
      } else if (sex === 'female') {
        return 'Прошедшая оценку\nсамка';
      }
    },
    addChinToBasket(type) {
      this.startAddProductAnimation();
      this.getChinchillaData({ keyChinchilla: this.keyChinchilla, sex: this.sex, type }).then(data => {
        this.addChinchillaToBasket(data);
      });
    },
    ...mapActions([
      'startAddProductAnimation',
      'addChinchillaToBasket',
      'getChinchillaData'
    ])
  }
}
