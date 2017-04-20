<template>
  <div class="list-articles">
    <!-- <img src="../assets/home_background.jpg" class="image"> -->
    <!-- <p>{{items}}</p> -->
    <table class="table table-hover product-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Updated At</th>
          <th>Created At</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" track-by="id">
          <td>{{item.title}}</td>
          <td>{{item.content}}</td>
          <td>{{item.updatedAt}}</td>
          <td>{{item.createdAt}}</td>
          <td>{{item.author[0].name}}</td>
          <td><button v-on:click="updateData(item._id)" data-toggle="modal" data-target=".bd-example-modal-lg">Edit</button> <button v-on:click="delData(item._id)">Remove</button> </td>
        </tr>
      </tbody>
    </table>
    <router-link to="create" class="btn btn-outline-success buttlogin" type="submit">
     Add Article
    </router-link>

    <!-- <button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button> -->

    <!-- modal for Edit -->
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          ...
        </div>
      </div>
    </div>

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
      axios.delete(`http://localhost:3000/articles/${id}`)
      .then(function (res) {
        window.location.reload();
        console.log(JSON.stringify(res));
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updateData: function(id) {
      axios.put(`http://localhost:3000/articles/${id}`, this.item)
      .then(function (res) {
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
