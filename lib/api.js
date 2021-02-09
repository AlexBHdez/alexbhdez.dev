import matter from 'gray-matter'

const getAllWorks = async () =>
  new Promise((resolve) => {
    const getPages = (indexCtx) => {
      const keys = indexCtx.keys()
      const values = keys.map(indexCtx)
      const data = keys.map((key, index) => {
        const slug = key.match(/\/(.+)\/index/, '')[1]
        const value = values[index]
        const document = matter(value.default)

        return {
          document,
          slug
        }
      })

      return JSON.stringify(data)
    }

    const pages = getPages(require.context('../works', true, /index.md$/))

    resolve(pages)
  })

export { getAllWorks }
