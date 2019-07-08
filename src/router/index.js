import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AList from '@/components/A-List.vue';
import AAdd from '@/components/A-Add.vue';
import AReports from '@/components/A-Reports.vue';

Vue.use(Router)


export default new Router({
  routes: [
    { name: 'add', path: '/add', component: AAdd },
    {path:'/',redirect:'/overview'},
    {
      name: 'overview',
      path: '/overview',
      component: AList
    },

    {name: 'reports', path: '/reports', component: AReports},
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
