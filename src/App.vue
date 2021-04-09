<!--
 * @Description:
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 13:23:45
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 17:46:44
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
              <!-- <li><router-link to="/index3">可变变量</router-link></li>
              <li><router-link to="/index4">懒惰评估</router-link></li>
              <li><router-link to="/index5">属性作为变量</router-link></li>
              <li><router-link to="/index6">默认变量</router-link></li> -->
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
