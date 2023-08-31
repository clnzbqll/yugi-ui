<template>
    <button @click="handleLogin">登录</button>
</template>

<script setup>
import {login} from '@/api/sys/login'

function handleLogin(){
    login()
}
</script>