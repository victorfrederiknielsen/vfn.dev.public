<template>
  <v-card class="mb-2" outlined>
    <v-card-title>{{ article.title }}</v-card-title>

    <v-card-text>{{ article.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style></style>
