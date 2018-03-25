import Vue from 'vue'/*引入vue从vue文件（通过用npm 下载下来的）*/
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Test from './components/Home'
import Users from './components/Users'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
//配置路由
const router=new VueRouter({
	base:__dirname,
	routes:[
	{path:'/',component:Test},
	{path:'/Users',component:Users},
	],
	mode:'history'
})
//注册全局组件
//Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({  /*因为已经引入了vue，股此处可以正常的创建vue实例*/
	router,
  el: '#app',  
  render: h => h(App)                                        //将h作为createElement的别名是一个通用惯例,字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。
})
																															//=> 是ES6的箭头语法
																															/* ES5  
																															(function (h) {  
																															  return h(App);  
																															});  
																															  
																															ES6  
																															h => h(App); 
																															*/
																															//index.html->main.js->App.vue