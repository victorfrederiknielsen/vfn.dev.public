<template>
  <ul class="d-flex justify-end align-center">
    <nuxt-link tag="li" to="/articles" class="ms-3">Articles</nuxt-link>
    <nuxt-link tag="li" to="/#" class="ms-3">Projects</nuxt-link>
    <nuxt-link tag="li" to="/#" class="ms-3">About</nuxt-link>
    <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >Toggle Theme</v-btn
    >
  </ul>
</template>

<script>
export default {}
</script>

<style scoped>
ul {
  list-style: none;
  height: 100%;
}
li {
  display: inline;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
li.nuxt-link-active {
  border-bottom: 2px solid var(--v-primary-base);
}
</style>
