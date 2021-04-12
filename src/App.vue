<!--
 * @Description:
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 13:23:45
 * @LastEditors: cy
 * @LastEditTime: 2021-04-12 16:10:04
-->
<template>
  <div class="wrapper">
    <div class="left">
      <ul>
          <li>变量(variable)
            <ul>
              <li><router-link to="/index1">变数</router-link></li>
              <li><router-link to="/index2">可变差值</router-link></li>
              <li><router-link to="/index3">可变变量</router-link></li>
              <li><router-link to="/index4">懒惰评估</router-link></li>
              <li><router-link to="/index5">属性作为变量</router-link></li>
              <li><router-link to="/index6">默认变量</router-link></li>
            </ul>
          </li>
          <li>混合(mixins)
            <ul>
              <li><router-link to="/index7">混合</router-link></li>
              <li><router-link to="/index8">不带输出的混合</router-link></li>
              <li><router-link to="/index9">Mixins中的选择器</router-link></li>
              <li><router-link to="/index10">命名空间</router-link></li>
              <li><router-link to="/index11">受保护的命名空间</router-link></li>
              <li><router-link to="/index12">!important关键字</router-link></li>
              <li><router-link to="/index13">参数混合</router-link></li>
              <li><router-link to="/index14">模式匹配</router-link></li>
              <li><router-link to="/index15">使用mixins作为函数</router-link></li>
              <li><router-link to="/index16">递归混合</router-link></li>
              <li><router-link to="/index17">Mixin Guards</router-link></li>
              <li><router-link to="/index18">混音混合</router-link></li>
            </ul>
          </li>
          <li>嵌套(nesting)
            <ul>
              <li><router-link to="/index19">多选&</router-link></li>
              <li><router-link to="/index20">更改选择器顺序</router-link></li>
              <li><router-link to="/index21">组合explosion父选择器</router-link></li>
            </ul>
          </li>
      </ul>
    </div>
    <div class="right">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    
  </div>

  
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body, html, #app { width: 100%; height: 100%; }
.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
ul { padding: 10px; }
li {list-style-type: none;}
</style>
<style lang="less" scoped>
    .left { }
    .right {}
</style>e
