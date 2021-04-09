<!--
 * @Description: 属性作为变量
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 17:12:23
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 17:23:39
-->
<template>
    <div>
        <div class="note">您可以使用$prop语法轻松地将属性像变量一样对待。有时，这会使您的代码更轻一些</div>
        <div class="widget">属性作为变量
            <div class="inner">Less将选择当前/父范围内的最后一个属性作为“最终”值</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @cssPath: '../../assets/styl/';
    @selector: widget;
    @import '@{cssPath}/theme.less';
    @note: note;
    @size: font-size;
    @color: color;
    .@{note} {
        @{size}: @noteFontSize;
    }
    .@{selector} {
        color: red;
        border-color: yellow;
        background-@{color}: $border-color;
        .inner {
            color: blue;
            border-color: green;
            background-@{color}: $border-color;
        }
    }
</style>