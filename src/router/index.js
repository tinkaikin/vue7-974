import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import AList from '@/components/A-List.vue';
import HeroList from '../views/hero/HeroList.vue'
import HeroAdd from '../views/hero/HeroAdd.vue';
import HeroUpdate from '../views/hero/HeroUpdate.vue';

Vue.use(Router)


export default new Router({
  routes: [
    { path: '/', redirect: '/herolist' },
    { name: 'herolist', path: '/herolist', component: HeroList },
    
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
