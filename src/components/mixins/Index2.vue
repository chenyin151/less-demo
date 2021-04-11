<!--
 * @Description: 不带输出的混合
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 17:45:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-09 22:43:01
-->
<template>
    <div>
        <div class="class">如果要创建一个mixin，但又不希望该mixin出现在CSS输出中，请在mixin定义后加上括号</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @selector: class;
    .my-mixin { 
        color: red;
    }
    .my-other-mixin {
        background: white;
    }
    .@{selector} {
        .my-mixin();
        .my-other-mixin()
    }
</style>
