<template>
  <div v-for="(a, i) in blogContents" :key="i">
    <h5>{{ a.title }}</h5>
    <p>{{ a.content }}</p>
    <p>{{ a.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    blogContents: Array,
  },
};
</script>

<style></style>
