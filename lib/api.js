import matter from 'gray-matter'

const getAllWorks = async () =>
  new Promise(resolve => {
    const getPages = (indexCtx, imagesCtx) => {
      const keys = indexCtx.keys()
      const values = keys.map(indexCtx)
      const data = keys.map((key, index) => {
        const slug = key.match(/\/(.+)\/index/, '')[1]
        const value = values[index]
        const document = matter(value.default)
        const images = matter(imagesCtx.keys().map(imagesCtx)[index].default)

        return {
          document,
          slug,
          images
        }
      })

      return JSON.stringify(data)
    }

    const pages = getPages(
      require.context('../works', true, /index.md$/),
      require.context('../works', true, /images.md$/)
    )

    resolve(pages)
  })

export { getAllWorks }
