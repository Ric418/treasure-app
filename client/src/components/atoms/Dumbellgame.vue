<template>
    <div class="game">
        <router-view/>
        <player v-show="startFlag && $route.path === '/game0'"></player>
        <div v-show="!startFlag && $route.path === '/game0'">
            <img src="../../assets/title.png"  class="titleImage" width="600"><br>
            <button class="start-button" @click="start">BULK UP!<br>TO GAME</button>
            <button class="ranking-button" @click="rankShow">RANKING</button>
        </div>
    </div>
</template>

<script>
import player from '../molecule/player'
import ranking from '../molecule/ranking'
import Rankpage from '../../Pages/Ranking'
// import router from '../../index'

export default {
    name: 'game',
    components: {player, ranking},
    data () {
    return {
      startFlag: false,
      rankshowFlag: false
        }
    },
    methods: {
    start () {
        this.startFlag = true;
    },
    rankShow (){
        this.$router.push('/rank')
    }
  }
}
</script>

<style lang="scss" scoped>

@mixin sub-button($backgroundcolor:#010101, $display:inline-block){
    height: 100px;
    width: 200px;
    font-size: 30px;
    position: relative;
    display: $display;
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

.titleImage {
    left: 300px;
    padding: 50px;
    -webkit-filter: drop-shadow(3px 3px 10px #00000065);
}

.start-button {
    @include sub-button(#e9ab00);
    height: 120px;
    width: 300px;
}

.ranking-button {
    @include sub-button(#11c700, block);
    height: 80px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}

</style>
