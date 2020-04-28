<template>
  <v-row class="mb-12">
    <v-col
      cols="12"
      md="7"
      :order-md="index % 2 === 0 ? 1 : 2"
      :to="article.id.toString()"
      append
      :src="article.bannerUrl"
      height="300"
    >
      <nuxt-link
        tag="div"
        :to="article.id.toString()"
        append
        class="banner-link"
      >
        <v-parallax
          :src="article.bannerUrl"
          height="300"
          class="rounded-border"
        >
          <div class="d-flex flex-column full-height">
            <div class="flex-grow-1 d-flex justify-center align-center">
              <h1
                class="display-2 font-weight-black title-text"
                :class="{ 'dark-banner': article.darkBanner }"
              >
                {{ article.title }}
              </h1>
            </div>
          </div>
        </v-parallax>
      </nuxt-link>
    </v-col>

    <v-col
      cols="12"
      md="5"
      :order-md="index % 2 === 0 ? 2 : 1"
      class="justify-center d-flex flex-column"
    >
      <ArticleAuthor />
      <p class="preview-paragraph mt-6">{{ article.preview }}</p>
      <ArticleTags :tags="article.tags" />
    </v-col>
  </v-row>
</template>

<script>
import ArticleTags from '~/components/article/ArticleTags'
import ArticleAuthor from '~/components/article/ArticleAuthor'

export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      default: () => undefined
    },
    index: {
      type: Number,
      default: 0
    }
  },
  components: {
    ArticleTags,
    ArticleAuthor
  }
}
</script>

<style>
.title-text {
  color: rgba(0, 0, 0, 0.8);
}
.title-text.dark-banner {
  color: white;
}
.full-height {
  height: 100%;
}
.preview-paragraph {
  font-size: 16px;
}
.rounded-border {
  border-radius: 8px;
}
.banner-link {
  cursor: pointer;
}
</style>
