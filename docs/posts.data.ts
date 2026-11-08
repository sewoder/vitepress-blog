import { createContentLoader } from 'vitepress'

function formatDate(value: unknown): string {
  const time = value ? new Date(value as string).getTime() : NaN
  return Number.isNaN(time) ? '' : new Date(time).toISOString().slice(0, 10)
}

// 构建时扫描 docs/posts/*.md，把 frontmatter 整理成归档页需要的数据。
// 新增文章无需改动任何配置或代码。
export default createContentLoader('posts/*.md', {
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title ?? '未命名文章',
        url,
        date: formatDate(frontmatter.date),
        description: frontmatter.description ?? '',
        tags: frontmatter.tags ?? []
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
  }
})
