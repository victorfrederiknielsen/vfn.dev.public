<template>
  <div class="d-flex direction-row align-center">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-avatar size="28" color="primary" v-on="on">
          <span class="white--text font-weight-black caption">VN</span>
        </v-avatar>
      </template>
      <p>Victor Nielsen</p>
    </v-tooltip>

    <p class="ms-1 text--secondary caption">for</p>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <p v-on="on" class="font-weight-black ms-1 caption primary--text">
          VFN//DEV
        </p>
      </template>
      <p>VFN//DEV</p>
    </v-tooltip>

    <p class="ms-1 text--secondary caption">on</p>

    <p class="ms-1 font-weight-black caption">2020/04/27</p>
  </div>
</template>

<script>
export default {
  name: 'ArticleAuthor'
}
</script>

<style scoped>
.v-chip.theme--dark {
  background-color: white !important;
  color: black !important;
}
.v-avatar,
.v-chip {
  cursor: pointer;
}
p {
  margin: 0;
}
</style>
