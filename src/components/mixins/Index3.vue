<!--
 * @Author: your name
 * @Date: 2021-04-09 22:46:32
 * @LastEditTime: 2021-04-09 22:51:33
 * @LastEditors: Please set LastEditors
 * @Description: mixins中的选择器
 * @FilePath: \less-demo\src\components\mixins\Index3.vue
-->
<template>
    <div>
        <div class="button">Click</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @selector: button;
    .my-hover-mixin() {
        &:hover {
            border: 1px solid red;
        }
    }
    .@{selector} {
        .my-hover-mixin();
    }
</style>
