---
title: Markdown 常用写法
date: '2026-11-01'
description: 代码块、提示容器、表格与站内链接等常用语法速查
tags: [Markdown, 速查]
---

# Markdown 常用写法

VitePress 基于 markdown-it，除了标准 Markdown 语法，还内置了一些很实用的扩展。

## 代码块与高亮

```ts
const greet = (name: string): string => `Hello, ${name}!`
console.log(greet('VitePress'))
```

## 提示容器

::: tip 提示
用 `::: tip` 开头、`:::` 结尾可以插入提示块。
:::

::: warning 注意
`date` 建议用引号包起来，保证它是字符串，排序更稳定。
:::

::: danger 避免
不要把 `node_modules` 或 `.vitepress/dist` 提交到仓库，`.gitignore` 已处理。
:::

## 表格

| 命令 | 作用 |
| --- | --- |
| `npm run docs:dev` | 启动本地开发服务器 |
| `npm run docs:build` | 构建静态站点 |
| `npm run docs:preview` | 预览构建结果 |

## 站内链接

写 Markdown 链接时用绝对路径，VitePress 会自动补上部署的 `base`：

- [回到首页](/)
- [文章归档](/archive.html)
- [第一篇文章](/posts/hello-world.html)

## 直接使用 Vue

你有 Vue 基础，可以直接在 `.md` 里写 `<script setup>`、组件和指令，归档页就是这么实现的。
