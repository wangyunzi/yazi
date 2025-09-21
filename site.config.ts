import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '464c3982717a4845ab8abe1149376b0a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '云子‘s blog',
  domain: 'yazi.wangyunzi.com',
  author: 'wangyunzi',

  // open graph metadata (optional)
  description: '个人日常小记、絮絮叨，偶尔深度上网。',

  // social usernames (optional)
  twitter: 'YunziWang',
  github: 'wangyunzi',
  // linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '72a5c9288b614647aae97a5948c1369f'
    },
    {
      title: 'Contact',
      pageId: '30e53188162c42328846fccff87c71d0'
    }
  ]
})
