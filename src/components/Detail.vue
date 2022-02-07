<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ blogContents[$route.params.id].title }}</h5>
    <p>{{ blogContents[$route.params.id].content }}</p>
    <p>{{ blogContents[$route.params.id].date }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "detail",
  props: {
    blogContents: Array,
  },
};
</script>

<style></style>
