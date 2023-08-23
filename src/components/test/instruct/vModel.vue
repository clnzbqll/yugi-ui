<template>
    <!-- v-model用于form，input，textarea和select元素上创建双向数据绑定 -->
    <!-- v-model.trim用于控制前后空白字符 -->
    <input v-model.trim="msg">
    <p>{{msg}}</p>
</template>

<script>
export default{
    data(){
        return{
            msg: "渧"
        }
    }
}
</script>