<template>
    <div class="about_design">
        <div class="person">
            <div class="name">魏攀</div>
            <div class="introduce">
                <p>一只前端小萌新</p>
                <p>热衷于学习和分享所见所知</p>
                <p>没毛病，干就完了，奥利给！</p>
                <p>我们遇到什么困难，也不要怕，微笑着面对它</p>
                <p>消除恐惧的最好办法就是面对恐惧</p>
                <p>坚持，才是胜利！加油，奥利给！</p>
            </div>
        </div>
        
    </div> 
</template>

<script>
export default {
    name:"About",
    data(){
        return {

        }
    },
    components:{

    }
}
</script>

<style>
.about_design{
  width: 85%;
  background-color: skyblue;
  height: 100%;
  display:block;
  float: left;
  background-color: black;
  color: wheat;
}
.person{
    height: 100%;
}
.name{
    padding: 0px 10% 0px 10%;
    font-size: 32px;
    height: 15%;
    padding-top: 12%;
}
.introduce{
    height: 65%;
    padding: 0px 10% 0px 10%;
    
}
</style>