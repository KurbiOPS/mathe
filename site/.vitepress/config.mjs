import { defineConfig } from 'vitepress'
import markdownItGraph  from './plugins/markdown-it-graph'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mathe",
  description: "Eine Seite um Mathe zu lernen",
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
      { text: 'Parabeln', link: '/parabeln' }
    ],

    sidebar: [
      {
        text: 'Mathe',
        items: [
          { text: 'Parabeln', link: '/parabeln' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
