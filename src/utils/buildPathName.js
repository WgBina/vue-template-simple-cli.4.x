/**
 * 根据打包命令不同，生成不同的包名
 * prod生产环境  test测试环境
*/

let build_path = ''
let sub_build_path = ''
// console.log(process.env)

if (process.env.env_config === 'prod') {
  build_path = '../Michelinengineer/index.html'
  sub_build_path = '../Michelinengineer'
}
if (process.env.env_config === 'test') {
  build_path = '../MICHELIN/index.html'
  sub_build_path = '../MICHELIN'
}

module.exports = {
  build_path: build_path,
  sub_build_path: sub_build_path
}
