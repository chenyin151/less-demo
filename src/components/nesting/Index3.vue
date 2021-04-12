<!--
 * @Description: 组合explosion父选择器
 * @version: 
 * @Author: cy
 * @Date: 2021-04-12 16:00:06
 * @LastEditors: cy
 * @LastEditTime: 2021-04-12 17:30:29
-->
<template>
    <div>
        <div class="p"></div>
        <div class="a">逗号分隔的选择器的两两相对的所有排列:p,a,ul,li,p+p,p+a,p+ul,p+li,a+p,a+a,a+ul,a+li,...li+li</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .p, .a, .ul, .li {
        border-top: 2px dotted #366;
        & + & {
            border-top: 0;
        }
    }
</style>
