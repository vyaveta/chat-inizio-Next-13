if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),u={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c54b883f6d7b654a2af6c95dd73c5ff7"},{url:"/_next/static/chunks/0895380a-2df1ae51c1a5c51d.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/115-59c9890f2b882e9d.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/139-49164d9488e5d2e3.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/1418c200-1f962edb77b34a2a.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/2443530c-c52e11d9d3b82fcf.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/393-7cb8730c8dc403a9.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/477-7459769f9bf11978.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/4a89e91e-635429be424b7411.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/4b4758af-c476f27842d61ae6.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/51adac7d-7135dde626207f96.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/535-7720f8c8d5cb0524.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/543ac898-ac3fb2daa0e139a2.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/589-09c398454a49de01.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/628-c9d698a42d68e19f.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/734-676bd3788cbd4e82.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/784-2a93a10d155bf9ac.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/78ce5625-9e1024583388dcf2.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/792-6d6dc55e1ab1d747.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/(site)/page-c1b3d6326f8bd4a2.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/conversations/%5BconversationId%5D/page-6c0360befec4b554.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/conversations/layout-a8023349c63aef4d.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/conversations/loading-8d3449f0543bcefa.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/conversations/page-a993c30953ea114c.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/layout-fd4869e9da00b97f.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/users/layout-2745d56077fd5bcd.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/users/loading-22a244f422ac12e1.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/app/users/page-67d60ee3bbfd830e.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/d24c7ea9-9220d082bc7168b6.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/main-0ad4d1d0ad06baa4.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/main-app-bd9b00448ea4a52c.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d38bfe9b97c48424.js",revision:"dWGVLC8QzOv8BjuYSx36_"},{url:"/_next/static/css/a82c22b1854a98a9.css",revision:"a82c22b1854a98a9"},{url:"/_next/static/dWGVLC8QzOv8BjuYSx36_/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/dWGVLC8QzOv8BjuYSx36_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icon-192x192.png",revision:"a12499a0690401ad5595a28b5f4e9182"},{url:"/icon-256x256.png",revision:"b528b54e864ab86c454ccb7bf006bcbf"},{url:"/icon-384x384.png",revision:"2fc01ec68cfe87b5762c8ce13b110158"},{url:"/icon-512x512.png",revision:"2dd008a1b0527a0b426c0811b00d024e"},{url:"/images/Z78agy.png",revision:"8b2055cf05be264e114da34d642a26d5"},{url:"/images/logo.png",revision:"3e6c02215792286af993bab901dcb9f7"},{url:"/images/logo2.png",revision:"b30e60343bf55b4d69aa32038c55e860"},{url:"/images/oglogo.png",revision:"47a73cc1c3127864f54a5d8f0c7eede8"},{url:"/images/placeholder.jpg",revision:"35975c8078fbc7111ae9b9252293d710"},{url:"/manifest.json",revision:"b9be1155ae9dc2205ca8e4e79dff5ae6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));