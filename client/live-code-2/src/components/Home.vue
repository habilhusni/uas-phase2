<template>
  <div class="home">
    <!-- <img src="../assets/home_background.jpg" class="image"> -->
    <!-- <p>{{items}}</p> -->
    <h1>Welcome to Article Website</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      item: {
        title: '',
        description: '',
        address: '',
        price: ''
      }
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
