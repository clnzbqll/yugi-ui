<template>
    <div>
        <!-- vue指令的行为均在""中表达 -->
        <p v-for="res of result">{{res.word}}（{{res.spell}}）</p>
        <!-- v-for除了遍历数组外还可以遍历对象 -->
        <p v-for="(value, key, index) of user">{{key}}：{{value}}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            result: [
                { word: "潽", spell: "pū"},
                { word: "瀊", spell: "pán"}
            ],
            user: {
                id: 268,
                name: "clnzbqll",
                password: 123456
            }
        }
    }
}
</script>