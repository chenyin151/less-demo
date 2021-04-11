<!--
 * @Author: your name
 * @Date: 2021-04-09 22:54:04
 * @LastEditTime: 2021-04-09 23:21:13
 * @LastEditors: Please set LastEditors
 * @Description: !important关键字
 * @FilePath: \less-demo\src\components\mixins\Index6.vue
-->
<template>
    <div>
        <div class="important">!important在mixin调用之后使用关键字将其继承的所有属性标记为!important</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .foo (@bg: #f5f5f5, @color:#900) {
        background: @bg;
        color: @color;
    }
    .unimportant {
        .foo();
    }
    .important {
        .foo() !important;
    }
</style>
