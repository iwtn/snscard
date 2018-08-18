importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "snscard",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.62108ad6a855142b03ea.js",
    "revision": "b0f1a728e07305c6153655f119054e7a"
  },
  {
    "url": "/_nuxt/layouts/default.3c200211a08bad610e83.js",
    "revision": "59b0a1cafbce7b40f320566fcf2283cd"
  },
  {
    "url": "/_nuxt/manifest.c85d66de6cd55bd34078.js",
    "revision": "e7aa77828a34dc6cf34cd8d96647db83"
  },
  {
    "url": "/_nuxt/pages/account.41a15ef8941dac57dc7a.js",
    "revision": "a76bad181f5498ef1ecbc668cd54cf12"
  },
  {
    "url": "/_nuxt/pages/index.dee7d694e5be271313e4.js",
    "revision": "a5d0d7e6782b51824448cb522be1afbe"
  },
  {
    "url": "/_nuxt/vendor.d3668abf8668933cad18.js",
    "revision": "f67c9eb8b7ad910cfcb496b210b4ddfb"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

