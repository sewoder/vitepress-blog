import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const postsDir = path.resolve(here, '../posts')

// 扫描 docs/posts 下的 .md，按 frontmatter 的 date 倒序生成侧边栏。
// 以后写新文章只需往 docs/posts/ 放一个 .md 文件，侧边栏和归档页都会自动更新。
const articleLinks = fs.existsSync(postsDir)
  ? fs
      .readdirSync(postsDir)
      .filter((name) => name.endsWith('.md'))
      .map((name) => {
        const raw = fs.readFileSync(path.join(postsDir, name), 'utf-8')
        const read = (key: string) =>
          raw
            .match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]
            ?.trim()
            .replace(/^['"]|['"]$/g, '') ?? ''
        return {
          text: read('title') || path.basename(name, '.md'),
          date: read('date'),
          link: `/posts/${path.basename(name, '.md')}.html`
        }
      })
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(({ text, link }) => ({ text, link }))
  : []

// 本地开发用 '/'；GitHub Actions 构建时会按仓库名注入 VITEPRESS_BASE。
// 部署在 https://<用户名>.github.io/<仓库名>/ 时，base 必须是 '/<仓库名>/'。
const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: '我的博客',
  description: '记录技术、思考与生活',
  cleanUrls: false,
  // lastUpdated: true, // 想显示"最后更新于"时打开；部署工作流已设置 fetch-depth: 0
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/archive.html' }
    ],
    sidebar: [
      { text: '全部文章', link: '/archive.html' },
      { text: '文章列表', items: articleLinks }
    ],
    search: { provider: 'local' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    // socialLinks: [{ icon: 'github', link: 'https://github.com/<用户名>/<仓库名>' }],
    // editLink: { pattern: 'https://github.com/<用户名>/<仓库名>/edit/main/docs/:path', text: '在 GitHub 上编辑此页' },
    footer: {
      message: '基于 VitePress 构建',
      copyright: `© ${new Date().getFullYear()} 我的博客`
    }
  }
})
