<template>
  <v-row class="justify-space-between align-content-center my-6">
    <v-col>
      <Logo />
    </v-col>
    <v-col>
      <Menu />
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/header/Logo'
import Menu from '~/components/header/Menu'

export default {
  components: {
    Logo,
    Menu
  }
}
</script>

<style></style>
