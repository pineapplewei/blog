<template>
    <div class="header_page">
        <div class="headimg">
            <a href="#"><img src="" alt="" ></a>
        </div>

        <div class="intro">
            <h1>皮卡菠萝</h1>
            <p>消除恐惧的最好办法就是</p>
            <p>面对恐惧</p>
        </div>
            
        <div class="list-bar">
            <ul>
                <li v-for="(item,index) in list" :key="item.title" class="list-select">
                <router-link :class="{'list-select' :itemCheck==index}" :to="item.path" @click.native="tabClass(index)">{{item.title}}</router-link>
                </li>
            </ul>
        </div> 
    </div>
        
</template>

<script>
export default {
    name:"Header",
    data(){
        return {
            list:[{
                title:'博客主页',
                path:"/index"
            },{
                title:'博主信息',
                path:"/about"
            },{
                title:'笔记内容',
                path:"/note"
            }],
            itemCheck:0
        }
    },
    components:{

    },
    methods:{
        tabClass(index){
            this.itemCheck = index ;
        }
    }
}
</script>

<style>
.header_page{
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color:black; 
    display:block;
    width: 15%;
    float: left;
    
}
.headimg{
    width: 100%;
    height: 300px;
    background-color: black;
}
.headimg img{
    width: 100%;
    height: 100%;
}
.intro{
    text-align: center;
}
.intro h1{
    margin-top: 3rem;
    text-align: center;
    color: wheat;
}
.intro p{
    text-align: center;
    font-size: 1.2rem;
    color: wheat;
    margin-top: 2rem;
}
.list-bar{
    margin-top: 4rem;
    width: 100%;
    
}
.list-bar a{
    text-decoration: none;
}
.list-select :hover{
    color: wheat;
}
.list-select :link{
    color: rgb(34, 34, 34);
}
.list-select{
    color: wheat;
}
.list-bar ul{
    width: 100%;
    padding: 0px;
}
.list-bar li{
    list-style: none;
    text-align: center;
    margin-left: 10%;
    margin-top: 1.7rem;
    border-bottom: 1px solid black;
    padding-bottom: 0.4rem;
    width: 80%;
    font-size: 1.3rem;
}
</style>