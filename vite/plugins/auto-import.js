/* Vite自动引入支持 */
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
    return autoImport({
        imports: [
            // presets
            'vue',
            'vue-router',
            // custom
            {
                'vuex': ['useStore'] // import {useStore} from 'vuex'
            }
        ],
        dts: false
    })
}
