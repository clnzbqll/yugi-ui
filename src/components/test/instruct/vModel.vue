<template>
    <!-- v-model用于form，input，textarea和select元素上创建双向数据绑定 -->
    <input v-model="msg">
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