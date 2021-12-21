/**
 * 配置跨域 proxy
 */
module.exports = {
    proxy: {
        "/api": {
            target: "https://pvp.qq.com/",
            changeOrigin: true,
            rewrite:(url) => url.replace(/^\/api/,'')
        },
    }
}