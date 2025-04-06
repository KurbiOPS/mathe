import { defineConfig } from 'vitepress'
import markdownItGraph  from './plugins/markdown-it-graph'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mathe",
  description: "Eine Seite um Mathe zu lernen",
  lastUpdated: true,
  base: "/mathe/",
  markdown: {
    math: true,
    config: (md) => {
      md.use(markdownItGraph);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Parabeln und Gerade', link: '/Funktionen' }
    ],

    sidebar: [
      {
        text: 'Mathe',
        items: [
          { text: 'Parabeln und Geraden', link: '/funktionen' },
          { text: 'Binomische Formeln', link: '/binomischeformeln' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
