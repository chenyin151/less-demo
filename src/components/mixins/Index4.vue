<!--
 * @Author: your name
 * @Date: 2021-04-09 22:52:38
 * @LastEditTime: 2021-04-09 23:09:55
 * @LastEditors: Please set LastEditors
 * @Description: 命名空间
 * @FilePath: \less-demo\src\components\mixins\Index4.vue
-->
<template>
    <div>
        <div class="c">如果要在更复杂的选择器中混合属性，则可以堆叠多个ID或类。</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    #outer {
        .inner {
            color: red;
        }
    }
    .c {
        // do all same thing
        // #outer.inner();
        // #outer .inner();
        #outer > .inner();
    }
</style>
