// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'HAMRS Documentation',
    description: 'Every Day is Field Day',
    socials: {
      // twitter: 'nuxt_js',
      // github: 'nuxt-themes/docus',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: {
        light: 'logo.svg',
        dark: 'logo.svg',
      },
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
