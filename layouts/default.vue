<template>
  <div class="indexPage">
    <header>
      <NavBar/>
    </header>

    <main class="indexPage__main">
      <nuxt/>
    </main>

    <footer>
      <BaseFooter/>
    </footer>
  </div>
</template>
<style lang="scss">
  .indexPage {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &__main {
      flex: 1;
      background: #222;
    }
  }
</style>
<script>
  import BaseFooter from '~/components/BaseFooter/BaseFooter.vue'
  import NavBar from '~/components/NavBar/NavBar.vue'

  export default {
    components: {
      BaseFooter,
      NavBar,
    },
  }
</script>
