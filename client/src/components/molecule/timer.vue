<template>
  <div id="timer">
    <div class="timer">
      <div class="time">
        TIME {{ formatTime }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: {
    finishFlag: Boolean,
    mmin: Number,
    ssec: Number
  },
  data() {
    return {
      min: this.mmin,
      sec: this.ssec,
      timerOn: false,
      timerObj: null,
    }
  },
  mounted () {
      let self = this;
      this.timerOn = true; //timerがONであることを状態として保持
      this.timerObj = setInterval(function() {self.count()}, 1000)
    },
  methods: {
    count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },

    // start: function() {
    //   let self = this;
    //   this.timerObj = setInterval(function() {self.count()}, 1000)
    //   this.timerOn = true; //timerがONであることを状態として保持
    // },

    // stop: function() {
    //   clearInterval(this.timerObj);
    //   this.timerOn = false; //timerがOFFであることを状態として保持
    // },
    complete: function() {
      this.$parent.finishFlag = true;
      this.timerOn = false;
      clearInterval(this.timerObj)
    }
  },
  computed: {
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  }
}
</script>

<style scoped>
#timer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.time {
  font-weight: bold;
  font-size: 50px;
}
</style>