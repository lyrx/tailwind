/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Private } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import Link from '@/components/Link'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface PrivateListLayoutProps {
  posts: CoreContent<Private>[]
  title: string
  initialDisplayPosts?: CoreContent<Private>[]
  pagination?: PaginationProps
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: PrivateListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div>
            <p>
              <Link
                href={`/ethereum`}
                className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
              >
                Ethereum-Testseite
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
