<!--
 * @Description: 默认变量
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 17:24:17
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 17:33:28
-->
<template>
    <div>
        <div class="color">有时我们会请求默认变量-一种仅在尚未设置变量的情况下才可以设置的功能。不需要此功能是因为您可以通过在后面放置定义轻松地覆盖变量</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @cssPath: '../../assets/styl/';
    @base-color: red;
    @selector: color;
    @import '@{cssPath}theme.less';
    .@{selector} {
        color: @base-color;
    }
</style>
