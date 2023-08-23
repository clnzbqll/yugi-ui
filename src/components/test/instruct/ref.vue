<template>
    <button @click="handle">按钮</button>
    <div ref="title">{{msg}}</div>
</template>

<script>
export default{
    data(){
        return{
            msg: "渧"
        }
    },
    methods:{
        handle(){
            this.$refs.title.innerHTML = "沰"
        }
    }
}
</script>