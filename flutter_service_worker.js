'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "10755cb986153fd0826e281f25565c08",
".git/config": "2d7e2fa4b4996597e4e002917689ee45",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0372fbbab765ab307c9fb9a34b12aa20",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6938bd36c3f19938088268563f2a1640",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fc4340d52e9c7bfa3994546aebbebb11",
".git/logs/refs/heads/main": "fc4340d52e9c7bfa3994546aebbebb11",
".git/logs/refs/remotes/origin/HEAD": "b4751d153e803823adf1e0838d511bc7",
".git/logs/refs/remotes/origin/main": "79d1c8a3f00ba3df0b0fe8099a42f61f",
".git/objects/34/9a3bc805ebd9ad4f3b9109d597319731b3776f": "d40a9a8333d27bc812e097fa9d6d10e7",
".git/objects/3a/ba1409f4c67cc39bb008b2d078a6a38a08f0a1": "b45d6622866f11e7dd142e26acdc4ead",
".git/objects/3c/ae9cb39c1db796d0f8a415a000e556f0eed4e9": "709188df36aed4c1f7fbd000cb19e924",
".git/objects/3f/c159916a59212e6e1412ab651fcb9f6305f4e0": "072963e7aa8ea7be706dc1f578139257",
".git/objects/3f/fbcba6a62ee1db6e760466eb97bb470ce70fd8": "3797e1a462e8098c5e5ecceb7c0918ad",
".git/objects/4e/cbf581ad92e64ce036742bc09f58ed817214ac": "89a11d3189fa6dee961bcfb09290a6ec",
".git/objects/5e/c429c7bca4a18179c3b48766302060fb7658af": "cf06e6207b10ec3404a9072c6ada3566",
".git/objects/78/de8be61555efb96c528c7841a643f47aeb948d": "4fb751e4cca672300e36561093bcdb83",
".git/objects/a4/3f50e7eec9537edb5107cb0677c2fd04ad334b": "4f1643fa2ffdd7ee0e6721895663dace",
".git/objects/b3/fe787622bb8c4b698fca954bcff6fcd1e5ae82": "8c2b212b5df3495d58cb22bd6a71b312",
".git/objects/e8/cb0936f143a64b6719f58d0c3ed0d093c88718": "a6c9b76badb88162f2187663505a454d",
".git/objects/eb/abd997c465bf0328fbb01b8690d796d2697f77": "75cbe874b262905fb8c4df9fa2c45711",
".git/objects/f6/2cb582cef28ab08320d752e9a24950ab919008": "29e5096856171a1f38b71718eece41d2",
".git/objects/f9/ff63324142b4ef364ef9721eb07013d8c12de6": "c7b5113093e31cd1a9fdfdda28eeb9ed",
".git/objects/pack/pack-d8c07cb306b9ff6e88ae81ba31fdf9b4ca537639.idx": "20bc1c7f6d6af017f38df1f3df0deea4",
".git/objects/pack/pack-d8c07cb306b9ff6e88ae81ba31fdf9b4ca537639.pack": "6a02de83005a1e9b032a475605c51b9c",
".git/objects/pack/pack-d8c07cb306b9ff6e88ae81ba31fdf9b4ca537639.rev": "80e52e96c2f55d28fa2c49ecd5dd31ac",
".git/packed-refs": "c51dd49aec798d15bd600cb82e8240e7",
".git/refs/heads/main": "6866fa509b8e97e181b1a955e02489a3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6866fa509b8e97e181b1a955e02489a3",
"assets/AssetManifest.bin": "d5eab168878ccf549cc3d25e63e60245",
"assets/AssetManifest.json": "f193edac81b44c711bb0666f39666474",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/Futura-Regular.ttf": "1aaaa4109a0db7b0bff1e68bda91a071",
"assets/assets/rive/pencil.riv": "b98eee4b54d53be34ffeca080eb9d144",
"assets/assets/rive/sad.riv": "412772fd9077fb92db2a31e10e7e5271",
"assets/assets/rive/smile.riv": "26d966a45884632645abe1b47ccba17d",
"assets/FontManifest.json": "df450808b186856f65c310cc9f6a6ede",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "85c206a58349353c319308614d0816f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "444246b3ed421d0967035bd8055e05ea",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48186d3923d7582a7383f9997ca7bdd0",
"/": "48186d3923d7582a7383f9997ca7bdd0",
"main.dart.js": "36b0cf59aa047d1e07eef86e4dc05a09",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
