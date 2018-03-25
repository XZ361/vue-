<template>
  <div id="translateOutput">
  	<h1>{{translatedText}}</h1>
  </div>
</template>
<!--行为：处理逻辑-->
<script>
export default {
  name: 'translateOutput',
  props:[
  "translatedText"
  ]

}
</script>
<!--样式：解决样式-->
<style scoped="scoped">


</style>