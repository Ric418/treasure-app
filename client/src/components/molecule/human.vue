<template>
    <div class="human">
        <img v-bind:src = "image" class="humanImg" height="280">
    </div>
</template>

<script>
export default {
  name: 'human',
  props: {
      state: Boolean
  },
  computed: {
    image: function () {
      const filename = this.state ? 'up' : 'down'
      return require(`../../assets/human_${filename}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.human {
    -webkit-filter: drop-shadow(3px 3px 10px #00000065);
}
</style>