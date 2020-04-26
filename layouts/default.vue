<template>
  <v-app>
    <v-container>
      <Header />
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
import Header from '~/components/header/Header'

export default {
  components: {
    Header
  }
}
</script>
