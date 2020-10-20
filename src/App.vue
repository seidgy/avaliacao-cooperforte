<template>
  <main>
    <AppHeader></AppHeader>
    <router-view/>
  </main>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import AppHeader from '@/layout/AppHeader.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" src="./assets/css/main.scss"></style>
