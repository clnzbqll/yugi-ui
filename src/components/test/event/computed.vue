<template>
    <p>{{length}}</p>
</template>

<script>
export default{
    data(){
        return {
            words: ["潽", "瀊", "汏", "渧"]
        }
    },
    // 计算属性放在computed, 调用方法放在methods
    computed:{
        length(){
            return this.words.length > 3
        }
    }
}
</script>