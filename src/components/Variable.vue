<!--
 * @Description: less变量
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 14:41:54
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 15:42:08
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