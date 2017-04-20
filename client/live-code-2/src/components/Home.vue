<template>
  <div class="home">
    <!-- <img src="../assets/home_background.jpg" class="image"> -->
    <!-- <p>{{items}}</p> -->
    <h1>Welcome to Article Website</h1>
    <router-link to="articles" class="butArtic" type="submit">
     View Articles
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 4rem;
}
</style>
