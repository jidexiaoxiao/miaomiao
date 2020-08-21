<template>
  <div id="app">
	<!-- keep-alive缓存：第一次渲染过后，再加载就不会渲染页面 -->
	<keep-alive>
		<router-view/>
	</keep-alive>
  </div>
</template>


