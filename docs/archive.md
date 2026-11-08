---
title: 文章归档
description: 全部文章列表
---

<script setup>
import { useData } from 'vitepress'
import { data as posts } from './posts.data.ts'

const { site } = useData()
// createContentLoader 返回的 url 不包含 base，部署到 /<仓库名>/ 时手动补齐
const href = (url) => site.value.base + url.replace(/^\//, '')
</script>

# 文章归档

共 {{ posts.length }} 篇文章，按发布时间从新到旧排列。

<div class="post-list">
<a v-for="post in posts" :key="post.url" class="post-item" :href="href(post.url)">
<span class="post-meta">{{ post.date }}<span v-for="tag in post.tags" :key="tag" class="post-tag"> #{{ tag }}</span></span>
<h2 class="post-title">{{ post.title }}</h2>
<p class="post-desc">{{ post.description }}</p>
</a>
</div>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}
.post-item {
  display: block;
  padding: 16px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.2s, background-color 0.2s;
}
.post-item:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}
.post-meta {
  font-size: 13px;
  color: var(--vp-c-text-3);
}
.post-title {
  margin: 6px 0 8px;
  padding: 0;
  border: 0;
  font-size: 20px;
}
.post-desc {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>
