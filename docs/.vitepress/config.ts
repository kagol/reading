import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Kagol',
  description: '',
  base: '/reading/',
  themeConfig: {
    nav: [],
    sidebar: {
      '/': [
        {
          text: '散文',
          items: [
            { text: '春', link: '/spring' }
          ]
        }
      ]
    },
    footer: {
      message: 'Made with ❤ by',
      copyright: 'Kagol 和前端开源星球🌍'
    }
  }
})
