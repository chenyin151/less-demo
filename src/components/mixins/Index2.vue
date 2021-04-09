<!--
 * @Description: 不带输出的混合
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 17:45:19
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 17:48:45
-->
<template>
    <div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .my-mixin { 
        color: black;
    }
    .my-other-mixin {
        background: white;
    }
    .class {
        .my-mixin {}
        .my-other-mixin {}
    }
</style>
