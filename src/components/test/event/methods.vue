<template>
    <div>
        <!-- v-on指令用户监听DOM事件，可简写为@ -->
        <!-- v-on传参不用指明参数类型，用$event可以传递参数本身 -->
        <button @click="login(msg, $event)">登录</button>
    </div>
</template>


<script setup>
import { ref } from 'vue';

// ref()是vue3提供的api，返回一个响应式的对象数据
const msg = ref("登录成功")
const start = ref("开始登录")

// setup是vue3提供的语法糖，代替vue2的created使用
console.log(start.value);

const login = (msg, e) => {
    console.log(msg)
    console.log(e)
}
</script>