<template>
  <div class="image" :style="{textAlign:align}">
    <div class="image-wrapper">
      <img :src="src" alt="" class="source">
      <div class="image-del" title="删除">×</div>
      <div class="image-opt">
        <div class="opt-wrapper">
          <tip direction="top" content="居左" offset="40" @click.native="alignLeft">
            <div class="opt opt-left"></div>
          </tip>
        </div>
        <div class="opt-wrapper">
          <tip direction="top" content="居中" offset="40" @click.native="alignCenter">
            <div class="opt opt-center"></div>
          </tip>
        </div>
        <div class="opt-wrapper">
          <tip direction="top" content="替换图片" offset="40" @click.native="upload">
            <div class="opt opt-upload"></div>
          </tip>
        </div>
      </div>
    </div>
    <div class="image-description">
      <div contenteditable="true" class="description" @focus="autoEmpty" @blur="autoFill">{{description}}</div>
    </div>
  </div>
</template>

<script>
  import tip from '../tip/tip'

  export default{
    props: {
      src: {
        type: String
      }
    },
    data () {
      return {
        description: '(选填)图片描述',
        align: 'center'
      }
    },
    methods: {
      alignLeft () {
        console.log(this.align)
        this.align = 'left'
      },
      alignCenter () {
        this.align = 'center'
      },
      upload () {

      },
      autoEmpty () {
        if (this.description === '(选填)图片描述') {
          this.description = ''
        }
      },
      autoFill (e) {
        let text = e.target.innerText
        console.log('innerText:' + text)
        console.log('description:' + this.description)
        if (text === '') {
          this.description = '(选填)图片描述'
        } else {
          this.description = text
        }
      }
    },
    components: {
      tip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .image
    .image-wrapper
      display inline-block
      position relative
      max-width 100%
      .source
        width 100%
        vertical-align top
      .image-del
        position absolute
        top -8px
        right -8px
        border-radius 50%
        width 18px
        height 18px
        font-size 16px
        line-height 18px
        text-align center
        font-weight lighter
        background-color #000
        color #fff
        cursor pointer
      .image-opt
        position absolute
        top 30px
        left 50%
        transform translate(-50%, 0)
        padding 10px
        background rgba(0, 0, 0, .7)
        border-radius 22px
        .opt-wrapper
          display inline-block
          width 30px
          text-align center
          .opt
            display inline-block
            vertical-align middle
            width 20px
            height 20px
            background-repeat no-repeat
            background-size 20px 20px
            cursor pointer
          .opt-left
            background-image url(./svg_link.svg)
          .opt-center
            background-image url(./svg_link.svg)
          .opt-upload
            background-image url(./svg_link.svg)
          &:last-child
            border-left 1px dashed #737373
    .image-description
      margin-top 6px
      text-align center
      .description
        outline none
        background none
        display inline-block
        text-align center
        min-width 100px
        max-width 100%
        color #999
        font-size 13px
        line-height 22px
        padding 6px 10px
        transition all .3s
        &:hover, &active
          background #f8f8f8

</style>
