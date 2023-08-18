<template>
    <div>
        <!-- v-bind用于绑定html属性值,可简写为: -->
        <button :disabled = "isDisabled">按钮1</button>
        <!-- v-bind可以将对象用于绑定html属性值 -->
        <button v-bind="attrs">按钮2</button>
    </div>
</template>

<script>
// export default可以允许引入当前组件后使用其中定义的变量和方法
export default{
    // data()为函数，且返回一个数据对象
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