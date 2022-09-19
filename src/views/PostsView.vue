<template>
  <div class="about">
    <v-btn @click="back()" class="back">Back</v-btn>
    <h1>This is a posts page</h1>
    <PostsList></PostsList>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import router from '@/router'
export default {
  name: 'HomeView',
  components: {
    PostsList
  },
  methods: {
    back () {
      router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.back {
  margin-top: 10px;
  cursor: pointer;
}
.theme--light.v-btn.v-btn--has-bg {
  background-color: #1976d2;
  color: #FFFFFF;
}
</style>
