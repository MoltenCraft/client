<script>
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import Header from './views/layouts/Header'

UIkit.use(Icons)

export default {
  components: {
    Header
  }
}
</script>

<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<style lang="less">
  @import './assets/less/_theme.less';
</style>
