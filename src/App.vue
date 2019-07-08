<template>
  <div id="app">
    <!-- 头部组件                                         -->
    <app-navbar></app-navbar>
    <div class="container-fluid">
      <div class="row">
        <!--  侧边栏组件                           -->
        <app-sidebar></app-sidebar>

        <!-- 内容区域                                      -->
        <router-view/>
        <!-- <a-main></a-main> -->
      </div>
    </div>
  </div>
</template>

<script>
import AppNavBar from './components/AppNavBar.vue';           
import AppSideBar from './components/AppSideBar.vue';
// import AMain from './components/A-Main.vue';
export default {
  name: 'App',
  components:{
    AppNavBar,
    AppSideBar,
    // AMain,
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
