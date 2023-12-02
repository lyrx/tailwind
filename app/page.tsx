import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import ContextProvider from './context/ContextProvider'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <ContextProvider>
      {' '}
      <Main posts={posts} />{' '}
    </ContextProvider>
  )
}
