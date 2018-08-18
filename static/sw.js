importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "snscard",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c81c3993cb2cd18695f2.js",
    "revision": "60ffe8bf10230260492864a898cc33be"
  },
  {
    "url": "/_nuxt/layouts/default.3c200211a08bad610e83.js",
    "revision": "59b0a1cafbce7b40f320566fcf2283cd"
  },
  {
    "url": "/_nuxt/manifest.98cf95a157f6b46c3752.js",
    "revision": "d736ac12def4db626301c9d8ed67c452"
  },
  {
    "url": "/_nuxt/pages/account.19766187f07b4b311d01.js",
    "revision": "cd0bdbbe69a643b22f6cd4dd57e507e0"
  },
  {
    "url": "/_nuxt/pages/index.b98805da47ef27a9d052.js",
    "revision": "da00aa8ca866cea775e4ce1ed157a912"
  },
  {
    "url": "/_nuxt/vendor.e038a3388b5853c3db6b.js",
    "revision": "76ab98d2bdd5f12d7f1fa73efa7da21c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

