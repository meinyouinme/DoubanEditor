<template>
  <div class="toast" v-if="visible">
    <div class="toast-inner">
      <img src="" class="icon" width="20" height="20"/>
      <span class="text">{{text}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      toastType: {
        type: String
      },
      text: {
        type: String
      },
      delay: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        visible: true
      }
    },
    mounted () {
      setTimeout(() => {
        this.visible = false
      }, this.delay)
    },
    computed: {
      icon () {
        return '' + this.toastType
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .toast
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    z-index 1000
    .toast-inner
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      height 40px
      padding 0 15px
      border-radius 20px
      background rgba(0, 0, 0, .8)
      .icon
        vertical-align middle
      .text
        font-size 12px
        color #fff
        line-height 40px
        display inline-block
        vertical-align middle
</style>
