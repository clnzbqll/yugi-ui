<template>
    <div>
        <!-- v-on指令用户监听DOM事件，可简写为@ -->
        <!-- v-on传参不用指明参数类型，用$event可以传递参数本身 -->
        <button @click="login(msg, $event)">登录</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            msg: "登录成功"
        }
    },
    methods:{
        login(msg, e){
            console.log(msg)
            console.log(e)
        }
    }
}
</script>