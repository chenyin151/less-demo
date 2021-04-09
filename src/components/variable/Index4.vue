<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 16:46:17
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 17:01:25
-->
<template>
    <div>
        <div class="note">两次定义变量时，使用变量的最后定义，从当前作用域向上搜索。这类似于css本身，其中css定义中的最后一个属性用于确定值。</div>
        <div class="lazy-eval">变量在使用之前不必声明</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

    @cssPath:'../../assets/styl/theme.less';
    @import '@{cssPath}';    
    @selector: eval;
    .lazy-@{selector} {
        width: @var;
    }
    @var: @a;
    @a: 9%;
    // .note {
    //     font-size: @fontSize;
    // }
    .note {
        font-size: @noteFontSize;
    }
</style>
