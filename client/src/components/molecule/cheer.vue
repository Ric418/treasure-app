<template>
  <div>
    <textarea class="cheertextarea" v-model="text"/>
    <h3 v-bind:src="voice" class="micstate">{{ recognitionText }}</h3>
  </div>
</template>

<script>
import {jpcheerlist, encheerlist} from '../../utils/cheerList'

export default {
    name: 'cheer',
    props: {
      micOn: Boolean,
      num: Number

    },
    data: function() {
      return {
        text: '',
        recognition : new webkitSpeechRecognition(),
        recognitionText: '🎙OFF',
      }
    },
    computed: {
        voice: function(){
            if (this.micOn){
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
                        if (jpcheerlist.indexOf(this.text) >= 0){
                            this.$parent.num += this.text.length
                        }
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
}

.micstate{
    font-size: 25px;
    margin-bottom: 0.01em;
    margin-top: 0.5em;
}

</style>