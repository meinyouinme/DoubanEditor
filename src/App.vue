<template>
  <div id="app">
    <e-header></e-header>
    <editor></editor>
    <div class="editor-content"></div>
    <e-dialog :dialog="dialog"></e-dialog>
    <toast text="生成预览..." toastType="loading"></toast>
    <router-view/>
  </div>
</template>

<script>
  import header from './components/header/header'
  import editor from './components/editor/editor'
  import tip from './components/tip/tip'
  import dialog from './components/dialog/dialog'
  import toast from './components/toast/toast'

  export default {
    computed: {
      dialog () {
        return this.$store.state.dialog
      }
    },
    components: {
      'e-header': header,
      tip,
      editor,
      'e-dialog': dialog,
      toast
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './assets/stylus/base.styl';

</style>
