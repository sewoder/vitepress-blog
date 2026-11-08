---
layout: home

hero:
  name: 我的博客
  text: 记录技术、思考与生活
  tagline: 用 Markdown 写作，交给 VitePress 构建，GitHub Pages 免费托管
  actions:
    - theme: brand
      text: 开始阅读
      link: /archive.html
    - theme: alt
      text: 第一篇文章
      link: /posts/hello-world.html

features:
  - title: 纯 Markdown 写作
    details: 一篇文章就是一个 .md 文件，放进 docs/posts/ 即自动出现在归档页和侧边栏。
  - title: 零服务器成本
    details: 构建产物是纯静态 HTML，推送到 main 分支后由 GitHub Actions 自动发布。
  - title: 随时用 Vue 扩展
    details: 需要交互时可以直接在 Markdown 中使用 Vue 组件，无需更换框架。
---
