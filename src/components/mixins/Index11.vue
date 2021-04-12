<!--
 * @Author: your name
 * @Date: 2021-04-12 00:02:47
 * @LastEditTime: 2021-04-12 15:22:34
 * @LastEditors: cy
 * @Description: Mixin Guards
 * @FilePath: \less-demo\src\components\mixins\Index11.vue
-->
<template>
    <div>
        <div class="class1">当您想在表达式上进行匹配时，与简单的值或Arity相反，保护很有用。如果您熟悉函数式编程，则可能已经遇到过</div>
        <div class="class2">为了尽量保持CSS的声明性，Less选择了通过受保护的mixins而不是if/else语句来实现条件执行，这与@media查询功能规范类似。</div>
        <h1>Guard比较运算符</h1>
        <div class="class3">比较运营商在后卫可用的完整列表关键字true是唯一的真实值，使这两个mixins等效</div>
        <div class="class4">您还可以将参数彼此比较,或者与非参数进行比较，这里应该是与变量比较</div>
        <h1>Guard逻辑运算符</h1>
        <div class="class5">您可以将逻辑运算符与Guard一起使用。语法基于CSS媒体查询</div>
        <h1>类型检查功能</h1>
        <div class="class6">如果要基于值类型匹配混合，则可以使用以下is功能</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .mixin(@a) when (lightness(@a) >= 50%) {
        background-color: black;
    }
    .mixin(@a) when (lightness(@a) < 50%) {
        background-color: white;
    }
    .mixin(@a) {
        color: @a;
    }
    .class1 {
        .mixin(#ddd);
    }
    .class2 {
        .mixin(#555);
    }
    // 后卫比较运算符
    .truth(@a) when (@a) {
        color: red;
    }
    .truth(@a) when (@a = true) {
        color: blue;
    }
    .class3 {
        .truth(true);
    }

    @media: mobile;
    .mixin1(@a) when (@media = mobile) {
        color: red;
    }
    .mixin1(@a) when (@media = desktop) {
        color: blue;
    }
    .max(@a; @b) when (@a > @b) {
        width: @a;
    }
    .max(@a; @b) when (@a < @b) {
        width: @b;
    }
    .class4 {
        .mixin1(40);
        .max(40px; 50px);
    }
    // Guard逻辑运算符, and逻辑与运算符，“,”逻辑或， not逻辑非
    .mixin2(@a) when (isnumber(@a)) and (@a > 0) {
        color: red;
    }
    .mixin2(@a) when (@a > 10), (@a < -10) {
        color: yellow;
    }
    .mixin2(@b) when not(@b > 0) {
        color: blue;
    }
    .class5 {
        .mixin2(20)
    }
    // 类型检查功能
    .mixin3(@a; @b: 0) when (isnumber(@b)) {
        font-size: @b;
    }
    .mixin3(@a; @b: black) when (iscolor(@b)) {
        color: @b;
    }
    .class6 {
        .mixin3(0, 20px);
        .mixin3(0, #ff00ff)
    }
</style>