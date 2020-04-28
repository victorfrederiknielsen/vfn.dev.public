<template>
  <div>
    <v-chip
      v-for="tag in tags"
      :key="tag.id"
      class="me-2 mt-2 font-weight-black primary"
      link
      label
    >
      {{ tag.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.v-chip {
  border-radius: 8px;
}
</style>
