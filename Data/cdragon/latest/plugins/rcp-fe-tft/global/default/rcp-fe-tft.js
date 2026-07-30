(() => {
    var e = [function(e, t, n) {
            "use strict";
            var a, l = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
                    void 0 === a && (a = n);
                    var l = Object.getOwnPropertyDescriptor(t, n);
                    l && !("get" in l ? !t.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, a, l)
                } : function(e, t, n, a) {
                    void 0 === a && (a = n), e[a] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || (a = function(e) {
                    return a = Object.getOwnPropertyNames || function(e) {
                        var t = [];
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
                        return t
                    }, a(e)
                }, function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n = a(e), i = 0; i < n.length; i++) "default" !== n[i] && l(t, e, n[i]);
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
                c = i(n(2)),
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
                        htmlSanitizer: e => e.get("rcp-fe-common-libs").getHtmlSanitizer(1)
                    }), await e.getOptional("rcp-fe-lol-tft-team-planner").then((e => r.default.add({
                        TeamPlanner: e
                    }))), await e.getOptional("rcp-fe-lol-objectives").then((e => r.default.add({
                        Objectives: e
                    })));
                    const t = e.get("rcp-fe-lol-l10n").tra().overlay("/fe/lol-l10n/trans.json").overlay("/fe/tft/trans.json"),
                        a = r.default.EmberL10n(r.default.Ember, t);
                    await r.default.add({
                        dataBinding: r.default.dataBinding.bindTo(r.default.websocket),
                        tra: t,
                        traService: a
                    }), await r.default.tra.ready(), await r.default.traService.ready(), await r.default.add({
                        EmberApplicationFactory: e => e.get("rcp-fe-ember-libs").getEmberApplicationFactory()
                    });
                    const l = await
                    function(e, t) {
                        const a = t.viewport.getApiKey(e),
                            l = t.viewport.fullScreen().getScreenRoot(a, e).getElement(),
                            s = {
                                name: e,
                                ComponentFactory: t.ComponentFactory,
                                rootElement: l,
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
                                TftFullLaunchAnnouncementModalComponent: n(35).default,
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
                                    "tft-full-launch-announcement-modal": n(37)
                                }
                            },
                            i = t.SharedComponents.getSharedEmberComponents().EmberCollectionApi.registerToFactoryDefinition(s);
                        return t.EmberApplicationFactory.setFactoryDefinition(e, i, {
                            EMBER_CLI_COMPAT: !0
                        }), t.ComponentFactory.create(e).emberAppInstancePromise
                    }(c.pluginName, r.default), s = new c.default(l);
                    return r.default.api = s, {
                        api: s,
                        getBridgeComponents: function() {
                            return {
                                BridgeService: n(11).default,
                                TftPersistentTooltipComponent: n(12).default,
                                PardonOurDustButtonComponent: n(15).default
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
            const a = {
                init: function(e, n) {
                    return t = e, this.add(n)
                },
                _getValue: function(e, n) {
                    let a;
                    return "function" == typeof n ? (a = n(t), a || console.warn("The function for key " + e + " returned a falsy value: ", a)) : "string" == typeof n ? (a = t.get(n), a || console.warn("The provider `get` invocation for the key " + e + " returned a falsy value: ", a)) : "object" == typeof n && (a = n), a
                },
                add: function(e) {
                    e = e || {};
                    const t = [],
                        n = this;
                    return Object.keys(e).forEach((function(a) {
                        const l = e[a],
                            s = n._getValue(a, l);
                        s && s.then ? (s.then((function(e) {
                            e || console.warn("The promise for the key " + a + " resolved with a falsy value: ", e), n._addValue(a, e)
                        })), t.push(s)) : n._addValue(a, s)
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
            e.exports = a
        }, function(e, t, n) {
            "use strict";
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pluginName = void 0;
            const l = a(n(3));
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
                    this._tft = new l.default(e, {
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
            const a = n(1);
            t.pluginName = "rcp-fe-tft";
            t.default = class {
                screenRoot;
                viewportApiKey;
                app;
                navigationItem;
                _services;
                constructor(e, n) {
                    this.viewportApiKey = a.viewport.getApiKey(t.pluginName), this.screenRoot = a.viewport.main().getScreenRoot(this.viewportApiKey, t.pluginName), this.app = e, this.navigationItem = null, this._services = n
                }
                init() {
                    a.dataBinding.observe("/lol-client-config/v3/client-config/lol.client_settings.tft.new_tab.enabled", this, (e => {
                        if (e) {
                            if (this.navigationItem) return;
                            this.navigationItem = a.navigation.addItem({
                                show: () => this.showTFTMenu(),
                                hide: () => this.hideTFTMenu()
                            }, {
                                displayName: a.tra.get("tft_navbar_name"),
                                id: t.pluginName
                            }), this.screenRoot.getElement().appendChild(this.app.rootElement)
                        } else this.navigationItem && (a.navigation.removeItem(this.navigationItem), this.navigationItem = null)
                    }))
                }
                showTFTMenu() {
                    this.screenRoot.bump().then((() => {
                        this._services.fullLaunchService.setTFTNewTabVisible(!0), this._services.tftHomeService.getTftHomeContent("lol-client-tft-home-page-content").then((e => {
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
            const a = n(1).Ember.Router.extend({
                location: "none"
            });
            t.default = a
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(7), t.default = a.Ember.Controller.extend({})
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            t.default = a.Ember.Controller.extend({
                gameflowService: a.Ember.inject.service("gameflow"),
                lobbyService: a.Ember.inject.service("lobby"),
                matchmakingService: a.Ember.inject.service("matchmaking"),
                tftHomeService: a.Ember.inject.service("tft-home"),
                pageContent: null,
                isLoading: !0,
                init: function() {
                    this._super(...arguments), this.get("tftHomeService").getTftHomeContent("lol-client-tft-home-page-content").then((e => {
                        this.set("pageContent", e)
                    })).catch((() => {})).finally((() => {
                        this.set("isLoading", !1)
                    }))
                },
                actions: {
                    launchTFT: function() {
                        this.get("gameflowService").getGameflowPhase().then((e => "Lobby" === e ? a.UIKit.getModalManager().add({
                            type: "DialogConfirm",
                            data: {
                                contents: this.get("tra.leave_lobby_dialog_contents"),
                                acceptText: this.get("tra.dialog_accept"),
                                declineText: this.get("tra.dialog_decline")
                            },
                            show: !0
                        }).acceptPromise.then((() => {
                            this.get("lobbyService").leaveParty()
                        })) : "Matchmaking" === e ? a.UIKit.getModalManager().add({
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
            const a = n(1),
                l = "/lol-gameflow/v1/gameflow-phase",
                s = "/lol-gameflow/v1/launch-tft";
            t.default = a.Ember.Service.extend({
                init: function() {
                    this._super(...arguments)
                },
                getGameflowPhase: function() {
                    return a.dataBinding.get(l)
                },
                launchTFT: function() {
                    a.dataBinding.post(s)
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
            const a = n(1),
                l = "/lol-lobby/v2/lobby/matchmaking/search",
                s = "/lol-lobby/v2/lobby";
            t.default = a.Ember.Service.extend({
                init: function() {
                    this._super(...arguments)
                },
                cancelMatchmaking: function() {
                    a.dataBinding.delete(l)
                },
                leaveParty: function() {
                    a.dataBinding.delete(s)
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
            const a = n(1),
                l = "/lol-client-config/v3/client-config/lol.client_settings.tft.bridge_enabled",
                s = "/lol-settings/v2/local/lol-user-experience",
                i = "/lol-gameflow/v1/session";
            t.default = a.Ember.Service.extend({
                locale: null,
                init: function() {
                    this._super(...arguments), this.set("bridgeEnabled", !1), this.set("showPardonOurDustButton", !1), this.set("hasSeenBridgeTftTooltip", !1), this.set("showPardonOurDustPip", !0), this.set("blockPartyInvites", !1), this.set("blockTFTMode", !1), a.dataBinding.observe(l, this, (e => {
                        this.set("bridgeEnabled", e), this.set("showPardonOurDustButton", e)
                    })), a.dataBinding.get("/riotclient/system-info/v1/basic-info").then((e => {
                        const t = e.operatingSystem.versionMajor,
                            n = parseInt(t) || 0,
                            a = "Windows" === e.operatingSystem.platform && n >= 10;
                        this.set("blockPartyInvites", !a), this.set("blockTFTMode", !a)
                    })), a.dataBinding.observe(s, this, (e => {
                        this.set("hasSeenBridgeTftTooltip", e?.data?.hasSeenBridgeTftTooltip ?? !1)
                    })), a.dataBinding.observe(s, this, (e => {
                        this.set("showPardonOurDustPip", e?.data?.showPardonOurDustPip ?? !0)
                    })), a.dataBinding.addObserver(i, this, (e => {
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
                    this.get("hasSeenBridgeTftTooltip") || a.dataBinding.patch(s, {
                        data: {
                            hasSeenBridgeTftTooltip: !0
                        },
                        schemaVersion: 3
                    })
                },
                recordPersistedClickedPardonOurDustButton() {
                    this.get("showPardonOurDustPip") && a.dataBinding.patch(s, {
                        data: {
                            showPardonOurDustPip: !1
                        },
                        schemaVersion: 3
                    })
                },
                willDestroy: function() {
                    this._super(...arguments), a.dataBinding.unobserve(l, this), a.dataBinding.unobserve(s, this), a.dataBinding.removeObserver(i, this)
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(13);
            const l = "wide",
                s = "compact";
            t.default = a.Ember.Component.extend({
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
                    if (this._super(...arguments), a.ModalManager.addModalQueueObserver(this, this.checkModalQueueEmpty), a.TeamPlanner && this.get("hideWhenTeamPlannerVisible")) {
                        const e = a.TeamPlanner.addVisibilityObserverCallback((e => {
                            this.set("isTeamPlannerVisible", e)
                        }));
                        this.set("_visibilityObserverIndex", e)
                    }
                    if ((0, a.getProvider)().getOptional("rcp-fe-lol-social").then((e => {
                            if (this.isDestroyed || this.isDestroying) return;
                            const t = e.addChatWindowVisibilityObserverCallback((e => {
                                this.set("isChatWindowOpen", e)
                            }));
                            this.set("_chatWindowVisibilityObserverIndex", t), this.set("_socialPlugin", e)
                        }), (e => a.logger.error("Provider getOptional failure", e))), a.Objectives) {
                        const e = a.Objectives.addObjectivesModalVisibilityObserverCallback((e => {
                            this.set("isObjectivesModalOpen", e)
                        }));
                        this.set("_objectivesModalvisibilityObserverIndex", e)
                    }
                },
                willDestroyElement() {
                    this._super(...arguments), a.ModalManager.removeModalQueueObserver(this.checkModalQueueEmpty), a.TeamPlanner && void 0 !== this.get("_visibilityObserverIndex") && a.TeamPlanner.removeVisibilityObserverCallback(this.get("_visibilityObserverIndex"));
                    const e = this.get("_socialPlugin"),
                        t = this.get("_chatWindowVisibilityObserverIndex");
                    e && void 0 !== t && e.removeChatWindowVisibilityObserverCallback(this.get("_chatWindowVisibilityObserverIndex")), a.Objectives && void 0 !== this.get("_objectivesModalvisibilityObserverIndex") && a.Objectives.removeObjectivesModalVisibilityObserverCallback(this.get("_objectivesModalvisibilityObserverIndex"))
                },
                isModalQueueEmpty: !0,
                checkModalQueueEmpty(e) {
                    this.set("isModalQueueEmpty", e)
                },
                assignTooltipVariant() {
                    let e = "tft-persistent-tooltip";
                    switch (this.tooltipStyle) {
                        case l:
                            e = "tft-persistent-tooltip-wide";
                            break;
                        case s:
                            e = "tft-persistent-tooltip-compact"
                    }
                    this.set("tooltipClass", e)
                },
                shouldShowTooltip: a.Ember.computed("isModalQueueEmpty", "hideWhenTeamPlannerVisible", "isTeamPlannerVisible", "isChatWindowOpen", "isObjectivesModalOpen", (function() {
                    const e = this.get("isModalQueueEmpty"),
                        t = this.get("hideWhenTeamPlannerVisible") && this.get("isTeamPlannerVisible"),
                        n = this.get("isChatWindowOpen"),
                        a = this.get("isObjectivesModalOpen");
                    return e && !t && !n && !a
                }))
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "jcwnRAT6",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-persistent-tooltip.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-persistent-tooltip.styl\\" js-path=\\"null\\" "],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type","show","offsetY"],["top","persistent",["get",["shouldShowTooltip"]],["get",["tooltipOffsetY"]]]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-small"],["dynamic-attr","class",["unknown",["tooltipClass"]],null],["flush-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["text","\\n        "],["append",["helper",["sanitize"],[["get",["tooltipText"]]],null],false],["text","\\n    "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(16), t.default = a.Ember.Component.extend({
                classNames: ["rcp-fe-tft-pardon-our-dust"],
                tra: a.tra,
                layout: n(17),
                bridgeService: a.Ember.inject.service("bridge"),
                pardonOurDustContents: a.Ember.computed("bridgeService.locale", (function() {
                    const e = `<a class='' href='${this.get("tra.pardon_our_dust_link")}' target='_blank'>${this.get("tra.pardon_our_dust_link_text")}</a>`,
                        t = this.get("tra").formatString("pardon_our_dust_modal_body", {
                            link: e
                        }),
                        n = a.htmlSanitizer.sanitize(t);
                    return a.UIKit.getTemplateHelper().contentBlockDialog(this.get("tra.pardon_our_dust_modal_title"), n, "dialog-large")
                })),
                showPardonOurDustPip: a.Ember.computed("bridgeService.showPardonOurDustPip", (function() {
                    return this.get("bridgeService.showPardonOurDustPip")
                })),
                actions: {
                    pardonOurDustClicked: function() {
                        const e = a.UIKit.getModalManager(),
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
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "K+FtV/tj",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\pardon-our-dust-button.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\pardon-our-dust-button.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-pardon-our-dust"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"pardonOurDustClicked"],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-pardon-our-dust-label"],["flush-element"],["append",["unknown",["tra","pardon_our_dust_button_text"]],false],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","src","/fe/tft/images/pardon-our-dust-message-button.png"],["static-attr","class","tft-pardon-our-dust-img-main"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","src","/fe/tft/images/pardon-our-dust-message-button-hovered.png"],["static-attr","class","tft-pardon-our-dust-img-hover"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","src","/fe/tft/images/pardon-our-dust-message-button-pressed.png"],["static-attr","class","tft-pardon-our-dust-img-clicked"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["showPardonOurDustPip"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","div",[]],["static-attr","class","tft-pardon-our-dust-pip"],["flush-element"],["text","\\n  "],["append",["unknown",["call-to-action-pip"]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setFullLaunchProxy = function(e) {
                d = e
            };
            const a = n(1),
                l = "/lol-client-config/v3/client-config/",
                s = l + "lol.client_settings.tft.full_launch_enabled",
                i = "/lol-settings/v2/account/LCUPreferences/lol-tft",
                o = "tftFullLaunchAnnouncementSeen",
                r = "/lol-maps/v2/maps",
                c = l + "lol.client_settings.tft.new_tab.overrideUrl";
            let d = null;
            t.default = a.Ember.Service.extend({
                mapData: null,
                homeOverrideUrl: "",
                init: function() {
                    this._super(...arguments), d && (d._registerLaunchTFTCallback(this.launchTFT.bind(this)), d._registerIsFullLaunchEnabledCallback(this.isFullLaunchEnabled.bind(this))), this.set("fullLaunchEnabled", !1), this.set("directLaunchEnabled", !0), this.set("TFTNewTabVisible", !1), this.set("fullLaunchAnnouncementSeen", !1), a.dataBinding.observe(s, this, (e => {
                        this.set("fullLaunchEnabled", e)
                    })), a.dataBinding.observe(i, this, (e => {
                        e && e.data && this.set("fullLaunchAnnouncementSeen", e.data[o] || !1)
                    })), a.dataBinding.observe(r, this, (e => {
                        if (e)
                            for (const t of e)
                                if (22 === t.id && "TFT" === t.gameMode && "" === t.gameMutator) return void this.set("mapData", t)
                    })), a.dataBinding.observe(c, this, (e => {
                        this.set("homeOverrideUrl", e)
                    })), this.sharedAudioManager = a.navigation?.activityCenter?.getHomeHubsSharedAudioManager()
                },
                isFullLaunchEnabled: function() {
                    return this.get("fullLaunchEnabled")
                },
                isDirectLaunchEnabled: function() {
                    return this.get("directLaunchEnabled")
                },
                willDestroy: function() {
                    this._super(...arguments), a.dataBinding.unobserve(s, this), a.dataBinding.unobserve(i, this), a.dataBinding.unobserve(r, this), a.dataBinding.unobserve(c, this), d && d._unregisterLaunchTFTCallback()
                },
                launchTFT: function() {
                    a.dataBinding.post("/lol-gameflow/v1/launch-tft")
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
                recordFullLaunchAnnouncementSeen: function() {
                    this.set("fullLaunchAnnouncementSeen", !0);
                    const e = {};
                    e[o] = !0, a.dataBinding.patch(i, {
                        data: e,
                        schemaVersion: 1
                    })
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            t.default = a.Ember.Service.extend({
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
                        n = await Promise.race([a.dataBinding.get(`/lol-tft/v1/tft/home/content/${e}`, {
                            skipCache: !0
                        }), t]);
                    if (!n) throw new Error("No content received from API");
                    return n
                }
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(21);
            t.default = a.Ember.Component.extend({
                classNames: ["rcp-fe-tft-home-content"],
                classNameBindings: ["shouldShowIframe:iframe-view"],
                tra: a.tra,
                layout: n(22),
                fullLaunchService: a.Ember.inject.service("full-launch"),
                bridgeService: a.Ember.inject.service("bridge"),
                pageContent: null,
                isLoading: !1,
                landingRichTextCard: a.Ember.computed("pageContent", (function() {
                    return (this.get("pageContent.blades") || []).find((e => "landingRichText" === e.type)) || null
                })),
                richTextBody: a.Ember.computed("landingRichTextCard", (function() {
                    return this.get("landingRichTextCard.richText.body") || null
                })),
                backgroundContent: a.Ember.computed.alias("pageContent.metaImage.url"),
                assetHighlightCard: a.Ember.computed("pageContent", (function() {
                    return (this.get("pageContent.blades") || []).find((e => "assetHighlight" === e.type)) || null
                })),
                headerData: a.Ember.computed("assetHighlightCard", (function() {
                    const e = this.get("assetHighlightCard.header");
                    return e ? {
                        supertitle: e.supertitle || null,
                        title: e.title || null,
                        subtitle: e.subtitle || null,
                        description: e.description ? e.description.body : null
                    } : null
                })),
                directLaunchDisabled: a.Ember.computed.not("fullLaunchService.directLaunchEnabled"),
                blockTFTMode: a.Ember.computed.alias("bridgeService.blockTFTMode"),
                launchButtonDisabled: a.Ember.computed.or("directLaunchDisabled", "blockTFTMode"),
                newTabVisible: a.Ember.computed.alias("fullLaunchService.TFTNewTabVisible"),
                showTooltip: a.Ember.computed.and("launchButtonDisabled", "newTabVisible"),
                tooltipText: a.Ember.computed("tra", "directLaunchDisabled", "blockTFTMode", (function() {
                    if (this.get("blockTFTMode")) {
                        return `${this.get("tra.tft_mode_unsupportedclientplatform_tooltip")} ${this.get("tra.tft_mode_unsupportedclientplatform_link")}`
                    }
                    return this.get("directLaunchDisabled") ? this.get("tra.tft_new_tab_launch_button_direct_launch_disabled") : ""
                })),
                shouldShowIframe: !1,
                tftHomeOverrideUrl: null,
                isIframeMode: a.Ember.computed.bool("tftHomeOverrideUrl"),
                isHidden: a.Ember.computed.not("newTabVisible"),
                audioManager: a.Ember.computed("fullLaunchService", (function() {
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
                        if (!this.get("newTabVisible")) return a.Ember.run.cancel(this._activateRetry), this._activateAttempts = 0, void this.set("shouldShowIframe", !1);
                        if (!this.element || !this.element.isConnected) return a.Ember.run.cancel(this._activateRetry), 60 == this._activateAttempts++ && a.logger.error("tft-home-content: element still not connected after threshold; continuing to retry"), void(this._activateRetry = a.Ember.run.later(this, this.tryActivateIframe, 16));
                        this._activateAttempts = 0, this.set("shouldShowIframe", !0)
                    }
                },
                willDestroyElement() {
                    this._activateRetry && (a.Ember.run.cancel(this._activateRetry), this._activateRetry = null), this.removeObserver("fullLaunchService.homeOverrideUrl", this, this.setOverrideUrlCache), this.removeObserver("newTabVisible", this, this.tryActivateIframe), this._super(...arguments)
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
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "PgvY3Ejj",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-content.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-content.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","section",[]],["static-attr","class","tft-home-content"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isIframeMode"]]],null,6,4],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["unknown",["tft-home-loading-screen"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["append",["helper",["tft-persistent-tooltip"],null,[["tooltipText","tooltipOffsetY","tooltipStyle","hideWhenTeamPlannerVisible"],[["get",["tooltipText"]],-6,"compact",true]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","tft-home-content__cards"],["flush-element"],["text","\\n          "],["append",["helper",["tft-home-card"],null,[["data"],[["get",["assetHighlightCard"]]]]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["tft-home-background"],null,[["src"],[["get",["backgroundContent"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["backgroundContent"]]],null,3],["text","\\n    "],["open-element","section",[]],["static-attr","class","tft-home-content"],["flush-element"],["text","\\n      "],["open-element","main",[]],["static-attr","class","tft-home-content__main-content"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","tft-home-content__header"],["flush-element"],["text","\\n          "],["append",["helper",["tft-home-header"],null,[["headerData"],[["get",["headerData"]]]]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","footer",[]],["static-attr","class","tft-home-content__footer"],["flush-element"],["text","\\n"],["block",["if"],[["get",["assetHighlightCard"]]],null,2],["text","\\n        "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","tft-launch-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"launchTFT"],null],null],["dynamic-attr","disabled",["unknown",["launchButtonDisabled"]],null],["flush-element"],["text","\\n          "],["append",["unknown",["tra","tft_launch_button"]],false],["text","\\n"],["block",["if"],[["get",["showTooltip"]]],null,1],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["isLoading"]]],null,0]],"locals":[]},{"statements":[["text","    "],["append",["helper",["managed-iframe"],null,[["url","isHidden","audioManager","isQuickLoadEnabled"],[["get",["tftHomeOverrideUrl"]],["get",["isHidden"]],["get",["audioManager"]],true]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["shouldShowIframe"]]],null,5]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(24), t.default = a.Ember.Component.extend({
                classNames: ["tft-home-card"],
                classNameBindings: ["isArticleRichText:tft-home-card--article", "isAssetHighlight:tft-home-card--asset"],
                layout: n(25),
                data: null,
                isArticleRichText: a.Ember.computed("data.type", (function() {
                    return "articleRichText" === this.get("data.type")
                })),
                isAssetHighlight: a.Ember.computed("data.type", (function() {
                    return "assetHighlight" === this.get("data.type")
                })),
                richTextBody: a.Ember.computed.alias("data.richText.body"),
                headerTitle: a.Ember.computed.alias("data.header.title"),
                headerSubtitle: a.Ember.computed.alias("data.header.subtitle"),
                headerSupertitle: a.Ember.computed.alias("data.header.supertitle"),
                headerLinks: a.Ember.computed.alias("data.header.links"),
                firstCard: a.Ember.computed("headerLinks", (function() {
                    const e = this.get("headerLinks");
                    return e && e.length > 0 ? e[0] : null
                })),
                firstCardMediaUrl: a.Ember.computed.alias("firstCard.media.url"),
                firstCardTitle: a.Ember.computed.alias("firstCard.title"),
                firstCardActionType: a.Ember.computed.alias("firstCard.action.type"),
                firstCardUrl: a.Ember.computed.alias("firstCard.action.payload.url"),
                firstCardYoutubeId: a.Ember.computed.alias("firstCard.action.payload.youtubeId"),
                secondCard: a.Ember.computed("headerLinks", (function() {
                    const e = this.get("headerLinks");
                    return e && e.length > 1 ? e[1] : null
                })),
                secondCardMediaUrl: a.Ember.computed.alias("secondCard.media.url"),
                secondCardTitle: a.Ember.computed.alias("secondCard.title"),
                secondCardActionType: a.Ember.computed.alias("secondCard.action.type"),
                secondCardUrl: a.Ember.computed.alias("secondCard.action.payload.url"),
                secondCardYoutubeId: a.Ember.computed.alias("secondCard.action.payload.youtubeId"),
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
                    const l = a.navigation.getFullPageModalManager().open({
                            data: {
                                contents: n
                            }
                        }),
                        s = () => {
                            n.src = "", l.removeEventListener("fullPageModalClose", s)
                        };
                    l.addEventListener("fullPageModalClose", s)
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
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "MDwSlPz1",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-card.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-card.styl\\" js-path=\\"null\\" "],["text","\\n"],["block",["if"],[["get",["isAssetHighlight"]]],null,2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","button",[]],["static-attr","class","tft-home-card__card"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"onSecondCardClick"],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-home-card__card-image"],["flush-element"],["text","\\n    "],["open-element","img",[]],["dynamic-attr","src",["unknown",["secondCardMediaUrl"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tft-home-card__card-image-gradient"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","class","tft-home-card__external-link tft-home-card__external-link--hover"],["static-attr","src","fe/lol-navigation/activity-center/external-link-hover.svg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","class","tft-home-card__external-link"],["static-attr","src","fe/lol-navigation/activity-center/external-link-rest.svg"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-home-card__card-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-home-card__card-label"],["flush-element"],["append",["unknown",["secondCardTitle"]],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["open-element","button",[]],["static-attr","class","tft-home-card__card"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"onFirstCardClick"],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-home-card__card-image"],["flush-element"],["text","\\n    "],["open-element","img",[]],["dynamic-attr","src",["unknown",["firstCardMediaUrl"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tft-home-card__card-image-gradient"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","class","tft-home-card__external-link tft-home-card__external-link--hover"],["static-attr","src","fe/lol-navigation/activity-center/external-link-hover.svg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","class","tft-home-card__external-link"],["static-attr","src","fe/lol-navigation/activity-center/external-link-rest.svg"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-home-card__card-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-home-card__card-label"],["flush-element"],["append",["unknown",["firstCardTitle"]],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["firstCard"]]],null,1],["block",["if"],[["get",["secondCard"]]],null,0]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(27), t.default = a.Ember.Component.extend({
                classNames: ["tft-home-header"],
                layout: n(28),
                headerData: null
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "6DCjKXRS",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-header.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-header.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-home-header_container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["headerData","supertitle"]]],null,3],["text","\\n"],["block",["if"],[["get",["headerData","title"]]],null,2],["text","\\n"],["block",["if"],[["get",["headerData","subtitle"]]],null,1],["text","\\n"],["block",["if"],[["get",["headerData","description"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","p",[]],["static-attr","class","tft-home-header_description"],["flush-element"],["text","\\n    "],["append",["helper",["sanitize"],[["get",["headerData","description"]]],null],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","h4",[]],["static-attr","class","tft-home-header_subtitle"],["flush-element"],["text","\\n    "],["append",["helper",["sanitize"],[["get",["headerData","subtitle"]]],null],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","h1",[]],["static-attr","class","tft-home-header_title"],["flush-element"],["text","\\n    "],["append",["helper",["sanitize"],[["get",["headerData","title"]]],null],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","tft-home-header_super-title_container"],["flush-element"],["text","\\n    "],["open-element","h5",[]],["static-attr","class","tft-home-header_super-title"],["flush-element"],["text","\\n      "],["append",["helper",["sanitize"],[["get",["headerData","supertitle"]]],null],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(30), t.default = a.Ember.Component.extend({
                classNames: ["tft-home-background"],
                layout: n(31),
                src: null,
                didInsertElement() {
                    this._super(...arguments), this._preloadMedia()
                },
                _preloadMedia() {
                    if (this.get("onMediaLoaded")) {
                        const e = this.get("src"),
                            t = [];
                        if (e) {
                            const n = new a.Ember.RSVP.Promise(((t, n) => {
                                const a = new Image;
                                a.src = e, a.onload = t({
                                    url: e
                                }), a.onerror = n({
                                    url: e
                                })
                            }));
                            t.push(n)
                        }
                        a.Ember.RSVP.allSettled(t).then((() => {
                            this.get("onMediaLoaded")()
                        })).catch((e => {
                            a.logger.info(`Error Loading Media: ${e}`), this.get("onMediaLoaded")()
                        }))
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "/Uy9INR7",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-background.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-background.styl\\" js-path=\\"null\\" "],["text","\\n"],["block",["if"],[["get",["src"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","img",[]],["static-attr","class","tft-home-background__image"],["dynamic-attr","src",["unknown",["src"]],null],["static-attr","alt",""],["flush-element"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(33), t.default = a.Ember.Component.extend({
                classNames: ["tft-home-loading-screen"],
                layout: n(34)
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "4m8iY6s/",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-home-loading-screen.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-home-loading-screen.styl\\" js-path=\\"null\\" "],["text","\\n"],["append",["helper",["uikit-spinner"],null,[["class","width","height"],["tft-home-loading-screen__spinner","40px","40px"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(1);
            n(36), t.default = a.Ember.Component.extend({
                classNames: ["tft-full-launch-announcement-modal"],
                layout: n(37),
                fullLaunchService: a.Ember.inject.service("full-launch"),
                didInsertElement() {
                    this._super(...arguments)
                },
                willDestroyElement() {
                    this._super(...arguments)
                },
                hasNotSeenAnnouncement: a.Ember.computed.not("fullLaunchService.fullLaunchAnnouncementSeen"),
                showFullLaunchAnnouncement: a.Ember.computed.and("fullLaunchService.TFTNewTabVisible", "hasNotSeenAnnouncement"),
                mapData: a.Ember.computed.alias("fullLaunchService.mapData"),
                fullLaunchAnnouncementData: a.Ember.computed.alias("mapData.categorizedContentBundles.full_launch_announcement_modal"),
                actions: {
                    confirm: function() {
                        this.get("fullLaunchService").recordFullLaunchAnnouncementSeen()
                    },
                    launchButtonClicked: function() {
                        const e = this.get("fullLaunchService");
                        e.launchTFT(), e.recordFullLaunchAnnouncementSeen()
                    }
                }
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "B7EnuVcZ",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\tft-full-launch-announcement-modal.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\styles\\\\tft-full-launch-announcement-modal.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lc-modal",[]],["dynamic-attr","onHide",["helper",["action"],[["get",[null]],"confirm"],null],null],["dynamic-attr","open",["unknown",["showFullLaunchAnnouncement"]],null],["flush-element"],["text","\\n  "],["open-element","lc-modal-content",[]],["flush-element"],["text","\\n    "],["open-element","lol-uikit-dialog-frame",[]],["static-attr","orientation","bottom"],["static-attr","dismissable",""],["static-attr","dismissable-type","inside"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","tft-full-launch-announcement"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","tft-full-launch-announcement-left"],["flush-element"],["text","\\n"],["text","          "],["open-element","img",[]],["static-attr","class","tft-full-launch-announcement-logo-image"],["static-attr","src","/fe/tft/images/full-launch-announcement-logo.png"],["flush-element"],["close-element"],["text","\\n          "],["open-element","img",[]],["static-attr","class","tft-full-launch-announcement-separator-icon"],["static-attr","src","/fe/tft/images/full-launch-announcement-separator.png"],["flush-element"],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","tft-full-launch-announcement-body"],["flush-element"],["text","\\n"],["block",["each"],[["helper",["-each-in"],[["get",["fullLaunchAnnouncementData"]]],null]],null,0],["text","          "],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","type","dialog-frame"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","tft-full-launch-announcement-ok-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"launchButtonClicked"],null],null],["flush-element"],["text","\\n              "],["open-element","div",[]],["static-attr","class","tft-full-launch-announcement-ok-button-text"],["flush-element"],["text","\\n                "],["append",["unknown",["tra","tft_launch_button"]],false],["text","\\n              "],["close-element"],["text","\\n            "],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","              "],["open-element","div",[]],["static-attr","class","tft-full-launch-announcement-body-item"],["flush-element"],["text","\\n                "],["open-element","div",[]],["dynamic-attr","style",["concat",["color:",["unknown",["data","headerFontColor"]],";"]]],["static-attr","class","tft-full-launch-announcement-body-item-heading"],["flush-element"],["text","\\n                  "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["data","imagePath"]]]]],["flush-element"],["close-element"],["text","\\n                  "],["append",["unknown",["data","header"]],false],["text","\\n                "],["close-element"],["text","\\n                "],["open-element","div",[]],["dynamic-attr","style",["concat",["color:",["unknown",["data","bodyFontColor"]],";"]]],["static-attr","class","tft-full-launch-announcement-body-item-text"],["flush-element"],["append",["unknown",["data","body"]],false],["close-element"],["text","\\n              "],["close-element"],["text","\\n"]],"locals":["index","data"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "kuLpscJs",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\application.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","rcp-fe-tft-application"],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "RrPMLUz5",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v4\\\\Releases_16_15\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-tft\\\\src\\\\app\\\\templates\\\\index.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["append",["helper",["tft-home-content"],null,[["pageContent","isLoading"],[["get",["pageContent"]],["get",["isLoading"]]]]],false],["text","\\n"],["append",["unknown",["tft-full-launch-announcement-modal"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }],
        t = {};

    function n(a) {
        var l = t[a];
        if (void 0 !== l) return l.exports;
        var s = t[a] = {
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, n), s.exports
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