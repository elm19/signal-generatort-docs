import type { MetadataRoute } from 'next'

import { allBlogs, allDocs } from 'contentlayer/generated'
import { absoluteUrl } from '@/lib/utils'
import { locales } from '@/config/i18n'

type Sitemap = MetadataRoute.Sitemap

export default function sitemap(): Sitemap {
  const paths: Sitemap = [
    {
      url: absoluteUrl(`/`),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      // alternates: {
      //   languages: Object.fromEntries(
      //     locales.map((locale) => [locale, absoluteUrl(`/${locale}`)])
      //   ),
      // },
    },

    {
      url: absoluteUrl(`/docs`),
      lastModified: new Date(),

      // alternates: {
      //   languages: Object.fromEntries(
      //     locales.map((locale) => [locale, absoluteUrl(`/${locale}/docs`)])
      //   ),
      // },
    },
  ]

  const docPaths: Sitemap = allDocs.map((doc) => {
    const [, ...docSlugList] = doc.slugAsParams.split('/')
    const docSlug = docSlugList.join('/') || ''

    return {
      url: absoluteUrl(`/docs/${docSlug}`),
      lastModified: new Date(),
      changeFrequency: 'weekly',


      // alternates: {
      //   languages: Object.fromEntries(
      //     locales.map((locale) => [
      //       locale,
      //       absoluteUrl(`/${locale}/docs/${docSlug}`),
      //     ])
      //   ),
      // },
    }
  })

  const blogPaths: Sitemap = allBlogs.map((post) => {
    const [, ...postSlugList] = post.slugAsParams.split('/')
    const postSlug = postSlugList.join('/') || ''

    return {
      url: absoluteUrl(`/blog/${postSlug}`),
      lastModified: new Date(),
      changeFrequency: 'weekly',


      // alternates: {
      //   languages: Object.fromEntries(
      //     locales.map((locale) => [
      //       locale,
      //       absoluteUrl(`/${locale}/blog/${postSlug}`),
      //     ])
      //   ),
      // },
    }
  })

  const dashboardPaths: Sitemap = [
    {
      url: absoluteUrl(`/dashboard`),
      lastModified: new Date(),
      changeFrequency: 'weekly',

      // alternates: {
      //   languages: Object.fromEntries(
      //     locales.map((locale) => [locale, absoluteUrl(`/${locale}/dashboard`)])
      //   ),
      // },
    },
    {
      url: absoluteUrl(`/dashboard/gc`),
      lastModified: new Date(),
      changeFrequency: 'daily',

      // alternates: {
      //   languages: Object.fromEntries(
      //     locales.map((locale) => [
      //       locale,
      //       absoluteUrl(`/${locale}/dashboard/gc`),
      //     ])
      //   ),
      // },
    },
    {
      url: absoluteUrl(`/models`),
      changeFrequency: 'weekly',
      lastModified: new Date(),
      // alternates: {
      //   languages: Object.fromEntries(
      //     locales.map((locale) => [
      //       locale,
      //       absoluteUrl(`/${locale}/dashboard/gc`),
      //     ])
      //   ),
      // },
    },
  ]

  return [...paths, ...docPaths, ...blogPaths, ...dashboardPaths]
}


