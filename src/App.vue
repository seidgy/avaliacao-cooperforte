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
import HighchartsVue from 'highcharts-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(HighchartsVue)
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" src="./assets/css/main.scss"></style>
