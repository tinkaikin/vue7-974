<template>
  <!-- name : Main                      -->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <router-link class="btn btn-success" to="add">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>gender</th>
            <th>fath</th>
            <th>rule</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
<!-- 
id: 0
name: "雪人努努"
gender: "男"
fath: "我去前方探探路"
rule: "我是你的眼(隐身)" 
hobby: "送人头"
-->
          <tr v-for="(item) in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>{{item.fath}}</td>
            <td>{{item.rule}}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:;" @click="deleteHero(item.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data(){
    return {
      list:[],
    }
  },
  created() {
    // this.$http.get('/mock/5d0cba0313563a7b47ce871c/itcast_wyz/heros')
    this.getHero();
  },
  methods: {
    //            //http://localhost:3000/heros                              获取英雄列表
    getHero(){
      this.$http.get('/heros')
      .then(res=>{
        if(res.status == 200){
          this.list = res.data
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    //            http://localhost:3000/heros/id值                            删除一个英雄
    deleteHero(heroId){
      if(confirm('Are you sure?')){
        this.$http.delete('/heros/' + heroId)
          .then(res=>{
            if(res.status == 200){
              this.getHero();
            }
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
  },
  
};
</script>


        