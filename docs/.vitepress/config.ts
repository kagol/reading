import { defineConfig } from 'vitepress'
import { sidebarJunior, sidebarReading, sidebarSenior, sidebarWriting } from './sidebar'

export default defineConfig({
  title: 'Kagol',
  description: '',
  base: '/reading/',
  themeConfig: {
    nav: [
      { text: '初中', link: '/junior/index', activeMatch: '/junior/' },
      { text: '高中', link: '/senior/index', activeMatch: '/senior/' },
      // { text: '读书', link: '/reading/index', activeMatch: '/reading/' },
      // { text: '写作', link: '/writing/index', activeMatch: '/writing/' }
    ],
    sidebar: {
      '/junior/': sidebarJunior(),
      '/senior/': sidebarSenior(),
      '/reading/': sidebarReading(),
      '/writing/': sidebarWriting(),
    }
  }
})
