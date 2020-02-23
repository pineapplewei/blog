<template>
  <div class="home_page">
    <div class="word">全新定义</div>
    <div class="audio">
      <div class="icon">?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
.home_page {
  width: 85%;
  background-color: black;
  height: 100%;
  display: block;
  float: left;
}
.word{
  padding: 10% 10% 0px 10%;
  font-size: 3rem;
  height: 15%;
  padding-top: 10%;
  text-align: center;
  background-color: black;
  color: wheat;
  
}
.audio{
  height: 67.5%;
  padding: 0px 10% 0px 10%;
  list-style:none;
  background-color: black;
  color: wheat;
}
.icon{
  text-align: center;
  line-height: 25rem;
  font-size: 15rem;
}
.icon:hover{
  animation: myfirst 10s;
  animation-timing-function:ease-out;
  animation-direction:alternate;
  animation-iteration-count:5;
}
@keyframes myfirst{
  from 
  {background-color: black;
   color: wheat; 
   font-size:15rem; 
   line-height: 25rem;
  }
  to 
  {
    background-color: wheat; 
    color: black; 
    font-size:30rem; 
    line-height: 35rem;
  }
}

</style>