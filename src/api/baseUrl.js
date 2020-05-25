/**
 * 根据打包环境不同，链接不同的地址
 * prod生产环境  test测试环境
*/

let baseURL = ''
// console.log(process.env)
if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  baseURL = 'http://bigdata.colourdata.com.cn:81/Michelin-Engineer'
}
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://dht.colourdata.com.cn/Michelin-Engineer'
}

export default baseURL
