const actions = {
  sendMessage(context, data) {
    return this.$axios.$post('https://fur-chins.ru/assets/send-message.php', data);
  },
};

export default {
  actions,
};
