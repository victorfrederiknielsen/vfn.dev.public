<template>
  <div>
    <ArticleItem v-for="article in list" :key="article.id" :article="article" />
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

<style></style>
