'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "34e0338029867e989dd4d5c0750e2f60",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed15786940bf53cd984fb2d2abd16ccc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e15c32f70079fb8ee03cbf60dc89aad8",
".git/logs/refs/heads/master": "e15c32f70079fb8ee03cbf60dc89aad8",
".git/objects/03/586741f86523c0892cc110df53296d3b4553c0": "c950a6c1582927713a0bfee9e347ce15",
".git/objects/03/cfc53adb7103a2b92aa7c71a7c075b03847f6b": "f1384dff6f3ca4b9d57b9cada54307b0",
".git/objects/04/5f982da6ea5a1e053a05e79086fb244b30aa15": "a7994f92bddbdc8241254e86dac1e95b",
".git/objects/04/c63c767e43d8815d07dcfbc5f52e8863743d39": "1f5eb329b62a210b3f52392fc59e3ba8",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0d/5dfbf440cc184bfc5479dfc08942ae3e8e1c2a": "f93a2a66f94202a603d68f19519d8c3c",
".git/objects/11/b0017fe88ba47909f8a80fc8a44e844ba969e5": "d537738b159bfbbe1672c7cc698d2cda",
".git/objects/17/55744e03704d5a993b0f5c40f8fd3956e2f978": "bbf5935089dfafb253c42fd9fa7c7d70",
".git/objects/22/560798557ad45d3243bcb8eff8ca4ce00de01c": "de608519aeed613c91b092797c1fa128",
".git/objects/27/a5e9b69fb3e7f1a7d8a27aa33faa842344d96e": "d015e6f3155b3d6f7bf727e636e60190",
".git/objects/2c/00456987029cfd89a8a4a48f1879d521a7180b": "e5b7f1678c8f837f563bb08dfe33375a",
".git/objects/2c/09958bbeb2fc18e376d3bd769d91012c5a05bb": "62cfca2b1c6080766041cb2ccbdde75a",
".git/objects/2f/7ef54b257d392de1469e50f09701a0ca869528": "66c2a010b33f042645ceb3a21b22e431",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/43/5f73a75d029b9a2a4e235c6e6c2a962a60b9b4": "2c021f6a4539f7cb22fbb8919346ebf6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/55/301b8cc204988a7da21698b9e7146257004cc6": "fc0a9908bd2add388d7d550800167709",
".git/objects/5f/29b9a59f9fb82e6dcfcdade093376f6f6a87bb": "b4ff7ee06c3859d4201235147f0ffcbd",
".git/objects/60/29998a568d4640a48c224d08e0880f3b2f41fe": "90f52f66403405108f902ec4b75f1926",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/4637a5767d02aff3b797f8efe11dc9bb250539": "3180cb20525094341d9e49c7ba1284a0",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ff2342ef5273c720b5b37e7c4b4e4d7cd6d3bc": "95aec327a70fa9d88058767af9a90a18",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b1823fd7d27fe1ac5e9b4599d907c49dfa8a73": "457176d195eefb192e86c3a97faa2988",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/97/2c843e9846997a54804c6547bf41b919d80cec": "80eacf6edbd1855f2699ce7828ec32a5",
".git/objects/9a/827e197578d113b2a635619c22919773958aec": "249ff700071c3b091ac53f2b86b4e8b2",
".git/objects/9f/3a7763de5e2e06c38dd6df878cabbc7dcac045": "3a3454e8bef0fa6efea5a2dea72d3d11",
".git/objects/a1/2d90544b2c9c9a054161dbcde446b22314b283": "92b76d6904133b5db69f81562ccc1990",
".git/objects/a2/2cc07ae30b263e4f45bdec68078f4b422d8ea3": "297371d4117752d8fcb4205625efe438",
".git/objects/a2/905e2013b1606786a3f5c455c36ec5ed9d9827": "d4aa4291dd41faa5df941444307a6f2c",
".git/objects/a6/1e794d1fdc188572550bfc9b7edac7d52d71f4": "e0fa51c05b346c5271a4be4ecb1486d1",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/bef30d3626945a3cf42024befa2ce2c1ed9066": "9b83b6b483254df30ccc0b5c68d7bb5d",
".git/objects/ab/e9cb1d531a75b04bc65c099edfd0fb1f08464d": "166ae20aa06353ffed1973561909cfe3",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b6/781de84e73a6728a6afbdd6d5c0e7ca1e9cba0": "56e2389f0df6387c27a70e1434608e62",
".git/objects/b6/efb41b1d2394d069b58e1ccd54f5f37282a5fb": "02e0b9b8e71eefa31f963e1868f964b9",
".git/objects/b7/18b5bb07ffc28dab999456ce56d770e06bc905": "4219754bf23e8497f0e67ff3ccf4f8d1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/c4a5c0872b4552717a822420deb4e815e6c973": "91c41e71500e3c617a5b43177ea197c6",
".git/objects/c0/2d9fc383e2d245e3d5e3e6d734d40054fb090a": "772c77e21554c6c9525e604a38c2d0db",
".git/objects/c2/af13871f78b6fa1bb390798ba689309669cb58": "f775a0df712d27d99ffbef30872c6a18",
".git/objects/c2/be349a7b55ff3a6324263c2ae25857896385a3": "cb0312728eb5c32207b8516d5d866215",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/4cd79c9a09e3d6677f45da9e70cbd91360ae9c": "ea2871be368e72d8557fcd326fca5955",
".git/objects/cb/12dc7c4e19823ecb3392e7be9eebc64548d73c": "2dd0d030d2097167799574526f78762a",
".git/objects/cf/4387aaaf26fe40376e4a5b829b51ff9d9c0301": "0195f5a126c47f9e14468ec78229f43a",
".git/objects/d1/e3dba3eb112e69760ba7d964743d7d82262a12": "7119d23094bc0c7b808bfcc45c531702",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/de/7dfd8bcc9abf61352e3f11b22245a6b1952a91": "b303f8508625586b895356afc9bceec0",
".git/objects/df/6054308966a2144e902872a355e069a3f6fa31": "ea74760ea02049dbf033d8670dc01e94",
".git/objects/df/65b3bf8ff928a85a4b98d1c2b8888a9923bd89": "894657ebfd032eeef194b38089e71f13",
".git/objects/e1/f0acdc1824b1185ad175717456d594f46748a2": "5bbf07b425188ce3b4cbd1f47ecaf675",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/382eb1a31e958b24b5eea105a1ca275bfe563a": "a89fd3d267c659408f2116862bd768fc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/0cee069b88a231ff35859429ebd8fe44a53c4e": "94d6c4dd186d498193102fc99408514c",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/b46b37843e9e2b8e7a4d695a48d9fd39248f90": "5a23eab6a50461862c7bcc7d2645dd00",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/ba8d6f6ec2b10688d30f348b1b6a00110287cd": "6c0be94c957197f901b1a8ffad3a1f70",
".git/refs/heads/master": "ee36e0267519b760c866b2f82e46b146",
"assets/AssetManifest.bin": "5aa2fc80df86ba9311a2554b5f5b53ea",
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
"flutter_bootstrap.js": "c6a91305b7f409cd9263ec3105f61631",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a1de710e78799e9c41b9d3b4cde50bc7",
"/": "a1de710e78799e9c41b9d3b4cde50bc7",
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
