<!--
	作者：2457307263@qq.com
	时间：2017-12-19
	描述：html模板，末班里有且只能有一个跟标签
-->
<template>
  <div id="app" class="col-md-6 col-md-offset-3" >
  	<h1>在线翻译</h1>
  	<h5 class="text-muted ">简单  / 易用  / 便捷</h5>
  	<translateForm v-on:formSubmit="translateText" ></translateForm>
  </br>
  	<translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>
<!--行为：处理逻辑-->

<script>
	import TranslateForm from './components/TranslateForm'
	import TranslateOutput from './components/TranslateOutput'
export default {
	
  name: 'app',
  data:function(){
  	return{
  		translatedText:''
  	}
  },
  components:{
  	TranslateOutput,
  	TranslateForm
  	
  },
  methods:{
  	translateText:function(text,language){
  		this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171221T024343Z.ad476fb001f964f3.b0777507ea59492185679fcf020549b90508f487&lang='+language+'&text='+text)
  		.then((response)=>{
  			this.translatedText=response.body.text[0];
//			console.log(response.body.text[0]);
  		})
//		alert(text)
  	}
  }
}
</script>
<!--样式：解决样式-->
<style scoped="scoped">

</style>
