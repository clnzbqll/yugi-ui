/* 提供自动引入依赖支持 */
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
    return autoImport({
        imports: [
            // presets
            'vue',
            'vue-router',
            // custom
            {
                // import {useStore} from 'vuex'
                'vuex': ['useStore']
            }
        ],
        dts: false
    })
}
