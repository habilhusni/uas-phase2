<template>
  <div class="create-article">
    <!-- <img src="../assets/home_background.jpg" class="image"> -->
    <!-- <p>{{items}}</p> -->
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" v-model="item.title" id="inputTitle" placeholder="Enter title">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <input type="text" class="form-control" v-model="item.content" id="inputContent" placeholder="Content">
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" class="form-control" v-model="item.author" id="inputAuthor" placeholder="Author">
      </div>
      <button v-on:click="createArticle">Create Article</button>
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
        author: ''
      }
    }

  },
  methods: {
    createArticle: function() {
          axios.post('http://localhost:3000/articles', this.item)
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
