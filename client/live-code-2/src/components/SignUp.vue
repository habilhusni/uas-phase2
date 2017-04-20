<template>
  <div class="sign-up">
    <!-- <img src="../assets/home_background.jpg" class="image"> -->
    <!-- <p>{{items}}</p> -->
    <form>
      <div class="form-group">
        <label for="nameUser">Name</label>
        <input type="text" class="form-control" v-model="item.name" id="inputName" placeholder="Enter name">
      </div>
      <div class="form-group">
        <label for="username">User Name</label>
        <input type="text" class="form-control" v-model="item.username" id="inputUsername" placeholder="username">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="item.email" id="inputEmail" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" v-model="item.password" id="inputPassword" placeholder="Password">
      </div>
      <button v-on:click="createData">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      item: {
        title: '',
        content: '',
        author: []
      }
    }

  },
  methods: {
    getData: function(){
          var self = this;
          axios.get('http://localhost:3000/articles')
          .then(function (res) {
            res.data.forEach((x) => {
              self.items.push(x);
            })
            // self.user.push(res.data[0]);
            console.log(JSON.stringify(res.data));
            // console.log(res.data.length);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    delData: function(id) {
      axios.delete(`http://localhost:3000/houses/${id}`)
      .then(function (res) {
        window.location.reload();
        console.log(JSON.stringify(res));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted() {
    this.getData()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 4rem;
}
</style>
