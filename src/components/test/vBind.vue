<template>
    <div>
        <!-- v-bind用于绑定html属性值,可简写为: -->
        <button :disabled = "isDisabled">按钮1</button>
        <!-- v-bind可以将对象用于绑定html属性值 -->
        <button v-bind="attrs">按钮2</button>
    </div>
</template>

<script>
export default{
    data(){
        return {
            isDisabled: true,
            attrs:{
                id: "testId",
                class: "testClass"
            }
        }
    }
}
</script>