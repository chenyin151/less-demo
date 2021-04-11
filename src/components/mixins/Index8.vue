<!--
 * @Author: your name
 * @Date: 2021-04-09 23:22:39
 * @LastEditTime: 2021-04-10 00:57:40
 * @LastEditors: Please set LastEditors
 * @Description: 模式匹配
 * @FilePath: \less-demo\src\components\mixins\Index8.vue
-->
<template>
    <div>
        <div class="class">有时，您可能想根据传递给它的参数来更改混合的行为</div>
        <div class="class2">现在，如果.mixin使用单个参数调用，则将获取第一个定义的输出，但是如果使用两个参数调用，则将获取第二个定义，即@a淡出为@b。</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @switch: dark;
    .mixin(dark; @color) {
        color: darken(@color, 10%);
    }
    .mixin(light; @color) {
        color: lighten(@color, 10%);
    }
    .mixin(@_; @color) {
        display: block;
    }
    .class {
        .mixin(@switch; #888);
    }
    .mixin1(@a) {
        color: @a;
    }
    .mixin1(@a, @b) {
        color: @a;
        border: 1px solid @b;
    }
    .class2 {
        .mixin1(red, blue)
    }
</style>