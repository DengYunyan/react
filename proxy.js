// 配置代理

// 开发人员机器
var host = {
    dengyy: "192.168.2.158"
}

var target = host.dengyy;

proxy = {
    '/api': {
      target: target,
      pathRewrite: {'^/api' : ''}, // 路径重写
      changeOrigin: true,
      secure: false,
    }
}

module.exports = proxy;