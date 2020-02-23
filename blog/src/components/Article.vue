<template>
    <div class="article_page">
        <div v-html="article" class="article_contain"></div>
    </div> 
</template>

<script>
    export default {
        data(){
            return{
                article:''
            }
        },
        created(){
            //用于获取index.js中绑定的id内容值
         console.log(this.$route.params.id);
         this.$axios.get('http://localhost:3000/note/getNoteByName/'+this.$route.params.id)
         .then(res=>{
             console.log(res.data)
             this.article = res.data
         })
         .catch(err=>{
             console.log('请求失败')
         })
     }   
    }
    
</script>

<style scoped>
.article_page{
  width: 85%;
  background-color: black;
  color: wheat;
  height: 100%;
  display:block;
  float: left;
  
}
.article_contain{
  height: 80%;
  padding: 10% 10% 0% 10%;
  list-style:none;
  
}
</style>