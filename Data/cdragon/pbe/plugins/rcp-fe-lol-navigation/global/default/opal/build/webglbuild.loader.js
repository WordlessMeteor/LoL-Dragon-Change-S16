function createUnityInstance(e, t, n) {
    function r(e, n) {
        if (!r.aborted && t.showBanner) return "error" == n && (r.aborted = !0), t.showBanner(e, n);
        switch (n) {
            case "error":
                console.error(e);
                break;
            case "warning":
                console.warn(e);
                break;
            default:
                console.log(e)
        }
    }

    function o(e) {
        var t = e.reason || e.error,
            n = t ? t.toString() : e.message || e.reason || "",
            r = t && t.stack ? t.stack.toString() : "";
        (n += "\n" + (r = r.startsWith(n) ? r.substring(n.length) : r).trim()) && s.stackTraceRegExp && s.stackTraceRegExp.test(n) && P(n, e.filename || t && (t.fileName || t.sourceURL) || "", e.lineno || t && (t.lineNumber || t.line) || 0)
    }

    function a(e, t, n) {
        var r = e[t];
        void 0 !== r && r || (console.warn('Config option "' + t + '" is missing or empty. Falling back to default value: "' + n + '". Consider updating your WebGL template to include the missing config option.'), e[t] = n)
    }
    n = n || function() {};
    var i, s = {
        canvas: e,
        webglContextAttributes: {
            preserveDrawingBuffer: !1,
            powerPreference: 2
        },
        wasmFileSize: 41652878,
        cacheControl: function(e) {
            return e == s.dataUrl || e.match(/\.bundle/) ? "must-revalidate" : "no-store"
        },
        streamingAssetsUrl: "StreamingAssets",
        downloadProgress: {},
        deinitializers: [],
        intervals: {},
        setInterval: function(e, t) {
            return e = window.setInterval(e, t), this.intervals[e] = !0, e
        },
        clearInterval: function(e) {
            delete this.intervals[e], window.clearInterval(e)
        },
        preRun: [],
        postRun: [],
        print: function(e) {
            console.log(e)
        },
        printErr: function(e) {
            console.error(e), "string" == typeof e && -1 != e.indexOf("wasm streaming compile failed") && (-1 != e.toLowerCase().indexOf("mime") ? r('HTTP Response Header "Content-Type" configured incorrectly on the server for file ' + s.codeUrl + ' , should be "application/wasm". Startup time performance will suffer.', "warning") : r('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file ' + s.codeUrl + ", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.", "warning"))
        },
        locateFile: function(e) {
            return "build.wasm" == e ? this.codeUrl : e
        },
        disabledCanvasEvents: ["contextmenu", "dragstart"]
    };
    for (i in a(t, "companyName", "Unity"), a(t, "productName", "WebGL Player"), a(t, "productVersion", "1.0"), t) s[i] = t[i];
    s.streamingAssetsUrl = new URL(s.streamingAssetsUrl, document.URL).href;
    var d = s.disabledCanvasEvents.slice();

    function c(e) {
        e.preventDefault()
    }
    d.forEach((function(t) {
        e.addEventListener(t, c)
    })), window.addEventListener("error", o), window.addEventListener("unhandledrejection", o);
    var l = "",
        u = "";

    function h(t) {
        document.webkitCurrentFullScreenElement === e ? e.style.width && (l = e.style.width, u = e.style.height, e.style.width = "100%", e.style.height = "100%") : l && (e.style.width = l, e.style.height = u, u = l = "")
    }
    document.addEventListener("webkitfullscreenchange", h), s.deinitializers.push((function() {
        for (var t in s.disableAccessToMediaDevices(), d.forEach((function(t) {
                e.removeEventListener(t, c)
            })), window.removeEventListener("error", o), window.removeEventListener("unhandledrejection", o), document.removeEventListener("webkitfullscreenchange", h), s.intervals) window.clearInterval(t);
        s.intervals = {}
    })), s.QuitCleanup = function() {
        for (var e = 0; e < s.deinitializers.length; e++) s.deinitializers[e]();
        s.deinitializers = [], "function" == typeof s.onQuit && s.onQuit()
    };
    var f, p, m, g, b, w, y, v, S, C = {
        Module: s,
        SetFullscreen: function() {
            if (s.SetFullscreen) return s.SetFullscreen.apply(s, arguments);
            s.print("Failed to set Fullscreen mode: Player not loaded yet.")
        },
        SendMessage: function() {
            if (s.SendMessage) return s.SendMessage.apply(s, arguments);
            s.print("Failed to execute SendMessage: Player not loaded yet.")
        },
        Quit: function() {
            return new Promise((function(e, t) {
                s.shouldQuit = !0, s.onQuit = e
            }))
        },
        GetMetricsInfo: function() {
            var e = Number(s._getMetricsInfo()) >>> 0,
                t = 4 + e,
                n = 4 + t,
                r = 8 + n,
                o = 8 + r,
                a = 4 + o,
                i = 4 + a,
                d = 8 + i,
                c = 8 + d,
                l = 4 + c,
                u = 4 + l,
                h = 4 + u;
            return {
                totalWASMHeapSize: s.HEAPU32[e >> 2],
                usedWASMHeapSize: s.HEAPU32[t >> 2],
                totalJSHeapSize: s.HEAPF64[n >> 3],
                usedJSHeapSize: s.HEAPF64[r >> 3],
                pageLoadTime: s.HEAPU32[o >> 2],
                pageLoadTimeToFrame1: s.HEAPU32[a >> 2],
                fps: s.HEAPF64[i >> 3],
                movingAverageFps: s.HEAPF64[d >> 3],
                assetLoadTime: s.HEAPU32[c >> 2],
                webAssemblyStartupTime: s.HEAPU32[l >> 2] - (s.webAssemblyTimeStart || 0),
                codeDownloadTime: s.HEAPU32[u >> 2],
                gameStartupTime: s.HEAPU32[h >> 2],
                numJankedFrames: s.HEAPU32[4 + h >> 2]
            }
        }
    };

    function P(e, t, n) {
        -1 == e.indexOf("fullscreen error") && (s.startupErrorHandler ? s.startupErrorHandler(e, t, n) : s.errorHandler && s.errorHandler(e, t, n) || (console.log("Invoking error handler due to\n" + e), "function" == typeof dump && dump("Invoking error handler due to\n" + e), P.didShowErrorMessage || (-1 != (e = "An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n" + e).indexOf("DISABLE_EXCEPTION_CATCHING") ? e = "An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace." : -1 != e.indexOf("Cannot enlarge memory arrays") ? e = "Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings." : -1 == e.indexOf("Invalid array buffer length") && -1 == e.indexOf("Invalid typed array length") && -1 == e.indexOf("out of memory") && -1 == e.indexOf("could not allocate memory") || (e = "The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."), alert(e), P.didShowErrorMessage = !0)))
    }

    function T(e, t) {
        if ("symbolsUrl" != e) {
            var r = s.downloadProgress[e],
                o = (r = r || (s.downloadProgress[e] = {
                    started: !1,
                    finished: !1,
                    lengthComputable: !1,
                    total: 0,
                    loaded: 0
                }), "object" != typeof t || "progress" != t.type && "load" != t.type || (r.started || (r.started = !0, r.lengthComputable = t.lengthComputable), r.total = t.total, r.loaded = t.loaded, "load" == t.type && (r.finished = !0)), 0),
                a = 0,
                i = 0,
                d = 0,
                c = 0;
            for (e in s.downloadProgress) {
                if (!(r = s.downloadProgress[e]).started) return;
                i++, r.lengthComputable ? (o += r.loaded, a += r.total, d++) : r.finished || c++
            }
            n(.9 * (i ? (i - c - (a ? d * (a - o) / a : 0)) / i : 0))
        }
    }

    function E() {
        var e = this;
        this.isConnected = this.connect().then((function() {
            return e.cleanUpCache()
        })), this.isConnected.catch((function(e) {
            e = "Error when initializing cache: " + e, console.log("[UnityCache] " + e)
        }))
    }

    function U(e) {
        console.log("[UnityCache] " + e)
    }

    function k(e) {
        return k.link = k.link || document.createElement("a"), k.link.href = e, k.link.href
    }
    s.SystemInfo = function() {
        var e, t, n, r, o, a, i = navigator.userAgent + " ",
            s = [
                ["Firefox", "Firefox"],
                ["OPR", "Opera"],
                ["Edg", "Edge"],
                ["SamsungBrowser", "Samsung Browser"],
                ["Trident", "Internet Explorer"],
                ["MSIE", "Internet Explorer"],
                ["Chrome", "Chrome"],
                ["CriOS", "Chrome on iOS Safari"],
                ["FxiOS", "Firefox on iOS Safari"],
                ["Safari", "Safari"]
            ];

        function d(e, t, n) {
            return (e = RegExp(e, "i").exec(t)) && e[n]
        }
        for (var c = 0; c < s.length; ++c)
            if (t = d(s[c][0] + "[/ ](.*?)[ \\)]", i, 1)) {
                e = s[c][1];
                break
            }
        "Safari" == e && (t = d("Version/(.*?) ", i, 1)), "Internet Explorer" == e && (t = d("rv:(.*?)\\)? ", i, 1) || t);
        for (var l = [
                ["Windows (.*?)[;)]", "Windows"],
                ["Android ([0-9_.]+)", "Android"],
                ["iPhone OS ([0-9_.]+)", "iPhoneOS"],
                ["iPad.*? OS ([0-9_.]+)", "iPadOS"],
                ["FreeBSD( )", "FreeBSD"],
                ["OpenBSD( )", "OpenBSD"],
                ["Linux|X11()", "Linux"],
                ["Mac OS X ([0-9_\\.]+)", "MacOS"],
                ["bot|google|baidu|bing|msn|teoma|slurp|yandex", "Search Bot"]
            ], u = 0; u < l.length; ++u)
            if (r = d(l[u][0], i, 1)) {
                n = l[u][1], r = r.replace(/_/g, ".");
                break
            }
        function h() {
            try {
                return window.WebAssembly ? WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 13, 1, 11, 0, 65, 0, 65, 0, 65, 1, 252, 11, 0, 11])) ? WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 11, 1, 9, 1, 1, 125, 32, 0, 252, 0, 26, 11])) ? WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 10, 1, 8, 1, 1, 126, 32, 0, 194, 26, 11])) ? WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11])) ? !!WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 10, 1, 8, 0, 6, 64, 1, 25, 1, 11, 11])) || "wasm-exceptions" : "wasm-simd128" : "sign-extend" : "non-trapping fp-to-int" : "bulk-memory" : "WebAssembly"
            } catch (e) {
                return "Exception: " + e
            }
        }
        r = {
            "NT 5.0": "2000",
            "NT 5.1": "XP",
            "NT 5.2": "Server 2003",
            "NT 6.0": "Vista",
            "NT 6.1": "7",
            "NT 6.2": "8",
            "NT 6.3": "8.1",
            "NT 10.0": "10"
        } [r] || r, webgpuVersion = 0, (f = document.createElement("canvas")) && (a = (p = f.getContext("webgl2")) ? 2 : 0, p || (p = f && f.getContext("webgl")) && (a = 1), p && (o = p.getExtension("WEBGL_debug_renderer_info") && p.getParameter(37446) || p.getParameter(7937)));
        var f = "undefined" != typeof SharedArrayBuffer,
            p = "object" == typeof WebAssembly && "function" == typeof WebAssembly.compile,
            m = p && !0 === h();
        return {
            width: screen.width,
            height: screen.height,
            userAgent: i.trim(),
            browser: e || "Unknown browser",
            browserVersion: t || "Unknown version",
            mobile: /Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),
            os: n || "Unknown OS",
            osVersion: r || "Unknown OS Version",
            gpu: o || "Unknown GPU",
            language: navigator.userLanguage || navigator.language,
            hasWebGL: a,
            hasWebGPU: webgpuVersion,
            hasCursorLock: !!document.body.requestPointerLock,
            hasFullscreen: !!document.body.requestFullscreen || !!document.body.webkitRequestFullscreen,
            hasThreads: f,
            hasWasm: p,
            hasWasm2023: m,
            missingWasm2023Feature: m ? null : h(),
            hasWasmThreads: !1
        }
    }(), s.abortHandler = function(e) {
        return P(e, "", 0), !0
    }, Error.stackTraceLimit = Math.max(Error.stackTraceLimit || 0, 50), s.readBodyWithProgress = function(e, t, n) {
        var r = e.body ? e.body.getReader() : void 0,
            o = void 0 !== e.headers.get("Content-Length"),
            a = function(e, t) {
                if (!t) return 0;
                t = e.headers.get("Content-Encoding");
                var n = parseInt(e.headers.get("Content-Length")),
                    r = 536870912;
                switch (t) {
                    case "br":
                        return Math.min(Math.round(2 * n), r);
                    case "gzip":
                        return Math.min(Math.round(1.6 * n), r);
                    default:
                        return n
                }
            }(e, o),
            i = new Uint8Array(a),
            s = [],
            d = 0,
            c = 0;
        return o || console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),
            function l() {
                return void 0 === r ? e.arrayBuffer().then((function(r) {
                    var a = new Uint8Array(r);
                    return t({
                        type: "progress",
                        response: e,
                        total: r.length,
                        loaded: 0,
                        lengthComputable: o,
                        chunk: n ? a : null
                    }), a
                })) : r.read().then((function(r) {
                    if (r.done) {
                        if (d === a) return i;
                        if (d < a) return i.slice(0, d);
                        for (var u = new Uint8Array(d), h = (u.set(i, 0), c), f = 0; f < s.length; ++f) u.set(s[f], h), h += s[f].length;
                        return u
                    }
                    return d + r.value.length <= i.length ? (i.set(r.value, d), c = d + r.value.length) : s.push(r.value), d += r.value.length, t({
                        type: "progress",
                        response: e,
                        total: Math.max(a, d),
                        loaded: d,
                        lengthComputable: o,
                        chunk: n ? r.value : null
                    }), l()
                }))
            }().then((function(n) {
                return t({
                    type: "load",
                    response: e,
                    total: n.length,
                    loaded: n.length,
                    lengthComputable: o,
                    chunk: null
                }), e.parsedBody = n, e
            }))
    }, s.fetchWithProgress = function(e, t) {
        var n = function() {};
        return t && t.onProgress && (n = t.onProgress), fetch(e, t).then((function(e) {
            return s.readBodyWithProgress(e, n, t.enableStreamingDownload)
        }))
    }, s.UnityCache = (f = {
        name: "UnityCache",
        version: 4
    }, p = {
        name: "RequestMetaDataStore",
        version: 1
    }, m = "RequestStore", g = "WebAssembly", b = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, w = null, E.getInstance = function() {
        return w = w || new E
    }, E.destroyInstance = function() {
        return w ? w.close().then((function() {
            w = null
        })) : Promise.resolve()
    }, E.prototype.clearCache = function() {
        var e = this;
        return this.isConnected.then((function() {
            return e.execute(p.name, "clear", [])
        })).then((function() {
            return e.cache.keys()
        })).then((function t(n) {
            var r;
            return 0 === n.length ? Promise.resolve() : (r = n.pop(), e.cache.delete(r).then((function() {
                return t(n)
            })))
        }))
    }, E.UnityCacheDatabase = f, E.RequestMetaDataStore = p, E.MaximumCacheSize = 1073741824, E.prototype.loadRequest = function(e) {
        var t = this;
        return t.isConnected.then((function() {
            return Promise.all([t.cache.match(e), t.loadRequestMetaData(e)])
        })).then((function(e) {
            if (void 0 !== e[0] && void 0 !== e[1]) return {
                response: e[0],
                metaData: e[1]
            }
        }))
    }, E.prototype.loadRequestMetaData = function(e) {
        return e = "string" == typeof e ? e : e.url, this.execute(p.name, "get", [e])
    }, E.prototype.updateRequestMetaData = function(e) {
        return this.execute(p.name, "put", [e])
    }, E.prototype.storeRequest = function(e, t) {
        var n = this;
        return n.isConnected.then((function() {
            return n.cache.put(e, t)
        }))
    }, E.prototype.close = function() {
        return this.isConnected.then(function() {
            this.database && (this.database.close(), this.database = null), this.cache && (this.cache = null)
        }.bind(this))
    }, E.prototype.connect = function() {
        var e = this;
        return void 0 === b ? Promise.reject(new Error("Could not connect to cache: IndexedDB is not supported.")) : void 0 === window.caches ? Promise.reject(new Error("Could not connect to cache: Cache API is not supported.")) : new Promise((function(t, n) {
            try {
                function r() {
                    e.openDBTimeout && (clearTimeout(e.openDBTimeout), e.openDBTimeout = null)
                }
                e.openDBTimeout = setTimeout((function() {
                    void 0 === e.database && n(new Error("Could not connect to cache: Database timeout."))
                }), 2e4);
                var o = b.open(f.name, f.version);
                o.onupgradeneeded = e.upgradeDatabase.bind(e), o.onsuccess = function(n) {
                    r(), e.database = n.target.result, t()
                }, o.onerror = function(t) {
                    r(), e.database = null, n(new Error("Could not connect to database."))
                }
            } catch (o) {
                r(), e.database = null, e.cache = null, n(new Error("Could not connect to cache: Could not connect to database."))
            }
        })).then((function() {
            var e = f.name + "_" + s.companyName + "_" + s.productName;
            return caches.open(e)
        })).then((function(t) {
            e.cache = t
        }))
    }, E.prototype.upgradeDatabase = function(e) {
        var t;
        (e = e.target.result).objectStoreNames.contains(p.name) || (t = e.createObjectStore(p.name, {
            keyPath: "url"
        }), ["accessedAt", "updatedAt"].forEach((function(e) {
            t.createIndex(e, e)
        }))), e.objectStoreNames.contains(m) && e.deleteObjectStore(m), e.objectStoreNames.contains(g) && e.deleteObjectStore(g)
    }, E.prototype.execute = function(e, t, n) {
        return this.isConnected.then(function() {
            return new Promise(function(r, o) {
                try {
                    var a, i, s;
                    null === this.database ? o(new Error("indexedDB access denied")) : (a = -1 != ["put", "delete", "clear"].indexOf(t) ? "readwrite" : "readonly", i = this.database.transaction([e], a).objectStore(e), "openKeyCursor" == t && (i = i.index(n[0]), n = n.slice(1)), (s = i[t].apply(i, n)).onsuccess = function(e) {
                        r(e.target.result)
                    }, s.onerror = function(e) {
                        o(e)
                    })
                } catch (a) {
                    o(a)
                }
            }.bind(this))
        }.bind(this))
    }, E.prototype.getMetaDataEntries = function() {
        var e = this,
            t = 0,
            n = [];
        return new Promise((function(r, o) {
            var a = e.database.transaction([p.name], "readonly").objectStore(p.name).openCursor();
            a.onsuccess = function(e) {
                (e = e.target.result) ? (t += e.value.size, n.push(e.value), e.continue()) : r({
                    metaDataEntries: n,
                    cacheSize: t
                })
            }, a.onerror = function(e) {
                o(e)
            }
        }))
    }, E.prototype.cleanUpCache = function() {
        var e = this;
        return this.getMetaDataEntries().then((function(t) {
            for (var n = t.metaDataEntries, r = t.cacheSize, o = [], a = [], i = 0; i < n.length; ++i) n[i].version == s.productVersion ? a.push(n[i]) : (o.push(n[i]), r -= n[i].size);
            for (a.sort((function(e, t) {
                    return e.accessedAt - t.accessedAt
                })), i = 0; i < a.length && !(r < E.MaximumCacheSize); ++i) o.push(a[i]), r -= a[i].size;
            return function t() {
                var n;
                return 0 === o.length ? Promise.resolve() : (n = o.pop(), e.cache.delete(n.url).then((function(t) {
                    if (t) return r = n.url, new Promise((function(t, n) {
                        var o = e.database.transaction([p.name], "readwrite");
                        o.objectStore(p.name).delete(r), o.oncomplete = t, o.onerror = n
                    }));
                    var r
                })).then(t))
            }()
        }))
    }, E), s.cachedFetch = (y = s.UnityCache, v = s.fetchWithProgress, S = s.readBodyWithProgress, function(e, t) {
        var n, r, o = y.getInstance(),
            a = k("string" == typeof e ? e : e.url),
            i = {
                enabled: (n = a, !((r = t) && r.method && "GET" !== r.method || r && -1 == ["must-revalidate", "immutable"].indexOf(r.control) || !n.match("^https?://")))
            };

        function s(e, t) {
            return fetch(e, t).then((function(n) {
                var r;
                return !i.enabled || i.revalidated ? n : 304 === n.status ? (i.revalidated = !0, o.updateRequestMetaData(i.metaData).then((function() {
                    U("'" + i.metaData.url + "' successfully revalidated and served from the browser cache")
                })).catch((function(e) {
                    U("'" + i.metaData.url + "' successfully revalidated but not stored in the browser cache due to the error: " + e)
                })), S(i.response, t.onProgress, t.enableStreamingDownload)) : 200 == n.status ? (i.response = n, i.metaData.updatedAt = i.metaData.accessedAt, i.revalidated = !0, r = n.clone(), S(n, t.onProgress, t.enableStreamingDownload).then((function(t) {
                    return i.metaData.size = t.parsedBody.length, Promise.all([o.storeRequest(e, r), o.updateRequestMetaData(i.metaData)]).then((function() {
                        U("'" + a + "' successfully downloaded and stored in the browser cache")
                    })).catch((function(e) {
                        U("'" + a + "' successfully downloaded but not stored in the browser cache due to the error: " + e)
                    })), t
                }))) : (U("'" + a + "' request failed with status: " + n.status + " " + n.statusText), S(n, t.onProgress, t.enableStreamingDownload))
            }))
        }
        return t && (i.control = t.control, i.companyName = t.companyName, i.productName = t.productName, i.productVersion = t.productVersion), i.revalidated = !1, i.metaData = {
            url: a,
            accessedAt: Date.now(),
            version: i.productVersion
        }, i.response = null, i.enabled ? o.loadRequest(a).then((function(n) {
            var r, d, c;
            return n ? (r = n.response, d = n.metaData, i.response = r, i.metaData.size = d.size, i.metaData.updatedAt = d.updatedAt, "immutable" == i.control ? (i.revalidated = !0, o.updateRequestMetaData(d).then((function() {
                U("'" + i.metaData.url + "' served from the browser cache without revalidation")
            })), S(r, t.onProgress, t.enableStreamingDownload)) : (n = a, (c = window.location.href.match(/^[a-z]+:\/\/[^\/]+/)) && !n.lastIndexOf(c[0], 0) || !r.headers.get("Last-Modified") && !r.headers.get("ETag") ? (n = (t = t || {}).headers || {}, t.headers = n, r.headers.get("Last-Modified") ? (n["If-Modified-Since"] = r.headers.get("Last-Modified"), n["Cache-Control"] = "no-cache") : r.headers.get("ETag") && (n["If-None-Match"] = r.headers.get("ETag"), n["Cache-Control"] = "no-cache"), s(e, t)) : fetch(a, {
                method: "HEAD"
            }).then((function(n) {
                return i.revalidated = ["Last-Modified", "ETag"].every((function(e) {
                    return !r.headers.get(e) || r.headers.get(e) == n.headers.get(e)
                })), i.revalidated ? (o.updateRequestMetaData(d).then((function() {
                    U("'" + i.metaData.url + "' successfully revalidated and served from the browser cache")
                })), S(i.response, t.onProgress, t.enableStreamingDownload)) : s(e, t)
            })))) : s(e, t)
        })).catch((function(n) {
            return U("Failed to load '" + i.metaData.url + "' from browser cache due to the error: " + n), v(e, t)
        })) : v(e, t)
    });
    var A = {
            hasUnityMarker: function(e) {
                var t = 10,
                    n = "UnityWeb Compressed Content (gzip)";
                if (t > e.length || 31 != e[0] || 139 != e[1]) return !1;
                var r = e[3];
                if (4 & r) {
                    if (t + 2 > e.length) return !1;
                    if ((t += 2 + e[t] + (e[t + 1] << 8)) > e.length) return !1
                }
                if (8 & r) {
                    for (; t < e.length && e[t];) t++;
                    if (t + 1 > e.length) return !1;
                    t++
                }
                return 16 & r && String.fromCharCode.apply(null, e.subarray(t, t + 34 + 1)) == n + "\0"
            }
        },
        D = {
            hasUnityMarker: function(e) {
                var t = "UnityWeb Compressed Content (brotli)";
                if (!e.length) return !1;
                var n = 1 & e[0] ? 14 & e[0] ? 4 : 7 : 1,
                    r = e[0] & (1 << n) - 1,
                    o = 1 + (Math.log(35) / Math.log(2) >> 3);
                if (commentOffset = 1 + n + 2 + 1 + 2 + (o << 3) + 7 >> 3, 17 == r || commentOffset > e.length) return !1;
                for (var a = r + (6 + (o << 4) + 2240 << n), i = 0; i < commentOffset; i++, a >>>= 8)
                    if (e[i] != (255 & a)) return !1;
                return String.fromCharCode.apply(null, e.subarray(commentOffset, commentOffset + 36)) == t
            }
        };
    return new Promise((function(e, t) {
        var o;
        s.SystemInfo.hasWebGL ? 1 == s.SystemInfo.hasWebGL ? (o = 'Your browser does not support graphics API "WebGL 2" which is required for this content.', "Safari" == s.SystemInfo.browser && parseInt(s.SystemInfo.browserVersion) < 15 && (s.SystemInfo.mobile || 1 < navigator.maxTouchPoints ? o += "\nUpgrade to iOS 15 or later." : o += "\nUpgrade to Safari 15 or later."), t(o)) : s.SystemInfo.hasWasm ? s.SystemInfo.hasWasm2023 ? (s.startupErrorHandler = t, n(0), s.postRun.push((function() {
            n(1), s.WebPlayer.WaitForInitialization().then((function() {
                delete s.startupErrorHandler, e(C), s.pageStartupTime = performance.now()
            }))
        })), s.SystemInfo.hasWebGPU = !1, Promise.resolve(!1).then((function() {
            ! function() {
                var e, t, n, o, a, i = performance.now(),
                    d = (new Promise((function(e, t) {
                        var n = document.createElement("script");
                        n.src = s.frameworkUrl, n.onload = function() {
                            if ("undefined" == typeof unityFramework || !unityFramework) {
                                var t, o = [
                                    ["br", "br"],
                                    ["gz", "gzip"]
                                ];
                                for (t in o) {
                                    var a, i = o[t];
                                    if (s.frameworkUrl.endsWith("." + i[0])) return a = "Unable to parse " + s.frameworkUrl + "!", "file:" == location.protocol ? void r(a + " Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.", "error") : (a += ' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: ' + i[1] + '" present. Check browser Console and Devtools Network tab to debug.', "br" == i[0] && "http:" == location.protocol && (i = -1 != ["localhost", "127.0.0.1"].indexOf(location.hostname) ? "" : "Migrate your server to use HTTPS.", a = /Firefox/.test(navigator.userAgent) ? "Unable to parse " + s.frameworkUrl + '!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. ' + i + ' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.' : "Unable to parse " + s.frameworkUrl + '!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'), void r(a, "error"))
                                }
                                r("Unable to parse " + s.frameworkUrl + "! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)", "error")
                            }
                            var d = unityFramework;
                            unityFramework = null, n.onload = null, e(d)
                        }, n.onerror = function(e) {
                            r("Unable to load file " + s.frameworkUrl + "! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)", "error")
                        }, document.body.appendChild(n), s.deinitializers.push((function() {
                            document.body.removeChild(n)
                        }))
                    })).then((function(e) {
                        s.webAssemblyTimeStart = performance.now(), e(s), s.codeDownloadTimeEnd = performance.now() - i
                    })), performance.now()),
                    c = (T(e = "dataUrl"), t = s.cacheControl(s[e]), n = s.companyName && s.productName ? s.cachedFetch : s.fetchWithProgress, o = s[e], a = /file:\/\//.exec(o) ? "same-origin" : void 0, n(s[e], {
                        method: "GET",
                        companyName: s.companyName,
                        productName: s.productName,
                        productVersion: s.productVersion,
                        control: t,
                        mode: a,
                        onProgress: function(t) {
                            T(e, t)
                        }
                    }).then((function(e) {
                        var t, n, a, i, s, d;
                        return A.hasUnityMarker(e.parsedBody) && (t = ["gzip", "gzip"]), (t = D.hasUnityMarker(e.parsedBody) ? ["brotli", "br"] : t) && (n = e.headers.get("Content-Type"), a = e.headers.get("Content-Encoding"), s = 0 < (i = e.headers.get("Content-Length")) && e.parsedBody.length != i, d = 0 < i && e.parsedBody.length == i, a != t[1] ? r("Failed to parse binary data file " + o + ' (with "Content-Type: ' + n + '"), because it is still ' + t[0] + '-compressed. It should have been uncompressed by the browser, but it was unable to do so since the web server provided the compressed content without specifying the HTTP Response Header "Content-Encoding: ' + t[1] + '" that would have informed the browser that decompression is needed. Please verify your web server hosting configuration to add the missing "Content-Encoding: ' + t[1] + '" HTTP Response Header.', "error") : r(s ? "Web server configuration error: it looks like the web server has been misconfigured to double-compress the data file " + o + "! That is, it looks like the web browser has decompressed the file, but it is still in compressed form, suggesting that an already compressed file was compressed a second time. (Content-Length: " + i + ", obtained length: " + e.parsedBody.length + ")" : d ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && "gzip" == a && "application/octet-stream" == n ? "Unable to load content due to Apple Safari bug https://bugs.webkit.org/show_bug.cgi?id=247421 . To work around this issue, please reconfigure your web server to serve " + o + " with Content-Type: application/gzip instead of Content-Type: application/octet-stream" : "Malformed binary data? Received compressed data file " + o + ', with "Content-Type: ' + n + '", "Content-Encoding: ' + t[1] + '", "Content-Length: ' + i + '", which the web browser should have decompressed, but it seemingly did not (received file size is the same as compressed file size was). Double check that the integrity of the file is intact.' : "Malformed binary data URL " + o + '. No "Content-Length" HTTP Response header present. Check browser console for more information.', "error"), console.error("Malformed data? Downloaded binary data file " + o + " (ArrayBuffer size: " + e.parsedBody.length + ") and browser should have decompressed it, but it might have not. Dumping raw HTTP Response Headers if it might help debug:"), e.headers.forEach((function(e, t) {
                            console.error(t + ": " + e)
                        }))), e.parsedBody
                    })).catch((function(e) {
                        var t = "Failed to download file " + o;
                        "file:" == location.protocol ? r(t + ". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.", "error") : console.error(t)
                    })));
                s.preRun.push((function() {
                    s.addRunDependency("dataUrl"), c.then((function(e) {
                        var t = new TextDecoder("utf-8"),
                            n = 0;

                        function r() {
                            var t = (e[n] | e[n + 1] << 8 | e[n + 2] << 16 | e[n + 3] << 24) >>> 0;
                            return n += 4, t
                        }

                        function o(t) {
                            if (A.hasUnityMarker(e)) throw t + '. Failed to parse binary data file, because it is still gzip-compressed and should have been uncompressed by the browser. Web server has likely provided gzip-compressed data without specifying the HTTP Response Header "Content-Encoding: gzip" with it to instruct the browser to decompress it. Please verify your web server hosting configuration.';
                            if (D.hasUnityMarker(e)) throw t + '. Failed to parse binary data file, because it is still brotli-compressed and should have been uncompressed by the browser. Web server has likely provided brotli-compressed data without specifying the HTTP Response Header "Content-Encoding: br" with it to instruct the browser to decompress it. Please verify your web server hosting configuration.';
                            throw t
                        }
                        var a = "UnityWebData1.0\0",
                            i = t.decode(e.subarray(0, 16)),
                            c = (i != a && o('Unknown data format (id="' + i + '")'), n += 16, r());
                        for (n + c > e.length && o("Invalid binary data file header! (pos=" + n + ", headerSize=" + c + ", file length=" + e.length + ")"); n < c;) {
                            var l = r(),
                                u = r(),
                                h = (l + u > e.length && o("Invalid binary data file size! (offset=" + l + ", size=" + u + ", file length=" + e.length + ")"), r()),
                                f = (n + h > e.length && o("Invalid binary data file path name! (pos=" + n + ", length=" + h + ", file length=" + e.length + ")"), t.decode(e.subarray(n, n + h)));
                            n += h;
                            for (var p = 0, m = f.indexOf("/", p) + 1; 0 < m; p = m, m = f.indexOf("/", p) + 1) s.FS_createPath(f.substring(0, p), f.substring(p, m - 1), !0, !0);
                            s.FS_createDataFile(f, null, e.subarray(l, l + u), !0, !0, !0)
                        }
                        s.removeRunDependency("dataUrl"), s.dataUrlLoadEndTime = performance.now() - d
                    }))
                }))
            }()
        }))) : t("Your browser does not support WebAssembly 2023. Please update to Chrome ≥ 91 (May 2021), Firefox ≥ 89 (June 2021) or Safari ≥ 16.4 (March 2023). (failed " + s.SystemInfo.missingWasm2023Feature + ")") : t("Your browser does not support WebAssembly.") : t("Your browser does not support WebGL.")
    }))
}