import { login } from '@/api/login'
import { getToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    id: undefined,
    name: '',
    avatar: '',
    agentLogo: undefined,
    lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
    payer: undefined,
    costPayType: false,
    roleType: undefined,
    roles: [],
    permissions: [],
    layout:{
      isMobile: false
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_LOGO: (state, logo) => {
      state.agentLogo = logo
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_COSTPAYTYPE: (state, type) => {
      state.costPayType = type
    },
    SET_ROLETYPE: (state, type) => {
      state.roleType = type
    },
    SET_PAYER: (state, payer) => {
      state.payer = payer
    }
  },

  actions: {
    // TODO 登入接口联调/2023/10/12
    // 登录
    // Login({ commit }, userInfo) {
    //   const username = userInfo.username.trim()
    //   const password = userInfo.password
    //   const code = userInfo.code
    //   const uuid = userInfo.uuid
    //   return new Promise((resolve, reject) => {jiekou
    //     login(username, password, code, uuid).then(res => {
    //       setToken(res.data.token)
    //       commit('SET_TOKEN', res.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default user
