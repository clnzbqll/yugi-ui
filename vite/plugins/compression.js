/* Vite打包插件 */
import compression from 'vite-plugin-compression'

export default function createCompression(env) {
    // const VITE_BUILD_COMPRESS = env
    const { VITE_BUILD_COMPRESS } = env
    const compressList = VITE_BUILD_COMPRESS.split(',')
    const plugin = []
    // 使用gzip压缩
    if (compressList.includes('gzip')) {
        plugin.push(
            compression({
                ext: '.gz',
                deleteOriginFile: false
            })
        )
    }
    // 使用brotli压缩
    if (compressList.includes('brotli')) {
        plugin.push(
            compression({
                ext: '.br',
                algorithm: 'brotliCompress',
                deleteOriginFile: false
            })
        )
    }
    return plugin
}
