<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      
        <router-link :to="{name:'herolist'}"  tag="li">
          <a>英雄列表</a>
        </router-link>
     
        <router-link :to="{name:'analytics'}" tag="li">
          <a>装备列表</a>
        </router-link>

        <router-link :to="{name:'export'}" tag="li">
          <a>武器列表</a>
        </router-link>
    </ul>
  </div>
</template>


<script>
export default {
  name: "SideBar"
};
</script>