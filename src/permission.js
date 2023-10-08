import router from './router'

import versionTood from '@/utils/versionUpdate'
import { getToken } from '@/utils/auth'


// NProgress进度条组件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false });

const whiteList = ['/login', '/auth-redirect', '/bind', '/register'];

router.beforeEach((to, from, next) => {
  versionTood.isNewVersion();
  NProgress.start()

  console.log(to.path);

  if (getToken()) {
    // TODO 已认证逻辑
    console.log("已认证");
  } else {
    console.log("未认证");
    if (whiteList.indexOf(to.path) !== -1) {
      console.log("执行2");
      // 在免登录白名单，直接进入
      next()
    } else {
      // 否则全部重定向到登录页
      console.log("执行1");
      next(`/login?redirect=${to.fullPath}`) 
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})