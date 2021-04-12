<!--
 * @Author: your name
 * @Date: 2021-04-12 00:02:52
 * @LastEditTime: 2021-04-12 15:57:10
 * @LastEditors: cy
 * @Description: 混音混合
 * @FilePath: \less-demo\src\components\mixins\Index12.vue
-->
<template>
    <div>
        <div class="navbar">将变量值传给mixin，mixin根据变量值匹配某个mixin</div>
        <h1>变量调用</h1>
        <div class="box">可以给把mixin起一个别名，并调用这个别名,与root中使用的mixin不同，在把mixin赋值给一个变量的时候始终需要括号</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    #theme.dark.navbar {
        .colors(light) {
            primary: purple;
        }
        .colors(dark) {
            primary: black;
            secondary: grey;
        }
    }
    .navbar {
        @colors: #theme.dark.navbar.colors(dark);
        background: @colors[primary];
        border: 1px solid @colors[secondary];
    }
    // 变量调用
    #library() {
        .rules() {
            background: green;
        }
    }
    .box {
    //    #library.rules();
        @alias: #library.rules();
        @alias();
    }
</style>