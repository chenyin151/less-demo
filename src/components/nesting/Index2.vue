<!--
 * @Description: 更改选择器顺序
 * @version: 
 * @Author: cy
 * @Date: 2021-04-12 16:00:02
 * @LastEditors: cy
 * @LastEditTime: 2021-04-12 17:22:10
-->
<template>
    <div>
        <div class="header">
            <div class="menu"></div>
        </div>
        <div class="no-borderradius">2
            <div class="header">
                <div class="menu">更改了选择器顺序</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .bordered(@width; @height) when (isnumber(@width)) and (isnumber(@height)) {
        display: inline-block;
        border: 1px solid red;
        width: @width;
        height: @height;
    }
    .header {
        .menu {
            .bordered(60px; 20px);
            border-radius: 5px;
            .no-borderradius & {
                color: green;
            }
        }
    }
</style>