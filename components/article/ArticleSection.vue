<template>
  <section>
    <p v-if="section.type === 'paragraph'">
      {{ section.content }}
    </p>

    <h3 v-if="section.type === 'h3'" class="mb-n6">
      {{ section.content }}
    </h3>
  </section>
</template>

<script>
export default {
  name: 'ArticleSection',
  props: {
    section: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style scoped>
section > * {
  margin-top: 2em;
}
h3 {
  font-weight: bold;
  font-size: 34px;
}
p {
  font-size: 21px;
}
p,
h3 {
  font-family: 'Noto Serif', serif;
  margin-bottom: 0;
}
</style>
