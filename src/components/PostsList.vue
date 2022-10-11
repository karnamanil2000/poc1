<template>
<div id="app" v-if="flag">
  <div>
    <h1>Posts List</h1>
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
  </div>
  <div v-for="post in filteredPosts" :key=post.id>
    <!-- <h6>{{post.id}}</h6>
    <h5>{{post.title}}</h5>
    <p>{{post.body}}</p> -->
    <h6 v-html="post.id"></h6>
    <h5 v-html="post.title"></h5>
    <p v-html= "post.body"></p>
  </div>
  <!-- <p >{{ posts }}</p> -->
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      posts: null,
      flag: false,
      searchQuery: undefined
    }
  },
  computed: {
    filteredPosts () {
      const filterKey = this.searchQuery && this.searchQuery.toLowerCase()
      let data = this.posts != null ? this.posts : null
      if (filterKey) {
        data = data.filter((row) => {
          // console.log('row', Object.keys(row))
          return Object.keys(row).some((key) => {
            var s = String(row[key]).replace(filterKey, filterKey.bold()) // '<b>' + filterKey + '</b>')
            // var s = String(row[key]).replace(filterKey, `<strong> ${{ filterKey }} </strong>`)
            console.log(s)
            // return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            return s.toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      // data = data.replace(filterKey, '<span style="background: yellow;">' + filterKey + '</span>')
      return data
    }
  },
  filters: {
    highlight: function (value) {
      // console.log(this.searchQuery)
      // if (this.searchQuery !== undefined || this.searchQuery !== '') {
      //   return value.replace('an', '<span style="background: yellow;">' + 'an' + '</span>')
      // }
      // if (this.searchQuery === undefined) {
      //   return ''
      // }
      const filterKey = this.searchQuery !== undefined && this.searchQuery !== null && this.searchQuery !== '' ? this.searchQuery && this.searchQuery.toLowerCase() : ''
      console.log('filter', filterKey)
      if (filterKey === undefined && filterKey === '') {
        return ''
      }
      if (!value) return ''
      // if (this.searchQuery === undefined || this.searchQuery === '' || this.searchQuery === null) return ''
      // value = value.toString()
      // return value.toUpperCase()

      // console.log(filterKey)
      return filterKey !== undefined && filterKey !== null ? value.toString().replace(filterKey, filterKey.toUpperCase()) : ''
      // const pattern = value
      //   .split(' ')
      //   .filter((t) => t.length > 0)
      //   .join('|')
      // const regex = new RegExp(pattern, 'gi')
      // return value ? this.filteredPosts?.replace(regex, (match) => `<b>${match}</b>`) : this.filteredPosts
    }
  },
  async created () {
    try {
      const res = await axios.get('http://localhost:3000/posts')
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = res.data
      // const res = await fetch('http://localhost:3000/posts')
      // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      // this.posts = await res.json()
      this.flag = true
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}
.container {
  background-color: #24e02dd2;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
}
input {
  border-style: solid;
}
</style>
