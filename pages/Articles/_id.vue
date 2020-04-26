<template>
  <div>
    <v-card v-if="currentArticle">
      <v-card-title>{{ currentArticle.title }}</v-card-title>

      <v-card-text>{{ currentArticle.description }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    const id = parseInt(this.$route.params.id)
    this.$store.dispatch('articles/getArticle', id)
  },
  computed: {
    ...mapGetters('articles', ['currentArticle'])
  }
}
</script>

<style></style>
