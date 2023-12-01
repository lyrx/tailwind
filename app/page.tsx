import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import EthereumContextProvider from './ethereum/EthereumContextProvider'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <EthereumContextProvider>
      {' '}
      <Main posts={posts} />{' '}
    </EthereumContextProvider>
  )
}
