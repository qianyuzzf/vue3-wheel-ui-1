import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc }
  ]
})
