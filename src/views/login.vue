<template>
    <button @click="handleLogin">登录</button>
</template>

<script setup>
import {login} from '@/api/sys/login'

function handleLogin(){
    var data = {
        username: "clnzbqll",
        password: "123456"
    }
    Promise.resolve(login(data))
    .then((res) =>{
        console.log(res)
        console.log("登入成功");
    })
}
</script>