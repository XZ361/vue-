<template>
	<div class="test">
		<h1>{{title}}</h1>
		<p>{{user.firstName}} {{user.lastName}}</p>
		<p></p>
		<ul>
			<li v-for='item in items'>Name--{{item.name}}  Age--{{item.age}}</li>
		</ul>
		<button v-on:click="greet('hello world!')">Say Greeting</button>
		<input type="text" v-on:click="KeyUp" autofocus="autofocus" v-on:keyup.alt.enter="enterHit"/>
		<label for="">FirstName</label>
		<input type="text" v-model="user.firstName"/>
		<label for="">LastName</label>
		<input type="text" v-model="user.lastName"/>
		<h3>{{fullName}}</h3>
		<h2>{{msg}}{{Content}}</h2>
	</div>
</template>

<script>
	export default{
		name:'Test',
		props:{
			msg:{
				type:String,
				default:'你好,加油，一定能成功！'
			},
			Content:{
				type:String,
				default:'恩恩，没毛病！'
			}
		},
		data(){
			return{
				title:'Vue.js is good!',
				user:{
					firstName:'wang',
					lastName:'含'
				},
				items:[
				{name:'123',age:22},
				{name:'12',age:23},
				{name:'13',age:24},
				]
			}
		},
		methods:{
			greet:function(ev){
				alert(ev);
			},
			KeyUp:function(){
				console.log('Pressing.....');
			},
			enterHit:function(){
				console.log('you chu fa le enter!');
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName+" "+this.user.lastName;
			}
		}
	}
</script>

<style>
	li{
		list-style: none;
	}
</style>