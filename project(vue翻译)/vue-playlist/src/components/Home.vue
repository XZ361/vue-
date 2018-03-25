<!--
	作者：2457307263@qq.com
	时间：2017-12-19
	描述：html模板，末班里有且只能有一个跟标签
-->
<template>
  <div id="home">
   
   <app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
   <users v-bind:users="users"></users>
   <users v-bind:users="users"></users>
   <app-footer v-bind:title="title"></app-footer>
  </div>
</template>
<!--行为：处理逻辑-->
<script>
//引入子组件Users,header
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'home',
  data(){
  	return{
  	users:[
//    {name:'Herry',position:'Web开发',show:false},
//    {name:'Herry',position:'Web开发',show:false},
//    {name:'Herry',position:'Web开发',show:false},
//    {name:'Herry',position:'Web开发',show:false},
//    {name:'Herry',position:'Web开发',show:false},
//    {name:'Herry',position:'Web开发',show:false},
//    {name:'Herry',position:'Web开发',show:false},
//    {name:'Herry',position:'Web开发',show:false},
//    {name:'Herry',position:'Web开发',show:false},
  
      ],
      title:'传递的是一个值，(number,string,boolean)'
  	}
  },
  components:{//局部注册组件
  	'users':Users,
  	'app-header':Header,
  	'app-footer':Footer
  },
  methods:{
  	updateTitle(title){
  		this.title=title;
  	}
 },
 created(){
 	this.$http.get("http://jsonplaceholder.typicode.com/users")
 	.then((data)=>{
// 		console.log(data);
		this.users=data.body;
 	})
 }
	
}
</script>
<!--样式：解决样式-->
<style scoped="scoped">
h1{
	color: purple;
	margin: 0 auto;
}

</style>
