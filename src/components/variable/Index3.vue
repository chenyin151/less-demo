<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 16:37:49
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 16:45:53
-->
<template>
    <div>
        <div class="div1">您可以使用另一个变量来定义变量的名称</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @selector: div1;
    @primary: green;
    .@{selector} {
        @color: primary;
        color: @@color;
    }
</style>
