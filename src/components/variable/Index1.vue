<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 15:53:24
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 15:53:35
-->
<template>
    <div>
        <div class="link">less变量修改颜色</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @link-color: #428bca;
    @link-color-hover: darken(@link-color, 50%);
    .link { color: @link-color; 
        &:hover { color: @link-color-hover; }
    }
</style>