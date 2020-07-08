// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import 'typeface-metropolis'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Low-cost and efficient commercial HVAC component coating.`,
  })

  head.meta.push({
    name: 'keywords',
    content: 'HVAC,Coating,Commercial,Charleston,South Carolina',
  })

  head.meta.push({
    name: 'copyright',
    content: 'BlygoldSC',
  })

  head.meta.push({
    name: 'theme-color',
    content: '#ffba00',
  })

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: `https://www.blygoldsc.com/ogimage.png`,
  })

  head.meta.push({
    key: 'og:email',
    name: 'og:email',
    content: `blygoldsc@gmail.com`,
  })

  head.meta.push({
    key: 'og:site_name',
    name: 'og:site_name',
    content: `BlygoldSC`,
  })
}
