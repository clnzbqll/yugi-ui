<template>
    <div>
        <!-- v-if可以配合v-else使用 -->
        <button v-if="type==='a'">按钮1</button>
        <button v-else-if="type==='b'">按钮2</button>
        <button v-else>按钮3</button>
        <!-- v-show单独使用 -->
        <button v-show="isShow">按钮4</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            type: "b",
            isShow: true
        }
    }
}
</script>