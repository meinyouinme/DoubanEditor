<template>
  <div @mouseenter="handleShowTip" @mouseleave="handleHideTip" class="tip-wrapper">
    <slot></slot>
    <div class="tip" :class="classType" v-show="visible" :style="offsetStyle">
      <div class="tip-arrow"></div>
      <div class="tip-content">
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      direction: {
        type: String,
        default: 'bottom'
      },
      content: {
        type: String
      },
      offset: {
        type: String
      }
    },
    computed: {
      classType () {
        return 'tip-' + this.direction
      },
      offsetStyle () {
        return this.direction + ':-' + this.offset + 'px'
      }
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      handleShowTip () {
        this.visible = true
      },
      handleHideTip () {
        this.visible = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tip-wrapper
    position relative
    .tip
      color #fff
      position absolute
      display inline-block
      .tip-arrow
        position absolute
        width 0
        height 0
        border-color transparent
        border-style solid
      .tip-content
        background rgba(0, 0, 0, .7)
        border-radius 4px
        padding 3px 8px
        height 18px
        font-size 12px
        line-height 18px
        text-align center
        white-space nowrap
    .tip-bottom
      left 50%
      transform translateX(-50%)
      .tip-arrow
        top -5px
        left 50%
        transform translateX(-50%)
        border-width 0 5px 5px
        border-bottom-color rgba(0, 0, 0, .7)
    .tip-top
      left 50%
      transform translateX(-50%)
      .tip-arrow
        bottom -5px
        left 50%
        margin-left -5px
        border-width 5px 5px 0
        border-top-color rgba(0, 0, 0, .7)

</style>
