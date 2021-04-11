<!--
 * @Author: your name
 * @Date: 2021-04-09 23:22:33
 * @LastEditTime: 2021-04-10 00:45:34
 * @LastEditors: Please set LastEditors
 * @Description: 参数混合
 * @FilePath: \less-demo\src\components\mixins\Index7.vue
-->
<template>
    <div>
        <div id="header"></div>
        <div class="button"></div>
        <div class="div">具有多个参数的Mixins</div>
        <div class="class1">命名参数</div>
        <div class="big-block">@argument变量</div>
        <div class="div2">高级参数和@rest变量</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @width: 50px;
    @height: 50px;
    .border-radius(@radius: 15px) {
        -webkit-border-radius: @radius;
        -moz-border-radius:@radius;
        border-radius: @radius;
    }
    .border() {
        display: inline-block;
        width: @width;
        height: @height;
        border: 1px solid red;
    }
    #header {
        .border() !important;
        .border-radius(4px);
    }
    .button {
        .border();
        .border-radius();
    }

    // 具有多个参数的Mixins
    .mixin (@color) {
        color-1: @color;
    }
    .mixin(@color;@padding:2) {
        color-2: @color;
        padding-2:@padding;
    }
    .mixin(@color;@padding;@margin:2) {
        color-3: @color;
        padding-3: @padding;
        margin: @margin @margin @margin @margin;
    }
    .div {
        .mixin(#806200,2, 3);
    }
    // 命名参数
    .mixin(@color: black;  @padding: 20px; @margin: 10px;) {
        color: @color;
        margin: @margin;
        padding: @padding;
    }
    .class1 {
        .mixin(@padding: 20px; @color: #33acfe);
    }
// .class2 {
//   .mixin(#efca44; @padding: 40px);
// }
    // @argument变量
    .box-shadow (@x: 0; @y: 0; @blur: 1px; @color: #000) {
        -webkit-box-shadow: @arguments;
        -moz-box-shadow: @arguments;
        box-shadow: @arguments;
    }
    .big-block {
        .box-shadow(2px; 5px)
    }

    // 高级参数和@rest变量
    .mixin1(@a; @rest...) {
        margin: @a;
        padding: @rest;
    }
    .div2 {
        .mixin1(11px; 12px;13px;14px;15px) 
    }
    
</style>
