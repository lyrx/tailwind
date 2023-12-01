import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Authors' })

export default function Page() {
  const defaultAuthor = allAuthors.find((p) => p.slug === 'default') as Authors
  const defaultContent = coreContent(defaultAuthor)
  const sparrowHawk = allAuthors.find((p) => p.slug === 'sparrowhawk') as Authors
  const sparrowHawkContent = coreContent(sparrowHawk)

  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <AuthorLayout content={defaultContent}>
        <MDXLayoutRenderer code={defaultAuthor.body.code} />
      </AuthorLayout>
    </>
  )
}
