/**
* 参数处理
* @param {*} params  参数
*/
export function tansParams(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    var part = encodeURIComponent(propName) + "=";
    if (value !== null && typeof (value) !== "undefined") {
        result += part + encodeURIComponent(value) + "&";
      }
  }
  return result.slice(0, -1)
}