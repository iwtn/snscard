importScripts('/snscard/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "snscard",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/snscard/_nuxt/app.b843ace77a92b4f759cb.js",
    "revision": "8fae7e9c43224abcd3e59ef1ae1dd743"
  },
  {
    "url": "/snscard/_nuxt/layouts/default.3c200211a08bad610e83.js",
    "revision": "59b0a1cafbce7b40f320566fcf2283cd"
  },
  {
    "url": "/snscard/_nuxt/manifest.df6793fe8e3fee8b4958.js",
    "revision": "e63e72bbcdba0ebf1889cce2e580ebed"
  },
  {
    "url": "/snscard/_nuxt/pages/account.0bfb4e628e1d1636c4fa.js",
    "revision": "a1deeace824b338e2f293090d6c50ac6"
  },
  {
    "url": "/snscard/_nuxt/pages/index.5c111e6ef863616607d6.js",
    "revision": "b4b4b2db43f113c28f0a4e99fbfde663"
  },
  {
    "url": "/snscard/_nuxt/vendor.e038a3388b5853c3db6b.js",
    "revision": "76ab98d2bdd5f12d7f1fa73efa7da21c"
  }
])


workboxSW.router.registerRoute(new RegExp('/snscard/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/snscard/.*'), workboxSW.strategies.networkFirst({}), 'GET')

