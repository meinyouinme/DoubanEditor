<template>
  <div class="e-header">
    <div class="header-inner">
      <div class="nav clearfix">
        <div class="nav-logo"></div>
        <h1 class="nav-label">写日记</h1>
        <div class="autosave-tip">已保存: 2017-12-04 17:08:59</div>
        <div class="nav-opt">
          <div class="opt-item">
            <tip content="字数" direction="bottom" offset="40">
              <div class="opt opt-calc"></div>
            </tip>
          </div>
          <div class="opt-item">
            <tip content="保存" direction="bottom" offset="40">
              <div class="opt opt-save"></div>
            </tip>
          </div>
          <div class="opt-item">
            <tip content="全屏" direction="bottom" offset="40">
              <div class="opt opt-fullscreen"></div>
            </tip>
          </div>
        </div>
      </div>
      <div class="header-opt">
        <router-link class="note-preview" to="/preview">预览</router-link>
        <div class="note-nextstep">下一步</div>
      </div>
    </div>
  </div>
</template>

<script>
  import tip from '../tip/tip'
  export default{
    components: {
      tip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .e-header
    background #f8f8f8
    position fixed
    font-size 0
    top 0
    left 0
    width 100%
    z-index 200
    .header-inner
      .nav
        display block
        width 630px
        margin 0 auto
        height 40px
        position relative
        .nav-logo
          display inline-block
          width 40px
          height 40px
          vertical-align middle
          background-image url(./logo.svg)
          background-size 100%
          background-repeat no-repeat
          background-position center
          margin-right 8px
        .nav-label
          display inline-block
          font-size 15px
          color #bdbdbd
          height 40px
          line-height 40px
          vertical-align middle
          &:before
            content "\00b7"
            display inline-block
            font-size 21px
            vertical-align middle
            margin-right 4px
            line-height 1
        .autosave-tip
          display inline-block
          color #ddd
          font-size 12px
          vertical-align middle
          margin-left 20px
        .nav-opt
          position absolute
          right 0
          top 0
          height 40px
          display table
          .opt-item
            display table-cell
            margin-left 20px
            vertical-align middle
            height 24px
            width 40px
            text-align center
            .opt
              display inline-block
              width 24px
              height 24px
              background-size 60%
              background-repeat no-repeat
              background-position center
              cursor pointer
            .opt-calc
              background-image url(./svg_word.svg)
            .opt-save
              background-image url(./svg_save.svg)
            .opt-fullscreen
              background-image url(./svg_fullscreen.svg)

      .header-opt
        position absolute
        top 0
        right 0
        height 40px
        font-size 12px
        .note-preview
          cursor pointer
          display inline-block
          padding 0 20px
          line-height 40px
          &:hover
            color #3db04d
        .note-nextstep
          cursor pointer
          display inline-block
          padding 0 20px
          line-height 40px
          background-color #3db04d
          color #fff
</style>
