importScripts('/snscard/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "snscard",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/snscard/_nuxt/app.840429a318521f2d7cda.js",
    "revision": "511eba2fb3aa629baa5f169ee5640fdb"
  },
  {
    "url": "/snscard/_nuxt/layouts/default.3c200211a08bad610e83.js",
    "revision": "59b0a1cafbce7b40f320566fcf2283cd"
  },
  {
    "url": "/snscard/_nuxt/manifest.1ab68d87361dad445719.js",
    "revision": "4ff27e626207b4eacbec3c5dec980c79"
  },
  {
    "url": "/snscard/_nuxt/pages/account.0bfb4e628e1d1636c4fa.js",
    "revision": "a1deeace824b338e2f293090d6c50ac6"
  },
  {
    "url": "/snscard/_nuxt/pages/index.4d91e69929c256b3776b.js",
    "revision": "d3bd36e72c0b16b8b2f22dd7495af982"
  },
  {
    "url": "/snscard/_nuxt/vendor.e038a3388b5853c3db6b.js",
    "revision": "76ab98d2bdd5f12d7f1fa73efa7da21c"
  }
])


workboxSW.router.registerRoute(new RegExp('/snscard/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/snscard/.*'), workboxSW.strategies.networkFirst({}), 'GET')

