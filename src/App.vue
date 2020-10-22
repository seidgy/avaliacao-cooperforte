<template>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" src="./assets/css/main.scss"></style>
