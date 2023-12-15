import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
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
        <p>
          {' '}
          Ethereum Mainnet Payments go to:
          <Image
            src={'/static/images/ethereum2.png'}
            alt={'QR-Code of Ethereum Address: '}
            width={200}
            height={200}
          />
          <span>0x8C6aBEf5623E25dd4a46a0534CF032000F0c81ED</span>
        </p>
      </AuthorLayout>
    </>
  )
}
