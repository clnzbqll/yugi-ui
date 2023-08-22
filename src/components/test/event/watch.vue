<template>
    <button @click="update">按钮</button>
    <p>{{msg}}</p>
</template>

<script>
export default{
    data(){
        return {
            msg: "汏"
        }
    },

    // 监听器
    watch:{
        // 监听器中的方法名需和data()定义的名相变量名相同
        msg(newValue, oldValue){
            console.log(newValue, oldValue);
        }
    },

    methods:{
        update(){
            this.msg = "瀊"
        }
    }
}
</script>