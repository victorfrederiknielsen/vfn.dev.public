<template>
  <div>
    <v-container v-for="(article, index) in list" :key="article.id">
      <ArticleItem :article="article" :index="index" />
    </v-container>
  </div>
</template>

<script>
import ArticleItem from '~/components/index/ArticleItem'
import { mapGetters } from 'vuex'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  computed: {
    ...mapGetters('articles', ['list'])
  },
  created() {
    this.$store.dispatch('articles/getList')
  }
}
</script>

<style scoped></style>
