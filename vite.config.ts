import suidPlugin from '@suid/vite-plugin'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
    plugins: [suidPlugin(), solidPlugin()],
    server: {
        port: 3002,
    },
    preview: {
        port: 4176,
    },
    build: {
        target: 'esnext',
    },
})
