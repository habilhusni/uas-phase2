<template>
  <ul>
    <li><a href="default.asp">Login</a></li>
    <li><a href="news.asp">Sign Up</a></li>
  </ul>
</template>

<script>
export default {}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }
</style>
