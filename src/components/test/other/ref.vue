<template>
    <!-- ref可以是vue获得组件实例，并可以使用组件所支持的所有js方法 -->
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