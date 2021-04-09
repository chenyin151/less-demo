<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 13:23:45
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 15:13:56
-->
<template>
  <div class="hello">
    <router-view></router-view>
    <!-- <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3">111</div>
    <div class="div4">2</div>
    <div>作用域</div>
    <div class="div5">div5
      <div class="child">child</div>
    </div>
    <div>映射</div>
    <button class="button">Map</button>
    <div>命名空间和访问符</div>
    <div id="header">
      <a href="">
        111
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../assets/styl/theme.less';
  @width: 120 * 2px;
  @height: 120px;
  @color: @fontColor;
  @fill-color: red;
  @var: 5px/2;
  @min768: (min-width: 768px);
  @min1000: (min-width: 1000px);
  @w: .4;
  .border {
    border-top: dotted 1px black;
  }
  .hello {
    .div1 { display: inline-block; background-color:@fill-color; border: 1px solid @color; width: @width; height: @height; .border()}
    .div2 { display: inline-block; border: 1px solid @color; width: @width; height: @height; .border();}
    .div3 { display: inline-block; border: 1px solid @color; width: calc(50% + (@var - 20px)); height: @height;}
    .div3 { 
      @media @min768 {
        color: red;
      }
      @media @min1000 {
        color: green;
      }
    }
    .div4 {display: inline-block; border: 1px solid @color; height: @height; width: percentage(@w); }
    @fontColor: red;
    .div5 { border: 1px solid @color; color: @fontColor;
      .child {
        @fontColor: blue;
        color: @fontColor;
      }
    }
  }

  #colors() {
    primary: blue;
    secondary: green;
  }
  .button {
    color: #colors[primary];
    border: 1px solid #colors[secondary]
  }

  #bundle() {
    .button { 
      display: block;
      border: 1px solid red;
      background-color: grey;
      &:hover { 
        background-color: white;
      }
    }
    .tab {
      
    }
    
  }
  #header a {
      color: orange;
      #bundle.button();
    }
</style>
