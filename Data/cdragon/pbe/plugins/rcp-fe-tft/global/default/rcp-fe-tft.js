(() => {
    var e = [function(e, t, n) {
            "use strict";
            var i, a = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, a)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                l = this && this.__importStar || (i = function(e) {
                    return i = Object.getOwnPropertyNames || function(e) {
                        var t = [];
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
                        return t
                    }, i(e)
                }, function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n = i(e), l = 0; l < n.length; l++) "default" !== n[l] && a(t, e, n[l]);
                    return s(t, e), t
                }),
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = o(n(1)),
                c = l(n(2)),
                d = o(n(4)),
                u = document.currentScript.ownerDocument;
            d.default.set(u);
            const m = window.getPluginAnnounceEventName(c.pluginName);
            u.addEventListener(m, (function(e) {
                e.registrationHandler((async function(e) {
                    await r.default.init(e, {
                        navigation: e => e.get("rcp-fe-lol-navigation"),
                        ComponentFactory: e => e.get("rcp-fe-common-libs").getComponentFactory("1"),
                        dataBinding: e => e.get("rcp-fe-common-libs").getDataBinding(c.pluginName),
                        Ember: e => e.get("rcp-fe-ember-libs").getEmber(),
                        EmberL10n: e => e.get("rcp-fe-ember-libs").getEmberL10n(1),
                        SharedComponents: e => e.get("rcp-fe-lol-shared-components"),
                        UIKit: e => e.get("rcp-fe-lol-uikit"),
                        viewport: e => e.get("rcp-fe-lol-shared-components").getApi_Viewport(),
                        websocket: e => e.getSocket(),
                        ModalManager: e => e.get("rcp-fe-lol-uikit").getModalManager(),
                        htmlSanitizer: e => e.get("rcp-fe-common-libs").getHtmlSanitizer(1),
                        logger: e => e.get("rcp-fe-common-libs").logging.create(c.pluginName)
                    }), await e.getOptional("rcp-fe-lol-tft-team-planner").then((e => r.default.add({
                        TeamPlanner: e
                    }))), await e.getOptional("rcp-fe-lol-objectives").then((e => r.default.add({
                        Objectives: e
                    })));
                    const t = e.get("rcp-fe-lol-l10n").tra().overlay("/fe/lol-l10n/trans.json").overlay("/fe/tft/trans.json"),
                        i = r.default.EmberL10n(r.default.Ember, t);
                    await r.default.add({
                        dataBinding: r.default.dataBinding.bindTo(r.default.websocket),
                        tra: t,
                        traService: i
                    }), await r.default.tra.ready(), await r.default.traService.ready(), await r.default.add({
                        EmberApplicationFactory: e => e.get("rcp-fe-ember-libs").getEmberApplicationFactory()
                    });
                    const a = await
                    function(e, t) {
                        const i = t.viewport.getApiKey(e),
                            a = t.viewport.fullScreen().getScreenRoot(i, e).getElement(),
                            s = {
                                name: e,
                                ComponentFactory: t.ComponentFactory,
                                rootElement: a,
                                tra: t.traService,
                                Router: n(5).default,
                                ApplicationController: n(6).default,
                                IndexController: n(8).default,
                                GameflowService: n(9).default,
                                LobbyService: n(10).default,
                                BridgeService: n(11).default,
                                TftPersistentTooltipComponent: n(12).default,
                                PardonOurDustButton: n(15).default,
                                FullLaunchService: n(18).default,
                                TftHomeService: n(19).default,
                                TftHomeContentComponent: n(20).default,
                                TftHomeCardComponent: n(23).default,
                                TftHomeHeaderComponent: n(26).default,
                                TftHomeBackgroundComponent: n(29).default,
                                TftHomeLoadingScreenComponent: n(32).default,
                                TftLaunchButtonComponent: n(35).default,
                                ManagedIframeComponent: t.SharedComponents.getSharedEmberComponents().ManagedIframeComponent,
                                TEMPLATES: {
                                    application: n(38),
                                    index: n(39),
                                    "tft-persistent-tooltip": n(14),
                                    "pardon-our-dust-button": n(17),
                                    "tft-home-content": n(22),
                                    "tft-home-card": n(25),
                                    "tft-home-header": n(28),
                                    "tft-home-background": n(31),
                                    "tft-home-loading-screen": n(34),
                                    "tft-launch-button": n(37)
                                }
                            },
                            l = t.SharedComponents.getSharedEmberComponents().EmberCollectionApi.registerToFactoryDefinition(s);
                        return t.EmberApplicationFactory.setFactoryDefinition(e, l, {
                            EMBER_CLI_COMPAT: !0
                        }), t.ComponentFactory.create(e).emberAppInstancePromise
                    }(c.pluginName, r.default), s = new c.default(a);
                    return r.default.api = s, {
                        api: s,
                        getBridgeComponents: function() {
                            return {
                                BridgeService: n(11).default,
                                TftPersistentTooltipComponent: n(12).default,
                                PardonOurDustButtonComponent: n(15).default,
                                TftBridgeAnnouncementModalComponent: n(40).default
                            }
                        },
                        getFullLaunchComponents: function() {
                            return {
                                FullLaunchService: n(18).default,
                                setFullLaunchProxy: n(18).setFullLaunchProxy
                            }
                        }
                    }
                }))
            }), {
                once: !0
            })
        }, e => {
            "use strict";
            let t;

            function n() {
                return t || (console.error("The `provider` object has not been set, please do so by calling the `init` method."), null)
            }
            const i = {
                init: function(e, n) {
                    return t = e, this.add(n)
                },
                _getValue: function(e, n) {
                    let i;
                    return "function" == typeof n ? (i = n(t), i || console.warn("The function for key " + e + " returned a falsy value: ", i)) : "string" == typeof n ? (i = t.get(n), i || console.warn("The provider `get` invocation for the key " + e + " returned a falsy value: ", i)) : "object" == typeof n && (i = n), i
                },
                add: function(e) {
                    e = e || {};
                    const t = [],
                        n = this;
                    return Object.keys(e).forEach((function(i) {
                        const a = e[i],
                            s = n._getValue(i, a);
                        s && s.then ? (s.then((function(e) {
                            e || console.warn("The promise for the key " + i + " resolved with a falsy value: ", e), n._addValue(i, e)
                        })), t.push(s)) : n._addValue(i, s)
                    })), Promise.all(t)
                },
                _addValue: function(e, t) {
                    this[e] = t
                },
                provider: function() {
                    return console.error("The function `provider` has been deprecated, please use `getProvider`", (new Error).stack), n()
                },
                getProvider: function() {
                    return n()
                }
            };
            e.exports = i
        }, function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pluginName = void 0;
            const a = i(n(3));
            var s = n(3);
            Object.defineProperty(t, "pluginName", {
                enumerable: !0,
                get: function() {
                    return s.pluginName
                }
            });
            t.default = class {
                _tft;
                constructor(e) {
                    this._tft = new a.default(e, {
                        fullLaunchService: e.__container__.lookup("service:full-launch"),
                        tftHomeService: e.__container__.lookup("service:tft-home"),
                        indexController: e.__container__.lookup("controller:index")
                    }), this._tft.init()
                }
                toggleDirectLaunchEnabled() {
                    this._tft.toggleDirectLaunchEnabled()
                }
                getTftHomeContent(e) {
                    return this._tft.getTftHomeContent(e)
                }
            }
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pluginName = void 0;
            const i = n(1);
            t.pluginName = "rcp-fe-tft";
            t.default = class {
                screenRoot;
                viewportApiKey;
                app;
                navigationItem;
                _services;
                constructor(e, n) {
                    this.viewportApiKey = i.viewport.getApiKey(t.pluginName), this.screenRoot = i.viewport.main().getScreenRoot(this.viewportApiKey, t.pluginName), this.app = e, this.navigationItem = null, this._services = n
                }
                init() {
                    i.dataBinding.observe("/lol-client-config/v3/client-config/lol.client_settings.tft.new_tab.enabled", this, (e => {
                        if (e) {
                            if (this.navigationItem) return;
                            this.navigationItem = i.navigation.addItem({
                                show: () => this.showTFTMenu(),
                                hide: () => this.hideTFTMenu()
                            }, {
                                displayName: i.tra.get("tft_navbar_name"),
                                id: t.pluginName
                            }), this.screenRoot.getElement().appendChild(this.app.rootElement)
                        } else this.navigationItem && (i.navigation.removeItem(this.navigationItem), this.navigationItem = null)
                    }))
                }
                showTFTMenu() {
                    this.screenRoot.bump().then((() => {
                        this._services.fullLaunchService.setTFTNewTabVisible(!0), this._services.tftHomeService.getTftHomeContent().then((e => {
                            this._services.indexController.set("pageContent", e)
                        })).catch((() => {}))
                    }))
                }
                hideTFTMenu() {
                    this.screenRoot.release().then((() => {
                        this._services.fullLaunchService.setTFTNewTabVisible(!1)
                    }))
                }
                toggleDirectLaunchEnabled() {
                    this._services.fullLaunchService.toggleDirectLaunchEnabled()
                }
                getTftHomeContent(e) {
                    return this._services.tftHomeService.getTftHomeContent(e)
                }
            }
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = new class {
                constructor() {
                    this.subDoc = document
                }
                set(e) {
                    this.subDoc = e
                }
                get() {
                    return this.subDoc
                }
            };
            t.default = n
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1).Ember.Router.extend({
                location: "none"
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(7), t.default = i.Ember.Controller.extend({})
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            t.default = i.Ember.Controller.extend({
                gameflowService: i.Ember.inject.service("gameflow"),
                lobbyService: i.Ember.inject.service("lobby"),
                matchmakingService: i.Ember.inject.service("matchmaking"),
                tftHomeService: i.Ember.inject.service("tft-home"),
                pageContent: null,
                isLoading: !0,
                init: function() {
                    this._super(...arguments), this.get("tftHomeService").getTftHomeContent().then((e => {
                        this.set("pageContent", e)
                    })).catch((() => {})).finally((() => {
                        this.set("isLoading", !1)
                    }))
                },
                actions: {
                    launchTFT: function() {
                        this.get("gameflowService").getGameflowPhase().then((e => "Lobby" === e ? i.UIKit.getModalManager().add({
                            type: "DialogConfirm",
                            data: {
                                contents: this.get("tra.leave_lobby_dialog_contents"),
                                acceptText: this.get("tra.dialog_accept"),
                                declineText: this.get("tra.dialog_decline")
                            },
                            show: !0
                        }).acceptPromise.then((() => {
                            this.get("lobbyService").leaveParty()
                        })) : "Matchmaking" === e ? i.UIKit.getModalManager().add({
                            type: "DialogConfirm",
                            data: {
                                contents: this.get("tra.leave_matchmaking_dialog_contents"),
                                acceptText: this.get("tra.dialog_accept"),
                                declineText: this.get("tra.dialog_decline")
                            },
                            show: !0
                        }).acceptPromise.then((() => {
                            this.get("lobbyService").cancelMatchmaking(), this.get("lobbyService").leaveParty()
                        })) : void 0)).then((() => {
                            this.get("gameflowService").launchTFT()
                        })).catch((() => {}))
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1),
                a = "/lol-gameflow/v1/gameflow-phase",
                s = "/lol-gameflow/v1/launch-tft";
            t.default = i.Ember.Service.extend({
                init: function() {
                    this._super(...arguments)
                },
                getGameflowPhase: function() {
                    return i.dataBinding.get(a)
                },
                launchTFT: function() {
                    i.dataBinding.post(s)
                },
                willDestroy: function() {
                    this._super(...arguments)
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1),
                a = "/lol-lobby/v2/lobby/matchmaking/search",
                s = "/lol-lobby/v2/lobby";
            t.default = i.Ember.Service.extend({
                init: function() {
                    this._super(...arguments)
                },
                cancelMatchmaking: function() {
                    i.dataBinding.delete(a)
                },
                leaveParty: function() {
                    i.dataBinding.delete(s)
                },
                willDestroy: function() {
                    this._super(...arguments)
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1),
                a = "/lol-client-config/v3/client-config/",
                s = a + "lol.client_settings.tft.bridge_enabled",
                l = a + "lol.client_settings.tft.bridge_tooltips_enabled",
                o = "/lol-settings/v2/local/lol-user-experience",
                r = "/lol-gameflow/v1/session",
                c = "/riotclient/region-locale",
                d = "/lol-settings/v2/account/LCUPreferences/lol-tft",
                u = "tftBridgeAnnouncementSeen";
            t.default = i.Ember.Service.extend({
                locale: null,
                init: function() {
                    this._super(...arguments), this.set("bridgeEnabled", !1), this.set("bridgeTooltipsEnabled", !1), this.set("showPardonOurDustButton", !1), this.set("hasSeenBridgeTftTooltip", !1), this.set("showPardonOurDustPip", !0), this.set("blockPartyInvites", !1), this.set("blockTFTMode", !1), this.set("isTencentRegion", !1), this.set("bridgeAnnouncementSeen", !1), i.dataBinding.observe(s, this, (e => {
                        this.set("bridgeEnabled", e), this.set("showPardonOurDustButton", e)
                    })), i.dataBinding.observe(l, this, (e => {
                        this.set("bridgeTooltipsEnabled", e)
                    })), i.dataBinding.observe(c, this, (e => {
                        this.set("isTencentRegion", "TENCENT" === e?.region)
                    })), i.dataBinding.get("/riotclient/system-info/v1/basic-info").then((e => {
                        const t = e.operatingSystem.versionMajor,
                            n = parseInt(t) || 0,
                            i = "Windows" === e.operatingSystem.platform && n >= 10;
                        this.set("blockPartyInvites", !i), this.set("blockTFTMode", !i)
                    })), i.dataBinding.observe(o, this, (e => {
                        this.set("hasSeenBridgeTftTooltip", e?.data?.hasSeenBridgeTftTooltip ?? !1)
                    })), i.dataBinding.observe(o, this, (e => {
                        this.set("showPardonOurDustPip", e?.data?.showPardonOurDustPip ?? !0)
                    })), i.dataBinding.observe(d, this, (e => {
                        this.set("bridgeAnnouncementSeen", Boolean(e?.data?.[u]))
                    })), i.dataBinding.addObserver(r, this, (e => {
                        const t = "TFT" === e?.gameData?.queue?.gameMode,
                            n = e?.phase;
                        t && ("GameStart" === n || ("WaitingForStats" === n || "PreEndOfGame" === n || "EndOfGame" === n)) && this.recordPersistedSeenBridgeTooltip()
                    }))
                },
                shouldBlockPartyInvites: function() {
                    return this.get("blockPartyInvites")
                },
                shouldShowPardonOurDustButton: function() {
                    return this.get("showPardonOurDustButton")
                },
                shouldBlockTFTMode: function() {
                    return this.get("blockTFTMode")
                },
                isBridgeEnabled: function() {
                    return this.get("bridgeEnabled")
                },
                recordPersistedSeenBridgeTooltip() {
                    this.get("hasSeenBridgeTftTooltip") || i.dataBinding.patch(o, {
                        data: {
                            hasSeenBridgeTftTooltip: !0
                        },
                        schemaVersion: 3
                    })
                },
                recordBridgeAnnouncementSeen() {
                    this.set("bridgeAnnouncementSeen", !0);
                    const e = {};
                    e[u] = !0, i.dataBinding.patch(d, {
                        data: e,
                        schemaVersion: 1
                    })
                },
                recordPersistedClickedPardonOurDustButton() {
                    this.get("showPardonOurDustPip") && i.dataBinding.patch(o, {
                        data: {
                            showPardonOurDustPip: !1
                        },
                        schemaVersion: 3
                    })
                },
                willDestroy: function() {
                    this._super(...arguments), i.dataBinding.unobserve(s, this), i.dataBinding.unobserve(l, this), i.dataBinding.unobserve(c, this), i.dataBinding.unobserve(o, this), i.dataBinding.removeObserver(r, this), i.dataBinding.unobserve(d, this)
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(13);
            const a = "wide",
                s = "compact";
            t.default = i.Ember.Component.extend({
                tagName: "",
                classNames: ["rcp-fe-tft-persistent-tooltip"],
                layout: n(14),
                tooltipText: null,
                tooltipOffsetY: 0,
                tooltipStyle: null,
                hideWhenTeamPlannerVisible: !1,
                didReceiveAttrs() {
                    this._super(...arguments), this.assignTooltipVariant()
                },
                didInsertElement() {
                    if (this._super(...arguments), i.ModalManager.addModalQueueObserver(this, this.checkModalQueueEmpty), i.TeamPlanner && this.get("hideWhenTeamPlannerVisible")) {
                        const e = i.TeamPlanner.addVisibilityObserverCallback((e => {
                            this.set("isTeamPlannerVisible", e)
                        }));
                        this.set("_visibilityObserverIndex", e)
                    }
                    if ((0, i.getProvider)().getOptional("rcp-fe-lol-social").then((e => {
                            if (this.isDestroyed || this.isDestroying) return;
                            const t = e.addChatWindowVisibilityObserverCallback((e => {
                                this.set("isChatWindowOpen", e)
                            }));
                            this.set("_chatWindowVisibilityObserverIndex", t), this.set("_socialPlugin", e)
                        }), (e => i.logger.error("Provider getOptional failure", e))), i.Objectives) {
                        const e = i.Objectives.addObjectivesModalVisibilityObserverCallback((e => {
                            this.set("isObjectivesModalOpen", e)
                        }));
                        this.set("_objectivesModalvisibilityObserverIndex", e)
                    }
                },
                willDestroyElement() {
                    this._super(...arguments), i.ModalManager.removeModalQueueObserver(this.checkModalQueueEmpty), i.TeamPlanner && void 0 !== this.get("_visibilityObserverIndex") && i.TeamPlanner.removeVisibilityObserverCallback(this.get("_visibilityObserverIndex"));
                    const e = this.get("_socialPlugin"),
                        t = this.get("_chatWindowVisibilityObserverIndex");
                    e && void 0 !== t && e.removeChatWindowVisibilityObserverCallback(this.get("_chatWindowVisibilityObserverIndex")), i.Objectives && void 0 !== this.get("_objectivesModalvisibilityObserverIndex") && i.Objectives.removeObjectivesModalVisibilityObserverCallback(this.get("_objectivesModalvisibilityObserverIndex"))
                },
                isModalQueueEmpty: !0,
                checkModalQueueEmpty(e) {
                    this.set("isModalQueueEmpty", e)
                },
                assignTooltipVariant() {
                    let e = "tft-persistent-tooltip";
                    switch (this.tooltipStyle) {
                        case a:
                            e = "tft-persistent-tooltip-wide";
                            break;
                        case s:
                            e = "tft-persistent-tooltip-compact"
                    }
                    this.set("tooltipClass", e)
                },
                shouldShowTooltip: i.Ember.computed("isModalQueueEmpty", "hideWhenTeamPlannerVisible", "isTeamPlannerVisible", "isChatWindowOpen", "isObjectivesModalOpen", (function() {
                    const e = this.get("isModalQueueEmpty"),
                        t = this.get("hideWhenTeamPlannerVisible") && this.get("isTeamPlannerVisible"),
                        n = this.get("isChatWindowOpen"),
                        i = this.get("isObjectivesModalOpen");
                    return e && !t && !n && !i
                }))
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "/T3tFtLg",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-persistent-tooltip.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-persistent-tooltip.styl\\" js-path=\\"null\\" "],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type","show","offsetY"],["top","persistent",["get",["shouldShowTooltip"]],["get",["tooltipOffsetY"]]]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-small"],["dynamic-attr","class",["unknown",["tooltipClass"]],null],["flush-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["text","\\n        "],["append",["helper",["sanitize"],[["get",["tooltipText"]]],null],false],["text","\\n    "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(16), t.default = i.Ember.Component.extend({
                classNames: ["rcp-fe-tft-pardon-our-dust"],
                tra: i.tra,
                layout: n(17),
                bridgeService: i.Ember.inject.service("bridge"),
                pardonOurDustContents: i.Ember.computed("bridgeService.locale", (function() {
                    const e = `<a class='' href='${this.get("tra.pardon_our_dust_link")}' target='_blank'>${this.get("tra.pardon_our_dust_link_text")}</a>`,
                        t = this.get("tra").formatString("pardon_our_dust_modal_body", {
                            link: e
                        }),
                        n = i.htmlSanitizer.sanitize(t);
                    return i.UIKit.getTemplateHelper().contentBlockDialog(this.get("tra.pardon_our_dust_modal_title"), n, "dialog-large")
                })),
                showPardonOurDustPip: i.Ember.computed("bridgeService.showPardonOurDustPip", (function() {
                    return this.get("bridgeService.showPardonOurDustPip")
                })),
                actions: {
                    pardonOurDustClicked: function() {
                        const e = i.UIKit.getModalManager(),
                            t = this.get("pardonOurDustContents");
                        e.add({
                            type: "DialogAlert",
                            data: {
                                contents: t,
                                okText: this.get("tra.dialog_accept"),
                                show: !0,
                                dismissible: !0,
                                dismissibleType: "inside",
                                onClose: () => {
                                    this.get("bridgeService").recordPersistedClickedPardonOurDustButton()
                                }
                            }
                        })
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "gCseT77n",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\pardon-our-dust-button.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\pardon-our-dust-button.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-pardon-our-dust"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"pardonOurDustClicked"],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-pardon-our-dust-label"],["flush-element"],["append",["unknown",["tra","pardon_our_dust_button_text"]],false],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","src","/fe/tft/images/pardon-our-dust-message-button.png"],["static-attr","class","tft-pardon-our-dust-img-main"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","src","/fe/tft/images/pardon-our-dust-message-button-hovered.png"],["static-attr","class","tft-pardon-our-dust-img-hover"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","src","/fe/tft/images/pardon-our-dust-message-button-pressed.png"],["static-attr","class","tft-pardon-our-dust-img-clicked"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["showPardonOurDustPip"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","div",[]],["static-attr","class","tft-pardon-our-dust-pip"],["flush-element"],["text","\\n  "],["append",["unknown",["call-to-action-pip"]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setFullLaunchProxy = function(e) {
                d = e
            };
            const i = n(1),
                a = "/lol-client-config/v3/client-config/",
                s = a + "lol.client_settings.tft.full_launch_enabled",
                l = a + "lol.client_settings.tft.new_tab.overrideUrl",
                o = "/deep-links/v1/settings",
                r = a + "lol.client_settings.tft.set17_extension_config",
                c = "/riotclient/region-locale";
            let d = null;
            t.default = i.Ember.Service.extend({
                homeOverrideUrl: "",
                init: function() {
                    this._super(...arguments), d && (d._registerLaunchTFTCallback(this.launchTFT.bind(this)), d._registerIsFullLaunchEnabledCallback(this.isFullLaunchEnabled.bind(this)), d._registerIsHextechTFTQueueCallback(this.isHextechTFTQueue.bind(this))), this.set("fullLaunchEnabled", !1), this.set("directLaunchEnabled", !0), this.set("TFTNewTabVisible", !1), this.set("isTencentRegion", !1), this.set("launchLink", ""), this.set("externalClientScheme", ""), i.dataBinding.observe(s, this, (e => {
                        this.set("fullLaunchEnabled", e)
                    })), i.dataBinding.observe(l, this, (e => {
                        this.set("homeOverrideUrl", e)
                    })), this.sharedAudioManager = i.navigation?.activityCenter?.getHomeHubsSharedAudioManager(), i.dataBinding.observe(c, this, (e => {
                        this.set("isTencentRegion", "TENCENT" === e?.region)
                    })), i.dataBinding.observe(o, this, (e => {
                        e ? (this.set("externalClientScheme", e.externalClientScheme), i.logger.info(`Saves externalClientScheme as ${this.get("externalClientScheme")}`)) : i.logger.warning("No external link settings received.")
                    })), i.dataBinding.observe("/lol-patch/v1/product-dependency", this, (e => {
                        if (e && Object.prototype.hasOwnProperty.call(e, "product_id") && Object.prototype.hasOwnProperty.call(e, "patchline_id")) {
                            const t = e.product_id,
                                n = e.patchline_id;
                            this.set("launchLink", `product/launch/v1/${t}/${n}?directLaunch=true`), i.logger.info(`Saves launchLink product with link: ${this.get("launchLink")}`)
                        }
                    })), i.dataBinding.observe(r, this, (e => {
                        e ? this.set("set17ExtensionConfig", e) : i.logger.warning("No set17 extension config received.")
                    }))
                },
                isFullLaunchEnabled: function() {
                    return this.get("fullLaunchEnabled")
                },
                isDirectLaunchEnabled: function() {
                    return this.get("directLaunchEnabled")
                },
                willDestroy: function() {
                    this._super(...arguments), i.dataBinding.unobserve(s, this), i.dataBinding.unobserve(l, this), i.dataBinding.unobserve(c, this), i.dataBinding.unobserve(o, this), d && d._unregisterCallbacks()
                },
                launchTFT: function() {
                    if (this.get("isTencentRegion")) return i.logger.info("Launching bundled executable for Tencent."), void i.dataBinding.post("/lol-gameflow/v1/launch-tft");
                    const e = this.get("launchLink");
                    if (!e) return void i.logger.warning("No external product link found");
                    const t = this.get("externalClientScheme");
                    t ? (i.logger.info(`Launching external product with link: ${e}`), window.open(`${t}://${e}`)) : i.logger.warning("No riot client launch scheme found")
                },
                setTFTNewTabVisible: function(e) {
                    this.set("TFTNewTabVisible", e), !e && this.sharedAudioManager && this.sharedAudioManager.stopAll({
                        stopAllMusicAmbience: !0
                    })
                },
                getTftAudioManager: function() {
                    return this.sharedAudioManager
                },
                toggleDirectLaunchEnabled: function() {
                    this.set("directLaunchEnabled", !this.get("directLaunchEnabled"))
                },
                isSet17ExtensionEnabled() {
                    return !0 === this.get("set17ExtensionConfig")?.enabled
                },
                getTFTuQueueEntries() {
                    return this.isSet17ExtensionEnabled() && this.get("set17ExtensionConfig")?.tftu_queue_entries || []
                },
                getHextechTFTQueueIds() {
                    if (!this.isSet17ExtensionEnabled()) return [];
                    const e = this.get("set17ExtensionConfig")?.hextech_tft_queue_ids;
                    return Array.isArray(e) ? e : []
                },
                isHextechTFTQueue(e) {
                    return this.getHextechTFTQueueIds().includes(e)
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            t.default = i.Ember.Service.extend({
                init: function() {
                    this._super(...arguments)
                },
                willDestroy: function() {
                    this._super(...arguments)
                },
                async getTftHomeContent(e) {
                    const t = new Promise(((e, t) => {
                            setTimeout((() => {
                                t(new Error("Request timed out after 8 seconds"))
                            }), 8e3)
                        })),
                        n = e ? `?pageName=${encodeURIComponent(e)}` : "",
                        a = await Promise.race([i.dataBinding.get(`/lol-tft/v1/tft/home/content${n}`, {
                            skipCache: !0
                        }), t]);
                    if (!a) throw new Error("No content received from API");
                    return a
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(21);
            t.default = i.Ember.Component.extend({
                classNames: ["rcp-fe-tft-home-content"],
                classNameBindings: ["shouldShowIframe:iframe-view"],
                tra: i.tra,
                layout: n(22),
                fullLaunchService: i.Ember.inject.service("full-launch"),
                bridgeService: i.Ember.inject.service("bridge"),
                pageContent: null,
                isLoading: !1,
                landingRichTextCard: i.Ember.computed("pageContent", (function() {
                    return (this.get("pageContent.blades") || []).find((e => "landingRichText" === e.type)) || null
                })),
                richTextBody: i.Ember.computed("landingRichTextCard", (function() {
                    return this.get("landingRichTextCard.richText.body") || null
                })),
                backgroundContent: i.Ember.computed.alias("pageContent.metaImage.url"),
                assetHighlightCard: i.Ember.computed("pageContent", (function() {
                    return (this.get("pageContent.blades") || []).find((e => "assetHighlight" === e.type)) || null
                })),
                headerData: i.Ember.computed("assetHighlightCard", "tra", (function() {
                    const e = this.get("assetHighlightCard.header");
                    if (!e) return {
                        supertitle: null,
                        title: this.get("tra.tft_home_default_title"),
                        subtitle: null,
                        description: null,
                        imageUrl: null
                    };
                    const t = e.media,
                        n = t && "image" === t.type ? t.url : null;
                    return {
                        supertitle: e.supertitle || null,
                        title: e.title || null,
                        subtitle: e.subtitle || null,
                        description: e.description ? e.description.body : null,
                        imageUrl: n || null
                    }
                })),
                directLaunchDisabled: i.Ember.computed.not("fullLaunchService.directLaunchEnabled"),
                blockTFTMode: i.Ember.computed.alias("bridgeService.blockTFTMode"),
                launchButtonDisabled: i.Ember.computed.or("directLaunchDisabled", "blockTFTMode"),
                launchButtonEnabled: i.Ember.computed.not("launchButtonDisabled"),
                newTabVisible: i.Ember.computed.alias("fullLaunchService.TFTNewTabVisible"),
                showTooltip: i.Ember.computed.and("launchButtonDisabled", "newTabVisible"),
                tooltipText: i.Ember.computed("tra", "directLaunchDisabled", "blockTFTMode", (function() {
                    if (this.get("blockTFTMode")) {
                        return `${this.get("tra.tft_mode_unsupportedclientplatform_tooltip")} ${this.get("tra.tft_mode_unsupportedclientplatform_link")}`
                    }
                    return this.get("directLaunchDisabled") ? this.get("tra.tft_new_tab_launch_button_direct_launch_disabled") : ""
                })),
                shouldShowIframe: !1,
                tftHomeOverrideUrl: null,
                isIframeMode: i.Ember.computed.bool("tftHomeOverrideUrl"),
                isHidden: i.Ember.computed.not("newTabVisible"),
                audioManager: i.Ember.computed("fullLaunchService", (function() {
                    return this.get("fullLaunchService").getTftAudioManager()
                })),
                init() {
                    this._super(...arguments), this._activateAttempts = 0, this.get("fullLaunchService.homeOverrideUrl") ? this.setOverrideUrlCache() : this.addObserver("fullLaunchService.homeOverrideUrl", this, this.setOverrideUrlCache)
                },
                setOverrideUrlCache() {
                    const e = this.get("fullLaunchService.homeOverrideUrl");
                    !this.get("tftHomeOverrideUrl") && e && (this.set("tftHomeOverrideUrl", e), this.removeObserver("fullLaunchService.homeOverrideUrl", this, this.setOverrideUrlCache), this.setupIFrameObserver())
                },
                setupIFrameObserver() {
                    this.addObserver("newTabVisible", this, this.tryActivateIframe), this.tryActivateIframe()
                },
                tryActivateIframe() {
                    if (!this.get("isDestroyed") && !this.get("isDestroying")) {
                        if (!this.get("newTabVisible")) return i.Ember.run.cancel(this._activateRetry), this._activateAttempts = 0, void this.set("shouldShowIframe", !1);
                        if (!this.element || !this.element.isConnected) return i.Ember.run.cancel(this._activateRetry), 60 == this._activateAttempts++ && i.logger.error("tft-home-content: element still not connected after threshold; continuing to retry"), void(this._activateRetry = i.Ember.run.later(this, this.tryActivateIframe, 16));
                        this._activateAttempts = 0, this.set("shouldShowIframe", !0)
                    }
                },
                willDestroyElement() {
                    this._activateRetry && (i.Ember.run.cancel(this._activateRetry), this._activateRetry = null), this.removeObserver("fullLaunchService.homeOverrideUrl", this, this.setOverrideUrlCache), this.removeObserver("newTabVisible", this, this.tryActivateIframe), this._super(...arguments)
                },
                actions: {
                    launchTFT: function() {
                        this.get("fullLaunchService").launchTFT()
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "a8RK9XRM",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-content.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-content.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","section",[]],["static-attr","class","tft-home-content"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isIframeMode"]]],null,6,4],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["unknown",["tft-home-loading-screen"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["helper",["tft-persistent-tooltip"],null,[["tooltipText","tooltipOffsetY","tooltipStyle","hideWhenTeamPlannerVisible"],[["get",["tooltipText"]],-6,"compact",true]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["showTooltip"]]],null,1]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","tft-home-content__cards"],["flush-element"],["text","\\n            "],["append",["helper",["tft-home-card"],null,[["data"],[["get",["assetHighlightCard"]]]]],false],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["tft-home-background"],null,[["src"],[["get",["backgroundContent"]]]]],false],["text","\\n\\n    "],["open-element","section",[]],["static-attr","class","tft-home-content"],["flush-element"],["text","\\n      "],["open-element","main",[]],["static-attr","class","tft-home-content__main-content"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","tft-home-content__header"],["flush-element"],["text","\\n          "],["append",["helper",["tft-home-header"],null,[["headerData"],[["get",["headerData"]]]]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","footer",[]],["static-attr","class","tft-home-content__footer"],["flush-element"],["text","\\n"],["block",["if"],[["get",["assetHighlightCard"]]],null,3],["text","\\n"],["block",["tft-launch-button"],null,[["isEnabled","onClick","baseImgPath","overImgPath","downImgPath","disabledImgPath","buttonText"],[["get",["launchButtonEnabled"]],["helper",["action"],[["get",[null]],"launchTFT"],null],"/fe/lol-static-assets/images/buttons/find_match_default.png","/fe/lol-static-assets/images/buttons/find_match_hover.png","/fe/lol-static-assets/images/buttons/find_match_active.png","/fe/lol-static-assets/images/buttons/find_match_default.png",["get",["tra","tft_launch_button"]]]],2],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["isLoading"]]],null,0]],"locals":[]},{"statements":[["text","      "],["append",["helper",["managed-iframe"],null,[["url","isHidden","audioManager","isQuickLoadEnabled"],[["get",["tftHomeOverrideUrl"]],["get",["isHidden"]],["get",["audioManager"]],true]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["shouldShowIframe"]]],null,5]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(24), t.default = i.Ember.Component.extend({
                classNames: ["tft-home-card"],
                classNameBindings: ["isArticleRichText:tft-home-card--article", "isAssetHighlight:tft-home-card--asset"],
                layout: n(25),
                data: null,
                isArticleRichText: i.Ember.computed("data.type", (function() {
                    return "articleRichText" === this.get("data.type")
                })),
                isAssetHighlight: i.Ember.computed("data.type", (function() {
                    return "assetHighlight" === this.get("data.type")
                })),
                richTextBody: i.Ember.computed.alias("data.richText.body"),
                headerTitle: i.Ember.computed.alias("data.header.title"),
                headerSubtitle: i.Ember.computed.alias("data.header.subtitle"),
                headerSupertitle: i.Ember.computed.alias("data.header.supertitle"),
                headerLinks: i.Ember.computed.alias("data.header.links"),
                firstCard: i.Ember.computed("headerLinks", (function() {
                    const e = this.get("headerLinks");
                    return e && e.length > 0 ? e[0] : null
                })),
                firstCardMediaUrl: i.Ember.computed.alias("firstCard.media.url"),
                firstCardTitle: i.Ember.computed.alias("firstCard.title"),
                firstCardActionType: i.Ember.computed.alias("firstCard.action.type"),
                firstCardUrl: i.Ember.computed.alias("firstCard.action.payload.url"),
                firstCardYoutubeId: i.Ember.computed.alias("firstCard.action.payload.youtubeId"),
                secondCard: i.Ember.computed("headerLinks", (function() {
                    const e = this.get("headerLinks");
                    return e && e.length > 1 ? e[1] : null
                })),
                secondCardMediaUrl: i.Ember.computed.alias("secondCard.media.url"),
                secondCardTitle: i.Ember.computed.alias("secondCard.title"),
                secondCardActionType: i.Ember.computed.alias("secondCard.action.type"),
                secondCardUrl: i.Ember.computed.alias("secondCard.action.payload.url"),
                secondCardYoutubeId: i.Ember.computed.alias("secondCard.action.payload.youtubeId"),
                didInsertElement() {
                    this._super(...arguments), this.element.addEventListener("mouseenter", this._onMouseEnter.bind(this)), this.element.addEventListener("mouseleave", this._onMouseLeave.bind(this))
                },
                willDestroyElement() {
                    this._super(...arguments), this.element.removeEventListener("mouseenter", this._onMouseEnter.bind(this)), this.element.removeEventListener("mouseleave", this._onMouseLeave.bind(this))
                },
                _onMouseEnter() {
                    this.element.dispatchEvent(new CustomEvent("tft-home-card-hovered", {
                        bubbles: !0
                    }))
                },
                _onMouseLeave() {
                    this.element.dispatchEvent(new CustomEvent("tft-home-card-unhovered", {
                        bubbles: !0
                    }))
                },
                _handleLinkAction(e, t, n) {
                    "youtube_video" !== e ? t && (window.open(t, "_blank"), this.element.dispatchEvent(new CustomEvent("tft-home-card-clicked", {
                        bubbles: !0
                    }))) : n && this._openYoutubeModal(n)
                },
                _openYoutubeModal(e) {
                    const t = `https://www.youtube.com/embed/${e}`,
                        n = document.createElement("iframe");
                    n.src = t, n.width = "100%", n.height = "100%", n.setAttribute("frameborder", "0"), n.setAttribute("allow", "encrypted-media"), n.setAttribute("allowfullscreen", "");
                    const a = i.navigation.getFullPageModalManager().open({
                            data: {
                                contents: n
                            }
                        }),
                        s = () => {
                            n.src = "", a.removeEventListener("fullPageModalClose", s)
                        };
                    a.addEventListener("fullPageModalClose", s)
                },
                actions: {
                    onFirstCardClick() {
                        this._handleLinkAction(this.get("firstCardActionType"), this.get("firstCardUrl"), this.get("firstCardYoutubeId"))
                    },
                    onSecondCardClick() {
                        this._handleLinkAction(this.get("secondCardActionType"), this.get("secondCardUrl"), this.get("secondCardYoutubeId"))
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "2QfDQKoA",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-card.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-card.styl\\" js-path=\\"null\\" "],["text","\\n"],["block",["if"],[["get",["isAssetHighlight"]]],null,2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","button",[]],["static-attr","class","tft-home-card__card"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"onSecondCardClick"],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-home-card__card-image"],["flush-element"],["text","\\n    "],["open-element","img",[]],["dynamic-attr","src",["unknown",["secondCardMediaUrl"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tft-home-card__card-image-gradient"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","class","tft-home-card__external-link tft-home-card__external-link--hover"],["static-attr","src","fe/lol-navigation/activity-center/external-link-hover.svg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","class","tft-home-card__external-link"],["static-attr","src","fe/lol-navigation/activity-center/external-link-rest.svg"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-home-card__card-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-home-card__card-label"],["flush-element"],["append",["unknown",["secondCardTitle"]],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["open-element","button",[]],["static-attr","class","tft-home-card__card"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"onFirstCardClick"],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-home-card__card-image"],["flush-element"],["text","\\n    "],["open-element","img",[]],["dynamic-attr","src",["unknown",["firstCardMediaUrl"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tft-home-card__card-image-gradient"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","class","tft-home-card__external-link tft-home-card__external-link--hover"],["static-attr","src","fe/lol-navigation/activity-center/external-link-hover.svg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","class","tft-home-card__external-link"],["static-attr","src","fe/lol-navigation/activity-center/external-link-rest.svg"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-home-card__card-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-home-card__card-label"],["flush-element"],["append",["unknown",["firstCardTitle"]],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["firstCard"]]],null,1],["block",["if"],[["get",["secondCard"]]],null,0]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(27), t.default = i.Ember.Component.extend({
                classNames: ["tft-home-header"],
                layout: n(28),
                headerData: null
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "I79rKYnF",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-header.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-header.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-home-header_container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["headerData","imageUrl"]]],null,4],["text","\\n"],["block",["if"],[["get",["headerData","supertitle"]]],null,3],["text","\\n"],["block",["if"],[["get",["headerData","title"]]],null,2],["text","\\n"],["block",["if"],[["get",["headerData","subtitle"]]],null,1],["text","\\n"],["block",["if"],[["get",["headerData","description"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","p",[]],["static-attr","class","tft-home-header_description"],["flush-element"],["text","\\n    "],["append",["helper",["sanitize"],[["get",["headerData","description"]]],null],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","h4",[]],["static-attr","class","tft-home-header_subtitle"],["flush-element"],["text","\\n    "],["append",["helper",["sanitize"],[["get",["headerData","subtitle"]]],null],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","h1",[]],["static-attr","class","tft-home-header_title"],["flush-element"],["text","\\n    "],["append",["helper",["sanitize"],[["get",["headerData","title"]]],null],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","tft-home-header_super-title_container"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","class","tft-home-header_super-title"],["flush-element"],["text","\\n      "],["append",["helper",["sanitize"],[["get",["headerData","supertitle"]]],null],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","img",[]],["static-attr","class","tft-home-header_image"],["dynamic-attr","src",["unknown",["headerData","imageUrl"]],null],["static-attr","alt",""],["flush-element"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(30), t.default = i.Ember.Component.extend({
                classNames: ["tft-home-background"],
                layout: n(31),
                src: null,
                imageSrc: i.Ember.computed("src", (function() {
                    return this.get("src") || "/lol-game-data/assets/ASSETS/UX/TFT/OutOfGame/Backgrounds/gameflow.jpg"
                })),
                imageClass: i.Ember.computed("src", (function() {
                    return this.get("src") ? "" : "tft-home-background__image--default"
                })),
                didInsertElement() {
                    this._super(...arguments), this._preloadMedia()
                },
                _preloadMedia() {
                    if (this.get("onMediaLoaded")) {
                        const e = this.get("src"),
                            t = [];
                        if (e) {
                            const n = new i.Ember.RSVP.Promise(((t, n) => {
                                const i = new Image;
                                i.src = e, i.onload = t({
                                    url: e
                                }), i.onerror = n({
                                    url: e
                                })
                            }));
                            t.push(n)
                        }
                        i.Ember.RSVP.allSettled(t).then((() => {
                            this.get("onMediaLoaded")()
                        })).catch((e => {
                            i.logger.info(`Error Loading Media: ${e}`), this.get("onMediaLoaded")()
                        }))
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "xLAWxC/1",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-background.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-background.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","img",[]],["dynamic-attr","class",["concat",["tft-home-background__image ",["unknown",["imageClass"]]]]],["dynamic-attr","src",["unknown",["imageSrc"]],null],["static-attr","alt",""],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(33), t.default = i.Ember.Component.extend({
                classNames: ["tft-home-loading-screen"],
                layout: n(34)
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "/5ekeBdg",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-loading-screen.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-loading-screen.styl\\" js-path=\\"null\\" "],["text","\\n"],["append",["helper",["uikit-spinner"],null,[["class","width","height"],["tft-home-loading-screen__spinner","40px","40px"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(36), t.default = i.Ember.Component.extend({
                classNames: ["tft-launch-button-wrapper"],
                layout: n(37),
                isEnabled: !1,
                actions: {
                    handleClick() {
                        this.get("isEnabled") && this.get("onClick")()
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "JfrH+11C",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-launch-button.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-launch-button.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-launch-button-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["tft-launch-button-bg ",["helper",["unless"],[["get",["isEnabled"]],"disabled"],null]]]],["flush-element"],["text","\\n    "],["open-element","button",[]],["dynamic-attr","class",["concat",["tft-launch-button-btn ",["helper",["unless"],[["get",["isEnabled"]],"disabled"],null]]]],["modifier",["action"],[["get",[null]],"handleClick"]],["flush-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","tft-launch-button-label"],["flush-element"],["append",["unknown",["buttonText"]],false],["close-element"],["text","\\n      "],["yield","default"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "XfSrU8j1",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\application.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","rcp-fe-tft-application"],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "ARbU6/v2",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\index.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["append",["helper",["tft-home-content"],null,[["pageContent","isLoading"],[["get",["pageContent"]],["get",["isLoading"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(1);
            n(41), t.default = i.Ember.Component.extend({
                classNames: ["tft-bridge-announcement-modal"],
                tra: i.tra,
                layout: n(42),
                bridgeService: i.Ember.inject.service("bridge"),
                didInsertElement() {
                    this._super(...arguments)
                },
                willDestroyElement() {
                    this._super(...arguments)
                },
                hasNotSeenAnnouncement: i.Ember.computed.not("bridgeService.bridgeAnnouncementSeen"),
                showBridgeAnnouncement: i.Ember.computed.and("bridgeService.bridgeEnabled", "hasNotSeenAnnouncement"),
                bridgeAnnouncementBody: i.Ember.computed((function() {
                    const e = `<a class='' href='${this.get("tra.pardon_our_dust_link")}' target='_blank'>${this.get("tra.pardon_our_dust_link_text")}</a>`,
                        t = this.get("tra").formatString("pardon_our_dust_modal_body", {
                            link: e
                        });
                    return i.htmlSanitizer.sanitize(t)
                })),
                actions: {
                    confirm: function() {
                        this.get("bridgeService").recordBridgeAnnouncementSeen()
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const i = n(1).Ember;
            e.exports = i.HTMLBars.template({
                id: "daE4kkFT",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-bridge-announcement-modal.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-bridge-announcement-modal.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lc-alert-modal",[]],["dynamic-attr","open",["unknown",["showBridgeAnnouncement"]],null],["dynamic-attr","onHide",["helper",["action"],[["get",[null]],"confirm"],null],null],["dynamic-attr","okText",["unknown",["tra","dialog_accept"]],null],["dynamic-attr","dismissible",true,null],["static-attr","dismissibleType","inside"],["flush-element"],["text","\\n  "],["open-element","lc-modal-content",[]],["flush-element"],["text","\\n    "],["open-element","lol-uikit-content-block",[]],["static-attr","type","dialog-large"],["flush-element"],["text","\\n      "],["open-element","h5",[]],["flush-element"],["append",["unknown",["tra","pardon_our_dust_modal_title"]],false],["close-element"],["text","\\n      "],["open-element","p",[]],["flush-element"],["append",["unknown",["bridgeAnnouncementBody"]],true],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }],
        t = {};

    function n(i) {
        var a = t[i];
        if (void 0 !== a) return a.exports;
        var s = t[i] = {
            exports: {}
        };
        return e[i].call(s.exports, s, s.exports, n), s.exports
    }
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    n(0)
})();
//# sourceMappingURL=rcp-fe-tft.js.map