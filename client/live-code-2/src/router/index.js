import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import ListArticles from '@/components/ListArticles'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      name: 'Article',
      component: ListArticles
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUp
    }
  ]
})
