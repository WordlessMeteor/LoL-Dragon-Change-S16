(() => {
    var e = [, e => {
            "use strict";
            let t;

            function s() {
                return t || (console.error("The `provider` object has not been set, please do so by calling the `init` method."), null)
            }
            const a = {
                init: function(e, s) {
                    return t = e, this.add(s)
                },
                _getValue: function(e, s) {
                    let a;
                    return "function" == typeof s ? (a = s(t), a || console.warn("The function for key " + e + " returned a falsy value: ", a)) : "string" == typeof s ? (a = t.get(s), a || console.warn("The provider `get` invocation for the key " + e + " returned a falsy value: ", a)) : "object" == typeof s && (a = s), a
                },
                add: function(e) {
                    e = e || {};
                    const t = [],
                        s = this;
                    return Object.keys(e).forEach((function(a) {
                        const o = e[a],
                            n = s._getValue(a, o);
                        n && n.then ? (n.then((function(e) {
                            e || console.warn("The promise for the key " + a + " resolved with a falsy value: ", e), s._addValue(a, e)
                        })), t.push(n)) : s._addValue(a, n)
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
            e.exports = a
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = s(1),
                o = s(3);
            t.default = class {
                constructor() {
                    this.application = null, this._usesScreenRoot = !1, this._progressionState = {
                        completedMilestones: 0,
                        totalMilestones: 0,
                        progressPercent: 0,
                        groups: []
                    }, this._subscribers = new Set;
                    const e = a.Viewport.getApiKey(o.APP_NAME);
                    this._screenRoot = a.Viewport.main().getScreenRoot(e, o.APP_NAME), (0, a.dataBinding)("/lol-kiwi-hub", a.socket).observe("/v1/objectives", this, (e => {
                        this._progressionState = function(e) {
                            const t = e && e.summary;
                            return t ? {
                                completedMilestones: t.completedObjectives || 0,
                                totalMilestones: t.totalObjectives || 0,
                                progressPercent: t.progressPercent || 0,
                                groups: e.groups || []
                            } : {
                                completedMilestones: 0,
                                totalMilestones: 0,
                                progressPercent: 0,
                                groups: []
                            }
                        }(e), this._subscribers.forEach((e => e(this._progressionState)))
                    }))
                }
                getProgressionState() {
                    return Object.assign({}, this._progressionState)
                }
                subscribe(e) {
                    this._subscribers.add(e), e(this.getProgressionState())
                }
                unsubscribe(e) {
                    this._subscribers.delete(e)
                }
                show(e = {}) {
                    var t;
                    this.application && this.hide(), this.application = (t = a.traService, a.emberApplicationFactory.setFactoryDefinition({
                        name: o.APP_NAME,
                        tra: t,
                        ComponentFactory: a.ComponentFactory,
                        RootBaseComponent: s(4),
                        GroupDialogueScreenComponent: s(7),
                        GroupEmblemComponent: s(10),
                        GroupObjectiveCardComponent: s(13),
                        GroupObjectiveRewardComponent: s(17),
                        GroupNavigationButtonComponent: s(20),
                        GroupPageComponent: s(23),
                        GroupProgressTrackComponent: s(26),
                        GroupProgressTrackMilestoneComponent: s(29),
                        KiwiLobbyWidgetComponent: s(32),
                        MainProgressTrackComponent: s(35),
                        MainProgressTrackMilestoneComponent: s(38),
                        MainProgressRankTrackerComponent: s(41),
                        SummaryPageComponent: s(44),
                        SummaryPageGroupComponent: s(47),
                        ...a.RewardTrackerEmberComponents,
                        KiwiHubService: s(50)
                    }), a.ComponentFactory.create(o.APP_NAME));
                    const n = e && e.targetDivId;
                    if (n) {
                        const e = document.getElementById(n);
                        if (!e) throw this.application.onRemove && this.application.onRemove(), this.application = null, new Error(`Unable to find Kiwi Hub target element: ${n}`);
                        e.appendChild(this.application.domNode)
                    } else this._usesScreenRoot = !0, this._screenRoot.bump(), this._screenRoot.getElement().appendChild(this.application.domNode)
                }
                hide() {
                    this.application && (this._usesScreenRoot && this._screenRoot.release(), this.application.onRemove && this.application.onRemove(), this.application = null, this._usesScreenRoot = !1)
                }
            }
        }, (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.REWARD_TYPE_TRA_TO_TYPE_ICON_PATH = t.KIWI_HUB_TIERS = t.KIWI_HUB_STATUSES = t.KIWI_HUB_PROGRESSION_GOLD_THRESHOLD = t.KIWI_HUB_PROGRESSION_FINAL_THRESHOLD = t.ITEM_TYPE_TO_REWARD_TYPE_TRA = t.GROUP_PAGE_HEIGHT = t.FULFILLMENT_SOURCE_TO_REWARD_TYPE_TRA = t.APP_NAME = void 0;
            t.APP_NAME = "rcp-fe-lol-kiwi-hub";
            t.GROUP_PAGE_HEIGHT = 640;
            t.KIWI_HUB_STATUSES = {
                INVALID: "INVALID",
                LOCKED: "LOCKED",
                IN_PROGRESS: "IN_PROGRESS",
                CLAIMABLE: "CLAIMABLE",
                COMPLETED: "COMPLETED"
            };
            t.KIWI_HUB_TIERS = {
                DEFAULT: "DEFAULT",
                GOLD: "GOLD",
                PLATINUM: "PLATINUM"
            };
            t.KIWI_HUB_PROGRESSION_GOLD_THRESHOLD = 4;
            t.KIWI_HUB_PROGRESSION_FINAL_THRESHOLD = 6;
            t.FULFILLMENT_SOURCE_TO_REWARD_TYPE_TRA = {
                "cap.progression": "tra.Reward_Type_Fame"
            };
            t.ITEM_TYPE_TO_REWARD_TYPE_TRA = {
                "08b78152-d047-4726-a219-d92b8809a01c": "tra.Reward_Type_Augment",
                "bb69c4a5-35a6-423c-a61a-a1eb4ca1aae7": "tra.Reward_Type_Icon",
                "f559e052-8ce5-4b09-baa8-dc36b296842b": "tra.Reward_Type_Title",
                "5cee03fb-af16-4bc9-89f7-064b49e1233f": "tra.Reward_Type_Emote"
            };
            t.REWARD_TYPE_TRA_TO_TYPE_ICON_PATH = {
                "tra.Reward_Type_Emote": "/fe/lol-kiwi-hub/images/Emote_Type_Icon.png"
            }
        }, (e, t, s) => {
            "use strict";
            var a = s(1),
                o = s(3);
            s(5), e.exports = a.Ember.Component.extend({
                classNames: ["kiwi-hub-root"],
                layout: s(6),
                kiwiHubService: a.Ember.inject.service("kiwiHub"),
                viewedPageIndex: 0,
                didInsertElement() {
                    this._super(...arguments), this.element.style.setProperty("--group-page-height", o.GROUP_PAGE_HEIGHT + "px"), this.element.addEventListener("scroll", this._scrollCallback.bind(this))
                },
                willDestroyElement() {
                    this._super(...arguments), this.element.removeEventListener("scroll", this._scrollCallback.bind(this))
                },
                _scrollCallback() {
                    const e = Math.round(this.element.scrollTop / o.GROUP_PAGE_HEIGHT);
                    this.set("viewedPageIndex", e)
                },
                actions: {
                    navigateToGroupIndex(e) {
                        this.element.scrollTo({
                            top: e * o.GROUP_PAGE_HEIGHT,
                            behavior: "smooth"
                        })
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "d1lcUD/g",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\kiwi-hub-root\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\kiwi-hub-root\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\kiwi-hub-root\\\\index.js\\" "],["text","\\n"],["append",["helper",["summary-page"],null,[["navigateToGroupIndex","viewedPageIndex"],[["helper",["action"],[["get",[null]],"navigateToGroupIndex"],null],["get",["viewedPageIndex"]]]]],false],["text","\\n"],["block",["each"],[["get",["kiwiHubService","groups"]]],null,1],["text","\\n"],["append",["helper",["main-progress-rank-tracker"],null,[["mainProgressTrackRank","navigateToGroupIndex"],[["get",["kiwiHubService","mainProgressTrackRank"]],["helper",["action"],[["get",[null]],"navigateToGroupIndex"],null]]]],false],["text","\\n"],["open-element","div",[]],["static-attr","class","kiwi-hub-navigation-container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","kiwi-hub-navigation"],["flush-element"],["text","\\n    "],["append",["helper",["group-navigation-button"],null,[["groupIndex","navigateToGroupIndex","viewedPageIndex"],[0,["helper",["action"],[["get",[null]],"navigateToGroupIndex"],null],["get",["viewedPageIndex"]]]]],false],["text","\\n"],["block",["each"],[["get",["kiwiHubService","groups"]]],null,0],["text","  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","kiwi-hub-scroll-indicator"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","kiwi-hub-scroll-indicator-mouse"],["flush-element"],["close-element"],["text","\\n    "],["open-element","span",[]],["flush-element"],["append",["unknown",["tra","Navigation_Scroll_Indicator"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["append",["helper",["group-navigation-button"],null,[["group","groupIndex","navigateToGroupIndex","viewedPageIndex"],[["get",["group"]],["get",["group","groupIndex"]],["helper",["action"],[["get",[null]],"navigateToGroupIndex"],null],["get",["viewedPageIndex"]]]]],false],["text","\\n"]],"locals":["group"]},{"statements":[["text","  "],["append",["helper",["group-page"],null,[["group","viewedPageIndex"],[["get",["group"]],["get",["viewedPageIndex"]]]]],false],["text","\\n"]],"locals":["group"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a = s(1);
            s(8), e.exports = a.Ember.Component.extend({
                classNames: ["group-dialogue-screen"],
                layout: s(9),
                kiwiHubService: a.Ember.inject.service("kiwiHub"),
                group: null,
                isGroupLocked: !1,
                dialogueKey: "",
                dialogueAdditionalData: null,
                dialogueKeyToCharacterDisplayDataMap: null,
                dialogueRequestHeader: a.Ember.computed("dialogueAdditionalData", (function() {
                    const e = this.get("dialogueAdditionalData");
                    return !e || e.totalMissions <= 1 ? this.get("tra.Request") : this.get("tra").formatString("Request_Multiple", {
                        currentRequestIndex: e.displayObjectiveMissionIndex,
                        totalRequests: e.totalMissions
                    })
                })),
                characterDisplayData: a.Ember.computed("dialogueKey", "dialogueKeyToCharacterDisplayDataMap", (function() {
                    return this.get("dialogueKeyToCharacterDisplayDataMap")[this.get("dialogueKey")]
                })),
                mainPanelReward: a.Ember.computed("dialogueAdditionalData.rewards", (function() {
                    const e = this.get("dialogueAdditionalData.rewards");
                    return e ? e[0] : null
                })),
                mainPanelTitle: a.Ember.computed("isGroupLocked", "mainPanelReward", "dialogueRequestHeader", (function() {
                    return this.get("isGroupLocked") ? this.get("tra.Locked_Title") : this.get("mainPanelReward") ? this.get("tra").formatString("Reward_Index_Title", {
                        rewardIndex: 1
                    }) : this.get("dialogueRequestHeader")
                })),
                mainPanelText: a.Ember.computed("isGroupLocked", "dialogueAdditionalData.displayObjective.title", "mainPanelReward", "group.displayData.lockedRequirement", (function() {
                    if (this.get("isGroupLocked")) return this.get("group.displayData.lockedRequirement");
                    const e = this.get("mainPanelReward");
                    return e ? this._getRewardText(e) : this.get("dialogueAdditionalData.displayObjective.title")
                })),
                mainPanelRewardIconPath: a.Ember.computed("mainPanelReward", (function() {
                    const e = this.get("mainPanelReward");
                    return e ? this._getRewardIconPath(e) : ""
                })),
                mainPanelRewardHeader: a.Ember.computed("mainPanelReward", (function() {
                    const e = this.get("mainPanelReward");
                    return e ? this._getRewardHeader(e) : ""
                })),
                mainPanelRewardSubheader: a.Ember.computed("mainPanelReward", (function() {
                    const e = this.get("mainPanelReward");
                    return e ? this._getRewardSubheader(e) : ""
                })),
                subPanelReward: a.Ember.computed("dialogueAdditionalData.rewards", (function() {
                    const e = this.get("dialogueAdditionalData.rewards");
                    return e ? e[1] : null
                })),
                subPanelTitle: a.Ember.computed("isGroupLocked", "subPanelReward", (function() {
                    return this.get("isGroupLocked") ? this.get("tra.Reward_Title") : this.get("subPanelReward") ? this.get("tra").formatString("Reward_Index_Title", {
                        rewardIndex: 2
                    }) : this.get("tra.Info")
                })),
                subPanelText: a.Ember.computed("isGroupLocked", "dialogueAdditionalData.displayObjective.description", "subPanelReward", (function() {
                    if (this.get("isGroupLocked")) return this.get("tra.Locked_Reward_Info");
                    const e = this.get("subPanelReward");
                    return e ? this._getRewardText(e) : this.get("dialogueAdditionalData.displayObjective.description")
                })),
                subPanelRewardIconPath: a.Ember.computed("isGroupLocked", "subPanelReward", (function() {
                    if (this.get("isGroupLocked")) return "/fe/lol-kiwi-hub/images/Unlocked_Icon.png";
                    const e = this.get("subPanelReward");
                    return e ? this._getRewardIconPath(e) : ""
                })),
                subPanelRewardHeader: a.Ember.computed("isGroupLocked", "group.displayData.name", "subPanelReward", (function() {
                    if (this.get("isGroupLocked")) return this.get("tra").formatString("Locked_Reward_Header", {
                        groupName: this.get("group.displayData.name")
                    });
                    const e = this.get("subPanelReward");
                    return e ? this._getRewardHeader(e) : ""
                })),
                subPanelRewardSubheader: a.Ember.computed("subPanelReward", (function() {
                    const e = this.get("subPanelReward");
                    return e ? this._getRewardSubheader(e) : ""
                })),
                _getRewardIconPath: e => e.media.iconUrl,
                _getRewardHeader: e => e.localizations.title,
                _getRewardSubheader(e) {
                    return this.get(this.get("kiwiHubService").getRewardTypeTRA(e))
                },
                _getRewardText: e => e.localizations.details
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "I9o/19Kf",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-dialogue-screen\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-dialogue-screen\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-dialogue-screen\\\\index.js\\" "],["text","\\n"],["block",["if"],[["get",["characterDisplayData"]]],null,6]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","                    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-subheader"],["flush-element"],["append",["unknown",["subPanelRewardSubheader"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-header"],["flush-element"],["append",["unknown",["subPanelRewardHeader"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-icon-container"],["flush-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-icon"],["dynamic-attr","style",["concat",["background-image:url(",["unknown",["subPanelRewardIconPath"]],")"]]],["flush-element"],["close-element"],["text","\\n                "],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-icon-spacer"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-text-large"],["flush-element"],["append",["helper",["sanitize"],[["get",["mainPanelText"]]],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-header"],["flush-element"],["append",["unknown",["mainPanelRewardHeader"]],false],["close-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-subheader"],["flush-element"],["append",["unknown",["mainPanelRewardSubheader"]],false],["close-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-text"],["flush-element"],["append",["helper",["sanitize"],[["get",["mainPanelText"]]],null],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-icon-container"],["flush-element"],["text","\\n                    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-icon"],["dynamic-attr","style",["concat",["background-image:url(",["unknown",["mainPanelRewardIconPath"]],")"]]],["flush-element"],["close-element"],["text","\\n                "],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-reward-icon-spacer"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["open-element","div",[]],["static-attr","class","group-dialogue-screen-panels"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["group","displayData","infoPanelsImagePath"]],"\');"]]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-main-panel"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-title"],["flush-element"],["append",["unknown",["mainPanelTitle"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-details"],["flush-element"],["text","\\n"],["block",["if"],[["get",["mainPanelReward"]]],null,5],["text","            "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-descriptions"],["flush-element"],["text","\\n"],["block",["if"],[["get",["mainPanelReward"]]],null,4,3],["text","            "],["close-element"],["text","\\n        "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-sub-panel"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-title"],["flush-element"],["append",["unknown",["subPanelTitle"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-details"],["flush-element"],["text","\\n"],["block",["if"],[["get",["subPanelRewardIconPath"]]],null,2],["text","            "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-descriptions"],["flush-element"],["text","\\n"],["block",["if"],[["get",["subPanelRewardHeader"]]],null,1],["block",["if"],[["get",["subPanelRewardSubheader"]]],null,0],["text","                "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-panel-text"],["flush-element"],["append",["helper",["sanitize"],[["get",["subPanelText"]]],null],false],["close-element"],["text","\\n            "],["close-element"],["text","\\n        "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","group-dialogue-screen-dialogue-character"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["characterDisplayData","fullImagePath"]],"\');"]]],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","group-dialogue-screen-dialogue-bubble"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["group","displayData","dialogueBubbleImagePath"]],"\');"]]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-name"],["flush-element"],["append",["unknown",["characterDisplayData","name"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-dialogue-screen-dialogue"],["flush-element"],["append",["helper",["sanitize"],[["get",["characterDisplayData","dialogue"]]],null],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a = s(1),
                o = s(3);
            s(11), e.exports = a.Ember.Component.extend({
                classNames: ["group-emblem"],
                classNameBindings: ["isGoldTier:gold-tier", "isPlatinumTier:platinum-tier"],
                attributeBindings: ["style"],
                layout: s(12),
                group: null,
                groupTier: null,
                kiwiHubService: a.Ember.inject.service("kiwiHub"),
                groupProgressionData: a.Ember.computed("kiwiHubService.progressTrackIdToProgressionDataMap", "group", (function() {
                    return this.get("kiwiHubService").getProgressionData(this.get("group"))
                })),
                isGoldTier: a.Ember.computed.equal("groupTier", o.KIWI_HUB_TIERS.GOLD),
                isPlatinumTier: a.Ember.computed.equal("groupTier", o.KIWI_HUB_TIERS.PLATINUM),
                counterProgressString: a.Ember.computed("groupProgressionData.counterValue", (function() {
                    return this.get("kiwiHubService").formatProgressString(this.get("groupProgressionData.counterValue"), o.KIWI_HUB_PROGRESSION_FINAL_THRESHOLD)
                })),
                progressPercent: a.Ember.computed("groupProgressionData.counterValue", "isPlatinumTier", (function() {
                    if (this.get("isPlatinumTier")) return 100;
                    const e = this.get("groupProgressionData.counterValue") || 0;
                    return Math.min(100, Math.max(0, 100 * e / o.KIWI_HUB_PROGRESSION_FINAL_THRESHOLD))
                }))
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "XwCZQCoz",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-emblem\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-emblem\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-emblem\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","group-emblem-background"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","group-emblem-icon"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["group","displayData","logoImagePath"]],"\');"]]],["flush-element"],["close-element"],["text","\\n"],["block",["unless"],[["get",["isPlatinumTier"]]],null,1],["close-element"],["text","\\n"],["block",["unless"],[["get",["isPlatinumTier"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","group-emblem-objectives-counter-outline"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-emblem-objectives-counter"],["flush-element"],["append",["unknown",["counterProgressString"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","lol-uikit-radial-progress",[]],["static-attr","class","group-emblem-radial-progress"],["static-attr","type","custom"],["dynamic-attr","percent",["concat",[["unknown",["progressPercent"]]]]],["static-attr","start-angle","-90"],["static-attr","end-angle","-450"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","bottom"],["static-attr","class","group-emblem-radial group-emblem-radial-bottom"],["flush-element"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","slot","middle"],["static-attr","class","group-emblem-radial group-emblem-radial-middle"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a, o = s(1),
                n = s(3),
                r = (a = s(14)) && a.__esModule ? a : {
                    default: a
                };
            s(15);
            e.exports = o.Ember.Component.extend({
                classNames: ["group-objective-card"],
                layout: s(16),
                kiwiHubService: o.Ember.inject.service("kiwiHub"),
                changeDialogue: null,
                dialogueKeyToCharacterDisplayDataMap: null,
                objective: null,
                groupIndex: 0,
                isGroupLocked: !1,
                hasMultipleMissions: o.Ember.computed.gt("dialogueDisplayData.totalMissions", 1),
                iconPath: o.Ember.computed("dialogueKeyToCharacterDisplayDataMap", "dialogueKey", (function() {
                    const e = this.get("dialogueKeyToCharacterDisplayDataMap")[this.get("dialogueKey")];
                    return e ? e.iconPath : ""
                })),
                isCompleted: o.Ember.computed.equal("dialogueDisplayData.status", n.KIWI_HUB_STATUSES.COMPLETED),
                settingsKey: o.Ember.computed("groupIndex", "dialogueKey", (function() {
                    return `Group${this.get("groupIndex")}${this.get("dialogueKey")}`
                })),
                settingEmberObject: o.Ember.computed("kiwiHubService", "settingsKey", (function() {
                    return this.get("kiwiHubService").getSettingEmberObject(this.get("settingsKey"))
                })),
                hasObjectiveBeenHovered: o.Ember.computed.alias("settingEmberObject.value"),
                dialogueKey: o.Ember.computed("objective.objectiveIndex", "isGroupLocked", "dialogueDisplayData.displayObjectiveMissionIndex", "isCompleted", "isGroupLocked", (function() {
                    if (this.get("isGroupLocked")) return "Locked";
                    const e = this.get("dialogueDisplayData.displayObjectiveMissionIndex"),
                        t = e > 1 ? "T" + e : "",
                        s = this.get("isCompleted") ? "Completed" : "InProgress";
                    return `Objective${this.get("objective.objectiveIndex")}${t}${s}`
                })),
                dialogueDisplayData: o.Ember.computed("objective.missionsData.@each.status", "isGroupLocked", (function() {
                    if (this.get("isGroupLocked")) return null;
                    const e = this.get("objective"),
                        t = "COMPLETED";
                    let s = e,
                        a = 0;
                    for (; e.missionsData[a].status === t && s.nextLevelObjective;) ++a, s = s.nextLevelObjective;
                    return {
                        displayObjective: s,
                        displayObjectiveMissionIndex: a + 1,
                        totalMissions: e.missionsData.length,
                        status: e.missionsData[a].status === t ? n.KIWI_HUB_STATUSES.COMPLETED : n.KIWI_HUB_STATUSES.IN_PROGRESS
                    }
                })),
                actions: {
                    onMouseEnter() {
                        this.get("changeDialogue")(this.get("dialogueKey"), this.get("dialogueDisplayData")), this.get("kiwiHubService").changeSettingValue(this.get("settingsKey"), !0), r.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-button-generic-hover.ogg")
                    },
                    onMouseLeave() {
                        this.get("changeDialogue")()
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, o = (a = s(1)) && a.__esModule ? a : {
                default: a
            };
            t.default = class {
                static getAudioManager() {
                    if (!this._audioManager) {
                        const e = o.default.getProvider().get("rcp-fe-audio");
                        this._audioManager = e.createAudioManager("rcp-fe-lol-kiwi-hub")
                    }
                    return this._audioManager
                }
                static createSound(e, t, s) {
                    return this.getAudioManager().createSound(e, t, s)
                }
                static playSound(e, t, s) {
                    return this.getAudioManager().playSound(e, t, s)
                }
                static dispose() {
                    this._audioManager && (this._audioManager.dispose(), this._audioManager = null)
                }
            }
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "dvpI5zgU",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-objective-card\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-objective-card\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-objective-card\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","group-objective-card-border"],["dynamic-attr","onmouseenter",["helper",["action"],[["get",[null]],"onMouseEnter"],null],null],["dynamic-attr","onmouseleave",["helper",["action"],[["get",[null]],"onMouseLeave"],null],null],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-objective-icon"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["iconPath"]],"\');"]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["isCompleted"]]],null,2],["block",["unless"],[["get",["hasObjectiveBeenHovered"]]],null,1],["text","  "],["close-element"],["text","\\n"],["block",["if"],[["get",["hasMultipleMissions"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","group-objective-multiple-icon"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","group-objective-multiple-count"],["flush-element"],["append",["unknown",["dialogueDisplayData","totalMissions"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","group-objective-hoverable"],["flush-element"],["text","\\n      "],["open-element","uikit-video",[]],["static-attr","src","/fe/lol-kiwi-hub/mograph/Group_Objective_Card_Hoverable.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","loop",""],["flush-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","group-objective-completed"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a = s(1);
            s(18), e.exports = a.Ember.Component.extend({
                classNames: ["group-objective-reward"],
                layout: s(19),
                isExp: !1,
                rewardIconPath: a.Ember.computed("isExp", (function() {
                    return this.get("isExp") ? a.Ember.String.htmlSafe("/fe/lol-kiwi-hub/images/temp_Exp_Icon.png") : a.Ember.String.htmlSafe("/fe/lol-kiwi-hub/images/temp_Augment_Icon.png")
                })),
                rewardText: a.Ember.computed("isExp", (function() {
                    return this.get("isExp") ? "200" : ""
                }))
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "Qbht1O8Y",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-objective-reward\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-objective-reward\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-objective-reward\\\\index.js\\" "],["text","\\n"],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["rewardIconPath"]]]]],["static-attr","class","group-objective-reward-icon"],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","group-objective-reward-text"],["flush-element"],["append",["unknown",["rewardText"]],false],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a, o = s(1),
                n = (a = s(14)) && a.__esModule ? a : {
                    default: a
                };
            s(21);
            e.exports = o.Ember.Component.extend({
                classNames: ["group-navigation-button-wrapper"],
                classNameBindings: ["doesGroupHaveClaimableRewards:has-claimable-rewards", "isViewedPage:is-viewed-page"],
                layout: s(22),
                kiwiHubService: o.Ember.inject.service("kiwiHub"),
                group: null,
                navigateToGroupIndex: null,
                groupIndex: 0,
                viewedPageIndex: 0,
                isButtonHovered: !1,
                didUpdateAttrs() {
                    const e = this.get("isViewedPage"),
                        t = this._cachedIsViewedPage;
                    e !== t && (e && !t && n.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-button-text-click.ogg"), this._cachedIsViewedPage = e)
                },
                groupProgressionData: o.Ember.computed("kiwiHubService.progressTrackIdToProgressionDataMap", "group", (function() {
                    const e = this.get("group");
                    return this.get("kiwiHubService").getProgressionData(e)
                })),
                doesGroupHaveClaimableRewards: o.Ember.computed.alias("groupProgressionData.doesGroupHaveClaimableRewards"),
                mouseEnter() {
                    this.set("isButtonHovered", !0)
                },
                mouseLeave() {
                    this.set("isButtonHovered", !1)
                },
                backgroundColorStyle: o.Ember.computed("isButtonHovered", "isViewedPage", "group.mainColor", (function() {
                    if (this.get("isButtonHovered") || this.get("isViewedPage")) {
                        const e = this.get("group.displayData.color");
                        return e ? "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")" : "#987531"
                    }
                    return "#00000050"
                })),
                isViewedPage: o.Ember.computed("viewedPageIndex", "groupIndex", (function() {
                    return this.get("viewedPageIndex") === this.get("groupIndex")
                })),
                actions: {
                    navigateToGroup: function() {
                        n.default.playSound("sfx-ui", "/fe/lol-kiwi-hub/audio/sfx-uikit-button-arrowfwd-click.ogg"), this.get("navigateToGroupIndex")(this.get("groupIndex"))
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "Xk/D7f7l",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-navigation-button\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-navigation-button\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-navigation-button\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","group-navigation-button"],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"navigateToGroup"],null],null],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a = s(1),
                o = s(3);
            s(24);
            e.exports = a.Ember.Component.extend({
                classNames: ["group-page"],
                layout: s(25),
                kiwiHubService: a.Ember.inject.service("kiwiHub"),
                group: null,
                viewedPageIndex: null,
                dialogueAdditionalData: null,
                dialogueKey: "",
                displayData: a.Ember.computed.alias("group.displayData"),
                didInsertElement() {
                    this._super(...arguments), this.element.style.setProperty("--group-page-height", o.GROUP_PAGE_HEIGHT + "px")
                },
                didUpdateAttrs() {
                    this._super(...arguments), this._tryUpdatingViewedGroupPage()
                },
                groupProgressionData: a.Ember.computed("kiwiHubService.progressTrackIdToProgressionDataMap", "group", (function() {
                    return this.get("kiwiHubService").getProgressionData(this.get("group"))
                })),
                backgroundImagePath: a.Ember.computed("dialogueKey", "displayData", "isGroupLocked", (function() {
                    return this.get("isGroupLocked") ? this.get("dialogueKey") ? this.get("displayData.lockedDialogueBackgroundImagePath") : this.get("displayData.lockedBackgroundImagePath") : this.get("dialogueKey") ? this.get("displayData.dialogueBackgroundImagePath") : this.get("displayData.backgroundImagePath")
                })),
                isGroupLocked: a.Ember.computed("group", "groupProgressionData.hasUnlockedPrerequisiteBoon", (function() {
                    this.get("groupProgressionData");
                    return this.get("kiwiHubService").isGroupLocked(this.get("group"))
                })),
                hasViewedGroupPageSettingEmberObject: a.Ember.computed("group", (function() {
                    const e = this.get("kiwiHubService");
                    return e.getSettingEmberObject(e.getHasViewedGroupPageKey(this.get("group")))
                })),
                hasViewedGroupPage: a.Ember.computed.alias("hasViewedGroupPageSettingEmberObject.value"),
                _tryUpdatingViewedGroupPage() {
                    if (this.get("viewedPageIndex") !== this.get("group.groupIndex")) return void(this._viewingGroupPageTimeout && (clearTimeout(this._viewingGroupPageTimeout), this._viewingGroupPageTimeout = null));
                    if (!this.get("group.prerequisiteBoon")) return;
                    if (this.get("isGroupLocked")) return;
                    this.get("hasViewedGroupPage") || this._viewingGroupPageTimeout || (this._viewingGroupPageTimeout = setTimeout((() => {
                        const e = this.get("group");
                        this.get("kiwiHubService").setHasViewedGroupPage(e)
                    }), 1e3))
                },
                actions: {
                    changeDialogue(e, t) {
                        this.set("dialogueKey", e), this.set("dialogueAdditionalData", t)
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "bFr3I1oC",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-page\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-page\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-page\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","group-page"],["dynamic-attr","style",["concat",["background-image: url(\'",["unknown",["backgroundImagePath"]],"\');"]]],["flush-element"],["text","\\n  "],["append",["helper",["group-dialogue-screen"],null,[["group","isGroupLocked","dialogueKeyToCharacterDisplayDataMap","dialogueKey","dialogueAdditionalData"],[["get",["group"]],["get",["isGroupLocked"]],["get",["group","dialogueKeyToCharacterDisplayDataMap"]],["get",["dialogueKey"]],["get",["dialogueAdditionalData"]]]]],false],["text","\\n  "],["open-element","div",[]],["static-attr","class","group-header"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-info"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","group-titles"],["flush-element"],["text","\\n        "],["open-element","span",[]],["static-attr","class","group-title"],["flush-element"],["append",["unknown",["displayData","name"]],false],["close-element"],["text","\\n        "],["open-element","span",[]],["static-attr","class","group-subtitle"],["flush-element"],["append",["unknown",["tra","Band_Audition"]],false],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","group-objectives-container"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-objective-cards"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isGroupLocked"]]],null,3,2],["text","    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-objective-header"],["flush-element"],["append",["unknown",["tra","Objective_Header"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-objective-description"],["flush-element"],["append",["unknown",["tra","Objective_Description"]],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["block",["unless"],[["get",["isGroupLocked"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["helper",["group-progress-track"],null,[["group","changeDialogue"],[["get",["group"]],["helper",["action"],[["get",[null]],"changeDialogue"],null]]]],false],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["append",["helper",["group-objective-card"],null,[["objective","groupIndex","dialogueKeyToCharacterDisplayDataMap","changeDialogue"],[["get",["objective"]],["get",["group","groupIndex"]],["get",["group","dialogueKeyToCharacterDisplayDataMap"]],["helper",["action"],[["get",[null]],"changeDialogue"],null]]]],false],["text","\\n"]],"locals":["objective"]},{"statements":[["block",["each"],[["get",["group","ModesObjectiveList"]]],null,1]],"locals":[]},{"statements":[["text","        "],["append",["helper",["group-objective-card"],null,[["isGroupLocked","groupIndex","dialogueKeyToCharacterDisplayDataMap","changeDialogue"],[true,["get",["group","groupIndex"]],["get",["group","dialogueKeyToCharacterDisplayDataMap"]],["helper",["action"],[["get",[null]],"changeDialogue"],null]]]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a = s(1);
            s(27);
            var o, n = (o = s(14)) && o.__esModule ? o : {
                default: o
            };
            e.exports = a.Ember.Component.extend({
                classNames: ["group-progress-track"],
                layout: s(28),
                kiwiHubService: a.Ember.inject.service("kiwiHub"),
                changeDialogue: null,
                group: null,
                groupProgressionData: a.Ember.computed("kiwiHubService.progressTrackIdToProgressionDataMap", "group", (function() {
                    const e = this.get("group");
                    return this.get("kiwiHubService").getProgressionData(e)
                })),
                progressBarStyle: a.Ember.computed("groupProgressionData", (function() {
                    return "height: 500px"
                })),
                progressBarFillStyle: a.Ember.computed("groupProgressionData", "groupProgressionData.counterValue", "groupProgressionData.rewards", "maxProgressBarLength", (function() {
                    const e = this.get("groupProgressionData");
                    if (!e || !e.milestones || !e.rewards) return "";
                    const t = e.rewards,
                        s = e.counterValue,
                        a = t[0].progressRequired,
                        o = t[t.length - 1].progressRequired,
                        n = s >= a && s < o ? .43 : 0,
                        r = (e.counterValue - a + n) / (o - a) * 500;
                    return "height: " + Math.max(0, r) + "px"
                })),
                rewardTrackProgress: a.Ember.computed("groupProgressionData", "groupProgressionData.counterValue", (function() {
                    return {
                        level: this.get("groupProgressionData.counterValue")
                    }
                })),
                actions: {
                    onMilestoneClicked() {
                        const e = this.get("kiwiHubService"),
                            t = this.get("groupProgressionData");
                        e.claimProgressionRewards(t) && (n.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-button-replay-click.ogg"), e.showCompletionVignetteIfApplicable(this.get("group"), t))
                    },
                    changeDialogue(e, t) {
                        this.get("changeDialogue")(e, t)
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "Xdc2iYZR",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-progress-track\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-progress-track\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-progress-track\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["dynamic-attr","class",["concat",["reward-progress-bar ",["unknown",["rewardTrackInstantClass"]]," ",["unknown",["sparseTrackClass"]]]]],["dynamic-attr","style",["unknown",["progressBarStyle"]],null],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","reward-progress-bar-fill current"],["dynamic-attr","style",["unknown",["progressBarFillStyle"]],null],["flush-element"],["text","\\n"],["block",["if"],[["get",["groupProgressionData","counterValue"]]],null,1],["text","    "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","reward-progress-milestones"],["flush-element"],["text","\\n"],["block",["each"],[["get",["groupProgressionData","milestones"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["group-progress-track-milestone"],null,[["rewardTrackProgress","milestone","onMilestoneClicked","changeDialogue"],[["get",["rewardTrackProgress"]],["get",["milestone"]],["helper",["action"],[["get",[null]],"onMilestoneClicked"],null],["helper",["action"],[["get",[null]],"changeDialogue"],null]]]],false],["text","\\n"]],"locals":["milestone"]},{"statements":[["text","            "],["open-element","video",[]],["static-attr","class","reward-progress-bar-fill-animation"],["static-attr","src","/fe/lol-static-assets/videos/reward-track-progress-bar.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","loop",""],["flush-element"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a, o = s(1),
                n = s(3),
                r = (a = s(14)) && a.__esModule ? a : {
                    default: a
                };
            s(30);
            e.exports = o.Ember.Component.extend({
                classNames: ["group-progress-track-milestone"],
                classNameBindings: ["isClaimable:is-claimable", "isCompleted:is-completed"],
                layout: s(31),
                kiwiHubService: o.Ember.inject.service("kiwiHub"),
                milestone: null,
                onMilestoneClicked: null,
                changeDialogue: null,
                rewardTrackProgress: null,
                reward: o.Ember.computed.alias("milestone.reward"),
                isClaimable: o.Ember.computed.equal("milestone.milestoneStatus", n.KIWI_HUB_STATUSES.CLAIMABLE),
                isCompleted: o.Ember.computed.equal("milestone.milestoneStatus", n.KIWI_HUB_STATUSES.COMPLETED),
                rewardTrackItem: o.Ember.computed("reward", "isCompleted", "isClaimable", (function() {
                    const e = {
                        ...this.get("reward")
                    };
                    return this.get("isCompleted") ? e.rewardOptions[0].state = "Selected" : this.get("isClaimable") && (e.rewardOptions[0].state = "Unselected"), e
                })),
                dialogueKey: o.Ember.computed("reward.progressRequired", "isClaimable", "isCompleted", (function() {
                    const e = this.get("isCompleted") || this.get("isClaimable") ? "Completed" : "InProgress";
                    return "Reward" + this.get("reward.progressRequired") + e
                })),
                dialogueDisplayData: o.Ember.computed("reward", "kiwiHubService.rewardGroupIdToRewardsMap", (function() {
                    const e = this.get("kiwiHubService.rewardGroupIdToRewardsMap"),
                        t = this.get("reward");
                    return e && t ? {
                        rewards: e[t.rewardOptions[0].rewardGroupId]
                    } : null
                })),
                click() {
                    const e = this.get("onMilestoneClicked");
                    e && e()
                },
                actions: {
                    onMouseEnter() {
                        const e = this.get("dialogueDisplayData");
                        this.get("changeDialogue")(this.get("dialogueKey"), e), r.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-grid-hover.ogg")
                    },
                    onMouseLeave() {
                        this.get("changeDialogue")()
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "2SZKxqzU",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-progress-track-milestone\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-progress-track-milestone\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\group-progress-track-milestone\\\\index.js\\" "],["text","\\n"],["append",["helper",["reward-item"],null,[["reward","progress","itemMouseEnter","itemMouseLeave","itemClick","animationsEnabled","startIndex","itemIndex"],[["get",["rewardTrackItem"]],["get",["rewardTrackProgress"]],["helper",["action"],[["get",[null]],"onMouseEnter"],null],["helper",["action"],[["get",[null]],"onMouseLeave"],null],["get",["onMilestoneClicked"]],true,1,["get",["reward","progressRequired"]]]]],false],["text","\\n"],["block",["if"],[["get",["isClaimable"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","group-progress-track-milestone-claimable-glow"],["flush-element"],["text","\\n        "],["open-element","uikit-video",[]],["static-attr","src","/fe/lol-static-assets/videos/reward-item-claimable-glow.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","loop",""],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","group-progress-track-milestone-click-to-claim-text"],["flush-element"],["append",["unknown",["tra","Group_Progress_Milestone_Click_To_Claim"]],false],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a = s(1);
            s(33);
            const o = "7e9e169d-883b-4fe6-9fb9-d0c2cb8b86ac";
            e.exports = a.Ember.Component.extend({
                layout: s(34),
                classNames: ["kiwi-lobby-widget"],
                kiwiHubService: a.Ember.inject.service("kiwiHub"),
                currentXP: a.Ember.computed.alias("kiwiHubService.mainProgressTrackCurrentXP"),
                finalMilestoneTotalXPRequired: a.Ember.computed.alias("kiwiHubService.mainProgressTrackFinalMilestone.reward.progressRequired"),
                requiredXPString: a.Ember.computed("kiwiHubService.mainProgressTrackFinalMilestone", (function() {
                    return this.get("kiwiHubService").getRequiredXPString(this.get("kiwiHubService.mainProgressTrackFinalMilestone"))
                })),
                progressBarPercent: a.Ember.computed("currentXP", "finalMilestoneTotalXPRequired", (function() {
                    return 100 * Math.min(this.get("currentXP") / this.get("finalMilestoneTotalXPRequired"), 1)
                })),
                actions: {
                    navigateToKiwiHub() {
                        a.Router.navigateTo(`rcp-fe-lol-event-hub#${o}`, {
                            eventId: o
                        })
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "PnrrcIXN",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\kiwi-lobby-widget\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\kiwi-lobby-widget\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\kiwi-lobby-widget\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-progress-bar"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-progress-bar-image"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-progress-bar-mask"],["dynamic-attr","style",["concat",["width: ",["unknown",["progressBarPercent"]],"%"]]],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-progress-bar-image fill"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-reward"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-progress-details"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-rank-info"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-superstar-title"],["flush-element"],["append",["unknown",["tra","Superstar_Rank"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-milestone-rank"],["flush-element"],["append",["unknown",["kiwiHubService","mainProgressTrackRank"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-xp-display"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-xp-icon"],["flush-element"],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-xp"],["flush-element"],["append",["unknown",["currentXP"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-xp-required"],["flush-element"],["append",["unknown",["requiredXPString"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","kiwi-lobby-widget-button-container"],["flush-element"],["text","\\n    "],["open-element","lol-uikit-flat-button",[]],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"navigateToKiwiHub"],null],null],["flush-element"],["text","\\n"],["block",["if"],[["get",["kiwiHubService","doesKiwiHubHaveClaimableRewards"]]],null,1,0],["text","    "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["unknown",["tra","Lobby_Widget_Visit_Studio"]],false],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["append",["unknown",["tra","Lobby_Widget_Rewards_Ready"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a, o = s(1),
                n = (a = s(14)) && a.__esModule ? a : {
                    default: a
                };
            s(36);
            e.exports = o.Ember.Component.extend({
                classNames: ["main-progress-track"],
                layout: s(37),
                kiwiHubService: o.Ember.inject.service("kiwiHub"),
                mainProgressTrackProgressionData: o.Ember.computed.alias("kiwiHubService.mainProgressTrackProgressionData"),
                mainProgressTrackBarsFillStyle: o.Ember.computed("mainProgressTrackProgressionData", "kiwiHubService.mainProgressTrackCurrentMilestone", "kiwiHubService.mainProgressTrackCurrentXP", (function() {
                    const e = this.get("mainProgressTrackProgressionData");
                    if (!e || !e.milestones) return "width: 0%";
                    const t = this.get("kiwiHubService.mainProgressTrackCurrentXP"),
                        s = this.get("kiwiHubService.mainProgressTrackCurrentMilestone"),
                        a = s.reward.progressRequired;
                    if (t >= a) return "width: 110%";
                    const o = e.milestones.indexOf(s),
                        n = o >= 1 ? e.milestones[o - 1].reward.progressRequired : 0;
                    return "width: " + 100 / e.milestones.length * (o + (t - n) / (a - n)) + "%"
                })),
                actions: {
                    onMilestoneClicked() {
                        this.get("kiwiHubService").claimProgressionRewards(this.get("mainProgressTrackProgressionData")) && n.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-button-replay-click.ogg")
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "tHY/S/py",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-track\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-track\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-track\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","main-progress-track-bars"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","main-progress-track-bars-background"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","main-progress-track-bars-bottom"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","main-progress-track-bars-fill"],["dynamic-attr","style",["unknown",["mainProgressTrackBarsFillStyle"]],null],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","main-progress-track-bars-fill-video"],["flush-element"],["text","\\n            "],["open-element","uikit-video",[]],["static-attr","src","/fe/lol-kiwi-hub/mograph/Summary_Page_Main_Progress_Track_Fill.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","loop",""],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","main-progress-track-bars-bottom fill"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","main-progress-track-milestones"],["flush-element"],["text","\\n"],["block",["each"],[["get",["mainProgressTrackProgressionData","milestones"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["helper",["main-progress-track-milestone"],null,[["milestone","onMilestoneClicked"],[["get",["milestone"]],["helper",["action"],[["get",[null]],"onMilestoneClicked"],null]]]],false],["text","\\n"]],"locals":["milestone"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a, o = s(1),
                n = s(3),
                r = (a = s(14)) && a.__esModule ? a : {
                    default: a
                };
            s(39);
            e.exports = o.Ember.Component.extend({
                classNames: ["main-progress-track-milestone"],
                layout: s(40),
                kiwiHubService: o.Ember.inject.service("kiwiHub"),
                milestone: null,
                onMilestoneClicked: null,
                rewardsDisplayData: o.Ember.computed("milestone.reward", "kiwiHubService", "kiwiHubService.rewardGroupIdToRewardsMap", (function() {
                    const e = this.get("kiwiHubService.rewardGroupIdToRewardsMap")[this.get("milestone.reward").rewardOptions[0].rewardGroupId],
                        t = [];
                    for (const s of e) t.push({
                        rewardIconUrl: s.media.iconUrl,
                        rewardTypeIconPath: this.get("kiwiHubService").getRewardTypeIconPath(s),
                        rewardTitle: s.localizations.title
                    });
                    return t
                })),
                isClaimable: o.Ember.computed.equal("milestone.milestoneStatus", n.KIWI_HUB_STATUSES.CLAIMABLE),
                isCompleted: o.Ember.computed.equal("milestone.milestoneStatus", n.KIWI_HUB_STATUSES.COMPLETED),
                milestoneRankInfo: o.Ember.computed("kiwiHubService.mainProgressTrackRanks", "milestone.reward.threshold", (function() {
                    const e = parseInt(this.get("milestone.reward.threshold"));
                    return this.get("kiwiHubService.mainProgressTrackRanks")[e]
                })),
                superstarStatusText: o.Ember.computed("milestoneRankInfo", (function() {
                    return this.get("tra").formatString("Main_Progress_Milestone_Tooltip_Superstar_Status", {
                        superstarStatus: this.get("milestoneRankInfo").rank
                    })
                })),
                progressRequiredText: o.Ember.computed("milestone.reward.progressRequired", (function() {
                    return this.get("tra").formatString("Main_Progress_Milestone_Tooltip_Progress_Required", {
                        progressRequired: this.get("milestone.reward.progressRequired")
                    })
                })),
                click() {
                    const e = this.get("onMilestoneClicked");
                    e && e()
                },
                actions: {
                    onMouseEnter() {
                        r.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-grid-hover.ogg")
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "zfwiB4G5",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-track-milestone\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-track-milestone\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-track-milestone\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["dynamic-attr","class",["concat",["main-progress-track-milestone-reward-icon ",["helper",["if"],[["get",["isClaimable"]],"is-claimable"],null]," ",["helper",["if"],[["get",["isCompleted"]],"is-completed"],null]]]],["dynamic-attr","onmouseenter",["helper",["action"],[["get",[null]],"onMouseEnter"],null],null],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type"],["bottom","system"]],5],["block",["if"],[["get",["isClaimable"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","main-progress-track-milestone-gift-icon-glow-container"],["flush-element"],["text","\\n            "],["open-element","uikit-video",[]],["static-attr","src","/fe/lol-kiwi-hub/mograph/Summary_Page_Gift_Icon_Glow.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","loop",""],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-divider"],["flush-element"],["close-element"],["text","\\n                "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-description"],["flush-element"],["append",["unknown",["milestoneRankInfo","additionalTooltip"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","                "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-reward-details"],["flush-element"],["text","\\n                    "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["reward","rewardTypeIconPath"]]]]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-reward-type-icon"],["flush-element"],["close-element"],["text","\\n                    "],["open-element","div",[]],["flush-element"],["append",["unknown",["reward","rewardTitle"]],false],["close-element"],["text","\\n                "],["close-element"],["text","\\n"]],"locals":["reward"]},{"statements":[["text","                "],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["reward","rewardIconUrl"]]]]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-reward-icon"],["flush-element"],["close-element"],["text","\\n"]],"locals":["reward"]},{"statements":[["text","            "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-claimed"],["flush-element"],["append",["unknown",["tra","Main_Progress_Milestone_Tooltip_Claimed"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isCompleted"]]],null,4],["text","            "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-superstar-status"],["flush-element"],["append",["unknown",["superstarStatusText"]],false],["close-element"],["text","\\n            "],["open-element","div",[]],["dynamic-attr","class",["concat",["kiwi-hub-main-progress-track-milestone-tooltip-progress-required ",["helper",["unless"],[["get",["isCompleted"]],"in-progress"],null]]]],["flush-element"],["append",["unknown",["progressRequiredText"]],false],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-divider"],["flush-element"],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-reward-background"],["flush-element"],["text","\\n"],["block",["each"],[["get",["rewardsDisplayData"]]],null,3],["text","            "],["close-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","kiwi-hub-main-progress-track-milestone-tooltip-divider"],["flush-element"],["close-element"],["text","\\n"],["block",["each"],[["get",["rewardsDisplayData"]]],null,2],["block",["if"],[["get",["milestoneRankInfo","additionalTooltip"]]],null,1],["text","        "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a, o = s(1),
                n = (a = s(14)) && a.__esModule ? a : {
                    default: a
                };
            s(42);
            const r = "lastSeenRankOnKiwiHub";
            e.exports = o.Ember.Component.extend({
                classNames: ["main-progress-rank-tracker"],
                classNameBindings: ["showsInGroupPagesOnly:shows-in-group-pages-only", "isHidden:hidden"],
                layout: s(43),
                kiwiHubService: o.Ember.inject.service("kiwiHub"),
                navigateToGroupIndex: null,
                mainProgressTrackRank: null,
                displayedMainProgressTrackRank: null,
                didUpdateAttrs() {
                    this._super(...arguments);
                    const e = this.get("mainProgressTrackRank"),
                        t = this.get("displayedMainProgressTrackRank"),
                        s = this.get("lastSeenRankOnKiwiHub");
                    if (!t) {
                        if (!s) return this.set("displayedMainProgressTrackRank", e), void this.get("kiwiHubService").changeSettingValue(r, e);
                        if (e === s) return void this.set("displayedMainProgressTrackRank", e);
                        this.set("displayedMainProgressTrackRank", s)
                    }
                    if (e !== s) {
                        this.element.querySelector(".main-progress-rank-tracker-rank-up-video").play(), n.default.playSound("sfx-ui", "/fe/lol-kiwi-hub/audio/sfx-k3-superstar-rank-up.ogg");
                        const t = e.length > 5 ? 1e3 : 930;
                        window.setTimeout((() => {
                            this.set("displayedMainProgressTrackRank", e)
                        }), t), this.get("kiwiHubService").changeSettingValue(r, e)
                    }
                },
                lastSeenRankOnKiwiHubSettingEmberObject: o.Ember.computed("kiwiHubService", (function() {
                    return this.get("kiwiHubService").getSettingEmberObject(r)
                })),
                lastSeenRankOnKiwiHub: o.Ember.computed.alias("lastSeenRankOnKiwiHubSettingEmberObject.value"),
                requiredXPString: o.Ember.computed("kiwiHubService.mainProgressTrackCurrentMilestone", (function() {
                    return this.get("kiwiHubService").getRequiredXPString(this.get("kiwiHubService.mainProgressTrackCurrentMilestone"))
                })),
                click() {
                    this.get("navigateToGroupIndex")(0), n.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-button-pageup-click.ogg")
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "CNUy3ExG",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-rank-tracker\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-rank-tracker\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\main-progress-rank-tracker\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-info"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-description"],["flush-element"],["append",["unknown",["tra","Superstar_Rank"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-rank"],["flush-element"],["append",["unknown",["displayedMainProgressTrackRank"]],false],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-xp-display"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-xp-counter-icon"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-xp"],["flush-element"],["append",["unknown",["kiwiHubService","mainProgressTrackCurrentXP"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-xp-required"],["flush-element"],["append",["unknown",["requiredXPString"]],false],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-xp-info-icon"],["flush-element"],["text","\\n"],["block",["uikit-tooltip"],null,[["tooltipPosition","type"],["bottom","system"]],0],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-rank-up-video-container"],["flush-element"],["text","\\n  "],["open-element","video",[]],["static-attr","class","main-progress-rank-tracker-rank-up-video"],["static-attr","src","/fe/lol-kiwi-hub/mograph/Main_Progress_Track_Rank_Up.webm"],["flush-element"],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-xp-info-tooltip"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-xp-info-title"],["flush-element"],["append",["unknown",["tra","Superstar_Fame_Tooltip_Title"]],false],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","main-progress-rank-tracker-xp-info-text"],["flush-element"],["append",["helper",["sanitize"],[["get",["tra","Superstar_Fame_Tooltip_Description"]]],null],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a = s(1);
            s(45), e.exports = a.Ember.Component.extend({
                classNames: ["summary-page"],
                layout: s(46),
                kiwiHubService: a.Ember.inject.service("kiwiHub"),
                viewedPageIndex: null,
                groups: a.Ember.computed.alias("kiwiHubService.groups"),
                navigateToGroupIndex: null
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "Iq2+RG1x",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\summary-page\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\summary-page\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\summary-page\\\\index.js\\" "],["text","\\n"],["append",["unknown",["main-progress-track"]],false],["text","\\n"],["open-element","div",[]],["static-attr","class","summary-page-groups"],["flush-element"],["text","\\n"],["block",["each"],[["get",["groups"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["helper",["summary-page-group"],null,[["group","navigateToGroupIndex","viewedPageIndex"],[["get",["group"]],["get",["navigateToGroupIndex"]],["get",["viewedPageIndex"]]]]],false],["text","\\n"]],"locals":["group"]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a, o = s(1),
                n = s(3),
                r = (a = s(14)) && a.__esModule ? a : {
                    default: a
                };
            s(48);
            e.exports = o.Ember.Component.extend({
                classNames: ["summary-page-group"],
                classNameBindings: ["isGoldTier:gold-tier", "isPlatinumTier:platinum-tier"],
                layout: s(49),
                kiwiHubService: o.Ember.inject.service("kiwiHub"),
                group: null,
                navigateToGroupIndex: null,
                viewedPageIndex: null,
                didRender() {
                    if (this._super(...arguments), 0 !== this.get("viewedPageIndex")) return;
                    const e = (new Date).getTime();
                    if (this.get("shouldShowGroupUnlockVFX") && (!this._lastShowGroupUnlockTime || e - this._lastShowGroupUnlockTime > 3e3)) {
                        this.element.querySelector(".summary-page-group-unlock-video").play(), this._lastShowGroupUnlockTime = e;
                        if (this.get("kiwiHubService").isMostRecentUnlockedAndUnviewedGroup(this.get("group"))) {
                            const e = `/fe/lol-kiwi-hub/audio/sfx-k3-band-unlock-group${this.get("group.groupIndex")}.ogg`;
                            r.default.playSound("sfx-ui", e)
                        }
                    }
                },
                groupProgressionData: o.Ember.computed("kiwiHubService.progressTrackIdToProgressionDataMap", "group", (function() {
                    const e = this.get("group");
                    return this.get("kiwiHubService").getProgressionData(e)
                })),
                groupTier: o.Ember.computed("groupProgressionData", "groupProgressionData.counterValue", (function() {
                    return this.get("kiwiHubService").getGroupTier(this.get("groupProgressionData"))
                })),
                isGoldTier: o.Ember.computed.equal("groupTier", n.KIWI_HUB_TIERS.GOLD),
                isPlatinumTier: o.Ember.computed.equal("groupTier", n.KIWI_HUB_TIERS.PLATINUM),
                doesGroupHaveClaimableRewards: o.Ember.computed.alias("groupProgressionData.doesGroupHaveClaimableRewards"),
                isLocked: o.Ember.computed("group", "groupProgressionData.hasUnlockedPrerequisiteBoon", (function() {
                    return this.get("kiwiHubService").isGroupLocked(this.get("group"))
                })),
                hasViewedGroupPageSettingEmberObject: o.Ember.computed("group", (function() {
                    const e = this.get("kiwiHubService");
                    return e.getSettingEmberObject(e.getHasViewedGroupPageKey(this.get("group")))
                })),
                hasViewedGroupPage: o.Ember.computed.alias("hasViewedGroupPageSettingEmberObject.value"),
                shouldShowGroupUnlockVFX: o.Ember.computed("group", "isLocked", "hasViewedGroupPage", "kiwiHubService.kiwiHubSettingsReady", (function() {
                    return this.get("group.prerequisiteBoon") && !this.get("isLocked") && !this.get("hasViewedGroupPage") && this.get("kiwiHubService.kiwiHubSettingsReady")
                })),
                click() {
                    this.get("navigateToGroupIndex")(this.get("group.groupIndex")), r.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-button-gold-click.ogg")
                },
                actions: {
                    onMouseEnter() {
                        r.default.playSound("sfx-ui", "/fe/lol-static-assets/sounds/sfx-uikit-button-generic-hover.ogg")
                    }
                }
            })
        }, (e, t, s) => {
            "use strict";
            s.r(t)
        }, (e, t, s) => {
            const a = s(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "kDrrNoY2",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\summary-page-group\\\\layout.hbs\\" style-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\summary-page-group\\\\style.styl\\" js-path=\\"T:\\\\vfs\\\\mount\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-kiwi-hub\\\\src\\\\app\\\\components\\\\summary-page-group\\\\index.js\\" "],["text","\\n"],["open-element","div",[]],["static-attr","class","summary-page-group-wrapper"],["dynamic-attr","style",["concat",["background-image:url(\'",["unknown",["group","displayData","summaryPageCardImagePath"]],"\')"]]],["dynamic-attr","onmouseenter",["helper",["action"],[["get",[null]],"onMouseEnter"],null],null],["flush-element"],["text","\\n  "],["append",["helper",["group-emblem"],null,[["group","groupTier"],[["get",["group"]],["get",["groupTier"]]]]],false],["text","\\n  "],["open-element","div",[]],["static-attr","class","summary-page-group-spacer"],["flush-element"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","summary-page-group-name"],["flush-element"],["append",["unknown",["group","displayData","name"]],false],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["block",["if"],[["get",["doesGroupHaveClaimableRewards"]]],null,3],["block",["if"],[["get",["isLocked"]]],null,2,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","summary-page-group-video-container"],["flush-element"],["text","\\n    "],["open-element","video",[]],["static-attr","class","summary-page-group-unlock-video"],["dynamic-attr","src",["concat",["/fe/lol-kiwi-hub/mograph/Summary_Page_Unlock_Group",["unknown",["group","groupIndex"]],".webm"]]],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["shouldShowGroupUnlockVFX"]]],null,0]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","summary-page-group-locked-overlay"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","summary-page-group-locked-icon"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","summary-page-group-gift-icon"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","summary-page-group-gift-icon-glow-container"],["flush-element"],["text","\\n      "],["open-element","uikit-video",[]],["static-attr","src","/fe/lol-kiwi-hub/mograph/Summary_Page_Gift_Icon_Glow.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","loop",""],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","summary-page-group-video-container"],["flush-element"],["text","\\n    "],["open-element","uikit-video",[]],["static-attr","src","/fe/lol-kiwi-hub/mograph/Summary_Page_Group_Claimable_Rewards.webm"],["static-attr","preload",""],["static-attr","autoplay",""],["static-attr","loop",""],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }, (e, t, s) => {
            "use strict";
            var a = s(1),
                o = s(3);
            const n = (0, a.emberDataBinding)({
                    Ember: a.Ember,
                    websocket: a.socket,
                    logPrefix: "kiwi-hub-service"
                }),
                r = "/lol-settings/v2/account/LCUPreferences/lol-kiwi-hub";
            e.exports = a.Ember.Service.extend(n, {
                progressTrackIdToProgressionDataMap: null,
                missionIdToMissionDataMap: null,
                rewardGroupIdToGrantMap: null,
                doesKiwiHubHaveClaimableRewards: !1,
                kiwiHubSettingsReady: !1,
                groups: null,
                mainProgressTrackId: null,
                progressTrackIds: null,
                prerequisiteBoonIdToUnlockedProgressTrackIdMap: null,
                init() {
                    this._super(...arguments), this.db = a.dataBinding.bindTo(a.socket), this.initStaticData().then((() => {
                        this.initObservedData()
                    }))
                },
                initStaticData() {
                    return Promise.all([this.db.get("/lol-game-data/assets/v1/kiwi-hub.json")]).then((e => {
                        const t = e[0];
                        if (!t || !t[0]) return Promise.reject("Kiwi Hub failed to load static data");
                        const s = t[0].modesObjectiveGroupList.ModesObjectiveGroups;
                        this._initGroups(s);
                        const o = t[0].progressTrack.id,
                            n = [o];
                        for (const e of s) n.push(e.displayData.progressTrack.id);
                        this.set("progressTrackIdToProgressionDataMap", a.Ember.Object.create());
                        for (const e of n) this._initProgressionData(e);
                        this.set("mainProgressTrackRanks", t[0].mainProgressMilestoneRanks), this.set("mainProgressTrackId", o), this.set("progressTrackIds", n)
                    }))
                },
                initObservedData() {
                    this.set("accountSettings", a.Ember.Object.create()), this.db.observe("/lol-settings/v2/ready", this, (e => {
                        this.db.observe(r, this, (e => {
                            if (e && e.data)
                                for (const t of Object.keys(e.data)) {
                                    const s = e.data[t],
                                        a = this.getSettingEmberObject(t);
                                    a.get("value") !== s && a.set("value", s)
                                }
                            this.set("kiwiHubSettingsReady", !0)
                        }))
                    })), this.set("rewardGroupIdToGrantMap", a.Ember.Object.create()), this.db.observe("/lol-missions/v1/missions", this, (e => {
                        if (e && e.length > 0)
                            for (const t of e) this._updateMissionData(t)
                    })), this.set("rewardGroupIdToRewardsMap", {}), this.db.observe("/lol-rewards/v1/groups", this, (e => {
                        if (e)
                            for (const t of e) this.get("rewardGroupIdToRewardsMap")[t.id] = t.rewards
                    })), this.db.observe("/lol-rewards/v1/grants", this, (e => {
                        if (e) {
                            for (const t of e) t && t.info && t.info.rewardGroupId && this.get("rewardGroupIdToGrantMap").set(t.info.rewardGroupId, t);
                            this._updateAllProgressionData()
                        }
                    }));
                    for (const e of this.get("progressTrackIds")) this.db.observe(`/lol-progression/v1/groups/${e}/instanceData`, this, (t => {
                        const s = t && t.counters && t.counters.length > 0 ? t.counters[0].counterValue : 0;
                        this.get(`progressTrackIdToProgressionDataMap.${e}`).set("counterValue", s), this._updateProgressionMilestones(e)
                    })), this.db.get(`/lol-reward-track/register/${e}`), this.db.observe(`/lol-reward-track/${e}/reward-track/items`, this, (t => {
                        this.get(`progressTrackIdToProgressionDataMap.${e}`).set("rewards", t), this._updateProgressionMilestones(e)
                    }))
                },
                mainProgressTrackProgressionData: a.Ember.computed("progressTrackIdToProgressionDataMap", "mainProgressTrackId", (function() {
                    return this.get(`progressTrackIdToProgressionDataMap.${this.get("mainProgressTrackId")}`)
                })),
                mainProgressTrackCurrentMilestone: a.Ember.computed("mainProgressTrackProgressionData.milestones", (function() {
                    const e = this.get("mainProgressTrackProgressionData.milestones");
                    return e && 0 !== e.length ? e.find((e => e.milestoneStatus === o.KIWI_HUB_STATUSES.IN_PROGRESS)) || e[e.length - 1] : null
                })),
                mainProgressTrackFinalMilestone: a.Ember.computed("mainProgressTrackProgressionData.milestones", (function() {
                    const e = this.get("mainProgressTrackProgressionData.milestones");
                    return e && 0 !== e.length ? e[e.length - 1] : null
                })),
                mainProgressTrackRank: a.Ember.computed("mainProgressTrackRanks", "mainProgressTrackCurrentMilestone", (function() {
                    const e = this.get("mainProgressTrackCurrentMilestone");
                    if (!e) return "";
                    const t = this.get("mainProgressTrackRanks"),
                        s = t.length - 1,
                        a = "COMPLETED" === e.milestoneStatus ? s : parseInt(e.reward.threshold) - 1;
                    return t[a] ? t[a].rank : ""
                })),
                mainProgressTrackCurrentXP: a.Ember.computed.alias("mainProgressTrackProgressionData.counterValue"),
                changeSettingValue(e, t) {
                    const s = this.getSettingEmberObject(e);
                    s.get("value") !== t && (s.set("value", t), this.db.patch(r, {
                        schemaVersion: 1,
                        data: {
                            [e]: t
                        }
                    }))
                },
                getSettingEmberObject(e) {
                    if (!e) return null;
                    const t = this.get(`accountSettings.${e}`);
                    if (t) return t;
                    const s = a.Ember.Object.create();
                    return this.get("accountSettings").set(e, s), s
                },
                getRequiredXPString(e) {
                    return e ? this.get("tra").formatString("Counter_Required_Progress", {
                        requiredProgress: e.reward.progressRequired
                    }) : ""
                },
                formatProgressString(e, t) {
                    return null == e || null == t ? "" : this.get("tra").formatString("Counter_Progress", {
                        currentCounterValue: e,
                        totalCounterValue: t
                    })
                },
                _checkToUpdateDoesKiwiHubHaveClaimableRewards() {
                    const e = this.get("doesKiwiHubHaveClaimableRewards"),
                        t = this.get("progressTrackIdToProgressionDataMap");
                    if (t) {
                        for (const s of Object.keys(t))
                            if (this.get(`progressTrackIdToProgressionDataMap.${s}.doesGroupHaveClaimableRewards`)) return void(e || this.set("doesKiwiHubHaveClaimableRewards", !0));
                        e && this.set("doesKiwiHubHaveClaimableRewards", !1)
                    } else e && this.set("doesKiwiHubHaveClaimableRewards", !1)
                },
                getProgressionData(e) {
                    const t = e && e.displayData && e.displayData.progressTrack ? e.displayData.progressTrack.id : null,
                        s = this.get("progressTrackIdToProgressionDataMap");
                    return t && s ? s.get(t) : null
                },
                showCompletionVignetteIfApplicable(e, t) {
                    if (t.milestones[t.milestones.length - 1].milestoneStatus === o.KIWI_HUB_STATUSES.IN_PROGRESS) return;
                    const s = `hasSeenCompletionVignetteGroup${e.groupIndex}`;
                    this.getSettingEmberObject(s).value || (this._showCompletionVignette(e), this.changeSettingValue(s, !0))
                },
                claimProgressionRewards(e) {
                    const t = [];
                    for (const s of e.milestones) s.milestoneStatus === o.KIWI_HUB_STATUSES.CLAIMABLE && t.push(this._convertMilestoneToGrantSelectionRequest(s));
                    return t.length > 0 && (this.db.post("/lol-rewards/v1/select-bulk", t), !0)
                },
                isGroupLocked(e) {
                    if (e.locked) return !0;
                    if (!e.prerequisiteBoon) return !1;
                    return !this.getProgressionData(e).get("hasUnlockedPrerequisiteBoon")
                },
                getGroupTier: e => e.counterValue >= o.KIWI_HUB_PROGRESSION_FINAL_THRESHOLD ? o.KIWI_HUB_TIERS.PLATINUM : e.counterValue >= 4 ? o.KIWI_HUB_TIERS.GOLD : o.KIWI_HUB_TIERS.DEFAULT,
                getRewardTypeTRA(e) {
                    const t = o.FULFILLMENT_SOURCE_TO_REWARD_TYPE_TRA[e.fulfillmentSource];
                    if (t) return t;
                    const s = o.ITEM_TYPE_TO_REWARD_TYPE_TRA[e.itemType];
                    return s || "tra.Reward_Type_Currency"
                },
                setHasViewedGroupPage(e) {
                    this.changeSettingValue(this.getHasViewedGroupPageKey(e), !0)
                },
                getHasViewedGroupPageKey: e => `HasViewedGroup${e.groupIndex}Page`,
                getRewardTypeIconPath(e) {
                    const t = this.getRewardTypeTRA(e),
                        s = o.REWARD_TYPE_TRA_TO_TYPE_ICON_PATH[t];
                    return s || "/fe/lol-kiwi-hub/images/Hat_Type_Icon.png"
                },
                isMostRecentUnlockedAndUnviewedGroup(e) {
                    const t = this.getSettingEmberObject(this.getHasViewedGroupPageKey(e)).value;
                    if (this.isGroupLocked(e) && !t) return !1;
                    const s = this.get("groups");
                    for (let t = e.groupIndex; t < s.length; ++t) {
                        const e = s[t];
                        if (this.isGroupLocked(e)) return !0;
                        if (!this.getSettingEmberObject(this.getHasViewedGroupPageKey(e)).value) return !1
                    }
                    return !0
                },
                _convertMilestoneToGrantSelectionRequest(e) {
                    const t = e.reward.rewardOptions[0].rewardGroupId,
                        s = this.get(`rewardGroupIdToGrantMap.${t}`),
                        a = [];
                    for (const e of s.rewardGroup.rewards) a.push(e.id);
                    return {
                        grantId: s.info.id,
                        rewardGroupId: t,
                        selections: a
                    }
                },
                _initAndReturnObjectiveMissionsData(e) {
                    const t = [];
                    for (const s of e.missions) {
                        const e = a.Ember.Object.create();
                        this.get("missionIdToMissionDataMap").set(s.id, e), t.push(e)
                    }
                    return e.nextLevelObjective ? t.concat(this._initAndReturnObjectiveMissionsData(e.nextLevelObjective)) : t
                },
                _initProgressionData(e) {
                    this.get("progressTrackIdToProgressionDataMap").set(e, a.Ember.Object.create())
                },
                _updateProgressionMilestones(e) {
                    const t = this.get(`progressTrackIdToProgressionDataMap.${e}.rewards`),
                        s = this.get(`progressTrackIdToProgressionDataMap.${e}.counterValue`) || 0;
                    if (!t) return;
                    const a = [];
                    let n = !1;
                    for (const e of t) {
                        const t = this._getGroupMilestoneStatus(e, s);
                        t === o.KIWI_HUB_STATUSES.CLAIMABLE && (n = !0), t !== o.KIWI_HUB_STATUSES.CLAIMABLE && t !== o.KIWI_HUB_STATUSES.COMPLETED || this._unlockGroupsForReward(e);
                        e.rewardOptions[0] && e.rewardOptions[0].thumbIconPath && a.push({
                            reward: e,
                            milestoneStatus: t
                        })
                    }
                    this.get(`progressTrackIdToProgressionDataMap.${e}`).set("milestones", a), this.get(`progressTrackIdToProgressionDataMap.${e}`).set("doesGroupHaveClaimableRewards", n), this._checkToUpdateDoesKiwiHubHaveClaimableRewards()
                },
                _updateAllProgressionData() {
                    const e = this.get("progressTrackIdToProgressionDataMap");
                    if (e)
                        for (const t of Object.keys(e)) this._updateProgressionMilestones(t)
                },
                _unlockGroupsForReward(e) {
                    for (const t of e.rewardOptions) {
                        const e = this.get("prerequisiteBoonIdToUnlockedProgressTrackIdMap")[t.rewardItemId];
                        if (!e) continue;
                        const s = this.get(`progressTrackIdToProgressionDataMap.${e}`);
                        s.get("hasUnlockedPrerequisiteBoon") || s.set("hasUnlockedPrerequisiteBoon", !0)
                    }
                },
                _getGroupMilestoneStatus(e, t) {
                    if (!(e && e.progressRequired && e.rewardOptions && e.rewardOptions[0] && e.rewardOptions[0].rewardGroupId)) return o.KIWI_HUB_STATUSES.IN_PROGRESS;
                    if (e.progressRequired > t) return o.KIWI_HUB_STATUSES.IN_PROGRESS;
                    {
                        const t = e.rewardOptions[0].rewardGroupId,
                            s = this.get(`rewardGroupIdToGrantMap.${t}`);
                        return s && s.info && "PENDING_SELECTION" === s.info.status && s.rewardGroup && s.rewardGroup.rewards ? o.KIWI_HUB_STATUSES.CLAIMABLE : o.KIWI_HUB_STATUSES.COMPLETED
                    }
                },
                _updateMissionData(e) {
                    const t = this.get(`missionIdToMissionDataMap.${e.id}`);
                    t && t.set("status", e.status)
                },
                _createDialogueKeyToCharacterDisplayDataMap(e) {
                    const t = {};
                    for (const s of e.displayData.characters)
                        for (const e of s.dialogueData) t[e.key] = {
                            name: s.name,
                            fullImagePath: s.fullImagePath,
                            iconPath: s.iconPath,
                            dialogue: e.dialogue
                        };
                    return t
                },
                _initGroups(e) {
                    const t = {};
                    this.set("missionIdToMissionDataMap", a.Ember.Object.create());
                    const s = [];
                    let o = 1;
                    for (const n of e) {
                        n.prerequisiteBoon && (t[n.prerequisiteBoon.id] = n.displayData.progressTrack.id);
                        const e = [];
                        let r = 1;
                        for (const t of n.ModesObjectiveList) {
                            const s = {
                                ...t,
                                missionsData: a.Ember.A(this._initAndReturnObjectiveMissionsData(t)),
                                objectiveIndex: r
                            };
                            e.push(s), ++r
                        }
                        const i = {
                            ...n,
                            ModesObjectiveList: e,
                            dialogueKeyToCharacterDisplayDataMap: this._createDialogueKeyToCharacterDisplayDataMap(n),
                            groupIndex: o
                        };
                        ++o, s.push(i)
                    }
                    this.set("prerequisiteBoonIdToUnlockedProgressTrackIdMap", t), this.set("groups", s)
                },
                _showCompletionVignette(e) {
                    a.UIKit.getVignetteCelebrationManager().add({
                        type: "VignetteCelebration",
                        data: {
                            header: {
                                title: this.get("tra").formatString("Completed_Celebration_Title", {
                                    groupName: e.displayData.name
                                })
                            },
                            nextButtonText: this.get("tra.Completed_Celebration_Next_Button_Text"),
                            backgroundImageUrl: e.displayData.completionCelebrationBackgroundImagePath
                        },
                        customClassName: "kiwi-hub-vignette",
                        height: "LARGE",
                        timing: "INFINITE"
                    })
                }
            })
        }, (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = class {
                constructor(e) {
                    this.privateAPI = e
                }
                show(e) {
                    return this.privateAPI.show(e)
                }
                hide() {
                    return this.privateAPI.hide()
                }
                getKiwiHubModules() {
                    return {
                        KiwiHubService: s(50),
                        KiwiLobbyWidgetComponent: s(32)
                    }
                }
                getProgressionState() {
                    return this.privateAPI.getProgressionState()
                }
                subscribe(e) {
                    this.privateAPI.subscribe(e)
                }
                unsubscribe(e) {
                    this.privateAPI.unsubscribe(e)
                }
            }
        }],
        t = {};

    function s(a) {
        var o = t[a];
        if (void 0 !== o) return o.exports;
        var n = t[a] = {
            exports: {}
        };
        return e[a](n, n.exports, s), n.exports
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
        const a = "rcp-fe-lol-kiwi-hub",
            o = window.testsSandboxDoc || document.currentScript.ownerDocument;
        const n = window.getPluginAnnounceEventName(a);
        o.addEventListener(n, (function(e) {
            (0, e.registrationHandler)((e => t.default.init(e, {
                Audio: e => e.get("rcp-fe-audio"),
                ComponentFactory: e => e.get("rcp-fe-common-libs").getComponentFactory(),
                dataBinding: e => e.get("rcp-fe-common-libs").getDataBinding(a),
                emberDataBinding: e => e.get("rcp-fe-ember-libs").getEmberDataBinding(a),
                Ember: e => e.get("rcp-fe-ember-libs").getEmber(),
                emberL10n: e => e.get("rcp-fe-ember-libs").getEmberL10n("1"),
                logger: e => e.get("rcp-fe-common-libs").logging.create(a),
                Navigation: e => e.get("rcp-fe-lol-navigation"),
                socket: e => e.getSocket(),
                lockAndLoadPlugin: e => e.get("rcp-fe-lol-lock-and-load"),
                RewardTrackerEmberComponents: e => e.get("rcp-fe-lol-shared-components").getRewardTrackerEmberComponents(),
                Router: e => e.get("rcp-fe-lol-shared-components").getApi_Router(),
                UIKit: e => e.get("rcp-fe-lol-uikit"),
                Viewport: e => e.get("rcp-fe-lol-shared-components").getApi_Viewport(),
                VignetteCelebrationManager: e => e.get("rcp-fe-lol-uikit").getVignetteCelebrationManager()
            }).then((() => {
                const s = e.get("rcp-fe-lol-l10n").tra().overlay("/fe/lol-l10n/trans.json").overlay("/fe/lol-kiwi-hub/trans.json"),
                    a = t.default.emberL10n(t.default.Ember, s);
                return t.default.add({
                    emberApplicationFactory: e.get("rcp-fe-ember-libs").getEmberApplicationFactory(),
                    tra: s,
                    traService: a
                })
            })).then((() => {
                const e = new(0, s(2).default);
                return new(0, s(51).default)(e)
            }))))
        }), {
            once: !0
        })
    })()
})();
//# sourceMappingURL=rcp-fe-lol-kiwi-hub.js.map