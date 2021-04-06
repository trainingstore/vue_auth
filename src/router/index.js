import Vue from "vue"
import VueRouter from "vue-router"
import firebase from 'firebase'
import Home from "../views/Home.vue"
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: About,
    // () =>
      // import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    // () =>
      // import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
    meta: {
      authRequired: true
    }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next()
    } else {
      alert('You must be logged in to see this page')
      next({path: '/'})
    }
  } else {
    next()
  }
})

export default router;
