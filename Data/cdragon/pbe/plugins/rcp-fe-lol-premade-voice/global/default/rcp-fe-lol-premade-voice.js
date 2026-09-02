(() => {
    var e = [function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(n(1)),
                a = r(n(2)),
                o = r(n(12));
            n(13);
            const l = "rcp-fe-lol-premade-voice",
                s = document.currentScript.ownerDocument;
            const c = window.getPluginAnnounceEventName(l);
            s.addEventListener(c, (function(e) {
                const t = e.registrationHandler;
                o.default.set(s), t((async e => {
                    await i.default.init(e, {
                        Audio: e => e.get("rcp-fe-audio"),
                        ComponentFactory: e => e.get("rcp-fe-common-libs").getComponentFactory("1"),
                        ContextualNotificationManager: e => e.get("rcp-fe-lol-uikit").getContextualNotificationManager(),
                        dataBinding: e => e.get("rcp-fe-common-libs").getDataBinding("rcp-fe-lol-premade-voice"),
                        FlyoutManager: e => e.get("rcp-fe-lol-uikit").getFlyoutManager(),
                        localeDirectionOverrides: e => e.get("rcp-fe-common-libs").localeDirectionOverrides,
                        logger: e => e.get("rcp-fe-common-libs").logging.create(l),
                        ModalManager: e => e.get("rcp-fe-lol-uikit").getModalManager(),
                        SharedPlayerBehaviorApps: e => e.get("rcp-fe-lol-shared-components").getApi_SharedPlayerBehaviorApps(),
                        Social: e => e.get("rcp-fe-lol-social"),
                        TemplateHelper: e => e.get("rcp-fe-lol-uikit").getTemplateHelper(),
                        TooltipManager: e => e.get("rcp-fe-lol-uikit").getTooltipManager(),
                        tra: e => e.get("rcp-fe-lol-l10n").tra().overlay("/fe/lol-l10n/trans.json").overlay("/fe/lol-premade-voice/trans.json"),
                        webComponents: e => e.get("rcp-fe-common-libs").getWebComponents(s)
                    }), await a.default.init(e, {
                        Settings: e => e.get("rcp-fe-lol-settings")
                    }), await i.default.tra.ready();
                    n(14)();
                    return new(n(127))
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
            const r = {
                init: function(e, n) {
                    return t = e, this.add(n)
                },
                _getValue: function(e, n) {
                    let r;
                    return "function" == typeof n ? (r = n(t), r || console.warn("The function for key " + e + " returned a falsy value: ", r)) : "string" == typeof n ? (r = t.get(n), r || console.warn("The provider `get` invocation for the key " + e + " returned a falsy value: ", r)) : "object" == typeof n && (r = n), r
                },
                add: function(e) {
                    e = e || {};
                    const t = [],
                        n = this;
                    return Object.keys(e).forEach((function(r) {
                        const i = e[r],
                            a = n._getValue(r, i);
                        a && a.then ? (a.then((function(e) {
                            e || console.warn("The promise for the key " + r + " resolved with a falsy value: ", e), n._addValue(r, e)
                        })), t.push(a)) : n._addValue(r, a)
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
            e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.registerPlugin = function(e, t) {
                const n = document.currentScript?.ownerDocument || document,
                    r = window.getPluginAnnounceEventName(e);
                n.addEventListener(r, (({
                    registrationHandler: e
                }) => e((e => t(e, l)))), {
                    once: !0
                })
            };
            const o = a(n(3));
            i(n(4), t), i(n(8), t), i(n(11), t);
            const l = new o.default;
            t.default = l
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
                        const r = n,
                            i = e[r];
                        e[r] && t.push(this._addValue(r, i))
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
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SettingsCategoryName = t.SettingsCategory = void 0, i(n(5), t);
            var a = n(6);
            Object.defineProperty(t, "SettingsCategory", {
                enumerable: !0,
                get: function() {
                    return a.SettingsCategory
                }
            });
            var o = n(7);
            Object.defineProperty(t, "SettingsCategoryName", {
                enumerable: !0,
                get: function() {
                    return o.SettingsCategoryName
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
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(n(9), t), i(n(10), t)
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
            n.r(t)
        }, (e, t, n) => {
            "use strict";
            var r = h(n(15)),
                i = h(n(85)),
                a = h(n(101)),
                o = h(n(110)),
                l = h(n(115)),
                s = h(n(118)),
                c = h(n(121)),
                p = h(n(124)),
                d = n(1);

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = function(e = document) {
                if (e.premadeVoiceElementsRegistered) return;
                const {
                    registerCustomElementV1: t
                } = d.webComponents;
                t(i.default), t(r.default), t(o.default), t(a.default), t(l.default), t(s.default), t(c.default), t(p.default), e.premadeVoiceElementsRegistered = !0
            }
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = S(n(16)),
                i = n(1),
                a = w(n(17)),
                o = w(n(18)),
                l = w(n(19)),
                s = w(n(20)),
                c = w(n(21)),
                p = w(n(22)),
                d = w(n(23)),
                h = w(n(25)),
                m = w(n(26)),
                u = w(n(27)),
                g = w(n(29)),
                A = w(n(30)),
                _ = w(n(31)),
                v = w(n(32)),
                b = w(n(33)),
                y = w(n(34)),
                f = w(n(35)),
                E = n(36),
                x = n(37),
                C = S(n(38)),
                k = n(39),
                B = w(n(40));

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function $(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return ($ = function(e) {
                    return e ? n : t
                })(e)
            }

            function S(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = $(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, n && n.set(e, r), r
            }
            const T = "chatParticipantsKey",
                P = "HONOR_LEVEL_TOO_LOW",
                O = "PLUGIN_DISABLED",
                D = "QUEUE_NOT_ENABLED",
                I = "NOT_IN_ACTIVE_GAME_PHASE",
                V = "VOICE_COMPLIANCE_AGREEMENT_NOT_ACCEPTED",
                M = "parties_comm_panel_team_voice_status_unavailable",
                N = {
                    [O]: "parties_comm_panel_team_voice_status_disabled",
                    [D]: M,
                    [I]: M,
                    [P]: "parties_comm_panel_team_voice_status_restricted",
                    PARENTAL_CONTROLS_RESTRICTED: "parties_comm_panel_team_voice_status_restricted",
                    [V]: "parties_comm_panel_team_voice_status_accept_agreement"
                },
                z = {
                    [P]: {
                        title: "parties_comm_panel_team_voice_restricted_title",
                        body: "parties_comm_panel_team_voice_restricted_body"
                    },
                    [O]: {
                        title: "parties_comm_panel_team_voice_plugin_disabled_title",
                        body: "parties_comm_panel_team_voice_plugin_disabled_body"
                    },
                    [D]: {
                        title: "parties_comm_panel_team_voice_queue_not_enabled_title",
                        body: "parties_comm_panel_team_voice_queue_not_enabled_body"
                    },
                    [I]: {
                        title: "parties_comm_panel_team_voice_not_in_active_game_phase_title",
                        body: "parties_comm_panel_team_voice_not_in_active_game_phase_body"
                    },
                    [V]: {
                        title: "parties_comm_panel_team_voice_compliance_agreement_not_accepted_title",
                        body: "parties_comm_panel_team_voice_compliance_agreement_not_accepted_body"
                    }
                };
            class j extends r.default {
                templateMarkup() {
                    return n(41)
                }
                stylesheetMarkup() {
                    return n(42)
                }
                constructor() {
                    super(), this._participants = [], this._participantMap = new Map, this._teamParticipants = [], this._teamParticipantMap = new Map, this._partyMemberPuuids = new Set, this._multiUserChatId = null, this._gameflowPhase = "", this._isGameClientRunning = !1, this._lastVolumeUpdate = 0, this._lockOutMemberJoinSound = !1, this._isDraggingMicSlider = !1, this._clashRoster = null, this._headerType = k.HEADER_LOBBY, this._connectionState = E.VOICE_DISCONNECTED_STATE, this._teamConnectionState = E.VOICE_DISCONNECTED_STATE, this._updatingTeamToggle = !1, this._teamVoicePluginEnabled = !1, this._teamVoiceAvailability = !1, this._teamVoiceAvailabilityReason = null, this._teamVoiceRestricted = !1, this._teamVoiceConnectionFailed = !1, this._isVoiceChatRestricted = !1, this._puuidsToNameOverrides = {};
                    const e = i.Audio.getChannel(r.SOUND_CHANNEL);
                    this._muteSound = e.createSound(a.default), this._unmuteSound = e.createSound(o.default), this._closeSound = e.createSound(l.default), this._volumeScrollSound = e.createSound(s.default), this._volumeBarClickSound = e.createSound(c.default), this._volumeScrollReleaseSound = e.createSound(p.default), this._selectors = {
                        voicePanel: ".lol-premade-voice-panel",
                        currentPlayerChatIcon: ".lol-premade-voice-panel-cp-chat-icon",
                        headerText: ".lol-premade-voice-panel-header-text",
                        headerDefault: ".lol-premade-voice-panel-header-default",
                        headerClash: ".lol-premade-voice-panel-header-clash",
                        headerClashLogo: ".lol-premade-voice-panel-header-clash-logo",
                        headerClashShortName: ".lol-premade-voice-panel-header-clash-shortName",
                        headerClashName: ".lol-premade-voice-panel-header-clash-name",
                        partyHeader: ".lol-premade-voice-panel-party-header",
                        partyHeaderText: ".lol-premade-voice-panel-party-header-text",
                        sectionDivider: ".lol-premade-voice-panel-section-divider",
                        teamHeader: ".lol-premade-voice-panel-team-header",
                        teamHeaderText: ".lol-premade-voice-panel-team-header-text",
                        teamUnavailable: ".lol-premade-voice-panel-team-unavailable",
                        partyToggle: ".lol-premade-voice-panel-party-toggle",
                        teamToggle: ".lol-premade-voice-panel-team-toggle",
                        currentPlayerContent: ".lol-premade-voice-panel-current-player-content",
                        currentPlayerVolume: ".lol-premade-voice-panel-current-player-volume",
                        currentPlayerVolumeLabel: ".lol-premade-voice-panel-current-player-volume-label",
                        currentPlayerName: ".lol-premade-voice-panel-current-player-name lol-uikit-player-name",
                        currentPlayerVoiceSkin: ".lol-premade-voice-panel-current-player-voice-skin",
                        participants: ".lol-premade-voice-panel-participants",
                        participantElement: "lol-parties-comm-participant",
                        currentPlayerMic: ".lol-premade-voice-panel-current-player-mic",
                        connectionState: ".lol-premade-voice-panel-connection-state",
                        connectionBar: ".lol-premade-voice-panel-connection-bar",
                        connectionIcon: ".lol-premade-voice-panel-connection-icon",
                        sliderElement: "lol-uikit-slider",
                        connectionToggle: ".lol-premade-voice-panel-connection-toggle",
                        connectionStatus: ".lol-premade-voice-panel-connection-status",
                        settingsButton: ".lol-premade-voice-panel-current-player-settings",
                        haloElement: ".voice-panel-current-player-halo",
                        partyPttIndicator: ".lol-premade-voice-panel-party-ptt-indicator",
                        teamPttIndicator: ".lol-premade-voice-panel-team-ptt-indicator",
                        teamPartyRow: ".lol-premade-voice-panel-team-party-row",
                        teamPartyIndicatorCount: ".lol-premade-voice-panel-team-party-indicator-count",
                        teamPartyNames: ".lol-premade-voice-panel-team-party-names",
                        availability: ".lol-premade-voice-panel-availability",
                        availabilityMessage: ".lol-premade-voice-panel-message",
                        minimizeButton: ".lol-premade-voice-panel-minimize-button",
                        restrictedSection: ".lol-premade-voice-panel-restricted",
                        restrictedMessage: ".lol-premade-voice-panel-restricted-message",
                        voicePanelWrapper: ".lol-premade-voice-panel-wrapper",
                        inGameSession: ".lol-premade-voice-panel-in-game-session",
                        inGameSessionMessage: ".lol-premade-voice-panel-in-game-message",
                        inGameSessionPoro: ".lol-premade-voice-panel-in-game-poro",
                        inGameMinimizeButton: ".lol-premade-voice-panel-in-game-minimize-button"
                    }, this._listeners = {
                        micLevelSlideChange: this._micLevelSlideChange.bind(this),
                        micLevelSlideEnd: this._micLevelSlideEnd.bind(this),
                        micLevelSlideStart: this._micLevelSlideStart.bind(this),
                        micLevelClick: this._micLevelClick.bind(this),
                        mute: this._toggleMute.bind(this),
                        connectionToggleClick: this._connectionToggleClick.bind(this),
                        connectionBarClick: this._connectionBarClick.bind(this),
                        partyToggleClick: this._partyToggleClick.bind(this),
                        teamToggleClick: this._teamToggleClick.bind(this),
                        settingsClicked: this._settingsClicked.bind(this),
                        minimizeClicked: this._minimizeClicked.bind(this),
                        willShow: this._willShow.bind(this),
                        willHide: this._willHide.bind(this),
                        voiceButtonEnabled: this._voiceButtonEnabled.bind(this)
                    }, this._initDataBinding()
                }
                connectedCallback() {
                    super.connectedCallback(), this._attachSliderTooltipDelegate(), this._refreshConnectionState(), this._applyConnectionStateText(), this._teamVoicePluginEnabled && (this._updateToggleState(this._selectors.partyToggle, this._connectionState), this._updatePartyToggleState(), this._refreshTeamConnectionState(), this._updateToggleState(this._selectors.teamToggle, this._teamConnectionState), this._updateTeamToggleState(), this._updateTeamUnavailableStatus()), this._updateConnectionBarVisibility(), this._setupHeader(), this.addInnerHtml(i.tra.get("parties_comm_panel_party_header"), this._selectors.partyHeaderText), this.addInnerHtml(i.tra.get("parties_comm_panel_team_header"), this._selectors.teamHeaderText), this._updateInGameSessionMessage(), this._updatePanelDisplayState(), this.attachListener("change", this._listeners.micLevelSlideChange, this._selectors.currentPlayerVolume), this.attachListener("slideEnd", this._listeners.micLevelSlideEnd, this._selectors.currentPlayerVolume), this.attachListener("slideStart", this._listeners.micLevelSlideStart, this._selectors.currentPlayerVolume), this.attachListener("click", this._listeners.micLevelClick, this._selectors.currentPlayerVolume), this.attachListener("click", this._listeners.mute, this._selectors.currentPlayerMic), this.attachListener("click", this._listeners.connectionToggleClick, this._selectors.connectionToggle), this.attachListener("click", this._listeners.connectionBarClick, this._selectors.connectionBar), this.attachListener("click", this._listeners.partyToggleClick, this._selectors.partyToggle), this.attachListener("click", this._listeners.teamToggleClick, this._selectors.teamToggle), this._currentPlayerPuuid && this._updateCurrentPlayerName(), this.attachListener("click", this._listeners.settingsClicked, this._selectors.settingsButton), this.attachListener("click", this._listeners.minimizeClicked, this._selectors.minimizeButton), this._attachInGameSessionListeners(), this.addEventListener("willShowVoicePanel", this._listeners.willShow), this.addEventListener("willHideVoicePanel", this._listeners.willHide), this.addEventListener("voiceButtonEnabled", this._listeners.voiceButtonEnabled), this.addEventListener("keybind-set-click", this._listeners.settingsClicked)
                }
                _setupHeader() {
                    this.hide(this._selectors.headerClash), this.hide(this._selectors.headerDefault), this._headerType === k.HEADER_CLASH && this._clashRoster ? (this.addImg(this._clashRoster.logoUrl, this._selectors.headerClashLogo), this.addInnerHtml(this._clashRoster.shortName, this._selectors.headerClashShortName), this.addInnerHtml(this._clashRoster.name, this._selectors.headerClashName), this.show(this._selectors.headerClash)) : (this.addInnerHtml(i.tra.get("parties_comm_panel_header_text_party_only"), this._selectors.headerText), this.show(this._selectors.headerDefault))
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this.detachListener("slideEnd", this._listeners.micLevelSlideEnd, this._selectors.currentPlayerVolume), this.detachListener("click", this._listeners.micLevelClick, this._selectors.currentPlayerVolume), this.detachListener("click", this._listeners.mute, this._selectors.currentPlayerMic), this.detachListener("click", this._listeners.connectionToggleClick, this._selectors.connectionToggle), this.detachListener("click", this._listeners.connectionBarClick, this._selectors.connectionBar), this.detachListener("click", this._listeners.settingsClicked, this._selectors.settingsButton), this.detachListener("click", this._listeners.minimizeClicked, this._selectors.minimizeButton), this._detachInGameSessionListeners(), this.detachListener("willShowVoicePanel", this._listeners.willShow), this.detachListener("willHideVoicePanel", this._listeners.willHide), this.removeEventListener("keybind-set-click", this._listeners.settingsClicked)
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "voice-panel"
                }
                _playDelayedJoinSound() {
                    this._memberJoinTimeout = setTimeout((() => {
                        this._lockOutMemberJoinSound = !1
                    }), 1500)
                }
                availabilityUpdated(e) {
                    this._availability = e || {}, this._checkAvailabilityMessaging(), this._handleDisconnectedState(this._availability.showDisconnectedState), this._updatePartyToggleState()
                }
                _handleDisconnectedState(e) {
                    const t = this.shadowRoot.querySelector(this._selectors.currentPlayerVolume);
                    e ? (this._updateConnectionState(E.VOICE_DISCONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility(), t && t.setAttribute("disabled", ""), this.addClass("disabled", this._selectors.currentPlayerContent)) : (t && t.removeAttribute("disabled"), this.removeClass("disabled", this._selectors.currentPlayerContent)), this._updateCurrentPlayerMuteButton()
                }
                _showPanelMessage(e) {
                    this.addInnerHtml(e, this._selectors.availabilityMessage), this.removeClass("hide", this._selectors.availability), this.addClass("hide", this._selectors.participants)
                }
                _hidePanelMessage() {
                    this.removeClass("hide", this._selectors.participants), this.addClass("hide", this._selectors.availability)
                }
                _checkAvailabilityMessaging() {
                    let e = null;
                    if (!this._availability) return e;
                    e = this._outsideVoiceChannelMessaging(), e || (e = this._insideVoiceChannelMessaging()), this._availability.showDisconnectedState && (e = i.tra.get("parties_comm_panel_error"));
                    const t = this._teamVoicePluginEnabled;
                    e && !t ? this._showPanelMessage(e) : this._hidePanelMessage()
                }
                _outsideVoiceChannelMessaging() {
                    let e = null;
                    return this._availability && this._availability.voiceChannelAvailable && 0 === this._participants.length && (e = i.tra.get("parties_comm_panel_msg_disconnected")), e
                }
                _insideVoiceChannelMessaging() {
                    let e = null;
                    return this._availability && this._availability.voiceChannelAvailable && this._participantMap.get(this._currentPlayerPuuid) && 1 === this._participants.length && (e = i.tra.get("parties_comm_panel_msg_premade_no_channel")), e
                }
                participantsUpdated(e) {
                    this._participants = e || [], this._participantMap = new Map(this._participants.map((e => [e.puuid, e]))), this._removeOldParticipants(), this._updateParticipants(), this._refreshConnectionState(), this._updateTeamParticipants()
                }
                teamVoicePluginEnabledUpdate(e) {
                    this._teamVoicePluginEnabled = e, this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility(), this._updateKeyBindIndicators(), this._updatePartyToggleState(), this._updateTeamToggleState(), this._updateVoiceSkinIndicator(), this._updatePanelDisplayState()
                }
                teamVoiceEnabledUpdated(e) {
                    this._teamVoiceEnabled = e
                }
                teamVoiceAvailabilityUpdated(e) {
                    e && (this._teamVoiceAvailability = e.available, this._teamVoiceAvailabilityReason = e.reason || null, this._updateTeamToggleState(), this._updateTeamUnavailableStatus())
                }
                partyVoiceSessionUpdated(e) {
                    this._partySession = e, this._updateVoiceSkinIndicator()
                }
                voiceFontsUpdated(e) {
                    this._voiceFonts = e || [], this._updateVoiceSkinIndicator()
                }
                teamVoiceSessionUpdated(e) {
                    this._teamSession = e, this._teamVoicePluginEnabled ? (this._teamParticipants = e && e.participants || [], this._teamParticipantMap = new Map(this._teamParticipants.map((e => [e.puuid, e]))), this._teamVoiceRestricted = !(!e || !e.isRestricted), this._updateTeamParticipants(), this._refreshTeamConnectionState(), this._updateTeamToggleState(), this._updateTeamUnavailableStatus(), this._updateVoiceSkinIndicator()) : this._updateVoiceSkinIndicator()
                }
                _refreshConnectionState() {
                    const e = this._participants.length > 0,
                        t = this._connectionState;
                    e ? this._updateConnectionState(E.VOICE_CONNECTED_STATE) : this._connectionState !== E.VOICE_CONNECTING_STATE && this._updateConnectionState(E.VOICE_DISCONNECTED_STATE), t !== this._connectionState && (this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility()), this._checkAvailabilityMessaging()
                }
                settingsUpdated(e) {
                    this._settings = e, this._updateCurrentParticipant(), this._updateKeyBindIndicators(), this._updateVoiceSkinIndicator()
                }
                _updateVoiceSkinIndicator() {
                    if (!this.shadowRoot.querySelector(this._selectors.currentPlayerVoiceSkin)) return;
                    const e = this._settings && this._settings.voiceFontId,
                        t = (this._voiceFonts || []).find((t => t.id === e)),
                        n = this._partySession && this._partySession.isVoiceFontEnabled,
                        r = this._teamVoicePluginEnabled && this._teamSession && this._teamSession.isVoiceFontEnabled;
                    if (!t || !n && !r) return this.hide(this._selectors.currentPlayerVoiceSkin), void this._removeToggleTooltip(this._selectors.currentPlayerVoiceSkin);
                    this.show(this._selectors.currentPlayerVoiceSkin), this._attachToggleTooltip(this._selectors.currentPlayerVoiceSkin, i.tra.get("parties_comm_panel_tooltip_voice_skin"), t.name || t.id)
                }
                _updateKeyBindIndicators() {
                    if (!this._settings) return;
                    const e = this.shadowRoot.querySelector(this._selectors.partyPttIndicator);
                    if (e) {
                        const t = this._settings.inputMode === C.INPUT_MODE_PUSH_TO_TALK,
                            n = this._settings.pttKey,
                            r = !n || "[<Unbound>]" === n,
                            a = r ? "" : n.split("],[")[0].replace(/^\[|\]$/g, "");
                        e.setAttribute("keybind", this._teamVoicePluginEnabled && t ? a : ""), e.setAttribute("unbound-text", this._teamVoicePluginEnabled && t && r ? i.tra.get("parties_comm_panel_set_keybind") : "")
                    }
                    const t = this.shadowRoot.querySelector(this._selectors.teamPttIndicator);
                    if (t) {
                        const e = this._settings.pushToTalkTeamKey,
                            n = !e || "[<Unbound>]" === e,
                            r = n ? "" : e.split("],[")[0].replace(/^\[|\]$/g, "");
                        t.setAttribute("keybind", this._teamVoicePluginEnabled ? r : ""), t.setAttribute("unbound-text", this._teamVoicePluginEnabled && n ? i.tra.get("parties_comm_panel_set_keybind") : "")
                    }
                }
                lobbyUpdated(e) {
                    const t = e || {};
                    t.multiUserChatId && t.multiUserChatId !== this._multiUserChatId && (this._conversations && this._chatParticipantsObserver(t.multiUserChatId), this._headerType = k.HEADER_LOBBY), this._multiUserChatId = t.multiUserChatId;
                    const n = t && t.members || [];
                    this._partyMemberPuuids = new Set(n.map((e => e.puuid)).filter(Boolean)), this._updateTeamParticipants()
                }
                clashRostersUpdated(e) {
                    const t = (e || []).find((e => e.tournamentState !== x.CLASH_ROSTER_STATE.IDLE));
                    t && t.multiUserChatId && (t.multiUserChatId !== this._multiUserChatId && (this._conversations && this._chatParticipantsObserver(t.multiUserChatId), this._headerType = k.HEADER_CLASH, this._clashRoster = t), this._multiUserChatId = t.multiUserChatId)
                }
                postgameStatsUpdated(e) {
                    if (e && e.multiUserChatId) {
                        const t = v.default.parseChatId(e.multiUserChatId);
                        t !== this._multiUserChatId && this._conversations && this._chatParticipantsObserver(t), this._multiUserChatId = t
                    }
                }
                gameflowSessionUpdated(e) {
                    this._isGameClientRunning = Boolean(e && e.gameClient && e.gameClient.running), this._updateSettingsButton(), this._updatePanelDisplayState()
                }
                sessionUpdated(e) {
                    if (!e || "ERROR" === e.state) return;
                    const t = !this._currentPlayerPuuid;
                    this._currentPlayerPuuid = e.puuid, this._setVoiceHaloPuuid(this._currentPlayerPuuid), this._currentPlayerSummonerId !== e.summonerId && (this._currentPlayerSummonerId = e.summonerId, this._updateCurrentPlayerName()), t && (this._updateParticipants(), this._updateTeamParticipants())
                }
                chatParticipantsUpdated(e) {
                    this._chatParticipants = e, e && e.length > 0 && e.forEach((e => {
                        const t = this.shadowRoot.querySelector(`[summoner-id="${e.summonerId}"]`);
                        t && t.updateChatParticipant(e)
                    }))
                }
                currentPlayerChatInfoUpdated(e) {
                    if (!e) return;
                    const {
                        availability: t
                    } = e, n = e.icon, r = this.shadowRoot.querySelector(this._selectors.currentPlayerChatIcon);
                    r && t && n && (r.setAttribute("availability", t), r.setAttribute("icon-id", n))
                }
                conversationsUpdated(e) {
                    this._conversations = e, this._chatParticipantsObserver(this._multiUserChatId)
                }
                _chatParticipantsObserver(e) {
                    if (b.default.removeObservers(T), this._conversations && e) {
                        const t = this._conversations.find((t => t.id.indexOf(e) > -1));
                        t && (b.default.createObserver(T, `/v1/conversations/${encodeURIComponent(t.id)}/participants`), b.default.observe(T, this.chatParticipantsUpdated.bind(this)))
                    }
                }
                _chatParticipant(e) {
                    let t = null;
                    return this._chatParticipants && this._chatParticipants.length > 0 && (t = this._chatParticipants.find((t => t.summonerId === e))), t
                }
                _applyConnectionStateText() {
                    const e = this._teamVoicePluginEnabled ? this._selectors.connectionStatus : this._selectors.connectionState;
                    this.addClass(this._connectionState, e), this.addInnerHtml(i.tra.get(`parties_comm_panel_state_${this._connectionState}`), e), this._updateToggleState(this._selectors.connectionToggle, this._connectionState), this._teamVoicePluginEnabled && (this._updateToggleState(this._selectors.partyToggle, this._connectionState), this._updatePartyToggleState())
                }
                _updateConnectionState(e) {
                    const t = this._connectionState;
                    if (t !== e) {
                        this._connectionState = e, this._updateToggleState(this._selectors.connectionToggle, e), this._teamVoicePluginEnabled && (this._updateToggleState(this._selectors.partyToggle, e), this._updatePartyToggleState());
                        const n = this._teamVoicePluginEnabled ? this._selectors.connectionStatus : this._selectors.connectionState;
                        this.removeClass(t, n), this.addClass(this._connectionState, n), this.addInnerHtml(i.tra.get(`parties_comm_panel_state_${this._connectionState}`), n)
                    }
                }
                _updateTeamHeaderVisibility() {
                    this._teamVoicePluginEnabled ? (this.removeClass("hide", this._selectors.sectionDivider), this.removeClass("hide", this._selectors.teamHeader)) : (this.addClass("hide", this._selectors.sectionDivider), this.addClass("hide", this._selectors.teamHeader), this.addClass("hide", this._selectors.teamPartyRow)), this._updateTeamPartyIndicator(), this._updateTeamUnavailableStatus()
                }
                _updateTeamUnavailableStatus() {
                    this._teamVoicePluginEnabled && (this._setTeamVoiceStatusText(this._getTeamVoiceStatusLabelKey()), this._teamVoiceRestricted ? (this.removeClass("hide", this._selectors.teamPttIndicator), this.removeClass("hide", this._selectors.teamToggle), this._updateToggleState(this._selectors.teamToggle, this._teamConnectionState), this._setTeamToggleMuteRestricted(!0), this._attachTeamToggleRestrictionTooltip(P)) : this._teamVoiceAvailability || this._teamConnectionState === E.VOICE_CONNECTED_STATE || this._teamVoiceAvailabilityReason === V ? (this.removeClass("hide", this._selectors.teamPttIndicator), this.removeClass("hide", this._selectors.teamToggle), this._updateToggleState(this._selectors.teamToggle, this._teamConnectionState), this._removeTeamToggleRestrictionTooltip()) : (this.removeClass("hide", this._selectors.teamPttIndicator), this.removeClass("hide", this._selectors.teamToggle), this._setToggleRestricted(this._selectors.teamToggle, !0), z[this._teamVoiceAvailabilityReason] ? this._attachTeamToggleRestrictionTooltip(this._teamVoiceAvailabilityReason) : this._removeTeamToggleRestrictionTooltip()))
                }
                _getTeamVoiceStatusLabelKey() {
                    return this._teamConnectionState === E.VOICE_CONNECTED_STATE ? this._teamVoiceRestricted ? N[P] : null : this._teamVoiceAvailabilityReason === V ? N[V] : this._teamVoiceAvailability ? this._teamVoiceConnectionFailed ? "parties_comm_panel_team_voice_status_try_again" : null : N[this._teamVoiceAvailabilityReason] || M
                }
                _setTeamVoiceStatusText(e) {
                    const t = this.shadowRoot.querySelector(this._selectors.teamUnavailable);
                    t && (e ? (t.textContent = i.tra.get(e), this.removeClass("hide", this._selectors.teamUnavailable)) : (t.textContent = "", this.addClass("hide", this._selectors.teamUnavailable)))
                }
                _updateConnectionBarVisibility() {
                    const e = this.shadowRoot.querySelector(this._selectors.connectionBar),
                        t = this.shadowRoot.querySelector(this._selectors.connectionToggle),
                        n = this.shadowRoot.querySelector(this._selectors.connectionStatus),
                        r = this.shadowRoot.querySelector(this._selectors.partyToggle);
                    this._teamVoicePluginEnabled ? (e && (e.style.display = "none"), t && (t.style.display = "none"), n && (n.style.display = ""), r && (r.style.display = "")) : (e && (e.style.display = "", e.classList.remove("connected", "disconnected", "connecting"), e.classList.add(this._connectionState)), t && (t.style.display = "none"), n && (n.style.display = "none"), r && (r.style.display = "none"))
                }
                _updateTeamConnectionState(e) {
                    this._teamConnectionState !== e && (this._teamConnectionState = e, this._updatingTeamToggle = !0, this._updateToggleState(this._selectors.teamToggle, e), this._updatingTeamToggle = !1, this._updateTeamToggleState(), this._updateTeamUnavailableStatus())
                }
                _updateTeamToggleState() {
                    if (this._teamVoiceRestricted) return void this._setTeamToggleMuteRestricted(!0);
                    if (this._setTeamToggleMuteRestricted(!1), this._teamVoiceAvailabilityReason === P) return void this._setTeamToggleRestricted(!0);
                    this._setTeamToggleRestricted(!1);
                    const e = this._teamConnectionState === E.VOICE_CONNECTED_STATE,
                        t = this._teamConnectionState === E.VOICE_CONNECTING_STATE,
                        n = this._teamVoiceAvailabilityReason === V,
                        r = !e && !n && (t || !this._teamVoiceAvailability);
                    this._setToggleDisabled(this._selectors.teamToggle, r)
                }
                _refreshTeamConnectionState() {
                    this._teamParticipants && this._teamParticipants.length > 0 ? this._updateTeamConnectionState(E.VOICE_CONNECTED_STATE) : this._updateTeamConnectionState(E.VOICE_DISCONNECTED_STATE)
                }
                _isVoiceEligible() {
                    return 0 !== this._participants.length
                }
                _lockConnectionButton() {
                    this._connectionButtonLocked = !0
                }
                _unlockConnectionButton() {
                    this._connectionButtonLocked = !1
                }
                _connectionClick() {
                    return this._lockConnectionButton(), this._connectionState === E.VOICE_DISCONNECTED_STATE && this._isVoiceEligible() ? (this._updateConnectionState(E.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, d.default.connect().then((() => {
                        this._joinVoiceSessionSuccess(), this._unlockConnectionButton()
                    })).catch((e => {
                        this._joinVoiceSessionFailed(e), this._unlockConnectionButton()
                    }))) : this._connectionState === E.VOICE_CONNECTED_STATE ? d.default.disconnect().then((() => {
                        this._leaveVoiceSessionSuccess(), this._unlockConnectionButton()
                    })) : (this._unlockConnectionButton(), Promise.resolve())
                }
                _connectionMouseEnter() {
                    if (this._connectionState === E.VOICE_DISCONNECTED_STATE && this._isVoiceEligible()) {
                        const e = i.tra.get("parties_comm_panel_connect_text");
                        this.addInnerHtml(e, this._selectors.connectionState)
                    }
                }
                _connectionMouseLeave() {
                    if (this._isVoiceEligible()) {
                        const e = i.tra.get(`parties_comm_panel_state_${this._connectionState}`);
                        this.addClass(this._connectionState, this._selectors.connectionState), this.addInnerHtml(e, this._selectors.connectionState)
                    }
                }
                _connectionBarClick() {
                    if (!this._teamVoicePluginEnabled) return this._connectionState === E.VOICE_DISCONNECTED_STATE ? (this._updateConnectionState(E.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, d.default.connect().then(this._joinVoiceSessionSuccess.bind(this)).catch((e => {
                        this._joinVoiceSessionFailed(e)
                    }))) : this._connectionState === E.VOICE_CONNECTED_STATE ? d.default.disconnect().then(this._leaveVoiceSessionSuccess.bind(this)) : void 0
                }
                _connectionToggleClick() {
                    return this._connectionState === E.VOICE_DISCONNECTED_STATE ? (this._updateConnectionState(E.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, d.default.connect().then(this._joinVoiceSessionSuccess.bind(this)).catch((e => {
                        this._joinVoiceSessionFailed(e)
                    }))) : this._connectionState === E.VOICE_CONNECTED_STATE ? d.default.disconnect().then(this._leaveVoiceSessionSuccess.bind(this)) : void 0
                }
                _partyToggleClick() {
                    if (!this._teamVoicePluginEnabled) return;
                    const e = this.shadowRoot.querySelector(this._selectors.partyToggle);
                    return e && e.classList.contains("restricted") ? void 0 : this._connectionState === E.VOICE_DISCONNECTED_STATE ? (this._updateConnectionState(E.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, d.default.connect().then(this._joinVoiceSessionSuccess.bind(this)).catch((e => {
                        this._joinVoiceSessionFailed(e)
                    }))) : this._connectionState === E.VOICE_CONNECTED_STATE ? d.default.disconnect().then(this._leaveVoiceSessionSuccess.bind(this)) : void 0
                }
                _teamToggleClick() {
                    if (!this._teamVoicePluginEnabled || this._updatingTeamToggle) return;
                    if (this._teamVoiceAvailabilityReason === V) return void m.default.showAgreementModal();
                    const e = this.shadowRoot.querySelector(this._selectors.teamToggle);
                    if (e && e.classList.contains("restricted")) return;
                    return e && e.classList.contains("mute-restricted") && this._teamConnectionState !== E.VOICE_CONNECTED_STATE ? void 0 : this._teamConnectionState === E.VOICE_DISCONNECTED_STATE ? (this._teamVoiceConnectionFailed = !1, this._updateTeamConnectionState(E.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, h.default.connect().then(this._joinTeamVoiceSessionSuccess.bind(this)).catch((e => {
                        this._joinTeamVoiceSessionFailed(e)
                    }))) : this._teamConnectionState === E.VOICE_CONNECTED_STATE ? h.default.disconnect().then(this._leaveTeamVoiceSessionSuccess.bind(this)) : void 0
                }
                _leaveVoiceSessionSuccess() {
                    this._updateConnectionState(E.VOICE_DISCONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility()
                }
                _joinVoiceSessionSuccess() {
                    this._updateConnectionState(E.VOICE_CONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility(), clearTimeout(this._memberJoinTimeout), this._memberJoinTimeout = setTimeout((() => {
                        this._lockOutMemberJoinSound = !1
                    }), 500), d.default.participants().then(this.participantsDataListener)
                }
                _joinVoiceSessionFailed(e) {
                    if (e && e.data) {
                        this._lockOutMemberJoinSound = !1;
                        const t = e.data.message;
                        i.logger.warning(`Failed to join voice channel: ${t}`), this._updateConnectionState(E.VOICE_DISCONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility()
                    }
                }
                _leaveTeamVoiceSessionSuccess() {
                    this._teamVoiceConnectionFailed = !1, this._updateTeamConnectionState(E.VOICE_DISCONNECTED_STATE)
                }
                _joinTeamVoiceSessionSuccess() {
                    this._teamVoiceConnectionFailed = !1, this._updateTeamConnectionState(E.VOICE_CONNECTED_STATE), clearTimeout(this._memberJoinTimeout), this._memberJoinTimeout = setTimeout((() => {
                        this._lockOutMemberJoinSound = !1
                    }), 500), h.default.session().then(this.teamVoiceSessionListener)
                }
                _joinTeamVoiceSessionFailed(e) {
                    if (e && e.data) {
                        this._lockOutMemberJoinSound = !1;
                        const t = e.data.message;
                        i.logger.warning(`Failed to join team voice channel: ${t}`), this._teamVoiceConnectionFailed = !0, this._updateTeamConnectionState(E.VOICE_DISCONNECTED_STATE)
                    }
                }
                _removeOldParticipants() {
                    const e = this.shadowRoot.querySelectorAll(`${this._selectors.participantElement}:not([data-team-participant="true"])`);
                    if (e && e.length > 0) {
                        const t = Array.from(e);
                        let n = !1;
                        t.forEach((e => {
                            const t = e.getAttribute("participant-id");
                            this._participantMap.get(t) || (e.remove(), n = !0)
                        })), n && this._updatePartyHeaderVisibility()
                    }
                }
                _updateParticipants() {
                    if (this._participants && this._participants.length > 0 && this._currentPlayerPuuid) {
                        let e = 0;
                        this._participants.forEach((t => {
                            if (t.puuid !== this._currentPlayerPuuid) {
                                this._updateMemberParticipant(t) || (e += 1)
                            }
                        })), e > 0 && !this._lockOutMemberJoinSound && this._playDelayedJoinSound()
                    }
                    this._updatePartyHeaderVisibility()
                }
                _updatePartyHeaderVisibility() {
                    this.removeClass("hide", this._selectors.partyHeader)
                }
                _removeOldTeamParticipants() {
                    const e = this.shadowRoot.querySelectorAll('[data-team-participant="true"]');
                    if (e && e.length > 0) {
                        Array.from(e).forEach((e => {
                            const t = e.getAttribute("puuid");
                            this._teamParticipantMap.get(t) || e.remove()
                        }))
                    }
                }
                _isPartyMemberInPartyVoice(e) {
                    return this._partyMemberPuuids.has(e) && this._participantMap.has(e)
                }
                _updateTeamParticipants() {
                    const e = this.shadowRoot.querySelectorAll('[data-team-participant="true"]'),
                        t = [];
                    if (e && e.length > 0) {
                        Array.from(e).forEach((e => {
                            const n = e.getAttribute("puuid");
                            this._teamParticipantMap.get(n) && !this._isPartyMemberInPartyVoice(n) || t.push(e)
                        }))
                    }
                    if (this._teamParticipants && this._teamParticipants.length > 0 && this._currentPlayerPuuid) {
                        let e = 0;
                        this._teamParticipants.forEach((t => {
                            if (t.puuid !== this._currentPlayerPuuid && !this._isPartyMemberInPartyVoice(t.puuid)) {
                                this._updateTeamMemberParticipant(t) || (e += 1)
                            }
                        })), e > 0 && !this._lockOutMemberJoinSound && this._playDelayedJoinSound()
                    }
                    t.forEach((e => {
                        e.remove()
                    })), this._updateTeamPartyIndicator()
                }
                _updateTeamPartyIndicator() {
                    const e = this.shadowRoot.querySelector(this._selectors.teamPartyRow);
                    if (!e) return;
                    const t = [];
                    this._teamParticipants.forEach((e => {
                        e.puuid !== this._currentPlayerPuuid && this._isPartyMemberInPartyVoice(e.puuid) && t.push(e.puuid)
                    }));
                    const n = this.shadowRoot.querySelector(this._selectors.teamPartyIndicatorCount);
                    n && (n.textContent = String(t.length));
                    const r = this.shadowRoot.querySelector(this._selectors.teamPartyNames);
                    r && (r.innerHTML = "", t.forEach(((e, n) => {
                        const i = document.createElement("lol-uikit-player-name");
                        if (i.setAttribute("format", "short"), i.setAttribute("puuid", e), r.appendChild(i), n < t.length - 1) {
                            const e = document.createTextNode(", ");
                            r.appendChild(e)
                        }
                    })));
                    this._teamVoicePluginEnabled && t.length > 0 ? e.classList.remove("hide") : e.classList.add("hide")
                }
                _updateTeamMemberParticipant(e) {
                    const t = this.shadowRoot.querySelector(`[data-team-participant="true"][puuid="${e.puuid}"]`);
                    if (t) return t.updateSelf(e), !0;
                    {
                        const t = this.shadowRoot.querySelector(this._selectors.participants),
                            n = this.shadowRoot.querySelector(this._selectors.teamHeader),
                            r = this._createParticipantElement(e);
                        return r.setAttribute("data-team-participant", "true"), t && n ? n.parentNode.insertBefore(r, n.nextSibling) : t && t.appendChild(r), !1
                    }
                }
                _updateMemberParticipant(e) {
                    const t = this.shadowRoot.querySelector(`[participant-id="${e.puuid}"]:not([data-team-participant="true"])`);
                    if (t) return t.updateSelf(e), !0;
                    {
                        const t = this.shadowRoot.querySelector(this._selectors.participants),
                            n = this.shadowRoot.querySelector(this._selectors.sectionDivider),
                            r = this._createParticipantElement(e);
                        return t && n ? t.insertBefore(r, n) : this.addChildElement(r, this._selectors.participants), !1
                    }
                }
                _updateCurrentParticipant() {
                    this._updateCurrentPlayerMuteButton();
                    let e = 0;
                    this._settings && this._settings.micLevel && this._settings.micLevel > 0 && (e = this._settings.micLevel), this._updateCurrentPlayerVolume(e, !this._micLevelUpdating)
                }
                _updateCurrentPlayerVolume(e, t = !0) {
                    const n = this.shadowRoot.querySelector(this._selectors.sliderElement);
                    if (n && !this._micLevelUpdating && n.setAttribute("value", e), t) {
                        const t = i.tra.formatString("parties_comm_panel_slider_percentage", {
                            percentage: e
                        });
                        this.addInnerHtml(t, this._selectors.currentPlayerVolumeLabel)
                    }
                }
                _updateSettingsButton() {
                    this._isGameClientRunning ? this.addClass("disabled", this._selectors.settingsButton) : this.removeClass("disabled", this._selectors.settingsButton), this._attachSettingsTooltip()
                }
                _micLevelSlideEnd(e) {
                    this._micLevelUpdating = !1, this._micLevelSlideChange(e, !0), this._teamVoicePluginEnabled && this._isDraggingMicSlider && this._volumeScrollReleaseSound.play(), setTimeout((() => {
                        this._isDraggingMicSlider = !1
                    }), 50)
                }
                _micLevelSlideStart() {
                    this._micLevelUpdating = !0, this._isDraggingMicSlider = !0, this._teamVoicePluginEnabled && this._volumeScrollSound.play()
                }
                _micLevelClick() {
                    this._teamVoicePluginEnabled && !this._isDraggingMicSlider && this._volumeBarClickSound.play()
                }
                _micLevelSlideChange(e, t = !1) {
                    if (this._updateCurrentPlayerVolume(e.value), !t) {
                        const e = (new Date).getTime();
                        if (e - this._lastVolumeUpdate < 250) return;
                        this._lastVolumeUpdate = e
                    }
                    d.default.changeMicLevelSelf(e.value)
                }
                _updateCurrentPlayerMuteButton() {
                    if (!this._availability || !this._settings) return;
                    const e = !this._teamVoicePluginEnabled && this._settings.inputMode === C.INPUT_MODE_PUSH_TO_TALK;
                    this._availability.showDisconnectedState || e ? (this.addClass("disabled", this._selectors.currentPlayerMic), this.removeClass("muted", this._selectors.currentPlayerMic)) : (this.removeClass("disabled", this._selectors.currentPlayerMic), this._settings && this._settings.localMicMuted ? this.addClass("muted", this._selectors.currentPlayerMic) : this.removeClass("muted", this._selectors.currentPlayerMic)), this._attachMuteSelfTooltip()
                }
                _createParticipantElement(e) {
                    const t = document.createElement(this._selectors.participantElement);
                    t.setAttribute("puuid", e.puuid), t.setAttribute("participant-id", e.puuid), t.updateSelf(e);
                    const n = this._chatParticipant(e.summonerId);
                    return t.updateChatParticipant(n), e.puuid && this._puuidsToNameOverrides[e.puuid] && t.setNameOverride(this._puuidsToNameOverrides[e.puuid]), t
                }
                _initDataBinding() {
                    this.lobbyDataListener = this.lobbyUpdated.bind(this), _.default.observe("lobby", this.lobbyDataListener), _.default.lobby().then(this.lobbyDataListener), this.clashChatListener = this.clashRostersUpdated.bind(this), y.default.observe("rosters", this.clashChatListener), y.default.clashRosters().then(this.clashChatListener), this.gameflowSessionListener = this.gameflowSessionUpdated.bind(this), g.default.observe("session", this.gameflowSessionListener), g.default.session().then(this.gameflowSessionListener), this.postgameStatsListener = this.postgameStatsUpdated.bind(this), v.default.observe("stats", this.postgameStatsListener), v.default.stats().then(this.postgameStatsListener), this.availabilityDataListener = this.availabilityUpdated.bind(this), d.default.observe("availability", this.availabilityDataListener), d.default.availability().then(this.availabilityDataListener), this.participantsDataListener = this.participantsUpdated.bind(this), d.default.observe("participants", this.participantsDataListener), d.default.participants().then(this.participantsDataListener), this.partyVoiceSessionListener = this.partyVoiceSessionUpdated.bind(this), d.default.observe("session", this.partyVoiceSessionListener), d.default.session().then(this.partyVoiceSessionListener), this.settingsDataListener = this.settingsUpdated.bind(this), d.default.observe("settings", this.settingsDataListener), d.default.settings().then(this.settingsDataListener), this.sessionDataListener = this.sessionUpdated.bind(this), A.default.observe("session", this.sessionDataListener), A.default.session().then(this.sessionDataListener), this.currentPlayerChatInfoListener = this.currentPlayerChatInfoUpdated.bind(this), b.default.observe("me", this.currentPlayerChatInfoListener), b.default.me().then(this.currentPlayerChatInfoListener), this.conversationsListener = this.conversationsUpdated.bind(this), b.default.observe("conversations", this.conversationsListener), b.default.conversations().then(this.conversationsListener), this.teamVoicePluginEnabledListener = this.teamVoicePluginEnabledUpdate.bind(this), u.default.observe("teamVoicePluginEnabled", this.teamVoicePluginEnabledListener), u.default.teamVoicePluginEnabled().then(this.teamVoicePluginEnabledListener), this.teamVoiceAvailabilityListener = this.teamVoiceAvailabilityUpdated.bind(this), h.default.observe("availability", this.teamVoiceAvailabilityListener), h.default.availability().then(this.teamVoiceAvailabilityListener), this.teamVoiceSessionListener = this.teamVoiceSessionUpdated.bind(this), h.default.observe("session", this.teamVoiceSessionListener), h.default.session().then(this.teamVoiceSessionListener), this.voiceFontsListener = this.voiceFontsUpdated.bind(this), h.default.observe("voiceFonts", this.voiceFontsListener), h.default.voiceFonts().then(this.voiceFontsListener), this.parentalControlsStatusListener = this.parentalControlsStatusUpdated.bind(this), f.default.observe("status", this.parentalControlsStatusListener), f.default.status().then(this.parentalControlsStatusListener)
                }
                parentalControlsStatusUpdated(e) {
                    this._isVoiceChatRestricted = e && e.enabled && e.isVoiceChatRestricted, this._updateParentalControlsRestriction()
                }
                _updateInGameSessionMessage() {
                    this.addInnerHtml(i.tra.get("parties_comm_panel_voice_in_game_session"), this._selectors.inGameSessionMessage)
                }
                _attachInGameSessionListeners() {
                    this.attachListener("click", this._listeners.minimizeClicked, this._selectors.inGameMinimizeButton)
                }
                _detachInGameSessionListeners() {
                    this.detachListener("click", this._listeners.minimizeClicked, this._selectors.inGameMinimizeButton)
                }
                _updatePanelDisplayState() {
                    const e = Boolean(this._isVoiceChatRestricted),
                        t = !e && this._teamVoicePluginEnabled && this._isGameClientRunning,
                        n = (e, t) => {
                            t ? this.removeClass("hide", e) : this.addClass("hide", e)
                        };
                    n(this._selectors.voicePanelWrapper, !e && !t), n(this._selectors.restrictedSection, e), n(this._selectors.inGameSession, t)
                }
                _updateParentalControlsRestriction() {
                    this._isVoiceChatRestricted && this.addInnerHtml(i.tra.get("parties_comm_panel_parental_controls_restricted"), this._selectors.restrictedMessage), this._updatePanelDisplayState()
                }
                _showMicrophonePermissionsModal() {
                    const e = i.tra.get("voice_microphone_permissions_modal_header"),
                        t = i.tra.get("voice_microphone_permissions_modal_body"),
                        n = {
                            type: "DialogAlert",
                            data: {
                                contents: i.TemplateHelper.contentBlockDialog(e, t, "dialog-small", "voice-microphone-permissions-alert"),
                                okText: i.tra.get("voice_microphone_permissions_modal_confirm")
                            },
                            show: !0
                        };
                    i.ModalManager.add(n)
                }
                _toggleMute() {
                    this._settings && (this._teamVoicePluginEnabled || this._settings.inputMode !== C.INPUT_MODE_PUSH_TO_TALK) && d.default.checkMicrophonePermissions().then((e => {
                        e ? (this._teamVoicePluginEnabled && (this._settings.localMicMuted ? this._unmuteSound.play() : this._muteSound.play()), d.default.muteSelf(!this._settings.localMicMuted)) : this._showMicrophonePermissionsModal()
                    }))
                }
                _settingsClicked() {
                    this._isGameClientRunning || (this._playSound("/fe/lol-navigation/sfx-soc-ui-click-generic.ogg"), (0, C.default)())
                }
                _setVoiceHaloPuuid(e) {
                    const t = e || "",
                        n = this.shadowRoot.querySelector(this._selectors.haloElement);
                    n && n.setAttribute("puuid", t)
                }
                _attachMuteSelfTooltip() {
                    if (!this._settings || !this._settings.inputMode) return;
                    const e = this.shadowRoot.querySelector(this._selectors.currentPlayerMic);
                    let t;
                    t = this._teamVoicePluginEnabled || this._settings.inputMode !== C.INPUT_MODE_PUSH_TO_TALK ? this._settings.localMicMuted ? i.tra.get("parties_comm_panel_tooltip_unmute_self") : i.tra.get("parties_comm_panel_tooltip_mute_self") : i.tra.get("parties_comm_panel_tooltip_mute_disabled"), B.default.attachSmallTooltip(e, t)
                }
                _attachSettingsTooltip() {
                    const e = this.shadowRoot.querySelector(this._selectors.settingsButton);
                    let t;
                    t = this._isGameClientRunning ? i.tra.get("parties_comm_panel_tooltip_settings_disabled") : i.tra.get("parties_comm_panel_tooltip_settings"), B.default.attachSmallTooltip(e, t)
                }
                _minimizeClicked() {
                    this.dispatchEvent(new Event("minimizeVoicePanel"))
                }
                _willHide() {
                    this.removeClass("show", this._selectors.voicePanel), this._closeSound.play()
                }
                _willShow() {
                    this.addClass("show", this._selectors.voicePanel)
                }
                _voiceButtonEnabled() {
                    this._participants.length > 0 && (this._lockOutMemberJoinSound = !0, this._playDelayedJoinSound())
                }
                _attachSliderTooltipDelegate() {
                    const e = this.shadowRoot.querySelector(this._selectors.sliderElement);
                    e && e.setTooltipContentDelegate((function(e) {
                        return `${e}%`
                    }))
                }
                setPuuidsToNameOverrides(e) {
                    try {
                        this._puuidsToNameOverrides = "string" == typeof e ? JSON.parse(e) : e || {}, this._updateParticipantNameOverrides()
                    } catch (e) {
                        i.logger.error("Failed to parse puuid name mapping", e), this._puuidsToNameOverrides = {}
                    }
                }
                _updateParticipantNameOverrides() {
                    this.shadowRoot.querySelectorAll(this._selectors.participantElement).forEach((e => {
                        const t = e.getAttribute("puuid");
                        t && (this._puuidsToNameOverrides[t] ? e.setNameOverride(this._puuidsToNameOverrides[t]) : e.setNameOverride(null))
                    })), this._updateCurrentPlayerName()
                }
                _updateCurrentPlayerName() {
                    const e = this.shadowRoot.querySelector(this._selectors.currentPlayerName);
                    if (e && this._currentPlayerPuuid)
                        if (this._puuidsToNameOverrides[this._currentPlayerPuuid]) {
                            const t = this._puuidsToNameOverrides[this._currentPlayerPuuid],
                                n = i.playerNames && i.playerNames.currentPlayerName,
                                r = n && n.gameName ? `${n.gameName} (${t})` : t;
                            e.setAttribute("game-name", r), e.setAttribute("tag-line", ""), e.setAttribute("format", "short"), e.removeAttribute("puuid")
                        } else e.removeAttribute("game-name"), e.removeAttribute("tag-line"), e.setAttribute("format", "tooltip"), e.setAttribute("puuid", this._currentPlayerPuuid)
                }
                _updateToggleState(e, t) {
                    const n = this.shadowRoot.querySelector(e);
                    n && (n.classList.remove(E.VOICE_CONNECTED_STATE, E.VOICE_DISCONNECTED_STATE, E.VOICE_CONNECTING_STATE, "disabled", "restricted", "disabled-disconnected"), n.classList.add(t))
                }
                _setTeamToggleRestricted(e) {
                    this._setToggleRestricted(this._selectors.teamToggle, e)
                }
                _setTeamToggleMuteRestricted(e) {
                    const t = this.shadowRoot.querySelector(this._selectors.teamToggle);
                    t && (e ? t.classList.add("mute-restricted") : t.classList.remove("mute-restricted"))
                }
                _setToggleRestricted(e, t) {
                    const n = this.shadowRoot.querySelector(e);
                    n && (t ? (n.classList.remove(E.VOICE_CONNECTED_STATE, E.VOICE_DISCONNECTED_STATE, E.VOICE_CONNECTING_STATE, "disabled"), n.classList.add("restricted")) : n.classList.remove("restricted"))
                }
                _updatePartyToggleState() {
                    if (!this._teamVoicePluginEnabled) return;
                    this._availability && this._availability.voiceChannelAvailable || this._connectionState === E.VOICE_CONNECTED_STATE ? (this._updateToggleState(this._selectors.partyToggle, this._connectionState), this._removeToggleTooltip(this._selectors.partyToggle)) : (this._setToggleRestricted(this._selectors.partyToggle, !0), this._attachToggleTooltip(this._selectors.partyToggle, i.tra.get("parties_comm_panel_party_voice_no_party_title"), i.tra.get("parties_comm_panel_party_voice_no_party_body")))
                }
                _attachTeamToggleRestrictionTooltip(e) {
                    const t = z[e] || z[P];
                    this._attachToggleTooltip(this._selectors.teamToggle, i.tra.get(t.title), i.tra.get(t.body))
                }
                _removeTeamToggleRestrictionTooltip() {
                    this._removeToggleTooltip(this._selectors.teamToggle)
                }
                _attachToggleTooltip(e, t, n) {
                    const r = this.shadowRoot.querySelector(e);
                    if (!r) return;
                    i.TooltipManager.unassign(r);
                    const a = document.createElement("lol-uikit-tooltip"),
                        o = document.createElement("lol-parties-team-voice-tooltip");
                    o.setAttribute("header", i.localeDirectionOverrides.wrapWithDirectionOverride(t)), o.setAttribute("body", i.localeDirectionOverrides.wrapWithDirectionOverride(n)), a.appendChild(o), i.TooltipManager.assign(r, a, null, {
                        targetAnchor: {
                            x: "center",
                            y: "top"
                        },
                        tooltipAnchor: {
                            x: "center",
                            y: "bottom"
                        },
                        showDelay: 400
                    })
                }
                _removeToggleTooltip(e) {
                    const t = this.shadowRoot.querySelector(e);
                    t && i.TooltipManager.unassign(t)
                }
                _setToggleDisabled(e, t) {
                    const n = this.shadowRoot.querySelector(e);
                    n && (t ? n.classList.add("disabled") : n.classList.remove("disabled"))
                }
            }
            j.tagName = "lol-parties-comm-panel";
            var L = j;
            t.default = L
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.SOUND_CHANNEL = void 0;
            var r = n(1);
            const i = "sfx-ui";
            t.SOUND_CHANNEL = i;
            class a extends r.webComponents.ShadowElement {
                addClass(e, t) {
                    const n = t ? this.shadowRoot.querySelector(t) : this;
                    n && !n.classList.contains(e) && n.classList.add(e)
                }
                removeClass(e, t) {
                    const n = t ? this.shadowRoot.querySelector(t) : this;
                    n && n.classList.contains(e) && n.classList.remove(e)
                }
                attachListener(e, t, n) {
                    const r = n ? this.shadowRoot.querySelector(n) : this;
                    r && r.addEventListener(e, t)
                }
                detachListener(e, t, n) {
                    const r = n ? this.shadowRoot.querySelector(n) : this;
                    r && r.removeEventListener(e, t)
                }
                addInnerHtml(e, t) {
                    const n = t ? this.shadowRoot.querySelector(t) : this;
                    n && (n.innerHTML = e)
                }
                addImg(e, t) {
                    const n = t ? this.shadowRoot.querySelector(t) : this;
                    n && (n.src = e)
                }
                show(e) {
                    const t = e ? this.shadowRoot.querySelector(e) : this;
                    t && t.style && (t.style.display = "")
                }
                hide(e) {
                    const t = e ? this.shadowRoot.querySelector(e) : this;
                    t && t.style && (t.style.display = "none")
                }
                addChildElement(e, t) {
                    const n = t ? this.shadowRoot.querySelector(t) : this;
                    n && n.appendChild(e)
                }
                _playSound(e) {
                    if (!1 === e) return;
                    r.Audio.getChannel(i).createSound(e).play()
                }
            }
            var o = a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-mute-button-click.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-unmute-button-click.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-soc-ui-chatwindow-close.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-volume-scroll-click.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-volume-bar-click.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-volume-scroll-release.ogg"
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._voiceBinding = this.dataBinding("/lol-premade-voice"), this.createObserver("availability", "/v1/availability"), this.createObserver("participants", "/v1/participants"), this.createObserver("session", "/v1/session"), this.createObserver("settings", "/v1/settings"), this.createObserver("mictest", "/v1/mic-test"), this.createObserver("firstExperience", "/v1/first-experience")
                }
                availability() {
                    return this._voiceBinding.get("/v1/availability")
                }
                participants() {
                    return this._voiceBinding.get("/v1/participants")
                }
                session() {
                    return this._voiceBinding.get("/v1/session")
                }
                settings() {
                    return this._voiceBinding.get("/v1/settings")
                }
                firstExperience() {
                    return this._voiceBinding.get("/v1/first-experience")
                }
                mute(e, t) {
                    const n = `/v1/participants/${e}/mute`;
                    return this._voiceBinding.put(n, t ? 1 : 0)
                }
                changeVolume(e, t) {
                    const n = `/v1/participants/${e}/volume`;
                    return this._voiceBinding.put(n, t)
                }
                checkMicrophonePermissions() {
                    return this._voiceBinding.get("/v1/devices/capture/permission")
                }
                muteSelf(e) {
                    return this._voiceBinding.put("/v1/self/mute", e ? 1 : 0)
                }
                changeMicLevelSelf(e) {
                    return this._voiceBinding.put("/v1/self/micLevel", e)
                }
                connect() {
                    return this._voiceBinding.post("/v1/session")
                }
                disconnect() {
                    return this._voiceBinding.delete("/v1/session")
                }
                startMicTest() {
                    return this._voiceBinding.post("/v1/mic-test")
                }
                stopMicTest() {
                    return this._voiceBinding.delete("/v1/mic-test")
                }
                firstExperienceCompleted() {
                    return this._voiceBinding.post("/v1/first-experience/lcu")
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = i(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        l && (l.get || l.set) ? Object.defineProperty(r, o, l) : r[o] = e[o]
                    } r.default = e, n && n.set(e, r);
                return r
            }(n(1));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (i = function(e) {
                    return e ? n : t
                })(e)
            }
            var a = class {
                constructor() {
                    this._observers = {}, this._binding = null
                }
                dataBinding(e) {
                    return this._binding = (0, r.dataBinding)(e, r.default.getProvider().getSocket()), this._binding
                }
                createObserver(e, t) {
                    e && t && (this._observers[e] = {
                        path: t,
                        callbacks: []
                    }, this._binding && this._binding.observe(t, this, (t => {
                        this._publishToObserver(this._observers[e], t)
                    })))
                }
                observe(e, t) {
                    t && e && this._observers[e] && this._observers[e].callbacks.push(t)
                }
                removeObservers(e) {
                    if (!e) return;
                    const t = this._observers[e];
                    t && (this._binding && this._binding.unobserve(t.path, this), delete this._observers[e])
                }
                _publishToObserver(e, t) {
                    const {
                        callbacks: n
                    } = e;
                    n && n.length > 0 && n.forEach((e => {
                        "function" == typeof e && e(t)
                    }))
                }
            };
            t.default = a
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._teamVoiceBinding = this.dataBinding("/lol-team-voice"), this.createObserver("availability", "/v2/availability"), this.createObserver("session", "/v1/session"), this.createObserver("voiceFonts", "/v1/voice-fonts")
                }
                availability() {
                    return this._teamVoiceBinding.get("/v2/availability")
                }
                session() {
                    return this._teamVoiceBinding.get("/v1/session")
                }
                voiceFonts() {
                    return this._teamVoiceBinding.get("/v1/voice-fonts")
                }
                connect() {
                    return this._teamVoiceBinding.post("/v1/session")
                }
                disconnect() {
                    return this._teamVoiceBinding.delete("/v1/session")
                }
                mute(e, t) {
                    return this._teamVoiceBinding.put(`/v1/participants/${e}/mute/${t}`)
                }
                changeVolume(e, t) {
                    return this._teamVoiceBinding.put(`/v1/participants/${e}/volume/${t}`)
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(1),
                i = o(n(27)),
                a = o(n(28));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const l = "hasShownTeamVoiceFtux";
            var s = new class {
                constructor() {
                    this._ftuxShown = !1, this._checkInProgress = !1
                }
                async checkAndShowFtux() {
                    if (this._ftuxShown || this._checkInProgress) return !1;
                    this._checkInProgress = !0;
                    try {
                        const e = await a.default.navigationPreferences();
                        if (!await i.default.teamVoicePluginEnabled()) return !1;
                        return !0 !== e?.data?.[l] && (this._showFtux(), !0)
                    } catch (e) {
                        return r.logger.error(`team-voice-ftux-service -- error checking FTUX state: ${e}`), !1
                    } finally {
                        this._checkInProgress = !1
                    }
                }
                _showFtux() {
                    this._ftuxShown = !0;
                    try {
                        r.SharedPlayerBehaviorApps.showCommunicationsAgreementModal()
                    } catch (e) {
                        return r.logger.error(`team-voice-ftux-service -- error showing FTUX modal: ${e}`), void(this._ftuxShown = !1)
                    }
                    this._persistSeen()
                }
                showAgreementModal() {
                    try {
                        r.SharedPlayerBehaviorApps.showCommunicationsAgreementModal()
                    } catch (e) {
                        r.logger.error(`team-voice-ftux-service -- error showing agreement modal: ${e}`)
                    }
                }
                _persistSeen() {
                    a.default.patchNavigationPreferences({
                        [l]: !0
                    }).catch((e => {
                        r.logger.error(`team-voice-ftux-service -- error saving FTUX preference: ${e}`)
                    }))
                }
            };
            t.default = s
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._clientConfigBinding = this.dataBinding("/lol-client-config"), this.createObserver("teamVoicePluginEnabled", "/v3/client-config/lol.client_settings.team_voice.enabled")
                }
                teamVoicePluginEnabled() {
                    return this._clientConfigBinding.get("/v3/client-config/lol.client_settings.team_voice.enabled")
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            const a = "/v2/account/LCUPreferences/lol-navigation",
                o = "/v2/account/LCUPreferences/lol-premade-voice",
                l = "/v2/ready";
            class s extends i.default {
                constructor() {
                    super(), this._settingsBinding = this.dataBinding("/lol-settings"), this.createObserver("navigationPreferences", a)
                }
                ready() {
                    return this._readyPromise || (this._readyPromise = new Promise((e => {
                        const t = n => {
                            n && (this._settingsBinding.unobserve(l, t), e())
                        };
                        this._settingsBinding.observe(l, t)
                    }))), this._readyPromise
                }
                async navigationPreferences() {
                    return await this.ready(), this._settingsBinding.get(a)
                }
                async patchNavigationPreferences(e) {
                    return await this.ready(), this._settingsBinding.patch(a, {
                        schemaVersion: 1,
                        data: e
                    })
                }
                async accountVoiceSettings() {
                    return await this.ready(), this._settingsBinding.get(o)
                }
                async patchAccountVoiceSettings(e) {
                    return await this.ready(), this._settingsBinding.patch(o, {
                        schemaVersion: 1,
                        data: e
                    })
                }
            }
            var c = new s;
            t.default = c
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._gameflowBinding = this.dataBinding("/lol-gameflow"), this.createObserver("session", "/v1/session")
                }
                session() {
                    return this._gameflowBinding.get("/v1/session")
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._loginBinding = this.dataBinding("/lol-login"), this.createObserver("session", "/v1/session")
                }
                session() {
                    return this._loginBinding.get("v1/session")
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._lobbyBinding = this.dataBinding("/lol-lobby"), this.createObserver("lobby", "/v2/lobby")
                }
                lobby() {
                    return this._lobbyBinding.get("/v2/lobby")
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._postgameBinding = this.dataBinding("/lol-end-of-game"), this.createObserver("stats", "/v1/eog-stats-block")
                }
                stats() {
                    return this._postgameBinding.get("/v1/eog-stats-block")
                }
                parseChatId(e) {
                    return e ? e.replace(/@.*$/, "").toLowerCase() : ""
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._chatBinding = this.dataBinding("/lol-chat"), this.createObserver("me", "/v1/me"), this.createObserver("conversations", "/v1/conversations")
                }
                me() {
                    return this._chatBinding.get("/v1/me")
                }
                conversations() {
                    return this._chatBinding.get("/v1/conversations")
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._clashBinding = this.dataBinding("/lol-clash"), this.createObserver("rosters", "/v1/player/chat-rosters")
                }
                clashRosters() {
                    return this._clashBinding.get("/v1/player/chat-rosters")
                }
            }
            var o = new a;
            t.default = o
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(24)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._parentalControlsBinding = this.dataBinding("/lol-parental-controls"), this.createObserver("status", "/v1/status")
                }
                status() {
                    return this._parentalControlsBinding.get("/v1/status")
                }
            }
            var o = new a;
            t.default = o
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VOICE_DISCONNECTED_STATE = t.VOICE_CONNECTING_STATE = t.VOICE_CONNECTED_STATE = void 0;
            t.VOICE_CONNECTED_STATE = "connected";
            t.VOICE_DISCONNECTED_STATE = "disconnected";
            t.VOICE_CONNECTING_STATE = "connecting"
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CLASH_ROSTER_STATE = void 0;
            t.CLASH_ROSTER_STATE = {
                IDLE: "IDLE",
                LOCK_IN: "LOCK_IN",
                IN_GAME: "IN_GAME",
                RESULTS: "RESULTS"
            }
        }, function(e, t, n) {
            "use strict";
            var r, i = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || (r = function(e) {
                    return r = Object.getOwnPropertyNames || function(e) {
                        var t = [];
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
                        return t
                    }, r(e)
                }, function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n = r(e), o = 0; o < n.length; o++) "default" !== n[o] && i(t, e, n[o]);
                    return a(t, e), t
                });
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.INPUT_MODE_PUSH_TO_TALK = void 0, t.default = function() {
                l.default.apis.Settings?.show(l.SettingsCategoryName.VOICE)
            };
            const l = o(n(2));
            t.INPUT_MODE_PUSH_TO_TALK = "pushToTalk"
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEADER_LOBBY = t.HEADER_CLASH = void 0;
            t.HEADER_LOBBY = "header-lobby";
            t.HEADER_CLASH = "header-clash"
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(1);
            var i = {
                attachSmallTooltip: function(e, t, n, i, a) {
                    if (!e || !t) return;
                    n = n || {
                        x: "center",
                        y: "top"
                    }, i = i || {
                        x: "center",
                        y: "bottom"
                    }, a = 0 === a || a ? a : 400, r.TooltipManager.unassign(e);
                    const o = document.createElement("lol-uikit-tooltip"),
                        l = document.createElement("lol-uikit-content-block");
                    l.setAttribute("type", "tooltip-system");
                    const s = document.createElement("p");
                    s.innerHTML = t, l.appendChild(s), o.appendChild(l), r.TooltipManager.assign(e, o, null, {
                        targetAnchor: n,
                        tooltipAnchor: i,
                        showDelay: a
                    })
                },
                removeTooltip: function(e) {
                    r.TooltipManager.unassign(e)
                }
            };
            t.default = i
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-premade-voice-panel">\r\n    <div class="lol-premade-voice-panel-wrapper">\r\n      <div class="lol-premade-voice-panel-header">\r\n        <div class="lol-premade-voice-panel-header-default">\r\n          <div class="lol-premade-voice-panel-header-text"></div>\r\n          <div class="lol-premade-voice-panel-connection-status"></div>\r\n          <div class="voice-toggle lol-premade-voice-panel-connection-toggle disconnected">\r\n            <div class="voice-toggle-icon"></div>\r\n            <div class="voice-toggle-thumb"></div>\r\n          </div>\r\n          <div class="lol-premade-voice-panel-minimize-button"></div>\r\n        </div>\r\n        <div class="lol-premade-voice-panel-header-clash">\r\n          <img class="lol-premade-voice-panel-header-clash-logo" />\r\n          <div class="lol-premade-voice-panel-header-clash-title">\r\n            <div class="lol-premade-voice-panel-header-clash-shortName"></div>\r\n            <div class="lol-premade-voice-panel-header-clash-name"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <lol-uikit-scrollable class="lol-premade-voice-panel-participants lol-premade-voice-panel-content">\r\n        <div class="lol-premade-voice-panel-party-header">\r\n          <div class="lol-premade-voice-panel-party-header-text"></div>\r\n          <lol-parties-key-bind-indicator class="lol-premade-voice-panel-party-ptt-indicator"></lol-parties-key-bind-indicator>\r\n          <div class="voice-toggle lol-premade-voice-panel-party-toggle disconnected">\r\n            <div class="voice-toggle-icon"></div>\r\n            <div class="voice-toggle-thumb"></div>\r\n          </div>\r\n        </div>\r\n        <div class="lol-premade-voice-panel-section-divider hide"></div>\r\n        <div class="lol-premade-voice-panel-team-header hide">\r\n          <div class="lol-premade-voice-panel-team-header-text"></div>\r\n          <lol-parties-key-bind-indicator class="lol-premade-voice-panel-team-ptt-indicator"></lol-parties-key-bind-indicator>\r\n          <div class="lol-premade-voice-panel-team-unavailable hide"></div>\r\n          <div class="voice-toggle lol-premade-voice-panel-team-toggle disconnected">\r\n            <div class="voice-toggle-icon"></div>\r\n            <div class="voice-toggle-thumb"></div>\r\n          </div>\r\n        </div>\r\n        <div class="lol-premade-voice-panel-team-party-row hide">\r\n          <div class="lol-premade-voice-panel-team-party-indicator">\r\n            <div class="lol-premade-voice-panel-team-party-indicator-icon"></div>\r\n            <div class="lol-premade-voice-panel-team-party-indicator-count">0</div>\r\n          </div>\r\n          <div class="lol-premade-voice-panel-team-party-names"></div>\r\n        </div>\r\n      </lol-uikit-scrollable>\r\n      <div class="lol-premade-voice-panel-availability lol-premade-voice-panel-content hide">\r\n        <div class="lol-premade-voice-panel-poro"></div>\r\n        <div class="lol-premade-voice-panel-message"></div>\r\n      </div>\r\n      <div class="lol-premade-voice-panel-connection-bar">\r\n        <div class="lol-premade-voice-panel-connection-state"></div>\r\n        <div class="lol-premade-voice-panel-connection-icon"></div>\r\n      </div>\r\n      <div class="lol-premade-voice-panel-current-player">\r\n        <div class="lol-premade-voice-panel-player-highlight"></div>\r\n        <div class="voice-panel-avatar-wrapper">\r\n          <lol-parties-comm-halo class="voice-panel-current-player-halo" size="small">\r\n            <lol-social-avatar-icon\r\n                    class="lol-premade-voice-panel-cp-chat-icon"\r\n                    icon-id=""\r\n                    availability=""\r\n                    show-availability="true"\r\n            >\r\n            </lol-social-avatar-icon>\r\n          </lol-parties-comm-halo>\r\n        </div>\r\n        <div class="lol-premade-voice-panel-current-player-content">\r\n          <div class="lol-premade-voice-panel-current-player-row">\r\n            <div class="lol-premade-voice-panel-current-player-name">\r\n              <lol-uikit-player-name format="tooltip" puuid="" />\r\n            </div>\r\n            <div class="lol-premade-voice-panel-current-player-voice-skin hide"></div>\r\n          </div>\r\n          <lol-uikit-slider\r\n                  for="currentPlayerVolume"\r\n                  percentage\r\n                  value="0"\r\n                  class="lol-premade-voice-panel-current-player-volume"\r\n                  clickset="true"\r\n                  trackTooltipPosition="true"\r\n          >\r\n          </lol-uikit-slider>\r\n        </div>\r\n        <div class="lol-premade-voice-panel-current-player-buttons">\r\n          <div class="lol-premade-voice-panel-current-player-mic"></div>\r\n          <div class="lol-premade-voice-panel-current-player-deafen"></div>\r\n          <div class="lol-premade-voice-panel-current-player-divider"></div>\r\n          <div class="lol-premade-voice-panel-current-player-settings"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="lol-premade-voice-panel-in-game-session hide">\r\n      <div class="lol-premade-voice-panel-in-game-minimize-button"></div>\r\n      <div class="lol-premade-voice-panel-in-game-content">\r\n        <div class="lol-premade-voice-panel-in-game-poro"></div>\r\n        <div class="lol-premade-voice-panel-in-game-message"></div>\r\n      </div>\r\n    </div>\r\n    <div class="lol-premade-voice-panel-restricted lol-premade-voice-panel-content hide">\r\n      <div class="lol-premade-voice-panel-restricted-poro"></div>\r\n      <div class="lol-premade-voice-panel-restricted-message"></div>\r\n    </div>\r\n  </div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, t, n) => {
            var r = n(43),
                i = n(44),
                a = n(45),
                o = n(46),
                l = n(47),
                s = n(48),
                c = n(49),
                p = n(50),
                d = n(51),
                h = n(52),
                m = n(53),
                u = n(54),
                g = n(55),
                A = n(56),
                _ = n(57),
                v = n(58),
                b = n(59),
                y = n(60),
                f = n(61),
                E = n(62),
                x = n(63),
                C = n(64),
                k = n(65),
                B = n(66),
                w = n(67),
                $ = n(68),
                S = n(69),
                T = n(70),
                P = n(71),
                O = n(72),
                D = n(73),
                I = n(74),
                V = n(75),
                M = n(76),
                N = n(77),
                z = n(78),
                j = n(79),
                L = n(80),
                R = n(81),
                U = n(82),
                F = n(83),
                H = n(84),
                Y = i(r),
                G = a(o),
                q = a(l),
                K = a(s),
                Q = a(c),
                W = a(p),
                J = a(d),
                X = a(h),
                Z = a(m),
                ee = a(u),
                te = a(g),
                ne = a(A),
                re = a(_),
                ie = a(v),
                ae = a(b),
                oe = a(y),
                le = a(f),
                se = a(E),
                ce = a(x),
                pe = a(C),
                de = a(k),
                he = a(B),
                me = a(w),
                ue = a($),
                ge = a(S),
                Ae = a(T),
                _e = a(P),
                ve = a(O),
                be = a(D),
                ye = a(I),
                fe = a(V),
                Ee = a(M),
                xe = a(N),
                Ce = a(z),
                ke = a(j),
                Be = a(L),
                we = a(R),
                $e = a(U),
                Se = a(F),
                Te = a(H);
            Y.push([e.id, '.lol-premade-voice-panel .lol-premade-voice-panel-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  font-family: var(--font-display);\n}\n.lol-premade-voice-panel,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable,\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-message,\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted .lol-premade-voice-panel-restricted-message,\n.lol-premade-voice-panel .lol-premade-voice-panel-availability .lol-premade-voice-panel-message {\n  font-family: var(--font-body);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  font-family: var(--font-display);\n}\n.lol-premade-voice-panel,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable,\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-message,\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted .lol-premade-voice-panel-restricted-message,\n.lol-premade-voice-panel .lol-premade-voice-panel-availability .lol-premade-voice-panel-message {\n  font-family: var(--font-body);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable,\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-message,\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted .lol-premade-voice-panel-restricted-message {\n  -webkit-user-select: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable,\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-message,\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted .lol-premade-voice-panel-restricted-message {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  text-transform: uppercase;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(zh-tw),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(zh-tw),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(zh-tw),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count:lang(zh-tw),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(zh-tw) {\n  text-transform: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName {\n  color: #f0e6d2;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: 0.05em;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text {\n  color: #f0e6d2;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.075em;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  color: #f0e6d2;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: 0.075em;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(ja-jp) {\n  font-size: 13px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(ar-ae),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count:lang(ar-ae),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-message,\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted .lol-premade-voice-panel-restricted-message {\n  color: #a09b8c;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 20px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash:lang(ar-ae),\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-message:lang(ar-ae),\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted .lol-premade-voice-panel-restricted-message:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable:lang(ja-jp) {\n  font-size: 13px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash {\n  color: #f0e6d2;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content lol-uikit-slider {\n  width: 155px;\n  height: 15px;\n  --slider-base-before-top: 7px;\n  --slider-btn-cursor: pointer;\n  --slider-btn-width: 15px;\n  --slider-btn-height: 15px;\n  --slider-btn-hover-background-position: 0 -15px;\n  --slider-btn-active-background-position: 0 -30px;\n  --slider-fill-top: 6px;\n}\n:host {\n  width: 288px;\n  overflow: hidden;\n}\n.lol-premade-voice-panel {\n  display: flex;\n  flex-direction: column;\n  background: #010a13;\n  border: thin solid #1e2328;\n  cursor: default;\n  opacity: 0;\n  transform: translateY(350px);\n  transform-origin: center bottom;\n  transition: transform 500ms cubic-bezier(0.02, 0.85, 0.08, 0.99), opacity 300ms ease;\n  position: relative;\n  height: 317px;\n}\n.lol-premade-voice-panel:lang(ar-ae) {\n  direction: rtl;\n}\n.lol-premade-voice-panel.show {\n  opacity: 1;\n  transform: translateY(0);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-wrapper {\n  display: contents;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-wrapper.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 47px;\n  border-bottom: thin solid #463714;\n  align-items: center;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-grow: 1;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  color: #f0e6d2;\n  margin: 0 0 0 8px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(ar-ae) {\n  margin: 0 8px 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-status {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-toggle {\n  margin: 0 8px 0 auto;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-toggle:lang(ar-ae) {\n  margin: 0 auto 0 8px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-minimize-button {\n  display: block;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  margin: 0 8px 0 auto;\n  background-image: url(' + G + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.7;\n  flex-shrink: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-minimize-button:lang(ar-ae) {\n  margin: 0 auto 0 8px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-minimize-button:hover {\n  opacity: 1;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash {\n  display: none;\n  color: #f0e6d2;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 47px;\n  padding-left: 8px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-logo {\n  display: inline;\n  height: 32px;\n  width: 32px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName {\n  color: #c8aa6e;\n  flex-direction: row;\n  margin-left: 7px;\n  margin-right: 7px;\n  display: inline;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-name {\n  text-overflow: ellipsis;\n  max-width: 150px;\n  flex-direction: row;\n  display: inline;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-content {\n  display: flex;\n  height: 216px;\n  padding: 0px 11px;\n  box-sizing: border-box;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants {\n  flex-direction: column;\n  visibility: visible;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header {\n  color: #f0e6d2;\n  margin: 8px 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header .lol-premade-voice-panel-party-toggle {\n  margin: 0 0 0 auto;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header .lol-premade-voice-panel-party-toggle:lang(ar-ae) {\n  margin: 0 auto 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header .lol-premade-voice-panel-party-toggle.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-section-divider {\n  width: 100%;\n  height: 1px;\n  background: #3c3c41;\n  align-self: center;\n  flex-shrink: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-section-divider.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 11px;\n  margin: 0 -11px 6px -11px;\n  color: #a09b8c;\n  background: linear-gradient(180deg, #1e2328 0%, rgba(30,35,40,0) 157.69%);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: 38px;\n  height: 24px;\n  background-image: url(" + q + ");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-icon {\n  width: 12px;\n  height: 12px;\n  background-color: currentColor;\n  -webkit-mask-image: url(" + K + ");\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-size: contain;\n  -webkit-mask-position: center;\n  mask-image: url(" + K + ");\n  mask-repeat: no-repeat;\n  mask-size: contain;\n  mask-position: center;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-indicator-count {\n  color: #a09b8c;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.08em;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-names {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n  min-width: 0;\n  font-size: 12px;\n  color: #a09b8c;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-party-row .lol-premade-voice-panel-team-party-names lol-uikit-player-name {\n  flex-shrink: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  color: #f0e6d2;\n  margin: 8px 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-header-text {\n  margin-right: 5px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable {\n  font-style: italic;\n  color: #5b5a56;\n  margin-left: auto;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-ptt-indicator.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-toggle {\n  margin: 0 0 0 auto;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-toggle:lang(ar-ae) {\n  margin: 0 auto 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-toggle.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable:not(.hide) ~ .lol-premade-voice-panel-team-toggle {\n  margin-left: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-unavailable:not(.hide) ~ .lol-premade-voice-panel-team-toggle:lang(ar-ae) {\n  margin-right: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants lol-parties-comm-participant {\n  height: 54px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants.hide {\n  display: none;\n  visibility: hidden;\n  margin: 0px;\n  height: 0px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  color: #a09b8c;\n  z-index: 1;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-minimize-button {\n  position: absolute;\n  top: 15px;\n  right: 8px;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  background-image: url(" + G + ');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  opacity: 0.7;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-minimize-button:hover {\n  opacity: 1;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-content {\n  position: absolute;\n  top: 76px;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-poro {\n  width: 110px;\n  height: 105px;\n  background-image: url("/fe/lol-static-assets/images/empty_states/sleeping-poro.svg");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  flex-shrink: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-in-game-session .lol-premade-voice-panel-in-game-message {\n  width: 238px;\n  color: #a09b8c;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.14px;\n  text-align: center;\n  word-break: break-word;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted {\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted .lol-premade-voice-panel-restricted-poro {\n  width: 64px;\n  height: 64px;\n  background: url(' + Q + ") no-repeat center;\n  background-size: contain;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted .lol-premade-voice-panel-restricted-message {\n  letter-spacing: 0.01em;\n  color: #a09b8c;\n  text-align: center;\n  margin-top: 12px;\n  width: 220px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-restricted.hide {\n  display: none;\n  margin: 0px;\n  height: 0px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-availability {\n  flex-direction: column;\n  align-items: center;\n  color: #3c3c41;\n  justify-content: center;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-availability .lol-premade-voice-panel-poro {\n  background-image: url(" + W + ");\n  background-size: cover;\n  width: 128px;\n  height: 128px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-availability .lol-premade-voice-panel-message {\n  width: 180px;\n  text-align: center;\n  font-size: 14px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-availability.hide {\n  display: none;\n  margin: 0px;\n  height: 0px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar {\n  display: flex;\n  justify-content: space-between;\n  height: 32px;\n  width: 100%;\n  align-items: center;\n  background: linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n  border-bottom: thin solid #1e2328;\n  cursor: default;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar:hover {\n  background: rgba(255,255,255,0.1);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected {\n  color: #3cb44b;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected.button-hover {\n  color: #f0e6d2;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected .lol-premade-voice-panel-connection-icon {\n  background-image: url(" + J + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected .lol-premade-voice-panel-connection-icon:hover {\n  background-image: url(" + X + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected .lol-premade-voice-panel-connection-icon:active {\n  background-image: url(" + Z + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected {\n  color: #a09b8c;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected.button-hover {\n  color: #f0e6d2;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected .lol-premade-voice-panel-connection-icon {\n  background-image: url(" + ee + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected .lol-premade-voice-panel-connection-icon:hover {\n  background-image: url(" + te + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected .lol-premade-voice-panel-connection-icon:active {\n  background-image: url(" + ne + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connecting {\n  color: #cdbe91;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-state {\n  font-size: 14px;\n  flex-grow: 1;\n  margin: 0 0 0 7px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-state:lang(ar-ae) {\n  margin: 0 7px 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-icon {\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  margin: 0 7px 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-icon:lang(ar-ae) {\n  margin: 0 0 0 7px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-icon.locked {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player {\n  display: flex;\n  flex-direction: row;\n  height: 54px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player:hover {\n  background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-player-highlight {\n  display: flex;\n  width: 7px;\n  background-color: #785a28;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-buttons {\n  display: flex;\n  position: absolute;\n  bottom: 11px;\n  right: 11px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-buttons:lang(ar-ae) {\n  right: auto;\n  left: 11px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic {\n  background-image: url(" + re + ");\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic:hover {\n  background-image: url(" + ie + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic:active {\n  background-image: url(" + ae + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic.muted {\n  background-image: url(" + oe + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic.muted:hover {\n  background-image: url(" + le + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic.muted:active {\n  background-image: url(" + se + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic.disabled {\n  background-image: url(" + ce + ");\n  cursor: default;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen {\n  background-image: url(" + pe + ");\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n  margin: 0 5px 0 5px;\n  cursor: pointer;\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen:hover {\n  background-image: url(" + de + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen:active {\n  background-image: url(" + he + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen.deafened {\n  background-image: url(" + me + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen.deafened:hover {\n  background-image: url(" + ue + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen.deafened:active {\n  background-image: url(" + ge + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-divider {\n  width: 1px;\n  height: 15.438px;\n  background: #3c3c41;\n  align-self: center;\n  margin: 0 3px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings {\n  background-image: url(" + Ae + ");\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings:hover {\n  background-image: url(" + _e + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings:active {\n  background-image: url(" + ve + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings.disabled,\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings .disabled:hover,\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings .disabled:active {\n  background-image: url(" + be + ");\n  cursor: default;\n}\n.lol-premade-voice-panel .voice-panel-avatar-wrapper {\n  align-self: center;\n  margin: 0 8px 0 4px;\n}\n.lol-premade-voice-panel .voice-panel-avatar-wrapper:lang(ar-ae) {\n  margin: 0 4px 0 8px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n  font-size: 14px;\n  color: #cdbe91;\n  margin: 11px 58px 11px 3px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content:lang(ar-ae) {\n  margin: 11px 3px 11px 58px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content .lol-premade-voice-panel-current-player-volume {\n  width: 100%;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content .lol-premade-voice-panel-current-player-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content .lol-premade-voice-panel-current-player-row .lol-premade-voice-panel-current-player-name {\n  max-width: 130px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content .lol-premade-voice-panel-current-player-row .lol-premade-voice-panel-current-player-voice-skin {\n  background-image: url(" + ye + ");\n  background-size: 14px 14px;\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content.disabled {\n  color: #3c3c41;\n}\n.lol-premade-voice-panel .voice-toggle {\n  position: relative;\n  width: 44px;\n  height: 22px;\n  cursor: pointer;\n  flex-shrink: 0;\n  background-image: url(" + fe + ");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n.lol-premade-voice-panel .voice-toggle .voice-toggle-icon {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 14px;\n  height: 14px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.lol-premade-voice-panel .voice-toggle .voice-toggle-thumb {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 18px;\n  height: 18px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: left 200ms ease;\n}\n.lol-premade-voice-panel .voice-toggle.disconnected .voice-toggle-icon {\n  display: none;\n}\n.lol-premade-voice-panel .voice-toggle.disconnected .voice-toggle-thumb {\n  left: 2px;\n  background-image: url(" + Ee + ");\n}\n.lol-premade-voice-panel .voice-toggle.connected .voice-toggle-icon {\n  display: block;\n  left: 3px;\n  background-image: url(" + xe + ");\n}\n.lol-premade-voice-panel .voice-toggle.connected .voice-toggle-thumb {\n  left: 24px;\n  background-image: url(" + Ce + ");\n}\n.lol-premade-voice-panel .voice-toggle.connecting .voice-toggle-icon {\n  display: block;\n  left: 3px;\n  width: 14px;\n  height: 14px;\n  background-image: url(" + ke + ");\n  animation: voice-toggle-spin 1s linear infinite;\n}\n.lol-premade-voice-panel .voice-toggle.connecting .voice-toggle-thumb {\n  left: 24px;\n  background-image: url(" + Ce + ");\n}\n.lol-premade-voice-panel .voice-toggle.restricted {\n  cursor: not-allowed;\n}\n.lol-premade-voice-panel .voice-toggle.restricted .voice-toggle-icon {\n  display: block;\n  right: 3px;\n  left: auto;\n  background-image: url(" + Be + ");\n}\n.lol-premade-voice-panel .voice-toggle.restricted .voice-toggle-thumb {\n  left: 2px;\n  background-image: url(" + we + ");\n}\n.lol-premade-voice-panel .voice-toggle.mute-restricted {\n  cursor: pointer;\n}\n.lol-premade-voice-panel .voice-toggle.mute-restricted .voice-toggle-icon {\n  display: block;\n  left: 5px;\n  right: auto;\n  background-image: url(" + $e + ");\n}\n.lol-premade-voice-panel .voice-toggle.mute-restricted .voice-toggle-thumb {\n  left: 24px;\n  background-image: url(" + Se + ");\n}\n.lol-premade-voice-panel .voice-toggle.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.lol-premade-voice-panel .voice-toggle.disabled-disconnected {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.lol-premade-voice-panel .voice-toggle.disabled-disconnected .voice-toggle-icon {\n  display: block;\n  right: 3px;\n  left: auto;\n  background-image: url(" + Te + ");\n}\n.lol-premade-voice-panel .voice-toggle.disabled-disconnected .voice-toggle-thumb {\n  left: 2px;\n  background-image: url(" + Ee + ");\n}\n@-moz-keyframes voice-toggle-spin {\n  0% {\n    transform: translateY(-50%) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-50%) rotate(360deg);\n  }\n}\n@-webkit-keyframes voice-toggle-spin {\n  0% {\n    transform: translateY(-50%) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-50%) rotate(360deg);\n  }\n}\n@-o-keyframes voice-toggle-spin {\n  0% {\n    transform: translateY(-50%) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-50%) rotate(360deg);\n  }\n}\n@keyframes voice-toggle-spin {\n  0% {\n    transform: translateY(-50%) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-50%) rotate(360deg);\n  }\n}\n", "", {
                version: 3,
                sources: ["webpack://./node_modules/riotclient-lol-asset-csslib/styles/fonts.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/voice-panel/style.styl", "webpack://./node_modules/riotclient-lol-asset-csslib/styles/typekit.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl"],
                names: [],
                mappings: "AAAA;;;;;;EACE,gCAAa;ACMf;ADHA;;;;;;EACE,6BAAa;ACUf;ADfA;;;;;;EACE,gCAAa;ACsBf;ADnBA;;;;;;EACE,6BAAa;AC0Bf;ACrBA;;;;;;;;;EACE,yBAAqB;AD+BvB;ACnBA;;;;;;;;;EAEE,oBAAc;EACd,uCAA+B;EAC/B,mCAAwB;AD4B1B;ACpBA;;;;;EACE,yBAAgB;AD0BlB;ACzBE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAME,oBAAgB;ADmDpB;AC+DA;EAIE,cAAO;EACP,eAAW;EACX,gBAAa;EACb,iBAAa;EACb,sBAAgB;ADhElB;ACiEE;EACE,iBAAgB;AD/DpB;ACuFA;EAIE,cAAO;EACP,eAAW;EACX,gBAAa;EACb,iBAAa;EACb,uBAAgB;ADxFlB;ACyFE;EACE,iBAAgB;ADvFpB;ACyGA;;;EAIE,cAAO;EACP,eAAW;EAIX,gBAAa;EACb,iBAAa;EACb,uBAAgB;AD3GlB;ACsGE;;;EACE,eAAW;ADlGf;ACuGE;;;EACE,iBAAgB;ADnGpB;ACqJA;;;EAGE,cAAO;EACP,eAAW;EACX,mBAAa;EACb,iBAAa;EACb,uBAAgB;EAIhB,4CAAwB;ADtJ1B;ACmJE;;;EACE,iBAAgB;AD/IpB;ACoJA;EAGE,cAAO;EACP,eAAW;EAIX,mBAAa;EACb,iBAAa;EACb,uBAAgB;EAIhB,4CAAwB;AD1J1B;ACiJE;EACE,eAAW;AD/If;ACoJE;EACE,iBAAgB;ADlJpB;AC0cA;EACE,cAAO;ADxcT;AEnGE;EACE,YAAO;EACP,YAAQ;EAER,6BAA0B;EAC1B,4BAAqB;EACrB,wBAAoB;EACpB,yBAAqB;EACrB,+CAAwC;EACxC,gDAAyC;EACzC,sBAAmB;AFoGvB;AAxKA;EACE,YAAO;EACP,gBAAU;AA0KZ;AAvKA;EAEE,aAAS;EACT,sBAAgB;EAChB,mBAAY;EACZ,0BAAQ;EACR,eAAQ;EACR,UAAS;EACT,4BAAW;EACX,+BAAkB;EAClB,oFAAyD;EACzD,kBAAU;EACV,aAAQ;AAwKV;AAvKE;EACE,cAAW;AAyKf;AAtKE;EACE,UAAS;EACT,wBAAW;AAwKf;AArKE;EACE,iBAAS;AAuKb;AArKI;EACE,aAAS;AAuKf;AAnKE;EAEE,aAAS;EACT,mBAAgB;EAChB,eAAW;EACX,WAAO;EACP,YAAQ;EACR,iCAAe;EACf,mBAAa;AAoKjB;AAlKI;EACE,aAAS;EACT,mBAAgB;EAChB,mBAAa;EACb,YAAW;AAoKjB;AAlKM;EAEE,aAAS;EACT,sBAAgB;EAChB,eAAW;EACX,cAAO;EACP,iBAAQ;AAmKhB;AAlKQ;EACE,iBAAQ;AAoKlB;AAhKM;EACE,aAAS;AAkKjB;AA/JM;EACE,oBAAQ;AAiKhB;AAhKQ;EACE,oBAAQ;AAkKlB;AA9JM;EACE,cAAS;EACT,WAAO;EACP,YAAQ;EACR,eAAQ;EACR,oBAAQ;EACR,yDAAuE;EACvE,wBAAiB;EACjB,4BAAmB;EACnB,2BAAqB;EACrB,YAAS;EACT,cAAa;AAgKrB;AA/JQ;EACE,oBAAQ;AAiKlB;AA9JQ;EACE,UAAS;AAgKnB;AA3JI;EACE,aAAS;EAGT,cAAO;EACP,aAAS;EACT,mBAAa;EACb,yBAAiB;EACjB,YAAQ;EACR,iBAAc;EACd,sBAAY;EACZ,cAAa;EACb,gBAAU;AA2JhB;AAzJM;EACE,eAAS;EACT,YAAQ;EACR,WAAO;AA2Jf;AAvJQ;EAEE,cAAO;EACP,mBAAgB;EAChB,gBAAa;EACb,iBAAc;EACd,eAAS;AAwJnB;AArJQ;EACE,uBAAe;EACf,gBAAW;EACX,mBAAgB;EAChB,eAAS;AAuJnB;AAjJE;EACE,aAAS;EACT,aAAQ;EACR,iBAAS;EACT,sBAAY;AAmJhB;AAhJE;EACE,sBAAgB;EAChB,mBAAY;AAkJhB;AAhJI;EAEE,cAAO;EACP,aAAQ;EACR,aAAS;EACT,mBAAgB;EAChB,mBAAa;EACb,QAAK;AAiJX;AA/IM;EACE,aAAS;AAiJjB;AA9IM;EACE,kBAAQ;AAgJhB;AA/IQ;EACE,kBAAQ;AAiJlB;AA9IQ;EACE,aAAS;AAgJnB;AA3II;EACE,WAAO;EACP,WAAQ;EACR,mBAAY;EACZ,kBAAY;EACZ,cAAa;AA6InB;AA3IM;EACE,aAAS;AA6IjB;AAzII;EACE,aAAS;EACT,mBAAgB;EAChB,mBAAa;EACb,QAAK;EACL,iBAAS;EACT,yBAAQ;EACR,cAAO;EACP,yEAAY;AA2IlB;AAzIM;EACE,aAAS;AA2IjB;AAxIM;EACE,oBAAS;EACT,mBAAa;EACb,uBAAiB;EACjB,QAAK;EACL,cAAa;EACb,sBAAY;EACZ,WAAO;EACP,YAAQ;EACR,yDAAkE;EAClE,0BAAiB;EACjB,4BAAmB;AA0I3B;AAvIM;EACE,WAAO;EACP,YAAQ;EACR,8BAAkB;EAClB,2DAA+D;EAC/D,8BAAqB;EACrB,0BAAmB;EACnB,6BAAuB;EACvB,mDAAuD;EACvD,sBAAa;EACb,kBAAW;EACX,qBAAe;AAyIvB;AAtIM;EAEE,cAAO;EACP,eAAW;EACX,iBAAa;EACb,sBAAgB;AAuIxB;AApIM;EACE,aAAS;EACT,mBAAgB;EAChB,mBAAa;EACb,QAAK;EACL,OAAM;EACN,YAAW;EACX,eAAW;EACX,cAAO;EACP,mBAAa;EACb,gBAAU;EACV,uBAAe;AAsIvB;AApIQ;EACE,cAAa;EACb,YAAW;EACX,gBAAU;EACV,uBAAe;AAsIzB;AAjII;EAEE,cAAO;EACP,aAAQ;EACR,aAAS;EACT,mBAAgB;EAChB,mBAAa;EACb,QAAK;AAkIX;AAhIM;EACE,aAAS;AAkIjB;AA/HM;EACE,iBAAc;AAiItB;AA9HM;EAEE,kBAAY;EACZ,cAAO;EACP,iBAAa;EACb,eAAW;EACX,mBAAa;AA+HrB;AA5HQ;EACE,aAAS;AA8HnB;AA1HM;EACE,aAAS;AA4HjB;AAzHM;EACE,kBAAQ;AA2HhB;AA1HQ;EACE,kBAAQ;AA4HlB;AAzHQ;EACE,aAAS;AA2HnB;AAvHM;EACE,cAAa;AAyHrB;AAxHQ;EACE,eAAc;AA0HxB;AArHI;EACE,YAAQ;AAuHd;AApHI;EACE,aAAS;EACT,kBAAY;EACZ,WAAQ;EACR,WAAQ;AAsHd;AAlHE;EACE,kBAAU;EACV,QAAO;EACP,aAAS;EACT,sBAAgB;EAChB,cAAO;EACP,UAAS;AAoHb;AAlHI;EACE,aAAS;AAoHf;AAjHI;EACE,kBAAU;EACV,SAAK;EACL,UAAO;EACP,WAAO;EACP,YAAQ;EACR,eAAQ;EACR,yDAAuE;EACvE,2BAAqB;EACrB,4BAAmB;EACnB,wBAAiB;EACjB,YAAS;AAmHf;AAjHM;EACE,UAAS;AAmHjB;AA/GI;EACE,kBAAU;EACV,SAAK;EACL,OAAM;EACN,WAAO;EACP,aAAS;EACT,sBAAgB;EAChB,mBAAa;EACb,SAAK;AAiHX;AA9GI;EACE,YAAO;EACP,aAAQ;EACR,oFAAmF;EACnF,2BAAqB;EACrB,4BAAmB;EACnB,wBAAiB;EACjB,cAAa;AAgHnB;AA7GI;EAEE,YAAO;EACP,cAAO;EACP,eAAW;EACX,gBAAa;EACb,iBAAa;EACb,sBAAgB;EAChB,kBAAY;EACZ,sBAAY;AA8GlB;AA1GE;EACE,sBAAgB;EAChB,mBAAa;EACb,uBAAiB;EACjB,YAAQ;AA4GZ;AA1GI;EACE,WAAO;EACP,YAAQ;EACR,oEAAyD;EACzD,wBAAiB;AA4GvB;AAzGI;EAEE,sBAAgB;EAChB,cAAO;EACP,kBAAY;EACZ,gBAAY;EACZ,YAAO;AA0Gb;AAvGI;EACE,aAAS;EACT,WAAQ;EACR,WAAQ;AAyGd;AArGE;EACE,sBAAgB;EAChB,mBAAa;EACb,cAAO;EACP,uBAAiB;AAuGrB;AArGI;EACE,yDAA6D;EAC7D,sBAAiB;EACjB,YAAO;EACP,aAAQ;AAuGd;AApGI;EAEE,YAAO;EACP,kBAAY;EACZ,eAAW;AAqGjB;AAlGI;EACE,aAAS;EACT,WAAQ;EACR,WAAQ;AAoGd;AAhGE;EACE,aAAS;EACT,8BAAiB;EACjB,YAAQ;EACR,WAAO;EACP,mBAAa;EACb,uFAAY;EACZ,iCAAe;EACf,eAAQ;AAkGZ;AAhGI;EACE,iCAAY;AAkGlB;AA/FI;EACE,cAAO;AAiGb;AAhGM;EACE,cAAO;AAkGf;AAhGM;EACE,yDAAqE;AAkG7E;AAhGM;EACE,yDAAmE;AAkG3E;AAhGM;EACE,yDAAmE;AAkG3E;AA9FI;EACE,cAAO;AAgGb;AA9FM;EACE,cAAO;AAgGf;AA9FM;EACE,yDAAoE;AAgG5E;AA9FM;EACE,yDAAkE;AAgG1E;AA9FM;EACE,0DAAkE;AAgG1E;AA5FI;EACE,cAAO;AA8Fb;AA3FI;EACE,eAAW;EACX,YAAW;EACX,iBAAQ;AA6Fd;AA5FM;EACE,iBAAQ;AA8FhB;AA1FI;EACE,sBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,eAAQ;EACR,iBAAQ;AA4Fd;AA3FM;EACE,iBAAQ;AA6FhB;AA1FM;EACE,oBAAgB;EAChB,YAAS;AA4FjB;AAtFE;EACE,aAAS;EACT,mBAAgB;EAChB,YAAQ;AAwFZ;AAtFI;EACE,yFAAY;AAwFlB;AArFI;EACE,aAAS;EACT,UAAO;EACP,yBAAkB;AAuFxB;AApFI;EACE,aAAS;EACT,kBAAU;EACV,YAAQ;EACR,WAAO;AAsFb;AArFM;EACE,WAAO;EACP,UAAM;AAuFd;AAnFI;EACE,0DAA8D;EAC9D,sBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,eAAQ;AAqFd;AAnFM;EACE,0DAA4D;AAqFpE;AAlFM;EACE,0DAA4D;AAoFpE;AAjFM;EACE,0DAAoE;AAmF5E;AAjFQ;EACE,0DAAkE;AAmF5E;AAhFQ;EACE,0DAAkE;AAkF5E;AA9EM;EACE,0DAA+D;EAC/D,eAAQ;AAgFhB;AA5EI;EACE,0DAAiE;EACjE,sBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,mBAAQ;EACR,eAAQ;EACR,aAAS;AA8Ef;AA5EM;EACE,0DAA+D;AA8EvE;AA3EM;EACE,0DAA+D;AA6EvE;AA1EM;EACE,0DAAmE;AA4E3E;AA1EQ;EACE,0DAAiE;AA4E3E;AAzEQ;EACE,0DAAiE;AA2E3E;AAtEI;EACE,UAAO;EACP,gBAAQ;EACR,mBAAY;EACZ,kBAAY;EACZ,aAAQ;AAwEd;AArEI;EACE,0DAAmE;EACnE,sBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,eAAQ;AAuEd;AArEM;EACE,0DAAiE;AAuEzE;AApEM;EACE,0DAAiE;AAsEzE;AApEM;;;EACE,0DAAoE;EACpE,eAAQ;AAwEhB;AAnEE;EACE,kBAAY;EACZ,mBAAQ;AAqEZ;AApEI;EACE,mBAAQ;AAsEd;AAlEE;EACE,aAAS;EACT,OAAM;EACN,sBAAgB;EAChB,YAAW;EACX,eAAW;EACX,cAAO;EACP,0BAAQ;AAoEZ;AAnEI;EACE,0BAAQ;AAqEd;AAlEI;EACE,WAAO;AAoEb;AAjEI;EACE,aAAS;EACT,mBAAgB;EAChB,mBAAa;EACb,QAAK;AAmEX;AAjEM;EACE,gBAAW;EACX,mBAAa;EACb,uBAAe;EACf,gBAAU;AAmElB;AAhEM;EACE,0DAAkE;EAClE,0BAAiB;EACjB,cAAa;EACb,WAAO;EACP,YAAQ;AAkEhB;AA9DI;EACE,cAAO;AAgEb;AA1DE;EACE,kBAAU;EACV,WAAO;EACP,YAAQ;EACR,eAAQ;EACR,cAAa;EACb,0DAAyE;EACzE,0BAAiB;EACjB,4BAAmB;AA4DvB;AA1DI;EACE,kBAAU;EACV,QAAK;EACL,2BAAW;EACX,WAAO;EACP,YAAQ;EACR,wBAAiB;EACjB,4BAAmB;EACnB,2BAAqB;AA4D3B;AAzDI;EACE,kBAAU;EACV,QAAK;EACL,2BAAW;EACX,WAAO;EACP,YAAQ;EACR,wBAAiB;EACjB,4BAAmB;EACnB,2BAAqB;EACrB,2BAAY;AA2DlB;AAvDM;EACE,aAAS;AAyDjB;AAvDM;EACE,SAAM;EACN,0DAA4E;AAyDpF;AApDM;EACE,cAAS;EACT,SAAM;EACN,0DAAyE;AAsDjF;AApDM;EACE,UAAM;EACN,0DAAiF;AAsDzF;AAjDM;EACE,cAAS;EACT,SAAM;EACN,WAAO;EACP,YAAQ;EACR,0DAAuE;EACvE,+CAAW;AAmDnB;AAjDM;EACE,UAAM;EACN,0DAAiF;AAmDzF;AA/CI;EACE,mBAAQ;AAiDd;AAhDM;EACE,cAAS;EACT,UAAO;EACP,UAAM;EACN,0DAAwE;AAkDhF;AAhDM;EACE,SAAM;EACN,0DAAkF;AAkD1F;AA9CI;EACE,eAAQ;AAgDd;AA/CM;EACE,cAAS;EACT,SAAM;EACN,WAAO;EACP,0DAA+D;AAiDvE;AA/CM;EACE,UAAM;EACN,0DAAoE;AAiD5E;AA7CI;EACE,YAAS;EACT,mBAAQ;EACR,oBAAgB;AA+CtB;AA5CI;EACE,mBAAQ;EACR,oBAAgB;AA8CtB;AA7CM;EACE,cAAS;EACT,UAAO;EACP,UAAM;EACN,0DAA8E;AA+CtF;AA7CM;EACE,SAAM;EACN,0DAA4E;AA+CpF;AAzCA;EACE;IACE,wCAAW;EA2Cb;EAzCA;IACE,0CAAW;EA2Cb;AACF;AAjDA;EACE;IACE,wCAAW;EAmDb;EAjDA;IACE,0CAAW;EAmDb;AACF;AAzDA;EACE;IACE,wCAAW;EA2Db;EAzDA;IACE,0CAAW;EA2Db;AACF;AAjEA;EACE;IACE,wCAAW;EAmEb;EAjEA;IACE,0CAAW;EAmEb;AACF",
                sourcesContent: ["$fonts_lol_display {\r\n  font-family: var(--font-display);\r\n}\r\n\r\n$fonts_lol_body {\r\n  font-family: var(--font-body);\r\n}\r\n\r\n/**\r\n * Deprecated, keeping just to not break thiings abruptly.\r\n */\r\n\r\n$fonts_beaufort {\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n$fonts_spiegel {\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n$fonts_frizquadrata {\r\n  font-family: var(--font-frizquadrata);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-display);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Title';\r\n  }\r\n}\r\n\r\n$fonts_gill_sans_mt {\r\n  font-family: var(--font-gill-sans-mt);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-body);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Body';\r\n  }\r\n}\r\n\r\n\r\n", "@require 'riotclient-lol-asset-csslib/styles/color-palette';\r\n@require 'riotclient-lol-asset-csslib/styles/fonts';\r\n@require 'riotclient-lol-asset-csslib/styles/typekit';\r\n@require '../shared.styl';\r\n\r\n$imagesPath = '../../images';\r\n$assetsPath = '../../../assets';\r\n\r\n:host {\r\n  width: 288px;\r\n  overflow: hidden;\r\n}\r\n\r\n.lol-premade-voice-panel {\r\n  @extend $fonts_lol_body;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: alpha($color_palette_almostBlack, 1);\r\n  border: thin solid $color_palette_grey3;\r\n  cursor: default;\r\n  opacity: 0;\r\n  transform: translateY(350px);\r\n  transform-origin: center bottom;\r\n  transition: transform 500ms cubic-bezier(.02,.85,.08,.99), opacity 300ms ease;\r\n  position: relative;\r\n  height: 317px;\r\n  &:lang(ar-ae) {\r\n    direction: rtl;\r\n  }\r\n\r\n  &.show {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .lol-premade-voice-panel-wrapper {\r\n    display: contents;\r\n\r\n    &.hide {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  .lol-premade-voice-panel-header {\r\n    @extend $fonts_lol_display;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    height: 47px;\r\n    border-bottom: thin solid $color_palette_gold6;\r\n    align-items: center;\r\n\r\n    .lol-premade-voice-panel-header-default {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      flex-grow: 1;\r\n\r\n      .lol-premade-voice-panel-header-text {\r\n        @extend $typekit_h5;\r\n        display: flex;\r\n        flex-direction: column;\r\n        font-size: 14px;\r\n        color: $color_palette_gold1;\r\n        margin: 0 0 0 8px;\r\n        &:lang(ar-ae) {\r\n          margin: 0 8px 0 0;\r\n        }\r\n      }\r\n\r\n      .lol-premade-voice-panel-connection-status {\r\n        display: none;\r\n      }\r\n\r\n      .lol-premade-voice-panel-connection-toggle {\r\n        margin: 0 8px 0 auto;\r\n        &:lang(ar-ae) {\r\n          margin: 0 auto 0 8px;\r\n        }\r\n      }\r\n\r\n      .lol-premade-voice-panel-minimize-button {\r\n        display: block;\r\n        width: 16px;\r\n        height: 16px;\r\n        cursor: pointer;\r\n        margin: 0 8px 0 auto;\r\n        background-image: url(pathjoin($assetsPath, 'minimize-voice-panel.svg'));\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        opacity: 0.7;\r\n        flex-shrink: 0;\r\n        &:lang(ar-ae) {\r\n          margin: 0 auto 0 8px;\r\n        }\r\n\r\n        &:hover {\r\n          opacity: 1;\r\n        }\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-header-clash {\r\n      display: none;\r\n      @extend $typekit_text_m;\r\n      @extend $typekit_modifier_highlight;\r\n      color: $color_palette_gold1;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: flex-end;\r\n      height: 47px;\r\n      padding-left: 8px;\r\n      box-sizing: border-box;\r\n      flex-shrink: 0;\r\n      overflow: hidden;\r\n\r\n      .lol-premade-voice-panel-header-clash-logo {\r\n        display: inline;\r\n        height: 32px;\r\n        width: 32px;\r\n      }\r\n\r\n      .lol-premade-voice-panel-header-clash-title {\r\n        .lol-premade-voice-panel-header-clash-shortName {\r\n          @extend $typekit_h4;\r\n          color: $color_palette_gold3;\r\n          flex-direction: row;\r\n          margin-left: 7px;\r\n          margin-right: 7px;\r\n          display: inline;\r\n        }\r\n\r\n        .lol-premade-voice-panel-header-clash-name {\r\n          text-overflow: ellipsis;\r\n          max-width: 150px;\r\n          flex-direction: row;\r\n          display: inline;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-content {\r\n    display: flex;\r\n    height: 216px;\r\n    padding: 0px 11px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .lol-premade-voice-panel-participants {\r\n    flex-direction: column;\r\n    visibility: visible;\r\n\r\n    .lol-premade-voice-panel-party-header {\r\n      @extend $typekit_h6;\r\n      color: $color_palette_gold1;\r\n      margin: 8px 0;\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 6px;\r\n\r\n      &.hide {\r\n        display: none;\r\n      }\r\n\r\n      .lol-premade-voice-panel-party-toggle {\r\n        margin: 0 0 0 auto;\r\n        &:lang(ar-ae) {\r\n          margin: 0 auto 0 0;\r\n        }\r\n\r\n        &.hide {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-section-divider {\r\n      width: 100%;\r\n      height: 1px;\r\n      background: $color_palette_grey2;\r\n      align-self: center;\r\n      flex-shrink: 0;\r\n\r\n      &.hide {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-team-party-row {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 8px;\r\n      padding: 6px 11px;\r\n      margin: 0 -11px 6px -11px;\r\n      color: $color_palette_grey1;\r\n      background: linear-gradient(180deg, #1E2328 0%, rgba(30, 35, 40, 0) 157.69%);\r\n\r\n      &.hide {\r\n        display: none;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-party-indicator {\r\n        display: inline-flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        gap: 3px;\r\n        flex-shrink: 0;\r\n        box-sizing: border-box;\r\n        width: 38px;\r\n        height: 24px;\r\n        background-image: url(pathjoin($imagesPath, 'team-party-pill.svg'));\r\n        background-size: 100% 100%;\r\n        background-repeat: no-repeat;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-party-indicator-icon {\r\n        width: 12px;\r\n        height: 12px;\r\n        background-color: currentColor;\r\n        -webkit-mask-image: url(pathjoin($imagesPath, 'two-people.svg'));\r\n        -webkit-mask-repeat: no-repeat;\r\n        -webkit-mask-size: contain;\r\n        -webkit-mask-position: center;\r\n        mask-image: url(pathjoin($imagesPath, 'two-people.svg'));\r\n        mask-repeat: no-repeat;\r\n        mask-size: contain;\r\n        mask-position: center;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-party-indicator-count {\r\n        @extend $typekit_h6;\r\n        color: $color_palette_grey1;\r\n        font-size: 12px;\r\n        line-height: 16px;\r\n        letter-spacing: 0.08em;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-party-names {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        gap: 4px;\r\n        flex: 1;\r\n        min-width: 0;\r\n        font-size: 12px;\r\n        color: $color_palette_grey1;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n\r\n        lol-uikit-player-name {\r\n          flex-shrink: 1;\r\n          min-width: 0;\r\n          overflow: hidden;\r\n          text-overflow: ellipsis;\r\n        }\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-team-header {\r\n      @extend $typekit_h6;\r\n      color: $color_palette_gold1;\r\n      margin: 8px 0;\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 6px;\r\n\r\n      &.hide {\r\n        display: none;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-header-text {\r\n        margin-right: 5px;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-unavailable {\r\n        @extend $typekit_text_s;\r\n        font-style: italic;\r\n        color: $color_palette_grey1_5;\r\n        margin-left: auto;\r\n        font-size: 12px;\r\n        white-space: nowrap;\r\n\r\n\r\n        &.hide {\r\n          display: none;\r\n        }\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-ptt-indicator.hide {\r\n        display: none;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-toggle {\r\n        margin: 0 0 0 auto;\r\n        &:lang(ar-ae) {\r\n          margin: 0 auto 0 0;\r\n        }\r\n\r\n        &.hide {\r\n          display: none;\r\n        }\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-unavailable:not(.hide) ~ .lol-premade-voice-panel-team-toggle {\r\n        margin-left: 0;\r\n        &:lang(ar-ae) {\r\n          margin-right: 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    lol-parties-comm-participant {\r\n      height: 54px;\r\n    }\r\n\r\n    &.hide {\r\n      display: none;\r\n      visibility: hidden;\r\n      margin: 0px;\r\n      height: 0px;\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-in-game-session {\r\n    position: absolute;\r\n    inset: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: $color_palette_grey1;\r\n    z-index: 1;\r\n\r\n    &.hide {\r\n      display: none;\r\n    }\r\n\r\n    .lol-premade-voice-panel-in-game-minimize-button {\r\n      position: absolute;\r\n      top: 15px;\r\n      right: 8px;\r\n      width: 16px;\r\n      height: 16px;\r\n      cursor: pointer;\r\n      background-image: url(pathjoin($assetsPath, 'minimize-voice-panel.svg'));\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      background-size: contain;\r\n      opacity: 0.7;\r\n\r\n      &:hover {\r\n        opacity: 1;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-in-game-content {\r\n      position: absolute;\r\n      top: 76px;\r\n      left: 0;\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 12px;\r\n    }\r\n\r\n    .lol-premade-voice-panel-in-game-poro {\r\n      width: 110px;\r\n      height: 105px;\r\n      background-image: url('/fe/lol-static-assets/images/empty_states/sleeping-poro.svg');\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      background-size: contain;\r\n      flex-shrink: 0;\r\n    }\r\n\r\n    .lol-premade-voice-panel-in-game-message {\r\n      @extend $typekit_text_m;\r\n      width: 238px;\r\n      color: $color_palette_grey1;\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      line-height: 20px;\r\n      letter-spacing: 0.14px;\r\n      text-align: center;\r\n      word-break: break-word;\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-restricted {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: auto;\r\n\r\n    .lol-premade-voice-panel-restricted-poro {\r\n      width: 64px;\r\n      height: 64px;\r\n      background: url(pathjoin($imagesPath, 'poro_shocked.png')) no-repeat center;\r\n      background-size: contain;\r\n    }\r\n\r\n    .lol-premade-voice-panel-restricted-message {\r\n      @extend $typekit_text_m;\r\n      letter-spacing: 0.01em;\r\n      color: $color_palette_grey1;\r\n      text-align: center;\r\n      margin-top: 12px;\r\n      width: 220px;\r\n    }\r\n\r\n    &.hide {\r\n      display: none;\r\n      margin: 0px;\r\n      height: 0px;\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-availability {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: $color_palette_grey2;\r\n    justify-content: center;\r\n\r\n    .lol-premade-voice-panel-poro {\r\n      background-image: url(pathjoin($imagesPath, 'voice-poro.png'));\r\n      background-size: cover;\r\n      width: 128px;\r\n      height: 128px;\r\n    }\r\n\r\n    .lol-premade-voice-panel-message {\r\n      @extend $fonts_lol_body;\r\n      width: 180px;\r\n      text-align: center;\r\n      font-size: 14px;\r\n    }\r\n    \r\n    &.hide {\r\n      display: none;\r\n      margin: 0px;\r\n      height: 0px;\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-connection-bar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 32px;\r\n    width: 100%;\r\n    align-items: center;\r\n    background: linear-gradient(to top, rgba(255,255,255,.1) 0%,rgba(255,255,255,0) 100%);\r\n    border-bottom: thin solid $color_palette_grey3;\r\n    cursor: default;\r\n\r\n    &:hover {\r\n      background: rgba(255, 255, 255, .1);\r\n    }\r\n\r\n    &.connected {\r\n      color: #3cb44b;\r\n      &.button-hover {\r\n        color: $color_palette_gold1;\r\n      }\r\n      .lol-premade-voice-panel-connection-icon {\r\n        background-image: url(pathjoin($imagesPath, 'disconnect-default.png'));\r\n      }\r\n      .lol-premade-voice-panel-connection-icon:hover {\r\n        background-image: url(pathjoin($imagesPath, 'disconnect-hover.png'));\r\n      }\r\n      .lol-premade-voice-panel-connection-icon:active {\r\n        background-image: url(pathjoin($imagesPath, 'disconnect-click.png'));\r\n      }\r\n    }\r\n\r\n    &.disconnected {\r\n      color: $color_palette_grey1;\r\n\r\n      &.button-hover {\r\n        color: $color_palette_gold1;\r\n      }\r\n      .lol-premade-voice-panel-connection-icon {\r\n        background-image: url(pathjoin($imagesPath, 'reconnect-default.png'));\r\n      }\r\n      .lol-premade-voice-panel-connection-icon:hover {\r\n        background-image: url(pathjoin($imagesPath, 'reconnect-hover.png'));\r\n      }\r\n      .lol-premade-voice-panel-connection-icon:active {\r\n        background-image: url(pathjoin($imagesPath, 'reconnect-click.png'));\r\n      }\r\n    }\r\n\r\n    &.connecting {\r\n      color: $color_palette_gold2;\r\n    }\r\n\r\n    .lol-premade-voice-panel-connection-state {\r\n      font-size: 14px;\r\n      flex-grow: 1;\r\n      margin: 0 0 0 7px;\r\n      &:lang(ar-ae) {\r\n        margin: 0 7px 0 0;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-connection-icon {\r\n      background-size: cover;\r\n      width: 18px;\r\n      height: 18px;\r\n      cursor: pointer;\r\n      margin: 0 7px 0 0;\r\n      &:lang(ar-ae) {\r\n        margin: 0 0 0 7px;\r\n      }\r\n\r\n      &.locked {\r\n        pointer-events: none;\r\n        opacity: 0.3;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-current-player {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 54px;\r\n\r\n    &:hover {\r\n      background: linear-gradient(to right, rgba(255,255,255,.1) 0%,rgba(255,255,255,0) 100%);\r\n    }\r\n\r\n    .lol-premade-voice-panel-player-highlight {\r\n      display: flex;\r\n      width: 7px;\r\n      background-color: $color_palette_gold5;\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-buttons {\r\n      display: flex;\r\n      position: absolute;\r\n      bottom: 11px;\r\n      right: 11px;\r\n      &:lang(ar-ae) {\r\n        right: auto;\r\n        left: 11px;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-mic {\r\n      background-image: url(pathjoin($imagesPath, 'mic-default.png'));\r\n      background-size: cover;\r\n      width: 18px;\r\n      height: 18px;\r\n      cursor: pointer;\r\n\r\n      &:hover {\r\n        background-image: url(pathjoin($imagesPath, 'mic-hover.png'));\r\n      }\r\n\r\n      &:active {\r\n        background-image: url(pathjoin($imagesPath, 'mic-click.png'));\r\n      }\r\n\r\n      &.muted {\r\n        background-image: url(pathjoin($imagesPath, 'mic-muted-default.png'));\r\n\r\n        &:hover {\r\n          background-image: url(pathjoin($imagesPath, 'mic-muted-hover.png'));\r\n        }\r\n\r\n        &:active {\r\n          background-image: url(pathjoin($imagesPath, 'mic-muted-click.png'));\r\n        }\r\n      }\r\n\r\n      &.disabled {\r\n        background-image: url(pathjoin($imagesPath, 'mic-disabled.png'));\r\n        cursor: default;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-deafen {\r\n      background-image: url(pathjoin($imagesPath, 'deafen-default.png'));\r\n      background-size: cover;\r\n      width: 18px;\r\n      height: 18px;\r\n      margin: 0 5px 0 5px;\r\n      cursor: pointer;\r\n      display: none; // TODO: display when we decide to include this.\r\n\r\n      &:hover {\r\n        background-image: url(pathjoin($imagesPath, 'deafen-hover.png'));\r\n      }\r\n\r\n      &:active {\r\n        background-image: url(pathjoin($imagesPath, 'deafen-click.png'));\r\n      }\r\n\r\n      &.deafened {\r\n        background-image: url(pathjoin($imagesPath, 'deafened-default.png'));\r\n\r\n        &:hover {\r\n          background-image: url(pathjoin($imagesPath, 'deafened-hover.png'));\r\n        }\r\n\r\n        &:active {\r\n          background-image: url(pathjoin($imagesPath, 'deafened-click.png'));\r\n        }\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-divider {\r\n      width: 1px;\r\n      height: 15.438px;\r\n      background: $color_palette_grey2;\r\n      align-self: center;\r\n      margin: 0 3px;\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-settings {\r\n      background-image: url(pathjoin($imagesPath, 'settings-default.png'));\r\n      background-size: cover;\r\n      width: 18px;\r\n      height: 18px;\r\n      cursor: pointer;\r\n\r\n      &:hover {\r\n        background-image: url(pathjoin($imagesPath, 'settings-hover.png'));\r\n      }\r\n\r\n      &:active {\r\n        background-image: url(pathjoin($imagesPath, 'settings-click.png'));\r\n      }\r\n      &.disabled, .disabled:hover, .disabled:active {\r\n        background-image: url(pathjoin($imagesPath, 'settings-disabled.png'));\r\n        cursor: default;\r\n      }\r\n    }\r\n  }\r\n\r\n  .voice-panel-avatar-wrapper {\r\n    align-self: center;\r\n    margin: 0 8px 0 4px;\r\n    &:lang(ar-ae) {\r\n      margin: 0 4px 0 8px;\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-current-player-content {\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    font-size: 14px;\r\n    color: $color_palette_gold2;\r\n    margin: 11px 58px 11px 3px;\r\n    &:lang(ar-ae) {\r\n      margin: 11px 3px 11px 58px;\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-volume {\r\n      width: 100%;\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-row {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 6px;\r\n\r\n      .lol-premade-voice-panel-current-player-name {\r\n        max-width: 130px;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n      }\r\n\r\n      .lol-premade-voice-panel-current-player-voice-skin {\r\n        background-image: url(pathjoin($imagesPath, 'voice-skin-mask.svg'));\r\n        background-size: 14px 14px;\r\n        flex-shrink: 0;\r\n        width: 14px;\r\n        height: 14px;\r\n      }\r\n    }\r\n\r\n    &.disabled {\r\n      color: $color_palette_grey2;\r\n    }\r\n\r\n    @extend $small-slider;\r\n  }\r\n\r\n  .voice-toggle {\r\n    position: relative;\r\n    width: 44px;\r\n    height: 22px;\r\n    cursor: pointer;\r\n    flex-shrink: 0;\r\n    background-image: url(pathjoin($assetsPath, 'voice-toggle-container.png'));\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n\r\n    .voice-toggle-icon {\r\n      position: absolute;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n      width: 14px;\r\n      height: 14px;\r\n      background-size: contain;\r\n      background-repeat: no-repeat;\r\n      background-position: center;\r\n    }\r\n\r\n    .voice-toggle-thumb {\r\n      position: absolute;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n      width: 18px;\r\n      height: 18px;\r\n      background-size: contain;\r\n      background-repeat: no-repeat;\r\n      background-position: center;\r\n      transition: left 200ms ease;\r\n    }\r\n\r\n    &.disconnected {\r\n      .voice-toggle-icon {\r\n        display: none;\r\n      }\r\n      .voice-toggle-thumb {\r\n        left: 2px;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-disconnected.png'));\r\n      }\r\n    }\r\n\r\n    &.connected {\r\n      .voice-toggle-icon {\r\n        display: block;\r\n        left: 3px;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-checkmark.png'));\r\n      }\r\n      .voice-toggle-thumb {\r\n        left: 24px;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-connected-ellipse.png'));\r\n      }\r\n    }\r\n\r\n    &.connecting {\r\n      .voice-toggle-icon {\r\n        display: block;\r\n        left: 3px;\r\n        width: 14px;\r\n        height: 14px;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-spinner.png'));\r\n        animation: voice-toggle-spin 1s linear infinite;\r\n      }\r\n      .voice-toggle-thumb {\r\n        left: 24px;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-connected-ellipse.png'));\r\n      }\r\n    }\r\n\r\n    &.restricted {\r\n      cursor: not-allowed;\r\n      .voice-toggle-icon {\r\n        display: block;\r\n        right: 3px;\r\n        left: auto;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-disabled.png'));\r\n      }\r\n      .voice-toggle-thumb {\r\n        left: 2px;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-restricted-ellipse.png'));\r\n      }\r\n    }\r\n\r\n    &.mute-restricted {\r\n      cursor: pointer;\r\n      .voice-toggle-icon {\r\n        display: block;\r\n        left: 5px;\r\n        right: auto;\r\n        background-image: url(pathjoin($imagesPath, 'warning_icon.svg'));\r\n      }\r\n      .voice-toggle-thumb {\r\n        left: 24px;\r\n        background-image: url(pathjoin($imagesPath, 'restricted_handle.svg'));\r\n      }\r\n    }\r\n\r\n    &.disabled {\r\n      opacity: 0.5;\r\n      cursor: not-allowed;\r\n      pointer-events: none;\r\n    }\r\n\r\n    &.disabled-disconnected {\r\n      cursor: not-allowed;\r\n      pointer-events: none;\r\n      .voice-toggle-icon {\r\n        display: block;\r\n        right: 3px;\r\n        left: auto;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-disconnected-x.png'));\r\n      }\r\n      .voice-toggle-thumb {\r\n        left: 2px;\r\n        background-image: url(pathjoin($assetsPath, 'voice-toggle-disconnected.png'));\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes voice-toggle-spin {\r\n  0% {\r\n    transform: translateY(-50%) rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: translateY(-50%) rotate(360deg);\r\n  }\r\n}\r\n", "\r\n@import 'fonts';\r\n@import 'color-palette';\r\n\r\n/*\r\n * User Interaction Macros\r\n */\r\n$user_selectable {\r\n  -webkit-user-select: all;\r\n}\r\n$user_unselectable {\r\n  -webkit-user-select: none;\r\n}\r\n$user_draggable {\r\n  -webkit-user-drag: element;\r\n}\r\n$user_undraggable {\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/*\r\n * Base Text Treatment\r\n */\r\n$typekit_base {\r\n  @extend $user_unselectable;\r\n  font-kerning: normal;\r\n  -webkit-font-feature-settings: \"kern\" 1;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*\r\n * Uppercase Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-uppercase {\r\n  text-transform: uppercase;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n/*\r\n * Capitalized Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-capitalize {\r\n  text-transform: capitalize;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n$text-transform-none {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n * Headings\r\n * by default, headings are always uppercase.\r\n * if text case must be preserved, use this the _preserve_case macros instead.\r\n */\r\n$typekit_h1 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  line-height: 42px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_preserve_case {\r\n  @extend $typekit_h1;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_subhead {\r\n  @extend $typekit_h1;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h2 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_preserve_case {\r\n  @extend $typekit_h2;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_subhead {\r\n  @extend $typekit_h2;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h3 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 28px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_preserve_case {\r\n  @extend $typekit_h3;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_subhead {\r\n  @extend $typekit_h3;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  line-height: 22px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_preserve_case {\r\n  @extend $typekit_h4;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_subhead {\r\n  @extend $typekit_h4;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4_italic {\r\n  @extend $typekit_h4_preserve_case;\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n$typekit_h5 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  line-height: 18px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_preserve_case {\r\n  @extend $typekit_h5;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_subhead {\r\n  @extend $typekit_h5;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h6 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_preserve_case {\r\n  @extend $typekit_h6;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_subhead {\r\n  @extend $typekit_h6;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h7 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  @extend $text-transform-uppercase;\r\n  font-weight: 500;\r\n  color: $color_palette_grey0;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  letter-spacing: 0.02625em;\r\n\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Body Text\r\n */\r\n$typekit_text_l {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_grey1;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 24px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_m {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 20px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_s {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_small {\r\n  @extend $typekit_text_s;\r\n  font-weight: 400;\r\n  letter-spacing: .05em;\r\n}\r\n\r\n$typekit_text_small_bold {\r\n  @extend $typekit_text_small;\r\n  font-weight: 550;\r\n}\r\n\r\n/*\r\n * Navigation\r\n */\r\nnav-active($width, $height) {\r\n  &.active {\r\n    position: relative;\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_nav {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n}\r\n\r\n$typekit_nav_secondary {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  &:lang(zh-tw) {\r\n    font-size: 14px;\r\n  }\r\n  font-weight: 500;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Labels\r\n */\r\n$typekit_label {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_label_bold {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 900;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Button Text\r\n */\r\n$typekit_button {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_gold3;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .0325em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n\r\n  &:hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n\r\n  &:disabled, &:disabled:hover, &[disabled='true'], &[disabled='true']:hover {\r\n    color: $color_palette_grey_disabled;\r\n    cursor: default;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_gold5;\r\n  }\r\n\r\n}\r\n\r\n$typekit_button_blue {\r\n  @extend $typekit_button;\r\n  color: $colors_ziggurat;\r\n\r\n  &:hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_blue4;\r\n  }\r\n}\r\n\r\n$typekit_button_red {\r\n  @extend $typekit_button;\r\n  color: $color_palette_mage;\r\n\r\n  &:hover {\r\n    color: $color_palette_mage2;\r\n  }\r\n\r\n  &:active {\r\n    color: $colors_crownOfThorns;\r\n  }\r\n}\r\n\r\n/*\r\n * Links\r\n */\r\n$typekit_link_base {\r\n  @extend $typekit_base;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  outline: 0;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_link_base_color {\r\n  color: $color_palette_gold2;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_link_external_base {\r\n  @extend $typekit_link_base;\r\n  color: $color_palette_blue3;\r\n  text-decoration: none;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:after {\r\n    width: 9px;\r\n    height: 9px;\r\n    content: '';\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-mask: url('../images/external-link-mask.png') no-repeat;\r\n    -webkit-mask-size: contain;\r\n    background-color: $color_palette_blue3;\r\n    margin: 0 0 0 5px;\r\n  }\r\n  &:lang(ar-ae):after {\r\n    margin: 0 5px 0 0;\r\n    transform: scaleX(-1);\r\n  }\r\n\r\n  &:hover:after {\r\n     background-color: $color_palette_blue1;\r\n  }\r\n}\r\n\r\n/* Internal links in Lol Body font */\r\n$typekit_link {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* Internal links in the Lol Display font */\r\n$typekit_link_display {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/* External links in Lol Body font */\r\n$typekit_link_external {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* External links in Lol Display font */\r\n$typekit_link_external_display {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n$typekit_footer {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Numbers\r\n */\r\n$typekit_num {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  background: linear-gradient(to bottom, $color_palette_gold2 0%, $color_palette_gold3 35%, #765c29 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n$typekit_num_l {\r\n  @extend $typekit_num;\r\n  font-size: 60px;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_m {\r\n  @extend $typekit_num;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_s {\r\n  @extend $typekit_num;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_num_stats {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Text Modifiers\r\n * _modifier_ typekit rules semantically defines text alteration rules to convey specific meaning.\r\n * They modify simply typography rules (color, weight, style, etc)\r\n * They are indended to be used in combination with other typekit macros.\r\n */\r\n$typekit_modifier_highlight {\r\n  color: $color_palette_gold1;\r\n}\r\n$typekit_modifier_subhead {\r\n  color: $color_palette_grey1;\r\n}\r\n/*\r\n * TODO: Add other modifiers for specific types of highlights like\r\n *  - coloring for game values (ability power, attack power, armor penetration, etc)\r\n */\r\n", "$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}"],
                sourceRoot: ""
            }]), e.exports = Y
        }, e => {
            "use strict";
            e.exports = function(e) {
                var t = e[1],
                    n = e[3];
                if (!n) return t;
                if ("function" == typeof btoa) {
                    var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                        i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
                        a = "/*# ".concat(i, " */");
                    return [t].concat([a]).join("\n")
                }
                return [t].join("\n")
            }
        }, e => {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = "",
                            r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                    })).join("")
                }, t.i = function(e, n, r, i, a) {
                    "string" == typeof e && (e = [
                        [null, e, void 0]
                    ]);
                    var o = {};
                    if (r)
                        for (var l = 0; l < this.length; l++) {
                            var s = this[l][0];
                            null != s && (o[s] = !0)
                        }
                    for (var c = 0; c < e.length; c++) {
                        var p = [].concat(e[c]);
                        r && o[p[0]] || (void 0 !== a && (void 0 === p[5] || (p[1] = "@layer".concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {").concat(p[1], "}")), p[5] = a), n && (p[2] ? (p[1] = "@media ".concat(p[2], " {").concat(p[1], "}"), p[2] = n) : p[2] = n), i && (p[4] ? (p[1] = "@supports (".concat(p[4], ") {").concat(p[1], "}"), p[4] = i) : p[4] = "".concat(i)), t.push(p))
                    }
                }, t
            }
        }, e => {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
            }
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "minimize-voice-panel.svg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "team-party-pill.svg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "two-people.svg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "poro_shocked.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-poro.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "disconnect-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "disconnect-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "disconnect-click.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "reconnect-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "reconnect-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "reconnect-click.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mic-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mic-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mic-click.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mic-muted-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mic-muted-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mic-muted-click.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mic-disabled.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "deafen-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "deafen-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "deafen-click.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "deafened-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "deafened-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "deafened-click.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "settings-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "settings-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "settings-click.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "settings-disabled.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-skin-mask.svg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-toggle-container.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-toggle-disconnected.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-toggle-checkmark.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-toggle-connected-ellipse.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-toggle-spinner.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-toggle-disabled.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-toggle-restricted-ellipse.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "warning_icon.svg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "restricted_handle.svg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "voice-toggle-disconnected-x.png"
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = B(n(1)),
                i = B(n(16)),
                a = C(n(86)),
                o = C(n(87)),
                l = C(n(88)),
                s = C(n(89)),
                c = C(n(90)),
                p = C(n(91)),
                d = C(n(92)),
                h = C(n(93)),
                m = C(n(94)),
                u = C(n(95)),
                g = C(n(23)),
                A = C(n(25)),
                _ = C(n(27)),
                v = C(n(29)),
                b = C(n(31)),
                y = C(n(96)),
                f = n(97),
                E = n(98),
                x = n(36);

            function C(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function k(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (k = function(e) {
                    return e ? n : t
                })(e)
            }

            function B(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = k(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, n && n.set(e, r), r
            }
            const w = {
                party_ptt: {
                    attribute: "party-ptt",
                    label: "parties_comm_panel_team_voice_eat_hotkey_party_ptt"
                },
                team_ptt: {
                    attribute: "team-ptt",
                    label: "parties_comm_panel_team_voice_eat_hotkey_team_ptt"
                },
                character_menu: {
                    attribute: "character-menu",
                    label: "parties_comm_panel_team_voice_eat_hotkey_character_menu"
                },
                role_quest: {
                    attribute: "role-quest",
                    label: "parties_comm_panel_team_voice_eat_hotkey_role_quest"
                }
            };
            class $ extends i.default {
                templateMarkup() {
                    return n(99)
                }
                stylesheetMarkup() {
                    return n(100)
                }
                constructor() {
                    super(), this._listeners = {
                        showPanel: this._showPanel.bind(this),
                        willHide: this._willHide.bind(this),
                        minimizePanel: this._hidePanel.bind(this),
                        keyDown: this._handleKeyDown.bind(this),
                        keyUp: this._handleKeyUp.bind(this)
                    }, this._voiceDisabled = null, this._buttonDisabled = !1, this._disabledAfterLogin = !1, this._isInCustomGame = !1, this._tooltip = null, this._firstExperienceContextualNotification = null, this._teamVoiceEATNotification = null, this._teamVoiceEATSeen = null, this._teamVoiceEATShown = !1, this._premadeVoiceAvailability = null, this._teamVoiceAvailability = null, this._isInGame = !1, this._parentNode = null, this._pttKey = null, this._pttTeamKey = null, this._pttActive = !1, this._connectionState = null, this._teamConnectionState = null, this._teamVoicePluginEnabled = !1, this._teamVoiceRestricted = !1, this._previousParticipantCount = 0, this._previousTeamSessionActive = !1, this._lockOutMemberJoinSound = !1, this._memberJoinTimeout = null;
                    const e = r.Audio.getChannel(i.SOUND_CHANNEL);
                    this._teamPttClickSound = e.createSound(a.default), this._teamPttReleaseSound = e.createSound(o.default), this._partyPttClickSound = e.createSound(l.default), this._partyPttReleaseSound = e.createSound(s.default), this._joinSound = e.createSound(c.default), this._leaveSound = e.createSound(p.default), this._partyChannelConnectSound = e.createSound(d.default), this._partyChannelDisconnectSound = e.createSound(h.default), this._teamChannelConnectSound = e.createSound(m.default), this._teamChannelDisconnectSound = e.createSound(u.default), this._elements = {
                        voiceButton: ".lol-premade-voice-button"
                    }, this._initDataBinding()
                }
                connectedCallback() {
                    super.connectedCallback(), this._handleVoiceDisabled(), this.attachListener("click", this._listeners.showPanel, this._elements.voiceButton), this.attachListener("willHide", this._listeners.willHide), this._voicePanelElement && this._voicePanelElement.addEventListener("minimizeVoicePanel", this._listeners.minimizePanel), this._assignFlyout(), this._checkIfFirstExperience(), this._checkIfTooltipNeeded(), document.addEventListener("keydown", this._listeners.keyDown), document.addEventListener("keyup", this._listeners.keyUp)
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this._voiceDisabled && this._parentNode && this._parentNode.style && (this._parentNode.style.display = "inherit"), this.detachListener("click", this._listeners.showPanel, this._elements.voiceButton), this.detachListener("willHide", this._listeners.willHide), document.removeEventListener("keydown", this._listeners.keyDown), document.removeEventListener("keyup", this._listeners.keyUp), this._voicePanelElement && this._voicePanelElement.removeEventListener("minimizeVoicePanel", this._listeners.minimizePanel), this._removeFirstExperienceContextualNotification()
                }
                static get observedAttributes() {
                    return ["social"]
                }
                attributeChangedCallback(e, t, n) {
                    if (super.attributeChangedCallback(), "social" === e) this._isSocial = n
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "voice-button"
                }
                setVoicePanel(e) {
                    this._voicePanelElement && this._voicePanelElement.removeEventListener("minimizeVoicePanel", this._listeners.minimizePanel), this._voicePanelElement = e, this._voicePanelElement && this._voicePanelElement.addEventListener("minimizeVoicePanel", this._listeners.minimizePanel)
                }
                _offset() {
                    if ("left" === this.getAttribute("position")) return {
                        x: -79,
                        y: 0
                    };
                    {
                        const e = this.parentNode && this.parentNode.parentNode;
                        return {
                            x: -((e ? this.getBoundingClientRect().left - e.getBoundingClientRect().left : this.offsetLeft) + 3),
                            y: -4
                        }
                    }
                }
                _assignFlyout() {
                    r.FlyoutManager.assignFlyout(this, "lol-parties-comm-panel", null, {
                        showEvent: "showVoicePanel",
                        hideEvent: "hideVoicePanel",
                        targetAnchor: {
                            x: "left",
                            y: "bottom"
                        },
                        tooltipAnchor: {
                            x: "right",
                            y: "bottom"
                        },
                        animated: "false",
                        offset: this._offset(),
                        orientation: "right",
                        backdropCutout: !1,
                        caretOffset: -600,
                        ComponentFactory: r.default.ComponentFactory,
                        borderless: "true"
                    })
                }
                availabilityUpdated(e) {
                    r.logger.trace("Voice availability: " + JSON.stringify(e)), this._premadeVoiceAvailability = e, this._updateCombinedAvailability()
                }
                teamVoiceAvailabilityUpdated(e) {
                    const t = e && e.available,
                        n = e && e.reason || null,
                        r = "PLUGIN_DISABLED" === n || "NOT_IN_ACTIVE_GAME_PHASE" === n;
                    this._teamVoiceAvailability = t || !r, this._updateCombinedAvailability()
                }
                _updateCombinedAvailability(e) {
                    const t = this._premadeVoiceAvailability;
                    e || (this._voiceDisabled = !1, this._handleVoiceDisabled(), this._disabledAfterLogin = t && t.disabledAfterLogin);
                    const n = this._isInGame && !this._teamVoicePluginEnabled;
                    e || !n || this._buttonDisabled ? !n && this._buttonDisabled && (this._buttonDisabled = !1, this.removeClass("button-disabled", this._elements.voiceButton), this._voicePanelElement && this._voicePanelElement.dispatchEvent(new Event("voiceButtonEnabled")), this._detachDisabledTooltip()) : (this._buttonDisabled = !0, this.addClass("button-disabled", this._elements.voiceButton), this._checkIfTooltipNeeded(), this._hidePanel())
                }
                lobbyUpdated(e) {
                    const t = e && e.gameConfig,
                        n = t && e.members && e.members.length > 1;
                    this._isInLobby = !!t, this._isInCustomGame = t && e.gameConfig.isCustom, this._isInPremade = n && !e.gameConfig.isCustom, this._checkIfFirstExperience(), this._checkIfTooltipNeeded(), this._checkIfTeamVoiceEATNeeded()
                }
                _initDataBinding() {
                    this.lobbyDataListener = this.lobbyUpdated.bind(this), b.default.observe("lobby", this.lobbyDataListener), b.default.lobby().then(this.lobbyDataListener), this.availabilityDataListener = this.availabilityUpdated.bind(this), g.default.observe("availability", this.availabilityDataListener), g.default.availability().then(this.availabilityDataListener), this.teamVoiceAvailabilityListener = this.teamVoiceAvailabilityUpdated.bind(this), A.default.observe("availability", this.teamVoiceAvailabilityListener), A.default.availability().then(this.teamVoiceAvailabilityListener), this._voiceFirstExperienceListener = this._voiceFirstExperienceUpdated.bind(this), g.default.observe("firstExperience", this._voiceFirstExperienceListener), g.default.firstExperience().then(this._voiceFirstExperienceListener), this.gameflowSessionListener = this.gameflowSessionUpdated.bind(this), v.default.observe("session", this.gameflowSessionListener), v.default.session().then(this.gameflowSessionListener), this.settingsDataListener = this.settingsUpdated.bind(this), g.default.observe("settings", this.settingsDataListener), g.default.settings().then(this.settingsDataListener), this.participantsDataListener = this.participantsUpdated.bind(this), g.default.observe("participants", this.participantsDataListener), g.default.participants().then(this.participantsDataListener), this.teamVoiceSessionListener = this.teamVoiceSessionUpdated.bind(this), A.default.observe("session", this.teamVoiceSessionListener), A.default.session().then(this.teamVoiceSessionListener), this.teamVoicePluginEnabledListener = this.teamVoiceEnabledUpdated.bind(this), _.default.observe("teamVoicePluginEnabled", this.teamVoicePluginEnabledListener), _.default.teamVoicePluginEnabled().then(this.teamVoicePluginEnabledListener)
                }
                gameflowSessionUpdated(e) {
                    if (!e || !e.phase) return;
                    "ReadyCheck" === e.phase && this._hidePanel();
                    const t = "InProgress" === e.phase;
                    t !== this._isInGame && (this._isInGame = t, this._updateCombinedAvailability())
                }
                _showPanel(e = !0) {
                    this._buttonDisabled || (this.addClass("active", this._elements.voiceButton), this._assignFlyout(), r.FlyoutManager.sendEvent(this, "showVoicePanel"), this._voicePanelElement && (this._voicePanelElement.dispatchEvent(new Event("willShowVoicePanel")), e && this._playSound("/fe/lol-premade-voice/sfx-soc-ui-chatwindow-open.ogg")))
                }
                _hidePanel() {
                    r.FlyoutManager.sendEvent(this, "hideVoicePanel")
                }
                _willHide() {
                    this._showedFirstExperience && r.TooltipManager.unassign(this), this.removeClass("active", this._elements.voiceButton), this._voicePanelElement && this._voicePanelElement.dispatchEvent(new Event("willHideVoicePanel"))
                }
                _handleVoiceDisabled() {
                    this.parentNode && (this.parentNode.style && (this._voiceDisabled ? (this.addClass("voice-disabled", this._elements.voiceButton), this.parentNode.style.display = "none") : (this.removeClass("voice-disabled", this._elements.voiceButton), this.parentNode.style.display = "inherit")), this._parentNode = this.parentNode)
                }
                _checkIfTooltipNeeded() {
                    this._buttonDisabled && (this._disabledAfterLogin ? this._tooltipType !== E.VOICE_BUTTON_TOOLTIP_TYPES.DISABLED && this._attachDisabledTooltip(E.VOICE_BUTTON_TOOLTIP_TYPES.DISABLED) : this._isInCustomGame ? this._tooltipType !== E.VOICE_BUTTON_TOOLTIP_TYPES.CUSTOM_GAME && this._attachDisabledTooltip(E.VOICE_BUTTON_TOOLTIP_TYPES.CUSTOM_GAME) : this._tooltipType !== E.VOICE_BUTTON_TOOLTIP_TYPES.NO_PARTY && this._attachDisabledTooltip(E.VOICE_BUTTON_TOOLTIP_TYPES.NO_PARTY))
                }
                _attachDisabledTooltip(e) {
                    this._tooltipType && this._detachDisabledTooltip(), this._tooltipType = e;
                    const t = document.createElement("lol-uikit-tooltip");
                    let n;
                    switch (e) {
                        case E.VOICE_BUTTON_TOOLTIP_TYPES.CUSTOM_GAME:
                            n = r.tra.get("parties_comm_button_error_in_custom_game");
                            break;
                        case E.VOICE_BUTTON_TOOLTIP_TYPES.NO_PARTY:
                            n = r.tra.get("parties_comm_button_error_not_in_party");
                            break;
                        case E.VOICE_BUTTON_TOOLTIP_TYPES.DISABLED:
                            n = r.tra.get("parties_comm_button_error_disabled")
                    }
                    const i = this._tooltipContentBlock(n);
                    t.appendChild(i), r.TooltipManager.assign(this, t, null, {
                        targetAnchor: {
                            x: "center",
                            y: "top"
                        },
                        tooltipAnchor: {
                            x: "center",
                            y: "bottom"
                        }
                    }), this._removeFirstExperienceContextualNotification()
                }
                _detachDisabledTooltip() {
                    this._tooltipType && (r.TooltipManager.unassign(this), this._tooltipType = null)
                }
                _voiceFirstExperienceUpdated(e) {
                    this._showFirstExperience = e ? e.showFirstExperienceInLCU : null, this._checkIfFirstExperience()
                }
                _checkIfFirstExperience() {
                    this._isSocial && this._showFirstExperience && this._isInPremade && !this._showedFirstExperience && this.parentNode && (this._showPanel(!1), this._attachFirstExperienceTooltip(), g.default.firstExperienceCompleted(), this._showedFirstExperience = !0)
                }
                _attachFirstExperienceTooltip() {
                    const e = this._tooltipContentBlock(r.tra.get("parties_comm_panel_tooltip_first_experience"));
                    this._firstExperienceContextualNotification = r.ContextualNotificationManager.add(e, {
                        target: {
                            domNode: this
                        },
                        offset: {
                            x: 12,
                            y: -29
                        },
                        dismissable: !0
                    }), this._firstExperienceContextualNotification.onRemove.then((() => {
                        this._firstExperienceContextualNotification = null
                    }))
                }
                _tooltipContentBlock(e) {
                    const t = document.createElement("lol-uikit-content-block");
                    t.setAttribute("type", "tooltip-small"), t.classList.add("lol-premade-voice-button-tooltip");
                    const n = document.createElement("p");
                    return n.innerHTML = e, t.appendChild(n), t
                }
                _removeFirstExperienceContextualNotification() {
                    this._firstExperienceContextualNotification && r.ContextualNotificationManager.remove(this._firstExperienceContextualNotification)
                }
                settingsUpdated(e) {
                    e && (this._pttKey = e.pttKey ? e.pttKey.replace(/^\[|\]$/g, "") : e.pttKey, this._pttTeamKey = e.pushToTalkTeamKey ? e.pushToTalkTeamKey.replace(/^\[|\]$/g, "") : e.pushToTalkTeamKey, this._pttActive = e.pttActive)
                }
                teamVoiceEnabledUpdated(e) {
                    this._teamVoicePluginEnabled = e, this._updateCombinedAvailability(), this._checkIfTeamVoiceEATNeeded()
                }
                _canShowTeamVoiceEAT() {
                    return !this._teamVoiceEATShown && this._teamVoicePluginEnabled && this._isInLobby && this.parentNode
                }
                _checkIfTeamVoiceEATNeeded() {
                    this._canShowTeamVoiceEAT() && null === this._teamVoiceEATSeen && (this._teamVoiceEATSeen = !1, y.default.evaluate().then((async ({
                        migrated: e,
                        rows: t
                    }) => {
                        if (!e) return void(this._teamVoiceEATSeen = !0);
                        const n = t.filter((e => w[e.id])),
                            r = await y.default.isOutcomeCurrent(n);
                        this._teamVoiceEATSeen = !0, r && this._canShowTeamVoiceEAT() && this._showTeamVoiceEAT(t)
                    })).catch((e => {
                        this._teamVoiceEATSeen = null, r.logger.error(`voice-button -- error reading team voice keybind migration: ${e}`)
                    })))
                }
                _teamVoiceEATKeyDisplay(e) {
                    const t = (0, f.keybindTokens)(e);
                    return 0 === t.length ? null : t.join(r.tra.get("parties_comm_panel_team_voice_eat_hotkey_separator"))
                }
                _teamVoiceEATHotkeyValue({
                    moved: e,
                    from: t,
                    to: n
                }) {
                    const i = this._teamVoiceEATKeyDisplay(n);
                    if (!i) return r.localeDirectionOverrides.wrapWithDirectionOverride(r.tra.get("parties_comm_panel_team_voice_eat_hotkey_unbound"));
                    const a = e ? this._teamVoiceEATKeyDisplay(t) : null;
                    let o = i;
                    return e && (o = a ? r.tra.formatString("parties_comm_panel_team_voice_eat_hotkey_change", {
                        from: a,
                        to: i
                    }) : r.tra.formatString("parties_comm_panel_team_voice_eat_hotkey_new", {
                        to: i
                    })), r.localeDirectionOverrides.wrapWithLTRDirectionOverride(o)
                }
                _setTeamVoiceEATHotkeys(e, t) {
                    (t || []).forEach((t => {
                        const n = w[t.id];
                        n && (e.setAttribute(`${n.attribute}-label`, r.localeDirectionOverrides.wrapWithDirectionOverride(r.tra.get(n.label))), e.setAttribute(`${n.attribute}-value`, this._teamVoiceEATHotkeyValue(t)))
                    }))
                }
                _showTeamVoiceEAT(e) {
                    this._teamVoiceEATShown = !0;
                    const t = document.createElement("lol-parties-team-voice-eat");
                    t.setAttribute("header", r.localeDirectionOverrides.wrapWithDirectionOverride(r.tra.get("parties_comm_panel_team_voice_eat_title"))), t.setAttribute("body", r.localeDirectionOverrides.wrapWithDirectionOverride(r.tra.get("parties_comm_panel_team_voice_eat_body"))), t.setAttribute("hotkeys-title", r.localeDirectionOverrides.wrapWithDirectionOverride(r.tra.get("parties_comm_panel_team_voice_eat_hotkeys_title"))), this._setTeamVoiceEATHotkeys(t, e), t.setAttribute("footer", r.localeDirectionOverrides.wrapWithDirectionOverride(r.tra.get("parties_comm_panel_team_voice_eat_footer"))), t.addEventListener("dismiss", (() => this._dismissTeamVoiceEAT())), t.style.position = "fixed", t.style.zIndex = "1000", t.style.visibility = "hidden", document.body.appendChild(t), this._teamVoiceEATNotification = t;
                    requestAnimationFrame((() => {
                        const e = this.getBoundingClientRect(),
                            n = t.getBoundingClientRect(),
                            r = e.left + e.width / 2,
                            i = Math.round(r - (n.width - 24)),
                            a = Math.round(e.top - n.height - 11);
                        t.style.left = `${i}px`, t.style.top = `${a}px`, t.style.visibility = "visible"
                    })), this._teamVoiceEATSeen = !0
                }
                _dismissTeamVoiceEAT() {
                    this._teamVoiceEATNotification && (this._teamVoiceEATNotification.parentNode && this._teamVoiceEATNotification.parentNode.removeChild(this._teamVoiceEATNotification), this._teamVoiceEATNotification = null)
                }
                participantsUpdated(e) {
                    const t = e && e.length > 0 ? x.VOICE_CONNECTED_STATE : x.VOICE_DISCONNECTED_STATE,
                        n = e ? e.length : 0;
                    this._connectionState === x.VOICE_DISCONNECTED_STATE && t === x.VOICE_CONNECTED_STATE ? (this._partyChannelConnectSound.play(), this._lockOutMemberJoinSound = !0, clearTimeout(this._memberJoinTimeout), this._memberJoinTimeout = setTimeout((() => {
                        this._lockOutMemberJoinSound = !1
                    }), 500)) : this._connectionState === x.VOICE_CONNECTED_STATE && t === x.VOICE_DISCONNECTED_STATE ? this._partyChannelDisconnectSound.play() : this._connectionState === x.VOICE_CONNECTED_STATE && n < this._previousParticipantCount ? this._playLeaveSound() : this._connectionState === x.VOICE_CONNECTED_STATE && n > this._previousParticipantCount && !this._lockOutMemberJoinSound && this._playDelayedJoinSound();
                    const r = this._connectionState !== t;
                    this._connectionState = t, this._previousParticipantCount = n, r && this._updateCombinedAvailability(!0)
                }
                teamVoiceSessionUpdated(e) {
                    const t = e && e.participants && e.participants.length > 0,
                        n = t ? x.VOICE_CONNECTED_STATE : x.VOICE_DISCONNECTED_STATE;
                    this._teamVoiceRestricted = !(!e || !e.isRestricted), this._teamVoicePluginEnabled && (!this._previousTeamSessionActive && t ? this._playTeamChannelConnectSound() : this._previousTeamSessionActive && !t && this._playTeamChannelDisconnectSound());
                    const r = this._teamConnectionState !== n;
                    this._teamConnectionState = n, this._previousTeamSessionActive = t, r && this._updateCombinedAvailability(!0)
                }
                _handleKeyDown(e) {
                    this._teamVoicePluginEnabled && (!this._pttTeamKey || this._teamConnectionState !== x.VOICE_CONNECTED_STATE || this._teamVoiceRestricted || e.key !== this._pttTeamKey || e.repeat || (this._teamPttReleaseSound.stop(), this._teamPttClickSound.play()), this._pttKey && this._connectionState === x.VOICE_CONNECTED_STATE && this._pttActive && e.key === this._pttKey && !e.repeat && (this._partyPttReleaseSound.stop(), this._partyPttClickSound.play()))
                }
                _handleKeyUp(e) {
                    this._teamVoicePluginEnabled && (this._pttTeamKey && this._teamConnectionState === x.VOICE_CONNECTED_STATE && !this._teamVoiceRestricted && e.key === this._pttTeamKey && (this._teamPttClickSound.stop(), this._teamPttReleaseSound.play()), this._pttKey && this._connectionState === x.VOICE_CONNECTED_STATE && this._pttActive && e.key === this._pttKey && (this._partyPttClickSound.stop(), this._partyPttReleaseSound.play()))
                }
                _playJoinSound() {
                    this._joinSound.play()
                }
                _playLeaveSound() {
                    this._leaveSound.play()
                }
                _playDelayedJoinSound() {
                    clearTimeout(this._memberJoinTimeout), this._memberJoinTimeout = setTimeout((() => {
                        this._playJoinSound(), this._lockOutMemberJoinSound = !1
                    }), 1500)
                }
                _playTeamChannelConnectSound() {
                    this._teamChannelConnectSound.play()
                }
                _playTeamChannelDisconnectSound() {
                    this._teamChannelDisconnectSound.play()
                }
            }
            $.tagName = "lol-parties-comm-button";
            var S = $;
            t.default = S
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-team-ptt-click.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-team-ptt-release.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-party-ptt-click.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-party-ptt-release.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-voicechat-notif-join.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-voicechat-notif-leave.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-party-channel-connect.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-party-channel-disconnect.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-team-channel-connect.ogg"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "sfx-vc-team-channel-disconnect.ogg"
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.planHasUpdates = t.keybindRowsMatch = t.default = t.buildMigrationPlan = t.buildKeybindRows = t.buildCurrentKeybindRows = t.TeamVoiceKeybindingService = t.MIGRATION_VERSION_KEY = void 0;
            var r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(1)),
                i = l(n(29)),
                a = l(n(28)),
                o = n(97);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }
            const c = "/v1/input-settings",
                p = "/v1/ready",
                d = ["GameEvents", "HUDEvents", "ShopEvents"],
                h = "teamVoiceKeybindingMigrationVersion";
            t.MIGRATION_VERSION_KEY = h;
            const m = (e, t) => t.legacy === o.UNBOUND ? (0, o.isUnbound)(e) : (0, o.normalizeKeybinding)((0, o.primaryKeybinding)(e)) === t.legacy,
                u = (e, t) => {
                    const n = (0, o.splitKeybindings)(e);
                    return n[0] = t, n.join(",")
                },
                g = (e, t) => {
                    const n = (0, o.normalizeKeybinding)(t);
                    return (0, o.isUnbound)(t) ? [] : d.flatMap((t => Object.entries(e && e[t] || {}).flatMap((([e, r]) => (0, o.splitKeybindings)(r).filter((e => (0, o.normalizeKeybinding)(e) === n)).map((() => `${t}.${e}`))))))
                },
                A = (e, t) => e && e[t.section] && e[t.section][t.key] || "",
                _ = (e, t) => e && e[t.field] || "",
                v = (e, t) => e && e.GameEvents && e.GameEvents[t.gameKey] || "",
                b = e => (0, o.splitKeybindings)(e).some((e => !(0, o.isUnbound)(e))),
                y = (e, t, n, r) => {
                    const i = t[n - 1].next,
                        a = g(e, i),
                        l = t[n];
                    if (!l) return 0 === a.length;
                    if (!((e, t) => e.every((e => e === t)))(a, l.path)) return !1;
                    const s = A(e, l);
                    if (!m(s, l)) return 0 === a.length;
                    const c = u(s, l.next);
                    return !(g({
                        [l.section]: {
                            [l.key]: c
                        }
                    }, i).length > 0) && (!(l.next !== o.UNBOUND && !y(e, t, n + 1, r)) && (r.push(l), !0))
                },
                f = (e, t) => {
                    const n = {},
                        r = {},
                        i = {},
                        a = [o.PARTY_PTT_CHAIN, o.TEAM_PTT_CHAIN];
                    a.forEach((([n]) => {
                        const a = _(t, n),
                            o = v(e, n);
                        m(a, n) && b(o) ? r[n.field] = o : m(a, n) || b(o) || (i[n.gameKey] = a)
                    }));
                    const l = a.flatMap((n => ((e, t, n) => {
                        const [r] = n, i = [];
                        return !m(_(t, r), r) || b(v(e, r)) ? [] : y(e, n, 1, i) ? i.concat(r) : []
                    })(e, t, n)));
                    return l.concat(l.flatMap((t => ((e, t) => {
                        const n = t.follower;
                        return n && m(A(e, n), n) && 0 === g(e, n.next).length ? [n] : []
                    })(e, t)))).forEach((a => {
                        if (a.field) {
                            const e = u(_(t, a), a.next);
                            return r[a.field] = e, void(i[a.gameKey] = e)
                        }
                        n[a.section] = n[a.section] || {}, n[a.section][a.key] = u(A(e, a), a.next)
                    })), {
                        inputUpdates: n,
                        voiceUpdates: r,
                        gameVoiceUpdates: Object.keys(i).length > 0 ? {
                            GameEvents: i
                        } : {}
                    }
                };
            t.buildMigrationPlan = f;
            const E = ({
                inputUpdates: e,
                voiceUpdates: t,
                gameVoiceUpdates: n = {}
            }) => Object.keys(e).length > 0 || Object.keys(t).length > 0 || Object.keys(n).length > 0;
            t.planHasUpdates = E;
            const x = e => e ? JSON.parse(JSON.stringify(e)) : e,
                C = (e, {
                    inputUpdates: t,
                    voiceUpdates: n
                }) => e.field ? n[e.field] : (t[e.section] || {})[e.key],
                k = (e, t) => Boolean(C(e, t)),
                B = (e, t, n) => o.KEYBIND_DEFINITIONS.map((r => {
                    const i = e => r.field ? ((e, t) => {
                            const n = _(e.voiceSettings, t),
                                r = v(e.inputSettings, t);
                            return m(n, t) && b(r) ? r : n
                        })(e, r) : A(e.inputSettings, r),
                        a = C(r, n),
                        l = k(r, n) && (0, o.normalizeKeybinding)((0, o.primaryKeybinding)(a)) !== (0, o.normalizeKeybinding)((0, o.primaryKeybinding)(i(e)));
                    return {
                        id: r.id,
                        moved: l,
                        from: l ? (0, o.primaryKeybinding)(i(e)) : null,
                        to: (0, o.primaryKeybinding)(k(r, n) ? a : i(t))
                    }
                }));
            t.buildKeybindRows = B;
            const w = e => o.KEYBIND_DEFINITIONS.map((t => ({
                id: t.id,
                to: (0, o.primaryKeybinding)(t.field ? _(e.voiceSettings, t) : A(e.inputSettings, t))
            })));
            t.buildCurrentKeybindRows = w;
            const $ = (e, t) => {
                const n = new Map(t.map((e => [e.id, e.to])));
                return e.every((e => (0, o.normalizeKeybinding)(e.to) === (0, o.normalizeKeybinding)(n.get(e.id))))
            };
            t.keybindRowsMatch = $;
            class S {
                constructor() {
                    this._gameBinding = (0, r.dataBinding)("/lol-game-settings", r.default.getProvider().getSocket()), this._gameReadyPromise = null, this._migrationPromise = null
                }
                _gameReady() {
                    return this._gameReadyPromise || (this._gameReadyPromise = new Promise((e => {
                        const t = n => {
                            n && (this._gameBinding.unobserve(p, t), e())
                        };
                        this._gameBinding.observe(p, t)
                    }))), this._gameReadyPromise
                }
                async _readCurrent() {
                    await this._gameReady();
                    const [e, t] = await Promise.all([a.default.accountVoiceSettings(), this._gameBinding.get(c)]);
                    return {
                        voiceSettings: x(e && e.data),
                        inputSettings: x(t) || {}
                    }
                }
                async isOutcomeCurrent(e) {
                    const t = await this._readCurrent();
                    return $(e, w(t))
                }
                async _gameClientRunning() {
                    try {
                        const e = await i.default.session();
                        return Boolean(e && e.gameClient && e.gameClient.running)
                    } catch (e) {
                        return !1
                    }
                }
                evaluate() {
                    return this._migrationPromise || (this._migrationPromise = this._evaluate()), this._migrationPromise
                }
                async _evaluate() {
                    const e = {
                            migrated: !1,
                            rows: []
                        },
                        t = await a.default.navigationPreferences();
                    if (t && t.data && 1 === t.data[h]) return e;
                    if (await this._gameClientRunning()) return e;
                    const n = await this._readCurrent();
                    if (!n.voiceSettings) return r.logger.warning("team-voice-keybinding-service -- account voice settings unavailable, deferring migration"), e;
                    const i = f(n.inputSettings, n.voiceSettings);
                    if (!E(i)) return e;
                    Object.keys(i.inputUpdates).length > 0 && await this._gameBinding.patch(c, i.inputUpdates), Object.keys(i.voiceUpdates).length > 0 && await a.default.patchAccountVoiceSettings(i.voiceUpdates), Object.keys(i.gameVoiceUpdates).length > 0 && await this._gameBinding.patch(c, i.gameVoiceUpdates), await a.default.patchNavigationPreferences({
                        [h]: 1
                    });
                    const o = await this._readCurrent();
                    return {
                        migrated: !0,
                        rows: B(n, o, i)
                    }
                }
            }
            t.TeamVoiceKeybindingService = S;
            var T = new S;
            t.default = T
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.splitKeybindings = t.primaryKeybinding = t.normalizeKeybinding = t.keybindTokens = t.isUnbound = t.UNBOUND = t.TEAM_PTT_CHAIN = t.TEAM_PTT = t.SMART_CAST_ROLE_QUEST = t.ROLE_QUEST = t.PARTY_PTT_CHAIN = t.PARTY_PTT = t.KEYBIND_DEFINITIONS = t.CHAT_HISTORY = t.CHARACTER_MENU = void 0;
            const n = "[<Unbound>]";
            t.UNBOUND = n;
            const r = {
                id: "party_ptt",
                field: "pushToTalkKey",
                gameKey: "evtPushToTalk",
                legacy: n,
                next: "[c]"
            };
            t.PARTY_PTT = r;
            const i = {
                id: "team_ptt",
                field: "pushToTalkTeamKey",
                gameKey: "evtPushToTalkTeam",
                legacy: n,
                next: "[v]"
            };
            t.TEAM_PTT = i;
            const a = {
                id: "character_menu",
                path: "GameEvents.evtShowCharacterMenu",
                section: "GameEvents",
                key: "evtShowCharacterMenu",
                legacy: "[c]",
                next: "[j]"
            };
            t.CHARACTER_MENU = a;
            const o = {
                id: "smart_cast_role_quest",
                path: "GameEvents.evtSmartCastRoleBound",
                section: "GameEvents",
                key: "evtSmartCastRoleBound",
                legacy: "[shift][v]",
                next: "[Shift][z]"
            };
            t.SMART_CAST_ROLE_QUEST = o;
            const l = {
                id: "role_quest",
                path: "GameEvents.evtCastRoleBound",
                section: "GameEvents",
                key: "evtCastRoleBound",
                legacy: "[v]",
                next: "[z]",
                follower: o
            };
            t.ROLE_QUEST = l;
            const s = {
                id: "chat_history",
                path: "GameEvents.evtChatHistory",
                section: "GameEvents",
                key: "evtChatHistory",
                legacy: "[z]",
                next: n
            };
            t.CHAT_HISTORY = s;
            const c = e => {
                const t = (e || "").replace(/\s/g, "").toLowerCase();
                return t && t.startsWith("[") ? t : t ? `[${t}]` : ""
            };
            t.normalizeKeybinding = c;
            const p = e => ("string" == typeof e ? e : "").split(",").filter(Boolean);
            t.splitKeybindings = p;
            const d = e => p(e)[0] || "";
            t.primaryKeybinding = d;
            const h = e => {
                const t = c(d(e));
                return "" === t || t === c(n)
            };
            t.isUnbound = h;
            t.keybindTokens = e => {
                const t = d(e);
                return h(t) ? [] : (t.match(/\[[^[\]]*\]/g) || []).map((e => e.slice(1, -1))).map((e => /^[a-z]$/.test(e) ? e.toUpperCase() : e))
            };
            const m = [r, a];
            t.PARTY_PTT_CHAIN = m;
            const u = [i, l, s];
            t.TEAM_PTT_CHAIN = u;
            const g = [r, i, a, l, o, s];
            t.KEYBIND_DEFINITIONS = g
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VOICE_BUTTON_TOOLTIP_TYPES = void 0;
            t.VOICE_BUTTON_TOOLTIP_TYPES = {
                NO_PARTY: "noParty",
                CUSTOM_GAME: "customGame",
                DISABLED: "disabled"
            }
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-premade-voice-button"></div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, t, n) => {
            var r = n(43),
                i = n(44)(r);
            i.push([e.id, '.lol-premade-voice-button {\n  display: flex;\n  width: 38px;\n  height: 32px;\n  background-image: url("/fe/lol-premade-voice/voice-button.png");\n  background-position-y: 0px;\n  background-size: cover;\n  cursor: pointer;\n}\n.lol-premade-voice-button:hover:not(.button-disabled) {\n  background-position-y: -32px;\n}\n.lol-premade-voice-button:active:not(.button-disabled) {\n  background-position-y: -64px;\n}\n.lol-premade-voice-button.button-disabled {\n  background-position-y: -160px;\n  cursor: default;\n}\n.lol-premade-voice-button.active {\n  background-position-y: -96px;\n}\n.lol-premade-voice-team-voice-eat-title {\n  font-family: var(--font-display);\n}\n.lol-premade-voice-team-voice-eat-body {\n  font-family: var(--font-body);\n}\n.lol-premade-voice-team-voice-eat-title,\n.lol-premade-voice-team-voice-eat-body {\n  -webkit-user-select: none;\n}\n.lol-premade-voice-team-voice-eat-title,\n.lol-premade-voice-team-voice-eat-body {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.lol-premade-voice-team-voice-eat-title {\n  text-transform: uppercase;\n}\n.lol-premade-voice-team-voice-eat-title:lang(ko-kr),\n.lol-premade-voice-team-voice-eat-title:lang(ja-jp),\n.lol-premade-voice-team-voice-eat-title:lang(tr-tr),\n.lol-premade-voice-team-voice-eat-title:lang(el-gr),\n.lol-premade-voice-team-voice-eat-title:lang(th-th),\n.lol-premade-voice-team-voice-eat-title:lang(zh-tw) {\n  text-transform: none;\n}\n.lol-premade-voice-team-voice-eat-title {\n  color: #f0e6d2;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: 0.05em;\n}\n.lol-premade-voice-team-voice-eat-title:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-team-voice-eat-body {\n  color: #a09b8c;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 20px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.lol-premade-voice-team-voice-eat-body:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-button.voice-disabled {\n  display: none;\n}\nlol-uikit-content-block.lol-premade-voice-button-tooltip[type=tooltip-small] {\n  padding: 9px;\n}\n.lol-premade-voice-team-voice-eat {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px 8px 16px 12px;\n  width: 280px;\n}\n.lol-premade-voice-team-voice-eat-icon {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  background-image: url("/fe/lol-premade-voice/team-voice-eat-icon.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n.lol-premade-voice-team-voice-eat-text {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  white-space: normal;\n}\n.lol-premade-voice-team-voice-eat-title {\n  font-weight: bold;\n  color: #3d2e1d;\n  text-transform: none;\n}\n.lol-premade-voice-team-voice-eat-body {\n  margin-top: 4px;\n  color: #3d2e1d;\n  text-transform: none;\n}\n', "", {
                version: 3,
                sources: ["webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/voice-button/style.styl", "webpack://./node_modules/riotclient-lol-asset-csslib/styles/fonts.styl", "webpack://./node_modules/riotclient-lol-asset-csslib/styles/typekit.styl"],
                names: [],
                mappings: "AAEA;EACE,aAAS;EACT,WAAO;EACP,YAAQ;EACR,+DAA8D;EAC9D,0BAAuB;EACvB,sBAAiB;EACjB,eAAQ;ACDV;ADGE;EACE,4BAAuB;ACD3B;ADIE;EACE,4BAAuB;ACF3B;ADKE;EACE,6BAAuB;EACvB,eAAQ;ACHZ;ADME;EACE,4BAAuB;ACJ3B;ACrBA;EACE,gCAAa;ADuBf;ACpBA;EACE,6BAAa;ADsBf;AEjBA;;EACE,yBAAqB;AFoBvB;AERA;;EAEE,oBAAc;EACd,uCAA+B;EAC/B,mCAAwB;AFU1B;AEFA;EACE,yBAAgB;AFIlB;AEHE;;;;;;EAME,oBAAgB;AFKpB;AE6GA;EAIE,cAAO;EACP,eAAW;EACX,gBAAa;EACb,iBAAa;EACb,sBAAgB;AF9GlB;AE+GE;EACE,iBAAgB;AF7GpB;AEgOA;EAGE,cAAO;EACP,eAAW;EACX,mBAAa;EACb,iBAAa;EACb,uBAAgB;EAIhB,4CAAwB;AFnO1B;AEgOE;EACE,iBAAgB;AF9NpB;AA3DE;EACE,aAAS;AA6Db;AAzDA;EACE,YAAS;AA2DX;AAxDA;EACE,aAAS;EACT,mBAAgB;EAChB,uBAAa;EACb,SAAK;EACL,2BAAS;EACT,YAAO;AA0DT;AAvDA;EACE,cAAa;EACb,WAAO;EACP,YAAQ;EACR,sEAAqE;EACrE,4BAAmB;EACnB,2BAAqB;EACrB,wBAAiB;AAyDnB;AAtDA;EACE,aAAS;EACT,sBAAgB;EAChB,OAAM;EACN,mBAAa;AAwDf;AArDA;EAEE,iBAAa;EACb,cAAO;EACP,oBAAgB;AAsDlB;AAnDA;EAEE,eAAY;EACZ,cAAO;EACP,oBAAgB;AAoDlB",
                sourcesContent: ["$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}", "\r\n\r\n@require \"../shared.styl\";\r\n@require 'riotclient-lol-asset-csslib/styles/typekit';\r\n\r\n$eat-text-color = #3D2E1D;\r\n\r\n.lol-premade-voice-button {\r\n  @extend $voice-button;\r\n\r\n  &.voice-disabled {\r\n    display: none;\r\n  }\r\n}\r\n\r\nlol-uikit-content-block.lol-premade-voice-button-tooltip[type=tooltip-small] {\r\n  padding: 9px;\r\n}\r\n\r\n.lol-premade-voice-team-voice-eat {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  gap: 12px;\r\n  padding: 16px 8px 16px 12px;\r\n  width: 280px;\r\n}\r\n\r\n.lol-premade-voice-team-voice-eat-icon {\r\n  flex-shrink: 0;\r\n  width: 48px;\r\n  height: 48px;\r\n  background-image: url('/fe/lol-premade-voice/team-voice-eat-icon.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.lol-premade-voice-team-voice-eat-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  white-space: normal;\r\n}\r\n\r\n.lol-premade-voice-team-voice-eat-title {\r\n  @extend $typekit_h4;\r\n  font-weight: bold;\r\n  color: $eat-text-color;\r\n  text-transform: none;\r\n}\r\n\r\n.lol-premade-voice-team-voice-eat-body {\r\n  @extend $typekit_text_m;\r\n  margin-top: 4px;\r\n  color: $eat-text-color;\r\n  text-transform: none;\r\n}", "$fonts_lol_display {\r\n  font-family: var(--font-display);\r\n}\r\n\r\n$fonts_lol_body {\r\n  font-family: var(--font-body);\r\n}\r\n\r\n/**\r\n * Deprecated, keeping just to not break thiings abruptly.\r\n */\r\n\r\n$fonts_beaufort {\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n$fonts_spiegel {\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n$fonts_frizquadrata {\r\n  font-family: var(--font-frizquadrata);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-display);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Title';\r\n  }\r\n}\r\n\r\n$fonts_gill_sans_mt {\r\n  font-family: var(--font-gill-sans-mt);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-body);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Body';\r\n  }\r\n}\r\n\r\n\r\n", "\r\n@import 'fonts';\r\n@import 'color-palette';\r\n\r\n/*\r\n * User Interaction Macros\r\n */\r\n$user_selectable {\r\n  -webkit-user-select: all;\r\n}\r\n$user_unselectable {\r\n  -webkit-user-select: none;\r\n}\r\n$user_draggable {\r\n  -webkit-user-drag: element;\r\n}\r\n$user_undraggable {\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/*\r\n * Base Text Treatment\r\n */\r\n$typekit_base {\r\n  @extend $user_unselectable;\r\n  font-kerning: normal;\r\n  -webkit-font-feature-settings: \"kern\" 1;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*\r\n * Uppercase Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-uppercase {\r\n  text-transform: uppercase;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n/*\r\n * Capitalized Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-capitalize {\r\n  text-transform: capitalize;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n$text-transform-none {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n * Headings\r\n * by default, headings are always uppercase.\r\n * if text case must be preserved, use this the _preserve_case macros instead.\r\n */\r\n$typekit_h1 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  line-height: 42px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_preserve_case {\r\n  @extend $typekit_h1;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_subhead {\r\n  @extend $typekit_h1;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h2 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_preserve_case {\r\n  @extend $typekit_h2;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_subhead {\r\n  @extend $typekit_h2;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h3 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 28px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_preserve_case {\r\n  @extend $typekit_h3;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_subhead {\r\n  @extend $typekit_h3;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  line-height: 22px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_preserve_case {\r\n  @extend $typekit_h4;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_subhead {\r\n  @extend $typekit_h4;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4_italic {\r\n  @extend $typekit_h4_preserve_case;\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n$typekit_h5 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  line-height: 18px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_preserve_case {\r\n  @extend $typekit_h5;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_subhead {\r\n  @extend $typekit_h5;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h6 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_preserve_case {\r\n  @extend $typekit_h6;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_subhead {\r\n  @extend $typekit_h6;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h7 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  @extend $text-transform-uppercase;\r\n  font-weight: 500;\r\n  color: $color_palette_grey0;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  letter-spacing: 0.02625em;\r\n\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Body Text\r\n */\r\n$typekit_text_l {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_grey1;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 24px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_m {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 20px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_s {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_small {\r\n  @extend $typekit_text_s;\r\n  font-weight: 400;\r\n  letter-spacing: .05em;\r\n}\r\n\r\n$typekit_text_small_bold {\r\n  @extend $typekit_text_small;\r\n  font-weight: 550;\r\n}\r\n\r\n/*\r\n * Navigation\r\n */\r\nnav-active($width, $height) {\r\n  &.active {\r\n    position: relative;\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_nav {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n}\r\n\r\n$typekit_nav_secondary {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  &:lang(zh-tw) {\r\n    font-size: 14px;\r\n  }\r\n  font-weight: 500;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Labels\r\n */\r\n$typekit_label {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_label_bold {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 900;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Button Text\r\n */\r\n$typekit_button {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_gold3;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .0325em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n\r\n  &:hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n\r\n  &:disabled, &:disabled:hover, &[disabled='true'], &[disabled='true']:hover {\r\n    color: $color_palette_grey_disabled;\r\n    cursor: default;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_gold5;\r\n  }\r\n\r\n}\r\n\r\n$typekit_button_blue {\r\n  @extend $typekit_button;\r\n  color: $colors_ziggurat;\r\n\r\n  &:hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_blue4;\r\n  }\r\n}\r\n\r\n$typekit_button_red {\r\n  @extend $typekit_button;\r\n  color: $color_palette_mage;\r\n\r\n  &:hover {\r\n    color: $color_palette_mage2;\r\n  }\r\n\r\n  &:active {\r\n    color: $colors_crownOfThorns;\r\n  }\r\n}\r\n\r\n/*\r\n * Links\r\n */\r\n$typekit_link_base {\r\n  @extend $typekit_base;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  outline: 0;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_link_base_color {\r\n  color: $color_palette_gold2;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_link_external_base {\r\n  @extend $typekit_link_base;\r\n  color: $color_palette_blue3;\r\n  text-decoration: none;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:after {\r\n    width: 9px;\r\n    height: 9px;\r\n    content: '';\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-mask: url('../images/external-link-mask.png') no-repeat;\r\n    -webkit-mask-size: contain;\r\n    background-color: $color_palette_blue3;\r\n    margin: 0 0 0 5px;\r\n  }\r\n  &:lang(ar-ae):after {\r\n    margin: 0 5px 0 0;\r\n    transform: scaleX(-1);\r\n  }\r\n\r\n  &:hover:after {\r\n     background-color: $color_palette_blue1;\r\n  }\r\n}\r\n\r\n/* Internal links in Lol Body font */\r\n$typekit_link {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* Internal links in the Lol Display font */\r\n$typekit_link_display {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/* External links in Lol Body font */\r\n$typekit_link_external {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* External links in Lol Display font */\r\n$typekit_link_external_display {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n$typekit_footer {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Numbers\r\n */\r\n$typekit_num {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  background: linear-gradient(to bottom, $color_palette_gold2 0%, $color_palette_gold3 35%, #765c29 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n$typekit_num_l {\r\n  @extend $typekit_num;\r\n  font-size: 60px;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_m {\r\n  @extend $typekit_num;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_s {\r\n  @extend $typekit_num;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_num_stats {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Text Modifiers\r\n * _modifier_ typekit rules semantically defines text alteration rules to convey specific meaning.\r\n * They modify simply typography rules (color, weight, style, etc)\r\n * They are indended to be used in combination with other typekit macros.\r\n */\r\n$typekit_modifier_highlight {\r\n  color: $color_palette_gold1;\r\n}\r\n$typekit_modifier_subhead {\r\n  color: $color_palette_grey1;\r\n}\r\n/*\r\n * TODO: Add other modifiers for specific types of highlights like\r\n *  - coloring for game values (ability power, attack power, armor penetration, etc)\r\n */\r\n"],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, n && n.set(e, r);
                    return r
                }(n(16)),
                i = u(n(23)),
                a = u(n(25)),
                o = u(n(27)),
                l = n(1),
                s = u(n(40)),
                c = u(n(17)),
                p = u(n(18)),
                d = u(n(20)),
                h = u(n(21)),
                m = u(n(22));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }
            class A extends r.default {
                templateMarkup() {
                    return n(102)
                }
                stylesheetMarkup() {
                    return n(103)
                }
                constructor() {
                    super(), this._lastSliderUpdate = 0, this._teamVoicePluginEnabled = !1, this._isDraggingSlider = !1, this._nameOverride = null;
                    const e = l.Audio.getChannel(r.SOUND_CHANNEL);
                    this._muteSound = e.createSound(c.default), this._unmuteSound = e.createSound(p.default), this._volumeScrollSound = e.createSound(d.default), this._volumeBarClickSound = e.createSound(h.default), this._volumeScrollReleaseSound = e.createSound(m.default), this._listeners = {
                        muteListener: this._toggleMute.bind(this),
                        volumeSliderChange: this._volumeSliderChange.bind(this),
                        volumeSliderEnd: this._volumeSliderEnd.bind(this),
                        volumeSliderStart: this._volumeSliderStart.bind(this),
                        volumeSliderClick: this._volumeSliderClick.bind(this)
                    }, this._selectors = {
                        mute: ".lol-premade-voice-panel-participant-mute",
                        participant: ".lol-premade-voice-participant",
                        sliderElement: "lol-uikit-slider",
                        playerName: ".lol-premade-voice-panel-participant-name lol-uikit-player-name",
                        chatIcon: ".lol-premade-voice-panel-chat-icon",
                        haloElement: "lol-parties-comm-halo",
                        volumeText: ".lol-premade-voice-panel-participant-volume"
                    }
                }
                async connectedCallback() {
                    super.connectedCallback(), this._attachSliderTooltipDelegate();
                    const e = await o.default.teamVoicePluginEnabled();
                    this._teamVoicePluginEnabled = e, await this.updateSelf(this._participant), this.attachListener("click", this._listeners.muteListener, this._selectors.mute), this.attachListener("slideEnd", this._listeners.volumeSliderEnd, this._selectors.sliderElement), this.attachListener("slideStart", this._listeners.volumeSliderStart, this._selectors.sliderElement), this.attachListener("change", this._listeners.volumeSliderChange, this._selectors.sliderElement), this.attachListener("click", this._listeners.volumeSliderClick, this._selectors.sliderElement)
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this.detachListener("click", this._listeners.muteListener, this._selectors.mute), this.detachListener("slideEnd", this._listeners.volumeSliderEnd, this._selectors.sliderElement), this.detachListener("slideStart", this._listeners.volumeSliderStart, this._selectors.sliderElement), this.detachListener("change", this._listeners.volumeSliderChange, this._selectors.sliderElement), this.detachListener("click", this._listeners.volumeSliderClick, this._selectors.sliderElement)
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "voice-panel/voice-participant"
                }
                updateSelf(e) {
                    this._participant = e, this._updateVolume(e.volume, !this._volumeUpdating), this._muted(e.isMuted), this._updateVoiceHalo(e.puuid);
                    const t = this.shadowRoot.querySelector(this._selectors.playerName);
                    t && !this._nameOverride && (t.setAttribute("puuid", e.puuid), t.setAttribute("summoner-id", e.summonerId))
                }
                updateChatParticipant(e) {
                    if (!e) return;
                    const t = this.shadowRoot.querySelector(this._selectors.chatIcon);
                    t && (t.setAttribute("availability", e.availability), t.setAttribute("icon-id", e.icon))
                }
                _toggleMute() {
                    this._teamVoicePluginEnabled && "true" === this.getAttribute("data-team-participant") ? a.default.mute(this._participant.puuid, !this._participant.isMuted) : i.default.mute(this._participant.puuid, !this._participant.isMuted), this._teamVoicePluginEnabled && (this._participant.isMuted ? this._unmuteSound.play() : this._muteSound.play())
                }
                _volumeSliderEnd(e) {
                    this._volumeUpdating = !1, this._volumeSliderChange(e, !0), this._teamVoicePluginEnabled && this._isDraggingSlider && this._volumeScrollReleaseSound.play(), setTimeout((() => {
                        this._isDraggingSlider = !1
                    }), 50)
                }
                _volumeSliderStart() {
                    this._volumeUpdating = !0, this._isDraggingSlider = !0, this._teamVoicePluginEnabled && this._volumeScrollSound.play()
                }
                _volumeSliderClick() {
                    this._teamVoicePluginEnabled && !this._isDraggingSlider && this._volumeBarClickSound.play()
                }
                _volumeSliderChange(e, t = !1) {
                    if (this._updateVolume(e.value), !t) {
                        const e = (new Date).getTime();
                        if (e - this._lastSliderUpdate < 200) return;
                        this._lastSliderUpdate = e
                    }
                    this._teamVoicePluginEnabled && "true" === this.getAttribute("data-team-participant") ? a.default.changeVolume(this._participant.puuid, e.value) : i.default.changeVolume(this._participant.puuid, e.value)
                }
                _muted(e) {
                    this._attachMuteTooltip(e), e ? this.addClass("muted", this._selectors.mute) : this.removeClass("muted", this._selectors.mute)
                }
                _updateVolume(e) {
                    const t = this.shadowRoot.querySelector(this._selectors.sliderElement);
                    t && !this._volumeUpdating && t.setAttribute("value", e)
                }
                _updateVoiceHalo(e) {
                    const t = this.shadowRoot.querySelector(this._selectors.haloElement);
                    t && t.setAttribute("puuid", e)
                }
                _attachMuteTooltip(e) {
                    const t = this.shadowRoot.querySelector(this._selectors.mute);
                    let n;
                    n = e ? l.tra.get("parties_comm_panel_tooltip_unmute_participant") : l.tra.get("parties_comm_panel_tooltip_mute_participant"), s.default.attachSmallTooltip(t, n, {
                        x: "right",
                        y: "center"
                    }, {
                        x: "left",
                        y: "center"
                    })
                }
                _attachSliderTooltipDelegate() {
                    const e = this.shadowRoot.querySelector(this._selectors.sliderElement);
                    e && e.setTooltipContentDelegate((function(e) {
                        return l.tra.formatString("parties_comm_panel_tooltip_participant_volume", {
                            value: e
                        })
                    }))
                }
                setNameOverride(e) {
                    this._nameOverride = e;
                    const t = this.shadowRoot.querySelector(this._selectors.playerName);
                    t && (e ? (t.setAttribute("game-name", e), t.setAttribute("tag-line", ""), t.removeAttribute("puuid"), t.removeAttribute("summoner-id")) : (t.removeAttribute("game-name"), t.removeAttribute("tag-line"), this._participant && (t.setAttribute("puuid", this._participant.puuid), t.setAttribute("summoner-id", this._participant.summonerId))))
                }
            }
            A.tagName = "lol-parties-comm-participant";
            var _ = A;
            t.default = _
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-premade-voice-participant">\r\n    <lol-parties-comm-halo size="small">\r\n      <lol-social-avatar-icon\r\n        class="lol-premade-voice-panel-chat-icon"\r\n        icon-id=""\r\n        availability=""\r\n        show-availability="true"\r\n      >\r\n      </lol-social-avatar-icon>\r\n    </lol-parties-comm-halo>\r\n    <div class="lol-premade-voice-panel-participant-content">\r\n      <div class="lol-premade-voice-panel-participant-volume-row">\r\n        <div class="lol-premade-voice-panel-participant-name">\r\n          <lol-uikit-player-name format="tooltip" puuid="" summoner-id="" />\r\n        </div>\r\n      </div>\r\n      <lol-uikit-slider for="participantVolume" percentage value="0" clickset="true" trackTooltipPosition="true"> </lol-uikit-slider>\r\n    </div>\r\n    <div class="lol-premade-voice-panel-participant-mute"></div>\r\n  </div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, t, n) => {
            var r = n(43),
                i = n(44),
                a = n(45),
                o = n(104),
                l = n(105),
                s = n(106),
                c = n(107),
                p = n(108),
                d = n(109),
                h = i(r),
                m = a(o),
                u = a(l),
                g = a(s),
                A = a(c),
                _ = a(p),
                v = a(d);
            h.push([e.id, ".lol-premade-voice-participant .lol-premade-voice-panel-participant-content lol-uikit-slider {\n  width: 155px;\n  height: 15px;\n  --slider-base-before-top: 7px;\n  --slider-btn-cursor: pointer;\n  --slider-btn-width: 15px;\n  --slider-btn-height: 15px;\n  --slider-btn-hover-background-position: 0 -15px;\n  --slider-btn-active-background-position: 0 -30px;\n  --slider-fill-top: 6px;\n}\n.lol-premade-voice-participant {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  position: relative;\n}\n.lol-premade-voice-participant.speaking {\n  background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-chat-icon {\n  align-self: center;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute {\n  background-image: url(" + m + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 18px;\n  height: 18px;\n  margin-top: 14px;\n  cursor: pointer;\n  position: relative;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute:hover {\n  background-image: url(" + u + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute:active {\n  background-image: url(" + g + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute.muted {\n  background-image: url(" + A + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute.muted:hover {\n  background-image: url(" + _ + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute.muted:active {\n  background-image: url(" + v + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content {\n  display: flex;\n  flex-direction: column;\n  width: 205px;\n  color: #a09b8c;\n  font-size: 14px;\n  margin: 11px 0 11px 9px;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content:lang(ar-ae) {\n  margin: 11px 9px 11px 0;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content .lol-premade-voice-panel-participant-volume-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 155px;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content .lol-premade-voice-panel-participant-volume-row .lol-premade-voice-panel-participant-name {\n  max-width: 130px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n", "", {
                version: 3,
                sources: ["webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/voice-panel/voice-participant/style.styl"],
                names: [],
                mappings: "AAkEE;EACE,YAAO;EACP,YAAQ;EAER,6BAA0B;EAC1B,4BAAqB;EACrB,wBAAoB;EACpB,yBAAqB;EACrB,+CAAwC;EACxC,gDAAyC;EACzC,sBAAmB;AClEvB;AALA;EACE,aAAS;EACT,mBAAgB;EAChB,YAAQ;EACR,WAAO;EACP,mBAAa;EACb,kBAAU;AAOZ;AALE;EACE,yFAAY;AAOhB;AAJE;EACE,kBAAY;AAMhB;AAHE;EACE,yDAA+D;EAC/D,2BAAqB;EACrB,sBAAiB;EACjB,4BAAmB;EACnB,WAAO;EACP,YAAQ;EACR,gBAAY;EACZ,eAAQ;EACR,kBAAU;AAKd;AAHI;EACE,yDAA6D;AAKnE;AAFI;EACE,yDAA6D;AAInE;AADI;EACE,yDAAgE;AAGtE;AADM;EACE,yDAA8D;AAGtE;AAAM;EACE,yDAA8D;AAEtE;AAGE;EACE,aAAS;EACT,sBAAgB;EAChB,YAAO;EACP,cAAO;EACP,eAAW;EACX,uBAAQ;AADZ;AAEI;EACE,uBAAQ;AAAd;AAGI;EACE,aAAS;EACT,mBAAgB;EAChB,8BAAiB;EACjB,YAAO;AADb;AAGM;EACE,gBAAW;EACX,mBAAa;EACb,uBAAe;EACf,gBAAU;AADlB",
                sourcesContent: ["$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}", "@require '../../shared.styl';\r\n@require 'riotclient-lol-asset-csslib/styles/color-palette';\r\n\r\n$imagesPath = '../../../images';\r\n\r\n.lol-premade-voice-participant {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  width: 100%;\r\n  align-items: center;\r\n  position: relative;\r\n\r\n  &.speaking {\r\n    background: linear-gradient(to right, rgba(255,255,255,.1) 0%,rgba(255,255,255,0) 100%);\r\n  }\r\n\r\n  .lol-premade-voice-panel-chat-icon {\r\n    align-self: center;\r\n  }\r\n\r\n  .lol-premade-voice-panel-participant-mute {\r\n    background-image: url(pathjoin($imagesPath, 'mute-default.png'));\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width: 18px;\r\n    height: 18px;\r\n    margin-top: 14px;\r\n    cursor: pointer;\r\n    position: relative;\r\n\r\n    &:hover {\r\n      background-image: url(pathjoin($imagesPath, 'mute-hover.png'));\r\n    }\r\n\r\n    &:active{\r\n      background-image: url(pathjoin($imagesPath, 'mute-click.png'));\r\n    }\r\n\r\n    &.muted {\r\n      background-image: url(pathjoin($imagesPath, 'muted-default.png'));\r\n\r\n      &:hover {\r\n        background-image: url(pathjoin($imagesPath, 'muted-hover.png'));\r\n      }\r\n\r\n      &:active {\r\n        background-image: url(pathjoin($imagesPath, 'muted-click.png'));\r\n      }\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-participant-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 205px;\r\n    color: $color_palette_grey1;\r\n    font-size: 14px;\r\n    margin: 11px 0 11px 9px;\r\n    &:lang(ar-ae) {\r\n      margin: 11px 9px 11px 0;\r\n    }\r\n\r\n    .lol-premade-voice-panel-participant-volume-row {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      width: 155px;\r\n\r\n      .lol-premade-voice-panel-participant-name {\r\n        max-width: 130px;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n      }\r\n    }\r\n\r\n    @extend $small-slider;\r\n  }\r\n}\r\n"],
                sourceRoot: ""
            }]), e.exports = h
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mute-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mute-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "mute-click.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "muted-default.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "muted-hover.png"
        }, (e, t, n) => {
            "use strict";
            e.exports = n.p + "muted-click.png"
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = s(n(16)),
                i = s(n(23)),
                a = s(n(25)),
                o = n(111),
                l = n(112);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            class c extends r.default {
                templateMarkup() {
                    return n(113)
                }
                stylesheetMarkup() {
                    return n(114)
                }
                constructor() {
                    super(), this._selectors = {
                        halo: ".lol-premade-voice-comm-halo"
                    }, this._premadeVoiceSpeaking = !1, this._premadeVoiceEnergy = 0, this._teamVoiceSpeaking = !1, this._teamVoiceEnergy = 0, this._initDataBinding()
                }
                static get observedAttributes() {
                    return ["puuid", "size"]
                }
                attributeChangedCallback(e, t, n) {
                    switch (super.attributeChangedCallback(), e) {
                        case "puuid":
                            this._puuid = n;
                            break;
                        case "size":
                            this._sizeAttribute = n, this._sizeAttribute && this._sizeAttribute in l.SIZES && this.addClass(this._sizeAttribute, this._selectors.halo)
                    }
                }
                _isParticipant(e) {
                    return e.puuid === this._puuid
                }
                _updateHalo(e, t, n) {
                    const r = this.shadowRoot.querySelector(this._selectors.halo),
                        i = this._calculateBlurRadius(t);
                    (0, o.applyBlur)(r, e, i, !!n)
                }
                _calculateBlurRadius(e) {
                    const t = this._sizeAttribute || "small";
                    return (0, o.calculateBlurRadius)(t, e)
                }
                _disconnectHalo() {
                    this._updateHalo(!1, 0, !1)
                }
                _handleParticipantsChanged(e) {
                    const t = (e || []).find(this._isParticipant, this);
                    t ? (this._premadeVoiceSpeaking = t.isSpeaking, this._premadeVoiceEnergy = t.energy) : (this._premadeVoiceSpeaking = !1, this._premadeVoiceEnergy = 0), this._resolveHaloState()
                }
                _handleTeamVoiceSessionChanged(e) {
                    if (!e || !e.participants) return this._teamVoiceSpeaking = !1, this._teamVoiceEnergy = 0, void this._resolveHaloState();
                    const t = (e.participants || []).find(this._isParticipant, this);
                    t ? (this._teamVoiceSpeaking = t.isSpeaking, this._teamVoiceEnergy = t.energy) : (this._teamVoiceSpeaking = !1, this._teamVoiceEnergy = 0), this._resolveHaloState()
                }
                _resolveHaloState() {
                    const e = this._premadeVoiceSpeaking || this._teamVoiceSpeaking,
                        t = this._teamVoiceSpeaking,
                        n = t ? this._teamVoiceEnergy : this._premadeVoiceEnergy;
                    this._updateHalo(e, n || 0, t)
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "voice-halo"
                }
                _initDataBinding() {
                    i.default.observe("participants", this._handleParticipantsChanged.bind(this)), a.default.observe("session", this._handleTeamVoiceSessionChanged.bind(this))
                }
            }
            c.tagName = "lol-parties-comm-halo";
            var p = c;
            t.default = p
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.applyBlur = function(e, t, n, r) {
                if (t) {
                    if (e.classList.add("speaking"), e.classList.toggle("team-voice", !!r), n) {
                        const t = r ? "#E88700" : "#36D987";
                        e.style.setProperty("box-shadow", `0 0 ${n}px 1px ${t}`)
                    }
                } else e.classList.remove("speaking"), e.style.setProperty("box-shadow", "none")
            }, t.calculateBlurRadius = function(e, t) {
                const n = r.SIZES[e],
                    i = r.MAX_BLUR_MULTIPLIERS[e];
                if (!t || !n || !i) return 0;
                const a = t / 100,
                    o = n * i,
                    l = n * r.MIN_BLUR_MULTIPLIER;
                return (o - l) * a + ("small" === e ? 1 : 2)
            };
            var r = n(112)
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SIZES = t.MIN_BLUR_MULTIPLIER = t.MAX_BLUR_MULTIPLIERS = void 0;
            t.SIZES = {
                small: 32,
                medium: 58,
                large: 100
            };
            t.MIN_BLUR_MULTIPLIER = 1.2;
            t.MAX_BLUR_MULTIPLIERS = {
                small: 1.5,
                medium: 1.5,
                large: 1.6
            }
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-premade-voice-comm-halo">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n'
        }, (e, t, n) => {
            var r = n(43),
                i = n(44)(r);
            i.push([e.id, ":host .lol-premade-voice-comm-halo {\n  transition: box-shadow 0.15s ease-in-out;\n  position: relative;\n}\n:host .lol-premade-voice-comm-halo:before {\n  content: '';\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: opacity 0.15s ease-in-out;\n  box-shadow: 0 0 0 2px #4bb44b;\n}\n:host .lol-premade-voice-comm-halo.speaking:before {\n  opacity: 1;\n}\n:host .lol-premade-voice-comm-halo.small:before {\n  box-shadow: 0 0 0 1px #4bb44b;\n}\n:host .lol-premade-voice-comm-halo {\n  border-radius: 50%;\n}\n:host .lol-premade-voice-comm-halo:before {\n  border-radius: 50%;\n}\n:host {\n  --premade-voice-halo-margin: 0 0 0 0;\n  --premade-voice-halo-width: auto;\n  --premade-voice-halo-height: auto;\n  --premade-voice-halobefore-box-shadow: none;\n}\n:host .lol-premade-voice-comm-halo {\n  margin: var(--premade-voice-halo-margin);\n  width: var(--premade-voice-halo-width);\n  height: var(--premade-voice-halo-height);\n}\n:host .lol-premade-voice-comm-halo:before {\n  box-shadow: var(--premade-voice-halobefore-box-shadow);\n}\n:host .lol-premade-voice-comm-halo.team-voice:before {\n  box-shadow: 0 0 0 2px #e88700;\n}\n:host .lol-premade-voice-comm-halo.team-voice.small:before {\n  box-shadow: 0 0 0 1px #e88700;\n}\n", "", {
                version: 3,
                sources: ["webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/voice-halo/style.styl"],
                names: [],
                mappings: "AA6BA;EAGE,wCAAY;EACZ,kBAAU;AC9BZ;ADgCE;EACE,WAAS;EACT,UAAS;EACT,WAAO;EACP,YAAQ;EACR,kBAAU;EACV,MAAK;EACL,OAAM;EAEN,qCAAY;EACZ,6BAAY;AC/BhB;ADkCE;EACE,UAAS;AChCb;ADmCE;EACE,6BAAY;ACjChB;ADqCA;EAEE,kBAAe;ACpCjB;ADqCE;EACE,kBAAe;ACnCnB;AAtBA;EACE,oCAA6B;EAC7B,gCAA4B;EAC5B,iCAA6B;EAC7B,2CAAuC;AAwBzC;AApBE;EAEE,wCAAQ;EACR,sCAAO;EACP,wCAAQ;AAqBZ;AApBI;EACE,sDAAY;AAsBlB;AAnBI;EACE,6BAAY;AAqBlB;AAnBI;EACE,6BAAY;AAqBlB",
                sourcesContent: ["$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}", '@require "../shared.styl";\r\n\r\n\r\n// declare this component\'s CSS Custom Variables and defaults here\r\n:host {\r\n  --premade-voice-halo-margin: 0 0 0 0;\r\n  --premade-voice-halo-width: auto;\r\n  --premade-voice-halo-height: auto;\r\n  --premade-voice-halobefore-box-shadow: none;\r\n}\r\n\r\n:host {\r\n  .lol-premade-voice-comm-halo {\r\n    @extend $green-outer-round-blur;\r\n    margin: var(--premade-voice-halo-margin);\r\n    width: var(--premade-voice-halo-width);\r\n    height: var(--premade-voice-halo-height);\r\n    &:before {\r\n      box-shadow: var(--premade-voice-halobefore-box-shadow);\r\n    }\r\n\r\n    &.team-voice:before {\r\n      box-shadow: 0 0 0 2px #E88700;\r\n    }\r\n    &.team-voice.small:before {\r\n      box-shadow: 0 0 0 1px #E88700;\r\n    }\r\n  }\r\n}\r\n'],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(1),
                i = s(n(16)),
                a = s(n(23)),
                o = n(111),
                l = s(n(40));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            class c extends i.default {
                templateMarkup() {
                    return n(116)
                }
                stylesheetMarkup() {
                    return n(117)
                }
                constructor() {
                    super(), this._listeners = {
                        testDataChanged: this._handleVoiceTest.bind(this),
                        settingsChanged: this._handleSettingsChanged.bind(this),
                        participantsChanged: this._handleParticipantsChanged.bind(this),
                        click: this._clickHandler.bind(this)
                    }, this._inVoiceChannel = !1, this._pttActive = !1, this._pttButtonPressed = !1, this._testIsRunning = !1, this._micEnergy = 0, this._elements = {
                        label: ".lol-voice-mic-test-label",
                        button: ".lol-voice-mic-test-button"
                    }, this._initDataBinding()
                }
                connectedCallback() {
                    super.connectedCallback(), a.default.participants().then(this._listeners.participantsChanged), a.default.settings().then(this._listeners.settingsChanged), this.attachListener("click", this._listeners.click, this._elements.button)
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this.detachListener("click", this._listeners.click, this._elements.button), this._testIsRunning && a.default.stopMicTest().catch((() => {}))
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "mic-test-button"
                }
                _clickHandler() {
                    this._inVoiceChannel || (this._testIsRunning ? a.default.stopMicTest() : a.default.startMicTest())
                }
                _handleVoiceTest(e) {
                    const t = e.isLoopbackEnabled !== this._testIsRunning;
                    this._testIsRunning = e.isLoopbackEnabled, t && this._updateState();
                    const n = e.micEnergy !== this._micEnergy;
                    this._micEnergy = e.micEnergy, n && this._updateHalo()
                }
                _handleParticipantsChanged(e) {
                    const t = !!e.length,
                        n = t !== this._inVoiceChannel;
                    this._inVoiceChannel = t, n && this._updateState()
                }
                _handleSettingsChanged(e) {
                    this._pttActive = !!e.pttActive, this._pttActive ? this._pttButtonPressed = !e.localMicMuted : this._pttButtonPressed = !1, this._updateHalo()
                }
                _updateHalo() {
                    const e = this.shadowRoot.querySelector(this._elements.button);
                    if (!e) return;
                    if (!this._testIsRunning) return void(0, o.applyBlur)(e, !1);
                    const t = (0, o.calculateBlurRadius)("large", this._micEnergy);
                    let n = this._micEnergy > 0;
                    this._pttActive && !this._pttButtonPressed && (n = !1), (0, o.applyBlur)(e, n, t)
                }
                _updateState() {
                    if (this._inVoiceChannel) return void this._updateEnabled(!1);
                    let e;
                    this._updateEnabled(!0), this._testIsRunning ? (e = r.tra.get("mic_test_button_label_testing"), this.addClass("active", this._elements.button)) : (e = r.tra.get("mic_test_button_label_test"), this.removeClass("active", this._elements.button), this._updateHalo()), this.addInnerHtml(e, this._elements.label)
                }
                _updateEnabled(e) {
                    const t = this.shadowRoot.querySelector(this._elements.button);
                    e ? (this.removeClass("button-disabled", this._elements.button), l.default.removeTooltip(t)) : (this.addInnerHtml("&nbsp;", this._elements.label), this.addClass("button-disabled", this._elements.button), l.default.attachSmallTooltip(t, r.tra.get("mic_test_button_tooltip_disabled")))
                }
                _initDataBinding() {
                    a.default.observe("mictest", this._listeners.testDataChanged), a.default.observe("participants", this._listeners.participantsChanged), a.default.observe("settings", this._listeners.settingsChanged)
                }
            }
            c.tagName = "lol-parties-mic-test-button";
            var p = c;
            t.default = p
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-voice-mic-test-label"></div>\r\n  <div class="lol-voice-mic-test-button"></div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, t, n) => {
            var r = n(43),
                i = n(44)(r);
            i.push([e.id, '.lol-voice-mic-test-label {\n  font-family: var(--font-body);\n}\n.lol-voice-mic-test-label {\n  font-family: var(--font-body);\n}\n.lol-voice-mic-test-label {\n  -webkit-user-select: none;\n}\n.lol-voice-mic-test-label {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.lol-voice-mic-test-label {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.lol-voice-mic-test-label:lang(ja-jp) {\n  font-size: 13px;\n}\n.lol-voice-mic-test-label:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-voice-mic-test-button {\n  display: flex;\n  width: 38px;\n  height: 32px;\n  background-image: url("/fe/lol-premade-voice/voice-button.png");\n  background-position-y: 0px;\n  background-size: cover;\n  cursor: pointer;\n}\n.lol-voice-mic-test-button:hover:not(.button-disabled) {\n  background-position-y: -32px;\n}\n.lol-voice-mic-test-button:active:not(.button-disabled) {\n  background-position-y: -64px;\n}\n.lol-voice-mic-test-button.button-disabled {\n  background-position-y: -160px;\n  cursor: default;\n}\n.lol-voice-mic-test-button.active {\n  background-position-y: -96px;\n}\n.lol-voice-mic-test-button {\n  transition: box-shadow 0.15s ease-in-out;\n  position: relative;\n}\n.lol-voice-mic-test-button:before {\n  content: \'\';\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: opacity 0.15s ease-in-out;\n  box-shadow: 0 0 0 2px #4bb44b;\n}\n.lol-voice-mic-test-button.speaking:before {\n  opacity: 1;\n}\n.lol-voice-mic-test-button.small:before {\n  box-shadow: 0 0 0 1px #4bb44b;\n}\n.lol-voice-mic-test-label {\n  min-height: 16px;\n  margin-bottom: 5px;\n}\n.lol-voice-mic-test-button.active {\n  background-position-y: -96px;\n}\n', "", {
                version: 3,
                sources: ["webpack://./node_modules/riotclient-lol-asset-csslib/styles/fonts.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/mic-test-button/style.styl", "webpack://./node_modules/riotclient-lol-asset-csslib/styles/typekit.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl"],
                names: [],
                mappings: "AAIA;EACE,6BAAa;ACHf;ADEA;EACE,6BAAa;ACAf;ACKA;EACE,yBAAqB;ADHvB;ACeA;EAEE,oBAAc;EACd,uCAA+B;EAC/B,mCAAwB;ADd1B;AC2RA;EAGE,cAAO;EACP,eAAW;EAIX,mBAAa;EACb,iBAAa;EACb,uBAAgB;EAIhB,4CAAwB;ADjS1B;ACwRE;EACE,eAAW;ADtRf;AC2RE;EACE,iBAAgB;ADzRpB;AEzBA;EACE,aAAS;EACT,WAAO;EACP,YAAQ;EACR,+DAA8D;EAC9D,0BAAuB;EACvB,sBAAiB;EACjB,eAAQ;AF2BV;AEzBE;EACE,4BAAuB;AF2B3B;AExBE;EACE,4BAAuB;AF0B3B;AEvBE;EACE,6BAAuB;EACvB,eAAQ;AFyBZ;AEtBE;EACE,4BAAuB;AFwB3B;AEpBA;EAGE,wCAAY;EACZ,kBAAU;AFoBZ;AElBE;EACE,WAAS;EACT,UAAS;EACT,WAAO;EACP,YAAQ;EACR,kBAAU;EACV,MAAK;EACL,OAAM;EAEN,qCAAY;EACZ,6BAAY;AFmBhB;AEhBE;EACE,UAAS;AFkBb;AEfE;EACE,6BAAY;AFiBhB;AAhEA;EAGE,gBAAY;EACZ,kBAAe;AAgEjB;AAzDE;EACE,4BAAuB;AA2D3B",
                sourcesContent: ["$fonts_lol_display {\r\n  font-family: var(--font-display);\r\n}\r\n\r\n$fonts_lol_body {\r\n  font-family: var(--font-body);\r\n}\r\n\r\n/**\r\n * Deprecated, keeping just to not break thiings abruptly.\r\n */\r\n\r\n$fonts_beaufort {\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n$fonts_spiegel {\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n$fonts_frizquadrata {\r\n  font-family: var(--font-frizquadrata);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-display);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Title';\r\n  }\r\n}\r\n\r\n$fonts_gill_sans_mt {\r\n  font-family: var(--font-gill-sans-mt);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-body);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Body';\r\n  }\r\n}\r\n\r\n\r\n", "@require 'riotclient-lol-asset-csslib/styles/fonts';\r\n@require 'riotclient-lol-asset-csslib/styles/typekit';\r\n\r\n@require \"../shared.styl\";\r\n\r\n\r\n.lol-voice-mic-test-label {\r\n  @extend $fonts_lol_body;\r\n  @extend $typekit_text_s;\r\n  min-height: 16px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lol-voice-mic-test-button {\r\n  @extend $voice-button;\r\n  @extend $green-outer-blur;\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n", "\r\n@import 'fonts';\r\n@import 'color-palette';\r\n\r\n/*\r\n * User Interaction Macros\r\n */\r\n$user_selectable {\r\n  -webkit-user-select: all;\r\n}\r\n$user_unselectable {\r\n  -webkit-user-select: none;\r\n}\r\n$user_draggable {\r\n  -webkit-user-drag: element;\r\n}\r\n$user_undraggable {\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/*\r\n * Base Text Treatment\r\n */\r\n$typekit_base {\r\n  @extend $user_unselectable;\r\n  font-kerning: normal;\r\n  -webkit-font-feature-settings: \"kern\" 1;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*\r\n * Uppercase Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-uppercase {\r\n  text-transform: uppercase;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n/*\r\n * Capitalized Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-capitalize {\r\n  text-transform: capitalize;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n$text-transform-none {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n * Headings\r\n * by default, headings are always uppercase.\r\n * if text case must be preserved, use this the _preserve_case macros instead.\r\n */\r\n$typekit_h1 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  line-height: 42px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_preserve_case {\r\n  @extend $typekit_h1;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_subhead {\r\n  @extend $typekit_h1;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h2 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_preserve_case {\r\n  @extend $typekit_h2;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_subhead {\r\n  @extend $typekit_h2;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h3 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 28px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_preserve_case {\r\n  @extend $typekit_h3;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_subhead {\r\n  @extend $typekit_h3;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  line-height: 22px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_preserve_case {\r\n  @extend $typekit_h4;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_subhead {\r\n  @extend $typekit_h4;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4_italic {\r\n  @extend $typekit_h4_preserve_case;\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n$typekit_h5 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  line-height: 18px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_preserve_case {\r\n  @extend $typekit_h5;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_subhead {\r\n  @extend $typekit_h5;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h6 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_preserve_case {\r\n  @extend $typekit_h6;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_subhead {\r\n  @extend $typekit_h6;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h7 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  @extend $text-transform-uppercase;\r\n  font-weight: 500;\r\n  color: $color_palette_grey0;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  letter-spacing: 0.02625em;\r\n\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Body Text\r\n */\r\n$typekit_text_l {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_grey1;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 24px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_m {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 20px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_s {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_small {\r\n  @extend $typekit_text_s;\r\n  font-weight: 400;\r\n  letter-spacing: .05em;\r\n}\r\n\r\n$typekit_text_small_bold {\r\n  @extend $typekit_text_small;\r\n  font-weight: 550;\r\n}\r\n\r\n/*\r\n * Navigation\r\n */\r\nnav-active($width, $height) {\r\n  &.active {\r\n    position: relative;\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_nav {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n}\r\n\r\n$typekit_nav_secondary {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  &:lang(zh-tw) {\r\n    font-size: 14px;\r\n  }\r\n  font-weight: 500;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Labels\r\n */\r\n$typekit_label {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_label_bold {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 900;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Button Text\r\n */\r\n$typekit_button {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_gold3;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .0325em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n\r\n  &:hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n\r\n  &:disabled, &:disabled:hover, &[disabled='true'], &[disabled='true']:hover {\r\n    color: $color_palette_grey_disabled;\r\n    cursor: default;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_gold5;\r\n  }\r\n\r\n}\r\n\r\n$typekit_button_blue {\r\n  @extend $typekit_button;\r\n  color: $colors_ziggurat;\r\n\r\n  &:hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_blue4;\r\n  }\r\n}\r\n\r\n$typekit_button_red {\r\n  @extend $typekit_button;\r\n  color: $color_palette_mage;\r\n\r\n  &:hover {\r\n    color: $color_palette_mage2;\r\n  }\r\n\r\n  &:active {\r\n    color: $colors_crownOfThorns;\r\n  }\r\n}\r\n\r\n/*\r\n * Links\r\n */\r\n$typekit_link_base {\r\n  @extend $typekit_base;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  outline: 0;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_link_base_color {\r\n  color: $color_palette_gold2;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_link_external_base {\r\n  @extend $typekit_link_base;\r\n  color: $color_palette_blue3;\r\n  text-decoration: none;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:after {\r\n    width: 9px;\r\n    height: 9px;\r\n    content: '';\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-mask: url('../images/external-link-mask.png') no-repeat;\r\n    -webkit-mask-size: contain;\r\n    background-color: $color_palette_blue3;\r\n    margin: 0 0 0 5px;\r\n  }\r\n  &:lang(ar-ae):after {\r\n    margin: 0 5px 0 0;\r\n    transform: scaleX(-1);\r\n  }\r\n\r\n  &:hover:after {\r\n     background-color: $color_palette_blue1;\r\n  }\r\n}\r\n\r\n/* Internal links in Lol Body font */\r\n$typekit_link {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* Internal links in the Lol Display font */\r\n$typekit_link_display {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/* External links in Lol Body font */\r\n$typekit_link_external {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* External links in Lol Display font */\r\n$typekit_link_external_display {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n$typekit_footer {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Numbers\r\n */\r\n$typekit_num {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  background: linear-gradient(to bottom, $color_palette_gold2 0%, $color_palette_gold3 35%, #765c29 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n$typekit_num_l {\r\n  @extend $typekit_num;\r\n  font-size: 60px;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_m {\r\n  @extend $typekit_num;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_s {\r\n  @extend $typekit_num;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_num_stats {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Text Modifiers\r\n * _modifier_ typekit rules semantically defines text alteration rules to convey specific meaning.\r\n * They modify simply typography rules (color, weight, style, etc)\r\n * They are indended to be used in combination with other typekit macros.\r\n */\r\n$typekit_modifier_highlight {\r\n  color: $color_palette_gold1;\r\n}\r\n$typekit_modifier_subhead {\r\n  color: $color_palette_grey1;\r\n}\r\n/*\r\n * TODO: Add other modifiers for specific types of highlights like\r\n *  - coloring for game values (ability power, attack power, armor penetration, etc)\r\n */\r\n", "$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}"],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(16)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                templateMarkup() {
                    return n(119)
                }
                stylesheetMarkup() {
                    return n(120)
                }
                constructor() {
                    super(), this._selectors = {
                        container: ".key-bind-indicator",
                        key: ".key-bind-indicator-key",
                        unboundContainer: ".key-bind-indicator-unbound",
                        unboundText: ".key-bind-indicator-unbound-text"
                    }
                }
                static get observedAttributes() {
                    return ["keybind", "unbound-text"]
                }
                attributeChangedCallback(e, t, n) {
                    super.attributeChangedCallback(), "keybind" !== e && "unbound-text" !== e || this._updateDisplay(this.getAttribute("keybind"))
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "key-bind-indicator"
                }
                _updateDisplay(e) {
                    const t = this.shadowRoot.querySelector(this._selectors.container),
                        n = this.shadowRoot.querySelector(this._selectors.unboundContainer);
                    if (!t) return;
                    const r = this.getAttribute("unbound-text");
                    if (!e && r) {
                        if (t.style.display = "none", n) {
                            n.style.display = "", n.style.cursor = "pointer";
                            const e = this.shadowRoot.querySelector(this._selectors.unboundText);
                            e && (e.textContent = r), this._unboundClickBound || (this._unboundClickBound = !0, n.addEventListener("click", (() => {
                                this.dispatchEvent(new CustomEvent("keybind-set-click", {
                                    bubbles: !0,
                                    composed: !0
                                }))
                            })))
                        }
                        return
                    }
                    if (n && (n.style.display = "none"), !e) return void(t.style.display = "none");
                    t.style.display = "";
                    const i = e.charAt(0).toUpperCase() + e.slice(1);
                    this.addInnerHtml(i, this._selectors.key)
                }
            }
            a.tagName = "lol-parties-key-bind-indicator";
            var o = a;
            t.default = o
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="key-bind-indicator">\r\n    <span class="key-bind-indicator-key"></span>\r\n  </div>\r\n  <div class="key-bind-indicator-unbound" style="display: none;">\r\n    <span class="key-bind-indicator-unbound-square"></span>\r\n    <span class="key-bind-indicator-unbound-text"></span>\r\n  </div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, t, n) => {
            var r = n(43),
                i = n(44)(r);
            i.push([e.id, ".key-bind-indicator-key,\n.key-bind-indicator-unbound-text {\n  font-family: var(--font-body);\n}\n.key-bind-indicator-key,\n.key-bind-indicator-unbound-text {\n  font-family: var(--font-body);\n}\n:host {\n  display: flex;\n  align-items: center;\n}\n.key-bind-indicator {\n  display: inline-flex;\n  align-items: center;\n}\n.key-bind-indicator-key {\n  font-size: 11px;\n  color: #010a13;\n  background: #a09b8c;\n  border-radius: 3px;\n  padding: 1px 3px;\n  min-width: 10px;\n  text-align: center;\n}\n.key-bind-indicator-unbound {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.key-bind-indicator-unbound-square {\n  width: 16px;\n  height: 16px;\n  border: 1px solid #ff2345;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.key-bind-indicator-unbound-text {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.6px;\n  color: #ff2345;\n}\n", "", {
                version: 3,
                sources: ["webpack://./node_modules/riotclient-lol-asset-csslib/styles/fonts.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/key-bind-indicator/style.styl"],
                names: [],
                mappings: "AAIA;;EACE,6BAAa;ACFf;ADCA;;EACE,6BAAa;ACEf;AAHA;EACE,aAAS;EACT,mBAAa;AAKf;AAFA;EACE,oBAAS;EACT,mBAAa;AAIf;AADA;EAEE,eAAW;EACX,cAAO;EACP,mBAAY;EACZ,kBAAe;EACf,gBAAS;EACT,eAAW;EACX,kBAAY;AAEd;AACA;EACE,oBAAS;EACT,mBAAa;EACb,QAAK;AACP;AAEA;EACE,WAAO;EACP,YAAQ;EACR,yBAAQ;EACR,kBAAe;EACf,sBAAY;AAAd;AAGA;EAEE,eAAW;EACX,iBAAa;EACb,qBAAgB;EAChB,cAAO;AAFT",
                sourcesContent: ["$fonts_lol_display {\r\n  font-family: var(--font-display);\r\n}\r\n\r\n$fonts_lol_body {\r\n  font-family: var(--font-body);\r\n}\r\n\r\n/**\r\n * Deprecated, keeping just to not break thiings abruptly.\r\n */\r\n\r\n$fonts_beaufort {\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n$fonts_spiegel {\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n$fonts_frizquadrata {\r\n  font-family: var(--font-frizquadrata);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-display);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Title';\r\n  }\r\n}\r\n\r\n$fonts_gill_sans_mt {\r\n  font-family: var(--font-gill-sans-mt);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-body);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Body';\r\n  }\r\n}\r\n\r\n\r\n", "@require 'riotclient-lol-asset-csslib/styles/fonts';\r\n@require 'riotclient-lol-asset-csslib/styles/typekit';\r\n@require 'riotclient-lol-asset-csslib/styles/color-palette';\r\n\r\n:host {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.key-bind-indicator {\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n.key-bind-indicator-key {\r\n  @extend $fonts_lol_body;\r\n  font-size: 11px;\r\n  color: $color_palette_almostBlack;\r\n  background: $color_palette_grey1;\r\n  border-radius: 3px;\r\n  padding: 1px 3px;\r\n  min-width: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.key-bind-indicator-unbound {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.key-bind-indicator-unbound-square {\r\n  width: 16px;\r\n  height: 16px;\r\n  border: 1px solid $color_palette_mage2;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.key-bind-indicator-unbound-text {\r\n  @extend $fonts_lol_body;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  letter-spacing: 0.6px;\r\n  color: $color_palette_mage2;\r\n}"],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(16)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                templateMarkup() {
                    return n(122)
                }
                stylesheetMarkup() {
                    return n(123)
                }
                constructor() {
                    super(), this._selectors = {
                        header: ".team-voice-tooltip-header",
                        body: ".team-voice-tooltip-body"
                    }
                }
                static get observedAttributes() {
                    return ["header", "body"]
                }
                attributeChangedCallback(e, t, n) {
                    super.attributeChangedCallback(), "header" === e ? this.addInnerHtml(n || "", this._selectors.header) : "body" === e && this.addInnerHtml(n || "", this._selectors.body)
                }
                connectedCallback() {
                    super.connectedCallback(), this.addInnerHtml(this.getAttribute("header") || "", this._selectors.header), this.addInnerHtml(this.getAttribute("body") || "", this._selectors.body)
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "team-voice-tooltip"
                }
            }
            a.tagName = "lol-parties-team-voice-tooltip";
            var o = a;
            t.default = o
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="team-voice-tooltip">\r\n    <div class="team-voice-tooltip-header"></div>\r\n    <div class="team-voice-tooltip-body"></div>\r\n  </div>\r\n</template>\r\n'
        }, (e, t, n) => {
            var r = n(43),
                i = n(44)(r);
            i.push([e.id, ".team-voice-tooltip-header {\n  font-family: var(--font-display);\n}\n.team-voice-tooltip-body {\n  font-family: var(--font-body);\n}\n.team-voice-tooltip-header {\n  font-family: var(--font-display);\n}\n.team-voice-tooltip-body {\n  font-family: var(--font-body);\n}\n:host {\n  display: block;\n}\n.team-voice-tooltip {\n  direction: ltr /*rtl:rtl*/;\n  display: flex;\n  flex-direction: column;\n  width: 180px;\n  padding: 9px;\n  text-align: center;\n  color: #a09b8c;\n  white-space: normal;\n  word-wrap: break-word;\n}\n.team-voice-tooltip-header {\n  color: #c8aa6e;\n  font-weight: bold;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n.team-voice-tooltip-body {\n  font-size: 12px;\n  line-height: 1.3;\n}\n", "", {
                version: 3,
                sources: ["webpack://./node_modules/riotclient-lol-asset-csslib/styles/fonts.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/team-voice-tooltip/style.styl"],
                names: [],
                mappings: "AAAA;EACE,gCAAa;ACCf;ADEA;EACE,6BAAa;ACAf;ADLA;EACE,gCAAa;ACOf;ADJA;EACE,6BAAa;ACMf;AAPA;EACE,cAAS;AASX;AANA;EACE,0BAAW;EACX,aAAS;EACT,sBAAgB;EAChB,YAAO;EACP,YAAS;EACT,kBAAY;EACZ,cAAO;EACP,mBAAa;EACb,qBAAW;AAQb;AALA;EAEE,cAAO;EACP,iBAAa;EACb,eAAW;EACX,kBAAe;AAMjB;AAHA;EAEE,eAAW;EACX,gBAAa;AAIf",
                sourcesContent: ["$fonts_lol_display {\r\n  font-family: var(--font-display);\r\n}\r\n\r\n$fonts_lol_body {\r\n  font-family: var(--font-body);\r\n}\r\n\r\n/**\r\n * Deprecated, keeping just to not break thiings abruptly.\r\n */\r\n\r\n$fonts_beaufort {\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n$fonts_spiegel {\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n$fonts_frizquadrata {\r\n  font-family: var(--font-frizquadrata);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-display);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Title';\r\n  }\r\n}\r\n\r\n$fonts_gill_sans_mt {\r\n  font-family: var(--font-gill-sans-mt);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-body);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Body';\r\n  }\r\n}\r\n\r\n\r\n", "@require 'riotclient-lol-asset-csslib/styles/fonts';\r\n@require 'riotclient-lol-asset-csslib/styles/typekit';\r\n@require 'riotclient-lol-asset-csslib/styles/color-palette';\r\n\r\n:host {\r\n  display: block;\r\n}\r\n\r\n.team-voice-tooltip {\r\n  direction: ltr/*rtl:rtl*/;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 180px;\r\n  padding: 9px;\r\n  text-align: center;\r\n  color: $color_palette_grey1;\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.team-voice-tooltip-header {\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_gold3;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.team-voice-tooltip-body {\r\n  @extend $fonts_lol_body;\r\n  font-size: 12px;\r\n  line-height: 1.3;\r\n}\r\n"],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.HOTKEY_ROW_IDS = void 0;
            var r, i = (r = n(16)) && r.__esModule ? r : {
                default: r
            };
            const a = [{
                    id: "party_ptt",
                    attribute: "party-ptt",
                    selector: "party"
                }, {
                    id: "team_ptt",
                    attribute: "team-ptt",
                    selector: "team"
                }, {
                    id: "character_menu",
                    attribute: "character-menu",
                    selector: "character"
                }, {
                    id: "role_quest",
                    attribute: "role-quest",
                    selector: "role"
                }],
                o = a.map((e => e.id));
            t.HOTKEY_ROW_IDS = o;
            class l extends i.default {
                templateMarkup() {
                    return n(125)
                }
                stylesheetMarkup() {
                    return n(126)
                }
                constructor() {
                    super(), this._selectors = {
                        title: ".team-voice-eat-text-title",
                        body: ".team-voice-eat-text-msg",
                        hotkeysTitle: ".team-voice-eat-hotkeys-title",
                        footer: ".team-voice-eat-footer",
                        close: ".team-voice-eat-dismiss"
                    }, this._attributeSelectors = {
                        header: this._selectors.title,
                        body: this._selectors.body,
                        "hotkeys-title": this._selectors.hotkeysTitle,
                        footer: this._selectors.footer
                    }, a.forEach((({
                        attribute: e,
                        selector: t
                    }) => {
                        this._attributeSelectors[`${e}-label`] = `.team-voice-eat-hotkey-${t}-label`, this._attributeSelectors[`${e}-value`] = `.team-voice-eat-hotkey-${t}-value`
                    })), this._onCloseClick = this._onCloseClick.bind(this)
                }
                static get observedAttributes() {
                    return ["header", "body", "hotkeys-title", "footer"].concat(a.flatMap((({
                        attribute: e
                    }) => [`${e}-label`, `${e}-value`])))
                }
                attributeChangedCallback(e, t, n) {
                    super.attributeChangedCallback();
                    const r = this._attributeSelectors[e];
                    r && this.addInnerHtml(n || "", r)
                }
                connectedCallback() {
                    super.connectedCallback(), Object.keys(this._attributeSelectors).forEach((e => {
                        this.addInnerHtml(this.getAttribute(e) || "", this._attributeSelectors[e])
                    })), this.attachListener("click", this._onCloseClick, this._selectors.close)
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this.detachListener("click", this._onCloseClick, this._selectors.close)
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "team-voice-eat"
                }
                _onCloseClick() {
                    this.dispatchEvent(new CustomEvent("dismiss", {
                        bubbles: !0,
                        composed: !0
                    }))
                }
            }
            l.tagName = "lol-parties-team-voice-eat";
            var s = l;
            t.default = s
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="team-voice-eat">\r\n    <div class="team-voice-eat-dismiss" role="button" aria-label="close"></div>\r\n    <div class="team-voice-eat-content">\r\n      <svg class="team-voice-eat-caret" xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 18 25" fill="none">\r\n        <path d="M9 25L-1.72313e-08 16L18 16L9 25Z" fill="#C89B3C" />\r\n        <path d="M13 12L9 16L5 12L9 8L13 12Z" fill="#785A28" stroke="#785A28" />\r\n      </svg>\r\n      <div class="team-voice-eat-icon">\r\n        <img\r\n          src="/fe/lol-premade-voice/team-voice-microphone.svg"\r\n          alt=""\r\n          class="team-voice-eat-icon-image"\r\n        />\r\n      </div>\r\n      <div class="team-voice-eat-text">\r\n        <div class="team-voice-eat-text-title"></div>\r\n        <div class="team-voice-eat-text-msg"></div>\r\n        <div class="team-voice-eat-hotkeys">\r\n          <div class="team-voice-eat-hotkeys-title"></div>\r\n          <div class="team-voice-eat-hotkey-row">\r\n            <span class="team-voice-eat-hotkey-label team-voice-eat-hotkey-party-label"></span>\r\n            <span class="team-voice-eat-hotkey-value team-voice-eat-hotkey-party-value"></span>\r\n          </div>\r\n          <div class="team-voice-eat-hotkey-row">\r\n            <span class="team-voice-eat-hotkey-label team-voice-eat-hotkey-team-label"></span>\r\n            <span class="team-voice-eat-hotkey-value team-voice-eat-hotkey-team-value"></span>\r\n          </div>\r\n          <div class="team-voice-eat-hotkey-row">\r\n            <span class="team-voice-eat-hotkey-label team-voice-eat-hotkey-character-label"></span>\r\n            <span class="team-voice-eat-hotkey-value team-voice-eat-hotkey-character-value"></span>\r\n          </div>\r\n          <div class="team-voice-eat-hotkey-row">\r\n            <span class="team-voice-eat-hotkey-label team-voice-eat-hotkey-role-label"></span>\r\n            <span class="team-voice-eat-hotkey-value team-voice-eat-hotkey-role-value"></span>\r\n          </div>\r\n        </div>\r\n        <div class="team-voice-eat-footer"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n'
        }, (e, t, n) => {
            var r = n(43),
                i = n(44)(r);
            i.push([e.id, '.team-voice-eat-text-title {\n  font-family: var(--font-display);\n}\n.team-voice-eat-text-msg,\n.team-voice-eat-hotkeys-title,\n.team-voice-eat-hotkey-label,\n.team-voice-eat-hotkey-value,\n.team-voice-eat-footer {\n  font-family: var(--font-body);\n}\n.team-voice-eat-text-title,\n.team-voice-eat-text-msg,\n.team-voice-eat-hotkeys-title,\n.team-voice-eat-hotkey-label,\n.team-voice-eat-hotkey-value,\n.team-voice-eat-footer {\n  -webkit-user-select: none;\n}\n.team-voice-eat-text-title,\n.team-voice-eat-text-msg,\n.team-voice-eat-hotkeys-title,\n.team-voice-eat-hotkey-label,\n.team-voice-eat-hotkey-value,\n.team-voice-eat-footer {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.team-voice-eat-text-title {\n  text-transform: uppercase;\n}\n.team-voice-eat-text-title:lang(ko-kr),\n.team-voice-eat-text-title:lang(ja-jp),\n.team-voice-eat-text-title:lang(tr-tr),\n.team-voice-eat-text-title:lang(el-gr),\n.team-voice-eat-text-title:lang(th-th),\n.team-voice-eat-text-title:lang(zh-tw) {\n  text-transform: none;\n}\n.team-voice-eat-text-title {\n  color: #f0e6d2;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: 0.05em;\n}\n.team-voice-eat-text-title:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.team-voice-eat-text-msg,\n.team-voice-eat-hotkeys-title,\n.team-voice-eat-hotkey-label,\n.team-voice-eat-hotkey-value {\n  color: #a09b8c;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 20px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.team-voice-eat-text-msg:lang(ar-ae),\n.team-voice-eat-hotkeys-title:lang(ar-ae),\n.team-voice-eat-hotkey-label:lang(ar-ae),\n.team-voice-eat-hotkey-value:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.team-voice-eat-footer {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.team-voice-eat-footer:lang(ja-jp) {\n  font-size: 13px;\n}\n.team-voice-eat-footer:lang(ar-ae) {\n  letter-spacing: 0;\n}\n:host {\n  direction: ltr /*rtl:rtl*/;\n  display: block;\n  width: 375px;\n  min-height: 115px;\n  position: relative;\n}\n.team-voice-eat {\n  position: relative;\n  width: 100%;\n  min-height: 100%;\n}\n.team-voice-eat-dismiss {\n  display: block;\n  height: 12px;\n  width: 12px;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: url("/fe/lol-static-assets/images/close.svg");\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 4px;\n  z-index: 2;\n}\n.team-voice-eat-content {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  min-height: 100px;\n  border-radius: 2px;\n  overflow: visible;\n  background: #c89b3c;\n  position: relative;\n}\n.team-voice-eat-caret {\n  position: absolute;\n  right: 15px;\n  bottom: -9px;\n  width: 18px;\n  height: 25px;\n  pointer-events: none;\n}\n.team-voice-eat-icon {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 81px;\n  height: 100%;\n  flex-shrink: 0;\n}\n.team-voice-eat-icon-image {\n  width: 42px;\n  height: 42px;\n  margin-top: 20px;\n  padding: 8px;\n  box-sizing: border-box;\n  background-color: #3d2e1d;\n  border-radius: 50%;\n  object-fit: contain;\n}\n.team-voice-eat-text {\n  display: flex;\n  flex-direction: column;\n  width: 266px;\n  height: 100%;\n  align-self: flex-start;\n  white-space: normal;\n  text-align: left /*rtl:right*/;\n}\n.team-voice-eat-text-title {\n  font-weight: bold;\n  margin-top: 20px;\n  color: #3d2e1d;\n  text-transform: none;\n}\n.team-voice-eat-text-msg {\n  margin-top: 5px;\n  color: #3d2e1d;\n  text-transform: none;\n}\n.team-voice-eat-hotkeys {\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n}\n.team-voice-eat-hotkeys-title {\n  font-weight: bold;\n  margin-bottom: 4px;\n  color: #3d2e1d;\n  text-transform: none;\n}\n.team-voice-eat-hotkey-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 1px 0;\n}\n.team-voice-eat-hotkey-label {\n  flex: 1 1 auto;\n  min-width: 0;\n  color: #3d2e1d;\n  text-transform: none;\n}\n.team-voice-eat-hotkey-value {\n  flex: 0 0 auto;\n  font-weight: bold;\n  margin-left: 8px /*rtl:0*/;\n  margin-right: 0 /*rtl:8px*/;\n  color: #3d2e1d;\n  text-transform: none;\n  white-space: nowrap;\n}\n.team-voice-eat-footer {\n  font-style: italic;\n  margin-top: 12px;\n  margin-bottom: 20px;\n  color: #3d2e1d;\n  text-transform: none;\n}\n', "", {
                version: 3,
                sources: ["webpack://./node_modules/riotclient-lol-asset-csslib/styles/fonts.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/team-voice-eat/style.styl", "webpack://./node_modules/riotclient-lol-asset-csslib/styles/typekit.styl"],
                names: [],
                mappings: "AAAA;EACE,gCAAa;ACCf;ADEA;;;;;EACE,6BAAa;ACIf;ACCA;;;;;;EACE,yBAAqB;ADMvB;ACMA;;;;;;EAEE,oBAAc;EACd,uCAA+B;EAC/B,mCAAwB;ADA1B;ACQA;EACE,yBAAgB;ADNlB;ACOE;;;;;;EAME,oBAAgB;ADLpB;ACuHA;EAIE,cAAO;EACP,eAAW;EACX,gBAAa;EACb,iBAAa;EACb,sBAAgB;ADxHlB;ACyHE;EACE,iBAAgB;ADvHpB;AC0OA;;;;EAGE,cAAO;EACP,eAAW;EACX,mBAAa;EACb,iBAAa;EACb,uBAAgB;EAIhB,4CAAwB;AD1O1B;ACuOE;;;;EACE,iBAAgB;ADlOpB;ACuOA;EAGE,cAAO;EACP,eAAW;EAIX,mBAAa;EACb,iBAAa;EACb,uBAAgB;EAIhB,4CAAwB;AD7O1B;ACoOE;EACE,eAAW;ADlOf;ACuOE;EACE,iBAAgB;ADrOpB;AA/DA;EACE,0BAAW;EACX,cAAS;EACT,YAAO;EACP,iBAAY;EACZ,kBAAU;AAiEZ;AA9DA;EACE,kBAAU;EACV,WAAO;EACP,gBAAY;AAgEd;AA7DA;EACE,cAAS;EACT,YAAQ;EACR,WAAO;EACP,kBAAU;EACV,QAAK;EACL,UAAO;EACP,yDAA8C;EAC9C,2BAAqB;EACrB,4BAAmB;EACnB,eAAQ;EACR,kBAAe;EACf,YAAS;EACT,UAAS;AA+DX;AA5DA;EACE,aAAS;EACT,mBAAgB;EAChB,WAAO;EACP,iBAAY;EACZ,kBAAe;EACf,iBAAU;EACV,mBAAY;EACZ,kBAAU;AA8DZ;AAtDA;EACE,kBAAU;EACV,WAA6B;EAC7B,YAAQ;EACR,WAAO;EACP,YAAQ;EACR,oBAAgB;AAwDlB;AArDA;EACE,aAAS;EACT,uBAAa;EACb,uBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,cAAa;AAuDf;AApDA;EACE,WAAO;EACP,YAAQ;EACR,gBAAY;EACZ,YAAS;EACT,sBAAY;EACZ,yBAAkB;EAClB,kBAAe;EACf,mBAAY;AAsDd;AAnDA;EACE,aAAS;EACT,sBAAgB;EAChB,YAAO;EACP,YAAQ;EACR,sBAAY;EACZ,mBAAa;EACb,8BAAY;AAqDd;AAlDA;EAEE,iBAAa;EACb,gBAAY;EACZ,cAAO;EACP,oBAAgB;AAmDlB;AAhDA;EAEE,eAAY;EACZ,cAAO;EACP,oBAAgB;AAiDlB;AA9CA;EACE,aAAS;EACT,sBAAgB;EAChB,gBAAY;AAgDd;AA7CA;EAEE,iBAAa;EACb,kBAAe;EACf,cAAO;EACP,oBAAgB;AA8ClB;AA3CA;EACE,aAAS;EACT,mBAAgB;EAChB,8BAAiB;EACjB,qBAAa;EACb,cAAS;AA6CX;AAzCA;EAEE,cAAM;EACN,YAAW;EACX,cAAO;EACP,oBAAgB;AA0ClB;AAvCA;EAEE,cAAM;EACN,iBAAa;EACb,0BAAa;EACb,2BAAc;EACd,cAAO;EACP,oBAAgB;EAChB,mBAAa;AAwCf;AArCA;EAEE,kBAAY;EACZ,gBAAY;EACZ,mBAAe;EACf,cAAO;EACP,oBAAgB;AAsClB",
                sourcesContent: ["$fonts_lol_display {\r\n  font-family: var(--font-display);\r\n}\r\n\r\n$fonts_lol_body {\r\n  font-family: var(--font-body);\r\n}\r\n\r\n/**\r\n * Deprecated, keeping just to not break thiings abruptly.\r\n */\r\n\r\n$fonts_beaufort {\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n$fonts_spiegel {\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n$fonts_frizquadrata {\r\n  font-family: var(--font-frizquadrata);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-display);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Title';\r\n  }\r\n}\r\n\r\n$fonts_gill_sans_mt {\r\n  font-family: var(--font-gill-sans-mt);\r\n  \r\n  &:lang(el-gr),\r\n  &:lang(ko-kr),\r\n  &:lang(ro-ro),\r\n  &:lang(ru-ru),\r\n  &:lang(th-th),\r\n  &:lang(tr-tr),\r\n  &:lang(vi-VN),\r\n  &:lang(zh-cn),\r\n  &:lang(zh-my),\r\n  &:lang(zh-tw) {\r\n    font-family: var(--font-body);\r\n  }\r\n  &:lang(ja-jp) {\r\n    font-family: 'Noto Serif Jp Body';\r\n  }\r\n}\r\n\r\n\r\n", "@require 'riotclient-lol-asset-csslib/styles/typekit';\r\n@require 'riotclient-lol-asset-csslib/styles/color-palette';\r\n\r\n// Mirrors `rcp-fe-lol-navigation/src/app/styles/menu-item.styl`'s\r\n// `.menu-item-attention-tooltip*` styling, but positions the caret below the\r\n// tooltip (pointing downward at the voice button) and aligns it near the\r\n// right edge of the tooltip so it points at the right-anchored voice button.\r\n$eat-background = #C89B3C;\r\n$eat-text-color = #3D2E1D;\r\n$base-image-path = '/fe/lol-static-assets/images/';\r\n\r\n// Horizontal inset of the caret from the right edge of the tooltip. Tuned so\r\n// the caret lines up with the voice button sitting at the tooltip's right\r\n// edge (mirrors the `anchor: {x: 'right', y: 'bottom'}` + x-offset in the host).\r\n$caret-right-inset = 24px;\r\n\r\n:host {\r\n  direction: ltr/*rtl:rtl*/;\r\n  display: block;\r\n  width: 375px;\r\n  min-height: 115px;\r\n  position: relative;\r\n}\r\n\r\n.team-voice-eat {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n.team-voice-eat-dismiss {\r\n  display: block;\r\n  height: 12px;\r\n  width: 12px;\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 8px;\r\n  background: url($base-image-path + 'close.svg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  padding: 4px;\r\n  z-index: 2;\r\n}\r\n\r\n.team-voice-eat-content {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  min-height: 100px;\r\n  border-radius: 2px;\r\n  overflow: visible;\r\n  background: $eat-background;\r\n  position: relative;\r\n}\r\n\r\n// Combined diamond + down-pointing triangle caret. The SVG is 18x25, with the\r\n// diamond at y=8..16 and the triangle at y=16..25. We position it so the\r\n// triangle's top edge (y=16) sits flush against the tooltip's bottom edge\r\n// (no gap), which leaves the diamond straddling the tooltip's bottom edge as\r\n// a decoration.\r\n.team-voice-eat-caret {\r\n  position: absolute;\r\n  right: ($caret-right-inset - 9px);\r\n  bottom: -9px; // = -(svg-height - 16)\r\n  width: 18px;\r\n  height: 25px;\r\n  pointer-events: none;\r\n}\r\n\r\n.team-voice-eat-icon {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  width: 81px;\r\n  height: 100%;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.team-voice-eat-icon-image {\r\n  width: 42px;\r\n  height: 42px;\r\n  margin-top: 20px;\r\n  padding: 8px;\r\n  box-sizing: border-box;\r\n  background-color: $eat-text-color;\r\n  border-radius: 50%;\r\n  object-fit: contain;\r\n}\r\n\r\n.team-voice-eat-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 266px;\r\n  height: 100%;\r\n  align-self: flex-start;\r\n  white-space: normal;\r\n  text-align: left/*rtl:right*/;\r\n}\r\n\r\n.team-voice-eat-text-title {\r\n  @extend $typekit_h4;\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n  color: $eat-text-color;\r\n  text-transform: none;\r\n}\r\n\r\n.team-voice-eat-text-msg {\r\n  @extend $typekit_text_m;\r\n  margin-top: 5px;\r\n  color: $eat-text-color;\r\n  text-transform: none;\r\n}\r\n\r\n.team-voice-eat-hotkeys {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 16px;\r\n}\r\n\r\n.team-voice-eat-hotkeys-title {\r\n  @extend $typekit_text_m;\r\n  font-weight: bold;\r\n  margin-bottom: 4px;\r\n  color: $eat-text-color;\r\n  text-transform: none;\r\n}\r\n\r\n.team-voice-eat-hotkey-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  padding: 1px 0;\r\n}\r\n\r\n// Localized labels run longer than English, so the label absorbs the extra width.\r\n.team-voice-eat-hotkey-label {\r\n  @extend $typekit_text_m;\r\n  flex: 1 1 auto;\r\n  min-width: 0;\r\n  color: $eat-text-color;\r\n  text-transform: none;\r\n}\r\n\r\n.team-voice-eat-hotkey-value {\r\n  @extend $typekit_text_m;\r\n  flex: 0 0 auto;\r\n  font-weight: bold;\r\n  margin-left: 8px/*rtl:0*/;\r\n  margin-right: 0/*rtl:8px*/;\r\n  color: $eat-text-color;\r\n  text-transform: none;\r\n  white-space: nowrap;\r\n}\r\n\r\n.team-voice-eat-footer {\r\n  @extend $typekit_text_s;\r\n  font-style: italic;\r\n  margin-top: 12px;\r\n  margin-bottom: 20px;\r\n  color: $eat-text-color;\r\n  text-transform: none;\r\n}\r\n", "\r\n@import 'fonts';\r\n@import 'color-palette';\r\n\r\n/*\r\n * User Interaction Macros\r\n */\r\n$user_selectable {\r\n  -webkit-user-select: all;\r\n}\r\n$user_unselectable {\r\n  -webkit-user-select: none;\r\n}\r\n$user_draggable {\r\n  -webkit-user-drag: element;\r\n}\r\n$user_undraggable {\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/*\r\n * Base Text Treatment\r\n */\r\n$typekit_base {\r\n  @extend $user_unselectable;\r\n  font-kerning: normal;\r\n  -webkit-font-feature-settings: \"kern\" 1;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*\r\n * Uppercase Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-uppercase {\r\n  text-transform: uppercase;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n/*\r\n * Capitalized Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-capitalize {\r\n  text-transform: capitalize;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n$text-transform-none {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n * Headings\r\n * by default, headings are always uppercase.\r\n * if text case must be preserved, use this the _preserve_case macros instead.\r\n */\r\n$typekit_h1 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  line-height: 42px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_preserve_case {\r\n  @extend $typekit_h1;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_subhead {\r\n  @extend $typekit_h1;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h2 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_preserve_case {\r\n  @extend $typekit_h2;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_subhead {\r\n  @extend $typekit_h2;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h3 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 28px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_preserve_case {\r\n  @extend $typekit_h3;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_subhead {\r\n  @extend $typekit_h3;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  line-height: 22px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_preserve_case {\r\n  @extend $typekit_h4;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_subhead {\r\n  @extend $typekit_h4;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4_italic {\r\n  @extend $typekit_h4_preserve_case;\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n$typekit_h5 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  line-height: 18px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_preserve_case {\r\n  @extend $typekit_h5;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_subhead {\r\n  @extend $typekit_h5;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h6 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_preserve_case {\r\n  @extend $typekit_h6;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_subhead {\r\n  @extend $typekit_h6;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h7 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  @extend $text-transform-uppercase;\r\n  font-weight: 500;\r\n  color: $color_palette_grey0;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  letter-spacing: 0.02625em;\r\n\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Body Text\r\n */\r\n$typekit_text_l {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_grey1;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 24px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_m {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 20px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_s {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_small {\r\n  @extend $typekit_text_s;\r\n  font-weight: 400;\r\n  letter-spacing: .05em;\r\n}\r\n\r\n$typekit_text_small_bold {\r\n  @extend $typekit_text_small;\r\n  font-weight: 550;\r\n}\r\n\r\n/*\r\n * Navigation\r\n */\r\nnav-active($width, $height) {\r\n  &.active {\r\n    position: relative;\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_nav {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n}\r\n\r\n$typekit_nav_secondary {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  &:lang(zh-tw) {\r\n    font-size: 14px;\r\n  }\r\n  font-weight: 500;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Labels\r\n */\r\n$typekit_label {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_label_bold {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 900;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Button Text\r\n */\r\n$typekit_button {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_gold3;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .0325em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n\r\n  &:hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n\r\n  &:disabled, &:disabled:hover, &[disabled='true'], &[disabled='true']:hover {\r\n    color: $color_palette_grey_disabled;\r\n    cursor: default;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_gold5;\r\n  }\r\n\r\n}\r\n\r\n$typekit_button_blue {\r\n  @extend $typekit_button;\r\n  color: $colors_ziggurat;\r\n\r\n  &:hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_blue4;\r\n  }\r\n}\r\n\r\n$typekit_button_red {\r\n  @extend $typekit_button;\r\n  color: $color_palette_mage;\r\n\r\n  &:hover {\r\n    color: $color_palette_mage2;\r\n  }\r\n\r\n  &:active {\r\n    color: $colors_crownOfThorns;\r\n  }\r\n}\r\n\r\n/*\r\n * Links\r\n */\r\n$typekit_link_base {\r\n  @extend $typekit_base;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  outline: 0;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_link_base_color {\r\n  color: $color_palette_gold2;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_link_external_base {\r\n  @extend $typekit_link_base;\r\n  color: $color_palette_blue3;\r\n  text-decoration: none;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:after {\r\n    width: 9px;\r\n    height: 9px;\r\n    content: '';\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-mask: url('../images/external-link-mask.png') no-repeat;\r\n    -webkit-mask-size: contain;\r\n    background-color: $color_palette_blue3;\r\n    margin: 0 0 0 5px;\r\n  }\r\n  &:lang(ar-ae):after {\r\n    margin: 0 5px 0 0;\r\n    transform: scaleX(-1);\r\n  }\r\n\r\n  &:hover:after {\r\n     background-color: $color_palette_blue1;\r\n  }\r\n}\r\n\r\n/* Internal links in Lol Body font */\r\n$typekit_link {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* Internal links in the Lol Display font */\r\n$typekit_link_display {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/* External links in Lol Body font */\r\n$typekit_link_external {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* External links in Lol Display font */\r\n$typekit_link_external_display {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n$typekit_footer {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Numbers\r\n */\r\n$typekit_num {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  background: linear-gradient(to bottom, $color_palette_gold2 0%, $color_palette_gold3 35%, #765c29 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n$typekit_num_l {\r\n  @extend $typekit_num;\r\n  font-size: 60px;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_m {\r\n  @extend $typekit_num;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_s {\r\n  @extend $typekit_num;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_num_stats {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Text Modifiers\r\n * _modifier_ typekit rules semantically defines text alteration rules to convey specific meaning.\r\n * They modify simply typography rules (color, weight, style, etc)\r\n * They are indended to be used in combination with other typekit macros.\r\n */\r\n$typekit_modifier_highlight {\r\n  color: $color_palette_gold1;\r\n}\r\n$typekit_modifier_subhead {\r\n  color: $color_palette_grey1;\r\n}\r\n/*\r\n * TODO: Add other modifiers for specific types of highlights like\r\n *  - coloring for game values (ability power, attack power, armor penetration, etc)\r\n */\r\n"],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, t, n) => {
            "use strict";
            var r = n(1),
                i = o(n(26)),
                a = o(n(96));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = class {
                constructor() {
                    this._registerComponents(), this._addVoiceSocialButton(), i.default.checkAndShowFtux(), a.default.evaluate().catch((e => {
                        r.logger.error(`voice-api -- team voice keybinding migration failed: ${e}`)
                    }))
                }
                voiceButton(e) {
                    const t = document.createElement("lol-parties-comm-button");
                    if (e)
                        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t.setAttribute(n, e[n]);
                    const n = this._voicePanel();
                    return t.setVoicePanel(n), t
                }
                _addVoiceSocialButton() {
                    r.Social.addSocialButton(this.voiceButton({
                        social: "true",
                        "data-dd-action-name": "button.social.voice"
                    }), "CommButton", 1)
                }
                _voicePanel() {
                    let e = this._panelInstance;
                    return e || (e = document.createElement("lol-parties-comm-panel"), this._panelInstance = e), e
                }
                _registerComponents() {
                    r.ComponentFactory.setFactory("lol-parties-comm-panel", (() => this._voicePanel()))
                }
                setPuuidsToNameOverrides(e) {
                    const t = this._voicePanel();
                    t && t.setPuuidsToNameOverrides && t.setPuuidsToNameOverrides(e)
                }
            }
        }],
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var a = t[r] = {
            id: r,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.exports
    }
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "/fe/lol-premade-voice/";
    n(0)
})();
//# sourceMappingURL=rcp-fe-lol-premade-voice.js.map