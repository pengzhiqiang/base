module.exports = {
  server: {
    "port": 3001
  },
  cacheConfig: {
    "viewCache": false
  },
  manifest: {
    "css": "public/rev/manifest-css.json",
    "js": "public/rev/manifest-js.json",
    "cssDir": "/css",
    "jsDir": "/js"
  },
  host: {
    "portal_dev": "http://tp-agent.maxor.cn",
    "portal_pro": "http://tp-appapi.opay8.com"
  }

};