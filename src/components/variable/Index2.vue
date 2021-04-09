<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 15:55:32
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 16:37:17
-->
<template>
    <div>
        <div class="banner">可变差值</div>
        <div class="img">差值图片</div>
        <div class="font">import变量声明</div>
        <div class="vari-class">class名称通过变量拼接</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @theme:'../../assets/styl/';
    @import '@{theme}/theme.less';
    @my-selector: banner;
    @font: font;
    @selector: img;
    @color: #444;
    @imgWidth: 300px;
    @imgHeight: 300px;
    @images: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201311%2F23%2F215012oxqaawegw2v877i4.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620547567&t=35eb02185902b1853dda427d0a6442af';
    .@{my-selector} {
        font-weight: bold;
        line-height: 40px;
        margin: 0 auto;
    }
    .@{selector} {
        color: @color;
        width: @imgWidth;
        height: @imgHeight;
        background: url("@{images}")
    }
    .@{font} {
        color: @fontColor;
    }
    @property: color;
    .vari-class { background-@{property}: @fontColor; }
</style>
