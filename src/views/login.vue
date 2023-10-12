<template>
    <div class="login">
        <div class="left"></div>
        <div class="right">
            <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" type="text" size="large"
                        placeholder="User name">
                        <template #prefix><svg-icon icon-class="username" class="input-icon" /></template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password" size="large" auto-complete="off"
                        placeholder="Password" @keyup.enter="handleLogin">
                        <template #prefix><svg-icon icon-class="pwd" class="input-icon" /></template>
                    </el-input>
                </el-form-item>
                <el-form-item style="width: 100%">
                    <el-button :loading="loading" size="large" type="primary" style="width: 100%"
                        @click.prevent="handleLogin">
                        <span v-if="!loading">Login</span>
                        <span v-else>Login...</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { login } from '@/api/sys/login'

const store = useStore();

const loginForm = ref({
    username: undefined,
    password: undefined,
});

const loginRules = {
    username: [{ required: true, trigger: "blur", message: "Please enter your account" }],
    password: [{ required: true, trigger: "blur", message: "Please enter your password" }],
};


// function handleLogin() {
//     var data = {
//         username: "clnzbqll",
//         password: "123456"
//     }
//     Promise.resolve(login(data))
//         .then((res) => {
//             console.log(res)
//             console.log("登入成功");
//         })
// }

function handleLogin() {
    proxy.$refs.loginRef.validate((valid) => {
        // TODO 登入接口联调/2023/10/12
        // if (valid) {
        //     loading.value = true;
        //     store.dispatch("Login", loginForm.value)
        //         .then(() => {
        //             let redirectPath = (router.currentRoute.value.redirectedFrom?.href ||
        //                 "/dashboard");
        //             const redirect = decodeURIComponent(redirectPath);
        //             router.replace(redirect);
        //         })
        //         .catch(() => {
        //             loading.value = false;
        //         });
        // }
    });
}
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    .left {
        height: 100%;
        flex: 1;
        background: #EEF2F6 url(@/assets/images/login-bg.jpg) no-repeat center / cover;
    }

    .right {
        display: flex;
        width: 430px;
        height: 100%;
        align-items: center;
        position: relative;
    }
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 0px;
  }
}
</style>