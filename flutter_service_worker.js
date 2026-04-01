'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5aa2fc80df86ba9311a2554b5f5b53ea",
"assets/AssetManifest.bin.json": "9733497698e8183c4ab1c3a143054e52",
"assets/assets/images/biryani.jpg": "42d8f9e0b6f054dd95df6f1402474f5a",
"assets/assets/images/brownies.jpg": "66b12ee750c033ce5071e9d22aad71f7",
"assets/assets/images/burger.jpg": "18da81e9ee4353244077f3154aa1ab2e",
"assets/assets/images/chicken_curry.jpg": "9aab13a3690fc26c810eef312d0f86d7",
"assets/assets/images/chocolate_cake.jpg": "c20c3daaf7c752f29795b080bcf649a9",
"assets/assets/images/coffee.jpg": "932e90dc3e39f719c04613cca30d6149",
"assets/assets/images/cupcakes.jpg": "5ee0b9dc3e6c7deebaa3df803f9d783b",
"assets/assets/images/donuts.jpg": "fe279adee964ca5e799e8dcb8f9a7ce0",
"assets/assets/images/dosa.jpg": "3b703705350b22623fdc0600012fe04b",
"assets/assets/images/fish_and_chips.jpg": "1c5eb2f72b7c11d85daae81df5294067",
"assets/assets/images/french_fries.jpg": "1aa52fafcc2680a61aecb2fc6299c630",
"assets/assets/images/fried_rice.jpg": "8290fcc02efe4693aa475fdeaad7f815",
"assets/assets/images/grilled_chicken.jpg": "ff39d42e9e9fb0660574899e1be55fbe",
"assets/assets/images/ice_cream.jpg": "a537919f71890709fd26a8feaa0397c8",
"assets/assets/images/lemonade.jpg": "cfd1bfc580dd0f5fbbe1e4d26416f450",
"assets/assets/images/manchurian.jpg": "bc0ab5a22ba255b2d17fa15f2b5de5e0",
"assets/assets/images/muffins.jpg": "8ba6263379755324588251b7b2c58cfa",
"assets/assets/images/noodles.jpg": "2fd88d9570e134c74f908b5664f94d53",
"assets/assets/images/pancakes.jpg": "7844901f31f741caa2377fe904fd5942",
"assets/assets/images/paneer_butter_masala.jpg": "6102e0172badec7efd68dd0933c57791",
"assets/assets/images/pasta.jpg": "c239b0cc343ced99752edd662ecc2b16",
"assets/assets/images/pizza.jpg": "1fc7d7e5e06a7fd1d4dc444e71351bcd",
"assets/assets/images/salad.jpg": "c758f0f997f6391bf3b0fb778f8a58a6",
"assets/assets/images/sandwich.jpg": "a86df506b91c6bcb50b220986eea45c4",
"assets/assets/images/smoothie.jpg": "8674bae3b7ac20d53fd8581870ca8fac",
"assets/assets/images/sushi.jpg": "d35dca512c98867e53ecb2ef4414f6d0",
"assets/assets/images/tacos.jpg": "85f70ee58c4689f554835ca36a500d52",
"assets/assets/images/tea.jpg": "93e59dde8ffb8339087c6acc6e452c4c",
"assets/assets/images/waffles.jpg": "ae7f1bafdcbbe070c1e30913a462ce11",
"assets/assets/images/wraps.jpg": "e9e2873d484b09d26c98a7ce89fba3f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "11312c3092b639754a0cb3f77a62acf5",
"assets/NOTICES": "216d141da1c88a309007a3aa9235f002",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "802ab057fc1b40d14402756101ad6b50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02e020d84e1596df75dae25bd867cbe0",
"/": "02e020d84e1596df75dae25bd867cbe0",
"main.dart.js": "76413d67c8676faed13f368e1a9addeb",
"manifest.json": "885c2c432e1072c0a4124d6e5cc9eeb8",
"version.json": "f76726ce96debb066b538f46dd84b163"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
