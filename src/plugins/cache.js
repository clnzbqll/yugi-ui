// sessionStorage（会话存储）是客户端本地保存数据的方法，存储的数据在页面会话结束时会被清除
const sessionCache = {
  set(key, value) {
    if (!sessionStorage) {
      return
    }
    if (key != null && value != null) {
      sessionStorage.setItem(key, value)
    }
  },
  get(key) {
    if (!sessionStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return sessionStorage.getItem(key)
  },
  setJSON (key, jsonValue) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue))
    }
  },
  getJSON (key) {
    const value = this.get(key)
    if (value != null) {
      return JSON.parse(value)
    }
  }
}

export default {
  /**
   * 会话级缓存
   */
  session: sessionCache
}
