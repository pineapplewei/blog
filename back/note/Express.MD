


# Express相关笔记  
## 1.如何启动express服务器 入门代码  
const express = require('express')  
const app = express()  
app.get('/',(req,res)=>{  

	res.send('hello express')  
})  
app.get('/list',(req,res)=>{  

    res.send({name:"张三"})  
})  

app.listen(3000)  

console.log('服务器启动成功')  
## 2.什么是中间件  
const express = require('express')  
const app = express()  
app.get('/request',(req,res,next)=>{  
    req.name='张三'  
    next()  
})  
app.get('/ok',(req,res)=>{  
    res.json([{  
        1:'香辣鸡腿堡',  
        2:'冰可乐'  
    }])  
})  
app.listen(3000)  
console.log('服务器启动成功')  
## 3.app.use中间件的用法  
const express = require('express')  
const app = express()  
app.use((req,res,next)=>{  
    console.log('请求走了app.use中间件')  
    next()  
})  
app.get('/request',(req,res,next)=>{  
    console.log('请求走了app.request中间件')  
    next()  
})  
app.get('/list',(req,res)=>{  
    res.send('请求list成功')  
})  

app.listen(3000)  
console.log('服务器启动成功')  
## 4.中间件的应用  
const express = require('express')  
const app = express()  
//网站公告  
// app.use((req,res,next)=>{  
//     res.send('当前网站正在维护...')  
// })  
//路由保护  
// app.use('/admin',(req,res,next)=>{  
//     let isLogin = true  
//     if(isLogin){  
//         next()  
//     }else{  
//         res.send('您还没有登陆不能访问当前页面')  
//     }  
// })  
// app.get('/admin',(req,res)=>{  
//     res.send('您已成功登陆可以访问当前页面')  
// })  
//定义404  
app.use((req,res,next)=>{  
    res.status(404).send('404')  
})  
app.listen(3000)  
console.log('服务器启动成功')  
## 5.构建模块化路由的(基础代码)  
const express = require('express')  
//创建网站服务器  
const app = express()  
const home = require('./home')  
const admin = require('./admin')  

app.use('/home',home)  
app.use('/admin',admin)  

app.listen(3000)  
console.log('服务器启动成功')  

//admin.js  
const express = require('express')  
const admin = express.Router()  
admin.get('/index',(req,res)=>{  
    res.send('欢迎来到博客管理页面')  
})  
module.exports = admin  

//home.js  
const express = require('express')  
const home = express.Router()  
home.get('/index',(req,res)=>{  
    res.send('欢迎来到博客首页页面')  
})  
module.exports = home  
## 6.GET参数的获取  
const express = require('express')  
//创建网站服务器  
const app = express()  
app.get('/index',(req,res)=>{  
    res.send(req.query)  
})  

app.listen(3000)  
console.log('服务器启动成功')  
## 7.POST参数的获取-第三方包body-parser  
const express = require('express')  
const bodyParser = require('body-parser')  
//创建网站服务器  
const app = express()  
//拦截所有请求并且进行处理输出对象  
app.use(bodyParser.urlencoded({extended:false}))  
app.post('/add',(req,res)=>{  
    res.send(req.body)  
})  

app.listen(3000)  
console.log('服务器启动成功')  
## 8.app.use传递函数调用  
const express = require('express')  
const app = express()  
//通过函数改变调用的内部方式  
app.use(fn ({a: 2}))  
function fn(obj){  
    return function(req,res,next){  
        if(obj.a==1){  
            console.log(req.url)  
        }else{  
            console.log(req.method)  
        }  
        next()  
    }  
}  
app.get('/',(req,res)=>{  
    res.send('OK')  
})  
app.listen(3000)  
console.log('服务器启动成功')  
## 9.express路由参数  
const express = require('express')  
const app = express()  
app.get('/index/:id',(req,res)=>{  
    res.send(req.params)  
})  
app.listen(3000)  
console.log('服务器启动成功')  
