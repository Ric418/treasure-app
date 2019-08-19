<template>
<div>
  <div v-if="!testDoneFlag"><mictest></mictest></div>
    <div @keydown.prevent.down="keyDown" @keydown.prevent.up="keyUp">
      <div v-if="startFlag && !finishFlag">
        <human v-bind:state="state"></human>
        <timer 
          v-bind:startFlag="startFlag" 
          v-bind:finishFlag="finishFlag" 
          v-bind:mmin="min"
          v-bind:ssec="sec">
        </timer>
        <h1>💪 POINT {{ resultSum }} 💪</h1>
        <cheer v-bind:micOn="micOn" v-bind:num="num"></cheer>
        <button class="push-button" @click="up">UP ⬆</button>
        <button class="down-button" @click="down">⬇ DOWN</button>
        <button class="cheer-button" @click="cheerUp">📣 CHEER 📣</button>
      </div>
      <div v-show="testDoneFlag && !startFlag && !finishFlag">
        <p class="preparedtext">Prepared!!</p><br>
        <p class="prepareddesc">早速バルクアップしていき💪</p>
        <img src="../../assets/testdone.png" width="350" class="preparedImg"><br>
      </div>
      <div v-if="testDoneFlag && !startFlag && !finishFlag">
        <button class="start-button" @click="start">START</button>
      </div>
      <result v-show="startFlag && finishFlag && !submitFlag" v-bind:sum="sum"></result>
        <ranking
          @retry="retry"
          v-show="startFlag && finishFlag && submitFlag"
          v-bind:sum="sum" 
          v-bind:num="num"
          v-bind:startFlag="startFlag" 
          v-bind:finishFlag="finishFlag">
        </ranking>
    </div>
</div>
</template>

<script>
import human from './human'
import cheer from './cheer'
import timer from './timer'
import ranking from './ranking'
import mictest from './mictest'
import result from './result'

export default {
  name: 'player',
  components: {human, cheer, timer, ranking, mictest, result},
  data () {
    return {
      sum: 0,
      testDoneFlag: false,
      showStartButton: true,
      startFlag: false,
      finishFlag: false,
      submitFlag: false,
      state: false,
      min: 1,
      sec: 0,
      micOn: false,
      num: 1,
    }
  },
  methods: {
    start () {
        this.startFlag = true;
    },
    up () {
        if (!this.state && this.startFlag){
            this.state = true;
        } 
    },
    cheerUp (){
      if (this.startFlag && !this.micOn){
         this.micOn = true
        } 
    },
    down () {
        if (this.state && this.startFlag){
            this.state = false;
            this.sum += this.num;
        } 
    },
    keyUp () {
        if (!this.state && this.startFlag){
            this.state = true;
        } 
    },
    keyDown () {
        if (this.state && this.startFlag){
            this.state = false;
            this.sum += this.num;
        } 
    },
    retry () {
      // Object.assign(this.$data, initialState());
      this.sum = 0;
      this.submitFlag = false;
      this.testDoneFlag = true;
      this.showStartButton = true;
      this.startFlag = false;
      this.finishFlag = false;
      this.state = false;
      this.min = 1;
      this.sec = 0;
      this.micOn = false;
      this.num = 1;
    }
  },
  computed: {
    resultSum: function(){
        return this.sum;
    }
  }
}

</script>


<style lang="scss" scoped>

.cheerMesse{
  font-size: 30px;
}

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

.start-button {
    @include sub-button($backgroundcolor: #e9ab00, $height: 70px, $width:15%);
}
.cheer-button {
  @include sub-button(#eb3939, 80px, 22%, 25px, block);
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;

}
.push-button {
  @include sub-button(#ffc62a, $height: 80px, $width: 10%);
  margin-left: auto;
}
.down-button {
  @include sub-button(#34bce6, $height: 80px, $width: 10%);
  margin-right: auto;
}
.preparedImg{
  -webkit-filter: drop-shadow(3px 3px 10px #00000065);
  margin-top: 0.01em;
  margin-bottom: 1.5em;
}
.preparedtext{
  font-size: 50px;
  font-weight: Bold;
  margin-bottom: auto;
}
.prepareddesc{
  font-size: 20px;
  font-weight: Bold;
  margin-top: 0.01em;
}
</style>