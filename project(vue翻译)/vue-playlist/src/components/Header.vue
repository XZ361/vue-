<template>
  <header v-on:click="changeTitle">
  <h1>{{title1}}{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
  	title:{
  		type:String
  		
  	}
  },
  data () {
    return {
      title1:'Vue.js Demo'
    }
  },
  methods:{
  	changeTitle:function(){
//	this.title='change';
		this.$emit('titleChange','子像父组件传值');//注册事件，调用emit函数，输入参数-调用的事件名，和实践内容
  }
  },
//beforeCreate:function(){//生命周期中的钩子函数，可以用来调试出现的问题
//		alert('组件实例化之前');
//},
//created:function(){
//		alert('组件实例化完毕');
//},
//beforeMount:function(){
//		alert('组件挂载前,页面未显示，但虚拟dom已经配置');
//},
//	mountd:function(){
//	alert('组件挂载后，此方法执行后，页面显示');
// },
// beforeUpdate:function(){
//		alert('组件更新前,页面未更新，但虚拟dom已经配置');
//},
//	updated:function(){
//	alert('组件更新后，此方法执行后，页面更新');
// },
// beforeDestory:function(){
//		alert('组件销毁前,页面未显示，但虚拟dom已经配置');
//},
//	destory:function(){
//	alert('组件销毁后，此方法执行后，页面销毁');
//}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	background: lightgreen;
	padding: 10px;
}
h1{
	color: #222;
	text-align: center;
}
</style>