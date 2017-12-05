<template>
  <div class="note-wrapper">
    <div class="note-title">
      <textarea class="" placeholder="添加标题" v-model.trim="title"></textarea>
    </div>
    <transition name="fade">
      <div class="note-intro" v-show="visibleIntro">
        <textarea placeholder="添加导语（最多140字）" v-model.trim="intro"></textarea>
      </div>
    </transition>
    <div class="editor-wrapper">
      <div class="editor-tool">
        <div class="tool-wrapper">
          <tip direction="top" content="加粗" offset="35">
            <div class="tool tool-bold"></div>
          </tip>
        </div>
        <div class="tool-wrapper">
          <tip direction="top" content="加粗" offset="35">
            <div class="tool tool-header"></div>
          </tip>
        </div>
        <div class="split-line"></div>
        <div class="tool-wrapper">
          <tip direction="top" content="加粗" offset="35">
            <div class="tool tool-img"></div>
          </tip>
        </div>
        <div class="tool-wrapper">
          <tip direction="top" content="加粗" offset="35">
            <div class="tool tool-video"></div>
          </tip>
        </div>
        <div class="tool-wrapper">
          <tip direction="top" content="加粗" offset="35">
            <div class="tool tool-book"></div>
          </tip>
        </div>
        <div class="tool-wrapper">
          <tip direction="top" content="加粗" offset="35">
            <div class="tool tool-link"></div>
          </tip>
        </div>
        <div class="split-line"></div>
        <div class="tool-wrapper">
          <tip direction="top" content="加粗" offset="35">
            <div class="tool tool-sep"></div>
          </tip>
        </div>
        <div class="tool-wrapper">
          <tip direction="top" content="加粗" offset="35">
            <div class="tool tool-space"></div>
          </tip>
        </div>
        <div class="split-line"></div>
        <div class="tool-wrapper" @click="toggleIntro">
          <tip direction="top" content="加粗" offset="30">
            <div class="tool tool-intro"></div>
          </tip>
        </div>
      </div>
      <div class="editor-area" contenteditable="true" @focus="add" @paste="pasteNote($event)" ref="editor">
        {{content}}
      </div>
      <e-image src="http://p1.img.cctvpic.com/photoworkspace/contentimg/2017/12/04/2017120410065999767.jpg"></e-image>
    </div>
  </div>
</template>

<script>
  import tip from '../tip/tip'
  import image from '../image/image'
  import {getPasteText} from '../../util/paste-handle'
  import {getCursorPosition} from '../../util/selection'

  export default{
    data () {
      return {
        visibleIntro: false,
        content: ''
      }
    },
    computed: {
      title: {
        get () {
          return this.$store.state.title
        },
        set (val) {
          this.$store.state.title = val
        }
      },
      intro: {
        get () {
          return this.$store.state.intro
        },
        set (val) {
          this.$store.state.intro = val
        }
      }
    },
    methods: {
      toggleIntro () {
        if (this.visibleIntro) {
          if (this.intro !== '') {
            this.$store.commit('changeDialog', {
              visible: true,
              title: '提示',
              content: '确定删除导语吗？',
              ok () {
                this.$store.commit('emptyIntro')
              }
            })
          } else {
            this.visibleIntro = false
          }
        } else {
          this.visibleIntro = true
        }
      },
      pasteNote (e) {
//        console.log(getCursorPosition(this.$refs.editor))
        e.preventDefault()
        this.content += getPasteText(e)
      },
      add () {
        console.log(getCursorPosition(this.$refs.editor))
      }
    },
    components: {
      tip,
      'e-image': image
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .note-wrapper
    width 630px
    margin 60px auto
    .note-title
      padding 0 20px
      margin-bottom 20px
      textarea
        width 100%
        border none
        resize none
        background none
        font-size 24px
        font-weight 700
        color #666
        -webkit-appearance none
        outline none
        padding 0
        height 32px
        line-height 32px
    .note-intro
      padding 10px 20px
      background #f8f8f8
      margin-bottom 20px
      textarea
        width 100%
        border none
        resize none
        background none
        font-size 13px
        -webkit-appearance none
        outline none
        color #9b9b9b
        padding 0
        margin 0
        height 20px
        line-height 20px
    .editor-wrapper
      .editor-tool
        font-size 0
        height 24px
        padding 8px 15px
        border-top 1px solid #e5e5e5
        background #fff
        .tool-wrapper
          display inline-block
          width 24px
          height 24px
          vertical-align middle
          margin-right 20px
        .tool
          width 24px
          height 24px
          background-position center
          background-repeat no-repeat
          cursor pointer
        .split-line
          display inline-block
          width 1px
          height 16px
          margin-right 20px
          border-left 1px solid #e5e5e5
          vertical-align middle
        .tool-bold
          background-image url(./svg_link.svg)
        .tool-quote
          background-image url(./svg_link.svg)
        .tool-header
          background-image url(./svg_link.svg)
        .tool-img
          background-image url(./svg_link.svg)
        .tool-video
          background-image url(./svg_link.svg)
        .tool-book
          background-image url(./svg_link.svg)
        .tool-link
          background-image url(./svg_link.svg)
        .tool-sep
          background-image url(./svg_link.svg)
        .tool-space
          background-image url(./svg_link.svg)
        .tool-intro
          background-image url(./svg_link.svg)
      .editor-area
        padding 16px 20px
        min-height 100px
        outline none
        overflow auto

</style>
