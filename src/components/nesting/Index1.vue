<!--
 * @Description: 多选&
 * @version: 
 * @Author: cy
 * @Date: 2021-04-12 15:59:56
 * @LastEditors: cy
 * @LastEditTime: 2021-04-12 17:12:10
-->
<template>
    <div>
        <a href="#">引用父选择器&</a>
        <div class="button-custom">引用父选择器名称</div>
        <div class="link">
            我是root
            <div class="link">&在选择器中可能会出现多次。这使得可以重复引用父选择器而无需重复其名称</div>
        </div>
        <div class="link">&在选择器中可能会出现多次。这使得可以重复引用父选择器而无需重复其名称</div>
        <div class="linkish">&在选择器中可能会出现多次。这使得可以重复引用父选择器而无需重复其名称</div>
        <div class="grand">&代表所有父选择器（而不仅仅是最接近的祖先）
            <div class="parent">
                <div class="grand">
                    <div class="parent">&代表所有父选择器（而不仅仅是最接近的祖先）</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    a {
        color: blue;
        &:hover {
            color: green;
        }
    }
    .button {
        &-ok {
            color: green;
        }
        &-cancel {
            color: grey;
        }
        &-custom {
            color: yellow;
        }
    }
    // multiple &
    .link {
        color: green;
        & + & {
            color: red;
        }
        & & {
            color: green;
        }
        // && {
        //     color: blue;
        // }
        &, &ish {
            color: cyan;
        }
    }
    // &代表所有父选择器
    .grand {
        .parent {
            & > & {
                color: red;
            }
        }
        & & {
            color: green;
        }
        // && {
        //     color: blue;
        // }
        &, &ish {
            color: cyan;
        }
    }
</style>