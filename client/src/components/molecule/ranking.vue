<template>
<div>
    <h1 class="mainh1">RANKING</h1>
    <h2>POINT: {{ sum }} pt</h2>
    <h2>RANK: {{ rank }}th</h2>
    <h3>{{ rankBoard }}</h3>
    <div>
    <img src="../../assets/result.png" width="200" class="resultImg">
    </div>
    <button class="retry-button" @click="retry">RETRY</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ranking',
    props: {
        num: Number,
        sum: Number,
    },
    data (){
        return{
            rank: 1,
            rankBoard: axios.get('http://localhost:1991/public')
        }
    },
    methods: {
        retry: function(){
            console.log("clicked")
            this.$emit("retry")
        }
    }
}
</script>

<style lang="scss" scoped>

@mixin sub-button(
  $backgroundcolor:#010101,
  $height: 100px,
  $width: 200px,
  $fontsize: 25px,
  $display: inline-block,
  $padding: 0.50em 0.5em,
  ){
    height: $height;
    width: $width;
    font-size: $fontsize;
    position: relative;
    display: $display;
    padding: $padding;
    text-decoration: none;
    color: #FFF;
    background: $backgroundcolor;/*背景色*/
    border-bottom: solid 8px darken($backgroundcolor, 15%);/*少し濃い目の色に*/
    border-radius: 20px;/*角の丸み*/
    box-shadow: inset 8px 5px 0 rgba(255,255,255,0.2), 0 15px 15px rgba(0, 0, 0, 0.19);
    font-weight: bold;
    margin: 20px;
}

.retry-button{
    @include sub-button($backgroundcolor: #ebd939, $height: 70px, $width:10%);
    position: relative;
    top:-5px; 
    left:-90px;
}

.resultImg{
    -webkit-filter: drop-shadow(3px 3px 10px #00000065);
    margin-top: 0.01em;
    margin-bottom: 1.5em;
    position: relative;
    top:130px; 
    left:130px;
    margin-top: 400px;
}
.mainh1{
    font-size: 50px;
    margin-bottom: 0.1em;
}
</style>