<template>
  <div id="app">
    <router-view/>
    <img v-show="$route.path === '/'" src='./assets/intro.png' width="200" class = "topImg">
    <h1>{{ msg }}</h1>
    <!-- <button class="dumbell-button" @click="dumbStart">DUMBELL</button><br> -->
    <li><router-link to="/game0">DUMBELL</router-link></li><br>
    <li><router-link to="/">TOP</router-link></li>
  </div>
</template>

<script>
import Game from './components/atoms/Dumbellgame'
export default {
  name: 'app',
  components: { Game },
  data () {
    return {
      topFlag: true,
      thisUrl:'',
      msg: 'Welcome to Your MUSLE App'
    }
  },
  // methods: {
  //   dumbStart (){
      
  //     alert($route.path);
  //     return thisUrl
  //   }
  // }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}

@mixin sub-button($backgroundcolor:#010101){
    height: 100px;
    width: 200px;
    font-size: 30px;
    position: relative;
    display: inline-block;
    padding: 0.50em 0.5em;
    text-decoration: none;
    color: #FFF;
    background: $backgroundcolor;/*背景色*/
    border-bottom: solid 8px darken($backgroundcolor, 15%);/*少し濃い目の色に*/
    border-radius: 20px;/*角の丸み*/
    box-shadow: inset 8px 5px 0 rgba(255,255,255,0.2), 0 15px 15px rgba(0, 0, 0, 0.19);
    font-weight: bold;
    margin: 20px;
}

.dumbell-button {
    @include sub-button(#5f5f5f);
    height: 80px;
    width: 200px;
}

.topImg{
  -webkit-filter: drop-shadow(0px -15px 15px #00000065);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
