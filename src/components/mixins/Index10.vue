<!--
 * @Author: your name
 * @Date: 2021-04-12 00:02:38
 * @LastEditTime: 2021-04-12 00:18:30
 * @LastEditors: Please set LastEditors
 * @Description: 递归混合
 * @FilePath: \less-demo\src\components\mixins\Index10.vue
-->
<template>
    <div>
        <div class="div">在Less中，mixin可以递归。当与Guard表达式和模式匹配结合使用时，此类递归mixin可以用于创建各种迭代/循环结构。</div>
        <h1>使用递归循环生成CSS网格类的一般示例</h1>
        <div class="column-1">1</div>
        <div class="column-2">2</div>
        <div class="column-3">3</div>
        <div class="column-4">4</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .loop(@counter) when(@counter > 0) {
        .loop((@counter - 1));
        width: (10px * @counter);
    }
    .div {
        .loop(5);
    }
    // 使用递归循环生成CSS网格类的一般示例
    .generate-columns(4);
    .generate-columns(@n, @i: 1) when (@i =< @n) {
        .column-@{i} {
            width: (@i * 100% / @n);
        }
        .generate-columns(@n, (@i + 1));
    }
</style>
