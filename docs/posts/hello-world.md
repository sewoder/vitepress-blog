---
title: 你好，VitePress
date: '2026-11-08'
description: 博客的第一篇文章，说明新增文章的约定与本地预览方式
tags: [VitePress, 随笔]
---

# 你好，VitePress

这是第一篇示例文章。整个博客的正文都是普通的 Markdown 文件，放在 `docs/posts/` 目录下。

## 新增一篇文章

1. 在 `docs/posts/` 下新建 `my-post.md`，文件名就是访问路径，例如 `/posts/my-post.html`。
2. 在文件顶部写好 frontmatter：

   ```yaml
   ---
   title: 文章标题
   date: '2026-11-08'
   description: 一句话摘要，会显示在归档页
   tags: [标签A, 标签B]
   ---
   ```

3. 写正文，保存即可。归档页和左侧边栏会自动按 `date` 倒序更新，**不需要改任何配置**。

## 本地预览

```bash
npm run docs:dev      # 开发服务器 http://localhost:5173
npm run docs:build    # 生成静态文件到 docs/.vitepress/dist
npm run docs:preview  # 本地预览构建结果 http://localhost:4173
```

## 发布

把改动推送到 `main` 分支，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages。
