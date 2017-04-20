<template>
  <div class="log-in">
    <!-- <img src="../assets/home_background.jpg" class="image"> -->
    <!-- <p>{{items}}</p> -->
    <form>
      <div class="form-group">
        <label for="username">User Name</label>
        <input type="text" class="form-control" v-model="item.username" id="inputUsername" placeholder="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" v-model="item.password" id="inputPassword" placeholder="Password">
      </div>
      <button v-on:click="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      item: {
        username: '',
        password: ''
      }
    }

  },
  methods: {
    login: function() {
          axios.post('http://localhost:3000/login', this.item)
          .then(function (res) {
            console.log(JSON.stringify(res.data));
            // console.log(res.data.length);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
  mounted() {
    // this.getData()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 4rem;
}
</style>
