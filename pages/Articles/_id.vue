<template>
  <article v-if="currentArticle">
    <v-container>
      <v-parallax :src="currentArticle.bannerUrl">
        <div class="d-flex flex-column full-height">
          <div class="d-flex flex-grow-0 justify-end me-n4">
            <ArticleTags :tags="currentArticle.tags" />
          </div>
          <div class="flex-grow-1 d-flex justify-center align-center">
            <h1
              class="display-4 font-weight-black ma-n6"
              :class="{ 'dark-banner': currentArticle.darkBanner }"
            >
              {{ currentArticle.title }}
            </h1>
          </div>
        </div>
      </v-parallax>
    </v-container>

    <v-container>
      <div class="article-body mt-6">
        <ArticleAuthor />
        <ArticleSection
          v-for="section in currentArticle.sections"
          :key="section.id"
          :section="section"
        />
      </div>
    </v-container>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleSection from '~/components/article/ArticleSection'
import ArticleAuthor from '~/components/article/ArticleAuthor'
import ArticleTags from '~/components/article/ArticleTags'

export default {
  name: 'Article',
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('articles/getArticle', id)
  },
  computed: {
    ...mapGetters('articles', ['currentArticle'])
  },
  components: {
    ArticleSection,
    ArticleAuthor,
    ArticleTags
  }
}
</script>

<style scoped>
.title-text {
  color: rgba(0, 0, 0, 0.8);
}
.title-text.dark-banner {
  color: white;
}
.article-body {
  max-width: 680px;
  margin: 0 auto;
}
.v-card {
  border-radius: 6px !important;
  box-shadow: none;
}
.v-parallax {
  border-radius: 8px;
}
.max-width {
  max-width: 90%;
}
.full-height {
  height: 100%;
}
</style>
