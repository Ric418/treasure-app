import Vue from 'vue'
import Router from 'vue-router'

import Game from '../components/atoms/Dumbellgame.vue'
import Ranking from '../Pages/Ranking.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/game0',
      component: Game
    },
    {
      path: '/rank',
      component: Ranking
    }
  ]
})
