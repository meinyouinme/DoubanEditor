<template>
  <div class="dialog">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
    >
      <div class="dialog-main" v-if="dialog.visible">
        <div class="dialog-title">
          {{dialog.title}}
        </div>
        <div class="dialog-content">
          <div class="content-inner">
            {{dialog.content}}
          </div>
          <div class="dialog-btn">
            <div class="btn-cancel" @click="handleHideDialog">取消</div>
            <div class="btn-finish" @click="handleFinishDialog">确定</div>
          </div>
        </div>
        <div class="dialog-close" @click="ok" title="关闭">×</div>
      </div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
    >
      <div class="dialog-layer" v-if="dialog.visible"></div>
    </transition>
  </div>
</template>

<script>
  export default{
    props: {
      dialog: {
        type: Object
      }
    },
    methods: {
      ok () {
        this.$emit('on-ok')
      },
      handleHideDialog () {
        this.$store.commit('changeDialog', {
          visible: false
        })
      },
      handleFinishDialog () {

      }
    }
  }
</script>

<style lang="stylus">
  .dialog
    .dialog-main
      position absolute
      z-index 101
      top 50%
      left 50%
      max-width 640px
      max-height 240px
      background #fff
      border-radius 4px
      border 1px solid #ccc
      box-shadow 1px 1px 6px rgba(0, 0, 0, .2)
      transform translate(-50%, -50%)
      .dialog-title
        color #072
        font-size 15px
        padding 25px 40px 0
      .dialog-content
        padding 15px 40px 30px
        .content-inner
          margin 0 0 20px 0
          font-size 14px
          width 200px
        .dialog-btn
          .btn-cancel
            cursor pointer
            display inline-block
            padding 5px 20px
            font-size 12px
            text-align center
            border-radius 3px
            line-height 1.2
            border 1px solid #ccc
            color #666
            background #fff
            margin-right 20px
            transition all .2s
            &:hover
              background #eee
          .btn-finish
            cursor pointer
            display inline-block
            padding 5px 20px
            font-size 12px
            text-align center
            border-radius 3px
            line-height 1.2
            border 1px solid #51873e
            color #fff
            background #3aa253
            transition all .2s
            &:hover
              background #4fc06a

      .dialog-close
        position absolute
        right 18px
        top 6px
        padding 15px 20px
        font-size 24px
        line-height 1
        font-weight lighter
        color #ccc
        cursor pointer
        transition all .2s
        &:hover
          color #072
    .dialog-layer
      position fixed
      left 0
      top 0
      right 0
      bottom 0
      background rgba(0, 0, 0, .3)
      z-index 100
</style>
