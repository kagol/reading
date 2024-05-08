import { defineConfig } from 'vitepress'
import { sidebarJunior, sidebarSenior } from './sidebar'

export default defineConfig({
  title: 'Kagol',
  description: '',
  base: '/reading/',
  themeConfig: {
    nav: [
      { text: '初中', link: '/junior/overview', activeMatch: '/junior/' },
      { text: '高中', link: '/senior/overview', activeMatch: '/senior/' }
    ],
    sidebar: {
      '/junior/': sidebarJunior(),
      '/senior/': sidebarSenior()
    }
  }
})
