<template>
    <div>
        <button @click="testEach">按钮</button>
        <p v-for="word of words">{{word}}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            words: ["潽", "瀊", "汏", "渧"]
        }
    },

    // methods使用data()定义的变量必须使用this
    methods:{
        // 增删
        testAdd(){
            // 添加元素（尾）
            this.words.push("溚");
            // 删除元素（尾）
            this.words.pop();
            // 添加元素（头）
            this.words.unshift("沰");
            // 删除元素（头）
            this.words.shift();         
        },

        // 排序
        testSort(){
            // 逆排数组
            this.words.reverse();
            // 元素排序
            this.words.sort();
        },

        // 合取
        testCombine(){
            // 合并数组
            this.words = this.words.concat(["濎","渳"]); 
            // 截取数组
            this.words = this.words.slice(0, 2);
            // 合并字符串
            var str1 = this.words.join(",");
            // 合并字符串
            var str2 = this.words.toString();
        },

        // 遍历
        testEach(){
            // forEach（影响原数组）
            this.words.forEach(function (value){
                console.log(value);
            });
            // map（返回新数组）
            var result = this.words.map(function (value){
                return value + "test";
            })
            // 索引
            var index = this.words.indexOf("潽");
        },

        // 过滤
        testFilter(){
            // 筛选元素
            var result1 = this.words.filter(function (value){
                return value == "潽";
            })
            // 逻辑判断（与）
            var result2 = this.words.every(function (value){
                return value == "潽";
            })
            // 逻辑判断（与）
            var result3 = this.words.some(function (value){
                return value == "潽";
            })
        }
    }
}
</script>