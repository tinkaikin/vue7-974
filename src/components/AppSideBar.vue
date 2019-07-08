<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      
        <router-link :to="{name:'overview'}"  tag="li" exact-active-class = "active">
          <a>英雄列表</a>
          <span class="sr-only">(current)</span>
        </router-link>
     
     
        <router-link :to="{name:'reports'}" tag="li" exact-active-class = "active">
          <a>武器列表</a>
        </router-link>

        <router-link :to="{name:'analytics'}" tag="li" exact-active-class = "active">
          <a>装备列表</a>
        </router-link>

        <router-link :to="{name:'export'}" tag="li" exact-active-class = "active">
          <a>Export</a>
        </router-link>
      
      <!-- <li>
        <a href="#">Analytics</a>
      </li>
      <li>
        <a href="#">Export</a>
      </li> -->
    </ul>
  </div>
</template>


<script>
export default {
  name: "SideBar"
};
</script>