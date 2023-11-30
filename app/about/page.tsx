import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const defaultAuthor = allAuthors.find((p) => p.slug === 'default') as Authors
  const defaultContent = coreContent(defaultAuthor)
  const sparrowHawk = allAuthors.find((p) => p.slug === 'sparrowhawk') as Authors
  const sparrowHawkContent = coreContent(sparrowHawk)
  const h2Classes =
    'text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14'
  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h2 className={h2Classes}>New Author?</h2>
        <p>This is a blog for nerds, written by nerds.</p>
        <h2 className={h2Classes}>Active Authors</h2>
      </div>
      <AuthorLayout content={defaultContent}>
        <MDXLayoutRenderer code={defaultAuthor.body.code} />
      </AuthorLayout>
      <AuthorLayout content={sparrowHawkContent}>
        <MDXLayoutRenderer code={sparrowHawk.body.code} />
      </AuthorLayout>
    </>
  )
}
