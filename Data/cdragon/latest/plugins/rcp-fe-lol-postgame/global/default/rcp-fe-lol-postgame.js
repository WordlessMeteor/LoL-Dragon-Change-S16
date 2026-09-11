(() => {
    var e = [, e => {
            "use strict";
            let t;

            function s() {
                return t || (console.error("The `provider` object has not been set, please do so by calling the `init` method."), null)
            }
            const n = {
                init: function(e, s) {
                    return t = e, this.add(s)
                },
                _getValue: function(e, s) {
                    let n;
                    return "function" == typeof s ? (n = s(t), n || console.warn("The function for key " + e + " returned a falsy value: ", n)) : "string" == typeof s ? (n = t.get(s), n || console.warn("The provider `get` invocation for the key " + e + " returned a falsy value: ", n)) : "object" == typeof s && (n = s), n
                },
                add: function(e) {
                    e = e || {};
                    const t = [],
                        s = this;
                    return Object.keys(e).forEach((function(n) {
                        const a = e[n],
                            o = s._getValue(n, a);
                        o && o.then ? (o.then((function(e) {
                            e || console.warn("The promise for the key " + n + " resolved with a falsy value: ", e), s._addValue(n, e)
                        })), t.push(o)) : s._addValue(n, o)
                    })), Promise.all(t)
                },
                _addValue: function(e, t) {
                    this[e] = t
                },
                provider: function() {
                    return console.error("The function `provider` has been deprecated, please use `getProvider`", (new Error).stack), s()
                },
                getProvider: function() {
                    return s()
                }
            };
            e.exports = n
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(3);
            t.default = class {
                constructor(e) {
                    this.progressionComponentPriorityQueue = [], this.applicationInjector = e
                }
                getProgressionComponents() {
                    return this.progressionComponentPriorityQueue
                }
                addProgressionComponent(e, t, s, a, o) {
                    this.addInternalProgressionComponent(e, s, a, o), this.applicationInjector.setComponent(n.POSTGAME_EMBER_APP_NAME, e, t)
                }
                addInternalProgressionComponent(e, t, s, n) {
                    this.hasProgressionComponent(e) && this.removeProgressionComponent(e), this.progressionComponentPriorityQueue.push({
                        componentName: e,
                        priority: t,
                        hasAnimation: Boolean(s),
                        isFixed: Boolean(n)
                    }), this.progressionComponentPriorityQueue.sort((function(e, t) {
                        return e.priority - t.priority
                    }))
                }
                hasProgressionComponent(e) {
                    return this.progressionComponentPriorityQueue.some((t => t.componentName === e))
                }
                removeProgressionComponent(e) {
                    let t = this.progressionComponentPriorityQueue.length;
                    for (; t--;) this.progressionComponentPriorityQueue[t].componentName === e && this.progressionComponentPriorityQueue.splice(t, 1);
                    this.applicationInjector.setComponent(n.POSTGAME_EMBER_APP_NAME, e, null)
                }
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UI_AUDIO_SFX_PATH = t.TFT_MAX_BENCH_SLOTS = t.SUBTEAM_PLACEMENT_LONG_TRA_KEY = t.STAT_SWITCHER_STATS = t.STATIC_ASSETS_PATH = t.SFX_SUB_CHANNEL_UI_NAME = t.REWARD_CELEBRATION_NAME = t.POSTGAME_PLAYER_HONOR_NAME = t.POSTGAME_EMBER_APP_NAME = t.PLAYER_STATUS_TO_ORDER_MAP = t.PARTY_STATUS = t.MODAL_CATEGORY = t.LOTTIE_RADIAL_UNITS = t.HONOR_VIDEO_PATH = t.HONOR_DISABLED_GAME_MODES = t.HONOR_CATEGORY_DATA = t.HONOR_ASSET_PATH = t.GAME_MODES_WITH_SUBTEAMS = t.FULL_LIST_ERROR = t.DEFAULT_CHERRY_TEAM_SIZE = t.CONVERSATION_TYPE_POSTGAME = t.CHERRY_PLACEMENT_TRA_KEY = void 0;
            var n = s(4);
            t.POSTGAME_EMBER_APP_NAME = "rcp-fe-lol-postgame-ember";
            const a = [n.GAME_MODES.CHERRY, n.GAME_MODES.STRAWBERRY, n.GAME_MODES.TFT, n.GAME_MODES.PROMETHIUM, n.GAME_MODES.CUSTOM, n.GAME_MODES.TUTORIAL, n.GAME_MODES.PRACTICETOOL];
            t.HONOR_DISABLED_GAME_MODES = a;
            t.TFT_MAX_BENCH_SLOTS = 10;
            t.FULL_LIST_ERROR = "max_roster_size_sender";
            t.REWARD_CELEBRATION_NAME = "PostgameRewardComponent";
            t.DEFAULT_CHERRY_TEAM_SIZE = 4;
            t.HONOR_ASSET_PATH = "/fe/lol-postgame/";
            t.HONOR_VIDEO_PATH = "/fe/lol-static-assets/videos/honor/";
            t.STATIC_ASSETS_PATH = "/fe/lol-static-assets/";
            t.POSTGAME_PLAYER_HONOR_NAME = "postgame-scoreboard-player-honor-flair";
            t.CONVERSATION_TYPE_POSTGAME = "postGame";
            t.HONOR_CATEGORY_DATA = {
                COOL: {
                    header: "honor_category_prompt_header_cool",
                    body: "honor_category_prompt_body_cool",
                    tooltip: "honor_postgame_category_tooltip_cool",
                    tooltipBySummoner: "honor_postgame_category_tooltip_cool_by_summoner",
                    iconUnselected: "Cool_Unselected.png",
                    iconSelected: "Cool_Selected.png",
                    postgameIcon: "Cool_MiniIcon.png",
                    eog1: "EOG_Cool_1-2.webm",
                    eog2: "EOG_Cool_1-2.webm",
                    eog3: "EOG_Cool_3.webm",
                    eog4: "EOG_Cool_4.webm",
                    eog5: "EOG_Cool_4.webm",
                    index: 1
                },
                SHOTCALLER: {
                    header: "honor_category_prompt_header_shotcaller",
                    body: "honor_category_prompt_body_shotcaller",
                    tooltip: "honor_postgame_category_tooltip_shotcaller",
                    tooltipBySummoner: "honor_postgame_category_tooltip_shotcaller_by_summoner",
                    iconUnselected: "Shotcaller_Unselected.png",
                    iconSelected: "Shotcaller_Selected.png",
                    postgameIcon: "Shotcaller_MiniIcon.png",
                    eog1: "EOG_Shotcaller_1-2.webm",
                    eog2: "EOG_Shotcaller_1-2.webm",
                    eog3: "EOG_Shotcaller_3.webm",
                    eog4: "EOG_Shotcaller_4.webm",
                    eog5: "EOG_Shotcaller_4.webm",
                    index: 2
                },
                HEART: {
                    header: "honor_category_prompt_header_heart",
                    body: "honor_category_prompt_body_heart",
                    tooltip: "honor_postgame_category_tooltip_heart",
                    tooltipBySummoner: "honor_postgame_category_tooltip_heart_by_summoner",
                    iconUnselected: "Heart_Unselected.png",
                    iconSelected: "Heart_Selected.png",
                    postgameIcon: "Heart_MiniIcon.png",
                    eog1: "EOG_Heart_1-2.webm",
                    eog2: "EOG_Heart_1-2.webm",
                    eog3: "EOG_Heart_3.webm",
                    eog4: "EOG_Heart_4.webm",
                    eog5: "EOG_Heart_4.webm",
                    index: 3
                }
            };
            t.STAT_SWITCHER_STATS = {
                DAMAGE_DEALT: "TOTAL_DAMAGE_DEALT_TO_CHAMPIONS",
                DAMAGE_DEALT_OVERALL: "TOTAL_DAMAGE_DEALT",
                DAMAGE_TAKEN: "TOTAL_DAMAGE_TAKEN",
                CC_SCORE: "TIME_CCING_OTHERS",
                CREEP_SCORE: "MINIONS_KILLED",
                GOLD: "GOLD_EARNED",
                INDIVIDUAL_KDA: "INDIVIDUAL_KDA",
                VISION_SCORE: "VISION_SCORE",
                NEUTRAL_MINIONS_SLAIN: "NEUTRAL_MINIONS_KILLED"
            };
            t.MODAL_CATEGORY = {
                CHALLENGES: "challenges",
                ETERNALS: "eternals"
            };
            t.LOTTIE_RADIAL_UNITS = 75;
            const o = {
                DEFAULT_WAITING_STATUS: "waiting",
                READY_STATUS: "ready",
                LEFT_PARTY_STATUS: "left"
            };
            t.PARTY_STATUS = o;
            const l = {
                [o.READY_STATUS]: -1,
                [o.DEFAULT_WAITING_STATUS]: 0,
                [o.LEFT_PARTY_STATUS]: 1
            };
            t.PLAYER_STATUS_TO_ORDER_MAP = l;
            t.CHERRY_PLACEMENT_TRA_KEY = "cherry_placement_";
            t.SUBTEAM_PLACEMENT_LONG_TRA_KEY = "subteam_placement_long_";
            t.GAME_MODES_WITH_SUBTEAMS = {
                CHERRY: {
                    subteams: [{
                        subteamId: 1,
                        display: {
                            label: "cherry_subteam_display_name_poro",
                            icon: "/fe/lol-postgame/subteams/poro.svg"
                        }
                    }, {
                        subteamId: 2,
                        display: {
                            label: "cherry_subteam_display_name_minion",
                            icon: "/fe/lol-postgame/subteams/minion.svg"
                        }
                    }, {
                        subteamId: 3,
                        display: {
                            label: "cherry_subteam_display_name_scuttle",
                            icon: "/fe/lol-postgame/subteams/scuttle.svg"
                        }
                    }, {
                        subteamId: 4,
                        display: {
                            label: "cherry_subteam_display_name_krug",
                            icon: "/fe/lol-postgame/subteams/krug.svg"
                        }
                    }, {
                        subteamId: 5,
                        display: {
                            label: "cherry_subteam_display_name_raptor",
                            icon: "/fe/lol-postgame/subteams/raptor.svg"
                        }
                    }, {
                        subteamId: 6,
                        display: {
                            label: "cherry_subteam_display_name_sentinel",
                            icon: "/fe/lol-postgame/subteams/sentinel.svg"
                        }
                    }, {
                        subteamId: 7,
                        display: {
                            label: "cherry_subteam_display_name_wolf",
                            icon: "/fe/lol-postgame/subteams/wolf.svg"
                        }
                    }, {
                        subteamId: 8,
                        display: {
                            label: "cherry_subteam_display_name_gromp",
                            icon: "/fe/lol-postgame/subteams/gromp.svg"
                        }
                    }]
                }
            };
            t.SFX_SUB_CHANNEL_UI_NAME = "sfx-ui";
            t.UI_AUDIO_SFX_PATH = {
                MAGIC_BUTTON_HOVER: "/fe/lol-static-assets/sounds/sfx-uikit-magic-button-hover.ogg",
                BUTTON_GOLD_CLICK: "/fe/lol-static-assets/sounds/sfx-uikit-button-gold-click.ogg",
                BUTTON_GOLD_HOVER: "/fe/lol-static-assets/sounds/sfx-uikit-button-gold-hover.ogg"
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "GAMEFLOW_PHASES", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "GAME_CONTEXT_KEYS", {
                enumerable: !0,
                get: function() {
                    return o.GAME_CONTEXT_KEYS
                }
            }), Object.defineProperty(t, "GAME_MODES", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "GAME_SEARCH_STATES", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "PAW", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "PRE_END_OF_GAME_SEQUENCE_EVENTS", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "PROFILE_PRIVACY", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "QUEUES", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "RANKED", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "REWARD_TRACKER", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "SOCIAL", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "TIME", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "VANGUARD_STATES", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "getGameKeyFromGameMode", {
                enumerable: !0,
                get: function() {
                    return o.getGameKeyFromGameMode
                }
            });
            var n = f(s(5)),
                a = f(s(6)),
                o = s(7),
                l = f(s(8)),
                i = f(s(9)),
                r = f(s(20)),
                m = f(s(21)),
                c = f(s(22)),
                d = f(s(23)),
                p = f(s(24)),
                u = f(s(25)),
                g = f(s(26)),
                h = f(s(27));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
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
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                ERROR: "Error",
                FOUND: "Found",
                SEARCHING: "Searching"
            };
            t.default = s
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.GAME_CONTEXT_KEYS = void 0, t.getGameKeyFromGameMode = function(e) {
                return e === a.default.TFT ? o.TFT : o.LEAGUE_OF_LEGENDS
            };
            var n, a = (n = s(8)) && n.__esModule ? n : {
                default: n
            };
            const o = {
                TFT: "tft",
                LEAGUE_OF_LEGENDS: "league_of_legends"
            };
            t.GAME_CONTEXT_KEYS = o;
            var l = o;
            t.default = l
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                CHERRY: "CHERRY",
                CLASSIC: "CLASSIC",
                CUSTOM: "CUSTOM",
                JADE: "JADE",
                KIWI: "KIWI",
                KIWI_JADE: "KIWI_JADE",
                PRACTICETOOL: "PRACTICETOOL",
                STRAWBERRY: "STRAWBERRY",
                TFT: "TFT",
                TUTORIAL: "TUTORIAL"
            };
            t.default = s
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = u(s(10)),
                a = u(s(11)),
                o = u(s(12)),
                l = u(s(13)),
                i = u(s(14)),
                r = u(s(15)),
                m = u(s(16)),
                c = u(s(17)),
                d = u(s(18)),
                p = u(s(19));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = {
                COMPONENT_TYPES: n.default,
                CURRENCY_TYPES: a.default,
                INVENTORY_TYPES: o.default,
                MEDIA_TYPES: l.default,
                MEDIA_LOAD_TYPES: i.default,
                MODAL_TYPES: r.default,
                OFFER_PURCHASE_STATES: m.default,
                OFFER_VALIDATION_STATES: c.default,
                SCROLL_LIST_DISPLAY_TYPES: d.default,
                TEMPLATE_TYPES: p.default
            };
            t.default = g
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                TEXT: "TEXT",
                TITLE_SUBTITLE: "TITLE_SUBTITLE",
                PURCHASE: "PURCHASE",
                MEDIA: "MEDIA",
                IMAGE_CAROUSEL: "IMAGE_CAROUSEL",
                SCROLL_LIST: "SCROLL_LIST",
                VERTICAL_LIST: "VERTICAL_LIST"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                RP: "RP",
                IP: "IP",
                BE: "lol_blue_essence"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
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
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                SVG: "SVG",
                IMAGE: "IMAGE",
                VIDEO: "VIDEO"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                LOCAL_ASSET: "LOCAL_ASSET",
                EXTERNAL_URL: "EXTERNAL_URL",
                GAME_DATA: "GAME_DATA"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
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
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                NOT_STARTED: "NOT_STARTED",
                IN_PROGRESS: "IN_PROGRESS",
                SUCCESS: "SUCCESS",
                FAIL: "FAIL"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                NOT_STARTED: "NOT_STARTED",
                IN_PROGRESS: "IN_PROGRESS",
                COMPLETED: "COMPLETED"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                EXPANDED: "EXPANDED",
                COMPACT: "COMPACT",
                DETAILED: "DETAILED"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                LARGE_TWO_COLUMN_LANDSCAPE: "LARGE_TWO_COLUMN_LANDSCAPE"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                HONOR: "honor-vote",
                CHALLENGES: "challenge-level-up-celebration",
                MISSIONS: "missions-celebration",
                RANKED: "ranked-celebration"
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const s = {
                    UNKNOWN: "UNKNOWN",
                    ENABLED: "ENABLED",
                    DISABLED: "DISABLED"
                },
                n = {
                    PRIVATE: "PRIVATE",
                    PUBLIC: "PUBLIC"
                };
            var a = {
                ProfilePrivacyEnabledState: s,
                ProfilePrivacySetting: n,
                DEFAULT_PROFILE_PRIVACY: {
                    enabledState: s.UNKNOWN,
                    setting: n.PUBLIC
                }
            };
            t.default = a
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const s = "RANKED_SOLO_5x5",
                n = "RANKED_FLEX_SR",
                a = "RANKED_FLEX_TT",
                o = "RANKED_PREMADE_5x5",
                l = "JADE_RANKED_SOLO_5x5",
                i = "CHERRY",
                r = "RANKED_TFT",
                m = "RANKED_TFT_DOUBLE_UP",
                c = "RANKED_TFT_TURBO",
                d = "RANKED_TFT_PAIRS",
                p = [s, n, o, l],
                u = [...p, a],
                g = [i],
                h = [r, m],
                f = [c, d],
                b = [...h, ...f],
                y = [...u, ...h],
                v = [...f, ...g];
            var _ = {
                RANKED_SOLO_5x5_QUEUE_TYPE: s,
                RANKED_FLEX_SR_QUEUE_TYPE: n,
                RANKED_PREMADE_5X5_QUEUE_TYPE: o,
                JADE_RANKED_SOLO_5x5: l,
                RANKED_FLEX_TT_QUEUE_TYPE: a,
                RANKED_CHERRY_QUEUE_TYPE: i,
                RANKED_TFT_QUEUE_TYPE: r,
                RANKED_TFT_DOUBLE_UP_QUEUE_TYPE: m,
                RANKED_TFT_TURBO_QUEUE_TYPE: c,
                RANKED_TFT_PAIRS_QUEUE_TYPE: d,
                RANKED_LOL_QUEUE_TYPES: u,
                RANKED_SR_QUEUE_TYPES: p,
                RANKED_TFT_QUEUE_TYPES: h,
                RATED_TFT_QUEUE_TYPES: f,
                RANKED_AND_RATED_TFT_QUEUE_TYPES: b,
                ALL_RANKED_QUEUE_TYPES: y,
                ALL_RATED_QUEUE_TYPES: v,
                ALL_RANKED_AND_RATED_QUEUE_TYPES: [...y, ...v]
            };
            t.default = _
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const s = "UNRANKED",
                n = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND"],
                a = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND", "MASTER", "GRANDMASTER", "CHALLENGER"],
                o = "LEGEND",
                l = n[n.length - 1],
                i = [l, "MASTER", "GRANDMASTER", "CHALLENGER"],
                r = ["IV", "III", "II", "I"],
                m = ["GRAY", "GREEN", "BLUE", "PURPLE", "ORANGE"];

            function c(e) {
                const t = {};
                for (let s = 0; s < e.length; s++) {
                    t[e[s]] = s
                }
                return t
            }
            var d = {
                TIER_NAME_UNRANKED: s,
                TIER_NAME_NONE: "NONE",
                TIER_NAME_PROVISIONAL: "PROVISIONAL",
                TIER_NAME_LEGEND: o,
                DIVISION_NAME_NONE: "NA",
                JADE_APEX_TIERS: [o],
                APEX_TIERS: ["MASTER", "GRANDMASTER", "CHALLENGER"],
                REGULAR_TIERS: n,
                TIERS: a,
                ALL_TIERS: [s, "IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND", "MASTER", "GRANDMASTER", "CHALLENGER", "SALT", "WOOD", "LEGEND"],
                TIERS_WITH_NO_DIVISIONS: [s, "MASTER", "GRANDMASTER", "CHALLENGER"],
                HIGHEST_TIER: l,
                LOWEST_TIER: n[0],
                DIVISIONS: r,
                HIGHEST_DIVISION: r[r.length - 1],
                LOWEST_DIVISION: r[0],
                LP_PER_DIVISION: 100,
                TIER_NAME_TO_ORDINAL: c(a),
                DIVISION_TO_ORDINAL: c(r),
                DIVISION_TO_NUMERAL: Object.freeze({
                    NA: 0,
                    I: 1,
                    II: 2,
                    III: 3,
                    IV: 4
                }),
                TFT_RATED_TIERS: m,
                RATED_TIER_NAME_NONE: "NONE",
                LOWEST_TFT_RATED_TIER: m[0],
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
                DEFAULT_ORANGE_ESSENCE_QUANTITY: 500,
                TIERS_WITH_DECAY: i
            };
            t.default = d
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
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
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                DEFAULT_SUMMONER_ICON_ID: 29
            };
            t.default = s
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.TIME_UNITS = t.TIME_CONVERSIONS = void 0;
            const s = {
                MILLISECONDS: "milliseconds",
                SECONDS: "seconds",
                MINUTES: "minutes",
                HOURS: "hours",
                DAYS: "days",
                WEEKS: "weeks",
                MONTHS: "months",
                YEARS: "years"
            };
            t.TIME_UNITS = s;
            const n = 36e5,
                a = 864e5,
                o = 6048e5,
                l = {
                    MILLISECONDS_IN_A_SECOND: 1e3,
                    MILLISECONDS_IN_A_MINUTE: 6e4,
                    MILLISECONDS_IN_A_HOUR: n,
                    MILLISECONDS_IN_A_DAY: a,
                    MILLISECONDS_IN_A_WEEK: o,
                    MILLISECONDS_IN_A_YEAR: 314496e5
                };
            t.TIME_CONVERSIONS = l;
            var i = {
                TIME_UNITS: s,
                TIME_CONVERSIONS: l
            };
            t.default = i
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
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = class {
                constructor(e) {
                    this.runtimeComponents = {}, this.factoryDefinitions = {}, this.emberApplicationFactory = e
                }
                hasComponent(e) {
                    return Boolean(this.runtimeComponents[e])
                }
                getComponent(e) {
                    return this.hasComponent(e) ? this.runtimeComponents[e].definition : null
                }
                setComponent(e, t, s) {
                    if (s) {
                        this.runtimeComponents[t] = {
                            parent: e,
                            definition: s
                        };
                        const n = this.getFactoryDefinition(e);
                        n && (this._modifyFactoryDefinition(n, s), this._setFactoryDefinition(n))
                    } else delete this.runtimeComponents[t]
                }
                getFactoryDefinition(e) {
                    return this.factoryDefinitions[e]
                }
                setFactoryDefinition(e) {
                    this.factoryDefinitions[e.name] = e, this._retroactivelyModifyFactoryDefinition(e)
                }
                _modifyFactoryDefinition(e, t) {
                    if (e)
                        for (const s in t) e[s] = t[s]
                }
                _retroactivelyModifyFactoryDefinition(e) {
                    let t = !1;
                    for (const s in this.runtimeComponents) {
                        const n = this.runtimeComponents[s];
                        n.parent === e.name && (this._modifyFactoryDefinition(e, n.definition), t = !0)
                    }
                    t && this._setFactoryDefinition(e)
                }
                _setFactoryDefinition(e) {
                    this.emberApplicationFactory.setFactoryDefinition(e)
                }
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                m || (m = new r);
                return m
            };
            var n = s(1),
                a = s(3),
                o = s(30),
                l = s(31),
                i = s(39);
            class r {
                constructor() {
                    n.extEmberModel.set("isPostgameShowing", !1), this._registerApplication();
                    const e = n.Viewport.main().getScreenRoot("rcp-fe-lol-postgame"),
                        t = (0, n.getProvider)().getSocket();
                    this._show = this._show.bind(this), this._handleGameflowData = this._handleGameflowData.bind(this), this._catchAndHide = this._catchAndHide.bind(this), this._application = null, this._screenRoot = e, this._telemetryBinding = (0, n.dataBinding)("/telemetry"), this._gameflowBinding = (0, n.dataBinding)("/lol-gameflow", t), this._createGameFlowObserver()
                }
                _registerApplication() {
                    this._isAppRegistered || ((0, l.registerEmberApplication)(), this._isAppRegistered = !0)
                }
                _getOrCreateApplication() {
                    return this._application || (n.logger.info("Creating postgame ember application"), this._application = (0, l.createEmberApplication)()), this._application
                }
                _show() {
                    return this._screenRoot.bump().then((() => this._getOrCreateApplication().emberAppInstancePromise)).then((() => {
                        n.extEmberModel.get("isPostgameShowing") || (this._screenRoot.getElement().appendChild(this._application.domNode), n.extEmberModel.set("isPostgameShowing", !0), n.Telemetry.recordCriticalFlow("UI_POST_GAME_SHOWN", !0), this._startSessionTime = new Date)
                    })).catch(this._catchAndHide)
                }
                _hide() {
                    if (!n.extEmberModel.get("isPostgameShowing") || !this._application) return;
                    n.extEmberModel.set("isPostgameShowing", !1);
                    const e = this._screenRoot.getElement();
                    for (; e.hasChildNodes();) e.removeChild(e.lastChild);
                    this._startSessionTime = null, this._screenRoot.release()
                }
                _catchAndHide(e = {}) {
                    n.logger.error("There was a problem creating the ember application", e), n.Telemetry.recordCriticalFlow("UI_POST_GAME_SHOWN", !1), this._hide()
                }
                _createGameFlowObserver() {
                    this._gameflowBinding.observe("/v1/session", this._handleGameflowData)
                }
                _handleGameflowData(e) {
                    [o.GAMEFLOW_PHASES.PreEndOfGame, o.GAMEFLOW_PHASES.WaitingForStats, o.GAMEFLOW_PHASES.EndOfGame].includes(e?.phase) ? (n.Telemetry.startTracingEvent(i.TELEMETRY_EVENT_NAMES.RENDER_POST_GAME), this._show()) : (e?.phase === o.GAMEFLOW_PHASES.GameStart && this._getOrCreateApplication(), this._hide())
                }
                sendTelemetryEvent(e, t) {
                    const s = new Date - this._startSessionTime;
                    t = Object.assign(t, {
                        plugin: "rcp-fe-lol-postgame",
                        sessionTime: s.toString()
                    }), this._telemetryBinding.post(`/v1/events/${e}`, t)
                }
                setPlayerHonorComponent(e) {
                    n.ApplicationInjector.setComponent(a.POSTGAME_EMBER_APP_NAME, a.POSTGAME_PLAYER_HONOR_NAME, e)
                }
                addProgressionComponent(e, t, s, a, o) {
                    n.ProgressionComponentHelper.addProgressionComponent(e, t, s, a, o)
                }
                removeProgressionComponent(e) {
                    n.ProgressionComponentHelper.removeProgressionComponent(e)
                }
                setGameSpecificPlayAgainOverride(e, t, s) {
                    n.extEmberModel.set("playAgainOverride", {
                        gameflowGameId: e,
                        confirmButtonText: t,
                        navigationCallback: s
                    })
                }
            }
            let m
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TIER_NAME_UNRANKED = t.TIER_NAME_NONE = t.TFT_SKILL_TREE_ASSETS_KEY = t.SERVICE_ENDPOINTS = t.SECOND_IN_MS = t.REWARD_CELEBRATION_NAME = t.PROGRESS_BAR_MAX_WIDTH = t.PROGRESS_BAR_END_OFFSET = t.PLUGIN_NAME = t.PLAY_BUTTON_STATE_MACHINE_SELECTOR = t.PLAYFLOW_VIDEO_SOURCE_STATE = t.PLAYFLOW_VIDEO_SOURCE_PATH = t.PLAYFLOW_VIDEOS_ROOT = t.PARTY_STATUS_STATE_MACHINE_SELECTOR = t.NUMBER_AUGMENTS_TO_RENDER = t.MISSION_STATUS_REWARDS_PENDING = t.MISSION_STATUS_IN_PROGRESS = t.MISSION_STATUS_ELIGIBLE = t.MISSION_STATUS_COMPLETE = t.MISSION_STATUS_CLAIMABLE = t.MINUTE_IN_MS = t.MAX_ORB_LEVEL = t.MAIN_NAVIGATION_ITEM_TRA_KEY = t.LENGTH_OF_MILESTONES = t.HOUR_IN_MS = t.GAMEFLOW_PHASES = t.DEFAULT_REWARD_IMG_URL = t.DEFAULT_RANKED_STATS = t.DAY_IN_MS = t.APEX_TIERS = void 0;
            const s = "rcp-fe-lol-postgame";
            t.PLUGIN_NAME = s;
            const n = s + "reward-celebration";
            t.REWARD_CELEBRATION_NAME = n;
            t.MAIN_NAVIGATION_ITEM_TRA_KEY = "navbar_tft";
            t.SECOND_IN_MS = 1e3;
            t.MINUTE_IN_MS = 6e4;
            const a = 36e5;
            t.HOUR_IN_MS = a;
            t.DAY_IN_MS = 864e5;
            t.PROGRESS_BAR_MAX_WIDTH = 124;
            t.PROGRESS_BAR_END_OFFSET = 8;
            t.LENGTH_OF_MILESTONES = 9;
            t.MAX_ORB_LEVEL = 5;
            t.MISSION_STATUS_IN_PROGRESS = "IN_PROGRESS";
            t.MISSION_STATUS_CLAIMABLE = "SELECT_REWARDS";
            t.MISSION_STATUS_ELIGIBLE = "REWARDS_ELIGIBLE";
            t.MISSION_STATUS_REWARDS_PENDING = "REWARDS_PENDING";
            t.MISSION_STATUS_COMPLETE = "COMPLETE";
            t.NUMBER_AUGMENTS_TO_RENDER = 5;
            t.DEFAULT_REWARD_IMG_URL = "/fe/lol-loot/assets/videos/low_spec_images/open_cm_image.png";
            t.DEFAULT_RANKED_STATS = {
                tier: "UNRANKED",
                division: "NA",
                leaguePoints: 0,
                provisionalGameThreshold: 10,
                provisionalGamesRemaining: 0,
                isProvisional: !1
            };
            t.APEX_TIERS = ["CHALLENGER", "GRANDMASTER", "MASTER"];
            t.TIER_NAME_UNRANKED = "UNRANKED";
            t.TIER_NAME_NONE = "NONE";
            t.GAMEFLOW_PHASES = {
                GameStart: "GameStart",
                PreEndOfGame: "PreEndOfGame",
                WaitingForStats: "WaitingForStats",
                EndOfGame: "EndOfGame"
            };
            const o = "/fe/lol-static-assets/videos";
            t.PLAYFLOW_VIDEOS_ROOT = o;
            const l = {
                intro: `${o}/find-match-button-intro.webm`,
                active: `${o}/find-match-button-active.webm`,
                idle: `${o}/find-match-button-idle.webm`,
                hover: `${o}/find-match-button-hover.webm`,
                pulse: `${o}/find-match-button-pulse.webm`,
                allReturned: `${o}/find-match-button-all-returned.webm`
            };
            t.PLAYFLOW_VIDEO_SOURCE_PATH = l;
            t.PLAYFLOW_VIDEO_SOURCE_STATE = {
                intro: "intro",
                idle: "idle",
                active: "active",
                hover: "hover",
                pulse: "pulse",
                allReturned: "all-returned"
            };
            t.PLAY_BUTTON_STATE_MACHINE_SELECTOR = ".postgame-button-vsm";
            t.PARTY_STATUS_STATE_MACHINE_SELECTOR = ".postgame-return-button-vsm";
            t.SERVICE_ENDPOINTS = {
                GENERIC_ASSETS: "/lol-game-data/assets/v1/generic-assets.json"
            };
            t.TFT_SKILL_TREE_ASSETS_KEY = "lcu-assets-tft-skill-tree"
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createEmberApplication = function() {
                return n.ComponentFactory.create(a.POSTGAME_EMBER_APP_NAME)
            }, t.registerEmberApplication = function() {
                const e = {
                    name: a.POSTGAME_EMBER_APP_NAME,
                    ComponentFactory: n.ComponentFactory,
                    Router: o.default,
                    IndexRoute: l.default,
                    PostgameRoute: i.default,
                    PostgameController: r.default,
                    PostgameCommonComponent: m.default,
                    PostgameHeaderComponent: c.default,
                    PostgameGameInfoComponent: d.default,
                    PostgameGameResultComponent: p.default,
                    PostgameGameResultIconComponent: u.default,
                    PostgameScoreboardComponent: g.default,
                    PostgameScoreboardPlayerAugmentComponent: h.default,
                    PostgameScoreboardPlayerKeystoneIconComponent: f.default,
                    PostgameScoreboardPlayerButtonsComponent: b.default,
                    PostgameScoreboardPlayerItemComponent: y.default,
                    PostgameScoreboardProgressionComponent: v.default,
                    PostgameScoreboardProgressionNumberReelsComponent: _.default,
                    PostgameScoreboardBreakdownComponent: E.default,
                    PostgameScoreboardProgressionRankedComponent: k.default,
                    PostgameScoreboardProgressionRatedComponent: T.default,
                    PostgameScoreboardReplayButtonComponent: A.default,
                    TftHeaderComponent: R.default,
                    TftPartnerGroupPlacementComponent: M.default,
                    TftPlayerComponent: L.default,
                    TftTooltipComponent: I.default,
                    TftSkilltreeScoreboardComponent: O.default,
                    TftSkilltreeScoreRowComponent: N.default,
                    TftSkilltreeProgressionComponent: D.default,
                    TftSkilltreeProgressionBannerSpineComponent: B.default,
                    PostgameSecondaryProgressionComponent: C.default,
                    PostgamePartyStatusComponent: w.default,
                    ArrowFooterComponent: rs,
                    ButtonMaskIconComponent: ms,
                    HextechLoadingAnimationComponent: cs,
                    GenericButtonComponent: Qe.default,
                    StrawberryPostgameAchievementsComponent: je.StrawberryPostgameAchievementsComponent,
                    StrawberryPostgameRootComponent: Fe.default,
                    StrawberryScoreboardRootComponent: Ve.default,
                    StrawberryScoreboardHeaderComponent: We.default,
                    StrawberryScoreboardRowComponent: qe.default,
                    RenderTimerComponent: Ye.default,
                    EternalsTokenComponent: Xe.default,
                    PostgameRootComponent: Ke.default,
                    PostgameSubNavigationComponent: $e.default,
                    PostgameProgressionComponent: ze.default,
                    PrestigeProgressionComponent: Ze.default,
                    PrestigeProgressionTooltipComponent: et.default,
                    LegendaryMasteryProgressionComponent: tt.default,
                    RankedProgressionComponent: nt.default,
                    RatingChangeComponent: st.default,
                    MiniseriesProgressComponent: at.default,
                    ChallengeUpdateContainerComponent: ot.default,
                    ChallengeUpdatesTooltipComponent: lt.default,
                    EternalsUpdatesTooltipComponent: it.default,
                    PostgamePartyStatusV2Component: rt.default,
                    ProgressionModalComponent: mt.default,
                    CherryScoreboardHeaderComponent: ct.default,
                    ScoreboardHeaderComponent: dt.default,
                    ScoreboardHonorFlairComponent: pt.default,
                    ScoreboardRootComponent: ut.default,
                    CherryScoreboardRowComponent: gt.default,
                    ScoreboardClimbIndicatorComponent: ht.default,
                    ScoreboardRowComponent: ft.default,
                    ScoreboardRowActionsMenuComponent: bt.default,
                    ScoreboardRowStatDisplayComponent: yt.default,
                    ScoreboardStatSwitcherComponent: vt.default,
                    AnimatedPlayButtonComponent: Je.default,
                    SeasonPassProgressionComponent: _t.default,
                    SeasonPassErrorStateComponent: Et.default,
                    ScoreboardSpellComponent: Pt.default,
                    PostgameReportModal: us,
                    GameIdClipboardCopyComponent: ds,
                    PlayerNameComponent: ps,
                    ChallengeCardHeaderComponent: gs,
                    ChallengeCardComponent: hs,
                    ChallengeItemFooterComponent: fs,
                    ChallengeItemTooltipComponent: bs,
                    ChallengeItemComponent: ys,
                    EternalsItemTooltipComponent: vs,
                    EternalsItemComponent: _s,
                    IdentityCustomizerTokenComponent: Ps,
                    GradeDisplayComponent: n.SharedChampionMasteryComponents.GradeDisplayComponent,
                    MasteryTooltipComponent: n.SharedChampionMasteryComponents.MasteryTooltipComponent,
                    MilestoneTooltipComponent: n.SharedChampionMasteryComponents.MilestoneTooltipComponent,
                    MasteryCrestComponent: n.SharedChampionMasteryComponents.MasteryCrestComponent,
                    PostgameScoreboardPlayerHonorFlairComponent: S.default,
                    PostgameScoreboardProgressionHonorNotificationComponent: x.default,
                    PostgameScoreboardProgressionHonorCategoryIconComponent: P.default,
                    ...xt.HONOR_VOTING_COMPONENTS,
                    tra: n.traService,
                    PostgameService: F.default,
                    PostgameRankedService: V.default,
                    PartiesService: W.default,
                    GameclientPostgameService: q.default,
                    GameflowService: Y.default,
                    ChatMessagesService: X.default,
                    EternalsService: K.default,
                    EndOfGameService: se.default,
                    HonorService: $.default,
                    ChallengesService: Q.default,
                    PerksService: J.default,
                    GameDataService: Es,
                    RiotclientService: Ss,
                    SummonerService: xs,
                    PlayerActionsService: ne.default,
                    RemedyService: z.default,
                    ChampionMasteryService: Z.default,
                    SkillTreeService: ae.default,
                    EventHubService: ee.default,
                    ObjectivesService: te.default,
                    RankedAssetsService: ks,
                    RenderTelemetrySenderComponent: n.default.SharedEmberComponents.RenderTelemetrySenderComponent,
                    TEMPLATES: {
                        application: le.default,
                        postgame: ie.default,
                        "components/postgame-common": re.default,
                        "components/postgame-header": me.default,
                        "components/postgame-game-info": ce.default,
                        "components/postgame-game-result": de.default,
                        "components/postgame-game-result-icon": pe.default,
                        "components/postgame-scoreboard": ue.default,
                        "components/postgame-scoreboard-player-augment": ge.default,
                        "components/postgame-scoreboard-player-keystone-icon": he.default,
                        "components/postgame-scoreboard-player-buttons": fe.default,
                        "components/postgame-scoreboard-player-item": be.default,
                        "components/postgame-scoreboard-progression": ye.default,
                        "components/postgame-scoreboard-progression-number-reels": ve.default,
                        "components/postgame-scoreboard-breakdown": _e.default,
                        "components/postgame-scoreboard-progression-ranked": Ee.default,
                        "components/postgame-scoreboard-progression-rated": Se.default,
                        "components/postgame-secondary-progression": xe.default,
                        "components/postgame-party-status": Pe.default,
                        "components/postgame-scoreboard-player-honor-flair": ke.default,
                        "components/postgame-scoreboard-progression-honor-notification": Te.default,
                        "components/postgame-scoreboard-progression-honor-category-icon": Ae.default,
                        ...xt.HONOR_VOTING_TEMPLATES,
                        "components/strawberry-postgame-achievements": kt.default,
                        "components/strawberry-postgame-root": Tt.default,
                        "components/strawberry-scoreboard-root": At.default,
                        "components/strawberry-scoreboard-header": Ct.default,
                        "components/strawberry-scoreboard-row": wt.default,
                        "components/render-timer": Rt.default,
                        "components/eternals-token": Mt.default,
                        "components/postgame-root": Lt.default,
                        "components/postgame-sub-navigation": It.default,
                        "components/postgame-progression": Ot.default,
                        "components/prestige-progression": Nt.default,
                        "components/prestige-progression-tooltip": Dt.default,
                        "components/legendary-mastery-progression": Bt.default,
                        "components/ranked-progression": Gt.default,
                        "components/rating-change": Ut.default,
                        "components/miniseries-progress": Ht.default,
                        "components/challenge-update-container": jt.default,
                        "components/challenge-updates-tooltip": Ft.default,
                        "components/eternals-updates-tooltip": Vt.default,
                        "components/progression-modal": qt.default,
                        "components/cherry-scoreboard-header": Yt.default,
                        "components/scoreboard-header": Xt.default,
                        "components/scoreboard-honor-flair": Kt.default,
                        "components/scoreboard-root": $t.default,
                        "components/cherry-scoreboard-row": Qt.default,
                        "components/scoreboard-climb-indicator": Jt.default,
                        "components/scoreboard-row": zt.default,
                        "components/scoreboard-row-actions-menu": Zt.default,
                        "components/scoreboard-row-stat-display": es.default,
                        "components/scoreboard-stat-switcher": ts.default,
                        "components/postgame-party-status-v2": Wt.default,
                        "components/animated-play-button": ss.default,
                        "components/season-pass-progression": ns.default,
                        "components/season-pass-error-state": as.default,
                        "components/scoreboard-spell": os.default,
                        "components/tft-header": Ce.default,
                        "components/tft-partner-group-placement": we.default,
                        "components/tft-player": Re.default,
                        "components/tft-tooltip": Me.default,
                        "components/tft-skilltree-scoreboard": Le.default,
                        "components/tft-skilltree-score-row": Ie.default,
                        "components/tft-skilltree-progression": Oe.default,
                        "components/tft-skilltree-progression-banner-spine": Ne.default
                    }
                };
                n.SharedSeasonPassComponents && Object.assign(e, {
                    ...n.SharedSeasonPassComponents
                });
                n.StrawberryModules && Object.assign(e, {
                    ...n.StrawberryModules
                });
                Object.assign(e, {
                    TftPromethiumScoreboardComponent: G.default,
                    TftPromethiumScoreRowComponent: U.default,
                    TftPromethiumProgressionComponent: H.default,
                    TftPromethiumProgressionBannerSpineComponent: j.default,
                    PromethiumService: oe.default
                }), Object.assign(e.TEMPLATES, {
                    "components/tft-promethium-scoreboard": De.default,
                    "components/tft-promethium-score-row": Be.default,
                    "components/tft-promethium-progression": Ge.default,
                    "components/tft-promethium-progression-banner-spine": Ue.default
                }), n.TftBridgeComponents && Object.assign(e, {
                    ...n.TftBridgeComponents
                });
                const t = s(225).default,
                    ls = s(227).default,
                    is = s(229).default,
                    Ts = s(231).default,
                    As = s(233).default,
                    Cs = s(235).default,
                    ws = s(237).default,
                    Rs = s(239).default,
                    Ms = s(241).default;
                Object.assign(e, {
                    JadeLevelProgressionComponent: t,
                    JadePostgameComponent: ls,
                    JadeProgressionScreenComponent: is,
                    JadeRankedProgressionComponent: Ts,
                    JadeScoreboardHeaderComponent: Cs,
                    JadeScoreboardRowComponent: ws,
                    JadeScoreboardScreenComponent: As,
                    JadeSeasonPassProgressionComponent: Rs,
                    SummonersJourneyService: Ms
                });
                const Ls = s(243),
                    Is = s(244),
                    Os = s(245),
                    Ns = s(246),
                    Ds = s(247),
                    Bs = s(248),
                    Gs = s(249),
                    Us = s(250);
                Object.assign(e.TEMPLATES, {
                    "components/jade-level-progression": Ls,
                    "components/jade-postgame": Is,
                    "components/jade-progression-screen": Os,
                    "components/jade-ranked-progression": Ns,
                    "components/jade-scoreboard-header": Ds,
                    "components/jade-scoreboard-row": Bs,
                    "components/jade-scoreboard-screen": Gs,
                    "components/jade-season-pass-progression": Us
                }), n.ApplicationInjector.setFactoryDefinition(e), n.emberApplicationFactory.setFactoryDefinition(a.POSTGAME_EMBER_APP_NAME, e, {
                    EMBER_CLI_COMPAT: !0
                }), n.ProgressionComponentHelper.addInternalProgressionComponent("postgame-scoreboard-progression-ranked", 10, !0, !1), n.ProgressionComponentHelper.addInternalProgressionComponent("postgame-scoreboard-progression-rated", 15, !1, !1), n.ProgressionComponentHelper.addInternalProgressionComponent("postgame-scoreboard-progression-ranked-rewards", 20, !0, !1), n.ProgressionComponentHelper.addInternalProgressionComponent("postgame-scoreboard-progression-mastery-meter", 30, !0, !1), n.ProgressionComponentHelper.addInternalProgressionComponent("postgame-scoreboard-progression-xp-meter", 40, !0, !1), n.ProgressionComponentHelper.addInternalProgressionComponent("postgame-scoreboard-progression-honor-notification", 60, !1, !0), n.emberApplicationFactory.setFactoryDefinition({
                    name: "ValorAegisModalComponent",
                    ComponentFactory: n.ComponentFactory,
                    tra: n.traService,
                    ValorAegisModalComponent: St.default,
                    PostgameService: F.default
                }), n.emberApplicationFactory.setFactoryDefinition({
                    name: a.REWARD_CELEBRATION_NAME,
                    ComponentFactory: n.ComponentFactory,
                    tra: n.traService,
                    RewardCelebrationComponent: He.default
                })
            };
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var s = is(t);
                    if (s && s.has(e)) return s.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
                        } n.default = e, s && s.set(e, n);
                    return n
                }(s(1)),
                a = s(3),
                o = ls(s(32)),
                l = ls(s(33)),
                i = ls(s(35)),
                r = ls(s(36)),
                m = ls(s(37)),
                c = ls(s(40)),
                d = ls(s(41)),
                p = ls(s(42)),
                u = ls(s(43)),
                g = ls(s(44)),
                h = ls(s(49)),
                f = ls(s(50)),
                b = ls(s(51)),
                y = ls(s(52)),
                v = ls(s(53)),
                _ = ls(s(54)),
                E = ls(s(55)),
                S = ls(s(56)),
                x = ls(s(57)),
                P = ls(s(58)),
                k = ls(s(59)),
                T = ls(s(60)),
                A = ls(s(61)),
                C = ls(s(62)),
                w = ls(s(63)),
                R = ls(s(64)),
                M = ls(s(65)),
                L = ls(s(66)),
                I = ls(s(67)),
                O = ls(s(68)),
                N = ls(s(69)),
                D = ls(s(70)),
                B = ls(s(71)),
                G = ls(s(72)),
                U = ls(s(73)),
                H = ls(s(74)),
                j = ls(s(75)),
                F = ls(s(76)),
                V = ls(s(77)),
                W = ls(s(78)),
                q = ls(s(79)),
                Y = ls(s(80)),
                X = ls(s(81)),
                K = ls(s(82)),
                $ = ls(s(83)),
                Q = ls(s(84)),
                J = ls(s(85)),
                z = ls(s(86)),
                Z = ls(s(87)),
                ee = ls(s(88)),
                te = ls(s(89)),
                se = ls(s(91)),
                ne = ls(s(92)),
                ae = ls(s(93)),
                oe = ls(s(94)),
                le = ls(s(95)),
                ie = ls(s(96)),
                re = ls(s(97)),
                me = ls(s(98)),
                ce = ls(s(99)),
                de = ls(s(100)),
                pe = ls(s(101)),
                ue = ls(s(102)),
                ge = ls(s(103)),
                he = ls(s(104)),
                fe = ls(s(105)),
                be = ls(s(106)),
                ye = ls(s(107)),
                ve = ls(s(108)),
                _e = ls(s(109)),
                Ee = ls(s(110)),
                Se = ls(s(111)),
                xe = ls(s(112)),
                Pe = ls(s(113)),
                ke = ls(s(114)),
                Te = ls(s(115)),
                Ae = ls(s(116)),
                Ce = ls(s(117)),
                we = ls(s(118)),
                Re = ls(s(119)),
                Me = ls(s(120)),
                Le = ls(s(121)),
                Ie = ls(s(122)),
                Oe = ls(s(123)),
                Ne = ls(s(124)),
                De = ls(s(125)),
                Be = ls(s(126)),
                Ge = ls(s(127)),
                Ue = ls(s(128)),
                He = ls(s(129)),
                je = s(132),
                Fe = ls(s(133)),
                Ve = ls(s(134)),
                We = ls(s(135)),
                qe = ls(s(136)),
                Ye = ls(s(139)),
                Xe = ls(s(140)),
                Ke = ls(s(141)),
                $e = ls(s(142)),
                Qe = ls(s(143)),
                Je = ls(s(147)),
                ze = ls(s(148)),
                Ze = ls(s(150)),
                et = ls(s(151)),
                tt = ls(s(152)),
                st = ls(s(153)),
                nt = ls(s(155)),
                at = ls(s(156)),
                ot = ls(s(157)),
                lt = ls(s(158)),
                it = ls(s(159)),
                rt = ls(s(160)),
                mt = ls(s(161)),
                ct = ls(s(163)),
                dt = ls(s(165)),
                pt = ls(s(166)),
                ut = ls(s(167)),
                gt = ls(s(168)),
                ht = ls(s(169)),
                ft = ls(s(171)),
                bt = ls(s(172)),
                yt = ls(s(173)),
                vt = ls(s(174)),
                _t = ls(s(175)),
                Et = ls(s(176)),
                St = ls(s(177)),
                xt = s(180),
                Pt = ls(s(189)),
                kt = ls(s(190)),
                Tt = ls(s(191)),
                At = ls(s(192)),
                Ct = ls(s(193)),
                wt = ls(s(194)),
                Rt = ls(s(195)),
                Mt = ls(s(196)),
                Lt = ls(s(197)),
                It = ls(s(198)),
                Ot = ls(s(199)),
                Nt = ls(s(200)),
                Dt = ls(s(201)),
                Bt = ls(s(202)),
                Gt = ls(s(203)),
                Ut = ls(s(204)),
                Ht = ls(s(205)),
                jt = ls(s(206)),
                Ft = ls(s(207)),
                Vt = ls(s(208)),
                Wt = ls(s(209)),
                qt = ls(s(210)),
                Yt = ls(s(211)),
                Xt = ls(s(212)),
                Kt = ls(s(213)),
                $t = ls(s(214)),
                Qt = ls(s(215)),
                Jt = ls(s(216)),
                zt = ls(s(217)),
                Zt = ls(s(218)),
                es = ls(s(219)),
                ts = ls(s(220)),
                ss = ls(s(221)),
                ns = ls(s(222)),
                as = ls(s(223)),
                os = ls(s(224));

            function ls(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function is(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    s = new WeakMap;
                return (is = function(e) {
                    return e ? s : t
                })(e)
            }
            const {
                ArrowFooterComponent: rs,
                ButtonMaskIconComponent: ms,
                HextechLoadingAnimationComponent: cs,
                GameIdClipboardCopyComponent: ds,
                PlayerNameComponent: ps,
                PostgameReportModal: us
            } = n.SharedComponents.getSharedEmberComponents(), {
                ChallengeCardHeaderComponent: gs,
                ChallengeCardComponent: hs,
                ChallengeItemFooterComponent: fs,
                ChallengeItemTooltipComponent: bs,
                ChallengeItemComponent: ys,
                EternalsItemTooltipComponent: vs,
                EternalsItemComponent: _s,
                GameDataService: Es,
                RiotclientService: Ss,
                SummonerService: xs,
                IdentityCustomizerTokenComponent: Ps
            } = n.SharedComponents.getApi_SharedChallengesComponents(), {
                RankedAssetsService: ks
            } = n.SharedComponents.getApi_SharedRankedComponents()
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const n = s(1).Ember.Router.extend({
                location: "none"
            });
            n.map((function() {
                this.route("postgame")
            }));
            var a = n;
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            s(34);
            var a = n.Ember.Route.extend({
                beforeModel() {
                    this.replaceWith("postgame")
                }
            });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1).Ember.Route.extend({
                model() {}
            });
            t.default = n
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(4),
                o = s(30);
            var l = n.Ember.Controller.extend({
                gameflow: n.Ember.inject.service(),
                postgame: n.Ember.inject.service(),
                gameclientPostgame: n.Ember.inject.service(),
                honor: n.Ember.inject.service(),
                backgroundImgPath: n.Ember.computed.alias("gameflow.backgroundImgPath"),
                backgroundImgPathDark: n.Ember.computed("gameflow.backgroundImgPathDark", "gameflow.gameMode", (function() {
                    return this.get("gameflow.gameMode") === a.GAME_MODES.JADE ? "" : this.get("gameflow.backgroundImgPathDark") || ""
                })),
                postgameComponent: n.Ember.computed("gameflow.gameMode", (function() {
                    return this.get("gameflow.gameMode") === a.GAME_MODES.JADE ? "jade-postgame" : "postgame-root"
                })),
                showPostgameV2: n.Ember.computed.not("gameflow.isTFT"),
                haveGameClientStatsBlock: n.Ember.computed.bool("gameclientPostgame.gameClientStats"),
                isTFTReadyToShow: n.Ember.computed.and("gameflow.isTFT", "haveGameClientStatsBlock"),
                haveLoLGameClientStatsBlock: n.Ember.computed.bool("gameclientPostgame.lolGameClientStats"),
                isCherryReadyToShow: n.Ember.computed.and("gameflow.isCherry", "haveLoLGameClientStatsBlock"),
                haveEOGStatsBlock: n.Ember.computed.bool("postgame.eogStatsBlock"),
                isEoGPhase: n.Ember.computed.equal("gameflow.phase", o.GAMEFLOW_PHASES.EndOfGame),
                isSRReadyToShow: n.Ember.computed.and("haveEOGStatsBlock", "isEoGPhase"),
                isCustomGame: n.Ember.computed.equal("gameflow.isCustomGame", !0),
                isCustomGameReadyToShow: n.Ember.computed.and("haveEOGStatsBlock", "isCustomGame", "isEoGPhase"),
                isPostgameReady: n.Ember.computed.or("isSRReadyToShow", "isCherryReadyToShow", "isTFTReadyToShow", "isCustomGameReadyToShow"),
                isWaitingForStats: n.Ember.computed.equal("gameflow.phase", o.GAMEFLOW_PHASES.WaitingForStats),
                isWaitingForChallenges: n.Ember.computed.equal("postgame.preEndOfGameSequence", a.PRE_END_OF_GAME_SEQUENCE_EVENTS.CHALLENGES),
                isWaitingForMissions: n.Ember.computed.equal("postgame.preEndOfGameSequence", a.PRE_END_OF_GAME_SEQUENCE_EVENTS.MISSIONS),
                isWaitingForRanked: n.Ember.computed.equal("postgame.preEndOfGameSequence", a.PRE_END_OF_GAME_SEQUENCE_EVENTS.RANKED),
                isHonorVotingPhase: n.Ember.computed.equal("postgame.preEndOfGameSequence", a.PRE_END_OF_GAME_SEQUENCE_EVENTS.HONOR),
                isHonorEnabled: n.Ember.computed.and("honor.enabled", "gameflow.isHonorEnabledForGameMode"),
                isWaitingForHonor: n.Ember.computed.and("isHonorVotingPhase", "isHonorEnabled"),
                isHonorBallotReady: n.Ember.computed("honor.honorBallot", (function() {
                    const e = this.get("honor.honorBallot");
                    return e && (e.eligibleAllies.length > 0 || e.eligibleOpponents.length > 0)
                })),
                isHonorShowing: n.Ember.computed.and("isWaitingForHonor", "isHonorBallotReady"),
                skipWaitingForStatsWaitMs: 5e3,
                skipWaitingForHonorWaitMs: 5e3,
                skipWaitingForChallengesWaitMs: 2e3,
                skipWaitingForMissionsWaitMs: 2e3,
                skipWaitingForRankedWaitMs: 2e3,
                renderTime: null,
                honorRetryTimer: null,
                honorRetryCount: 0,
                _lastGameflowPhase: null,
                datadogContext: n.Ember.computed("gameflow.gameMode", "gameflow.isTFT", "gameflow.phase", "postgame.preEndOfGameSequence", (function() {
                    return {
                        game: {
                            instance_id: this.get("gameflow.api.paths.root.api.paths.root.gameflowSession.gameData.gameId"),
                            mode: this.get("gameflow.gameMode"),
                            key: this.get("gameflow.isTFT") ? a.GAME_CONTEXT_KEYS.TFT : a.GAME_CONTEXT_KEYS.LEAGUE_OF_LEGENDS
                        },
                        gameflow: {
                            phase: this.get("gameflow.phase"),
                            sequence_event: this.get("postgame.preEndOfGameSequence")
                        }
                    }
                })),
                init() {
                    this._super(...arguments), this.set("extEmberModel", n.extEmberModel), this.get("honor")
                },
                gameFlowPhaseObserver: n.Ember.observer("gameflow.phase", (function() {
                    const e = this.get("gameflow.phase"),
                        t = this.get("_previousGameflowPhase"),
                        s = this.get("gameflow.api.paths.root.api.paths.root.gameflowSession.gameData.gameId");
                    e !== t && (e === o.GAMEFLOW_PHASES.WaitingForStats ? (n.Telemetry.startTracingEvent("client-waiting-for-stats-to-honor-shown"), n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME, {
                        ...this.get("datadogContext"),
                        start: {
                            source: `gameflow-phase-${e}`
                        }
                    })) : e === o.GAMEFLOW_PHASES.PreEndOfGame ? (n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME, {
                        ...this.get("datadogContext"),
                        start: {
                            source: `gameflow-phase-${e}`
                        }
                    }), n.TelemetryService.startTelemetryTimerEvent("eog_screen"), this.renderTime = Date.now()) : e === o.GAMEFLOW_PHASES.EndOfGame && (n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME, {
                        stop: {
                            source: `gameflow-phase-${e}`
                        }
                    }), n.TelemetryService.stopTelemetryTimerEvent("eog_screen", "loadTime", "postgame", {
                        game_id: s
                    })), this.set("_previousGameflowPhase", e))
                })),
                preEndOfGameSequenceObserver: n.Ember.observer("postgame.preEndOfGameSequence", (function() {
                    const e = this.get("postgame.preEndOfGameSequence"),
                        t = this.get("_previousPreEndOfGameSequence");
                    if (e !== t) {
                        switch (t) {
                            case a.PRE_END_OF_GAME_SEQUENCE_EVENTS.HONOR:
                                n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_HONOR);
                                break;
                            case a.PRE_END_OF_GAME_SEQUENCE_EVENTS.CHALLENGES:
                                n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_CHALLENGES);
                                break;
                            case a.PRE_END_OF_GAME_SEQUENCE_EVENTS.MISSIONS:
                                n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_MISSIONS);
                                break;
                            case a.PRE_END_OF_GAME_SEQUENCE_EVENTS.RANKED:
                                n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_RANKED)
                        }
                        switch (e) {
                            case a.PRE_END_OF_GAME_SEQUENCE_EVENTS.HONOR:
                                n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_HONOR, this.get("datadogContext"));
                                break;
                            case a.PRE_END_OF_GAME_SEQUENCE_EVENTS.CHALLENGES:
                                n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_CHALLENGES, this.get("datadogContext"));
                                break;
                            case a.PRE_END_OF_GAME_SEQUENCE_EVENTS.MISSIONS:
                                n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_MISSIONS, this.get("datadogContext"));
                                break;
                            case a.PRE_END_OF_GAME_SEQUENCE_EVENTS.RANKED:
                                n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_RANKED, this.get("datadogContext"))
                        }
                        this.set("_previousPreEndOfGameSequence", e)
                    }
                })),
                honorRetryObserver: n.Ember.observer("isWaitingForHonor", (function() {
                    if (!this.get("isWaitingForHonor") && this.honorRetryTimer) return n.logger.info("No longer waiting for honor, clearing retry timer."), clearInterval(this.honorRetryTimer), this.honorRetryTimer = null, void this.set("honorRetryCount", 0);
                    !this.get("isWaitingForHonor") || this.honorRetryTimer || this.get("isHonorBallotReady") || (n.logger.info("Waiting for honor voting but ballot is not available yet, setting up retry timer."), this.honorRetryTimer = setInterval((() => {
                        this._refreshHonorBallot()
                    }), 3500))
                })),
                _refreshHonorBallot() {
                    const e = this.get("honorRetryCount");
                    if (e >= 5) return n.logger.warning("Max honor ballot refresh retries reached, clearing retry timer."), void clearInterval(this.honorRetryTimer);
                    this.get("isHonorBallotReady") ? (n.logger.info("Honor ballot already exists, clearing retry timer."), clearInterval(this.honorRetryTimer), this.honorRetryTimer = null) : (this.set("honorRetryCount", e + 1), n.logger.info(`Honor ballot not populated, forcing refresh (attempt ${e+1}).`), this.get("honor").refreshHonorBallot())
                },
                skipPreEndOfGame() {
                    n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_SKIP, this.get("datadogContext")), n.db.post("/lol-pre-end-of-game/v1/skip-pre-end-of-game").then((() => {
                        n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_SKIP), n.datadogRum.stopOperationWithAbort(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME, {
                            stop: {
                                source: `skip-pre-end-of-game-${this.get("postgame.preEndOfGameSequence")}`
                            }
                        })
                    })).catch((e => {
                        n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME_PRE_END_OF_GAME_SKIP, e)
                    }))
                },
                actions: {
                    skipWaitingForStats() {
                        const e = this.get("gameflow.api.paths.root.api.paths.root.gameflowSession.gameData.gameId");
                        return n.TelemetryService.sendTelemetryEvent("eog_screen", "skipClicked", "postgame", {
                            game_id: e
                        }), n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_EXIT, {
                            game: {
                                instance_id: e
                            },
                            start: {
                                source: "skip-waiting-for-stats"
                            }
                        }), (0, n.dataBinding)("/lol-end-of-game").post("/v1/state/dismiss-stats").then((e => {
                            const t = {
                                stop: {
                                    source: "skip-waiting-for-stats"
                                }
                            };
                            n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_EXIT, t), n.datadogRum.stopOperationWithAbort(n.datadogRum.XP_CGL_POSTGAME, t)
                        })).catch((e => {
                            const t = {
                                stop: {
                                    source: "failed-skip-waiting-for-stats"
                                }
                            };
                            n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME_EXIT, e, t), n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME, e, t)
                        }))
                    },
                    skipWaitingForHonor() {
                        n.TelemetryService.sendTelemetryEvent("eog_screen", "skipHonorClicked", "postgame", {
                            game_id: this.get("gameflow.api.paths.root.api.paths.root.gameflowSession.gameData.gameId")
                        }), this.skipPreEndOfGame()
                    },
                    skipWaitingForChallenges() {
                        n.TelemetryService.sendTelemetryEvent("eog_screen", "skipChallengesClicked", "postgame", {
                            game_id: this.get("gameflow.api.paths.root.api.paths.root.gameflowSession.gameData.gameId")
                        }), this.skipPreEndOfGame()
                    },
                    skipWaitingForMissions() {
                        n.TelemetryService.sendTelemetryEvent("eog_screen", "skipMissionsClicked", "postgame", {
                            game_id: this.get("gameflow.api.paths.root.api.paths.root.gameflowSession.gameData.gameId")
                        }), this.skipPreEndOfGame()
                    },
                    skipWaitingForRanked() {
                        n.TelemetryService.sendTelemetryEvent("eog_screen", "skipRankedClicked", "postgame", {
                            game_id: this.get("gameflow.api.paths.root.api.paths.root.gameflowSession.gameData.gameId")
                        }), this.skipPreEndOfGame()
                    }
                }
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = i(s(29)),
                o = i(s(38)),
                l = s(30);
            s(39);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const {
                RunMixin: r
            } = n.EmberAddons.EmberLifeline;
            var m = n.Ember.Component.extend(r, o.default, {
                classNames: ["postgame-component"],
                parties: n.Ember.inject.service(),
                postgame: n.Ember.inject.service(),
                gameflow: n.Ember.inject.service(),
                gameclientPostgame: n.Ember.inject.service(),
                promethium: n.Ember.inject.service(),
                _battleBoostCelebratedGameIds: [],
                isLocalPlayerInTraditionalGame: n.Ember.computed.alias("postgame.isLocalPlayerInGame"),
                isLocalPlayerInTFTGame: n.Ember.computed.and("gameflow.isTFT", "gameClientPostgame.isLocalPlayerInGame"),
                isLocalPlayerInGame: n.Ember.computed.or("isLocalPlayerInTraditionalGame", "isLocalPlayerInTFTGame"),
                backgroundMusic: n.Ember.computed.alias("gameflow.map.assets.postgame-ambience-loop-sound"),
                init() {
                    this._super(...arguments), this.set("extEmberModel", n.extEmberModel)
                },
                didInsertElement() {
                    this._super(...arguments)
                },
                onDidInsertElementPlayMusic: n.Ember.on("didInsertElement", n.Ember.observer("backgroundMusic", (function() {
                    this.get("backgroundMusic") && !this.get("_music") && this.set("_music", this.playBackgroundMusic(this.get("backgroundMusic")))
                }))),
                battleBoostCelebrationObserver: n.Ember.observer("postgame.eogStatsBlock.battleBoostIpEarned", "gameflow.phase", (function() {
                    const e = this.get("postgame.eogStatsBlock.battleBoostIpEarned"),
                        t = this.get("gameflow.phase") === l.GAMEFLOW_PHASES.EndOfGame,
                        s = this.get("postgame.eogStatsBlock.teamBoost.summonerName"),
                        n = this.get("postgame.eogStatsBlock.gameId");
                    e <= 0 || !t || !s || !n || this._battleBoostCelebratedGameIds.includes(n) || (this._showBattleBoostCelebrationToast(s, e, n), this._battleBoostCelebratedGameIds.push(n))
                })),
                roomChangedMessages: n.Ember.computed("postgame.eogStatsBlock.teams", "isLocalPlayerInGame", (function() {
                    const e = this.get("postgame.eogStatsBlock.teams"),
                        t = [];
                    if (!e) return "";
                    for (const s of e)
                        for (const e of s.players ?? [])
                            if (e?.botPlayer) {
                                const s = n.playerNames.formatPlayerName({
                                    gameName: e.riotIdGameName ?? "",
                                    tagLine: e.riotIdTagLine ?? "",
                                    summonerName: e.riotIdGameName ?? ""
                                }).playerNameFull;
                                t.push(this.get("tra").formatString("postgame_chat_bot_joined_room", {
                                    actor: s
                                }))
                            } return 0 === t.length ? "" : JSON.stringify(t)
                })),
                _showBattleBoostCelebrationToast: function(e, t, s) {
                    const n = this.get("ToastCelebrationManager");
                    if (!n) return;
                    const a = this.get("tra").formatString("postgame_battle_boost_celebration_title", {
                            blueEssenceAmount: t
                        }),
                        o = e === this.get("postgame.player.summonerName") ? this.get("tra.postgame_battle_boost_celebration_self") : this.get("tra").formatString("postgame_battle_boost_celebration_other", {
                            playerName: e
                        });
                    n.add({
                        type: "DialogToastCelebration",
                        data: {
                            title: a,
                            details: o,
                            iconUrl: "/fe/lol-postgame/images/toast-blue-essence.png",
                            id: s,
                            animationsEnabled: this.get("postgame.largeAreaAnimationsEnabled") || !1
                        },
                        timing: "slow"
                    })
                },
                onWillDestroyElement: n.Ember.on("willDestroyElement", (function() {
                    const e = this.get("_music");
                    e && e.fadeOut(void 0, {
                        stop: !0
                    })
                })),
                _sendScoreboardIdleError: function() {
                    (0, a.default)().sendTelemetryEvent("feature_error", {
                        id: "POSTGAME_IDLE_STATE_AFTER_SCOREBOARD",
                        message: "trapped in an idle state, gameflow not called hide() after we deleted stats",
                        severity: "blocker"
                    })
                },
                actions: {
                    leavePostgame: function(e = !1, t = {}) {
                        const s = e ? this.get("parties").declinePlayAgain() : Promise.resolve(),
                            a = this.get("postgame").dismissStats(),
                            o = t?.error;
                        delete t?.error, Promise.allSettled([s, a]).then((() => {
                            const s = o ? n.datadogRum.stopOperationWithUnset.bind(n.datadogRum) : n.datadogRum.stopOperationWithOk.bind(n.datadogRum);
                            s(e ? n.datadogRum.XP_CGL_POSTGAME_EXIT : n.datadogRum.XP_CGL_POSTGAME_PLAY_AGAIN, t), s(n.datadogRum.XP_CGL_POSTGAME, t)
                        })).catch((s => {
                            const a = s.reduce(((e, t) => e || t), o);
                            n.datadogRum.stopOperationWithError(e ? n.datadogRum.XP_CGL_POSTGAME_EXIT : n.datadogRum.XP_CGL_POSTGAME_PLAY_AGAIN, a, t), n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME, a, t)
                        })), this.runTask(this._sendScoreboardIdleError, 1e4), this.get("promethium.isPromethiumQueue") && this.get("promethium").stopBackgroundAudio()
                    }
                }
            });
            t.default = m
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = "rcp-fe-lol-uikit",
                o = "sfx-ui",
                l = "music-ambience";
            var i = n.Ember.Mixin.create({
                ModalManager: (0, n.getProvider)().get(a).getModalManager(),
                ContextMenuManager: (0, n.getProvider)().get(a).getContextMenuManager(),
                ToastCelebrationManager: (0, n.getProvider)().get(a).getToastCelebrationManager(),
                audioPlugin: (0, n.getProvider)().get("rcp-fe-audio"),
                duration: (0, n.getProvider)().get("rcp-fe-lol-l10n").duration(),
                showModal: function(e) {
                    const t = this.get("ModalManager").add(e);
                    return n.Ember.get(t, "data.onOk") && t.okPromise ? t.okPromise.then(e.onOk) : t.acceptPromise && t.acceptPromise.then((() => {
                        n.Ember.get(t, "data.onAccept") && t.data.onAccept()
                    })).catch((() => {
                        n.Ember.get(t, "data.onDecline") && t.data.onDecline()
                    })), t
                },
                removeModal: function(e) {
                    this.get("ModalManager").remove(e)
                },
                assignTooltip: function(e, t, s) {
                    this.get("TooltipManager").assign(e, t, null, s)
                },
                assignContextMenu: function(e, t) {
                    const s = this.get("ContextMenuManager");
                    if (e.removeEventListener("contextmenu", this.get("_contextMenuEventHandler")), t) {
                        const n = e => {
                            s.setMenuItems(t), s.openAtEvent(e), e.preventDefault()
                        };
                        e.addEventListener("contextmenu", n), this.set("_contextMenuEventHandler", n)
                    }
                },
                getAssetPath: function(e) {
                    return "/fe/lol-postgame/" + e
                },
                getLottieAssetPath: function(e) {
                    return "/fe/lol-static-assets/lottie/postgame/" + e
                },
                playSound: function(e) {
                    const t = this.getAssetPath(e),
                        s = this.get("audioPlugin").getChannel(o).createSound(t);
                    return s.play(), s
                },
                playBackgroundMusic: function(e) {
                    const t = this.get("audioPlugin").getChannel(l).createSound(e, {
                        isLoop: !0,
                        fadeIn: !0
                    });
                    return t.play(), t
                }
            });
            t.default = i
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TELEMETRY_EVENT_TYPE = t.TELEMETRY_EVENT_ORIGIN_LOCATIONS = t.TELEMETRY_EVENT_NAMES = t.TELEMETRY_EVENT_NAME = void 0;
            t.TELEMETRY_EVENT_NAMES = {
                RENDER_POST_GAME: "eog-post-game",
                RENDER_PROGRESSION_SCREEN: "postgame-progression-render",
                TIME_ON_PROGRESSION_SCREEN: "eog-time-on-progression-screen",
                TIME_ON_SCOREBOARD_SCREEN: "eog-time-on-scoreboard-screen",
                TIME_ON_EOG: "eog-time-on-post-game"
            };
            t.TELEMETRY_EVENT_TYPE = {
                CLICK: "click"
            };
            t.TELEMETRY_EVENT_NAME = {
                SEASON_PASS_WIDGET_CLICKED: "season_pass_widget_clicked",
                OBJECTIVES_TRACKER_CLICKED: "objectives_tracker_clicked"
            };
            t.TELEMETRY_EVENT_ORIGIN_LOCATIONS = {
                POSTGAME: "postgame"
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var l = a.Ember.Component.extend(o.default, {
                classNames: ["postgame-header"],
                postgame: a.Ember.inject.service(),
                postgameRanked: a.Ember.inject.service(),
                isEogInvalid: a.Ember.computed.equal("postgame.eogStatsBlock.invalid", !0),
                isLeaver: a.Ember.computed.or("postgame.player.leaver", "postgame.player.wasAfk"),
                isVictory: a.Ember.computed.readOnly("postgame.playerTeam.isWinningTeam"),
                isLossForgiven: a.Ember.computed("isEogInvalid", "isVictory", (function() {
                    return this.get("isEogInvalid") && !this.get("isVictory")
                })),
                isDefeat: a.Ember.computed.not("isVictory"),
                isURFDefeat: a.Ember.computed.and("isDefeat", "isURF"),
                isURF: a.Ember.computed.equal("postgame.eogStatsBlock.gameMode", "URF")
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                },
                l = s(4);
            var i = a.Ember.Component.extend(o.default, {
                classNames: ["postgame-game-info"],
                gameclientPostgame: a.Ember.inject.service(),
                postgame: a.Ember.inject.service(),
                postgameRanked: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                leagueNotification: a.Ember.computed.readOnly("postgameRanked.currentLpChangeNotification"),
                displayedMapName: a.Ember.computed("gameflow.map.id", "postgame.gameModeMutatorsMap", "postgame.eogStatsBlock.gameMutators", (function() {
                    const e = this.get("postgame.gameModeMutatorsMap")[this.get("gameflow.map.id")];
                    if (!e) return null;
                    const t = this.get("postgame.eogStatsBlock.gameMutators") || [];
                    for (let s = 0; s < t.length; s++) {
                        const n = t[s].toLowerCase();
                        for (let t = 0; t < e.Mutators.length; t++)
                            if (e.Mutators[t].Mutator.ExpandedMutator.toLowerCase() === n) return e.Mutators[t].MapNameOverride
                    }
                    return e.MapNameBase
                })),
                gameLength: a.Ember.computed("postgame.eogStatsBlock.gameLength", "gameclientPostgame.lolGameClientStats.statsBlock.gameLengthSeconds", (function() {
                    let e = this.get("postgame.eogStatsBlock.gameLength");
                    return e || (e = this.get("gameclientPostgame.lolGameClientStats.statsBlock.gameLengthSeconds")), this.duration.formatSeconds(e)
                })),
                queueDescription: a.Ember.computed("gameflow.map", "gameflow.queue.detailedDescription", "gameflow.queue.description", "gameflow.isCustomGame", (function() {
                    if (this.get("gameflow.isCustomGame")) return this.get("tra.postgame_tagline_custom");
                    const e = this.get("gameflow.queue");
                    if (!e) return "";
                    return e.detailedDescription ? e.detailedDescription : e.description
                })),
                rankedPlayerWinLoss: a.Ember.computed("leagueNotification.wins", "leagueNotification.losses", (function() {
                    const e = this.get("leagueNotification.wins") || 0,
                        t = this.get("leagueNotification.losses") || 0;
                    return this.get("tra").formatString("postgame_rank_tagline_win_loss", {
                        winCount: e,
                        lossCount: t
                    })
                })),
                nonRankedPlayerWinLoss: a.Ember.computed("postgame.lifetimeWins", "postgame.lifetimeLosses", (function() {
                    const e = this.get("postgame.lifetimeWins") || 0,
                        t = this.get("postgame.lifetimeLosses") || 0;
                    return this.get("tra").formatString("postgame_rank_tagline_win_loss", {
                        winCount: e,
                        lossCount: t
                    })
                })),
                playerWinLoss: a.Ember.computed("leagueNotification.queueType", "nonRankedPlayerWinLoss", "rankedPlayerWinLoss", (function() {
                    return Boolean(this.get("leagueNotification")) && this._isRankedQueueSR(this.get("leagueNotification.queueType")) ? this.get("rankedPlayerWinLoss") : this.get("nonRankedPlayerWinLoss")
                })),
                _isRankedQueueSR: e => Boolean(e) && l.QUEUES.RANKED_SR_QUEUE_TYPES.includes(e)
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                },
                l = s(3),
                i = s(4);
            var r = a.Ember.Component.extend(o.default, {
                classNames: ["postgame-game-result"],
                classNameBindings: ["isVictory:postgame-victory", "isDefeat:postgame-defeat", "isLeaver:postgame-leaver"],
                gameclientPostgame: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                postgame: a.Ember.inject.service(),
                postgameRanked: a.Ember.inject.service(),
                gameMode: a.Ember.computed.alias("gameflow.gameflowSession.gameData.queue.gameMode"),
                rankedStats: a.Ember.computed.alias("postgameRanked.currentRankedStats"),
                rankedNotification: a.Ember.computed.alias("postgameRanked.currentLpChangeNotification"),
                isEarlySurrenderBystander: a.Ember.computed.readOnly("postgame.isEarlySurrenderBystander"),
                isEarlySurrenderCauser: a.Ember.computed("postgame.eogStatsBlock.gameEndedInEarlySurrender", "postgame.eogStatsBlock.teamEarlySurrendered", "postgame.eogStatsBlock.causedEarlySurrender", (function() {
                    return this.get("postgame.eogStatsBlock.gameEndedInEarlySurrender") && this.get("postgame.eogStatsBlock.teamEarlySurrendered") && this.get("postgame.eogStatsBlock.causedEarlySurrender")
                })),
                isEarlySurrenderAccomplice: a.Ember.computed("postgame.eogStatsBlock.gameEndedInEarlySurrender", "postgame.eogStatsBlock.teamEarlySurrendered", "postgame.eogStatsBlock.isEarlySurrenderAccomplice", (function() {
                    return this.get("postgame.eogStatsBlock.gameEndedInEarlySurrender") && this.get("postgame.eogStatsBlock.teamEarlySurrendered") && this.get("postgame.eogStatsBlock.isEarlySurrenderAccomplice")
                })),
                isDisruptiveBehaviorTerminated: a.Ember.computed("postgame.eogStatsBlock.teams[]", (function() {
                    const e = this.get("postgame.eogStatsBlock.teams");
                    return !!e && e.some((e => e && Array.isArray(e.players) && e.players.some((e => e.stats && e.stats.CAUSED_GAME_END_FROM_IGNB_SURRENDER))))
                })),
                isGameModeWithSubteams: a.Ember.computed("gameMode", (function() {
                    return !!l.GAME_MODES_WITH_SUBTEAMS[this.get("gameMode")]
                })),
                subteamPlacementString: a.Ember.computed("postgame.eogStatsBlock", "postgame.localSummoner", "gameclientPostgame.lolGameClientStats", (function() {
                    const e = this.get("postgame.eogStatsBlock");
                    if (!e) {
                        const e = this.get("gameclientPostgame.lolGameClientStats"),
                            t = this.get("postgame.localSummoner.puuid"),
                            s = e.statsBlock.players.find((e => e.PUUID === t));
                        return s && s.subteamStanding ? this.get("tra").get(l.SUBTEAM_PLACEMENT_LONG_TRA_KEY + s.subteamStanding) : ""
                    }
                    return e.localPlayer && e.localPlayer.stats && this.get("tra").get(l.SUBTEAM_PLACEMENT_LONG_TRA_KEY + e.localPlayer.stats.PLAYER_SUBTEAM_PLACEMENT) || ""
                })),
                shouldShowPlacements: a.Ember.computed("postgameRanked.isProvisional", "postgame.isEarlySurrenderBystander", "provisionalGameThreshold", "rankedNotification.queueType", (function() {
                    return this.get("rankedNotification.queueType") !== i.QUEUES.JADE_RANKED_SOLO_5x5 && (!this.get("postgame.isEarlySurrenderBystander") && this.get("postgameRanked.isProvisional") && this.get("provisionalGameThreshold"))
                })),
                provisionalGameThreshold: a.Ember.computed("rankedStats.queueMap", "rankedNotification.queueType", (function() {
                    const e = this.get("rankedNotification.queueType"),
                        t = this.get("rankedStats.queueMap");
                    if (t && t[e]) return t[e].provisionalGameThreshold
                })),
                placementGamesString: a.Ember.computed("rankedNotification.provisionalGamesRemaining", "provisionalGameThreshold", "tra.postgame_rank_tagline_placement_game", (function() {
                    const e = this.get("provisionalGameThreshold"),
                        t = this.get("rankedNotification.provisionalGamesRemaining");
                    return this.get("tra").formatString("postgame_rank_tagline_placement_game", {
                        gameCount: e - t || 1,
                        provisionalGameThreshold: e || 1
                    })
                })),
                tierDivisionString: a.Ember.computed("rankedNotification.division", "rankedNotification.tier", (function() {
                    const e = this.get("rankedNotification.division"),
                        t = this.get("rankedNotification.tier");
                    return a.leagueTierNames.getFullTierDivisionName(t, e)
                })),
                rankedInfoTagline: a.Ember.computed("rankedNotification.notifyReason", "rankedNotification.queueType", "tierDivisionString", "tra.postgame_rank_tagline_LEAGUE_PROMOTED", (function() {
                    const e = this.get("rankedNotification.queueType");
                    switch (this.get("rankedNotification.notifyReason")) {
                        case "LEAGUE_DEMOTED":
                            return this.get("tra").formatString("postgame_rank_tagline_LEAGUE_DEMOTED", {
                                newRank: this.get("tierDivisionString")
                            });
                        case "LEAGUE_PROMOTED":
                            return this.get("tra").formatString("postgame_rank_tagline_LEAGUE_PROMOTED", {
                                newRank: this.get("tierDivisionString")
                            });
                        case "LEAGUE_SEEDED":
                            return e === i.QUEUES.JADE_RANKED_SOLO_5x5 ? "" : this.get("tra").formatString("postgame_rank_tagline_LEAGUE_SEEDED", {
                                newRank: this.get("tierDivisionString")
                            });
                        case "MINISERIES_CANCEL":
                            return this.get("tra.postgame_rank_tagline_MINISERIES_CANCEL");
                        case "MINISERIES_LOST":
                            return this.get("tra.postgame_rank_tagline_MINISERIES_LOST");
                        case "MINISERIES_START":
                            return this.get("tra.postgame_rank_tagline_MINISERIES_START");
                        default:
                            return ""
                    }
                }))
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["postgame-game-result-icon"],
                    gameflow: n.Ember.inject.service(),
                    icon: n.Ember.computed("isLossForgiven", "isLeaver", "isVictory", "isTop4", "gameflow.map.assets.icon-victory", "gameflow.map.assets.icon-defeat", "gameflow.map.assets.icon-leaver", "gameflow.map.assets.icon-empty", (function() {
                        return this.get("isLossForgiven") ? this.get("gameflow.map.assets.icon-loss-forgiven-v2") : this.get("isLeaver") ? this.get("gameflow.map.assets.icon-leaver-v2") : this.get("isVictory") || this.get("isTop4") ? this.get("gameflow.map.assets.icon-victory") : this.get("gameflow.map.assets.icon-defeat")
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(4),
                o = m(s(38)),
                l = m(s(29)),
                i = s(45),
                r = s(3);

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const {
                RunMixin: c
            } = n.EmberAddons.EmberLifeline;
            var d = n.Ember.Component.extend(c, o.default, {
                classNames: ["postgame-scoreboard-component"],
                classNameBindings: ["isTFT:postgame-tft-scoreboard"],
                postgame: n.Ember.inject.service(),
                parties: n.Ember.inject.service(),
                gameflow: n.Ember.inject.service(),
                gameclientPostgame: n.Ember.inject.service(),
                endOfGame: n.Ember.inject.service(),
                teamPlannerButtonAssets: n.Ember.computed.alias("endOfGame.genericAsset.lcu-assets-tft-team-planner-button"),
                skillTree: n.Ember.inject.service(),
                promethium: n.Ember.inject.service(),
                isTFT: n.Ember.computed.alias("gameflow.isTFT"),
                isLocalPlayerInGame: n.Ember.computed.or("gameclientPostgame.isLocalPlayerInGame", "postgame.isLocalPlayerInGame"),
                init() {
                    this._super(...arguments), this.set("extEmberModel", n.extEmberModel)
                },
                teams: n.Ember.computed.alias("postgame.eogStatsBlock.teams"),
                populatedTeams: n.Ember.computed.filter("teams", (function(e) {
                    return e.players && e.players.length
                })),
                isFooterDisabled: !1,
                canNotPlayAgain: n.Ember.computed("gameflow.canPlayAgain", "gameId", "extEmberModel.playAgainOverride", "isTFT", "parties.partyGameMode", (function() {
                    let e = this.get("gameflow.canPlayAgain");
                    return this.get("gameId") && this.hasPlayAgainOverride() ? e = !0 : this.get("isTFT") && (e = !!this.get("parties.partyGameMode")), !e
                })),
                isPlayAgainDisabled: n.Ember.computed.or("canNotPlayAgain", "isFooterDisabled", "isUnsupportedGameMode"),
                backButtonDisabled: !0,
                isDetailsTabOpen: !1,
                gameId: n.Ember.computed.alias("gameflow.gameId"),
                confirmButtonText: n.Ember.computed("parties.confirmButtonText", "gameId", "extEmberModel.playAgainOverride", (function() {
                    let e = this.get("parties.confirmButtonText");
                    if (this.get("gameId") && this.hasPlayAgainOverride()) {
                        e = this.get("extEmberModel.playAgainOverride").confirmButtonText
                    }
                    return e || ""
                })),
                closeButtonText: n.Ember.computed.alias("tra.postgame_scoreboard_button_nav_quit"),
                bridgeService: n.Ember.inject.service("bridge"),
                isUnsupportedGameMode: n.Ember.computed.and("bridgeService.bridgeEnabled", "bridgeService.blockTFTMode", "isTFT"),
                unsupportedGameModeTooltipText: n.Ember.computed("tra.tft_mode_unsupportedclientplatform_tooltip", "tra.tft_mode_unsupportedclientplatform_link", (function() {
                    return `${this.get("tra.tft_mode_unsupportedclientplatform_tooltip")} ${this.get("tra.tft_mode_unsupportedclientplatform_link")}`
                })),
                isTftPromethiumRunSummary: n.Ember.computed.and("promethium.isPromethiumEnabled", "promethium.isPromethiumQueue"),
                isTftPromethiumPostgame: n.Ember.computed("gameclientPostgame.skillTreeEoG", "promethium.isPromethiumEnabled", "gameflow", (function() {
                    if (!this.get("promethium.isPromethiumEnabled")) return !1;
                    if (!(6130 === this.get("gameflow.queue.id"))) return !1;
                    const e = this.get("gameclientPostgame.skillTreeEoG"),
                        t = e?.eventSkillToScore?.length >= 0;
                    return t ? this.get("promethium").playBackgroundAudio() : this.get("promethium").stopBackgroundAudio(), t
                })),
                showTftPromethiumRunSummary: n.Ember.computed("isTftPromethiumRunSummary", "isTftPromethiumPostgame", (function() {
                    return this.get("isTftPromethiumRunSummary") && this.get("isTftPromethiumPostgame")
                })),
                isSkillTreeOrPromethiumPostgame: n.Ember.computed.or("isTftSkillTreePostgame", "isTftPromethiumPostgame"),
                promethiumData: n.Ember.computed("gameclientPostgame.players", "isTftPromethiumPostgame", (function() {
                    if (this.get("isTftPromethiumPostgame")) {
                        const e = this.get("gameclientPostgame.players");
                        for (let t = 0; t < e.length; t++)
                            if (e[t].promethiumData) return e[t].promethiumData
                    }
                    return !1
                })),
                tftPlayers: n.Ember.computed.alias("gameclientPostgame.players", "isTftPromethiumPostgame", (function() {
                    return this.get("gameclientPostgame.players")
                })),
                tftPartnerGroupsByPlacement: n.Ember.computed("tftPlayers", (function() {
                    const e = (this.get("gameclientPostgame.players") || []).map((e => e.partnerGroupId));
                    return [...new Set(e)]
                })),
                hasPartnerGroups: n.Ember.computed.gt("tftPartnerGroupsByPlacement.0", 0),
                isTftSkillTreeBonusScore: !0,
                showTftSkillTreeBonusScore: n.Ember.computed("isTftSkillTreeBonusScore", "isTftSkillTreePostgame", (function() {
                    return this.get("isTftSkillTreeBonusScore") && this.get("isTftSkillTreePostgame")
                })),
                isTftSkillTreePostgame: n.Ember.computed("gameclientPostgame.hasSkillTreeEoG", "skillTree.skillTreeEnabled", (function() {
                    const e = this.get("gameclientPostgame.skillTreeEoG");
                    return e?.eventSkillToScore.length > 0 && this.get("gameclientPostgame.hasSkillTreeEoG") && this.get("skillTree.skillTreeEnabled")
                })),
                isPlaybookEnabled: n.Ember.computed.alias("gameclientPostgame.isPlaybookEnabled"),
                hasPlayAgainOverride: function() {
                    const e = this.get("extEmberModel.playAgainOverride");
                    return e && e.gameflowGameId && e.navigationCallback && e.gameflowGameId === this.get("gameId")
                },
                tftGameAssets: n.Ember.computed.alias("endOfGame.genericAsset"),
                tftSkilltreeAssets: n.Ember.computed("tftGameAssets.lcu-assets-tft-skill-tree", (function() {
                    return this.get("tftGameAssets.lcu-assets-tft-skill-tree")
                })),
                lockFooterButtons: function() {
                    this.set("isFooterDisabled", !0), this.runTask((() => {
                        this.set("isFooterDisabled", !1)
                    }), 3e4)
                },
                lockFooterAndLeavePostgame: function() {
                    this.lockFooterButtons(), this.sendAction("leavePostgame", !0, {
                        stop: {
                            source: "tft-exit-postgame"
                        }
                    })
                },
                showTeamPlannerButton: !1,
                didInsertElement() {
                    this._super(...arguments), this.set("showTeamPlannerButton", this.get("isTFT")), n.db.observe("/lol-client-config/v3/client-config/lol.client_settings.tft.tft_teamPlanner_endOfGameImport", this, (e => {
                        this.set("showTeamPlannerButton", this.get("isTFT") && e)
                    }))
                },
                willDestroyElement() {
                    this._super(...arguments), n.db.unobserve("/lol-client-config/v3/client-config/lol.client_settings.tft.tft_teamPlanner_endOfGameImport", this)
                },
                actions: {
                    goToHome: function() {
                        const e = this.get("gameflow.lastQueuedMemberSummonerIds"),
                            t = this.get("parties.hasActiveParty");
                        if (n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_EXIT, {
                                game: {
                                    key: a.GAME_CONTEXT_KEYS.TFT
                                },
                                postgame: {
                                    has_active_party: t
                                },
                                start: {
                                    source: "tft-scoreboard"
                                }
                            }), e && e.length > 1 && t) {
                            this.showModal({
                                type: "DialogConfirm",
                                data: {
                                    contents: this.get("tra.parties_leave_confirm_message"),
                                    acceptText: this.get("tra.parties_leave_confirm_accept"),
                                    declineText: this.get("tra.parties_leave_confirm_decline"),
                                    closeButton: !1
                                }
                            }).acceptPromise.then((() => {
                                this.lockFooterAndLeavePostgame()
                            })).catch((() => {
                                n.datadogRum.stopOperationWithAbort(n.datadogRum.XP_CGL_POSTGAME_EXIT, {
                                    stop: {
                                        source: "declined-leave-party"
                                    }
                                })
                            }))
                        } else this.lockFooterAndLeavePostgame()
                    },
                    playAgain: function() {
                        if (this.lockFooterButtons(), this.hasPlayAgainOverride()) {
                            return void this.get("extEmberModel.playAgainOverride").navigationCallback()
                        }
                        n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_PLAY_AGAIN, {
                            game: {
                                key: a.GAME_CONTEXT_KEYS.TFT
                            },
                            start: {
                                source: "tft-scoreboard"
                            }
                        });
                        if (6130 === this.get("gameflow.queue.id")) {
                            const e = {
                                stop: {
                                    source: "tft-promethium-play-again"
                                }
                            };
                            return this.sendAction("leavePostgame", !1, e), n.Router.navigateTo("rcp-fe-lol-tft", {
                                page: "event-page"
                            })
                        }
                        this.get("parties").playAgain().then((() => {
                            this.sendAction("leavePostgame", !1, {
                                stop: {
                                    source: "tft-play-again"
                                }
                            }), this.get("isTFT") && n.Navigation.sendTFTScreenLoadTelemetryEvent({
                                path: "/rcp-fe-lol-parties/root-component/parties-root tft-lobby",
                                screen: "game-lobby",
                                subScreen: "TFT-game-lobby"
                            })
                        })).catch((e => {
                            const t = {
                                error: e,
                                stop: {
                                    source: "failed-tft-play-again"
                                }
                            };
                            this.sendAction("leavePostgame", !1, t), (0, l.default)().sendTelemetryEvent("feature_error", {
                                id: "POSTGAME_PLAY_AGAIN_FAILURE",
                                message: "play again clicked, but failed to create new lobby",
                                severity: "critical"
                            })
                        }))
                    },
                    hideSkillTreeBonusScore: function() {
                        this.set("isTftSkillTreeBonusScore", !1)
                    },
                    hidePromethiumRunSummary: async function() {
                        this.set("isTftPromethiumRunSummary", !1);
                        const e = await (0, n.getProvider)().getOptional("rcp-fe-lol-tft"),
                            t = this.get("promethium.pveEoGMissionRewards"),
                            s = this.get("promethium.journeyTrack.currentLevel"),
                            a = this.get("promethium.xpEarned"),
                            o = this.get("promethium.journeyTrack.totalPointsEarned") - a,
                            l = Math.floor(o / 1e3),
                            i = this.get("promethium.journeyTrack.milestones").slice(l + 1, s + 1).filter((e => !0 === e.isKeystone && e.title.includes("Guide"))),
                            r = [];
                        if (t)
                            for (let e = 0; e < t.length; e++) !0 === t[e].firstCompletionLevelMission && ("CURRENCY" !== t[e].type && "ENTITLEMENT" !== t[e].type || r.push(t[e]));
                        i && e.showPromethiumCelebration(i), t && e.showPromethiumCelebration(r);
                        this.get("promethium.isRunComplete") && this.set("isTftPromethiumRunSummary", !1)
                    },
                    displayAdvancedDetails: function() {
                        const e = () => this.set("isDetailsTabOpen", !1);
                        (0, n.getProvider)().getOptional("rcp-fe-lol-match-history").then((t => {
                            t.displayMatchDetails({
                                sections: ["stats", "graph", "runes"],
                                defaultSection: "stats",
                                dataSource: "eogStats",
                                hideHeader: !0,
                                closeModalCallback: e
                            })
                        }), (e => n.logger.error("Provider getOptional failure", e))), this.set("isDetailsTabOpen", !0), this.get("postgame").trigger("advancedDetailsDisplayed")
                    },
                    showTeamPlanner() {
                        n.TeamPlanner && n.TeamPlanner.show("tft-home")
                    },
                    skillTreeShortcutOnHover() {
                        n.Audio.getChannel(r.SFX_SUB_CHANNEL_UI_NAME).playSound(r.UI_AUDIO_SFX_PATH.MAGIC_BUTTON_HOVER)
                    },
                    overrideTftLandingPage(e) {
                        n.Audio.getChannel(r.SFX_SUB_CHANNEL_UI_NAME).playSound(r.UI_AUDIO_SFX_PATH.BUTTON_GOLD_CLICK), (0, n.getProvider)().getOptional("rcp-fe-lol-tft").then((t => {
                            t.setLandingRouteIdentifier(t.getSkillTreeRouteIdentifier()), t.overrideLandingRoute(e)
                        })).catch((e => {
                            n.logger.error("Error overriding TFT landing page", e)
                        })).finally((() => {
                            try {
                                (0, i.trackButtonClickedGeneric)(i.PHASE.SKILL_TREE, "revival-ladder-button"), this.lockFooterAndLeavePostgame()
                            } catch (e) {
                                n.logger.error("Error leaving postgame", e)
                            }
                        }))
                    }
                }
            });
            t.default = d
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PHASE = void 0, t.trackButtonClickedGeneric = function(e, t, s = {}) {
                i(e, "button-clicked", {
                    button_id: t,
                    ...s
                })
            }, t.trackPlayerPromotion = function(e, t, s, n = !1) {
                i(e, "player-promoted", {
                    new_rank: t,
                    game_id: s
                }, n)
            }, t.trackSelectedModifierForRank = function(e, t, s, n = !1) {
                i(e, "selected_modifier_for_rank", {
                    rank: t,
                    modifier: s
                }, n)
            }, t.trackSpPerEquippedSkillPerGame = function(e, t, s, n, a = !1) {
                i(e, "strategy_point_per_skill_per_game", {
                    skillName: t,
                    strategyPoint: s,
                    gameId: n
                }, a)
            }, t.trackTotalSpPerGame = function(e, t, s, n = !1) {
                i(e, "strategy_point_per_game", {
                    gameId: t,
                    totalStrategyPoint: s
                }, n)
            };
            var n = s(1);
            t.PHASE = {
                SKILL_TREE: {
                    NAME: "skill-tree",
                    time_start: 0,
                    uuid: ""
                }
            };
            const a = "rcp-fe-lol-tft",
                o = {
                    device: "PC",
                    event_id: "",
                    env: "",
                    locale: "",
                    phase: "",
                    phase_uuid: "",
                    puuid: "",
                    region: "",
                    timestamp: 0
                },
                l = s(46);

            function i(e, t, s, i = !1) {
                ! function(e, t, s = !1) {
                    o.phase = e.NAME, s && (e.uuid = l(), e.time_start = Date.now()), o.phase_uuid = e.uuid, o.event_id = t, o.timestamp = Date.now()
                }(e, t, i), n.Telemetry.sendCustomData(a, {
                    ...o,
                    ...s
                })
            }!async function() {
                if (!o.puuid) {
                    const e = await n.db.get("/lol-summoner/v1/current-summoner");
                    o.puuid = e?.puuid || ""
                }
                if (!o.locale || !o.region) {
                    const e = await n.db.get("/riotclient/region-locale");
                    o.locale = e?.locale || "", o.region = e?.region || ""
                }
                if (!o.env && o.region) {
                    const e = await n.db.get(`/data-store/v1/system-settings/region_data/${o.region}/rso_platform_id`);
                    o.env = e, o.region = e
                }
            }()
        }, (e, t, s) => {
            var n = s(47),
                a = s(48);
            e.exports = function(e, t, s) {
                var o = t && s || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var l = (e = e || {}).random || (e.rng || n)();
                if (l[6] = 15 & l[6] | 64, l[8] = 63 & l[8] | 128, t)
                    for (var i = 0; i < 16; ++i) t[o + i] = l[i];
                return t || a(l)
            }
        }, e => {
            var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (t) {
                var s = new Uint8Array(16);
                e.exports = function() {
                    return t(s), s
                }
            } else {
                var n = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), n[t] = e >>> ((3 & t) << 3) & 255;
                    return n
                }
            }
        }, e => {
            for (var t = [], s = 0; s < 256; ++s) t[s] = (s + 256).toString(16).substr(1);
            e.exports = function(e, s) {
                var n = s || 0,
                    a = t;
                return [a[e[n++]], a[e[n++]], a[e[n++]], a[e[n++]], "-", a[e[n++]], a[e[n++]], "-", a[e[n++]], a[e[n++]], "-", a[e[n++]], a[e[n++]], "-", a[e[n++]], a[e[n++]], a[e[n++]], a[e[n++]], a[e[n++]], a[e[n++]]].join("")
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["postgame-player-augment-border"],
                    classNameBindings: ["rarityClass"],
                    postgame: n.Ember.inject.service(),
                    augmentData: n.Ember.computed("augmentId", "postgame.augmentsMap", (function() {
                        return this.get("postgame.augmentsMap")[this.get("augmentId")]
                    })),
                    rarityClass: n.Ember.computed("augmentData", (function() {
                        return `postgame-player-augment-rarity-${this.get("augmentData.rarity")||"none"}`
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["postgame-player-keystone-icon"],
                    classNameBindings: ["circleIconHolder", "isSubStyle"],
                    postgame: n.Ember.inject.service(),
                    sanitizeConfig: {
                        allowedTags: ["p", "em", "i", "br", "b", "strong", "hr", "h1", "h2", "h3", "a", "h4", "h5", "strike", "code", "ul", "ol", "li", "blockquote", "lol-uikit-tooltipped-keyword"],
                        allowedAttributes: {
                            "lol-uikit-tooltipped-keyword": ["key"]
                        }
                    },
                    keystone: n.Ember.computed("keystoneId", "isSubStyle", "postgame.perkStyles", "postgame.runesMap", (function() {
                        const e = this.get("keystoneId"),
                            t = this.get("postgame.runesMap"),
                            s = this.get("isSubStyle"),
                            n = this.get("postgame.perkStyles") || [];
                        return e && t ? s ? n.find((t => t.id === e)) : t[e] : {}
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1).Ember.Component.extend({
                classNames: ["postgame-player-buttons"],
                showInviteButton: !0,
                actions: {
                    sendFriendRequest: function(e) {
                        this.sendAction("sendFriendRequest", e)
                    },
                    showReportDialog: function(e) {
                        this.sendAction("showReportDialog", e)
                    },
                    inviteToParty: function(e) {
                        this.sendAction("inviteToParty", e), this.set("isInviteDisabled", !0), this.$(".postgame-player-invite-to-party").addClass("invited")
                    }
                }
            });
            t.default = n
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["postgame-player-item"],
                    classNameBindings: ["alternate"],
                    attributeBindings: ["style"],
                    postgame: n.Ember.inject.service(),
                    itemData: n.Ember.computed("itemId", "postgame.itemsMap", (function() {
                        return this.get("postgame.itemsMap")[this.get("itemId")]
                    })),
                    style: n.Ember.computed("itemData", (function() {
                        return "background-image: url(" + this.get("itemData.iconPath") + ");"
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const {
                RunMixin: a
            } = n.EmberAddons.EmberLifeline;
            var o = n.Ember.Component.extend(a, {
                classNames: ["postgame-progression"],
                classNameBindings: ["isClassicMode:postgame-progression-classic-mode:postgame-progression-aram-mode", "componentSharedData.animationSequence"],
                postgame: n.Ember.inject.service(),
                gameflow: n.Ember.inject.service(),
                isClassicMode: n.Ember.computed.equal("postgame.eogStatsBlock.gameMode", "CLASSIC"),
                progressionComponents: [],
                onDidInsertElement: n.Ember.on("didInsertElement", (function() {
                    const e = n.ProgressionComponentHelper.getProgressionComponents(),
                        t = this._setupAnimationPromises(e);
                    this.set("progressionComponents", t)
                })),
                scrollableComponents: n.Ember.computed("progressionComponents", (function() {
                    return this.get("progressionComponents").filter((e => !e.isFixed))
                })),
                fixedComponents: n.Ember.computed("progressionComponents", (function() {
                    return this.get("progressionComponents").filter((e => e.isFixed))
                })),
                animationTimeout: 5e3,
                animationInitialDelay: 2500,
                _setupAnimationPromises: function(e) {
                    const t = [];
                    for (let s = -1; s < e.length; s++) {
                        const n = s < 0,
                            a = e && e[s] && e[s].hasAnimation;
                        n || a ? this._appendNewAnimationPromise(t) : this._appendPreviousAnimationPromise(t)
                    }
                    for (let s = 0; s < e.length; s++) e[s].previousAnimationPromise = t[s].promise, e[s].resolveAnimationPromise = t[s + 1].resolve, this._setupAnimationPromiseTimeout(t[s].promise, t[s + 1].resolve);
                    return this.runTask((() => {
                        t[0].resolve()
                    }), this.get("animationInitialDelay")), e
                },
                _appendNewAnimationPromise: function(e) {
                    let t = null;
                    const s = new Promise((function(e) {
                        t = e
                    }));
                    e.push({
                        promise: s,
                        resolve: t
                    })
                },
                _appendPreviousAnimationPromise: function(e) {
                    e.push({
                        promise: e[e.length - 1].promise,
                        resolve: function() {}
                    })
                },
                _setupAnimationPromiseTimeout: function(e, t) {
                    const s = this.get("animationTimeout");
                    e.then((() => {
                        this.runTask((() => {
                            t()
                        }), s)
                    }))
                }
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["postgame-progression-number-reels"],
                    postgame: n.Ember.inject.service(),
                    totalFormatted: n.Ember.computed("total", "addPlus", (function() {
                        const e = this.get("total") || 0;
                        return this.get("addPlus") ? `+${e}` : e
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1).Ember.Component.extend({
                classNames: ["postgame-breakdown"]
            });
            t.default = n
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const i = a.dataBinding.bindTo((0, a.getProvider)().getSocket()),
                {
                    RunMixin: r
                } = a.EmberAddons.EmberLifeline;
            var m = a.Ember.Component.extend(r, l.default, {
                classNames: ["postgame-scoreboard-player-honor-flair"],
                honor: a.Ember.inject.service(),
                gameName: null,
                tagLine: null,
                summonerName: null,
                displayName: a.Ember.computed("gameName", "tagLine", "summonerName", (function() {
                    return this._playerNames.isUsingAlias ? `${this.get("gameName")} #${this.get("tagLine")}` : this.get("summonerName")
                })),
                isLowSpec: null,
                uxSettings: a.Ember.computed.readOnly("honor.uxSettings"),
                teamChoices: a.Ember.computed.readOnly("honor.teamChoices"),
                hasCelebrated: !1,
                chatCelebrationSent: !1,
                conversations: a.Ember.computed.readOnly("honor.conversations"),
                init: function() {
                    this._super(...arguments), this._playerNames = a.playerNames
                },
                willDestroyElement: function() {
                    this._super(...arguments)
                },
                observersOnInit: a.Ember.on("init", (function() {
                    this.addObserver("conversationId", this, "processChatCelebration"), this.addObserver("hasCelebrated", this, "processChatCelebration"), this.processChatCelebration()
                })),
                observersOnWillDestroy: a.Ember.on("willDestroyElement", (function() {
                    this.removeObserver("conversationId", this, "processChatCelebration"), this.removeObserver("hasCelebrated", this, "processChatCelebration"), this.removeObserver("uxSettings.data.potatoModeEnabled", this, "lowSpecHandler"), this.removeObserver("teamChoices.[]", this, "processRecipients");
                    const e = this.$(".honor-postgame-celebration-video");
                    e && e.attr("src", "")
                })),
                observersOnDidInsertElement: a.Ember.on("didInsertElement", (function() {
                    this.addObserver("uxSettings.data.potatoModeEnabled", this, "lowSpecHandler"), this.addObserver("teamChoices.[]", this, "processRecipients"), this.lowSpecHandler(), this.processRecipients()
                })),
                lowSpecHandler: function() {
                    this.get("hasCelebrated") || this.set("isLowSpec", this.get("uxSettings.data.potatoModeEnabled"))
                },
                hideTooltipClassName: a.Ember.computed("hasCelebrated", (function() {
                    return this.get("hasCelebrated") ? "" : "hidden"
                })),
                processRecipients: function() {
                    const e = this.get("puuid"),
                        t = this.get("teamChoices");
                    if (!this.get("hasCelebrated") && t && t.includes(e)) {
                        this.set("hasCelebrated", !0);
                        this.celebrateHonors.bind(this)()
                    }
                },
                celebrateHonors: function() {
                    const e = ".postgame-player-identity-content",
                        t = this.$().parents(e).find(".postgame-player-name"),
                        s = this.$().parents(e).find(".postgame-player-buttons");
                    t.css("transition", "all 0.5s"), t.css("transform", "translateX(21px)"), s.css("transition", "all 0.5s"), s.css("transform", "translateX(21px)");
                    const n = this.$(".honor-postgame-celebration-video");
                    n && n[0] && n[0].play(), this.playSound("sfx-honor-scoreboard-team-choice.ogg")
                },
                tooltipText: a.Ember.computed("isLocalPlayer", "displayName", (function() {
                    return this.get("isLocalPlayer") ? this.get("tra").formatString("honor_postgame_most_honorable_player_tooltip") : this.get("tra").formatString("honor_postgame_most_honorable_player_tooltip_other", {
                        playerName: this.get("displayName")
                    })
                })),
                teamChoiceMograph: o.HONOR_VIDEO_PATH + "EOG_TeamChoice_Intro.webm",
                teamChoiceIconPath: a.Ember.computed((function() {
                    return this.getAssetPath("Honor_Scoreboard_Leaf.png")
                })),
                processChatCelebration: function() {
                    const e = this.get("conversationId"),
                        t = this.get("hasCelebrated"),
                        s = this.get("chatCelebrationSent");
                    e && t && !s && (this.set("chatCelebrationSent", !0), this.createChatCelebration(e))
                },
                createChatCelebration: function(e) {
                    let t;
                    t = this.get("isLocalPlayer") ? this.get("tra").formatString("honor_postgame_most_honorable_player_chat_celebration") : this.get("isPlayerTeam") ? this.get("tra").formatString("honor_postgame_most_honorable_player_chat_celebration_teammate", {
                        playerName: this.get("displayName")
                    }) : this.get("tra").formatString("honor_postgame_most_honorable_player_chat_celebration_other", {
                        playerName: this.get("displayName")
                    }), this.runTask((() => {
                        i.post(`/lol-chat/v1/conversations/${encodeURIComponent(e)}/messages`, {
                            body: t,
                            type: "celebration"
                        })
                    }), 1e3)
                },
                conversationId: a.Ember.computed("conversations.@each.id", (function() {
                    const e = this.get("conversations");
                    let t = null;
                    return e && e.some((function(e) {
                        if (e.type === o.CONVERSATION_TYPE_POSTGAME) return t = e.id, !0
                    })), t
                }))
            });
            t.default = m
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const i = a.dataBinding.bindTo((0, a.getProvider)().getSocket()),
                {
                    RunMixin: r
                } = a.EmberAddons.EmberLifeline;
            var m = a.Ember.Component.extend(r, l.default, {
                postgame: a.Ember.inject.service(),
                honor: a.Ember.inject.service(),
                classNameBindings: ["postgameNotificationClassName", "isActiveClass", "honorVersionClass"],
                postgameNotificationClassName: "postgame-scoreboard-progression-honor-notification-component",
                transitionLock: 2,
                displayedHonors: [],
                displayedFlairEarned: 0,
                honorCategories: o.CATEGORY_DATA,
                showedFullTeamVote: !1,
                hexakillClass: "",
                animationInitialDelay: 2500,
                usingHonorCeremonyV3: !0,
                receivedHonors: a.Ember.computed.readOnly("honor.receivedHonors"),
                honorProfile: a.Ember.computed.readOnly("honor.honorProfile"),
                voteCompletion: a.Ember.computed.readOnly("honor.voteCompletion"),
                conversations: a.Ember.computed.readOnly("honor.conversations"),
                eogData: a.Ember.computed.readOnly("postgame.eogStatsBlock"),
                uxSettings: a.Ember.computed.readOnly("honor.uxSettings"),
                init: function() {
                    this._super(...arguments), i.observe("/lol-honor-v2/v1/latest-eligible-game", this, this.handleLatestEligibleGame), i.observe("/lol-honor-v2/v1/config", this, this.handleConfigUpdate), this.addObserver("conversationId", this, "processFullTeamVote"), this.addObserver("voteCompleted", this, "processFullTeamVote"), this.addObserver("voteCompletion.fullTeamVote", this, "processFullTeamVote"), this.processFullTeamVote(), this.set("previousAnimationPromise", new Promise((e => {
                        this.runTask((() => {
                            e()
                        }), this.get("animationInitialDelay"))
                    }))), this.set("resolveAnimationPromise", (() => {}))
                },
                didInsertElement: function() {
                    this._super(...arguments);
                    const e = this.send.bind(this),
                        t = this.get("resolveAnimationPromise");
                    this.runTask((function() {
                        e("decrementTransitionLock")
                    }), 500), this.get("previousAnimationPromise").then((function() {
                        e("decrementTransitionLock"), t()
                    })), this.addObserver("receivedHonors.[]", this, "processNotifications"), this.addObserver("transitionLock", this, "processNotifications"), this.processNotifications()
                },
                willDestroyElement: function() {
                    this._super(...arguments), this.removeObserver("conversationId", this, "processFullTeamVote"), this.removeObserver("voteCompleted", this, "processFullTeamVote"), this.removeObserver("voteCompletion.fullTeamVote", this, "processFullTeamVote"), this.removeObserver("receivedHonors.[]", this, "processNotifications"), this.removeObserver("transitionLock", this, "processNotifications"), i.unobserve("/lol-honor-v2/v1/latest-eligible-game", this), i.unobserve("/lol-honor-v2/v1/config", this)
                },
                handleLatestEligibleGame: function(e) {
                    this.isDestroying || this.isDestroyed || this.set("latestHonorEligibleGame", e)
                },
                handleConfigUpdate: function(e) {
                    void 0 !== e.ceremonyV3Enabled && null !== e.ceremonyV3Enabled && this.set("usingHonorCeremonyV3", e.ceremonyV3Enabled)
                },
                isActiveClass: a.Ember.computed("voteCompleted", "receivedHonors.[]", "currentGameIsHonorEligible", "honor.enabled", "usingHonorCeremonyV3", (function() {
                    return this.get("honor.enabled") && this.get("currentGameIsHonorEligible") && (!this.get("voteCompleted") || this.get("receivedHonors") && 0 !== this.get("receivedHonors.length")) ? this.get("usingHonorCeremonyV3") && !this.get("receivedHonors.length") ? "" : "active" : ""
                })),
                honorVersionClass: a.Ember.computed("usingHonorCeremonyV3", (function() {
                    return this.get("usingHonorCeremonyV3") ? "honor-v3" : "honor-v2"
                })),
                headerText: a.Ember.computed((function() {
                    return this.get("tra").get("honor-postgame-received-header")
                })),
                headerProgressText: a.Ember.computed((function() {
                    return this.get("tra").get("honor-postgame-received-header-progress")
                })),
                headerVisibilityClass: a.Ember.computed("voteCompleted", "receivedHonors.[]", (function() {
                    return this.get("voteCompleted") && this.get("receivedHonors.length") > 0 ? "active" : ""
                })),
                headerProgressVisibilityClass: a.Ember.computed("voteCompleted", "receivedHonors.[]", (function() {
                    return this.get("voteCompleted") && this.get("receivedHonors.length") > 0 ? "" : "active"
                })),
                headerTooltipIsVisible: a.Ember.computed("isHiddenClass", (function() {
                    return !this.get("isHiddenClass")
                })),
                headerTooltip: a.Ember.computed("honor.recallRewardEnabled", (function() {
                    return this.get("honor.recallRewardEnabled") ? this.get("tra").get("honor-postgame-received-header-recall-tooltip") : this.get("tra").get("honor-postgame-received-header-tooltip")
                })),
                processNotifications: function() {
                    const e = this.get("usingHonorCeremonyV3") ? 9 : 4;
                    let t = this.get("displayedHonors");
                    const s = this.get("receivedHonors");
                    if (!(!s || this.isTransitionLocked() || s.length <= t.length || t.length >= e) && (this.send("incrementTransitionLock"), t = s.slice(0, Math.min(t.length + 1, e)), t.length > 4 && this.set("hexakillClass", "hexakill"), this.set("displayedHonors", t), this.processFlairEarned(t), this.get("usingHonorCeremonyV3"))) {
                        const e = this.$(".honor-v3-postgame-notification-flair");
                        e && e[0] && e[0].play(), this.playSound("sfx-honor-postgame-votereceived.ogg"), this.runTask((function() {
                            this.send("decrementTransitionLock")
                        }), 250)
                    }
                },
                isTransitionLocked: function() {
                    return this.get("transitionLock") > 0
                },
                processFlairEarned: function(e) {
                    e.find((e => "STRANGER" === e.voterRelationship)) ? this.set("displayedFlairEarned", 2) : e.length >= 2 ? this.set("displayedFlairEarned", 1) : this.set("displayedFlairEarned", 0)
                },
                strangerFlairIcon: a.Ember.computed("honorProfile.honorLevel", (function() {
                    const e = this.get("honorProfile.honorLevel");
                    return 3 === e ? o.HONOR_ASSET_PATH + "Level3_Stranger.png" : 4 === e ? o.HONOR_ASSET_PATH + "Level4_Stranger.png" : 5 === e ? o.HONOR_ASSET_PATH + "Level5_Stranger.png" : ""
                })),
                premadeFlairIcon: a.Ember.computed("honorProfile.honorLevel", (function() {
                    const e = this.get("honorProfile.honorLevel");
                    return 3 === e ? o.HONOR_ASSET_PATH + "Level3_Premade.png" : 4 === e ? o.HONOR_ASSET_PATH + "Level4_Premade.png" : 5 === e ? o.HONOR_ASSET_PATH + "Level5_Premade.png" : ""
                })),
                strangerFlairVisibilityClass: a.Ember.computed("honorProfile.honorLevel", "displayedFlairEarned", (function() {
                    return 2 === this.get("displayedFlairEarned") && this.get("honorProfile.honorLevel") >= 3 ? "visible" : ""
                })),
                premadeFlairVisibilityClass: a.Ember.computed("displayedFlairEarned", "honorProfile.honorLevel", (function() {
                    return 1 === this.get("displayedFlairEarned") && this.get("honorProfile.honorLevel") >= 3 ? "visible" : ""
                })),
                flairTooltipIsVisible: a.Ember.computed("displayedFlairEarned", "honorProfile.honorLevel", (function() {
                    return 0 !== this.get("displayedFlairEarned") && this.get("honorProfile.honorLevel") >= 3
                })),
                flairTooltip: a.Ember.computed("displayedFlairEarned", "honor.recallRewardEnabled", (function() {
                    const e = this.get("displayedFlairEarned"),
                        t = this.get("honor.recallRewardEnabled");
                    return 1 === e ? t ? this.get("tra").get("honor_postgame_premade_flair_recall_tooltip") : this.get("tra").get("honor_postgame_premade_flair_tooltip") : 2 === e ? t ? this.get("tra").get("honor_postgame_stranger_flair_recall_tooltip") : this.get("tra").get("honor_postgame_stranger_flair_tooltip") : ""
                })),
                processFullTeamVote: function() {
                    const e = this.get("conversationId"),
                        t = this.get("showedFullTeamVote"),
                        s = this.get("voteCompleted"),
                        n = this.get("voteCompletion.fullTeamVote");
                    e && !t && s && n && (this.set("showedFullTeamVote", !0), this.createChatCelebration(e))
                },
                voteCompleted: a.Ember.computed("eogData.reportGameId", "voteCompletion.gameId", (function() {
                    return this.get("eogData.reportGameId") === this.get("voteCompletion.gameId")
                })),
                progressVisibilityClass: a.Ember.computed("voteCompleted", (function() {
                    return this.get("voteCompleted") ? "hidden" : ""
                })),
                progressIndicator: o.HONOR_ASSET_PATH + "Voting_Progress_Indicator.png",
                currentGameIsHonorEligible: a.Ember.computed("latestHonorEligibleGame", "eogData.reportGameId", (function() {
                    const e = this.get("latestHonorEligibleGame"),
                        t = this.get("eogData.reportGameId");
                    return e && t && e === t
                })),
                createChatCelebration: function(e) {
                    const t = this.get("tra").get("honor_postgame_full_team_vote");
                    t && i.post(`/lol-chat/v1/conversations/${encodeURIComponent(e)}/messages`, {
                        body: t,
                        type: "celebration"
                    })
                },
                conversationId: a.Ember.computed("conversations.@each.id", (function() {
                    const e = this.get("conversations");
                    let t = null;
                    return e && e.some((function(e) {
                        if (e.type === o.CONVERSATION_TYPE_POSTGAME) return t = e.id, !0
                    })), t
                })),
                isLowSpec: a.Ember.computed("uxSettings", "uxSettings.data", "uxSettings.data.potatoModeEnabled", (function() {
                    return !!this.get("uxSettings.data.potatoModeEnabled")
                })),
                actions: {
                    incrementTransitionLock: function() {
                        this.set("transitionLock", this.get("transitionLock") + 1)
                    },
                    decrementTransitionLock: function() {
                        this.set("transitionLock", Math.max(this.get("transitionLock") - 1, 0))
                    }
                }
            });
            t.default = m
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const {
                RunMixin: i
            } = a.EmberAddons.EmberLifeline;
            var r = a.Ember.Component.extend(i, l.default, {
                classNameBindings: ["postgameNotificationClassName", "honorTypeClassName", "positionClassName", "hexakillClass"],
                honor: a.Ember.inject.service(),
                postgameNotificationClassName: "postgame-scoreboard-progression-honor-category-icon",
                honorSenderDisplayName: "",
                init: function() {
                    this._super(...arguments), this._playerNames = a.playerNames
                },
                didInsertElement() {
                    this._super(...arguments), this.getHonorSenderDisplayName()
                },
                audioMap: {
                    0: "sfx-honor-receive-1-2.ogg",
                    1: "sfx-honor-receive-1-2.ogg",
                    2: "sfx-honor-receive-3.ogg",
                    3: "sfx-honor-receive-4.ogg",
                    4: "sfx-honor-receive-4.ogg"
                },
                positionClassName: a.Ember.computed("honorIndex", (function() {
                    return "position" + this.get("honorIndex")
                })),
                honorTypeClassName: a.Ember.computed("honorType", (function() {
                    return "honorType" + this.get("honorType")
                })),
                honorType: a.Ember.computed("displayedHonor.honorCategory", (function() {
                    return this.get("displayedHonor.honorCategory")
                })),
                honorSenderPuuid: a.Ember.computed("displayedHonor.senderPuuid", (function() {
                    return this.get("displayedHonor.senderPuuid")
                })),
                getHonorSenderDisplayName: function() {
                    const e = this.get("honorSenderPuuid");
                    this._playerNames.getDisplayNameByPUUID(e).then((e => {
                        e?.playerNameFull && this.set("honorSenderDisplayName", e.playerNameFull)
                    }))
                },
                categoryIconUrl: a.Ember.computed("honorType", (function() {
                    const e = this.get("honorType");
                    if (e && o.HONOR_CATEGORY_DATA[e]) {
                        const t = o.HONOR_CATEGORY_DATA[e].postgameIcon;
                        return o.HONOR_ASSET_PATH + t
                    }
                    return ""
                })),
                categoryVideoUrl: a.Ember.computed("honorType", "honorIndex", (function() {
                    const e = this.get("honorType"),
                        t = "eog" + (this.get("honorIndex") + 1);
                    if (e && o.HONOR_CATEGORY_DATA[e] && o.HONOR_CATEGORY_DATA[e][t]) {
                        const s = o.HONOR_CATEGORY_DATA[e][t];
                        return o.HONOR_VIDEO_PATH + `${s}`
                    }
                    return ""
                })),
                categoryVideoClass: a.Ember.computed("honorIndex", (function() {
                    return `honor-postgame-notification-video${this.get("honorIndex")}`
                })),
                categoryBeamUrl: o.HONOR_VIDEO_PATH + "EOG_Sidebar_Beam.webm",
                categoryIconTooltip: a.Ember.computed("honorType", "honorSenderDisplayName", "honor.honorVisibilityEnabled", (function() {
                    const e = this.get("honorType"),
                        t = this.get("honorSenderDisplayName"),
                        s = this.get("honor.honorVisibilityEnabled");
                    if (e && o.HONOR_CATEGORY_DATA[e]) {
                        if (s && t) {
                            const t = o.HONOR_CATEGORY_DATA[e].tooltipBySummoner;
                            return this.get("tra").formatString(t, {
                                playerName: this.get("honorSenderDisplayName")
                            })
                        } {
                            const t = o.HONOR_CATEGORY_DATA[e].tooltip;
                            return this.get("tra").formatString(t)
                        }
                    }
                    return ""
                })),
                animateIntroHandler: a.Ember.on("didInsertElement", (function() {
                    const e = this.get("honorIndex"),
                        t = this.get("audioMap"),
                        s = e;
                    t[s] && this.playSound(t[s]), this.runTask((function() {
                        this.$("uikit-state-machine").attr("state", "initial")
                    }), 1), this.runTask((function() {
                        this.sendAction("decrementTransitionLock")
                    }), 1500)
                })),
                assetsReady: a.Ember.computed("categoryVideoClass", "categoryVideoUrl", "categoryIconUrl", (function() {
                    return !!(this.get("categoryVideoClass") && this.get("categoryVideoUrl") && this.get("categoryIconUrl"))
                })),
                shouldBeam: a.Ember.computed("honorIndex", (function() {
                    return this.get("honorIndex") > 1
                })),
                onWillDestroyElement: a.Ember.on("willDestroyElement", (function() {
                    const e = this.$(".honor-postgame-category-beam");
                    e && e.attr("src", "");
                    const t = this.$(".honor-postgame-category-icon");
                    t && t.attr("src", "")
                }))
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const {
                RunMixin: l
            } = a.EmberAddons.EmberLifeline, i = 33;
            var r = a.Ember.Component.extend(l, o.default, {
                classNames: ["postgame-ranked-component"],
                classNameBindings: ["shouldShow::removed"],
                leagueTierNames: a.leagueTierNames,
                uxSettings: a.UXSettings,
                displayedTier: null,
                displayedDivision: null,
                displayedLp: null,
                triggeredAnimation: !1,
                triggeredLpModificationAnimation: !1,
                largeAreaAnimationsEnabled: !1,
                inGracePeriod: !0,
                unloadSpinner: !1,
                postgame: a.Ember.inject.service(),
                postgameRanked: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                observerReference: null,
                lpIncreaseTickSound: null,
                init: function() {
                    this._super(...arguments), this.set("observerReference", (e => {
                        this.set("largeAreaAnimationsEnabled", e.largeAreaAnimationsEnabled)
                    })), this.get("uxSettings").addObserver(this.get("observerReference"));
                    let e = null;
                    const t = new Promise((function(t) {
                        e = t
                    }));
                    this.set("resolveDataPromise", e);
                    const s = t.then((() => {
                            const e = this.get("notification.queueType");
                            return this.leagueTierNames.getTiersForQueue(e).then((e => {
                                this.set("rankedQueueTiers", e || []), this.initializeStartingDisplay()
                            }))
                        })),
                        n = this.get("previousAnimationPromise");
                    n && n.then((() => {
                        s.then((() => {
                            this.startMainAnimation()
                        })), this.get("isRanked") ? (this.runTask((() => {
                            this.set("inGracePeriod", !1), this.get("haveData") || this.resolveAnimation()
                        }), 5e3), this.runTask((() => {
                            this.set("unloadSpinner", !0)
                        }), 7e3)) : this.resolveAnimation()
                    }))
                },
                willDestroyElement: function() {
                    this._super(...arguments), this.get("uxSettings").removeObserver(this.get("observerReference"))
                },
                notification: a.Ember.computed.readOnly("postgameRanked.currentLpChangeNotification"),
                isRanked: a.Ember.computed.readOnly("postgameRanked.isRanked"),
                isRated: a.Ember.computed.readOnly("postgameRanked.isRated"),
                isEogInvalid: a.Ember.computed.equal("postgame.eogStatsBlock.invalid", !0),
                isVictory: a.Ember.computed.readOnly("postgame.playerTeam.isWinningTeam"),
                isLossForgiven: a.Ember.computed("isEogInvalid", "isVictory", (function() {
                    return this.get("isEogInvalid") && !this.get("isVictory")
                })),
                isEarlySurrenderBystander: a.Ember.computed.readOnly("postgame.isEarlySurrenderBystander"),
                isTFT: a.Ember.computed.readOnly("gameflow.isTFT"),
                leaguePointsDelta: a.Ember.computed.readOnly("notification.leaguePointsDelta"),
                leaguePointsTotal: a.Ember.computed.readOnly("notification.leaguePoints"),
                consolationLpUsed: a.Ember.computed.readOnly("notification.consolationLpUsed"),
                miniseriesProgress: a.Ember.computed.readOnly("notification.miniseriesProgress"),
                notifyReason: a.Ember.computed.readOnly("notification.notifyReason"),
                division: a.Ember.computed.readOnly("notification.division"),
                tier: a.Ember.computed.readOnly("notification.tier"),
                provisionalGamesRemaining: a.Ember.computed.readOnly("notification.provisionalGamesRemaining"),
                numberOfPromotions: a.Ember.computed.readOnly("notification.numberOfPromotions"),
                afkLpPenaltyAmount: a.Ember.computed.readOnly("notification.afkLpPenaltyAmount"),
                afkLpPenaltyLevel: a.Ember.computed.readOnly("notification.afkLpPenaltyLevel"),
                haveData: a.Ember.computed("notification", "notification.gameId", (function() {
                    const e = this.get("notification"),
                        t = e && 0 !== e.gameId,
                        s = this.get("resolveDataPromise");
                    return t && s && s(), !!t
                })),
                shouldShow: a.Ember.computed("isRanked", "haveData", "isRated", (function() {
                    return (this.get("isRanked") || this.get("haveData")) && !this.get("isRated")
                })),
                spinnerIsVisible: a.Ember.computed("haveData", "inGracePeriod", (function() {
                    return !this.get("haveData") && this.get("inGracePeriod")
                })),
                errorIsVisible: a.Ember.computed("haveData", "inGracePeriod", (function() {
                    return !this.get("haveData") && !this.get("inGracePeriod")
                })),
                initializeStartingDisplay: function() {
                    let e = this.get("tier"),
                        t = this.get("division"),
                        s = this.get("leaguePointsTotal");
                    if (!this.get("isBeingPromotedOrDemoted") && this.get("isGainingLp")) {
                        const n = this.get("rankedQueueTiers"),
                            a = this.leagueTierNames.rankSubtract(e, t, s, this.get("leaguePointsDelta"), n);
                        e = a.tier, t = a.division, s = a.lp
                    }
                    this.set("displayedTier", e), this.set("displayedDivision", t), this.set("displayedLp", s)
                },
                startMainAnimation: function() {
                    this.set("triggeredAnimation", !1), this.set("triggeredLpModificationAnimation", !1), this.get("isBeingPromotedOrDemoted") ? this.promotionDemotionAnimation() : this.get("isInMiniseries") ? this.miniseriesAnimation() : this.get("isGainingLp") ? this.get("afkLpPenaltyApplied") ? this.lpModifierAnimation() : this.gainLpAnimation(this.get("leaguePointsDelta")) : this.get("isLosingLp") ? this.get("consolationLpWasApplied") || this.get("afkLpPenaltyApplied") ? this.lpModifierAnimation() : this.loseLpAnimation() : this.noChangeLpAnimation()
                },
                resolveAnimation: function() {
                    const e = this.get("resolveAnimationPromise");
                    e && e()
                },
                gainLpAnimation: function(e) {
                    let t = 1,
                        s = 1;
                    e <= 2 ? t = 6 : e <= 4 ? t = 4 : e <= 6 ? t = 3 : e <= 8 ? t = 2 : e <= 16 || (s = e <= 32 ? 2 : e <= 64 ? 4 : 8);
                    const n = this.get("rankedQueueTiers"),
                        a = this.leagueTierNames.rankAdd(this.get("displayedTier"), this.get("displayedDivision"), this.get("displayedLp"), s, n);
                    this.set("displayedTier", a.tier), this.set("displayedDivision", a.division), this.set("displayedLp", a.lp), e -= s, this.lpIncreaseTickSound ? this.lpIncreaseTickSound.play() : this.lpIncreaseTickSound = this.playSound("sfx-ranked-ui-lp-increase-tick.ogg"), e > 0 ? this.runTask((() => {
                        this.gainLpAnimation(e)
                    }), i * t) : this.runTask((() => {
                        this.set("triggeredAnimation", !0), this.playSound("sfx-ranked-ui-lp-increase-final-tick.ogg"), this.resolveAnimation()
                    }), 132)
                },
                lpModifierAnimation: function() {
                    if (this.get("largeAreaAnimationsEnabled")) {
                        let e;
                        const t = this.element.querySelector(".delta-lp-modifier-video");
                        e = this.get("afkLpPenaltyApplied") ? "sfx-uikit-afkleaver-stinger.ogg" : "sfx-uikit-consolation-stinger.ogg", t.currentTime = 0, t.style.visibility = "visible", this.runTask((() => {
                            this.playSound(e)
                        }), 330), this.runTask((() => {
                            t.play()
                        }), 330)
                    }
                    this.runTask((() => {
                        this.set("triggeredLpModificationAnimation", !0)
                    }), 990), this.runTask((() => {
                        this.get("isGainingLp") ? this.gainLpAnimation(this.get("leaguePointsDelta")) : this.loseLpAnimation()
                    }), 2178)
                },
                loseLpAnimation: function() {
                    this.set("triggeredAnimation", !0), this.runTask((() => {
                        this.playSound("sfx-ranked-ui-lp-decrease.ogg")
                    }), 167), this.runTask((() => {
                        this.resolveAnimation()
                    }), 333)
                },
                noChangeLpAnimation: function() {
                    this.set("triggeredAnimation", !0), this.runTask((() => {
                        this.resolveAnimation()
                    }), 333)
                },
                miniseriesAnimation: function() {
                    this.set("triggeredAnimation", !0), this.runTask((() => {
                        const e = this.get("miniseriesData");
                        e && e.forEach((e => {
                            e.animate && ("W" === e.result ? this.playSound("sfx-ranked-ui-promo-win.ogg") : "L" === e.result && this.playSound("sfx-ranked-ui-promo-loss.ogg"))
                        }))
                    }), 67), this.runTask((() => {
                        this.resolveAnimation()
                    }), 333)
                },
                promotionDemotionAnimation: function() {
                    this.runTask((function() {
                        this.resolveAnimation()
                    }), 333)
                },
                errorText: a.Ember.computed("tra", (function() {
                    return this.get("tra").get("postgame_ranked_error")
                })),
                errorTooltipHeader: a.Ember.computed("tra", (function() {
                    return this.get("tra").get("postgame_ranked_error_tooltip_header")
                })),
                errorTooltipBody: a.Ember.computed("tra", "isTFT", (function() {
                    return this.get("isTFT") ? this.get("tra").get("postgame_ranked_error_tooltip_tft_body") : this.get("tra").get("postgame_ranked_error_tooltip_body")
                })),
                isUnranked: a.Ember.computed("tier", (function() {
                    return !this.get("tier") || this.get("tier") === a.leaguesConsts.TIER_NAME_UNRANKED
                })),
                previousLp: a.Ember.computed("leaguePointsTotal", "leaguePointsDelta", (function() {
                    return Math.max(this.get("leaguePointsTotal") - this.get("leaguePointsDelta"), 0)
                })),
                consolationLpWasApplied: a.Ember.computed("consolationLpUsed", (function() {
                    return this.get("consolationLpUsed") > 0
                })),
                consolationLpWasAppliedText: a.Ember.computed("tra", (function() {
                    return this.get("tra.postgame_ranked_loss_consolation_applied")
                })),
                consolationTooltipBody: a.Ember.computed("tra", "consolationLpUsed", (function() {
                    return this.get("tra").formatString("postgame_ranked_loss_consolation_applied_tooltip", {
                        consolationLpUsed: this.get("consolationLpUsed")
                    })
                })),
                lpDeltaString: a.Ember.computed("leaguePointsDelta", "isVictory", "isInMiniseries", "isTFT", (function() {
                    const e = this.get("leaguePointsDelta");
                    return e > 0 ? "+" + this.leagueTierNames.getLpLoc(e) : e < 0 ? this.leagueTierNames.getLpLoc(e) : 0 === e ? this.get("isTFT") ? "" : this.get("isVictory") ? "+" + this.leagueTierNames.getLpLoc(e) : "-" + this.leagueTierNames.getLpLoc(e) : ""
                })),
                winStreakString: a.Ember.computed("notification.winStreak", (function() {
                    const e = this.get("notification.winStreak");
                    return e >= 3 && "RANKED_TFT_DOUBLE_UP" === this.get("notification.queueType") ? this.get("tra").formatString("postgame_win_streak", {
                        wins: e
                    }) : ""
                })),
                headerString: a.Ember.computed("isBeingPromotedOrDemoted", "isInMiniseries", "isVictory", "lpDeltaString", "isNoLpChange", "isTFT", "tra", (function() {
                    const e = this.get("isNoLpChange"),
                        t = !this.get("isBeingPromotedOrDemoted") && !this.get("isInMiniseries"),
                        s = this.get("isVictory"),
                        n = this.get("isTFT");
                    return t ? this.get("lpDeltaString") : n ? void 0 : e ? this.get("tra").get("postgame_ranked_tie_short") : s ? this.get("tra").get("postgame_ranked_win_short") : this.get("tra").get("postgame_ranked_loss_short")
                })),
                consolationHeaderString: a.Ember.computed("isBeingPromotedOrDemoted", "isInMiniseries", "isVictory", "leaguePointsDelta", "consolationLpUsed", (function() {
                    if (!this.get("isBeingPromotedOrDemoted") && !this.get("isInMiniseries")) {
                        const e = this.get("leaguePointsDelta");
                        if (e > 0) return "+" + this.leagueTierNames.getLpLoc(e);
                        if (e < 0) {
                            const t = this.get("consolationLpUsed");
                            return t > 0 ? this.leagueTierNames.getLpLoc(e - t) : this.leagueTierNames.getLpLoc(e)
                        }
                        return 0 === e ? this.get("isVictory") ? "+" + this.leagueTierNames.getLpLoc(e) : "-" + this.leagueTierNames.getLpLoc(e) : ""
                    }
                })),
                totalLPString: a.Ember.computed("leaguePointsTotal", (function() {
                    const e = this.get("leaguePointsTotal");
                    return this.leagueTierNames.getLpLoc(e)
                })),
                promotionStatusString: a.Ember.computed("isBeingPromoted", "isBeingDemoted", "tra", (function() {
                    return this.get("isBeingPromoted") ? this.get("tra").get("postgame_ranked_promoted_short") : this.get("isBeingDemoted") ? this.get("tra").get("postgame_ranked_demoted_short") : ""
                })),
                numberOfTimesPromotedString: a.Ember.computed("isBeingPromoted", "numberOfPromotions", "tra.postgame_ranked_promoted_multiple_promotions", (function() {
                    const e = this.get("numberOfPromotions");
                    return this.get("isBeingPromoted") && e > 1 ? this.get("tra").formatString("postgame_ranked_promoted_multiple_promotions", {
                        numberOfPromotions: e
                    }) : ""
                })),
                isPromotedMultipleTimes: a.Ember.computed("numberOfPromotions", (function() {
                    return this.get("numberOfPromotions") > 1
                })),
                isInMiniseries: a.Ember.computed("miniseriesProgress.length", (function() {
                    return this.get("miniseriesProgress.length") > 0
                })),
                startedMiniseries: a.Ember.computed("notifyReason", (function() {
                    return "MINISERIES_START" === this.get("notifyReason")
                })),
                isBeingPromoted: a.Ember.computed("notifyReason", (function() {
                    return "LEAGUE_PROMOTED" === this.get("notifyReason")
                })),
                isBeingDemoted: a.Ember.computed("notifyReason", (function() {
                    return "LEAGUE_DEMOTED" === this.get("notifyReason")
                })),
                isConsideredVictory: a.Ember.computed("isVictory", "isGainingLp", "isTFT", (function() {
                    return this.get("isTFT") ? this.get("isGainingLp") : this.get("isVictory")
                })),
                isGainingLp: a.Ember.computed("leaguePointsDelta", (function() {
                    return this.get("leaguePointsDelta") > 0
                })),
                isLosingLp: a.Ember.computed("leaguePointsDelta", (function() {
                    return this.get("leaguePointsDelta") < 0
                })),
                isNoLpChange: a.Ember.computed("isEarlySurrenderBystander", "isLossForgiven", (function() {
                    return this.get("isEarlySurrenderBystander") || this.get("isLossForgiven")
                })),
                isBeingPromotedOrDemoted: a.Ember.computed("isBeingPromoted", "isBeingDemoted", "isProvisional", (function() {
                    return !this.get("isProvisional") && (this.get("isBeingPromoted") || this.get("isBeingDemoted"))
                })),
                showDemotionProtected: a.Ember.computed("isTFT", "isBeingPromoted", "notification", "leaguePointsTotal", (function() {
                    return !(!this.get("isTFT") || this.get("notification.canDemoteFromTier") || !["IV", "NA"].includes(this.get("notification.division")) || !this.get("isBeingPromoted") && 0 !== this.get("leaguePointsTotal"))
                })),
                isDUNoLP8PlayerLobby: a.Ember.computed("isTFT", "notifyReason", (function() {
                    return this.get("isTFT") && "LEAGUE_POINTS_UPDATE_SKIPPED_FULL_PARTY" === this.get("notifyReason")
                })),
                isDUNoLPHighRankDisparity: a.Ember.computed("isTFT", "notifyReason", (function() {
                    return this.get("isTFT") && "LEAGUE_POINTS_UPDATE_SKIPPED_RANK_DISPARITY" === this.get("notifyReason")
                })),
                isLPChangeDisabled: a.Ember.computed.or("isDUNoLP8PlayerLobby", "isDUNoLPHighRankDisparity"),
                lpDisabledText: a.Ember.computed("isDUNoLP8PlayerLobby", "isDUNoLPHighRankDisparity", (function() {
                    return this.get("isDUNoLP8PlayerLobby") ? this.get("tra.postgame_du_no_lp_8_player_lobby") : this.get("isDUNoLPHighRankDisparity") ? this.get("tra.postgame_du_no_lp_high_rank_disparity") : ""
                })),
                demotionProtextionText: a.Ember.computed("showDemotionProtected", "isLPChangeDisabled", (function() {
                    return this.get("showDemotionProtected") && !this.get("isLPChangeDisabled") ? this.get("tra.postgame_demotion_protection") : ""
                })),
                isProvisional: a.Ember.computed("provisionalGamesRemaining", (function() {
                    return this.get("provisionalGamesRemaining") > 0
                })),
                miniseriesData: a.Ember.computed("notifyReason", "miniseriesProgress", "isNoLpChange", (function() {
                    const e = "MINISERIES_START" === this.get("notifyReason"),
                        t = this.get("miniseriesProgress"),
                        s = this.get("isNoLpChange"),
                        n = [];
                    let a = !1;
                    for (let o = t.length - 1; o >= 0; o--) {
                        const l = t[o],
                            i = "W" === l || "L" === l,
                            r = !a && i && !e && !s;
                        n.unshift({
                            result: l,
                            animate: r
                        }), a = i
                    }
                    return n
                })),
                miniseriesWinCount: a.Ember.computed("miniseriesProgress", (function() {
                    const e = this.get("miniseriesProgress");
                    if (!e) return 0;
                    let t = 0;
                    return e.forEach((function(e) {
                        "W" === e && t++
                    })), t
                })),
                displayedLpText: a.Ember.computed("displayedLp", (function() {
                    const e = this.get("displayedLp");
                    if (null !== e) return this.get("tra").formatString("postgame_ranked_modifiable_lp", {
                        leaguePoints: e
                    })
                })),
                displayedTierDivisionLabel: a.Ember.computed("displayedTier", "displayedDivision", (function() {
                    const e = this.get("displayedTier"),
                        t = this.get("displayedDivision");
                    if (e && t) return this.leagueTierNames.getFullTierDivisionName(e, t)
                })),
                afkLpPenaltyApplied: a.Ember.computed("afkLpPenaltyAmount", (function() {
                    return this.get("afkLpPenaltyAmount") < 0
                })),
                afkLpPenaltyAppliedText: a.Ember.computed("tra", "afkLpPenaltyAmount", (function() {
                    return this.get("tra").formatString("postgame_ranked_afk_penalty_applied", {
                        afkLpPenaltyAmount: this.get("afkLpPenaltyAmount")
                    })
                })),
                afkLpPenaltyAppliedTooltip: a.Ember.computed("tra", "afkLpPenaltyLevel", (function() {
                    const e = this.get("afkLpPenaltyLevel") - 1;
                    return 0 === e ? this.get("tra.postgame_ranked_afk_penalty_applied_tooltip_no_games_remaining") : 1 === e ? this.get("tra.postgame_ranked_afk_penalty_applied_tooltip_singular") : this.get("tra").formatString("postgame_ranked_afk_penalty_applied_tooltip_plural", {
                        afkLpPenaltyLevel: e
                    })
                }))
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const {
                RunMixin: l
            } = a.EmberAddons.EmberLifeline;
            var i = a.Ember.Component.extend(l, o.default, {
                classNames: ["postgame-rated-component"],
                classNameBindings: ["shouldShow::removed"],
                leagueTierNames: a.leagueTierNames,
                displayedRatedRating: "---",
                displayedRatedRatingDelta: "",
                postgame: a.Ember.inject.service(),
                postgameRanked: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                init: function() {
                    this._super(...arguments);
                    let e = null;
                    const t = new Promise((function(t) {
                        e = t
                    }));
                    this.set("resolveDataPromise", e), t.then((() => {
                        this.initializeStartingDisplay()
                    }));
                    const s = this.get("previousAnimationPromise");
                    s && s.then((() => {
                        this.get("resolveAnimationPromise")()
                    }))
                },
                notification: a.Ember.computed.readOnly("postgameRanked.currentLpChangeNotification"),
                isRated: a.Ember.computed.readOnly("postgameRanked.isRated"),
                ratedTier: a.Ember.computed.readOnly("notification.ratedTier"),
                ratedRating: a.Ember.computed.readOnly("notification.ratedRating"),
                ratedRatingDelta: a.Ember.computed.readOnly("notification.ratedRatingDelta"),
                isPositiveRatingDelta: a.Ember.computed.gte("ratedRatingDelta", 0),
                ratedTierImagePath: a.Ember.computed("ratedTier", "notification.queueType", (function() {
                    let e = this.get("ratedTier");
                    return a.leagueTierNames.isUnrated(e) && (e = a.leagueTierNames.getConstants().LOWEST_TFT_RATED_TIER), a.leagueTierNames.getTFTRatedPostgameBadge(e, this.get("notification.queueType"))
                })),
                ratedLoadingPath: a.Ember.computed("notification.queueType", (function() {
                    return a.leagueTierNames.getTFTRatedLoadingBadge(this.get("notification.queueType"))
                })),
                initializeStartingDisplay: function() {
                    let e = this.get("ratedTier");
                    const t = this.get("ratedRating"),
                        s = this.get("ratedRatingDelta");
                    e && e !== a.leagueTierNames.getConstants().RATED_TIER_NAME_NONE || (e = a.leagueTierNames.getConstants().LOWEST_TFT_RATED_TIER);
                    const n = this.get("postgameRanked.gameClientStats.queueType") || "RANKED_TFT_TURBO";
                    this.set("ratedTierImagePath", a.leagueTierNames.getTFTRatedPostgameBadge(e, n)), this.set("ratedLoadingPath", a.leagueTierNames.getTFTRatedLoadingBadge(n));
                    this.$(".postgame-rated-progression-tier-badge")[0].animate([{
                        opacity: 0,
                        transform: "scale(1.2, 1.2)"
                    }, {
                        opacity: 1,
                        transform: "scale(1, 1)"
                    }], {
                        duration: 500,
                        fill: "forwards",
                        easing: "cubic-bezier(0.7, 0, 0.84, 0)"
                    }).onfinish = () => {
                        const e = this.$(".postgame-rated-badge-highlight")[0];
                        this.playSound("sfx-celebrate-tft_turbo-badge-glint.ogg"), e.style.opacity = 1, e && e.animation && e.animation.play(), this.set("displayedRatedRating", t), s >= 0 ? this.set("displayedRatedRatingDelta", "+" + s) : this.set("displayedRatedRatingDelta", s)
                    }
                },
                haveData: a.Ember.computed("notification", "notification.gameId", (function() {
                    const e = this.get("notification"),
                        t = e && 0 !== e.gameId,
                        s = this.get("resolveDataPromise");
                    return t && s && s(), !!t
                })),
                shouldShow: a.Ember.computed.readOnly("isRated"),
                resolveAnimation: function() {
                    const e = this.get("resolveAnimationPromise");
                    e && e()
                },
                willDestroyElement: function() {
                    this._super(...arguments);
                    const e = this.element.querySelector(".postgame-rated-badge-highlight");
                    e && e.animation && e.animation.stop()
                }
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["postgame-replay-button"],
                    postgame: n.Ember.inject.service(),
                    gameflow: n.Ember.inject.service(),
                    gameId: n.Ember.computed("postgame.eogStatsBlock.reportGameId", "postgame.eogStatsBlock.gameId", (function() {
                        return this.get("postgame.eogStatsBlock.reportGameId") || this.get("postgame.eogStatsBlock.gameId")
                    })),
                    replayButton: null,
                    onDidInsertElement: n.Ember.on("didInsertElement", (function() {
                        this.createReplayButton()
                    })),
                    onWillDestroyElement: n.Ember.on("willDestroyElement", (function() {
                        this.get("replayButton") && (this.get("replayButton").destroy(), this.set("replayButton", null))
                    })),
                    createReplayButton: function() {
                        if (!n.Replays.isPostgameReplaysEnabled() || this.get("replayButton")) return !1;
                        if (this.get("isDestroying") || this.get("isDestroyed")) return !1;
                        const e = n.Replays.createReplayButtonForEndOfGame({
                            gameId: this.get("gameId"),
                            gameType: this.get("gameflow.queue.type"),
                            queueId: this.get("gameflow.queue.id")
                        });
                        return !!e && (this.set("replayButton", e), this.$().append(e.domNode), !0)
                    }
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const {
                RunMixin: l
            } = a.EmberAddons.EmberLifeline;
            var i = a.Ember.Component.extend(l, o.default, {
                classNames: ["secondary-progression-component"],
                classNameBindings: ["index"],
                postgame: a.Ember.inject.service(),
                hasCenterText: a.Ember.computed.bool("centerText"),
                hasCenterImage: a.Ember.computed.bool("centerImage"),
                hasTooltip: a.Ember.computed.bool("tooltipComponentName"),
                currentlyDisplayedValue: 0,
                currentNumberFrame: 0,
                doneAnimating: !1,
                lottiePath: a.Ember.computed((function() {
                    return this.getLottieAssetPath("secondary-meter-animation.json")
                })),
                init: function() {
                    this._super(...arguments);
                    let e = null;
                    const t = new Promise((function(t) {
                        e = t
                    }));
                    this.set("resolveDataPromise", e);
                    const s = this.get("previousAnimationPromise");
                    s && this.runTask((() => {
                        s && s.then((() => {
                            t.then((() => {
                                this.startAnimation(), this.incrementCurrentlyDisplayedValueTime()
                            }))
                        }))
                    }), 250)
                },
                haveData: a.Ember.computed("oldPercent", "newPercent", (function() {
                    const e = this.get("oldPercent"),
                        t = this.get("newPercent"),
                        s = "number" == typeof e && !isNaN(e) && "number" == typeof t && !isNaN(t),
                        n = this.get("resolveDataPromise");
                    return s && n && n(), !!s
                })),
                startAnimation: function() {
                    this.$("lol-uikit-lottie")[0] && (this.playSound("sfx-ranked-ui-circle-meter-fill-small.ogg"), this.$("lol-uikit-lottie")[0].animation.play()), this.get("isLevelUp") && this.runTask((() => {
                        this.playSound("sfx-ranked-ui-circle-meter-level-up.ogg")
                    }), 900), this.runTask((() => {
                        this.resolveAnimation()
                    }), 500)
                },
                resolveAnimation: function() {
                    this.get("resolveAnimationPromise")()
                },
                incrementCurrentlyDisplayedValueTime: function() {
                    const e = this.get("currentNumberFrame") + 1,
                        t = this.get("numberValue") || 0;
                    this.set("currentlyDisplayedValue", Math.floor(t * e / 45)), this.set("currentNumberFrame", e), e < 45 ? this.runTask((() => {
                        this.incrementCurrentlyDisplayedValueTime()
                    }), 33) : this.set("doneAnimating", !0)
                },
                gainedValue: a.Ember.computed("numberValue", (function() {
                    return this.get("numberValue") > 0
                })),
                newDisplayedPercent: a.Ember.computed("isLevelUp", "oldPercent", "newPercent", (function() {
                    return this.get("isLevelUp") ? this.get("newPercent") : this.get("oldPercent") + this.get("newPercent")
                })),
                displayedHeaderText: a.Ember.computed("headerText", "hasLevelUpText", "headerLevelUpText", "doneAnimating", (function() {
                    return this.get("hasLevelUpText") && this.get("doneAnimating") ? this.get("headerLevelUpText") : this.get("headerText")
                })),
                hasLevelUpText: a.Ember.computed("isLevelUp", "headerLevelUpText", (function() {
                    return this.get("isLevelUp") && this.get("headerLevelUpText")
                })),
                centerTextLengthClass: a.Ember.computed("hasCenterText", "centerText", (function() {
                    return this.get("hasCenterText") ? "length" + this.get("centerText").toString().length : ""
                }))
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const l = a.Ember.Object.extend(a.Ember.PromiseProxyMixin),
                i = (0, a.emberDataBinding)({
                    Ember: a.Ember,
                    websocket: a.socket,
                    logPrefix: "component:postgame-scoreboard-party-status",
                    basePaths: {
                        lobby: "/lol-lobby"
                    },
                    boundProperties: {
                        partyStatus: {
                            api: "lobby",
                            path: "/v2/party/eog-status"
                        }
                    }
                });
            var r = a.Ember.Component.extend(i, o.default, a.Ember.Evented, {
                classNames: ["postgame-party-status"],
                _oldPlayersReady: 0,
                readyPlayers: a.Ember.computed.alias("partyStatus.readyPlayers"),
                leftPlayers: a.Ember.computed.alias("partyStatus.leftPlayers"),
                eogPlayers: a.Ember.computed.alias("partyStatus.eogPlayers"),
                partySize: a.Ember.computed.alias("partyStatus.partySize"),
                numPlayersReady: a.Ember.computed.alias("readyPlayers.length"),
                numPlayersLeft: a.Ember.computed.alias("leftPlayers.length"),
                showMouseOverHeader: a.Ember.computed.gt("numPlayersReady", 0),
                summonerService: a.Ember.inject.service("summoner"),
                readyPlayersSummonersProxy: a.Ember.computed("readyPlayers", "readyPlayers.[]", (function() {
                    const e = this.get("readyPlayers");
                    if (!e || 0 === e.length) return null;
                    const t = this._playerNames.getDisplayNamesByPUUIDs(e);
                    return l.create({
                        promise: t
                    })
                })),
                readyPlayersNames: a.Ember.computed.readOnly("readyPlayersSummonersProxy.content"),
                init: function() {
                    this._super(...arguments), this._playerNames = a.playerNames
                },
                showComponent: a.Ember.computed("readyPlayers", "eogPlayers", "leftPlayers", "readyPlayers.[]", "eogPlayers.[]", "leftPlayers.[]", (function() {
                    return !!(this.get("readyPlayers") && this.get("eogPlayers") && this.get("leftPlayers")) && this.get("readyPlayers.length") + this.get("eogPlayers.length") + this.get("leftPlayers.length") > 1
                })),
                playerIconOrder: a.Ember.computed("readyPlayers", "numPlayersReady", (function() {
                    const e = a.Ember.A(),
                        t = this.get("numPlayersReady");
                    for (; e.length < t;) e.pushObject(e.length);
                    return t > this._oldPlayersReady && this.get("showComponent") && this.playSound("sfx-parties-notif-playagain.ogg"), this._oldPlayersReady = t, e
                })),
                leftIconOrder: a.Ember.computed("leftPlayers", "numPlayersLeft", "leftIconOrder", (function() {
                    const e = a.Ember.A(),
                        t = this.get("numPlayersLeft");
                    for (; e.length < t;) e.pushObject(e.length);
                    return e
                })),
                mouseOverText: a.Ember.computed("readyPlayersNames", (function() {
                    const e = this.get("readyPlayersNames");
                    if (!e) return this.get("tra.postgame_party_status_players_not_waiting");
                    const t = Object.entries(e);
                    if (!t || 0 === t.length) return this.get("tra.postgame_party_status_players_not_waiting");
                    const s = t.map((([e, t]) => t?.playerNameFull)).filter((e => e)).join(", ");
                    return this.get("tra").formatString("postgame_party_status_players_waiting", {
                        players: s
                    })
                }))
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var l = a.Ember.Component.extend(o.default, {
                classNames: ["postgame-header"],
                gameflow: a.Ember.inject.service(),
                gameclientPostgame: a.Ember.inject.service(),
                promethium: a.Ember.inject.service(),
                postgameRanked: a.Ember.inject.service(),
                bridge: a.Ember.inject.service(),
                rankedStats: a.Ember.computed.alias("postgameRanked.currentRankedStats"),
                rankedNotification: a.Ember.computed.alias("postgameRanked.currentLpChangeNotification"),
                localPlayerRank: a.Ember.computed.alias("gameclientPostgame.localPlayer.rank"),
                isVictory: a.Ember.computed.equal("localPlayerRank", 1),
                isTop4: a.Ember.computed.lte("localPlayerRank", 4),
                playerRankText: a.Ember.computed("localPlayerRank", "gameclientPostgame.localPlayer.partnerGroupId", (function() {
                    const e = this.get("gameclientPostgame.localPlayer.partnerGroupId") > 0 ? Math.ceil(this.get("localPlayerRank") / 2) : this.get("localPlayerRank");
                    if (!e) return "";
                    if (this.get("promethium.isPromethiumQueue")) return 1 === e ? this.get("tra.promethium_victory") : this.get("tra.promethium_defeat");
                    switch (e) {
                        case 1:
                            return this.get("tra.postgame_progress_place_first");
                        case 2:
                            return this.get("tra.postgame_progress_place_second");
                        case 3:
                            return this.get("tra.postgame_progress_place_third");
                        case 4:
                            return this.get("tra.postgame_progress_place_fourth");
                        case 5:
                            return this.get("tra.postgame_progress_place_fifth");
                        case 6:
                            return this.get("tra.postgame_progress_place_sixth");
                        case 7:
                            return this.get("tra.postgame_progress_place_seventh");
                        case 8:
                            return this.get("tra.postgame_progress_place_eighth");
                        default:
                            return this.get("tra.postgame_progress_game_complete")
                    }
                })),
                gameLength: a.Ember.computed("gameclientPostgame.gameClientStats.gameLength", (function() {
                    return this.duration.formatSeconds(this.get("gameclientPostgame.gameClientStats.gameLength"))
                })),
                queueDescription: a.Ember.computed.readOnly("gameflow.queue.description"),
                shouldShowPlacements: a.Ember.computed.alias("postgameRanked.isProvisional"),
                provisionalGameThreshold: a.Ember.computed("rankedStats.queueMap", "rankedNotification.queueType", (function() {
                    const e = this.get("rankedNotification.queueType"),
                        t = this.get("rankedStats.queueMap");
                    if (t && t[e]) return t[e].provisionalGameThreshold
                })),
                placementGamesString: a.Ember.computed("rankedNotification.provisionalGamesRemaining", "provisionalGameThreshold", "tra.postgame_rank_tagline_placement_game", (function() {
                    const e = this.get("provisionalGameThreshold"),
                        t = this.get("rankedNotification.provisionalGamesRemaining");
                    return this.get("tra").formatString("postgame_rank_tagline_placement_game", {
                        gameCount: e - t || 1,
                        provisionalGameThreshold: e || 1
                    })
                })),
                init() {
                    this._super(...arguments), this.get("bridge")
                }
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = (0, n.emberDataBinding)({
                Ember: n.Ember,
                websocket: n.socket,
                boundProperties: {
                    partnerGroupColorData: "/lol-game-data/assets/v1/tftuxtunables.json"
                }
            });
            var o = n.Ember.Component.extend(a, {
                classNames: ["tft-partner-group-placement"],
                placementDisplay: n.Ember.computed("placement", (function() {
                    return this.get("placement") + 1
                })),
                partnerGroupColorCode: n.Ember.computed("partnerGroupColorData", "partnerGroup", (function() {
                    const e = this.get("partnerGroupColorData");
                    if (e) {
                        const t = e[0].TFTPartnerGroupColors[this.get("partnerGroup") - 1];
                        return `rgb(${t.r}, ${t.g}, ${t.b})`
                    }
                    return "rgb(255, 255, 255)"
                }))
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var i = a.Ember.Component.extend(l.default, {
                classNames: ["postgame-tft-player"],
                classNameBindings: ["isLocalPlayer:postgame-tft-player-local", "shouldShowButtons:show-player-buttons", "isInPartnerGroup:postgame-tft-player-partner-group"],
                postgame: a.Ember.inject.service(),
                gameclientPostgame: a.Ember.inject.service(),
                promethium: a.Ember.inject.service(),
                player: null,
                isPlaybookEnabled: !1,
                numberOfUnitsToShow: 10,
                isLocalPlayer: a.Ember.computed.alias("player.isLocalPlayer"),
                isNotLocalPlayer: a.Ember.computed.not("isLocalPlayer"),
                isInteractable: a.Ember.computed.alias("player.isInteractable"),
                isNotInteractable: a.Ember.computed.not("isInteractable"),
                isInPartnerGroup: a.Ember.computed.gt("player.playerGroupId", 0),
                shouldShowButtons: a.Ember.computed.and("isNotLocalPlayer", "gameclientPostgame.isLocalPlayerInGame"),
                maxBenchSlots: a.Ember.computed("isPlaybookEnabled", "numberOfUnitsToShow", (function() {
                    const e = this.get("isPlaybookEnabled"),
                        t = this.get("numberOfUnitsToShow");
                    if (e) {
                        const e = this.get("playbook");
                        if (e && e.name) return t - 1
                    }
                    return t
                })),
                pieces: a.Ember.computed.alias("player.boardPieces"),
                piecePlaceholders: a.Ember.computed("pieces.length", "maxBenchSlots", (function() {
                    const e = this.get("pieces.length"),
                        t = this.get("maxBenchSlots");
                    if (e >= t) return a.Ember.A();
                    const s = t - e,
                        n = a.Ember.A();
                    for (let e = 0; e < s; e++) n.push(e);
                    return n
                })),
                playbook: a.Ember.computed.alias("player.playbook"),
                isInviteDisabled: !0,
                showInviteButton: !1,
                isReportDisabled: a.Ember.computed.or("hasBeenReported", "isNotInteractable"),
                hasBeenReported: a.Ember.computed("postgame.reportedPlayers.[]", (function() {
                    const e = this.get("postgame.reportedPlayers") || [],
                        t = this.get("player.puuid");
                    return e.includes(t)
                })),
                hasSentFriendRequest: !1,
                hasFriendData: a.Ember.computed("postgame.friendsList.[]", (function() {
                    const e = this.get("player.puuid"),
                        t = this.get("postgame.friendsList");
                    return !!t && t.some((t => t.puuid === e))
                })),
                isFriendRequestDisabled: a.Ember.computed.or("hasSentFriendRequest", "hasFriendData", "isNotInteractable"),
                isNotSet5Revival: a.Ember.computed("player", (function() {
                    return "TFTSet5_Revival" !== this.get("player.setCoreName")
                })),
                configAllowImportDialogue: !0,
                isTeamImportButtonEnabled: !1,
                isPromethiumMode: a.Ember.computed("promethium", "player", (function() {
                    return this.get("promethium.isPromethiumQueue") && this.get("player.promethiumData")
                })),
                didInsertElement() {
                    this._super(...arguments), a.db.observe("/lol-client-config/v3/client-config/lol.client_settings.tft.tft_teamPlanner_endOfGameImport", this, (e => {
                        this.set("configAllowImportDialogue", e)
                    })), this.maxTeamsCallbackIndex = a.TeamPlanner.addIsAtMaxTeamsObserverCallback(this.get("player.setCoreName"), (e => {
                        this.set("isTeamImportButtonEnabled", !e)
                    }))
                },
                willDestroyElement() {
                    this._super(...arguments), a.db.unobserve("/lol-client-config/v3/client-config/lol.client_settings.tft.tft_teamPlanner_endOfGameImport", this), a.TeamPlanner.removeMaxTeamsObserverCallback(this.maxTeamsCallbackIndex, this.get("player.setCoreName"))
                },
                _friendRequestSuccess: function(e, t) {
                    const s = t.contentBlockNotification(this.get("tra.postgame_friend_request_sent"), "postgame-friend-request-toast");
                    e.getToastManager().add({
                        type: "DialogToast",
                        data: {
                            contents: s
                        },
                        timing: "fast"
                    })
                },
                _friendRequestFail: function(e, t, s) {
                    let n;
                    n = s.includes(o.FULL_LIST_ERROR) ? t.contentBlockNotification(this.get("tra.postgame_friend_request_error_self_full"), "postgame-friend-request-toast-error") : t.contentBlockNotification(this.get("tra.postgame_friend_request_error"), "postgame-friend-request-toast-error"), e.getToastManager().add({
                        type: "DialogToast",
                        data: {
                            contents: n
                        }
                    })
                },
                scrollable: !1,
                scrollStart: 0,
                mouseDown(e) {
                    this.set("scrollable", !0), this.set("scrollStart", e.pageX)
                },
                mouseUp() {
                    this.set("scrollable", !1)
                },
                mouseLeave() {
                    this.set("scrollable", !1)
                },
                mouseMove(e) {
                    a.Ember.run.throttle(this, "handleScroll", {
                        event: e
                    }, 100)
                },
                handleScroll: a.Ember.observer("scrollable", "scrollStart", (function({
                    event: e
                }) {
                    if (this.get("scrollable") && e && e.pageX) {
                        const t = this.$(".tft-player-pieces-container"),
                            s = t.scrollLeft();
                        t.scrollLeft(s - (this.get("scrollStart") - e.pageX)), t.toggleClass("fade-left", t.scrollLeft() > 0), t.toggleClass("fade-right", t[0].scrollWidth - t.scrollLeft() - t.width() > 0)
                    }
                })),
                switchImportButtonToCheckmark() {
                    this.set("hasBeenImported", !0)
                },
                actions: {
                    sendFriendRequest: function() {
                        if (this.get("player.summonerId")) {
                            const e = (0, a.getProvider)().get("rcp-fe-lol-uikit"),
                                t = e.getTemplateHelper(),
                                s = {
                                    direction: "out",
                                    puuid: this.get("player.puuid")
                                };
                            this.set("hasSentFriendRequest", !0), (0, a.dataBinding)("/lol-chat").post("/v2/friend-requests", s).then((() => {
                                this._friendRequestSuccess(e, t)
                            })).catch((s => {
                                if (405 === s.status) this._showAddBlockedFriendDialog();
                                else {
                                    const n = s.data.message;
                                    this._friendRequestFail(e, t, n), this.set("hasSentFriendRequest", !1)
                                }
                            })), this.playSound("sfx-uikit-click-generic.ogg")
                        }
                    },
                    showReportDialog: function() {
                        const e = a.Ember.Object.create({
                            summonerName: this.get("player.summonerName"),
                            summonerId: this.get("player.summonerId"),
                            gameId: this.get("gameclientPostgame.gameId"),
                            puuid: this.get("player.puuid")
                        });
                        a.SharedReportModalApps.showReportModal(e, "", "TFT"), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    importTeamIntoTeamPlanner: function() {
                        a.TeamPlanner.setImportButtonClicked(this), a.TeamPlanner.setTeamImport(this.player.boardPieces, this.get("player.setCoreName")), a.TeamPlanner.showSaveTeamImport()
                    },
                    onMouseWheelScroll: function(e) {
                        e.preventDefault();
                        const t = this.$(".tft-player-pieces-container"),
                            s = t.scrollLeft(),
                            n = 15 * Math.sign(e.deltaY);
                        t.scrollLeft(s + n), t.toggleClass("fade-left", t.scrollLeft() > 0), t.toggleClass("fade-right", t[0].scrollWidth - t.scrollLeft() - t.width() > 0)
                    }
                }
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = n.UIKit.getTooltipManager();
            var o = n.Ember.Component.extend({
                classNames: ["tft-tooltip"],
                toolTipAttached: !1,
                tooltipOptions: {
                    targetAnchor: {
                        x: "center",
                        y: "top"
                    },
                    tooltipAnchor: {
                        x: "center",
                        y: "bottom"
                    },
                    tooltipDirection: "top"
                },
                tooltipSetup() {
                    const e = this.toolTipAttached;
                    if (this.tooltipHoverElement = this.element.parentElement, !e && this.tooltipHoverElement) {
                        const e = this.get("tooltipId");
                        this.tooltipElement = this.element.querySelector(`#tft-tooltip-${e}`), this.attachTooltip(), this.toolTipAttached = !0
                    }
                },
                didInsertElement() {
                    this._super(...arguments), this.tooltipSetup()
                },
                willDestroyElement() {
                    this._super(...arguments), this.detachTooltip()
                },
                attachTooltip: function() {
                    a.assign(this.tooltipHoverElement, this.tooltipElement, null, this.get("tooltipOptions"))
                },
                detachTooltip: function() {
                    a.unassign(this.tooltipHoverElement)
                }
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(45),
                l = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var i = a.Ember.Component.extend(l.default, {
                classNames: ["tft-skilltree-scoreboard"],
                gameclientPostgame: a.Ember.inject.service(),
                endOfGame: a.Ember.inject.service(),
                skillTree: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                showInfoModal: !1,
                tftGameAssets: a.Ember.computed.alias("endOfGame.genericAsset"),
                skillTreeData: a.Ember.computed.alias("skillTree.skillTreeData"),
                tftEventUrlFaq: a.Ember.computed.alias("skillTree.tftEventUrlFaq"),
                localPlayerPlacement: a.Ember.computed.alias("gameclientPostgame.localPlayer.rank"),
                playerPlacementText: a.Ember.computed("localPlayerPlacement", (function() {
                    const e = this.get("localPlayerPlacement");
                    return this.get("skillTree").getScoreboardPlacementText(e)
                })),
                tftSkilltreePostgameData: a.Ember.computed.alias("gameclientPostgame.skillTreeEoG"),
                tftEventSkillTree: a.Ember.computed("skillTreeData", (function() {
                    return this.get("skillTreeData.eventSkillTree")
                })),
                skillTreeProgression: a.Ember.computed("skillTreeData", (function() {
                    return this.get("skillTreeData.playerProgression")
                })),
                tftSkilltreeAssets: a.Ember.computed("tftGameAssets.lcu-assets-tft-skill-tree", (function() {
                    return this.get("tftGameAssets.lcu-assets-tft-skill-tree")
                })),
                tftSkillTreeRanks: a.Ember.computed("tftEventSkillTree.ranks", (function() {
                    return this.get("tftEventSkillTree.ranks")
                })),
                tftSkilltreePostgameBonusScoreData: a.Ember.computed("tftSkilltreeAssets", "tftSkilltreePostgameData.eventSkillToScore", "gameflow", (function() {
                    const e = [],
                        t = this.get("tftSkilltreePostgameData.eventSkillToScore"),
                        s = this.get("skillTree"),
                        n = this.get("gameflow.gameId");
                    if (this.sendTelemetryForEquippedSkills(), t && Array.isArray(t))
                        for (let a = 0; a < t.length; ++a) {
                            const l = t[a].skillId;
                            if (1 === l) continue;
                            let i, r, m;
                            if (0 === l) i = this.get("playerPlacementText");
                            else {
                                const e = s.getSkillFromSkillId(l);
                                e && (i = e.name, m = e?.itemId || "");
                                const t = s.getRankIndexFromSkillId(l);
                                r = this.get(`tftSkilltreeAssets.progress-bar-rank-icon-${t}`)
                            }(0, o.trackSpPerEquippedSkillPerGame)(o.PHASE.SKILL_TREE, `skill-tree-skill-id-${m}`, t[a].score, n, !0), i && e.push({
                                name: i,
                                value: t[a].score,
                                emblemPath: r
                            })
                        }
                    return e
                })),
                tftSkilltreePostgameBonusTotalScore: a.Ember.computed("tftSkilltreePostgameData.delta", "gameflow.gameId", "isVisionaryPenaltyApplied", (function() {
                    if (this.get("isVisionaryPenaltyApplied")) return 0;
                    const e = this.get("tftSkilltreePostgameData.delta"),
                        t = this.get("gameflow.gameId");
                    return (0, o.trackTotalSpPerGame)(o.PHASE.SKILL_TREE, t, e, !0), e > 0 ? `+${e}` : e
                })),
                tftPreviousEventPoint: a.Ember.computed("tftSkilltreePostgameData.delta", "skillTreeProgression.totalEventPoints", (function() {
                    return this.get("skillTreeProgression.totalEventPoints") - this.get("tftSkilltreePostgameData.delta")
                })),
                previousRank: a.Ember.computed("tftPreviousEventPoint", "skillTree", (function() {
                    const e = this.get("tftPreviousEventPoint");
                    return this.get("skillTree").getRankDivisionFromEventPoint(e).rank
                })),
                showTierModifiersUnlocked: a.Ember.computed("previousRank", "skillTreeProgression", "tftSkillTreeRanks", "gameflow.gameId", (function() {
                    return this.get("tftSkillTreeRanks").some((e => ("kClaimed" === e.state || "kClaimable" === e.state) && e.skills.length > 0 && e.skills.every((e => !e.equipped))))
                })),
                isVisionaryPenaltyApplied: a.Ember.computed("tftSkilltreePostgameData.eventSkillToScore", "gameflow", (function() {
                    const e = this.get("tftSkilltreePostgameData.eventSkillToScore");
                    if (e && Array.isArray(e))
                        for (const t of e)
                            if (65535 === t.skillId) return !0;
                    return !1
                })),
                sendTelemetryForPlayerPromotion(e, t) {
                    (0, o.trackPlayerPromotion)(o.PHASE.SKILL_TREE, e, t, !0)
                },
                sendTelemetryForEquippedSkills() {
                    const e = this.get("tftSkillTreeRanks");
                    e && Array.isArray(e) && e.forEach(((e, t) => {
                        const s = e.skills;
                        let n = "none";
                        if (s && Array.isArray(s))
                            for (const e of s)
                                if (!0 === e.equipped) {
                                    n = `skill-tree-skill-id-${e.itemId}`;
                                    break
                                }(0, o.trackSelectedModifierForRank)(o.PHASE.SKILL_TREE, `skill-tree-rank-${t}`, n, !0)
                    }))
                },
                actions: {
                    closeInfoModal() {
                        this.set("showInfoModal", !1), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    onInfoButtonClicked() {
                        this.set("showInfoModal", !0), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    openEventUrlFaq() {
                        this.get("tftEventUrlFaq") && window.open(this.get("tftEventUrlFaq", "_blank"))
                    }
                },
                didRender() {
                    const e = document.querySelector(".skill-tree-info-modal")?.closest(".dialog-frame"),
                        t = e?.shadowRoot;
                    if (t) {
                        const e = document.createElement("style");
                        e.textContent = '\n      :host .lol-uikit-dialog-frame.top, :host .lol-uikit-dialog-frame.bottom {\n        border-image-source: linear-gradient(180deg, #F1C159 0%, #C86ABB 100%);\n      }\n      .lol-uikit-dialog-frame-toast-close-button {\n        background: url("/fe/lol-uikit/images/close.png") !important;\n        background-size: 75% 75%, 100% 100% !important;\n        background-position: center !important;\n        background-repeat: no-repeat !important;\n      }\n      ', t.appendChild(e)
                    }
                }
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["tft-skilltree-score-row-component"],
                    scoreDetails: null,
                    modifierName: null,
                    bonusScoreValue: null,
                    emblemPath: null,
                    hasEmblem: n.Ember.computed.bool("emblemPath")
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const {
                RunMixin: a
            } = n.EmberAddons.EmberLifeline;
            var o = n.Ember.Component.extend(a, {
                classNames: ["tft-skilltree-progression"],
                fromRank: 3,
                fromDivision: 2,
                toRank: 4,
                toDivision: 2,
                gameclientPostgame: n.Ember.inject.service(),
                endOfGame: n.Ember.inject.service(),
                skillTree: n.Ember.inject.service(),
                animationSetupData: [{
                    loopAnimation: ["0_Unranked_Intro", "0_Unranked_Loop"],
                    elementExitAnimation: ["0_Unranked_Intro", "0_Unranked_to_Water"],
                    elementEnterAnimation: null,
                    divUpAnimation: null,
                    crestUpAnimation: null,
                    skeletonPath: "/fe/lol-tft/spine/skill-tree/Water_Ceremony.skel"
                }, {
                    loopAnimation: ["1_Water_Intro", "1_Water_Loop"],
                    elementExitAnimation: ["1_Water_Intro", "3_Water_to_Fire_Intro"],
                    elementEnterAnimation: ["1_Water_Loop", "1_Water_Loop"],
                    divUpAnimation: ["1_Water_Intro", "2_Division_Change", "1_Water_Loop"],
                    crestUpAnimation: ["1_Water_Intro", "2_Crest_Change", "1_Water_Loop"],
                    skeletonPath: "/fe/lol-tft/spine/skill-tree/Water_Ceremony.skel"
                }, {
                    loopAnimation: ["1_Intro", "1_Loop"],
                    elementExitAnimation: ["1_Intro", "3_Fire_to_Lightning_Intro"],
                    elementEnterAnimation: ["0_Water_to_Fire", "1_Loop"],
                    divUpAnimation: ["1_Intro", "2_Division_Change", "1_Loop"],
                    crestUpAnimation: ["1_Intro", "2_Crest_Change", "1_Loop"],
                    skeletonPath: "/fe/lol-tft/spine/skill-tree/Fire_Ceremony.skel"
                }, {
                    loopAnimation: ["1_Intro", "1_Loop"],
                    elementExitAnimation: null,
                    elementEnterAnimation: ["0_Fire_to_Lightning", "1_Loop"],
                    divUpAnimation: ["1_Intro", "2_Division_Change", "1_Loop"],
                    crestUpAnimation: ["1_Intro", "2_Crest_Change", "1_Loop"],
                    skeletonPath: "/fe/lol-tft/spine/skill-tree/Lightning_Ceremony.skel"
                }],
                animationAudioSetupData: [{
                    loopAnimation: "skill-tree-audio/sfx-tft-skilltree-intro.ogg",
                    elementExitAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-water-crest-up.ogg",
                    elementEnterAnimation: null,
                    divUpAnimation: null,
                    crestUpAnimation: null
                }, {
                    loopAnimation: "skill-tree-audio/sfx-tft-skilltree-intro.ogg",
                    elementExitAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-water-element-exit.ogg",
                    elementEnterAnimation: null,
                    divUpAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-water-division-up.ogg",
                    crestUpAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-water-crest-up.ogg"
                }, {
                    loopAnimation: "skill-tree-audio/sfx-tft-skilltree-intro.ogg",
                    elementExitAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-fire-element-exit.ogg",
                    elementEnterAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-fire-element-enter.ogg",
                    divUpAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-fire-division-up.ogg",
                    crestUpAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-fire-crest-up.ogg"
                }, {
                    loopAnimation: "skill-tree-audio/sfx-tft-skilltree-intro.ogg",
                    elementExitAnimation: null,
                    elementEnterAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-lightning-element-enter.ogg",
                    divUpAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-lightning-division-up.ogg",
                    crestUpAnimation: "skill-tree-audio/sfx-tft-skilltree-ceremony-lightning-crest-up.ogg"
                }],
                animationSkinCollection: ["L1_Apprentice", "L1_Apprentice", "L2_Guide", "L3_Expert", "L4_Guru", "L5_Scholar", "L6_Sage", "L7_Oracle", "L8_Visionary"],
                animationInitialDelay: 2e3,
                showFirstRank: !0,
                mainBannerSpine: null,
                secondaryBannerSpine: null,
                mainAnimationSetupData: n.Ember.computed("fromRank", "animationSetupData", (function() {
                    const e = this.get("fromRank"),
                        t = this.get("animationSetupData"),
                        s = this._getAnimationSetupDataIndex(e);
                    return s >= 0 && Array.isArray(t) && t.length ? t[s] : null
                })),
                mainAnimationAudioSetupData: n.Ember.computed("fromRank", "animationAudioSetupData", (function() {
                    const e = this.get("fromRank"),
                        t = this.get("animationAudioSetupData"),
                        s = this._getAnimationSetupDataIndex(e);
                    return s >= 0 && Array.isArray(t) && t.length ? t[s] : null
                })),
                secondaryAnimationSetupData: n.Ember.computed("toRank", "animationSetupData", (function() {
                    const e = this.get("toRank"),
                        t = this.get("animationSetupData"),
                        s = this._getAnimationSetupDataIndex(e);
                    return s >= 0 && Array.isArray(t) && t.length ? t[s] : null
                })),
                secondaryAnimationAudioSetupData: n.Ember.computed("toRank", "animationAudioSetupData", (function() {
                    const e = this.get("toRank"),
                        t = this.get("animationAudioSetupData"),
                        s = this._getAnimationSetupDataIndex(e);
                    return s >= 0 && Array.isArray(t) && t.length ? t[s] : null
                })),
                mainSkeleton: n.Ember.computed("mainAnimationSetupData", (function() {
                    const e = this.get("mainAnimationSetupData");
                    return e && e.skeletonPath
                })),
                secondarySkeleton: n.Ember.computed("secondaryAnimationSetupData", (function() {
                    const e = this.get("secondaryAnimationSetupData");
                    return e && e.skeletonPath
                })),
                mainAnimationSequence: n.Ember.computed("isElementChange", "isCrestChange", "isDivChange", "mainAnimationSetupData", (function() {
                    const e = this.get("isElementChange"),
                        t = this.get("isCrestChange"),
                        s = this.get("isDivChange"),
                        n = this.get("mainAnimationSetupData");
                    return e ? n ? n.elementExitAnimation : null : t ? n ? n.crestUpAnimation : null : s ? n ? n.divUpAnimation : null : n ? n.loopAnimation : null
                })),
                mainAnimationAudio: n.Ember.computed("isElementChange", "isCrestChange", "isDivChange", "mainAnimationAudioSetupData", (function() {
                    const e = this.get("isElementChange"),
                        t = this.get("isCrestChange"),
                        s = this.get("isDivChange"),
                        n = this.get("mainAnimationAudioSetupData");
                    return e ? n ? n.elementExitAnimation : null : t ? n ? n.crestUpAnimation : null : s ? n ? n.divUpAnimation : null : n ? n.loopAnimation : null
                })),
                secondaryAnimationSequence: n.Ember.computed("isElementChange", "secondaryAnimationSetupData", (function() {
                    const e = this.get("isElementChange"),
                        t = this.get("secondaryAnimationSetupData");
                    return e && t ? t.elementEnterAnimation : null
                })),
                secondaryAnimationAudio: n.Ember.computed("isElementChange", "secondaryAnimationAudioSetupData", (function() {
                    const e = this.get("isElementChange"),
                        t = this.get("secondaryAnimationAudioSetupData");
                    return e && t ? t.elementEnterAnimation : null
                })),
                isElementChange: n.Ember.computed("fromRank", "toRank", (function() {
                    const e = this.get("fromRank"),
                        t = this.get("toRank");
                    return this._getAnimationSetupDataIndex(e) !== this._getAnimationSetupDataIndex(t)
                })),
                isCrestChange: n.Ember.computed("fromRank", "toRank", (function() {
                    const e = this.get("fromRank"),
                        t = this.get("toRank");
                    return this._getAnimationSetupDataIndex(e) === this._getAnimationSetupDataIndex(t) && e !== t
                })),
                isDivChange: n.Ember.computed("fromDivision", "toDivision", (function() {
                    return this.get("fromDivision") !== this.get("toDivision")
                })),
                startSkin: n.Ember.computed("fromRank", (function() {
                    return this._getRankSkin(this.get("fromRank"))
                })),
                endSkin: n.Ember.computed("toRank", (function() {
                    return this._getRankSkin(this.get("toRank"))
                })),
                tftGameAssets: n.Ember.computed.alias("endOfGame.genericAsset"),
                tftSkilltreeAssets: n.Ember.computed("tftGameAssets.lcu-assets-tft-skill-tree", (function() {
                    return this.get("tftGameAssets.lcu-assets-tft-skill-tree")
                })),
                skillTreePostGameData: n.Ember.computed.alias("gameclientPostgame.skillTreeEoG"),
                skillTreeProgressionData: n.Ember.computed.alias("skillTree.skillTreeData.playerProgression"),
                skillTreeData: n.Ember.computed.alias("skillTree.skillTreeData.eventSkillTree"),
                currentRank: n.Ember.computed.alias("skillTreeProgressionData.rank"),
                numberOfDivision: n.Ember.computed("currRankData", "currentRank", (function() {
                    return this.get("currRankData") ? this.get("currRankData").numDivisions : 1
                })),
                divCurrentSP: n.Ember.computed.alias("skillTreeProgressionData.divisionEventPoints"),
                spNeededToNextRank: n.Ember.computed("currentRank", "skillTreeData.ranks", (function() {
                    const e = this.get("skillTreeData.ranks"),
                        t = this.get("currentRank");
                    return t === e.length ? 0 : e && Array.isArray(e) && t >= 0 && e.length > t ? e[t].totalEventPointsForRank : void 0
                })),
                divTotalSP: n.Ember.computed("spNeededToNextRank", "numberOfDivision", (function() {
                    return this.get("numberOfDivision") ? this.get("spNeededToNextRank") / this.get("numberOfDivision") : 0
                })),
                currRankData: n.Ember.computed("currentRank", "skillTreeData.ranks", (function() {
                    const e = this.get("skillTreeData.ranks"),
                        t = this.get("currentRank") - 1;
                    return e && Array.isArray(e) && t >= 0 && e.length > t ? e[t] : null
                })),
                rankName: n.Ember.computed("currentRank", "skillTreeData.ranks", "skillTreeProgressionData", "numberOfDivision", (function() {
                    const e = ["V", "IV", "III", "II", "I"],
                        t = this.get("skillTreeData.ranks"),
                        s = this.get("currentRank") - 1,
                        n = this.get("skillTreeProgressionData.currDivision") - 1;
                    let a = "",
                        o = "";
                    return a = t && Array.isArray(t) && s >= 0 && t.length > s ? t[s].name : this.get("tra.tft_skill_tree_unranked_name"), this.get("numberOfDivision") > 1 && n < e.length && (o = e[n]), `${a} ${o}`
                })),
                progressBarPercentage: n.Ember.computed("divCurrentSP", "divTotalSP", "currentRank", (function() {
                    const e = this.get("divCurrentSP"),
                        t = this.get("divTotalSP");
                    return 8 === this.get("currentRank") ? 1 : e && t ? e / t : 0
                })),
                init() {
                    this._super(...arguments), this._initializeStartEndRank()
                },
                _getAnimationSetupDataIndex(e) {
                    const t = [0, 1, 1, 2, 2, 2, 3, 3, 3];
                    return t.length > e ? t[e] : null
                },
                _getRankSkin(e) {
                    const t = this.get("animationSkinCollection");
                    return t && Array.isArray(t) && t.length > e ? t[e] : null
                },
                _initializeStartEndRank() {
                    const e = this.get("skillTreeProgressionData.rank"),
                        t = this.get("skillTreeProgressionData.totalEventPoints") - this.get("skillTreePostGameData.delta"),
                        s = this.get("skillTree").getRankDivisionFromEventPoint(t);
                    this.set("fromRank", s.rank), this.set("fromDivision", s.division), this.set("toRank", e), this.set("toDivision", this.get("skillTreeProgressionData.currDivision"))
                },
                actions: {
                    registerMainBannerSpine(e) {
                        this.set("mainBannerSpine", e), this.runTask((() => {
                            this.get("mainBannerSpine")?.playBannerSequence()
                        }), this.get("animationInitialDelay"))
                    },
                    registerSecondaryBannerSpine(e) {
                        this.set("secondaryBannerSpine", e)
                    },
                    swapToNextElementBannerSpine() {
                        this.get("isElementChange") && (this.set("showFirstRank", !1), this.set("needSecondaryPlayer", !0), this.get("secondaryBannerSpine").playBannerSequence())
                    }
                }
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var l = a.Ember.Component.extend(o.default, {
                classNames: ["tft-skilltree-progression-banner-spine"],
                animationSequence: null,
                animationAudio: null,
                skeletonPath: null,
                startSkin: null,
                endSkin: null,
                skinChangeAnimation: null,
                play: !1,
                pause: !0,
                autoPlay: !1,
                atlas: null,
                onSequenceCompleteCallback: null,
                registerBannerSpine: null,
                spinePlayer: null,
                animationSequenceIndex: 0,
                isPlaying: !1,
                defaultAnimation: a.Ember.computed("animationSequence", (function() {
                    const e = this.get("animationSequence");
                    return e && Array.isArray(e) && e.length > 0 ? e[0] : null
                })),
                didInsertElement() {
                    this.get("registerBannerSpine")(this)
                },
                playBannerSequence() {
                    !1 === this.get("isPlaying") && (this.get("spinePlayer") && this.get("spinePlayer").play(), this.get("animationAudio") && this.playSound(this.get("animationAudio")), this.set("isPlaying", !0))
                },
                pauseBannerSequence() {
                    this.get("spinePlayer") && this.get("spinePlayer").pause(), this.set("isPlaying", !1)
                },
                _playNextAnimation() {
                    const e = this.get("animationSequence");
                    let t = this.get("animationSequenceIndex");
                    const s = this.get("spinePlayer");
                    if (t += 1, this.set("animationSequenceIndex", t), e && Array.isArray(e) && e.length > t) {
                        const n = e[t],
                            a = t + 1 === e.length;
                        s.setAnimation(n, a), n === this.get("skinChangeAnimation") && this._updateSkin(this.get("endSkin"))
                    }
                    t === e.length && this.get("onSequenceCompleteCallback") && this.sendAction("onSequenceCompleteCallback")
                },
                _updateSkin(e) {
                    const t = this.get("spinePlayer");
                    t.skeleton.setSkinByName(e), t.skeleton.setSlotsToSetupPose(), t.animationState.apply(t.skeleton)
                },
                actions: {
                    spineAnimationCompleteCallback(e) {
                        this._playNextAnimation()
                    },
                    spineAnimationOnLoadCallback(e) {
                        this.set("spinePlayer", e), this._updateSkin(this.get("startSkin")), this.get("registerBannerSpine")(this)
                    }
                }
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var l = a.Ember.Component.extend(o.default, {
                classNames: ["tft-promethium-scoreboard"],
                gameclientPostgame: a.Ember.inject.service(),
                endOfGame: a.Ember.inject.service(),
                promethium: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                tftGameAssets: a.Ember.computed.alias("endOfGame.genericAsset"),
                promethiumData: a.Ember.computed.alias("promethium.promethiumData"),
                tftEventUrlFaq: a.Ember.computed.alias("promethium.tftEventUrlFaq"),
                isDoneLoadingMissions: !1,
                localPlayerPlacement: a.Ember.computed.alias("gameclientPostgame.localPlayer.rank"),
                postgameData: a.Ember.computed.alias("gameclientPostgame.skillTreeEoG"),
                didInsertElement() {
                    this._super(...arguments), this.set("isDoneLoadingMissions", !1);
                    a.Ember.run.later((() => {
                        this.set("isDoneLoadingMissions", !0)
                    }), 1e3)
                },
                skillTreeProgression: a.Ember.computed("promethiumData", (function() {
                    return this.get("promethiumData.playerProgression")
                })),
                tftSkilltreeAssets: a.Ember.computed("tftGameAssets.lcu-assets-tft-skill-tree", (function() {
                    return this.get("tftGameAssets.lcu-assets-tft-skill-tree")
                })),
                promethiumJourneyTrackXp: a.Ember.computed("postgameData.eventSkillToScore", "promethium.promethiumData", "promethium.pveEoGMissionRewards", (function() {
                    const e = [],
                        t = this.get("postgameData.eventSkillToScore"),
                        s = this.get("promethium.promethiumData.names");
                    if (!t || !Array.isArray(t) || !s) return e;
                    for (let n = 0; n < t.length; ++n) {
                        const a = t[n].skillId,
                            o = s[a];
                        let l = null;
                        6 === a && (l = "/lol-game-data/assets/ASSETS/UX/TFT/OutOfGame/EventHub/Promethium/Buddies/Prom_Icon_PerfectRun.png"), e.push({
                            name: o,
                            value: t[n].score,
                            iconSrc: l
                        })
                    }
                    const n = this.get("promethium.pveEoGMissionRewards") || [];
                    for (const t of n)
                        if ("PROGRESSION" === t.type) {
                            const s = {
                                name: t.name,
                                value: t.quantity
                            };
                            t.firstCompletionLevelMission ? e.unshift(s) : e.push(s)
                        } return e
                })),
                totalScoreString: a.Ember.computed("promethium.xpEarned", (function() {
                    const e = this.get("promethium.xpEarned");
                    return e >= 0 ? `+${e}` : null
                })),
                isGameScoreZero: a.Ember.computed("postgameData.delta", (function() {
                    return 0 === this.get("postgameData.delta")
                })),
                tftPreviousEventPoint: a.Ember.computed("postgameData.delta", "skillTreeProgression.totalEventPoints", (function() {
                    return this.get("skillTreeProgression.totalEventPoints") - this.get("postgameData.delta")
                })),
                actions: {
                    openEventUrlFaq() {
                        const e = this.get("tftEventUrlFaq");
                        e && window.open(e, "_blank")
                    }
                }
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["tft-promethium-score-row-component"],
                    scoreDetails: null,
                    modifierName: null,
                    bonusScoreValue: null,
                    iconSrc: null,
                    hasEmblem: n.Ember.computed.bool("emblemPath")
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["tft-promethium-progression"],
                    milestoneTotal: 1e3,
                    gameclientPostgame: n.Ember.inject.service(),
                    endOfGame: n.Ember.inject.service(),
                    promethium: n.Ember.inject.service(),
                    startSkin: n.Ember.computed("fromRank", (function() {
                        return this._getRankSkin(this.get("fromRank"))
                    })),
                    endSkin: n.Ember.computed("toRank", (function() {
                        return this._getRankSkin(this.get("toRank"))
                    })),
                    tftGameAssets: n.Ember.computed.alias("endOfGame.genericAsset"),
                    tftSkilltreeAssets: n.Ember.computed("tftGameAssets.lcu-assets-tft-skill-tree", (function() {
                        return this.get("tftGameAssets.lcu-assets-tft-skill-tree")
                    })),
                    actions: {}
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var l = a.Ember.Component.extend(o.default, {
                classNames: ["tft-skilltree-progression-banner-spine"],
                animationSequence: null,
                animationAudio: null,
                skeletonPath: null,
                startSkin: null,
                endSkin: null,
                skinChangeAnimation: null,
                play: !1,
                pause: !0,
                autoPlay: !1,
                atlas: null,
                onSequenceCompleteCallback: null,
                registerBannerSpine: null,
                spinePlayer: null,
                animationSequenceIndex: 0,
                isPlaying: !1,
                defaultAnimation: a.Ember.computed("animationSequence", (function() {
                    const e = this.get("animationSequence");
                    return e && Array.isArray(e) && e.length > 0 ? e[0] : null
                })),
                didInsertElement() {
                    this.get("registerBannerSpine")(this)
                },
                playBannerSequence() {
                    !1 === this.get("isPlaying") && (this.get("spinePlayer") && this.get("spinePlayer").play(), this.get("animationAudio") && this.playSound(this.get("animationAudio")), this.set("isPlaying", !0))
                },
                pauseBannerSequence() {
                    this.get("spinePlayer") && this.get("spinePlayer").pause(), this.set("isPlaying", !1)
                },
                _playNextAnimation() {
                    const e = this.get("animationSequence");
                    let t = this.get("animationSequenceIndex");
                    const s = this.get("spinePlayer");
                    if (t += 1, this.set("animationSequenceIndex", t), e && Array.isArray(e) && e.length > t) {
                        const n = e[t],
                            a = t + 1 === e.length;
                        s.setAnimation(n, a), n === this.get("skinChangeAnimation") && this._updateSkin(this.get("endSkin"))
                    }
                    t === e.length && this.get("onSequenceCompleteCallback") && this.sendAction("onSequenceCompleteCallback")
                },
                _updateSkin(e) {
                    const t = this.get("spinePlayer");
                    t.skeleton.setSkinByName(e), t.skeleton.setSlotsToSetupPose(), t.animationState.apply(t.skeleton)
                },
                actions: {
                    spineAnimationCompleteCallback(e) {
                        this._playNextAnimation()
                    },
                    spineAnimationOnLoadCallback(e) {
                        this.set("spinePlayer", e), this._updateSkin(this.get("startSkin")), this.get("registerBannerSpine")(this)
                    }
                }
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = (0, n.emberDataBinding)({
                Ember: n.Ember,
                websocket: (0, n.getProvider)().getSocket(),
                logPrefix: "service:postgame:end-of-game",
                basePaths: {
                    endofgame: "/lol-end-of-game",
                    chat: "/lol-chat"
                },
                boundProperties: {
                    eogStatsBlock: "/lol-end-of-game/v1/eog-stats-block",
                    championMasteryUpdateNotification: "/lol-end-of-game/v1/champion-mastery-updates",
                    lastQueuedLobby: "/lol-lobby/v1/last-queued-lobby",
                    augments: "/lol-game-data/assets/v1/cherry-augments.json",
                    championSummary: "/lol-game-data/assets/v1/champion-summary.json",
                    gameModeMutators: "/lol-game-data/assets/v1/game-mode-mutators.json",
                    items: "/lol-game-data/assets/v1/items.json",
                    summonerSpells: "/lol-game-data/assets/v1/summoner-spells.json",
                    runes: "/lol-game-data/assets/v1/perks.json",
                    configIsLoaded: "/lol-platform-config/v1/initial-configuration-complete",
                    championMasteryConfig: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig",
                    itemSetJmxConfig: "/lol-platform-config/v1/namespaces/ItemSets",
                    showPositionDetectionEnabled: "/lol-platform-config/v1/namespaces/Postgame/ShowPositionDetectionEnabled",
                    disableEogAnimations: {
                        path: "/lol-platform-config/v1/namespaces/Challenges/DisableEogAnimations",
                        default: !1
                    },
                    friendsList: "/lol-chat/v1/friends",
                    playerMutes: "/lol-chat/v1/player-mutes",
                    localSummoner: "/lol-summoner/v1/current-summoner",
                    postgameChallengesEnabled: {
                        path: "/lol-platform-config/v1/namespaces/Challenges/PostgameChallengesEnabled",
                        default: !0
                    },
                    postgameChampionMasteryEnabled: {
                        path: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/PostgameChampionMasteryEnabled",
                        default: !0
                    },
                    tftSets: "/lol-game-data/assets/v1/tftsets.json"
                }
            });
            var o = n.Ember.Service.extend(a, n.Ember.Evented, {
                largeAreaAnimationsEnabled: n.Ember.computed.alias("uxSettings.largeAreaAnimationsEnabled"),
                isItemSetsDisabled: n.Ember.computed.not("itemSetJmxConfig.EditorEnabled"),
                playerMuteStatus: {},
                preEndOfGameSequence: null,
                lifetimeWins: 0,
                lifetimeLosses: 0,
                tra: n.tra,
                init: function() {
                    this._super(...arguments), this._uxSettingsListener = this._uxSettingsObserver.bind(this), n.UXSettings.addObserver(this._uxSettingsListener), this.binding = n.dataBinding.bindTo((0, n.getProvider)().getSocket()), this.binding.observe("/lol-chat/v1/player-mutes", this, this.handlePlayerMuteStatusUpdate), this.binding.observe("/lol-pre-end-of-game/v1/currentSequenceEvent", this, this.handlePreEndOfGameSequence), this.getPerkStyles(this.binding), this.set("alreadyFriendRequestedList", []), n.db.observe("/lol-end-of-game/v1/eog-stats-block", this, (e => {
                        const t = e && e.localPlayer,
                            s = t && t.wins || 0,
                            a = t && t.losses || 0;
                        t && n.logger.info(`Lifetime stats EOG observation: gameId=${e.gameId}, wins=${s}, losses=${a}.`), this.setProperties({
                            eogStatsBlock: e,
                            lifetimeWins: s,
                            lifetimeLosses: a
                        })
                    }))
                },
                willDestroy() {
                    this._super(...arguments), n.UXSettings.removeObserver(this._uxSettingsListener)
                },
                _uxSettingsObserver: function(e) {
                    this.set("uxSettings", e)
                },
                getPerkStyles: function(e) {
                    return e.get("/lol-game-data/assets/v1/perkstyles.json").then((e => {
                        e && this.set("perkStyles", (e.styles || []).map((e => ({
                            id: e.id,
                            tooltip: e.tooltip,
                            name: e.name,
                            iconPath: e.iconPath
                        }))))
                    }))
                },
                isCustomGame: n.Ember.computed.equal("eogStatsBlock.gameType", "CUSTOM_GAME"),
                isClash: n.Ember.computed.equal("eogStatsBlock.queueType", "CLASH"),
                playerTeam: n.Ember.computed("eogStatsBlock.teams", (function() {
                    const e = this.get("eogStatsBlock.teams");
                    return e ? e.find((e => e.isPlayerTeam)) : null
                })),
                player: n.Ember.computed("playerTeam", "localSummoner.summonerId", (function() {
                    const e = this.get("playerTeam.players"),
                        t = this.get("localSummoner.summonerId");
                    return e && t ? n.Ember.A(e).findBy("summonerId", t) : null
                })),
                isLocalPlayerInGame: n.Ember.computed.notEmpty("player"),
                isLocalPlayerNotInGame: n.Ember.computed.not("isLocalPlayerInGame"),
                locale: n.Ember.computed.alias("tra.metadata.bcp47Tag"),
                dismissStats: function() {
                    return this.get("api.endofgame").post("/v1/state/dismiss-stats")
                },
                handlePlayerMuteStatusUpdate: function(e) {
                    e && this.set("playerMuteStatus", e)
                },
                handlePreEndOfGameSequence: function(e) {
                    e && this.set("preEndOfGameSequence", e?.name)
                },
                isEarlySurrenderBystander: n.Ember.computed("eogStatsBlock.gameEndedInEarlySurrender", "eogStatsBlock.causedEarlySurrender", "eogStatsBlock.isEarlySurrenderAccomplice", (function() {
                    return this.get("eogStatsBlock.gameEndedInEarlySurrender") && !this.get("eogStatsBlock.causedEarlySurrender") && !this.get("eogStatsBlock.isEarlySurrenderAccomplice")
                })),
                runesMap: n.Ember.computed("runes.[]", (function() {
                    const e = this.get("runes");
                    return e ? e.reduce(((e, t) => (t && t.id && (e[t.id] = t), e)), {}) : {}
                })),
                itemsMap: n.Ember.computed("items.[]", (function() {
                    const e = this.get("items");
                    if (!e) return {};
                    const t = {};
                    return e.forEach((e => {
                        e && e.id && (t[e.id] = e)
                    })), t
                })),
                augmentsMap: n.Ember.computed("augments.[]", (function() {
                    const e = this.get("augments");
                    if (e) {
                        const t = {};
                        return e.forEach((e => {
                            e && e.id && (t[e.id] = e)
                        })), t
                    }
                    return {}
                })),
                gameModeMutatorsMap: n.Ember.computed("gameModeMutators.[]", (function() {
                    const e = this.get("gameModeMutators");
                    if (e) {
                        const t = {};
                        return e.forEach((e => {
                            e && e.MapId && (t[e.MapId] = e)
                        })), t
                    }
                    return {}
                })),
                gameclientPostgame: n.Ember.inject.service(),
                shouldShowGameClientStats: n.Ember.computed("gameclientPostgame.lolGameClientStats", "eogStatsBlock", (function() {
                    return this.get("gameclientPostgame.lolGameClientStats") && !this.get("eogStatsBlock")
                })),
                cherryTeams: n.Ember.computed("eogStatsBlock.teams", (function() {
                    const e = [];
                    return this.get("eogStatsBlock.teams").forEach((t => t.players.forEach((function(t) {
                        const s = t.stats.PLAYER_SUBTEAM - 1;
                        e[s] = e[s] || {}, t.augments = this.buildPlayerAugmentsFromStats(t), e[s].players = e[s].players || [], e[s].players.push(t), e[s].isPlayerTeam = t.isLocalPlayer && t.stats.PLAYER_SUBTEAM - 1 === s
                    }), this)), this), e.forEach((t => t.players.forEach((function(t) {
                        const s = t.stats.PLAYER_SUBTEAM - 1;
                        e[s].stats ? e[s].stats = this.sumStatsByKey(e[s].stats, t.stats) : e[s].stats = Object.assign({}, t.stats)
                    }), this)), this), e.sort((function(e, t) {
                        return e.stats.PLAYER_SUBTEAM_PLACEMENT - t.stats.PLAYER_SUBTEAM_PLACEMENT
                    })), e
                })),
                buildPlayerAugmentsFromStats: function(e) {
                    const t = [];
                    return Object.keys(e.stats).map((function(s) {
                        s.includes("PLAYER_AUGMENT") && t.push(e.stats[s])
                    })), t
                },
                sumStatsByKey: function(e, t) {
                    return Object.keys(t).forEach((function(s) {
                        s.includes("PLAYER_SUBTEAM") || (e[s] = e[s] + t[s])
                    })), e
                }
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(4);
            const o = (0, n.emberDataBinding)({
                Ember: n.Ember,
                websocket: (0, n.getProvider)().getSocket(),
                logPrefix: "service:postgame:gameflow",
                boundProperties: {
                    gameClientStats: "/lol-end-of-game/v1/tft-eog-stats",
                    eogStatsBlock: "/lol-end-of-game/v1/eog-stats-block",
                    currentLpChangeNotification: "/lol-ranked/v1/current-lp-change-notification",
                    currentRankedStats: "/lol-ranked/v1/current-ranked-stats"
                }
            });
            var l = n.Ember.Service.extend(o, {
                isRanked: n.Ember.computed("eogStatsBlock.ranked", "eogStatsBlock.queueType", "gameClientStats.isRanked", (function() {
                    const e = this.get("eogStatsBlock.ranked") && "CLASH" !== this.get("eogStatsBlock.queueType"),
                        t = this.get("gameClientStats.isRanked");
                    return Boolean(e || t)
                })),
                isRated: n.Ember.computed("queueType", (function() {
                    const e = this.get("queueType");
                    return a.QUEUES.ALL_RATED_QUEUE_TYPES.includes(e)
                })),
                queueType: n.Ember.computed("eogStatsBlock.queueType", "gameClientStats.queueType", (function() {
                    const e = this.get("gameClientStats.queueType");
                    return e || this.get("eogStatsBlock.queueType")
                })),
                isProvisional: n.Ember.computed("currentLpChangeNotification.provisionalGamesRemaining", (function() {
                    return this.get("currentLpChangeNotification.provisionalGamesRemaining") > 0
                }))
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = (0, n.emberDataBinding)({
                Ember: n.Ember,
                websocket: (0, n.getProvider)().getSocket(),
                logPrefix: "service:postgame:parties",
                basePaths: {
                    lobby: "/lol-lobby",
                    platformConfig: "/lol-platform-config"
                },
                boundProperties: {
                    lobby: {
                        api: "lobby",
                        path: "/v2/lobby"
                    },
                    partiesEnabled: {
                        api: "platformConfig",
                        path: "/v1/namespaces/Parties/Enabled"
                    },
                    enabledForTeamBuilderQueues: {
                        api: "platformConfig",
                        path: "/v1/namespaces/Parties/EnabledForTeamBuilderQueues"
                    },
                    commsMembers: {
                        api: "lobby",
                        path: "/v2/comms/members"
                    },
                    hasActiveParty: {
                        api: "lobby",
                        path: "/v2/party-active"
                    },
                    partyGameMode: {
                        api: "lobby",
                        path: "/v1/parties/gamemode"
                    }
                }
            });
            var o = n.Ember.Service.extend(a, {
                playAgain: function() {
                    return this.get("api.lobby").post("/v2/play-again")
                },
                declinePlayAgain: function() {
                    return this.get("api.lobby").post("/v2/play-again-decline")
                },
                confirmButtonText: n.Ember.computed("tra.postgame_scoreboard_button_nav_play_again", (function() {
                    return this.get("tra.postgame_scoreboard_button_nav_play_again")
                })),
                invitePlayerToParty: function(e) {
                    return e && e.summonerId ? this.get("api.lobby").post("/v2/eog-invitations", [{
                        toSummonerId: e.summonerId
                    }]) : Promise.reject()
                },
                enabled: n.Ember.computed.and("partiesEnabled", "enabledForTeamBuilderQueues")
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Service.extend({
                    gameClientStats: null,
                    lolGameClientStats: null,
                    skillTreeData: null,
                    tftPromethiumManager: n.Ember.inject.service(),
                    init: function() {
                        this._super(...arguments), n.db.observe("/lol-end-of-game/v1/tft-eog-stats", this, (e => {
                            e = this._addEventPVEData(e), this.set("gameClientStats", e)
                        })), n.db.observe("/lol-tft-skill-tree/v1/skill-tree", this, (e => {
                            this.set("skillTreeData", e)
                        })), n.db.observe("/lol-end-of-game/v1/gameclient-eog-stats-block", this, (e => {
                            this.set("lolGameClientStats", e)
                        }))
                    },
                    gameId: n.Ember.computed.alias("gameClientStats.gameId"),
                    players: n.Ember.computed.alias("gameClientStats.players"),
                    localPlayer: n.Ember.computed.alias("gameClientStats.localPlayer"),
                    isLocalPlayerInGame: n.Ember.computed.bool("gameClientStats.localPlayer"),
                    skillTreeEoG: n.Ember.computed.alias("gameClientStats.playerSkillTreeEoG"),
                    eventPVEData: n.Ember.computed.alias("gameClientStats.eventPVEData"),
                    hasSkillTreeEoG: n.Ember.computed.bool("gameClientStats.playerSkillTreeEoG"),
                    isPlaybookEnabled: !1,
                    _addEventPVEData(e) {
                        const t = e?.eventPVEData;
                        if (!t) return e;
                        return e.players[0].promethiumData = t, e
                    }
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(4),
                o = s(3);
            const l = (0, n.emberDataBinding)({
                Ember: n.Ember,
                websocket: (0, n.getProvider)().getSocket(),
                logPrefix: "service:postgame:gameflow",
                boundProperties: {
                    gameflowState: "/lol-gameflow/v1/availability",
                    gameflowPlayerStatus: "/lol-gameflow/v1/gameflow-metadata/player-status"
                }
            });
            var i = n.Ember.Service.extend(l, {
                gameflowSession: null,
                init() {
                    this._super(...arguments), n.db.observe("/lol-gameflow/v1/session", this, (e => {
                        this.set("gameflowSession", e)
                    }))
                },
                map: n.Ember.computed.alias("gameflowSession.map"),
                gameId: n.Ember.computed.alias("gameflowSession.gameData.gameId"),
                queue: n.Ember.computed.alias("gameflowSession.gameData.queue"),
                isCustomGame: n.Ember.computed.alias("gameflowSession.gameData.isCustomGame"),
                phase: n.Ember.computed.alias("gameflowSession.phase"),
                canPlayAgain: n.Ember.computed.bool("gameflowPlayerStatus.lastQueuedLobbyStatus.allowedPlayAgain"),
                canInviteOthersAtEog: n.Ember.computed.bool("gameflowPlayerStatus.canInviteOthersAtEog"),
                lastQueuedMemberSummonerIds: n.Ember.computed.alias("gameflowPlayerStatus.lastQueuedLobbyStatus.memberSummonerIds"),
                gameMode: n.Ember.computed.alias("gameflowSession.gameData.queue.gameMode"),
                isTFT: n.Ember.computed.equal("gameMode", a.GAME_MODES.TFT),
                isCherry: n.Ember.computed.equal("gameMode", a.GAME_MODES.CHERRY),
                isStrawberry: n.Ember.computed.equal("gameMode", a.GAME_MODES.STRAWBERRY),
                isKiwi: n.Ember.computed.equal("gameMode", a.GAME_MODES.KIWI),
                isKiwiJade: n.Ember.computed.equal("gameMode", a.GAME_MODES.KIWI_JADE),
                backgroundImgPath: n.Ember.computed.alias("gameflowSession.map.assets.gameflow-background"),
                backgroundImgPathDark: n.Ember.computed.alias("gameflowSession.map.assets.gameflow-background-dark"),
                showKeystone: n.Ember.computed.not("gameflowSession.map.properties.suppressRunesMasteriesPerks"),
                isHonorEnabledForGameMode: n.Ember.computed("queue.gameMode", (function() {
                    return !o.HONOR_DISABLED_GAME_MODES.includes(this.get("queue.gameMode"))
                }))
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = (0, n.emberDataBinding)({
                    Ember: n.Ember,
                    websocket: (0, n.getProvider)().getSocket(),
                    logPrefix: "service:postgame:chat-messages",
                    basePaths: {
                        chat: "/lol-chat"
                    },
                    boundProperties: {
                        conversations: "/lol-chat/v1/conversations",
                        lootGrantNotifications: "/lol-loot/v1/loot-grants",
                        chatParticipants: "/lol-chat/v1/conversations/{{encodedConversationId}}/participants",
                        playerMutes: "/lol-chat/v1/player-mutes"
                    }
                }),
                o = [],
                l = [];
            var i = n.Ember.Service.extend(a, {
                postgame: n.Ember.inject.service(),
                eternals: n.Ember.inject.service(),
                gameflow: n.Ember.inject.service(),
                tra: n.tra,
                teamPlayers: n.Ember.computed.readOnly("postgame.playerTeam.players"),
                selfPlayer: n.Ember.computed.readOnly("postgame.player"),
                championMasteryUpdateNotification: n.Ember.computed.readOnly("postgame.championMasteryUpdateNotification"),
                memberGrades: n.Ember.computed.readOnly("championMasteryUpdateNotification.memberGrades"),
                levelUpList: n.Ember.computed.readOnly("championMasteryUpdateNotification.levelUpList"),
                gameId: n.Ember.computed.readOnly("postgame.eogStatsBlock.gameId"),
                eternalsEoGNotification: n.Ember.computed.readOnly("eternals.eogNotification"),
                eternalsEnabledQueues: n.Ember.computed.readOnly("eternals.enabledQueues"),
                initializeValues: n.Ember.on("init", (function() {
                    this.get("conversationId"), this.get("decoratedMemberGrades"), this.get("levelUpList"), this.get("championMasteryUpdateNotification.id"), this.get("teamBoost")
                })),
                championMasteryUpdateNotificationObserver: n.Ember.on("init", n.Ember.observer("conversationId", "championMasteryUpdateNotification.id", "decoratedMemberGrades.[]", "postgame.championSummary", (function() {
                    n.Ember.run.once(this, "processChampionMasteryUpdates")
                }))),
                lootGrantNotificationObserver: n.Ember.on("init", n.Ember.observer("currentGameLootGrants.@each.id", "conversationId", (function() {
                    n.Ember.run.once(this, "processLootGrantNotifications")
                }))),
                eternalsEoGNotificationObserver: n.Ember.observer("eternalsEoGNotification", "eternals", "gameflow.queue.id", (function() {
                    this.get("eternals").enabledForQueue(this.get("gameflow.queue.id")) && this.get("eternalsEoGNotification") && n.Ember.run.once(this, "processEternalsNotification")
                })),
                currentGameLootGrants: n.Ember.computed("gameId", "lootGrantNotifications.@each.gameId", (function() {
                    const e = this.get("gameId"),
                        t = this.get("lootGrantNotifications");
                    if (e && t) return t.filter((t => t.gameId === e))
                })),
                processLootGrantNotifications: function() {
                    const e = this.get("conversationId"),
                        t = this.get("currentGameLootGrants");
                    t && e && t.forEach((t => {
                        if (!o.includes(t.id)) {
                            switch (t.messageKey) {
                                case "UNOWNED_CHAMPION":
                                    this._sendSystemChatMessage(this.get("tra.postgame_chat_message_unowned_champion"), e), (0, n.dataBinding)("/lol-loot").delete(`/v1/loot-grants/${t.id}`);
                                    break;
                                case "GAME_LEAVER":
                                    this._sendSystemChatMessage(this.get("tra.postgame_chat_message_game_leaver"), e), (0, n.dataBinding)("/lol-loot").delete(`/v1/loot-grants/${t.id}`)
                            }
                            o.push(t.id)
                        }
                    }))
                },
                conversationId: n.Ember.computed("conversations.@each.id", (function() {
                    const e = this.get("conversations");
                    let t;
                    return e && e.some((function(e) {
                        if ("postGame" === e.type) return t = e.id, !0
                    })), t
                })),
                encodedConversationId: n.Ember.computed("conversationId", (function() {
                    return encodeURIComponent(this.get("conversationId"))
                })),
                summonerIdsInChat: n.Ember.computed("chatParticipants", "chatParticipants.[]", (function() {
                    const e = this.get("chatParticipants");
                    return Array.isArray(e) ? e.map((e => e.summonerId)) : []
                })),
                eternalsEnabled: n.Ember.computed("eternals", "gameflow.queue.id", (function() {
                    return this.get("eternals").enabledForQueue(this.get("gameflow.queue.id"))
                })),
                decoratedMemberGrades: n.Ember.computed("memberGrades.[]", "teamPlayers.[]", "selfPlayer", "postgame.championSummary", (function() {
                    const e = this.get("memberGrades"),
                        t = this.get("teamPlayers"),
                        s = this.get("selfPlayer"),
                        a = this.get("postgame.championSummary");
                    if (this.get("memberGrades.length") && this.get("teamPlayers.length") && s && a) return e.forEach((function(e) {
                        if (e.championName = a.find((t => t.id === e.championId)).name, e.puuid === s.puuid) {
                            const t = n.playerNames.getPlayerNameFromPlayer({
                                gameName: s.riotIdGameName,
                                tagLine: s.riotIdTagLine,
                                summonerName: s.summonerName
                            });
                            e.isSelfPlayer = !0, e.displayName = t.playerName
                        } else t.forEach((function(t) {
                            if (e.puuid === t.puuid) {
                                const s = n.playerNames.getPlayerNameFromPlayer({
                                    gameName: t.riotIdGameName,
                                    tagLine: t.riotIdTagLine,
                                    summonerName: t.summonerName
                                });
                                e.isTeamPlayer = !0, e.displayName = s.playerName
                            }
                        }))
                    })), e
                })),
                allPlayersPersonalBests: n.Ember.computed("eternalsEoGNotification.selfPersonalBests", "eternalsEoGNotification.otherPersonalBests", (function() {
                    const e = this.get("eternalsEoGNotification");
                    if (e) {
                        const t = e.selfPersonalBests || [],
                            s = e.otherPersonalBests || [];
                        return [...new Set([...t, ...s])]
                    }
                })),
                processChampionMasteryUpdates: function() {
                    const e = this.get("conversationId"),
                        t = this.get("championMasteryUpdateNotification.id"),
                        s = this.get("decoratedMemberGrades.length"),
                        n = l.includes(t),
                        a = this.get("postgame.championSummary");
                    s && e && t && a && !n && (this._displayMemberGradeMessages(), this._displayLevelUpMessages(), l.push(t))
                },
                processEternalsNotification: function() {
                    const e = this.get("conversationId");
                    this.get("eternalsEoGNotification") && e && this._displayStatstonePersonalBestMessages()
                },
                updatePlayerMute: function(e, t, s) {
                    const a = this.get("conversationId");
                    this.get("api.chat").post("/v1/player-mutes", {
                        puuids: [e],
                        isMuted: s
                    });
                    let o = "";
                    o = s ? n.tra.formatString("postgame_system_message_player_muted", {
                        summonerName: t
                    }) : n.tra.formatString("postgame_system_message_player_unmuted", {
                        summonerName: t
                    }), this._sendSystemChatMessage(o, a)
                },
                _displayMemberGradeMessages: function() {
                    const e = this.get("decoratedMemberGrades"),
                        t = this.get("conversationId");
                    e.forEach((e => {
                        e.isSelfPlayer ? this._sendSystemChatMessage(n.tra.formatString("postgame_chat_message_s_grade_self", {
                            grade: e.grade,
                            championName: e.championName
                        }), t) : e.isTeamPlayer && this._sendSystemChatMessage(n.tra.formatString("postgame_chat_message_s_grade_other", {
                            grade: e.grade,
                            summonerName: e.displayName,
                            championName: e.championName
                        }), t)
                    }))
                },
                _displayStatstonePersonalBestMessages: function() {
                    const e = this.get("allPlayersPersonalBests"),
                        t = this.get("conversationId");
                    e && e.forEach((e => {
                        this._sendSystemChatMessage(n.tra.formatString("postgame_eternals_personal_best_chat_message", {
                            summonerName: e.summoner.displayName,
                            personalBest: e.personalBest,
                            statstoneName: e.statstoneName
                        }), t)
                    }))
                },
                _displayLevelUpMessages: function() {
                    const e = this.get("championMasteryUpdateNotification.levelUpList"),
                        t = this.get("conversationId"),
                        s = this.get("selfPlayer"),
                        a = this.get("teamPlayers"),
                        o = this.get("postgame.championSummary");
                    e.forEach((e => {
                        const l = o.find((t => t.id === e.championId)),
                            i = l.name,
                            r = l.roles[0],
                            m = e.championLevel || 5;
                        let c = "";
                        if (r && (c = this.get(`tra.champion_mastery_role_title_${r.toLowerCase()}_${m}`)), e.playerId === s.summonerId) this._sendSystemChatMessage(n.tra.formatString("postgame_chat_message_champion_mastery_level_self", {
                            masteryLevel: m,
                            masteryTitle: c,
                            championName: i
                        }), t);
                        else {
                            const s = a.find((t => e.playerId === t.summonerId));
                            if (s) {
                                const e = s.displayName?.playerName;
                                this._sendSystemChatMessage(n.tra.formatString("postgame_chat_message_champion_mastery_level_other", {
                                    summonerName: e,
                                    masteryLevel: m,
                                    masteryTitle: c,
                                    championName: i
                                }), t)
                            }
                        }
                    }))
                },
                _sendSystemChatMessage: function(e, t) {
                    this.get("api.chat").post(`/v1/conversations/${encodeURIComponent(t)}/messages`, {
                        body: e,
                        type: "celebration"
                    })
                }
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = "/lol-statstones/v1/statstones-enabled-queue-ids",
                o = "/lol-statstones/v1/eog-notifications",
                l = "/lol-platform-config/v1/namespaces/Eternals/Enabled",
                i = "/lol-end-of-game/v1/eog-stats-block",
                r = "/lol-end-of-game/v1/gameclient-eog-stats-block";
            var m = n.Ember.Service.extend({
                init: function() {
                    this._super(...arguments), this._prevGameId = 0, this.set("enabledQueues", []), this.set("notifications", []), this.binding = n.dataBinding.bindTo((0, n.getProvider)().getSocket()), this.initDataBindings()
                },
                willDestroy: function() {
                    this._super(...arguments), this.binding.unobserve(l, this), this.binding.unobserve(a, this), this.binding.unobserve(i, this), this.binding.unobserve(r, this), this._prevGameId && this.binding.unobserve(`${o}/${this._prevGameId}`, this), this.binding.unobserve(this, this.handleEternalsUpdate), this.binding = null
                },
                initDataBindings: function() {
                    this.binding.observe(i, this, this.handleEoGStatsBlock), this.binding.observe(r, this, this.handleEoGStatsBlock), this.binding.observe(l, this, (e => {
                        const t = !!e;
                        this.set("enabled", t), this.observeEternalsResources(t)
                    }))
                },
                handleEoGStatsBlock: function(e) {
                    if (!e) return;
                    const {
                        gameId: t
                    } = e;
                    if (this._prevGameId && this.binding.unobserve(`${o}/${this._prevGameId}`, this), t && (this._prevGameId = t), this.get("enabled") && t) {
                        const e = `${o}/${this._prevGameId}`;
                        this.binding.unobserve(this, this.handleEternalsUpdate), this.binding.observe(e, this, this.handleEternalsUpdate)
                    }
                },
                handleEternalsUpdate: function(e) {
                    e || (e = {}), this.set("eogNotification", e)
                },
                observeEternalsResources: function(e) {
                    if (this.binding && !this.isDestroyed && !this.isDestroying)
                        if (e) {
                            if (this.binding.observe(a, this, (e => {
                                    e || (e = []), this.set("enabledQueues", e)
                                })), this._prevGameId) {
                                const e = `${o}/${this._prevGameId}`;
                                this.binding.unobserve(this, this.handleEternalsUpdate), this.binding.observe(e, this, this.handleEternalsUpdate)
                            }
                        } else this.set("enabledQueues", []), this.set("eogNotification", {}), this.binding.unobserve(a, this), this._prevGameId && this.binding.unobserve(`${o}/${this._prevGameId}`, this)
                },
                enabledForQueue: function(e) {
                    return (this.get("enabledQueues") || []).includes(e)
                },
                selfProgression: n.Ember.computed("eogNotification.selfStatstoneProgress.[]", "eogNotification.selfMilestoneProgress.[]", (function() {
                    const e = this.get("eogNotification.selfStatstoneProgress") || [],
                        t = this.get("eogNotification.selfMilestoneProgress") || [];
                    return this.addMilestoneToProgressData(e, t)
                })),
                addMilestoneToProgressData: function(e, t) {
                    return t.forEach((t => {
                        const s = e.find((e => e.statstoneId === t.statstoneId));
                        s && (s.isMilestone = !0)
                    })), e
                }
            });
            t.default = m
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            var a = n.Ember.Service.extend({
                enabled: n.Ember.computed.alias("honorConfig.Enabled"),
                recallRewardEnabled: n.Ember.computed.alias("honorConfig.RecallRewardEnabled"),
                honorVisibilityEnabled: n.Ember.computed.alias("honorConfig.HonorVisibilityEnabled"),
                secondsToVote: n.Ember.computed.alias("honorConfig.SecondsToVote"),
                isTencentRegion: n.Ember.computed.equal("region", "TENCENT"),
                isTencentBugReportEnabled: n.Ember.computed.and("isTencentRegion", "isDiagnosticAssistantEnabled"),
                init: function() {
                    this._super(...arguments), this.binding = n.dataBinding.bindTo((0, n.getProvider)().getSocket()), this.initDataBindingObservers(), this.binding.get("/lol-tencent-diagnostic-assistant/v1/enabled").then((e => {
                        this.set("isDiagnosticAssistantEnabled", e)
                    })), this.binding.get("/riotclient/region-locale").then((e => {
                        this.set("region", e.region)
                    }))
                },
                willDestroy: function() {
                    this._super(...arguments), this.tearDownDataBindingObservers()
                },
                initDataBindingObservers() {
                    this._observers = [], this._observers.push(this._addObservedProperty("/lol-honor-v2/v1/config", "honorConfig")), this._observers.push(this._addObservedProperty("/lol-settings/v2/local/lol-user-experience", "uxSettings")), this._observers.push(this._addObservedProperty("/lol-chat/v1/conversations", "conversations")), this._observers.push(this._addObservedProperty("/lol-honor-v2/v1/team-choices", "teamChoices")), this._observers.push(this._addObservedProperty("/lol-honor-v2/v1/recognition", "receivedHonors")), this._observers.push(this._addObservedProperty("/lol-honor-v2/v1/profile", "honorProfile")), this._observers.push(this._addObservedProperty("/lol-honor-v2/v1/vote-completion", "voteCompletion")), this._observers.push(this._addObservedProperty("/lol-honor-v2/v1/ballot", "honorBallot"))
                },
                tearDownDataBindingObservers() {
                    this._observers && this._observers.forEach((e => this.binding.unobserve(e, this))), this._observers = []
                },
                refreshHonorBallot() {
                    this.isDestroying || this.isDestroyed || this.binding.post("/lol-honor-v2/v1/ballot/refresh")
                },
                _setPropertyValue(e, t) {
                    this.isDestroying || this.isDestroyed || this.set(e, t)
                },
                _addObservedProperty(e, t) {
                    return this.binding.observe(e, this, (e => {
                        this._setPropertyValue(t, e)
                    })), e
                },
                honorPlayer(e) {
                    return this.binding.post("/lol-honor/v1/honor", e)
                },
                submitBallot() {
                    return this.binding.post("/lol-honor/v1/ballot")
                },
                invokeTencentDiagnosticAssistant() {
                    this.binding.post("/lol-tencent-diagnostic-assistant/v1/invoke")
                }
            });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            var n = s(1);
            e.exports = n.Ember.Service.extend({
                init: function() {
                    this._super(...arguments), this._binding = n.dataBinding.bindTo(n.socket), this._binding.observe("/lol-challenges/v1/challenges/local-player", this, this.handleLocalPlayerChallenges)
                },
                handleLocalPlayerChallenges(e) {
                    this.set("localPlayerChallengesData", e)
                }
            })
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Service.extend({
                    init: function() {
                        this._super(...arguments), this.initPerksDataBindings()
                    },
                    initPerksDataBindings() {
                        this.databinding = (0, n.dataBinding)("/lol-perks", n.socket), this.databinding.observe("/v1/inventory", this, this.handlePerksInventory), this.databinding.observe("/v1/currentpage", this, this.handleCurrentPage)
                    },
                    handlePerksInventory(e) {
                        this.set("canAddCustomPage", e && e.canAddCustomPage), this.set("isCustomPageCreationUnlocked", e && e.isCustomPageCreationUnlocked)
                    },
                    handleCurrentPage(e) {
                        this.set("currentPage", e), this.set("isCurrentPageTemporary", e && e.isTemporary)
                    },
                    createPerksPage: function() {
                        const e = this.get("currentPage");
                        return e.isTemporary = !1, this.databinding.post("/v1/pages", e)
                    }
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            var n = s(1);
            const a = "couldShowRemedyVerbalAbuseModal",
                o = "/lol-remedy/v1/config/is-verbal-abuse-remedy-modal-enabled",
                l = "/lol-player-report-sender/v1/game-ids-with-verbal-abuse-report";
            e.exports = n.Ember.Service.extend({
                isVerbalAbuseRemedyEnabled: !1,
                gameIdsWithVerbalAbuseReports: [],
                couldShowVerbalAbuseModalPreference: !0,
                init() {
                    this._super(...arguments), this.db = n.dataBinding.bindTo(n.socket), this.initObservers(), this.db.get("/lol-settings/v2/account/LCUPreferences/lol-navigation").then((e => {
                        e && e.data && void 0 !== e.data[a] ? this.set("couldShowVerbalAbuseModalPreference", e.data[a]) : this.set("couldShowVerbalAbuseModalPreference", !0)
                    }))
                },
                willDestroy() {
                    this._super(...arguments), this.removeObservers()
                },
                initObservers() {
                    this.db.observe(o, this, (e => {
                        this.set("isVerbalAbuseRemedyEnabled", e)
                    })), this.db.observe(l, this, (e => {
                        this.set("gameIdsWithVerbalAbuseReports", e || [])
                    }))
                },
                removeObservers() {
                    this.db.removeObserver(o, this), this.db.removeObserver(l, this)
                },
                couldShowRemedyVerbalAbuseModal: function(e) {
                    const t = this.get("isVerbalAbuseRemedyEnabled"),
                        s = this.get("gameIdsWithVerbalAbuseReports"),
                        n = this.get("couldShowVerbalAbuseModalPreference");
                    return t && n && s.includes(e)
                }
            })
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Service.extend({
                    championMasteryUpdateNotification: {},
                    championMasteryData: {},
                    championMasteryBasePath: "/lol-champion-mastery",
                    championMasteryNotificationPath: "/v1/notifications",
                    championMasteryDataPath: "/v1/local-player/champion-mastery-sets-and-rewards",
                    init() {
                        this._super(...arguments), this.initDataBindings(), this.initObservers()
                    },
                    willDestroy() {
                        this.removeObservers(), this.removeDataBindings()
                    },
                    initDataBindings() {
                        this._championMasteryBinding = (0, n.dataBinding)(this.get("championMasteryBasePath"), n.socket)
                    },
                    initObservers() {
                        this._championMasteryBinding.observe(this.get("championMasteryNotificationPath"), this, this.handleChampionMasteryUpdate.bind(this)), this._championMasteryBinding.observe(this.get("championMasteryDataPath"), this, this.handleChampionMasteryData.bind(this))
                    },
                    removeDataBindings() {
                        this._championMasteryBinding = null
                    },
                    removeObservers() {
                        this._championMasteryBinding.removeObserver(this.get("championMasteryNotificationPath"), this), this._championMasteryBinding.removeObserver(this.get("championMasteryDataPath"), this)
                    },
                    handleChampionMasteryUpdate(e) {
                        this.set("championMasteryUpdateNotification", e)
                    },
                    handleChampionMasteryData(e) {
                        this.set("championMasteryData", e)
                    }
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = "kSeasonPass";
            var o = n.Ember.Service.extend({
                postgame: n.Ember.inject.service(),
                isSeasonPassActive: !1,
                seasonPassId: "",
                eventPassData: null,
                isTrackProgressLoading: !0,
                mayhemPassId: "",
                mayhemEventPassData: null,
                isMayhemTrackProgressLoading: !0,
                isErrored: !1,
                eventHubBasePath: "/lol-event-hub/v1",
                eventPassPath: "/events",
                seasonPassTrackProgress: n.Ember.computed.alias("eventPassData.trackProgressNextReward"),
                seasonPassTrackCurrentTotalPassProgress: n.Ember.computed.alias("eventPassData.rewardTrackProgress.passProgress"),
                mayhemPassTrackProgress: n.Ember.computed.alias("mayhemEventPassData.trackProgressNextReward"),
                mayhemPassTrackCurrentTotalPassProgress: n.Ember.computed.alias("mayhemEventPassData.rewardTrackProgress.passProgress"),
                isPassDataErrored: n.Ember.computed("isErrored", "eventPassData", (function() {
                    const e = this.get("eventPassData");
                    return null !== e && (this.get("isErrored") || !e || !this.get("seasonPassTrackProgress") || !this._validateEventPassProgress(e))
                })),
                init() {
                    this._super(...arguments), this.initDataBindings(), this.initObservers()
                },
                willDestroy() {
                    this._super(...arguments), this.removeObservers(), this.removeDataBindings()
                },
                initDataBindings() {
                    this._eventHubBinding = (0, n.dataBinding)(this.get("eventHubBasePath"), n.socket)
                },
                initObservers() {
                    this._eventHubBinding.observe(this.get("eventPassPath"), this, this._handleEventPass)
                },
                removeDataBindings() {
                    this._eventHubBinding = null
                },
                removeObservers() {
                    if (this._eventHubBinding.removeObserver(this.get("eventPassPath"), this), this.get("seasonPassId")) {
                        const e = `/events/${this.get("seasonPassId")}/objectives-banner`;
                        this._eventHubBinding.removeObserver(e, this);
                        const t = `/events/${this.get("seasonPassId")}/is-grace-period`;
                        this._eventHubBinding.removeObserver(t, this)
                    }
                    if (this.get("mayhemPassId")) {
                        const e = `/events/${this.get("mayhemPassId")}/objectives-banner`;
                        this._eventHubBinding.removeObserver(e, this)
                    }
                },
                _handleEventPass(e = []) {
                    try {
                        const t = e.filter((e => e.eventInfo.eventType === a && "Default" === e.eventInfo.seasonPassSubType));
                        if (t && t.length > 0) {
                            const e = t[0].eventId,
                                s = `/events/${e}/objectives-banner`,
                                n = `/events/${e}/is-grace-period`;
                            this.set("isSeasonPassActive", !0), this.set("seasonPassId", e), this.set("isErrored", !1), this._eventHubBinding.observe(s, this, this._handleEventPassProgress), this._eventHubBinding.observe(n, this, this._handleEventPassGracePeriod)
                        }
                        const s = e.filter((e => e.eventInfo.eventType === a && "Mayhem" === e.eventInfo.seasonPassSubType));
                        if (s && s.length > 0) {
                            const e = s[0].eventId;
                            this.set("mayhemPassId", e), this._eventHubBinding.observe(`/events/${e}/objectives-banner`, this, this._handleMayhemPassProgress)
                        }
                    } catch (e) {
                        this._handleError(), n.logger.error("Error handling event pass in postgame.", e)
                    }
                },
                _handleEventPassProgress(e) {
                    e && (this.set("eventPassData", e), this.set("isTrackProgressLoading", !1))
                },
                _handleMayhemPassProgress(e) {
                    e && (this.set("mayhemEventPassData", e), this.set("isMayhemTrackProgressLoading", !1))
                },
                _validateEventPassProgress(e) {
                    const t = e?.trackProgress,
                        s = e?.trackProgressNextReward;
                    return t && s || n.logger.warning("Event pass progress is not valid", e), s && t && s?.nextReward?.name && s?.nextReward?.thumbIconPath
                },
                _handleEventPassGracePeriod(e) {
                    e && this.set("isGracePeriod", e)
                },
                _handleError() {
                    this.setProperties({
                        isTrackProgressLoading: !1,
                        isErrored: !0,
                        isMayhemTrackProgressLoading: !1
                    })
                }
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            var n = s(1),
                a = s(90);
            const o = [a.OBJECTIVES_TRACKER_TAGS.LOL_DAILY, a.OBJECTIVES_TRACKER_TAGS.LOL_WEEKLY],
                l = `/lol-objectives/v1/missions-by-tag?tags=${JSON.stringify(o)}`;
            e.exports = n.Ember.Service.extend({
                dailyObjectivesCompletions: [],
                weeklyObjectivesCompletions: [],
                isLoading: !0,
                init() {
                    this._super(...arguments), this.db = n.dataBinding.bindTo(n.socket), this.initObservers()
                },
                willDestroy() {
                    this._super(...arguments), this.removeObservers()
                },
                initObservers() {
                    this.db.observe(l, this, this._handleObjectives)
                },
                removeObservers() {
                    this.db.removeObserver(l, this)
                },
                _handleObjectives(e) {
                    try {
                        if (e) {
                            const t = this.getObjectivesCompletion(e, a.OBJECTIVES_TRACKER_TAGS.LOL_DAILY, a.MAXIMUM_DAILY_OBJECTIVES),
                                s = this.getObjectivesCompletion(e, a.OBJECTIVES_TRACKER_TAGS.LOL_WEEKLY, a.MAXIMUM_WEEKLY_OBJECTIVES);
                            this.setProperties({
                                dailyObjectivesCompletions: t,
                                weeklyObjectivesCompletions: s,
                                isLoading: !1
                            })
                        }
                    } catch (e) {
                        this._handleError(), n.logger.error("Error handling objectives in postgame.", e)
                    }
                },
                _handleError() {
                    this.set("isErrored", !0), this.set("isLoading", !1)
                },
                isCurrentMission: (e, t) => t.startTime <= e && t.endTime >= e,
                isCompleted: e => e?.status === a.MISSION_STATUS.COMPLETED,
                getObjectivesCompletion(e, t, s) {
                    const n = Date.now();
                    return Object.prototype.hasOwnProperty.call(e, t) ? e[t].missions.filter((e => this.isCurrentMission(n, e))).map((e => this.isCompleted(e))).sort().reverse().slice(0, s) : []
                }
            })
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.REWARD_STATE = t.OBJECTIVES_TRACKER_TAGS = t.MISSION_STATUS = t.MAXIMUM_WEEKLY_OBJECTIVES = t.MAXIMUM_DAILY_OBJECTIVES = t.LOL_OBJECTIVES_GAME = void 0;
            t.MISSION_STATUS = {
                COMPLETED: "COMPLETED",
                REWARD_PENDING: "REWARD_PENDING "
            };
            t.OBJECTIVES_TRACKER_TAGS = {
                LOL_DAILY: "LOL_DAILY",
                LOL_WEEKLY: "LOL_WEEKLY"
            };
            t.REWARD_STATE = {
                FREE: "FREE",
                PREMIUM: "PREMIUM",
                NONE: "NONE"
            };
            t.MAXIMUM_DAILY_OBJECTIVES = 1;
            t.MAXIMUM_WEEKLY_OBJECTIVES = 5;
            t.LOL_OBJECTIVES_GAME = "lol"
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Service.extend({
                    championMasteryUpdateNotification: null,
                    summonerBasePath: "/lol-summoner",
                    currentSummonerPath: "/v1/current-summoner",
                    endOfGameBasePath: "/lol-end-of-game",
                    endOfGameStatsBlockPath: "v1/eog-stats-block",
                    championMasteryUpdateNotificationPath: "v1/champion-mastery-updates",
                    platformConfigBasePath: "/lol-platform-config",
                    championMasteryConfigPath: "/v1/namespaces/ChampionMasteryConfig",
                    playerReportSenderBasePath: "/lol-player-report-sender",
                    gameDataPath: "/lol-game-data",
                    genericAssetPath: "/assets/v1/generic-assets.json",
                    init() {
                        this._super(...arguments), this.initDataBindings(), this.initObservers()
                    },
                    willDestroy() {
                        this.removeObservers(), this.removeDataBindings()
                    },
                    initDataBindings() {
                        this.summonerBinding = (0, n.dataBinding)(this.get("summonerBasePath"), n.socket), this.endOfGameBinding = (0, n.dataBinding)(this.get("endOfGameBasePath"), n.socket), this.platformConfigBinding = (0, n.dataBinding)(this.get("platformConfigBasePath"), n.socket), this.playerReportSenderBinding = (0, n.dataBinding)(this.get("playerReportSenderBasePath"), n.socket), this.gameDataBinding = (0, n.dataBinding)(this.get("gameDataPath"), n.socket)
                    },
                    initObservers() {
                        this.summonerBinding.observe(this.get("currentSummonerPath"), this, this.handleCurrentSummonerUpdate.bind(this)), this.endOfGameBinding.observe(this.get("championMasteryUpdateNotificationPath"), this, this.handleChampionMasteryUpdate.bind(this)), this.endOfGameBinding.observe(this.get("endOfGameStatsBlockPath"), this, this.handleEOGStatsBlockUpdate.bind(this)), this.platformConfigBinding.observe(this.get("championMasteryConfigPath"), this, this.handleChampionMasteryConfigUpdate.bind(this)), this.gameDataBinding.observe(this.get("genericAssetPath"), this, this.handleGenericAssetUpdate.bind(this))
                    },
                    removeDataBindings() {
                        this.summonerBinding = null, this.endOfGameBinding = null, this.platformConfigBinding = null, this.playerReportSenderBinding = null
                    },
                    removeObservers() {
                        this.summonerBinding.removeObserver(this.get("currentSummonerPath"), this), this.endOfGameBinding.removeObserver(this.get("championMasteryUpdateNotificationPath"), this), this.endOfGameBinding.removeObserver(this.get("endOfGameStatsBlockPath"), this), this.platformConfigBinding.removeObserver(this.get("championMasteryConfigPath"), this), this.playerReportSenderBinding.removeObserver(this, this.handleReportedPlayersUpdate), this.gameDataBinding.removeObserver(this.get("gameDataPath"), this)
                    },
                    handleChampionMasteryUpdate(e) {
                        this.set("championMasteryUpdateNotification", e)
                    },
                    handleEOGStatsBlockUpdate(e) {
                        if (this.set("eogStatsBlock", e), e && e.gameId) {
                            const t = e.gameId;
                            this.playerReportSenderBinding.observe(`/v1/reported-players/gameId/${t}`, this, this.handleReportedPlayersUpdate)
                        }
                    },
                    handleReportedPlayersUpdate(e) {
                        this.set("reportedPlayers", e)
                    },
                    handleCurrentSummonerUpdate(e) {
                        this.set("currentSummoner", e)
                    },
                    handleChampionMasteryConfigUpdate(e) {
                        this.set("championMasteryConfig", e)
                    },
                    handleGenericAssetUpdate(e) {
                        this.set("genericAsset", e)
                    },
                    playerTeam: n.Ember.computed("eogStatsBlock.teams", (function() {
                        const e = this.get("eogStatsBlock.teams");
                        return e ? e.find((e => e.isPlayerTeam)) : null
                    })),
                    player: n.Ember.computed("playerTeam", "currentSummoner.summonerId", (function() {
                        const e = this.get("playerTeam.players"),
                            t = this.get("currentSummoner.summonerId");
                        return e && t ? n.Ember.A(e).findBy("summonerId", t) : null
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(3);
            const o = {
                type: "DialogToast"
            };
            var l = n.Ember.Service.extend({
                templateHelper: n.UIKit.getTemplateHelper(),
                toastManager: n.UIKit.getToastManager(),
                modalManager: n.UIKit.getModalManager(),
                profilePlugin: n.profilePlugin,
                parties: n.Ember.inject.service(),
                init() {
                    this._super(...arguments), this.set("alreadyFriendRequestedList", []), this.binding = n.dataBinding.bindTo(n.socket), this.binding.observe("/lol-gameflow/v1/session", this, this.handleGameflowSession), this.binding.observe("/lol-chat/v1/blocked-players", this, this.handleBlockedPlayers)
                },
                handleGameflowSession(e) {
                    const t = n.Ember.get(e, "map.id");
                    this.set("currentMapId", t)
                },
                handleBlockedPlayers(e) {
                    this.set("blockedPlayersList", e || [])
                },
                showToast(e, t, s) {
                    const n = Object.assign({}, o, s);
                    return n.data = {
                        contents: this.templateHelper.contentBlockNotification(e, t)
                    }, this.toastManager.add(n)
                },
                showFriendRequestSuccessToast() {
                    const e = this.get("tra.postgame_friend_request_sent");
                    return this.showToast(e, "postgame-friend-request-toast", {
                        timing: "fast"
                    })
                },
                showFriendRequestFailToast(e) {
                    const t = e.includes(a.FULL_LIST_ERROR) ? this.get("tra.postgame_friend_request_error_self_full") : this.get("tra.postgame_friend_request_error");
                    return this.showToast(t, "postgame-friend-request-toast-error", {})
                },
                showConfirmDialog(e) {
                    const {
                        title: t,
                        body: s,
                        className: n,
                        acceptText: a,
                        declineText: o
                    } = e, l = this.templateHelper.contentBlockDialog(t, s, "dialog-medium", n);
                    return this.modalManager.add({
                        type: "DialogConfirm",
                        data: {
                            contents: l,
                            acceptText: a,
                            declineText: o,
                            closeButton: !1
                        }
                    })
                },
                _showAddBlockedFriendDialog: function(e, t, s) {
                    this.showConfirmDialog({
                        title: this.get("tra.postgame_add_blocked_friend_title"),
                        body: this.get("tra").formatString("postgame_add_blocked_friend_description", {
                            name: `${e}#${t}`
                        }),
                        className: "confirm-blocked-friend-actions",
                        acceptText: this.get("tra.postgame_add_blocked_friend_confirm"),
                        declineText: this.get("tra.postgame_add_blocked_friend_cancel")
                    }).acceptPromise.then((() => {
                        this._unblockAndAddFriend(e, t, s)
                    })).catch((() => {}))
                },
                _unblockAndAddFriend: function(e, t, s) {
                    return (0, n.dataBinding)("/lol-chat").get("/v1/blocked-players").then((a => {
                        const o = a.find((e => e.puuid === s));
                        o ? (0, n.dataBinding)("/lol-chat").delete(`/v1/blocked-players/${encodeURIComponent(o.id)}`).then((() => {
                            this.sendFriendRequest(e, t, s)
                        })) : this.sendFriendRequest(e, t, s)
                    }))
                },
                importItemSet: function(e) {
                    const t = e.championName,
                        s = e.championId,
                        a = {
                            source: "eog",
                            items: (e.items || []).slice(),
                            name: this.get("tra").formatString("postgame_item_sets_import_name", {
                                champion: t,
                                summoner: e?.displayName?.playerNameFull
                            }),
                            maps: [this.get("currentMapId")],
                            champions: [s]
                        };
                    (0, n.getProvider)().getOptional("rcp-fe-lol-collections").then((e => e.getItemSetsApi().saveItemSet(a)), (e => n.logger.error("Provider getOptional failure", e)))
                },
                inviteToParty: function(e) {
                    e && this.get("parties").invitePlayerToParty(e)
                },
                sendFriendRequest: function(e, t, s) {
                    const a = {
                        direction: "out",
                        puuid: s
                    };
                    return n.datadogRum.startOperation(n.datadogRum.XP_SOCIAL_FRIEND_REQUEST_SEND, {
                        source: "postgame"
                    }), (0, n.dataBinding)("/lol-chat").post("/v2/friend-requests", a).then((() => {
                        n.datadogRum.stopOperationWithOk(n.datadogRum.XP_SOCIAL_FRIEND_REQUEST_SEND, {
                            source: "postgame"
                        });
                        const e = this.get("alreadyFriendRequestedList").slice();
                        e.push(s), this.set("alreadyFriendRequestedList", e), this.showFriendRequestSuccessToast()
                    })).catch((a => {
                        if (405 === a.status) this._showAddBlockedFriendDialog(e, t, s);
                        else {
                            const e = this.getAddFriendErrorTranslationKey(a);
                            "roster_invite_system_message_server_error" === e ? (n.datadogRum.stopOperationWithError(n.datadogRum.XP_SOCIAL_FRIEND_REQUEST_SEND, a, {
                                source: "postgame",
                                status: a?.status,
                                reason: e
                            }), n.logger.error(`Failed to add friend from postgame with error: ${JSON.stringify(a)}`)) : (n.datadogRum.stopOperationWithAbort(n.datadogRum.XP_SOCIAL_FRIEND_REQUEST_SEND, {
                                source: "postgame",
                                status: a?.status,
                                reason: e
                            }), n.logger.warning(`Failed to add friend from postgame with warning: ${JSON.stringify(a)}`));
                            const t = a.data.message;
                            this.showFriendRequestFailToast(t)
                        }
                    }))
                },
                confirmBlockPlayer(e, t, s) {
                    const a = this.templateHelper.contentBlockDialog(this.get("tra.postgame_roster_confirm_block_title"), this.get("tra").formatString("postgame_roster_confirm_block_text", {
                            name: `${e}#${t}`
                        }), "dialog-medium", "confirm-friend-actions"),
                        o = this.modalManager.add({
                            type: "DialogConfirm",
                            data: {
                                contents: a,
                                acceptText: this.get("tra.postgame_roster_confirm_block"),
                                declineText: this.get("tra.postgame_roster_confirm_cancel"),
                                closeButton: !1
                            }
                        }),
                        l = o.domNode.querySelector(".confirm-friend-actions");
                    l.style.width = "360px", l.querySelector("p").style.textAlign = "left", o.acceptPromise.then((() => {
                        (0, n.dataBinding)("/lol-chat").post("/v1/blocked-players", {
                            summonerId: s
                        })
                    })).catch((() => {}))
                },
                viewProfile(e) {
                    this.profilePlugin.showOverlay({
                        summonerId: e
                    })
                },
                getAddFriendErrorTranslationKey(e) {
                    const t = e.data?.error;
                    let s;
                    switch (e.status) {
                        case 400:
                            s = "invalid-name" === t ? "roster_invite_system_message_invalid_summoner_name" : "name-too-short" === t ? "roster_invite_system_message_name_too_short" : "roster_invite_system_message_server_error";
                            break;
                        case 403:
                            s = "roster_invite_system_message_cannot_invite_self";
                            break;
                        case 404:
                            s = "roster_invite_system_message_summoner_not_found";
                            break;
                        case 405:
                            s = "roster_invite_system_message_buddy_blocked";
                            break;
                        case 409:
                            s = "already-on-roster" === t ? "roster_invite_system_message_buddy_already_on_roster" : "blocked" === t ? "roster_invite_system_message_buddy_blocked" : "this-invite" === t ? "roster_invite_system_message_cannot_invite_self" : "max-invitee-buddy-invites" === t ? "roster_invite_system_message_target_maximum_pending_invites" : "max-inviter-buddy-invites" === t ? "roster_invite_system_message_self_maximum_pending_invites" : "invitee-roster-full" === t ? "roster_invite_system_message_target_roster_full" : "roster_invite_system_message_server_error";
                            break;
                        case 500: {
                            const {
                                message: n
                            } = e.data;
                            s = n?.indexOf("max_roster_size_sender") >= 0 || t?.indexOf("max_roster_size_sender") >= 0 ? "roster_invite_system_message_self_roster_full" : n?.indexOf("max_outgoing_invites") >= 0 || t?.indexOf("max_outgoing_invites") >= 0 ? "roster_invite_system_message_outgoing_invites_full" : "roster_invite_system_message_server_error";
                            break
                        }
                        default:
                            s = "roster_invite_system_message_server_error"
                    }
                    return s
                }
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Service.extend({
                    tftSkillTreeBasePath: "/lol-tft-skill-tree",
                    tftSkillTreeDataPath: "/v1/skill-tree",
                    tftBasePath: "/lol-tft",
                    tftEventsDataPath: "/v1/tft/events",
                    tftClientConfigBasePath: "/lol-client-config",
                    tftSkillTreeConfigEnabledPath: "/v3/client-config/lol.client_settings.tft_skill_tree_enabled",
                    skillTreeEnabled: !1,
                    tftEventUrlFaq: "",
                    init() {
                        this._super(...arguments), this.initDataBindings(), this.initObservers()
                    },
                    willDestroy() {
                        this.removeObservers(), this.removeDataBindings()
                    },
                    initDataBindings() {
                        this.tftSkillTreeBinding = (0, n.dataBinding)(this.get("tftSkillTreeBasePath"), n.socket), this.tftClientConfigBinding = (0, n.dataBinding)(this.get("tftClientConfigBasePath"), n.socket), this.tftBinding = (0, n.dataBinding)(this.get("tftBasePath"), n.socket)
                    },
                    initObservers() {
                        this.tftClientConfigBinding.observe(this.get("tftSkillTreeConfigEnabledPath"), this, (e => {
                            e && (this.set("skillTreeEnabled", !0), this.tftSkillTreeBinding.observe(this.get("tftSkillTreeDataPath"), this, this.handleSkillTreeDataUpdate.bind(this)))
                        })), this.tftBinding.observe(this.get("tftEventsDataPath"), this, (e => {
                            const t = e?.subNavTabs;
                            Array.isArray(t) && t.length > 0 && this.set("tftEventUrlFaq", t[0]?.urlFaq || "")
                        }))
                    },
                    removeDataBindings() {
                        this.tftSkillTreeBinding = null, this.tftClientConfigBinding = null, this.tftBinding = null
                    },
                    removeObservers() {
                        this.tftSkillTreeBinding.removeObserver(this.get("tftSkillTreeBasePath"), this), this.tftClientConfigBinding.removeObserver(this.get("tftClientConfigBasePath"), this), this.tftBinding.removeObserver(this.get("tftBasePath"), this)
                    },
                    handleSkillTreeDataUpdate(e) {
                        this._mapSkillIdToSkill(e), this.set("skillTreeData", e)
                    },
                    getScoreboardPlacementText(e) {
                        return e ? this.get(`tra.tft_skill_tree_scoreboard_placement_${e}`) : ""
                    },
                    _mapSkillIdToSkill(e) {
                        const t = [],
                            s = e.eventSkillTree.ranks;
                        for (let e = 0; e < s.length; ++e) {
                            const n = s[e].skills;
                            for (let s = 0; s < n.length; ++s) t.push({
                                id: n[s].itemId,
                                skill: n[s],
                                rank: e + 1
                            })
                        }
                        this.set("skillIdLookUpData", t)
                    },
                    getSkillFromSkillId(e) {
                        const t = this.get("skillIdLookUpData").find((t => t.id === e));
                        return t ? t.skill : null
                    },
                    getRankIndexFromSkillId(e) {
                        const t = this.get("skillIdLookUpData").find((t => t.id === e));
                        return t ? t.rank : null
                    },
                    getRankDivisionFromEventPoint(e) {
                        const t = this.get("skillTreeData").eventSkillTree.ranks;
                        let s = 0,
                            n = 1;
                        for (let a = 0; a < t.length; ++a) {
                            const o = t[a].totalEventPointsForRank;
                            if (!(e > o)) {
                                const s = o / t[a].numDivisions;
                                for (; e > s;) e -= s, ++n;
                                break
                            }
                            e -= o, ++s
                        }
                        return {
                            rank: s,
                            division: n
                        }
                    }
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = "/fe/lol-tft-promethium/audio/mus-pm-hub-base.ogg",
                o = "/fe/lol-tft-promethium/audio/sfx-pm-hub-amb-01.ogg",
                l = "/fe/lol-tft-promethium/audio/sfx-pm-hub-amb-02.ogg",
                i = "/fe/lol-tft-promethium/audio/sfx-pm-hub-amb-03.ogg",
                r = {
                    Locked: "kLocked",
                    Unseen: "kUnseenUnlocked",
                    Unlocked: "kUnlocked",
                    Cleared: "kCleared",
                    Error: "kError"
                },
                m = Object.values(r),
                c = "music",
                d = "music-ambience";

            function p(e) {
                const t = n.Audio.getChannel(d).createSound(e, {
                    isLoop: !0
                });
                return t.play(), t
            }
            var u = n.Ember.Service.extend({
                isPromethiumEnabled: !1,
                promethiumData: null,
                journeyTrack: null,
                journeyTrackLevel: null,
                levels: null,
                audioMusic: null,
                audioAmbience: null,
                gameclientPostgame: n.Ember.inject.service(),
                gameflow: n.Ember.inject.service(),
                activeMilestone: n.Ember.computed.alias("journeyTrack.activeMilestone"),
                milestones: n.Ember.computed.alias("journeyTrack.milestones"),
                pveEoGMissionRewards: null,
                init() {
                    this._super(...arguments);
                    n.db.observe("/lol-client-config/v3/client-config/lol.client_settings.tft.tft_events", this, (e => {
                        const t = e?.subNavTabs,
                            s = t?.find((e => "Promethium" === e.eventId)),
                            n = s?.enabled ?? !1;
                        this.set("isPromethiumEnabled", n), n && this._initDataBindings()
                    }))
                },
                _initDataBindings() {
                    n.db.observe("/lol-tft-event-pve/v1/eventpvehub", this, (e => {
                        if (!e) return;
                        let t = e?.levels ?? [];
                        t.length && (t = t.map((e => ({
                            ...e,
                            status: this._getLevelStatus(e?.status)
                        })))), this.set("levels", t)
                    }));
                    n.db.observe("/lol-tft-event-pve/v1/journeytrack/bonuses", this, this.handleSkillTreeDataUpdate.bind(this));
                    n.db.observe("/lol-tft-event-pve/v1/eogmissionrewards", this, (e => {
                        this.set("pveEoGMissionRewards", e)
                    }));
                    n.db.observe("/lol-tft-pass/v1/event-pass", this, (e => {
                        if (!e) return;
                        this.set("journeyTrack", e);
                        const t = this.get("journeyTrack").milestones.at(-1).level;
                        this.get("journeyTrack.currentLevel") >= t ? this.set("journeyTrackLevel", t) : this.set("journeyTrackLevel", this.get("journeyTrack.currentLevel"))
                    }))
                },
                pointsEarnedForMilestone: n.Ember.computed.alias("activeMilestone.pointsEarnedForMilestone"),
                pointsNeededForMilestone: n.Ember.computed.alias("activeMilestone.pointsNeededForMilestone"),
                handleSkillTreeDataUpdate(e) {
                    this.set("promethiumData", e)
                },
                activeMilestoneProgressPercentage: n.Ember.computed("activeMilestone", (function() {
                    if (!this.get("activeMilestone")) return;
                    return this.get("activeMilestone.pointsEarnedForMilestone") / this.get("activeMilestone.pointsNeededForMilestone")
                })),
                xpEarned: n.Ember.computed("gameclientPostgame.skillTreeEoG.eventSkillToScore", "pveEoGMissionRewards", (function() {
                    const e = this.get("gameclientPostgame.skillTreeEoG.eventSkillToScore");
                    let t = 0;
                    for (let s = 0; s < e.length; ++s) t += e[s].score;
                    const s = this.get("pveEoGMissionRewards") || [];
                    for (const e of s) "PROGRESSION" === e.type && (t += e.quantity);
                    return t
                })),
                journeyTrackUnlocks: n.Ember.computed("journeyTrack", "xpEarned", "milestones", (function() {
                    const e = [],
                        t = this.get("xpEarned");
                    if (!t) return e;
                    const s = this.get("pointsNeededForMilestone") || 1e3,
                        n = this.get("milestones"),
                        a = this.get("journeyTrack");
                    if (!a || !n) return e;
                    const o = (n?.length ?? 0) - 1,
                        l = o * s,
                        i = a.totalPointsEarned,
                        r = Math.abs(a.totalPointsEarned - t) % s;
                    let m = Math.trunc((t + r) / s);
                    if (i - t >= l) m = 0;
                    else if (i > l && t) {
                        const e = Math.abs(i - l),
                            n = Math.abs(t - e);
                        m = Math.trunc((n + r) / s)
                    }
                    const c = a.currentLevel;
                    if (c && o && c === o && !m) return e;
                    let d = c - m;
                    if (0 === d || d < 0) {
                        d = 1;
                        for (let t = d; t <= c; t++) {
                            const s = {
                                level: t,
                                title: n[t].title
                            };
                            e.push(s)
                        }
                    } else if (1 === m) {
                        const t = {
                            level: c,
                            title: n[c].title
                        };
                        e.push(t)
                    } else if (m > 0)
                        for (let t = d + 1; t <= c; t++) {
                            const s = {
                                level: t,
                                title: n[t].title
                            };
                            e.push(s)
                        }
                    return e
                })),
                hasJourneyTrackUnlocks: n.Ember.computed.bool("journeyTrackUnlocks.length"),
                playBackgroundAudio() {
                    const e = this.get("levels");
                    if (!e?.length) return;
                    this.stopBackgroundAudio();
                    const t = e.findIndex((e => 4 === e.difficultyLevel));
                    let s;
                    switch (e[t || 0].status) {
                        case r.Cleared:
                            s = p(i);
                            break;
                        case r.Unlocked:
                            s = p(l);
                            break;
                        case r.Locked:
                            s = p(o)
                    }
                    const m = function(e) {
                        const t = n.Audio.getChannel(c).createSound(e, {
                            isLoop: !0
                        });
                        return t.play(), t
                    }(a);
                    this.setProperties({
                        audioAmbience: s,
                        audioMusic: m
                    })
                },
                stopBackgroundAudio() {
                    const e = this.get("audioMusic");
                    e?.isPlaying() && e.stop();
                    const t = this.get("audioAmbience");
                    t?.isPlaying() && t.stop()
                },
                _getLevelStatus: e => "string" == typeof e ? e : m?.[e] ?? r.Error,
                willDestroyElement() {
                    this._super(...arguments), this.stopBackgroundAudio()
                },
                isfirstCompletionLevelMission: n.Ember.computed("pveEoGMissionRewards", (function() {
                    const e = this.get("pveEoGMissionRewards");
                    if (!e) return !1;
                    for (const t of e)
                        if (t.firstCompletionLevelMission) return !0;
                    return !1
                })),
                isPromethiumQueue: n.Ember.computed("gameflow", (function() {
                    return 6130 === this.get("gameflow.queue.id")
                }))
            });
            t.default = u
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "WCaJ+e4o",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\application.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-application"],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "anhh9rsG",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\postgame.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["if"],[["get",["isPostgameReady"]]],null,22,17]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","skip-waiting-for-ranked-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"skipWaitingForRanked"],null],null],["flush-element"],["text","\\n            "],["append",["unknown",["tra","postgame_skip_waiting_for_ranked"]],false],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["render-timer"],null,[["renderAfterMs","buttonRenderedName"],[["get",["skipWaitingForRankedWaitMs"]],"skipWaitingForRanked"]],0],["text","      "]],"locals":[]},{"statements":[["block",["if"],[["get",["isWaitingForRanked"]]],null,1]],"locals":[]},{"statements":[["text","          "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","skip-waiting-for-missions-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"skipWaitingForMissions"],null],null],["flush-element"],["text","\\n            "],["append",["unknown",["tra","postgame_skip_waiting_for_missions"]],false],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["render-timer"],null,[["renderAfterMs","buttonRenderedName"],[["get",["skipWaitingForMissionsWaitMs"]],"skipWaitingForMissions"]],3]],"locals":[]},{"statements":[["block",["if"],[["get",["isWaitingForMissions"]]],null,4,2]],"locals":[]},{"statements":[["text","          "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","skip-waiting-for-challenges-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"skipWaitingForChallenges"],null],null],["flush-element"],["text","\\n            "],["append",["unknown",["tra","postgame_skip_waiting_for_challenges"]],false],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["render-timer"],null,[["renderAfterMs","buttonRenderedName"],[["get",["skipWaitingForChallengesWaitMs"]],"skipWaitingForChallenges"]],6]],"locals":[]},{"statements":[["block",["if"],[["get",["isWaitingForChallenges"]]],null,7,5]],"locals":[]},{"statements":[["text","          "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","skip-waiting-for-honor-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"skipWaitingForHonor"],null],null],["flush-element"],["text","\\n            "],["append",["unknown",["tra","postgame_skip_waiting_for_honor"]],false],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["render-timer"],null,[["renderAfterMs","buttonRenderedName"],[["get",["skipWaitingForHonorWaitMs"]],"skipWaitingForHonor"]],9]],"locals":[]},{"statements":[["block",["if"],[["get",["isWaitingForHonor"]]],null,10,8]],"locals":[]},{"statements":[["text","          "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","skip-waiting-for-stats-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"skipWaitingForStats"],null],null],["flush-element"],["text","\\n            "],["append",["unknown",["tra","postgame_skip_waiting_for_stats"]],false],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["render-timer"],null,[["renderAfterMs","buttonRenderedName"],[["get",["skipWaitingForStatsWaitMs"]],"skipWaitingForStats"]],12]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","postgame-waiting-for-stats-container"],["flush-element"],["text","\\n    "],["append",["unknown",["hextech-loading-animation"]],false],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-skip-waiting-for-stats-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isWaitingForStats"]]],null,13,11],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["extEmberModel","isPostgameShowing"]]],null,14]],"locals":[]},{"statements":[["text","  "],["append",["unknown",["honor-voting-ceremony"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isHonorShowing"]]],null,16,15]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-background-image"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["backgroundImgPath"]],")"]]],["flush-element"],["close-element"],["text","\\n    "],["append",["unknown",["postgame-common"]],false],["text","\\n  "]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-background-image"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["backgroundImgPathDark"]],")"]]],["flush-element"],["close-element"],["text","\\n    "],["append",["helper",["component"],[["get",["postgameComponent"]]],null],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["showPostgameV2"]]],null,19,18]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-background-image"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["backgroundImgPathDark"]],")"]]],["flush-element"],["close-element"],["text","\\n    "],["append",["unknown",["strawberry-postgame-root"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["gameflow","isStrawberry"]]],null,21,20]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "0CMZSI5h",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-common.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-common.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-common.js\\" "],["text","\\n"],["block",["if"],[["get",["extEmberModel","isPostgameShowing"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","postgame-chat-box"],["flush-element"],["text","\\n        "],["open-element","lol-social-chat-room",[]],["static-attr","type","postGame"],["dynamic-attr","room-changed-messages",["unknown",["roomChangedMessages"]],null],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","postgame-content"],["flush-element"],["text","\\n    "],["append",["helper",["postgame-scoreboard"],null,[["leavePostgame"],["leavePostgame"]]],false],["text","\\n\\n"],["block",["if"],[["get",["isLocalPlayerInGame"]]],null,0],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "nWv13JPR",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-header.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-header.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-header.js\\" "],["text","\\n"],["append",["helper",["postgame-game-result-icon"],null,[["isLeaver","isVictory","isLossForgiven"],[["get",["isLeaver"]],["get",["isVictory"]],["get",["isLossForgiven"]]]]],false],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-header-wrapper"],["flush-element"],["text","\\n  "],["append",["helper",["postgame-game-result"],null,[["isLeaver","isVictory","isLossForgiven","isDefeat","isURFDefeat"],[["get",["isLeaver"]],["get",["isVictory"]],["get",["isLossForgiven"]],["get",["isDefeat"]],["get",["isURFDefeat"]]]]],false],["text","\\n  "],["append",["helper",["postgame-game-info"],null,[["gameId"],[["get",["gameId"]]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "9pquGrQr",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-game-info.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-game-info.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-game-info.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-map-info"],["flush-element"],["text","\\n"],["block",["if"],[["get",["displayedMapName"]]],null,1],["text","  "],["open-element","div",[]],["static-attr","class","postgame-map-info-item-game-mode"],["flush-element"],["append",["unknown",["queueDescription"]],false],["close-element"],["text","\\n"],["block",["if"],[["get",["postgame","isLocalPlayerInGame"]]],null,0],["text","  "],["open-element","div",[]],["static-attr","class","postgame-map-info-item-game-length"],["flush-element"],["append",["unknown",["gameLength"]],false],["close-element"],["text","\\n  "],["append",["helper",["game-id-clipboard-copy"],null,[["gameId"],[["get",["gameId"]]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-map-info-item-win-loss"],["flush-element"],["append",["unknown",["playerWinLoss"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-map-info-item-game-map-name"],["flush-element"],["append",["unknown",["displayedMapName"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "CbzMu0uP",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-game-result.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-game-result.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-game-result.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-outcome"],["flush-element"],["text","\\n"],["block",["if"],[["get",["rankedInfoTagline"]]],null,20,19],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["shouldShowPlacements"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","postgame-game-result-placement-games"],["flush-element"],["append",["unknown",["placementGamesString"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_defeat"]],false],["text","\\n  "]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_defeat_urf"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isURFDefeat"]]],null,2,1]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_victory"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isVictory"]]],null,4,3]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["subteamPlacementString"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isGameModeWithSubteams"]]],null,6,5]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_leaver"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isLeaver"]]],null,8,7]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_remake"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isEarlySurrenderBystander"]]],null,10,9]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_remake_restricted"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isEarlySurrenderAccomplice"]]],null,12,11]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_remake_leaver"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isEarlySurrenderCauser"]]],null,14,13]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_loss_forgiven"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isLossForgiven"]]],null,16,15]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["tra","postgame_progress_disruptive_behavior_terminated"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isDisruptiveBehaviorTerminated"]]],null,18,17]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["rankedInfoTagline"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "baNqLUdF",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-game-result-icon.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-game-result-icon.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-game-result-icon.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-map-icon"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["icon"]],");"]]],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "OX8E0bWr",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard.js\\" "],["text","\\n"],["block",["if"],[["get",["isTftPromethiumPostgame"]]],null,28,27],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-scoreboard-header"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isTFT"]]],null,25,24],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","postgame-scoreboard-body"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showTftPromethiumRunSummary"]]],null,21,20],["text","\\n"],["block",["unless"],[["get",["isSkillTreeOrPromethiumPostgame"]]],null,11],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["showTftPromethiumRunSummary"]]],null,7,6]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","skill-tree-button-container"],["flush-element"],["text","\\n      "],["open-element","button",[]],["static-attr","class","skill-tree-button"],["dynamic-attr","onmouseover",["helper",["action"],[["get",[null]],"skillTreeShortcutOnHover"],null],null],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"overrideTftLandingPage","event-page"],null],null],["dynamic-attr","style",["concat",["--skill-tree-shortcut-button-default: url(\'",["unknown",["tftSkilltreeAssets","skill-tree-shortcut-button-default"]],"\');\\n              --skill-tree-shortcut-button-hover: url(\'",["unknown",["tftSkilltreeAssets","skill-tree-shortcut-button-hover"]],"\');\\n              --skill-tree-shortcut-button-pressed: url(\'",["unknown",["tftSkilltreeAssets","skill-tree-shortcut-button-pressed"]],"\');\\n              --skill-tree-shortcut-button-icon: url(\'",["unknown",["tftSkilltreeAssets","skill-tree-shortcut-button-icon"]],"\');\\n              --skill-tree-shortcut-button-backer: url(\'",["unknown",["tftSkilltreeAssets","skill-tree-shortcut-button-backer"]],"\');"]]],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","event-icon"],["flush-element"],["close-element"],["text","\\n        "],["open-element","span",[]],["static-attr","class","event-text"],["flush-element"],["append",["unknown",["tra","tft_skill_tree_shortcut_button"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","arrow-icon"],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","postgame-team-planner-button-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","postgame-team-planner-button"],["flush-element"],["text","\\n          "],["append",["helper",["generic-button"],null,[["onClick","baseBgPath","overBgPath","downBgPath","disabledBgPath","baseImgPath","downImgPath","disabledImgPath","onClickSound","onHoverSound"],[["helper",["action"],[["get",[null]],"showTeamPlanner"],null],"/fe/lol-parties/button-bg.png","/fe/lol-parties/button-bg-over.png","/fe/lol-parties/button-bg-down.png","/fe/lol-parties/button-bg-disabled.png",["get",["teamPlannerButtonAssets","team-planner-icon-lobby"]],["get",["teamPlannerButtonAssets","team-planner-icon-clicked"]],["get",["teamPlannerButtonAssets","team-planner-icon-disabled"]],["get",["buttonSounds","teamPlannerClick"]],["get",["buttonSounds","teamPlannerHover"]]]]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["tft-persistent-tooltip"],null,[["tooltipText","tooltipOffsetY","tooltipStyle","hideWhenTeamPlannerVisible"],[["get",["unsupportedGameModeTooltipText"]],-15,"compact",true]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isUnsupportedGameMode"]]],null,2]],"locals":[]},{"statements":[["text","  "],["append",["unknown",["postgame-party-status"]],false],["text","\\n  "],["open-element","div",[]],["static-attr","class","footer-buttons-container"],["flush-element"],["text","\\n"],["block",["arrow-footer"],null,[["confirmButtonDisabled","closeButtonDisabled","confirmButtonText","closeButtonText","closeButtonHoverSound","closeButtonClickSound","confirmButtonHoverSound","confirmButtonClickSound","closeButtonType","confirmButtonClicked","closeButtonClicked"],[["get",["isPlayAgainDisabled"]],["get",["isFooterDisabled"]],["get",["confirmButtonText"]],["get",["closeButtonText"]],"/fe/lol-postgame/sfx-uikit-button-gold-hover.ogg","/fe/lol-postgame/sfx-uikit-button-gold-click.ogg","/fe/lol-postgame/sfx-nav-button-play-hover.ogg","/fe/lol-postgame/sfx-nav-button-play-click.ogg","close","playAgain","goToHome"]],3],["text","\\n"],["block",["if"],[["get",["showTeamPlannerButton"]]],null,1],["text","  "],["close-element"],["text","\\n"],["block",["if"],[["get",["isTftSkillTreePostgame"]]],null,0]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","tft-skilltree-footer"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","continue-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"hideSkillTreeBonusScore"],null],null],["flush-element"],["append",["unknown",["tra","career_postgame_button_continue"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["showTftSkillTreeBonusScore"]]],null,5,4]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","tft-promethium-footer"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","continue-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"hidePromethiumRunSummary"],null],null],["flush-element"],["append",["unknown",["tra","career_postgame_button_continue"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["postgame-scoreboard-progression"]],false],["text","\\n    "]],"locals":[]},{"statements":[["block",["if"],[["get",["gameclientPostgame","isLocalPlayerInGame"]]],null,8]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["postgame-scoreboard-progression"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isLocalPlayerInGame"]]],null,10,9]],"locals":[]},{"statements":[["text","          "],["append",["helper",["tft-player"],null,[["player","showPlacementBanner","isPlaybookEnabled","numberOfUnitsToShow"],[["get",["player"]],["helper",["if"],[["get",["hasPartnerGroups"]],false,true],null],["get",["isPlaybookEnabled"]],["helper",["if"],[["get",["isTftSkillTreePostgame"]],9,11],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["helper",["tft-player"],null,[["player","showPlacementBanner","isPlaybookEnabled","promethiumData","numberOfUnitsToShow"],[["get",["player"]],["helper",["if"],[["get",["hasPartnerGroups"]],false,true],null],["get",["isPlaybookEnabled"]],["get",["promethiumData"]],["helper",["if"],[["get",["isTftSkillTreePostgame"]],9,11],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["player","isLocalPlayer"]]],null,13]],"locals":[]},{"statements":[["block",["if"],[["get",["isTftPromethiumPostgame"]]],null,14,12]],"locals":["player"]},{"statements":[["text","            "],["append",["helper",["tft-partner-group-placement"],null,[["partnerGroup","placement"],[["get",["partnerGroup"]],["get",["index"]]]]],false],["text","\\n"]],"locals":["partnerGroup","index"]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","postgame-tft-partner-group-placements"],["flush-element"],["text","\\n"],["block",["each"],[["get",["tftPartnerGroupsByPlacement"]]],null,16],["text","        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-tft-players"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","postgame-tft-player tft-player-header-row"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","tft-player-left-column"],["flush-element"],["text","\\n          "],["open-element","h3",[]],["flush-element"],["append",["unknown",["tra","postgame_scoreboard_tft_header_placement_shortened"]],false],["close-element"],["text","\\n          "],["open-element","h3",[]],["flush-element"],["append",["unknown",["tra","postgame_scoreboard_tft_header_player"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["if"],[["get",["hasPartnerGroups"]]],null,17],["block",["each"],[["get",["tftPlayers"]]],null,15],["text","    "],["close-element"],["text","\\n  "]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","tft-skilltree-scoreboard"],["flush-element"],["text","\\n      "],["append",["unknown",["tft-skilltree-scoreboard"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["showTftSkillTreeBonusScore"]]],null,19,18]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","tft-promethium-scoreboard"],["flush-element"],["text","\\n      "],["append",["unknown",["tft-promethium-scoreboard"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","postgame-match-history-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"displayAdvancedDetails"],null],null],["flush-element"],["text","\\n          "],["append",["unknown",["tra","postgame_scoreboard_view_advanced_details"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["unknown",["postgame-scoreboard-replay-button"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["postgame-header"],null,[["gameId"],[["get",["gameId"]]]]],false],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-scoreboard-header-button-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["postgame","isLocalPlayerInGame"]]],null,23],["block",["unless"],[["get",["isDetailsTabOpen"]]],null,22],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["tft-header"],null,[["gameId"],[["get",["gameId"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["append",["unknown",["tft-skilltree-progression"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isTftSkillTreePostgame"]]],null,26]],"locals":[]},{"statements":[["text","  "],["append",["unknown",["tft-promethium-progression"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "0GIXobK9",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-player-augment.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-player-augment.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-player-augment.js\\" "],["text","\\n"],["block",["if"],[["get",["augmentId"]]],null,3]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["append",["unknown",["augmentData","nameTRA"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["append",["unknown",["augmentData","simpleNameTRA"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n"],["block",["if"],[["get",["augmentData","simpleNameTRA"]]],null,1,0],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","postgame-player-augment"],["dynamic-attr","style",["concat",["-webkit-mask-image: url(",["unknown",["augmentData","augmentSmallIconPath"]],");"]]],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["top"]],2]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "x9YaOxg4",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-player-keystone-icon.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-player-keystone-icon.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-player-keystone-icon.js\\" "],["text","\\n"],["block",["if"],[["get",["circleIconHolder"]]],null,4,3],["text","\\n"],["block",["uikit-tooltip"],null,[["targetAnchorX","targetAnchorY","tooltipAnchorX","tooltipAnchorY","offsetX","offsetY","restrictArea"],["left","bottom","left","top",-18,5,"whole-window"]],2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","postgame-player-keystone-icon-description"],["flush-element"],["append",["helper",["sanitize"],[["get",["keystone","shortDesc"]]],[["config"],[["get",["sanitizeConfig"]]]]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","postgame-player-keystone-icon-description"],["flush-element"],["append",["helper",["sanitize"],[["get",["keystone","tooltip"]]],[["config"],[["get",["sanitizeConfig"]]]]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","postgame-player-keystone-icon-tooltip"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-player-keystone-icon-tooltip-header"],["flush-element"],["text","\\n      "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["keystone","iconPath"]]]]],["static-attr","class","postgame-player-keystone-icon-tooltip-icon"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","postgame-player-keystone-icon-tooltip-name"],["flush-element"],["append",["helper",["sanitize"],[["get",["keystone","name"]]],[["config"],[["get",["sanitizeConfig"]]]]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["isSubStyle"]]],null,1,0],["text","  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["keystone","iconPath"]]]]],["static-attr","class","postgame-player-keystone-icon-img"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["keystone","iconPath"]]]]],["static-attr","class","postgame-player-keystone-icon-img"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "WnG7eALw",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-player-buttons.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-player-buttons.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-player-buttons.js\\" "],["text","\\n"],["block",["unless"],[["get",["isFriendingRestricted"]]],null,4],["text","\\n"],["block",["if"],[["get",["showInviteButton"]]],null,2],["text","\\n"],["open-element","button",[]],["static-attr","class","postgame-player-button-report"],["dynamic-attr","disabled",["unknown",["isReportDisabled"]],null],["modifier",["action"],[["get",[null]],"showReportDialog",["get",["player"]]]],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition","disabled"],["system","top",["get",["isReportDisabled"]]]],0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","postgame-player-button-tooltip"],["flush-element"],["text","\\n      "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","postgame_scorecard_harassment_report_player"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","postgame-player-button-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","postgame_scorecard_invite_to_party"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","button",[]],["static-attr","class","postgame-player-invite-to-party"],["dynamic-attr","disabled",["unknown",["isInviteDisabled"]],null],["modifier",["action"],[["get",[null]],"inviteToParty",["get",["player"]]]],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition","disabled"],["system","top",["get",["isInviteDisabled"]]]],1],["text","  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","postgame-player-button-tooltip"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","postgame_scoreboard_add_friend"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","button",[]],["static-attr","class","postgame-player-button-add-friend"],["dynamic-attr","disabled",["unknown",["isFriendRequestDisabled"]],null],["modifier",["action"],[["get",[null]],"sendFriendRequest",["get",["player"]]]],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition","disabled"],["system","top",["get",["isFriendRequestDisabled"]]]],3],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "QarhWRCJ",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-player-item.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-player-item.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-player-item.js\\" "],["text","\\n"],["block",["if"],[["get",["itemId"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-player-item-tooltip"],["flush-element"],["text","\\n\\n      "],["open-element","div",[]],["static-attr","class","postgame-player-item-tooltip-header"],["flush-element"],["text","\\n        "],["open-element","img",[]],["static-attr","class","postgame-player-item-tooltip-icon"],["dynamic-attr","src",["concat",[["unknown",["itemData","iconPath"]]]]],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-player-item-tooltip-name"],["flush-element"],["append",["unknown",["itemData","name"]],false],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-player-item-tooltip-price"],["flush-element"],["append",["unknown",["itemData","priceTotal"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","div",[]],["static-attr","class","postgame-player-item-tooltip-description"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-game-data-markup",[]],["static-attr","type","item"],["dynamic-attr","markup",["concat",[["unknown",["itemData","description"]]]]],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition"],["right"]],0]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "rtA1J/Rw",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-progression.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-progression.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-progression.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","progression-body"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","progression-scroll-container"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","disabled"],["static-attr","class","progression-components"],["flush-element"],["text","\\n"],["block",["each"],[["get",["scrollableComponents"]]],null,1],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["fixedComponents"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["helper",["component"],[["get",["fixedComponent","componentName"]]],[["sharedData","previousAnimationPromise","resolveAnimationPromise"],[["get",["componentSharedData"]],["get",["fixedComponent","previousAnimationPromise"]],["get",["fixedComponent","resolveAnimationPromise"]]]]],false],["text","\\n"]],"locals":["fixedComponent"]},{"statements":[["text","        "],["append",["helper",["component"],[["get",["scrollableComponent","componentName"]]],[["sharedData","previousAnimationPromise","resolveAnimationPromise"],[["get",["componentSharedData"]],["get",["scrollableComponent","previousAnimationPromise"]],["get",["scrollableComponent","resolveAnimationPromise"]]]]],false],["text","\\n"]],"locals":["scrollableComponent"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "xsJ2IQ8s",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-progression-number-reels.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-progression-number-reels.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-progression-number-reels.js\\" "],["text","\\n"],["append",["unknown",["totalFormatted"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "iFHBeAiV",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-breakdown.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-breakdown.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-breakdown.js\\" "],["text","\\n"],["open-element","table",[]],["static-attr","class","lol-uikit-list-table postgame-breakdown-table"],["flush-element"],["text","\\n"],["block",["each"],[["get",["breakdownValues"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","tr",[]],["static-attr","class","postgame-breakdown-entry"],["dynamic-attr","disabled",["unknown",["breakdownValue","isDisabled"]],null],["flush-element"],["text","\\n      "],["open-element","td",[]],["static-attr","class","postgame-breakdown-amount"],["flush-element"],["open-element","span",[]],["static-attr","class","lol-typekit-value"],["flush-element"],["text","+"],["append",["unknown",["breakdownValue","amount"]],false],["close-element"],["close-element"],["text","\\n      "],["open-element","td",[]],["static-attr","class","postgame-breakdown-name"],["flush-element"],["open-element","span",[]],["static-attr","class","lol-typekit-label"],["flush-element"],["append",["unknown",["breakdownValue","name"]],false],["close-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":["breakdownValue"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "jJeO6k0f",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-progression-ranked.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-progression-ranked.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-progression-ranked.js\\" "],["text","\\n"],["block",["if"],[["get",["shouldShow"]]],null,30]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","lol-uikit-lottie",[]],["static-attr","src","fe/lol-static-assets/lottie/postgame/tft_EOG_WinStreak_LabelVFX.json"],["static-attr","image-path","fe/lol-static-assets/lottie/postgame/images/"],["static-attr","class","postgame-win-streak"],["dynamic-attr","text-winstreak",["concat",[["unknown",["winStreakString"]]]]],["static-attr","autoplay","true"],["static-attr","fixed-width","true"],["static-attr","loop","true"],["flush-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["unless"],[["get",["isLPChangeDisabled"]]],null,0]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-demotion-protection"],["flush-element"],["append",["unknown",["demotionProtextionText"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-lp-disabled"],["flush-element"],["append",["unknown",["lpDisabledText"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","uikit-video",[]],["static-attr","class","delta-lp-modifier-video"],["static-attr","src","/fe/lol-static-assets/videos/lp_returned_effect.webm"],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","uikit-video",[]],["static-attr","class","delta-lp-modifier-video"],["static-attr","src","/fe/lol-static-assets/videos/lp_penalty_effect.webm"],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-small"],["flush-element"],["text","\\n            "],["open-element","p",[]],["flush-element"],["append",["unknown",["afkLpPenaltyAppliedTooltip"]],false],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition"],["bottom"]],6]],"locals":[]},{"statements":[["text","          "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-small"],["flush-element"],["text","\\n            "],["open-element","p",[]],["flush-element"],["append",["unknown",["consolationTooltipBody"]],false],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition"],["bottom"]],8]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","postgame-ranked-error-tooltip"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","postgame-ranked-error-tooltip-header"],["flush-element"],["append",["unknown",["errorTooltipHeader"]],false],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","postgame-ranked-error-tooltip-body"],["flush-element"],["append",["unknown",["errorTooltipBody"]],false],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],10]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["dynamic-attr","class",["concat",["postgame-ranked-pending ",["helper",["if"],[["get",["spinnerIsVisible"]],"visible"],null]]]],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-ranked-pending-spinner"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","postgame-ranked-body-no-change"],["flush-element"],["text","\\n              "],["append",["helper",["sanitize"],[["get",["displayedLpText"]]],null],false],["text","\\n            "],["close-element"],["text","\\n          "]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","postgame-ranked-body"],["flush-element"],["text","\\n              "],["open-element","div",[]],["static-attr","class","postgame-ranked-overflow-box"],["flush-element"],["text","\\n                "],["open-element","span",[]],["dynamic-attr","class",["concat",["lp-loss-scroll-area ",["helper",["if"],[["get",["triggeredAnimation"]],"active"],null]]]],["flush-element"],["text","\\n                  "],["append",["helper",["sanitize"],[["get",["displayedLpText"]]],null],false],["text","\\n                  "],["open-element","div",[]],["static-attr","class","lp-loss-scroll-container"],["flush-element"],["text","\\n                    "],["append",["unknown",["leaguePointsTotal"]],false],["text","\\n                    "],["open-element","div",[]],["static-attr","class","lp-loss-scroll new"],["flush-element"],["text","\\n                      "],["append",["unknown",["leaguePointsTotal"]],false],["text","\\n                    "],["close-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","lp-loss-scroll previous"],["flush-element"],["text","\\n                      "],["append",["unknown",["previousLp"]],false],["text","\\n                    "],["close-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","lp-loss-flash"],["flush-element"],["text","\\n                      "],["open-element","div",[]],["static-attr","class","lp-loss-flash-2"],["flush-element"],["text","\\n                        "],["append",["unknown",["leaguePointsTotal"]],false],["text","\\n                      "],["close-element"],["text","\\n                    "],["close-element"],["text","\\n                  "],["close-element"],["text","\\n                "],["close-element"],["text","\\n              "],["close-element"],["text","\\n            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isLosingLp"]]],null,14,13]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","postgame-ranked-body"],["flush-element"],["text","\\n              "],["open-element","span",[]],["static-attr","class","lp-win-container"],["flush-element"],["text","\\n                "],["append",["helper",["sanitize"],[["get",["displayedLpText"]]],null],false],["text","\\n                "],["open-element","div",[]],["dynamic-attr","class",["concat",["lp-win-flash ",["helper",["if"],[["get",["triggeredAnimation"]],"active"],null]]]],["flush-element"],["text","\\n                  "],["open-element","div",[]],["static-attr","class","lp-win-flash-2"],["flush-element"],["text","\\n                    "],["append",["unknown",["leaguePointsTotal"]],false],["text","\\n                  "],["close-element"],["text","\\n                "],["close-element"],["text","\\n              "],["close-element"],["text","\\n            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isGainingLp"]]],null,16,15]],"locals":[]},{"statements":[["text","                    "],["open-element","span",[]],["static-attr","class","miniseries-placeholder"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","span",[]],["dynamic-attr","class",["concat",["miniseries-container ",["helper",["if"],[["get",["triggeredAnimation"]],"active"],null]]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["miniseriesGame","animate"]]],null,18],["text","                  "],["open-element","span",[]],["dynamic-attr","class",["concat",["miniseries-result-wrapper ",["helper",["if"],[["get",["miniseriesGame","animate"]],"animate"],null]]]],["flush-element"],["text","\\n                    "],["open-element","span",[]],["dynamic-attr","class",["concat",["miniseries-result ",["unknown",["miniseriesGame","result"]]," ",["helper",["if"],[["get",["miniseriesGame","animate"]],"animate"],null]]]],["flush-element"],["close-element"],["text","\\n                  "],["close-element"],["text","\\n                "],["close-element"],["text","\\n"]],"locals":["miniseriesGame"]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","postgame-ranked-body-miniseries"],["flush-element"],["text","\\n"],["block",["each"],[["get",["miniseriesData"]]],null,19],["text","            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isInMiniseries"]]],null,20,17]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["dynamic-attr","class",["concat",["postgame-ranked-body-promotion-demotion ",["helper",["if"],[["get",["isPromotedMultipleTimes"]],"multiple-promotions"],null]]]],["flush-element"],["text","\\n              "],["append",["unknown",["promotionStatusString"]],false],["text","\\n            "],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","postgame-ranked-body-promoted-number"],["flush-element"],["text","\\n              "],["append",["unknown",["numberOfTimesPromotedString"]],false],["text","\\n            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","              "],["open-element","div",[]],["static-attr","class","break"],["flush-element"],["close-element"],["text","\\n              "],["open-element","div",[]],["static-attr","class","afk-penalty-message"],["flush-element"],["text","\\n                "],["append",["unknown",["afkLpPenaltyAppliedText"]],false],["text","\\n              "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","              "],["open-element","div",[]],["static-attr","class","delta"],["flush-element"],["text","\\n                "],["append",["unknown",["headerString"]],false],["text","\\n              "],["close-element"],["text","\\n            "]],"locals":[]},{"statements":[["text","              "],["open-element","div",[]],["static-attr","class","postgame-ranked-delta-body"],["flush-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","postgame-ranked-delta-overflow-box"],["flush-element"],["text","\\n                  "],["open-element","div",[]],["dynamic-attr","class",["concat",["lp-loss-delta-scroll-area ",["helper",["if"],[["get",["triggeredLpModificationAnimation"]],"active"],null]]]],["flush-element"],["text","\\n                    "],["open-element","span",[]],["flush-element"],["append",["unknown",["consolationHeaderString"]],false],["close-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","lp-loss-delta-scroll-container"],["flush-element"],["text","\\n                      "],["append",["unknown",["headerString"]],false],["text","\\n                      "],["open-element","div",[]],["static-attr","class","lp-loss-delta-scroll new"],["flush-element"],["text","\\n                        "],["append",["unknown",["headerString"]],false],["text","\\n                      "],["close-element"],["text","\\n                      "],["open-element","div",[]],["static-attr","class","lp-loss-delta-scroll previous"],["flush-element"],["text","\\n                        "],["append",["unknown",["consolationHeaderString"]],false],["text","\\n                      "],["close-element"],["text","\\n                    "],["close-element"],["text","\\n                  "],["close-element"],["text","\\n                "],["close-element"],["text","\\n              "],["close-element"],["text","\\n              "],["open-element","div",[]],["static-attr","class","break"],["flush-element"],["close-element"],["text","\\n              "],["open-element","div",[]],["dynamic-attr","class",["concat",["delta-consolation-msg ",["helper",["if"],[["get",["triggeredLpModificationAnimation"]],"visible"],null]]]],["flush-element"],["text","\\n                "],["append",["unknown",["consolationLpWasAppliedText"]],false],["text","\\n              "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["consolationLpWasApplied"]]],null,25,24]],"locals":[]},{"statements":[["text","              "],["open-element","div",[]],["static-attr","class","delta is-win"],["flush-element"],["text","\\n                "],["append",["unknown",["headerString"]],false],["text","\\n              "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","postgame-ranked-progression-contents"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-ranked-header"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isConsideredVictory"]]],null,27,26],["block",["if"],[["get",["afkLpPenaltyApplied"]]],null,23],["text","          "],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-ranked-footer"],["flush-element"],["append",["unknown",["displayedTierDivisionLabel"]],false],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["isBeingPromotedOrDemoted"]]],null,22,21],["text","        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-ranked-progression-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["haveData"]]],null,28],["block",["unless"],[["get",["unloadSpinner"]]],null,12],["text","      "],["open-element","div",[]],["dynamic-attr","class",["concat",["postgame-ranked-error-contents ",["helper",["if"],[["get",["errorIsVisible"]],"visible"],null]]]],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","postgame-ranked-error-header"],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","postgame-ranked-error-body"],["flush-element"],["text","\\n          - - -\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","postgame-ranked-error-footer"],["flush-element"],["text","\\n          "],["append",["unknown",["errorText"]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["if"],[["get",["errorIsVisible"]]],null,11],["block",["if"],[["get",["consolationLpWasApplied"]]],null,9],["block",["if"],[["get",["afkLpPenaltyApplied"]]],null,7],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["unless"],[["get",["isLPChangeDisabled"]]],null,29],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["postgame-ranked-lp-divider ",["helper",["if"],[["get",["isTFT"]],"hidden"],null]]]],["flush-element"],["close-element"],["text","\\n  "],["open-element","user-experience-perf-switch",[]],["static-attr","visible-state","delta-lp-modifier-video-switch"],["static-attr","default-visibility","hidden"],["static-attr","class","delta-lp-modifier-video-switch"],["flush-element"],["text","\\n"],["block",["if"],[["get",["afkLpPenaltyApplied"]]],null,5,4],["text","    "],["open-element","span",[]],["static-attr","class","hidden"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["lpDisabledText"]]],null,3],["block",["if"],[["get",["demotionProtextionText"]]],null,2],["block",["if"],[["get",["winStreakString"]]],null,1]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "V1noiYOO",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-progression-rated.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-progression-rated.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-progression-rated.js\\" "],["text","\\n"],["block",["if"],[["get",["shouldShow"]]],null,2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","rated-rating-total-text"],["flush-element"],["text","---"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","rated-rating-total-text"],["flush-element"],["append",["unknown",["displayedRatedRating"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["dynamic-attr","class",["concat",["rated-rating-delta-text ",["helper",["if"],[["get",["isPositiveRatingDelta"]],"positive-rating-delta"],null]]]],["flush-element"],["append",["unknown",["displayedRatedRatingDelta"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","postgame-rated-progression-container"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-lottie",[]],["static-attr","class","postgame-rated-badge-loading"],["static-attr","image-path","/fe/lol-static-assets/lottie/tft-rated/images/"],["dynamic-attr","src",["unknown",["ratedLoadingPath"]],null],["static-attr","resize-to-fit","true"],["static-attr","loop","true"],["static-attr","autoplay","true"],["flush-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","postgame-rated-progression-tier-badge"],["dynamic-attr","src",["concat",[["unknown",["ratedTierImagePath"]]]]],["flush-element"],["close-element"],["text","\\n    "],["open-element","lol-uikit-lottie",[]],["static-attr","class","postgame-rated-badge-highlight"],["static-attr","image-path","/fe/lol-static-assets/lottie/tft-rated/images/"],["static-attr","src","/fe/lol-static-assets/lottie/tft-rated/Badge_Highlight_EOG.json"],["static-attr","resize-to-fit","true"],["static-attr","loop","true"],["static-attr","autoplay","false"],["flush-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-rated-progression-footer"],["flush-element"],["text","\\n"],["block",["if"],[["get",["haveData"]]],null,1,0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "n8UACL8O",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-secondary-progression.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-secondary-progression.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-secondary-progression.js\\" "],["text","\\n"],["block",["if"],[["get",["haveData"]]],null,7]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","span",[]],["dynamic-attr","class",["concat",["flash ",["helper",["if"],[["get",["doneAnimating"]],"active"],null]]]],["flush-element"],["append",["unknown",["headerLevelUpText"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["component"],[["get",["tooltipComponentName"]]],[["tooltipData"],[["get",["tooltipData"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition"],["left"]],1]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["dynamic-attr","class",["concat",["secondary-progression-center-text ",["unknown",["centerTextLengthClass"]]]]],["flush-element"],["text","\\n        "],["append",["unknown",["centerText"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","secondary-progression-lottie-container"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-lottie",[]],["dynamic-attr","src",["concat",[["unknown",["lottiePath"]]]]],["static-attr","autoplay","false"],["dynamic-attr","param-current-exp",["unknown",["oldPercent"]],null],["dynamic-attr","param-new-exp",["unknown",["newDisplayedPercent"]],null],["dynamic-attr","param-level-up",["concat",[["unknown",["isLevelUp"]]]]],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","secondary-progression-full-meter"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","secondary-progression-full-frame"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","secondary-progression-center-image"],["flush-element"],["text","\\n        "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["centerImage"]]]]],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","secondary-progression-radial"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","secondary-progression-full-frame-background"],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["hasCenterImage"]]],null,6],["text","\\n"],["block",["if"],[["get",["isFull"]]],null,5,4],["text","\\n"],["block",["if"],[["get",["hasCenterText"]]],null,3],["text","\\n"],["block",["if"],[["get",["hasTooltip"]]],null,2],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","secondary-progression-details"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","secondary-progression-header"],["flush-element"],["text","\\n      "],["append",["unknown",["displayedHeaderText"]],false],["text","\\n"],["block",["if"],[["get",["hasLevelUpText"]]],null,0],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","secondary-progression-body"],["flush-element"],["text","\\n      +"],["append",["unknown",["currentlyDisplayedValue"]],false],["text","\\n      "],["append",["unknown",["unitText"]],false],["text","\\n      "],["open-element","span",[]],["dynamic-attr","class",["concat",["flash ",["helper",["if"],[["get",["doneAnimating"]],"active"],null]," ",["helper",["if"],[["get",["gainedValue"]],"gained"],null]]]],["flush-element"],["text","+"],["append",["unknown",["numberValue"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "63Znm5hd",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-party-status.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-party-status.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-party-status.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-party-status-icons"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showComponent"]]],null,5],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","postgame-party-status-player"],["static-attr","player-status","left"],["dynamic-attr","style",["concat",["order:",["get",["player"]],";"]]],["flush-element"],["close-element"],["text","\\n"]],"locals":["player"]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","postgame-party-status-player"],["static-attr","player-status","eog"],["flush-element"],["close-element"],["text","\\n"]],"locals":["player"]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","postgame-party-status-player"],["static-attr","player-status","ready"],["dynamic-attr","style",["concat",["order:",["get",["player"]],";"]]],["flush-element"],["close-element"],["text","\\n"]],"locals":["player"]},{"statements":[["text","                    "],["open-element","div",[]],["static-attr","class","postgame-party-status-mouseover-header"],["flush-element"],["text","\\n                        "],["append",["unknown",["tra","postgame_party_status_players_header"]],false],["text"," ("],["append",["unknown",["numPlayersReady"]],false],["text","/"],["append",["unknown",["partySize"]],false],["text",")\\n                    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showMouseOverHeader"]]],null,3],["text","                "],["open-element","div",[]],["static-attr","class","postgame-party-status-mouseover-text"],["flush-element"],["text","\\n                    "],["append",["unknown",["mouseOverText"]],false],["text","\\n                "],["close-element"],["text","\\n            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],4],["text","        "],["open-element","div",[]],["static-attr","class","postgame-party-status-decorator"],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","postgame-party-status-ready-players"],["flush-element"],["text","\\n"],["block",["each"],[["get",["playerIconOrder"]]],null,2],["text","        "],["close-element"],["text","\\n"],["block",["each"],[["get",["eogPlayers"]]],null,1],["text","        "],["open-element","div",[]],["static-attr","class","postgame-party-status-left-players"],["flush-element"],["text","\\n"],["block",["each"],[["get",["leftIconOrder"]]],null,0],["text","        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","postgame-party-status-decorator"],["static-attr","position","right"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "/Ojp1Pf3",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-player-honor-flair.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-player-honor-flair.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-player-honor-flair.js\\" "],["text","\\n"],["block",["unless"],[["get",["isBot"]]],null,3]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-large"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tooltipText"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","uikit-video",[]],["static-attr","class","honor-postgame-celebration-video"],["dynamic-attr","src",["concat",[["unknown",["teamChoiceMograph"]]]]],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","img",[]],["dynamic-attr","class",["concat",["honor-postgame-celebration-icon ",["helper",["if"],[["get",["hasCelebrated"]],"visible"],null]]]],["dynamic-attr","src",["concat",[["unknown",["teamChoiceIconPath"]]]]],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isLowSpec"]]],null,2,1],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["honor-postgame-celebration-tooltip-container ",["unknown",["hideTooltipClassName"]]]]],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","bottom"]],0],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "lZnDwn03",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-progression-honor-notification.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-progression-honor-notification.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-progression-honor-notification.js\\" "],["text","\\n"],["block",["unless"],[["get",["usingHonorCeremonyV3"]]],null,8,2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","            "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n              "],["open-element","p",[]],["flush-element"],["append",["helper",["player-name"],null,[["format","puuid"],["short",["get",["displayedHonor","senderPuuid"]]]]],false],["close-element"],["text","\\n            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","honor-v3-postgame-notification-animation"],["flush-element"],["text","\\n          "],["open-element","uikit-video",[]],["static-attr","class","honor-v3-postgame-notification-animation-video"],["static-attr","src","/fe/lol-postgame/mograph/EOG_Honor_Received.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","muted",""],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],0],["text","        "],["close-element"],["text","\\n"]],"locals":["displayedHonor"]},{"statements":[["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["honor-v3-postgame-notification-contents ",["unknown",["honorActiveClass"]]]]],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","honor-v3-postgame-notification-icon"],["static-attr","src","/fe/lol-postgame/Honor-Emblem.png"],["flush-element"],["close-element"],["text","\\n    "],["open-element","uikit-video",[]],["static-attr","class","honor-v3-postgame-notification-flair"],["static-attr","src","/fe/lol-postgame/mograph/EOG_Honor_Trail.webm"],["static-attr","preload",""],["static-attr","muted",""],["flush-element"],["close-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","honor-v3-postgame-notification-highlight"],["static-attr","src","/fe/lol-postgame/Honor-Highlight.png"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","honor-v3-postgame-notification-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["displayedHonors"]]],[["key"],["senderPuuid"]],1],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["postgame-scoreboard-progression-honor-category-icon"],null,[["displayedHonor","honorIndex","hexakillClass","isLowSpec","decrementTransitionLock"],[["get",["displayedHonor"]],["get",["index"]],["get",["hexakillClass"]],["get",["isLowSpec"]],"decrementTransitionLock"]]],false],["text","\\n"]],"locals":["displayedHonor","index"]},{"statements":[["text","          "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-large"],["flush-element"],["text","\\n            "],["open-element","p",[]],["flush-element"],["append",["unknown",["flairTooltip"]],false],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","bottom"]],4]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-large"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["headerTooltip"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],6]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","honor-postgame-notification-header"],["flush-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["honor-postgame-notification-header-text ",["unknown",["headerProgressVisibilityClass"]]]]],["flush-element"],["text","\\n      "],["append",["unknown",["headerProgressText"]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["honor-postgame-notification-header-text ",["unknown",["headerVisibilityClass"]]]]],["flush-element"],["text","\\n      "],["append",["unknown",["headerText"]],false],["text","\\n    "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["headerTooltipIsVisible"]]],null,7],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","honor-postgame-notification-contents"],["flush-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["honor-postgame-notification-progress-container ",["unknown",["progressVisibilityClass"]]]]],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","honor-postgame-notification-progress-indicator top"],["dynamic-attr","src",["concat",[["unknown",["progressIndicator"]]]]],["flush-element"],["close-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","honor-postgame-notification-progress-indicator bottom"],["dynamic-attr","src",["concat",[["unknown",["progressIndicator"]]]]],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","honor-postgame-notification-flair-container"],["flush-element"],["text","\\n      "],["open-element","img",[]],["dynamic-attr","class",["concat",["honor-postgame-notification-flair-icon ",["unknown",["strangerFlairVisibilityClass"]]]]],["dynamic-attr","src",["concat",[["unknown",["strangerFlairIcon"]]]]],["flush-element"],["close-element"],["text","\\n      "],["open-element","img",[]],["dynamic-attr","class",["concat",["honor-postgame-notification-flair-icon ",["unknown",["premadeFlairVisibilityClass"]]]]],["dynamic-attr","src",["concat",[["unknown",["premadeFlairIcon"]]]]],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["flairTooltipIsVisible"]]],null,5],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","honor-postgame-notification-emblem-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["displayedHonors"]]],null,3],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "qyLYDB21",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\postgame-scoreboard-progression-honor-category-icon.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\postgame-scoreboard-progression-honor-category-icon.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\postgame-scoreboard-progression-honor-category-icon.js\\" "],["text","\\n"],["open-element","uikit-state-machine",[]],["dynamic-attr","assets-ready",["concat",[["unknown",["assetsReady"]]]]],["dynamic-attr","should-beam",["concat",[["unknown",["shouldBeam"]]]]],["flush-element"],["text","\\n  "],["open-element","uikit-states",[]],["flush-element"],["text","\\n    "],["open-element","uikit-state",[]],["static-attr","name","initial"],["flush-element"],["text","\\n      "],["open-element","uikit-behavior-media",[]],["static-attr","selector","#intro"],["static-attr","preloading",""],["flush-element"],["close-element"],["text","\\n      "],["open-element","uikit-behavior-media",[]],["static-attr","selector","#beam"],["static-attr","preloading",""],["flush-element"],["close-element"],["text","\\n      "],["open-element","uikit-transition",[]],["static-attr","next-state","intro"],["flush-element"],["text","\\n        "],["open-element","uikit-condition-parameter",[]],["static-attr","name","assets-ready"],["static-attr","value","true"],["flush-element"],["close-element"],["text","\\n        "],["open-element","uikit-condition-parameter",[]],["static-attr","name","should-beam"],["static-attr","value","false"],["flush-element"],["close-element"],["text","\\n        "],["open-element","uikit-condition-media",[]],["static-attr","selector","#intro"],["static-attr","can-play",""],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","uikit-transition",[]],["static-attr","next-state","beam"],["flush-element"],["text","\\n        "],["open-element","uikit-condition-delay",[]],["static-attr","duration","50"],["flush-element"],["close-element"],["text","\\n        "],["open-element","uikit-condition-parameter",[]],["static-attr","name","assets-ready"],["static-attr","value","true"],["flush-element"],["close-element"],["text","\\n        "],["open-element","uikit-condition-parameter",[]],["static-attr","name","should-beam"],["static-attr","value","true"],["flush-element"],["close-element"],["text","\\n        "],["open-element","uikit-condition-media",[]],["static-attr","selector","#intro"],["static-attr","can-play",""],["flush-element"],["close-element"],["text","\\n        "],["open-element","uikit-condition-media",[]],["static-attr","selector","#beam"],["static-attr","can-play",""],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","uikit-state",[]],["static-attr","name","intro"],["flush-element"],["text","\\n      "],["open-element","uikit-behavior-media",[]],["static-attr","selector","#intro"],["static-attr","playing",""],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","uikit-state",[]],["static-attr","name","beam"],["flush-element"],["text","\\n      "],["open-element","uikit-behavior-media",[]],["static-attr","selector","#intro"],["static-attr","playing",""],["flush-element"],["close-element"],["text","\\n      "],["open-element","uikit-behavior-media",[]],["static-attr","selector","#beam"],["static-attr","playing",""],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","user-experience-perf-switch",[]],["static-attr","id","beam"],["static-attr","visible-state","beam"],["static-attr","default-visibility","hidden"],["flush-element"],["text","\\n    "],["open-element","uikit-video",[]],["static-attr","class","honor-postgame-category-beam"],["dynamic-attr","src",["concat",[["unknown",["categoryBeamUrl"]]]]],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","user-experience-perf-switch",[]],["static-attr","id","intro"],["static-attr","visible-state","intro,beam"],["static-attr","default-visibility","hidden"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isLowSpec"]]],null,2,1],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","bottom"]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["append",["unknown",["categoryIconTooltip"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","uikit-video",[]],["dynamic-attr","class",["concat",["honor-postgame-notification-video ",["unknown",["positionClassName"]]]]],["dynamic-attr","src",["concat",[["unknown",["categoryVideoUrl"]]]]],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","honor-postgame-category-icon-group"],["flush-element"],["text","\\n        "],["open-element","div",[]],["dynamic-attr","class",["concat",["honor-postgame-category-low-spec-glow ",["unknown",["positionClassName"]]]]],["flush-element"],["close-element"],["text","\\n        "],["open-element","img",[]],["dynamic-attr","class",["concat",["honor-postgame-category-icon ",["unknown",["positionClassName"]]]]],["dynamic-attr","src",["concat",[["unknown",["categoryIconUrl"]]]]],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "wbZxeUDv",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-header.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-header.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-header.js\\" "],["text","\\n"],["append",["helper",["postgame-game-result-icon"],null,[["isVictory","isTop4"],[["get",["isVictory"]],["get",["isTop4"]]]]],false],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-header-wrapper"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","postgame-outcome"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-game-result"],["flush-element"],["text","\\n      "],["append",["unknown",["playerRankText"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldShowPlacements"]]],null,0],["text","  "],["open-element","div",[]],["static-attr","class","postgame-game-info"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-map-info"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","postgame-map-info-item-game-mode"],["flush-element"],["append",["unknown",["tra","tft_header_mode_text"]],false],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","postgame-map-info-item-queue-type"],["flush-element"],["append",["unknown",["queueDescription"]],false],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","postgame-map-info-item-game-length"],["flush-element"],["append",["unknown",["gameLength"]],false],["close-element"],["text","\\n      "],["append",["helper",["game-id-clipboard-copy"],null,[["gameId"],[["get",["gameId"]]]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-game-result-placement-games"],["flush-element"],["append",["unknown",["placementGamesString"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "RcVbia6m",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-partner-group-placement.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-partner-group-placement.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-partner-group-placement.js\\" "],["text","\\n"],["open-element","div",[]],["dynamic-attr","class",["concat",["tft-partner-group-rank tft-partner-group-rank-place-",["unknown",["placement"]]]]],["flush-element"],["append",["unknown",["placementDisplay"]],false],["close-element"],["text","\\n"],["open-element","svg",[]],["static-attr","class","tft-partner-group-banner"],["dynamic-attr","style",["concat",["fill: ",["unknown",["partnerGroupColorCode"]],";"]]],["static-attr","version","1.1"],["static-attr","id","Layer_1"],["static-attr","xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],["static-attr","xmlns:xlink","http://www.w3.org/1999/xlink","http://www.w3.org/2000/xmlns/"],["static-attr","x","0px"],["static-attr","y","0px"],["static-attr","viewBox","0 0 13 98"],["static-attr","style","enable-background:new 0 0 13 98;"],["static-attr","xml:space","preserve","http://www.w3.org/XML/1998/namespace"],["flush-element"],["text","\\n  "],["open-element","linearGradient",[]],["static-attr","id","SVGID_1_"],["static-attr","gradientUnits","userSpaceOnUse"],["static-attr","x1","6.5"],["static-attr","y1","98"],["static-attr","x2","6.5"],["static-attr","y2","18"],["static-attr","gradientTransform","matrix(1 0 0 -1 0 100)"],["flush-element"],["text","\\n    "],["open-element","stop",[]],["static-attr","offset","0.1649"],["static-attr","style","stop-color:#1C32FF"],["flush-element"],["close-element"],["text","\\n    "],["open-element","stop",[]],["static-attr","offset","1"],["static-attr","style","stop-color:#1221A7"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","path",[]],["static-attr","d","M2,6.6c0-0.4,0.2-0.8,0.6-0.9l7-3.1C10.3,2.3,11,2.8,11,3.5v90.9c0,0.7-0.7,1.2-1.4,0.9l-7-3.1\\n        C2.2,92.1,2,91.7,2,91.4V6.6z"],["flush-element"],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "L8rsWgEE",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-player.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-player.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-player.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","tft-player-left-column"],["flush-element"],["text","\\n"],["block",["if"],[["get",["promethiumData"]]],null,24,21],["close-element"],["text","\\n"],["block",["if"],[["get",["isPlaybookEnabled"]]],null,18],["open-element","div",[]],["static-attr","class","tft-player-pieces-container fade-right"],["dynamic-attr","style",["concat",["--number-of-units: ",["unknown",["numberOfUnitsToShow"]]]]],["dynamic-attr","onmousewheel",["helper",["action"],[["get",[null]],"onMouseWheelScroll"],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tft-player-pieces"],["flush-element"],["text","\\n\\n"],["block",["if"],[["get",["promethiumData"]]],null,14],["text","\\n"],["block",["each"],[["get",["pieces"]]],null,9],["block",["each"],[["get",["piecePlaceholders"]]],null,4],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["block",["if"],[["get",["configAllowImportDialogue"]]],null,3]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","tft-import-button"],["flush-element"],["text","\\n        "],["append",["helper",["generic-button"],null,[["onClick","baseImgPath","overImgPath","downImgPath","disabledImgPath","isEnabled","disabledTooltipText","disabledTooltipPosition","disabledTooltipType"],[["helper",["action"],[["get",[null]],"importTeamIntoTeamPlanner"],null],"/fe/lol-postgame/TFT_Teamplanner_Import_Default.png","/fe/lol-postgame/TFT_Teamplanner_Import_Hover.png","/fe/lol-postgame/TFT_Teamplanner_Import_Clicked.png","/fe/lol-postgame/TFT_Teamplanner_Import_Disabled.png",["get",["isTeamImportButtonEnabled"]],["get",["tra","tft_teamplanner_import_team_full"]],"bottom","system"]]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","img",[]],["static-attr","class","tft-import-button-checkmark"],["static-attr","src","/fe/lol-postgame/TFT_Teamplanner_Import_Saved.png"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["hasBeenImported"]]],null,1,0]],"locals":[]},{"statements":[["block",["if"],[["get",["isNotSet5Revival"]]],null,2]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","tft-player-piece tft-player-piece-placeholder"],["flush-element"],["close-element"],["text","\\n"]],"locals":["placeholder"]},{"statements":[["text","              "],["open-element","p",[]],["static-attr","class","postgame-tft-piece-tooltip-item"],["flush-element"],["append",["unknown",["item","name"]],false],["close-element"],["text","\\n"]],"locals":["item"]},{"statements":[["text","                "],["append",["helper",["if"],[["get",["traitIndex"]]," : "],null],false],["text","\\n                "],["append",["unknown",["trait","name"]],false],["text","\\n"]],"locals":["trait","traitIndex"]},{"statements":[["text","          "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","postgame-tft-piece-tooltip"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","postgame-tft-piece-tooltip-champ"],["flush-element"],["append",["unknown",["piece","name"]],false],["close-element"],["text","\\n            "],["open-element","p",[]],["static-attr","class","postgame-tft-piece-tooltip-traits"],["flush-element"],["text","\\n"],["block",["each"],[["get",["piece","traits"]]],null,6],["text","            "],["close-element"],["text","\\n"],["block",["each"],[["get",["piece","items"]]],null,5],["text","          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","tft-player-piece-item"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["item","icon"]],");"]]],["flush-element"],["close-element"],["text","\\n"]],"locals":["item"]},{"statements":[["text","      "],["open-element","div",[]],["dynamic-attr","class",["concat",["tft-player-piece piece-level-",["unknown",["piece","level"]]]]],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["piece","icon"]],");"]]],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","piece-inner-border"],["flush-element"],["close-element"],["text","\\n\\n        "],["open-element","div",[]],["static-attr","class","tft-player-piece-item-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["piece","items"]]],null,8],["text","        "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["top"]],7],["text","      "],["close-element"],["text","\\n"]],"locals":["piece"]},{"statements":[["text","                    "],["append",["get",["affix"]],false],["text","\\n"]],"locals":["affix"]},{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","affixes_title"],["flush-element"],["text","\\n                  "],["append",["unknown",["tra","promethium_affixes"]],false],["text","\\n                "],["close-element"],["text","\\n\\n                "],["open-element","div",[]],["static-attr","class","affixes"],["flush-element"],["text","\\n"],["block",["each"],[["get",["promethiumData","affixes"]]],null,10],["text","                "],["close-element"],["text","\\n\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","boss_title"],["flush-element"],["text","\\n                  "],["append",["unknown",["tra","promethium_boss"]],false],["text","\\n                "],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","boss"],["flush-element"],["text","\\n                  "],["append",["unknown",["promethiumData","bossName"]],false],["text","\\n                "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","postgame-tft-piece-tooltip"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","player-piece__event-pve-tooltip"],["flush-element"],["text","\\n              "],["open-element","div",[]],["static-attr","class","name_title"],["flush-element"],["text","\\n                "],["append",["unknown",["tra","promethium_buddy"]],false],["text","\\n              "],["close-element"],["text","\\n\\n              "],["open-element","div",[]],["static-attr","class","name"],["flush-element"],["text","\\n                "],["append",["unknown",["promethiumData","buddyName"]],false],["text","\\n              "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["promethiumData","bossName"]]],null,12],["text","\\n"],["block",["if"],[["get",["promethiumData","affixes"]]],null,11],["text","            "],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","tft-player-piece"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["promethiumData","buddyIcon"]],");"]]],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","piece-inner-border"],["flush-element"],["close-element"],["text","\\n\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["bottom"]],13],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","postgame-tft-piece-tooltip postgame-tft-player-tooltip"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","postgame-tft-piece-tooltip-champ"],["flush-element"],["append",["unknown",["playbook","name"]],false],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","tft-player-piece tft-player-playbook"],["flush-element"],["text","\\n        "],["open-element","img",[]],["static-attr","class","tft-player-playbook-container"],["dynamic-attr","src",["unknown",["playbook","iconSmall"]],null],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["top"]],15],["text","      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["playbook","name"]]],null,16]],"locals":[]},{"statements":[["block",["if"],[["get",["playbook"]]],null,17]],"locals":[]},{"statements":[["text","          "],["append",["helper",["postgame-scoreboard-player-buttons"],null,[["isFriendRequestDisabled","isReportDisabled","sendFriendRequest","showReportDialog","isInviteDisabled","showInviteButton"],[["get",["isFriendRequestDisabled"]],["get",["isReportDisabled"]],"sendFriendRequest","showReportDialog",["get",["isInviteDisabled"]],["get",["showInviteButton"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["dynamic-attr","class",["concat",["tft-player-rank tft-rank-place-",["unknown",["player","rank"]]]]],["flush-element"],["append",["unknown",["player","rank"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["showPlacementBanner"]]],null,20],["text","      "],["open-element","div",[]],["dynamic-attr","class",["concat",["tft-player-icon ",["helper",["if"],[["get",["showPlacementBanner"]],"","tft-player-icon-no-banner"],null]]]],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","tft-companion-icon-container"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","tft-companion-icon"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["player","companion","icon"]],");"]]],["flush-element"],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","ring"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","tft-player-identity"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","tft-player-name-section"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","tft-player-name"],["flush-element"],["text","\\n            "],["append",["helper",["player-name"],null,[["format","puuid","summonerName","gameName","tagLine"],["short",["get",["player","puuid"]],["get",["player","summonerName"]],["get",["player","riotIdGameName"]],["get",["player","riotIdTagLine"]]]]],false],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,19],["text","      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["postgame-scoreboard-player-buttons"],null,[["isFriendRequestDisabled","isReportDisabled","sendFriendRequest","showReportDialog","isInviteDisabled","showInviteButton"],[["get",["isFriendRequestDisabled"]],["get",["isReportDisabled"]],"sendFriendRequest","showReportDialog",["get",["isInviteDisabled"]],["get",["showInviteButton"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","tft-player-rank tft-rank-place-1"],["flush-element"],["text","1"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["showPlacementBanner"]]],null,23],["text","    "],["open-element","div",[]],["dynamic-attr","class",["concat",["tft-player-icon ",["helper",["if"],[["get",["showPlacementBanner"]],"","tft-player-icon-no-banner"],null]]]],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","tft-companion-icon-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","tft-companion-icon"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["player","companion","icon"]],");"]]],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","ring"],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tft-player-identity"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","tft-player-name-section"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","tft-player-name"],["flush-element"],["text","\\n          "],["append",["helper",["player-name"],null,[["format","puuid","summonerName","gameName","tagLine"],["short",["get",["player","puuid"]],["get",["player","summonerName"]],["get",["player","riotIdGameName"]],["get",["player","riotIdTagLine"]]]]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,22],["text","      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "74fuqRhd",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-tooltip.hbs\\" style-path=\\"null\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-tooltip.js\\" "],["text","\\n"],["open-element","lol-uikit-tooltip",[]],["dynamic-attr","id",["concat",["tft-tooltip-",["unknown",["tooltipId"]]]]],["flush-element"],["text","\\n  "],["yield","default"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "jLGVuqAn",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-skilltree-scoreboard.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-skilltree-scoreboard.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-skilltree-scoreboard.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","title-group"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","title"],["flush-element"],["append",["unknown",["tra","tft_skill_tree_scoreboard_title"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","title-info"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-scoreboard-info-button"]],"\')"]]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"onInfoButtonClicked"],null],null],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","title-div"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-bonus-score-title-divider"]],"\')"]]],["flush-element"],["close-element"],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","disabled"],["static-attr","class","bonus-score-row"],["flush-element"],["text","\\n"],["block",["each"],[["get",["tftSkilltreePostgameBonusScoreData"]]],null,4],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","total-score"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-bonus-score-total-score-bg"]],"\')"]]],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","total-score-value"],["flush-element"],["text"," "],["append",["unknown",["tftSkilltreePostgameBonusTotalScore"]],false],["text"," "],["append",["unknown",["tra","tft_skill_tree_strategy_points"]],false],["text"," "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["block",["if"],[["get",["isVisionaryPenaltyApplied"]]],null,3],["block",["if"],[["get",["showTierModifiersUnlocked"]]],null,2],["block",["if"],[["get",["showInfoModal"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","skill-tree-info-modal"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","skill-tree-info-content"],["flush-element"],["append",["helper",["sanitize"],[["get",["tra","tft_skill_tree_info_text"]]],null],false],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","event-info-link"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","link-text"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"openEventUrlFaq"],null],null],["flush-element"],["append",["unknown",["tra","tft_skill_tree_info_faq_text"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","link-icon"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","external-link-icon"]],"\');"]]],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-modal"],null,[["type","dismissible","dismissibleType","onClose"],["DialogAlert",true,"inside",["helper",["action"],[["get",[null]],"closeInfoModal"],null]]],0]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","tier-modifier-unlock"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tier-modifier-unlock-banner"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-tier-unlock-bg"]],"\')"]]],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","tier-modifier-unlock-text"],["flush-element"],["text"," "],["append",["unknown",["tra","tft_skill_tree_scoreboard_tier_unlock"]],false],["text"," "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","tier-modifier-unlock-text_sub"],["flush-element"],["text"," "],["append",["unknown",["tra","tft_skill_tree_scoreboard_tier_unlock_sub"]],false],["text"," "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","visionary-penalty-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","penalty-icon"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","skill-tree-visionary-penalty-icon"]],"\')"]]],["flush-element"],["close-element"],["text","\\n    "],["open-element","span",[]],["static-attr","class","penalty-text"],["flush-element"],["append",["unknown",["tra","tft_skill_tree_visionary_penalty_text"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["tft-skilltree-score-row"],null,[["modifierName","bonusScoreValue","emblemPath"],[["get",["score","name"]],["get",["score","value"]],["get",["score","emblemPath"]]]]],false],["text","\\n"]],"locals":["score"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "6n0s3Ha3",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-skilltree-score-row.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-skilltree-score-row.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-skilltree-score-row.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","score-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","name-emblem"],["flush-element"],["text","\\n"],["block",["if"],[["get",["hasEmblem"]]],null,0],["text","    "],["open-element","div",[]],["static-attr","class","score-name"],["flush-element"],["text"," "],["append",["unknown",["modifierName"]],false],["text"," "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","score-value"],["flush-element"],["text"," "],["append",["unknown",["bonusScoreValue"]],false],["text"," "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","score-emblem"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["emblemPath"]],"\')"]]],["flush-element"],["text"," "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "iOMr91R+",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-skilltree-progression.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-skilltree-progression.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-skilltree-progression.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","skilltree-progression"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","rank-progression"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","animation"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showFirstRank"]]],null,3],["block",["if"],[["get",["isElementChange"]]],null,2],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","current-rank-info"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","current-rank-text"],["flush-element"],["text"," "],["append",["unknown",["rankName"]],false],["text"," "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","progress-bar"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","progress-bar-bg"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-progress-bar-bg"]],"\')"]]],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","progress-bar-meter"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-progress-bar"]],"\'); --progress: ",["unknown",["progressBarPercentage"]]]]],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"],["block",["if"],[["get",["spNeededToNextRank"]]],null,1,0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","current-progression"],["flush-element"],["text"," "],["append",["unknown",["divCurrentSP"]],false],["text"," "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","current-progression"],["flush-element"],["text"," "],["append",["unknown",["divCurrentSP"]],false],["text"," / "],["open-element","span",[]],["static-attr","style","color:#D27F98"],["flush-element"],["append",["unknown",["divTotalSP"]],false],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["tft-skilltree-progression-banner-spine"],null,[["animationSequence","animationAudio","skeletonPath","startSkin","endSkin","skinChangeAnimation","autoplay","atlas","registerBannerSpine"],[["get",["secondaryAnimationSequence"]],["get",["secondaryAnimationAudio"]],["get",["secondarySkeleton"]],["get",["endSkin"]],["get",["endSkin"]],"2_Crest_Change",false,"/fe/lol-tft/spine/skill-tree/SkillTree_Ceremonies_All_Reduced.atlas",["helper",["action"],[["get",[null]],"registerSecondaryBannerSpine"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["tft-skilltree-progression-banner-spine"],null,[["animationSequence","animationAudio","skeletonPath","startSkin","endSkin","skinChangeAnimation","pause","autoplay","atlas","registerBannerSpine","onSequenceCompleteCallback"],[["get",["mainAnimationSequence"]],["get",["mainAnimationAudio"]],["get",["mainSkeleton"]],["get",["startSkin"]],["get",["endSkin"]],"2_Crest_Change",true,false,"/fe/lol-tft/spine/skill-tree/SkillTree_Ceremonies_All_Reduced.atlas",["helper",["action"],[["get",[null]],"registerMainBannerSpine"],null],["helper",["action"],[["get",[null]],"swapToNextElementBannerSpine"],null]]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "lGU+kcow",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-skilltree-progression-banner-spine.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-skilltree-progression-banner-spine.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-skilltree-progression-banner-spine.js\\" "],["text","\\n"],["append",["helper",["spine-animation"],null,[["animation","autoPlay","skeleton","atlas","callbackContext","onComplete","onLoad","width","height"],[["get",["defaultAnimation"]],["get",["autoPlay"]],["get",["skeletonPath"]],"/fe/lol-tft/spine/skill-tree/SkillTree_Ceremonies_All_Reduced.atlas",["get",[null]],["helper",["action"],[["get",[null]],"spineAnimationCompleteCallback"],null],["helper",["action"],[["get",[null]],"spineAnimationOnLoadCallback"],null],730,1450]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "b7CWQZ6f",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-promethium-scoreboard.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-promethium-scoreboard.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-promethium-scoreboard.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","title-group"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","title"],["flush-element"],["append",["unknown",["tra","promethium_scoreboard_title"]],false],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","title-info"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-scoreboard-info-button"]],"\')"]]],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["right"]],7],["text","  "],["close-element"],["text","\\n\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","title-div"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-bonus-score-title-divider"]],"\')"]]],["flush-element"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","section-title"],["flush-element"],["append",["unknown",["tra","promethium_journey_track_xp"]],false],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["isDoneLoadingMissions"]]],null,6,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","loading"],["flush-element"],["text","\\n    "],["append",["unknown",["uikit-spinner"]],false],["text","\\n    "],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n    "],["append",["unknown",["tra","promethium_calculating_rewards"]],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","unlock-row"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","unlock-level"],["flush-element"],["text"," "],["append",["unknown",["tra","battlepass_level"]],false],["text"," "],["append",["unknown",["unlock","level"]],false],["text"," "],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","unlock-name"],["flush-element"],["text"," "],["append",["unknown",["unlock","title"]],false],["text"," "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["unlock"]},{"statements":[["text","\\n    "],["open-element","div",[]],["static-attr","class","title-div"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-bonus-score-title-divider"]],"\')"]]],["flush-element"],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","section-title"],["flush-element"],["append",["unknown",["tra","promethium_journey_track_unlock"]],false],["close-element"],["text","\\n\\n    "],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","disabled"],["static-attr","class","bonus-score-row jt-unlocks"],["flush-element"],["text","\\n"],["block",["each"],[["get",["promethium","journeyTrackUnlocks"]]],null,1],["text","    "],["close-element"],["text","\\n\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["tft-promethium-score-row"],null,[["iconSrc","modifierName","bonusScoreValue"],[["get",["score","iconSrc"]],["get",["score","name"]],["get",["score","value"]]]]],false],["text","\\n"]],"locals":["score"]},{"statements":[["block",["each"],[["get",["promethiumJourneyTrackXp"]]],null,3]],"locals":[]},{"statements":[["text","      "],["append",["helper",["tft-promethium-score-row"],null,[["modifierName","bonusScoreValue"],[["get",["tra","promethium_rounds_cleared"]],0]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","disabled"],["static-attr","class","bonus-score-row"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isGameScoreZero"]]],null,5,4],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","total-score"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-bonus-score-total-score-bg"]],"\')"]]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","total-score-value"],["flush-element"],["text","\\n      "],["append",["unknown",["totalScoreString"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["promethium","hasJourneyTrackUnlocks"]]],null,2],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-small"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["text","\\n            "],["append",["helper",["sanitize"],[["get",["tra","promethium_info_text"]]],null],false],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "opoY9pFc",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-promethium-score-row.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-promethium-score-row.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-promethium-score-row.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","score-row"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","name-emblem"],["flush-element"],["text","\\n"],["block",["if"],[["get",["iconSrc"]]],null,0],["text","    "],["open-element","div",[]],["static-attr","class","score-name"],["flush-element"],["text"," "],["append",["unknown",["modifierName"]],false],["text"," "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","score-value"],["flush-element"],["text"," "],["append",["unknown",["bonusScoreValue"]],false],["text"," "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","score-emblem"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["iconSrc"]],"\')"]]],["flush-element"],["text"," "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "Wu3pKNXt",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-promethium-progression.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-promethium-progression.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-promethium-progression.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","promethium-progression"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jt-progression"],["flush-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","badge-banner-background"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","badge-banner-wrapper"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","badge-banner"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","badge-info"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","badge-text"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","promethium"]],false],["text","\\n        "],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n        "],["append",["unknown",["tra","battlepass_journey_track"]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","badge-level"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","battlepass_level"]],false],["text"," "],["append",["unknown",["promethium","journeyTrackLevel"]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","progress-bar"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","progress-bar-bg"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-progress-bar-bg"]],"\')"]]],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","progress-bar-meter"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["tftSkilltreeAssets","eog-progress-bar"]],"\'); --progress: ",["unknown",["promethium","activeMilestoneProgressPercentage"]]]]],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","div",[]],["static-attr","class","current-progression"],["flush-element"],["text","\\n        "],["append",["unknown",["promethium","pointsEarnedForMilestone"]],false],["text"," / "],["open-element","span",[]],["flush-element"],["append",["unknown",["promethium","pointsNeededForMilestone"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "LHvTqWN9",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\tft-promethium-progression-banner-spine.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\styles\\\\components\\\\tft-promethium-progression-banner-spine.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\components\\\\tft-promethium-progression-banner-spine.js\\" "],["text","\\n"],["append",["helper",["spine-animation"],null,[["animation","autoPlay","skeleton","atlas","callbackContext","onComplete","onLoad","width","height"],[["get",["defaultAnimation"]],["get",["autoPlay"]],["get",["skeletonPath"]],"/fe/lol-tft/spine/skill-tree/SkillTree_Ceremonies_All_Reduced.atlas",["get",[null]],["helper",["action"],[["get",[null]],"spineAnimationCompleteCallback"],null],["helper",["action"],[["get",[null]],"spineAnimationOnLoadCallback"],null],730,1450]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(30),
                l = (n = s(130)) && n.__esModule ? n : {
                    default: n
                };
            s(131);
            const i = a.UIKit.getVignetteCelebrationManager();
            var r = a.Ember.Component.extend({
                classNames: [`${o.PLUGIN_NAME}-reward-celebration`],
                layout: l.default,
                selectedReward: null,
                softSelectionMade: !1,
                didDestroyElement() {
                    null !== this.get("selectedReward") && this.set("selectedReward", null)
                },
                actions: {
                    selectReward(e, t) {
                        t.target.disabled || (null !== this.get("selectedReward") && this.set("selectedReward.isSelected", !1), this.set("selectedReward", e), this.set("selectedReward.isSelected", !0), this.set("softSelectionMade", !0), i.update({
                            id: this.id,
                            data: {
                                nextButtonEnabled: !0
                            }
                        }))
                    }
                }
            });
            t.default = r
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "oVvaedtC",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\reward-celebration\\\\addon\\\\templates\\\\reward-celebration.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\reward-celebration\\\\addon\\\\styles\\\\reward-celebration.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","rewards-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["rewards"]]],null,2],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","reward-select"],["flush-element"],["text","\\n          "],["open-element","lol-uikit-flat-button",[]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"selectReward",["get",["reward"]]],null],null],["static-attr","class","reward-select-button"],["dynamic-attr","disabled",["unknown",["reward","isSelected"]],null],["flush-element"],["text","\\n            "],["append",["unknown",["tra","celebration_select_text"]],false],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["dynamic-attr","class",["concat",["dimming-filter ",["helper",["if"],[["get",["reward","isSelected"]],"selected"],null]," ",["helper",["if"],[["get",["softSelectionMade"]],"dimmed"],null]]]],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","radial-glow"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["dynamic-attr","class",["concat",["reward ",["helper",["if"],[["get",["selectable"]],"selectable"],null]]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["selectable"]]],null,1],["text","      "],["open-element","img",[]],["static-attr","class","reward-icon"],["dynamic-attr","src",["unknown",["reward","iconUrl"]],null],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","reward-description"],["flush-element"],["append",["unknown",["reward","description"]],false],["close-element"],["text","\\n"],["block",["if"],[["get",["selectable"]]],null,0],["text","    "],["close-element"],["text","\\n"]],"locals":["reward"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StrawberryPostgameAchievementsComponent = void 0;
            var n = s(1);
            const a = n.Ember.Component.extend({
                classNames: ["strawberry-postgame-achievements-component"],
                strawberryService: n.Ember.inject.service("strawberry"),
                grantsToDisplay: null,
                milestonesToShow: n.Ember.computed("grantsToDisplay", "strawberryService.progressionCategoriesWithMilestones", "strawberryService.boonOwnershipLookup", "strawberryService.countersPlayerState", (function() {
                    const e = this.get("grantsToDisplay") || [],
                        t = this.get("strawberryService.progressionCategoriesWithMilestones") || [],
                        s = this.get("strawberryService.boonOwnershipLookup") || {},
                        n = this.get("strawberryService.countersPlayerState") || [],
                        a = {};
                    for (const e of t)
                        for (const t of e.Milestones) t.value.Properties.forEach((e => {
                            a[e.Id] = t.value
                        }));
                    const o = [];
                    if (e.forEach((e => {
                            o.push(a[e.rewardGroup.id])
                        })), o.length >= 6) return o;
                    const l = {},
                        i = (e, t) => Math.floor(e / t * 100);
                    let r = [];
                    for (const e of t)
                        if (!e.PrerequisiteBoon || s[e.PrerequisiteBoon?.ItemId])
                            for (const t of e.Milestones) {
                                const e = n.find((e => e.counterId === t.value.Counter.Id));
                                e && (o.find((e => e.Id === t.Id)) || e.counterValue < t.value.TriggerValue && (l[t.value.Counter.Id] = e, r.push(t.value)))
                            }
                    return r.sort(((e, t) => {
                        const s = l[e.Counter.Id],
                            n = l[t.Counter.Id],
                            a = i(s.counterValue, e.TriggerValue),
                            o = i(n.counterValue, t.TriggerValue);
                        return a < o ? 1 : a > o ? -1 : 0
                    })), r = o.concat(r), r.length > 6 && (r.length = 6), r
                })),
                isScrollable: n.Ember.computed("milestonesToShow", (function() {
                    return this.get("milestonesToShow.length") > 6
                }))
            });
            t.StrawberryPostgameAchievementsComponent = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const {
                RunMixin: a
            } = n.EmberAddons.EmberLifeline, o = "/lol-summoner/v1/current-summoner", l = "/lol-lobby/v2/party/eog-status", i = n.Ember.Object.extend(n.Ember.PromiseProxyMixin);
            var r = n.Ember.Component.extend(a, {
                classNames: ["strawberry-postgame-root-component"],
                parties: n.Ember.inject.service(),
                postgame: n.Ember.inject.service(),
                gameflow: n.Ember.inject.service(),
                remedy: n.Ember.inject.service(),
                gameclientPostgame: n.Ember.inject.service(),
                gameDataService: n.Ember.inject.service("game-data"),
                strawberryService: n.Ember.inject.service("strawberry"),
                eogStats: n.Ember.computed.alias("postgame.eogStatsBlock"),
                eogPlayerStatsAsText: n.Ember.computed("postgame", (function() {
                    const e = this.get("postgame.eogStatsBlock");
                    let t = "";
                    if (e && e.localPlayer)
                        for (const s in e.localPlayer) t += `${s}: ${e.localPlayer[s]}<br/>`;
                    return t
                })),
                isCustomGame: n.Ember.computed.alias("postgame.isCustomGame"),
                gameMode: n.Ember.computed.alias("gameflow.gameflowSession.gameData.queue.gameMode"),
                shouldShowGameClientStats: n.Ember.computed("gameclientPostgame.lolGameClientStats", "postgame.eogStatsBlock", (function() {
                    return this.get("gameclientPostgame.lolGameClientStats") && !this.get("postgame.eogStatsBlock")
                })),
                gameId: n.Ember.computed("eogStats.gameId", "gameclientPostgame.lolGameClientStats.statsBlock.gameId", (function() {
                    let e = this.get("eogStats.gameId");
                    return e || (e = this.get("gameclientPostgame.lolGameClientStats.gameId")), e
                })),
                championDataProxy: n.Ember.computed("gameclientPostgame.lolGameClientStats.statsBlock.players.@each", (function() {
                    const e = this.get("gameclientPostgame.lolGameClientStats.statsBlock.players");
                    return e.length && i.create({
                        promise: Promise.all(e.map((async e => {
                            const t = e.championId,
                                s = e.championSkinId,
                                a = this.generateChampionDataId(t, s),
                                {
                                    skins: o
                                } = await n.ChampionAssetsManager.getChampionAssetsByChampionId(t);
                            let l;
                            const i = o.find((e => e.id === a || (e.chromas ? e.chromas.find((e => e.id === a)) : e.questSkinInfo ? (l = e.questSkinInfo.tiers.find((e => e.id === a)), !1) : void 0))),
                                r = i?.splashPath || l?.splashPath;
                            return {
                                tilePath: i?.tilePath || l?.tilePath,
                                skinSplashPath: r
                            }
                        })))
                    })
                })),
                eogChampionAssets: n.Ember.computed.alias("championDataProxy.content"),
                gameClientStats: n.Ember.computed("gameclientPostgame", "postgame.localSummoner.puuid", "eogChampionAssets", (function() {
                    const e = this.get("gameclientPostgame.lolGameClientStats"),
                        t = this.get("gameclientPostgame.lolGameClientStats.statsBlock.players"),
                        s = this.get("eogChampionAssets");
                    if (s?.length) return t.forEach((function(e, t) {
                        e.puuid = e.PUUID, e.summonerId = e.summonerId || e.playerId, e.stats = e.stats || {}, e.stats.PLAYER_SUBTEAM = e.subteamId, e.stats.PLAYER_SUBTEAM_PLACEMENT = e.subteamStanding, e.stats.TOTAL_DAMAGE_TAKEN = e.damageTaken, e.stats.TOTAL_DAMAGE_DEALT_TO_CHAMPIONS = e.damageDealtToChampions, e.stats.GOLD_EARNED = e.goldEarned, e.stats.CHAMPIONS_KILLED = e.playerKills, e.stats.NUM_DEATHS = e.playerDeaths, e.stats.ASSISTS = e.playerAssists, e.items = e.itemIds, e.level = e.championLevel, e.spell1Id = e.summonerSpell1, e.spell2Id = e.summonerSpell2, e.skinSplashPath = s[t].skinSplashPath, e.skinTilePath = s[t].tilePath, e.augments = e.augmentPlatformIds || []
                    }), this), e.toString()
                })),
                forwardButtonText: n.Ember.computed("selectedTab", (function() {
                    return this.get("tra.career_postgame_button_play_again")
                })),
                forwardHoverSound: "/fe/lol-postgame/sfx-nav-button-play-hover.ogg",
                forwardClickSound: "/fe/lol-postgame/sfx-nav-button-play-click.ogg",
                init() {
                    this._super(...arguments), this.binding = n.dataBinding.bindTo(n.socket), this.binding.observe(o, this, this._handleCurrentSummoner), this.binding.observe(l, this, this._handlePartyStatus), this.set("extEmberModel", n.extEmberModel), this.get("remedy"), this._handledPendingStrawberryRewardGrantsThisSession = {}
                },
                didInsertElement() {
                    this._super(...arguments)
                },
                willDestroyElement() {
                    this._super(...arguments), this.cancelTask(this._proceedToScoreboardTimer), this.binding.unobserve(o, this), this.binding.unobserve(l, this)
                },
                generateChampionDataId: function(e, t) {
                    return 1e3 * e + t
                },
                _handlePartyStatus(e) {
                    this.set("partyStatus", e)
                },
                _handleCurrentSummoner(e) {
                    const t = e.profileIconId || 0;
                    this.get("gameDataService").getSummonerIcon(t).then((e => {
                        const {
                            iconPath: t
                        } = e;
                        this.set("summonerIconPath", t)
                    }))
                },
                hasIntroAnimationPlayed: !1,
                animationsEnabled: n.Ember.computed("postgame.largeAreaAnimationsEnabled", "postgame.disableEogAnimations", (function() {
                    return this.get("postgame.largeAreaAnimationsEnabled") && !this.get("postgame.disableEogAnimations")
                })),
                willAnimate: n.Ember.computed("hasIntroAnimationPlayed", "animationsEnabled", (function() {
                    return !this.get("hasIntroAnimationPlayed") && this.get("animationsEnabled")
                })),
                animationObserver: n.Ember.on("didInsertElement", n.Ember.observer("animationsEnabled", (function() {
                    this.get("animationsEnabled") ? this.get("hasIntroAnimationPlayed") || n.Ember.run.scheduleOnce("afterRender", this, this._playIntroAnimation) : this.set("hasIntroAnimationPlayed", !1)
                }))),
                _playIntroAnimation() {
                    const e = new n.gsap.TimelineMax({
                        paused: !0
                    });
                    e.add((() => {
                        this.set("isAnimating", !0)
                    }), "start+=0.5"), e.add((() => {
                        this.set("hasIntroAnimationPlayed", !0)
                    }), "start+=4.0"), e.add((() => {
                        this.set("isAnimating", !1)
                    }), "start+=4.3"), e.play()
                },
                isTempPageNotAdded: n.Ember.computed.not("hasAddedTempPage"),
                hasPlayAgainOverride: n.Ember.computed("extEmberModel.playAgainOverride", "eogStats.gameId", (function() {
                    const e = this.get("extEmberModel.playAgainOverride"),
                        t = this.get("eogStats.gameId");
                    return !!t && e && e.gameflowGameId && e.navigationCallback && e.gameflowGameId === t
                })),
                _playAgain() {
                    if (this.get("hasPlayAgainOverride")) {
                        return this.get("extEmberModel.playAgainOverride").navigationCallback(), Promise.resolve()
                    }
                    return this.get("parties").playAgain()
                },
                _leavePostgame() {
                    (0, n.dataBinding)("/lol-end-of-game", n.socket).post("/v1/state/dismiss-stats")
                },
                _showVerbalAbuseRemedyModal() {
                    this.set("hasShownVerbalAbuseRemedyModal", !0), n.SharedPlayerBehaviorApps.showVerbalAbuseRemedyModal()
                },
                _claimGrant(e) {
                    return this.get("strawberryService").claimGrant(e)
                },
                grantsToDisplay: null,
                rewardGrantsObserver: n.Ember.on("didInsertElement", n.Ember.observer("strawberryService.grantLookupMap", "strawberryService.EoGNarrativeBarks", (function() {
                    const e = this.get("strawberryService.EoGNarrativeBarks") || [],
                        t = this.get("strawberryService.grantLookupMap") || {},
                        s = this.get("strawberryService.allStrawberryRewardGroupIds") || {};
                    let n = !1;
                    e.forEach((e => {
                        const s = t[e.RewardGroup.Id];
                        s && "PENDING_SELECTION" === s.info.status && (this._handledPendingStrawberryRewardGrantsThisSession[s.info.id] || (n = !0, this._claimGrant(s), this.set("barkData", e), this.send("openNarrativeLogsModal"), this._handledPendingStrawberryRewardGrantsThisSession[s.info.id] = !0))
                    }));
                    const a = [];
                    for (const e in t) {
                        if (this._handledPendingStrawberryRewardGrantsThisSession[e]) continue;
                        const n = t[e];
                        s[n.rewardGroup.id] && ("PENDING_SELECTION" === n.info.status && (a.push(n), this._handledPendingStrawberryRewardGrantsThisSession[e] = !0))
                    }
                    const o = this.get("grantsToDisplay") || [];
                    this.set("grantsToDisplay", o.concat(a)), n || a.forEach((e => {
                        this._claimGrant(e)
                    }))
                }))),
                actions: {
                    copyEOGDataToClipboard() {
                        const e = JSON.stringify(this.get("eogStats")),
                            t = document.createElement("textarea");
                        t.style.height = 0, t.style.position = "absolute", t.style.zIndex = -1, this.element.appendChild(t), t.value = e, t.focus(), t.select(), setTimeout((() => {
                            document.execCommand("copy"), this.element.removeChild(t)
                        }), 0)
                    },
                    exitPostgame() {
                        this.get("remedy").couldShowRemedyVerbalAbuseModal(this.get("gameId")) && !this.get("hasShownVerbalAbuseRemedyModal") ? this._showVerbalAbuseRemedyModal() : this._leavePostgame()
                    },
                    onButtonClick() {
                        this.get("remedy").couldShowRemedyVerbalAbuseModal(this.get("gameId")) && !this.get("hasShownVerbalAbuseRemedyModal") ? this._showVerbalAbuseRemedyModal() : this._playAgain().catch((() => {
                            this._leavePostgame()
                        }))
                    },
                    openNarrativeLogsModal() {
                        this.set("showMissionLogModal", !0)
                    },
                    closeNarrativeLogsModal() {
                        this.get("grantsToDisplay").forEach((e => {
                            this._claimGrant(e)
                        })), this.set("showMissionLogModal", !1)
                    }
                }
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = s(39),
                i = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var r = a.Ember.Component.extend(i.default, {
                classNames: ["strawberry-scoreboard-root-component"],
                gameflow: a.Ember.inject.service(),
                postgame: a.Ember.inject.service(),
                hasScoreboardAnimationPlayed: !1,
                hasCelebratedHonor: !1,
                isContinueButtonClicked: !1,
                showTeamIntroAnimation: !1,
                backgroundMusic: a.Ember.computed.alias("gameflow.map.assets.postgame-ambience-loop-sound"),
                init() {
                    this._super(...arguments), this.set("statSwitcherStatName1", o.STAT_SWITCHER_STATS.DAMAGE_DEALT), this.set("statSwitcherStatName2", o.STAT_SWITCHER_STATS.GOLD), a.Telemetry.startTracingEvent(l.TELEMETRY_EVENT_NAMES.TIME_ON_SCOREBOARD_SCREEN)
                },
                didInsertElement() {
                    this._super(...arguments), this.get("hasScoreboardAnimationPlayed") || a.Ember.run.scheduleOnce("afterRender", this, this._playScoreboardAnimation), this.addObserver("backgroundMusic", this, "_handleBackgroundMusic"), this._handleBackgroundMusic()
                },
                willDestroyElement() {
                    this._super(...arguments);
                    const e = this.get("animationTimeline");
                    e && e.kill(), a.Telemetry.endTracingEvent(l.TELEMETRY_EVENT_NAMES.TIME_ON_SCOREBOARD_SCREEN);
                    const t = this.get("_bgMusic");
                    t && t.fadeOut(void 0, {
                        stop: !0
                    }), this.removeObserver("backgroundMusic", this, "_handleBackgroundMusic")
                },
                addNonZeroStatOptions: (e, t, s) => t.concat(e.filter((e => !!s[e]))),
                animationsEnabled: a.Ember.computed("postgame.largeAreaAnimationsEnabled", "postgame.disableEogAnimations", (function() {
                    return this.get("postgame.largeAreaAnimationsEnabled") && !this.get("postgame.disableEogAnimations")
                })),
                statSwitcher1Options: a.Ember.computed("highestStatValueByStatMap", (function() {
                    const e = this.get("highestStatValueByStatMap");
                    return this.addNonZeroStatOptions([o.STAT_SWITCHER_STATS.CC_SCORE], [o.STAT_SWITCHER_STATS.DAMAGE_DEALT, o.STAT_SWITCHER_STATS.DAMAGE_TAKEN], e)
                })),
                statSwitcher2Options: a.Ember.computed("highestStatValueByStatMap", (function() {
                    const e = this.get("highestStatValueByStatMap");
                    return this.addNonZeroStatOptions([o.STAT_SWITCHER_STATS.VISION_SCORE], [o.STAT_SWITCHER_STATS.GOLD, o.STAT_SWITCHER_STATS.CREEP_SCORE], e)
                })),
                highestStatValueByStatMap: a.Ember.computed("eogStats.teams.players.@each.stats", (function() {
                    const e = {};
                    return this.get("eogStats.teams").forEach((t => {
                        t.players.forEach((t => {
                            t.stats && Object.values(o.STAT_SWITCHER_STATS).forEach((s => {
                                e[s] = Math.max(e[s] || 0, t.stats[s] || 0)
                            }))
                        }))
                    })), e
                })),
                _handleBackgroundMusic() {
                    this.get("backgroundMusic") && !this.get("_bgMusic") && this.set("_bgMusic", this.playBackgroundMusic(this.get("backgroundMusic")))
                },
                _playScoreboardAnimation() {
                    const e = this.$(".strawberry-scoreboard-root-content-container"),
                        t = a.gsap.Linear.easeNone;
                    if (this.get("animationsEnabled")) {
                        let s = this.get("animationTimeline");
                        s && s.isActive() && s.kill(), s = new a.gsap.TimelineMax({
                            paused: !0,
                            onComplete: () => {
                                this.sendAction("updateScoreboardAnimation", !0)
                            }
                        }), e && s.fromTo(e, .33, {
                            css: {
                                opacity: 0
                            },
                            ease: t
                        }, {
                            css: {
                                opacity: 1
                            }
                        }, "start+=0"), this.set("animationTimeline", s), s.play(), this.set("showTeamIntroAnimation", !0);
                        this.get("isContinueButtonClicked") || this.playSound("sfx-eog-chaos-order.ogg")
                    }
                },
                actions: {
                    setSelectedStat: function(e, t) {
                        this.set(`statSwitcherStatName${t}`, e)
                    },
                    updateHonorCelebrationAnimation(e) {
                        this.sendAction("updateHonorCelebrationAnimation", e)
                    }
                }
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["strawberry-scoreboard-header-component"],
                    classNameBindings: ["team.isPlayerTeam"],
                    showScoreboardColumnIcons: n.Ember.computed.equal("index", 0),
                    teamGoldLoc: n.Ember.computed("team.stats.GOLD_EARNED", "locale", (function() {
                        return (this.get("team.stats.GOLD_EARNED") || 0).toLocaleString(this.get("locale"))
                    })),
                    actions: {
                        selectStat: function(e, t) {
                            this.sendAction("setSelectedStat", e, t)
                        }
                    }
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(137),
                l = s(138),
                i = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var r = a.Ember.Component.extend(i.default, {
                classNames: ["strawberry-scoreboard-row-component"],
                classNameBindings: ["player.isLocalPlayer", "isLeaver:leaver", "team.isPlayerTeam:is-ally", "showNotInChat:not-in-chat"],
                endOfGameService: a.Ember.inject.service("end-of-game"),
                postgame: a.Ember.inject.service(),
                parties: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                playerActions: a.Ember.inject.service(),
                chatMessages: a.Ember.inject.service(),
                honor: a.Ember.inject.service(),
                challenges: a.Ember.inject.service(),
                currentLevel: a.Ember.computed.alias("topMostProgressedChallenge.currentLevel"),
                nextLevel: a.Ember.computed.alias("topMostProgressedChallenge.nextLevel"),
                isLeaver: a.Ember.computed.or("player.leaver", "player.wasAfk"),
                teamChoices: a.Ember.computed.readOnly("honor.teamChoices"),
                localPlayerChallengesData: a.Ember.computed.readOnly("challenges.localPlayerChallengesData"),
                isRowInitialized: !1,
                hasScoreboardAnimationPlayed: !1,
                hasCelebratedHonor: !1,
                animationsEnabled: !0,
                init: function() {
                    this._super(...arguments), this.challengesBinding = (0, a.dataBinding)("/lol-challenges", a.socket), this.setupUpdatedChallengeListener(this.get("player")), this._initializeAnimationData()
                },
                willDestroyElement: function() {
                    this._super(...arguments), this.challengesBinding.unobserve(this.updatedChallengesPath, this)
                },
                setupUpdatedChallengeListener(e) {
                    return (0, a.dataBinding)("/lol-summoner").get(`/v1/summoners/${e.summonerId}`).then((e => {
                        if (e) {
                            const {
                                puuid: t,
                                gameName: s,
                                tagLine: n
                            } = e;
                            this.set("puuid", t), this.set("gameName", s), this.set("tagLine", n);
                            const a = this.get("gameId");
                            this.updatedChallengePath = `/lol-challenges/v1/updated-challenges/${a}/${t}`, this.challengesBinding.observe(`/v1/updated-challenges/${a}/${t}`, this, this.handleUpdatedChallenge)
                        }
                    }))
                },
                handleUpdatedChallenge(e) {
                    this.set("updatedChallenges", e)
                },
                isPlayerMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isPlayerMuted)
                })),
                isSettingsMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isSettingsMuted)
                })),
                isSystemMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isSystemMuted)
                })),
                isPlayerMuteNotToggleable: a.Ember.computed.or("isSettingsMuted", "isSystemMuted"),
                isPlayerMuteToggleable: a.Ember.computed.not("isPlayerMuteNotToggleable"),
                showPlayerMute: a.Ember.computed("isPlayerMuted", "isSettingsMuted", (function() {
                    const e = this.get("isPlayerMuted"),
                        t = this.get("isSettingsMuted"),
                        s = this.get("isSystemMuted"),
                        n = t || e || s;
                    return this.animateMuteStatusUpdate(n), n
                })),
                topMostProgressedChallenge: a.Ember.computed("updatedChallenges", (function() {
                    const e = this.get("updatedChallenges") || {},
                        t = Object.values(e).filter((e => !e.isCapstone));
                    return (0, o.getFirstChallengeSlotScore)(t)
                })),
                showChallengeTooltipComparison: a.Ember.computed("localPlayerChallengesData", "isLocalPlayer", (function() {
                    const e = this.get("isLocalPlayer");
                    return this.get("localPlayerChallengesData") && !e
                })),
                updatedChallengeIcon: a.Ember.computed("topMostProgressedChallenge.levelToIconPath", "currentLevel", "nextLevel", (function() {
                    const e = this.get("topMostProgressedChallenge.levelToIconPath") || {},
                        t = this.get("currentLevel");
                    return e[t !== a.SharedChallengesConstants.CHALLENGE_LEVELS.NONE ? t : this.get("nextLevel")] || ""
                })),
                isInChatRoom: a.Ember.computed("chatMessages.summonerIdsInChat", "player.summonerId", (function() {
                    const e = this.get("player.summonerId");
                    return (this.get("chatMessages.summonerIdsInChat") || []).includes(e)
                })),
                showNotInChat: a.Ember.computed("isInChatRoom", "postgame.isLocalPlayerInGame", (function() {
                    const e = this.get("isInChatRoom"),
                        t = this.get("postgame.isLocalPlayerInGame");
                    return !e && t
                })),
                displayedPosition: a.Ember.computed("player.detectedPosition", "player.selectedPosition", (function() {
                    const e = this.get("player.detectedPosition"),
                        t = this.get("player.selectedPosition"),
                        s = (e || t || "").toLowerCase();
                    return "none" === s ? "" : s
                })),
                displayedPositionTranslatedText: a.Ember.computed("tra", "displayedPosition", (function() {
                    const e = this.get("displayedPosition");
                    return e ? this.get("tra").get(`postgame_scoreboard_lane_position_name_${e}`) : ""
                })),
                skinSplashStyle: a.Ember.computed("player.skinSplashPath", (function() {
                    return `background-image: url(${this.get("player.skinSplashPath")})`
                })),
                shouldShowButtons: a.Ember.computed("player.botPlayer", "player.isLocalPlayer", (function() {
                    return !this.get("player.botPlayer") && !this.get("player.isLocalPlayer")
                })),
                isFriendRequestDisabled: a.Ember.computed("player.summondId", "postgame.friendsList.[]", "playerActions.alreadyFriendRequestedList.[]", (function() {
                    const e = this.get("player.summonerId"),
                        t = this.get("playerActions.alreadyFriendRequestedList") || [],
                        s = this.get("postgame.friendsList") || [],
                        n = Boolean(s.find((t => t.summonerId === e))),
                        a = Boolean(t.find((t => t.summonerId === e)));
                    return n || a
                })),
                isReportDisabled: a.Ember.computed("gameflow.isCustomGame", "player.puuid", "endOfGameService.reportedPlayers.[]", (function() {
                    if (this.get("gameflow.isCustomGame")) return !0;
                    const e = this.get("player.puuid");
                    return (this.get("endOfGameService.reportedPlayers") || []).includes(e)
                })),
                isInviteDisabled: a.Ember.computed("team.isPlayerTeam", "parties.enabled", "gameflow.canInviteOthersAtEog", "gameflow.lastQueuedMemberSummonerIds.[]", "player.summonerId", (function() {
                    return !(this.get("team.isPlayerTeam") && this.get("parties.enabled") && this.get("gameflow.canInviteOthersAtEog") && this.get("gameflow.lastQueuedMemberSummonerIds") && -1 === this.get("gameflow.lastQueuedMemberSummonerIds").indexOf(this.get("player.summonerId")))
                })),
                isPlayerBlocked: a.Ember.computed("playerActions.blockedPlayersList", "player.summonerId", (function() {
                    const e = this.get("playerActions.blockedPlayerList") || [],
                        t = this.get("player.summonerId");
                    return Boolean(e.find((e => e.summonerId === t)))
                })),
                flyoutOptions: a.Ember.computed("player", (function() {
                    return {
                        targetAnchor: {
                            x: "center",
                            y: "center"
                        },
                        tooltipAnchor: {
                            x: "center",
                            y: "center"
                        },
                        offset: {
                            x: -30,
                            y: 110
                        },
                        backdropCutout: null,
                        orientation: "right",
                        animated: !1,
                        caretless: !0,
                        closeWhenInsideClicked: !0
                    }
                })),
                shouldShowPlayerHonorComponent: a.Ember.computed("postgame.isLocalPlayerInGame", "honor.enabled", "isLeaver", "teamChoices.[]", "player.summonerId", (function() {
                    const e = this.get("teamChoices"),
                        t = this.get("player.puuid"),
                        s = this.get("postgame.isLocalPlayerInGame"),
                        n = this.get("honor.enabled"),
                        a = this.get("isLeaver");
                    return e && e.includes(t) && s && n && !a
                })),
                paredItems: a.Ember.computed("player.items", (function() {
                    return this.get("player.items").slice(0, 5)
                })),
                playerAugments: a.Ember.computed("player.stats", (function() {
                    const e = [],
                        t = this.get("player.stats");
                    for (let s = 1; s <= 6; ++s) {
                        const n = `PLAYER_AUGMENT_${s}`;
                        Object.prototype.hasOwnProperty.call(t, n) && e.push(t[n])
                    }
                    return e
                })),
                _initializeAnimationData() {
                    a.gsapCustomEase.create("muteIn", " M 0,0 C0.11,-0.56 0.18,1.11 0.5,1.11 0.61,1.06 0.68,1 1,1"), a.gsapCustomEase.create("muteOut", "M 0,0 C0.66,0 0.86,0 1,1")
                },
                animateMuteStatusUpdate(e) {
                    const t = this.element.querySelector("#mute-indicator");
                    if (!t) return;
                    this.get("isRowInitialized") ? this.animateMuteStatusToggle(e, t) : this.animateMuteStatusInit(e, t), this.set("prevIsPlayerMuted", e)
                },
                animateMuteStatusInit(e, t) {
                    this.set("isRowInitialized", !0), e ? a.gsap.to(t, 0, {
                        scale: 1
                    }) : a.gsap.to(t, 0, {
                        scale: 0
                    })
                },
                animateMuteStatusToggle(e, t) {
                    this.get("prevIsPlayerMuted") !== e && (e ? a.gsap.fromTo(t, .3, {
                        scale: 0
                    }, {
                        ease: "muteIn",
                        scale: 1
                    }) : a.gsap.fromTo(t, .3, {
                        scale: 1
                    }, {
                        ease: "muteOut",
                        scale: 0
                    }))
                },
                _getMuteStatus(e) {
                    const t = this.get("player.puuid"),
                        s = this.get("postgame.playerMuteStatus");
                    return !(!s || !(t in s)) && s[t][e]
                },
                actions: {
                    showPlayerActionsMenu: function() {
                        this.set("isPlayerActionsMenuOpen", !0)
                    },
                    hidePlayerActionsMenu: function() {
                        this.set("isPlayerActionsMenuOpen", !1)
                    },
                    sendFriendRequest: function(e) {
                        this.get("playerActions").sendFriendRequest(e?.riotIdGameName, e?.riotIdTagLine, e?.puuid), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    inviteToParty: function(e) {
                        this.get("playerActions").inviteToParty(e)
                    },
                    showReportDialog: function(e) {
                        a.SharedReportModalApps.showReportModal(e, e.championSquarePortraitPath, "LOL"), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    confirmBlockPlayer: function(e) {
                        this.get("playerActions").confirmBlockPlayer(e?.riotIdGameName, e?.riotIdTagLine, e.summonerId)
                    },
                    viewProfile: function(e) {
                        this.get("playerActions").viewProfile(e.summonerId)
                    },
                    importItemSet: function(e) {
                        this.get("playerActions").importItemSet(e)
                    },
                    togglePlayerMute: function(e) {
                        const t = this.get("isPlayerMuted") || !1,
                            s = this.get("chatMessages"),
                            n = e.displayName.playerNameFull,
                            a = e.puuid;
                        s.updatePlayerMute(a, n, !t)
                    },
                    updateHonorCelebrationAnimation(e) {
                        this.sendAction("updateHonorCelebrationAnimation", e)
                    }
                }
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.calculateEoGChallengeSlots = function(e, t, s) {
                const n = [...Array(s).map((e => null))];
                if (!e.length && !t.length) return n;
                for (let a = 0; a < s; a++) {
                    if (a === s - 1) {
                        n[a] = t.length >= 1 ? g(t) : h(e, a) || null;
                        break
                    }
                    n[a] = h(e, a) || null
                }
                return n
            }, t.getFirstChallengeSlotScore = h, t.sortChallengeUpdatesDesc = function(e, t) {
                const s = p(e);
                return p(t) - s
            }, t.sortEternalUpdatesDesc = function(e, t) {
                const s = d(e);
                return d(t) - s
            }, t.sortGroupedChallengeUpdates = function(e, t) {
                const s = i[t.currentLevel] - i[e.currentLevel],
                    n = u(t) - u(e),
                    a = p(t) - p(e),
                    o = e.id - t.id;
                return s || n || a || o
            };
            var n = s(1);
            const a = 10,
                o = 50,
                l = 100,
                i = n.SharedChallengesConstants.CHALLENGE_LEVEL_TO_ORDINAL,
                r = {
                    NONE: 1,
                    IRON: 2,
                    BRONZE: 3,
                    SILVER: 5,
                    GOLD: 8,
                    PLATINUM: 13,
                    DIAMOND: 21,
                    MASTER: 1,
                    GRANDMASTER: 1,
                    CHALLENGER: 1
                },
                m = [{
                    TEAMWORK: 10,
                    EXPERTISE: 5,
                    IMAGINATION: 3,
                    VETERANCY: 1
                }, {
                    EXPERTISE: 10,
                    TEAMWORK: 5,
                    IMAGINATION: 3,
                    VETERANCY: 1
                }, {
                    IMAGINATION: 10,
                    EXPERTISE: 5,
                    TEAMWORK: 3,
                    VETERANCY: 1
                }, {
                    VETERANCY: 13,
                    EXPERTISE: 8,
                    TEAMWORK: 5,
                    IMAGINATION: 3
                }, {
                    TEAMWORK: 10,
                    EXPERTISE: 8,
                    IMAGINATION: 6,
                    VETERANCY: 3
                }],
                c = [1, 3, 5, 8, 13];

            function d(e) {
                let t = 0;
                const s = e.level >= c.length ? 1 : c[e.level],
                    n = 1 + (parseFloat(e.newProgressPercent) || 0) / 100,
                    a = Boolean(e.isMilestone),
                    i = Boolean(e.isNewBest);
                return t = a ? s * n * o : s * n, i ? t * l : t
            }

            function p(e, t = null) {
                let s = 0;
                const n = null !== t ? m[t][e.category] : 1,
                    o = r[e.currentLevel],
                    l = e.nextThreshold - e.currentThreshold,
                    i = 1 + (e.currentValue - e.currentThreshold) / l;
                s = e.currentLevel !== e.previousLevel ? n * o * a : n * o * i;
                return (e.priority || 1) * s
            }

            function u(e) {
                const t = e.currentLevel !== e.previousLevel,
                    s = e.nextThreshold - e.currentThreshold,
                    n = e.currentValue - e.currentThreshold;
                return t ? 0 : 1 + n / s
            }

            function g(e) {
                return e.sort(((e, t) => {
                    const s = d(e);
                    return d(t) - s
                })).shift()
            }

            function h(e, t) {
                return e.sort(((e, s) => {
                    const n = p(e, t);
                    return p(s, t) - n
                })).shift()
            }
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MUTE_TYPES = void 0;
            t.MUTE_TYPES = {
                isPlayerMuted: "isPlayerMuted",
                isSettingsMuted: "isSettingsMuted",
                isSystemMuted: "isSystemMuted"
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const {
                RunMixin: a
            } = n.EmberAddons.EmberLifeline;
            var o = n.Ember.Component.extend(a, {
                classNames: ["render-timer-component"],
                gameflow: n.Ember.inject.service(),
                didInsertElement: function() {
                    this._super(...arguments);
                    const e = this.get("renderAfterMs");
                    e && (this._renderAfterTimer = this.runTask((() => {
                        this.set("isTimeToShow", !0);
                        const e = this.get("buttonRenderedName"),
                            t = {
                                game_id: this.get("gameflow.api.paths.root.api.paths.root.gameflowSession.gameData.gameId")
                            };
                        "skipWaitingForStats" === e ? n.TelemetryService.sendTelemetryEvent("eog_screen", "skipDisplayed", "postgame", t) : "skipWaitingForHonor" === e ? n.TelemetryService.sendTelemetryEvent("eog_screen", "skipHonorDisplayed", "postgame", t) : "skipWaitingForChallenges" === e ? n.TelemetryService.sendTelemetryEvent("eog_screen", "skipChallengesDisplayed", "postgame", t) : "skipWaitingForMissions" === e ? n.TelemetryService.sendTelemetryEvent("eog_screen", "skipMissionsDisplayed", "postgame", t) : "skipWaitingForRanked" === e && n.TelemetryService.sendTelemetryEvent("eog_screen", "skipRankedDisplayed", "postgame", t)
                    }), e));
                    const t = this.get("renderForMs");
                    t && (this.set("isTimeToShow", !0), this._renderForTimer = this.runTask((() => this.set("isTimeToShow", !1)), t))
                },
                willDestroyElement: function() {
                    this._super(...arguments), this.cancelTask(this._renderAfterTimer), this.cancelTask(this._renderForTimer)
                }
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["progression-modal-eternals-token-container"],
                    index: null,
                    isNewMilestone: n.Ember.computed.bool("eternal.isMilestone"),
                    eternalLevel: n.Ember.computed.alias("eternal.level"),
                    isLevelFiveOrGreater: n.Ember.computed("eternalLevel", (function() {
                        return (this.get("eternalLevel") || 0) >= n.SharedChallengesConstants.REKINDLED_MILESTONE_MARKER
                    })),
                    isPersonalBest: n.Ember.computed.and("eternal.isNewBest", "isLevelFiveOrGreater"),
                    headerValue: n.Ember.computed("isLevelFiveOrGreater", "eternalLevel", (function() {
                        const e = this.get("eternalLevel");
                        return this.get("isLevelFiveOrGreater") ? e : `${e}/${n.SharedChallengesConstants.REKINDLED_MILESTONE_MARKER}`
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(4),
                o = s(39);
            const {
                RunMixin: l
            } = n.EmberAddons.EmberLifeline, i = "/lol-summoner/v1/current-summoner", r = "/lol-lobby/v2/party/eog-status", m = "PROGRESSION", c = "SCOREBOARD", d = n.Ember.Object.extend(n.Ember.PromiseProxyMixin);
            var p = n.Ember.Component.extend(l, {
                classNames: ["postgame-root-component"],
                classNameBindings: ["willAnimate:animating"],
                parties: n.Ember.inject.service(),
                postgame: n.Ember.inject.service(),
                gameflow: n.Ember.inject.service(),
                eternals: n.Ember.inject.service(),
                remedy: n.Ember.inject.service(),
                gameclientPostgame: n.Ember.inject.service(),
                gameDataService: n.Ember.inject.service("game-data"),
                perks: n.Ember.inject.service(),
                hasScoreboardAnimationPlayed: !1,
                hasCelebratedHonor: !1,
                isContinueButtonClicked: !1,
                hasShownVerbalAbuseRemedyModal: !1,
                eogStats: n.Ember.computed.alias("postgame.eogStatsBlock"),
                isCustomGame: n.Ember.computed.alias("postgame.isCustomGame"),
                gameMode: n.Ember.computed.alias("gameflow.gameflowSession.gameData.queue.gameMode"),
                shouldShowAdvancedDetailsButton: n.Ember.computed("gameMode", (function() {
                    return this.get("gameMode") !== a.GAME_MODES.CHERRY
                })),
                shouldHideChatRoom: n.Ember.computed("gameMode", (function() {
                    return this.get("gameMode") === a.GAME_MODES.CHERRY
                })),
                shouldShowGameClientStats: n.Ember.computed("gameclientPostgame.lolGameClientStats", "postgame.eogStatsBlock", (function() {
                    return this.get("gameclientPostgame.lolGameClientStats") && !this.get("postgame.eogStatsBlock")
                })),
                gameId: n.Ember.computed("eogStats.gameId", "gameclientPostgame.lolGameClientStats.statsBlock.gameId", (function() {
                    let e = this.get("eogStats.gameId");
                    return e || (e = this.get("gameclientPostgame.lolGameClientStats.gameId")), e
                })),
                championDataProxy: n.Ember.computed("gameclientPostgame.lolGameClientStats.statsBlock.players.@each", (function() {
                    const e = this.get("gameclientPostgame.lolGameClientStats.statsBlock.players");
                    return e.length && d.create({
                        promise: Promise.all(e.map((async e => {
                            const t = e.championId,
                                s = e.championSkinId,
                                a = this.generateChampionDataId(t, s),
                                {
                                    skins: o
                                } = await n.ChampionAssetsManager.getChampionAssetsByChampionId(t);
                            let l;
                            const i = o.find((e => e.id === a || (e.chromas ? e.chromas.find((e => e.id === a)) : e.questSkinInfo ? (l = e.questSkinInfo.tiers.find((e => e.id === a)), !1) : void 0))),
                                r = i?.splashPath || l?.splashPath;
                            return {
                                tilePath: i?.tilePath || l?.tilePath,
                                skinSplashPath: r
                            }
                        })))
                    })
                })),
                eogChampionAssets: n.Ember.computed.alias("championDataProxy.content"),
                roomChangedMessages: n.Ember.computed("postgame.eogStatsBlock.teams", (function() {
                    const e = this.get("postgame.eogStatsBlock.teams"),
                        t = [];
                    if (!e) return "";
                    for (const s of e)
                        for (const e of s.players ?? [])
                            if (e?.botPlayer) {
                                const s = n.playerNames.formatPlayerName({
                                    gameName: e.riotIdGameName ?? "",
                                    tagLine: e.riotIdTagLine ?? "",
                                    summonerName: e.riotIdGameName ?? ""
                                }).playerNameFull;
                                t.push(this.get("tra").formatString("postgame_chat_bot_joined_room", {
                                    actor: s
                                }))
                            } return 0 === t.length ? "" : JSON.stringify(t)
                })),
                gameClientStats: n.Ember.computed("gameclientPostgame", "postgame.localSummoner.puuid", "eogChampionAssets", (function() {
                    const e = this.get("postgame.localSummoner.puuid"),
                        t = [],
                        s = this.get("gameclientPostgame.lolGameClientStats"),
                        n = this.get("gameclientPostgame.lolGameClientStats.statsBlock.players"),
                        a = this.get("eogChampionAssets"),
                        o = this.get("gameId");
                    if (a?.length) return n.forEach((function(s, n) {
                        const l = s.subteamId - 1;
                        t[l] = t[l] || {}, s.puuid = s.PUUID, s.summonerId = s.summonerId || s.playerId, s.stats = s.stats || {}, s.stats.PLAYER_SUBTEAM = s.subteamId, s.stats.PLAYER_SUBTEAM_PLACEMENT = s.subteamStanding, s.stats.TOTAL_DAMAGE_TAKEN = s.damageTaken, s.stats.TOTAL_DAMAGE_DEALT_TO_CHAMPIONS = s.damageDealtToChampions, s.stats.GOLD_EARNED = s.goldEarned, s.stats.CHAMPIONS_KILLED = s.playerKills, s.stats.NUM_DEATHS = s.playerDeaths, s.stats.ASSISTS = s.playerAssists, s.items = s.itemIds, s.level = s.championLevel, s.spell1Id = s.summonerSpell1, s.spell2Id = s.summonerSpell2, s.skinSplashPath = a[n].skinSplashPath, s.skinTilePath = a[n].tilePath, s.augments = s.augmentPlatformIds || [], s.gameId = o, s.isLocalPlayer = s.PUUID === e, t[l].players = t[l].players || [], t[l].players.push(s)
                    }), this), t.forEach((n => n.players.forEach((function(n) {
                        const a = n.subteamId - 1;
                        t[a].stats = t[a].stats || {}, t[a].stats.PLAYER_SUBTEAM = n.subteamId, t[a].stats.PLAYER_SUBTEAM_PLACEMENT = n.subteamStanding, t[a].stats ? t[a].stats = this.sumStatsByKey(t[a].stats, n.stats) : t[a].stats = Object.assign({}, n.stats), e === n.PUUID && (s.localPlayer = n)
                    }), this)), this), t.sort((function(e, t) {
                        return e.stats.PLAYER_SUBTEAM_PLACEMENT - t.stats.PLAYER_SUBTEAM_PLACEMENT
                    })), s.teams = t, s
                })),
                isDetailsTabOpen: !1,
                tabDefinitions: [{
                    name: "progression",
                    value: m
                }, {
                    name: "scoreboard",
                    value: c
                }],
                tabs: n.Ember.computed("selectedTab", "isCustomGame", "gameMode", (function() {
                    const e = [],
                        t = this.get("selectedTab"),
                        s = this.get("tabDefinitions"),
                        n = this.get("isCustomGame"),
                        o = this.get("gameMode") === a.GAME_MODES.CHERRY;
                    return s.forEach((s => {
                        (n || o) && s.value === m || e.push({
                            name: this.get(`tra.career_postgame_tab_${s.name}_name`),
                            value: s.value,
                            selected: s.value === t
                        })
                    })), e
                })),
                selectedTab: n.Ember.computed("isCustomGame", "gameMode", (function() {
                    const e = this.get("isCustomGame"),
                        t = this.get("gameMode") === a.GAME_MODES.CHERRY;
                    return e || t ? c : m
                })),
                isProgressionTabSelected: n.Ember.computed.equal("selectedTab", m),
                isScoreboardTabSelected: n.Ember.computed.equal("selectedTab", c),
                forwardButtonText: n.Ember.computed("selectedTab", "postgame.isClash", (function() {
                    const e = this.get("isProgressionTabSelected"),
                        t = this.get("postgame.isClash");
                    return e || t ? this.get("tra.career_postgame_button_continue") : this.get("tra.career_postgame_button_play_again")
                })),
                forwardHoverSound: "/fe/lol-postgame/sfx-nav-button-play-hover.ogg",
                forwardClickSound: "/fe/lol-postgame/sfx-nav-button-play-click.ogg",
                init() {
                    this._super(...arguments), this.binding = n.dataBinding.bindTo(n.socket), this.binding.observe(i, this, this._handleCurrentSummoner), this.binding.observe(r, this, this._handlePartyStatus), this.set("modalDoneShowing", !1), this.set("extEmberModel", n.extEmberModel), this.get("remedy"), n.TelemetryService.startTelemetryTimerEvent("eog_tabs")
                },
                didInsertElement() {
                    this._super(...arguments), this._startCountdown(), n.Telemetry.startTracingEvent(o.TELEMETRY_EVENT_NAMES.RENDER_PROGRESSION_SCREEN), n.Ember.run.scheduleOnce("afterRender", this, (() => {
                        n.Telemetry.endTracingEvent(o.TELEMETRY_EVENT_NAMES.RENDER_POST_GAME), n.Telemetry.startTracingEvent(o.TELEMETRY_EVENT_NAMES.TIME_ON_EOG)
                    }))
                },
                willDestroyElement() {
                    this._super(...arguments), this.cancelTask(this._proceedToScoreboardTimer), n.Telemetry.endTracingEvent(o.TELEMETRY_EVENT_NAMES.TIME_ON_EOG), this._observedUpdateChallengesPath && this.binding.unobserve(this._observedUpdateChallengesPath, this), this.binding.unobserve(i, this), this.binding.unobserve(r, this), n.TelemetryService.stopTelemetryTimerEvent("eog_tabs", "timeSpent", "postgame", {
                        game_id: this.get("gameflow.gameflowSession.gameData.gameId")
                    })
                },
                sumStatsByKey: function(e, t) {
                    return Object.keys(t).forEach((function(s) {
                        s.includes("PLAYER_SUBTEAM") || (e[s] = e[s] || 0, e[s] = e[s] + t[s])
                    })), e
                },
                generateChampionDataId: function(e, t) {
                    return 1e3 * e + t
                },
                gameIdObserver: n.Ember.on("init", n.Ember.observer("eogStats.gameId", (function() {
                    const e = this.get("eogStats.gameId");
                    e && (this._observedUpdateChallengesPath && (this.binding.unobserve(this._observedUpdateChallengesPath, this), this._observedUpdateChallengesPath = null), this._observedUpdateChallengesPath = `/lol-challenges/v1/my-updated-challenges/${e}`, this.binding.observe(this._observedUpdateChallengesPath, this, this._handleUpdatedChallenges))
                }))),
                _handleUpdatedChallenges(e) {
                    e && this.set("updatedChallengesList", Object.values(e))
                },
                _handlePartyStatus(e) {
                    this.set("partyStatus", e)
                },
                _handleCurrentSummoner(e) {
                    const t = e.profileIconId || 0;
                    this.get("gameDataService").getSummonerIcon(t).then((e => {
                        const {
                            iconPath: t
                        } = e;
                        this.set("summonerIconPath", t)
                    }))
                },
                hasIntroAnimationPlayed: !1,
                animationsEnabled: n.Ember.computed("postgame.largeAreaAnimationsEnabled", "postgame.disableEogAnimations", (function() {
                    return this.get("postgame.largeAreaAnimationsEnabled") && !this.get("postgame.disableEogAnimations")
                })),
                willAnimate: n.Ember.computed("hasIntroAnimationPlayed", "animationsEnabled", (function() {
                    return !this.get("hasIntroAnimationPlayed") && this.get("animationsEnabled")
                })),
                animationObserver: n.Ember.on("didInsertElement", n.Ember.observer("animationsEnabled", "isProgressionTabSelected", "modalDoneShowing", (function() {
                    this.get("animationsEnabled") && this.get("modalDoneShowing") ? this.get("isProgressionTabSelected") && (this.get("hasIntroAnimationPlayed") || n.Ember.run.scheduleOnce("afterRender", this, this._playIntroAnimation)) : this.set("hasIntroAnimationPlayed", !1)
                }))),
                _playIntroAnimation() {
                    const e = new n.gsap.TimelineMax({
                        paused: !0
                    });
                    e.add((() => {
                        this.set("isAnimating", !0)
                    }), "start+=0.5"), e.add((() => {
                        this.set("hasIntroAnimationPlayed", !0)
                    }), "start+=4.0"), e.add((() => {
                        this.set("isAnimating", !1)
                    }), "start+=4.3"), e.play()
                },
                _playOutlineAnimation() {
                    const e = this.element.querySelector("#lottie-outline-anim");
                    e && e.animation && (e.animation.stop(), e.animation.play())
                },
                _selectTab(e) {
                    this.set("selectedTab", e)
                },
                timer: null,
                hasTimer: n.Ember.computed("timer", (function() {
                    return null !== this.get("timer")
                })),
                _startCountdown() {
                    this._proceedToScoreboardTimer && this.cancelTask(this._proceedToScoreboardTimer), this.get("isCustomGame") || (this._proceedToScoreboardTimer = this.runTask((() => {
                        this._selectTab(c), this._stopCountdown()
                    }), 12e4), this.set("timer", !0), this._animateCountdownMeter(119.75))
                },
                _stopCountdown() {
                    this._proceedToScoreboardTimer && this.cancelTask(this._proceedToScoreboardTimer), this.set("timer", null)
                },
                _animateCountdownMeter(e) {
                    const t = this.element.querySelector(".career-postgame-countdown-meter");
                    let s = this.get("timeAnimationTween");
                    s ? s.play(0) : (s = n.gsap.TweenLite.to(t, e, {
                        css: {
                            scaleX: 0
                        },
                        ease: "Linear.easeNone"
                    }), this.set("timeAnimationTween", s))
                },
                showAddPerksPageButton: n.Ember.computed("perks.isCurrentPageTemporary", "perks.isCustomPageCreationUnlocked", "hasAddedTempPage", "gameMode", (function() {
                    const e = this.get("perks.isCurrentPageTemporary"),
                        t = this.get("perks.isCustomPageCreationUnlocked"),
                        s = this.get("hasAddedTempPage");
                    return !(this.get("gameMode") === a.GAME_MODES.CHERRY) && t && (e || s)
                })),
                isTempPageNotAdded: n.Ember.computed.not("hasAddedTempPage"),
                addPerksPageButtonEnabled: n.Ember.computed.and("perks.canAddCustomPage", "isTempPageNotAdded"),
                addRunePageButtonDisabledText: n.Ember.computed("perks.canAddCustomPage", "hasAddedTempPage", (function() {
                    return this.get("hasAddedTempPage") ? this.get("tra.perks_add_rune_page_button_disabled_already_added") : this.get("tra.perks_add_rune_page_button_disabled_max_pages")
                })),
                hasPlayAgainOverride: n.Ember.computed("extEmberModel.playAgainOverride", "eogStats.gameId", (function() {
                    const e = this.get("extEmberModel.playAgainOverride"),
                        t = this.get("eogStats.gameId");
                    return !!t && e && e.gameflowGameId && e.navigationCallback && e.gameflowGameId === t
                })),
                _playAgain() {
                    if (this.get("hasPlayAgainOverride")) {
                        return this.get("extEmberModel.playAgainOverride").navigationCallback(), Promise.resolve()
                    }
                    return this.get("parties").playAgain()
                },
                _leavePostgame: () => (0, n.dataBinding)("/lol-end-of-game", n.socket).post("/v1/state/dismiss-stats"),
                _showVerbalAbuseRemedyModal() {
                    this.set("hasShownVerbalAbuseRemedyModal", !0), n.SharedPlayerBehaviorApps.showVerbalAbuseRemedyModal()
                },
                actions: {
                    exitPostgame() {
                        this.get("remedy").couldShowRemedyVerbalAbuseModal(this.get("gameId")) && !this.get("hasShownVerbalAbuseRemedyModal") ? this._showVerbalAbuseRemedyModal() : (n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_EXIT, {
                            game: {
                                key: a.GAME_CONTEXT_KEYS.LEAGUE_OF_LEGENDS
                            },
                            start: {
                                source: "eog-screen"
                            }
                        }), this._leavePostgame().then((() => {
                            const e = {
                                stop: {
                                    source: "lol-exit-postgame"
                                }
                            };
                            n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_EXIT, e), n.datadogRum.stopOperationWithAbort(n.datadogRum.XP_CGL_POSTGAME, e)
                        })).catch((e => {
                            const t = {
                                stop: {
                                    source: "failed-lol-exit-postgame"
                                }
                            };
                            n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME_EXIT, e, t), n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME, e, t)
                        })))
                    },
                    onButtonClick() {
                        const e = this.get("remedy");
                        this.get("isProgressionTabSelected") ? (this.set("isContinueButtonClicked", !0), this._selectTab(c), this._stopCountdown()) : e.couldShowRemedyVerbalAbuseModal(this.get("gameId")) && !this.get("hasShownVerbalAbuseRemedyModal") ? this._showVerbalAbuseRemedyModal() : (n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_PLAY_AGAIN, {
                            game: {
                                key: a.GAME_CONTEXT_KEYS.LEAGUE_OF_LEGENDS
                            },
                            start: {
                                source: "lol-scoreboard"
                            }
                        }), this._playAgain().then((() => {
                            const e = {
                                stop: {
                                    source: "lol-play-again"
                                }
                            };
                            n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME_PLAY_AGAIN, e), n.datadogRum.stopOperationWithOk(n.datadogRum.XP_CGL_POSTGAME, e)
                        })).catch((e => {
                            const t = {
                                game: {
                                    key: a.GAME_CONTEXT_KEYS.LEAGUE_OF_LEGENDS
                                },
                                start: {
                                    source: "failed-lol-play-again"
                                }
                            };
                            n.datadogRum.startOperation(n.datadogRum.XP_CGL_POSTGAME_EXIT, t), n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME_PLAY_AGAIN, e, t), this._leavePostgame().then((() => {
                                const e = {
                                    stop: {
                                        source: "exit-postgame-after-failed-lol-play-again"
                                    }
                                };
                                n.datadogRum.stopOperationWithUnset(n.datadogRum.XP_CGL_POSTGAME, e), n.datadogRum.stopOperationWithUnset(n.datadogRum.XP_CGL_POSTGAME_EXIT, e)
                            })).catch((e => {
                                const t = {
                                    stop: {
                                        source: "exit-postgame-after-failed-lol-play-again"
                                    }
                                };
                                n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME, e, t), n.datadogRum.stopOperationWithError(n.datadogRum.XP_CGL_POSTGAME_EXIT, e, t)
                            }))
                        })))
                    },
                    handleTabSelected(e) {
                        e && (this.get("selectedTab") !== e && this._selectTab(e), e === c && this._stopCountdown())
                    },
                    displayAdvancedDetails: function() {
                        const e = () => this.set("isDetailsTabOpen", !1);
                        let t = ["stats", "graph", "runes"];
                        this.get("gameMode") === a.GAME_MODES.JADE && (t = ["stats", "graph"]), (0, n.getProvider)().getOptional("rcp-fe-lol-match-history").then((s => {
                            s.displayMatchDetails({
                                sections: t,
                                defaultSection: "stats",
                                dataSource: "eogStats",
                                hideHeader: !0,
                                gameMode: this.get("gameMode"),
                                closeModalCallback: e
                            })
                        }), (e => n.logger.error("Provider getOptional failure", e))), this.set("isDetailsTabOpen", !0), this.get("postgame").trigger("advancedDetailsDisplayed"), n.TelemetryService.sendTelemetryEvent("eog_advDetails", "featureClick", "postgame", {
                            game_id: this.get("eogStats.gameId")
                        })
                    },
                    playOutlineAnimation() {
                        this._playOutlineAnimation()
                    },
                    setModalDoneShowing() {
                        this.set("modalDoneShowing", !0)
                    },
                    updateScoreboardAnimation(e) {
                        this.set("hasScoreboardAnimationPlayed", e)
                    },
                    updateHonorCelebrationAnimation(e) {
                        this.set("hasCelebratedHonor", e)
                    },
                    addPerksPage: function() {
                        return this.get("perks").createPerksPage().then((() => {
                            this.set("hasAddedTempPage", !0)
                        }))
                    }
                }
            });
            t.default = p
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1).Ember.Component.extend({
                classNames: ["career-postgame-sub-navigation-component"],
                tabs: [],
                actions: {
                    selectTab(e) {
                        const t = this.get("onSelect");
                        if (t) {
                            const s = this.get("tabs");
                            s && e >= 0 && e < s.length && t(s[e]?.value)
                        }
                    }
                }
            });
            t.default = n
        }, (e, t, s) => {
            "use strict";
            var n = s(1),
                a = s(144);
            s(145);
            const o = "sfx-ui",
                l = n.Ember.Component.extend({
                    classNames: ["clash-generic-button"],
                    classNameBindings: ["matchHeight:match-h", "matchWidth:match-w", "isImgFlippedX:flip-x", "isImgFlippedY:flip-y"],
                    layout: s(146),
                    canBeSelected: !1,
                    triggerSelected: !1,
                    selectionGroup: null,
                    isEnabled: !0,
                    text: null,
                    baseBgPath: null,
                    upBgPath: null,
                    overBgPath: null,
                    downBgPath: null,
                    disabledBgPath: null,
                    baseImgPath: null,
                    upImgPath: null,
                    overImgPath: null,
                    downImgPath: null,
                    disabledImgPath: null,
                    noDisabledBg: !1,
                    isImgFlippedX: !1,
                    isImgFlippedY: !1,
                    useCustomContent: !1,
                    iconSizeModifier: 1,
                    matchHeight: !0,
                    matchWidth: !0,
                    tooltipText: null,
                    tooltipPosition: "bottom",
                    tooltipType: "system",
                    disabledTooltipText: null,
                    disabledTooltipPosition: "bottom",
                    disabledTooltipType: "system",
                    onHoverSound: null,
                    onClickSound: null,
                    onClickReleaseSound: null,
                    currentState: null,
                    isClickTarget: !1,
                    isSelected: !1,
                    onInit: n.Ember.on("init", (function() {
                        this._changeState(a.ButtonState.UP)
                    })),
                    upBgPathInternal: n.Ember.computed.or("upBgPath", "baseBgPath"),
                    overBgPathInternal: n.Ember.computed.or("overBgPath", "baseBgPath"),
                    downBgPathInternal: n.Ember.computed.or("downBgPath", "baseBgPath"),
                    disabledBgPathInternal: n.Ember.computed("disabledBgPath", "baseBgPath", "noDisabledBg", (function() {
                        return this.get("noDisabledBg") ? "" : this.get("disabledBgPath") || this.get("baseBgPath")
                    })),
                    upImgPathInternal: n.Ember.computed.or("upImgPath", "baseImgPath"),
                    overImgPathInternal: n.Ember.computed.or("overImgPath", "baseImgPath"),
                    downImgPathInternal: n.Ember.computed.or("downImgPath", "baseImgPath"),
                    disabledImgPathInternal: n.Ember.computed.or("disabledImgPath", "baseImgPath"),
                    customContentUp: {
                        isUp: !0,
                        isAny: !0
                    },
                    customContentOver: {
                        isOver: !0,
                        isAny: !0
                    },
                    customContentDown: {
                        isDown: !0,
                        isAny: !0
                    },
                    customContentDisabled: {
                        isDisabled: !0,
                        isAny: !0
                    },
                    iconSizeModifierStyle: n.Ember.computed("iconSizeModifier", (function() {
                        const e = this.get("iconSizeModifier");
                        if (1 === e) return null;
                        const t = 100 * Math.max(e, 0),
                            s = this.get("matchHeight");
                        let n = "";
                        return this.get("matchWidth") && (n += `width: ${t}%;`), s && (n += `height: ${t}%`), n
                    })),
                    triggerSelectedObserver: n.Ember.computed("triggerSelected", (function() {
                        this.get("triggerSelected") && (this._setSelected(!0), n.Ember.run.next((() => {
                            this.set("triggerSelected", !1)
                        })))
                    })),
                    isEnabledObserver: n.Ember.computed("isEnabled", (function() {
                        const e = this.get("currentState") !== a.ButtonState.DISABLED,
                            t = this.get("isEnabled");
                        e && !t ? this._changeState(a.ButtonState.DISABLED) : !e && t && this._changeState(a.ButtonState.UP)
                    })),
                    _changeState(e) {
                        const t = this.get("currentState"),
                            s = this.get("isClickTarget");
                        e === a.ButtonState.OVER && (this.get("onHoverSound") && n.Audio.getChannel(o).playSound(this.get("onHoverSound")), s && (e = a.ButtonState.DOWN)), this.set("isState_" + t, !1), this.set("isState_" + e, !0), this.set("currentState", e)
                    },
                    _processClick() {
                        this.attrs.onClick && this.attrs.onClick();
                        const e = this.get("selectionGroup"),
                            t = this.get("isSelected");
                        e && t || this._setSelected(!t)
                    },
                    _setSelected(e) {
                        if (!this.get("canBeSelected")) return;
                        const t = this.get("isSelected");
                        if (t !== e) {
                            if (e) {
                                const e = this.get("selectionGroup");
                                l.setSelection(e, this)
                            }
                            t && this.attrs.onDeselected ? this.attrs.onDeselected() : e && this.attrs.onSelected && this.attrs.onSelected(), this.set("isSelected", e)
                        }
                    },
                    actions: {
                        changeState(e) {
                            this.get("currentState") !== a.ButtonState.DISABLED && this._changeState(e)
                        },
                        beginClick() {
                            if (this.get("currentState") === a.ButtonState.DISABLED) return;
                            this.get("onClickSound") && n.Audio.getChannel(o).playSound(this.get("onClickSound")), this._changeState(a.ButtonState.DOWN), this.set("isClickTarget", !0);
                            const e = () => {
                                this.set("isClickTarget", !1), document.removeEventListener("mouseup", e)
                            };
                            document.addEventListener("mouseup", e)
                        },
                        endClick() {
                            if (this.get("currentState") === a.ButtonState.DISABLED) return;
                            this.get("isClickTarget") && (this.get("onClickReleaseSound") && n.Audio.getChannel(o).playSound(this.get("onClickReleaseSound")), this._processClick(), this.set("isClickTarget", !1), this._changeState(a.ButtonState.OVER))
                        },
                        onHover() {
                            this.get("currentState") !== a.ButtonState.DISABLED && (this._changeState(a.ButtonState.OVER), this.attrs.onHover && this.attrs.onHover())
                        },
                        onHoverLeave() {
                            this.get("currentState") !== a.ButtonState.DISABLED && (this._changeState(a.ButtonState.UP), this.attrs.onHoverLeave && this.attrs.onHoverLeave())
                        }
                    }
                });
            l.reopenClass({
                currentSelectionMap: {},
                setSelection(e, t) {
                    if (!e || !t || !t.get("canBeSelected")) return;
                    const s = l.currentSelectionMap[e];
                    s && s._setSelected(!1), l.currentSelectionMap[e] = t
                }
            }), e.exports = l
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ButtonState = void 0;
            const s = Object.freeze({
                UP: "up",
                OVER: "over",
                DOWN: "down",
                DISABLED: "disabled"
            });
            t.ButtonState = s
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "Q9F+In89",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\generic-button\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\generic-button\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\generic-button\\\\index.js\\" "],["text","\\n"],["append",["unknown",["isEnabledObserver"]],false],["text","\\n"],["append",["unknown",["triggerSelectedObserver"]],false],["text","\\n"],["open-element","div",[]],["static-attr","class","clash-generic-button-root"],["modifier",["action"],[["get",[null]],"onHoverLeave"],[["on"],["mouseLeave"]]],["modifier",["action"],[["get",[null]],"onHover"],[["on"],["mouseEnter"]]],["modifier",["action"],[["get",[null]],"beginClick"],[["on"],["mouseDown"]]],["modifier",["action"],[["get",[null]],"endClick"],[["on"],["mouseUp"]]],["flush-element"],["text","\\n\\n"],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["clash-generic-button-state up ",["helper",["if"],[["get",["isSelected"]],"selected"],null]," ",["helper",["if"],[["get",["isState_up"]],"active"],null]]]],["dynamic-attr","style",["unknown",["upStyle"]],null],["flush-element"],["text","\\n    "],["block",["if"],[["get",["upBgPathInternal"]]],null,27],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["clash-generic-button-primary-img-container ",["helper",["if"],[["get",["upBgPathInternal"]],"has-bg"],null]]]],["flush-element"],["text","\\n      "],["block",["if"],[["get",["upImgPathInternal"]]],null,26],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["text"]]],null,25,24],["text","    "],["block",["if"],[["get",["useCustomContent"]]],null,22],["text","\\n  "],["close-element"],["text","\\n\\n"],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["clash-generic-button-state over ",["helper",["if"],[["get",["isSelected"]],"selected"],null]," ",["helper",["if"],[["get",["isState_over"]],"active"],null]]]],["dynamic-attr","style",["unknown",["overStyle"]],null],["flush-element"],["text","\\n    "],["block",["if"],[["get",["overBgPathInternal"]]],null,21],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["clash-generic-button-primary-img-container ",["helper",["if"],[["get",["overBgPathInternal"]],"has-bg"],null]]]],["flush-element"],["text","\\n      "],["block",["if"],[["get",["overImgPathInternal"]]],null,20],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["text"]]],null,19,18],["text","    "],["block",["if"],[["get",["useCustomContent"]]],null,16],["text","\\n"],["block",["if"],[["get",["tooltipText"]]],null,15],["text","  "],["close-element"],["text","\\n\\n"],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["clash-generic-button-state down ",["helper",["if"],[["get",["isSelected"]],"selected"],null]," ",["helper",["if"],[["get",["isState_down"]],"active"],null]]]],["dynamic-attr","style",["unknown",["downStyle"]],null],["flush-element"],["text","\\n    "],["block",["if"],[["get",["downBgPathInternal"]]],null,13],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["clash-generic-button-primary-img-container ",["helper",["if"],[["get",["downBgPathInternal"]],"has-bg"],null]]]],["flush-element"],["text","\\n      "],["block",["if"],[["get",["downImgPathInternal"]]],null,12],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["text"]]],null,11,10],["text","    "],["block",["if"],[["get",["useCustomContent"]]],null,8],["text","\\n  "],["close-element"],["text","\\n\\n"],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["clash-generic-button-state disabled ",["helper",["if"],[["get",["isSelected"]],"selected"],null]," ",["helper",["if"],[["get",["isState_disabled"]],"active"],null]]]],["dynamic-attr","style",["unknown",["disabledStyle"]],null],["flush-element"],["text","\\n    "],["block",["if"],[["get",["disabledBgPathInternal"]]],null,7],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["clash-generic-button-primary-img-container ",["helper",["if"],[["get",["disabledBgPathInternal"]],"has-bg"],null]]]],["flush-element"],["text","\\n      "],["block",["if"],[["get",["disabledImgPathInternal"]]],null,6],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["text"]]],null,5,4],["text","    "],["block",["if"],[["get",["useCustomContent"]]],null,2],["text","\\n"],["block",["if"],[["get",["disabledTooltipText"]]],null,1],["text","  "],["close-element"],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":["default"],"blocks":[{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["disabledTooltipText"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition","type"],[["get",["disabledTooltipPosition"]],["get",["disabledTooltipType"]]]],0]],"locals":[]},{"statements":[["open-element","div",[]],["static-attr","class","clash-generic-button-custom-content"],["flush-element"],["yield","default",[["get",["customContentDisabled"]]]],["close-element"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","clash-generic-button-text"],["flush-element"],["append",["unknown",["disabledText"]],false],["close-element"],["text","\\n    "]],"locals":[]},{"statements":[["block",["if"],[["get",["disabledText"]]],null,3]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","clash-generic-button-text"],["flush-element"],["append",["unknown",["text"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["disabledImgPathInternal"]]]]],["dynamic-attr","style",["unknown",["iconSizeModifierStyle"]],null],["flush-element"],["close-element"]],"locals":[]},{"statements":[["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["disabledBgPathInternal"]]]]],["flush-element"],["close-element"]],"locals":[]},{"statements":[["open-element","div",[]],["static-attr","class","clash-generic-button-custom-content"],["flush-element"],["yield","default",[["get",["customContentDown"]]]],["close-element"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","clash-generic-button-text"],["flush-element"],["append",["unknown",["downText"]],false],["close-element"],["text","\\n    "]],"locals":[]},{"statements":[["block",["if"],[["get",["downText"]]],null,9]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","clash-generic-button-text"],["flush-element"],["append",["unknown",["text"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["downImgPathInternal"]]]]],["dynamic-attr","style",["unknown",["iconSizeModifierStyle"]],null],["flush-element"],["close-element"]],"locals":[]},{"statements":[["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["downBgPathInternal"]]]]],["flush-element"],["close-element"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["tooltipText"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition","type"],[["get",["tooltipPosition"]],["get",["tooltipType"]]]],14]],"locals":[]},{"statements":[["open-element","div",[]],["static-attr","class","clash-generic-button-custom-content"],["flush-element"],["yield","default",[["get",["customContentOver"]]]],["close-element"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","clash-generic-button-text"],["flush-element"],["append",["unknown",["overText"]],false],["close-element"],["text","\\n    "]],"locals":[]},{"statements":[["block",["if"],[["get",["overText"]]],null,17]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","clash-generic-button-text"],["flush-element"],["append",["unknown",["text"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["overImgPathInternal"]]]]],["dynamic-attr","style",["unknown",["iconSizeModifierStyle"]],null],["flush-element"],["close-element"]],"locals":[]},{"statements":[["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["overBgPathInternal"]]]]],["flush-element"],["close-element"]],"locals":[]},{"statements":[["open-element","div",[]],["static-attr","class","clash-generic-button-custom-content"],["flush-element"],["yield","default",[["get",["customContentUp"]]]],["close-element"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","clash-generic-button-text"],["flush-element"],["append",["unknown",["upText"]],false],["close-element"],["text","\\n    "]],"locals":[]},{"statements":[["block",["if"],[["get",["upText"]]],null,23]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","clash-generic-button-text"],["flush-element"],["append",["unknown",["text"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["upImgPathInternal"]]]]],["dynamic-attr","style",["unknown",["iconSizeModifierStyle"]],null],["flush-element"],["close-element"]],"locals":[]},{"statements":[["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["upBgPathInternal"]]]]],["flush-element"],["close-element"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var n = s(1),
                a = s(144),
                o = s(30);
            const {
                RunMixin: l
            } = n.EmberAddons.EmberLifeline, i = "sfx-ui";
            e.exports = n.Ember.Component.extend(l, {
                classNames: ["postgame-button-wrapper"],
                _oldPlayersReady: 0,
                currentState: a.ButtonState.UP,
                onHoverSound: null,
                onClickSound: null,
                hasIntroAnimationPlayed: !1,
                baseImgPath: null,
                overImgPath: null,
                downImgPath: null,
                partyStatus: null,
                buttonText: "",
                readyPlayers: n.Ember.computed.alias("partyStatus.readyPlayers"),
                partySize: n.Ember.computed.alias("partyStatus.partySize"),
                numPlayersReady: n.Ember.computed.alias("readyPlayers.length"),
                videoSourceState: o.PLAYFLOW_VIDEO_SOURCE_STATE.intro,
                videoSource: {
                    intro: o.PLAYFLOW_VIDEO_SOURCE_PATH.intro,
                    active: o.PLAYFLOW_VIDEO_SOURCE_PATH.active,
                    idle: o.PLAYFLOW_VIDEO_SOURCE_PATH.idle,
                    hover: o.PLAYFLOW_VIDEO_SOURCE_PATH.hover,
                    pulse: o.PLAYFLOW_VIDEO_SOURCE_PATH.pulse,
                    allReturned: o.PLAYFLOW_VIDEO_SOURCE_PATH.allReturned
                },
                currentImgPath: n.Ember.computed("currentState", (function() {
                    switch (this.get("currentState")) {
                        case a.ButtonState.UP:
                            return this.get("baseImgPath");
                        case a.ButtonState.DOWN:
                            return this.get("downImgPath");
                        case a.ButtonState.OVER:
                            return this.get("overImgPath");
                        default:
                            return this.get("baseImgPath")
                    }
                })),
                didInsertElement() {
                    this._super(...arguments), this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.idle, o.PLAY_BUTTON_STATE_MACHINE_SELECTOR)
                },
                didUpdateAttrs() {
                    this._super(...arguments);
                    const e = this.get("_oldPlayersReady"),
                        t = this.get("hasIntroAnimationPlayed"),
                        s = this.get("numPlayersReady"),
                        a = this.get("partySize"),
                        l = 1 === a;
                    if (t && this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.intro, o.PLAY_BUTTON_STATE_MACHINE_SELECTOR), this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.idle, o.PLAY_BUTTON_STATE_MACHINE_SELECTOR), e < s) {
                        if (!this.get("readyPlayers") || l) return;
                        s >= 1 && s < a && s > e && (a >= 2 && s === a - 1 ? this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.allReturned, o.PARTY_STATUS_STATE_MACHINE_SELECTOR) : this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.pulse, o.PARTY_STATUS_STATE_MACHINE_SELECTOR), n.Audio.getChannel(i).playSound("/fe/lol-static-assets/sounds/sfx-eog-lobby-player-returned.ogg")), this.set("_oldPlayersReady", s)
                    }
                },
                _updatePlayButtonState(e) {
                    this.set("currentState", e)
                },
                _updateVideoStateMachine(e, t) {
                    const s = this.element.querySelector(t);
                    s && s.isAttached && s.dispatchEvent(new Event(e))
                },
                mouseUp(e) {
                    e.preventDefault();
                    const t = this.get("onClickReleaseSound");
                    t && n.Audio.getChannel(i).playSound(t), this._updatePlayButtonState(a.ButtonState.OVER), this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.idle, o.PLAY_BUTTON_STATE_MACHINE_SELECTOR), this.sendAction("onClick")
                },
                mouseDown(e) {
                    e.preventDefault();
                    const t = this.get("onClickSound");
                    t && n.Audio.getChannel(i).playSound(t), this._updatePlayButtonState(a.ButtonState.DOWN), this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.active, o.PLAY_BUTTON_STATE_MACHINE_SELECTOR)
                },
                mouseEnter() {
                    const e = this.get("onHoverSound");
                    e && n.Audio.getChannel(i).playSound(e), this._updatePlayButtonState(a.ButtonState.OVER), this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.hover, o.PLAY_BUTTON_STATE_MACHINE_SELECTOR)
                },
                mouseLeave() {
                    this._updatePlayButtonState(a.ButtonState.UP), this._updateVideoStateMachine(o.PLAYFLOW_VIDEO_SOURCE_STATE.idle, o.PLAY_BUTTON_STATE_MACHINE_SELECTOR)
                }
            })
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(4),
                o = s(1),
                l = s(137),
                i = s(39),
                r = s(149),
                m = s(3),
                c = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const d = o.UIKit.getVignetteCelebrationManager(),
                p = "/lol-ranked/v1/current-lp-change-notification",
                u = "/lol-client-config/v3/client-config/lol.client_settings.client_navigability.eog_seasons_enabled",
                g = new Set([]);
            var h = o.Ember.Component.extend(c.default, {
                classNames: ["career-postgame-progression-component"],
                renderEventName: i.TELEMETRY_EVENT_NAMES.RENDER_PROGRESSION_SCREEN,
                shouldSendTelemetry: !1,
                showProgressionModal: !1,
                showProgressedEternalsData: !1,
                showProgressedChallengeData: !1,
                postgame: o.Ember.inject.service(),
                eternals: o.Ember.inject.service(),
                eventHub: o.Ember.inject.service("event-hub"),
                endOfGameService: o.Ember.inject.service("end-of-game"),
                rankedAssetsService: o.Ember.inject.service("ranked-assets"),
                isRanked: o.Ember.computed.alias("eogStats.ranked"),
                isUnranked: o.Ember.computed.not("isRanked"),
                isCherry: o.Ember.computed("eogStats.queueType", (function() {
                    const e = this.get("eogStats.queueType");
                    return "CHERRY" === e || "CHERRY_UNRANKED" === e
                })),
                isKiwi: o.Ember.computed("eogStats.queueType", (function() {
                    return "KIWI" === this.get("eogStats.queueType")
                })),
                isSeasonPassEnabled: !1,
                isSeasonPassActive: o.Ember.computed.readOnly("eventHub.isSeasonPassActive"),
                isGracePeriod: o.Ember.computed.readOnly("eventHub.isGracePeriod"),
                shouldShowSeasonPass: o.Ember.computed("isSeasonPassEnabled", "isSeasonPassActive", "isGracePeriod", (function() {
                    return this.get("isSeasonPassEnabled") && this.get("isSeasonPassActive") && !this.get("isGracePeriod")
                })),
                shouldShowSmallSeasonPass: o.Ember.computed.and("shouldShowSeasonPass", "isRanked"),
                shouldShowLargeSeasonPass: o.Ember.computed.and("shouldShowSeasonPass", "isUnranked"),
                showSmallMasteryProgression: o.Ember.computed.or("shouldShowLargeSeasonPass", "isRanked"),
                championMasteryUpdateNotification: o.Ember.computed.readOnly("endOfGameService.championMasteryUpdateNotification"),
                willAnimate: !1,
                didAnimate: !1,
                isAnimating: !1,
                init() {
                    this._super(...arguments), this.boundKeydown = this._handleKeyDown.bind(this), o.db.observe(p, this, this.handleLeaguesNotification), o.db.observe(u, this, this.handleSeasonPassConfig)
                },
                didUpdateAttrs() {
                    this._super(...arguments), !this.get("willAnimate") || this.get("didAnimate") || this.get("isAnimating") || o.Ember.run.scheduleOnce("afterRender", this, this._playIntroAnimation), this.tryShowLpChangeModal()
                },
                didInsertElement() {
                    this._super(...arguments), document.addEventListener("keydown", this.boundKeydown), o.Telemetry.startTracingEvent(i.TELEMETRY_EVENT_NAMES.TIME_ON_PROGRESSION_SCREEN)
                },
                willDestroyElement() {
                    this._super(...arguments), document.removeEventListener("keydown", this.boundKeydown), o.db.unobserve(p, this), o.db.unobserve(u, this), o.Telemetry.endTracingEvent(i.TELEMETRY_EVENT_NAMES.TIME_ON_PROGRESSION_SCREEN);
                    const e = this.get("animationTimeline");
                    e && e.kill()
                },
                _playIntroAnimation() {
                    const e = this.element.querySelector(".progression-screen-header"),
                        t = this.element.querySelector(".postgame-champion-background");
                    o.gsapCustomEase.create("backgroundCB", "0.32,-0.94,0.6,1");
                    const s = new o.gsap.TimelineMax({
                        paused: !0,
                        onComplete: () => {
                            this.set("didAnimate", !0), this.set("isAnimating", !1)
                        }
                    });
                    t && s.fromTo(t, 1, {
                        css: {
                            scaleX: .95,
                            scaleY: .95,
                            opacity: 0
                        }
                    }, {
                        css: {
                            scaleX: 1,
                            scaleY: 1,
                            opacity: 1
                        },
                        ease: "backgroundCB"
                    }, "start"), e && s.fromTo(e, .33, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, "start+=0.2"), this.set("animationTimeline", s), s.play(), this.set("isAnimating", !0)
                },
                handleLeaguesNotification(e) {
                    this.set("leaguesNotification", e);
                    const t = e?.lpBonusAppliedReason;
                    this.set("lpChangeClassName", t), t ? this.tryShowLpChangeModal() : this.sendAction("setModalDoneShowing")
                },
                lpChangeBackground: o.Ember.computed("rankedAssetsService.assets.valorAegisAwardedModalBackground", (function() {
                    return this.get("rankedAssetsService.assets.valorAegisAwardedModalBackground")
                })),
                tryShowLpChangeModal() {
                    const e = this.get("lpChangeClassName"),
                        t = this.get("leaguesNotification"),
                        s = this.get("lpChangeBackground"),
                        n = t?.gameId;
                    s && e && !g.has(n) && (g.add(n), this.showLpChangeModal(e, t))
                },
                showLpChangeModal(e, t) {
                    let s = !0,
                        n = "";
                    t?.queueType === a.QUEUES.JADE_RANKED_SOLO_5x5 && (s = !1, n = "demacia-vignette");
                    const l = {
                            id: "valor-aegis-modal",
                            data: {
                                header: {
                                    title: this.get("rankedAssetsService.assets.valorAegisModalTitleLoc")
                                },
                                nextButtonText: this.get("tra.postgame_rank_lp_modal_accept_text"),
                                backgroundImageUrl: this.get("lpChangeBackground"),
                                nextButtonShown: s
                            },
                            height: "LARGE",
                            onRemove: () => {
                                this.sendAction("setModalDoneShowing")
                            },
                            customClassName: n
                        },
                        i = o.ComponentFactory.create("ValorAegisModalComponent", {
                            isWin: this.get("isWin"),
                            lpBonusAppliedReason: e,
                            rankedAssetsService: this.get("rankedAssetsService"),
                            showValorAegisNextButton: !s,
                            onNextButtonClicked: () => {
                                d.remove(l)
                            }
                        });
                    l.content = i, d.add(l)
                },
                handleSeasonPassConfig(e) {
                    this.set("isSeasonPassEnabled", e)
                },
                shouldShowMasteryProgression: o.Ember.computed("eogStats", "championMasteryUpdateNotification.championId", (function() {
                    return this.get("eogStats") && this.get("championMasteryUpdateNotification.championId")
                })),
                shouldShowPrestigeProgression: o.Ember.computed("shouldHidePrestigeProgression", "eogStats", (function() {
                    return !this.get("shouldHidePrestigeProgression") && this.get("eogStats") && !this.get("isKiwi")
                })),
                isPrestigeProgressionLarge: o.Ember.computed("eogStats.ranked", "isCherry", "shouldShowLargeSeasonPass", (function() {
                    return this.get("isCherry") || !this.get("eogStats.ranked") && !this.get("shouldShowLargeSeasonPass")
                })),
                playerTeam: o.Ember.computed("eogStats.teams.@each.isPlayerTeam", (function() {
                    return (this.get("eogStats.teams") || []).find((e => e.isPlayerTeam))
                })),
                isLossPrevented: o.Ember.computed("eogStats.invalid", "isWin", (function() {
                    return this.get("eogStats.invalid") && !this.get("isWin")
                })),
                isWin: o.Ember.computed("playerTeam.isWinningTeam", "isCherryWin", "isCherry", (function() {
                    return this.get("isCherry") ? this.get("isCherryWin") : this.get("playerTeam.isWinningTeam")
                })),
                isCherryWin: o.Ember.computed("eogStats.localPlayer.subteamStanding", "eogStats.teams", (function() {
                    const e = this.get("eogStats.localPlayer.subteamStanding") || 1,
                        t = this.get("eogStats.teams");
                    return e <= (t ? t.length : m.DEFAULT_CHERRY_TEAM_SIZE) / 2
                })),
                showcasedEoGUpdateSlots: o.Ember.computed("eternals.selfProgression.[]", "updatedChallengesList.[]", (function() {
                    const e = this.get("eternals.selfProgression") || [],
                        t = (this.get("updatedChallengesList") || []).filter((e => !e.isCapstone));
                    return (0, l.calculateEoGChallengeSlots)(t, [...e], 5)
                })),
                allChallengeUpdates: o.Ember.computed("updatedChallengesList.[]", (function() {
                    const e = this.get("updatedChallengesList") || [];
                    return Object.values(e).filter((e => !e.isCapstone)).sort(l.sortChallengeUpdatesDesc)
                })),
                allEternalsUpdates: o.Ember.computed("eternals.selfProgression.[]", (function() {
                    return (this.get("eternals.selfProgression") || []).sort(l.sortEternalUpdatesDesc)
                })),
                groupedChallenges: o.Ember.computed("updatedChallengesList", (function() {
                    const e = (this.get("updatedChallengesList") || []).filter((e => !e.isCapstone)).sort(l.sortGroupedChallengeUpdates),
                        t = (0, r.groupChallengesByProgression)(e),
                        s = new Map([...t].sort().reverse());
                    return this._flattenGroups(s)
                })),
                groupedEternals: o.Ember.computed("eternals.selfProgression.[]", (function() {
                    const e = (this.get("eternals.selfProgression") || []).sort(l.sortEternalUpdatesDesc),
                        t = (0, r.groupEternalsByMilestone)(e);
                    return this._flattenGroups(t)
                })),
                eternalsMap: o.Ember.computed("eternals.selfProgression.[]", (function() {
                    const e = (this.get("eternals.selfProgression") || []).sort(l.sortEternalUpdatesDesc);
                    return (0, r.groupEternalsByMilestone)(e)
                })),
                challengesMap: o.Ember.computed("updatedChallengesList.[]", (function() {
                    const e = (this.get("updatedChallengesList") || []).filter((e => !e.isCapstone)).sort(l.sortChallengeUpdatesDesc);
                    return (0, r.groupChallengesByProgression)(e)
                })),
                _flattenGroups(e) {
                    let t = [];
                    return e && e.forEach(((e, s) => {
                        if (!e.length) return;
                        const n = {
                            id: "header",
                            isHeader: !0,
                            groupName: this.get("tra").get(`postgame_updates_grouping_${s}`)
                        };
                        t.push(n), t = t.concat(e)
                    })), t
                },
                _handleKeyDown(e) {
                    "Escape" === e.key && (e.preventDefault(), this.get("actions").closeModal.call(this))
                },
                actions: {
                    openModal(e) {
                        e === m.MODAL_CATEGORY.CHALLENGES ? (this.set("showProgressedEternalsData", !1), this.set("showProgressedChallengeData", !0), this.set("showProgressionModal", !0)) : e === m.MODAL_CATEGORY.ETERNALS && (this.set("showProgressedChallengeData", !1), this.set("showProgressedEternalsData", !0), this.set("showProgressionModal", !0))
                    },
                    closeModal() {
                        this.set("showProgressedEternalsData", !1), this.set("showProgressedChallengeData", !1), this.set("showProgressionModal", !1)
                    },
                    playOutlineAnimation() {
                        this.sendAction("playOutlineAnimation")
                    }
                }
            });
            t.default = h
        }, (e, t) => {
            "use strict";

            function s(e, t) {
                const s = new Map;
                return e.forEach((e => {
                    const n = t(e);
                    s.has(n) ? s.get(n).push(e) : s.set(n, [e])
                })), s
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.groupChallengesByProgression = function(e) {
                return s(e, (e => e.currentLevel !== e.previousLevel ? "upgraded" : "progressed"))
            }, t.groupEternalsByMilestone = function(e) {
                return s(e, (e => e.isNewBest ? "new_personal_best" : e.isMilestone ? "new_milestone" : "progressed"))
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                },
                l = s(3);
            const i = ["boostXpEarned", "globalBoostXpEarned", "loyaltyBoostXpEarned", "xbgpBoostXpEarned", "missionsXpEarned"];
            var r = a.Ember.Component.extend(o.default, {
                classNames: ["prestige-progression-component"],
                classNameBindings: ["isLarge"],
                eogStats: {},
                isRanked: !1,
                isCherry: !1,
                summonerIconPath: "",
                playerLevel: a.Ember.computed.alias("eogStats.currentLevel"),
                leveledUp: a.Ember.computed.alias("eogStats.leveledUp"),
                xpTotal: a.Ember.computed.alias("eogStats.experienceTotal"),
                xpEarned: a.Ember.computed.alias("eogStats.experienceEarned"),
                nextLevelXpRequired: a.Ember.computed.alias("eogStats.nextLevelXp"),
                prevLevelXp: a.Ember.computed.alias("eogStats.preLevelUpExperienceTotal"),
                prevLevelXpRequired: a.Ember.computed.alias("eogStats.preLevelUpNextLevelXp"),
                boostXpEarned: a.Ember.computed.alias("eogStats.boostXpEarned"),
                globalBoostXpEarned: a.Ember.computed.alias("eogStats.globalBoostXpEarned"),
                loyaltyBoostXpEarned: a.Ember.computed.alias("eogStats.loyaltyBoostXpEarned"),
                xbgpBoostXpEarned: a.Ember.computed.alias("eogStats.xbgpBoostXpEarned"),
                missionsXpEarned: a.Ember.computed.alias("eogStats.missionsXpEarned"),
                willAnimate: !1,
                didAnimate: !1,
                showAnimatedElements: a.Ember.computed.or("willAnimate", "didAnimate"),
                didUpdateAttrs() {
                    this._super(...arguments), this.get("willAnimate") && !this.get("didAnimate") && a.Ember.run.scheduleOnce("afterRender", this, this._playIntroAnimation)
                },
                willDestroyElement() {
                    this._super(...arguments);
                    const e = this.get("animationTimeline");
                    e && e.kill()
                },
                lottieBarFillPath: a.Ember.computed("leveledUp", (function() {
                    return this.get("leveledUp") ? "/fe/lol-static-assets/lottie/challenges/challenges-progress-bar-levelup.json" : "/fe/lol-static-assets/lottie/challenges/challenges-progress-bar.json"
                })),
                _playIntroAnimation() {
                    const e = this.get("tra"),
                        t = this.get("xpEarned"),
                        s = this.get("isRanked"),
                        n = this.get("leveledUp"),
                        o = {
                            amount: 0
                        },
                        l = this.element.querySelector(".points-gained-spark-small-video"),
                        i = this.element.querySelector(".points-gained-spark-medium-video"),
                        r = this.element.querySelector(".lottie-radial-fill"),
                        m = new a.gsap.TimelineMax({
                            paused: !0,
                            onComplete: () => {
                                this.set("didAnimate", !0)
                            }
                        });
                    m.add(a.gsap.TweenLite.to(o, .25, {
                        amount: t,
                        onUpdate: () => {
                            this.set("animatedPointsText", e.formatString("career_postgame_progress_xp_gain_pts", {
                                xpEarned: Math.round(o.amount)
                            }))
                        },
                        onComplete: () => {
                            n && this.set("animatedPointsText", this.get("playerXpGainLoc"))
                        }
                    }), "start+=0.2"), r && m.add((() => {
                        r.play()
                    }), "start"), s || m.add((() => {
                        this.playSound("sfx-eog-ui-exp-burst.ogg")
                    }), "start+=0.2");
                    const c = n ? i : l;
                    m.add((() => {
                        c && c.play()
                    }), "start+=0.35"), this.set("animationTimeline", m), m.play()
                },
                playerXpGainLoc: a.Ember.computed("xpEarned", "leveledUp", (function() {
                    return this.get("leveledUp") ? this.get("tra.career_postgame_progress_xp_level_up") : this.get("tra").formatString("career_postgame_progress_xp_gain_pts", {
                        xpEarned: this.get("xpEarned")
                    })
                })),
                xpPercentageNew: a.Ember.computed("leveledUp", "xpTotal", "nextLevelXpRequired", "xpEarned", (function() {
                    return 0 === this.get("nextLevelXpRequired") ? 0 : this.get("leveledUp") ? this.get("xpTotal") / this.get("nextLevelXpRequired") * 100 : this.get("xpEarned") / this.get("nextLevelXpRequired") * 100
                })),
                xpPercentageOld: a.Ember.computed("leveledUp", "nextLevelXpRequired", "xpTotal", "xpEarned", (function() {
                    return this.get("leveledUp") ? 0 : this.get("nextLevelXpRequired") ? 100 * (this.get("xpTotal") - this.get("xpEarned")) / this.get("nextLevelXpRequired") : 100
                })),
                radialProgressPercent: a.Ember.computed("xpPercentageNew", "xpPercentageOld", (function() {
                    return this.get("xpPercentageNew") + this.get("xpPercentageOld")
                })),
                lottieRadialNewPercent: a.Ember.computed("xpPercentageNew", (function() {
                    return this.get("xpPercentageNew") * l.LOTTIE_RADIAL_UNITS / 100
                })),
                lottieRadialOldPercent: a.Ember.computed("xpPercentageOld", (function() {
                    return this.get("xpPercentageOld") * l.LOTTIE_RADIAL_UNITS / 100
                })),
                nonBoostXpEarned: a.Ember.computed("xpEarned", "boostXpEarned", "globalBoostXpEarned", "loyaltyBoostXpEarned", "xbgpBoostXpEarned", "missionsXpEarned", (function() {
                    return this.get("xpEarned") - i.reduce(((e, t) => e + (this.get(t) || 0)), 0)
                })),
                xpSources: a.Ember.computed("nonBoostXpEarned", "boostXpEarned", "globalBoostXpEarned", "loyaltyBoostXpEarned", "xbgpBoostXpEarned", "missionsXpEarned", (function() {
                    const e = i.map((e => {
                        const t = this.get(e);
                        return {
                            shouldShow: t > 0,
                            valueLoc: this.get("tra").formatString("career_postgame_progress_xp_gain_pts", {
                                xpEarned: t
                            }),
                            typeLoc: this.get(`tra.career_postgame_progress_tooltip_source_${e}`)
                        }
                    }));
                    return [{
                        shouldShow: !0,
                        valueLoc: this.get("tra").formatString("career_postgame_progress_xp_gain_pts", {
                            xpEarned: this.get("nonBoostXpEarned")
                        }),
                        typeLoc: this.get("tra.career_postgame_progress_tooltip_source_xpEarned")
                    }].concat(e)
                }))
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["prestige-progression-tooltip-component"],
                    summonerLevelLoc: n.Ember.computed("level", (function() {
                        return this.get("tra").formatString("career_postgame_progress_tooltip_level", {
                            level: this.get("level")
                        })
                    })),
                    xpTotalLoc: n.Ember.computed("xpTotal", "nextLevelXpRequired", (function() {
                        return this.get("tra").formatString("career_postgame_progress_tooltip_xp_out_of_total", {
                            currentXp: this.get("xpTotal"),
                            nextLevelRequiredXp: this.get("nextLevelXpRequired")
                        })
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = ["RANKED_SOLO_5x5", "RANKED_TEAM_5x5", "CAP_5x5", "NORMAL"];
            var o = n.Ember.Component.extend({
                classNames: ["legendary-mastery-progression-component"],
                classNameBindings: ["isSmall"],
                endOfGameService: n.Ember.inject.service("end-of-game"),
                postgame: n.Ember.inject.service("postgame"),
                gameflowService: n.Ember.inject.service("gameflow"),
                championMasteryService: n.Ember.inject.service("champion-mastery"),
                championMasteryUpdateNotification: n.Ember.computed.readOnly("championMasteryService.championMasteryUpdateNotification"),
                championMasteryData: n.Ember.computed.readOnly("championMasteryService.championMasteryData"),
                milestoneRewardsData: n.Ember.computed.readOnly("championMasteryData.seasonMilestoneRequireAndRewards"),
                customRewards: n.Ember.computed.readOnly("championMasteryData.customRewards"),
                championCountByMilestone: n.Ember.computed.readOnly("championMasteryData.championCountByMilestone"),
                masteryLevel: n.Ember.computed.readOnly("championMasteryUpdateNotification.championLevel"),
                masteryLevelCapped: n.Ember.computed("masteryLevel", (function() {
                    return Math.min(this.get("masteryLevel"), n.SharedChampionMasteryConstants.MASTERY_CREST_INFINITE_THRESHOLD)
                })),
                hasLeveledUp: n.Ember.computed("championMasteryUpdateNotification.championLevelUp", "masteryLevel", (function() {
                    return this.get("championMasteryUpdateNotification.championLevelUp") && this.get("masteryLevel") > 1
                })),
                pointsGained: n.Ember.computed.readOnly("championMasteryUpdateNotification.championPointsGained"),
                pointsBeforeGame: n.Ember.computed.readOnly("championMasteryUpdateNotification.championPointsBeforeGame"),
                score: n.Ember.computed.readOnly("championMasteryUpdateNotification.score"),
                grade: n.Ember.computed.readOnly("championMasteryUpdateNotification.playerGrade"),
                pointsUntilNextLevelAfterGame: n.Ember.computed.readOnly("championMasteryUpdateNotification.championPointsUntilNextLevelAfterGame"),
                pointsUntilNextLevelBeforeGame: n.Ember.computed.readOnly("championMasteryUpdateNotification.championPointsUntilNextLevelBeforeGame"),
                pointsSinceLastLevelBeforeGame: n.Ember.computed.readOnly("championMasteryUpdateNotification.championPointsSinceLastLevelBeforeGame"),
                marksEarned: n.Ember.computed.readOnly("championMasteryUpdateNotification.tokensEarned"),
                isMarksEarnedAfterGame: n.Ember.computed.readOnly("championMasteryUpdateNotification.tokenEarnedAfterGame"),
                markRequiredForNextLevel: n.Ember.computed.readOnly("championMasteryUpdateNotification.markRequiredForNextLevel"),
                seasonMilestone: n.Ember.computed.readOnly("championMasteryUpdateNotification.championSeasonMilestone"),
                hasSeasonMilestoneLeveledUp: n.Ember.computed.readOnly("championMasteryUpdateNotification.championSeasonMilestoneUp"),
                milestoneGrades: n.Ember.computed.readOnly("championMasteryUpdateNotification.milestoneGrades"),
                nextSeasonMilestone: n.Ember.computed.readOnly("championMasteryUpdateNotification.seasonMilestone"),
                isCustomGame: n.Ember.computed.equal("endOfGameService.eogStatsBlock.gameType", "CUSTOM_GAME"),
                isNotCustomGame: n.Ember.computed.not("isCustomGame"),
                willAnimate: !1,
                animationPending: !1,
                dataIsLoaded: n.Ember.computed("championMasteryUpdateNotification", (function() {
                    const e = this.get("championMasteryUpdateNotification");
                    return e && e.gameId && e.puuid
                })),
                animationObserver: n.Ember.on("didInsertElement", n.Ember.observer("willAnimate", "dataIsLoaded", (function() {
                    this.get("didAnimate") || (this.get("willAnimate") && this.set("animationPending", !0), this.get("animationPending") && this.get("dataIsLoaded") && (n.Ember.run.scheduleOnce("afterRender", this, this._playIntroAnimation), this.set("animationPending", !1)))
                }))),
                showAnimatedElements: n.Ember.computed.or("willAnimate", "didAnimate"),
                _playIntroAnimation() {
                    const e = this.get("tra"),
                        t = this.get("pointsGained") || 0,
                        s = this.get("hasLeveledUp"),
                        a = {
                            amount: 0
                        },
                        o = this.element.querySelector(".points-gained-spark-small-video"),
                        l = this.element.querySelector(".points-gained-spark-medium-video"),
                        i = new n.gsap.TimelineMax({
                            paused: !0,
                            onComplete: () => {
                                this.set("didAnimate", !0)
                            }
                        });
                    i.add(n.gsap.TweenLite.to(a, .25, {
                        amount: t,
                        onUpdate: () => {
                            this.set("animatedPointsText", e.formatString("career_postgame_legendary_mastery_progress_points_gained", {
                                pointsGained: Math.round(a.amount)
                            }))
                        }
                    }), "start+=0.2");
                    const r = s ? l : o;
                    i.add((() => {
                        r && r.play()
                    }), "start+=0.35"), i.play()
                },
                currentChampionMasteryData: n.Ember.computed("championMasteryUpdateNotification.championId", "championMasteryData.championMasteries.[]", (function() {
                    const e = this.get("championMasteryData.championMasteries"),
                        t = this.get("championMasteryUpdateNotification.championId");
                    return e.find((e => e.championId === t))
                })),
                milestoneProgressMap: n.Ember.computed("milestoneGrades", (function() {
                    const e = this.get("milestoneGrades") || [],
                        t = this.get("nextSeasonMilestone.requireGradeCounts");
                    return n.SharedChampionMasteryConstants.calculateGradeRequirements(e, t)
                })),
                tooltipSeasonMilestone: n.Ember.computed("hasSeasonMilestoneLeveledUp", "seasonMilestone", (function() {
                    const e = this.get("seasonMilestone");
                    return this.get("hasSeasonMilestoneLeveledUp") ? e - 1 : e
                })),
                totalMasteryPoints: n.Ember.computed("pointsGained", "pointsBeforeGame", (function() {
                    return (this.get("pointsGained") || 0) + (this.get("pointsBeforeGame") || 0)
                })),
                marksDisplayList: n.Ember.computed("markRequiredForNextLevel", "marksEarned", (function() {
                    const e = [],
                        t = this.get("markRequiredForNextLevel"),
                        s = this.get("marksEarned");
                    for (let n = 0; n < Math.min(s, t); n++) e.push({
                        isComplete: !0
                    });
                    for (let n = 0; n < t - s; n++) e.push({
                        isComplete: !1
                    });
                    return e
                })),
                masteryLevelText: n.Ember.computed("tra.ready", "tra.career_postgame_mastery_progress_level", "masteryLevel", (function() {
                    const e = this.get("tra");
                    return e ? e.formatString("career_postgame_mastery_progress_level", {
                        masteryLevel: this.get("masteryLevel")
                    }) : ""
                })),
                pointsGainedText: n.Ember.computed("tra.ready", "tra.career_postgame_legendary_mastery_progress_points_gained", "pointsGained", (function() {
                    const e = this.get("tra");
                    return e ? e.formatString("career_postgame_legendary_mastery_progress_points_gained", {
                        pointsGained: this.get("pointsGained")
                    }) : ""
                })),
                championPointQueueTypesArray: n.Ember.computed("endOfGameService.championMasteryConfig.ChampionPointQueueTypes", (function() {
                    const e = this.get("endOfGameService.championMasteryConfig.ChampionPointQueueTypes");
                    let t = [];
                    return t = e || "" === e ? e.split(",") : a, t
                })),
                isQueueSupportedForChampionMastery: n.Ember.computed("championPointQueueTypesArray", "gameflowService.gameflowSession.gameData.queue.type", (function() {
                    const e = this.get("gameflowService.gameflowSession.gameData.queue.type");
                    return this.get("championPointQueueTypesArray").indexOf(e) > -1
                })),
                isPlayerLevelSupportedForChampionMastery: n.Ember.computed("endOfGameService.championMasteryConfig.MinSummonerLevel", "endOfGameService.player.level", (function() {
                    return this.get("endOfGameService.player.level") >= this.get("endOfGameService.championMasteryConfig.MinSummonerLevel")
                })),
                isChampionMasteryEnabled: n.Ember.computed.bool("endOfGameService.championMasteryConfig.Enabled"),
                isPostgameChampionMasteryEnabled: n.Ember.computed.bool("postgame.postgameChampionMasteryEnabled"),
                isChampionMasteryAvailable: n.Ember.computed.and("isQueueSupportedForChampionMastery", "isPlayerLevelSupportedForChampionMastery", "isChampionMasteryEnabled", "isNotCustomGame", "dataIsLoaded", "isPostgameChampionMasteryEnabled"),
                masteryRadialCurrentProgressPercent: n.Ember.computed("nextLevelPercentFill", "currentLevelPercentFill", "hasLeveledUp", "championLevel", (function() {
                    return this.get("hasLeveledUp") ? 0 : this.get("beforeMatchPercentFill")
                })),
                masteryRadialNewProgressPercent: n.Ember.computed("nextLevelPercentFill", "currentLevelPercentFill", "hasLeveledUp", (function() {
                    return this.get("hasLeveledUp") ? this.get("nextLevelPercentFill") : this.get("currentLevelPercentFill")
                })),
                masteryRadialTotalProgressPercent: n.Ember.computed("masteryRadialCurrentProgressPercent", "masteryRadialNewProgressPercent", (function() {
                    return this.get("masteryRadialCurrentProgressPercent") + this.get("masteryRadialNewProgressPercent")
                })),
                currentLevelTotalMasteryPoints: n.Ember.computed("pointsSinceLastLevelBeforeGame", "pointsUntilNextLevelBeforeGame", (function() {
                    return this.get("pointsSinceLastLevelBeforeGame") + this.get("pointsUntilNextLevelBeforeGame")
                })),
                beforeMatchPercentFill: n.Ember.computed("pointsSinceLastLevelBeforeGame", "currentLevelTotalMasteryPoints", (function() {
                    return this.get("pointsSinceLastLevelBeforeGame") / this.get("currentLevelTotalMasteryPoints") * 100
                })),
                currentLevelPercentFill: n.Ember.computed("pointsGained", "currentLevelTotalMasteryPoints", (function() {
                    return this.get("pointsGained") / this.get("currentLevelTotalMasteryPoints") * 100
                })),
                spilloverMasteryPoints: n.Ember.computed("pointsGained", "pointsUntilNextLevelBeforeGame", (function() {
                    return this.get("pointsGained") - this.get("pointsUntilNextLevelBeforeGame")
                })),
                nextLevelTotalMasteryPoints: n.Ember.computed("pointsUntilNextLevelAfterGame", "spilloverMasteryPoints", (function() {
                    return this.get("pointsUntilNextLevelAfterGame") + this.get("spilloverMasteryPoints")
                })),
                nextLevelPercentFill: n.Ember.computed("nextLevelTotalMasteryPoints", "spilloverMasteryPoints", (function() {
                    const e = this.get("nextLevelTotalMasteryPoints");
                    return this.get("spilloverMasteryPoints") / e * 100
                }))
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                },
                l = s(154);
            var i = a.Ember.Component.extend(o.default, {
                classNames: ["rating-change-component"],
                classNameBindings: ["isWin::is-loss", "lpChangeClassName:expanded"],
                rankedAssetsService: a.Ember.inject.service("ranked-assets"),
                isBeingPromoted: !1,
                isBeingDemoted: !1,
                isInMiniseries: !1,
                isLossPrevented: !1,
                willAnimate: !1,
                didAnimate: !1,
                showAnimatedElements: a.Ember.computed.or("willAnimate", "didAnimate"),
                isPromotedOrDemoted: a.Ember.computed.or("isBeingPromoted", "isBeingDemoted"),
                shouldShowAnimatedRatingDeltaString: a.Ember.computed("ratingDelta", "isInMiniseries", "isPromotedOrDemoted", "isLossPrevented", "lpChangeClassName", "willAnimate", (function() {
                    return !(this.get("ratingDelta") <= 0) && !this.get("isInMiniseries") && !this.get("isPromotedOrDemoted") && !this.get("isLossPrevented") && !this.get("lpChangeClassName") && this.get("willAnimate")
                })),
                willDestroyElement() {
                    this._super(...arguments);
                    const e = this.get("animationTimeline");
                    e && e.kill()
                },
                _playIntroAnimation() {
                    const e = this.get("ratingDelta"),
                        t = this.get("isWin"),
                        s = this.get("shouldShowAnimatedRatingDeltaString"),
                        n = {
                            amount: 0
                        },
                        o = this.element.querySelector(".points-gained-spark-video"),
                        l = new a.gsap.TimelineMax({
                            paused: !0,
                            onComplete: () => {
                                this.set("didAnimate", !0)
                            }
                        });
                    l.add(a.gsap.TweenLite.to(n, .3, {
                        amount: e,
                        onUpdate: () => {
                            this.set("animatedPointsText", this.get("getLocForRatingChange")(Math.round(n.amount)))
                        }
                    }), "start+=0.2"), s && t ? (l.add((() => {
                        this.playSound("sfx-eog-ui-exp-burst.ogg")
                    }), "start+=0.2"), o && l.add((() => {
                        o.play()
                    }), "start+=0.4")) : t || l.add((() => {
                        this.playSound("sfx-eog-ui-exp-burst-negative.ogg")
                    }), "start+=0.2"), this.set("animationTimeline", l), l.play()
                },
                didUpdateAttrs() {
                    this._super(...arguments), this.get("willAnimate") && !this.get("didAnimate") && a.Ember.run.scheduleOnce("afterRender", this, this._playIntroAnimation)
                },
                ratingChangeLoc: a.Ember.computed("ratingDelta", "getLocForRatingChange", (function() {
                    const e = this.get("getLocForRatingChange");
                    return e ? e(this.get("ratingDelta")) : ""
                })),
                showRatingChangeTooltip: a.Ember.computed("lpChangeClassName", (function() {
                    return Boolean(this.get("lpChangeClassName"))
                })),
                lpChangeIcon: a.Ember.computed("rankedAssetsService.assets.autofillEmblemIconPath", (function() {
                    return this.get("rankedAssetsService.assets.autofillEmblemIconPath")
                })),
                tooltipDescription: a.Ember.computed("rankedAssetsService.assets.lpChangeValorAegisIconTooltipBodyLoc", "lpChangeClassName", (function() {
                    const e = this.get("lpChangeClassName");
                    return e !== l.AEGIS_AWARDED_REASONS.autofill && e !== l.AEGIS_AWARDED_REASONS.scarce ? this.get("tra.jade_postgame_progression_ranked_aegis_awarded_generic_tooltip") : this.get("rankedAssetsService.assets.lpChangeValorAegisIconTooltipBodyLoc")
                })),
                updateResultLoc: a.Ember.computed("ratingChangeLoc", "isPromotedOrDemoted", "isInMiniseries", "isWin", "isLossPrevented", "lpChangeClassName", "rankedAssetsService.assets", (function() {
                    const e = this.get("isWin");
                    return this.get("isInMiniseries") ? e ? this.get("tra.career_postgame_ranked_win_short") : this.get("tra.career_postgame_ranked_loss_short") : this.get("isPromotedOrDemoted") ? e ? this.get("tra.career_postgame_ranked_promoted_short") : this.get("tra.career_postgame_ranked_demoted_short") : this.get("isLossPrevented") ? this.get("tra.career_postgame_ranked_loss_prevented") : this.get("lpChangeClassName") && !this.get("overrideShowLp") ? e ? this.get("rankedAssetsService.assets.lpChangeValorBonusLoc") : this.get("rankedAssetsService.assets.lpChangeValorProtectionLoc") : this.get("ratingChangeLoc")
                }))
            });
            t.default = i
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AEGIS_AWARDED_REASONS = void 0;
            t.AEGIS_AWARDED_REASONS = {
                autofill: "AUTOFILL_AEGIS",
                scarce: "SCARCE_AEGIS"
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var l = a.Ember.Component.extend(o.default, {
                classNames: ["ranked-progression-component"],
                classNameBindings: ["isWin::is-loss", "isLossPrevented", "consolationLpApplied", "leaverPenaltyApplied", "isRankProvisional"],
                willAnimate: !1,
                getLocForLpChange: function(e) {
                    const t = a.leagueTierNames.getLpLoc(e);
                    return e < 0 ? t : `+${t}`
                },
                tierRankLoc: a.Ember.computed("tier", "division", (function() {
                    return a.leagueTierNames.getFullTierDivisionName(this.get("tier"), this.get("division"))
                })),
                lpChangeLoc: a.Ember.computed("leaguePointsDelta", (function() {
                    return this.getLocForLpChange(this.get("leaguePointsDelta"))
                })),
                lpConsolationLoc: a.Ember.computed("consolationLpUsed", (function() {
                    return this.getLocForLpChange(this.get("consolationLpUsed"))
                })),
                leaverPenaltyLoc: a.Ember.computed("afkLpPenaltyAmount", (function() {
                    return this.getLocForLpChange(this.get("afkLpPenaltyAmount"))
                })),
                consolationLpApplied: a.Ember.computed.gt("consolationLpUsed", 0),
                leaverPenaltyApplied: a.Ember.computed.lt("afkLpPenaltyAmount", 0),
                isRankProvisional: a.Ember.computed.gt("provisionalGamesRemaining", 0),
                updateResultStatusText: a.Ember.computed("tierRankLoc", "consolationLpApplied", "lpConsolationLoc", "leaverPenaltyApplied", "leaverPenaltyLoc", (function() {
                    return this.get("consolationLpApplied") ? this.get("tra").formatString("career_postgame_ranked_loss_mitigated_consolation_lp_used", {
                        consolationLpUsed: this.get("lpConsolationLoc")
                    }) : this.get("leaverPenaltyApplied") ? this.get("tra").formatString("career_postgame_ranked_afk_penalty_applied", {
                        afkLpPenaltyAmount: this.get("leaverPenaltyLoc")
                    }) : this.get("tierRankLoc")
                })),
                currentLpLoc: a.Ember.computed("leaguePoints", "leaguePointsDelta", "lpChangeClassName", (function() {
                    const e = this.get("leaguePointsDelta") || 0;
                    return this.get("lpChangeClassName") && e > 0 ? a.leagueTierNames.getLpLoc(this.get("leaguePoints"), e) : a.leagueTierNames.getLpLoc(this.get("leaguePoints")) || ""
                })),
                isInMiniseries: a.Ember.computed("miniseriesProgress.length", (function() {
                    return this.get("miniseriesProgress.length") > 0
                })),
                isBeingPromoted: a.Ember.computed("notifyReason", (function() {
                    return "LEAGUE_PROMOTED" === this.get("notifyReason")
                })),
                isBeingDemoted: a.Ember.computed("notifyReason", (function() {
                    return "LEAGUE_DEMOTED" === this.get("notifyReason")
                }))
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["miniseries-progress-component"],
                    miniseriesResultArray: n.Ember.computed("miniseriesProgress", (function() {
                        const e = [],
                            t = this.get("miniseriesProgress") || "";
                        for (let s = 0; s < t.length; s++) e.push(t.charAt(s));
                        return e
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const i = "/lol-challenges/v1/penalty",
                r = "/lol-challenges/v1/available-queue-ids",
                m = .9;
            var c = a.Ember.Component.extend(l.default, {
                classNames: ["challenge-update-container-component"],
                classNameBindings: ["willAnimate:is-animating"],
                renderEventName: "challenge-container-render",
                shouldSendTelemetry: !1,
                postgame: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                eternalsUpdatesCount: a.Ember.computed.alias("eternals.length"),
                challengeUpdatesCount: a.Ember.computed.alias("challenges.length"),
                hasNoEternalsUpdates: a.Ember.computed.equal("eternalsUpdatesCount", 0),
                hasNoChallengeUpdates: a.Ember.computed.equal("challengeUpdatesCount", 0),
                willAnimate: !1,
                didAnimate: !1,
                isAnimationQueued: !1,
                showAnimatedElements: a.Ember.computed.or("willAnimate", "didAnimate"),
                animationsEnabled: a.Ember.computed.alias("postgame.largeAreaAnimationsEnabled"),
                isWaitingForChallengesUpdate: a.Ember.computed("items.[]", "hasWarning", (function() {
                    const e = this.get("items") || [];
                    return !(this.get("hasWarning") || e && e[0])
                })),
                isPostgameChallengesDisabled: a.Ember.computed.not("postgame.postgameChallengesEnabled"),
                init() {
                    this._super(...arguments), this.binding = a.dataBinding.bindTo(a.socket), this.binding.observe(i, this, this._handleChallengesPenalty.bind(this)), this.binding.observe(r, this, this._handleChallengesQueues.bind(this)), this.set("elementWidth", this.get("elementWidthOverride") || 197)
                },
                didUpdateAttrs() {
                    this._super(...arguments), !this.get("willAnimate") || this.get("didAnimate") || this.get("isAnimationQueued") || this.get("hasWarning") || a.Ember.run.scheduleOnce("afterRender", this, this._queueIntroAnimation), !this.get("isWaitingForChallengesUpdate") && this.get("isAnimationQueued") && this._dequeueIntroAnimation()
                },
                willDestroyElement() {
                    this._super(...arguments), this.binding.unobserve(i, this), this.binding.unobserve(r, this);
                    const e = this.get("animationTimeline");
                    e && e.kill()
                },
                _queueIntroAnimation() {
                    this.get("isAnimationQueued") || (this.get("isWaitingForChallengesUpdate") ? (a.Ember.run.later((() => {
                        this._cancelIntroAnimation()
                    }), 5e3), this.set("isAnimationQueued", !0)) : this._playIntroAnimation())
                },
                _dequeueIntroAnimation() {
                    this.get("isAnimationQueued") && (a.Ember.run.scheduleOnce("afterRender", this, this._playIntroAnimation), this.set("isAnimationQueued", !1))
                },
                _cancelIntroAnimation() {
                    this.set("isAnimationQueued", !1)
                },
                _playIntroAnimation() {
                    const e = this.element.querySelectorAll(".container-item"),
                        t = this.element.querySelectorAll(".container-item-contents"),
                        s = this.element.querySelector(".challenge-progression-top"),
                        n = this.get("hasWarning"),
                        o = new a.gsap.TimelineMax({
                            paused: !0,
                            onComplete: () => {
                                this.set("didAnimate", !0)
                            }
                        });
                    for (let e = 0; e < t.length; e++) o.fromTo(t[e], .33, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, "start+=" + (.5 * e + 1));
                    for (let t = 0; t < e.length; t++) {
                        const s = e[t],
                            a = s.getAttribute("anim-data-challenge-level");
                        if (!s.hasAttribute("anim-data-is-empty") && !n)
                            if (a) {
                                const e = s.hasAttribute("anim-data-is-levelup"),
                                    n = s.querySelector(".lottie-card-outline");
                                n && (o.add((() => {
                                    n.play()
                                }), `start+=${.5*t+m}`), o.to(n, .3, {
                                    opacity: 0
                                }, `start+=${.5*t+m+1}`));
                                const l = s.querySelector(".lottie-card-sheen");
                                if (l && (o.add((() => {
                                        l.play()
                                    }), `start+=${.5*t+m}`), o.to(l, .3, {
                                        opacity: 0
                                    }, `start+=${.5*t+m+1}`)), e) {
                                    const e = s.querySelector(".anim-card-intro");
                                    e && (o.add((() => {
                                        e.play()
                                    }), "start+=" + (.5 * t + m - .1)), o.to(e, .3, {
                                        opacity: 0
                                    }, `start+=${.5*t+m+1}`)), o.add((() => {
                                        this.playSound(`sfx-eog-ui-${a.toLowerCase()}-burst.ogg`)
                                    }), `start+=${.5*t+m}`)
                                } else o.add((() => {
                                    this.playSound("sfx-eog-ui-neutral-burst.ogg")
                                }), `start+=${.5*t+m}`)
                            } else {
                                const e = s.hasAttribute("anim-data-is-milestone"),
                                    n = s.querySelector(".lottie-card-outline");
                                if (n && (o.add((() => {
                                        n.play()
                                    }), `start+=${.5*t+m}`), o.to(n, .3, {
                                        opacity: 0
                                    }, `start+=${.5*t+m+1}`)), e) {
                                    const e = s.querySelector(".anim-card-intro");
                                    e && (o.add((() => {
                                        e.play()
                                    }), "start+=" + (.5 * t + m - .1)), o.to(e, .3, {
                                        opacity: 0
                                    }, `start+=${.5*t+m+1}`)), o.add((() => {
                                        this.playSound("sfx-eog-eternals-burst.ogg")
                                    }), `start+=${.5*t+m}`)
                                }
                            }
                    }
                    o.add((() => {
                        this.sendAction("playOutlineAnimation"), this.playSound("sfx-eog-ui-edge-flare.ogg")
                    }), "start+=3"), s && o.fromTo(s, .33, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, "start+=3.2"), this.set("animationTimeline", o), o.play()
                },
                _handleChallengesPenalty(e) {
                    e && this.set("challengesPenaltyReason", e.reason)
                },
                _handleChallengesQueues(e) {
                    this.set("challengesQueues", e)
                },
                isAfker: a.Ember.computed("postgame.player.stats.WAS_AFK", (function() {
                    return this.get("postgame.player.stats.WAS_AFK")
                })),
                isChallengesLeaver: a.Ember.computed.equal("challengesPenaltyReason", "leaver"),
                isPostgameLeaver: a.Ember.computed.or("postgame.player.leaver", "postgame.player.wasAfk"),
                isLeaver: a.Ember.computed.or("isChallengesLeaver", "isPostgameLeaver", "isAfker"),
                hasWarning: a.Ember.computed.or("isLeaver", "isRemake", "isNotChallengesProgressQueue", "isPostgameChallengesDisabled"),
                isRemake: a.Ember.computed.or("postgame.isEarlySurrenderBystander", "isEarlySurrenderCauser", "isEarlySurrenderAccomplice"),
                isEarlySurrenderCauser: a.Ember.computed.and("postgame.eogStatsBlock.gameEndedInEarlySurrender", "postgame.eogStatsBlock.teamEarlySurrendered", "postgame.eogStatsBlock.causedEarlySurrender"),
                isEarlySurrenderAccomplice: a.Ember.computed.and("postgame.eogStatsBlock.gameEndedInEarlySurrender", "postgame.eogStatsBlock.teamEarlySurrendered", "postgame.eogStatsBlock.isEarlySurrenderAccomplice"),
                isNotChallengesProgressQueue: a.Ember.computed("challengesQueues.[]", "gameflow.queue.id", (function() {
                    const e = this.get("gameflow.queue.id");
                    return !(this.get("challengesQueues") || []).includes(e)
                })),
                cards: a.Ember.computed("items.[]", (function() {
                    return (this.get("items") || []).map(((e, t) => e ? e.currentLevel ? this._decorateChallengeCard(e, t) : this._decorateEternalsCard(e, t) : {
                        isEmpty: !0
                    }))
                })),
                _decorateChallengeCard(e, t) {
                    const {
                        currentValue: s,
                        previousValue: n,
                        currentThreshold: a
                    } = e, o = Math.abs(s - n), l = Math.abs(s - a);
                    return e.isLevelUp = o > l, e.animateStartDelay = .5 * t + m - .2, e
                },
                _decorateEternalsCard: (e, t) => (e.animateStartDelay = .5 * t + m - .2, e),
                actions: {
                    openChallengesModal() {
                        this.get("hasNoChallengeUpdates") || this.sendAction("openModal", o.MODAL_CATEGORY.CHALLENGES)
                    },
                    openEternalsModal() {
                        this.get("hasNoEternalsUpdates") || this.sendAction("openModal", o.MODAL_CATEGORY.ETERNALS)
                    }
                }
            });
            t.default = c
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["challenge-updates-tooltip-container"],
                    upgradedChallenges: n.Ember.computed("challengeUpdates", (function() {
                        const e = this.get("challengeUpdates");
                        if (e && e.get("upgraded")) {
                            const t = e.get("upgraded");
                            return {
                                upgraded: t,
                                count: t.length
                            }
                        }
                        return null
                    })),
                    progressedChallenges: n.Ember.computed("challengeUpdates", (function() {
                        const e = this.get("challengeUpdates");
                        if (e && e.get("progressed")) {
                            const t = e.get("progressed");
                            return {
                                progressed: t,
                                count: t.length
                            }
                        }
                        return null
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["eternals-updates-tooltip-container"],
                    newMilestoneText: n.Ember.computed("tra", "eternalsUpdates", "newMilestoneEternals", (function() {
                        const e = this.get("newMilestoneEternals");
                        return e && e.count > 1 ? this.get("tra").get("postgame_eternals_tooltip_new_milestones") : this.get("tra").get("postgame_eternals_tooltip_new_milestone")
                    })),
                    newPersonalBestEternals: n.Ember.computed("eternalsUpdates", (function() {
                        const e = this.get("eternalsUpdates");
                        if (e && e.get("new_personal_best")) {
                            const t = e.get("new_personal_best");
                            return {
                                newPersonalBest: t,
                                count: t.length
                            }
                        }
                        return null
                    })),
                    newMilestoneEternals: n.Ember.computed("eternalsUpdates", (function() {
                        const e = this.get("eternalsUpdates");
                        if (e && e.get("new_milestone")) {
                            const t = e.get("new_milestone");
                            return {
                                milestones: t,
                                count: t.length
                            }
                        }
                        return null
                    })),
                    progressedEternals: n.Ember.computed("eternalsUpdates", (function() {
                        const e = this.get("eternalsUpdates");
                        if (e && e.get("progressed")) {
                            const t = e.get("progressed");
                            return {
                                progressed: t,
                                count: t.length
                            }
                        }
                        return null
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var i = a.Ember.Component.extend(l.default, a.Ember.Evented, {
                classNames: ["postgame-party-status-v2"],
                animationsEnabled: !0,
                partyStatus: null,
                readyPlayers: a.Ember.computed.alias("partyStatus.readyPlayers"),
                leftPlayers: a.Ember.computed.alias("partyStatus.leftPlayers"),
                eogPlayers: a.Ember.computed.alias("partyStatus.eogPlayers"),
                partySize: a.Ember.computed.alias("partyStatus.partySize"),
                numPlayersLeft: a.Ember.computed.alias("leftPlayers.length"),
                numPlayersReady: a.Ember.computed.alias("readyPlayers.length"),
                summonerService: a.Ember.inject.service("summoner"),
                gameDataService: a.Ember.inject.service("game-data"),
                animationTimeline: null,
                partyGroupData: null,
                init: function() {
                    this._super(...arguments), this._playerNames = a.playerNames;
                    const e = this.get("eogPlayers");
                    e && this._fetchSummonerDataAndIcon(e)
                },
                partyStatusToolTip: a.Ember.computed("partyGroupData", "readyPlayers.[]", "leftPlayers.[]", (function() {
                    const e = this.get("partyGroupData"),
                        t = this.get("readyPlayers"),
                        s = this.get("leftPlayers");
                    if (e && t && s) {
                        const t = [];
                        return e.forEach((e => {
                            t.push({
                                profileIconPath: e.profileIconPath,
                                displayName: e.displayName,
                                puuid: e.puuid,
                                partyStatus: this._getPartyStatusString(e.puuid)
                            })
                        })), this._sortPartyGroupByRowOrder(t), t
                    }
                })),
                numPlayersReadyChangedObserver: a.Ember.observer("numPlayersReady", "animationsEnabled", (function() {
                    this.get("animationsEnabled") && a.Ember.run.once(this, "_playReturnToLobbyIconAnimation")
                })),
                showComponent: a.Ember.computed("readyPlayers", "eogPlayers", "leftPlayers", "readyPlayers.[]", "eogPlayers.[]", "leftPlayers.[]", (function() {
                    return !!(this.get("readyPlayers") && this.get("eogPlayers") && this.get("leftPlayers")) && this.get("readyPlayers.length") + this.get("eogPlayers.length") + this.get("leftPlayers.length") > 1
                })),
                showPartyStatusTooltipOnHover: a.Ember.computed("partyGroupData.[]", (function() {
                    return !!this.get("partyGroupData") && this.get("partyGroupData.length") > 0
                })),
                willDestroyElement() {
                    this._super(...arguments);
                    const e = this.get("animationTimeline");
                    e && e.kill()
                },
                _playReturnToLobbyIconAnimation() {
                    let e = this.get("animationTimeline");
                    if (e && e.isActive()) return e.seek(e.totalDuration(), !0), void e.restart();
                    const t = this.element.querySelector(".postgame-party-status-v2-icon");
                    e = new a.gsap.TimelineMax({
                        paused: !0
                    }), t && (e.to(t, .2, {
                        scaleX: 1.8,
                        scaleY: 1.8,
                        ease: "cubic-bezier(0, 0, 0, 1)"
                    }, "start"), e.to(t, .2, {
                        scaleX: 1,
                        scaleY: 1,
                        ease: "cubic-bezier(1, 0, 1, 1)"
                    }, "start+=0.3")), this.set("animationTimeline", e), e.play()
                },
                _getPartyStatusString(e) {
                    const t = this.get("readyPlayers"),
                        s = this.get("leftPlayers"),
                        n = t && t.includes(e),
                        a = s && s.includes(e);
                    return n ? o.PARTY_STATUS.READY_STATUS : a ? o.PARTY_STATUS.LEFT_PARTY_STATUS : o.PARTY_STATUS.DEFAULT_WAITING_STATUS
                },
                _fetchSummonerDataAndIcon(e) {
                    const t = this._playerNames.isUsingAlias;
                    this.get("summonerService").getSummonersByPuuid(e).then((e => {
                        const s = [];
                        e.forEach((e => {
                            e && s.push(this.get("gameDataService").getSummonerIcon(e.profileIconId))
                        })), Promise.all(s).then((s => {
                            if (s) {
                                const n = [];
                                e.forEach(((e, a) => {
                                    const o = t ? `${e.gameName} #${e.tagLine}` : e.displayName;
                                    s[a] && n.push({
                                        puuid: e.puuid,
                                        displayName: o,
                                        profileIconPath: s[a].iconPath
                                    })
                                })), this.set("partyGroupData", n)
                            }
                        }))
                    }))
                },
                _sortPartyGroupByRowOrder(e) {
                    e && e.sort(((e, t) => o.PLAYER_STATUS_TO_ORDER_MAP[e.partyStatus] - o.PLAYER_STATUS_TO_ORDER_MAP[t.partyStatus]))
                }
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            s(162);
            var a = n.Ember.Component.extend({
                classNames: ["progression-modal-root-component"],
                challenges: [],
                eternals: [],
                showEternalsData: n.Ember.computed.bool("showEternalsData"),
                showChallengesData: n.Ember.computed.bool("showChallengessData"),
                actions: {
                    closeModal() {
                        this.sendAction("closeModal")
                    }
                }
            });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(164),
                o = s(3),
                l = n.Ember.Component.extend({
                    classNames: ["scoreboard-header-component"],
                    classNameBindings: ["team.isPlayerTeam"],
                    gameflow: n.Ember.inject.service(),
                    showScoreboardColumnIcons: n.Ember.computed.equal("index", 0),
                    gameMode: n.Ember.computed.alias("gameflow.gameflowSession.gameData.queue.gameMode"),
                    teamGoldLoc: n.Ember.computed("team.stats.GOLD_EARNED", "locale", (function() {
                        return (this.get("team.stats.GOLD_EARNED") || 0).toLocaleString(this.get("locale"))
                    })),
                    teamPlacementLoc: n.Ember.computed((function() {
                        return this.get("tra").formatString(o.CHERRY_PLACEMENT_TRA_KEY + this.get("team.stats.PLAYER_SUBTEAM_PLACEMENT")) || ""
                    })),
                    teamIcon: n.Ember.computed((function() {
                        const e = this.get("team.stats.PLAYER_SUBTEAM"),
                            t = this._getSubteamData(e);
                        if (t) return t.display.icon
                    })),
                    teamNameLoc: n.Ember.computed("index", "tra.ready", (function() {
                        const e = this.get("team.stats.PLAYER_SUBTEAM"),
                            t = this._getSubteamData(e),
                            s = this.get("tra");
                        if (t) return s.formatString(t.display.label, {
                            teamNumber: e
                        })
                    })),
                    kdaLoc: n.Ember.computed("team.stats.CHAMPIONS_KILLED", "team.stats.NUM_DEATHS", "team.stats.ASSISTS", "tra.ready", (function() {
                        const e = this.get("tra"),
                            t = this.get("team.stats");
                        return (0, a.getKdaFull)(t, e)
                    })),
                    actions: {
                        selectStat: function(e, t) {
                            this.sendAction("setSelectedStat", e, t)
                        }
                    },
                    _getSubteamData: function(e) {
                        const t = o.GAME_MODES_WITH_SUBTEAMS,
                            s = this.get("gameMode");
                        if (t && s) return t[s].subteams.find((t => t.subteamId === e))
                    }
                });
            t.default = l
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getKdaDecimal = function(e, t) {
                if (!e) return "";
                const s = e.CHAMPIONS_KILLED || 0,
                    n = e.NUM_DEATHS || 1,
                    a = e.ASSISTS || 0,
                    o = Intl.NumberFormat(t.metadata.bcp47Tag, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                        numberingSystem: "latn"
                    }).format((s + a) / n);
                return t.formatString("postgame_scoreboard_row_kda_decimal", {
                    kda: o
                })
            }, t.getKdaFull = function(e, t) {
                if (e) {
                    const s = e.CHAMPIONS_KILLED || 0,
                        n = e.NUM_DEATHS || 0,
                        a = e.ASSISTS || 0;
                    return t.formatString("postgame_scoreboard_row_kda_full", {
                        kills: s,
                        deaths: n,
                        assists: a
                    })
                }
                return ""
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(164),
                o = n.Ember.Component.extend({
                    classNames: ["scoreboard-header-component"],
                    classNameBindings: ["team.isPlayerTeam"],
                    showScoreboardColumnIcons: n.Ember.computed.equal("index", 0),
                    teamGoldLoc: n.Ember.computed("team.stats.GOLD_EARNED", "locale", (function() {
                        return (this.get("team.stats.GOLD_EARNED") || 0).toLocaleString(this.get("locale"))
                    })),
                    teamNameLoc: n.Ember.computed("index", "tra.ready", (function() {
                        const e = this.get("index") + 1;
                        return this.get("tra").formatString("postgame_scoreboard_header_team_label", {
                            teamNumber: e
                        })
                    })),
                    kdaLoc: n.Ember.computed("team.stats.CHAMPIONS_KILLED", "team.stats.NUM_DEATHS", "team.stats.ASSISTS", "tra.ready", (function() {
                        const e = this.get("tra"),
                            t = this.get("team.stats");
                        return (0, a.getKdaFull)(t, e)
                    })),
                    actions: {
                        selectStat: function(e, t) {
                            this.sendAction("setSelectedStat", e, t)
                        }
                    }
                });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            const i = a.dataBinding.bindTo((0, a.getProvider)().getSocket()),
                {
                    RunMixin: r
                } = a.EmberAddons.EmberLifeline;
            var m = a.Ember.Component.extend(r, l.default, {
                classNames: ["scoreboard-honor-flair-component"],
                honor: a.Ember.inject.service(),
                gameName: null,
                tagLine: null,
                summonerName: null,
                displayName: a.Ember.computed("gameName", "tagLine", "summonerName", (function() {
                    return this._playerNames.isUsingAlias ? `${this.get("gameName")} #${this.get("tagLine")}` : this.get("summonerName")
                })),
                isLowSpec: !1,
                chatCelebrationSent: !1,
                usingHonorCeremonyV3: !0,
                teamChoiceIconPath: o.HONOR_ASSET_PATH + "Honor-Leaf.svg",
                teamChoiceMograph: o.HONOR_VIDEO_PATH + "EOG_ScoreBoard_Honor.webm",
                hasScoreboardAnimationPlayed: !1,
                hasCelebrated: !1,
                uxSettings: a.Ember.computed.readOnly("honor.uxSettings"),
                teamChoices: a.Ember.computed.readOnly("honor.teamChoices"),
                conversations: a.Ember.computed.readOnly("honor.conversations"),
                init() {
                    this._super(...arguments), this._playerNames = a.playerNames, this.addObserver("conversationId", this, "processChatCelebration"), this.addObserver("hasCelebrated", this, "processChatCelebration"), this.get("hasCelebrated") && !this.get("hasScoreboardAnimationPlayed") && this.processChatCelebration(), i.observe("/lol-honor-v2/v1/config", this, this.handleConfigUpdate)
                },
                handleConfigUpdate: function(e) {
                    void 0 !== e.ceremonyV3Enabled && null !== e.ceremonyV3Enabled && this.set("usingHonorCeremonyV3", e.ceremonyV3Enabled)
                },
                willDestroyElement() {
                    this._super(...arguments), this.removeObserver("conversationId", this, "processChatCelebration"), this.removeObserver("hasCelebrated", this, "processChatCelebration"), this.removeObserver("uxSettings.data.potatoModeEnabled", this, "lowSpecHandler"), this.removeObserver("teamChoices.[]", this, "processRecipients");
                    const e = this.$(".honor-flair-video");
                    e && e.attr("src", "");
                    const t = this.get("animationTimeline");
                    t && t.kill(), i.unobserve("/lol-honor-v2/v1/config", this)
                },
                didInsertElement() {
                    this._super(...arguments), this.addObserver("uxSettings.data.potatoModeEnabled", this, "lowSpecHandler"), this.addObserver("teamChoices.[]", this, "processRecipients"), this.lowSpecHandler(), this.processRecipients()
                },
                lowSpecHandler: function() {
                    this.get("hasCelebrated") || this.set("isLowSpec", this.get("uxSettings.data.potatoModeEnabled"))
                },
                processRecipients: function() {
                    const e = this.get("puuid"),
                        t = this.get("teamChoices");
                    !this.get("hasCelebrated") && t && t.includes(e) && this._playHonorAnimation()
                },
                celebrateHonors: function() {
                    const e = this.$(".honor-flair-video");
                    e && e[0] && e[0].play(), this.playSound("sfx-honor-scoreboard-team-choice.ogg")
                },
                _playHonorAnimation() {
                    let e = this.get("animationTimeline");
                    e && e.isActive() && e.kill(), e = new a.gsap.TimelineMax({
                        paused: !0,
                        onComplete: () => {
                            this.sendAction("updateHonorCelebrationAnimation", !0)
                        }
                    }), e.add((() => {
                        this.celebrateHonors.bind(this)()
                    }), "start+=2.0"), this.set("animationTimeline", e), e.play()
                },
                willAnimate: a.Ember.computed("isLowSpec", "hasCelebated", (function() {
                    return !this.get("isLowSpec") && !this.get("hasCelebrated")
                })),
                tooltipText: a.Ember.computed("isLocalPlayer", "tra.ready", "displayName", "usingHonorCeremonyV3", (function() {
                    return this.get("usingHonorCeremonyV3") ? this.get("tra").formatString("honor_postgame_most_honorable_player_tooltip_generic") : this.get("isLocalPlayer") ? this.get("tra").formatString("honor_postgame_most_honorable_player_tooltip") : this.get("tra").formatString("honor_postgame_most_honorable_player_tooltip_other", {
                        playerName: this.get("displayName")
                    })
                })),
                processChatCelebration: function() {
                    const e = this.get("conversationId"),
                        t = this.get("hasCelebrated"),
                        s = this.get("chatCelebrationSent");
                    e && t && !s && (this.set("chatCelebrationSent", !0), this.createChatCelebration(e))
                },
                createChatCelebration: function(e) {
                    let t;
                    this.get("usingHonorCeremonyV3") ? this.get("isLocalPlayer") && (t = this.get("tra").formatString("honor_postgame_most_honorable_player_chat_celebration_v3"), this.runTask((() => {
                        i.post(`/lol-chat/v1/conversations/${encodeURIComponent(e)}/messages`, {
                            body: t,
                            type: "celebration"
                        })
                    }), 1e3)) : (t = this.get("isLocalPlayer") ? this.get("tra").formatString("honor_postgame_most_honorable_player_chat_celebration") : this.get("isPlayerTeam") ? this.get("tra").formatString("honor_postgame_most_honorable_player_chat_celebration_teammate", {
                        playerName: this.get("displayName")
                    }) : this.get("tra").formatString("honor_postgame_most_honorable_player_chat_celebration_other", {
                        playerName: this.get("displayName")
                    }), this.runTask((() => {
                        i.post(`/lol-chat/v1/conversations/${encodeURIComponent(e)}/messages`, {
                            body: t,
                            type: "celebration"
                        })
                    }), 1e3))
                },
                conversationId: a.Ember.computed("conversations.@each.id", (function() {
                    const e = this.get("conversations");
                    let t = null;
                    return e && e.some((function(e) {
                        if (e.type === o.CONVERSATION_TYPE_POSTGAME) return t = e.id, !0
                    })), t
                }))
            });
            t.default = m
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(3),
                l = s(39),
                i = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            var r = a.Ember.Component.extend(i.default, {
                classNames: ["scoreboard-root-component"],
                gameflow: a.Ember.inject.service(),
                postgame: a.Ember.inject.service(),
                hasScoreboardAnimationPlayed: !1,
                hasCelebratedHonor: !1,
                isContinueButtonClicked: !1,
                showTeamIntroAnimation: !1,
                backgroundMusic: a.Ember.computed.alias("gameflow.map.assets.postgame-ambience-loop-sound"),
                isCherry: a.Ember.computed.alias("gameflow.isCherry"),
                init() {
                    this._super(...arguments), this.set("statSwitcherStatName1", o.STAT_SWITCHER_STATS.DAMAGE_DEALT), this.set("statSwitcherStatName2", o.STAT_SWITCHER_STATS.GOLD), a.Telemetry.startTracingEvent(l.TELEMETRY_EVENT_NAMES.TIME_ON_SCOREBOARD_SCREEN)
                },
                didInsertElement() {
                    this._super(...arguments), this.get("hasScoreboardAnimationPlayed") || a.Ember.run.scheduleOnce("afterRender", this, this._playScoreboardAnimation), this.addObserver("backgroundMusic", this, "_handleBackgroundMusic"), this._handleBackgroundMusic()
                },
                willDestroyElement() {
                    this._super(...arguments);
                    const e = this.get("animationTimeline");
                    e && e.kill(), a.Telemetry.endTracingEvent(l.TELEMETRY_EVENT_NAMES.TIME_ON_SCOREBOARD_SCREEN);
                    const t = this.get("_bgMusic");
                    t && t.fadeOut(void 0, {
                        stop: !0
                    }), this.removeObserver("backgroundMusic", this, "_handleBackgroundMusic")
                },
                addNonZeroStatOptions: (e, t, s) => t.concat(e.filter((e => !!s[e]))),
                animationsEnabled: a.Ember.computed("postgame.largeAreaAnimationsEnabled", "postgame.disableEogAnimations", (function() {
                    return this.get("postgame.largeAreaAnimationsEnabled") && !this.get("postgame.disableEogAnimations")
                })),
                statSwitcher1Options: a.Ember.computed("highestStatValueByStatMap", (function() {
                    const e = this.get("highestStatValueByStatMap");
                    return this.addNonZeroStatOptions([o.STAT_SWITCHER_STATS.CC_SCORE], [o.STAT_SWITCHER_STATS.DAMAGE_DEALT, o.STAT_SWITCHER_STATS.DAMAGE_TAKEN], e)
                })),
                statSwitcher2Options: a.Ember.computed("highestStatValueByStatMap", (function() {
                    const e = this.get("highestStatValueByStatMap");
                    return this.addNonZeroStatOptions([o.STAT_SWITCHER_STATS.VISION_SCORE], [o.STAT_SWITCHER_STATS.GOLD, o.STAT_SWITCHER_STATS.CREEP_SCORE], e)
                })),
                highestStatValueByStatMap: a.Ember.computed("eogStats.teams.players.@each.stats", (function() {
                    const e = {};
                    return this.get("eogStats.teams").forEach((t => {
                        t.players.forEach((t => {
                            t.stats && Object.values(o.STAT_SWITCHER_STATS).forEach((s => {
                                e[s] = Math.max(e[s] || 0, t.stats[s] || 0)
                            }))
                        }))
                    })), e
                })),
                anyRoleBoundItemPresent: a.Ember.computed("eogStats.teams.players.@each.stats", (function() {
                    let e = !1;
                    return this.get("eogStats.teams").forEach((t => {
                        t.players.forEach((t => {
                            t.stats && t.stats.ROLE_BOUND_ITEM && (e = !0)
                        }))
                    })), e
                })),
                _handleBackgroundMusic() {
                    this.get("backgroundMusic") && !this.get("_bgMusic") && this.set("_bgMusic", this.playBackgroundMusic(this.get("backgroundMusic")))
                },
                _playScoreboardAnimation() {
                    const e = this.$(".scoreboard-root-content-container"),
                        t = a.gsap.Linear.easeNone;
                    if (this.get("animationsEnabled")) {
                        let s = this.get("animationTimeline");
                        s && s.isActive() && s.kill(), s = new a.gsap.TimelineMax({
                            paused: !0,
                            onComplete: () => {
                                this.sendAction("updateScoreboardAnimation", !0)
                            }
                        }), e && s.fromTo(e, .33, {
                            css: {
                                opacity: 0
                            },
                            ease: t
                        }, {
                            css: {
                                opacity: 1
                            }
                        }, "start+=0"), this.set("animationTimeline", s), s.play(), this.set("showTeamIntroAnimation", !0);
                        this.get("isContinueButtonClicked") || this.playSound("sfx-eog-chaos-order.ogg")
                    }
                },
                actions: {
                    setSelectedStat: function(e, t) {
                        this.set(`statSwitcherStatName${t}`, e)
                    },
                    updateHonorCelebrationAnimation(e) {
                        this.sendAction("updateHonorCelebrationAnimation", e)
                    }
                }
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(137),
                l = s(138),
                i = (n = s(38)) && n.__esModule ? n : {
                    default: n
                },
                r = s(30);
            const m = "/lol-parental-controls/v1/status";
            var c = a.Ember.Component.extend(i.default, {
                classNames: ["scoreboard-row-component"],
                classNameBindings: ["player.isLocalPlayer", "isLeaver:leaver", "team.isPlayerTeam:is-ally", "showNotInChat:not-in-chat"],
                endOfGameService: a.Ember.inject.service("end-of-game"),
                postgame: a.Ember.inject.service(),
                parties: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                playerActions: a.Ember.inject.service(),
                chatMessages: a.Ember.inject.service(),
                honor: a.Ember.inject.service(),
                challenges: a.Ember.inject.service(),
                currentLevel: a.Ember.computed.alias("topMostProgressedChallenge.currentLevel"),
                nextLevel: a.Ember.computed.alias("topMostProgressedChallenge.nextLevel"),
                isLeaver: a.Ember.computed.or("player.leaver", "player.wasAfk"),
                teamChoices: a.Ember.computed.readOnly("honor.teamChoices"),
                localPlayerChallengesData: a.Ember.computed.readOnly("challenges.localPlayerChallengesData"),
                isRowInitialized: !1,
                hasScoreboardAnimationPlayed: !1,
                hasCelebratedHonor: !1,
                animationsEnabled: !0,
                isFriendingRestricted: !1,
                init: function() {
                    this._super(...arguments), this.challengesBinding = (0, a.dataBinding)("/lol-challenges", a.socket), this.setupUpdatedChallengeListener(this.get("player")), this._initializeAnimationData(), a.db.observe(m, this, (e => {
                        this.set("isFriendingRestricted", e && e.enabled && e.isFriendingRestricted)
                    }))
                },
                willDestroyElement: function() {
                    this._super(...arguments), this.challengesBinding.unobserve(this.updatedChallengesPath, this), a.db.unobserve(m, this)
                },
                setupUpdatedChallengeListener(e) {
                    return (0, a.dataBinding)("/lol-summoner").get(`/v1/summoners/${e.summonerId}`).then((e => {
                        if (e) {
                            const {
                                puuid: t,
                                gameName: s,
                                tagLine: n
                            } = e;
                            this.set("puuid", t), this.set("gameName", s), this.set("tagLine", n);
                            const a = this.get("gameId");
                            this.updatedChallengePath = `/lol-challenges/v1/updated-challenges/${a}/${t}`, this.challengesBinding.observe(`/v1/updated-challenges/${a}/${t}`, this, this.handleUpdatedChallenge)
                        }
                    }))
                },
                handleUpdatedChallenge(e) {
                    this.set("updatedChallenges", e)
                },
                isPlayerMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isPlayerMuted)
                })),
                isSettingsMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isSettingsMuted)
                })),
                isSystemMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isSystemMuted)
                })),
                isPlayerMuteNotToggleable: a.Ember.computed.or("isSettingsMuted", "isSystemMuted"),
                isPlayerMuteToggleable: a.Ember.computed.not("isPlayerMuteNotToggleable"),
                showPlayerMute: a.Ember.computed("isPlayerMuted", "isSettingsMuted", (function() {
                    const e = this.get("isPlayerMuted"),
                        t = this.get("isSettingsMuted"),
                        s = this.get("isSystemMuted"),
                        n = t || e || s;
                    return this.animateMuteStatusUpdate(n), n
                })),
                topMostProgressedChallenge: a.Ember.computed("updatedChallenges", (function() {
                    const e = this.get("updatedChallenges") || {},
                        t = Object.values(e).filter((e => !e.isCapstone));
                    return (0, o.getFirstChallengeSlotScore)(t)
                })),
                showChallengeTooltipComparison: a.Ember.computed("localPlayerChallengesData", "isLocalPlayer", (function() {
                    const e = this.get("isLocalPlayer");
                    return this.get("localPlayerChallengesData") && !e
                })),
                updatedChallengeIcon: a.Ember.computed("topMostProgressedChallenge.levelToIconPath", "currentLevel", "nextLevel", (function() {
                    const e = this.get("topMostProgressedChallenge.levelToIconPath") || {},
                        t = this.get("currentLevel");
                    return e[t !== a.SharedChallengesConstants.CHALLENGE_LEVELS.NONE ? t : this.get("nextLevel")] || ""
                })),
                isInChatRoom: a.Ember.computed("chatMessages.summonerIdsInChat", "player.summonerId", (function() {
                    const e = this.get("player.summonerId");
                    return (this.get("chatMessages.summonerIdsInChat") || []).includes(e)
                })),
                showNotInChat: a.Ember.computed("isInChatRoom", "postgame.isLocalPlayerInGame", (function() {
                    const e = this.get("isInChatRoom"),
                        t = this.get("postgame.isLocalPlayerInGame");
                    return !e && t
                })),
                displayedPosition: a.Ember.computed("player.detectedPosition", "player.selectedPosition", (function() {
                    const e = this.get("player.detectedPosition"),
                        t = this.get("player.selectedPosition"),
                        s = (e || t || "").toLowerCase();
                    return "none" === s ? "" : s
                })),
                displayedPositionTranslatedText: a.Ember.computed("tra", "displayedPosition", (function() {
                    const e = this.get("displayedPosition");
                    return e ? this.get("tra").get(`postgame_scoreboard_lane_position_name_${e}`) : ""
                })),
                skinSplashStyle: a.Ember.computed("player.skinSplashPath", (function() {
                    return `background-image: url(${this.get("player.skinSplashPath")})`
                })),
                displayedAugments: a.Ember.computed("player.augments", (function() {
                    const e = this.get("player.augments") || [],
                        t = [];
                    for (let s = 0; s < r.NUMBER_AUGMENTS_TO_RENDER; ++s) {
                        const n = e[s] || 0;
                        t.push(n)
                    }
                    return t
                })),
                shouldShowButtons: a.Ember.computed("player.botPlayer", "player.isLocalPlayer", (function() {
                    return !this.get("player.botPlayer") && !this.get("player.isLocalPlayer")
                })),
                isFriendRequestDisabled: a.Ember.computed("player.summondId", "postgame.friendsList.[]", "playerActions.alreadyFriendRequestedList.[]", (function() {
                    const e = this.get("player.summonerId"),
                        t = this.get("playerActions.alreadyFriendRequestedList") || [],
                        s = this.get("postgame.friendsList") || [],
                        n = Boolean(s.find((t => t.summonerId === e))),
                        a = Boolean(t.find((t => t.summonerId === e)));
                    return n || a
                })),
                isReportDisabled: a.Ember.computed("player.puuid", "endOfGameService.reportedPlayers.[]", (function() {
                    const e = this.get("player.puuid");
                    return (this.get("endOfGameService.reportedPlayers") || []).includes(e)
                })),
                isInviteDisabled: a.Ember.computed("team.isPlayerTeam", "parties.enabled", "gameflow.canInviteOthersAtEog", "gameflow.lastQueuedMemberSummonerIds.[]", "player.summonerId", (function() {
                    return !(this.get("team.isPlayerTeam") && this.get("parties.enabled") && this.get("gameflow.canInviteOthersAtEog") && this.get("gameflow.lastQueuedMemberSummonerIds") && -1 === this.get("gameflow.lastQueuedMemberSummonerIds").indexOf(this.get("player.summonerId")))
                })),
                isPlayerBlocked: a.Ember.computed("playerActions.blockedPlayersList", "player.summonerId", (function() {
                    const e = this.get("playerActions.blockedPlayerList") || [],
                        t = this.get("player.summonerId");
                    return Boolean(e.find((e => e.summonerId === t)))
                })),
                flyoutOptions: a.Ember.computed("player", (function() {
                    return {
                        targetAnchor: {
                            x: "center",
                            y: "center"
                        },
                        tooltipAnchor: {
                            x: "center",
                            y: "center"
                        },
                        offset: {
                            x: -30,
                            y: 110
                        },
                        backdropCutout: null,
                        orientation: "right",
                        animated: !1,
                        caretless: !0,
                        closeWhenInsideClicked: !0
                    }
                })),
                shouldShowPlayerHonorComponent: a.Ember.computed("postgame.isLocalPlayerInGame", "honor.enabled", "isLeaver", "teamChoices.[]", "player.summonerId", (function() {
                    const e = this.get("teamChoices"),
                        t = this.get("player.puuid"),
                        s = this.get("postgame.isLocalPlayerInGame"),
                        n = this.get("honor.enabled"),
                        a = this.get("isLeaver");
                    return e && e.includes(t) && s && n && !a
                })),
                _initializeAnimationData() {
                    a.gsapCustomEase.create("muteIn", " M 0,0 C0.11,-0.56 0.18,1.11 0.5,1.11 0.61,1.06 0.68,1 1,1"), a.gsapCustomEase.create("muteOut", "M 0,0 C0.66,0 0.86,0 1,1")
                },
                animateMuteStatusUpdate(e) {
                    const t = this.element.querySelector("#mute-indicator");
                    if (!t) return;
                    this.get("isRowInitialized") ? this.animateMuteStatusToggle(e, t) : this.animateMuteStatusInit(e, t), this.set("prevIsPlayerMuted", e)
                },
                animateMuteStatusInit(e, t) {
                    this.set("isRowInitialized", !0), e ? a.gsap.to(t, 0, {
                        scale: 1
                    }) : a.gsap.to(t, 0, {
                        scale: 0
                    })
                },
                animateMuteStatusToggle(e, t) {
                    this.get("prevIsPlayerMuted") !== e && (e ? a.gsap.fromTo(t, .3, {
                        scale: 0
                    }, {
                        ease: "muteIn",
                        scale: 1
                    }) : a.gsap.fromTo(t, .3, {
                        scale: 1
                    }, {
                        ease: "muteOut",
                        scale: 0
                    }))
                },
                _getMuteStatus(e) {
                    const t = this.get("player.puuid"),
                        s = this.get("postgame.playerMuteStatus");
                    return !(!s || !(t in s)) && s[t][e]
                },
                actions: {
                    showPlayerActionsMenu: function() {
                        this.set("isPlayerActionsMenuOpen", !0)
                    },
                    hidePlayerActionsMenu: function() {
                        this.set("isPlayerActionsMenuOpen", !1)
                    },
                    sendFriendRequest: function(e) {
                        this.get("playerActions").sendFriendRequest(e?.riotIdGameName, e?.riotIdTagLine, e?.puuid), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    inviteToParty: function(e) {
                        this.get("playerActions").inviteToParty(e)
                    },
                    showReportDialog: function(e) {
                        a.SharedReportModalApps.showReportModal(e, e.championSquarePortraitPath, "LOL"), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    confirmBlockPlayer: function(e) {
                        this.get("playerActions").confirmBlockPlayer(e?.riotIdGameName, e?.riotIdTagLine, e.summonerId)
                    },
                    viewProfile: function(e) {
                        this.get("playerActions").viewProfile(e.summonerId)
                    },
                    importItemSet: function(e) {
                        this.get("playerActions").importItemSet(e)
                    },
                    togglePlayerMute: function(e) {
                        const t = this.get("isPlayerMuted") || !1,
                            s = this.get("chatMessages"),
                            n = e.displayName.playerNameFull,
                            a = e.puuid;
                        s.updatePlayerMute(a, n, !t)
                    },
                    updateHonorCelebrationAnimation(e) {
                        this.sendAction("updateHonorCelebrationAnimation", e)
                    }
                }
            });
            t.default = c
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (s(3), (n = s(38)) && n.__esModule ? n : {
                    default: n
                });
            s(170);
            const {
                RunMixin: l
            } = a.EmberAddons.EmberLifeline;
            var i = a.Ember.Component.extend(l, o.default, {
                classNames: ["scoreboard-climb-indicator-flair-component"],
                isLowSpec: !1,
                uxSettings: a.UXSettings,
                rankedAssetsService: a.Ember.inject.service("ranked-assets"),
                didInsertElement() {
                    this._super(...arguments), this.get("rankedAssetsService"), this.addObserver("uxSettings.data.potatoModeEnabled", this, "lowSpecHandler"), this.lowSpecHandler()
                },
                willDestroyElement() {
                    this._super(...arguments), this.removeObserver("uxSettings.data.potatoModeEnabled", this, "lowSpecHandler")
                },
                lowSpecHandler: function() {
                    this.set("isLowSpec", this.get("uxSettings.data.potatoModeEnabled"))
                }
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = s(137),
                l = s(138),
                i = (n = s(38)) && n.__esModule ? n : {
                    default: n
                },
                r = s(30);
            var m = a.Ember.Component.extend(i.default, {
                classNames: ["scoreboard-row-component"],
                classNameBindings: ["player.isLocalPlayer", "isLeaver:leaver", "team.isPlayerTeam:is-ally", "showNotInChat:not-in-chat"],
                endOfGameService: a.Ember.inject.service("end-of-game"),
                postgame: a.Ember.inject.service(),
                parties: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                playerActions: a.Ember.inject.service(),
                chatMessages: a.Ember.inject.service(),
                honor: a.Ember.inject.service(),
                challenges: a.Ember.inject.service(),
                currentLevel: a.Ember.computed.alias("topMostProgressedChallenge.currentLevel"),
                nextLevel: a.Ember.computed.alias("topMostProgressedChallenge.nextLevel"),
                isLeaver: a.Ember.computed.or("player.leaver", "player.wasAfk"),
                wasSevereTransgressor: a.Ember.computed("player.stats", (function() {
                    const e = this.get("player.stats");
                    return e && e.WAS_SEVERE_TRANSGRESSOR
                })),
                teamChoices: a.Ember.computed.readOnly("honor.teamChoices"),
                localPlayerChallengesData: a.Ember.computed.readOnly("challenges.localPlayerChallengesData"),
                isRowInitialized: !1,
                isRanked: a.Ember.computed.alias("gameflow.queue.isRanked"),
                hasScoreboardAnimationPlayed: !1,
                hasCelebratedHonor: !1,
                animationsEnabled: !0,
                isWarmGameBot: !1,
                isFriendingRestricted: !1,
                init: function() {
                    this._super(...arguments), this.challengesBinding = (0, a.dataBinding)("/lol-challenges", a.socket), this.handleUpdatedChallenge = this.handleUpdatedChallenge.bind(this), this.clientConfigBindingChallenges = (0, a.dataBinding)("/lol-client-config/v3/client-config/lol.client_settings.bots.eog.queues_to_show_fake_challenges", a.socket), this.clientConfigBindingPositions = (0, a.dataBinding)("/lol-client-config/v3/client-config/lol.client_settings.bots.eog.queues_to_show_selected_positions", a.socket), this.get("isRanked") && a.db.observe(`/lol-ranked/v1/cached-ranked-stats/${this.get("player.puuid")}`, this, this._handleRankedStats), a.db.observe("/lol-parental-controls/v1/status", this, (e => {
                        this.set("isFriendingRestricted", e && e.enabled && e.isFriendingRestricted)
                    })), this._loadChallengesConfig(), this._initializeAnimationData(), this._loadShowSelectedPositionsConfig()
                },
                _loadShowSelectedPositionsConfig() {
                    this.clientConfigBindingPositions.get().then((e => {
                        this.arrWarmGamesPositionsQueueIds = e || [], this.set("showSelectedPositions", this.arrWarmGamesPositionsQueueIds.includes(this.get("gameflow.queue.id")) && this.get("player").botPlayer)
                    }))
                },
                _loadChallengesConfig() {
                    this.clientConfigBindingChallenges.get().then((e => {
                        this.arrWarmGamesQueueIds = e || [], this.set("isWarmGameBot", this.arrWarmGamesQueueIds.includes(this.get("gameflow.queue.id")) && this.get("player").botPlayer), this.setupUpdatedChallengeListener(this.get("player"), this.get("gameflow.queue.id"))
                    }))
                },
                _handleRankedStats(e) {
                    this.set("rankedStats", e)
                },
                willDestroyElement: function() {
                    this._super(...arguments), this.challengesBinding.unobserve(this.updatedChallengesPath, this), a.db.unobserve(this)
                },
                setupUpdatedChallengeListener(e, t) {
                    if (this.get("isWarmGameBot")) {
                        const e = this.get("gameId");
                        return (0, a.dataBinding)("/lol-challenges").post(`/v1/rsbot-challenges/${e}`).then(this.handleUpdatedChallenge)
                    }
                    return (0, a.dataBinding)("/lol-summoner").get(`/v1/summoners/${e.summonerId}`).then((e => {
                        if (e) {
                            const {
                                puuid: t,
                                gameName: s,
                                tagLine: n
                            } = e;
                            this.set("puuid", t), this.set("gameName", s), this.set("tagLine", n);
                            const a = this.get("gameId");
                            this.updatedChallengePath = `/lol-challenges/v1/updated-challenges/${a}/${t}`, this.challengesBinding.observe(`/v1/updated-challenges/${a}/${t}`, this, this.handleUpdatedChallenge)
                        }
                    }))
                },
                handleUpdatedChallenge(e) {
                    this.set("updatedChallenges", e)
                },
                isPlayerMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", "isWarmGameBot", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isPlayerMuted)
                })),
                isSettingsMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", "isWarmGameBot", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isSettingsMuted)
                })),
                isSystemMuted: a.Ember.computed("postgame.playerMuteStatus", "player.puuid", "isWarmGameBot", (function() {
                    return this._getMuteStatus(l.MUTE_TYPES.isSystemMuted)
                })),
                isPlayerMuteNotToggleable: a.Ember.computed.or("isSettingsMuted", "isSystemMuted"),
                isPlayerMuteToggleable: a.Ember.computed.not("isPlayerMuteNotToggleable"),
                showPlayerMute: a.Ember.computed("isPlayerMuted", "isSettingsMuted", "isWarmGameBot", (function() {
                    const e = this.get("isPlayerMuted"),
                        t = this.get("isSettingsMuted"),
                        s = this.get("isSystemMuted"),
                        n = t || e || s;
                    return this.animateMuteStatusUpdate(n), n
                })),
                topMostProgressedChallenge: a.Ember.computed("updatedChallenges", (function() {
                    const e = this.get("updatedChallenges") || {},
                        t = Object.values(e).filter((e => !e.isCapstone));
                    return (0, o.getFirstChallengeSlotScore)(t)
                })),
                showChallengeTooltipComparison: a.Ember.computed("localPlayerChallengesData", "isLocalPlayer", (function() {
                    const e = this.get("isLocalPlayer");
                    return this.get("localPlayerChallengesData") && !e
                })),
                updatedChallengeIcon: a.Ember.computed("topMostProgressedChallenge.levelToIconPath", "currentLevel", "nextLevel", (function() {
                    const e = this.get("topMostProgressedChallenge.levelToIconPath") || {},
                        t = this.get("currentLevel");
                    return e[t !== a.SharedChallengesConstants.CHALLENGE_LEVELS.NONE ? t : this.get("nextLevel")] || ""
                })),
                isInChatRoom: a.Ember.computed("chatMessages.summonerIdsInChat", "player.summonerId", (function() {
                    const e = this.get("player.summonerId");
                    return (this.get("chatMessages.summonerIdsInChat") || []).includes(e)
                })),
                showNotInChat: a.Ember.computed("isInChatRoom", "postgame.isLocalPlayerInGame", (function() {
                    const e = this.get("isInChatRoom"),
                        t = this.get("postgame.isLocalPlayerInGame");
                    return !e && t
                })),
                displayedPosition: a.Ember.computed("player.detectedPosition", "player.selectedPosition", "player.detectedTeamPosition", "isWarmGameBot", "showSelectedPositions", (function() {
                    const e = this.get("player.detectedPosition"),
                        t = this.get("player.selectedPosition"),
                        s = this.get("isWarmGameBot") && this.get("showSelectedPositions") ? this.get("player.detectedTeamPosition") : null,
                        n = (e || t || s || "").toLowerCase();
                    return "none" === n ? "" : n
                })),
                displayedPositionTranslatedText: a.Ember.computed("tra", "displayedPosition", (function() {
                    const e = this.get("displayedPosition");
                    return e ? this.get("tra").get(`postgame_scoreboard_lane_position_name_${e}`) : ""
                })),
                skinSplashStyle: a.Ember.computed("player.skinSplashPath", (function() {
                    return `background-image: url(${this.get("player.skinSplashPath")})`
                })),
                showAugments: a.Ember.computed.or("gameflow.isKiwi", "gameflow.isKiwiJade"),
                displayedAugments: a.Ember.computed("player", (function() {
                    const e = [],
                        t = this.get("player.stats");
                    Object.keys(t).map((function(s) {
                        s.includes("PLAYER_AUGMENT") && e.push(t[s])
                    }));
                    const s = [];
                    for (let t = 0; t < r.NUMBER_AUGMENTS_TO_RENDER; ++t) {
                        const n = e[t] || 0;
                        s.push(n)
                    }
                    return s
                })),
                shouldShowButtons: a.Ember.computed("player.botPlayer", "player.isLocalPlayer", "isWarmGameBot", (function() {
                    return (!this.get("player.botPlayer") || this.get("isWarmGameBot")) && !this.get("player.isLocalPlayer")
                })),
                isFriendRequestDisabled: a.Ember.computed("player.summondId", "postgame.friendsList.[]", "playerActions.alreadyFriendRequestedList.[]", "player.botPlayer", (function() {
                    if (this.get("player.botPlayer")) return !0;
                    const e = this.get("player.summonerId"),
                        t = this.get("playerActions.alreadyFriendRequestedList") || [],
                        s = this.get("postgame.friendsList") || [],
                        n = Boolean(s.find((t => t.summonerId === e))),
                        a = Boolean(t.find((t => t.summonerId === e)));
                    return n || a
                })),
                isReportDisabled: a.Ember.computed("gameflow.isCustomGame", "player.puuid", "endOfGameService.reportedPlayers.[]", "player.botPlayer", (function() {
                    if (this.get("gameflow.isCustomGame") || this.get("player.botPlayer")) return !0;
                    const e = this.get("player.puuid");
                    return (this.get("endOfGameService.reportedPlayers") || []).includes(e)
                })),
                isInviteDisabled: a.Ember.computed("team.isPlayerTeam", "parties.enabled", "gameflow.canInviteOthersAtEog", "gameflow.lastQueuedMemberSummonerIds.[]", "player.summonerId", "player.botPlayer", (function() {
                    return !(!this.get("player.botPlayer") && this.get("team.isPlayerTeam") && this.get("parties.enabled") && this.get("gameflow.canInviteOthersAtEog") && this.get("gameflow.lastQueuedMemberSummonerIds") && -1 === this.get("gameflow.lastQueuedMemberSummonerIds").indexOf(this.get("player.summonerId")))
                })),
                isPlayerBlocked: a.Ember.computed("playerActions.blockedPlayersList", "player.summonerId", "player.botPlayer", (function() {
                    if (this.get("player.botPlayer")) return !0;
                    const e = this.get("playerActions.blockedPlayerList") || [],
                        t = this.get("player.summonerId");
                    return Boolean(e.find((e => e.summonerId === t)))
                })),
                flyoutOptions: a.Ember.computed("player", (function() {
                    return {
                        targetAnchor: {
                            x: "center",
                            y: "center"
                        },
                        tooltipAnchor: {
                            x: "center",
                            y: "center"
                        },
                        offset: {
                            x: -30,
                            y: 110
                        },
                        backdropCutout: null,
                        orientation: "right",
                        animated: !1,
                        caretless: !0,
                        closeWhenInsideClicked: !0
                    }
                })),
                shouldShowPlayerHonorComponent: a.Ember.computed("postgame.isLocalPlayerInGame", "honor.enabled", "isLeaver", "teamChoices.[]", "player.summonerId", (function() {
                    const e = this.get("teamChoices"),
                        t = this.get("player.puuid"),
                        s = this.get("postgame.isLocalPlayerInGame"),
                        n = this.get("honor.enabled"),
                        a = this.get("isLeaver");
                    return e && e.includes(t) && s && n && !a
                })),
                shouldShowIndicator: a.Ember.computed("shouldShowPlayerHonorComponent", "queueType", "rankedStats.queues.@each.climbingIndicatorActive", "player.puuid", (function() {
                    const e = this.get("rankedStats.queues") || [],
                        t = this.get("queueType"),
                        s = e.find((e => e.queueType === t));
                    return !this.get("shouldShowPlayerHonorComponent") && s?.climbingIndicatorActive
                })),
                hideSummoners: a.Ember.computed("player.spell1Id", "player.spell2Id", (function() {
                    return 0 === this.get("player.spell1Id") || 0 === this.get("player.spell2Id")
                })),
                roleBoundItem: a.Ember.computed("player.stats", (function() {
                    const e = this.get("player.stats");
                    return e && e.ROLE_BOUND_ITEM ? e.ROLE_BOUND_ITEM : 0
                })),
                _initializeAnimationData() {
                    a.gsapCustomEase.create("muteIn", " M 0,0 C0.11,-0.56 0.18,1.11 0.5,1.11 0.61,1.06 0.68,1 1,1"), a.gsapCustomEase.create("muteOut", "M 0,0 C0.66,0 0.86,0 1,1")
                },
                animateMuteStatusUpdate(e) {
                    const t = this.element.querySelector("#mute-indicator");
                    if (!t) return;
                    this.get("isRowInitialized") ? this.animateMuteStatusToggle(e, t) : this.animateMuteStatusInit(e, t), this.set("prevIsPlayerMuted", e)
                },
                animateMuteStatusInit(e, t) {
                    this.set("isRowInitialized", !0), e ? a.gsap.to(t, 0, {
                        scale: 1
                    }) : a.gsap.to(t, 0, {
                        scale: 0
                    })
                },
                animateMuteStatusToggle(e, t) {
                    this.get("prevIsPlayerMuted") !== e && (e ? a.gsap.fromTo(t, .3, {
                        scale: 0
                    }, {
                        ease: "muteIn",
                        scale: 1
                    }) : a.gsap.fromTo(t, .3, {
                        scale: 1
                    }, {
                        ease: "muteOut",
                        scale: 0
                    }))
                },
                _getMuteStatus(e) {
                    if (this.get("isWarmGameBot")) return !1;
                    const t = this.get("player.puuid"),
                        s = this.get("postgame.playerMuteStatus");
                    return !(!s || !(t in s)) && s[t][e]
                },
                actions: {
                    showPlayerActionsMenu: function() {
                        this.set("isPlayerActionsMenuOpen", !0)
                    },
                    hidePlayerActionsMenu: function() {
                        this.set("isPlayerActionsMenuOpen", !1)
                    },
                    sendFriendRequest: function(e) {
                        this.get("playerActions").sendFriendRequest(e?.riotIdGameName, e?.riotIdTagLine, e?.puuid), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    inviteToParty: function(e) {
                        this.get("playerActions").inviteToParty(e)
                    },
                    showReportDialog: function(e) {
                        a.SharedReportModalApps.showReportModal(e, e.championSquarePortraitPath, "LOL"), this.playSound("sfx-uikit-click-generic.ogg")
                    },
                    confirmBlockPlayer: function(e) {
                        this.get("playerActions").confirmBlockPlayer(e?.riotIdGameName, e?.riotIdTagLine, e.summonerId)
                    },
                    viewProfile: function(e) {
                        this.get("playerActions").viewProfile(e.summonerId)
                    },
                    importItemSet: function(e) {
                        this.get("playerActions").importItemSet(e)
                    },
                    togglePlayerMute: function(e) {
                        const t = this.get("isPlayerMuted") || !1,
                            s = this.get("chatMessages"),
                            n = e.displayName.playerNameFull,
                            a = e.puuid;
                        s.updatePlayerMute(a, n, !t)
                    },
                    updateHonorCelebrationAnimation(e) {
                        this.sendAction("updateHonorCelebrationAnimation", e)
                    }
                }
            });
            t.default = m
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            const a = "togglePlayerMuteOff",
                o = "togglePlayerMuteOn";
            var l = n.Ember.Component.extend({
                classNames: ["scoreboard-row-actions-menu-component"],
                actionOptions: n.Ember.computed("isItemSetsDisabled", "isFriendRequestDisabled", "isFriendingRestricted", "isPlayerBlocked", "isReportDisabled", "isPlayerMuted", "isPlayerMuteToggleable", (function() {
                    const e = this.get("isPlayerMuted") || !1,
                        t = e ? a : o,
                        s = e ? this.get("tra.postgame_context_menu_unmute") : this.get("tra.postgame_context_menu_mute"),
                        n = this.get("isPlayerMuteToggleable");
                    return [{
                        actionName: "inviteToParty",
                        label: this.get("tra.postgame_scorecard_invite_to_party"),
                        disabled: this.get("isPlayerBlocked")
                    }, {
                        actionName: "sendFriendRequest",
                        label: this.get("tra.postgame_context_menu_add_friend"),
                        disabled: this.get("isFriendRequestDisabled") || this.get("isFriendingRestricted")
                    }, {
                        actionName: "viewProfile",
                        label: this.get("tra.postgame_context_menu_view_profile")
                    }, {
                        actionName: "importItemSet",
                        label: this.get("tra.postgame_context_menu_import_item_set"),
                        disabled: this.get("isItemSetsDisabled")
                    }, {
                        actionName: t,
                        label: s,
                        disabled: !n
                    }, {
                        actionName: "confirmBlockPlayer",
                        label: this.get("tra.postgame_context_menu_block"),
                        disabled: this.get("isPlayerBlocked")
                    }, {
                        actionName: "showReportDialog",
                        label: this.get("tra.postgame_context_menu_report"),
                        disabled: this.get("isReportDisabled")
                    }]
                })),
                actions: {
                    handleButtonClick(e, t) {
                        e.actionName === a || e.actionName === o ? this.sendAction("togglePlayerMute", t) : this.sendAction(e.actionName, t)
                    }
                }
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(3),
                o = s(164);
            const l = [a.STAT_SWITCHER_STATS.DAMAGE_DEALT, a.STAT_SWITCHER_STATS.DAMAGE_TAKEN, a.STAT_SWITCHER_STATS.CC_SCORE],
                i = [a.STAT_SWITCHER_STATS.GOLD, a.STAT_SWITCHER_STATS.CREEP_SCORE, a.STAT_SWITCHER_STATS.VISION_SCORE, a.STAT_SWITCHER_STATS.DAMAGE_DEALT_OVERALL],
                r = [a.STAT_SWITCHER_STATS.GOLD, a.STAT_SWITCHER_STATS.DAMAGE_DEALT],
                m = {};
            m[a.STAT_SWITCHER_STATS.CREEP_SCORE] = 1, m[a.STAT_SWITCHER_STATS.VISION_SCORE] = 1;
            var c = n.Ember.Component.extend({
                classNames: ["scoreboard-row-stat-display-component"],
                classNameBindings: ["statName"],
                hasScoreboardAnimationPlayed: !1,
                animationsEnabled: !0,
                animatedStatLinePrimary: "0",
                showStatAnimations: !1,
                didInsertElement() {
                    this._super(...arguments), !this.get("hasScoreboardAnimationPlayed") && this.get("animationsEnabled") && n.Ember.run.scheduleOnce("afterRender", this, this._playIntroStatAnimation)
                },
                willDestroyElement() {
                    this._super(...arguments);
                    const e = this.get("animationTimeline");
                    e && e.kill()
                },
                showStatNumberAnimation: n.Ember.computed("statName", "player.stats", "showStatAnimations", (function() {
                    const e = this.get("statName") || "",
                        t = this.get("player.stats");
                    return !(!e || !t) && (r.includes(e) && this.get("showStatAnimations"))
                })),
                primaryStatValue: n.Ember.computed("statName", "player.stats", "tra.ready", (function() {
                    const e = this.get("statName") || "",
                        t = this.get("player.stats");
                    let s = 0;
                    return e && t ? e === a.STAT_SWITCHER_STATS.INDIVIDUAL_KDA ? (0, o.getKdaFull)(t, this.get("tra")) : (s = e === a.STAT_SWITCHER_STATS.CREEP_SCORE ? t[e] + t[a.STAT_SWITCHER_STATS.NEUTRAL_MINIONS_SLAIN] || 0 : t[e] || 0, s) : 0
                })),
                statLinePrimary: n.Ember.computed("primaryStatValue", (function() {
                    return this.get("primaryStatValue").toLocaleString(this.get("locale"))
                })),
                statLineSecondary: n.Ember.computed("statName", "player.stats", "gameLengthSeconds", "tra.ready", (function() {
                    const e = this.get("statName"),
                        t = this.get("player.stats");
                    if (e && t) {
                        if (e === a.STAT_SWITCHER_STATS.INDIVIDUAL_KDA) return (0, o.getKdaDecimal)(t, this.get("tra"));
                        if (i.includes(e)) {
                            const s = Math.max((this.get("gameLengthSeconds") || 0) / 60, 1),
                                n = this.get("tra"),
                                o = m[e] || 0;
                            let l = t[e] || 0;
                            return e === a.STAT_SWITCHER_STATS.CREEP_SCORE && (l += t[a.STAT_SWITCHER_STATS.NEUTRAL_MINIONS_SLAIN] || 0), n.formatString("postgame_scoreboard_stat_display_stat_per_minute", {
                                statValue: Number((l / s).toFixed(o))
                            })
                        }
                        return t[e]
                    }
                    return ""
                })),
                showHighestStatValueAchiever: n.Ember.computed.and("isHighestStatValueAchiever", "isSecondaryDisplayLineGraph"),
                isHighestStatValueAchiever: n.Ember.computed("highestStatValue", "player.stats", "statName", (function() {
                    const e = this.get("statName");
                    return this.get("highestStatValue") === this.get(`player.stats.${e}`) && 0 !== this.get("highestStatValue")
                })),
                highestStatValue: n.Ember.computed("highestStatValueByStatMap", "statName", (function() {
                    const e = this.get("statName");
                    return this.get(`highestStatValueByStatMap.${e}`) || 0
                })),
                teamHighestStatValue: n.Ember.computed("statName", "team.players.@each.stats", (function() {
                    let e = 0;
                    const t = this.get("statName");
                    return (this.get("team.players") || []).forEach((s => {
                        const a = n.Ember.get(s, `stats.${t}`) || 0;
                        e = Math.max(e, a)
                    })), e
                })),
                barScaleValue: n.Ember.computed("statName", "teamHighestStatValue", "player.stats", (function() {
                    const e = this.get("statName"),
                        t = this.get(`player.stats.${e}`) || 0,
                        s = this.get("teamHighestStatValue");
                    let n = 0;
                    return s > 0 && (n = Math.max(t / s, .1)), n
                })),
                graphFillStyle: n.Ember.computed("barScaleValue", (function() {
                    return `transform: scaleX(${this.get("barScaleValue")})`
                })),
                selectedStatLoc: n.Ember.computed("tra.isReady", "statName", (function() {
                    const e = this.get("statName");
                    return this.get(`tra.postgame_scoreboard_stat_display_tooltip_${e}`)
                })),
                isSecondaryDisplayLineGraph: n.Ember.computed("statName", (function() {
                    return l.includes(this.get("statName"))
                })),
                _playIntroStatAnimation() {
                    const e = this.get("primaryStatValue"),
                        t = this.get("barScaleValue"),
                        s = {
                            amount: 0
                        },
                        a = n.gsapCustomEase.create("custom", "M 0,0 C1,0 0,1 1,1"),
                        o = this.$(".scoreboard-row-stat-graph-fill");
                    let l = this.get("animationTimeline");
                    l && l.isActive() && l.kill(), l = new n.gsap.TimelineMax({
                        paused: !0
                    }), l.to(s, .43, {
                        amount: e,
                        ease: a,
                        onUpdate: () => {
                            this.set("animatedStatLinePrimary", Math.round(s.amount).toLocaleString(this.get("locale")))
                        },
                        onComplete: () => {
                            this.set("showStatAnimations", !1)
                        }
                    }, "start+=0.90"), o && l.fromTo(o, .43, {
                        css: {
                            scaleX: 0
                        },
                        ease: a
                    }, {
                        css: {
                            scaleX: t
                        }
                    }, "start+=0.90"), this.set("animationTimeline", l), this.set("showStatAnimations", !0), l.play()
                }
            });
            t.default = c
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["scoreboard-stat-switcher-component"],
                    classNameBindings: ["selectedStat"],
                    init: function() {
                        this._super(...arguments), this.set("currentIndex", 0)
                    },
                    selectedStatLoc: n.Ember.computed("tra.isReady", "selectedStat", (function() {
                        const e = this.get("selectedStat");
                        return this.get(`tra.postgame_scoreboard_stat_display_tooltip_${e}`)
                    })),
                    getNewSelectedStat(e) {
                        const t = this.get("options") || [];
                        if (!(e >= t.length)) return t[e]
                    },
                    actions: {
                        scroll(e) {
                            const t = this.get("currentIndex"),
                                s = this.get("options.length"),
                                n = (t + e + s) % s,
                                a = this.getNewSelectedStat(n);
                            this.set("currentIndex", n), this.sendAction("selectStat", a, this.get("ordinal"))
                        }
                    }
                });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(90),
                o = s(39),
                l = s(3);
            var i = n.Ember.Component.extend({
                classNames: ["season-pass-progression"],
                classNameBindings: ["isSmall", "isMayhemSeasonPass:mayhem-season-pass-progression", "isMaxLevel:max-level-pass"],
                isMayhemSeasonPass: !1,
                eventHubService: n.Ember.inject.service("event-hub"),
                isErrored: !1,
                postgame: n.Ember.inject.service("postgame"),
                isSeasonPassErrored: n.Ember.computed("eventHubService.isErrored", "eventHubService.isPassDataErrored", "isErrored", (function() {
                    return this.get("eventHubService.isErrored") || this.get("eventHubService.isPassDataErrored") || this.get("isErrored")
                })),
                gameLength: n.Ember.computed.readOnly("postgame.eogStatsBlock.gameLength"),
                endOfGameTimestamp: n.Ember.computed.readOnly("postgame.eogStatsBlock.endOfGameTimestamp"),
                trackProgress: n.Ember.computed("isMayhemSeasonPass", "eventHubService.seasonPassTrackProgress", "eventHubService.mayhemEventPassData", (function() {
                    return this.get("isMayhemSeasonPass") ? this.get("eventHubService.mayhemPassTrackProgress") : this.get("eventHubService.seasonPassTrackProgress")
                })),
                isGracePeriod: n.Ember.computed.readOnly("eventHubService.isGracePeriod"),
                seasonPassId: n.Ember.computed.alias("eventHubService.seasonPassId"),
                mayhemPassId: n.Ember.computed.alias("eventHubService.mayhemPassId"),
                currentLevel: n.Ember.computed.alias("trackProgress.currentLevel"),
                currentXP: n.Ember.computed.alias("trackProgress.currentXP"),
                nextLevelXP: n.Ember.computed.alias("trackProgress.nextLevelXP"),
                nextReward: n.Ember.computed.alias("trackProgress.nextReward"),
                nextRewardIconPath: n.Ember.computed.alias("nextReward.thumbIconPath"),
                nextRewardState: n.Ember.computed.alias("nextReward.state"),
                isSeasonPassLoading: n.Ember.computed("_isBXPLoading", "eventHubService.isTrackProgressLoading", "isMayhemSeasonPass", "eventHubService.isMayhemTrackProgressLoading", (function() {
                    return this.get("isMayhemSeasonPass") ? this.get("_isBXPLoading") || this.get("eventHubService.isMayhemTrackProgressLoading") : this.get("_isBXPLoading") || this.get("eventHubService.isTrackProgressLoading")
                })),
                showFullLoadingState: n.Ember.computed.or("isSeasonPassLoading"),
                showFullErrorState: n.Ember.computed.and("isSeasonPassErrored"),
                init() {
                    this._super(...arguments), this.binding = n.dataBinding.bindTo(n.socket), this.set("BXPbeforeGame", 0), this.set("_isBXPLoading", !0), this._fetchBXPbeforeGame()
                },
                isLocked: n.Ember.computed("nextRewardState", (function() {
                    return this.get("nextRewardState") === a.REWARD_STATE.PREMIUM
                })),
                timeBeforeGame: n.Ember.computed("endOfGameTimestamp", "gameLength", (function() {
                    return Math.floor(this.get("endOfGameTimestamp") / 1e3) - this.get("gameLength")
                })),
                _fetchBXPbeforeGame: n.Ember.observer("timeBeforeGame", "seasonPassId", "isMayhemSeasonPass", "mayhemPassId", (function() {
                    const e = this.get("timeBeforeGame"),
                        t = this.get("isMayhemSeasonPass") ? this.get("mayhemPassId") : this.get("seasonPassId");
                    e && t ? (this.set("_isBXPLoading", !0), this.binding.get(`/lol-event-hub/v1/events/${t}/reward-track/counter?beforeEpoch=${e}`).then((e => {
                        this.set("BXPbeforeGame", e), this.set("_isBXPLoading", !1)
                    })).catch((() => {
                        this.set("_isBXPLoading", !1), this.set("isErrored", !0)
                    }))) : this.set("_isBXPLoading", !1)
                })),
                telemetryEventOrigin: o.TELEMETRY_EVENT_ORIGIN_LOCATIONS.POSTGAME,
                previousProgressPercent: n.Ember.computed("BXPbeforeGame", "nextLevelXP", "isLevelUp", (function() {
                    const e = this.get("BXPbeforeGame"),
                        t = this.get("nextLevelXP"),
                        s = e % t,
                        n = this.get("isLevelUp");
                    return 0 === t || n ? 0 : s / t * 100
                })),
                currentTotalPassProgress: n.Ember.computed("isMayhemSeasonPass", "seasonPassTrackCurrentTotalPassProgress", "mayhemPassTrackCurrentTotalPassProgress", (function() {
                    return this.get("isMayhemSeasonPass") ? this.get("eventHubService.mayhemPassTrackCurrentTotalPassProgress") : this.get("eventHubService.seasonPassTrackCurrentTotalPassProgress")
                })),
                deltaBXP: n.Ember.computed("BXPbeforeGame", "currentTotalPassProgress", (function() {
                    return this.get("currentTotalPassProgress") - this.get("BXPbeforeGame")
                })),
                isLevelUp: n.Ember.computed("currentLevel", "trackProgress.currentXP", "deltaBXP", (function() {
                    if (this.get("currentLevel") <= 1) return !1;
                    const e = this.get("trackProgress.currentXP");
                    return this.get("deltaBXP") > e
                })),
                deltaBXPPercent: n.Ember.computed("nextLevelXP", "currentXP", "previousProgressPercent", "isLevelUp", (function() {
                    const e = this.get("nextLevelXP"),
                        t = this.get("currentXP"),
                        s = 0 === e ? 0 : t / e * 100,
                        n = this.get("previousProgressPercent");
                    return this.get("isLevelUp") ? s : s - n
                })),
                progressPercentage: n.Ember.computed("currentXP", "nextLevelXP", (function() {
                    const e = this.get("currentXP"),
                        t = this.get("nextLevelXP");
                    return 0 === t ? 0 : Math.floor(e / t * 100)
                })),
                passXpLoc: n.Ember.computed("currentXP", "nextLevelXP", (function() {
                    const e = {
                        currentXp: this.get("currentXP"),
                        nextLevelXP: this.get("nextLevelXP")
                    };
                    return this.get("isLocked") ? this.get("tra").formatString("season_pass_progression_locked_xp", e) : this.get("tra").formatString("season_pass_progression_unlocked_xp", e)
                })),
                passLevelLoc: n.Ember.computed("currentLevel", (function() {
                    return this.get("tra").formatString("season_pass_progression_unlocked_title", {
                        currentLevel: this.get("currentLevel")
                    })
                })),
                isMaxLevel: n.Ember.computed("nextReward", (function() {
                    return !this.get("nextReward.name") && !this.get("nextReward.thumbIconPath")
                })),
                actions: {
                    progressionRadialEntered: function() {
                        n.Audio.getChannel(l.SFX_SUB_CHANNEL_UI_NAME).playSound(l.UI_AUDIO_SFX_PATH.BUTTON_GOLD_HOVER)
                    }
                }
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1).Ember.Component.extend({
                classNames: ["season-pass-error-state"],
                classNameBindings: ["isSmall"]
            });
            t.default = n
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(178)) && n.__esModule ? n : {
                    default: n
                };
            s(179);
            var l = s(154);
            var i = a.Ember.Component.extend({
                classNames: ["valor-aegis-modal-component"],
                classNameBindings: ["postgame.largeAreaAnimationsEnabled:hide-static-image"],
                layout: o.default,
                postgame: a.Ember.inject.service(),
                init() {
                    this._super(...arguments);
                    const e = this.get("introSoundPath");
                    this.set("introSound", a.Audio.getChannel("sfx-ui").createSound(e))
                },
                didInsertElement() {
                    const e = this.element.querySelector(".valor-aegis-modal-video-state-machine"),
                        t = this.get("introSound");
                    t && (e || this.get("postgame.largeAreaAnimationsEnabled") ? e && e.subscribeParameterChanged(((e, s, n) => {
                        "state" === e && "intro" === n && t.play()
                    })) : t.play())
                },
                introSoundPath: a.Ember.computed("rankedAssetsService.assets", (function() {
                    return this.get("rankedAssetsService.assets.valorAegisModalAwardedSfx")
                })),
                introVideo: a.Ember.computed("lpBonusAppliedReason", "rankedAssetsService.assets.valorAegisAwardedVideoAutofillIntro", "rankedAssetsService.assets.valorAegisAwardedVideoScarceIntro", (function() {
                    return this.get("lpBonusAppliedReason") === l.AEGIS_AWARDED_REASONS.autofill ? this.get("rankedAssetsService.assets.valorAegisAwardedVideoAutofillIntro") : (this.get("lpBonusAppliedReason"), l.AEGIS_AWARDED_REASONS.scarce, this.get("rankedAssetsService.assets.valorAegisAwardedVideoScarceIntro"))
                })),
                idleLoopVideo: a.Ember.computed("lpBonusAppliedReason", "rankedAssetsService.assets.valorAegisAwardedVideoAutofillIdle", "rankedAssetsService.assets.valorAegisAwardedVideoScarceIdle", (function() {
                    return this.get("lpBonusAppliedReason") === l.AEGIS_AWARDED_REASONS.autofill ? this.get("rankedAssetsService.assets.valorAegisAwardedVideoAutofillIdle") : (this.get("lpBonusAppliedReason"), l.AEGIS_AWARDED_REASONS.scarce, this.get("rankedAssetsService.assets.valorAegisAwardedVideoScarceIdle"))
                })),
                valorAegisEffectText: a.Ember.computed("isWin", "lpBonusAppliedReason", "rankedAssetsService.assets.lpChangeValorBonusLoc", "rankedAssetsService.assets.lpChangeValorProtectionLoc", (function() {
                    const e = this.get("lpBonusAppliedReason");
                    return e === l.AEGIS_AWARDED_REASONS.scarce || e === l.AEGIS_AWARDED_REASONS.autofill ? this.get("isWin") ? this.get("rankedAssetsService.assets.lpChangeValorBonusLoc") : this.get("rankedAssetsService.assets.lpChangeValorProtectionLoc") : ""
                })),
                valorAegisEmblemPath: a.Ember.computed("lpBonusAppliedReason", "rankedAssetsService.assets.valorAegisEmblemAutofillLarge", "rankedAssetsService.assets.valorAegisEmblemPriorityRoleLarge", (function() {
                    const e = this.get("lpBonusAppliedReason");
                    return e === l.AEGIS_AWARDED_REASONS.autofill ? this.get("rankedAssetsService.assets.valorAegisEmblemAutofillLarge") : (l.AEGIS_AWARDED_REASONS.scarce, this.get("rankedAssetsService.assets.valorAegisEmblemPriorityRoleLarge"))
                })),
                valorAegisExplanationLines: a.Ember.computed("lpBonusAppliedReason", "rankedAssetsService.assets.valorAegisAutofillProtectionDesc", "rankedAssetsService.assets.valorAegisPriorityRoleProtectionDesc1", "rankedAssetsService.assets.valorAegisPriorityRoleProtectionDesc2", (function() {
                    const e = this.get("lpBonusAppliedReason");
                    return e === l.AEGIS_AWARDED_REASONS.autofill ? [this.get("rankedAssetsService.assets.valorAegisAutofillProtectionDesc")] : e === l.AEGIS_AWARDED_REASONS.scarce ? [this.get("rankedAssetsService.assets.valorAegisPriorityRoleProtectionDesc1"), this.get("rankedAssetsService.assets.valorAegisPriorityRoleProtectionDesc2")] : [this.get("tra.jade_aegis_of_valor_awarded_explanation_line")]
                }))
            });
            t.default = i
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "O8KavcyF",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\valor-aegis-modal.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","valor-aegis-modal-content-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["postgame","largeAreaAnimationsEnabled"]]],null,2],["text","\\n  "],["open-element","div",[]],["static-attr","class","valor-aegis-emblem-container"],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","valor-aegis-emblem"],["dynamic-attr","src",["concat",[["unknown",["valorAegisEmblemPath"]]]]],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","valor-aegis-spacer"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","valor-aegis-effect-text-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","valor-aegis-effect-text"],["flush-element"],["append",["unknown",["valorAegisEffectText"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","valor-aegis-effect-explanation"],["flush-element"],["text","\\n"],["block",["each"],[["get",["valorAegisExplanationLines"]]],null,1],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["showValorAegisNextButton"]]],null,0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","valor-aegis-next-button"],["dynamic-attr","onclick",["unknown",["onNextButtonClicked"]],null],["flush-element"],["append",["unknown",["tra","postgame_rank_lp_modal_accept_text"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","valor-aegis-explanation-line"],["flush-element"],["append",["get",["line"]],false],["close-element"],["text","\\n"]],"locals":["line"]},{"statements":[["text","    "],["open-element","uikit-state-machine",[]],["static-attr","class","valor-aegis-modal-video-state-machine"],["static-attr","state","loading"],["flush-element"],["text","\\n      "],["open-element","uikit-states",[]],["flush-element"],["text","\\n        "],["open-element","uikit-state",[]],["static-attr","name","loading"],["flush-element"],["text","\\n          "],["open-element","uikit-behavior-media",[]],["static-attr","selector",".valor-aegis-awarded-video"],["static-attr","preloading",""],["flush-element"],["close-element"],["text","\\n          "],["open-element","uikit-behavior-media",[]],["static-attr","selector",".valor-aegis-awarded-video-idle"],["static-attr","preloading",""],["flush-element"],["close-element"],["text","\\n\\n          "],["open-element","uikit-transition",[]],["static-attr","next-state","intro"],["flush-element"],["text","\\n            "],["open-element","uikit-condition-media",[]],["static-attr","selector",".valor-aegis-awarded-video"],["static-attr","can-play",""],["flush-element"],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n\\n        "],["open-element","uikit-state",[]],["static-attr","name","intro"],["flush-element"],["text","\\n          "],["open-element","uikit-behavior-media",[]],["static-attr","selector",".valor-aegis-awarded-video"],["static-attr","playing",""],["flush-element"],["close-element"],["text","\\n          "],["open-element","uikit-transition",[]],["static-attr","next-state","idle"],["flush-element"],["text","\\n            "],["open-element","uikit-condition-media",[]],["static-attr","selector",".valor-aegis-awarded-video"],["static-attr","ended",""],["flush-element"],["close-element"],["text","\\n            "],["open-element","uikit-condition-media",[]],["static-attr","selector",".valor-aegis-awarded-video-idle"],["static-attr","can-play",""],["flush-element"],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n\\n        "],["open-element","uikit-state",[]],["static-attr","name","idle"],["flush-element"],["text","\\n          "],["open-element","uikit-behavior-media",[]],["static-attr","selector",".valor-aegis-awarded-video-idle"],["static-attr","playing",""],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n\\n      "],["open-element","uikit-video",[]],["static-attr","visible-state","intro"],["static-attr","class","valor-aegis-awarded-video"],["dynamic-attr","src",["unknown",["introVideo"]],null],["static-attr","autoplay",""],["static-attr","preload",""],["flush-element"],["close-element"],["text","\\n      "],["open-element","uikit-video",[]],["static-attr","visible-state","idle"],["static-attr","class","valor-aegis-awarded-video-idle"],["dynamic-attr","src",["unknown",["idleLoopVideo"]],null],["static-attr","autoplay",""],["static-attr","loop",""],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            const n = {
                    HonorVotingCeremonyComponent: s(181).default,
                    HonorVotingPlayerCardComponent: s(185).default
                },
                a = {
                    "components/honor-voting-ceremony": s(187),
                    "components/honor-voting-player-card": s(188)
                };
            e.exports = {
                HONOR_VOTING_COMPONENTS: n,
                HONOR_VOTING_TEMPLATES: a
            }
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(182)) && n.__esModule ? n : {
                    default: n
                },
                l = s(183);
            s(184);
            const {
                RunMixin: i
            } = a.EmberAddons.EmberLifeline;
            var r = a.Ember.Component.extend(a.Ember.Mixin.create(i, o.default), {
                honor: a.Ember.inject.service(),
                classNameBindings: ["baseClassName"],
                baseClassName: "honor-vote-ceremony",
                renderEventName: "honor-voting-render",
                selectionChosen: !1,
                shouldSendTelemetry: !1,
                pendingRenderMetricPublish: !0,
                isTencentBugReportEnabled: a.Ember.computed.alias("honor.isTencentBugReportEnabled"),
                honorBallot: a.Ember.computed.alias("honor.honorBallot"),
                selectedPlayers: a.Ember.computed.alias("honorBallot.honoredPlayers"),
                gameId: a.Ember.computed.alias("honorBallot.gameId"),
                isLowSpec: a.Ember.computed("honor.uxSettings", (function() {
                    const e = this.get("honor.uxSettings");
                    return !(!e?.data?.potatoModeEnabled && !e?.data?.motionEffectsDisabled)
                })),
                votingStatus: a.Ember.computed("selectedPlayers", "honorBallot.votePool.votes", (function() {
                    const e = this.get("selectedPlayers") || [],
                        t = [],
                        s = this.get("honorBallot.votePool.votes");
                    for (let n = 0; n < s; n++) t[n] = e.length <= n;
                    return t
                })),
                didRender() {
                    this._super(...arguments), this.pendingRenderMetricPublish && this.debounceTask("_endPerformanceMeasurement", l.SETTLE_DEBOUNCE_TIME)
                },
                _endPerformanceMeasurement() {
                    this.pendingRenderMetricPublish = !1, a.Telemetry.endTracingEvent("eog-game-completed-to-honor-shown"), a.Telemetry.endTracingEvent("client-waiting-for-stats-to-honor-shown")
                },
                init() {
                    this._super(...arguments), a.Telemetry.invokeWithLowProbability((() => {
                        this.set("shouldSendTelemetry", !0), a.Telemetry.startTracingEvent(this.renderEventName)
                    })), this.setInitialVotesRemaining(), this.set("eligibleAllies", this.get("honorBallot.eligibleAllies") || []), this.set("eligibleOpponents", this.get("honorBallot.eligibleOpponents") || []), this.set("timeRemaining", 1e3 * this.get("honor.secondsToVote") || l.DEFAULT_TIME_TO_VOTE), this.startCountdown(), a.logger.info("Initialised honor voting ceremony"), this.playSound(l.VOTING_CEREMONY_INTRO_SFX_PATH)
                },
                setInitialVotesRemaining() {
                    const e = (this.get("honorBallot.votePool.votes") || 0) - (this.get("selectedPlayers")?.length || 0);
                    this.set("votesRemaining", e)
                },
                votesRemainingObserver: a.Ember.observer("votesRemaining", (function() {
                    0 === this.get("votesRemaining") && (a.datadogRum.startOperation(a.datadogRum.XP_CGL_POSTGAME_HONOR_SUBMIT, {
                        honor: {
                            time_remaining: this.get("timeRemaining"),
                            votes_remaining: this.get("votesRemaining")
                        },
                        start: {
                            source: "used-all-votes"
                        }
                    }), a.logger.info("Player submitted honor ballot (used all votes)"), a.Ember.run.once(this, "beginTransition"))
                })),
                startCountdown: function() {
                    this.decrementTime()
                },
                decrementTime: function() {
                    if (this.get("selectionChosen")) return;
                    this.runTask((function() {
                        const e = this.get("timeRemaining");
                        0 === e ? this.send("timeOutHonor") : e > 0 && (this.set("timeRemaining", Math.max(e - 1e3, 0)), this.decrementTime())
                    }), 1e3)
                },
                timerText: a.Ember.computed("timeRemaining", (function() {
                    const e = Math.floor(this.get("timeRemaining") / 1e3),
                        t = Math.floor(e / 60),
                        s = e % 60;
                    return `${this.padTimeDisplay(t)}:${this.padTimeDisplay(s)}`
                })),
                padTimeDisplay: function(e) {
                    return (e < 10 ? "0" : "") + e
                },
                beginTransition: function() {
                    this.set("selectionChosen", !0);
                    let e = 0;
                    0 === this.get("votesRemaining") && (e = this.get("isLowSpec") ? l.POST_VOTING_DELAY_LOW_SPEC : l.POST_VOTING_DELAY), this.runTask((() => {
                        a.logger.info("Submitting honor ballot"), this.get("honor").submitBallot().then((() => {
                            0 === this.get("votesRemaining") ? a.datadogRum.stopOperationWithOk(a.datadogRum.XP_CGL_POSTGAME_HONOR_SUBMIT) : a.datadogRum.stopOperationWithUnset(a.datadogRum.XP_CGL_POSTGAME_HONOR_SUBMIT)
                        })).catch((e => {
                            a.datadogRum.stopOperationWithError(a.datadogRum.XP_CGL_POSTGAME_HONOR_SUBMIT, e)
                        }))
                    }), e)
                },
                actions: {
                    timeOutHonor() {
                        a.datadogRum.startOperation(a.datadogRum.XP_CGL_POSTGAME_HONOR_SUBMIT, {
                            honor: {
                                time_remaining: this.get("timeRemaining"),
                                votes_remaining: this.get("votesRemaining")
                            },
                            start: {
                                source: "time-out"
                            }
                        }), a.logger.info("Honor voting time expired"), a.Ember.run.once(this, "beginTransition")
                    },
                    submitSelection() {
                        a.datadogRum.startOperation(a.datadogRum.XP_CGL_POSTGAME_HONOR_SUBMIT, {
                            honor: {
                                time_remaining: this.get("timeRemaining"),
                                votes_remaining: this.get("votesRemaining")
                            },
                            start: {
                                source: "click-submit"
                            }
                        }), a.logger.info("Player submitted honor ballot (did not use all votes)"), a.Ember.run.once(this, "beginTransition")
                    },
                    onVote() {
                        this.set("votesRemaining", Math.max(this.get("votesRemaining") - 1, 0))
                    },
                    handleTencentBugReport() {
                        this.get("honor").invokeTencentDiagnosticAssistant()
                    }
                }
            });
            t.default = r
        }, (e, t, s) => {
            "use strict";
            var n = s(1);
            const a = "sfx-ui",
                o = "music-ambience";
            e.exports = n.Ember.Mixin.create({
                playSound: function(e, t = !1) {
                    if (!e) return;
                    const s = n.Audio.getChannel(a);
                    t && s.playingSounds.find((t => t.options?.url === e))?.stop(), s.playSound(e)
                },
                playAmbience: function(e) {
                    if (!e) return;
                    const t = n.Audio.getChannel(o).createSound(e, {
                        isLoop: !0,
                        fadeIn: !0
                    });
                    return t.play(), t
                }
            })
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VOTING_CEREMONY_INTRO_SFX_PATH = t.VOTE_CAST_SFX_PATH = t.VOTE_CAST_LOW_SPEC_SFX_PATH = t.SETTLE_DEBOUNCE_TIME = t.ROLE_ICONS = t.POST_VOTING_DELAY_LOW_SPEC = t.POST_VOTING_DELAY = t.DEFAULT_TIME_TO_VOTE = void 0;
            t.VOTE_CAST_SFX_PATH = "/fe/lol-static-assets/sounds/honor/sfx-honor-vote-cast.ogg";
            t.VOTE_CAST_LOW_SPEC_SFX_PATH = "/fe/lol-static-assets/sounds/honor/sfx-honor-vote-cast-low-spec.ogg";
            t.VOTING_CEREMONY_INTRO_SFX_PATH = "/fe/lol-static-assets/sounds/honor/sfx-honor-voting-intro.ogg";
            t.ROLE_ICONS = {
                TOP: "/fe/lol-static-assets/images/honor/RoleIcon_TOP.png",
                JUNGLE: "/fe/lol-static-assets/images/honor/RoleIcon_JUNGLE.png",
                MIDDLE: "/fe/lol-static-assets/images/honor/RoleIcon_MIDDLE.png",
                BOTTOM: "/fe/lol-static-assets/images/honor/RoleIcon_BOTTOM.png",
                UTILITY: "/fe/lol-static-assets/images/honor/RoleIcon_UTILITY.png"
            };
            t.SETTLE_DEBOUNCE_TIME = 250;
            t.DEFAULT_TIME_TO_VOTE = 4e4;
            t.POST_VOTING_DELAY = 2e3;
            t.POST_VOTING_DELAY_LOW_SPEC = 500
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(182)) && n.__esModule ? n : {
                    default: n
                },
                l = s(183);
            s(186);
            var i = a.Ember.Component.extend(o.default, {
                honor: a.Ember.inject.service(),
                gameflow: a.Ember.inject.service(),
                baseClassName: "vote-ceremony-player-card",
                attributeBindings: ["style"],
                classNameBindings: ["baseClassName", "candidateActiveClassName", "teamClassName", "disabledClassName", "lowSpecClassName"],
                teamClassName: a.Ember.computed.alias("team"),
                disabledClassName: a.Ember.computed("selectionChosen", "votesRemaining", (function() {
                    return 0 === this.get("votesRemaining") || this.get("selectionChosen") ? "disabled" : ""
                })),
                lowSpecClassName: a.Ember.computed("isLowSpec", (function() {
                    return this.get("isLowSpec") ? "low-spec" : ""
                })),
                candidateActiveClassName: a.Ember.computed("candidateSelected", (function() {
                    return this.get("candidateSelected") ? "active" : ""
                })),
                style: a.Ember.computed("index", "totalCandidates", "team", (function() {
                    if (this.get("isLowSpec")) return "";
                    const e = this.get("index"),
                        t = this.get("totalCandidates"),
                        s = this.get("team"),
                        n = e - (t - 1) / 2;
                    return `animation-delay: ${Math.abs(n/8)+("team-2"===s?.25:0)+.25}s`
                })),
                candidateSelected: a.Ember.computed("selectedPlayers", "candidate.puuid", (function() {
                    const e = this.get("selectedPlayers"),
                        t = this.get("candidate.puuid");
                    return !!e && e.some((e => e.recipientPuuid === t))
                })),
                roleIcon: a.Ember.computed("candidate.role", (function() {
                    const e = this.get("candidate.role");
                    return l.ROLE_ICONS[e] || ""
                })),
                click: function() {
                    const e = "HEART";
                    if (a.datadogRum.startOperation(a.datadogRum.XP_CGL_POSTGAME_HONOR_VOTE, {
                            honor: {
                                candidate: this.get("candidate"),
                                type: e
                            }
                        }), this.get("candidateSelected") || 0 === this.get("votesRemaining")) a.datadogRum.stopOperationWithAbort(a.datadogRum.XP_CGL_POSTGAME_HONOR_VOTE, {
                        honor: {
                            votes_remaining: 0
                        }
                    });
                    else {
                        if (this.get("candidate.botPlayer")) {
                            const e = this.get("gameflow.queue.id"),
                                t = this.get("candidate.championId");
                            a.Telemetry.sendEvent("bot-selected-for-honor", `${e}:${t}`)
                        }
                        this.onVote(), this.playSound(this.get("isLowSpec") ? l.VOTE_CAST_LOW_SPEC_SFX_PATH : l.VOTE_CAST_SFX_PATH, !0), this.get("honor").honorPlayer({
                            recipientPuuid: this.get("candidate.puuid"),
                            honorType: e
                        }).then((e => {
                            a.datadogRum.stopOperationWithOk(a.datadogRum.XP_CGL_POSTGAME_HONOR_VOTE, {
                                honor: {
                                    foundation_response: e,
                                    votes_remaining: this.get("votesRemaining")
                                }
                            })
                        })).catch((e => {
                            a.datadogRum.stopOperationWithError(a.datadogRum.XP_CGL_POSTGAME_HONOR_VOTE, e, {
                                honor: {
                                    votes_remaining: this.get("votesRemaining")
                                }
                            })
                        }))
                    }
                }
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "bncF4Jqz",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\honor-voting\\\\addon\\\\templates\\\\honor-voting-ceremony.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\honor-voting\\\\addon\\\\styles\\\\honor-voting-ceremony.styl\\" js-path=\\"null\\" "],["text","\\n"],["block",["render-telemetry-sender"],null,[["renderEventName","shouldSendTelemetry"],[["get",["renderEventName"]],["get",["shouldSendTelemetry"]]]],8]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","button",[]],["static-attr","class","vote-ceremony-bug-reporter-button"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"handleTencentBugReport"],null],null],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["honor-voting-player-card"],null,[["candidate","selectedPlayers","index","totalCandidates","gameId","selectionChosen","team","submitHonor","votesRemaining","onVote","isLowSpec"],[["get",["candidate"]],["get",["selectedPlayers"]],["get",["index"]],["get",["eligibleOpponents","length"]],["get",["gameId"]],["get",["selectionChosen"]],"team-2","submitHonor",["get",["votesRemaining"]],["helper",["action"],[["get",[null]],"onVote"],null],["get",["isLowSpec"]]]]],false],["text","\\n"]],"locals":["candidate","index"]},{"statements":[["text","      "],["append",["helper",["honor-voting-player-card"],null,[["candidate","selectedPlayers","index","totalCandidates","gameId","selectionChosen","team","submitHonor","votesRemaining","onVote","isLowSpec"],[["get",["candidate"]],["get",["selectedPlayers"]],["get",["index"]],["get",["eligibleAllies","length"]],["get",["gameId"]],["get",["selectionChosen"]],"team-1","submitHonor",["get",["votesRemaining"]],["helper",["action"],[["get",[null]],"onVote"],null],["get",["isLowSpec"]]]]],false],["text","\\n"]],"locals":["candidate","index"]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","vote-ceremony-tooltip-text"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","vote-ceremony-tooltip-title"],["flush-element"],["append",["unknown",["tra","honor_prompted_voting_tooltip_title"]],false],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","vote-ceremony-tooltip-content"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","vote-ceremony-tooltip-header"],["flush-element"],["append",["unknown",["tra","honor_prompted_voting_tooltip_header"]],false],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","vote-ceremony-tooltip-additional-votes"],["flush-element"],["append",["unknown",["tra","honor_prompted_voting_tooltip_additional_votes"]],false],["close-element"],["text","\\n            "],["open-element","ul",[]],["static-attr","class","vote-ceremony-tooltip-additional-votes-list"],["flush-element"],["text","\\n              "],["open-element","li",[]],["flush-element"],["append",["unknown",["tra","honor_prompted_voting_tooltip_additional_votes_item_1"]],false],["close-element"],["text","\\n              "],["open-element","li",[]],["flush-element"],["append",["unknown",["tra","honor_prompted_voting_tooltip_additional_votes_item_2"]],false],["close-element"],["text","\\n            "],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["dynamic-attr","class",["concat",["vote-ceremony-votes-remaining-vote ",["helper",["unless"],[["get",["voteStatus"]],"used"],null]]]],["flush-element"],["text","\\n        "],["open-element","img",[]],["static-attr","class","vote-ceremony-votes-remaining-image diamond"],["static-attr","src","/fe/lol-static-assets/images/honor/Voting_Diamond.png"],["flush-element"],["close-element"],["text","\\n        "],["open-element","img",[]],["static-attr","class","vote-ceremony-votes-remaining-image heart"],["static-attr","src","/fe/lol-static-assets/images/honor/Voting_Heart.png"],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":["voteStatus"]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","honor_prompted_voting_tooltip_explanation"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","uikit-video",[]],["static-attr","src","/fe/lol-static-assets/videos/honor/Voting_BG.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","img",[]],["static-attr","src","/fe/lol-static-assets/images/honor/Voting_BG_static.jpeg"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","vote-ceremony-background"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isLowSpec"]]],null,7,6],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","vote-ceremony-header"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","vote-ceremony-title"],["flush-element"],["append",["unknown",["tra","honor_prompted_voting_title"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","vote-ceremony-tooltip"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","vote-ceremony-tooltip-image"],["static-attr","src","/fe/lol-static-assets/images/honor/Tooltip.png"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","bottom"]],5],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","vote-ceremony-votes-remaining"],["flush-element"],["text","\\n"],["block",["each"],[["get",["votingStatus"]]],null,4],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","bottom"]],3],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["vote-ceremony-player-container team-1 ",["helper",["if"],[["get",["isLowSpec"]],"low-spec"],null]]]],["flush-element"],["text","\\n"],["block",["each"],[["get",["eligibleAllies"]]],null,2],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["vote-ceremony-player-container team-2 ",["helper",["if"],[["get",["isLowSpec"]],"low-spec"],null]]]],["flush-element"],["text","\\n"],["block",["each"],[["get",["eligibleOpponents"]]],null,1],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","vote-ceremony-footer"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-close-button",[]],["static-attr","button-type","next"],["static-attr","class","vote-ceremony-submit-button"],["dynamic-attr","disabled",["unknown",["selectionChosen"]],null],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"submitSelection"],null],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["vote-ceremony-timer ",["helper",["if"],[["get",["selectionChosen"]],"hidden"],null]]]],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","vote-ceremony-timer-text"],["flush-element"],["append",["unknown",["timerText"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["isTencentBugReportEnabled"]]],null,0]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "cRdlZcxs",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\honor-voting\\\\addon\\\\templates\\\\honor-voting-player-card.hbs\\" style-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\lib\\\\honor-voting\\\\addon\\\\styles\\\\honor-voting-player-card.styl\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","vote-ceremony-candidate-champ-image-wrapper"],["flush-element"],["text","\\n  "],["open-element","img",[]],["dynamic-attr","class",["concat",["vote-ceremony-candidate-champ-image ",["helper",["if"],[["get",["isLowSpec"]],"low-spec"],null]]]],["dynamic-attr","src",["concat",[["unknown",["candidate","skinSplashPath"]]]]],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","vote-ceremony-candidate-names"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","vote-ceremony-candidate-summoner-name"],["flush-element"],["text","\\n"],["block",["if"],[["get",["candidate","botPlayer"]]],null,5,4],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","vote-ceremony-candidate-champ-name"],["flush-element"],["text","\\n    "],["append",["unknown",["candidate","championName"]],false],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["roleIcon"]]],null,3],["text","\\n"],["block",["if"],[["get",["candidateSelected"]]],null,2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","vote-ceremony-candidate-animation-celebration"],["flush-element"],["text","\\n        "],["open-element","uikit-video",[]],["static-attr","src","/fe/lol-static-assets/videos/honor/Voting_VoteCast_Celebration_V2.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","muted",""],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","vote-ceremony-candidate-selection-badge"],["flush-element"],["text","\\n        "],["open-element","img",[]],["static-attr","src","/fe/lol-static-assets/images/honor/Heart_MiniIcon.png"],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","vote-ceremony-candidate-animation"],["flush-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["vote-ceremony-candidate-animation-border ",["helper",["if"],[["get",["isLowSpec"]],"low-spec"],null]]]],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["isLowSpec"]]],null,1,0],["text","  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","vote-ceremony-candidate-role"],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","vote-ceremony-candidate-role-image"],["dynamic-attr","src",["concat",[["unknown",["roleIcon"]]]]],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["player-name"],null,[["format","puuid","batch"],["short",["get",["candidate","puuid"]],true]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["candidate","summonerName"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = n.Ember.Component.extend({
                    classNames: ["scoreboard-spell-component"],
                    classNameBindings: ["isSmall", "isLarge"],
                    postgame: n.Ember.inject.service(),
                    spellData: n.Ember.computed("spellId", "postgame.summonerSpells", (function() {
                        return (this.get("postgame.summonerSpells") || []).find((e => e.id === this.get("spellId")))
                    }))
                });
            t.default = a
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "wK9qgym2",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\strawberry\\\\strawberry-postgame-achievements.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","achivement-list-title"],["flush-element"],["append",["unknown",["tra","strawberry_eog_objectives"]],false],["close-element"],["text","\\n"],["open-element","lol-uikit-scrollable",[]],["static-attr","class","postgame-achievement-list-wrapper"],["dynamic-attr","overflow-masks",["helper",["if"],[["get",["isScrollable"]],"enabled"],null],null],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","postgame-achievement-list"],["flush-element"],["text","\\n"],["block",["each"],[["get",["milestonesToShow"]]],null,0],["text","  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","postgame-achievement-item-container"],["flush-element"],["text","\\n        "],["append",["helper",["achievement-item"],null,[["milestone"],[["get",["milestone"]]]]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":["milestone"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "UYzppzFN",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\strawberry\\\\strawberry-postgame-root.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-contents"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showMissionLogModal"]]],null,0],["text","  "],["open-element","div",[]],["static-attr","class","postgame-header-section"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-header-background"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-header-container"],["flush-element"],["text","\\n      "],["append",["helper",["postgame-header"],null,[["gameId"],[["get",["gameId"]]]]],false],["text","\\n      "],["open-element","div",[]],["static-attr","class","postgame-header-button-container"],["flush-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["append",["helper",["strawberry-scoreboard-root"],null,[["eogStats","showKeystone","hasScoreboardAnimationPlayed","hasCelebratedHonor","isContinueButtonClicked","updateHonorCelebrationAnimation","updateScoreboardAnimation"],[["get",["eogStats"]],["get",["gameflow","showKeystone"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["isContinueButtonClicked"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null],["helper",["action"],[["get",[null]],"updateScoreboardAnimation"],null]]]],false],["text","\\n\\n  "],["append",["helper",["strawberry-postgame-achievements"],null,[["grantsToDisplay"],[["get",["grantsToDisplay"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","postgame-footer"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","left-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["chat-container ",["helper",["if"],[["get",["shouldHideChatRoom"]],"hidden"],null]]]],["flush-element"],["text","\\n      "],["open-element","lol-social-chat-room",[]],["static-attr","class","scoreboard-v2"],["static-attr","type","postGame"],["dynamic-attr","placeholder",["concat",[["unknown",["tra","postgame_chat_placeholder"]]]]],["static-attr","can-hide-player-messages",""],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","center-container"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-close-button",[]],["static-attr","class","postgame-footer-exit-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"exitPostgame"],null],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","find-match-button-container"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","find-match-button-decoration find-match-button-decoration-left"],["flush-element"],["close-element"],["text","\\n      "],["append",["helper",["animated-play-button"],null,[["onClick","hasIntroAnimationPlayed","buttonText","baseImgPath","overImgPath","downImgPath","onHoverSound","onClickSound","clickedStyle","partyStatus"],[["helper",["action"],[["get",[null]],"onButtonClick"],null],["get",["hasIntroAnimationPlayed"]],["get",["forwardButtonText"]],"/fe/lol-static-assets/images/buttons/find_match_default.png","/fe/lol-static-assets/images/buttons/find_match_hover.png","/fe/lol-static-assets/images/buttons/find_match_active.png",["get",["forwardHoverSound"]],["get",["forwardClickSound"]],"color: #005A82",["get",["partyStatus"]]]]],false],["text","\\n      "],["open-element","div",[]],["static-attr","class","find-match-button-decoration find-match-button-decoration-right"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["append",["helper",["postgame-party-status-v2"],null,[["partyStatus","animationsEnabled"],[["get",["partyStatus"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","right-container"],["flush-element"],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","lc-alert-modal",[]],["dynamic-attr","open",["unknown",["showMissionLogModal"]],null],["dynamic-attr","onHide",["helper",["action"],[["get",[null]],"closeNarrativeLogsModal"],null],null],["dynamic-attr","okText",["unknown",["tra","celebration_button_text_multi"]],null],["dynamic-attr","onOk",["helper",["action"],[["get",[null]],"closeNarrativeLogsModal"],null],null],["dynamic-attr","dismissible",true,null],["static-attr","dismissibleType","inside"],["flush-element"],["text","\\n      "],["open-element","lc-modal-content",[]],["flush-element"],["text","\\n        "],["append",["helper",["strawberry-mission-log-modal"],null,[["barkData"],[["get",["barkData"]]]]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "8FdZZLbd",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\strawberry\\\\strawberry-scoreboard-root.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-root-content-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["postgame","eogStatsBlock","teams"]]],null,3],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["open-element","video",[]],["dynamic-attr","class",["concat",["scoreboard-team-intro-animation ",["helper",["unless"],[["get",["team","isPlayerTeam"]],"scoreboard-team-intro-animation-enemy"],null]]]],["static-attr","src","/fe/lol-postgame/EOG_Scoreboard_Team_Color.webm"],["static-attr","type","video/webm"],["static-attr","autoplay",""],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","scoreboard-row-separator top"],["flush-element"],["close-element"],["text","\\n            "],["append",["helper",["strawberry-scoreboard-row"],null,[["player","team","showKeystone","gameLengthSeconds","gameId","hasScoreboardAnimationPlayed","hasCelebratedHonor","animationsEnabled","updateHonorCelebrationAnimation"],[["get",["player"]],["get",["team"]],["get",["showKeystone"]],["get",["eogStats","gameLength"]],["get",["eogStats","gameId"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["animationsEnabled"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null]]]],false],["text","\\n"]],"locals":["player"]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-header"],["flush-element"],["close-element"],["text","\\n      "],["append",["helper",["strawberry-scoreboard-header"],null,[["team","index","locale"],[["get",["team"]],["get",["index"]],["get",["postgame","locale"]]]]],false],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-team-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","scoreboard-team"],["flush-element"],["text","\\n"],["block",["each"],[["get",["team","players"]]],null,1],["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-separator bottom"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n"],["block",["if"],[["get",["showTeamIntroAnimation"]]],null,0],["text","      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["team","isPlayerTeam"]]],null,2]],"locals":["team","index"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "Js2pCWT3",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\strawberry\\\\strawberry-scoreboard-header.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-header-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-team-name"],["flush-element"],["append",["unknown",["tra","strawberry_anima_squad_title_text"]],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-header-spacer"],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["showScoreboardColumnIcons"]]],null,3]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_GOLD_EARNED"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_MINIONS_KILLED"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_TOTAL_DAMAGE_DEALT"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","scoreboard-column-icons-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon-spacer"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon damage-dealt"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],2],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon-spacer"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon minions"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],1],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon-spacer"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon gold"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "a9fvbjKk",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\strawberry\\\\strawberry-scoreboard-row.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-content-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isLeaver"]]],null,13],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["strawberry-scoreboard-row-color-bar ",["unknown",["playerColorBarClass"]]]]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-player-details-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-skin-background"],["dynamic-attr","style",["unknown",["skinSplashStyle"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-skin-overlay"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-skin-overlay secondary"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-details-content horizontal-flex-box"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-position-level-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["displayedPosition"]]],null,12],["text","        "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-in-game-level centered-flex-box"],["flush-element"],["append",["unknown",["player","stats","LEVEL"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-spacer"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-name-and-champ-container vertical-flex-box"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-player-name"],["flush-element"],["text","\\n"],["block",["if"],[["get",["player","botPlayer"]]],null,10,9],["text","        "],["close-element"],["text","\\n"],["block",["if"],[["get",["isLeaver"]]],null,8,7],["text","      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-actions-button-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,4],["text","      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","id","mute-indicator"],["static-attr","class","strawberry-scoreboard-row-mute-indicator"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldShowPlayerHonorComponent"]]],null,3],["text","  "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-items-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["each"],[["get",["paredItems"]]],null,2],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-augments-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["each"],[["get",["playerAugments"]]],null,1],["text","  "],["close-element"],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","hasScoreboardAnimationPlayed","animationsEnabled"],["TOTAL_DAMAGE_DEALT",["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","highestStatValueByStatMap","locale","hasScoreboardAnimationPlayed","animationsEnabled"],["MINIONS_KILLED",["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["highestStatValueByStatMap"]],["get",["postgame","locale"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","highestStatValueByStatMap","locale","hasScoreboardAnimationPlayed","animationsEnabled"],["GOLD_EARNED",["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["highestStatValueByStatMap"]],["get",["postgame","locale"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-hover-overlay"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,0],["text","  "],["open-element","lc-flyout",[]],["dynamic-attr","open",["unknown",["isPlayerActionsMenuOpen"]],null],["dynamic-attr","onHide",["helper",["action"],[["get",[null]],"hidePlayerActionsMenu"],null],null],["dynamic-attr","uiKitOptionOverrides",["unknown",["flyoutOptions"]],null],["flush-element"],["text","\\n    "],["open-element","lc-flyout-content",[]],["flush-element"],["text","\\n      "],["append",["helper",["scoreboard-row-actions-menu"],null,[["data","isItemSetsDisabled","isFriendRequestDisabled","isPlayerBlocked","isReportDisabled","isPlayerMuted","sendFriendRequest","inviteToParty","showReportDialog","confirmBlockPlayer","viewProfile","importItemSet","togglePlayerMute","isPlayerMuteToggleable"],[["get",["player"]],["get",["postgame","isItemSetsDisabled"]],["get",["isFriendRequestDisabled"]],["get",["isPlayerBlocked"]],["get",["isReportDisabled"]],["get",["showPlayerMute"]],"sendFriendRequest","inviteToParty","showReportDialog","confirmBlockPlayer","viewProfile","importItemSet","togglePlayerMute",["get",["isPlayerMuteToggleable"]]]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-player-controls-container"],["flush-element"],["text","\\n      "],["append",["helper",["postgame-scoreboard-player-buttons"],null,[["player","isFriendRequestDisabled","isReportDisabled","isPlayerTeam","isInviteDisabled","sendFriendRequest","showReportDialog","inviteToParty","togglePlayerMute","isPlayerMuted"],[["get",["player"]],["get",["isFriendRequestDisabled"]],["get",["isReportDisabled"]],["get",["team","isPlayerTeam"]],["get",["isInviteDisabled"]],"sendFriendRequest","showReportDialog","inviteToParty","togglePlayerMute",["get",["isPlayerMuted"]]]]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["postgame-scoreboard-player-augment"],null,[["augmentId"],[["get",["augmentId"]]]]],false],["text","\\n"]],"locals":["augmentId"]},{"statements":[["text","      "],["append",["helper",["postgame-scoreboard-player-item"],null,[["itemId"],[["get",["itemId"]]]]],false],["text","\\n"]],"locals":["itemId"]},{"statements":[["text","    "],["append",["helper",["scoreboard-honor-flair"],null,[["isLocalPlayer","isPlayerTeam","isBot","puuid","summonerName","gameName","tagLine","hasScoreboardAnimationPlayed","hasCelebrated","updateHonorCelebrationAnimation"],[["get",["player","isLocalPlayer"]],["get",["team","isPlayerTeam"]],["get",["player","botPlayer"]],["get",["player","puuid"]],["get",["player","summonerName"]],["get",["gameName"]],["get",["tagLine"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-actions-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"showPlayerActionsMenu"],null],null],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-champ-name"],["flush-element"],["append",["unknown",["player","championName"]],false],["close-element"],["text","\\n        "]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-is-system-muted"],["flush-element"],["append",["unknown",["tra","postgame_system_muted_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isSystemMuted"]]],null,6,5]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-leaver-text"],["flush-element"],["append",["unknown",["tra","postgame_afk_penalty_applied_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["helper",["player-name"],null,[["format","puuid","summonerName","gameName","tagLine"],["short",["get",["player","puuid"]],["get",["player","summonerName"]],["get",["gameName"]],["get",["tagLine"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["unknown",["player","summonerName"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","              "],["open-element","lol-uikit-content-block",[]],["static-attr","class","strawberry-scoreboard-row-lane-position-tooltip"],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-lane-position-tooltip-header"],["flush-element"],["append",["unknown",["displayedPositionTranslatedText"]],false],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-lane-position-tooltip-description"],["flush-element"],["append",["unknown",["tra","postgame_scoreboard_lane_position_tooltip_description"]],false],["close-element"],["text","\\n              "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","strawberry-scoreboard-row-position-icon-wrapper centered-flex-box"],["flush-element"],["text","\\n            "],["open-element","img",[]],["static-attr","class","strawberry-scoreboard-row-position-icon"],["dynamic-attr","src",["concat",["/fe/lol-parties/icon-position-",["unknown",["displayedPosition"]],"-hover.png"]]],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["top"]],11],["text","          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","embellishment-icon-container"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","cancel-icon"],["static-attr","src","/fe/lol-postgame/icon-cancel.svg"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "9QM/TEg1",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\render-timer.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["if"],[["get",["isTimeToShow"]]],null,0]],"locals":[],"named":[],"yields":["default"],"blocks":[{"statements":[["text","  "],["yield","default"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "78CkLA6l",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\eternals-token.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type","pseudoPartSelector"],["right","system","eternals-item-tooltip"]],3],["open-element","div",[]],["static-attr","class","progression-modal-eternals-token-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","progression-modal-eternals-token"],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","eternals-token-img"],["dynamic-attr","src",["unknown",["eternal","imageUrl"]],null],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["isPersonalBest"]]],null,2,1],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","progresion-modal-eternals-footer"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","eternals-icon"],["static-attr","src","/fe/lol-postgame/icon-milestone.svg"],["flush-element"],["close-element"],["text","\\n      "],["append",["unknown",["eternal","level"]],false],["text","\\n    "],["close-element"],["text","\\n  "]],"locals":[]},{"statements":[["block",["if"],[["get",["isNewMilestone"]]],null,0]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","progresion-modal-eternals-footer"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","eternals-icon"],["static-attr","src","/fe/lol-postgame/icon-target.svg"],["flush-element"],["close-element"],["text","\\n      "],["append",["unknown",["eternal","value"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["append",["helper",["eternals-item-tooltip"],null,[["eternal","index","isLevelFiveOrGreater","leftHeaderValue"],[["get",["eternal"]],["get",["index"]],["get",["isLevelFiveOrGreater"]],["get",["headerValue"]]]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "DewFyXnV",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\postgame-root.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-contents"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowGameClientStats"]]],null,14,10],["close-element"],["text","\\n\\n"],["open-element","div",[]],["dynamic-attr","class",["concat",["postgame-header-section ",["helper",["if"],[["get",["isProgressionTabSelected"]],"progression-tab"],null]]]],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","postgame-header-background"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","postgame-header-container"],["flush-element"],["text","\\n    "],["append",["helper",["postgame-header"],null,[["gameId"],[["get",["gameId"]]]]],false],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-header-button-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showAddPerksPageButton"]]],null,6],["block",["if"],[["get",["postgame","isLocalPlayerInGame"]]],null,5],["block",["unless"],[["get",["shouldShowGameClientStats"]]],null,4],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","postgame-footer"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","left-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["chat-container ",["helper",["if"],[["get",["shouldHideChatRoom"]],"hidden"],null]]]],["flush-element"],["text","\\n      "],["open-element","lol-social-chat-room",[]],["static-attr","class","scoreboard-v2"],["static-attr","type","postGame"],["dynamic-attr","room-changed-messages",["unknown",["roomChangedMessages"]],null],["dynamic-attr","placeholder",["concat",[["unknown",["tra","postgame_chat_placeholder"]]]]],["static-attr","can-hide-player-messages",""],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","center-container"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-close-button",[]],["static-attr","class","postgame-footer-exit-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"exitPostgame"],null],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","find-match-button-container"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","find-match-button-decoration find-match-button-decoration-left"],["flush-element"],["close-element"],["text","\\n"],["block",["unless"],[["get",["animationsEnabled"]]],null,1,0],["text","      "],["open-element","div",[]],["static-attr","class","find-match-button-decoration find-match-button-decoration-right"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["dynamic-attr","class",["concat",["career-postgame-countdown-meter-container ",["helper",["if"],[["get",["hasTimer"]],"visible"],null]]]],["flush-element"],["text","\\n        "],["open-element","img",[]],["static-attr","class","career-postgame-countdown-meter-background"],["static-attr","src","/fe/lol-postgame/countdown_meter_bg.svg"],["flush-element"],["close-element"],["text","\\n        "],["open-element","img",[]],["static-attr","class","career-postgame-countdown-meter"],["static-attr","src","/fe/lol-postgame/countdown_meter.svg"],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["append",["helper",["postgame-party-status-v2"],null,[["partyStatus","animationsEnabled"],[["get",["partyStatus"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","right-container"],["flush-element"],["text","\\n    "],["append",["unknown",["postgame-scoreboard-progression-honor-notification"]],false],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["append",["helper",["postgame-sub-navigation"],null,[["tabs","onSelect"],[["get",["tabs"]],["helper",["action"],[["get",[null]],"handleTabSelected"],null]]]],false],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-progression-lottie-outline"],["flush-element"],["text","\\n  "],["open-element","lol-uikit-lottie",[]],["static-attr","id","lottie-outline-anim"],["static-attr","src","/fe/lol-static-assets/lottie/postgame/postgame-screen-border.json"],["static-attr","autoplay","false"],["flush-element"],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["animated-play-button"],null,[["onClick","hasIntroAnimationPlayed","buttonText","baseImgPath","overImgPath","downImgPath","onHoverSound","onClickSound","clickedStyle","partyStatus"],[["helper",["action"],[["get",[null]],"onButtonClick"],null],["get",["hasIntroAnimationPlayed"]],["get",["forwardButtonText"]],"/fe/lol-static-assets/images/buttons/find_match_default.png","/fe/lol-static-assets/images/buttons/find_match_hover.png","/fe/lol-static-assets/images/buttons/find_match_active.png",["get",["forwardHoverSound"]],["get",["forwardClickSound"]],"color: #005A82",["get",["partyStatus"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["generic-button"],null,[["onClick","baseImgPath","overImgPath","downImgPath","upText","overText","downText","onHoverSound","onClickSound"],[["helper",["action"],[["get",[null]],"onButtonClick"],null],"/fe/lol-postgame/button-find-match.png","/fe/lol-postgame/button-find-match-over.png","/fe/lol-postgame/button-find-match-down.png",["get",["forwardButtonText"]],["get",["forwardButtonText"]],["get",["forwardButtonText"]],["get",["forwardHoverSound"]],["get",["forwardClickSound"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","postgame-match-history-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"displayAdvancedDetails"],null],null],["flush-element"],["text","\\n              "],["append",["unknown",["tra","postgame_scoreboard_view_advanced_details"]],false],["text","\\n            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["shouldShowAdvancedDetailsButton"]]],null,2]],"locals":[]},{"statements":[["block",["unless"],[["get",["isDetailsTabOpen"]]],null,3]],"locals":[]},{"statements":[["text","        "],["append",["unknown",["postgame-scoreboard-replay-button"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","add-perks-page-button-container"],["flush-element"],["text","\\n          "],["append",["helper",["generic-button"],null,[["onClick","baseImgPath","overImgPath","downImgPath","disabledImgPath","tooltipText","disabledTooltipText","isEnabled","onHoverSound","onClickSound"],[["helper",["action"],[["get",[null]],"addPerksPage"],null],"/fe/lol-postgame/add-rune-page.png","/fe/lol-postgame/add-rune-page.png","/fe/lol-postgame/add-rune-page-disabled.png","/fe/lol-postgame/add-rune-page-disabled.png",["get",["tra","perks_add_rune_page_button"]],["get",["addRunePageButtonDisabledText"]],["get",["addPerksPageButtonEnabled"]],["get",["forwardHoverSound"]],["get",["forwardClickSound"]]]]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["scoreboard-root"],null,[["eogStats","showKeystone","hasScoreboardAnimationPlayed","hasCelebratedHonor","isContinueButtonClicked","updateHonorCelebrationAnimation","updateScoreboardAnimation"],[["get",["eogStats"]],["get",["gameflow","showKeystone"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["isContinueButtonClicked"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null],["helper",["action"],[["get",[null]],"updateScoreboardAnimation"],null]]]],false],["text","\\n    "]],"locals":[]},{"statements":[["block",["if"],[["get",["isScoreboardTabSelected"]]],null,7]],"locals":[]},{"statements":[["text","      "],["append",["helper",["postgame-progression"],null,[["eogStats","updatedChallengesList","summonerIconPath","willAnimate","gameMode","playOutlineAnimation","setModalDoneShowing"],[["get",["eogStats"]],["get",["updatedChallengesList"]],["get",["summonerIconPath"]],["get",["isAnimating"]],["get",["gameMode"]],["helper",["action"],[["get",[null]],"playOutlineAnimation"],null],["helper",["action"],[["get",[null]],"setModalDoneShowing"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isProgressionTabSelected"]]],null,9,8]],"locals":[]},{"statements":[["text","      "],["append",["helper",["scoreboard-root"],null,[["eogStats","showKeystone","hasScoreboardAnimationPlayed","hasCelebratedHonor","isContinueButtonClicked","updateHonorCelebrationAnimation","updateScoreboardAnimation"],[["get",["gameClientStats"]],["get",["gameflow","showKeystone"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["isContinueButtonClicked"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null],["helper",["action"],[["get",[null]],"updateScoreboardAnimation"],null]]]],false],["text","\\n    "]],"locals":[]},{"statements":[["block",["if"],[["get",["isScoreboardTabSelected"]]],null,11]],"locals":[]},{"statements":[["text","      "],["append",["helper",["postgame-progression"],null,[["eogStats","updatedChallengesList","summonerIconPath","willAnimate","gameMode","playOutlineAnimation","setModalDoneShowing","shouldHidePrestigeProgression"],[["get",["gameClientStats"]],["get",["updatedChallengesList"]],["get",["summonerIconPath"]],["get",["isAnimating"]],["get",["gameMode"]],["helper",["action"],[["get",[null]],"playOutlineAnimation"],null],["helper",["action"],[["get",[null]],"setModalDoneShowing"],null],["get",["shouldShowGameClientStats"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isProgressionTabSelected"]]],null,13,12]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "+nj8r4lb",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\postgame-sub-navigation.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","lol-uikit-navigation-bar",[]],["static-attr","type","nav-bar-secondary"],["static-attr","class","postgame-sub-navigation-container"],["flush-element"],["text","\\n"],["block",["each"],[["helper",["-each-in"],[["get",["tabs"]]],null]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["modifier",["action"],[["get",[null]],"selectTab",["get",["index"]]]],["flush-element"],["text","\\n      "],["open-element","lol-uikit-navigation-item",[]],["dynamic-attr","active",["concat",[["helper",["if"],[["get",["tab","selected"]],"true"],null]]]],["flush-element"],["text","\\n        "],["append",["unknown",["tab","name"]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":["index","tab"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "KsRhDJeT",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\postgame-progression.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["render-telemetry-sender"],null,[["renderEventName"],[["get",["renderEventName"]]]],8]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","lc-modal",[]],["dynamic-attr","open",["unknown",["showProgressionModal"]],null],["dynamic-attr","onHide",["helper",["action"],[["get",[null]],"closeModal"],null],null],["flush-element"],["text","\\n      "],["open-element","lc-modal-content",[]],["flush-element"],["text","\\n        "],["append",["helper",["progression-modal"],null,[["challenges","eternals","groupedChallenges","groupedEternals","showEternalsData","showChallengesData","closeModal"],[["get",["allChallengeUpdates"]],["get",["allEternalsUpdates"]],["get",["groupedChallenges"]],["get",["groupedEternals"]],["get",["showProgressedEternalsData"]],["get",["showProgressedChallengesData"]],["helper",["action"],[["get",[null]],"closeModal"],null]]]],false],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["challenge-update-container"],null,[["challenges","eternals","groupedChallenges","groupedEternals","items","willAnimate","openModal","playOutlineAnimation"],[["get",["allChallengeUpdates"]],["get",["allEternalsUpdates"]],["get",["challengesMap"]],["get",["eternalsMap"]],["get",["showcasedEoGUpdateSlots"]],["get",["willAnimate"]],["helper",["action"],[["get",[null]],"openModal"],null],["helper",["action"],[["get",[null]],"playOutlineAnimation"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["legendary-mastery-progression"],null,[["isSmall","willAnimate"],[["get",["showSmallMasteryProgression"]],["get",["willAnimate"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["ranked-progression"],null,[["tier","division","leaguePointsDelta","leaguePoints","consolationLpUsed","afkLpPenaltyAmount","lpChangeClassName","miniseriesProgress","notifyReason","isLossPrevented","isWin","provisionalGamesRemaining","willAnimate"],[["get",["leaguesNotification","tier"]],["get",["leaguesNotification","division"]],["get",["leaguesNotification","leaguePointsDelta"]],["get",["leaguesNotification","leaguePoints"]],["get",["leaguesNotification","consolationLpUsed"]],["get",["leaguesNotification","afkLpPenaltyAmount"]],["get",["lpChangeClassName"]],["get",["leaguesNotification","miniseriesProgress"]],["get",["leaguesNotification","notifyReason"]],["get",["isLossPrevented"]],["get",["isWin"]],["get",["leaguesNotification","provisionalGamesRemaining"]],["get",["willAnimate"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["season-pass-progression"],null,[["isSmall"],[["get",["isRanked"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["prestige-progression"],null,[["isLarge","eogStats","summonerIconPath","isRanked","isCherry","willAnimate"],[["get",["isPrestigeProgressionLarge"]],["get",["eogStats"]],["get",["summonerIconPath"]],["get",["isRanked"]],["get",["isCherry"]],["get",["willAnimate"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["shouldShowPrestigeProgression"]]],null,5]],"locals":[]},{"statements":[["text","      "],["append",["helper",["season-pass-progression"],null,[["isSmall","isMayhemSeasonPass"],[true,true]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","postgame-champion-background-wrapper"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-champion-background-mask"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","postgame-champion-background"],["dynamic-attr","src",["concat",[["unknown",["eogStats","localPlayer","skinSplashPath"]]]]],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","progression-screen-header"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isKiwi"]]],null,7],["block",["unless"],[["get",["shouldShowSmallSeasonPass"]]],null,6],["block",["if"],[["get",["shouldShowSeasonPass"]]],null,4],["block",["if"],[["get",["leaguesNotification"]]],null,3],["block",["if"],[["get",["shouldShowMasteryProgression"]]],null,2],["text","  "],["close-element"],["text","\\n"],["block",["if"],[["get",["showcasedEoGUpdateSlots"]]],null,1],["block",["if"],[["get",["showProgressionModal"]]],null,0]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "oX0vgAH9",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\prestige-progression.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","prestige-progression-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["animated-radial ",["helper",["if"],[["get",["showAnimatedElements"]],"visible"],null]]]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","radial-fill"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-lottie",[]],["static-attr","class","lottie-radial-fill"],["dynamic-attr","src",["unknown",["lottieBarFillPath"]],null],["dynamic-attr","param-current-exp",["unknown",["lottieRadialOldPercent"]],null],["dynamic-attr","param-new-exp",["unknown",["lottieRadialNewPercent"]],null],["static-attr","autoplay","false"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["unless"],[["get",["showAnimatedElements"]]],null,3],["text","  "],["open-element","div",[]],["static-attr","class","summoner-icon-container"],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","summoner-icon"],["dynamic-attr","src",["unknown",["summonerIconPath"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","summoner-icon-frame"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","summoner-level-plate"],["flush-element"],["append",["unknown",["playerLevel"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type"],["right","system"]],2],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","prestige-progression-details"],["flush-element"],["text","\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["prestige-progression-xp-gained ",["helper",["if"],[["get",["isCherry"]],"align-higher"],null]]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["willAnimate"]]],null,1,0],["text","    "],["open-element","lol-uikit-video",[]],["static-attr","class","points-gained-spark-small-video"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-spark-small.webm"],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n    "],["open-element","lol-uikit-video",[]],["static-attr","class","points-gained-spark-medium-video"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-spark-medium.webm"],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","prestige-progression-level-label"],["flush-element"],["append",["unknown",["tra","career_postgame_progress_xp_level_label"]],false],["close-element"],["text","\\n\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["unknown",["playerXpGainLoc"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["animatedPointsText"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["prestige-progression-tooltip"],null,[["xpSources","xpEarned","xpTotal","nextLevelXpRequired","level"],[["get",["xpSources"]],["get",["xpEarned"]],["get",["xpTotal"]],["get",["nextLevelXpRequired"]],["get",["playerLevel"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","lol-uikit-radial-progress",[]],["static-attr","class","prestige-progression-radial-progress"],["static-attr","type","custom"],["dynamic-attr","percent",["concat",[["unknown",["radialProgressPercent"]]]]],["static-attr","start-angle","-135"],["static-attr","end-angle","-405"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","bottom"],["static-attr","class","prestige-progression-radial radial-bottom"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","middle"],["static-attr","class","prestige-progression-radial radial-middle"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "i6hyIhzq",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\prestige-progression-tooltip.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","prestige-progression-tooltip-header"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","prestige-progression-summoner-level"],["flush-element"],["append",["unknown",["summonerLevelLoc"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","prestige-progression-xp-total"],["flush-element"],["append",["unknown",["xpTotalLoc"]],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","hr",[]],["static-attr","class","prestige-progression-tooltip-divider"],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","prestige-progression-tooltip-sources-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","prestige-progression-tooltip-sources-label"],["flush-element"],["text","\\n    "],["append",["unknown",["tra","career_postgame_progress_tooltip_sources_header_label"]],false],["text","\\n  "],["close-element"],["text","\\n"],["block",["each"],[["get",["xpSources"]]],null,1],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","prestige-progression-source-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","prestige-progression-source-value"],["flush-element"],["append",["unknown",["xpSource","valueLoc"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","prestige-progression-source-type-loc"],["flush-element"],["append",["unknown",["xpSource","typeLoc"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["xpSource","shouldShow"]]],null,0]],"locals":["xpSource"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "1VhH3EUh",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\legendary-mastery-progression.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["dynamic-attr","class",["concat",["legendary-mastery-progression-container ",["helper",["if"],[["get",["isChampionMasteryAvailable"]],"visible"],null]]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["hasLeveledUp"]]],null,6],["text","  "],["open-element","div",[]],["static-attr","class","mastery-progression-main"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-radial-progress",[]],["static-attr","class","mastery-progression-radial-progress"],["static-attr","type","custom"],["static-attr","start-angle","-135"],["static-attr","end-angle","-405"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","bottom"],["static-attr","class","bottom mastery-progression-radial radial-bottom"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","middle"],["static-attr","class","middle mastery-progression-radial radial-middle"],["dynamic-attr","percent",["unknown",["masteryRadialCurrentProgressPercent"]],null],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","middle"],["static-attr","class","middle mastery-progression-radial radial-top"],["dynamic-attr","percent",["unknown",["masteryRadialNewProgressPercent"]],null],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","mastery-progression-icon-wrapper"],["flush-element"],["text","\\n      "],["open-element","div",[]],["dynamic-attr","class",["concat",["mastery-progression-icon mastery-level-",["unknown",["masteryLevelCapped"]]]]],["flush-element"],["text","\\n        "],["append",["helper",["mastery-crest"],null,[["masteryLevel"],[["get",["masteryLevel"]]]]],false],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","mastery-progression-grade"],["flush-element"],["append",["unknown",["grade"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","mastery-progression-marks-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["marksDisplayList"]]],null,5],["text","    "],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type"],["right","system"]],4],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","mastery-milestone-grades-container"],["flush-element"],["text","\\n    "],["append",["helper",["grade-display"],null,[["gradeDisplaySize","isGradeListCentered","milestoneProgressMap"],[["helper",["if"],[["get",["isSmall"]],"small","medium"],null],true,["get",["milestoneProgressMap"]]]]],false],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type"],["right","system"]],3],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","mastery-progression-details"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","mastery-experience-gained"],["flush-element"],["text","\\n"],["block",["if"],[["get",["willAnimate"]]],null,2,1],["text","      "],["open-element","lol-uikit-video",[]],["static-attr","class","points-gained-spark-small-video"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-spark-small.webm"],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["static-attr","preload",""],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n      "],["open-element","lol-uikit-video",[]],["static-attr","class","points-gained-spark-medium-video"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-spark-medium.webm"],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["static-attr","preload",""],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","mastery-experience-meta-info"],["flush-element"],["append",["unknown",["masteryLevelText"]],false],["close-element"],["text","\\n"],["block",["if"],[["get",["hasSeasonMilestoneLeveledUp"]]],null,0],["text","  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","mastery-mark-gained-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","mastery-mark-gained-icon"],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","mastery-mark-gained-txt"],["flush-element"],["append",["unknown",["tra","postgame_lcm_mark_earned"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["unknown",["pointsGainedText"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["unknown",["animatedPointsText"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["milestone-tooltip"],null,[["masteryRewardData","milestoneProgressMap","seasonMilestone","customRewards","championCountByMilestone"],[["get",["milestoneRewardsData"]],["get",["milestoneProgressMap"]],["get",["tooltipSeasonMilestone"]],["get",["customRewards"]],["get",["championCountByMilestone"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["mastery-tooltip"],null,[["championMasteryUpdateNotification","customRewards"],[["get",["championMasteryUpdateNotification"]],["get",["customRewards"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["dynamic-attr","class",["concat",["mastery-progression-mark-icon ",["helper",["if"],[["get",["mark","isComplete"]],"complete"],null]]]],["flush-element"],["close-element"],["text","\\n"]],"locals":["mark"]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","mastery-levelup-text-container"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","postgame_lcm_mastery_level_up"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "ZUIDZGoa",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\ranked-progression.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","ranked-progression-ranked-emblem-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ranked-progression-ranked-emblem-sizer"],["flush-element"],["text","\\n    "],["open-element","lol-regalia-emblem-element",[]],["dynamic-attr","ranked-tier",["unknown",["tier"]],null],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","ranked-progression-details"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ranked-progression-update-result-container"],["flush-element"],["text","\\n    "],["append",["helper",["rating-change"],null,[["ratingDelta","lpChangeClassName","willAnimate","isWin","isBeingPromoted","isBeingDemoted","isInMiniseries","isLossPrevented","getLocForRatingChange"],[["get",["leaguePointsDelta"]],["get",["lpChangeClassName"]],["get",["willAnimate"]],["get",["isWin"]],["get",["isBeingPromoted"]],["get",["isBeingDemoted"]],["get",["isInMiniseries"]],["get",["isLossPrevented"]],["get",["getLocForLpChange"]]]]],false],["text","\\n    "],["open-element","lol-uikit-video",[]],["static-attr","class","points-gained-spark-video"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-spark-large.webm"],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","ranked-progression-update-result-status-text"],["flush-element"],["append",["unknown",["updateResultStatusText"]],false],["close-element"],["text","\\n"],["block",["if"],[["get",["isInMiniseries"]]],null,1,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","ranked-progression-total-lp-container"],["flush-element"],["append",["unknown",["currentLpLoc"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["miniseries-progress"],null,[["miniseriesProgress"],[["get",["miniseriesProgress"]]]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "VZBWhkg2",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\rating-change.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["if"],[["get",["shouldShowAnimatedRatingDeltaString"]]],null,3,2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","notification"],["static-attr","class","lp-change-class-name"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["tooltipDescription"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["type","tooltipPosition","offsetY"],["system","top",-30]],0]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","rating-change-container"],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","rating-change-class-name"],["dynamic-attr","src",["unknown",["lpChangeIcon"]],null],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["showRatingChangeTooltip"]]],null,1],["text","    "],["open-element","div",[]],["static-attr","class","rating-change-loc-container"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-resizing-text-field",[]],["static-attr","class","rating-change-loc"],["static-attr","data-max-width","110"],["flush-element"],["append",["unknown",["updateResultLoc"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["append",["unknown",["animatedPointsText"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "CPwVFY8u",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\miniseries-progress.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["each"],[["get",["miniseriesResultArray"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","img",[]],["static-attr","class","miniseries-progress-result-icon"],["dynamic-attr","src",["concat",["/fe/lol-postgame/miniseries-progress-",["get",["miniseriesResult"]],".png"]]],["flush-element"],["close-element"],["text","\\n"]],"locals":["miniseriesResult"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "mC3pvp7O",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\challenge-update-container.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["render-telemetry-sender"],null,[["renderEventName","shouldSendTelemetry"],[["get",["renderEventName"]],["get",["shouldSendTelemetry"]]]],26]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","loading-state"],["flush-element"],["text","\\n      "],["append",["unknown",["hextech-loading-animation"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","challenge-update-warning"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-static-assets/images/red-info-icon.svg"],["flush-element"],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","challenge-update-warning-title"],["flush-element"],["append",["unknown",["tra","challenge_cards_revoked_title"]],false],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","challenge-update-warning-msg"],["flush-element"],["append",["unknown",["tra","challenge_cards_revoked_msg"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "]],"locals":[]},{"statements":[["block",["if"],[["get",["isLeaver"]]],null,1]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","challenge-update-warning"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-static-assets/images/yellow-info-icon.svg"],["flush-element"],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","challenge-update-warning-title"],["flush-element"],["append",["unknown",["tra","challenge_cards_remake_title"]],false],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","challenge-update-warning-msg"],["flush-element"],["append",["unknown",["tra","challenge_cards_remake_msg"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isRemake"]]],null,3,2]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","challenge-update-warning"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-static-assets/images/yellow-info-icon.svg"],["flush-element"],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","challenge-update-warning-msg"],["flush-element"],["append",["unknown",["tra","challenge_cards_no_progress_in_queue"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isNotChallengesProgressQueue"]]],null,5,4]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","challenge-update-warning"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-static-assets/images/yellow-info-icon.svg"],["flush-element"],["close-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","challenge-update-warning-msg"],["flush-element"],["append",["unknown",["tra","challenge_cards_temporarily_disabled"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","lol-uikit-video",[]],["dynamic-attr","class",["concat",["anim-card-intro eternals ",["unknown",["card","category"]]]]],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-eternals-card-intro.webm"],["flush-element"],["close-element"],["text","\\n              "]],"locals":[]},{"statements":[["block",["if"],[["get",["card","statstoneName"]]],null,8]],"locals":[]},{"statements":[["text","                "],["open-element","lol-uikit-video",[]],["dynamic-attr","class",["concat",["anim-card-intro challenges ",["unknown",["card","currentLevel"]]]]],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-challenges-card-intro.webm"],["flush-element"],["close-element"],["text","\\n                "],["open-element","lol-uikit-lottie",[]],["static-attr","class","lottie-card-sheen"],["static-attr","src","/fe/lol-static-assets/lottie/postgame/postgame-challenges-card-sheen.json"],["static-attr","autoplay","false"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                  "],["append",["helper",["challenge-card"],null,[["isEmpty"],[true]]],false],["text","\\n                "]],"locals":[]},{"statements":[["text","                  "],["append",["helper",["eternals-item"],null,[["eternal","animationsEnabled","willAnimate","animateStartDelay"],[["get",["card"]],["get",["animationsEnabled"]],["get",["willAnimate"]],["get",["card","animateStartDelay"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["card","statstoneName"]]],null,12,11]],"locals":[]},{"statements":[["text","                  "],["append",["helper",["challenge-item"],null,[["challengeData","isEoGUpdate","animationsEnabled","willAnimate","animateStartDelay"],[["get",["card"]],true,["get",["animationsEnabled"]],["get",["willAnimate"]],["get",["card","animateStartDelay"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["card","currentLevel"]]],null,14,13]],"locals":[]},{"statements":[["text","                "],["append",["helper",["challenge-card"],null,[["isEmpty"],[true]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","lol-uikit-lottie",[]],["static-attr","class","lottie-card-outline"],["static-attr","src","/fe/lol-static-assets/lottie/postgame/postgame-eternals-card-intro.json"],["static-attr","autoplay","false"],["flush-element"],["close-element"],["text","\\n              "]],"locals":[]},{"statements":[["block",["if"],[["get",["card","statstoneName"]]],null,17]],"locals":[]},{"statements":[["text","                "],["open-element","lol-uikit-lottie",[]],["static-attr","class","lottie-card-outline"],["static-attr","src","/fe/lol-static-assets/lottie/postgame/postgame-challenges-card-intro.json"],["static-attr","autoplay","false"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","container-item"],["dynamic-attr","anim-data-challenge-level",["unknown",["card","currentLevel"]],null],["dynamic-attr","anim-data-is-levelup",["unknown",["card","isLevelUp"]],null],["dynamic-attr","anim-data-is-milestone",["unknown",["card","isMilestone"]],null],["dynamic-attr","anim-data-is-empty",["unknown",["card","isEmpty"]],null],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","container-anim-contents"],["flush-element"],["text","\\n"],["block",["if"],[["get",["card","currentLevel"]]],null,19,18],["text","            "],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","container-item-contents"],["flush-element"],["text","\\n"],["block",["if"],[["get",["hasWarning"]]],null,16,15],["text","            "],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","container-anim-contents"],["flush-element"],["text","\\n"],["block",["if"],[["get",["card","currentLevel"]]],null,10,9],["text","            "],["close-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":["card"]},{"statements":[["text","              "],["append",["helper",["eternals-updates-tooltip"],null,[["eternalsUpdates"],[["get",["groupedEternals"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],21]],"locals":[]},{"statements":[["text","              "],["append",["helper",["challenge-updates-tooltip"],null,[["challengeUpdates"],[["get",["groupedChallenges"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],23]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","challenge-progression-top"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","postgame_progression_pills_label"]],false],["text","\\n        "],["open-element","div",[]],["dynamic-attr","class",["concat",["challenge-progression-pill ",["helper",["if"],[["get",["hasNoChallengeUpdates"]],"disabled"],null]]]],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","challenges-progressed"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"openChallengesModal"],null],null],["flush-element"],["text","\\n            "],["open-element","img",[]],["static-attr","class","challenges-progressed-logo"],["static-attr","src","/fe/lol-postgame/scoreboard-challenge-crystal-icon.svg"],["flush-element"],["close-element"],["text","\\n            "],["append",["unknown",["challengeUpdatesCount"]],false],["text","\\n          "],["close-element"],["text","\\n"],["block",["unless"],[["get",["hasNoChallengeUpdates"]]],null,24],["text","        "],["close-element"],["text","\\n        "],["open-element","div",[]],["dynamic-attr","class",["concat",["challenge-progression-pill ",["helper",["if"],[["get",["hasNoEternalsUpdates"]],"disabled"],null]]]],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","eternals-progressed"],["dynamic-attr","onClick",["helper",["action"],[["get",[null]],"openEternalsModal"],null],null],["flush-element"],["text","\\n            "],["open-element","img",[]],["static-attr","class","eternals-progressed-logo"],["static-attr","src","/fe/lol-postgame/eternals-icon.svg"],["flush-element"],["close-element"],["text","\\n            "],["append",["unknown",["eternalsUpdatesCount"]],false],["text","\\n          "],["close-element"],["text","\\n"],["block",["unless"],[["get",["hasNoEternalsUpdates"]]],null,22],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["challenge-container ",["helper",["if"],[["get",["isAnimationQueued"]],"hidden"],null]]]],["flush-element"],["text","\\n"],["block",["unless"],[["get",["hasWarning"]]],null,25],["text","    "],["open-element","div",[]],["static-attr","class","challenge-update-container"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","container-items-page"],["flush-element"],["text","\\n"],["block",["each"],[["get",["cards"]]],null,20],["text","      "],["close-element"],["text","\\n"],["block",["if"],[["get",["isPostgameChallengesDisabled"]]],null,7,6],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["isAnimationQueued"]]],null,0]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "xoIanlna",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\challenge-updates-tooltip.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","challenge-updates-tooltip-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","challenge-updates-tooltip-header"],["flush-element"],["text","\\n    "],["append",["unknown",["tra","postgame_challenges_tooltip_heading"]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","challenge-updates-tooltip-content"],["flush-element"],["text","\\n"],["block",["if"],[["get",["upgradedChallenges"]]],null,1],["block",["if"],[["get",["progressedChallenges"]]],null,0],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","challenge-updates-tooltip-footer"],["flush-element"],["append",["unknown",["tra","postgame_progression_tooltip_footer"]],false],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","challenge-update-text"],["flush-element"],["text","\\n        "],["open-element","span",[]],["flush-element"],["text","\\n          "],["open-element","b",[]],["flush-element"],["append",["unknown",["progressedChallenges","count"]],false],["close-element"],["text","\\n          "],["append",["unknown",["tra","postgame_challenges_tooltip_progressed"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","challenge-update-icon"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-postgame/icon-progressed.svg"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","challenge-update-text"],["flush-element"],["text","\\n        "],["open-element","span",[]],["flush-element"],["text","\\n          "],["open-element","b",[]],["flush-element"],["append",["unknown",["upgradedChallenges","count"]],false],["close-element"],["text","\\n          "],["append",["unknown",["tra","postgame_challenges_tooltip_upgraded"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","challenge-update-icon"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-postgame/icon-crystal.svg"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "zgRY2kdf",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\eternals-updates-tooltip.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","eternals-updates-tooltip-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","eternals-updates-tooltip-header"],["flush-element"],["text","\\n    "],["append",["unknown",["tra","postgame_eternals_tooltip_heading"]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","eternals-updates-tooltip-content"],["flush-element"],["text","\\n"],["block",["if"],[["get",["newPersonalBestEternals"]]],null,2],["block",["if"],[["get",["newMilestoneEternals"]]],null,1],["block",["if"],[["get",["progressedEternals"]]],null,0],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","eternals-updates-tooltip-footer"],["flush-element"],["append",["unknown",["tra","postgame_progression_tooltip_footer"]],false],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","eternals-update-text"],["flush-element"],["text","\\n        "],["open-element","span",[]],["flush-element"],["text","\\n          "],["open-element","b",[]],["flush-element"],["append",["unknown",["progressedEternals","count"]],false],["close-element"],["text","\\n          "],["append",["unknown",["tra","postgame_eternals_tooltip_progressed"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","eternals-update-icon"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-postgame/icon-progressed.svg"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","eternals-update-text"],["flush-element"],["text","\\n        "],["open-element","span",[]],["flush-element"],["text","\\n          "],["open-element","b",[]],["flush-element"],["append",["unknown",["newMilestoneEternals","count"]],false],["close-element"],["text","\\n          "],["append",["unknown",["newMilestoneText"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","eternals-update-icon"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-postgame/icon-milestone.svg"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","eternals-update-text"],["flush-element"],["text","\\n        "],["open-element","span",[]],["flush-element"],["text","\\n          "],["open-element","b",[]],["flush-element"],["append",["unknown",["newPersonalBestEternals","count"]],false],["close-element"],["text","\\n          "],["append",["unknown",["tra","postgame_eternals_tooltip_new_personal_best"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","eternals-update-icon"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","src","/fe/lol-postgame/icon-target.svg"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "HuKLeUvP",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\postgame-party-status-v2.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-party-status-v2-display"],["dynamic-attr","showHover",["concat",[["unknown",["showPartyStatusTooltipOnHover"]]]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["showComponent"]]],null,3],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","              "],["open-element","div",[]],["static-attr","class","tooltip-row-container"],["flush-element"],["text","\\n                "],["open-element","div",[]],["flush-element"],["text","\\n                  "],["open-element","img",[]],["static-attr","class","icon"],["dynamic-attr","src",["concat",[["unknown",["summoner","profileIconPath"]]]]],["dynamic-attr","player-status",["concat",[["unknown",["summoner","partyStatus"]]]]],["flush-element"],["close-element"],["text","\\n                  "],["open-element","div",[]],["static-attr","class","ring"],["dynamic-attr","player-status",["concat",[["unknown",["summoner","partyStatus"]]]]],["flush-element"],["close-element"],["text","\\n                "],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","postgame-party-status-v2-tooltip-name"],["dynamic-attr","player-status",["concat",[["unknown",["summoner","partyStatus"]]]]],["flush-element"],["text","\\n"],["text","                  "],["append",["unknown",["summoner","displayName"]],false],["text","\\n                "],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","tooltip-status-icon-container"],["flush-element"],["text","\\n                  "],["open-element","div",[]],["static-attr","class","tooltip-status-icon-ready-or-left"],["dynamic-attr","player-status",["concat",[["unknown",["summoner","partyStatus"]]]]],["flush-element"],["close-element"],["text","\\n                  "],["open-element","div",[]],["static-attr","class","dot-container"],["dynamic-attr","player-status",["concat",[["unknown",["summoner","partyStatus"]]]]],["flush-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","dot"],["flush-element"],["close-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","dot"],["flush-element"],["close-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","dot"],["flush-element"],["close-element"],["text","\\n                  "],["close-element"],["text","\\n                "],["close-element"],["text","\\n              "],["close-element"],["text","\\n"]],"locals":["summoner"]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-party-status-v2-mouseover-header"],["flush-element"],["text","\\n            "],["append",["unknown",["tra","postgame_party_status_players_header"]],false],["text","\\n          "],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-party-status-v2-tooltip"],["flush-element"],["text","\\n"],["block",["each"],[["get",["partyStatusToolTip"]]],null,0],["text","          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],1]],"locals":[]},{"statements":[["block",["if"],[["get",["showPartyStatusTooltipOnHover"]]],null,2],["text","    "],["open-element","div",[]],["static-attr","class","postgame-party-status-v2-icon"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-party-status-v2-counts"],["flush-element"],["append",["unknown",["numPlayersReady"]],false],["text","/"],["append",["unknown",["partySize"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "SkCfGzev",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\progression-modal.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","progression-modal-root-component"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","backdrop-click"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"closeModal"],null],null],["flush-element"],["close-element"],["text","\\n  "],["open-element","lol-uikit-dialog-frame",[]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","progression-modal-container"],["flush-element"],["text","\\n      "],["open-element","div",[]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"closeModal"],null],null],["static-attr","class","update-icon-close-btn"],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["showEternalsData"]]],null,9,8],["text","      "],["open-element","div",[]],["static-attr","class","progresion-modal-content"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-scrollable",[]],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showEternalsData"]]],null,7,3],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","                  "],["open-element","div",[]],["static-attr","class","progression-modal-challenge-token-container"],["dynamic-attr","id",["concat",["token-id-",["unknown",["challenge","id"]]]]],["flush-element"],["text","\\n                    "],["append",["helper",["identity-customizer-token"],null,[["challengeData","isTooltipEnabled","isShowIdentityPoints","isSelectable"],[["get",["challenge"]],true,true,false]]],false],["text","\\n                  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                  "],["open-element","div",[]],["static-attr","class","progression-modal-content-header"],["flush-element"],["append",["unknown",["challenge","groupName"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["challenge","isHeader"]]],null,1,0]],"locals":["challenge"]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","progression-modal-content-grid"],["flush-element"],["text","\\n"],["block",["each"],[["get",["groupedChallenges"]]],null,2],["text","            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                  "],["append",["helper",["eternals-token"],null,[["eternal","index"],[["get",["eternal"]],["get",["index"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","                  "],["open-element","div",[]],["static-attr","class","progression-modal-content-header"],["flush-element"],["append",["unknown",["eternal","groupName"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["eternal","isHeader"]]],null,5,4]],"locals":["eternal","index"]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","progression-modal-content-grid"],["flush-element"],["text","\\n"],["block",["each"],[["get",["groupedEternals"]]],null,6],["text","            "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","progression-modal-header"],["flush-element"],["append",["unknown",["tra","postgame_challenges_modal_heading"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","progression-modal-header"],["flush-element"],["append",["unknown",["tra","postgame_eternals_modal_heading"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "hDE0EkxP",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\cherry-scoreboard-header.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-header-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-subteam-placement"],["flush-element"],["append",["unknown",["teamPlacementLoc"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-separator-icon"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-team-icon"],["dynamic-attr","style",["concat",["background-image: url(",["unknown",["teamIcon"]],");"]]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-team-name"],["flush-element"],["append",["unknown",["teamNameLoc"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-separator-icon"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-stat-container"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],3],["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon small kda"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-stat-label"],["flush-element"],["append",["unknown",["kdaLoc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-separator-icon"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-stat-container"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],2],["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon small gold"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-stat-label"],["flush-element"],["append",["unknown",["teamGoldLoc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-header-spacer"],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["showScoreboardColumnIcons"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_INDIVIDUAL_KDA"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","scoreboard-column-icons-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon-spacer"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon kda"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],0],["text","    "],["close-element"],["text","\\n    "],["append",["helper",["scoreboard-stat-switcher"],null,[["options","selectedStat","ordinal","selectStat"],[["get",["statSwitcher1Options"]],["get",["statSwitcherStatName1"]],1,"selectStat"]]],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_TEAM_GOLD_EARNED"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_KILL_DEATH_ASSIST"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "BRgevAWr",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\scoreboard-header.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-header-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-team-name"],["flush-element"],["append",["unknown",["teamNameLoc"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-separator-icon"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-stat-container"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],4],["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon small kda"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-stat-label"],["flush-element"],["append",["unknown",["kdaLoc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-separator-icon"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-header-stat-container"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],3],["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon small gold"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-stat-label"],["flush-element"],["append",["unknown",["teamGoldLoc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-header-spacer"],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["showScoreboardColumnIcons"]]],null,2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","postgame_scoreboard_most_progressed_challenge_column_tooltip"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_INDIVIDUAL_KDA"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","scoreboard-column-icons-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon-spacer"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon kda"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],1],["text","    "],["close-element"],["text","\\n    "],["append",["helper",["scoreboard-stat-switcher"],null,[["options","selectedStat","ordinal","selectStat"],[["get",["statSwitcher1Options"]],["get",["statSwitcherStatName1"]],1,"selectStat"]]],false],["text","\\n    "],["append",["helper",["scoreboard-stat-switcher"],null,[["options","selectedStat","ordinal","selectStat"],[["get",["statSwitcher2Options"]],["get",["statSwitcherStatName2"]],2,"selectStat"]]],false],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-header-challenge-icon-container"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-header-icon challenge-crystal"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_TEAM_GOLD_EARNED"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_KILL_DEATH_ASSIST"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "adJEb9Ok",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\scoreboard-honor-flair.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["unless"],[["get",["isBot"]]],null,3]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-large"],["flush-element"],["text","\\n        "],["open-element","p",[]],["flush-element"],["append",["unknown",["tooltipText"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","img",[]],["static-attr","class","honor-flair-icon-static"],["dynamic-attr","src",["concat",[["unknown",["teamChoiceIconPath"]]]]],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","img",[]],["dynamic-attr","class",["concat",["honor-flair-icon ",["helper",["if"],[["get",["hasCelebrated"]],"visible"],null]]]],["dynamic-attr","src",["concat",[["unknown",["teamChoiceIconPath"]]]]],["flush-element"],["close-element"],["text","\\n    "],["open-element","uikit-video",[]],["static-attr","class","honor-flair-video"],["dynamic-attr","src",["concat",[["unknown",["teamChoiceMograph"]]]]],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["willAnimate"]]],null,2,1],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["honor-flair-tooltip-container ",["helper",["unless"],[["get",["hasCelebrated"]],"hidden"],null]]]],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","right"]],0],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "p+Kjyb/b",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\scoreboard-root.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["if"],[["get",["isCherry"]]],null,12,3]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["open-element","video",[]],["dynamic-attr","class",["concat",["scoreboard-team-intro-animation ",["helper",["unless"],[["get",["team","isPlayerTeam"]],"scoreboard-team-intro-animation-enemy"],null]]]],["static-attr","src","/fe/lol-postgame/EOG_Scoreboard_Team_Color.webm"],["static-attr","type","video/webm"],["static-attr","autoplay",""],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","scoreboard-row-separator top"],["flush-element"],["close-element"],["text","\\n            "],["append",["helper",["scoreboard-row"],null,[["player","team","showKeystone","statSwitcherStatName1","statSwitcherStatName2","gameLengthSeconds","highestStatValueByStatMap","gameId","hasScoreboardAnimationPlayed","hasCelebratedHonor","animationsEnabled","queueType","updateHonorCelebrationAnimation","showRoleBoundItem"],[["get",["player"]],["get",["team"]],["get",["showKeystone"]],["get",["statSwitcherStatName1"]],["get",["statSwitcherStatName2"]],["get",["eogStats","gameLength"]],["get",["highestStatValueByStatMap"]],["get",["eogStats","gameId"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["animationsEnabled"]],["get",["eogStats","queueType"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null],["get",["anyRoleBoundItemPresent"]]]]],false],["text","\\n"]],"locals":["player"]},{"statements":[["text","      "],["append",["helper",["scoreboard-header"],null,[["team","index","setSelectedStat","statSwitcherStatName1","statSwitcher1Options","statSwitcherStatName2","statSwitcher2Options","locale"],[["get",["team"]],["get",["index"]],"setSelectedStat",["get",["statSwitcherStatName1"]],["get",["statSwitcher1Options"]],["get",["statSwitcherStatName2"]],["get",["statSwitcher2Options"]],["get",["postgame","locale"]]]]],false],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-team-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","scoreboard-team"],["flush-element"],["text","\\n"],["block",["each"],[["get",["team","players"]]],null,1],["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-separator bottom"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n"],["block",["if"],[["get",["showTeamIntroAnimation"]]],null,0],["text","      "],["close-element"],["text","\\n"]],"locals":["team","index"]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","scoreboard-root-content-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["postgame","eogStatsBlock","teams"]]],null,2],["text","  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","video",[]],["dynamic-attr","class",["concat",["scoreboard-team-intro-animation\\n                ",["helper",["unless"],[["get",["team","isPlayerTeam"]],"scoreboard-team-intro-animation-enemy"],null]]]],["static-attr","src","/fe/lol-postgame/EOG_Scoreboard_Team_Color.webm"],["static-attr","type","video/webm"],["static-attr","autoplay",""],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","              "],["open-element","div",[]],["static-attr","class","scoreboard-row-separator top"],["flush-element"],["close-element"],["text","\\n              "],["append",["helper",["cherry-scoreboard-row"],null,[["player","team","showKeystone","statSwitcherStatName1","gameLengthSeconds","highestStatValueByStatMap","gameId","hasScoreboardAnimationPlayed","hasCelebratedHonor","animationsEnabled","updateHonorCelebrationAnimation"],[["get",["player"]],["get",["team"]],["get",["showKeystone"]],["get",["statSwitcherStatName1"]],["get",["eogStats","gameLength"]],["get",["highestStatValueByStatMap"]],["get",["eogStats","gameId"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["animationsEnabled"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null]]]],false],["text","\\n"]],"locals":["player"]},{"statements":[["text","        "],["append",["helper",["cherry-scoreboard-header"],null,[["team","index","setSelectedStat","statSwitcherStatName1","statSwitcher1Options","locale"],[["get",["team"]],["get",["index"]],"setSelectedStat",["get",["statSwitcherStatName1"]],["get",["statSwitcher1Options"]],["get",["postgame","locale"]]]]],false],["text","\\n        "],["open-element","div",[]],["static-attr","class","scoreboard-team-container"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","scoreboard-team"],["flush-element"],["text","\\n"],["block",["each"],[["get",["team","players"]]],null,5],["text","            "],["open-element","div",[]],["static-attr","class","scoreboard-row-separator bottom"],["flush-element"],["close-element"],["text","\\n          "],["close-element"],["text","\\n"],["block",["if"],[["get",["showTeamIntroAnimation"]]],null,4],["text","        "],["close-element"],["text","\\n"]],"locals":["team","index"]},{"statements":[["block",["each"],[["get",["postgame","cherryTeams"]]],null,6]],"locals":[]},{"statements":[["text","            "],["open-element","video",[]],["dynamic-attr","class",["concat",["scoreboard-team-intro-animation\\n                ",["helper",["unless"],[["get",["team","isPlayerTeam"]],"scoreboard-team-intro-animation-enemy"],null]]]],["static-attr","src","/fe/lol-postgame/EOG_Scoreboard_Team_Color.webm"],["static-attr","type","video/webm"],["static-attr","autoplay",""],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","              "],["open-element","div",[]],["static-attr","class","scoreboard-row-separator top"],["flush-element"],["close-element"],["text","\\n              "],["append",["helper",["cherry-scoreboard-row"],null,[["player","team","showKeystone","statSwitcherStatName1","gameLengthSeconds","highestStatValueByStatMap","gameId","hasScoreboardAnimationPlayed","hasCelebratedHonor","animationsEnabled","updateHonorCelebrationAnimation"],[["get",["player"]],["get",["team"]],["get",["showKeystone"]],["get",["statSwitcherStatName1"]],["get",["eogStats","gameLength"]],["get",["highestStatValueByStatMap"]],["get",["eogStats","gameId"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["animationsEnabled"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null]]]],false],["text","\\n"]],"locals":["player"]},{"statements":[["text","        "],["append",["helper",["cherry-scoreboard-header"],null,[["team","index","setSelectedStat","statSwitcherStatName1","statSwitcher1Options","locale"],[["get",["team"]],["get",["index"]],"setSelectedStat",["get",["statSwitcherStatName1"]],["get",["statSwitcher1Options"]],["get",["postgame","locale"]]]]],false],["text","\\n        "],["open-element","div",[]],["static-attr","class","scoreboard-team-container"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","scoreboard-team"],["flush-element"],["text","\\n"],["block",["each"],[["get",["team","players"]]],null,9],["text","            "],["open-element","div",[]],["static-attr","class","scoreboard-row-separator bottom"],["flush-element"],["close-element"],["text","\\n          "],["close-element"],["text","\\n"],["block",["if"],[["get",["showTeamIntroAnimation"]]],null,8],["text","        "],["close-element"],["text","\\n"]],"locals":["team","index"]},{"statements":[["block",["each"],[["get",["eogStats","teams"]]],null,10]],"locals":[]},{"statements":[["text","  "],["open-element","lol-uikit-scrollable",[]],["static-attr","class","cherry-scoreboard-root-content-container"],["static-attr","overflow-masks","enabled"],["flush-element"],["text","\\n"],["block",["if"],[["get",["postgame","shouldShowGameClientStats"]]],null,11,7],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "DjjfvDGR",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\cherry-scoreboard-row.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-row-content-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isLeaver"]]],null,13],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["scoreboard-row-color-bar ",["unknown",["playerColorBarClass"]]]]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-row-player-details-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-row-skin-background"],["dynamic-attr","style",["unknown",["skinSplashStyle"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-row-skin-overlay"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-row-skin-overlay secondary"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-row-details-content horizontal-flex-box"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-position-level-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["displayedPosition"]]],null,12],["text","        "],["open-element","div",[]],["static-attr","class","scoreboard-row-in-game-level centered-flex-box"],["flush-element"],["append",["unknown",["player","stats","LEVEL"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-spacer"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-name-and-champ-container vertical-flex-box"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","scoreboard-row-player-name"],["flush-element"],["text","\\n          "],["append",["helper",["player-name"],null,[["format","puuid","summonerName","gameName","tagLine"],["short",["get",["player","puuid"]],["get",["player","summonerName"]],["get",["gameName"]],["get",["tagLine"]]]]],false],["text","\\n        "],["close-element"],["text","\\n"],["block",["if"],[["get",["isLeaver"]]],null,10,9],["text","      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-actions-button-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,6],["text","      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","id","mute-indicator"],["static-attr","class","scoreboard-row-mute-indicator"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldShowPlayerHonorComponent"]]],null,5],["text","  "],["open-element","div",[]],["static-attr","class","scoreboard-row-pike"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-row-summoner-spells-container vertical-flex-box centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["player","botPlayer"]]],null,4,3],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-row-augments-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["each"],[["get",["displayedAugments"]]],null,2],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-row-items-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["each"],[["get",["player","items"]]],null,1],["text","  "],["close-element"],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","hasScoreboardAnimationPlayed","animationsEnabled"],["INDIVIDUAL_KDA",["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","highestStatValueByStatMap","locale","hasScoreboardAnimationPlayed","animationsEnabled"],[["get",["statSwitcherStatName1"]],["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["highestStatValueByStatMap"]],["get",["postgame","locale"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-row-hover-overlay"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,0],["text","  "],["open-element","lc-flyout",[]],["dynamic-attr","open",["unknown",["isPlayerActionsMenuOpen"]],null],["dynamic-attr","onHide",["helper",["action"],[["get",[null]],"hidePlayerActionsMenu"],null],null],["dynamic-attr","uiKitOptionOverrides",["unknown",["flyoutOptions"]],null],["flush-element"],["text","\\n    "],["open-element","lc-flyout-content",[]],["flush-element"],["text","\\n      "],["append",["helper",["scoreboard-row-actions-menu"],null,[["data","isItemSetsDisabled","isFriendRequestDisabled","isFriendingRestricted","isPlayerBlocked","isReportDisabled","isPlayerMuted","sendFriendRequest","inviteToParty","showReportDialog","confirmBlockPlayer","viewProfile","importItemSet","togglePlayerMute","isPlayerMuteToggleable"],[["get",["player"]],["get",["postgame","isItemSetsDisabled"]],["get",["isFriendRequestDisabled"]],["get",["isFriendingRestricted"]],["get",["isPlayerBlocked"]],["get",["isReportDisabled"]],["get",["showPlayerMute"]],"sendFriendRequest","inviteToParty","showReportDialog","confirmBlockPlayer","viewProfile","importItemSet","togglePlayerMute",["get",["isPlayerMuteToggleable"]]]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-row-player-controls-container"],["flush-element"],["text","\\n      "],["append",["helper",["postgame-scoreboard-player-buttons"],null,[["player","isFriendRequestDisabled","isFriendingRestricted","isReportDisabled","isPlayerTeam","isInviteDisabled","sendFriendRequest","showReportDialog","inviteToParty","togglePlayerMute","isPlayerMuted"],[["get",["player"]],["get",["isFriendRequestDisabled"]],["get",["isFriendingRestricted"]],["get",["isReportDisabled"]],["get",["team","isPlayerTeam"]],["get",["isInviteDisabled"]],"sendFriendRequest","showReportDialog","inviteToParty","togglePlayerMute",["get",["isPlayerMuted"]]]]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["postgame-scoreboard-player-item"],null,[["itemId"],[["get",["itemId"]]]]],false],["text","\\n"]],"locals":["itemId"]},{"statements":[["text","      "],["append",["helper",["postgame-scoreboard-player-augment"],null,[["augmentId"],[["get",["augmentId"]]]]],false],["text","\\n"]],"locals":["augmentId"]},{"statements":[["text","      "],["append",["helper",["scoreboard-spell"],null,[["spellId","isSmall"],[["get",["player","spell1Id"]],true]]],false],["text","\\n      "],["append",["helper",["scoreboard-spell"],null,[["spellId","isSmall"],[["get",["player","spell2Id"]],true]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","scoreboard-row-spell-icon-placeholder"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-spell-icon-placeholder"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["scoreboard-honor-flair"],null,[["isLocalPlayer","isPlayerTeam","isBot","summonerId","summonerName","gameName","tagLine","hasScoreboardAnimationPlayed","hasCelebrated","updateHonorCelebrationAnimation"],[["get",["player","isLocalPlayer"]],["get",["team","isPlayerTeam"]],["get",["player","botPlayer"]],["get",["player","summonerId"]],["get",["player","summonerName"]],["get",["gameName"]],["get",["tagLine"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-actions-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"showPlayerActionsMenu"],null],null],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-champ-name"],["flush-element"],["append",["unknown",["player","championName"]],false],["close-element"],["text","\\n        "]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-is-system-muted"],["flush-element"],["append",["unknown",["tra","postgame_system_muted_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isSystemMuted"]]],null,8,7]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-leaver-text"],["flush-element"],["append",["unknown",["tra","postgame_afk_penalty_applied_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","              "],["open-element","lol-uikit-content-block",[]],["static-attr","class","scoreboard-row-lane-position-tooltip"],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","scoreboard-row-lane-position-tooltip-header"],["flush-element"],["append",["unknown",["displayedPositionTranslatedText"]],false],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","scoreboard-row-lane-position-tooltip-description"],["flush-element"],["append",["unknown",["tra","postgame_scoreboard_lane_position_tooltip_description"]],false],["close-element"],["text","\\n              "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-position-icon-wrapper centered-flex-box"],["flush-element"],["text","\\n            "],["open-element","img",[]],["static-attr","class","scoreboard-row-position-icon"],["dynamic-attr","src",["concat",["/fe/lol-parties/icon-position-",["unknown",["displayedPosition"]],"-hover.png"]]],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["top"]],11],["text","          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","embellishment-icon-container"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","cancel-icon"],["static-attr","src","/fe/lol-postgame/icon-cancel.svg"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "uMNe+arv",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\scoreboard-climb-indicator-flair.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["unless"],[["get",["isBot"]]],null,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-large"],["flush-element"],["text","\\n        "],["open-element","p",[]],["static-attr","class","climb-indicator-flair-tooltip-text"],["flush-element"],["append",["helper",["sanitize"],[["get",["rankedAssetsService","assets","climbIndicatorTooltipLoc"]]],null],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","img",[]],["static-attr","class","climb-indicator-flair-icon-static"],["dynamic-attr","src",["concat",[["unknown",["rankedAssetsService","assets","climbIndicatorIconPath"]]]]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","climb-indicator-flair-tooltip-container"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","right"]],0],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "5ufMIpde",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\scoreboard-row.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-row-content-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isLeaver"]]],null,25],["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["scoreboard-row-color-bar ",["unknown",["playerColorBarClass"]]]]],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["scoreboard-row-player-details-container\\n      ",["helper",["if"],[["get",["showKeystone"]],"","scoreboard-row-player-details-container-no-perks"],null]]]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-row-skin-background"],["dynamic-attr","style",["unknown",["skinSplashStyle"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-row-skin-overlay"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-row-skin-overlay secondary"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","scoreboard-row-details-content horizontal-flex-box"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-position-level-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["displayedPosition"]]],null,24],["text","        "],["open-element","div",[]],["static-attr","class","scoreboard-row-in-game-level centered-flex-box"],["flush-element"],["append",["unknown",["player","stats","LEVEL"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-spacer"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-name-and-champ-container vertical-flex-box"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","scoreboard-row-player-name"],["flush-element"],["text","\\n"],["block",["if"],[["get",["player","botPlayer"]]],null,22,21],["text","        "],["close-element"],["text","\\n"],["block",["if"],[["get",["isLeaver"]]],null,20,19],["text","      "],["close-element"],["text","\\n      "],["open-element","div",[]],["dynamic-attr","class",["concat",["scoreboard-row-actions-button-container centered-flex-box ",["helper",["if"],[["get",["showAugments"]],"showing-augments",""],null]]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,14],["text","      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","id","mute-indicator"],["dynamic-attr","class",["concat",["scoreboard-row-mute-indicator ",["helper",["if"],[["get",["showAugments"]],"showing-augments",""],null]]]],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldShowPlayerHonorComponent"]]],null,13],["block",["if"],[["get",["shouldShowIndicator"]]],null,12],["text","  "],["open-element","div",[]],["static-attr","class","scoreboard-row-pike"],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["showKeystone"]]],null,11],["text","  "],["open-element","div",[]],["static-attr","class","scoreboard-row-summoner-spells-container vertical-flex-box centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["hideSummoners"]]],null,9,8],["text","  "],["close-element"],["text","\\n"],["block",["if"],[["get",["showAugments"]]],null,7],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-row-items-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["each"],[["get",["player","items"]]],null,5],["block",["if"],[["get",["showRoleBoundItem"]]],null,4],["text","  "],["close-element"],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","hasScoreboardAnimationPlayed","animationsEnabled"],["INDIVIDUAL_KDA",["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","highestStatValueByStatMap","locale","hasScoreboardAnimationPlayed","animationsEnabled"],[["get",["statSwitcherStatName1"]],["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["highestStatValueByStatMap"]],["get",["postgame","locale"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","highestStatValueByStatMap","locale","hasScoreboardAnimationPlayed","animationsEnabled"],[["get",["statSwitcherStatName2"]],["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["highestStatValueByStatMap"]],["get",["postgame","locale"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["open-element","div",[]],["static-attr","class","scoreboard-updated-challenge-component"],["flush-element"],["text","\\n"],["block",["if"],[["get",["topMostProgressedChallenge"]]],null,3,1],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-row-hover-overlay"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,0],["text","  "],["open-element","lc-flyout",[]],["dynamic-attr","open",["unknown",["isPlayerActionsMenuOpen"]],null],["dynamic-attr","onHide",["helper",["action"],[["get",[null]],"hidePlayerActionsMenu"],null],null],["dynamic-attr","uiKitOptionOverrides",["unknown",["flyoutOptions"]],null],["flush-element"],["text","\\n    "],["open-element","lc-flyout-content",[]],["flush-element"],["text","\\n      "],["append",["helper",["scoreboard-row-actions-menu"],null,[["data","isItemSetsDisabled","isFriendRequestDisabled","isFriendingRestricted","isPlayerBlocked","isReportDisabled","isPlayerMuted","sendFriendRequest","inviteToParty","showReportDialog","confirmBlockPlayer","viewProfile","importItemSet","togglePlayerMute","isPlayerMuteToggleable"],[["get",["player"]],["get",["postgame","isItemSetsDisabled"]],["get",["isFriendRequestDisabled"]],["get",["isFriendingRestricted"]],["get",["isPlayerBlocked"]],["get",["isReportDisabled"]],["get",["showPlayerMute"]],"sendFriendRequest","inviteToParty","showReportDialog","confirmBlockPlayer","viewProfile","importItemSet","togglePlayerMute",["get",["isPlayerMuteToggleable"]]]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["dynamic-attr","class",["concat",["scoreboard-row-player-controls-container ",["helper",["if"],[["get",["showAugments"]],"showing-augments",""],null]]]],["flush-element"],["text","\\n      "],["append",["helper",["postgame-scoreboard-player-buttons"],null,[["player","isFriendRequestDisabled","isFriendingRestricted","isReportDisabled","isPlayerTeam","isInviteDisabled","sendFriendRequest","showReportDialog","inviteToParty","togglePlayerMute","isPlayerMuted"],[["get",["player"]],["get",["isFriendRequestDisabled"]],["get",["isFriendingRestricted"]],["get",["isReportDisabled"]],["get",["team","isPlayerTeam"]],["get",["isInviteDisabled"]],"sendFriendRequest","showReportDialog","inviteToParty","togglePlayerMute",["get",["isPlayerMuted"]]]]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","img",[]],["static-attr","class","scoreboard-updated-challenge-icon"],["static-attr","src","/fe/lol-static-assets/images/challenges-shared/icon_background.png"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["challenge-item-tooltip"],null,[["puuid","challengeData","isLocalPlayer","isComparable","localPlayerChallengesData"],[["get",["puuid"]],["get",["topMostProgressedChallenge"]],["get",["player","isLocalPlayer"]],["get",["showChallengeTooltipComparison"]],["get",["localPlayerChallengesData"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","img",[]],["static-attr","class","scoreboard-updated-challenge-icon"],["dynamic-attr","src",["unknown",["updatedChallengeIcon"]],null],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type","pseudoPartSelector"],["right","system","challenge-item-tooltip"]],2]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","item-spacer"],["flush-element"],["close-element"],["text","\\n      "],["append",["helper",["postgame-scoreboard-player-item"],null,[["itemId"],[["get",["roleBoundItem"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["postgame-scoreboard-player-item"],null,[["itemId"],[["get",["itemId"]]]]],false],["text","\\n"]],"locals":["itemId"]},{"statements":[["text","        "],["append",["helper",["postgame-scoreboard-player-augment"],null,[["augmentId"],[["get",["augmentId"]]]]],false],["text","\\n"]],"locals":["augmentId"]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-row-augments-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["each"],[["get",["displayedAugments"]]],null,6],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["scoreboard-spell"],null,[["spellId","isSmall"],[["get",["player","spell1Id"]],true]]],false],["text","\\n      "],["append",["helper",["scoreboard-spell"],null,[["spellId","isSmall"],[["get",["player","spell2Id"]],true]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","scoreboard-row-spell-icon-placeholder"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-spell-icon-placeholder"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["append",["helper",["postgame-scoreboard-player-keystone-icon"],null,[["keystoneId","isSubStyle","circleIconHolder"],[["get",["player","stats","PERK_SUB_STYLE"]],true,true]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-row-keystone-container centered-flex-box"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","scoreboard-row-keystone-alignment-container"],["flush-element"],["text","\\n        "],["append",["helper",["postgame-scoreboard-player-keystone-icon"],null,[["keystoneId","circleIconHolder"],[["get",["player","stats","PERK0"]],true]]],false],["text","\\n"],["block",["if"],[["get",["player","stats","PERK_SUB_STYLE"]]],null,10],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["scoreboard-climb-indicator"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["scoreboard-honor-flair"],null,[["isLocalPlayer","isPlayerTeam","isBot","puuid","summonerName","gameName","tagLine","hasScoreboardAnimationPlayed","hasCelebrated","updateHonorCelebrationAnimation"],[["get",["player","isLocalPlayer"]],["get",["team","isPlayerTeam"]],["get",["player","botPlayer"]],["get",["player","puuid"]],["get",["player","summonerName"]],["get",["gameName"]],["get",["tagLine"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-actions-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"showPlayerActionsMenu"],null],null],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-champ-name"],["flush-element"],["append",["unknown",["player","championName"]],false],["close-element"],["text","\\n        "]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-is-system-muted"],["flush-element"],["append",["unknown",["tra","postgame_system_muted_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isSystemMuted"]]],null,16,15]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-leaver-text"],["flush-element"],["append",["unknown",["tra","postgame_severe_transgressor_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["wasSevereTransgressor"]]],null,18,17]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-leaver-text"],["flush-element"],["append",["unknown",["tra","postgame_afk_penalty_applied_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["helper",["player-name"],null,[["format","puuid","summonerName","gameName","tagLine"],["short",["get",["player","puuid"]],["get",["player","summonerName"]],["get",["gameName"]],["get",["tagLine"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["unknown",["player","summonerName"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","              "],["open-element","lol-uikit-content-block",[]],["static-attr","class","scoreboard-row-lane-position-tooltip"],["static-attr","type","tooltip-system"],["flush-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","scoreboard-row-lane-position-tooltip-header"],["flush-element"],["append",["unknown",["displayedPositionTranslatedText"]],false],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","scoreboard-row-lane-position-tooltip-description"],["flush-element"],["append",["unknown",["tra","postgame_scoreboard_lane_position_tooltip_description"]],false],["close-element"],["text","\\n              "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","scoreboard-row-position-icon-wrapper centered-flex-box"],["flush-element"],["text","\\n            "],["open-element","img",[]],["static-attr","class","scoreboard-row-position-icon"],["dynamic-attr","src",["concat",["/fe/lol-parties/icon-position-",["unknown",["displayedPosition"]],"-hover.png"]]],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition"],["top"]],23],["text","          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","embellishment-icon-container"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","cancel-icon"],["static-attr","src","/fe/lol-postgame/icon-cancel.svg"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "kCEGC+X+",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\scoreboard-row-actions-menu.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","player-actions-menu-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["actionOptions"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["dynamic-attr","class",["concat",["player-action-container ",["unknown",["actionItem","actionName"]]," ",["helper",["if"],[["get",["actionItem","disabled"]],"disabled"],null]]]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"handleButtonClick",["get",["actionItem"]],["get",["data"]]],null],null],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","player-action-icon"],["dynamic-attr","src",["unknown",["actionItem","iconPath"]],null],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","player-action-label"],["flush-element"],["append",["unknown",["actionItem","label"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["player-actions-divider index-",["get",["index"]]]]],["flush-element"],["close-element"],["text","\\n"]],"locals":["actionItem","index"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "GWiblQqy",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\scoreboard-row-stat-display.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],5],["open-element","div",[]],["static-attr","class","scoreboard-row-stat-sizer centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showHighestStatValueAchiever"]]],null,4],["text","  "],["open-element","div",[]],["static-attr","class","scoreboard-row-stat-line-primary"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showStatNumberAnimation"]]],null,3,2],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-row-stat-sizer centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isSecondaryDisplayLineGraph"]]],null,1,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-row-stat-line-secondary"],["flush-element"],["append",["unknown",["statLineSecondary"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-row-stat-graph-container"],["flush-element"],["text","\\n      "],["open-element","div",[]],["dynamic-attr","class",["concat",["scoreboard-row-stat-graph-fill\\n          ",["helper",["unless"],[["get",["showStatAnimations"]],"css-animate"],null],"\\n          ",["helper",["if"],[["get",["player","isLocalPlayer"]],"is-local-player"],null]]]],["dynamic-attr","style",["unknown",["graphFillStyle"]],null],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["statLinePrimary"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["animatedStatLinePrimary"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","scoreboard-row-stat-highest-achiever-icon"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n    "],["append",["unknown",["selectedStatLoc"]],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "me7AGqxw",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\scoreboard-stat-switcher.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-stat-switcher-arrow left"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"scroll",-1],null],null],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-stat-switcher-icon"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],0],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","scoreboard-stat-switcher-arrow right"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"scroll",1],null],null],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n      "],["append",["unknown",["selectedStatLoc"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "JM5u0y5H",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\animated-play-button.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-button"],["flush-element"],["text","\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["postgame-state ",["unknown",["currentState"]]]]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","img-container"],["flush-element"],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["currentImgPath"]]]]],["flush-element"],["close-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","lol-uikit-video-state-machine",[]],["static-attr","class","postgame-button-vsm"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-video-group",[]],["static-attr","class","postgame-button-video"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-video-state",[]],["static-attr","state","intro"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-video",[]],["static-attr","type","intro"],["dynamic-attr","src",["unknown",["videoSource","intro"]],null],["static-attr","preload",""],["flush-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-video-state",[]],["static-attr","state","idle"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-video",[]],["static-attr","type","idle"],["dynamic-attr","src",["unknown",["videoSource","idle"]],null],["flush-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-video-state",[]],["static-attr","state","active"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-video",[]],["static-attr","type","intro"],["dynamic-attr","src",["unknown",["videoSource","active"]],null],["flush-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-video-state",[]],["static-attr","state","hover"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-video",[]],["static-attr","type","idle"],["dynamic-attr","src",["unknown",["videoSource","hover"]],null],["flush-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","lol-uikit-video-state-machine",[]],["static-attr","class","postgame-return-button-vsm"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-video-group",[]],["static-attr","class","postgame-return-button-video"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-video-state",[]],["static-attr","state","pulse"],["static-attr","no-preserve-state",""],["flush-element"],["text","\\n        "],["open-element","lol-uikit-video",[]],["static-attr","type","outro"],["dynamic-attr","src",["unknown",["videoSource","pulse"]],null],["flush-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","lol-uikit-video-state",[]],["static-attr","state","all-returned"],["flush-element"],["text","\\n        "],["open-element","lol-uikit-video",[]],["static-attr","type","idle"],["dynamic-attr","src",["unknown",["videoSource","allReturned"]],null],["flush-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["button-text ",["unknown",["currentState"]]]]],["flush-element"],["append",["unknown",["buttonText"]],false],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "TybSh0iR",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\season-pass-progression.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["if"],[["get",["showFullLoadingState"]]],null,17,15]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","            "],["append",["unknown",["tra","season_pass_progression_battle_pass_tooltip_explanation"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["unknown",["tra","mayhem_season_pass_progression_battle_pass_tooltip_explanation"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["unknown",["tra","season_pass_progression_battle_pass_xp"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["unknown",["tra","mayhem_season_pass_progression_battle_pass_xp"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-tooltip"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-tooltip_title"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isMayhemSeasonPass"]]],null,3,2],["text","        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-tooltip_explanation"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isMayhemSeasonPass"]]],null,1,0],["text","        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-sign"],["flush-element"],["text","+"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-icon-text-container"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-icon"],["flush-element"],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-text"],["flush-element"],["text","\\n            "],["append",["unknown",["deltaBXP"]],false],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-level-up-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-level-up-text"],["flush-element"],["text","\\n          "],["append",["unknown",["tra","season_pass_progression_level_up"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-level-up-display-container"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-level-up-sign"],["flush-element"],["text","\\n            +\\n          "],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-level-up-icon-text-container"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-level-up-icon"],["flush-element"],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","season-pass-progression__xp-gained-bxp-text"],["flush-element"],["append",["unknown",["deltaBXP"]],false],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","season-pass-progression__unlocked-tooltip"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","season-pass-progression__tooltip-title"],["flush-element"],["text","\\n            "],["append",["unknown",["passLevelLoc"]],false],["text","\\n          "],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","season-pass-progression__tooltip-unlocked-xp"],["flush-element"],["text","\\n            "],["append",["unknown",["passXpLoc"]],false],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition","type"],["right","system"]],7]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","season-pass-progression__locked-tooltip"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","season-pass-progression__tooltip-locked-xp"],["flush-element"],["text","\\n            "],["append",["unknown",["passXpLoc"]],false],["text","\\n          "],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","season-pass-progression__tooltip-description"],["flush-element"],["text","\\n            "],["append",["unknown",["tra","season_pass_progression_locked_description"]],false],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["uikit-tooltip"],null,[["tooltipPosition","type"],["right","system"]],9]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","season-pass-progression__reward-locked-icon"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-radial-progress",[]],["static-attr","class","season-pass-progression__radial-progress"],["static-attr","type","custom"],["static-attr","start-angle","-135"],["static-attr","end-angle","-405"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","slot","bottom"],["static-attr","class","bottom season-pass-progression__radial radial-bottom"],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","slot","middle"],["static-attr","class","middle season-pass-progression__radial radial-middle"],["dynamic-attr","percent",["unknown",["previousProgressPercent"]],null],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","slot","middle"],["static-attr","class","middle season-pass-progression__radial radial-top"],["dynamic-attr","percent",["unknown",["deltaBXPPercent"]],null],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["dynamic-attr","class",["concat",["season-pass-progression__container onmouseenter=",["helper",["action"],[["get",[null]],"progressionRadialEntered"],null]]]],["flush-element"],["text","\\n"],["block",["unless"],[["get",["isMayhemSeasonPass"]]],null,12],["text","    "],["open-element","div",[]],["static-attr","class","season-pass-progression__reward-container"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","season-pass-progression__reward-icon"],["dynamic-attr","src",["unknown",["nextRewardIconPath"]],null],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","season-pass-progression__reward-hover-overlay"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","season-pass-progression__reward-hover-icon"],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["isLocked"]]],null,11],["text","      "],["open-element","div",[]],["static-attr","class","season-pass-progression__reward-icon-frame"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","season-pass-progression__reward-level-plate"],["flush-element"],["append",["unknown",["currentLevel"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["isLocked"]]],null,10,8],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","season-pass-progression_details-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isLevelUp"]]],null,6,5],["block",["uikit-tooltip"],null,[["tooltipPosition","type"],["right","system"]],4],["text","  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["append",["helper",["season-pass-error-state"],null,[["isSmall"],[["get",["isSmall"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isSeasonPassErrored"]]],null,14,13]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","season-pass-progression__skeleton-loading-text"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","season_pass_progression_skeleton_loading_text"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","season-pass-progression__skeleton-progression"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","season-pass-progression__skeleton-xp-gained"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],16]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "Uz/CQMCh",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\season-pass-error-state.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","season-pass-error-state__container"],["flush-element"],["text","\\n  "],["open-element","lol-uikit-radial-progress",[]],["static-attr","class","season-pass-error-state__radial-progress"],["static-attr","type","custom"],["static-attr","start-angle","-135"],["static-attr","end-angle","-405"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","slot","bottom"],["static-attr","class","bottom season-pass-error-state__radial radial-bottom"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","season-pass-error-state__reward-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","season-pass-error-state__reward-icon"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","season-pass-error-state__reward-icon-frame"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","season-pass-error-state__reward-level-plate"],["flush-element"],["text","-"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","season-pass-error-state__error-text-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","season-pass-error-state__error-text"],["flush-element"],["text","\\n      "],["append",["unknown",["tra","season_pass_progression_error_text"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "7h+rG5+j",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\shared\\\\scoreboard-spell.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","postgame-player-spell-icon-container"],["flush-element"],["text","\\n  "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["spellData","iconPath"]]]]],["static-attr","class","postgame-player-spell-icon"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["targetAnchorX","targetAnchorY","tooltipAnchorX","tooltipAnchorY","offsetX","offsetY","restrictArea"],["left","bottom","left","top",-18,5,"whole-window"]],0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","postgame-player-spell-icon-tooltip"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","postgame-player-spell-icon-tooltip-header"],["flush-element"],["text","\\n        "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["spellData","iconPath"]]]]],["static-attr","class","postgame-player-spell-icon-tooltip-icon"],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-player-spell-icon-tooltip-name"],["flush-element"],["append",["unknown",["spellData","name"]],false],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","postgame-player-spell-icon-tooltip-level"],["flush-element"],["append",["unknown",["tra","postgame_summoner_spell_level"]],false],["text","\\n            "],["append",["unknown",["spellData","summonerLevel"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","postgame-player-spell-icon-description"],["flush-element"],["append",["unknown",["spellData","description"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(38)) && n.__esModule ? n : {
                    default: n
                };
            s(226);
            var l = s(3);
            var i = a.Ember.Component.extend(o.default, {
                classNames: ["jade-level-progression-component"],
                classNameBindings: ["isLarge"],
                didUpdateAttrs() {
                    this._super(...arguments), this.get("willAnimate") && !this.get("didAnimate") && a.Ember.run.scheduleOnce("afterRender", this, this._playIntroAnimation)
                },
                willDestroyElement() {
                    this._super(...arguments);
                    const e = this.get("animationTimeline");
                    e && e.kill()
                },
                lottieBarFillPath: a.Ember.computed("leveledUp", (function() {
                    return this.get("leveledUp") ? "/fe/lol-static-assets/lottie/challenges/challenges-progress-bar-levelup.json" : "/fe/lol-static-assets/lottie/challenges/challenges-progress-bar.json"
                })),
                _playIntroAnimation() {
                    const e = this.get("tra"),
                        t = this.get("xpDelta"),
                        s = Boolean(this.get("isRanked")),
                        n = this.get("leveledUp"),
                        o = {
                            amount: 0
                        },
                        l = this.element.querySelector(".points-gained-spark-small-video"),
                        i = this.element.querySelector(".points-gained-spark-medium-video"),
                        r = this.element.querySelector(".lottie-radial-fill"),
                        m = new a.gsap.TimelineMax({
                            paused: !0,
                            onComplete: () => {
                                this.set("didAnimate", !0)
                            }
                        });
                    m.add(a.gsap.TweenLite.to(o, .25, {
                        amount: t,
                        onUpdate: () => {
                            this.set("animatedPointsText", e.formatString("career_postgame_progress_xp_gain_pts", {
                                xpEarned: Math.round(o.amount)
                            }))
                        },
                        onComplete: () => {
                            n && this.set("animatedPointsText", this.get("playerXpGainLoc"))
                        }
                    }), "start+=0.2"), r && m.add((() => {
                        r.play()
                    }), "start"), s || m.add((() => {
                        this.playSound("sfx-eog-ui-exp-burst.ogg")
                    }), "start+=0.2");
                    const c = n ? i : l;
                    m.add((() => {
                        c && c.play()
                    }), "start+=0.35"), this.set("animationTimeline", m), m.play()
                },
                currentXpTotal: a.Ember.computed.alias("summonersJourneyService.xpTotal"),
                xpRequirementPerLevel: a.Ember.computed.alias("summonersJourneyService.xpForNextLevel"),
                currentLevel: a.Ember.computed.alias("summonersJourneyService.currentLevel"),
                currentProgressTowardsNextLevel: a.Ember.computed.alias("summonersJourneyService.currentLevelXp"),
                isMaxLevel: a.Ember.computed.alias("summonersJourneyService.isMaxLevel"),
                wasAlreadyMaxLevel: a.Ember.computed("preGameJadeXp", (function() {
                    const e = this.get("preGameJadeXp"),
                        t = this.get("summonersJourneyService");
                    return !(!e || !t) && 30 === t.levelForXp(e)
                })),
                xpDelta: a.Ember.computed("currentXpTotal", "preGameJadeXp", (function() {
                    return this.get("currentXpTotal") - this.get("preGameJadeXp")
                })),
                leveledUp: a.Ember.computed("xpDelta", "currentProgressTowardsNextLevel", "wasAlreadyMaxLevel", (function() {
                    return !this.get("wasAlreadyMaxLevel") && this.get("xpDelta") > this.get("currentProgressTowardsNextLevel")
                })),
                xpPercentageOld: a.Ember.computed("leveledUp", "xpRequirementPerLevel", "xpDelta", "currentProgressTowardsNextLevel", "wasAlreadyMaxLevel", (function() {
                    return this.get("leveledUp") ? 0 : this.get("wasAlreadyMaxLevel") ? 100 : 100 * (this.get("currentProgressTowardsNextLevel") - this.get("xpDelta")) / this.get("xpRequirementPerLevel")
                })),
                xpPercentageNew: a.Ember.computed("leveledUp", "xpRequirementPerLevel", "xpDelta", "currentProgressTowardsNextLevel", (function() {
                    const e = this.get("xpRequirementPerLevel");
                    return this.get("isMaxLevel") ? 100 : this.get("leveledUp") ? this.get("currentProgressTowardsNextLevel") / e * 100 : this.get("xpDelta") / e * 100
                })),
                radialProgressPercent: a.Ember.computed("xpPercentageNew", "xpPercentageOld", (function() {
                    return this.get("xpPercentageNew") + this.get("xpPercentageOld")
                })),
                lottieRadialNewPercent: a.Ember.computed("xpPercentageNew", (function() {
                    const e = this.get("xpPercentageNew") * l.LOTTIE_RADIAL_UNITS / 100;
                    return isNaN(e) ? 0 : e
                })),
                lottieRadialOldPercent: a.Ember.computed("xpPercentageOld", (function() {
                    const e = this.get("xpPercentageOld") * l.LOTTIE_RADIAL_UNITS / 100;
                    return isNaN(e) ? 0 : e
                })),
                playerXpGainLoc: a.Ember.computed("xpDelta", "leveledUp", (function() {
                    return this.get("leveledUp") ? this.get("tra.career_postgame_progress_xp_level_up") : this.get("tra").formatString("career_postgame_progress_xp_gain_pts", {
                        xpEarned: this.get("xpDelta")
                    })
                }))
            });
            t.default = i
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(141)) && n.__esModule ? n : {
                    default: n
                };
            s(228);
            var l = o.default.extend({
                classNames: ["jade-postgame-component"],
                init() {
                    this._super(...arguments), a.db.observe("/lol-ranked/v1/current-ranked-stats", this, this.handleCurrentRankedStats), a.db.observe("/lol-event-hub/v1/events", this, this.handleEventHubEvents)
                },
                handleCurrentRankedStats(e) {
                    this.set("currentRankedStats", e)
                },
                handleEventHubEvents(e) {
                    const t = e.filter((e => "kDemaciaPass" === e.eventInfo.eventType)),
                        s = new Date,
                        n = t.filter((({
                            eventInfo: e
                        }) => {
                            const t = e.startDate ? new Date(e.startDate) : null,
                                n = e.endDate ? new Date(e.endDate) : null;
                            return (!t || t <= s) && (!n || s <= n)
                        }));
                    n.sort(((e, t) => {
                        const s = e.eventInfo.startDate ? new Date(e.eventInfo.startDate) : new Date(0);
                        return (t.eventInfo.startDate ? new Date(t.eventInfo.startDate) : new Date(0)) - s
                    }));
                    const o = n.find((e => e.eventInfo.isPassPurchased)) || n[0];
                    o && a.db.observe(`/lol-event-hub/v1/events/${o.eventId}/objectives-banner`, this, this.handleActiveJadePass)
                },
                handleActiveJadePass(e) {
                    this.set("jadePassActive", e?.isPassPurchased);
                    const t = e?.token?.lolCurrencyId;
                    this.set("jadeLolCurrencyId", t), t && a.db.observe(`/lol-inventory/v1/wallet/${t}/notifications`, this, (e => this.set("jadeCurrencyNotifications", e)))
                },
                recentCurrencyNotifications: a.Ember.computed("postgame.eogStatsBlock.endOfGameTimestamp", "jadeCurrencyNotifications", (function() {
                    const e = this.get("postgame.eogStatsBlock.endOfGameTimestamp");
                    return (this.get("jadeCurrencyNotifications") || []).filter((t => t.receivedAtMs <= e + 45e3 && t.receivedAtMs >= e))
                })),
                recentCurrencyEarnedAmount: a.Ember.computed("recentCurrencyNotifications", (function() {
                    return (this.get("recentCurrencyNotifications") || []).reduce(((e, t) => e + t.amount), 0)
                })),
                willDestroyElement() {
                    this._super(...arguments), a.db.unobserve(this)
                },
                didInsertElement() {
                    this._super(...arguments), this.fetchPreGameJadeXp()
                },
                fetchPreGameJadeXp() {
                    const e = Math.floor(this.get("postgame.eogStatsBlock.endOfGameTimestamp") / 1e3),
                        t = this.get("postgame.eogStatsBlock.gameLength"),
                        s = e - t;
                    return e && t ? a.db.get(`/lol-event-hub/v1/events/0724e93d-6b74-449f-abef-8785262c3890/reward-track/counter?beforeEpoch=${s}`).then((e => {
                        this.set("preGameJadeXp", e || 0)
                    })).catch((() => {
                        this.set("preGameJadeXp", 0)
                    })) : (a.logger.warning("Unable to fetch pre game jade level xp. No EoG stats available."), Promise.reject("Unable to fetch pre game jade level xp. No EoG stats available."))
                }
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(148)) && n.__esModule ? n : {
                    default: n
                };
            s(230);
            var l = o.default.extend({
                classNames: ["jade-progression-screen-component"],
                summonersJourneyService: a.Ember.inject.service("summoners-journey"),
                jadeProgressionTrackConfig: a.Ember.computed.alias("summonersJourneyService.classicLevelProgressionConfig"),
                jadeProgressionTrackData: a.Ember.computed.alias("summonersJourneyService.classicLevelInstanceData"),
                showQueueAsRanked: a.Ember.computed("summonersJourneyService.eligibleForSummonersJourney", "leaguesNotification", (function() {
                    return this.get("summonersJourneyService.eligibleForSummonersJourney") && Boolean(this.get("leaguesNotification"))
                })),
                shouldShowJadeLevelProgression: a.Ember.computed("jadeProgressionTrackConfig", "jadeProgressionTrackData", "shouldShowSeasonPass", (function() {
                    const e = this.get("jadeProgressionTrackConfig") && this.get("jadeProgressionTrackData"),
                        t = this.get("shouldShowSeasonPass"),
                        s = this.get("showQueueAsRanked");
                    return e && !(t && s)
                })),
                isLevelProgressionLarge: a.Ember.computed("showQueueAsRanked", "shouldShowSeasonPass", (function() {
                    return !(this.get("showQueueAsRanked") || this.get("shouldShowSeasonPass"))
                })),
                isMasteryProgressionSmall: a.Ember.computed("showQueueAsRanked", "shouldShowSeasonPass", (function() {
                    return this.get("showQueueAsRanked") || this.get("shouldShowSeasonPass")
                })),
                shouldShowSeasonPass: a.Ember.computed.gt("recentCurrencyEarnedAmount", 0),
                isSeasonPassLarge: a.Ember.computed("showQueueAsRanked", (function() {
                    return !this.get("showQueueAsRanked")
                }))
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(155)) && n.__esModule ? n : {
                    default: n
                };
            s(232);
            var l = o.default.extend({
                classNames: ["jade-ranked-progression-component"],
                init() {
                    this._super(...arguments), this.set("boundLocForSpChange", this.getLocForSpChange.bind(this))
                },
                getSpLoc(e) {
                    return this.get("tra").formatString("lol_league_classic_sp", {
                        sp: e
                    })
                },
                currentLpLoc: a.Ember.computed("leaguePoints", (function() {
                    return a.leagueTierNames.getLpLoc(this.get("leaguePoints")) || ""
                })),
                getLocForSpChange: function(e) {
                    const t = this.getSpLoc(e);
                    return e < 0 ? t : `+${t}`
                },
                currentSpLoc: a.Ember.computed("leaguePoints", "leaguePointsDelta", "lpChangeClassName", (function() {
                    return this.getSpLoc(this.get("leaguePoints")) || ""
                }))
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = (n = s(167)) && n.__esModule ? n : {
                default: n
            };
            s(234);
            var o = a.default.extend({
                classNames: ["jade-scoreboard-screen-component"]
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = (n = s(165)) && n.__esModule ? n : {
                default: n
            };
            s(236);
            var o = a.default.extend({
                classNames: ["jade-scoreboard-header-component"]
            });
            t.default = o
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = s(1),
                o = (n = s(171)) && n.__esModule ? n : {
                    default: n
                };
            s(238);
            var l = o.default.extend({
                classNames: ["jade-scoreboard-row-component"],
                truncatedItems: a.Ember.computed("player.items", (function() {
                    return (this.get("player.items") || []).slice(0, 6)
                }))
            });
            t.default = l
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1);
            s(240);
            var a = n.Ember.Component.extend({
                classNames: ["jade-season-pass-progression-component"],
                classNameBindings: ["isLarge", "hasBonus"],
                tokensEarnedDisplay: n.Ember.computed("tokensEarned", (function() {
                    return this.get("tokensEarned") || 0
                }))
            });
            t.default = a
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(1),
                a = s(242);
            const o = "c3e84157-4b03-4887-b342-0fb8c9f78ac3",
                l = `/lol-progression/v1/groups/${o}/configuration`,
                i = `/lol-progression/v1/groups/${o}/instanceData`,
                r = 30,
                m = {
                    MASTERY: 3,
                    VOTING: 5,
                    SUMMONERS_JOURNEY: 10
                };
            var c = n.Ember.Service.extend({
                init() {
                    this._super(...arguments), (0, a.whenProgressionReady)(this, (() => {
                        n.db.observe(l, this, this.handleProgressionTrackConfig), n.db.observe(i, this, this.handleProgressionInstanceData)
                    }))
                },
                willDestroy() {
                    this._super(...arguments), (0, a.unobserveProgressionReady)(this), n.db.unobserve(l, this), n.db.unobserve(i, this)
                },
                handleProgressionTrackConfig(e) {
                    this.set("classicLevelProgressionConfig", e)
                },
                handleProgressionInstanceData(e) {
                    this.set("classicLevelInstanceData", e)
                },
                getUnlockLevels: () => m,
                xpTotal: n.Ember.computed("classicLevelInstanceData.counters.0.counterValue", (function() {
                    return this.get("classicLevelInstanceData.counters.0.counterValue") || 0
                })),
                milestoneThresholds: n.Ember.computed("classicLevelProgressionConfig", (function() {
                    return this._buildThresholds(this.get("classicLevelProgressionConfig"))
                })),
                _buildThresholds(e) {
                    if (!e) return [];
                    const t = (e.milestones || []).map((e => e && e.triggers && e.triggers[0] && e.triggers[0].triggerValue)).filter((e => "number" == typeof e)).sort(((e, t) => e - t)).slice(0, r),
                        s = e.repeat && e.repeat.repeatTriggers && e.repeat.repeatTriggers[0] && e.repeat.repeatTriggers[0].increaseBy || 0;
                    if (s > 0 && t.length > 0) {
                        let e = t[t.length - 1];
                        for (; t.length < r;) e += s, t.push(e)
                    }
                    return t
                },
                levelForXpTotal(e, t) {
                    let s = 0;
                    for (let n = 0; n < e.length && t >= e[n]; n++) s = n + 1;
                    return Math.min(s, r)
                },
                levelForXp(e) {
                    const t = this.get("milestoneThresholds") || [];
                    return t.length ? Math.max(1, this.levelForXpTotal(t, e || 0)) : 1
                },
                currentLevelXp: n.Ember.computed("xpTotal", "milestoneThresholds", (function() {
                    const e = this.get("milestoneThresholds") || [],
                        t = this.get("xpTotal") || 0,
                        s = this.levelForXpTotal(e, t);
                    return t - (s > 0 ? e[s - 1] : 0)
                })),
                currentLevel: n.Ember.computed("xpTotal", "milestoneThresholds", (function() {
                    const e = this.get("milestoneThresholds") || [],
                        t = this.get("xpTotal") || 0;
                    return e.length ? Math.max(1, this.levelForXpTotal(e, t)) : 1
                })),
                nextLevel: n.Ember.computed("currentLevel", (function() {
                    return Math.min(r, this.get("currentLevel") + 1)
                })),
                isMaxLevel: n.Ember.computed("currentLevel", (function() {
                    return this.get("currentLevel") >= r
                })),
                xpForNextLevel: n.Ember.computed("xpTotal", "milestoneThresholds", (function() {
                    const e = this.get("milestoneThresholds") || [],
                        t = this.get("xpTotal") || 0;
                    if (!e.length) return 100;
                    const s = this.levelForXpTotal(e, t);
                    if (s >= r || s >= e.length) return 0;
                    const n = s > 0 ? e[s - 1] : 0;
                    return e[s] - n
                })),
                eligibleForMasteries: n.Ember.computed.gte("currentLevel", m.MASTERY),
                eligibleForSummonersJourney: n.Ember.computed.gte("currentLevel", m.SUMMONERS_JOURNEY)
            });
            t.default = c
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.unobserveProgressionReady = function(e) {
                n.db.unobserve(a, e)
            }, t.whenProgressionReady = function(e, t) {
                n.db.observe(a, e, (s => {
                    !s || e.isDestroying || e.isDestroyed || (n.db.unobserve(a, e), t())
                }))
            };
            var n = s(1);
            const a = "/lol-progression/v1/ready"
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "rEb7NjtM",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\jade-level-progression.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-level-progression-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["dynamic-attr","class",["concat",["animated-radial ",["helper",["if"],[["get",["showAnimatedElements"]],"visible"],null]]]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","radial-fill"],["flush-element"],["text","\\n      "],["open-element","lol-uikit-lottie",[]],["static-attr","class","lottie-radial-fill"],["dynamic-attr","src",["unknown",["lottieBarFillPath"]],null],["dynamic-attr","param-current-exp",["unknown",["lottieRadialOldPercent"]],null],["dynamic-attr","param-new-exp",["unknown",["lottieRadialNewPercent"]],null],["static-attr","autoplay","false"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["unless"],[["get",["showAnimatedElements"]]],null,2],["text","  "],["open-element","div",[]],["static-attr","class","jade-level-icon-container"],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","class","jade-map-icon"],["static-attr","src","lol-game-data/assets/content/src/LeagueClient/GameModeAssets/Jade/img/game-select-mode-icon-selected.png"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-level-plate"],["flush-element"],["append",["unknown",["currentLevel"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","jade-level-progression-spacer-vertical"],["flush-element"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","jade-level-progression-details"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-level-progression-xp-gained"],["flush-element"],["text","\\n"],["block",["if"],[["get",["willAnimate"]]],null,1,0],["text","    "],["open-element","lol-uikit-video",[]],["static-attr","class","points-gained-spark-small-video"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-spark-small.webm"],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["static-attr","perf-flags","\\n      "],["flush-element"],["close-element"],["text","\\n    "],["open-element","lol-uikit-video",[]],["static-attr","class","points-gained-spark-medium-video"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-spark-medium.webm"],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["static-attr","perf-flags","largeAreaAnimationsEnabled"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-level-progression-level-label"],["flush-element"],["append",["unknown",["tra","jade_postgame_progression_jade_level_label"]],false],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["unknown",["playerXpGainLoc"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["unknown",["animatedPointsText"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","lol-uikit-radial-progress",[]],["static-attr","class","jade-level-progression-radial-progress"],["static-attr","type","custom"],["dynamic-attr","percent",["concat",[["unknown",["radialProgressPercent"]]]]],["static-attr","start-angle","-135"],["static-attr","end-angle","-405"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","bottom"],["static-attr","class","jade-level-progression-radial radial-bottom"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","middle"],["static-attr","class","jade-level-progression-radial radial-middle"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "FcGffQku",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\jade-postgame.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["dynamic-attr","class",["concat",["jade-postgame-header-section ",["helper",["if"],[["get",["isProgressionTabSelected"]],"progression-tab"],null]]]],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","postgame-header-background"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-postgame-header-container"],["flush-element"],["text","\\n    "],["append",["helper",["postgame-header"],null,[["gameId"],[["get",["gameId"]]]]],false],["text","\\n    "],["open-element","div",[]],["static-attr","class","postgame-header-button-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["showAddPerksPageButton"]]],null,9],["block",["if"],[["get",["postgame","isLocalPlayerInGame"]]],null,8],["block",["unless"],[["get",["isDetailsTabOpen"]]],null,7],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","jade-postgame-contents"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-postgame-screens"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-postgame-tabs-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["tabs"]]],null,5],["text","    "],["close-element"],["text","\\n    "],["append",["helper",["log"],["isaac recent currencyNotifications: ",["get",["recentCurrencyNotifications"]]],null],false],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-postgame-screens-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isProgressionTabSelected"]]],null,4,3],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","postgame-footer"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","left-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["dynamic-attr","class",["concat",["chat-container ",["helper",["if"],[["get",["shouldHideChatRoom"]],"hidden"],null]]]],["flush-element"],["text","\\n      "],["open-element","lol-social-chat-room",[]],["static-attr","class","scoreboard-v2"],["static-attr","type","postGame"],["dynamic-attr","room-changed-messages",["unknown",["roomChangedMessages"]],null],["dynamic-attr","placeholder",["concat",[["unknown",["tra","postgame_chat_placeholder"]]]]],["static-attr","can-hide-player-messages",""],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","center-container"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-close-button",[]],["static-attr","class","postgame-footer-exit-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"exitPostgame"],null],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","find-match-button-container"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","find-match-button-decoration find-match-button-decoration-left"],["flush-element"],["close-element"],["text","\\n"],["block",["unless"],[["get",["animationsEnabled"]]],null,1,0],["text","      "],["open-element","div",[]],["static-attr","class","find-match-button-decoration find-match-button-decoration-right"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["dynamic-attr","class",["concat",["career-postgame-countdown-meter-container ",["helper",["if"],[["get",["hasTimer"]],"visible"],null]]]],["flush-element"],["text","\\n        "],["open-element","img",[]],["static-attr","class","career-postgame-countdown-meter-background"],["static-attr","src","/fe/lol-postgame/countdown_meter_bg.svg"],["flush-element"],["close-element"],["text","\\n        "],["open-element","img",[]],["static-attr","class","career-postgame-countdown-meter"],["static-attr","src","/fe/lol-postgame/countdown_meter.svg"],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["append",["helper",["postgame-party-status-v2"],null,[["partyStatus","animationsEnabled"],[["get",["partyStatus"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","right-container"],["flush-element"],["text","\\n    "],["append",["unknown",["postgame-scoreboard-progression-honor-notification"]],false],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["animated-play-button"],null,[["onClick","hasIntroAnimationPlayed","buttonText","baseImgPath","overImgPath","downImgPath","onHoverSound","onClickSound","clickedStyle","partyStatus"],[["helper",["action"],[["get",[null]],"onButtonClick"],null],["get",["hasIntroAnimationPlayed"]],["get",["forwardButtonText"]],"/fe/lol-static-assets/images/buttons/find_match_default.png","/fe/lol-static-assets/images/buttons/find_match_hover.png","/fe/lol-static-assets/images/buttons/find_match_active.png",["get",["forwardHoverSound"]],["get",["forwardClickSound"]],"color: #005A82",["get",["partyStatus"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["generic-button"],null,[["onClick","baseImgPath","overImgPath","downImgPath","upText","overText","downText","onHoverSound","onClickSound"],[["helper",["action"],[["get",[null]],"onButtonClick"],null],"/fe/lol-postgame/button-find-match.png","/fe/lol-postgame/button-find-match-over.png","/fe/lol-postgame/button-find-match-down.png",["get",["forwardButtonText"]],["get",["forwardButtonText"]],["get",["forwardButtonText"]],["get",["forwardHoverSound"]],["get",["forwardClickSound"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["jade-scoreboard-screen"],null,[["eogStats","showKeystone","hasScoreboardAnimationPlayed","hasCelebratedHonor","isContinueButtonClicked","updateHonorCelebrationAnimation","updateScoreboardAnimation"],[["get",["eogStats"]],["get",["gameflow","showKeystone"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["isContinueButtonClicked"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null],["helper",["action"],[["get",[null]],"updateScoreboardAnimation"],null]]]],false],["text","\\n      "]],"locals":[]},{"statements":[["block",["if"],[["get",["isScoreboardTabSelected"]]],null,2]],"locals":[]},{"statements":[["text","        "],["append",["helper",["jade-progression-screen"],null,[["eogStats","updatedChallengesList","summonerIconPath","willAnimate","preGameJadeXp","jadePassActive","recentCurrencyEarnedAmount","gameMode","playOutlineAnimation","setModalDoneShowing"],[["get",["eogStats"]],["get",["updatedChallengesList"]],["get",["summonerIconPath"]],["get",["isAnimating"]],["get",["preGameJadeXp"]],["get",["jadePassActive"]],["get",["recentCurrencyEarnedAmount"]],["get",["gameMode"]],["helper",["action"],[["get",[null]],"playOutlineAnimation"],null],["helper",["action"],[["get",[null]],"setModalDoneShowing"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["dynamic-attr","class",["concat",["jade-postgame-tab ",["helper",["if"],[["get",["tab","selected"]],"active"],null]]]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"handleTabSelected",["get",["tab","value"]]],null],null],["flush-element"],["text","\\n          "],["append",["unknown",["tab","name"]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","jade-postgame-tabs-spacer"],["flush-element"],["close-element"],["text","\\n"]],"locals":["tab"]},{"statements":[["text","          "],["open-element","lol-uikit-flat-button",[]],["static-attr","class","postgame-match-history-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"displayAdvancedDetails"],null],null],["flush-element"],["text","\\n            "],["append",["unknown",["tra","postgame_scoreboard_view_advanced_details"]],false],["text","\\n          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["shouldShowAdvancedDetailsButton"]]],null,6]],"locals":[]},{"statements":[["text","        "],["append",["unknown",["postgame-scoreboard-replay-button"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","add-perks-page-button-container"],["flush-element"],["text","\\n          "],["append",["helper",["generic-button"],null,[["onClick","baseImgPath","overImgPath","downImgPath","disabledImgPath","tooltipText","disabledTooltipText","isEnabled","onHoverSound","onClickSound"],[["helper",["action"],[["get",[null]],"addPerksPage"],null],"/fe/lol-postgame/add-rune-page.png","/fe/lol-postgame/add-rune-page.png","/fe/lol-postgame/add-rune-page-disabled.png","/fe/lol-postgame/add-rune-page-disabled.png",["get",["tra","perks_add_rune_page_button"]],["get",["addRunePageButtonDisabledText"]],["get",["addPerksPageButtonEnabled"]],["get",["forwardHoverSound"]],["get",["forwardClickSound"]]]]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "rrCvUeu2",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\jade-progression-screen.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["block",["render-telemetry-sender"],null,[["renderEventName"],[["get",["renderEventName"]]]],4]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["legendary-mastery-progression"],null,[["isSmall","willAnimate"],[["get",["isMasteryProgressionSmall"]],["get",["willAnimate"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["jade-ranked-progression"],null,[["tier","division","leaguePointsDelta","leaguePoints","consolationLpUsed","afkLpPenaltyAmount","lpChangeClassName","miniseriesProgress","notifyReason","isLossPrevented","isWin","provisionalGamesRemaining","willAnimate"],[["get",["leaguesNotification","tier"]],["get",["leaguesNotification","division"]],["get",["leaguesNotification","leaguePointsDelta"]],["get",["leaguesNotification","leaguePoints"]],["get",["leaguesNotification","consolationLpUsed"]],["get",["leaguesNotification","afkLpPenaltyAmount"]],["get",["lpChangeClassName"]],["get",["leaguesNotification","miniseriesProgress"]],["get",["leaguesNotification","notifyReason"]],["get",["isLossPrevented"]],["get",["isWin"]],["get",["leaguesNotification","provisionalGamesRemaining"]],["get",["willAnimate"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["jade-season-pass-progression"],null,[["isLarge","tokensEarned","hasBonus"],[["get",["isSeasonPassLarge"]],["get",["recentCurrencyEarnedAmount"]],["get",["jadePassActive"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["helper",["jade-level-progression"],null,[["isLarge","preGameJadeXp","summonersJourneyService","summonerIconPath","willAnimate","isRanked"],[["get",["isLevelProgressionLarge"]],["get",["preGameJadeXp"]],["get",["summonersJourneyService"]],["get",["summonerIconPath"]],["get",["willAnimate"]],["get",["showQueueAsRanked"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","jade-progression-screen-content"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-progression-screen-content-bg-container"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","jade-progression-champion-background-wrapper"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","jade-progression-champion-background-mask"],["flush-element"],["text","\\n          "],["open-element","img",[]],["static-attr","class","jade-progression-champion-background"],["dynamic-attr","src",["concat",[["unknown",["eogStats","localPlayer","skinSplashPath"]]]]],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","jade-progression-components-container"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowJadeLevelProgression"]]],null,3],["text","\\n"],["block",["if"],[["get",["shouldShowSeasonPass"]]],null,2],["text","\\n      "],["append",["helper",["log"],["isaac recentCurrencyEarnedAmount",["get",["recentCurrencyEarnedAmount"]]],null],false],["text","\\n\\n"],["block",["if"],[["get",["showQueueAsRanked"]]],null,1],["block",["if"],[["get",["shouldShowMasteryProgression"]]],null,0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "1nEKB9zm",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\jade-ranked-progression.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-ranked-progression-ranked-emblem-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-ranked-progression-ranked-emblem-sizer"],["flush-element"],["text","\\n    "],["open-element","lol-regalia-emblem-element",[]],["dynamic-attr","ranked-division",["unknown",["division"]],null],["dynamic-attr","queue-type","JADE_RANKED_SOLO_5x5",null],["dynamic-attr","ranked-tier",["unknown",["tier"]],null],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-ranked-progression-details"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-ranked-progression-update-result-container"],["flush-element"],["text","\\n    "],["append",["helper",["rating-change"],null,[["ratingDelta","lpChangeClassName","overrideShowLp","willAnimate","isWin","isBeingPromoted","isBeingDemoted","isInMiniseries","isLossPrevented","getLocForRatingChange"],[["get",["leaguePointsDelta"]],["get",["lpChangeClassName"]],"true",["get",["willAnimate"]],["get",["isWin"]],["get",["isBeingPromoted"]],["get",["isBeingDemoted"]],["get",["isInMiniseries"]],["get",["isLossPrevented"]],["get",["boundLocForSpChange"]]]]],false],["text","\\n    "],["open-element","lol-uikit-video",[]],["static-attr","class","points-gained-spark-video"],["static-attr","src","/fe/lol-static-assets/videos/challenges/postgame/postgame-spark-large.webm"],["static-attr","fade-in","0"],["static-attr","fade-out","0"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-ranked-progression-update-result-status-text"],["flush-element"],["append",["unknown",["updateResultStatusText"]],false],["close-element"],["text","\\n"],["block",["if"],[["get",["isInMiniseries"]]],null,1,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","jade-ranked-progression-total-lp-container"],["flush-element"],["append",["unknown",["currentSpLoc"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["miniseries-progress"],null,[["miniseriesProgress"],[["get",["miniseriesProgress"]]]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "WYFJmHu4",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\jade-scoreboard-header.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-pre-team-name-spacer"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-team-name"],["flush-element"],["append",["unknown",["teamNameLoc"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-diamond-separator-icon"],["flush-element"],["text","\\n    "],["append",["helper",["button-mask-icon"],null,[["iconPath","widthStyle","heightStyle"],["/fe/lol-jade/images/postgame/scoreboard-header-separator-bullet.svg","10px","10px"]]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-stat-container"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],2],["text","    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-icon kda"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-stat-label"],["flush-element"],["append",["unknown",["kdaLoc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-diamond-separator-icon"],["flush-element"],["text","\\n    "],["append",["helper",["button-mask-icon"],null,[["iconPath","widthStyle","heightStyle"],["/fe/lol-jade/images/postgame/scoreboard-header-separator-bullet.svg","10px","10px"]]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-stat-container"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],1],["text","    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-icon gold"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-stat-label"],["flush-element"],["append",["unknown",["teamGoldLoc"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-spacer"],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-scoreboard-column-icons-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-icon-spacer"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-header-icon kda"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","top"]],0],["text","  "],["close-element"],["text","\\n  "],["append",["helper",["scoreboard-stat-switcher"],null,[["options","selectedStat","ordinal","selectStat"],[["get",["statSwitcher1Options"]],["get",["statSwitcherStatName1"]],1,"selectStat"]]],false],["text","\\n  "],["append",["helper",["scoreboard-stat-switcher"],null,[["options","selectedStat","ordinal","selectStat"],[["get",["statSwitcher2Options"]],["get",["statSwitcherStatName2"]],2,"selectStat"]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","jade-scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_INDIVIDUAL_KDA"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","jade-scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_TEAM_GOLD_EARNED"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","jade-scoreboard-header-stat-icon-tooltip"],["flush-element"],["text","\\n        "],["append",["unknown",["tra","postgame_scoreboard_stat_display_tooltip_KILL_DEATH_ASSIST"]],false],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "M3nHg7or",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\jade-scoreboard-row.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-content-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isLeaver"]]],null,13],["text","  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-icon-container-sizer"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-player-details-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-skin-background"],["dynamic-attr","style",["unknown",["skinSplashStyle"]],null],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-skin-overlay"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-skin-overlay secondary"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-details-content horizontal-flex-box"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-level-container"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-in-game-level centered-flex-box"],["flush-element"],["append",["unknown",["player","stats","LEVEL"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-skin-image-spacer"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-name-and-champ-container vertical-flex-box"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-player-name"],["flush-element"],["text","\\n"],["block",["if"],[["get",["player","botPlayer"]]],null,12,11],["text","        "],["close-element"],["text","\\n"],["block",["if"],[["get",["isLeaver"]]],null,10,9],["text","      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-actions-button-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,6],["text","      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","id","mute-indicator"],["static-attr","class","jade-scoreboard-row-mute-indicator"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["shouldShowPlayerHonorComponent"]]],null,5],["block",["if"],[["get",["shouldShowIndicator"]]],null,4],["text","  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-pike"],["flush-element"],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-summoner-spells-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["if"],[["get",["hideSummoners"]]],null,3,2],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-element-spacer-default"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-items-container centered-flex-box"],["flush-element"],["text","\\n"],["block",["each"],[["get",["truncatedItems"]]],null,1],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-pike"],["flush-element"],["close-element"],["text","\\n\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","hasScoreboardAnimationPlayed","animationsEnabled"],["INDIVIDUAL_KDA",["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","highestStatValueByStatMap","locale","hasScoreboardAnimationPlayed","animationsEnabled"],[["get",["statSwitcherStatName1"]],["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["highestStatValueByStatMap"]],["get",["postgame","locale"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n  "],["append",["helper",["scoreboard-row-stat-display"],null,[["statName","player","team","gameLengthSeconds","highestStatValueByStatMap","locale","hasScoreboardAnimationPlayed","animationsEnabled"],[["get",["statSwitcherStatName2"]],["get",["player"]],["get",["team"]],["get",["gameLengthSeconds"]],["get",["highestStatValueByStatMap"]],["get",["postgame","locale"]],["get",["hasScoreboardAnimationPlayed"]],["get",["animationsEnabled"]]]]],false],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-hover-overlay"],["flush-element"],["text","\\n"],["block",["if"],[["get",["shouldShowButtons"]]],null,0],["text","  "],["open-element","lc-flyout",[]],["dynamic-attr","open",["unknown",["isPlayerActionsMenuOpen"]],null],["dynamic-attr","onHide",["helper",["action"],[["get",[null]],"hidePlayerActionsMenu"],null],null],["dynamic-attr","uiKitOptionOverrides",["unknown",["flyoutOptions"]],null],["flush-element"],["text","\\n    "],["open-element","lc-flyout-content",[]],["flush-element"],["text","\\n      "],["append",["helper",["scoreboard-row-actions-menu"],null,[["data","isItemSetsDisabled","isFriendRequestDisabled","isFriendingRestricted","isPlayerBlocked","isReportDisabled","isPlayerMuted","sendFriendRequest","inviteToParty","showReportDialog","confirmBlockPlayer","viewProfile","importItemSet","togglePlayerMute","isPlayerMuteToggleable"],[["get",["player"]],["get",["postgame","isItemSetsDisabled"]],["get",["isFriendRequestDisabled"]],["get",["isFriendingRestricted"]],["get",["isPlayerBlocked"]],["get",["isReportDisabled"]],["get",["showPlayerMute"]],"sendFriendRequest","inviteToParty","showReportDialog","confirmBlockPlayer","viewProfile","importItemSet","togglePlayerMute",["get",["isPlayerMuteToggleable"]]]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-player-controls-container"],["flush-element"],["text","\\n      "],["append",["helper",["postgame-scoreboard-player-buttons"],null,[["player","isFriendRequestDisabled","isFriendingRestricted","isReportDisabled","isPlayerTeam","isInviteDisabled","sendFriendRequest","showReportDialog","inviteToParty","togglePlayerMute","isPlayerMuted"],[["get",["player"]],["get",["isFriendRequestDisabled"]],["get",["isFriendingRestricted"]],["get",["isReportDisabled"]],["get",["team","isPlayerTeam"]],["get",["isInviteDisabled"]],"sendFriendRequest","showReportDialog","inviteToParty","togglePlayerMute",["get",["isPlayerMuted"]]]]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["append",["helper",["postgame-scoreboard-player-item"],null,[["itemId","alternate"],[["get",["itemId"]],true]]],false],["text","\\n"]],"locals":["itemId"]},{"statements":[["text","      "],["append",["helper",["scoreboard-spell"],null,[["spellId","isLarge"],[["get",["player","spell1Id"]],true]]],false],["text","\\n      "],["append",["helper",["scoreboard-spell"],null,[["spellId","isLarge"],[["get",["player","spell2Id"]],true]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-spell-icon-placeholder"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-spell-icon-placeholder"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["unknown",["scoreboard-climb-indicator"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["append",["helper",["scoreboard-honor-flair"],null,[["isLocalPlayer","isPlayerTeam","isBot","puuid","summonerName","gameName","tagLine","hasScoreboardAnimationPlayed","hasCelebrated","updateHonorCelebrationAnimation"],[["get",["player","isLocalPlayer"]],["get",["team","isPlayerTeam"]],["get",["player","botPlayer"]],["get",["player","puuid"]],["get",["player","summonerName"]],["get",["gameName"]],["get",["tagLine"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-actions-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"showPlayerActionsMenu"],null],null],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-champ-name"],["flush-element"],["append",["unknown",["player","championName"]],false],["close-element"],["text","\\n        "]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-is-system-muted"],["flush-element"],["append",["unknown",["tra","postgame_system_muted_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["isSystemMuted"]]],null,8,7]],"locals":[]},{"statements":[["text","          "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-leaver-text"],["flush-element"],["append",["unknown",["tra","postgame_afk_penalty_applied_scoreboard"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["helper",["player-name"],null,[["format","puuid","summonerName","gameName","tagLine"],["short",["get",["player","puuid"]],["get",["player","summonerName"]],["get",["gameName"]],["get",["tagLine"]]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["append",["unknown",["player","summonerName"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","jade-embellishment-icon-container"],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","cancel-icon"],["static-attr","src","/fe/lol-postgame/icon-cancel.svg"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "CM1xaiyj",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\jade-scoreboard-screen.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-scoreboard-root-content-container"],["flush-element"],["text","\\n"],["block",["each"],[["get",["postgame","eogStatsBlock","teams"]]],null,2],["text","  "],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-separator top"],["flush-element"],["close-element"],["text","\\n                "],["append",["helper",["jade-scoreboard-row"],null,[["player","team","statSwitcherStatName1","statSwitcherStatName2","gameLengthSeconds","highestStatValueByStatMap","gameId","hasScoreboardAnimationPlayed","hasCelebratedHonor","animationsEnabled","queueType","updateHonorCelebrationAnimation"],[["get",["player"]],["get",["team"]],["get",["statSwitcherStatName1"]],["get",["statSwitcherStatName2"]],["get",["eogStats","gameLength"]],["get",["highestStatValueByStatMap"]],["get",["eogStats","gameId"]],["get",["hasScoreboardAnimationPlayed"]],["get",["hasCelebratedHonor"]],["get",["animationsEnabled"]],["get",["eogStats","queueType"]],["helper",["action"],[["get",[null]],"updateHonorCelebrationAnimation"],null]]]],false],["text","\\n"]],"locals":["player"]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","jade-scoreboard-half-container"],["flush-element"],["text","\\n          "],["append",["helper",["jade-scoreboard-header"],null,[["team","index","setSelectedStat","statSwitcherStatName1","statSwitcher1Options","statSwitcherStatName2","statSwitcher2Options","locale"],[["get",["team"]],["get",["index"]],"setSelectedStat",["get",["statSwitcherStatName1"]],["get",["statSwitcher1Options"]],["get",["statSwitcherStatName2"]],["get",["statSwitcher2Options"]],["get",["postgame","locale"]]]]],false],["text","\\n          "],["open-element","div",[]],["static-attr","class","jade-scoreboard-team-container"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","jade-scoreboard-team"],["flush-element"],["text","\\n              "],["open-element","div",[]],["dynamic-attr","class",["concat",["jade-scoreboard-team-bg left ",["helper",["if"],[["get",["team","isPlayerTeam"]],"blue"],null]]]],["flush-element"],["close-element"],["text","\\n              "],["open-element","div",[]],["dynamic-attr","class",["concat",["jade-scoreboard-team-bg right ",["helper",["if"],[["get",["team","isPlayerTeam"]],"blue"],null]]]],["flush-element"],["close-element"],["text","\\n"],["block",["each"],[["get",["team","players"]]],null,0],["text","              "],["open-element","div",[]],["static-attr","class","jade-scoreboard-row-separator bottom"],["flush-element"],["close-element"],["text","\\n            "],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["team","players"]]],null,1]],"locals":["team","index"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            const n = s(1).Ember;
            e.exports = n.HTMLBars.template({
                id: "UHDmaZtv",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount-Releases\\\\16.18\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-postgame\\\\src\\\\app\\\\templates\\\\components\\\\v2\\\\jade-season-pass-progression.hbs\\" style-path=\\"null\\" js-path=\\"null\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-season-pass-final-reward-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-season-pass-final-reward-frame"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-season-pass-final-reward-image"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-season-pass-spacer-vertical"],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","jade-season-pass-details-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","jade-season-pass-tokens-container"],["flush-element"],["text","\\n    +\\n    "],["open-element","div",[]],["static-attr","class","jade-season-pass-tokens-icon"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","jade-season-pass-tokens-earned-label"],["flush-element"],["append",["unknown",["tokensEarnedDisplay"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["if"],[["get",["hasBonus"]]],null,1],["text","  "],["open-element","div",[]],["static-attr","class","jade-season-pass-label"],["flush-element"],["append",["unknown",["tra","jade_postgame_progression_jade_season_pass_label"]],false],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","lol-uikit-content-block",[]],["static-attr","type","tooltip-system"],["static-attr","class","jade-season-pass-bonus-tooltip"],["flush-element"],["text","\\n          "],["open-element","p",[]],["flush-element"],["append",["unknown",["tra","jade_postgame_progression_jade_season_pass_bonus_tooltip"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","jade-season-pass-bonus-badge"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","jade-season-pass-bonus-icon"],["flush-element"],["close-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["type","tooltipPosition"],["system","right"]],0],["text","    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }],
        t = {};

    function s(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n](o, o.exports, s), o.exports
    }
    s.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        "use strict";
        var e, t = (e = s(1)) && e.__esModule ? e : {
            default: e
        };
        const n = "rcp-fe-lol-postgame",
            a = document.currentScript.ownerDocument;
        const o = window.getPluginAnnounceEventName(n);
        a.addEventListener(o, (function(e) {
            (0, e.registrationHandler)((e => t.default.init(e, {
                Audio: e => e.get("rcp-fe-audio"),
                ChampionAssetsManager: e => e.get("rcp-fe-common-libs").championAssetsManager,
                ComponentFactory: e => e.get("rcp-fe-common-libs").getComponentFactory("1"),
                dataBinding: e => e.get("rcp-fe-common-libs").getDataBinding("rcp-fe-lol-postgame"),
                datadogRum: e => e.get("rcp-fe-common-libs").getDatadogRum(),
                Ember: e => e.get("rcp-fe-ember-libs").getEmber(),
                EmberAddons: e => e.get("rcp-fe-ember-libs").getSharedEmberAddons(),
                emberDataBinding: e => e.get("rcp-fe-ember-libs").getEmberDataBinding("rcp-fe-lol-postgame"),
                emberL10n: e => e.get("rcp-fe-ember-libs").getEmberL10n(1),
                gsap: e => e.get("rcp-fe-common-libs").getGsap("1"),
                gsapCustomEase: e => e.get("rcp-fe-common-libs").getGsapCustomEase("1"),
                leaguesConsts: e => e.get("rcp-fe-lol-shared-components").getApi_LeagueTierNames().getConstants(),
                leagueTierNames: e => e.get("rcp-fe-lol-shared-components").getApi_LeagueTierNames(),
                logger: e => e.get("rcp-fe-common-libs").logging.create(n),
                lottie: e => e.get("rcp-fe-common-libs").getLottie("1"),
                Navigation: e => e.get("rcp-fe-lol-navigation"),
                playerNames: e => e.get("rcp-fe-common-libs").playerNames,
                profilePlugin: e => e.get("rcp-fe-lol-profiles"),
                Replays: e => e.get("rcp-fe-lol-shared-components").getApi_Replays(),
                Router: e => e.get("rcp-fe-lol-shared-components").getApi_Router(),
                SharedChallengesComponents: e => e.get("rcp-fe-lol-shared-components").getApi_SharedChallengesComponents(),
                SharedChallengesConstants: e => e.get("rcp-fe-lol-shared-components").getApi_SharedChallengesConstants(),
                SharedChampionMasteryComponents: e => e.get("rcp-fe-lol-shared-components").getApi_SharedChampionMasteryComponents(),
                SharedChampionMasteryConstants: e => e.get("rcp-fe-lol-shared-components").getApi_SharedChampionMasteryConstants(),
                SharedReportModalApps: e => e.get("rcp-fe-lol-shared-components").getApi_SharedReportModalApps(),
                SharedPlayerBehaviorApps: e => e.get("rcp-fe-lol-shared-components").getApi_SharedPlayerBehaviorApps(),
                SharedComponents: e => e.get("rcp-fe-lol-shared-components"),
                SharedSeasonPassComponents: e => e.get("rcp-fe-lol-navigation").getSharedSeasonPassComponents(),
                SharedEmberComponents: e => e.get("rcp-fe-lol-shared-components").getSharedEmberComponents(),
                socket: e => e.getSocket(),
                Telemetry: e => e.get("rcp-fe-common-libs").getTelemetry("1"),
                TelemetryService: e => e.get("rcp-fe-lol-shared-components").getApi_TelemetryService(),
                UIKit: e => e.get("rcp-fe-lol-uikit"),
                UXSettings: e => e.get("rcp-fe-lol-shared-components").getApi_UXSettings(),
                Viewport: e => e.get("rcp-fe-lol-shared-components").getApi_Viewport(),
                _: e => e.get("rcp-fe-common-libs").getLodash(4)
            }).then((async () => {
                const s = await e.get("rcp-fe-lol-l10n").tra().overlay("/fe/lol-social/trans.json").overlay("/fe/lol-l10n/trans.json").overlay("/fe/lol-postgame/trans.json").overlay("/fe/lol-shared-components/trans.json").overlay("/fe/lol-shared-components/trans-challenges.json").overlay("/fe/lol-shared-components/trans-champion-mastery.json").overlay("/fe/lol-navigation/trans-activity-center.json").overlay("/fe/lol-tft-promethium/trans.json").overlay("/fe/tft/trans.json").overlay("/fe/lol-jade/trans.json"),
                    n = t.default.emberL10n(t.default.Ember, s);
                return t.default.add({
                    tra: s,
                    traService: n
                })
            })).then((() => t.default.tra.ready())).then((() => t.default.add({
                extEmberModel: t.default.Ember.Object.create({}),
                db: t.default.dataBinding.bindTo(e.getSocket()),
                emberApplicationFactory: e => e.get("rcp-fe-ember-libs").getEmberApplicationFactory()
            }))).then((() => {
                const n = s(2).default,
                    a = new(0, s(28).default)(t.default.emberApplicationFactory),
                    o = new n(a);
                return e.getOptional("rcp-fe-lol-strawberry-hub").then((e => {
                    t.default.StrawberryModules = e.getStrawberryModules(), t.default.tra = t.default.tra.overlay("/fe/lol-strawberry-hub/trans.json")
                }), (() => null)), e.getOptional("rcp-fe-lol-tft-team-planner").then((e => {
                    t.default.TeamPlanner = e
                }), (() => null)), e.getOptional("rcp-fe-tft").then((e => {
                    t.default.TftBridgeComponents = e.getBridgeComponents()
                }), (() => null)), t.default.traService = t.default.emberL10n(t.default.Ember, t.default.tra), t.default.add({
                    ApplicationInjector: a,
                    ProgressionComponentHelper: o
                })
            })).then((() => (0, s(29).default)()))))
        }), {
            once: !0
        })
    })()
})();
//# sourceMappingURL=rcp-fe-lol-postgame.js.map