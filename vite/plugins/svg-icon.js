/* Vite-SVG插件 */
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

// path是node的默认库，不需要安装
import path from 'path'

export default function createSvgIcon(isBuild) {
    return createSvgIconsPlugin({
		iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: isBuild
    })
}
