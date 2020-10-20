<template>
  <header class="header">
      <nav class="top-nav">
          <a href="https://www.cf.coop.br/" class="logo" target="_blank">
            <span class="sr-only">Abre em uma nova aba </span>
            <img src="/static/images/cooperforte.png" alt="COOPERFORTE">
          </a>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
<style lang="scss" scoped>
  @import '../assets/css/_variables.scss';
  .top-nav {
    width: 100%;
    background-color: $mc;
    padding: 5px 20px;
  }

  .logo {
    img {
      height: 24px;
    }
  }
</style>