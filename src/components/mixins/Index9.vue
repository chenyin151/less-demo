<!--
 * @Author: your name
 * @Date: 2021-04-09 23:22:45
 * @LastEditTime: 2021-04-11 23:57:25
 * @LastEditors: Please set LastEditors
 * @Description: 使用Mixins作为函数
 * @FilePath: \less-demo\src\components\mixins\Index9.vue
-->
<template>
    <div>
        <div class="div">从Less 3.5开始，您可以使用属性/变量访问器从评估的mixin规则中选择一个值。这可以允许您使用与功能相似的mixin。</div>
        <h1>Overriding mixin values</h1>
        <div class="box">如果您有多个匹配的mixin，则将评估并合并所有规则，并返回带有该标识符的最后一个匹配值。这类似于CSS中的层叠，它允许您“覆盖” mixin值</div>
        <h1>未命名的查询</h1>
        <div class="div1">如果您未在其中指定查找值[@lookup]，而是[]在mixin或规则集调用之后写入，则所有值将级联，最后一个声明的值将被选择。</div>
        <div class="box1">对于混入调用的规则集或变量，同样的级联行为也适用。</div>
        <h1>将mixin和变量解锁到调用者作用域中</h1>
        <div>混合中定义的变量和混合是可见的，可以在调用者的作用域中使用。仅有一个例外：如果调用者包含具有相同名称的变量（其中包括由另一个mixin调用定义的变量），则不会复制变量。仅存在于调用者本地范围内的变量受到保护。从父范围继承的变量将被覆盖。</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .average(@x, @y) {
        @result: ((@x + @y) / 2);
        @margin: ((@x + @y) / 3)
    }
    .div {
        padding: .average(16px, 50px)[@result];
        margin: .average(16px, 50px)[@margin]
    }
    // Overriding mixin values
    @import 'library';
    #library() {
        .mixin() {
            prop: bar
        }
    }
    .box {
        my-value: #library.mixin[prop];
    }
    // 未命名的查询
    .average1(@x, @y) {
        @result: ((@x + @y) / 2);
        @margin: ((@x + @y) / 3)
    }
    .div1 {
        padding: .average1(16px, 50px)[];
    }
    @dr: {
        value: foo;
    }
    .box1 {
        my-value: @dr[];
    }
    // 将mixin和变量解锁到调用者作用域中
    .mixin() {
        @width: 100%;
        @height:200px;
    }
    .caller {
        .mixin();
        width: @width;
        height: @height;
    }
</style>
