'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "43929fe218abaf0f02ace0994aa5ef06",
"index.html": "cacfe5b710a7cb4ee3e4edb447d60b22",
"/": "cacfe5b710a7cb4ee3e4edb447d60b22",
"main.dart.js": "a00e605a6c8db5214d7665b418a2897b",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b6dc4559c8054e31c599c6e20f1c6feb",
"assets/AssetManifest.json": "c69db973a32fdbef321eac8d8f09fa7d",
"assets/NOTICES": "406a474452847d8846c0e045c7cd5994",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/settings/approves.svg": "6dae3ca02bfc7ccc0a94862fc613e924",
"assets/assets/settings/sessions.svg": "56642762f29648cfc1fc67256753d79f",
"assets/assets/settings/google_auth.svg": "327816742021cae33fb1e7ee6caf20ee",
"assets/assets/settings/email.svg": "a71ed39e1d016782db237f8538046d9d",
"assets/assets/settings/language.svg": "ce793c3259b944b70ad416ee0f2137c6",
"assets/assets/settings/profile.svg": "a261dd7ad86f3f31e07074ae5870fba9",
"assets/assets/settings/password.svg": "8f7d4997db671c0b0abe071e17c30c54",
"assets/assets/home.svg": "92b21b3e785e3d57cdd50c9a47293b8f",
"assets/assets/briefcase.svg": "ee5f0291b0721a99b91d392adb75eb16",
"assets/assets/instructions.svg": "687fd90bfe869e42b51babe157654542",
"assets/assets/images/USDT.svg": "de3498c55c92eac2b4a7bdea386733af",
"assets/assets/images/forex_signal_img.png": "214db10ed14d1158e600a35b90e1d0b3",
"assets/assets/images/modes_img.png": "3c5c285c0461fb341016fc6c72d6f050",
"assets/assets/images/map_graph.svg": "5b612950f0fd3b1131150b147c526a15",
"assets/assets/images/qr_fake.png": "2c112c3cf3d2c524411f8937ff25c3f4",
"assets/assets/images/forex_trading_img.png": "b1ad22be7baceb88a85a0775a8f6c47a",
"assets/assets/images/subscribe_image.png": "c6d68090219fd159fc34a5ee4fec2c90",
"assets/assets/images/logo.png": "4f85b0e099279bb7b76e71f0e9d16319",
"assets/assets/images/t_contracts_graph.svg": "60506a4f9f4d4ba70a6202ab2b8c8e27",
"assets/assets/images/BTC.svg": "725d5fabc984e7b1b381ebb5a7698b4e",
"assets/assets/images/logo%2520farewind%25201.png": "4f85b0e099279bb7b76e71f0e9d16319",
"assets/assets/images/crypto_signals.png": "e4c0cc4892e4192f77649eb13876c325",
"assets/assets/images/d_map.svg": "c0dd7ff9487527cc784fd0fe7817b0a1",
"assets/assets/images/default_tarife.png": "d95d21b1813acebb7725b6ab3c055259",
"assets/assets/images/logo.svg": "df19d0de52e4a44f3fb7d492db9d995e",
"assets/assets/settings.svg": "3eef69640c5fc61c1494cacb90dd0a7e",
"assets/assets/statuses.svg": "ff0fb65526cfb2447cc9b5afd55ecfa9",
"assets/assets/team.svg": "0864cfa26d74cbbfb57ba19911ea4af7",
"assets/assets/finance.svg": "1c1d6d843513b35e4ab5ef3ac425adbb",
"assets/assets/copy.svg": "ea0bc1c28f7f5741222c23125cfa0384",
"assets/assets/admin.svg": "94e5aab48576b04364c47e35cadabd2f",
"assets/assets/icons/checkbox_active.svg": "7c4996b412093b5739a4ae3617f07739",
"assets/assets/icons/abonent_card.svg": "f6a824c9ca81388e88a17c462f4422ee",
"assets/assets/icons/volt.svg": "65bb3a44eea3903ef4435a1cf67832c7",
"assets/assets/icons/team.svg": "2302b762908150cb76398c2c1145be72",
"assets/assets/icons/date_time.svg": "53d03bf5cd790071f9e6ab29a5934420",
"assets/assets/icons/g_authenticator.svg": "2f3d386eb55f4412dff53111e32c71b4",
"assets/assets/icons/trade_up.svg": "b2c34939f962b65cbf490b97dd59627b",
"assets/assets/icons/casper.svg": "d36441c2ec6e488fa7e7982df66d4eb8",
"assets/assets/icons/forex_trading.svg": "57ebd3cec9e4659e32616d868aaed72c",
"assets/assets/icons/statistics.svg": "9043743ad100e095a033bc3a600f23b0",
"assets/assets/brokers.svg": "58e34be3aa64c282cbada06443b3cbcd",
"assets/assets/exit.svg": "802766da509b2bde2cf67c7bf8e07541",
"assets/assets/marketing.svg": "060f953ea524366c2176d36afe4f33da",
"assets/assets/packages.svg": "50d817554d6ae290c0d60d0c6bc54390",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
