<template>
	<div class="users">
		<h1>Users</h1>
		<!--
        	作者：2457307263@qq.com
        	时间：2017-12-20
        	描述：添加用户信息
        -->
        <form action="" v-on:submit="addUser">
        	<input type="text" v-model="newUser.name" placeholder="Enter name"/>
        	<input type="text" v-model="newUser.email" placeholder="Enter email"/>
        	<input type="submit" name="" id="" value="Submit" />
        </form>
        <!--
        	作者：2457307263@qq.com
        	时间：2017-12-20
        	描述：展示用户信息
        -->
		<ul>
			<li v-for="user in users" >
				<input type="checkbox" v-model="user.contacted" class="toggle"/>
				<span :class="{contacted:user.contacted}">
					name:{{user.name}}---email:{{user.email}} 
				<button v-on:click="deleteUser(user)">删除</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'users',
		
		data(){
			return{
				newUser:{},
				users:[
				{
					name:'mark',
					email:'1003@email.com',
					contacted:false
				},
				{
					name:'mar',
					email:'1002@email.com',
					contacted:false
				},
				{
					name:'ma',
					email:'1001@email.com',
					contacted:false
				},
				]
			
			}
		},
		methods:{
			addUser:function(ev){
//				console.log("hello");
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:false
				})
				ev.preventDefault();
			},
			deleteUser:function(user){
//				console.log('hello');
				this.users.splice(this.users.indexOf(user),1);
			}
			
	
		},
		created:function(){
			this.$http.get("http://jsonplaceholder.typicode.com/users")
			.then(function(response){
//				console.log(response.data);
				this.users=response.data;
			})
//				console.log('hello')
		}
	}
</script>

<style>
	.contacted{
		text-decoration: line-through;
	}
	li{
		list-style: none;
	}
</style>