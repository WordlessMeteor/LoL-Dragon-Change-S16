var unityFramework = (() => {
    var e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return function(r = {}) {
        var t, n, o = void 0 !== r ? r : {};
        o.ready = new Promise(((e, r) => {
            t = e, n = r
        }));
        var a = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)",
            i = jt().match(new RegExp(a));
        i && (o.stackTraceRegExp = new RegExp(a.replace("([^\\n]+)", i[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+")));
        var s = function(e) {
            if (!V) {
                V = !0, F = 1, "undefined" != typeof ENVIRONMENT_IS_PTHREAD && ENVIRONMENT_IS_PTHREAD && console.error("Pthread aborting at " + (new Error).stack), void 0 !== e ? (B(e), P(e), e = e instanceof Error ? e.toString() : JSON.stringify(e)) : e = "";
                var r = "abort(" + e + ") at " + Lo();
                if (!o.abortHandler || !o.abortHandler(r)) throw r
            }
        };
        o.SetFullscreen = function(e) {
            if (void 0 !== $ && $)
                if (void 0 === ht) console.log("Player not loaded yet.");
                else {
                    var r = ht.canPerformEventHandlerRequests;
                    ht.canPerformEventHandlerRequests = function() {
                        return 1
                    }, o.ccall("SetFullscreen", null, ["number"], [e]), ht.canPerformEventHandlerRequests = r
                }
            else console.log("Runtime not initialized yet.")
        }, o.ENVIRONMENT_IS_PTHREAD || o.preRun.push((function() {
            Br.queuePersist = function(e) {
                function r() {
                    "again" === e.idbPersistState ? t() : e.idbPersistState = 0
                }

                function t() {
                    e.idbPersistState = "idb", Br.syncfs(e, !1, r)
                }
                e.idbPersistState ? "idb" === e.idbPersistState && (e.idbPersistState = "again") : e.idbPersistState = setTimeout(t, 0)
            }, Br.mount = function(e) {
                var r = _r.mount(e);
                if (void 0 !== e && e.opts && e.opts.autoPersist) {
                    r.idbPersistState = 0;
                    var t = r.node_ops;
                    r.node_ops = Object.assign({}, r.node_ops), r.node_ops.mknod = function(e, n, o, a) {
                        var i = t.mknod(e, n, o, a);
                        return i.node_ops = r.node_ops, i.idbfs_mount = r.mount, i.memfs_stream_ops = i.stream_ops, i.stream_ops = Object.assign({}, i.stream_ops), i.stream_ops.write = function(e, r, t, n, o, a) {
                            return e.node.isModified = !0, i.memfs_stream_ops.write(e, r, t, n, o, a)
                        }, i.stream_ops.close = function(e) {
                            var r = e.node;
                            if (r.isModified && (Br.queuePersist(r.idbfs_mount), r.isModified = !1), r.memfs_stream_ops.close) return r.memfs_stream_ops.close(e)
                        }, i
                    }, r.node_ops.rmdir = function(e, n) {
                        return Br.queuePersist(r.mount), t.rmdir(e, n)
                    }, r.node_ops.unlink = function(e, n) {
                        return Br.queuePersist(r.mount), t.unlink(e, n)
                    }, r.node_ops.mkdir = function(e, n) {
                        return Br.queuePersist(r.mount), t.mkdir(e, n)
                    }, r.node_ops.symlink = function(e, n, o) {
                        return Br.queuePersist(r.mount), t.symlink(e, n, o)
                    }, r.node_ops.rename = function(e, n, o) {
                        return Br.queuePersist(r.mount), t.rename(e, n, o)
                    }
                }
                return r
            };
            var e = o.unityFileSystemInit || function() {
                Pr.mkdir("/idbfs"), o.__unityIdbfsMount = Pr.mount(Br, {
                    autoPersist: !!o.autoSyncPersistentDataPath
                }, "/idbfs"), o.addRunDependency("JS_FileSystem_Mount"), Pr.syncfs(!0, (function(e) {
                    e && console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved."), o.removeRunDependency("JS_FileSystem_Mount")
                }))
            };
            e()
        }));
        var u = [];

        function c(e) {
            !0, u = [];
            var r = {},
                t = [];
            e.forEach((function(e) {
                if ("videoinput" === e.kind) {
                    var n = function(e) {
                        for (var r = Object.keys(u), t = 0; t < r.length; ++t)
                            if ((n = u[r[t]]).deviceId && n.deviceId == e.deviceId) return n;
                        for (t = 0; t < r.length; ++t)
                            if ((n = u[r[t]]) == e) return n;
                        for (t = 0; t < r.length; ++t)
                            if ((n = u[r[t]]).label && n.label == e.label) return n;
                        for (t = 0; t < r.length; ++t) {
                            var n;
                            if ((n = u[r[t]]).groupId && n.kind && n.groupId == e.groupId && n.kind == e.kind) return n
                        }
                    }(e);
                    n ? r[n.id] = n : t.push(e)
                }
            })), u = r, t.forEach((function(e) {
                e.id || (e.id = function() {
                    for (var e = 0;; ++e)
                        if (!u[e]) return e
                }(), e.name = e.label || "Video input #" + (e.id + 1), e.isFrontFacing = e.name.toLowerCase().includes("front") || !e.name.toLowerCase().includes("front") && !e.name.toLowerCase().includes("back"), u[e.id] = e)
            }))
        }
        var f, l = !0;

        function d() {
            if (l) {
                l = !1;
                try {
                    ae("enumerateMediaDevices")
                } catch (e) {
                    o.startupErrorHandler(e)
                }
            }
        }

        function m() {
            u && navigator.mediaDevices.enumerateDevices().then((function(e) {
                c(e), d()
            })).catch((function(e) {
                console.warn("Unable to enumerate media devices: " + e + "\nWebcams will not be available."), p()
            }))
        }

        function p() {
            navigator.mediaDevices && navigator.mediaDevices.removeEventListener && navigator.mediaDevices.removeEventListener("devicechange", m), u = null
        }

        function v(e, r, t) {
            var n = We(r),
                o = We(e),
                a = 0;
            try {
                if (void 0 === t) Ho(o, n);
                else if ("string" == typeof t) a = We(t), Vo(o, n, a);
                else {
                    if ("number" != typeof t) throw t + " is does not have a type which is supported by SendMessage.";
                    Wo(o, n, t)
                }
            } finally {
                Qo(a), Qo(o), Qo(n)
            }
        }
        o.disableAccessToMediaDevices = p, o.ENVIRONMENT_IS_PTHREAD || (navigator.mediaDevices ? setTimeout((function() {
            try {
                oe("enumerateMediaDevices"), m(), navigator.mediaDevices.addEventListener("devicechange", m), setTimeout(d, 1e3)
            } catch (e) {
                console.warn("Unable to enumerate media devices: " + e), p()
            }
        }), 0) : (console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + ("https:" == location.protocol ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used.")), p())), o.SendMessage = v;
        var g = new Promise((function(e) {
            f = e
        }));
        o.WebPlayer = {
            PlayerIsInitialized: f,
            WaitForInitialization: function() {
                return g
            }
        };
        var h, y, b, w = Object.assign({}, o),
            E = [],
            k = "./this.program",
            x = (e, r) => {
                throw r
            },
            S = !0,
            _ = !1,
            C = "";
        (S || _) && (_ ? C = self.location.href : "undefined" != typeof document && document.currentScript && (C = document.currentScript.src), e && (C = e), C = 0 !== C.indexOf("blob:") ? C.substr(0, C.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", h = e => {
            var r = new XMLHttpRequest;
            return r.open("GET", e, !1), r.send(null), r.responseText
        }, _ && (b = e => {
            var r = new XMLHttpRequest;
            return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
        }), y = (e, r, t) => {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = () => {
                200 == n.status || 0 == n.status && n.response ? r(n.response) : t()
            }, n.onerror = t, n.send(null)
        });
        var L, B = o.print || console.log.bind(console),
            P = o.printErr || console.error.bind(console);
        Object.assign(o, w), w = null, o.arguments && (E = o.arguments), o.thisProgram && (k = o.thisProgram), o.quit && (x = o.quit), o.wasmBinary && (L = o.wasmBinary);
        var A, D = o.noExitRuntime || !0;
        "object" != typeof WebAssembly && s("no native wasm support detected");
        var F, M, R, T, I, N, O, U, z, G, q, W, V = !1;

        function H(e, r) {
            e || s(r)
        }

        function j() {
            var e = A.buffer;
            o.HEAP8 = M = new Int8Array(e), o.HEAP16 = T = new Int16Array(e), o.HEAP32 = N = new Int32Array(e), o.HEAPU8 = R = new Uint8Array(e), o.HEAPU16 = I = new Uint16Array(e), o.HEAPU32 = O = new Uint32Array(e), o.HEAPF32 = U = new Float32Array(e), o.HEAPF64 = q = new Float64Array(e), o.HEAP64 = z = new BigInt64Array(e), o.HEAPU64 = G = new BigUint64Array(e)
        }
        var Y = [],
            X = [],
            K = [],
            Z = [],
            J = [],
            $ = !1,
            Q = 0;

        function ee() {
            return D || Q > 0
        }
        var re = 0,
            te = null,
            ne = null;

        function oe(e) {
            re++, o.monitorRunDependencies && o.monitorRunDependencies(re)
        }

        function ae(e) {
            if (re--, o.monitorRunDependencies && o.monitorRunDependencies(re), 0 == re && (null !== te && (clearInterval(te), te = null), ne)) {
                var r = ne;
                ne = null, r()
            }
        }

        function s(e) {
            o.onAbort && o.onAbort(e), P(e = "Aborted(" + e + ")"), V = !0, F = 1, e += ". Build with -sASSERTIONS for more info.", $ && ra();
            var r = new WebAssembly.RuntimeError(e);
            throw n(r), r
        }
        var ie, se, ue = "data:application/octet-stream;base64,";

        function ce(e) {
            return e.startsWith(ue)
        }

        function fe(e) {
            try {
                if (e == ie && L) return new Uint8Array(L);
                if (b) return b(e);
                throw "both async and sync fetching of the wasm failed"
            } catch (e) {
                s(e)
            }
        }

        function le(e, r, t) {
            return function(e) {
                return L || !S && !_ || "function" != typeof fetch ? Promise.resolve().then((() => fe(e))) : fetch(e, {
                    credentials: "same-origin"
                }).then((r => {
                    if (!r.ok) throw "failed to load wasm binary file at '" + e + "'";
                    return r.arrayBuffer()
                })).catch((() => fe(e)))
            }(e).then((e => WebAssembly.instantiate(e, r))).then((e => e)).then(t, (e => {
                P("failed to asynchronously prepare wasm: " + e), s(e)
            }))
        }

        function de(e) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
        }

        function me(e) {
            for (; e.length > 0;) e.shift()(o)
        }
        ce(ie = "build.wasm") || (se = ie, ie = o.locateFile ? o.locateFile(se, C) : C + se);
        var pe = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

        function ve(e, r, t) {
            for (var n = r + t, o = r; e[o] && !(o >= n);) ++o;
            if (o - r > 16 && e.buffer && pe) return pe.decode(e.subarray(r, o));
            for (var a = ""; r < o;) {
                var i = e[r++];
                if (128 & i) {
                    var s = 63 & e[r++];
                    if (192 != (224 & i)) {
                        var u = 63 & e[r++];
                        if ((i = 224 == (240 & i) ? (15 & i) << 12 | s << 6 | u : (7 & i) << 18 | s << 12 | u << 6 | 63 & e[r++]) < 65536) a += String.fromCharCode(i);
                        else {
                            var c = i - 65536;
                            a += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                        }
                    } else a += String.fromCharCode((31 & i) << 6 | s)
                } else a += String.fromCharCode(i)
            }
            return a
        }

        function ge(e, r) {
            return e ? ve(R, e, r) : ""
        }
        var he = null,
            ye = 0;
        var be = 1,
            we = {
                x: 0,
                y: 0,
                z: 0
            },
            Ee = [];

        function ke(e) {
            var r = Ee[e];
            return r || (e >= Ee.length && (Ee.length = e + 1), Ee[e] = r = W.get(e)), r
        }

        function xe() {
            we = {
                x: he.x * be,
                y: he.y * be,
                z: he.z * be
            }, 0 != ye && ke(ye)(we.x, we.y, we.z)
        }
        var Se = 0,
            _e = 0,
            Ce = 0,
            Le = 0,
            Be = 0;

        function Pe(e, r) {
            var t = {
                    x: e.x - r.x,
                    y: e.y - r.y,
                    z: e.z - r.z
                },
                n = t.x * t.x + t.y * t.y + t.z * t.z,
                o = {
                    x: e.x + r.x,
                    y: e.y + r.y,
                    z: e.z + r.z
                };
            return n <= o.x * o.x + o.y * o.y + o.z * o.z ? t : o
        }

        function Ae(e) {
            var r = {
                x: e.accelerationIncludingGravity.x * be,
                y: e.accelerationIncludingGravity.y * be,
                z: e.accelerationIncludingGravity.z * be
            };
            0 != ye && ke(ye)(r.x, r.y, r.z);
            var t = {
                x: e.acceleration.x * be,
                y: e.acceleration.y * be,
                z: e.acceleration.z * be
            };
            if (0 != Ce && ke(Ce)(t.x, t.y, t.z), 0 != Le) {
                var n = Pe(r, t);
                ke(Le)(n.x, n.y, n.z)
            }
            if (0 != Be) {
                var o = Math.PI / 180;
                ke(Be)(e.rotationRate.alpha * o, e.rotationRate.beta * o, e.rotationRate.gamma * o)
            }
        }
        var De = 0;

        function Fe(e) {
            1 & e && "function" == typeof DeviceOrientationEvent.requestPermission && DeviceOrientationEvent.requestPermission().then((function(e) {
                "granted" === e ? De &= -2 : Tr("DeviceOrientationEvent permission not granted")
            })).catch((function(e) {
                Tr(e), De |= 1
            })), 2 & e && "function" == typeof DeviceMotionEvent.requestPermission && DeviceMotionEvent.requestPermission().then((function(e) {
                "granted" === e ? De &= -3 : Tr("DeviceMotionEvent permission not granted")
            })).catch((function(e) {
                Tr(e), De |= 2
            }))
        }

        function Me() {
            0 == ye && 0 == Ce && 0 == Le && 0 == Be && (Fe(2), window.addEventListener("devicemotion", Ae))
        }

        function Re() {
            var e = 9.80665;
            be = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / e : -1 / e
        }

        function Te(e, r) {
            if (Re(), "undefined" == typeof Accelerometer) return Me(), void(0 != e && (ye = e));

            function t(e) {
                (he = new Accelerometer({
                    frequency: e,
                    referenceFrame: "device"
                })).addEventListener("reading", xe), he.addEventListener("error", (function(e) {
                    Tr(e.error ? e.error : e)
                })), he.start(), _e = e
            }
            0 != e && (ye = e), he ? _e != r && (he.stop(), he.removeEventListener("reading", xe), t(r)) : 0 != Se ? Se = r : (Se = r, navigator.permissions.query({
                name: "accelerometer"
            }).then((function(e) {
                "granted" === e.state ? t(Se) : Tr("No permission to use Accelerometer."), Se = 0
            })))
        }

        function Ie() {
            0 == ye && 0 == Ce && 0 == Le && 0 == Be && window.removeEventListener("devicemotion", lr)
        }

        function Ne() {
            he ? ("undefined" == typeof GravitySensor && 0 != Le || (he.stop(), he.removeEventListener("reading", xe), he = null), ye = 0, _e = 0) : 0 != ye && (ye = 0, Ie())
        }
        var Oe = 0;

        function Ue() {
            var e, r = o.canvas ? o.canvas.id : "unity-canvas";
            return "#" + (e = r, void 0 !== window.CSS && void 0 !== window.CSS.escape ? window.CSS.escape(e) : e.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1"))
        }

        function ze(e) {
            for (var r = 0, t = 0; t < e.length; ++t) {
                var n = e.charCodeAt(t);
                n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++t) : r += 3
            }
            return r
        }

        function Ge(e, r, t, n) {
            if (!(n > 0)) return 0;
            for (var o = t, a = t + n - 1, i = 0; i < e.length; ++i) {
                var s = e.charCodeAt(i);
                if (s >= 55296 && s <= 57343) s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++i);
                if (s <= 127) {
                    if (t >= a) break;
                    r[t++] = s
                } else if (s <= 2047) {
                    if (t + 1 >= a) break;
                    r[t++] = 192 | s >> 6, r[t++] = 128 | 63 & s
                } else if (s <= 65535) {
                    if (t + 2 >= a) break;
                    r[t++] = 224 | s >> 12, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | 63 & s
                } else {
                    if (t + 3 >= a) break;
                    r[t++] = 240 | s >> 18, r[t++] = 128 | s >> 12 & 63, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | 63 & s
                }
            }
            return r[t] = 0, t - o
        }

        function qe(e, r, t) {
            return Ge(e, R, r, t)
        }

        function We(e) {
            var r = ze(e) + 1,
                t = $o(r);
            return t && qe(e, t, r), t
        }
        var Ve = null;

        function He() {
            0 != Le && ke(Le)(Ve.x * be, Ve.y * be, Ve.z * be)
        }
        var je = 0,
            Ye = null;

        function Xe() {
            var e = {
                x: Ye.x * be,
                y: Ye.y * be,
                z: Ye.z * be
            };
            if (0 != Ce && ke(Ce)(e.x, e.y, e.z), 0 != Le && "undefined" == typeof GravitySensor) {
                var r = Pe(we, e);
                ke(Le)(r.x, r.y, r.z)
            }
        }
        var Ke = 0,
            Ze = 0;

        function Je(e, r) {
            if (Re(), "undefined" == typeof LinearAccelerationSensor) return Me(), void(0 != e && (Ce = e));

            function t(e) {
                (Ye = new LinearAccelerationSensor({
                    frequency: e,
                    referenceFrame: "device"
                })).addEventListener("reading", Xe), Ye.addEventListener("error", (function(e) {
                    Tr(e.error ? e.error : e)
                })), Ye.start(), Ze = e
            }
            0 != e && (Ce = e), Ye ? Ze != r && (Ye.stop(), Ye.removeEventListener("reading", Xe), t(r)) : 0 != Ke ? Ke = r : (Ke = r, navigator.permissions.query({
                name: "accelerometer"
            }).then((function(e) {
                "granted" === e.state ? t(Ke) : Tr("No permission to use LinearAccelerationSensor."), Ke = 0
            })))
        }

        function $e() {
            Ye ? ("undefined" == typeof GravitySensor && 0 != Le || (Ye.stop(), Ye.removeEventListener("reading", Xe), Ye = null), Ce = 0, Ze = 0) : 0 != Ce && (Ce = 0, Ie())
        }
        var Qe = null;

        function er() {
            0 != Be && ke(Be)(Qe.x, Qe.y, Qe.z)
        }
        var rr = 0;
        var tr = null,
            nr = null,
            or = null;
        var ar = !1;

        function ir(e) {
            if (!tr)
                if (ar = !0, e) {
                    tr = setTimeout(r, 200)
                } else r();

            function r() {
                or && or.input && (nr = or.input.value, or.input = null, or.parentNode && or.parentNode && or.parentNode.removeChild(or)), or = null, tr = null, setTimeout((function() {
                    ar = !1
                }), 100)
            }
        }
        var sr = null,
            ur = 0;

        function cr() {
            0 != ur && ke(ur)(sr.quaternion[0], sr.quaternion[1], sr.quaternion[2], sr.quaternion[3])
        }
        var fr = 0;

        function lr(e) {
            if (ur) {
                var r = Math.PI / 180,
                    t = e.beta * r,
                    n = e.gamma * r,
                    o = e.alpha * r,
                    a = Math.cos(t / 2),
                    i = Math.sin(t / 2),
                    s = Math.cos(n / 2),
                    u = Math.sin(n / 2),
                    c = Math.cos(o / 2),
                    f = Math.sin(o / 2),
                    l = i * s * c - a * u * f,
                    d = a * u * c + i * s * f,
                    m = a * s * f + i * u * c,
                    p = a * s * c - i * u * f;
                ke(ur)(l, d, m, p)
            }
        }
        var dr = 0;

        function mr() {
            dr && ke(dr)(window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation)
        }
        var pr = -1,
            vr = -1,
            gr = -1;

        function hr(e) {
            if (e instanceof de || "unwind" == e) return F;
            x(1, e)
        }
        var yr = {
            isAbs: e => "/" === e.charAt(0),
            splitPath: e => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
            normalizeArray: (e, r) => {
                for (var t = 0, n = e.length - 1; n >= 0; n--) {
                    var o = e[n];
                    "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--)
                }
                if (r)
                    for (; t; t--) e.unshift("..");
                return e
            },
            normalize: e => {
                var r = yr.isAbs(e),
                    t = "/" === e.substr(-1);
                return (e = yr.normalizeArray(e.split("/").filter((e => !!e)), !r).join("/")) || r || (e = "."), e && t && (e += "/"), (r ? "/" : "") + e
            },
            dirname: e => {
                var r = yr.splitPath(e),
                    t = r[0],
                    n = r[1];
                return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : "."
            },
            basename: e => {
                if ("/" === e) return "/";
                var r = (e = (e = yr.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                return -1 === r ? e : e.substr(r + 1)
            },
            join: function() {
                var e = Array.prototype.slice.call(arguments);
                return yr.normalize(e.join("/"))
            },
            join2: (e, r) => yr.normalize(e + "/" + r)
        };

        function br(e) {
            return (br = function() {
                if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return e => crypto.getRandomValues(e);
                s("initRandomDevice")
            }())(e)
        }
        var wr = {
            resolve: function() {
                for (var e = "", r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
                    var n = t >= 0 ? arguments[t] : Pr.cwd();
                    if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
                    if (!n) return "";
                    e = n + "/" + e, r = yr.isAbs(n)
                }
                return (r ? "/" : "") + (e = yr.normalizeArray(e.split("/").filter((e => !!e)), !r).join("/")) || "."
            },
            relative: (e, r) => {
                function t(e) {
                    for (var r = 0; r < e.length && "" === e[r]; r++);
                    for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
                    return r > t ? [] : e.slice(r, t - r + 1)
                }
                e = wr.resolve(e).substr(1), r = wr.resolve(r).substr(1);
                for (var n = t(e.split("/")), o = t(r.split("/")), a = Math.min(n.length, o.length), i = a, s = 0; s < a; s++)
                    if (n[s] !== o[s]) {
                        i = s;
                        break
                    } var u = [];
                for (s = i; s < n.length; s++) u.push("..");
                return (u = u.concat(o.slice(i))).join("/")
            }
        };

        function Er(e, r, t) {
            var n = t > 0 ? t : ze(e) + 1,
                o = new Array(n),
                a = Ge(e, o, 0, o.length);
            return r && (o.length = a), o
        }
        var kr = {
            ttys: [],
            init: function() {},
            shutdown: function() {},
            register: function(e, r) {
                kr.ttys[e] = {
                    input: [],
                    output: [],
                    ops: r
                }, Pr.registerDevice(e, kr.stream_ops)
            },
            stream_ops: {
                open: function(e) {
                    var r = kr.ttys[e.node.rdev];
                    if (!r) throw new Pr.ErrnoError(43);
                    e.tty = r, e.seekable = !1
                },
                close: function(e) {
                    e.tty.ops.fsync(e.tty)
                },
                fsync: function(e) {
                    e.tty.ops.fsync(e.tty)
                },
                read: function(e, r, t, n, o) {
                    if (!e.tty || !e.tty.ops.get_char) throw new Pr.ErrnoError(60);
                    for (var a = 0, i = 0; i < n; i++) {
                        var s;
                        try {
                            s = e.tty.ops.get_char(e.tty)
                        } catch (e) {
                            throw new Pr.ErrnoError(29)
                        }
                        if (void 0 === s && 0 === a) throw new Pr.ErrnoError(6);
                        if (null == s) break;
                        a++, r[t + i] = s
                    }
                    return a && (e.node.timestamp = Date.now()), a
                },
                write: function(e, r, t, n, o) {
                    if (!e.tty || !e.tty.ops.put_char) throw new Pr.ErrnoError(60);
                    try {
                        for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a])
                    } catch (e) {
                        throw new Pr.ErrnoError(29)
                    }
                    return n && (e.node.timestamp = Date.now()), a
                }
            },
            default_tty_ops: {
                get_char: function(e) {
                    if (!e.input.length) {
                        var r = null;
                        if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (r = window.prompt("Input: ")) && (r += "\n") : "function" == typeof readline && null !== (r = readline()) && (r += "\n"), !r) return null;
                        e.input = Er(r, !0)
                    }
                    return e.input.shift()
                },
                put_char: function(e, r) {
                    null === r || 10 === r ? (B(ve(e.output, 0)), e.output = []) : 0 != r && e.output.push(r)
                },
                fsync: function(e) {
                    e.output && e.output.length > 0 && (B(ve(e.output, 0)), e.output = [])
                }
            },
            default_tty1_ops: {
                put_char: function(e, r) {
                    null === r || 10 === r ? (P(ve(e.output, 0)), e.output = []) : 0 != r && e.output.push(r)
                },
                fsync: function(e) {
                    e.output && e.output.length > 0 && (P(ve(e.output, 0)), e.output = [])
                }
            }
        };

        function xr(e, r) {
            return R.fill(0, e, e + r), e
        }

        function Sr(e) {
            e = function(e, r) {
                return Math.ceil(e / r) * r
            }(e, 65536);
            var r = ea(65536, e);
            return r ? xr(r, e) : 0
        }
        var _r = {
            ops_table: null,
            mount: function(e) {
                return _r.createNode(null, "/", 16895, 0)
            },
            createNode: function(e, r, t, n) {
                if (Pr.isBlkdev(t) || Pr.isFIFO(t)) throw new Pr.ErrnoError(63);
                _r.ops_table || (_r.ops_table = {
                    dir: {
                        node: {
                            getattr: _r.node_ops.getattr,
                            setattr: _r.node_ops.setattr,
                            lookup: _r.node_ops.lookup,
                            mknod: _r.node_ops.mknod,
                            rename: _r.node_ops.rename,
                            unlink: _r.node_ops.unlink,
                            rmdir: _r.node_ops.rmdir,
                            readdir: _r.node_ops.readdir,
                            symlink: _r.node_ops.symlink
                        },
                        stream: {
                            llseek: _r.stream_ops.llseek
                        }
                    },
                    file: {
                        node: {
                            getattr: _r.node_ops.getattr,
                            setattr: _r.node_ops.setattr
                        },
                        stream: {
                            llseek: _r.stream_ops.llseek,
                            read: _r.stream_ops.read,
                            write: _r.stream_ops.write,
                            allocate: _r.stream_ops.allocate,
                            mmap: _r.stream_ops.mmap,
                            msync: _r.stream_ops.msync
                        }
                    },
                    link: {
                        node: {
                            getattr: _r.node_ops.getattr,
                            setattr: _r.node_ops.setattr,
                            readlink: _r.node_ops.readlink
                        },
                        stream: {}
                    },
                    chrdev: {
                        node: {
                            getattr: _r.node_ops.getattr,
                            setattr: _r.node_ops.setattr
                        },
                        stream: Pr.chrdev_stream_ops
                    }
                });
                var o = Pr.createNode(e, r, t, n);
                return Pr.isDir(o.mode) ? (o.node_ops = _r.ops_table.dir.node, o.stream_ops = _r.ops_table.dir.stream, o.contents = {}) : Pr.isFile(o.mode) ? (o.node_ops = _r.ops_table.file.node, o.stream_ops = _r.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : Pr.isLink(o.mode) ? (o.node_ops = _r.ops_table.link.node, o.stream_ops = _r.ops_table.link.stream) : Pr.isChrdev(o.mode) && (o.node_ops = _r.ops_table.chrdev.node, o.stream_ops = _r.ops_table.chrdev.stream), o.timestamp = Date.now(), e && (e.contents[r] = o, e.timestamp = o.timestamp), o
            },
            getFileDataAsTypedArray: function(e) {
                return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
            },
            expandFileStorage: function(e, r) {
                var t = e.contents ? e.contents.length : 0;
                if (!(t >= r)) {
                    r = Math.max(r, t * (t < 1048576 ? 2 : 1.125) >>> 0), 0 != t && (r = Math.max(r, 256));
                    var n = e.contents;
                    e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0)
                }
            },
            resizeFileStorage: function(e, r) {
                if (e.usedBytes != r)
                    if (0 == r) e.contents = null, e.usedBytes = 0;
                    else {
                        var t = e.contents;
                        e.contents = new Uint8Array(r), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r
                    }
            },
            node_ops: {
                getattr: function(e) {
                    var r = {};
                    return r.dev = Pr.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, Pr.isDir(e.mode) ? r.size = 4096 : Pr.isFile(e.mode) ? r.size = e.usedBytes : Pr.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.timestamp), r.mtime = new Date(e.timestamp), r.ctime = new Date(e.timestamp), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r
                },
                setattr: function(e, r) {
                    void 0 !== r.mode && (e.mode = r.mode), void 0 !== r.timestamp && (e.timestamp = r.timestamp), void 0 !== r.size && _r.resizeFileStorage(e, r.size)
                },
                lookup: function(e, r) {
                    throw Pr.genericErrors[44]
                },
                mknod: function(e, r, t, n) {
                    return _r.createNode(e, r, t, n)
                },
                rename: function(e, r, t) {
                    if (Pr.isDir(e.mode)) {
                        var n;
                        try {
                            n = Pr.lookupNode(r, t)
                        } catch (e) {}
                        if (n)
                            for (var o in n.contents) throw new Pr.ErrnoError(55)
                    }
                    delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = t, r.contents[t] = e, r.timestamp = e.parent.timestamp, e.parent = r
                },
                unlink: function(e, r) {
                    delete e.contents[r], e.timestamp = Date.now()
                },
                rmdir: function(e, r) {
                    var t = Pr.lookupNode(e, r);
                    for (var n in t.contents) throw new Pr.ErrnoError(55);
                    delete e.contents[r], e.timestamp = Date.now()
                },
                readdir: function(e) {
                    var r = [".", ".."];
                    for (var t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
                    return r
                },
                symlink: function(e, r, t) {
                    var n = _r.createNode(e, r, 41471, 0);
                    return n.link = t, n
                },
                readlink: function(e) {
                    if (!Pr.isLink(e.mode)) throw new Pr.ErrnoError(28);
                    return e.link
                }
            },
            stream_ops: {
                read: function(e, r, t, n, o) {
                    var a = e.node.contents;
                    if (o >= e.node.usedBytes) return 0;
                    var i = Math.min(e.node.usedBytes - o, n);
                    if (i > 8 && a.subarray) r.set(a.subarray(o, o + i), t);
                    else
                        for (var s = 0; s < i; s++) r[t + s] = a[o + s];
                    return i
                },
                write: function(e, r, t, n, o, a) {
                    if (r.buffer === M.buffer && (a = !1), !n) return 0;
                    var i = e.node;
                    if (i.timestamp = Date.now(), r.subarray && (!i.contents || i.contents.subarray)) {
                        if (a) return i.contents = r.subarray(t, t + n), i.usedBytes = n, n;
                        if (0 === i.usedBytes && 0 === o) return i.contents = r.slice(t, t + n), i.usedBytes = n, n;
                        if (o + n <= i.usedBytes) return i.contents.set(r.subarray(t, t + n), o), n
                    }
                    if (_r.expandFileStorage(i, o + n), i.contents.subarray && r.subarray) i.contents.set(r.subarray(t, t + n), o);
                    else
                        for (var s = 0; s < n; s++) i.contents[o + s] = r[t + s];
                    return i.usedBytes = Math.max(i.usedBytes, o + n), n
                },
                llseek: function(e, r, t) {
                    var n = r;
                    if (1 === t ? n += e.position : 2 === t && Pr.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new Pr.ErrnoError(28);
                    return n
                },
                allocate: function(e, r, t) {
                    _r.expandFileStorage(e.node, r + t), e.node.usedBytes = Math.max(e.node.usedBytes, r + t)
                },
                mmap: function(e, r, t, n, o) {
                    if (!Pr.isFile(e.node.mode)) throw new Pr.ErrnoError(43);
                    var a, i, s = e.node.contents;
                    if (2 & o || s.buffer !== M.buffer) {
                        if ((t > 0 || t + r < s.length) && (s = s.subarray ? s.subarray(t, t + r) : Array.prototype.slice.call(s, t, t + r)), i = !0, !(a = Sr(r))) throw new Pr.ErrnoError(48);
                        M.set(s, a)
                    } else i = !1, a = s.byteOffset;
                    return {
                        ptr: a,
                        allocated: i
                    }
                },
                msync: function(e, r, t, n, o) {
                    return _r.stream_ops.write(e, r, 0, n, t, !1), 0
                }
            }
        };
        var Cr = o.preloadPlugins || [];

        function Lr(e, r) {
            var t = 0;
            return e && (t |= 365), r && (t |= 146), t
        }
        var Br = {
                dbs: {},
                indexedDB: () => {
                    if ("undefined" != typeof indexedDB) return indexedDB;
                    var e = null;
                    return "object" == typeof window && (e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), H(e, "IDBFS used, but indexedDB not supported"), e
                },
                DB_VERSION: 21,
                DB_STORE_NAME: "FILE_DATA",
                mount: function(e) {
                    return _r.mount.apply(null, arguments)
                },
                syncfs: (e, r, t) => {
                    Br.getLocalSet(e, ((n, o) => {
                        if (n) return t(n);
                        Br.getRemoteSet(e, ((e, n) => {
                            if (e) return t(e);
                            var a = r ? n : o,
                                i = r ? o : n;
                            Br.reconcile(a, i, t)
                        }))
                    }))
                },
                quit: () => {
                    Object.values(Br.dbs).forEach((e => e.close())), Br.dbs = {}
                },
                getDB: (e, r) => {
                    var t, n = Br.dbs[e];
                    if (n) return r(null, n);
                    try {
                        t = Br.indexedDB().open(e, Br.DB_VERSION)
                    } catch (e) {
                        return r(e)
                    }
                    if (!t) return r("Unable to connect to IndexedDB");
                    t.onupgradeneeded = e => {
                        var r, t = e.target.result,
                            n = e.target.transaction;
                        (r = t.objectStoreNames.contains(Br.DB_STORE_NAME) ? n.objectStore(Br.DB_STORE_NAME) : t.createObjectStore(Br.DB_STORE_NAME)).indexNames.contains("timestamp") || r.createIndex("timestamp", "timestamp", {
                            unique: !1
                        })
                    }, t.onsuccess = () => {
                        n = t.result, Br.dbs[e] = n, r(null, n)
                    }, t.onerror = e => {
                        r(this.error), e.preventDefault()
                    }
                },
                getLocalSet: (e, r) => {
                    var t = {};

                    function n(e) {
                        return "." !== e && ".." !== e
                    }

                    function o(e) {
                        return r => yr.join2(e, r)
                    }
                    for (var a = Pr.readdir(e.mountpoint).filter(n).map(o(e.mountpoint)); a.length;) {
                        var i, s = a.pop();
                        try {
                            i = Pr.stat(s)
                        } catch (e) {
                            return r(e)
                        }
                        Pr.isDir(i.mode) && a.push.apply(a, Pr.readdir(s).filter(n).map(o(s))), t[s] = {
                            timestamp: i.mtime
                        }
                    }
                    return r(null, {
                        type: "local",
                        entries: t
                    })
                },
                getRemoteSet: (e, r) => {
                    var t = {};
                    Br.getDB(e.mountpoint, ((e, n) => {
                        if (e) return r(e);
                        try {
                            var o = n.transaction([Br.DB_STORE_NAME], "readonly");
                            o.onerror = e => {
                                r(this.error), e.preventDefault()
                            }, o.objectStore(Br.DB_STORE_NAME).index("timestamp").openKeyCursor().onsuccess = e => {
                                var o = e.target.result;
                                if (!o) return r(null, {
                                    type: "remote",
                                    db: n,
                                    entries: t
                                });
                                t[o.primaryKey] = {
                                    timestamp: o.key
                                }, o.continue()
                            }
                        } catch (e) {
                            return r(e)
                        }
                    }))
                },
                loadLocalEntry: (e, r) => {
                    var t, n;
                    try {
                        n = Pr.lookupPath(e).node, t = Pr.stat(e)
                    } catch (e) {
                        return r(e)
                    }
                    return Pr.isDir(t.mode) ? r(null, {
                        timestamp: t.mtime,
                        mode: t.mode
                    }) : Pr.isFile(t.mode) ? (n.contents = _r.getFileDataAsTypedArray(n), r(null, {
                        timestamp: t.mtime,
                        mode: t.mode,
                        contents: n.contents
                    })) : r(new Error("node type not supported"))
                },
                storeLocalEntry: (e, r, t) => {
                    try {
                        if (Pr.isDir(r.mode)) Pr.mkdirTree(e, r.mode);
                        else {
                            if (!Pr.isFile(r.mode)) return t(new Error("node type not supported"));
                            Pr.writeFile(e, r.contents, {
                                canOwn: !0
                            })
                        }
                        Pr.chmod(e, r.mode), Pr.utime(e, r.timestamp, r.timestamp)
                    } catch (e) {
                        return t(e)
                    }
                    t(null)
                },
                removeLocalEntry: (e, r) => {
                    try {
                        var t = Pr.stat(e);
                        Pr.isDir(t.mode) ? Pr.rmdir(e) : Pr.isFile(t.mode) && Pr.unlink(e)
                    } catch (e) {
                        return r(e)
                    }
                    r(null)
                },
                loadRemoteEntry: (e, r, t) => {
                    var n = e.get(r);
                    n.onsuccess = e => {
                        t(null, e.target.result)
                    }, n.onerror = e => {
                        t(this.error), e.preventDefault()
                    }
                },
                storeRemoteEntry: (e, r, t, n) => {
                    try {
                        var o = e.put(t, r)
                    } catch (e) {
                        return void n(e)
                    }
                    o.onsuccess = () => {
                        n(null)
                    }, o.onerror = e => {
                        n(this.error), e.preventDefault()
                    }
                },
                removeRemoteEntry: (e, r, t) => {
                    var n = e.delete(r);
                    n.onsuccess = () => {
                        t(null)
                    }, n.onerror = e => {
                        t(this.error), e.preventDefault()
                    }
                },
                reconcile: (e, r, t) => {
                    var n = 0,
                        o = [];
                    Object.keys(e.entries).forEach((function(t) {
                        var a = e.entries[t],
                            i = r.entries[t];
                        i && a.timestamp.getTime() == i.timestamp.getTime() || (o.push(t), n++)
                    }));
                    var a = [];
                    if (Object.keys(r.entries).forEach((function(r) {
                            e.entries[r] || (a.push(r), n++)
                        })), !n) return t(null);
                    var i = !1,
                        s = ("remote" === e.type ? e.db : r.db).transaction([Br.DB_STORE_NAME], "readwrite"),
                        u = s.objectStore(Br.DB_STORE_NAME);

                    function c(e) {
                        if (e && !i) return i = !0, t(e)
                    }
                    s.onerror = e => {
                        c(this.error), e.preventDefault()
                    }, s.oncomplete = e => {
                        i || t(null)
                    }, o.sort().forEach((e => {
                        "local" === r.type ? Br.loadRemoteEntry(u, e, ((r, t) => {
                            if (r) return c(r);
                            Br.storeLocalEntry(e, t, c)
                        })) : Br.loadLocalEntry(e, ((r, t) => {
                            if (r) return c(r);
                            Br.storeRemoteEntry(u, e, t, c)
                        }))
                    })), a.sort().reverse().forEach((e => {
                        "local" === r.type ? Br.removeLocalEntry(e, c) : Br.removeRemoteEntry(u, e, c)
                    }))
                }
            },
            Pr = {
                root: null,
                mounts: [],
                devices: {},
                streams: [],
                nextInode: 1,
                nameTable: null,
                currentPath: "/",
                initialized: !1,
                ignorePermissions: !0,
                ErrnoError: null,
                genericErrors: {},
                filesystems: null,
                syncFSRequests: 0,
                lookupPath: (e, r = {}) => {
                    if (!(e = wr.resolve(e))) return {
                        path: "",
                        node: null
                    };
                    if ((r = Object.assign({
                            follow_mount: !0,
                            recurse_count: 0
                        }, r)).recurse_count > 8) throw new Pr.ErrnoError(32);
                    for (var t = e.split("/").filter((e => !!e)), n = Pr.root, o = "/", a = 0; a < t.length; a++) {
                        var i = a === t.length - 1;
                        if (i && r.parent) break;
                        if (n = Pr.lookupNode(n, t[a]), o = yr.join2(o, t[a]), Pr.isMountpoint(n) && (!i || i && r.follow_mount) && (n = n.mounted.root), !i || r.follow)
                            for (var s = 0; Pr.isLink(n.mode);) {
                                var u = Pr.readlink(o);
                                if (o = wr.resolve(yr.dirname(o), u), n = Pr.lookupPath(o, {
                                        recurse_count: r.recurse_count + 1
                                    }).node, s++ > 40) throw new Pr.ErrnoError(32)
                            }
                    }
                    return {
                        path: o,
                        node: n
                    }
                },
                getPath: e => {
                    for (var r;;) {
                        if (Pr.isRoot(e)) {
                            var t = e.mount.mountpoint;
                            return r ? "/" !== t[t.length - 1] ? t + "/" + r : t + r : t
                        }
                        r = r ? e.name + "/" + r : e.name, e = e.parent
                    }
                },
                hashName: (e, r) => {
                    for (var t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;
                    return (e + t >>> 0) % Pr.nameTable.length
                },
                hashAddNode: e => {
                    var r = Pr.hashName(e.parent.id, e.name);
                    e.name_next = Pr.nameTable[r], Pr.nameTable[r] = e
                },
                hashRemoveNode: e => {
                    var r = Pr.hashName(e.parent.id, e.name);
                    if (Pr.nameTable[r] === e) Pr.nameTable[r] = e.name_next;
                    else
                        for (var t = Pr.nameTable[r]; t;) {
                            if (t.name_next === e) {
                                t.name_next = e.name_next;
                                break
                            }
                            t = t.name_next
                        }
                },
                lookupNode: (e, r) => {
                    var t = Pr.mayLookup(e);
                    if (t) throw new Pr.ErrnoError(t, e);
                    for (var n = Pr.hashName(e.id, r), o = Pr.nameTable[n]; o; o = o.name_next) {
                        var a = o.name;
                        if (o.parent.id === e.id && a === r) return o
                    }
                    return Pr.lookup(e, r)
                },
                createNode: (e, r, t, n) => {
                    var o = new Pr.FSNode(e, r, t, n);
                    return Pr.hashAddNode(o), o
                },
                destroyNode: e => {
                    Pr.hashRemoveNode(e)
                },
                isRoot: e => e === e.parent,
                isMountpoint: e => !!e.mounted,
                isFile: e => 32768 == (61440 & e),
                isDir: e => 16384 == (61440 & e),
                isLink: e => 40960 == (61440 & e),
                isChrdev: e => 8192 == (61440 & e),
                isBlkdev: e => 24576 == (61440 & e),
                isFIFO: e => 4096 == (61440 & e),
                isSocket: e => 49152 == (49152 & e),
                flagsToPermissionString: e => {
                    var r = ["r", "w", "rw"][3 & e];
                    return 512 & e && (r += "w"), r
                },
                nodePermissions: (e, r) => Pr.ignorePermissions || (!r.includes("r") || 292 & e.mode) && (!r.includes("w") || 146 & e.mode) && (!r.includes("x") || 73 & e.mode) ? 0 : 2,
                mayLookup: e => {
                    var r = Pr.nodePermissions(e, "x");
                    return r || (e.node_ops.lookup ? 0 : 2)
                },
                mayCreate: (e, r) => {
                    try {
                        Pr.lookupNode(e, r);
                        return 20
                    } catch (e) {}
                    return Pr.nodePermissions(e, "wx")
                },
                mayDelete: (e, r, t) => {
                    var n;
                    try {
                        n = Pr.lookupNode(e, r)
                    } catch (e) {
                        return e.errno
                    }
                    var o = Pr.nodePermissions(e, "wx");
                    if (o) return o;
                    if (t) {
                        if (!Pr.isDir(n.mode)) return 54;
                        if (Pr.isRoot(n) || Pr.getPath(n) === Pr.cwd()) return 10
                    } else if (Pr.isDir(n.mode)) return 31;
                    return 0
                },
                mayOpen: (e, r) => e ? Pr.isLink(e.mode) ? 32 : Pr.isDir(e.mode) && ("r" !== Pr.flagsToPermissionString(r) || 512 & r) ? 31 : Pr.nodePermissions(e, Pr.flagsToPermissionString(r)) : 44,
                MAX_OPEN_FDS: 4096,
                nextfd: (e = 0, r = Pr.MAX_OPEN_FDS) => {
                    for (var t = e; t <= r; t++)
                        if (!Pr.streams[t]) return t;
                    throw new Pr.ErrnoError(33)
                },
                getStream: e => Pr.streams[e],
                createStream: (e, r, t) => {
                    Pr.FSStream || (Pr.FSStream = function() {
                        this.shared = {}
                    }, Pr.FSStream.prototype = {}, Object.defineProperties(Pr.FSStream.prototype, {
                        object: {
                            get: function() {
                                return this.node
                            },
                            set: function(e) {
                                this.node = e
                            }
                        },
                        isRead: {
                            get: function() {
                                return 1 != (2097155 & this.flags)
                            }
                        },
                        isWrite: {
                            get: function() {
                                return 0 != (2097155 & this.flags)
                            }
                        },
                        isAppend: {
                            get: function() {
                                return 1024 & this.flags
                            }
                        },
                        flags: {
                            get: function() {
                                return this.shared.flags
                            },
                            set: function(e) {
                                this.shared.flags = e
                            }
                        },
                        position: {
                            get: function() {
                                return this.shared.position
                            },
                            set: function(e) {
                                this.shared.position = e
                            }
                        }
                    })), e = Object.assign(new Pr.FSStream, e);
                    var n = Pr.nextfd(r, t);
                    return e.fd = n, Pr.streams[n] = e, e
                },
                closeStream: e => {
                    Pr.streams[e] = null
                },
                chrdev_stream_ops: {
                    open: e => {
                        var r = Pr.getDevice(e.node.rdev);
                        e.stream_ops = r.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                    },
                    llseek: () => {
                        throw new Pr.ErrnoError(70)
                    }
                },
                major: e => e >> 8,
                minor: e => 255 & e,
                makedev: (e, r) => e << 8 | r,
                registerDevice: (e, r) => {
                    Pr.devices[e] = {
                        stream_ops: r
                    }
                },
                getDevice: e => Pr.devices[e],
                getMounts: e => {
                    for (var r = [], t = [e]; t.length;) {
                        var n = t.pop();
                        r.push(n), t.push.apply(t, n.mounts)
                    }
                    return r
                },
                syncfs: (e, r) => {
                    "function" == typeof e && (r = e, e = !1), Pr.syncFSRequests++, Pr.syncFSRequests > 1 && P("warning: " + Pr.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                    var t = Pr.getMounts(Pr.root.mount),
                        n = 0;

                    function o(e) {
                        return Pr.syncFSRequests--, r(e)
                    }

                    function a(e) {
                        if (e) return a.errored ? void 0 : (a.errored = !0, o(e));
                        ++n >= t.length && o(null)
                    }
                    t.forEach((r => {
                        if (!r.type.syncfs) return a(null);
                        r.type.syncfs(r, e, a)
                    }))
                },
                mount: (e, r, t) => {
                    var n, o = "/" === t,
                        a = !t;
                    if (o && Pr.root) throw new Pr.ErrnoError(10);
                    if (!o && !a) {
                        var i = Pr.lookupPath(t, {
                            follow_mount: !1
                        });
                        if (t = i.path, n = i.node, Pr.isMountpoint(n)) throw new Pr.ErrnoError(10);
                        if (!Pr.isDir(n.mode)) throw new Pr.ErrnoError(54)
                    }
                    var s = {
                            type: e,
                            opts: r,
                            mountpoint: t,
                            mounts: []
                        },
                        u = e.mount(s);
                    return u.mount = s, s.root = u, o ? Pr.root = u : n && (n.mounted = s, n.mount && n.mount.mounts.push(s)), u
                },
                unmount: e => {
                    var r = Pr.lookupPath(e, {
                        follow_mount: !1
                    });
                    if (!Pr.isMountpoint(r.node)) throw new Pr.ErrnoError(28);
                    var t = r.node,
                        n = t.mounted,
                        o = Pr.getMounts(n);
                    Object.keys(Pr.nameTable).forEach((e => {
                        for (var r = Pr.nameTable[e]; r;) {
                            var t = r.name_next;
                            o.includes(r.mount) && Pr.destroyNode(r), r = t
                        }
                    })), t.mounted = null;
                    var a = t.mount.mounts.indexOf(n);
                    t.mount.mounts.splice(a, 1)
                },
                lookup: (e, r) => e.node_ops.lookup(e, r),
                mknod: (e, r, t) => {
                    var n = Pr.lookupPath(e, {
                            parent: !0
                        }).node,
                        o = yr.basename(e);
                    if (!o || "." === o || ".." === o) throw new Pr.ErrnoError(28);
                    var a = Pr.mayCreate(n, o);
                    if (a) throw new Pr.ErrnoError(a);
                    if (!n.node_ops.mknod) throw new Pr.ErrnoError(63);
                    return n.node_ops.mknod(n, o, r, t)
                },
                create: (e, r) => (r = void 0 !== r ? r : 438, r &= 4095, r |= 32768, Pr.mknod(e, r, 0)),
                mkdir: (e, r) => (r = void 0 !== r ? r : 511, r &= 1023, r |= 16384, Pr.mknod(e, r, 0)),
                mkdirTree: (e, r) => {
                    for (var t = e.split("/"), n = "", o = 0; o < t.length; ++o)
                        if (t[o]) {
                            n += "/" + t[o];
                            try {
                                Pr.mkdir(n, r)
                            } catch (e) {
                                if (20 != e.errno) throw e
                            }
                        }
                },
                mkdev: (e, r, t) => (void 0 === t && (t = r, r = 438), r |= 8192, Pr.mknod(e, r, t)),
                symlink: (e, r) => {
                    if (!wr.resolve(e)) throw new Pr.ErrnoError(44);
                    var t = Pr.lookupPath(r, {
                        parent: !0
                    }).node;
                    if (!t) throw new Pr.ErrnoError(44);
                    var n = yr.basename(r),
                        o = Pr.mayCreate(t, n);
                    if (o) throw new Pr.ErrnoError(o);
                    if (!t.node_ops.symlink) throw new Pr.ErrnoError(63);
                    return t.node_ops.symlink(t, n, e)
                },
                rename: (e, r) => {
                    var t, n, o = yr.dirname(e),
                        a = yr.dirname(r),
                        i = yr.basename(e),
                        s = yr.basename(r);
                    if (t = Pr.lookupPath(e, {
                            parent: !0
                        }).node, n = Pr.lookupPath(r, {
                            parent: !0
                        }).node, !t || !n) throw new Pr.ErrnoError(44);
                    if (t.mount !== n.mount) throw new Pr.ErrnoError(75);
                    var u, c = Pr.lookupNode(t, i),
                        f = wr.relative(e, a);
                    if ("." !== f.charAt(0)) throw new Pr.ErrnoError(28);
                    if ("." !== (f = wr.relative(r, o)).charAt(0)) throw new Pr.ErrnoError(55);
                    try {
                        u = Pr.lookupNode(n, s)
                    } catch (e) {}
                    if (c !== u) {
                        var l = Pr.isDir(c.mode),
                            d = Pr.mayDelete(t, i, l);
                        if (d) throw new Pr.ErrnoError(d);
                        if (d = u ? Pr.mayDelete(n, s, l) : Pr.mayCreate(n, s)) throw new Pr.ErrnoError(d);
                        if (!t.node_ops.rename) throw new Pr.ErrnoError(63);
                        if (Pr.isMountpoint(c) || u && Pr.isMountpoint(u)) throw new Pr.ErrnoError(10);
                        if (n !== t && (d = Pr.nodePermissions(t, "w"))) throw new Pr.ErrnoError(d);
                        Pr.hashRemoveNode(c);
                        try {
                            t.node_ops.rename(c, n, s)
                        } catch (e) {
                            throw e
                        } finally {
                            Pr.hashAddNode(c)
                        }
                    }
                },
                rmdir: e => {
                    var r = Pr.lookupPath(e, {
                            parent: !0
                        }).node,
                        t = yr.basename(e),
                        n = Pr.lookupNode(r, t),
                        o = Pr.mayDelete(r, t, !0);
                    if (o) throw new Pr.ErrnoError(o);
                    if (!r.node_ops.rmdir) throw new Pr.ErrnoError(63);
                    if (Pr.isMountpoint(n)) throw new Pr.ErrnoError(10);
                    r.node_ops.rmdir(r, t), Pr.destroyNode(n)
                },
                readdir: e => {
                    var r = Pr.lookupPath(e, {
                        follow: !0
                    }).node;
                    if (!r.node_ops.readdir) throw new Pr.ErrnoError(54);
                    return r.node_ops.readdir(r)
                },
                unlink: e => {
                    var r = Pr.lookupPath(e, {
                        parent: !0
                    }).node;
                    if (!r) throw new Pr.ErrnoError(44);
                    var t = yr.basename(e),
                        n = Pr.lookupNode(r, t),
                        o = Pr.mayDelete(r, t, !1);
                    if (o) throw new Pr.ErrnoError(o);
                    if (!r.node_ops.unlink) throw new Pr.ErrnoError(63);
                    if (Pr.isMountpoint(n)) throw new Pr.ErrnoError(10);
                    r.node_ops.unlink(r, t), Pr.destroyNode(n)
                },
                readlink: e => {
                    var r = Pr.lookupPath(e).node;
                    if (!r) throw new Pr.ErrnoError(44);
                    if (!r.node_ops.readlink) throw new Pr.ErrnoError(28);
                    return wr.resolve(Pr.getPath(r.parent), r.node_ops.readlink(r))
                },
                stat: (e, r) => {
                    var t = Pr.lookupPath(e, {
                        follow: !r
                    }).node;
                    if (!t) throw new Pr.ErrnoError(44);
                    if (!t.node_ops.getattr) throw new Pr.ErrnoError(63);
                    return t.node_ops.getattr(t)
                },
                lstat: e => Pr.stat(e, !0),
                chmod: (e, r, t) => {
                    var n;
                    "string" == typeof e ? n = Pr.lookupPath(e, {
                        follow: !t
                    }).node : n = e;
                    if (!n.node_ops.setattr) throw new Pr.ErrnoError(63);
                    n.node_ops.setattr(n, {
                        mode: 4095 & r | -4096 & n.mode,
                        timestamp: Date.now()
                    })
                },
                lchmod: (e, r) => {
                    Pr.chmod(e, r, !0)
                },
                fchmod: (e, r) => {
                    var t = Pr.getStream(e);
                    if (!t) throw new Pr.ErrnoError(8);
                    Pr.chmod(t.node, r)
                },
                chown: (e, r, t, n) => {
                    var o;
                    "string" == typeof e ? o = Pr.lookupPath(e, {
                        follow: !n
                    }).node : o = e;
                    if (!o.node_ops.setattr) throw new Pr.ErrnoError(63);
                    o.node_ops.setattr(o, {
                        timestamp: Date.now()
                    })
                },
                lchown: (e, r, t) => {
                    Pr.chown(e, r, t, !0)
                },
                fchown: (e, r, t) => {
                    var n = Pr.getStream(e);
                    if (!n) throw new Pr.ErrnoError(8);
                    Pr.chown(n.node, r, t)
                },
                truncate: (e, r) => {
                    if (r < 0) throw new Pr.ErrnoError(28);
                    var t;
                    "string" == typeof e ? t = Pr.lookupPath(e, {
                        follow: !0
                    }).node : t = e;
                    if (!t.node_ops.setattr) throw new Pr.ErrnoError(63);
                    if (Pr.isDir(t.mode)) throw new Pr.ErrnoError(31);
                    if (!Pr.isFile(t.mode)) throw new Pr.ErrnoError(28);
                    var n = Pr.nodePermissions(t, "w");
                    if (n) throw new Pr.ErrnoError(n);
                    t.node_ops.setattr(t, {
                        size: r,
                        timestamp: Date.now()
                    })
                },
                ftruncate: (e, r) => {
                    var t = Pr.getStream(e);
                    if (!t) throw new Pr.ErrnoError(8);
                    if (0 == (2097155 & t.flags)) throw new Pr.ErrnoError(28);
                    Pr.truncate(t.node, r)
                },
                utime: (e, r, t) => {
                    var n = Pr.lookupPath(e, {
                        follow: !0
                    }).node;
                    n.node_ops.setattr(n, {
                        timestamp: Math.max(r, t)
                    })
                },
                open: (e, r, t) => {
                    if ("" === e) throw new Pr.ErrnoError(44);
                    var n;
                    if (t = void 0 === t ? 438 : t, t = 64 & (r = "string" == typeof r ? function(e) {
                            var r = {
                                r: 0,
                                "r+": 2,
                                w: 577,
                                "w+": 578,
                                a: 1089,
                                "a+": 1090
                            } [e];
                            if (void 0 === r) throw new Error("Unknown file open mode: " + e);
                            return r
                        }(r) : r) ? 4095 & t | 32768 : 0, "object" == typeof e) n = e;
                    else {
                        e = yr.normalize(e);
                        try {
                            n = Pr.lookupPath(e, {
                                follow: !(131072 & r)
                            }).node
                        } catch (e) {}
                    }
                    var a = !1;
                    if (64 & r)
                        if (n) {
                            if (128 & r) throw new Pr.ErrnoError(20)
                        } else n = Pr.mknod(e, t, 0), a = !0;
                    if (!n) throw new Pr.ErrnoError(44);
                    if (Pr.isChrdev(n.mode) && (r &= -513), 65536 & r && !Pr.isDir(n.mode)) throw new Pr.ErrnoError(54);
                    if (!a) {
                        var i = Pr.mayOpen(n, r);
                        if (i) throw new Pr.ErrnoError(i)
                    }
                    512 & r && !a && Pr.truncate(n, 0), r &= -131713;
                    var s = Pr.createStream({
                        node: n,
                        path: Pr.getPath(n),
                        flags: r,
                        seekable: !0,
                        position: 0,
                        stream_ops: n.stream_ops,
                        ungotten: [],
                        error: !1
                    });
                    return s.stream_ops.open && s.stream_ops.open(s), !o.logReadFiles || 1 & r || (Pr.readFiles || (Pr.readFiles = {}), e in Pr.readFiles || (Pr.readFiles[e] = 1)), s
                },
                close: e => {
                    if (Pr.isClosed(e)) throw new Pr.ErrnoError(8);
                    e.getdents && (e.getdents = null);
                    try {
                        e.stream_ops.close && e.stream_ops.close(e)
                    } catch (e) {
                        throw e
                    } finally {
                        Pr.closeStream(e.fd)
                    }
                    e.fd = null
                },
                isClosed: e => null === e.fd,
                llseek: (e, r, t) => {
                    if (Pr.isClosed(e)) throw new Pr.ErrnoError(8);
                    if (!e.seekable || !e.stream_ops.llseek) throw new Pr.ErrnoError(70);
                    if (0 != t && 1 != t && 2 != t) throw new Pr.ErrnoError(28);
                    return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position
                },
                read: (e, r, t, n, o) => {
                    if (n < 0 || o < 0) throw new Pr.ErrnoError(28);
                    if (Pr.isClosed(e)) throw new Pr.ErrnoError(8);
                    if (1 == (2097155 & e.flags)) throw new Pr.ErrnoError(8);
                    if (Pr.isDir(e.node.mode)) throw new Pr.ErrnoError(31);
                    if (!e.stream_ops.read) throw new Pr.ErrnoError(28);
                    var a = void 0 !== o;
                    if (a) {
                        if (!e.seekable) throw new Pr.ErrnoError(70)
                    } else o = e.position;
                    var i = e.stream_ops.read(e, r, t, n, o);
                    return a || (e.position += i), i
                },
                write: (e, r, t, n, o, a) => {
                    if (n < 0 || o < 0) throw new Pr.ErrnoError(28);
                    if (Pr.isClosed(e)) throw new Pr.ErrnoError(8);
                    if (0 == (2097155 & e.flags)) throw new Pr.ErrnoError(8);
                    if (Pr.isDir(e.node.mode)) throw new Pr.ErrnoError(31);
                    if (!e.stream_ops.write) throw new Pr.ErrnoError(28);
                    e.seekable && 1024 & e.flags && Pr.llseek(e, 0, 2);
                    var i = void 0 !== o;
                    if (i) {
                        if (!e.seekable) throw new Pr.ErrnoError(70)
                    } else o = e.position;
                    var s = e.stream_ops.write(e, r, t, n, o, a);
                    return i || (e.position += s), s
                },
                allocate: (e, r, t) => {
                    if (Pr.isClosed(e)) throw new Pr.ErrnoError(8);
                    if (r < 0 || t <= 0) throw new Pr.ErrnoError(28);
                    if (0 == (2097155 & e.flags)) throw new Pr.ErrnoError(8);
                    if (!Pr.isFile(e.node.mode) && !Pr.isDir(e.node.mode)) throw new Pr.ErrnoError(43);
                    if (!e.stream_ops.allocate) throw new Pr.ErrnoError(138);
                    e.stream_ops.allocate(e, r, t)
                },
                mmap: (e, r, t, n, o) => {
                    if (0 != (2 & n) && 0 == (2 & o) && 2 != (2097155 & e.flags)) throw new Pr.ErrnoError(2);
                    if (1 == (2097155 & e.flags)) throw new Pr.ErrnoError(2);
                    if (!e.stream_ops.mmap) throw new Pr.ErrnoError(43);
                    return e.stream_ops.mmap(e, r, t, n, o)
                },
                msync: (e, r, t, n, o) => e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0,
                munmap: e => 0,
                ioctl: (e, r, t) => {
                    if (!e.stream_ops.ioctl) throw new Pr.ErrnoError(59);
                    return e.stream_ops.ioctl(e, r, t)
                },
                readFile: (e, r = {}) => {
                    if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding) throw new Error('Invalid encoding type "' + r.encoding + '"');
                    var t, n = Pr.open(e, r.flags),
                        o = Pr.stat(e).size,
                        a = new Uint8Array(o);
                    return Pr.read(n, a, 0, o, 0), "utf8" === r.encoding ? t = ve(a, 0) : "binary" === r.encoding && (t = a), Pr.close(n), t
                },
                writeFile: (e, r, t = {}) => {
                    t.flags = t.flags || 577;
                    var n = Pr.open(e, t.flags, t.mode);
                    if ("string" == typeof r) {
                        var o = new Uint8Array(ze(r) + 1),
                            a = Ge(r, o, 0, o.length);
                        Pr.write(n, o, 0, a, void 0, t.canOwn)
                    } else {
                        if (!ArrayBuffer.isView(r)) throw new Error("Unsupported data type");
                        Pr.write(n, r, 0, r.byteLength, void 0, t.canOwn)
                    }
                    Pr.close(n)
                },
                cwd: () => Pr.currentPath,
                chdir: e => {
                    var r = Pr.lookupPath(e, {
                        follow: !0
                    });
                    if (null === r.node) throw new Pr.ErrnoError(44);
                    if (!Pr.isDir(r.node.mode)) throw new Pr.ErrnoError(54);
                    var t = Pr.nodePermissions(r.node, "x");
                    if (t) throw new Pr.ErrnoError(t);
                    Pr.currentPath = r.path
                },
                createDefaultDirectories: () => {
                    Pr.mkdir("/tmp"), Pr.mkdir("/home"), Pr.mkdir("/home/web_user")
                },
                createDefaultDevices: () => {
                    Pr.mkdir("/dev"), Pr.registerDevice(Pr.makedev(1, 3), {
                        read: () => 0,
                        write: (e, r, t, n, o) => n
                    }), Pr.mkdev("/dev/null", Pr.makedev(1, 3)), kr.register(Pr.makedev(5, 0), kr.default_tty_ops), kr.register(Pr.makedev(6, 0), kr.default_tty1_ops), Pr.mkdev("/dev/tty", Pr.makedev(5, 0)), Pr.mkdev("/dev/tty1", Pr.makedev(6, 0));
                    var e = new Uint8Array(1024),
                        r = 0,
                        t = () => (0 === r && (r = br(e).byteLength), e[--r]);
                    Pr.createDevice("/dev", "random", t), Pr.createDevice("/dev", "urandom", t), Pr.mkdir("/dev/shm"), Pr.mkdir("/dev/shm/tmp")
                },
                createSpecialDirectories: () => {
                    Pr.mkdir("/proc");
                    var e = Pr.mkdir("/proc/self");
                    Pr.mkdir("/proc/self/fd"), Pr.mount({
                        mount: () => {
                            var r = Pr.createNode(e, "fd", 16895, 73);
                            return r.node_ops = {
                                lookup: (e, r) => {
                                    var t = +r,
                                        n = Pr.getStream(t);
                                    if (!n) throw new Pr.ErrnoError(8);
                                    var o = {
                                        parent: null,
                                        mount: {
                                            mountpoint: "fake"
                                        },
                                        node_ops: {
                                            readlink: () => n.path
                                        }
                                    };
                                    return o.parent = o, o
                                }
                            }, r
                        }
                    }, {}, "/proc/self/fd")
                },
                createStandardStreams: () => {
                    o.stdin ? Pr.createDevice("/dev", "stdin", o.stdin) : Pr.symlink("/dev/tty", "/dev/stdin"), o.stdout ? Pr.createDevice("/dev", "stdout", null, o.stdout) : Pr.symlink("/dev/tty", "/dev/stdout"), o.stderr ? Pr.createDevice("/dev", "stderr", null, o.stderr) : Pr.symlink("/dev/tty1", "/dev/stderr");
                    Pr.open("/dev/stdin", 0), Pr.open("/dev/stdout", 1), Pr.open("/dev/stderr", 1)
                },
                ensureErrnoError: () => {
                    Pr.ErrnoError || (Pr.ErrnoError = function(e, r) {
                        this.name = "ErrnoError", this.node = r, this.setErrno = function(e) {
                            this.errno = e
                        }, this.setErrno(e), this.message = "FS error"
                    }, Pr.ErrnoError.prototype = new Error, Pr.ErrnoError.prototype.constructor = Pr.ErrnoError, [44].forEach((e => {
                        Pr.genericErrors[e] = new Pr.ErrnoError(e), Pr.genericErrors[e].stack = "<generic error, no stack>"
                    })))
                },
                staticInit: () => {
                    Pr.ensureErrnoError(), Pr.nameTable = new Array(4096), Pr.mount(_r, {}, "/"), Pr.createDefaultDirectories(), Pr.createDefaultDevices(), Pr.createSpecialDirectories(), Pr.filesystems = {
                        MEMFS: _r,
                        IDBFS: Br
                    }
                },
                init: (e, r, t) => {
                    Pr.init.initialized = !0, Pr.ensureErrnoError(), o.stdin = e || o.stdin, o.stdout = r || o.stdout, o.stderr = t || o.stderr, Pr.createStandardStreams()
                },
                quit: () => {
                    Pr.init.initialized = !1;
                    for (var e = 0; e < Pr.streams.length; e++) {
                        var r = Pr.streams[e];
                        r && Pr.close(r)
                    }
                },
                findObject: (e, r) => {
                    var t = Pr.analyzePath(e, r);
                    return t.exists ? t.object : null
                },
                analyzePath: (e, r) => {
                    try {
                        e = (n = Pr.lookupPath(e, {
                            follow: !r
                        })).path
                    } catch (e) {}
                    var t = {
                        isRoot: !1,
                        exists: !1,
                        error: 0,
                        name: null,
                        path: null,
                        object: null,
                        parentExists: !1,
                        parentPath: null,
                        parentObject: null
                    };
                    try {
                        var n = Pr.lookupPath(e, {
                            parent: !0
                        });
                        t.parentExists = !0, t.parentPath = n.path, t.parentObject = n.node, t.name = yr.basename(e), n = Pr.lookupPath(e, {
                            follow: !r
                        }), t.exists = !0, t.path = n.path, t.object = n.node, t.name = n.node.name, t.isRoot = "/" === n.path
                    } catch (e) {
                        t.error = e.errno
                    }
                    return t
                },
                createPath: (e, r, t, n) => {
                    e = "string" == typeof e ? e : Pr.getPath(e);
                    for (var o = r.split("/").reverse(); o.length;) {
                        var a = o.pop();
                        if (a) {
                            var i = yr.join2(e, a);
                            try {
                                Pr.mkdir(i)
                            } catch (e) {}
                            e = i
                        }
                    }
                    return i
                },
                createFile: (e, r, t, n, o) => {
                    var a = yr.join2("string" == typeof e ? e : Pr.getPath(e), r),
                        i = Lr(n, o);
                    return Pr.create(a, i)
                },
                createDataFile: (e, r, t, n, o, a) => {
                    var i = r;
                    e && (e = "string" == typeof e ? e : Pr.getPath(e), i = r ? yr.join2(e, r) : e);
                    var s = Lr(n, o),
                        u = Pr.create(i, s);
                    if (t) {
                        if ("string" == typeof t) {
                            for (var c = new Array(t.length), f = 0, l = t.length; f < l; ++f) c[f] = t.charCodeAt(f);
                            t = c
                        }
                        Pr.chmod(u, 146 | s);
                        var d = Pr.open(u, 577);
                        Pr.write(d, t, 0, t.length, 0, a), Pr.close(d), Pr.chmod(u, s)
                    }
                    return u
                },
                createDevice: (e, r, t, n) => {
                    var o = yr.join2("string" == typeof e ? e : Pr.getPath(e), r),
                        a = Lr(!!t, !!n);
                    Pr.createDevice.major || (Pr.createDevice.major = 64);
                    var i = Pr.makedev(Pr.createDevice.major++, 0);
                    return Pr.registerDevice(i, {
                        open: e => {
                            e.seekable = !1
                        },
                        close: e => {
                            n && n.buffer && n.buffer.length && n(10)
                        },
                        read: (e, r, n, o, a) => {
                            for (var i = 0, s = 0; s < o; s++) {
                                var u;
                                try {
                                    u = t()
                                } catch (e) {
                                    throw new Pr.ErrnoError(29)
                                }
                                if (void 0 === u && 0 === i) throw new Pr.ErrnoError(6);
                                if (null == u) break;
                                i++, r[n + s] = u
                            }
                            return i && (e.node.timestamp = Date.now()), i
                        },
                        write: (e, r, t, o, a) => {
                            for (var i = 0; i < o; i++) try {
                                n(r[t + i])
                            } catch (e) {
                                throw new Pr.ErrnoError(29)
                            }
                            return o && (e.node.timestamp = Date.now()), i
                        }
                    }), Pr.mkdev(o, a, i)
                },
                forceLoadFile: e => {
                    if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                    if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                    if (!h) throw new Error("Cannot load without read() or XMLHttpRequest.");
                    try {
                        e.contents = Er(h(e.url), !0), e.usedBytes = e.contents.length
                    } catch (e) {
                        throw new Pr.ErrnoError(29)
                    }
                },
                createLazyFile: (e, r, t, n, o) => {
                    function a() {
                        this.lengthKnown = !1, this.chunks = []
                    }
                    if (a.prototype.get = function(e) {
                            if (!(e > this.length - 1 || e < 0)) {
                                var r = e % this.chunkSize,
                                    t = e / this.chunkSize | 0;
                                return this.getter(t)[r]
                            }
                        }, a.prototype.setDataGetter = function(e) {
                            this.getter = e
                        }, a.prototype.cacheLength = function() {
                            var e = new XMLHttpRequest;
                            if (e.open("HEAD", t, !1), e.send(null), !(e.status >= 200 && e.status < 300 || 304 === e.status)) throw new Error("Couldn't load " + t + ". Status: " + e.status);
                            var r, n = Number(e.getResponseHeader("Content-length")),
                                o = (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r,
                                a = (r = e.getResponseHeader("Content-Encoding")) && "gzip" === r,
                                i = 1048576;
                            o || (i = n);
                            var s = this;
                            s.setDataGetter((e => {
                                var r = e * i,
                                    o = (e + 1) * i - 1;
                                if (o = Math.min(o, n - 1), void 0 === s.chunks[e] && (s.chunks[e] = ((e, r) => {
                                        if (e > r) throw new Error("invalid range (" + e + ", " + r + ") or no bytes requested!");
                                        if (r > n - 1) throw new Error("only " + n + " bytes available! programmer error!");
                                        var o = new XMLHttpRequest;
                                        if (o.open("GET", t, !1), n !== i && o.setRequestHeader("Range", "bytes=" + e + "-" + r), o.responseType = "arraybuffer", o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"), o.send(null), !(o.status >= 200 && o.status < 300 || 304 === o.status)) throw new Error("Couldn't load " + t + ". Status: " + o.status);
                                        return void 0 !== o.response ? new Uint8Array(o.response || []) : Er(o.responseText || "", !0)
                                    })(r, o)), void 0 === s.chunks[e]) throw new Error("doXHR failed!");
                                return s.chunks[e]
                            })), !a && n || (i = n = 1, n = this.getter(0).length, i = n, B("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = n, this._chunkSize = i, this.lengthKnown = !0
                        }, "undefined" != typeof XMLHttpRequest) {
                        if (!_) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                        var i = new a;
                        Object.defineProperties(i, {
                            length: {
                                get: function() {
                                    return this.lengthKnown || this.cacheLength(), this._length
                                }
                            },
                            chunkSize: {
                                get: function() {
                                    return this.lengthKnown || this.cacheLength(), this._chunkSize
                                }
                            }
                        });
                        var s = {
                            isDevice: !1,
                            contents: i
                        }
                    } else s = {
                        isDevice: !1,
                        url: t
                    };
                    var u = Pr.createFile(e, r, s, n, o);
                    s.contents ? u.contents = s.contents : s.url && (u.contents = null, u.url = s.url), Object.defineProperties(u, {
                        usedBytes: {
                            get: function() {
                                return this.contents.length
                            }
                        }
                    });
                    var c = {};

                    function f(e, r, t, n, o) {
                        var a = e.node.contents;
                        if (o >= a.length) return 0;
                        var i = Math.min(a.length - o, n);
                        if (a.slice)
                            for (var s = 0; s < i; s++) r[t + s] = a[o + s];
                        else
                            for (s = 0; s < i; s++) r[t + s] = a.get(o + s);
                        return i
                    }
                    return Object.keys(u.stream_ops).forEach((e => {
                        var r = u.stream_ops[e];
                        c[e] = function() {
                            return Pr.forceLoadFile(u), r.apply(null, arguments)
                        }
                    })), c.read = (e, r, t, n, o) => (Pr.forceLoadFile(u), f(e, r, t, n, o)), c.mmap = (e, r, t, n, o) => {
                        Pr.forceLoadFile(u);
                        var a = Sr(r);
                        if (!a) throw new Pr.ErrnoError(48);
                        return f(e, M, a, r, t), {
                            ptr: a,
                            allocated: !0
                        }
                    }, u.stream_ops = c, u
                }
            },
            Ar = {
                DEFAULT_POLLMASK: 5,
                calculateAt: function(e, r, t) {
                    if (yr.isAbs(r)) return r;
                    var n; - 100 === e ? n = Pr.cwd() : n = Ar.getStreamFromFD(e).path;
                    if (0 == r.length) {
                        if (!t) throw new Pr.ErrnoError(44);
                        return n
                    }
                    return yr.join2(n, r)
                },
                doStat: function(e, r, t) {
                    try {
                        var n = e(r)
                    } catch (e) {
                        if (e && e.node && yr.normalize(r) !== yr.normalize(Pr.getPath(e.node))) return -54;
                        throw e
                    }
                    N[t >> 2] = n.dev, N[t + 8 >> 2] = n.ino, N[t + 12 >> 2] = n.mode, O[t + 16 >> 2] = n.nlink, N[t + 20 >> 2] = n.uid, N[t + 24 >> 2] = n.gid, N[t + 28 >> 2] = n.rdev, z[t + 40 >> 3] = BigInt(n.size), N[t + 48 >> 2] = 4096, N[t + 52 >> 2] = n.blocks;
                    var o = n.atime.getTime(),
                        a = n.mtime.getTime(),
                        i = n.ctime.getTime();
                    return z[t + 56 >> 3] = BigInt(Math.floor(o / 1e3)), O[t + 64 >> 2] = o % 1e3 * 1e3, z[t + 72 >> 3] = BigInt(Math.floor(a / 1e3)), O[t + 80 >> 2] = a % 1e3 * 1e3, z[t + 88 >> 3] = BigInt(Math.floor(i / 1e3)), O[t + 96 >> 2] = i % 1e3 * 1e3, z[t + 104 >> 3] = BigInt(n.ino), 0
                },
                doMsync: function(e, r, t, n, o) {
                    if (!Pr.isFile(r.node.mode)) throw new Pr.ErrnoError(43);
                    if (2 & n) return 0;
                    var a = R.slice(e, e + t);
                    Pr.msync(r, a, o, t, n)
                },
                varargs: void 0,
                get: function() {
                    return Ar.varargs += 4, N[Ar.varargs - 4 >> 2]
                },
                getStr: function(e) {
                    return ge(e)
                },
                getStreamFromFD: function(e) {
                    var r = Pr.getStream(e);
                    if (!r) throw new Pr.ErrnoError(8);
                    return r
                }
            };

        function Dr(e, r) {
            var t;
            F = e, F = t = e, ee() || (o.onExit && o.onExit(t), V = !0), x(t, new de(t))
        }
        var Fr = Dr;

        function Mr(e) {
            if (!V) try {
                e(),
                    function() {
                        if (!ee()) try {
                            Fr(F)
                        } catch (e) {
                            hr(e)
                        }
                    }()
            } catch (e) {
                hr(e)
            }
        }

        function Rr(e, r) {
            return setTimeout((() => {
                Mr(e)
            }), r)
        }

        function Tr(e) {
            Tr.shown || (Tr.shown = {}), Tr.shown[e] || (Tr.shown[e] = 1, P(e))
        }
        var Ir, Nr = {
            mainLoop: {
                running: !1,
                scheduler: null,
                method: "",
                currentlyRunningMainloop: 0,
                func: null,
                arg: 0,
                timingMode: 0,
                timingValue: 0,
                currentFrameNumber: 0,
                queue: [],
                pause: function() {
                    Nr.mainLoop.scheduler = null, Nr.mainLoop.currentlyRunningMainloop++
                },
                resume: function() {
                    Nr.mainLoop.currentlyRunningMainloop++;
                    var e = Nr.mainLoop.timingMode,
                        r = Nr.mainLoop.timingValue,
                        t = Nr.mainLoop.func;
                    Nr.mainLoop.func = null, Ur(t, 0, !1, Nr.mainLoop.arg, !0), Or(e, r), Nr.mainLoop.scheduler()
                },
                updateStatus: function() {
                    if (o.setStatus) {
                        var e = o.statusMessage || "Please wait...",
                            r = Nr.mainLoop.remainingBlockers,
                            t = Nr.mainLoop.expectedBlockers;
                        r ? r < t ? o.setStatus(e + " (" + (t - r) + "/" + t + ")") : o.setStatus(e) : o.setStatus("")
                    }
                },
                runIter: function(e) {
                    if (!V) {
                        if (o.preMainLoop)
                            if (!1 === o.preMainLoop()) return;
                        Mr(e), o.postMainLoop && o.postMainLoop()
                    }
                }
            },
            isFullscreen: !1,
            pointerLock: !1,
            moduleContextCreatedCallbacks: [],
            workers: [],
            init: function() {
                if (!Nr.initted) {
                    Nr.initted = !0;
                    var e = {
                        canHandle: function(e) {
                            return !o.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                        },
                        handle: function(e, r, t, n) {
                            var o = new Blob([e], {
                                type: Nr.getMimetype(r)
                            });
                            o.size !== e.length && (o = new Blob([new Uint8Array(e).buffer], {
                                type: Nr.getMimetype(r)
                            }));
                            var a = URL.createObjectURL(o),
                                i = new Image;
                            i.onload = () => {
                                H(i.complete, "Image " + r + " could not be decoded");
                                var n = document.createElement("canvas");
                                n.width = i.width, n.height = i.height, n.getContext("2d").drawImage(i, 0, 0), Po[r] = n, URL.revokeObjectURL(a), t && t(e)
                            }, i.onerror = e => {
                                B("Image " + a + " could not be decoded"), n && n()
                            }, i.src = a
                        }
                    };
                    Cr.push(e);
                    var r = {
                        canHandle: function(e) {
                            return !o.noAudioDecoding && e.substr(-4) in {
                                ".ogg": 1,
                                ".wav": 1,
                                ".mp3": 1
                            }
                        },
                        handle: function(e, r, t, n) {
                            var o = !1;

                            function a(n) {
                                o || (o = !0, Ao[r] = n, t && t(e))
                            }
                            var i = new Blob([e], {
                                    type: Nr.getMimetype(r)
                                }),
                                s = URL.createObjectURL(i),
                                u = new Audio;
                            u.addEventListener("canplaythrough", (() => a(u)), !1), u.onerror = function(t) {
                                o || (P("warning: browser could not fully decode audio " + r + ", trying slower base64 approach"), u.src = "data:audio/x-" + r.substr(-3) + ";base64," + function(e) {
                                    for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = "", n = 0, o = 0, a = 0; a < e.length; a++)
                                        for (n = n << 8 | e[a], o += 8; o >= 6;) {
                                            var i = n >> o - 6 & 63;
                                            o -= 6, t += r[i]
                                        }
                                    return 2 == o ? (t += r[(3 & n) << 4], t += "==") : 4 == o && (t += r[(15 & n) << 2], t += "="), t
                                }(e), a(u))
                            }, u.src = s, Rr((() => {
                                a(u)
                            }), 1e4)
                        }
                    };
                    Cr.push(r);
                    var t = o.canvas;
                    t && (t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock || t.msRequestPointerLock || (() => {}), t.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {}), t.exitPointerLock = t.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", n, !1), document.addEventListener("mozpointerlockchange", n, !1), document.addEventListener("webkitpointerlockchange", n, !1), document.addEventListener("mspointerlockchange", n, !1), o.elementPointerLock && t.addEventListener("click", (e => {
                        !Nr.pointerLock && o.canvas.requestPointerLock && (o.canvas.requestPointerLock(), e.preventDefault())
                    }), !1))
                }

                function n() {
                    Nr.pointerLock = document.pointerLockElement === o.canvas || document.mozPointerLockElement === o.canvas || document.webkitPointerLockElement === o.canvas || document.msPointerLockElement === o.canvas
                }
            },
            createContext: function(e, r, t, n) {
                if (r && o.ctx && e == o.canvas) return o.ctx;
                var a, i;
                if (r) {
                    var s = {
                        antialias: !1,
                        alpha: !1,
                        majorVersion: "undefined" != typeof WebGL2RenderingContext ? 2 : 1
                    };
                    if (n)
                        for (var u in n) s[u] = n[u];
                    void 0 !== zt && (i = zt.createContext(e, s)) && (a = zt.getContext(i).GLctx)
                } else a = e.getContext("2d");
                return a ? (t && (r || H(void 0 === Bo, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), o.ctx = a, r && zt.makeContextCurrent(i), o.useWebGL = r, Nr.moduleContextCreatedCallbacks.forEach((e => e())), Nr.init()), a) : null
            },
            destroyContext: function(e, r, t) {},
            fullscreenHandlersInstalled: !1,
            lockPointer: void 0,
            resizeCanvas: void 0,
            requestFullscreen: function(e, r) {
                Nr.lockPointer = e, Nr.resizeCanvas = r, void 0 === Nr.lockPointer && (Nr.lockPointer = !0), void 0 === Nr.resizeCanvas && (Nr.resizeCanvas = !1);
                var t = o.canvas;

                function n() {
                    Nr.isFullscreen = !1;
                    var e = t.parentNode;
                    (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (t.exitFullscreen = Nr.exitFullscreen, Nr.lockPointer && t.requestPointerLock(), Nr.isFullscreen = !0, Nr.resizeCanvas ? Nr.setFullscreenCanvasSize() : Nr.updateCanvasDimensions(t)) : (e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e), Nr.resizeCanvas ? Nr.setWindowedCanvasSize() : Nr.updateCanvasDimensions(t)), o.onFullScreen && o.onFullScreen(Nr.isFullscreen), o.onFullscreen && o.onFullscreen(Nr.isFullscreen)
                }
                Nr.fullscreenHandlersInstalled || (Nr.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", n, !1), document.addEventListener("mozfullscreenchange", n, !1), document.addEventListener("webkitfullscreenchange", n, !1), document.addEventListener("MSFullscreenChange", n, !1));
                var a = document.createElement("div");
                t.parentNode.insertBefore(a, t), a.appendChild(t), a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || (a.webkitRequestFullscreen ? () => a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (a.webkitRequestFullScreen ? () => a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null), a.requestFullscreen()
            },
            exitFullscreen: function() {
                return !!Nr.isFullscreen && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || (() => {})).apply(document, []), !0)
            },
            nextRAF: 0,
            fakeRequestAnimationFrame: function(e) {
                var r = Date.now();
                if (0 === Nr.nextRAF) Nr.nextRAF = r + 1e3 / 60;
                else
                    for (; r + 2 >= Nr.nextRAF;) Nr.nextRAF += 1e3 / 60;
                var t = Math.max(Nr.nextRAF - r, 0);
                setTimeout(e, t)
            },
            requestAnimationFrame: function(e) {
                "function" != typeof requestAnimationFrame ? (0, Nr.fakeRequestAnimationFrame)(e) : requestAnimationFrame(e)
            },
            safeSetTimeout: function(e, r) {
                return Rr(e, r)
            },
            safeRequestAnimationFrame: function(e) {
                return Nr.requestAnimationFrame((() => {
                    Mr(e)
                }))
            },
            getMimetype: function(e) {
                return {
                    jpg: "image/jpeg",
                    jpeg: "image/jpeg",
                    png: "image/png",
                    bmp: "image/bmp",
                    ogg: "audio/ogg",
                    wav: "audio/wav",
                    mp3: "audio/mpeg"
                } [e.substr(e.lastIndexOf(".") + 1)]
            },
            getUserMedia: function(e) {
                window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e)
            },
            getMovementX: function(e) {
                return e.movementX || e.mozMovementX || e.webkitMovementX || 0
            },
            getMovementY: function(e) {
                return e.movementY || e.mozMovementY || e.webkitMovementY || 0
            },
            getMouseWheelDelta: function(e) {
                var r = 0;
                switch (e.type) {
                    case "DOMMouseScroll":
                        r = e.detail / 3;
                        break;
                    case "mousewheel":
                        r = e.wheelDelta / 120;
                        break;
                    case "wheel":
                        switch (r = e.deltaY, e.deltaMode) {
                            case 0:
                                r /= 100;
                                break;
                            case 1:
                                r /= 3;
                                break;
                            case 2:
                                r *= 80;
                                break;
                            default:
                                throw "unrecognized mouse wheel delta mode: " + e.deltaMode
                        }
                        break;
                    default:
                        throw "unrecognized mouse wheel event: " + e.type
                }
                return r
            },
            mouseX: 0,
            mouseY: 0,
            mouseMovementX: 0,
            mouseMovementY: 0,
            touches: {},
            lastTouches: {},
            calculateMouseEvent: function(e) {
                if (Nr.pointerLock) "mousemove" != e.type && "mozMovementX" in e ? Nr.mouseMovementX = Nr.mouseMovementY = 0 : (Nr.mouseMovementX = Nr.getMovementX(e), Nr.mouseMovementY = Nr.getMovementY(e)), "undefined" != typeof SDL ? (Nr.mouseX = SDL.mouseX + Nr.mouseMovementX, Nr.mouseY = SDL.mouseY + Nr.mouseMovementY) : (Nr.mouseX += Nr.mouseMovementX, Nr.mouseY += Nr.mouseMovementY);
                else {
                    var r = o.canvas.getBoundingClientRect(),
                        t = o.canvas.width,
                        n = o.canvas.height,
                        a = void 0 !== window.scrollX ? window.scrollX : window.pageXOffset,
                        i = void 0 !== window.scrollY ? window.scrollY : window.pageYOffset;
                    if ("touchstart" === e.type || "touchend" === e.type || "touchmove" === e.type) {
                        var s = e.touch;
                        if (void 0 === s) return;
                        var u = s.pageX - (a + r.left),
                            c = s.pageY - (i + r.top),
                            f = {
                                x: u *= t / r.width,
                                y: c *= n / r.height
                            };
                        if ("touchstart" === e.type) Nr.lastTouches[s.identifier] = f, Nr.touches[s.identifier] = f;
                        else if ("touchend" === e.type || "touchmove" === e.type) {
                            var l = Nr.touches[s.identifier];
                            l || (l = f), Nr.lastTouches[s.identifier] = l, Nr.touches[s.identifier] = f
                        }
                        return
                    }
                    var d = e.pageX - (a + r.left),
                        m = e.pageY - (i + r.top);
                    d *= t / r.width, m *= n / r.height, Nr.mouseMovementX = d - Nr.mouseX, Nr.mouseMovementY = m - Nr.mouseY, Nr.mouseX = d, Nr.mouseY = m
                }
            },
            resizeListeners: [],
            updateResizeListeners: function() {
                var e = o.canvas;
                Nr.resizeListeners.forEach((r => r(e.width, e.height)))
            },
            setCanvasSize: function(e, r, t) {
                var n = o.canvas;
                Nr.updateCanvasDimensions(n, e, r), t || Nr.updateResizeListeners()
            },
            windowedWidth: 0,
            windowedHeight: 0,
            setFullscreenCanvasSize: function() {
                if ("undefined" != typeof SDL) {
                    var e = O[SDL.screen >> 2];
                    e |= 8388608, N[SDL.screen >> 2] = e
                }
                Nr.updateCanvasDimensions(o.canvas), Nr.updateResizeListeners()
            },
            setWindowedCanvasSize: function() {
                if ("undefined" != typeof SDL) {
                    var e = O[SDL.screen >> 2];
                    e &= -8388609, N[SDL.screen >> 2] = e
                }
                Nr.updateCanvasDimensions(o.canvas), Nr.updateResizeListeners()
            },
            updateCanvasDimensions: function(e, r, t) {
                r && t ? (e.widthNative = r, e.heightNative = t) : (r = e.widthNative, t = e.heightNative);
                var n = r,
                    a = t;
                if (o.forcedAspectRatio && o.forcedAspectRatio > 0 && (n / a < o.forcedAspectRatio ? n = Math.round(a * o.forcedAspectRatio) : a = Math.round(n / o.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
                    var i = Math.min(screen.width / n, screen.height / a);
                    n = Math.round(n * i), a = Math.round(a * i)
                }
                Nr.resizeCanvas ? (e.width != n && (e.width = n), e.height != a && (e.height = a), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != r && (e.width = r), e.height != t && (e.height = t), void 0 !== e.style && (n != r || a != t ? (e.style.setProperty("width", n + "px", "important"), e.style.setProperty("height", a + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))))
            }
        };

        function Or(e, r) {
            if (Nr.mainLoop.timingMode = e, Nr.mainLoop.timingValue = r, !Nr.mainLoop.func) return 1;
            if (Nr.mainLoop.running || (Nr.mainLoop.running = !0), 0 == e) Nr.mainLoop.scheduler = function() {
                var e = 0 | Math.max(0, Nr.mainLoop.tickStartTime + r - Ir());
                setTimeout(Nr.mainLoop.runner, e)
            }, Nr.mainLoop.method = "timeout";
            else if (1 == e) Nr.mainLoop.scheduler = function() {
                Nr.requestAnimationFrame(Nr.mainLoop.runner)
            }, Nr.mainLoop.method = "rAF";
            else if (2 == e) {
                if ("undefined" == typeof setImmediate) {
                    var t = [],
                        n = "setimmediate";
                    addEventListener("message", (e => {
                        e.data !== n && e.data.target !== n || (e.stopPropagation(), t.shift()())
                    }), !0), setImmediate = function(e) {
                        t.push(e), _ ? (void 0 === o.setImmediates && (o.setImmediates = []), o.setImmediates.push(e), postMessage({
                            target: n
                        })) : postMessage(n, "*")
                    }
                }
                Nr.mainLoop.scheduler = function() {
                    setImmediate(Nr.mainLoop.runner)
                }, Nr.mainLoop.method = "immediate"
            }
            return 0
        }

        function Ur(e, r, t, n, o) {
            H(!Nr.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), Nr.mainLoop.func = e, Nr.mainLoop.arg = n;
            var a = Nr.mainLoop.currentlyRunningMainloop;

            function i() {
                return !(a < Nr.mainLoop.currentlyRunningMainloop)
            }
            if (Nr.mainLoop.running = !1, Nr.mainLoop.runner = function() {
                    if (!V)
                        if (Nr.mainLoop.queue.length > 0) {
                            var r = Date.now(),
                                t = Nr.mainLoop.queue.shift();
                            if (t.func(t.arg), Nr.mainLoop.remainingBlockers) {
                                var n = Nr.mainLoop.remainingBlockers,
                                    o = n % 1 == 0 ? n - 1 : Math.floor(n);
                                t.counted ? Nr.mainLoop.remainingBlockers = o : (o += .5, Nr.mainLoop.remainingBlockers = (8 * n + o) / 9)
                            }
                            if (B('main loop blocker "' + t.name + '" took ' + (Date.now() - r) + " ms"), Nr.mainLoop.updateStatus(), !i()) return;
                            setTimeout(Nr.mainLoop.runner, 0)
                        } else i() && (Nr.mainLoop.currentFrameNumber = Nr.mainLoop.currentFrameNumber + 1 | 0, 1 == Nr.mainLoop.timingMode && Nr.mainLoop.timingValue > 1 && Nr.mainLoop.currentFrameNumber % Nr.mainLoop.timingValue != 0 ? Nr.mainLoop.scheduler() : (0 == Nr.mainLoop.timingMode && (Nr.mainLoop.tickStartTime = Ir()), zt.newRenderingFrameStarted(), Nr.mainLoop.runIter(e), i() && ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), Nr.mainLoop.scheduler())))
                }, o || (r && r > 0 ? Or(0, 1e3 / r) : Or(1, 1), Nr.mainLoop.scheduler()), t) throw "unwind"
        }
        Ir = () => performance.now();
        var zr = {
            audioInstanceIdCounter: 0,
            audioInstances: {},
            audioContext: null,
            audioWebEnabled: 0,
            audioCache: [],
            pendingAudioSources: {},
            FAKEMOD_SAMPLERATE: 44100,
            audioContextSuspendedTime: 0,
            audioContextResumeOffset: 0,
            contextIsRunning: !1,
            soundsPendingContextResume: []
        };

        function Gr(e) {
            e.estimatePlaybackPosition = function() {
                var r = (zr.audioContext.currentTime - e.playbackStartTime) * e.playbackRate.value;
                return e.loop && r >= e.loopStart && (r = (r - e.loopStart) % (e.loopEnd - e.loopStart) + e.loopStart), r
            }, e.setPitch = function(r) {
                var t = e.estimatePlaybackPosition();
                t >= 0 && (e.playbackStartTime = zr.audioContext.currentTime - t / r), e.playbackRate.value !== r && (e.playbackRate.value = r)
            }
        }

        function qr(e, r) {
            var t = {
                buffer: e,
                error: r,
                release: function() {},
                getLength: function() {
                    return this.buffer ? this.buffer.length : (console.log("Trying to get length of sound which is not loaded yet."), 0)
                },
                getData: function(e, r) {
                    if (!this.buffer) return console.log("Trying to get data of sound which is not loaded."), 0;
                    for (var t = e >> 2, n = U.subarray(t, t + (r >> 2)), o = Math.floor((r >> 2) / this.buffer.numberOfChannels), a = Math.min(this.buffer.length, o), i = 0; i < this.buffer.numberOfChannels; i++) {
                        var s = this.buffer.getChannelData(i).subarray(0, a);
                        n.set(s, i * a)
                    }
                    return a * this.buffer.numberOfChannels * 4
                },
                getNumberOfChannels: function() {
                    return this.buffer ? this.buffer.numberOfChannels : (console.log("Trying to get metadata of sound which is not loaded."), 0)
                },
                getFrequency: function() {
                    return this.buffer ? this.buffer.sampleRate : (console.log("Trying to get metadata of sound which is not loaded."), 0)
                },
                createSourceNode: function() {
                    this.buffer || console.log("Trying to play sound which is not loaded.");
                    var e = zr.audioContext.createBufferSource();
                    return e.buffer = this.buffer, Gr(e), e
                }
            };
            return t
        }

        function Wr(e, r) {
            0 != zr.audioWebEnabled && zr.audioInstances[e].stop(r)
        }
        var Vr = {};

        function Hr(e) {
            return ge(e)
        }
        var jr = {};
        var Yr = {
            requests: {},
            responses: {},
            abortControllers: {},
            timer: {},
            nextRequestId: 1
        };

        function Xr(e) {
            var r = Yr.responses[e];
            if (!r) return "";
            if (r.headerString) return r.headerString;
            for (var t = "", n = r.headers.entries(), o = n.next(); !o.done; o = n.next()) t += o.value[0] + ": " + o.value[1] + "\r\n";
            return r.headerString = t, t
        }
        var Kr = {
            mount: function(e) {
                return o.websocket = o.websocket && "object" == typeof o.websocket ? o.websocket : {}, o.websocket._callbacks = {}, o.websocket.on = function(e, r) {
                    return "function" == typeof r && (this._callbacks[e] = r), this
                }, o.websocket.emit = function(e, r) {
                    "function" == typeof this._callbacks[e] && this._callbacks[e].call(this, r)
                }, Pr.createNode(null, "/", 16895, 0)
            },
            createSocket: function(e, r, t) {
                if (1 == (r &= -526337) && t && 6 != t) throw new Pr.ErrnoError(66);
                var n = {
                        family: e,
                        type: r,
                        protocol: t,
                        server: null,
                        error: null,
                        peers: {},
                        pending: [],
                        recv_queue: [],
                        sock_ops: Kr.websocket_sock_ops
                    },
                    o = Kr.nextname(),
                    a = Pr.createNode(Kr.root, o, 49152, 0);
                a.sock = n;
                var i = Pr.createStream({
                    path: o,
                    node: a,
                    flags: 2,
                    seekable: !1,
                    stream_ops: Kr.stream_ops
                });
                return n.stream = i, n
            },
            getSocket: function(e) {
                var r = Pr.getStream(e);
                return r && Pr.isSocket(r.node.mode) ? r.node.sock : null
            },
            stream_ops: {
                poll: function(e) {
                    var r = e.node.sock;
                    return r.sock_ops.poll(r)
                },
                ioctl: function(e, r, t) {
                    var n = e.node.sock;
                    return n.sock_ops.ioctl(n, r, t)
                },
                read: function(e, r, t, n, o) {
                    var a = e.node.sock,
                        i = a.sock_ops.recvmsg(a, n);
                    return i ? (r.set(i.buffer, t), i.buffer.length) : 0
                },
                write: function(e, r, t, n, o) {
                    var a = e.node.sock;
                    return a.sock_ops.sendmsg(a, r, t, n)
                },
                close: function(e) {
                    var r = e.node.sock;
                    r.sock_ops.close(r)
                }
            },
            nextname: function() {
                return Kr.nextname.current || (Kr.nextname.current = 0), "socket[" + Kr.nextname.current++ + "]"
            },
            websocket_sock_ops: {
                createPeer: function(e, r, t) {
                    var n;
                    if ("object" == typeof r && (n = r, r = null, t = null), n)
                        if (n._socket) r = n._socket.remoteAddress, t = n._socket.remotePort;
                        else {
                            var a = /ws[s]?:\/\/([^:]+):(\d+)/.exec(n.url);
                            if (!a) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
                            r = a[1], t = parseInt(a[2], 10)
                        }
                    else try {
                        var i = o.websocket && "object" == typeof o.websocket,
                            s = "ws:#".replace("#", "//");
                        if (i && "string" == typeof o.websocket.url && (s = o.websocket.url), "ws://" === s || "wss://" === s) {
                            var u = r.split("/");
                            s = s + u[0] + ":" + t + "/" + u.slice(1).join("/")
                        }
                        var c = "binary";
                        i && "string" == typeof o.websocket.subprotocol && (c = o.websocket.subprotocol);
                        var f = void 0;
                        "null" !== c && (f = c = c.replace(/^ +| +$/g, "").split(/ *, */)), i && null === o.websocket.subprotocol && (c = "null", f = void 0), (n = new WebSocket(s, f)).binaryType = "arraybuffer"
                    } catch (e) {
                        throw new Pr.ErrnoError(23)
                    }
                    var l = {
                        addr: r,
                        port: t,
                        socket: n,
                        msg_send_queue: []
                    };
                    return Kr.websocket_sock_ops.addPeer(e, l), Kr.websocket_sock_ops.handlePeerEvents(e, l), 2 === e.type && void 0 !== e.sport && l.msg_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (65280 & e.sport) >> 8, 255 & e.sport])), l
                },
                getPeer: function(e, r, t) {
                    return e.peers[r + ":" + t]
                },
                addPeer: function(e, r) {
                    e.peers[r.addr + ":" + r.port] = r
                },
                removePeer: function(e, r) {
                    delete e.peers[r.addr + ":" + r.port]
                },
                handlePeerEvents: function(e, r) {
                    var t = !0,
                        n = function() {
                            o.websocket.emit("open", e.stream.fd);
                            try {
                                for (var t = r.msg_send_queue.shift(); t;) console.error("peer.socket.send(queued)"), r.socket.send(t), t = r.msg_send_queue.shift()
                            } catch (e) {
                                r.socket.close()
                            }
                        };

                    function a(n) {
                        if ("string" == typeof n) {
                            n = (new TextEncoder).encode(n)
                        } else {
                            if (H(void 0 !== n.byteLength), 0 == n.byteLength) return;
                            n = new Uint8Array(n)
                        }
                        var a = t;
                        if (t = !1, a && 10 === n.length && 255 === n[0] && 255 === n[1] && 255 === n[2] && 255 === n[3] && n[4] === "p".charCodeAt(0) && n[5] === "o".charCodeAt(0) && n[6] === "r".charCodeAt(0) && n[7] === "t".charCodeAt(0)) {
                            var i = n[8] << 8 | n[9];
                            return Kr.websocket_sock_ops.removePeer(e, r), r.port = i, void Kr.websocket_sock_ops.addPeer(e, r)
                        }
                        e.recv_queue.push({
                            addr: r.addr,
                            port: r.port,
                            data: n
                        }), o.websocket.emit("message", e.stream.fd)
                    }
                    r.socket.onopen = n, r.socket.onclose = function() {
                        o.websocket.emit("close", e.stream.fd)
                    }, r.socket.onmessage = function(e) {
                        a(e.data)
                    }, r.socket.onerror = function(r) {
                        e.error = 14, o.websocket.emit("error", [e.stream.fd, e.error, "ECONNREFUSED: Connection refused"])
                    }
                },
                poll: function(e) {
                    if (1 === e.type && e.server) return e.pending.length ? 65 : 0;
                    var r = 0,
                        t = 1 === e.type ? Kr.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
                    return (e.recv_queue.length || !t || t && t.socket.readyState === t.socket.CLOSING || t && t.socket.readyState === t.socket.CLOSED) && (r |= 65), (!t || t && t.socket.readyState === t.socket.OPEN) && (r |= 4), (t && t.socket.readyState === t.socket.CLOSING || t && t.socket.readyState === t.socket.CLOSED) && (r |= 16), r
                },
                ioctl: function(e, r, t) {
                    if (21531 === r) {
                        var n = 0;
                        return e.recv_queue.length && (n = e.recv_queue[0].data.length), N[t >> 2] = n, 0
                    }
                    return 28
                },
                close: function(e) {
                    if (e.server) {
                        try {
                            e.server.close()
                        } catch (e) {}
                        e.server = null
                    }
                    for (var r = Object.keys(e.peers), t = 0; t < r.length; t++) {
                        var n = e.peers[r[t]];
                        try {
                            n.socket.close()
                        } catch (e) {}
                        Kr.websocket_sock_ops.removePeer(e, n)
                    }
                    return 0
                },
                bind: function(e, r, t) {
                    if (void 0 !== e.saddr || void 0 !== e.sport) throw new Pr.ErrnoError(28);
                    if (e.saddr = r, e.sport = t, 2 === e.type) {
                        e.server && (e.server.close(), e.server = null);
                        try {
                            e.sock_ops.listen(e, 0)
                        } catch (e) {
                            if ("ErrnoError" !== e.name) throw e;
                            if (138 !== e.errno) throw e
                        }
                    }
                },
                connect: function(e, r, t) {
                    if (e.server) throw new Pr.ErrnoError(138);
                    if (void 0 !== e.daddr && void 0 !== e.dport) {
                        var n = Kr.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
                        if (n) throw n.socket.readyState === n.socket.CONNECTING ? new Pr.ErrnoError(7) : new Pr.ErrnoError(30)
                    }
                    var o = Kr.websocket_sock_ops.createPeer(e, r, t);
                    e.daddr = o.addr, e.dport = o.port
                },
                listen: function(e, r) {
                    throw new Pr.ErrnoError(138)
                },
                accept: function(e) {
                    if (!e.server || !e.pending.length) throw new Pr.ErrnoError(28);
                    var r = e.pending.shift();
                    return r.stream.flags = e.stream.flags, r
                },
                getname: function(e, r) {
                    var t, n;
                    if (r) {
                        if (void 0 === e.daddr || void 0 === e.dport) throw new Pr.ErrnoError(53);
                        t = e.daddr, n = e.dport
                    } else t = e.saddr || 0, n = e.sport || 0;
                    return {
                        addr: t,
                        port: n
                    }
                },
                sendmsg: function(e, r, t, n, o, a) {
                    if (2 === e.type) {
                        if (void 0 !== o && void 0 !== a || (o = e.daddr, a = e.dport), void 0 === o || void 0 === a) throw new Pr.ErrnoError(17)
                    } else o = e.daddr, a = e.dport;
                    var i, s = Kr.websocket_sock_ops.getPeer(e, o, a);
                    if (1 === e.type && (!s || s.socket.readyState === s.socket.CLOSING || s.socket.readyState === s.socket.CLOSED)) throw new Pr.ErrnoError(53);
                    if (ArrayBuffer.isView(r) && (t += r.byteOffset, r = r.buffer), i = r.slice(t, t + n), !s || s.socket.readyState !== s.socket.OPEN) return 2 === e.type && (s && s.socket.readyState !== s.socket.CLOSING && s.socket.readyState !== s.socket.CLOSED || (s = Kr.websocket_sock_ops.createPeer(e, o, a))), s.msg_send_queue.push(i), n;
                    try {
                        return s.socket.send(i), n
                    } catch (e) {
                        throw new Pr.ErrnoError(28)
                    }
                },
                recvmsg: function(e, r) {
                    if (1 === e.type && e.server) throw new Pr.ErrnoError(53);
                    var t = e.recv_queue.shift();
                    if (!t) {
                        if (1 === e.type) {
                            var n = Kr.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
                            if (!n) throw new Pr.ErrnoError(53);
                            if (n.socket.readyState === n.socket.CLOSING || n.socket.readyState === n.socket.CLOSED) return null;
                            throw new Pr.ErrnoError(6)
                        }
                        throw new Pr.ErrnoError(6)
                    }
                    var o = t.data.byteLength || t.data.length,
                        a = t.data.byteOffset || 0,
                        i = t.data.buffer || t.data,
                        s = Math.min(r, o),
                        u = {
                            buffer: new Uint8Array(i, a, s),
                            addr: t.addr,
                            port: t.port
                        };
                    if (1 === e.type && s < o) {
                        var c = o - s;
                        t.data = new Uint8Array(i, a + s, c), e.recv_queue.unshift(t)
                    }
                    return u
                }
            }
        };

        function Zr(e) {
            var r = Kr.getSocket(e);
            if (!r) throw new Pr.ErrnoError(8);
            return r
        }

        function Jr(e) {
            return N[Xo() >> 2] = e, e
        }

        function $r(e) {
            for (var r = e.split("."), t = 0; t < 4; t++) {
                var n = Number(r[t]);
                if (isNaN(n)) return null;
                r[t] = n
            }
            return (r[0] | r[1] << 8 | r[2] << 16 | r[3] << 24) >>> 0
        }

        function Qr(e) {
            return parseInt(e)
        }

        function et(e) {
            var r, t, n, o, a = [];
            if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(e)) return null;
            if ("::" === e) return [0, 0, 0, 0, 0, 0, 0, 0];
            for ((e = e.startsWith("::") ? e.replace("::", "Z:") : e.replace("::", ":Z:")).indexOf(".") > 0 ? ((r = (e = e.replace(new RegExp("[.]", "g"), ":")).split(":"))[r.length - 4] = Qr(r[r.length - 4]) + 256 * Qr(r[r.length - 3]), r[r.length - 3] = Qr(r[r.length - 2]) + 256 * Qr(r[r.length - 1]), r = r.slice(0, r.length - 2)) : r = e.split(":"), n = 0, o = 0, t = 0; t < r.length; t++)
                if ("string" == typeof r[t])
                    if ("Z" === r[t]) {
                        for (o = 0; o < 8 - r.length + 1; o++) a[t + o] = 0;
                        n = o - 1
                    } else a[t + n] = Zo(parseInt(r[t], 16));
            else a[t + n] = r[t];
            return [a[1] << 16 | a[0], a[3] << 16 | a[2], a[5] << 16 | a[4], a[7] << 16 | a[6]]
        }

        function rt(e, r, t, n, o) {
            switch (r) {
                case 2:
                    t = $r(t), xr(e, 16), o && (N[o >> 2] = 16), T[e >> 1] = r, N[e + 4 >> 2] = t, T[e + 2 >> 1] = Zo(n);
                    break;
                case 10:
                    t = et(t), xr(e, 28), o && (N[o >> 2] = 28), N[e >> 2] = r, N[e + 8 >> 2] = t[0], N[e + 12 >> 2] = t[1], N[e + 16 >> 2] = t[2], N[e + 20 >> 2] = t[3], T[e + 2 >> 1] = Zo(n);
                    break;
                default:
                    return 5
            }
            return 0
        }
        var tt = {
            address_map: {
                id: 1,
                addrs: {},
                names: {}
            },
            lookup_name: function(e) {
                var r, t = $r(e);
                if (null !== t) return e;
                if (null !== (t = et(e))) return e;
                if (tt.address_map.addrs[e]) r = tt.address_map.addrs[e];
                else {
                    var n = tt.address_map.id++;
                    H(n < 65535, "exceeded max address mappings of 65535"), r = "172.29." + (255 & n) + "." + (65280 & n), tt.address_map.names[r] = e, tt.address_map.addrs[e] = r
                }
                return r
            },
            lookup_addr: function(e) {
                return tt.address_map.names[e] ? tt.address_map.names[e] : null
            }
        };

        function nt(e) {
            return (255 & e) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255)
        }

        function ot(e) {
            var r = "",
                t = 0,
                n = 0,
                o = 0,
                a = 0,
                i = 0,
                s = 0,
                u = [65535 & e[0], e[0] >> 16, 65535 & e[1], e[1] >> 16, 65535 & e[2], e[2] >> 16, 65535 & e[3], e[3] >> 16],
                c = !0,
                f = "";
            for (s = 0; s < 5; s++)
                if (0 !== u[s]) {
                    c = !1;
                    break
                } if (c) {
                if (f = nt(u[6] | u[7] << 16), -1 === u[5]) return r = "::ffff:", r += f;
                if (0 === u[5]) return r = "::", "0.0.0.0" === f && (f = ""), "0.0.0.1" === f && (f = "1"), r += f
            }
            for (t = 0; t < 8; t++) 0 === u[t] && (t - o > 1 && (i = 0), o = t, i++), i > n && (a = t - (n = i) + 1);
            for (t = 0; t < 8; t++) n > 1 && 0 === u[t] && t >= a && t < a + n ? t === a && (r += ":", 0 === a && (r += ":")) : (r += Number(Jo(65535 & u[t])).toString(16), r += t < 7 ? ":" : "");
            return r
        }

        function at(e, r) {
            var t, n = T[e >> 1],
                o = Jo(I[e + 2 >> 1]);
            switch (n) {
                case 2:
                    if (16 !== r) return {
                        errno: 28
                    };
                    t = nt(t = N[e + 4 >> 2]);
                    break;
                case 10:
                    if (28 !== r) return {
                        errno: 28
                    };
                    t = ot(t = [N[e + 8 >> 2], N[e + 12 >> 2], N[e + 16 >> 2], N[e + 20 >> 2]]);
                    break;
                default:
                    return {
                        errno: 5
                    }
            }
            return {
                family: n,
                addr: t,
                port: o
            }
        }

        function it(e, r, t) {
            if (t && 0 === e) return null;
            var n = at(e, r);
            if (n.errno) throw new Pr.ErrnoError(n.errno);
            return n.addr = tt.lookup_addr(n.addr) || n.addr, n
        }
        var st = {
            BUCKET_BUFFER_SIZE: 8192,
            mount: function(e) {
                return Pr.createNode(null, "/", 16895, 0)
            },
            createPipe: function() {
                var e = {
                    buckets: [],
                    refcnt: 2
                };
                e.buckets.push({
                    buffer: new Uint8Array(st.BUCKET_BUFFER_SIZE),
                    offset: 0,
                    roffset: 0
                });
                var r = st.nextname(),
                    t = st.nextname(),
                    n = Pr.createNode(st.root, r, 4096, 0),
                    o = Pr.createNode(st.root, t, 4096, 0);
                n.pipe = e, o.pipe = e;
                var a = Pr.createStream({
                    path: r,
                    node: n,
                    flags: 0,
                    seekable: !1,
                    stream_ops: st.stream_ops
                });
                n.stream = a;
                var i = Pr.createStream({
                    path: t,
                    node: o,
                    flags: 1,
                    seekable: !1,
                    stream_ops: st.stream_ops
                });
                return o.stream = i, {
                    readable_fd: a.fd,
                    writable_fd: i.fd
                }
            },
            stream_ops: {
                poll: function(e) {
                    var r = e.node.pipe;
                    if (1 == (2097155 & e.flags)) return 260;
                    if (r.buckets.length > 0)
                        for (var t = 0; t < r.buckets.length; t++) {
                            var n = r.buckets[t];
                            if (n.offset - n.roffset > 0) return 65
                        }
                    return 0
                },
                ioctl: function(e, r, t) {
                    return 28
                },
                fsync: function(e) {
                    return 28
                },
                read: function(e, r, t, n, o) {
                    for (var a = e.node.pipe, i = 0, s = 0; s < a.buckets.length; s++) {
                        var u = a.buckets[s];
                        i += u.offset - u.roffset
                    }
                    H(r instanceof ArrayBuffer || ArrayBuffer.isView(r));
                    var c = r.subarray(t, t + n);
                    if (n <= 0) return 0;
                    if (0 == i) throw new Pr.ErrnoError(6);
                    var f = Math.min(i, n),
                        l = f,
                        d = 0;
                    for (s = 0; s < a.buckets.length; s++) {
                        var m = a.buckets[s],
                            p = m.offset - m.roffset;
                        if (f <= p) {
                            var v = m.buffer.subarray(m.roffset, m.offset);
                            f < p ? (v = v.subarray(0, f), m.roffset += f) : d++, c.set(v);
                            break
                        }
                        v = m.buffer.subarray(m.roffset, m.offset);
                        c.set(v), c = c.subarray(v.byteLength), f -= v.byteLength, d++
                    }
                    return d && d == a.buckets.length && (d--, a.buckets[d].offset = 0, a.buckets[d].roffset = 0), a.buckets.splice(0, d), l
                },
                write: function(e, r, t, n, o) {
                    var a = e.node.pipe;
                    H(r instanceof ArrayBuffer || ArrayBuffer.isView(r));
                    var i = r.subarray(t, t + n),
                        s = i.byteLength;
                    if (s <= 0) return 0;
                    var u = null;
                    0 == a.buckets.length ? (u = {
                        buffer: new Uint8Array(st.BUCKET_BUFFER_SIZE),
                        offset: 0,
                        roffset: 0
                    }, a.buckets.push(u)) : u = a.buckets[a.buckets.length - 1], H(u.offset <= st.BUCKET_BUFFER_SIZE);
                    var c = st.BUCKET_BUFFER_SIZE - u.offset;
                    if (c >= s) return u.buffer.set(i, u.offset), u.offset += s, s;
                    c > 0 && (u.buffer.set(i.subarray(0, c), u.offset), u.offset += c, i = i.subarray(c, i.byteLength));
                    for (var f = i.byteLength / st.BUCKET_BUFFER_SIZE | 0, l = i.byteLength % st.BUCKET_BUFFER_SIZE, d = 0; d < f; d++) {
                        var m = {
                            buffer: new Uint8Array(st.BUCKET_BUFFER_SIZE),
                            offset: st.BUCKET_BUFFER_SIZE,
                            roffset: 0
                        };
                        a.buckets.push(m), m.buffer.set(i.subarray(0, st.BUCKET_BUFFER_SIZE)), i = i.subarray(st.BUCKET_BUFFER_SIZE, i.byteLength)
                    }
                    if (l > 0) {
                        m = {
                            buffer: new Uint8Array(st.BUCKET_BUFFER_SIZE),
                            offset: i.byteLength,
                            roffset: 0
                        };
                        a.buckets.push(m), m.buffer.set(i)
                    }
                    return s
                },
                close: function(e) {
                    var r = e.node.pipe;
                    r.refcnt--, 0 === r.refcnt && (r.buckets = null)
                }
            },
            nextname: function() {
                return st.nextname.current || (st.nextname.current = 0), "pipe[" + st.nextname.current++ + "]"
            }
        };
        var ut = 9007199254740992,
            ct = -9007199254740992;

        function ft(e) {
            return e < ct || e > ut ? NaN : Number(e)
        }

        function lt(e) {
            return O[e >> 2] + 4294967296 * N[e + 4 >> 2]
        }

        function dt(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
        }
        var mt = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
            pt = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

        function vt(e) {
            return (dt(e.getFullYear()) ? mt : pt)[e.getMonth()] + e.getDate() - 1
        }

        function gt(e) {
            var r = ta(),
                t = e();
            return na(r), t
        }
        var ht = {
                inEventHandler: 0,
                removeAllEventListeners: function() {
                    for (var e = ht.eventHandlers.length - 1; e >= 0; --e) ht._removeHandler(e);
                    ht.eventHandlers = [], ht.deferredCalls = []
                },
                registerRemoveEventListeners: function() {
                    ht.removeEventListenersRegistered || (Z.push(ht.removeAllEventListeners), ht.removeEventListenersRegistered = !0)
                },
                deferredCalls: [],
                deferCall: function(e, r, t) {
                    function n(e, r) {
                        if (e.length != r.length) return !1;
                        for (var t in e)
                            if (e[t] != r[t]) return !1;
                        return !0
                    }
                    for (var o in ht.deferredCalls) {
                        var a = ht.deferredCalls[o];
                        if (a.targetFunction == e && n(a.argsList, t)) return
                    }
                    ht.deferredCalls.push({
                        targetFunction: e,
                        precedence: r,
                        argsList: t
                    }), ht.deferredCalls.sort((function(e, r) {
                        return e.precedence < r.precedence
                    }))
                },
                removeDeferredCalls: function(e) {
                    for (var r = 0; r < ht.deferredCalls.length; ++r) ht.deferredCalls[r].targetFunction == e && (ht.deferredCalls.splice(r, 1), --r)
                },
                canPerformEventHandlerRequests: function() {
                    return ht.inEventHandler && ht.currentEventHandler.allowsDeferredCalls
                },
                runDeferredCalls: function() {
                    if (ht.canPerformEventHandlerRequests())
                        for (var e = 0; e < ht.deferredCalls.length; ++e) {
                            var r = ht.deferredCalls[e];
                            ht.deferredCalls.splice(e, 1), --e, r.targetFunction.apply(null, r.argsList)
                        }
                },
                eventHandlers: [],
                removeAllHandlersOnTarget: function(e, r) {
                    for (var t = 0; t < ht.eventHandlers.length; ++t) ht.eventHandlers[t].target != e || r && r != ht.eventHandlers[t].eventTypeString || ht._removeHandler(t--)
                },
                _removeHandler: function(e) {
                    var r = ht.eventHandlers[e];
                    r.target.removeEventListener(r.eventTypeString, r.eventListenerFunc, r.useCapture), ht.eventHandlers.splice(e, 1)
                },
                registerOrRemoveHandler: function(e) {
                    if (!e.target) return -4;
                    var r = function(r) {
                        ++ht.inEventHandler, ht.currentEventHandler = e, ht.runDeferredCalls(), e.handlerFunc(r), ht.runDeferredCalls(), --ht.inEventHandler
                    };
                    if (e.callbackfunc) e.eventListenerFunc = r, e.target.addEventListener(e.eventTypeString, r, e.useCapture), ht.eventHandlers.push(e), ht.registerRemoveEventListeners();
                    else
                        for (var t = 0; t < ht.eventHandlers.length; ++t) ht.eventHandlers[t].target == e.target && ht.eventHandlers[t].eventTypeString == e.eventTypeString && ht._removeHandler(t--);
                    return 0
                },
                getNodeNameForTarget: function(e) {
                    return e ? e == window ? "#window" : e == screen ? "#screen" : e && e.nodeName ? e.nodeName : "" : ""
                },
                fullscreenEnabled: function() {
                    return document.fullscreenEnabled || document.webkitFullscreenEnabled
                }
            },
            yt = {};
        var bt = [0, document, window];

        function wt(e) {
            var r;
            return e = (r = e) > 2 ? ge(r) : r, bt[e] || document.querySelector(e)
        }

        function Et(e) {
            return wt(e)
        }

        function kt(e, r, t) {
            var n = Et(e);
            if (!n) return -4;
            N[r >> 2] = n.width, N[t >> 2] = n.height
        }

        function xt(e) {
            var r = ze(e) + 1,
                t = oa(r);
            return qe(e, t, r), t
        }

        function St(e) {
            return gt((function() {
                var r = oa(8),
                    t = r + 4;
                kt(xt(e.id), r, t);
                return [N[r >> 2], N[t >> 2]]
            }))
        }

        function _t(e, r, t) {
            var n = Et(e);
            return n ? (n.width = r, n.height = t, 0) : -4
        }

        function Ct(e, r, t) {
            e.controlTransferredOffscreen ? gt((function() {
                _t(xt(e.id), r, t)
            })) : (e.width = r, e.height = t)
        }

        function Lt(e, r, t) {
            e.style.paddingLeft = e.style.paddingRight = t + "px", e.style.paddingTop = e.style.paddingBottom = r + "px"
        }

        function Bt(e) {
            return bt.indexOf(e) < 0 ? e.getBoundingClientRect() : {
                left: 0,
                top: 0
            }
        }

        function Pt(e, r) {
            var t = function(e) {
                    var r = St(e),
                        t = r[0],
                        n = r[1],
                        o = e.style.width,
                        a = e.style.height,
                        i = e.style.backgroundColor,
                        s = document.body.style.backgroundColor,
                        u = e.style.paddingLeft,
                        c = e.style.paddingRight,
                        f = e.style.paddingTop,
                        l = e.style.paddingBottom,
                        d = e.style.marginLeft,
                        m = e.style.marginRight,
                        p = e.style.marginTop,
                        v = e.style.marginBottom,
                        g = document.body.style.margin,
                        h = document.documentElement.style.overflow,
                        y = document.body.scroll,
                        b = e.style.imageRendering;

                    function w() {
                        document.fullscreenElement || document.webkitFullscreenElement || (document.removeEventListener("fullscreenchange", w), document.removeEventListener("webkitfullscreenchange", w), Ct(e, t, n), e.style.width = o, e.style.height = a, e.style.backgroundColor = i, s || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = s, e.style.paddingLeft = u, e.style.paddingRight = c, e.style.paddingTop = f, e.style.paddingBottom = l, e.style.marginLeft = d, e.style.marginRight = m, e.style.marginTop = p, e.style.marginBottom = v, document.body.style.margin = g, document.documentElement.style.overflow = h, document.body.scroll = y, e.style.imageRendering = b, e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, t, n), yt.canvasResizedCallback && ke(yt.canvasResizedCallback)(37, 0, yt.canvasResizedCallbackUserData))
                    }
                    return document.addEventListener("fullscreenchange", w), document.addEventListener("webkitfullscreenchange", w), w
                }(e),
                n = r.softFullscreen ? innerWidth : screen.width,
                o = r.softFullscreen ? innerHeight : screen.height,
                a = Bt(e),
                i = a.width,
                s = a.height,
                u = St(e),
                c = u[0],
                f = u[1];
            if (3 == r.scaleMode) Lt(e, (o - s) / 2, (n - i) / 2), n = i, o = s;
            else if (2 == r.scaleMode)
                if (n * f < c * o) {
                    var l = f * n / c;
                    Lt(e, (o - l) / 2, 0), o = l
                } else {
                    var d = c * o / f;
                    Lt(e, 0, (n - d) / 2), n = d
                } e.style.backgroundColor || (e.style.backgroundColor = "black"), document.body.style.backgroundColor || (document.body.style.backgroundColor = "black"), e.style.width = n + "px", e.style.height = o + "px", 1 == r.filteringMode && (e.style.imageRendering = "optimizeSpeed", e.style.imageRendering = "-moz-crisp-edges", e.style.imageRendering = "-o-crisp-edges", e.style.imageRendering = "-webkit-optimize-contrast", e.style.imageRendering = "optimize-contrast", e.style.imageRendering = "crisp-edges", e.style.imageRendering = "pixelated");
            var m = 2 == r.canvasResolutionScaleMode ? devicePixelRatio : 1;
            if (0 != r.canvasResolutionScaleMode) {
                var p = n * m | 0,
                    v = o * m | 0;
                Ct(e, p, v), e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, p, v)
            }
            return t
        }

        function At(e, r) {
            if (0 == r.scaleMode && 0 == r.canvasResolutionScaleMode || Pt(e, r), e.requestFullscreen) e.requestFullscreen();
            else {
                if (!e.webkitRequestFullscreen) return ht.fullscreenEnabled() ? -3 : -1;
                e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
            }
            return yt = r, r.canvasResizedCallback && ke(r.canvasResizedCallback)(37, 0, r.canvasResizedCallbackUserData), 0
        }

        function Dt(e) {
            return e.requestPointerLock ? (e.requestPointerLock(), 0) : document.body.requestPointerLock ? -3 : -1
        }

        function Ft(e) {
            var r = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement,
                t = !!r;
            N[e >> 2] = t, N[e + 4 >> 2] = ht.fullscreenEnabled();
            var n = t ? r : ht.previousFullscreenElement,
                o = ht.getNodeNameForTarget(n),
                a = n && n.id ? n.id : "";
            qe(o, e + 8, 128), qe(a, e + 136, 128), N[e + 264 >> 2] = n ? n.clientWidth : 0, N[e + 268 >> 2] = n ? n.clientHeight : 0, N[e + 272 >> 2] = screen.width, N[e + 276 >> 2] = screen.height, t && (ht.previousFullscreenElement = r)
        }

        function Mt(e, r) {
            q[e >> 3] = r.timestamp;
            for (var t = 0; t < r.axes.length; ++t) q[e + 8 * t + 16 >> 3] = r.axes[t];
            for (t = 0; t < r.buttons.length; ++t) "object" == typeof r.buttons[t] ? q[e + 8 * t + 528 >> 3] = r.buttons[t].value : q[e + 8 * t + 528 >> 3] = r.buttons[t];
            for (t = 0; t < r.buttons.length; ++t) "object" == typeof r.buttons[t] ? N[e + 4 * t + 1040 >> 2] = r.buttons[t].pressed : N[e + 4 * t + 1040 >> 2] = 1 == r.buttons[t];
            N[e + 1296 >> 2] = r.connected, N[e + 1300 >> 2] = r.index, N[e + 8 >> 2] = r.axes.length, N[e + 12 >> 2] = r.buttons.length, qe(r.id, e + 1304, 64), qe(r.mapping, e + 1368, 64)
        }

        function Rt(e) {
            var r = e.getExtension("ANGLE_instanced_arrays");
            if (r) return e.vertexAttribDivisor = function(e, t) {
                r.vertexAttribDivisorANGLE(e, t)
            }, e.drawArraysInstanced = function(e, t, n, o) {
                r.drawArraysInstancedANGLE(e, t, n, o)
            }, e.drawElementsInstanced = function(e, t, n, o, a) {
                r.drawElementsInstancedANGLE(e, t, n, o, a)
            }, 1
        }

        function Tt(e) {
            var r = e.getExtension("OES_vertex_array_object");
            if (r) return e.createVertexArray = function() {
                return r.createVertexArrayOES()
            }, e.deleteVertexArray = function(e) {
                r.deleteVertexArrayOES(e)
            }, e.bindVertexArray = function(e) {
                r.bindVertexArrayOES(e)
            }, e.isVertexArray = function(e) {
                return r.isVertexArrayOES(e)
            }, 1
        }

        function It(e) {
            var r = e.getExtension("WEBGL_draw_buffers");
            if (r) return e.drawBuffers = function(e, t) {
                r.drawBuffersWEBGL(e, t)
            }, 1
        }

        function Nt(e) {
            return !!(e.dibvbi = e.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"))
        }

        function Ot(e) {
            return !!(e.mdibvbi = e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"))
        }

        function Ut(e) {
            return !!(e.multiDrawWebgl = e.getExtension("WEBGL_multi_draw"))
        }
        var zt = {
            counter: 1,
            buffers: [],
            mappedBuffers: {},
            programs: [],
            framebuffers: [],
            renderbuffers: [],
            textures: [],
            shaders: [],
            vaos: [],
            contexts: [],
            offscreenCanvases: {},
            queries: [],
            samplers: [],
            transformFeedbacks: [],
            syncs: [],
            byteSizeByTypeRoot: 5120,
            byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
            stringCache: {},
            stringiCache: {},
            unpackAlignment: 4,
            recordError: function(e) {
                zt.lastError || (zt.lastError = e)
            },
            getNewId: function(e) {
                for (var r = zt.counter++, t = e.length; t < r; t++) e[t] = null;
                return r
            },
            MAX_TEMP_BUFFER_SIZE: 2097152,
            numTempVertexBuffersPerSize: 64,
            log2ceilLookup: function(e) {
                return 32 - Math.clz32(0 === e ? 0 : e - 1)
            },
            generateTempBuffers: function(e, r) {
                var t = zt.log2ceilLookup(zt.MAX_TEMP_BUFFER_SIZE);
                r.tempVertexBufferCounters1 = [], r.tempVertexBufferCounters2 = [], r.tempVertexBufferCounters1.length = r.tempVertexBufferCounters2.length = t + 1, r.tempVertexBuffers1 = [], r.tempVertexBuffers2 = [], r.tempVertexBuffers1.length = r.tempVertexBuffers2.length = t + 1, r.tempIndexBuffers = [], r.tempIndexBuffers.length = t + 1;
                for (var n = 0; n <= t; ++n) {
                    r.tempIndexBuffers[n] = null, r.tempVertexBufferCounters1[n] = r.tempVertexBufferCounters2[n] = 0;
                    var o = zt.numTempVertexBuffersPerSize;
                    r.tempVertexBuffers1[n] = [], r.tempVertexBuffers2[n] = [];
                    var a = r.tempVertexBuffers1[n],
                        i = r.tempVertexBuffers2[n];
                    a.length = i.length = o;
                    for (var s = 0; s < o; ++s) a[s] = i[s] = null
                }
                if (e) {
                    r.tempQuadIndexBuffer = Bo.createBuffer(), r.GLctx.bindBuffer(34963, r.tempQuadIndexBuffer);
                    for (var u = zt.MAX_TEMP_BUFFER_SIZE >> 1, c = new Uint16Array(u), f = (n = 0, 0); !(c[n++] = f, n >= u || (c[n++] = f + 1, n >= u) || (c[n++] = f + 2, n >= u) || (c[n++] = f, n >= u) || (c[n++] = f + 2, n >= u) || (c[n++] = f + 3, n >= u));) f += 4;
                    r.GLctx.bufferData(34963, c, 35044), r.GLctx.bindBuffer(34963, null)
                }
            },
            getTempVertexBuffer: function(e) {
                var r = zt.log2ceilLookup(e),
                    t = zt.currentContext.tempVertexBuffers1[r],
                    n = zt.currentContext.tempVertexBufferCounters1[r];
                zt.currentContext.tempVertexBufferCounters1[r] = zt.currentContext.tempVertexBufferCounters1[r] + 1 & zt.numTempVertexBuffersPerSize - 1;
                var o = t[n];
                if (o) return o;
                var a = Bo.getParameter(34964);
                return t[n] = Bo.createBuffer(), Bo.bindBuffer(34962, t[n]), Bo.bufferData(34962, 1 << r, 35048), Bo.bindBuffer(34962, a), t[n]
            },
            getTempIndexBuffer: function(e) {
                var r = zt.log2ceilLookup(e),
                    t = zt.currentContext.tempIndexBuffers[r];
                if (t) return t;
                var n = Bo.getParameter(34965);
                return zt.currentContext.tempIndexBuffers[r] = Bo.createBuffer(), Bo.bindBuffer(34963, zt.currentContext.tempIndexBuffers[r]), Bo.bufferData(34963, 1 << r, 35048), Bo.bindBuffer(34963, n), zt.currentContext.tempIndexBuffers[r]
            },
            newRenderingFrameStarted: function() {
                if (zt.currentContext) {
                    var e = zt.currentContext.tempVertexBuffers1;
                    zt.currentContext.tempVertexBuffers1 = zt.currentContext.tempVertexBuffers2, zt.currentContext.tempVertexBuffers2 = e, e = zt.currentContext.tempVertexBufferCounters1, zt.currentContext.tempVertexBufferCounters1 = zt.currentContext.tempVertexBufferCounters2, zt.currentContext.tempVertexBufferCounters2 = e;
                    for (var r = zt.log2ceilLookup(zt.MAX_TEMP_BUFFER_SIZE), t = 0; t <= r; ++t) zt.currentContext.tempVertexBufferCounters1[t] = 0
                }
            },
            getSource: function(e, r, t, n) {
                for (var o = "", a = 0; a < r; ++a) {
                    var i = n ? N[n + 4 * a >> 2] : -1;
                    o += ge(N[t + 4 * a >> 2], i < 0 ? void 0 : i)
                }
                return o
            },
            calcBufLength: function(e, r, t, n) {
                return t > 0 ? n * t : e * zt.byteSizeByType[r - zt.byteSizeByTypeRoot] * n
            },
            usedTempBuffers: [],
            preDrawHandleClientVertexAttribBindings: function(e) {
                zt.resetBufferBinding = !1;
                for (var r = 0; r < zt.currentContext.maxVertexAttribs; ++r) {
                    var t = zt.currentContext.clientBuffers[r];
                    if (t.clientside && t.enabled) {
                        zt.resetBufferBinding = !0;
                        var n = zt.calcBufLength(t.size, t.type, t.stride, e),
                            o = zt.getTempVertexBuffer(n);
                        Bo.bindBuffer(34962, o), Bo.bufferSubData(34962, 0, R.subarray(t.ptr, t.ptr + n)), t.vertexAttribPointerAdaptor.call(Bo, r, t.size, t.type, t.normalized, t.stride, 0)
                    }
                }
            },
            postDrawHandleClientVertexAttribBindings: function() {
                zt.resetBufferBinding && Bo.bindBuffer(34962, zt.buffers[Bo.currentArrayBufferBinding])
            },
            createContext: function(e, r) {
                if (!e.getContextSafariWebGL2Fixed) {
                    e.getContextSafariWebGL2Fixed = e.getContext, e.getContext = function(r, t) {
                        var n = e.getContextSafariWebGL2Fixed(r, t);
                        return "webgl" == r == n instanceof WebGLRenderingContext ? n : null
                    }
                }
                var t = r.majorVersion > 1 ? e.getContext("webgl2", r) : e.getContext("webgl", r);
                return t ? zt.registerContext(t, r) : 0
            },
            registerContext: function(e, r) {
                var t = zt.getNewId(zt.contexts),
                    n = {
                        handle: t,
                        attributes: r,
                        version: r.majorVersion,
                        GLctx: e
                    };
                e.canvas && (e.canvas.GLctxObject = n), zt.contexts[t] = n, (void 0 === r.enableExtensionsByDefault || r.enableExtensionsByDefault) && zt.initExtensions(n), n.maxVertexAttribs = n.GLctx.getParameter(34921), n.clientBuffers = [];
                for (var o = 0; o < n.maxVertexAttribs; o++) n.clientBuffers[o] = {
                    enabled: !1,
                    clientside: !1,
                    size: 0,
                    type: 0,
                    normalized: 0,
                    stride: 0,
                    ptr: 0,
                    vertexAttribPointerAdaptor: null
                };
                return zt.generateTempBuffers(!1, n), t
            },
            makeContextCurrent: function(e) {
                return zt.currentContext = zt.contexts[e], o.ctx = Bo = zt.currentContext && zt.currentContext.GLctx, !(e && !Bo)
            },
            getContext: function(e) {
                return zt.contexts[e]
            },
            deleteContext: function(e) {
                zt.currentContext === zt.contexts[e] && (zt.currentContext = null), "object" == typeof ht && ht.removeAllHandlersOnTarget(zt.contexts[e].GLctx.canvas), zt.contexts[e] && zt.contexts[e].GLctx.canvas && (zt.contexts[e].GLctx.canvas.GLctxObject = void 0), zt.contexts[e] = null
            },
            initExtensions: function(e) {
                if (e || (e = zt.currentContext), !e.initExtensionsDone) {
                    e.initExtensionsDone = !0;
                    var r = e.GLctx;
                    Rt(r), Tt(r), It(r), Nt(r), Ot(r), e.version >= 2 && (r.disjointTimerQueryExt = r.getExtension("EXT_disjoint_timer_query_webgl2")), (e.version < 2 || !r.disjointTimerQueryExt) && (r.disjointTimerQueryExt = r.getExtension("EXT_disjoint_timer_query")), Ut(r), (r.getSupportedExtensions() || []).forEach((function(e) {
                        e.includes("lose_context") || e.includes("debug") || r.getExtension(e)
                    }))
                }
            }
        };

        function Gt(e, r) {
            return (e >>> 0) + 4294967296 * r
        }

        function qt(e, r) {
            if (e <= 0) return e;
            var t = r <= 32 ? Math.abs(1 << r - 1) : Math.pow(2, r - 1);
            return e >= t && (r <= 32 || e > t) && (e = -2 * t + e), e
        }

        function Wt(e, r) {
            return e >= 0 ? e : r <= 32 ? 2 * Math.abs(1 << r - 1) + e : Math.pow(2, r) + e
        }

        function Vt(e) {
            for (var r = e; R[r];) ++r;
            return r - e
        }

        function Ht(e) {
            if (!e || !e.callee || !e.callee.name) return [null, "", ""];
            e.callee.toString();
            var r = e.callee.name,
                t = "(",
                n = !0;
            for (var o in e) {
                var a = e[o];
                n || (t += ", "), n = !1, t += "number" == typeof a || "string" == typeof a ? a : "(" + typeof a + ")"
            }
            t += ")";
            var i = e.callee.caller;
            return n && (t = ""), [e = i ? i.arguments : [], r, t]
        }

        function jt() {
            var e = new Error;
            if (!e.stack) {
                try {
                    throw new Error
                } catch (r) {
                    e = r
                }
                if (!e.stack) return "(no stack trace available)"
            }
            return e.stack.toString()
        }

        function Yt(e, r) {
            24 & e && (r = r.replace(/\s+$/, ""), r += (r.length > 0 ? "\n" : "") + function(e) {
                var r = jt(),
                    t = r.lastIndexOf("_emscripten_log"),
                    n = r.lastIndexOf("_emscripten_get_callstack"),
                    o = r.indexOf("\n", Math.max(t, n)) + 1;
                r = r.slice(o), 32 & e && Tr("EM_LOG_DEMANGLE is deprecated; ignoring"), 8 & e && "undefined" == typeof emscripten_source_map && (Tr('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'), e ^= 8, e |= 16);
                var a = null;
                if (128 & e)
                    for (a = Ht(arguments); a[1].includes("_emscripten_");) a = Ht(a[0]);
                var i = r.split("\n");
                r = "";
                var s = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),
                    u = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),
                    c = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
                for (var f in i) {
                    var l = i[f],
                        d = "",
                        m = "",
                        p = 0,
                        v = 0,
                        g = c.exec(l);
                    if (g && 5 == g.length) d = g[1], m = g[2], p = g[3], v = g[4];
                    else {
                        if ((g = s.exec(l)) || (g = u.exec(l)), !(g && g.length >= 4)) {
                            r += l + "\n";
                            continue
                        }
                        d = g[1], m = g[2], p = g[3], v = 0 | g[4]
                    }
                    var h = !1;
                    if (8 & e) {
                        var y = emscripten_source_map.originalPositionFor({
                            line: p,
                            column: v
                        });
                        (h = y && y.source) && (64 & e && (y.source = y.source.substring(y.source.replace(/\\/g, "/").lastIndexOf("/") + 1)), r += `    at ${d} (${y.source}:${y.line}:${y.column})\n`)
                    }(16 & e || !h) && (64 & e && (m = m.substring(m.replace(/\\/g, "/").lastIndexOf("/") + 1)), r += (h ? `     = ${d}` : `    at ${d}`) + ` (${m}:${p}:${v})\n`), 128 & e && a[0] && (a[1] == d && a[2].length > 0 && (r = r.replace(/\s+$/, ""), r += " with values: " + a[1] + a[2] + "\n"), a = Ht(a[0]))
                }
                return r.replace(/\s+$/, "")
            }(e)), 1 & e ? 4 & e ? console.error(r) : 2 & e ? console.warn(r) : 512 & e ? console.info(r) : 256 & e ? console.debug(r) : console.log(r) : 6 & e ? P(r) : B(r)
        }

        function Xt(e) {
            s("OOM")
        }

        function Kt(e) {
            var r = A.buffer;
            try {
                return A.grow(e - r.byteLength + 65535 >>> 16), j(), 1
            } catch (e) {}
        }

        function Zt() {
            try {
                if (navigator.getGamepads) return (ht.lastGamepadState = navigator.getGamepads()) ? 0 : -1
            } catch (e) {
                navigator.getGamepads = null
            }
            return -1
        }

        function Jt(e, r, t, n, o, a, i) {
            ht.focusEvent || (ht.focusEvent = $o(256));
            var s = {
                target: wt(e),
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e = event) {
                    var t = ht.getNodeNameForTarget(e.target),
                        a = e.target.id ? e.target.id : "",
                        i = ht.focusEvent;
                    qe(t, i + 0, 128), qe(a, i + 128, 128), ke(n)(o, i, r) && e.preventDefault()
                },
                useCapture: t
            };
            return ht.registerOrRemoveHandler(s)
        }

        function $t(e, r, t, n, o, a, i) {
            ht.fullscreenChangeEvent || (ht.fullscreenChangeEvent = $o(280));
            var s = {
                target: e,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e = event) {
                    var t = ht.fullscreenChangeEvent;
                    Ft(t), ke(n)(o, t, r) && e.preventDefault()
                },
                useCapture: t
            };
            return ht.registerOrRemoveHandler(s)
        }

        function Qt(e, r, t, n, o, a, i) {
            ht.gamepadEvent || (ht.gamepadEvent = $o(1432));
            var s = {
                target: wt(e),
                allowsDeferredCalls: !0,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e = event) {
                    var t = ht.gamepadEvent;
                    Mt(t, e.gamepad), ke(n)(o, t, r) && e.preventDefault()
                },
                useCapture: t
            };
            return ht.registerOrRemoveHandler(s)
        }

        function en(e, r, t, n, o, a, i) {
            ht.keyEvent || (ht.keyEvent = $o(176));
            var s = {
                target: wt(e),
                allowsDeferredCalls: !0,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = ht.keyEvent;
                    q[t >> 3] = e.timeStamp;
                    var a = t >> 2;
                    N[a + 2] = e.location, N[a + 3] = e.ctrlKey, N[a + 4] = e.shiftKey, N[a + 5] = e.altKey, N[a + 6] = e.metaKey, N[a + 7] = e.repeat, N[a + 8] = e.charCode, N[a + 9] = e.keyCode, N[a + 10] = e.which, qe(e.key || "", t + 44, 32), qe(e.code || "", t + 76, 32), qe(e.char || "", t + 108, 32), qe(e.locale || "", t + 140, 32), ke(n)(o, t, r) && e.preventDefault()
                },
                useCapture: t
            };
            return ht.registerOrRemoveHandler(s)
        }

        function rn(e, r, t) {
            q[e >> 3] = r.timeStamp;
            var n = e >> 2;
            N[n + 2] = r.screenX, N[n + 3] = r.screenY, N[n + 4] = r.clientX, N[n + 5] = r.clientY, N[n + 6] = r.ctrlKey, N[n + 7] = r.shiftKey, N[n + 8] = r.altKey, N[n + 9] = r.metaKey, T[2 * n + 20] = r.button, T[2 * n + 21] = r.buttons, N[n + 11] = r.movementX, N[n + 12] = r.movementY;
            var o = Bt(t);
            N[n + 13] = r.clientX - o.left, N[n + 14] = r.clientY - o.top
        }

        function tn(e, r, t, n, o, a, i) {
            ht.mouseEvent || (ht.mouseEvent = $o(72));
            var s = {
                target: e = wt(e),
                allowsDeferredCalls: "mousemove" != a && "mouseenter" != a && "mouseleave" != a,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(t = event) {
                    rn(ht.mouseEvent, t, e), ke(n)(o, ht.mouseEvent, r) && t.preventDefault()
                },
                useCapture: t
            };
            return ht.registerOrRemoveHandler(s)
        }

        function nn(e, r, t, n, o, a, i) {
            ht.pointerlockChangeEvent || (ht.pointerlockChangeEvent = $o(260));
            var s = {
                target: e,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e = event) {
                    var t = ht.pointerlockChangeEvent;
                    ! function(e) {
                        var r = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement,
                            t = !!r;
                        N[e >> 2] = t;
                        var n = ht.getNodeNameForTarget(r),
                            o = r && r.id ? r.id : "";
                        qe(n, e + 4, 128), qe(o, e + 132, 128)
                    }(t), ke(n)(o, t, r) && e.preventDefault()
                },
                useCapture: t
            };
            return ht.registerOrRemoveHandler(s)
        }

        function on(e, r, t, n, o, a, i) {
            ht.touchEvent || (ht.touchEvent = $o(1696));
            var s = {
                target: e = wt(e),
                allowsDeferredCalls: "touchstart" == a || "touchend" == a,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(t) {
                    for (var a, i = {}, s = t.touches, u = 0; u < s.length; ++u)(a = s[u]).isChanged = a.onTarget = 0, i[a.identifier] = a;
                    for (u = 0; u < t.changedTouches.length; ++u)(a = t.changedTouches[u]).isChanged = 1, i[a.identifier] = a;
                    for (u = 0; u < t.targetTouches.length; ++u) i[t.targetTouches[u].identifier].onTarget = 1;
                    var c = ht.touchEvent;
                    q[c >> 3] = t.timeStamp;
                    var f = c >> 2;
                    N[f + 3] = t.ctrlKey, N[f + 4] = t.shiftKey, N[f + 5] = t.altKey, N[f + 6] = t.metaKey, f += 7;
                    var l = Bt(e),
                        d = 0;
                    for (var u in i)
                        if (a = i[u], N[f + 0] = a.identifier, N[f + 1] = a.screenX, N[f + 2] = a.screenY, N[f + 3] = a.clientX, N[f + 4] = a.clientY, N[f + 5] = a.pageX, N[f + 6] = a.pageY, N[f + 7] = a.isChanged, N[f + 8] = a.onTarget, N[f + 9] = a.clientX - l.left, N[f + 10] = a.clientY - l.top, f += 13, ++d > 31) break;
                    N[c + 8 >> 2] = d, ke(n)(o, c, r) && t.preventDefault()
                },
                useCapture: t
            };
            return ht.registerOrRemoveHandler(s)
        }
        var an = ["default", "low-power", "high-performance"];
        var sn = function(e, r) {
            var t = r >> 2,
                n = N[t + 6],
                o = {
                    alpha: !!N[t + 0],
                    depth: !!N[t + 1],
                    stencil: !!N[t + 2],
                    antialias: !!N[t + 3],
                    premultipliedAlpha: !!N[t + 4],
                    preserveDrawingBuffer: !!N[t + 5],
                    powerPreference: an[n],
                    failIfMajorPerformanceCaveat: !!N[t + 7],
                    majorVersion: N[t + 8],
                    minorVersion: N[t + 9],
                    enableExtensionsByDefault: N[t + 10],
                    explicitSwapControl: N[t + 11],
                    proxyContextToMainThread: N[t + 12],
                    renderViaOffscreenBackBuffer: N[t + 13]
                },
                a = Et(e);
            return a ? o.explicitSwapControl ? 0 : zt.createContext(a, o) : 0
        };
        var un = function() {
            return zt.currentContext ? zt.currentContext.handle : 0
        };
        var cn = {};

        function fn() {
            if (!fn.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: k || "./this.program"
                };
                for (var r in cn) void 0 === cn[r] ? delete e[r] : e[r] = cn[r];
                var t = [];
                for (var r in e) t.push(r + "=" + e[r]);
                fn.strings = t
            }
            return fn.strings
        }

        function ln(e) {
            var r = $o(20),
                t = We(e);
            O[r >> 2] = t;
            var n = $o(4);
            O[n >> 2] = 0, O[r + 4 >> 2] = n;
            N[r + 8 >> 2] = 2, N[r + 12 >> 2] = 4;
            var o = $o(12);
            return O[o >> 2] = o + 8, O[o + 4 >> 2] = 0, N[o + 8 >> 2] = $r(tt.lookup_name(e)), O[r + 16 >> 2] = o, r
        }
        var dn = [];

        function mn(e) {
            switch (e) {
                case 34962:
                    e = 34964;
                    break;
                case 34963:
                    e = 34965;
                    break;
                case 35051:
                    e = 35053;
                    break;
                case 35052:
                    e = 35055;
                    break;
                case 35982:
                    e = 35983;
                    break;
                case 36662:
                    e = 36662;
                    break;
                case 36663:
                    e = 36663;
                    break;
                case 35345:
                    e = 35368
            }
            var r = Bo.getParameter(e);
            return r ? 0 | r.name : 0
        }

        function pn(e) {
            switch (e) {
                case 34962:
                case 34963:
                case 36662:
                case 36663:
                case 35051:
                case 35052:
                case 35882:
                case 35982:
                case 35345:
                    return !0;
                default:
                    return !1
            }
        }

        function vn(e, r, t, n) {
            for (var o = 0; o < e; o++) {
                var a = Bo[t](),
                    i = a && zt.getNewId(n);
                a ? (a.name = i, n[i] = a) : zt.recordError(1282), N[r + 4 * o >> 2] = i
            }
        }

        function gn(e, r, t, n, o, a, i, s) {
            r = zt.programs[r];
            var u = Bo[e](r, t);
            if (u) {
                var c = s && qe(u.name, s, n);
                o && (N[o >> 2] = c), a && (N[a >> 2] = u.size), i && (N[i >> 2] = u.type)
            }
        }

        function hn(e, r) {
            O[e >> 2] = r, O[e + 4 >> 2] = (r - O[e >> 2]) / 4294967296
        }

        function yn(e) {
            return "]" == e.slice(-1) && e.lastIndexOf("[")
        }

        function bn(e) {
            var r, t, n = e.uniformLocsById,
                o = e.uniformSizeAndIdsByName;
            if (!n)
                for (e.uniformLocsById = n = {}, e.uniformArrayNamesById = {}, r = 0; r < Bo.getProgramParameter(e, 35718); ++r) {
                    var a = Bo.getActiveUniform(e, r),
                        i = a.name,
                        s = a.size,
                        u = yn(i),
                        c = u > 0 ? i.slice(0, u) : i,
                        f = o[c] ? o[c][1] : e.uniformIdCounter;
                    for (e.uniformIdCounter = Math.max(f + s, e.uniformIdCounter), o[c] = [s, f], t = 0; t < s; ++t) n[f] = t, e.uniformArrayNamesById[f++] = c
                }
        }

        function wn(e) {
            var r = Bo.currentProgram;
            if (r) {
                var t = r.uniformLocsById[e];
                return "number" == typeof t && (r.uniformLocsById[e] = t = Bo.getUniformLocation(r, r.uniformArrayNamesById[e] + (t > 0 ? "[" + t + "]" : ""))), t
            }
            zt.recordError(1282)
        }

        function En(e) {
            return {
                5: 3,
                6: 4,
                8: 2,
                29502: 3,
                29504: 4,
                26917: 2,
                26918: 2,
                29846: 3,
                29847: 4
            } [e - 6402] || 1
        }

        function kn(e) {
            return 0 == (e -= 5120) ? M : 1 == e ? R : 2 == e ? T : 4 == e ? N : 6 == e ? U : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e ? O : I
        }

        function xn(e) {
            return 31 - Math.clz32(e.BYTES_PER_ELEMENT)
        }

        function Sn(e, r, t, n, o, a) {
            var i = kn(e),
                s = xn(i),
                u = function(e, r, t, n) {
                    var o;
                    return r * (e * t + (o = n) - 1 & -o)
                }(t, n, En(r) << s, zt.unpackAlignment);
            return i.subarray(o >> s, o + u >> s)
        }

        function _n(e, r, t = "(", n = ")") {
            for (var o = 0; r < e.length; ++r)
                if (e[r] == t && ++o, e[r] == n && 0 == --o) return r
        }

        function Cn(e, r, t, n, o, a, i) {
            var s = kn(e),
                u = xn(s),
                c = function(e, r, t, n, o) {
                    var a;
                    return t * r * (e * n + (a = o) - 1 & -a)
                }(t, n, o, En(r) << u, zt.unpackAlignment);
            return s.subarray(a >> u, a + c >> u)
        }
        var Ln = [];
        var Bn = [];
        var Pn = [];

        function An(e, r, t) {
            for (t = t || 65, r = r.split("|"); r[0];) e = e.replaceAll(String.fromCharCode(t++), r.pop());
            return [, ].concat(e.split(" "))
        }
        var Dn = An("r8YN8Sr8UN8TNRYNRSrRUNRTNRWNg8YNg8Srg8UNg8TNKUNKTNKWNgRYNgRSrgRUNgRTNgRW V8Y V8Z V8SV8U V8T bgra8Y bgra8ZNgb9e5uWNgbJa2UNgbJa2YNg11bJuWNgKUNgKTNgKW VRY VRSVRU VRT VRW VKU VKT VKW FLRYL24plusL24plus-FLKWLKW-FM1-V-YM1-V-ZM2-V-YM2-V-ZM3-V-YM3-V-ZM4-r-YM4-r-Sbc5B-YM5B-Sbc6hBb-uWM6hBb-WM7-V-YM7-V-ZQYQZQa1YQa1Z etc2-V8Y etc2-V8ZC11YC11SeacB11YCg11snormX4G-YX4G-ZX5G-YX5G-ZX5A-YX5A-ZX6A-YX6A-ZX6x6-YX6x6-ZX8A-YX8A-ZX8x6-YX8x6-ZX8x8-YX8x8-ZXJA-YXJA-ZXJx6-YXJx6-ZXJx8-YXJx8-ZXJxJ-YXJxJ-ZX12xJ-YX12xJ-ZX12x12-YX12x12-Z U8 U8HU8G T8 T8HT8G Y8 Y8HY8GP8P8x2P8G UR URHURG TR TRHTRG YR YRHYRGPRPRx2PRG WR WRHWRG WK WKHWKx3 WKG UK UKHUKx3 UKG TK TKHTKx3 TKG YJ-J-J-2 Y8G-bgra", "unorm-srgb|unorm| astc-|float|rgba|uint|sint|snorm |16| etc2-rgb8| snorm|-BC| r| bc| depth|32|10|-AC|x2 |x4|stencil8|-E-|Mg| eac-r|-rg|x5");
        var Fn = 2;

        function Mn(e) {
            if (e) {
                for (; jr[Fn];) Fn = Fn < 2147483647 ? Fn + 1 : 2;
                return jr[Fn] = e, e.wid = Fn, Fn++
            }
        }

        function Rn(e) {
            return r => {
                try {
                    return e(r)
                } catch (e) {}
            }
        }
        var Tn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            In = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        function Nn(e, r) {
            M.set(e, r)
        }

        function On(e, r, t, n) {
            var o = N[n + 40 >> 2],
                a = {
                    tm_sec: N[n >> 2],
                    tm_min: N[n + 4 >> 2],
                    tm_hour: N[n + 8 >> 2],
                    tm_mday: N[n + 12 >> 2],
                    tm_mon: N[n + 16 >> 2],
                    tm_year: N[n + 20 >> 2],
                    tm_wday: N[n + 24 >> 2],
                    tm_yday: N[n + 28 >> 2],
                    tm_isdst: N[n + 32 >> 2],
                    tm_gmtoff: N[n + 36 >> 2],
                    tm_zone: o ? ge(o) : ""
                },
                i = ge(t),
                s = {
                    "%c": "%a %b %d %H:%M:%S %Y",
                    "%D": "%m/%d/%y",
                    "%F": "%Y-%m-%d",
                    "%h": "%b",
                    "%r": "%I:%M:%S %p",
                    "%R": "%H:%M",
                    "%T": "%H:%M:%S",
                    "%x": "%m/%d/%y",
                    "%X": "%H:%M:%S",
                    "%Ec": "%c",
                    "%EC": "%C",
                    "%Ex": "%m/%d/%y",
                    "%EX": "%H:%M:%S",
                    "%Ey": "%y",
                    "%EY": "%Y",
                    "%Od": "%d",
                    "%Oe": "%e",
                    "%OH": "%H",
                    "%OI": "%I",
                    "%Om": "%m",
                    "%OM": "%M",
                    "%OS": "%S",
                    "%Ou": "%u",
                    "%OU": "%U",
                    "%OV": "%V",
                    "%Ow": "%w",
                    "%OW": "%W",
                    "%Oy": "%y"
                };
            for (var u in s) i = i.replace(new RegExp(u, "g"), s[u]);
            var c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                f = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function l(e, r, t) {
                for (var n = "number" == typeof e ? e.toString() : e || ""; n.length < r;) n = t[0] + n;
                return n
            }

            function d(e, r) {
                return l(e, r, "0")
            }

            function m(e, r) {
                function t(e) {
                    return e < 0 ? -1 : e > 0 ? 1 : 0
                }
                var n;
                return 0 === (n = t(e.getFullYear() - r.getFullYear())) && 0 === (n = t(e.getMonth() - r.getMonth())) && (n = t(e.getDate() - r.getDate())), n
            }

            function p(e) {
                switch (e.getDay()) {
                    case 0:
                        return new Date(e.getFullYear() - 1, 11, 29);
                    case 1:
                        return e;
                    case 2:
                        return new Date(e.getFullYear(), 0, 3);
                    case 3:
                        return new Date(e.getFullYear(), 0, 2);
                    case 4:
                        return new Date(e.getFullYear(), 0, 1);
                    case 5:
                        return new Date(e.getFullYear() - 1, 11, 31);
                    case 6:
                        return new Date(e.getFullYear() - 1, 11, 30)
                }
            }

            function v(e) {
                var r = function(e, r) {
                        for (var t = new Date(e.getTime()); r > 0;) {
                            var n = dt(t.getFullYear()),
                                o = t.getMonth(),
                                a = (n ? Tn : In)[o];
                            if (!(r > a - t.getDate())) return t.setDate(t.getDate() + r), t;
                            r -= a - t.getDate() + 1, t.setDate(1), o < 11 ? t.setMonth(o + 1) : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1))
                        }
                        return t
                    }(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                    t = new Date(r.getFullYear(), 0, 4),
                    n = new Date(r.getFullYear() + 1, 0, 4),
                    o = p(t),
                    a = p(n);
                return m(o, r) <= 0 ? m(a, r) <= 0 ? r.getFullYear() + 1 : r.getFullYear() : r.getFullYear() - 1
            }
            var g = {
                "%a": function(e) {
                    return c[e.tm_wday].substring(0, 3)
                },
                "%A": function(e) {
                    return c[e.tm_wday]
                },
                "%b": function(e) {
                    return f[e.tm_mon].substring(0, 3)
                },
                "%B": function(e) {
                    return f[e.tm_mon]
                },
                "%C": function(e) {
                    return d((e.tm_year + 1900) / 100 | 0, 2)
                },
                "%d": function(e) {
                    return d(e.tm_mday, 2)
                },
                "%e": function(e) {
                    return l(e.tm_mday, 2, " ")
                },
                "%g": function(e) {
                    return v(e).toString().substring(2)
                },
                "%G": function(e) {
                    return v(e)
                },
                "%H": function(e) {
                    return d(e.tm_hour, 2)
                },
                "%I": function(e) {
                    var r = e.tm_hour;
                    return 0 == r ? r = 12 : r > 12 && (r -= 12), d(r, 2)
                },
                "%j": function(e) {
                    return d(e.tm_mday + function(e, r) {
                        for (var t = 0, n = 0; n <= r; t += e[n++]);
                        return t
                    }(dt(e.tm_year + 1900) ? Tn : In, e.tm_mon - 1), 3)
                },
                "%m": function(e) {
                    return d(e.tm_mon + 1, 2)
                },
                "%M": function(e) {
                    return d(e.tm_min, 2)
                },
                "%n": function() {
                    return "\n"
                },
                "%p": function(e) {
                    return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"
                },
                "%S": function(e) {
                    return d(e.tm_sec, 2)
                },
                "%t": function() {
                    return "\t"
                },
                "%u": function(e) {
                    return e.tm_wday || 7
                },
                "%U": function(e) {
                    var r = e.tm_yday + 7 - e.tm_wday;
                    return d(Math.floor(r / 7), 2)
                },
                "%V": function(e) {
                    var r = Math.floor((e.tm_yday + 7 - (e.tm_wday + 6) % 7) / 7);
                    if ((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && r++, r) {
                        if (53 == r) {
                            var t = (e.tm_wday + 371 - e.tm_yday) % 7;
                            4 == t || 3 == t && dt(e.tm_year) || (r = 1)
                        }
                    } else {
                        r = 52;
                        var n = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
                        (4 == n || 5 == n && dt(e.tm_year % 400 - 1)) && r++
                    }
                    return d(r, 2)
                },
                "%w": function(e) {
                    return e.tm_wday
                },
                "%W": function(e) {
                    var r = e.tm_yday + 7 - (e.tm_wday + 6) % 7;
                    return d(Math.floor(r / 7), 2)
                },
                "%y": function(e) {
                    return (e.tm_year + 1900).toString().substring(2)
                },
                "%Y": function(e) {
                    return e.tm_year + 1900
                },
                "%z": function(e) {
                    var r = e.tm_gmtoff,
                        t = r >= 0;
                    return r = (r = Math.abs(r) / 60) / 60 * 100 + r % 60, (t ? "+" : "-") + String("0000" + r).slice(-4)
                },
                "%Z": function(e) {
                    return e.tm_zone
                },
                "%%": function() {
                    return "%"
                }
            };
            for (var u in i = i.replace(/%%/g, "\0\0"), g) i.includes(u) && (i = i.replace(new RegExp(u, "g"), g[u](a)));
            var h = Er(i = i.replace(/\0\0/g, "%"), !1);
            return h.length > r ? 0 : (Nn(h, e), h.length - 1)
        }
        var Un = An("coAEeatuAs-aH-lBsF-GcontrolF32M-Iencil8ObcObLOetc2OaIcOaIL timeIamp-quDy iHiActEirI-inJ shadDE16 rg11b10uM-AHDKbgra8unorm-Iorage M32EiltDKM32CKGdiJs dual-sourceCing subgroupsN1N2 prBive-iHex", " texture-compression-| texture-formats-tier|float|c-sliced-3d|able |stance|st|nd|clip-| depth|-f|er|-bleH|imit|re").slice(1);
        var zn = An(">1D >2D >3D<5eArrayLayers<9s<9sPlus7;s<BindingsPer9<Dynamic4m=Dynamic:=Sampled5e?axSampler?ax:;?ax:5e?ax4m;?in4m;6 min:;6<7;s<7Attributes<7;ArrayStride<InterStageShaderVariables<ColorAttachments<ColorAttachmentBytesPerSample@p:Size<ComputeInvocationsPerWorkgroup@pSizeX@pSizeY@pSizeZ@psPerDimension", " maxComputeWorkgrou|sPerShaderStage m|maxTextureDimension|BuffersPerPipelineLayout max| max|Buffer|Storage|BindGroup|s8ColorAttachmen|Vertex|OffsetAlignment|Textur|Unifor", 52).slice(1),
            Gn = An("maxUniform4Storage4BufferSize", "BufferBindingSize max", 52).slice(1);

        function qn(e) {
            return Number(G[e >>> 1])
        }

        function Wn(e) {
            let r, t = {};
            for (let n of Gn)(r = qn(e)) && (t[n] = r), e += 2;
            for (let n of zn)(r = O[e++]) && (t[n] = r);
            return t
        }

        function Vn(e) {
            let r = [],
                t = O[e];
            for (let e = 0; e < 21; ++e) t & 1 << e && r.push(Un[e]);
            return r
        }
        var Hn = [, "srgb", "display-p3"];

        function jn(e, r, t) {
            r >>= 2;
            for (var n = new Array(t), o = 0; o < t;) n[o++] = e[O[r++]];
            return n
        }
        var Yn = jn,
            Xn = [, "standard", "extended"],
            Kn = [, "opaque", "premultiplied"];

        function Zn(e) {
            let r = jr[e];
            r && (r.wid = 0, r.destroy && r.destroy(), r.derivedObjects && Object.keys(r.derivedObjects).forEach(Zn), r.parentObject && delete r.parentObject.derivedObjects[e], delete jr[e])
        }

        function Jn(e, r, t) {
            t.parentObject = e, e.derivedObjects || (e.derivedObjects = {}), e.derivedObjects[r] = t
        }

        function $n(e) {
            let r = O[e];
            if (r) {
                let t, n = {
                    querySet: jr[r]
                };
                return (t = N[e + 1]) >= 0 && (n.beginningOfPassWriteIndex = t), (t = N[e + 2]) >= 0 && (n.endOfPassWriteIndex = t), n
            }
        }
        var Qn = [, "load", "clear"],
            eo = [, "store", "discard"];
        var ro = An("all stencilA depthA", "-only");

        function to(e) {
            return {
                texture: jr[O[e >>= 2]],
                mipLevel: N[e + 1],
                origin: [N[e + 2], N[e + 3], N[e + 4]],
                aspect: ro[O[e + 5]]
            }
        }

        function no(e, r) {
            if (e) {
                var t = Mn(e);
                return Jn(r, t, e), t
            }
        }
        var oo = An("uniform A read-only-A", "storage"),
            ao = An("Anon-Acomparison", "filtering "),
            io = An("Aunfilterable-Adepth sint uint", "float "),
            so = An("1B 2dCA AC3d", "-array |d 2d|cube"),
            uo = An("A-BBA", "only read-|write");

        function co(e, r) {
            let t = {};
            for (; r--;) t[Hr(O[e + 3 >> 2])] = q[e + 8 >> 3], e += 16;
            return t
        }
        var fo = "auto";
        var lo = An("neverA equalACB notCBCalways", "-equal |greater| less"),
            mo = An("keep zero replace invert inCBdeCBinCA deCA", "crement-|clamp |wrap");

        function po(e) {
            return {
                compare: lo[O[e]],
                failOp: mo[O[e + 1]],
                depthFailOp: mo[O[e + 2]],
                passOp: mo[O[e + 3]]
            }
        }
        var vo = An("add Areverse-Amin max", "subtract "),
            go = An("zero one CFC CEFCE AFA AEFAE CE-saturated BFB DFD DEFDE", " one-minus-|-alpha|src1|src|constant|dst");

        function ho(e) {
            return {
                operation: vo[O[e]],
                srcFactor: go[O[e + 1]],
                dstFactor: go[O[e + 2]]
            }
        }
        var yo = An("A16 A32", "uint"),
            bo = An("pointDADAB CDCB", "-list |triangle|-strip|line");
        var wo = An("clamp-to-edge A mirror-A", "repeat"),
            Eo = An("Aest liA", "near"),
            ko = An("Aest liA", "near");

        function xo(e) {
            let r, t = N[e + 2],
                n = [],
                o = O[e] >> 2;
            for (; t--;) r = O[o + 2], n.push({
                entryPoint: Hr(O[o]),
                layout: r > 1 ? jr[r] : r ? fo : null
            }), o += 4;
            return n
        }

        function So(e, r, t, n) {
            ! function(e, r, t, n, o) {
                if (n) {
                    var a = ta(),
                        i = ze(n) + 1,
                        s = oa(i);
                    qe(n, s, i)
                }
                ke(r)(e, t, s, o), a && na(a)
            }(e, r, function(e) {
                return e ? e instanceof GPUInternalError ? 3 : e instanceof GPUValidationError ? 2 : e instanceof GPUOutOfMemoryError ? 1 : 3 : 0
            }(t), t && t.message, n)
        }

        function _o(e) {
            return o["_" + e]
        }

        function Co(e, r, t, n, o) {
            var a = {
                string: e => {
                    var r = 0;
                    return null != e && 0 !== e && (r = xt(e)), r
                },
                array: e => {
                    var r = oa(e.length);
                    return Nn(e, r), r
                }
            };
            var i = _o(e),
                s = [],
                u = 0;
            if (n)
                for (var c = 0; c < n.length; c++) {
                    var f = a[t[c]];
                    f ? (0 === u && (u = ta()), s[c] = f(n[c])) : s[c] = n[c]
                }
            var l = i.apply(null, s);
            return l = function(e) {
                return 0 !== u && na(u),
                    function(e) {
                        return "string" === r ? ge(e) : "boolean" === r ? Boolean(e) : e
                    }(e)
            }(l)
        }

        function Lo() {
            var e = jt();
            return o.extraStackTrace && (e += "\n" + o.extraStackTrace()), e.replace(/\b_Z[\w\d_]+/g, (function(e) {
                return e == e ? e : e + " [" + e + "]"
            }))
        }
        o.requestFullscreen = function(e, r) {
            Nr.requestFullscreen(e, r)
        }, o.requestAnimationFrame = function(e) {
            Nr.requestAnimationFrame(e)
        }, o.setCanvasSize = function(e, r, t) {
            Nr.setCanvasSize(e, r, t)
        }, o.pauseMainLoop = function() {
            Nr.mainLoop.pause()
        }, o.resumeMainLoop = function() {
            Nr.mainLoop.resume()
        }, o.getUserMedia = function() {
            Nr.getUserMedia()
        }, o.createContext = function(e, r, t, n) {
            return Nr.createContext(e, r, t, n)
        };
        var Bo, Po = {},
            Ao = {},
            Do = function(e, r, t, n) {
                e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = Pr.nextInode++, this.name = r, this.mode = t, this.node_ops = {}, this.stream_ops = {}, this.rdev = n
            },
            Fo = 365,
            Mo = 146;
        Object.defineProperties(Do.prototype, {
            read: {
                get: function() {
                    return (this.mode & Fo) === Fo
                },
                set: function(e) {
                    e ? this.mode |= Fo : this.mode &= -366
                }
            },
            write: {
                get: function() {
                    return (this.mode & Mo) === Mo
                },
                set: function(e) {
                    e ? this.mode |= Mo : this.mode &= -147
                }
            },
            isFolder: {
                get: function() {
                    return Pr.isDir(this.mode)
                }
            },
            isDevice: {
                get: function() {
                    return Pr.isChrdev(this.mode)
                }
            }
        }), Pr.FSNode = Do, Pr.createPreloadedFile = function(e, r, t, n, o, a, i, s, u, c) {
            var f = r ? wr.resolve(yr.join2(e, r)) : e;

            function l(t) {
                function l(t) {
                    c && c(), s || Pr.createDataFile(e, r, t, n, o, u), a && a(), ae()
                }(function(e, r, t, n) {
                    void 0 !== Nr && Nr.init();
                    var o = !1;
                    return Cr.forEach((function(a) {
                        o || a.canHandle(r) && (a.handle(e, r, t, n), o = !0)
                    })), o
                })(t, f, l, (() => {
                    i && i(), ae()
                })) || l(t)
            }
            oe(), "string" == typeof t ? function(e, r, t, n) {
                var o = n ? "" : "al " + e;
                y(e, (t => {
                    H(t, `Loading data file "${e}" failed (no arrayBuffer).`), r(new Uint8Array(t)), o && ae()
                }), (r => {
                    if (!t) throw `Loading data file "${e}" failed.`;
                    t()
                })), o && oe()
            }(t, (e => l(e)), i) : l(t)
        }, Pr.staticInit(), o.FS_createPath = Pr.createPath, o.FS_createDataFile = Pr.createDataFile;
        for (var Ro = 0; Ro < 32; ++Ro) dn.push(new Array(Ro));
        var To = new Float32Array(288);
        for (Ro = 0; Ro < 288; ++Ro) Ln[Ro] = To.subarray(0, Ro + 1);
        var Io = new Int32Array(288);
        for (Ro = 0; Ro < 288; ++Ro) Bn[Ro] = Io.subarray(0, Ro + 1);
        var No = new Uint32Array(288);
        for (Ro = 0; Ro < 288; ++Ro) Pn[Ro] = No.subarray(0, Ro + 1);
        var Oo, Uo = {
                Sa: function() {
                    window.addEventListener("message", (e => {
                        if ("rcp-fe-lol-home-section-show" == e.data.messageType || "rcp-fe-lol-home-show" == e.data.messageType || "rcp-fe-lol-persistent-iframe-show" == e.data.messageType) v("ClientBridge", "Unmute");
                        else if ("rcp-fe-lol-home-section-hide" == e.data.messageType || "rcp-fe-lol-home-hide" == e.data.messageType || "rcp-fe-lol-persistent-iframe-hide" == e.data.messageType) v("ClientBridge", "Mute");
                        else if ("rcp-fe-lol-home-settings-audio-response" == e.data.messageType) {
                            const r = e.data.data,
                                t = JSON.stringify(r);
                            console.log("New audio settings: " + t), v("ClientBridge", "HandleClientAudioSettings", t)
                        } else console.log(e)
                    }), !1)
                },
                bb: function() {
                    window.addEventListener("message", (e => {
                        const {
                            messageType: r,
                            data: t
                        } = e.data;
                        switch (r) {
                            case "rcp-fe-lol-home-data-response":
                                v("ClientBridge", "SetClientData", JSON.stringify(t.clientData));
                                break;
                            case "lol-metagames-currency-balances-response":
                                v("ClientBridge", "SetMGSWalletsData", JSON.stringify(t));
                                break;
                            case "lol-metagames-player-data-response":
                                if (null == t.playerData) {
                                    console.log("Null data returned from MGS service");
                                    break
                                }
                                v("ClientBridge", "SetMGSPlayerData", JSON.stringify(t.playerData.gameData));
                                break;
                            case "rcp-fe-lol-home-missions-changed":
                                let r = e.data.data.map((e => ({
                                    internalName: e.internalName,
                                    status: e.status
                                })));
                                v("ClientBridge", "SetMissions", JSON.stringify(r));
                                break;
                            case "lol-metagames-player-event-response":
                                v("ClientBridge", "HandlePlayerEventResponse", JSON.stringify(t));
                                break;
                            case "lol-metagames-player-data-update-response":
                                console.log("MGS Player Data Update Response: " + JSON.stringify(t)), v("ClientBridge", "SetMGSUpdatePlayerDataResponseFlag", JSON.stringify(t.success));
                                break;
                            case "rcp-fe-lol-home-section-show":
                            case "rcp-fe-lol-home-show":
                            case "rcp-fe-lol-persistent-iframe-show":
                                v("ClientBridge", "Unpause");
                                break;
                            case "rcp-fe-lol-home-section-hide":
                            case "rcp-fe-lol-home-hide":
                            case "rcp-fe-lol-persistent-iframe-hide":
                                v("ClientBridge", "Pause");
                                break;
                            case "league-session-token-response":
                                v("ClientBridge", "SetRCSessionToken", JSON.stringify(t));
                                break;
                            case "rcp-fe-lol-home-inventory-response":
                                v("ClientBridge", "SetEventPassOwnership", JSON.stringify(t));
                                break;
                            case "lol-metagames-get-build-version-response":
                                v("ClientBridge", "SetClientBuildVersion", JSON.stringify(t))
                        }
                    }), !1)
                },
                Md: function(e) {
                    O[e >>= 2] = o.pageStartupTime || 0, O[e + 1] = o.dataUrlLoadEndTime || 0, O[e + 2] = o.codeDownloadTimeEnd || 0
                },
                Nd: function(e, r) {
                    e >>= 3, r >>= 3, performance.memory ? (q[e] = performance.memory.totalJSHeapSize, q[r] = performance.memory.usedJSHeapSize) : (q[e] = NaN, q[r] = NaN)
                },
                Ya: function(e) {
                    let r = ge(e);
                    window.parent.postMessage({
                        messageType: "lol-metagames",
                        type: "RClientWindowMessenger",
                        data: {
                            type: "lol-metagames-player-data",
                            options: {
                                metagameId: r
                            }
                        }
                    }, "*")
                },
                Va: function() {
                    window.parent.postMessage({
                        messageType: "league-session-token-request",
                        type: "RClientWindowMessenger"
                    }, "*")
                },
                O: function() {
                    document.getElementById("unity-canvas").style.display = "none", document.getElementById("opal-mask-overlay").style.opacity = 1, window.dispatchEvent(new ErrorEvent("error", {
                        message: "Login error in Opal"
                    }))
                },
                Ua: function(e, r) {
                    let t = ge(e),
                        n = ge(r);
                    window.parent.postMessage({
                        messageType: "rcp-fe-lol-home-open-paw",
                        type: "RClientWindowMessenger",
                        data: {
                            inventoryType: n,
                            itemId: t,
                            source: "WebGL"
                        }
                    }, "*")
                },
                _d: function() {
                    return he && he.activated || 0 != ye
                },
                xb: Te,
                wb: Ne,
                ma: function(e) {
                    if (!Oe) try {
                        ke(e)()
                    } catch (e) {
                        throw Oe = 1, console.error("Uncaught exception from main loop:"), ((r = e) instanceof ReferenceError || r instanceof TypeError) && -1 != r.message.indexOf("dynCall_") && (r.message = 'Detected use of deprecated "Module.dynCall_*" API. Use "makeDynCall" API instead. Refer to https://docs.unity3d.com/6000.0/Documentation/Manual/web-interacting-browser-deprecated.html#dyncall for more information.\n' + r.message), console.error(r), console.error("Halting program."), o.errorHandler && o.errorHandler(e), e
                    }
                    var r
                },
                de: function(e, r) {
                    for (var t = "", n = 0; n < r; n++) t += String.fromCharCode(R[e + n]);
                    o.canvas.style.cursor = "url(data:image/cur;base64," + btoa(t) + "),default"
                },
                pa: function(e) {
                    o.canvas.style.cursor = e ? "default" : "none"
                },
                oa: function(e, r, t, n) {
                    t >>= 2, n >>= 2;
                    var o = document.querySelector(Ue()),
                        a = o && o.getBoundingClientRect();
                    O[t] = e - (a ? a.left : 0), O[n] = r - (a ? a.top : 0)
                },
                r: function e() {
                    var r = Ue();
                    return e.selector != r && (Qo(e.ptr), e.ptr = We(r), e.selector = r), e.ptr
                },
                Jd: function(e) {
                    var r = ge(e);
                    window.open(r, "_blank", "")
                },
                Fd: function() {},
                H: function() {
                    Br.queuePersist(o.__unityIdbfsMount.mount), window.warnedAboutManualFilesystemSyncGettingDeprecated || (window.warnedAboutManualFilesystemSyncGettingDeprecated = !0, o.autoSyncPersistentDataPath || console.warn("Manual synchronization of Unity Application.persistentDataPath via JS_FileSystem_Sync() is deprecated and will be later removed in a future Unity version. The persistent data directory will be automatically synchronized instead on file modification. Pass config.autoSyncPersistentDataPath = true; to configuration in createUnityInstance() to opt in to the new behavior."))
                },
                Ld: function(e, r) {
                    return "undefined" == typeof crypto || r > 65535 ? 0 : (crypto.getRandomValues(new Uint8Array(R.buffer, e, r)), 1)
                },
                Kd: function() {
                    return o.wasmFileSize
                },
                Xd: function() {
                    return "undefined" != typeof GravitySensor ? Ve && Ve.activated : 0 != Le
                },
                tb: function(e, r) {
                    if ("undefined" == typeof GravitySensor) return Te(0, Math.max(r, _e)), Je(0, Math.max(r, Ze)), void(Le = e);

                    function t(e) {
                        (Ve = new GravitySensor({
                            frequency: e,
                            referenceFrame: "device"
                        })).addEventListener("reading", He), Ve.addEventListener("error", (function(e) {
                            Tr(e.error ? e.error : e)
                        })), Ve.start()
                    }
                    Re(), Le = e, Ve ? (Ve.stop(), Ve.removeEventListener("reading", He), t(r)) : 0 != je ? je = r : (je = r, navigator.permissions.query({
                        name: "accelerometer"
                    }).then((function(e) {
                        "granted" === e.state ? t(je) : Tr("No permission to use GravitySensor."), je = 0
                    })))
                },
                sb: function() {
                    if (Le = 0, "undefined" == typeof GravitySensor) return 0 == ye && Ne(), void(0 == Ce && $e());
                    Ve && (Ve.stop(), Ve.removeEventListener("reading", He), Ve = null)
                },
                Wd: function() {
                    return Qe && Qe.activated || 0 != Be
                },
                rb: function(e, r) {
                    if ("undefined" == typeof Gyroscope) return Me(), void(Be = e);

                    function t(e) {
                        (Qe = new Gyroscope({
                            frequency: e,
                            referenceFrame: "device"
                        })).addEventListener("reading", er), Qe.addEventListener("error", (function(e) {
                            Tr(e.error ? e.error : e)
                        })), Qe.start()
                    }
                    Be = e, Qe ? (Qe.stop(), Qe.removeEventListener("reading", er), t(r)) : 0 != rr ? rr = r : (rr = r, navigator.permissions.query({
                        name: "gyroscope"
                    }).then((function(e) {
                        "granted" === e.state ? t(rr) : Tr("No permission to use Gyroscope."), rr = 0
                    })))
                },
                qb: function() {
                    Qe ? (Qe.stop(), Qe.removeEventListener("reading", er), Qe = null, Be = 0) : 0 != Be && (Be = 0, Ie())
                },
                Rc: function() {
                    const e = function(e) {
                        "canvas" !== e.target.localName && Go()
                    };
                    document.addEventListener("contextmenu", e), o.deinitializers.push((function() {
                        document.removeEventListener("contextmenu", e)
                    }))
                },
                Pd: function() {
                    var e = document.querySelector(Ue());
                    const r = function(r) {
                            (document.activeElement == e || or) && r.preventDefault();
                            const t = r.clipboardData.getData("text");
                            if (or) or.input.value += t;
                            else {
                                var n = We(t);
                                Yo(n), Qo(n)
                            }
                        },
                        t = function(r) {
                            document.activeElement == e && r.preventDefault();
                            const t = or ? or.input.value.slice(or.input.selectionStart, or.input.selectionEnd) : ge(qo());
                            r.clipboardData.setData("text/plain", t)
                        };
                    window.addEventListener("paste", r), window.addEventListener("copy", t), window.addEventListener("cut", t), o.deinitializers.push((function() {
                        window.removeEventListener("paste", r), window.removeEventListener("copy", t), window.removeEventListener("cut", t)
                    }))
                },
                Yd: function() {
                    return Ye && Ye.activated || 0 != Ce
                },
                vb: Je,
                ub: $e,
                Sc: function(e, r) {
                    var t = ge(e);
                    switch ("function" == typeof dump && dump(t), r) {
                        case 0:
                        case 1:
                        case 4:
                            return void console.error(t);
                        case 2:
                            return void console.warn(t);
                        case 3:
                        case 5:
                            return void console.log(t);
                        default:
                            console.error("Unknown console message type!"), console.error(t)
                    }
                },
                Qc: function(e, r) {
                    var t = Lo();
                    return e && qe(t, e, r), ze(t)
                },
                td: function() {
                    return ar
                },
                E: function() {
                    return or ? 0 : 1
                },
                ob: function(e, r) {
                    var t = or && or.input ? or.input.value : nr || "";
                    return e && qe(t, e, r), ze(t)
                },
                Rd: function(e, r) {
                    if (e >>= 2, r >>= 2, !or) return N[e] = 0, void(N[r] = 0);
                    N[e] = or.input.selectionStart, N[r] = or.input.selectionEnd - or.input.selectionStart
                },
                P: ir,
                Sd: function(e) {
                    or && (or.input.maxLength = e)
                },
                Td: function(e) {
                    or && (e = ge(e), or.input.value = e)
                },
                Qd: function(e, r) {
                    or && ("number" === or.input.type ? (or.input.type = "text", or.input.setSelectionRange(e, e + r), or.input.type = "number") : or.input.setSelectionRange(e, e + r))
                },
                pb: function(e, r, t, n, o, a, i, s) {
                    tr && (clearTimeout(tr), tr = null), e = ge(e), nr = e, i = ge(i);
                    var u, c = document.body,
                        f = !!or;
                    if (o) u = "password";
                    else switch (r) {
                        case 7:
                            u = "email";
                            break;
                        case 3:
                            u = "url";
                            break;
                        case 2:
                        case 4:
                        case 5:
                            u = "number";
                            break;
                        default:
                            u = "text"
                    }
                    if (f && or.multiline != n) ir(!1);
                    else {
                        var l = or || document.createElement("div");
                        f || (l.style = "width:100%; position:fixed; bottom:0px; margin:0px; padding:0px; left:0px; border: 1px solid #000; border-radius: 5px; background-color:#fff; font-size:14pt;", c.appendChild(l), or = l);
                        var d = f ? or.input : document.createElement(n ? "textarea" : "input");
                        if (or.multiline = n, or.secure = o, or.keyboardType = r, or.inputType = u, d.type = u, d.style = "width:calc(100% - 85px); " + (n ? "height:100px;" : "") + "vertical-align:top; border-radius: 5px; outline:none; cursor:default; resize:none; border:0px; padding:10px 0px 10px 10px;", d.spellcheck = !!t, d.maxLength = s > 0 ? s : 524288, d.value = e, d.placeholder = i, f || (l.appendChild(d), l.input = d), f) d.select();
                        else {
                            var m = document.createElement("button");
                            m.innerText = "OK", m.style = "border:0; position:absolute; left:calc(100% - 75px); top:0px; width:75px; height:100%; margin:0; padding:0; border-radius: 5px; background-color:#fff", m.addEventListener("touchend", (function() {
                                ir(!0)
                            })), l.appendChild(m), l.okButton = m, d.addEventListener("keyup", (function(e) {
                                d.parentNode.multiline || "Enter" != e.code && 13 != e.which && 13 != e.keyCode || ir(!0)
                            })), d.addEventListener("blur", (function(e) {
                                ir(!0), e.stopPropagation(), e.preventDefault()
                            })), d.select(), d.focus()
                        }
                    }
                },
                Xb: function() {
                    return o.webglContextAttributes.powerPreference
                },
                Ge: function() {
                    return o.webglContextAttributes.premultipliedAlpha
                },
                Fe: function() {
                    return o.webglContextAttributes.preserveDrawingBuffer
                },
                $d: function() {
                    return sr && sr.activated || 0 != ur
                },
                zb: function(e, r) {
                    function t(e) {
                        (sr = new RelativeOrientationSensor({
                            frequency: e,
                            referenceFrame: "device"
                        })).addEventListener("reading", cr), sr.addEventListener("error", (function(e) {
                            Tr(e.error ? e.error : e)
                        })), sr.start()
                    }
                    "undefined" != typeof RelativeOrientationSensor ? (ur = e, sr ? (sr.stop(), sr.removeEventListener("reading", cr), t(r)) : 0 != fr ? fr = r : (fr = r, Promise.all([navigator.permissions.query({
                        name: "accelerometer"
                    }), navigator.permissions.query({
                        name: "gyroscope"
                    })]).then((function(e) {
                        e.every((function(e) {
                            return "granted" === e.state
                        })) ? t(fr) : Tr("No permissions to use RelativeOrientationSensor."), fr = 0
                    })))) : 0 == ur && (ur = e, Fe(1), window.addEventListener("deviceorientation", lr))
                },
                yb: function() {
                    sr ? (sr.stop(), sr.removeEventListener("reading", cr), sr = null) : 0 != ur && window.removeEventListener("deviceorientation", lr), ur = 0
                },
                Db: function() {
                    0 != De && Fe(De)
                },
                kd: function() {
                    o.QuitCleanup()
                },
                Vd: function() {
                    dr = 0, window.removeEventListener("resize", mr), screen.orientation && screen.orientation.removeEventListener("change", mr)
                },
                be: function(e) {
                    dr || (screen.orientation && screen.orientation.addEventListener("change", mr), window.addEventListener("resize", mr), dr = e, setTimeout(mr, 0))
                },
                D: function(e) {
                    screen.orientation && screen.orientation.lock && (pr = e, -1 == gr && e != vr && (gr = setTimeout((function e() {
                        var r = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"][vr = pr];
                        screen.orientation.lock(r).then((function() {
                            gr = pr != vr ? setTimeout(e, 0) : -1
                        })).catch((function(e) {
                            Tr(e), gr = -1
                        }))
                    }), 0)))
                },
                Gd: function(e, r, t) {
                    try {
                        ! function(e, r, t) {
                            Ur(ke(e), r, t)
                        }(e, r, t)
                    } catch {}
                },
                ye: function(e, r) {
                    if (0 != zr.audioWebEnabled) return zr.audioInstances[++zr.audioInstanceIdCounter] = function(e, r) {
                        var t = {
                            callback: e,
                            userData: r,
                            source: null,
                            gain: zr.audioContext.createGain(),
                            panner: zr.audioContext.createPanner(),
                            spatialBlendDryGain: zr.audioContext.createGain(),
                            spatialBlendWetGain: zr.audioContext.createGain(),
                            spatialBlendLevel: 0,
                            loop: !1,
                            loopStart: 0,
                            loopEnd: 0,
                            pitch: 1
                        };
                        return t.panner.rolloffFactor = 0, t.release = function() {
                            this.disconnectSource(), this.gain.disconnect(), this.panner.disconnect()
                        }, t.playSoundClip = function(e, r, t) {
                            try {
                                var n = this;
                                this.source = e.createSourceNode(), this.configurePanningNodes(), this.setSpatialBlendLevel(this.spatialBlendLevel), this.source.onended = function() {
                                    n.source.isStopped = !0, n.disconnectSource(), n.callback && ke(n.callback)(n.userData)
                                }, this.source.loop = this.loop, this.source.loopStart = this.loopStart, this.source.loopEnd = this.loopEnd, this.source.start(r, t), this.source.playbackStartTime = r - t / this.source.playbackRate.value, this.source.setPitch(this.pitch)
                            } catch (e) {
                                console.error("Channel.playSoundClip error. Exception: " + e)
                            }
                        }, t.stop = function(e) {
                            if (this.source) {
                                try {
                                    t.source.stop(zr.audioContext.currentTime + e)
                                } catch (e) {}
                                0 == e && this.disconnectSource()
                            }
                        }, t.isPaused = function() {
                            return !this.source || !!this.source.isPausedMockNode || !!this.source.mediaElement && (this.source.mediaElement.paused || this.source.pauseRequested)
                        }, t.pause = function() {
                            if (this.source && !this.source.isPausedMockNode)
                                if (this.source.mediaElement) this.source._pauseMediaElement();
                                else {
                                    var e = {
                                        isPausedMockNode: !0,
                                        buffer: this.source.buffer,
                                        loop: this.source.loop,
                                        loopStart: this.source.loopStart,
                                        loopEnd: this.source.loopEnd,
                                        playbackRate: this.source.playbackRate.value,
                                        scheduledStopTime: void 0,
                                        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
                                        setPitch: function(e) {
                                            this.playbackRate = e
                                        },
                                        stop: function(e) {
                                            this.scheduledStopTime = e
                                        }
                                    };
                                    this.stop(0), this.disconnectSource(), this.source = e
                                }
                        }, t.resume = function(e = 0) {
                            if (this.source && this.source.mediaElement) this.source.start(void 0, this.source.currentTime);
                            else if (this.source && this.source.isPausedMockNode) {
                                var r = this.source,
                                    t = zr.audioContext.currentTime;
                                r.playbackPausedAtPosition < 0 && (t -= r.playbackPausedAtPosition);
                                var n = qr(r.buffer, !1);
                                if (this.playSoundClip(n, t, Math.max(0, r.playbackPausedAtPosition) + e), this.source.loop = r.loop, this.source.loopStart = r.loopStart, this.source.loopEnd = r.loopEnd, this.source.setPitch(r.playbackRate), void 0 !== r.scheduledStopTime) {
                                    var o = Math.max(r.scheduledStopTime - zr.audioContext.currentTime, 0);
                                    this.stop(o)
                                }
                            }
                        }, t.setLoop = function(e) {
                            this.loop = e, this.source && this.source.loop != e && (this.source.loop = e)
                        }, t.setLoopPoints = function(e, r) {
                            this.loopStart = e, this.loopEnd = r, this.source && (this.source.loopStart !== e && (this.source.loopStart = e), this.source.loopEnd !== r && (this.source.loopEnd = r))
                        }, t.set3D = function(e) {
                            this.spatialBlendLevel != e && this.setSpatialBlendLevel(e)
                        }, t.setPitch = function(e) {
                            this.pitch = e, this.source && this.source.setPitch(e)
                        }, t.setVolume = function(e) {
                            this.gain.gain.value != e && (this.gain.gain.value = e)
                        }, t.setPosition = function(e, r, t) {
                            var n = this.panner;
                            n.positionX ? (n.positionX.value !== e && (n.positionX.value = e), n.positionY.value !== r && (n.positionY.value = r), n.positionZ.value !== t && (n.positionZ.value = t)) : n._x === e && n._y === r && n._z === t || (n.setPosition(e, r, t), n._x = e, n._y = r, n._z = t)
                        }, t.disconnectSource = function() {
                            this.source && !this.source.isPausedMockNode && (this.source.mediaElement && this.source._pauseMediaElement(), this.source.onended = null, this.source.disconnect(), delete this.source)
                        }, t.setSpatialBlendLevel = function(e) {
                            var r = this.source && !this.source.isPausedMockNode,
                                t = this.spatialBlendLevel > 0 && 0 == e || 0 == this.spatialBlendLevel && e > 0,
                                n = r && t;
                            this.spatialBlendWetGain.gain.value = e, this.spatialBlendDryGain.gain.value = 1 - e, this.spatialBlendLevel = e, n && this.configurePanningNodes()
                        }, t.configurePanningNodes = function() {
                            this.source && (this.source.disconnect(), this.spatialBlendDryGain.disconnect(), this.spatialBlendWetGain.disconnect(), this.panner.disconnect(), this.gain.disconnect(), this.spatialBlendLevel > 0 ? (this.source.connect(this.spatialBlendDryGain), this.spatialBlendDryGain.connect(this.gain), this.source.connect(this.spatialBlendWetGain), this.spatialBlendWetGain.connect(this.panner), this.panner.connect(this.gain)) : this.source.connect(this.gain), this.gain.connect(zr.audioContext.destination))
                        }, t.isStopped = function() {
                            return !this.source || !!this.source.mediaElement && this.source.isStopped
                        }, t
                    }(e, r), zr.audioInstanceIdCounter
                },
                n: function(e) {
                    if (0 == zr.audioWebEnabled) return zr.FAKEMOD_SAMPLERATE;
                    var r = zr.audioInstances[e];
                    if (!r) return zr.FAKEMOD_SAMPLERATE;
                    var t = r.buffer ? r.buffer : r.source ? r.source.buffer : 0;
                    return t ? t.sampleRate : zr.FAKEMOD_SAMPLERATE
                },
                m: function() {
                    return 0 == zr.audioWebEnabled ? zr.FAKEMOD_SAMPLERATE : zr.audioContext.sampleRate
                },
                F: function(e) {
                    if (0 == zr.audioWebEnabled) return 0;
                    var r = zr.audioInstances[e];
                    return r ? r.getLength() : 0
                },
                se: function(e) {
                    if (0 == zr.audioWebEnabled) return 2;
                    var r = zr.audioInstances[e];
                    return r.error ? 2 : r.buffer || r.url ? 0 : 1
                },
                xe: function(e) {
                    if (0 == zr.audioWebEnabled) return 0;
                    var r = zr.audioInstances[e];
                    if (!r) return 0;
                    var t = r.source;
                    return t && t.estimatePlaybackPosition ? t.estimatePlaybackPosition() : 0
                },
                qe: function() {
                    try {
                        window.AudioContext = window.AudioContext || window.webkitAudioContext, zr.audioContext = new AudioContext, zr.audioContextSuspendedTime = zo(), zr.audioContextResumeOffset = 0, zr.audioContext.onstatechange = () => {
                            if ("running" === zr.audioContext.state) {
                                zr.contextIsRunning = !0;
                                var e = zo();
                                zr.audioContextResumeOffset = e - zr.audioContextSuspendedTime, console.log("Audio context resumed after " + zr.audioContextResumeOffset.toFixed(3) + " seconds.");
                                for (var r = zr.soundsPendingContextResume.pop(); void 0 !== r;) {
                                    if (r.channel.source) r.channel.resume(r.offset + zr.audioContextResumeOffset);
                                    else {
                                        var t = 0;
                                        e > r.startTime && (t = e - r.startTime), r.channel.playSoundClip(r.clip, r.startTime, r.offset + t)
                                    }
                                    r = zr.soundsPendingContextResume.pop()
                                }
                            } else zr.contextIsRunning = !1, console.log("Audio context suspended."), zr.audioContextSuspendedTime = zo(), Object.values(zr.audioInstances).forEach((e => {
                                null != e.source && (e.isPaused() || (e.pause(), zr.soundsPendingContextResume.push({
                                    channel: e,
                                    clip: null,
                                    startTime: null,
                                    offset: e.source.playbackPausedAtPosition
                                })))
                            }))
                        };
                        var e = o.setInterval((function() {
                            "suspended" === zr.audioContext.state ? zr.audioContext.resume().catch((function(e) {
                                console.warn("Could not resume audio context. Exception: " + e)
                            })) : o.clearInterval(e)
                        }), 400);
                        zr.audioWebEnabled = 1;
                        var r = function() {
                            try {
                                "running" !== zr.audioContext.state && "closed" !== zr.audioContext.state && zr.audioContext.resume().catch((function(e) {
                                    console.warn("Could not resume audio context. Exception: " + e)
                                }));
                                for (; zr.audioCache.length < 20;) {
                                    var e = new Audio;
                                    e.autoplay = !1, zr.audioCache.push(e)
                                }
                            } catch (e) {}
                        };
                        window.addEventListener("mousedown", r), window.addEventListener("touchstart", r), o.deinitializers.push((function() {
                            window.removeEventListener("mousedown", r), window.removeEventListener("touchstart", r)
                        }))
                    } catch (e) {
                        alert("Web Audio API is not supported in this browser")
                    }
                },
                Rb: function(e, r, t, n) {
                    if (0 == zr.audioWebEnabled) return 0;
                    var o, a = R.buffer.slice(e, e + r);
                    return r < 131072 && (t = 1), o = t ? function(e) {
                        var r = qr(null, !1);
                        return zr.audioContext.decodeAudioData(e, (function(e) {
                            r.buffer = e
                        }), (function(e) {
                            r.error = !0, console.log("Decode error: " + e)
                        })), r
                    }(a) : function(e, r) {
                        var t = function(e) {
                                switch (e) {
                                    case 13:
                                        return "audio/mpeg";
                                    case 20:
                                        return "audio/wav";
                                    default:
                                        return "audio/mp4"
                                }
                            }(r),
                            n = new Blob([e], {
                                type: t
                            }),
                            o = {
                                url: URL.createObjectURL(n),
                                error: !1,
                                mediaElement: new Audio
                            };
                        return o.mediaElement.preload = "metadata", o.mediaElement.src = o.url, o.release = function() {
                            this.mediaElement && (this.mediaElement.src = "", URL.revokeObjectURL(this.url), delete this.mediaElement, delete this.url)
                        }, o.getLength = function() {
                            return 44100 * this.mediaElement.duration
                        }, o.getData = function(e, r) {
                            return console.warn("getData() is not supported for compressed sound."), 0
                        }, o.getNumberOfChannels = function() {
                            return console.warn("getNumberOfChannels() is not supported for compressed sound."), 0
                        }, o.getFrequency = function() {
                            return console.warn("getFrequency() is not supported for compressed sound."), 0
                        }, o.createSourceNode = function() {
                            var e = zr.audioCache.length ? zr.audioCache.pop() : new Audio;
                            e.preload = "metadata", e.src = this.url;
                            var r = zr.audioContext.createMediaElementSource(e);
                            return Object.defineProperty(r, "loop", {
                                get: function() {
                                    return r.mediaElement.loop
                                },
                                set: function(e) {
                                    r.mediaElement.loop !== e && (r.mediaElement.loop = e)
                                }
                            }), r.playbackRate = {}, Object.defineProperty(r.playbackRate, "value", {
                                get: function() {
                                    return r.mediaElement.playbackRate
                                },
                                set: function(e) {
                                    r.mediaElement.playbackRate !== e && (r.mediaElement.playbackRate = e)
                                }
                            }), Object.defineProperty(r, "currentTime", {
                                get: function() {
                                    return r.mediaElement.currentTime
                                },
                                set: function(e) {
                                    r.mediaElement.currentTime !== e && (r.mediaElement.currentTime = e)
                                }
                            }), Object.defineProperty(r, "mute", {
                                get: function() {
                                    return r.mediaElement.mute
                                },
                                set: function(e) {
                                    r.mediaElement.mute !== e && (r.mediaElement.mute = e)
                                }
                            }), Object.defineProperty(r, "onended", {
                                get: function() {
                                    return r.mediaElement.onended
                                },
                                set: function(e) {
                                    r.mediaElement.onended = e
                                }
                            }), r.playPromise = null, r.playTimeout = null, r.pauseRequested = !1, r.isStopped = !1, r._pauseMediaElement = function() {
                                r.playPromise || r.playTimeout ? r.pauseRequested = !0 : r.mediaElement.pause()
                            }, r._startPlayback = function(e) {
                                if (r.playPromise || r.playTimeout) return r.mediaElement.currentTime = e, void(r.pauseRequested = !1);
                                r.mediaElement.currentTime = e, r.playPromise = r.mediaElement.play(), r.playPromise && r.playPromise.then((function() {
                                    r.pauseRequested && (r.mediaElement.pause(), r.pauseRequested = !1), r.playPromise = null
                                })).catch((function(e) {
                                    if (r.playPromise = null, "NotAllowedError" !== e.name) throw e
                                }))
                            }, r.start = function(e, t) {
                                void 0 === e && (e = zr.audioContext.currentTime), void 0 === t && (t = 0);
                                var n = 1e3 * (e - zr.audioContext.currentTime);
                                n > 4 ? r.playTimeout = setTimeout((function() {
                                    r.playTimeout = null, r._startPlayback(t)
                                }), n) : r._startPlayback(t)
                            }, r.stop = function(e) {
                                void 0 === e && (e = zr.audioContext.currentTime);
                                var t = 1e3 * (e - zr.audioContext.currentTime);
                                t > 4 ? setTimeout((function() {
                                    r._pauseMediaElement(), r.isStopped = !0
                                }), t) : (r._pauseMediaElement(), r.isStopped = !0)
                            }, Gr(r), r
                        }, o
                    }(a, n), zr.audioInstances[++zr.audioInstanceIdCounter] = o, zr.audioInstanceIdCounter
                },
                re: function(e, r, t, n) {
                    if (0 == zr.audioWebEnabled) return 0;
                    var o = function(e, r, t, n) {
                        for (var o = zr.audioContext.createBuffer(e, r, t), a = n >> 2, i = 0; i < e; i++) {
                            var s = a + r * i;
                            (o.copyToChannel || function(e, r, t) {
                                var n = e.subarray(0, Math.min(e.length, this.length - (0 | t)));
                                this.getChannelData(0 | r).set(n, 0 | t)
                            }).apply(o, [U.subarray(s, s + r), i, 0])
                        }
                        return qr(o, !1)
                    }(e, r, t, n);
                    return zr.audioInstances[++zr.audioInstanceIdCounter] = o, zr.audioInstanceIdCounter
                },
                ra: function(e, r, t, n) {
                    if (0 != zr.audioWebEnabled) {
                        Wr(r, 0);
                        var o = zr.audioInstances[e],
                            a = zr.audioInstances[r];
                        if (o) try {
                            zr.contextIsRunning ? a.playSoundClip(o, zr.audioContext.currentTime + n, t) : zr.soundsPendingContextResume.push({
                                channel: a,
                                clip: o,
                                startTime: zr.audioContext.currentTime + n,
                                offset: t
                            })
                        } catch (e) {
                            console.error("playSoundClip error. Exception: " + e)
                        } else console.log("Trying to play sound which is not loaded.")
                    }
                },
                sa: function(e) {
                    var r = zr.audioInstances[e];
                    r && r.release(), delete zr.audioInstances[e]
                },
                Eb: function() {
                    0 != zr.audioWebEnabled && "suspended" === zr.audioContext.state && zr.audioContext.resume().catch((function(e) {
                        console.warn("Could not resume audio context. Exception: " + e)
                    }))
                },
                ue: function(e, r) {
                    zr.audioInstances[e].set3D(r)
                },
                oe: function(e, r, t, n, o, a) {
                    if (0 != zr.audioWebEnabled) {
                        e = -e, r = -r, t = -t;
                        var i = zr.audioContext.listener;
                        i.forwardX ? (i.forwardX.value !== e && (i.forwardX.value = e), i.forwardY.value !== r && (i.forwardY.value = r), i.forwardZ.value !== t && (i.forwardZ.value = t), i.upX.value !== n && (i.upX.value = n), i.upY.value !== o && (i.upY.value = o), i.upZ.value !== a && (i.upZ.value = a)) : i._forwardX === e && i._forwardY === r && i._forwardZ === t && i._upX === n && i._upY === o && i._upZ === a || (i.setOrientation(e, r, t, n, o, a), i._forwardX = e, i._forwardY = r, i._forwardZ = t, i._upX = n, i._upY = o, i._upZ = a)
                    }
                },
                pe: function(e, r, t) {
                    if (0 != zr.audioWebEnabled) try {
                        var n = zr.audioContext.listener;
                        n.positionX ? (n.positionX.value !== e && (n.positionX.value = e), n.positionY.value !== r && (n.positionY.value = r), n.positionZ.value !== t && (n.positionZ.value = t)) : n._positionX === e && n._positionY === r && n._positionZ === t || (n.setPosition(e, r, t), n._positionX = e, n._positionY = r, n._positionZ = t)
                    } catch (n) {
                        console.error("JS_Sound_SetListenerPosition(x=" + e + ", y=" + r + ", z=" + t + ") threw an exception: " + n)
                    }
                },
                Tb: function(e, r) {
                    0 != zr.audioWebEnabled && zr.audioInstances[e].setLoop(r)
                },
                Sb: function(e, r, t) {
                    0 != zr.audioWebEnabled && zr.audioInstances[e].setLoopPoints(r, t)
                },
                U: function(e, r) {
                    if (0 != zr.audioWebEnabled) {
                        var t = zr.audioInstances[e];
                        r != t.isPaused() && (r ? t.pause() : t.resume())
                    }
                },
                Ub: function(e, r) {
                    if (0 != zr.audioWebEnabled) try {
                        zr.audioInstances[e].setPitch(r)
                    } catch (t) {
                        console.error("JS_Sound_SetPitch(channel=" + e + ", pitch=" + r + ") threw an exception: " + t)
                    }
                },
                we: function(e, r, t, n) {
                    0 != zr.audioWebEnabled && zr.audioInstances[e].setPosition(r, t, n)
                },
                ve: function(e, r) {
                    if (0 != zr.audioWebEnabled) try {
                        zr.audioInstances[e].setVolume(r)
                    } catch (t) {
                        console.error("JS_Sound_SetVolume(channel=" + e + ", volume=" + r + ") threw an exception: " + t)
                    }
                },
                V: Wr,
                Pb: function(e, r) {
                    var t = o.SystemInfo.browser;
                    return e && qe(t, e, r), ze(t)
                },
                lb: function(e, r) {
                    var t = o.SystemInfo.browserVersion;
                    return e && qe(t, e, r), ze(t)
                },
                Od: function(e, r, t) {
                    var n = ge(e),
                        a = "#canvas" == n ? o.canvas : document.querySelector(n),
                        i = 0,
                        s = 0;
                    if (a) {
                        var u = a.getBoundingClientRect();
                        i = u.width, s = u.height
                    }
                    t >>= 3, q[r >>= 3] = i, q[t] = s
                },
                T: function(e, r) {
                    return e && qe(document.URL, e, r), ze(document.URL)
                },
                ib: function(e, r) {
                    var t = o.SystemInfo.gpu;
                    return e && qe(t, e, r), ze(t)
                },
                kb: function(e, r) {
                    var t = o.SystemInfo.language;
                    return e && qe(t, e, r), ze(t)
                },
                hb: function() {
                    return o.matchWebGLToCanvasSize || void 0 === o.matchWebGLToCanvasSize
                },
                mb: function(e, r) {
                    var t = o.SystemInfo.os + " " + o.SystemInfo.osVersion;
                    return e && qe(t, e, r), ze(t)
                },
                fb: function() {
                    return 0 == o.matchWebGLToCanvasSize ? 1 : o.devicePixelRatio || window.devicePixelRatio || 1
                },
                qd: function(e, r) {
                    r >>= 3, q[e >>= 3] = o.SystemInfo.width, q[r] = o.SystemInfo.height
                },
                zc: function(e, r) {
                    return e && qe(o.streamingAssetsUrl, e, r), ze(o.streamingAssetsUrl)
                },
                ze: function() {
                    var e = Bo.getExtension("WEBGL_compressed_texture_astc");
                    return !(!e || !e.getSupportedProfiles) && e.getSupportedProfiles().includes("hdr")
                },
                eb: function() {
                    return o.SystemInfo.hasCursorLock
                },
                wd: function() {
                    return o.SystemInfo.hasFullscreen
                },
                Y: function() {
                    return o.SystemInfo.hasWebGL
                },
                nb: function() {
                    return o.SystemInfo.hasWebGPU
                },
                od: function() {
                    return !!o.shouldQuit
                },
                Nc: function(e) {
                    return Vr[e] && Vr[e].video.videoHeight
                },
                Oc: function(e) {
                    return Vr[e] && Vr[e].video.videoWidth
                },
                Vg: function(e, r, t, n) {
                    var o = Vr[e];
                    if (o) {
                        var a = performance.now();
                        if (!(a < o.nextFrameAvailableTime)) {
                            o.nextFrameAvailableTime += o.frameLengthInMsecs, o.nextFrameAvailableTime < a && (o.nextFrameAvailableTime = a + o.frameLengthInMsecs);
                            var i = o.canvas;
                            i.width == t && i.height == n && o.context2d || (i.width = t, i.height = n, o.context2d = i.getContext("2d"));
                            var s = o.context2d;
                            return s.drawImage(o.video, 0, 0, o.video.videoWidth, o.video.videoHeight, 0, 0, t, n), R.set(s.getImageData(0, 0, t, n).data, r), 1
                        }
                    }
                },
                g: function(e) {
                    o.WebGPU.commandEncoder = e
                },
                Xg: function(e, r) {
                    o.WebGPU = {}, o.WebGPU.adapter = jr[e], o.WebGPU.device = jr[r]
                },
                Dd: function() {
                    o.WebPlayer.PlayerIsInitialized()
                },
                le: function(e) {
                    var r = Yr.abortControllers[e];
                    r && !r.signal.aborted && r.abort()
                },
                ie: function(e, r) {
                    var t = ge(e),
                        n = ge(r),
                        o = new AbortController,
                        a = {
                            url: t,
                            init: {
                                method: n,
                                signal: o.signal,
                                headers: {},
                                enableStreamingDownload: !0
                            },
                            tempBuffer: null,
                            tempBufferSize: 0
                        };
                    return Yr.abortControllers[Yr.nextRequestId] = o, Yr.requests[Yr.nextRequestId] = a, Yr.nextRequestId++
                },
                je: function(e, r, t, n, o) {
                    var a = Yr.responses[e];
                    if (!a) return qe("", r, t), void qe("", n, o);
                    r && qe(Xr(e), r, t), n && qe(a.url, n, o)
                },
                ke: function(e, r) {
                    r >>= 2;
                    var t = Yr.responses[e];
                    if (!t) return O[r] = 0, void(O[r + 1] = 0);
                    var n = Xr(e);
                    O[r] = ze(n), O[r + 1] = ze(t.url)
                },
                qa: function(e) {
                    Yr.timer[e] && clearTimeout(Yr.timer[e]), delete Yr.requests[e], delete Yr.responses[e], delete Yr.abortControllers[e], delete Yr.timer[e]
                },
                ee: function(e, r, t, n, a, i) {
                    var s = Yr.requests[e],
                        u = Yr.abortControllers[e];

                    function c() {
                        Yr.timer[e] && (clearTimeout(Yr.timer[e]), delete Yr.timer[e])
                    }

                    function f(e, r) {
                        if (c(), a) {
                            var t = ze(e) + 1,
                                o = $o(t);
                            qe(e, o, t), ke(a)(n, 500, 0, 0, o, r), Qo(o), s.tempBuffer && Qo(s.tempBuffer)
                        }
                    }
                    try {
                        if (t > 0) {
                            var l = R.subarray(r, r + t);
                            s.init.body = new Blob([l])
                        }
                        s.timeout && (Yr.timer[e] = setTimeout((function() {
                            s.isTimedOut = !0, u.abort()
                        }), s.timeout));
                        var d = o.fetchWithProgress;
                        s.init.onProgress = function(r) {
                            if (i && r.lengthComputable) {
                                var t = r.response;
                                if (Yr.responses[e] = t, r.chunk) {
                                    var o = function(e) {
                                        if (!s.tempBuffer) {
                                            const r = Math.max(e, 1024);
                                            s.tempBuffer = $o(r), s.tempBufferSize = r
                                        }
                                        return s.tempBufferSize < e && (Qo(s.tempBuffer), s.tempBuffer = $o(e), s.tempBufferSize = e), s.tempBuffer
                                    }(r.chunk.length);
                                    R.set(r.chunk, o), ke(i)(n, t.status, r.loaded, r.total, o, r.chunk.length)
                                } else ke(i)(n, t.status, r.loaded, r.total, 0, 0)
                            }
                        }, o.companyName && o.productName && o.cachedFetch && (d = o.cachedFetch, s.init.companyName = o.companyName, s.init.productName = o.productName, s.init.productVersion = o.productVersion, s.init.control = o.cacheControl(s.url)), d(s.url, s.init).then((function(r) {
                            Yr.responses[e] = r,
                                function(e, r) {
                                    if (c(), a) {
                                        if (s.init.enableStreamingDownload) ke(a)(n, e.status, 0, r.length, 0, 0);
                                        else if (0 != r.length) {
                                            var t = $o(r.length);
                                            R.set(r, t), ke(a)(n, e.status, t, r.length, 0, 0), Qo(t)
                                        } else ke(a)(n, e.status, 0, 0, 0, 0);
                                        s.tempBuffer && Qo(s.tempBuffer)
                                    }
                                }(r, r.parsedBody)
                        })).catch((function(e) {
                            s.isTimedOut ? f("Connection timed out.", 14) : u.signal.aborted ? f("Aborted.", 17) : f(e.message, 2)
                        }))
                    } catch (e) {
                        f(e.message, 2)
                    }
                },
                ge: function(e, r) {
                    var t = Yr.requests[e];
                    t && (t.init.redirect = 0 === r ? "error" : "follow")
                },
                fe: function(e, r, t) {
                    var n = Yr.requests[e];
                    if (n) {
                        var o = ge(r),
                            a = ge(t);
                        n.init.headers[o] = a
                    }
                },
                he: function(e, r) {
                    var t = Yr.requests[e];
                    t && (t.timeout = r)
                },
                Ta: function() {
                    var e = [111039, 234043, 3040, 516029, 360035, 233020].map((e => ({
                        inventoryType: "CHAMPION_SKIN",
                        itemId: e
                    })));
                    window.parent.postMessage({
                        messageType: "rcp-fe-lol-home-open-store",
                        type: "RClientWindowMessenger",
                        data: {
                            page: "skins",
                            items: e
                        }
                    }, "*")
                },
                Tc: function() {
                    window.parent.postMessage({
                        messageType: "rcp-fe-lol-home-settings-audio-observe",
                        type: "RClientWindowMessenger"
                    }, "*")
                },
                ab: function() {
                    window.parent.postMessage({
                        messageType: "rcp-fe-lol-home-data-request",
                        type: "RClientWindowMessenger"
                    }, "*"), window.parent.postMessage({
                        messageType: "lol-metagames",
                        type: "RClientWindowMessenger",
                        data: {
                            type: "lol-metagames-get-build-version"
                        }
                    }, "*")
                },
                $a: function() {
                    window.parent.postMessage({
                        messageType: "rcp-fe-lol-home-inventory-observe",
                        type: "RClientWindowMessenger",
                        data: {
                            inventoryType: "EVENT_PASS"
                        }
                    }, "*")
                },
                Wa: function() {
                    window.parent.postMessage({
                        messageType: "lol-metagames",
                        type: "RClientWindowMessenger",
                        data: {
                            type: "lol-metagames-currency-balances-observe",
                            options: {
                                currencies: ["mgs_opal_shield", "mgs_opal_turn"]
                            }
                        }
                    }, "*")
                },
                _a: function() {
                    window.parent.postMessage({
                        messageType: "rcp-fe-lol-home-observe-missions",
                        type: "RClientWindowMessenger"
                    }, "*")
                },
                Za: function(e) {
                    let r = ge(e);
                    window.parent.postMessage({
                        messageType: "rcp-fe-lol-home-missions-select-rewards",
                        type: "RClientWindowMessenger",
                        data: {
                            internalName: r,
                            selectedRewardGroups: ["Reward_Group_0"]
                        }
                    }, "*")
                },
                ja: function(e, r, t) {
                    let n = ge(e),
                        o = ge(r),
                        a = JSON.parse(ge(t));
                    window.parent.postMessage({
                        messageType: "lol-metagames",
                        type: "RClientWindowMessenger",
                        data: {
                            type: "lol-metagames-player-event",
                            options: {
                                metagameId: n,
                                eventName: o,
                                playerGameData: a,
                                paymentOption: "mgs_opal_shield",
                                storeId: "1443b032-a31c-4f67-be04-09389f279348"
                            }
                        }
                    }, "*")
                },
                Xa: function(e, r) {
                    let t = ge(e),
                        n = ge(r);
                    window.parent.postMessage({
                        messageType: "lol-metagames",
                        type: "RClientWindowMessenger",
                        data: {
                            type: "lol-metagames-player-data-update",
                            options: {
                                metagameId: t,
                                playerData: n
                            }
                        }
                    }, "*")
                },
                $f: function(e, r) {},
                Ee: function(e, r, t, n, o) {
                    try {
                        for (var a = 0, i = r ? N[r >> 2] : 0, s = r ? N[r + 4 >> 2] : 0, u = t ? N[t >> 2] : 0, c = t ? N[t + 4 >> 2] : 0, f = n ? N[n >> 2] : 0, l = n ? N[n + 4 >> 2] : 0, d = 0, m = 0, p = 0, v = 0, g = 0, h = 0, y = (r ? N[r >> 2] : 0) | (t ? N[t >> 2] : 0) | (n ? N[n >> 2] : 0), b = (r ? N[r + 4 >> 2] : 0) | (t ? N[t + 4 >> 2] : 0) | (n ? N[n + 4 >> 2] : 0), w = function(e, r, t, n) {
                                return e < 32 ? r & n : t & n
                            }, E = 0; E < e; E++) {
                            var k = 1 << E % 32;
                            if (w(E, y, b, k)) {
                                var x = Ar.getStreamFromFD(E),
                                    S = Ar.DEFAULT_POLLMASK;
                                x.stream_ops.poll && (S = x.stream_ops.poll(x)), 1 & S && w(E, i, s, k) && (E < 32 ? d |= k : m |= k, a++), 4 & S && w(E, u, c, k) && (E < 32 ? p |= k : v |= k, a++), 2 & S && w(E, f, l, k) && (E < 32 ? g |= k : h |= k, a++)
                            }
                        }
                        return r && (N[r >> 2] = d, N[r + 4 >> 2] = m), t && (N[t >> 2] = p, N[t + 4 >> 2] = v), n && (N[n >> 2] = g, N[n + 4 >> 2] = h), a
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                gf: function(e, r, t, n, o, a) {
                    try {
                        var i = Zr(e),
                            s = i.sock_ops.accept(i);
                        if (r) rt(r, s.family, tt.lookup_name(s.daddr), s.dport, t);
                        return s.stream.fd
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Tf: function(e, r, t, n, o, a) {
                    try {
                        var i = Zr(e),
                            s = it(r, t);
                        return i.sock_ops.bind(i, s.addr, s.port), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                gb: function(e, r) {
                    try {
                        return e = Ar.getStr(e), Pr.chmod(e, r), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Df: function(e, r, t, n, o, a) {
                    try {
                        var i = Zr(e),
                            s = it(r, t);
                        return i.sock_ops.connect(i, s.addr, s.port), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                $c: function(e, r, t) {
                    try {
                        var n = Ar.getStreamFromFD(e);
                        if (n.fd === r) return -28;
                        var o = Pr.getStream(r);
                        return o && Pr.close(o), Pr.createStream(n, r, r + 1).fd
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                zd: function(e, r, t, n) {
                    try {
                        if (r = Ar.getStr(r), r = Ar.calculateAt(e, r), -8 & t) return -28;
                        var o = Pr.lookupPath(r, {
                            follow: !0
                        }).node;
                        if (!o) return -44;
                        var a = "";
                        return 4 & t && (a += "r"), 2 & t && (a += "w"), 1 & t && (a += "x"), a && Pr.nodePermissions(o, a) ? -2 : 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Uc: function(e, r) {
                    try {
                        return Pr.fchmod(e, r), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                j: function(e, r, t) {
                    Ar.varargs = t;
                    try {
                        var n = Ar.getStreamFromFD(e);
                        switch (r) {
                            case 0:
                                return (o = Ar.get()) < 0 ? -28 : Pr.createStream(n, o).fd;
                            case 1:
                            case 2:
                            case 6:
                            case 7:
                                return 0;
                            case 3:
                                return n.flags;
                            case 4:
                                var o = Ar.get();
                                return n.flags |= o, 0;
                            case 5:
                                o = Ar.get();
                                return T[o + 0 >> 1] = 2, 0;
                            case 16:
                            case 8:
                            default:
                                return -28;
                            case 9:
                                return Jr(28), -1
                        }
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Pg: function(e, r) {
                    try {
                        var t = Ar.getStreamFromFD(e);
                        return Ar.doStat(Pr.stat, t.path, r)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                fd: function(e, r) {
                    try {
                        if (0 === r) return -28;
                        var t = Pr.cwd(),
                            n = ze(t) + 1;
                        return r < n ? -68 : (qe(t, e, r), n)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                cd: function(e, r, t) {
                    try {
                        var n = Ar.getStreamFromFD(e);
                        n.getdents || (n.getdents = Pr.readdir(n.path));
                        for (var o = 280, a = 0, i = Pr.llseek(n, 0, 1), s = Math.floor(i / o); s < n.getdents.length && a + o <= t;) {
                            var u, c, f = n.getdents[s];
                            if ("." === f) u = n.node.id, c = 4;
                            else if (".." === f) {
                                u = Pr.lookupPath(n.path, {
                                    parent: !0
                                }).node.id, c = 4
                            } else {
                                var l = Pr.lookupNode(n.node, f);
                                u = l.id, c = Pr.isChrdev(l.mode) ? 2 : Pr.isDir(l.mode) ? 4 : Pr.isLink(l.mode) ? 10 : 8
                            }
                            z[r + a >> 3] = BigInt(u), z[r + a + 8 >> 3] = BigInt((s + 1) * o), T[r + a + 16 >> 1] = 280, M[r + a + 18 >> 0] = c, qe(f, r + a + 19, 256), a += o, s += 1
                        }
                        return Pr.llseek(n, s * o, 0), a
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                ad: function(e, r, t, n, o, a) {
                    try {
                        var i = Zr(e);
                        if (!i.daddr) return -53;
                        rt(r, i.family, tt.lookup_name(i.daddr), i.dport, t);
                        return 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                vf: function(e, r, t, n, o, a) {
                    try {
                        var i = Zr(e);
                        rt(r, i.family, tt.lookup_name(i.saddr || "0.0.0.0"), i.sport, t);
                        return 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Lf: function(e, r, t, n, o, a) {
                    try {
                        var i = Zr(e);
                        return 1 === r && 4 === t ? (N[n >> 2] = i.error, N[o >> 2] = 4, i.error = null, 0) : -50
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Vb: function(e, r, t) {
                    Ar.varargs = t;
                    try {
                        var n = Ar.getStreamFromFD(e);
                        switch (r) {
                            case 21509:
                            case 21505:
                            case 21510:
                            case 21511:
                            case 21512:
                            case 21506:
                            case 21507:
                            case 21508:
                            case 21523:
                            case 21524:
                                return n.tty ? 0 : -59;
                            case 21519:
                                if (!n.tty) return -59;
                                var o = Ar.get();
                                return N[o >> 2] = 0, 0;
                            case 21520:
                                return n.tty ? -28 : -59;
                            case 21531:
                                o = Ar.get();
                                return Pr.ioctl(n, r, o);
                            default:
                                return -28
                        }
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                sf: function(e, r) {
                    try {
                        var t = Zr(e);
                        return t.sock_ops.listen(t, r), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                qg: function(e, r) {
                    try {
                        return e = Ar.getStr(e), Ar.doStat(Pr.lstat, e, r)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                ed: function(e, r, t) {
                    try {
                        return r = Ar.getStr(r), r = Ar.calculateAt(e, r), "/" === (r = yr.normalize(r))[r.length - 1] && (r = r.substr(0, r.length - 1)), Pr.mkdir(r, t, 0), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                zg: function(e, r, t, n) {
                    try {
                        r = Ar.getStr(r);
                        var o = 256 & n,
                            a = 4096 & n;
                        return n &= -6401, r = Ar.calculateAt(e, r, a), Ar.doStat(o ? Pr.lstat : Pr.stat, r, t)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Ac: function(e, r, t, n) {
                    Ar.varargs = n;
                    try {
                        r = Ar.getStr(r), r = Ar.calculateAt(e, r);
                        var o = n ? Ar.get() : 0;
                        return Pr.open(r, t, o).fd
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Hd: function(e) {
                    try {
                        if (0 == e) throw new Pr.ErrnoError(21);
                        var r = st.createPipe();
                        return N[e >> 2] = r.readable_fd, N[e + 4 >> 2] = r.writable_fd, 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                wf: function(e, r, t) {
                    try {
                        for (var n = 0, o = 0; o < r; o++) {
                            var a = e + 8 * o,
                                i = N[a >> 2],
                                s = T[a + 4 >> 1],
                                u = 32,
                                c = Pr.getStream(i);
                            c && (u = Ar.DEFAULT_POLLMASK, c.stream_ops.poll && (u = c.stream_ops.poll(c))), (u &= 24 | s) && n++, T[a + 6 >> 1] = u
                        }
                        return n
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Vc: function(e, r, t, n) {
                    try {
                        if (r = Ar.getStr(r), r = Ar.calculateAt(e, r), n <= 0) return -28;
                        var o = Pr.readlink(r),
                            a = Math.min(n, ze(o)),
                            i = M[t + a];
                        return qe(o, t, n + 1), M[t + a] = i, a
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Ke: function(e, r, t, n, o, a) {
                    try {
                        var i = Zr(e),
                            s = i.sock_ops.recvmsg(i, t);
                        if (!s) return 0;
                        if (o) rt(o, i.family, tt.lookup_name(s.addr), s.port, a);
                        return R.set(s.buffer, r), s.buffer.byteLength
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Zc: function(e, r, t, n, o, a) {
                    try {
                        for (var i = Zr(e), s = O[r + 8 >> 2], u = N[r + 12 >> 2], c = 0, f = 0; f < u; f++) c += N[s + (8 * f + 4) >> 2];
                        var l = i.sock_ops.recvmsg(i, c);
                        if (!l) return 0;
                        var d = O[r >> 2];
                        if (d) rt(d, i.family, tt.lookup_name(l.addr), l.port);
                        var m = 0,
                            p = l.buffer.byteLength;
                        for (f = 0; p > 0 && f < u; f++) {
                            var v = O[s + (8 * f + 0) >> 2],
                                g = N[s + (8 * f + 4) >> 2];
                            if (g) {
                                var h = Math.min(g, p),
                                    y = l.buffer.subarray(m, m + h);
                                R.set(y, v + m), m += h, p -= h
                            }
                        }
                        return m
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                hd: function(e, r, t, n) {
                    try {
                        return r = Ar.getStr(r), n = Ar.getStr(n), r = Ar.calculateAt(e, r), n = Ar.calculateAt(t, n), Pr.rename(r, n), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                dd: function(e) {
                    try {
                        return e = Ar.getStr(e), Pr.rmdir(e), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                _c: function(e, r, t, n, o, a) {
                    try {
                        var i, s, u = Zr(e),
                            c = O[r + 8 >> 2],
                            f = N[r + 12 >> 2],
                            l = O[r >> 2],
                            d = N[r + 4 >> 2];
                        if (l) {
                            var m = at(l, d);
                            if (m.errno) return -m.errno;
                            s = m.port, i = tt.lookup_addr(m.addr) || m.addr
                        }
                        for (var p = 0, v = 0; v < f; v++) p += N[c + (8 * v + 4) >> 2];
                        var g = new Uint8Array(p),
                            h = 0;
                        for (v = 0; v < f; v++)
                            for (var y = O[c + (8 * v + 0) >> 2], b = N[c + (8 * v + 4) >> 2], w = 0; w < b; w++) g[h++] = M[y + w >> 0];
                        return u.sock_ops.sendmsg(u, g, 0, p, i, s)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Te: function(e, r, t, n, o, a) {
                    try {
                        var i = Zr(e),
                            s = it(o, a, !0);
                        return s ? i.sock_ops.sendmsg(i, M, r, t, s.addr, s.port) : Pr.write(i.stream, M, r, t)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                cb: function(e, r, t) {
                    try {
                        return Kr.createSocket(e, r, t).stream.fd
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Hg: function(e, r) {
                    try {
                        return e = Ar.getStr(e), Ar.doStat(Pr.stat, e, r)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Tg: function(e, r, t) {
                    try {
                        return e = Ar.getStr(e), N[t + 4 >> 2] = 4096, N[t + 40 >> 2] = 4096, N[t + 8 >> 2] = 1e6, N[t + 12 >> 2] = 5e5, N[t + 16 >> 2] = 5e5, N[t + 20 >> 2] = Pr.nextInode, N[t + 24 >> 2] = 1e6, N[t + 28 >> 2] = 42, N[t + 44 >> 2] = 2, N[t + 36 >> 2] = 255, 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Xc: function(e, r) {
                    try {
                        return e = Ar.getStr(e), r = Ar.getStr(r), Pr.symlink(e, r), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Ug: function(e, r) {
                    try {
                        return r = ft(r), isNaN(r) ? -61 : (e = Ar.getStr(e), Pr.truncate(e, r), 0)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                ld: function(e, r, t) {
                    try {
                        return r = Ar.getStr(r), r = Ar.calculateAt(e, r), 0 === t ? Pr.unlink(r) : 512 === t ? Pr.rmdir(r) : s("Invalid flags passed to unlinkat"), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                gd: function(e, r, t, n) {
                    try {
                        if (r = Ar.getStr(r), r = Ar.calculateAt(e, r, !0), t) {
                            var o = lt(t),
                                a = N[t + 8 >> 2];
                            i = 1e3 * o + a / 1e6, s = 1e3 * (o = lt(t += 16)) + (a = N[t + 8 >> 2]) / 1e6
                        } else var i = Date.now(),
                            s = i;
                        return Pr.utime(r, i, s), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                Dc: function() {
                    return true
                },
                Ud: function(e, r) {
                    var t = new Date(1e3 * lt(e));
                    N[r >> 2] = t.getUTCSeconds(), N[r + 4 >> 2] = t.getUTCMinutes(), N[r + 8 >> 2] = t.getUTCHours(), N[r + 12 >> 2] = t.getUTCDate(), N[r + 16 >> 2] = t.getUTCMonth(), N[r + 20 >> 2] = t.getUTCFullYear() - 1900, N[r + 24 >> 2] = t.getUTCDay();
                    var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                        o = (t.getTime() - n) / 864e5 | 0;
                    N[r + 28 >> 2] = o
                },
                Zd: function(e, r) {
                    var t = new Date(1e3 * lt(e));
                    N[r >> 2] = t.getSeconds(), N[r + 4 >> 2] = t.getMinutes(), N[r + 8 >> 2] = t.getHours(), N[r + 12 >> 2] = t.getDate(), N[r + 16 >> 2] = t.getMonth(), N[r + 20 >> 2] = t.getFullYear() - 1900, N[r + 24 >> 2] = t.getDay();
                    var n = 0 | vt(t);
                    N[r + 28 >> 2] = n, N[r + 36 >> 2] = -60 * t.getTimezoneOffset();
                    var o = new Date(t.getFullYear(), 0, 1),
                        a = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(),
                        i = o.getTimezoneOffset(),
                        s = 0 | (a != i && t.getTimezoneOffset() == Math.min(i, a));
                    N[r + 32 >> 2] = s
                },
                ae: function(e) {
                    var r = new Date(N[e + 20 >> 2] + 1900, N[e + 16 >> 2], N[e + 12 >> 2], N[e + 8 >> 2], N[e + 4 >> 2], N[e >> 2], 0),
                        t = N[e + 32 >> 2],
                        n = r.getTimezoneOffset(),
                        o = new Date(r.getFullYear(), 0, 1),
                        a = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
                        i = o.getTimezoneOffset(),
                        s = Math.min(i, a);
                    if (t < 0) N[e + 32 >> 2] = Number(a != i && s == n);
                    else if (t > 0 != (s == n)) {
                        var u = Math.max(i, a),
                            c = t > 0 ? s : u;
                        r.setTime(r.getTime() + 6e4 * (c - n))
                    }
                    N[e + 24 >> 2] = r.getDay();
                    var f = 0 | vt(r);
                    return N[e + 28 >> 2] = f, N[e >> 2] = r.getSeconds(), N[e + 4 >> 2] = r.getMinutes(), N[e + 8 >> 2] = r.getHours(), N[e + 12 >> 2] = r.getDate(), N[e + 16 >> 2] = r.getMonth(), N[e + 20 >> 2] = r.getYear(), r.getTime() / 1e3 | 0
                },
                Pc: function(e, r, t, n, o, a) {
                    try {
                        var i = Ar.getStreamFromFD(o);
                        2 & t && Ar.doMsync(e, i, r, n, a), Pr.munmap(i)
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return -e.errno
                    }
                },
                ce: function(e, r, t) {
                    var n = (new Date).getFullYear(),
                        o = new Date(n, 0, 1),
                        a = new Date(n, 6, 1),
                        i = o.getTimezoneOffset(),
                        s = a.getTimezoneOffset(),
                        u = Math.max(i, s);

                    function c(e) {
                        var r = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                        return r ? r[1] : "GMT"
                    }
                    O[e >> 2] = 60 * u, N[r >> 2] = Number(i != s);
                    var f = c(o),
                        l = c(a),
                        d = We(f),
                        m = We(l);
                    s < i ? (O[t >> 2] = d, O[t + 4 >> 2] = m) : (O[t >> 2] = m, O[t + 4 >> 2] = d)
                },
                a: function() {
                    s("")
                },
                uc: function(e) {},
                md: function() {
                    Nr.mainLoop.pause(), Nr.mainLoop.func = null
                },
                jd: function(e) {
                    clearInterval(e)
                },
                p: function() {
                    return Date.now()
                },
                Id: function() {},
                ud: function() {
                    if (!ht.fullscreenEnabled()) return -1;
                    ht.removeDeferredCalls(At);
                    var e = bt[1];
                    if (e.exitFullscreen) e.fullscreenElement && e.exitFullscreen();
                    else {
                        if (!e.webkitExitFullscreen) return -1;
                        e.webkitFullscreenElement && e.webkitExitFullscreen()
                    }
                    return 0
                },
                rd: function() {
                    return ht.removeDeferredCalls(Dt), document.exitPointerLock ? (document.exitPointerLock(), 0) : -1
                },
                pd: kt,
                la: function(e) {
                    return ht.fullscreenEnabled() ? (Ft(e), 0) : -1
                },
                Ab: function(e, r) {
                    return e < 0 || e >= ht.lastGamepadState.length ? -5 : ht.lastGamepadState[e] ? (Mt(r, ht.lastGamepadState[e]), 0) : -7
                },
                te: function() {
                    return 2147418112
                },
                b: Ir,
                ah: function() {
                    return 1e3
                },
                Bb: function() {
                    return ht.lastGamepadState.length
                },
                nd: function() {
                    ht.removeAllEventListeners()
                },
                Be: function(e) {
                    return !zt.contexts[e] || zt.contexts[e].GLctx.isContextLost()
                },
                d: function(e, r, t) {
                    var n = function(e, r) {
                        var t = e,
                            n = r;

                        function o(e) {
                            var r;
                            return n = function(e, r) {
                                return "double" !== r && "i64" !== r || 7 & e && (e += 4), e
                            }(n, e), "double" === e ? (r = q[n >> 3], n += 8) : "i64" == e ? (r = [N[n >> 2], N[n + 4 >> 2]], n += 8) : (e = "i32", r = N[n >> 2], n += 4), r
                        }
                        for (var a, i, s, u, c = [];;) {
                            var f = t;
                            if (0 === (a = M[t >> 0])) break;
                            if (i = M[t + 1 >> 0], 37 == a) {
                                var l = !1,
                                    d = !1,
                                    m = !1,
                                    p = !1,
                                    v = !1;
                                e: for (;;) {
                                    switch (i) {
                                        case 43:
                                            l = !0;
                                            break;
                                        case 45:
                                            d = !0;
                                            break;
                                        case 35:
                                            m = !0;
                                            break;
                                        case 48:
                                            if (p) break e;
                                            p = !0;
                                            break;
                                        case 32:
                                            v = !0;
                                            break;
                                        default:
                                            break e
                                    }
                                    t++, i = M[t + 1 >> 0]
                                }
                                var g = 0;
                                if (42 == i) g = o("i32"), t++, i = M[t + 1 >> 0];
                                else
                                    for (; i >= 48 && i <= 57;) g = 10 * g + (i - 48), t++, i = M[t + 1 >> 0];
                                var h, y = !1,
                                    b = -1;
                                if (46 == i) {
                                    if (b = 0, y = !0, t++, 42 == (i = M[t + 1 >> 0])) b = o("i32"), t++;
                                    else
                                        for (;;) {
                                            var w = M[t + 1 >> 0];
                                            if (w < 48 || w > 57) break;
                                            b = 10 * b + (w - 48), t++
                                        }
                                    i = M[t + 1 >> 0]
                                }
                                switch (b < 0 && (b = 6, y = !1), String.fromCharCode(i)) {
                                    case "h":
                                        104 == M[t + 2 >> 0] ? (t++, h = 1) : h = 2;
                                        break;
                                    case "l":
                                        108 == M[t + 2 >> 0] ? (t++, h = 8) : h = 4;
                                        break;
                                    case "L":
                                    case "q":
                                    case "j":
                                        h = 8;
                                        break;
                                    case "z":
                                    case "t":
                                    case "I":
                                        h = 4;
                                        break;
                                    default:
                                        h = null
                                }
                                switch (h && t++, i = M[t + 1 >> 0], String.fromCharCode(i)) {
                                    case "d":
                                    case "i":
                                    case "u":
                                    case "o":
                                    case "x":
                                    case "X":
                                    case "p":
                                        var E = 100 == i || 105 == i;
                                        s = o("i" + 8 * (h = h || 4)), 8 == h && (s = 117 == i ? (s[0] >>> 0) + 4294967296 * (s[1] >>> 0) : Gt(s[0], s[1])), h <= 4 && (s = (E ? qt : Wt)(s & Math.pow(256, h) - 1, 8 * h));
                                        var k = Math.abs(s),
                                            x = "";
                                        if (100 == i || 105 == i) C = qt(s, 8 * h).toString(10);
                                        else if (117 == i) C = Wt(s, 8 * h).toString(10), s = Math.abs(s);
                                        else if (111 == i) C = (m ? "0" : "") + k.toString(8);
                                        else if (120 == i || 88 == i) {
                                            if (x = m && 0 != s ? "0x" : "", s < 0) {
                                                s = -s, C = (k - 1).toString(16);
                                                for (var S = [], _ = 0; _ < C.length; _++) S.push((15 - parseInt(C[_], 16)).toString(16));
                                                for (C = S.join(""); C.length < 2 * h;) C = "f" + C
                                            } else C = k.toString(16);
                                            88 == i && (x = x.toUpperCase(), C = C.toUpperCase())
                                        } else 112 == i && (0 === k ? C = "(nil)" : (x = "0x", C = k.toString(16)));
                                        if (y)
                                            for (; C.length < b;) C = "0" + C;
                                        for (s >= 0 && (l ? x = "+" + x : v && (x = " " + x)), "-" == C.charAt(0) && (x = "-" + x, C = C.substr(1)); x.length + C.length < g;) d ? C += " " : p ? C = "0" + C : x = " " + x;
                                        (C = x + C).split("").forEach((function(e) {
                                            c.push(e.charCodeAt(0))
                                        }));
                                        break;
                                    case "f":
                                    case "F":
                                    case "e":
                                    case "E":
                                    case "g":
                                    case "G":
                                        var C;
                                        if (s = o("double"), isNaN(s)) C = "nan", p = !1;
                                        else if (isFinite(s)) {
                                            var L = !1,
                                                B = Math.min(b, 20);
                                            if (103 == i || 71 == i) {
                                                L = !0, b = b || 1;
                                                var P = parseInt(s.toExponential(B).split("e")[1], 10);
                                                b > P && P >= -4 ? (i = (103 == i ? "f" : "F").charCodeAt(0), b -= P + 1) : (i = (103 == i ? "e" : "E").charCodeAt(0), b--), B = Math.min(b, 20)
                                            }
                                            101 == i || 69 == i ? (C = s.toExponential(B), /[eE][-+]\d$/.test(C) && (C = C.slice(0, -1) + "0" + C.slice(-1))) : 102 != i && 70 != i || (C = s.toFixed(B), 0 === s && ((u = s) < 0 || 0 === u && 1 / u == -1 / 0) && (C = "-" + C));
                                            var A = C.split("e");
                                            if (L && !m)
                                                for (; A[0].length > 1 && A[0].includes(".") && ("0" == A[0].slice(-1) || "." == A[0].slice(-1));) A[0] = A[0].slice(0, -1);
                                            else
                                                for (m && -1 == C.indexOf(".") && (A[0] += "."); b > B++;) A[0] += "0";
                                            C = A[0] + (A.length > 1 ? "e" + A[1] : ""), 69 == i && (C = C.toUpperCase()), s >= 0 && (l ? C = "+" + C : v && (C = " " + C))
                                        } else C = (s < 0 ? "-" : "") + "inf", p = !1;
                                        for (; C.length < g;) d ? C += " " : C = !p || "-" != C[0] && "+" != C[0] ? (p ? "0" : " ") + C : C[0] + "0" + C.slice(1);
                                        i < 97 && (C = C.toUpperCase()), C.split("").forEach((function(e) {
                                            c.push(e.charCodeAt(0))
                                        }));
                                        break;
                                    case "s":
                                        var D = o("i8*"),
                                            F = D ? Vt(D) : 6;
                                        if (y && (F = Math.min(F, b)), !d)
                                            for (; F < g--;) c.push(32);
                                        if (D)
                                            for (_ = 0; _ < F; _++) c.push(R[D++ >> 0]);
                                        else c = c.concat(Er("(null)".substr(0, F), !0));
                                        if (d)
                                            for (; F < g--;) c.push(32);
                                        break;
                                    case "c":
                                        for (d && c.push(o("i8")); --g > 0;) c.push(32);
                                        d || c.push(o("i8"));
                                        break;
                                    case "n":
                                        var T = o("i32*");
                                        N[T >> 2] = c.length;
                                        break;
                                    case "%":
                                        c.push(a);
                                        break;
                                    default:
                                        for (_ = f; _ < t + 2; _++) c.push(M[_ >> 0])
                                }
                                t += 2
                            } else c.push(a), t += 1
                        }
                        return c
                    }(r, t);
                    Yt(e, ve(n, 0))
                },
                vd: function(e, r) {
                    return function(e, r) {
                        return ht.fullscreenEnabled() ? (e = wt(e)) ? e.requestFullscreen || e.webkitRequestFullscreen ? ht.canPerformEventHandlerRequests() ? At(e, r) : r.deferUntilInEventHandler ? (ht.deferCall(At, 1, [e, r]), 1) : -2 : -3 : -4 : -1
                    }(e, {
                        scaleMode: 0,
                        canvasResolutionScaleMode: 0,
                        filteringMode: 0,
                        deferUntilInEventHandler: r,
                        canvasResizedCallbackTargetThread: 2
                    })
                },
                sd: function(e, r) {
                    return (e = wt(e)) ? e.requestPointerLock ? ht.canPerformEventHandlerRequests() ? Dt(e) : r ? (ht.deferCall(Dt, 2, [e]), 1) : -2 : -1 : -4
                },
                Wc: function(e) {
                    var r = R.length,
                        t = 2147418112;
                    (e >>>= 0) > t && Xt();
                    for (var n, o, a = 1; a <= 4; a *= 2) {
                        var i = r * (1 + .2 / a);
                        if (i = Math.min(i, e + 100663296), Kt(Math.min(t, (n = Math.max(e, i)) + ((o = 65536) - n % o) % o))) return !0
                    }
                    Xt()
                },
                Cb: Zt,
                jb: function(e, r, t, n, o) {
                    return Jt(e, r, t, n, 12, "blur")
                },
                ka: _t,
                Bd: function(e, r, t, n, o) {
                    return Jt(e, r, t, n, 13, "focus")
                },
                Cd: function(e, r, t, n, o) {
                    return ht.fullscreenEnabled() ? (e = wt(e)) ? ($t(e, r, t, n, 19, "webkitfullscreenchange"), $t(e, r, t, n, 19, "fullscreenchange")) : -4 : -1
                },
                Gb: function(e, r, t, n) {
                    return Zt() ? -1 : Qt(2, e, r, t, 26, "gamepadconnected")
                },
                Fb: function(e, r, t, n) {
                    return Zt() ? -1 : Qt(2, e, r, t, 27, "gamepaddisconnected")
                },
                Ed: function(e, r, t) {
                    return setInterval((function() {
                        Mr((function() {
                            ke(e)(t)
                        }))
                    }), r)
                },
                S: function(e, r, t, n, o) {
                    return en(e, r, t, n, 2, "keydown")
                },
                Q: function(e, r, t, n, o) {
                    return en(e, r, t, n, 1, "keypress")
                },
                R: function(e, r, t, n, o) {
                    return en(e, r, t, n, 3, "keyup")
                },
                id: Or,
                Nb: function(e, r, t, n, o) {
                    return tn(e, r, t, n, 5, "mousedown")
                },
                Mb: function(e, r, t, n, o) {
                    return tn(e, r, t, n, 8, "mousemove")
                },
                Ob: function(e, r, t, n, o) {
                    return tn(e, r, t, n, 6, "mouseup")
                },
                Ad: function(e, r, t, n, o) {
                    return document && document.body && (document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock || document.body.msRequestPointerLock) ? (e = wt(e)) ? (nn(e, r, t, n, 20, "mozpointerlockchange"), nn(e, r, t, n, 20, "webkitpointerlockchange"), nn(e, r, t, n, 20, "mspointerlockchange"), nn(e, r, t, n, 20, "pointerlockchange")) : -4 : -1
                },
                Hb: function(e, r, t, n, o) {
                    return on(e, r, t, n, 25, "touchcancel")
                },
                Jb: function(e, r, t, n, o) {
                    return on(e, r, t, n, 23, "touchend")
                },
                Ib: function(e, r, t, n, o) {
                    return on(e, r, t, n, 24, "touchmove")
                },
                Kb: function(e, r, t, n, o) {
                    return on(e, r, t, n, 22, "touchstart")
                },
                Lb: function(e, r, t, n, o) {
                    return (e = wt(e)) ? void 0 !== e.onwheel ? function(e, r, t, n, o, a, i) {
                        ht.wheelEvent || (ht.wheelEvent = $o(104));
                        var s = {
                            target: e,
                            allowsDeferredCalls: !0,
                            eventTypeString: a,
                            callbackfunc: n,
                            handlerFunc: function(t = event) {
                                var a = ht.wheelEvent;
                                rn(a, t, e), q[a + 72 >> 3] = t.deltaX, q[a + 80 >> 3] = t.deltaY, q[a + 88 >> 3] = t.deltaZ, N[a + 96 >> 2] = t.deltaMode, ke(n)(o, a, r) && t.preventDefault()
                            },
                            useCapture: t
                        };
                        return ht.registerOrRemoveHandler(s)
                    }(e, r, t, n, 9, "wheel") : -1 : -4
                },
                De: sn,
                Ce: function(e) {
                    zt.currentContext == e && (zt.currentContext = 0), zt.deleteContext(e)
                },
                W: function(e, r) {
                    var t = zt.getContext(e),
                        n = ge(r);
                    return n.startsWith("GL_") && (n = n.substr(3)), "ANGLE_instanced_arrays" == n && Rt(Bo), "OES_vertex_array_object" == n && Tt(Bo), "WEBGL_draw_buffers" == n && It(Bo), "WEBGL_draw_instanced_base_vertex_base_instance" == n && Nt(Bo), "WEBGL_multi_draw_instanced_base_vertex_base_instance" == n && Ot(Bo), "WEBGL_multi_draw" == n && Ut(Bo), !!t.GLctx.getExtension(n)
                },
                Ae: un,
                He: function(e) {
                    for (var r = e >> 2, t = 0; t < 14; ++t) N[r + t] = 0;
                    N[r + 0] = N[r + 1] = N[r + 3] = N[r + 4] = N[r + 8] = N[r + 10] = 1
                },
                X: function(e) {
                    return zt.makeContextCurrent(e) ? 0 : -5
                },
                lh: function(e, r) {
                    var t = 0;
                    return fn().forEach((function(n, o) {
                        var a = r + t;
                        O[e + 4 * o >> 2] = a,
                            function(e, r) {
                                for (var t = 0; t < e.length; ++t) M[r++ >> 0] = e.charCodeAt(t);
                                M[r >> 0] = 0
                            }(n, a), t += n.length + 1
                    })), 0
                },
                Mc: function(e, r) {
                    var t = fn();
                    O[e >> 2] = t.length;
                    var n = 0;
                    return t.forEach((function(e) {
                        n += e.length + 1
                    })), O[r >> 2] = n, 0
                },
                c: Fr,
                L: function(e) {
                    try {
                        var r = Ar.getStreamFromFD(e);
                        return Pr.close(r), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return e.errno
                    }
                },
                sc: function(e, r) {
                    try {
                        var t = Ar.getStreamFromFD(e),
                            n = t.tty ? 2 : Pr.isDir(t.mode) ? 3 : Pr.isLink(t.mode) ? 7 : 4;
                        return M[r >> 0] = n, T[r + 2 >> 1] = 0, z[r + 8 >> 3] = BigInt(0), z[r + 16 >> 3] = BigInt(0), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return e.errno
                    }
                },
                Qb: function(e, r, t, n) {
                    try {
                        var o = function(e, r, t, n) {
                            for (var o = 0, a = 0; a < t; a++) {
                                var i = O[r >> 2],
                                    s = O[r + 4 >> 2];
                                r += 8;
                                var u = Pr.read(e, M, i, s, n);
                                if (u < 0) return -1;
                                if (o += u, u < s) break;
                                void 0 !== n && (n += u)
                            }
                            return o
                        }(Ar.getStreamFromFD(e), r, t);
                        return O[n >> 2] = o, 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return e.errno
                    }
                },
                Le: function(e, r, t, n) {
                    try {
                        if (r = ft(r), isNaN(r)) return 61;
                        var o = Ar.getStreamFromFD(e);
                        return Pr.llseek(o, r, t), z[n >> 3] = BigInt(o.position), o.getdents && 0 === r && 0 === t && (o.getdents = null), 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return e.errno
                    }
                },
                Ma: function(e, r, t, n) {
                    try {
                        var o = function(e, r, t, n) {
                            for (var o = 0, a = 0; a < t; a++) {
                                var i = O[r >> 2],
                                    s = O[r + 4 >> 2];
                                r += 8;
                                var u = Pr.write(e, M, i, s, n);
                                if (u < 0) return -1;
                                o += u, void 0 !== n && (n += u)
                            }
                            return o
                        }(Ar.getStreamFromFD(e), r, t);
                        return O[n >> 2] = o, 0
                    } catch (e) {
                        if (void 0 === Pr || "ErrnoError" !== e.name) throw e;
                        return e.errno
                    }
                },
                bd: function(e, r, t, n) {
                    var o, a = 0,
                        i = 0,
                        s = 0,
                        u = 0,
                        c = 0,
                        f = 0;

                    function l(e, r, t, n, o, a) {
                        var i, s, u;
                        return s = 10 === e ? 28 : 16, o = 10 === e ? ot(o) : nt(o), H(!rt(i = $o(s), e, o, a)), u = $o(32), N[u + 4 >> 2] = e, N[u + 8 >> 2] = r, N[u + 12 >> 2] = t, O[u + 24 >> 2] = n, O[u + 20 >> 2] = i, N[u + 16 >> 2] = 10 === e ? 28 : 16, N[u + 28 >> 2] = 0, u
                    }
                    if (t && (s = N[t >> 2], u = N[t + 4 >> 2], c = N[t + 8 >> 2], f = N[t + 12 >> 2]), c && !f && (f = 2 === c ? 17 : 6), !c && f && (c = 17 === f ? 2 : 1), 0 === f && (f = 6), 0 === c && (c = 1), !e && !r) return -2;
                    if (-1088 & s) return -1;
                    if (0 !== t && 2 & N[t >> 2] && !e) return -1;
                    if (32 & s) return -2;
                    if (0 !== c && 1 !== c && 2 !== c) return -7;
                    if (0 !== u && 2 !== u && 10 !== u) return -6;
                    if (r && (r = ge(r), i = parseInt(r, 10), isNaN(i))) return 1024 & s ? -2 : -8;
                    if (!e) return 0 === u && (u = 2), 0 == (1 & s) && (a = 2 === u ? Ko(2130706433) : [0, 0, 0, 1]), o = l(u, c, f, null, a, i), O[n >> 2] = o, 0;
                    if (null !== (a = $r(e = ge(e))))
                        if (0 === u || 2 === u) u = 2;
                        else {
                            if (!(10 === u && 8 & s)) return -2;
                            a = [0, 0, Ko(65535), a], u = 10
                        }
                    else if (null !== (a = et(e))) {
                        if (0 !== u && 10 !== u) return -2;
                        u = 10
                    }
                    return null != a ? (o = l(u, c, f, e, a, i), O[n >> 2] = o, 0) : 4 & s ? -2 : (a = $r(e = tt.lookup_name(e)), 0 === u ? u = 2 : 10 === u && (a = [0, 0, Ko(65535), a]), o = l(u, c, f, null, a, i), O[n >> 2] = o, 0)
                },
                me: function(e, r, t) {
                    if (2 !== t) return Jr(5), null;
                    var n = nt(e = N[e >> 2]),
                        o = tt.lookup_addr(n);
                    return o && (n = o), ln(n)
                },
                ne: function(e) {
                    return ln(ge(e))
                },
                db: function(e, r, t, n, o, a, i) {
                    var s = at(e, r);
                    if (s.errno) return -6;
                    var u = s.port,
                        c = s.addr,
                        f = !1;
                    if (t && n) {
                        var l;
                        if (1 & i || !(l = tt.lookup_addr(c))) {
                            if (8 & i) return -2
                        } else c = l;
                        qe(c, t, n) + 1 >= n && (f = !0)
                    }
                    return o && a && qe(u = "" + u, o, a) + 1 >= a && (f = !0), f ? -12 : 0
                },
                Lg: function(e) {
                    Bo.activeTexture(e)
                },
                Ig: function(e, r) {
                    (e = zt.programs[e])[(r = zt.shaders[r]).shaderType] = r, Bo.attachShader(e, r)
                },
                cc: function(e, r) {
                    Bo.beginQuery(e, zt.queries[r])
                },
                da: function(e, r, t) {
                    Bo.bindAttribLocation(zt.programs[e], r, ge(t))
                },
                Fa: function(e, r) {
                    34962 == e ? Bo.currentArrayBufferBinding = r : 34963 == e && (Bo.currentElementArrayBufferBinding = r), 35051 == e ? Bo.currentPixelPackBufferBinding = r : 35052 == e && (Bo.currentPixelUnpackBufferBinding = r), Bo.bindBuffer(e, zt.buffers[r])
                },
                Ye: function(e, r, t) {
                    Bo.bindBufferBase(e, r, zt.buffers[t])
                },
                Ve: function(e, r, t, n, o) {
                    Bo.bindBufferRange(e, r, zt.buffers[t], n, o)
                },
                Eg: function(e, r) {
                    Bo.bindFramebuffer(e, zt.framebuffers[r])
                },
                Fg: function(e, r) {
                    Bo.bindRenderbuffer(e, zt.renderbuffers[r])
                },
                Qe: function(e, r) {
                    Bo.bindSampler(e, zt.samplers[r])
                },
                Gg: function(e, r) {
                    Bo.bindTexture(e, zt.textures[r])
                },
                pf: function(e) {
                    Bo.bindVertexArray(zt.vaos[e]);
                    var r = Bo.getParameter(34965);
                    Bo.currentElementArrayBufferBinding = r ? 0 | r.name : 0
                },
                wc: function(e) {
                    Bo.blendEquation(e)
                },
                xc: function(e, r) {
                    Bo.blendEquationSeparate(e, r)
                },
                yc: function(e, r, t, n) {
                    Bo.blendFuncSeparate(e, r, t, n)
                },
                ef: function(e, r, t, n, o, a, i, s, u, c) {
                    Bo.blitFramebuffer(e, r, t, n, o, a, i, s, u, c)
                },
                Cg: function(e, r, t, n) {
                    R.length <= 2147483648 ? t && r ? Bo.bufferData(e, R, n, t, r) : Bo.bufferData(e, r, n) : Bo.bufferData(e, t ? R.subarray(t, t + r) : r, n)
                },
                Dg: function(e, r, t, n) {
                    R.length <= 2147483648 ? t && Bo.bufferSubData(e, r, R, n, t) : Bo.bufferSubData(e, r, R.subarray(n, n + t))
                },
                Bg: function(e) {
                    return Bo.checkFramebufferStatus(e)
                },
                wg: function(e) {
                    Bo.clear(e)
                },
                Me: function(e, r, t, n) {
                    Bo.clearBufferfi(e, r, t, n)
                },
                Je: function(e, r, t) {
                    if (R.length <= 2147483648) Bo.clearBufferfv(e, r, U, t >> 2);
                    else {
                        var n = U.subarray(t >> 2, t + 16 >> 2);
                        Bo.clearBufferfv(e, r, n, 0)
                    }
                },
                Ie: function(e, r, t) {
                    if (R.length <= 2147483648) Bo.clearBufferuiv(e, r, O, t >> 2);
                    else {
                        var n = O.subarray(t >> 2, t + 16 >> 2);
                        Bo.clearBufferuiv(e, r, n, 0)
                    }
                },
                xg: function(e, r, t, n) {
                    Bo.clearColor(e, r, t, n)
                },
                yg: function(e) {
                    Bo.clearDepth(e)
                },
                Ag: function(e) {
                    Bo.clearStencil(e)
                },
                ta: function(e, r, t) {
                    return t = Number(t), Bo.clientWaitSync(zt.syncs[e], r, t)
                },
                Ea: function(e, r, t, n) {
                    Bo.colorMask(!!e, !!r, !!t, !!n)
                },
                vg: function(e) {
                    Bo.compileShader(zt.shaders[e])
                },
                tg: function(e, r, t, n, o, a, i, s) {
                    Bo.currentPixelUnpackBufferBinding || !i ? Bo.compressedTexImage2D(e, r, t, n, o, a, i, s) : R.length <= 2147483648 ? Bo.compressedTexImage2D(e, r, t, n, o, a, R, s, i) : Bo.compressedTexImage2D(e, r, t, n, o, a, s ? R.subarray(s, s + i) : null)
                },
                lf: function(e, r, t, n, o, a, i, s, u) {
                    Bo.currentPixelUnpackBufferBinding ? Bo.compressedTexImage3D(e, r, t, n, o, a, i, s, u) : R.length <= 2147483648 ? Bo.compressedTexImage3D(e, r, t, n, o, a, i, R, u, s) : Bo.compressedTexImage3D(e, r, t, n, o, a, i, u ? R.subarray(u, u + s) : null)
                },
                ug: function(e, r, t, n, o, a, i, s, u) {
                    Bo.currentPixelUnpackBufferBinding || !s ? Bo.compressedTexSubImage2D(e, r, t, n, o, a, i, s, u) : R.length <= 2147483648 ? Bo.compressedTexSubImage2D(e, r, t, n, o, a, i, R, u, s) : Bo.compressedTexSubImage2D(e, r, t, n, o, a, i, u ? R.subarray(u, u + s) : null)
                },
                of: function(e, r, t, n, o, a, i, s, u, c, f) {
                    Bo.currentPixelUnpackBufferBinding ? Bo.compressedTexSubImage3D(e, r, t, n, o, a, i, s, u, c, f) : R.length <= 2147483648 ? Bo.compressedTexSubImage3D(e, r, t, n, o, a, i, s, u, R, f, c) : Bo.compressedTexSubImage3D(e, r, t, n, o, a, i, s, u, f ? R.subarray(f, f + c) : null)
                },
                _e: function(e, r, t, n, o) {
                    Bo.copyBufferSubData(e, r, t, n, o)
                },
                sg: function(e, r, t, n, o, a, i, s) {
                    Bo.copyTexImage2D(e, r, t, n, o, a, i, s)
                },
                vc: function(e, r, t, n, o, a, i, s) {
                    Bo.copyTexSubImage2D(e, r, t, n, o, a, i, s)
                },
                rg: function() {
                    var e = zt.getNewId(zt.programs),
                        r = Bo.createProgram();
                    return r.name = e, r.maxUniformLength = r.maxAttributeLength = r.maxUniformBlockNameLength = 0, r.uniformIdCounter = 1, zt.programs[e] = r, e
                },
                pg: function(e) {
                    var r = zt.getNewId(zt.shaders);
                    return zt.shaders[r] = Bo.createShader(e), zt.shaders[r].shaderType = 1 & e ? "vs" : "fs", r
                },
                og: function(e) {
                    Bo.cullFace(e)
                },
                ng: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = N[r + 4 * t >> 2],
                            o = zt.buffers[n];
                        o && (Bo.deleteBuffer(o), o.name = 0, zt.buffers[n] = null, n == Bo.currentArrayBufferBinding && (Bo.currentArrayBufferBinding = 0), n == Bo.currentElementArrayBufferBinding && (Bo.currentElementArrayBufferBinding = 0), n == Bo.currentPixelPackBufferBinding && (Bo.currentPixelPackBufferBinding = 0), n == Bo.currentPixelUnpackBufferBinding && (Bo.currentPixelUnpackBufferBinding = 0))
                    }
                },
                mg: function(e, r) {
                    for (var t = 0; t < e; ++t) {
                        var n = N[r + 4 * t >> 2],
                            o = zt.framebuffers[n];
                        o && (Bo.deleteFramebuffer(o), o.name = 0, zt.framebuffers[n] = null)
                    }
                },
                lg: function(e) {
                    if (e) {
                        var r = zt.programs[e];
                        r ? (Bo.deleteProgram(r), r.name = 0, zt.programs[e] = null) : zt.recordError(1281)
                    }
                },
                bc: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = N[r + 4 * t >> 2],
                            o = zt.queries[n];
                        o && (Bo.deleteQuery(o), zt.queries[n] = null)
                    }
                },
                kg: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = N[r + 4 * t >> 2],
                            o = zt.renderbuffers[n];
                        o && (Bo.deleteRenderbuffer(o), o.name = 0, zt.renderbuffers[n] = null)
                    }
                },
                Pe: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = N[r + 4 * t >> 2],
                            o = zt.samplers[n];
                        o && (Bo.deleteSampler(o), o.name = 0, zt.samplers[n] = null)
                    }
                },
                jg: function(e) {
                    if (e) {
                        var r = zt.shaders[e];
                        r ? (Bo.deleteShader(r), zt.shaders[e] = null) : zt.recordError(1281)
                    }
                },
                Zb: function(e) {
                    if (e) {
                        var r = zt.syncs[e];
                        r ? (Bo.deleteSync(r), r.name = 0, zt.syncs[e] = null) : zt.recordError(1281)
                    }
                },
                ig: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = N[r + 4 * t >> 2],
                            o = zt.textures[n];
                        o && (Bo.deleteTexture(o), o.name = 0, zt.textures[n] = null)
                    }
                },
                rf: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = N[r + 4 * t >> 2];
                        Bo.deleteVertexArray(zt.vaos[n]), zt.vaos[n] = null
                    }
                },
                ca: function(e) {
                    Bo.depthFunc(e)
                },
                ba: function(e) {
                    Bo.depthMask(!!e)
                },
                hg: function(e, r) {
                    Bo.detachShader(zt.programs[e], zt.shaders[r])
                },
                gg: function(e) {
                    Bo.disable(e)
                },
                fg: function(e) {
                    zt.currentContext.clientBuffers[e].enabled = !1, Bo.disableVertexAttribArray(e)
                },
                cg: function(e, r, t) {
                    zt.preDrawHandleClientVertexAttribBindings(r + t), Bo.drawArrays(e, r, t), zt.postDrawHandleClientVertexAttribBindings()
                },
                af: function(e, r, t, n) {
                    Bo.drawArraysInstanced(e, r, t, n)
                },
                Ze: function(e, r) {
                    for (var t = dn[e], n = 0; n < e; n++) t[n] = N[r + 4 * n >> 2];
                    Bo.drawBuffers(t)
                },
                dg: function(e, r, t, n) {
                    var o;
                    if (!Bo.currentElementArrayBufferBinding) {
                        var a = zt.calcBufLength(1, t, 0, r);
                        o = zt.getTempIndexBuffer(a), Bo.bindBuffer(34963, o), Bo.bufferSubData(34963, 0, R.subarray(n, n + a)), n = 0
                    }
                    zt.preDrawHandleClientVertexAttribBindings(r), Bo.drawElements(e, r, t, n), zt.postDrawHandleClientVertexAttribBindings(r), Bo.currentElementArrayBufferBinding || Bo.bindBuffer(34963, null)
                },
                $e: function(e, r, t, n, o) {
                    Bo.drawElementsInstanced(e, r, t, n, o)
                },
                eg: function(e) {
                    Bo.enable(e)
                },
                bg: function(e) {
                    zt.currentContext.clientBuffers[e].enabled = !0, Bo.enableVertexAttribArray(e)
                },
                dc: function(e) {
                    Bo.endQuery(e)
                },
                Yb: function(e, r) {
                    var t = Bo.fenceSync(e, r);
                    if (t) {
                        var n = zt.getNewId(zt.syncs);
                        return t.name = n, zt.syncs[n] = t, n
                    }
                    return 0
                },
                _f: function() {
                    Bo.finish()
                },
                tc: function() {
                    Bo.flush()
                },
                df: function(e, r, t) {
                    if (r >>>= 0, t >>>= 0, !pn(e)) return zt.recordError(1280), void P("GL_INVALID_ENUM in glFlushMappedBufferRange");
                    var n = zt.mappedBuffers[mn(e)];
                    return n ? 16 & n.access ? r < 0 || t < 0 || r + t > n.length ? (zt.recordError(1281), void P("invalid range in glFlushMappedBufferRange")) : void Bo.bufferSubData(e, n.offset, R.subarray(n.mem + r, n.mem + r + t)) : (zt.recordError(1282), void P("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange")) : (zt.recordError(1282), void P("buffer was never mapped in glFlushMappedBufferRange"))
                },
                k: function(e, r, t, n) {
                    Bo.framebufferRenderbuffer(e, r, t, zt.renderbuffers[n])
                },
                i: function(e, r, t, n, o) {
                    Bo.framebufferTexture2D(e, r, t, zt.textures[n], o)
                },
                Z: function(e, r, t, n, o) {
                    Bo.framebufferTextureLayer(e, r, zt.textures[t], n, o)
                },
                aa: function(e) {
                    Bo.frontFace(e)
                },
                Zf: function(e, r) {
                    vn(e, r, "createBuffer", zt.buffers)
                },
                Vf: function(e, r) {
                    vn(e, r, "createFramebuffer", zt.framebuffers)
                },
                ac: function(e, r) {
                    vn(e, r, "createQuery", zt.queries)
                },
                Wf: function(e, r) {
                    vn(e, r, "createRenderbuffer", zt.renderbuffers)
                },
                Oe: function(e, r) {
                    vn(e, r, "createSampler", zt.samplers)
                },
                Yf: function(e, r) {
                    vn(e, r, "createTexture", zt.textures)
                },
                tf: function(e, r) {
                    vn(e, r, "createVertexArray", zt.vaos)
                },
                Xf: function(e) {
                    Bo.generateMipmap(e)
                },
                Sg: function(e, r, t, n, o, a, i) {
                    gn("getActiveAttrib", e, r, t, n, o, a, i)
                },
                Da: function(e, r, t, n, o, a, i) {
                    gn("getActiveUniform", e, r, t, n, o, a, i)
                },
                va: function(e, r, t, n, o) {
                    e = zt.programs[e];
                    var a = Bo.getActiveUniformBlockName(e, r);
                    if (a)
                        if (o && t > 0) {
                            var i = qe(a, o, t);
                            n && (N[n >> 2] = i)
                        } else n && (N[n >> 2] = 0)
                },
                y: function(e, r, t, n) {
                    if (n)
                        if (e = zt.programs[e], 35393 != t) {
                            var o = Bo.getActiveUniformBlockParameter(e, r, t);
                            if (null !== o)
                                if (35395 == t)
                                    for (var a = 0; a < o.length; a++) N[n + 4 * a >> 2] = o[a];
                                else N[n >> 2] = o
                        } else {
                            var i = Bo.getActiveUniformBlockName(e, r);
                            N[n >> 2] = i.length + 1
                        }
                    else zt.recordError(1281)
                },
                x: function(e, r, t, n, o) {
                    if (o)
                        if (r > 0 && 0 == t) zt.recordError(1281);
                        else {
                            e = zt.programs[e];
                            for (var a = [], i = 0; i < r; i++) a.push(N[t + 4 * i >> 2]);
                            var s = Bo.getActiveUniforms(e, a, n);
                            if (s) {
                                var u = s.length;
                                for (i = 0; i < u; i++) N[o + 4 * i >> 2] = s[i]
                            }
                        }
                    else zt.recordError(1281)
                },
                Rg: function(e, r) {
                    return Bo.getAttribLocation(zt.programs[e], ge(r))
                },
                Wb: function(e, r, t, n) {
                    n ? R.length <= 2147483648 ? t && Bo.getBufferSubData(e, r, R, n, t) : t && Bo.getBufferSubData(e, r, R.subarray(n, n + t)) : zt.recordError(1281)
                },
                Uf: function() {
                    var e = Bo.getError() || zt.lastError;
                    return zt.lastError = 0, e
                },
                Sf: function(e, r, t, n) {
                    var o = Bo.getFramebufferAttachmentParameter(e, r, t);
                    (o instanceof WebGLRenderbuffer || o instanceof WebGLTexture) && (o = 0 | o.name), N[n >> 2] = o
                },
                Kg: function(e, r, t) {
                    ! function(e, r, t, n) {
                        if (t) {
                            var o, a = Bo.getIndexedParameter(e, r);
                            switch (typeof a) {
                                case "boolean":
                                    o = a ? 1 : 0;
                                    break;
                                case "number":
                                    o = a;
                                    break;
                                case "object":
                                    if (null === a) switch (e) {
                                        case 35983:
                                        case 35368:
                                            o = 0;
                                            break;
                                        default:
                                            return void zt.recordError(1280)
                                    } else {
                                        if (!(a instanceof WebGLBuffer)) return void zt.recordError(1280);
                                        o = 0 | a.name
                                    }
                                    break;
                                default:
                                    return void zt.recordError(1280)
                            }
                            switch (n) {
                                case 1:
                                    hn(t, o);
                                    break;
                                case 0:
                                    N[t >> 2] = o;
                                    break;
                                case 2:
                                    U[t >> 2] = o;
                                    break;
                                case 4:
                                    M[t >> 0] = o ? 1 : 0;
                                    break;
                                default:
                                    throw "internal emscriptenWebGLGetIndexed() error, bad type: " + n
                            }
                        } else zt.recordError(1281)
                    }(e, r, t, 0)
                },
                Ga: function(e, r) {
                    ! function(e, r, t) {
                        if (r) {
                            var n = void 0;
                            switch (e) {
                                case 36346:
                                    n = 1;
                                    break;
                                case 36344:
                                    return void(0 != t && 1 != t && zt.recordError(1280));
                                case 34814:
                                case 36345:
                                    n = 0;
                                    break;
                                case 34466:
                                    var o = Bo.getParameter(34467);
                                    n = o ? o.length : 0;
                                    break;
                                case 33390:
                                    n = 1048576;
                                    break;
                                case 33309:
                                    if (zt.currentContext.version < 2) return void zt.recordError(1282);
                                    n = 2 * (Bo.getSupportedExtensions() || []).length;
                                    break;
                                case 33307:
                                case 33308:
                                    if (zt.currentContext.version < 2) return void zt.recordError(1280);
                                    n = 33307 == e ? 3 : 0
                            }
                            if (void 0 === n) {
                                var a = Bo.getParameter(e);
                                switch (typeof a) {
                                    case "number":
                                        n = a;
                                        break;
                                    case "boolean":
                                        n = a ? 1 : 0;
                                        break;
                                    case "string":
                                        return void zt.recordError(1280);
                                    case "object":
                                        if (null === a) switch (e) {
                                            case 34964:
                                            case 35725:
                                            case 34965:
                                            case 36006:
                                            case 36007:
                                            case 32873:
                                            case 34229:
                                            case 36662:
                                            case 36663:
                                            case 35053:
                                            case 35055:
                                            case 36010:
                                            case 35097:
                                            case 35869:
                                            case 32874:
                                            case 36389:
                                            case 35983:
                                            case 35368:
                                            case 34068:
                                                n = 0;
                                                break;
                                            default:
                                                return void zt.recordError(1280)
                                        } else {
                                            if (a instanceof Float32Array || a instanceof Uint32Array || a instanceof Int32Array || a instanceof Array) {
                                                for (var i = 0; i < a.length; ++i) switch (t) {
                                                    case 0:
                                                        N[r + 4 * i >> 2] = a[i];
                                                        break;
                                                    case 2:
                                                        U[r + 4 * i >> 2] = a[i];
                                                        break;
                                                    case 4:
                                                        M[r + i >> 0] = a[i] ? 1 : 0
                                                }
                                                return
                                            }
                                            try {
                                                n = 0 | a.name
                                            } catch (r) {
                                                return zt.recordError(1280), void P("GL_INVALID_ENUM in glGet" + t + "v: Unknown object returned from WebGL getParameter(" + e + ")! (error: " + r + ")")
                                            }
                                        }
                                        break;
                                    default:
                                        return zt.recordError(1280), void P("GL_INVALID_ENUM in glGet" + t + "v: Native code calling glGet" + t + "v(" + e + ") and it returns " + a + " of type " + typeof a + "!")
                                }
                            }
                            switch (t) {
                                case 1:
                                    hn(r, n);
                                    break;
                                case 0:
                                    N[r >> 2] = n;
                                    break;
                                case 2:
                                    U[r >> 2] = n;
                                    break;
                                case 4:
                                    M[r >> 0] = n ? 1 : 0
                            }
                        } else zt.recordError(1281)
                    }(e, r, 0)
                },
                Se: function(e, r, t, n, o) {
                    if (n < 0) zt.recordError(1281);
                    else if (o) {
                        var a = Bo.getInternalformatParameter(e, r, t);
                        if (null !== a)
                            for (var i = 0; i < a.length && i < n; ++i) N[o + 4 * i >> 2] = a[i]
                    } else zt.recordError(1281)
                },
                _b: function(e, r, t, n, o) {
                    zt.recordError(1282)
                },
                Ng: function(e, r, t, n) {
                    var o = Bo.getProgramInfoLog(zt.programs[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? qe(o, n, r) : 0;
                    t && (N[t >> 2] = a)
                },
                o: function(e, r, t) {
                    if (t)
                        if (e >= zt.counter) zt.recordError(1281);
                        else if (e = zt.programs[e], 35716 == r) {
                        var n = Bo.getProgramInfoLog(e);
                        null === n && (n = "(unknown error)"), N[t >> 2] = n.length + 1
                    } else if (35719 == r) {
                        if (!e.maxUniformLength)
                            for (var o = 0; o < Bo.getProgramParameter(e, 35718); ++o) e.maxUniformLength = Math.max(e.maxUniformLength, Bo.getActiveUniform(e, o).name.length + 1);
                        N[t >> 2] = e.maxUniformLength
                    } else if (35722 == r) {
                        if (!e.maxAttributeLength)
                            for (o = 0; o < Bo.getProgramParameter(e, 35721); ++o) e.maxAttributeLength = Math.max(e.maxAttributeLength, Bo.getActiveAttrib(e, o).name.length + 1);
                        N[t >> 2] = e.maxAttributeLength
                    } else if (35381 == r) {
                        if (!e.maxUniformBlockNameLength)
                            for (o = 0; o < Bo.getProgramParameter(e, 35382); ++o) e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, Bo.getActiveUniformBlockName(e, o).length + 1);
                        N[t >> 2] = e.maxUniformBlockNameLength
                    } else N[t >> 2] = Bo.getProgramParameter(e, r);
                    else zt.recordError(1281)
                },
                ec: function(e, r, t) {
                    if (t) {
                        var n, o = zt.queries[e],
                            a = Bo.getQueryParameter(o, r);
                        n = "boolean" == typeof a ? a ? 1 : 0 : a, N[t >> 2] = n
                    } else zt.recordError(1281)
                },
                uf: function(e, r, t) {
                    t ? N[t >> 2] = Bo.getQuery(e, r) : zt.recordError(1281)
                },
                ag: function(e, r, t) {
                    t ? N[t >> 2] = Bo.getRenderbufferParameter(e, r) : zt.recordError(1281)
                },
                Qf: function(e, r, t, n) {
                    var o = Bo.getShaderInfoLog(zt.shaders[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? qe(o, n, r) : 0;
                    t && (N[t >> 2] = a)
                },
                Of: function(e, r, t, n) {
                    var o = Bo.getShaderPrecisionFormat(e, r);
                    N[t >> 2] = o.rangeMin, N[t + 4 >> 2] = o.rangeMax, N[n >> 2] = o.precision
                },
                Rf: function(e, r, t, n) {
                    var o = Bo.getShaderSource(zt.shaders[e]);
                    if (o) {
                        var a = r > 0 && n ? qe(o, n, r) : 0;
                        t && (N[t >> 2] = a)
                    }
                },
                Mg: function(e, r, t) {
                    if (t)
                        if (35716 == r) {
                            var n = Bo.getShaderInfoLog(zt.shaders[e]);
                            null === n && (n = "(unknown error)");
                            var o = n ? n.length + 1 : 0;
                            N[t >> 2] = o
                        } else if (35720 == r) {
                        var a = Bo.getShaderSource(zt.shaders[e]),
                            i = a ? a.length + 1 : 0;
                        N[t >> 2] = i
                    } else N[t >> 2] = Bo.getShaderParameter(zt.shaders[e], r);
                    else zt.recordError(1281)
                },
                Pf: function(e) {
                    var r = zt.stringCache[e];
                    if (!r) {
                        switch (e) {
                            case 7939:
                                var t = Bo.getSupportedExtensions() || [];
                                r = We((t = t.concat(t.map((function(e) {
                                    return "GL_" + e
                                })))).join(" "));
                                break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                                var n = Bo.getParameter(e);
                                n || zt.recordError(1280), r = n && We(n);
                                break;
                            case 7938:
                                var o = Bo.getParameter(7938);
                                r = We(o = zt.currentContext.version >= 2 ? "OpenGL ES 3.0 (" + o + ")" : "OpenGL ES 2.0 (" + o + ")");
                                break;
                            case 35724:
                                var a = Bo.getParameter(35724),
                                    i = a.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                                null !== i && (3 == i[1].length && (i[1] = i[1] + "0"), a = "OpenGL ES GLSL ES " + i[1] + " (" + a + ")"), r = We(a);
                                break;
                            default:
                                zt.recordError(1280)
                        }
                        zt.stringCache[e] = r
                    }
                    return r
                },
                hf: function(e, r) {
                    if (zt.currentContext.version < 2) return zt.recordError(1282), 0;
                    var t = zt.stringiCache[e];
                    if (t) return r < 0 || r >= t.length ? (zt.recordError(1281), 0) : t[r];
                    if (7939 === e) {
                        var n = Bo.getSupportedExtensions() || [];
                        return n = (n = n.concat(n.map((function(e) {
                            return "GL_" + e
                        })))).map((function(e) {
                            return We(e)
                        })), t = zt.stringiCache[e] = n, r < 0 || r >= t.length ? (zt.recordError(1281), 0) : t[r]
                    }
                    return zt.recordError(1280), 0
                },
                Nf: function(e, r, t) {
                    t ? N[t >> 2] = Bo.getTexParameter(e, r) : zt.recordError(1281)
                },
                Ue: function(e, r) {
                    return Bo.getUniformBlockIndex(zt.programs[e], ge(r))
                },
                ua: function(e, r, t, n) {
                    if (n)
                        if (r > 0 && (0 == t || 0 == n)) zt.recordError(1281);
                        else {
                            e = zt.programs[e];
                            for (var o = [], a = 0; a < r; a++) o.push(ge(N[t + 4 * a >> 2]));
                            var i = Bo.getUniformIndices(e, o);
                            if (i) {
                                var s = i.length;
                                for (a = 0; a < s; a++) N[n + 4 * a >> 2] = i[a]
                            }
                        }
                    else zt.recordError(1281)
                },
                G: function(e, r) {
                    if (r = ge(r), e = zt.programs[e]) {
                        bn(e);
                        var t = e.uniformLocsById,
                            n = 0,
                            o = r,
                            a = yn(r);
                        a > 0 && (n = Qr(r.slice(a + 1)) >>> 0, o = r.slice(0, a));
                        var i = e.uniformSizeAndIdsByName[o];
                        if (i && n < i[0] && (t[n += i[1]] = t[n] || Bo.getUniformLocation(e, r))) return n
                    } else zt.recordError(1281);
                    return -1
                },
                rc: function(e, r, t) {
                    ! function(e, r, t, n) {
                        if (t) {
                            bn(e = zt.programs[e]);
                            var o = Bo.getUniform(e, wn(r));
                            if ("number" == typeof o || "boolean" == typeof o) switch (n) {
                                case 0:
                                    N[t >> 2] = o;
                                    break;
                                case 2:
                                    U[t >> 2] = o
                            } else
                                for (var a = 0; a < o.length; a++) switch (n) {
                                    case 0:
                                        N[t + 4 * a >> 2] = o[a];
                                        break;
                                    case 2:
                                        U[t + 4 * a >> 2] = o[a]
                                }
                        } else zt.recordError(1281)
                    }(e, r, t, 0)
                },
                Qg: function(e, r, t) {
                    ! function(e, r, t, n) {
                        if (t) {
                            zt.currentContext.clientBuffers[e].enabled && P("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
                            var o = Bo.getVertexAttrib(e, r);
                            if (34975 == r) N[t >> 2] = o && o.name;
                            else if ("number" == typeof o || "boolean" == typeof o) switch (n) {
                                case 0:
                                    N[t >> 2] = o;
                                    break;
                                case 2:
                                    U[t >> 2] = o;
                                    break;
                                case 5:
                                    N[t >> 2] = Math.fround(o)
                            } else
                                for (var a = 0; a < o.length; a++) switch (n) {
                                    case 0:
                                        N[t + 4 * a >> 2] = o[a];
                                        break;
                                    case 2:
                                        U[t + 4 * a >> 2] = o[a];
                                        break;
                                    case 5:
                                        N[t + 4 * a >> 2] = Math.fround(o[a])
                                }
                        } else zt.recordError(1281)
                    }(e, r, t, 5)
                },
                xa: function(e, r, t) {
                    for (var n = dn[r], o = 0; o < r; o++) n[o] = N[t + 4 * o >> 2];
                    Bo.invalidateFramebuffer(e, n)
                },
                Jg: function(e) {
                    return Bo.isEnabled(e)
                },
                qf: function(e) {
                    var r = zt.vaos[e];
                    return r ? Bo.isVertexArray(r) : 0
                },
                Mf: function(e) {
                    function r(e, r) {
                        Object.keys(r).forEach((function(t) {
                            e[t] = r[t]
                        }))
                    }
                    e = zt.programs[e], Bo.linkProgram(e), e.uniformLocsById = 0, e.uniformSizeAndIdsByName = {}, [e.vs, e.fs].forEach((function(r) {
                        Object.keys(r.explicitUniformLocations).forEach((function(t) {
                            var n = r.explicitUniformLocations[t];
                            e.uniformSizeAndIdsByName[t] = [1, n], e.uniformIdCounter = Math.max(e.uniformIdCounter, n + 1)
                        }))
                    })), e.explicitUniformBindings = {}, e.explicitSamplerBindings = {}, [e.vs, e.fs].forEach((function(t) {
                        r(e.explicitUniformBindings, t.explicitUniformBindings), r(e.explicitSamplerBindings, t.explicitSamplerBindings)
                    })), e.explicitProgramBindingsApplied = 0
                },
                bf: function(e, r, t, n) {
                    if (0 != (33 & n)) return P("glMapBufferRange access does not support MAP_READ or MAP_UNSYNCHRONIZED"), 0;
                    if (0 == (2 & n)) return P("glMapBufferRange access must include MAP_WRITE"), 0;
                    if (0 == (12 & n)) return P("glMapBufferRange access must include INVALIDATE_BUFFER or INVALIDATE_RANGE"), 0;
                    if (!pn(e)) return zt.recordError(1280), P("GL_INVALID_ENUM in glMapBufferRange"), 0;
                    var o = $o(t);
                    return o ? (zt.mappedBuffers[mn(e)] = {
                        offset: r,
                        length: t,
                        mem: o,
                        access: n
                    }, o) : 0
                },
                Ca: function(e, r) {
                    3317 == e && (zt.unpackAlignment = r), Bo.pixelStorei(e, r)
                },
                qc: function(e, r) {
                    Bo.polygonOffset(e, r)
                },
                $b: function(e, r, t, n) {
                    zt.recordError(1280)
                },
                Ne: function(e, r, t) {
                    zt.recordError(1280)
                },
                Xe: function(e) {
                    Bo.readBuffer(e)
                },
                s: function(e, r, t, n, o, a, i) {
                    if (Bo.currentPixelPackBufferBinding) Bo.readPixels(e, r, t, n, o, a, i);
                    else if (R.length <= 2147483648) {
                        var s = kn(a);
                        Bo.readPixels(e, r, t, n, o, a, s, i >> xn(s))
                    } else {
                        var u = Sn(a, o, t, n, i);
                        if (!u) return void zt.recordError(1280);
                        Bo.readPixels(e, r, t, n, o, a, u)
                    }
                },
                Kf: function(e, r, t, n) {
                    Bo.renderbufferStorage(e, r, t, n)
                },
                ff: function(e, r, t, n, o) {
                    Bo.renderbufferStorageMultisample(e, r, t, n, o)
                },
                Re: function(e, r, t) {
                    Bo.samplerParameteri(zt.samplers[e], r, t)
                },
                Ba: function(e, r, t, n) {
                    Bo.scissor(e, r, t, n)
                },
                If: function(e, r, t, n) {
                    var o = zt.getSource(e, r, t, n);
                    o = function(e, r = {}) {
                        var t = 0,
                            n = e.length,
                            o = "",
                            a = [1];

                        function i(e, r) {
                            return !(e.charCodeAt(r) > 32)
                        }

                        function s(e, r) {
                            for (; !i(e, r);) ++r;
                            return r
                        }

                        function u(e, r) {
                            var t = e.charCodeAt(r);
                            return t > 32 ? t < 48 ? 1 : t < 58 ? 2 : t < 65 ? 1 : t < 91 || 95 == t ? 3 : t < 97 ? 1 : t < 123 ? 3 : 1 : t < 33 ? 0 : 4
                        }

                        function c(e, r) {
                            for (var t = [], n = e.length, o = 0; o <= n; ++o) {
                                var a = u(e, o);
                                if (2 == a || 3 == a)
                                    for (var i = o + 1; i <= n; ++i) {
                                        var s = u(e, i);
                                        if (s != a && (2 != s || 3 != a)) {
                                            t.push(e.substring(o, i)), o = i - 1;
                                            break
                                        }
                                    } else if (1 == a) {
                                        var c = e.substr(o, 2);
                                        ["<=", ">=", "==", "!=", "&&", "||"].includes(c) ? (t.push(c), ++o) : t.push(e[o])
                                    }
                            }
                            return t
                        }

                        function f(e, t, n) {
                            void 0 === n && (n = e.length), e.length;
                            for (var o = "", a = t; a < n; ++a)
                                if (3 == u(e, a))
                                    for (var c = a + 1; c <= n; ++c) {
                                        var l = u(e, c);
                                        if (2 != l && 3 != l) {
                                            var d = e.substring(a, c),
                                                m = r[d];
                                            if (m) {
                                                var p = e.substring(t, a);
                                                if (m.length) {
                                                    for (; i(e, c);) ++c;
                                                    if ("(" == e[c]) {
                                                        var v = _n(e, c);
                                                        p += m(e.substring(c + 1, v).split(",")) + e.substring(v + 1, n)
                                                    } else {
                                                        var g = s(e, c);
                                                        p += m([e.substring(c, g)]) + e.substring(g, n)
                                                    }
                                                } else p += m() + e.substring(c, n);
                                                return f(p, 0)
                                            }
                                            o += d, a = c - 1;
                                            break
                                        }
                                    } else o += e[a];
                            return o
                        }

                        function l(e) {
                            for (; e.length > 1 || "function" != typeof e[0];) e = function(e) {
                                var r, t, n, o = -2;
                                for (n = 0; n < e.length; ++n)(t = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(e[n])) > o && (r = n, o = t);
                                if (13 == o && (n = _n(e, r))) return e.splice(r, n + 1 - r, l(e.slice(r + 1, n))), e;
                                if (4 == o) {
                                    r = e.lastIndexOf("!");
                                    var a = l(e.slice(r + 1, r + 2));
                                    return e.splice(r, 2, (function() {
                                        return !a()
                                    })), e
                                }
                                if (o >= 0) {
                                    var i = l(e.slice(0, r)),
                                        s = l(e.slice(r + 1));
                                    switch (e[r]) {
                                        case "&&":
                                            return [function() {
                                                return i() && s()
                                            }];
                                        case "||":
                                            return [function() {
                                                return i() || s()
                                            }];
                                        case "==":
                                            return [function() {
                                                return i() == s()
                                            }];
                                        case "!=":
                                            return [function() {
                                                return i() != s()
                                            }];
                                        case "<":
                                            return [function() {
                                                return i() < s()
                                            }];
                                        case "<=":
                                            return [function() {
                                                return i() <= s()
                                            }];
                                        case ">":
                                            return [function() {
                                                return i() > s()
                                            }];
                                        case ">=":
                                            return [function() {
                                                return i() >= s()
                                            }];
                                        case "+":
                                            return [function() {
                                                return i() + s()
                                            }];
                                        case "-":
                                            return [function() {
                                                return i() - s()
                                            }];
                                        case "*":
                                            return [function() {
                                                return i() * s()
                                            }];
                                        case "/":
                                            return [function() {
                                                return Math.floor(i() / s())
                                            }]
                                    }
                                }
                                var u = Qr(e[r]);
                                return [function() {
                                    return u
                                }]
                            }(e);
                            return e[0]
                        }
                        for (r.defined = e => r[e[0].trim()] ? 1 : 0; t < n; ++t) {
                            var d = t;
                            (t = e.indexOf("\n", t)) < 0 && (t = n);
                            for (var m = d; m < t && i(e, m); ++m);
                            var p = a[a.length - 1];
                            if ("#" == e[m]) {
                                var v = s(e, m),
                                    g = e.substring(m + 1, v),
                                    h = e.substring(v, t).trim();
                                switch (g) {
                                    case "if":
                                        var y = l(c(f(h, 0)))();
                                        a.push(!!y * a[a.length - 1]);
                                        break;
                                    case "ifdef":
                                        a.push(!!r[h] * a[a.length - 1]);
                                        break;
                                    case "ifndef":
                                        a.push(!r[h] * a[a.length - 1]);
                                        break;
                                    case "else":
                                        a[a.length - 1] = (1 - a[a.length - 1]) * a[a.length - 2];
                                        break;
                                    case "endif":
                                        a.pop();
                                        break;
                                    case "define":
                                        if (p) {
                                            var b = h.indexOf("("),
                                                w = s(h, 0);
                                            if (w < b && (b = 0), b > 0) {
                                                var E = h.indexOf(")", b);
                                                let e = h.substring(b + 1, E).split(",").map((e => e.trim())),
                                                    t = c(h.substring(E + 1).trim());
                                                r[h.substring(0, b)] = r => {
                                                    var n = "";
                                                    return t.forEach((t => {
                                                        var o = e.indexOf(t);
                                                        n += o >= 0 ? r[o] : t
                                                    })), n
                                                }
                                            } else {
                                                let e = f(h.substring(w + 1).trim(), 0);
                                                r[h.substring(0, w)] = () => e
                                            }
                                        }
                                        break;
                                    case "undef":
                                        p && delete r[h];
                                        break;
                                    default:
                                        o += f(e, d, t) + "\n"
                                }
                            } else p && (o += f(e, d, t) + "\n")
                        }
                        return o
                    }(function(e) {
                        for (var r, t, n = 0, o = "", a = e.length; n < a; ++n)
                            if ("/" == (r = e[n]))
                                if ("/" == (t = e[n + 1]))
                                    for (; n < a && "\n" != e[n + 1];) ++n;
                                else if ("*" == t)
                            for (; n < a && ("*" != e[n - 1] || "/" != e[n]);) ++n;
                        else o += r;
                        else o += r;
                        return o
                    }(o), {
                        GL_FRAGMENT_PRECISION_HIGH: () => 1,
                        GL_ES: () => 1,
                        __VERSION__: () => o.includes("#version 300") ? 300 : 100
                    });
                    for (var a, i = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g, s = {}; a = i.exec(o);)
                        if (s[a[5]] = Qr(a[1]), !(s[a[5]] >= 0 && s[a[5]] < 1048576)) return P('Specified an out of range layout(location=x) directive "' + s[a[5]] + '"! (' + a[0] + ")"), void zt.recordError(1281);
                    o = o.replace(i, "$2"), zt.shaders[e].explicitUniformLocations = s;
                    for (var u, c = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g, f = {}, l = {}; u = c.exec(o);) {
                        for (var d = 1, m = u.index; m < o.length && ";" != o[m]; ++m) {
                            if ("[" == o[m]) {
                                d = Qr(o.slice(m + 1));
                                break
                            }
                            "{" == o[m] && (m = _n(o, m, "{", "}") - 1)
                        }
                        var p = Qr(u[1]),
                            v = 34930;
                        u[3] && -1 != u[2].indexOf("sampler") ? f[u[3]] = [p, d] : (v = 35374, l[u[2]] = [p, d]);
                        var g = Bo.getParameter(v);
                        if (!(p >= 0 && p + d <= g)) return P('Specified an out of range layout(binding=x) directive "' + p + '"! (' + u[0] + "). Valid range is [0, " + g + "-1]"), void zt.recordError(1281)
                    }
                    o = (o = (o = o.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "")).replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)")).replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)"), zt.shaders[e].explicitSamplerBindings = f, zt.shaders[e].explicitUniformBindings = l, Bo.shaderSource(zt.shaders[e], o)
                },
                Jf: function(e, r, t, n) {
                    Bo.stencilFuncSeparate(e, r, t, n)
                },
                Gf: function(e) {
                    Bo.stencilMask(e)
                },
                Hf: function(e, r, t, n) {
                    Bo.stencilOpSeparate(e, r, t, n)
                },
                Ef: function(e, r, t, n, o, a, i, s, u) {
                    if (Bo.currentPixelUnpackBufferBinding) Bo.texImage2D(e, r, t, n, o, a, i, s, u);
                    else if (u)
                        if (R.length <= 2147483648) {
                            var c = kn(s);
                            Bo.texImage2D(e, r, t, n, o, a, i, s, c, u >> xn(c))
                        } else Bo.texImage2D(e, r, t, n, o, a, i, s, Sn(s, i, n, o, u));
                    else Bo.texImage2D(e, r, t, n, o, a, i, s, null)
                },
                mf: function(e, r, t, n, o, a, i, s, u, c) {
                    if (Bo.currentPixelUnpackBufferBinding) Bo.texImage3D(e, r, t, n, o, a, i, s, u, c);
                    else if (c)
                        if (R.length <= 2147483648) {
                            var f = kn(u);
                            Bo.texImage3D(e, r, t, n, o, a, i, s, u, f, c >> xn(f))
                        } else Bo.texImage3D(e, r, t, n, o, a, i, s, u, Cn(u, s, n, o, a, c));
                    else Bo.texImage3D(e, r, t, n, o, a, i, s, u, null)
                },
                Ff: function(e, r, t) {
                    Bo.texParameterf(e, r, t)
                },
                Aa: function(e, r, t) {
                    Bo.texParameteri(e, r, t)
                },
                Cf: function(e, r, t) {
                    var n = N[t >> 2];
                    Bo.texParameteri(e, r, n)
                },
                jf: function(e, r, t, n, o) {
                    Bo.texStorage2D(e, r, t, n, o)
                },
                kf: function(e, r, t, n, o, a) {
                    Bo.texStorage3D(e, r, t, n, o, a)
                },
                Bf: function(e, r, t, n, o, a, i, s, u) {
                    if (Bo.currentPixelUnpackBufferBinding) Bo.texSubImage2D(e, r, t, n, o, a, i, s, u);
                    else if (u)
                        if (R.length <= 2147483648) {
                            var c = kn(s);
                            Bo.texSubImage2D(e, r, t, n, o, a, i, s, c, u >> xn(c))
                        } else Bo.texSubImage2D(e, r, t, n, o, a, i, s, Sn(s, i, o, a, u));
                    else Bo.texSubImage2D(e, r, t, n, o, a, i, s, null)
                },
                nf: function(e, r, t, n, o, a, i, s, u, c, f) {
                    if (Bo.currentPixelUnpackBufferBinding) Bo.texSubImage3D(e, r, t, n, o, a, i, s, u, c, f);
                    else if (f)
                        if (R.length <= 2147483648) {
                            var l = kn(c);
                            Bo.texSubImage3D(e, r, t, n, o, a, i, s, u, c, l, f >> xn(l))
                        } else Bo.texSubImage3D(e, r, t, n, o, a, i, s, u, c, Cn(c, u, a, i, s, f));
                    else Bo.texSubImage3D(e, r, t, n, o, a, i, s, u, c, null)
                },
                fc: function(e, r, t) {
                    if (r <= 288)
                        for (var n = Ln[r - 1], o = 0; o < r; ++o) n[o] = U[t + 4 * o >> 2];
                    else n = U.subarray(t >> 2, t + 4 * r >> 2);
                    Bo.uniform1fv(wn(e), n)
                },
                _: function(e, r) {
                    Bo.uniform1i(wn(e), r)
                },
                gc: function(e, r, t) {
                    if (r <= 288)
                        for (var n = Bn[r - 1], o = 0; o < r; ++o) n[o] = N[t + 4 * o >> 2];
                    else n = N.subarray(t >> 2, t + 4 * r >> 2);
                    Bo.uniform1iv(wn(e), n)
                },
                hc: function(e, r, t) {
                    if (r <= 288)
                        for (var n = Pn[r - 1], o = 0; o < r; ++o) n[o] = O[t + 4 * o >> 2];
                    else n = O.subarray(t >> 2, t + 4 * r >> 2);
                    Bo.uniform1uiv(wn(e), n)
                },
                ic: function(e, r, t) {
                    if (r <= 144)
                        for (var n = Ln[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = U[t + 4 * o >> 2], n[o + 1] = U[t + (4 * o + 4) >> 2];
                    else n = U.subarray(t >> 2, t + 8 * r >> 2);
                    Bo.uniform2fv(wn(e), n)
                },
                jc: function(e, r, t) {
                    if (r <= 144)
                        for (var n = Bn[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = N[t + 4 * o >> 2], n[o + 1] = N[t + (4 * o + 4) >> 2];
                    else n = N.subarray(t >> 2, t + 8 * r >> 2);
                    Bo.uniform2iv(wn(e), n)
                },
                kc: function(e, r, t) {
                    if (r <= 144)
                        for (var n = Pn[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = O[t + 4 * o >> 2], n[o + 1] = O[t + (4 * o + 4) >> 2];
                    else n = O.subarray(t >> 2, t + 8 * r >> 2);
                    Bo.uniform2uiv(wn(e), n)
                },
                za: function(e, r, t) {
                    if (r <= 96)
                        for (var n = Ln[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = U[t + 4 * o >> 2], n[o + 1] = U[t + (4 * o + 4) >> 2], n[o + 2] = U[t + (4 * o + 8) >> 2];
                    else n = U.subarray(t >> 2, t + 12 * r >> 2);
                    Bo.uniform3fv(wn(e), n)
                },
                lc: function(e, r, t) {
                    if (r <= 96)
                        for (var n = Bn[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = N[t + 4 * o >> 2], n[o + 1] = N[t + (4 * o + 4) >> 2], n[o + 2] = N[t + (4 * o + 8) >> 2];
                    else n = N.subarray(t >> 2, t + 12 * r >> 2);
                    Bo.uniform3iv(wn(e), n)
                },
                mc: function(e, r, t) {
                    if (r <= 96)
                        for (var n = Pn[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = O[t + 4 * o >> 2], n[o + 1] = O[t + (4 * o + 4) >> 2], n[o + 2] = O[t + (4 * o + 8) >> 2];
                    else n = O.subarray(t >> 2, t + 12 * r >> 2);
                    Bo.uniform3uiv(wn(e), n)
                },
                z: function(e, r, t) {
                    if (r <= 72) {
                        var n = Ln[4 * r - 1],
                            o = U;
                        t >>= 2;
                        for (var a = 0; a < 4 * r; a += 4) n[a] = o[t++], n[a + 1] = o[t++], n[a + 2] = o[t++], n[a + 3] = o[t++]
                    } else n = U.subarray(t >> 2, t + 16 * r >> 2);
                    Bo.uniform4fv(wn(e), n)
                },
                nc: function(e, r, t) {
                    if (r <= 72)
                        for (var n = Bn[4 * r - 1], o = 0; o < 4 * r; o += 4) n[o] = N[t + 4 * o >> 2], n[o + 1] = N[t + (4 * o + 4) >> 2], n[o + 2] = N[t + (4 * o + 8) >> 2], n[o + 3] = N[t + (4 * o + 12) >> 2];
                    else n = N.subarray(t >> 2, t + 16 * r >> 2);
                    Bo.uniform4iv(wn(e), n)
                },
                oc: function(e, r, t) {
                    if (r <= 72)
                        for (var n = Pn[4 * r - 1], o = 0; o < 4 * r; o += 4) n[o] = O[t + 4 * o >> 2], n[o + 1] = O[t + (4 * o + 4) >> 2], n[o + 2] = O[t + (4 * o + 8) >> 2], n[o + 3] = O[t + (4 * o + 12) >> 2];
                    else n = O.subarray(t >> 2, t + 16 * r >> 2);
                    Bo.uniform4uiv(wn(e), n)
                },
                wa: function(e, r, t) {
                    e = zt.programs[e], Bo.uniformBlockBinding(e, r, t)
                },
                pc: function(e, r, t, n) {
                    if (r <= 32)
                        for (var o = Ln[9 * r - 1], a = 0; a < 9 * r; a += 9) o[a] = U[n + 4 * a >> 2], o[a + 1] = U[n + (4 * a + 4) >> 2], o[a + 2] = U[n + (4 * a + 8) >> 2], o[a + 3] = U[n + (4 * a + 12) >> 2], o[a + 4] = U[n + (4 * a + 16) >> 2], o[a + 5] = U[n + (4 * a + 20) >> 2], o[a + 6] = U[n + (4 * a + 24) >> 2], o[a + 7] = U[n + (4 * a + 28) >> 2], o[a + 8] = U[n + (4 * a + 32) >> 2];
                    else o = U.subarray(n >> 2, n + 36 * r >> 2);
                    Bo.uniformMatrix3fv(wn(e), !!t, o)
                },
                $: function(e, r, t, n) {
                    if (r <= 18) {
                        var o = Ln[16 * r - 1],
                            a = U;
                        n >>= 2;
                        for (var i = 0; i < 16 * r; i += 16) o[i] = a[n++], o[i + 1] = a[n++], o[i + 2] = a[n++], o[i + 3] = a[n++], o[i + 4] = a[n++], o[i + 5] = a[n++], o[i + 6] = a[n++], o[i + 7] = a[n++], o[i + 8] = a[n++], o[i + 9] = a[n++], o[i + 10] = a[n++], o[i + 11] = a[n++], o[i + 12] = a[n++], o[i + 13] = a[n++], o[i + 14] = a[n++], o[i + 15] = a[n++]
                    } else o = U.subarray(n >> 2, n + 64 * r >> 2);
                    Bo.uniformMatrix4fv(wn(e), !!t, o)
                },
                cf: function(e) {
                    if (!pn(e)) return zt.recordError(1280), P("GL_INVALID_ENUM in glUnmapBuffer"), 0;
                    var r = mn(e),
                        t = zt.mappedBuffers[r];
                    return t ? (zt.mappedBuffers[r] = null, 16 & t.access || (zt.currentContext.version >= 2 && R.length <= 2147483648 ? Bo.bufferSubData(e, t.offset, R, t.mem, t.length) : Bo.bufferSubData(e, t.offset, R.subarray(t.mem, t.mem + t.length))), Qo(t.mem), 1) : (zt.recordError(1282), P("buffer was never mapped in glUnmapBuffer"), 0)
                },
                xf: function(e) {
                    var r;
                    e = zt.programs[e], Bo.useProgram(e), (Bo.currentProgram = e) && ((r = Bo.currentProgram).explicitProgramBindingsApplied || (zt.currentContext.version >= 2 && Object.keys(r.explicitUniformBindings).forEach((function(e) {
                        for (var t = r.explicitUniformBindings[e], n = 0; n < t[1]; ++n) {
                            var o = Bo.getUniformBlockIndex(r, e + (t[1] > 1 ? "[" + n + "]" : ""));
                            Bo.uniformBlockBinding(r, o, t[0] + n)
                        }
                    })), Object.keys(r.explicitSamplerBindings).forEach((function(e) {
                        for (var t = r.explicitSamplerBindings[e], n = 0; n < t[1]; ++n) Bo.uniform1i(Bo.getUniformLocation(r, e + (n ? "[" + n + "]" : "")), t[0] + n)
                    })), r.explicitProgramBindingsApplied = 1))
                },
                Og: function(e) {
                    Bo.validateProgram(zt.programs[e])
                },
                yf: function(e, r, t, n, o) {
                    Bo.vertexAttrib4f(e, r, t, n, o)
                },
                zf: function(e, r) {
                    r >>= 2, Bo.vertexAttrib4f(e, U[r], U[r + 1], U[r + 2], U[r + 3])
                },
                We: function(e, r, t, n, o) {
                    var a = zt.currentContext.clientBuffers[e];
                    if (!Bo.currentArrayBufferBinding) return a.size = r, a.type = t, a.normalized = !1, a.stride = n, a.ptr = o, a.clientside = !0, void(a.vertexAttribPointerAdaptor = function(e, r, t, n, o, a) {
                        this.vertexAttribIPointer(e, r, t, o, a)
                    });
                    a.clientside = !1, Bo.vertexAttribIPointer(e, r, t, n, o)
                },
                Af: function(e, r, t, n, o, a) {
                    var i = zt.currentContext.clientBuffers[e];
                    if (!Bo.currentArrayBufferBinding) return i.size = r, i.type = t, i.normalized = n, i.stride = o, i.ptr = a, i.clientside = !0, void(i.vertexAttribPointerAdaptor = function(e, r, t, n, o, a) {
                        this.vertexAttribPointer(e, r, t, n, o, a)
                    });
                    i.clientside = !1, Bo.vertexAttribPointer(e, r, t, !!n, o, a)
                },
                ya: function(e, r, t, n) {
                    Bo.viewport(e, r, t, n)
                },
                dh: function() {
                    return Dn.indexOf(navigator.gpu.getPreferredCanvasFormat())
                },
                yd: function(e, r, t) {
                    e >>= 2;
                    let n = navigator.gpu,
                        o = [, "low-power", "high-performance"][O[e]],
                        a = {};
                    if (n) {
                        function i(e) {
                            ke(r)(Mn(e), t)
                        }
                        return e && (a.forceFallbackAdapter = !!O[e + 1], a.xrCompatible = !!O[e + 2], o && (a.powerPreference = o)), n.requestAdapter(a).then(Rn(i)).catch((() => {
                            i()
                        })), 1
                    }
                },
                na: On,
                Yc: function(e, r, t, n, o) {
                    return On(e, r, t, n)
                },
                Qa: function(e) {
                    let r = 1,
                        t = 0;
                    for (let n of Un) jr[e].features.has(n) && (t |= r), r *= 2;
                    return t
                },
                Ra: function(e, r) {
                    let t = jr[e].limits;
                    r >>= 2;
                    for (let e of Gn) n = r, o = t[e], G[n >>> 1] = BigInt(o), r += 2;
                    var n, o;
                    for (let e of zn) O[r++] = t[e]
                },
                xd: function(e, r, t, n) {
                    function o(e) {
                        e && Mn(e.queue), ke(t)(Mn(e), n)
                    }
                    let a = function(e) {
                        return {
                            requiredLimits: Wn(e >>= 2),
                            defaultQueue: (r = e + 34, O[r] ? {
                                label: Hr(O[r])
                            } : void 0),
                            requiredFeatures: Vn(e + 36)
                        };
                        var r
                    }(r);
                    jr[e].requestDevice(a).then(Rn(o)).catch((() => {
                        o()
                    }))
                },
                Hc: function(e, r, t) {
                    e = jr[e];
                    try {
                        e.mappedRanges[r] = e.getMappedRange(r, t < 0 ? void 0 : t)
                    } catch (e) {
                        return -1
                    }
                    return r
                },
                Oa: function(e, r, t, n, o, a) {
                    jr[e].mapAsync(n, o, a < 0 ? void 0 : a).then((() => {
                        ke(r)(e, t, n, o, a)
                    }))
                },
                La: function(e, r, t, n, o) {
                    R.set(new Uint8Array(jr[e].mappedRanges[r], t, o), n)
                },
                Gc: function(e) {
                    (e = jr[e]).unmap(), e.mappedRanges = {}
                },
                bh: function(e, r) {
                    let t = {
                        device: jr[O[r >>= 2]],
                        format: Dn[O[r + 1]],
                        usage: O[r + 2],
                        viewFormats: Yn(Dn, O[r + 4], O[r + 3]),
                        colorSpace: Hn[O[r + 6]],
                        toneMapping: {
                            mode: Xn[O[r + 7]]
                        },
                        alphaMode: Kn[O[r + 8]]
                    };
                    jr[e].configure(t)
                },
                ea: function(e) {
                    var r = (e = jr[e]).getCurrentTexture();
                    return r != jr[1] && (Zn(1), jr[1] = r, r.wid = 1, Jn(e, 1, r)), 1
                },
                eh: function(e) {
                    let r = document.querySelector(Hr(e)).getContext("webgpu");
                    return r.wid ? r.wid : Mn(r)
                },
                Ec: function(e, r) {
                    e = jr[e];
                    let t = (r >>= 2) ? {
                        timestampWrites: $n(r)
                    } : void 0;
                    return Mn(e.beginComputePass(t))
                },
                M: function(e, r) {
                    let t = [],
                        n = N[(r >>= 2) + 4],
                        o = O[r + 2] >> 2,
                        a = o + 6 >> 1,
                        i = q[r >> 1];
                    for (O[r + 5]; n--;) t.push(O[o] ? {
                        view: jr[O[o]],
                        depthSlice: N[o + 1] < 0 ? void 0 : N[o + 1],
                        resolveTarget: jr[O[o + 2]],
                        storeOp: eo[O[o + 3]],
                        loadOp: Qn[O[o + 4]],
                        clearValue: [q[a], q[a + 1], q[a + 2], q[a + 3]]
                    } : null), o += 14, a += 7;
                    let s = {
                        colorAttachments: t,
                        depthStencilAttachment: (u = r + 5, O[u] ? {
                            view: jr[O[u]],
                            depthLoadOp: Qn[O[u + 1]],
                            depthClearValue: U[u + 2],
                            depthStoreOp: eo[O[u + 3]],
                            depthReadOnly: !!O[u + 4],
                            stencilLoadOp: Qn[O[u + 5]],
                            stencilClearValue: O[u + 6],
                            stencilStoreOp: eo[O[u + 7]],
                            stencilReadOnly: !!O[u + 8]
                        } : void 0),
                        occlusionQuerySet: jr[O[r + 14]],
                        maxDrawCount: i || void 0,
                        timestampWrites: $n(r + 15)
                    };
                    var u;
                    return Mn(jr[e].beginRenderPass(s))
                },
                N: function(e, r, t, n, o, a) {
                    jr[e].copyBufferToBuffer(jr[r], t, jr[n], o, a < 1 / 0 ? a : void 0)
                },
                hh: function(e, r, t, n, o, a) {
                    var i;
                    jr[e].copyTextureToBuffer(to(r), (i = t, {
                        offset: qn(i >>= 2),
                        bytesPerRow: N[i + 2],
                        rowsPerImage: N[i + 3],
                        buffer: jr[O[i + 4]]
                    }), [n, o, a])
                },
                Ic: function(e, r, t, n, o, a) {
                    jr[e].copyTextureToTexture(to(r), to(t), [n, o, a])
                },
                gh: function(e, r, t, n) {
                    jr[e].dispatchWorkgroups(r, t, n)
                },
                fh: function(e, r, t) {
                    jr[e].dispatchWorkgroupsIndirect(jr[r], t)
                },
                ga: function(e, r, t, n) {
                    e = jr[e], t >>= 2;
                    let o = [];
                    for (; n--;) {
                        let e = jr[O[t + 1]];
                        o.push({
                            binding: O[t],
                            resource: e.isBuffer ? {
                                buffer: e,
                                offset: qn(t + 2),
                                size: qn(t + 4) || void 0
                            } : e
                        }), t += 6
                    }
                    let a = {
                        layout: jr[r],
                        entries: o
                    };
                    return no(e.createBindGroup(a), e)
                },
                u: function(e, r, t) {
                    e = jr[e];
                    let n = function(e, r) {
                        e >>= 2;
                        let t = [];
                        for (; r--;) {
                            let r = {
                                    binding: O[e],
                                    visibility: O[e + 1]
                                },
                                n = O[e + 2];
                            e += 4, 1 == n ? r.buffer = {
                                type: oo[O[e]],
                                hasDynamicOffset: !!O[e + 1],
                                minBindingSize: qn(e + 2)
                            } : 2 == n ? r.sampler = {
                                type: ao[O[e]]
                            } : 3 == n ? r.texture = {
                                sampleType: io[O[e]],
                                viewDimension: so[O[e + 1]],
                                multisampled: !!O[e + 2]
                            } : 4 == n ? r.storageTexture = {
                                access: uo[O[e]],
                                format: Dn[O[e + 1]],
                                viewDimension: so[O[e + 2]]
                            } : r.externalTexture = {}, e += 4, t.push(r)
                        }
                        return {
                            entries: t
                        }
                    }(r, t);
                    return no(e.createBindGroupLayout(n), e)
                },
                C: function(e, r) {
                    e = jr[e];
                    let t = {
                            size: qn(r >>= 2),
                            usage: O[r + 2],
                            mappedAtCreation: !!O[r + 3]
                        },
                        n = e.createBuffer(t);
                    return n.mappedRanges = {}, n.isBuffer = 1, no(n, e)
                },
                f: function(e, r) {
                    let t;
                    return no(jr[e].createCommandEncoder(t), jr[e])
                },
                Pa: function(e) {
                    return no(jr[e].createCommandEncoder(), jr[e])
                },
                Fc: function(e, r, t, n, o, a) {
                    e = jr[e];
                    let i = {
                        layout: n > 1 ? jr[n] : fo,
                        compute: {
                            module: jr[r],
                            entryPoint: Hr(t) || void 0,
                            constants: co(o, a)
                        }
                    };
                    return no(e.createComputePipeline(i), e)
                },
                t: function(e, r, t) {
                    e = jr[e];
                    let n = {
                        bindGroupLayouts: jn(jr, r, t)
                    };
                    return no(e.createPipelineLayout(n), e)
                },
                K: function(e, r) {
                    let t = function(e) {
                        let r, t = [],
                            n = [],
                            o = e >>= 2,
                            a = N[o + 7],
                            i = O[o + 2] >> 2,
                            s = o + 10,
                            u = s + 5,
                            c = u + 17,
                            f = c + 4,
                            l = N[f + 7],
                            d = O[f + 2] >> 2,
                            m = O[u],
                            p = O[c],
                            v = O[f + 6],
                            g = O[f + 10];
                        for (; a--;) {
                            let e = [],
                                r = N[i + 2],
                                n = O[i] >> 2;
                            for (; r--;) e.push({
                                offset: qn(n),
                                shaderLocation: O[n + 2],
                                format: Dn[O[n + 3]]
                            }), n += 4;
                            t.push({
                                arrayStride: qn(i + 4),
                                stepMode: [, "vertex", "instance"][O[i + 3]],
                                attributes: e
                            }), i += 6
                        }
                        for (; l--;) n.push(O[d] ? {
                            format: Dn[O[d]],
                            blend: O[d + 1] ? {
                                color: ho(d + 1),
                                alpha: ho(d + 4)
                            } : void 0,
                            writeMask: O[d + 7]
                        } : null), d += 8;
                        return r = {
                            vertex: {
                                module: jr[O[o + 6]],
                                entryPoint: Hr(O[o]) || void 0,
                                buffers: t,
                                constants: co(O[o + 4], N[o + 8])
                            },
                            fragment: v ? {
                                module: jr[v],
                                entryPoint: Hr(O[f]) || void 0,
                                targets: n,
                                constants: co(O[f + 4], N[f + 8])
                            } : void 0,
                            primitive: {
                                topology: bo[O[s]],
                                stripIndexFormat: yo[O[s + 1]],
                                frontFace: [, "ccw", "cw"][O[s + 2]],
                                cullMode: [, "none", "front", "back"][O[s + 3]],
                                unclippedDepth: !!O[s + 4]
                            },
                            depthStencil: m ? {
                                format: Dn[m],
                                depthWriteEnabled: !!O[u + 1],
                                depthCompare: lo[O[u + 2]],
                                stencilReadMask: O[u + 3],
                                stencilWriteMask: O[u + 4],
                                depthBias: N[u + 5],
                                depthBiasSlopeScale: U[u + 6],
                                depthBiasClamp: U[u + 7],
                                stencilFront: po(u + 8),
                                stencilBack: po(u + 12),
                                clampDepth: !!O[u + 16]
                            } : void 0,
                            multisample: p ? {
                                count: p,
                                mask: O[c + 1],
                                alphaToCoverageEnabled: !!O[c + 2]
                            } : void 0,
                            layout: g > 1 ? jr[g] : fo
                        }, r
                    }(r);
                    return no(jr[e].createRenderPipeline(t), jr[e])
                },
                kh: function(e, r) {
                    e = jr[e];
                    let t = (r >>= 2) ? {
                        addressModeU: wo[O[r]],
                        addressModeV: wo[O[r + 1]],
                        addressModeW: wo[O[r + 2]],
                        magFilter: Eo[O[r + 3]],
                        minFilter: Eo[O[r + 4]],
                        mipmapFilter: ko[O[r + 5]],
                        lodMinClamp: U[r + 6],
                        lodMaxClamp: U[r + 7],
                        compare: lo[O[r + 8]],
                        maxAnisotropy: O[r + 9]
                    } : void 0;
                    return no(e.createSampler(t), e)
                },
                v: function(e, r) {
                    let t = function(e) {
                        return {
                            code: Hr(O[e >>= 2]),
                            compilationHints: xo(e + 2)
                        }
                    }(r);
                    return no(jr[e].createShaderModule(t), jr[e])
                },
                Wg: function(e, r) {
                    e = jr[e];
                    let t = {
                        viewFormats: Yn(Dn, O[r >>= 2], O[r + 2]),
                        size: [N[r + 3], N[r + 4], N[r + 5]],
                        mipLevelCount: N[r + 6],
                        sampleCount: N[r + 7],
                        dimension: O[r + 8] + "d",
                        format: Dn[O[r + 9]],
                        usage: O[r + 10]
                    };
                    return no(e.createTexture(t), e)
                },
                w: function(e) {
                    return jr[e].queue.wid
                },
                ih: function(e, r, t) {
                    function n(n) {
                        So(e, r, n, t)
                    }
                    jr[e].popErrorScope().then(Rn(n)).catch(n)
                },
                jh: function(e, r) {
                    jr[e].pushErrorScope([, "out-of-memory", "validation", "internal"][r])
                },
                ch: function(e, r, t) {
                    jr[e].onuncapturederror = r ? function(n) {
                        So(e, r, n.error, t)
                    } : null
                },
                A: function(e) {
                    jr[e].end(), Zn(e)
                },
                ia: function(e) {
                    let r = jr[e].finish();
                    return Zn(e), Mn(r)
                },
                J: function(e) {
                    jr[e].popDebugGroup()
                },
                Ja: function(e, r) {
                    jr[e].pushDebugGroup(Hr(r))
                },
                fa: function(e, r, t, n, o) {
                    jr[e].setBindGroup(r, jr[t], O, n >> 2, o)
                },
                l: function(e, r) {
                    jr[e].setPipeline(jr[r])
                },
                I: function(e) {
                    return !!jr[e]
                },
                e: Zn,
                h: function(e, r) {
                    jr[e].label = Hr(r)
                },
                Lc: function(e, r) {
                    return Mn(jr[e].getBindGroupLayout(r))
                },
                $g: function(e, r, t) {
                    for (jr[e].submit(Yn(jr, r, t)), r >>= 2; t--;) Zn(O[r++])
                },
                ha: function(e, r) {
                    jr[e].submit([jr[r]]), Zn(r)
                },
                q: function(e, r, t, n, o) {
                    jr[e].writeBuffer(jr[r], t, R, n, o)
                },
                Bc: function(e, r, t, n, o, a, i, s) {
                    jr[e].writeTexture(to(r), R, {
                        offset: t,
                        bytesPerRow: n,
                        rowsPerImage: o
                    }, [a, i, s])
                },
                B: function(e, r, t, n, o) {
                    jr[e].draw(r, t, n, o)
                },
                Cc: function(e, r, t, n, o, a) {
                    jr[e].drawIndexed(r, t, n, o, a)
                },
                Ia: function(e, r, t) {
                    jr[e].drawIndexedIndirect(jr[r], t)
                },
                Ha: function(e, r, t) {
                    jr[e].drawIndirect(jr[r], t)
                },
                Kc: function(e, r, t, n, o) {
                    jr[e].setIndexBuffer(jr[r], yo[t], n, o < 0 ? void 0 : o)
                },
                Na: function(e, r, t, n, o) {
                    jr[e].setVertexBuffer(r, jr[t], n, o < 0 ? void 0 : o)
                },
                Zg: function(e, r, t, n, o) {
                    jr[e].setScissorRect(r, t, n, o)
                },
                Jc: function(e, r) {
                    jr[e].setStencilReference(r)
                },
                Yg: function(e, r, t, n, o, a, i) {
                    jr[e].setViewport(r, t, n, o, a, i)
                },
                _g: function(e, r) {
                    let t = (r >>= 2) ? {
                        format: Dn[O[r]],
                        dimension: so[O[r + 1]],
                        usage: O[r + 2],
                        aspect: ro[O[r + 3]],
                        baseMipLevel: N[r + 4],
                        mipLevelCount: N[r + 5],
                        baseArrayLayer: N[r + 6],
                        arrayLayerCount: N[r + 7]
                    } : void 0;
                    return no(jr[e].createView(t), jr[e])
                },
                Ka: function(e) {
                    return no(jr[e].createView(), jr[e])
                }
            },
            zo = (function() {
                var e, r, t, a, i = {
                    a: Uo
                };

                function s(e, r) {
                    var t, n = e.exports;
                    return o.asm = n, A = o.asm.mh, j(), W = o.asm.Jh, t = o.asm.nh, X.unshift(t), ae(), n
                }
                if (oe(), o.instantiateWasm) try {
                    return o.instantiateWasm(i, s)
                } catch (e) {
                    P("Module.instantiateWasm callback failed with error: " + e), n(e)
                }(e = L, r = ie, t = i, a = function(e) {
                    s(e.instance)
                }, e || "function" != typeof WebAssembly.instantiateStreaming || ce(r) || "function" != typeof fetch ? le(r, t, a) : fetch(r, {
                    credentials: "same-origin"
                }).then((e => WebAssembly.instantiateStreaming(e, t).then(a, (function(e) {
                    return P("wasm streaming compile failed: " + e), P("falling back to ArrayBuffer instantiation"), le(r, t, a)
                }))))).catch(n)
            }(), o._GetFakemodTimeInSeconds = function() {
                return (zo = o._GetFakemodTimeInSeconds = o.asm.oh).apply(null, arguments)
            }),
            Go = o._ReleaseKeys = function() {
                return (Go = o._ReleaseKeys = o.asm.ph).apply(null, arguments)
            },
            qo = o._GetCopyBufferAsCStr = function() {
                return (qo = o._GetCopyBufferAsCStr = o.asm.qh).apply(null, arguments)
            },
            Wo = (o._getMetricsInfo = function() {
                return (o._getMetricsInfo = o.asm.rh).apply(null, arguments)
            }, o._SendMessageFloat = function() {
                return (Wo = o._SendMessageFloat = o.asm.sh).apply(null, arguments)
            }),
            Vo = o._SendMessageString = function() {
                return (Vo = o._SendMessageString = o.asm.th).apply(null, arguments)
            },
            Ho = o._SendMessage = function() {
                return (Ho = o._SendMessage = o.asm.uh).apply(null, arguments)
            },
            jo = (o._SetFullscreen = function() {
                return (o._SetFullscreen = o.asm.vh).apply(null, arguments)
            }, o._main = function() {
                return (jo = o._main = o.asm.wh).apply(null, arguments)
            }),
            Yo = o._SendPasteEvent = function() {
                return (Yo = o._SendPasteEvent = o.asm.xh).apply(null, arguments)
            },
            Xo = function() {
                return (Xo = o.asm.yh).apply(null, arguments)
            },
            Ko = function() {
                return (Ko = o.asm.zh).apply(null, arguments)
            },
            Zo = function() {
                return (Zo = o.asm.Ah).apply(null, arguments)
            },
            Jo = function() {
                return (Jo = o.asm.Bh).apply(null, arguments)
            },
            $o = function() {
                return ($o = o.asm.Ch).apply(null, arguments)
            },
            Qo = function() {
                return (Qo = o.asm.Dh).apply(null, arguments)
            },
            ea = function() {
                return (ea = o.asm.Eh).apply(null, arguments)
            },
            ra = function() {
                return (ra = o.asm.Fh).apply(null, arguments)
            },
            ta = function() {
                return (ta = o.asm.Gh).apply(null, arguments)
            },
            na = function() {
                return (na = o.asm.Hh).apply(null, arguments)
            },
            oa = function() {
                return (oa = o.asm.Ih).apply(null, arguments)
            };

        function aa(e = E) {
            function r() {
                Oo || (Oo = !0, o.calledRun = !0, V || ($ = !0, o.noFSInit || Pr.init.initialized || Pr.init(), Pr.ignorePermissions = !1, kr.init(), Kr.root = Pr.mount(Kr, {}, null), st.root = Pr.mount(st, {}, null), me(X), me(K), t(o), o.onRuntimeInitialized && o.onRuntimeInitialized(), ia && function(e = []) {
                    var r = jo;
                    e.unshift(k);
                    var t = e.length,
                        n = oa(4 * (t + 1)),
                        o = n >> 2;
                    e.forEach((e => {
                        N[o++] = xt(e)
                    })), N[o] = 0;
                    try {
                        var a = r(t, n);
                        return Dr(a), a
                    } catch (e) {
                        return hr(e)
                    }
                }(e), function() {
                    if (o.postRun)
                        for ("function" == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length;) e = o.postRun.shift(), J.unshift(e);
                    var e;
                    me(J)
                }()))
            }
            re > 0 || (! function() {
                if (o.preRun)
                    for ("function" == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length;) e = o.preRun.shift(), Y.unshift(e);
                var e;
                me(Y)
            }(), re > 0 || (o.setStatus ? (o.setStatus("Running..."), setTimeout((function() {
                setTimeout((function() {
                    o.setStatus("")
                }), 1), r()
            }), 1)) : r()))
        }
        if (o.addRunDependency = oe, o.removeRunDependency = ae, o.FS_createPath = Pr.createPath, o.FS_createDataFile = Pr.createDataFile, o.ccall = Co, o.cwrap = function(e, r, t, n) {
                var o = !t || t.every((e => "number" === e || "boolean" === e));
                return "string" !== r && o && !n ? _o(e) : function() {
                    return Co(e, r, t, arguments)
                }
            }, o.stackTrace = Lo, ne = function e() {
                Oo || aa(), Oo || (ne = e)
            }, o.preInit)
            for ("function" == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0;) o.preInit.pop()();
        var ia = !0;
        return o.noInitialRun && (ia = !1), aa(), r.ready
    }
})();
"object" == typeof exports && "object" == typeof module ? module.exports = unityFramework : "function" == typeof define && define.amd ? define([], (function() {
    return unityFramework
})) : "object" == typeof exports && (exports.unityFramework = unityFramework);