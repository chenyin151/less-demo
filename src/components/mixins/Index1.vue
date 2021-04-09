<!--
 * @Description: 带输出的混合
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 17:36:37
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 17:45:27
-->
<template>
    <div>
        <div class="mixin-class">混合使用类选择器</div>
        <div class="mixin-class1">混合使用类选择器</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @selector: mixin-class;
    .a, #b {
        color: red;
    }
    .@{selector} {
        .a();
    }
    .@{selector}1 {
        #b();
    }
</style>