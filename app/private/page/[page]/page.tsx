import PrivateListLayout from '@/layouts/PrivateListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allPrivates } from 'contentlayer/generated'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allPrivates.length / POSTS_PER_PAGE)
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
}

export default function Page({ params }: { params: { page: string } }) {
  const posts = allCoreContent(sortPosts(allPrivates))
  const pageNumber = parseInt(params.page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <PrivateListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Privates"
    />
  )
}
