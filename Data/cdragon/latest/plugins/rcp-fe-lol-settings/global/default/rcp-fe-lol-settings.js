(() => {
    var e = [function(e, t, n) {
            "use strict";
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const o = a(n(1)),
                i = n(2),
                s = a(n(14)),
                r = a(n(15));
            n(16);
            const l = "rcp-fe-lol-settings",
                c = document.currentScript.ownerDocument;
            s.default.set(c);
            const u = window.getPluginAnnounceEventName(l);
            c.addEventListener(u, (function(e) {
                e.registrationHandler((async function(e) {
                    await o.default.init(e, {
                        audioPlugin: e => e.get("rcp-fe-audio"),
                        ComponentFactory: e => e.get("rcp-fe-common-libs").getComponentFactory("1"),
                        dataBinding: e => e.get("rcp-fe-common-libs").getDataBinding("rcp-fe-lol-settings"),
                        Ember: e => e.get("rcp-fe-ember-libs").getEmber(),
                        emberL10n: e => e.get("rcp-fe-ember-libs").getEmberL10n("1"),
                        logger: e => e.get("rcp-fe-common-libs").logging.create(l),
                        playerNames: e => e.get("rcp-fe-common-libs").playerNames,
                        socket: e => e.getSocket()
                    }), await o.default.add({
                        db: o.default.dataBinding.bindTo(o.default.socket)
                    }), await o.default.add({
                        tra: e => async function(e) {
                            let t = e.get("rcp-fe-lol-l10n").tra().overlay("/fe/lol-l10n/trans.json").overlay("/fe/lol-settings/trans.json").overlay("/fe/lol-shared-components/trans.json");
                            !0 === await o.default.db.get("/lol-client-config/v3/client-config/lol.client_settings.legal_statements") && (t = t.overlay("/fe/lol-settings/trans-legal-statements.json"));
                            return t
                        }(e)
                    }), await o.default.tra.ready(), await o.default.add({
                        AccountVerification: e => e.get("rcp-fe-lol-shared-components").getApi_AccountVerification(),
                        emberApplicationFactory: e => e.get("rcp-fe-ember-libs").getEmberApplicationFactory(),
                        jQuery: e => e.get("rcp-fe-common-libs").getJquery(2),
                        lodash: e => e.get("rcp-fe-common-libs").getLodash(4),
                        ModalManager: e => e.get("rcp-fe-lol-uikit").getModalManager(),
                        Navigation: e => e.get("rcp-fe-lol-navigation"),
                        SharedComponents: e => e.get("rcp-fe-lol-shared-components"),
                        SharedPlayerBehaviorApps: e => e.get("rcp-fe-lol-shared-components").getApi_SharedPlayerBehaviorApps(),
                        sounds: r.default.init(o.default.audioPlugin),
                        Telemetry: e => e.get("rcp-fe-common-libs").getTelemetry("1"),
                        templateHelper: e => e.get("rcp-fe-lol-uikit").getTemplateHelper(),
                        TooltipManager: e => e.get("rcp-fe-lol-uikit").getTooltipManager(),
                        WindowManager: e => e.get("rcp-fe-lol-uikit").getWindowManager()
                    });
                    const t = (0, n(17).default)();
                    await t.build();
                    const a = await o.default.ComponentFactory.create(t.getName()).emberAppInstancePromise,
                        s = a.__container__.lookup("service:modal-manager"),
                        c = new i.SettingsApiImpl(o.default.logger, s);
                    o.default.api = c;
                    const u = o.default.SharedComponents.getApi_HomeRegistry();
                    u.resolveOpenSettingsHandler(((...e) => c.show(...e))), u.resolveCloseSettingsHandler((() => c.close()));
                    const d = a.__container__.lookup("router:main"),
                        m = a.__container__.lookup("route:general"),
                        p = {
                            syncToRoute: (e, t) => {
                                t && m.refresh(), d.replaceWith(e)
                            }
                        };
                    try {
                        await s.initialize(a.rootElement, p)
                    } catch (e) {
                        o.default.logger.error("Settings error during plugin initialization")
                    }
                    return c
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
                        const o = e[a],
                            i = n._getValue(a, o);
                        i && i.then ? (i.then((function(e) {
                            e || console.warn("The promise for the key " + a + " resolved with a falsy value: ", e), n._addValue(a, e)
                        })), t.push(i)) : n._addValue(a, i)
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
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SettingsApiImpl = void 0;
            const a = n(3),
                o = n(13);
            t.SettingsApiImpl = class {
                _logger;
                _modalManager;
                _categoryNames;
                constructor(e, t) {
                    this._logger = e, this._modalManager = t, this._categoryNames = new Set(Object.values(a.SettingsCategoryName))
                }
                show(e) {
                    e && !this._categoryNames.has(e) && this._logger.error("Invalid category name", e), this._modalManager.show(e)
                }
                close() {
                    this._modalManager.close()
                }
                getLolSoundSettingsSchemaVersion() {
                    return o.LOL_SOUND_SCHEMA_VERSION
                }
            }
        }, function(e, t, n) {
            "use strict";
            var a = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
                    void 0 === a && (a = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, a, o)
                } : function(e, t, n, a) {
                    void 0 === a && (a = n), e[a] = t[n]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || a(t, e, n)
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.registerPlugin = function(e, t) {
                const n = document.currentScript?.ownerDocument || document,
                    a = window.getPluginAnnounceEventName(e);
                n.addEventListener(a, (({
                    registrationHandler: e
                }) => e((e => t(e, r)))), {
                    once: !0
                })
            };
            const s = i(n(4));
            o(n(5), t), o(n(9), t), o(n(12), t);
            const r = new s.default;
            t.default = r
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = class {
                _provider;
                _apis;
                constructor() {
                    this._provider = null, this._apis = {}
                }
                get apis() {
                    return this._apis
                }
                init(e, t) {
                    return this._provider = e, t ? this.add(t) : Promise.resolve(this)
                }
                add(e) {
                    const t = [];
                    let n;
                    for (n in e) {
                        const a = n,
                            o = e[a];
                        e[a] && t.push(this._addValue(a, o))
                    }
                    return Promise.all(t).then((() => this))
                }
                async addUntyped(e = {}) {
                    const t = Object.entries(e).map((async ([e, t]) => {
                        let n = "function" == typeof t ? t(this._provider) : t;
                        this._isPromise(n) && (n = await n), this[e] = n
                    }));
                    return await Promise.all(t), this
                }
                _addValue(e, t) {
                    if ("function" != typeof t) throw new Error(`TypedProviderProxy: The function for ${e} is not a function.`);
                    const n = t(this._provider);
                    return this._isPromise(n) ? (n.then((t => {
                        this._apis[e] = t
                    })), n) : (this._apis[e] = n, Promise.resolve(n))
                }
                _isPromise(e) {
                    return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then
                }
                getProvider() {
                    if (this._provider) return this._provider;
                    throw new Error("The `provider` object has not been set, please do so by calling the `init` method.")
                }
            }
        }, function(e, t, n) {
            "use strict";
            var a = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
                    void 0 === a && (a = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, a, o)
                } : function(e, t, n, a) {
                    void 0 === a && (a = n), e[a] = t[n]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || a(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SettingsCategoryName = t.SettingsCategory = void 0, o(n(6), t);
            var i = n(7);
            Object.defineProperty(t, "SettingsCategory", {
                enumerable: !0,
                get: function() {
                    return i.SettingsCategory
                }
            });
            var s = n(8);
            Object.defineProperty(t, "SettingsCategoryName", {
                enumerable: !0,
                get: function() {
                    return s.SettingsCategoryName
                }
            })
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConstantsKey = void 0, t.ConstantsKey = {
                regionLocale: "regionLocale",
                commandLineArgs: "commandLineArgs",
                buildInfo: "buildInfo",
                systemInfo: "systemInfo",
                regionData: "regionData"
            }
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SettingsCategory = void 0, t.SettingsCategory = {
                GENERAL: "general",
                NOTIFICATIONS: "notifications",
                CHAT: "chat",
                SOUND: "sound",
                VOICE: "voice",
                BLOCK_LIST: "block-list",
                GAME_HOTKEYS: "game-hotkeys",
                GAME_SOUND: "game-sound",
                GAME_INTERFACE: "game-interface",
                GAME_GAMEPLAY: "game-gameplay",
                REPLAYS: "replays",
                PRIVACY_NOTICE: "privacy-notice",
                TERMS_OF_USE: "terms-of-use",
                LEGAL_STATEMENTS: "legal-statements",
                THIRDPARTY_LICENSES: "thirdparty-licenses",
                VERSION: "version"
            }
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SettingsCategoryName = void 0, t.SettingsCategoryName = {
                GENERAL: "lol-general",
                NOTIFICATIONS: "lol-notifications",
                CHAT: "lol-chat",
                SOUND: "lol-sound",
                VOICE: "lol-premade-voice",
                BLOCK_LIST: "lol-block-list",
                GAME_HOTKEYS: "lol-in-game-hotkeys",
                GAME_SOUND: "lol-in-game-sound",
                GAME_INTERFACE: "lol-in-game-interface",
                GAME_GAMEPLAY: "lol-in-game-gameplay",
                REPLAYS: "lol-in-game-replays",
                PRIVACY_NOTICE: "lol-privacy-notice",
                TERMS_OF_USE: "lol-tou",
                LEGAL_STATEMENTS: "lol-legal-statements",
                THIRDPARTY_LICENSES: "lol-third-party-license",
                VERSION: "lol-version"
            }
        }, function(e, t, n) {
            "use strict";
            var a = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
                    void 0 === a && (a = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, a, o)
                } : function(e, t, n, a) {
                    void 0 === a && (a = n), e[a] = t[n]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || a(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(n(10), t), o(n(11), t)
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LOL_SOUND_SCHEMA_VERSION = void 0;
            t.LOL_SOUND_SCHEMA_VERSION = 5
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
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                init(e) {
                    const t = e.getChannel("sfx-ui");
                    this.unblockSuccess = t.createSound("/fe/lol-static-assets/sounds/sfx-settings-block-list-unblock-success.ogg"), this.repairClick = t.createSound("/fe/lol-static-assets/sounds/sfx-full-repair-button-click.ogg", {
                        allowConcurrency: !1
                    })
                }
            };
            t.default = n
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const {
                    DiscordBetaComponent: e,
                    DiscordButtonComponent: t,
                    DiscordLinkingPopupComponent: a,
                    DiscordPopupComponent: c
                } = o.SharedComponents.getApi_SharedDiscordPopupComponents(), u = o.emberApplicationFactory.factoryDefinitionBuilder().setName("rcp-fe-lol-settings").setRoot(document.createElement("div")).setComponentFactory(o.ComponentFactory).setRouter(i.default).setEmber(o.Ember).setL10n(o.emberL10n).setTra(o.tra).setFeatureFlag("EMBER_CLI_COMPAT", !0).addRoute("Application", n(20).default).addRoute("General", n(21).default).addRoute("Notifications", n(22).default).addRoute("Chat", n(23).default).addRoute("Sound", n(24).default).addRoute("Voice", n(25).default).addRoute("BlockList", n(26).default).addRoute("GameHotkeys", n(27).default).addRoute("GameSound", n(28).default).addRoute("GameInterface", n(30).default).addRoute("GameGameplay", n(31).default).addRoute("Replays", n(32).default).addRoute("PrivacyNotice", n(33).default).addRoute("TermsOfUse", n(34).default).addRoute("ThirdpartyLicenses", n(35).default).addRoute("Version", n(36).default).addRoute("LegalStatements", n(37).default).addController("Application", n(38).default).addController("General", n(39).default).addController("Notifications", n(65).default).addController("Chat", n(66).default).addController("Sound", n(264).default).addController("Voice", n(265).default).addController("BlockList", n(266).default).addController("GameHotkeys", n(267).default).addController("GameSound", n(268).default).addController("GameInterface", n(270).default).addController("GameGameplay", n(271).default).addController("Replays", n(272).default).addController("PrivacyNotice", n(273).default).addController("TermsOfUse", n(274).default).addController("ThirdpartyLicenses", n(275).default).addController("Version", n(276).default).addController("LegalStatements", n(277).default).addComponent("ModalHeader", n(278).default).addComponent("ModalFooter", n(279).default).addComponent("NavigationBarGroup", n(280).default).addComponent("NavigationBarGroupItem", n(281).default).addComponent("BlockedPlayer", n(282).default).addComponent("BlockListError", n(283).default).addComponent("GameSoundContent", n(284).default).addComponent("GameInterfaceContent", n(285).default).addComponent("GameGameplayContent", n(286).default).addComponent("GameHotkeysAdditionalSection", n(287).default).addComponent("GameHotkeysAdditional", n(288).default).addComponent("GameHotkeysPrimaryButton", n(291).default).addComponent("GameHotkeysPrimary", n(292).default).addComponent("GameHotkeysQuickcast", n(294).default).addComponent("GameHotkeysContent", n(295).default).addComponent("RepairGameButton", n(297).default).addComponent("PublishingLocale", n(298).default).addComponent("AccountVerification", n(299).default).addComponent("SettingsSlider", n(300).default).addComponent("PushToTalkKey", n(301).default).addComponent("VngPublisherSettings", n(304).default).addComponent("HoneyfruitSettingsErrors", n(306).default).addComponent("PlayerName", r).addComponent("DiscordBeta", e).addComponent("DiscordButton", t).addComponent("DiscordPopup", c).addComponent("DiscordLinkingPopup", a).addService("Honeyfruit", n(308).default).addService("ModalManager", n(309).default).addService("Patch", n(312).default).addService("Persistence", n(313).default).addService("Voice", n(315).default).addService("Gameflow", n(296).default).addHelper("FormatKeyBindings", o.Ember.Helper.helper(s.formatAdditionalKeyBindings)).addHelper("GetKeyBindingsModifier", o.Ember.Helper.helper(s.getPrimaryModifierDisplay)).addHelper("GetKeyBindingsMainKey", o.Ember.Helper.helper(s.getPrimaryMainKeyDisplay)).addTemplate("application", n(316)).addTemplate("index", n(317)).addTemplate("general", n(318)).addTemplate("notifications", n(319)).addTemplate("chat", n(320)).addTemplate("sound", n(321)).addTemplate("voice", n(322)).addTemplate("block-list", n(323)).addTemplate("game-hotkeys", n(324)).addTemplate("game-sound", n(325)).addTemplate("game-interface", n(326)).addTemplate("game-gameplay", n(327)).addTemplate("replays", n(328)).addTemplate("privacy-notice", n(329)).addTemplate("terms-of-use", n(330)).addTemplate("thirdparty-licenses", n(331)).addTemplate("loading", n(332)).addTemplate("version", n(333)).addTemplate("legal-statements", n(334)).addTemplate("components/modal-header", n(335)).addTemplate("components/modal-footer", n(336)).addTemplate("components/navigation-bar-group", n(337)).addTemplate("components/navigation-bar-group-item", n(338)).addTemplate("components/blocked-player", n(339)).addTemplate("components/block-list-error", n(340)).addTemplate("components/repair-game-button", n(341)).addTemplate("components/publishing-locale", n(342)).addTemplate("components/account-verification", n(343)).addTemplate("components/settings-slider", n(344)).addTemplate("components/push-to-talk-key", n(345)).addTemplate("components/game-sound-content", n(346)).addTemplate("components/game-interface-content", n(347)).addTemplate("components/game-gameplay-content", n(348)).addTemplate("components/game-hotkeys-additional-section", n(349)).addTemplate("components/game-hotkeys-additional", n(350)).addTemplate("components/game-hotkeys-primary-button", n(351)).addTemplate("components/game-hotkeys-primary", n(352)).addTemplate("components/game-hotkeys-quickcast", n(353)).addTemplate("components/game-hotkeys-content", n(354)).addTemplate("components/vng-publisher-settings", n(355)).addTemplate("components/honeyfruit-settings-error", n(356));
                return l.registerOnAppBuilder(u), u
            };
            var a, o = n(1),
                i = (a = n(18)) && a.__esModule ? a : {
                    default: a
                },
                s = n(19);
            const {
                PlayerNameComponent: r,
                PlayerNameInputApi: l
            } = o.SharedComponents.getSharedEmberComponents()
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(3);
            const o = n(1).Ember.Router.extend({
                location: "none"
            });
            o.map((function() {
                this.route(a.SettingsCategory.GENERAL), this.route(a.SettingsCategory.NOTIFICATIONS), this.route(a.SettingsCategory.CHAT), this.route(a.SettingsCategory.SOUND), this.route(a.SettingsCategory.VOICE), this.route(a.SettingsCategory.BLOCK_LIST), this.route(a.SettingsCategory.GAME_HOTKEYS), this.route(a.SettingsCategory.GAME_SOUND), this.route(a.SettingsCategory.GAME_INTERFACE), this.route(a.SettingsCategory.GAME_GAMEPLAY), this.route(a.SettingsCategory.REPLAYS), this.route(a.SettingsCategory.PRIVACY_NOTICE), this.route(a.SettingsCategory.TERMS_OF_USE), this.route(a.SettingsCategory.THIRDPARTY_LICENSES), this.route(a.SettingsCategory.VERSION), this.route(a.SettingsCategory.LEGAL_STATEMENTS)
            }));
            var i = o;
            t.default = i
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatAdditionalKeyBindings = function(e) {
                if (void 0 === e || void 0 === e[0]) return "";
                if (void 0 === e[1]) return d(e[0]);
                return d(l(e[0])[e[1] - 1])
            }, t.fromKeyToSaved = function(e) {
                let t;
                t = r() ? i[e.code] : o[e.code];
                return void 0 !== t ? c(e) + t : void 0
            }, t.fromSavedToArray = l, t.getModifiersPrefix = c, t.getPrimaryMainKeyDisplay = function(e) {
                const [t] = e || [];
                if (t === n || void 0 === t) return "";
                const a = t.slice(t.lastIndexOf("[", t.length - 3));
                return s[a]
            }, t.getPrimaryModifierDisplay = function(e) {
                if (void 0 === e || void 0 === e[0]) return "";
                const t = e[0];
                return u(t.slice(0, t.lastIndexOf("[", t.length - 3)), " ")
            }, t.isWindows = r, t.normalizeKeybindingString = function(e) {
                let t = e;
                t = t.toLowerCase();
                const n = function(e) {
                    const t = [];
                    let n = e.indexOf("[");
                    for (; - 1 !== n;) {
                        let a = e.indexOf("]", n + 1);
                        if (-1 === a) return "";
                        a + 1 < e.length && "]" === e.charAt(a + 1) && (a += 1);
                        const o = e.substr(n, a - n + 1);
                        t.push(o), n = e.indexOf("[", a + 1)
                    }
                    return t
                }(t);
                n.length > 2 && n.sort(m);
                let a = "";
                for (let e = 0; e < n.length; e++) a += n[e];
                return a
            };
            const n = "null";
            let a;
            const o = {
                    Escape: "[Esc]",
                    Digit1: "[1]",
                    Digit2: "[2]",
                    Digit3: "[3]",
                    Digit4: "[4]",
                    Digit5: "[5]",
                    Digit6: "[6]",
                    Digit7: "[7]",
                    Digit8: "[8]",
                    Digit9: "[9]",
                    Digit0: "[0]",
                    Minus: "[-]",
                    Equal: "[=]",
                    Backspace: "[Back]",
                    Tab: "[Tab]",
                    KeyQ: "[q]",
                    KeyW: "[w]",
                    KeyE: "[e]",
                    KeyR: "[r]",
                    KeyT: "[t]",
                    KeyY: "[y]",
                    KeyU: "[u]",
                    KeyI: "[i]",
                    KeyO: "[o]",
                    KeyP: "[p]",
                    BracketLeft: "[[]",
                    BracketRight: "[]]",
                    Enter: "[Return]",
                    KeyA: "[a]",
                    KeyS: "[s]",
                    KeyD: "[d]",
                    KeyF: "[f]",
                    KeyG: "[g]",
                    KeyH: "[h]",
                    KeyJ: "[j]",
                    KeyK: "[k]",
                    KeyL: "[l]",
                    Semicolon: "[Semicolon]",
                    Quote: "[']",
                    Backquote: "[`]",
                    Backslash: "[Backslash]",
                    KeyZ: "[z]",
                    KeyX: "[x]",
                    KeyC: "[c]",
                    KeyV: "[v]",
                    KeyB: "[b]",
                    KeyN: "[n]",
                    KeyM: "[m]",
                    Comma: "[,]",
                    Period: "[.]",
                    Slash: "[/]",
                    NumpadMultiply: "[*]",
                    Space: "[Space]",
                    CapsLock: "[CapsLock]",
                    F1: "[F1]",
                    F2: "[F2]",
                    F3: "[F3]",
                    F4: "[F4]",
                    F5: "[F5]",
                    F6: "[F6]",
                    F7: "[F7]",
                    F8: "[F8]",
                    F9: "[F9]",
                    F10: "[F10]",
                    NumLock: "[NumLock]",
                    Numpad7: "[Num7]",
                    Numpad8: "[Num8]",
                    Numpad9: "[Num9]",
                    NumpadSubtract: "[Num-]",
                    Numpad4: "[Num4]",
                    Numpad5: "[Num5]",
                    Numpad6: "[Num6]",
                    NumpadAdd: "[Num+]",
                    Numpad1: "[Num1]",
                    Numpad2: "[Num2]",
                    Numpad3: "[Num3]",
                    Numpad0: "[Num0]",
                    NumpadDecimal: "[Num.]",
                    F11: "[F11]",
                    F12: "[F12]",
                    IntlYen: "[jYen]",
                    NumpadEqual: "[Num=]",
                    NumpadEnter: "[NumEnter]",
                    AudioVolumeMute: "[Mute]",
                    AudioVolumeDown: "[Vol-]",
                    AudioVolumeUp: "[Vol+]",
                    NumpadComma: "[Num,]",
                    NumpadDivide: "[Num/]",
                    Home: "[Home]",
                    ArrowUp: "[Up Arrow]",
                    PageUp: "[PgUp]",
                    ArrowLeft: "[Left Arrow]",
                    ArrowRight: "[Right Arrow]",
                    End: "[End]",
                    ArrowDown: "[Down Arrow]",
                    PageDown: "[PgDn]",
                    Delete: "[Del]"
                },
                i = {
                    Escape: "[Esc]",
                    Digit1: "[1]",
                    Digit2: "[2]",
                    Digit3: "[3]",
                    Digit4: "[4]",
                    Digit5: "[5]",
                    Digit6: "[6]",
                    Digit7: "[7]",
                    Digit8: "[8]",
                    Digit9: "[9]",
                    Digit0: "[0]",
                    Minus: "[-]",
                    Equal: "[=]",
                    Backspace: "[Back]",
                    Tab: "[Tab]",
                    KeyQ: "[q]",
                    KeyW: "[w]",
                    KeyE: "[e]",
                    KeyR: "[r]",
                    KeyT: "[t]",
                    KeyY: "[y]",
                    KeyU: "[u]",
                    KeyI: "[i]",
                    KeyO: "[o]",
                    KeyP: "[p]",
                    BracketLeft: "[[]",
                    BracketRight: "[]]",
                    Enter: "[Return]",
                    KeyA: "[a]",
                    KeyS: "[s]",
                    KeyD: "[d]",
                    KeyF: "[f]",
                    KeyG: "[g]",
                    KeyH: "[h]",
                    KeyJ: "[j]",
                    KeyK: "[k]",
                    KeyL: "[l]",
                    Semicolon: "[Semicolon]",
                    Quote: "[']",
                    Backquote: "[`]",
                    Backslash: "[Backslash]",
                    KeyZ: "[z]",
                    KeyX: "[x]",
                    KeyC: "[c]",
                    KeyV: "[v]",
                    KeyB: "[b]",
                    KeyN: "[n]",
                    KeyM: "[m]",
                    Comma: "[,]",
                    Period: "[.]",
                    Slash: "[/]",
                    NumpadMultiply: "[*]",
                    Space: "[Space]",
                    CapsLock: "[CapsLock]",
                    F1: "[F1]",
                    F2: "[F2]",
                    F3: "[F3]",
                    F4: "[F4]",
                    F5: "[F5]",
                    F6: "[F6]",
                    F7: "[F7]",
                    F8: "[F8]",
                    F9: "[F9]",
                    F10: "[F10]",
                    NumLock: "[NumLock]",
                    ScrollLock: "[ScrollLock]",
                    Numpad7: "[Num7]",
                    Numpad8: "[Num8]",
                    Numpad9: "[Num9]",
                    NumpadSubtract: "[Num-]",
                    Numpad4: "[Num4]",
                    Numpad5: "[Num5]",
                    Numpad6: "[Num6]",
                    NumpadAdd: "[Num+]",
                    Numpad1: "[Num1]",
                    Numpad2: "[Num2]",
                    Numpad3: "[Num3]",
                    Numpad0: "[Num0]",
                    NumpadDecimal: "[Num.]",
                    F11: "[F11]",
                    F12: "[F12]",
                    IntlYen: "[jYen]",
                    NumpadEnter: "[NumEnter]",
                    AudioVolumeMute: "[Mute]",
                    AudioVolumeDown: "[Vol-]",
                    AudioVolumeUp: "[Vol+]",
                    NumpadDivide: "[Num/]",
                    Home: "[Home]",
                    ArrowUp: "[Up Arrow]",
                    PageUp: "[PgUp]",
                    ArrowLeft: "[Left Arrow]",
                    ArrowRight: "[Right Arrow]",
                    End: "[End]",
                    ArrowDown: "[Down Arrow]",
                    PageDown: "[PgDn]",
                    Delete: "[Del]",
                    OSLeft: "[L Win]",
                    OSRight: "[R Win]"
                },
                s = {
                    "[Esc]": "Esc",
                    "[1]": "1",
                    "[2]": "2",
                    "[3]": "3",
                    "[4]": "4",
                    "[5]": "5",
                    "[6]": "6",
                    "[7]": "7",
                    "[8]": "8",
                    "[9]": "9",
                    "[0]": "0",
                    "[-]": "-",
                    "[=]": "=",
                    "[Back]": "Bk",
                    "[Tab]": "Tab",
                    "[TAB]": "Tab",
                    "[q]": "Q",
                    "[w]": "W",
                    "[e]": "E",
                    "[r]": "R",
                    "[t]": "T",
                    "[y]": "Y",
                    "[u]": "U",
                    "[i]": "I",
                    "[o]": "O",
                    "[p]": "P",
                    "[[]": "[",
                    "[]]": "]",
                    "[Return]": "Rtn",
                    "[a]": "A",
                    "[s]": "S",
                    "[d]": "D",
                    "[f]": "F",
                    "[g]": "G",
                    "[h]": "H",
                    "[j]": "J",
                    "[k]": "K",
                    "[l]": "L",
                    "[Semicolon]": ";",
                    "[']": "'",
                    "[`]": "`",
                    "[Backslash]": "Bkslash",
                    "[z]": "Z",
                    "[x]": "X",
                    "[c]": "C",
                    "[v]": "V",
                    "[b]": "B",
                    "[n]": "N",
                    "[m]": "M",
                    "[,]": ",",
                    "[.]": ".",
                    "[/]": "/",
                    "[*]": "*",
                    "[Space]": "Spce",
                    "[CapsLock]": "CapsLk",
                    "[F1]": "F1",
                    "[F2]": "F2",
                    "[F3]": "F3",
                    "[F4]": "F4",
                    "[F5]": "F5",
                    "[F6]": "F6",
                    "[F7]": "F7",
                    "[F8]": "F8",
                    "[F9]": "F9",
                    "[F10]": "F10",
                    "[NumLock]": "NumLk",
                    "[ScrollLock]": "ScrollLk",
                    "[Num7]": "Num7",
                    "[Num8]": "Num8",
                    "[Num9]": "Num9",
                    "[Num-]": "Num-",
                    "[Num4]": "Num4",
                    "[Num5]": "Num5",
                    "[Num6]": "Num6",
                    "[Num+]": "Num+",
                    "[Num1]": "Num1",
                    "[Num2]": "Num2",
                    "[Num3]": "Num3",
                    "[Num0]": "Num0",
                    "[Num.]": "Num.",
                    "[F11]": "F11",
                    "[F12]": "F12",
                    "[jYen]": "jKana",
                    "[Num=]": "Num=",
                    "[NumEnter]": "NumEnter",
                    "[Mute]": "Mute",
                    "[Vol-]": "Vol-",
                    "[Vol+]": "Vol+",
                    "[Num,]": "Num,",
                    "[Num/]": "Num/",
                    "[Home]": "webHome",
                    "[Up Arrow]": "Up",
                    "[PgUp]": "PgUp",
                    "[Left Arrow]": "Left",
                    "[Right Arrow]": "Rght",
                    "[End]": "End",
                    "[Down Arrow]": "Down",
                    "[PgDn]": "PgDn",
                    "[Ins]": "Ins",
                    "[Del]": "Del",
                    "[L Win]": "Win",
                    "[R Win]": "Win",
                    "[Button 1]": "MB1",
                    "[Button 2]": "MB2",
                    "[Button 3]": "MB3",
                    "[Button 4]": "MB4",
                    "[Button 5]": "MB5",
                    "[Button 6]": "MB6",
                    "[Button 7]": "MB7",
                    "[Button 8]": "MB8",
                    "[<Unbound>]": ""
                };

            function r() {
                return void 0 === a && (a = "Win32" === navigator.platform), a
            }

            function l(e) {
                const t = e.split(",");
                return -1 === e.indexOf("[,]") ? t : function(e) {
                    let t, n = e.indexOf(",");
                    for (; - 1 !== n;) {
                        if (0 === n) {
                            t = ["", e.slice(1)];
                            break
                        }
                        if ("[" !== e.charAt(n - 1)) {
                            t = [e.slice(0, n), e.slice(n + 1)];
                            break
                        }
                        n = e.indexOf(",", n + 1)
                    }
                    return -1 === n && (t = [e]), t
                }(e)
            }

            function c(e) {
                return function(e) {
                    if (e.metaKey) return r() ? "[Win]" : "[Cmd]";
                    return ""
                }(e) + (e.shiftKey ? "[Shift]" : "") + (e.ctrlKey ? "[Ctrl]" : "") + (e.altKey ? "[Alt]" : "")
            }

            function u(e, t = " ") {
                if (0 === e.length) return "";
                let n = e.replace("[Cmd]", "Cmd" + t).replace("[Alt]", "Alt" + t);
                return n = n.replace("[alt]", "Alt" + t).replace("[ctrl]", "Ctrl" + t), n = n.replace("[Shift]", "Shift" + t).replace("[Ctrl]", "Ctrl" + t), n
            }

            function d(e) {
                if (e === n || void 0 === e) return "";
                const t = e.slice(e.lastIndexOf("[", e.length - 3)),
                    a = e.slice(0, e.lastIndexOf("[", e.length - 3)),
                    o = s[t];
                return void 0 === o ? e : u(a, " + ") + o
            }

            function m(e, t) {
                return p(e) - p(t)
            }

            function p(e) {
                return "[ctrl]" === e ? 1 : "[alt]" === e ? 2 : "[shift]" === e ? 3 : "[cmd]" === e || "[win]" === e ? 4 : 5
            }
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1).Ember.Route.extend({
                actions: {
                    resetToDefaultOnCurrentRoute(e) {
                        const t = this.controllerFor(e);
                        return t && t.resetToDefault && t.resetToDefault(), !0
                    }
                }
            });
            t.default = a
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Route.extend({
                    persistenceService: a.Ember.inject.service("persistence"),
                    model() {
                        const e = this.get("persistenceService"),
                            t = [];
                        return t.push(a.SharedComponents.getApi_UXSettings().getUXSettingsReadyPromise()), t.push(e.getDefaultSettingPromise("account", "lol-general")), t.push(e.getDefaultSettingPromise("local", "video")), t.push(e.getDefaultSettingPromise("account", "lol-publishing-content")), t.push(a.db.get("/lol-platform-config/v1/namespaces/PublishingContent")), t.push(a.db.get("/lol-platform-config/v1/namespaces/AccountVerification")), t.push(a.db.get("/lol-platform-config/v1/namespaces/PlayerBehavior/CodeOfConductEnabled")), t.push(a.db.get("/lol-client-config/v3/client-config/lol.client_settings.show_legacy_patch_numbers_setting")), t.push(a.db.get("/lol-client-config/v3/client-config/lol.client_settings.champ_select.enable_ability_previews")), Promise.all(t).then((e => {
                            const t = a.SharedComponents.getApi_UXSettings(),
                                n = t.getUXSettings();
                            return {
                                generalSettings: e[1],
                                videoSettings: e[2],
                                uxSettings: n,
                                publishingContentSettings: e[3],
                                publishingContentConfig: e[4],
                                accountVerificationConfig: e[5],
                                codeOfConductEnabled: e[6],
                                showLegacyPatchNumbersSetting: e[7],
                                isAbilityPreviewEnabled: e[8],
                                potatoOverrides: t.getPotatoModeOverrides()
                            }
                        }))
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Route.extend({
                    persistenceService: a.Ember.inject.service("persistence"),
                    model() {
                        return this.get("persistenceService").getDefaultSettingPromise("account", "lol-notifications").then((e => ({
                            notificationsSettings: e
                        })))
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Route.extend({
                    persistenceService: a.Ember.inject.service("persistence"),
                    model() {
                        const e = this.get("persistenceService"),
                            t = [];
                        return t.push(e.getDefaultSettingPromise("account", "lol-chat")), t.push(a.db.get("/lol-platform-config/v1/namespaces/LcuSocial")), t.push(a.db.get("/lol-chat/v1/is-discord-integration-enabled")), Promise.all(t).then((e => ({
                            chatSettings: e[0],
                            socialToggles: e[1],
                            discordIntegrationEnabled: e[2]
                        })))
                    },
                    setupController(e, t) {
                        this._super(e, t), a.db.observe("/lol-chat/v1/is-discord-link-available", this, (t => {
                            e.handleDiscordLinkAvailableChange(t)
                        })), a.db.observe("/lol-chat/v1/is-discord-linked", this, (t => {
                            e.handleDiscordLinkedChange(t)
                        }))
                    },
                    deactivate() {
                        this._super(...arguments), a.db.unobserve("/lol-chat/v1/is-discord-link-available", this), a.db.unobserve("/lol-chat/v1/is-discord-linked", this)
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            a.dataBinding.bindTo(a.socket);
            var o = a.Ember.Route.extend({
                persistenceService: a.Ember.inject.service("persistence"),
                model() {
                    return this.get("persistenceService").getDefaultSettingPromise("local", "lol-audio").then((e => ({
                        soundSettings: e
                    })))
                }
            });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Route.extend({
                    persistenceService: a.Ember.inject.service("persistence"),
                    model() {
                        const e = this.get("persistenceService"),
                            t = [e.getDefaultSettingPromise("local", "lol-premade-voice"), e.getDefaultSettingPromise("account", "lol-premade-voice")];
                        return Promise.all(t).then((e => ({
                            localVoiceSettings: e[0],
                            accountVoiceSettings: e[1]
                        })))
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = a.dataBinding.bindTo(a.socket);
            var i = a.Ember.Route.extend({
                model: () => Promise.all([o.get("/lol-chat/v1/me"), o.get("/lol-chat/v1/blocked-players")]).then((e => {
                    const [t, n] = e;
                    return {
                        me: t,
                        blockedPlayers: n
                    }
                }))
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = a.dataBinding.bindTo(a.socket);
            var i = a.Ember.Route.extend({
                persistenceService: a.Ember.inject.service("persistence"),
                model() {
                    const e = this.get("persistenceService");
                    return e.get("gameSettingsReadyPromise").then((() => {
                        const t = [];
                        return t.push(e.getSettingPromise("GamePreferences", "account", "input-settings")), t.push(o.get("/lol-game-settings/v1/input-settings-schema")), t.push(o.get("/lol-game-settings/v1/game-settings-schema")), t.push(o.get("/lol-game-settings/v1/game-settings")), Promise.all(t).then((e => ({
                            accountInputSettings: e[0],
                            inputSettingsSchema: e[1],
                            gameSettingsSchema: e[2],
                            gameSettingsRemote: e[3]
                        })))
                    }))
                }
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(29)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Route.extend(i.default);
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = {
                    persistenceService: a.Ember.inject.service("persistence"),
                    model() {
                        const e = this.get("persistenceService");
                        return e.get("gameSettingsReadyPromise").then((() => {
                            const t = [e.getSettingPromise("GamePreferences", "account", "game-settings"), a.db.get("/lol-game-settings/v1/game-settings-schema")];
                            return Promise.all(t).then((([e, t]) => ({
                                accountGameSettings: e,
                                gameSettingsSchema: t
                            }))).catch((e => (a.logger.error("Failed to load game settings:", e), {
                                accountGameSettings: {},
                                gameSettingsSchema: {}
                            })))
                        }))
                    }
                };
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(29)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Route.extend(i.default);
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(29)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Route.extend(i.default);
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Route.extend({
                    persistenceService: a.Ember.inject.service("persistence"),
                    model() {
                        return this.get("persistenceService").getDefaultSettingPromise("local", "lol-replays").then((e => e)).catch((e => {
                            a.logger.error("Failed to get replays settings from local settings", e)
                        }))
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = a.dataBinding.bindTo(a.socket);
            var i = a.Ember.Route.extend({
                model: () => o.get("/lol-license-agreement/v1/privacy-policy").then((e => ({
                    privacyPolicyText: e
                })))
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = a.dataBinding.bindTo(a.socket);
            var i = a.Ember.Route.extend({
                model: () => o.get("/lol-license-agreement/v1/agreement").then((e => ({
                    licenseAgreementText: e
                })))
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.binding = void 0;
            var a = n(1);
            const o = a.dataBinding.bindTo(a.socket);
            t.binding = o;
            var i = a.Ember.Route.extend({
                async model() {
                    const [e, t, n] = await Promise.all([o.get("/system/v1/builds"), o.get("/lol-settings/v2/config").then((({
                        localizedLicensesURL: e
                    }) => e ? o.get(e) : "")), o.get("/fe/lol-settings/licenses/licenses.txt")]);
                    return {
                        versionInfo: e,
                        licenseText: t ? `${t}\n${n}` : n
                    }
                }
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = a.dataBinding.bindTo(a.socket);
            var i = a.Ember.Route.extend({
                model: () => o.get("/system/v1/builds").then((e => ({
                    leagueClientVersion: e.version
                })))
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            a.dataBinding.bindTo(a.socket);
            var o = a.Ember.Route.extend({
                model: () => ({})
            });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Controller.extend({
                    modalManager: a.Ember.inject.service("modal-manager"),
                    currentGroups: a.Ember.computed.alias("modalManager.currentGroups"),
                    actions: {
                        goToSection(e) {
                            this.get("modalManager").updateCurrentCategory(e), this.transitionToRoute(e.routeName)
                        },
                        handleResetToDefaultButtonClick() {
                            return this.send("resetToDefaultOnCurrentRoute", this.currentRouteName), !0
                        }
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(40)) && a.__esModule ? a : {
                    default: a
                },
                s = n(41);
            const {
                DEFAULT_PROFILE_PRIVACY: r,
                ProfilePrivacyEnabledState: l,
                ProfilePrivacySetting: c
            } = s.PROFILE_PRIVACY, u = {
                model: "uxSettings",
                namespace: "lol-user-experience",
                schemaVersion: 3,
                property: "potatoModeEnabled",
                scope: "local",
                defaultValue: !1,
                originalDefaultValue: !1
            }, d = {
                model: "uxSettings",
                namespace: "lol-user-experience",
                schemaVersion: 3,
                property: "motionEffectsDisabled",
                scope: "local",
                defaultValue: !1,
                originalDefaultValue: !1
            }, m = {
                model: "uxSettings",
                namespace: "lol-user-experience",
                schemaVersion: 3,
                property: "closeLeagueClientDuringGame",
                scope: "local",
                defaultValue: !1
            }, p = {
                model: "uxSettings",
                namespace: "lol-user-experience",
                schemaVersion: 3,
                property: "abilityPreviewsDisabled",
                scope: "local",
                defaultValue: !1
            }, f = {
                model: "generalSettings",
                namespace: "lol-general",
                schemaVersion: 1,
                property: "displayLegacyPatchNumbers",
                scope: "account",
                defaultValue: !1
            }, g = {
                model: "generalSettings",
                namespace: "lol-general",
                schemaVersion: 1,
                property: "uploadCrashReports",
                scope: "account",
                defaultValue: !0
            }, _ = {
                model: "videoSettings",
                namespace: "video",
                schemaVersion: 1,
                property: "ZoomScale",
                scope: "local",
                defaultValue: 1
            }, h = {
                model: "publishingContentSettings",
                namespace: "lol-publishing-content",
                schemaVersion: 1,
                property: "publishingLocale",
                scope: "account",
                defaultValue: "auto"
            };
            var E = o.Ember.Controller.extend(i.default, {
                modalManager: o.Ember.inject.service("modal-manager"),
                generalSettings: o.Ember.computed.alias("model.generalSettings"),
                videoSettings: o.Ember.computed.alias("model.videoSettings"),
                uxSettings: o.Ember.computed.alias("model.uxSettings"),
                publishingContentSettings: o.Ember.computed.alias("model.publishingContentSettings"),
                publishingContentConfig: o.Ember.computed.alias("model.publishingContentConfig"),
                accountVerificationConfig: o.Ember.computed.alias("model.accountVerificationConfig"),
                accountVerificationEnabled: o.Ember.computed.alias("accountVerificationConfig.SettingsEnabled"),
                profilePrivacyEnabled: o.Ember.computed.equal("persistenceService.profilePrivacy.enabledState", l.ENABLED),
                isProfilePrivate: o.Ember.computed.equal("persistenceService.profilePrivacy.setting", c.PRIVATE),
                profilePrivacyObserver: o.Ember.observer("isProfilePrivate", (async function(e, t) {
                    try {
                        const e = this.get(t) ? c.PRIVATE : c.PUBLIC;
                        await this.get("persistenceService").setProfilePrivacy(e)
                    } catch (e) {
                        o.logger.error("Couldn't set profile privacy", e)
                    }
                })),
                isAnonymousModeOthers: o.Ember.computed("persistenceService.gameSettings.HUD.HidePlayerNames", (function() {
                    return this.get("persistenceService.gameSettings.HUD.HidePlayerNames")
                })),
                isAnonymousModeMine: o.Ember.computed("persistenceService.nameOnlyAnonymityEnabled", (function() {
                    return this.get("persistenceService.nameOnlyAnonymityEnabled")
                })),
                isAnonymousModeEverything: o.Ember.computed("persistenceService.anonymityEnabled", (function() {
                    return this.get("persistenceService.anonymityEnabled")
                })),
                isAbilityPreviewEnabled: o.Ember.computed.alias("model.isAbilityPreviewEnabled"),
                showLegacyPatchNumbersSetting: o.Ember.computed.alias("model.showLegacyPatchNumbersSetting"),
                potatoOverrides: o.Ember.computed.alias("model.potatoOverrides"),
                persistenceService: o.Ember.inject.service("persistence"),
                gameRepairEnabled: o.Ember.computed.alias("persistenceService.gameRepairEnabled"),
                vanguardSystemCheckModalEnabled: o.Ember.computed.alias("persistenceService.vanguardSystemCheckModalEnabled"),
                computedSizeInfos: o.Ember.computed("validWindowSizes", _.property, (function() {
                    const e = [],
                        t = this.get("validWindowSizes");
                    if (t) {
                        const n = this.get(_.property);
                        t.forEach((t => {
                            const a = `${t.width} x ${t.height}`,
                                o = t.scale === n,
                                i = {
                                    scale: t.scale,
                                    text: a,
                                    selected: o
                                };
                            e.push(i)
                        }))
                    }
                    return e
                })),
                potatoSettingDisabled: o.Ember.computed("potatoOverrides", (function() {
                    const e = this.get("potatoOverrides");
                    return !!e && (u.defaultValue = !!e.defaultToPotato || u.originalDefaultValue, e.disabled)
                })),
                motionEffectsToggleDisabled: o.Ember.computed("potatoSettingDisabled", (function() {
                    return this.get("potatoSettingDisabled")
                })),
                honeyfruit: o.Ember.inject.service("honeyfruit"),
                isVngPublisherSettingsVisible: o.Ember.computed.alias("honeyfruit.vngPublisherSettings.visible"),
                init() {
                    this._super(...arguments), "TENCENT" === window.RIOT.CONSTANTS.regionLocale.region?.toUpperCase() && (g.defaultValue = !1, f.defaultValue = !0), this.bindSetting(u), this.bindSetting(d), this.bindSetting(m), this.bindSetting(p), this.bindSetting(f), this.bindSetting(g), this.bindSetting(_), this.bindSetting(h), o.WindowManager.getValidWindowSizes().then((e => {
                        this.set("validWindowSizes", e)
                    }))
                },
                resetToDefault: function() {
                    this.set("isProfilePrivate", r.setting === c.PRIVATE), this.changeSetting(u.property, u.defaultValue), this.changeSetting(d.property, d.defaultValue), this.changeSetting(m.property, m.defaultValue), this.changeSetting(p.property, p.defaultValue), this.changeSetting(f.property, f.defaultValue), this.changeSetting(g.property, g.defaultValue), this.changeSetting(_.property, _.defaultValue), this.changeSetting(h.property, h.defaultValue)
                },
                actions: {
                    reload: function() {
                        o.Navigation.reload()
                    },
                    selectWindowSize: function(e) {
                        const t = parseFloat(e);
                        this.changeSetting(_.property, t)
                    },
                    selectPublishingLocale: function(e) {
                        this.changeSetting(h.property, e)
                    },
                    handleHoneyfruitLinkingOpened: function() {
                        this.get("modalManager").close()
                    },
                    openVanguardSystemCheckModal: function() {
                        const e = {
                            systemCheckLastSeen: 0,
                            systemCheckPassed: !1
                        };
                        this.get("persistenceService").saveSetting(e, null, "local", "lol-vanguard", 1), this.get("modalManager").close()
                    },
                    toggleAnonymousModeOthers() {
                        const e = {
                            HUD: {
                                HidePlayerNames: !this.get("isAnonymousModeOthers")
                            }
                        };
                        this.get("persistenceService").saveGameSettings(e)
                    },
                    toggleAnonymousModeMine() {
                        this.get("persistenceService").setAnonymousMode("nameOnlyAnonymityEnabled", !this.get("isAnonymousModeMine"))
                    },
                    toggleAnonymousModeEverything() {
                        this.get("persistenceService").setAnonymousMode("anonymityEnabled", !this.get("isAnonymousModeEverything"))
                    }
                }
            });
            t.default = E
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Mixin.create({
                    persistenceService: a.Ember.inject.service("persistence"),
                    bindSetting(e, t = !0) {
                        const {
                            model: n,
                            property: o,
                            defaultValue: i
                        } = e, s = this;
                        s.set(o, a.Ember.computed(t ? `${n}.data.${o}` : `${n}.${o}`, {
                            get: () => a.lodash.get(s.get(n), t ? `data.${o}` : o, i),
                            set: (i, r) => (a.lodash.set(s, t ? `${n}.data.${o}` : `${n}.${o}`, r), s._saveSetting(e, r))
                        }))
                    },
                    changeSetting: function(e, t) {
                        this.set(e, t)
                    },
                    onSaveSetting: function(e, t) {},
                    doSaveSetting: function(e, t, n, o, i) {
                        const s = {};
                        s[e] = t, this.get("persistenceService").saveDefaultSetting(s, n, o, i), a.Telemetry.invokeWithLowProbability((() => {
                            a.Telemetry.sendCustomData("league-client-setting-changed", {
                                setting_name: e,
                                setting_value: t
                            })
                        }))
                    },
                    _saveSetting: function(e, t) {
                        const {
                            property: n,
                            scope: a,
                            namespace: o,
                            schemaVersion: i
                        } = e;
                        return this.doSaveSetting(n, t, a, o, i), this.onSaveSetting(n, t), t
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "GAMEFLOW_PHASES", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "GAME_CONTEXT_KEYS", {
                enumerable: !0,
                get: function() {
                    return i.GAME_CONTEXT_KEYS
                }
            }), Object.defineProperty(t, "GAME_MODES", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "GAME_SEARCH_STATES", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "PAW", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "PRE_END_OF_GAME_SEQUENCE_EVENTS", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "PROFILE_PRIVACY", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "QUEUES", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "RANKED", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "REWARD_TRACKER", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "SOCIAL", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "TIME", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "VANGUARD_STATES", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "getGameKeyFromGameMode", {
                enumerable: !0,
                get: function() {
                    return i.getGameKeyFromGameMode
                }
            });
            var a = _(n(42)),
                o = _(n(43)),
                i = n(44),
                s = _(n(45)),
                r = _(n(46)),
                l = _(n(57)),
                c = _(n(58)),
                u = _(n(59)),
                d = _(n(60)),
                m = _(n(61)),
                p = _(n(62)),
                f = _(n(63)),
                g = _(n(64));

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                NONE: "None",
                CHECKED_INTO_TOURNAMENT: "CheckedIntoTournament",
                LOBBY: "Lobby",
                MATCHMAKING: "Matchmaking",
                READY_CHECK: "ReadyCheck",
                CHAMP_SELECT: "ChampSelect",
                FAILED_TO_LAUNCH: "FailedToLaunch",
                GAME_START: "GameStart",
                IN_PROGRESS: "InProgress",
                RECONNECT: "Reconnect",
                PRE_END_OF_GAME: "PreEndOfGame",
                END_OF_GAME: "EndOfGame",
                TERMINATED_IN_ERROR: "TerminatedInError",
                WAITING_FOR_STATS: "WaitingForStats"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                ERROR: "Error",
                FOUND: "Found",
                SEARCHING: "Searching"
            };
            t.default = n
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.GAME_CONTEXT_KEYS = void 0, t.getGameKeyFromGameMode = function(e) {
                return e === o.default.TFT ? i.TFT : i.LEAGUE_OF_LEGENDS
            };
            var a, o = (a = n(45)) && a.__esModule ? a : {
                default: a
            };
            const i = {
                TFT: "tft",
                LEAGUE_OF_LEGENDS: "league_of_legends"
            };
            t.GAME_CONTEXT_KEYS = i;
            var s = i;
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                CHERRY: "CHERRY",
                CLASSIC: "CLASSIC",
                CUSTOM: "CUSTOM",
                KIWI: "KIWI",
                PRACTICETOOL: "PRACTICETOOL",
                STRAWBERRY: "STRAWBERRY",
                TFT: "TFT",
                TUTORIAL: "TUTORIAL"
            };
            t.default = n
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = p(n(47)),
                o = p(n(48)),
                i = p(n(49)),
                s = p(n(50)),
                r = p(n(51)),
                l = p(n(52)),
                c = p(n(53)),
                u = p(n(54)),
                d = p(n(55)),
                m = p(n(56));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = {
                COMPONENT_TYPES: a.default,
                CURRENCY_TYPES: o.default,
                INVENTORY_TYPES: i.default,
                MEDIA_TYPES: s.default,
                MEDIA_LOAD_TYPES: r.default,
                MODAL_TYPES: l.default,
                OFFER_PURCHASE_STATES: c.default,
                OFFER_VALIDATION_STATES: u.default,
                SCROLL_LIST_DISPLAY_TYPES: d.default,
                TEMPLATE_TYPES: m.default
            };
            t.default = f
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                TEXT: "TEXT",
                TITLE_SUBTITLE: "TITLE_SUBTITLE",
                PURCHASE: "PURCHASE",
                MEDIA: "MEDIA",
                IMAGE_CAROUSEL: "IMAGE_CAROUSEL",
                SCROLL_LIST: "SCROLL_LIST",
                VERTICAL_LIST: "VERTICAL_LIST"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                RP: "RP",
                IP: "IP",
                BE: "lol_blue_essence"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                CHAMPION: "CHAMPION",
                CHAMPION_SKIN: "CHAMPION_SKIN",
                WARD_SKIN: "WARD_SKIN",
                BATTLE_BOOST: "BATTLE_BOOST",
                GIFT: "GIFT",
                MYSTERY: "MYSTERY",
                BUNDLES: "BUNDLES",
                SUMMONER_ICON: "SUMMONER_ICON",
                EMOTE: "EMOTE",
                STATSTONE: "STATSTONE",
                CURRENCY: "CURRENCY"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                SVG: "SVG",
                IMAGE: "IMAGE",
                VIDEO: "VIDEO"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                LOCAL_ASSET: "LOCAL_ASSET",
                EXTERNAL_URL: "EXTERNAL_URL",
                GAME_DATA: "GAME_DATA"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                CHAMPION_MODAL: "CHAMPION_MODAL",
                SKIN_VIEWER_MODAL: "SKIN_VIEWER_MODAL",
                MULTIPLE_PURCHASE_MODAL: "MULTIPLE_PURCHASE_MODAL",
                CHROMA_MODAL: "CHROMA_MODAL",
                CHROMA_BUNDLE_MODAL: "CHROMA_BUNDLE_MODAL",
                SUMMONER_ICON_MODAL: "SUMMONER_ICON_MODAL",
                WARD_SKIN_MODAL: "WARD_SKIN_MODAL",
                SKIN_WITH_DEPENDENCY_MODAL: "SKIN_WITH_DEPENDENCY_MODAL",
                PAW_GENERIC_MODAL: "PAW_GENERIC_MODAL"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                NOT_STARTED: "NOT_STARTED",
                IN_PROGRESS: "IN_PROGRESS",
                SUCCESS: "SUCCESS",
                FAIL: "FAIL"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                NOT_STARTED: "NOT_STARTED",
                IN_PROGRESS: "IN_PROGRESS",
                COMPLETED: "COMPLETED"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                EXPANDED: "EXPANDED",
                COMPACT: "COMPACT",
                DETAILED: "DETAILED"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                LARGE_TWO_COLUMN_LANDSCAPE: "LARGE_TWO_COLUMN_LANDSCAPE"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                HONOR: "honor-vote",
                CHALLENGES: "challenge-level-up-celebration",
                MISSIONS: "missions-celebration",
                RANKED: "ranked-celebration"
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const n = {
                    UNKNOWN: "UNKNOWN",
                    ENABLED: "ENABLED",
                    DISABLED: "DISABLED"
                },
                a = {
                    PRIVATE: "PRIVATE",
                    PUBLIC: "PUBLIC"
                };
            var o = {
                ProfilePrivacyEnabledState: n,
                ProfilePrivacySetting: a,
                DEFAULT_PROFILE_PRIVACY: {
                    enabledState: n.UNKNOWN,
                    setting: a.PUBLIC
                }
            };
            t.default = o
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const n = "RANKED_SOLO_5x5",
                a = "RANKED_FLEX_SR",
                o = "RANKED_FLEX_TT",
                i = "CHERRY",
                s = "RANKED_TFT",
                r = "RANKED_TFT_DOUBLE_UP",
                l = "RANKED_TFT_TURBO",
                c = "RANKED_TFT_PAIRS",
                u = [n, a],
                d = [...u, o],
                m = [i],
                p = [s, r],
                f = [l, c],
                g = [...p, ...f],
                _ = [...d, ...p],
                h = [...f, ...m];
            var E = {
                RANKED_SOLO_5x5_QUEUE_TYPE: n,
                RANKED_FLEX_SR_QUEUE_TYPE: a,
                RANKED_FLEX_TT_QUEUE_TYPE: o,
                RANKED_CHERRY_QUEUE_TYPE: i,
                RANKED_TFT_QUEUE_TYPE: s,
                RANKED_TFT_DOUBLE_UP_QUEUE_TYPE: r,
                RANKED_TFT_TURBO_QUEUE_TYPE: l,
                RANKED_TFT_PAIRS_QUEUE_TYPE: c,
                RANKED_LOL_QUEUE_TYPES: d,
                RANKED_SR_QUEUE_TYPES: u,
                RANKED_TFT_QUEUE_TYPES: p,
                RATED_TFT_QUEUE_TYPES: f,
                RANKED_AND_RATED_TFT_QUEUE_TYPES: g,
                ALL_RANKED_QUEUE_TYPES: _,
                ALL_RATED_QUEUE_TYPES: h,
                ALL_RANKED_AND_RATED_QUEUE_TYPES: [..._, ...h]
            };
            t.default = E
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const n = "UNRANKED",
                a = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND"],
                o = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND", "MASTER", "GRANDMASTER", "CHALLENGER"],
                i = ["IV", "III", "II", "I"],
                s = ["GRAY", "GREEN", "BLUE", "PURPLE", "ORANGE"];

            function r(e) {
                const t = {};
                for (let n = 0; n < e.length; n++) {
                    t[e[n]] = n
                }
                return t
            }
            var l = {
                TIER_NAME_UNRANKED: n,
                TIER_NAME_NONE: "NONE",
                TIER_NAME_PROVISIONAL: "PROVISIONAL",
                DIVISION_NAME_NONE: "NA",
                APEX_TIERS: ["MASTER", "GRANDMASTER", "CHALLENGER"],
                REGULAR_TIERS: a,
                TIERS: o,
                ALL_TIERS: [n, "IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND", "MASTER", "GRANDMASTER", "CHALLENGER"],
                TIERS_WITH_NO_DIVISIONS: [n, "MASTER", "GRANDMASTER", "CHALLENGER"],
                HIGHEST_TIER: a[a.length - 1],
                LOWEST_TIER: a[0],
                DIVISIONS: i,
                HIGHEST_DIVISION: i[i.length - 1],
                LOWEST_DIVISION: i[0],
                LP_PER_DIVISION: 100,
                TIER_NAME_TO_ORDINAL: r(o),
                DIVISION_TO_ORDINAL: r(i),
                DIVISION_TO_NUMERAL: Object.freeze({
                    NA: 0,
                    I: 1,
                    II: 2,
                    III: 3,
                    IV: 4
                }),
                TFT_RATED_TIERS: s,
                RATED_TIER_NAME_NONE: "NONE",
                LOWEST_TFT_RATED_TIER: s[0],
                REWARD_TYPES: {
                    ETERNALS_CAPSULE: "ETERNALS_CAPSULE",
                    CHAMPION_TOKEN: "CHAMPION_TOKEN",
                    CHAMPION: "CHAMPION",
                    CHAMPION_SKIN: "CHAMPION_SKIN",
                    ORANGE_ESSENCE: "ORANGE_ESSENCE",
                    HEXTECH_CHEST: "HEXTECH_CHEST",
                    HEXTECH_KEY: "HEXTECH_KEY",
                    MASTERWORK_CHEST: "MASTERWORK_CHEST",
                    SUMMONER_ICON: "SUMMONER_ICON",
                    EMOTE: "EMOTE",
                    WARD_SHARD: "WARD_SHARD",
                    MYSTERY_EMOTE: "MYSTERY_EMOTE",
                    CHAMPION_SKIN_CHROMA: "CHAMPION_SKIN_CHROMA",
                    HEXTECH_KEY_FRAGMENT: "HEXTECH_KEY_FRAGMENT"
                },
                DEFAULT_ORANGE_ESSENCE_QUANTITY: 500
            };
            t.default = l
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                REWARD_TAGS: {
                    INSTANT: "Instant",
                    RARE: "Rare",
                    CHOICE: "Choice",
                    MULTIPLE: "Multiple"
                },
                MILESTONE_STAGES: {
                    COMPLETED: "completed",
                    CURRENT: "current",
                    FUTURE: "future",
                    HOVERING_COMPLETED: "future-completed"
                },
                REWARD_STATE: {
                    LOCKED: "Locked",
                    UNLOCKED: "Unlocked",
                    UNSELECTED: "Unselected",
                    SELECTED: "Selected"
                },
                TRACKER_SIZE: {
                    SMALL: "tracker-size-small",
                    MEDIUM: "tracker-size-medium"
                },
                REWARD_OPTION_HEADER_TYPE: {
                    FREE: "FREE",
                    PREMIUM: "PREMIUM",
                    NONE: "NONE"
                }
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                DEFAULT_SUMMONER_ICON_ID: 29
            };
            t.default = n
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.TIME_UNITS = t.TIME_CONVERSIONS = void 0;
            const n = {
                MILLISECONDS: "milliseconds",
                SECONDS: "seconds",
                MINUTES: "minutes",
                HOURS: "hours",
                DAYS: "days",
                WEEKS: "weeks",
                MONTHS: "months",
                YEARS: "years"
            };
            t.TIME_UNITS = n;
            const a = 36e5,
                o = 864e5,
                i = 6048e5,
                s = {
                    MILLISECONDS_IN_A_SECOND: 1e3,
                    MILLISECONDS_IN_A_MINUTE: 6e4,
                    MILLISECONDS_IN_A_HOUR: a,
                    MILLISECONDS_IN_A_DAY: o,
                    MILLISECONDS_IN_A_WEEK: i,
                    MILLISECONDS_IN_A_YEAR: 314496e5
                };
            t.TIME_CONVERSIONS = s;
            var r = {
                TIME_UNITS: n,
                TIME_CONVERSIONS: s
            };
            t.default = r
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                CONNECTED: "CONNECTED",
                ERROR: "ERROR",
                IN_PROGRESS: "IN_PROGRESS"
            }
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(40)) && a.__esModule ? a : {
                    default: a
                };
            const s = {
                    model: "notificationsSettings",
                    namespace: "lol-notifications",
                    schemaVersion: 1,
                    property: "disableEsportsNotifications",
                    scope: "account",
                    defaultValue: !1
                },
                r = {
                    model: "notificationsSettings",
                    namespace: "lol-notifications",
                    schemaVersion: 1,
                    property: "blockNonFriendGameInvites",
                    scope: "account",
                    defaultValue: !1
                },
                l = {
                    model: "notificationsSettings",
                    namespace: "lol-notifications",
                    schemaVersion: 1,
                    property: "disableCollectionsNotifications",
                    scope: "account",
                    defaultValue: !1
                };
            var c = o.Ember.Controller.extend(i.default, {
                notificationsSettings: o.Ember.computed.alias("model.notificationsSettings"),
                persistenceService: o.Ember.inject.service("persistence"),
                init() {
                    this._super(...arguments), this.bindSetting(s), this.bindSetting(r), this.bindSetting(l)
                },
                resetToDefault() {
                    this.changeSetting(s.property, s.defaultValue), this.changeSetting(r.property, r.defaultValue), this.changeSetting(l.property, l.defaultValue)
                }
            });
            t.default = c
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(40)) && a.__esModule ? a : {
                    default: a
                };
            n(67);
            const s = {
                OPT_LANGUAGE_FILTER: {
                    model: "chatSettings",
                    namespace: "lol-chat",
                    schemaVersion: 1,
                    property: "chatFilterDisabled",
                    scope: "account",
                    defaultValue: !1
                },
                OPT_CLICK_WARNING: {
                    model: "chatSettings",
                    namespace: "lol-chat",
                    schemaVersion: 1,
                    property: "linkClickWarningEnabled",
                    scope: "account",
                    defaultValue: !0
                },
                OPT_MORE_UNREAD: {
                    model: "chatSettings",
                    namespace: "lol-chat",
                    schemaVersion: 1,
                    property: "moreUnreadsEnabled",
                    scope: "account",
                    defaultValue: !0
                },
                OPT_FRIEND_REQUEST_TOASTS: {
                    model: "chatSettings",
                    namespace: "lol-chat",
                    schemaVersion: 1,
                    property: "friendRequestToastsDisabled",
                    scope: "account",
                    defaultValue: !0
                }
            };
            var r = o.Ember.Controller.extend(i.default, {
                chatSettings: o.Ember.computed.alias("model.chatSettings"),
                socialToggles: o.Ember.computed.alias("model.socialToggles"),
                negatedChatFilter: o.Ember.computed.not("chatFilterDisabled"),
                discordIntegrationEnabled: o.Ember.computed.alias("model.discordIntegrationEnabled"),
                isDiscordLinkAvailable: !1,
                isDiscordLinked: !1,
                isNotDiscordLinked: o.Ember.computed.not("isDiscordLinked"),
                hideChatFilterToggle: o.Ember.computed.bool("socialToggles.ForceChatFilter"),
                hideFriendRequestToastsToggle: o.Ember.computed.bool("socialToggles.FriendRequestToastsDisabled"),
                hideMoreUnreadsToggle: o.Ember.computed("socialToggles.MoreUnreadsEnabled", (function() {
                    const e = this.get("socialToggles.MoreUnreadsEnabled");
                    return null != e && !e
                })),
                shouldShowDiscordButton: o.Ember.computed("discordIntegrationEnabled", "isDiscordLinkAvailable", "isDiscordLinked", (function() {
                    return this.get("discordIntegrationEnabled") && this.get("isDiscordLinkAvailable") && !this.get("isDiscordLinked")
                })),
                persistenceService: o.Ember.inject.service("persistence"),
                init() {
                    this._super(...arguments), Object.values(s).forEach((e => {
                        this.bindSetting(e)
                    })), this.addObserver("negatedChatFilter", this, this.negatedChatFilterObserver)
                },
                handleDiscordLinkedChange(e) {
                    this.set("isDiscordLinked", e)
                },
                handleDiscordLinkAvailableChange(e) {
                    this.set("isDiscordLinkAvailable", e)
                },
                negatedChatFilterObserver: function() {
                    const e = Boolean(this.get("negatedChatFilter"));
                    if (Boolean(this.get(s.OPT_LANGUAGE_FILTER.property)) === e) {
                        this.changeSetting(s.OPT_LANGUAGE_FILTER.property, !e);
                        const t = {
                            Chat: {
                                EnableChatFilter: e ? 1 : 0
                            }
                        };
                        this.get("persistenceService").saveSetting(t, "GamePreferences", "account", "game-settings", 1)
                    }
                },
                willDestroy() {
                    this._super(...arguments), this.removeObserver("negatedChatFilter", this, this.negatedChatFilterObserver)
                },
                resetToDefault: function() {
                    this.set("negatedChatFilter", !s.OPT_LANGUAGE_FILTER.defaultValue), Object.entries(s).forEach((([e, t]) => {
                        "OPT_LANGUAGE_FILTER" !== e && this.changeSetting(t.property, t.defaultValue)
                    }))
                }
            });
            t.default = r
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                DefaultPrivacyLevel: () => c.DefaultPrivacyLevel,
                datadogRum: () => d
            });
            var a = n(134),
                o = n(100),
                i = n(68),
                s = n(219),
                r = n(258),
                l = n(261),
                c = n(85),
                u = (0, r.makeRecorderApi)(s.startRecording),
                d = (0, i.makeRumPublicApi)(i.startRum, u, {
                    startDeflateWorker: l.startDeflateWorker,
                    createDeflateEncoder: l.createDeflateEncoder
                });
            (0, a.defineGlobal)((0, o.getGlobalObject)(), "DD_RUM", d)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                CENSORED_IMG_MARK: () => _.CENSORED_IMG_MARK,
                CENSORED_STRING_MARK: () => _.CENSORED_STRING_MARK,
                DEFAULT_PROGRAMMATIC_ACTION_NAME_ATTRIBUTE: () => u.DEFAULT_PROGRAMMATIC_ACTION_NAME_ATTRIBUTE,
                FORM_PRIVATE_TAG_NAMES: () => _.FORM_PRIVATE_TAG_NAMES,
                LifeCycle: () => i.LifeCycle,
                MAX_ATTRIBUTE_VALUE_CHAR_LENGTH: () => g.MAX_ATTRIBUTE_VALUE_CHAR_LENGTH,
                NodePrivacyLevel: () => _.NodePrivacyLevel,
                PRIVACY_ATTR_NAME: () => _.PRIVACY_ATTR_NAME,
                PRIVACY_ATTR_VALUE_ALLOW: () => _.PRIVACY_ATTR_VALUE_ALLOW,
                PRIVACY_ATTR_VALUE_HIDDEN: () => _.PRIVACY_ATTR_VALUE_HIDDEN,
                PRIVACY_ATTR_VALUE_MASK: () => _.PRIVACY_ATTR_VALUE_MASK,
                PRIVACY_ATTR_VALUE_MASK_USER_INPUT: () => _.PRIVACY_ATTR_VALUE_MASK_USER_INPUT,
                PRIVACY_CLASS_PREFIX: () => _.PRIVACY_CLASS_PREFIX,
                STABLE_ATTRIBUTES: () => d.STABLE_ATTRIBUTES,
                WeakSet: () => p.WeakSet,
                censorText: () => _.censorText,
                cssEscape: () => p.cssEscape,
                elementMatches: () => p.elementMatches,
                forEachChildNodes: () => m.forEachChildNodes,
                getClassList: () => p.getClassList,
                getMutationObserverConstructor: () => r.getMutationObserverConstructor,
                getNodePrivacyLevel: () => _.getNodePrivacyLevel,
                getNodeSelfPrivacyLevel: () => _.getNodeSelfPrivacyLevel,
                getParentElement: () => p.getParentElement,
                getParentNode: () => m.getParentNode,
                getPrivacySelector: () => _.getPrivacySelector,
                getScrollX: () => c.getScrollX,
                getScrollY: () => c.getScrollY,
                getSessionReplayUrl: () => f.getSessionReplayUrl,
                getTextContent: () => _.getTextContent,
                getViewportDimension: () => l.getViewportDimension,
                hasChildNodes: () => m.hasChildNodes,
                initViewportObservable: () => l.initViewportObservable,
                isCommentNode: () => m.isCommentNode,
                isElementNode: () => m.isElementNode,
                isLongDataUrl: () => g.isLongDataUrl,
                isNodeShadowHost: () => m.isNodeShadowHost,
                isNodeShadowRoot: () => m.isNodeShadowRoot,
                isTextNode: () => m.isTextNode,
                makeRumPublicApi: () => a.makeRumPublicApi,
                reducePrivacyLevel: () => _.reducePrivacyLevel,
                sanitizeDataUrl: () => g.sanitizeDataUrl,
                shouldIgnoreElement: () => _.shouldIgnoreElement,
                shouldMaskNode: () => _.shouldMaskNode,
                startRum: () => o.startRum,
                startViewHistory: () => s.startViewHistory
            });
            var a = n(69),
                o = n(136),
                i = n(144),
                s = n(146),
                r = n(137),
                l = n(198),
                c = n(197),
                u = n(162),
                d = n(160),
                m = n(164),
                p = n(161),
                f = n(218),
                g = n(149),
                _ = n(163)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                makeRumPublicApi: () => T
            });
            var a = n(130),
                o = n(131),
                i = n(86),
                s = n(132),
                r = n(133),
                l = n(101),
                c = n(117),
                u = n(134),
                d = n(74),
                m = n(123),
                p = n(125),
                f = n(72),
                g = n(135),
                _ = n(82),
                h = n(126),
                E = n(70),
                v = n(71),
                S = n(77),
                y = "rum";

            function T(e, t, n) {
                void 0 === n && (n = {});
                var T = (0, a.createCustomerDataTrackerManager)(0),
                    b = (0, o.createContextManager)(T.getOrCreateTracker(2)),
                    N = (0, o.createContextManager)(T.getOrCreateTracker(1)),
                    A = (0, i.createTrackingConsentState)(),
                    C = (0, v.createCustomVitalsState)();

                function I() {
                    return (0, E.buildCommonContext)(b, N, t)
                }
                var L = (0, S.createPreStartStrategy)(n, I, A, C, (function(a, o, i) {
                        a.storeContextsAcrossPages && ((0, s.storeContextManager)(a, b, y, 2), (0, s.storeContextManager)(a, N, y, 1)), T.setCompressionStatus(o ? 1 : 2);
                        var l = e(a, t, T, I, i, o && n.createDeflateEncoder ? function(e) {
                            return n.createDeflateEncoder(a, o, e)
                        } : r.createIdentityEncoder, A, C);
                        return t.onRumStart(l.lifeCycle, a, l.session, l.viewHistory, o), L = function(e, t) {
                            return (0, _.assign)({
                                init: function(e) {
                                    (0, h.displayAlreadyInitializedError)("DD_RUM", e)
                                },
                                initConfiguration: e.initConfiguration
                            }, t)
                        }(L, l), l
                    })),
                    k = (0, l.monitor)((function(e) {
                        var t = "object" == typeof e ? e : {
                            name: e
                        };
                        t.context && T.getOrCreateTracker(3).updateCustomerData(t.context), L.startView(t), (0, c.addTelemetryUsage)({
                            feature: "start-view"
                        })
                    })),
                    x = (0, u.makePublicApi)({
                        init: (0, l.monitor)((function(e) {
                            L.init(e, x)
                        })),
                        setTrackingConsent: (0, l.monitor)((function(e) {
                            A.update(e), (0, c.addTelemetryUsage)({
                                feature: "set-tracking-consent",
                                tracking_consent: e
                            })
                        })),
                        setViewName: (0, l.monitor)((function(e) {
                            L.setViewName(e)
                        })),
                        setViewContext: (0, l.monitor)((function(e) {
                            L.setViewContext(e)
                        })),
                        setViewContextProperty: (0, l.monitor)((function(e, t) {
                            L.setViewContextProperty(e, t)
                        })),
                        setGlobalContext: (0, l.monitor)((function(e) {
                            b.setContext(e), (0, c.addTelemetryUsage)({
                                feature: "set-global-context"
                            })
                        })),
                        getGlobalContext: (0, l.monitor)((function() {
                            return b.getContext()
                        })),
                        setGlobalContextProperty: (0, l.monitor)((function(e, t) {
                            b.setContextProperty(e, t), (0, c.addTelemetryUsage)({
                                feature: "set-global-context"
                            })
                        })),
                        removeGlobalContextProperty: (0, l.monitor)((function(e) {
                            return b.removeContextProperty(e)
                        })),
                        clearGlobalContext: (0, l.monitor)((function() {
                            return b.clearContext()
                        })),
                        getInternalContext: (0, l.monitor)((function(e) {
                            return L.getInternalContext(e)
                        })),
                        getInitConfiguration: (0, l.monitor)((function() {
                            return (0, d.deepClone)(L.initConfiguration)
                        })),
                        addAction: function(e, t) {
                            var n = (0, m.createHandlingStack)();
                            (0, l.callMonitored)((function() {
                                L.addAction({
                                    name: (0, p.sanitize)(e),
                                    context: (0, p.sanitize)(t),
                                    startClocks: (0, f.clocksNow)(),
                                    type: "custom",
                                    handlingStack: n
                                }), (0, c.addTelemetryUsage)({
                                    feature: "add-action"
                                })
                            }))
                        },
                        addError: function(e, t) {
                            var n = (0, m.createHandlingStack)();
                            (0, l.callMonitored)((function() {
                                L.addError({
                                    error: e,
                                    handlingStack: n,
                                    context: (0, p.sanitize)(t),
                                    startClocks: (0, f.clocksNow)()
                                }), (0, c.addTelemetryUsage)({
                                    feature: "add-error"
                                })
                            }))
                        },
                        addTiming: (0, l.monitor)((function(e, t) {
                            L.addTiming((0, p.sanitize)(e), t)
                        })),
                        setUser: (0, l.monitor)((function(e) {
                            (0, g.checkUser)(e) && N.setContext((0, g.sanitizeUser)(e)), (0, c.addTelemetryUsage)({
                                feature: "set-user"
                            })
                        })),
                        getUser: (0, l.monitor)((function() {
                            return N.getContext()
                        })),
                        setUserProperty: (0, l.monitor)((function(e, t) {
                            var n, a = (0, g.sanitizeUser)((n = {}, n[e] = t, n))[e];
                            N.setContextProperty(e, a), (0, c.addTelemetryUsage)({
                                feature: "set-user"
                            })
                        })),
                        removeUserProperty: (0, l.monitor)((function(e) {
                            return N.removeContextProperty(e)
                        })),
                        clearUser: (0, l.monitor)((function() {
                            return N.clearContext()
                        })),
                        startView: k,
                        stopSession: (0, l.monitor)((function() {
                            L.stopSession(), (0, c.addTelemetryUsage)({
                                feature: "stop-session"
                            })
                        })),
                        addFeatureFlagEvaluation: (0, l.monitor)((function(e, t) {
                            L.addFeatureFlagEvaluation((0, p.sanitize)(e), (0, p.sanitize)(t)), (0, c.addTelemetryUsage)({
                                feature: "add-feature-flag-evaluation"
                            })
                        })),
                        getSessionReplayLink: (0, l.monitor)((function() {
                            return t.getSessionReplayLink()
                        })),
                        startSessionReplayRecording: (0, l.monitor)((function(e) {
                            t.start(e), (0, c.addTelemetryUsage)({
                                feature: "start-session-replay-recording",
                                force: e && e.force
                            })
                        })),
                        stopSessionReplayRecording: (0, l.monitor)((function() {
                            return t.stop()
                        })),
                        addDurationVital: (0, l.monitor)((function(e, t) {
                            (0, c.addTelemetryUsage)({
                                feature: "add-duration-vital"
                            }), L.addDurationVital({
                                name: (0, p.sanitize)(e),
                                type: "duration",
                                startClocks: (0, f.timeStampToClocks)(t.startTime),
                                duration: t.duration,
                                context: (0, p.sanitize)(t && t.context),
                                description: (0, p.sanitize)(t && t.description)
                            })
                        })),
                        startDurationVital: (0, l.monitor)((function(e, t) {
                            return (0, c.addTelemetryUsage)({
                                feature: "start-duration-vital"
                            }), L.startDurationVital((0, p.sanitize)(e), {
                                context: (0, p.sanitize)(t && t.context),
                                description: (0, p.sanitize)(t && t.description)
                            })
                        })),
                        stopDurationVital: (0, l.monitor)((function(e, t) {
                            (0, c.addTelemetryUsage)({
                                feature: "stop-duration-vital"
                            }), L.stopDurationVital("string" == typeof e ? (0, p.sanitize)(e) : e, {
                                context: (0, p.sanitize)(t && t.context),
                                description: (0, p.sanitize)(t && t.description)
                            })
                        }))
                    });
                return x
            }
        }, (e, t, n) => {
            "use strict";

            function a(e, t, n) {
                return {
                    context: e.getContext(),
                    user: t.getContext(),
                    hasReplay: !!n.isRecording() || void 0
                }
            }
            n.r(t), n.d(t, {
                buildCommonContext: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createCustomVitalsState: () => s,
                startDurationVital: () => l,
                startVitalCollection: () => r,
                stopDurationVital: () => c
            });
            var a = n(72),
                o = n(74),
                i = n(76);

            function s() {
                return {
                    vitalsByName: new Map,
                    vitalsByReference: new WeakMap
                }
            }

            function r(e, t, n) {
                function o(n) {
                    (function(e) {
                        return !t.wasInPageStateDuringPeriod("frozen", e.startClocks.relative, e.duration)
                    })(n) && e.notify(11, function(e, t) {
                        var n = {
                            date: e.startClocks.timeStamp,
                            vital: {
                                id: (0, i.generateUUID)(),
                                type: e.type,
                                name: e.name,
                                duration: (0, a.toServerDuration)(e.duration),
                                description: e.description
                            },
                            type: "vital"
                        };
                        t && (n._dd = {
                            vital: {
                                computed_value: !0
                            }
                        });
                        return {
                            rawRumEvent: n,
                            startTime: e.startClocks.relative,
                            customerContext: e.context,
                            domainContext: {}
                        }
                    }(n, !0))
                }
                return {
                    addDurationVital: o,
                    startDurationVital: function(e, t) {
                        return void 0 === t && (t = {}), l(n, e, t)
                    },
                    stopDurationVital: function(e, t) {
                        void 0 === t && (t = {}), c(o, n, e, t)
                    }
                }
            }

            function l(e, t, n) {
                var o = e.vitalsByName,
                    i = e.vitalsByReference;
                void 0 === n && (n = {});
                var s = {
                        name: t,
                        startClocks: (0, a.clocksNow)(),
                        context: n.context,
                        description: n.description
                    },
                    r = {
                        __dd_vital_reference: !0
                    };
                return o.set(t, s), i.set(r, s), r
            }

            function c(e, t, n, i) {
                var s = t.vitalsByName,
                    r = t.vitalsByReference;
                void 0 === i && (i = {});
                var l = "string" == typeof n ? s.get(n) : r.get(n);
                l && (e(function(e, t, n, i) {
                    var s;
                    return {
                        name: e.name,
                        type: "duration",
                        startClocks: t,
                        duration: (0, a.elapsed)(t.timeStamp, i.timeStamp),
                        context: (0, o.combine)(e.context, n.context),
                        description: null !== (s = n.description) && void 0 !== s ? s : e.description
                    }
                }(l, l.startClocks, i, (0, a.clocksNow)())), "string" == typeof n ? s.delete(n) : r.delete(n))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ONE_DAY: () => l,
                ONE_HOUR: () => r,
                ONE_MINUTE: () => s,
                ONE_SECOND: () => i,
                ONE_YEAR: () => c,
                addDuration: () => y,
                clocksNow: () => E,
                clocksOrigin: () => v,
                currentDrift: () => p,
                dateNow: () => g,
                elapsed: () => S,
                getRelativeTime: () => T,
                getTimeStamp: () => b,
                looksLikeRelativeTime: () => N,
                relativeNow: () => h,
                relativeToClocks: () => u,
                timeStampNow: () => _,
                timeStampToClocks: () => d,
                toServerDuration: () => f
            });
            var a, o = n(73),
                i = 1e3,
                s = 60 * i,
                r = 60 * s,
                l = 24 * r,
                c = 365 * l;

            function u(e) {
                return {
                    relative: e,
                    timeStamp: m(e)
                }
            }

            function d(e) {
                return {
                    relative: T(e),
                    timeStamp: e
                }
            }

            function m(e) {
                var t = g() - performance.now();
                return t > A() ? Math.round(y(t, e)) : b(e)
            }

            function p() {
                return Math.round(g() - y(A(), performance.now()))
            }

            function f(e) {
                return (0, o.isNumber)(e) ? (0, o.round)(1e6 * e, 0) : e
            }

            function g() {
                return (new Date).getTime()
            }

            function _() {
                return g()
            }

            function h() {
                return performance.now()
            }

            function E() {
                return {
                    relative: h(),
                    timeStamp: _()
                }
            }

            function v() {
                return {
                    relative: 0,
                    timeStamp: A()
                }
            }

            function S(e, t) {
                return t - e
            }

            function y(e, t) {
                return e + t
            }

            function T(e) {
                return e - A()
            }

            function b(e) {
                return Math.round(y(A(), e))
            }

            function N(e) {
                return e < c
            }

            function A() {
                return void 0 === a && (a = performance.timing.navigationStart), a
            }
        }, (e, t, n) => {
            "use strict";

            function a(e) {
                return 0 !== e && 100 * Math.random() <= e
            }

            function o(e, t) {
                return +e.toFixed(t)
            }

            function i(e) {
                return s(e) && e >= 0 && e <= 100
            }

            function s(e) {
                return "number" == typeof e
            }
            n.r(t), n.d(t, {
                isNumber: () => s,
                isPercentage: () => i,
                performDraw: () => a,
                round: () => o
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                combine: () => s,
                deepClone: () => i,
                mergeInto: () => o
            });
            var a = n(75);

            function o(e, t, n) {
                if (void 0 === n && (n = function() {
                        if ("undefined" != typeof WeakSet) {
                            var e = new WeakSet;
                            return {
                                hasAlreadyBeenSeen: function(t) {
                                    var n = e.has(t);
                                    return n || e.add(t), n
                                }
                            }
                        }
                        var t = [];
                        return {
                            hasAlreadyBeenSeen: function(e) {
                                var n = t.indexOf(e) >= 0;
                                return n || t.push(e), n
                            }
                        }
                    }()), void 0 === t) return e;
                if ("object" != typeof t || null === t) return t;
                if (t instanceof Date) return new Date(t.getTime());
                if (t instanceof RegExp) {
                    var i = t.flags || [t.global ? "g" : "", t.ignoreCase ? "i" : "", t.multiline ? "m" : "", t.sticky ? "y" : "", t.unicode ? "u" : ""].join("");
                    return new RegExp(t.source, i)
                }
                if (!n.hasAlreadyBeenSeen(t)) {
                    if (Array.isArray(t)) {
                        for (var s = Array.isArray(e) ? e : [], r = 0; r < t.length; ++r) s[r] = o(s[r], t[r], n);
                        return s
                    }
                    var l = "object" === (0, a.getType)(e) ? e : {};
                    for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (l[c] = o(l[c], t[c], n));
                    return l
                }
            }

            function i(e) {
                return o(void 0, e)
            }

            function s() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                for (var a = 0, i = t; a < i.length; a++) {
                    var s = i[a];
                    null != s && (e = o(e, s))
                }
                return e
            }
        }, (e, t, n) => {
            "use strict";

            function a(e) {
                return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
            }
            n.r(t), n.d(t, {
                getType: () => a
            })
        }, (e, t, n) => {
            "use strict";

            function a(e) {
                return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, a)
            }
            n.r(t), n.d(t, {
                findCommaSeparatedValue: () => i,
                findCommaSeparatedValues: () => s,
                generateUUID: () => a,
                safeTruncate: () => r
            });
            var o = /([\w-]+)\s*=\s*([^;]+)/g;

            function i(e, t) {
                for (o.lastIndex = 0;;) {
                    var n = o.exec(e);
                    if (!n) break;
                    if (n[1] === t) return n[2]
                }
            }

            function s(e) {
                var t = new Map;
                for (o.lastIndex = 0;;) {
                    var n = o.exec(e);
                    if (!n) break;
                    t.set(n[1], n[2])
                }
                return t
            }

            function r(e, t, n) {
                void 0 === n && (n = "");
                var a = e.charCodeAt(t - 1),
                    o = a >= 55296 && a <= 56319 ? t + 1 : t;
                return e.length <= o ? e : "".concat(e.slice(0, o)).concat(n)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createPreStartStrategy: () => h
            });
            var a = n(114),
                o = n(116),
                i = n(117),
                s = n(126),
                r = n(83),
                l = n(102),
                c = n(127),
                u = n(121),
                d = n(129),
                m = n(72),
                p = n(82),
                f = n(78),
                g = n(71),
                _ = n(113);

            function h(e, t, n, h, E) {
                var v, S, y, T, b = e.ignoreInitIfSyntheticsWillInjectRum,
                    N = e.startDeflateWorker,
                    A = (0, a.createBoundedBuffer)(),
                    C = n.observable.subscribe(I);

                function I() {
                    if (y && T && n.isGranted()) {
                        var e;
                        if (C.unsubscribe(), T.trackViewsManually) {
                            if (!v) return;
                            A.remove(v.callback), e = v.options
                        }
                        var t = E(T, S, e);
                        A.drain(t)
                    }
                }

                function L(e) {
                    var t = (0, o.canUseEventBridge)();
                    if (t && (e = function(e) {
                            var t, n;
                            return (0, p.assign)({}, e, {
                                applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                                clientToken: "empty",
                                sessionSampleRate: 100,
                                defaultPrivacyLevel: null !== (t = e.defaultPrivacyLevel) && void 0 !== t ? t : null === (n = (0, o.getEventBridge)()) || void 0 === n ? void 0 : n.getPrivacyLevel()
                            })
                        }(e)), y = e, (0, i.addTelemetryConfiguration)((0, f.serializeRumConfiguration)(e)), T)(0, s.displayAlreadyInitializedError)("DD_RUM", e);
                    else {
                        var a = (0, f.validateAndBuildRumConfiguration)(e);
                        a && (t || a.sessionStoreStrategyType ? a.compressIntakeRequests && !t && N && !(S = N(a, "Datadog RUM", l.noop)) || (T = a, (0, c.initFetchObservable)().subscribe(l.noop), n.tryToInit(a.trackingConsent), I()) : r.display.warn("No storage available for session. We will not send any data."))
                    }
                }
                var k = function(e) {
                    A.add((function(t) {
                        return t.addDurationVital(e)
                    }))
                };
                return {
                    init: function(e, t) {
                        e ? ((0, u.initFeatureFlags)(e.enableExperimentalFeatures), y = e, b && (0, d.willSyntheticsInjectRum)() || ((0, _.callPluginsMethod)(e.betaPlugins, "onInit", {
                            initConfiguration: e,
                            publicApi: t
                        }), e.remoteConfigurationId && (0, u.isExperimentalFeatureEnabled)(u.ExperimentalFeature.REMOTE_CONFIGURATION) ? (0, f.fetchAndApplyRemoteConfiguration)(e, L) : L(e))) : r.display.error("Missing configuration")
                    },
                    get initConfiguration() {
                        return y
                    },
                    getInternalContext: l.noop,
                    stopSession: l.noop,
                    addTiming: function(e, t) {
                        void 0 === t && (t = (0, m.timeStampNow)()), A.add((function(n) {
                            return n.addTiming(e, t)
                        }))
                    },
                    startView: function(e, t) {
                        void 0 === t && (t = (0, m.clocksNow)());
                        var n = function(n) {
                            n.startView(e, t)
                        };
                        A.add(n), v || (v = {
                            options: e,
                            callback: n
                        }, I())
                    },
                    setViewName: function(e) {
                        A.add((function(t) {
                            return t.setViewName(e)
                        }))
                    },
                    setViewContext: function(e) {
                        A.add((function(t) {
                            return t.setViewContext(e)
                        }))
                    },
                    setViewContextProperty: function(e, t) {
                        A.add((function(n) {
                            return n.setViewContextProperty(e, t)
                        }))
                    },
                    addAction: function(e, n) {
                        void 0 === n && (n = t()), A.add((function(t) {
                            return t.addAction(e, n)
                        }))
                    },
                    addError: function(e, n) {
                        void 0 === n && (n = t()), A.add((function(t) {
                            return t.addError(e, n)
                        }))
                    },
                    addFeatureFlagEvaluation: function(e, t) {
                        A.add((function(n) {
                            return n.addFeatureFlagEvaluation(e, t)
                        }))
                    },
                    startDurationVital: function(e, t) {
                        return (0, g.startDurationVital)(h, e, t)
                    },
                    stopDurationVital: function(e, t) {
                        (0, g.stopDurationVital)(k, h, e, t)
                    },
                    addDurationVital: k
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_PROPAGATOR_TYPES: () => a.DEFAULT_PROPAGATOR_TYPES,
                REMOTE_CONFIGURATION_URL: () => o.REMOTE_CONFIGURATION_URL,
                applyRemoteConfiguration: () => o.applyRemoteConfiguration,
                fetchAndApplyRemoteConfiguration: () => o.fetchAndApplyRemoteConfiguration,
                fetchRemoteConfiguration: () => o.fetchRemoteConfiguration,
                serializeRumConfiguration: () => a.serializeRumConfiguration,
                validateAndBuildRumConfiguration: () => a.validateAndBuildRumConfiguration
            });
            var a = n(79),
                o = n(111)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_PROPAGATOR_TYPES: () => u,
                serializeRumConfiguration: () => p,
                validateAndBuildRumConfiguration: () => d
            });
            var a = n(83),
                o = n(85),
                i = n(82),
                s = n(84),
                r = n(81),
                l = n(75),
                c = n(80),
                u = ["tracecontext", "datadog"];

            function d(e) {
                var t, n;
                if (e.applicationId) {
                    if ((0, o.isSampleRate)(e.sessionReplaySampleRate, "Session Replay") && (0, o.isSampleRate)(e.traceSampleRate, "Trace"))
                        if (void 0 === e.excludedActivityUrls || Array.isArray(e.excludedActivityUrls)) {
                            var l = function(e) {
                                if (void 0 === e.allowedTracingUrls) return [];
                                if (!Array.isArray(e.allowedTracingUrls)) return void a.display.error("Allowed Tracing URLs should be an array");
                                if (0 !== e.allowedTracingUrls.length && void 0 === e.service) return void a.display.error("Service needs to be configured when tracing is enabled");
                                var t = [];
                                return e.allowedTracingUrls.forEach((function(e) {
                                    (0, r.isMatchOption)(e) ? t.push({
                                        match: e,
                                        propagatorTypes: u
                                    }): (0, c.isTracingOption)(e) ? t.push(e) : a.display.warn("Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter", e)
                                })), t
                            }(e);
                            if (l) {
                                var d = (0, o.validateAndBuildConfiguration)(e);
                                if (d) return (0, i.assign)({
                                    applicationId: e.applicationId,
                                    version: e.version || void 0,
                                    actionNameAttribute: e.actionNameAttribute,
                                    sessionReplaySampleRate: null !== (t = e.sessionReplaySampleRate) && void 0 !== t ? t : 0,
                                    startSessionReplayRecordingManually: !!e.startSessionReplayRecordingManually,
                                    traceSampleRate: e.traceSampleRate,
                                    allowedTracingUrls: l,
                                    excludedActivityUrls: null !== (n = e.excludedActivityUrls) && void 0 !== n ? n : [],
                                    workerUrl: e.workerUrl,
                                    compressIntakeRequests: !!e.compressIntakeRequests,
                                    trackUserInteractions: !!e.trackUserInteractions,
                                    trackViewsManually: !!e.trackViewsManually,
                                    trackResources: !!e.trackResources,
                                    trackLongTasks: !!e.trackLongTasks,
                                    subdomain: e.subdomain,
                                    defaultPrivacyLevel: (0, s.objectHasValue)(o.DefaultPrivacyLevel, e.defaultPrivacyLevel) ? e.defaultPrivacyLevel : o.DefaultPrivacyLevel.MASK,
                                    enablePrivacyForActionName: !!e.enablePrivacyForActionName,
                                    customerDataTelemetrySampleRate: 1,
                                    traceContextInjection: (0, s.objectHasValue)(o.TraceContextInjection, e.traceContextInjection) ? e.traceContextInjection : o.TraceContextInjection.ALL,
                                    plugins: e.betaPlugins || []
                                }, d)
                            }
                        } else a.display.error("Excluded Activity Urls should be an array")
                } else a.display.error("Application ID is not configured, no RUM data will be collected.")
            }

            function m(e) {
                var t = new Set;
                return Array.isArray(e.allowedTracingUrls) && e.allowedTracingUrls.length > 0 && e.allowedTracingUrls.forEach((function(e) {
                    (0, r.isMatchOption)(e) ? u.forEach((function(e) {
                        return t.add(e)
                    })): "object" === (0, l.getType)(e) && Array.isArray(e.propagatorTypes) && e.propagatorTypes.forEach((function(e) {
                        return t.add(e)
                    }))
                })), (0, i.arrayFrom)(t)
            }

            function p(e) {
                var t, n = (0, o.serializeConfiguration)(e);
                return (0, i.assign)({
                    session_replay_sample_rate: e.sessionReplaySampleRate,
                    start_session_replay_recording_manually: e.startSessionReplayRecordingManually,
                    trace_sample_rate: e.traceSampleRate,
                    trace_context_injection: e.traceContextInjection,
                    action_name_attribute: e.actionNameAttribute,
                    use_allowed_tracing_urls: Array.isArray(e.allowedTracingUrls) && e.allowedTracingUrls.length > 0,
                    selected_tracing_propagators: m(e),
                    default_privacy_level: e.defaultPrivacyLevel,
                    enable_privacy_for_action_name: e.enablePrivacyForActionName,
                    use_excluded_activity_urls: Array.isArray(e.excludedActivityUrls) && e.excludedActivityUrls.length > 0,
                    use_worker_url: !!e.workerUrl,
                    compress_intake_requests: e.compressIntakeRequests,
                    track_views_manually: e.trackViewsManually,
                    track_user_interactions: e.trackUserInteractions,
                    track_resources: e.trackResources,
                    track_long_task: e.trackLongTasks,
                    plugins: null === (t = e.betaPlugins) || void 0 === t ? void 0 : t.map((function(e) {
                        var t;
                        return (0, i.assign)({
                            name: e.name
                        }, null === (t = e.getConfigurationTelemetry) || void 0 === t ? void 0 : t.call(e))
                    }))
                }, n)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                clearTracingIfNeeded: () => u,
                createTraceIdentifier: () => g,
                getCrypto: () => f,
                isTracingOption: () => c,
                isTracingSupported: () => p,
                startTracer: () => d
            });
            var a = n(75),
                o = n(81),
                i = n(84),
                s = n(82),
                r = n(73),
                l = n(85);

            function c(e) {
                var t = e;
                return "object" === (0, a.getType)(t) && (0, o.isMatchOption)(t.match) && Array.isArray(t.propagatorTypes)
            }

            function u(e) {
                0 !== e.status || e.isAborted || (e.traceId = void 0, e.spanId = void 0, e.traceSampled = void 0)
            }

            function d(e, t) {
                return {
                    clearTracingIfNeeded: u,
                    traceFetch: function(n) {
                        return m(e, n, t, (function(e) {
                            var t;
                            if (n.input instanceof Request && !(null === (t = n.init) || void 0 === t ? void 0 : t.headers)) n.input = new Request(n.input), Object.keys(e).forEach((function(t) {
                                n.input.headers.append(t, e[t])
                            }));
                            else {
                                n.init = (0, i.shallowClone)(n.init);
                                var a = [];
                                n.init.headers instanceof Headers ? n.init.headers.forEach((function(e, t) {
                                    a.push([t, e])
                                })) : Array.isArray(n.init.headers) ? n.init.headers.forEach((function(e) {
                                    a.push(e)
                                })) : n.init.headers && Object.keys(n.init.headers).forEach((function(e) {
                                    a.push([e, n.init.headers[e]])
                                })), n.init.headers = a.concat((0, s.objectEntries)(e))
                            }
                        }))
                    },
                    traceXhr: function(n, a) {
                        return m(e, n, t, (function(e) {
                            Object.keys(e).forEach((function(t) {
                                a.setRequestHeader(t, e[t])
                            }))
                        }))
                    }
                }
            }

            function m(e, t, n, a) {
                if (p() && n.findTrackedSession()) {
                    var i, c, u, d, m, f = (0, s.find)(e.allowedTracingUrls, (function(e) {
                        return (0, o.matchList)([e.match], t.url, !0)
                    }));
                    if (f)
                        if (t.traceSampled = !(0, r.isNumber)(e.traceSampleRate) || (0, r.performDraw)(e.traceSampleRate), t.traceSampled || e.traceContextInjection === l.TraceContextInjection.ALL) t.traceId = g(), t.spanId = g(), a((i = t.traceId, c = t.spanId, u = t.traceSampled, d = f.propagatorTypes, m = {}, d.forEach((function(e) {
                            switch (e) {
                                case "datadog":
                                    (0, s.assign)(m, {
                                        "x-datadog-origin": "rum",
                                        "x-datadog-parent-id": c.toDecimalString(),
                                        "x-datadog-sampling-priority": u ? "1" : "0",
                                        "x-datadog-trace-id": i.toDecimalString()
                                    });
                                    break;
                                case "tracecontext":
                                    (0, s.assign)(m, {
                                        traceparent: "00-0000000000000000".concat(i.toPaddedHexadecimalString(), "-").concat(c.toPaddedHexadecimalString(), "-0").concat(u ? "1" : "0")
                                    });
                                    break;
                                case "b3":
                                    (0, s.assign)(m, {
                                        b3: "".concat(i.toPaddedHexadecimalString(), "-").concat(c.toPaddedHexadecimalString(), "-").concat(u ? "1" : "0")
                                    });
                                    break;
                                case "b3multi":
                                    (0, s.assign)(m, {
                                        "X-B3-TraceId": i.toPaddedHexadecimalString(),
                                        "X-B3-SpanId": c.toPaddedHexadecimalString(),
                                        "X-B3-Sampled": u ? "1" : "0"
                                    })
                            }
                        })), m))
                }
            }

            function p() {
                return void 0 !== f()
            }

            function f() {
                return window.crypto || window.msCrypto
            }

            function g() {
                var e = new Uint8Array(8);

                function t(t) {
                    return 16777216 * e[t] + (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3]
                }

                function n(e) {
                    var n = t(0),
                        a = t(4),
                        o = "";
                    do {
                        var i = n % e * 4294967296 + a;
                        n = Math.floor(n / e), a = Math.floor(i / e), o = (i % e).toString(e) + o
                    } while (n || a);
                    return o
                }
                return f().getRandomValues(e), e[0] = 127 & e[0], {
                    toDecimalString: function() {
                        return n(10)
                    },
                    toPaddedHexadecimalString: function() {
                        var e = n(16);
                        return Array(17 - e.length).join("0") + e
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                isMatchOption: () => s,
                matchList: () => r
            });
            var a = n(82),
                o = n(83),
                i = n(75);

            function s(e) {
                var t = (0, i.getType)(e);
                return "string" === t || "function" === t || e instanceof RegExp
            }

            function r(e, t, n) {
                return void 0 === n && (n = !1), e.some((function(e) {
                    try {
                        if ("function" == typeof e) return e(t);
                        if (e instanceof RegExp) return e.test(t);
                        if ("string" == typeof e) return n ? (0, a.startsWith)(t, e) : e === t
                    } catch (e) {
                        o.display.error(e)
                    }
                    return !1
                }))
            }
        }, (e, t, n) => {
            "use strict";

            function a(e, t) {
                return -1 !== e.indexOf(t)
            }

            function o(e) {
                if (Array.from) return Array.from(e);
                var t = [];
                if (e instanceof Set) e.forEach((function(e) {
                    return t.push(e)
                }));
                else
                    for (var n = 0; n < e.length; n++) t.push(e[n]);
                return t
            }

            function i(e, t) {
                for (var n = 0; n < e.length; n += 1) {
                    var a = e[n];
                    if (t(a, n)) return a
                }
            }

            function s(e, t) {
                for (var n = e.length - 1; n >= 0; n -= 1) {
                    var a = e[n];
                    if (t(a, n, e)) return a
                }
            }

            function r(e, t) {
                Array.prototype.forEach.call(e, t)
            }

            function l(e) {
                return Object.keys(e).map((function(t) {
                    return e[t]
                }))
            }

            function c(e) {
                return Object.keys(e).map((function(t) {
                    return [t, e[t]]
                }))
            }

            function u(e, t) {
                return e.slice(0, t.length) === t
            }

            function d(e, t) {
                return e.slice(-t.length) === t
            }

            function m(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.forEach((function(t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })), e
            }
            n.r(t), n.d(t, {
                arrayFrom: () => o,
                assign: () => m,
                endsWith: () => d,
                find: () => i,
                findLast: () => s,
                forEach: () => r,
                includes: () => a,
                objectEntries: () => c,
                objectValues: () => l,
                startsWith: () => u
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ConsoleApiName: () => a,
                DOCS_ORIGIN: () => l,
                DOCS_TROUBLESHOOTING: () => c,
                MORE_DETAILS: () => u,
                display: () => r,
                globalConsole: () => o,
                originalConsoleMethods: () => i
            });
            var a = {
                    log: "log",
                    debug: "debug",
                    info: "info",
                    warn: "warn",
                    error: "error"
                },
                o = console,
                i = {};
            Object.keys(a).forEach((function(e) {
                i[e] = o[e]
            }));
            var s = "Datadog Browser SDK:",
                r = {
                    debug: i.debug.bind(o, s),
                    log: i.log.bind(o, s),
                    info: i.info.bind(o, s),
                    warn: i.warn.bind(o, s),
                    error: i.error.bind(o, s)
                },
                l = "https://docs.datadoghq.com",
                c = "".concat(l, "/real_user_monitoring/browser/troubleshooting"),
                u = "More details:"
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                isEmptyObject: () => s,
                mapValues: () => r,
                objectHasValue: () => i,
                shallowClone: () => o
            });
            var a = n(82);

            function o(e) {
                return (0, a.assign)({}, e)
            }

            function i(e, t) {
                return Object.keys(e).some((function(n) {
                    return e[n] === t
                }))
            }

            function s(e) {
                return 0 === Object.keys(e).length
            }

            function r(e, t) {
                for (var n = {}, a = 0, o = Object.keys(e); a < o.length; a++) {
                    var i = o[a];
                    n[i] = t(e[i])
                }
                return n
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                DefaultPrivacyLevel: () => p,
                TraceContextInjection: () => f,
                isSampleRate: () => _,
                serializeConfiguration: () => E,
                validateAndBuildConfiguration: () => h
            });
            var a = n(88),
                o = n(83),
                i = n(72),
                s = n(73),
                r = n(104),
                l = n(84),
                c = n(82),
                u = n(89),
                d = n(86),
                m = n(105),
                p = {
                    ALLOW: "allow",
                    MASK: "mask",
                    MASK_USER_INPUT: "mask-user-input"
                },
                f = {
                    ALL: "all",
                    SAMPLED: "sampled"
                };

            function g(e, t) {
                return null == e || "string" == typeof e || (o.display.error("".concat(t, " must be defined as a string")), !1)
            }

            function _(e, t) {
                return !(void 0 !== e && !(0, s.isPercentage)(e)) || (o.display.error("".concat(t, " Sample Rate should be a number between 0 and 100")), !1)
            }

            function h(e) {
                var t, n, s, p, f;
                if (e && e.clientToken) {
                    if ((!(h = e.site) || "string" != typeof h || /(datadog|ddog|datad0g|dd0g)/.test(h) || (o.display.error("Site should be a valid Datadog site. ".concat(o.MORE_DETAILS, " ").concat(o.DOCS_ORIGIN, "/getting_started/site/.")), 0)) && _(e.sessionSampleRate, "Session") && _(e.telemetrySampleRate, "Telemetry") && _(e.telemetryConfigurationSampleRate, "Telemetry Configuration") && _(e.telemetryUsageSampleRate, "Telemetry Usage") && g(e.version, "Version") && g(e.env, "Env") && g(e.service, "Service")) {
                        var h;
                        if (void 0 === e.trackingConsent || (0, l.objectHasValue)(d.TrackingConsent, e.trackingConsent)) return (0, c.assign)({
                            beforeSend: e.beforeSend && (0, a.catchUserErrors)(e.beforeSend, "beforeSend threw an error:"),
                            sessionStoreStrategyType: (0, u.selectSessionStoreStrategyType)(e),
                            sessionSampleRate: null !== (t = e.sessionSampleRate) && void 0 !== t ? t : 100,
                            telemetrySampleRate: null !== (n = e.telemetrySampleRate) && void 0 !== n ? n : 20,
                            telemetryConfigurationSampleRate: null !== (s = e.telemetryConfigurationSampleRate) && void 0 !== s ? s : 5,
                            telemetryUsageSampleRate: null !== (p = e.telemetryUsageSampleRate) && void 0 !== p ? p : 5,
                            service: e.service || void 0,
                            silentMultipleInit: !!e.silentMultipleInit,
                            allowUntrustedEvents: !!e.allowUntrustedEvents,
                            trackingConsent: null !== (f = e.trackingConsent) && void 0 !== f ? f : d.TrackingConsent.GRANTED,
                            storeContextsAcrossPages: !!e.storeContextsAcrossPages,
                            batchBytesLimit: 16 * r.ONE_KIBI_BYTE,
                            eventRateLimiterThreshold: 3e3,
                            maxTelemetryEventsPerPage: 15,
                            flushTimeout: 30 * i.ONE_SECOND,
                            batchMessagesLimit: 50,
                            messageBytesLimit: 256 * r.ONE_KIBI_BYTE
                        }, (0, m.computeTransportConfiguration)(e));
                        o.display.error('Tracking Consent should be either "granted" or "not-granted"')
                    }
                } else o.display.error("Client Token is not configured, we will not send any data.")
            }

            function E(e) {
                return {
                    session_sample_rate: e.sessionSampleRate,
                    telemetry_sample_rate: e.telemetrySampleRate,
                    telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
                    telemetry_usage_sample_rate: e.telemetryUsageSampleRate,
                    use_before_send: !!e.beforeSend,
                    use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
                    use_partitioned_cross_site_session_cookie: e.usePartitionedCrossSiteSessionCookie,
                    use_secure_session_cookie: e.useSecureSessionCookie,
                    use_proxy: !!e.proxy,
                    silent_multiple_init: e.silentMultipleInit,
                    track_session_across_subdomains: e.trackSessionAcrossSubdomains,
                    allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
                    store_contexts_across_pages: !!e.storeContextsAcrossPages,
                    allow_untrusted_events: !!e.allowUntrustedEvents,
                    tracking_consent: e.trackingConsent
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TrackingConsent: () => o,
                createTrackingConsentState: () => i
            });
            var a = n(87),
                o = {
                    GRANTED: "granted",
                    NOT_GRANTED: "not-granted"
                };

            function i(e) {
                var t = new a.Observable;
                return {
                    tryToInit: function(t) {
                        e || (e = t)
                    },
                    update: function(n) {
                        e = n, t.notify()
                    },
                    isGranted: function() {
                        return e === o.GRANTED
                    },
                    observable: t
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                Observable: () => a,
                mergeObservables: () => o
            });
            var a = function() {
                function e(e) {
                    this.onFirstSubscribe = e, this.observers = []
                }
                return e.prototype.subscribe = function(e) {
                    var t = this;
                    return this.observers.push(e), 1 === this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0), {
                        unsubscribe: function() {
                            t.observers = t.observers.filter((function(t) {
                                return e !== t
                            })), !t.observers.length && t.onLastUnsubscribe && t.onLastUnsubscribe()
                        }
                    }
                }, e.prototype.notify = function(e) {
                    this.observers.forEach((function(t) {
                        return t(e)
                    }))
                }, e
            }();

            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new a((function(t) {
                    var n = e.map((function(e) {
                        return e.subscribe((function(e) {
                            return t.notify(e)
                        }))
                    }));
                    return function() {
                        return n.forEach((function(e) {
                            return e.unsubscribe()
                        }))
                    }
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                catchUserErrors: () => o
            });
            var a = n(83);

            function o(e, t) {
                return function() {
                    for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                    try {
                        return e.apply(void 0, n)
                    } catch (e) {
                        a.display.error(t, e)
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                STORAGE_POLL_DELAY: () => p,
                selectSessionStoreStrategyType: () => f,
                startSessionStore: () => g
            });
            var a = n(98),
                o = n(87),
                i = n(72),
                s = n(102),
                r = n(76),
                l = n(82),
                c = n(90),
                u = n(95),
                d = n(97),
                m = n(103),
                p = i.ONE_SECOND;

            function f(e) {
                var t = (0, c.selectCookieStrategy)(e);
                return !t && e.allowFallbackToLocalStorage && (t = (0, d.selectLocalStorageStrategy)()), t
            }

            function g(e, t, n) {
                var f, g = new o.Observable,
                    _ = new o.Observable,
                    h = new o.Observable,
                    E = "Cookie" === e.type ? (0, c.initCookieStrategy)(e.cookieOptions) : (0, d.initLocalStorageStrategy)(),
                    v = E.expireSession,
                    S = (0, a.setInterval)((function() {
                        (0, m.processSessionStoreOperations)({
                            process: function(e) {
                                return (0, u.isSessionInExpiredState)(e) ? (0, u.getExpiredSessionState)() : void 0
                            },
                            after: N
                        }, E)
                    }), p);
                A();
                var y = (0, s.throttle)((function() {
                        (0, m.processSessionStoreOperations)({
                            process: function(e) {
                                if (!(0, u.isSessionInNotStartedState)(e)) {
                                    var a = N(e);
                                    return function(e) {
                                        if ((0, u.isSessionInNotStartedState)(e)) return !1;
                                        var a = n(e[t]),
                                            o = a.trackingType,
                                            s = a.isTracked;
                                        e[t] = o, delete e.isExpired, s && !e.id && (e.id = (0, r.generateUUID)(), e.created = String((0, i.dateNow)()))
                                    }(a), a
                                }
                            },
                            after: function(e) {
                                (0, u.isSessionStarted)(e) && !C() && function(e) {
                                    f = e, g.notify()
                                }(e), f = e
                            }
                        }, E)
                    }), p),
                    T = y.throttled,
                    b = y.cancel;

                function N(e) {
                    return (0, u.isSessionInExpiredState)(e) && (e = (0, u.getExpiredSessionState)()), C() && (! function(e) {
                        return f.id !== e.id || f[t] !== e[t]
                    }(e) ? (h.notify({
                        previousState: f,
                        newState: e
                    }), f = e) : (f = (0, u.getExpiredSessionState)(), _.notify())), e
                }

                function A() {
                    (0, m.processSessionStoreOperations)({
                        process: function(e) {
                            if ((0, u.isSessionInNotStartedState)(e)) return (0, u.getExpiredSessionState)()
                        },
                        after: function(e) {
                            f = e
                        }
                    }, E)
                }

                function C() {
                    return void 0 !== f[t]
                }
                return {
                    expandOrRenewSession: T,
                    expandSession: function() {
                        (0, m.processSessionStoreOperations)({
                            process: function(e) {
                                return C() ? N(e) : void 0
                            }
                        }, E)
                    },
                    getSession: function() {
                        return f
                    },
                    renewObservable: g,
                    expireObservable: _,
                    sessionStateUpdateObservable: h,
                    restartSession: A,
                    expire: function() {
                        b(), v(), N((0, u.getExpiredSessionState)())
                    },
                    stop: function() {
                        (0, a.clearInterval)(S)
                    },
                    updateSessionState: function(e) {
                        (0, m.processSessionStoreOperations)({
                            process: function(t) {
                                return (0, l.assign)({}, t, e)
                            },
                            after: N
                        }, E)
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                buildCookieOptions: () => m,
                initCookieStrategy: () => u,
                selectCookieStrategy: () => c
            });
            var a = n(92),
                o = n(91),
                i = n(93),
                s = n(96),
                r = n(95),
                l = n(94);

            function c(e) {
                var t = m(e);
                return (0, o.areCookiesAuthorized)(t) ? {
                    type: "Cookie",
                    cookieOptions: t
                } : void 0
            }

            function u(e) {
                var t, n = {
                    isLockEnabled: (0, a.isChromium)(),
                    persistSession: (t = e, function(e) {
                        (0, o.setCookie)(l.SESSION_STORE_KEY, (0, r.toSessionString)(e), s.SESSION_EXPIRATION_DELAY, t)
                    }),
                    retrieveSession: d,
                    expireSession: function() {
                        return function(e) {
                            (0, o.setCookie)(l.SESSION_STORE_KEY, (0, r.toSessionString)((0, r.getExpiredSessionState)()), s.SESSION_TIME_OUT_DELAY, e)
                        }(e)
                    }
                };
                return (0, i.tryOldCookiesMigration)(n), n
            }

            function d() {
                var e = (0, o.getCookie)(l.SESSION_STORE_KEY);
                return (0, r.toSessionState)(e)
            }

            function m(e) {
                var t = {};
                return t.secure = !!e.useSecureSessionCookie || !!e.usePartitionedCrossSiteSessionCookie || !!e.useCrossSiteSessionCookie, t.crossSite = !!e.usePartitionedCrossSiteSessionCookie || !!e.useCrossSiteSessionCookie, t.partitioned = !!e.usePartitionedCrossSiteSessionCookie, e.trackSessionAcrossSubdomains && (t.domain = (0, o.getCurrentSite)()), t
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                areCookiesAuthorized: () => p,
                deleteCookie: () => m,
                getCookie: () => c,
                getCurrentSite: () => f,
                getInitCookie: () => u,
                resetInitCookies: () => d,
                setCookie: () => l
            });
            var a, o, i = n(83),
                s = n(72),
                r = n(76);

            function l(e, t, n, a) {
                var o = new Date;
                o.setTime(o.getTime() + n);
                var i = "expires=".concat(o.toUTCString()),
                    s = a && a.crossSite ? "none" : "strict",
                    r = a && a.domain ? ";domain=".concat(a.domain) : "",
                    l = a && a.secure ? ";secure" : "",
                    c = a && a.partitioned ? ";partitioned" : "";
                document.cookie = "".concat(e, "=").concat(t, ";").concat(i, ";path=/;samesite=").concat(s).concat(r).concat(l).concat(c)
            }

            function c(e) {
                return (0, r.findCommaSeparatedValue)(document.cookie, e)
            }

            function u(e) {
                return a || (a = (0, r.findCommaSeparatedValues)(document.cookie)), a.get(e)
            }

            function d() {
                a = void 0
            }

            function m(e, t) {
                l(e, "", 0, t)
            }

            function p(e) {
                if (void 0 === document.cookie || null === document.cookie) return !1;
                try {
                    var t = "dd_cookie_test_".concat((0, r.generateUUID)()),
                        n = "test";
                    l(t, n, s.ONE_MINUTE, e);
                    var a = c(t) === n;
                    return m(t, e), a
                } catch (e) {
                    return i.display.error(e), !1
                }
            }

            function f() {
                if (void 0 === o) {
                    for (var e = "dd_site_test_".concat((0, r.generateUUID)()), t = window.location.hostname.split("."), n = t.pop(); t.length && !c(e);) n = "".concat(t.pop(), ".").concat(n), l(e, "test", s.ONE_SECOND, {
                        domain: n
                    });
                    m(e, {
                        domain: n
                    }), o = n
                }
                return o
            }
        }, (e, t, n) => {
            "use strict";

            function a() {
                return 0 === r()
            }

            function o() {
                return 1 === r()
            }

            function i() {
                return 2 === r()
            }
            var s;

            function r() {
                return null != s ? s : s = l()
            }

            function l(e) {
                var t;
                void 0 === e && (e = window);
                var n = e.navigator.userAgent;
                return e.chrome || /HeadlessChrome/.test(n) ? 1 : 0 === (null === (t = e.navigator.vendor) || void 0 === t ? void 0 : t.indexOf("Apple")) || /safari/i.test(n) && !/chrome|android/i.test(n) ? 2 : e.document.documentMode ? 0 : 3
            }
            n.r(t), n.d(t, {
                detectBrowser: () => l,
                isChromium: () => o,
                isIE: () => a,
                isSafari: () => i
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                LOGS_SESSION_KEY: () => u,
                OLD_LOGS_COOKIE_NAME: () => l,
                OLD_RUM_COOKIE_NAME: () => r,
                OLD_SESSION_COOKIE_NAME: () => s,
                RUM_SESSION_KEY: () => c,
                tryOldCookiesMigration: () => d
            });
            var a = n(91),
                o = n(94),
                i = n(95),
                s = "_dd",
                r = "_dd_r",
                l = "_dd_l",
                c = "rum",
                u = "logs";

            function d(e) {
                if (!(0, a.getInitCookie)(o.SESSION_STORE_KEY)) {
                    var t = (0, a.getInitCookie)(s),
                        n = (0, a.getInitCookie)(r),
                        d = (0, a.getInitCookie)(l),
                        m = {};
                    t && (m.id = t), d && /^[01]$/.test(d) && (m[u] = d), n && /^[012]$/.test(n) && (m[c] = n), (0, i.isSessionStarted)(m) && ((0, i.expandSessionState)(m), e.persistSession(m))
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SESSION_STORE_KEY: () => a
            });
            var a = "_dd_s"
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                EXPIRED: () => c,
                expandSessionState: () => f,
                getExpiredSessionState: () => u,
                isSessionInExpiredState: () => p,
                isSessionInNotStartedState: () => d,
                isSessionStarted: () => m,
                toSessionState: () => _,
                toSessionString: () => g
            });
            var a = n(84),
                o = n(82),
                i = n(72),
                s = n(96),
                r = /^([a-zA-Z]+)=([a-z0-9-]+)$/,
                l = "&",
                c = "1";

            function u() {
                return {
                    isExpired: c
                }
            }

            function d(e) {
                return (0, a.isEmptyObject)(e)
            }

            function m(e) {
                return !d(e)
            }

            function p(e) {
                return void 0 !== e.isExpired || !((void 0 === (t = e).created || (0, i.dateNow)() - Number(t.created) < s.SESSION_TIME_OUT_DELAY) && (void 0 === t.expire || (0, i.dateNow)() < Number(t.expire)));
                var t
            }

            function f(e) {
                e.expire = String((0, i.dateNow)() + s.SESSION_EXPIRATION_DELAY)
            }

            function g(e) {
                return (0, o.objectEntries)(e).map((function(e) {
                    var t = e[0],
                        n = e[1];
                    return "".concat(t, "=").concat(n)
                })).join(l)
            }

            function _(e) {
                var t = {};
                return function(e) {
                    return !!e && (-1 !== e.indexOf(l) || r.test(e))
                }(e) && e.split(l).forEach((function(e) {
                    var n = r.exec(e);
                    if (null !== n) {
                        var a = n[1],
                            o = n[2];
                        t[a] = o
                    }
                })), t
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SESSION_EXPIRATION_DELAY: () => i,
                SESSION_TIME_OUT_DELAY: () => o
            });
            var a = n(72),
                o = 4 * a.ONE_HOUR,
                i = 15 * a.ONE_MINUTE
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                initLocalStorageStrategy: () => l,
                selectLocalStorageStrategy: () => r
            });
            var a = n(76),
                o = n(95),
                i = n(94),
                s = "_dd_test_";

            function r() {
                try {
                    var e = (0, a.generateUUID)(),
                        t = "".concat(s).concat(e);
                    localStorage.setItem(t, e);
                    var n = localStorage.getItem(t);
                    return localStorage.removeItem(t), e === n ? {
                        type: "LocalStorage"
                    } : void 0
                } catch (e) {
                    return
                }
            }

            function l() {
                return {
                    isLockEnabled: !1,
                    persistSession: c,
                    retrieveSession: u,
                    expireSession: d
                }
            }

            function c(e) {
                localStorage.setItem(i.SESSION_STORE_KEY, (0, o.toSessionString)(e))
            }

            function u() {
                var e = localStorage.getItem(i.SESSION_STORE_KEY);
                return (0, o.toSessionState)(e)
            }

            function d() {
                c((0, o.getExpiredSessionState)())
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                clearInterval: () => c,
                clearTimeout: () => r,
                setInterval: () => l,
                setTimeout: () => s
            });
            var a = n(99),
                o = n(101),
                i = n(100);

            function s(e, t) {
                return (0, a.getZoneJsOriginalValue)((0, i.getGlobalObject)(), "setTimeout")((0, o.monitor)(e), t)
            }

            function r(e) {
                (0, a.getZoneJsOriginalValue)((0, i.getGlobalObject)(), "clearTimeout")(e)
            }

            function l(e, t) {
                return (0, a.getZoneJsOriginalValue)((0, i.getGlobalObject)(), "setInterval")((0, o.monitor)(e), t)
            }

            function c(e) {
                (0, a.getZoneJsOriginalValue)((0, i.getGlobalObject)(), "clearInterval")(e)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getZoneJsOriginalValue: () => o
            });
            var a = n(100);

            function o(e, t) {
                var n, o = (0, a.getGlobalObject)();
                return o.Zone && "function" == typeof o.Zone.__symbol__ && (n = e[o.Zone.__symbol__(t)]), n || (n = e[t]), n
            }
        }, (e, t, n) => {
            "use strict";

            function a() {
                if ("object" == typeof globalThis) return globalThis;
                Object.defineProperty(Object.prototype, "_dd_temp_", {
                    get: function() {
                        return this
                    },
                    configurable: !0
                });
                var e = _dd_temp_;
                return delete Object.prototype._dd_temp_, "object" != typeof e && (e = "object" == typeof self ? self : "object" == typeof window ? window : {}), e
            }
            n.r(t), n.d(t, {
                getGlobalObject: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                callMonitored: () => m,
                displayIfDebugEnabled: () => p,
                monitor: () => d,
                monitored: () => u,
                resetMonitor: () => c,
                setDebugMode: () => l,
                startMonitorErrorCollection: () => r
            });
            var a, o = n(83),
                i = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var a, o = 0, i = t.length; o < i; o++) !a && o in t || (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
                    return e.concat(a || Array.prototype.slice.call(t))
                },
                s = !1;

            function r(e) {
                a = e
            }

            function l(e) {
                s = e
            }

            function c() {
                a = void 0, s = !1
            }

            function u(e, t, n) {
                var o = n.value;
                n.value = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (a ? d(o) : o).apply(this, e)
                }
            }

            function d(e) {
                return function() {
                    return m(e, this, arguments)
                }
            }

            function m(e, t, n) {
                try {
                    return e.apply(t, n)
                } catch (e) {
                    if (p(e), a) try {
                        a(e)
                    } catch (e) {
                        p(e)
                    }
                }
            }

            function p() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                s && o.display.error.apply(o.display, i(["[MONITOR]"], e, !1))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                noop: () => i,
                throttle: () => o
            });
            var a = n(98);

            function o(e, t, n) {
                var o, i, s = !n || void 0 === n.leading || n.leading,
                    r = !n || void 0 === n.trailing || n.trailing,
                    l = !1;
                return {
                    throttled: function() {
                        for (var n = [], c = 0; c < arguments.length; c++) n[c] = arguments[c];
                        l ? o = n : (s ? e.apply(void 0, n) : o = n, l = !0, i = (0, a.setTimeout)((function() {
                            r && o && e.apply(void 0, o), l = !1, o = void 0
                        }), t))
                    },
                    cancel: function() {
                        (0, a.clearTimeout)(i), l = !1, o = void 0
                    }
                }
            }

            function i() {}
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                LOCK_MAX_TRIES: () => c,
                LOCK_RETRY_DELAY: () => l,
                processSessionStoreOperations: () => d
            });
            var a, o = n(98),
                i = n(76),
                s = n(82),
                r = n(95),
                l = 10,
                c = 100,
                u = [];

            function d(e, t, n) {
                var o;
                void 0 === n && (n = 0);
                var l = t.isLockEnabled,
                    d = t.persistSession,
                    f = t.expireSession,
                    g = function(e) {
                        return d((0, s.assign)({}, e, {
                            lock: h
                        }))
                    },
                    _ = function() {
                        var e = t.retrieveSession(),
                            n = e.lock;
                        return e.lock && delete e.lock, {
                            session: e,
                            lock: n
                        }
                    };
                if (a || (a = e), e === a)
                    if (l && n >= c) p(t);
                    else {
                        var h, E = _();
                        if (l) {
                            if (E.lock) return void m(e, t, n);
                            if (h = (0, i.generateUUID)(), g(E.session), (E = _()).lock !== h) return void m(e, t, n)
                        }
                        var v = e.process(E.session);
                        if (l && (E = _()).lock !== h) m(e, t, n);
                        else {
                            if (v && ((0, r.isSessionInExpiredState)(v) ? f() : ((0, r.expandSessionState)(v), l ? g(v) : d(v))), l && (!v || !(0, r.isSessionInExpiredState)(v))) {
                                if ((E = _()).lock !== h) return void m(e, t, n);
                                d(E.session), v = E.session
                            }
                            null === (o = e.after) || void 0 === o || o.call(e, v || E.session), p(t)
                        }
                    }
                else u.push(e)
            }

            function m(e, t, n) {
                (0, o.setTimeout)((function() {
                    d(e, t, n + 1)
                }), l)
            }

            function p(e) {
                a = void 0;
                var t = u.shift();
                t && d(t, e)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ONE_KIBI_BYTE: () => a,
                ONE_MEBI_BYTE: () => o,
                computeBytesCount: () => s,
                concatBuffers: () => r
            });
            var a = 1024,
                o = 1024 * a,
                i = /[^\u0000-\u007F]/;

            function s(e) {
                return i.test(e) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(e).length : new Blob([e]).size : e.length
            }

            function r(e) {
                for (var t = e.reduce((function(e, t) {
                        return e + t.length
                    }), 0), n = new Uint8Array(t), a = 0, o = 0, i = e; o < i.length; o++) {
                    var s = i[o];
                    n.set(s, a), a += s.length
                }
                return n
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                computeTransportConfiguration: () => r,
                isIntakeUrl: () => l
            });
            var a = n(82),
                o = n(108),
                i = n(107),
                s = n(106);

            function r(e) {
                var t = e.site || s.INTAKE_SITE_US1,
                    n = (0, i.buildTags)(e),
                    r = function(e, t) {
                        return {
                            logsEndpointBuilder: (0, o.createEndpointBuilder)(e, "logs", t),
                            rumEndpointBuilder: (0, o.createEndpointBuilder)(e, "rum", t),
                            sessionReplayEndpointBuilder: (0, o.createEndpointBuilder)(e, "replay", t)
                        }
                    }(e, n),
                    l = function(e, t) {
                        if (!e.replica) return;
                        var n = (0, a.assign)({}, e, {
                                site: s.INTAKE_SITE_US1,
                                clientToken: e.replica.clientToken
                            }),
                            i = {
                                logsEndpointBuilder: (0, o.createEndpointBuilder)(n, "logs", t),
                                rumEndpointBuilder: (0, o.createEndpointBuilder)(n, "rum", t)
                            };
                        return (0, a.assign)({
                            applicationId: e.replica.applicationId
                        }, i)
                    }(e, n);
                return (0, a.assign)({
                    replica: l,
                    site: t
                }, r)
            }

            function l(e) {
                return s.INTAKE_URL_PARAMETERS.every((function(t) {
                    return (0, a.includes)(e, t)
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                INTAKE_SITE_EU1: () => s,
                INTAKE_SITE_FED_STAGING: () => o,
                INTAKE_SITE_STAGING: () => a,
                INTAKE_SITE_US1: () => i,
                INTAKE_SITE_US1_FED: () => r,
                INTAKE_URL_PARAMETERS: () => c,
                PCI_INTAKE_HOST_US1: () => l
            });
            var a = "datad0g.com",
                o = "dd0g-gov.com",
                i = "datadoghq.com",
                s = "datadoghq.eu",
                r = "ddog-gov.com",
                l = "pci.browser-intake-datadoghq.com",
                c = ["ddsource", "ddtags"]
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TAG_SIZE_LIMIT: () => o,
                buildTag: () => s,
                buildTags: () => i,
                supportUnicodePropertyEscapes: () => r
            });
            var a = n(83),
                o = 200;

            function i(e) {
                var t = e.env,
                    n = e.service,
                    a = e.version,
                    o = e.datacenter,
                    i = [];
                return t && i.push(s("env", t)), n && i.push(s("service", n)), a && i.push(s("version", a)), o && i.push(s("datacenter", o)), i
            }

            function s(e, t) {
                var n = o - e.length - 1;
                (t.length > n || function(e) {
                    if (!r()) return !1;
                    return new RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(e)
                }(t)) && a.display.warn("".concat(e, " value doesn't meet tag requirements and will be sanitized. ").concat(a.MORE_DETAILS, " ").concat(a.DOCS_ORIGIN, "/getting_started/tagging/#defining-tags"));
                var i = t.replace(/,/g, "_");
                return "".concat(e, ":").concat(i)
            }

            function r() {
                try {
                    return new RegExp("[\\p{Ll}]", "u"), !0
                } catch (e) {
                    return !1
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createEndpointBuilder: () => r
            });
            var a = n(72),
                o = n(109),
                i = n(76),
                s = n(106);

            function r(e, t, n) {
                var r = function(e, t) {
                    var n = "/api/v2/".concat(t),
                        a = e.proxy;
                    if ("string" == typeof a) {
                        var i = (0, o.normalizeUrl)(a);
                        return function(e) {
                            return "".concat(i, "?ddforward=").concat(encodeURIComponent("".concat(n, "?").concat(e)))
                        }
                    }
                    if ("function" == typeof a) return function(e) {
                        return a({
                            path: n,
                            parameters: e
                        })
                    };
                    var r = function(e, t) {
                        var n = t.site,
                            a = void 0 === n ? s.INTAKE_SITE_US1 : n,
                            o = t.internalAnalyticsSubdomain;
                        if ("logs" === e && t.usePciIntake && a === s.INTAKE_SITE_US1) return s.PCI_INTAKE_HOST_US1;
                        if (o && a === s.INTAKE_SITE_US1) return "".concat(o, ".").concat(s.INTAKE_SITE_US1);
                        if (a === s.INTAKE_SITE_FED_STAGING) return "http-intake.logs.".concat(a);
                        var i = a.split("."),
                            r = i.pop();
                        return "browser-intake-".concat(i.join("-"), ".").concat(r)
                    }(t, e);
                    return function(e) {
                        return "https://".concat(r).concat(n, "?").concat(e)
                    }
                }(e, t);
                return {
                    build: function(o, s) {
                        var l = function(e, t, n, o, s) {
                            var r = e.clientToken,
                                l = e.internalAnalyticsSubdomain,
                                c = s.retry,
                                u = s.encoding,
                                d = ["sdk_version:".concat("5.30.0"), "api:".concat(o)].concat(n);
                            c && d.push("retry_count:".concat(c.count), "retry_after:".concat(c.lastFailureStatus));
                            var m = ["ddsource=browser", "ddtags=".concat(encodeURIComponent(d.join(","))), "dd-api-key=".concat(r), "dd-evp-origin-version=".concat(encodeURIComponent("5.30.0")), "dd-evp-origin=browser", "dd-request-id=".concat((0, i.generateUUID)())];
                            u && m.push("dd-evp-encoding=".concat(u));
                            "rum" === t && m.push("batch_time=".concat((0, a.timeStampNow)()));
                            l && m.reverse();
                            return m.join("&")
                        }(e, t, n, o, s);
                        return r(l)
                    },
                    urlPrefix: r(""),
                    trackType: t
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                buildUrl: () => r,
                getPathName: () => s,
                isValidUrl: () => i,
                normalizeUrl: () => o
            });
            var a = n(110);

            function o(e) {
                return r(e, location.href).href
            }

            function i(e) {
                try {
                    return !!r(e)
                } catch (e) {
                    return !1
                }
            }

            function s(e) {
                var t = r(e).pathname;
                return "/" === t[0] ? t : "/".concat(t)
            }

            function r(e, t) {
                var n = function() {
                    if (void 0 === l) try {
                        var e = new c("http://test/path");
                        l = "http://test/path" === e.href
                    } catch (e) {
                        l = !1
                    }
                    return l ? c : void 0
                }();
                if (n) try {
                    return void 0 !== t ? new n(e, t) : new n(e)
                } catch (n) {
                    throw new Error("Failed to construct URL: ".concat(String(n), " ").concat((0, a.jsonStringify)({
                        url: e,
                        base: t
                    })))
                }
                if (void 0 === t && !/:/.test(e)) throw new Error("Invalid URL: '".concat(e, "'"));
                var o = document,
                    i = o.createElement("a");
                if (void 0 !== t) {
                    var s = (o = document.implementation.createHTMLDocument("")).createElement("base");
                    s.href = t, o.head.appendChild(s), o.body.appendChild(i)
                }
                return i.href = e, i
            }
            var l, c = URL
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                detachToJsonMethod: () => i,
                jsonStringify: () => o
            });
            var a = n(102);

            function o(e, t, n) {
                if ("object" != typeof e || null === e) return JSON.stringify(e);
                var a = i(Object.prototype),
                    o = i(Array.prototype),
                    s = i(Object.getPrototypeOf(e)),
                    r = i(e);
                try {
                    return JSON.stringify(e, t, n)
                } catch (e) {
                    return "<error: unable to serialize object>"
                } finally {
                    a(), o(), s(), r()
                }
            }

            function i(e) {
                var t = e,
                    n = t.toJSON;
                return n ? (delete t.toJSON, function() {
                    t.toJSON = n
                }) : a.noop
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                REMOTE_CONFIGURATION_URL: () => s,
                applyRemoteConfiguration: () => l,
                fetchAndApplyRemoteConfiguration: () => r,
                fetchRemoteConfiguration: () => c
            });
            var a = n(82),
                o = n(112),
                i = n(83),
                s = "https://d3uc069fcn7uxw.cloudfront.net/configuration";

            function r(e, t) {
                c(e, (function(n) {
                    t(l(e, n))
                }))
            }

            function l(e, t) {
                return (0, a.assign)({}, e, t)
            }

            function c(e, t) {
                var n = new XMLHttpRequest;
                (0, o.addEventListener)(e, n, "load", (function() {
                    200 === n.status ? t(JSON.parse(n.responseText)) : u()
                })), (0, o.addEventListener)(e, n, "error", (function() {
                    u()
                })), n.open("GET", "".concat(s, "/").concat(encodeURIComponent(e.remoteConfigurationId), ".json")), n.send()
            }

            function u() {
                i.display.error("Error fetching the remote configuration.")
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                addEventListener: () => i,
                addEventListeners: () => s
            });
            var a = n(101),
                o = n(99);

            function i(e, t, n, a, o) {
                return s(e, t, [n], a, o)
            }

            function s(e, t, n, i, s) {
                var r = void 0 === s ? {} : s,
                    l = r.once,
                    c = r.capture,
                    u = r.passive,
                    d = (0, a.monitor)((function(t) {
                        (t.isTrusted || t.__ddIsTrusted || e.allowUntrustedEvents) && (l && f(), i(t))
                    })),
                    m = u ? {
                        capture: c,
                        passive: u
                    } : c,
                    p = (0, o.getZoneJsOriginalValue)(t, "addEventListener");

                function f() {
                    var e = (0, o.getZoneJsOriginalValue)(t, "removeEventListener");
                    n.forEach((function(n) {
                        return e.call(t, n, d, m)
                    }))
                }
                return n.forEach((function(e) {
                    return p.call(t, e, d, m)
                })), {
                    stop: f
                }
            }
        }, (e, t, n) => {
            "use strict";

            function a(e, t, n) {
                if (e)
                    for (var a = 0, o = e; a < o.length; a++) {
                        var i = o[a][t];
                        i && i(n)
                    }
            }
            n.r(t), n.d(t, {
                callPluginsMethod: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createBoundedBuffer: () => i
            });
            var a = n(115),
                o = 500;

            function i() {
                var e = [];
                return {
                    add: function(t) {
                        e.push(t) > o && e.splice(0, 1)
                    },
                    remove: function(t) {
                        (0, a.removeItem)(e, t)
                    },
                    drain: function(t) {
                        e.forEach((function(e) {
                            return e(t)
                        })), e.length = 0
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                removeDuplicates: () => o,
                removeItem: () => i
            });
            var a = n(82);

            function o(e) {
                var t = new Set;
                return e.forEach((function(e) {
                    return t.add(e)
                })), (0, a.arrayFrom)(t)
            }

            function i(e, t) {
                var n = e.indexOf(t);
                n >= 0 && e.splice(n, 1)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                bridgeSupports: () => s,
                canUseEventBridge: () => r,
                getEventBridge: () => i
            });
            var a = n(82),
                o = n(100);

            function i() {
                var e = (0, o.getGlobalObject)().DatadogEventBridge;
                if (e) return {
                    getCapabilities: function() {
                        var t;
                        return JSON.parse((null === (t = e.getCapabilities) || void 0 === t ? void 0 : t.call(e)) || "[]")
                    },
                    getPrivacyLevel: function() {
                        var t;
                        return null === (t = e.getPrivacyLevel) || void 0 === t ? void 0 : t.call(e)
                    },
                    getAllowedWebViewHosts: function() {
                        return JSON.parse(e.getAllowedWebViewHosts())
                    },
                    send: function(t, n, a) {
                        var o = a ? {
                            id: a
                        } : void 0;
                        e.send(JSON.stringify({
                            eventType: t,
                            event: n,
                            view: o
                        }))
                    }
                }
            }

            function s(e) {
                var t = i();
                return !!t && (0, a.includes)(t.getCapabilities(), e)
            }

            function r(e) {
                var t;
                void 0 === e && (e = null === (t = (0, o.getGlobalObject)().location) || void 0 === t ? void 0 : t.hostname);
                var n = i();
                return !!n && n.getAllowedWebViewHosts().some((function(t) {
                    return e === t || (0, a.endsWith)(e, ".".concat(t))
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                addTelemetryConfiguration: () => O,
                addTelemetryDebug: () => k,
                addTelemetryError: () => x,
                addTelemetryUsage: () => M,
                drainPreStartTelemetry: () => C,
                formatError: () => R,
                isTelemetryReplicationAllowed: () => L,
                resetTelemetry: () => I,
                scrubCustomerFrames: () => w,
                startFakeTelemetry: () => A,
                startTelemetry: () => N
            });
            var a = n(83),
                o = n(124),
                i = n(123),
                s = n(121),
                r = n(106),
                l = n(87),
                c = n(72),
                u = n(101),
                d = n(119),
                m = n(82),
                p = n(73),
                f = n(110),
                g = n(74),
                _ = n(122),
                h = n(120),
                E = n(114),
                v = n(118),
                S = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"],
                y = [r.INTAKE_SITE_US1_FED],
                T = (0, E.createBoundedBuffer)(),
                b = function(e) {
                    T.add((function() {
                        return b(e)
                    }))
                };

            function N(e, t) {
                var n, a, o = new l.Observable,
                    i = new Set,
                    r = !(0, m.includes)(y, t.site) && (0, p.performDraw)(t.telemetrySampleRate),
                    _ = ((n = {})[v.TelemetryType.log] = r, n[v.TelemetryType.configuration] = r && (0, p.performDraw)(t.telemetryConfigurationSampleRate), n[v.TelemetryType.usage] = r && (0, p.performDraw)(t.telemetryUsageSampleRate), n),
                    E = {
                        is_local_file: "file:" === window.location.protocol,
                        is_worker: "WorkerGlobalScope" in self
                    };
                return b = function(n) {
                    var r = (0, f.jsonStringify)(n);
                    if (_[n.type] && i.size < t.maxTelemetryEventsPerPage && !i.has(r)) {
                        var l = function(e, t, n) {
                            return (0, g.combine)({
                                type: "telemetry",
                                date: (0, c.timeStampNow)(),
                                service: e,
                                version: "5.30.0",
                                source: "browser",
                                _dd: {
                                    format_version: 2
                                },
                                telemetry: (0, g.combine)(t, {
                                    runtime_env: n,
                                    connectivity: (0, h.getConnectivity)(),
                                    sdk_setup: "npm"
                                }),
                                experimental_features: (0, m.arrayFrom)((0, s.getExperimentalFeatures)())
                            }, void 0 !== a ? a() : {})
                        }(e, n, E);
                        o.notify(l), (0, d.sendToExtension)("telemetry", l), i.add(r)
                    }
                }, (0, u.startMonitorErrorCollection)(x), {
                    setContextProvider: function(e) {
                        a = e
                    },
                    observable: o,
                    enabled: r
                }
            }

            function A() {
                var e = [];
                return b = function(t) {
                    e.push(t)
                }, e
            }

            function C() {
                T.drain()
            }

            function I() {
                T = (0, E.createBoundedBuffer)(), b = function(e) {
                    T.add((function() {
                        return b(e)
                    }))
                }
            }

            function L(e) {
                return e.site === r.INTAKE_SITE_STAGING
            }

            function k(e, t) {
                (0, u.displayIfDebugEnabled)(a.ConsoleApiName.debug, e, t), b((0, m.assign)({
                    type: v.TelemetryType.log,
                    message: e,
                    status: "debug"
                }, t))
            }

            function x(e, t) {
                b((0, m.assign)({
                    type: v.TelemetryType.log,
                    status: "error"
                }, R(e), t))
            }

            function O(e) {
                b({
                    type: v.TelemetryType.configuration,
                    configuration: e
                })
            }

            function M(e) {
                b({
                    type: v.TelemetryType.usage,
                    usage: e
                })
            }

            function R(e) {
                if (e instanceof Error) {
                    var t = (0, _.computeStackTrace)(e);
                    return {
                        error: {
                            kind: t.name,
                            stack: (0, i.toStackTraceString)(w(t))
                        },
                        message: t.message
                    }
                }
                return {
                    error: {
                        stack: o.NO_ERROR_STACK_PRESENT_MESSAGE
                    },
                    message: "".concat("Uncaught", " ").concat((0, f.jsonStringify)(e))
                }
            }

            function w(e) {
                return e.stack = e.stack.filter((function(e) {
                    return !e.url || S.some((function(t) {
                        return (0, m.startsWith)(e.url, t)
                    }))
                })), e
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TelemetryType: () => a
            });
            var a = {
                log: "log",
                configuration: "configuration",
                usage: "usage"
            }
        }, (e, t, n) => {
            "use strict";

            function a(e, t) {
                var n = window.__ddBrowserSdkExtensionCallback;
                n && n({
                    type: e,
                    payload: t
                })
            }
            n.r(t), n.d(t, {
                sendToExtension: () => a
            })
        }, (e, t, n) => {
            "use strict";

            function a() {
                var e, t = window.navigator;
                return {
                    status: t.onLine ? "connected" : "not_connected",
                    interfaces: t.connection && t.connection.type ? [t.connection.type] : void 0,
                    effective_type: null === (e = t.connection) || void 0 === e ? void 0 : e.effectiveType
                }
            }
            n.r(t), n.d(t, {
                getConnectivity: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ExperimentalFeature: () => a,
                addExperimentalFeatures: () => r,
                getExperimentalFeatures: () => u,
                initFeatureFlags: () => s,
                isExperimentalFeatureEnabled: () => l,
                resetExperimentalFeatures: () => c
            });
            var a, o = n(84);
            ! function(e) {
                e.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql", e.REMOTE_CONFIGURATION = "remote_configuration", e.LONG_ANIMATION_FRAME = "long_animation_frame"
            }(a || (a = {}));
            var i = new Set;

            function s(e) {
                Array.isArray(e) && r(e.filter((function(e) {
                    return (0, o.objectHasValue)(a, e)
                })))
            }

            function r(e) {
                e.forEach((function(e) {
                    i.add(e)
                }))
            }

            function l(e) {
                return i.has(e)
            }

            function c() {
                i.clear()
            }

            function u() {
                return i
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                computeStackTrace: () => i,
                computeStackTraceFromOnErrorMessage: () => g
            });
            var a = n(82),
                o = "?";

            function i(e) {
                var t = [],
                    n = f(e, "stack"),
                    i = String(e);
                return n && (0, a.startsWith)(n, i) && (n = n.slice(i.length)), n && n.split("\n").forEach((function(e) {
                    var n = function(e) {
                        var t = l.exec(e);
                        if (!t) return;
                        var n = t[2] && 0 === t[2].indexOf("native"),
                            a = t[2] && 0 === t[2].indexOf("eval"),
                            i = c.exec(t[2]);
                        a && i && (t[2] = i[1], t[3] = i[2], t[4] = i[3]);
                        return {
                            args: n ? [t[2]] : [],
                            column: t[4] ? +t[4] : void 0,
                            func: t[1] || o,
                            line: t[3] ? +t[3] : void 0,
                            url: n ? void 0 : t[2]
                        }
                    }(e) || function(e) {
                        var t = u.exec(e);
                        if (!t) return;
                        return {
                            args: [],
                            column: t[3] ? +t[3] : void 0,
                            func: o,
                            line: t[2] ? +t[2] : void 0,
                            url: t[1]
                        }
                    }(e) || function(e) {
                        var t = d.exec(e);
                        if (!t) return;
                        return {
                            args: [],
                            column: t[4] ? +t[4] : void 0,
                            func: t[1] || o,
                            line: +t[3],
                            url: t[2]
                        }
                    }(e) || function(e) {
                        var t = m.exec(e);
                        if (!t) return;
                        var n = t[3] && t[3].indexOf(" > eval") > -1,
                            a = p.exec(t[3]);
                        n && a && (t[3] = a[1], t[4] = a[2], t[5] = void 0);
                        return {
                            args: t[2] ? t[2].split(",") : [],
                            column: t[5] ? +t[5] : void 0,
                            func: t[1] || o,
                            line: t[4] ? +t[4] : void 0,
                            url: t[3]
                        }
                    }(e);
                    n && (!n.func && n.line && (n.func = o), t.push(n))
                })), {
                    message: f(e, "message"),
                    name: f(e, "name"),
                    stack: t
                }
            }
            var s = "((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
                r = "(?::(\\d+))",
                l = new RegExp("^\\s*at (.*?) ?\\(".concat(s).concat(r, "?").concat(r, "?\\)?\\s*$"), "i"),
                c = new RegExp("\\((\\S*)".concat(r).concat(r, "\\)"));
            var u = new RegExp("^\\s*at ?".concat(s).concat(r, "?").concat(r, "??\\s*$"), "i");
            var d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
            var m = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                p = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

            function f(e, t) {
                if ("object" == typeof e && e && t in e) {
                    var n = e[t];
                    return "string" == typeof n ? n : void 0
                }
            }

            function g(e, t, n, a) {
                var o = [{
                        url: t,
                        column: a,
                        line: n
                    }],
                    i = function(e) {
                        var t, n, a;
                        "[object String]" === {}.toString.call(e) && (n = (t = _.exec(e))[1], a = t[2]);
                        return {
                            name: n,
                            message: a
                        }
                    }(e);
                return {
                    name: i.name,
                    message: i.message,
                    stack: o
                }
            }
            var _ = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createHandlingStack: () => s,
                formatErrorMessage: () => l,
                toStackTraceString: () => r
            });
            var a = n(101),
                o = n(102),
                i = n(122);

            function s() {
                var e, t = new Error;
                if (!t.stack) try {
                    throw t
                } catch (e) {
                    (0, o.noop)()
                }
                return (0, a.callMonitored)((function() {
                    var n = (0, i.computeStackTrace)(t);
                    n.stack = n.stack.slice(2), e = r(n)
                })), e
            }

            function r(e) {
                var t = l(e);
                return e.stack.forEach((function(e) {
                    var n = "?" === e.func ? "<anonymous>" : e.func,
                        a = e.args && e.args.length > 0 ? "(".concat(e.args.join(", "), ")") : "",
                        o = e.line ? ":".concat(e.line) : "",
                        i = e.line && e.column ? ":".concat(e.column) : "";
                    t += "\n  at ".concat(n).concat(a, " @ ").concat(e.url).concat(o).concat(i)
                })), t
            }

            function l(e) {
                return "".concat(e.name || "Error", ": ").concat(e.message)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                NO_ERROR_STACK_PRESENT_MESSAGE: () => r,
                computeRawError: () => l,
                flattenErrorCauses: () => d,
                getFileFromStackTraceString: () => u,
                tryToGetFingerprint: () => c
            });
            var a = n(125),
                o = n(110),
                i = n(122),
                s = n(123),
                r = "No stack, consider using an instance of Error";

            function l(e) {
                var t = e.stackTrace,
                    n = e.originalError,
                    i = e.handlingStack,
                    l = e.startClocks,
                    u = e.nonErrorPrefix,
                    m = e.source,
                    p = e.handling,
                    f = n instanceof Error,
                    g = function(e, t, n, i) {
                        return (null == e ? void 0 : e.message) && (null == e ? void 0 : e.name) ? e.message : t ? "Empty message" : "".concat(n, " ").concat((0, o.jsonStringify)((0, a.sanitize)(i)))
                    }(t, f, u, n),
                    _ = function(e, t) {
                        if (void 0 === t) return !1;
                        if (e) return !0;
                        return t.stack.length > 0 && (t.stack.length > 1 || void 0 !== t.stack[0].url)
                    }(f, t) ? (0, s.toStackTraceString)(t) : r,
                    h = f ? d(n, m) : void 0;
                return {
                    startClocks: l,
                    source: m,
                    handling: p,
                    handlingStack: i,
                    originalError: n,
                    type: t ? t.name : void 0,
                    message: g,
                    stack: _,
                    causes: h,
                    fingerprint: c(n)
                }
            }

            function c(e) {
                return e instanceof Error && "dd_fingerprint" in e ? String(e.dd_fingerprint) : void 0
            }

            function u(e) {
                var t;
                return null === (t = /@ (.+)/.exec(e)) || void 0 === t ? void 0 : t[1]
            }

            function d(e, t) {
                for (var n = e, a = [];
                    (null == n ? void 0 : n.cause) instanceof Error && a.length < 10;) {
                    var o = (0, i.computeStackTrace)(n.cause);
                    a.push({
                        message: n.cause.message,
                        source: t,
                        type: null == o ? void 0 : o.name,
                        stack: o && (0, s.toStackTraceString)(o)
                    }), n = n.cause
                }
                return a.length ? a : void 0
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                sanitize: () => c
            });
            var a = n(83),
                o = n(104),
                i = n(110),
                s = 220 * o.ONE_KIBI_BYTE,
                r = "$",
                l = 3;

            function c(e, t) {
                void 0 === t && (t = s);
                var n = (0, i.detachToJsonMethod)(Object.prototype),
                    a = (0, i.detachToJsonMethod)(Array.prototype),
                    o = [],
                    c = new WeakMap,
                    m = u(e, r, void 0, o, c),
                    p = JSON.stringify(m),
                    f = p ? p.length : 0;
                if (!(f > t)) {
                    for (; o.length > 0 && f < t;) {
                        var g = o.shift(),
                            _ = 0;
                        if (Array.isArray(g.source))
                            for (var h = 0; h < g.source.length; h++) {
                                if (f += void 0 !== (E = u(g.source[h], g.path, h, o, c)) ? JSON.stringify(E).length : 4, f += _, _ = 1, f > t) {
                                    d(t, "truncated", e);
                                    break
                                }
                                g.target[h] = E
                            } else
                                for (var h in g.source)
                                    if (Object.prototype.hasOwnProperty.call(g.source, h)) {
                                        var E;
                                        if (void 0 !== (E = u(g.source[h], g.path, h, o, c)) && (f += JSON.stringify(E).length + _ + h.length + l, _ = 1), f > t) {
                                            d(t, "truncated", e);
                                            break
                                        }
                                        g.target[h] = E
                                    }
                    }
                    return n(), a(), m
                }
                d(t, "discarded", e)
            }

            function u(e, t, n, a, o) {
                var i = function(e) {
                    var t = e;
                    if (t && "function" == typeof t.toJSON) try {
                        return t.toJSON()
                    } catch (e) {}
                    return e
                }(e);
                if (!i || "object" != typeof i) return function(e) {
                    if ("bigint" == typeof e) return "[BigInt] ".concat(e.toString());
                    if ("function" == typeof e) return "[Function] ".concat(e.name || "unknown");
                    if ("symbol" == typeof e) return "[Symbol] ".concat(e.description || e.toString());
                    return e
                }(i);
                var s = function(e) {
                    try {
                        if (e instanceof Event) return {
                            isTrusted: e.isTrusted
                        };
                        var t = Object.prototype.toString.call(e).match(/\[object (.*)\]/);
                        if (t && t[1]) return "[".concat(t[1], "]")
                    } catch (e) {}
                    return "[Unserializable]"
                }(i);
                if ("[Object]" !== s && "[Array]" !== s && "[Error]" !== s) return s;
                var r = e;
                if (o.has(r)) return "[Reference seen at ".concat(o.get(r), "]");
                var l = void 0 !== n ? "".concat(t, ".").concat(n) : t,
                    c = Array.isArray(i) ? [] : {};
                return o.set(r, l), a.push({
                    source: i,
                    target: c,
                    path: l
                }), c
            }

            function d(e, t, n) {
                a.display.warn("The data provided has been ".concat(t, " as it is over the limit of ").concat(e, " characters:"), n)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                displayAlreadyInitializedError: () => o
            });
            var a = n(83);

            function o(e, t) {
                t.silentMultipleInit || a.display.error("".concat(e, " is already initialized."))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                initFetchObservable: () => u,
                resetFetchObservable: () => d
            });
            var a, o = n(128),
                i = n(101),
                s = n(87),
                r = n(82),
                l = n(72),
                c = n(109);

            function u() {
                return a || (a = new s.Observable((function(e) {
                    if (window.fetch) {
                        var t = (0, o.instrumentMethod)(window, "fetch", (function(t) {
                            return function(e, t) {
                                var n = e.parameters,
                                    a = e.onPostCall,
                                    o = e.handlingStack,
                                    s = n[0],
                                    u = n[1],
                                    d = u && u.method;
                                void 0 === d && s instanceof Request && (d = s.method);
                                var m = void 0 !== d ? String(d).toUpperCase() : "GET",
                                    p = s instanceof Request ? s.url : (0, c.normalizeUrl)(String(s)),
                                    f = (0, l.clocksNow)(),
                                    g = {
                                        state: "start",
                                        init: u,
                                        input: s,
                                        method: m,
                                        startClocks: f,
                                        url: p,
                                        handlingStack: o
                                    };
                                t.notify(g), n[0] = g.input, n[1] = g.init, a((function(e) {
                                    return function(e, t, n) {
                                        var a = n;

                                        function o(t) {
                                            a.state = "resolve", (0, r.assign)(a, t), e.notify(a)
                                        }
                                        t.then((0, i.monitor)((function(e) {
                                            o({
                                                response: e,
                                                responseType: e.type,
                                                status: e.status,
                                                isAborted: !1
                                            })
                                        })), (0, i.monitor)((function(e) {
                                            var t, n;
                                            o({
                                                status: 0,
                                                isAborted: (null === (n = null === (t = a.init) || void 0 === t ? void 0 : t.signal) || void 0 === n ? void 0 : n.aborted) || e instanceof DOMException && e.code === DOMException.ABORT_ERR,
                                                error: e
                                            })
                                        })))
                                    }(t, e, g)
                                }))
                            }(t, e)
                        }), {
                            computeHandlingStack: !0
                        }).stop;
                        return t
                    }
                }))), a
            }

            function d() {
                a = void 0
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                instrumentMethod: () => l,
                instrumentSetter: () => c
            });
            var a = n(98),
                o = n(101),
                i = n(102),
                s = n(82),
                r = n(123);

            function l(e, t, n, a) {
                var l = (void 0 === a ? {} : a).computeHandlingStack,
                    c = e[t];
                if ("function" != typeof c) {
                    if (!(t in e) || !(0, s.startsWith)(t, "on")) return {
                        stop: i.noop
                    };
                    c = i.noop
                }
                var u = !1,
                    d = function() {
                        if (u) return c.apply(this, arguments);
                        var e, t = (0, s.arrayFrom)(arguments);
                        (0, o.callMonitored)(n, null, [{
                            target: this,
                            parameters: t,
                            onPostCall: function(t) {
                                e = t
                            },
                            handlingStack: l ? (0, r.createHandlingStack)() : void 0
                        }]);
                        var a = c.apply(this, t);
                        return e && (0, o.callMonitored)(e, null, [a]), a
                    };
                return e[t] = d, {
                    stop: function() {
                        u = !0, e[t] === d && (e[t] = c)
                    }
                }
            }

            function c(e, t, n) {
                var o = Object.getOwnPropertyDescriptor(e, t);
                if (!o || !o.set || !o.configurable) return {
                    stop: i.noop
                };
                var s = i.noop,
                    r = function(e, t) {
                        (0, a.setTimeout)((function() {
                            r !== s && n(e, t)
                        }), 0)
                    },
                    l = function(e) {
                        o.set.call(this, e), r(this, e)
                    };
                return Object.defineProperty(e, t, {
                    set: l
                }), {
                    stop: function() {
                        var n;
                        (null === (n = Object.getOwnPropertyDescriptor(e, t)) || void 0 === n ? void 0 : n.set) === l && Object.defineProperty(e, t, o), r = s
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SYNTHETICS_INJECTS_RUM_COOKIE_NAME: () => s,
                SYNTHETICS_RESULT_ID_COOKIE_NAME: () => i,
                SYNTHETICS_TEST_ID_COOKIE_NAME: () => o,
                getSyntheticsResultId: () => c,
                getSyntheticsTestId: () => l,
                willSyntheticsInjectRum: () => r
            });
            var a = n(91),
                o = "datadog-synthetics-public-id",
                i = "datadog-synthetics-result-id",
                s = "datadog-synthetics-injects-rum";

            function r() {
                return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || (0, a.getInitCookie)(s))
            }

            function l() {
                var e = window._DATADOG_SYNTHETICS_PUBLIC_ID || (0, a.getInitCookie)(o);
                return "string" == typeof e ? e : void 0
            }

            function c() {
                var e = window._DATADOG_SYNTHETICS_RESULT_ID || (0, a.getInitCookie)(i);
                return "string" == typeof e ? e : void 0
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                BYTES_COMPUTATION_THROTTLING_DELAY: () => u,
                CUSTOMER_COMPRESSED_DATA_BYTES_LIMIT: () => c,
                CUSTOMER_DATA_BYTES_LIMIT: () => l,
                createCustomerDataTracker: () => m,
                createCustomerDataTrackerManager: () => d
            });
            var a = n(104),
                o = n(102),
                i = n(110),
                s = n(83),
                r = n(84),
                l = 3 * a.ONE_KIBI_BYTE,
                c = 16 * a.ONE_KIBI_BYTE,
                u = 200;

            function d(e) {
                void 0 === e && (e = 2);
                var t = new Map,
                    n = !1;

                function o(o) {
                    if (void 0 === o && (o = 0), !n && 0 !== e) {
                        var i = 2 === e ? l : c,
                            r = o;
                        t.forEach((function(e) {
                            r += e.getBytesCount()
                        })), r > i && (! function(e) {
                            s.display.warn("Customer data exceeds the recommended ".concat(e / a.ONE_KIBI_BYTE, "KiB threshold. ").concat(s.MORE_DETAILS, " ").concat(s.DOCS_TROUBLESHOOTING, "/#customer-data-exceeds-the-recommended-threshold-warning"))
                        }(i), n = !0)
                    }
                }
                return {
                    createDetachedTracker: function() {
                        var e = m((function() {
                            return o(e.getBytesCount())
                        }));
                        return e
                    },
                    getOrCreateTracker: function(e) {
                        return t.has(e) || t.set(e, m(o)), t.get(e)
                    },
                    setCompressionStatus: function(t) {
                        0 === e && (e = t, o())
                    },
                    getCompressionStatus: function() {
                        return e
                    },
                    stop: function() {
                        t.forEach((function(e) {
                            return e.stop()
                        })), t.clear()
                    }
                }
            }

            function m(e) {
                var t = 0,
                    n = (0, o.throttle)((function(n) {
                        t = (0, a.computeBytesCount)((0, i.jsonStringify)(n)), e()
                    }), u),
                    s = n.throttled,
                    l = n.cancel,
                    c = function() {
                        l(), t = 0
                    };
                return {
                    updateCustomerData: function(e) {
                        (0, r.isEmptyObject)(e) ? c(): s(e)
                    },
                    resetCustomerData: c,
                    getBytesCount: function() {
                        return t
                    },
                    stop: function() {
                        l()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createContextManager: () => r
            });
            var a = n(74),
                o = n(75),
                i = n(125),
                s = n(87);

            function r(e) {
                var t = {},
                    n = new s.Observable,
                    r = {
                        getContext: function() {
                            return (0, a.deepClone)(t)
                        },
                        setContext: function(a) {
                            "object" === (0, o.getType)(a) ? (t = (0, i.sanitize)(a), e && e.updateCustomerData(t)) : r.clearContext(), n.notify()
                        },
                        setContextProperty: function(a, o) {
                            t[a] = (0, i.sanitize)(o), e && e.updateCustomerData(t), n.notify()
                        },
                        removeContextProperty: function(a) {
                            delete t[a], e && e.updateCustomerData(t), n.notify()
                        },
                        clearContext: function() {
                            t = {}, e && e.resetCustomerData(), n.notify()
                        },
                        changeObservable: n
                    };
                return r
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                buildStorageKey: () => l,
                removeStorageListeners: () => c,
                storeContextManager: () => r
            });
            var a = n(112),
                o = n(74),
                i = "_dd_c",
                s = [];

            function r(e, t, n, i) {
                var r = l(n, i);

                function c() {
                    var e = localStorage.getItem(r);
                    return null !== e ? JSON.parse(e) : {}
                }
                s.push((0, a.addEventListener)(e, window, "storage", (function(e) {
                    var n = e.key;
                    r === n && t.setContext(c())
                }))), t.changeObservable.subscribe((function() {
                    localStorage.setItem(r, JSON.stringify(t.getContext()))
                })), t.setContext((0, o.combine)(c(), t.getContext()))
            }

            function l(e, t) {
                return "".concat(i, "_").concat(e, "_").concat(t)
            }

            function c() {
                s.map((function(e) {
                    return e.stop()
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createIdentityEncoder: () => o
            });
            var a = n(104);

            function o() {
                var e = "",
                    t = 0;
                return {
                    isAsync: !1,
                    get isEmpty() {
                        return !e
                    },
                    write: function(n, o) {
                        var i = (0, a.computeBytesCount)(n);
                        t += i, e += n, o && o(i)
                    },
                    finish: function(e) {
                        e(this.finishSync())
                    },
                    finishSync: function() {
                        var n = {
                            output: e,
                            outputBytesCount: t,
                            rawBytesCount: t,
                            pendingData: ""
                        };
                        return e = "", t = 0, n
                    },
                    estimateEncodedBytesCount: function(e) {
                        return e.length
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                defineGlobal: () => l,
                makePublicApi: () => r
            });
            var a = n(88),
                o = n(101),
                i = n(82),
                s = n(83);

            function r(e) {
                var t = (0, i.assign)({
                    version: "5.30.0",
                    onReady: function(e) {
                        e()
                    }
                }, e);
                return Object.defineProperty(t, "_setDebug", {
                    get: function() {
                        return o.setDebugMode
                    },
                    enumerable: !1
                }), t
            }

            function l(e, t, n) {
                var o = e[t];
                o && !o.q && o.version && s.display.warn("SDK is loaded more than once. This is unsupported and might have unexpected behavior."), e[t] = n, o && o.q && o.q.forEach((function(e) {
                    return (0, a.catchUserErrors)(e, "onReady callback threw an error:")()
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                checkUser: () => r,
                sanitizeUser: () => s
            });
            var a = n(83),
                o = n(75),
                i = n(82);

            function s(e) {
                var t = (0, i.assign)({}, e);
                return ["id", "name", "email"].forEach((function(e) {
                    e in t && (t[e] = String(t[e]))
                })), t
            }

            function r(e) {
                var t = "object" === (0, o.getType)(e);
                return t || a.display.error("Unsupported user:", e), t
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startRum: () => O,
                startRumEventCollection: () => M
            });
            var a = n(119),
                o = n(117),
                i = n(199),
                s = n(116),
                r = n(121),
                l = n(137),
                c = n(138),
                u = n(143),
                d = n(144),
                m = n(146),
                p = n(148),
                f = n(153),
                g = n(169),
                _ = n(175),
                h = n(176),
                E = n(182),
                v = n(200),
                S = n(202),
                y = n(208),
                T = n(209),
                b = n(210),
                N = n(211),
                A = n(212),
                C = n(213),
                I = n(214),
                L = n(71),
                k = n(215),
                x = n(217);

            function O(e, t, n, c, m, f, T, I) {
                var k = [],
                    O = new d.LifeCycle;
                O.subscribe(12, (function(e) {
                    return (0, a.sendToExtension)("rum", e)
                }));
                var R = function(e) {
                    var t = (0, o.startTelemetry)("browser-rum-sdk", e);
                    if ((0, s.canUseEventBridge)()) {
                        var n = (0, s.getEventBridge)();
                        t.observable.subscribe((function(e) {
                            return n.send("internal_telemetry", e)
                        }))
                    }
                    return t
                }(e);
                R.setContextProvider((function() {
                    var t, n;
                    return {
                        application: {
                            id: e.applicationId
                        },
                        session: {
                            id: null === (t = K.findTrackedSession()) || void 0 === t ? void 0 : t.id
                        },
                        view: {
                            id: null === (n = Y.findView()) || void 0 === n ? void 0 : n.id
                        },
                        action: {
                            id: z.findActionId()
                        }
                    }
                }));
                var w = function(e) {
                        O.notify(13, {
                            error: e
                        }), (0, o.addTelemetryDebug)("Error reported to customer", {
                            "error.message": e.message
                        })
                    },
                    P = (0, N.startFeatureFlagContexts)(O, n.getOrCreateTracker(0)),
                    D = (0, i.createPageExitObservable)(e),
                    G = D.subscribe((function(e) {
                        O.notify(10, e)
                    }));
                k.push((function() {
                    return G.unsubscribe()
                }));
                var K = (0, s.canUseEventBridge)() ? (0, v.startRumSessionManagerStub)() : (0, v.startRumSessionManager)(e, O, T);
                if ((0, s.canUseEventBridge)())(0, y.startRumEventBridge)(O);
                else {
                    var V = (0, S.startRumBatch)(e, O, R.observable, w, D, K.expireObservable, f);
                    k.push((function() {
                        return V.stop()
                    })), (0, A.startCustomerDataTelemetry)(e, R, O, n, V.flushObservable)
                }
                var U = (0, l.createDOMMutationObservable)(),
                    B = (0, b.createLocationChangeObservable)(e, location),
                    F = (0, C.startPageStateHistory)(e),
                    H = M(O, e, location, K, F, B, U, c, w),
                    Y = H.viewHistory,
                    j = H.urlContexts,
                    z = H.actionContexts,
                    W = H.addAction,
                    q = H.stop;
                k.push(q), (0, o.drainPreStartTelemetry)();
                var $ = (0, E.startViewCollection)(O, e, location, U, B, P, F, t, m),
                    X = $.addTiming,
                    Z = $.startView,
                    J = $.setViewName,
                    Q = $.setViewContext,
                    ee = $.setViewContextProperty,
                    te = $.stop;
                k.push(te);
                var ne = (0, h.startResourceCollection)(O, e, F).stop;
                if (k.push(ne), (0, r.isExperimentalFeatureEnabled)(r.ExperimentalFeature.LONG_ANIMATION_FRAME)) {
                    if (e.trackLongTasks) {
                        var ae = (0, x.startLongAnimationFrameCollection)(O, e).stop;
                        k.push(ae)
                    }
                } else(0, _.startLongTaskCollection)(O, e);
                var oe = (0, g.startErrorCollection)(O, e, F, P).addError;
                (0, p.startRequestCollection)(O, e, K);
                var ie = (0, L.startVitalCollection)(O, F, I),
                    se = (0, u.startInternalContext)(e.applicationId, K, Y, z, j);
                return {
                    addAction: W,
                    addError: oe,
                    addTiming: X,
                    addFeatureFlagEvaluation: P.addFeatureFlagEvaluation,
                    startView: Z,
                    setViewContext: Q,
                    setViewContextProperty: ee,
                    setViewName: J,
                    lifeCycle: O,
                    viewHistory: Y,
                    session: K,
                    stopSession: function() {
                        return K.expire()
                    },
                    getInternalContext: se.get,
                    startDurationVital: ie.startDurationVital,
                    stopDurationVital: ie.stopDurationVital,
                    addDurationVital: ie.addDurationVital,
                    stop: function() {
                        k.forEach((function(e) {
                            return e()
                        }))
                    }
                }
            }

            function M(e, t, n, a, o, i, s, r, l) {
                var u = (0, m.startViewHistory)(e),
                    d = (0, T.startUrlContexts)(e, i, n),
                    p = (0, f.startActionCollection)(e, s, t, o),
                    g = p.addAction,
                    _ = p.actionContexts,
                    h = (0, I.startDisplayContext)(t),
                    E = (0, k.startCiVisibilityContext)(t);
                return (0, c.startRumAssembly)(t, e, a, u, d, _, h, E, r, l), {
                    viewHistory: u,
                    pageStateHistory: o,
                    urlContexts: d,
                    addAction: g,
                    actionContexts: _,
                    stop: function() {
                        E.stop(), h.stop(), d.stop(), u.stop(), o.stop()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createDOMMutationObservable: () => r,
                getMutationObserverConstructor: () => l
            });
            var a = n(87),
                o = n(101),
                i = n(99),
                s = n(102);

            function r() {
                var e = l();
                return new a.Observable((function(t) {
                    if (e) {
                        var n = new e((0, o.monitor)((function() {
                            return t.notify()
                        })));
                        return n.observe(document, {
                                attributes: !0,
                                characterData: !0,
                                childList: !0,
                                subtree: !0
                            }),
                            function() {
                                return n.disconnect()
                            }
                    }
                }))
            }

            function l() {
                var e, t = window;
                if (t.Zone && (e = (0, i.getZoneJsOriginalValue)(t, "MutationObserver"), t.MutationObserver && e === t.MutationObserver)) {
                    var n = new t.MutationObserver(s.noop),
                        a = (0, i.getZoneJsOriginalValue)(n, "originalInstance");
                    e = a && a.constructor
                }
                return e || (e = t.MutationObserver), e
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startRumAssembly: () => v
            });
            var a, o = n(82),
                i = n(121),
                s = n(141),
                r = n(72),
                l = n(73),
                c = n(116),
                u = n(120),
                d = n(74),
                m = n(84),
                p = n(83),
                f = n(139),
                g = n(140),
                _ = {
                    "view.name": "string",
                    "view.url": "string",
                    "view.referrer": "string"
                },
                h = {
                    context: "object"
                },
                E = {
                    service: "string",
                    version: "string"
                };

            function v(e, t, n, v, S, y, T, b, N, A) {
                var C, I;
                (C = {}).view = (0, o.assign)({}, h, _), C.error = (0, o.assign)({
                    "error.message": "string",
                    "error.stack": "string",
                    "error.resource.url": "string",
                    "error.fingerprint": "string"
                }, h, _, E), C.resource = (0, o.assign)({
                    "resource.url": "string"
                }, (0, i.isExperimentalFeatureEnabled)(i.ExperimentalFeature.WRITABLE_RESOURCE_GRAPHQL) ? {
                    "resource.graphql": "object"
                } : {}, h, _, E), C.action = (0, o.assign)({
                    "action.target.name": "string"
                }, h, _, E), C.long_task = (0, o.assign)({}, h, _), C.vital = (0, o.assign)({}, h, _), a = C;
                var L = ((I = {}).error = (0, s.createEventRateLimiter)("error", e.eventRateLimiterThreshold, A), I.action = (0, s.createEventRateLimiter)("action", e.eventRateLimiterThreshold, A), I.vital = (0, s.createEventRateLimiter)("vital", e.eventRateLimiterThreshold, A), I),
                    k = (0, f.getSyntheticsContext)();
                t.subscribe(11, (function(o) {
                    var i, s = o.startTime,
                        f = o.rawRumEvent,
                        _ = o.domainContext,
                        h = o.savedCommonContext,
                        E = o.customerContext,
                        A = v.findView(s),
                        C = S.findUrl(s),
                        I = n.findTrackedSession(s);
                    if (I && A && C) {
                        var x = h || N(),
                            O = y.findActionId(s),
                            M = {
                                _dd: {
                                    format_version: 2,
                                    drift: (0, r.currentDrift)(),
                                    configuration: {
                                        session_sample_rate: (0, l.round)(e.sessionSampleRate, 3),
                                        session_replay_sample_rate: (0, l.round)(e.sessionReplaySampleRate, 3)
                                    },
                                    browser_sdk_version: (0, c.canUseEventBridge)() ? "5.30.0" : void 0
                                },
                                application: {
                                    id: e.applicationId
                                },
                                date: (0, r.timeStampNow)(),
                                service: A.service || e.service,
                                version: A.version || e.version,
                                source: "browser",
                                session: {
                                    id: I.id,
                                    type: k ? "synthetics" : b.get() ? "ci_test" : "user"
                                },
                                view: {
                                    id: A.id,
                                    name: A.name,
                                    url: C.url,
                                    referrer: C.referrer
                                },
                                action: (i = f, -1 !== ["error", "resource", "long_task"].indexOf(i.type) && O ? {
                                    id: O
                                } : void 0),
                                synthetics: k,
                                ci_test: b.get(),
                                display: T.get(),
                                connectivity: (0, u.getConnectivity)()
                            },
                            R = (0, d.combine)(M, f);
                        R.context = (0, d.combine)(x.context, A.context, E), "has_replay" in R.session || (R.session.has_replay = x.hasReplay), "view" === R.type && (R.session.sampled_for_replay = 1 === I.sessionReplay), (0, m.isEmptyObject)(x.user) || (R.usr = x.user),
                            function(e, t, n, o) {
                                var i;
                                if (t) {
                                    var s = (0, g.limitModification)(e, a[e.type], (function(e) {
                                        return t(e, n)
                                    }));
                                    if (!1 === s && "view" !== e.type) return !1;
                                    !1 === s && p.display.warn("Can't dismiss view events using beforeSend!")
                                }
                                var r = null === (i = o[e.type]) || void 0 === i ? void 0 : i.isLimitReached();
                                return !r
                            }(R, e.beforeSend, _, L) && ((0, m.isEmptyObject)(R.context) && delete R.context, t.notify(12, R))
                    }
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getSyntheticsContext: () => o
            });
            var a = n(129);

            function o() {
                var e = (0, a.getSyntheticsTestId)(),
                    t = (0, a.getSyntheticsResultId)();
                if (e && t) return {
                    test_id: e,
                    result_id: t,
                    injected: (0, a.willSyntheticsInjectRum)()
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                limitModification: () => r
            });
            var a = n(74),
                o = n(82),
                i = n(75),
                s = n(125);

            function r(e, t, n) {
                var r = (0, a.deepClone)(e),
                    c = n(r);
                return (0, o.objectEntries)(t).forEach((function(t) {
                    var n = t[0],
                        a = t[1],
                        o = function(e, t) {
                            for (var n = e, a = 0, o = t.split("."); a < o.length; a++) {
                                var i = o[a];
                                if (!u(n, i)) return;
                                n = n[i]
                            }
                            return n
                        }(r, n),
                        c = (0, i.getType)(o);
                    c === a ? l(e, n, (0, s.sanitize)(o)) : "object" !== a || "undefined" !== c && "null" !== c || l(e, n, {})
                })), c
            }

            function l(e, t, n) {
                for (var a = e, o = t.split("."), i = 0; i < o.length; i += 1) {
                    var s = o[i];
                    if (!c(a)) return;
                    i !== o.length - 1 ? a = a[s] : a[s] = n
                }
            }

            function c(e) {
                return "object" === (0, i.getType)(e)
            }

            function u(e, t) {
                return c(e) && Object.prototype.hasOwnProperty.call(e, t)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createEventRateLimiter: () => s
            });
            var a = n(98),
                o = n(72),
                i = n(142);

            function s(e, t, n) {
                var s = 0,
                    r = !1;
                return {
                    isLimitReached: function() {
                        if (0 === s && (0, a.setTimeout)((function() {
                                s = 0
                            }), o.ONE_MINUTE), (s += 1) <= t || r) return r = !1, !1;
                        if (s === t + 1) {
                            r = !0;
                            try {
                                n({
                                    message: "Reached max number of ".concat(e, "s by minute: ").concat(t),
                                    source: i.ErrorSource.AGENT,
                                    startClocks: (0, o.clocksNow)()
                                })
                            } finally {
                                r = !1
                            }
                        }
                        return !0
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ErrorSource: () => a
            });
            var a = {
                AGENT: "agent",
                CONSOLE: "console",
                CUSTOM: "custom",
                LOGGER: "logger",
                NETWORK: "network",
                SOURCE: "source",
                REPORT: "report"
            }
        }, (e, t, n) => {
            "use strict";

            function a(e, t, n, a, o) {
                return {
                    get: function(i) {
                        var s = n.findView(i),
                            r = o.findUrl(i),
                            l = t.findTrackedSession(i);
                        if (l && s && r) {
                            var c = a.findActionId(i);
                            return {
                                application_id: e,
                                session_id: l.id,
                                user_action: c ? {
                                    id: c
                                } : void 0,
                                view: {
                                    id: s.id,
                                    name: s.name,
                                    referrer: r.referrer,
                                    url: r.url
                                }
                            }
                        }
                    }
                }
            }
            n.r(t), n.d(t, {
                startInternalContext: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                LifeCycle: () => a
            });
            var a = n(145).AbstractLifeCycle
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                AbstractLifeCycle: () => a
            });
            var a = function() {
                function e() {
                    this.callbacks = {}
                }
                return e.prototype.notify = function(e, t) {
                    var n = this.callbacks[e];
                    n && n.forEach((function(e) {
                        return e(t)
                    }))
                }, e.prototype.subscribe = function(e, t) {
                    var n = this;
                    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), {
                        unsubscribe: function() {
                            n.callbacks[e] = n.callbacks[e].filter((function(e) {
                                return t !== e
                            }))
                        }
                    }
                }, e
            }()
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                VIEW_CONTEXT_TIME_OUT_DELAY: () => i,
                startViewHistory: () => s
            });
            var a = n(96),
                o = n(147),
                i = a.SESSION_TIME_OUT_DELAY;

            function s(e) {
                var t = (0, o.createValueHistory)({
                    expireDelay: i
                });
                return e.subscribe(1, (function(e) {
                    t.add(function(e) {
                        return {
                            service: e.service,
                            version: e.version,
                            context: e.context,
                            id: e.id,
                            name: e.name,
                            startClocks: e.startClocks
                        }
                    }(e), e.startClocks.relative)
                })), e.subscribe(5, (function(e) {
                    var n = e.endClocks;
                    t.closeActive(n.relative)
                })), e.subscribe(3, (function(e) {
                    var n = t.find(e.startClocks.relative);
                    n && e.name && (n.name = e.name), n && e.context && (n.context = e.context)
                })), e.subscribe(9, (function() {
                    t.reset()
                })), {
                    findView: function(e) {
                        return t.find(e)
                    },
                    stop: function() {
                        t.stop()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                CLEAR_OLD_VALUES_INTERVAL: () => r,
                createValueHistory: () => l
            });
            var a = n(98),
                o = n(115),
                i = n(72),
                s = 1 / 0,
                r = i.ONE_MINUTE;

            function l(e) {
                var t = e.expireDelay,
                    n = e.maxEntries,
                    l = [],
                    c = (0, a.setInterval)((function() {
                        return function() {
                            var e = (0, i.relativeNow)() - t;
                            for (; l.length > 0 && l[l.length - 1].endTime < e;) l.pop()
                        }()
                    }), r);
                return {
                    add: function(e, t) {
                        var a = {
                            value: e,
                            startTime: t,
                            endTime: s,
                            remove: function() {
                                (0, o.removeItem)(l, a)
                            },
                            close: function(e) {
                                a.endTime = e
                            }
                        };
                        return n && l.length >= n && l.pop(), l.unshift(a), a
                    },
                    find: function(e, t) {
                        void 0 === e && (e = s), void 0 === t && (t = {
                            returnInactive: !1
                        });
                        for (var n = 0, a = l; n < a.length; n++) {
                            var o = a[n];
                            if (o.startTime <= e) {
                                if (t.returnInactive || e <= o.endTime) return o.value;
                                break
                            }
                        }
                    },
                    closeActive: function(e) {
                        var t = l[0];
                        t && t.endTime === s && t.close(e)
                    },
                    findAll: function(e, t) {
                        void 0 === e && (e = s), void 0 === t && (t = 0);
                        var n = (0, i.addDuration)(e, t);
                        return l.filter((function(t) {
                            return t.startTime <= n && e <= t.endTime
                        })).map((function(e) {
                            return e.value
                        }))
                    },
                    reset: function() {
                        l = []
                    },
                    stop: function() {
                        (0, a.clearInterval)(c)
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startRequestCollection: () => d,
                trackFetch: () => p,
                trackXhr: () => m
            });
            var a = n(150),
                o = n(127),
                i = n(151),
                s = n(72),
                r = n(152),
                l = n(149),
                c = n(80),
                u = 1;

            function d(e, t, n) {
                var a = (0, c.startTracer)(t, n);
                m(e, t, a), p(e, a)
            }

            function m(e, t, n) {
                var o = (0, a.initXhrObservable)(t).subscribe((function(t) {
                    var a = t;
                    if ((0, l.isAllowedRequestUrl)(a.url)) switch (a.state) {
                        case "start":
                            n.traceXhr(a, a.xhr), a.requestIndex = f(), e.notify(6, {
                                requestIndex: a.requestIndex,
                                url: a.url
                            });
                            break;
                        case "complete":
                            n.clearTracingIfNeeded(a), e.notify(7, {
                                duration: a.duration,
                                method: a.method,
                                requestIndex: a.requestIndex,
                                spanId: a.spanId,
                                startClocks: a.startClocks,
                                status: a.status,
                                traceId: a.traceId,
                                traceSampled: a.traceSampled,
                                type: "xhr",
                                url: a.url,
                                xhr: a.xhr,
                                isAborted: a.isAborted,
                                handlingStack: a.handlingStack
                            })
                    }
                }));
                return {
                    stop: function() {
                        return o.unsubscribe()
                    }
                }
            }

            function p(e, t) {
                var n = (0, o.initFetchObservable)().subscribe((function(n) {
                    var a = n;
                    if ((0, l.isAllowedRequestUrl)(a.url)) switch (a.state) {
                        case "start":
                            t.traceFetch(a), a.requestIndex = f(), e.notify(6, {
                                requestIndex: a.requestIndex,
                                url: a.url
                            });
                            break;
                        case "resolve":
                            ! function(e, t) {
                                var n = e.response && (0, i.tryToClone)(e.response);
                                n && n.body ? (0, r.readBytesFromStream)(n.body, (function() {
                                    t((0, s.elapsed)(e.startClocks.timeStamp, (0, s.timeStampNow)()))
                                }), {
                                    bytesLimit: Number.POSITIVE_INFINITY,
                                    collectStreamBody: !1
                                }) : t((0, s.elapsed)(e.startClocks.timeStamp, (0, s.timeStampNow)()))
                            }(a, (function(n) {
                                t.clearTracingIfNeeded(a), e.notify(7, {
                                    duration: n,
                                    method: a.method,
                                    requestIndex: a.requestIndex,
                                    responseType: a.responseType,
                                    spanId: a.spanId,
                                    startClocks: a.startClocks,
                                    status: a.status,
                                    traceId: a.traceId,
                                    traceSampled: a.traceSampled,
                                    type: "fetch",
                                    url: a.url,
                                    response: a.response,
                                    init: a.init,
                                    input: a.input,
                                    isAborted: a.isAborted,
                                    handlingStack: a.handlingStack
                                })
                            }))
                    }
                }));
                return {
                    stop: function() {
                        return n.unsubscribe()
                    }
                }
            }

            function f() {
                var e = u;
                return u += 1, e
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                FAKE_INITIAL_DOCUMENT: () => l,
                MAX_ATTRIBUTE_VALUE_CHAR_LENGTH: () => T,
                computeResourceEntryDetails: () => f,
                computeResourceEntryDuration: () => p,
                computeResourceEntryProtocol: () => E,
                computeResourceEntrySize: () => v,
                computeResourceEntryType: () => u,
                hasValidResourceEntryDuration: () => g,
                hasValidResourceEntryTimings: () => _,
                isAllowedRequestUrl: () => S,
                isLongDataUrl: () => b,
                isResourceEntryRequestType: () => m,
                sanitizeDataUrl: () => N
            });
            var a = n(82),
                o = n(109),
                i = n(117),
                s = n(72),
                r = n(105),
                l = "initial_document",
                c = [
                    ["document", function(e) {
                        return l === e
                    }],
                    ["xhr", function(e) {
                        return "xmlhttprequest" === e
                    }],
                    ["fetch", function(e) {
                        return "fetch" === e
                    }],
                    ["beacon", function(e) {
                        return "beacon" === e
                    }],
                    ["css", function(e, t) {
                        return /\.css$/i.test(t)
                    }],
                    ["js", function(e, t) {
                        return /\.js$/i.test(t)
                    }],
                    ["image", function(e, t) {
                        return (0, a.includes)(["image", "img", "icon"], e) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(t)
                    }],
                    ["font", function(e, t) {
                        return null !== /\.(woff|eot|woff2|ttf)$/i.exec(t)
                    }],
                    ["media", function(e, t) {
                        return (0, a.includes)(["audio", "video"], e) || null !== /\.(mp3|mp4)$/i.exec(t)
                    }]
                ];

            function u(e) {
                var t = e.name;
                if (!(0, o.isValidUrl)(t)) return (0, i.addTelemetryDebug)('Failed to construct URL for "'.concat(e.name, '"')), "other";
                for (var n = (0, o.getPathName)(t), a = 0, s = c; a < s.length; a++) {
                    var r = s[a],
                        l = r[0];
                    if ((0, r[1])(e.initiatorType, n)) return l
                }
                return "other"
            }

            function d() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = 1; n < e.length; n += 1)
                    if (e[n - 1] > e[n]) return !1;
                return !0
            }

            function m(e) {
                return "xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType
            }

            function p(e) {
                var t = e.duration,
                    n = e.startTime,
                    a = e.responseEnd;
                return 0 === t && n < a ? (0, s.toServerDuration)((0, s.elapsed)(n, a)) : (0, s.toServerDuration)(t)
            }

            function f(e) {
                if (_(e)) {
                    var t = e.startTime,
                        n = e.fetchStart,
                        a = e.redirectStart,
                        o = e.redirectEnd,
                        i = e.domainLookupStart,
                        s = e.domainLookupEnd,
                        r = e.connectStart,
                        l = e.secureConnectionStart,
                        c = e.connectEnd,
                        u = e.requestStart,
                        d = e.responseStart,
                        m = {
                            download: h(t, d, e.responseEnd),
                            first_byte: h(t, u, d)
                        };
                    return n < c && (m.connect = h(t, r, c), r <= l && l <= c && (m.ssl = h(t, l, c))), n < s && (m.dns = h(t, i, s)), t < o && (m.redirect = h(t, a, o)), m
                }
            }

            function g(e) {
                return e.duration >= 0
            }

            function _(e) {
                var t = d(e.startTime, e.fetchStart, e.domainLookupStart, e.domainLookupEnd, e.connectStart, e.connectEnd, e.requestStart, e.responseStart, e.responseEnd),
                    n = ! function(e) {
                        return e.redirectEnd > e.startTime
                    }(e) || d(e.startTime, e.redirectStart, e.redirectEnd, e.fetchStart);
                return t && n
            }

            function h(e, t, n) {
                if (e <= t && t <= n) return {
                    duration: (0, s.toServerDuration)((0, s.elapsed)(t, n)),
                    start: (0, s.toServerDuration)((0, s.elapsed)(e, t))
                }
            }

            function E(e) {
                return "" === e.nextHopProtocol ? void 0 : e.nextHopProtocol
            }

            function v(e) {
                if (e.startTime < e.responseStart) {
                    var t = e.encodedBodySize,
                        n = e.decodedBodySize;
                    return {
                        size: n,
                        encoded_body_size: t,
                        decoded_body_size: n,
                        transfer_size: e.transferSize
                    }
                }
                return {
                    size: void 0,
                    encoded_body_size: void 0,
                    decoded_body_size: void 0,
                    transfer_size: void 0
                }
            }

            function S(e) {
                return e && !(0, r.isIntakeUrl)(e)
            }
            var y = /data:(.+)?(;base64)?,/g,
                T = 24e3;

            function b(e) {
                return !(e.length <= T) && ("data:" === e.substring(0, 5) && (e = e.substring(0, T), !0))
            }

            function N(e) {
                return "".concat(e.match(y)[0], "[...]")
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                initXhrObservable: () => d
            });
            var a, o = n(128),
                i = n(87),
                s = n(72),
                r = n(109),
                l = n(84),
                c = n(112),
                u = new WeakMap;

            function d(e) {
                return a || (a = function(e) {
                    return new i.Observable((function(t) {
                        var n = (0, o.instrumentMethod)(XMLHttpRequest.prototype, "open", m).stop,
                            a = (0, o.instrumentMethod)(XMLHttpRequest.prototype, "send", (function(n) {
                                ! function(e, t, n) {
                                    var a = e.target,
                                        i = e.handlingStack,
                                        r = u.get(a);
                                    if (!r) return;
                                    var d = r;
                                    d.state = "start", d.startClocks = (0, s.clocksNow)(), d.isAborted = !1, d.xhr = a, d.handlingStack = i;
                                    var m = !1,
                                        p = (0, o.instrumentMethod)(a, "onreadystatechange", (function() {
                                            a.readyState === XMLHttpRequest.DONE && f()
                                        })).stop,
                                        f = function() {
                                            if (g(), p(), !m) {
                                                m = !0;
                                                var e = r;
                                                e.state = "complete", e.duration = (0, s.elapsed)(d.startClocks.timeStamp, (0, s.timeStampNow)()), e.status = a.status, n.notify((0, l.shallowClone)(e))
                                            }
                                        },
                                        g = (0, c.addEventListener)(t, a, "loadend", f).stop;
                                    n.notify(d)
                                }(n, e, t)
                            }), {
                                computeHandlingStack: !0
                            }).stop,
                            i = (0, o.instrumentMethod)(XMLHttpRequest.prototype, "abort", p).stop;
                        return function() {
                            n(), a(), i()
                        }
                    }))
                }(e)), a
            }

            function m(e) {
                var t = e.target,
                    n = e.parameters,
                    a = n[0],
                    o = n[1];
                u.set(t, {
                    state: "open",
                    method: String(a).toUpperCase(),
                    url: (0, r.normalizeUrl)(String(o))
                })
            }

            function p(e) {
                var t = e.target,
                    n = u.get(t);
                n && (n.isAborted = !0)
            }
        }, (e, t, n) => {
            "use strict";

            function a(e) {
                return e >= 500
            }

            function o(e) {
                try {
                    return e.clone()
                } catch (e) {
                    return
                }
            }
            n.r(t), n.d(t, {
                isServerError: () => a,
                tryToClone: () => o
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                readBytesFromStream: () => i
            });
            var a = n(101),
                o = n(102);

            function i(e, t, n) {
                var i = e.getReader(),
                    s = [],
                    r = 0;

                function l() {
                    var e, a;
                    if (i.cancel().catch(o.noop), n.collectStreamBody) {
                        var l;
                        if (1 === s.length) l = s[0];
                        else {
                            l = new Uint8Array(r);
                            var c = 0;
                            s.forEach((function(e) {
                                l.set(e, c), c += e.length
                            }))
                        }
                        e = l.slice(0, n.bytesLimit), a = l.length > n.bytesLimit
                    }
                    t(void 0, e, a)
                }! function e() {
                    i.read().then((0, a.monitor)((function(t) {
                        t.done ? l() : (n.collectStreamBody && s.push(t.value), (r += t.value.length) > n.bytesLimit ? l() : e())
                    })), (0, a.monitor)((function(e) {
                        return t(e)
                    })))
                }()
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startActionCollection: () => u
            });
            var a = n(102),
                o = n(82),
                i = n(72),
                s = n(74),
                r = n(76),
                l = n(154),
                c = n(155);

            function u(e, t, n, i) {
                e.subscribe(0, (function(t) {
                    return e.notify(11, d(t, i))
                }));
                var s = {
                    findActionId: a.noop
                };
                return n.trackUserInteractions && (s = (0, c.trackClickActions)(e, t, n).actionContexts), {
                    addAction: function(t, n) {
                        e.notify(11, (0, o.assign)({
                            savedCommonContext: n
                        }, d(t, i)))
                    },
                    actionContexts: s
                }
            }

            function d(e, t) {
                var n = m(e) ? {
                        action: {
                            id: e.id,
                            loading_time: (0, l.discardNegativeDuration)((0, i.toServerDuration)(e.duration)),
                            frustration: {
                                type: e.frustrationTypes
                            },
                            error: {
                                count: e.counts.errorCount
                            },
                            long_task: {
                                count: e.counts.longTaskCount
                            },
                            resource: {
                                count: e.counts.resourceCount
                            }
                        },
                        _dd: {
                            action: {
                                target: e.target,
                                position: e.position
                            }
                        }
                    } : void 0,
                    a = m(e) ? void 0 : e.context,
                    o = (0, s.combine)({
                        action: {
                            id: (0, r.generateUUID)(),
                            target: {
                                name: e.name
                            },
                            type: e.type
                        },
                        date: e.startClocks.timeStamp,
                        type: "action",
                        view: {
                            in_foreground: t.wasInPageStateAt("active", e.startClocks.relative)
                        }
                    }, n),
                    c = m(e) ? {
                        events: e.events
                    } : {};
                return !m(e) && e.handlingStack && (c.handlingStack = e.handlingStack), {
                    customerContext: a,
                    rawRumEvent: o,
                    startTime: e.startClocks.relative,
                    domainContext: c
                }
            }

            function m(e) {
                return "custom" !== e.type
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                discardNegativeDuration: () => o
            });
            var a = n(73);

            function o(e) {
                return (0, a.isNumber)(e) && e < 0 ? void 0 : e
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ACTION_CONTEXT_TIME_OUT_DELAY: () => h,
                finalizeClicks: () => S,
                trackClickActions: () => E
            });
            var a = n(72),
                o = n(147),
                i = n(87),
                s = n(76),
                r = n(82),
                l = n(156),
                c = n(157),
                u = n(160),
                d = n(163),
                m = n(165),
                p = n(162),
                f = n(166),
                g = n(167),
                _ = n(168),
                h = 5 * a.ONE_MINUTE;

            function E(e, t, n) {
                var a, s = (0, o.createValueHistory)({
                        expireDelay: h
                    }),
                    r = new i.Observable;
                e.subscribe(9, (function() {
                    s.reset()
                })), e.subscribe(4, E);
                var l = (0, f.listenActionEvents)(n, {
                    onPointerDown: function(a) {
                        return function(e, t, n, a) {
                            var o = e.enablePrivacyForActionName ? (0, d.getNodePrivacyLevel)(a.target, e.defaultPrivacyLevel) : d.NodePrivacyLevel.ALLOW;
                            if (o === d.NodePrivacyLevel.HIDDEN) return;
                            var i = function(e, t, n) {
                                    var a = e.target.getBoundingClientRect(),
                                        o = (0, u.getSelectorFromElement)(e.target, n.actionNameAttribute);
                                    o && (0, _.updateInteractionSelector)(e.timeStamp, o);
                                    return {
                                        type: "click",
                                        target: {
                                            width: Math.round(a.width),
                                            height: Math.round(a.height),
                                            selector: o
                                        },
                                        position: {
                                            x: Math.round(e.clientX - a.left),
                                            y: Math.round(e.clientY - a.top)
                                        },
                                        name: (0, p.getActionNameFromElement)(e.target, n, t)
                                    }
                                }(a, o, e),
                                s = !1;
                            return (0, c.waitPageActivityEnd)(t, n, e, (function(e) {
                                s = e.hadActivity
                            }), c.PAGE_ACTIVITY_VALIDATION_DELAY), {
                                clickActionBase: i,
                                hadActivityOnPointerDown: function() {
                                    return s
                                }
                            }
                        }(n, e, t, a)
                    },
                    onPointerUp: function(a, o, i) {
                        var l = a.clickActionBase,
                            u = a.hadActivityOnPointerDown;
                        ! function(e, t, n, a, o, i, s, r, l, u) {
                            var d, m = v(t, a, l, s, r);
                            i(m);
                            var p = null === (d = null == s ? void 0 : s.target) || void 0 === d ? void 0 : d.selector;
                            p && (0, _.updateInteractionSelector)(r.timeStamp, p);
                            var f = (0, c.waitPageActivityEnd)(t, n, e, (function(e) {
                                    e.hadActivity && e.end < m.startClocks.timeStamp ? m.discard() : e.hadActivity ? m.stop(e.end) : u() ? m.stop(m.startClocks.timeStamp) : m.stop()
                                }), _.CLICK_ACTION_MAX_DURATION).stop,
                                g = t.subscribe(4, (function(e) {
                                    var t = e.endClocks;
                                    m.stop(t.timeStamp)
                                })),
                                h = o.subscribe((function() {
                                    m.stop()
                                }));
                            m.stopObservable.subscribe((function() {
                                g.unsubscribe(), f(), h.unsubscribe()
                            }))
                        }(n, e, t, s, r, g, l, o, i, u)
                    }
                }).stop;
                return {
                    stop: function() {
                        E(), r.notify(), l()
                    },
                    actionContexts: {
                        findActionId: function(e) {
                            return s.findAll(e)
                        }
                    }
                };

                function g(e) {
                    if (!a || !a.tryAppend(e)) {
                        var t = e.clone();
                        a = (0, m.createClickChain)(e, (function(e) {
                            S(e, t)
                        }))
                    }
                }

                function E() {
                    a && a.stop()
                }
            }

            function v(e, t, n, o, c) {
                var u, d = (0, s.generateUUID)(),
                    m = (0, a.clocksNow)(),
                    p = t.add(d, m.relative),
                    f = (0, l.trackEventCounts)({
                        lifeCycle: e,
                        isChildEvent: function(e) {
                            return void 0 !== e.action && (Array.isArray(e.action.id) ? (0, r.includes)(e.action.id, d) : e.action.id === d)
                        }
                    }),
                    g = 0,
                    _ = [],
                    h = new i.Observable;

                function E(e) {
                    0 === g && (g = 1, (u = e) ? p.close((0, a.getRelativeTime)(u)) : p.remove(), f.stop(), h.notify())
                }
                return {
                    event: c,
                    stop: E,
                    stopObservable: h,
                    get hasError() {
                        return f.eventCounts.errorCount > 0
                    },
                    get hasPageActivity() {
                        return void 0 !== u
                    },
                    getUserActivity: n,
                    addFrustration: function(e) {
                        _.push(e)
                    },
                    startClocks: m,
                    isStopped: function() {
                        return 1 === g || 2 === g
                    },
                    clone: function() {
                        return v(e, t, n, o, c)
                    },
                    validate: function(t) {
                        if (E(), 1 === g) {
                            var n = f.eventCounts,
                                i = n.resourceCount,
                                s = n.errorCount,
                                l = n.longTaskCount,
                                p = (0, r.assign)({
                                    type: "click",
                                    duration: u && (0, a.elapsed)(m.timeStamp, u),
                                    startClocks: m,
                                    id: d,
                                    frustrationTypes: _,
                                    counts: {
                                        resourceCount: i,
                                        errorCount: s,
                                        longTaskCount: l
                                    },
                                    events: null != t ? t : [c],
                                    event: c
                                }, o);
                            e.notify(0, p), g = 2
                        }
                    },
                    discard: function() {
                        E(), g = 2
                    }
                }
            }

            function S(e, t) {
                (0, g.computeFrustration)(e, t).isRage ? (e.forEach((function(e) {
                    return e.discard()
                })), t.stop((0, a.timeStampNow)()), t.validate(e.map((function(e) {
                    return e.event
                })))) : (t.discard(), e.forEach((function(e) {
                    return e.validate()
                })))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackEventCounts: () => o
            });
            var a = n(102);

            function o(e) {
                var t = e.lifeCycle,
                    n = e.isChildEvent,
                    o = e.onChange,
                    i = void 0 === o ? a.noop : o,
                    s = {
                        errorCount: 0,
                        longTaskCount: 0,
                        resourceCount: 0,
                        actionCount: 0,
                        frustrationCount: 0
                    },
                    r = t.subscribe(12, (function(e) {
                        var t;
                        if ("view" !== e.type && "vital" !== e.type && n(e)) switch (e.type) {
                            case "error":
                                s.errorCount += 1, i();
                                break;
                            case "action":
                                s.actionCount += 1, e.action.frustration && (s.frustrationCount += e.action.frustration.type.length), i();
                                break;
                            case "long_task":
                                s.longTaskCount += 1, i();
                                break;
                            case "resource":
                                (null === (t = e._dd) || void 0 === t ? void 0 : t.discarded) || (s.resourceCount += 1, i())
                        }
                    }));
                return {
                    stop: function() {
                        r.unsubscribe()
                    },
                    eventCounts: s
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                PAGE_ACTIVITY_END_DELAY: () => d,
                PAGE_ACTIVITY_VALIDATION_DELAY: () => u,
                createPageActivityObservable: () => f,
                doWaitPageActivityEnd: () => p,
                waitPageActivityEnd: () => m
            });
            var a = n(98),
                o = n(101),
                i = n(72),
                s = n(87),
                r = n(81),
                l = n(128),
                c = n(158),
                u = 100,
                d = 100;

            function m(e, t, n, a, o) {
                return p(f(e, t, n), a, o)
            }

            function p(e, t, n) {
                var s, r = !1,
                    l = (0, a.setTimeout)((0, o.monitor)((function() {
                        return f({
                            hadActivity: !1
                        })
                    })), u),
                    c = void 0 !== n ? (0, a.setTimeout)((0, o.monitor)((function() {
                        return f({
                            hadActivity: !0,
                            end: (0, i.timeStampNow)()
                        })
                    })), n) : void 0,
                    m = e.subscribe((function(e) {
                        var t = e.isBusy;
                        (0, a.clearTimeout)(l), (0, a.clearTimeout)(s);
                        var n = (0, i.timeStampNow)();
                        t || (s = (0, a.setTimeout)((0, o.monitor)((function() {
                            return f({
                                hadActivity: !0,
                                end: n
                            })
                        })), d))
                    })),
                    p = function() {
                        r = !0, (0, a.clearTimeout)(l), (0, a.clearTimeout)(s), (0, a.clearTimeout)(c), m.unsubscribe()
                    };

                function f(e) {
                    r || (p(), t(e))
                }
                return {
                    stop: p
                }
            }

            function f(e, t, n) {
                return new s.Observable((function(a) {
                    var o, i = [],
                        s = 0;
                    i.push(t.subscribe(d), (0, c.createPerformanceObservable)(n, {
                        type: c.RumPerformanceEntryType.RESOURCE
                    }).subscribe((function(e) {
                        e.some((function(e) {
                            return !g(n, e.name)
                        })) && d()
                    })), e.subscribe(6, (function(e) {
                        g(n, e.url) || (void 0 === o && (o = e.requestIndex), s += 1, d())
                    })), e.subscribe(7, (function(e) {
                        g(n, e.url) || void 0 === o || e.requestIndex < o || (s -= 1, d())
                    })));
                    var r, u = (r = d, (0, l.instrumentMethod)(window, "open", r)).stop;
                    return function() {
                        u(), i.forEach((function(e) {
                            return e.unsubscribe()
                        }))
                    };

                    function d() {
                        a.notify({
                            isBusy: s > 0
                        })
                    }
                }))
            }

            function g(e, t) {
                return (0, r.matchList)(e.excludedActivityUrls, t)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                RumPerformanceEntryType: () => a,
                createPerformanceObservable: () => m,
                supportPerformanceTimingEvent: () => p
            });
            var a, o, i = n(87),
                s = n(101),
                r = n(98),
                l = n(82),
                c = n(112),
                u = n(149),
                d = n(159);

            function m(e, t) {
                return new i.Observable((function(n) {
                    if (window.PerformanceObserver) {
                        var i, m, f = function(e) {
                                var t = function(e) {
                                    return e.filter((function(e) {
                                        return ! function(e) {
                                            return !(e.entryType !== a.RESOURCE || (0, u.isAllowedRequestUrl)(e.name) && (0, u.hasValidResourceEntryDuration)(e))
                                        }(e)
                                    }))
                                }(e);
                                t.length > 0 && n.notify(t)
                            },
                            g = !0,
                            _ = new PerformanceObserver((0, s.monitor)((function(e) {
                                g ? i = (0, r.setTimeout)((function() {
                                    return f(e.getEntries())
                                })) : f(e.getEntries())
                            })));
                        try {
                            _.observe(t)
                        } catch (e) {
                            var h = [a.RESOURCE, a.NAVIGATION, a.LONG_TASK, a.PAINT];
                            if ((0, l.includes)(h, t.type)) {
                                t.buffered && (i = (0, r.setTimeout)((function() {
                                    return f(performance.getEntriesByType(t.type))
                                })));
                                try {
                                    _.observe({
                                        entryTypes: [t.type]
                                    })
                                } catch (e) {
                                    return
                                }
                            }
                        }
                        return g = !1,
                            function(e) {
                                !o && void 0 !== window.performance && "getEntries" in performance && "addEventListener" in performance && (o = (0, c.addEventListener)(e, performance, "resourcetimingbufferfull", (function() {
                                    performance.clearResourceTimings()
                                })))
                            }(e), p(a.FIRST_INPUT) || t.type !== a.FIRST_INPUT || (m = (0, d.retrieveFirstInputTiming)(e, (function(e) {
                                f([e])
                            })).stop),
                            function() {
                                _.disconnect(), m && m(), (0, r.clearTimeout)(i)
                            }
                    }
                }))
            }

            function p(e) {
                return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(e)
            }! function(e) {
                e.EVENT = "event", e.FIRST_INPUT = "first-input", e.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint", e.LAYOUT_SHIFT = "layout-shift", e.LONG_TASK = "longtask", e.LONG_ANIMATION_FRAME = "long-animation-frame", e.NAVIGATION = "navigation", e.PAINT = "paint", e.RESOURCE = "resource"
            }(a || (a = {}))
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                retrieveFirstInputTiming: () => i
            });
            var a = n(72),
                o = n(112);

            function i(e, t) {
                var n = (0, a.dateNow)(),
                    i = !1,
                    s = (0, o.addEventListeners)(e, window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], (function(t) {
                        if (t.cancelable) {
                            var n = {
                                entryType: "first-input",
                                processingStart: (0, a.relativeNow)(),
                                processingEnd: (0, a.relativeNow)(),
                                startTime: t.timeStamp,
                                duration: 0,
                                name: "",
                                cancelable: !1,
                                target: null,
                                toJSON: function() {
                                    return {}
                                }
                            };
                            "pointerdown" === t.type ? function(e, t) {
                                (0, o.addEventListeners)(e, window, ["pointerup", "pointercancel"], (function(e) {
                                    "pointerup" === e.type && r(t)
                                }), {
                                    once: !0
                                })
                            }(e, n) : r(n)
                        }
                    }), {
                        passive: !0,
                        capture: !0
                    }).stop;
                return {
                    stop: s
                };

                function r(e) {
                    if (!i) {
                        i = !0, s();
                        var o = e.processingStart - e.startTime;
                        o >= 0 && o < (0, a.dateNow)() - n && t(e)
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                STABLE_ATTRIBUTES: () => i,
                getSelectorFromElement: () => l,
                isSelectorUniqueAmongSiblings: () => f,
                supportScopeSelector: () => _
            });
            var a, o = n(161),
                i = [n(162).DEFAULT_PROGRAMMATIC_ACTION_NAME_ATTRIBUTE, "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"],
                s = [u, function(e) {
                    if (e.id && !c(e.id)) return "#".concat((0, o.cssEscape)(e.id))
                }],
                r = [u, function(e) {
                    if ("BODY" === e.tagName) return;
                    for (var t = (0, o.getClassList)(e), n = 0; n < t.length; n += 1) {
                        var a = t[n];
                        if (!c(a)) return "".concat((0, o.cssEscape)(e.tagName), ".").concat((0, o.cssEscape)(a))
                    }
                }, function(e) {
                    return (0, o.cssEscape)(e.tagName)
                }];

            function l(e, t) {
                if (function(e) {
                        if ("isConnected" in e) return e.isConnected;
                        return e.ownerDocument.documentElement.contains(e)
                    }(e)) {
                    for (var n, a = e; a && "HTML" !== a.nodeName;) {
                        var i = m(a, s, p, t, n);
                        if (i) return i;
                        n = m(a, r, f, t, n) || g(d(a), n), a = (0, o.getParentElement)(a)
                    }
                    return n
                }
            }

            function c(e) {
                return /[0-9]/.test(e)
            }

            function u(e, t) {
                if (t && (s = r(t))) return s;
                for (var n = 0, a = i; n < a.length; n++) {
                    var s;
                    if (s = r(a[n])) return s
                }

                function r(t) {
                    if (e.hasAttribute(t)) return "".concat((0, o.cssEscape)(e.tagName), "[").concat(t, '="').concat((0, o.cssEscape)(e.getAttribute(t)), '"]')
                }
            }

            function d(e) {
                for (var t = (0, o.getParentElement)(e).firstElementChild, n = 1; t && t !== e;) t.tagName === e.tagName && (n += 1), t = t.nextElementSibling;
                return "".concat((0, o.cssEscape)(e.tagName), ":nth-of-type(").concat(n, ")")
            }

            function m(e, t, n, a, o) {
                for (var i = 0, s = t; i < s.length; i++) {
                    var r = (0, s[i])(e, a);
                    if (r && n(e, r, o)) return g(r, o)
                }
            }

            function p(e, t, n) {
                return 1 === e.ownerDocument.querySelectorAll(g(t, n)).length
            }

            function f(e, t, n) {
                var a;
                if (void 0 === n) a = function(e) {
                    return (0, o.elementMatches)(e, t)
                };
                else {
                    var i = _() ? g("".concat(t, ":scope"), n) : g(t, n);
                    a = function(e) {
                        return null !== e.querySelector(i)
                    }
                }
                for (var s = (0, o.getParentElement)(e).firstElementChild; s;) {
                    if (s !== e && a(s)) return !1;
                    s = s.nextElementSibling
                }
                return !0
            }

            function g(e, t) {
                return t ? "".concat(e, ">").concat(t) : e
            }

            function _() {
                if (void 0 === a) try {
                    document.querySelector(":scope"), a = !0
                } catch (e) {
                    a = !1
                }
                return a
            }
        }, (e, t, n) => {
            "use strict";

            function a(e) {
                return window.CSS && window.CSS.escape ? window.CSS.escape(e) : e.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(e, t) {
                    return t ? "\0" === e ? "�" : "".concat(e.slice(0, -1), "\\").concat(e.charCodeAt(e.length - 1).toString(16), " ") : "\\".concat(e)
                }))
            }

            function o(e, t) {
                return e.matches ? e.matches(t) : !!e.msMatchesSelector && e.msMatchesSelector(t)
            }

            function i(e) {
                if (e.parentElement) return e.parentElement;
                for (; e.parentNode;) {
                    if (e.parentNode.nodeType === Node.ELEMENT_NODE) return e.parentNode;
                    e = e.parentNode
                }
                return null
            }

            function s(e) {
                if (e.classList) return e.classList;
                var t = (e.getAttribute("class") || "").trim();
                return t ? t.split(/\s+/) : []
            }
            n.r(t), n.d(t, {
                WeakSet: () => r,
                cssEscape: () => a,
                elementMatches: () => o,
                getClassList: () => s,
                getParentElement: () => i
            });
            var r = function() {
                function e(e) {
                    var t = this;
                    this.map = new WeakMap, e && e.forEach((function(e) {
                        return t.map.set(e, 1)
                    }))
                }
                return e.prototype.add = function(e) {
                    return this.map.set(e, 1), this
                }, e.prototype.delete = function(e) {
                    return this.map.delete(e)
                }, e.prototype.has = function(e) {
                    return this.map.has(e)
                }, e
            }()
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ACTION_NAME_PLACEHOLDER: () => c,
                DEFAULT_PROGRAMMATIC_ACTION_NAME_ATTRIBUTE: () => l,
                getActionNameFromElement: () => u
            });
            var a = n(82),
                o = n(76),
                i = n(92),
                s = n(161),
                r = n(163),
                l = "data-dd-action-name",
                c = "Masked Element";

            function u(e, t, n) {
                var a = t.enablePrivacyForActionName,
                    o = t.actionNameAttribute,
                    i = d(e, l) || o && d(e, o);
                return n === r.NodePrivacyLevel.MASK ? i || c : i || h(e, o, f, a) || h(e, o, g, a) || ""
            }

            function d(e, t) {
                var n;
                if (function() {
                        void 0 === p && (p = "closest" in HTMLElement.prototype);
                        return p
                    }()) n = e.closest("[".concat(t, "]"));
                else
                    for (var a = e; a;) {
                        if (a.hasAttribute(t)) {
                            n = a;
                            break
                        }
                        a = (0, s.getParentElement)(a)
                    }
                if (n) return v(E(n.getAttribute(t).trim()))
            }
            var m, p, f = [function(e, t, n) {
                    if (function() {
                            void 0 === m && (m = "labels" in HTMLInputElement.prototype);
                            return m
                        }()) {
                        if ("labels" in e && e.labels && e.labels.length > 0) return S(e.labels[0], t)
                    } else if (e.id) {
                        var o = e.ownerDocument && (0, a.find)(e.ownerDocument.querySelectorAll("label"), (function(t) {
                            return t.htmlFor === e.id
                        }));
                        return o && S(o, t, n)
                    }
                }, function(e) {
                    if ("INPUT" === e.nodeName) {
                        var t = e,
                            n = t.getAttribute("type");
                        if ("button" === n || "submit" === n || "reset" === n) return t.value
                    }
                }, function(e, t, n) {
                    if ("BUTTON" === e.nodeName || "LABEL" === e.nodeName || "button" === e.getAttribute("role")) return S(e, t, n)
                }, function(e) {
                    return e.getAttribute("aria-label")
                }, function(e, t, n) {
                    var a = e.getAttribute("aria-labelledby");
                    if (a) return a.split(/\s+/).map((function(t) {
                        return function(e, t) {
                            return e.ownerDocument ? e.ownerDocument.getElementById(t) : null
                        }(e, t)
                    })).filter((function(e) {
                        return Boolean(e)
                    })).map((function(e) {
                        return S(e, t, n)
                    })).join(" ")
                }, function(e) {
                    return e.getAttribute("alt")
                }, function(e) {
                    return e.getAttribute("name")
                }, function(e) {
                    return e.getAttribute("title")
                }, function(e) {
                    return e.getAttribute("placeholder")
                }, function(e, t) {
                    if ("options" in e && e.options.length > 0) return S(e.options[0], t)
                }],
                g = [function(e, t, n) {
                    return S(e, t, n)
                }],
                _ = 10;

            function h(e, t, n, a) {
                for (var o = e, i = 0; i <= _ && o && "BODY" !== o.nodeName && "HTML" !== o.nodeName && "HEAD" !== o.nodeName;) {
                    for (var r = 0, l = n; r < l.length; r++) {
                        var c = (0, l[r])(o, t, a);
                        if ("string" == typeof c) {
                            var u = c.trim();
                            if (u) return v(E(u))
                        }
                    }
                    if ("FORM" === o.nodeName) break;
                    o = (0, s.getParentElement)(o), i += 1
                }
            }

            function E(e) {
                return e.replace(/\s+/g, " ")
            }

            function v(e) {
                return e.length > 100 ? "".concat((0, o.safeTruncate)(e, 100), " [...]") : e
            }

            function S(e, t, n) {
                if (!e.isContentEditable) {
                    if ("innerText" in e) {
                        var a = e.innerText,
                            o = function(t) {
                                for (var n = e.querySelectorAll(t), o = 0; o < n.length; o += 1) {
                                    var i = n[o];
                                    if ("innerText" in i) {
                                        var s = i.innerText;
                                        s && s.trim().length > 0 && (a = a.replace(s, ""))
                                    }
                                }
                            };
                        return (0, i.isIE)() && o("script, style"), o("[".concat(l, "]")), t && o("[".concat(t, "]")), n && o("".concat((0, r.getPrivacySelector)(r.NodePrivacyLevel.HIDDEN), ", ").concat((0, r.getPrivacySelector)(r.NodePrivacyLevel.MASK))), a
                    }
                    return e.textContent
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                CENSORED_IMG_MARK: () => f,
                CENSORED_STRING_MARK: () => p,
                FORM_PRIVATE_TAG_NAMES: () => g,
                NodePrivacyLevel: () => s,
                PRIVACY_ATTR_NAME: () => r,
                PRIVACY_ATTR_VALUE_ALLOW: () => l,
                PRIVACY_ATTR_VALUE_HIDDEN: () => d,
                PRIVACY_ATTR_VALUE_MASK: () => c,
                PRIVACY_ATTR_VALUE_MASK_USER_INPUT: () => u,
                PRIVACY_CLASS_PREFIX: () => m,
                censorText: () => y,
                getNodePrivacyLevel: () => _,
                getNodeSelfPrivacyLevel: () => E,
                getPrivacySelector: () => N,
                getTextContent: () => T,
                reducePrivacyLevel: () => h,
                shouldIgnoreElement: () => b,
                shouldMaskNode: () => v
            });
            var a = n(85),
                o = n(164),
                i = n(161),
                s = {
                    IGNORE: "ignore",
                    HIDDEN: "hidden",
                    ALLOW: a.DefaultPrivacyLevel.ALLOW,
                    MASK: a.DefaultPrivacyLevel.MASK,
                    MASK_USER_INPUT: a.DefaultPrivacyLevel.MASK_USER_INPUT
                },
                r = "data-dd-privacy",
                l = "allow",
                c = "mask",
                u = "mask-user-input",
                d = "hidden",
                m = "dd-privacy-",
                p = "***",
                f = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                g = {
                    INPUT: !0,
                    OUTPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0,
                    OPTION: !0,
                    DATALIST: !0,
                    OPTGROUP: !0
                };

            function _(e, t, n) {
                if (n && n.has(e)) return n.get(e);
                var a = (0, o.getParentNode)(e),
                    i = a ? _(a, t, n) : t,
                    s = h(E(e), i);
                return n && n.set(e, s), s
            }

            function h(e, t) {
                switch (t) {
                    case s.HIDDEN:
                    case s.IGNORE:
                        return t
                }
                switch (e) {
                    case s.ALLOW:
                    case s.MASK:
                    case s.MASK_USER_INPUT:
                    case s.HIDDEN:
                    case s.IGNORE:
                        return e;
                    default:
                        return t
                }
            }

            function E(e) {
                if ((0, o.isElementNode)(e)) {
                    if ("BASE" === e.tagName) return s.ALLOW;
                    if ("INPUT" === e.tagName) {
                        var t = e;
                        if ("password" === t.type || "email" === t.type || "tel" === t.type) return s.MASK;
                        if ("hidden" === t.type) return s.MASK;
                        var n = t.getAttribute("autocomplete");
                        if (n && (n.startsWith("cc-") || n.endsWith("-password"))) return s.MASK
                    }
                    return (0, i.elementMatches)(e, N(s.HIDDEN)) ? s.HIDDEN : (0, i.elementMatches)(e, N(s.MASK)) ? s.MASK : (0, i.elementMatches)(e, N(s.MASK_USER_INPUT)) ? s.MASK_USER_INPUT : (0, i.elementMatches)(e, N(s.ALLOW)) ? s.ALLOW : b(e) ? s.IGNORE : void 0
                }
            }

            function v(e, t) {
                switch (t) {
                    case s.MASK:
                    case s.HIDDEN:
                    case s.IGNORE:
                        return !0;
                    case s.MASK_USER_INPUT:
                        return (0, o.isTextNode)(e) ? S(e.parentNode) : S(e);
                    default:
                        return !1
                }
            }

            function S(e) {
                if (!e || e.nodeType !== e.ELEMENT_NODE) return !1;
                var t = e;
                if ("INPUT" === t.tagName) switch (t.type) {
                    case "button":
                    case "color":
                    case "reset":
                    case "submit":
                        return !1
                }
                return !!g[t.tagName]
            }
            var y = function(e) {
                return e.replace(/\S/g, "x")
            };

            function T(e, t, n) {
                var a, o = null === (a = e.parentElement) || void 0 === a ? void 0 : a.tagName,
                    i = e.textContent || "";
                if (!t || i.trim()) {
                    var r = n;
                    if ("SCRIPT" === o) i = p;
                    else if (r === s.HIDDEN) i = p;
                    else if (v(e, r))
                        if ("DATALIST" === o || "SELECT" === o || "OPTGROUP" === o) {
                            if (!i.trim()) return
                        } else i = "OPTION" === o ? p : y(i);
                    return i
                }
            }

            function b(e) {
                if ("SCRIPT" === e.nodeName) return !0;
                if ("LINK" === e.nodeName) {
                    var t = o("rel");
                    return /preload|prefetch/i.test(t) && "script" === o("as") || "shortcut icon" === t || "icon" === t
                }
                if ("META" === e.nodeName) {
                    var n = o("name"),
                        a = (t = o("rel"), o("property"));
                    return /^msapplication-tile(image|color)$/.test(n) || "application-name" === n || "icon" === t || "apple-touch-icon" === t || "shortcut icon" === t || "keywords" === n || "description" === n || /^(og|twitter|fb):/.test(a) || /^(og|twitter):/.test(n) || "pinterest" === n || "robots" === n || "googlebot" === n || "bingbot" === n || e.hasAttribute("http-equiv") || "author" === n || "generator" === n || "framework" === n || "publisher" === n || "progid" === n || /^article:/.test(a) || /^product:/.test(a) || "google-site-verification" === n || "yandex-verification" === n || "csrf-token" === n || "p:domain_verify" === n || "verify-v1" === n || "verification" === n || "shopify-checkout-api-token" === n
                }

                function o(t) {
                    return (e.getAttribute(t) || "").toLowerCase()
                }
                return !1
            }

            function N(e) {
                return "[".concat(r, '="').concat(e, '"], .').concat(m).concat(e)
            }
        }, (e, t, n) => {
            "use strict";

            function a(e) {
                return e.nodeType === Node.TEXT_NODE
            }

            function o(e) {
                return e.nodeType === Node.COMMENT_NODE
            }

            function i(e) {
                return e.nodeType === Node.ELEMENT_NODE
            }

            function s(e) {
                return i(e) && Boolean(e.shadowRoot)
            }

            function r(e) {
                var t = e;
                return !!t.host && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && i(t.host)
            }

            function l(e) {
                return e.childNodes.length > 0 || s(e)
            }

            function c(e, t) {
                for (var n = e.firstChild; n;) t(n), n = n.nextSibling;
                s(e) && t(e.shadowRoot)
            }

            function u(e) {
                return r(e) ? e.host : e.parentNode
            }
            n.r(t), n.d(t, {
                forEachChildNodes: () => c,
                getParentNode: () => u,
                hasChildNodes: () => l,
                isCommentNode: () => o,
                isElementNode: () => i,
                isNodeShadowHost: () => s,
                isNodeShadowRoot: () => r,
                isTextNode: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DISTANCE_BETWEEN_CLICKS: () => s,
                MAX_DURATION_BETWEEN_CLICKS: () => i,
                createClickChain: () => r
            });
            var a = n(72),
                o = n(98),
                i = a.ONE_SECOND,
                s = 100;

            function r(e, t) {
                var n, a = [],
                    r = 0;

                function l(e) {
                    e.stopObservable.subscribe(c), a.push(e), (0, o.clearTimeout)(n), n = (0, o.setTimeout)(u, i)
                }

                function c() {
                    1 === r && a.every((function(e) {
                        return e.isStopped()
                    })) && (r = 2, t(a))
                }

                function u() {
                    (0, o.clearTimeout)(n), 0 === r && (r = 1, c())
                }
                return l(e), {
                    tryAppend: function(e) {
                        return 0 === r && (a.length > 0 && (t = a[a.length - 1].event, n = e.event, !(t.target === n.target && (o = t, c = n, Math.sqrt(Math.pow(o.clientX - c.clientX, 2) + Math.pow(o.clientY - c.clientY, 2)) <= s) && t.timeStamp - n.timeStamp <= i)) ? (u(), !1) : (l(e), !0));
                        var t, n, o, c
                    },
                    stop: function() {
                        u()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                listenActionEvents: () => o
            });
            var a = n(112);

            function o(e, t) {
                var n, o, r = t.onPointerDown,
                    l = t.onPointerUp,
                    c = {
                        selection: !1,
                        input: !1,
                        scroll: !1
                    },
                    u = [(0, a.addEventListener)(e, window, "pointerdown", (function(e) {
                        s(e) && (n = i(), c = {
                            selection: !1,
                            input: !1,
                            scroll: !1
                        }, o = r(e))
                    }), {
                        capture: !0
                    }), (0, a.addEventListener)(e, window, "selectionchange", (function() {
                        n && i() || (c.selection = !0)
                    }), {
                        capture: !0
                    }), (0, a.addEventListener)(e, window, "scroll", (function() {
                        c.scroll = !0
                    }), {
                        capture: !0,
                        passive: !0
                    }), (0, a.addEventListener)(e, window, "pointerup", (function(e) {
                        if (s(e) && o) {
                            var t = c;
                            l(o, e, (function() {
                                return t
                            })), o = void 0
                        }
                    }), {
                        capture: !0
                    }), (0, a.addEventListener)(e, window, "input", (function() {
                        c.input = !0
                    }), {
                        capture: !0
                    })];
                return {
                    stop: function() {
                        u.forEach((function(e) {
                            return e.stop()
                        }))
                    }
                }
            }

            function i() {
                var e = window.getSelection();
                return !e || e.isCollapsed
            }

            function s(e) {
                return e.target instanceof Element && !1 !== e.isPrimary
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                computeFrustration: () => s,
                isDead: () => c,
                isRage: () => r
            });
            var a = n(72),
                o = n(161),
                i = 3;

            function s(e, t) {
                if (r(e)) return t.addFrustration("rage_click"), e.some(c) && t.addFrustration("dead_click"), t.hasError && t.addFrustration("error_click"), {
                    isRage: !0
                };
                var n = e.some((function(e) {
                    return e.getUserActivity().selection
                }));
                return e.forEach((function(e) {
                    e.hasError && e.addFrustration("error_click"), c(e) && !n && e.addFrustration("dead_click")
                })), {
                    isRage: !1
                }
            }

            function r(e) {
                if (e.some((function(e) {
                        return e.getUserActivity().selection || e.getUserActivity().scroll
                    }))) return !1;
                for (var t = 0; t < e.length - (i - 1); t += 1)
                    if (e[t + i - 1].event.timeStamp - e[t].event.timeStamp <= a.ONE_SECOND) return !0;
                return !1
            }
            var l = 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *';

            function c(e) {
                return !(e.hasPageActivity || e.getUserActivity().input || e.getUserActivity().scroll) && !(0, o.elementMatches)(e.event.target, l)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                CLICK_ACTION_MAX_DURATION: () => o,
                getInteractionSelector: () => s,
                interactionSelectorCache: () => i,
                updateInteractionSelector: () => r
            });
            var a = n(72),
                o = 10 * a.ONE_SECOND,
                i = new Map;

            function s(e) {
                var t = i.get(e);
                return i.delete(e), t
            }

            function r(e, t) {
                i.set(e, t), i.forEach((function(e, t) {
                    (0, a.elapsed)(t, (0, a.relativeNow)()) > o && i.delete(t)
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                doStartErrorCollection: () => f,
                startErrorCollection: () => p
            });
            var a = n(87),
                o = n(174),
                i = n(82),
                s = n(122),
                r = n(124),
                l = n(142),
                c = n(76),
                u = n(84),
                d = n(170),
                m = n(172);

            function p(e, t, n, i) {
                var s = new a.Observable;
                return (0, d.trackConsoleError)(s), (0, o.trackRuntimeError)(s), (0, m.trackReportError)(t, s), s.subscribe((function(t) {
                    return e.notify(13, {
                        error: t
                    })
                })), f(e, n, i)
            }

            function f(e, t, n) {
                return e.subscribe(13, (function(a) {
                    var o = a.error,
                        s = a.customerContext,
                        r = a.savedCommonContext;
                    e.notify(11, (0, i.assign)({
                        customerContext: s,
                        savedCommonContext: r
                    }, function(e, t, n) {
                        var a = {
                                date: e.startClocks.timeStamp,
                                error: {
                                    id: (0, c.generateUUID)(),
                                    message: e.message,
                                    source: e.source,
                                    stack: e.stack,
                                    handling_stack: e.handlingStack,
                                    type: e.type,
                                    handling: e.handling,
                                    causes: e.causes,
                                    source_type: "browser",
                                    fingerprint: e.fingerprint,
                                    csp: e.csp
                                },
                                type: "error",
                                view: {
                                    in_foreground: t.wasInPageStateAt("active", e.startClocks.relative)
                                }
                            },
                            o = n.findFeatureFlagEvaluations(e.startClocks.relative);
                        o && !(0, u.isEmptyObject)(o) && (a.feature_flags = o);
                        var i = {
                            error: e.originalError,
                            handlingStack: e.handlingStack
                        };
                        return {
                            rawRumEvent: a,
                            startTime: e.startClocks.relative,
                            domainContext: i
                        }
                    }(o, t, n)))
                })), {
                    addError: function(t, n) {
                        var a = t.error,
                            o = t.handlingStack,
                            i = t.startClocks,
                            c = t.context,
                            u = a instanceof Error ? (0, s.computeStackTrace)(a) : void 0,
                            d = (0, r.computeRawError)({
                                stackTrace: u,
                                originalError: a,
                                handlingStack: o,
                                startClocks: i,
                                nonErrorPrefix: "Provided",
                                source: l.ErrorSource.CUSTOM,
                                handling: "handled"
                            });
                        e.notify(13, {
                            customerContext: c,
                            savedCommonContext: n,
                            error: d
                        })
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackConsoleError: () => i
            });
            var a = n(171),
                o = n(83);

            function i(e) {
                var t = (0, a.initConsoleObservable)([o.ConsoleApiName.error]).subscribe((function(t) {
                    return e.notify(t.error)
                }));
                return {
                    stop: function() {
                        t.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                initConsoleObservable: () => g,
                resetConsoleObservable: () => _
            });
            var a = n(124),
                o = n(87),
                i = n(83),
                s = n(101),
                r = n(125),
                l = n(82),
                c = n(110),
                u = n(142),
                d = n(122),
                m = n(123),
                p = n(72),
                f = {};

            function g(e) {
                var t = e.map((function(e) {
                    return f[e] || (f[e] = function(e) {
                        return new o.Observable((function(t) {
                            var n = i.globalConsole[e];
                            return i.globalConsole[e] = function() {
                                    for (var o = [], f = 0; f < arguments.length; f++) o[f] = arguments[f];
                                    n.apply(console, o);
                                    var g = (0, m.createHandlingStack)();
                                    (0, s.callMonitored)((function() {
                                        t.notify(function(e, t, n) {
                                            var o, s = e.map((function(e) {
                                                return function(e) {
                                                    if ("string" == typeof e) return (0, r.sanitize)(e);
                                                    if (e instanceof Error) return (0, m.formatErrorMessage)((0, d.computeStackTrace)(e));
                                                    return (0, c.jsonStringify)((0, r.sanitize)(e), void 0, 2)
                                                }(e)
                                            })).join(" ");
                                            if (t === i.ConsoleApiName.error) {
                                                var f = (0, l.find)(e, (function(e) {
                                                    return e instanceof Error
                                                }));
                                                o = {
                                                    stack: f ? (0, m.toStackTraceString)((0, d.computeStackTrace)(f)) : void 0,
                                                    fingerprint: (0, a.tryToGetFingerprint)(f),
                                                    causes: f ? (0, a.flattenErrorCauses)(f, "console") : void 0,
                                                    startClocks: (0, p.clocksNow)(),
                                                    message: s,
                                                    source: u.ErrorSource.CONSOLE,
                                                    handling: "handled",
                                                    handlingStack: n
                                                }
                                            }
                                            return {
                                                api: t,
                                                message: s,
                                                error: o,
                                                handlingStack: n
                                            }
                                        }(o, e, g))
                                    }))
                                },
                                function() {
                                    i.globalConsole[e] = n
                                }
                        }))
                    }(e)), f[e]
                }));
                return o.mergeObservables.apply(void 0, t)
            }

            function _() {
                f = {}
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackReportError: () => o
            });
            var a = n(173);

            function o(e, t) {
                var n = (0, a.initReportObservable)(e, [a.RawReportType.cspViolation, a.RawReportType.intervention]).subscribe((function(e) {
                    return t.notify(e)
                }));
                return {
                    stop: function() {
                        n.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                RawReportType: () => d,
                initReportObservable: () => m
            });
            var a = n(123),
                o = n(101),
                i = n(87),
                s = n(112),
                r = n(82),
                l = n(76),
                c = n(142),
                u = n(72),
                d = {
                    intervention: "intervention",
                    deprecation: "deprecation",
                    cspViolation: "csp_violation"
                };

            function m(e, t) {
                var n = [];
                (0, r.includes)(t, d.cspViolation) && n.push(function(e) {
                    return new i.Observable((function(t) {
                        return (0, s.addEventListener)(e, document, "securitypolicyviolation", (function(e) {
                            t.notify(function(e) {
                                var t = "'".concat(e.blockedURI, "' blocked by '").concat(e.effectiveDirective, "' directive");
                                return p({
                                    type: e.effectiveDirective,
                                    message: "".concat(d.cspViolation, ": ").concat(t),
                                    originalError: e,
                                    csp: {
                                        disposition: e.disposition
                                    },
                                    stack: f(e.effectiveDirective, e.originalPolicy ? "".concat(t, ' of the policy "').concat((0, l.safeTruncate)(e.originalPolicy, 100, "..."), '"') : "no policy", e.sourceFile, e.lineNumber, e.columnNumber)
                                })
                            }(e))
                        })).stop
                    }))
                }(e));
                var a = t.filter((function(e) {
                    return e !== d.cspViolation
                }));
                return a.length && n.push(function(e) {
                    return new i.Observable((function(t) {
                        if (window.ReportingObserver) {
                            var n = (0, o.monitor)((function(e, n) {
                                    return e.forEach((function(e) {
                                        return t.notify(function(e) {
                                            var t = e.type,
                                                n = e.body;
                                            return p({
                                                type: n.id,
                                                message: "".concat(t, ": ").concat(n.message),
                                                originalError: e,
                                                stack: f(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                                            })
                                        }(e))
                                    }))
                                })),
                                a = new window.ReportingObserver(n, {
                                    types: e,
                                    buffered: !0
                                });
                            return a.observe(),
                                function() {
                                    a.disconnect()
                                }
                        }
                    }))
                }(a)), i.mergeObservables.apply(void 0, n)
            }

            function p(e) {
                return (0, r.assign)({
                    startClocks: (0, u.clocksNow)(),
                    source: c.ErrorSource.REPORT,
                    handling: "unhandled"
                }, e)
            }

            function f(e, t, n, o, i) {
                return n ? (0, a.toStackTraceString)({
                    name: e,
                    message: t,
                    stack: [{
                        func: "?",
                        url: n,
                        line: null != o ? o : void 0,
                        column: null != i ? i : void 0
                    }]
                }) : void 0
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                instrumentOnError: () => c,
                instrumentUnhandledRejection: () => u,
                trackRuntimeError: () => l
            });
            var a = n(128),
                o = n(72),
                i = n(122),
                s = n(124),
                r = n(142);

            function l(e) {
                var t = function(t, n) {
                        var a = (0, s.computeRawError)({
                            stackTrace: t,
                            originalError: n,
                            startClocks: (0, o.clocksNow)(),
                            nonErrorPrefix: "Uncaught",
                            source: r.ErrorSource.SOURCE,
                            handling: "unhandled"
                        });
                        e.notify(a)
                    },
                    n = c(t).stop,
                    a = u(t).stop;
                return {
                    stop: function() {
                        n(), a()
                    }
                }
            }

            function c(e) {
                return (0, a.instrumentMethod)(window, "onerror", (function(t) {
                    var n, a = t.parameters,
                        o = a[0],
                        s = a[1],
                        r = a[2],
                        l = a[3],
                        c = a[4];
                    n = c instanceof Error ? (0, i.computeStackTrace)(c) : (0, i.computeStackTraceFromOnErrorMessage)(o, s, r, l), e(n, null != c ? c : o)
                }))
            }

            function u(e) {
                return (0, a.instrumentMethod)(window, "onunhandledrejection", (function(t) {
                    var n = t.parameters[0].reason || "Empty reason",
                        a = (0, i.computeStackTrace)(n);
                    e(a, n)
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startLongTaskCollection: () => s
            });
            var a = n(72),
                o = n(76),
                i = n(158);

            function s(e, t) {
                var n = (0, i.createPerformanceObservable)(t, {
                    type: i.RumPerformanceEntryType.LONG_TASK,
                    buffered: !0
                }).subscribe((function(n) {
                    for (var s = 0, r = n; s < r.length; s++) {
                        var l = r[s];
                        if (l.entryType !== i.RumPerformanceEntryType.LONG_TASK) break;
                        if (!t.trackLongTasks) break;
                        var c = (0, a.relativeToClocks)(l.startTime),
                            u = {
                                date: c.timeStamp,
                                long_task: {
                                    id: (0, o.generateUUID)(),
                                    entry_type: "long-task",
                                    duration: (0, a.toServerDuration)(l.duration)
                                },
                                type: "long_task",
                                _dd: {
                                    discarded: !1
                                }
                            };
                        e.notify(11, {
                            rawRumEvent: u,
                            startTime: c.relative,
                            domainContext: {
                                performanceEntry: l
                            }
                        })
                    }
                }));
                return {
                    stop: function() {
                        n.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startResourceCollection: () => p
            });
            var a = n(72),
                o = n(74),
                i = n(76),
                s = n(82),
                r = n(73),
                l = n(158),
                c = n(80),
                u = n(177),
                d = n(149),
                m = n(178);

            function p(e, t, n, s) {
                void 0 === s && (s = m.retrieveInitialDocumentResourceTiming), e.subscribe(7, (function(s) {
                    var r = function(e, t, n) {
                        var s = (0, u.matchRequestResourceEntry)(e),
                            r = s ? (0, a.relativeToClocks)(s.startTime) : e.startClocks,
                            l = function(e, t) {
                                var n = e.traceSampled && e.traceId && e.spanId;
                                if (!n) return;
                                return {
                                    _dd: {
                                        span_id: e.spanId.toDecimalString(),
                                        trace_id: e.traceId.toDecimalString(),
                                        rule_psr: _(t)
                                    }
                                }
                            }(e, t);
                        if (!t.trackResources && !l) return;
                        var c = "xhr" === e.type ? "xhr" : "fetch",
                            m = s ? g(s) : void 0,
                            p = function(e, t, n) {
                                return e.wasInPageStateDuringPeriod("frozen", t.relative, n) ? void 0 : (0, a.toServerDuration)(n)
                            }(n, r, e.duration),
                            f = (0, o.combine)({
                                date: r.timeStamp,
                                resource: {
                                    id: (0, i.generateUUID)(),
                                    type: c,
                                    duration: p,
                                    method: e.method,
                                    status_code: e.status,
                                    protocol: s && (0, d.computeResourceEntryProtocol)(s),
                                    url: (0, d.isLongDataUrl)(e.url) ? (0, d.sanitizeDataUrl)(e.url) : e.url
                                },
                                type: "resource",
                                _dd: {
                                    discarded: !t.trackResources
                                }
                            }, l, m);
                        return {
                            startTime: r.relative,
                            rawRumEvent: f,
                            domainContext: {
                                performanceEntry: s,
                                xhr: e.xhr,
                                response: e.response,
                                requestInput: e.input,
                                requestInit: e.init,
                                error: e.error,
                                isAborted: e.isAborted,
                                handlingStack: e.handlingStack
                            }
                        }
                    }(s, t, n);
                    r && e.notify(11, r)
                }));
                var r = (0, l.createPerformanceObservable)(t, {
                    type: l.RumPerformanceEntryType.RESOURCE,
                    buffered: !0
                }).subscribe((function(n) {
                    for (var a = 0, o = n; a < o.length; a++) {
                        var i = o[a];
                        if (!(0, d.isResourceEntryRequestType)(i)) {
                            var s = f(i, t);
                            s && e.notify(11, s)
                        }
                    }
                }));
                return s(t, (function(n) {
                    var a = f(n, t);
                    a && e.notify(11, a)
                })), {
                    stop: function() {
                        r.unsubscribe()
                    }
                }
            }

            function f(e, t) {
                var n = (0, a.relativeToClocks)(e.startTime),
                    s = function(e, t) {
                        var n = e.traceId;
                        if (!n) return;
                        return {
                            _dd: {
                                trace_id: e.traceId,
                                span_id: (0, c.createTraceIdentifier)().toDecimalString(),
                                rule_psr: _(t)
                            }
                        }
                    }(e, t);
                if (t.trackResources || s) {
                    var r, l = (0, d.computeResourceEntryType)(e),
                        u = g(e),
                        m = (0, o.combine)({
                            date: n.timeStamp,
                            resource: {
                                id: (0, i.generateUUID)(),
                                type: l,
                                url: e.name,
                                status_code: (r = e.responseStatus, 0 === r ? void 0 : r),
                                protocol: (0, d.computeResourceEntryProtocol)(e)
                            },
                            type: "resource",
                            _dd: {
                                discarded: !t.trackResources
                            }
                        }, s, u);
                    return {
                        startTime: n.relative,
                        rawRumEvent: m,
                        domainContext: {
                            performanceEntry: e
                        }
                    }
                }
            }

            function g(e) {
                var t = e.renderBlockingStatus;
                return {
                    resource: (0, s.assign)({
                        duration: (0, d.computeResourceEntryDuration)(e),
                        render_blocking_status: t
                    }, (0, d.computeResourceEntrySize)(e), (0, d.computeResourceEntryDetails)(e))
                }
            }

            function _(e) {
                return (0, r.isNumber)(e.traceSampleRate) ? e.traceSampleRate / 100 : void 0
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                matchRequestResourceEntry: () => r
            });
            var a = n(72),
                o = n(161),
                i = n(149),
                s = new o.WeakSet;

            function r(e) {
                if (performance && "getEntriesByName" in performance) {
                    var t = performance.getEntriesByName(e.url, "resource");
                    if (t.length && "toJSON" in t[0]) {
                        var n = t.filter((function(e) {
                            return !s.has(e)
                        })).filter((function(e) {
                            return (0, i.hasValidResourceEntryDuration)(e) && (0, i.hasValidResourceEntryTimings)(e)
                        })).filter((function(t) {
                            return n = t, o = e.startClocks.relative, i = l({
                                startTime: e.startClocks.relative,
                                duration: e.duration
                            }), s = 1, n.startTime >= o - s && l(n) <= (0, a.addDuration)(i, s);
                            var n, o, i, s
                        }));
                        return 1 === n.length ? (s.add(n[0]), n[0].toJSON()) : void 0
                    }
                }
            }

            function l(e) {
                return (0, a.addDuration)(e.startTime, e.duration)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                retrieveInitialDocumentResourceTiming: () => c
            });
            var a = n(181),
                o = n(82),
                i = n(158),
                s = n(179),
                r = n(180),
                l = n(149);

            function c(e, t) {
                (0, a.runOnReadyState)(e, "interactive", (function() {
                    var e = (0, o.assign)((0, r.getNavigationEntry)().toJSON(), {
                        entryType: i.RumPerformanceEntryType.RESOURCE,
                        initiatorType: l.FAKE_INITIAL_DOCUMENT,
                        traceId: (0, s.getDocumentTraceId)(document),
                        toJSON: function() {
                            return (0, o.assign)({}, e, {
                                toJSON: void 0
                            })
                        }
                    });
                    t(e)
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                INITIAL_DOCUMENT_OUTDATED_TRACE_ID_THRESHOLD: () => s,
                createDocumentTraceData: () => u,
                findTraceComment: () => d,
                getDocumentTraceDataFromComment: () => c,
                getDocumentTraceDataFromMeta: () => l,
                getDocumentTraceId: () => r
            });
            var a = n(72),
                o = n(76),
                i = n(164),
                s = 2 * a.ONE_MINUTE;

            function r(e) {
                var t = l(e) || c(e);
                if (t && !(t.traceTime <= (0, a.dateNow)() - s)) return t.traceId
            }

            function l(e) {
                var t = e.querySelector("meta[name=dd-trace-id]"),
                    n = e.querySelector("meta[name=dd-trace-time]");
                return u(t && t.content, n && n.content)
            }

            function c(e) {
                var t = d(e);
                if (t) return u((0, o.findCommaSeparatedValue)(t, "trace-id"), (0, o.findCommaSeparatedValue)(t, "trace-time"))
            }

            function u(e, t) {
                var n = t && Number(t);
                if (e && n) return {
                    traceId: e,
                    traceTime: n
                }
            }

            function d(e) {
                for (var t = 0; t < e.childNodes.length; t += 1) {
                    if (n = m(e.childNodes[t])) return n
                }
                if (e.body)
                    for (t = e.body.childNodes.length - 1; t >= 0; t -= 1) {
                        var n, a = e.body.childNodes[t];
                        if (n = m(a)) return n;
                        if (!(0, i.isTextNode)(a)) break
                    }
            }

            function m(e) {
                if (e && (0, i.isCommentNode)(e)) {
                    var t = /^\s*DATADOG;(.*?)\s*$/.exec(e.data);
                    if (t) return t[1]
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                computeTimingsFromDeprecatedPerformanceTiming: () => l,
                getNavigationEntry: () => r
            });
            var a = n(82),
                o = n(73),
                i = n(72),
                s = n(158);

            function r() {
                if ((0, s.supportPerformanceTimingEvent)(s.RumPerformanceEntryType.NAVIGATION)) {
                    var e = performance.getEntriesByType(s.RumPerformanceEntryType.NAVIGATION)[0];
                    if (e) return e
                }
                var t = l(),
                    n = (0, a.assign)({
                        entryType: s.RumPerformanceEntryType.NAVIGATION,
                        initiatorType: "navigation",
                        name: window.location.href,
                        startTime: 0,
                        duration: t.responseEnd,
                        decodedBodySize: 0,
                        encodedBodySize: 0,
                        transferSize: 0,
                        toJSON: function() {
                            return (0, a.assign)({}, n, {
                                toJSON: void 0
                            })
                        }
                    }, t);
                return n
            }

            function l() {
                var e = {},
                    t = performance.timing;
                for (var n in t)
                    if ((0, o.isNumber)(t[n])) {
                        var a = n,
                            s = t[a];
                        e[a] = 0 === s ? 0 : (0, i.getRelativeTime)(s)
                    } return e
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                runOnReadyState: () => i
            });
            var a = n(102),
                o = n(112);

            function i(e, t, n) {
                if (document.readyState === t || "complete" === document.readyState) return n(), {
                    stop: a.noop
                };
                var i = "complete" === t ? "load" : "DOMContentLoaded";
                return (0, o.addEventListener)(e, window, i, n, {
                    once: !0
                })
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startViewCollection: () => r
            });
            var a = n(72),
                o = n(84),
                i = n(154),
                s = n(183);

            function r(e, t, n, r, l, c, u, d, m) {
                return e.subscribe(3, (function(n) {
                    return e.notify(11, function(e, t, n, s, r) {
                        var l, c, u, d, m, p, f, g, _, h, E, v, S, y, T, b, N = s.getReplayStats(e.id),
                            A = n.findFeatureFlagEvaluations(e.startClocks.relative),
                            C = r.findAll(e.startClocks.relative, e.duration),
                            I = {
                                _dd: {
                                    document_version: e.documentVersion,
                                    replay_stats: N,
                                    page_states: C,
                                    configuration: {
                                        start_session_replay_recording_manually: t.startSessionReplayRecordingManually
                                    }
                                },
                                date: e.startClocks.timeStamp,
                                type: "view",
                                view: {
                                    action: {
                                        count: e.eventCounts.actionCount
                                    },
                                    frustration: {
                                        count: e.eventCounts.frustrationCount
                                    },
                                    cumulative_layout_shift: null === (l = e.commonViewMetrics.cumulativeLayoutShift) || void 0 === l ? void 0 : l.value,
                                    cumulative_layout_shift_time: (0, a.toServerDuration)(null === (c = e.commonViewMetrics.cumulativeLayoutShift) || void 0 === c ? void 0 : c.time),
                                    cumulative_layout_shift_target_selector: null === (u = e.commonViewMetrics.cumulativeLayoutShift) || void 0 === u ? void 0 : u.targetSelector,
                                    first_byte: (0, a.toServerDuration)(null === (d = e.initialViewMetrics.navigationTimings) || void 0 === d ? void 0 : d.firstByte),
                                    dom_complete: (0, a.toServerDuration)(null === (m = e.initialViewMetrics.navigationTimings) || void 0 === m ? void 0 : m.domComplete),
                                    dom_content_loaded: (0, a.toServerDuration)(null === (p = e.initialViewMetrics.navigationTimings) || void 0 === p ? void 0 : p.domContentLoaded),
                                    dom_interactive: (0, a.toServerDuration)(null === (f = e.initialViewMetrics.navigationTimings) || void 0 === f ? void 0 : f.domInteractive),
                                    error: {
                                        count: e.eventCounts.errorCount
                                    },
                                    first_contentful_paint: (0, a.toServerDuration)(e.initialViewMetrics.firstContentfulPaint),
                                    first_input_delay: (0, a.toServerDuration)(null === (g = e.initialViewMetrics.firstInput) || void 0 === g ? void 0 : g.delay),
                                    first_input_time: (0, a.toServerDuration)(null === (_ = e.initialViewMetrics.firstInput) || void 0 === _ ? void 0 : _.time),
                                    first_input_target_selector: null === (h = e.initialViewMetrics.firstInput) || void 0 === h ? void 0 : h.targetSelector,
                                    interaction_to_next_paint: (0, a.toServerDuration)(null === (E = e.commonViewMetrics.interactionToNextPaint) || void 0 === E ? void 0 : E.value),
                                    interaction_to_next_paint_time: (0, a.toServerDuration)(null === (v = e.commonViewMetrics.interactionToNextPaint) || void 0 === v ? void 0 : v.time),
                                    interaction_to_next_paint_target_selector: null === (S = e.commonViewMetrics.interactionToNextPaint) || void 0 === S ? void 0 : S.targetSelector,
                                    is_active: e.isActive,
                                    name: e.name,
                                    largest_contentful_paint: (0, a.toServerDuration)(null === (y = e.initialViewMetrics.largestContentfulPaint) || void 0 === y ? void 0 : y.value),
                                    largest_contentful_paint_target_selector: null === (T = e.initialViewMetrics.largestContentfulPaint) || void 0 === T ? void 0 : T.targetSelector,
                                    load_event: (0, a.toServerDuration)(null === (b = e.initialViewMetrics.navigationTimings) || void 0 === b ? void 0 : b.loadEvent),
                                    loading_time: (0, i.discardNegativeDuration)((0, a.toServerDuration)(e.commonViewMetrics.loadingTime)),
                                    loading_type: e.loadingType,
                                    long_task: {
                                        count: e.eventCounts.longTaskCount
                                    },
                                    resource: {
                                        count: e.eventCounts.resourceCount
                                    },
                                    time_spent: (0, a.toServerDuration)(e.duration)
                                },
                                feature_flags: A && !(0, o.isEmptyObject)(A) ? A : void 0,
                                display: e.commonViewMetrics.scroll ? {
                                    scroll: {
                                        max_depth: e.commonViewMetrics.scroll.maxDepth,
                                        max_depth_scroll_top: e.commonViewMetrics.scroll.maxDepthScrollTop,
                                        max_scroll_height: e.commonViewMetrics.scroll.maxScrollHeight,
                                        max_scroll_height_time: (0, a.toServerDuration)(e.commonViewMetrics.scroll.maxScrollHeightTime)
                                    }
                                } : void 0,
                                session: {
                                    has_replay: !!N || void 0,
                                    is_active: !!e.sessionIsActive && void 0
                                },
                                privacy: {
                                    replay_level: t.defaultPrivacyLevel
                                }
                            };
                        (0, o.isEmptyObject)(e.customTimings) || (I.view.custom_timings = (0, o.mapValues)(e.customTimings, a.toServerDuration));
                        return {
                            rawRumEvent: I,
                            startTime: e.startClocks.relative,
                            domainContext: {
                                location: e.location
                            }
                        }
                    }(n, t, c, d, u))
                })), (0, s.trackViews)(n, e, r, t, l, !t.trackViewsManually, m)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                KEEP_TRACKING_AFTER_VIEW_DELAY: () => h,
                SESSION_KEEP_ALIVE_INTERVAL: () => _,
                THROTTLE_VIEW_UPDATE_PERIOD: () => g,
                trackViews: () => E
            });
            var a = n(72),
                o = n(199),
                i = n(76),
                s = n(87),
                r = n(84),
                l = n(131),
                c = n(102),
                u = n(98),
                d = n(83),
                m = n(184),
                p = n(185),
                f = n(191),
                g = 3e3,
                _ = 5 * a.ONE_MINUTE,
                h = 5 * a.ONE_MINUTE;

            function E(e, t, n, E, S, y, T) {
                var b, N = new Set,
                    A = C("initial_load", (0, a.clocksOrigin)(), T);

                function C(o, v, S) {
                    var y = function(e, t, n, o, E, v, S) {
                        void 0 === v && (v = (0, a.clocksNow)());
                        var y, T, b, N, A, C = (0, i.generateUUID)(),
                            I = new s.Observable,
                            L = {},
                            k = 0,
                            x = (0, r.shallowClone)(o),
                            O = (0, l.createContextManager)(),
                            M = !0;
                        S && (T = S.name, b = S.service || void 0, N = S.version || void 0, S.context && (A = S.context, O.setContext(A)));
                        var R = {
                            id: C,
                            name: T,
                            startClocks: v,
                            service: b,
                            version: N,
                            context: A
                        };
                        e.notify(1, R), e.notify(2, R);
                        var w = (0, c.throttle)(X, g, {
                                leading: !1
                            }),
                            P = w.throttled,
                            D = w.cancel,
                            G = (0, f.trackCommonViewMetrics)(e, t, n, P, E, v),
                            K = G.setLoadEvent,
                            V = G.setViewEnd,
                            U = G.stop,
                            B = G.stopINPTracking,
                            F = G.getCommonViewMetrics,
                            H = "initial_load" === E ? (0, p.trackInitialViewMetrics)(n, K, P) : {
                                stop: c.noop,
                                initialViewMetrics: {}
                            },
                            Y = H.stop,
                            j = H.initialViewMetrics,
                            z = (0, m.trackViewEventCounts)(e, C, P),
                            W = z.stop,
                            q = z.eventCounts,
                            $ = (0, u.setInterval)(X, _);

                        function X() {
                            D(), k += 1;
                            var t = void 0 === y ? (0, a.timeStampNow)() : y.timeStamp;
                            e.notify(3, {
                                customTimings: L,
                                documentVersion: k,
                                id: C,
                                name: T,
                                service: b,
                                version: N,
                                context: O.getContext(),
                                loadingType: E,
                                location: x,
                                startClocks: v,
                                commonViewMetrics: F(),
                                initialViewMetrics: j,
                                duration: (0, a.elapsed)(v.timeStamp, t),
                                isActive: void 0 === y,
                                sessionIsActive: M,
                                eventCounts: q
                            })
                        }
                        return X(), O.changeObservable.subscribe(X), {
                            get name() {
                                return T
                            },
                            service: b,
                            version: N,
                            contextManager: O,
                            stopObservable: I,
                            end: function(t) {
                                var n, o, i = this;
                                void 0 === t && (t = {}), y || (y = null !== (n = t.endClocks) && void 0 !== n ? n : (0, a.clocksNow)(), M = null === (o = t.sessionIsActive) || void 0 === o || o, e.notify(4, {
                                    endClocks: y
                                }), e.notify(5, {
                                    endClocks: y
                                }), (0, u.clearInterval)($), V(y.relative), U(), X(), (0, u.setTimeout)((function() {
                                    i.stop()
                                }), h))
                            },
                            stop: function() {
                                Y(), W(), B(), I.notify()
                            },
                            addTiming: function(e, t) {
                                if (!y) {
                                    var n = (0, a.looksLikeRelativeTime)(t) ? t : (0, a.elapsed)(v.timeStamp, t);
                                    L[function(e) {
                                        var t = e.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                                        t !== e && d.display.warn("Invalid timing name: ".concat(e, ", sanitized to: ").concat(t));
                                        return t
                                    }(e)] = n, P()
                                }
                            },
                            setViewName: function(e) {
                                T = e, X()
                            }
                        }
                    }(t, n, E, e, o, v, S);
                    return N.add(y), y.stopObservable.subscribe((function() {
                        N.delete(y)
                    })), y
                }
                return t.subscribe(9, (function() {
                    A = C("route_change", void 0, {
                        name: A.name,
                        service: A.service,
                        version: A.version,
                        context: A.contextManager.getContext()
                    })
                })), t.subscribe(8, (function() {
                    A.end({
                        sessionIsActive: !1
                    })
                })), t.subscribe(10, (function(e) {
                    e.reason === o.PageExitReason.UNLOADING && A.end()
                })), y && (b = function(e) {
                    return e.subscribe((function(e) {
                        var t, n, a, o, i = e.oldLocation,
                            s = e.newLocation;
                        n = s, (t = i).pathname === n.pathname && (a = n.hash, "" !== (o = a.substring(1)) && document.getElementById(o) || v(n.hash) === v(t.hash)) || (A.end(), A = C("route_change"))
                    }))
                }(S)), {
                    addTiming: function(e, t) {
                        void 0 === t && (t = (0, a.timeStampNow)()), A.addTiming(e, t)
                    },
                    startView: function(e, t) {
                        A.end({
                            endClocks: t
                        }), A = C("route_change", t, e)
                    },
                    setViewContext: function(e) {
                        A.contextManager.setContext(e)
                    },
                    setViewContextProperty: function(e, t) {
                        A.contextManager.setContextProperty(e, t)
                    },
                    setViewName: function(e) {
                        A.setViewName(e)
                    },
                    stop: function() {
                        b && b.unsubscribe(), A.end(), N.forEach((function(e) {
                            return e.stop()
                        }))
                    }
                }
            }

            function v(e) {
                var t = e.indexOf("?");
                return t < 0 ? e : e.slice(0, t)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackViewEventCounts: () => o
            });
            var a = n(156);

            function o(e, t, n) {
                var o = (0, a.trackEventCounts)({
                    lifeCycle: e,
                    isChildEvent: function(e) {
                        return e.view.id === t
                    },
                    onChange: n
                });
                return {
                    stop: o.stop,
                    eventCounts: o.eventCounts
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackInitialViewMetrics: () => l
            });
            var a = n(186),
                o = n(187),
                i = n(188),
                s = n(189),
                r = n(190);

            function l(e, t, n) {
                var l = {},
                    c = (0, i.trackNavigationTimings)(e, (function(e) {
                        t(e.loadEvent), l.navigationTimings = e, n()
                    })).stop,
                    u = (0, r.trackFirstHidden)(e),
                    d = (0, a.trackFirstContentfulPaint)(e, u, (function(e) {
                        l.firstContentfulPaint = e, n()
                    })).stop,
                    m = (0, s.trackLargestContentfulPaint)(e, u, window, (function(e) {
                        l.largestContentfulPaint = e, n()
                    })).stop,
                    p = (0, o.trackFirstInput)(e, u, (function(e) {
                        l.firstInput = e, n()
                    })).stop;
                return {
                    stop: function() {
                        c(), d(), m(), p(), u.stop()
                    },
                    initialViewMetrics: l
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                FCP_MAXIMUM_DELAY: () => s,
                trackFirstContentfulPaint: () => r
            });
            var a = n(72),
                o = n(82),
                i = n(158),
                s = 10 * a.ONE_MINUTE;

            function r(e, t, n) {
                return {
                    stop: (0, i.createPerformanceObservable)(e, {
                        type: i.RumPerformanceEntryType.PAINT,
                        buffered: !0
                    }).subscribe((function(e) {
                        var a = (0, o.find)(e, (function(e) {
                            return "first-contentful-paint" === e.name && e.startTime < t.timeStamp && e.startTime < s
                        }));
                        a && n(a.startTime)
                    })).unsubscribe
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackFirstInput: () => l
            });
            var a = n(82),
                o = n(72),
                i = n(164),
                s = n(158),
                r = n(160);

            function l(e, t, n) {
                var l = (0, s.createPerformanceObservable)(e, {
                    type: s.RumPerformanceEntryType.FIRST_INPUT,
                    buffered: !0
                }).subscribe((function(s) {
                    var l = (0, a.find)(s, (function(e) {
                        return e.startTime < t.timeStamp
                    }));
                    if (l) {
                        var c = (0, o.elapsed)(l.startTime, l.processingStart),
                            u = void 0;
                        l.target && (0, i.isElementNode)(l.target) && (u = (0, r.getSelectorFromElement)(l.target, e.actionNameAttribute)), n({
                            delay: c >= 0 ? c : 0,
                            time: l.startTime,
                            targetSelector: u
                        })
                    }
                }));
                return {
                    stop: function() {
                        l.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackNavigationTimings: () => r
            });
            var a = n(72),
                o = n(181),
                i = n(98),
                s = n(180);

            function r(e, t, n) {
                return void 0 === n && (n = s.getNavigationEntry),
                    function(e, t) {
                        var n, a = (0, o.runOnReadyState)(e, "complete", (function() {
                            n = (0, i.setTimeout)((function() {
                                return t()
                            }))
                        })).stop;
                        return {
                            stop: function() {
                                a(), (0, i.clearTimeout)(n)
                            }
                        }
                    }(e, (function() {
                        var e = n();
                        (function(e) {
                            return e.loadEventEnd <= 0
                        })(e) || t(function(e) {
                            return {
                                domComplete: e.domComplete,
                                domContentLoaded: e.domContentLoadedEventEnd,
                                domInteractive: e.domInteractive,
                                loadEvent: e.loadEventEnd,
                                firstByte: e.responseStart >= 0 && e.responseStart <= (0, a.relativeNow)() ? e.responseStart : void 0
                            }
                        }(e))
                    }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                LCP_MAXIMUM_DELAY: () => l,
                trackLargestContentfulPaint: () => c
            });
            var a = n(72),
                o = n(112),
                i = n(82),
                s = n(158),
                r = n(160),
                l = 10 * a.ONE_MINUTE;

            function c(e, t, n, a) {
                var c = 1 / 0,
                    u = (0, o.addEventListeners)(e, n, ["pointerdown", "keydown"], (function(e) {
                        c = e.timeStamp
                    }), {
                        capture: !0,
                        once: !0
                    }).stop,
                    d = 0,
                    m = (0, s.createPerformanceObservable)(e, {
                        type: s.RumPerformanceEntryType.LARGEST_CONTENTFUL_PAINT,
                        buffered: !0
                    }).subscribe((function(n) {
                        var o = (0, i.findLast)(n, (function(e) {
                            return e.entryType === s.RumPerformanceEntryType.LARGEST_CONTENTFUL_PAINT && e.startTime < c && e.startTime < t.timeStamp && e.startTime < l && e.size > d
                        }));
                        if (o) {
                            var u = void 0;
                            o.element && (u = (0, r.getSelectorFromElement)(o.element, e.actionNameAttribute)), a({
                                value: o.startTime,
                                targetSelector: u
                            }), d = o.size
                        }
                    }));
                return {
                    stop: function() {
                        u(), m.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackFirstHidden: () => o
            });
            var a = n(112);

            function o(e, t) {
                var n, o;
                return void 0 === t && (t = window), "hidden" === document.visibilityState ? n = 0 : (n = 1 / 0, o = (0, a.addEventListeners)(e, t, ["pagehide", "visibilitychange"], (function(e) {
                    "pagehide" !== e.type && "hidden" !== document.visibilityState || (n = e.timeStamp, o())
                }), {
                    capture: !0
                }).stop), {
                    get timeStamp() {
                        return n
                    },
                    stop: function() {
                        null == o || o()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackCommonViewMetrics: () => r
            });
            var a = n(192),
                o = n(193),
                i = n(195),
                s = n(196);

            function r(e, t, n, r, l, c) {
                var u = {},
                    d = (0, i.trackLoadingTime)(e, t, n, l, c, (function(e) {
                        u.loadingTime = e, r()
                    })),
                    m = d.stop,
                    p = d.setLoadEvent,
                    f = (0, s.trackScrollMetrics)(n, c, (function(e) {
                        u.scroll = e
                    })).stop,
                    g = (0, a.trackCumulativeLayoutShift)(n, c.relative, (function(e) {
                        u.cumulativeLayoutShift = e, r()
                    })).stop,
                    _ = (0, o.trackInteractionToNextPaint)(n, c.relative, l),
                    h = _.stop,
                    E = _.getInteractionToNextPaint;
                return {
                    stop: function() {
                        m(), g(), f()
                    },
                    stopINPTracking: h,
                    setLoadEvent: p,
                    setViewEnd: _.setViewEnd,
                    getCommonViewMetrics: function() {
                        return u.interactionToNextPaint = E(), u
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MAX_WINDOW_DURATION: () => m,
                isLayoutShiftSupported: () => f,
                trackCumulativeLayoutShift: () => u
            });
            var a = n(102),
                o = n(72),
                i = n(73),
                s = n(82),
                r = n(164),
                l = n(158),
                c = n(160);

            function u(e, t, n) {
                if (!f()) return {
                    stop: a.noop
                };
                var s, r, u = 0;
                n({
                    value: 0
                });
                var g, _, h, E, v = (h = 0, E = 0, {
                        update: function(e) {
                            var t;
                            return void 0 === g || e.startTime - _ >= p || e.startTime - g >= m ? (g = _ = e.startTime, E = h = e.value, t = !0) : (h += e.value, _ = e.startTime, (t = e.value > E) && (E = e.value)), {
                                cumulatedValue: h,
                                isMaxValue: t
                            }
                        }
                    }),
                    S = (0, l.createPerformanceObservable)(e, {
                        type: l.RumPerformanceEntryType.LAYOUT_SHIFT,
                        buffered: !0
                    }).subscribe((function(a) {
                        for (var l = 0, m = a; l < m.length; l++) {
                            var p = m[l];
                            if (!(p.hadRecentInput || p.startTime < t)) {
                                var f = v.update(p),
                                    g = f.cumulatedValue;
                                if (f.isMaxValue) {
                                    var _ = d(p.sources);
                                    s = _ ? new WeakRef(_) : void 0, r = (0, o.elapsed)(t, p.startTime)
                                }
                                if (g > u) {
                                    u = g;
                                    _ = null == s ? void 0 : s.deref();
                                    n({
                                        value: (0, i.round)(u, 4),
                                        targetSelector: _ && (0, c.getSelectorFromElement)(_, e.actionNameAttribute),
                                        time: r
                                    })
                                }
                            }
                        }
                    }));
                return {
                    stop: function() {
                        S.unsubscribe()
                    }
                }
            }

            function d(e) {
                var t;
                if (e) return null === (t = (0, s.find)(e, (function(e) {
                    return !!e.node && (0, r.isElementNode)(e.node)
                }))) || void 0 === t ? void 0 : t.node
            }
            var m = 5 * o.ONE_SECOND,
                p = o.ONE_SECOND;

            function f() {
                return (0, l.supportPerformanceTimingEvent)(l.RumPerformanceEntryType.LAYOUT_SHIFT) && "WeakRef" in window
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MAX_INP_VALUE: () => d,
                isInteractionToNextPaintSupported: () => f,
                trackInteractionToNextPaint: () => m,
                trackViewInteractionCount: () => p
            });
            var a = n(72),
                o = n(102),
                i = n(158),
                s = n(160),
                r = n(164),
                l = n(168),
                c = n(194),
                u = 10,
                d = 1 * a.ONE_MINUTE;

            function m(e, t, n) {
                if (!f()) return {
                    getInteractionToNextPaint: function() {},
                    setViewEnd: o.noop,
                    stop: o.noop
                };
                var c, m, g = p(n),
                    _ = g.getViewInteractionCount,
                    h = g.stopViewInteractionCount,
                    E = 1 / 0,
                    v = function(e) {
                        var t = [];

                        function n() {
                            t.sort((function(e, t) {
                                return t.duration - e.duration
                            })).splice(u)
                        }
                        return {
                            process: function(e) {
                                var a = t.findIndex((function(t) {
                                        return e.interactionId === t.interactionId
                                    })),
                                    o = t[t.length - 1]; - 1 !== a ? e.duration > t[a].duration && (t[a] = e, n()) : (t.length < u || e.duration > o.duration) && (t.push(e), n())
                            },
                            estimateP98Interaction: function() {
                                var n = Math.min(t.length - 1, Math.floor(e() / 50));
                                return t[n]
                            }
                        }
                    }(_),
                    S = -1;

                function y(n) {
                    for (var o = 0, i = n; o < i.length; o++) {
                        var u = i[o];
                        u.interactionId && u.startTime >= t && u.startTime <= E && v.process(u)
                    }
                    var d = v.estimateP98Interaction();
                    d && d.duration !== S && (S = d.duration, m = (0, a.elapsed)(t, d.startTime), !(c = (0, l.getInteractionSelector)(d.startTime)) && d.target && (0, r.isElementNode)(d.target) && (c = (0, s.getSelectorFromElement)(d.target, e.actionNameAttribute)))
                }
                var T = (0, i.createPerformanceObservable)(e, {
                        type: i.RumPerformanceEntryType.FIRST_INPUT,
                        buffered: !0
                    }).subscribe(y),
                    b = (0, i.createPerformanceObservable)(e, {
                        type: i.RumPerformanceEntryType.EVENT,
                        durationThreshold: 40,
                        buffered: !0
                    }).subscribe(y);
                return {
                    getInteractionToNextPaint: function() {
                        return S >= 0 ? {
                            value: Math.min(S, d),
                            targetSelector: c,
                            time: m
                        } : _() ? {
                            value: 0
                        } : void 0
                    },
                    setViewEnd: function(e) {
                        E = e, h()
                    },
                    stop: function() {
                        b.unsubscribe(), T.unsubscribe()
                    }
                }
            }

            function p(e) {
                (0, c.initInteractionCountPolyfill)();
                var t = "initial_load" === e ? 0 : (0, c.getInteractionCount)(),
                    n = {
                        stopped: !1
                    };

                function a() {
                    return (0, c.getInteractionCount)() - t
                }
                return {
                    getViewInteractionCount: function() {
                        return n.stopped ? n.interactionCount : a()
                    },
                    stopViewInteractionCount: function() {
                        n = {
                            stopped: !0,
                            interactionCount: a()
                        }
                    }
                }
            }

            function f() {
                return (0, i.supportPerformanceTimingEvent)(i.RumPerformanceEntryType.EVENT) && window.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionCount: () => c,
                initInteractionCountPolyfill: () => l
            });
            var a, o = n(101),
                i = 0,
                s = 1 / 0,
                r = 0;

            function l() {
                "interactionCount" in performance || a || (a = new window.PerformanceObserver((0, o.monitor)((function(e) {
                    e.getEntries().forEach((function(e) {
                        var t = e;
                        t.interactionId && (s = Math.min(s, t.interactionId), r = Math.max(r, t.interactionId), i = (r - s) / 7 + 1)
                    }))
                })))).observe({
                    type: "event",
                    buffered: !0,
                    durationThreshold: 0
                })
            }
            var c = function() {
                return a ? i : window.performance.interactionCount || 0
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackLoadingTime: () => s
            });
            var a = n(72),
                o = n(157),
                i = n(190);

            function s(e, t, n, s, r, l) {
                var c = "initial_load" === s,
                    u = !0,
                    d = [],
                    m = (0, i.trackFirstHidden)(n);

                function p() {
                    if (!u && !c && d.length > 0) {
                        var e = Math.max.apply(Math, d);
                        e < m.timeStamp && l(e)
                    }
                }
                var f = (0, o.waitPageActivityEnd)(e, t, n, (function(e) {
                    u && (u = !1, e.hadActivity && d.push((0, a.elapsed)(r.timeStamp, e.end)), p())
                })).stop;
                return {
                    stop: function() {
                        f(), m.stop()
                    },
                    setLoadEvent: function(e) {
                        c && (c = !1, d.push(e), p())
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                THROTTLE_SCROLL_DURATION: () => u,
                computeScrollValues: () => m,
                createScrollValuesObservable: () => p,
                trackScrollMetrics: () => d
            });
            var a = n(72),
                o = n(87),
                i = n(102),
                s = n(101),
                r = n(112),
                l = n(197),
                c = n(198),
                u = a.ONE_SECOND;

            function d(e, t, n, o) {
                void 0 === o && (o = p(e));
                var i = 0,
                    s = 0,
                    r = 0,
                    l = o.subscribe((function(e) {
                        var o = e.scrollDepth,
                            l = e.scrollTop,
                            c = e.scrollHeight,
                            u = !1;
                        if (o > i && (i = o, u = !0), c > s) {
                            s = c;
                            var d = (0, a.relativeNow)();
                            r = (0, a.elapsed)(t.relative, d), u = !0
                        }
                        u && n({
                            maxDepth: Math.min(i, s),
                            maxDepthScrollTop: l,
                            maxScrollHeight: s,
                            maxScrollHeightTime: r
                        })
                    }));
                return {
                    stop: function() {
                        return l.unsubscribe()
                    }
                }
            }

            function m() {
                var e = (0, l.getScrollY)(),
                    t = (0, c.getViewportDimension)().height;
                return {
                    scrollHeight: Math.round((document.scrollingElement || document.documentElement).scrollHeight),
                    scrollDepth: Math.round(t + e),
                    scrollTop: e
                }
            }

            function p(e, t) {
                return void 0 === t && (t = u), new o.Observable((function(n) {
                    if (window.ResizeObserver) {
                        var a = (0, i.throttle)((function() {
                                n.notify(m())
                            }), t, {
                                leading: !1,
                                trailing: !0
                            }),
                            o = document.scrollingElement || document.documentElement,
                            l = new ResizeObserver((0, s.monitor)(a.throttled));
                        l.observe(o);
                        var c = (0, r.addEventListener)(e, window, "scroll", a.throttled, {
                            passive: !0
                        });
                        return function() {
                            a.cancel(), l.unobserve(o), c.stop()
                        }
                    }
                }))
            }
        }, (e, t, n) => {
            "use strict";

            function a() {
                var e, t = window.visualViewport;
                return e = t ? t.pageLeft - t.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0, Math.round(e)
            }

            function o() {
                var e, t = window.visualViewport;
                return e = t ? t.pageTop - t.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0, Math.round(e)
            }
            n.r(t), n.d(t, {
                getScrollX: () => a,
                getScrollY: () => o
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createViewportObservable: () => l,
                getViewportDimension: () => c,
                initViewportObservable: () => r
            });
            var a, o = n(87),
                i = n(102),
                s = n(112);

            function r(e) {
                return a || (a = l(e)), a
            }

            function l(e) {
                return new o.Observable((function(t) {
                    var n = (0, i.throttle)((function() {
                        t.notify(c())
                    }), 200).throttled;
                    return (0, s.addEventListener)(e, window, "resize", n, {
                        capture: !0,
                        passive: !0
                    }).stop
                }))
            }

            function c() {
                var e = window.visualViewport;
                return e ? {
                    width: Number(e.width * e.scale),
                    height: Number(e.height * e.scale)
                } : {
                    width: Number(window.innerWidth || 0),
                    height: Number(window.innerHeight || 0)
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                PageExitReason: () => s,
                createPageExitObservable: () => r,
                isPageExitReason: () => l
            });
            var a = n(87),
                o = n(82),
                i = n(112),
                s = {
                    HIDDEN: "visibility_hidden",
                    UNLOADING: "before_unload",
                    PAGEHIDE: "page_hide",
                    FROZEN: "page_frozen"
                };

            function r(e) {
                return new a.Observable((function(t) {
                    var n = (0, i.addEventListeners)(e, window, ["visibilitychange", "freeze"], (function(e) {
                            "visibilitychange" === e.type && "hidden" === document.visibilityState ? t.notify({
                                reason: s.HIDDEN
                            }) : "freeze" === e.type && t.notify({
                                reason: s.FROZEN
                            })
                        }), {
                            capture: !0
                        }).stop,
                        a = (0, i.addEventListener)(e, window, "beforeunload", (function() {
                            t.notify({
                                reason: s.UNLOADING
                            })
                        })).stop;
                    return function() {
                        n(), a()
                    }
                }))
            }

            function l(e) {
                return (0, o.includes)((0, o.objectValues)(s), e)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                RUM_SESSION_KEY: () => l,
                startRumSessionManager: () => c,
                startRumSessionManagerStub: () => u
            });
            var a = n(201),
                o = n(116),
                i = n(102),
                s = n(87),
                r = n(73),
                l = "rum";

            function c(e, t, n) {
                var o = (0, a.startSessionManager)(e, l, (function(t) {
                    return function(e, t) {
                        var n;
                        n = function(e) {
                            return "0" === e || "1" === e || "2" === e
                        }(t) ? t : (0, r.performDraw)(e.sessionSampleRate) ? (0, r.performDraw)(e.sessionReplaySampleRate) ? "1" : "2" : "0";
                        return {
                            trackingType: n,
                            isTracked: d(n)
                        }
                    }(e, t)
                }), n);
                return o.expireObservable.subscribe((function() {
                    t.notify(8)
                })), o.renewObservable.subscribe((function() {
                    t.notify(9)
                })), o.sessionStateUpdateObservable.subscribe((function(e) {
                    var t = e.previousState,
                        n = e.newState;
                    if (!t.forcedReplay && n.forcedReplay) {
                        var a = o.findSession();
                        a && (a.isReplayForced = !0)
                    }
                })), {
                    findTrackedSession: function(e) {
                        var t = o.findSession(e);
                        if (t && d(t.trackingType)) return {
                            id: t.id,
                            sessionReplay: "1" === t.trackingType ? 1 : t.isReplayForced ? 2 : 0
                        }
                    },
                    expire: o.expire,
                    expireObservable: o.expireObservable,
                    setForcedReplay: function() {
                        return o.updateSessionState({
                            forcedReplay: "1"
                        })
                    }
                }
            }

            function u() {
                var e = {
                    id: "00000000-aaaa-0000-aaaa-000000000000",
                    sessionReplay: (0, o.bridgeSupports)("records") ? 1 : 0
                };
                return {
                    findTrackedSession: function() {
                        return e
                    },
                    expire: i.noop,
                    expireObservable: new s.Observable,
                    setForcedReplay: i.noop
                }
            }

            function d(e) {
                return "2" === e || "1" === e
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                VISIBILITY_CHECK_DELAY: () => u,
                startSessionManager: () => p,
                stopSessionManager: () => f
            });
            var a = n(87),
                o = n(147),
                i = n(72),
                s = n(112),
                r = n(98),
                l = n(96),
                c = n(89),
                u = i.ONE_MINUTE,
                d = l.SESSION_TIME_OUT_DELAY,
                m = [];

            function p(e, t, n, l) {
                var p = new a.Observable,
                    f = new a.Observable,
                    g = (0, c.startSessionStore)(e.sessionStoreStrategyType, t, n);
                m.push((function() {
                    return g.stop()
                }));
                var _ = (0, o.createValueHistory)({
                    expireDelay: d
                });

                function h() {
                    return {
                        id: g.getSession().id,
                        trackingType: g.getSession()[t],
                        isReplayForced: !!g.getSession().forcedReplay
                    }
                }
                return m.push((function() {
                        return _.stop()
                    })), g.renewObservable.subscribe((function() {
                        _.add(h(), (0, i.relativeNow)()), p.notify()
                    })), g.expireObservable.subscribe((function() {
                        f.notify(), _.closeActive((0, i.relativeNow)())
                    })), g.expandOrRenewSession(), _.add(h(), (0, i.clocksOrigin)().relative), l.observable.subscribe((function() {
                        l.isGranted() ? g.expandOrRenewSession() : g.expire()
                    })),
                    function(e, t) {
                        var n = (0, s.addEventListeners)(e, window, ["click", "touchstart", "keydown", "scroll"], t, {
                            capture: !0,
                            passive: !0
                        }).stop;
                        m.push(n)
                    }(e, (function() {
                        l.isGranted() && g.expandOrRenewSession()
                    })),
                    function(e, t) {
                        var n = function() {
                                "visible" === document.visibilityState && t()
                            },
                            a = (0, s.addEventListener)(e, document, "visibilitychange", n).stop;
                        m.push(a);
                        var o = (0, r.setInterval)(n, u);
                        m.push((function() {
                            (0, r.clearInterval)(o)
                        }))
                    }(e, (function() {
                        return g.expandSession()
                    })),
                    function(e, t) {
                        var n = (0, s.addEventListener)(e, window, "resume", t, {
                            capture: !0
                        }).stop;
                        m.push(n)
                    }(e, (function() {
                        return g.restartSession()
                    })), {
                        findSession: function(e, t) {
                            return _.find(e, t)
                        },
                        renewObservable: p,
                        expireObservable: f,
                        sessionStateUpdateObservable: g.sessionStateUpdateObservable,
                        expire: g.expire,
                        updateSessionState: g.updateSessionState
                    }
            }

            function f() {
                m.forEach((function(e) {
                    return e()
                })), m = []
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startRumBatch: () => s
            });
            var a = n(203),
                o = n(74),
                i = n(117);

            function s(e, t, n, s, r, l, c) {
                var u = e.replica,
                    d = (0, a.startBatchWithReplica)(e, {
                        endpoint: e.rumEndpointBuilder,
                        encoder: c(2)
                    }, u && {
                        endpoint: u.rumEndpointBuilder,
                        transformMessage: function(e) {
                            return (0, o.combine)(e, {
                                application: {
                                    id: u.applicationId
                                }
                            })
                        },
                        encoder: c(3)
                    }, s, r, l);
                return t.subscribe(12, (function(e) {
                    "view" === e.type ? d.upsert(e, e.view.id) : d.add(e)
                })), n.subscribe((function(t) {
                    return d.add(t, (0, i.isTelemetryReplicationAllowed)(e))
                })), d
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startBatchWithReplica: () => s
            });
            var a = n(204),
                o = n(205),
                i = n(207);

            function s(e, t, n, s, r, l, c) {
                void 0 === c && (c = a.createBatch);
                var u = m(e, t),
                    d = n && m(e, n);

                function m(e, t) {
                    var n = t.endpoint,
                        a = t.encoder;
                    return c({
                        encoder: a,
                        request: (0, o.createHttpRequest)(n, e.batchBytesLimit, s),
                        flushController: (0, i.createFlushController)({
                            messagesLimit: e.batchMessagesLimit,
                            bytesLimit: e.batchBytesLimit,
                            durationLimit: e.flushTimeout,
                            pageExitObservable: r,
                            sessionExpireObservable: l
                        }),
                        messageBytesLimit: e.messageBytesLimit
                    })
                }
                return {
                    flushObservable: u.flushController.flushObservable,
                    add: function(e, t) {
                        void 0 === t && (t = !0), u.add(e), d && t && d.add(n.transformMessage ? n.transformMessage(e) : e)
                    },
                    upsert: function(e, t) {
                        u.upsert(e, t), d && d.upsert(n.transformMessage ? n.transformMessage(e) : e, t)
                    },
                    stop: function() {
                        u.stop(), d && d.stop()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createBatch: () => l
            });
            var a = n(83),
                o = n(82),
                i = n(199),
                s = n(110),
                r = n(104);

            function l(e) {
                var t = e.encoder,
                    n = e.request,
                    l = e.flushController,
                    u = e.messageBytesLimit,
                    d = {},
                    m = l.flushObservable.subscribe((function(e) {
                        return function(e) {
                            var a = (0, o.objectValues)(d).join("\n");
                            d = {};
                            var s = (0, i.isPageExitReason)(e.reason),
                                l = s ? n.sendOnExit : n.send;
                            if (s && t.isAsync) {
                                var u = t.finishSync();
                                u.outputBytesCount && l(c(u));
                                var m = [u.pendingData, a].filter(Boolean).join("\n");
                                m && l({
                                    data: m,
                                    bytesCount: (0, r.computeBytesCount)(m)
                                })
                            } else a && t.write(t.isEmpty ? a : "\n".concat(a)), t.finish((function(e) {
                                l(c(e))
                            }))
                        }(e)
                    }));

                function p(e, n) {
                    var o = (0, s.jsonStringify)(e),
                        i = t.estimateEncodedBytesCount(o);
                    i >= u ? a.display.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(u, "KB. ").concat(a.MORE_DETAILS, " ").concat(a.DOCS_TROUBLESHOOTING, "/#technical-limitations")) : (function(e) {
                        return void 0 !== e && void 0 !== d[e]
                    }(n) && function(e) {
                        var n = d[e];
                        delete d[e];
                        var a = t.estimateEncodedBytesCount(n);
                        l.notifyAfterRemoveMessage(a)
                    }(n), function(e, n, a) {
                        l.notifyBeforeAddMessage(n), void 0 !== a ? (d[a] = e, l.notifyAfterAddMessage()) : t.write(t.isEmpty ? e : "\n".concat(e), (function(e) {
                            l.notifyAfterAddMessage(e - n)
                        }))
                    }(o, i, n))
                }
                return {
                    flushController: l,
                    add: p,
                    upsert: p,
                    stop: m.unsubscribe
                }
            }

            function c(e) {
                return {
                    data: "string" == typeof e.output ? e.output : new Blob([e.output], {
                        type: "text/plain"
                    }),
                    bytesCount: e.outputBytesCount,
                    encoding: e.encoding
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createHttpRequest: () => r,
                fetchKeepAliveStrategy: () => c,
                sendXHR: () => u
            });
            var a = n(117),
                o = n(101),
                i = n(112),
                s = n(206);

            function r(e, t, n) {
                var o = (0, s.newRetryState)(),
                    i = function(n, a) {
                        return c(e, t, n, a)
                    };
                return {
                    send: function(t) {
                        (0, s.sendWithRetryStrategy)(t, o, i, e.trackType, n)
                    },
                    sendOnExit: function(n) {
                        ! function(e, t, n) {
                            var o = !!navigator.sendBeacon && n.bytesCount < t;
                            if (o) try {
                                var i = e.build("beacon", n);
                                if (navigator.sendBeacon(i, n.data)) return
                            } catch (e) {
                                ! function(e) {
                                    l || (l = !0, (0, a.addTelemetryError)(e))
                                }(e)
                            }
                            var s = e.build("xhr", n);
                            u(s, n.data)
                        }(e, t, n)
                    }
                }
            }
            var l = !1;

            function c(e, t, n, a) {
                if (function() {
                        try {
                            return window.Request && "keepalive" in new Request("http://a")
                        } catch (e) {
                            return !1
                        }
                    }() && n.bytesCount < t) {
                    var i = e.build("fetch", n);
                    fetch(i, {
                        method: "POST",
                        body: n.data,
                        keepalive: !0,
                        mode: "cors"
                    }).then((0, o.monitor)((function(e) {
                        return null == a ? void 0 : a({
                            status: e.status,
                            type: e.type
                        })
                    })), (0, o.monitor)((function() {
                        u(e.build("xhr", n), n.data, a)
                    })))
                } else {
                    u(e.build("xhr", n), n.data, a)
                }
            }

            function u(e, t, n) {
                var a = new XMLHttpRequest;
                a.open("POST", e, !0), t instanceof Blob && a.setRequestHeader("Content-Type", t.type), (0, i.addEventListener)({
                    allowUntrustedEvents: !0
                }, a, "loadend", (function() {
                    null == n || n({
                        status: a.status
                    })
                }), {
                    once: !0
                }), a.send(t)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                INITIAL_BACKOFF_TIME: () => m,
                MAX_BACKOFF_TIME: () => d,
                MAX_ONGOING_BYTES_COUNT: () => l,
                MAX_ONGOING_REQUESTS: () => c,
                MAX_QUEUE_BYTES_COUNT: () => u,
                newRetryState: () => h,
                sendWithRetryStrategy: () => p
            });
            var a = n(98),
                o = n(72),
                i = n(104),
                s = n(151),
                r = n(142),
                l = 80 * i.ONE_KIBI_BYTE,
                c = 32,
                u = 3 * i.ONE_MEBI_BYTE,
                d = o.ONE_MINUTE,
                m = o.ONE_SECOND;

            function p(e, t, n, a, o) {
                0 === t.transportStatus && 0 === t.queuedPayloads.size() && t.bandwidthMonitor.canHandle(e) ? g(e, t, n, {
                    onSuccess: function() {
                        return _(0, t, n, a, o)
                    },
                    onFailure: function() {
                        t.queuedPayloads.enqueue(e), f(t, n, a, o)
                    }
                }) : t.queuedPayloads.enqueue(e)
            }

            function f(e, t, n, o) {
                2 === e.transportStatus && (0, a.setTimeout)((function() {
                    g(e.queuedPayloads.first(), e, t, {
                        onSuccess: function() {
                            e.queuedPayloads.dequeue(), e.currentBackoffTime = m, _(1, e, t, n, o)
                        },
                        onFailure: function() {
                            e.currentBackoffTime = Math.min(d, 2 * e.currentBackoffTime), f(e, t, n, o)
                        }
                    })
                }), e.currentBackoffTime)
            }

            function g(e, t, n, a) {
                var o = a.onSuccess,
                    i = a.onFailure;
                t.bandwidthMonitor.add(e), n(e, (function(n) {
                    t.bandwidthMonitor.remove(e), ! function(e) {
                        return "opaque" !== e.type && (0 === e.status && !navigator.onLine || 408 === e.status || 429 === e.status || (0, s.isServerError)(e.status))
                    }(n) ? (t.transportStatus = 0, o()) : (t.transportStatus = t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.retry = {
                        count: e.retry ? e.retry.count + 1 : 1,
                        lastFailureStatus: n.status
                    }, i())
                }))
            }

            function _(e, t, n, a, s) {
                0 === e && t.queuedPayloads.isFull() && !t.queueFullReported && (s({
                    message: "Reached max ".concat(a, " events size queued for upload: ").concat(u / i.ONE_MEBI_BYTE, "MiB"),
                    source: r.ErrorSource.AGENT,
                    startClocks: (0, o.clocksNow)()
                }), t.queueFullReported = !0);
                var l = t.queuedPayloads;
                for (t.queuedPayloads = E(); l.size() > 0;) p(l.dequeue(), t, n, a, s)
            }

            function h() {
                return {
                    transportStatus: 0,
                    currentBackoffTime: m,
                    bandwidthMonitor: {
                        ongoingRequestCount: 0,
                        ongoingByteCount: 0,
                        canHandle: function(e) {
                            return 0 === this.ongoingRequestCount || this.ongoingByteCount + e.bytesCount <= l && this.ongoingRequestCount < c
                        },
                        add: function(e) {
                            this.ongoingRequestCount += 1, this.ongoingByteCount += e.bytesCount
                        },
                        remove: function(e) {
                            this.ongoingRequestCount -= 1, this.ongoingByteCount -= e.bytesCount
                        }
                    },
                    queuedPayloads: E(),
                    queueFullReported: !1
                }
            }

            function E() {
                var e = [];
                return {
                    bytesCount: 0,
                    enqueue: function(t) {
                        this.isFull() || (e.push(t), this.bytesCount += t.bytesCount)
                    },
                    first: function() {
                        return e[0]
                    },
                    dequeue: function() {
                        var t = e.shift();
                        return t && (this.bytesCount -= t.bytesCount), t
                    },
                    size: function() {
                        return e.length
                    },
                    isFull: function() {
                        return this.bytesCount >= u
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createFlushController: () => i
            });
            var a = n(87),
                o = n(98);

            function i(e) {
                var t, n = e.messagesLimit,
                    i = e.bytesLimit,
                    s = e.durationLimit,
                    r = e.pageExitObservable,
                    l = e.sessionExpireObservable,
                    c = r.subscribe((function(e) {
                        return f(e.reason)
                    })),
                    u = l.subscribe((function() {
                        return f("session_expire")
                    })),
                    d = new a.Observable((function() {
                        return function() {
                            c.unsubscribe(), u.unsubscribe()
                        }
                    })),
                    m = 0,
                    p = 0;

                function f(e) {
                    if (0 !== p) {
                        var t = p,
                            n = m;
                        p = 0, m = 0, g(), d.notify({
                            reason: e,
                            messagesCount: t,
                            bytesCount: n
                        })
                    }
                }

                function g() {
                    (0, o.clearTimeout)(t), t = void 0
                }
                return {
                    flushObservable: d,
                    get messagesCount() {
                        return p
                    },
                    notifyBeforeAddMessage: function(e) {
                        m + e >= i && f("bytes_limit"), p += 1, m += e, void 0 === t && (t = (0, o.setTimeout)((function() {
                            f("duration_limit")
                        }), s))
                    },
                    notifyAfterAddMessage: function(e) {
                        void 0 === e && (e = 0), m += e, p >= n ? f("messages_limit") : m >= i && f("bytes_limit")
                    },
                    notifyAfterRemoveMessage: function(e) {
                        m -= e, 0 === (p -= 1) && g()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startRumEventBridge: () => o
            });
            var a = n(116);

            function o(e) {
                var t = (0, a.getEventBridge)();
                e.subscribe(12, (function(e) {
                    t.send("rum", e)
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                URL_CONTEXT_TIME_OUT_DELAY: () => s,
                startUrlContexts: () => r
            });
            var a = n(96),
                o = n(147),
                i = n(72),
                s = a.SESSION_TIME_OUT_DELAY;

            function r(e, t, n) {
                var a, r = (0, o.createValueHistory)({
                    expireDelay: s
                });
                e.subscribe(1, (function(e) {
                    var t = e.startClocks,
                        o = n.href;
                    r.add(c({
                        url: o,
                        referrer: a || document.referrer
                    }), t.relative), a = o
                })), e.subscribe(5, (function(e) {
                    var t = e.endClocks;
                    r.closeActive(t.relative)
                }));
                var l = t.subscribe((function(e) {
                    var t = e.newLocation,
                        n = r.find();
                    if (n) {
                        var a = (0, i.relativeNow)();
                        r.closeActive(a), r.add(c({
                            url: t.href,
                            referrer: n.referrer
                        }), a)
                    }
                }));

                function c(e) {
                    return {
                        url: e.url,
                        referrer: e.referrer
                    }
                }
                return {
                    findUrl: function(e) {
                        return r.find(e)
                    },
                    stop: function() {
                        l.unsubscribe(), r.stop()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createLocationChangeObservable: () => r
            });
            var a = n(84),
                o = n(87),
                i = n(128),
                s = n(112);

            function r(e, t) {
                var n = (0, a.shallowClone)(t);
                return new o.Observable((function(o) {
                    var r = function(e, t) {
                            var n = (0, i.instrumentMethod)(l("pushState"), "pushState", (function(e) {
                                    (0, e.onPostCall)(t)
                                })).stop,
                                a = (0, i.instrumentMethod)(l("replaceState"), "replaceState", (function(e) {
                                    (0, e.onPostCall)(t)
                                })).stop,
                                o = (0, s.addEventListener)(e, window, "popstate", t).stop;
                            return {
                                stop: function() {
                                    n(), a(), o()
                                }
                            }
                        }(e, u).stop,
                        c = function(e, t) {
                            return (0, s.addEventListener)(e, window, "hashchange", t)
                        }(e, u).stop;

                    function u() {
                        if (n.href !== t.href) {
                            var e = (0, a.shallowClone)(t);
                            o.notify({
                                newLocation: e,
                                oldLocation: n
                            }), n = e
                        }
                    }
                    return function() {
                        r(), c()
                    }
                }))
            }

            function l(e) {
                return Object.prototype.hasOwnProperty.call(history, e) ? history : History.prototype
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                BYTES_COMPUTATION_THROTTLING_DELAY: () => s,
                FEATURE_FLAG_CONTEXT_TIME_OUT_DELAY: () => i,
                startFeatureFlagContexts: () => r
            });
            var a = n(96),
                o = n(147),
                i = a.SESSION_TIME_OUT_DELAY,
                s = 200;

            function r(e, t) {
                var n = (0, o.createValueHistory)({
                    expireDelay: i
                });
                return e.subscribe(1, (function(e) {
                    var a = e.startClocks;
                    n.add({}, a.relative), t.resetCustomerData()
                })), e.subscribe(5, (function(e) {
                    var t = e.endClocks;
                    n.closeActive(t.relative)
                })), {
                    findFeatureFlagEvaluations: function(e) {
                        return n.find(e)
                    },
                    addFeatureFlagEvaluation: function(e, a) {
                        var o = n.find();
                        o && (o[e] = a, t.updateCustomerData(o))
                    },
                    stop: function() {
                        return t.stop()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MEASURES_PERIOD_DURATION: () => d,
                startCustomerDataTelemetry: () => m
            });
            var a, o, i, s = n(72),
                r = n(73),
                l = n(82),
                c = n(98),
                u = n(117),
                d = 10 * s.ONE_SECOND;

            function m(e, t, n, s, u) {
                t.enabled && (0, r.performDraw)(e.customerDataTelemetrySampleRate) && (_(), h(), n.subscribe(12, (function(e) {
                    i = !0, f(o.globalContextBytes, s.getOrCreateTracker(2).getBytesCount()), f(o.userContextBytes, s.getOrCreateTracker(1).getBytesCount()), f(o.featureFlagBytes, (0, l.includes)(["view", "error"], e.type) ? s.getOrCreateTracker(0).getBytesCount() : 0)
                })), u.subscribe((function(e) {
                    var t = e.bytesCount,
                        n = e.messagesCount;
                    i && (a.batchCount += 1, f(a.batchBytesCount, t), f(a.batchMessagesCount, n), g(a.globalContextBytes, o.globalContextBytes), g(a.userContextBytes, o.userContextBytes), g(a.featureFlagBytes, o.featureFlagBytes), h())
                })), (0, c.setInterval)(p, d))
            }

            function p() {
                0 !== a.batchCount && ((0, u.addTelemetryDebug)("Customer data measures", a), _())
            }

            function f(e, t) {
                e.sum += t, e.min = Math.min(e.min, t), e.max = Math.max(e.max, t)
            }

            function g(e, t) {
                e.sum += t.sum, e.min = Math.min(e.min, t.min), e.max = Math.max(e.max, t.max)
            }

            function _() {
                a = {
                    batchCount: 0,
                    batchBytesCount: {
                        min: 1 / 0,
                        max: 0,
                        sum: 0
                    },
                    batchMessagesCount: {
                        min: 1 / 0,
                        max: 0,
                        sum: 0
                    },
                    globalContextBytes: {
                        min: 1 / 0,
                        max: 0,
                        sum: 0
                    },
                    userContextBytes: {
                        min: 1 / 0,
                        max: 0,
                        sum: 0
                    },
                    featureFlagBytes: {
                        min: 1 / 0,
                        max: 0,
                        sum: 0
                    }
                }
            }

            function h() {
                i = !1, o = {
                    globalContextBytes: {
                        min: 1 / 0,
                        max: 0,
                        sum: 0
                    },
                    userContextBytes: {
                        min: 1 / 0,
                        max: 0,
                        sum: 0
                    },
                    featureFlagBytes: {
                        min: 1 / 0,
                        max: 0,
                        sum: 0
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MAX_PAGE_STATE_ENTRIES: () => r,
                MAX_PAGE_STATE_ENTRIES_SELECTABLE: () => l,
                PAGE_STATE_CONTEXT_TIME_OUT_DELAY: () => c,
                startPageStateHistory: () => u
            });
            var a = n(96),
                o = n(147),
                i = n(72),
                s = n(112),
                r = 4e3,
                l = 500,
                c = a.SESSION_TIME_OUT_DELAY;

            function u(e, t) {
                void 0 === t && (t = l);
                var n, a = (0, o.createValueHistory)({
                    expireDelay: c,
                    maxEntries: r
                });
                m(d(), (0, i.relativeNow)());
                var u = (0, s.addEventListeners)(e, window, ["pageshow", "focus", "blur", "visibilitychange", "resume", "freeze", "pagehide"], (function(e) {
                    m(function(e) {
                        if ("freeze" === e.type) return "frozen";
                        if ("pagehide" === e.type) return e.persisted ? "frozen" : "terminated";
                        return d()
                    }(e), e.timeStamp)
                }), {
                    capture: !0
                }).stop;

                function m(e, t) {
                    void 0 === t && (t = (0, i.relativeNow)()), e !== n && (n = e, a.closeActive(t), a.add({
                        state: n,
                        startTime: t
                    }, t))
                }
                var p = {
                    findAll: function(e, n) {
                        var o = a.findAll(e, n);
                        if (0 !== o.length) {
                            for (var s = [], r = Math.max(0, o.length - t), l = o.length - 1; l >= r; l--) {
                                var c = o[l],
                                    u = (0, i.elapsed)(e, c.startTime);
                                s.push({
                                    state: c.state,
                                    start: (0, i.toServerDuration)(u)
                                })
                            }
                            return s
                        }
                    },
                    wasInPageStateAt: function(e, t) {
                        return p.wasInPageStateDuringPeriod(e, t, 0)
                    },
                    wasInPageStateDuringPeriod: function(e, t, n) {
                        return a.findAll(t, n).some((function(t) {
                            return t.state === e
                        }))
                    },
                    addPageState: m,
                    stop: function() {
                        u(), a.stop()
                    }
                };
                return p
            }

            function d() {
                return "hidden" === document.visibilityState ? "hidden" : document.hasFocus() ? "active" : "passive"
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startDisplayContext: () => o
            });
            var a = n(198);

            function o(e) {
                var t = (0, a.getViewportDimension)();
                return {
                    get: function() {
                        return {
                            viewport: t
                        }
                    },
                    stop: (0, a.initViewportObservable)(e).subscribe((function(e) {
                        t = e
                    })).unsubscribe
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                CI_VISIBILITY_TEST_ID_COOKIE_NAME: () => i,
                startCiVisibilityContext: () => s
            });
            var a = n(91),
                o = n(216),
                i = "datadog-ci-visibility-test-execution-id";

            function s(e, t) {
                var n;
                void 0 === t && (t = (0, o.createCookieObservable)(e, i));
                var s = (0, a.getInitCookie)(i) || (null === (n = window.Cypress) || void 0 === n ? void 0 : n.env("traceId")),
                    r = t.subscribe((function(e) {
                        s = e
                    }));
                return {
                    get: function() {
                        if ("string" == typeof s) return {
                            test_execution_id: s
                        }
                    },
                    stop: function() {
                        return r.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                WATCH_COOKIE_INTERVAL_DELAY: () => u,
                createCookieObservable: () => c
            });
            var a = n(87),
                o = n(112),
                i = n(82),
                s = n(72),
                r = n(76),
                l = n(98);

            function c(e, t) {
                var n = window.cookieStore ? function(e) {
                    return function(t, n) {
                        return (0, o.addEventListener)(e, window.cookieStore, "change", (function(e) {
                            var a = (0, i.find)(e.changed, (function(e) {
                                return e.name === t
                            })) || (0, i.find)(e.deleted, (function(e) {
                                return e.name === t
                            }));
                            a && n(a.value)
                        })).stop
                    }
                }(e) : d;
                return new a.Observable((function(e) {
                    return n(t, (function(t) {
                        return e.notify(t)
                    }))
                }))
            }
            var u = s.ONE_SECOND;

            function d(e, t) {
                var n = (0, r.findCommaSeparatedValue)(document.cookie, e),
                    a = (0, l.setInterval)((function() {
                        var a = (0, r.findCommaSeparatedValue)(document.cookie, e);
                        a !== n && t(a)
                    }), u);
                return function() {
                    (0, l.clearInterval)(a)
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startLongAnimationFrameCollection: () => s
            });
            var a = n(72),
                o = n(76),
                i = n(158);

            function s(e, t) {
                var n = (0, i.createPerformanceObservable)(t, {
                    type: i.RumPerformanceEntryType.LONG_ANIMATION_FRAME,
                    buffered: !0
                }).subscribe((function(t) {
                    for (var n = 0, i = t; n < i.length; n++) {
                        var s = i[n],
                            r = (0, a.relativeToClocks)(s.startTime),
                            l = {
                                date: r.timeStamp,
                                long_task: {
                                    id: (0, o.generateUUID)(),
                                    entry_type: "long-animation-frame",
                                    duration: (0, a.toServerDuration)(s.duration),
                                    blocking_duration: (0, a.toServerDuration)(s.blockingDuration),
                                    first_ui_event_timestamp: (0, a.toServerDuration)(s.firstUIEventTimestamp),
                                    render_start: (0, a.toServerDuration)(s.renderStart),
                                    style_and_layout_start: (0, a.toServerDuration)(s.styleAndLayoutStart),
                                    start_time: (0, a.toServerDuration)(s.startTime),
                                    scripts: s.scripts.map((function(e) {
                                        return {
                                            duration: (0, a.toServerDuration)(e.duration),
                                            pause_duration: (0, a.toServerDuration)(e.pauseDuration),
                                            forced_style_and_layout_duration: (0, a.toServerDuration)(e.forcedStyleAndLayoutDuration),
                                            start_time: (0, a.toServerDuration)(e.startTime),
                                            execution_start: (0, a.toServerDuration)(e.executionStart),
                                            source_url: e.sourceURL,
                                            source_function_name: e.sourceFunctionName,
                                            source_char_position: e.sourceCharPosition,
                                            invoker: e.invoker,
                                            invoker_type: e.invokerType,
                                            window_attribution: e.windowAttribution
                                        }
                                    }))
                                },
                                type: "long_task",
                                _dd: {
                                    discarded: !1
                                }
                            };
                        e.notify(11, {
                            rawRumEvent: l,
                            startTime: r.relative,
                            domainContext: {
                                performanceEntry: s
                            }
                        })
                    }
                }));
                return {
                    stop: function() {
                        return n.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getDatadogSiteUrl: () => i,
                getSessionReplayUrl: () => o
            });
            var a = n(106);

            function o(e, t) {
                var n = t.session,
                    a = t.viewContext,
                    o = t.errorType,
                    s = n ? n.id : "no-session-id",
                    r = [];
                void 0 !== o && r.push("error-type=".concat(o)), a && (r.push("seed=".concat(a.id)), r.push("from=".concat(a.startClocks.timeStamp)));
                var l = i(e),
                    c = "/rum/replay/sessions/".concat(s);
                return "".concat(l).concat(c, "?").concat(r.join("&"))
            }

            function i(e) {
                var t = e.site,
                    n = e.subdomain || function(e) {
                        switch (e.site) {
                            case a.INTAKE_SITE_US1:
                            case a.INTAKE_SITE_EU1:
                                return "app";
                            case a.INTAKE_SITE_STAGING:
                                return "dd";
                            default:
                                return
                        }
                    }(e);
                return "https://".concat(n ? "".concat(n, ".") : "").concat(t)
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startRecording: () => c
            });
            var a = n(117),
                o = n(205),
                i = n(116),
                s = n(220),
                r = n(253),
                l = n(257);

            function c(e, t, n, c, u, d) {
                var m, p = [],
                    f = d || (0, o.createHttpRequest)(t.sessionReplayEndpointBuilder, r.SEGMENT_BYTES_LIMIT, (function(t) {
                        e.notify(13, {
                            error: t
                        }), (0, a.addTelemetryDebug)("Error reported to customer", {
                            "error.message": t.message
                        })
                    }));
                if ((0, i.canUseEventBridge)()) m = (0, l.startRecordBridge)(c).addRecord;
                else {
                    var g = (0, r.startSegmentCollection)(e, t, n, c, f, u);
                    m = g.addRecord, p.push(g.stop)
                }
                var _ = (0, s.record)({
                    emit: m,
                    configuration: t,
                    lifeCycle: e,
                    viewHistory: c
                }).stop;
                return p.push(_), {
                    stop: function() {
                        p.forEach((function(e) {
                            return e()
                        }))
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createElementsScrollPositions: () => i.createElementsScrollPositions,
                record: () => a.record,
                serializeDocument: () => o.serializeDocument,
                serializeNodeWithId: () => o.serializeNodeWithId
            });
            var a = n(221),
                o = n(225),
                i = n(249)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                record: () => u
            });
            var a = n(119),
                o = n(222),
                i = n(223),
                s = n(249),
                r = n(250),
                l = n(251),
                c = n(252);

            function u(e) {
                var t = e.emit,
                    n = e.configuration,
                    u = e.lifeCycle;
                if (!t) throw new Error("emit function is required");
                var d = function(n) {
                        t(n), (0, a.sendToExtension)("record", {
                            record: n
                        });
                        var i = e.viewHistory.findView();
                        o.addRecord(i.id)
                    },
                    m = (0, s.createElementsScrollPositions)(),
                    p = (0, r.initShadowRootsController)(n, d, m),
                    f = (0, l.startFullSnapshots)(m, p, u, n, g, (function(e) {
                        return e.forEach((function(e) {
                            return d(e)
                        }))
                    })).stop;

                function g() {
                    p.flush(), h.flush()
                }
                var _ = (0, c.initRecordIds)(),
                    h = (0, i.trackMutation)(d, n, p, document),
                    E = [h, (0, i.trackMove)(n, d), (0, i.trackMouseInteraction)(n, d, _), (0, i.trackScroll)(n, d, m, document), (0, i.trackViewportResize)(n, d), (0, i.trackInput)(n, d), (0, i.trackMediaInteraction)(n, d), (0, i.trackStyleSheet)(d), (0, i.trackFocus)(n, d), (0, i.trackVisualViewportResize)(n, d), (0, i.trackFrustration)(u, d, _), (0, i.trackViewEnd)(u, (function(e) {
                        g(), d(e)
                    }))];
                return {
                    stop: function() {
                        p.stop(), E.forEach((function(e) {
                            return e.stop()
                        })), f()
                    },
                    flushMutations: g,
                    shadowRootsController: p
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MAX_STATS_HISTORY: () => o,
                addRecord: () => r,
                addSegment: () => s,
                addWroteData: () => l,
                getReplayStats: () => c,
                getSegmentsCount: () => i,
                resetReplayStats: () => u
            });
            var a, o = 10;

            function i(e) {
                return d(e).segments_count
            }

            function s(e) {
                d(e).segments_count += 1
            }

            function r(e) {
                d(e).records_count += 1
            }

            function l(e, t) {
                d(e).segments_total_raw_size += t
            }

            function c(e) {
                return null == a ? void 0 : a.get(e)
            }

            function u() {
                a = void 0
            }

            function d(e) {
                var t;
                return a || (a = new Map), a.has(e) ? t = a.get(e) : (t = {
                    records_count: 0,
                    segments_count: 0,
                    segments_total_raw_size: 0
                }, a.set(e, t), a.size > o && function() {
                    if (!a) return;
                    if (a.keys) {
                        var e = a.keys().next().value;
                        e && a.delete(e)
                    } else {
                        var t = !0;
                        a.forEach((function(e, n) {
                            t && (a.delete(n), t = !1)
                        }))
                    }
                }()), t
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackFocus: () => c.trackFocus,
                trackFrustration: () => u.trackFrustration,
                trackInput: () => m.trackInput,
                trackMediaInteraction: () => r.trackMediaInteraction,
                trackMouseInteraction: () => o.trackMouseInteraction,
                trackMove: () => a.trackMove,
                trackMutation: () => p.trackMutation,
                trackScroll: () => i.trackScroll,
                trackStyleSheet: () => l.trackStyleSheet,
                trackViewEnd: () => d.trackViewEnd,
                trackViewportResize: () => s.trackViewportResize,
                trackVisualViewportResize: () => s.trackVisualViewportResize
            });
            var a = n(224),
                o = n(238),
                i = n(239),
                s = n(240),
                r = n(241),
                l = n(242),
                c = n(243),
                u = n(244),
                d = n(245),
                m = n(246),
                p = n(247)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackMove: () => m,
                tryToComputeCoordinates: () => p
            });
            var a = n(102),
                o = n(112),
                i = n(117),
                s = n(225),
                r = n(229),
                l = n(235),
                c = n(236),
                u = n(237),
                d = 50;

            function m(e, t) {
                var n = (0, a.throttle)((function(e) {
                        var n = (0, l.getEventTarget)(e);
                        if ((0, s.hasSerializedNode)(n)) {
                            var a = p(e);
                            if (!a) return;
                            var o = {
                                id: (0, s.getSerializedNodeId)(n),
                                timeOffset: 0,
                                x: a.x,
                                y: a.y
                            };
                            t((0, u.assembleIncrementalSnapshot)((0, l.isTouchEvent)(e) ? r.IncrementalSource.TouchMove : r.IncrementalSource.MouseMove, {
                                positions: [o]
                            }))
                        }
                    }), d, {
                        trailing: !1
                    }),
                    i = n.throttled,
                    c = n.cancel,
                    m = (0, o.addEventListeners)(e, document, ["mousemove", "touchmove"], i, {
                        capture: !0,
                        passive: !0
                    }).stop;
                return {
                    stop: function() {
                        m(), c()
                    }
                }
            }

            function p(e) {
                var t = (0, l.isTouchEvent)(e) ? e.changedTouches[0] : e,
                    n = t.clientX,
                    a = t.clientY;
                if (window.visualViewport) {
                    var o = (0, c.convertMouseEventToLayoutCoordinates)(n, a);
                    n = o.visualViewportX, a = o.visualViewportY
                }
                if (Number.isFinite(n) && Number.isFinite(a)) return {
                    x: n,
                    y: a
                };
                e.isTrusted && (0, i.addTelemetryDebug)("mouse/touch event without x/y")
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getElementInputValue: () => a.getElementInputValue,
                getSerializedNodeId: () => a.getSerializedNodeId,
                hasSerializedNode: () => a.hasSerializedNode,
                nodeAndAncestorsHaveSerializedNode: () => a.nodeAndAncestorsHaveSerializedNode,
                serializeAttribute: () => s.serializeAttribute,
                serializeDocument: () => o.serializeDocument,
                serializeNodeWithId: () => i.serializeNodeWithId
            });
            var a = n(226),
                o = n(227),
                i = n(228),
                s = n(234)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ABSOLUTE_URL: () => m,
                DATA_URI: () => p,
                URL_IN_CSS_REF: () => d,
                censoredImageForSize: () => E,
                getElementInputValue: () => u,
                getSerializedNodeId: () => l,
                getValidTagName: () => h,
                hasSerializedNode: () => s,
                makeUrlAbsolute: () => g,
                nodeAndAncestorsHaveSerializedNode: () => r,
                setSerializedNodeId: () => c,
                switchToAbsoluteUrl: () => f
            });
            var a = n(109),
                o = n(68),
                i = new WeakMap;

            function s(e) {
                return i.has(e)
            }

            function r(e) {
                for (var t = e; t;) {
                    if (!s(t) && !(0, o.isNodeShadowRoot)(t)) return !1;
                    t = (0, o.getParentNode)(t)
                }
                return !0
            }

            function l(e) {
                return i.get(e)
            }

            function c(e, t) {
                i.set(e, t)
            }

            function u(e, t) {
                var n = e.tagName,
                    a = e.value;
                if ((0, o.shouldMaskNode)(e, t)) {
                    var i = e.type;
                    if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i)) return a;
                    if (!a || "OPTION" === n) return;
                    return o.CENSORED_STRING_MARK
                }
                return "OPTION" === n || "SELECT" === n ? e.value : "INPUT" === n || "TEXTAREA" === n ? a : void 0
            }
            var d = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
                m = /^[A-Za-z]+:|^\/\//,
                p = /^data:.*,/i;

            function f(e, t) {
                return e.replace(d, (function(e, n, a, o, i, s) {
                    var r = a || i || s;
                    if (!t || !r || m.test(r) || p.test(r)) return e;
                    var l = n || o || "";
                    return "url(".concat(l).concat(g(r, t)).concat(l, ")")
                }))
            }

            function g(e, t) {
                try {
                    return (0, a.buildUrl)(e, t).href
                } catch (t) {
                    return e
                }
            }
            var _ = /[^a-z1-6-_]/;

            function h(e) {
                var t = e.toLowerCase().trim();
                return _.test(t) ? "div" : t
            }

            function E(e, t) {
                return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='".concat(e, "' height='").concat(t, "' style='background-color:silver'%3E%3C/svg%3E")
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                serializeDocument: () => o
            });
            var a = n(228);

            function o(e, t, n) {
                return (0, a.serializeNodeWithId)(e, {
                    serializationContext: n,
                    parentNodePrivacyLevel: t.defaultPrivacyLevel,
                    configuration: t
                })
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                generateNextId: () => d,
                serializeChildNodes: () => m,
                serializeDocumentNode: () => p,
                serializeNodeWithId: () => c
            });
            var a = n(68),
                o = n(82),
                i = n(229),
                s = n(226),
                r = n(232),
                l = n(233);

            function c(e, t) {
                var n = function(e, t) {
                    switch (e.nodeType) {
                        case e.DOCUMENT_NODE:
                            return p(e, t);
                        case e.DOCUMENT_FRAGMENT_NODE:
                            return function(e, t) {
                                var n = (0, a.isNodeShadowRoot)(e);
                                n && t.serializationContext.shadowRootsController.addShadowRoot(e);
                                return {
                                    type: i.NodeType.DocumentFragment,
                                    childNodes: m(e, t),
                                    isShadowRoot: n,
                                    adoptedStyleSheets: n ? (0, r.serializeStyleSheets)(e.adoptedStyleSheets) : void 0
                                }
                            }(e, t);
                        case e.DOCUMENT_TYPE_NODE:
                            return n = e, {
                                type: i.NodeType.DocumentType,
                                name: n.name,
                                publicId: n.publicId,
                                systemId: n.systemId
                            };
                        case e.ELEMENT_NODE:
                            return function(e, t) {
                                var n, r = (0, s.getValidTagName)(e.tagName),
                                    c = (d = e, "svg" === d.tagName || d instanceof SVGElement || void 0),
                                    u = (0, a.reducePrivacyLevel)((0, a.getNodeSelfPrivacyLevel)(e), t.parentNodePrivacyLevel);
                                var d;
                                if (u === a.NodePrivacyLevel.HIDDEN) {
                                    var p = e.getBoundingClientRect(),
                                        f = p.width,
                                        g = p.height;
                                    return {
                                        type: i.NodeType.Element,
                                        tagName: r,
                                        attributes: (n = {
                                            rr_width: "".concat(f, "px"),
                                            rr_height: "".concat(g, "px")
                                        }, n[a.PRIVACY_ATTR_NAME] = a.PRIVACY_ATTR_VALUE_HIDDEN, n),
                                        childNodes: [],
                                        isSVG: c
                                    }
                                }
                                if (u === a.NodePrivacyLevel.IGNORE) return;
                                var _ = (0, l.serializeAttributes)(e, u, t),
                                    h = [];
                                if ((0, a.hasChildNodes)(e) && "style" !== r) {
                                    h = m(e, t.parentNodePrivacyLevel === u && t.ignoreWhiteSpace === ("head" === r) ? t : (0, o.assign)({}, t, {
                                        parentNodePrivacyLevel: u,
                                        ignoreWhiteSpace: "head" === r
                                    }))
                                }
                                return {
                                    type: i.NodeType.Element,
                                    tagName: r,
                                    attributes: _,
                                    childNodes: h,
                                    isSVG: c
                                }
                            }(e, t);
                        case e.TEXT_NODE:
                            return function(e, t) {
                                var n = (0, a.getTextContent)(e, t.ignoreWhiteSpace || !1, t.parentNodePrivacyLevel);
                                if (void 0 === n) return;
                                return {
                                    type: i.NodeType.Text,
                                    textContent: n
                                }
                            }(e, t);
                        case e.CDATA_SECTION_NODE:
                            return {
                                type: i.NodeType.CDATA, textContent: ""
                            }
                    }
                    var n
                }(e, t);
                if (!n) return null;
                var c = (0, s.getSerializedNodeId)(e) || d(),
                    u = n;
                return u.id = c, (0, s.setSerializedNodeId)(e, c), t.serializedNodeIds && t.serializedNodeIds.add(c), u
            }
            var u = 1;

            function d() {
                return u++
            }

            function m(e, t) {
                var n = [];
                return (0, a.forEachChildNodes)(e, (function(e) {
                    var a = c(e, t);
                    a && n.push(a)
                })), n
            }

            function p(e, t) {
                return {
                    type: i.NodeType.Document,
                    childNodes: m(e, t),
                    adoptedStyleSheets: (0, r.serializeStyleSheets)(e.adoptedStyleSheets)
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                IncrementalSource: () => a.IncrementalSource,
                MediaInteractionType: () => a.MediaInteractionType,
                MouseInteractionType: () => a.MouseInteractionType,
                NodeType: () => a.NodeType,
                RecordType: () => a.RecordType
            });
            n(230);
            var a = n(231)
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                IncrementalSource: () => i,
                MediaInteractionType: () => r,
                MouseInteractionType: () => s,
                NodeType: () => o,
                RecordType: () => a
            });
            var a = {
                    FullSnapshot: 2,
                    IncrementalSnapshot: 3,
                    Meta: 4,
                    Focus: 6,
                    ViewEnd: 7,
                    VisualViewport: 8,
                    FrustrationRecord: 9
                },
                o = {
                    Document: 0,
                    DocumentType: 1,
                    Element: 2,
                    Text: 3,
                    CDATA: 4,
                    DocumentFragment: 11
                },
                i = {
                    Mutation: 0,
                    MouseMove: 1,
                    MouseInteraction: 2,
                    Scroll: 3,
                    ViewportResize: 4,
                    Input: 5,
                    TouchMove: 6,
                    MediaInteraction: 7,
                    StyleSheetRule: 8
                },
                s = {
                    MouseUp: 0,
                    MouseDown: 1,
                    Click: 2,
                    ContextMenu: 3,
                    DblClick: 4,
                    Focus: 5,
                    Blur: 6,
                    TouchStart: 7,
                    TouchEnd: 9
                },
                r = {
                    Play: 0,
                    Pause: 1
                }
        }, (e, t, n) => {
            "use strict";

            function a(e) {
                if (void 0 !== e && 0 !== e.length) return e.map((function(e) {
                    var t = e.cssRules || e.rules;
                    return {
                        cssRules: Array.from(t, (function(e) {
                            return e.cssText
                        })),
                        disabled: e.disabled || void 0,
                        media: e.media.length > 0 ? Array.from(e.media) : void 0
                    }
                }))
            }
            n.r(t), n.d(t, {
                serializeStyleSheets: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getCssRulesString: () => l,
                serializeAttributes: () => r
            });
            var a = n(68),
                o = n(92),
                i = n(226),
                s = n(234);

            function r(e, t, n) {
                var o;
                if (t === a.NodePrivacyLevel.HIDDEN) return {};
                for (var r = {}, c = (0, i.getValidTagName)(e.tagName), u = e.ownerDocument, d = 0; d < e.attributes.length; d += 1) {
                    var m = e.attributes.item(d).name,
                        p = (0, s.serializeAttribute)(e, t, m, n.configuration);
                    null !== p && (r[m] = p)
                }
                if (e.value && ("textarea" === c || "select" === c || "option" === c || "input" === c)) {
                    var f = (0, i.getElementInputValue)(e, t);
                    void 0 !== f && (r.value = f)
                }
                if ("option" === c && t === a.NodePrivacyLevel.ALLOW) {
                    var g = e;
                    g.selected && (r.selected = g.selected)
                }
                if ("link" === c) {
                    var _, h = Array.from(u.styleSheets).find((function(t) {
                        return t.href === e.href
                    }));
                    (_ = l(h)) && h && (r._cssText = _)
                }
                "style" === c && e.sheet && ((_ = l(e.sheet)) && (r._cssText = _));
                var E, v, S = e;
                if ("input" !== c || "radio" !== S.type && "checkbox" !== S.type || (t === a.NodePrivacyLevel.ALLOW ? r.checked = !!S.checked : (0, a.shouldMaskNode)(S, t) && delete r.checked), "audio" === c || "video" === c) {
                    var y = e;
                    r.rr_mediaState = y.paused ? "paused" : "played"
                }
                var T = n.serializationContext;
                switch (T.status) {
                    case 0:
                        E = Math.round(e.scrollTop), v = Math.round(e.scrollLeft), (E || v) && T.elementsScrollPositions.set(e, {
                            scrollTop: E,
                            scrollLeft: v
                        });
                        break;
                    case 1:
                        T.elementsScrollPositions.has(e) && (E = (o = T.elementsScrollPositions.get(e)).scrollTop, v = o.scrollLeft)
                }
                return v && (r.rr_scrollLeft = v), E && (r.rr_scrollTop = E), r
            }

            function l(e) {
                if (!e) return null;
                var t;
                try {
                    t = e.rules || e.cssRules
                } catch (e) {}
                if (!t) return null;
                var n = Array.from(t, (0, o.isSafari)() ? c : u).join("");
                return (0, i.switchToAbsoluteUrl)(n, e.href)
            }

            function c(e) {
                if (function(e) {
                        return "selectorText" in e
                    }(e) && e.selectorText.includes(":")) {
                    return e.cssText.replace(/(\[[\w-]+[^\\])(:[^\]]+\])/g, "$1\\$2")
                }
                return u(e)
            }

            function u(e) {
                return function(e) {
                    return "styleSheet" in e
                }(e) && l(e.styleSheet) || e.cssText
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                serializeAttribute: () => s
            });
            var a = n(82),
                o = n(68),
                i = n(226);

            function s(e, t, n, s) {
                if (t === o.NodePrivacyLevel.HIDDEN) return null;
                var r = e.getAttribute(n);
                if (t === o.NodePrivacyLevel.MASK && n !== o.PRIVACY_ATTR_NAME && !o.STABLE_ATTRIBUTES.includes(n) && n !== s.actionNameAttribute) {
                    var l = e.tagName;
                    switch (n) {
                        case "title":
                        case "alt":
                        case "placeholder":
                            return o.CENSORED_STRING_MARK
                    }
                    if ("IMG" === l && ("src" === n || "srcset" === n)) {
                        var c = e;
                        if (c.naturalWidth > 0) return (0, i.censoredImageForSize)(c.naturalWidth, c.naturalHeight);
                        var u = e.getBoundingClientRect(),
                            d = u.width,
                            m = u.height;
                        return d > 0 || m > 0 ? (0, i.censoredImageForSize)(d, m) : o.CENSORED_IMG_MARK
                    }
                    if ("SOURCE" === l && ("src" === n || "srcset" === n)) return o.CENSORED_IMG_MARK;
                    if ("A" === l && "href" === n) return o.CENSORED_STRING_MARK;
                    if (r && (0, a.startsWith)(n, "data-")) return o.CENSORED_STRING_MARK;
                    if ("IFRAME" === l && "srcdoc" === n) return o.CENSORED_STRING_MARK
                }
                return r && "string" == typeof r && (0, o.isLongDataUrl)(r) ? (0, o.sanitizeDataUrl)(r) : r
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getEventTarget: () => i,
                isTouchEvent: () => o
            });
            var a = n(68);

            function o(e) {
                return Boolean(e.changedTouches)
            }

            function i(e) {
                return !0 === e.composed && (0, a.isNodeShadowHost)(e.target) ? e.composedPath()[0] : e.target
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                convertMouseEventToLayoutCoordinates: () => a,
                getVisualViewport: () => o
            });
            var a = function(e, t) {
                    var n = window.visualViewport,
                        a = {
                            layoutViewportX: e,
                            layoutViewportY: t,
                            visualViewportX: e,
                            visualViewportY: t
                        };
                    return n ? (! function(e) {
                        return Math.abs(e.pageTop - e.offsetTop - window.scrollY) > 25 || Math.abs(e.pageLeft - e.offsetLeft - window.scrollX) > 25
                    }(n) ? (a.visualViewportX = Math.round(e - n.offsetLeft), a.visualViewportY = Math.round(t - n.offsetTop)) : (a.layoutViewportX = Math.round(e + n.offsetLeft), a.layoutViewportY = Math.round(t + n.offsetTop)), a) : a
                },
                o = function(e) {
                    return {
                        scale: e.scale,
                        offsetLeft: e.offsetLeft,
                        offsetTop: e.offsetTop,
                        pageLeft: e.pageLeft,
                        pageTop: e.pageTop,
                        height: e.height,
                        width: e.width
                    }
                }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                assembleIncrementalSnapshot: () => s
            });
            var a = n(82),
                o = n(72),
                i = n(229);

            function s(e, t) {
                return {
                    data: (0, a.assign)({
                        source: e
                    }, t),
                    type: i.RecordType.IncrementalSnapshot,
                    timestamp: (0, o.timeStampNow)()
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackMouseInteraction: () => p
            });
            var a, o = n(82),
                i = n(112),
                s = n(68),
                r = n(229),
                l = n(237),
                c = n(235),
                u = n(225),
                d = n(224),
                m = ((a = {}).pointerup = r.MouseInteractionType.MouseUp, a.mousedown = r.MouseInteractionType.MouseDown, a.click = r.MouseInteractionType.Click, a.contextmenu = r.MouseInteractionType.ContextMenu, a.dblclick = r.MouseInteractionType.DblClick, a.focus = r.MouseInteractionType.Focus, a.blur = r.MouseInteractionType.Blur, a.touchstart = r.MouseInteractionType.TouchStart, a.touchend = r.MouseInteractionType.TouchEnd, a);

            function p(e, t, n) {
                return (0, i.addEventListeners)(e, document, Object.keys(m), (function(a) {
                    var i = (0, c.getEventTarget)(a);
                    if ((0, s.getNodePrivacyLevel)(i, e.defaultPrivacyLevel) !== s.NodePrivacyLevel.HIDDEN && (0, u.hasSerializedNode)(i)) {
                        var p, f = (0, u.getSerializedNodeId)(i),
                            g = m[a.type];
                        if (g !== r.MouseInteractionType.Blur && g !== r.MouseInteractionType.Focus) {
                            var _ = (0, d.tryToComputeCoordinates)(a);
                            if (!_) return;
                            p = {
                                id: f,
                                type: g,
                                x: _.x,
                                y: _.y
                            }
                        } else p = {
                            id: f,
                            type: g
                        };
                        var h = (0, o.assign)({
                            id: n.getIdForEvent(a)
                        }, (0, l.assembleIncrementalSnapshot)(r.IncrementalSource.MouseInteraction, p));
                        t(h)
                    }
                }), {
                    capture: !0,
                    passive: !0
                })
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackScroll: () => d
            });
            var a = n(102),
                o = n(112),
                i = n(68),
                s = n(235),
                r = n(225),
                l = n(229),
                c = n(237),
                u = 100;

            function d(e, t, n, d) {
                void 0 === d && (d = document);
                var m = (0, a.throttle)((function(a) {
                        var o = (0, s.getEventTarget)(a);
                        if (o && (0, i.getNodePrivacyLevel)(o, e.defaultPrivacyLevel) !== i.NodePrivacyLevel.HIDDEN && (0, r.hasSerializedNode)(o)) {
                            var u = (0, r.getSerializedNodeId)(o),
                                d = o === document ? {
                                    scrollTop: (0, i.getScrollY)(),
                                    scrollLeft: (0, i.getScrollX)()
                                } : {
                                    scrollTop: Math.round(o.scrollTop),
                                    scrollLeft: Math.round(o.scrollLeft)
                                };
                            n.set(o, d), t((0, c.assembleIncrementalSnapshot)(l.IncrementalSource.Scroll, {
                                id: u,
                                x: d.scrollLeft,
                                y: d.scrollTop
                            }))
                        }
                    }), u),
                    p = m.throttled,
                    f = m.cancel,
                    g = (0, o.addEventListener)(e, d, "scroll", p, {
                        capture: !0,
                        passive: !0
                    }).stop;
                return {
                    stop: function() {
                        g(), f()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackViewportResize: () => d,
                trackVisualViewportResize: () => m
            });
            var a = n(102),
                o = n(72),
                i = n(112),
                s = n(68),
                r = n(229),
                l = n(236),
                c = n(237),
                u = 200;

            function d(e, t) {
                var n = (0, s.initViewportObservable)(e).subscribe((function(e) {
                    t((0, c.assembleIncrementalSnapshot)(r.IncrementalSource.ViewportResize, e))
                }));
                return {
                    stop: function() {
                        n.unsubscribe()
                    }
                }
            }

            function m(e, t) {
                var n = window.visualViewport;
                if (!n) return {
                    stop: a.noop
                };
                var s = (0, a.throttle)((function() {
                        t({
                            data: (0, l.getVisualViewport)(n),
                            type: r.RecordType.VisualViewport,
                            timestamp: (0, o.timeStampNow)()
                        })
                    }), u, {
                        trailing: !1
                    }),
                    c = s.throttled,
                    d = s.cancel,
                    m = (0, i.addEventListeners)(e, n, ["resize", "scroll"], c, {
                        capture: !0,
                        passive: !0
                    }).stop;
                return {
                    stop: function() {
                        m(), d()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackMediaInteraction: () => c
            });
            var a = n(112),
                o = n(68),
                i = n(229),
                s = n(235),
                r = n(225),
                l = n(237);

            function c(e, t) {
                return (0, a.addEventListeners)(e, document, ["play", "pause"], (function(n) {
                    var a = (0, s.getEventTarget)(n);
                    a && (0, o.getNodePrivacyLevel)(a, e.defaultPrivacyLevel) !== o.NodePrivacyLevel.HIDDEN && (0, r.hasSerializedNode)(a) && t((0, l.assembleIncrementalSnapshot)(i.IncrementalSource.MediaInteraction, {
                        id: (0, r.getSerializedNodeId)(a),
                        type: "play" === n.type ? i.MediaInteractionType.Play : i.MediaInteractionType.Pause
                    }))
                }), {
                    capture: !0,
                    passive: !0
                })
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getPathToNestedCSSRule: () => l,
                trackStyleSheet: () => r
            });
            var a = n(128),
                o = n(229),
                i = n(225),
                s = n(237);

            function r(e) {
                function t(e, t) {
                    e && (0, i.hasSerializedNode)(e.ownerNode) && t((0, i.getSerializedNodeId)(e.ownerNode))
                }
                var n = [(0, a.instrumentMethod)(CSSStyleSheet.prototype, "insertRule", (function(n) {
                    var a = n.target,
                        i = n.parameters,
                        r = i[0],
                        l = i[1];
                    t(a, (function(t) {
                        return e((0, s.assembleIncrementalSnapshot)(o.IncrementalSource.StyleSheetRule, {
                            id: t,
                            adds: [{
                                rule: r,
                                index: l
                            }]
                        }))
                    }))
                })), (0, a.instrumentMethod)(CSSStyleSheet.prototype, "deleteRule", (function(n) {
                    var a = n.target,
                        i = n.parameters[0];
                    t(a, (function(t) {
                        return e((0, s.assembleIncrementalSnapshot)(o.IncrementalSource.StyleSheetRule, {
                            id: t,
                            removes: [{
                                index: i
                            }]
                        }))
                    }))
                }))];

                function r(i) {
                    n.push((0, a.instrumentMethod)(i.prototype, "insertRule", (function(n) {
                        var a = n.target,
                            i = n.parameters,
                            r = i[0],
                            c = i[1];
                        t(a.parentStyleSheet, (function(t) {
                            var n = l(a);
                            n && (n.push(c || 0), e((0, s.assembleIncrementalSnapshot)(o.IncrementalSource.StyleSheetRule, {
                                id: t,
                                adds: [{
                                    rule: r,
                                    index: n
                                }]
                            })))
                        }))
                    })), (0, a.instrumentMethod)(i.prototype, "deleteRule", (function(n) {
                        var a = n.target,
                            i = n.parameters[0];
                        t(a.parentStyleSheet, (function(t) {
                            var n = l(a);
                            n && (n.push(i), e((0, s.assembleIncrementalSnapshot)(o.IncrementalSource.StyleSheetRule, {
                                id: t,
                                removes: [{
                                    index: n
                                }]
                            })))
                        }))
                    })))
                }
                return "undefined" != typeof CSSGroupingRule ? r(CSSGroupingRule) : (r(CSSMediaRule), r(CSSSupportsRule)), {
                    stop: function() {
                        n.forEach((function(e) {
                            return e.stop()
                        }))
                    }
                }
            }

            function l(e) {
                for (var t = [], n = e; n.parentRule;) {
                    var a = Array.from(n.parentRule.cssRules).indexOf(n);
                    t.unshift(a), n = n.parentRule
                }
                if (n.parentStyleSheet) {
                    var o = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
                    return t.unshift(o), t
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackFocus: () => s
            });
            var a = n(112),
                o = n(72),
                i = n(229);

            function s(e, t) {
                return (0, a.addEventListeners)(e, window, ["focus", "blur"], (function() {
                    t({
                        data: {
                            has_focus: document.hasFocus()
                        },
                        type: i.RecordType.Focus,
                        timestamp: (0, o.timeStampNow)()
                    })
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackFrustration: () => o
            });
            var a = n(229);

            function o(e, t, n) {
                var o = e.subscribe(11, (function(e) {
                    var o, i;
                    "action" === e.rawRumEvent.type && "click" === e.rawRumEvent.action.type && (null === (i = null === (o = e.rawRumEvent.action.frustration) || void 0 === o ? void 0 : o.type) || void 0 === i ? void 0 : i.length) && "events" in e.domainContext && e.domainContext.events && e.domainContext.events.length && t({
                        timestamp: e.rawRumEvent.date,
                        type: a.RecordType.FrustrationRecord,
                        data: {
                            frustrationTypes: e.rawRumEvent.action.frustration.type,
                            recordIds: e.domainContext.events.map((function(e) {
                                return n.getIdForEvent(e)
                            }))
                        }
                    })
                }));
                return {
                    stop: function() {
                        o.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackViewEnd: () => i
            });
            var a = n(72),
                o = n(229);

            function i(e, t) {
                var n = e.subscribe(4, (function() {
                    t({
                        timestamp: (0, a.timeStampNow)(),
                        type: o.RecordType.ViewEnd
                    })
                }));
                return {
                    stop: function() {
                        n.unsubscribe()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                trackInput: () => m
            });
            var a = n(112),
                o = n(128),
                i = n(102),
                s = n(82),
                r = n(68),
                l = n(229),
                c = n(235),
                u = n(225),
                d = n(237);

            function m(e, t, n) {
                void 0 === n && (n = document);
                var m, p = e.defaultPrivacyLevel,
                    f = new WeakMap,
                    g = n !== document,
                    _ = (0, a.addEventListeners)(e, n, g ? ["change"] : ["input", "change"], (function(e) {
                        var t = (0, c.getEventTarget)(e);
                        (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) && E(t)
                    }), {
                        capture: !0,
                        passive: !0
                    }).stop;
                if (g) m = i.noop;
                else {
                    var h = [(0, o.instrumentSetter)(HTMLInputElement.prototype, "value", E), (0, o.instrumentSetter)(HTMLInputElement.prototype, "checked", E), (0, o.instrumentSetter)(HTMLSelectElement.prototype, "value", E), (0, o.instrumentSetter)(HTMLTextAreaElement.prototype, "value", E), (0, o.instrumentSetter)(HTMLSelectElement.prototype, "selectedIndex", E)];
                    m = function() {
                        h.forEach((function(e) {
                            return e.stop()
                        }))
                    }
                }
                return {
                    stop: function() {
                        m(), _()
                    }
                };

                function E(e) {
                    var t = (0, r.getNodePrivacyLevel)(e, p);
                    if (t !== r.NodePrivacyLevel.HIDDEN) {
                        var n, a = e.type;
                        if ("radio" === a || "checkbox" === a) {
                            if ((0, r.shouldMaskNode)(e, t)) return;
                            n = {
                                isChecked: e.checked
                            }
                        } else {
                            var o = (0, u.getElementInputValue)(e, t);
                            if (void 0 === o) return;
                            n = {
                                text: o
                            }
                        }
                        v(e, n);
                        var i = e.name;
                        "radio" === a && i && e.checked && (0, s.forEach)(document.querySelectorAll('input[type="radio"][name="'.concat((0, r.cssEscape)(i), '"]')), (function(t) {
                            t !== e && v(t, {
                                isChecked: !1
                            })
                        }))
                    }
                }

                function v(e, n) {
                    if ((0, u.hasSerializedNode)(e)) {
                        var a = f.get(e);
                        a && a.text === n.text && a.isChecked === n.isChecked || (f.set(e, n), t((0, d.assembleIncrementalSnapshot)(l.IncrementalSource.Input, (0, s.assign)({
                            id: (0, u.getSerializedNodeId)(e)
                        }, n))))
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                sortAddedAndMovedNodes: () => d,
                trackMutation: () => u
            });
            var a = n(102),
                o = n(101),
                i = n(68),
                s = n(229),
                r = n(225),
                l = n(248),
                c = n(237);

            function u(e, t, n, u) {
                var p = (0, i.getMutationObserverConstructor)();
                if (!p) return {
                    stop: a.noop,
                    flush: a.noop
                };
                var f = (0, l.createMutationBatch)((function(a) {
                        ! function(e, t, n, a) {
                            var o = new Map;
                            e.filter((function(e) {
                                return "childList" === e.type
                            })).forEach((function(e) {
                                e.removedNodes.forEach((function(e) {
                                    m(e, a.removeShadowRoot)
                                }))
                            }));
                            var l = e.filter((function(e) {
                                    return e.target.isConnected && (0, r.nodeAndAncestorsHaveSerializedNode)(e.target) && (0, i.getNodePrivacyLevel)(e.target, n.defaultPrivacyLevel, o) !== i.NodePrivacyLevel.HIDDEN
                                })),
                                u = function(e, t, n, a) {
                                    for (var o = new Set, s = new Map, l = function(e) {
                                            e.addedNodes.forEach((function(e) {
                                                o.add(e)
                                            })), e.removedNodes.forEach((function(t) {
                                                o.has(t) || s.set(t, e.target), o.delete(t)
                                            }))
                                        }, c = 0, u = e; c < u.length; c++) {
                                        l(u[c])
                                    }
                                    var m = Array.from(o);
                                    d(m);
                                    for (var p = new Set, f = [], g = 0, _ = m; g < _.length; g++) {
                                        var h = _[g];
                                        if (!T(h)) {
                                            var E = (0, i.getNodePrivacyLevel)(h.parentNode, t.defaultPrivacyLevel, a);
                                            if (E !== i.NodePrivacyLevel.HIDDEN && E !== i.NodePrivacyLevel.IGNORE) {
                                                var v = (0, r.serializeNodeWithId)(h, {
                                                    serializedNodeIds: p,
                                                    parentNodePrivacyLevel: E,
                                                    serializationContext: {
                                                        status: 2,
                                                        shadowRootsController: n
                                                    },
                                                    configuration: t
                                                });
                                                if (v) {
                                                    var S = (0, i.getParentNode)(h);
                                                    f.push({
                                                        nextId: b(h),
                                                        parentId: (0, r.getSerializedNodeId)(S),
                                                        node: v
                                                    })
                                                }
                                            }
                                        }
                                    }
                                    var y = [];
                                    return s.forEach((function(e, t) {
                                        (0, r.hasSerializedNode)(t) && y.push({
                                            parentId: (0, r.getSerializedNodeId)(e),
                                            id: (0, r.getSerializedNodeId)(t)
                                        })
                                    })), {
                                        adds: f,
                                        removes: y,
                                        hasBeenSerialized: T
                                    };

                                    function T(e) {
                                        return (0, r.hasSerializedNode)(e) && p.has((0, r.getSerializedNodeId)(e))
                                    }

                                    function b(e) {
                                        for (var t = e.nextSibling; t;) {
                                            if ((0, r.hasSerializedNode)(t)) return (0, r.getSerializedNodeId)(t);
                                            t = t.nextSibling
                                        }
                                        return null
                                    }
                                }(l.filter((function(e) {
                                    return "childList" === e.type
                                })), n, a, o),
                                p = u.adds,
                                f = u.removes,
                                g = u.hasBeenSerialized,
                                _ = function(e, t, n) {
                                    for (var a, o = [], s = new Set, l = e.filter((function(e) {
                                            return !s.has(e.target) && (s.add(e.target), !0)
                                        })), c = 0, u = l; c < u.length; c++) {
                                        var d = u[c];
                                        if (d.target.textContent !== d.oldValue) {
                                            var m = (0, i.getNodePrivacyLevel)((0, i.getParentNode)(d.target), t.defaultPrivacyLevel, n);
                                            m !== i.NodePrivacyLevel.HIDDEN && m !== i.NodePrivacyLevel.IGNORE && o.push({
                                                id: (0, r.getSerializedNodeId)(d.target),
                                                value: null !== (a = (0, i.getTextContent)(d.target, !1, m)) && void 0 !== a ? a : null
                                            })
                                        }
                                    }
                                    return o
                                }(l.filter((function(e) {
                                    return "characterData" === e.type && !g(e.target)
                                })), n, o),
                                h = function(e, t, n) {
                                    for (var a = [], o = new Map, s = e.filter((function(e) {
                                            var t = o.get(e.target);
                                            return (!t || !t.has(e.attributeName)) && (t ? t.add(e.attributeName) : o.set(e.target, new Set([e.attributeName])), !0)
                                        })), l = new Map, c = 0, u = s; c < u.length; c++) {
                                        var d = u[c];
                                        if (d.target.getAttribute(d.attributeName) !== d.oldValue) {
                                            var m = (0, i.getNodePrivacyLevel)(d.target, t.defaultPrivacyLevel, n),
                                                p = (0, r.serializeAttribute)(d.target, m, d.attributeName, t),
                                                f = void 0;
                                            if ("value" === d.attributeName) {
                                                var g = (0, r.getElementInputValue)(d.target, m);
                                                if (void 0 === g) continue;
                                                f = g
                                            } else f = "string" == typeof p ? p : null;
                                            var _ = l.get(d.target);
                                            _ || (_ = {
                                                id: (0, r.getSerializedNodeId)(d.target),
                                                attributes: {}
                                            }, a.push(_), l.set(d.target, _)), _.attributes[d.attributeName] = f
                                        }
                                    }
                                    return a
                                }(l.filter((function(e) {
                                    return "attributes" === e.type && !g(e.target)
                                })), n, o);
                            if (!(_.length || h.length || f.length || p.length)) return;
                            t((0, c.assembleIncrementalSnapshot)(s.IncrementalSource.Mutation, {
                                adds: p,
                                removes: f,
                                texts: _,
                                attributes: h
                            }))
                        }(a.concat(g.takeRecords()), e, t, n)
                    })),
                    g = new p((0, o.monitor)(f.addMutations));
                return g.observe(u, {
                    attributeOldValue: !0,
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), {
                    stop: function() {
                        g.disconnect(), f.stop()
                    },
                    flush: function() {
                        f.flush()
                    }
                }
            }

            function d(e) {
                e.sort((function(e, t) {
                    var n = e.compareDocumentPosition(t);
                    return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS || n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
                }))
            }

            function m(e, t) {
                (0, i.isNodeShadowHost)(e) && t(e.shadowRoot), (0, i.forEachChildNodes)(e, (function(e) {
                    return m(e, t)
                }))
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MUTATION_PROCESS_MIN_DELAY: () => s,
                createMutationBatch: () => r
            });
            var a = n(102),
                o = n(101),
                i = 100,
                s = 16;

            function r(e) {
                var t = a.noop,
                    n = [];

                function r() {
                    t(), e(n), n = []
                }
                var l = (0, a.throttle)(r, s, {
                        leading: !1
                    }),
                    c = l.throttled,
                    u = l.cancel;
                return {
                    addMutations: function(e) {
                        0 === n.length && (t = function(e, t) {
                            if (window.requestIdleCallback && window.cancelIdleCallback) {
                                var n = window.requestIdleCallback((0, o.monitor)(e), t);
                                return function() {
                                    return window.cancelIdleCallback(n)
                                }
                            }
                            var a = window.requestAnimationFrame((0, o.monitor)(e));
                            return function() {
                                return window.cancelAnimationFrame(a)
                            }
                        }(c, {
                            timeout: i
                        })), n.push.apply(n, e)
                    },
                    flush: r,
                    stop: function() {
                        t(), u()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";

            function a() {
                var e = new WeakMap;
                return {
                    set: function(t, n) {
                        (t !== document || document.scrollingElement) && e.set(t === document ? document.scrollingElement : t, n)
                    },
                    get: function(t) {
                        return e.get(t)
                    },
                    has: function(t) {
                        return e.has(t)
                    }
                }
            }
            n.r(t), n.d(t, {
                createElementsScrollPositions: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                initShadowRootsController: () => o
            });
            var a = n(223),
                o = function(e, t, n) {
                    var o = new Map,
                        i = {
                            addShadowRoot: function(s) {
                                if (!o.has(s)) {
                                    var r = (0, a.trackMutation)(t, e, i, s),
                                        l = (0, a.trackInput)(e, t, s),
                                        c = (0, a.trackScroll)(e, t, n, s);
                                    o.set(s, {
                                        flush: function() {
                                            return r.flush()
                                        },
                                        stop: function() {
                                            r.stop(), l.stop(), c.stop()
                                        }
                                    })
                                }
                            },
                            removeShadowRoot: function(e) {
                                var t = o.get(e);
                                t && (t.stop(), o.delete(e))
                            },
                            stop: function() {
                                o.forEach((function(e) {
                                    return (0, e.stop)()
                                }))
                            },
                            flush: function() {
                                o.forEach((function(e) {
                                    return (0, e.flush)()
                                }))
                            }
                        };
                    return i
                }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startFullSnapshots: () => l
            });
            var a = n(68),
                o = n(72),
                i = n(229),
                s = n(225),
                r = n(236);

            function l(e, t, n, l, c, u) {
                var d = function(n, c) {
                    void 0 === n && (n = (0, o.timeStampNow)()), void 0 === c && (c = {
                        status: 0,
                        elementsScrollPositions: e,
                        shadowRootsController: t
                    });
                    var u = (0, a.getViewportDimension)(),
                        d = u.width,
                        m = [{
                            data: {
                                height: u.height,
                                href: window.location.href,
                                width: d
                            },
                            type: i.RecordType.Meta,
                            timestamp: n
                        }, {
                            data: {
                                has_focus: document.hasFocus()
                            },
                            type: i.RecordType.Focus,
                            timestamp: n
                        }, {
                            data: {
                                node: (0, s.serializeDocument)(document, l, c),
                                initialOffset: {
                                    left: (0, a.getScrollX)(),
                                    top: (0, a.getScrollY)()
                                }
                            },
                            type: i.RecordType.FullSnapshot,
                            timestamp: n
                        }];
                    return window.visualViewport && m.push({
                        data: (0, r.getVisualViewport)(window.visualViewport),
                        type: i.RecordType.VisualViewport,
                        timestamp: n
                    }), m
                };
                return u(d()), {
                    stop: n.subscribe(2, (function(n) {
                        c(), u(d(n.startClocks.timeStamp, {
                            shadowRootsController: t,
                            status: 1,
                            elementsScrollPositions: e
                        }))
                    })).unsubscribe
                }
            }
        }, (e, t, n) => {
            "use strict";

            function a() {
                var e = new WeakMap,
                    t = 1;
                return {
                    getIdForEvent: function(n) {
                        return e.has(n) || e.set(n, t++), e.get(n)
                    }
                }
            }
            n.r(t), n.d(t, {
                initRecordIds: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SEGMENT_BYTES_LIMIT: () => a.SEGMENT_BYTES_LIMIT,
                setSegmentBytesLimit: () => a.setSegmentBytesLimit,
                startSegmentCollection: () => a.startSegmentCollection
            });
            var a = n(254)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SEGMENT_BYTES_LIMIT: () => c,
                SEGMENT_DURATION_LIMIT: () => l,
                computeSegmentContext: () => m,
                doStartSegmentCollection: () => d,
                setSegmentBytesLimit: () => p,
                startSegmentCollection: () => u
            });
            var a = n(72),
                o = n(199),
                i = n(98),
                s = n(255),
                r = n(256),
                l = 5 * a.ONE_SECOND,
                c = 6e4;

            function u(e, t, n, a, o, i) {
                return d(e, (function() {
                    return m(t.applicationId, n, a)
                }), o, i)
            }

            function d(e, t, n, a) {
                var u = {
                        status: 0,
                        nextSegmentCreationReason: "init"
                    },
                    d = e.subscribe(2, (function() {
                        p("view_change")
                    })).unsubscribe,
                    m = e.subscribe(10, (function(e) {
                        p(e.reason)
                    })).unsubscribe;

                function p(e) {
                    1 === u.status && (u.segment.flush((function(t, a) {
                        var i = (0, s.buildReplayPayload)(a.output, t, a.rawBytesCount);
                        (0, o.isPageExitReason)(e) ? n.sendOnExit(i): n.send(i)
                    })), (0, i.clearTimeout)(u.expirationTimeoutId)), u = "stop" !== e ? {
                        status: 0,
                        nextSegmentCreationReason: e
                    } : {
                        status: 2
                    }
                }
                return {
                    addRecord: function(e) {
                        if (2 !== u.status) {
                            if (0 === u.status) {
                                var n = t();
                                if (!n) return;
                                u = {
                                    status: 1,
                                    segment: (0, r.createSegment)({
                                        encoder: a,
                                        context: n,
                                        creationReason: u.nextSegmentCreationReason
                                    }),
                                    expirationTimeoutId: (0, i.setTimeout)((function() {
                                        p("segment_duration_limit")
                                    }), l)
                                }
                            }
                            u.segment.addRecord(e, (function(e) {
                                e > c && p("segment_bytes_limit")
                            }))
                        }
                    },
                    stop: function() {
                        p("stop"), d(), m()
                    }
                }
            }

            function m(e, t, n) {
                var a = t.findTrackedSession(),
                    o = n.findView();
                if (a && o) return {
                    application: {
                        id: e
                    },
                    session: {
                        id: a.id
                    },
                    view: {
                        id: o.id
                    }
                }
            }

            function p(e) {
                void 0 === e && (e = 6e4), c = e
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                buildReplayPayload: () => o
            });
            var a = n(82);

            function o(e, t, n) {
                var o = new FormData;
                o.append("segment", new Blob([e], {
                    type: "application/octet-stream"
                }), "".concat(t.session.id, "-").concat(t.start));
                var i = (0, a.assign)({
                        raw_segment_size: n,
                        compressed_segment_size: e.byteLength
                    }, t),
                    s = JSON.stringify(i);
                return o.append("event", new Blob([s], {
                    type: "application/json"
                })), {
                    data: o,
                    bytesCount: e.byteLength
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createSegment: () => s
            });
            var a = n(82),
                o = n(229),
                i = n(222);

            function s(e) {
                var t = e.context,
                    n = e.creationReason,
                    s = e.encoder,
                    r = 0,
                    l = t.view.id,
                    c = (0, a.assign)({
                        start: 1 / 0,
                        end: -1 / 0,
                        creation_reason: n,
                        records_count: 0,
                        has_full_snapshot: !1,
                        index_in_view: i.getSegmentsCount(l),
                        source: "browser"
                    }, t);
                return i.addSegment(l), {
                    addRecord: function(e, t) {
                        c.start = Math.min(c.start, e.timestamp), c.end = Math.max(c.end, e.timestamp), c.records_count += 1, c.has_full_snapshot || (c.has_full_snapshot = e.type === o.RecordType.FullSnapshot);
                        var n = s.isEmpty ? '{"records":[' : ",";
                        s.write(n + JSON.stringify(e), (function(e) {
                            t(r += e)
                        }))
                    },
                    flush: function(e) {
                        if (s.isEmpty) throw new Error("Empty segment flushed");
                        s.write("],".concat(JSON.stringify(c).slice(1), "\n")), s.finish((function(t) {
                            i.addWroteData(c.view.id, t.rawBytesCount), e(c, t)
                        }))
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                startRecordBridge: () => o
            });
            var a = n(116);

            function o(e) {
                var t = (0, a.getEventBridge)();
                return {
                    addRecord: function(n) {
                        var a = e.findView();
                        t.send("record", n, a.id)
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                makeRecorderApi: () => d
            });
            var a = n(116),
                o = n(102),
                i = n(199),
                s = n(181),
                r = n(222),
                l = n(259),
                c = n(261),
                u = n(260);

            function d(e, t) {
                if ((0, a.canUseEventBridge)() && !(0, a.bridgeSupports)("records") || !(0, u.isBrowserSupported)()) return {
                    start: o.noop,
                    stop: o.noop,
                    getReplayStats: function() {},
                    onRumStart: o.noop,
                    isRecording: function() {
                        return !1
                    },
                    getSessionReplayLink: function() {}
                };
                var n = {
                        status: 1
                    },
                    d = function() {
                        n = {
                            status: 1
                        }
                    },
                    m = function() {
                        n = {
                            status: 0
                        }
                    },
                    p = o.noop;
                return {
                    start: function(e) {
                        return d(e)
                    },
                    stop: function() {
                        return m()
                    },
                    getSessionReplayLink: function() {
                        return p()
                    },
                    onRumStart: function(a, o, r, u, f) {
                        var g;
                        o.startSessionReplayRecordingManually && (n = {
                            status: 0
                        }), a.subscribe(8, (function() {
                            2 !== n.status && 3 !== n.status || (m(), n = {
                                status: 1
                            })
                        })), a.subscribe(10, (function(e) {
                            e.reason === i.PageExitReason.UNLOADING && m()
                        })), a.subscribe(9, (function() {
                            1 === n.status && d()
                        })), d = function(i) {
                            var l = r.findTrackedSession();
                            l && (0 !== l.sessionReplay || i && i.force) ? 2 !== n.status && 3 !== n.status && (n = {
                                status: 2
                            }, (0, s.runOnReadyState)(o, "interactive", (function() {
                                if (2 === n.status) {
                                    var i = (g || (f || (f = (0, c.startDeflateWorker)(o, "Datadog Session Replay", (function() {
                                        m()
                                    }), t)), f && (g = (0, c.createDeflateEncoder)(o, f, 1))), g);
                                    if (i) {
                                        var s = e(a, o, r, u, i).stop;
                                        n = {
                                            status: 3,
                                            stopRecording: s
                                        }
                                    } else n = {
                                        status: 0
                                    }
                                }
                            })), i && i.force && 0 === l.sessionReplay && r.setForcedReplay()) : n = {
                                status: 1
                            }
                        }, m = function() {
                            0 !== n.status && (3 === n.status && n.stopRecording(), n = {
                                status: 0
                            })
                        }, p = function() {
                            return (0, l.getSessionReplayLink)(o, r, u, 0 !== n.status)
                        }, 1 === n.status && d()
                    },
                    isRecording: function() {
                        return 3 === (0, c.getDeflateWorkerStatus)() && 3 === n.status
                    },
                    getReplayStats: function(e) {
                        return 3 === (0, c.getDeflateWorkerStatus)() ? (0, r.getReplayStats)(e) : void 0
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getSessionReplayLink: () => i
            });
            var a = n(68),
                o = n(260);

            function i(e, t, n, i) {
                var s = t.findTrackedSession(),
                    r = function(e, t) {
                        if (!(0, o.isBrowserSupported)()) return "browser-not-supported";
                        if (!e) return "rum-not-tracked";
                        if (0 === e.sessionReplay) return "incorrect-session-plan";
                        if (!t) return "replay-not-started"
                    }(s, i),
                    l = n.findView();
                return (0, a.getSessionReplayUrl)(e, {
                    viewContext: l,
                    errorType: r,
                    session: s
                })
            }
        }, (e, t, n) => {
            "use strict";

            function a() {
                return "function" == typeof Array.from && "function" == typeof CSSSupportsRule && "function" == typeof URL.createObjectURL && "forEach" in NodeList.prototype
            }
            n.r(t), n.d(t, {
                isBrowserSupported: () => a
            })
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createDeflateEncoder: () => a.createDeflateEncoder,
                getDeflateWorkerStatus: () => o.getDeflateWorkerStatus,
                resetDeflateWorkerState: () => o.resetDeflateWorkerState,
                startDeflateWorker: () => o.startDeflateWorker
            });
            var a = n(262),
                o = n(263)
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                createDeflateEncoder: () => r
            });
            var a = n(112),
                o = n(117),
                i = n(104),
                s = n(82);

            function r(e, t, n) {
                var r, l = 0,
                    c = [],
                    u = 0,
                    d = [],
                    m = (0, a.addEventListener)(e, t, "message", (function(e) {
                        var t = e.data;
                        if ("wrote" === t.type && t.streamId === n) {
                            l += t.additionalBytesCount, c.push(t.result), r = t.trailer;
                            var a = d.shift();
                            a && a.id === t.id ? a.writeCallback ? a.writeCallback(t.result.byteLength) : a.finishCallback && a.finishCallback() : (m(), (0, o.addTelemetryDebug)("Worker responses received out of order."))
                        }
                    })).stop;

                function p() {
                    var e = 0 === c.length ? new Uint8Array(0) : (0, i.concatBuffers)(c.concat(r)),
                        t = {
                            rawBytesCount: l,
                            output: e,
                            outputBytesCount: e.byteLength,
                            encoding: "deflate"
                        };
                    return l = 0, c = [], t
                }

                function f() {
                    u > 0 && (t.postMessage({
                        action: "reset",
                        streamId: n
                    }), u = 0)
                }
                return {
                    isAsync: !0,
                    get isEmpty() {
                        return 0 === u
                    },
                    write: function(e, a) {
                        t.postMessage({
                            action: "write",
                            id: u,
                            data: e,
                            streamId: n
                        }), d.push({
                            id: u,
                            writeCallback: a,
                            data: e
                        }), u += 1
                    },
                    finish: function(e) {
                        f(), d.length ? (d.forEach((function(e) {
                            delete e.writeCallback
                        })), d[d.length - 1].finishCallback = function() {
                            return e(p())
                        }) : e(p())
                    },
                    finishSync: function() {
                        f();
                        var e = d.map((function(e) {
                            return delete e.writeCallback, delete e.finishCallback, e.data
                        })).join("");
                        return (0, s.assign)(p(), {
                            pendingData: e
                        })
                    },
                    estimateEncodedBytesCount: function(e) {
                        return e.length / 8
                    },
                    stop: function() {
                        m()
                    }
                }
            }
        }, (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                INITIALIZATION_TIME_OUT_DELAY: () => c,
                doStartDeflateWorker: () => g,
                getDeflateWorkerStatus: () => f,
                resetDeflateWorkerState: () => p,
                startDeflateWorker: () => m
            });
            var a = n(72),
                o = n(112),
                i = n(98),
                s = n(83),
                r = n(117),
                l = n(82),
                c = 30 * a.ONE_SECOND;

            function u(e) {
                return new Worker(e.workerUrl || URL.createObjectURL(new Blob(['!function(){"use strict";function t(t){for(var e=t.reduce((function(t,e){return t+e.length}),0),a=new Uint8Array(e),n=0,r=0,i=t;r<i.length;r++){var s=i[r];a.set(s,n),n+=s.length}return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=256,n=286,r=30,i=15,s=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),_=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),h=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),l=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=new Array(576);e(o);var d=new Array(60);e(d);var u=new Array(512);e(u);var f=new Array(256);e(f);var c=new Array(29);e(c);var p,g,w,v=new Array(r);function b(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function m(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(v);var y=function(t){return t<256?u[t]:u[256+(t>>>7)]},k=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},z=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,k(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},x=function(t,e,a){z(t,a[2*e],a[2*e+1])},A=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},E=function(t,e,a){var n,r,s=new Array(16),_=0;for(n=1;n<=i;n++)s[n]=_=_+a[n-1]<<1;for(r=0;r<=e;r++){var h=t[2*r+1];0!==h&&(t[2*r]=A(s[h]++,h))}},Z=function(t){var e;for(e=0;e<n;e++)t.dyn_ltree[2*e]=0;for(e=0;e<r;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},U=function(t){t.bi_valid>8?k(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},S=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},R=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&S(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!S(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},L=function(t,e,n){var r,i,h,l,o=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],i=t.pending_buf[t.l_buf+o],o++,0===r?x(t,i,e):(h=f[i],x(t,h+a+1,e),0!==(l=s[h])&&(i-=c[h],z(t,i,l)),r--,h=y(r),x(t,h,n),0!==(l=_[h])&&(r-=v[h],z(t,r,l)))}while(o<t.last_lit);x(t,256,e)},F=function(t,e){var a,n,r,s=e.dyn_tree,_=e.stat_desc.static_tree,h=e.stat_desc.has_stree,l=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<l;a++)0!==s[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):s[2*a+1]=0;for(;t.heap_len<2;)s[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=_[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)R(t,s,a);r=l;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],R(t,s,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,s[2*r]=s[2*a]+s[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,s[2*a+1]=s[2*n+1]=r,t.heap[1]=r++,R(t,s,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,s,_,h,l=e.dyn_tree,o=e.max_code,d=e.stat_desc.static_tree,u=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(s=0;s<=i;s++)t.bl_count[s]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(s=l[2*l[2*(n=t.heap[a])+1]+1]+1)>p&&(s=p,g++),l[2*n+1]=s,n>o||(t.bl_count[s]++,_=0,n>=c&&(_=f[n-c]),h=l[2*n],t.opt_len+=h*(s+_),u&&(t.static_len+=h*(d[2*n+1]+_)));if(0!==g){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(s=p;0!==s;s--)for(n=t.bl_count[s];0!==n;)(r=t.heap[--a])>o||(l[2*r+1]!==s&&(t.opt_len+=(s-l[2*r+1])*l[2*r],l[2*r+1]=s),n--)}}(t,e),E(s,o,t.bl_count)},T=function(t,e,a){var n,r,i=-1,s=e[1],_=0,h=7,l=4;for(0===s&&(h=138,l=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++_<h&&r===s||(_<l?t.bl_tree[2*r]+=_:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):_<=10?t.bl_tree[34]++:t.bl_tree[36]++,_=0,i=r,0===s?(h=138,l=3):r===s?(h=6,l=3):(h=7,l=4))},I=function(t,e,a){var n,r,i=-1,s=e[1],_=0,h=7,l=4;for(0===s&&(h=138,l=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++_<h&&r===s)){if(_<l)do{x(t,r,t.bl_tree)}while(0!=--_);else 0!==r?(r!==i&&(x(t,r,t.bl_tree),_--),x(t,16,t.bl_tree),z(t,_-3,2)):_<=10?(x(t,17,t.bl_tree),z(t,_-3,3)):(x(t,18,t.bl_tree),z(t,_-11,7));_=0,i=r,0===s?(h=138,l=3):r===s?(h=6,l=3):(h=7,l=4)}},N=!1,O=function(t,e,a,n){z(t,0+(n?1:0),3),function(t,e,a,n){U(t),n&&(k(t,a),k(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a,!0)},D=function(t,e,n,r){var i,s,_=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),F(t,t.l_desc),F(t,t.d_desc),_=function(t){var e;for(T(t,t.dyn_ltree,t.l_desc.max_code),T(t,t.dyn_dtree,t.d_desc.max_code),F(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*l[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=i&&(i=s)):i=s=n+5,n+4<=i&&-1!==e?O(t,e,n,r):4===t.strategy||s===i?(z(t,2+(r?1:0),3),L(t,o,d)):(z(t,4+(r?1:0),3),function(t,e,a,n){var r;for(z(t,e-257,5),z(t,a-1,5),z(t,n-4,4),r=0;r<n;r++)z(t,t.bl_tree[2*l[r]+1],3);I(t,t.dyn_ltree,e-1),I(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,_+1),L(t,t.dyn_ltree,t.dyn_dtree)),Z(t),r&&U(t)},B={_tr_init:function(t){N||(!function(){var t,e,a,l,m,y=new Array(16);for(a=0,l=0;l<28;l++)for(c[l]=a,t=0;t<1<<s[l];t++)f[a++]=l;for(f[a-1]=l,m=0,l=0;l<16;l++)for(v[l]=m,t=0;t<1<<_[l];t++)u[m++]=l;for(m>>=7;l<r;l++)for(v[l]=m<<7,t=0;t<1<<_[l]-7;t++)u[256+m++]=l;for(e=0;e<=i;e++)y[e]=0;for(t=0;t<=143;)o[2*t+1]=8,t++,y[8]++;for(;t<=255;)o[2*t+1]=9,t++,y[9]++;for(;t<=279;)o[2*t+1]=7,t++,y[7]++;for(;t<=287;)o[2*t+1]=8,t++,y[8]++;for(E(o,287,y),t=0;t<r;t++)d[2*t+1]=5,d[2*t]=A(t,5);p=new b(o,s,257,n,i),g=new b(d,_,0,r,i),w=new b(new Array(0),h,0,19,7)}(),N=!0),t.l_desc=new m(t.dyn_ltree,p),t.d_desc=new m(t.dyn_dtree,g),t.bl_desc=new m(t.bl_tree,w),t.bi_buf=0,t.bi_valid=0,Z(t)},_tr_stored_block:O,_tr_flush_block:D,_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(f[n]+a+1)]++,t.dyn_dtree[2*y(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){z(t,2,3),x(t,256,o),function(t){16===t.bi_valid?(k(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},C=function(t,e,a,n){for(var r=65535&t|0,i=t>>>16&65535|0,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16|0},H=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),M=function(t,e,a,n){var r=H,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return-1^t},Y={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},K={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},P=B._tr_init,j=B._tr_stored_block,G=B._tr_flush_block,X=B._tr_tally,W=B._tr_align,q=K.Z_NO_FLUSH,J=K.Z_PARTIAL_FLUSH,Q=K.Z_FULL_FLUSH,V=K.Z_FINISH,$=K.Z_BLOCK,tt=K.Z_OK,et=K.Z_STREAM_END,at=K.Z_STREAM_ERROR,nt=K.Z_DATA_ERROR,rt=K.Z_BUF_ERROR,it=K.Z_DEFAULT_COMPRESSION,st=K.Z_FILTERED,_t=K.Z_HUFFMAN_ONLY,ht=K.Z_RLE,lt=K.Z_FIXED,ot=K.Z_DEFAULT_STRATEGY,dt=K.Z_UNKNOWN,ut=K.Z_DEFLATED,ft=258,ct=262,pt=103,gt=113,wt=666,vt=function(t,e){return t.msg=Y[e],e},bt=function(t){return(t<<1)-(t>4?9:0)},mt=function(t){for(var e=t.length;--e>=0;)t[e]=0},yt=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},kt=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},zt=function(t,e){G(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,kt(t.strm)},xt=function(t,e){t.pending_buf[t.pending++]=e},At=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Et=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,_=t.nice_match,h=t.strstart>t.w_size-ct?t.strstart-(t.w_size-ct):0,l=t.window,o=t.w_mask,d=t.prev,u=t.strstart+ft,f=l[i+s-1],c=l[i+s];t.prev_length>=t.good_match&&(r>>=2),_>t.lookahead&&(_=t.lookahead);do{if(l[(a=e)+s]===c&&l[a+s-1]===f&&l[a]===l[i]&&l[++a]===l[i+1]){i+=2,a++;do{}while(l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&i<u);if(n=ft-(u-i),i=u-ft,n>s){if(t.match_start=e,s=n,n>=_)break;f=l[i+s-1],c=l[i+s]}}}while((e=d[e&o])>h&&0!=--r);return s<=t.lookahead?s:t.lookahead},Zt=function(t){var e,a,n,r,i,s,_,h,l,o,d=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-ct)){t.window.set(t.window.subarray(d,d+d),0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=d?n-d:0}while(--a);e=a=d;do{n=t.prev[--e],t.prev[e]=n>=d?n-d:0}while(--a);r+=d}if(0===t.strm.avail_in)break;if(s=t.strm,_=t.window,h=t.strstart+t.lookahead,l=r,o=void 0,(o=s.avail_in)>l&&(o=l),a=0===o?0:(s.avail_in-=o,_.set(s.input.subarray(s.next_in,s.next_in+o),h),1===s.state.wrap?s.adler=C(s.adler,_,o,h):2===s.state.wrap&&(s.adler=M(s.adler,_,o,h)),s.next_in+=o,s.total_in+=o,o),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=yt(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=yt(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<ct&&0!==t.strm.avail_in)},Ut=function(t,e){for(var a,n;;){if(t.lookahead<ct){if(Zt(t),t.lookahead<ct&&e===q)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ct&&(t.match_length=Et(t,a)),t.match_length>=3)if(n=X(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=yt(t,t.ins_h,t.window[t.strstart+1]);else n=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zt(t,!1),0===t.strm.avail_out)?1:2},St=function(t,e){for(var a,n,r;;){if(t.lookahead<ct){if(Zt(t),t.lookahead<ct&&e===q)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ct&&(t.match_length=Et(t,a),t.match_length<=5&&(t.strategy===st||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=X(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(zt(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=X(t,0,t.window[t.strstart-1]))&&zt(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=X(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zt(t,!1),0===t.strm.avail_out)?1:2};function Rt(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var Lt=[new Rt(0,0,0,0,(function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Zt(t),0===t.lookahead&&e===q)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,zt(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-ct&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(zt(t,!1),t.strm.avail_out),1)})),new Rt(4,4,8,4,Ut),new Rt(4,5,16,8,Ut),new Rt(4,6,32,32,Ut),new Rt(4,4,16,16,St),new Rt(8,16,32,32,St),new Rt(8,16,128,128,St),new Rt(8,32,128,256,St),new Rt(32,128,258,1024,St),new Rt(32,258,258,4096,St)];function Ft(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ut,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),mt(this.dyn_ltree),mt(this.dyn_dtree),mt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),mt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),mt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Tt=function(t){if(!t||!t.state)return vt(t,at);t.total_in=t.total_out=0,t.data_type=dt;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:gt,t.adler=2===e.wrap?0:1,e.last_flush=q,P(e),tt},It=function(t){var e,a=Tt(t);return a===tt&&((e=t.state).window_size=2*e.w_size,mt(e.head),e.max_lazy_match=Lt[e.level].max_lazy,e.good_match=Lt[e.level].good_length,e.nice_match=Lt[e.level].nice_length,e.max_chain_length=Lt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),a},Nt=function(t,e,a,n,r,i){if(!t)return at;var s=1;if(e===it&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||a!==ut||n<8||n>15||e<0||e>9||i<0||i>lt)return vt(t,at);8===n&&(n=9);var _=new Ft;return t.state=_,_.strm=t,_.wrap=s,_.gzhead=null,_.w_bits=n,_.w_size=1<<_.w_bits,_.w_mask=_.w_size-1,_.hash_bits=r+7,_.hash_size=1<<_.hash_bits,_.hash_mask=_.hash_size-1,_.hash_shift=~~((_.hash_bits+3-1)/3),_.window=new Uint8Array(2*_.w_size),_.head=new Uint16Array(_.hash_size),_.prev=new Uint16Array(_.w_size),_.lit_bufsize=1<<r+6,_.pending_buf_size=4*_.lit_bufsize,_.pending_buf=new Uint8Array(_.pending_buf_size),_.d_buf=1*_.lit_bufsize,_.l_buf=3*_.lit_bufsize,_.level=e,_.strategy=i,_.method=a,It(t)},Ot={deflateInit:function(t,e){return Nt(t,e,ut,15,8,ot)},deflateInit2:Nt,deflateReset:It,deflateResetKeep:Tt,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?at:(t.state.gzhead=e,tt):at},deflate:function(t,e){var a,n;if(!t||!t.state||e>$||e<0)return t?vt(t,at):at;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===wt&&e!==V)return vt(t,0===t.avail_out?rt:at);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,xt(r,31),xt(r,139),xt(r,8),r.gzhead?(xt(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),xt(r,255&r.gzhead.time),xt(r,r.gzhead.time>>8&255),xt(r,r.gzhead.time>>16&255),xt(r,r.gzhead.time>>24&255),xt(r,9===r.level?2:r.strategy>=_t||r.level<2?4:0),xt(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(xt(r,255&r.gzhead.extra.length),xt(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=M(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(xt(r,0),xt(r,0),xt(r,0),xt(r,0),xt(r,0),xt(r,9===r.level?2:r.strategy>=_t||r.level<2?4:0),xt(r,3),r.status=gt);else{var s=ut+(r.w_bits-8<<4)<<8;s|=(r.strategy>=_t||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=gt,At(r,s),0!==r.strstart&&(At(r,t.adler>>>16),At(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),kt(t),a=r.pending,r.pending!==r.pending_buf_size));)xt(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),kt(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,xt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),kt(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,xt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=pt)}else r.status=pt;if(r.status===pt&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&kt(t),r.pending+2<=r.pending_buf_size&&(xt(r,255&t.adler),xt(r,t.adler>>8&255),t.adler=0,r.status=gt)):r.status=gt),0!==r.pending){if(kt(t),0===t.avail_out)return r.last_flush=-1,tt}else if(0===t.avail_in&&bt(e)<=bt(i)&&e!==V)return vt(t,rt);if(r.status===wt&&0!==t.avail_in)return vt(t,rt);if(0!==t.avail_in||0!==r.lookahead||e!==q&&r.status!==wt){var _=r.strategy===_t?function(t,e){for(var a;;){if(0===t.lookahead&&(Zt(t),0===t.lookahead)){if(e===q)return 1;break}if(t.match_length=0,a=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zt(t,!1),0===t.strm.avail_out)?1:2}(r,e):r.strategy===ht?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=ft){if(Zt(t),t.lookahead<=ft&&e===q)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+ft;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=ft-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=X(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zt(t,!1),0===t.strm.avail_out)?1:2}(r,e):Lt[r.level].func(r,e);if(3!==_&&4!==_||(r.status=wt),1===_||3===_)return 0===t.avail_out&&(r.last_flush=-1),tt;if(2===_&&(e===J?W(r):e!==$&&(j(r,0,0,!1),e===Q&&(mt(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),kt(t),0===t.avail_out))return r.last_flush=-1,tt}return e!==V?tt:r.wrap<=0?et:(2===r.wrap?(xt(r,255&t.adler),xt(r,t.adler>>8&255),xt(r,t.adler>>16&255),xt(r,t.adler>>24&255),xt(r,255&t.total_in),xt(r,t.total_in>>8&255),xt(r,t.total_in>>16&255),xt(r,t.total_in>>24&255)):(At(r,t.adler>>>16),At(r,65535&t.adler)),kt(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?tt:et)},deflateEnd:function(t){if(!t||!t.state)return at;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==pt&&e!==gt&&e!==wt?vt(t,at):(t.state=null,e===gt?vt(t,nt):tt)},deflateSetDictionary:function(t,e){var a=e.length;if(!t||!t.state)return at;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return at;if(1===r&&(t.adler=C(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(mt(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,_=t.next_in,h=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Zt(n);n.lookahead>=3;){var l=n.strstart,o=n.lookahead-2;do{n.ins_h=yt(n,n.ins_h,n.window[l+3-1]),n.prev[l&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=l,l++}while(--o);n.strstart=l,n.lookahead=2,Zt(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=_,t.input=h,t.avail_in=s,n.wrap=r,tt},deflateInfo:"pako deflate (from Nodeca project)"};for(var Dt=new Uint8Array(256),Bt=0;Bt<256;Bt++)Dt[Bt]=Bt>=252?6:Bt>=248?5:Bt>=240?4:Bt>=224?3:Bt>=192?2:1;Dt[254]=Dt[254]=1;var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Ht=Object.prototype.toString,Mt=K.Z_NO_FLUSH,Yt=K.Z_SYNC_FLUSH,Kt=K.Z_FULL_FLUSH,Pt=K.Z_FINISH,jt=K.Z_OK,Gt=K.Z_STREAM_END,Xt=K.Z_DEFAULT_COMPRESSION,Wt=K.Z_DEFAULT_STRATEGY,qt=K.Z_DEFLATED;function Jt(){this.options={level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;var e=Ot.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==jt)throw new Error(Y[e]);if(t.header&&Ot.deflateSetHeader(this.strm,t.header),t.dictionary){var a;if(a="[object ArrayBuffer]"===Ht.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(e=Ot.deflateSetDictionary(this.strm,a))!==jt)throw new Error(Y[e]);this._dict_set=!0}}function Qt(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:String(e),streamId:a})}}function Vt(t){var e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}Jt.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?Pt:Mt,"[object ArrayBuffer]"===Ht.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(n===Yt||n===Kt)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if((a=Ot.deflate(r,n))===Gt)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=Ot.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===jt;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===jt&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,_=t.length;i<_;i++){var h=t[i];r.set(h,s),s+=h.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e){void 0===e&&(e=self);try{var a=new Map;e.addEventListener("message",(function(n){try{var r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"5.30.0"};case"write":var n=e.get(a.streamId);n||(n=new Jt,e.set(a.streamId,n));var r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);var e,a,n,r,i,s=t.length,_=0;for(r=0;r<s;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),_+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(_),i=0,r=0;i<_;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,K.Z_SYNC_FLUSH),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:Vt(n),additionalBytesCount:i.length};case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){Qt(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}}))}catch(t){Qt(e,t)}}()}();'])))
            }
            var d = {
                status: 0
            };

            function m(e, t, n, a) {
                switch (void 0 === a && (a = u), 0 === d.status && g(e, t, a), d.status) {
                    case 1:
                        return d.initializationFailureCallbacks.push(n), d.worker;
                    case 3:
                        return d.worker
                }
            }

            function p() {
                3 !== d.status && 1 !== d.status || d.stop(), d = {
                    status: 0
                }
            }

            function f() {
                return d.status
            }

            function g(e, t, n) {
                void 0 === n && (n = u);
                try {
                    var a = n(e),
                        r = (0, o.addEventListener)(e, a, "error", (function(n) {
                            _(e, t, n)
                        })).stop,
                        l = (0, o.addEventListener)(e, a, "message", (function(n) {
                            var a, o = n.data;
                            "errored" === o.type ? _(e, t, o.error, o.streamId) : "initialized" === o.type && (a = o.version, 1 === d.status && (d = {
                                status: 3,
                                worker: d.worker,
                                stop: d.stop,
                                version: a
                            }))
                        })).stop;
                    a.postMessage({
                        action: "init"
                    }), (0, i.setTimeout)((function() {
                        return function(e) {
                            1 === d.status && (s.display.error("".concat(e, " failed to start: a timeout occurred while initializing the Worker")), d.initializationFailureCallbacks.forEach((function(e) {
                                return e()
                            })), d = {
                                status: 2
                            })
                        }(t)
                    }), c);
                    d = {
                        status: 1,
                        worker: a,
                        stop: function() {
                            r(), l()
                        },
                        initializationFailureCallbacks: []
                    }
                } catch (n) {
                    _(e, t, n)
                }
            }

            function _(e, t, n, a) {
                if (1 === d.status || 0 === d.status) {
                    if (s.display.error("".concat(t, " failed to start: an error occurred while creating the Worker:"), n), n instanceof Event || n instanceof Error && (i = n.message, (0, l.includes)(i, "Content Security Policy") || (0, l.includes)(i, "requires 'TrustedScriptURL'"))) {
                        var o = void 0;
                        o = e.workerUrl ? "Please make sure the Worker URL ".concat(e.workerUrl, " is correct and CSP is correctly configured.") : "Please make sure CSP is correctly configured.", s.display.error("".concat(o, " See documentation at ").concat(s.DOCS_ORIGIN, "/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay"))
                    } else(0, r.addTelemetryError)(n);
                    1 === d.status && d.initializationFailureCallbacks.forEach((function(e) {
                        return e()
                    })), d = {
                        status: 2
                    }
                } else(0, r.addTelemetryError)(n, {
                    worker_version: 3 === d.status && d.version,
                    stream_id: a
                });
                var i
            }
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(40)) && a.__esModule ? a : {
                    default: a
                },
                s = n(13);
            const r = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "masterSoundEnabled",
                    scope: "local",
                    defaultValue: !0
                },
                l = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "masterVolume",
                    scope: "local",
                    defaultValue: 100
                },
                c = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "sfxEnabled",
                    scope: "local",
                    defaultValue: !0,
                    voiceAliasProperty: "voiceEnabled"
                },
                u = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "sfxVolume",
                    scope: "local",
                    defaultValue: 100,
                    voiceAliasProperty: "voiceVolume"
                },
                d = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "ambientSfxEnabled",
                    scope: "local",
                    defaultValue: !0
                },
                m = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "pickChampVoEnabled",
                    scope: "local",
                    defaultValue: !0
                },
                p = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "banChampVoEnabled",
                    scope: "local",
                    defaultValue: !0
                },
                f = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "musicEnabled",
                    scope: "local",
                    defaultValue: !0
                },
                g = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "musicVolume",
                    scope: "local",
                    defaultValue: 100
                },
                _ = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "championSelectionMusicEnabled",
                    scope: "local",
                    defaultValue: !0
                },
                h = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "ambienceMusicEnabled",
                    scope: "local",
                    defaultValue: !0
                },
                E = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "clientAmbienceMusicEnabled",
                    scope: "local",
                    defaultValue: !0
                },
                v = {
                    model: "soundSettings",
                    namespace: "lol-audio",
                    schemaVersion: s.LOL_SOUND_SCHEMA_VERSION,
                    property: "loginMusicEnabled",
                    scope: "local",
                    defaultValue: !0
                };
            var S = o.Ember.Controller.extend(i.default, {
                soundSettings: o.Ember.computed.alias("model.soundSettings"),
                currentSchemaVersion: o.Ember.computed.alias("soundSettings.schemaVersion"),
                soundDisabled: o.Ember.computed.not("masterSoundEnabled"),
                sfxNotEnabled: o.Ember.computed.not("sfxEnabled"),
                musicNotEnabled: o.Ember.computed.not("musicEnabled"),
                sfxDisabled: o.Ember.computed.or("soundDisabled", "sfxNotEnabled"),
                musicDisabled: o.Ember.computed.or("soundDisabled", "musicNotEnabled"),
                masterVolumeLabel: o.Ember.computed(l.property, (function() {
                    const e = Number.isInteger(this.get(l.property)) ? this.get(l.property) : l.defaultValue;
                    return this.get("tra").formatString("lol_settings_sound_master_volume_label", {
                        value: e
                    })
                })),
                sfxVolumeLabel: o.Ember.computed(u.property, (function() {
                    const e = Number.isInteger(this.get(u.property)) ? this.get(u.property) : u.defaultValue;
                    return this.get("tra").formatString("lol_settings_sound_sfx_volume_label", {
                        value: e
                    })
                })),
                musicVolumeLabel: o.Ember.computed(g.property, (function() {
                    const e = Number.isInteger(this.get(g.property)) ? this.get(g.property) : g.defaultValue;
                    return this.get("tra").formatString("lol_settings_sound_music_volume_label", {
                        value: e
                    })
                })),
                persistenceService: o.Ember.inject.service("persistence"),
                init() {
                    this._super(...arguments), this.bindSetting(r), this.bindSetting(l), this.bindSetting(c), this.bindSetting(u), this.bindSetting(d), this.bindSetting(m), this.bindSetting(p), this.bindSetting(f), this.bindSetting(g), this.bindSetting(_), this.bindSetting(h), this.bindSetting(E), this.bindSetting(v);
                    const e = this.get("currentSchemaVersion");
                    Number.isInteger(e) && e < s.LOL_SOUND_SCHEMA_VERSION && this.resetToDefault()
                },
                resetToDefault: function() {
                    this.changeSetting(r.property, r.defaultValue), this.changeSetting(l.property, l.defaultValue), this.changeSetting(c.property, c.defaultValue), this.changeSetting(u.property, u.defaultValue), this.changeSetting(d.property, d.defaultValue), this.changeSetting(m.property, m.defaultValue), this.changeSetting(p.property, p.defaultValue), this.changeSetting(f.property, f.defaultValue), this.changeSetting(g.property, g.defaultValue), this.changeSetting(_.property, _.defaultValue), this.changeSetting(h.property, h.defaultValue), this.changeSetting(E.property, E.defaultValue), this.changeSetting(v.property, v.defaultValue)
                },
                onSaveSetting: function(e, t) {
                    if (e === c.property) {
                        const e = {};
                        e[c.voiceAliasProperty] = t, this.get("persistenceService").saveDefaultSetting(e, c.scope, c.namespace, c.schemaVersion)
                    } else if (e === u.property) {
                        const e = {};
                        e[u.voiceAliasProperty] = .5 * t, this.get("persistenceService").saveDefaultSetting(e, u.scope, u.namespace, u.schemaVersion)
                    }
                },
                actions: {
                    onSliderSlideEnd: function(e, t) {
                        this.changeSetting(e, t)
                    }
                }
            });
            t.default = S
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(40)) && a.__esModule ? a : {
                    default: a
                };
            const s = "/lol-settings/v2/account/LCUPreferences/lol-navigation",
                r = "/lol-client-config/v3/client-config/lol.client_settings.team_voice.enabled",
                l = o.dataBinding.bindTo(o.socket),
                c = {
                    model: "accountVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "autoJoin",
                    scope: "account",
                    defaultValue: !1
                },
                u = {
                    model: "accountVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "muteOnConnect",
                    scope: "account",
                    defaultValue: !1
                },
                d = {
                    model: "accountVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "autoJoinTeamVoice",
                    scope: "account",
                    defaultValue: !1
                },
                m = {
                    model: "localVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "currentCaptureDeviceHandle",
                    scope: "local",
                    defaultValue: "Default System Device"
                },
                p = {
                    model: "localVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "inputVolume",
                    scope: "local",
                    defaultValue: 50
                },
                f = "voiceActivity",
                g = "pushToTalk",
                _ = {
                    model: "accountVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "inputMode",
                    scope: "account",
                    defaultValue: f
                },
                h = {
                    model: "localVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "vadSensitivity",
                    scope: "local",
                    defaultValue: 65
                },
                E = {
                    model: "accountVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "pushToTalkKey",
                    scope: "account"
                },
                v = {
                    model: "accountVoiceSettings",
                    namespace: "lol-premade-voice",
                    schemaVersion: 1,
                    property: "pushToTalkTeamKey",
                    scope: "account"
                };
            var S = o.Ember.Controller.extend(i.default, {
                localVoiceSettings: o.Ember.computed.alias("model.localVoiceSettings"),
                accountVoiceSettings: o.Ember.computed.alias("model.accountVoiceSettings"),
                persistenceService: o.Ember.inject.service("persistence"),
                voiceService: o.Ember.inject.service("voice"),
                teamVoicePluginEnabled: o.Ember.computed.alias("voiceService.teamVoicePluginEnabled"),
                voiceComplianceAgreementAuthorized: !1,
                teamVoiceEnabledConfig: !1,
                shouldShowAgreementSection: o.Ember.computed("voiceComplianceAgreementAuthorized", "teamVoiceEnabledConfig", (function() {
                    return this.get("teamVoiceEnabledConfig") && !this.get("voiceComplianceAgreementAuthorized")
                })),
                isTeamVoiceDisabled: o.Ember.computed(c.property, "voiceComplianceAgreementAuthorized", (function() {
                    return !this.get(c.property) || !this.get("voiceComplianceAgreementAuthorized")
                })),
                autoJoinObserver: o.Ember.observer(c.property, (function() {
                    this.get(c.property) || this.changeSetting(d.property, !1)
                })),
                captureDevices: o.Ember.computed("voiceService.captureDevices", m.property, (function() {
                    const e = this.get("voiceService.captureDevices") || [],
                        t = this.get(m.property) || o.lodash.get(o.lodash.first(e.filter((e => e.is_current_device))), "handle");
                    return e.map((e => {
                        const n = e.handle === m.defaultValue ? this.get("tra.voice_settings_default_input_device") : e.name;
                        return {
                            handle: e.handle,
                            name: n,
                            selected: e.handle === t
                        }
                    }))
                })),
                inputVolumeLabel: o.Ember.computed(p.property, (function() {
                    const e = Number.isInteger(this.get(p.property)) ? this.get(p.property) : p.defaultValue;
                    return this.get("tra.formatString")("voice_settings_input_gain", {
                        inputVolume: e
                    })
                })),
                inputModes: o.Ember.computed(_.property, (function() {
                    return [{
                        name: f,
                        label: this.get("tra.voice_settings_input_activity"),
                        selected: this.get("isInputModeVoice")
                    }, {
                        name: g,
                        label: this.get("tra.voice_settings_push_to_talk"),
                        selected: this.get("isInputModePushToTalk")
                    }]
                })),
                isInputModeVoice: o.Ember.computed(_.property, (function() {
                    return this.get(_.property) === f
                })),
                isInputModePushToTalk: o.Ember.computed(_.property, (function() {
                    return this.get(_.property) === g
                })),
                inputModeVoiceSensitivityLabel: o.Ember.computed(h.property, (function() {
                    const e = Number.isInteger(this.get(h.property)) ? this.get(h.property) : h.defaultValue;
                    return this.get("tra.formatString")("voice_settings_input_sensitivity", {
                        sensitivity: e
                    })
                })),
                init() {
                    this._super(...arguments), this.bindSetting(c), this.bindSetting(u), this.bindSetting(d), this.bindSetting(m), this.bindSetting(p), this.bindSetting(_), this.bindSetting(h), this.bindSetting(E), this.bindSetting(v), l.observe(s, this, (e => {
                        const t = o.lodash.get(e, ["data", "voiceComplianceAgreementAuthorized"], !1);
                        this.set("voiceComplianceAgreementAuthorized", Boolean(t))
                    })), l.observe(r, this, (e => {
                        this.set("teamVoiceEnabledConfig", Boolean(e && e.enabled))
                    }))
                },
                willDestroy() {
                    this._super(...arguments), l.unobserve(s, this), l.unobserve(r, this)
                },
                resetToDefault: function() {
                    this.changeSetting(c.property, c.defaultValue), this.changeSetting(u.property, u.defaultValue), this.changeSetting(d.property, d.defaultValue), this.changeSetting(m.property, m.defaultValue), this.changeSetting(p.property, p.defaultValue), this.changeSetting(_.property, _.defaultValue), this.changeSetting(h.property, h.defaultValue), this.changeSetting(E.property, E.defaultValue), this.changeSetting(v.property, v.defaultValue)
                },
                _showPTTPermissionsModal() {
                    this.changeSetting(_.property, f);
                    const e = this.get("tra.voice_settings_push_to_talk_modal_header"),
                        t = this.get("tra.voice_settings_push_to_talk_modal_body"),
                        n = {
                            type: "DialogAlert",
                            data: {
                                contents: o.templateHelper.contentBlockDialog(e, t, "dialog-small", "voice-settings-push-to-talk-alert"),
                                okText: this.get("tra.voice_settings_push_to_talk_modal_confirm")
                            },
                            show: !0
                        };
                    o.ModalManager.add(n)
                },
                actions: {
                    selectPushToTalkKey: function(e) {
                        this.changeSetting(E.property, e)
                    },
                    selectPushToTalkTeamKey: function(e) {
                        this.changeSetting(v.property, e)
                    },
                    selectInputMode: function(e) {
                        this.changeSetting(_.property, e), e === g && this.get("voiceService").isPushToTalkAvailable(!0).then((e => {
                            e || this._showPTTPermissionsModal()
                        })).catch((() => {
                            this._showPTTPermissionsModal()
                        }))
                    },
                    selectCaptureDevice: function(e) {
                        this.changeSetting(m.property, e)
                    },
                    onSliderChange: function(e, t) {
                        this.changeSetting(e, t)
                    },
                    viewAgreement: function() {
                        o.SharedPlayerBehaviorApps.showCommunicationsAgreementModal()
                    }
                }
            });
            t.default = S
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(15)) && a.__esModule ? a : {
                    default: a
                };
            const s = o.dataBinding.bindTo(o.socket),
                r = "/lol-chat/v1/blocked-players",
                l = (e, t) => "string" == typeof e && "string" == typeof t && e.toUpperCase() === t.toUpperCase();
            var c = o.Ember.Controller.extend({
                blockedPlayers: o.Ember.computed.alias("model.blockedPlayers"),
                me: o.Ember.computed.alias("model.me"),
                delay: 2e3,
                working: !1,
                async blockPlayer({
                    gameName: e,
                    tagLine: t,
                    summonerName: n
                }) {
                    let a;
                    a = o.playerNames.isUsingAlias ? `${e} #${t}` : n;
                    const i = this.showBlockPlayerModal(a);
                    return await i.acceptPromise.then((async () => await this.executeBlockPlayer(a))).catch((() => null))
                },
                showBlockPlayerModal(e) {
                    const t = o.templateHelper.contentBlockDialog(o.tra.formatString("blocked_summoners_block_confirm_title"), o.tra.formatString("blocked_summoners_block_confirm_text", {
                        name: e
                    }), "dialog-medium", "confirm-friend-actions");
                    return o.ModalManager.add({
                        type: "DialogConfirm",
                        owner: this.namespace.rootElement,
                        data: {
                            contents: t,
                            acceptText: o.tra.get("blocked_summoners_block_button"),
                            declineText: o.tra.get("blocked_summoners_block_cancel"),
                            closeButton: !1
                        }
                    })
                },
                async executeBlockPlayer(e) {
                    const t = {
                        isSuccessful: !1,
                        error: null
                    };
                    try {
                        const n = await s.get(`/lol-summoner/v1/summoners?name=${encodeURIComponent(e)}`);
                        await s.post(r, {
                            summonerId: n.summonerId,
                            puuid: n.puuid
                        });
                        const a = await s.get(r, {
                            skipCache: !0
                        });
                        this.set("model.blockedPlayers", a), t.isSuccessful = !0
                    } catch (e) {
                        t.error = e
                    }
                    return t
                },
                validateGameNameAndTagLine(e, t) {
                    if (e.length < 3) return {
                        text: this.get("tra.block_system_message_name_too_short"),
                        displayOnGameName: !0,
                        isError: !0
                    };
                    const n = this.get("me");
                    if (l(e, n.gameName) && l(t, n.gameTag)) return {
                        text: this.get("tra.block_system_message_cannot_block_self"),
                        displayOnGameName: !0,
                        isError: !0
                    };
                    return (this.get("blockedPlayers") || []).find((n => l(n.gameName, e) && l(n.gameTag, t))) ? {
                        text: this.get("tra").formatString("block_system_message_already_blocked", {
                            name: `${e} #${t}`
                        }),
                        displayOnGameName: !0,
                        isError: !0
                    } : null
                },
                validateSummonerName: function(e) {
                    if (e.length < 3) return {
                        text: this.get("tra.block_system_message_name_too_short"),
                        displayOnGameName: !0,
                        isError: !0
                    };
                    const t = this.get("me");
                    if (l(e, t.name)) return {
                        text: this.get("tra.block_system_message_cannot_block_self"),
                        displayOnGameName: !0,
                        isError: !0
                    };
                    return (this.get("blockedPlayers") || []).find((t => t.name && t.name.toUpperCase() === e.toUpperCase())) ? {
                        text: this.get("tra").formatString("block_system_message_already_blocked", {
                            name: e
                        }),
                        displayOnGameName: !0,
                        isError: !0
                    } : null
                },
                actions: {
                    async enterKeyPressHandler(e) {
                        this.set("working", !0);
                        const t = await this.blockPlayer(e);
                        return this.set("working", !1), t
                    },
                    validationHandler({
                        gameName: e,
                        tagLine: t,
                        summonerName: n
                    }) {
                        return o.playerNames.isUsingAlias ? this.validateGameNameAndTagLine(e, t) : this.validateSummonerName(n)
                    },
                    successHandler() {
                        return {
                            text: this.get("tra.block_system_message_success_text"),
                            displayOnGameName: !0,
                            isError: !1
                        }
                    },
                    errorHandler({
                        gameName: e,
                        tagLine: t,
                        summonerName: n
                    }, a) {
                        if (!a) return null;
                        let i = "";
                        return i = o.playerNames.isUsingAlias ? `${e} #${t}` : n, {
                            text: this.get("tra").formatString("block_system_message_summoner_dne", {
                                name: i
                            }),
                            displayOnGameName: !0,
                            isError: !0
                        }
                    },
                    unblock(e) {
                        return s.delete(r + "/" + e).then((() => s.get(r, {
                            skipCache: !0
                        }))).then((e => {
                            i.default.unblockSuccess.play(), this.set("model.blockedPlayers", e)
                        }))
                    }
                }
            });
            t.default = c
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Controller.extend({
                    inputSettings: a.Ember.computed.alias("model.accountInputSettings.data"),
                    inputSettingsSchema: a.Ember.computed.alias("model.inputSettingsSchema"),
                    gameSettingsSchema: a.Ember.computed.alias("model.gameSettingsSchema"),
                    gameSettingsRemote: a.Ember.computed.alias("model.gameSettingsRemote"),
                    contentComponent: null,
                    resetToDefault: function() {
                        this.get("contentComponent") && this.get("contentComponent").resetToDefault()
                    },
                    actions: {
                        handleComponentInitialized: function(e) {
                            this.set("contentComponent", e)
                        }
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(269)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Controller.extend(i.default);
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = {
                    gameSettings: a.Ember.computed.alias("model.accountGameSettings.data"),
                    gameSettingsSchema: a.Ember.computed.alias("model.gameSettingsSchema"),
                    contentComponent: null,
                    resetToDefault: function() {
                        this.get("contentComponent") && this.get("contentComponent").resetToDefault()
                    },
                    actions: {
                        handleComponentInitialized: function(e) {
                            this.set("contentComponent", e)
                        }
                    }
                };
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(269)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Controller.extend(i.default);
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(269)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Controller.extend(i.default);
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(40)) && a.__esModule ? a : {
                    default: a
                };
            const s = {
                    model: "replaysSettings",
                    namespace: "lol-replays",
                    schemaVersion: 1,
                    property: "replays-folder-path",
                    scope: "local",
                    defaultValue: ""
                },
                r = {
                    model: "replaysSettings",
                    namespace: "lol-replays",
                    schemaVersion: 1,
                    property: "highlights-folder-path",
                    scope: "local",
                    defaultValue: ""
                };
            var l = o.Ember.Controller.extend(i.default, {
                replaysSettings: o.Ember.computed.alias("model"),
                replaysPath: o.Ember.computed(s.property, (function() {
                    return this.get(s.property)
                })),
                highlightsPath: o.Ember.computed(r.property, (function() {
                    return this.get(r.property)
                })),
                init() {
                    this._super(...arguments);
                    const e = [o.db.get("/lol-replays/v1/rofls/path/default"), o.db.get("/lol-highlights/v1/highlights-folder-path/default")];
                    Promise.all(e).then((e => {
                        s.defaultValue = e[0], r.defaultValue = e[1], this.bindSetting(s), this.bindSetting(r)
                    })).catch((e => {
                        o.logger.error("Failed to get default path for replays and highlights", e)
                    }))
                },
                resetToDefault: function() {
                    this.changeSetting(s.property, s.defaultValue), this.changeSetting(r.property, r.defaultValue)
                },
                _onChooserClick(e, t) {
                    const n = this;
                    window.riotInvoke({
                        request: JSON.stringify({
                            name: "File.RequestDirectoryPath",
                            params: [t, n.get("tra.label_replays_chooser_dialog_title"), n.get("tra.label_replays_chooser_dialog_button")]
                        }),
                        onSuccess: function(t) {
                            n.changeSetting(e, JSON.parse(t).result)
                        },
                        onFailure: function(e, t) {
                            o.logger.error("RequestDirectoryPath error", {
                                errorCode: e,
                                errorMessage: t
                            })
                        }
                    })
                },
                actions: {
                    changeReplaysFolderPath: function() {
                        this._onChooserClick(s.property, this.get("replaysPath"))
                    },
                    changeHighlightsFolderPath: function() {
                        this._onChooserClick(r.property, this.get("highlightsPath"))
                    }
                }
            });
            t.default = l
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Controller.extend({
                    privacyPolicyText: a.Ember.computed.alias("model.privacyPolicyText"),
                    actions: {
                        handleUrlClick(e) {
                            let t = e.target;
                            for (; t !== e.currentTarget;) {
                                if (t.hasAttribute("href")) return e.preventDefault(), void window.open(t.getAttribute("href"), "_blank");
                                t = t.parentNode
                            }
                        }
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Controller.extend({
                    licenseAgreementText: a.Ember.computed.alias("model.licenseAgreementText")
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Controller.extend({
                    versionInfo: a.Ember.computed.alias("model.versionInfo"),
                    licenseText: a.Ember.computed.alias("model.licenseText")
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Controller.extend({
                    patchService: a.Ember.inject.service("patch"),
                    lolTextShorthand: a.tra.get("navbar_league"),
                    tftTextShorthand: a.tra.get("navbar_tft"),
                    leagueClientVersion: a.Ember.computed.alias("model.leagueClientVersion"),
                    gameClientVersion: a.Ember.computed.alias("patchService.gameClientVersion"),
                    lolExternalPatchVersion: a.Ember.computed.alias("patchService.lolExternalPatchVersion"),
                    tftExternalPatchVersion: a.Ember.computed.alias("patchService.tftExternalPatchVersion"),
                    displayLegacyPatchNumbers: a.Ember.computed.alias("patchService.displayLegacyPatchNumbers"),
                    checkingForPatchesDisabled: a.Ember.computed.not("patchService.checkingForPatchesEnabled"),
                    clickCount: 0,
                    supportedGameReleasesEnabled: !1,
                    allSupportedGameReleases: {},
                    filteredSupportedGameReleases: {},
                    selectedRelease: null,
                    gamePatchWarning: "",
                    supportedGameSearchTerm: "",
                    init() {
                        const e = this.get("tra.lol_settings_version_game_client_start_patching");
                        this.set("gamePatchWarning", this.get("tra").formatString("lol_settings_version_game_client_patching_warning", {
                            value: e
                        }))
                    },
                    _getReleases() {
                        this.get("patchService").getSupportedGameReleases().then((e => {
                            this.set("allSupportedGameReleases", e.supported_game_releases), this.set("filteredSupportedGameReleases", e.supported_game_releases)
                        }))
                    },
                    actions: {
                        onGameClientVersionClick() {
                            const e = this.get("clickCount") + 1;
                            e > 4 && !this.get("supportedGameReleasesEnabled") ? (this._getReleases(), this.set("supportedGameReleasesEnabled", !0)) : this.set("clickCount", e)
                        },
                        onSearch() {
                            const e = this.get("supportedGameReleaseSearchTerm"),
                                t = this.get("allSupportedGameReleases").filter((t => t.artifact_id.includes(e)));
                            this.set("filteredSupportedGameReleases", t)
                        },
                        startPatchingRelease() {
                            const e = this.get("selectedRelease");
                            e && this.get("patchService").putGamePatchUrl(e.download.url).then((() => {
                                this._getReleases()
                            }))
                        },
                        refreshReleases() {
                            this._getReleases()
                        },
                        selectRelease(e) {
                            this.set("selectedRelease", e)
                        }
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Controller.extend({
                    persistence: a.Ember.inject.service(),
                    jpLegalStatementsRequired: a.Ember.computed("persistence.settingsConfig.isLegalStatementsEnabled", (function() {
                        return this.get("persistence.settingsConfig.isLegalStatementsEnabled")
                    }))
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Component.extend({
                    tagName: "",
                    modalManager: a.Ember.inject.service("modal-manager"),
                    currentCategory: a.Ember.computed.alias("modalManager.currentCategory"),
                    groupName: a.Ember.computed("currentCategory", (function() {
                        const e = this.get("currentCategory");
                        return e ? a.tra.get(e.group.capitalTitleKey) : ""
                    })),
                    categoryName: a.Ember.computed("currentCategory", (function() {
                        const e = this.get("currentCategory");
                        return e ? a.tra.get(e.titleKey) : ""
                    })),
                    canReset: a.Ember.computed("currentCategory", (function() {
                        const e = this.get("currentCategory");
                        return !(!e || !e.canReset)
                    })),
                    actions: {
                        showResetConfirmDialog(e) {
                            e.preventDefault();
                            const t = this.get("currentCategory");
                            if (t && t.canReset) {
                                a.ModalManager.add({
                                    type: "DialogConfirm",
                                    data: {
                                        contents: this._createConfirmDialog(),
                                        acceptText: a.tra.get("settings_restore_default_accept_button"),
                                        declineText: a.tra.get("settings_restore_default_decline_button"),
                                        closeButton: !1
                                    },
                                    owner: this.get("modalManager").rootElement
                                }).acceptPromise.then((() => {
                                    a.logger.trace("reset defaults"), this.get("handleResetToDefaultButtonClick")()
                                }), (() => a.logger.trace("cancel reset defaults")))
                            }
                        }
                    },
                    _createConfirmDialog() {
                        const e = document.createElement("lol-uikit-content-block");
                        e.setAttribute("type", "dialog-small");
                        const t = document.createElement("h6");
                        t.textContent = a.tra.get("settings_restore_default_title"), e.appendChild(t);
                        const n = document.createElement("p");
                        return n.textContent = a.tra.get("settings_restore_default_text"), e.appendChild(n), e
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Component.extend({
                    classNames: ["lol-settings-footer"],
                    modalManager: a.Ember.inject.service("modal-manager"),
                    actions: {
                        closeButtonClick() {
                            this.get("modalManager").close()
                        }
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Component.extend({
                    tagName: "",
                    group: null,
                    modalManager: a.Ember.inject.service("modal-manager"),
                    groupName: a.Ember.computed("group.titleKey", (function() {
                        const e = this.get("group.titleKey");
                        return this.get("tra").get(e)
                    })),
                    selectedIndex: a.Ember.computed("modalManager.currentCategory", "group", (function() {
                        const e = this.get("modalManager.currentCategory"),
                            t = this.get("group");
                        let n = -1;
                        return t.categories.forEach(((t, a) => {
                            t.name === e.name && (n = a)
                        })), n
                    }))
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Component.extend({
                    tagName: "",
                    category: null,
                    isDisabled: a.Ember.computed("category.computeds.disabled", (function() {
                        return !0 === this.get("category.computeds.disabled")
                    })),
                    categoryTitleKeyTra: a.Ember.computed("category.titleKey", (function() {
                        const e = this.get("category.titleKey");
                        return this.get("tra").get(e)
                    })),
                    actions: {
                        selectItem(e) {
                            this.get("goToSection")(e)
                        }
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Component.extend({
                    classNames: ["lol-blocked-player"],
                    player: null,
                    summonerName: a.Ember.computed.alias("player.name"),
                    gameName: a.Ember.computed.alias("player.gameName"),
                    gameTag: a.Ember.computed.alias("player.gameTag"),
                    unblocking: !1,
                    shouldDisplayRiotId: a.Ember.computed("gameName", "gameTag", (function() {
                        return ["gameName", "gameTag"].map((e => this.get(e))).every((e => e))
                    })),
                    actions: {
                        remove(e) {
                            this.get("unblocking") || (this.set("unblocking", !0), Promise.resolve(this.get("unblock")(e)).then((() => {
                                this.set("unblocking", !1)
                            })))
                        }
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = {
                targetAnchor: {
                    x: "center",
                    y: "bottom"
                },
                tooltipAnchor: {
                    x: "center",
                    y: "top"
                },
                offset: {
                    y: 5
                },
                showEvent: "nothing",
                hideEvent: "nothing",
                showDelay: 150,
                transitionSpeed: 150
            };
            var i = a.Ember.Component.extend({
                didInsertElement() {
                    this._super(...arguments), this.tooltipTarget = this.element.parentElement.querySelector(".block-list-settings-summoner-input"), a.TooltipManager.assign(this.tooltipTarget, this.element.querySelector("lol-uikit-tooltip"), null, o), this.sync()
                },
                didUpdateAttrs() {
                    this._super(...arguments), this.sync()
                },
                sync() {
                    if (this.hideTooltipTimer && a.Ember.run.cancel(this.hideTooltipTimer), this.hidingTooltipTimer) this.deferredSet = !0;
                    else if (this.set("_errorPacketLocal", this.get("errorPacket")), this.get("errorPacket")) {
                        const e = this.get("delay") || 2e3;
                        a.TooltipManager.show(this.tooltipTarget), this.hideTooltipTimer = a.Ember.run.later(this, (() => this.hideTooltip()), e)
                    } else this.hideTooltip()
                },
                hideTooltip() {
                    a.TooltipManager.hide(this.tooltipTarget), this.hidingTooltipTimer = a.Ember.run.later(this, (() => {
                        this.hidingTooltipTimer = null, this.deferredSet && (this.deferredSet = !1, this.sync())
                    }), 150)
                },
                willDestroyElement() {
                    this._super(...arguments), this.hideTooltipTimer && a.Ember.run.cancel(this.hideTooltipTimer), a.TooltipManager.unassign(this.tooltipTarget)
                }
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = "Volume",
                i = "General",
                s = "int",
                r = "boolean",
                l = "string",
                c = {
                    slider: {
                        propertyName: "MasterVolume",
                        dataSection: o,
                        dataType: s
                    },
                    checkbox: {
                        propertyName: "MasterMute",
                        dataSection: o,
                        dataType: r
                    }
                },
                u = [{
                    slider: {
                        propertyName: "MusicVolume",
                        dataSection: o,
                        dataType: s
                    },
                    checkbox: {
                        propertyName: "MusicMute",
                        dataSection: o,
                        dataType: r
                    }
                }, {
                    slider: {
                        propertyName: "AnnouncerVolume",
                        dataSection: o,
                        dataType: s
                    },
                    checkbox: {
                        propertyName: "AnnouncerMute",
                        dataSection: o,
                        dataType: r
                    }
                }, {
                    slider: {
                        propertyName: "VoiceVolume",
                        dataSection: o,
                        dataType: s
                    },
                    checkbox: {
                        propertyName: "VoiceMute",
                        dataSection: o,
                        dataType: r
                    }
                }, {
                    slider: {
                        propertyName: "SfxVolume",
                        dataSection: o,
                        dataType: s
                    },
                    checkbox: {
                        propertyName: "SfxMute",
                        dataSection: o,
                        dataType: r
                    }
                }, {
                    slider: {
                        propertyName: "NotificationsVolume",
                        dataSection: o,
                        dataType: s
                    },
                    checkbox: {
                        propertyName: "NotificationsMute",
                        dataSection: o,
                        dataType: r
                    }
                }, {
                    slider: {
                        propertyName: "AmbienceVolume",
                        dataSection: o,
                        dataType: s
                    },
                    checkbox: {
                        propertyName: "AmbienceMute",
                        dataSection: o,
                        dataType: r
                    }
                }, {
                    slider: {
                        propertyName: "PingsVolume",
                        dataSection: o,
                        dataType: s
                    },
                    checkbox: {
                        propertyName: "PingsMute",
                        dataSection: o,
                        dataType: r
                    }
                }],
                d = {
                    propertyName: "EnableAudio",
                    dataSection: i,
                    reverse: !0,
                    dataType: r,
                    defaultValue: !0
                },
                m = {
                    propertyName: "ThemeMusic",
                    dataSection: i,
                    dataType: l,
                    defaultValue: 0
                };
            var p = a.Ember.Component.extend({
                classNames: ["lol-settings-game-sound-content-component"],
                persistenceService: a.Ember.inject.service("persistence"),
                init() {
                    this._super(...arguments), this._registerSliderAndCheckbox(c), a.lodash.forEach(u, (e => {
                        a.logger.trace("register property " + e.slider.propertyName), this._registerSliderAndCheckbox(e)
                    })), this._registerComputedProperty(d), this.get("handleComponentInitialized") && this.get("handleComponentInitialized")(this)
                },
                resetToDefault() {
                    const e = {};
                    this._resetSlider(c.slider, e), this._resetCheckbox(c.checkbox, e), u.forEach((t => {
                        this._resetSlider(t.slider, e), this._resetCheckbox(t.checkbox, e)
                    })), this._resetCheckbox(d, e), this._resetDropdown(m, e), this._saveGameSettings(e)
                },
                _resetSlider(e, t) {
                    const {
                        propertyName: n,
                        dataSection: a,
                        dataType: o
                    } = e, i = this._getCurrentValueKey(n), s = this._getGameSettingSchemaKey(a, n);
                    let r;
                    void 0 !== this.get(s) && null !== this.get(s) && (r = this._getDisplayValue(this.get(s), o)), this.set(i, r);
                    this.$(`lol-uikit-slider[for=${n}]`)[0].setAttribute("value", r), this._appendSaveData(t, e, r)
                },
                _resetCheckbox(e, t) {
                    const {
                        propertyName: n,
                        dataSection: a,
                        dataType: o,
                        reverse: i,
                        defaultValue: s
                    } = e, r = this._getCurrentValueKey(n), l = this._getGameSettingSchemaKey(a, n);
                    let c;
                    void 0 !== this.get(l) && null !== this.get(l) ? c = this._getDisplayValue(this.get(l), o) : void 0 !== s && (c = s), this._appendSaveData(t, e, c), !0 === i && (c = !c), this.set(r, c);
                    this.$(`input[name='${n}']`)[0].checked = c
                },
                _resetDropdown(e, t) {
                    const {
                        propertyName: n,
                        dataSection: a,
                        defaultValue: o
                    } = e, i = this._getGameSettingSchemaKey(a, n), s = this.get(i) ?? o ?? 0;
                    this._appendSaveData(t, e, s), this.set(`gameSettings.${a}.${n}`, s)
                },
                _registerSliderAndCheckbox(e) {
                    this._registerComputedProperty(e.slider), this._registerComputedProperty(e.checkbox)
                },
                _registerComputedProperty(e) {
                    const {
                        propertyName: t,
                        dataSection: n,
                        dataType: o,
                        reverse: i
                    } = e, s = this._getCurrentValueKey(t), l = this._getGameSettingsKey(n, t), c = this._getGameSettingSchemaKey(n, t);
                    this.set(t, a.Ember.computed(l, c, (() => {
                        let e;
                        return void 0 !== this.get(l) && null !== this.get(l) ? e = this._getDisplayValue(this.get(l), o) : void 0 !== this.get(c) && null !== this.get(c) && (e = this._getDisplayValue(this.get(c), o)), o === r && !0 === i && (e = !e), this.set(s, e), a.logger.trace(`set ${t} value to ${e}`), e
                    })))
                },
                _bindEventListeners: a.Ember.on("didInsertElement", (function() {
                    this._bindMasterVolumeSliderAndCheckboxListeners(c), a.lodash.forEach(u, (e => {
                        this._bindSubVolumeSliderAndCheckboxListeners(e)
                    })), this._bindDisableAllAudioCheckboxListener(d), this._bindSRThemeMusicDropdown(m)
                })),
                _bindMasterVolumeSliderAndCheckboxListeners(e) {
                    this._bindSliderListener(e), this._bindMasterVolumeCheckboxListener(e.checkbox)
                },
                _bindSubVolumeSliderAndCheckboxListeners(e) {
                    this._bindSliderListener(e), this._bindSubVolumeCheckboxListener(e.checkbox)
                },
                _bindSliderListener(e) {
                    const t = e.slider.propertyName,
                        n = e.checkbox.propertyName,
                        a = this._getCurrentValueKey(t),
                        o = this._getCurrentValueKey(n),
                        i = this.$(`lol-uikit-slider[for='${t}']`)[0];
                    this.addObserver(o, this, (() => {
                        this.get(o) ? i.setAttribute("disabled", "") : i.removeAttribute("disabled")
                    })), i.addEventListener("slideEnd", (t => {
                        void 0 !== t.value && (this.set(a, t.value), this._saveProperty(e.slider, t.value))
                    })), i.addEventListener("change", (e => {
                        void 0 !== e.value && this.set(a, e.value)
                    }))
                },
                _bindMasterVolumeCheckboxListener(e) {
                    const t = e.propertyName,
                        n = this._getCurrentValueKey(t),
                        o = this.$(`input[name='${t}']`)[0],
                        i = this.$(`label[for='${t}'] > span`)[0];
                    this.addObserver(t, this, (() => {
                        o.checked = this.get(t), a.logger.trace(`update ${t} value to ${this.get(t)} by property update.`)
                    })), i.addEventListener("click", (() => {
                        o.checked = !o.checked;
                        const {
                            checked: i
                        } = o;
                        a.logger.trace(`update ${t} value to ${i} by clicking.`), this.set(n, i);
                        const s = {};
                        this._appendSaveData(s, e, i), u.forEach((e => {
                            const {
                                propertyName: t
                            } = e.checkbox, n = this._getCurrentValueKey(t), a = this.$(`input[name='${t}']`)[0];
                            a.checked !== i && (a.checked = i, this._appendSaveData(s, e.checkbox, i), this.set(n, i))
                        })), this._saveGameSettings(s)
                    })), o.checked = this.get(t)
                },
                _bindSubVolumeCheckboxListener(e) {
                    const t = e.propertyName,
                        n = this._getCurrentValueKey(t),
                        o = this.$(`input[name='${t}']`)[0],
                        i = this.$(`label[for='${t}'] > span`)[0];
                    this.addObserver(t, this, (() => {
                        o.checked = this.get(t), a.logger.trace(`update ${t} value to ${this.get(t)} by property update.`)
                    })), i.addEventListener("click", (() => {
                        o.checked = !o.checked;
                        const {
                            checked: i
                        } = o;
                        a.logger.trace(`update ${t} value to ${i} by clicking.`), this.set(n, i), this._saveProperty(e, i), this._checkMasterVolumeStatus()
                    })), o.checked = this.get(t)
                },
                _bindDisableAllAudioCheckboxListener(e) {
                    const t = e.propertyName,
                        n = this._getCurrentValueKey(t),
                        o = this.$(`input[name='${t}']`)[0];
                    this.addObserver(t, this, (() => {
                        o.checked = this.get(t), a.logger.trace(`update ${t} value to ${this.get(t)} by property update.`)
                    })), o.addEventListener("change", (() => {
                        const {
                            checked: i
                        } = o;
                        a.logger.trace(`update ${t} value to ${i} by clicking.`), this.set(n, i), this._saveProperty(e, !i)
                    })), o.checked = this.get(t)
                },
                _bindSRThemeMusicDropdown(e) {
                    const t = e.dataSection,
                        n = e.propertyName,
                        o = `#${n}`,
                        i = this.$(o)[0],
                        s = 0 | this.get(`gameSettings.${t}.${n}`);
                    null != s && i.select && i.select(s.toString()), a.Ember.addObserver(this, `gameSettings.${t}.${n}`, this, (() => {
                        const e = 0 | this.get(`gameSettings.${t}.${n}`);
                        null != e && i.select && i.select(e.toString())
                    })), i.addEventListener("selected", (a => {
                        this.set(`gameSettings.${t}.${n}`, a.selected.attributes.value.value), this._saveProperty(e, Number(a.selected.attributes.value.value))
                    }))
                },
                _checkMasterVolumeStatus() {
                    const e = c.checkbox.propertyName,
                        t = this._getCurrentValueKey(e),
                        n = this.$(`input[name='${e}']`)[0];
                    let o = !0;
                    u.forEach((e => {
                        this.$(`input[name='${e.checkbox.propertyName}']`)[0].checked || (o = !1)
                    })), (o && !n.checked || !o && n.checked) && (n.checked = !n.checked, this.set(t, n.checked), this._saveProperty(c.checkbox, n.checked), a.logger.trace(`Update overall volume to ${n.checked}, because should disable is ${o}`))
                },
                _saveProperty(e, t) {
                    const n = this._getSaveValue(t, e.dataType),
                        a = {};
                    a[e.propertyName] = n, this._savePropertyWithSection(e.dataSection, a)
                },
                _savePropertyWithSection(e, t) {
                    const n = {};
                    n[e] = t, this._saveGameSettings(n)
                },
                _appendSaveData(e, t, n) {
                    void 0 === e[t.dataSection] && (e[t.dataSection] = {}), e[t.dataSection][t.propertyName] = this._getSaveValue(n, t.dataType)
                },
                _getSaveValue: (e, t) => t === r ? e ? 1 : 0 : t === s ? e / 100 : t === l ? e : void a.logger.error(`Unknown data type ${t} with value ${e}`),
                _getDisplayValue: (e, t) => t === r ? a.lodash.isBoolean(e) ? e : 0 !== e : t === s ? parseInt(100 * e) : void a.logger.error(`Unknown data type ${t} with value ${e}`),
                _getGameSettingsKey: (e, t) => `gameSettings.${e}.${t}`,
                _getGameSettingSchemaKey: (e, t) => `gameSettingsSchema.${e}.${t}.default`,
                _getCurrentValueKey: e => `${e}CurrentValue`,
                _saveGameSettings(e) {
                    this.get("persistenceService").saveGameSettings(e)
                }
            });
            t.default = p
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = [{
                    propertyName: "LOL_SETTINGS_INGAME_INTERFACE_HUD_SCALE",
                    section: "HUD",
                    dataKey: "GlobalScale",
                    scale: 100
                }, {
                    propertyName: "LOL_SETTINGS_INGAME_INTERFACE_CHAT_SCALE",
                    section: "HUD",
                    dataKey: "ChatScale",
                    scale: 1
                }, {
                    propertyName: "LOL_SETTINGS_INGAME_INTERFACE_MINIMAP_SCALE",
                    section: "HUD",
                    dataKey: "MinimapScale",
                    scale: 100
                }, {
                    propertyName: "LOL_SETTINGS_INGAME_INTERFACE_OBJECTIVE_PLANNING_SCALE",
                    section: "HUD",
                    dataKey: "ObjectiveVoteScale",
                    scale: 100
                }],
                i = [{
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_RESOURCE_BARS_SECTION_TITLE",
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_HEALTH_BARS",
                        section: "HUD",
                        dataKey: "DrawHealthBars",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_LOSS_OF_CONTROL_UI",
                        section: "LossOfControl",
                        dataKey: "LossOfControlEnabled",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_ENABLE_HUD_ANIMATIONS",
                        section: "Performance",
                        dataKey: "EnableHUDAnimations",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_HEALTH_BAR_SHAKE",
                        section: "HUD",
                        dataKey: "ShowHealthBarShake",
                        leftColumn: !1
                    }],
                    dropdowns: [{
                        title: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_NAMES_ABOVE_HEALTHBAR",
                        section: "HUD",
                        dataKey: "ShowSummonerNames",
                        options: [{
                            title: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_NAMES_ABOVE_HEALTHBAR_NONE"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_NAMES_ABOVE_HEALTHBAR_SUMMONER_NAME"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_NAMES_ABOVE_HEALTHBAR_CHAMPION_NAME"
                        }]
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_NOTIFICATIONS_SECTION_TITLE",
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SCREEN_FLASH",
                        section: "HUD",
                        dataKey: "FlashScreenWhenDamaged",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_FLASH",
                        section: "HUD",
                        dataKey: "FlashScreenWhenStunned",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_GODRAY",
                        section: "General",
                        dataKey: "ShowGodray",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_OFF_SCREEN_POINTS_OF_INTEREST",
                        section: "HUD",
                        dataKey: "ShowOffScreenPointsOfInterest",
                        leftColumn: !1
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_ABILITY_DISPLAY_SECTION_TITLE",
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_AUTO_DISPLAY_TARGET",
                        section: "HUD",
                        dataKey: "AutoDisplayTarget",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_ENABLE_LINE_MISSILE_MIS",
                        section: "HUD",
                        dataKey: "EnableLineMissileVis",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_ATTACK_RADIUS",
                        section: "HUD",
                        dataKey: "ShowAttackRadius",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_DISABLE_HUD_SPELL_CLICK",
                        section: "HUD",
                        dataKey: "DisableHudSpellClick",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_SPELL_COSTS",
                        section: "HUD",
                        dataKey: "ShowSpellCosts",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_SPELL_RECOMMENDATIONS",
                        section: "HUD",
                        dataKey: "ShowSpellRecommendations",
                        leftColumn: !1
                    }],
                    dropdowns: [{
                        title: "LOL_SETTINGS_INGAME_INTERFACE_ABILITY_COOLDOWN_DISPLAY",
                        section: "HUD",
                        dataKey: "NumericCooldownFormat",
                        options: [{
                            title: "LOL_SETTINGS_INGAME_INTERFACE_NUMERIC_COOLDOWN_NONE"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_NUMERIC_COOLDOWN_SECONDS"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_NUMERIC_COOLDOWN_MINUTES_SECONDS"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_NUMERIC_COOLDOWN_MINUTES"
                        }]
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_MINIMAP_SECTION_TITLE",
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_NEUTRAL_CAMPS",
                        section: "HUD",
                        dataKey: "ShowNeutralCamps",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_FLIP_MINI_MAP",
                        section: "HUD",
                        dataKey: "FlipMiniMap",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_MINIMAP_MOVE_SELF",
                        section: "HUD",
                        dataKey: "MinimapMoveSelf",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_MINIMAP_ENABLE_ALL_TIMERS",
                        section: "HUD",
                        dataKey: "MinimapEnableAllTimers",
                        leftColumn: !1
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_SCOREBOARD_SECTION_TITLE",
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_MIRRORED_SCOREBOARD",
                        section: "HUD",
                        dataKey: "MirroredScoreboard",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_SUMMONER_NAMES_IN_SCOREBOARD",
                        section: "HUD",
                        dataKey: "ShowSummonerNamesInScoreboard",
                        leftColumn: !1
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_TEAM_FRAMES_SECTION_TITLE",
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_TEAM_FRAMES_ON_LEFT",
                        section: "HUD",
                        dataKey: "ShowTeamFramesOnLeft",
                        leftColumn: !0
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_CHAT_SECTION_TITLE",
                    dropdowns: [{
                        title: "LOL_SETTINGS_INGAME_INTERFACE_CHANGE_CHAT_VISIBILITY",
                        section: "HUD",
                        dataKey: "ChatChannelVisibility",
                        leftColumn: !0,
                        options: [{
                            title: "LOL_SETTINGS_INGAME_INTERFACE_CHAT_VISIBILITY_PREMADE"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_CHAT_VISIBILITY_ALLY"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_CHAT_VISIBILITY_ALL"
                        }]
                    }],
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SHOW_TIMESTAMPS",
                        section: "HUD",
                        dataKey: "ShowTimestamps",
                        leftColumn: !1
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_EMOTES_SECTION_TITLE",
                    dropdowns: [{
                        title: "LOL_SETTINGS_INGAME_INTERFACE_EMOTE_BUBBLE_DISPLAY",
                        section: "HUD",
                        dataKey: "EmotePopupUIDisplayMode",
                        options: [{
                            title: "LOL_SETTINGS_INGAME_INTERFACE_EMOTE_BUBBLE_DISPLAY_ON"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_EMOTE_BUBBLE_DISPLAY_MUTE_SOUND"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_EMOTE_BUBBLE_DISPLAY_OFF"
                        }]
                    }, {
                        title: "LOL_SETTINGS_INGAME_INTERFACE_EMOTE_SIZE",
                        section: "HUD",
                        dataKey: "EmoteSize",
                        options: [{
                            title: "LOL_SETTINGS_INGAME_INTERFACE_EMOTE_SIZE_NORMAL"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_EMOTE_SIZE_SMALL"
                        }]
                    }],
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_MUTE_ENEMY_EMOTES",
                        section: "HUD",
                        dataKey: "HideEnemySummonerEmotes",
                        leftColumn: !0
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_RECIPROCITY_SECTION_TITLE",
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_MUTE_RECIPROCITY",
                        section: "HUD",
                        dataKey: "HideReciprocityFist",
                        leftColumn: !1
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_ETERNALS_SECTION_TITLE",
                    dropdowns: [{
                        title: "LOL_SETTINGS_INGAME_INTERFACE_ETERNALS_DISPLAY",
                        section: "HUD",
                        dataKey: "EternalsMilestoneDisplayMode",
                        options: [{
                            title: "LOL_SETTINGS_INGAME_INTERFACE_ETERNALS_ALL"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_ETERNALS_SELF_AND_TEAM_ONLY"
                        }, {
                            title: "LOL_SETTINGS_INGAME_INTERFACE_ETERNALS_NONE"
                        }]
                    }]
                }, {
                    sectionName: "LOL_SETTINGS_INGAME_INTERFACE_COMBAT_TEXT_SECTION_TITLE",
                    options: [{
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_PHYSICAL_DAMAGE_ENABLED",
                        section: "FloatingText",
                        dataKey: "Damage_Enabled",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_HEAL_ENABLED",
                        section: "FloatingText",
                        dataKey: "Heal_Enabled",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_GOLD_ENABLED",
                        section: "FloatingText",
                        dataKey: "Gold_Enabled",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_INVULNERABLE_ENABLED",
                        section: "FloatingText",
                        dataKey: "Invulnerable_Enabled",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_QUEST_ENABLED",
                        section: "FloatingText",
                        dataKey: "QuestReceived_Enabled",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_MANA_DAMAGE_ENABLED",
                        section: "FloatingText",
                        dataKey: "ManaDamage_Enabled",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_ENEMY_PHYSICAL_DAMAGE_ENABLED",
                        section: "FloatingText",
                        dataKey: "EnemyDamage_Enabled",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_DODGE_ENABLED",
                        section: "FloatingText",
                        dataKey: "Dodge_Enabled",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_LEVEL_ENABLED",
                        section: "FloatingText",
                        dataKey: "Level_Enabled",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SPECIAL_ENABLED",
                        section: "FloatingText",
                        dataKey: "Special_Enabled",
                        leftColumn: !1
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_SCORE_ENABLED",
                        section: "FloatingText",
                        dataKey: "Score_Enabled",
                        leftColumn: !0
                    }, {
                        propertyName: "LOL_SETTINGS_INGAME_INTERFACE_EXPERIENCE_ENABLED",
                        section: "FloatingText",
                        dataKey: "Experience_Enabled",
                        leftColumn: !1
                    }]
                }];
            var s = a.Ember.Component.extend({
                classNames: ["lol-settings-game-interface-content-component"],
                persistenceService: a.Ember.inject.service("persistence"),
                scaleDisplays: a.Ember.Object.create(),
                checkBoxGroups: a.Ember.A(i),
                init() {
                    this._super(...arguments), this.get("handleComponentInitialized") && this.get("handleComponentInitialized")(this)
                },
                resetToDefault() {
                    const e = {
                        HUD: {},
                        LossOfControl: {},
                        Performance: {},
                        General: {},
                        FloatingText: {}
                    };
                    a.lodash.forEach(o, (t => {
                        const n = this._getGameSettingSchemaKey(t.section, t.dataKey);
                        e[t.section][t.dataKey] = this.get(n), this.set(`gameSettings.${t.section}.${t.dataKey}`, e[t.section][t.dataKey])
                    })), a.lodash.forEach(i, (t => {
                        a.lodash.forEach(t.options, (t => {
                            const n = this._getGameSettingSchemaKey(t.section, t.dataKey);
                            e[t.section][t.dataKey] = this.get(n), this.set(`gameSettings.${t.section}.${t.dataKey}`, e[t.section][t.dataKey])
                        })), a.lodash.forEach(t.dropdowns, (t => {
                            const n = this._getGameSettingSchemaKey(t.section, t.dataKey);
                            e[t.section][t.dataKey] = this.get(n), this.set(`gameSettings.${t.section}.${t.dataKey}`, e[t.section][t.dataKey])
                        }))
                    })), this._saveGameSettings(e)
                },
                _getGameSettingSchemaKey: (e, t) => `gameSettingsSchema.${e}.${t}.default`,
                addListenersOnInserted: a.Ember.on("didInsertElement", (function() {
                    a.lodash.forEach(o, (e => {
                        this.setUpSlider(e)
                    })), a.lodash.forEach(i, (e => {
                        a.lodash.forEach(e.options, (e => {
                            this.setUpComputedProperty(e)
                        })), a.lodash.forEach(e.dropdowns, (e => {
                            this.setUpDropdown(e)
                        }))
                    }))
                })),
                setUpSlider(e) {
                    a.Ember.addObserver(this, `gameSettings.${e.section}.${e.dataKey}`, this, (() => {
                        const t = this.get(`gameSettings.${e.section}.${e.dataKey}`);
                        this.get("scaleDisplays").set(e.dataKey, Math.round(t * e.scale))
                    }));
                    const t = this.get(`gameSettings.${e.section}.${e.dataKey}`);
                    this.get("scaleDisplays").set(e.dataKey, Math.round(t * e.scale));
                    const n = this.$(`lol-uikit-slider[for="${e.dataKey}"]`)[0];
                    e.slider = n, n.addEventListener("slideEnd", (t => {
                        if (void 0 !== t.value) {
                            const n = {};
                            n[e.dataKey] = t.value / (1 * e.scale);
                            const a = {};
                            a[e.section] = n, this.set(`gameSettings.${e.section}.${e.dataKey}`, t.value / (1 * e.scale)), this._saveGameSettings(a)
                        }
                    })), n.addEventListener("change", (t => {
                        void 0 !== t.value && this.get("scaleDisplays").set(e.dataKey, Math.round(t.value))
                    }))
                },
                saveChange(e, t, n) {
                    const a = {};
                    a[t] = n;
                    const o = {};
                    o[e] = a, this._saveGameSettings(o)
                },
                setUpComputedProperty(e) {
                    const t = this;
                    this.set(e.dataKey, a.Ember.computed(`gameSettings.${e.section}.${e.dataKey}`, {
                        get: () => t.get(`gameSettings.${e.section}.${e.dataKey}`),
                        set: (n, a) => (t.set(`gameSettings.${e.section}.${e.dataKey}`, a), t.saveChange(e.section, e.dataKey, a), a)
                    }))
                },
                setUpDropdown(e) {
                    const t = "#" + e.dataKey,
                        n = this.$(t)[0],
                        o = this.get(`gameSettings.${e.section}.${e.dataKey}`);
                    null != o && n.select(o.toString()), a.Ember.addObserver(this, `gameSettings.${e.section}.${e.dataKey}`, this, (() => {
                        const t = this.get(`gameSettings.${e.section}.${e.dataKey}`);
                        null != t && n.select(t.toString())
                    })), n.addEventListener("selected", (t => {
                        this.set(`gameSettings.${e.section}.${e.dataKey}`, t.selected.attributes.value.value), this.saveChange(e.section, e.dataKey, t.selected.attributes.value.value)
                    }))
                },
                _saveGameSettings(e) {
                    this.get("persistenceService").saveGameSettings(e)
                }
            });
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = n(19);
            const i = [{
                    roundToFive: function(e) {
                        if (void 0 === e || isNaN(e) || 0 === e) return e;
                        for (; e % 5 != 0;) e++;
                        return e > 100 && (e = 100), e
                    },
                    transformMouseRange: function(e, t, n) {
                        const a = Math.floor((e - 1) / (t - 1) * (n - 1) + 1);
                        return a < 0 ? 0 : a
                    },
                    section: "General",
                    dataKey: "GameMouseSpeed",
                    transformSet: function(e) {
                        return this.transformMouseRange(e, 100, 20)
                    },
                    transformGet: function(e) {
                        return this.roundToFive(this.transformMouseRange(e, 20, 100))
                    }
                }, {
                    section: "HUD",
                    dataKey: "MapScrollSpeed",
                    transformSet: function(e) {
                        return e / 100
                    },
                    transformGet: function(e) {
                        return Math.round(100 * e)
                    }
                }, {
                    section: "HUD",
                    dataKey: "KeyboardScrollSpeed",
                    transformSet: function(e) {
                        return e / 100
                    },
                    transformGet: function(e) {
                        return Math.round(100 * e)
                    }
                }],
                s = [{
                    section: "General",
                    dataKey: "OSXMouseAcceleration"
                }, {
                    section: "General",
                    dataKey: "SnapCameraOnRespawn"
                }, {
                    section: "HUD",
                    dataKey: "ScrollSmoothingEnabled"
                }, {
                    section: "HUD",
                    dataKey: "MiddleClickDragScrollEnabled"
                }, {
                    section: "General",
                    dataKey: "AutoAcquireTarget"
                }, {
                    section: "General",
                    dataKey: "PredictMovement"
                }, {
                    section: "General",
                    dataKey: "ShowTurretRangeIndicators"
                }, {
                    section: "General",
                    dataKey: "EnableTargetedAttackMove"
                }, {
                    section: "General",
                    dataKey: "RecommendJunglePaths"
                }, {
                    section: "General",
                    dataKey: "ClampCastTargetLocationWithinMaxRange"
                }, {
                    section: "General",
                    dataKey: "TargetChampionsOnlyAsToggle"
                }],
                r = [{
                    section: "HUD",
                    dataKey: "CameraLockMode"
                }];
            var l = a.Ember.Component.extend({
                classNames: ["lol-settings-game-gameplay-content-component"],
                persistenceService: a.Ember.inject.service("persistence"),
                namespace: "lol-in-game-gameplay",
                category: "lol-in-game-gameplay",
                sliders: a.Ember.Object.create(),
                _roundToFive: i[0].roundToFive,
                _transformMouseRange: i[0].transformMouseRange,
                init() {
                    this._super(...arguments), this.get("handleComponentInitialized") && this.get("handleComponentInitialized")(this)
                },
                resetToDefault() {
                    const e = {};
                    e.General = this.resetGeneralContent(), e.HUD = this.resetHudContent(), this._saveGameSettings(e)
                },
                addListenersOnInserted: a.Ember.on("didInsertElement", (function() {
                    for (const e of s) this.setUpCheckbox(e);
                    for (const e of i) this.setUpSlider(e);
                    for (const e of r) this.setUpDropdown(e)
                })),
                setUpSlider(e) {
                    const t = this.get(`gameSettings.${e.section}.${e.dataKey}`);
                    this.get("sliders").set(e.dataKey, e.transformGet(t));
                    const n = this.$(`lol-uikit-slider[for="${e.dataKey}"]`)[0];
                    e.slider = n, n.addEventListener("slideEnd", (t => {
                        if (void 0 !== t.value) {
                            const n = {};
                            n[e.dataKey] = e.transformSet(t.value);
                            const a = {};
                            a[e.section] = n, this.set(`gameSettings.${e.section}.${e.dataKey}`, e.transformSet(t.value)), this._saveGameSettings(a)
                        }
                    })), n.addEventListener("change", (t => {
                        void 0 !== t.value && this.get("sliders").set(e.dataKey, Math.round(t.value))
                    }))
                },
                setUpCheckbox(e) {
                    const t = this;
                    this.set(e.dataKey, a.Ember.computed(`gameSettings.${e.section}.${e.dataKey}`, {
                        get: () => t.get(`gameSettings.${e.section}.${e.dataKey}`),
                        set: (n, a) => t.saveSetting(e.section, e.dataKey, a)
                    }))
                },
                setUpDropdown(e) {
                    const t = this.$(`#${e.dataKey}`)[0];
                    if (!t) return;
                    const n = `gameSettings.${e.section}.${e.dataKey}`,
                        o = () => {
                            const e = this.get(n);
                            null != e && t.select && t.select(e.toString())
                        };
                    a.Ember.run.scheduleOnce("afterRender", this, o), a.Ember.addObserver(this, n, this, o), t.addEventListener("selected", (t => {
                        this.set(n, t.selected.attributes.value.value), this.saveSetting(e.section, e.dataKey, Number(t.selected.attributes.value.value))
                    }))
                },
                resetGeneralContent() {
                    const e = {};
                    return e.OSXMouseAcceleration = this.get("gameSettingsSchema.General.OSXMouseAcceleration.default"), this.set("gameSettings.General.OSXMouseAcceleration", e.OSXMouseAcceleration), e.RecommendJunglePaths = this.get("gameSettingsSchema.General.RecommendJunglePaths.default"), this.set("gameSettings.General.RecommendJunglePaths", e.RecommendJunglePaths), e.GameMouseSpeed = this.get("gameSettingsSchema.General.GameMouseSpeed.default"), this.set("gameSettings.General.GameMouseSpeed", e.GameMouseSpeed), this.get("sliders").set(i[0].dataKey, i[0].transformGet(e.GameMouseSpeed)), e.SnapCameraOnRespawn = this.get("gameSettingsSchema.General.SnapCameraOnRespawn.default"), this.set("gameSettings.General.SnapCameraOnRespawn", e.SnapCameraOnRespawn), e.AutoAcquireTarget = this.get("gameSettingsSchema.General.AutoAcquireTarget.default"), this.set("gameSettings.General.AutoAcquireTarget", e.AutoAcquireTarget), e.PredictMovement = this.get("gameSettingsSchema.General.PredictMovement.default"), this.set("gameSettings.General.PredictMovement", e.PredictMovement), e.ShowTurretRangeIndicators = this.get("gameSettingsSchema.General.ShowTurretRangeIndicators.default"), this.set("gameSettings.General.ShowTurretRangeIndicators", e.ShowTurretRangeIndicators), e.EnableTargetedAttackMove = this.get("gameSettingsSchema.General.EnableTargetedAttackMove.default"), this.set("gameSettings.General.EnableTargetedAttackMove", e.EnableTargetedAttackMove), e.ClampCastTargetLocationWithinMaxRange = this.get("gameSettingsSchema.General.ClampCastTargetLocationWithinMaxRange.default"), this.set("gameSettings.General.ClampCastTargetLocationWithinMaxRange", e.ClampCastTargetLocationWithinMaxRange), e.TargetChampionsOnlyAsToggle = this.get("gameSettingsSchema.General.TargetChampionsOnlyAsToggle.default"), this.set("gameSettings.General.TargetChampionsOnlyAsToggle", e.TargetChampionsOnlyAsToggle), e
                },
                resetHudContent() {
                    const e = {};
                    return e.MapScrollSpeed = this.get("gameSettingsSchema.HUD.MapScrollSpeed.default"), this.set("gameSettings.HUD.MapScrollSpeed", e.MapScrollSpeed), this.get("sliders").set(i[1].dataKey, i[1].transformGet(e.MapScrollSpeed)), e.KeyboardScrollSpeed = this.get("gameSettingsSchema.HUD.KeyboardScrollSpeed.default"), this.set("gameSettings.HUD.KeyboardScrollSpeed", e.KeyboardScrollSpeed), this.get("sliders").set(i[2].dataKey, i[2].transformGet(e.KeyboardScrollSpeed)), e.ScrollSmoothingEnabled = this.get("gameSettingsSchema.HUD.ScrollSmoothingEnabled.default"), this.set("gameSettings.HUD.ScrollSmoothingEnabled", e.ScrollSmoothingEnabled), e.MiddleClickDragScrollEnabled = this.get("gameSettingsSchema.HUD.MiddleClickDragScrollEnabled.default"), this.set("gameSettings.HUD.MiddleClickDragScrollEnabled", e.MiddleClickDragScrollEnabled), e.CameraLockMode = this.get("gameSettingsSchema.HUD.CameraLockMode.default"), this.set("gameSettings.HUD.CameraLockMode", e.CameraLockMode), e
                },
                showUseSoftwareMouse: !(0, o.isWindows)(),
                isWindows: (0, o.isWindows)(),
                isOSX: !(0, o.isWindows)(),
                saveSetting: function(e, t, n) {
                    const a = {};
                    a[t] = n;
                    const o = {};
                    return o[e] = a, this.set(`gameSettings.${e}.${t}`, n), this._saveGameSettings(o), n
                },
                _saveGameSettings(e) {
                    this.get("persistenceService").saveGameSettings(e)
                }
            });
            t.default = l
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = a.Ember.Component.extend({
                    classNameBindings: ["openStyle"],
                    classNames: ["additional-hotkeys-section"],
                    tab: null,
                    isOpen: !1,
                    openStyle: a.Ember.computed("isOpen", (function() {
                        return this.get("isOpen") ? "open" : ""
                    })),
                    headerText: a.Ember.computed("tab.name", (function() {
                        return this.get("tra." + this.get("tab.name"))
                    })),
                    actions: {
                        toggle: function() {
                            this.set("isOpen", !this.get("isOpen"))
                        },
                        showKeybindingDialog: function(e, t, n) {
                            this.get("showKeybindingDialog")(e, t, n)
                        }
                    }
                });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(289)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Component.extend(i.default, {
                namespace: "lol-in-game-hotkeys",
                category: "lol-in-game-hotkeys",
                additionalHotkeyGroups: o.Ember.A(n(290)),
                actions: {
                    showKeybindingDialog(e, t, n) {
                        this.showKeybindingDialog(e, t, n)
                    }
                }
            });
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = n(19);
            var i = a.Ember.Mixin.create({
                persistenceService: a.Ember.inject.service("persistence"),
                tempSavedValue: void 0,
                saveKeybinding: function(e, t, n, a) {
                    if (this._removeDuplicateKeybindings(e, t, n, a), 0 === n) this._saveInputSettings(e, t, a);
                    else {
                        const o = this._getKeyArrayForTwoKeySets(e, t);
                        o[n - 1] = a;
                        const i = (o[0] ? o[0] : "") + "," + (o[1] ? o[1] : "");
                        this._saveInputSettings(e, t, i)
                    }
                },
                _saveInputSettings: function(e, t, n) {
                    const a = {};
                    a[t] = n;
                    const o = {};
                    o[e] = a, this.set(`inputSettings.${e}.${t}`, n), this.get("persistenceService").saveGameInputSettings(o)
                },
                _getKeyArrayForTwoKeySets: function(e, t) {
                    const n = this.get(`inputSettings.${e}.${t}`);
                    let a = [];
                    return void 0 !== n && (a = (0, o.fromSavedToArray)(n), 1 === a.length && (a[1] = "")), a
                },
                _removeDuplicateKeybindings: function(e, t, n, a) {
                    const i = this.get("keyToActionReverseMap"),
                        s = (0, o.normalizeKeybindingString)(a);
                    if ("[<unbound>]" !== s && "" !== s) {
                        const r = i[s];
                        if (r) {
                            const e = this.get(`inputSettings.${r}`);
                            let t = [];
                            void 0 !== e && (t = (0, o.fromSavedToArray)(e)), this._removeDuplicateInSet(t, a), this.set(`inputSettings.${r}`, this._combineKeyArray(t))
                        }
                        i[s] = `${e}.${t}`, this._cleanupKeyToActionReverseMap(i, e, t, n)
                    }
                },
                _cleanupKeyToActionReverseMap: function(e, t, n, a) {
                    const i = this.get(`inputSettings.${t}.${n}`);
                    if (i) {
                        let t = "";
                        if (0 === a) t = i;
                        else {
                            let e = [];
                            e = (0, o.fromSavedToArray)(i), 1 === e.length && (e[1] = ""), t = e[a - 1]
                        }
                        const n = (0, o.normalizeKeybindingString)(t);
                        "[<unbound>]" !== n && "" !== n && delete e[n]
                    }
                },
                _combineKeyArray: function(e) {
                    return 1 === e.length ? e[0] ? e[0] : "" : (e[0] ? e[0] : "") + "," + (e[1] ? e[1] : "")
                },
                _removeDuplicateInSet: function(e, t) {
                    const n = (0, o.normalizeKeybindingString)(t);
                    for (let t = 0; t < e.length; t++)(0, o.normalizeKeybindingString)(e[t]) === n && (e[t] = "")
                },
                _keyDisplayForDialog: function(e) {
                    return e || this.get("tra.LOL_SETTINGS_INGAME_HOTKEYS_UNBIND_BUTTON")
                },
                _createDialogContentDiv: function(e, t, n, a) {
                    const i = document.createElement("lol-uikit-content-block");
                    i.setAttribute("type", "dialog-small");
                    const s = document.createElement("div");
                    s.classList.add("lol-settings-ingame-section-title"), s.textContent = this.get("tra.LOL_INGAME_SETTINGS_KB_DIALOG_TITLE");
                    const r = document.createElement("div");
                    r.textContent = a;
                    const l = document.createElement("p");
                    l.appendChild(s), l.appendChild(r);
                    const c = document.createElement("div");
                    c.classList.add("lol-settings-ingame-keybind-dialog-key-label");
                    const u = [];
                    u[0] = this.get(`inputSettings.${e}.${t}`), null === u[0] && (u[0] = "[<Unbound>]"), 0 !== n && (u[1] = n), c.textContent = (0, o.formatAdditionalKeyBindings)(u);
                    const d = document.createElement("button");
                    return d.classList.add("lol-settings-ingame-keybind-dialog-unbind-button"), d.innerHTML = this.get("tra.LOL_SETTINGS_INGAME_HOTKEYS_UNBIND_BUTTON"), c.textContent ? (c.setAttribute("empty", !1), d.disabled = !1) : (c.setAttribute("empty", !0), c.textContent = this.get("tra.LOL_SETTINGS_INGAME_HOTKEYS_EMPTY"), d.disabled = !0), l.appendChild(c), l.appendChild(d), i.appendChild(l), {
                        contentDiv: i,
                        keybindDiv: c,
                        unbindButton: d
                    }
                },
                showKeybindingDialog: function(e, t, n) {
                    let i = "";
                    if (this.set("tempSavedValue", void 0), 0 === n) {
                        const e = this.get("tra.formatString");
                        i = e("LOL_INGAME_SETTINGS_KB_DIALOG_PRIMARY", {
                            action: this.get(`tra.LOL_INGAME_SETTINGS_KB_KEY_${t.toUpperCase()}`)
                        })
                    } else i = this.get(`tra.LOL_INGAME_SETTINGS_KB_KEY_${t.toUpperCase()}`);
                    const s = this._createDialogContentDiv(e, t, n, i),
                        {
                            keybindDiv: r
                        } = s,
                        {
                            unbindButton: l
                        } = s,
                        c = a.ModalManager.add({
                            type: "DialogConfirm",
                            data: {
                                contents: s.contentDiv,
                                acceptText: this.get("tra.LOL_SETTINGS_INGAME_HOTKEYS_SAVE_BUTTON"),
                                declineText: this.get("tra.LOL_SETTINGS_INGAME_HOTKEYS_CANCEL_BUTTON")
                            },
                            owner: this.element
                        }),
                        u = e => {
                            let t = e.button;
                            if (0 === e.button) {
                                if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) return;
                                t = 1
                            } else 1 === e.button ? t = 3 : 3 === e.button ? t = 4 : 4 === e.button && (t = 5);
                            const n = (0, o.getModifiersPrefix)(e) + "[Button " + t + "]";
                            this.set("tempSavedValue", n), r.textContent = (0, o.formatAdditionalKeyBindings)([n]), r.setAttribute("empty", !1), l.disabled = !1, c.enableAcceptButton()
                        };
                    c.disableAcceptButton(), c.acceptPromise.then((() => {
                        document.removeEventListener("mousedown", u), void 0 !== this.get("tempSavedValue") && this.saveKeybinding(e, t, n, this.get("tempSavedValue"), i)
                    }), (() => {
                        document.removeEventListener("mousedown", u)
                    })), c.domNode.setAttribute("tabindex", 0), c.domNode.focus(), l.onclick = () => {
                        this.set("tempSavedValue", "[<Unbound>]"), r.setAttribute("empty", !0), r.textContent = this.get("tra.LOL_SETTINGS_INGAME_HOTKEYS_EMPTY"), l.disabled = !0, c.enableAcceptButton(), c.domNode.focus()
                    }, c.domNode.onkeydown = e => {
                        const t = (0, o.fromKeyToSaved)(e);
                        void 0 !== t && (e.preventDefault(), this.set("tempSavedValue", t), r.setAttribute("empty", !1), r.textContent = (0, o.formatAdditionalKeyBindings)([t]), l.disabled = !1, c.enableAcceptButton())
                    }, document.addEventListener("mousedown", u)
                }
            });
            t.default = i
        }, e => {
            "use strict";
            e.exports = JSON.parse('[{"groupName":"LOL_INGAME_SETTINGS_KB_KEY_SECTION_ABILITIESANDSUMMONERS","subgroups":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_NORMALCAST","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTSPELL1","section":"GameEvents","dataKey":"evtNormalCastSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTSPELL2","section":"GameEvents","dataKey":"evtNormalCastSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTSPELL3","section":"GameEvents","dataKey":"evtNormalCastSpell3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTSPELL4","section":"GameEvents","dataKey":"evtNormalCastSpell4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTAVATARSPELL1","section":"GameEvents","dataKey":"evtNormalCastAvatarSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTAVATARSPELL2","section":"GameEvents","dataKey":"evtNormalCastAvatarSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTROLEBOUND","section":"GameEvents","dataKey":"evtNormalCastRoleBound"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_SMARTCAST","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTSPELL1","section":"GameEvents","dataKey":"evtSmartCastSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTSPELL2","section":"GameEvents","dataKey":"evtSmartCastSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTSPELL3","section":"GameEvents","dataKey":"evtSmartCastSpell3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTSPELL4","section":"GameEvents","dataKey":"evtSmartCastSpell4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTAVATARSPELL1","section":"GameEvents","dataKey":"evtSmartCastAvatarSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTAVATARSPELL2","section":"GameEvents","dataKey":"evtSmartCastAvatarSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTROLEBOUND","section":"GameEvents","dataKey":"evtSmartCastRoleBound"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_SMARTCASTWITHINDICATOR","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORSPELL1","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORSPELL2","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORSPELL3","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorSpell3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORSPELL4","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorSpell4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORAVATARSPELL1","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorAvatarSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORAVATARSPELL2","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorAvatarSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORROLEBOUND","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorRoleBound"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_SELFCAST","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTSPELL1","section":"GameEvents","dataKey":"evtSelfCastSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTSPELL2","section":"GameEvents","dataKey":"evtSelfCastSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTSPELL3","section":"GameEvents","dataKey":"evtSelfCastSpell3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTSPELL4","section":"GameEvents","dataKey":"evtSelfCastSpell4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTAVATARSPELL1","section":"GameEvents","dataKey":"evtSelfCastAvatarSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTAVATARSPELL2","section":"GameEvents","dataKey":"evtSelfCastAvatarSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTROLEBOUND","section":"GameEvents","dataKey":"evtSelfCastRoleBound"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_SMARTPLUSSELFCAST","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTSPELL1","section":"GameEvents","dataKey":"evtSmartPlusSelfCastSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTSPELL2","section":"GameEvents","dataKey":"evtSmartPlusSelfCastSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTSPELL3","section":"GameEvents","dataKey":"evtSmartPlusSelfCastSpell3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTSPELL4","section":"GameEvents","dataKey":"evtSmartPlusSelfCastSpell4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTAVATARSPELL1","section":"GameEvents","dataKey":"evtSmartPlusSelfCastAvatarSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTAVATARSPELL2","section":"GameEvents","dataKey":"evtSmartPlusSelfCastAvatarSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTROLEBOUND","section":"GameEvents","dataKey":"evtSmartPlusSelfCastRoleBound"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_SMARTPLUSSELFCASTWITHINDICATOR","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORSPELL1","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORSPELL2","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORSPELL3","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorSpell3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORSPELL4","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorSpell4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORAVATARSPELL1","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorAvatarSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORAVATARSPELL2","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorAvatarSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORROLEBOUND","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorRoleBound"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_OTHER","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTLEVELSPELL1","section":"GameEvents","dataKey":"evtLevelSpell1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTLEVELSPELL2","section":"GameEvents","dataKey":"evtLevelSpell2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTLEVELSPELL3","section":"GameEvents","dataKey":"evtLevelSpell3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTLEVELSPELL4","section":"GameEvents","dataKey":"evtLevelSpell4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTCHAMPIONONLY","section":"GameEvents","dataKey":"evtChampionOnly"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTUSEITEM7","section":"GameEvents","dataKey":"evtUseItem7"}]}]},{"groupName":"LOL_INGAME_SETTINGS_KB_KEY_SECTION_ITEMS","subgroups":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_ITEMNORMALCAST","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTVISIONITEM","section":"GameEvents","dataKey":"evtNormalCastVisionItem"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTITEM1","section":"GameEvents","dataKey":"evtNormalCastItem1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTITEM2","section":"GameEvents","dataKey":"evtNormalCastItem2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTITEM3","section":"GameEvents","dataKey":"evtNormalCastItem3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTITEM4","section":"GameEvents","dataKey":"evtNormalCastItem4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTITEM5","section":"GameEvents","dataKey":"evtNormalCastItem5"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTITEM6","section":"GameEvents","dataKey":"evtNormalCastItem6"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_ITEMSMARTCAST","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTVISIONITEM","section":"GameEvents","dataKey":"evtSmartCastVisionItem"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTITEM1","section":"GameEvents","dataKey":"evtSmartCastItem1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTITEM2","section":"GameEvents","dataKey":"evtSmartCastItem2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTITEM3","section":"GameEvents","dataKey":"evtSmartCastItem3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTITEM4","section":"GameEvents","dataKey":"evtSmartCastItem4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTITEM5","section":"GameEvents","dataKey":"evtSmartCastItem5"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTITEM6","section":"GameEvents","dataKey":"evtSmartCastItem6"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_ITEMSMARTCASTWITHINDICATOR","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORVISIONITEM","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorVisionItem"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORITEM1","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorItem1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORITEM2","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorItem2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORITEM3","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorItem3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORITEM4","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorItem4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORITEM5","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorItem5"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTCASTWITHINDICATORITEM6","section":"GameEvents","dataKey":"evtSmartCastWithIndicatorItem6"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_ITEMSELFCAST","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTVISIONITEM","section":"GameEvents","dataKey":"evtSelfCastVisionItem"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTITEM1","section":"GameEvents","dataKey":"evtSelfCastItem1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTITEM2","section":"GameEvents","dataKey":"evtSelfCastItem2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTITEM3","section":"GameEvents","dataKey":"evtSelfCastItem3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTITEM4","section":"GameEvents","dataKey":"evtSelfCastItem4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTITEM5","section":"GameEvents","dataKey":"evtSelfCastItem5"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELFCASTITEM6","section":"GameEvents","dataKey":"evtSelfCastItem6"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_ITEMSMARTPLUSSELFCAST","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTVISIONITEM","section":"GameEvents","dataKey":"evtSmartPlusSelfCastVisionItem"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTITEM1","section":"GameEvents","dataKey":"evtSmartPlusSelfCastItem1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTITEM2","section":"GameEvents","dataKey":"evtSmartPlusSelfCastItem2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTITEM3","section":"GameEvents","dataKey":"evtSmartPlusSelfCastItem3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTITEM4","section":"GameEvents","dataKey":"evtSmartPlusSelfCastItem4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTITEM5","section":"GameEvents","dataKey":"evtSmartPlusSelfCastItem5"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTITEM6","section":"GameEvents","dataKey":"evtSmartPlusSelfCastItem6"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_ITEMSMARTPLUSSELFCASTWITHINDICATOR","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORVISIONITEM","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorVisionItem"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORITEM1","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorItem1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORITEM2","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorItem2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORITEM3","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorItem3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORITEM4","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorItem4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORITEM5","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorItem5"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSMARTPLUSSELFCASTWITHINDICATORITEM6","section":"GameEvents","dataKey":"evtSmartPlusSelfCastWithIndicatorItem6"}]}]},{"groupName":"LOL_INGAME_SETTINGS_KB_KEY_SECTION_PLAYERMOVEMENT","subgroups":[{"name":null,"twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERMOVECLICK","section":"GameEvents","dataKey":"evtPlayerMoveClick"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERATTACKMOVECLICK","section":"GameEvents","dataKey":"evtPlayerAttackMoveClick"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERATTACKONLYCLICK","section":"GameEvents","dataKey":"evtPlayerAttackOnlyClick"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERATTACKMOVE","section":"GameEvents","dataKey":"evtPlayerAttackMove"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERHOLDPOSITION","section":"GameEvents","dataKey":"evtPlayerHoldPosition"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERSTOPPOSITION","section":"GameEvents","dataKey":"evtPlayerStopPosition"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPETMOVECLICK","section":"GameEvents","dataKey":"evtPetMoveClick"}]}]},{"groupName":"LOL_INGAME_SETTINGS_KB_KEY_SECTION_CAMERACONTROL","subgroups":[{"name":null,"twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTCAMERASNAP","section":"GameEvents","dataKey":"evtCameraSnap"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELECTSELF","section":"GameEvents","dataKey":"evtSelectSelf"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELECTALLY1","section":"GameEvents","dataKey":"evtSelectAlly1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELECTALLY2","section":"GameEvents","dataKey":"evtSelectAlly2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELECTALLY3","section":"GameEvents","dataKey":"evtSelectAlly3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSELECTALLY4","section":"GameEvents","dataKey":"evtSelectAlly4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTCAMERALOCKTOGGLE","section":"GameEvents","dataKey":"evtCameraLockToggle"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSCROLLUP","section":"GameEvents","dataKey":"evtScrollUp"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSCROLLDOWN","section":"GameEvents","dataKey":"evtScrollDown"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSCROLLLEFT","section":"GameEvents","dataKey":"evtScrollLeft"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSCROLLRIGHT","section":"GameEvents","dataKey":"evtScrollRight"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTONUIMOUSE4PAN","section":"GameEvents","dataKey":"evtOnUIMouse4Pan"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTDRAGSCROLLLOCK","section":"GameEvents","dataKey":"evtDragScrollLock"}]}]},{"groupName":"LOL_INGAME_SETTINGS_KB_KEY_SECTION_DISPLAY","subgroups":[{"name":null,"twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSHOWHEALTHBARS","section":"GameEvents","dataKey":"evtShowHealthBars"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTTOGGLEMINIONHEALTHBARS","section":"GameEvents","dataKey":"evtToggleMinionHealthBars"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSHOWSUMMONERNAMES","section":"GameEvents","dataKey":"evtShowSummonerNames"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTDRAWHUD","section":"GameEvents","dataKey":"evtDrawHud"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTTOGGLEFPSANDLATENCY","section":"HUDEvents","dataKey":"evtToggleFPSAndLatency"}]}]},{"groupName":"LOL_INGAME_SETTINGS_KB_KEY_SECTION_COMMUNICATION","subgroups":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_OPENTACTICALWHEEL","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVNTPLAYERPINGCURSOR","section":"GameEvents","dataKey":"evntPlayerPingCursor"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVNTPLAYERPING","section":"GameEvents","dataKey":"evntPlayerPing"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVNTPLAYERPINGDANGER","section":"GameEvents","dataKey":"evntPlayerPingDanger"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVNTPLAYERPINGCURSORDANGER","section":"GameEvents","dataKey":"evntPlayerPingCursorDanger"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_INDIVIDUALPINGS","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERPINGOMW","section":"GameEvents","dataKey":"evtPlayerPingOMW"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERPINGMIA","section":"GameEvents","dataKey":"evtPlayerPingMIA"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERPINGRADIALDANGER","section":"GameEvents","dataKey":"evtPlayerPingRadialDanger"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERPINGCOMEHERE","section":"GameEvents","dataKey":"evtPlayerPingComeHere"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERPINGPUSH","section":"GameEvents","dataKey":"evtPlayerPingPush"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERPINGALLIN","section":"GameEvents","dataKey":"evtPlayerPingAllIn"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTPLAYERPINGVISIONNEEDED","section":"GameEvents","dataKey":"evtPlayerPingVisionNeeded"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_EXPRESSION","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTEMOTEJOKE","section":"GameEvents","dataKey":"evtEmoteJoke"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTEMOTETAUNT","section":"GameEvents","dataKey":"evtEmoteTaunt"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTEMOTEDANCE","section":"GameEvents","dataKey":"evtEmoteDance"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTEMOTELAUGH","section":"GameEvents","dataKey":"evtEmoteLaugh"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTEMOTETOGGLE","section":"GameEvents","dataKey":"evtEmoteToggle"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTCHAMPMASTERYDISPLAY","section":"GameEvents","dataKey":"evtChampMasteryDisplay"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRECIPROCITYTRIGGER","section":"GameEvents","dataKey":"evtReciprocityTrigger"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRECIPROCITYMYBADTRIGGER","section":"GameEvents","dataKey":"evtReciprocityMyBadTrigger"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_EMOTE","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEOPEN","section":"GameEvents","dataKey":"evtRadialEmoteOpen"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEINSTANTOPEN","section":"GameEvents","dataKey":"evtRadialEmoteInstantOpen"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT0","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot0"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT1","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot1"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT2","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot2"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT3","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot3"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT4","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot4"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT5","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot5"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT6","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot6"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT7","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot7"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTRADIALEMOTEPLAYSLOT8","section":"GameEvents","dataKey":"evtRadialEmotePlaySlot8"}]},{"name":"LOL_INGAME_SETTINGS_KB_KEY_SUBSECTION_OTHER","twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTCHATHISTORY","section":"GameEvents","dataKey":"evtChatHistory"}]}]},{"groupName":"LOL_INGAME_SETTINGS_KB_KEY_SECTION_MENUS","subgroups":[{"name":null,"twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSHOWSCOREBOARD","section":"GameEvents","dataKey":"evtShowScoreBoard"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTHOLDSHOWSCOREBOARD","section":"HUDEvents","dataKey":"evtHoldShowScoreBoard"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTTOGGLEMOUSECLIP","section":"HUDEvents","dataKey":"evtToggleMouseClip"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSYSMENU","section":"GameEvents","dataKey":"evtSysMenu"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSHOWCHARACTERMENU","section":"GameEvents","dataKey":"evtShowCharacterMenu"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTTOGGLEPLAYERSTATS","section":"HUDEvents","dataKey":"evtTogglePlayerStats"}]}]},{"groupName":"LOL_INGAME_SETTINGS_KB_KEY_SECTION_ITEMSHOP","subgroups":[{"name":null,"twoSets":true,"controls":[{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTOPENSHOP","section":"GameEvents","dataKey":"evtOpenShop"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSHOPFOCUSSEARCH","section":"ShopEvents","dataKey":"evtShopFocusSearch"},{"name":"LOL_INGAME_SETTINGS_KB_KEY_EVTSHOPSWITCHTABS","section":"ShopEvents","dataKey":"evtShopSwitchTabs"}]}]}]')
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = n(19),
                i = a.Ember.Component.extend({
                    classNames: ["lol-settings-ingame-hotkeys-keybinding-button"],
                    classNameBindings: ["quickcast"],
                    assignTooltip() {
                        a.TooltipManager.unassign(this.element), a.TooltipManager.assign(this.element, ((e, t) => {
                            const n = document.createElement("lol-uikit-tooltip"),
                                a = document.createElement("lol-uikit-content-block");
                            a.setAttribute("type", "tooltip-system");
                            const i = document.createElement("div");
                            i.classList.add("lol-game-settings-hotkeys-tooltip");
                            const s = document.createElement("div");
                            return s.classList.add("lol-game-settings-hotkeys-description"), s.innerHTML = t ? (0, o.formatAdditionalKeyBindings)([t.get("keybinding")]) : "", i.appendChild(s), a.appendChild(i), n.appendChild(a), n
                        }), this, {
                            type: "tooltip-system",
                            targetAnchor: {
                                x: "center",
                                y: "top"
                            },
                            tooltipAnchor: {
                                x: "center",
                                y: "bottom"
                            },
                            showDelay: "long",
                            offset: {
                                x: 0,
                                y: 10
                            }
                        })
                    },
                    keyBindingChanged: a.Ember.observer("keybinding", (function() {
                        let e = 30;
                        const t = (0, o.getPrimaryMainKeyDisplay)([this.get("keybinding")]);
                        if (void 0 !== t) {
                            const n = t.length;
                            n > 2 && (e = 69 / n), this.assignTooltip()
                        }
                        const n = this.$(".lol-settings-ingame-hotkeys-keybinding-button-content");
                        void 0 !== n && n.css("font-size", e)
                    })),
                    didInsertElement: function() {
                        this._super(...arguments), this.assignTooltip(), this.keyBindingChanged()
                    },
                    willDestroyElement: function() {
                        this._super(...arguments), this.element && a.TooltipManager.unassign(this.element)
                    },
                    actions: {
                        showKeybindingDialog: function(e, t) {
                            this.get("showKeybindingDialog")(e, t, 0)
                        },
                        toggleQuickCast: function(e) {
                            this.get("toggleQuickCast")(e)
                        }
                    }
                });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(289)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Component.extend(i.default, {
                persistenceService: o.Ember.inject.service("persistence"),
                namespace: "lol-in-game-hotkeys",
                category: "lol-in-game-hotkeys",
                primaryHotkeys: o.Ember.A(n(293)),
                abilities: o.Ember.computed("primaryHotkeys", (function() {
                    return o.Ember.A(this.get("primaryHotkeys").objectAt(0).controls.slice(0, 4))
                })),
                summonerSpells: o.Ember.computed("primaryHotkeys", (function() {
                    return o.Ember.A(this.get("primaryHotkeys").objectAt(0).controls.slice(4, 6))
                })),
                roleBound: o.Ember.computed("primaryHotkeys", "inputSettings", (function() {
                    return this.get("primaryHotkeys").objectAt(0).controls[6]
                })),
                trinket: o.Ember.computed("primaryHotkeys", (function() {
                    return this.get("primaryHotkeys").objectAt(1).controls[0]
                })),
                items: o.Ember.computed("primaryHotkeys", (function() {
                    return o.Ember.A(this.get("primaryHotkeys").objectAt(1).controls.slice(1, 7))
                })),
                setAndSaveQuickbind: function(e, t) {
                    const n = {};
                    n[e] = t, this.saveGameInputSettings({
                        Quickbinds: n
                    })
                },
                saveGameInputSettings(e) {
                    this.get("persistenceService").saveGameInputSettings(e)
                },
                actions: {
                    showKeybindingDialog(e, t, n) {
                        this.showKeybindingDialog(e, t, n)
                    },
                    changeCastAll(e) {
                        const t = {};
                        this.get("primaryHotkeys").forEach((n => {
                            n.controls.forEach((n => {
                                n.quickCast && (this.set(`inputSettings.Quickbinds.${n.quickCast}`, e), t[n.quickCast] = e)
                            }))
                        })), this.saveGameInputSettings({
                            Quickbinds: t
                        })
                    },
                    toggleQuickCast(e) {
                        const t = `inputSettings.Quickbinds.${e}`,
                            n = !this.get(t);
                        this.set(t, n), this.setAndSaveQuickbind(e, n)
                    }
                }
            });
            t.default = s
        }, e => {
            "use strict";
            e.exports = JSON.parse('[{"name":"LOL_INGAME_SETTINGS_ABILITIES_AND_SUMMONER_SPELLS_TITLE","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_ABILITY1","section":"GameEvents","dataKey1":"evtCastSpell1","quickCast":"evtCastSpell1smart"},{"name":"LOL_INGAME_SETTINGS_ABILITY2","section":"GameEvents","dataKey1":"evtCastSpell2","quickCast":"evtCastSpell2smart"},{"name":"LOL_INGAME_SETTINGS_ABILITY3","section":"GameEvents","dataKey1":"evtCastSpell3","quickCast":"evtCastSpell3smart"},{"name":"LOL_INGAME_SETTINGS_ABILITY4","section":"GameEvents","dataKey1":"evtCastSpell4","quickCast":"evtCastSpell4smart"},{"name":"LOL_INGAME_SETTINGS_SUMMONER_SPELL1","section":"GameEvents","dataKey1":"evtCastAvatarSpell1","quickCast":"evtCastAvatarSpell1smart"},{"name":"LOL_INGAME_SETTINGS_SUMMONER_SPELL2","section":"GameEvents","dataKey1":"evtCastAvatarSpell2","quickCast":"evtCastAvatarSpell2smart"},{"name":"LOL_INGAME_SETTINGS_ROLEBOUND","section":"GameEvents","dataKey1":"evtCastRoleBound","quickCast":"evtCastRoleBoundsmart"}]},{"name":"LOL_INGAME_SETTINGS_ITEMS_TITLE","twoSets":false,"controls":[{"name":"LOL_INGAME_SETTINGS_TRINKET","section":"GameEvents","dataKey1":"evtUseVisionItem","quickCast":"evtUseVisionItemsmart"},{"name":"LOL_INGAME_SETTINGS_ITEM1","section":"GameEvents","dataKey1":"evtUseItem1","quickCast":"evtUseItem1smart"},{"name":"LOL_INGAME_SETTINGS_ITEM2","section":"GameEvents","dataKey1":"evtUseItem2","quickCast":"evtUseItem2smart"},{"name":"LOL_INGAME_SETTINGS_ITEM3","section":"GameEvents","dataKey1":"evtUseItem3","quickCast":"evtUseItem3smart"},{"name":"LOL_INGAME_SETTINGS_ITEM4","section":"GameEvents","dataKey1":"evtUseItem4","quickCast":"evtUseItem4smart"},{"name":"LOL_INGAME_SETTINGS_ITEM5","section":"GameEvents","dataKey1":"evtUseItem5","quickCast":"evtUseItem5smart"},{"name":"LOL_INGAME_SETTINGS_ITEM6","section":"GameEvents","dataKey1":"evtUseItem6","quickCast":"evtUseItem6smart"}]}]')
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(40)) && a.__esModule ? a : {
                    default: a
                };
            const s = {
                    model: "gameSettingsRemote.HUD",
                    property: "SmartCastOnKeyRelease",
                    defaultValue: !0
                },
                r = {
                    model: "gameSettingsRemote.HUD",
                    property: "SmartCastWithIndicator_CastWhenNewSpellSelected",
                    defaultValue: !1
                };
            var l = o.Ember.Component.extend(i.default, {
                persistenceService: o.Ember.inject.service("persistence"),
                init() {
                    this._super(...arguments), this.get("handleQuickcastInitialized") && this.get("handleQuickcastInitialized")(this), s.defaultValue = this._getSchemaValue(s.property), r.defaultValue = this._getSchemaValue(r.property), this.bindSetting(s, !1), this.bindSetting(r, !1)
                },
                resetToDefault() {
                    this.changeSetting(s.property, s.defaultValue), this.changeSetting(r.property, r.defaultValue)
                },
                _getSchemaValue(e) {
                    return this.get(`gameSettingsSchema.HUD.${e}.default`)
                },
                doSaveSetting: function(e, t) {
                    const n = {};
                    n[e] = t, this.get("persistenceService").saveGameSettingsRemote({
                        HUD: n
                    })
                }
            });
            t.default = l
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = n(19),
                i = n(296);
            const s = "Quickbinds",
                r = "GameEvents",
                l = "HUDEvents",
                c = "ShopEvents";
            var u = a.Ember.Component.extend({
                persistenceService: a.Ember.inject.service("persistence"),
                patchService: a.Ember.inject.service("patch"),
                gameflowService: a.Ember.inject.service("gameflow"),
                quickcastComponent: null,
                keyToActionReverseMap: void 0,
                isInvalidGameflowPhase: a.Ember.computed("gameflowService.phase", (function() {
                    const e = this.get("gameflowService.phase");
                    return !(!e || e === i.GAMEFLOW_PHASES.NONE || e === i.GAMEFLOW_PHASES.LOBBY)
                })),
                isPracticeToolDisabled: a.Ember.computed.or("patchService.isPatching", "isInvalidGameflowPhase"),
                practiceToolButtonLabel: a.Ember.computed("patchService.isPatching", "isInvalidGameflowPhase", (function() {
                    return this.get("patchService.isPatching") ? this.get("tra").get("lol_settings_hotkeys_button_label_patching") : this.get("isInvalidGameflowPhase") ? this.get("tra").get("lol_settings_hotkeys_button_label_unavailable") : this.get("tra").get("lol_settings_hotkeys_button_label_practice_tool")
                })),
                init() {
                    this._super(...arguments), this.get("handleComponentInitialized") && this.get("handleComponentInitialized")(this), this.initialiseKeyToActionMap()
                },
                initialiseKeyToActionMap: function() {
                    const e = {};
                    [r, l, c].map((t => {
                        const n = this.get(`inputSettings.${t}`);
                        for (const a in n)
                            if (Object.prototype.hasOwnProperty.call(n, a)) {
                                const i = n[a];
                                if (i) {
                                    (0, o.fromSavedToArray)(i).forEach((n => {
                                        const i = (0, o.normalizeKeybindingString)(n);
                                        "[<unbound>]" !== i && "" !== i && (e[i] = `${t}.${a}`)
                                    }))
                                }
                            }
                    })), this.set("keyToActionReverseMap", e)
                },
                resetToDefault: function() {
                    const e = {};
                    e[s] = this.resetEventsContent(s), e[r] = this.resetEventsContent(r), e[l] = this.resetEventsContent(l), e[c] = this.resetEventsContent(c), this.initialiseKeyToActionMap(), this._saveInputSettings(e), this.get("quickcastComponent") && this.get("quickcastComponent").resetToDefault()
                },
                resetEventsContent: function(e) {
                    const t = {},
                        n = this.get(`inputSettingsSchema.${e}`);
                    for (const a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a].default, this.set(`inputSettings.${e}.${a}`, t[a]));
                    return t
                },
                _saveInputSettings(e) {
                    this.get("persistenceService").saveGameInputSettings(e)
                },
                actions: {
                    handleQuickcastInitialized: function(e) {
                        this.set("quickcastComponent", e)
                    },
                    handlePracticeToolClick: function() {
                        this.get("isPracticeToolDisabled") || (a.api.close(), setTimeout((() => {
                            (0, a.getProvider)().getOptional("rcp-fe-lol-parties").then((e => {
                                e && e.showTrainingPracticeTool()
                            })).catch((e => {
                                a.logger.error("Provider Parties failure", e)
                            }))
                        }), 100))
                    }
                }
            });
            t.default = u
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.GAMEFLOW_PHASES = void 0;
            var a = n(1);
            const o = "/lol-gameflow/v1/session";
            t.GAMEFLOW_PHASES = {
                NONE: "None",
                LOBBY: "Lobby",
                MATCHMAKING: "Matchmaking",
                READY_CHECK: "ReadyCheck",
                GAME_START: "GameStart",
                IN_PROGRESS: "InProgress",
                CHECKED_INTO_TOURNAMENT: "CheckedIntoTournament",
                CHAMP_SELECT: "ChampSelect",
                PRE_END_OF_GAME: "PreEndOfGame",
                END_OF_GAME: "EndOfGame",
                TERMINATED_IN_ERROR: "TerminatedInError",
                FAILED_TO_LAUNCH: "FailedToLaunch",
                RECONNECT: "Reconnect"
            };
            var i = a.Ember.Service.extend({
                session: null,
                phase: null,
                init() {
                    this._super(...arguments), a.db.observe(o, this, (e => {
                        this.set("session", e), this.set("phase", e?.phase || null)
                    }))
                },
                willDestroy() {
                    this._super(...arguments), a.db.unobserve(o, this)
                }
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(15)) && a.__esModule ? a : {
                    default: a
                };
            var s = o.Ember.Component.extend({
                classNames: "lol-settings-repair-row",
                _generateRepairConfirmDialog() {
                    const e = document.createElement("lol-uikit-content-block");
                    e.setAttribute("type", "dialog-small");
                    const t = document.createElement("h6");
                    t.textContent = this.get("tra.lol_general_settings_game_repair_dialog_title");
                    const n = document.createElement("p");
                    return n.textContent = this.get("tra.lol_general_settings_game_repair_dialog_content"), e.appendChild(t), e.appendChild(n), e
                },
                actions: {
                    initiateRepairClick() {
                        i.default.repairClick.play();
                        o.ModalManager.add({
                            type: "DialogConfirm",
                            data: {
                                contents: this._generateRepairConfirmDialog(),
                                acceptText: this.get("tra.lol_general_settings_game_repair_dialog_accept_button"),
                                declineText: this.get("tra.lol_general_settings_game_repair_dialog_decline_button"),
                                closeButton: !1
                            },
                            owner: this.element
                        }).acceptPromise.then((() => {
                            (0, o.dataBinding)("/lol-patch").post("/v1/products/league_of_legends/partial-repair-request")
                        }))
                    }
                }
            });
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = {
                ar_AE: "اللغة العربية",
                cs_CZ: "Čeština",
                de_DE: "Deutsch",
                el_GR: "Ελληνικά",
                en_AU: "English",
                en_GB: "English",
                en_PH: "English",
                en_SG: "English",
                en_US: "English",
                es_AR: "Español (Latinoamérica)",
                es_ES: "Español",
                es_MX: "Español (Latinoamérica)",
                fr_FR: "Français",
                hu_HU: "Magyar",
                it_IT: "Italiano",
                ja_JP: "日本語",
                ko_KR: "한국어",
                pl_PL: "Polski",
                pt_BR: "Português",
                ro_RO: "Română",
                ru_RU: "Русский",
                th_TH: "ภาษาไทย",
                tr_TR: "Türkçe",
                vi_VN: "Tiếng Việt",
                zh_CN: "繁體中文",
                zh_MY: "中文(简体)",
                zh_TW: "中文(繁體)"
            };
            var i = a.Ember.Component.extend({
                classNames: ["lol-publishing-locale-preference-row"],
                publishingLocale: null,
                publishingContentConfig: null,
                persistenceService: a.Ember.inject.service("persistence"),
                regionLocale: a.Ember.computed.alias("persistenceService.regionLocale"),
                _previousLocale: null,
                localePreferenceEnabled: a.Ember.computed.bool("publishingContentConfig.LocalePreferenceEnabled"),
                availableLocales: a.Ember.computed("publishingContentConfig", (function() {
                    return this.getWithDefault("publishingContentConfig.LocalePreferenceOptions", "").split(",").map((e => e.trim())).filter((e => e))
                })),
                showDropdown: a.Ember.computed("localePreferenceEnabled", "availableLocales", (function() {
                    return !(!this.get("localePreferenceEnabled") || !this.get("availableLocales.length"))
                })),
                autoLocaleOption: a.Ember.computed("regionLocale", "publishingLocale", "tra", (function() {
                    const e = this.get("regionLocale"),
                        t = "auto",
                        n = this.get("publishingLocale") === t,
                        a = o[e.locale];
                    return {
                        value: t,
                        label: this.get("tra").formatString("lol_publishing_locale_settings_dropdown_option_auto", {
                            language: a
                        }),
                        selected: n
                    }
                })),
                getLocaleOptionLabel(e) {
                    const t = this.get("regionLocale"),
                        n = o[e];
                    return "RIOT" === t?.region ? `${e}: ${n}` : n
                },
                dropdownOptions: a.Ember.computed("availableLocales", "autoLocaleOption", "publishingLocale", (function() {
                    const e = this.get("availableLocales"),
                        t = this.get("publishingLocale"),
                        n = e.map((e => ({
                            value: e,
                            label: this.getLocaleOptionLabel(e),
                            selected: e === t
                        })));
                    return [this.get("autoLocaleOption"), ...n]
                })),
                actions: {
                    onPublishingLocaleSelected: function(e) {
                        this.get("selectPublishingLocale")(e)
                    }
                }
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = a.dataBinding.bindTo(a.socket);
            var i = a.Ember.Component.extend({
                classNames: ["lol-settings-account-verification-row"],
                accountVerificationConfig: null,
                canVerify: a.Ember.computed.bool("accountVerificationConfig.SettingsVerifyEnabled"),
                cannotVerify: a.Ember.computed.not("canVerify"),
                isVerified: !1,
                init() {
                    this._super(...arguments), o.observe("/lol-account-verification/v1/is-verified", this, (e => {
                        e && (this.set("isVerified", e.success), a.logger.trace(e.success ? "Updated to verified state." : "Updated to unverified state."))
                    }))
                },
                willDestroyElement() {
                    this._super(...arguments), o.unobserve("/lol-account-verification/v1/is-verified", this)
                },
                actions: {
                    showVerificationProcess() {
                        this.get("cannotVerify") || (a.AccountVerification.show("phone-entry", this.element), a.Telemetry.sendCustomData("rcp-fe-lol-account-verification", {
                            event_name: "account_verification_settings_verify",
                            screen_id: "settings",
                            message: "Player clicked Verify button."
                        }))
                    },
                    showRemoveProcess() {
                        a.AccountVerification.show("phone-remove", this.element), a.Telemetry.sendCustomData("rcp-fe-lol-account-verification", {
                            event_name: "account_verification_settings_remove",
                            screen_id: "settings",
                            message: "Player clicked Remove button."
                        })
                    }
                }
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1).Ember.Component.extend({
                classNames: ["lol-settings-slider-component"],
                property: "",
                value: 0,
                percentage: !1,
                showTooltip: !0,
                disabled: !1,
                clickset: !1,
                didInsertElement() {
                    this._super(...arguments);
                    const e = this.element.querySelector("lol-uikit-slider");
                    e.addEventListener("change", this.onChange.bind(this)), e.addEventListener("slideEnd", this.onSlideEnd.bind(this))
                },
                willDestroyElement() {
                    this._super(...arguments);
                    const e = this.element.querySelector("lol-uikit-slider");
                    e.removeEventListener("change", this.onChange), e.removeEventListener("slideEnd", this.onSlideEnd)
                },
                onChange(e) {
                    void 0 !== e.value && this.get("handleOnChange") && this.get("handleOnChange")(this.get("property"), e.value)
                },
                onSlideEnd(e) {
                    void 0 !== e.value && this.get("handleOnSlideEnd") && this.get("handleOnSlideEnd")(this.get("property"), e.value)
                }
            });
            t.default = a
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = n(302),
                i = n(303),
                s = a.Ember.Component.extend({
                    key: void 0,
                    onChange: void 0,
                    label: void 0,
                    voiceType: void 0,
                    _tempSaveValue: void 0,
                    _keybindDiv: void 0,
                    _unbindButton: void 0,
                    _pttModal: void 0,
                    pushToTalkKey: a.Ember.computed("key", (function() {
                        return this._getPrimaryMainKeyDisplay(this.get("key")) || ""
                    })),
                    pushToTalkKeyLabel: a.Ember.computed("label", (function() {
                        return this.get("tra").get(this.get("label"))
                    })),
                    pushToTalkKeyFontSize: a.Ember.computed("pushToTalkKey", (function() {
                        const e = this.get("pushToTalkKey") ? this.get("pushToTalkKey").length : 0;
                        let t = 30;
                        return e > 2 && (t = 69 / e), `${t}px`
                    })),
                    pushToTalkKeyModifier: a.Ember.computed("key", (function() {
                        return this._getPrimaryModifierDisplay(this.get("key")) || ""
                    })),
                    displayKey: a.Ember.computed("key", (function() {
                        return this._fromSavedToDisplay(this.get("key")) || ""
                    })),
                    voiceTypeIconClass: a.Ember.computed("voiceType", (function() {
                        const e = this.get("voiceType");
                        return "party" === e ? "lol-settings-voice-ptt-party-icon" : "team" === e ? "lol-settings-voice-ptt-team-icon" : ""
                    })),
                    _getPrimaryMainKeyDisplay(e) {
                        if (!e) return "";
                        const t = e.slice(e.lastIndexOf("[", e.length - 3));
                        return o.KEYCODE_DISPLAY_MAP[t]
                    },
                    _getPrimaryModifierDisplay(e) {
                        if (!e) return "";
                        const t = e.slice(0, e.lastIndexOf("[", e.length - 3));
                        return this._fromModifierToDisplay(t, " ")
                    },
                    _fromModifierToDisplay(e, t = " ") {
                        if (0 === e.length) return "";
                        let n = e.replace("[Cmd]", "Cmd" + t).replace("[Alt]", "Alt" + t);
                        return n = n.replace("[alt]", "Alt" + t).replace("[ctrl]", "Ctrl" + t), n = n.replace("[Shift]", "Shift" + t).replace("[Ctrl]", "Ctrl" + t), n
                    },
                    _isWindows() {
                        return null === this._isWindowsCache && (-1 !== navigator.appVersion.indexOf("Win") ? this._isWindowsCache = !0 : this._isWindowsCache = !1), this._isWindowsCache
                    },
                    _getPttModalContent(e) {
                        const t = document.createElement("lol-uikit-content-block");
                        t.setAttribute("type", "dialog-small"), t.classList.add("lol-settings-voice-ptt-modal");
                        const n = this._createModalTitleDiv();
                        this._keybindDiv = this._createModalKeybindDiv(), this._unbindButton = this._createModalUnbindButton();
                        const a = this._fromSavedToDisplay(e);
                        return a ? (this._keybindDiv.textContent = a, this._unbindButton.disabled = !1) : (this._keybindDiv.textContent = this.get("tra.voice_settings_push_to_talk_empty"), this._unbindButton.disabled = !0), t.appendChild(n), t.appendChild(this._keybindDiv), t.appendChild(this._unbindButton), t
                    },
                    _createModalTitleDiv() {
                        const e = document.createElement("div");
                        return e.classList.add("lol-settings-voice-ptt-modal-title"), e.textContent = this.get("tra.voice_settings_push_to_talk_modal_title"), e
                    },
                    _fromSavedToDisplay(e) {
                        if (!e) return "";
                        const t = e.slice(e.lastIndexOf("[", e.length - 3)),
                            n = e.slice(0, e.lastIndexOf("[", e.length - 3)),
                            a = o.KEYCODE_DISPLAY_MAP[t];
                        return void 0 === a ? e : this._fromModifierToDisplay(n, " + ") + a
                    },
                    _createModalKeybindDiv() {
                        const e = document.createElement("div");
                        return e.classList.add("lol-settings-voice-ptt-modal-key"), e
                    },
                    _createModalUnbindButton() {
                        const e = document.createElement("button");
                        return e.classList.add("lol-settings-voice-keybind-dialog-unbind-button"), e.innerHTML = this.get("tra.voice_settings_push_to_talk_unbind"), e.onclick = this._unbindButtonClickHandler.bind(this), e
                    },
                    _unbindButtonClickHandler() {
                        this._tempSaveValue = "[<Unbound>]", this._unbindButton.disabled = !0, this._keybindDiv.textContent = this.get("tra.voice_settings_push_to_talk_empty"), this._pttModal.enableAcceptButton(), this._pttModal.domNode.focus()
                    },
                    _registerPttModal(e) {
                        this._pttModal = a.ModalManager.add({
                            type: "DialogConfirm",
                            data: {
                                contents: e,
                                acceptText: this.get("tra.voice_settings_push_to_talk_save"),
                                declineText: this.get("tra.voice_settings_push_to_talk_cancel")
                            },
                            show: !0
                        }), this._pttModal.disableAcceptButton(), this._pttModal.acceptPromise.then(this._acceptPttModal.bind(this), this._cancelPttModal.bind(this)), this._pttModal.domNode.setAttribute("tabindex", 0), this._pttModal.domNode.focus(), this._pttModal.domNode.onkeydown = this._pttModalKeyDownHandler.bind(this), document.addEventListener("mousedown", this._handleMouseKeySet.bind(this))
                    },
                    _pttModalKeyDownHandler(e) {
                        const t = this._fromKeyDownEventToSaved(e);
                        t && (e.preventDefault(), this._tempSaveValue = t, this._keybindDiv.textContent = this._fromSavedToDisplay(t), this._unbindButton.disabled = !1, this._pttModal.enableAcceptButton())
                    },
                    _fromKeyDownEventToSaved(e) {
                        let t = null;
                        return t = this._isWindows() ? o.WIN_KEYCODE_SAVE_MAP[e.code] : o.MAC_KEYCODE_SAVE_MAP[e.code], t ? this._getModifiersPrefix(e) + t : null
                    },
                    _getModifiersPrefix(e) {
                        return this._getMetaPrefix(e) + (e.shiftKey ? "[Shift]" : "") + (e.ctrlKey ? "[Ctrl]" : "") + (e.altKey ? "[Alt]" : "")
                    },
                    _getMetaPrefix(e) {
                        return e.metaKey ? this._isWindows() ? "[Win]" : "[Cmd]" : ""
                    },
                    _handleMouseKeySet(e) {
                        let t = e.button;
                        if (e.button === i.WEB_EVENT_LEFT_MOUSE_BUTTON) {
                            if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) return;
                            t = i.GAME_CLIENT_LEFT_MOUSE_BUTTON
                        } else e.button === i.WEB_EVENT_MIDDLE_MOUSE_BUTTON ? t = i.GAME_CLIENT_MIDDLE_MOUSE_BUTTON : e.button === i.WEB_EVENT_BROWSER_BACK_MOUSE_BUTTON ? t = i.GAME_CLIENT_BROWSER_BACK_MOUSE_BUTTON : e.button === i.WEB_EVENT_BROWSER_FORWARD_MOUSE_BUTTON && (t = i.GAME_CLIENT_BROWSER_FORWARD_MOUSE_BUTTON);
                        const n = this._getModifiersPrefix(e) + "[Button " + t + "]";
                        this._tempSaveValue = n, this._keybindDiv.textContent = this._fromSavedToDisplay(n), this._unbindButton.disabled = !1, this._pttModal.enableAcceptButton()
                    },
                    _acceptPttModal() {
                        document.removeEventListener("mousedown", this._handleMouseKeySet.bind(this)), this._tempSaveValue && this.get("onChange") && this.get("onChange")(this._tempSaveValue)
                    },
                    _cancelPttModal() {
                        document.removeEventListener("mousedown", this._handleMouseKeySet.bind(this))
                    },
                    actions: {
                        openModal: function() {
                            this._tempSaveValue = null;
                            const e = this._getPttModalContent(this.get("key"));
                            this._registerPttModal(e)
                        }
                    }
                });
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WIN_KEYCODE_SAVE_MAP = t.MAC_KEYCODE_SAVE_MAP = t.KEYCODE_DISPLAY_MAP = void 0;
            t.MAC_KEYCODE_SAVE_MAP = {
                Escape: "[Esc]",
                Digit1: "[1]",
                Digit2: "[2]",
                Digit3: "[3]",
                Digit4: "[4]",
                Digit5: "[5]",
                Digit6: "[6]",
                Digit7: "[7]",
                Digit8: "[8]",
                Digit9: "[9]",
                Digit0: "[0]",
                Minus: "[-]",
                Equal: "[=]",
                Backspace: "[Back]",
                Tab: "[Tab]",
                KeyQ: "[q]",
                KeyW: "[w]",
                KeyE: "[e]",
                KeyR: "[r]",
                KeyT: "[t]",
                KeyY: "[y]",
                KeyU: "[u]",
                KeyI: "[i]",
                KeyO: "[o]",
                KeyP: "[p]",
                BracketLeft: "[[]",
                BracketRight: "[]]",
                Enter: "[Return]",
                KeyA: "[a]",
                KeyS: "[s]",
                KeyD: "[d]",
                KeyF: "[f]",
                KeyG: "[g]",
                KeyH: "[h]",
                KeyJ: "[j]",
                KeyK: "[k]",
                KeyL: "[l]",
                Semicolon: "[Semicolon]",
                Quote: "[']",
                Backquote: "[`]",
                Backslash: "[Backslash]",
                KeyZ: "[z]",
                KeyX: "[x]",
                KeyC: "[c]",
                KeyV: "[v]",
                KeyB: "[b]",
                KeyN: "[n]",
                KeyM: "[m]",
                Comma: "[,]",
                Period: "[.]",
                Slash: "[/]",
                NumpadMultiply: "[*]",
                Space: "[Space]",
                CapsLock: "[CapsLock]",
                F1: "[F1]",
                F2: "[F2]",
                F3: "[F3]",
                F4: "[F4]",
                F5: "[F5]",
                F6: "[F6]",
                F7: "[F7]",
                F8: "[F8]",
                F9: "[F9]",
                F10: "[F10]",
                NumLock: "[NumLock]",
                Numpad7: "[Num7]",
                Numpad8: "[Num8]",
                Numpad9: "[Num9]",
                NumpadSubtract: "[Num-]",
                Numpad4: "[Num4]",
                Numpad5: "[Num5]",
                Numpad6: "[Num6]",
                NumpadAdd: "[Num+]",
                Numpad1: "[Num1]",
                Numpad2: "[Num2]",
                Numpad3: "[Num3]",
                Numpad0: "[Num0]",
                NumpadDecimal: "[Num.]",
                F11: "[F11]",
                F12: "[F12]",
                IntlYen: "[jYen]",
                NumpadEqual: "[Num=]",
                NumpadEnter: "[NumEnter]",
                AudioVolumeMute: "[Mute]",
                AudioVolumeDown: "[Vol-]",
                AudioVolumeUp: "[Vol+]",
                NumpadComma: "[Num,]",
                NumpadDivide: "[Num/]",
                Home: "[Home]",
                ArrowUp: "[Up Arrow]",
                PageUp: "[PgUp]",
                ArrowLeft: "[Left Arrow]",
                ArrowRight: "[Right Arrow]",
                End: "[End]",
                ArrowDown: "[Down Arrow]",
                PageDown: "[PgDn]",
                Delete: "[Del]"
            };
            t.WIN_KEYCODE_SAVE_MAP = {
                Escape: "[Esc]",
                Digit1: "[1]",
                Digit2: "[2]",
                Digit3: "[3]",
                Digit4: "[4]",
                Digit5: "[5]",
                Digit6: "[6]",
                Digit7: "[7]",
                Digit8: "[8]",
                Digit9: "[9]",
                Digit0: "[0]",
                Minus: "[-]",
                Equal: "[=]",
                Backspace: "[Back]",
                Tab: "[Tab]",
                KeyQ: "[q]",
                KeyW: "[w]",
                KeyE: "[e]",
                KeyR: "[r]",
                KeyT: "[t]",
                KeyY: "[y]",
                KeyU: "[u]",
                KeyI: "[i]",
                KeyO: "[o]",
                KeyP: "[p]",
                BracketLeft: "[[]",
                BracketRight: "[]]",
                Enter: "[Return]",
                KeyA: "[a]",
                KeyS: "[s]",
                KeyD: "[d]",
                KeyF: "[f]",
                KeyG: "[g]",
                KeyH: "[h]",
                KeyJ: "[j]",
                KeyK: "[k]",
                KeyL: "[l]",
                Semicolon: "[Semicolon]",
                Quote: "[']",
                Backquote: "[`]",
                Backslash: "[Backslash]",
                KeyZ: "[z]",
                KeyX: "[x]",
                KeyC: "[c]",
                KeyV: "[v]",
                KeyB: "[b]",
                KeyN: "[n]",
                KeyM: "[m]",
                Comma: "[,]",
                Period: "[.]",
                Slash: "[/]",
                NumpadMultiply: "[*]",
                Space: "[Space]",
                CapsLock: "[CapsLock]",
                F1: "[F1]",
                F2: "[F2]",
                F3: "[F3]",
                F4: "[F4]",
                F5: "[F5]",
                F6: "[F6]",
                F7: "[F7]",
                F8: "[F8]",
                F9: "[F9]",
                F10: "[F10]",
                NumLock: "[NumLock]",
                ScrollLock: "[ScrollLock]",
                Numpad7: "[Num7]",
                Numpad8: "[Num8]",
                Numpad9: "[Num9]",
                NumpadSubtract: "[Num-]",
                Numpad4: "[Num4]",
                Numpad5: "[Num5]",
                Numpad6: "[Num6]",
                NumpadAdd: "[Num+]",
                Numpad1: "[Num1]",
                Numpad2: "[Num2]",
                Numpad3: "[Num3]",
                Numpad0: "[Num0]",
                NumpadDecimal: "[Num.]",
                F11: "[F11]",
                F12: "[F12]",
                IntlYen: "[jYen]",
                NumpadEnter: "[NumEnter]",
                AudioVolumeMute: "[Mute]",
                AudioVolumeDown: "[Vol-]",
                AudioVolumeUp: "[Vol+]",
                NumpadDivide: "[Num/]",
                Home: "[Home]",
                ArrowUp: "[Up Arrow]",
                PageUp: "[PgUp]",
                ArrowLeft: "[Left Arrow]",
                ArrowRight: "[Right Arrow]",
                End: "[End]",
                ArrowDown: "[Down Arrow]",
                PageDown: "[PgDn]",
                Delete: "[Del]",
                OSLeft: "[L Win]",
                OSRight: "[R Win]"
            };
            t.KEYCODE_DISPLAY_MAP = {
                "[Esc]": "Esc",
                "[1]": "1",
                "[2]": "2",
                "[3]": "3",
                "[4]": "4",
                "[5]": "5",
                "[6]": "6",
                "[7]": "7",
                "[8]": "8",
                "[9]": "9",
                "[0]": "0",
                "[-]": "-",
                "[=]": "=",
                "[Back]": "Bk",
                "[Tab]": "Tab",
                "[TAB]": "Tab",
                "[q]": "Q",
                "[w]": "W",
                "[e]": "E",
                "[r]": "R",
                "[t]": "T",
                "[y]": "Y",
                "[u]": "U",
                "[i]": "I",
                "[o]": "O",
                "[p]": "P",
                "[[]": "[",
                "[]]": "]",
                "[Return]": "Rtn",
                "[a]": "A",
                "[s]": "S",
                "[d]": "D",
                "[f]": "F",
                "[g]": "G",
                "[h]": "H",
                "[j]": "J",
                "[k]": "K",
                "[l]": "L",
                "[Semicolon]": ";",
                "[']": "'",
                "[`]": "`",
                "[Backslash]": "Bkslash",
                "[z]": "Z",
                "[x]": "X",
                "[c]": "C",
                "[v]": "V",
                "[b]": "B",
                "[n]": "N",
                "[m]": "M",
                "[,]": ",",
                "[.]": ".",
                "[/]": "/",
                "[*]": "*",
                "[Space]": "Spce",
                "[CapsLock]": "CapsLk",
                "[F1]": "F1",
                "[F2]": "F2",
                "[F3]": "F3",
                "[F4]": "F4",
                "[F5]": "F5",
                "[F6]": "F6",
                "[F7]": "F7",
                "[F8]": "F8",
                "[F9]": "F9",
                "[F10]": "F10",
                "[NumLock]": "NumLk",
                "[ScrollLock]": "ScrollLk",
                "[Num7]": "Num7",
                "[Num8]": "Num8",
                "[Num9]": "Num9",
                "[Num-]": "Num-",
                "[Num4]": "Num4",
                "[Num5]": "Num5",
                "[Num6]": "Num6",
                "[Num+]": "Num+",
                "[Num1]": "Num1",
                "[Num2]": "Num2",
                "[Num3]": "Num3",
                "[Num0]": "Num0",
                "[Num.]": "Num.",
                "[F11]": "F11",
                "[F12]": "F12",
                "[jYen]": "jKana",
                "[Num=]": "Num=",
                "[NumEnter]": "NumEnter",
                "[Mute]": "Mute",
                "[Vol-]": "Vol-",
                "[Vol+]": "Vol+",
                "[Num,]": "Num,",
                "[Num/]": "Num/",
                "[Home]": "webHome",
                "[Up Arrow]": "Up",
                "[PgUp]": "PgUp",
                "[Left Arrow]": "Left",
                "[Right Arrow]": "Rght",
                "[End]": "End",
                "[Down Arrow]": "Down",
                "[PgDn]": "PgDn",
                "[Ins]": "Ins",
                "[Del]": "Del",
                "[L Win]": "Win",
                "[R Win]": "Win",
                "[Button 1]": "MB1",
                "[Button 2]": "MB2",
                "[Button 3]": "MB3",
                "[Button 4]": "MB4",
                "[Button 5]": "MB5",
                "[Button 6]": "MB6",
                "[Button 7]": "MB7",
                "[Button 8]": "MB8",
                "[<Unbound>]": ""
            }
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WEB_EVENT_MIDDLE_MOUSE_BUTTON = t.WEB_EVENT_LEFT_MOUSE_BUTTON = t.WEB_EVENT_BROWSER_FORWARD_MOUSE_BUTTON = t.WEB_EVENT_BROWSER_BACK_MOUSE_BUTTON = t.GAME_CLIENT_MIDDLE_MOUSE_BUTTON = t.GAME_CLIENT_LEFT_MOUSE_BUTTON = t.GAME_CLIENT_BROWSER_FORWARD_MOUSE_BUTTON = t.GAME_CLIENT_BROWSER_BACK_MOUSE_BUTTON = void 0;
            t.WEB_EVENT_LEFT_MOUSE_BUTTON = 0;
            t.WEB_EVENT_MIDDLE_MOUSE_BUTTON = 1;
            t.WEB_EVENT_BROWSER_BACK_MOUSE_BUTTON = 3;
            t.WEB_EVENT_BROWSER_FORWARD_MOUSE_BUTTON = 4;
            t.GAME_CLIENT_LEFT_MOUSE_BUTTON = 1;
            t.GAME_CLIENT_MIDDLE_MOUSE_BUTTON = 3;
            t.GAME_CLIENT_BROWSER_BACK_MOUSE_BUTTON = 4;
            t.GAME_CLIENT_BROWSER_FORWARD_MOUSE_BUTTON = 5
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            n(305);
            var o = a.Ember.Component.extend({
                classNames: ["vng-publisher-settings"],
                honeyfruit: a.Ember.inject.service("honeyfruit"),
                isError: !1,
                isHidden: a.Ember.computed.not("honeyfruit.vngPublisherSettings.isVisible"),
                isLoading: !1,
                logger: a.Ember.inject.service("honeyfruit-logger"),
                isVngReady: !1,
                actions: {
                    async handleButtonClick(e) {
                        if (e.preventDefault(), !this.get("isLoading")) {
                            this.set("isLoading", !0), this.set("isError", !1);
                            try {
                                await this.get("honeyfruit").postVNGSettingsAction(), this.set("isLoading", !1)
                            } catch (e) {
                                this.get("logger").error(`Error launching vng account settings ${e.message}`), this.set("isLoading", !1), this.set("isError", !0)
                            }
                        }
                    }
                }
            });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            n(307);
            var o = a.Ember.Component.extend({
                classNames: ["honeyfruit-settings__error"]
            });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            n.r(t)
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            var o = a.SharedComponents.getDataBoundEmberService({
                dataBindingInstance: (0, a.dataBinding)("/lol-honeyfruit", a.socket),
                propertiesToBind: [{
                    propertyName: "vngPublisherSettings",
                    defaultValue: {
                        isVisible: !1
                    },
                    observedPath: "/v1/vng-publisher-settings"
                }],
                serviceMethods: {
                    postVNGSettingsAction: () => (0, a.dataBinding)("/lol-honeyfruit", a.socket).post("/v1/vng-publisher-settings")
                }
            });
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = n(1),
                i = (a = n(310)) && a.__esModule ? a : {
                    default: a
                };
            const s = o.dataBinding.bindTo(o.socket);
            var r = o.Ember.Service.extend({
                isVisible: !1,
                currentCategory: null,
                currentGroups: [],
                rootElement: null,
                init() {
                    this._super(...arguments), this._registeredCategoryGroups = (0, i.default)()
                },
                willDestroy() {
                    this._super(...arguments), s.unobserve("/lol-login/v1/session", this)
                },
                initialize(e, t) {
                    this.rootElement = e, this._routeSupport = t;
                    const n = {};
                    return n.domNode = e, n.show = !0, this._modal = n, s.get("/lol-login/v1/session").then((e => {
                        this._onLoginStatusUpdate(e), s.observe("/lol-login/v1/session", this, this._onLoginStatusUpdate.bind(this))
                    }))
                },
                show(e) {
                    const t = this.get("isVisible");
                    t || (o.ModalManager.add(this._modal), this.set("isVisible", !0)), this._setDefaultDisplayCategory(e, !t)
                },
                close() {
                    this.get("isVisible") && (this.set("isVisible", !1), this._persistAccountSettings(), o.ModalManager.remove(this._modal), this._setDefaultDisplayCategory(null, !1))
                },
                _persistAccountSettings() {
                    s.post("/lol-settings/v1/account/save").then((() => {
                        o.logger.trace("Persist account settings successful")
                    })).catch((e => {
                        o.logger.error("Error happened when saving account settings: ", e)
                    }))
                },
                _getFlattenedCategories() {
                    let e = [];
                    return o.lodash.forEach(this._registeredCategoryGroups, (t => {
                        e = o.lodash.concat(e, t.categories)
                    })), e
                },
                _setDefaultDisplayCategory(e, t) {
                    const n = this._getFlattenedCategories();
                    let a = null;
                    e && (a = n.find((t => t.name === e))), a && a.isEnabled() || (a = o.lodash.find(n, (e => e.isEnabled()))), a && this.updateCurrentCategory(a, t)
                },
                updateCurrentCategory(e, t) {
                    e && (this.set("currentCategory", e), this._syncContainerElement(e, t))
                },
                _syncContainerElement(e, t) {
                    this._routeSupport.syncToRoute(e.routeName, t)
                },
                _onLoginStatusUpdate(e) {
                    o.lodash.isEqual(this._session, e) || (this._session = Object.assign({}, e), this._updateCategoriesForLoginChange())
                },
                _updateCategoriesForLoginChange() {
                    const e = Boolean(this._session && this._session.connected);
                    this.set("currentCategory", null), o.lodash.forEach(this._registeredCategoryGroups, (t => {
                        o.lodash.forEach(t.categories, (t => {
                            t.updateLoginStatus(e)
                        }))
                    })), this._refreshCategoryGroups()
                },
                _refreshCategoryGroups() {
                    const e = [];
                    let t = [];
                    this._registeredCategoryGroups.forEach((n => {
                        const a = n.categories.filter((e => e.isEnabled()));
                        if (a.length > 0) {
                            const o = {
                                titleKey: n.titleKey,
                                name: n.name,
                                capitalTitleKey: n.capitalTitleKey
                            };
                            o.categories = a, t = t.concat(a), e.push(o)
                        }
                    })), this.set("currentGroups", e), this.updateCurrentCategory(t[0], !0)
                }
            });
            t.default = r
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const e = function() {
                        const e = {
                            name: "client",
                            titleKey: "lol_settings_group_title_client",
                            capitalTitleKey: "lol_settings_group_title_client_capital",
                            categories: null
                        };
                        e.categories = [new s.default(o.SettingsCategory.GENERAL, o.SettingsCategoryName.GENERAL, "lol_settings_nav_title_general", !0, !0, e), new s.default(o.SettingsCategory.NOTIFICATIONS, o.SettingsCategoryName.NOTIFICATIONS, "lol_settings_nav_title_notifications", !0, !0, e), new s.default(o.SettingsCategory.CHAT, o.SettingsCategoryName.CHAT, "lol_settings_nav_title_chat_and_friends", !0, !0, e), new s.default(o.SettingsCategory.SOUND, o.SettingsCategoryName.SOUND, "lol_settings_nav_title_sound", !1, !0, e), new s.default(o.SettingsCategory.VOICE, o.SettingsCategoryName.VOICE, "lol_settings_nav_title_voice", !1, !0, e), new s.default(o.SettingsCategory.BLOCK_LIST, o.SettingsCategoryName.BLOCK_LIST, "lol_settings_nav_title_block_list", !0, !1, e)];
                        const t = {
                            name: "ingame",
                            titleKey: "lol_settings_group_title_ingame",
                            capitalTitleKey: "lol_settings_group_title_ingame_capital",
                            categories: null
                        };
                        t.categories = [new s.default(o.SettingsCategory.GAME_HOTKEYS, o.SettingsCategoryName.GAME_HOTKEYS, "lol_settings_nav_title_hotkeys", !0, !0, t), new s.default(o.SettingsCategory.GAME_SOUND, o.SettingsCategoryName.GAME_SOUND, "lol_settings_nav_title_in_game_sound", !0, !0, t), new s.default(o.SettingsCategory.GAME_INTERFACE, o.SettingsCategoryName.GAME_INTERFACE, "lol_settings_nav_title_interface", !0, !0, t), new s.default(o.SettingsCategory.GAME_GAMEPLAY, o.SettingsCategoryName.GAME_GAMEPLAY, "lol_settings_nav_title_game", !0, !0, t), new s.default(o.SettingsCategory.REPLAYS, o.SettingsCategoryName.REPLAYS, "lol_settings_nav_title_replays", !0, !0, t)];
                        const n = {
                            name: "about",
                            titleKey: "lol_settings_group_title_about",
                            capitalTitleKey: "lol_settings_group_title_about_capital",
                            categories: null
                        };
                        n.categories = [new s.default(o.SettingsCategory.PRIVACY_NOTICE, o.SettingsCategoryName.PRIVACY_NOTICE, "lol_settings_nav_title_privacy_notice", !1, !1, n), new s.default(o.SettingsCategory.TERMS_OF_USE, o.SettingsCategoryName.TERMS_OF_USE, "lol_settings_nav_title_tou", !1, !1, n), new s.default(o.SettingsCategory.THIRDPARTY_LICENSES, o.SettingsCategoryName.THIRDPARTY_LICENSES, "lol_settings_nav_title_third_party_license", !1, !1, n), new s.default(o.SettingsCategory.VERSION, o.SettingsCategoryName.VERSION, "lol_settings_nav_title_version", !0, !0, n), new s.default(o.SettingsCategory.LEGAL_STATEMENTS, o.SettingsCategoryName.LEGAL_STATEMENTS, "lol_settings_nav_title_legal_statements", !1, !1, n)];
                        const a = [e, t, n],
                            i = new Map([...e.categories, ...t.categories, ...n.categories].map((e => [e.routeName, e])));
                        return {
                            list: a,
                            byRouteName: i
                        }
                    }(),
                    t = n => {
                        n && (r.unobserve("/lol-platform-config/v1/initial-configuration-complete", t), function(e) {
                            r.observe("/lol-settings/v2/config", (t => {
                                t ? (l(e, o.SettingsCategory.GAME_HOTKEYS, t.isHotkeysEnabled), l(e, o.SettingsCategory.GAME_SOUND, t.isSoundEnabled), l(e, o.SettingsCategory.GAME_INTERFACE, t.isInterfaceEnabled), l(e, o.SettingsCategory.GAME_GAMEPLAY, t.isGameplayEnabled), l(e, o.SettingsCategory.REPLAYS, t.isReplaysEnabled), l(e, o.SettingsCategory.TERMS_OF_USE, t.isTermsEnabled), l(e, o.SettingsCategory.PRIVACY_NOTICE, t.isPrivacyNoticeEnabled), l(e, o.SettingsCategory.LEGAL_STATEMENTS, t.isLegalStatementsEnabled)) : i.logger.warning("Failed to receive settings config")
                            }))
                        }(e))
                    };
                return r.observe("/lol-platform-config/v1/initial-configuration-complete", t), e.list
            };
            var a, o = n(3),
                i = n(1),
                s = (a = n(311)) && a.__esModule ? a : {
                    default: a
                };
            const r = i.dataBinding.bindTo(i.socket);

            function l(e, t, n) {
                e.byRouteName.has(t) && e.byRouteName.get(t).updateForceDisabled(!n)
            }
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            var o = class {
                constructor(e, t, n, o, i, s) {
                    this.routeName = e, this.name = t, this.titleKey = n, this.requireLogin = o, this.canReset = i, this.group = s, this.loginStatus = !1, this.forceDisabled = !1, this.computeds = a.Ember.Object.create({
                        disabled: !1
                    })
                }
                updateLoginStatus(e) {
                    this.loginStatus = e, this.computeds.set("disabled", !this.isEnabled())
                }
                updateForceDisabled(e) {
                    this.forceDisabled = e, this.computeds.set("disabled", !this.isEnabled())
                }
                isEnabled() {
                    return (!this.requireLogin || this.loginStatus) && !this.forceDisabled
                }
            };
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.PATCHER_ACTIONS = void 0;
            var a = n(1);
            const o = {
                PATCHING: "Patching",
                REPAIRING: "Repairing",
                CHECKING_FOR_UPDATES: "CheckingForUpdates"
            };
            t.PATCHER_ACTIONS = o;
            var i = a.Ember.Service.extend({
                leagueClientVersion: null,
                gameClientVersion: null,
                lolExternalPatchVersion: null,
                tftExternalPatchVersion: null,
                checkingForPatchesEnabled: null,
                displayLegacyPatchNumbers: null,
                patcherData: null,
                init() {
                    this._super(...arguments), a.db.observe("/patcher/v1/products/league_of_legends/state", this, (e => {
                        this.set("patcherData", e)
                    })), a.db.observe("/lol-client-config/v3/client-config/lol.client_settings.display_legacy_patch_numbers", this, (e => {
                        "boolean" == typeof e && this.set("displayLegacyPatchNumbers", e)
                    })), a.db.observe("/lol-patch/v1/game-version", this, (async e => {
                        if (e) {
                            this.set("gameClientVersion", e);
                            const t = e.split(".").slice(0, 2).join("."),
                                n = await a.db.get("/lol-client-config/v3/client-config/lol.client_settings.internal_to_external_patch_mapping");
                            n?.lol && this.set("lolExternalPatchVersion", n.lol[t]), n?.tft && this.set("tftExternalPatchVersion", n.tft[t])
                        } else this.set("gameClientVersion", this.get("tra.lol_settings_version_game_client_pending"))
                    })), a.db.observe("/lol-patch/v1/checking-enabled", this, (e => {
                        this.set("checkingForPatchesEnabled", e)
                    }))
                },
                willDestroy() {
                    this._super(...arguments), a.db.unobserve("/patcher/v1/products/league_of_legends/state", this)
                },
                isPatching: a.Ember.computed("patcherData.action", (function() {
                    const e = this.get("patcherData.action");
                    return e === o.PATCHING || e === o.REPAIRING
                })),
                isCheckingForUpdates: a.Ember.computed("patcherData.action", (function() {
                    return this.get("patcherData.action") === o.CHECKING_FOR_UPDATES
                })),
                isGettingReadyForGame: a.Ember.computed.or("isPatching"),
                getSupportedGameReleases: () => a.db.get("/lol-patch/v1/products/league_of_legends/supported-game-releases", {
                    skipCache: !0
                }),
                putGamePatchUrl: e => a.db.put(`/lol-patch/v1/game-patch-url?url=${e}`)
            });
            t.default = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1),
                o = n(314),
                i = n(41);
            const {
                DEFAULT_PROFILE_PRIVACY: s
            } = i.PROFILE_PRIVACY, r = a.dataBinding.bindTo(a.socket), l = "/lol-summoner/v1/current-summoner/profile-privacy", c = "/lol-summoner-profiles/v1/get-privacy-view", u = "/lol-game-settings/v1/game-settings", d = "/lol-client-config/v3/client-config/lol.client_settings.full_repair_enabled", m = "/client-config/v2/config/lol.client_settings.vanguard.daysToReshowModal";
            var p = a.Ember.Service.extend({
                isLoggedIn: !1,
                regionLocale: null,
                settingsReady: !1,
                gameSettingsReady: !1,
                gameRepairEnabled: !1,
                loggedInPromise: null,
                regionLocalePromise: null,
                settingsReadyPromise: null,
                gameSettingsReadyPromise: null,
                vanguardSystemCheckModalEnabled: !1,
                settingsConfig: {
                    isHotkeysEnabled: !1,
                    isSoundEnabled: !1,
                    isInterfaceEnabled: !1,
                    isGameplayEnabled: !1,
                    isReplaysEnabled: !1,
                    isTermsEnabled: !1,
                    isPrivacyNoticeEnabled: !1,
                    isLegalStatementsEnabled: !1
                },
                profilePrivacy: {
                    ...s
                },
                init() {
                    this._super(...arguments);
                    let e = null;
                    this.set("loggedInPromise", new Promise((t => {
                        e = t
                    }))), r.observe("/lol-login/v1/session", this, (t => {
                        this.set("isLoggedIn", t && t.connected), e()
                    }));
                    let t = null;
                    this.set("regionLocalePromise", new Promise((e => {
                        t = e
                    }))), r.observe("/riotclient/region-locale", this, (e => {
                        this.set("regionLocale", e), t()
                    }));
                    let n = null;
                    this.set("settingsReadyPromise", new Promise((e => {
                        n = e
                    }))), r.observe("/lol-settings/v2/ready", this, (e => {
                        e && (this.set("settingsReady", e), n())
                    }));
                    let a = null;
                    this.set("gameSettingsReadyPromise", new Promise((e => {
                        a = e
                    }))), r.observe("/lol-game-settings/v1/ready", this, (e => {
                        e && (this.set("gameSettingsReady", e), a())
                    })), r.observe(d, (e => {
                        this.set("gameRepairEnabled", e && "false" !== e)
                    })), r.observe(m, (e => {
                        this.set("vanguardSystemCheckModalEnabled", e > 0)
                    })), r.observe(l, (e => {
                        this.set("profilePrivacy", e)
                    })), r.observe(c, ((e = {}) => {
                        const t = this.readClientAnonymitySettingsFromGameRepresentation(e);
                        this.set("anonymityEnabled", t.anonymityEnabled), this.set("nameOnlyAnonymityEnabled", t.nameOnlyAnonymityEnabled)
                    })), r.observe(u, (e => {
                        this.set("gameSettings", e)
                    })), r.observe("/lol-settings/v2/config", (e => {
                        this.set("settingsConfig", e)
                    }))
                },
                willDestroy() {
                    r.unobserve("/lol-login/v1/session", this), r.unobserve("/riotclient/region-locale", this), r.unobserve("/lol-settings/v2/ready", this), r.unobserve("/lol-game-settings/v1/ready", this), r.unobserve(l, this), r.unobserve(c, this), r.unobserve(u, this), r.unobserve(d, this), r.unobserve(m, this)
                },
                _getEndpointUrl: (e, t, n) => "local" === t ? `/lol-settings/v1/${t}/${n}` : `/lol-settings/v2/${t}/${e}/${n}`,
                getDefaultSettingPromise(e, t) {
                    return this.getSettingPromise(o.DEFAULT_PP_KEY, e, t)
                },
                getSettingPromise(e, t, n) {
                    return r.get(this._getEndpointUrl(e, t, n))
                },
                saveDefaultSetting(e, t, n, a) {
                    return this.saveSetting(e, o.DEFAULT_PP_KEY, t, n, a)
                },
                saveSetting(e, t, n, o, i) {
                    return a.logger.trace(`save data ${e} with namespace ${o} and scope ${n} to ${t}`), r.patch(this._getEndpointUrl(t, n, o), {
                        schemaVersion: i,
                        data: e
                    })
                },
                saveGameSettings(e) {
                    this.saveSetting(e, "GamePreferences", "account", "game-settings", 1)
                },
                saveGameInputSettings(e) {
                    this.saveSetting(e, "GamePreferences", "account", "input-settings", 1)
                },
                saveGameSettingsRemote(e) {
                    r.patch("/lol-game-settings/v1/game-settings", e)
                },
                sendJSONTelemetryEvent(e, t = {}) {
                    const n = Object.assign(t, {
                        plugin: "rcp-fe-lol-settings"
                    });
                    for (const e in n) "string" != typeof n[e] && (n[e] = JSON.stringify(n[e]));
                    r.post(`/telemetry/v1/events/${e}`, n)
                },
                setProfilePrivacy: e => r.put(l, e),
                translateClientAnonymitySettingsToGameRepresentation: e => ({
                    anonymityEnabled: e.nameOnlyAnonymityEnabled || e.anonymityEnabled,
                    nameOnlyAnonymityEnabled: e.nameOnlyAnonymityEnabled && !e.anonymityEnabled
                }),
                readClientAnonymitySettingsFromGameRepresentation: e => ({
                    anonymityEnabled: !e.nameOnlyAnonymityEnabled && e.anonymityEnabled,
                    nameOnlyAnonymityEnabled: e.nameOnlyAnonymityEnabled || e.anonymityEnabled
                }),
                calculateClientAnonymitySettings(e, t, n, a) {
                    const o = {
                        anonymityEnabled: n,
                        nameOnlyAnonymityEnabled: !("anonymityEnabled" === e && !1 === t) && a
                    };
                    return o[e] = t, o
                },
                setAnonymousMode(e, t) {
                    const n = this.get("anonymityEnabled"),
                        a = this.get("nameOnlyAnonymityEnabled"),
                        o = this.calculateClientAnonymitySettings(e, t, n, a),
                        i = this.translateClientAnonymitySettingsToGameRepresentation(o),
                        s = JSON.stringify({
                            anonymityEnabled: i.anonymityEnabled,
                            nameOnlyAnonymityEnabled: i.nameOnlyAnonymityEnabled
                        });
                    return r.post("/lol-summoner-profiles/v1/pco/privacy", s)
                }
            });
            t.default = p
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_PP_KEY = void 0, t.isValidPPKey = function(e) {
                return a.has(e)
            };
            const n = "LCUPreferences";
            t.DEFAULT_PP_KEY = n;
            const a = new Set([n, "GamePreferences", "EsportsPreferences", "PerksPreferences"])
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(1);
            const o = "/lol-premade-voice",
                i = o + "/v1/capturedevices",
                s = "/lol-client-config/v3/client-config/lol.client_settings.team_voice.enabled",
                r = a.dataBinding.bindTo(a.socket);
            var l = a.Ember.Service.extend({
                captureDevices: void 0,
                teamVoicePluginEnabled: !1,
                init() {
                    this._super(...arguments), r.observe(i, this, (function(e) {
                        this.set("captureDevices", e)
                    })), r.observe(s, this, (function(e) {
                        this.set("teamVoicePluginEnabled", e || !1)
                    }))
                },
                isPushToTalkAvailable(e) {
                    const t = e ? 1 : 0;
                    return r.post(o + "/v1/push-to-talk/check-available", t)
                },
                willDestroy() {
                    this._super(...arguments), r.unobserve(i, this), r.unobserve(s, this)
                }
            });
            t.default = l
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "3RsT95hL",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\application.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-dialog-frame",[]],["static-attr","class","lol-settings-container"],["static-attr","orientation","bottom"],["static-attr","frame","bordered"],["flush-element"],["text","\\n  "],["append",["helper",["modal-header"],null,[["handleResetToDefaultButtonClick"],[["helper",["action"],[["get",[null]],"handleResetToDefaultButtonClick"],null]]]],false],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-content"],["flush-element"],["text","\\n    "],["open-element","settings-plugin-navigation-bar",[]],["static-attr","class","lol-settings-navs"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["static-attr","class","lol-settings-nav-scroller"],["flush-element"],["text","\\n        "],["open-element","div",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["currentGroups"]]],null,2],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-options"],["flush-element"],["text","\\n      "],["append",["unknown",["outlet"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["append",["unknown",["modal-footer"]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","                "],["append",["helper",["navigation-bar-group-item"],null,[["category","goToSection"],[["get",["category"]],["helper",["action"],[["get",[null]],"goToSection"],null]]]],false],["text","\\n"]],"locals":["category"]},{"statements":[["block",["each"],[["get",["group","categories"]]],null,0]],"locals":[]},{"statements":[["block",["navigation-bar-group"],null,[["group","groupIdx"],[["get",["group"]],["get",["index"]]]],1]],"locals":["group","index"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "rSlwgGwN",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\index.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "O+Ko35Mm",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\general.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\general.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-section-title"],["flush-element"],["append",["unknown",["tra","lol_settings_nav_title_interface"]],false],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","potatoModeEnabled"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","potatoModeEnabled",["helper",["mut"],[["get",["potatoModeEnabled"]]],null],["get",["potatoSettingDisabled"]]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","potatoModeEnabled"],["flush-element"],["append",["unknown",["tra","ux_settings_enable_low_spec_mode"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],18],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","motionEffectsDisabled"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","motionEffectsDisabled",["helper",["mut"],[["get",["motionEffectsDisabled"]]],null],["get",["motionEffectsToggleDisabled"]]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","motionEffectsDisabled"],["flush-element"],["append",["unknown",["tra","ux_settings_disable_motion_effects"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],17],["text","    "],["open-element","p",[]],["static-attr","class","lol-settings-general-subtitle"],["flush-element"],["append",["unknown",["tra","ux_settings_disable_motion_effects_subtitle"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","closeLeagueClientDuringGame"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","closeLeagueClientDuringGame",["helper",["mut"],[["get",["closeLeagueClientDuringGame"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","closeLeagueClientDuringGame"],["flush-element"],["append",["unknown",["tra","ux_settings_unload_in_game_resource_mode"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],16],["text","    "],["open-element","p",[]],["static-attr","class","lol-settings-general-subtitle"],["flush-element"],["append",["unknown",["tra","ux_settings_unload_in_game_setting_subtitle"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["isAbilityPreviewEnabled"]]],null,15],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-window-size-text"],["flush-element"],["append",["unknown",["tra","lol_general_settings_label_window_size"]],false],["close-element"],["text","\\n    "],["open-element","lol-uikit-framed-dropdown",[]],["static-attr","class","lol-settings-window-size-dropdown"],["flush-element"],["text","\\n"],["block",["each"],[["get",["computedSizeInfos"]]],null,13],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-section-title"],["flush-element"],["append",["unknown",["tra","lol_settings_nav_title_system"]],false],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["model","codeOfConductEnabled"]]],null,12],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","uploadCrashReports"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","uploadCrashReports",["helper",["mut"],[["get",["uploadCrashReports"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","uploadCrashReports"],["flush-element"],["append",["unknown",["tra","lol_general_settings_label_auto_send_crash_reports"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],11],["text","  "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["vanguardSystemCheckModalEnabled"]]],null,10],["text","\\n"],["block",["if"],[["get",["profilePrivacyEnabled"]]],null,9],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-section-title"],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_title"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","isAnonymousModeOthers"],["flush-element"],["text","\\n      "],["open-element","input",[]],["static-attr","slot","input"],["static-attr","type","checkbox"],["static-attr","name","isAnonymousModeOthers"],["dynamic-attr","checked",["unknown",["isAnonymousModeOthers"]],null],["dynamic-attr","onchange",["helper",["action"],[["get",[null]],"toggleAnonymousModeOthers"],null],null],["flush-element"],["close-element"],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","isAnonymousModeOthers"],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_other_players_names"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],7],["text","    "],["open-element","p",[]],["static-attr","class","lol-settings-general-subtitle"],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_other_players_names_desc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","isAnonymousModeMine"],["flush-element"],["text","\\n      "],["open-element","input",[]],["static-attr","slot","input"],["static-attr","type","checkbox"],["static-attr","name","isAnonymousModeMine"],["dynamic-attr","disabled",["unknown",["isAnonymousModeEverything"]],null],["dynamic-attr","checked",["unknown",["isAnonymousModeMine"]],null],["dynamic-attr","onchange",["helper",["action"],[["get",[null]],"toggleAnonymousModeMine"],null],null],["flush-element"],["close-element"],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","isAnonymousModeMine"],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_my_name"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],6],["text","    "],["open-element","p",[]],["static-attr","class","lol-settings-general-subtitle"],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_my_name_desc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","isAnonymousModeEverything"],["flush-element"],["text","\\n      "],["open-element","input",[]],["static-attr","slot","input"],["static-attr","type","checkbox"],["static-attr","name","isAnonymousModeEverything"],["dynamic-attr","checked",["unknown",["isAnonymousModeEverything"]],null],["dynamic-attr","onchange",["helper",["action"],[["get",[null]],"toggleAnonymousModeEverything"],null],null],["flush-element"],["close-element"],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","isAnonymousModeEverything"],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_everything"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],5],["text","    "],["open-element","p",[]],["static-attr","class","lol-settings-general-subtitle"],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_everything_desc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["isVngPublisherSettingsVisible"]]],null,4],["text","\\n"],["block",["if"],[["get",["accountVerificationEnabled"]]],null,3],["text","\\n"],["block",["if"],[["get",["showLegacyPatchNumbersSetting"]]],null,2],["text","\\n"],["block",["if"],[["get",["gameRepairEnabled"]]],null,0],["text","\\n  "],["append",["helper",["publishing-locale"],null,[["publishingLocale","publishingContentConfig","selectPublishingLocale"],[["get",["publishingLocale"]],["get",["publishingContentConfig"]],["helper",["action"],[["get",[null]],"selectPublishingLocale"],null]]]],false],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n      "],["append",["unknown",["repair-game-button"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_display_legacy_patch_numbers_tooltip"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","displayLegacyPatchNumbers"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","displayLegacyPatchNumbers",["helper",["mut"],[["get",["displayLegacyPatchNumbers"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","displayLegacyPatchNumbers"],["flush-element"],["append",["unknown",["tra","ux_settings_display_legacy_patch_numbers"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],1],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n      "],["append",["helper",["account-verification"],null,[["accountVerificationConfig"],[["get",["accountVerificationConfig"]]]]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"handleHoneyfruitLinkingOpened"],null],null],["flush-element"],["text","\\n      "],["append",["unknown",["vng-publisher-settings"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_everything_tooltip"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_my_name_tooltip"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_anonymous_mode_hide_other_players_names_tooltip"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_enable_private_profile_tooltip"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","isProfilePrivate"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","isProfilePrivate",["helper",["mut"],[["get",["isProfilePrivate"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","isProfilePrivate"],["flush-element"],["append",["unknown",["tra","ux_settings_enable_private_profile"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],8],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-general-title"],["flush-element"],["append",["unknown",["tra","lol_account_vanguard_system_check_button_title"]],false],["close-element"],["text","\\n      "],["open-element","lol-uikit-flat-button-secondary",[]],["static-attr","class","lol-settings-vanguard-system-check-button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"openVanguardSystemCheckModal"],null],null],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_account_vanguard_system_check_button_label"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","lol_general_settings_tooltip_auto_send_crash_reports"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-window-size-text"],["flush-element"],["append",["unknown",["tra","lol_general_settings_league_code_of_conduct_label"]],false],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-code-of-conduct-link lol-settings-window-size-text"],["flush-element"],["append",["helper",["sanitize"],[["get",["tra","lol_general_settings_league_code_of_conduct_link"]]],null],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["dynamic-attr","scale",["unknown",["sizeInfo","scale"]],null],["dynamic-attr","selected",["unknown",["sizeInfo","selected"]],null],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"selectWindowSize",["get",["sizeInfo","scale"]]],null],null],["flush-element"],["text","\\n          "],["append",["unknown",["sizeInfo","text"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["sizeInfo"]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_disable_ability_previews_tooltip"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","abilityPreviewsDisabled"],["dynamic-attr","data-dd-action-name",["helper",["if"],[["get",["abilityPreviewsDisabled"]],"settings-ability-previews-enable","settings-ability-previews-disable"],null],null],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","abilityPreviewsDisabled",["helper",["mut"],[["get",["abilityPreviewsDisabled"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","abilityPreviewsDisabled"],["flush-element"],["append",["unknown",["tra","ux_settings_disable_ability_previews"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],14],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_unload_in_game_setting_tooltip"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_disable_motion_effects_tooltip"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","general-settings-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","ux_settings_enable_low_spec_mode_tooltip"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "rkLsE+Hf",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\notifications.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\notifications.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-notifications-row"],["flush-element"],["text","\\n  "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","disableEsportsNotifications"],["flush-element"],["text","\\n    "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","disableEsportsNotifications",["helper",["mut"],[["get",["disableEsportsNotifications"]]],null]]]],false],["text","\\n    "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","disableEsportsNotifications"],["static-attr","class","lol-settings-notifications-label"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_notification_settings_label_disable_esports_notifications"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-notifications-row"],["flush-element"],["text","\\n  "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","blockNonFriendGameInvites"],["flush-element"],["text","\\n    "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","blockNonFriendGameInvites",["helper",["mut"],[["get",["blockNonFriendGameInvites"]]],null]]]],false],["text","\\n    "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","blockNonFriendGameInvites"],["static-attr","class","lol-settings-notifications-label"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_notification_settings_label_block_non_friend_game_invites"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-notifications-row"],["flush-element"],["text","\\n  "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","disableCollectionsNotifications"],["flush-element"],["text","\\n    "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","disableCollectionsNotifications",["helper",["mut"],[["get",["disableCollectionsNotifications"]]],null]]]],false],["text","\\n    "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","disableCollectionsNotifications"],["static-attr","class","lol-settings-notifications-label"],["flush-element"],["text","\\n      "],["append",["helper",["sanitize"],[["get",["tra","lol_notification_settings_label_disable_collections_notifications$html"]]],null],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "DMhin0A5",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\chat.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\chat.styl\\" js-path=\\"null\\" "],["text","\\n"],["block",["unless"],[["get",["hideChatFilterToggle"]]],null,4],["open-element","div",[]],["static-attr","class","lol-settings-chat-row"],["flush-element"],["text","\\n  "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","linkClickWarningEnabled"],["flush-element"],["text","\\n    "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","linkClickWarningEnabled",["helper",["mut"],[["get",["linkClickWarningEnabled"]]],null]]]],false],["text","\\n    "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","linkClickWarningEnabled"],["static-attr","class","lol-settings-chat-label"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_general_settings_label_enable_link_click_warning"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["block",["unless"],[["get",["hideMoreUnreadsToggle"]]],null,3],["block",["unless"],[["get",["hideFriendRequestToastsToggle"]]],null,2],["block",["if"],[["get",["discordIntegrationEnabled"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","lol-settings-link"],["flush-element"],["append",["helper",["sanitize"],[["get",["tra","lol_chat_settings_discord_account_management"]]],null],true],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","p",[]],["static-attr","class","lol-settings-chat-section-title"],["flush-element"],["append",["unknown",["tra","lol_chat_settings_label_discord"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-chat-row"],["flush-element"],["text","\\n    "],["append",["helper",["discord-button"],null,[["showDiscordButton"],[["get",["shouldShowDiscordButton"]]]]],false],["text","\\n"],["block",["unless"],[["get",["shouldShowDiscordButton"]]],null,0],["text","  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","lol-settings-chat-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","friendRequestToastsDisabled"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","friendRequestToastsDisabled",["helper",["mut"],[["get",["friendRequestToastsDisabled"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","friendRequestToastsDisabled"],["static-attr","class","lol-settings-chat-label"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_chat_settings_label_enable_friend_request_toasts"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","lol-settings-chat-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","moreUnreadsEnabled"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","moreUnreadsEnabled",["helper",["mut"],[["get",["moreUnreadsEnabled"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","moreUnreadsEnabled"],["static-attr","class","lol-settings-chat-label"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_chat_settings_label_enable_more_unreads"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","lol-settings-chat-row-top"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","negatedChatFilter"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","negatedChatFilter",["helper",["mut"],[["get",["negatedChatFilter"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","negatedChatFilter"],["static-attr","class","lol-settings-chat-label"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_chat_settings_label_enable_language_filter"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "WriKr/lY",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\sound.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\sound.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["flush-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-sound-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","masterSoundEnabled"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","masterSoundEnabled",["helper",["mut"],[["get",["masterSoundEnabled"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","masterSoundEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_master_label"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-sound-title"],["static-attr","for","masterVolume"],["flush-element"],["append",["unknown",["masterVolumeLabel"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-sound-row-slider"],["flush-element"],["text","\\n    "],["append",["helper",["settings-slider"],null,[["property","value","percentage","showTooltip","disabled","handleOnSlideEnd"],["masterVolume",["get",["masterVolume"]],true,true,["get",["soundDisabled"]],["helper",["action"],[["get",[null]],"onSliderSlideEnd"],null]]]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsections"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-sound-row"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","sfxEnabled"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","sfxEnabled",["helper",["mut"],[["get",["sfxEnabled"]]],null],["get",["soundDisabled"]]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","sfxEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_sfx_label"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-title"],["static-attr","for","sfxVolume"],["flush-element"],["append",["unknown",["sfxVolumeLabel"]],false],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row-slider"],["flush-element"],["text","\\n        "],["append",["helper",["settings-slider"],null,[["property","value","percentage","showTooltip","disabled","handleOnSlideEnd"],["sfxVolume",["get",["sfxVolume"]],true,true,["get",["sfxDisabled"]],["helper",["action"],[["get",[null]],"onSliderSlideEnd"],null]]]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","ambientSfxEnabled"],["flush-element"],["text","\\n          "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","ambientSfxEnabled",["helper",["mut"],[["get",["ambientSfxEnabled"]]],null],["get",["sfxDisabled"]]]]],false],["text","\\n          "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","ambientSfxEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_ambient_sound_label"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","pickChampVoEnabled"],["flush-element"],["text","\\n          "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","pickChampVoEnabled",["helper",["mut"],[["get",["pickChampVoEnabled"]]],null],["get",["sfxDisabled"]]]]],false],["text","\\n          "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","pickChampVoEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_pick_quote_label"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","banChampVoEnabled"],["flush-element"],["text","\\n          "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","banChampVoEnabled",["helper",["mut"],[["get",["banChampVoEnabled"]]],null],["get",["sfxDisabled"]]]]],false],["text","\\n          "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","banChampVoEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_ban_quote_label"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-sound-row"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","musicEnabled"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","musicEnabled",["helper",["mut"],[["get",["musicEnabled"]]],null],["get",["soundDisabled"]]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","musicEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_music_label"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-title"],["static-attr","for","musicVolume"],["flush-element"],["append",["unknown",["musicVolumeLabel"]],false],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row-slider"],["flush-element"],["text","\\n        "],["append",["helper",["settings-slider"],null,[["property","value","percentage","showTooltip","disabled","handleOnSlideEnd"],["musicVolume",["get",["musicVolume"]],true,true,["get",["musicDisabled"]],["helper",["action"],[["get",[null]],"onSliderSlideEnd"],null]]]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","championSelectionMusicEnabled"],["flush-element"],["text","\\n          "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","championSelectionMusicEnabled",["helper",["mut"],[["get",["championSelectionMusicEnabled"]]],null],["get",["musicDisabled"]]]]],false],["text","\\n          "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","championSelectionMusicEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_champion_selection_music_label"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","ambienceMusicEnabled"],["flush-element"],["text","\\n          "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","ambienceMusicEnabled",["helper",["mut"],[["get",["ambienceMusicEnabled"]]],null],["get",["musicDisabled"]]]]],false],["text","\\n          "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","ambienceMusicEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_ambience_music_label"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","clientAmbienceMusicEnabled"],["flush-element"],["text","\\n          "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","clientAmbienceMusicEnabled",["helper",["mut"],[["get",["clientAmbienceMusicEnabled"]]],null],["get",["musicDisabled"]]]]],false],["text","\\n          "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","clientAmbienceMusicEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_client_ambience_music_label"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-sound-subsection-row"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","for","loginMusicEnabled"],["flush-element"],["text","\\n          "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","loginMusicEnabled",["helper",["mut"],[["get",["loginMusicEnabled"]]],null],["get",["musicDisabled"]]]]],false],["text","\\n          "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","loginMusicEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","lol_settings_sound_enable_login_music_label"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "RuUdbnQU",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\voice.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\voice.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-voice-party-join"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-voice-section-title"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","voice_settings_party_join_title"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-voice-row"],["static-attr","for","autoJoin"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","autoJoin",["helper",["mut"],[["get",["autoJoin"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","autoJoin"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["text","\\n        "],["append",["helper",["sanitize"],[["get",["tra","voice_settings_party_auto_join"]]],null],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldShowAgreementSection"]]],null,8],["block",["if"],[["get",["teamVoicePluginEnabled"]]],null,7],["text","    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-voice-row"],["static-attr","for","muteOnConnect"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","muteOnConnect",["helper",["mut"],[["get",["muteOnConnect"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","muteOnConnect"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","voice_settings_party_connect_mute"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-voice-input"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-voice-section-title"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","voice_settings_input_title"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-voice-row input-mode-row"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-voice-input-device-section"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","lol-settings-voice-input-device-label"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","voice_settings_input_device_label"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","lol-uikit-framed-dropdown",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["captureDevices"]]],null,6],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-parties-mic-test-button",[]],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-voice-row"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-voice-input-volume-label"],["flush-element"],["text","\\n        "],["append",["unknown",["inputVolumeLabel"]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-input-volume-slider"],["flush-element"],["text","\\n        "],["append",["helper",["settings-slider"],null,[["property","value","percentage","showTooltip","clickset","handleOnChange"],["inputVolume",["get",["inputVolume"]],true,true,true,["helper",["action"],[["get",[null]],"onSliderChange"],null]]]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-voice-input-mode"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-voice-section-title"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","voice_settings_input_mode_title"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","lol-uikit-radio-input",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["inputModes"]]],null,5],["text","    "],["close-element"],["text","\\n"],["block",["if"],[["get",["isInputModeVoice"]]],null,4,2],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["append",["helper",["push-to-talk-key"],null,[["key","onChange","label","voiceType"],[["get",["pushToTalkTeamKey"]],["helper",["action"],[["get",[null]],"selectPushToTalkTeamKey"],null],"voice_settings_ptt_team_label","team"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","lol-settings-voice-push-to-talk"],["flush-element"],["text","\\n        "],["append",["helper",["push-to-talk-key"],null,[["key","onChange","label","voiceType"],[["get",["pushToTalkKey"]],["helper",["action"],[["get",[null]],"selectPushToTalkKey"],null],"voice_settings_ptt_label","party"]]],false],["text","\\n"],["block",["if"],[["get",["teamVoicePluginEnabled"]]],null,0],["text","      "],["close-element"],["text","\\n    "]],"locals":[]},{"statements":[["block",["if"],[["get",["isInputModePushToTalk"]]],null,1]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","lol-settings-voice-push-to-talk"],["flush-element"],["text","\\n        "],["append",["helper",["push-to-talk-key"],null,[["key","onChange","label","voiceType"],[["get",["pushToTalkTeamKey"]],["helper",["action"],[["get",[null]],"selectPushToTalkTeamKey"],null],"voice_settings_ptt_team_label","team"]]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","lol-settings-voice-sensitivity"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","lol-settings-voice-sensitivity-label"],["flush-element"],["text","\\n          "],["append",["unknown",["inputModeVoiceSensitivityLabel"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","voice-sensitivity-slider-wrapper"],["flush-element"],["text","\\n          "],["append",["helper",["settings-slider"],null,[["property","value","percentage","showTooltip","clickset","handleOnChange"],["vadSensitivity",["get",["vadSensitivity"]],true,true,true,["helper",["action"],[["get",[null]],"onSliderChange"],null]]]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["if"],[["get",["teamVoicePluginEnabled"]]],null,3]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-radio-input-option",[]],["static-attr","class","lol-settings-voice-input-mode-option"],["dynamic-attr","selected",["unknown",["inputMode","selected"]],null],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"selectInputMode",["get",["inputMode","name"]]],null],null],["flush-element"],["text","\\n          "],["append",["unknown",["inputMode","label"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["inputMode"]},{"statements":[["text","            "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["dynamic-attr","selected",["unknown",["deviceInfo","selected"]],null],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"selectCaptureDevice",["get",["deviceInfo","handle"]]],null],null],["flush-element"],["text","\\n              "],["append",["unknown",["deviceInfo","name"]],false],["text","\\n            "],["close-element"],["text","\\n"]],"locals":["deviceInfo"]},{"statements":[["text","      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-voice-row"],["static-attr","for","autoJoinTeamVoice"],["flush-element"],["text","\\n          "],["append",["helper",["input"],null,[["slot","type","name","checked","disabled"],["input","checkbox","autoJoinTeamVoice",["helper",["mut"],[["get",["autoJoinTeamVoice"]]],null],["get",["isTeamVoiceDisabled"]]]]],false],["text","\\n          "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","autoJoinTeamVoice"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["text","\\n              "],["append",["helper",["sanitize"],[["get",["tra","voice_settings_team_voice_enabled"]]],null],false],["text","\\n          "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","lol-settings-voice-agreement"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","lol-settings-voice-agreement-description"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","voice_settings_agreement_description"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","button",[]],["static-attr","class","lol-settings-voice-agreement-button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"viewAgreement"],null],null],["flush-element"],["text","\\n          "],["append",["unknown",["tra","voice_settings_agreement_view_button"]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "dBgj4BlA",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\block-list.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-blocked-summoners"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","block-summoner-text"],["flush-element"],["text","\\n    "],["append",["unknown",["tra","blocked_players_block_text"]],false],["text","\\n  "],["close-element"],["text","\\n\\n  "],["append",["helper",["player-name-input"],null,[["enableSubmitButton","submitButtonText","disabled","enterKeyPressHandler","validationHandler","successHandler","errorHandler"],[true,["get",["tra","blocked_summoners_block_button"]],["get",["working"]],["helper",["action"],[["get",[null]],"enterKeyPressHandler"],null],["helper",["action"],[["get",[null]],"validationHandler"],null],["helper",["action"],[["get",[null]],"successHandler"],null],["helper",["action"],[["get",[null]],"errorHandler"],null]]]],false],["text","\\n\\n"],["block",["if"],[["get",["blockedPlayers","length"]]],null,2,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","no-blocked-summoners"],["flush-element"],["append",["unknown",["tra","blocked_summoners_empty"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["blocked-player"],null,[["player","unblock"],[["get",["summoner"]],["helper",["action"],[["get",[null]],"unblock"],null]]]],false],["text","\\n"]],"locals":["summoner"]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","blocked-summoners-info"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_block_list_settings_label_blocked_players"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","blocked-summoners-list"],["flush-element"],["text","\\n"],["block",["each"],[["get",["blockedPlayers"]]],[["key"],["summonerId"]],1],["text","    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "DqQpOqmX",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\game-hotkeys.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\game-hotkeys.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n\\n  "],["append",["helper",["game-hotkeys-content"],null,[["inputSettings","inputSettingsSchema","gameSettingsRemote","gameSettingsSchema","handleComponentInitialized"],[["get",["inputSettings"]],["get",["inputSettingsSchema"]],["get",["gameSettingsRemote"]],["get",["gameSettingsSchema"]],["helper",["action"],[["get",[null]],"handleComponentInitialized"],null]]]],false],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "dhpuj+FZ",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\game-sound.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\game-sound.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n\\n  "],["append",["helper",["game-sound-content"],null,[["gameSettings","gameSettingsSchema","handleComponentInitialized"],[["get",["gameSettings"]],["get",["gameSettingsSchema"]],["helper",["action"],[["get",[null]],"handleComponentInitialized"],null]]]],false],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "IO1elaTy",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\game-interface.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\game-interface.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n\\n  "],["append",["helper",["game-interface-content"],null,[["gameSettings","gameSettingsSchema","handleComponentInitialized"],[["get",["gameSettings"]],["get",["gameSettingsSchema"]],["helper",["action"],[["get",[null]],"handleComponentInitialized"],null]]]],false],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "7ZOgsUoV",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\game-gameplay.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\game-gameplay.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n\\n  "],["append",["helper",["game-gameplay-content"],null,[["gameSettings","gameSettingsSchema","handleComponentInitialized"],[["get",["gameSettings"]],["get",["gameSettingsSchema"]],["helper",["action"],[["get",[null]],"handleComponentInitialized"],null]]]],false],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "KxM2S0w/",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\replays.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\replays.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","replays-settings-root-title"],["flush-element"],["append",["unknown",["tra","label_replays_folder_locations_title"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","replays-settings-root-description"],["flush-element"],["append",["unknown",["tra","label_replays_folder_locations_description"]],false],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-title"],["flush-element"],["append",["unknown",["tra","label_replays_folder_path"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-row"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-value"],["flush-element"],["append",["unknown",["replaysPath"]],false],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"changeReplaysFolderPath"],null],null],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-title"],["flush-element"],["append",["unknown",["tra","label_highlights_folder_path"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-row"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-value"],["flush-element"],["append",["unknown",["highlightsPath"]],false],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","replays-settings-folder-path-button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"changeHighlightsFolderPath"],null],null],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","replays-settings-hints-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","replays-settings-hints-title"],["flush-element"],["append",["unknown",["tra","label_hints_title"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","replays-settings-hints-description"],["flush-element"],["append",["unknown",["tra","label_hints_description"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "M+wN1dQ6",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\privacy-notice.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","class","license-agreement-settings"],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","license-agreement-settings-title"],["flush-element"],["append",["unknown",["tra","license_agreement_title_privacy_notice"]],false],["close-element"],["text","\\n  "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","license-agreement-settings-content"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"handleUrlClick"],null],null],["flush-element"],["append",["helper",["sanitize"],[["get",["privacyPolicyText"]]],null],false],["close-element"],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "YxDkc1+R",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\terms-of-use.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","class","license-agreement-settings"],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","license-agreement-settings-title"],["flush-element"],["append",["unknown",["tra","license_agreement_title_tou"]],false],["close-element"],["text","\\n  "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","license-agreement-settings-content"],["flush-element"],["append",["unknown",["licenseAgreementText"]],false],["close-element"],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "PFOPMdJg",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\thirdparty-licenses.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","class","lol-settings-license"],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","title"],["flush-element"],["text","\\n    "],["append",["unknown",["tra","license_title"]],false],["append",["unknown",["versionInfo","version"]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","subtitle"],["flush-element"],["append",["unknown",["tra","third_party_software"]],false],["close-element"],["text","\\n  "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","license-text-content"],["flush-element"],["text","\\n    "],["append",["unknown",["licenseText"]],false],["text","\\n  "],["close-element"],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "diny2ddP",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\loading.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","style","display: flex; align-items: center; height: 100%;"],["flush-element"],["text","\\n  "],["append",["helper",["uikit-spinner"],null,[["style"],["margin-left: auto; margin-right: auto;"]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "VnbSrWUz",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\version.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\version.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-version"],["flush-element"],["text","\\n  "],["open-element","div",[]],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"onGameClientVersionClick"],null],null],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","title"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_settings_version_game_client"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","subtitle"],["flush-element"],["text","\\n"],["block",["if"],[["get",["displayLegacyPatchNumbers"]]],null,4,3],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["supportedGameReleasesEnabled"]]],null,2],["text","  "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","title"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_settings_version_league_client"]],false],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","subtitle"],["flush-element"],["text","\\n      "],["append",["unknown",["leagueClientVersion"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","p",[]],["static-attr","class","error-box"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","lol-settings-icon-red-x-mark"],["flush-element"],["close-element"],["text","\\n        "],["append",["unknown",["tra","lol_settings_version_game_client_patching_disabled"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"selectRelease",["get",["release"]]],null],null],["dynamic-attr","selected",["unknown",["release","selected"]],null],["flush-element"],["text","\\n          "],["append",["unknown",["release","artifact_id"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["release"]},{"statements":[["text","    "],["open-element","lol-uikit-flat-input",[]],["static-attr","class","text-filter"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["type","class","value","input","placeholder"],["search","filter-input",["get",["supportedGameReleaseSearchTerm"]],["helper",["action"],[["get",[null]],"onSearch"],null],"Filter Supported Versions"]]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","lol-uikit-framed-dropdown",[]],["static-attr","class","dropdown"],["flush-element"],["text","\\n"],["block",["each"],[["get",["filteredSupportedGameReleases"]]],null,1],["text","    "],["close-element"],["text","\\n"],["block",["if"],[["get",["checkingForPatchesDisabled"]]],null,0],["text","    "],["open-element","p",[]],["static-attr","class","warning"],["flush-element"],["append",["unknown",["gamePatchWarning"]],false],["close-element"],["text","\\n\\n    "],["open-element","lol-uikit-flat-button-group",[]],["static-attr","class","button-group"],["static-attr","type","dialog-frame"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"startPatchingRelease"],null],null],["dynamic-attr","disabled",["unknown",["checkingForPatchesDisabled"]],null],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_settings_version_game_client_start_patching"]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"refreshReleases"],null],null],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_settings_version_game_client_start_refresh"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["unknown",["lolTextShorthand"]],false],["text","\\n        "],["append",["unknown",["lolExternalPatchVersion"]],false],["open-element","br",[]],["flush-element"],["close-element"],["append",["unknown",["tftTextShorthand"]],false],["text","\\n        "],["append",["unknown",["tftExternalPatchVersion"]],false],["open-element","br",[]],["flush-element"],["close-element"],["append",["unknown",["gameClientVersion"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["unknown",["gameClientVersion"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "9E5kVkFV",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\legal-statements.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\styles\\\\legal-statements.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-legal-statements"],["flush-element"],["text","\\n"],["block",["if"],[["get",["jpLegalStatementsRequired"]]],null,1,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","title"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_settings_legal_statements_no_additional"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","title"],["dynamic-attr","lang",["unknown",["tra","lol_settings_legal_statements_lang"]],null],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_settings_legal_statements_payment_check"]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","subtitle lol-settings-legal-statements-link"],["flush-element"],["text","\\n        "],["append",["helper",["sanitize"],[["get",["tra","lol_settings_legal_statements_payment_check_link"]]],null],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","title"],["dynamic-attr","lang",["unknown",["tra","lol_settings_legal_statements_lang"]],null],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_settings_legal_statements_commercial_transactions"]],false],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","div",[]],["static-attr","class","subtitle lol-settings-legal-statements-link"],["flush-element"],["text","\\n        "],["append",["helper",["sanitize"],[["get",["tra","lol_settings_legal_statements_commercial_transactions_link"]]],null],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "BB1Ahj+y",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\modal-header.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\modal-header.js\\" "],["text","\\n"],["open-element","settings-plugin-header",[]],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-title-bar"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-title"],["flush-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","lol-settings-header-group-name"],["flush-element"],["append",["unknown",["groupName"]],false],["close-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","lol-settings-title-break"],["flush-element"],["text","/"],["close-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","lol-settings-title-current"],["flush-element"],["append",["unknown",["categoryName"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["canReset"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","lol-uikit-flat-button-secondary",[]],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"showResetConfirmDialog"],null],null],["static-attr","class","lol-settings-reset-button"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_settings_restore_default_button"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "ocq6lw2d",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\modal-footer.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\modal-footer.js\\" "],["text","\\n"],["open-element","lol-uikit-flat-button-group",[]],["static-attr","type","window-popup"],["static-attr","class","lol-settings-close-container"],["flush-element"],["text","\\n  "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","lol-settings-close-button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"closeButtonClick"],null],null],["flush-element"],["text","\\n    "],["append",["unknown",["tra","settings_done_button"]],false],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "gDNdiJXQ",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\navigation-bar-group.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\navigation-bar-group.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-nav-title"],["flush-element"],["append",["unknown",["groupName"]],false],["close-element"],["text","\\n"],["open-element","lol-uikit-navigation-bar",[]],["static-attr","direction","down"],["static-attr","type","tabbed"],["dynamic-attr","selectedindex",["unknown",["selectedIndex"]],null],["flush-element"],["text","\\n  "],["yield","default"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "U9fmhYoL",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\navigation-bar-group-item.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\navigation-bar-group-item.js\\" "],["text","\\n"],["block",["unless"],[["get",["isDisabled"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","lol-uikit-navigation-item",[]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"selectItem",["get",["category"]]],null],null],["static-attr","class","lol-settings-nav"],["dynamic-attr","name",["unknown",["category","name"]],null],["flush-element"],["text","\\n    "],["open-element","div",[]],["flush-element"],["append",["unknown",["categoryTitleKeyTra"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "jYhS+k5/",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\blocked-player.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\blocked-player.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-block-list-player"],["modifier",["action"],[["get",[null]],"remove",["get",["player","id"]]]],["flush-element"],["text","\\n  "],["open-element","lol-social-avatar",[]],["static-attr","class","icon"],["static-attr","hideindicator",""],["static-attr","disabled",""],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldDisplayRiotId"]]],null,3,2],["block",["if"],[["get",["unblocking"]]],null,1,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","blocked-player-unblock-button"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["uikit-spinner"],null,[["width","height"],["20px","20px"]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","blocked-player-game-name"],["flush-element"],["text","\\n      "],["append",["unknown",["summonerName"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","blocked-player-game-name"],["flush-element"],["text","\\n      "],["append",["helper",["player-name"],null,[["format","gameName","tagLine"],["short",["get",["gameName"]],["get",["gameTag"]]]]],false],["text","\\n      "],["open-element","span",[]],["static-attr","class","blocked-player-game-name-tagline"],["flush-element"],["text","\\n        "],["append",["helper",["player-name"],null,[["format","gameName","tagLine"],["full",["get",["gameName"]],["get",["gameTag"]]]]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "YSnpSMWA",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\block-list-error.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\block-list-error.js\\" "],["text","\\n"],["open-element","lol-uikit-tooltip",[]],["flush-element"],["text","\\n  "],["open-element","lol-uikit-content-block",[]],["static-attr","class",""],["static-attr","type","tooltip-small"],["static-attr","style","width: 200px; white-space: normal;"],["flush-element"],["text","\\n"],["block",["if"],[["get",["_errorPacketLocal"]]],null,0],["text","  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","h6",[]],["flush-element"],["append",["unknown",["_errorPacketLocal","title"]],false],["close-element"],["text","\\n      "],["open-element","p",[]],["flush-element"],["append",["unknown",["_errorPacketLocal","text"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "L3Jy3OiV",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\repair-game-button.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\repair-game-button.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-repair-title"],["flush-element"],["append",["unknown",["tra","lol_general_settings_troubleshooting_title"]],false],["close-element"],["text","\\n"],["open-element","lol-uikit-flat-button-secondary",[]],["static-attr","class","lol-settings-repair-button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"initiateRepairClick"],null],null],["flush-element"],["text","\\n  "],["append",["unknown",["tra","lol_general_settings_button_init_game_repair"]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "lvwZcVka",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\publishing-locale.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\publishing-locale.js\\" "],["text","\\n"],["block",["if"],[["get",["showDropdown"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["dynamic-attr","value",["unknown",["option","value"]],null],["dynamic-attr","selected",["unknown",["option","selected"]],null],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"onPublishingLocaleSelected",["get",["option","value"]]],null],null],["flush-element"],["text","\\n        "],["append",["unknown",["option","label"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":["option"]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","lol-publishing-locale-preference-label"],["flush-element"],["append",["unknown",["tra","lol_publishing_locale_settings_dropdown_label"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-framed-dropdown",[]],["static-attr","class","lol-publishing-locale-preference-dropdown"],["flush-element"],["text","\\n"],["block",["each"],[["get",["dropdownOptions"]]],null,0],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "fikUdlNz",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\account-verification.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\account-verification.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-account-verification-row"],["flush-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-account-verification-title"],["flush-element"],["append",["unknown",["tra","lol_account_verification_settings_acc_ver_title"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-account-verification-icon-mobile"],["flush-element"],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["isVerified"]]],null,4],["block",["unless"],[["get",["isVerified"]]],null,3],["text","\\n"],["block",["unless"],[["get",["isVerified"]]],null,2],["text","\\n"],["block",["if"],[["get",["isVerified"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","lol-uikit-flat-button-secondary",[]],["static-attr","class","lol-settings-account-verification-button-change"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"showRemoveProcess"],null],null],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_account_verification_settings_button_sms_change"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","acc-ver-verify-tooltip"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","lol_account_verification_settings_button_sms_verify_tooltip"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-button-secondary",[]],["static-attr","class","lol-settings-account-verification-button-verify"],["dynamic-attr","disabled",["unknown",["cannotVerify"]],null],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"showVerificationProcess"],null],null],["flush-element"],["text","\\n        "],["append",["unknown",["tra","lol_account_verification_settings_button_sms_verify"]],false],["text","\\n      "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","disabled"],["left",["get",["canVerify"]]]],1],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-icon-red-x-mark"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-icon-green-check-mark"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-account-verification-verified-label"],["flush-element"],["append",["unknown",["tra","lol_account_verification_settings_acc_ver_verified_label"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "KXJ7mY9h",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\settings-slider.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\settings-slider.js\\" "],["text","\\n"],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-slider"],["dynamic-attr","value",["unknown",["value"]],null],["dynamic-attr","percentage",["unknown",["percentage"]],null],["dynamic-attr","disabled",["unknown",["disabled"]],null],["dynamic-attr","clickset",["unknown",["clickset"]],null],["flush-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "woOcL3A9",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\push-to-talk-key.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\push-to-talk-key.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"openModal"],null],null],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-label"],["flush-element"],["text","\\n        "],["append",["unknown",["pushToTalkKeyLabel"]],false],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["isUnbound"]]],null,3,2],["close-element"],["text","\\n"],["block",["if"],[["get",["displayKey"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-small"],["flush-element"],["text","\\n            "],["open-element","p",[]],["flush-element"],["text","\\n                "],["append",["unknown",["displayKey"]],false],["text","\\n            "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],0]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-icon"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-modifier"],["flush-element"],["text","\\n                "],["append",["unknown",["pushToTalkKeyModifier"]],false],["text","\\n            "],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-key"],["dynamic-attr","style",["concat",["font-size: ",["unknown",["pushToTalkKeyFontSize"]],";"]]],["flush-element"],["text","\\n                "],["append",["unknown",["pushToTalkKey"]],false],["text","\\n            "],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-speaker-wrapper"],["flush-element"],["text","\\n                "],["open-element","div",[]],["dynamic-attr","class",["concat",["lol-settings-voice-ptt-voice-type-icon ",["unknown",["voiceTypeIconClass"]]]]],["flush-element"],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-speaker"],["flush-element"],["close-element"],["text","\\n            "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-unbound"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-unbound-square"],["flush-element"],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","lol-settings-voice-ptt-unbound-text"],["flush-element"],["append",["unknown",["setKeybindText"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "8OmQIUIf",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-sound-content.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-sound-content.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_MASTER_VOLUME"]],false],["text",":\\n    "],["append",["unknown",["MasterVolumeCurrentValue"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-sound-slider"],["static-attr","for","MasterVolume"],["dynamic-attr","value",["concat",[["unknown",["MasterVolume"]]]]],["static-attr","percentage",""],["flush-element"],["close-element"],["text","\\n  "],["open-element","input",[]],["static-attr","type","checkbox"],["static-attr","name","MasterMute"],["static-attr","class","lol-settings-ingame-sound-mutebutton"],["flush-element"],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","MasterMute"],["flush-element"],["open-element","span",[]],["flush-element"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_MUSIC_VOLUME"]],false],["text",":\\n    "],["append",["unknown",["MusicVolumeCurrentValue"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-sound-slider"],["static-attr","for","MusicVolume"],["dynamic-attr","value",["concat",[["unknown",["MusicVolume"]]]]],["static-attr","percentage",""],["flush-element"],["close-element"],["text","\\n  "],["open-element","input",[]],["static-attr","type","checkbox"],["static-attr","name","MusicMute"],["static-attr","class","lol-settings-ingame-sound-mutebutton"],["flush-element"],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","MusicMute"],["flush-element"],["open-element","span",[]],["flush-element"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_ANNOUNCER_VOLUME"]],false],["text",":\\n    "],["append",["unknown",["AnnouncerVolumeCurrentValue"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-sound-slider"],["static-attr","for","AnnouncerVolume"],["dynamic-attr","value",["concat",[["unknown",["AnnouncerVolume"]]]]],["static-attr","percentage",""],["flush-element"],["close-element"],["text","\\n  "],["open-element","input",[]],["static-attr","type","checkbox"],["static-attr","name","AnnouncerMute"],["static-attr","class","lol-settings-ingame-sound-mutebutton"],["flush-element"],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","AnnouncerMute"],["flush-element"],["open-element","span",[]],["flush-element"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_VOICE_VOLUME"]],false],["text",":\\n    "],["append",["unknown",["VoiceVolumeCurrentValue"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-sound-slider"],["static-attr","for","VoiceVolume"],["dynamic-attr","value",["concat",[["unknown",["VoiceVolume"]]]]],["static-attr","percentage",""],["flush-element"],["close-element"],["text","\\n  "],["open-element","input",[]],["static-attr","type","checkbox"],["static-attr","name","VoiceMute"],["static-attr","class","lol-settings-ingame-sound-mutebutton"],["flush-element"],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","VoiceMute"],["flush-element"],["open-element","span",[]],["flush-element"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_FX_VOLUME"]],false],["text",":\\n    "],["append",["unknown",["SfxVolumeCurrentValue"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-sound-slider"],["static-attr","for","SfxVolume"],["dynamic-attr","value",["concat",[["unknown",["SfxVolume"]]]]],["static-attr","percentage",""],["flush-element"],["close-element"],["text","\\n  "],["open-element","input",[]],["static-attr","type","checkbox"],["static-attr","name","SfxMute"],["static-attr","class","lol-settings-ingame-sound-mutebutton"],["flush-element"],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","SfxMute"],["flush-element"],["open-element","span",[]],["flush-element"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_NOTIFICATIONS_VOLUME"]],false],["text",":\\n    "],["append",["unknown",["NotificationsVolumeCurrentValue"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-sound-slider"],["static-attr","for","NotificationsVolume"],["dynamic-attr","value",["concat",[["unknown",["NotificationsVolume"]]]]],["static-attr","percentage",""],["flush-element"],["close-element"],["text","\\n  "],["open-element","input",[]],["static-attr","type","checkbox"],["static-attr","name","NotificationsMute"],["static-attr","class","lol-settings-ingame-sound-mutebutton"],["flush-element"],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","NotificationsMute"],["flush-element"],["open-element","span",[]],["flush-element"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_AMBIENCE_VOLUME"]],false],["text",":\\n    "],["append",["unknown",["AmbienceVolumeCurrentValue"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-sound-slider"],["static-attr","for","AmbienceVolume"],["dynamic-attr","value",["concat",[["unknown",["AmbienceVolume"]]]]],["static-attr","percentage",""],["flush-element"],["close-element"],["text","\\n  "],["open-element","input",[]],["static-attr","type","checkbox"],["static-attr","name","AmbienceMute"],["static-attr","class","lol-settings-ingame-sound-mutebutton"],["flush-element"],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","AmbienceMute"],["flush-element"],["open-element","span",[]],["flush-element"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_PINGS_VOLUME"]],false],["text",":\\n    "],["append",["unknown",["PingsVolumeCurrentValue"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-sound-slider"],["static-attr","for","PingsVolume"],["dynamic-attr","value",["concat",[["unknown",["PingsVolume"]]]]],["static-attr","percentage",""],["flush-element"],["close-element"],["text","\\n  "],["open-element","input",[]],["static-attr","type","checkbox"],["static-attr","name","PingsMute"],["static-attr","class","lol-settings-ingame-sound-mutebutton"],["flush-element"],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","PingsMute"],["flush-element"],["open-element","span",[]],["flush-element"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-dropdown-item lol-settings-ingame-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-dropdown-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_SR_THEME_MUSIC_TITLE"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-framed-dropdown",[]],["static-attr","class","lol-settings-ingame-dropdown"],["static-attr","id","ThemeMusic"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["static-attr","value","0"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_SR_THEME_MUSIC_UPDATED"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["static-attr","value","1"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_SR_THEME_MUSIC_CLASSIC"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-sound-checkbox lol-settings-ingame-row"],["flush-element"],["text","\\n  "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-video-checkbox"],["static-attr","name","EnableAudio"],["flush-element"],["text","\\n    "],["open-element","input",[]],["static-attr","slot","input"],["static-attr","type","checkbox"],["static-attr","name","EnableAudio"],["flush-element"],["close-element"],["text","\\n    "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","name","EnableAudio"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_DISABLE_SOUND_LABEL"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","label",[]],["static-attr","class","lol-settings-ingame-sound-description-text"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_SOUND_DISABLE_SOUND_DESC"]],false],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "whNfrQ2o",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-interface-content.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-interface-content.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-section-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_INTERFACE_SIZE_TITLE"]],false],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-interface-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-interface-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_INTERFACE_HUD_SCALE"]],false],["text",":\\n    "],["append",["unknown",["scaleDisplays","GlobalScale"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-interface-slider"],["static-attr","for","GlobalScale"],["dynamic-attr","value",["concat",[["unknown",["scaleDisplays","GlobalScale"]]]]],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-interface-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-interface-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_INTERFACE_CHAT_SCALE"]],false],["text",":\\n    "],["append",["unknown",["scaleDisplays","ChatScale"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-interface-slider"],["static-attr","for","ChatScale"],["dynamic-attr","value",["concat",[["unknown",["scaleDisplays","ChatScale"]]]]],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-interface-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-interface-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_INTERFACE_MINIMAP_SCALE"]],false],["text",":\\n    "],["append",["unknown",["scaleDisplays","MinimapScale"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-interface-slider"],["static-attr","for","MinimapScale"],["dynamic-attr","value",["concat",[["unknown",["scaleDisplays","MinimapScale"]]]]],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-interface-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-interface-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_INTERFACE_OBJECTIVE_PLANNING_SCALE"]],false],["text",":\\n    "],["append",["unknown",["scaleDisplays","ObjectiveVoteScale"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-interface-slider"],["static-attr","for","ObjectiveVoteScale"],["dynamic-attr","value",["concat",[["unknown",["scaleDisplays","ObjectiveVoteScale"]]]]],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["block",["each"],[["get",["checkBoxGroups"]]],null,6]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["dynamic-attr","value",["get",["index"]],null],["flush-element"],["append",["helper",["get"],[["get",["tra"]],["get",["dropdownOption","title"]]],null],false],["close-element"],["text","\\n"]],"locals":["dropdownOption","index"]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","lol-settings-dropdown-item"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-section-title"],["flush-element"],["append",["helper",["get"],[["get",["tra"]],["get",["dropdown","title"]]],null],false],["close-element"],["text","\\n      "],["open-element","lol-uikit-framed-dropdown",[]],["static-attr","class","lol-settings-interface-dropdown"],["dynamic-attr","id",["concat",[["unknown",["dropdown","dataKey"]]]]],["flush-element"],["text","\\n"],["block",["each"],[["get",["dropdown","options"]]],null,0],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":["dropdown"]},{"statements":[["text","          "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-interface-checkbox"],["dynamic-attr","name",["unknown",["checkBoxOption","dataKey"]],null],["flush-element"],["text","\\n            "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox",["get",["checkBoxOption","dataKey"]],["helper",["mut"],[["helper",["get"],[["get",[null]],["get",["checkBoxOption","dataKey"]]],null]],null]]]],false],["text","\\n            "],["open-element","label",[]],["static-attr","slot","label"],["dynamic-attr","for",["concat",[["unknown",["checkBoxOption","dataKey"]]]]],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["helper",["get"],[["get",["tra"]],["get",["checkBoxOption","propertyName"]]],null],false],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["unless"],[["get",["checkBoxOption","leftColumn"]]],null,2]],"locals":["checkBoxOption"]},{"statements":[["text","          "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-interface-checkbox"],["dynamic-attr","name",["unknown",["checkBoxOption","dataKey"]],null],["flush-element"],["text","\\n            "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox",["get",["checkBoxOption","dataKey"]],["helper",["mut"],[["helper",["get"],[["get",[null]],["get",["checkBoxOption","dataKey"]]],null]],null]]]],false],["text","\\n            "],["open-element","label",[]],["static-attr","slot","label"],["dynamic-attr","for",["concat",[["unknown",["checkBoxOption","dataKey"]]]]],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["helper",["get"],[["get",["tra"]],["get",["checkBoxOption","propertyName"]]],null],false],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["checkBoxOption","leftColumn"]]],null,4]],"locals":["checkBoxOption"]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-section-title"],["flush-element"],["append",["helper",["get"],[["get",["tra"]],["get",["checkBoxGroup","sectionName"]]],null],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-interface-checkboxes"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-interface-checkbox-column"],["flush-element"],["text","\\n"],["block",["each"],[["get",["checkBoxGroup","options"]]],null,5],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-interface-checkbox-column"],["flush-element"],["text","\\n"],["block",["each"],[["get",["checkBoxGroup","options"]]],null,3],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["each"],[["get",["checkBoxGroup","dropdowns"]]],null,1]],"locals":["checkBoxGroup"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "ojzzvDgK",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-gameplay-content.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-gameplay-content.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-gameplay-controls"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-section-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_CONTROLS_TITLE"]],false],["close-element"],["text","\\n"],["block",["if"],[["get",["showUseSoftwareMouse"]]],null,0],["text","  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-slider-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_MOUSE_SPEED"]],false],["text",":\\n      "],["append",["unknown",["sliders","GameMouseSpeed"]],false],["close-element"],["text","\\n    "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-slider"],["static-attr","for","GameMouseSpeed"],["static-attr","step","5"],["dynamic-attr","value",["concat",[["unknown",["sliders","GameMouseSpeed"]]]]],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-slider-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_CAMERA_MOVE_SPEED_MOUSE"]],false],["text",":\\n      "],["append",["unknown",["sliders","MapScrollSpeed"]],false],["close-element"],["text","\\n    "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-slider"],["static-attr","for","MapScrollSpeed"],["dynamic-attr","value",["concat",[["unknown",["sliders","MapScrollSpeed"]]]]],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-slider-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_CAMERA_MOVE_SPEED_KEYBOARD"]],false],["text",":\\n      "],["append",["unknown",["sliders","KeyboardScrollSpeed"]],false],["close-element"],["text","\\n    "],["open-element","lol-uikit-slider",[]],["static-attr","class","lol-settings-ingame-slider"],["static-attr","for","KeyboardScrollSpeed"],["dynamic-attr","value",["concat",[["unknown",["sliders","KeyboardScrollSpeed"]]]]],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-column-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-column"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","SnapCameraOnRespawn"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","SnapCameraOnRespawn",["helper",["mut"],[["get",["SnapCameraOnRespawn"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","SnapCameraOnRespawn"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_MOVE_CAM_ON_REVIVE"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","MiddleClickDragScrollEnabled"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","MiddleClickDragScrollEnabled",["helper",["mut"],[["get",["MiddleClickDragScrollEnabled"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","MiddleClickDragScrollEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_MOUSE_BUTTON_DRAG_SCROLL"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-column"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","ScrollSmoothingEnabled"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","ScrollSmoothingEnabled",["helper",["mut"],[["get",["ScrollSmoothingEnabled"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","ScrollSmoothingEnabled"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_ENABLE_SMOOTH_CAMERA"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-dropdown-item lol-settings-ingame-row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-dropdown-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_CAMERA_LOCK_MODE_TITLE"]],false],["close-element"],["text","\\n    "],["open-element","lol-uikit-framed-dropdown",[]],["static-attr","class","lol-settings-ingame-dropdown"],["static-attr","id","CameraLockMode"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["static-attr","value","0"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_CAMERA_LOCK_MODE_PER_SIDE"]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["static-attr","value","1"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_CAMERA_LOCK_MODE_FIXED"]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-dropdown-option",[]],["static-attr","slot","lol-uikit-dropdown-option"],["static-attr","value","2"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_CAMERA_LOCK_MODE_SEMI_LOCKED"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-gameplay-controls"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-section-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_GAMEPLAY_TITLE"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-column-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-column"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","AutoAcquireTarget"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","AutoAcquireTarget",["helper",["mut"],[["get",["AutoAcquireTarget"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","AutoAcquireTarget"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_AUTOATTACK"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","ShowTurretRangeIndicators"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","ShowTurretRangeIndicators",["helper",["mut"],[["get",["ShowTurretRangeIndicators"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","ShowTurretRangeIndicators"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_SHOW_TURRET_RANGE_INDICATORS"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","RecommendJunglePaths"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","RecommendJunglePaths",["helper",["mut"],[["get",["RecommendJunglePaths"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","RecommendJunglePaths"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_RECOMMEND_JUNGLE_PATHS"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","ClampCastTargetLocationWithinMaxRange"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","ClampCastTargetLocationWithinMaxRange",["helper",["mut"],[["get",["ClampCastTargetLocationWithinMaxRange"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","ClampCastTargetLocationWithinMaxRange"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_CLAMP_CAST_TARGET_LOCATION_WITHIN_MAX_RANGE"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-column"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","PredictMovement"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","PredictMovement",["helper",["mut"],[["get",["PredictMovement"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","PredictMovement"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_MOVEMENT_PREDICTION"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","EnableTargetedAttackMove"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","EnableTargetedAttackMove",["helper",["mut"],[["get",["EnableTargetedAttackMove"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","EnableTargetedAttackMove"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_ATTACK_MOVE_ON_CURSOR"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-checkbox lol-settings-ingame-checkbox"],["static-attr","name","TargetChampionsOnlyAsToggle"],["flush-element"],["text","\\n        "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","TargetChampionsOnlyAsToggle",["helper",["mut"],[["get",["TargetChampionsOnlyAsToggle"]]],null]]]],false],["text","\\n        "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","TargetChampionsOnlyAsToggle"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_TARGET_CHAMPIONS_ONLY_AS_TOGGLE"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-ingame-checkbox"],["static-attr","name","OSXMouseAcceleration"],["flush-element"],["text","\\n      "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","OSXMouseAcceleration",["helper",["mut"],[["get",["OSXMouseAcceleration"]]],null]]]],false],["text","\\n      "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","OSXMouseAcceleration"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_GAMEPLAY_USE_SOFTWARE_MOUSE"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "dfmewvX3",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-hotkeys-additional-section.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-hotkeys-additional-section.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","additional-hotkeys-header"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"toggle"],null],null],["flush-element"],["append",["helper",["get"],[["get",["tra"]],["get",["tab","groupName"]]],null],false],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","additional-hotkeys-main"],["flush-element"],["text","\\n"],["block",["each"],[["get",["tab","subgroups"]]],null,4],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","            "],["open-element","td",[]],["static-attr","class","td-normal"],["dynamic-attr","name",["concat",[["unknown",["control","dataKey"]],"_set2"]]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"showKeybindingDialog",["get",["control","section"]],["get",["control","dataKey"]],0],null],null],["flush-element"],["append",["helper",["format-key-bindings"],[["helper",["get"],[["helper",["get"],[["get",["inputSettings"]],["get",["control","section"]]],null],["get",["control","dataKey"]]],null]],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","td",[]],["static-attr","class","td-normal"],["dynamic-attr","name",["concat",[["unknown",["control","dataKey"]],"_set1"]]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"showKeybindingDialog",["get",["control","section"]],["get",["control","dataKey"]],1],null],null],["flush-element"],["append",["helper",["format-key-bindings"],[["helper",["get"],[["helper",["get"],[["get",["inputSettings"]],["get",["control","section"]]],null],["get",["control","dataKey"]]],null],1],null],false],["close-element"],["text","\\n            "],["open-element","td",[]],["static-attr","class","td-normal"],["dynamic-attr","name",["concat",[["unknown",["control","dataKey"]],"_set2"]]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"showKeybindingDialog",["get",["control","section"]],["get",["control","dataKey"]],2],null],null],["flush-element"],["append",["helper",["format-key-bindings"],[["helper",["get"],[["helper",["get"],[["get",["inputSettings"]],["get",["control","section"]]],null],["get",["control","dataKey"]]],null],2],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","tr",[]],["flush-element"],["text","\\n          "],["open-element","td",[]],["static-attr","class","td-normal td-column-header"],["flush-element"],["append",["helper",["get"],[["get",["tra"]],["get",["control","name"]]],null],false],["close-element"],["text","\\n"],["block",["if"],[["get",["subgroup","twoSets"]]],null,1,0],["text","        "],["close-element"],["text","\\n"]],"locals":["control"]},{"statements":[["text","          "],["open-element","td",[]],["static-attr","class","td-no-border"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_SET_1"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","table",[]],["static-attr","class","additional-hotkeys-tb"],["static-attr","cellspacing","0"],["static-attr","cellpadding","0"],["static-attr","ondragstart","return false;"],["static-attr","ondrop","return false;"],["flush-element"],["text","\\n      "],["open-element","tr",[]],["flush-element"],["text","\\n        "],["open-element","td",[]],["static-attr","class","td-no-border td-column-header"],["flush-element"],["append",["helper",["get"],[["get",["tra"]],["get",["subgroup","name"]]],null],false],["close-element"],["text","\\n"],["block",["if"],[["get",["subgroup","twoSets"]]],null,3],["text","        "],["open-element","td",[]],["static-attr","class","td-no-border"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_SET_2"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["subgroup","controls"]]],null,2],["text","    "],["close-element"],["text","\\n"]],"locals":["subgroup"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "vGyVmO5b",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-hotkeys-additional.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-hotkeys-additional.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-additional"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-section-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_ADDITIONAL_HOTKEYS_TITLE"]],false],["close-element"],["text","\\n"],["block",["each"],[["get",["additionalHotkeyGroups"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["helper",["game-hotkeys-additional-section"],null,[["tab","showKeybindingDialog","inputSettings"],[["get",["tab"]],["helper",["action"],[["get",[null]],"showKeybindingDialog"],null],["get",["inputSettings"]]]]],false],["text","\\n"]],"locals":["tab"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "xOQcrAYq",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-hotkeys-primary-button.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-hotkeys-primary-button.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-keybinding-button-top"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"showKeybindingDialog",["get",["section"]],["get",["dataKey"]]],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-keybinding-button-modifier lol-settings-ingame-hotkeys-keybinding-button-colored-text"],["flush-element"],["append",["helper",["get-key-bindings-modifier"],[["get",["keybinding"]]],null],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-keybinding-button-content lol-settings-ingame-hotkeys-keybinding-button-colored-text"],["flush-element"],["append",["helper",["get-key-bindings-main-key"],[["get",["keybinding"]]],null],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-keybinding-button-bottom"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"toggleQuickCast",["get",["quickbindKey"]]],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-keybinding-button-bottom-icon"],["flush-element"],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "WL1FHwxi",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-hotkeys-primary.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-hotkeys-primary.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-primary"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-section-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_PRIMARY_HOTKEYS"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-row"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-button-secondary",[]],["static-attr","class","lol-settings-ingame-hotkeys-castall-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"changeCastAll",true],null],null],["flush-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","lol-settings-ingame-hotkeys-castall-text"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_QUICK_CAST_ALL"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","lol-uikit-flat-button-secondary",[]],["static-attr","class","lol-settings-ingame-hotkeys-castall-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"changeCastAll",false],null],null],["flush-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","lol-settings-ingame-hotkeys-castall-text"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_NORMAL_CAST_ALL"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-abilities-block-left"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_ABILITIES_LABEL"]],false],["close-element"],["text","\\n"],["block",["each"],[["get",["abilities"]]],null,2],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-abilities-block-right"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_SUMMONER_SPELLS_LABEL"]],false],["text","/"],["append",["unknown",["tra","LOL_INGAME_SETTINGS_KB_KEY_EVTNORMALCASTROLEBOUND"]],false],["close-element"],["text","\\n"],["block",["each"],[["get",["summonerSpells"]]],null,1],["text","      "],["append",["helper",["game-hotkeys-primary-button"],null,[["quickcast","keybinding","section","dataKey","quickbindKey","showKeybindingDialog","toggleQuickCast"],[["helper",["get"],[["get",["inputSettings","Quickbinds"]],["get",["roleBound","quickCast"]]],null],["helper",["get"],[["get",["inputSettings","GameEvents"]],["get",["roleBound","dataKey1"]]],null],["get",["roleBound","section"]],["get",["roleBound","dataKey1"]],["get",["roleBound","quickCast"]],["helper",["action"],[["get",[null]],"showKeybindingDialog"],null],["helper",["action"],[["get",[null]],"toggleQuickCast"],null]]]],false],["text","\\n    "],["close-element"],["text","    \\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-abilities-block-left"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_ITEMS_LABEL"]],false],["close-element"],["text","\\n"],["block",["each"],[["get",["items"]]],null,0],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-hotkeys-abilities-block-right"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_TRINKET_LABEL"]],false],["close-element"],["text","\\n      "],["append",["helper",["game-hotkeys-primary-button"],null,[["quickcast","keybinding","section","dataKey","quickbindKey","showKeybindingDialog","toggleQuickCast"],[["helper",["get"],[["get",["inputSettings","Quickbinds"]],["get",["trinket","quickCast"]]],null],["helper",["get"],[["get",["inputSettings","GameEvents"]],["get",["trinket","dataKey1"]]],null],["get",["trinket","section"]],["get",["trinket","dataKey1"]],["get",["trinket","quickCast"]],["helper",["action"],[["get",[null]],"showKeybindingDialog"],null],["helper",["action"],[["get",[null]],"toggleQuickCast"],null]]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["game-hotkeys-primary-button"],null,[["quickcast","keybinding","section","dataKey","quickbindKey","showKeybindingDialog","toggleQuickCast"],[["helper",["get"],[["get",["inputSettings","Quickbinds"]],["get",["control","quickCast"]]],null],["helper",["get"],[["get",["inputSettings","GameEvents"]],["get",["control","dataKey1"]]],null],["get",["control","section"]],["get",["control","dataKey1"]],["get",["control","quickCast"]],["helper",["action"],[["get",[null]],"showKeybindingDialog"],null],["helper",["action"],[["get",[null]],"toggleQuickCast"],null]]]],false],["text","\\n"]],"locals":["control"]},{"statements":[["text","      "],["append",["helper",["game-hotkeys-primary-button"],null,[["quickcast","keybinding","section","dataKey","quickbindKey","showKeybindingDialog","toggleQuickCast"],[["helper",["get"],[["get",["inputSettings","Quickbinds"]],["get",["control","quickCast"]]],null],["helper",["get"],[["get",["inputSettings","GameEvents"]],["get",["control","dataKey1"]]],null],["get",["control","section"]],["get",["control","dataKey1"]],["get",["control","quickCast"]],["helper",["action"],[["get",[null]],"showKeybindingDialog"],null],["helper",["action"],[["get",[null]],"toggleQuickCast"],null]]]],false],["text","\\n"]],"locals":["control"]},{"statements":[["text","        "],["append",["helper",["game-hotkeys-primary-button"],null,[["quickcast","keybinding","section","dataKey","quickbindKey","showKeybindingDialog","toggleQuickCast"],[["helper",["get"],[["get",["inputSettings","Quickbinds"]],["get",["control","quickCast"]]],null],["helper",["get"],[["get",["inputSettings","GameEvents"]],["get",["control","dataKey1"]]],null],["get",["control","section"]],["get",["control","dataKey1"]],["get",["control","quickCast"]],["helper",["action"],[["get",[null]],"showKeybindingDialog"],null],["helper",["action"],[["get",[null]],"toggleQuickCast"],null]]]],false],["text","\\n"]],"locals":["control"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "UBASASUY",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-hotkeys-quickcast.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-hotkeys-quickcast.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","lol-settings-ingame-quickcast-with-indicators"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-ingame-section-title"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_QUICKCAST_WITH_INDICATOR_TITLE"]],false],["close-element"],["text","\\n  "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-ingame-checkbox"],["flush-element"],["text","\\n    "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","quickCastWithIndicator",["helper",["mut"],[["get",["SmartCastOnKeyRelease"]]],null]]]],false],["text","\\n    "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","quickCastWithIndicator"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_QUICKCAST_WITH_INDICATOR"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","lol-uikit-flat-checkbox",[]],["static-attr","class","lol-settings-ingame-checkbox"],["flush-element"],["text","\\n    "],["append",["helper",["input"],null,[["slot","type","name","checked"],["input","checkbox","castSpellUponAnother",["helper",["mut"],[["get",["SmartCastWithIndicator_CastWhenNewSpellSelected"]]],null]]]],false],["text","\\n    "],["open-element","label",[]],["static-attr","slot","label"],["static-attr","for","castSpellUponAnother"],["static-attr","class","lol-settings-checkbox-label"],["flush-element"],["append",["unknown",["tra","LOL_SETTINGS_INGAME_HOTKEYS_CAST_SPELL_UPON_ANOTHER"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "1yORsdae",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\game-hotkeys-content.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\game-hotkeys-content.js\\" "],["text","\\n"],["text","\\n"],["open-element","section",[]],["static-attr","class","lol-settings-hotkeys"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","lol-settings-hotkeys_content"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-hotkeys_content__label"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_settings_nav_title_hotkeys"]],false],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-hotkeys_content__description"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","lol_settings_hotkeys_section_description"]],false],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-hotkeys_content__button-container"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-flat-button-secondary",[]],["static-attr","class","lol-settings-hotkeys__button--practice"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"handlePracticeToolClick"],null],null],["dynamic-attr","disabled",["unknown",["isPracticeToolDisabled"]],null],["flush-element"],["text","\\n        "],["append",["unknown",["practiceToolButtonLabel"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "wnGxOgy7",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\vng-publisher-settings.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\vng-publisher-settings.js\\" "],["text","\\n"],["block",["if"],[["get",["isVngReady"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["unknown",["honeyfruit-settings-error"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","lol-settings-general-row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","lol-settings-general-title"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","vng_settings_account"]],false],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["isError"]]],null,0],["text","    "],["open-element","a",[]],["static-attr","class","vng-publisher-settings__button"],["static-attr","href","#"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"handleButtonClick"],null],null],["flush-element"],["text","\\n      "],["append",["unknown",["tra","vng_settings_edit_profile"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, n) => {
            const a = n(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "WV1XbXI7",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\templates\\\\components\\\\honeyfruit-settings-error.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\cid\\\\p4\\\\v3\\\\Releases_16_10\\\\LeagueClientContent_Release\\\\15691\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-settings\\\\src\\\\app\\\\components\\\\honeyfruit-settings-error.js\\" "],["text","\\n"],["append",["unknown",["tra","honeyfruit_settings_error"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }],
        t = {};

    function n(a) {
        var o = t[a];
        if (void 0 !== o) return o.exports;
        var i = t[a] = {
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, n), i.exports
    }
    n.d = (e, t) => {
        for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    n(0)
})();
//# sourceMappingURL=rcp-fe-lol-settings.js.map