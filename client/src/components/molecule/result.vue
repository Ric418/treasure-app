<template>
<div>
    <h1 class="mainh1">FINISH<br>NICE BULK!!</h1>
    <h2>POINT: {{ sum }} pt</h2>
    <img src="../../assets/time3.png" width="500" class="resultImg"><br>
    <!-- <form action="/rank/post" method="POST" onsubmit="doSomething();return false;"> -->
    <input 
    name="text" 
    v-model="text" 
    v-validate="'required'"
    :class="{'input':true, 'form-danger': errors.has('text')}" 
    placeholder="名前を入れてランクを確認しよう！" 
    class="submit-input"
    onClick="return false;"
    /><br>
    <div class="has-error" v-show="errors.has('text')">
        <p class="alert-danger">{{ errors.first('text') }}</p>
    </div>
    <button class="submit-button" @click="submit">SUBMIT</button>
</div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);

export default {
    data (){
        return{
            text: ''
        }
    },
    props: {
        sum: Number,
        submitFlag: Boolean
    },
    methods: {
        submit (){
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$parent.submitFlag = true
                } else {
                    event.preventDefault()
                }
            })
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

.submit-input{
    border-radius: 0.4em;   /* 角丸 */
    padding: 0.5em;          /* 内側の余白量 */
    background-color: #ffffff;  /* 背景色 */
    width: 22%;             /* 横幅いっぱいにする */
    box-sizing: border-box;  /* ※これがないと横にはみ出る */
    height: 60px;           /* 高さ */
    font-size: 1.7em;          /* 文字サイズ */
    line-height: 1.0;        /* 行の高さ */
    border: 1px solid #ffffff;
    box-shadow: 2px 2px 4px 0 #707070 inset;
    text-align:center;
    font-family: "ヒラギノ丸ゴ ProN";
    margin-top: auto;
    font-size: 17px;
}
.submit-button{
    @include sub-button($backgroundcolor: #fab55b, $height: 70px, $width:20%);
}
.resultImg{
    -webkit-filter: drop-shadow(3px 3px 10px #00000065);
    margin-top: 0.01em;
    margin-bottom: 1.5em;
}
.mainh1{
    font-size: 50px;
    margin-bottom: 0.1em;
}
.alert-danger {
  color: red;
}
.has-error {
  border-color: red;
}
</style>

