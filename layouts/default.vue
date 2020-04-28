<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <Header />
    <nuxt />
  </v-app>
</template>

<script>
import Header from '~/components/header/Header'

export default {
  components: {
    Header
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>

<style>
.v-application {
  font-family: 'Roboto mono', monospace;
}
</style>
