<template>
  <div class="row" id="translateForm" >
  	<div class="col-md-12 ">
	  	<form v-on:submit="formSubmit" class="well form-inline" id="transform">
	  		<input type="text" placeholder="请输入需要翻译的内容" v-model="textToTranslate" class="form-control col-md-6"/>
	  		<select v-model="language" class="form-control col-md-offset-3">
	  			<option value="en">English</option>
	  			<option value="zh">Chinese</option>
	  			<option value="hy">Armenian</option>
	  			<option value="fr">French</option>
	  			<option value="es">Spanish</option>
	  			<option value="ms">Malay</option>
	  			<option value="ru">Russian</option>
	  			<option value="ko">Korean</option>
	  			<option value="ja">Janpenese</option>
	  		</select>
	  		<input type="submit" value="翻译" class="btn btn-success "/>
	  	</form>
  	</div>
  </div>
</template>
<!--行为：处理逻辑-->
<script>
export default {
  name: 'translateForm',
  data:function(){
  	return{
  		textToTranslate:'',
  		language:''
  	}
  },
  methods:{
  	formSubmit:function(e){
  		//注册事件
  		this.$emit('formSubmit',this.textToTranslate,this.language);
  		e.preventDefault();
  	}
  },
  created:function(){
  	this.language='en';
  }
}
</script>
<!--样式：解决样式-->
<style scoped="scoped">
#transform{
	border:1px solid #ccc;
	border-radius: 10px;
	
}
</style>