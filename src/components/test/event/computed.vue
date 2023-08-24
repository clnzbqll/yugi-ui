<template>
    <p>{{length}}</p>
</template>

<script setup>
import {ref, computed} from 'vue'

const words = ref(["潽", "瀊", "汏", "渧"])

// computed()用于属性计算
const length = computed(() =>{
    return words.value.length > 3
})
</script>