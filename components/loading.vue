<template lang="html">
  <div class="loader" v-if="loading">
    <img src="/assets/main/Logo.png" class="loader-image" alt="Site loader">
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loader {
    height: 100vh;
    width: 100%;
    line-height: 100vh;
    text-align: center;
    background: #222;
  }
  .loader-image {
    width: 300px;
    height: 300px;

    animation-duration: .15s;
    animation-name: loader;
  }

  @keyframes loader {
    from {
      transform: scale(.8);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
