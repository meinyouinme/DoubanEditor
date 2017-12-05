<template>
  <div class="preview">
    <div class="preview-inner">
      <div class="title">better-scroll 提供了很多灵活的 API</div>
      <div class="author">
        <div class="avatar">
          <img src="https://img3.doubanio.com/icon/u148046297-2.jpg" width="24" height="24"/>
        </div>
        <div class="info">
          <a class="name" href="">高贵的五花肉</a>
          <span class="text">的日记</span>
          <span class="date">2017-12-5</span>
        </div>
      </div>
      <div class="intro">better-scroll 提供了很多灵活的 API，当我们基于 better-scroll 去实现一些 feature 的时候，会用到这些 API，了解他们会有助于开发更加复杂的需求。</div>
      <div class="detail"></div>
    </div>
  </div>
</template>

<script>
export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .preview
    position absolute
    top 40px
    left 0
    bottom 0
    width 100%
    background-color #fff
    overflow auto
    .preview-inner
      width 590px
      padding 0 20px
      margin 30px auto
      .title
        font-size 24px
        font-weight 700
        padding-bottom 15px
        line-height 1.1
        color #494949
      .author
        margin-bottom 10px
        .avatar
          width 24px
          height 24px
          display inline-block
          vertical-align middle
          margin-right 18px
        .info
          display inline-block
          vertical-align middle
          font-size 12px
          .name
            color #37a
            text-decoration none
            margin-right 4px
          .text
            color #666
          .date
            margin-left 10px
            color #9b9b9b
      .intro
        margin 30px 0
        padding 15px 20px
        line-height 1.8
        color #999
        background #f7f7f7
        font-size 13px
</style>
