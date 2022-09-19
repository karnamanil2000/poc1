<template>
  <div class="home">
    <h1>This is an home page</h1>
    <h1>We can view list of <router-link to="/posts">Posts</router-link> here.</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped lang="scss">
.home {
  padding: 30px;
  align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    // text-decoration: none;
  }
}
</style>
