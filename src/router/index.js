import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import AList from '@/components/A-List.vue';
import HeroList from '../views/hero/HeroList.vue'
import HeroAdd from '../views/hero/HeroAdd.vue';
import HeroUpdate from '../views/hero/HeroUpdate.vue';

Vue.use(Router)


export default new Router({
  // 选项
  // 当浏览器地址栏中的路由地址 #/hero 和 router-link生成的a标签的href 精确匹配的时候，添加类样式
  // linkExactActiveClass: 'active',

  // 当浏览器地址栏中的路由地址 #/hero/add 包含router-link生成的a标签的href地址，添加类样式
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/hero' },
    { name: 'herolist', path: '/hero', component: HeroList },
    
    { name: 'heroupdate', path: '/hero/update/:id', component: HeroUpdate, props: true },
    
    { name: 'heroadd', path: '/hero/add', component: HeroAdd },

    {
      name: 'analytics', path: '/analytics', component: {   //这里等待模板替换
        template: `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">analytics</h2>
        </div>    
        `
    }},
    {
      name: 'export', path: '/export', component: {       //这里等待模板替换
        template: `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">export</h2>
        </div>    
        `
    }},
   
  ]
})
