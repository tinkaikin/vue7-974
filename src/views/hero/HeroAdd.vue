<template>
<!-- name:AAdd -->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄大名</label>
        <input type="text" class="form-control" id="name" placeholder="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <input type="text" class="form-control" id="gender" placeholder="gender" v-model="gender">
      </div>
      <div class="form-group">
        <label for="fath">最牛B的事情</label>
        <input type="text" class="form-control" id="fath" placeholder="fath" v-model="fath">
      </div>
      <div class="form-group">
        <label for="rule">身份</label>
        <input type="text" class="form-control" id="rule" placeholder="rule" v-model="rule">
      </div>
      <div class="form-group">
        <label for="hobby">技能</label>
        <input type="text" class="form-control" id="hobby" placeholder="hobby" v-model="hobby">
      </div>
      
      <button type="button" class="btn btn-success" @click='addHero'>Submit</button>
    </form>
  </div>
</template>


<script>
export default {
  name:'AAdd',
  data(){
    return {
      name:'',
      gender:'',
      fath:'',
      rule:'',
      hobby:''
    }
  },
  methods:{
    addHero(){
      this.$http.post('/heros',{
        name:this.name,
        gender:this.gender,
        fath:this.fath,
        rule:this.rule,
        hobby:this.hobby
      }).then(res=>{
        if(res.status === 201){
          this.$router.push({path:'overview'})
        }
      }).catch(err=>{
        console.log(err)
      })
    },
  }
};
</script>