<template>
    <button @click="handle">按钮</button>
    <p>{{msg}}</p>
</template>

<script setup>
import { ref, watch } from 'vue';

const msg = ref("汏")

    
const handle = () =>{
    msg.value = "瀊"
 };

// watch()用于监听器
 watch(msg, (newValue) =>{
    console.log(newValue);
 })
</script>