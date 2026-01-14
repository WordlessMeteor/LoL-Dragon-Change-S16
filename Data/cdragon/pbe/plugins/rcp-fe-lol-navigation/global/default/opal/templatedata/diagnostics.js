var unityDiagnostics = function() {
    var e, t = !1,
        a = 0;
    return {
        openDiagnosticsDiv: function(n) {
            if (!t) {
                var i = document.getElementById("diagnostics-overlay");
                i || function() {
                    (i = document.createElement("div")).id = "diagnostics-overlay", document.body.appendChild(i);
                    var t = document.createElement("div");
                    t.id = "diagnostics-btn", t.innerHTML = "X", t.addEventListener("click", T), i.appendChild(t);
                    var a = document.createElement("div");
                    a.id = "diagnostics-summary";
                    var n = document.createElement("div");
                    n.id = "diagnostics-graph", i.appendChild(a), i.appendChild(n), S(a, "Total JS Memory", "jsTotalMem", !1), S(a, "Used JS Memory", "jsUsedMem", !0), S(a, "Total WASM Heap", "wasmTotalMem", !1), S(a, "Used WASM Heap", "wasmUsedMem", !0), S(a, "Page Load Time To First Frame", "pageLoadTimeToFrame1", !1), S(a, "Page Load Time", "pageLoadTime", !0), S(a, "Code Download Time", "codeDownloadTime", !0), S(a, "Load time of asset file(.data)", "assetLoadTime", !0), S(a, "WebAssembly Startup Time", "webAssemblyStartupTime", !0), S(a, "Game Startup Time", "gameStartupTime", !0), S(a, "Average FPS (10 seconds)", "movingAverageFps", !1), S(a, "Current frames per second", "fps", !0), S(a, "Number of Frame Stalls", "numJankedFrames", !1), e = new M, n.appendChild(e.graph_dom)
                }();
                var d = document.getElementById("jsTotalMem"),
                    o = document.getElementById("jsUsedMem"),
                    l = document.getElementById("wasmTotalMem"),
                    m = document.getElementById("wasmUsedMem"),
                    s = document.getElementById("pageLoadTime"),
                    r = document.getElementById("pageLoadTimeToFrame1"),
                    c = document.getElementById("movingAverageFps"),
                    u = document.getElementById("fps"),
                    p = document.getElementById("numJankedFrames"),
                    g = document.getElementById("webAssemblyStartupTime"),
                    y = document.getElementById("codeDownloadTime"),
                    f = document.getElementById("gameStartupTime"),
                    v = document.getElementById("assetLoadTime");
                a = setInterval((function() {
                    var t = n();
                    isNaN(t.totalJSHeapSize) && isNaN(t.usedJSHeapSize) ? (d.textContent = "N/A", o.textContent = "N/A") : (d.textContent = h(t.totalJSHeapSize), o.textContent = h(t.usedJSHeapSize));
                    l.textContent = h(t.totalWASMHeapSize), m.textContent = h(t.usedWASMHeapSize), s.textContent = (t.pageLoadTime / 1e3).toFixed(2) + " sec", r.textContent = (t.pageLoadTimeToFrame1 / 1e3).toFixed(2) + " sec", v.textContent = (t.assetLoadTime / 1e3).toFixed(2) + " sec", g.textContent = (t.webAssemblyStartupTime / 1e3).toFixed(2) + " sec", y.textContent = (t.codeDownloadTime / 1e3).toFixed(2) + " sec", f.textContent = (t.gameStartupTime / 1e3).toFixed(2) + " sec", c.textContent = t.movingAverageFps.toFixed(2), u.textContent = t.fps.toFixed(2), p.textContent = t.numJankedFrames, e.plotGraph(t, !0)
                }), 1e3), document.getElementById("diagnostics-overlay").style.height = "20%", document.getElementById("diagnostics-icon").style.filter = "grayscale(1)", t = !0
            }

            function S(e, t, a, n) {
                var i = document.createElement("div");
                i.className = "data-row", e.appendChild(i);
                var d = document.createElement("div");
                d.className = "label";
                var o = document.createElement("div");
                o.className = "data", i.appendChild(o);
                var l = document.createElement("span");
                (o.appendChild(l), d.innerHTML = t, l.id = a, n) ? ((n = document.createElement("div")).className = "indented", i.appendChild(n), n.appendChild(d)) : i.append(d);
                i.append(o)
            }

            function T() {
                clearInterval(a), a = 0, document.getElementById("diagnostics-overlay").style.height = "0px", document.getElementById("diagnostics-icon").style.filter = "grayscale(0)", t = !1
            }

            function x(e) {
                var t = (e = e || 0).toString();
                return e >= 1e3 ? t.substr(0, 4) : t.substr(0, 5)
            }

            function h(e) {
                return e >= 1073741824 ? x(e / 1073741824) + " GB" : e >= 1048576 ? x(e / 1048576) + " MB" : e >= 1024 ? x(e / 1024) + " KB" : x(e) + " B"
            }

            function E(e) {
                return e >= 1073741824 ? {
                    bytesValue: x(e / 1073741824),
                    unitMeasure: "GB"
                } : e >= 1048576 ? {
                    bytesValue: x(e / 1048576),
                    unitMeasure: "MB"
                } : e >= 1024 ? {
                    bytesValue: x(e / 1024),
                    unitMeasure: "KB"
                } : {
                    bytesValue: x(e),
                    unitMeasure: "B"
                }
            }

            function C(e, t, a) {
                var n = 1 / 0,
                    i = 0,
                    d = Math.round,
                    o = d(window.devicePixelRatio || 1);
                /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) && (o = 1);
                var l = 250 * o,
                    m = 180 * o,
                    s = 6 * o,
                    r = 6 * o,
                    c = 8 * o,
                    u = 30 * o,
                    p = 234 * o,
                    g = 140 * o,
                    y = document.createElement("canvas");
                y.id = "diagnostics-graph-canvas", y.width = l, y.height = m;
                var f = y.getContext("2d");
                return f.font = "bold " + 16 * o + "px Helvetica,Arial,sans-serif", f.textBaseline = "top", f.fillStyle = a, f.fillRect(0, 0, l, m), f.fillStyle = t, f.fillText(e, s, r), f.fillRect(c, u, p, g), f.fillStyle = a, f.globalAlpha = .5, f.fillRect(c, u, p, g), {
                    graph_dom: y,
                    update: function(m, v) {
                        n = Math.min(n, m), i = Math.max(i, m), f.fillStyle = a, f.globalAlpha = 1, f.fillRect(0, 0, l, u), f.fillStyle = t, f.textAlign = "left", f.fillText(e, s, r), f.textAlign = "right", v ? f.fillText(x(m) + v + " (" + d(n) + "-" + d(i) + ")", l - 10, r) : f.fillText(x(m) + " (" + d(n) + "-" + d(i) + ")", l - 10, r), f.drawImage(y, c + o, u, p - o, g, c, u, p - o, g), f.fillRect(c + p - o, u, o, g), f.fillStyle = a, f.globalAlpha = .5, f.fillRect(c + p - o, u, o, d((1 - m / i) * g))
                    }
                }
            }

            function M() {
                var e = document.createElement("div");
                if (void 0 !== e) {
                    e.style.cssText = "cursor:pointer;", e.style.display = "contents";
                    for (var t, a = l(new C("FPS", "#0ff", "#002")), n = l(new C("Average FPS", "#0f0", "#020")), i = l(new C("Used JS Mem", "#f60", "#201")), d = l(new C("Used Wasm", "#ff0", "#020")), o = 0; o < 4; o++) t = o, e.children[t].style.margin = "1em";
                    return {
                        graph_dom: e,
                        plotGraph: function(e) {
                            a.update(e.fps), n.update(e.movingAverageFps);
                            var t = E(e.usedWASMHeapSize);
                            d.update(t.bytesValue, t.unitMeasure), isNaN(e.usedJSHeapSize) || (t = E(e.usedJSHeapSize), i.update(t.bytesValue, t.unitMeasure))
                        }
                    }
                }

                function l(t) {
                    return e.appendChild(t.graph_dom), t
                }
            }
        }
    }
}();