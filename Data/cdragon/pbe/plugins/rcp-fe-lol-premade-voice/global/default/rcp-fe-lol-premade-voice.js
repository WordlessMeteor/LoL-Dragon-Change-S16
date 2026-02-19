(() => {
    var e = [function(e, n, t) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const i = r(t(1)),
                a = r(t(2)),
                o = r(t(12));
            t(13);
            const l = "rcp-fe-lol-premade-voice",
                s = document.currentScript.ownerDocument;
            const c = window.getPluginAnnounceEventName(l);
            s.addEventListener(c, (function(e) {
                const n = e.registrationHandler;
                o.default.set(s), n((async e => {
                    await i.default.init(e, {
                        Audio: e => e.get("rcp-fe-audio"),
                        ComponentFactory: e => e.get("rcp-fe-common-libs").getComponentFactory("1"),
                        ContextualNotificationManager: e => e.get("rcp-fe-lol-uikit").getContextualNotificationManager(),
                        dataBinding: e => e.get("rcp-fe-common-libs").getDataBinding("rcp-fe-lol-premade-voice"),
                        FlyoutManager: e => e.get("rcp-fe-lol-uikit").getFlyoutManager(),
                        logger: e => e.get("rcp-fe-common-libs").logging.create(l),
                        ModalManager: e => e.get("rcp-fe-lol-uikit").getModalManager(),
                        Social: e => e.get("rcp-fe-lol-social"),
                        TemplateHelper: e => e.get("rcp-fe-lol-uikit").getTemplateHelper(),
                        TooltipManager: e => e.get("rcp-fe-lol-uikit").getTooltipManager(),
                        tra: e => e.get("rcp-fe-lol-l10n").tra().overlay("/fe/lol-l10n/trans.json").overlay("/fe/lol-premade-voice/trans.json"),
                        webComponents: e => e.get("rcp-fe-common-libs").getWebComponents(s)
                    }), await a.default.init(e, {
                        Settings: e => e.get("rcp-fe-lol-settings")
                    }), await i.default.tra.ready();
                    t(14)();
                    return new(t(82))
                }))
            }), {
                once: !0
            })
        }, e => {
            "use strict";
            let n;

            function t() {
                return n || (console.error("The `provider` object has not been set, please do so by calling the `init` method."), null)
            }
            const r = {
                init: function(e, t) {
                    return n = e, this.add(t)
                },
                _getValue: function(e, t) {
                    let r;
                    return "function" == typeof t ? (r = t(n), r || console.warn("The function for key " + e + " returned a falsy value: ", r)) : "string" == typeof t ? (r = n.get(t), r || console.warn("The provider `get` invocation for the key " + e + " returned a falsy value: ", r)) : "object" == typeof t && (r = t), r
                },
                add: function(e) {
                    e = e || {};
                    const n = [],
                        t = this;
                    return Object.keys(e).forEach((function(r) {
                        const i = e[r],
                            a = t._getValue(r, i);
                        a && a.then ? (a.then((function(e) {
                            e || console.warn("The promise for the key " + r + " resolved with a falsy value: ", e), t._addValue(r, e)
                        })), n.push(a)) : t._addValue(r, a)
                    })), Promise.all(n)
                },
                _addValue: function(e, n) {
                    this[e] = n
                },
                provider: function() {
                    return console.error("The function `provider` has been deprecated, please use `getProvider`", (new Error).stack), t()
                },
                getProvider: function() {
                    return t()
                }
            };
            e.exports = r
        }, function(e, n, t) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, n, t, r) {
                    void 0 === r && (r = t);
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, n, t, r) {
                    void 0 === r && (r = t), e[r] = n[t]
                }),
                i = this && this.__exportStar || function(e, n) {
                    for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(n, t) || r(n, e, t)
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.registerPlugin = function(e, n) {
                const t = document.currentScript?.ownerDocument || document,
                    r = window.getPluginAnnounceEventName(e);
                t.addEventListener(r, (({
                    registrationHandler: e
                }) => e((e => n(e, l)))), {
                    once: !0
                })
            };
            const o = a(t(3));
            i(t(4), n), i(t(8), n), i(t(11), n);
            const l = new o.default;
            n.default = l
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.default = class {
                _provider;
                _apis;
                constructor() {
                    this._provider = null, this._apis = {}
                }
                get apis() {
                    return this._apis
                }
                init(e, n) {
                    return this._provider = e, n ? this.add(n) : Promise.resolve(this)
                }
                add(e) {
                    const n = [];
                    let t;
                    for (t in e) {
                        const r = t,
                            i = e[r];
                        e[r] && n.push(this._addValue(r, i))
                    }
                    return Promise.all(n).then((() => this))
                }
                async addUntyped(e = {}) {
                    const n = Object.entries(e).map((async ([e, n]) => {
                        let t = "function" == typeof n ? n(this._provider) : n;
                        this._isPromise(t) && (t = await t), this[e] = t
                    }));
                    return await Promise.all(n), this
                }
                _addValue(e, n) {
                    if ("function" != typeof n) throw new Error(`TypedProviderProxy: The function for ${e} is not a function.`);
                    const t = n(this._provider);
                    return this._isPromise(t) ? (t.then((n => {
                        this._apis[e] = n
                    })), t) : (this._apis[e] = t, Promise.resolve(t))
                }
                _isPromise(e) {
                    return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then
                }
                getProvider() {
                    if (this._provider) return this._provider;
                    throw new Error("The `provider` object has not been set, please do so by calling the `init` method.")
                }
            }
        }, function(e, n, t) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, n, t, r) {
                    void 0 === r && (r = t);
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, n, t, r) {
                    void 0 === r && (r = t), e[r] = n[t]
                }),
                i = this && this.__exportStar || function(e, n) {
                    for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(n, t) || r(n, e, t)
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.SettingsCategoryName = n.SettingsCategory = void 0, i(t(5), n);
            var a = t(6);
            Object.defineProperty(n, "SettingsCategory", {
                enumerable: !0,
                get: function() {
                    return a.SettingsCategory
                }
            });
            var o = t(7);
            Object.defineProperty(n, "SettingsCategoryName", {
                enumerable: !0,
                get: function() {
                    return o.SettingsCategoryName
                }
            })
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ConstantsKey = void 0, n.ConstantsKey = {
                regionLocale: "regionLocale",
                commandLineArgs: "commandLineArgs",
                buildInfo: "buildInfo",
                systemInfo: "systemInfo",
                regionData: "regionData"
            }
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.SettingsCategory = void 0, n.SettingsCategory = {
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
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.SettingsCategoryName = void 0, n.SettingsCategoryName = {
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
        }, function(e, n, t) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, n, t, r) {
                    void 0 === r && (r = t);
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, n, t, r) {
                    void 0 === r && (r = t), e[r] = n[t]
                }),
                i = this && this.__exportStar || function(e, n) {
                    for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(n, t) || r(n, e, t)
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), i(t(9), n), i(t(10), n)
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = new class {
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
            n.default = t
        }, (e, n, t) => {
            "use strict";
            t.r(n)
        }, (e, n, t) => {
            "use strict";
            var r = c(t(15)),
                i = c(t(61)),
                a = c(t(65)),
                o = c(t(74)),
                l = c(t(79)),
                s = t(1);

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = function(e = document) {
                if (e.premadeVoiceElementsRegistered) return;
                const {
                    registerCustomElementV1: n
                } = s.webComponents;
                n(i.default), n(r.default), n(o.default), n(a.default), n(l.default), e.premadeVoiceElementsRegistered = !0
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = f(t(16)),
                i = t(1),
                a = f(t(17)),
                o = f(t(19)),
                l = f(t(20)),
                s = f(t(21)),
                c = f(t(22)),
                p = f(t(23)),
                d = f(t(24)),
                h = f(t(25)),
                u = f(t(26)),
                m = t(27),
                _ = t(28),
                A = function(e, n) {
                    if (!n && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = b(n);
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(t(29)),
                g = t(30),
                v = f(t(31));

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var n = new WeakMap,
                    t = new WeakMap;
                return (b = function(e) {
                    return e ? t : n
                })(e)
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const y = "chatParticipantsKey";
            class E extends r.default {
                templateMarkup() {
                    return t(32)
                }
                stylesheetMarkup() {
                    return t(33)
                }
                constructor() {
                    super(), this._participants = [], this._participantMap = new Map, this._teamParticipants = [], this._teamParticipantMap = new Map, this._multiUserChatId = null, this._gameflowPhase = "", this._isGameClientRunning = !1, this._lastVolumeUpdate = 0, this._lockOutMemberJoinSound = !1, this._clashRoster = null, this._headerType = g.HEADER_LOBBY, this._connectionState = m.VOICE_DISCONNECTED_STATE, this._teamConnectionState = m.VOICE_DISCONNECTED_STATE, this._updatingTeamCheckbox = !1, this._teamVoiceEnabled = !1, this._teamVoiceAvailability = !1, this._selectors = {
                        voicePanel: ".lol-premade-voice-panel",
                        currentPlayerChatIcon: ".lol-premade-voice-panel-cp-chat-icon",
                        headerText: ".lol-premade-voice-panel-header-text",
                        headerDefault: ".lol-premade-voice-panel-header-default",
                        headerClash: ".lol-premade-voice-panel-header-clash",
                        headerClashLogo: ".lol-premade-voice-panel-header-clash-logo",
                        headerClashShortName: ".lol-premade-voice-panel-header-clash-shortName",
                        headerClashName: ".lol-premade-voice-panel-header-clash-name",
                        partyHeader: ".lol-premade-voice-panel-party-header",
                        teamHeader: ".lol-premade-voice-panel-team-header",
                        teamHeaderText: ".lol-premade-voice-panel-team-header-text",
                        teamCheckbox: ".lol-premade-voice-panel-team-checkbox",
                        currentPlayerContent: ".lol-premade-voice-panel-current-player-content",
                        currentPlayerVolume: ".lol-premade-voice-panel-current-player-volume",
                        currentPlayerVolumeLabel: ".lol-premade-voice-panel-current-player-volume-label",
                        currentPlayerName: ".lol-premade-voice-panel-current-player-name lol-uikit-player-name",
                        participants: ".lol-premade-voice-panel-participants",
                        participantElement: "lol-parties-comm-participant",
                        currentPlayerMic: ".lol-premade-voice-panel-current-player-mic",
                        connectionState: ".lol-premade-voice-panel-connection-state",
                        connectionBar: ".lol-premade-voice-panel-connection-bar",
                        connectionIcon: ".lol-premade-voice-panel-connection-icon",
                        sliderElement: "lol-uikit-slider",
                        connectionCheckbox: ".lol-premade-voice-panel-connection-checkbox",
                        connectionStatus: ".lol-premade-voice-panel-connection-status",
                        settingsButton: ".lol-premade-voice-panel-current-player-settings",
                        haloElement: ".voice-panel-current-player-halo",
                        availability: ".lol-premade-voice-panel-availability",
                        availabilityMessage: ".lol-premade-voice-panel-message"
                    }, this._listeners = {
                        micLevelSlideChange: this._micLevelSlideChange.bind(this),
                        micLevelSlideEnd: this._micLevelSlideEnd.bind(this),
                        micLevelSlideStart: this._micLevelSlideStart.bind(this),
                        mute: this._toggleMute.bind(this),
                        connectionCheckboxChange: this._connectionCheckboxChange.bind(this),
                        connectionBarClick: this._connectionBarClick.bind(this),
                        teamCheckboxChange: this._teamCheckboxChange.bind(this),
                        settingsClicked: this._settingsClicked.bind(this),
                        willShow: this._willShow.bind(this),
                        willHide: this._willHide.bind(this),
                        voiceButtonEnabled: this._voiceButtonEnabled.bind(this)
                    }, this._initDataBinding()
                }
                connectedCallback() {
                    if (super.connectedCallback(), this._attachSliderTooltipDelegate(), this._refreshConnectionState(), this._teamVoiceEnabled && this._refreshTeamConnectionState(), this._updateConnectionBarVisibility(), this._setupHeader(), this.addInnerHtml(i.tra.get("parties_comm_panel_party_header"), this._selectors.partyHeader), this.addInnerHtml(i.tra.get("parties_comm_panel_team_header"), this._selectors.teamHeaderText), this.attachListener("change", this._listeners.micLevelSlideChange, this._selectors.currentPlayerVolume), this.attachListener("slideEnd", this._listeners.micLevelSlideEnd, this._selectors.currentPlayerVolume), this.attachListener("slideStart", this._listeners.micLevelSlideStart, this._selectors.currentPlayerVolume), this.attachListener("click", this._listeners.mute, this._selectors.currentPlayerMic), this.attachListener("change", this._listeners.connectionCheckboxChange, this._selectors.connectionCheckbox), this.attachListener("click", this._listeners.connectionBarClick, this._selectors.connectionBar), this.attachListener("change", this._listeners.teamCheckboxChange, this._selectors.teamCheckbox), this._currentPlayerPuuid) {
                        const e = this.shadowRoot.querySelector(this._selectors.currentPlayerName);
                        e && e.setAttribute("puuid", this._currentPlayerPuuid)
                    }
                    this.attachListener("click", this._listeners.settingsClicked, this._selectors.settingsButton), this.addEventListener("willShowVoicePanel", this._listeners.willShow), this.addEventListener("willHideVoicePanel", this._listeners.willHide), this.addEventListener("voiceButtonEnabled", this._listeners.voiceButtonEnabled)
                }
                _setupHeader() {
                    if (this.hide(this._selectors.headerClash), this.hide(this._selectors.headerDefault), this._headerType === g.HEADER_CLASH && this._clashRoster) this.addImg(this._clashRoster.logoUrl, this._selectors.headerClashLogo), this.addInnerHtml(this._clashRoster.shortName, this._selectors.headerClashShortName), this.addInnerHtml(this._clashRoster.name, this._selectors.headerClashName), this.show(this._selectors.headerClash);
                    else {
                        const e = this._teamVoiceEnabled ? "parties_comm_panel_header_text" : "parties_comm_panel_header_text_party_only";
                        this.addInnerHtml(i.tra.get(e), this._selectors.headerText), this.show(this._selectors.headerDefault)
                    }
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this.detachListener("slideEnd", this._listeners.micLevelSlideEnd, this._selectors.currentPlayerVolume), this.detachListener("click", this._listeners.mute, this._selectors.currentPlayerMic), this.detachListener("change", this._listeners.connectionCheckboxChange, this._selectors.connectionCheckbox), this.detachListener("click", this._listeners.connectionBarClick, this._selectors.connectionBar), this.detachListener("click", this._listeners.settingsClicked, this._selectors.settingsButton), this.detachListener("willShowVoicePanel", this._listeners.willShow), this.detachListener("willHideVoicePanel", this._listeners.willHide)
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "voice-panel"
                }
                _playJoinSound() {
                    this._playSound("/fe/lol-premade-voice/sfx-voicechat-notif-join.ogg")
                }
                _playLeaveSound() {
                    this._playSound("/fe/lol-premade-voice/sfx-voicechat-notif-leave.ogg")
                }
                _playDelayedJoinSound() {
                    this._memberJoinTimeout = setTimeout((() => {
                        this._playJoinSound(), this._lockOutMemberJoinSound = !1
                    }), 1500)
                }
                availabilityUpdated(e) {
                    this._availability = e || {}, this._checkAvailabilityMessaging(), this._handleDisconnectedState(this._availability.showDisconnectedState)
                }
                _handleDisconnectedState(e) {
                    const n = this.shadowRoot.querySelector(this._selectors.currentPlayerVolume);
                    e ? (this._updateConnectionState(m.VOICE_DISCONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility(), n && n.setAttribute("disabled", ""), this.addClass("disabled", this._selectors.currentPlayerContent)) : (n && n.removeAttribute("disabled"), this.removeClass("disabled", this._selectors.currentPlayerContent)), this._updateCurrentPlayerMuteButton()
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
                    const n = this._connectionState === m.VOICE_CONNECTED_STATE,
                        t = this._teamVoiceEnabled && n;
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
                    this._participants = e || [], this._participantMap = new Map(this._participants.map((e => [e.puuid, e]))), this._removeOldParticipants(), this._updateParticipants(), this._refreshConnectionState()
                }
                teamVoiceEnabledUpdated(e) {
                    this._teamVoiceEnabled = e, this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility()
                }
                teamVoiceAvailabilityUpdated(e) {
                    this._teamVoiceAvailability = e, this._updateTeamCheckboxState()
                }
                teamVoiceSessionUpdated(e) {
                    this._teamVoiceEnabled && (this._teamSession = e, this._teamParticipants = e && e.participants || [], this._teamParticipantMap = new Map(this._teamParticipants.map((e => [e.puuid, e]))), this._removeOldTeamParticipants(), this._updateTeamParticipants(), this._refreshTeamConnectionState())
                }
                _refreshConnectionState() {
                    this._participants.length > 0 ? this._updateConnectionState(m.VOICE_CONNECTED_STATE) : this._updateConnectionState(m.VOICE_DISCONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility(), this._checkAvailabilityMessaging()
                }
                settingsUpdated(e) {
                    this._settings = e, this._updateCurrentParticipant()
                }
                lobbyUpdated(e) {
                    const n = e || {};
                    n.multiUserChatId && n.multiUserChatId !== this._multiUserChatId && (this._conversations && this._chatParticipantsObserver(n.multiUserChatId), this._headerType = g.HEADER_LOBBY), this._multiUserChatId = n.multiUserChatId
                }
                clashRostersUpdated(e) {
                    const n = (e || []).find((e => e.tournamentState !== _.CLASH_ROSTER_STATE.IDLE));
                    n && n.multiUserChatId && (n.multiUserChatId !== this._multiUserChatId && (this._conversations && this._chatParticipantsObserver(n.multiUserChatId), this._headerType = g.HEADER_CLASH, this._clashRoster = n), this._multiUserChatId = n.multiUserChatId)
                }
                postgameStatsUpdated(e) {
                    if (e && e.multiUserChatId) {
                        const n = d.default.parseChatId(e.multiUserChatId);
                        n !== this._multiUserChatId && this._conversations && this._chatParticipantsObserver(n), this._multiUserChatId = n
                    }
                }
                gameflowSessionUpdated(e) {
                    e && e.gameClient && (this._isGameClientRunning = e.gameClient.running, this._updateSettingsButton())
                }
                sessionUpdated(e) {
                    if (!e || "ERROR" === e.state) return;
                    const n = !this._currentPlayerPuuid;
                    if (this._currentPlayerPuuid = e.puuid, this._setVoiceHaloPuuid(this._currentPlayerPuuid), this._currentPlayerSummonerId !== e.summonerId) {
                        this._currentPlayerSummonerId = e.summonerId;
                        const n = this.shadowRoot.querySelector(this._selectors.currentPlayerName);
                        n && n.setAttribute("puuid", this._currentPlayerPuuid)
                    }
                    n && this._updateParticipants()
                }
                chatParticipantsUpdated(e) {
                    this._chatParticipants = e, e && e.length > 0 && e.forEach((e => {
                        const n = this.shadowRoot.querySelector(`[summoner-id="${e.summonerId}"]`);
                        n && n.updateChatParticipant(e)
                    }))
                }
                currentPlayerChatInfoUpdated(e) {
                    if (!e) return;
                    const {
                        availability: n
                    } = e, t = e.icon, r = this.shadowRoot.querySelector(this._selectors.currentPlayerChatIcon);
                    r && n && t && (r.setAttribute("availability", n), r.setAttribute("icon-id", t))
                }
                conversationsUpdated(e) {
                    this._conversations = e, this._chatParticipantsObserver(this._multiUserChatId)
                }
                _chatParticipantsObserver(e) {
                    if (h.default.removeObservers(y), this._conversations && e) {
                        const n = this._conversations.find((n => n.id.indexOf(e) > -1));
                        n && (h.default.createObserver(y, `/v1/conversations/${encodeURIComponent(n.id)}/participants`), h.default.observe(y, this.chatParticipantsUpdated.bind(this)))
                    }
                }
                _chatParticipant(e) {
                    let n = null;
                    return this._chatParticipants && this._chatParticipants.length > 0 && (n = this._chatParticipants.find((n => n.summonerId === e))), n
                }
                _getTranslatedString(e) {
                    return i.tra.get(`parties_comm_panel_state_${e}`)
                }
                _updateConnectionState(e) {
                    const n = this._connectionState;
                    if (n !== e) {
                        this._connectionState = e;
                        const t = this.shadowRoot.querySelector(this._selectors.connectionCheckbox);
                        t && (t.checked = e === m.VOICE_CONNECTED_STATE, t.disabled = e === m.VOICE_CONNECTING_STATE);
                        const r = this._getTranslatedString(this._connectionState),
                            i = this._teamVoiceEnabled ? this._selectors.connectionStatus : this._selectors.connectionState;
                        this.removeClass(n, i), this.addClass(this._connectionState, i), this.addInnerHtml(r, i)
                    }
                }
                _updateTeamHeaderVisibility() {
                    this._teamVoiceEnabled && this._connectionState === m.VOICE_CONNECTED_STATE ? this.removeClass("hide", this._selectors.teamHeader) : this.addClass("hide", this._selectors.teamHeader)
                }
                _updateConnectionBarVisibility() {
                    const e = this.shadowRoot.querySelector(this._selectors.connectionBar),
                        n = this.shadowRoot.querySelector(this._selectors.connectionCheckbox),
                        t = this.shadowRoot.querySelector(this._selectors.connectionStatus);
                    this._teamVoiceEnabled ? (e && (e.style.display = "none"), n && (n.style.display = ""), t && (t.style.display = "")) : (e && (e.style.display = "", e.classList.remove("connected", "disconnected", "connecting"), e.classList.add(this._connectionState)), n && (n.style.display = "none"), t && (t.style.display = "none"))
                }
                _updateTeamConnectionState(e) {
                    if (this._teamConnectionState !== e) {
                        this._teamConnectionState = e;
                        const n = this.shadowRoot.querySelector(this._selectors.teamCheckbox);
                        n && (this._updatingTeamCheckbox = !0, n.checked = e === m.VOICE_CONNECTED_STATE, n.disabled = e === m.VOICE_CONNECTING_STATE || !this._teamVoiceAvailability, this._updatingTeamCheckbox = !1)
                    }
                }
                _updateTeamCheckboxState() {
                    const e = this.shadowRoot.querySelector(this._selectors.teamCheckbox);
                    if (e) {
                        const n = this._teamConnectionState === m.VOICE_CONNECTED_STATE,
                            t = this._teamConnectionState === m.VOICE_CONNECTING_STATE;
                        e.disabled = !n && (t || !this._teamVoiceAvailability)
                    }
                }
                _refreshTeamConnectionState() {
                    this._teamSession && Object.keys(this._teamSession).length > 0 ? this._updateTeamConnectionState(m.VOICE_CONNECTED_STATE) : this._updateTeamConnectionState(m.VOICE_DISCONNECTED_STATE)
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
                    return this._lockConnectionButton(), this._connectionState === m.VOICE_DISCONNECTED_STATE && this._isVoiceEligible() ? (this._updateConnectionState(m.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, a.default.connect().then((() => {
                        this._joinVoiceSessionSuccess(), this._unlockConnectionButton()
                    })).catch((e => {
                        this._joinVoiceSessionFailed(e), this._unlockConnectionButton()
                    }))) : this._connectionState === m.VOICE_CONNECTED_STATE ? a.default.disconnect().then((() => {
                        this._leaveVoiceSessionSuccess(), this._unlockConnectionButton()
                    })) : (this._unlockConnectionButton(), Promise.resolve())
                }
                _connectionMouseEnter() {
                    if (this._connectionState === m.VOICE_DISCONNECTED_STATE && this._isVoiceEligible()) {
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
                    if (!this._teamVoiceEnabled) return this._connectionState === m.VOICE_DISCONNECTED_STATE ? (this._updateConnectionState(m.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, a.default.connect().then(this._joinVoiceSessionSuccess.bind(this)).catch((e => {
                        this._joinVoiceSessionFailed(e)
                    }))) : this._connectionState === m.VOICE_CONNECTED_STATE ? a.default.disconnect().then(this._leaveVoiceSessionSuccess.bind(this)) : void 0
                }
                _connectionCheckboxChange(e) {
                    const n = e.target,
                        t = n.checked;
                    return t && this._connectionState === m.VOICE_DISCONNECTED_STATE ? (this._updateConnectionState(m.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, a.default.connect().then(this._joinVoiceSessionSuccess.bind(this)).catch((e => {
                        this._joinVoiceSessionFailed(e), n.checked = !1
                    }))) : t || this._connectionState !== m.VOICE_CONNECTED_STATE ? void 0 : a.default.disconnect().then(this._leaveVoiceSessionSuccess.bind(this))
                }
                _teamCheckboxChange(e) {
                    if (!this._teamVoiceEnabled || this._updatingTeamCheckbox) return;
                    const n = e.target,
                        t = n.checked;
                    return t && this._teamConnectionState === m.VOICE_DISCONNECTED_STATE ? (this._updateTeamConnectionState(m.VOICE_CONNECTING_STATE), this._lockOutMemberJoinSound = !0, o.default.connect().then(this._joinTeamVoiceSessionSuccess.bind(this)).catch((e => {
                        this._joinTeamVoiceSessionFailed(e), n.checked = !1
                    }))) : t || this._teamConnectionState !== m.VOICE_CONNECTED_STATE ? void 0 : o.default.disconnect().then(this._leaveTeamVoiceSessionSuccess.bind(this))
                }
                _leaveVoiceSessionSuccess() {
                    this._updateConnectionState(m.VOICE_DISCONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility(), this._playLeaveSound()
                }
                _joinVoiceSessionSuccess() {
                    this._updateConnectionState(m.VOICE_CONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility(), this._playJoinSound(), clearTimeout(this._memberJoinTimeout), this._memberJoinTimeout = setTimeout((() => {
                        this._lockOutMemberJoinSound = !1
                    }), 500)
                }
                _joinVoiceSessionFailed(e) {
                    if (e && e.data) {
                        this._lockOutMemberJoinSound = !1;
                        const n = e.data.message;
                        i.logger.warning(`Failed to join voice channel: ${n}`), this._updateConnectionState(m.VOICE_DISCONNECTED_STATE), this._updateTeamHeaderVisibility(), this._updateConnectionBarVisibility()
                    }
                }
                _leaveTeamVoiceSessionSuccess() {
                    this._updateTeamConnectionState(m.VOICE_DISCONNECTED_STATE), this._playLeaveSound()
                }
                _joinTeamVoiceSessionSuccess() {
                    this._updateTeamConnectionState(m.VOICE_CONNECTED_STATE), this._playJoinSound(), clearTimeout(this._memberJoinTimeout), this._memberJoinTimeout = setTimeout((() => {
                        this._lockOutMemberJoinSound = !1
                    }), 500)
                }
                _joinTeamVoiceSessionFailed(e) {
                    if (e && e.data) {
                        this._lockOutMemberJoinSound = !1;
                        const n = e.data.message;
                        i.logger.warning(`Failed to join team voice channel: ${n}`), this._updateTeamConnectionState(m.VOICE_DISCONNECTED_STATE)
                    }
                }
                _removeOldParticipants() {
                    const e = this.shadowRoot.querySelectorAll(this._selectors.participantElement);
                    if (e && e.length > 0) {
                        const n = Array.from(e);
                        let t = !1;
                        n.forEach((e => {
                            const n = e.getAttribute("participant-id");
                            this._participantMap.get(n) || (e.remove(), t = !0)
                        })), t && (this._playLeaveSound(), this._updatePartyHeaderVisibility())
                    }
                }
                _updateParticipants() {
                    if (this._participants && this._participants.length > 0 && this._currentPlayerPuuid) {
                        let e = 0;
                        this._participants.forEach((n => {
                            if (n.puuid !== this._currentPlayerPuuid) {
                                this._updateMemberParticipant(n) || (e += 1)
                            }
                        })), e > 0 && !this._lockOutMemberJoinSound && this._playDelayedJoinSound()
                    }
                    this._updatePartyHeaderVisibility()
                }
                _updatePartyHeaderVisibility() {
                    this._participants.filter((e => e.puuid !== this._currentPlayerPuuid)).length > 0 ? this.removeClass("hide", this._selectors.partyHeader) : this.addClass("hide", this._selectors.partyHeader)
                }
                _removeOldTeamParticipants() {
                    const e = this.shadowRoot.querySelectorAll('[data-team-participant="true"]');
                    if (e && e.length > 0) {
                        const n = Array.from(e);
                        let t = !1;
                        n.forEach((e => {
                            const n = e.getAttribute("puuid");
                            this._teamParticipantMap.get(n) || (e.remove(), t = !0)
                        })), t && this._playLeaveSound()
                    }
                }
                _updateTeamParticipants() {
                    if (this._teamParticipants && this._teamParticipants.length > 0 && this._currentPlayerPuuid) {
                        let e = 0;
                        this._teamParticipants.forEach((n => {
                            if (n.puuid !== this._currentPlayerPuuid) {
                                this._updateTeamMemberParticipant(n) || (e += 1)
                            }
                        })), e > 0 && !this._lockOutMemberJoinSound && this._playDelayedJoinSound()
                    }
                }
                _updateTeamMemberParticipant(e) {
                    const n = this.shadowRoot.querySelector(`[data-team-participant="true"][puuid="${e.puuid}"]`);
                    if (n) return n.updateSelf(e), !0;
                    {
                        const n = this.shadowRoot.querySelector(this._selectors.participants),
                            t = this.shadowRoot.querySelector(this._selectors.teamHeader),
                            r = this._createParticipantElement(e);
                        return r.setAttribute("data-team-participant", "true"), n && t ? t.parentNode.insertBefore(r, t.nextSibling) : n && n.appendChild(r), !1
                    }
                }
                _updateMemberParticipant(e) {
                    const n = this.shadowRoot.querySelector(`[participant-id="${e.puuid}"]`);
                    if (n) return n.updateSelf(e), !0;
                    {
                        const n = this.shadowRoot.querySelector(this._selectors.participants),
                            t = this.shadowRoot.querySelector(this._selectors.teamHeader),
                            r = this._createParticipantElement(e);
                        return n && t ? n.insertBefore(r, t) : this.addChildElement(r, this._selectors.participants), !1
                    }
                }
                _updateCurrentParticipant() {
                    this._updateCurrentPlayerMuteButton();
                    let e = 0;
                    this._settings && this._settings.micLevel && this._settings.micLevel > 0 && (e = this._settings.micLevel), this._updateCurrentPlayerVolume(e, !this._micLevelUpdating)
                }
                _updateCurrentPlayerVolume(e, n = !0) {
                    const t = this.shadowRoot.querySelector(this._selectors.sliderElement);
                    if (t && !this._micLevelUpdating && t.setAttribute("value", e), n) {
                        const n = i.tra.formatString("parties_comm_panel_slider_percentage", {
                            percentage: e
                        });
                        this.addInnerHtml(n, this._selectors.currentPlayerVolumeLabel)
                    }
                }
                _updateSettingsButton() {
                    this._isGameClientRunning ? this.addClass("disabled", this._selectors.settingsButton) : this.removeClass("disabled", this._selectors.settingsButton), this._attachSettingsTooltip()
                }
                _micLevelSlideEnd(e) {
                    this._micLevelUpdating = !1, this._micLevelSlideChange(e, !0)
                }
                _micLevelSlideStart() {
                    this._micLevelUpdating = !0
                }
                _micLevelSlideChange(e, n = !1) {
                    if (this._updateCurrentPlayerVolume(e.value), !n) {
                        const e = (new Date).getTime();
                        if (e - this._lastVolumeUpdate < 250) return;
                        this._lastVolumeUpdate = e
                    }
                    a.default.changeMicLevelSelf(e.value)
                }
                _updateCurrentPlayerMuteButton() {
                    this._availability && this._settings && (this._availability.showDisconnectedState || this._settings.inputMode === A.INPUT_MODE_PUSH_TO_TALK ? (this.addClass("disabled", this._selectors.currentPlayerMic), this.removeClass("muted", this._selectors.currentPlayerMic)) : (this.removeClass("disabled", this._selectors.currentPlayerMic), this._settings && this._settings.localMicMuted ? this.addClass("muted", this._selectors.currentPlayerMic) : this.removeClass("muted", this._selectors.currentPlayerMic)), this._attachMuteSelfTooltip())
                }
                _createParticipantElement(e) {
                    const n = document.createElement(this._selectors.participantElement);
                    n.setAttribute("puuid", e.puuid), n.updateSelf(e);
                    const t = this._chatParticipant(e.summonerId);
                    return n.updateChatParticipant(t), n
                }
                _initDataBinding() {
                    this.lobbyDataListener = this.lobbyUpdated.bind(this), p.default.observe("lobby", this.lobbyDataListener), p.default.lobby().then(this.lobbyDataListener), this.clashChatListener = this.clashRostersUpdated.bind(this), u.default.observe("rosters", this.clashChatListener), u.default.clashRosters().then(this.clashChatListener), this.gameflowSessionListener = this.gameflowSessionUpdated.bind(this), s.default.observe("session", this.gameflowSessionListener), s.default.session().then(this.gameflowSessionListener), this.postgameStatsListener = this.postgameStatsUpdated.bind(this), d.default.observe("stats", this.postgameStatsListener), d.default.stats().then(this.postgameStatsListener), this.availabilityDataListener = this.availabilityUpdated.bind(this), a.default.observe("availability", this.availabilityDataListener), a.default.availability().then(this.availabilityDataListener), this.participantsDataListener = this.participantsUpdated.bind(this), a.default.observe("participants", this.participantsDataListener), a.default.participants().then(this.participantsDataListener), this.settingsDataListener = this.settingsUpdated.bind(this), a.default.observe("settings", this.settingsDataListener), a.default.settings().then(this.settingsDataListener), this.sessionDataListener = this.sessionUpdated.bind(this), c.default.observe("session", this.sessionDataListener), c.default.session().then(this.sessionDataListener), this.currentPlayerChatInfoListener = this.currentPlayerChatInfoUpdated.bind(this), h.default.observe("me", this.currentPlayerChatInfoListener), h.default.me().then(this.currentPlayerChatInfoListener), this.conversationsListener = this.conversationsUpdated.bind(this), h.default.observe("conversations", this.conversationsListener), h.default.conversations().then(this.conversationsListener), this.teamVoiceEnabledListener = this.teamVoiceEnabledUpdated.bind(this), l.default.observe("teamVoiceEnabled", this.teamVoiceEnabledListener), l.default.teamVoiceEnabled().then(this.teamVoiceEnabledListener), this.teamVoiceAvailabilityListener = this.teamVoiceAvailabilityUpdated.bind(this), o.default.observe("availability", this.teamVoiceAvailabilityListener), o.default.availability().then(this.teamVoiceAvailabilityListener), this.teamVoiceSessionListener = this.teamVoiceSessionUpdated.bind(this), o.default.observe("session", this.teamVoiceSessionListener), o.default.session().then(this.teamVoiceSessionListener)
                }
                _showMicrophonePermissionsModal() {
                    const e = i.tra.get("voice_microphone_permissions_modal_header"),
                        n = i.tra.get("voice_microphone_permissions_modal_body"),
                        t = {
                            type: "DialogAlert",
                            data: {
                                contents: i.TemplateHelper.contentBlockDialog(e, n, "dialog-small", "voice-microphone-permissions-alert"),
                                okText: i.tra.get("voice_microphone_permissions_modal_confirm")
                            },
                            show: !0
                        };
                    i.ModalManager.add(t)
                }
                _toggleMute() {
                    this._settings && this._settings.inputMode !== A.INPUT_MODE_PUSH_TO_TALK && a.default.checkMicrophonePermissions().then((e => {
                        e ? a.default.muteSelf(!this._settings.localMicMuted) : this._showMicrophonePermissionsModal()
                    }))
                }
                _settingsClicked() {
                    this._isGameClientRunning || (0, A.default)()
                }
                _setVoiceHaloPuuid(e) {
                    const n = e || "",
                        t = this.shadowRoot.querySelector(this._selectors.haloElement);
                    t && t.setAttribute("puuid", n)
                }
                _attachMuteSelfTooltip() {
                    if (!this._settings || !this._settings.inputMode) return;
                    const e = this.shadowRoot.querySelector(this._selectors.currentPlayerMic);
                    let n;
                    n = this._settings.inputMode === A.INPUT_MODE_PUSH_TO_TALK ? i.tra.get("parties_comm_panel_tooltip_mute_disabled") : this._settings.localMicMuted ? i.tra.get("parties_comm_panel_tooltip_unmute_self") : i.tra.get("parties_comm_panel_tooltip_mute_self"), v.default.attachSmallTooltip(e, n)
                }
                _attachSettingsTooltip() {
                    const e = this.shadowRoot.querySelector(this._selectors.settingsButton);
                    let n;
                    n = this._isGameClientRunning ? i.tra.get("parties_comm_panel_tooltip_settings_disabled") : i.tra.get("parties_comm_panel_tooltip_settings"), v.default.attachSmallTooltip(e, n)
                }
                _willHide() {
                    this.removeClass("show", this._selectors.voicePanel), this._playSound("/fe/lol-premade-voice/sfx-soc-ui-chatwindow-close.ogg")
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
                        return i.tra.formatString("parties_comm_panel_tooltip_mic_level", {
                            value: e
                        })
                    }))
                }
            }
            E.tagName = "lol-parties-comm-panel";
            var x = E;
            n.default = x
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = t(1);
            class i extends r.webComponents.ShadowElement {
                addClass(e, n) {
                    const t = n ? this.shadowRoot.querySelector(n) : this;
                    t && !t.classList.contains(e) && t.classList.add(e)
                }
                removeClass(e, n) {
                    const t = n ? this.shadowRoot.querySelector(n) : this;
                    t && t.classList.contains(e) && t.classList.remove(e)
                }
                attachListener(e, n, t) {
                    const r = t ? this.shadowRoot.querySelector(t) : this;
                    r && r.addEventListener(e, n)
                }
                detachListener(e, n, t) {
                    const r = t ? this.shadowRoot.querySelector(t) : this;
                    r && r.removeEventListener(e, n)
                }
                addInnerHtml(e, n) {
                    const t = n ? this.shadowRoot.querySelector(n) : this;
                    t && (t.innerHTML = e)
                }
                addImg(e, n) {
                    const t = n ? this.shadowRoot.querySelector(n) : this;
                    t && (t.src = e)
                }
                show(e) {
                    const n = e ? this.shadowRoot.querySelector(e) : this;
                    n && n.style && (n.style.display = "")
                }
                hide(e) {
                    const n = e ? this.shadowRoot.querySelector(e) : this;
                    n && n.style && (n.style.display = "none")
                }
                addChildElement(e, n) {
                    const t = n ? this.shadowRoot.querySelector(n) : this;
                    t && t.appendChild(e)
                }
                _playSound(e) {
                    if (!1 === e) return;
                    r.Audio.getChannel("sfx-ui").createSound(e).play()
                }
            }
            var a = i;
            n.default = a
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._voiceBinding = this.dataBinding("/lol-premade-voice"), this.createObserver("availability", "/v1/availability"), this.createObserver("participants", "/v1/participants"), this.createObserver("settings", "/v1/settings"), this.createObserver("mictest", "/v1/mic-test"), this.createObserver("firstExperience", "/v1/first-experience")
                }
                availability() {
                    return this._voiceBinding.get("/v1/availability")
                }
                participants() {
                    return this._voiceBinding.get("/v1/participants")
                }
                settings() {
                    return this._voiceBinding.get("/v1/settings")
                }
                firstExperience() {
                    return this._voiceBinding.get("/v1/first-experience")
                }
                mute(e, n) {
                    const t = `/v1/participants/${e}/mute`;
                    return this._voiceBinding.put(t, n ? 1 : 0)
                }
                changeVolume(e, n) {
                    const t = `/v1/participants/${e}/volume`;
                    return this._voiceBinding.put(t, n)
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
            n.default = o
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e, n) {
                if (!n && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i(n);
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        l && (l.get || l.set) ? Object.defineProperty(r, o, l) : r[o] = e[o]
                    } r.default = e, t && t.set(e, r);
                return r
            }(t(1));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var n = new WeakMap,
                    t = new WeakMap;
                return (i = function(e) {
                    return e ? t : n
                })(e)
            }
            var a = class {
                constructor() {
                    this._observers = {}, this._binding = null
                }
                dataBinding(e) {
                    return this._binding = (0, r.dataBinding)(e, r.default.getProvider().getSocket()), this._binding
                }
                createObserver(e, n) {
                    e && n && (this._observers[e] = {
                        path: n,
                        callbacks: []
                    }, this._binding && this._binding.observe(n, this, (n => {
                        this._publishToObserver(this._observers[e], n)
                    })))
                }
                observe(e, n) {
                    n && e && this._observers[e] && this._observers[e].callbacks.push(n)
                }
                removeObservers(e) {
                    if (!e) return;
                    const n = this._observers[e];
                    n && (this._binding && this._binding.unobserve(n.path, this), delete this._observers[e])
                }
                _publishToObserver(e, n) {
                    const {
                        callbacks: t
                    } = e;
                    t && t.length > 0 && t.forEach((e => {
                        "function" == typeof e && e(n)
                    }))
                }
            };
            n.default = a
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._teamVoiceBinding = this.dataBinding("/lol-team-voice"), this.createObserver("availability", "/v1/availability"), this.createObserver("session", "/v1/session")
                }
                availability() {
                    return this._teamVoiceBinding.get("/v1/availability")
                }
                session() {
                    return this._teamVoiceBinding.get("/v1/session")
                }
                connect() {
                    return this._teamVoiceBinding.post("/v1/session")
                }
                disconnect() {
                    return this._teamVoiceBinding.delete("/v1/session")
                }
                mute(e, n) {
                    return this._teamVoiceBinding.put(`/v1/participants/${e}/mute/${n}`)
                }
                changeVolume(e, n) {
                    return this._teamVoiceBinding.put(`/v1/participants/${e}/volume/${n}`)
                }
            }
            var o = new a;
            n.default = o
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
                default: r
            };
            class a extends i.default {
                constructor() {
                    super(), this._clientConfigBinding = this.dataBinding("/lol-client-config"), this.createObserver("teamVoiceEnabled", "/v3/client-config/lol.client_settings.team_voice.enabled")
                }
                teamVoiceEnabled() {
                    return this._clientConfigBinding.get("/v3/client-config/lol.client_settings.team_voice.enabled")
                }
            }
            var o = new a;
            n.default = o
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
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
            n.default = o
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
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
            n.default = o
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
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
            n.default = o
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
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
            n.default = o
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
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
            n.default = o
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, i = (r = t(18)) && r.__esModule ? r : {
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
            n.default = o
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.VOICE_DISCONNECTED_STATE = n.VOICE_CONNECTING_STATE = n.VOICE_CONNECTED_STATE = void 0;
            n.VOICE_CONNECTED_STATE = "connected";
            n.VOICE_DISCONNECTED_STATE = "disconnected";
            n.VOICE_CONNECTING_STATE = "connecting"
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.CLASH_ROSTER_STATE = void 0;
            n.CLASH_ROSTER_STATE = {
                IDLE: "IDLE",
                LOCK_IN: "LOCK_IN",
                IN_GAME: "IN_GAME",
                RESULTS: "RESULTS"
            }
        }, function(e, n, t) {
            "use strict";
            var r, i = this && this.__createBinding || (Object.create ? function(e, n, t, r) {
                    void 0 === r && (r = t);
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, n, t, r) {
                    void 0 === r && (r = t), e[r] = n[t]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                o = this && this.__importStar || (r = function(e) {
                    return r = Object.getOwnPropertyNames || function(e) {
                        var n = [];
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[n.length] = t);
                        return n
                    }, r(e)
                }, function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t = r(e), o = 0; o < t.length; o++) "default" !== t[o] && i(n, e, t[o]);
                    return a(n, e), n
                });
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.INPUT_MODE_PUSH_TO_TALK = void 0, n.default = function() {
                l.default.apis.Settings?.show(l.SettingsCategoryName.VOICE)
            };
            const l = o(t(2));
            n.INPUT_MODE_PUSH_TO_TALK = "pushToTalk"
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.HEADER_LOBBY = n.HEADER_CLASH = void 0;
            n.HEADER_LOBBY = "header-lobby";
            n.HEADER_CLASH = "header-clash"
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = t(1);
            var i = {
                attachSmallTooltip: function(e, n, t, i, a) {
                    if (!e || !n) return;
                    t = t || {
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
                    s.innerHTML = n, l.appendChild(s), o.appendChild(l), r.TooltipManager.assign(e, o, null, {
                        targetAnchor: t,
                        tooltipAnchor: i,
                        showDelay: a
                    })
                },
                removeTooltip: function(e) {
                    r.TooltipManager.unassign(e)
                }
            };
            n.default = i
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-premade-voice-panel">\r\n    <div class="lol-premade-voice-panel-header">\r\n      <div class="lol-premade-voice-panel-header-default">\r\n        <div class="lol-premade-voice-panel-header-text"></div>\r\n        <div class="lol-premade-voice-panel-connection-status"></div>\r\n        <input type="checkbox" class="lol-premade-voice-panel-connection-checkbox" />\r\n      </div>\r\n      <div class="lol-premade-voice-panel-header-clash">\r\n        <img class="lol-premade-voice-panel-header-clash-logo" />\r\n        <div class="lol-premade-voice-panel-header-clash-title">\r\n          <div class="lol-premade-voice-panel-header-clash-shortName"></div>\r\n          <div class="lol-premade-voice-panel-header-clash-name"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <lol-uikit-scrollable class="lol-premade-voice-panel-participants lol-premade-voice-panel-content">\r\n      <div class="lol-premade-voice-panel-party-header"></div>\r\n      <div class="lol-premade-voice-panel-team-header hide">\r\n        <div class="lol-premade-voice-panel-team-header-text"></div>\r\n        <input type="checkbox" class="lol-premade-voice-panel-team-checkbox" />\r\n      </div>\r\n    </lol-uikit-scrollable>\r\n    <div class="lol-premade-voice-panel-availability lol-premade-voice-panel-content hide">\r\n      <div class="lol-premade-voice-panel-poro"></div>\r\n      <div class="lol-premade-voice-panel-message"></div>\r\n    </div>\r\n    <div class="lol-premade-voice-panel-connection-bar">\r\n      <div class="lol-premade-voice-panel-connection-state"></div>\r\n      <div class="lol-premade-voice-panel-connection-icon"></div>\r\n    </div>\r\n    <div class="lol-premade-voice-panel-current-player">\r\n      <div class="lol-premade-voice-panel-player-highlight"></div>\r\n      <div class="voice-panel-avatar-wrapper">\r\n        <lol-parties-comm-halo class="voice-panel-current-player-halo" size="small">\r\n          <lol-social-avatar-icon\r\n            class="lol-premade-voice-panel-cp-chat-icon"\r\n            icon-id=""\r\n            availability=""\r\n            show-availability="true"\r\n          >\r\n          </lol-social-avatar-icon>\r\n        </lol-parties-comm-halo>\r\n      </div>\r\n      <div class="lol-premade-voice-panel-current-player-content">\r\n        <div class="lol-premade-voice-panel-current-player-row">\r\n          <div class="lol-premade-voice-panel-current-player-name">\r\n            <lol-uikit-player-name format="tooltip" puuid="" />\r\n          </div>\r\n          <div class="lol-premade-voice-panel-current-player-volume-label"></div>\r\n        </div>\r\n        <lol-uikit-slider\r\n          for="currentPlayerVolume"\r\n          percentage\r\n          value="0"\r\n          class="lol-premade-voice-panel-current-player-volume"\r\n          clickset="true"\r\n        >\r\n        </lol-uikit-slider>\r\n      </div>\r\n      <div class="lol-premade-voice-panel-current-player-buttons">\r\n        <div class="lol-premade-voice-panel-current-player-mic"></div>\r\n        <div class="lol-premade-voice-panel-current-player-deafen"></div>\r\n        <div class="lol-premade-voice-panel-current-player-settings"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, n, t) => {
            var r = t(34),
                i = t(35),
                a = t(36),
                o = t(37),
                l = t(38),
                s = t(39),
                c = t(40),
                p = t(41),
                d = t(42),
                h = t(43),
                u = t(44),
                m = t(45),
                _ = t(46),
                A = t(47),
                g = t(48),
                v = t(49),
                b = t(50),
                f = t(51),
                y = t(52),
                E = t(53),
                x = t(54),
                C = t(55),
                k = t(56),
                B = t(57),
                w = t(58),
                S = t(59),
                $ = t(60),
                T = i(r),
                P = a(o),
                O = a(l),
                D = a(s),
                M = a(c),
                I = a(p),
                L = a(d),
                V = a(h),
                j = a(u),
                N = a(m),
                R = a(_),
                U = a(A),
                z = a(g),
                H = a(v),
                F = a(b),
                Y = a(f),
                Q = a(y),
                G = a(E),
                q = a(x),
                W = a(C),
                J = a(k),
                Z = a(B),
                X = a(w),
                K = a(S),
                ee = a($);
            T.push([e.id, '.lol-premade-voice-panel .lol-premade-voice-panel-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  font-family: var(--font-display);\n}\n.lol-premade-voice-panel,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-availability .lol-premade-voice-panel-message {\n  font-family: var(--font-body);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  font-family: var(--font-display);\n}\n.lol-premade-voice-panel,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-availability .lol-premade-voice-panel-message {\n  font-family: var(--font-body);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  -webkit-user-select: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  text-transform: uppercase;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(ko-kr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(ja-jp),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(tr-tr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(el-gr),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(th-th),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(zh-tw),\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(zh-tw),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(zh-tw),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(zh-tw) {\n  text-transform: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName {\n  color: #f0e6d2;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: 0.05em;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header,\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  color: #f0e6d2;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.075em;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(ar-ae),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header:lang(ar-ae),\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash {\n  color: #a09b8c;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 20px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash {\n  color: #f0e6d2;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content lol-uikit-slider {\n  width: 155px;\n  height: 15px;\n  --slider-base-before-top: 7px;\n  --slider-btn-cursor: pointer;\n  --slider-btn-width: 15px;\n  --slider-btn-height: 15px;\n  --slider-btn-hover-background-position: 0 -15px;\n  --slider-btn-active-background-position: 0 -30px;\n  --slider-fill-top: 6px;\n}\n:host {\n  width: 288px;\n  overflow: hidden;\n}\n.lol-premade-voice-panel {\n  display: flex;\n  flex-direction: column;\n  background: #010a13;\n  border: thin solid #1e2328;\n  cursor: default;\n  opacity: 0;\n  transform: translateY(350px);\n  transform-origin: center bottom;\n  transition: transform 500ms cubic-bezier(0.02, 0.85, 0.08, 0.99), opacity 300ms ease;\n  position: relative;\n  height: 317px;\n}\n.lol-premade-voice-panel:lang(ar-ae) {\n  direction: rtl;\n}\n.lol-premade-voice-panel.show {\n  opacity: 1;\n  transform: translateY(0);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 47px;\n  border-bottom: thin solid #463714;\n  align-items: center;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-grow: 1;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  color: #f0e6d2;\n  margin: 0 0 0 8px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-header-text:lang(ar-ae) {\n  margin: 0 8px 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-status {\n  font-size: 12px;\n  margin: 0 0 0 8px;\n  color: #a09b8c;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-status:lang(ar-ae) {\n  margin: 0 8px 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-status.connected {\n  color: #3cb44b;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-status.disconnected {\n  color: #a09b8c;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-status.connecting {\n  color: #cdbe91;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-checkbox {\n  margin: 0 8px 0 auto;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-checkbox:lang(ar-ae) {\n  margin: 0 auto 0 8px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-default .lol-premade-voice-panel-connection-checkbox:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash {\n  display: none;\n  color: #f0e6d2;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 47px;\n  padding-left: 8px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-logo {\n  display: inline;\n  height: 32px;\n  width: 32px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-shortName {\n  color: #c8aa6e;\n  flex-direction: row;\n  margin-left: 7px;\n  margin-right: 7px;\n  display: inline;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-header .lol-premade-voice-panel-header-clash .lol-premade-voice-panel-header-clash-title .lol-premade-voice-panel-header-clash-name {\n  text-overflow: ellipsis;\n  max-width: 150px;\n  flex-direction: row;\n  display: inline;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-content {\n  display: flex;\n  height: 216px;\n  padding: 0px 11px;\n  box-sizing: border-box;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants {\n  flex-direction: column;\n  visibility: visible;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header {\n  color: #f0e6d2;\n  margin: 8px 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-party-header.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header {\n  color: #f0e6d2;\n  margin: 8px 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header.hide {\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-header-text {\n  flex-grow: 1;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-checkbox {\n  margin: 0 0 0 auto;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants .lol-premade-voice-panel-team-header .lol-premade-voice-panel-team-checkbox:lang(ar-ae) {\n  margin: 0 auto 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants lol-parties-comm-participant {\n  height: 54px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-participants.hide {\n  visibility: hidden;\n  margin: 0px;\n  height: 0px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-availability {\n  flex-direction: column;\n  align-items: center;\n  color: #3c3c41;\n  justify-content: center;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-availability .lol-premade-voice-panel-poro {\n  background-image: url(' + P + ");\n  background-size: cover;\n  width: 128px;\n  height: 128px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-availability .lol-premade-voice-panel-message {\n  width: 180px;\n  text-align: center;\n  font-size: 14px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-availability.hide {\n  display: none;\n  margin: 0px;\n  height: 0px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar {\n  display: flex;\n  justify-content: space-between;\n  height: 32px;\n  width: 100%;\n  align-items: center;\n  background: linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n  border-bottom: thin solid #1e2328;\n  cursor: default;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar:hover {\n  background: rgba(255,255,255,0.1);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected {\n  color: #3cb44b;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected.button-hover {\n  color: #f0e6d2;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected .lol-premade-voice-panel-connection-icon {\n  background-image: url(" + O + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected .lol-premade-voice-panel-connection-icon:hover {\n  background-image: url(" + D + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connected .lol-premade-voice-panel-connection-icon:active {\n  background-image: url(" + M + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected {\n  color: #a09b8c;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected.button-hover {\n  color: #f0e6d2;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected .lol-premade-voice-panel-connection-icon {\n  background-image: url(" + I + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected .lol-premade-voice-panel-connection-icon:hover {\n  background-image: url(" + L + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.disconnected .lol-premade-voice-panel-connection-icon:active {\n  background-image: url(" + V + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar.connecting {\n  color: #cdbe91;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-state {\n  font-size: 14px;\n  flex-grow: 1;\n  margin: 0 0 0 7px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-state:lang(ar-ae) {\n  margin: 0 7px 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-icon {\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  margin: 0 7px 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-icon:lang(ar-ae) {\n  margin: 0 0 0 7px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-connection-bar .lol-premade-voice-panel-connection-icon.locked {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player {\n  display: flex;\n  flex-direction: row;\n  height: 54px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player:hover {\n  background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-player-highlight {\n  display: flex;\n  width: 7px;\n  background-color: #785a28;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-buttons {\n  display: flex;\n  position: absolute;\n  bottom: 11px;\n  right: 11px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-buttons:lang(ar-ae) {\n  right: auto;\n  left: 11px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic {\n  background-image: url(" + j + ");\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic:hover {\n  background-image: url(" + N + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic:active {\n  background-image: url(" + R + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic.muted {\n  background-image: url(" + U + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic.muted:hover {\n  background-image: url(" + z + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic.muted:active {\n  background-image: url(" + H + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-mic.disabled {\n  background-image: url(" + F + ");\n  cursor: default;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen {\n  background-image: url(" + Y + ");\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n  margin: 0 5px 0 5px;\n  cursor: pointer;\n  display: none;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen:hover {\n  background-image: url(" + Q + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen:active {\n  background-image: url(" + G + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen.deafened {\n  background-image: url(" + q + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen.deafened:hover {\n  background-image: url(" + W + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-deafen.deafened:active {\n  background-image: url(" + J + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings {\n  background-image: url(" + Z + ");\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings:hover {\n  background-image: url(" + X + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings:active {\n  background-image: url(" + K + ");\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings.disabled,\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings .disabled:hover,\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player .lol-premade-voice-panel-current-player-settings .disabled:active {\n  background-image: url(" + ee + ");\n  cursor: default;\n}\n.lol-premade-voice-panel .voice-panel-avatar-wrapper {\n  align-self: center;\n  margin: 0 8px 0 4px;\n}\n.lol-premade-voice-panel .voice-panel-avatar-wrapper:lang(ar-ae) {\n  margin: 0 4px 0 8px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  color: #cdbe91;\n  margin: 11px 0 11px 3px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content:lang(ar-ae) {\n  margin: 11px 3px 11px 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content .lol-premade-voice-panel-current-player-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content .lol-premade-voice-panel-current-player-row .lol-premade-voice-panel-current-player-name {\n  max-width: 130px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content .lol-premade-voice-panel-current-player-row .lol-premade-voice-panel-current-player-volume-label {\n  margin: 0 2px 0 0;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content .lol-premade-voice-panel-current-player-row .lol-premade-voice-panel-current-player-volume-label:lang(ar-ae) {\n  margin: 0 0 0 2px;\n}\n.lol-premade-voice-panel .lol-premade-voice-panel-current-player-content.disabled {\n  color: #3c3c41;\n}\n", "", {
                version: 3,
                sources: ["webpack://./node_modules/riotclient-lol-asset-csslib/styles/fonts.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/voice-panel/style.styl", "webpack://./node_modules/riotclient-lol-asset-csslib/styles/typekit.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl"],
                names: [],
                mappings: "AAAA;;;;;EACE,gCAAa;ACKf;ADFA;;;EACE,6BAAa;ACMf;ADXA;;;;;EACE,gCAAa;ACiBf;ADdA;;;EACE,6BAAa;ACkBf;ACbA;;;;;EACE,yBAAqB;ADmBvB;ACPA;;;;;EAEE,oBAAc;EACd,uCAA+B;EAC/B,mCAAwB;ADY1B;ACJA;;;;EACE,yBAAgB;ADSlB;ACRE;;;;;;;;;;;;;;;;;;;;;;;;EAME,oBAAgB;AD4BpB;ACsFA;EAIE,cAAO;EACP,eAAW;EACX,gBAAa;EACb,iBAAa;EACb,sBAAgB;ADvFlB;ACwFE;EACE,iBAAgB;ADtFpB;AC8GA;;;EAIE,cAAO;EACP,eAAW;EACX,gBAAa;EACb,iBAAa;EACb,uBAAgB;AD7GlB;AC8GE;;;EACE,iBAAgB;AD1GpB;AC2LA;EAGE,cAAO;EACP,eAAW;EACX,mBAAa;EACb,iBAAa;EACb,uBAAgB;EAIhB,4CAAwB;AD9L1B;AC2LE;EACE,iBAAgB;ADzLpB;ACkgBA;EACE,cAAO;ADhgBT;AE3CE;EACE,YAAO;EACP,YAAQ;EAER,6BAA0B;EAC1B,4BAAqB;EACrB,wBAAoB;EACpB,yBAAqB;EACrB,+CAAwC;EACxC,gDAAyC;EACzC,sBAAmB;AF4CvB;AAjHA;EACE,YAAO;EACP,gBAAU;AAmHZ;AAhHA;EAEE,aAAS;EACT,sBAAgB;EAChB,mBAAY;EACZ,0BAAQ;EACR,eAAQ;EACR,UAAS;EACT,4BAAW;EACX,+BAAkB;EAClB,oFAAyD;EACzD,kBAAU;EACV,aAAQ;AAiHV;AAhHE;EACE,cAAW;AAkHf;AA/GE;EACE,UAAS;EACT,wBAAW;AAiHf;AA9GE;EAEE,aAAS;EACT,mBAAgB;EAChB,eAAW;EACX,WAAO;EACP,YAAQ;EACR,iCAAe;EACf,mBAAa;AA+GjB;AA7GI;EACE,aAAS;EACT,mBAAgB;EAChB,mBAAa;EACb,YAAW;AA+GjB;AA7GM;EAEE,aAAS;EACT,sBAAgB;EAChB,eAAW;EACX,cAAO;EACP,iBAAQ;AA8GhB;AA7GQ;EACE,iBAAQ;AA+GlB;AA3GM;EACE,eAAW;EACX,iBAAQ;EACR,cAAO;AA6Gf;AA5GQ;EACE,iBAAQ;AA8GlB;AA3GQ;EACE,cAAO;AA6GjB;AA1GQ;EACE,cAAO;AA4GjB;AAzGQ;EACE,cAAO;AA2GjB;AAvGM;EACE,oBAAQ;EACR,eAAQ;EACR,WAAO;EACP,YAAQ;AAyGhB;AAxGQ;EACE,oBAAQ;AA0GlB;AAxGQ;EACE,YAAS;EACT,mBAAQ;AA0GlB;AArGI;EACE,aAAS;EAGT,cAAO;EACP,aAAS;EACT,mBAAa;EACb,yBAAiB;EACjB,YAAQ;EACR,iBAAc;EACd,sBAAY;EACZ,cAAa;EACb,gBAAU;AAqGhB;AAnGM;EACE,eAAS;EACT,YAAQ;EACR,WAAO;AAqGf;AAjGQ;EAEE,cAAO;EACP,mBAAgB;EAChB,gBAAa;EACb,iBAAc;EACd,eAAS;AAkGnB;AA/FQ;EACE,uBAAe;EACf,gBAAW;EACX,mBAAgB;EAChB,eAAS;AAiGnB;AA3FE;EACE,aAAS;EACT,aAAQ;EACR,iBAAS;EACT,sBAAY;AA6FhB;AA1FE;EACE,sBAAgB;EAChB,mBAAY;AA4FhB;AA1FI;EAEE,cAAO;EACP,aAAQ;AA2Fd;AAzFM;EACE,aAAS;AA2FjB;AAvFI;EAEE,cAAO;EACP,aAAQ;EACR,aAAS;EACT,mBAAgB;EAChB,mBAAa;AAwFnB;AAtFM;EACE,aAAS;AAwFjB;AArFM;EACE,YAAW;AAuFnB;AApFM;EACE,kBAAQ;EACR,eAAQ;EACR,WAAO;EACP,YAAQ;AAsFhB;AArFQ;EACE,kBAAQ;AAuFlB;AAlFI;EACE,YAAQ;AAoFd;AAjFI;EACE,kBAAY;EACZ,WAAQ;EACR,WAAQ;AAmFd;AA/EE;EACE,sBAAgB;EAChB,mBAAa;EACb,cAAO;EACP,uBAAiB;AAiFrB;AA/EI;EACE,yDAA6D;EAC7D,sBAAiB;EACjB,YAAO;EACP,aAAQ;AAiFd;AA9EI;EAEE,YAAO;EACP,kBAAY;EACZ,eAAW;AA+EjB;AA5EI;EACE,aAAS;EACT,WAAQ;EACR,WAAQ;AA8Ed;AA1EE;EACE,aAAS;EACT,8BAAiB;EACjB,YAAQ;EACR,WAAO;EACP,mBAAa;EACb,uFAAY;EACZ,iCAAe;EACf,eAAQ;AA4EZ;AA1EI;EACE,iCAAY;AA4ElB;AAzEI;EACE,cAAO;AA2Eb;AA1EM;EACE,cAAO;AA4Ef;AA1EM;EACE,yDAAqE;AA4E7E;AA1EM;EACE,yDAAmE;AA4E3E;AA1EM;EACE,yDAAmE;AA4E3E;AAxEI;EACE,cAAO;AA0Eb;AAxEM;EACE,cAAO;AA0Ef;AAxEM;EACE,yDAAoE;AA0E5E;AAxEM;EACE,yDAAkE;AA0E1E;AAxEM;EACE,yDAAkE;AA0E1E;AAtEI;EACE,cAAO;AAwEb;AArEI;EACE,eAAW;EACX,YAAW;EACX,iBAAQ;AAuEd;AAtEM;EACE,iBAAQ;AAwEhB;AApEI;EACE,sBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,eAAQ;EACR,iBAAQ;AAsEd;AArEM;EACE,iBAAQ;AAuEhB;AApEM;EACE,oBAAgB;EAChB,YAAS;AAsEjB;AAhEE;EACE,aAAS;EACT,mBAAgB;EAChB,YAAQ;AAkEZ;AAhEI;EACE,yFAAY;AAkElB;AA/DI;EACE,aAAS;EACT,UAAO;EACP,yBAAkB;AAiExB;AA9DI;EACE,aAAS;EACT,kBAAU;EACV,YAAQ;EACR,WAAO;AAgEb;AA/DM;EACE,WAAO;EACP,UAAM;AAiEd;AA7DI;EACE,yDAA8D;EAC9D,sBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,eAAQ;AA+Dd;AA7DM;EACE,yDAA4D;AA+DpE;AA5DM;EACE,yDAA4D;AA8DpE;AA3DM;EACE,0DAAoE;AA6D5E;AA3DQ;EACE,0DAAkE;AA6D5E;AA1DQ;EACE,0DAAkE;AA4D5E;AAxDM;EACE,0DAA+D;EAC/D,eAAQ;AA0DhB;AAtDI;EACE,0DAAiE;EACjE,sBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,mBAAQ;EACR,eAAQ;EACR,aAAS;AAwDf;AAtDM;EACE,0DAA+D;AAwDvE;AArDM;EACE,0DAA+D;AAuDvE;AApDM;EACE,0DAAmE;AAsD3E;AApDQ;EACE,0DAAiE;AAsD3E;AAnDQ;EACE,0DAAiE;AAqD3E;AAhDI;EACE,0DAAmE;EACnE,sBAAiB;EACjB,WAAO;EACP,YAAQ;EACR,eAAQ;AAkDd;AAhDM;EACE,0DAAiE;AAkDzE;AA/CM;EACE,0DAAiE;AAiDzE;AA/CM;;;EACE,0DAAoE;EACpE,eAAQ;AAmDhB;AA9CE;EACE,kBAAY;EACZ,mBAAQ;AAgDZ;AA/CI;EACE,mBAAQ;AAiDd;AA7CE;EACE,aAAS;EACT,sBAAgB;EAChB,eAAW;EACX,cAAO;EACP,uBAAQ;AA+CZ;AA9CI;EACE,uBAAQ;AAgDd;AA7CI;EACE,aAAS;EACT,mBAAgB;EAChB,8BAAiB;AA+CvB;AA7CM;EACE,gBAAW;EACX,mBAAa;EACb,uBAAe;EACf,gBAAU;AA+ClB;AA5CM;EACE,iBAAQ;AA8ChB;AA7CQ;EACE,iBAAQ;AA+ClB;AA1CI;EACE,cAAO;AA4Cb",
                sourcesContent: ["$fonts_lol_display {\r\n  font-family: var(--font-display);\r\n}\r\n\r\n$fonts_lol_body {\r\n  font-family: var(--font-body);\r\n}\r\n\r\n/**\r\n * Deprecated, keeping just to not break thiings abruptly.\r\n */\r\n\r\n$fonts_beaufort {\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n$fonts_spiegel {\r\n  @extend $fonts_lol_body;\r\n}\r\n", "@require 'riotclient-lol-asset-csslib/styles/color-palette';\r\n@require 'riotclient-lol-asset-csslib/styles/fonts';\r\n@require 'riotclient-lol-asset-csslib/styles/typekit';\r\n@require '../shared.styl';\r\n\r\n$imagesPath = '../../images';\r\n\r\n:host {\r\n  width: 288px;\r\n  overflow: hidden;\r\n}\r\n\r\n.lol-premade-voice-panel {\r\n  @extend $fonts_lol_body;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: alpha($color_palette_almostBlack, 1);\r\n  border: thin solid $color_palette_grey3;\r\n  cursor: default;\r\n  opacity: 0;\r\n  transform: translateY(350px);\r\n  transform-origin: center bottom;\r\n  transition: transform 500ms cubic-bezier(.02,.85,.08,.99), opacity 300ms ease;\r\n  position: relative;\r\n  height: 317px;\r\n  &:lang(ar-ae) {\r\n    direction: rtl;\r\n  }\r\n\r\n  &.show {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .lol-premade-voice-panel-header {\r\n    @extend $fonts_lol_display;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    height: 47px;\r\n    border-bottom: thin solid $color_palette_gold6;\r\n    align-items: center;\r\n\r\n    .lol-premade-voice-panel-header-default {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      flex-grow: 1;\r\n\r\n      .lol-premade-voice-panel-header-text {\r\n        @extend $typekit_h5;\r\n        display: flex;\r\n        flex-direction: column;\r\n        font-size: 14px;\r\n        color: $color_palette_gold1;\r\n        margin: 0 0 0 8px;\r\n        &:lang(ar-ae) {\r\n          margin: 0 8px 0 0;\r\n        }\r\n      }\r\n\r\n      .lol-premade-voice-panel-connection-status {\r\n        font-size: 12px;\r\n        margin: 0 0 0 8px;\r\n        color: $color_palette_grey1;\r\n        &:lang(ar-ae) {\r\n          margin: 0 8px 0 0;\r\n        }\r\n\r\n        &.connected {\r\n          color: #3cb44b;\r\n        }\r\n\r\n        &.disconnected {\r\n          color: $color_palette_grey1;\r\n        }\r\n\r\n        &.connecting {\r\n          color: $color_palette_gold2;\r\n        }\r\n      }\r\n\r\n      .lol-premade-voice-panel-connection-checkbox {\r\n        margin: 0 8px 0 auto;\r\n        cursor: pointer;\r\n        width: 16px;\r\n        height: 16px;\r\n        &:lang(ar-ae) {\r\n          margin: 0 auto 0 8px;\r\n        }\r\n        &:disabled {\r\n          opacity: 0.5;\r\n          cursor: not-allowed;\r\n        }\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-header-clash {\r\n      display: none;\r\n      @extend $typekit_text_m;\r\n      @extend $typekit_modifier_highlight;\r\n      color: $color_palette_gold1;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: flex-end;\r\n      height: 47px;\r\n      padding-left: 8px;\r\n      box-sizing: border-box;\r\n      flex-shrink: 0;\r\n      overflow: hidden;\r\n\r\n      .lol-premade-voice-panel-header-clash-logo {\r\n        display: inline;\r\n        height: 32px;\r\n        width: 32px;\r\n      }\r\n\r\n      .lol-premade-voice-panel-header-clash-title {\r\n        .lol-premade-voice-panel-header-clash-shortName {\r\n          @extend $typekit_h4;\r\n          color: $color_palette_gold3;\r\n          flex-direction: row;\r\n          margin-left: 7px;\r\n          margin-right: 7px;\r\n          display: inline;\r\n        }\r\n\r\n        .lol-premade-voice-panel-header-clash-name {\r\n          text-overflow: ellipsis;\r\n          max-width: 150px;\r\n          flex-direction: row;\r\n          display: inline;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-content {\r\n    display: flex;\r\n    height: 216px;\r\n    padding: 0px 11px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .lol-premade-voice-panel-participants {\r\n    flex-direction: column;\r\n    visibility: visible;\r\n\r\n    .lol-premade-voice-panel-party-header {\r\n      @extend $typekit_h5;\r\n      color: $color_palette_gold1;\r\n      margin: 8px 0;\r\n\r\n      &.hide {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-team-header {\r\n      @extend $typekit_h5;\r\n      color: $color_palette_gold1;\r\n      margin: 8px 0;\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n\r\n      &.hide {\r\n        display: none;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-header-text {\r\n        flex-grow: 1;\r\n      }\r\n\r\n      .lol-premade-voice-panel-team-checkbox {\r\n        margin: 0 0 0 auto;\r\n        cursor: pointer;\r\n        width: 16px;\r\n        height: 16px;\r\n        &:lang(ar-ae) {\r\n          margin: 0 auto 0 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    lol-parties-comm-participant {\r\n      height: 54px;\r\n    }\r\n\r\n    &.hide {\r\n      visibility: hidden;\r\n      margin: 0px;\r\n      height: 0px;\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-availability {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: $color_palette_grey2;\r\n    justify-content: center;\r\n\r\n    .lol-premade-voice-panel-poro {\r\n      background-image: url(pathjoin($imagesPath, 'voice-poro.png'));\r\n      background-size: cover;\r\n      width: 128px;\r\n      height: 128px;\r\n    }\r\n\r\n    .lol-premade-voice-panel-message {\r\n      @extend $fonts_lol_body;\r\n      width: 180px;\r\n      text-align: center;\r\n      font-size: 14px;\r\n    }\r\n\r\n    &.hide {\r\n      display: none;\r\n      margin: 0px;\r\n      height: 0px;\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-connection-bar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 32px;\r\n    width: 100%;\r\n    align-items: center;\r\n    background: linear-gradient(to top, rgba(255,255,255,.1) 0%,rgba(255,255,255,0) 100%);\r\n    border-bottom: thin solid $color_palette_grey3;\r\n    cursor: default;\r\n\r\n    &:hover {\r\n      background: rgba(255, 255, 255, .1);\r\n    }\r\n\r\n    &.connected {\r\n      color: #3cb44b;\r\n      &.button-hover {\r\n        color: $color_palette_gold1;\r\n      }\r\n      .lol-premade-voice-panel-connection-icon {\r\n        background-image: url(pathjoin($imagesPath, 'disconnect-default.png'));\r\n      }\r\n      .lol-premade-voice-panel-connection-icon:hover {\r\n        background-image: url(pathjoin($imagesPath, 'disconnect-hover.png'));\r\n      }\r\n      .lol-premade-voice-panel-connection-icon:active {\r\n        background-image: url(pathjoin($imagesPath, 'disconnect-click.png'));\r\n      }\r\n    }\r\n\r\n    &.disconnected {\r\n      color: $color_palette_grey1;\r\n\r\n      &.button-hover {\r\n        color: $color_palette_gold1;\r\n      }\r\n      .lol-premade-voice-panel-connection-icon {\r\n        background-image: url(pathjoin($imagesPath, 'reconnect-default.png'));\r\n      }\r\n      .lol-premade-voice-panel-connection-icon:hover {\r\n        background-image: url(pathjoin($imagesPath, 'reconnect-hover.png'));\r\n      }\r\n      .lol-premade-voice-panel-connection-icon:active {\r\n        background-image: url(pathjoin($imagesPath, 'reconnect-click.png'));\r\n      }\r\n    }\r\n\r\n    &.connecting {\r\n      color: $color_palette_gold2;\r\n    }\r\n\r\n    .lol-premade-voice-panel-connection-state {\r\n      font-size: 14px;\r\n      flex-grow: 1;\r\n      margin: 0 0 0 7px;\r\n      &:lang(ar-ae) {\r\n        margin: 0 7px 0 0;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-connection-icon {\r\n      background-size: cover;\r\n      width: 18px;\r\n      height: 18px;\r\n      cursor: pointer;\r\n      margin: 0 7px 0 0;\r\n      &:lang(ar-ae) {\r\n        margin: 0 0 0 7px;\r\n      }\r\n\r\n      &.locked {\r\n        pointer-events: none;\r\n        opacity: 0.3;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-current-player {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 54px;\r\n\r\n    &:hover {\r\n      background: linear-gradient(to right, rgba(255,255,255,.1) 0%,rgba(255,255,255,0) 100%);\r\n    }\r\n\r\n    .lol-premade-voice-panel-player-highlight {\r\n      display: flex;\r\n      width: 7px;\r\n      background-color: $color_palette_gold5;\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-buttons {\r\n      display: flex;\r\n      position: absolute;\r\n      bottom: 11px;\r\n      right: 11px;\r\n      &:lang(ar-ae) {\r\n        right: auto;\r\n        left: 11px;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-mic {\r\n      background-image: url(pathjoin($imagesPath, 'mic-default.png'));\r\n      background-size: cover;\r\n      width: 18px;\r\n      height: 18px;\r\n      cursor: pointer;\r\n\r\n      &:hover {\r\n        background-image: url(pathjoin($imagesPath, 'mic-hover.png'));\r\n      }\r\n\r\n      &:active {\r\n        background-image: url(pathjoin($imagesPath, 'mic-click.png'));\r\n      }\r\n\r\n      &.muted {\r\n        background-image: url(pathjoin($imagesPath, 'mic-muted-default.png'));\r\n\r\n        &:hover {\r\n          background-image: url(pathjoin($imagesPath, 'mic-muted-hover.png'));\r\n        }\r\n\r\n        &:active {\r\n          background-image: url(pathjoin($imagesPath, 'mic-muted-click.png'));\r\n        }\r\n      }\r\n\r\n      &.disabled {\r\n        background-image: url(pathjoin($imagesPath, 'mic-disabled.png'));\r\n        cursor: default;\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-deafen {\r\n      background-image: url(pathjoin($imagesPath, 'deafen-default.png'));\r\n      background-size: cover;\r\n      width: 18px;\r\n      height: 18px;\r\n      margin: 0 5px 0 5px;\r\n      cursor: pointer;\r\n      display: none; // TODO: display when we decide to include this.\r\n\r\n      &:hover {\r\n        background-image: url(pathjoin($imagesPath, 'deafen-hover.png'));\r\n      }\r\n\r\n      &:active {\r\n        background-image: url(pathjoin($imagesPath, 'deafen-click.png'));\r\n      }\r\n\r\n      &.deafened {\r\n        background-image: url(pathjoin($imagesPath, 'deafened-default.png'));\r\n\r\n        &:hover {\r\n          background-image: url(pathjoin($imagesPath, 'deafened-hover.png'));\r\n        }\r\n\r\n        &:active {\r\n          background-image: url(pathjoin($imagesPath, 'deafened-click.png'));\r\n        }\r\n      }\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-settings {\r\n      background-image: url(pathjoin($imagesPath, 'settings-default.png'));\r\n      background-size: cover;\r\n      width: 18px;\r\n      height: 18px;\r\n      cursor: pointer;\r\n\r\n      &:hover {\r\n        background-image: url(pathjoin($imagesPath, 'settings-hover.png'));\r\n      }\r\n\r\n      &:active {\r\n        background-image: url(pathjoin($imagesPath, 'settings-click.png'));\r\n      }\r\n      &.disabled, .disabled:hover, .disabled:active {\r\n        background-image: url(pathjoin($imagesPath, 'settings-disabled.png'));\r\n        cursor: default;\r\n      }\r\n    }\r\n  }\r\n\r\n  .voice-panel-avatar-wrapper {\r\n    align-self: center;\r\n    margin: 0 8px 0 4px;\r\n    &:lang(ar-ae) {\r\n      margin: 0 4px 0 8px;\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-current-player-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 14px;\r\n    color: $color_palette_gold2;\r\n    margin: 11px 0 11px 3px;\r\n    &:lang(ar-ae) {\r\n      margin: 11px 3px 11px 0;\r\n    }\r\n\r\n    .lol-premade-voice-panel-current-player-row {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n\r\n      .lol-premade-voice-panel-current-player-name {\r\n        max-width: 130px;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n      }\r\n\r\n      .lol-premade-voice-panel-current-player-volume-label {\r\n        margin: 0 2px 0 0;\r\n        &:lang(ar-ae) {\r\n          margin: 0 0 0 2px;\r\n        }\r\n      }\r\n    }\r\n\r\n    &.disabled {\r\n      color: $color_palette_grey2;\r\n    }\r\n\r\n    @extend $small-slider;\r\n  }\r\n}\r\n", "\r\n@import 'fonts';\r\n@import 'color-palette';\r\n\r\n/*\r\n * User Interaction Macros\r\n */\r\n$user_selectable {\r\n  -webkit-user-select: all;\r\n}\r\n$user_unselectable {\r\n  -webkit-user-select: none;\r\n}\r\n$user_draggable {\r\n  -webkit-user-drag: element;\r\n}\r\n$user_undraggable {\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/*\r\n * Base Text Treatment\r\n */\r\n$typekit_base {\r\n  @extend $user_unselectable;\r\n  font-kerning: normal;\r\n  -webkit-font-feature-settings: \"kern\" 1;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*\r\n * Uppercase Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-uppercase {\r\n  text-transform: uppercase;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n/*\r\n * Capitalized Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-capitalize {\r\n  text-transform: capitalize;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n$text-transform-none {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n * Headings\r\n * by default, headings are always uppercase.\r\n * if text case must be preserved, use this the _preserve_case macros instead.\r\n */\r\n$typekit_h1 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  line-height: 42px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_preserve_case {\r\n  @extend $typekit_h1;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_subhead {\r\n  @extend $typekit_h1;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h2 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_preserve_case {\r\n  @extend $typekit_h2;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_subhead {\r\n  @extend $typekit_h2;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h3 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 28px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_preserve_case {\r\n  @extend $typekit_h3;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_subhead {\r\n  @extend $typekit_h3;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  line-height: 22px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_preserve_case {\r\n  @extend $typekit_h4;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_subhead {\r\n  @extend $typekit_h4;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4_italic {\r\n  @extend $typekit_h4_preserve_case;\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n$typekit_h5 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  line-height: 18px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_preserve_case {\r\n  @extend $typekit_h5;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_subhead {\r\n  @extend $typekit_h5;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h6 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_preserve_case {\r\n  @extend $typekit_h6;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_subhead {\r\n  @extend $typekit_h6;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h7 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  @extend $text-transform-uppercase;\r\n  font-weight: 500;\r\n  color: $color_palette_grey0;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  letter-spacing: 0.02625em;\r\n\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Body Text\r\n */\r\n$typekit_text_l {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_grey1;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 24px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_m {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 20px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_s {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_small {\r\n  @extend $typekit_text_s;\r\n  font-weight: 400;\r\n  letter-spacing: .05em;\r\n}\r\n\r\n$typekit_text_small_bold {\r\n  @extend $typekit_text_small;\r\n  font-weight: 550;\r\n}\r\n\r\n/*\r\n * Navigation\r\n */\r\nnav-active($width, $height) {\r\n  &.active {\r\n    position: relative;\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_nav {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n}\r\n\r\n$typekit_nav_secondary {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  &:lang(zh-tw) {\r\n    font-size: 14px;\r\n  }\r\n  font-weight: 500;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Labels\r\n */\r\n$typekit_label {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_label_bold {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 900;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Button Text\r\n */\r\n$typekit_button {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_gold3;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .0325em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n\r\n  &:hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n\r\n  &:disabled, &:disabled:hover, &[disabled='true'], &[disabled='true']:hover {\r\n    color: $color_palette_grey_disabled;\r\n    cursor: default;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_gold5;\r\n  }\r\n\r\n}\r\n\r\n$typekit_button_blue {\r\n  @extend $typekit_button;\r\n  color: $colors_ziggurat;\r\n\r\n  &:hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_blue4;\r\n  }\r\n}\r\n\r\n$typekit_button_red {\r\n  @extend $typekit_button;\r\n  color: $color_palette_mage;\r\n\r\n  &:hover {\r\n    color: $color_palette_mage2;\r\n  }\r\n\r\n  &:active {\r\n    color: $colors_crownOfThorns;\r\n  }\r\n}\r\n\r\n/*\r\n * Links\r\n */\r\n$typekit_link_base {\r\n  @extend $typekit_base;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  outline: 0;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_link_base_color {\r\n  color: $color_palette_gold2;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_link_external_base {\r\n  @extend $typekit_link_base;\r\n  color: $color_palette_blue3;\r\n  text-decoration: none;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:after {\r\n    width: 9px;\r\n    height: 9px;\r\n    content: '';\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-mask: url('../images/external-link-mask.png') no-repeat;\r\n    -webkit-mask-size: contain;\r\n    background-color: $color_palette_blue3;\r\n    margin: 0 0 0 5px;\r\n  }\r\n  &:lang(ar-ae):after {\r\n    margin: 0 5px 0 0;\r\n    transform: scaleX(-1);\r\n  }\r\n\r\n  &:hover:after {\r\n     background-color: $color_palette_blue1;\r\n  }\r\n}\r\n\r\n/* Internal links in Lol Body font */\r\n$typekit_link {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* Internal links in the Lol Display font */\r\n$typekit_link_display {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/* External links in Lol Body font */\r\n$typekit_link_external {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* External links in Lol Display font */\r\n$typekit_link_external_display {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n$typekit_footer {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Numbers\r\n */\r\n$typekit_num {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  background: linear-gradient(to bottom, $color_palette_gold2 0%, $color_palette_gold3 35%, #765c29 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n$typekit_num_l {\r\n  @extend $typekit_num;\r\n  font-size: 60px;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_m {\r\n  @extend $typekit_num;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_s {\r\n  @extend $typekit_num;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_num_stats {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Text Modifiers\r\n * _modifier_ typekit rules semantically defines text alteration rules to convey specific meaning.\r\n * They modify simply typography rules (color, weight, style, etc)\r\n * They are indended to be used in combination with other typekit macros.\r\n */\r\n$typekit_modifier_highlight {\r\n  color: $color_palette_gold1;\r\n}\r\n$typekit_modifier_subhead {\r\n  color: $color_palette_grey1;\r\n}\r\n/*\r\n * TODO: Add other modifiers for specific types of highlights like\r\n *  - coloring for game values (ability power, attack power, armor penetration, etc)\r\n */\r\n", "$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}"],
                sourceRoot: ""
            }]), e.exports = T
        }, e => {
            "use strict";
            e.exports = function(e) {
                var n = e[1],
                    t = e[3];
                if (!t) return n;
                if ("function" == typeof btoa) {
                    var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                        i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
                        a = "/*# ".concat(i, " */");
                    return [n].concat([a]).join("\n")
                }
                return [n].join("\n")
            }
        }, e => {
            "use strict";
            e.exports = function(e) {
                var n = [];
                return n.toString = function() {
                    return this.map((function(n) {
                        var t = "",
                            r = void 0 !== n[5];
                        return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), r && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), r && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t
                    })).join("")
                }, n.i = function(e, t, r, i, a) {
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
                        r && o[p[0]] || (void 0 !== a && (void 0 === p[5] || (p[1] = "@layer".concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {").concat(p[1], "}")), p[5] = a), t && (p[2] ? (p[1] = "@media ".concat(p[2], " {").concat(p[1], "}"), p[2] = t) : p[2] = t), i && (p[4] ? (p[1] = "@supports (".concat(p[4], ") {").concat(p[1], "}"), p[4] = i) : p[4] = "".concat(i)), n.push(p))
                    }
                }, n
            }
        }, e => {
            "use strict";
            e.exports = function(e, n) {
                return n || (n = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), n.hash && (e += n.hash), /["'() \t\n]|(%20)/.test(e) || n.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
            }
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "voice-poro.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "disconnect-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "disconnect-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "disconnect-click.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "reconnect-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "reconnect-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "reconnect-click.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mic-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mic-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mic-click.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mic-muted-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mic-muted-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mic-muted-click.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mic-disabled.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "deafen-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "deafen-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "deafen-click.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "deafened-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "deafened-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "deafened-click.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "settings-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "settings-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "settings-click.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "settings-disabled.png"
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e, n) {
                    if (!n && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = d(n);
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(t(1)),
                i = p(t(16)),
                a = p(t(17)),
                o = p(t(19)),
                l = p(t(21)),
                s = p(t(23)),
                c = t(62);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var n = new WeakMap,
                    t = new WeakMap;
                return (d = function(e) {
                    return e ? t : n
                })(e)
            }
            class h extends i.default {
                templateMarkup() {
                    return t(63)
                }
                stylesheetMarkup() {
                    return t(64)
                }
                constructor() {
                    super(), this._listeners = {
                        showPanel: this._showPanel.bind(this),
                        willHide: this._willHide.bind(this)
                    }, this._voiceDisabled = null, this._buttonDisabled = !1, this._disabledAfterLogin = !1, this._isInCustomGame = !1, this._tooltip = null, this._firstExperienceContextualNotification = null, this._premadeVoiceAvailability = null, this._teamVoiceAvailability = null, this._parentNode = null, this._elements = {
                        voiceButton: ".lol-premade-voice-button"
                    }, this._initDataBinding()
                }
                connectedCallback() {
                    super.connectedCallback(), this._handleVoiceDisabled(), this.attachListener("click", this._listeners.showPanel, this._elements.voiceButton), this.attachListener("willHide", this._listeners.willHide);
                    const e = this._offset();
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
                        offset: e,
                        orientation: "right",
                        backdropCutout: !1,
                        caretOffset: -600,
                        ComponentFactory: r.default.ComponentFactory,
                        borderless: "true"
                    }), this._checkIfFirstExperience(), this._checkIfTooltipNeeded()
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this._voiceDisabled && this._parentNode && this._parentNode.style && (this._parentNode.style.display = "inherit"), this.detachListener("click", this._listeners.showPanel, this._elements.voiceButton), this.detachListener("willHide", this._listeners.willHide), this._removeFirstExperienceContextualNotification()
                }
                static get observedAttributes() {
                    return ["social"]
                }
                attributeChangedCallback(e, n, t) {
                    if (super.attributeChangedCallback(), "social" === e) this._isSocial = t
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "voice-button"
                }
                setVoicePanel(e) {
                    this._voicePanelElement = e
                }
                _offset() {
                    return "left" === this.getAttribute("position") ? {
                        x: -79,
                        y: 0
                    } : {
                        x: -(this.offsetLeft + 3),
                        y: -4
                    }
                }
                availabilityUpdated(e) {
                    r.logger.trace("Voice availability: " + JSON.stringify(e)), this._premadeVoiceAvailability = e, this._updateCombinedAvailability()
                }
                teamVoiceAvailabilityUpdated(e) {
                    r.logger.trace("Team voice availability: " + e), this._teamVoiceAvailability = e, this._updateCombinedAvailability()
                }
                _updateCombinedAvailability() {
                    const e = this._premadeVoiceAvailability,
                        n = this._teamVoiceAvailability;
                    this._voiceDisabled = !e || !e.showUI, this._handleVoiceDisabled(), this._disabledAfterLogin = e && e.disabledAfterLogin;
                    const t = e && e.voiceChannelAvailable || n;
                    !this._disabledAfterLogin && t || this._buttonDisabled ? t && this._buttonDisabled && (this._buttonDisabled = !1, this.removeClass("button-disabled", this._elements.voiceButton), this._voicePanelElement && this._voicePanelElement.dispatchEvent(new Event("voiceButtonEnabled")), this._detachDisabledTooltip()) : (this._buttonDisabled = !0, this.addClass("button-disabled", this._elements.voiceButton), this._checkIfTooltipNeeded(), this._hidePanel())
                }
                lobbyUpdated(e) {
                    const n = e && e.gameConfig,
                        t = n && e.members && e.members.length > 1;
                    this._isInCustomGame = n && e.gameConfig.isCustom, this._isInPremade = t && !e.gameConfig.isCustom, this._checkIfFirstExperience(), this._checkIfTooltipNeeded()
                }
                _initDataBinding() {
                    this.lobbyDataListener = this.lobbyUpdated.bind(this), s.default.observe("lobby", this.lobbyDataListener), s.default.lobby().then(this.lobbyDataListener), this.availabilityDataListener = this.availabilityUpdated.bind(this), a.default.observe("availability", this.availabilityDataListener), a.default.availability().then(this.availabilityDataListener), this.teamVoiceAvailabilityListener = this.teamVoiceAvailabilityUpdated.bind(this), o.default.observe("availability", this.teamVoiceAvailabilityListener), o.default.availability().then(this.teamVoiceAvailabilityListener), this._voiceFirstExperienceListener = this._voiceFirstExperienceUpdated.bind(this), a.default.observe("firstExperience", this._voiceFirstExperienceListener), a.default.firstExperience().then(this._voiceFirstExperienceListener), this.gameflowSessionListener = this.gameflowSessionUpdated.bind(this), l.default.observe("session", this.gameflowSessionListener), l.default.session().then(this.gameflowSessionListener)
                }
                gameflowSessionUpdated(e) {
                    e && e.phase && "ReadyCheck" === e.phase && this._hidePanel()
                }
                _showPanel(e = !0) {
                    this._buttonDisabled || (this.addClass("active", this._elements.voiceButton), r.FlyoutManager.sendEvent(this, "showVoicePanel"), this._voicePanelElement && (this._voicePanelElement.dispatchEvent(new Event("willShowVoicePanel")), e && this._playSound("/fe/lol-premade-voice/sfx-soc-ui-chatwindow-open.ogg")))
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
                    this._buttonDisabled && (this._disabledAfterLogin ? this._tooltipType !== c.VOICE_BUTTON_TOOLTIP_TYPES.DISABLED && this._attachDisabledTooltip(c.VOICE_BUTTON_TOOLTIP_TYPES.DISABLED) : this._isInCustomGame ? this._tooltipType !== c.VOICE_BUTTON_TOOLTIP_TYPES.CUSTOM_GAME && this._attachDisabledTooltip(c.VOICE_BUTTON_TOOLTIP_TYPES.CUSTOM_GAME) : this._tooltipType !== c.VOICE_BUTTON_TOOLTIP_TYPES.NO_PARTY && this._attachDisabledTooltip(c.VOICE_BUTTON_TOOLTIP_TYPES.NO_PARTY))
                }
                _attachDisabledTooltip(e) {
                    this._tooltipType && this._detachDisabledTooltip(), this._tooltipType = e;
                    const n = document.createElement("lol-uikit-tooltip");
                    let t;
                    switch (e) {
                        case c.VOICE_BUTTON_TOOLTIP_TYPES.CUSTOM_GAME:
                            t = r.tra.get("parties_comm_button_error_in_custom_game");
                            break;
                        case c.VOICE_BUTTON_TOOLTIP_TYPES.NO_PARTY:
                            t = r.tra.get("parties_comm_button_error_not_in_party");
                            break;
                        case c.VOICE_BUTTON_TOOLTIP_TYPES.DISABLED:
                            t = r.tra.get("parties_comm_button_error_disabled")
                    }
                    const i = this._tooltipContentBlock(t);
                    n.appendChild(i), r.TooltipManager.assign(this, n, null, {
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
                    this._isSocial && this._showFirstExperience && this._isInPremade && !this._showedFirstExperience && this.parentNode && (this._showPanel(!1), this._attachFirstExperienceTooltip(), a.default.firstExperienceCompleted(), this._showedFirstExperience = !0)
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
                    const n = document.createElement("lol-uikit-content-block");
                    n.setAttribute("type", "tooltip-small"), n.classList.add("lol-premade-voice-button-tooltip");
                    const t = document.createElement("p");
                    return t.innerHTML = e, n.appendChild(t), n
                }
                _removeFirstExperienceContextualNotification() {
                    this._firstExperienceContextualNotification && r.ContextualNotificationManager.remove(this._firstExperienceContextualNotification)
                }
            }
            h.tagName = "lol-parties-comm-button";
            var u = h;
            n.default = u
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.VOICE_BUTTON_TOOLTIP_TYPES = void 0;
            n.VOICE_BUTTON_TOOLTIP_TYPES = {
                NO_PARTY: "noParty",
                CUSTOM_GAME: "customGame",
                DISABLED: "disabled"
            }
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-premade-voice-button"></div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, n, t) => {
            var r = t(34),
                i = t(35)(r);
            i.push([e.id, '.lol-premade-voice-button {\n  display: flex;\n  width: 38px;\n  height: 32px;\n  background-image: url("/fe/lol-premade-voice/voice-button.png");\n  background-position-y: 0px;\n  background-size: cover;\n  cursor: pointer;\n}\n.lol-premade-voice-button:hover:not(.button-disabled) {\n  background-position-y: -32px;\n}\n.lol-premade-voice-button:active:not(.button-disabled) {\n  background-position-y: -64px;\n}\n.lol-premade-voice-button.button-disabled {\n  background-position-y: -160px;\n  cursor: default;\n}\n.lol-premade-voice-button.active {\n  background-position-y: -96px;\n}\n.lol-premade-voice-button.voice-disabled {\n  display: none;\n}\nlol-uikit-content-block.lol-premade-voice-button-tooltip[type=tooltip-small] {\n  padding: 9px;\n}\n', "", {
                version: 3,
                sources: ["webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/voice-button/style.styl"],
                names: [],
                mappings: "AAEA;EACE,aAAS;EACT,WAAO;EACP,YAAQ;EACR,+DAA8D;EAC9D,0BAAuB;EACvB,sBAAiB;EACjB,eAAQ;ACDV;ADGE;EACE,4BAAuB;ACD3B;ADIE;EACE,4BAAuB;ACF3B;ADKE;EACE,6BAAuB;EACvB,eAAQ;ACHZ;ADME;EACE,4BAAuB;ACJ3B;AAdE;EACE,aAAS;AAgBb;AAZA;EACE,YAAS;AAcX",
                sourcesContent: ["$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}", '\r\n\r\n@require "../shared.styl";\r\n\r\n.lol-premade-voice-button {\r\n  @extend $voice-button;\r\n\r\n  &.voice-disabled {\r\n    display: none;\r\n  }\r\n}\r\n\r\nlol-uikit-content-block.lol-premade-voice-button-tooltip[type=tooltip-small] {\r\n  padding: 9px;\r\n}'],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = c(t(16)),
                i = c(t(17)),
                a = c(t(19)),
                o = c(t(20)),
                l = t(1),
                s = c(t(31));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            class p extends r.default {
                templateMarkup() {
                    return t(66)
                }
                stylesheetMarkup() {
                    return t(67)
                }
                constructor() {
                    super(), this._lastSliderUpdate = 0, this._teamVoiceEnabled = !1, this._listeners = {
                        muteListener: this._toggleMute.bind(this),
                        volumeSliderChange: this._volumeSliderChange.bind(this),
                        volumeSliderEnd: this._volumeSliderEnd.bind(this),
                        volumeSliderStart: this._volumeSliderStart.bind(this)
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
                    const e = await o.default.teamVoiceEnabled();
                    this._teamVoiceEnabled = e, await this.updateSelf(this._participant), this.attachListener("click", this._listeners.muteListener, this._selectors.mute), this.attachListener("slideEnd", this._listeners.volumeSliderEnd, this._selectors.sliderElement), this.attachListener("slideStart", this._listeners.volumeSliderStart, this._selectors.sliderElement), this.attachListener("change", this._listeners.volumeSliderChange, this._selectors.sliderElement)
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this.detachListener("click", this._listeners.muteListener, this._selectors.mute), this.detachListener("slideEnd", this._listeners.volumeSliderEnd, this._selectors.sliderElement), this.detachListener("slideStart", this._listeners.volumeSliderStart, this._selectors.sliderElement), this.detachListener("change", this._listeners.volumeSliderChange, this._selectors.sliderElement)
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "voice-panel/voice-participant"
                }
                updateSelf(e) {
                    this._participant = e, this._updateVolume(e.volume, !this._volumeUpdating), this._muted(e.isMuted), this._updateVoiceHalo(e.puuid);
                    const n = this.shadowRoot.querySelector(this._selectors.playerName);
                    n && (n.setAttribute("puuid", e.puuid), n.setAttribute("summoner-id", e.summonerId))
                }
                updateChatParticipant(e) {
                    if (!e) return;
                    const n = this.shadowRoot.querySelector(this._selectors.chatIcon);
                    n && (n.setAttribute("availability", e.availability), n.setAttribute("icon-id", e.icon))
                }
                _toggleMute() {
                    this._teamVoiceEnabled && "true" === this.getAttribute("data-team-participant") ? a.default.mute(this._participant.puuid, !this._participant.isMuted) : i.default.mute(this._participant.puuid, !this._participant.isMuted)
                }
                _volumeSliderEnd(e) {
                    this._volumeUpdating = !1, this._volumeSliderChange(e, !0)
                }
                _volumeSliderStart() {
                    this._volumeUpdating = !0
                }
                _volumeSliderChange(e, n = !1) {
                    if (this._updateVolume(e.value), !n) {
                        const e = (new Date).getTime();
                        if (e - this._lastSliderUpdate < 200) return;
                        this._lastSliderUpdate = e
                    }
                    this._teamVoiceEnabled && "true" === this.getAttribute("data-team-participant") ? a.default.changeVolume(this._participant.puuid, e.value) : i.default.changeVolume(this._participant.puuid, e.value)
                }
                _muted(e) {
                    this._attachMuteTooltip(e), e ? this.addClass("muted", this._selectors.mute) : this.removeClass("muted", this._selectors.mute)
                }
                _updateVolume(e, n = !0) {
                    const t = this.shadowRoot.querySelector(this._selectors.sliderElement);
                    if (t && !this._volumeUpdating && t.setAttribute("value", e), n) {
                        const n = l.tra.formatString("parties_comm_panel_slider_percentage", {
                            percentage: e
                        });
                        this.addInnerHtml(n, this._selectors.volumeText)
                    }
                }
                _updateVoiceHalo(e) {
                    const n = this.shadowRoot.querySelector(this._selectors.haloElement);
                    n && n.setAttribute("puuid", e)
                }
                _attachMuteTooltip(e) {
                    const n = this.shadowRoot.querySelector(this._selectors.mute);
                    let t;
                    t = e ? l.tra.get("parties_comm_panel_tooltip_unmute_participant") : l.tra.get("parties_comm_panel_tooltip_mute_participant"), s.default.attachSmallTooltip(n, t, {
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
            }
            p.tagName = "lol-parties-comm-participant";
            var d = p;
            n.default = d
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-premade-voice-participant">\r\n    <lol-parties-comm-halo size="small">\r\n      <lol-social-avatar-icon\r\n        class="lol-premade-voice-panel-chat-icon"\r\n        icon-id=""\r\n        availability=""\r\n        show-availability="true"\r\n      >\r\n      </lol-social-avatar-icon>\r\n    </lol-parties-comm-halo>\r\n    <div class="lol-premade-voice-panel-participant-content">\r\n      <div class="lol-premade-voice-panel-participant-volume-row">\r\n        <div class="lol-premade-voice-panel-participant-name">\r\n          <lol-uikit-player-name format="tooltip" puuid="" summoner-id="" />\r\n        </div>\r\n        <div class="lol-premade-voice-panel-participant-volume"></div>\r\n      </div>\r\n      <lol-uikit-slider for="participantVolume" percentage value="0" clickset="true"> </lol-uikit-slider>\r\n    </div>\r\n    <div class="lol-premade-voice-panel-participant-mute"></div>\r\n  </div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, n, t) => {
            var r = t(34),
                i = t(35),
                a = t(36),
                o = t(68),
                l = t(69),
                s = t(70),
                c = t(71),
                p = t(72),
                d = t(73),
                h = i(r),
                u = a(o),
                m = a(l),
                _ = a(s),
                A = a(c),
                g = a(p),
                v = a(d);
            h.push([e.id, ".lol-premade-voice-participant .lol-premade-voice-panel-participant-content lol-uikit-slider {\n  width: 155px;\n  height: 15px;\n  --slider-base-before-top: 7px;\n  --slider-btn-cursor: pointer;\n  --slider-btn-width: 15px;\n  --slider-btn-height: 15px;\n  --slider-btn-hover-background-position: 0 -15px;\n  --slider-btn-active-background-position: 0 -30px;\n  --slider-fill-top: 6px;\n}\n.lol-premade-voice-participant {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  position: relative;\n}\n.lol-premade-voice-participant.speaking {\n  background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-chat-icon {\n  align-self: center;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute {\n  background-image: url(" + u + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 18px;\n  height: 18px;\n  margin-top: 14px;\n  cursor: pointer;\n  position: relative;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute:hover {\n  background-image: url(" + m + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute:active {\n  background-image: url(" + _ + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute.muted {\n  background-image: url(" + A + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute.muted:hover {\n  background-image: url(" + g + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-mute.muted:active {\n  background-image: url(" + v + ");\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content {\n  display: flex;\n  flex-direction: column;\n  width: 205px;\n  color: #a09b8c;\n  font-size: 14px;\n  margin: 11px 0 11px 9px;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content:lang(ar-ae) {\n  margin: 11px 9px 11px 0;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content .lol-premade-voice-panel-participant-volume-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 155px;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content .lol-premade-voice-panel-participant-volume-row .lol-premade-voice-panel-participant-name {\n  max-width: 130px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content .lol-premade-voice-panel-participant-volume-row .lol-premade-voice-panel-participant-volume {\n  margin: 0 2px 0 0;\n}\n.lol-premade-voice-participant .lol-premade-voice-panel-participant-content .lol-premade-voice-panel-participant-volume-row .lol-premade-voice-panel-participant-volume:lang(ar-ae) {\n  margin: 0 0 0 2px;\n}\n", "", {
                version: 3,
                sources: ["webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/voice-panel/voice-participant/style.styl"],
                names: [],
                mappings: "AAkEE;EACE,YAAO;EACP,YAAQ;EAER,6BAA0B;EAC1B,4BAAqB;EACrB,wBAAoB;EACpB,yBAAqB;EACrB,+CAAwC;EACxC,gDAAyC;EACzC,sBAAmB;AClEvB;AALA;EACE,aAAS;EACT,mBAAgB;EAChB,YAAQ;EACR,WAAO;EACP,mBAAa;EACb,kBAAU;AAOZ;AALE;EACE,yFAAY;AAOhB;AAJE;EACE,kBAAY;AAMhB;AAHE;EACE,yDAA+D;EAC/D,2BAAqB;EACrB,sBAAiB;EACjB,4BAAmB;EACnB,WAAO;EACP,YAAQ;EACR,gBAAY;EACZ,eAAQ;EACR,kBAAU;AAKd;AAHI;EACE,yDAA6D;AAKnE;AAFI;EACE,yDAA6D;AAInE;AADI;EACE,yDAAgE;AAGtE;AADM;EACE,yDAA8D;AAGtE;AAAM;EACE,yDAA8D;AAEtE;AAGE;EACE,aAAS;EACT,sBAAgB;EAChB,YAAO;EACP,cAAO;EACP,eAAW;EACX,uBAAQ;AADZ;AAEI;EACE,uBAAQ;AAAd;AAGI;EACE,aAAS;EACT,mBAAgB;EAChB,8BAAiB;EACjB,YAAO;AADb;AAGM;EACE,gBAAW;EACX,mBAAa;EACb,uBAAe;EACf,gBAAU;AADlB;AAIM;EACE,iBAAQ;AAFhB;AAGQ;EACE,iBAAQ;AADlB",
                sourcesContent: ["$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}", "@require '../../shared.styl';\r\n@require 'riotclient-lol-asset-csslib/styles/color-palette';\r\n\r\n$imagesPath = '../../../images';\r\n\r\n.lol-premade-voice-participant {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  width: 100%;\r\n  align-items: center;\r\n  position: relative;\r\n\r\n  &.speaking {\r\n    background: linear-gradient(to right, rgba(255,255,255,.1) 0%,rgba(255,255,255,0) 100%);\r\n  }\r\n\r\n  .lol-premade-voice-panel-chat-icon {\r\n    align-self: center;\r\n  }\r\n\r\n  .lol-premade-voice-panel-participant-mute {\r\n    background-image: url(pathjoin($imagesPath, 'mute-default.png'));\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width: 18px;\r\n    height: 18px;\r\n    margin-top: 14px;\r\n    cursor: pointer;\r\n    position: relative;\r\n\r\n    &:hover {\r\n      background-image: url(pathjoin($imagesPath, 'mute-hover.png'));\r\n    }\r\n\r\n    &:active{\r\n      background-image: url(pathjoin($imagesPath, 'mute-click.png'));\r\n    }\r\n\r\n    &.muted {\r\n      background-image: url(pathjoin($imagesPath, 'muted-default.png'));\r\n\r\n      &:hover {\r\n        background-image: url(pathjoin($imagesPath, 'muted-hover.png'));\r\n      }\r\n\r\n      &:active {\r\n        background-image: url(pathjoin($imagesPath, 'muted-click.png'));\r\n      }\r\n    }\r\n  }\r\n\r\n  .lol-premade-voice-panel-participant-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 205px;\r\n    color: $color_palette_grey1;\r\n    font-size: 14px;\r\n    margin: 11px 0 11px 9px;\r\n    &:lang(ar-ae) {\r\n      margin: 11px 9px 11px 0;\r\n    }\r\n\r\n    .lol-premade-voice-panel-participant-volume-row {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      width: 155px;\r\n\r\n      .lol-premade-voice-panel-participant-name {\r\n        max-width: 130px;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n      }\r\n\r\n      .lol-premade-voice-panel-participant-volume {\r\n        margin: 0 2px 0 0;\r\n        &:lang(ar-ae) {\r\n          margin: 0 0 0 2px;\r\n        }\r\n      }\r\n    }\r\n\r\n    @extend $small-slider;\r\n  }\r\n}\r\n"],
                sourceRoot: ""
            }]), e.exports = h
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mute-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mute-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "mute-click.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "muted-default.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "muted-hover.png"
        }, (e, n, t) => {
            "use strict";
            e.exports = t.p + "muted-click.png"
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = l(t(16)),
                i = l(t(17)),
                a = t(75),
                o = t(76);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            class s extends r.default {
                templateMarkup() {
                    return t(77)
                }
                stylesheetMarkup() {
                    return t(78)
                }
                constructor() {
                    super(), this._selectors = {
                        halo: ".lol-premade-voice-comm-halo"
                    }, this._initDataBinding()
                }
                static get observedAttributes() {
                    return ["puuid", "size"]
                }
                attributeChangedCallback(e, n, t) {
                    switch (super.attributeChangedCallback(), e) {
                        case "puuid":
                            this._puuid = t;
                            break;
                        case "size":
                            this._sizeAttribute = t, this._sizeAttribute && this._sizeAttribute in o.SIZES && this.addClass(this._sizeAttribute, this._selectors.halo)
                    }
                }
                _isParticipant(e) {
                    return e.puuid === this._puuid
                }
                _updateHalo(e, n) {
                    const t = this.shadowRoot.querySelector(this._selectors.halo),
                        r = this._calculateBlurRadius(n);
                    (0, a.applyBlur)(t, e, r)
                }
                _calculateBlurRadius(e) {
                    const n = this._sizeAttribute || "small";
                    return (0, a.calculateBlurRadius)(n, e)
                }
                _disconnectHalo() {
                    this._updateHalo(!1, 0)
                }
                _handleParticipantsChanged(e) {
                    const n = (e || []).find(this._isParticipant, this);
                    if (n) {
                        const {
                            isSpeaking: e
                        } = n, {
                            energy: t
                        } = n;
                        this._updateHalo(e, t)
                    } else this._disconnectHalo()
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "voice-halo"
                }
                _initDataBinding() {
                    i.default.observe("participants", this._handleParticipantsChanged.bind(this))
                }
            }
            s.tagName = "lol-parties-comm-halo";
            var c = s;
            n.default = c
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.applyBlur = function(e, n, t) {
                n ? (e.classList.add("speaking"), t && e.style.setProperty("box-shadow", `0 0 ${t}px 1px #36D987`)) : (e.classList.remove("speaking"), e.style.setProperty("box-shadow", "none"))
            }, n.calculateBlurRadius = function(e, n) {
                const t = r.SIZES[e],
                    i = r.MAX_BLUR_MULTIPLIERS[e];
                if (!n || !t || !i) return 0;
                const a = n / 100,
                    o = t * i,
                    l = t * r.MIN_BLUR_MULTIPLIER;
                return (o - l) * a + ("small" === e ? 1 : 2)
            };
            var r = t(76)
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.SIZES = n.MIN_BLUR_MULTIPLIER = n.MAX_BLUR_MULTIPLIERS = void 0;
            n.SIZES = {
                small: 32,
                medium: 58,
                large: 100
            };
            n.MIN_BLUR_MULTIPLIER = 1.2;
            n.MAX_BLUR_MULTIPLIERS = {
                small: 1.5,
                medium: 1.5,
                large: 1.6
            }
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-premade-voice-comm-halo">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n'
        }, (e, n, t) => {
            var r = t(34),
                i = t(35)(r);
            i.push([e.id, ":host .lol-premade-voice-comm-halo {\n  transition: box-shadow 0.15s ease-in-out;\n  position: relative;\n}\n:host .lol-premade-voice-comm-halo:before {\n  content: '';\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: opacity 0.15s ease-in-out;\n  box-shadow: 0 0 0 2px #4bb44b;\n}\n:host .lol-premade-voice-comm-halo.speaking:before {\n  opacity: 1;\n}\n:host .lol-premade-voice-comm-halo.small:before {\n  box-shadow: 0 0 0 1px #4bb44b;\n}\n:host .lol-premade-voice-comm-halo {\n  border-radius: 50%;\n}\n:host .lol-premade-voice-comm-halo:before {\n  border-radius: 50%;\n}\n:host {\n  --premade-voice-halo-margin: 0 0 0 0;\n  --premade-voice-halo-width: auto;\n  --premade-voice-halo-height: auto;\n  --premade-voice-halobefore-box-shadow: none;\n}\n:host .lol-premade-voice-comm-halo {\n  margin: var(--premade-voice-halo-margin);\n  width: var(--premade-voice-halo-width);\n  height: var(--premade-voice-halo-height);\n}\n:host .lol-premade-voice-comm-halo:before {\n  box-shadow: var(--premade-voice-halobefore-box-shadow);\n}\n", "", {
                version: 3,
                sources: ["webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/voice-halo/style.styl"],
                names: [],
                mappings: "AA6BA;EAGE,wCAAY;EACZ,kBAAU;AC9BZ;ADgCE;EACE,WAAS;EACT,UAAS;EACT,WAAO;EACP,YAAQ;EACR,kBAAU;EACV,MAAK;EACL,OAAM;EAEN,qCAAY;EACZ,6BAAY;AC/BhB;ADkCE;EACE,UAAS;AChCb;ADmCE;EACE,6BAAY;ACjChB;ADqCA;EAEE,kBAAe;ACpCjB;ADqCE;EACE,kBAAe;ACnCnB;AAtBA;EACE,oCAA6B;EAC7B,gCAA4B;EAC5B,iCAA6B;EAC7B,2CAAuC;AAwBzC;AApBE;EAEE,wCAAQ;EACR,sCAAO;EACP,wCAAQ;AAqBZ;AApBI;EACE,sDAAY;AAsBlB",
                sourcesContent: ["$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}", '@require "../shared.styl";\r\n\r\n\r\n// declare this component\'s CSS Custom Variables and defaults here\r\n:host {\r\n  --premade-voice-halo-margin: 0 0 0 0;\r\n  --premade-voice-halo-width: auto;\r\n  --premade-voice-halo-height: auto;\r\n  --premade-voice-halobefore-box-shadow: none;\r\n}\r\n\r\n:host {\r\n  .lol-premade-voice-comm-halo {\r\n    @extend $green-outer-round-blur;\r\n    margin: var(--premade-voice-halo-margin);\r\n    width: var(--premade-voice-halo-width);\r\n    height: var(--premade-voice-halo-height);\r\n    &:before {\r\n      box-shadow: var(--premade-voice-halobefore-box-shadow);\r\n    }\r\n  }\r\n}\r\n'],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = t(1),
                i = s(t(16)),
                a = s(t(17)),
                o = t(75),
                l = s(t(31));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            class c extends i.default {
                templateMarkup() {
                    return t(80)
                }
                stylesheetMarkup() {
                    return t(81)
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
                    super.disconnectedCallback(), this.detachListener("click", this._listeners.click, this._elements.button), this._testIsRunning && a.default.stopMicTest()
                }
                getComponentFolderPath() {
                    return super.getComponentFolderPath(), "mic-test-button"
                }
                _clickHandler() {
                    this._inVoiceChannel || (this._testIsRunning ? a.default.stopMicTest() : a.default.startMicTest())
                }
                _handleVoiceTest(e) {
                    const n = e.isLoopbackEnabled !== this._testIsRunning;
                    this._testIsRunning = e.isLoopbackEnabled, n && this._updateState();
                    const t = e.micEnergy !== this._micEnergy;
                    this._micEnergy = e.micEnergy, t && this._updateHalo()
                }
                _handleParticipantsChanged(e) {
                    const n = !!e.length,
                        t = n !== this._inVoiceChannel;
                    this._inVoiceChannel = n, t && this._updateState()
                }
                _handleSettingsChanged(e) {
                    this._pttActive = !!e.pttActive, this._pttActive ? this._pttButtonPressed = !e.localMicMuted : this._pttButtonPressed = !1, this._updateHalo()
                }
                _updateHalo() {
                    const e = this.shadowRoot.querySelector(this._elements.button);
                    if (!e) return;
                    if (!this._testIsRunning) return void(0, o.applyBlur)(e, !1);
                    const n = (0, o.calculateBlurRadius)("large", this._micEnergy);
                    let t = this._micEnergy > 0;
                    this._pttActive && !this._pttButtonPressed && (t = !1), (0, o.applyBlur)(e, t, n)
                }
                _updateState() {
                    if (this._inVoiceChannel) return void this._updateEnabled(!1);
                    let e;
                    this._updateEnabled(!0), this._testIsRunning ? (e = r.tra.get("mic_test_button_label_testing"), this.addClass("active", this._elements.button)) : (e = r.tra.get("mic_test_button_label_test"), this.removeClass("active", this._elements.button), this._updateHalo()), this.addInnerHtml(e, this._elements.label)
                }
                _updateEnabled(e) {
                    const n = this.shadowRoot.querySelector(this._elements.button);
                    e ? (this.removeClass("button-disabled", this._elements.button), l.default.removeTooltip(n)) : (this.addInnerHtml("&nbsp;", this._elements.label), this.addClass("button-disabled", this._elements.button), l.default.attachSmallTooltip(n, r.tra.get("mic_test_button_tooltip_disabled")))
                }
                _initDataBinding() {
                    a.default.observe("mictest", this._listeners.testDataChanged), a.default.observe("participants", this._listeners.participantsChanged), a.default.observe("settings", this._listeners.settingsChanged)
                }
            }
            c.tagName = "lol-parties-mic-test-button";
            var p = c;
            n.default = p
        }, e => {
            "use strict";
            e.exports = '\x3c!-- @format --\x3e\r\n\r\n<template>\r\n  <div class="lol-voice-mic-test-label"></div>\r\n  <div class="lol-voice-mic-test-button"></div>\r\n  <slot></slot>\r\n</template>\r\n'
        }, (e, n, t) => {
            var r = t(34),
                i = t(35)(r);
            i.push([e.id, '.lol-voice-mic-test-label {\n  font-family: var(--font-body);\n}\n.lol-voice-mic-test-label {\n  font-family: var(--font-body);\n}\n.lol-voice-mic-test-label {\n  -webkit-user-select: none;\n}\n.lol-voice-mic-test-label {\n  font-kerning: normal;\n  -webkit-font-feature-settings: "kern" 1;\n  -webkit-font-smoothing: antialiased;\n}\n.lol-voice-mic-test-label {\n  color: #a09b8c;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 16px;\n  letter-spacing: 0.025em;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.lol-voice-mic-test-label:lang(ja-jp) {\n  font-size: 13px;\n}\n.lol-voice-mic-test-label:lang(ar-ae) {\n  letter-spacing: 0;\n}\n.lol-voice-mic-test-button {\n  display: flex;\n  width: 38px;\n  height: 32px;\n  background-image: url("/fe/lol-premade-voice/voice-button.png");\n  background-position-y: 0px;\n  background-size: cover;\n  cursor: pointer;\n}\n.lol-voice-mic-test-button:hover:not(.button-disabled) {\n  background-position-y: -32px;\n}\n.lol-voice-mic-test-button:active:not(.button-disabled) {\n  background-position-y: -64px;\n}\n.lol-voice-mic-test-button.button-disabled {\n  background-position-y: -160px;\n  cursor: default;\n}\n.lol-voice-mic-test-button.active {\n  background-position-y: -96px;\n}\n.lol-voice-mic-test-button {\n  transition: box-shadow 0.15s ease-in-out;\n  position: relative;\n}\n.lol-voice-mic-test-button:before {\n  content: \'\';\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: opacity 0.15s ease-in-out;\n  box-shadow: 0 0 0 2px #4bb44b;\n}\n.lol-voice-mic-test-button.speaking:before {\n  opacity: 1;\n}\n.lol-voice-mic-test-button.small:before {\n  box-shadow: 0 0 0 1px #4bb44b;\n}\n.lol-voice-mic-test-label {\n  min-height: 16px;\n  margin-bottom: 5px;\n}\n.lol-voice-mic-test-button.active {\n  background-position-y: -96px;\n}\n', "", {
                version: 3,
                sources: ["webpack://./node_modules/riotclient-lol-asset-csslib/styles/fonts.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/mic-test-button/style.styl", "webpack://./node_modules/riotclient-lol-asset-csslib/styles/typekit.styl", "webpack://./fe/rcp-fe-lol-premade-voice/src/elements/shared.styl"],
                names: [],
                mappings: "AAIA;EACE,6BAAa;ACHf;ADEA;EACE,6BAAa;ACAf;ACKA;EACE,yBAAqB;ADHvB;ACeA;EAEE,oBAAc;EACd,uCAA+B;EAC/B,mCAAwB;ADd1B;AC2RA;EAGE,cAAO;EACP,eAAW;EAIX,mBAAa;EACb,iBAAa;EACb,uBAAgB;EAIhB,4CAAwB;ADjS1B;ACwRE;EACE,eAAW;ADtRf;AC2RE;EACE,iBAAgB;ADzRpB;AEzBA;EACE,aAAS;EACT,WAAO;EACP,YAAQ;EACR,+DAA8D;EAC9D,0BAAuB;EACvB,sBAAiB;EACjB,eAAQ;AF2BV;AEzBE;EACE,4BAAuB;AF2B3B;AExBE;EACE,4BAAuB;AF0B3B;AEvBE;EACE,6BAAuB;EACvB,eAAQ;AFyBZ;AEtBE;EACE,4BAAuB;AFwB3B;AEpBA;EAGE,wCAAY;EACZ,kBAAU;AFoBZ;AElBE;EACE,WAAS;EACT,UAAS;EACT,WAAO;EACP,YAAQ;EACR,kBAAU;EACV,MAAK;EACL,OAAM;EAEN,qCAAY;EACZ,6BAAY;AFmBhB;AEhBE;EACE,UAAS;AFkBb;AEfE;EACE,6BAAY;AFiBhB;AAhEA;EAGE,gBAAY;EACZ,kBAAe;AAgEjB;AAzDE;EACE,4BAAuB;AA2D3B",
                sourcesContent: ["$fonts_lol_display {\r\n  font-family: var(--font-display);\r\n}\r\n\r\n$fonts_lol_body {\r\n  font-family: var(--font-body);\r\n}\r\n\r\n/**\r\n * Deprecated, keeping just to not break thiings abruptly.\r\n */\r\n\r\n$fonts_beaufort {\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n$fonts_spiegel {\r\n  @extend $fonts_lol_body;\r\n}\r\n", "@require 'riotclient-lol-asset-csslib/styles/fonts';\r\n@require 'riotclient-lol-asset-csslib/styles/typekit';\r\n\r\n@require \"../shared.styl\";\r\n\r\n\r\n.lol-voice-mic-test-label {\r\n  @extend $fonts_lol_body;\r\n  @extend $typekit_text_s;\r\n  min-height: 16px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lol-voice-mic-test-button {\r\n  @extend $voice-button;\r\n  @extend $green-outer-blur;\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n", "\r\n@import 'fonts';\r\n@import 'color-palette';\r\n\r\n/*\r\n * User Interaction Macros\r\n */\r\n$user_selectable {\r\n  -webkit-user-select: all;\r\n}\r\n$user_unselectable {\r\n  -webkit-user-select: none;\r\n}\r\n$user_draggable {\r\n  -webkit-user-drag: element;\r\n}\r\n$user_undraggable {\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n/*\r\n * Base Text Treatment\r\n */\r\n$typekit_base {\r\n  @extend $user_unselectable;\r\n  font-kerning: normal;\r\n  -webkit-font-feature-settings: \"kern\" 1;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*\r\n * Uppercase Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-uppercase {\r\n  text-transform: uppercase;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n/*\r\n * Capitalized Text\r\n * text-transform macro should be extended to ensure that text-transform\r\n * doesn't get applied in locales which don't support it.\r\n */\r\n$text-transform-capitalize {\r\n  text-transform: capitalize;\r\n  &:lang(ko-kr),\r\n  &:lang(ja-jp),\r\n  &:lang(tr-tr),\r\n  &:lang(el-gr),\r\n  &:lang(th-th),\r\n  &:lang(zh-tw) {\r\n    text-transform: none;\r\n  }\r\n}\r\n\r\n$text-transform-none {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n * Headings\r\n * by default, headings are always uppercase.\r\n * if text case must be preserved, use this the _preserve_case macros instead.\r\n */\r\n$typekit_h1 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  line-height: 42px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_preserve_case {\r\n  @extend $typekit_h1;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h1_subhead {\r\n  @extend $typekit_h1;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h2 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_preserve_case {\r\n  @extend $typekit_h2;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h2_subhead {\r\n  @extend $typekit_h2;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h3 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 28px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_preserve_case {\r\n  @extend $typekit_h3;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h3_subhead {\r\n  @extend $typekit_h3;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  line-height: 22px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_preserve_case {\r\n  @extend $typekit_h4;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h4_subhead {\r\n  @extend $typekit_h4;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h4_italic {\r\n  @extend $typekit_h4_preserve_case;\r\n  font-style: italic;\r\n  font-weight: 500;\r\n}\r\n\r\n$typekit_h5 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  line-height: 18px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_preserve_case {\r\n  @extend $typekit_h5;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h5_subhead {\r\n  @extend $typekit_h5;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h6 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  color: $color_palette_gold1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_preserve_case {\r\n  @extend $typekit_h6;\r\n  @extend $text-transform-none;\r\n  letter-spacing: .0375em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_h6_subhead {\r\n  @extend $typekit_h6;\r\n  color: $color_palette_grey1;\r\n}\r\n\r\n$typekit_h7 {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  @extend $text-transform-uppercase;\r\n  font-weight: 500;\r\n  color: $color_palette_grey0;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  letter-spacing: 0.02625em;\r\n\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Body Text\r\n */\r\n$typekit_text_l {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_grey1;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 24px;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_m {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 20px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_s {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_text_small {\r\n  @extend $typekit_text_s;\r\n  font-weight: 400;\r\n  letter-spacing: .05em;\r\n}\r\n\r\n$typekit_text_small_bold {\r\n  @extend $typekit_text_small;\r\n  font-weight: 550;\r\n}\r\n\r\n/*\r\n * Navigation\r\n */\r\nnav-active($width, $height) {\r\n  &.active {\r\n    position: relative;\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_nav {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n}\r\n\r\n$typekit_nav_secondary {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  @extend $text-transform-uppercase;\r\n  nav-active(32px, 4px);\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  &:lang(zh-tw) {\r\n    font-size: 14px;\r\n  }\r\n  font-weight: 500;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  color: $color_palette_gold2;\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Labels\r\n */\r\n$typekit_label {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_label_bold {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_body;\r\n  color: $color_palette_grey1;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: 900;\r\n  line-height: 16px;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Button Text\r\n */\r\n$typekit_button {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  color: $color_palette_gold3;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: .0325em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n\r\n  &:hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n\r\n  &:disabled, &:disabled:hover, &[disabled='true'], &[disabled='true']:hover {\r\n    color: $color_palette_grey_disabled;\r\n    cursor: default;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_gold5;\r\n  }\r\n\r\n}\r\n\r\n$typekit_button_blue {\r\n  @extend $typekit_button;\r\n  color: $colors_ziggurat;\r\n\r\n  &:hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:active {\r\n    color: $color_palette_blue4;\r\n  }\r\n}\r\n\r\n$typekit_button_red {\r\n  @extend $typekit_button;\r\n  color: $color_palette_mage;\r\n\r\n  &:hover {\r\n    color: $color_palette_mage2;\r\n  }\r\n\r\n  &:active {\r\n    color: $colors_crownOfThorns;\r\n  }\r\n}\r\n\r\n/*\r\n * Links\r\n */\r\n$typekit_link_base {\r\n  @extend $typekit_base;\r\n  font-size: 12px;\r\n  &:lang(ja-jp) {\r\n    font-size: 13px;\r\n  }\r\n  font-weight: normal;\r\n  outline: 0;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_link_base_color {\r\n  color: $color_palette_gold2;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_gold1;\r\n  }\r\n}\r\n\r\n$typekit_link_external_base {\r\n  @extend $typekit_link_base;\r\n  color: $color_palette_blue3;\r\n  text-decoration: none;\r\n\r\n  &:hover, &.hover {\r\n    color: $color_palette_blue1;\r\n  }\r\n\r\n  &:after {\r\n    width: 9px;\r\n    height: 9px;\r\n    content: '';\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-mask: url('../images/external-link-mask.png') no-repeat;\r\n    -webkit-mask-size: contain;\r\n    background-color: $color_palette_blue3;\r\n    margin: 0 0 0 5px;\r\n  }\r\n  &:lang(ar-ae):after {\r\n    margin: 0 5px 0 0;\r\n    transform: scaleX(-1);\r\n  }\r\n\r\n  &:hover:after {\r\n     background-color: $color_palette_blue1;\r\n  }\r\n}\r\n\r\n/* Internal links in Lol Body font */\r\n$typekit_link {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* Internal links in the Lol Display font */\r\n$typekit_link_display {\r\n  @extend $typekit_link_base;\r\n  @extend $typekit_link_base_color;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/* External links in Lol Body font */\r\n$typekit_link_external {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_body;\r\n}\r\n\r\n/* External links in Lol Display font */\r\n$typekit_link_external_display {\r\n  @extend $typekit_link_external_base;\r\n  @extend $fonts_lol_display;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n$typekit_footer {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: .1em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n/*\r\n * Numbers\r\n */\r\n$typekit_num {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  background: linear-gradient(to bottom, $color_palette_gold2 0%, $color_palette_gold3 35%, #765c29 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n$typekit_num_l {\r\n  @extend $typekit_num;\r\n  font-size: 60px;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  letter-spacing: .025em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_m {\r\n  @extend $typekit_num;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n$typekit_num_s {\r\n  @extend $typekit_num;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  letter-spacing: .075em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n}\r\n\r\n$typekit_num_stats {\r\n  @extend $typekit_base;\r\n  @extend $fonts_lol_display;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  letter-spacing: .05em;\r\n  &:lang(ar-ae) {\r\n    letter-spacing: 0;\r\n  }\r\n}\r\n\r\n/*\r\n * Text Modifiers\r\n * _modifier_ typekit rules semantically defines text alteration rules to convey specific meaning.\r\n * They modify simply typography rules (color, weight, style, etc)\r\n * They are indended to be used in combination with other typekit macros.\r\n */\r\n$typekit_modifier_highlight {\r\n  color: $color_palette_gold1;\r\n}\r\n$typekit_modifier_subhead {\r\n  color: $color_palette_grey1;\r\n}\r\n/*\r\n * TODO: Add other modifiers for specific types of highlights like\r\n *  - coloring for game values (ability power, attack power, armor penetration, etc)\r\n */\r\n", "$imagesPath = '../../images';\r\n\r\n$voice-button {\r\n  display: flex;\r\n  width: 38px;\r\n  height: 32px;\r\n  background-image: url('/fe/lol-premade-voice/voice-button.png');\r\n  background-position-y: 0px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n  &:hover:not(.button-disabled) {\r\n    background-position-y: -32px;\r\n  }\r\n\r\n  &:active:not(.button-disabled) {\r\n    background-position-y: -64px;\r\n  }\r\n\r\n  &.button-disabled {\r\n    background-position-y: -160px;\r\n    cursor: default;\r\n  }\r\n\r\n  &.active {\r\n    background-position-y: -96px;\r\n  }\r\n}\r\n\r\n$green-outer-blur {\r\n\r\n  // TODO: find alternative if not performant\r\n  transition: box-shadow 0.15s ease-in-out;\r\n  position: relative;\r\n\r\n  &:before  {\r\n    content: '';\r\n    opacity: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    transition: opacity 0.15s ease-in-out;\r\n    box-shadow: 0 0 0 2px #4bb44b;\r\n  }\r\n\r\n  &.speaking:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  &.small:before {\r\n    box-shadow: 0 0 0 1px #4bb44b;\r\n  }\r\n}\r\n\r\n$green-outer-round-blur {\r\n  @extend $green-outer-blur;\r\n  border-radius: 50%;\r\n  &:before {\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n$small-slider {\r\n  lol-uikit-slider {\r\n    width: 155px;\r\n    height: 15px;\r\n\r\n    --slider-base-before-top: 7px;\r\n    --slider-btn-cursor: pointer;\r\n    --slider-btn-width: 15px;\r\n    --slider-btn-height: 15px;\r\n    --slider-btn-hover-background-position: 0 -15px;\r\n    --slider-btn-active-background-position: 0 -30px;\r\n    --slider-fill-top: 6px;\r\n  }\r\n}"],
                sourceRoot: ""
            }]), e.exports = i
        }, (e, n, t) => {
            "use strict";
            var r = t(1);
            e.exports = class {
                constructor() {
                    this._registerComponents(), this._addVoiceSocialButton()
                }
                voiceButton(e) {
                    const n = document.createElement("lol-parties-comm-button");
                    if (e)
                        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && n.setAttribute(t, e[t]);
                    const t = this._voicePanel();
                    return n.setVoicePanel(t), n
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
            }
        }],
        n = {};

    function t(r) {
        var i = n[r];
        if (void 0 !== i) return i.exports;
        var a = n[r] = {
            id: r,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, t), a.exports
    }
    t.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.p = "/fe/lol-premade-voice/";
    t(0)
})();
//# sourceMappingURL=rcp-fe-lol-premade-voice.js.map