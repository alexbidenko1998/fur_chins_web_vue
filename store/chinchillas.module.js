const state = () => ({
  chinchillas: [
    {
      "key": "SL",
      "text": "Стандарт light / medium",
      "costs": {
        "male": {
          "usual": 4000,
          "bronze": 5000,
          "silver": 5500,
          "gold": 6000
        },
        "female": {
          "usual": 5000,
          "bronze": 6000,
          "silver": 6500,
          "gold": 7000
        }
      },
      "images": [
        "/assets/buying/lite1.jpeg",
        "/assets/buying/lite2.jpeg"
      ]
    },
    {
      "key": "SD",
      "text": "Стандарт dark",
      "costs": {
        "male": {
          "usual": 8000,
          "bronze": 10000,
          "silver": 10500,
          "gold": 11000
        },
        "female": {
          "usual": 9000,
          "bronze": 11000,
          "silver": 11500,
          "gold": 12000
        }
      },
      "images": [
        "/assets/buying/dark1.jpeg",
        "/assets/buying/dark2.jpeg"
      ]
    },
    {
      "key": "SX",
      "text": "Стандарт: X dark",
      "costs": {
        "male": {
          "usual": 10000,
          "bronze": 12000,
          "silver": 12500,
          "gold": 13000
        },
        "female": {
          "usual": 12000,
          "bronze": 14000,
          "silver": 14500,
          "gold": 15000
        }
      },
      "images": [
        "/assets/buying/dark_x_1.jpeg"
      ]
    },
    {
      "key": "SXX",
      "text": "Стандарт: XX dark / XXX dark",
      "costs": {
        "male": {
          "usual": 13000,
          "bronze": 15000,
          "silver": 16000,
          "gold": 17000
        },
        "female": {
          "usual": 15000,
          "bronze": 17000,
          "silver": 18000,
          "gold": 19000
        }
      },
      "images": [
        "/assets/buying/extra1.jpeg",
        "/assets/buying/extra2.jpeg"
      ]
    },
    {
      "key": "BV",
      "text": "Чёрный бархат",
      "costs": {
        "male": {
          "usual": 15000,
          "bronze": 18000,
          "silver": 19000,
          "gold": 20000
        },
        "female": {
          "usual": 18000,
          "bronze": 21000,
          "silver": 22000,
          "gold": 23000
        }
      },
      "images": [
        "/assets/buying/velvet1.jpeg",
        "/assets/buying/velvet2.jpeg"
      ]
    },
    {
      "key": "BP",
      "text": "Чёрный жемчуг",
      "costs": {
        "male": {
          "usual": 20000,
          "bronze": 24500,
          "silver": 25000,
          "gold": 25500
        },
        "female": {
          "usual": 25000,
          "bronze": 29500,
          "silver": 30000,
          "gold": 30500
        }
      },
      "images": [
        "/assets/buying/Ch2_Img1.jpeg",
        "/assets/buying/Ch2_Img2.jpeg"
      ]
    },
    {
      "key": "HB",
      "text": "Гетеробежевый",
      "costs": {
        "male": {
          "usual": 5000,
          "bronze": 7500,
          "silver": 8000,
          "gold": 8500
        },
        "female": {
          "usual": 7000,
          "bronze": 9500,
          "silver": 10000,
          "gold": 10500
        }
      },
      "images": [
        "/assets/buying/hetero1.jpeg",
        "/assets/buying/hetero2.jpeg"
      ]
    }
  ],
});

const actions = {
  getChinchillaData({ state }, { keyChinchilla, sex, type }) {
    for (const chinchilla of state.chinchillas) {
      if (chinchilla.key === keyChinchilla) {
        const overall = { title: chinchilla.text, image: chinchilla.images[0] };
        let description;
        if (sex === 'male' && type === 'usual') {
          description = 'NM без оценки';
        } else if (sex === 'female' && type === 'usual') {
          description = 'NF без оценки';
        } else if (sex === 'male') {
          description = 'BM ' + type;
        } else if (sex === 'female') {
          description = 'BF ' + type;
        }
        const cost = chinchilla.costs[sex][type];
        return {
          overall,
          variant: {
            description,
            cost
          }
        };
      }
    }
  }
};

const getters = {
  chinchillas: state => state.chinchillas,
};

export default {
  state,
  actions,
  getters,
};
