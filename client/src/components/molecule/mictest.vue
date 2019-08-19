<template>
  <div>
    <h1>🎙 MIC TEST 🎙<br></h1>
    <h4>テストボタンを押しマイクに向かって"ナイスバルク"と応援してみよう！</h4>
    <img src='../../assets/standby.png' width="350" class="mictestImg"><br>
    <textarea class="cheertextarea" v-model="text"/>
    <h3 class="micstate">{{ recognitionText }}</h3>
    <button class="start-button" @click="start">TEST</button>
  </div>
</template>

<script>
export default {
    name: 'mictest',
    props: {
      testDoneFlag: Boolean
    },
    data: function() {
      return {
        text: '',
        recognition : new webkitSpeechRecognition(),
        recognitionText: '🎙OFF',
      }
    },
    methods: {
      start: function(){
        this.recognition.start();
        this.recognition.onstart = () => {
            this.recognitionText = '🎙ON';
        }
        this.recognition.onend = () => {
            this.recognitionText = '🎙OFF';
            this.$parent.micOn = false;
        }
        this.recognition.onresult = (event) => {
            if (event.results.length > 0) {
              this.text = event.results[0][0].transcript;
              if (this.text === 'ナイスバルク'){
                  this.$parent.testDoneFlag = true
              }
            }
        }
      }
    }
}
</script>

<style lang="scss" scoped>

.cheertextarea{
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
}

.mictestImg{
  -webkit-filter: drop-shadow(3px 3px 10px #00000065);
  margin-top: 0.01em;
  margin-bottom: 1.5em;
}

.micstate{
    font-size: 25px;
    margin-bottom: 0.01em;
    margin-top: 0.5em;
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
    @include sub-button($backgroundcolor: #eb3939, $height: 70px, $width:15%);
}

</style>