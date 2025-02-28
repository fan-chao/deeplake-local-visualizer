(() => {
	var e = {
			880: function(e) {
				e.exports = function(e) {
					var t = {};

					function n(r) {
						if (t[r]) return t[r].exports;
						var s = t[r] = {
							i: r,
							l: !1,
							exports: {}
						};
						return e[r].call(s.exports, s, s.exports, n), s.l = !0, s.exports
					}
					return n.m = e, n.c = t, n.d = function(e, t, r) {
						n.o(e, t) || Object.defineProperty(e, t, {
							enumerable: !0,
							get: r
						})
					}, n.r = function(e) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
							value: "Module"
						}), Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}, n.t = function(e, t) {
						if (1 & t && (e = n(e)), 8 & t) return e;
						if (4 & t && "object" == typeof e && e && e.__esModule) return e;
						var r = Object.create(null);
						if (n.r(r), Object.defineProperty(r, "default", {
								enumerable: !0,
								value: e
							}), 2 & t && "string" != typeof e)
							for (var s in e) n.d(r, s, function(t) {
								return e[t]
							}.bind(null, s));
						return r
					}, n.n = function(e) {
						var t = e && e.__esModule ? function() {
							return e.default
						} : function() {
							return e
						};
						return n.d(t, "a", t), t
					}, n.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}, n.p = "", n(n.s = 90)
				}({
					17: function(e, t, n) {
						"use strict";
						t.__esModule = !0, t.default = void 0;
						var r = n(18),
							s = function() {
								function e() {}
								return e.getFirstMatch = function(e, t) {
									var n = t.match(e);
									return n && n.length > 0 && n[1] || ""
								}, e.getSecondMatch = function(e, t) {
									var n = t.match(e);
									return n && n.length > 1 && n[2] || ""
								}, e.matchAndReturnConst = function(e, t, n) {
									if (e.test(t)) return n
								}, e.getWindowsVersionName = function(e) {
									switch (e) {
										case "NT":
											return "NT";
										case "XP":
										case "NT 5.1":
											return "XP";
										case "NT 5.0":
											return "2000";
										case "NT 5.2":
											return "2003";
										case "NT 6.0":
											return "Vista";
										case "NT 6.1":
											return "7";
										case "NT 6.2":
											return "8";
										case "NT 6.3":
											return "8.1";
										case "NT 10.0":
											return "10";
										default:
											return
									}
								}, e.getMacOSVersionName = function(e) {
									var t = e.split(".").splice(0, 2).map((function(e) {
										return parseInt(e, 10) || 0
									}));
									if (t.push(0), 10 === t[0]) switch (t[1]) {
										case 5:
											return "Leopard";
										case 6:
											return "Snow Leopard";
										case 7:
											return "Lion";
										case 8:
											return "Mountain Lion";
										case 9:
											return "Mavericks";
										case 10:
											return "Yosemite";
										case 11:
											return "El Capitan";
										case 12:
											return "Sierra";
										case 13:
											return "High Sierra";
										case 14:
											return "Mojave";
										case 15:
											return "Catalina";
										default:
											return
									}
								}, e.getAndroidVersionName = function(e) {
									var t = e.split(".").splice(0, 2).map((function(e) {
										return parseInt(e, 10) || 0
									}));
									if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
								}, e.getVersionPrecision = function(e) {
									return e.split(".").length
								}, e.compareVersions = function(t, n, r) {
									void 0 === r && (r = !1);
									var s = e.getVersionPrecision(t),
										i = e.getVersionPrecision(n),
										a = Math.max(s, i),
										o = 0,
										l = e.map([t, n], (function(t) {
											var n = a - e.getVersionPrecision(t),
												r = t + new Array(n + 1).join(".0");
											return e.map(r.split("."), (function(e) {
												return new Array(20 - e.length).join("0") + e
											})).reverse()
										}));
									for (r && (o = a - Math.min(s, i)), a -= 1; a >= o;) {
										if (l[0][a] > l[1][a]) return 1;
										if (l[0][a] === l[1][a]) {
											if (a === o) return 0;
											a -= 1
										} else if (l[0][a] < l[1][a]) return -1
									}
								}, e.map = function(e, t) {
									var n, r = [];
									if (Array.prototype.map) return Array.prototype.map.call(e, t);
									for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
									return r
								}, e.find = function(e, t) {
									var n, r;
									if (Array.prototype.find) return Array.prototype.find.call(e, t);
									for (n = 0, r = e.length; n < r; n += 1) {
										var s = e[n];
										if (t(s, n)) return s
									}
								}, e.assign = function(e) {
									for (var t, n, r = e, s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++) i[a - 1] = arguments[a];
									if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
									var o = function() {
										var e = i[t];
										"object" == typeof e && null !== e && Object.keys(e).forEach((function(t) {
											r[t] = e[t]
										}))
									};
									for (t = 0, n = i.length; t < n; t += 1) o();
									return e
								}, e.getBrowserAlias = function(e) {
									return r.BROWSER_ALIASES_MAP[e]
								}, e.getBrowserTypeByAlias = function(e) {
									return r.BROWSER_MAP[e] || ""
								}, e
							}();
						t.default = s, e.exports = t.default
					},
					18: function(e, t, n) {
						"use strict";
						t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
							"Amazon Silk": "amazon_silk",
							"Android Browser": "android",
							Bada: "bada",
							BlackBerry: "blackberry",
							Chrome: "chrome",
							Chromium: "chromium",
							Electron: "electron",
							Epiphany: "epiphany",
							Firefox: "firefox",
							Focus: "focus",
							Generic: "generic",
							"Google Search": "google_search",
							Googlebot: "googlebot",
							"Internet Explorer": "ie",
							"K-Meleon": "k_meleon",
							Maxthon: "maxthon",
							"Microsoft Edge": "edge",
							"MZ Browser": "mz",
							"NAVER Whale Browser": "naver",
							Opera: "opera",
							"Opera Coast": "opera_coast",
							PhantomJS: "phantomjs",
							Puffin: "puffin",
							QupZilla: "qupzilla",
							QQ: "qq",
							QQLite: "qqlite",
							Safari: "safari",
							Sailfish: "sailfish",
							"Samsung Internet for Android": "samsung_internet",
							SeaMonkey: "seamonkey",
							Sleipnir: "sleipnir",
							Swing: "swing",
							Tizen: "tizen",
							"UC Browser": "uc",
							Vivaldi: "vivaldi",
							"WebOS Browser": "webos",
							WeChat: "wechat",
							"Yandex Browser": "yandex",
							Roku: "roku"
						}, t.BROWSER_MAP = {
							amazon_silk: "Amazon Silk",
							android: "Android Browser",
							bada: "Bada",
							blackberry: "BlackBerry",
							chrome: "Chrome",
							chromium: "Chromium",
							electron: "Electron",
							epiphany: "Epiphany",
							firefox: "Firefox",
							focus: "Focus",
							generic: "Generic",
							googlebot: "Googlebot",
							google_search: "Google Search",
							ie: "Internet Explorer",
							k_meleon: "K-Meleon",
							maxthon: "Maxthon",
							edge: "Microsoft Edge",
							mz: "MZ Browser",
							naver: "NAVER Whale Browser",
							opera: "Opera",
							opera_coast: "Opera Coast",
							phantomjs: "PhantomJS",
							puffin: "Puffin",
							qupzilla: "QupZilla",
							qq: "QQ Browser",
							qqlite: "QQ Browser Lite",
							safari: "Safari",
							sailfish: "Sailfish",
							samsung_internet: "Samsung Internet for Android",
							seamonkey: "SeaMonkey",
							sleipnir: "Sleipnir",
							swing: "Swing",
							tizen: "Tizen",
							uc: "UC Browser",
							vivaldi: "Vivaldi",
							webos: "WebOS Browser",
							wechat: "WeChat",
							yandex: "Yandex Browser"
						}, t.PLATFORMS_MAP = {
							tablet: "tablet",
							mobile: "mobile",
							desktop: "desktop",
							tv: "tv"
						}, t.OS_MAP = {
							WindowsPhone: "Windows Phone",
							Windows: "Windows",
							MacOS: "macOS",
							iOS: "iOS",
							Android: "Android",
							WebOS: "WebOS",
							BlackBerry: "BlackBerry",
							Bada: "Bada",
							Tizen: "Tizen",
							Linux: "Linux",
							ChromeOS: "Chrome OS",
							PlayStation4: "PlayStation 4",
							Roku: "Roku"
						}, t.ENGINE_MAP = {
							EdgeHTML: "EdgeHTML",
							Blink: "Blink",
							Trident: "Trident",
							Presto: "Presto",
							Gecko: "Gecko",
							WebKit: "WebKit"
						}
					},
					90: function(e, t, n) {
						"use strict";
						t.__esModule = !0, t.default = void 0;
						var r, s = (r = n(91)) && r.__esModule ? r : {
								default: r
							},
							i = n(18);

						function a(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						var o = function() {
							function e() {}
							var t, n, r;
							return e.getParser = function(e, t) {
								if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
								return new s.default(e, t)
							}, e.parse = function(e) {
								return new s.default(e).getResult()
							}, t = e, r = [{
								key: "BROWSER_MAP",
								get: function() {
									return i.BROWSER_MAP
								}
							}, {
								key: "ENGINE_MAP",
								get: function() {
									return i.ENGINE_MAP
								}
							}, {
								key: "OS_MAP",
								get: function() {
									return i.OS_MAP
								}
							}, {
								key: "PLATFORMS_MAP",
								get: function() {
									return i.PLATFORMS_MAP
								}
							}], (n = null) && a(t.prototype, n), r && a(t, r), e
						}();
						t.default = o, e.exports = t.default
					},
					91: function(e, t, n) {
						"use strict";
						t.__esModule = !0, t.default = void 0;
						var r = l(n(92)),
							s = l(n(93)),
							i = l(n(94)),
							a = l(n(95)),
							o = l(n(17));

						function l(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						var c = function() {
							function e(e, t) {
								if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
								this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
							}
							var t = e.prototype;
							return t.getUA = function() {
								return this._ua
							}, t.test = function(e) {
								return e.test(this._ua)
							}, t.parseBrowser = function() {
								var e = this;
								this.parsedResult.browser = {};
								var t = o.default.find(r.default, (function(t) {
									if ("function" == typeof t.test) return t.test(e);
									if (t.test instanceof Array) return t.test.some((function(t) {
										return e.test(t)
									}));
									throw new Error("Browser's test function is not valid")
								}));
								return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
							}, t.getBrowser = function() {
								return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
							}, t.getBrowserName = function(e) {
								return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
							}, t.getBrowserVersion = function() {
								return this.getBrowser().version
							}, t.getOS = function() {
								return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
							}, t.parseOS = function() {
								var e = this;
								this.parsedResult.os = {};
								var t = o.default.find(s.default, (function(t) {
									if ("function" == typeof t.test) return t.test(e);
									if (t.test instanceof Array) return t.test.some((function(t) {
										return e.test(t)
									}));
									throw new Error("Browser's test function is not valid")
								}));
								return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
							}, t.getOSName = function(e) {
								var t = this.getOS().name;
								return e ? String(t).toLowerCase() || "" : t || ""
							}, t.getOSVersion = function() {
								return this.getOS().version
							}, t.getPlatform = function() {
								return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
							}, t.getPlatformType = function(e) {
								void 0 === e && (e = !1);
								var t = this.getPlatform().type;
								return e ? String(t).toLowerCase() || "" : t || ""
							}, t.parsePlatform = function() {
								var e = this;
								this.parsedResult.platform = {};
								var t = o.default.find(i.default, (function(t) {
									if ("function" == typeof t.test) return t.test(e);
									if (t.test instanceof Array) return t.test.some((function(t) {
										return e.test(t)
									}));
									throw new Error("Browser's test function is not valid")
								}));
								return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
							}, t.getEngine = function() {
								return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
							}, t.getEngineName = function(e) {
								return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
							}, t.parseEngine = function() {
								var e = this;
								this.parsedResult.engine = {};
								var t = o.default.find(a.default, (function(t) {
									if ("function" == typeof t.test) return t.test(e);
									if (t.test instanceof Array) return t.test.some((function(t) {
										return e.test(t)
									}));
									throw new Error("Browser's test function is not valid")
								}));
								return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
							}, t.parse = function() {
								return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
							}, t.getResult = function() {
								return o.default.assign({}, this.parsedResult)
							}, t.satisfies = function(e) {
								var t = this,
									n = {},
									r = 0,
									s = {},
									i = 0;
								if (Object.keys(e).forEach((function(t) {
										var a = e[t];
										"string" == typeof a ? (s[t] = a, i += 1) : "object" == typeof a && (n[t] = a, r += 1)
									})), r > 0) {
									var a = Object.keys(n),
										l = o.default.find(a, (function(e) {
											return t.isOS(e)
										}));
									if (l) {
										var c = this.satisfies(n[l]);
										if (void 0 !== c) return c
									}
									var d = o.default.find(a, (function(e) {
										return t.isPlatform(e)
									}));
									if (d) {
										var m = this.satisfies(n[d]);
										if (void 0 !== m) return m
									}
								}
								if (i > 0) {
									var u = Object.keys(s),
										p = o.default.find(u, (function(e) {
											return t.isBrowser(e, !0)
										}));
									if (void 0 !== p) return this.compareVersion(s[p])
								}
							}, t.isBrowser = function(e, t) {
								void 0 === t && (t = !1);
								var n = this.getBrowserName().toLowerCase(),
									r = e.toLowerCase(),
									s = o.default.getBrowserTypeByAlias(r);
								return t && s && (r = s.toLowerCase()), r === n
							}, t.compareVersion = function(e) {
								var t = [0],
									n = e,
									r = !1,
									s = this.getBrowserVersion();
								if ("string" == typeof s) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (r = !0, n = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (r = !0, n = e.substr(1)), t.indexOf(o.default.compareVersions(s, n, r)) > -1
							}, t.isOS = function(e) {
								return this.getOSName(!0) === String(e).toLowerCase()
							}, t.isPlatform = function(e) {
								return this.getPlatformType(!0) === String(e).toLowerCase()
							}, t.isEngine = function(e) {
								return this.getEngineName(!0) === String(e).toLowerCase()
							}, t.is = function(e, t) {
								return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
							}, t.some = function(e) {
								var t = this;
								return void 0 === e && (e = []), e.some((function(e) {
									return t.is(e)
								}))
							}, e
						}();
						t.default = c, e.exports = t.default
					},
					92: function(e, t, n) {
						"use strict";
						t.__esModule = !0, t.default = void 0;
						var r, s = (r = n(17)) && r.__esModule ? r : {
								default: r
							},
							i = /version\/(\d+(\.?_?\d+)+)/i,
							a = [{
								test: [/googlebot/i],
								describe: function(e) {
									var t = {
											name: "Googlebot"
										},
										n = s.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/opera/i],
								describe: function(e) {
									var t = {
											name: "Opera"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/opr\/|opios/i],
								describe: function(e) {
									var t = {
											name: "Opera"
										},
										n = s.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/SamsungBrowser/i],
								describe: function(e) {
									var t = {
											name: "Samsung Internet for Android"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/Whale/i],
								describe: function(e) {
									var t = {
											name: "NAVER Whale Browser"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/MZBrowser/i],
								describe: function(e) {
									var t = {
											name: "MZ Browser"
										},
										n = s.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/focus/i],
								describe: function(e) {
									var t = {
											name: "Focus"
										},
										n = s.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/swing/i],
								describe: function(e) {
									var t = {
											name: "Swing"
										},
										n = s.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/coast/i],
								describe: function(e) {
									var t = {
											name: "Opera Coast"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/opt\/\d+(?:.?_?\d+)+/i],
								describe: function(e) {
									var t = {
											name: "Opera Touch"
										},
										n = s.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/yabrowser/i],
								describe: function(e) {
									var t = {
											name: "Yandex Browser"
										},
										n = s.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/ucbrowser/i],
								describe: function(e) {
									var t = {
											name: "UC Browser"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/Maxthon|mxios/i],
								describe: function(e) {
									var t = {
											name: "Maxthon"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/epiphany/i],
								describe: function(e) {
									var t = {
											name: "Epiphany"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/puffin/i],
								describe: function(e) {
									var t = {
											name: "Puffin"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/sleipnir/i],
								describe: function(e) {
									var t = {
											name: "Sleipnir"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/k-meleon/i],
								describe: function(e) {
									var t = {
											name: "K-Meleon"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/micromessenger/i],
								describe: function(e) {
									var t = {
											name: "WeChat"
										},
										n = s.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/qqbrowser/i],
								describe: function(e) {
									var t = {
											name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
										},
										n = s.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/msie|trident/i],
								describe: function(e) {
									var t = {
											name: "Internet Explorer"
										},
										n = s.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/\sedg\//i],
								describe: function(e) {
									var t = {
											name: "Microsoft Edge"
										},
										n = s.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/edg([ea]|ios)/i],
								describe: function(e) {
									var t = {
											name: "Microsoft Edge"
										},
										n = s.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/vivaldi/i],
								describe: function(e) {
									var t = {
											name: "Vivaldi"
										},
										n = s.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/seamonkey/i],
								describe: function(e) {
									var t = {
											name: "SeaMonkey"
										},
										n = s.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/sailfish/i],
								describe: function(e) {
									var t = {
											name: "Sailfish"
										},
										n = s.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/silk/i],
								describe: function(e) {
									var t = {
											name: "Amazon Silk"
										},
										n = s.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/phantom/i],
								describe: function(e) {
									var t = {
											name: "PhantomJS"
										},
										n = s.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/slimerjs/i],
								describe: function(e) {
									var t = {
											name: "SlimerJS"
										},
										n = s.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
								describe: function(e) {
									var t = {
											name: "BlackBerry"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/(web|hpw)[o0]s/i],
								describe: function(e) {
									var t = {
											name: "WebOS Browser"
										},
										n = s.default.getFirstMatch(i, e) || s.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/bada/i],
								describe: function(e) {
									var t = {
											name: "Bada"
										},
										n = s.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/tizen/i],
								describe: function(e) {
									var t = {
											name: "Tizen"
										},
										n = s.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/qupzilla/i],
								describe: function(e) {
									var t = {
											name: "QupZilla"
										},
										n = s.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/firefox|iceweasel|fxios/i],
								describe: function(e) {
									var t = {
											name: "Firefox"
										},
										n = s.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/electron/i],
								describe: function(e) {
									var t = {
											name: "Electron"
										},
										n = s.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/MiuiBrowser/i],
								describe: function(e) {
									var t = {
											name: "Miui"
										},
										n = s.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/chromium/i],
								describe: function(e) {
									var t = {
											name: "Chromium"
										},
										n = s.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/chrome|crios|crmo/i],
								describe: function(e) {
									var t = {
											name: "Chrome"
										},
										n = s.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/GSA/i],
								describe: function(e) {
									var t = {
											name: "Google Search"
										},
										n = s.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: function(e) {
									var t = !e.test(/like android/i),
										n = e.test(/android/i);
									return t && n
								},
								describe: function(e) {
									var t = {
											name: "Android Browser"
										},
										n = s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/playstation 4/i],
								describe: function(e) {
									var t = {
											name: "PlayStation 4"
										},
										n = s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/safari|applewebkit/i],
								describe: function(e) {
									var t = {
											name: "Safari"
										},
										n = s.default.getFirstMatch(i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/.*/i],
								describe: function(e) {
									var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
									return {
										name: s.default.getFirstMatch(t, e),
										version: s.default.getSecondMatch(t, e)
									}
								}
							}];
						t.default = a, e.exports = t.default
					},
					93: function(e, t, n) {
						"use strict";
						t.__esModule = !0, t.default = void 0;
						var r, s = (r = n(17)) && r.__esModule ? r : {
								default: r
							},
							i = n(18),
							a = [{
								test: [/Roku\/DVP/],
								describe: function(e) {
									var t = s.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
									return {
										name: i.OS_MAP.Roku,
										version: t
									}
								}
							}, {
								test: [/windows phone/i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
									return {
										name: i.OS_MAP.WindowsPhone,
										version: t
									}
								}
							}, {
								test: [/windows /i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
										n = s.default.getWindowsVersionName(t);
									return {
										name: i.OS_MAP.Windows,
										version: t,
										versionName: n
									}
								}
							}, {
								test: [/Macintosh(.*?) FxiOS(.*?)\//],
								describe: function(e) {
									var t = {
											name: i.OS_MAP.iOS
										},
										n = s.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/macintosh/i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
										n = s.default.getMacOSVersionName(t),
										r = {
											name: i.OS_MAP.MacOS,
											version: t
										};
									return n && (r.versionName = n), r
								}
							}, {
								test: [/(ipod|iphone|ipad)/i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
									return {
										name: i.OS_MAP.iOS,
										version: t
									}
								}
							}, {
								test: function(e) {
									var t = !e.test(/like android/i),
										n = e.test(/android/i);
									return t && n
								},
								describe: function(e) {
									var t = s.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
										n = s.default.getAndroidVersionName(t),
										r = {
											name: i.OS_MAP.Android,
											version: t
										};
									return n && (r.versionName = n), r
								}
							}, {
								test: [/(web|hpw)[o0]s/i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
										n = {
											name: i.OS_MAP.WebOS
										};
									return t && t.length && (n.version = t), n
								}
							}, {
								test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || s.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || s.default.getFirstMatch(/\bbb(\d+)/i, e);
									return {
										name: i.OS_MAP.BlackBerry,
										version: t
									}
								}
							}, {
								test: [/bada/i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
									return {
										name: i.OS_MAP.Bada,
										version: t
									}
								}
							}, {
								test: [/tizen/i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
									return {
										name: i.OS_MAP.Tizen,
										version: t
									}
								}
							}, {
								test: [/linux/i],
								describe: function() {
									return {
										name: i.OS_MAP.Linux
									}
								}
							}, {
								test: [/CrOS/],
								describe: function() {
									return {
										name: i.OS_MAP.ChromeOS
									}
								}
							}, {
								test: [/PlayStation 4/],
								describe: function(e) {
									var t = s.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
									return {
										name: i.OS_MAP.PlayStation4,
										version: t
									}
								}
							}];
						t.default = a, e.exports = t.default
					},
					94: function(e, t, n) {
						"use strict";
						t.__esModule = !0, t.default = void 0;
						var r, s = (r = n(17)) && r.__esModule ? r : {
								default: r
							},
							i = n(18),
							a = [{
								test: [/googlebot/i],
								describe: function() {
									return {
										type: "bot",
										vendor: "Google"
									}
								}
							}, {
								test: [/huawei/i],
								describe: function(e) {
									var t = s.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
										n = {
											type: i.PLATFORMS_MAP.mobile,
											vendor: "Huawei"
										};
									return t && (n.model = t), n
								}
							}, {
								test: [/nexus\s*(?:7|8|9|10).*/i],
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tablet,
										vendor: "Nexus"
									}
								}
							}, {
								test: [/ipad/i],
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tablet,
										vendor: "Apple",
										model: "iPad"
									}
								}
							}, {
								test: [/Macintosh(.*?) FxiOS(.*?)\//],
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tablet,
										vendor: "Apple",
										model: "iPad"
									}
								}
							}, {
								test: [/kftt build/i],
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tablet,
										vendor: "Amazon",
										model: "Kindle Fire HD 7"
									}
								}
							}, {
								test: [/silk/i],
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tablet,
										vendor: "Amazon"
									}
								}
							}, {
								test: [/tablet(?! pc)/i],
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tablet
									}
								}
							}, {
								test: function(e) {
									var t = e.test(/ipod|iphone/i),
										n = e.test(/like (ipod|iphone)/i);
									return t && !n
								},
								describe: function(e) {
									var t = s.default.getFirstMatch(/(ipod|iphone)/i, e);
									return {
										type: i.PLATFORMS_MAP.mobile,
										vendor: "Apple",
										model: t
									}
								}
							}, {
								test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.mobile,
										vendor: "Nexus"
									}
								}
							}, {
								test: [/[^-]mobi/i],
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.mobile
									}
								}
							}, {
								test: function(e) {
									return "blackberry" === e.getBrowserName(!0)
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.mobile,
										vendor: "BlackBerry"
									}
								}
							}, {
								test: function(e) {
									return "bada" === e.getBrowserName(!0)
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.mobile
									}
								}
							}, {
								test: function(e) {
									return "windows phone" === e.getBrowserName()
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.mobile,
										vendor: "Microsoft"
									}
								}
							}, {
								test: function(e) {
									var t = Number(String(e.getOSVersion()).split(".")[0]);
									return "android" === e.getOSName(!0) && t >= 3
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tablet
									}
								}
							}, {
								test: function(e) {
									return "android" === e.getOSName(!0)
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.mobile
									}
								}
							}, {
								test: function(e) {
									return "macos" === e.getOSName(!0)
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.desktop,
										vendor: "Apple"
									}
								}
							}, {
								test: function(e) {
									return "windows" === e.getOSName(!0)
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.desktop
									}
								}
							}, {
								test: function(e) {
									return "linux" === e.getOSName(!0)
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.desktop
									}
								}
							}, {
								test: function(e) {
									return "playstation 4" === e.getOSName(!0)
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tv
									}
								}
							}, {
								test: function(e) {
									return "roku" === e.getOSName(!0)
								},
								describe: function() {
									return {
										type: i.PLATFORMS_MAP.tv
									}
								}
							}];
						t.default = a, e.exports = t.default
					},
					95: function(e, t, n) {
						"use strict";
						t.__esModule = !0, t.default = void 0;
						var r, s = (r = n(17)) && r.__esModule ? r : {
								default: r
							},
							i = n(18),
							a = [{
								test: function(e) {
									return "microsoft edge" === e.getBrowserName(!0)
								},
								describe: function(e) {
									if (/\sedg\//i.test(e)) return {
										name: i.ENGINE_MAP.Blink
									};
									var t = s.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
									return {
										name: i.ENGINE_MAP.EdgeHTML,
										version: t
									}
								}
							}, {
								test: [/trident/i],
								describe: function(e) {
									var t = {
											name: i.ENGINE_MAP.Trident
										},
										n = s.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: function(e) {
									return e.test(/presto/i)
								},
								describe: function(e) {
									var t = {
											name: i.ENGINE_MAP.Presto
										},
										n = s.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: function(e) {
									var t = e.test(/gecko/i),
										n = e.test(/like gecko/i);
									return t && !n
								},
								describe: function(e) {
									var t = {
											name: i.ENGINE_MAP.Gecko
										},
										n = s.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}, {
								test: [/(apple)?webkit\/537\.36/i],
								describe: function() {
									return {
										name: i.ENGINE_MAP.Blink
									}
								}
							}, {
								test: [/(apple)?webkit/i],
								describe: function(e) {
									var t = {
											name: i.ENGINE_MAP.WebKit
										},
										n = s.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
									return n && (t.version = n), t
								}
							}];
						t.default = a, e.exports = t.default
					}
				})
			},
			7: e => {
				"use strict";
				var t, n = "object" == typeof Reflect ? Reflect : null,
					r = n && "function" == typeof n.apply ? n.apply : function(e, t, n) {
						return Function.prototype.apply.call(e, t, n)
					};
				t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
					return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
				} : function(e) {
					return Object.getOwnPropertyNames(e)
				};
				var s = Number.isNaN || function(e) {
					return e != e
				};

				function i() {
					i.init.call(this)
				}
				e.exports = i, e.exports.once = function(e, t) {
					return new Promise((function(n, r) {
						function s(n) {
							e.removeListener(t, i), r(n)
						}

						function i() {
							"function" == typeof e.removeListener && e.removeListener("error", s), n([].slice.call(arguments))
						}
						g(e, t, i, {
							once: !0
						}), "error" !== t && function(e, t, n) {
							"function" == typeof e.on && g(e, "error", t, n)
						}(e, s, {
							once: !0
						})
					}))
				}, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
				var a = 10;

				function o(e) {
					if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
				}

				function l(e) {
					return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners
				}

				function c(e, t, n, r) {
					var s, i, a, c;
					if (o(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), a = i[t]), void 0 === a) a = i[t] = n, ++e._eventsCount;
					else if ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (s = l(e)) > 0 && a.length > s && !a.warned) {
						a.warned = !0;
						var d = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
						d.name = "MaxListenersExceededWarning", d.emitter = e, d.type = t, d.count = a.length, c = d, console && console.warn && console.warn(c)
					}
					return e
				}

				function d() {
					if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
				}

				function m(e, t, n) {
					var r = {
							fired: !1,
							wrapFn: void 0,
							target: e,
							type: t,
							listener: n
						},
						s = d.bind(r);
					return s.listener = n, r.wrapFn = s, s
				}

				function u(e, t, n) {
					var r = e._events;
					if (void 0 === r) return [];
					var s = r[t];
					return void 0 === s ? [] : "function" == typeof s ? n ? [s.listener || s] : [s] : n ? function(e) {
						for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
						return t
					}(s) : h(s, s.length)
				}

				function p(e) {
					var t = this._events;
					if (void 0 !== t) {
						var n = t[e];
						if ("function" == typeof n) return 1;
						if (void 0 !== n) return n.length
					}
					return 0
				}

				function h(e, t) {
					for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
					return n
				}

				function g(e, t, n, r) {
					if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
					else {
						if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
						e.addEventListener(t, (function s(i) {
							r.once && e.removeEventListener(t, s), n(i)
						}))
					}
				}
				Object.defineProperty(i, "defaultMaxListeners", {
					enumerable: !0,
					get: function() {
						return a
					},
					set: function(e) {
						if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
						a = e
					}
				}), i.init = function() {
					void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
				}, i.prototype.setMaxListeners = function(e) {
					if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
					return this._maxListeners = e, this
				}, i.prototype.getMaxListeners = function() {
					return l(this)
				}, i.prototype.emit = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
					var s = "error" === e,
						i = this._events;
					if (void 0 !== i) s = s && void 0 === i.error;
					else if (!s) return !1;
					if (s) {
						var a;
						if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
						var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
						throw o.context = a, o
					}
					var l = i[e];
					if (void 0 === l) return !1;
					if ("function" == typeof l) r(l, this, t);
					else {
						var c = l.length,
							d = h(l, c);
						for (n = 0; n < c; ++n) r(d[n], this, t)
					}
					return !0
				}, i.prototype.addListener = function(e, t) {
					return c(this, e, t, !1)
				}, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) {
					return c(this, e, t, !0)
				}, i.prototype.once = function(e, t) {
					return o(t), this.on(e, m(this, e, t)), this
				}, i.prototype.prependOnceListener = function(e, t) {
					return o(t), this.prependListener(e, m(this, e, t)), this
				}, i.prototype.removeListener = function(e, t) {
					var n, r, s, i, a;
					if (o(t), void 0 === (r = this._events)) return this;
					if (void 0 === (n = r[e])) return this;
					if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
					else if ("function" != typeof n) {
						for (s = -1, i = n.length - 1; i >= 0; i--)
							if (n[i] === t || n[i].listener === t) {
								a = n[i].listener, s = i;
								break
							} if (s < 0) return this;
						0 === s ? n.shift() : function(e, t) {
							for (; t + 1 < e.length; t++) e[t] = e[t + 1];
							e.pop()
						}(n, s), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
					}
					return this
				}, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) {
					var t, n, r;
					if (void 0 === (n = this._events)) return this;
					if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
					if (0 === arguments.length) {
						var s, i = Object.keys(n);
						for (r = 0; r < i.length; ++r) "removeListener" !== (s = i[r]) && this.removeAllListeners(s);
						return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
					}
					if ("function" == typeof(t = n[e])) this.removeListener(e, t);
					else if (void 0 !== t)
						for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
					return this
				}, i.prototype.listeners = function(e) {
					return u(this, e, !0)
				}, i.prototype.rawListeners = function(e) {
					return u(this, e, !1)
				}, i.listenerCount = function(e, t) {
					return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
				}, i.prototype.listenerCount = p, i.prototype.eventNames = function() {
					return this._eventsCount > 0 ? t(this._events) : []
				}
			},
			454: (e, t, n) => {
				"use strict";
				const r = n(918),
					s = n(923),
					i = n(904);
				e.exports = {
					XMLParser: s,
					XMLValidator: r,
					XMLBuilder: i
				}
			},
			334: (e, t) => {
				"use strict";
				const n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
					r = "[" + n + "][" + (n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040") + "]*",
					s = new RegExp("^" + r + "$");
				t.isExist = function(e) {
					return void 0 !== e
				}, t.isEmptyObject = function(e) {
					return 0 === Object.keys(e).length
				}, t.merge = function(e, t, n) {
					if (t) {
						const r = Object.keys(t),
							s = r.length;
						for (let i = 0; i < s; i++) e[r[i]] = "strict" === n ? [t[r[i]]] : t[r[i]]
					}
				}, t.getValue = function(e) {
					return t.isExist(e) ? e : ""
				}, t.isName = function(e) {
					const t = s.exec(e);
					return !(null == t)
				}, t.getAllMatches = function(e, t) {
					const n = [];
					let r = t.exec(e);
					for (; r;) {
						const s = [];
						s.startIndex = t.lastIndex - r[0].length;
						const i = r.length;
						for (let e = 0; e < i; e++) s.push(r[e]);
						n.push(s), r = t.exec(e)
					}
					return n
				}, t.nameRegexp = r
			},
			918: (e, t, n) => {
				"use strict";
				const r = n(334),
					s = {
						allowBooleanAttributes: !1,
						unpairedTags: []
					};

				function i(e) {
					return " " === e || "\t" === e || "\n" === e || "\r" === e
				}

				function a(e, t) {
					const n = t;
					for (; t < e.length; t++)
						if ("?" != e[t] && " " != e[t]);
						else {
							const r = e.substr(n, t - n);
							if (t > 5 && "xml" === r) return h("InvalidXml", "XML declaration allowed only at the start of the document.", y(e, t));
							if ("?" == e[t] && ">" == e[t + 1]) {
								t++;
								break
							}
						} return t
				}

				function o(e, t) {
					if (e.length > t + 5 && "-" === e[t + 1] && "-" === e[t + 2]) {
						for (t += 3; t < e.length; t++)
							if ("-" === e[t] && "-" === e[t + 1] && ">" === e[t + 2]) {
								t += 2;
								break
							}
					} else if (e.length > t + 8 && "D" === e[t + 1] && "O" === e[t + 2] && "C" === e[t + 3] && "T" === e[t + 4] && "Y" === e[t + 5] && "P" === e[t + 6] && "E" === e[t + 7]) {
						let n = 1;
						for (t += 8; t < e.length; t++)
							if ("<" === e[t]) n++;
							else if (">" === e[t] && (n--, 0 === n)) break
					} else if (e.length > t + 9 && "[" === e[t + 1] && "C" === e[t + 2] && "D" === e[t + 3] && "A" === e[t + 4] && "T" === e[t + 5] && "A" === e[t + 6] && "[" === e[t + 7])
						for (t += 8; t < e.length; t++)
							if ("]" === e[t] && "]" === e[t + 1] && ">" === e[t + 2]) {
								t += 2;
								break
							} return t
				}
				t.validate = function(e, t) {
					t = Object.assign({}, s, t);
					const n = [];
					let l = !1,
						c = !1;
					"\ufeff" === e[0] && (e = e.substr(1));
					for (let s = 0; s < e.length; s++)
						if ("<" === e[s] && "?" === e[s + 1]) {
							if (s += 2, s = a(e, s), s.err) return s
						} else {
							if ("<" !== e[s]) {
								if (i(e[s])) continue;
								return h("InvalidChar", "char '" + e[s] + "' is not expected.", y(e, s))
							} {
								let g = s;
								if (s++, "!" === e[s]) {
									s = o(e, s);
									continue
								} {
									let f = !1;
									"/" === e[s] && (f = !0, s++);
									let b = "";
									for (; s < e.length && ">" !== e[s] && " " !== e[s] && "\t" !== e[s] && "\n" !== e[s] && "\r" !== e[s]; s++) b += e[s];
									if (b = b.trim(), "/" === b[b.length - 1] && (b = b.substring(0, b.length - 1), s--), m = b, !r.isName(m)) {
										let t;
										return t = 0 === b.trim().length ? "Invalid space after '<'." : "Tag '" + b + "' is an invalid name.", h("InvalidTag", t, y(e, s))
									}
									const x = d(e, s);
									if (!1 === x) return h("InvalidAttr", "Attributes for '" + b + "' have open quote.", y(e, s));
									let N = x.value;
									if (s = x.index, "/" === N[N.length - 1]) {
										const n = s - N.length;
										N = N.substring(0, N.length - 1);
										const r = u(N, t);
										if (!0 !== r) return h(r.err.code, r.err.msg, y(e, n + r.err.line));
										l = !0
									} else if (f) {
										if (!x.tagClosed) return h("InvalidTag", "Closing tag '" + b + "' doesn't have proper closing.", y(e, s));
										if (N.trim().length > 0) return h("InvalidTag", "Closing tag '" + b + "' can't have attributes or invalid starting.", y(e, g));
										if (0 === n.length) return h("InvalidTag", "Closing tag '" + b + "' has not been opened.", y(e, g));
										{
											const t = n.pop();
											if (b !== t.tagName) {
												let n = y(e, t.tagStartPos);
												return h("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + b + "'.", y(e, g))
											}
											0 == n.length && (c = !0)
										}
									} else {
										const r = u(N, t);
										if (!0 !== r) return h(r.err.code, r.err.msg, y(e, s - N.length + r.err.line));
										if (!0 === c) return h("InvalidXml", "Multiple possible root nodes found.", y(e, s)); - 1 !== t.unpairedTags.indexOf(b) || n.push({
											tagName: b,
											tagStartPos: g
										}), l = !0
									}
									for (s++; s < e.length; s++)
										if ("<" === e[s]) {
											if ("!" === e[s + 1]) {
												s++, s = o(e, s);
												continue
											}
											if ("?" !== e[s + 1]) break;
											if (s = a(e, ++s), s.err) return s
										} else if ("&" === e[s]) {
										const t = p(e, s);
										if (-1 == t) return h("InvalidChar", "char '&' is not expected.", y(e, s));
										s = t
									} else if (!0 === c && !i(e[s])) return h("InvalidXml", "Extra text at the end", y(e, s));
									"<" === e[s] && s--
								}
							}
						} var m;
					return l ? 1 == n.length ? h("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", y(e, n[0].tagStartPos)) : !(n.length > 0) || h("InvalidXml", "Invalid '" + JSON.stringify(n.map((e => e.tagName)), null, 4).replace(/\r?\n/g, "") + "' found.", {
						line: 1,
						col: 1
					}) : h("InvalidXml", "Start tag expected.", 1)
				};
				const l = '"',
					c = "'";

				function d(e, t) {
					let n = "",
						r = "",
						s = !1;
					for (; t < e.length; t++) {
						if (e[t] === l || e[t] === c) "" === r ? r = e[t] : r !== e[t] || (r = "");
						else if (">" === e[t] && "" === r) {
							s = !0;
							break
						}
						n += e[t]
					}
					return "" === r && {
						value: n,
						index: t,
						tagClosed: s
					}
				}
				const m = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");

				function u(e, t) {
					const n = r.getAllMatches(e, m),
						s = {};
					for (let e = 0; e < n.length; e++) {
						if (0 === n[e][1].length) return h("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", f(n[e]));
						if (void 0 !== n[e][3] && void 0 === n[e][4]) return h("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", f(n[e]));
						if (void 0 === n[e][3] && !t.allowBooleanAttributes) return h("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", f(n[e]));
						const r = n[e][2];
						if (!g(r)) return h("InvalidAttr", "Attribute '" + r + "' is an invalid name.", f(n[e]));
						if (s.hasOwnProperty(r)) return h("InvalidAttr", "Attribute '" + r + "' is repeated.", f(n[e]));
						s[r] = 1
					}
					return !0
				}

				function p(e, t) {
					if (";" === e[++t]) return -1;
					if ("#" === e[t]) return function(e, t) {
						let n = /\d/;
						for ("x" === e[t] && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
							if (";" === e[t]) return t;
							if (!e[t].match(n)) break
						}
						return -1
					}(e, ++t);
					let n = 0;
					for (; t < e.length; t++, n++)
						if (!(e[t].match(/\w/) && n < 20)) {
							if (";" === e[t]) break;
							return -1
						} return t
				}

				function h(e, t, n) {
					return {
						err: {
							code: e,
							msg: t,
							line: n.line || n,
							col: n.col
						}
					}
				}

				function g(e) {
					return r.isName(e)
				}

				function y(e, t) {
					const n = e.substring(0, t).split(/\r?\n/);
					return {
						line: n.length,
						col: n[n.length - 1].length + 1
					}
				}

				function f(e) {
					return e.startIndex + e[1].length
				}
			},
			904: (e, t, n) => {
				"use strict";
				const r = n(788),
					s = {
						attributeNamePrefix: "@_",
						attributesGroupName: !1,
						textNodeName: "#text",
						ignoreAttributes: !0,
						cdataPropName: !1,
						format: !1,
						indentBy: "  ",
						suppressEmptyNode: !1,
						suppressUnpairedNode: !0,
						suppressBooleanAttributes: !0,
						tagValueProcessor: function(e, t) {
							return t
						},
						attributeValueProcessor: function(e, t) {
							return t
						},
						preserveOrder: !1,
						commentPropName: !1,
						unpairedTags: [],
						entities: [{
							regex: new RegExp("&", "g"),
							val: "&amp;"
						}, {
							regex: new RegExp(">", "g"),
							val: "&gt;"
						}, {
							regex: new RegExp("<", "g"),
							val: "&lt;"
						}, {
							regex: new RegExp("'", "g"),
							val: "&apos;"
						}, {
							regex: new RegExp('"', "g"),
							val: "&quot;"
						}],
						processEntities: !0,
						stopNodes: [],
						oneListGroup: !1
					};

				function i(e) {
					this.options = Object.assign({}, s, e), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
						return !1
					} : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = l), this.processTextOrObjNode = a, this.options.format ? (this.indentate = o, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
						return ""
					}, this.tagEndChar = ">", this.newLine = "")
				}

				function a(e, t, n) {
					const r = this.j2x(e, n + 1);
					return void 0 !== e[this.options.textNodeName] && 1 === Object.keys(e).length ? this.buildTextValNode(e[this.options.textNodeName], t, r.attrStr, n) : this.buildObjectNode(r.val, t, r.attrStr, n)
				}

				function o(e) {
					return this.options.indentBy.repeat(e)
				}

				function l(e) {
					return !(!e.startsWith(this.options.attributeNamePrefix) || e === this.options.textNodeName) && e.substr(this.attrPrefixLen)
				}
				i.prototype.build = function(e) {
					return this.options.preserveOrder ? r(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
						[this.options.arrayNodeName]: e
					}), this.j2x(e, 0).val)
				}, i.prototype.j2x = function(e, t) {
					let n = "",
						r = "";
					for (let s in e)
						if (Object.prototype.hasOwnProperty.call(e, s))
							if (void 0 === e[s]) this.isAttribute(s) && (r += "");
							else if (null === e[s]) this.isAttribute(s) ? r += "" : "?" === s[0] ? r += this.indentate(t) + "<" + s + "?" + this.tagEndChar : r += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
					else if (e[s] instanceof Date) r += this.buildTextValNode(e[s], s, "", t);
					else if ("object" != typeof e[s]) {
						const i = this.isAttribute(s);
						if (i) n += this.buildAttrPairStr(i, "" + e[s]);
						else if (s === this.options.textNodeName) {
							let t = this.options.tagValueProcessor(s, "" + e[s]);
							r += this.replaceEntitiesValue(t)
						} else r += this.buildTextValNode(e[s], s, "", t)
					} else if (Array.isArray(e[s])) {
						const n = e[s].length;
						let i = "",
							a = "";
						for (let o = 0; o < n; o++) {
							const n = e[s][o];
							if (void 0 === n);
							else if (null === n) "?" === s[0] ? r += this.indentate(t) + "<" + s + "?" + this.tagEndChar : r += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
							else if ("object" == typeof n)
								if (this.options.oneListGroup) {
									const e = this.j2x(n, t + 1);
									i += e.val, this.options.attributesGroupName && n.hasOwnProperty(this.options.attributesGroupName) && (a += e.attrStr)
								} else i += this.processTextOrObjNode(n, s, t);
							else if (this.options.oneListGroup) {
								let e = this.options.tagValueProcessor(s, n);
								e = this.replaceEntitiesValue(e), i += e
							} else i += this.buildTextValNode(n, s, "", t)
						}
						this.options.oneListGroup && (i = this.buildObjectNode(i, s, a, t)), r += i
					} else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
						const t = Object.keys(e[s]),
							r = t.length;
						for (let i = 0; i < r; i++) n += this.buildAttrPairStr(t[i], "" + e[s][t[i]])
					} else r += this.processTextOrObjNode(e[s], s, t);
					return {
						attrStr: n,
						val: r
					}
				}, i.prototype.buildAttrPairStr = function(e, t) {
					return t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t), this.options.suppressBooleanAttributes && "true" === t ? " " + e : " " + e + '="' + t + '"'
				}, i.prototype.buildObjectNode = function(e, t, n, r) {
					if ("" === e) return "?" === t[0] ? this.indentate(r) + "<" + t + n + "?" + this.tagEndChar : this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
					{
						let s = "</" + t + this.tagEndChar,
							i = "";
						return "?" === t[0] && (i = "?", s = ""), !n && "" !== n || -1 !== e.indexOf("<") ? !1 !== this.options.commentPropName && t === this.options.commentPropName && 0 === i.length ? this.indentate(r) + `\x3c!--${e}--\x3e` + this.newLine : this.indentate(r) + "<" + t + n + i + this.tagEndChar + e + this.indentate(r) + s : this.indentate(r) + "<" + t + n + i + ">" + e + s
					}
				}, i.prototype.closeTag = function(e) {
					let t = "";
					return -1 !== this.options.unpairedTags.indexOf(e) ? this.options.suppressUnpairedNode || (t = "/") : t = this.options.suppressEmptyNode ? "/" : `></${e}`, t
				}, i.prototype.buildTextValNode = function(e, t, n, r) {
					if (!1 !== this.options.cdataPropName && t === this.options.cdataPropName) return this.indentate(r) + `<![CDATA[${e}]]>` + this.newLine;
					if (!1 !== this.options.commentPropName && t === this.options.commentPropName) return this.indentate(r) + `\x3c!--${e}--\x3e` + this.newLine;
					if ("?" === t[0]) return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
					{
						let s = this.options.tagValueProcessor(t, e);
						return s = this.replaceEntitiesValue(s), "" === s ? this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(r) + "<" + t + n + ">" + s + "</" + t + this.tagEndChar
					}
				}, i.prototype.replaceEntitiesValue = function(e) {
					if (e && e.length > 0 && this.options.processEntities)
						for (let t = 0; t < this.options.entities.length; t++) {
							const n = this.options.entities[t];
							e = e.replace(n.regex, n.val)
						}
					return e
				}, e.exports = i
			},
			788: e => {
				function t(e, a, o, l) {
					let c = "",
						d = !1;
					for (let m = 0; m < e.length; m++) {
						const u = e[m],
							p = n(u);
						if (void 0 === p) continue;
						let h = "";
						if (h = 0 === o.length ? p : `${o}.${p}`, p === a.textNodeName) {
							let e = u[p];
							s(h, a) || (e = a.tagValueProcessor(p, e), e = i(e, a)), d && (c += l), c += e, d = !1;
							continue
						}
						if (p === a.cdataPropName) {
							d && (c += l), c += `<![CDATA[${u[p][0][a.textNodeName]}]]>`, d = !1;
							continue
						}
						if (p === a.commentPropName) {
							c += l + `\x3c!--${u[p][0][a.textNodeName]}--\x3e`, d = !0;
							continue
						}
						if ("?" === p[0]) {
							const e = r(u[":@"], a),
								t = "?xml" === p ? "" : l;
							let n = u[p][0][a.textNodeName];
							n = 0 !== n.length ? " " + n : "", c += t + `<${p}${n}${e}?>`, d = !0;
							continue
						}
						let g = l;
						"" !== g && (g += a.indentBy);
						const y = l + `<${p}${r(u[":@"],a)}`,
							f = t(u[p], a, h, g); - 1 !== a.unpairedTags.indexOf(p) ? a.suppressUnpairedNode ? c += y + ">" : c += y + "/>" : f && 0 !== f.length || !a.suppressEmptyNode ? f && f.endsWith(">") ? c += y + `>${f}${l}</${p}>` : (c += y + ">", f && "" !== l && (f.includes("/>") || f.includes("</")) ? c += l + a.indentBy + f + l : c += f, c += `</${p}>`) : c += y + "/>", d = !0
					}
					return c
				}

				function n(e) {
					const t = Object.keys(e);
					for (let n = 0; n < t.length; n++) {
						const r = t[n];
						if (e.hasOwnProperty(r) && ":@" !== r) return r
					}
				}

				function r(e, t) {
					let n = "";
					if (e && !t.ignoreAttributes)
						for (let r in e) {
							if (!e.hasOwnProperty(r)) continue;
							let s = t.attributeValueProcessor(r, e[r]);
							s = i(s, t), !0 === s && t.suppressBooleanAttributes ? n += ` ${r.substr(t.attributeNamePrefix.length)}` : n += ` ${r.substr(t.attributeNamePrefix.length)}="${s}"`
						}
					return n
				}

				function s(e, t) {
					let n = (e = e.substr(0, e.length - t.textNodeName.length - 1)).substr(e.lastIndexOf(".") + 1);
					for (let r in t.stopNodes)
						if (t.stopNodes[r] === e || t.stopNodes[r] === "*." + n) return !0;
					return !1
				}

				function i(e, t) {
					if (e && e.length > 0 && t.processEntities)
						for (let n = 0; n < t.entities.length; n++) {
							const r = t.entities[n];
							e = e.replace(r.regex, r.val)
						}
					return e
				}
				e.exports = function(e, n) {
					let r = "";
					return n.format && n.indentBy.length > 0 && (r = "\n"), t(e, n, "", r)
				}
			},
			400: (e, t, n) => {
				const r = n(334);

				function s(e, t) {
					let n = "";
					for (; t < e.length && "'" !== e[t] && '"' !== e[t]; t++) n += e[t];
					if (n = n.trim(), -1 !== n.indexOf(" ")) throw new Error("External entites are not supported");
					const r = e[t++];
					let s = "";
					for (; t < e.length && e[t] !== r; t++) s += e[t];
					return [n, s, t]
				}

				function i(e, t) {
					return "!" === e[t + 1] && "-" === e[t + 2] && "-" === e[t + 3]
				}

				function a(e, t) {
					return "!" === e[t + 1] && "E" === e[t + 2] && "N" === e[t + 3] && "T" === e[t + 4] && "I" === e[t + 5] && "T" === e[t + 6] && "Y" === e[t + 7]
				}

				function o(e, t) {
					return "!" === e[t + 1] && "E" === e[t + 2] && "L" === e[t + 3] && "E" === e[t + 4] && "M" === e[t + 5] && "E" === e[t + 6] && "N" === e[t + 7] && "T" === e[t + 8]
				}

				function l(e, t) {
					return "!" === e[t + 1] && "A" === e[t + 2] && "T" === e[t + 3] && "T" === e[t + 4] && "L" === e[t + 5] && "I" === e[t + 6] && "S" === e[t + 7] && "T" === e[t + 8]
				}

				function c(e, t) {
					return "!" === e[t + 1] && "N" === e[t + 2] && "O" === e[t + 3] && "T" === e[t + 4] && "A" === e[t + 5] && "T" === e[t + 6] && "I" === e[t + 7] && "O" === e[t + 8] && "N" === e[t + 9]
				}

				function d(e) {
					if (r.isName(e)) return e;
					throw new Error(`Invalid entity name ${e}`)
				}
				e.exports = function(e, t) {
					const n = {};
					if ("O" !== e[t + 3] || "C" !== e[t + 4] || "T" !== e[t + 5] || "Y" !== e[t + 6] || "P" !== e[t + 7] || "E" !== e[t + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
					{
						t += 9;
						let r = 1,
							m = !1,
							u = !1,
							p = "";
						for (; t < e.length; t++)
							if ("<" !== e[t] || u)
								if (">" === e[t]) {
									if (u ? "-" === e[t - 1] && "-" === e[t - 2] && (u = !1, r--) : r--, 0 === r) break
								} else "[" === e[t] ? m = !0 : p += e[t];
						else {
							if (m && a(e, t)) t += 7, [entityName, val, t] = s(e, t + 1), -1 === val.indexOf("&") && (n[d(entityName)] = {
								regx: RegExp(`&${entityName};`, "g"),
								val
							});
							else if (m && o(e, t)) t += 8;
							else if (m && l(e, t)) t += 8;
							else if (m && c(e, t)) t += 9;
							else {
								if (!i) throw new Error("Invalid DOCTYPE");
								u = !0
							}
							r++, p = ""
						}
						if (0 !== r) throw new Error("Unclosed DOCTYPE")
					}
					return {
						entities: n,
						i: t
					}
				}
			},
			460: (e, t) => {
				const n = {
					preserveOrder: !1,
					attributeNamePrefix: "@_",
					attributesGroupName: !1,
					textNodeName: "#text",
					ignoreAttributes: !0,
					removeNSPrefix: !1,
					allowBooleanAttributes: !1,
					parseTagValue: !0,
					parseAttributeValue: !1,
					trimValues: !0,
					cdataPropName: !1,
					numberParseOptions: {
						hex: !0,
						leadingZeros: !0,
						eNotation: !0
					},
					tagValueProcessor: function(e, t) {
						return t
					},
					attributeValueProcessor: function(e, t) {
						return t
					},
					stopNodes: [],
					alwaysCreateTextNode: !1,
					isArray: () => !1,
					commentPropName: !1,
					unpairedTags: [],
					processEntities: !0,
					htmlEntities: !1,
					ignoreDeclaration: !1,
					ignorePiTags: !1,
					transformTagName: !1,
					transformAttributeName: !1,
					updateTag: function(e, t, n) {
						return e
					}
				};
				t.buildOptions = function(e) {
					return Object.assign({}, n, e)
				}, t.defaultOptions = n
			},
			680: (e, t, n) => {
				"use strict";
				const r = n(334),
					s = n(832),
					i = n(400),
					a = n(983);

				function o(e) {
					const t = Object.keys(e);
					for (let n = 0; n < t.length; n++) {
						const r = t[n];
						this.lastEntities[r] = {
							regex: new RegExp("&" + r + ";", "g"),
							val: e[r]
						}
					}
				}

				function l(e, t, n, r, s, i, a) {
					if (void 0 !== e && (this.options.trimValues && !r && (e = e.trim()), e.length > 0)) {
						a || (e = this.replaceEntitiesValue(e));
						const r = this.options.tagValueProcessor(t, e, n, s, i);
						if (null == r) return e;
						if (typeof r != typeof e || r !== e) return r;
						if (this.options.trimValues) return N(e, this.options.parseTagValue, this.options.numberParseOptions);
						return e.trim() === e ? N(e, this.options.parseTagValue, this.options.numberParseOptions) : e
					}
				}

				function c(e) {
					if (this.options.removeNSPrefix) {
						const t = e.split(":"),
							n = "/" === e.charAt(0) ? "/" : "";
						if ("xmlns" === t[0]) return "";
						2 === t.length && (e = n + t[1])
					}
					return e
				}
				const d = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");

				function m(e, t, n) {
					if (!this.options.ignoreAttributes && "string" == typeof e) {
						const n = r.getAllMatches(e, d),
							s = n.length,
							i = {};
						for (let e = 0; e < s; e++) {
							const r = this.resolveNameSpace(n[e][1]);
							let s = n[e][4],
								a = this.options.attributeNamePrefix + r;
							if (r.length)
								if (this.options.transformAttributeName && (a = this.options.transformAttributeName(a)), "__proto__" === a && (a = "#__proto__"), void 0 !== s) {
									this.options.trimValues && (s = s.trim()), s = this.replaceEntitiesValue(s);
									const e = this.options.attributeValueProcessor(r, s, t);
									i[a] = null == e ? s : typeof e != typeof s || e !== s ? e : N(s, this.options.parseAttributeValue, this.options.numberParseOptions)
								} else this.options.allowBooleanAttributes && (i[a] = !0)
						}
						if (!Object.keys(i).length) return;
						if (this.options.attributesGroupName) {
							const e = {};
							return e[this.options.attributesGroupName] = i, e
						}
						return i
					}
				}
				const u = function(e) {
					e = e.replace(/\r\n?/g, "\n");
					const t = new s("!xml");
					let n = t,
						r = "",
						a = "";
					for (let o = 0; o < e.length; o++) {
						if ("<" === e[o])
							if ("/" === e[o + 1]) {
								const t = f(e, ">", o, "Closing Tag is not closed.");
								let s = e.substring(o + 2, t).trim();
								if (this.options.removeNSPrefix) {
									const e = s.indexOf(":"); - 1 !== e && (s = s.substr(e + 1))
								}
								this.options.transformTagName && (s = this.options.transformTagName(s)), n && (r = this.saveTextToParentTag(r, n, a));
								const i = a.substring(a.lastIndexOf(".") + 1);
								if (s && -1 !== this.options.unpairedTags.indexOf(s)) throw new Error(`Unpaired tag can not be used as closing tag: </${s}>`);
								let l = 0;
								i && -1 !== this.options.unpairedTags.indexOf(i) ? (l = a.lastIndexOf(".", a.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : l = a.lastIndexOf("."), a = a.substring(0, l), n = this.tagsNodeStack.pop(), r = "", o = t
							} else if ("?" === e[o + 1]) {
							let t = b(e, o, !1, "?>");
							if (!t) throw new Error("Pi Tag is not closed.");
							if (r = this.saveTextToParentTag(r, n, a), this.options.ignoreDeclaration && "?xml" === t.tagName || this.options.ignorePiTags);
							else {
								const e = new s(t.tagName);
								e.add(this.options.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && (e[":@"] = this.buildAttributesMap(t.tagExp, a, t.tagName)), this.addChild(n, e, a)
							}
							o = t.closeIndex + 1
						} else if ("!--" === e.substr(o + 1, 3)) {
							const t = f(e, "--\x3e", o + 4, "Comment is not closed.");
							if (this.options.commentPropName) {
								const s = e.substring(o + 4, t - 2);
								r = this.saveTextToParentTag(r, n, a), n.add(this.options.commentPropName, [{
									[this.options.textNodeName]: s
								}])
							}
							o = t
						} else if ("!D" === e.substr(o + 1, 2)) {
							const t = i(e, o);
							this.docTypeEntities = t.entities, o = t.i
						} else if ("![" === e.substr(o + 1, 2)) {
							const t = f(e, "]]>", o, "CDATA is not closed.") - 2,
								s = e.substring(o + 9, t);
							r = this.saveTextToParentTag(r, n, a);
							let i = this.parseTextData(s, n.tagname, a, !0, !1, !0, !0);
							null == i && (i = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{
								[this.options.textNodeName]: s
							}]) : n.add(this.options.textNodeName, i), o = t + 2
						} else {
							let i = b(e, o, this.options.removeNSPrefix),
								l = i.tagName;
							const c = i.rawTagName;
							let d = i.tagExp,
								m = i.attrExpPresent,
								u = i.closeIndex;
							this.options.transformTagName && (l = this.options.transformTagName(l)), n && r && "!xml" !== n.tagname && (r = this.saveTextToParentTag(r, n, a, !1));
							const p = n;
							if (p && -1 !== this.options.unpairedTags.indexOf(p.tagname) && (n = this.tagsNodeStack.pop(), a = a.substring(0, a.lastIndexOf("."))), l !== t.tagname && (a += a ? "." + l : l), this.isItStopNode(this.options.stopNodes, a, l)) {
								let t = "";
								if (d.length > 0 && d.lastIndexOf("/") === d.length - 1) "/" === l[l.length - 1] ? (l = l.substr(0, l.length - 1), a = a.substr(0, a.length - 1), d = l) : d = d.substr(0, d.length - 1), o = i.closeIndex;
								else if (-1 !== this.options.unpairedTags.indexOf(l)) o = i.closeIndex;
								else {
									const n = this.readStopNodeData(e, c, u + 1);
									if (!n) throw new Error(`Unexpected end of ${c}`);
									o = n.i, t = n.tagContent
								}
								const r = new s(l);
								l !== d && m && (r[":@"] = this.buildAttributesMap(d, a, l)), t && (t = this.parseTextData(t, l, a, !0, m, !0, !0)), a = a.substr(0, a.lastIndexOf(".")), r.add(this.options.textNodeName, t), this.addChild(n, r, a)
							} else {
								if (d.length > 0 && d.lastIndexOf("/") === d.length - 1) {
									"/" === l[l.length - 1] ? (l = l.substr(0, l.length - 1), a = a.substr(0, a.length - 1), d = l) : d = d.substr(0, d.length - 1), this.options.transformTagName && (l = this.options.transformTagName(l));
									const e = new s(l);
									l !== d && m && (e[":@"] = this.buildAttributesMap(d, a, l)), this.addChild(n, e, a), a = a.substr(0, a.lastIndexOf("."))
								} else {
									const e = new s(l);
									this.tagsNodeStack.push(n), l !== d && m && (e[":@"] = this.buildAttributesMap(d, a, l)), this.addChild(n, e, a), n = e
								}
								r = "", o = u
							}
						} else r += e[o]
					}
					return t.child
				};

				function p(e, t, n) {
					const r = this.options.updateTag(t.tagname, n, t[":@"]);
					!1 === r || ("string" == typeof r ? (t.tagname = r, e.addChild(t)) : e.addChild(t))
				}
				const h = function(e) {
					if (this.options.processEntities) {
						for (let t in this.docTypeEntities) {
							const n = this.docTypeEntities[t];
							e = e.replace(n.regx, n.val)
						}
						for (let t in this.lastEntities) {
							const n = this.lastEntities[t];
							e = e.replace(n.regex, n.val)
						}
						if (this.options.htmlEntities)
							for (let t in this.htmlEntities) {
								const n = this.htmlEntities[t];
								e = e.replace(n.regex, n.val)
							}
						e = e.replace(this.ampEntity.regex, this.ampEntity.val)
					}
					return e
				};

				function g(e, t, n, r) {
					return e && (void 0 === r && (r = 0 === Object.keys(t.child).length), void 0 !== (e = this.parseTextData(e, t.tagname, n, !1, !!t[":@"] && 0 !== Object.keys(t[":@"]).length, r)) && "" !== e && t.add(this.options.textNodeName, e), e = ""), e
				}

				function y(e, t, n) {
					const r = "*." + n;
					for (const n in e) {
						const s = e[n];
						if (r === s || t === s) return !0
					}
					return !1
				}

				function f(e, t, n, r) {
					const s = e.indexOf(t, n);
					if (-1 === s) throw new Error(r);
					return s + t.length - 1
				}

				function b(e, t, n, r = ">") {
					const s = function(e, t, n = ">") {
						let r, s = "";
						for (let i = t; i < e.length; i++) {
							let t = e[i];
							if (r) t === r && (r = "");
							else if ('"' === t || "'" === t) r = t;
							else if (t === n[0]) {
								if (!n[1]) return {
									data: s,
									index: i
								};
								if (e[i + 1] === n[1]) return {
									data: s,
									index: i
								}
							} else "\t" === t && (t = " ");
							s += t
						}
					}(e, t + 1, r);
					if (!s) return;
					let i = s.data;
					const a = s.index,
						o = i.search(/\s/);
					let l = i,
						c = !0; - 1 !== o && (l = i.substring(0, o), i = i.substring(o + 1).trimStart());
					const d = l;
					if (n) {
						const e = l.indexOf(":"); - 1 !== e && (l = l.substr(e + 1), c = l !== s.data.substr(e + 1))
					}
					return {
						tagName: l,
						tagExp: i,
						closeIndex: a,
						attrExpPresent: c,
						rawTagName: d
					}
				}

				function x(e, t, n) {
					const r = n;
					let s = 1;
					for (; n < e.length; n++)
						if ("<" === e[n])
							if ("/" === e[n + 1]) {
								const i = f(e, ">", n, `${t} is not closed`);
								if (e.substring(n + 2, i).trim() === t && (s--, 0 === s)) return {
									tagContent: e.substring(r, n),
									i
								};
								n = i
							} else if ("?" === e[n + 1]) {
						n = f(e, "?>", n + 1, "StopNode is not closed.")
					} else if ("!--" === e.substr(n + 1, 3)) {
						n = f(e, "--\x3e", n + 3, "StopNode is not closed.")
					} else if ("![" === e.substr(n + 1, 2)) {
						n = f(e, "]]>", n, "StopNode is not closed.") - 2
					} else {
						const r = b(e, n, ">");
						if (r) {
							(r && r.tagName) === t && "/" !== r.tagExp[r.tagExp.length - 1] && s++, n = r.closeIndex
						}
					}
				}

				function N(e, t, n) {
					if (t && "string" == typeof e) {
						const t = e.trim();
						return "true" === t || "false" !== t && a(e, n)
					}
					return r.isExist(e) ? e : ""
				}
				e.exports = class {
					constructor(e) {
						this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
							apos: {
								regex: /&(apos|#39|#x27);/g,
								val: "'"
							},
							gt: {
								regex: /&(gt|#62|#x3E);/g,
								val: ">"
							},
							lt: {
								regex: /&(lt|#60|#x3C);/g,
								val: "<"
							},
							quot: {
								regex: /&(quot|#34|#x22);/g,
								val: '"'
							}
						}, this.ampEntity = {
							regex: /&(amp|#38|#x26);/g,
							val: "&"
						}, this.htmlEntities = {
							space: {
								regex: /&(nbsp|#160);/g,
								val: " "
							},
							cent: {
								regex: /&(cent|#162);/g,
								val: "Â¢"
							},
							pound: {
								regex: /&(pound|#163);/g,
								val: "Â£"
							},
							yen: {
								regex: /&(yen|#165);/g,
								val: "Â¥"
							},
							euro: {
								regex: /&(euro|#8364);/g,
								val: "â‚¬"
							},
							copyright: {
								regex: /&(copy|#169);/g,
								val: "Â©"
							},
							reg: {
								regex: /&(reg|#174);/g,
								val: "Â®"
							},
							inr: {
								regex: /&(inr|#8377);/g,
								val: "â‚¹"
							},
							num_dec: {
								regex: /&#([0-9]{1,7});/g,
								val: (e, t) => String.fromCharCode(Number.parseInt(t, 10))
							},
							num_hex: {
								regex: /&#x([0-9a-fA-F]{1,6});/g,
								val: (e, t) => String.fromCharCode(Number.parseInt(t, 16))
							}
						}, this.addExternalEntities = o, this.parseXml = u, this.parseTextData = l, this.resolveNameSpace = c, this.buildAttributesMap = m, this.isItStopNode = y, this.replaceEntitiesValue = h, this.readStopNodeData = x, this.saveTextToParentTag = g, this.addChild = p
					}
				}
			},
			923: (e, t, n) => {
				const {
					buildOptions: r
				} = n(460), s = n(680), {
					prettify: i
				} = n(629), a = n(918);
				e.exports = class {
					constructor(e) {
						this.externalEntities = {}, this.options = r(e)
					}
					parse(e, t) {
						if ("string" == typeof e);
						else {
							if (!e.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
							e = e.toString()
						}
						if (t) {
							!0 === t && (t = {});
							const n = a.validate(e, t);
							if (!0 !== n) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`)
						}
						const n = new s(this.options);
						n.addExternalEntities(this.externalEntities);
						const r = n.parseXml(e);
						return this.options.preserveOrder || void 0 === r ? r : i(r, this.options)
					}
					addEntity(e, t) {
						if (-1 !== t.indexOf("&")) throw new Error("Entity value can't have '&'");
						if (-1 !== e.indexOf("&") || -1 !== e.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
						if ("&" === t) throw new Error("An entity with value '&' is not permitted");
						this.externalEntities[e] = t
					}
				}
			},
			629: (e, t) => {
				"use strict";

				function n(e, t, a) {
					let o;
					const l = {};
					for (let c = 0; c < e.length; c++) {
						const d = e[c],
							m = r(d);
						let u = "";
						if (u = void 0 === a ? m : a + "." + m, m === t.textNodeName) void 0 === o ? o = d[m] : o += "" + d[m];
						else {
							if (void 0 === m) continue;
							if (d[m]) {
								let e = n(d[m], t, u);
								const r = i(e, t);
								d[":@"] ? s(e, d[":@"], u, t) : 1 !== Object.keys(e).length || void 0 === e[t.textNodeName] || t.alwaysCreateTextNode ? 0 === Object.keys(e).length && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = "") : e = e[t.textNodeName], void 0 !== l[m] && l.hasOwnProperty(m) ? (Array.isArray(l[m]) || (l[m] = [l[m]]), l[m].push(e)) : t.isArray(m, u, r) ? l[m] = [e] : l[m] = e
							}
						}
					}
					return "string" == typeof o ? o.length > 0 && (l[t.textNodeName] = o) : void 0 !== o && (l[t.textNodeName] = o), l
				}

				function r(e) {
					const t = Object.keys(e);
					for (let e = 0; e < t.length; e++) {
						const n = t[e];
						if (":@" !== n) return n
					}
				}

				function s(e, t, n, r) {
					if (t) {
						const s = Object.keys(t),
							i = s.length;
						for (let a = 0; a < i; a++) {
							const i = s[a];
							r.isArray(i, n + "." + i, !0, !0) ? e[i] = [t[i]] : e[i] = t[i]
						}
					}
				}

				function i(e, t) {
					const {
						textNodeName: n
					} = t, r = Object.keys(e).length;
					return 0 === r || !(1 !== r || !e[n] && "boolean" != typeof e[n] && 0 !== e[n])
				}
				t.prettify = function(e, t) {
					return n(e, t)
				}
			},
			832: e => {
				"use strict";
				e.exports = class {
					constructor(e) {
						this.tagname = e, this.child = [], this[":@"] = {}
					}
					add(e, t) {
						"__proto__" === e && (e = "#__proto__"), this.child.push({
							[e]: t
						})
					}
					addChild(e) {
						"__proto__" === e.tagname && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
							[e.tagname]: e.child,
							":@": e[":@"]
						}) : this.child.push({
							[e.tagname]: e.child
						})
					}
				}
			},
			983: e => {
				const t = /^[-+]?0x[a-fA-F0-9]+$/,
					n = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
				!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
				const r = {
					hex: !0,
					leadingZeros: !0,
					decimalPoint: ".",
					eNotation: !0
				};
				e.exports = function(e, s = {}) {
					if (s = Object.assign({}, r, s), !e || "string" != typeof e) return e;
					let i = e.trim();
					if (void 0 !== s.skipLike && s.skipLike.test(i)) return e;
					if (s.hex && t.test(i)) return Number.parseInt(i, 16);
					{
						const t = n.exec(i);
						if (t) {
							const n = t[1],
								r = t[2];
							let a = function(e) {
								if (e && -1 !== e.indexOf(".")) return "." === (e = e.replace(/0+$/, "")) ? e = "0" : "." === e[0] ? e = "0" + e : "." === e[e.length - 1] && (e = e.substr(0, e.length - 1)), e;
								return e
							}(t[3]);
							const o = t[4] || t[6];
							if (!s.leadingZeros && r.length > 0 && n && "." !== i[2]) return e;
							if (!s.leadingZeros && r.length > 0 && !n && "." !== i[1]) return e;
							{
								const t = Number(i),
									l = "" + t;
								return -1 !== l.search(/[eE]/) || o ? s.eNotation ? t : e : -1 !== i.indexOf(".") ? "0" === l && "" === a || l === a || n && l === "-" + a ? t : e : r ? a === l || n + a === l ? t : e : i === l || i === n + l ? t : e
							}
						}
						return e
					}
				}
			},
			846: () => {}
		},
		t = {};

	function n(r) {
		var s = t[r];
		if (void 0 !== s) return s.exports;
		var i = t[r] = {
			exports: {}
		};
		return e[r].call(i.exports, i, i.exports, n), i.exports
	}
	n.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return n.d(t, {
			a: t
		}), t
	}, n.d = (e, t) => {
		for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		})
	}, n.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	};
	var r = {};
	(() => {
		"use strict";
		n.d(r, {
			default: () => xO
		});
		var e = {};

		function t(e) {
			if (s(e)) {
				const t = e.startsWith("hub://") ? 6 : 5;
				"/" == (e = e.substring(t))[e.length - 1] && (e = e.substring(0, e.length - 1));
				const n = e.split("/");
				if (2 == n.length) return {
					org: n[0],
					name: n[1]
				}
			}
			throw Error(`Invalid hub path ${e}`)
		}

		function s(e) {
			return e.startsWith("al://") || e.startsWith("hub://")
		}
		n.r(e), n.d(e, {
			AccessPolicy: () => Py,
			AppendBlobAppendBlockExceptionHeaders: () => ox,
			AppendBlobAppendBlockFromUrlExceptionHeaders: () => cx,
			AppendBlobAppendBlockFromUrlHeaders: () => lx,
			AppendBlobAppendBlockHeaders: () => ax,
			AppendBlobCreateExceptionHeaders: () => ix,
			AppendBlobCreateHeaders: () => sx,
			AppendBlobSealExceptionHeaders: () => mx,
			AppendBlobSealHeaders: () => dx,
			ArrowConfiguration: () => Vy,
			ArrowField: () => Ky,
			BlobAbortCopyFromURLExceptionHeaders: () => Ob,
			BlobAbortCopyFromURLHeaders: () => zb,
			BlobAcquireLeaseExceptionHeaders: () => pb,
			BlobAcquireLeaseHeaders: () => ub,
			BlobBreakLeaseExceptionHeaders: () => Sb,
			BlobBreakLeaseHeaders: () => Nb,
			BlobChangeLeaseExceptionHeaders: () => xb,
			BlobChangeLeaseHeaders: () => bb,
			BlobCopyFromURLExceptionHeaders: () => Eb,
			BlobCopyFromURLHeaders: () => Rb,
			BlobCreateSnapshotExceptionHeaders: () => wb,
			BlobCreateSnapshotHeaders: () => vb,
			BlobDeleteExceptionHeaders: () => Jf,
			BlobDeleteHeaders: () => Qf,
			BlobDeleteImmutabilityPolicyExceptionHeaders: () => ob,
			BlobDeleteImmutabilityPolicyHeaders: () => ab,
			BlobDownloadExceptionHeaders: () => Gf,
			BlobDownloadHeaders: () => Kf,
			BlobFlatListSegment: () => Ey,
			BlobGetAccountInfoExceptionHeaders: () => Ib,
			BlobGetAccountInfoHeaders: () => Ab,
			BlobGetPropertiesExceptionHeaders: () => Xf,
			BlobGetPropertiesHeaders: () => Wf,
			BlobGetTagsExceptionHeaders: () => _b,
			BlobGetTagsHeaders: () => qb,
			BlobHierarchyListSegment: () => Ay,
			BlobItemInternal: () => zy,
			BlobName: () => Oy,
			BlobPrefix: () => Iy,
			BlobPropertiesInternal: () => Ty,
			BlobQueryExceptionHeaders: () => Mb,
			BlobQueryHeaders: () => Bb,
			BlobReleaseLeaseExceptionHeaders: () => gb,
			BlobReleaseLeaseHeaders: () => hb,
			BlobRenewLeaseExceptionHeaders: () => fb,
			BlobRenewLeaseHeaders: () => yb,
			BlobServiceProperties: () => ay,
			BlobServiceStatistics: () => py,
			BlobSetExpiryExceptionHeaders: () => tb,
			BlobSetExpiryHeaders: () => eb,
			BlobSetHttpHeadersExceptionHeaders: () => rb,
			BlobSetHttpHeadersHeaders: () => nb,
			BlobSetImmutabilityPolicyExceptionHeaders: () => ib,
			BlobSetImmutabilityPolicyHeaders: () => sb,
			BlobSetLegalHoldExceptionHeaders: () => cb,
			BlobSetLegalHoldHeaders: () => lb,
			BlobSetMetadataExceptionHeaders: () => mb,
			BlobSetMetadataHeaders: () => db,
			BlobSetTagsExceptionHeaders: () => Lb,
			BlobSetTagsHeaders: () => Db,
			BlobSetTierExceptionHeaders: () => kb,
			BlobSetTierHeaders: () => Tb,
			BlobStartCopyFromURLExceptionHeaders: () => Pb,
			BlobStartCopyFromURLHeaders: () => Cb,
			BlobTag: () => wy,
			BlobTags: () => vy,
			BlobUndeleteExceptionHeaders: () => Yf,
			BlobUndeleteHeaders: () => Zf,
			Block: () => qy,
			BlockBlobCommitBlockListExceptionHeaders: () => Sx,
			BlockBlobCommitBlockListHeaders: () => Nx,
			BlockBlobGetBlockListExceptionHeaders: () => wx,
			BlockBlobGetBlockListHeaders: () => vx,
			BlockBlobPutBlobFromUrlExceptionHeaders: () => gx,
			BlockBlobPutBlobFromUrlHeaders: () => hx,
			BlockBlobStageBlockExceptionHeaders: () => fx,
			BlockBlobStageBlockFromURLExceptionHeaders: () => xx,
			BlockBlobStageBlockFromURLHeaders: () => bx,
			BlockBlobStageBlockHeaders: () => yx,
			BlockBlobUploadExceptionHeaders: () => px,
			BlockBlobUploadHeaders: () => ux,
			BlockList: () => My,
			BlockLookupList: () => By,
			ClearRange: () => Ly,
			ContainerAcquireLeaseExceptionHeaders: () => kf,
			ContainerAcquireLeaseHeaders: () => Tf,
			ContainerBreakLeaseExceptionHeaders: () => _f,
			ContainerBreakLeaseHeaders: () => qf,
			ContainerChangeLeaseExceptionHeaders: () => Lf,
			ContainerChangeLeaseHeaders: () => Df,
			ContainerCreateExceptionHeaders: () => mf,
			ContainerCreateHeaders: () => df,
			ContainerDeleteExceptionHeaders: () => gf,
			ContainerDeleteHeaders: () => hf,
			ContainerFilterBlobsExceptionHeaders: () => Of,
			ContainerFilterBlobsHeaders: () => zf,
			ContainerGetAccessPolicyExceptionHeaders: () => xf,
			ContainerGetAccessPolicyHeaders: () => bf,
			ContainerGetAccountInfoExceptionHeaders: () => Vf,
			ContainerGetAccountInfoHeaders: () => Ff,
			ContainerGetPropertiesExceptionHeaders: () => pf,
			ContainerGetPropertiesHeaders: () => uf,
			ContainerItem: () => yy,
			ContainerListBlobFlatSegmentExceptionHeaders: () => Uf,
			ContainerListBlobFlatSegmentHeaders: () => Hf,
			ContainerListBlobHierarchySegmentExceptionHeaders: () => $f,
			ContainerListBlobHierarchySegmentHeaders: () => jf,
			ContainerProperties: () => fy,
			ContainerReleaseLeaseExceptionHeaders: () => If,
			ContainerReleaseLeaseHeaders: () => Af,
			ContainerRenameExceptionHeaders: () => Pf,
			ContainerRenameHeaders: () => Cf,
			ContainerRenewLeaseExceptionHeaders: () => Mf,
			ContainerRenewLeaseHeaders: () => Bf,
			ContainerRestoreExceptionHeaders: () => wf,
			ContainerRestoreHeaders: () => vf,
			ContainerSetAccessPolicyExceptionHeaders: () => Sf,
			ContainerSetAccessPolicyHeaders: () => Nf,
			ContainerSetMetadataExceptionHeaders: () => ff,
			ContainerSetMetadataHeaders: () => yf,
			ContainerSubmitBatchExceptionHeaders: () => Ef,
			ContainerSubmitBatchHeaders: () => Rf,
			CorsRule: () => dy,
			DelimitedTextConfiguration: () => $y,
			FilterBlobItem: () => Sy,
			FilterBlobSegment: () => Ny,
			GeoReplication: () => hy,
			JsonTextConfiguration: () => Fy,
			KeyInfo: () => by,
			ListBlobsFlatSegmentResponse: () => Ry,
			ListBlobsHierarchySegmentResponse: () => ky,
			ListContainersSegmentResponse: () => gy,
			Logging: () => oy,
			Metrics: () => cy,
			PageBlobClearPagesExceptionHeaders: () => Vb,
			PageBlobClearPagesHeaders: () => Fb,
			PageBlobCopyIncrementalExceptionHeaders: () => rx,
			PageBlobCopyIncrementalHeaders: () => nx,
			PageBlobCreateExceptionHeaders: () => Ub,
			PageBlobCreateHeaders: () => Hb,
			PageBlobGetPageRangesDiffExceptionHeaders: () => Jb,
			PageBlobGetPageRangesDiffHeaders: () => Qb,
			PageBlobGetPageRangesExceptionHeaders: () => Xb,
			PageBlobGetPageRangesHeaders: () => Wb,
			PageBlobResizeExceptionHeaders: () => Yb,
			PageBlobResizeHeaders: () => Zb,
			PageBlobUpdateSequenceNumberExceptionHeaders: () => tx,
			PageBlobUpdateSequenceNumberHeaders: () => ex,
			PageBlobUploadPagesExceptionHeaders: () => $b,
			PageBlobUploadPagesFromURLExceptionHeaders: () => Gb,
			PageBlobUploadPagesFromURLHeaders: () => Kb,
			PageBlobUploadPagesHeaders: () => jb,
			PageList: () => _y,
			PageRange: () => Dy,
			QueryFormat: () => jy,
			QueryRequest: () => Hy,
			QuerySerialization: () => Uy,
			RetentionPolicy: () => ly,
			ServiceFilterBlobsExceptionHeaders: () => cf,
			ServiceFilterBlobsHeaders: () => lf,
			ServiceGetAccountInfoExceptionHeaders: () => sf,
			ServiceGetAccountInfoHeaders: () => rf,
			ServiceGetPropertiesExceptionHeaders: () => Qy,
			ServiceGetPropertiesHeaders: () => Xy,
			ServiceGetStatisticsExceptionHeaders: () => Zy,
			ServiceGetStatisticsHeaders: () => Jy,
			ServiceGetUserDelegationKeyExceptionHeaders: () => nf,
			ServiceGetUserDelegationKeyHeaders: () => tf,
			ServiceListContainersSegmentExceptionHeaders: () => ef,
			ServiceListContainersSegmentHeaders: () => Yy,
			ServiceSetPropertiesExceptionHeaders: () => Wy,
			ServiceSetPropertiesHeaders: () => Gy,
			ServiceSubmitBatchExceptionHeaders: () => of,
			ServiceSubmitBatchHeaders: () => af,
			SignedIdentifier: () => Cy,
			StaticWebsite: () => my,
			StorageError: () => uy,
			UserDelegationKey: () => xy
		});
		var i = function(e, t, n, r) {
			return new(n || (n = Promise))((function(s, i) {
				function a(e) {
					try {
						l(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function l(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, o)
				}
				l((r = r.apply(e, t || [])).next())
			}))
		};
		class a {
			constructor() {
				this.url_ = a.defaultURL, this.headers_ = new Headers, this.headers_.set("Content-Type", "application/json")
			}
			static get instance() {
				return null == this.instance_ && (this.instance_ = new a), this.instance_
			}
			dataset_creds(e, n) {
				return i(this, void 0, void 0, (function*() {
					const r = t(e),
						s = r.org,
						i = r.name,
						a = fetch(`${this.url_}/api/org/${s}/ds/${i}/creds?mode=r`, {
							method: "GET",
							headers: {
								Authorization: `Bearer ${n}`
							}
						}),
						o = yield(yield a).json();
					return "gs" === o.path.substring(0, 2) || "gcs" === o.path.substring(0, 3) ? {
						fetchType: "gcs",
						credentials: {
							oauthToken: o.creds.oauth_token,
							accessToken: o.creds.gcs_oauth_token
						},
						path: o.path + "/"
					} : "az" === o.path.substring(0, 2) ? {
						fetchType: "azure",
						credentials: {
							blobSasToken: o.creds.sas_token,
							accountName: o.creds.account_name
						},
						path: o.path + "/"
					} : {
						fetchType: "aws",
						credentials: {
							credentials: {
								accessKeyId: o.creds.aws_access_key_id,
								secretAccessKey: o.creds.aws_secret_access_key,
								sessionToken: o.creds.aws_session_token,
								endpointUrl: o.creds.endpoint_url
							},
							region: o.creds.region,
							endpoint: o.creds.endpoint_url
						},
						path: o.path + "/"
					}
				}))
			}
			presigned_url(e, n, r, s) {
				var a;
				return i(this, void 0, void 0, (function*() {
					const i = t(e).org,
						o = fetch(`${this.url_}/api/org/${i}/managed-credentials/blob/url/presigned?blob_path=${n}&creds_key=${r}&expiration=3600`, {
							method: "GET",
							headers: {
								Authorization: `Bearer ${s}`
							}
						}),
						l = yield(yield o).json();
					return null !== (a = null == l ? void 0 : l.data) && void 0 !== a ? a : ""
				}))
			}
			storage_creds(e, n, r) {
				return i(this, void 0, void 0, (function*() {
					const s = t(e).org,
						i = fetch(`${this.url_}/api/org/${s}/storage/name?query=${n}`, {
							method: "GET",
							headers: {
								Authorization: `Bearer ${r}`
							}
						});
					return yield(yield i).json()
				}))
			}
		}
		a.defaultURL = "https://app.activeloop.ai", a.instance_ = null;
		const o = e => {
			let t = e.httpHandler;
			return {
				setHttpHandler(e) {
					t = e
				},
				httpHandler: () => t,
				updateHttpClientConfig(e, n) {
					t.updateHttpClientConfig(e, n)
				},
				httpHandlerConfigs: () => t.httpHandlerConfigs()
			}
		};
		var l, c, d, m;
		! function(e) {
			e.HEADER = "header", e.QUERY = "query"
		}(l || (l = {})),
		function(e) {
			e.HEADER = "header", e.QUERY = "query"
		}(c || (c = {})),
		function(e) {
			e.HTTP = "http", e.HTTPS = "https"
		}(d || (d = {})),
		function(e) {
			e.MD5 = "md5", e.CRC32 = "crc32", e.CRC32C = "crc32c", e.SHA1 = "sha1", e.SHA256 = "sha256"
		}(m || (m = {}));
		var u;
		! function(e) {
			e[e.HEADER = 0] = "HEADER", e[e.TRAILER = 1] = "TRAILER"
		}(u || (u = {}));
		const p = "__smithy_context";
		var h, g;
		! function(e) {
			e.PROFILE = "profile", e.SSO_SESSION = "sso-session", e.SERVICES = "services"
		}(h || (h = {})),
		function(e) {
			e.HTTP_0_9 = "http/0.9", e.HTTP_1_0 = "http/1.0", e.TDS_8_0 = "tds/8.0"
		}(g || (g = {}));
		class y {
			constructor(e) {
				this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== e.protocol.slice(-1) ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? `/${e.path}` : e.path : "/", this.username = e.username, this.password = e.password, this.fragment = e.fragment
			}
			static clone(e) {
				const t = new y({
					...e,
					headers: {
						...e.headers
					}
				});
				return t.query && (t.query = function(e) {
					return Object.keys(e).reduce(((t, n) => {
						const r = e[n];
						return {
							...t,
							[n]: Array.isArray(r) ? [...r] : r
						}
					}), {})
				}(t.query)), t
			}
			static isInstance(e) {
				if (!e) return !1;
				const t = e;
				return "method" in t && "protocol" in t && "hostname" in t && "path" in t && "object" == typeof t.query && "object" == typeof t.headers
			}
			clone() {
				return y.clone(this)
			}
		}
		class f {
			constructor(e) {
				this.statusCode = e.statusCode, this.reason = e.reason, this.headers = e.headers || {}, this.body = e.body
			}
			static isInstance(e) {
				if (!e) return !1;
				const t = e;
				return "number" == typeof t.statusCode && "object" == typeof t.headers
			}
		}
		const b = {
				step: "build",
				tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
				name: "addExpectContinueMiddleware",
				override: !0
			},
			x = e => ({
				applyToStack: t => {
					t.add(function(e) {
						return t => async n => {
							const {
								request: r
							} = n;
							return y.isInstance(r) && r.body && "node" === e.runtime && "FetchHttpHandler" !== e.requestHandler?.constructor?.name && (r.headers = {
								...r.headers,
								Expect: "100-continue"
							}), t({
								...n,
								request: r
							})
						}
					}(e), b)
				}
			}),
			N = {
				WHEN_SUPPORTED: "WHEN_SUPPORTED",
				WHEN_REQUIRED: "WHEN_REQUIRED"
			},
			S = N.WHEN_SUPPORTED,
			v = N.WHEN_SUPPORTED;
		var w, C;
		! function(e) {
			e.MD5 = "MD5", e.CRC32 = "CRC32", e.CRC32C = "CRC32C", e.SHA1 = "SHA1", e.SHA256 = "SHA256"
		}(w || (w = {})),
		function(e) {
			e.HEADER = "header", e.TRAILER = "trailer"
		}(C || (C = {}));
		const P = w.MD5,
			R = w.CRC32;
		var E;
		! function(e) {
			e.ENV = "env", e.CONFIG = "shared config entry"
		}(E || (E = {}));

		function z(e, t, n) {
			e.__aws_sdk_context ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {}) : e.__aws_sdk_context = {
				features: {}
			}, e.__aws_sdk_context.features[t] = n
		}
		const O = [w.CRC32, w.CRC32C, w.SHA1, w.SHA256],
			T = [w.SHA256, w.SHA1, w.CRC32, w.CRC32C],
			k = e => e === w.MD5 ? "content-md5" : `x-amz-checksum-${e.toLowerCase()}`,
			A = e => "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(e),
			I = e => void 0 !== e && "string" != typeof e && !ArrayBuffer.isView(e) && !A(e);

		function B(e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var s = 0;
				for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
			}
			return n
		}

		function M(e, t, n, r) {
			return new(n || (n = Promise))((function(s, i) {
				function a(e) {
					try {
						l(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function l(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, o)
				}
				l((r = r.apply(e, t || [])).next())
			}))
		}

		function q(e, t) {
			var n, r, s, i = {
					label: 0,
					sent: function() {
						if (1 & s[0]) throw s[1];
						return s[1]
					},
					trys: [],
					ops: []
				},
				a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
			return a.next = o(0), a.throw = o(1), a.return = o(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
				return this
			}), a;

			function o(o) {
				return function(l) {
					return function(o) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a && (a = 0, o[0] && (i = 0)), i;) try {
							if (n = 1, r && (s = 2 & o[0] ? r.return : o[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, o[1])).done) return s;
							switch (r = 0, s && (o = [2 & o[0], s.value]), o[0]) {
								case 0:
								case 1:
									s = o;
									break;
								case 4:
									return i.label++, {
										value: o[1],
										done: !1
									};
								case 5:
									i.label++, r = o[1], o = [0];
									continue;
								case 7:
									o = i.ops.pop(), i.trys.pop();
									continue;
								default:
									if (!(s = i.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
										i = 0;
										continue
									}
									if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
										i.label = o[1];
										break
									}
									if (6 === o[0] && i.label < s[1]) {
										i.label = s[1], s = o;
										break
									}
									if (s && i.label < s[2]) {
										i.label = s[2], i.ops.push(o);
										break
									}
									s[2] && i.ops.pop(), i.trys.pop();
									continue
							}
							o = t.call(e, i)
						} catch (e) {
							o = [6, e], r = 0
						} finally {
							n = s = 0
						}
						if (5 & o[0]) throw o[1];
						return {
							value: o[0] ? o[1] : void 0,
							done: !0
						}
					}([o, l])
				}
			}
		}
		Object.create;

		function _(e) {
			var t = "function" == typeof Symbol && Symbol.iterator,
				n = t && e[t],
				r = 0;
			if (n) return n.call(e);
			if (e && "number" == typeof e.length) return {
				next: function() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					}
				}
			};
			throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
		}

		function D(e) {
			return this instanceof D ? (this.v = e, this) : new D(e)
		}

		function L(e, t, n) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var r, s = n.apply(e, t || []),
				i = [];
			return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", (function(e) {
				return function(t) {
					return Promise.resolve(t).then(e, c)
				}
			})), r[Symbol.asyncIterator] = function() {
				return this
			}, r;

			function a(e, t) {
				s[e] && (r[e] = function(t) {
					return new Promise((function(n, r) {
						i.push([e, t, n, r]) > 1 || o(e, t)
					}))
				}, t && (r[e] = t(r[e])))
			}

			function o(e, t) {
				try {
					! function(e) {
						e.value instanceof D ? Promise.resolve(e.value.v).then(l, c) : d(i[0][2], e)
					}(s[e](t))
				} catch (e) {
					d(i[0][3], e)
				}
			}

			function l(e) {
				o("next", e)
			}

			function c(e) {
				o("throw", e)
			}

			function d(e, t) {
				e(t), i.shift(), i.length && o(i[0][0], i[0][1])
			}
		}

		function H(e) {
			var t, n;
			return t = {}, r("next"), r("throw", (function(e) {
				throw e
			})), r("return"), t[Symbol.iterator] = function() {
				return this
			}, t;

			function r(r, s) {
				t[r] = e[r] ? function(t) {
					return (n = !n) ? {
						value: D(e[r](t)),
						done: !1
					} : s ? s(t) : t
				} : s
			}
		}

		function U(e) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var t, n = e[Symbol.asyncIterator];
			return n ? n.call(e) : (e = _(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
				return this
			}, t);

			function r(n) {
				t[n] = e[n] && function(t) {
					return new Promise((function(r, s) {
						(function(e, t, n, r) {
							Promise.resolve(r).then((function(t) {
								e({
									value: t,
									done: n
								})
							}), t)
						})(r, s, (t = e[n](t)).done, t.value)
					}))
				}
			}
		}
		Object.create;
		"function" == typeof SuppressedError && SuppressedError;
		var j = "undefined" != typeof Buffer && Buffer.from ? function(e) {
			return Buffer.from(e, "utf8")
		} : e => (new TextEncoder).encode(e);

		function $(e) {
			return e instanceof Uint8Array ? e : "string" == typeof e ? j(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
		}

		function F(e) {
			return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
		}

		function V(e) {
			return new Uint8Array([(4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e])
		}

		function K(e) {
			if (!Uint32Array.from) {
				for (var t = new Uint32Array(e.length), n = 0; n < e.length;) t[n] = e[n], n += 1;
				return t
			}
			return Uint32Array.from(e)
		}
		var G = function() {
			function e() {
				this.crc32 = new W
			}
			return e.prototype.update = function(e) {
				F(e) || this.crc32.update($(e))
			}, e.prototype.digest = function() {
				return M(this, void 0, void 0, (function() {
					return q(this, (function(e) {
						return [2, V(this.crc32.digest())]
					}))
				}))
			}, e.prototype.reset = function() {
				this.crc32 = new W
			}, e
		}();
		var W = function() {
				function e() {
					this.checksum = 4294967295
				}
				return e.prototype.update = function(e) {
					var t, n;
					try {
						for (var r = _(e), s = r.next(); !s.done; s = r.next()) {
							var i = s.value;
							this.checksum = this.checksum >>> 8 ^ X[255 & (this.checksum ^ i)]
						}
					} catch (e) {
						t = {
							error: e
						}
					} finally {
						try {
							s && !s.done && (n = r.return) && n.call(r)
						} finally {
							if (t) throw t.error
						}
					}
					return this
				}, e.prototype.digest = function() {
					return (4294967295 ^ this.checksum) >>> 0
				}, e
			}(),
			X = K([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]),
			Q = function() {
				function e() {
					this.crc32c = new J
				}
				return e.prototype.update = function(e) {
					F(e) || this.crc32c.update($(e))
				}, e.prototype.digest = function() {
					return M(this, void 0, void 0, (function() {
						return q(this, (function(e) {
							return [2, V(this.crc32c.digest())]
						}))
					}))
				}, e.prototype.reset = function() {
					this.crc32c = new J
				}, e
			}();
		var J = function() {
				function e() {
					this.checksum = 4294967295
				}
				return e.prototype.update = function(e) {
					var t, n;
					try {
						for (var r = _(e), s = r.next(); !s.done; s = r.next()) {
							var i = s.value;
							this.checksum = this.checksum >>> 8 ^ Z[255 & (this.checksum ^ i)]
						}
					} catch (e) {
						t = {
							error: e
						}
					} finally {
						try {
							s && !s.done && (n = r.return) && n.call(r)
						} finally {
							if (t) throw t.error
						}
					}
					return this
				}, e.prototype.digest = function() {
					return (4294967295 ^ this.checksum) >>> 0
				}, e
			}(),
			Z = K([0, 4067132163, 3778769143, 324072436, 3348797215, 904991772, 648144872, 3570033899, 2329499855, 2024987596, 1809983544, 2575936315, 1296289744, 3207089363, 2893594407, 1578318884, 274646895, 3795141740, 4049975192, 51262619, 3619967088, 632279923, 922689671, 3298075524, 2592579488, 1760304291, 2075979607, 2312596564, 1562183871, 2943781820, 3156637768, 1313733451, 549293790, 3537243613, 3246849577, 871202090, 3878099393, 357341890, 102525238, 4101499445, 2858735121, 1477399826, 1264559846, 3107202533, 1845379342, 2677391885, 2361733625, 2125378298, 820201905, 3263744690, 3520608582, 598981189, 4151959214, 85089709, 373468761, 3827903834, 3124367742, 1213305469, 1526817161, 2842354314, 2107672161, 2412447074, 2627466902, 1861252501, 1098587580, 3004210879, 2688576843, 1378610760, 2262928035, 1955203488, 1742404180, 2511436119, 3416409459, 969524848, 714683780, 3639785095, 205050476, 4266873199, 3976438427, 526918040, 1361435347, 2739821008, 2954799652, 1114974503, 2529119692, 1691668175, 2005155131, 2247081528, 3690758684, 697762079, 986182379, 3366744552, 476452099, 3993867776, 4250756596, 255256311, 1640403810, 2477592673, 2164122517, 1922457750, 2791048317, 1412925310, 1197962378, 3037525897, 3944729517, 427051182, 170179418, 4165941337, 746937522, 3740196785, 3451792453, 1070968646, 1905808397, 2213795598, 2426610938, 1657317369, 3053634322, 1147748369, 1463399397, 2773627110, 4215344322, 153784257, 444234805, 3893493558, 1021025245, 3467647198, 3722505002, 797665321, 2197175160, 1889384571, 1674398607, 2443626636, 1164749927, 3070701412, 2757221520, 1446797203, 137323447, 4198817972, 3910406976, 461344835, 3484808360, 1037989803, 781091935, 3705997148, 2460548119, 1623424788, 1939049696, 2180517859, 1429367560, 2807687179, 3020495871, 1180866812, 410100952, 3927582683, 4182430767, 186734380, 3756733383, 763408580, 1053836080, 3434856499, 2722870694, 1344288421, 1131464017, 2971354706, 1708204729, 2545590714, 2229949006, 1988219213, 680717673, 3673779818, 3383336350, 1002577565, 4010310262, 493091189, 238226049, 4233660802, 2987750089, 1082061258, 1395524158, 2705686845, 1972364758, 2279892693, 2494862625, 1725896226, 952904198, 3399985413, 3656866545, 731699698, 4283874585, 222117402, 510512622, 3959836397, 3280807620, 837199303, 582374963, 3504198960, 68661723, 4135334616, 3844915500, 390545967, 1230274059, 3141532936, 2825850620, 1510247935, 2395924756, 2091215383, 1878366691, 2644384480, 3553878443, 565732008, 854102364, 3229815391, 340358836, 3861050807, 4117890627, 119113024, 1493875044, 2875275879, 3090270611, 1247431312, 2660249211, 1828433272, 2141937292, 2378227087, 3811616794, 291187481, 34330861, 4032846830, 615137029, 3603020806, 3314634738, 939183345, 1776939221, 2609017814, 2295496738, 2058945313, 2926798794, 1545135305, 1330124605, 3173225534, 4084100981, 17165430, 307568514, 3762199681, 888469610, 3332340585, 3587147933, 665062302, 2042050490, 2346497209, 2559330125, 1793573966, 3190661285, 1279665062, 1595330642, 2910671697]);
		const Y = (e, t) => ({
				[w.MD5]: t.md5,
				[w.CRC32]: G,
				[w.CRC32C]: Q,
				[w.SHA1]: t.sha1,
				[w.SHA256]: t.sha256
			} [e]),
			ee = e => (new TextEncoder).encode(e),
			te = e => "string" == typeof e ? ee(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e),
			ne = (e, t) => {
				const n = new e;
				return n.update(te(t || "")), n.digest()
			},
			re = {
				name: "flexibleChecksumsMiddleware",
				step: "build",
				tags: ["BODY_CHECKSUM"],
				override: !0
			},
			se = (e, t) => (n, r) => async s => {
				if (!y.isInstance(s.request)) return n(s);
				const {
					request: i
				} = s, {
					body: a,
					headers: o
				} = i, {
					base64Encoder: l,
					streamHasher: c
				} = e, {
					input: d,
					requestChecksumRequired: m,
					requestAlgorithmMember: u
				} = t, p = ((e, {
					requestChecksumRequired: t,
					requestAlgorithmMember: n
				}, r) => {
					const s = r ? R : P;
					if (!n || !e[n]) return t ? s : void 0;
					const i = e[n];
					if (!O.includes(i)) throw new Error(`The checksum algorithm "${i}" is not supported by the client. Select one of ${O}.`);
					return i
				})(d, {
					requestChecksumRequired: m,
					requestAlgorithmMember: u
				}, !!r.isS3ExpressBucket);
				let h = a,
					g = o;
				if (p) {
					switch (p) {
						case w.CRC32:
							z(r, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
							break;
						case w.CRC32C:
							z(r, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
							break;
						case w.SHA1:
							z(r, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
							break;
						case w.SHA256:
							z(r, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y")
					}
					const t = k(p),
						n = Y(p, e);
					if (I(a)) {
						const {
							getAwsChunkedEncodingStream: r,
							bodyLengthChecker: s
						} = e;
						h = r(a, {
							base64Encoder: l,
							bodyLengthChecker: s,
							checksumLocationName: t,
							checksumAlgorithmFn: n,
							streamHasher: c
						}), g = {
							...o,
							"content-encoding": o["content-encoding"] ? `${o["content-encoding"]},aws-chunked` : "aws-chunked",
							"transfer-encoding": "chunked",
							"x-amz-decoded-content-length": o["content-length"],
							"x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
							"x-amz-trailer": t
						}, delete g["content-length"]
					} else if (!((e, t) => {
							const n = e.toLowerCase();
							for (const e of Object.keys(t))
								if (n === e.toLowerCase()) return !0;
							return !1
						})(t, o)) {
						const e = await ne(n, a);
						g = {
							...o,
							[t]: l(e)
						}
					}
				}
				return await n({
					...s,
					request: {
						...i,
						headers: g,
						body: h
					}
				})
			}, ie = (e = []) => {
				const t = [];
				for (const n of T) e.includes(n) && O.includes(n) && t.push(n);
				return t
			};

		function ae(e) {
			return new Blob([e]).stream()
		}
		const oe = {},
			le = new Array(64);
		for (let e = 0, t = "A".charCodeAt(0), n = "Z".charCodeAt(0); e + t <= n; e++) {
			const n = String.fromCharCode(e + t);
			oe[n] = e, le[e] = n
		}
		for (let e = 0, t = "a".charCodeAt(0), n = "z".charCodeAt(0); e + t <= n; e++) {
			const n = String.fromCharCode(e + t),
				r = e + 26;
			oe[n] = r, le[r] = n
		}
		for (let e = 0; e < 10; e++) {
			oe[e.toString(10)] = e + 52;
			const t = e.toString(10),
				n = e + 52;
			oe[t] = n, le[n] = t
		}
		oe["+"] = 62, le[62] = "+", oe["/"] = 63, le[63] = "/";
		const ce = e => {
			let t = e.length / 4 * 3;
			"==" === e.slice(-2) ? t -= 2 : "=" === e.slice(-1) && t--;
			const n = new ArrayBuffer(t),
				r = new DataView(n);
			for (let t = 0; t < e.length; t += 4) {
				let n = 0,
					s = 0;
				for (let r = t, i = t + 3; r <= i; r++)
					if ("=" !== e[r]) {
						if (!(e[r] in oe)) throw new TypeError(`Invalid character ${e[r]} in base64 string.`);
						n |= oe[e[r]] << 6 * (i - r), s += 6
					} else n >>= 6;
				const i = t / 4 * 3;
				n >>= s % 8;
				const a = Math.floor(s / 8);
				for (let e = 0; e < a; e++) {
					const t = 8 * (a - e - 1);
					r.setUint8(i + e, (n & 255 << t) >> t)
				}
			}
			return new Uint8Array(n)
		};

		function de(e) {
			let t;
			t = "string" == typeof e ? ee(e) : e;
			const n = "object" == typeof t && "number" == typeof t.length,
				r = "object" == typeof t && "number" == typeof t.byteOffset && "number" == typeof t.byteLength;
			if (!n && !r) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
			let s = "";
			for (let e = 0; e < t.length; e += 3) {
				let n = 0,
					r = 0;
				for (let s = e, i = Math.min(e + 3, t.length); s < i; s++) n |= t[s] << 8 * (i - s - 1), r += 8;
				const i = Math.ceil(r / 6);
				n <<= 6 * i - r;
				for (let e = 1; e <= i; e++) {
					const t = 6 * (i - e);
					s += le[(n & 63 << t) >> t]
				}
				s += "==".slice(0, 4 - i)
			}
			return s
		}
		const me = e => {
			if ("string" == typeof e) return e;
			if ("object" != typeof e || "number" != typeof e.byteOffset || "number" != typeof e.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
			return new TextDecoder("utf-8").decode(e)
		};
		class ue extends Uint8Array {
			static fromString(e, t = "utf-8") {
				if ("string" == typeof e) return function(e, t) {
					return "base64" === t ? ue.mutate(ce(e)) : ue.mutate(ee(e))
				}(e, t);
				throw new Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`)
			}
			static mutate(e) {
				return Object.setPrototypeOf(e, ue.prototype), e
			}
			transformToString(e = "utf-8") {
				return function(e, t = "utf-8") {
					return "base64" === t ? de(e) : me(e)
				}(this, e)
			}
		}
		const pe = (e, t) => {
				const {
					base64Encoder: n,
					bodyLengthChecker: r,
					checksumAlgorithmFn: s,
					checksumLocationName: i,
					streamHasher: a
				} = t, o = void 0 !== n && void 0 !== r && void 0 !== s && void 0 !== i && void 0 !== a, l = o ? a(s, e) : void 0, c = e.getReader();
				return new ReadableStream({
					async pull(e) {
						const {
							value: t,
							done: s
						} = await c.read();
						if (s) {
							if (e.enqueue("0\r\n"), o) {
								const t = n(await l);
								e.enqueue(`${i}:${t}\r\n`), e.enqueue("\r\n")
							}
							e.close()
						} else e.enqueue(`${(r(t)||0).toString(16)}\r\n${t}\r\n`)
					}
				})
			},
			he = e => encodeURIComponent(e).replace(/[!'()*]/g, ge),
			ge = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`;

		function ye(e) {
			const t = [];
			for (let n of Object.keys(e).sort()) {
				const r = e[n];
				if (n = he(n), Array.isArray(r))
					for (let e = 0, s = r.length; e < s; e++) t.push(`${n}=${he(r[e])}`);
				else {
					let e = n;
					(r || "string" == typeof r) && (e += `=${he(r)}`), t.push(e)
				}
			}
			return t.join("&")
		}

		function fe(e = 0) {
			return new Promise(((t, n) => {
				e && setTimeout((() => {
					const t = new Error(`Request did not complete within ${e} ms`);
					t.name = "TimeoutError", n(t)
				}), e)
			}))
		}
		const be = {
			supported: void 0
		};
		class xe {
			static create(e) {
				return "function" == typeof e?.handle ? e : new xe(e)
			}
			constructor(e) {
				"function" == typeof e ? this.configProvider = e().then((e => e || {})) : (this.config = e ?? {}, this.configProvider = Promise.resolve(this.config)), void 0 === be.supported && (be.supported = Boolean("undefined" != typeof Request && "keepalive" in new Request("https://[::1]")))
			}
			destroy() {}
			async handle(e, {
				abortSignal: t
			} = {}) {
				this.config || (this.config = await this.configProvider);
				const n = this.config.requestTimeout,
					r = !0 === this.config.keepAlive,
					s = this.config.credentials;
				if (t?.aborted) {
					const e = new Error("Request aborted");
					return e.name = "AbortError", Promise.reject(e)
				}
				let i = e.path;
				const a = ye(e.query || {});
				a && (i += `?${a}`), e.fragment && (i += `#${e.fragment}`);
				let o = "";
				if (null != e.username || null != e.password) {
					o = `${e.username??""}:${e.password??""}@`
				}
				const {
					port: l,
					method: c
				} = e, d = `${e.protocol}//${o}${e.hostname}${l?`:${l}`:""}${i}`, m = "GET" === c || "HEAD" === c ? void 0 : e.body, u = {
					body: m,
					headers: new Headers(e.headers),
					method: c,
					credentials: s
				};
				this.config?.cache && (u.cache = this.config.cache), m && (u.duplex = "half"), "undefined" != typeof AbortController && (u.signal = t), be.supported && (u.keepalive = r), "function" == typeof this.config.requestInit && Object.assign(u, this.config.requestInit(e));
				let p = () => {};
				const h = new Request(d, u),
					g = [fetch(h).then((e => {
						const t = e.headers,
							n = {};
						for (const e of t.entries()) n[e[0]] = e[1];
						return null != e.body ? {
							response: new f({
								headers: n,
								reason: e.statusText,
								statusCode: e.status,
								body: e.body
							})
						} : e.blob().then((t => ({
							response: new f({
								headers: n,
								reason: e.statusText,
								statusCode: e.status,
								body: t
							})
						})))
					})), fe(n)];
				return t && g.push(new Promise(((e, n) => {
					const r = () => {
						const e = new Error("Request aborted");
						e.name = "AbortError", n(e)
					};
					if ("function" == typeof t.addEventListener) {
						const e = t;
						e.addEventListener("abort", r, {
							once: !0
						}), p = () => e.removeEventListener("abort", r)
					} else t.onabort = r
				}))), Promise.race(g).finally(p)
			}
			updateHttpClientConfig(e, t) {
				this.config = void 0, this.configProvider = this.configProvider.then((n => (n[e] = t, n)))
			}
			httpHandlerConfigs() {
				return this.config ?? {}
			}
		}
		const Ne = async e => "function" == typeof Blob && e instanceof Blob ? new Uint8Array(await e.arrayBuffer()) : async function(e) {
			const t = [],
				n = e.getReader();
			let r = !1,
				s = 0;
			for (; !r;) {
				const {
					done: e,
					value: i
				} = await n.read();
				i && (t.push(i), s += i.length), r = e
			}
			const i = new Uint8Array(s);
			let a = 0;
			for (const e of t) i.set(e, a), a += e.length;
			return i
		}(e);
		const Se = {},
			ve = {};
		for (let e = 0; e < 256; e++) {
			let t = e.toString(16).toLowerCase();
			1 === t.length && (t = `0${t}`), Se[e] = t, ve[t] = e
		}

		function we(e) {
			if (e.length % 2 != 0) throw new Error("Hex encoded strings must have an even number length");
			const t = new Uint8Array(e.length / 2);
			for (let n = 0; n < e.length; n += 2) {
				const r = e.slice(n, n + 2).toLowerCase();
				if (!(r in ve)) throw new Error(`Cannot decode unrecognized sequence ${r} as hexadecimal`);
				t[n / 2] = ve[r]
			}
			return t
		}

		function Ce(e) {
			let t = "";
			for (let n = 0; n < e.byteLength; n++) t += Se[e[n]];
			return t
		}
		const Pe = e => "function" == typeof ReadableStream && (e?.constructor?.name === ReadableStream.name || e instanceof ReadableStream),
			Re = "The stream has already been transformed.",
			Ee = e => {
				if (!ze(e) && !Pe(e)) {
					throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${e?.__proto__?.constructor?.name||e}`)
				}
				let t = !1;
				const n = async () => {
					if (t) throw new Error(Re);
					return t = !0, await Ne(e)
				};
				return Object.assign(e, {
					transformToByteArray: n,
					transformToString: async e => {
						const t = await n();
						if ("base64" === e) return de(t);
						if ("hex" === e) return Ce(t);
						if (void 0 === e || "utf8" === e || "utf-8" === e) return me(t);
						if ("function" == typeof TextDecoder) return new TextDecoder(e).decode(t);
						throw new Error("TextDecoder is not available, please make sure polyfill is provided.")
					},
					transformToWebStream: () => {
						if (t) throw new Error(Re);
						if (t = !0, ze(e)) return (e => {
							if ("function" != typeof e.stream) throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
							return e.stream()
						})(e);
						if (Pe(e)) return e;
						throw new Error(`Cannot transform payload to web stream, got ${e}`)
					}
				})
			},
			ze = e => "function" == typeof Blob && e instanceof Blob;
		const Oe = "function" == typeof ReadableStream ? ReadableStream : function() {};
		class Te extends Oe {}
		const ke = ({
				expectedChecksum: e,
				checksum: t,
				source: n,
				checksumSourceLocation: r,
				base64Encoder: s
			}) => {
				if (!Pe(n)) throw new Error(`@smithy/util-stream: unsupported source type ${n?.constructor?.name??n} in ChecksumStream.`);
				const i = s ?? de;
				if ("function" != typeof TransformStream) throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
				const a = new TransformStream({
					start() {},
					async transform(e, n) {
						t.update(e), n.enqueue(e)
					},
					async flush(n) {
						const s = await t.digest(),
							a = i(s);
						if (e !== a) {
							const t = new Error(`Checksum mismatch: expected "${e}" but received "${a}" in response header "${r}".`);
							n.error(t)
						} else n.terminate()
					}
				});
				n.pipeThrough(a);
				const o = a.readable;
				return Object.setPrototypeOf(o, Te.prototype), o
			},
			Ae = async (e, {
				checksumAlgorithmFn: t,
				base64Encoder: n
			}) => n(await ne(t, e)), Ie = {
				name: "flexibleChecksumsResponseMiddleware",
				toMiddleware: "deserializerMiddleware",
				relation: "after",
				tags: ["BODY_CHECKSUM"],
				override: !0
			}, Be = (e, t) => (n, r) => async s => {
				if (!y.isInstance(s.request)) return n(s);
				const i = s.input,
					a = await n(s),
					o = a.response;
				let l;
				const {
					requestValidationModeMember: c,
					responseAlgorithms: d
				} = t;
				if (c && "ENABLED" === i[c]) {
					const {
						clientName: t,
						commandName: n
					} = r;
					if ("S3Client" === t && "GetObjectCommand" === n && ie(d).every((e => {
							const t = k(e),
								n = o.headers[t];
							return !n || (e => {
								const t = e.lastIndexOf("-");
								if (-1 !== t) {
									const n = e.slice(t + 1);
									if (!n.startsWith("0")) {
										const e = parseInt(n, 10);
										if (!isNaN(e) && e >= 1 && e <= 1e4) return !0
									}
								}
								return !1
							})(n)
						}))) return a;
					const s = I(o.body);
					s && (l = await e.streamCollector(o.body), o.body = ae(l)), await (async (e, {
						config: t,
						responseAlgorithms: n
					}) => {
						const r = ie(n),
							{
								body: s,
								headers: i
							} = e;
						for (const n of r) {
							const r = k(n),
								a = i[r];
							if (a) {
								const i = Y(n, t),
									{
										base64Encoder: o
									} = t;
								if (I(s)) return void(e.body = ke({
									expectedChecksum: a,
									checksumSourceLocation: r,
									checksum: new i,
									source: s,
									base64Encoder: o
								}));
								const l = await Ae(s, {
									checksumAlgorithmFn: i,
									base64Encoder: o
								});
								if (l === a) break;
								throw new Error(`Checksum mismatch: expected "${l}" but received "${a}" in response header "${r}".`)
							}
						}
					})(a.response, {
						config: e,
						responseAlgorithms: d
					}), s && l && (o.body = ae(l))
				}
				return a
			}, Me = (e, t) => ({
				applyToStack: n => {
					n.add(se(e, t), re), n.addRelativeTo(Be(e, t), Ie)
				}
			}), qe = e => e[p] || (e[p] = {}), _e = e => {
				if ("function" == typeof e) return e;
				const t = Promise.resolve(e);
				return () => t
			};
		const De = {
				name: "hostHeaderMiddleware",
				step: "build",
				priority: "low",
				tags: ["HOST"],
				override: !0
			},
			Le = e => ({
				applyToStack: t => {
					t.add((e => t => async n => {
						if (!y.isInstance(n.request)) return t(n);
						const {
							request: r
						} = n, {
							handlerProtocol: s = ""
						} = e.requestHandler.metadata || {};
						if (s.indexOf("h2") >= 0 && !r.headers[":authority"]) delete r.headers.host, r.headers[":authority"] = r.hostname + (r.port ? ":" + r.port : "");
						else if (!r.headers.host) {
							let e = r.hostname;
							null != r.port && (e += `:${r.port}`), r.headers.host = e
						}
						return t(n)
					})(e), De)
				}
			}),
			He = {
				name: "loggerMiddleware",
				tags: ["LOGGER"],
				step: "initialize",
				override: !0
			},
			Ue = "X-Amzn-Trace-Id",
			je = {
				step: "build",
				tags: ["RECURSION_DETECTION"],
				name: "recursionDetectionMiddleware",
				override: !0,
				priority: "low"
			},
			$e = e => ({
				applyToStack: t => {
					t.add((e => t => async n => {
						const {
							request: r
						} = n;
						if (!y.isInstance(r) || "node" !== e.runtime || r.headers.hasOwnProperty(Ue)) return t(n);
						const s = process.env.AWS_LAMBDA_FUNCTION_NAME,
							i = process.env._X_AMZN_TRACE_ID,
							a = e => "string" == typeof e && e.length > 0;
						return a(s) && a(i) && (r.headers[Ue] = i), t({
							...n,
							request: r
						})
					})(e), je)
				}
			}),
			Fe = (e, t) => {
				const n = [];
				if (e && n.push(e), t)
					for (const e of t) n.push(e);
				return n
			},
			Ve = (e, t) => `${e||"anonymous"}${t&&t.length>0?` (a.k.a. ${t.join(",")})`:""}`,
			Ke = () => {
				let e = [],
					t = [],
					n = !1;
				const r = new Set,
					s = n => (e.forEach((e => {
						n.add(e.middleware, {
							...e
						})
					})), t.forEach((e => {
						n.addRelativeTo(e.middleware, {
							...e
						})
					})), n.identifyOnResolve?.(o.identifyOnResolve()), n),
					i = e => {
						const t = [];
						return e.before.forEach((e => {
							0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...i(e))
						})), t.push(e), e.after.reverse().forEach((e => {
							0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...i(e))
						})), t
					},
					a = (n = !1) => {
						const r = [],
							s = [],
							a = {};
						e.forEach((e => {
							const t = {
								...e,
								before: [],
								after: []
							};
							for (const e of Fe(t.name, t.aliases)) a[e] = t;
							r.push(t)
						})), t.forEach((e => {
							const t = {
								...e,
								before: [],
								after: []
							};
							for (const e of Fe(t.name, t.aliases)) a[e] = t;
							s.push(t)
						})), s.forEach((e => {
							if (e.toMiddleware) {
								const t = a[e.toMiddleware];
								if (void 0 === t) {
									if (n) return;
									throw new Error(`${e.toMiddleware} is not found when adding ${Ve(e.name,e.aliases)} middleware ${e.relation} ${e.toMiddleware}`)
								}
								"after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e)
							}
						}));
						const o = (l = r, l.sort(((e, t) => Ge[t.step] - Ge[e.step] || We[t.priority || "normal"] - We[e.priority || "normal"]))).map(i).reduce(((e, t) => (e.push(...t), e)), []);
						var l;
						return o
					},
					o = {
						add: (t, n = {}) => {
							const {
								name: s,
								override: i,
								aliases: a
							} = n, o = {
								step: "initialize",
								priority: "normal",
								middleware: t,
								...n
							}, l = Fe(s, a);
							if (l.length > 0) {
								if (l.some((e => r.has(e)))) {
									if (!i) throw new Error(`Duplicate middleware name '${Ve(s,a)}'`);
									for (const t of l) {
										const n = e.findIndex((e => e.name === t || e.aliases?.some((e => e === t))));
										if (-1 === n) continue;
										const r = e[n];
										if (r.step !== o.step || o.priority !== r.priority) throw new Error(`"${Ve(r.name,r.aliases)}" middleware with ${r.priority} priority in ${r.step} step cannot be overridden by "${Ve(s,a)}" middleware with ${o.priority} priority in ${o.step} step.`);
										e.splice(n, 1)
									}
								}
								for (const e of l) r.add(e)
							}
							e.push(o)
						},
						addRelativeTo: (e, n) => {
							const {
								name: s,
								override: i,
								aliases: a
							} = n, o = {
								middleware: e,
								...n
							}, l = Fe(s, a);
							if (l.length > 0) {
								if (l.some((e => r.has(e)))) {
									if (!i) throw new Error(`Duplicate middleware name '${Ve(s,a)}'`);
									for (const e of l) {
										const n = t.findIndex((t => t.name === e || t.aliases?.some((t => t === e))));
										if (-1 === n) continue;
										const r = t[n];
										if (r.toMiddleware !== o.toMiddleware || r.relation !== o.relation) throw new Error(`"${Ve(r.name,r.aliases)}" middleware ${r.relation} "${r.toMiddleware}" middleware cannot be overridden by "${Ve(s,a)}" middleware ${o.relation} "${o.toMiddleware}" middleware.`);
										t.splice(n, 1)
									}
								}
								for (const e of l) r.add(e)
							}
							t.push(o)
						},
						clone: () => s(Ke()),
						use: e => {
							e.applyToStack(o)
						},
						remove: n => "string" == typeof n ? (n => {
							let s = !1;
							const i = e => {
								const t = Fe(e.name, e.aliases);
								if (t.includes(n)) {
									s = !0;
									for (const e of t) r.delete(e);
									return !1
								}
								return !0
							};
							return e = e.filter(i), t = t.filter(i), s
						})(n) : (n => {
							let s = !1;
							const i = e => {
								if (e.middleware === n) {
									s = !0;
									for (const t of Fe(e.name, e.aliases)) r.delete(t);
									return !1
								}
								return !0
							};
							return e = e.filter(i), t = t.filter(i), s
						})(n),
						removeByTag: n => {
							let s = !1;
							const i = e => {
								const {
									tags: t,
									name: i,
									aliases: a
								} = e;
								if (t && t.includes(n)) {
									const e = Fe(i, a);
									for (const t of e) r.delete(t);
									return s = !0, !1
								}
								return !0
							};
							return e = e.filter(i), t = t.filter(i), s
						},
						concat: e => {
							const t = s(Ke());
							return t.use(e), t.identifyOnResolve(n || t.identifyOnResolve() || (e.identifyOnResolve?.() ?? !1)), t
						},
						applyToStack: s,
						identify: () => a(!0).map((e => {
							const t = e.step ?? e.relation + " " + e.toMiddleware;
							return Ve(e.name, e.aliases) + " - " + t
						})),
						identifyOnResolve: e => ("boolean" == typeof e && (n = e), n),
						resolve: (e, t) => {
							for (const n of a().map((e => e.middleware)).reverse()) e = n(e, t);
							return n && console.log(o.identify()), e
						}
					};
				return o
			},
			Ge = {
				initialize: 5,
				serialize: 4,
				build: 3,
				finalizeRequest: 2,
				deserialize: 1
			},
			We = {
				high: 3,
				normal: 2,
				low: 1
			};
		class Xe {
			constructor(e) {
				this.config = e, this.middlewareStack = Ke()
			}
			send(e, t, n) {
				const r = "function" != typeof t ? t : void 0,
					s = "function" == typeof t ? t : n;
				let i;
				if (void 0 === r && !0 === this.config.cacheMiddleware) {
					this.handlers || (this.handlers = new WeakMap);
					const t = this.handlers;
					t.has(e.constructor) ? i = t.get(e.constructor) : (i = e.resolveMiddleware(this.middlewareStack, this.config, r), t.set(e.constructor, i))
				} else delete this.handlers, i = e.resolveMiddleware(this.middlewareStack, this.config, r);
				if (!s) return i(e).then((e => e.output));
				i(e).then((e => s(null, e.output)), (e => s(e))).catch((() => {}))
			}
			destroy() {
				this.config?.requestHandler?.destroy?.(), delete this.handlers
			}
		}
		const Qe = async (e = new Uint8Array, t) => {
			if (e instanceof Uint8Array) return ue.mutate(e);
			if (!e) return ue.mutate(new Uint8Array);
			const n = t.streamCollector(e);
			return ue.mutate(await n)
		};

		function Je(e, t) {
			return new Ze(e, t)
		}
		class Ze {
			constructor(e, t) {
				this.input = e, this.context = t, this.query = {}, this.method = "", this.headers = {}, this.path = "", this.body = null, this.hostname = "", this.resolvePathStack = []
			}
			async build() {
				const {
					hostname: e,
					protocol: t = "https",
					port: n,
					path: r
				} = await this.context.endpoint();
				this.path = r;
				for (const e of this.resolvePathStack) e(this.path);
				return new y({
					protocol: t,
					hostname: this.hostname || e,
					port: n,
					method: this.method,
					path: this.path,
					query: this.query,
					body: this.body,
					headers: this.headers
				})
			}
			hn(e) {
				return this.hostname = e, this
			}
			bp(e) {
				return this.resolvePathStack.push((t => {
					this.path = `${t?.endsWith("/")?t.slice(0,-1):t||""}` + e
				})), this
			}
			p(e, t, n, r) {
				return this.resolvePathStack.push((s => {
					this.path = et(s, this.input, e, t, n, r)
				})), this
			}
			h(e) {
				return this.headers = e, this
			}
			q(e) {
				return this.query = e, this
			}
			b(e) {
				return this.body = e, this
			}
			m(e) {
				return this.method = e, this
			}
		}

		function Ye(e) {
			return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
				return "%" + e.charCodeAt(0).toString(16).toUpperCase()
			}))
		}
		const et = (e, t, n, r, s, i) => {
			if (null == t || void 0 === t[n]) throw new Error("No value provided for input HTTP label: " + n + ".");
			{
				const t = r();
				if (t.length <= 0) throw new Error("Empty value provided for input HTTP label: " + n + ".");
				e = e.replace(s, i ? t.split("/").map((e => Ye(e))).join("/") : Ye(t))
			}
			return e
		};
		class tt {
			constructor() {
				this.middlewareStack = Ke()
			}
			static classBuilder() {
				return new nt
			}
			resolveMiddlewareWithContext(e, t, n, {
				middlewareFn: r,
				clientName: s,
				commandName: i,
				inputFilterSensitiveLog: a,
				outputFilterSensitiveLog: o,
				smithyContext: l,
				additionalContext: c,
				CommandCtor: d
			}) {
				for (const s of r.bind(this)(d, e, t, n)) this.middlewareStack.use(s);
				const m = e.concat(this.middlewareStack),
					{
						logger: u
					} = t,
					h = {
						logger: u,
						clientName: s,
						commandName: i,
						inputFilterSensitiveLog: a,
						outputFilterSensitiveLog: o,
						[p]: {
							commandInstance: this,
							...l
						},
						...c
					},
					{
						requestHandler: g
					} = t;
				return m.resolve((e => g.handle(e.request, n || {})), h)
			}
		}
		class nt {
			constructor() {
				this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = e => e, this._outputFilterSensitiveLog = e => e, this._serializer = null, this._deserializer = null
			}
			init(e) {
				this._init = e
			}
			ep(e) {
				return this._ep = e, this
			}
			m(e) {
				return this._middlewareFn = e, this
			}
			s(e, t, n = {}) {
				return this._smithyContext = {
					service: e,
					operation: t,
					...n
				}, this
			}
			c(e = {}) {
				return this._additionalContext = e, this
			}
			n(e, t) {
				return this._clientName = e, this._commandName = t, this
			}
			f(e = e => e, t = e => e) {
				return this._inputFilterSensitiveLog = e, this._outputFilterSensitiveLog = t, this
			}
			ser(e) {
				return this._serializer = e, this
			}
			de(e) {
				return this._deserializer = e, this
			}
			build() {
				const e = this;
				let t;
				return t = class extends tt {
					static getEndpointParameterInstructions() {
						return e._ep
					}
					constructor(...[t]) {
						super(), this.serialize = e._serializer, this.deserialize = e._deserializer, this.input = t ?? {}, e._init(this)
					}
					resolveMiddleware(n, r, s) {
						return this.resolveMiddlewareWithContext(n, r, s, {
							CommandCtor: t,
							middlewareFn: e._middlewareFn,
							clientName: e._clientName,
							commandName: e._commandName,
							inputFilterSensitiveLog: e._inputFilterSensitiveLog,
							outputFilterSensitiveLog: e._outputFilterSensitiveLog,
							smithyContext: e._smithyContext,
							additionalContext: e._additionalContext
						})
					}
				}
			}
		}
		const rt = "***SensitiveInformation***",
			st = e => {
				switch (e) {
					case "true":
						return !0;
					case "false":
						return !1;
					default:
						throw new Error(`Unable to parse boolean value "${e}"`)
				}
			},
			it = e => {
				if (null != e) {
					if ("string" == typeof e) {
						const t = parseFloat(e);
						if (!Number.isNaN(t)) return String(t) !== String(e) && wt.warn(vt(`Expected number but observed string: ${e}`)), t
					}
					if ("number" == typeof e) return e;
					throw new TypeError(`Expected number, got ${typeof e}: ${e}`)
				}
			},
			at = Math.ceil(2 ** 127 * (2 - 2 ** -23)),
			ot = e => {
				const t = it(e);
				if (void 0 !== t && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > at) throw new TypeError(`Expected 32-bit float, got ${e}`);
				return t
			},
			lt = e => {
				if (null != e) {
					if (Number.isInteger(e) && !Number.isNaN(e)) return e;
					throw new TypeError(`Expected integer, got ${typeof e}: ${e}`)
				}
			},
			ct = e => ut(e, 32),
			dt = e => ut(e, 16),
			mt = e => ut(e, 8),
			ut = (e, t) => {
				const n = lt(e);
				if (void 0 !== n && pt(n, t) !== n) throw new TypeError(`Expected ${t}-bit integer, got ${e}`);
				return n
			},
			pt = (e, t) => {
				switch (t) {
					case 32:
						return Int32Array.of(e)[0];
					case 16:
						return Int16Array.of(e)[0];
					case 8:
						return Int8Array.of(e)[0]
				}
			},
			ht = (e, t) => {
				if (null == e) {
					if (t) throw new TypeError(`Expected a non-null value for ${t}`);
					throw new TypeError("Expected a non-null value")
				}
				return e
			},
			gt = e => {
				if (null == e) return;
				if ("object" == typeof e && !Array.isArray(e)) return e;
				const t = Array.isArray(e) ? "array" : typeof e;
				throw new TypeError(`Expected object, got ${t}: ${e}`)
			},
			yt = e => {
				if (null != e) {
					if ("string" == typeof e) return e;
					if (["boolean", "number", "bigint"].includes(typeof e)) return wt.warn(vt(`Expected string, got ${typeof e}: ${e}`)), String(e);
					throw new TypeError(`Expected string, got ${typeof e}: ${e}`)
				}
			},
			ft = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
			bt = e => {
				const t = e.match(ft);
				if (null === t || t[0].length !== e.length) throw new TypeError("Expected real number, got implicit NaN");
				return parseFloat(e)
			},
			xt = e => lt("string" == typeof e ? bt(e) : e),
			Nt = e => ct("string" == typeof e ? bt(e) : e),
			St = e => dt("string" == typeof e ? bt(e) : e),
			vt = e => String(new TypeError(e).stack || e).split("\n").slice(0, 5).filter((e => !e.includes("stackTraceWarning"))).join("\n"),
			wt = {
				warn: console.warn
			},
			Ct = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			Pt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		function Rt(e) {
			const t = e.getUTCFullYear(),
				n = e.getUTCMonth(),
				r = e.getUTCDay(),
				s = e.getUTCDate(),
				i = e.getUTCHours(),
				a = e.getUTCMinutes(),
				o = e.getUTCSeconds(),
				l = i < 10 ? `0${i}` : `${i}`,
				c = a < 10 ? `0${a}` : `${a}`,
				d = o < 10 ? `0${o}` : `${o}`;
			return `${Ct[r]}, ${s<10?`0${s}`:`${s}`} ${Pt[n]} ${t} ${l}:${c}:${d} GMT`
		}
		const Et = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
			zt = e => {
				if (null == e) return;
				if ("string" != typeof e) throw new TypeError("RFC-3339 date-times must be expressed as strings");
				const t = Et.exec(e);
				if (!t) throw new TypeError("Invalid RFC-3339 date-time value");
				const [n, r, s, i, a, o, l, c, d] = t, m = St($t(r)), u = Ht(s, "month", 1, 12), p = Ht(i, "day", 1, 31), h = It(m, u, p, {
					hours: a,
					minutes: o,
					seconds: l,
					fractionalMilliseconds: c
				});
				return "Z" != d.toUpperCase() && h.setTime(h.getTime() - jt(d)), h
			},
			Ot = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
			Tt = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
			kt = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
			At = e => {
				if (null == e) return;
				if ("string" != typeof e) throw new TypeError("RFC-7231 date-times must be expressed as strings");
				let t = Ot.exec(e);
				if (t) {
					const [e, n, r, s, i, a, o, l] = t;
					return It(St($t(s)), qt(r), Ht(n, "day", 1, 31), {
						hours: i,
						minutes: a,
						seconds: o,
						fractionalMilliseconds: l
					})
				}
				if (t = Tt.exec(e), t) {
					const [e, n, r, s, i, a, o, l] = t;
					return Mt(It(Bt(s), qt(r), Ht(n, "day", 1, 31), {
						hours: i,
						minutes: a,
						seconds: o,
						fractionalMilliseconds: l
					}))
				}
				if (t = kt.exec(e), t) {
					const [e, n, r, s, i, a, o, l] = t;
					return It(St($t(l)), qt(n), Ht(r.trimLeft(), "day", 1, 31), {
						hours: s,
						minutes: i,
						seconds: a,
						fractionalMilliseconds: o
					})
				}
				throw new TypeError("Invalid RFC-7231 date-time value")
			},
			It = (e, t, n, r) => {
				const s = t - 1;
				return Dt(e, s, n), new Date(Date.UTC(e, s, n, Ht(r.hours, "hour", 0, 23), Ht(r.minutes, "minute", 0, 59), Ht(r.seconds, "seconds", 0, 60), Ut(r.fractionalMilliseconds)))
			},
			Bt = e => {
				const t = (new Date).getUTCFullYear(),
					n = 100 * Math.floor(t / 100) + St($t(e));
				return n < t ? n + 100 : n
			},
			Mt = e => e.getTime() - (new Date).getTime() > 15768e8 ? new Date(Date.UTC(e.getUTCFullYear() - 100, e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())) : e,
			qt = e => {
				const t = Pt.indexOf(e);
				if (t < 0) throw new TypeError(`Invalid month: ${e}`);
				return t + 1
			},
			_t = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			Dt = (e, t, n) => {
				let r = _t[t];
				if (1 === t && Lt(e) && (r = 29), n > r) throw new TypeError(`Invalid day for ${Pt[t]} in ${e}: ${n}`)
			},
			Lt = e => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0),
			Ht = (e, t, n, r) => {
				const s = (e => mt("string" == typeof e ? bt(e) : e))($t(e));
				if (s < n || s > r) throw new TypeError(`${t} must be between ${n} and ${r}, inclusive`);
				return s
			},
			Ut = e => null == e ? 0 : 1e3 * (e => ot("string" == typeof e ? bt(e) : e))("0." + e),
			jt = e => {
				const t = e[0];
				let n = 1;
				if ("+" == t) n = 1;
				else {
					if ("-" != t) throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`);
					n = -1
				}
				return n * (60 * Number(e.substring(1, 3)) + Number(e.substring(4, 6))) * 60 * 1e3
			},
			$t = e => {
				let t = 0;
				for (; t < e.length - 1 && "0" === e.charAt(t);) t++;
				return 0 === t ? e : e.slice(t)
			};
		class Ft extends Error {
			constructor(e) {
				super(e.message), Object.setPrototypeOf(this, Ft.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata
			}
		}
		const Vt = (e, t = {}) => {
				Object.entries(t).filter((([, e]) => void 0 !== e)).forEach((([t, n]) => {
					null != e[t] && "" !== e[t] || (e[t] = n)
				}));
				const n = e.message || e.Message || "UnknownError";
				return e.message = n, delete e.Message, e
			},
			Kt = e => ({
				httpStatusCode: e.statusCode,
				requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
				extendedRequestId: e.headers["x-amz-id-2"],
				cfId: e.headers["x-amz-cf-id"]
			}),
			Gt = e => {
				switch (e) {
					case "standard":
					case "cross-region":
						return {
							retryMode: "standard", connectionTimeout: 3100
						};
					case "in-region":
						return {
							retryMode: "standard", connectionTimeout: 1100
						};
					case "mobile":
						return {
							retryMode: "standard", connectionTimeout: 3e4
						};
					default:
						return {}
				}
			},
			Wt = e => {
				const t = [];
				for (const n in m) {
					const r = m[n];
					void 0 !== e[r] && t.push({
						algorithmId: () => r,
						checksumConstructor: () => e[r]
					})
				}
				return {
					_checksumAlgorithms: t,
					addChecksumAlgorithm(e) {
						this._checksumAlgorithms.push(e)
					},
					checksumAlgorithms() {
						return this._checksumAlgorithms
					}
				}
			},
			Xt = e => {
				const t = {};
				return e.checksumAlgorithms().forEach((e => {
					t[e.algorithmId()] = e.checksumConstructor()
				})), t
			},
			Qt = e => {
				let t = e.retryStrategy;
				return {
					setRetryStrategy(e) {
						t = e
					},
					retryStrategy: () => t
				}
			},
			Jt = e => {
				const t = {};
				return t.retryStrategy = e.retryStrategy(), t
			},
			Zt = e => ({
				...Wt(e),
				...Qt(e)
			}),
			Yt = e => Array.isArray(e) ? e : [e],
			en = e => {
				const t = "#text";
				for (const n in e) e.hasOwnProperty(n) && void 0 !== e[n][t] ? e[n] = e[n][t] : "object" == typeof e[n] && null !== e[n] && (e[n] = en(e[n]));
				return e
			},
			tn = e => null != e,
			nn = function() {
				const e = Object.getPrototypeOf(this).constructor,
					t = new(Function.bind.apply(String, [null, ...arguments]));
				return Object.setPrototypeOf(t, e.prototype), t
			};
		nn.prototype = Object.create(String.prototype, {
			constructor: {
				value: nn,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), Object.setPrototypeOf(nn, String);
		class rn {
			trace() {}
			debug() {}
			info() {}
			warn() {}
			error() {}
		}

		function sn(e, t, n) {
			let r, s, i;
			if (void 0 === t && void 0 === n) r = {}, i = e;
			else {
				if (r = e, "function" == typeof t) return s = t, i = n, an(r, s, i);
				i = t
			}
			for (const e of Object.keys(i)) Array.isArray(i[e]) ? on(r, null, i, e) : r[e] = i[e];
			return r
		}
		const an = (e, t, n) => sn(e, Object.entries(n).reduce(((e, [n, r]) => (Array.isArray(r) ? e[n] = r : e[n] = "function" == typeof r ? [t, r()] : [t, r], e)), {})),
			on = (e, t, n, r) => {
				if (null !== t) {
					let s = n[r];
					"function" == typeof s && (s = [, s]);
					const [i = ln, a = cn, o = r] = s;
					return void(("function" == typeof i && i(t[o]) || "function" != typeof i && i) && (e[r] = a(t[o])))
				}
				let [s, i] = n[r];
				if ("function" == typeof i) {
					let t;
					const n = void 0 === s && null != (t = i()),
						a = "function" == typeof s && !!s(void 0) || "function" != typeof s && !!s;
					n ? e[r] = t : a && (e[r] = i())
				} else {
					const t = void 0 === s && null != i,
						n = "function" == typeof s && !!s(i) || "function" != typeof s && !!s;
					(t || n) && (e[r] = i)
				}
			},
			ln = e => null != e,
			cn = e => e;

		function dn(e) {
			return (e.includes(",") || e.includes('"')) && (e = `"${e.replace(/"/g,'\\"')}"`), e
		}
		const mn = {
				step: "finalizeRequest",
				tags: ["CHECK_CONTENT_LENGTH_HEADER"],
				name: "getCheckContentLengthHeaderPlugin",
				override: !0
			},
			un = e => ({
				applyToStack: e => {
					e.add(((e, t) => async n => {
						const {
							request: r
						} = n;
						if (y.isInstance(r) && !("content-length" in r.headers)) {
							const e = "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.";
							"function" != typeof t?.logger?.warn || t.logger instanceof rn ? console.warn(e) : t.logger.warn(e)
						}
						return e({
							...n
						})
					}), mn)
				}
			}),
			pn = {
				tags: ["REGION_REDIRECT", "S3"],
				name: "regionRedirectEndpointMiddleware",
				override: !0,
				relation: "before",
				toMiddleware: "endpointV2Middleware"
			};
		const hn = {
				step: "initialize",
				tags: ["REGION_REDIRECT", "S3"],
				name: "regionRedirectMiddleware",
				override: !0
			},
			gn = e => ({
				applyToStack: t => {
					var n;
					t.add(function(e) {
						return (t, n) => async r => {
							try {
								return await t(r)
							} catch (s) {
								if (e.followRegionRedirects && (301 === s?.$metadata?.httpStatusCode || 400 === s?.$metadata?.httpStatusCode && "IllegalLocationConstraintException" === s?.name)) {
									try {
										const t = s.$response.headers["x-amz-bucket-region"];
										n.logger?.debug(`Redirecting from ${await e.region()} to ${t}`), n.__s3RegionRedirect = t
									} catch (e) {
										throw new Error("Region redirect failed: " + e)
									}
									return t(r)
								}
								throw s
							}
						}
					}(e), hn), t.addRelativeTo((n = e, (e, t) => async r => {
						const s = await n.region(),
							i = n.region;
						let a = () => {};
						t.__s3RegionRedirect && (Object.defineProperty(n, "region", {
							writable: !1,
							value: async () => t.__s3RegionRedirect
						}), a = () => Object.defineProperty(n, "region", {
							writable: !0,
							value: i
						}));
						try {
							const i = await e(r);
							if (t.__s3RegionRedirect && (a(), s !== await n.region())) throw new Error("Region was not restored following S3 region redirect.");
							return i
						} catch (e) {
							throw a(), e
						}
					}), pn)
				}
			}),
			yn = {
				tags: ["S3"],
				name: "s3ExpiresMiddleware",
				override: !0,
				relation: "after",
				toMiddleware: "deserializerMiddleware"
			},
			fn = e => ({
				applyToStack: e => {
					e.addRelativeTo(((e, t) => async n => {
						const r = await e(n),
							{
								response: s
							} = r;
						if (f.isInstance(s) && s.headers.expires) {
							s.headers.expiresstring = s.headers.expires;
							try {
								At(s.headers.expires)
							} catch (e) {
								t.logger?.warn(`AWS SDK Warning for ${t.clientName}::${t.commandName} response parsing (${s.headers.expires}): ${e}`), delete s.headers.expires
							}
						}
						return r
					}), yn)
				}
			});
		class bn {
			constructor(e = {}) {
				this.data = e, this.lastPurgeTime = Date.now()
			}
			get(e) {
				const t = this.data[e];
				if (t) return t
			}
			set(e, t) {
				return this.data[e] = t, t
			}
			delete(e) {
				delete this.data[e]
			}
			async purgeExpired() {
				const e = Date.now();
				if (!(this.lastPurgeTime + bn.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > e))
					for (const t in this.data) {
						const n = this.data[t];
						if (!n.isRefreshing) {
							const r = await n.identity;
							r.expiration && r.expiration.getTime() < e && delete this.data[t]
						}
					}
			}
		}
		bn.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
		class xn {
			constructor(e, t = !1, n = Date.now()) {
				this._identity = e, this.isRefreshing = t, this.accessed = n
			}
			get identity() {
				return this.accessed = Date.now(), this._identity
			}
		}
		class Nn {
			constructor(e, t = new bn) {
				this.createSessionFn = e, this.cache = t
			}
			async getS3ExpressIdentity(e, t) {
				const n = t.Bucket,
					{
						cache: r
					} = this,
					s = r.get(n);
				return s ? s.identity.then((e => {
					if ((e.expiration?.getTime() ?? 0) < Date.now()) return r.set(n, new xn(this.getIdentity(n))).identity;
					return (e.expiration?.getTime() ?? 0) < Date.now() + Nn.REFRESH_WINDOW_MS && !s.isRefreshing && (s.isRefreshing = !0, this.getIdentity(n).then((e => {
						r.set(n, new xn(Promise.resolve(e)))
					}))), e
				})) : r.set(n, new xn(this.getIdentity(n))).identity
			}
			async getIdentity(e) {
				await this.cache.purgeExpired().catch((e => {
					console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + e)
				}));
				const t = await this.createSessionFn(e);
				if (!t.Credentials?.AccessKeyId || !t.Credentials?.SecretAccessKey) throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
				return {
					accessKeyId: t.Credentials.AccessKeyId,
					secretAccessKey: t.Credentials.SecretAccessKey,
					sessionToken: t.Credentials.SessionToken,
					expiration: t.Credentials.Expiration ? new Date(t.Credentials.Expiration) : void 0
				}
			}
		}
		Nn.REFRESH_WINDOW_MS = 6e4;
		const Sn = "X-Amz-Date",
			vn = "X-Amz-Signature",
			wn = "X-Amz-Security-Token",
			Cn = "authorization",
			Pn = Sn.toLowerCase(),
			Rn = [Cn, Pn, "date"],
			En = vn.toLowerCase(),
			zn = "x-amz-content-sha256",
			On = wn.toLowerCase(),
			Tn = {
				authorization: !0,
				"cache-control": !0,
				connection: !0,
				expect: !0,
				from: !0,
				"keep-alive": !0,
				"max-forwards": !0,
				pragma: !0,
				referer: !0,
				te: !0,
				trailer: !0,
				"transfer-encoding": !0,
				upgrade: !0,
				"user-agent": !0,
				"x-amzn-trace-id": !0
			},
			kn = /^proxy-/,
			An = /^sec-/,
			In = "AWS4-HMAC-SHA256",
			Bn = "AWS4-HMAC-SHA256-PAYLOAD",
			Mn = "aws4_request",
			qn = {},
			_n = [],
			Dn = (e, t, n) => `${e}/${t}/${n}/${Mn}`,
			Ln = (e, t, n) => {
				const r = new e(t);
				return r.update(te(n)), r.digest()
			},
			Hn = ({
				headers: e
			}, t, n) => {
				const r = {};
				for (const s of Object.keys(e).sort()) {
					if (null == e[s]) continue;
					const i = s.toLowerCase();
					(i in Tn || t?.has(i) || kn.test(i) || An.test(i)) && (!n || n && !n.has(i)) || (r[i] = e[s].trim().replace(/\s+/g, " "))
				}
				return r
			},
			Un = async ({
				headers: e,
				body: t
			}, n) => {
				for (const t of Object.keys(e))
					if (t.toLowerCase() === zn) return e[t];
				if (null == t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
				if ("string" == typeof t || ArrayBuffer.isView(t) || A(t)) {
					const e = new n;
					return e.update(te(t)), Ce(await e.digest())
				}
				return "UNSIGNED-PAYLOAD"
			};
		class jn {
			format(e) {
				const t = [];
				for (const n of Object.keys(e)) {
					const r = ee(n);
					t.push(Uint8Array.from([r.byteLength]), r, this.formatHeaderValue(e[n]))
				}
				const n = new Uint8Array(t.reduce(((e, t) => e + t.byteLength), 0));
				let r = 0;
				for (const e of t) n.set(e, r), r += e.byteLength;
				return n
			}
			formatHeaderValue(e) {
				switch (e.type) {
					case "boolean":
						return Uint8Array.from([e.value ? 0 : 1]);
					case "byte":
						return Uint8Array.from([2, e.value]);
					case "short":
						const t = new DataView(new ArrayBuffer(3));
						return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
					case "integer":
						const n = new DataView(new ArrayBuffer(5));
						return n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer);
					case "long":
						const r = new Uint8Array(9);
						return r[0] = 5, r.set(e.value.bytes, 1), r;
					case "binary":
						const s = new DataView(new ArrayBuffer(3 + e.value.byteLength));
						s.setUint8(0, 6), s.setUint16(1, e.value.byteLength, !1);
						const i = new Uint8Array(s.buffer);
						return i.set(e.value, 3), i;
					case "string":
						const a = ee(e.value),
							o = new DataView(new ArrayBuffer(3 + a.byteLength));
						o.setUint8(0, 7), o.setUint16(1, a.byteLength, !1);
						const l = new Uint8Array(o.buffer);
						return l.set(a, 3), l;
					case "timestamp":
						const c = new Uint8Array(9);
						return c[0] = 8, c.set(Vn.fromNumber(e.value.valueOf()).bytes, 1), c;
					case "uuid":
						if (!Fn.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
						const d = new Uint8Array(17);
						return d[0] = 9, d.set(we(e.value.replace(/\-/g, "")), 1), d
				}
			}
		}
		var $n;
		! function(e) {
			e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid"
		}($n || ($n = {}));
		const Fn = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
		class Vn {
			constructor(e) {
				if (this.bytes = e, 8 !== e.byteLength) throw new Error("Int64 buffers must be exactly 8 bytes")
			}
			static fromNumber(e) {
				if (e > 0x8000000000000000 || e < -0x8000000000000000) throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
				const t = new Uint8Array(8);
				for (let n = 7, r = Math.abs(Math.round(e)); n > -1 && r > 0; n--, r /= 256) t[n] = r;
				return e < 0 && Kn(t), new Vn(t)
			}
			valueOf() {
				const e = this.bytes.slice(0),
					t = 128 & e[0];
				return t && Kn(e), parseInt(Ce(e), 16) * (t ? -1 : 1)
			}
			toString() {
				return String(this.valueOf())
			}
		}

		function Kn(e) {
			for (let t = 0; t < 8; t++) e[t] ^= 255;
			for (let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
		}
		const Gn = e => {
				e = y.clone(e);
				for (const t of Object.keys(e.headers)) Rn.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
				return e
			},
			Wn = e => "number" == typeof e ? new Date(1e3 * e) : "string" == typeof e ? Number(e) ? new Date(1e3 * Number(e)) : new Date(e) : e;
		class Xn {
			constructor({
				applyChecksum: e,
				credentials: t,
				region: n,
				service: r,
				sha256: s,
				uriEscapePath: i = !0
			}) {
				this.headerFormatter = new jn, this.service = r, this.sha256 = s, this.uriEscapePath = i, this.applyChecksum = "boolean" != typeof e || e, this.regionProvider = _e(n), this.credentialProvider = _e(t)
			}
			async presign(e, t = {}) {
				const {
					signingDate: n = new Date,
					expiresIn: r = 3600,
					unsignableHeaders: s,
					unhoistableHeaders: i,
					signableHeaders: a,
					hoistableHeaders: o,
					signingRegion: l,
					signingService: c
				} = t, d = await this.credentialProvider();
				this.validateResolvedCredentials(d);
				const m = l ?? await this.regionProvider(),
					{
						longDate: u,
						shortDate: p
					} = Qn(n);
				if (r > 604800) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
				const h = Dn(p, m, c ?? this.service),
					g = ((e, t = {}) => {
						const {
							headers: n,
							query: r = {}
						} = y.clone(e);
						for (const e of Object.keys(n)) {
							const s = e.toLowerCase();
							("x-amz-" === s.slice(0, 6) && !t.unhoistableHeaders?.has(s) || t.hoistableHeaders?.has(s)) && (r[e] = n[e], delete n[e])
						}
						return {
							...e,
							headers: n,
							query: r
						}
					})(Gn(e), {
						unhoistableHeaders: i,
						hoistableHeaders: o
					});
				d.sessionToken && (g.query[wn] = d.sessionToken), g.query["X-Amz-Algorithm"] = In, g.query["X-Amz-Credential"] = `${d.accessKeyId}/${h}`, g.query[Sn] = u, g.query["X-Amz-Expires"] = r.toString(10);
				const f = Hn(g, s, a);
				return g.query["X-Amz-SignedHeaders"] = Jn(f), g.query[vn] = await this.getSignature(u, h, this.getSigningKey(d, m, p, c), this.createCanonicalRequest(g, f, await Un(e, this.sha256))), g
			}
			async sign(e, t) {
				return "string" == typeof e ? this.signString(e, t) : e.headers && e.payload ? this.signEvent(e, t) : e.message ? this.signMessage(e, t) : this.signRequest(e, t)
			}
			async signEvent({
				headers: e,
				payload: t
			}, {
				signingDate: n = new Date,
				priorSignature: r,
				signingRegion: s,
				signingService: i
			}) {
				const a = s ?? await this.regionProvider(),
					{
						shortDate: o,
						longDate: l
					} = Qn(n),
					c = Dn(o, a, i ?? this.service),
					d = await Un({
						headers: {},
						body: t
					}, this.sha256),
					m = new this.sha256;
				m.update(e);
				const u = Ce(await m.digest()),
					p = [Bn, l, c, r, u, d].join("\n");
				return this.signString(p, {
					signingDate: n,
					signingRegion: a,
					signingService: i
				})
			}
			async signMessage(e, {
				signingDate: t = new Date,
				signingRegion: n,
				signingService: r
			}) {
				return this.signEvent({
					headers: this.headerFormatter.format(e.message.headers),
					payload: e.message.body
				}, {
					signingDate: t,
					signingRegion: n,
					signingService: r,
					priorSignature: e.priorSignature
				}).then((t => ({
					message: e.message,
					signature: t
				})))
			}
			async signString(e, {
				signingDate: t = new Date,
				signingRegion: n,
				signingService: r
			} = {}) {
				const s = await this.credentialProvider();
				this.validateResolvedCredentials(s);
				const i = n ?? await this.regionProvider(),
					{
						shortDate: a
					} = Qn(t),
					o = new this.sha256(await this.getSigningKey(s, i, a, r));
				return o.update(te(e)), Ce(await o.digest())
			}
			async signRequest(e, {
				signingDate: t = new Date,
				signableHeaders: n,
				unsignableHeaders: r,
				signingRegion: s,
				signingService: i
			} = {}) {
				const a = await this.credentialProvider();
				this.validateResolvedCredentials(a);
				const o = s ?? await this.regionProvider(),
					l = Gn(e),
					{
						longDate: c,
						shortDate: d
					} = Qn(t),
					m = Dn(d, o, i ?? this.service);
				l.headers[Pn] = c, a.sessionToken && (l.headers[On] = a.sessionToken);
				const u = await Un(l, this.sha256);
				!((e, t) => {
					e = e.toLowerCase();
					for (const n of Object.keys(t))
						if (e === n.toLowerCase()) return !0;
					return !1
				})(zn, l.headers) && this.applyChecksum && (l.headers[zn] = u);
				const p = Hn(l, r, n),
					h = await this.getSignature(c, m, this.getSigningKey(a, o, d, i), this.createCanonicalRequest(l, p, u));
				return l.headers[Cn] = `${In} Credential=${a.accessKeyId}/${m}, SignedHeaders=${Jn(p)}, Signature=${h}`, l
			}
			createCanonicalRequest(e, t, n) {
				const r = Object.keys(t).sort();
				return `${e.method}\n${this.getCanonicalPath(e)}\n${(({query:e={}})=>{const t=[],n={};for(const r of Object.keys(e)){if(r.toLowerCase()===En)continue;const s=he(r);t.push(s);const i=e[r];"string"==typeof i?n[s]=`
				$ {
					s
				} = $ {
					he(i)
				}
				`:Array.isArray(i)&&(n[s]=i.slice(0).reduce(((e,t)=>e.concat([`
				$ {
					s
				} = $ {
					he(t)
				}
				`])),[]).sort().join("&"))}return t.sort().map((e=>n[e])).filter((e=>e)).join("&")})(e)}\n${r.map((e=>`${e}:${t[e]}`)).join("\n")}\n\n${r.join(";")}\n${n}`
			}
			async createStringToSign(e, t, n) {
				const r = new this.sha256;
				r.update(te(n));
				const s = await r.digest();
				return `${In}\n${e}\n${t}\n${Ce(s)}`
			}
			getCanonicalPath({
				path: e
			}) {
				if (this.uriEscapePath) {
					const t = [];
					for (const n of e.split("/")) 0 !== n?.length && "." !== n && (".." === n ? t.pop() : t.push(n));
					const n = `${e?.startsWith("/")?"/":""}${t.join("/")}${t.length>0&&e?.endsWith("/")?"/":""}`;
					return he(n).replace(/%2F/g, "/")
				}
				return e
			}
			async getSignature(e, t, n, r) {
				const s = await this.createStringToSign(e, t, r),
					i = new this.sha256(await n);
				return i.update(te(s)), Ce(await i.digest())
			}
			getSigningKey(e, t, n, r) {
				return (async (e, t, n, r, s) => {
					const i = `${n}:${r}:${s}:${Ce(await Ln(e,t.secretAccessKey,t.accessKeyId))}:${t.sessionToken}`;
					if (i in qn) return qn[i];
					for (_n.push(i); _n.length > 50;) delete qn[_n.shift()];
					let a = `AWS4${t.secretAccessKey}`;
					for (const t of [n, r, s, Mn]) a = await Ln(e, a, t);
					return qn[i] = a
				})(this.sha256, e, n, t, r || this.service)
			}
			validateResolvedCredentials(e) {
				if ("object" != typeof e || "string" != typeof e.accessKeyId || "string" != typeof e.secretAccessKey) throw new Error("Resolved credential object is not valid")
			}
		}
		const Qn = e => {
				const t = (n = e, Wn(n).toISOString().replace(/\.\d{3}Z$/, "Z")).replace(/[\-:]/g, "");
				var n;
				return {
					longDate: t,
					shortDate: t.slice(0, 8)
				}
			},
			Jn = e => Object.keys(e).sort().join(";");
		var Zn;
		! function(e) {
			e.ENV = "env", e.CONFIG = "shared config entry"
		}(Zn || (Zn = {}));
		const Yn = "X-Amz-S3session-Token",
			er = Yn.toLowerCase();
		class tr extends Xn {
			async signWithCredentials(e, t, n) {
				const r = nr(t);
				e.headers[er] = t.sessionToken;
				return rr(this, r), this.signRequest(e, n ?? {})
			}
			async presignWithCredentials(e, t, n) {
				const r = nr(t);
				delete e.headers[er], e.headers[Yn] = t.sessionToken, e.query = e.query ?? {}, e.query[Yn] = t.sessionToken;
				return rr(this, r), this.presign(e, n)
			}
		}

		function nr(e) {
			return {
				accessKeyId: e.accessKeyId,
				secretAccessKey: e.secretAccessKey,
				expiration: e.expiration
			}
		}

		function rr(e, t) {
			const n = setTimeout((() => {
					throw new Error("SignatureV4S3Express credential override was created but not called.")
				}), 10),
				r = e.credentialProvider;
			e.credentialProvider = () => (clearTimeout(n), e.credentialProvider = r, Promise.resolve(t))
		}
		const sr = {
				name: "s3ExpressMiddleware",
				step: "build",
				tags: ["S3", "S3_EXPRESS"],
				override: !0
			},
			ir = e => ({
				applyToStack: t => {
					t.add((e => (t, n) => async r => {
						if (n.endpointV2) {
							const t = n.endpointV2,
								s = "sigv4-s3express" === t.properties?.authSchemes?.[0]?.name;
							if (("S3Express" === t.properties?.backend || "Directory" === t.properties?.bucketType) && (z(n, "S3_EXPRESS_BUCKET", "J"), n.isS3ExpressBucket = !0), s) {
								const t = r.input.Bucket;
								if (t) {
									const s = await e.s3ExpressIdentityProvider.getS3ExpressIdentity(await e.credentials(), {
										Bucket: t
									});
									n.s3ExpressIdentity = s, y.isInstance(r.request) && s.sessionToken && (r.request.headers[er] = s.sessionToken)
								}
							}
						}
						return t(r)
					})(e), sr)
				}
			});
		const ar = (e, t) => (n, r) => async s => {
			const i = e.httpAuthSchemeProvider(await t.httpAuthSchemeParametersProvider(e, r, s.input)),
				a = function(e) {
					const t = new Map;
					for (const n of e) t.set(n.schemeId, n);
					return t
				}(e.httpAuthSchemes),
				o = qe(r),
				l = [];
			for (const n of i) {
				const s = a.get(n.schemeId);
				if (!s) {
					l.push(`HttpAuthScheme \`${n.schemeId}\` was not enabled for this service.`);
					continue
				}
				const i = s.identityProvider(await t.identityProviderConfigProvider(e));
				if (!i) {
					l.push(`HttpAuthScheme \`${n.schemeId}\` did not have an IdentityProvider configured.`);
					continue
				}
				const {
					identityProperties: c = {},
					signingProperties: d = {}
				} = n.propertiesExtractor?.(e, r) || {};
				n.identityProperties = Object.assign(n.identityProperties || {}, c), n.signingProperties = Object.assign(n.signingProperties || {}, d), o.selectedHttpAuthScheme = {
					httpAuthOption: n,
					identity: await i(n.identityProperties),
					signer: s.signer
				};
				break
			}
			if (!o.selectedHttpAuthScheme) throw new Error(l.join("\n"));
			return n(s)
		}, or = {
			step: "serialize",
			tags: ["HTTP_AUTH_SCHEME"],
			name: "httpAuthSchemeMiddleware",
			override: !0,
			relation: "before",
			toMiddleware: "endpointV2Middleware"
		}, lr = {
			name: "deserializerMiddleware",
			step: "deserialize",
			tags: ["DESERIALIZER"],
			override: !0
		}, cr = {
			name: "serializerMiddleware",
			step: "serialize",
			tags: ["SERIALIZER"],
			override: !0
		};

		function dr(e, t, n) {
			return {
				applyToStack: r => {
					r.add(((e, t) => n => async r => {
						const {
							response: s
						} = await n(r);
						try {
							return {
								response: s,
								output: await t(s, e)
							}
						} catch (e) {
							if (Object.defineProperty(e, "$response", {
									value: s
								}), !("$metadata" in e)) {
								const t = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
								e.message += "\n  " + t, void 0 !== e.$responseBodyText && e.$response && (e.$response.body = e.$responseBodyText)
							}
							throw e
						}
					})(e, n), lr), r.add(((e, t) => (n, r) => async s => {
						const i = r.endpointV2?.url && e.urlParser ? async () => e.urlParser(r.endpointV2.url): e.endpoint;
						if (!i) throw new Error("No valid endpoint provider available.");
						const a = await t(s.input, {
							...e,
							endpoint: i
						});
						return n({
							...s,
							request: a
						})
					})(e, t), cr)
				}
			}
		}
		const mr = e => e => {
				throw e
			},
			ur = (e, t) => {},
			pr = {
				step: "finalizeRequest",
				tags: ["HTTP_SIGNING"],
				name: "httpSigningMiddleware",
				aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
				override: !0,
				relation: "after",
				toMiddleware: "retryMiddleware"
			},
			hr = e => ({
				applyToStack: e => {
					e.addRelativeTo(((e, t) => async n => {
						if (!y.isInstance(n.request)) return e(n);
						const r = qe(t).selectedHttpAuthScheme;
						if (!r) throw new Error("No HttpAuthScheme was selected: unable to sign request");
						const {
							httpAuthOption: {
								signingProperties: s = {}
							},
							identity: i,
							signer: a
						} = r, o = await e({
							...n,
							request: await a.sign(n.request, i, s)
						}).catch((a.errorHandler || mr)(s));
						return (a.successHandler || ur)(o.response, s), o
					}), pr)
				}
			}),
			gr = e => {
				if ("function" == typeof e) return e;
				const t = Promise.resolve(e);
				return () => t
			};
		class yr {
			constructor(e) {
				this.authSchemes = new Map;
				for (const [t, n] of Object.entries(e)) void 0 !== n && this.authSchemes.set(t, n)
			}
			getIdentityProvider(e) {
				return this.authSchemes.get(e)
			}
		}
		const fr = (br = 3e5, e => xr(e) && e.expiration.getTime() - Date.now() < br);
		var br;
		const xr = e => void 0 !== e.expiration,
			Nr = e => e => {
				throw e
			},
			Sr = (e, t) => {},
			vr = e => (t, n) => async r => {
				if (!y.isInstance(r.request)) return t(r);
				const s = qe(n).selectedHttpAuthScheme;
				if (!s) throw new Error("No HttpAuthScheme was selected: unable to sign request");
				const {
					httpAuthOption: {
						signingProperties: i = {}
					},
					identity: a,
					signer: o
				} = s;
				let l;
				l = n.s3ExpressIdentity ? await (async (e, t, n, r) => {
					const s = await r.signWithCredentials(n, e, {});
					if (s.headers["X-Amz-Security-Token"] || s.headers["x-amz-security-token"]) throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
					return s
				})(n.s3ExpressIdentity, 0, r.request, await e.signer()) : await o.sign(r.request, a, i);
				const c = await t({
					...r,
					request: l
				}).catch((o.errorHandler || Nr)(i));
				return (o.successHandler || Sr)(c.response, i), c
			}, wr = {
				CopyObjectCommand: !0,
				UploadPartCopyCommand: !0,
				CompleteMultipartUploadCommand: !0
			}, Cr = e => (t, n) => async r => {
				const s = await t(r),
					{
						response: i
					} = s;
				if (!f.isInstance(i)) return s;
				const {
					statusCode: a,
					body: o
				} = i;
				if (a < 200 || a >= 300) return s;
				if (!("function" == typeof o?.stream || "function" == typeof o?.pipe || "function" == typeof o?.tee)) return s;
				let l = o,
					c = o;
				!o || "object" != typeof o || o instanceof Uint8Array || ([l, c] = await async function(e) {
					return "function" == typeof e.stream && (e = e.stream()), e.tee()
				}(o)), i.body = c;
				const d = await Pr(l, {
					streamCollector: async e => async function(e, t) {
						let n = 0;
						const r = [],
							s = e.getReader();
						let i = !1;
						for (; !i;) {
							const {
								done: e,
								value: a
							} = await s.read();
							if (a && (r.push(a), n += a?.byteLength ?? 0), n >= t) break;
							i = e
						}
						s.releaseLock();
						const a = new Uint8Array(Math.min(t, n));
						let o = 0;
						for (const e of r) {
							if (e.byteLength > a.byteLength - o) {
								a.set(e.subarray(0, a.byteLength - o), o);
								break
							}
							a.set(e, o), o += e.length
						}
						return a
					}(e, 3e3)
				});
				"function" == typeof l?.destroy && l.destroy();
				const m = e.utf8Encoder(d.subarray(d.length - 16));
				if (0 === d.length && wr[n.commandName]) {
					const e = new Error("S3 aborted request");
					throw e.name = "InternalError", e
				}
				return m && m.endsWith("</Error>") && (i.statusCode = 400), s
			}, Pr = (e = new Uint8Array, t) => e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array), Rr = {
				relation: "after",
				toMiddleware: "deserializerMiddleware",
				tags: ["THROW_200_EXCEPTIONS", "S3"],
				name: "throw200ExceptionsMiddleware",
				override: !0
			}, Er = e => ({
				applyToStack: t => {
					t.addRelativeTo(Cr(e), Rr)
				}
			});
		const zr = {
			name: "bucketEndpointMiddleware",
			override: !0,
			relation: "after",
			toMiddleware: "endpointV2Middleware"
		};
		const Or = {
				step: "initialize",
				tags: ["VALIDATE_BUCKET_NAME"],
				name: "validateBucketNameMiddleware",
				override: !0
			},
			Tr = e => ({
				applyToStack: t => {
					t.add(function({
						bucketEndpoint: e
					}) {
						return t => async n => {
							const {
								input: {
									Bucket: r
								}
							} = n;
							if (!e && "string" == typeof r && !("string" == typeof(s = r) && 0 === s.indexOf("arn:") && s.split(":").length >= 6) && r.indexOf("/") >= 0) {
								const e = new Error(`Bucket name shouldn't contain '/', received '${r}'`);
								throw e.name = "InvalidBucketName", e
							}
							var s;
							return t({
								...n
							})
						}
					}(e), Or), t.addRelativeTo(function(e) {
						return (t, n) => async r => {
							if (e.bucketEndpoint) {
								const e = n.endpointV2;
								if (e) {
									const t = r.input.Bucket;
									if ("string" == typeof t) try {
										const r = new URL(t);
										n.endpointV2 = {
											...e,
											url: r
										}
									} catch (e) {
										const r = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${t} could not be parsed as URL.`;
										throw "NoOpLogger" === n.logger?.constructor?.name ? console.warn(r) : n.logger?.warn?.(r), e
									}
								}
							}
							return t(r)
						}
					}(e), zr)
				}
			});
		const kr = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
			Ar = e => kr.test(e) || e.startsWith("[") && e.endsWith("]"),
			Ir = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
			Br = (e, t = !1) => {
				if (!t) return Ir.test(e);
				const n = e.split(".");
				for (const e of n)
					if (!Br(e)) return !1;
				return !0
			},
			Mr = {},
			qr = "endpoints";

		function _r(e) {
			return "object" != typeof e || null == e ? e : "ref" in e ? `$${_r(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv||[]).map(_r).join(", ")})` : JSON.stringify(e, null, 2)
		}
		class Dr extends Error {
			constructor(e) {
				super(e), this.name = "EndpointError"
			}
		}
		const Lr = (e, t) => (e => {
				const t = e.split("."),
					n = [];
				for (const r of t) {
					const t = r.indexOf("[");
					if (-1 !== t) {
						if (r.indexOf("]") !== r.length - 1) throw new Dr(`Path: '${e}' does not end with ']'`);
						const s = r.slice(t + 1, -1);
						if (Number.isNaN(parseInt(s))) throw new Dr(`Invalid array index: '${s}' in path: '${e}'`);
						0 !== t && n.push(r.slice(0, t)), n.push(s)
					} else n.push(r)
				}
				return n
			})(t).reduce(((n, r) => {
				if ("object" != typeof n) throw new Dr(`Index '${r}' in '${t}' not found in '${JSON.stringify(e)}'`);
				return Array.isArray(n) ? n[parseInt(r)] : n[r]
			}), e),
			Hr = {
				[d.HTTP]: 80,
				[d.HTTPS]: 443
			},
			Ur = {
				booleanEquals: (e, t) => e === t,
				getAttr: Lr,
				isSet: e => null != e,
				isValidHostLabel: Br,
				not: e => !e,
				parseURL: e => {
					const t = (() => {
						try {
							if (e instanceof URL) return e;
							if ("object" == typeof e && "hostname" in e) {
								const {
									hostname: t,
									port: n,
									protocol: r = "",
									path: s = "",
									query: i = {}
								} = e, a = new URL(`${r}//${t}${n?`:${n}`:""}${s}`);
								return a.search = Object.entries(i).map((([e, t]) => `${e}=${t}`)).join("&"), a
							}
							return new URL(e)
						} catch (e) {
							return null
						}
					})();
					if (!t) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
					const n = t.href,
						{
							host: r,
							hostname: s,
							pathname: i,
							protocol: a,
							search: o
						} = t;
					if (o) return null;
					const l = a.slice(0, -1);
					if (!Object.values(d).includes(l)) return null;
					const c = Ar(s);
					return {
						scheme: l,
						authority: `${r}${n.includes(`${r}:${Hr[l]}`)||"string"==typeof e&&e.includes(`${r}:${Hr[l]}`)?`:${Hr[l]}`:""}`,
						path: i,
						normalizedPath: i.endsWith("/") ? i : `${i}/`,
						isIp: c
					}
				},
				stringEquals: (e, t) => e === t,
				substring: (e, t, n, r) => t >= n || e.length < n ? null : r ? e.substring(e.length - n, e.length - t) : e.substring(t, n),
				uriEncode: e => encodeURIComponent(e).replace(/[!*'()]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`))
			},
			jr = (e, t) => {
				const n = [],
					r = {
						...t.endpointParams,
						...t.referenceRecord
					};
				let s = 0;
				for (; s < e.length;) {
					const t = e.indexOf("{", s);
					if (-1 === t) {
						n.push(e.slice(s));
						break
					}
					n.push(e.slice(s, t));
					const i = e.indexOf("}", t);
					if (-1 === i) {
						n.push(e.slice(t));
						break
					}
					"{" === e[t + 1] && "}" === e[i + 1] && (n.push(e.slice(t + 1, i)), s = i + 2);
					const a = e.substring(t + 1, i);
					if (a.includes("#")) {
						const [e, t] = a.split("#");
						n.push(Lr(r[e], t))
					} else n.push(r[a]);
					s = i + 1
				}
				return n.join("")
			},
			$r = (e, t, n) => {
				if ("string" == typeof e) return jr(e, n);
				if (e.fn) return Fr(e, n);
				if (e.ref) return (({
					ref: e
				}, t) => ({
					...t.endpointParams,
					...t.referenceRecord
				} [e]))(e, n);
				throw new Dr(`'${t}': ${String(e)} is not a string, function or reference.`)
			},
			Fr = ({
				fn: e,
				argv: t
			}, n) => {
				const r = t.map((e => ["boolean", "number"].includes(typeof e) ? e : $r(e, "arg", n))),
					s = e.split(".");
				return s[0] in Mr && null != s[1] ? Mr[s[0]][s[1]](...r) : Ur[e](...r)
			},
			Vr = ({
				assign: e,
				...t
			}, n) => {
				if (e && e in n.referenceRecord) throw new Dr(`'${e}' is already defined in Reference Record.`);
				const r = Fr(t, n);
				return n.logger?.debug?.(`${qr} evaluateCondition: ${_r(t)} = ${_r(r)}`), {
					result: "" === r || !!r,
					...null != e && {
						toAssign: {
							name: e,
							value: r
						}
					}
				}
			},
			Kr = (e = [], t) => {
				const n = {};
				for (const r of e) {
					const {
						result: e,
						toAssign: s
					} = Vr(r, {
						...t,
						referenceRecord: {
							...t.referenceRecord,
							...n
						}
					});
					if (!e) return {
						result: e
					};
					s && (n[s.name] = s.value, t.logger?.debug?.(`${qr} assign: ${s.name} := ${_r(s.value)}`))
				}
				return {
					result: !0,
					referenceRecord: n
				}
			},
			Gr = (e, t) => Object.entries(e).reduce(((e, [n, r]) => ({
				...e,
				[n]: r.map((e => {
					const r = $r(e, "Header value entry", t);
					if ("string" != typeof r) throw new Dr(`Header '${n}' value '${r}' is not a string`);
					return r
				}))
			})), {}),
			Wr = (e, t) => {
				if (Array.isArray(e)) return e.map((e => Wr(e, t)));
				switch (typeof e) {
					case "string":
						return jr(e, t);
					case "object":
						if (null === e) throw new Dr(`Unexpected endpoint property: ${e}`);
						return Xr(e, t);
					case "boolean":
						return e;
					default:
						throw new Dr("Unexpected endpoint property type: " + typeof e)
				}
			},
			Xr = (e, t) => Object.entries(e).reduce(((e, [n, r]) => ({
				...e,
				[n]: Wr(r, t)
			})), {}),
			Qr = (e, t) => {
				const n = $r(e, "Endpoint URL", t);
				if ("string" == typeof n) try {
					return new URL(n)
				} catch (e) {
					throw console.error(`Failed to construct URL with ${n}`, e), e
				}
				throw new Dr("Endpoint URL must be a string, got " + typeof n)
			},
			Jr = (e, t) => {
				const {
					conditions: n,
					endpoint: r
				} = e, {
					result: s,
					referenceRecord: i
				} = Kr(n, t);
				if (!s) return;
				const a = {
						...t,
						referenceRecord: {
							...t.referenceRecord,
							...i
						}
					},
					{
						url: o,
						properties: l,
						headers: c
					} = r;
				return t.logger?.debug?.(`${qr} Resolving endpoint from template: ${_r(r)}`), {
					...null != c && {
						headers: Gr(c, a)
					},
					...null != l && {
						properties: Xr(l, a)
					},
					url: Qr(o, a)
				}
			},
			Zr = (e, t) => {
				const {
					conditions: n,
					error: r
				} = e, {
					result: s,
					referenceRecord: i
				} = Kr(n, t);
				if (s) throw new Dr($r(r, "Error", {
					...t,
					referenceRecord: {
						...t.referenceRecord,
						...i
					}
				}))
			},
			Yr = (e, t) => {
				const {
					conditions: n,
					rules: r
				} = e, {
					result: s,
					referenceRecord: i
				} = Kr(n, t);
				if (s) return es(r, {
					...t,
					referenceRecord: {
						...t.referenceRecord,
						...i
					}
				})
			},
			es = (e, t) => {
				for (const n of e)
					if ("endpoint" === n.type) {
						const e = Jr(n, t);
						if (e) return e
					} else if ("error" === n.type) Zr(n, t);
				else {
					if ("tree" !== n.type) throw new Dr(`Unknown endpoint rule: ${n}`);
					{
						const e = Yr(n, t);
						if (e) return e
					}
				}
				throw new Dr("Rules evaluation failed")
			},
			ts = (e, t = !1) => {
				if (t) {
					for (const t of e.split("."))
						if (!ts(t)) return !1;
					return !0
				}
				return !!Br(e) && (!(e.length < 3 || e.length > 63) && (e === e.toLowerCase() && !Ar(e)))
			};
		let ns = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il|mx)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"ap-southeast-5":{"description":"Asia Pacific (Malaysia)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{}}],"version":"1.1"}'),
			rs = "";
		const ss = {
			isVirtualHostableS3Bucket: ts,
			parseArn: e => {
				const t = e.split(":");
				if (t.length < 6) return null;
				const [n, r, s, i, a, ...o] = t;
				if ("arn" !== n || "" === r || "" === s || "" === o.join(":")) return null;
				return {
					partition: r,
					service: s,
					region: i,
					accountId: a,
					resourceId: o.map((e => e.split("/"))).flat()
				}
			},
			partition: e => {
				const {
					partitions: t
				} = ns;
				for (const n of t) {
					const {
						regions: t,
						outputs: r
					} = n;
					for (const [n, s] of Object.entries(t))
						if (n === e) return {
							...r,
							...s
						}
				}
				for (const n of t) {
					const {
						regionRegex: t,
						outputs: r
					} = n;
					if (new RegExp(t).test(e)) return {
						...r
					}
				}
				const n = t.find((e => "aws" === e.id));
				if (!n) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
				return {
					...n.outputs
				}
			}
		};
		Mr.aws = ss;
		const is = /\d{12}\.ddb/;
		const as = "user-agent",
			os = "x-amz-user-agent",
			ls = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
			cs = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
		const ds = e => (t, n) => async r => {
			const {
				request: s
			} = r;
			if (!y.isInstance(s)) return t(r);
			const {
				headers: i
			} = s, a = n?.userAgent?.map(ms) || [], o = (await e.defaultUserAgentProvider()).map(ms);
			await async function(e, t, n) {
				const r = n.request;
				if ("rpc-v2-cbor" === r?.headers?.["smithy-protocol"] && z(e, "PROTOCOL_RPC_V2_CBOR", "M"), "function" == typeof t.retryStrategy) {
					const n = await t.retryStrategy();
					"function" == typeof n.acquireInitialRetryToken ? n.constructor?.name?.includes("Adaptive") ? z(e, "RETRY_MODE_ADAPTIVE", "F") : z(e, "RETRY_MODE_STANDARD", "E") : z(e, "RETRY_MODE_LEGACY", "D")
				}
				if ("function" == typeof t.accountIdEndpointMode) {
					const n = e.endpointV2;
					switch (String(n?.url?.hostname).match(is) && z(e, "ACCOUNT_ID_ENDPOINT", "O"), await (t.accountIdEndpointMode?.())) {
						case "disabled":
							z(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
							break;
						case "preferred":
							z(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
							break;
						case "required":
							z(e, "ACCOUNT_ID_MODE_REQUIRED", "R")
					}
				}
				const s = e.__smithy_context?.selectedHttpAuthScheme?.identity;
				if (s?.$source) {
					const t = s;
					t.accountId && z(e, "RESOLVED_ACCOUNT_ID", "T");
					for (const [n, r] of Object.entries(t.$source ?? {})) z(e, n, r)
				}
			}(n, e, r);
			const l = n;
			o.push(`m/${function(e){let t="";for(const n in e){const r=e[n];if(!(t.length+r.length+1<=1024))break;t.length?t+=","+r:t+=r}return t}(Object.assign({},n.__smithy_context?.features,l.__aws_sdk_context?.features))}`);
			const c = e?.customUserAgent?.map(ms) || [],
				d = await e.userAgentAppId();
			d && o.push(ms([`app/${d}`]));
			const m = (rs ? [rs] : []).concat([...o, ...a, ...c]).join(" "),
				u = [...o.filter((e => e.startsWith("aws-sdk-"))), ...c].join(" ");
			return "browser" !== e.runtime ? (u && (i[os] = i[os] ? `${i[as]} ${u}` : u), i[as] = m) : i[os] = m, t({
				...r,
				request: s
			})
		}, ms = e => {
			const t = e[0].split("/").map((e => e.replace(ls, "-"))).join("/"),
				n = e[1]?.replace(cs, "-"),
				r = t.indexOf("/"),
				s = t.substring(0, r);
			let i = t.substring(r + 1);
			return "api" === s && (i = i.toLowerCase()), [s, i, n].filter((e => e && e.length > 0)).reduce(((e, t, n) => {
				switch (n) {
					case 0:
						return t;
					case 1:
						return `${e}/${t}`;
					default:
						return `${e}#${t}`
				}
			}), "")
		}, us = {
			name: "getUserAgentMiddleware",
			step: "build",
			priority: "low",
			tags: ["SET_USER_AGENT", "USER_AGENT"],
			override: !0
		}, ps = e => "string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips")), hs = e => ps(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e, gs = "content-length";
		const ys = {
				step: "build",
				tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
				name: "contentLengthMiddleware",
				override: !0
			},
			fs = e => ({
				applyToStack: t => {
					var n;
					t.add((n = e.bodyLengthChecker, e => async t => {
						const r = t.request;
						if (y.isInstance(r)) {
							const {
								body: e,
								headers: t
							} = r;
							if (e && -1 === Object.keys(t).map((e => e.toLowerCase())).indexOf(gs)) try {
								const t = n(e);
								r.headers = {
									...r.headers,
									[gs]: String(t)
								}
							} catch (e) {}
						}
						return e({
							...t,
							request: r
						})
					}), ys)
				}
			}),
			bs = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
			xs = /(\d+\.){3}\d+/,
			Ns = /\.\./,
			Ss = e => bs.test(e) && !xs.test(e) && !Ns.test(e),
			vs = e => {
				const [t, n, r, , , s] = e.split(":"), i = "arn" === t && e.split(":").length >= 6, a = Boolean(i && n && r && s);
				if (i && !a) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
				return a
			},
			ws = (e, t, n) => {
				const r = async () => {
					const r = n[e] ?? n[t];
					return "function" == typeof r ? r() : r
				};
				return "credentialScope" === e || "CredentialScope" === t ? async () => {
					const e = "function" == typeof n.credentials ? await n.credentials() : n.credentials;
					return e?.credentialScope ?? e?.CredentialScope
				}: "accountId" === e || "AccountId" === t ? async () => {
					const e = "function" == typeof n.credentials ? await n.credentials() : n.credentials;
					return e?.accountId ?? e?.AccountId
				}: "endpoint" === e || "endpoint" === t ? async () => {
					const e = await r();
					if (e && "object" == typeof e) {
						if ("url" in e) return e.url.href;
						if ("hostname" in e) {
							const {
								protocol: t,
								hostname: n,
								port: r,
								path: s
							} = e;
							return `${t}//${n}${r?":"+r:""}${s}`
						}
					}
					return e
				}: r
			},
			Cs = async e => {};
		const Ps = e => {
				if ("string" == typeof e) return Ps(new URL(e));
				const {
					hostname: t,
					pathname: n,
					port: r,
					protocol: s,
					search: i
				} = e;
				let a;
				return i && (a = function(e) {
					const t = {};
					if (e = e.replace(/^\?/, ""))
						for (const n of e.split("&")) {
							let [e, r = null] = n.split("=");
							e = decodeURIComponent(e), r && (r = decodeURIComponent(r)), e in t ? Array.isArray(t[e]) ? t[e].push(r) : t[e] = [t[e], r] : t[e] = r
						}
					return t
				}(i)), {
					hostname: t,
					port: r ? parseInt(r) : void 0,
					protocol: s,
					path: n,
					query: a
				}
			},
			Rs = e => "object" == typeof e ? "url" in e ? Ps(e.url) : e : Ps(e),
			Es = async (e, t, n, r) => {
				if (!n.endpoint) {
					let e;
					e = n.serviceConfiguredEndpoint ? await n.serviceConfiguredEndpoint() : await Cs(n.serviceId), e && (n.endpoint = () => Promise.resolve(Rs(e)))
				}
				const s = await zs(e, t, n);
				if ("function" != typeof n.endpointProvider) throw new Error("config.endpointProvider is not set.");
				return n.endpointProvider(s, r)
			}, zs = async (e, t, n) => {
				const r = {},
					s = t?.getEndpointParameterInstructions?.() || {};
				for (const [t, i] of Object.entries(s)) switch (i.type) {
					case "staticContextParams":
						r[t] = i.value;
						break;
					case "contextParams":
						r[t] = e[i.name];
						break;
					case "clientContextParams":
					case "builtInParams":
						r[t] = await ws(i.name, t, n)();
						break;
					default:
						throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(i))
				}
				return 0 === Object.keys(s).length && Object.assign(r, n), "s3" === String(n.serviceId).toLowerCase() && await (async e => {
					const t = e?.Bucket || "";
					if ("string" == typeof e.Bucket && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), vs(t)) {
						if (!0 === e.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets")
					} else(!Ss(t) || -1 !== t.indexOf(".") && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) && (e.ForcePathStyle = !0);
					return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e
				})(r), r
			}, Os = {
				step: "serialize",
				tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
				name: "endpointV2Middleware",
				override: !0,
				relation: "before",
				toMiddleware: cr.name
			}, Ts = (e, t) => ({
				applyToStack: n => {
					n.addRelativeTo((({
						config: e,
						instructions: t
					}) => (n, r) => async s => {
						e.endpoint && function(e, t, n) {
							e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = {
								features: {}
							}, e.__smithy_context.features[t] = n
						}(r, "ENDPOINT_OVERRIDE", "N");
						const i = await Es(s.input, {
							getEndpointParameterInstructions: () => t
						}, {
							...e
						}, r);
						r.endpointV2 = i, r.authSchemes = i.properties?.authSchemes;
						const a = r.authSchemes?.[0];
						if (a) {
							r.signing_region = a.signingRegion, r.signing_service = a.signingName;
							const e = qe(r),
								t = e?.selectedHttpAuthScheme?.httpAuthOption;
							t && (t.signingProperties = Object.assign(t.signingProperties || {}, {
								signing_region: a.signingRegion,
								signingRegion: a.signingRegion,
								signing_service: a.signingName,
								signingName: a.signingName,
								signingRegionSet: a.signingRegionSet
							}, a.properties))
						}
						return n({
							...s
						})
					})({
						config: e,
						instructions: t
					}), Os)
				}
			});
		var ks;
		! function(e) {
			e.STANDARD = "standard", e.ADAPTIVE = "adaptive"
		}(ks || (ks = {}));
		const As = ks.STANDARD,
			Is = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
			Bs = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
			Ms = [500, 502, 503, 504],
			qs = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
			_s = e => 429 === e.$metadata?.httpStatusCode || Is.includes(e.name) || 1 == e.$retryable?.throttling,
			Ds = e => (e => e.$metadata?.clockSkewCorrected)(e) || Bs.includes(e.name) || qs.includes(e?.code || "") || Ms.includes(e.$metadata?.httpStatusCode || 0);
		class Ls {
			constructor(e) {
				this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = e?.beta ?? .7, this.minCapacity = e?.minCapacity ?? 1, this.minFillRate = e?.minFillRate ?? .5, this.scaleConstant = e?.scaleConstant ?? .4, this.smooth = e?.smooth ?? .8;
				const t = this.getCurrentTimeInSeconds();
				this.lastThrottleTime = t, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity
			}
			getCurrentTimeInSeconds() {
				return Date.now() / 1e3
			}
			async getSendToken() {
				return this.acquireTokenBucket(1)
			}
			async acquireTokenBucket(e) {
				if (this.enabled) {
					if (this.refillTokenBucket(), e > this.currentCapacity) {
						const t = (e - this.currentCapacity) / this.fillRate * 1e3;
						await new Promise((e => setTimeout(e, t)))
					}
					this.currentCapacity = this.currentCapacity - e
				}
			}
			refillTokenBucket() {
				const e = this.getCurrentTimeInSeconds();
				if (!this.lastTimestamp) return void(this.lastTimestamp = e);
				const t = (e - this.lastTimestamp) * this.fillRate;
				this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t), this.lastTimestamp = e
			}
			updateClientSendingRate(e) {
				let t;
				if (this.updateMeasuredRate(), _s(e)) {
					const e = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
					this.lastMaxRate = e, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(e), this.enableTokenBucket()
				} else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
				const n = Math.min(t, 2 * this.measuredTxRate);
				this.updateTokenBucketRate(n)
			}
			calculateTimeWindow() {
				this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3))
			}
			cubicThrottle(e) {
				return this.getPrecise(e * this.beta)
			}
			cubicSuccess(e) {
				return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate)
			}
			enableTokenBucket() {
				this.enabled = !0
			}
			updateTokenBucketRate(e) {
				this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)
			}
			updateMeasuredRate() {
				const e = this.getCurrentTimeInSeconds(),
					t = Math.floor(2 * e) / 2;
				if (this.requestCount++, t > this.lastTxRateBucket) {
					const e = this.requestCount / (t - this.lastTxRateBucket);
					this.measuredTxRate = this.getPrecise(e * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t
				}
			}
			getPrecise(e) {
				return parseFloat(e.toFixed(8))
			}
		}
		const Hs = 100,
			Us = 2e4,
			js = "amz-sdk-invocation-id",
			$s = "amz-sdk-request",
			Fs = ({
				retryDelay: e,
				retryCount: t,
				retryCost: n
			}) => ({
				getRetryCount: () => t,
				getRetryDelay: () => Math.min(Us, e),
				getRetryCost: () => n
			});
		class Vs {
			constructor(e) {
				this.maxAttempts = e, this.mode = ks.STANDARD, this.capacity = 500, this.retryBackoffStrategy = (() => {
					let e = Hs;
					return {
						computeNextBackoffDelay: t => Math.floor(Math.min(Us, Math.random() * 2 ** t * e)),
						setDelayBase: t => {
							e = t
						}
					}
				})(), this.maxAttemptsProvider = "function" == typeof e ? e : async () => e
			}
			async acquireInitialRetryToken(e) {
				return Fs({
					retryDelay: Hs,
					retryCount: 0
				})
			}
			async refreshRetryTokenForRetry(e, t) {
				const n = await this.getMaxAttempts();
				if (this.shouldRetry(e, t, n)) {
					const n = t.errorType;
					this.retryBackoffStrategy.setDelayBase("THROTTLING" === n ? 500 : Hs);
					const r = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()),
						s = t.retryAfterHint ? Math.max(t.retryAfterHint.getTime() - Date.now() || 0, r) : r,
						i = this.getCapacityCost(n);
					return this.capacity -= i, Fs({
						retryDelay: s,
						retryCount: e.getRetryCount() + 1,
						retryCost: i
					})
				}
				throw new Error("No retry token available")
			}
			recordSuccess(e) {
				this.capacity = Math.max(500, this.capacity + (e.getRetryCost() ?? 1))
			}
			getCapacity() {
				return this.capacity
			}
			async getMaxAttempts() {
				try {
					return await this.maxAttemptsProvider()
				} catch (e) {
					return console.warn("Max attempts provider could not resolve. Using default of 3"), 3
				}
			}
			shouldRetry(e, t, n) {
				return e.getRetryCount() + 1 < n && this.capacity >= this.getCapacityCost(t.errorType) && this.isRetryableError(t.errorType)
			}
			getCapacityCost(e) {
				return "TRANSIENT" === e ? 10 : 5
			}
			isRetryableError(e) {
				return "THROTTLING" === e || "TRANSIENT" === e
			}
		}
		class Ks {
			constructor(e, t) {
				this.maxAttemptsProvider = e, this.mode = ks.ADAPTIVE;
				const {
					rateLimiter: n
				} = t ?? {};
				this.rateLimiter = n ?? new Ls, this.standardRetryStrategy = new Vs(e)
			}
			async acquireInitialRetryToken(e) {
				return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(e)
			}
			async refreshRetryTokenForRetry(e, t) {
				return this.rateLimiter.updateClientSendingRate(t), this.standardRetryStrategy.refreshRetryTokenForRetry(e, t)
			}
			recordSuccess(e) {
				this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e)
			}
		}
		const Gs = {
			randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
		};
		let Ws;
		const Xs = new Uint8Array(16);

		function Qs() {
			if (!Ws && (Ws = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ws)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
			return Ws(Xs)
		}
		const Js = [];
		for (let e = 0; e < 256; ++e) Js.push((e + 256).toString(16).slice(1));

		function Zs(e, t = 0) {
			return Js[e[t + 0]] + Js[e[t + 1]] + Js[e[t + 2]] + Js[e[t + 3]] + "-" + Js[e[t + 4]] + Js[e[t + 5]] + "-" + Js[e[t + 6]] + Js[e[t + 7]] + "-" + Js[e[t + 8]] + Js[e[t + 9]] + "-" + Js[e[t + 10]] + Js[e[t + 11]] + Js[e[t + 12]] + Js[e[t + 13]] + Js[e[t + 14]] + Js[e[t + 15]]
		}
		const Ys = function(e, t, n) {
				if (Gs.randomUUID && !t && !e) return Gs.randomUUID();
				const r = (e = e || {}).random || (e.rng || Qs)();
				if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
					n = n || 0;
					for (let e = 0; e < 16; ++e) t[n + e] = r[e];
					return t
				}
				return Zs(r)
			},
			ei = e => e instanceof Error ? e : e instanceof Object ? Object.assign(new Error, e) : "string" == typeof e ? new Error(e) : new Error(`AWS SDK error wrapper for ${e}`);
		const ti = e => e?.body instanceof ReadableStream,
			ni = e => void 0 !== e.acquireInitialRetryToken && void 0 !== e.refreshRetryTokenForRetry && void 0 !== e.recordSuccess,
			ri = e => {
				const t = {
						error: e,
						errorType: si(e)
					},
					n = oi(e.$response);
				return n && (t.retryAfterHint = n), t
			},
			si = e => _s(e) ? "THROTTLING" : Ds(e) ? "TRANSIENT" : (e => {
				if (void 0 !== e.$metadata?.httpStatusCode) {
					const t = e.$metadata.httpStatusCode;
					return 500 <= t && t <= 599 && !Ds(e)
				}
				return !1
			})(e) ? "SERVER_ERROR" : "CLIENT_ERROR",
			ii = {
				name: "retryMiddleware",
				tags: ["RETRY"],
				step: "finalizeRequest",
				priority: "high",
				override: !0
			},
			ai = e => ({
				applyToStack: t => {
					t.add((e => (t, n) => async r => {
						let s = await e.retryStrategy();
						const i = await e.maxAttempts();
						if (!ni(s)) return s?.mode && (n.userAgent = [...n.userAgent || [],
							["cfg/retry-mode", s.mode]
						]), s.retry(t, r);
						{
							let e = await s.acquireInitialRetryToken(n.partition_id),
								a = new Error,
								o = 0,
								l = 0;
							const {
								request: c
							} = r, d = y.isInstance(c);
							for (d && (c.headers[js] = Ys());;) try {
								d && (c.headers[$s] = `attempt=${o+1}; max=${i}`);
								const {
									response: n,
									output: a
								} = await t(r);
								return s.recordSuccess(e), a.$metadata.attempts = o + 1, a.$metadata.totalRetryDelay = l, {
									response: n,
									output: a
								}
							} catch (t) {
								const r = ri(t);
								if (a = ei(t), d && ti(c)) throw (n.logger instanceof rn ? console : n.logger)?.warn("An error was encountered in a non-retryable streaming request."), a;
								try {
									e = await s.refreshRetryTokenForRetry(e, r)
								} catch (e) {
									throw a.$metadata || (a.$metadata = {}), a.$metadata.attempts = o + 1, a.$metadata.totalRetryDelay = l, a
								}
								o = e.getRetryCount();
								const i = e.getRetryDelay();
								l += i, await new Promise((e => setTimeout(e, i)))
							}
						}
					})(e), ii)
				}
			}),
			oi = e => {
				if (!f.isInstance(e)) return;
				const t = Object.keys(e.headers).find((e => "retry-after" === e.toLowerCase()));
				if (!t) return;
				const n = e.headers[t],
					r = Number(n);
				if (!Number.isNaN(r)) return new Date(1e3 * r);
				return new Date(n)
			};
		const li = e => {
			let t, n = !1;
			e.credentials && (n = !0, t = ((e, t, n) => {
				if (void 0 === e) return;
				const r = "function" != typeof e ? async () => Promise.resolve(e): e;
				let s, i, a, o = !1;
				const l = async e => {
					i || (i = r(e));
					try {
						s = await i, a = !0, o = !1
					} finally {
						i = void 0
					}
					return s
				};
				return void 0 === t ? async e => (a && !e?.forceRefresh || (s = await l(e)), s): async e => (a && !e?.forceRefresh || (s = await l(e)), o ? s : n(s) ? t(s) ? (await l(e), s) : s : (o = !0, s))
			})(e.credentials, fr, xr)), t || (t = e.credentialDefaultProvider ? gr(e.credentialDefaultProvider(Object.assign({}, e, {
				parentClientConfig: e
			}))) : async () => {
				throw new Error("`credentials` is missing")
			});
			const {
				signingEscapePath: r = !0,
				systemClockOffset: s = e.systemClockOffset || 0,
				sha256: i
			} = e;
			let a;
			return a = e.signer ? gr(e.signer) : e.regionInfoProvider ? () => gr(e.region)().then((async t => [await e.regionInfoProvider(t, {
				useFipsEndpoint: await e.useFipsEndpoint(),
				useDualstackEndpoint: await e.useDualstackEndpoint()
			}) || {}, t])).then((([n, s]) => {
				const {
					signingRegion: a,
					signingService: o
				} = n;
				e.signingRegion = e.signingRegion || a || s, e.signingName = e.signingName || o || e.serviceId;
				const l = {
					...e,
					credentials: t,
					region: e.signingRegion,
					service: e.signingName,
					sha256: i,
					uriEscapePath: r
				};
				return new(e.signerConstructor || Xn)(l)
			})) : async n => {
				const s = (n = Object.assign({}, {
						name: "sigv4",
						signingName: e.signingName || e.defaultSigningName,
						signingRegion: await gr(e.region)(),
						properties: {}
					}, n)).signingRegion,
					a = n.signingName;
				e.signingRegion = e.signingRegion || s, e.signingName = e.signingName || a || e.serviceId;
				const o = {
					...e,
					credentials: t,
					region: e.signingRegion,
					service: e.signingName,
					sha256: i,
					uriEscapePath: r
				};
				return new(e.signerConstructor || Xn)(o)
			}, {
				...e,
				systemClockOffset: s,
				signingEscapePath: r,
				credentials: n ? async () => t().then((e => {
					return n = "CREDENTIALS_CODE", r = "e", (t = e).$source || (t.$source = {}), t.$source[n] = r, t;
					var t, n, r
				})) : t,
				signer: a
			}
		};
		Error;
		const ci = null;
		class di {
			constructor(e) {
				this.sigv4Signer = new tr(e), this.signerOptions = e
			}
			async sign(e, t = {}) {
				if ("*" === t.signingRegion) {
					if ("node" !== this.signerOptions.runtime) throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
					return this.getSigv4aSigner().sign(e, t)
				}
				return this.sigv4Signer.sign(e, t)
			}
			async signWithCredentials(e, t, n = {}) {
				if ("*" === n.signingRegion) {
					if ("node" !== this.signerOptions.runtime) throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
					return this.getSigv4aSigner().signWithCredentials(e, t, n)
				}
				return this.sigv4Signer.signWithCredentials(e, t, n)
			}
			async presign(e, t = {}) {
				if ("*" === t.signingRegion) {
					if ("node" !== this.signerOptions.runtime) throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
					return this.getSigv4aSigner().presign(e, t)
				}
				return this.sigv4Signer.presign(e, t)
			}
			async presignWithCredentials(e, t, n = {}) {
				if ("*" === n.signingRegion) throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
				return this.sigv4Signer.presignWithCredentials(e, t, n)
			}
			getSigv4aSigner() {
				if (!this.sigv4aSigner) {
					let e = null;
					try {
						if (e = ci, "function" != typeof e) throw new Error
					} catch (e) {
						throw e.message = `${e.message}\nPlease check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. \nYou must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. \nFor more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`, e
					}
					this.sigv4aSigner = new e({
						...this.signerOptions,
						signingAlgorithm: 1
					})
				}
				return this.sigv4aSigner
			}
		}
		const mi = "required",
			ui = "type",
			pi = "conditions",
			hi = "fn",
			gi = "argv",
			yi = "ref",
			fi = "assign",
			bi = "url",
			xi = "properties",
			Ni = "backend",
			Si = "authSchemes",
			vi = "disableDoubleEncoding",
			wi = "signingName",
			Ci = "signingRegion",
			Pi = "headers",
			Ri = "signingRegionSet",
			Ei = !0,
			zi = "isSet",
			Oi = "booleanEquals",
			Ti = "error",
			ki = "aws.partition",
			Ai = "stringEquals",
			Ii = "getAttr",
			Bi = "name",
			Mi = "substring",
			qi = "bucketSuffix",
			_i = "parseURL",
			Di = "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}",
			Li = "endpoint",
			Hi = "tree",
			Ui = "aws.isVirtualHostableS3Bucket",
			ji = "{url#scheme}://{Bucket}.{url#authority}{url#path}",
			$i = "not",
			Fi = "{url#scheme}://{url#authority}{url#path}",
			Vi = "hardwareType",
			Ki = "regionPrefix",
			Gi = "bucketAliasSuffix",
			Wi = "outpostId",
			Xi = "isValidHostLabel",
			Qi = "sigv4a",
			Ji = "s3-outposts",
			Zi = "s3",
			Yi = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",
			ea = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}",
			ta = "https://{Bucket}.s3.{partitionResult#dnsSuffix}",
			na = "aws.parseArn",
			ra = "bucketArn",
			sa = "arnType",
			ia = "s3-object-lambda",
			aa = "accesspoint",
			oa = "accessPointName",
			la = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}",
			ca = "mrapPartition",
			da = "outpostType",
			ma = "arnPrefix",
			ua = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}",
			pa = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
			ha = "https://s3.{partitionResult#dnsSuffix}",
			ga = {
				[mi]: !1,
				[ui]: "String"
			},
			ya = {
				[mi]: !0,
				default: !1,
				[ui]: "Boolean"
			},
			fa = {
				[mi]: !1,
				[ui]: "Boolean"
			},
			ba = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "Accelerate"
				}, !0]
			},
			xa = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "UseFIPS"
				}, !0]
			},
			Na = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "UseDualStack"
				}, !0]
			},
			Sa = {
				[hi]: zi,
				[gi]: [{
					[yi]: "Endpoint"
				}]
			},
			va = {
				[hi]: ki,
				[gi]: [{
					[yi]: "Region"
				}],
				[fi]: "partitionResult"
			},
			wa = {
				[hi]: Ai,
				[gi]: [{
					[hi]: Ii,
					[gi]: [{
						[yi]: "partitionResult"
					}, Bi]
				}, "aws-cn"]
			},
			Ca = {
				[hi]: zi,
				[gi]: [{
					[yi]: "Bucket"
				}]
			},
			Pa = {
				[yi]: "Bucket"
			},
			Ra = {
				[hi]: _i,
				[gi]: [{
					[yi]: "Endpoint"
				}],
				[fi]: "url"
			},
			Ea = {
				[hi]: Oi,
				[gi]: [{
					[hi]: Ii,
					[gi]: [{
						[yi]: "url"
					}, "isIp"]
				}, !0]
			},
			za = {
				[yi]: "url"
			},
			Oa = {
				[hi]: "uriEncode",
				[gi]: [Pa],
				[fi]: "uri_encoded_bucket"
			},
			Ta = {
				[Ni]: "S3Express",
				[Si]: [{
					[vi]: !0,
					[Bi]: "sigv4",
					[wi]: "s3express",
					[Ci]: "{Region}"
				}]
			},
			ka = {},
			Aa = {
				[hi]: Ui,
				[gi]: [Pa, !1]
			},
			Ia = {
				[Ti]: "S3Express bucket name is not a valid virtual hostable name.",
				[ui]: Ti
			},
			Ba = {
				[Ni]: "S3Express",
				[Si]: [{
					[vi]: !0,
					[Bi]: "sigv4-s3express",
					[wi]: "s3express",
					[Ci]: "{Region}"
				}]
			},
			Ma = {
				[hi]: zi,
				[gi]: [{
					[yi]: "UseS3ExpressControlEndpoint"
				}]
			},
			qa = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "UseS3ExpressControlEndpoint"
				}, !0]
			},
			_a = {
				[hi]: $i,
				[gi]: [Sa]
			},
			Da = {
				[Ti]: "Unrecognized S3Express bucket name format.",
				[ui]: Ti
			},
			La = {
				[hi]: $i,
				[gi]: [Ca]
			},
			Ha = {
				[yi]: Vi
			},
			Ua = {
				[pi]: [_a],
				[Ti]: "Expected a endpoint to be specified but no endpoint was found",
				[ui]: Ti
			},
			ja = {
				[Si]: [{
					[vi]: !0,
					[Bi]: Qi,
					[wi]: Ji,
					[Ri]: ["*"]
				}, {
					[vi]: !0,
					[Bi]: "sigv4",
					[wi]: Ji,
					[Ci]: "{Region}"
				}]
			},
			$a = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "ForcePathStyle"
				}, !1]
			},
			Fa = {
				[yi]: "ForcePathStyle"
			},
			Va = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "Accelerate"
				}, !1]
			},
			Ka = {
				[hi]: Ai,
				[gi]: [{
					[yi]: "Region"
				}, "aws-global"]
			},
			Ga = {
				[Si]: [{
					[vi]: !0,
					[Bi]: "sigv4",
					[wi]: Zi,
					[Ci]: "us-east-1"
				}]
			},
			Wa = {
				[hi]: $i,
				[gi]: [Ka]
			},
			Xa = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "UseGlobalEndpoint"
				}, !0]
			},
			Qa = {
				[bi]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
				[xi]: {
					[Si]: [{
						[vi]: !0,
						[Bi]: "sigv4",
						[wi]: Zi,
						[Ci]: "{Region}"
					}]
				},
				[Pi]: {}
			},
			Ja = {
				[Si]: [{
					[vi]: !0,
					[Bi]: "sigv4",
					[wi]: Zi,
					[Ci]: "{Region}"
				}]
			},
			Za = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "UseGlobalEndpoint"
				}, !1]
			},
			Ya = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "UseDualStack"
				}, !1]
			},
			eo = {
				[bi]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}",
				[xi]: Ja,
				[Pi]: {}
			},
			to = {
				[hi]: Oi,
				[gi]: [{
					[yi]: "UseFIPS"
				}, !1]
			},
			no = {
				[bi]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}",
				[xi]: Ja,
				[Pi]: {}
			},
			ro = {
				[bi]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
				[xi]: Ja,
				[Pi]: {}
			},
			so = {
				[hi]: Oi,
				[gi]: [{
					[hi]: Ii,
					[gi]: [za, "isIp"]
				}, !1]
			},
			io = {
				[bi]: Yi,
				[xi]: Ja,
				[Pi]: {}
			},
			ao = {
				[bi]: ji,
				[xi]: Ja,
				[Pi]: {}
			},
			oo = {
				[Li]: ao,
				[ui]: Li
			},
			lo = {
				[bi]: ea,
				[xi]: Ja,
				[Pi]: {}
			},
			co = {
				[bi]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}",
				[xi]: Ja,
				[Pi]: {}
			},
			mo = {
				[Ti]: "Invalid region: region was not a valid DNS name.",
				[ui]: Ti
			},
			uo = {
				[yi]: ra
			},
			po = {
				[yi]: sa
			},
			ho = {
				[hi]: Ii,
				[gi]: [uo, "service"]
			},
			go = {
				[yi]: oa
			},
			yo = {
				[pi]: [Na],
				[Ti]: "S3 Object Lambda does not support Dual-stack",
				[ui]: Ti
			},
			fo = {
				[pi]: [ba],
				[Ti]: "S3 Object Lambda does not support S3 Accelerate",
				[ui]: Ti
			},
			bo = {
				[pi]: [{
					[hi]: zi,
					[gi]: [{
						[yi]: "DisableAccessPoints"
					}]
				}, {
					[hi]: Oi,
					[gi]: [{
						[yi]: "DisableAccessPoints"
					}, !0]
				}],
				[Ti]: "Access points are not supported for this operation",
				[ui]: Ti
			},
			xo = {
				[pi]: [{
					[hi]: zi,
					[gi]: [{
						[yi]: "UseArnRegion"
					}]
				}, {
					[hi]: Oi,
					[gi]: [{
						[yi]: "UseArnRegion"
					}, !1]
				}, {
					[hi]: $i,
					[gi]: [{
						[hi]: Ai,
						[gi]: [{
							[hi]: Ii,
							[gi]: [uo, "region"]
						}, "{Region}"]
					}]
				}],
				[Ti]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",
				[ui]: Ti
			},
			No = {
				[hi]: Ii,
				[gi]: [{
					[yi]: "bucketPartition"
				}, Bi]
			},
			So = {
				[hi]: Ii,
				[gi]: [uo, "accountId"]
			},
			vo = {
				[Si]: [{
					[vi]: !0,
					[Bi]: "sigv4",
					[wi]: ia,
					[Ci]: "{bucketArn#region}"
				}]
			},
			wo = {
				[Ti]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`",
				[ui]: Ti
			},
			Co = {
				[Ti]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",
				[ui]: Ti
			},
			Po = {
				[Ti]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)",
				[ui]: Ti
			},
			Ro = {
				[Ti]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`",
				[ui]: Ti
			},
			Eo = {
				[Ti]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.",
				[ui]: Ti
			},
			zo = {
				[Ti]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",
				[ui]: Ti
			},
			Oo = {
				[Si]: [{
					[vi]: !0,
					[Bi]: "sigv4",
					[wi]: Zi,
					[Ci]: "{bucketArn#region}"
				}]
			},
			To = {
				[Si]: [{
					[vi]: !0,
					[Bi]: Qi,
					[wi]: Ji,
					[Ri]: ["*"]
				}, {
					[vi]: !0,
					[Bi]: "sigv4",
					[wi]: Ji,
					[Ci]: "{bucketArn#region}"
				}]
			},
			ko = {
				[hi]: na,
				[gi]: [Pa]
			},
			Ao = {
				[bi]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
				[xi]: Ja,
				[Pi]: {}
			},
			Io = {
				[bi]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
				[xi]: Ja,
				[Pi]: {}
			},
			Bo = {
				[bi]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
				[xi]: Ja,
				[Pi]: {}
			},
			Mo = {
				[bi]: ua,
				[xi]: Ja,
				[Pi]: {}
			},
			qo = {
				[bi]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
				[xi]: Ja,
				[Pi]: {}
			},
			_o = {
				[yi]: "UseObjectLambdaEndpoint"
			},
			Do = {
				[Si]: [{
					[vi]: !0,
					[Bi]: "sigv4",
					[wi]: ia,
					[Ci]: "{Region}"
				}]
			},
			Lo = {
				[bi]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
				[xi]: Ja,
				[Pi]: {}
			},
			Ho = {
				[bi]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}",
				[xi]: Ja,
				[Pi]: {}
			},
			Uo = {
				[bi]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
				[xi]: Ja,
				[Pi]: {}
			},
			jo = {
				[bi]: Fi,
				[xi]: Ja,
				[Pi]: {}
			},
			$o = {
				[bi]: "https://s3.{Region}.{partitionResult#dnsSuffix}",
				[xi]: Ja,
				[Pi]: {}
			},
			Fo = [{
				[yi]: "Region"
			}],
			Vo = [{
				[yi]: "Endpoint"
			}],
			Ko = [Pa],
			Go = [Na],
			Wo = [ba],
			Xo = [Sa, Ra],
			Qo = [{
				[hi]: zi,
				[gi]: [{
					[yi]: "DisableS3ExpressSessionAuth"
				}]
			}, {
				[hi]: Oi,
				[gi]: [{
					[yi]: "DisableS3ExpressSessionAuth"
				}, !0]
			}],
			Jo = [Ea],
			Zo = [Oa],
			Yo = [Aa],
			el = [xa],
			tl = [{
				[hi]: Mi,
				[gi]: [Pa, 6, 14, !0],
				[fi]: "s3expressAvailabilityZoneId"
			}, {
				[hi]: Mi,
				[gi]: [Pa, 14, 16, !0],
				[fi]: "s3expressAvailabilityZoneDelim"
			}, {
				[hi]: Ai,
				[gi]: [{
					[yi]: "s3expressAvailabilityZoneDelim"
				}, "--"]
			}],
			nl = [{
				[pi]: [xa],
				[Li]: {
					[bi]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
					[xi]: Ta,
					[Pi]: {}
				},
				[ui]: Li
			}, {
				[Li]: {
					[bi]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
					[xi]: Ta,
					[Pi]: {}
				},
				[ui]: Li
			}],
			rl = [{
				[hi]: Mi,
				[gi]: [Pa, 6, 15, !0],
				[fi]: "s3expressAvailabilityZoneId"
			}, {
				[hi]: Mi,
				[gi]: [Pa, 15, 17, !0],
				[fi]: "s3expressAvailabilityZoneDelim"
			}, {
				[hi]: Ai,
				[gi]: [{
					[yi]: "s3expressAvailabilityZoneDelim"
				}, "--"]
			}],
			sl = [{
				[pi]: [xa],
				[Li]: {
					[bi]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
					[xi]: Ba,
					[Pi]: {}
				},
				[ui]: Li
			}, {
				[Li]: {
					[bi]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
					[xi]: Ba,
					[Pi]: {}
				},
				[ui]: Li
			}],
			il = [Ca],
			al = [{
				[hi]: Xi,
				[gi]: [{
					[yi]: Wi
				}, !1]
			}],
			ol = [{
				[hi]: Ai,
				[gi]: [{
					[yi]: Ki
				}, "beta"]
			}],
			ll = [va],
			cl = [{
				[hi]: Xi,
				[gi]: [{
					[yi]: "Region"
				}, !1]
			}],
			dl = [{
				[hi]: Ai,
				[gi]: [{
					[yi]: "Region"
				}, "us-east-1"]
			}],
			ml = [{
				[hi]: Ai,
				[gi]: [po, aa]
			}],
			ul = [{
				[hi]: Ii,
				[gi]: [uo, "resourceId[1]"],
				[fi]: oa
			}, {
				[hi]: $i,
				[gi]: [{
					[hi]: Ai,
					[gi]: [go, ""]
				}]
			}],
			pl = [uo, "resourceId[1]"],
			hl = [{
				[hi]: $i,
				[gi]: [{
					[hi]: Ai,
					[gi]: [{
						[hi]: Ii,
						[gi]: [uo, "region"]
					}, ""]
				}]
			}],
			gl = [{
				[hi]: $i,
				[gi]: [{
					[hi]: zi,
					[gi]: [{
						[hi]: Ii,
						[gi]: [uo, "resourceId[2]"]
					}]
				}]
			}],
			yl = [uo, "resourceId[2]"],
			fl = [{
				[hi]: ki,
				[gi]: [{
					[hi]: Ii,
					[gi]: [uo, "region"]
				}],
				[fi]: "bucketPartition"
			}],
			bl = [{
				[hi]: Ai,
				[gi]: [No, {
					[hi]: Ii,
					[gi]: [{
						[yi]: "partitionResult"
					}, Bi]
				}]
			}],
			xl = [{
				[hi]: Xi,
				[gi]: [{
					[hi]: Ii,
					[gi]: [uo, "region"]
				}, !0]
			}],
			Nl = [{
				[hi]: Xi,
				[gi]: [So, !1]
			}],
			Sl = [{
				[hi]: Xi,
				[gi]: [go, !1]
			}],
			vl = [{
				[hi]: Xi,
				[gi]: [{
					[yi]: "Region"
				}, !0]
			}],
			wl = {
				version: "1.0",
				parameters: {
					Bucket: ga,
					Region: ga,
					UseFIPS: ya,
					UseDualStack: ya,
					Endpoint: ga,
					ForcePathStyle: ya,
					Accelerate: ya,
					UseGlobalEndpoint: ya,
					UseObjectLambdaEndpoint: fa,
					Key: ga,
					Prefix: ga,
					CopySource: ga,
					DisableAccessPoints: fa,
					DisableMultiRegionAccessPoints: ya,
					UseArnRegion: fa,
					UseS3ExpressControlEndpoint: fa,
					DisableS3ExpressSessionAuth: fa
				},
				rules: [{
					[pi]: [{
						[hi]: zi,
						[gi]: Fo
					}],
					rules: [{
						[pi]: [ba, xa],
						error: "Accelerate cannot be used with FIPS",
						[ui]: Ti
					}, {
						[pi]: [Na, Sa],
						error: "Cannot set dual-stack in combination with a custom endpoint.",
						[ui]: Ti
					}, {
						[pi]: [Sa, xa],
						error: "A custom endpoint cannot be combined with FIPS",
						[ui]: Ti
					}, {
						[pi]: [Sa, ba],
						error: "A custom endpoint cannot be combined with S3 Accelerate",
						[ui]: Ti
					}, {
						[pi]: [xa, va, wa],
						error: "Partition does not support FIPS",
						[ui]: Ti
					}, {
						[pi]: [Ca, {
							[hi]: Mi,
							[gi]: [Pa, 0, 6, Ei],
							[fi]: qi
						}, {
							[hi]: Ai,
							[gi]: [{
								[yi]: qi
							}, "--x-s3"]
						}],
						rules: [{
							[pi]: Go,
							error: "S3Express does not support Dual-stack.",
							[ui]: Ti
						}, {
							[pi]: Wo,
							error: "S3Express does not support S3 Accelerate.",
							[ui]: Ti
						}, {
							[pi]: Xo,
							rules: [{
								[pi]: Qo,
								rules: [{
									[pi]: Jo,
									rules: [{
										[pi]: Zo,
										rules: [{
											endpoint: {
												[bi]: Di,
												[xi]: Ta,
												[Pi]: ka
											},
											[ui]: Li
										}],
										[ui]: Hi
									}],
									[ui]: Hi
								}, {
									[pi]: Yo,
									rules: [{
										endpoint: {
											[bi]: ji,
											[xi]: Ta,
											[Pi]: ka
										},
										[ui]: Li
									}],
									[ui]: Hi
								}, Ia],
								[ui]: Hi
							}, {
								[pi]: Jo,
								rules: [{
									[pi]: Zo,
									rules: [{
										endpoint: {
											[bi]: Di,
											[xi]: Ba,
											[Pi]: ka
										},
										[ui]: Li
									}],
									[ui]: Hi
								}],
								[ui]: Hi
							}, {
								[pi]: Yo,
								rules: [{
									endpoint: {
										[bi]: ji,
										[xi]: Ba,
										[Pi]: ka
									},
									[ui]: Li
								}],
								[ui]: Hi
							}, Ia],
							[ui]: Hi
						}, {
							[pi]: [Ma, qa],
							rules: [{
								[pi]: [Oa, _a],
								rules: [{
									[pi]: el,
									endpoint: {
										[bi]: "https://s3express-control-fips.{Region}.amazonaws.com/{uri_encoded_bucket}",
										[xi]: Ta,
										[Pi]: ka
									},
									[ui]: Li
								}, {
									endpoint: {
										[bi]: "https://s3express-control.{Region}.amazonaws.com/{uri_encoded_bucket}",
										[xi]: Ta,
										[Pi]: ka
									},
									[ui]: Li
								}],
								[ui]: Hi
							}],
							[ui]: Hi
						}, {
							[pi]: Yo,
							rules: [{
								[pi]: Qo,
								rules: [{
									[pi]: tl,
									rules: nl,
									[ui]: Hi
								}, {
									[pi]: rl,
									rules: nl,
									[ui]: Hi
								}, Da],
								[ui]: Hi
							}, {
								[pi]: tl,
								rules: sl,
								[ui]: Hi
							}, {
								[pi]: rl,
								rules: sl,
								[ui]: Hi
							}, Da],
							[ui]: Hi
						}, Ia],
						[ui]: Hi
					}, {
						[pi]: [La, Ma, qa],
						rules: [{
							[pi]: Xo,
							endpoint: {
								[bi]: Fi,
								[xi]: Ta,
								[Pi]: ka
							},
							[ui]: Li
						}, {
							[pi]: el,
							endpoint: {
								[bi]: "https://s3express-control-fips.{Region}.amazonaws.com",
								[xi]: Ta,
								[Pi]: ka
							},
							[ui]: Li
						}, {
							endpoint: {
								[bi]: "https://s3express-control.{Region}.amazonaws.com",
								[xi]: Ta,
								[Pi]: ka
							},
							[ui]: Li
						}],
						[ui]: Hi
					}, {
						[pi]: [Ca, {
							[hi]: Mi,
							[gi]: [Pa, 49, 50, Ei],
							[fi]: Vi
						}, {
							[hi]: Mi,
							[gi]: [Pa, 8, 12, Ei],
							[fi]: Ki
						}, {
							[hi]: Mi,
							[gi]: [Pa, 0, 7, Ei],
							[fi]: Gi
						}, {
							[hi]: Mi,
							[gi]: [Pa, 32, 49, Ei],
							[fi]: Wi
						}, {
							[hi]: ki,
							[gi]: Fo,
							[fi]: "regionPartition"
						}, {
							[hi]: Ai,
							[gi]: [{
								[yi]: Gi
							}, "--op-s3"]
						}],
						rules: [{
							[pi]: al,
							rules: [{
								[pi]: [{
									[hi]: Ai,
									[gi]: [Ha, "e"]
								}],
								rules: [{
									[pi]: ol,
									rules: [Ua, {
										[pi]: Xo,
										endpoint: {
											[bi]: "https://{Bucket}.ec2.{url#authority}",
											[xi]: ja,
											[Pi]: ka
										},
										[ui]: Li
									}],
									[ui]: Hi
								}, {
									endpoint: {
										[bi]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
										[xi]: ja,
										[Pi]: ka
									},
									[ui]: Li
								}],
								[ui]: Hi
							}, {
								[pi]: [{
									[hi]: Ai,
									[gi]: [Ha, "o"]
								}],
								rules: [{
									[pi]: ol,
									rules: [Ua, {
										[pi]: Xo,
										endpoint: {
											[bi]: "https://{Bucket}.op-{outpostId}.{url#authority}",
											[xi]: ja,
											[Pi]: ka
										},
										[ui]: Li
									}],
									[ui]: Hi
								}, {
									endpoint: {
										[bi]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
										[xi]: ja,
										[Pi]: ka
									},
									[ui]: Li
								}],
								[ui]: Hi
							}, {
								error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"',
								[ui]: Ti
							}],
							[ui]: Hi
						}, {
							error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",
							[ui]: Ti
						}],
						[ui]: Hi
					}, {
						[pi]: il,
						rules: [{
							[pi]: [Sa, {
								[hi]: $i,
								[gi]: [{
									[hi]: zi,
									[gi]: [{
										[hi]: _i,
										[gi]: Vo
									}]
								}]
							}],
							error: "Custom endpoint `{Endpoint}` was not a valid URI",
							[ui]: Ti
						}, {
							[pi]: [$a, Aa],
							rules: [{
								[pi]: ll,
								rules: [{
									[pi]: cl,
									rules: [{
										[pi]: [ba, wa],
										error: "S3 Accelerate cannot be used in this region",
										[ui]: Ti
									}, {
										[pi]: [Na, xa, Va, _a, Ka],
										endpoint: {
											[bi]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Na, xa, Va, _a, Wa, Xa],
										rules: [{
											endpoint: Qa,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Na, xa, Va, _a, Wa, Za],
										endpoint: Qa,
										[ui]: Li
									}, {
										[pi]: [Ya, xa, Va, _a, Ka],
										endpoint: {
											[bi]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}",
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Ya, xa, Va, _a, Wa, Xa],
										rules: [{
											endpoint: eo,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Ya, xa, Va, _a, Wa, Za],
										endpoint: eo,
										[ui]: Li
									}, {
										[pi]: [Na, to, ba, _a, Ka],
										endpoint: {
											[bi]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Na, to, ba, _a, Wa, Xa],
										rules: [{
											endpoint: no,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Na, to, ba, _a, Wa, Za],
										endpoint: no,
										[ui]: Li
									}, {
										[pi]: [Na, to, Va, _a, Ka],
										endpoint: {
											[bi]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Na, to, Va, _a, Wa, Xa],
										rules: [{
											endpoint: ro,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Na, to, Va, _a, Wa, Za],
										endpoint: ro,
										[ui]: Li
									}, {
										[pi]: [Ya, to, Va, Sa, Ra, Ea, Ka],
										endpoint: {
											[bi]: Yi,
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Ya, to, Va, Sa, Ra, so, Ka],
										endpoint: {
											[bi]: ji,
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Ya, to, Va, Sa, Ra, Ea, Wa, Xa],
										rules: [{
											[pi]: dl,
											endpoint: io,
											[ui]: Li
										}, {
											endpoint: io,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Ya, to, Va, Sa, Ra, so, Wa, Xa],
										rules: [{
											[pi]: dl,
											endpoint: ao,
											[ui]: Li
										}, oo],
										[ui]: Hi
									}, {
										[pi]: [Ya, to, Va, Sa, Ra, Ea, Wa, Za],
										endpoint: io,
										[ui]: Li
									}, {
										[pi]: [Ya, to, Va, Sa, Ra, so, Wa, Za],
										endpoint: ao,
										[ui]: Li
									}, {
										[pi]: [Ya, to, ba, _a, Ka],
										endpoint: {
											[bi]: ea,
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Ya, to, ba, _a, Wa, Xa],
										rules: [{
											[pi]: dl,
											endpoint: lo,
											[ui]: Li
										}, {
											endpoint: lo,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Ya, to, ba, _a, Wa, Za],
										endpoint: lo,
										[ui]: Li
									}, {
										[pi]: [Ya, to, Va, _a, Ka],
										endpoint: {
											[bi]: ta,
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Ya, to, Va, _a, Wa, Xa],
										rules: [{
											[pi]: dl,
											endpoint: {
												[bi]: ta,
												[xi]: Ja,
												[Pi]: ka
											},
											[ui]: Li
										}, {
											endpoint: co,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Ya, to, Va, _a, Wa, Za],
										endpoint: co,
										[ui]: Li
									}],
									[ui]: Hi
								}, mo],
								[ui]: Hi
							}],
							[ui]: Hi
						}, {
							[pi]: [Sa, Ra, {
								[hi]: Ai,
								[gi]: [{
									[hi]: Ii,
									[gi]: [za, "scheme"]
								}, "http"]
							}, {
								[hi]: Ui,
								[gi]: [Pa, Ei]
							}, $a, to, Ya, Va],
							rules: [{
								[pi]: ll,
								rules: [{
									[pi]: cl,
									rules: [oo],
									[ui]: Hi
								}, mo],
								[ui]: Hi
							}],
							[ui]: Hi
						}, {
							[pi]: [$a, {
								[hi]: na,
								[gi]: Ko,
								[fi]: ra
							}],
							rules: [{
								[pi]: [{
									[hi]: Ii,
									[gi]: [uo, "resourceId[0]"],
									[fi]: sa
								}, {
									[hi]: $i,
									[gi]: [{
										[hi]: Ai,
										[gi]: [po, ""]
									}]
								}],
								rules: [{
									[pi]: [{
										[hi]: Ai,
										[gi]: [ho, ia]
									}],
									rules: [{
										[pi]: ml,
										rules: [{
											[pi]: ul,
											rules: [yo, fo, {
												[pi]: hl,
												rules: [bo, {
													[pi]: gl,
													rules: [xo, {
														[pi]: fl,
														rules: [{
															[pi]: ll,
															rules: [{
																[pi]: bl,
																rules: [{
																	[pi]: xl,
																	rules: [{
																		[pi]: [{
																			[hi]: Ai,
																			[gi]: [So, ""]
																		}],
																		error: "Invalid ARN: Missing account id",
																		[ui]: Ti
																	}, {
																		[pi]: Nl,
																		rules: [{
																			[pi]: Sl,
																			rules: [{
																				[pi]: Xo,
																				endpoint: {
																					[bi]: la,
																					[xi]: vo,
																					[Pi]: ka
																				},
																				[ui]: Li
																			}, {
																				[pi]: el,
																				endpoint: {
																					[bi]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																					[xi]: vo,
																					[Pi]: ka
																				},
																				[ui]: Li
																			}, {
																				endpoint: {
																					[bi]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																					[xi]: vo,
																					[Pi]: ka
																				},
																				[ui]: Li
																			}],
																			[ui]: Hi
																		}, wo],
																		[ui]: Hi
																	}, Co],
																	[ui]: Hi
																}, Po],
																[ui]: Hi
															}, Ro],
															[ui]: Hi
														}],
														[ui]: Hi
													}],
													[ui]: Hi
												}, Eo],
												[ui]: Hi
											}, {
												error: "Invalid ARN: bucket ARN is missing a region",
												[ui]: Ti
											}],
											[ui]: Hi
										}, zo],
										[ui]: Hi
									}, {
										error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`",
										[ui]: Ti
									}],
									[ui]: Hi
								}, {
									[pi]: ml,
									rules: [{
										[pi]: ul,
										rules: [{
											[pi]: hl,
											rules: [{
												[pi]: ml,
												rules: [{
													[pi]: hl,
													rules: [bo, {
														[pi]: gl,
														rules: [xo, {
															[pi]: fl,
															rules: [{
																[pi]: ll,
																rules: [{
																	[pi]: [{
																		[hi]: Ai,
																		[gi]: [No, "{partitionResult#name}"]
																	}],
																	rules: [{
																		[pi]: xl,
																		rules: [{
																			[pi]: [{
																				[hi]: Ai,
																				[gi]: [ho, Zi]
																			}],
																			rules: [{
																				[pi]: Nl,
																				rules: [{
																					[pi]: Sl,
																					rules: [{
																						[pi]: Wo,
																						error: "Access Points do not support S3 Accelerate",
																						[ui]: Ti
																					}, {
																						[pi]: [xa, Na],
																						endpoint: {
																							[bi]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																							[xi]: Oo,
																							[Pi]: ka
																						},
																						[ui]: Li
																					}, {
																						[pi]: [xa, Ya],
																						endpoint: {
																							[bi]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																							[xi]: Oo,
																							[Pi]: ka
																						},
																						[ui]: Li
																					}, {
																						[pi]: [to, Na],
																						endpoint: {
																							[bi]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																							[xi]: Oo,
																							[Pi]: ka
																						},
																						[ui]: Li
																					}, {
																						[pi]: [to, Ya, Sa, Ra],
																						endpoint: {
																							[bi]: la,
																							[xi]: Oo,
																							[Pi]: ka
																						},
																						[ui]: Li
																					}, {
																						[pi]: [to, Ya],
																						endpoint: {
																							[bi]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																							[xi]: Oo,
																							[Pi]: ka
																						},
																						[ui]: Li
																					}],
																					[ui]: Hi
																				}, wo],
																				[ui]: Hi
																			}, Co],
																			[ui]: Hi
																		}, {
																			error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",
																			[ui]: Ti
																		}],
																		[ui]: Hi
																	}, Po],
																	[ui]: Hi
																}, Ro],
																[ui]: Hi
															}],
															[ui]: Hi
														}],
														[ui]: Hi
													}, Eo],
													[ui]: Hi
												}],
												[ui]: Hi
											}],
											[ui]: Hi
										}, {
											[pi]: [{
												[hi]: Xi,
												[gi]: [go, Ei]
											}],
											rules: [{
												[pi]: Go,
												error: "S3 MRAP does not support dual-stack",
												[ui]: Ti
											}, {
												[pi]: el,
												error: "S3 MRAP does not support FIPS",
												[ui]: Ti
											}, {
												[pi]: Wo,
												error: "S3 MRAP does not support S3 Accelerate",
												[ui]: Ti
											}, {
												[pi]: [{
													[hi]: Oi,
													[gi]: [{
														[yi]: "DisableMultiRegionAccessPoints"
													}, Ei]
												}],
												error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.",
												[ui]: Ti
											}, {
												[pi]: [{
													[hi]: ki,
													[gi]: Fo,
													[fi]: ca
												}],
												rules: [{
													[pi]: [{
														[hi]: Ai,
														[gi]: [{
															[hi]: Ii,
															[gi]: [{
																[yi]: ca
															}, Bi]
														}, {
															[hi]: Ii,
															[gi]: [uo, "partition"]
														}]
													}],
													rules: [{
														endpoint: {
															[bi]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",
															[xi]: {
																[Si]: [{
																	[vi]: Ei,
																	name: Qi,
																	[wi]: Zi,
																	[Ri]: ["*"]
																}]
															},
															[Pi]: ka
														},
														[ui]: Li
													}],
													[ui]: Hi
												}, {
													error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`",
													[ui]: Ti
												}],
												[ui]: Hi
											}],
											[ui]: Hi
										}, {
											error: "Invalid Access Point Name",
											[ui]: Ti
										}],
										[ui]: Hi
									}, zo],
									[ui]: Hi
								}, {
									[pi]: [{
										[hi]: Ai,
										[gi]: [ho, Ji]
									}],
									rules: [{
										[pi]: Go,
										error: "S3 Outposts does not support Dual-stack",
										[ui]: Ti
									}, {
										[pi]: el,
										error: "S3 Outposts does not support FIPS",
										[ui]: Ti
									}, {
										[pi]: Wo,
										error: "S3 Outposts does not support S3 Accelerate",
										[ui]: Ti
									}, {
										[pi]: [{
											[hi]: zi,
											[gi]: [{
												[hi]: Ii,
												[gi]: [uo, "resourceId[4]"]
											}]
										}],
										error: "Invalid Arn: Outpost Access Point ARN contains sub resources",
										[ui]: Ti
									}, {
										[pi]: [{
											[hi]: Ii,
											[gi]: pl,
											[fi]: Wi
										}],
										rules: [{
											[pi]: al,
											rules: [xo, {
												[pi]: fl,
												rules: [{
													[pi]: ll,
													rules: [{
														[pi]: bl,
														rules: [{
															[pi]: xl,
															rules: [{
																[pi]: Nl,
																rules: [{
																	[pi]: [{
																		[hi]: Ii,
																		[gi]: yl,
																		[fi]: da
																	}],
																	rules: [{
																		[pi]: [{
																			[hi]: Ii,
																			[gi]: [uo, "resourceId[3]"],
																			[fi]: oa
																		}],
																		rules: [{
																			[pi]: [{
																				[hi]: Ai,
																				[gi]: [{
																					[yi]: da
																				}, aa]
																			}],
																			rules: [{
																				[pi]: Xo,
																				endpoint: {
																					[bi]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}",
																					[xi]: To,
																					[Pi]: ka
																				},
																				[ui]: Li
																			}, {
																				endpoint: {
																					[bi]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																					[xi]: To,
																					[Pi]: ka
																				},
																				[ui]: Li
																			}],
																			[ui]: Hi
																		}, {
																			error: "Expected an outpost type `accesspoint`, found {outpostType}",
																			[ui]: Ti
																		}],
																		[ui]: Hi
																	}, {
																		error: "Invalid ARN: expected an access point name",
																		[ui]: Ti
																	}],
																	[ui]: Hi
																}, {
																	error: "Invalid ARN: Expected a 4-component resource",
																	[ui]: Ti
																}],
																[ui]: Hi
															}, Co],
															[ui]: Hi
														}, Po],
														[ui]: Hi
													}, Ro],
													[ui]: Hi
												}],
												[ui]: Hi
											}],
											[ui]: Hi
										}, {
											error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`",
											[ui]: Ti
										}],
										[ui]: Hi
									}, {
										error: "Invalid ARN: The Outpost Id was not set",
										[ui]: Ti
									}],
									[ui]: Hi
								}, {
									error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})",
									[ui]: Ti
								}],
								[ui]: Hi
							}, {
								error: "Invalid ARN: No ARN type specified",
								[ui]: Ti
							}],
							[ui]: Hi
						}, {
							[pi]: [{
								[hi]: Mi,
								[gi]: [Pa, 0, 4, !1],
								[fi]: ma
							}, {
								[hi]: Ai,
								[gi]: [{
									[yi]: ma
								}, "arn:"]
							}, {
								[hi]: $i,
								[gi]: [{
									[hi]: zi,
									[gi]: [ko]
								}]
							}],
							error: "Invalid ARN: `{Bucket}` was not a valid ARN",
							[ui]: Ti
						}, {
							[pi]: [{
								[hi]: Oi,
								[gi]: [Fa, Ei]
							}, ko],
							error: "Path-style addressing cannot be used with ARN buckets",
							[ui]: Ti
						}, {
							[pi]: Zo,
							rules: [{
								[pi]: ll,
								rules: [{
									[pi]: [Va],
									rules: [{
										[pi]: [Na, _a, xa, Ka],
										endpoint: {
											[bi]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Na, _a, xa, Wa, Xa],
										rules: [{
											endpoint: Ao,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Na, _a, xa, Wa, Za],
										endpoint: Ao,
										[ui]: Li
									}, {
										[pi]: [Ya, _a, xa, Ka],
										endpoint: {
											[bi]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Ya, _a, xa, Wa, Xa],
										rules: [{
											endpoint: Io,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Ya, _a, xa, Wa, Za],
										endpoint: Io,
										[ui]: Li
									}, {
										[pi]: [Na, _a, to, Ka],
										endpoint: {
											[bi]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Na, _a, to, Wa, Xa],
										rules: [{
											endpoint: Bo,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Na, _a, to, Wa, Za],
										endpoint: Bo,
										[ui]: Li
									}, {
										[pi]: [Ya, Sa, Ra, to, Ka],
										endpoint: {
											[bi]: ua,
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Ya, Sa, Ra, to, Wa, Xa],
										rules: [{
											[pi]: dl,
											endpoint: Mo,
											[ui]: Li
										}, {
											endpoint: Mo,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Ya, Sa, Ra, to, Wa, Za],
										endpoint: Mo,
										[ui]: Li
									}, {
										[pi]: [Ya, _a, to, Ka],
										endpoint: {
											[bi]: pa,
											[xi]: Ga,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										[pi]: [Ya, _a, to, Wa, Xa],
										rules: [{
											[pi]: dl,
											endpoint: {
												[bi]: pa,
												[xi]: Ja,
												[Pi]: ka
											},
											[ui]: Li
										}, {
											endpoint: qo,
											[ui]: Li
										}],
										[ui]: Hi
									}, {
										[pi]: [Ya, _a, to, Wa, Za],
										endpoint: qo,
										[ui]: Li
									}],
									[ui]: Hi
								}, {
									error: "Path-style addressing cannot be used with S3 Accelerate",
									[ui]: Ti
								}],
								[ui]: Hi
							}],
							[ui]: Hi
						}],
						[ui]: Hi
					}, {
						[pi]: [{
							[hi]: zi,
							[gi]: [_o]
						}, {
							[hi]: Oi,
							[gi]: [_o, Ei]
						}],
						rules: [{
							[pi]: ll,
							rules: [{
								[pi]: vl,
								rules: [yo, fo, {
									[pi]: Xo,
									endpoint: {
										[bi]: Fi,
										[xi]: Do,
										[Pi]: ka
									},
									[ui]: Li
								}, {
									[pi]: el,
									endpoint: {
										[bi]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}",
										[xi]: Do,
										[Pi]: ka
									},
									[ui]: Li
								}, {
									endpoint: {
										[bi]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}",
										[xi]: Do,
										[Pi]: ka
									},
									[ui]: Li
								}],
								[ui]: Hi
							}, mo],
							[ui]: Hi
						}],
						[ui]: Hi
					}, {
						[pi]: [La],
						rules: [{
							[pi]: ll,
							rules: [{
								[pi]: vl,
								rules: [{
									[pi]: [xa, Na, _a, Ka],
									endpoint: {
										[bi]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
										[xi]: Ga,
										[Pi]: ka
									},
									[ui]: Li
								}, {
									[pi]: [xa, Na, _a, Wa, Xa],
									rules: [{
										endpoint: Lo,
										[ui]: Li
									}],
									[ui]: Hi
								}, {
									[pi]: [xa, Na, _a, Wa, Za],
									endpoint: Lo,
									[ui]: Li
								}, {
									[pi]: [xa, Ya, _a, Ka],
									endpoint: {
										[bi]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}",
										[xi]: Ga,
										[Pi]: ka
									},
									[ui]: Li
								}, {
									[pi]: [xa, Ya, _a, Wa, Xa],
									rules: [{
										endpoint: Ho,
										[ui]: Li
									}],
									[ui]: Hi
								}, {
									[pi]: [xa, Ya, _a, Wa, Za],
									endpoint: Ho,
									[ui]: Li
								}, {
									[pi]: [to, Na, _a, Ka],
									endpoint: {
										[bi]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
										[xi]: Ga,
										[Pi]: ka
									},
									[ui]: Li
								}, {
									[pi]: [to, Na, _a, Wa, Xa],
									rules: [{
										endpoint: Uo,
										[ui]: Li
									}],
									[ui]: Hi
								}, {
									[pi]: [to, Na, _a, Wa, Za],
									endpoint: Uo,
									[ui]: Li
								}, {
									[pi]: [to, Ya, Sa, Ra, Ka],
									endpoint: {
										[bi]: Fi,
										[xi]: Ga,
										[Pi]: ka
									},
									[ui]: Li
								}, {
									[pi]: [to, Ya, Sa, Ra, Wa, Xa],
									rules: [{
										[pi]: dl,
										endpoint: jo,
										[ui]: Li
									}, {
										endpoint: jo,
										[ui]: Li
									}],
									[ui]: Hi
								}, {
									[pi]: [to, Ya, Sa, Ra, Wa, Za],
									endpoint: jo,
									[ui]: Li
								}, {
									[pi]: [to, Ya, _a, Ka],
									endpoint: {
										[bi]: ha,
										[xi]: Ga,
										[Pi]: ka
									},
									[ui]: Li
								}, {
									[pi]: [to, Ya, _a, Wa, Xa],
									rules: [{
										[pi]: dl,
										endpoint: {
											[bi]: ha,
											[xi]: Ja,
											[Pi]: ka
										},
										[ui]: Li
									}, {
										endpoint: $o,
										[ui]: Li
									}],
									[ui]: Hi
								}, {
									[pi]: [to, Ya, _a, Wa, Za],
									endpoint: $o,
									[ui]: Li
								}],
								[ui]: Hi
							}, mo],
							[ui]: Hi
						}],
						[ui]: Hi
					}],
					[ui]: Hi
				}, {
					error: "A region must be set when sending requests to S3.",
					[ui]: Ti
				}]
			},
			Cl = new class {
				constructor({
					size: e,
					params: t
				}) {
					this.data = new Map, this.parameters = [], this.capacity = e ?? 50, t && (this.parameters = t)
				}
				get(e, t) {
					const n = this.hash(e);
					if (!1 === n) return t();
					if (!this.data.has(n)) {
						if (this.data.size > this.capacity + 10) {
							const e = this.data.keys();
							let t = 0;
							for (;;) {
								const {
									value: n,
									done: r
								} = e.next();
								if (this.data.delete(n), r || ++t > 10) break
							}
						}
						this.data.set(n, t())
					}
					return this.data.get(n)
				}
				size() {
					return this.data.size
				}
				hash(e) {
					let t = "";
					const {
						parameters: n
					} = this;
					if (0 === n.length) return !1;
					for (const r of n) {
						const n = String(e[r] ?? "");
						if (n.includes("|;")) return !1;
						t += n + "|;"
					}
					return t
				}
			}({
				size: 50,
				params: ["Accelerate", "Bucket", "DisableAccessPoints", "DisableMultiRegionAccessPoints", "DisableS3ExpressSessionAuth", "Endpoint", "ForcePathStyle", "Region", "UseArnRegion", "UseDualStack", "UseFIPS", "UseGlobalEndpoint", "UseObjectLambdaEndpoint", "UseS3ExpressControlEndpoint"]
			}),
			Pl = (e, t = {}) => Cl.get(e, (() => ((e, t) => {
				const {
					endpointParams: n,
					logger: r
				} = t, {
					parameters: s,
					rules: i
				} = e;
				t.logger?.debug?.(`${qr} Initial EndpointParams: ${_r(n)}`);
				const a = Object.entries(s).filter((([, e]) => null != e.default)).map((([e, t]) => [e, t.default]));
				if (a.length > 0)
					for (const [e, t] of a) n[e] = n[e] ?? t;
				const o = Object.entries(s).filter((([, e]) => e.required)).map((([e]) => e));
				for (const e of o)
					if (null == n[e]) throw new Dr(`Missing required parameter: '${e}'`);
				const l = es(i, {
					endpointParams: n,
					logger: r,
					referenceRecord: {}
				});
				return t.logger?.debug?.(`${qr} Resolved endpoint: ${_r(l)}`), l
			})(wl, {
				endpointParams: e,
				logger: t.logger
			})));
		Mr.aws = ss;
		const Rl = (El = async (e, t, n) => ({
			operation: qe(t).operation,
			region: await _e(e.region)() || (() => {
				throw new Error("expected `region` to be configured for `aws.auth#sigv4`")
			})()
		}), async (e, t, n) => {
			if (!n) throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
			const r = await El(e, t, n),
				s = qe(t)?.commandInstance?.constructor?.getEndpointParameterInstructions;
			if (!s) throw new Error(`getEndpointParameterInstructions() is not defined on \`${t.commandName}\``);
			const i = await zs(n, {
				getEndpointParameterInstructions: s
			}, e);
			return Object.assign(r, i)
		});
		var El;

		function zl(e) {
			return {
				schemeId: "aws.auth#sigv4",
				signingProperties: {
					name: "s3",
					region: e.region
				},
				propertiesExtractor: (e, t) => ({
					signingProperties: {
						config: e,
						context: t
					}
				})
			}
		}

		function Ol(e) {
			return {
				schemeId: "aws.auth#sigv4a",
				signingProperties: {
					name: "s3",
					region: e.region
				},
				propertiesExtractor: (e, t) => ({
					signingProperties: {
						config: e,
						context: t
					}
				})
			}
		}
		const Tl = ((e, t, n) => r => {
				const s = e(r),
					i = s.properties?.authSchemes;
				if (!i) return t(r);
				const a = [];
				for (const e of i) {
					const {
						name: t,
						properties: s = {},
						...o
					} = e, l = t.toLowerCase();
					let c;
					if (t !== l && console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${t}\` to \`${l}\``), "sigv4a" === l) {
						c = "aws.auth#sigv4a";
						const e = i.find((e => {
							const t = e.name.toLowerCase();
							return "sigv4a" !== t && t.startsWith("sigv4")
						}));
						if (!ci && e) continue
					} else {
						if (!l.startsWith("sigv4")) throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${l}\``);
						c = "aws.auth#sigv4"
					}
					const d = n[c];
					if (!d) throw new Error(`Could not find HttpAuthOption create function for \`${c}\``);
					const m = d(r);
					m.schemeId = c, m.signingProperties = {
						...m.signingProperties || {},
						...o,
						...s
					}, a.push(m)
				}
				return a
			})(Pl, (e => {
				const t = [];
				return e.operation, t.push(zl(e)), t.push(Ol(e)), t
			}), {
				"aws.auth#sigv4": zl,
				"aws.auth#sigv4a": Ol
			}),
			kl = e => {
				const t = (e => (e.sigv4aSigningRegionSet = gr(e.sigv4aSigningRegionSet), e))(li(e));
				return {
					...t
				}
			},
			Al = {
				ForcePathStyle: {
					type: "clientContextParams",
					name: "forcePathStyle"
				},
				UseArnRegion: {
					type: "clientContextParams",
					name: "useArnRegion"
				},
				DisableMultiRegionAccessPoints: {
					type: "clientContextParams",
					name: "disableMultiregionAccessPoints"
				},
				Accelerate: {
					type: "clientContextParams",
					name: "useAccelerateEndpoint"
				},
				DisableS3ExpressSessionAuth: {
					type: "clientContextParams",
					name: "disableS3ExpressSessionAuth"
				},
				UseGlobalEndpoint: {
					type: "builtInParams",
					name: "useGlobalEndpoint"
				},
				UseFIPS: {
					type: "builtInParams",
					name: "useFipsEndpoint"
				},
				Endpoint: {
					type: "builtInParams",
					name: "endpoint"
				},
				Region: {
					type: "builtInParams",
					name: "region"
				},
				UseDualStack: {
					type: "builtInParams",
					name: "useDualstackEndpoint"
				}
			};
		class Il extends Ft {
			constructor(e) {
				super(e), Object.setPrototypeOf(this, Il.prototype)
			}
		}
		class Bl extends Il {
			constructor(e) {
				super({
					name: "NoSuchUpload",
					$fault: "client",
					...e
				}), this.name = "NoSuchUpload", this.$fault = "client", Object.setPrototypeOf(this, Bl.prototype)
			}
		}
		class Ml extends Il {
			constructor(e) {
				super({
					name: "ObjectNotInActiveTierError",
					$fault: "client",
					...e
				}), this.name = "ObjectNotInActiveTierError", this.$fault = "client", Object.setPrototypeOf(this, Ml.prototype)
			}
		}
		class ql extends Il {
			constructor(e) {
				super({
					name: "BucketAlreadyExists",
					$fault: "client",
					...e
				}), this.name = "BucketAlreadyExists", this.$fault = "client", Object.setPrototypeOf(this, ql.prototype)
			}
		}
		class _l extends Il {
			constructor(e) {
				super({
					name: "BucketAlreadyOwnedByYou",
					$fault: "client",
					...e
				}), this.name = "BucketAlreadyOwnedByYou", this.$fault = "client", Object.setPrototypeOf(this, _l.prototype)
			}
		}
		class Dl extends Il {
			constructor(e) {
				super({
					name: "NoSuchBucket",
					$fault: "client",
					...e
				}), this.name = "NoSuchBucket", this.$fault = "client", Object.setPrototypeOf(this, Dl.prototype)
			}
		}
		var Ll;
		! function(e) {
			e.visit = (e, t) => void 0 !== e.Prefix ? t.Prefix(e.Prefix) : void 0 !== e.Tag ? t.Tag(e.Tag) : void 0 !== e.And ? t.And(e.And) : t._(e.$unknown[0], e.$unknown[1])
		}(Ll || (Ll = {}));
		var Hl;
		! function(e) {
			e.visit = (e, t) => void 0 !== e.Prefix ? t.Prefix(e.Prefix) : void 0 !== e.Tag ? t.Tag(e.Tag) : void 0 !== e.AccessPointArn ? t.AccessPointArn(e.AccessPointArn) : void 0 !== e.And ? t.And(e.And) : t._(e.$unknown[0], e.$unknown[1])
		}(Hl || (Hl = {}));
		class Ul extends Il {
			constructor(e) {
				super({
					name: "InvalidObjectState",
					$fault: "client",
					...e
				}), this.name = "InvalidObjectState", this.$fault = "client", Object.setPrototypeOf(this, Ul.prototype), this.StorageClass = e.StorageClass, this.AccessTier = e.AccessTier
			}
		}
		class jl extends Il {
			constructor(e) {
				super({
					name: "NoSuchKey",
					$fault: "client",
					...e
				}), this.name = "NoSuchKey", this.$fault = "client", Object.setPrototypeOf(this, jl.prototype)
			}
		}
		class $l extends Il {
			constructor(e) {
				super({
					name: "NotFound",
					$fault: "client",
					...e
				}), this.name = "NotFound", this.$fault = "client", Object.setPrototypeOf(this, $l.prototype)
			}
		}
		const Fl = e => ({
				...e,
				...e.SecretAccessKey && {
					SecretAccessKey: rt
				},
				...e.SessionToken && {
					SessionToken: rt
				}
			}),
			Vl = e => ({
				...e,
				...e.SSEKMSKeyId && {
					SSEKMSKeyId: rt
				},
				...e.SSEKMSEncryptionContext && {
					SSEKMSEncryptionContext: rt
				},
				...e.Credentials && {
					Credentials: Fl(e.Credentials)
				}
			}),
			Kl = e => ({
				...e,
				...e.SSEKMSKeyId && {
					SSEKMSKeyId: rt
				},
				...e.SSEKMSEncryptionContext && {
					SSEKMSEncryptionContext: rt
				}
			}),
			Gl = e => ({
				...e,
				...e.SSEKMSKeyId && {
					SSEKMSKeyId: rt
				}
			}),
			Wl = e => ({
				...e,
				...e.SSECustomerKey && {
					SSECustomerKey: rt
				}
			}),
			Xl = e => ({
				...e,
				...e.SSEKMSKeyId && {
					SSEKMSKeyId: rt
				}
			}),
			Ql = e => ({
				...e,
				...e.SSECustomerKey && {
					SSECustomerKey: rt
				}
			});
		var Jl = n(454);
		const Zl = (e, t) => ((e, t) => Qe(e, t).then((e => t.utf8Encoder(e))))(e, t).then((e => {
				if (e.length) {
					const t = new Jl.XMLParser({
						attributeNamePrefix: "",
						htmlEntities: !0,
						ignoreAttributes: !1,
						ignoreDeclaration: !0,
						parseTagValue: !1,
						trimValues: !1,
						tagValueProcessor: (e, t) => "" === t.trim() && t.includes("\n") ? "" : void 0
					});
					let n;
					t.addEntity("#xD", "\r"), t.addEntity("#10", "\n");
					try {
						n = t.parse(e, !0)
					} catch (t) {
						throw t && "object" == typeof t && Object.defineProperty(t, "$responseBodyText", {
							value: e
						}), t
					}
					const r = "#text",
						s = Object.keys(n)[0],
						i = n[s];
					return i[r] && (i[s] = i[r], delete i[r]), en(i)
				}
				return {}
			})),
			Yl = async (e, t) => {
				const n = await Zl(e, t);
				return n.Error && (n.Error.message = n.Error.message ?? n.Error.Message), n
			};
		class ec extends Il {
			constructor(e) {
				super({
					name: "ObjectAlreadyInActiveTierError",
					$fault: "client",
					...e
				}), this.name = "ObjectAlreadyInActiveTierError", this.$fault = "client", Object.setPrototypeOf(this, ec.prototype)
			}
		}
		var tc;
		! function(e) {
			e.visit = (e, t) => void 0 !== e.Records ? t.Records(e.Records) : void 0 !== e.Stats ? t.Stats(e.Stats) : void 0 !== e.Progress ? t.Progress(e.Progress) : void 0 !== e.Cont ? t.Cont(e.Cont) : void 0 !== e.End ? t.End(e.End) : t._(e.$unknown[0], e.$unknown[1])
		}(tc || (tc = {}));
		const nc = e => ({
				...e,
				...e.SSEKMSKeyId && {
					SSEKMSKeyId: rt
				},
				...e.SSEKMSEncryptionContext && {
					SSEKMSEncryptionContext: rt
				}
			}),
			rc = e => ({
				...e,
				...e.SSECustomerKey && {
					SSECustomerKey: rt
				},
				...e.SSEKMSKeyId && {
					SSEKMSKeyId: rt
				},
				...e.SSEKMSEncryptionContext && {
					SSEKMSEncryptionContext: rt
				}
			}),
			sc = async (e, t) => {
				const n = Je(e, t),
					r = sn({}, tn, {
						[Qm]: e[Zd],
						[yu]: e[Yd],
						[fu]: e[sm],
						[xu]: e[rm],
						[bu]: [() => tn(e[Dc]), () => e[Dc].toString()]
					});
				n.bp("/"), n.p("Bucket", (() => e.Bucket), "{Bucket}", !1);
				const s = sn({
					[Um]: [, ""]
				});
				return n.m("GET").h(r).q(s).b(undefined), n.build()
			}, ic = async (e, t) => {
				const n = Je(e, t),
					r = sn({}, tn, {
						[Pm]: e[yd],
						[Rm]: [() => tn(e[fd]), () => Rt(e[fd]).toString()],
						[Em]: e[bd],
						[zm]: [() => tn(e[Sd]), () => Rt(e[Sd]).toString()],
						[Bm]: e[_d],
						[Nu]: e[em],
						[Su]: e[tm],
						[vu]: e[nm],
						[uu]: e[Kd],
						[Ym]: e[ad],
						[Gm]: e[Wc]
					});
				n.bp("/{Key+}"), n.p("Bucket", (() => e.Bucket), "{Bucket}", !1), n.p("Key", (() => e.Key), "{Key+}", !0);
				const s = sn({
					[Eu]: [, "GetObject"],
					[Mm]: [, e[Ld]],
					[qm]: [, e[Hd]],
					[_m]: [, e[Ud]],
					[Dm]: [, e[jd]],
					[Lm]: [, e[$d]],
					[Hm]: [() => void 0 !== e.ResponseExpires, () => Rt(e[Fd]).toString()],
					[jm]: [, e[cm]],
					[Am]: [() => void 0 !== e.PartNumber, () => e[qd].toString()]
				});
				return n.m("GET").h(r).q(s).b(undefined), n.build()
			}, ac = async (e, t) => {
				const n = Je(e, t),
					r = sn({}, tn, {
						[Pm]: e[yd],
						[Rm]: [() => tn(e[fd]), () => Rt(e[fd]).toString()],
						[Em]: e[bd],
						[zm]: [() => tn(e[Sd]), () => Rt(e[Sd]).toString()],
						[Bm]: e[_d],
						[Nu]: e[em],
						[Su]: e[tm],
						[vu]: e[nm],
						[uu]: e[Kd],
						[Ym]: e[ad],
						[Gm]: e[Wc]
					});
				n.bp("/{Key+}"), n.p("Bucket", (() => e.Bucket), "{Bucket}", !1), n.p("Key", (() => e.Key), "{Key+}", !0);
				const s = sn({
					[Mm]: [, e[Ld]],
					[qm]: [, e[Hd]],
					[_m]: [, e[Ud]],
					[Dm]: [, e[jd]],
					[Lm]: [, e[$d]],
					[Hm]: [() => void 0 !== e.ResponseExpires, () => Rt(e[Fd]).toString()],
					[jm]: [, e[cm]],
					[Am]: [() => void 0 !== e.PartNumber, () => e[qd].toString()]
				});
				return n.m("HEAD").h(r).q(s).b(undefined), n.build()
			}, oc = async (e, t) => {
				const n = Je(e, t),
					r = sn({}, tn, {
						[uu]: e[Kd],
						[Ym]: e[ad],
						[cu]: [() => tn(e[Id]), () => (e[Id] || []).map(dn).join(", ")]
					});
				n.bp("/"), n.p("Bucket", (() => e.Bucket), "{Bucket}", !1);
				const s = sn({
					[Nm]: [, e[nd]],
					[vm]: [, e[ld]],
					[Tm]: [, e[Cd]],
					[km]: [() => void 0 !== e.MaxKeys, () => e[Pd].toString()],
					[Im]: [, e[Bd]]
				});
				return n.m("GET").h(r).q(s).b(undefined), n.build()
			}, lc = async (e, t) => {
				const n = Je(e, t),
					r = sn({}, tn, {
						[xm]: e[ed] || "application/octet-stream",
						[$m]: e[Ic],
						[um]: e[Uc],
						[pm]: e[Fc],
						[hm]: e[Vc],
						[gm]: e[Kc],
						[ym]: [() => tn(e[Gc]), () => e[Gc].toString()],
						[fm]: e[Xc],
						[gu]: e[Hc],
						[Vm]: e[jc],
						[Km]: e[$c],
						[Wm]: e[Zc],
						[Xm]: e[Yc],
						[Sm]: [() => tn(e[id]), () => Rt(e[id]).toString()],
						[Em]: e[bd],
						[eu]: e[md],
						[tu]: e[ud],
						[nu]: e[pd],
						[ru]: e[hd],
						[yu]: e[Yd],
						[hu]: e[Jd],
						[Ru]: e[dm],
						[Nu]: e[em],
						[Su]: e[tm],
						[vu]: e[nm],
						[fu]: e[sm],
						[xu]: e[rm],
						[bu]: [() => tn(e[Dc]), () => e[Dc].toString()],
						[uu]: e[Kd],
						[wu]: e[om],
						[ou]: e[kd],
						[lu]: [() => tn(e[Ad]), () => {
							return (t = e[Ad], t.toISOString().replace(".000Z", "Z")).toString();
							var t
						}],
						[au]: e[Td],
						[Ym]: e[ad],
						...void 0 !== e.Metadata && Object.keys(e.Metadata).reduce(((t, n) => (t[`x-amz-meta-${n.toLowerCase()}`] = e.Metadata[n], t)), {})
					});
				n.bp("/{Key+}"), n.p("Bucket", (() => e.Bucket), "{Bucket}", !1), n.p("Key", (() => e.Key), "{Key+}", !0);
				const s = sn({
					[Eu]: [, "PutObject"]
				});
				let i, a;
				return void 0 !== e.Body && (a = e.Body, i = a), n.m("PUT").h(r).q(s).b(i), n.build()
			}, cc = async (e, t) => {
				if (200 !== e.statusCode && e.statusCode >= 300) return hc(e, t);
				const n = sn({
						$metadata: Ac(e),
						[Yd]: [, e.headers[yu]],
						[sm]: [, e.headers[fu]],
						[rm]: [, e.headers[xu]],
						[Dc]: [() => void 0 !== e.headers[bu], () => st(e.headers[bu])]
					}),
					r = ht(gt(await Zl(e.body, t)), "body");
				return null != r[Lc] && (n[Lc] = kc(r[Lc], t)), n
			}, dc = async (e, t) => {
				if (200 !== e.statusCode && e.statusCode >= 300) return hc(e, t);
				const n = sn({
						$metadata: Ac(e),
						[rd]: [() => void 0 !== e.headers[Jm], () => st(e.headers[Jm])],
						[Mc]: [, e.headers[mm]],
						[dd]: [, e.headers[Zm]],
						[Xd]: [, e.headers[du]],
						[wd]: [() => void 0 !== e.headers[Om], () => ht(At(e.headers[Om]))],
						[Gc]: [() => void 0 !== e.headers[ym], () => xt(e.headers[ym])],
						[cd]: [, e.headers[wm]],
						[jc]: [, e.headers[Vm]],
						[$c]: [, e.headers[Km]],
						[Zc]: [, e.headers[Wm]],
						[Yc]: [, e.headers[Xm]],
						[Rd]: [() => void 0 !== e.headers[su], () => Nt(e.headers[su])],
						[cm]: [, e.headers[Pu]],
						[Uc]: [, e.headers[um]],
						[Fc]: [, e.headers[pm]],
						[Vc]: [, e.headers[hm]],
						[Kc]: [, e.headers[gm]],
						[Jc]: [, e.headers[bm]],
						[ed]: [, e.headers[xm]],
						[id]: [() => void 0 !== e.headers[Sm], () => ht(At(e.headers[Sm]))],
						[od]: [, e.headers[Cm]],
						[dm]: [, e.headers[Ru]],
						[Yd]: [, e.headers[yu]],
						[em]: [, e.headers[Nu]],
						[nm]: [, e.headers[vu]],
						[sm]: [, e.headers[fu]],
						[Dc]: [() => void 0 !== e.headers[bu], () => st(e.headers[bu])],
						[Jd]: [, e.headers[hu]],
						[Dd]: [, e.headers[mu]],
						[Gd]: [, e.headers[pu]],
						[Md]: [() => void 0 !== e.headers[iu], () => Nt(e.headers[iu])],
						[lm]: [() => void 0 !== e.headers[Cu], () => Nt(e.headers[Cu])],
						[kd]: [, e.headers[ou]],
						[Ad]: [() => void 0 !== e.headers[lu], () => ht(zt(e.headers[lu]))],
						[Td]: [, e.headers[au]],
						Metadata: [, Object.keys(e.headers).filter((e => e.startsWith("x-amz-meta-"))).reduce(((t, n) => (t[n.substring(11)] = e.headers[n], t)), {})]
					}),
					r = e.body;
				return t.sdkStreamMixin(r), n.Body = r, n
			}, mc = async (e, t) => {
				if (200 !== e.statusCode && e.statusCode >= 300) return hc(e, t);
				const n = sn({
					$metadata: Ac(e),
					[rd]: [() => void 0 !== e.headers[Jm], () => st(e.headers[Jm])],
					[Mc]: [, e.headers[mm]],
					[dd]: [, e.headers[Zm]],
					[Xd]: [, e.headers[du]],
					[qc]: [, e.headers[Fm]],
					[wd]: [() => void 0 !== e.headers[Om], () => ht(At(e.headers[Om]))],
					[Gc]: [() => void 0 !== e.headers[ym], () => xt(e.headers[ym])],
					[jc]: [, e.headers[Vm]],
					[$c]: [, e.headers[Km]],
					[Zc]: [, e.headers[Wm]],
					[Yc]: [, e.headers[Xm]],
					[cd]: [, e.headers[wm]],
					[Rd]: [() => void 0 !== e.headers[su], () => Nt(e.headers[su])],
					[cm]: [, e.headers[Pu]],
					[Uc]: [, e.headers[um]],
					[Fc]: [, e.headers[pm]],
					[Vc]: [, e.headers[hm]],
					[Kc]: [, e.headers[gm]],
					[ed]: [, e.headers[xm]],
					[id]: [() => void 0 !== e.headers[Sm], () => ht(At(e.headers[Sm]))],
					[od]: [, e.headers[Cm]],
					[dm]: [, e.headers[Ru]],
					[Yd]: [, e.headers[yu]],
					[em]: [, e.headers[Nu]],
					[nm]: [, e.headers[vu]],
					[sm]: [, e.headers[fu]],
					[Dc]: [() => void 0 !== e.headers[bu], () => st(e.headers[bu])],
					[Jd]: [, e.headers[hu]],
					[Dd]: [, e.headers[mu]],
					[Gd]: [, e.headers[pu]],
					[Md]: [() => void 0 !== e.headers[iu], () => Nt(e.headers[iu])],
					[kd]: [, e.headers[ou]],
					[Ad]: [() => void 0 !== e.headers[lu], () => ht(zt(e.headers[lu]))],
					[Td]: [, e.headers[au]],
					Metadata: [, Object.keys(e.headers).filter((e => e.startsWith("x-amz-meta-"))).reduce(((t, n) => (t[n.substring(11)] = e.headers[n], t)), {})]
				});
				return await Qe(e.body, t), n
			}, uc = async (e, t) => {
				if (200 !== e.statusCode && e.statusCode >= 300) return hc(e, t);
				const n = sn({
						$metadata: Ac(e),
						[Dd]: [, e.headers[mu]]
					}),
					r = ht(gt(await Zl(e.body, t)), "body");
				return "" === r.CommonPrefixes ? n[Qc] = [] : null != r[Qc] && (n[Qc] = Ec(Yt(r[Qc]), t)), "" === r.Contents ? n[td] = [] : null != r[td] && (n[td] = zc(Yt(r[td]), t)), null != r[nd] && (n[nd] = yt(r[nd])), null != r[ld] && (n[ld] = yt(r[ld])), null != r[Nd] && (n[Nd] = st(r[Nd])), null != r[Cd] && (n[Cd] = yt(r[Cd])), null != r[Pd] && (n[Pd] = Nt(r[Pd])), null != r[Ed] && (n[Ed] = yt(r[Ed])), null != r[zd] && (n[zd] = yt(r[zd])), null != r[Bd] && (n[Bd] = yt(r[Bd])), n
			}, pc = async (e, t) => {
				if (200 !== e.statusCode && e.statusCode >= 300) return hc(e, t);
				const n = sn({
					$metadata: Ac(e),
					[dd]: [, e.headers[Zm]],
					[cd]: [, e.headers[wm]],
					[jc]: [, e.headers[Vm]],
					[$c]: [, e.headers[Km]],
					[Zc]: [, e.headers[Wm]],
					[Yc]: [, e.headers[Xm]],
					[Yd]: [, e.headers[yu]],
					[cm]: [, e.headers[Pu]],
					[em]: [, e.headers[Nu]],
					[nm]: [, e.headers[vu]],
					[sm]: [, e.headers[fu]],
					[rm]: [, e.headers[xu]],
					[Dc]: [() => void 0 !== e.headers[bu], () => st(e.headers[bu])],
					[Dd]: [, e.headers[mu]]
				});
				return await Qe(e.body, t), n
			}, hc = async (e, t) => {
				const n = {
						...e,
						body: await Yl(e.body, t)
					},
					r = ((e, t) => void 0 !== t?.Error?.Code ? t.Error.Code : void 0 !== t?.Code ? t.Code : 404 == e.statusCode ? "NotFound" : void 0)(e, n.body);
				switch (r) {
					case "NoSuchUpload":
					case "com.amazonaws.s3#NoSuchUpload":
						throw await vc(n, t);
					case "ObjectNotInActiveTierError":
					case "com.amazonaws.s3#ObjectNotInActiveTierError":
						throw await Pc(n, t);
					case "BucketAlreadyExists":
					case "com.amazonaws.s3#BucketAlreadyExists":
						throw await fc(n, t);
					case "BucketAlreadyOwnedByYou":
					case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
						throw await bc(n, t);
					case "NoSuchBucket":
					case "com.amazonaws.s3#NoSuchBucket":
						throw await Nc(n, t);
					case "InvalidObjectState":
					case "com.amazonaws.s3#InvalidObjectState":
						throw await xc(n, t);
					case "NoSuchKey":
					case "com.amazonaws.s3#NoSuchKey":
						throw await Sc(n, t);
					case "NotFound":
					case "com.amazonaws.s3#NotFound":
						throw await wc(n, t);
					case "ObjectAlreadyInActiveTierError":
					case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
						throw await Cc(n, t);
					default:
						const s = n.body;
						return gc({
							output: e,
							parsedBody: s,
							errorCode: r
						})
				}
			}, gc = (yc = Il, ({
				output: e,
				parsedBody: t,
				errorCode: n
			}) => {
				(({
					output: e,
					parsedBody: t,
					exceptionCtor: n,
					errorCode: r
				}) => {
					const s = Kt(e),
						i = s.httpStatusCode ? s.httpStatusCode + "" : void 0,
						a = new n({
							name: t?.code || t?.Code || r || i || "UnknownError",
							$fault: "client",
							$metadata: s
						});
					throw Vt(a, t)
				})({
					output: e,
					parsedBody: t,
					exceptionCtor: yc,
					errorCode: n
				})
			});
		var yc;
		const fc = async (e, t) => {
			const n = sn({}),
				r = (e.body, new ql({
					$metadata: Ac(e),
					...n
				}));
			return Vt(r, e.body)
		}, bc = async (e, t) => {
			const n = sn({}),
				r = (e.body, new _l({
					$metadata: Ac(e),
					...n
				}));
			return Vt(r, e.body)
		}, xc = async (e, t) => {
			const n = sn({}),
				r = e.body;
			null != r[_c] && (n[_c] = yt(r[_c])), null != r[Jd] && (n[Jd] = yt(r[Jd]));
			const s = new Ul({
				$metadata: Ac(e),
				...n
			});
			return Vt(s, e.body)
		}, Nc = async (e, t) => {
			const n = sn({}),
				r = (e.body, new Dl({
					$metadata: Ac(e),
					...n
				}));
			return Vt(r, e.body)
		}, Sc = async (e, t) => {
			const n = sn({}),
				r = (e.body, new jl({
					$metadata: Ac(e),
					...n
				}));
			return Vt(r, e.body)
		}, vc = async (e, t) => {
			const n = sn({}),
				r = (e.body, new Bl({
					$metadata: Ac(e),
					...n
				}));
			return Vt(r, e.body)
		}, wc = async (e, t) => {
			const n = sn({}),
				r = (e.body, new $l({
					$metadata: Ac(e),
					...n
				}));
			return Vt(r, e.body)
		}, Cc = async (e, t) => {
			const n = sn({}),
				r = (e.body, new ec({
					$metadata: Ac(e),
					...n
				}));
			return Vt(r, e.body)
		}, Pc = async (e, t) => {
			const n = sn({}),
				r = (e.body, new Ml({
					$metadata: Ac(e),
					...n
				}));
			return Vt(r, e.body)
		}, Rc = (e, t) => (e || []).filter((e => null != e)).map((e => yt(e))), Ec = (e, t) => (e || []).filter((e => null != e)).map((e => (e => {
			const t = {};
			return null != e[Bd] && (t[Bd] = yt(e[Bd])), t
		})(e))), zc = (e, t) => (e || []).filter((e => null != e)).map((e => ((e, t) => {
			const n = {};
			return null != e[vd] && (n[vd] = yt(e[vd])), null != e[wd] && (n[wd] = ht(zt(e[wd]))), null != e[cd] && (n[cd] = yt(e[cd])), "" === e.ChecksumAlgorithm ? n[Hc] = [] : null != e[Hc] && (n[Hc] = Rc(Yt(e[Hc]))), null != e[am] && (n[am] = xt(e[am])), null != e[Jd] && (n[Jd] = yt(e[Jd])), null != e[Od] && (n[Od] = Oc(e[Od], t)), null != e[Wd] && (n[Wd] = Tc(e[Wd], t)), n
		})(e, t))), Oc = (e, t) => {
			const n = {};
			return null != e[sd] && (n[sd] = yt(e[sd])), null != e[gd] && (n[gd] = yt(e[gd])), n
		}, Tc = (e, t) => {
			const n = {};
			return null != e[xd] && (n[xd] = st(e[xd])), null != e[Vd] && (n[Vd] = ht(zt(e[Vd]))), n
		}, kc = (e, t) => {
			const n = {};
			return null != e[Bc] && (n[Bc] = yt(e[Bc])), null != e[Qd] && (n[Qd] = yt(e[Qd])), null != e[im] && (n[im] = yt(e[im])), null != e[dd] && (n[dd] = ht(zt(e[dd]))), n
		}, Ac = e => ({
			httpStatusCode: e.statusCode,
			requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
			extendedRequestId: e.headers["x-amz-id-2"],
			cfId: e.headers["x-amz-cf-id"]
		}), Ic = "ACL", Bc = "AccessKeyId", Mc = "AcceptRanges", qc = "ArchiveStatus", _c = "AccessTier", Dc = "BucketKeyEnabled", Lc = "Credentials", Hc = "ChecksumAlgorithm", Uc = "CacheControl", jc = "ChecksumCRC32", $c = "ChecksumCRC32C", Fc = "ContentDisposition", Vc = "ContentEncoding", Kc = "ContentLanguage", Gc = "ContentLength", Wc = "ChecksumMode", Xc = "ContentMD5", Qc = "CommonPrefixes", Jc = "ContentRange", Zc = "ChecksumSHA1", Yc = "ChecksumSHA256", ed = "ContentType", td = "Contents", nd = "Delimiter", rd = "DeleteMarker", sd = "DisplayName", id = "Expires", ad = "ExpectedBucketOwner", od = "ExpiresString", ld = "EncodingType", cd = "ETag", dd = "Expiration", md = "GrantFullControl", ud = "GrantRead", pd = "GrantReadACP", hd = "GrantWriteACP", gd = "ID", yd = "IfMatch", fd = "IfModifiedSince", bd = "IfNoneMatch", xd = "IsRestoreInProgress", Nd = "IsTruncated", Sd = "IfUnmodifiedSince", vd = "Key", wd = "LastModified", Cd = "Marker", Pd = "MaxKeys", Rd = "MissingMeta", Ed = "Name", zd = "NextMarker", Od = "Owner", Td = "ObjectLockLegalHoldStatus", kd = "ObjectLockMode", Ad = "ObjectLockRetainUntilDate", Id = "OptionalObjectAttributes", Bd = "Prefix", Md = "PartsCount", qd = "PartNumber", _d = "Range", Dd = "RequestCharged", Ld = "ResponseCacheControl", Hd = "ResponseContentDisposition", Ud = "ResponseContentEncoding", jd = "ResponseContentLanguage", $d = "ResponseContentType", Fd = "ResponseExpires", Vd = "RestoreExpiryDate", Kd = "RequestPayer", Gd = "ReplicationStatus", Wd = "RestoreStatus", Xd = "Restore", Qd = "SecretAccessKey", Jd = "StorageClass", Zd = "SessionMode", Yd = "ServerSideEncryption", em = "SSECustomerAlgorithm", tm = "SSECustomerKey", nm = "SSECustomerKeyMD5", rm = "SSEKMSEncryptionContext", sm = "SSEKMSKeyId", im = "SessionToken", am = "Size", om = "Tagging", lm = "TagCount", cm = "VersionId", dm = "WebsiteRedirectLocation", mm = "accept-ranges", um = "cache-control", pm = "content-disposition", hm = "content-encoding", gm = "content-language", ym = "content-length", fm = "content-md5", bm = "content-range", xm = "content-type", Nm = "delimiter", Sm = "expires", vm = "encoding-type", wm = "etag", Cm = "expiresstring", Pm = "if-match", Rm = "if-modified-since", Em = "if-none-match", zm = "if-unmodified-since", Om = "last-modified", Tm = "marker", km = "max-keys", Am = "partNumber", Im = "prefix", Bm = "range", Mm = "response-cache-control", qm = "response-content-disposition", _m = "response-content-encoding", Dm = "response-content-language", Lm = "response-content-type", Hm = "response-expires", Um = "session", jm = "versionId", $m = "x-amz-acl", Fm = "x-amz-archive-status", Vm = "x-amz-checksum-crc32", Km = "x-amz-checksum-crc32c", Gm = "x-amz-checksum-mode", Wm = "x-amz-checksum-sha1", Xm = "x-amz-checksum-sha256", Qm = "x-amz-create-session-mode", Jm = "x-amz-delete-marker", Zm = "x-amz-expiration", Ym = "x-amz-expected-bucket-owner", eu = "x-amz-grant-full-control", tu = "x-amz-grant-read", nu = "x-amz-grant-read-acp", ru = "x-amz-grant-write-acp", su = "x-amz-missing-meta", iu = "x-amz-mp-parts-count", au = "x-amz-object-lock-legal-hold", ou = "x-amz-object-lock-mode", lu = "x-amz-object-lock-retain-until-date", cu = "x-amz-optional-object-attributes", du = "x-amz-restore", mu = "x-amz-request-charged", uu = "x-amz-request-payer", pu = "x-amz-replication-status", hu = "x-amz-storage-class", gu = "x-amz-sdk-checksum-algorithm", yu = "x-amz-server-side-encryption", fu = "x-amz-server-side-encryption-aws-kms-key-id", bu = "x-amz-server-side-encryption-bucket-key-enabled", xu = "x-amz-server-side-encryption-context", Nu = "x-amz-server-side-encryption-customer-algorithm", Su = "x-amz-server-side-encryption-customer-key", vu = "x-amz-server-side-encryption-customer-key-md5", wu = "x-amz-tagging", Cu = "x-amz-tagging-count", Pu = "x-amz-version-id", Ru = "x-amz-website-redirect-location", Eu = "x-id";
		class zu extends(tt.classBuilder().ep({
			...Al,
			DisableS3ExpressSessionAuth: {
				type: "staticContextParams",
				value: !0
			},
			Bucket: {
				type: "contextParams",
				name: "Bucket"
			}
		}).m((function(e, t, n, r) {
			return [dr(n, this.serialize, this.deserialize), Ts(n, e.getEndpointParameterInstructions()), Er(n)]
		})).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(Kl, Vl).ser(sc).de(cc).build()) {}
		const Ou = "3.687.0";

		function Tu(e) {
			return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
		}
		var ku = {
				name: "SHA-1"
			},
			Au = {
				name: "HMAC",
				hash: ku
			},
			Iu = new Uint8Array([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]);
		const Bu = {};

		function Mu() {
			return "undefined" != typeof window ? window : "undefined" != typeof self ? self : Bu
		}
		var qu = function() {
			function e(e) {
				this.toHash = new Uint8Array(0), void 0 !== e && (this.key = new Promise((function(t, n) {
					Mu().crypto.subtle.importKey("raw", _u(e), Au, !1, ["sign"]).then(t, n)
				})), this.key.catch((function() {})))
			}
			return e.prototype.update = function(e) {
				if (!Tu(e)) {
					var t = _u(e),
						n = new Uint8Array(this.toHash.byteLength + t.byteLength);
					n.set(this.toHash, 0), n.set(t, this.toHash.byteLength), this.toHash = n
				}
			}, e.prototype.digest = function() {
				var e = this;
				return this.key ? this.key.then((function(t) {
					return Mu().crypto.subtle.sign(Au, t, e.toHash).then((function(e) {
						return new Uint8Array(e)
					}))
				})) : Tu(this.toHash) ? Promise.resolve(Iu) : Promise.resolve().then((function() {
					return Mu().crypto.subtle.digest(ku, e.toHash)
				})).then((function(e) {
					return Promise.resolve(new Uint8Array(e))
				}))
			}, e.prototype.reset = function() {
				this.toHash = new Uint8Array(0)
			}, e
		}();

		function _u(e) {
			return "string" == typeof e ? (t = e, (new TextEncoder).encode(t)) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
			var t
		}
		var Du = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];

		function Lu(e) {
			return !(! function(e) {
				if ("object" == typeof e && "object" == typeof e.crypto) {
					return "function" == typeof e.crypto.getRandomValues
				}
				return !1
			}(e) || "object" != typeof e.crypto.subtle) && Hu(e.crypto.subtle)
		}

		function Hu(e) {
			return e && Du.every((function(t) {
				return "function" == typeof e[t]
			}))
		}
		var Uu = function() {
				function e(e) {
					if (!Lu(Mu())) throw new Error("SHA1 not supported");
					this.hash = new qu(e)
				}
				return e.prototype.update = function(e, t) {
					this.hash.update($(e))
				}, e.prototype.digest = function() {
					return this.hash.digest()
				}, e.prototype.reset = function() {
					this.hash.reset()
				}, e
			}(),
			ju = {
				name: "SHA-256"
			},
			$u = {
				name: "HMAC",
				hash: ju
			},
			Fu = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]),
			Vu = function() {
				function e(e) {
					this.toHash = new Uint8Array(0), this.secret = e, this.reset()
				}
				return e.prototype.update = function(e) {
					if (!F(e)) {
						var t = $(e),
							n = new Uint8Array(this.toHash.byteLength + t.byteLength);
						n.set(this.toHash, 0), n.set(t, this.toHash.byteLength), this.toHash = n
					}
				}, e.prototype.digest = function() {
					var e = this;
					return this.key ? this.key.then((function(t) {
						return Mu().crypto.subtle.sign($u, t, e.toHash).then((function(e) {
							return new Uint8Array(e)
						}))
					})) : F(this.toHash) ? Promise.resolve(Fu) : Promise.resolve().then((function() {
						return Mu().crypto.subtle.digest(ju, e.toHash)
					})).then((function(e) {
						return Promise.resolve(new Uint8Array(e))
					}))
				}, e.prototype.reset = function() {
					var e = this;
					this.toHash = new Uint8Array(0), this.secret && void 0 !== this.secret && (this.key = new Promise((function(t, n) {
						Mu().crypto.subtle.importKey("raw", $(e.secret), $u, !1, ["sign"]).then(t, n)
					})), this.key.catch((function() {})))
				}, e
			}(),
			Ku = 64,
			Gu = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
			Wu = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
			Xu = Math.pow(2, 53) - 1,
			Qu = function() {
				function e() {
					this.state = Int32Array.from(Wu), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
				}
				return e.prototype.update = function(e) {
					if (this.finished) throw new Error("Attempted to update an already finished hash.");
					var t = 0,
						n = e.byteLength;
					if (this.bytesHashed += n, 8 * this.bytesHashed > Xu) throw new Error("Cannot hash more than 2^53 - 1 bits");
					for (; n > 0;) this.buffer[this.bufferLength++] = e[t++], n--, this.bufferLength === Ku && (this.hashBuffer(), this.bufferLength = 0)
				}, e.prototype.digest = function() {
					if (!this.finished) {
						var e = 8 * this.bytesHashed,
							t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
							n = this.bufferLength;
						if (t.setUint8(this.bufferLength++, 128), n % Ku >= 56) {
							for (var r = this.bufferLength; r < Ku; r++) t.setUint8(r, 0);
							this.hashBuffer(), this.bufferLength = 0
						}
						for (r = this.bufferLength; r < 56; r++) t.setUint8(r, 0);
						t.setUint32(56, Math.floor(e / 4294967296), !0), t.setUint32(60, e), this.hashBuffer(), this.finished = !0
					}
					var s = new Uint8Array(32);
					for (r = 0; r < 8; r++) s[4 * r] = this.state[r] >>> 24 & 255, s[4 * r + 1] = this.state[r] >>> 16 & 255, s[4 * r + 2] = this.state[r] >>> 8 & 255, s[4 * r + 3] = this.state[r] >>> 0 & 255;
					return s
				}, e.prototype.hashBuffer = function() {
					for (var e = this.buffer, t = this.state, n = t[0], r = t[1], s = t[2], i = t[3], a = t[4], o = t[5], l = t[6], c = t[7], d = 0; d < Ku; d++) {
						if (d < 16) this.temp[d] = (255 & e[4 * d]) << 24 | (255 & e[4 * d + 1]) << 16 | (255 & e[4 * d + 2]) << 8 | 255 & e[4 * d + 3];
						else {
							var m = this.temp[d - 2],
								u = (m >>> 17 | m << 15) ^ (m >>> 19 | m << 13) ^ m >>> 10,
								p = ((m = this.temp[d - 15]) >>> 7 | m << 25) ^ (m >>> 18 | m << 14) ^ m >>> 3;
							this.temp[d] = (u + this.temp[d - 7] | 0) + (p + this.temp[d - 16] | 0)
						}
						var h = (((a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (a & o ^ ~a & l) | 0) + (c + (Gu[d] + this.temp[d] | 0) | 0) | 0,
							g = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & r ^ n & s ^ r & s) | 0;
						c = l, l = o, o = a, a = i + h | 0, i = s, s = r, r = n, n = h + g | 0
					}
					t[0] += n, t[1] += r, t[2] += s, t[3] += i, t[4] += a, t[5] += o, t[6] += l, t[7] += c
				}, e
			}(),
			Ju = function() {
				function e(e) {
					this.secret = e, this.hash = new Qu, this.reset()
				}
				return e.prototype.update = function(e) {
					if (!F(e) && !this.error) try {
						this.hash.update($(e))
					} catch (e) {
						this.error = e
					}
				}, e.prototype.digestSync = function() {
					if (this.error) throw this.error;
					return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest()
				}, e.prototype.digest = function() {
					return M(this, void 0, void 0, (function() {
						return q(this, (function(e) {
							return [2, this.digestSync()]
						}))
					}))
				}, e.prototype.reset = function() {
					if (this.hash = new Qu, this.secret) {
						this.outer = new Qu;
						var e = function(e) {
								var t = $(e);
								if (t.byteLength > Ku) {
									var n = new Qu;
									n.update(t), t = n.digest()
								}
								var r = new Uint8Array(Ku);
								return r.set(t), r
							}(this.secret),
							t = new Uint8Array(Ku);
						t.set(e);
						for (var n = 0; n < Ku; n++) e[n] ^= 54, t[n] ^= 92;
						this.hash.update(e), this.outer.update(t);
						for (n = 0; n < e.byteLength; n++) e[n] = 0
					}
				}, e
			}();
		var Zu = function() {
				function e(e) {
					Lu(Mu()) ? this.hash = new Vu(e) : this.hash = new Ju(e)
				}
				return e.prototype.update = function(e, t) {
					this.hash.update($(e))
				}, e.prototype.digest = function() {
					return this.hash.digest()
				}, e.prototype.reset = function() {
					this.hash.reset()
				}, e
			}(),
			Yu = n(880),
			ep = n.n(Yu);
		const tp = ({
			serviceId: e,
			clientVersion: t
		}) => async n => {
			const r = "undefined" != typeof window && window?.navigator?.userAgent ? ep().parse(window.navigator.userAgent) : void 0,
				s = [
					["aws-sdk-js", t],
					["ua", "2.1"],
					[`os/${r?.os?.name||"other"}`, r?.os?.version],
					["lang/js"],
					["md/browser", `${r?.browser?.name??"unknown"}_${r?.browser?.version??"unknown"}`]
				];
			e && s.push([`api/${e}`, t]);
			const i = await (n?.userAgentAppId?.());
			return i && s.push([`app/${i}`]), s
		};
		class np {
			constructor(e) {
				if (this.bytes = e, 8 !== e.byteLength) throw new Error("Int64 buffers must be exactly 8 bytes")
			}
			static fromNumber(e) {
				if (e > 0x8000000000000000 || e < -0x8000000000000000) throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
				const t = new Uint8Array(8);
				for (let n = 7, r = Math.abs(Math.round(e)); n > -1 && r > 0; n--, r /= 256) t[n] = r;
				return e < 0 && rp(t), new np(t)
			}
			valueOf() {
				const e = this.bytes.slice(0),
					t = 128 & e[0];
				return t && rp(e), parseInt(Ce(e), 16) * (t ? -1 : 1)
			}
			toString() {
				return String(this.valueOf())
			}
		}

		function rp(e) {
			for (let t = 0; t < 8; t++) e[t] ^= 255;
			for (let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
		}
		class sp {
			constructor(e, t) {
				this.toUtf8 = e, this.fromUtf8 = t
			}
			format(e) {
				const t = [];
				for (const n of Object.keys(e)) {
					const r = this.fromUtf8(n);
					t.push(Uint8Array.from([r.byteLength]), r, this.formatHeaderValue(e[n]))
				}
				const n = new Uint8Array(t.reduce(((e, t) => e + t.byteLength), 0));
				let r = 0;
				for (const e of t) n.set(e, r), r += e.byteLength;
				return n
			}
			formatHeaderValue(e) {
				switch (e.type) {
					case "boolean":
						return Uint8Array.from([e.value ? 0 : 1]);
					case "byte":
						return Uint8Array.from([2, e.value]);
					case "short":
						const t = new DataView(new ArrayBuffer(3));
						return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
					case "integer":
						const n = new DataView(new ArrayBuffer(5));
						return n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer);
					case "long":
						const r = new Uint8Array(9);
						return r[0] = 5, r.set(e.value.bytes, 1), r;
					case "binary":
						const s = new DataView(new ArrayBuffer(3 + e.value.byteLength));
						s.setUint8(0, 6), s.setUint16(1, e.value.byteLength, !1);
						const i = new Uint8Array(s.buffer);
						return i.set(e.value, 3), i;
					case "string":
						const a = this.fromUtf8(e.value),
							o = new DataView(new ArrayBuffer(3 + a.byteLength));
						o.setUint8(0, 7), o.setUint16(1, a.byteLength, !1);
						const l = new Uint8Array(o.buffer);
						return l.set(a, 3), l;
					case "timestamp":
						const c = new Uint8Array(9);
						return c[0] = 8, c.set(np.fromNumber(e.value.valueOf()).bytes, 1), c;
					case "uuid":
						if (!gp.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
						const d = new Uint8Array(17);
						return d[0] = 9, d.set(we(e.value.replace(/\-/g, "")), 1), d
				}
			}
			parse(e) {
				const t = {};
				let n = 0;
				for (; n < e.byteLength;) {
					const r = e.getUint8(n++),
						s = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, r));
					switch (n += r, e.getUint8(n++)) {
						case 0:
							t[s] = {
								type: ap,
								value: !0
							};
							break;
						case 1:
							t[s] = {
								type: ap,
								value: !1
							};
							break;
						case 2:
							t[s] = {
								type: op,
								value: e.getInt8(n++)
							};
							break;
						case 3:
							t[s] = {
								type: lp,
								value: e.getInt16(n, !1)
							}, n += 2;
							break;
						case 4:
							t[s] = {
								type: cp,
								value: e.getInt32(n, !1)
							}, n += 4;
							break;
						case 5:
							t[s] = {
								type: dp,
								value: new np(new Uint8Array(e.buffer, e.byteOffset + n, 8))
							}, n += 8;
							break;
						case 6:
							const r = e.getUint16(n, !1);
							n += 2, t[s] = {
								type: mp,
								value: new Uint8Array(e.buffer, e.byteOffset + n, r)
							}, n += r;
							break;
						case 7:
							const i = e.getUint16(n, !1);
							n += 2, t[s] = {
								type: up,
								value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, i))
							}, n += i;
							break;
						case 8:
							t[s] = {
								type: pp,
								value: new Date(new np(new Uint8Array(e.buffer, e.byteOffset + n, 8)).valueOf())
							}, n += 8;
							break;
						case 9:
							const a = new Uint8Array(e.buffer, e.byteOffset + n, 16);
							n += 16, t[s] = {
								type: hp,
								value: `${Ce(a.subarray(0,4))}-${Ce(a.subarray(4,6))}-${Ce(a.subarray(6,8))}-${Ce(a.subarray(8,10))}-${Ce(a.subarray(10))}`
							};
							break;
						default:
							throw new Error("Unrecognized header type tag")
					}
				}
				return t
			}
		}
		var ip;
		! function(e) {
			e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid"
		}(ip || (ip = {}));
		const ap = "boolean",
			op = "byte",
			lp = "short",
			cp = "integer",
			dp = "long",
			mp = "binary",
			up = "string",
			pp = "timestamp",
			hp = "uuid",
			gp = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
		class yp {
			constructor(e, t) {
				this.headerMarshaller = new sp(e, t), this.messageBuffer = [], this.isEndOfStream = !1
			}
			feed(e) {
				this.messageBuffer.push(this.decode(e))
			}
			endOfStream() {
				this.isEndOfStream = !0
			}
			getMessage() {
				const e = this.messageBuffer.pop(),
					t = this.isEndOfStream;
				return {
					getMessage: () => e,
					isEndOfStream: () => t
				}
			}
			getAvailableMessages() {
				const e = this.messageBuffer;
				this.messageBuffer = [];
				const t = this.isEndOfStream;
				return {
					getMessages: () => e,
					isEndOfStream: () => t
				}
			}
			encode({
				headers: e,
				body: t
			}) {
				const n = this.headerMarshaller.format(e),
					r = n.byteLength + t.byteLength + 16,
					s = new Uint8Array(r),
					i = new DataView(s.buffer, s.byteOffset, s.byteLength),
					a = new W;
				return i.setUint32(0, r, !1), i.setUint32(4, n.byteLength, !1), i.setUint32(8, a.update(s.subarray(0, 8)).digest(), !1), s.set(n, 12), s.set(t, n.byteLength + 12), i.setUint32(r - 4, a.update(s.subarray(8, r - 4)).digest(), !1), s
			}
			decode(e) {
				const {
					headers: t,
					body: n
				} = function({
					byteLength: e,
					byteOffset: t,
					buffer: n
				}) {
					if (e < 16) throw new Error("Provided message too short to accommodate event stream message overhead");
					const r = new DataView(n, t, e),
						s = r.getUint32(0, !1);
					if (e !== s) throw new Error("Reported message length does not match received message length");
					const i = r.getUint32(4, !1),
						a = r.getUint32(8, !1),
						o = r.getUint32(e - 4, !1),
						l = (new W).update(new Uint8Array(n, t, 8));
					if (a !== l.digest()) throw new Error(`The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${l.digest()})`);
					if (l.update(new Uint8Array(n, t + 8, e - 12)), o !== l.digest()) throw new Error(`The message checksum (${l.digest()}) did not match the expected value of ${o}`);
					return {
						headers: new DataView(n, t + 8 + 4, i),
						body: new Uint8Array(n, t + 8 + 4 + i, s - i - 16)
					}
				}(e);
				return {
					headers: this.headerMarshaller.parse(t),
					body: n
				}
			}
			formatHeaders(e) {
				return this.headerMarshaller.format(e)
			}
		}
		class fp {
			constructor(e) {
				this.options = e
			} [Symbol.asyncIterator]() {
				return this.asyncIterator()
			}
			async * asyncIterator() {
				for await (const e of this.options.inputStream) {
					const t = this.options.decoder.decode(e);
					yield t
				}
			}
		}
		class bp {
			constructor(e) {
				this.options = e
			} [Symbol.asyncIterator]() {
				return this.asyncIterator()
			}
			async * asyncIterator() {
				for await (const e of this.options.messageStream) {
					const t = this.options.encoder.encode(e);
					yield t
				}
				this.options.includeEndFrame && (yield new Uint8Array(0))
			}
		}
		class xp {
			constructor(e) {
				this.options = e
			} [Symbol.asyncIterator]() {
				return this.asyncIterator()
			}
			async * asyncIterator() {
				for await (const e of this.options.messageStream) {
					const t = await this.options.deserializer(e);
					void 0 !== t && (yield t)
				}
			}
		}
		class Np {
			constructor(e) {
				this.options = e
			} [Symbol.asyncIterator]() {
				return this.asyncIterator()
			}
			async * asyncIterator() {
				for await (const e of this.options.inputStream) {
					const t = this.options.serializer(e);
					yield t
				}
			}
		}

		function Sp(e, t) {
			return async function(n) {
				const {
					value: r
				} = n.headers[":message-type"];
				if ("error" === r) {
					const e = new Error(n.headers[":error-message"].value || "UnknownError");
					throw e.name = n.headers[":error-code"].value, e
				}
				if ("exception" === r) {
					const r = n.headers[":exception-type"].value,
						s = {
							[r]: n
						},
						i = await e(s);
					if (i.$unknown) {
						const e = new Error(t(n.body));
						throw e.name = r, e
					}
					throw i[r]
				}
				if ("event" === r) {
					const t = {
							[n.headers[":event-type"].value]: n
						},
						r = await e(t);
					if (r.$unknown) return;
					return r
				}
				throw Error(`Unrecognizable event type: ${n.headers[":event-type"].value}`)
			}
		}
		class vp {
			constructor({
				utf8Encoder: e,
				utf8Decoder: t
			}) {
				this.eventStreamCodec = new yp(e, t), this.utfEncoder = e
			}
			deserialize(e, t) {
				const n = function(e) {
					let t = 0,
						n = 0,
						r = null,
						s = null;
					const i = e => {
						if ("number" != typeof e) throw new Error("Attempted to allocate an event message where size was not a number: " + e);
						t = e, n = 4, r = new Uint8Array(e), new DataView(r.buffer).setUint32(0, e, !1)
					};
					return {
						[Symbol.asyncIterator]: async function*() {
							const a = e[Symbol.asyncIterator]();
							for (;;) {
								const {
									value: e,
									done: o
								} = await a.next();
								if (o) {
									if (!t) return;
									if (t !== n) throw new Error("Truncated event message received.");
									return void(yield r)
								}
								const l = e.length;
								let c = 0;
								for (; c < l;) {
									if (!r) {
										const t = l - c;
										s || (s = new Uint8Array(4));
										const r = Math.min(4 - n, t);
										if (s.set(e.slice(c, c + r), n), n += r, c += r, n < 4) break;
										i(new DataView(s.buffer).getUint32(0, !1)), s = null
									}
									const a = Math.min(t - n, l - c);
									r.set(e.slice(c, c + a), n), n += a, c += a, t && t === n && (yield r, r = null, t = 0, n = 0)
								}
							}
						}
					}
				}(e);
				return new xp({
					messageStream: new fp({
						inputStream: n,
						decoder: this.eventStreamCodec
					}),
					deserializer: Sp(t, this.utfEncoder)
				})
			}
			serialize(e, t) {
				return new bp({
					messageStream: new Np({
						inputStream: e,
						serializer: t
					}),
					encoder: this.eventStreamCodec,
					includeEndFrame: !0
				})
			}
		}
		class wp {
			constructor({
				utf8Encoder: e,
				utf8Decoder: t
			}) {
				this.universalMarshaller = new vp({
					utf8Decoder: t,
					utf8Encoder: e
				})
			}
			deserialize(e, t) {
				const n = Cp(e) ? (r = e, {
					[Symbol.asyncIterator]: async function*() {
						const e = r.getReader();
						try {
							for (;;) {
								const {
									done: t,
									value: n
								} = await e.read();
								if (t) return;
								yield n
							}
						} finally {
							e.releaseLock()
						}
					}
				}) : e;
				var r;
				return this.universalMarshaller.deserialize(n, t)
			}
			serialize(e, t) {
				const n = this.universalMarshaller.serialize(e, t);
				return "function" == typeof ReadableStream ? (e => {
					const t = e[Symbol.asyncIterator]();
					return new ReadableStream({
						async pull(e) {
							const {
								done: n,
								value: r
							} = await t.next();
							if (n) return e.close();
							e.enqueue(r)
						}
					})
				})(n) : n
			}
		}
		const Cp = e => "function" == typeof ReadableStream && e instanceof ReadableStream,
			Pp = e => new wp(e);
		const Rp = async function(e, t) {
			const n = new e;
			return await async function(e, t, n = 1048576) {
				const r = e.size;
				let s = 0;
				for (; s < r;) {
					const i = e.slice(s, Math.min(r, s + n));
					t(new Uint8Array(await i.arrayBuffer())), s += i.size
				}
			}(t, (e => {
				n.update(e)
			})), n.digest()
		}, Ep = 64, zp = [1732584193, 4023233417, 2562383102, 271733878];
		class Op {
			constructor() {
				this.reset()
			}
			update(e) {
				if (function(e) {
						if ("string" == typeof e) return 0 === e.length;
						return 0 === e.byteLength
					}(e)) return;
				if (this.finished) throw new Error("Attempted to update an already finished hash.");
				const t = function(e) {
					if ("string" == typeof e) return ee(e);
					if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
					return new Uint8Array(e)
				}(e);
				let n = 0,
					{
						byteLength: r
					} = t;
				for (this.bytesHashed += r; r > 0;) this.buffer.setUint8(this.bufferLength++, t[n++]), r--, this.bufferLength === Ep && (this.hashBuffer(), this.bufferLength = 0)
			}
			async digest() {
				if (!this.finished) {
					const {
						buffer: e,
						bufferLength: t,
						bytesHashed: n
					} = this, r = 8 * n;
					if (e.setUint8(this.bufferLength++, 128), t % Ep >= 56) {
						for (let t = this.bufferLength; t < Ep; t++) e.setUint8(t, 0);
						this.hashBuffer(), this.bufferLength = 0
					}
					for (let t = this.bufferLength; t < 56; t++) e.setUint8(t, 0);
					e.setUint32(56, r >>> 0, !0), e.setUint32(60, Math.floor(r / 4294967296), !0), this.hashBuffer(), this.finished = !0
				}
				const e = new DataView(new ArrayBuffer(16));
				for (let t = 0; t < 4; t++) e.setUint32(4 * t, this.state[t], !0);
				return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
			}
			hashBuffer() {
				const {
					buffer: e,
					state: t
				} = this;
				let n = t[0],
					r = t[1],
					s = t[2],
					i = t[3];
				n = kp(n, r, s, i, e.getUint32(0, !0), 7, 3614090360), i = kp(i, n, r, s, e.getUint32(4, !0), 12, 3905402710), s = kp(s, i, n, r, e.getUint32(8, !0), 17, 606105819), r = kp(r, s, i, n, e.getUint32(12, !0), 22, 3250441966), n = kp(n, r, s, i, e.getUint32(16, !0), 7, 4118548399), i = kp(i, n, r, s, e.getUint32(20, !0), 12, 1200080426), s = kp(s, i, n, r, e.getUint32(24, !0), 17, 2821735955), r = kp(r, s, i, n, e.getUint32(28, !0), 22, 4249261313), n = kp(n, r, s, i, e.getUint32(32, !0), 7, 1770035416), i = kp(i, n, r, s, e.getUint32(36, !0), 12, 2336552879), s = kp(s, i, n, r, e.getUint32(40, !0), 17, 4294925233), r = kp(r, s, i, n, e.getUint32(44, !0), 22, 2304563134), n = kp(n, r, s, i, e.getUint32(48, !0), 7, 1804603682), i = kp(i, n, r, s, e.getUint32(52, !0), 12, 4254626195), s = kp(s, i, n, r, e.getUint32(56, !0), 17, 2792965006), r = kp(r, s, i, n, e.getUint32(60, !0), 22, 1236535329), n = Ap(n, r, s, i, e.getUint32(4, !0), 5, 4129170786), i = Ap(i, n, r, s, e.getUint32(24, !0), 9, 3225465664), s = Ap(s, i, n, r, e.getUint32(44, !0), 14, 643717713), r = Ap(r, s, i, n, e.getUint32(0, !0), 20, 3921069994), n = Ap(n, r, s, i, e.getUint32(20, !0), 5, 3593408605), i = Ap(i, n, r, s, e.getUint32(40, !0), 9, 38016083), s = Ap(s, i, n, r, e.getUint32(60, !0), 14, 3634488961), r = Ap(r, s, i, n, e.getUint32(16, !0), 20, 3889429448), n = Ap(n, r, s, i, e.getUint32(36, !0), 5, 568446438), i = Ap(i, n, r, s, e.getUint32(56, !0), 9, 3275163606), s = Ap(s, i, n, r, e.getUint32(12, !0), 14, 4107603335), r = Ap(r, s, i, n, e.getUint32(32, !0), 20, 1163531501), n = Ap(n, r, s, i, e.getUint32(52, !0), 5, 2850285829), i = Ap(i, n, r, s, e.getUint32(8, !0), 9, 4243563512), s = Ap(s, i, n, r, e.getUint32(28, !0), 14, 1735328473), r = Ap(r, s, i, n, e.getUint32(48, !0), 20, 2368359562), n = Ip(n, r, s, i, e.getUint32(20, !0), 4, 4294588738), i = Ip(i, n, r, s, e.getUint32(32, !0), 11, 2272392833), s = Ip(s, i, n, r, e.getUint32(44, !0), 16, 1839030562), r = Ip(r, s, i, n, e.getUint32(56, !0), 23, 4259657740), n = Ip(n, r, s, i, e.getUint32(4, !0), 4, 2763975236), i = Ip(i, n, r, s, e.getUint32(16, !0), 11, 1272893353), s = Ip(s, i, n, r, e.getUint32(28, !0), 16, 4139469664), r = Ip(r, s, i, n, e.getUint32(40, !0), 23, 3200236656), n = Ip(n, r, s, i, e.getUint32(52, !0), 4, 681279174), i = Ip(i, n, r, s, e.getUint32(0, !0), 11, 3936430074), s = Ip(s, i, n, r, e.getUint32(12, !0), 16, 3572445317), r = Ip(r, s, i, n, e.getUint32(24, !0), 23, 76029189), n = Ip(n, r, s, i, e.getUint32(36, !0), 4, 3654602809), i = Ip(i, n, r, s, e.getUint32(48, !0), 11, 3873151461), s = Ip(s, i, n, r, e.getUint32(60, !0), 16, 530742520), r = Ip(r, s, i, n, e.getUint32(8, !0), 23, 3299628645), n = Bp(n, r, s, i, e.getUint32(0, !0), 6, 4096336452), i = Bp(i, n, r, s, e.getUint32(28, !0), 10, 1126891415), s = Bp(s, i, n, r, e.getUint32(56, !0), 15, 2878612391), r = Bp(r, s, i, n, e.getUint32(20, !0), 21, 4237533241), n = Bp(n, r, s, i, e.getUint32(48, !0), 6, 1700485571), i = Bp(i, n, r, s, e.getUint32(12, !0), 10, 2399980690), s = Bp(s, i, n, r, e.getUint32(40, !0), 15, 4293915773), r = Bp(r, s, i, n, e.getUint32(4, !0), 21, 2240044497), n = Bp(n, r, s, i, e.getUint32(32, !0), 6, 1873313359), i = Bp(i, n, r, s, e.getUint32(60, !0), 10, 4264355552), s = Bp(s, i, n, r, e.getUint32(24, !0), 15, 2734768916), r = Bp(r, s, i, n, e.getUint32(52, !0), 21, 1309151649), n = Bp(n, r, s, i, e.getUint32(16, !0), 6, 4149444226), i = Bp(i, n, r, s, e.getUint32(44, !0), 10, 3174756917), s = Bp(s, i, n, r, e.getUint32(8, !0), 15, 718787259), r = Bp(r, s, i, n, e.getUint32(36, !0), 21, 3951481745), t[0] = n + t[0] & 4294967295, t[1] = r + t[1] & 4294967295, t[2] = s + t[2] & 4294967295, t[3] = i + t[3] & 4294967295
			}
			reset() {
				this.state = Uint32Array.from(zp), this.buffer = new DataView(new ArrayBuffer(Ep)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
			}
		}

		function Tp(e, t, n, r, s, i) {
			return ((t = (t + e & 4294967295) + (r + i & 4294967295) & 4294967295) << s | t >>> 32 - s) + n & 4294967295
		}

		function kp(e, t, n, r, s, i, a) {
			return Tp(t & n | ~t & r, e, t, s, i, a)
		}

		function Ap(e, t, n, r, s, i, a) {
			return Tp(t & r | n & ~r, e, t, s, i, a)
		}

		function Ip(e, t, n, r, s, i, a) {
			return Tp(t ^ n ^ r, e, t, s, i, a)
		}

		function Bp(e, t, n, r, s, i, a) {
			return Tp(n ^ (t | ~r), e, t, s, i, a)
		}
		const Mp = "function" == typeof TextEncoder ? new TextEncoder : null,
			qp = e => {
				if ("string" == typeof e) {
					if (Mp) return Mp.encode(e).byteLength;
					let t = e.length;
					for (let n = t - 1; n >= 0; n--) {
						const r = e.charCodeAt(n);
						r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2), r >= 56320 && r <= 57343 && n--
					}
					return t
				}
				if ("number" == typeof e.byteLength) return e.byteLength;
				if ("number" == typeof e.size) return e.size;
				throw new Error(`Body Length computation failed for ${e}`)
			},
			_p = e => new Date(Date.now() + e),
			Dp = e => f.isInstance(e) ? e.headers?.date ?? e.headers?.Date : void 0,
			Lp = (e, t) => {
				const n = Date.parse(e);
				return ((e, t) => Math.abs(_p(t).getTime() - e) >= 3e5)(n, t) ? n - Date.now() : t
			},
			Hp = (e, t) => {
				if (!t) throw new Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
				return t
			},
			Up = async e => {
				const t = Hp("context", e.context),
					n = Hp("config", e.config),
					r = t.endpointV2?.properties?.authSchemes?.[0],
					s = Hp("signer", n.signer),
					i = await s(r),
					a = e?.signingRegion,
					o = e?.signingRegionSet,
					l = e?.signingName;
				return {
					config: n,
					signer: i,
					signingRegion: a,
					signingRegionSet: o,
					signingName: l
				}
			};
		class jp {
			async sign(e, t, n) {
				if (!y.isInstance(e)) throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
				const r = await Up(n),
					{
						config: s,
						signer: i
					} = r;
				let {
					signingRegion: a,
					signingName: o
				} = r;
				const l = n.context;
				if (l?.authSchemes?.length) {
					const [e, t] = l.authSchemes;
					"sigv4a" === e?.name && "sigv4" === t?.name && (a = t?.signingRegion ?? a, o = t?.signingName ?? o)
				}
				return await i.sign(e, {
					signingDate: _p(s.systemClockOffset),
					signingRegion: a,
					signingService: o
				})
			}
			errorHandler(e) {
				return t => {
					const n = t.ServerTime ?? Dp(t.$response);
					if (n) {
						const r = Hp("config", e.config),
							s = r.systemClockOffset;
						r.systemClockOffset = Lp(n, r.systemClockOffset);
						r.systemClockOffset !== s && t.$metadata && (t.$metadata.clockSkewCorrected = !0)
					}
					throw t
				}
			}
			successHandler(e, t) {
				const n = Dp(e);
				if (n) {
					const e = Hp("config", t.config);
					e.systemClockOffset = Lp(n, e.systemClockOffset)
				}
			}
		}
		class $p extends jp {
			async sign(e, t, n) {
				if (!y.isInstance(e)) throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
				const {
					config: r,
					signer: s,
					signingRegion: i,
					signingRegionSet: a,
					signingName: o
				} = await Up(n), l = (await (r.sigv4aSigningRegionSet?.()) ?? a ?? [i]).join(",");
				return await s.sign(e, {
					signingDate: _p(r.systemClockOffset),
					signingRegion: l,
					signingService: o
				})
			}
		}
		const Fp = ["in-region", "cross-region", "mobile", "standard", "legacy"],
			Vp = () => {
				const e = "undefined" != typeof window && window?.navigator?.userAgent ? ep().parse(window.navigator.userAgent) : void 0,
					t = e?.platform?.type;
				return "tablet" === t || "mobile" === t
			},
			Kp = e => {
				const t = (({
						defaultsMode: e
					} = {}) => ((e, t, n) => {
						let r, s, i, a = !1;
						const o = async () => {
							s || (s = e());
							try {
								r = await s, i = !0, a = !1
							} finally {
								s = void 0
							}
							return r
						};
						return void 0 === t ? async e => (i && !e?.forceRefresh || (r = await o()), r): async e => (i && !e?.forceRefresh || (r = await o()), a ? r : n && !n(r) ? (a = !0, r) : t(r) ? (await o(), r) : r)
					})((async () => {
						const t = "function" == typeof e ? await e() : e;
						switch (t?.toLowerCase()) {
							case "auto":
								return Promise.resolve(Vp() ? "mobile" : "standard");
							case "mobile":
							case "in-region":
							case "cross-region":
							case "standard":
							case "legacy":
								return Promise.resolve(t?.toLocaleLowerCase());
							case void 0:
								return Promise.resolve("legacy");
							default:
								throw new Error(`Invalid parameter for "defaultsMode", expect ${Fp.join(", ")}, got ${t}`)
						}
					})))(e),
					n = () => t().then(Gt),
					r = (e => ({
						apiVersion: "2006-03-01",
						base64Decoder: e?.base64Decoder ?? ce,
						base64Encoder: e?.base64Encoder ?? de,
						disableHostPrefix: e?.disableHostPrefix ?? !1,
						endpointProvider: e?.endpointProvider ?? Pl,
						extensions: e?.extensions ?? [],
						getAwsChunkedEncodingStream: e?.getAwsChunkedEncodingStream ?? pe,
						httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Tl,
						httpAuthSchemes: e?.httpAuthSchemes ?? [{
							schemeId: "aws.auth#sigv4",
							identityProvider: e => e.getIdentityProvider("aws.auth#sigv4"),
							signer: new jp
						}, {
							schemeId: "aws.auth#sigv4a",
							identityProvider: e => e.getIdentityProvider("aws.auth#sigv4a"),
							signer: new $p
						}],
						logger: e?.logger ?? new rn,
						sdkStreamMixin: e?.sdkStreamMixin ?? Ee,
						serviceId: e?.serviceId ?? "S3",
						signerConstructor: e?.signerConstructor ?? di,
						signingEscapePath: e?.signingEscapePath ?? !1,
						urlParser: e?.urlParser ?? Ps,
						useArnRegion: e?.useArnRegion ?? !1,
						utf8Decoder: e?.utf8Decoder ?? ee,
						utf8Encoder: e?.utf8Encoder ?? me
					}))(e);
				return {
					...r,
					...e,
					runtime: "browser",
					defaultsMode: t,
					bodyLengthChecker: e?.bodyLengthChecker ?? qp,
					credentialDefaultProvider: e?.credentialDefaultProvider ?? (e => () => Promise.reject(new Error("Credential is missing"))),
					defaultUserAgentProvider: e?.defaultUserAgentProvider ?? tp({
						serviceId: r.serviceId,
						clientVersion: Ou
					}),
					eventStreamSerdeProvider: e?.eventStreamSerdeProvider ?? Pp,
					maxAttempts: e?.maxAttempts ?? 3,
					md5: e?.md5 ?? Op,
					region: e?.region ?? (s = "Region is missing", () => Promise.reject(s)),
					requestHandler: xe.create(e?.requestHandler ?? n),
					retryMode: e?.retryMode ?? (async () => (await n()).retryMode || As),
					sha1: e?.sha1 ?? Uu,
					sha256: e?.sha256 ?? Zu,
					streamCollector: e?.streamCollector ?? Ne,
					streamHasher: e?.streamHasher ?? Rp,
					useDualstackEndpoint: e?.useDualstackEndpoint ?? (() => Promise.resolve(false)),
					useFipsEndpoint: e?.useFipsEndpoint ?? (() => Promise.resolve(false))
				};
				var s
			},
			Gp = e => {
				let t = async () => {
					if (void 0 === e.region) throw new Error("Region is missing from runtimeConfig");
					const t = e.region;
					return "string" == typeof t ? t : t()
				};
				return {
					setRegion(e) {
						t = e
					},
					region: () => t
				}
			},
			Wp = e => {
				const t = e.httpAuthSchemes;
				let n = e.httpAuthSchemeProvider,
					r = e.credentials;
				return {
					setHttpAuthScheme(e) {
						const n = t.findIndex((t => t.schemeId === e.schemeId)); - 1 === n ? t.push(e) : t.splice(n, 1, e)
					},
					httpAuthSchemes: () => t,
					setHttpAuthSchemeProvider(e) {
						n = e
					},
					httpAuthSchemeProvider: () => n,
					setCredentials(e) {
						r = e
					},
					credentials: () => r
				}
			},
			Xp = e => ({
				httpAuthSchemes: e.httpAuthSchemes(),
				httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
				credentials: e.credentials()
			});
		class Qp extends Xe {
			constructor(...[e]) {
				const t = Kp(e || {});
				var n;
				const r = function(e) {
					const t = gr(e.userAgentAppId ?? void 0);
					return {
						...e,
						customUserAgent: "string" == typeof e.customUserAgent ? [
							[e.customUserAgent]
						] : e.customUserAgent,
						userAgentAppId: async () => {
							const n = await t();
							if (! function(e) {
									return void 0 === e || "string" == typeof e && e.length <= 50
								}(n)) {
								const t = "NoOpLogger" !== e.logger?.constructor?.name && e.logger ? e.logger : console;
								"string" != typeof n ? t?.warn("userAgentAppId must be a string or undefined.") : n.length > 50 && t?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.")
							}
							return n
						}
					}
				}((n = t, {
					...n,
					useFipsEndpoint: n.useFipsEndpoint ?? !1,
					useDualstackEndpoint: n.useDualstackEndpoint ?? !1,
					forcePathStyle: n.forcePathStyle ?? !1,
					useAccelerateEndpoint: n.useAccelerateEndpoint ?? !1,
					useGlobalEndpoint: n.useGlobalEndpoint ?? !1,
					disableMultiregionAccessPoints: n.disableMultiregionAccessPoints ?? !1,
					defaultSigningName: "s3"
				}));
				var s;
				const i = (e => {
						const {
							retryStrategy: t
						} = e, n = _e(e.maxAttempts ?? 3);
						return {
							...e,
							maxAttempts: n,
							retryStrategy: async () => t || (await _e(e.retryMode)() === ks.ADAPTIVE ? new Ks(n) : new Vs(n))
						}
					})((s = r, {
						...s,
						requestChecksumCalculation: _e(s.requestChecksumCalculation ?? S),
						responseChecksumValidation: _e(s.responseChecksumValidation ?? v)
					})),
					a = (e => {
						const {
							region: t,
							useFipsEndpoint: n
						} = e;
						if (!t) throw new Error("Region is missing");
						return {
							...e,
							region: async () => {
								if ("string" == typeof t) return hs(t);
								const e = await t();
								return hs(e)
							},
							useFipsEndpoint: async () => {
								const e = "string" == typeof t ? t : await t();
								return !!ps(e) || ("function" != typeof n ? Promise.resolve(!!n) : n())
							}
						}
					})(i),
					l = (e => {
						const t = e.tls ?? !0,
							{
								endpoint: n
							} = e,
							r = null != n ? async () => Rs(await _e(n)()): void 0, s = !!n, i = {
								...e,
								endpoint: r,
								tls: t,
								isCustomEndpoint: s,
								useDualstackEndpoint: _e(e.useDualstackEndpoint ?? !1),
								useFipsEndpoint: _e(e.useFipsEndpoint ?? !1)
							};
						let a;
						return i.serviceConfiguredEndpoint = async () => (e.serviceId && !a && (a = Cs(e.serviceId)), a), i
					})(a),
					c = (e => ({
						...e,
						eventStreamMarshaller: e.eventStreamSerdeProvider(e)
					}))(l),
					d = ((e, {
						session: t
					}) => {
						const [n, r] = t;
						return {
							...e,
							forcePathStyle: e.forcePathStyle ?? !1,
							useAccelerateEndpoint: e.useAccelerateEndpoint ?? !1,
							disableMultiregionAccessPoints: e.disableMultiregionAccessPoints ?? !1,
							followRegionRedirects: e.followRegionRedirects ?? !1,
							s3ExpressIdentityProvider: e.s3ExpressIdentityProvider ?? new Nn((async e => n().send(new r({
								Bucket: e,
								SessionMode: "ReadWrite"
							})))),
							bucketEndpoint: e.bucketEndpoint ?? !1
						}
					})(kl(c), {
						session: [() => this, zu]
					}),
					m = ((e, t) => {
						const n = {
							...Gp(e),
							...Zt(e),
							...o(e),
							...Wp(e)
						};
						return t.forEach((e => e.configure(n))), {
							...e,
							...(i = n, {
								region: i.region()
							}),
							...(s = n, {
								...Xt(s),
								...Jt(s)
							}),
							...(r = n, {
								httpHandler: r.httpHandler()
							}),
							...Xp(n)
						};
						var r, s, i
					})(d, e?.extensions || []);
				var u;
				super(m), this.config = m, this.middlewareStack.use((u = this.config, {
					applyToStack: e => {
						e.add(ds(u), us)
					}
				})), this.middlewareStack.use(ai(this.config)), this.middlewareStack.use(fs(this.config)), this.middlewareStack.use(Le(this.config)), this.middlewareStack.use((this.config, {
					applyToStack: e => {
						e.add(((e, t) => async n => {
							try {
								const r = await e(n),
									{
										clientName: s,
										commandName: i,
										logger: a,
										dynamoDbDocumentClientOptions: o = {}
									} = t,
									{
										overrideInputFilterSensitiveLog: l,
										overrideOutputFilterSensitiveLog: c
									} = o,
									d = l ?? t.inputFilterSensitiveLog,
									m = c ?? t.outputFilterSensitiveLog,
									{
										$metadata: u,
										...p
									} = r.output;
								return a?.info?.({
									clientName: s,
									commandName: i,
									input: d(n.input),
									output: m(p),
									metadata: u
								}), r
							} catch (e) {
								const {
									clientName: r,
									commandName: s,
									logger: i,
									dynamoDbDocumentClientOptions: a = {}
								} = t, {
									overrideInputFilterSensitiveLog: o
								} = a, l = o ?? t.inputFilterSensitiveLog;
								throw i?.error?.({
									clientName: r,
									commandName: s,
									input: l(n.input),
									error: e,
									metadata: e.$metadata
								}), e
							}
						}), He)
					}
				})), this.middlewareStack.use($e(this.config)), this.middlewareStack.use(((e, {
					httpAuthSchemeParametersProvider: t,
					identityProviderConfigProvider: n
				}) => ({
					applyToStack: r => {
						r.addRelativeTo(ar(e, {
							httpAuthSchemeParametersProvider: t,
							identityProviderConfigProvider: n
						}), or)
					}
				}))(this.config, {
					httpAuthSchemeParametersProvider: Rl,
					identityProviderConfigProvider: async e => new yr({
						"aws.auth#sigv4": e.credentials,
						"aws.auth#sigv4a": e.credentials
					})
				})), this.middlewareStack.use(hr(this.config)), this.middlewareStack.use(Tr(this.config)), this.middlewareStack.use(x(this.config)), this.middlewareStack.use(gn(this.config)), this.middlewareStack.use(ir(this.config)), this.middlewareStack.use((e => ({
					applyToStack: t => {
						t.addRelativeTo(vr(e), pr)
					}
				}))(this.config))
			}
			destroy() {
				super.destroy()
			}
		}
		const Jp = {
				name: "ssecMiddleware",
				step: "initialize",
				tags: ["SSE"],
				override: !0
			},
			Zp = e => ({
				applyToStack: t => {
					var n;
					t.add((n = e, e => async t => {
						const r = {
								...t.input
							},
							s = [{
								target: "SSECustomerKey",
								hash: "SSECustomerKeyMD5"
							}, {
								target: "CopySourceSSECustomerKey",
								hash: "CopySourceSSECustomerKeyMD5"
							}];
						for (const e of s) {
							const t = r[e.target];
							if (t) {
								let s;
								"string" == typeof t ? Yp(t, n) ? s = n.base64Decoder(t) : (s = n.utf8Decoder(t), r[e.target] = n.base64Encoder(s)) : (s = ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t), r[e.target] = n.base64Encoder(s));
								const i = new n.md5;
								i.update(s), r[e.hash] = n.base64Encoder(await i.digest())
							}
						}
						return e({
							...t,
							input: r
						})
					}), Jp)
				}
			});

		function Yp(e, t) {
			if (!/^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)) return !1;
			try {
				return 32 === t.base64Decoder(e).length
			} catch {
				return !1
			}
		}
		class eh extends(tt.classBuilder().ep({
			...Al,
			Bucket: {
				type: "contextParams",
				name: "Bucket"
			},
			Key: {
				type: "contextParams",
				name: "Key"
			}
		}).m((function(e, t, n, r) {
			return [dr(n, this.serialize, this.deserialize), Ts(n, e.getEndpointParameterInstructions()), Me(n, {
				input: this.input,
				requestChecksumRequired: !1,
				requestValidationModeMember: "ChecksumMode",
				responseAlgorithms: ["CRC32", "CRC32C", "SHA256", "SHA1"]
			}), Zp(n), fn()]
		})).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").f(Wl, Gl).ser(ic).de(dc).build()) {}
		class th extends(tt.classBuilder().ep({
			...Al,
			Bucket: {
				type: "contextParams",
				name: "Bucket"
			},
			Prefix: {
				type: "contextParams",
				name: "Prefix"
			}
		}).m((function(e, t, n, r) {
			return [dr(n, this.serialize, this.deserialize), Ts(n, e.getEndpointParameterInstructions()), Er(n)]
		})).s("AmazonS3", "ListObjects", {}).n("S3Client", "ListObjectsCommand").f(void 0, void 0).ser(oc).de(uc).build()) {}
		class nh extends(tt.classBuilder().ep({
			...Al,
			Bucket: {
				type: "contextParams",
				name: "Bucket"
			},
			Key: {
				type: "contextParams",
				name: "Key"
			}
		}).m((function(e, t, n, r) {
			return [dr(n, this.serialize, this.deserialize), Ts(n, e.getEndpointParameterInstructions()), Er(n), Zp(n), fn()]
		})).s("AmazonS3", "HeadObject", {}).n("S3Client", "HeadObjectCommand").f(Ql, Xl).ser(ac).de(mc).build()) {}
		class rh {
			constructor(e) {
				const t = {
					service: e.signingName || e.service || "s3",
					uriEscapePath: e.uriEscapePath || !1,
					applyChecksum: e.applyChecksum || !1,
					...e
				};
				this.signer = new di(t)
			}
			presign(e, {
				unsignableHeaders: t = new Set,
				hoistableHeaders: n = new Set,
				unhoistableHeaders: r = new Set,
				...s
			} = {}) {
				return this.prepareRequest(e, {
					unsignableHeaders: t,
					unhoistableHeaders: r,
					hoistableHeaders: n
				}), this.signer.presign(e, {
					expiresIn: 900,
					unsignableHeaders: t,
					unhoistableHeaders: r,
					...s
				})
			}
			presignWithCredentials(e, t, {
				unsignableHeaders: n = new Set,
				hoistableHeaders: r = new Set,
				unhoistableHeaders: s = new Set,
				...i
			} = {}) {
				return this.prepareRequest(e, {
					unsignableHeaders: n,
					unhoistableHeaders: s,
					hoistableHeaders: r
				}), this.signer.presignWithCredentials(e, t, {
					expiresIn: 900,
					unsignableHeaders: n,
					unhoistableHeaders: s,
					...i
				})
			}
			prepareRequest(e, {
				unsignableHeaders: t = new Set,
				unhoistableHeaders: n = new Set,
				hoistableHeaders: r = new Set
			} = {}) {
				t.add("content-type"), Object.keys(e.headers).map((e => e.toLowerCase())).filter((e => e.startsWith("x-amz-server-side-encryption"))).forEach((e => {
					r.has(e) || n.add(e)
				})), e.headers["X-Amz-Content-Sha256"] = "UNSIGNED-PAYLOAD";
				const s = e.headers.host,
					i = e.port,
					a = `${e.hostname}${null!=e.port?":"+i:""}`;
				(!s || s === e.hostname && null != e.port) && (e.headers.host = a)
			}
		}
		const sh = async (e, t, n = {}) => {
			let r, s;
			if ("function" == typeof e.config.endpointProvider) {
				const n = await Es(t.input, t.constructor, e.config),
					i = n.properties?.authSchemes?.[0];
				s = "sigv4a" === i?.name ? i?.signingRegionSet?.join(",") : i?.signingRegion, r = new rh({
					...e.config,
					signingName: i?.signingName,
					region: async () => s
				})
			} else r = new rh(e.config);
			const i = e.middlewareStack.clone();
			i.addRelativeTo(((e, t) => async e => {
				const {
					request: i
				} = e;
				if (!y.isInstance(i)) throw new Error("Request to be presigned is not an valid HTTP request.");
				let a;
				delete i.headers["amz-sdk-invocation-id"], delete i.headers["amz-sdk-request"], delete i.headers["x-amz-user-agent"];
				const o = {
					...n,
					signingRegion: n.signingRegion ?? t.signing_region ?? s,
					signingService: n.signingService ?? t.signing_service
				};
				return a = t.s3ExpressIdentity ? await r.presignWithCredentials(i, t.s3ExpressIdentity, o) : await r.presign(i, o), {
					response: {},
					output: {
						$metadata: {
							httpStatusCode: 200
						},
						presigned: a
					}
				}
			}), {
				name: "presignInterceptMiddleware",
				relation: "before",
				toMiddleware: "awsAuthMiddleware",
				override: !0
			});
			const a = t.resolveMiddleware(i, e.config, {}),
				{
					output: o
				} = await a({
					input: t.input
				}),
				{
					presigned: l
				} = o;
			return function(e) {
				const {
					port: t,
					query: n
				} = e;
				let {
					protocol: r,
					path: s,
					hostname: i
				} = e;
				r && ":" !== r.slice(-1) && (r += ":"), t && (i += `:${t}`), s && "/" !== s.charAt(0) && (s = `/${s}`);
				let a = n ? ye(n) : "";
				a && "?" !== a[0] && (a = `?${a}`);
				let o = "";
				null == e.username && null == e.password || (o = `${e.username??""}:${e.password??""}@`);
				let l = "";
				return e.fragment && (l = `#${e.fragment}`), `${r}//${o}${i}${s}${a}${l}`
			}(l)
		};
		class ih {
			static removeSchemeIfNeeded(e) {
				return e.startsWith("s3://") && (e = e.substring(5)), e
			}
			static S3ClientFromCredentials(e, t, n) {
				return new Qp(null === n ? {
					region: null != t ? t : "us-east-1",
					credentials: e
				} : {
					region: null != t ? t : "us-east-1",
					endpoint: n,
					credentials: e
				})
			}
			static generateGetPresignedUrl(e, t, n) {
				t = ih.removeSchemeIfNeeded(t);
				const r = n.clone(),
					s = t.indexOf("/");
				let i = new eh({
					Bucket: t.substring(0, s),
					Key: t.substring(s + 1)
				});
				sh(e, i, {
					expiresIn: 3600
				}).then((e => {
					r.call(null != e ? e : ""), r.delete()
				})).catch((e => {
					console.error(e), r.call(""), r.delete()
				}))
			}
			static splitBucketPrefix(e) {
				const t = e.indexOf("/"),
					n = e.lastIndexOf("/");
				return [e.substring(0, t), e.substring(t + 1, n)]
			}
			static list(e, t, n, r, s) {
				const [i, a] = ih.splitBucketPrefix(t), o = (a.endsWith("/") ? a : `${a}/`) + n;
				const l = s.clone(),
					c = (t, n, r) => {
						let s = new th({
							Bucket: i,
							Prefix: o,
							Marker: n
						});
						e.send(s).then((e => {
							var n;
							for (const t of null !== (n = e.Contents) && void 0 !== n ? n : []) r.push({
								path: t.Key.substring(a.length + 1),
								size: t.Size,
								lastModified: new Date(t.LastModified),
								etag: t.ETag.replace('"', "")
							});
							if (null == e.IsTruncated || 0 == e.IsTruncated) return l.call({
								responseCode: 200,
								data: r
							}), void l.delete();
							c(t, e.NextMarker, r)
						})).catch((e => {
							l.call({
								responseCode: 1e3,
								message: e
							}), l.delete()
						}))
					};
				c(n, undefined, [])
			}
			static metadata(e, t, n, r) {
				const [s, i] = ih.splitBucketPrefix(t), a = (i.endsWith("/") ? i : `${i}/`) + n, o = r.clone();
				let l = new th({
					Bucket: s,
					Prefix: a,
					Marker: void 0
				});
				e.send(l).then((e => {
					var t;
					if (1 != (null === (t = e.Contents) || void 0 === t ? void 0 : t.length)) return void o.call({
						responseCode: 404,
						message: "resource_not_found"
					});
					const n = e.Contents[0],
						r = {
							path: n.Key.substring(i.length + 1),
							size: n.Size,
							lastModified: new Date(n.LastModified),
							etag: n.ETag.replace('"', "")
						};
					o.call({
						responseCode: 200,
						data: r
					})
				})).catch((e => {
					o.call({
						responseCode: 1e3,
						message: e
					})
				})).finally((() => {
					o.delete()
				}))
			}
		}
		class ah {
			constructor(e, t, n) {
				this.client = ih.S3ClientFromCredentials(e, t, n)
			}
			generateGetPresignedUrl(e, t) {
				ih.generateGetPresignedUrl(this.client, e, t)
			}
			exists(e, t) {
				e = ih.removeSchemeIfNeeded(e);
				const n = t.clone(),
					r = e.indexOf("/");
				let s = new nh({
					Bucket: e.substring(0, r),
					Key: e.substring(r + 1)
				});
				this.client.send(s).then((e => {
					var t;
					n.call(null !== (t = e.ContentLength) && void 0 !== t ? t : 0), n.delete()
				})).catch((e => {
					n.call(-1), n.delete()
				}))
			}
			download(e, t, n, r) {
				e = ih.removeSchemeIfNeeded(e);
				const s = r.clone();
				(() => {
					let r = !1;
					const i = e.indexOf("/");
					let a = new eh({
						Bucket: e.substring(0, i),
						Key: e.substring(i + 1),
						Range: t,
						ResponseCacheControl: "no-cache, no-store, max-age=0"
					});
					this.client.send(a).then((e => {
						if (r) return;
						if (null === e) return s.call({
							responseCode: 1e3,
							message: "unknown_error"
						}), void s.delete();
						let t = 0,
							i = e.Body.getReader(),
							a = new Uint8Array(e.ContentLength);
						const o = l => {
							if (!r)
								if (void 0 !== l.value && (a.subarray(t, t + l.value.length).set(l.value), t += l.value.length), l.done) {
									ZE.core.provideResponseBuffer(n, e.ContentLength).set(a), s.call({
										responseCode: 200
									}), s.delete()
								} else i.read().then(o)
						};
						i.read().then(o)
					})).catch((e => {
						"AbortError" === e.name ? console.log("Fetch aborted") : "NoSuchKey" === e.name ? r || (s.call({
							responseCode: 404,
							message: "resource_not_found"
						}), s.delete()) : (r || (s.call({
							responseCode: 1e3,
							message: "unknown_error"
						}), s.delete()), console.error(e))
					}));
					ZE.core.storeJsObject(n, {
						command: a,
						abort: function() {
							r = !0
						}
					})
				})()
			}
			list(e, t, n, r) {
				ih.list(this.client, e, t, n, r)
			}
			metadata(e, t, n) {
				ih.metadata(this.client, e, t, n)
			}
			copyGetter() {
				return this
			}
		}
		class oh extends(tt.classBuilder().ep({
			...Al,
			Bucket: {
				type: "contextParams",
				name: "Bucket"
			},
			Key: {
				type: "contextParams",
				name: "Key"
			}
		}).m((function(e, t, n, r) {
			return [dr(n, this.serialize, this.deserialize), Ts(n, e.getEndpointParameterInstructions()), Me(n, {
				input: this.input,
				requestAlgorithmMember: "ChecksumAlgorithm",
				requestChecksumRequired: !1
			}), un(), Er(n), Zp(n)]
		})).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").f(rc, nc).ser(lc).de(pc).build()) {}
		var lh = function(e, t, n, r) {
			return new(n || (n = Promise))((function(s, i) {
				function a(e) {
					try {
						l(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function l(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, o)
				}
				l((r = r.apply(e, t || [])).next())
			}))
		};
		class ch {
			copyWriter() {
				return this
			}
			saveWithCompletion(e, t, n) {
				const r = n.clone();
				this.saveWithCompletion_(e, t, (e => {
					r.call(e), r.delete()
				}))
			}
			save(e, t) {
				return lh(this, void 0, void 0, (function*() {
					return new Promise(((n, r) => {
						this.saveWithCompletion_(e, t, n)
					}))
				}))
			}
		}
		class dh extends ch {
			constructor(e, t, n) {
				super(), this.client = new Qp(null === n ? {
					region: t,
					credentials: e
				} : {
					region: t,
					endpoint: n,
					credentials: e
				})
			}
			saveWithCompletion_(e, t, n) {
				const r = e.indexOf("/");
				let s = new oh({
					Bucket: e.substring(0, r),
					Key: e.substring(r + 1),
					Body: t
				});
				this.client.send(s).then((e => {
					var t;
					n({
						responseCode: null !== (t = e.$metadata.httpStatusCode) && void 0 !== t ? t : 1e3
					})
				}))
			}
		}
		class mh extends Error {
			constructor(e) {
				super(e), this.name = "AbortError"
			}
		}

		function uh(e, t) {
			let n;
			const {
				abortSignal: r,
				abortErrorMsg: s
			} = null != t ? t : {};
			return function(e, t) {
				const {
					cleanupBeforeAbort: n,
					abortSignal: r,
					abortErrorMsg: s
				} = null != t ? t : {};
				return new Promise(((t, i) => {
					function a() {
						i(new mh(null != s ? s : "The operation was aborted."))
					}

					function o() {
						null == r || r.removeEventListener("abort", l)
					}

					function l() {
						null == n || n(), o(), a()
					}
					if (null == r ? void 0 : r.aborted) return a();
					try {
						e((e => {
							o(), t(e)
						}), (e => {
							o(), i(e)
						}))
					} catch (e) {
						i(e)
					}
					null == r || r.addEventListener("abort", l)
				}))
			}((t => {
				n = setTimeout(t, e)
			}), {
				cleanupBeforeAbort: () => clearTimeout(n),
				abortSignal: r,
				abortErrorMsg: null != s ? s : "The delay was aborted."
			})
		}
		new Set("0123456789abcdefABCDEF");

		function ph() {
			let e = "";
			for (let t = 0; t < 32; t++) {
				const n = Math.floor(16 * Math.random());
				e += 12 === t ? "4" : 16 === t ? 3 & n | 8 : n.toString(16), 7 !== t && 11 !== t && 15 !== t && 19 !== t || "-"
			}
			return e
		}
		var hh;
		"function" == typeof(null === (hh = null === globalThis || void 0 === globalThis ? void 0 : globalThis.crypto) || void 0 === hh ? void 0 : hh.randomUUID) && globalThis.crypto.randomUUID.bind(globalThis.crypto);
		var gh, yh, fh, bh;
		"undefined" != typeof window && window.document, "object" == typeof self && "function" == typeof(null === self || void 0 === self ? void 0 : self.importScripts) && ("DedicatedWorkerGlobalScope" === (null === (gh = self.constructor) || void 0 === gh ? void 0 : gh.name) || "ServiceWorkerGlobalScope" === (null === (yh = self.constructor) || void 0 === yh ? void 0 : yh.name) || null === (fh = self.constructor) || void 0 === fh || fh.name), "undefined" != typeof Deno && void 0 !== Deno.version && Deno.version.deno, "undefined" != typeof Bun && Bun.version;
		const xh = void 0 !== globalThis.process && Boolean(globalThis.process.version) && Boolean(null === (bh = globalThis.process.versions) || void 0 === bh ? void 0 : bh.node),
			Nh = xh;
		"undefined" != typeof navigator && (null === navigator || void 0 === navigator || navigator.product);

		function Sh(e) {
			const t = e;
			return t && "function" == typeof t.getToken && (void 0 === t.signRequest || t.getToken.length > 0)
		}
		var vh;
		! function(e) {
			e[e.OFF = 0] = "OFF", e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO"
		}(vh || (vh = {}));
		class wh {
			constructor(e, t) {
				this._nextPolicy = e, this._options = t
			}
			shouldLog(e) {
				return this._options.shouldLog(e)
			}
			log(e, t) {
				this._options.log(e, t)
			}
		}
		class Ch {
			constructor(e) {
				this._logger = e
			}
			shouldLog(e) {
				return !!this._logger && e !== vh.OFF && e <= this._logger.minimumLogLevel
			}
			log(e, t) {
				this._logger && this.shouldLog(e) && this._logger.log(e, t)
			}
		}
		const Ph = "ProxyPolicy is not supported in browser environment";

		function Rh(e) {
			return {
				create: (e, t) => {
					throw new Error(Ph)
				}
			}
		}
		var Eh = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof n.g ? n.g : {},
			zh = "1.9.0",
			Oh = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
		var Th = function(e) {
				var t = new Set([e]),
					n = new Set,
					r = e.match(Oh);
				if (!r) return function() {
					return !1
				};
				var s = +r[1],
					i = +r[2],
					a = +r[3];
				if (null != r[4]) return function(t) {
					return t === e
				};

				function o(e) {
					return n.add(e), !1
				}

				function l(e) {
					return t.add(e), !0
				}
				return function(e) {
					if (t.has(e)) return !0;
					if (n.has(e)) return !1;
					var r = e.match(Oh);
					if (!r) return o(e);
					var c = +r[1],
						d = +r[2],
						m = +r[3];
					return null != r[4] || s !== c ? o(e) : 0 === s ? i === d && a <= m ? l(e) : o(e) : i <= d ? l(e) : o(e)
				}
			}(zh),
			kh = zh.split(".")[0],
			Ah = Symbol.for("opentelemetry.js.api." + kh),
			Ih = Eh;

		function Bh(e, t, n, r) {
			var s;
			void 0 === r && (r = !1);
			var i = Ih[Ah] = null !== (s = Ih[Ah]) && void 0 !== s ? s : {
				version: zh
			};
			if (!r && i[e]) {
				var a = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
				return n.error(a.stack || a.message), !1
			}
			if (i.version !== zh) {
				a = new Error("@opentelemetry/api: Registration of version v" + i.version + " for " + e + " does not match previously registered API v" + zh);
				return n.error(a.stack || a.message), !1
			}
			return i[e] = t, n.debug("@opentelemetry/api: Registered a global for " + e + " v" + zh + "."), !0
		}

		function Mh(e) {
			var t, n, r = null === (t = Ih[Ah]) || void 0 === t ? void 0 : t.version;
			if (r && Th(r)) return null === (n = Ih[Ah]) || void 0 === n ? void 0 : n[e]
		}

		function qh(e, t) {
			t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + zh + ".");
			var n = Ih[Ah];
			n && delete n[e]
		}
		var _h, Dh = function e(t) {
				var n = this;
				n._currentContext = t ? new Map(t) : new Map, n.getValue = function(e) {
					return n._currentContext.get(e)
				}, n.setValue = function(t, r) {
					var s = new e(n._currentContext);
					return s._currentContext.set(t, r), s
				}, n.deleteValue = function(t) {
					var r = new e(n._currentContext);
					return r._currentContext.delete(t), r
				}
			},
			Lh = new Dh,
			Hh = function(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, s, i = n.call(e),
					a = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
				} catch (e) {
					s = {
						error: e
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (s) throw s.error
					}
				}
				return a
			},
			Uh = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, s = 0, i = t.length; s < i; s++) !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)), r[s] = t[s]);
				return e.concat(r || Array.prototype.slice.call(t))
			},
			jh = function() {
				function e() {}
				return e.prototype.active = function() {
					return Lh
				}, e.prototype.with = function(e, t, n) {
					for (var r = [], s = 3; s < arguments.length; s++) r[s - 3] = arguments[s];
					return t.call.apply(t, Uh([n], Hh(r), !1))
				}, e.prototype.bind = function(e, t) {
					return t
				}, e.prototype.enable = function() {
					return this
				}, e.prototype.disable = function() {
					return this
				}, e
			}(),
			$h = function(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, s, i = n.call(e),
					a = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
				} catch (e) {
					s = {
						error: e
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (s) throw s.error
					}
				}
				return a
			},
			Fh = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, s = 0, i = t.length; s < i; s++) !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)), r[s] = t[s]);
				return e.concat(r || Array.prototype.slice.call(t))
			},
			Vh = function() {
				function e(e) {
					this._namespace = e.namespace || "DiagComponentLogger"
				}
				return e.prototype.debug = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					return Kh("debug", this._namespace, e)
				}, e.prototype.error = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					return Kh("error", this._namespace, e)
				}, e.prototype.info = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					return Kh("info", this._namespace, e)
				}, e.prototype.warn = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					return Kh("warn", this._namespace, e)
				}, e.prototype.verbose = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					return Kh("verbose", this._namespace, e)
				}, e
			}();

		function Kh(e, t, n) {
			var r = Mh("diag");
			if (r) return n.unshift(t), r[e].apply(r, Fh([], $h(n), !1))
		}! function(e) {
			e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL"
		}(_h || (_h = {}));
		var Gh, Wh = function(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, s, i = n.call(e),
					a = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
				} catch (e) {
					s = {
						error: e
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (s) throw s.error
					}
				}
				return a
			},
			Xh = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, s = 0, i = t.length; s < i; s++) !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)), r[s] = t[s]);
				return e.concat(r || Array.prototype.slice.call(t))
			},
			Qh = function() {
				function e() {
					function e(e) {
						return function() {
							for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
							var r = Mh("diag");
							if (r) return r[e].apply(r, Xh([], Wh(t), !1))
						}
					}
					var t = this;
					t.setLogger = function(e, n) {
						var r, s, i;
						if (void 0 === n && (n = {
								logLevel: _h.INFO
							}), e === t) {
							var a = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
							return t.error(null !== (r = a.stack) && void 0 !== r ? r : a.message), !1
						}
						"number" == typeof n && (n = {
							logLevel: n
						});
						var o = Mh("diag"),
							l = function(e, t) {
								function n(n, r) {
									var s = t[n];
									return "function" == typeof s && e >= r ? s.bind(t) : function() {}
								}
								return e < _h.NONE ? e = _h.NONE : e > _h.ALL && (e = _h.ALL), t = t || {}, {
									error: n("error", _h.ERROR),
									warn: n("warn", _h.WARN),
									info: n("info", _h.INFO),
									debug: n("debug", _h.DEBUG),
									verbose: n("verbose", _h.VERBOSE)
								}
							}(null !== (s = n.logLevel) && void 0 !== s ? s : _h.INFO, e);
						if (o && !n.suppressOverrideMessage) {
							var c = null !== (i = (new Error).stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
							o.warn("Current logger will be overwritten from " + c), l.warn("Current logger will overwrite one already registered from " + c)
						}
						return Bh("diag", l, t, !0)
					}, t.disable = function() {
						qh("diag", t)
					}, t.createComponentLogger = function(e) {
						return new Vh(e)
					}, t.verbose = e("verbose"), t.debug = e("debug"), t.info = e("info"), t.warn = e("warn"), t.error = e("error")
				}
				return e.instance = function() {
					return this._instance || (this._instance = new e), this._instance
				}, e
			}(),
			Jh = function(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, s, i = n.call(e),
					a = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
				} catch (e) {
					s = {
						error: e
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (s) throw s.error
					}
				}
				return a
			},
			Zh = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, s = 0, i = t.length; s < i; s++) !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)), r[s] = t[s]);
				return e.concat(r || Array.prototype.slice.call(t))
			},
			Yh = "context",
			eg = new jh,
			tg = function() {
				function e() {}
				return e.getInstance = function() {
					return this._instance || (this._instance = new e), this._instance
				}, e.prototype.setGlobalContextManager = function(e) {
					return Bh(Yh, e, Qh.instance())
				}, e.prototype.active = function() {
					return this._getContextManager().active()
				}, e.prototype.with = function(e, t, n) {
					for (var r, s = [], i = 3; i < arguments.length; i++) s[i - 3] = arguments[i];
					return (r = this._getContextManager()).with.apply(r, Zh([e, t, n], Jh(s), !1))
				}, e.prototype.bind = function(e, t) {
					return this._getContextManager().bind(e, t)
				}, e.prototype._getContextManager = function() {
					return Mh(Yh) || eg
				}, e.prototype.disable = function() {
					this._getContextManager().disable(), qh(Yh, Qh.instance())
				}, e
			}();
		! function(e) {
			e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED"
		}(Gh || (Gh = {}));
		var ng, rg = "0000000000000000",
			sg = "00000000000000000000000000000000",
			ig = {
				traceId: sg,
				spanId: rg,
				traceFlags: Gh.NONE
			},
			ag = function() {
				function e(e) {
					void 0 === e && (e = ig), this._spanContext = e
				}
				return e.prototype.spanContext = function() {
					return this._spanContext
				}, e.prototype.setAttribute = function(e, t) {
					return this
				}, e.prototype.setAttributes = function(e) {
					return this
				}, e.prototype.addEvent = function(e, t) {
					return this
				}, e.prototype.addLink = function(e) {
					return this
				}, e.prototype.addLinks = function(e) {
					return this
				}, e.prototype.setStatus = function(e) {
					return this
				}, e.prototype.updateName = function(e) {
					return this
				}, e.prototype.end = function(e) {}, e.prototype.isRecording = function() {
					return !1
				}, e.prototype.recordException = function(e, t) {}, e
			}(),
			og = (ng = "OpenTelemetry Context Key SPAN", Symbol.for(ng));

		function lg(e) {
			return e.getValue(og) || void 0
		}

		function cg() {
			return lg(tg.getInstance().active())
		}

		function dg(e, t) {
			return e.setValue(og, t)
		}

		function mg(e) {
			return e.deleteValue(og)
		}

		function ug(e, t) {
			return dg(e, new ag(t))
		}

		function pg(e) {
			var t;
			return null === (t = lg(e)) || void 0 === t ? void 0 : t.spanContext()
		}
		var hg = /^([0-9a-f]{32})$/i,
			gg = /^[0-9a-f]{16}$/i;

		function yg(e) {
			return n = e.traceId, hg.test(n) && n !== sg && (t = e.spanId, gg.test(t) && t !== rg);
			var t, n
		}

		function fg(e) {
			return new ag(e)
		}
		var bg = tg.getInstance(),
			xg = function() {
				function e() {}
				return e.prototype.startSpan = function(e, t, n) {
					if (void 0 === n && (n = bg.active()), Boolean(null == t ? void 0 : t.root)) return new ag;
					var r, s = n && pg(n);
					return "object" == typeof(r = s) && "string" == typeof r.spanId && "string" == typeof r.traceId && "number" == typeof r.traceFlags && yg(s) ? new ag(s) : new ag
				}, e.prototype.startActiveSpan = function(e, t, n, r) {
					var s, i, a;
					if (!(arguments.length < 2)) {
						2 === arguments.length ? a = t : 3 === arguments.length ? (s = t, a = n) : (s = t, i = n, a = r);
						var o = null != i ? i : bg.active(),
							l = this.startSpan(e, s, o),
							c = dg(o, l);
						return bg.with(c, a, void 0, l)
					}
				}, e
			}();
		var Ng, Sg = new xg,
			vg = function() {
				function e(e, t, n, r) {
					this._provider = e, this.name = t, this.version = n, this.options = r
				}
				return e.prototype.startSpan = function(e, t, n) {
					return this._getTracer().startSpan(e, t, n)
				}, e.prototype.startActiveSpan = function(e, t, n, r) {
					var s = this._getTracer();
					return Reflect.apply(s.startActiveSpan, s, arguments)
				}, e.prototype._getTracer = function() {
					if (this._delegate) return this._delegate;
					var e = this._provider.getDelegateTracer(this.name, this.version, this.options);
					return e ? (this._delegate = e, this._delegate) : Sg
				}, e
			}(),
			wg = new(function() {
				function e() {}
				return e.prototype.getTracer = function(e, t, n) {
					return new xg
				}, e
			}()),
			Cg = function() {
				function e() {}
				return e.prototype.getTracer = function(e, t, n) {
					var r;
					return null !== (r = this.getDelegateTracer(e, t, n)) && void 0 !== r ? r : new vg(this, e, t, n)
				}, e.prototype.getDelegate = function() {
					var e;
					return null !== (e = this._delegate) && void 0 !== e ? e : wg
				}, e.prototype.setDelegate = function(e) {
					this._delegate = e
				}, e.prototype.getDelegateTracer = function(e, t, n) {
					var r;
					return null === (r = this._delegate) || void 0 === r ? void 0 : r.getTracer(e, t, n)
				}, e
			}(),
			Pg = "trace",
			Rg = function() {
				function e() {
					this._proxyTracerProvider = new Cg, this.wrapSpanContext = fg, this.isSpanContextValid = yg, this.deleteSpan = mg, this.getSpan = lg, this.getActiveSpan = cg, this.getSpanContext = pg, this.setSpan = dg, this.setSpanContext = ug
				}
				return e.getInstance = function() {
					return this._instance || (this._instance = new e), this._instance
				}, e.prototype.setGlobalTracerProvider = function(e) {
					var t = Bh(Pg, this._proxyTracerProvider, Qh.instance());
					return t && this._proxyTracerProvider.setDelegate(e), t
				}, e.prototype.getTracerProvider = function() {
					return Mh(Pg) || this._proxyTracerProvider
				}, e.prototype.getTracer = function(e, t) {
					return this.getTracerProvider().getTracer(e, t)
				}, e.prototype.disable = function() {
					qh(Pg, Qh.instance()), this._proxyTracerProvider = new Cg
				}, e
			}(),
			Eg = Rg.getInstance(),
			zg = tg.getInstance();

		function Og(e, t) {
			return Eg.setSpan(e, t)
		}! function(e) {
			e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER"
		}(Ng || (Ng = {}));
		const Tg = zg;
		var kg;

		function Ag(e) {
			const {
				requestOptions: t,
				tracingOptions: n
			} = e;
			let r = B(e, ["requestOptions", "tracingOptions"]);
			return t && (r = Object.assign(Object.assign({}, r), t)), n && (r.tracingContext = n.tracingContext, r.spanOptions = null == n ? void 0 : n.spanOptions), r
		}

		function Ig(e) {
			let t = "";
			for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
			return btoa(t)
		}

		function Bg(e) {
			const t = atob(e),
				n = new Uint8Array(t.length);
			for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
			return n
		}! function(e) {
			e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR"
		}(kg || (kg = {}));
		const Mg = "$",
			qg = "_";
		var _g, Dg = new Uint8Array(16);

		function Lg() {
			if (!_g && !(_g = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
			return _g(Dg)
		}
		const Hg = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
		const Ug = function(e) {
			return "string" == typeof e && Hg.test(e)
		};
		for (var jg = [], $g = 0; $g < 256; ++$g) jg.push(($g + 256).toString(16).substr(1));
		const Fg = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = (jg[e[t + 0]] + jg[e[t + 1]] + jg[e[t + 2]] + jg[e[t + 3]] + "-" + jg[e[t + 4]] + jg[e[t + 5]] + "-" + jg[e[t + 6]] + jg[e[t + 7]] + "-" + jg[e[t + 8]] + jg[e[t + 9]] + "-" + jg[e[t + 10]] + jg[e[t + 11]] + jg[e[t + 12]] + jg[e[t + 13]] + jg[e[t + 14]] + jg[e[t + 15]]).toLowerCase();
			if (!Ug(n)) throw TypeError("Stringified UUID is invalid");
			return n
		};
		const Vg = function(e, t, n) {
				var r = (e = e || {}).random || (e.rng || Lg)();
				if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
					n = n || 0;
					for (var s = 0; s < 16; ++s) t[n + s] = r[s];
					return t
				}
				return Fg(r)
			},
			Kg = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;

		function Gg() {
			return Vg()
		}
		const Wg = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

		function Xg(e, t, n) {
			return e && t ? e.split(t).join(n || "") : e
		}
		class Qg {
			constructor(e = {}, t) {
				this.modelMappers = e, this.isXML = t
			}
			validateConstraints(e, t, n) {
				const r = (e, r) => {
					throw new Error(`"${n}" with value "${t}" should satisfy the constraint "${e}": ${r}.`)
				};
				if (e.constraints && null != t) {
					const n = t,
						{
							ExclusiveMaximum: s,
							ExclusiveMinimum: i,
							InclusiveMaximum: a,
							InclusiveMinimum: o,
							MaxItems: l,
							MaxLength: c,
							MinItems: d,
							MinLength: m,
							MultipleOf: u,
							Pattern: p,
							UniqueItems: h
						} = e.constraints;
					null != s && n >= s && r("ExclusiveMaximum", s), null != i && n <= i && r("ExclusiveMinimum", i), null != a && n > a && r("InclusiveMaximum", a), null != o && n < o && r("InclusiveMinimum", o);
					const g = t;
					if (null != l && g.length > l && r("MaxItems", l), null != c && g.length > c && r("MaxLength", c), null != d && g.length < d && r("MinItems", d), null != m && g.length < m && r("MinLength", m), null != u && n % u != 0 && r("MultipleOf", u), p) {
						const e = "string" == typeof p ? new RegExp(p) : p;
						"string" == typeof t && null !== t.match(e) || r("Pattern", p)
					}
					h && g.some(((e, t, n) => n.indexOf(e) !== t)) && r("UniqueItems", h)
				}
			}
			serialize(e, t, n, r = {}) {
				var s, i, a;
				const o = {
					rootName: null !== (s = r.rootName) && void 0 !== s ? s : "",
					includeRoot: null !== (i = r.includeRoot) && void 0 !== i && i,
					xmlCharKey: null !== (a = r.xmlCharKey) && void 0 !== a ? a : qg
				};
				let l = {};
				const c = e.type.name;
				n || (n = e.serializedName), null !== c.match(/^Sequence$/i) && (l = []), e.isConstant && (t = e.defaultValue);
				const {
					required: d,
					nullable: m
				} = e;
				if (d && m && void 0 === t) throw new Error(`${n} cannot be undefined.`);
				if (d && !m && null == t) throw new Error(`${n} cannot be null or undefined.`);
				if (!d && !1 === m && null === t) throw new Error(`${n} cannot be null.`);
				if (null == t) l = t;
				else if (null !== c.match(/^any$/i)) l = t;
				else if (null !== c.match(/^(Number|String|Boolean|Object|Stream|Uuid)$/i)) l = function(e, t, n) {
					if (null != n)
						if (null !== e.match(/^Number$/i)) {
							if ("number" != typeof n) throw new Error(`${t} with value ${n} must be of type number.`)
						} else if (null !== e.match(/^String$/i)) {
						if ("string" != typeof n.valueOf()) throw new Error(`${t} with value "${n}" must be of type string.`)
					} else if (null !== e.match(/^Uuid$/i)) {
						if ("string" != typeof n.valueOf() || (r = n, !Kg.test(r))) throw new Error(`${t} with value "${n}" must be of type string and a valid uuid.`)
					} else if (null !== e.match(/^Boolean$/i)) {
						if ("boolean" != typeof n) throw new Error(`${t} with value ${n} must be of type boolean.`)
					} else if (null !== e.match(/^Stream$/i)) {
						const e = typeof n;
						if (!("string" === e || "function" === e || n instanceof ArrayBuffer || ArrayBuffer.isView(n) || ("function" == typeof Blob || "object" == typeof Blob) && n instanceof Blob)) throw new Error(`${t} must be a string, Blob, ArrayBuffer, ArrayBufferView, or a function returning NodeJS.ReadableStream.`)
					}
					var r;
					return n
				}(c, n, t);
				else if (null !== c.match(/^Enum$/i)) {
					l = function(e, t, n) {
						if (!t) throw new Error(`Please provide a set of allowedValues to validate ${e} as an Enum Type.`);
						if (!t.some((e => "string" == typeof e.valueOf() ? e.toLowerCase() === n.toLowerCase() : e === n))) throw new Error(`${n} is not a valid value for ${e}. The valid values are: ${JSON.stringify(t)}.`);
						return n
					}(n, e.type.allowedValues, t)
				} else null !== c.match(/^(Date|DateTime|TimeSpan|DateTimeRfc1123|UnixTime)$/i) ? l = function(e, t, n) {
					if (null != t)
						if (null !== e.match(/^Date$/i)) {
							if (!(t instanceof Date || "string" == typeof t.valueOf() && !isNaN(Date.parse(t)))) throw new Error(`${n} must be an instanceof Date or a string in ISO8601 format.`);
							t = t instanceof Date ? t.toISOString().substring(0, 10) : new Date(t).toISOString().substring(0, 10)
						} else if (null !== e.match(/^DateTime$/i)) {
						if (!(t instanceof Date || "string" == typeof t.valueOf() && !isNaN(Date.parse(t)))) throw new Error(`${n} must be an instanceof Date or a string in ISO8601 format.`);
						t = t instanceof Date ? t.toISOString() : new Date(t).toISOString()
					} else if (null !== e.match(/^DateTimeRfc1123$/i)) {
						if (!(t instanceof Date || "string" == typeof t.valueOf() && !isNaN(Date.parse(t)))) throw new Error(`${n} must be an instanceof Date or a string in RFC-1123 format.`);
						t = t instanceof Date ? t.toUTCString() : new Date(t).toUTCString()
					} else if (null !== e.match(/^UnixTime$/i)) {
						if (!(t instanceof Date || "string" == typeof t.valueOf() && !isNaN(Date.parse(t)))) throw new Error(`${n} must be an instanceof Date or a string in RFC-1123/ISO8601 format for it to be serialized in UnixTime/Epoch format.`);
						t = function(e) {
							if (!e) return;
							"string" == typeof e.valueOf() && (e = new Date(e));
							return Math.floor(e.getTime() / 1e3)
						}(t)
					} else if (null !== e.match(/^TimeSpan$/i) && ! function(e) {
							return Wg.test(e)
						}(t)) throw new Error(`${n} must be a string in ISO 8601 format. Instead was "${t}".`);
					return t
				}(c, t, n) : null !== c.match(/^ByteArray$/i) ? l = function(e, t) {
					let n = "";
					if (null != t) {
						if (!(t instanceof Uint8Array)) throw new Error(`${e} must be of type Uint8Array.`);
						n = Ig(t)
					}
					return n
				}(n, t) : null !== c.match(/^Base64Url$/i) ? l = function(e, t) {
					let n = "";
					if (null != t) {
						if (!(t instanceof Uint8Array)) throw new Error(`${e} must be of type Uint8Array.`);
						n = function(e) {
							if (!e) return;
							if (!(e instanceof Uint8Array)) throw new Error("Please provide an input of type Uint8Array for converting to Base64Url.");
							return function(e, t) {
								let n = e.length;
								for (; n - 1 >= 0 && e[n - 1] === t;) --n;
								return e.substr(0, n)
							}(Ig(e), "=").replace(/\+/g, "-").replace(/\//g, "_")
						}(t) || ""
					}
					return n
				}(n, t) : null !== c.match(/^Sequence$/i) ? l = function(e, t, n, r, s, i) {
					if (!Array.isArray(n)) throw new Error(`${r} must be of type Array.`);
					const a = t.type.element;
					if (!a || "object" != typeof a) throw new Error(`element" metadata for an Array must be defined in the mapper and it must of type "object" in ${r}.`);
					const o = [];
					for (let t = 0; t < n.length; t++) {
						const l = e.serialize(a, n[t], r, i);
						if (s && a.xmlNamespace) {
							const e = a.xmlNamespacePrefix ? `xmlns:${a.xmlNamespacePrefix}` : "xmlns";
							"Composite" === a.type.name ? (o[t] = Object.assign({}, l), o[t][Mg] = {
								[e]: a.xmlNamespace
							}) : (o[t] = {}, o[t][i.xmlCharKey] = l, o[t][Mg] = {
								[e]: a.xmlNamespace
							})
						} else o[t] = l
					}
					return o
				}(this, e, t, n, Boolean(this.isXML), o) : null !== c.match(/^Dictionary$/i) ? l = function(e, t, n, r, s, i) {
					if ("object" != typeof n) throw new Error(`${r} must be of type object.`);
					const a = t.type.value;
					if (!a || "object" != typeof a) throw new Error(`"value" metadata for a Dictionary must be defined in the mapper and it must of type "object" in ${r}.`);
					const o = {};
					for (const t of Object.keys(n)) {
						const l = e.serialize(a, n[t], r, i);
						o[t] = ey(a, l, s, i)
					}
					if (s && t.xmlNamespace) {
						const e = t.xmlNamespacePrefix ? `xmlns:${t.xmlNamespacePrefix}` : "xmlns",
							n = o;
						return n[Mg] = {
							[e]: t.xmlNamespace
						}, n
					}
					return o
				}(this, e, t, n, Boolean(this.isXML), o) : null !== c.match(/^Composite$/i) && (l = function(e, t, n, r, s, i) {
					ry(e, t) && (t = ny(e, t, n, "clientName"));
					if (null != n) {
						const a = {},
							o = Yg(e, t, r);
						for (const l of Object.keys(o)) {
							const c = o[l];
							if (c.readOnly) continue;
							let d, m = a;
							if (e.isXML) d = c.xmlIsWrapped ? c.xmlName : c.xmlElementName || c.xmlName;
							else {
								const e = Jg(c.serializedName);
								d = e.pop();
								for (const t of e) {
									null != m[t] || null == n[l] && void 0 === c.defaultValue || (m[t] = {}), m = m[t]
								}
							}
							if (null != m) {
								if (s && t.xmlNamespace) {
									const e = t.xmlNamespacePrefix ? `xmlns:${t.xmlNamespacePrefix}` : "xmlns";
									m[Mg] = Object.assign(Object.assign({}, m[Mg]), {
										[e]: t.xmlNamespace
									})
								}
								const a = "" !== c.serializedName ? r + "." + c.serializedName : r;
								let o = n[l];
								const u = ry(e, t);
								u && u.clientName === l && null == o && (o = t.serializedName);
								const p = e.serialize(c, o, a, i);
								if (void 0 !== p && null != d) {
									const e = ey(c, p, s, i);
									s && c.xmlIsAttribute ? (m[Mg] = m[Mg] || {}, m[Mg][d] = p) : s && c.xmlIsWrapped ? m[d] = {
										[c.xmlElementName]: e
									} : m[d] = e
								}
							}
						}
						const l = function(e, t, n) {
							const r = t.type.additionalProperties;
							if (!r && t.type.className) {
								const r = Zg(e, t, n);
								return null == r ? void 0 : r.type.additionalProperties
							}
							return r
						}(e, t, r);
						if (l) {
							const t = Object.keys(o);
							for (const s in n) {
								t.every((e => e !== s)) && (a[s] = e.serialize(l, n[s], r + '["' + s + '"]', i))
							}
						}
						return a
					}
					return n
				}(this, e, t, n, Boolean(this.isXML), o));
				return l
			}
			deserialize(e, t, n, r = {}) {
				var s, i, a;
				const o = {
					rootName: null !== (s = r.rootName) && void 0 !== s ? s : "",
					includeRoot: null !== (i = r.includeRoot) && void 0 !== i && i,
					xmlCharKey: null !== (a = r.xmlCharKey) && void 0 !== a ? a : qg
				};
				if (null == t) return this.isXML && "Sequence" === e.type.name && !e.xmlIsWrapped && (t = []), void 0 !== e.defaultValue && (t = e.defaultValue), t;
				let l;
				const c = e.type.name;
				if (n || (n = e.serializedName), null !== c.match(/^Composite$/i)) l = function(e, t, n, r, s) {
					var i, a;
					const o = null !== (i = s.xmlCharKey) && void 0 !== i ? i : qg;
					ry(e, t) && (t = ny(e, t, n, "serializedName"));
					const l = Yg(e, t, r);
					let c = {};
					const d = [];
					for (const i of Object.keys(l)) {
						const m = l[i],
							u = Jg(l[i].serializedName);
						d.push(u[0]);
						const {
							serializedName: p,
							xmlName: h,
							xmlElementName: g
						} = m;
						let y = r;
						"" !== p && void 0 !== p && (y = r + "." + p);
						const f = m.headerCollectionPrefix;
						if (f) {
							const t = {};
							for (const r of Object.keys(n)) r.startsWith(f) && (t[r.substring(f.length)] = e.deserialize(m.type.value, n[r], y, s)), d.push(r);
							c[i] = t
						} else if (e.isXML)
							if (m.xmlIsAttribute && n[Mg]) c[i] = e.deserialize(m, n[Mg][h], y, s);
							else if (m.xmlIsMsText) void 0 !== n[o] ? c[i] = n[o] : "string" == typeof n && (c[i] = n);
						else {
							const t = g || h || p;
							if (m.xmlIsWrapped) {
								const t = n[h],
									r = null !== (a = null == t ? void 0 : t[g]) && void 0 !== a ? a : [];
								c[i] = e.deserialize(m, r, y, s), d.push(h)
							} else {
								const r = n[t];
								c[i] = e.deserialize(m, r, y, s), d.push(t)
							}
						} else {
							let r, a = n;
							for (const e of u) {
								if (!a) break;
								a = a[e]
							}
							r = a;
							const o = t.type.polymorphicDiscriminator;
							let d;
							if (o && i === o.clientName && null == r && (r = t.serializedName), Array.isArray(n[i]) && "" === l[i].serializedName) {
								r = n[i];
								const t = e.deserialize(m, r, y, s);
								for (const [e, n] of Object.entries(c)) Object.prototype.hasOwnProperty.call(t, e) || (t[e] = n);
								c = t
							} else void 0 === r && void 0 === m.defaultValue || (d = e.deserialize(m, r, y, s), c[i] = d)
						}
					}
					const m = t.type.additionalProperties;
					if (m) {
						const t = e => {
							for (const t in l) {
								if (Jg(l[t].serializedName)[0] === e) return !1
							}
							return !0
						};
						for (const i in n) t(i) && (c[i] = e.deserialize(m, n[i], r + '["' + i + '"]', s))
					} else if (n)
						for (const e of Object.keys(n)) void 0 !== c[e] || d.includes(e) || ty(e, s) || (c[e] = n[e]);
					return c
				}(this, e, t, n, o);
				else {
					if (this.isXML) {
						const e = o.xmlCharKey,
							n = t;
						null != n[Mg] && null != n[e] && (t = n[e])
					}
					null !== c.match(/^Number$/i) ? (l = parseFloat(t), isNaN(l) && (l = t)) : null !== c.match(/^Boolean$/i) ? l = "true" === t || "false" !== t && t : null !== c.match(/^(String|Enum|Object|Stream|Uuid|TimeSpan|any)$/i) ? l = t : null !== c.match(/^(Date|DateTime|DateTimeRfc1123)$/i) ? l = new Date(t) : null !== c.match(/^UnixTime$/i) ? l = function(e) {
						if (!e) return;
						return new Date(1e3 * e)
					}(t) : null !== c.match(/^ByteArray$/i) ? l = Bg(t) : null !== c.match(/^Base64Url$/i) ? l = function(e) {
						if (!e) return;
						if (e && "string" != typeof e.valueOf()) throw new Error("Please provide an input of type string for converting to Uint8Array");
						return Bg(e = e.replace(/-/g, "+").replace(/_/g, "/"))
					}(t) : null !== c.match(/^Sequence$/i) ? l = function(e, t, n, r, s) {
						const i = t.type.element;
						if (!i || "object" != typeof i) throw new Error(`element" metadata for an Array must be defined in the mapper and it must of type "object" in ${r}`);
						if (n) {
							Array.isArray(n) || (n = [n]);
							const t = [];
							for (let a = 0; a < n.length; a++) t[a] = e.deserialize(i, n[a], `${r}[${a}]`, s);
							return t
						}
						return n
					}(this, e, t, n, o) : null !== c.match(/^Dictionary$/i) && (l = function(e, t, n, r, s) {
						const i = t.type.value;
						if (!i || "object" != typeof i) throw new Error(`"value" metadata for a Dictionary must be defined in the mapper and it must of type "object" in ${r}`);
						if (n) {
							const t = {};
							for (const a of Object.keys(n)) t[a] = e.deserialize(i, n[a], r, s);
							return t
						}
						return n
					}(this, e, t, n, o))
				}
				return e.isConstant && (l = e.defaultValue), l
			}
		}

		function Jg(e) {
			const t = [];
			let n = "";
			if (e) {
				const r = e.split(".");
				for (const e of r) "\\" === e.charAt(e.length - 1) ? n += e.substr(0, e.length - 1) + "." : (n += e, t.push(n), n = "")
			}
			return t
		}

		function Zg(e, t, n) {
			const r = t.type.className;
			if (!r) throw new Error(`Class name for model "${n}" is not provided in the mapper "${JSON.stringify(t,void 0,2)}".`);
			return e.modelMappers[r]
		}

		function Yg(e, t, n) {
			let r = t.type.modelProperties;
			if (!r) {
				const s = Zg(e, t, n);
				if (!s) throw new Error(`mapper() cannot be null or undefined for model "${t.type.className}".`);
				if (r = null == s ? void 0 : s.type.modelProperties, !r) throw new Error(`modelProperties cannot be null or undefined in the mapper "${JSON.stringify(s)}" of type "${t.type.className}" for object "${n}".`)
			}
			return r
		}

		function ey(e, t, n, r) {
			if (!n || !e.xmlNamespace) return t;
			const s = e.xmlNamespacePrefix ? `xmlns:${e.xmlNamespacePrefix}` : "xmlns",
				i = {
					[s]: e.xmlNamespace
				};
			if (["Composite"].includes(e.type.name)) {
				if (t[Mg]) return t;
				{
					const e = Object.assign({}, t);
					return e[Mg] = i, e
				}
			}
			const a = {};
			return a[r.xmlCharKey] = t, a[Mg] = i, a
		}

		function ty(e, t) {
			return [Mg, t.xmlCharKey].includes(e)
		}

		function ny(e, t, n, r) {
			const s = ry(e, t);
			if (s) {
				const i = s[r];
				if (null != i) {
					const r = n[i];
					if (null != r) {
						const n = t.type.uberParent || t.type.className,
							s = r === n ? r : n + "." + r,
							i = e.modelMappers.discriminators[s];
						i && (t = i)
					}
				}
			}
			return t
		}

		function ry(e, t) {
			return t.type.polymorphicDiscriminator || sy(e, t.type.uberParent) || sy(e, t.type.className)
		}

		function sy(e, t) {
			return t && e.modelMappers[t] && e.modelMappers[t].type.polymorphicDiscriminator
		}
		const iy = function(e) {
				const t = {};
				for (const n of e) t[n] = n;
				return t
			}(["Base64Url", "Boolean", "ByteArray", "Composite", "Date", "DateTime", "DateTimeRfc1123", "Dictionary", "Enum", "Number", "Object", "Sequence", "String", "Stream", "TimeSpan", "UnixTime"]),
			ay = {
				serializedName: "BlobServiceProperties",
				xmlName: "StorageServiceProperties",
				type: {
					name: "Composite",
					className: "BlobServiceProperties",
					modelProperties: {
						blobAnalyticsLogging: {
							serializedName: "Logging",
							xmlName: "Logging",
							type: {
								name: "Composite",
								className: "Logging"
							}
						},
						hourMetrics: {
							serializedName: "HourMetrics",
							xmlName: "HourMetrics",
							type: {
								name: "Composite",
								className: "Metrics"
							}
						},
						minuteMetrics: {
							serializedName: "MinuteMetrics",
							xmlName: "MinuteMetrics",
							type: {
								name: "Composite",
								className: "Metrics"
							}
						},
						cors: {
							serializedName: "Cors",
							xmlName: "Cors",
							xmlIsWrapped: !0,
							xmlElementName: "CorsRule",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "CorsRule"
									}
								}
							}
						},
						defaultServiceVersion: {
							serializedName: "DefaultServiceVersion",
							xmlName: "DefaultServiceVersion",
							type: {
								name: "String"
							}
						},
						deleteRetentionPolicy: {
							serializedName: "DeleteRetentionPolicy",
							xmlName: "DeleteRetentionPolicy",
							type: {
								name: "Composite",
								className: "RetentionPolicy"
							}
						},
						staticWebsite: {
							serializedName: "StaticWebsite",
							xmlName: "StaticWebsite",
							type: {
								name: "Composite",
								className: "StaticWebsite"
							}
						}
					}
				}
			},
			oy = {
				serializedName: "Logging",
				type: {
					name: "Composite",
					className: "Logging",
					modelProperties: {
						version: {
							serializedName: "Version",
							required: !0,
							xmlName: "Version",
							type: {
								name: "String"
							}
						},
						deleteProperty: {
							serializedName: "Delete",
							required: !0,
							xmlName: "Delete",
							type: {
								name: "Boolean"
							}
						},
						read: {
							serializedName: "Read",
							required: !0,
							xmlName: "Read",
							type: {
								name: "Boolean"
							}
						},
						write: {
							serializedName: "Write",
							required: !0,
							xmlName: "Write",
							type: {
								name: "Boolean"
							}
						},
						retentionPolicy: {
							serializedName: "RetentionPolicy",
							xmlName: "RetentionPolicy",
							type: {
								name: "Composite",
								className: "RetentionPolicy"
							}
						}
					}
				}
			},
			ly = {
				serializedName: "RetentionPolicy",
				type: {
					name: "Composite",
					className: "RetentionPolicy",
					modelProperties: {
						enabled: {
							serializedName: "Enabled",
							required: !0,
							xmlName: "Enabled",
							type: {
								name: "Boolean"
							}
						},
						days: {
							constraints: {
								InclusiveMinimum: 1
							},
							serializedName: "Days",
							xmlName: "Days",
							type: {
								name: "Number"
							}
						}
					}
				}
			},
			cy = {
				serializedName: "Metrics",
				type: {
					name: "Composite",
					className: "Metrics",
					modelProperties: {
						version: {
							serializedName: "Version",
							xmlName: "Version",
							type: {
								name: "String"
							}
						},
						enabled: {
							serializedName: "Enabled",
							required: !0,
							xmlName: "Enabled",
							type: {
								name: "Boolean"
							}
						},
						includeAPIs: {
							serializedName: "IncludeAPIs",
							xmlName: "IncludeAPIs",
							type: {
								name: "Boolean"
							}
						},
						retentionPolicy: {
							serializedName: "RetentionPolicy",
							xmlName: "RetentionPolicy",
							type: {
								name: "Composite",
								className: "RetentionPolicy"
							}
						}
					}
				}
			},
			dy = {
				serializedName: "CorsRule",
				type: {
					name: "Composite",
					className: "CorsRule",
					modelProperties: {
						allowedOrigins: {
							serializedName: "AllowedOrigins",
							required: !0,
							xmlName: "AllowedOrigins",
							type: {
								name: "String"
							}
						},
						allowedMethods: {
							serializedName: "AllowedMethods",
							required: !0,
							xmlName: "AllowedMethods",
							type: {
								name: "String"
							}
						},
						allowedHeaders: {
							serializedName: "AllowedHeaders",
							required: !0,
							xmlName: "AllowedHeaders",
							type: {
								name: "String"
							}
						},
						exposedHeaders: {
							serializedName: "ExposedHeaders",
							required: !0,
							xmlName: "ExposedHeaders",
							type: {
								name: "String"
							}
						},
						maxAgeInSeconds: {
							constraints: {
								InclusiveMinimum: 0
							},
							serializedName: "MaxAgeInSeconds",
							required: !0,
							xmlName: "MaxAgeInSeconds",
							type: {
								name: "Number"
							}
						}
					}
				}
			},
			my = {
				serializedName: "StaticWebsite",
				type: {
					name: "Composite",
					className: "StaticWebsite",
					modelProperties: {
						enabled: {
							serializedName: "Enabled",
							required: !0,
							xmlName: "Enabled",
							type: {
								name: "Boolean"
							}
						},
						indexDocument: {
							serializedName: "IndexDocument",
							xmlName: "IndexDocument",
							type: {
								name: "String"
							}
						},
						errorDocument404Path: {
							serializedName: "ErrorDocument404Path",
							xmlName: "ErrorDocument404Path",
							type: {
								name: "String"
							}
						},
						defaultIndexDocumentPath: {
							serializedName: "DefaultIndexDocumentPath",
							xmlName: "DefaultIndexDocumentPath",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			uy = {
				serializedName: "StorageError",
				type: {
					name: "Composite",
					className: "StorageError",
					modelProperties: {
						message: {
							serializedName: "Message",
							xmlName: "Message",
							type: {
								name: "String"
							}
						},
						code: {
							serializedName: "Code",
							xmlName: "Code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			py = {
				serializedName: "BlobServiceStatistics",
				xmlName: "StorageServiceStats",
				type: {
					name: "Composite",
					className: "BlobServiceStatistics",
					modelProperties: {
						geoReplication: {
							serializedName: "GeoReplication",
							xmlName: "GeoReplication",
							type: {
								name: "Composite",
								className: "GeoReplication"
							}
						}
					}
				}
			},
			hy = {
				serializedName: "GeoReplication",
				type: {
					name: "Composite",
					className: "GeoReplication",
					modelProperties: {
						status: {
							serializedName: "Status",
							required: !0,
							xmlName: "Status",
							type: {
								name: "Enum",
								allowedValues: ["live", "bootstrap", "unavailable"]
							}
						},
						lastSyncOn: {
							serializedName: "LastSyncTime",
							required: !0,
							xmlName: "LastSyncTime",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			gy = {
				serializedName: "ListContainersSegmentResponse",
				xmlName: "EnumerationResults",
				type: {
					name: "Composite",
					className: "ListContainersSegmentResponse",
					modelProperties: {
						serviceEndpoint: {
							serializedName: "ServiceEndpoint",
							required: !0,
							xmlName: "ServiceEndpoint",
							xmlIsAttribute: !0,
							type: {
								name: "String"
							}
						},
						prefix: {
							serializedName: "Prefix",
							xmlName: "Prefix",
							type: {
								name: "String"
							}
						},
						marker: {
							serializedName: "Marker",
							xmlName: "Marker",
							type: {
								name: "String"
							}
						},
						maxPageSize: {
							serializedName: "MaxResults",
							xmlName: "MaxResults",
							type: {
								name: "Number"
							}
						},
						containerItems: {
							serializedName: "ContainerItems",
							required: !0,
							xmlName: "Containers",
							xmlIsWrapped: !0,
							xmlElementName: "Container",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "ContainerItem"
									}
								}
							}
						},
						continuationToken: {
							serializedName: "NextMarker",
							xmlName: "NextMarker",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			yy = {
				serializedName: "ContainerItem",
				xmlName: "Container",
				type: {
					name: "Composite",
					className: "ContainerItem",
					modelProperties: {
						name: {
							serializedName: "Name",
							required: !0,
							xmlName: "Name",
							type: {
								name: "String"
							}
						},
						deleted: {
							serializedName: "Deleted",
							xmlName: "Deleted",
							type: {
								name: "Boolean"
							}
						},
						version: {
							serializedName: "Version",
							xmlName: "Version",
							type: {
								name: "String"
							}
						},
						properties: {
							serializedName: "Properties",
							xmlName: "Properties",
							type: {
								name: "Composite",
								className: "ContainerProperties"
							}
						},
						metadata: {
							serializedName: "Metadata",
							xmlName: "Metadata",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							}
						}
					}
				}
			},
			fy = {
				serializedName: "ContainerProperties",
				type: {
					name: "Composite",
					className: "ContainerProperties",
					modelProperties: {
						lastModified: {
							serializedName: "Last-Modified",
							required: !0,
							xmlName: "Last-Modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						etag: {
							serializedName: "Etag",
							required: !0,
							xmlName: "Etag",
							type: {
								name: "String"
							}
						},
						leaseStatus: {
							serializedName: "LeaseStatus",
							xmlName: "LeaseStatus",
							type: {
								name: "Enum",
								allowedValues: ["locked", "unlocked"]
							}
						},
						leaseState: {
							serializedName: "LeaseState",
							xmlName: "LeaseState",
							type: {
								name: "Enum",
								allowedValues: ["available", "leased", "expired", "breaking", "broken"]
							}
						},
						leaseDuration: {
							serializedName: "LeaseDuration",
							xmlName: "LeaseDuration",
							type: {
								name: "Enum",
								allowedValues: ["infinite", "fixed"]
							}
						},
						publicAccess: {
							serializedName: "PublicAccess",
							xmlName: "PublicAccess",
							type: {
								name: "Enum",
								allowedValues: ["container", "blob"]
							}
						},
						hasImmutabilityPolicy: {
							serializedName: "HasImmutabilityPolicy",
							xmlName: "HasImmutabilityPolicy",
							type: {
								name: "Boolean"
							}
						},
						hasLegalHold: {
							serializedName: "HasLegalHold",
							xmlName: "HasLegalHold",
							type: {
								name: "Boolean"
							}
						},
						defaultEncryptionScope: {
							serializedName: "DefaultEncryptionScope",
							xmlName: "DefaultEncryptionScope",
							type: {
								name: "String"
							}
						},
						preventEncryptionScopeOverride: {
							serializedName: "DenyEncryptionScopeOverride",
							xmlName: "DenyEncryptionScopeOverride",
							type: {
								name: "Boolean"
							}
						},
						deletedOn: {
							serializedName: "DeletedTime",
							xmlName: "DeletedTime",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						remainingRetentionDays: {
							serializedName: "RemainingRetentionDays",
							xmlName: "RemainingRetentionDays",
							type: {
								name: "Number"
							}
						},
						isImmutableStorageWithVersioningEnabled: {
							serializedName: "ImmutableStorageWithVersioningEnabled",
							xmlName: "ImmutableStorageWithVersioningEnabled",
							type: {
								name: "Boolean"
							}
						}
					}
				}
			},
			by = {
				serializedName: "KeyInfo",
				type: {
					name: "Composite",
					className: "KeyInfo",
					modelProperties: {
						startsOn: {
							serializedName: "Start",
							required: !0,
							xmlName: "Start",
							type: {
								name: "String"
							}
						},
						expiresOn: {
							serializedName: "Expiry",
							required: !0,
							xmlName: "Expiry",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			xy = {
				serializedName: "UserDelegationKey",
				type: {
					name: "Composite",
					className: "UserDelegationKey",
					modelProperties: {
						signedObjectId: {
							serializedName: "SignedOid",
							required: !0,
							xmlName: "SignedOid",
							type: {
								name: "String"
							}
						},
						signedTenantId: {
							serializedName: "SignedTid",
							required: !0,
							xmlName: "SignedTid",
							type: {
								name: "String"
							}
						},
						signedStartsOn: {
							serializedName: "SignedStart",
							required: !0,
							xmlName: "SignedStart",
							type: {
								name: "String"
							}
						},
						signedExpiresOn: {
							serializedName: "SignedExpiry",
							required: !0,
							xmlName: "SignedExpiry",
							type: {
								name: "String"
							}
						},
						signedService: {
							serializedName: "SignedService",
							required: !0,
							xmlName: "SignedService",
							type: {
								name: "String"
							}
						},
						signedVersion: {
							serializedName: "SignedVersion",
							required: !0,
							xmlName: "SignedVersion",
							type: {
								name: "String"
							}
						},
						value: {
							serializedName: "Value",
							required: !0,
							xmlName: "Value",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ny = {
				serializedName: "FilterBlobSegment",
				xmlName: "EnumerationResults",
				type: {
					name: "Composite",
					className: "FilterBlobSegment",
					modelProperties: {
						serviceEndpoint: {
							serializedName: "ServiceEndpoint",
							required: !0,
							xmlName: "ServiceEndpoint",
							xmlIsAttribute: !0,
							type: {
								name: "String"
							}
						},
						where: {
							serializedName: "Where",
							required: !0,
							xmlName: "Where",
							type: {
								name: "String"
							}
						},
						blobs: {
							serializedName: "Blobs",
							required: !0,
							xmlName: "Blobs",
							xmlIsWrapped: !0,
							xmlElementName: "Blob",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "FilterBlobItem"
									}
								}
							}
						},
						continuationToken: {
							serializedName: "NextMarker",
							xmlName: "NextMarker",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Sy = {
				serializedName: "FilterBlobItem",
				xmlName: "Blob",
				type: {
					name: "Composite",
					className: "FilterBlobItem",
					modelProperties: {
						name: {
							serializedName: "Name",
							required: !0,
							xmlName: "Name",
							type: {
								name: "String"
							}
						},
						containerName: {
							serializedName: "ContainerName",
							required: !0,
							xmlName: "ContainerName",
							type: {
								name: "String"
							}
						},
						tags: {
							serializedName: "Tags",
							xmlName: "Tags",
							type: {
								name: "Composite",
								className: "BlobTags"
							}
						}
					}
				}
			},
			vy = {
				serializedName: "BlobTags",
				xmlName: "Tags",
				type: {
					name: "Composite",
					className: "BlobTags",
					modelProperties: {
						blobTagSet: {
							serializedName: "BlobTagSet",
							required: !0,
							xmlName: "TagSet",
							xmlIsWrapped: !0,
							xmlElementName: "Tag",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "BlobTag"
									}
								}
							}
						}
					}
				}
			},
			wy = {
				serializedName: "BlobTag",
				xmlName: "Tag",
				type: {
					name: "Composite",
					className: "BlobTag",
					modelProperties: {
						key: {
							serializedName: "Key",
							required: !0,
							xmlName: "Key",
							type: {
								name: "String"
							}
						},
						value: {
							serializedName: "Value",
							required: !0,
							xmlName: "Value",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Cy = {
				serializedName: "SignedIdentifier",
				xmlName: "SignedIdentifier",
				type: {
					name: "Composite",
					className: "SignedIdentifier",
					modelProperties: {
						id: {
							serializedName: "Id",
							required: !0,
							xmlName: "Id",
							type: {
								name: "String"
							}
						},
						accessPolicy: {
							serializedName: "AccessPolicy",
							xmlName: "AccessPolicy",
							type: {
								name: "Composite",
								className: "AccessPolicy"
							}
						}
					}
				}
			},
			Py = {
				serializedName: "AccessPolicy",
				type: {
					name: "Composite",
					className: "AccessPolicy",
					modelProperties: {
						startsOn: {
							serializedName: "Start",
							xmlName: "Start",
							type: {
								name: "String"
							}
						},
						expiresOn: {
							serializedName: "Expiry",
							xmlName: "Expiry",
							type: {
								name: "String"
							}
						},
						permissions: {
							serializedName: "Permission",
							xmlName: "Permission",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ry = {
				serializedName: "ListBlobsFlatSegmentResponse",
				xmlName: "EnumerationResults",
				type: {
					name: "Composite",
					className: "ListBlobsFlatSegmentResponse",
					modelProperties: {
						serviceEndpoint: {
							serializedName: "ServiceEndpoint",
							required: !0,
							xmlName: "ServiceEndpoint",
							xmlIsAttribute: !0,
							type: {
								name: "String"
							}
						},
						containerName: {
							serializedName: "ContainerName",
							required: !0,
							xmlName: "ContainerName",
							xmlIsAttribute: !0,
							type: {
								name: "String"
							}
						},
						prefix: {
							serializedName: "Prefix",
							xmlName: "Prefix",
							type: {
								name: "String"
							}
						},
						marker: {
							serializedName: "Marker",
							xmlName: "Marker",
							type: {
								name: "String"
							}
						},
						maxPageSize: {
							serializedName: "MaxResults",
							xmlName: "MaxResults",
							type: {
								name: "Number"
							}
						},
						segment: {
							serializedName: "Segment",
							xmlName: "Blobs",
							type: {
								name: "Composite",
								className: "BlobFlatListSegment"
							}
						},
						continuationToken: {
							serializedName: "NextMarker",
							xmlName: "NextMarker",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ey = {
				serializedName: "BlobFlatListSegment",
				xmlName: "Blobs",
				type: {
					name: "Composite",
					className: "BlobFlatListSegment",
					modelProperties: {
						blobItems: {
							serializedName: "BlobItems",
							required: !0,
							xmlName: "BlobItems",
							xmlElementName: "Blob",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "BlobItemInternal"
									}
								}
							}
						}
					}
				}
			},
			zy = {
				serializedName: "BlobItemInternal",
				xmlName: "Blob",
				type: {
					name: "Composite",
					className: "BlobItemInternal",
					modelProperties: {
						name: {
							serializedName: "Name",
							xmlName: "Name",
							type: {
								name: "Composite",
								className: "BlobName"
							}
						},
						deleted: {
							serializedName: "Deleted",
							required: !0,
							xmlName: "Deleted",
							type: {
								name: "Boolean"
							}
						},
						snapshot: {
							serializedName: "Snapshot",
							required: !0,
							xmlName: "Snapshot",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "VersionId",
							xmlName: "VersionId",
							type: {
								name: "String"
							}
						},
						isCurrentVersion: {
							serializedName: "IsCurrentVersion",
							xmlName: "IsCurrentVersion",
							type: {
								name: "Boolean"
							}
						},
						properties: {
							serializedName: "Properties",
							xmlName: "Properties",
							type: {
								name: "Composite",
								className: "BlobPropertiesInternal"
							}
						},
						metadata: {
							serializedName: "Metadata",
							xmlName: "Metadata",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							}
						},
						blobTags: {
							serializedName: "BlobTags",
							xmlName: "Tags",
							type: {
								name: "Composite",
								className: "BlobTags"
							}
						},
						objectReplicationMetadata: {
							serializedName: "ObjectReplicationMetadata",
							xmlName: "OrMetadata",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							}
						},
						hasVersionsOnly: {
							serializedName: "HasVersionsOnly",
							xmlName: "HasVersionsOnly",
							type: {
								name: "Boolean"
							}
						}
					}
				}
			},
			Oy = {
				serializedName: "BlobName",
				type: {
					name: "Composite",
					className: "BlobName",
					modelProperties: {
						encoded: {
							serializedName: "Encoded",
							xmlName: "Encoded",
							xmlIsAttribute: !0,
							type: {
								name: "Boolean"
							}
						},
						content: {
							serializedName: "content",
							xmlName: "content",
							xmlIsMsText: !0,
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ty = {
				serializedName: "BlobPropertiesInternal",
				xmlName: "Properties",
				type: {
					name: "Composite",
					className: "BlobPropertiesInternal",
					modelProperties: {
						createdOn: {
							serializedName: "Creation-Time",
							xmlName: "Creation-Time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						lastModified: {
							serializedName: "Last-Modified",
							required: !0,
							xmlName: "Last-Modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						etag: {
							serializedName: "Etag",
							required: !0,
							xmlName: "Etag",
							type: {
								name: "String"
							}
						},
						contentLength: {
							serializedName: "Content-Length",
							xmlName: "Content-Length",
							type: {
								name: "Number"
							}
						},
						contentType: {
							serializedName: "Content-Type",
							xmlName: "Content-Type",
							type: {
								name: "String"
							}
						},
						contentEncoding: {
							serializedName: "Content-Encoding",
							xmlName: "Content-Encoding",
							type: {
								name: "String"
							}
						},
						contentLanguage: {
							serializedName: "Content-Language",
							xmlName: "Content-Language",
							type: {
								name: "String"
							}
						},
						contentMD5: {
							serializedName: "Content-MD5",
							xmlName: "Content-MD5",
							type: {
								name: "ByteArray"
							}
						},
						contentDisposition: {
							serializedName: "Content-Disposition",
							xmlName: "Content-Disposition",
							type: {
								name: "String"
							}
						},
						cacheControl: {
							serializedName: "Cache-Control",
							xmlName: "Cache-Control",
							type: {
								name: "String"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						blobType: {
							serializedName: "BlobType",
							xmlName: "BlobType",
							type: {
								name: "Enum",
								allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
							}
						},
						leaseStatus: {
							serializedName: "LeaseStatus",
							xmlName: "LeaseStatus",
							type: {
								name: "Enum",
								allowedValues: ["locked", "unlocked"]
							}
						},
						leaseState: {
							serializedName: "LeaseState",
							xmlName: "LeaseState",
							type: {
								name: "Enum",
								allowedValues: ["available", "leased", "expired", "breaking", "broken"]
							}
						},
						leaseDuration: {
							serializedName: "LeaseDuration",
							xmlName: "LeaseDuration",
							type: {
								name: "Enum",
								allowedValues: ["infinite", "fixed"]
							}
						},
						copyId: {
							serializedName: "CopyId",
							xmlName: "CopyId",
							type: {
								name: "String"
							}
						},
						copyStatus: {
							serializedName: "CopyStatus",
							xmlName: "CopyStatus",
							type: {
								name: "Enum",
								allowedValues: ["pending", "success", "aborted", "failed"]
							}
						},
						copySource: {
							serializedName: "CopySource",
							xmlName: "CopySource",
							type: {
								name: "String"
							}
						},
						copyProgress: {
							serializedName: "CopyProgress",
							xmlName: "CopyProgress",
							type: {
								name: "String"
							}
						},
						copyCompletedOn: {
							serializedName: "CopyCompletionTime",
							xmlName: "CopyCompletionTime",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						copyStatusDescription: {
							serializedName: "CopyStatusDescription",
							xmlName: "CopyStatusDescription",
							type: {
								name: "String"
							}
						},
						serverEncrypted: {
							serializedName: "ServerEncrypted",
							xmlName: "ServerEncrypted",
							type: {
								name: "Boolean"
							}
						},
						incrementalCopy: {
							serializedName: "IncrementalCopy",
							xmlName: "IncrementalCopy",
							type: {
								name: "Boolean"
							}
						},
						destinationSnapshot: {
							serializedName: "DestinationSnapshot",
							xmlName: "DestinationSnapshot",
							type: {
								name: "String"
							}
						},
						deletedOn: {
							serializedName: "DeletedTime",
							xmlName: "DeletedTime",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						remainingRetentionDays: {
							serializedName: "RemainingRetentionDays",
							xmlName: "RemainingRetentionDays",
							type: {
								name: "Number"
							}
						},
						accessTier: {
							serializedName: "AccessTier",
							xmlName: "AccessTier",
							type: {
								name: "Enum",
								allowedValues: ["P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Cold"]
							}
						},
						accessTierInferred: {
							serializedName: "AccessTierInferred",
							xmlName: "AccessTierInferred",
							type: {
								name: "Boolean"
							}
						},
						archiveStatus: {
							serializedName: "ArchiveStatus",
							xmlName: "ArchiveStatus",
							type: {
								name: "Enum",
								allowedValues: ["rehydrate-pending-to-hot", "rehydrate-pending-to-cool"]
							}
						},
						customerProvidedKeySha256: {
							serializedName: "CustomerProvidedKeySha256",
							xmlName: "CustomerProvidedKeySha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "EncryptionScope",
							xmlName: "EncryptionScope",
							type: {
								name: "String"
							}
						},
						accessTierChangedOn: {
							serializedName: "AccessTierChangeTime",
							xmlName: "AccessTierChangeTime",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						tagCount: {
							serializedName: "TagCount",
							xmlName: "TagCount",
							type: {
								name: "Number"
							}
						},
						expiresOn: {
							serializedName: "Expiry-Time",
							xmlName: "Expiry-Time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isSealed: {
							serializedName: "Sealed",
							xmlName: "Sealed",
							type: {
								name: "Boolean"
							}
						},
						rehydratePriority: {
							serializedName: "RehydratePriority",
							xmlName: "RehydratePriority",
							type: {
								name: "Enum",
								allowedValues: ["High", "Standard"]
							}
						},
						lastAccessedOn: {
							serializedName: "LastAccessTime",
							xmlName: "LastAccessTime",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						immutabilityPolicyExpiresOn: {
							serializedName: "ImmutabilityPolicyUntilDate",
							xmlName: "ImmutabilityPolicyUntilDate",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						immutabilityPolicyMode: {
							serializedName: "ImmutabilityPolicyMode",
							xmlName: "ImmutabilityPolicyMode",
							type: {
								name: "Enum",
								allowedValues: ["Mutable", "Unlocked", "Locked"]
							}
						},
						legalHold: {
							serializedName: "LegalHold",
							xmlName: "LegalHold",
							type: {
								name: "Boolean"
							}
						}
					}
				}
			},
			ky = {
				serializedName: "ListBlobsHierarchySegmentResponse",
				xmlName: "EnumerationResults",
				type: {
					name: "Composite",
					className: "ListBlobsHierarchySegmentResponse",
					modelProperties: {
						serviceEndpoint: {
							serializedName: "ServiceEndpoint",
							required: !0,
							xmlName: "ServiceEndpoint",
							xmlIsAttribute: !0,
							type: {
								name: "String"
							}
						},
						containerName: {
							serializedName: "ContainerName",
							required: !0,
							xmlName: "ContainerName",
							xmlIsAttribute: !0,
							type: {
								name: "String"
							}
						},
						prefix: {
							serializedName: "Prefix",
							xmlName: "Prefix",
							type: {
								name: "String"
							}
						},
						marker: {
							serializedName: "Marker",
							xmlName: "Marker",
							type: {
								name: "String"
							}
						},
						maxPageSize: {
							serializedName: "MaxResults",
							xmlName: "MaxResults",
							type: {
								name: "Number"
							}
						},
						delimiter: {
							serializedName: "Delimiter",
							xmlName: "Delimiter",
							type: {
								name: "String"
							}
						},
						segment: {
							serializedName: "Segment",
							xmlName: "Blobs",
							type: {
								name: "Composite",
								className: "BlobHierarchyListSegment"
							}
						},
						continuationToken: {
							serializedName: "NextMarker",
							xmlName: "NextMarker",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ay = {
				serializedName: "BlobHierarchyListSegment",
				xmlName: "Blobs",
				type: {
					name: "Composite",
					className: "BlobHierarchyListSegment",
					modelProperties: {
						blobPrefixes: {
							serializedName: "BlobPrefixes",
							xmlName: "BlobPrefixes",
							xmlElementName: "BlobPrefix",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "BlobPrefix"
									}
								}
							}
						},
						blobItems: {
							serializedName: "BlobItems",
							required: !0,
							xmlName: "BlobItems",
							xmlElementName: "Blob",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "BlobItemInternal"
									}
								}
							}
						}
					}
				}
			},
			Iy = {
				serializedName: "BlobPrefix",
				type: {
					name: "Composite",
					className: "BlobPrefix",
					modelProperties: {
						name: {
							serializedName: "Name",
							xmlName: "Name",
							type: {
								name: "Composite",
								className: "BlobName"
							}
						}
					}
				}
			},
			By = {
				serializedName: "BlockLookupList",
				xmlName: "BlockList",
				type: {
					name: "Composite",
					className: "BlockLookupList",
					modelProperties: {
						committed: {
							serializedName: "Committed",
							xmlName: "Committed",
							xmlElementName: "Committed",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "String"
									}
								}
							}
						},
						uncommitted: {
							serializedName: "Uncommitted",
							xmlName: "Uncommitted",
							xmlElementName: "Uncommitted",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "String"
									}
								}
							}
						},
						latest: {
							serializedName: "Latest",
							xmlName: "Latest",
							xmlElementName: "Latest",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "String"
									}
								}
							}
						}
					}
				}
			},
			My = {
				serializedName: "BlockList",
				type: {
					name: "Composite",
					className: "BlockList",
					modelProperties: {
						committedBlocks: {
							serializedName: "CommittedBlocks",
							xmlName: "CommittedBlocks",
							xmlIsWrapped: !0,
							xmlElementName: "Block",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "Block"
									}
								}
							}
						},
						uncommittedBlocks: {
							serializedName: "UncommittedBlocks",
							xmlName: "UncommittedBlocks",
							xmlIsWrapped: !0,
							xmlElementName: "Block",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "Block"
									}
								}
							}
						}
					}
				}
			},
			qy = {
				serializedName: "Block",
				type: {
					name: "Composite",
					className: "Block",
					modelProperties: {
						name: {
							serializedName: "Name",
							required: !0,
							xmlName: "Name",
							type: {
								name: "String"
							}
						},
						size: {
							serializedName: "Size",
							required: !0,
							xmlName: "Size",
							type: {
								name: "Number"
							}
						}
					}
				}
			},
			_y = {
				serializedName: "PageList",
				type: {
					name: "Composite",
					className: "PageList",
					modelProperties: {
						pageRange: {
							serializedName: "PageRange",
							xmlName: "PageRange",
							xmlElementName: "PageRange",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "PageRange"
									}
								}
							}
						},
						clearRange: {
							serializedName: "ClearRange",
							xmlName: "ClearRange",
							xmlElementName: "ClearRange",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "ClearRange"
									}
								}
							}
						},
						continuationToken: {
							serializedName: "NextMarker",
							xmlName: "NextMarker",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Dy = {
				serializedName: "PageRange",
				xmlName: "PageRange",
				type: {
					name: "Composite",
					className: "PageRange",
					modelProperties: {
						start: {
							serializedName: "Start",
							required: !0,
							xmlName: "Start",
							type: {
								name: "Number"
							}
						},
						end: {
							serializedName: "End",
							required: !0,
							xmlName: "End",
							type: {
								name: "Number"
							}
						}
					}
				}
			},
			Ly = {
				serializedName: "ClearRange",
				xmlName: "ClearRange",
				type: {
					name: "Composite",
					className: "ClearRange",
					modelProperties: {
						start: {
							serializedName: "Start",
							required: !0,
							xmlName: "Start",
							type: {
								name: "Number"
							}
						},
						end: {
							serializedName: "End",
							required: !0,
							xmlName: "End",
							type: {
								name: "Number"
							}
						}
					}
				}
			},
			Hy = {
				serializedName: "QueryRequest",
				xmlName: "QueryRequest",
				type: {
					name: "Composite",
					className: "QueryRequest",
					modelProperties: {
						queryType: {
							serializedName: "QueryType",
							required: !0,
							xmlName: "QueryType",
							type: {
								name: "String"
							}
						},
						expression: {
							serializedName: "Expression",
							required: !0,
							xmlName: "Expression",
							type: {
								name: "String"
							}
						},
						inputSerialization: {
							serializedName: "InputSerialization",
							xmlName: "InputSerialization",
							type: {
								name: "Composite",
								className: "QuerySerialization"
							}
						},
						outputSerialization: {
							serializedName: "OutputSerialization",
							xmlName: "OutputSerialization",
							type: {
								name: "Composite",
								className: "QuerySerialization"
							}
						}
					}
				}
			},
			Uy = {
				serializedName: "QuerySerialization",
				type: {
					name: "Composite",
					className: "QuerySerialization",
					modelProperties: {
						format: {
							serializedName: "Format",
							xmlName: "Format",
							type: {
								name: "Composite",
								className: "QueryFormat"
							}
						}
					}
				}
			},
			jy = {
				serializedName: "QueryFormat",
				type: {
					name: "Composite",
					className: "QueryFormat",
					modelProperties: {
						type: {
							serializedName: "Type",
							required: !0,
							xmlName: "Type",
							type: {
								name: "Enum",
								allowedValues: ["delimited", "json", "arrow", "parquet"]
							}
						},
						delimitedTextConfiguration: {
							serializedName: "DelimitedTextConfiguration",
							xmlName: "DelimitedTextConfiguration",
							type: {
								name: "Composite",
								className: "DelimitedTextConfiguration"
							}
						},
						jsonTextConfiguration: {
							serializedName: "JsonTextConfiguration",
							xmlName: "JsonTextConfiguration",
							type: {
								name: "Composite",
								className: "JsonTextConfiguration"
							}
						},
						arrowConfiguration: {
							serializedName: "ArrowConfiguration",
							xmlName: "ArrowConfiguration",
							type: {
								name: "Composite",
								className: "ArrowConfiguration"
							}
						},
						parquetTextConfiguration: {
							serializedName: "ParquetTextConfiguration",
							xmlName: "ParquetTextConfiguration",
							type: {
								name: "any"
							}
						}
					}
				}
			},
			$y = {
				serializedName: "DelimitedTextConfiguration",
				xmlName: "DelimitedTextConfiguration",
				type: {
					name: "Composite",
					className: "DelimitedTextConfiguration",
					modelProperties: {
						columnSeparator: {
							serializedName: "ColumnSeparator",
							xmlName: "ColumnSeparator",
							type: {
								name: "String"
							}
						},
						fieldQuote: {
							serializedName: "FieldQuote",
							xmlName: "FieldQuote",
							type: {
								name: "String"
							}
						},
						recordSeparator: {
							serializedName: "RecordSeparator",
							xmlName: "RecordSeparator",
							type: {
								name: "String"
							}
						},
						escapeChar: {
							serializedName: "EscapeChar",
							xmlName: "EscapeChar",
							type: {
								name: "String"
							}
						},
						headersPresent: {
							serializedName: "HeadersPresent",
							xmlName: "HasHeaders",
							type: {
								name: "Boolean"
							}
						}
					}
				}
			},
			Fy = {
				serializedName: "JsonTextConfiguration",
				xmlName: "JsonTextConfiguration",
				type: {
					name: "Composite",
					className: "JsonTextConfiguration",
					modelProperties: {
						recordSeparator: {
							serializedName: "RecordSeparator",
							xmlName: "RecordSeparator",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Vy = {
				serializedName: "ArrowConfiguration",
				xmlName: "ArrowConfiguration",
				type: {
					name: "Composite",
					className: "ArrowConfiguration",
					modelProperties: {
						schema: {
							serializedName: "Schema",
							required: !0,
							xmlName: "Schema",
							xmlIsWrapped: !0,
							xmlElementName: "Field",
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "ArrowField"
									}
								}
							}
						}
					}
				}
			},
			Ky = {
				serializedName: "ArrowField",
				xmlName: "Field",
				type: {
					name: "Composite",
					className: "ArrowField",
					modelProperties: {
						type: {
							serializedName: "Type",
							required: !0,
							xmlName: "Type",
							type: {
								name: "String"
							}
						},
						name: {
							serializedName: "Name",
							xmlName: "Name",
							type: {
								name: "String"
							}
						},
						precision: {
							serializedName: "Precision",
							xmlName: "Precision",
							type: {
								name: "Number"
							}
						},
						scale: {
							serializedName: "Scale",
							xmlName: "Scale",
							type: {
								name: "Number"
							}
						}
					}
				}
			},
			Gy = {
				serializedName: "Service_setPropertiesHeaders",
				type: {
					name: "Composite",
					className: "ServiceSetPropertiesHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Wy = {
				serializedName: "Service_setPropertiesExceptionHeaders",
				type: {
					name: "Composite",
					className: "ServiceSetPropertiesExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Xy = {
				serializedName: "Service_getPropertiesHeaders",
				type: {
					name: "Composite",
					className: "ServiceGetPropertiesHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Qy = {
				serializedName: "Service_getPropertiesExceptionHeaders",
				type: {
					name: "Composite",
					className: "ServiceGetPropertiesExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Jy = {
				serializedName: "Service_getStatisticsHeaders",
				type: {
					name: "Composite",
					className: "ServiceGetStatisticsHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Zy = {
				serializedName: "Service_getStatisticsExceptionHeaders",
				type: {
					name: "Composite",
					className: "ServiceGetStatisticsExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Yy = {
				serializedName: "Service_listContainersSegmentHeaders",
				type: {
					name: "Composite",
					className: "ServiceListContainersSegmentHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ef = {
				serializedName: "Service_listContainersSegmentExceptionHeaders",
				type: {
					name: "Composite",
					className: "ServiceListContainersSegmentExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			tf = {
				serializedName: "Service_getUserDelegationKeyHeaders",
				type: {
					name: "Composite",
					className: "ServiceGetUserDelegationKeyHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			nf = {
				serializedName: "Service_getUserDelegationKeyExceptionHeaders",
				type: {
					name: "Composite",
					className: "ServiceGetUserDelegationKeyExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			rf = {
				serializedName: "Service_getAccountInfoHeaders",
				type: {
					name: "Composite",
					className: "ServiceGetAccountInfoHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						skuName: {
							serializedName: "x-ms-sku-name",
							xmlName: "x-ms-sku-name",
							type: {
								name: "Enum",
								allowedValues: ["Standard_LRS", "Standard_GRS", "Standard_RAGRS", "Standard_ZRS", "Premium_LRS"]
							}
						},
						accountKind: {
							serializedName: "x-ms-account-kind",
							xmlName: "x-ms-account-kind",
							type: {
								name: "Enum",
								allowedValues: ["Storage", "BlobStorage", "StorageV2", "FileStorage", "BlockBlobStorage"]
							}
						},
						isHierarchicalNamespaceEnabled: {
							serializedName: "x-ms-is-hns-enabled",
							xmlName: "x-ms-is-hns-enabled",
							type: {
								name: "Boolean"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			sf = {
				serializedName: "Service_getAccountInfoExceptionHeaders",
				type: {
					name: "Composite",
					className: "ServiceGetAccountInfoExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			af = {
				serializedName: "Service_submitBatchHeaders",
				type: {
					name: "Composite",
					className: "ServiceSubmitBatchHeaders",
					modelProperties: {
						contentType: {
							serializedName: "content-type",
							xmlName: "content-type",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			of = {
				serializedName: "Service_submitBatchExceptionHeaders",
				type: {
					name: "Composite",
					className: "ServiceSubmitBatchExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			lf = {
				serializedName: "Service_filterBlobsHeaders",
				type: {
					name: "Composite",
					className: "ServiceFilterBlobsHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			cf = {
				serializedName: "Service_filterBlobsExceptionHeaders",
				type: {
					name: "Composite",
					className: "ServiceFilterBlobsExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			df = {
				serializedName: "Container_createHeaders",
				type: {
					name: "Composite",
					className: "ContainerCreateHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			mf = {
				serializedName: "Container_createExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerCreateExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			uf = {
				serializedName: "Container_getPropertiesHeaders",
				type: {
					name: "Composite",
					className: "ContainerGetPropertiesHeaders",
					modelProperties: {
						metadata: {
							serializedName: "x-ms-meta",
							xmlName: "x-ms-meta",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							},
							headerCollectionPrefix: "x-ms-meta-"
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						leaseDuration: {
							serializedName: "x-ms-lease-duration",
							xmlName: "x-ms-lease-duration",
							type: {
								name: "Enum",
								allowedValues: ["infinite", "fixed"]
							}
						},
						leaseState: {
							serializedName: "x-ms-lease-state",
							xmlName: "x-ms-lease-state",
							type: {
								name: "Enum",
								allowedValues: ["available", "leased", "expired", "breaking", "broken"]
							}
						},
						leaseStatus: {
							serializedName: "x-ms-lease-status",
							xmlName: "x-ms-lease-status",
							type: {
								name: "Enum",
								allowedValues: ["locked", "unlocked"]
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						blobPublicAccess: {
							serializedName: "x-ms-blob-public-access",
							xmlName: "x-ms-blob-public-access",
							type: {
								name: "Enum",
								allowedValues: ["container", "blob"]
							}
						},
						hasImmutabilityPolicy: {
							serializedName: "x-ms-has-immutability-policy",
							xmlName: "x-ms-has-immutability-policy",
							type: {
								name: "Boolean"
							}
						},
						hasLegalHold: {
							serializedName: "x-ms-has-legal-hold",
							xmlName: "x-ms-has-legal-hold",
							type: {
								name: "Boolean"
							}
						},
						defaultEncryptionScope: {
							serializedName: "x-ms-default-encryption-scope",
							xmlName: "x-ms-default-encryption-scope",
							type: {
								name: "String"
							}
						},
						denyEncryptionScopeOverride: {
							serializedName: "x-ms-deny-encryption-scope-override",
							xmlName: "x-ms-deny-encryption-scope-override",
							type: {
								name: "Boolean"
							}
						},
						isImmutableStorageWithVersioningEnabled: {
							serializedName: "x-ms-immutable-storage-with-versioning-enabled",
							xmlName: "x-ms-immutable-storage-with-versioning-enabled",
							type: {
								name: "Boolean"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			pf = {
				serializedName: "Container_getPropertiesExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerGetPropertiesExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			hf = {
				serializedName: "Container_deleteHeaders",
				type: {
					name: "Composite",
					className: "ContainerDeleteHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			gf = {
				serializedName: "Container_deleteExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerDeleteExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			yf = {
				serializedName: "Container_setMetadataHeaders",
				type: {
					name: "Composite",
					className: "ContainerSetMetadataHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ff = {
				serializedName: "Container_setMetadataExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerSetMetadataExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			bf = {
				serializedName: "Container_getAccessPolicyHeaders",
				type: {
					name: "Composite",
					className: "ContainerGetAccessPolicyHeaders",
					modelProperties: {
						blobPublicAccess: {
							serializedName: "x-ms-blob-public-access",
							xmlName: "x-ms-blob-public-access",
							type: {
								name: "Enum",
								allowedValues: ["container", "blob"]
							}
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			xf = {
				serializedName: "Container_getAccessPolicyExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerGetAccessPolicyExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Nf = {
				serializedName: "Container_setAccessPolicyHeaders",
				type: {
					name: "Composite",
					className: "ContainerSetAccessPolicyHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Sf = {
				serializedName: "Container_setAccessPolicyExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerSetAccessPolicyExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			vf = {
				serializedName: "Container_restoreHeaders",
				type: {
					name: "Composite",
					className: "ContainerRestoreHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			wf = {
				serializedName: "Container_restoreExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerRestoreExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Cf = {
				serializedName: "Container_renameHeaders",
				type: {
					name: "Composite",
					className: "ContainerRenameHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Pf = {
				serializedName: "Container_renameExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerRenameExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Rf = {
				serializedName: "Container_submitBatchHeaders",
				type: {
					name: "Composite",
					className: "ContainerSubmitBatchHeaders",
					modelProperties: {
						contentType: {
							serializedName: "content-type",
							xmlName: "content-type",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ef = {
				serializedName: "Container_submitBatchExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerSubmitBatchExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			zf = {
				serializedName: "Container_filterBlobsHeaders",
				type: {
					name: "Composite",
					className: "ContainerFilterBlobsHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			Of = {
				serializedName: "Container_filterBlobsExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerFilterBlobsExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Tf = {
				serializedName: "Container_acquireLeaseHeaders",
				type: {
					name: "Composite",
					className: "ContainerAcquireLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						leaseId: {
							serializedName: "x-ms-lease-id",
							xmlName: "x-ms-lease-id",
							type: {
								name: "String"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			kf = {
				serializedName: "Container_acquireLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerAcquireLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Af = {
				serializedName: "Container_releaseLeaseHeaders",
				type: {
					name: "Composite",
					className: "ContainerReleaseLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			If = {
				serializedName: "Container_releaseLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerReleaseLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Bf = {
				serializedName: "Container_renewLeaseHeaders",
				type: {
					name: "Composite",
					className: "ContainerRenewLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						leaseId: {
							serializedName: "x-ms-lease-id",
							xmlName: "x-ms-lease-id",
							type: {
								name: "String"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			Mf = {
				serializedName: "Container_renewLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerRenewLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			qf = {
				serializedName: "Container_breakLeaseHeaders",
				type: {
					name: "Composite",
					className: "ContainerBreakLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						leaseTime: {
							serializedName: "x-ms-lease-time",
							xmlName: "x-ms-lease-time",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			_f = {
				serializedName: "Container_breakLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerBreakLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Df = {
				serializedName: "Container_changeLeaseHeaders",
				type: {
					name: "Composite",
					className: "ContainerChangeLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						leaseId: {
							serializedName: "x-ms-lease-id",
							xmlName: "x-ms-lease-id",
							type: {
								name: "String"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			Lf = {
				serializedName: "Container_changeLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerChangeLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Hf = {
				serializedName: "Container_listBlobFlatSegmentHeaders",
				type: {
					name: "Composite",
					className: "ContainerListBlobFlatSegmentHeaders",
					modelProperties: {
						contentType: {
							serializedName: "content-type",
							xmlName: "content-type",
							type: {
								name: "String"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Uf = {
				serializedName: "Container_listBlobFlatSegmentExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerListBlobFlatSegmentExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			jf = {
				serializedName: "Container_listBlobHierarchySegmentHeaders",
				type: {
					name: "Composite",
					className: "ContainerListBlobHierarchySegmentHeaders",
					modelProperties: {
						contentType: {
							serializedName: "content-type",
							xmlName: "content-type",
							type: {
								name: "String"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			$f = {
				serializedName: "Container_listBlobHierarchySegmentExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerListBlobHierarchySegmentExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ff = {
				serializedName: "Container_getAccountInfoHeaders",
				type: {
					name: "Composite",
					className: "ContainerGetAccountInfoHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						skuName: {
							serializedName: "x-ms-sku-name",
							xmlName: "x-ms-sku-name",
							type: {
								name: "Enum",
								allowedValues: ["Standard_LRS", "Standard_GRS", "Standard_RAGRS", "Standard_ZRS", "Premium_LRS"]
							}
						},
						accountKind: {
							serializedName: "x-ms-account-kind",
							xmlName: "x-ms-account-kind",
							type: {
								name: "Enum",
								allowedValues: ["Storage", "BlobStorage", "StorageV2", "FileStorage", "BlockBlobStorage"]
							}
						}
					}
				}
			},
			Vf = {
				serializedName: "Container_getAccountInfoExceptionHeaders",
				type: {
					name: "Composite",
					className: "ContainerGetAccountInfoExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Kf = {
				serializedName: "Blob_downloadHeaders",
				type: {
					name: "Composite",
					className: "BlobDownloadHeaders",
					modelProperties: {
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						createdOn: {
							serializedName: "x-ms-creation-time",
							xmlName: "x-ms-creation-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						metadata: {
							serializedName: "x-ms-meta",
							xmlName: "x-ms-meta",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							},
							headerCollectionPrefix: "x-ms-meta-"
						},
						objectReplicationPolicyId: {
							serializedName: "x-ms-or-policy-id",
							xmlName: "x-ms-or-policy-id",
							type: {
								name: "String"
							}
						},
						objectReplicationRules: {
							serializedName: "x-ms-or",
							xmlName: "x-ms-or",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							},
							headerCollectionPrefix: "x-ms-or-"
						},
						contentLength: {
							serializedName: "content-length",
							xmlName: "content-length",
							type: {
								name: "Number"
							}
						},
						contentType: {
							serializedName: "content-type",
							xmlName: "content-type",
							type: {
								name: "String"
							}
						},
						contentRange: {
							serializedName: "content-range",
							xmlName: "content-range",
							type: {
								name: "String"
							}
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						contentEncoding: {
							serializedName: "content-encoding",
							xmlName: "content-encoding",
							type: {
								name: "String"
							}
						},
						cacheControl: {
							serializedName: "cache-control",
							xmlName: "cache-control",
							type: {
								name: "String"
							}
						},
						contentDisposition: {
							serializedName: "content-disposition",
							xmlName: "content-disposition",
							type: {
								name: "String"
							}
						},
						contentLanguage: {
							serializedName: "content-language",
							xmlName: "content-language",
							type: {
								name: "String"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						blobType: {
							serializedName: "x-ms-blob-type",
							xmlName: "x-ms-blob-type",
							type: {
								name: "Enum",
								allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
							}
						},
						copyCompletedOn: {
							serializedName: "x-ms-copy-completion-time",
							xmlName: "x-ms-copy-completion-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						copyStatusDescription: {
							serializedName: "x-ms-copy-status-description",
							xmlName: "x-ms-copy-status-description",
							type: {
								name: "String"
							}
						},
						copyId: {
							serializedName: "x-ms-copy-id",
							xmlName: "x-ms-copy-id",
							type: {
								name: "String"
							}
						},
						copyProgress: {
							serializedName: "x-ms-copy-progress",
							xmlName: "x-ms-copy-progress",
							type: {
								name: "String"
							}
						},
						copySource: {
							serializedName: "x-ms-copy-source",
							xmlName: "x-ms-copy-source",
							type: {
								name: "String"
							}
						},
						copyStatus: {
							serializedName: "x-ms-copy-status",
							xmlName: "x-ms-copy-status",
							type: {
								name: "Enum",
								allowedValues: ["pending", "success", "aborted", "failed"]
							}
						},
						leaseDuration: {
							serializedName: "x-ms-lease-duration",
							xmlName: "x-ms-lease-duration",
							type: {
								name: "Enum",
								allowedValues: ["infinite", "fixed"]
							}
						},
						leaseState: {
							serializedName: "x-ms-lease-state",
							xmlName: "x-ms-lease-state",
							type: {
								name: "Enum",
								allowedValues: ["available", "leased", "expired", "breaking", "broken"]
							}
						},
						leaseStatus: {
							serializedName: "x-ms-lease-status",
							xmlName: "x-ms-lease-status",
							type: {
								name: "Enum",
								allowedValues: ["locked", "unlocked"]
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						isCurrentVersion: {
							serializedName: "x-ms-is-current-version",
							xmlName: "x-ms-is-current-version",
							type: {
								name: "Boolean"
							}
						},
						acceptRanges: {
							serializedName: "accept-ranges",
							xmlName: "accept-ranges",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						blobCommittedBlockCount: {
							serializedName: "x-ms-blob-committed-block-count",
							xmlName: "x-ms-blob-committed-block-count",
							type: {
								name: "Number"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-server-encrypted",
							xmlName: "x-ms-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						blobContentMD5: {
							serializedName: "x-ms-blob-content-md5",
							xmlName: "x-ms-blob-content-md5",
							type: {
								name: "ByteArray"
							}
						},
						tagCount: {
							serializedName: "x-ms-tag-count",
							xmlName: "x-ms-tag-count",
							type: {
								name: "Number"
							}
						},
						isSealed: {
							serializedName: "x-ms-blob-sealed",
							xmlName: "x-ms-blob-sealed",
							type: {
								name: "Boolean"
							}
						},
						lastAccessed: {
							serializedName: "x-ms-last-access-time",
							xmlName: "x-ms-last-access-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						immutabilityPolicyExpiresOn: {
							serializedName: "x-ms-immutability-policy-until-date",
							xmlName: "x-ms-immutability-policy-until-date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						immutabilityPolicyMode: {
							serializedName: "x-ms-immutability-policy-mode",
							xmlName: "x-ms-immutability-policy-mode",
							type: {
								name: "Enum",
								allowedValues: ["Mutable", "Unlocked", "Locked"]
							}
						},
						legalHold: {
							serializedName: "x-ms-legal-hold",
							xmlName: "x-ms-legal-hold",
							type: {
								name: "Boolean"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						},
						contentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						}
					}
				}
			},
			Gf = {
				serializedName: "Blob_downloadExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobDownloadExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Wf = {
				serializedName: "Blob_getPropertiesHeaders",
				type: {
					name: "Composite",
					className: "BlobGetPropertiesHeaders",
					modelProperties: {
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						createdOn: {
							serializedName: "x-ms-creation-time",
							xmlName: "x-ms-creation-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						metadata: {
							serializedName: "x-ms-meta",
							xmlName: "x-ms-meta",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							},
							headerCollectionPrefix: "x-ms-meta-"
						},
						objectReplicationPolicyId: {
							serializedName: "x-ms-or-policy-id",
							xmlName: "x-ms-or-policy-id",
							type: {
								name: "String"
							}
						},
						objectReplicationRules: {
							serializedName: "x-ms-or",
							xmlName: "x-ms-or",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							},
							headerCollectionPrefix: "x-ms-or-"
						},
						blobType: {
							serializedName: "x-ms-blob-type",
							xmlName: "x-ms-blob-type",
							type: {
								name: "Enum",
								allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
							}
						},
						copyCompletedOn: {
							serializedName: "x-ms-copy-completion-time",
							xmlName: "x-ms-copy-completion-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						copyStatusDescription: {
							serializedName: "x-ms-copy-status-description",
							xmlName: "x-ms-copy-status-description",
							type: {
								name: "String"
							}
						},
						copyId: {
							serializedName: "x-ms-copy-id",
							xmlName: "x-ms-copy-id",
							type: {
								name: "String"
							}
						},
						copyProgress: {
							serializedName: "x-ms-copy-progress",
							xmlName: "x-ms-copy-progress",
							type: {
								name: "String"
							}
						},
						copySource: {
							serializedName: "x-ms-copy-source",
							xmlName: "x-ms-copy-source",
							type: {
								name: "String"
							}
						},
						copyStatus: {
							serializedName: "x-ms-copy-status",
							xmlName: "x-ms-copy-status",
							type: {
								name: "Enum",
								allowedValues: ["pending", "success", "aborted", "failed"]
							}
						},
						isIncrementalCopy: {
							serializedName: "x-ms-incremental-copy",
							xmlName: "x-ms-incremental-copy",
							type: {
								name: "Boolean"
							}
						},
						destinationSnapshot: {
							serializedName: "x-ms-copy-destination-snapshot",
							xmlName: "x-ms-copy-destination-snapshot",
							type: {
								name: "String"
							}
						},
						leaseDuration: {
							serializedName: "x-ms-lease-duration",
							xmlName: "x-ms-lease-duration",
							type: {
								name: "Enum",
								allowedValues: ["infinite", "fixed"]
							}
						},
						leaseState: {
							serializedName: "x-ms-lease-state",
							xmlName: "x-ms-lease-state",
							type: {
								name: "Enum",
								allowedValues: ["available", "leased", "expired", "breaking", "broken"]
							}
						},
						leaseStatus: {
							serializedName: "x-ms-lease-status",
							xmlName: "x-ms-lease-status",
							type: {
								name: "Enum",
								allowedValues: ["locked", "unlocked"]
							}
						},
						contentLength: {
							serializedName: "content-length",
							xmlName: "content-length",
							type: {
								name: "Number"
							}
						},
						contentType: {
							serializedName: "content-type",
							xmlName: "content-type",
							type: {
								name: "String"
							}
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						contentEncoding: {
							serializedName: "content-encoding",
							xmlName: "content-encoding",
							type: {
								name: "String"
							}
						},
						contentDisposition: {
							serializedName: "content-disposition",
							xmlName: "content-disposition",
							type: {
								name: "String"
							}
						},
						contentLanguage: {
							serializedName: "content-language",
							xmlName: "content-language",
							type: {
								name: "String"
							}
						},
						cacheControl: {
							serializedName: "cache-control",
							xmlName: "cache-control",
							type: {
								name: "String"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						acceptRanges: {
							serializedName: "accept-ranges",
							xmlName: "accept-ranges",
							type: {
								name: "String"
							}
						},
						blobCommittedBlockCount: {
							serializedName: "x-ms-blob-committed-block-count",
							xmlName: "x-ms-blob-committed-block-count",
							type: {
								name: "Number"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-server-encrypted",
							xmlName: "x-ms-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						accessTier: {
							serializedName: "x-ms-access-tier",
							xmlName: "x-ms-access-tier",
							type: {
								name: "String"
							}
						},
						accessTierInferred: {
							serializedName: "x-ms-access-tier-inferred",
							xmlName: "x-ms-access-tier-inferred",
							type: {
								name: "Boolean"
							}
						},
						archiveStatus: {
							serializedName: "x-ms-archive-status",
							xmlName: "x-ms-archive-status",
							type: {
								name: "String"
							}
						},
						accessTierChangedOn: {
							serializedName: "x-ms-access-tier-change-time",
							xmlName: "x-ms-access-tier-change-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						isCurrentVersion: {
							serializedName: "x-ms-is-current-version",
							xmlName: "x-ms-is-current-version",
							type: {
								name: "Boolean"
							}
						},
						tagCount: {
							serializedName: "x-ms-tag-count",
							xmlName: "x-ms-tag-count",
							type: {
								name: "Number"
							}
						},
						expiresOn: {
							serializedName: "x-ms-expiry-time",
							xmlName: "x-ms-expiry-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isSealed: {
							serializedName: "x-ms-blob-sealed",
							xmlName: "x-ms-blob-sealed",
							type: {
								name: "Boolean"
							}
						},
						rehydratePriority: {
							serializedName: "x-ms-rehydrate-priority",
							xmlName: "x-ms-rehydrate-priority",
							type: {
								name: "Enum",
								allowedValues: ["High", "Standard"]
							}
						},
						lastAccessed: {
							serializedName: "x-ms-last-access-time",
							xmlName: "x-ms-last-access-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						immutabilityPolicyExpiresOn: {
							serializedName: "x-ms-immutability-policy-until-date",
							xmlName: "x-ms-immutability-policy-until-date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						immutabilityPolicyMode: {
							serializedName: "x-ms-immutability-policy-mode",
							xmlName: "x-ms-immutability-policy-mode",
							type: {
								name: "Enum",
								allowedValues: ["Mutable", "Unlocked", "Locked"]
							}
						},
						legalHold: {
							serializedName: "x-ms-legal-hold",
							xmlName: "x-ms-legal-hold",
							type: {
								name: "Boolean"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Xf = {
				serializedName: "Blob_getPropertiesExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobGetPropertiesExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Qf = {
				serializedName: "Blob_deleteHeaders",
				type: {
					name: "Composite",
					className: "BlobDeleteHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Jf = {
				serializedName: "Blob_deleteExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobDeleteExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Zf = {
				serializedName: "Blob_undeleteHeaders",
				type: {
					name: "Composite",
					className: "BlobUndeleteHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Yf = {
				serializedName: "Blob_undeleteExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobUndeleteExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			eb = {
				serializedName: "Blob_setExpiryHeaders",
				type: {
					name: "Composite",
					className: "BlobSetExpiryHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			tb = {
				serializedName: "Blob_setExpiryExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobSetExpiryExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			nb = {
				serializedName: "Blob_setHttpHeadersHeaders",
				type: {
					name: "Composite",
					className: "BlobSetHttpHeadersHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			rb = {
				serializedName: "Blob_setHttpHeadersExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobSetHttpHeadersExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			sb = {
				serializedName: "Blob_setImmutabilityPolicyHeaders",
				type: {
					name: "Composite",
					className: "BlobSetImmutabilityPolicyHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						immutabilityPolicyExpiry: {
							serializedName: "x-ms-immutability-policy-until-date",
							xmlName: "x-ms-immutability-policy-until-date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						immutabilityPolicyMode: {
							serializedName: "x-ms-immutability-policy-mode",
							xmlName: "x-ms-immutability-policy-mode",
							type: {
								name: "Enum",
								allowedValues: ["Mutable", "Unlocked", "Locked"]
							}
						}
					}
				}
			},
			ib = {
				serializedName: "Blob_setImmutabilityPolicyExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobSetImmutabilityPolicyExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ab = {
				serializedName: "Blob_deleteImmutabilityPolicyHeaders",
				type: {
					name: "Composite",
					className: "BlobDeleteImmutabilityPolicyHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			ob = {
				serializedName: "Blob_deleteImmutabilityPolicyExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobDeleteImmutabilityPolicyExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			lb = {
				serializedName: "Blob_setLegalHoldHeaders",
				type: {
					name: "Composite",
					className: "BlobSetLegalHoldHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						legalHold: {
							serializedName: "x-ms-legal-hold",
							xmlName: "x-ms-legal-hold",
							type: {
								name: "Boolean"
							}
						}
					}
				}
			},
			cb = {
				serializedName: "Blob_setLegalHoldExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobSetLegalHoldExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			db = {
				serializedName: "Blob_setMetadataHeaders",
				type: {
					name: "Composite",
					className: "BlobSetMetadataHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			mb = {
				serializedName: "Blob_setMetadataExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobSetMetadataExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ub = {
				serializedName: "Blob_acquireLeaseHeaders",
				type: {
					name: "Composite",
					className: "BlobAcquireLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						leaseId: {
							serializedName: "x-ms-lease-id",
							xmlName: "x-ms-lease-id",
							type: {
								name: "String"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			pb = {
				serializedName: "Blob_acquireLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobAcquireLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			hb = {
				serializedName: "Blob_releaseLeaseHeaders",
				type: {
					name: "Composite",
					className: "BlobReleaseLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			gb = {
				serializedName: "Blob_releaseLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobReleaseLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			yb = {
				serializedName: "Blob_renewLeaseHeaders",
				type: {
					name: "Composite",
					className: "BlobRenewLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						leaseId: {
							serializedName: "x-ms-lease-id",
							xmlName: "x-ms-lease-id",
							type: {
								name: "String"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			fb = {
				serializedName: "Blob_renewLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobRenewLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			bb = {
				serializedName: "Blob_changeLeaseHeaders",
				type: {
					name: "Composite",
					className: "BlobChangeLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						leaseId: {
							serializedName: "x-ms-lease-id",
							xmlName: "x-ms-lease-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			xb = {
				serializedName: "Blob_changeLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobChangeLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Nb = {
				serializedName: "Blob_breakLeaseHeaders",
				type: {
					name: "Composite",
					className: "BlobBreakLeaseHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						leaseTime: {
							serializedName: "x-ms-lease-time",
							xmlName: "x-ms-lease-time",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						}
					}
				}
			},
			Sb = {
				serializedName: "Blob_breakLeaseExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobBreakLeaseExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			vb = {
				serializedName: "Blob_createSnapshotHeaders",
				type: {
					name: "Composite",
					className: "BlobCreateSnapshotHeaders",
					modelProperties: {
						snapshot: {
							serializedName: "x-ms-snapshot",
							xmlName: "x-ms-snapshot",
							type: {
								name: "String"
							}
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			wb = {
				serializedName: "Blob_createSnapshotExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobCreateSnapshotExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Cb = {
				serializedName: "Blob_startCopyFromURLHeaders",
				type: {
					name: "Composite",
					className: "BlobStartCopyFromURLHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						copyId: {
							serializedName: "x-ms-copy-id",
							xmlName: "x-ms-copy-id",
							type: {
								name: "String"
							}
						},
						copyStatus: {
							serializedName: "x-ms-copy-status",
							xmlName: "x-ms-copy-status",
							type: {
								name: "Enum",
								allowedValues: ["pending", "success", "aborted", "failed"]
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Pb = {
				serializedName: "Blob_startCopyFromURLExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobStartCopyFromURLExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Rb = {
				serializedName: "Blob_copyFromURLHeaders",
				type: {
					name: "Composite",
					className: "BlobCopyFromURLHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						copyId: {
							serializedName: "x-ms-copy-id",
							xmlName: "x-ms-copy-id",
							type: {
								name: "String"
							}
						},
						copyStatus: {
							defaultValue: "success",
							isConstant: !0,
							serializedName: "x-ms-copy-status",
							type: {
								name: "String"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Eb = {
				serializedName: "Blob_copyFromURLExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobCopyFromURLExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			zb = {
				serializedName: "Blob_abortCopyFromURLHeaders",
				type: {
					name: "Composite",
					className: "BlobAbortCopyFromURLHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ob = {
				serializedName: "Blob_abortCopyFromURLExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobAbortCopyFromURLExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Tb = {
				serializedName: "Blob_setTierHeaders",
				type: {
					name: "Composite",
					className: "BlobSetTierHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			kb = {
				serializedName: "Blob_setTierExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobSetTierExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ab = {
				serializedName: "Blob_getAccountInfoHeaders",
				type: {
					name: "Composite",
					className: "BlobGetAccountInfoHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						skuName: {
							serializedName: "x-ms-sku-name",
							xmlName: "x-ms-sku-name",
							type: {
								name: "Enum",
								allowedValues: ["Standard_LRS", "Standard_GRS", "Standard_RAGRS", "Standard_ZRS", "Premium_LRS"]
							}
						},
						accountKind: {
							serializedName: "x-ms-account-kind",
							xmlName: "x-ms-account-kind",
							type: {
								name: "Enum",
								allowedValues: ["Storage", "BlobStorage", "StorageV2", "FileStorage", "BlockBlobStorage"]
							}
						}
					}
				}
			},
			Ib = {
				serializedName: "Blob_getAccountInfoExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobGetAccountInfoExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Bb = {
				serializedName: "Blob_queryHeaders",
				type: {
					name: "Composite",
					className: "BlobQueryHeaders",
					modelProperties: {
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						metadata: {
							serializedName: "x-ms-meta",
							xmlName: "x-ms-meta",
							type: {
								name: "Dictionary",
								value: {
									type: {
										name: "String"
									}
								}
							}
						},
						contentLength: {
							serializedName: "content-length",
							xmlName: "content-length",
							type: {
								name: "Number"
							}
						},
						contentType: {
							serializedName: "content-type",
							xmlName: "content-type",
							type: {
								name: "String"
							}
						},
						contentRange: {
							serializedName: "content-range",
							xmlName: "content-range",
							type: {
								name: "String"
							}
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						contentEncoding: {
							serializedName: "content-encoding",
							xmlName: "content-encoding",
							type: {
								name: "String"
							}
						},
						cacheControl: {
							serializedName: "cache-control",
							xmlName: "cache-control",
							type: {
								name: "String"
							}
						},
						contentDisposition: {
							serializedName: "content-disposition",
							xmlName: "content-disposition",
							type: {
								name: "String"
							}
						},
						contentLanguage: {
							serializedName: "content-language",
							xmlName: "content-language",
							type: {
								name: "String"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						blobType: {
							serializedName: "x-ms-blob-type",
							xmlName: "x-ms-blob-type",
							type: {
								name: "Enum",
								allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
							}
						},
						copyCompletionTime: {
							serializedName: "x-ms-copy-completion-time",
							xmlName: "x-ms-copy-completion-time",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						copyStatusDescription: {
							serializedName: "x-ms-copy-status-description",
							xmlName: "x-ms-copy-status-description",
							type: {
								name: "String"
							}
						},
						copyId: {
							serializedName: "x-ms-copy-id",
							xmlName: "x-ms-copy-id",
							type: {
								name: "String"
							}
						},
						copyProgress: {
							serializedName: "x-ms-copy-progress",
							xmlName: "x-ms-copy-progress",
							type: {
								name: "String"
							}
						},
						copySource: {
							serializedName: "x-ms-copy-source",
							xmlName: "x-ms-copy-source",
							type: {
								name: "String"
							}
						},
						copyStatus: {
							serializedName: "x-ms-copy-status",
							xmlName: "x-ms-copy-status",
							type: {
								name: "Enum",
								allowedValues: ["pending", "success", "aborted", "failed"]
							}
						},
						leaseDuration: {
							serializedName: "x-ms-lease-duration",
							xmlName: "x-ms-lease-duration",
							type: {
								name: "Enum",
								allowedValues: ["infinite", "fixed"]
							}
						},
						leaseState: {
							serializedName: "x-ms-lease-state",
							xmlName: "x-ms-lease-state",
							type: {
								name: "Enum",
								allowedValues: ["available", "leased", "expired", "breaking", "broken"]
							}
						},
						leaseStatus: {
							serializedName: "x-ms-lease-status",
							xmlName: "x-ms-lease-status",
							type: {
								name: "Enum",
								allowedValues: ["locked", "unlocked"]
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						acceptRanges: {
							serializedName: "accept-ranges",
							xmlName: "accept-ranges",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						blobCommittedBlockCount: {
							serializedName: "x-ms-blob-committed-block-count",
							xmlName: "x-ms-blob-committed-block-count",
							type: {
								name: "Number"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-server-encrypted",
							xmlName: "x-ms-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						blobContentMD5: {
							serializedName: "x-ms-blob-content-md5",
							xmlName: "x-ms-blob-content-md5",
							type: {
								name: "ByteArray"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						},
						contentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						}
					}
				}
			},
			Mb = {
				serializedName: "Blob_queryExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobQueryExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			qb = {
				serializedName: "Blob_getTagsHeaders",
				type: {
					name: "Composite",
					className: "BlobGetTagsHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			_b = {
				serializedName: "Blob_getTagsExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobGetTagsExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Db = {
				serializedName: "Blob_setTagsHeaders",
				type: {
					name: "Composite",
					className: "BlobSetTagsHeaders",
					modelProperties: {
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Lb = {
				serializedName: "Blob_setTagsExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlobSetTagsExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Hb = {
				serializedName: "PageBlob_createHeaders",
				type: {
					name: "Composite",
					className: "PageBlobCreateHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Ub = {
				serializedName: "PageBlob_createExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobCreateExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			jb = {
				serializedName: "PageBlob_uploadPagesHeaders",
				type: {
					name: "Composite",
					className: "PageBlobUploadPagesHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			$b = {
				serializedName: "PageBlob_uploadPagesExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobUploadPagesExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Fb = {
				serializedName: "PageBlob_clearPagesHeaders",
				type: {
					name: "Composite",
					className: "PageBlobClearPagesHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Vb = {
				serializedName: "PageBlob_clearPagesExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobClearPagesExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Kb = {
				serializedName: "PageBlob_uploadPagesFromURLHeaders",
				type: {
					name: "Composite",
					className: "PageBlobUploadPagesFromURLHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Gb = {
				serializedName: "PageBlob_uploadPagesFromURLExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobUploadPagesFromURLExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Wb = {
				serializedName: "PageBlob_getPageRangesHeaders",
				type: {
					name: "Composite",
					className: "PageBlobGetPageRangesHeaders",
					modelProperties: {
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						blobContentLength: {
							serializedName: "x-ms-blob-content-length",
							xmlName: "x-ms-blob-content-length",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Xb = {
				serializedName: "PageBlob_getPageRangesExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobGetPageRangesExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Qb = {
				serializedName: "PageBlob_getPageRangesDiffHeaders",
				type: {
					name: "Composite",
					className: "PageBlobGetPageRangesDiffHeaders",
					modelProperties: {
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						blobContentLength: {
							serializedName: "x-ms-blob-content-length",
							xmlName: "x-ms-blob-content-length",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Jb = {
				serializedName: "PageBlob_getPageRangesDiffExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobGetPageRangesDiffExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Zb = {
				serializedName: "PageBlob_resizeHeaders",
				type: {
					name: "Composite",
					className: "PageBlobResizeHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Yb = {
				serializedName: "PageBlob_resizeExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobResizeExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ex = {
				serializedName: "PageBlob_updateSequenceNumberHeaders",
				type: {
					name: "Composite",
					className: "PageBlobUpdateSequenceNumberHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						blobSequenceNumber: {
							serializedName: "x-ms-blob-sequence-number",
							xmlName: "x-ms-blob-sequence-number",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			tx = {
				serializedName: "PageBlob_updateSequenceNumberExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobUpdateSequenceNumberExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			nx = {
				serializedName: "PageBlob_copyIncrementalHeaders",
				type: {
					name: "Composite",
					className: "PageBlobCopyIncrementalHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						copyId: {
							serializedName: "x-ms-copy-id",
							xmlName: "x-ms-copy-id",
							type: {
								name: "String"
							}
						},
						copyStatus: {
							serializedName: "x-ms-copy-status",
							xmlName: "x-ms-copy-status",
							type: {
								name: "Enum",
								allowedValues: ["pending", "success", "aborted", "failed"]
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			rx = {
				serializedName: "PageBlob_copyIncrementalExceptionHeaders",
				type: {
					name: "Composite",
					className: "PageBlobCopyIncrementalExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			sx = {
				serializedName: "AppendBlob_createHeaders",
				type: {
					name: "Composite",
					className: "AppendBlobCreateHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ix = {
				serializedName: "AppendBlob_createExceptionHeaders",
				type: {
					name: "Composite",
					className: "AppendBlobCreateExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ax = {
				serializedName: "AppendBlob_appendBlockHeaders",
				type: {
					name: "Composite",
					className: "AppendBlobAppendBlockHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						blobAppendOffset: {
							serializedName: "x-ms-blob-append-offset",
							xmlName: "x-ms-blob-append-offset",
							type: {
								name: "String"
							}
						},
						blobCommittedBlockCount: {
							serializedName: "x-ms-blob-committed-block-count",
							xmlName: "x-ms-blob-committed-block-count",
							type: {
								name: "Number"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ox = {
				serializedName: "AppendBlob_appendBlockExceptionHeaders",
				type: {
					name: "Composite",
					className: "AppendBlobAppendBlockExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			lx = {
				serializedName: "AppendBlob_appendBlockFromUrlHeaders",
				type: {
					name: "Composite",
					className: "AppendBlobAppendBlockFromUrlHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						blobAppendOffset: {
							serializedName: "x-ms-blob-append-offset",
							xmlName: "x-ms-blob-append-offset",
							type: {
								name: "String"
							}
						},
						blobCommittedBlockCount: {
							serializedName: "x-ms-blob-committed-block-count",
							xmlName: "x-ms-blob-committed-block-count",
							type: {
								name: "Number"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			cx = {
				serializedName: "AppendBlob_appendBlockFromUrlExceptionHeaders",
				type: {
					name: "Composite",
					className: "AppendBlobAppendBlockFromUrlExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			dx = {
				serializedName: "AppendBlob_sealHeaders",
				type: {
					name: "Composite",
					className: "AppendBlobSealHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isSealed: {
							serializedName: "x-ms-blob-sealed",
							xmlName: "x-ms-blob-sealed",
							type: {
								name: "Boolean"
							}
						}
					}
				}
			},
			mx = {
				serializedName: "AppendBlob_sealExceptionHeaders",
				type: {
					name: "Composite",
					className: "AppendBlobSealExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			ux = {
				serializedName: "BlockBlob_uploadHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobUploadHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			px = {
				serializedName: "BlockBlob_uploadExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobUploadExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			hx = {
				serializedName: "BlockBlob_putBlobFromUrlHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobPutBlobFromUrlHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			gx = {
				serializedName: "BlockBlob_putBlobFromUrlExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobPutBlobFromUrlExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			yx = {
				serializedName: "BlockBlob_stageBlockHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobStageBlockHeaders",
					modelProperties: {
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			fx = {
				serializedName: "BlockBlob_stageBlockExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobStageBlockExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			bx = {
				serializedName: "BlockBlob_stageBlockFromURLHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobStageBlockFromURLHeaders",
					modelProperties: {
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			xx = {
				serializedName: "BlockBlob_stageBlockFromURLExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobStageBlockFromURLExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Nx = {
				serializedName: "BlockBlob_commitBlockListHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobCommitBlockListHeaders",
					modelProperties: {
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						contentMD5: {
							serializedName: "content-md5",
							xmlName: "content-md5",
							type: {
								name: "ByteArray"
							}
						},
						xMsContentCrc64: {
							serializedName: "x-ms-content-crc64",
							xmlName: "x-ms-content-crc64",
							type: {
								name: "ByteArray"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						versionId: {
							serializedName: "x-ms-version-id",
							xmlName: "x-ms-version-id",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						isServerEncrypted: {
							serializedName: "x-ms-request-server-encrypted",
							xmlName: "x-ms-request-server-encrypted",
							type: {
								name: "Boolean"
							}
						},
						encryptionKeySha256: {
							serializedName: "x-ms-encryption-key-sha256",
							xmlName: "x-ms-encryption-key-sha256",
							type: {
								name: "String"
							}
						},
						encryptionScope: {
							serializedName: "x-ms-encryption-scope",
							xmlName: "x-ms-encryption-scope",
							type: {
								name: "String"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			Sx = {
				serializedName: "BlockBlob_commitBlockListExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobCommitBlockListExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			vx = {
				serializedName: "BlockBlob_getBlockListHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobGetBlockListHeaders",
					modelProperties: {
						lastModified: {
							serializedName: "last-modified",
							xmlName: "last-modified",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						etag: {
							serializedName: "etag",
							xmlName: "etag",
							type: {
								name: "String"
							}
						},
						contentType: {
							serializedName: "content-type",
							xmlName: "content-type",
							type: {
								name: "String"
							}
						},
						blobContentLength: {
							serializedName: "x-ms-blob-content-length",
							xmlName: "x-ms-blob-content-length",
							type: {
								name: "Number"
							}
						},
						clientRequestId: {
							serializedName: "x-ms-client-request-id",
							xmlName: "x-ms-client-request-id",
							type: {
								name: "String"
							}
						},
						requestId: {
							serializedName: "x-ms-request-id",
							xmlName: "x-ms-request-id",
							type: {
								name: "String"
							}
						},
						version: {
							serializedName: "x-ms-version",
							xmlName: "x-ms-version",
							type: {
								name: "String"
							}
						},
						date: {
							serializedName: "date",
							xmlName: "date",
							type: {
								name: "DateTimeRfc1123"
							}
						},
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			},
			wx = {
				serializedName: "BlockBlob_getBlockListExceptionHeaders",
				type: {
					name: "Composite",
					className: "BlockBlobGetBlockListExceptionHeaders",
					modelProperties: {
						errorCode: {
							serializedName: "x-ms-error-code",
							xmlName: "x-ms-error-code",
							type: {
								name: "String"
							}
						}
					}
				}
			};
		var Cx;
		! function(e) {
			e.Csv = ",", e.Ssv = " ", e.Tsv = "\t", e.Pipes = "|", e.Multi = "Multi"
		}(Cx || (Cx = {}));
		const Px = {
				parameterPath: ["options", "contentType"],
				mapper: {
					defaultValue: "application/xml",
					isConstant: !0,
					serializedName: "Content-Type",
					type: {
						name: "String"
					}
				}
			},
			Rx = {
				parameterPath: "blobServiceProperties",
				mapper: ay
			},
			Ex = {
				parameterPath: "accept",
				mapper: {
					defaultValue: "application/xml",
					isConstant: !0,
					serializedName: "Accept",
					type: {
						name: "String"
					}
				}
			},
			zx = {
				parameterPath: "url",
				mapper: {
					serializedName: "url",
					required: !0,
					xmlName: "url",
					type: {
						name: "String"
					}
				},
				skipEncoding: !0
			},
			Ox = {
				parameterPath: "restype",
				mapper: {
					defaultValue: "service",
					isConstant: !0,
					serializedName: "restype",
					type: {
						name: "String"
					}
				}
			},
			Tx = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "properties",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			kx = {
				parameterPath: ["options", "timeoutInSeconds"],
				mapper: {
					constraints: {
						InclusiveMinimum: 0
					},
					serializedName: "timeout",
					xmlName: "timeout",
					type: {
						name: "Number"
					}
				}
			},
			Ax = {
				parameterPath: "version",
				mapper: {
					defaultValue: "2021-12-02",
					isConstant: !0,
					serializedName: "x-ms-version",
					type: {
						name: "String"
					}
				}
			},
			Ix = {
				parameterPath: ["options", "requestId"],
				mapper: {
					serializedName: "x-ms-client-request-id",
					xmlName: "x-ms-client-request-id",
					type: {
						name: "String"
					}
				}
			},
			Bx = {
				parameterPath: "accept",
				mapper: {
					defaultValue: "application/xml",
					isConstant: !0,
					serializedName: "Accept",
					type: {
						name: "String"
					}
				}
			},
			Mx = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "list",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			qx = {
				parameterPath: ["options", "prefix"],
				mapper: {
					serializedName: "prefix",
					xmlName: "prefix",
					type: {
						name: "String"
					}
				}
			},
			_x = {
				parameterPath: ["options", "marker"],
				mapper: {
					serializedName: "marker",
					xmlName: "marker",
					type: {
						name: "String"
					}
				}
			},
			Dx = {
				parameterPath: ["options", "maxPageSize"],
				mapper: {
					constraints: {
						InclusiveMinimum: 1
					},
					serializedName: "maxresults",
					xmlName: "maxresults",
					type: {
						name: "Number"
					}
				}
			},
			Lx = {
				parameterPath: ["options", "include"],
				mapper: {
					serializedName: "include",
					xmlName: "include",
					xmlElementName: "ListContainersIncludeType",
					type: {
						name: "Sequence",
						element: {
							type: {
								name: "Enum",
								allowedValues: ["metadata", "deleted", "system"]
							}
						}
					}
				},
				collectionFormat: Cx.Csv
			},
			Hx = {
				parameterPath: "keyInfo",
				mapper: by
			},
			Ux = {
				parameterPath: "restype",
				mapper: {
					defaultValue: "account",
					isConstant: !0,
					serializedName: "restype",
					type: {
						name: "String"
					}
				}
			},
			jx = {
				parameterPath: "body",
				mapper: {
					serializedName: "body",
					required: !0,
					xmlName: "body",
					type: {
						name: "Stream"
					}
				}
			},
			$x = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "batch",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			Fx = {
				parameterPath: "contentLength",
				mapper: {
					serializedName: "Content-Length",
					required: !0,
					xmlName: "Content-Length",
					type: {
						name: "Number"
					}
				}
			},
			Vx = {
				parameterPath: "multipartContentType",
				mapper: {
					serializedName: "Content-Type",
					required: !0,
					xmlName: "Content-Type",
					type: {
						name: "String"
					}
				}
			},
			Kx = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "blobs",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			Gx = {
				parameterPath: ["options", "where"],
				mapper: {
					serializedName: "where",
					xmlName: "where",
					type: {
						name: "String"
					}
				}
			},
			Wx = {
				parameterPath: "restype",
				mapper: {
					defaultValue: "container",
					isConstant: !0,
					serializedName: "restype",
					type: {
						name: "String"
					}
				}
			},
			Xx = {
				parameterPath: ["options", "metadata"],
				mapper: {
					serializedName: "x-ms-meta",
					xmlName: "x-ms-meta",
					type: {
						name: "Dictionary",
						value: {
							type: {
								name: "String"
							}
						}
					},
					headerCollectionPrefix: "x-ms-meta-"
				}
			},
			Qx = {
				parameterPath: ["options", "access"],
				mapper: {
					serializedName: "x-ms-blob-public-access",
					xmlName: "x-ms-blob-public-access",
					type: {
						name: "Enum",
						allowedValues: ["container", "blob"]
					}
				}
			},
			Jx = {
				parameterPath: ["options", "leaseAccessConditions", "leaseId"],
				mapper: {
					serializedName: "x-ms-lease-id",
					xmlName: "x-ms-lease-id",
					type: {
						name: "String"
					}
				}
			},
			Zx = {
				parameterPath: ["options", "modifiedAccessConditions", "ifModifiedSince"],
				mapper: {
					serializedName: "If-Modified-Since",
					xmlName: "If-Modified-Since",
					type: {
						name: "DateTimeRfc1123"
					}
				}
			},
			Yx = {
				parameterPath: ["options", "modifiedAccessConditions", "ifUnmodifiedSince"],
				mapper: {
					serializedName: "If-Unmodified-Since",
					xmlName: "If-Unmodified-Since",
					type: {
						name: "DateTimeRfc1123"
					}
				}
			},
			eN = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "metadata",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			tN = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "acl",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			nN = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "undelete",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			rN = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "lease",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			sN = {
				parameterPath: "action",
				mapper: {
					defaultValue: "acquire",
					isConstant: !0,
					serializedName: "x-ms-lease-action",
					type: {
						name: "String"
					}
				}
			},
			iN = {
				parameterPath: ["options", "duration"],
				mapper: {
					serializedName: "x-ms-lease-duration",
					xmlName: "x-ms-lease-duration",
					type: {
						name: "Number"
					}
				}
			},
			aN = {
				parameterPath: ["options", "proposedLeaseId"],
				mapper: {
					serializedName: "x-ms-proposed-lease-id",
					xmlName: "x-ms-proposed-lease-id",
					type: {
						name: "String"
					}
				}
			},
			oN = {
				parameterPath: "action",
				mapper: {
					defaultValue: "release",
					isConstant: !0,
					serializedName: "x-ms-lease-action",
					type: {
						name: "String"
					}
				}
			},
			lN = {
				parameterPath: "leaseId",
				mapper: {
					serializedName: "x-ms-lease-id",
					required: !0,
					xmlName: "x-ms-lease-id",
					type: {
						name: "String"
					}
				}
			},
			cN = {
				parameterPath: "action",
				mapper: {
					defaultValue: "renew",
					isConstant: !0,
					serializedName: "x-ms-lease-action",
					type: {
						name: "String"
					}
				}
			},
			dN = {
				parameterPath: "action",
				mapper: {
					defaultValue: "break",
					isConstant: !0,
					serializedName: "x-ms-lease-action",
					type: {
						name: "String"
					}
				}
			},
			mN = {
				parameterPath: ["options", "breakPeriod"],
				mapper: {
					serializedName: "x-ms-lease-break-period",
					xmlName: "x-ms-lease-break-period",
					type: {
						name: "Number"
					}
				}
			},
			uN = {
				parameterPath: "action",
				mapper: {
					defaultValue: "change",
					isConstant: !0,
					serializedName: "x-ms-lease-action",
					type: {
						name: "String"
					}
				}
			},
			pN = {
				parameterPath: "proposedLeaseId",
				mapper: {
					serializedName: "x-ms-proposed-lease-id",
					required: !0,
					xmlName: "x-ms-proposed-lease-id",
					type: {
						name: "String"
					}
				}
			},
			hN = {
				parameterPath: ["options", "include"],
				mapper: {
					serializedName: "include",
					xmlName: "include",
					xmlElementName: "ListBlobsIncludeItem",
					type: {
						name: "Sequence",
						element: {
							type: {
								name: "Enum",
								allowedValues: ["copy", "deleted", "metadata", "snapshots", "uncommittedblobs", "versions", "tags", "immutabilitypolicy", "legalhold", "deletedwithversions"]
							}
						}
					}
				},
				collectionFormat: Cx.Csv
			},
			gN = {
				parameterPath: ["options", "snapshot"],
				mapper: {
					serializedName: "snapshot",
					xmlName: "snapshot",
					type: {
						name: "String"
					}
				}
			},
			yN = {
				parameterPath: ["options", "versionId"],
				mapper: {
					serializedName: "versionid",
					xmlName: "versionid",
					type: {
						name: "String"
					}
				}
			},
			fN = {
				parameterPath: ["options", "range"],
				mapper: {
					serializedName: "x-ms-range",
					xmlName: "x-ms-range",
					type: {
						name: "String"
					}
				}
			},
			bN = {
				parameterPath: ["options", "cpkInfo", "encryptionKey"],
				mapper: {
					serializedName: "x-ms-encryption-key",
					xmlName: "x-ms-encryption-key",
					type: {
						name: "String"
					}
				}
			},
			xN = {
				parameterPath: ["options", "cpkInfo", "encryptionKeySha256"],
				mapper: {
					serializedName: "x-ms-encryption-key-sha256",
					xmlName: "x-ms-encryption-key-sha256",
					type: {
						name: "String"
					}
				}
			},
			NN = {
				parameterPath: ["options", "cpkInfo", "encryptionAlgorithm"],
				mapper: {
					serializedName: "x-ms-encryption-algorithm",
					xmlName: "x-ms-encryption-algorithm",
					type: {
						name: "String"
					}
				}
			},
			SN = {
				parameterPath: ["options", "modifiedAccessConditions", "ifMatch"],
				mapper: {
					serializedName: "If-Match",
					xmlName: "If-Match",
					type: {
						name: "String"
					}
				}
			},
			vN = {
				parameterPath: ["options", "modifiedAccessConditions", "ifNoneMatch"],
				mapper: {
					serializedName: "If-None-Match",
					xmlName: "If-None-Match",
					type: {
						name: "String"
					}
				}
			},
			wN = {
				parameterPath: ["options", "modifiedAccessConditions", "ifTags"],
				mapper: {
					serializedName: "x-ms-if-tags",
					xmlName: "x-ms-if-tags",
					type: {
						name: "String"
					}
				}
			},
			CN = {
				parameterPath: ["options", "blobHttpHeaders", "blobCacheControl"],
				mapper: {
					serializedName: "x-ms-blob-cache-control",
					xmlName: "x-ms-blob-cache-control",
					type: {
						name: "String"
					}
				}
			},
			PN = {
				parameterPath: ["options", "blobHttpHeaders", "blobContentType"],
				mapper: {
					serializedName: "x-ms-blob-content-type",
					xmlName: "x-ms-blob-content-type",
					type: {
						name: "String"
					}
				}
			},
			RN = {
				parameterPath: ["options", "blobHttpHeaders", "blobContentMD5"],
				mapper: {
					serializedName: "x-ms-blob-content-md5",
					xmlName: "x-ms-blob-content-md5",
					type: {
						name: "ByteArray"
					}
				}
			},
			EN = {
				parameterPath: ["options", "blobHttpHeaders", "blobContentEncoding"],
				mapper: {
					serializedName: "x-ms-blob-content-encoding",
					xmlName: "x-ms-blob-content-encoding",
					type: {
						name: "String"
					}
				}
			},
			zN = {
				parameterPath: ["options", "blobHttpHeaders", "blobContentLanguage"],
				mapper: {
					serializedName: "x-ms-blob-content-language",
					xmlName: "x-ms-blob-content-language",
					type: {
						name: "String"
					}
				}
			},
			ON = {
				parameterPath: ["options", "blobHttpHeaders", "blobContentDisposition"],
				mapper: {
					serializedName: "x-ms-blob-content-disposition",
					xmlName: "x-ms-blob-content-disposition",
					type: {
						name: "String"
					}
				}
			},
			TN = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "immutabilityPolicies",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			kN = {
				parameterPath: ["options", "immutabilityPolicyExpiry"],
				mapper: {
					serializedName: "x-ms-immutability-policy-until-date",
					xmlName: "x-ms-immutability-policy-until-date",
					type: {
						name: "DateTimeRfc1123"
					}
				}
			},
			AN = {
				parameterPath: ["options", "immutabilityPolicyMode"],
				mapper: {
					serializedName: "x-ms-immutability-policy-mode",
					xmlName: "x-ms-immutability-policy-mode",
					type: {
						name: "Enum",
						allowedValues: ["Mutable", "Unlocked", "Locked"]
					}
				}
			},
			IN = {
				parameterPath: ["options", "encryptionScope"],
				mapper: {
					serializedName: "x-ms-encryption-scope",
					xmlName: "x-ms-encryption-scope",
					type: {
						name: "String"
					}
				}
			},
			BN = {
				parameterPath: ["options", "tier"],
				mapper: {
					serializedName: "x-ms-access-tier",
					xmlName: "x-ms-access-tier",
					type: {
						name: "Enum",
						allowedValues: ["P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Cold"]
					}
				}
			},
			MN = {
				parameterPath: ["options", "rehydratePriority"],
				mapper: {
					serializedName: "x-ms-rehydrate-priority",
					xmlName: "x-ms-rehydrate-priority",
					type: {
						name: "Enum",
						allowedValues: ["High", "Standard"]
					}
				}
			},
			qN = {
				parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfModifiedSince"],
				mapper: {
					serializedName: "x-ms-source-if-modified-since",
					xmlName: "x-ms-source-if-modified-since",
					type: {
						name: "DateTimeRfc1123"
					}
				}
			},
			_N = {
				parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfUnmodifiedSince"],
				mapper: {
					serializedName: "x-ms-source-if-unmodified-since",
					xmlName: "x-ms-source-if-unmodified-since",
					type: {
						name: "DateTimeRfc1123"
					}
				}
			},
			DN = {
				parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfMatch"],
				mapper: {
					serializedName: "x-ms-source-if-match",
					xmlName: "x-ms-source-if-match",
					type: {
						name: "String"
					}
				}
			},
			LN = {
				parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfNoneMatch"],
				mapper: {
					serializedName: "x-ms-source-if-none-match",
					xmlName: "x-ms-source-if-none-match",
					type: {
						name: "String"
					}
				}
			},
			HN = {
				parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfTags"],
				mapper: {
					serializedName: "x-ms-source-if-tags",
					xmlName: "x-ms-source-if-tags",
					type: {
						name: "String"
					}
				}
			},
			UN = {
				parameterPath: "copySource",
				mapper: {
					serializedName: "x-ms-copy-source",
					required: !0,
					xmlName: "x-ms-copy-source",
					type: {
						name: "String"
					}
				}
			},
			jN = {
				parameterPath: ["options", "blobTagsString"],
				mapper: {
					serializedName: "x-ms-tags",
					xmlName: "x-ms-tags",
					type: {
						name: "String"
					}
				}
			},
			$N = {
				parameterPath: ["options", "legalHold"],
				mapper: {
					serializedName: "x-ms-legal-hold",
					xmlName: "x-ms-legal-hold",
					type: {
						name: "Boolean"
					}
				}
			},
			FN = {
				parameterPath: ["options", "sourceContentMD5"],
				mapper: {
					serializedName: "x-ms-source-content-md5",
					xmlName: "x-ms-source-content-md5",
					type: {
						name: "ByteArray"
					}
				}
			},
			VN = {
				parameterPath: ["options", "copySourceAuthorization"],
				mapper: {
					serializedName: "x-ms-copy-source-authorization",
					xmlName: "x-ms-copy-source-authorization",
					type: {
						name: "String"
					}
				}
			},
			KN = {
				parameterPath: ["options", "copySourceTags"],
				mapper: {
					serializedName: "x-ms-copy-source-tag-option",
					xmlName: "x-ms-copy-source-tag-option",
					type: {
						name: "Enum",
						allowedValues: ["REPLACE", "COPY"]
					}
				}
			},
			GN = {
				parameterPath: ["options", "queryRequest"],
				mapper: Hy
			},
			WN = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "tags",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			XN = {
				parameterPath: ["options", "tags"],
				mapper: vy
			},
			QN = {
				parameterPath: ["options", "transactionalContentMD5"],
				mapper: {
					serializedName: "Content-MD5",
					xmlName: "Content-MD5",
					type: {
						name: "ByteArray"
					}
				}
			},
			JN = {
				parameterPath: ["options", "transactionalContentCrc64"],
				mapper: {
					serializedName: "x-ms-content-crc64",
					xmlName: "x-ms-content-crc64",
					type: {
						name: "ByteArray"
					}
				}
			},
			ZN = {
				parameterPath: "blobContentLength",
				mapper: {
					serializedName: "x-ms-blob-content-length",
					required: !0,
					xmlName: "x-ms-blob-content-length",
					type: {
						name: "Number"
					}
				}
			},
			YN = {
				parameterPath: ["options", "blobSequenceNumber"],
				mapper: {
					serializedName: "x-ms-blob-sequence-number",
					xmlName: "x-ms-blob-sequence-number",
					type: {
						name: "Number"
					}
				}
			},
			eS = {
				parameterPath: ["options", "contentType"],
				mapper: {
					defaultValue: "application/octet-stream",
					isConstant: !0,
					serializedName: "Content-Type",
					type: {
						name: "String"
					}
				}
			},
			tS = {
				parameterPath: "body",
				mapper: {
					serializedName: "body",
					required: !0,
					xmlName: "body",
					type: {
						name: "Stream"
					}
				}
			},
			nS = {
				parameterPath: "accept",
				mapper: {
					defaultValue: "application/xml",
					isConstant: !0,
					serializedName: "Accept",
					type: {
						name: "String"
					}
				}
			},
			rS = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "page",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			sS = {
				parameterPath: "pageWrite",
				mapper: {
					defaultValue: "update",
					isConstant: !0,
					serializedName: "x-ms-page-write",
					type: {
						name: "String"
					}
				}
			},
			iS = {
				parameterPath: ["options", "sequenceNumberAccessConditions", "ifSequenceNumberLessThanOrEqualTo"],
				mapper: {
					serializedName: "x-ms-if-sequence-number-le",
					xmlName: "x-ms-if-sequence-number-le",
					type: {
						name: "Number"
					}
				}
			},
			aS = {
				parameterPath: ["options", "sequenceNumberAccessConditions", "ifSequenceNumberLessThan"],
				mapper: {
					serializedName: "x-ms-if-sequence-number-lt",
					xmlName: "x-ms-if-sequence-number-lt",
					type: {
						name: "Number"
					}
				}
			},
			oS = {
				parameterPath: ["options", "sequenceNumberAccessConditions", "ifSequenceNumberEqualTo"],
				mapper: {
					serializedName: "x-ms-if-sequence-number-eq",
					xmlName: "x-ms-if-sequence-number-eq",
					type: {
						name: "Number"
					}
				}
			},
			lS = {
				parameterPath: "sourceUrl",
				mapper: {
					serializedName: "x-ms-copy-source",
					required: !0,
					xmlName: "x-ms-copy-source",
					type: {
						name: "String"
					}
				}
			},
			cS = {
				parameterPath: ["options", "sourceContentCrc64"],
				mapper: {
					serializedName: "x-ms-source-content-crc64",
					xmlName: "x-ms-source-content-crc64",
					type: {
						name: "ByteArray"
					}
				}
			},
			dS = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "pagelist",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			mS = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "appendblock",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			uS = {
				parameterPath: ["options", "appendPositionAccessConditions", "maxSize"],
				mapper: {
					serializedName: "x-ms-blob-condition-maxsize",
					xmlName: "x-ms-blob-condition-maxsize",
					type: {
						name: "Number"
					}
				}
			},
			pS = {
				parameterPath: ["options", "appendPositionAccessConditions", "appendPosition"],
				mapper: {
					serializedName: "x-ms-blob-condition-appendpos",
					xmlName: "x-ms-blob-condition-appendpos",
					type: {
						name: "Number"
					}
				}
			},
			hS = {
				parameterPath: ["options", "sourceRange"],
				mapper: {
					serializedName: "x-ms-source-range",
					xmlName: "x-ms-source-range",
					type: {
						name: "String"
					}
				}
			},
			gS = {
				parameterPath: "blobType",
				mapper: {
					defaultValue: "BlockBlob",
					isConstant: !0,
					serializedName: "x-ms-blob-type",
					type: {
						name: "String"
					}
				}
			},
			yS = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "block",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			},
			fS = {
				parameterPath: "blockId",
				mapper: {
					serializedName: "blockid",
					required: !0,
					xmlName: "blockid",
					type: {
						name: "String"
					}
				}
			},
			bS = {
				parameterPath: "blocks",
				mapper: By
			},
			xS = {
				parameterPath: "comp",
				mapper: {
					defaultValue: "blocklist",
					isConstant: !0,
					serializedName: "comp",
					type: {
						name: "String"
					}
				}
			};
		class NS {
			constructor(e) {
				this.client = e
			}
			setProperties(e, t) {
				const n = {
					blobServiceProperties: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, vS)
			}
			getProperties(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, wS)
			}
			getStatistics(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, CS)
			}
			listContainersSegment(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, PS)
			}
			getUserDelegationKey(e, t) {
				const n = {
					keyInfo: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, RS)
			}
			getAccountInfo(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, ES)
			}
			submitBatch(e, t, n, r) {
				const s = {
					contentLength: e,
					multipartContentType: t,
					body: n,
					options: Ag(r || {})
				};
				return this.client.sendOperationRequest(s, zS)
			}
			filterBlobs(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, OS)
			}
		}
		const SS = new Qg(e, !0),
			vS = {
				path: "/",
				httpMethod: "PUT",
				responses: {
					202: {
						headersMapper: Gy
					},
					default: {
						bodyMapper: uy,
						headersMapper: Wy
					}
				},
				requestBody: Rx,
				queryParameters: [Ox, Tx, kx],
				urlParameters: [zx],
				headerParameters: [Px, Ex, Ax, Ix],
				isXML: !0,
				contentType: "application/xml; charset=utf-8",
				mediaType: "xml",
				serializer: SS
			},
			wS = {
				path: "/",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: ay,
						headersMapper: Xy
					},
					default: {
						bodyMapper: uy,
						headersMapper: Qy
					}
				},
				queryParameters: [Ox, Tx, kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: SS
			},
			CS = {
				path: "/",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: py,
						headersMapper: Jy
					},
					default: {
						bodyMapper: uy,
						headersMapper: Zy
					}
				},
				queryParameters: [Ox, kx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "stats",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: SS
			},
			PS = {
				path: "/",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: gy,
						headersMapper: Yy
					},
					default: {
						bodyMapper: uy,
						headersMapper: ef
					}
				},
				queryParameters: [kx, Mx, qx, _x, Dx, Lx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: SS
			},
			RS = {
				path: "/",
				httpMethod: "POST",
				responses: {
					200: {
						bodyMapper: xy,
						headersMapper: tf
					},
					default: {
						bodyMapper: uy,
						headersMapper: nf
					}
				},
				requestBody: Hx,
				queryParameters: [Ox, kx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "userdelegationkey",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Px, Ex, Ax, Ix],
				isXML: !0,
				contentType: "application/xml; charset=utf-8",
				mediaType: "xml",
				serializer: SS
			},
			ES = {
				path: "/",
				httpMethod: "GET",
				responses: {
					200: {
						headersMapper: rf
					},
					default: {
						bodyMapper: uy,
						headersMapper: sf
					}
				},
				queryParameters: [Tx, Ux],
				urlParameters: [zx],
				headerParameters: [Ax, Bx],
				isXML: !0,
				serializer: SS
			},
			zS = {
				path: "/",
				httpMethod: "POST",
				responses: {
					202: {
						bodyMapper: {
							type: {
								name: "Stream"
							},
							serializedName: "parsedResponse"
						},
						headersMapper: af
					},
					default: {
						bodyMapper: uy,
						headersMapper: of
					}
				},
				requestBody: jx,
				queryParameters: [kx, $x],
				urlParameters: [zx],
				headerParameters: [Px, Ex, Ax, Ix, Fx, Vx],
				isXML: !0,
				contentType: "application/xml; charset=utf-8",
				mediaType: "xml",
				serializer: SS
			},
			OS = {
				path: "/",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: Ny,
						headersMapper: lf
					},
					default: {
						bodyMapper: uy,
						headersMapper: cf
					}
				},
				queryParameters: [kx, _x, Dx, Kx, Gx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: SS
			};
		class TS {
			constructor(e) {
				this.client = e
			}
			create(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, AS)
			}
			getProperties(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, IS)
			}
			delete(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, BS)
			}
			setMetadata(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, MS)
			}
			getAccessPolicy(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, qS)
			}
			setAccessPolicy(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, _S)
			}
			restore(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, DS)
			}
			rename(e, t) {
				const n = {
					sourceContainerName: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, LS)
			}
			submitBatch(e, t, n, r) {
				const s = {
					contentLength: e,
					multipartContentType: t,
					body: n,
					options: Ag(r || {})
				};
				return this.client.sendOperationRequest(s, HS)
			}
			filterBlobs(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, US)
			}
			acquireLease(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, jS)
			}
			releaseLease(e, t) {
				const n = {
					leaseId: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, $S)
			}
			renewLease(e, t) {
				const n = {
					leaseId: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, FS)
			}
			breakLease(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, VS)
			}
			changeLease(e, t, n) {
				const r = {
					leaseId: e,
					proposedLeaseId: t,
					options: Ag(n || {})
				};
				return this.client.sendOperationRequest(r, KS)
			}
			listBlobFlatSegment(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, GS)
			}
			listBlobHierarchySegment(e, t) {
				const n = {
					delimiter: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, WS)
			}
			getAccountInfo(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, XS)
			}
		}
		const kS = new Qg(e, !0),
			AS = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: df
					},
					default: {
						bodyMapper: uy,
						headersMapper: mf
					}
				},
				queryParameters: [kx, Wx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Xx, Qx, {
					parameterPath: ["options", "containerEncryptionScope", "defaultEncryptionScope"],
					mapper: {
						serializedName: "x-ms-default-encryption-scope",
						xmlName: "x-ms-default-encryption-scope",
						type: {
							name: "String"
						}
					}
				}, {
					parameterPath: ["options", "containerEncryptionScope", "preventEncryptionScopeOverride"],
					mapper: {
						serializedName: "x-ms-deny-encryption-scope-override",
						xmlName: "x-ms-deny-encryption-scope-override",
						type: {
							name: "Boolean"
						}
					}
				}],
				isXML: !0,
				serializer: kS
			},
			IS = {
				path: "/{containerName}",
				httpMethod: "GET",
				responses: {
					200: {
						headersMapper: uf
					},
					default: {
						bodyMapper: uy,
						headersMapper: pf
					}
				},
				queryParameters: [kx, Wx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx],
				isXML: !0,
				serializer: kS
			},
			BS = {
				path: "/{containerName}",
				httpMethod: "DELETE",
				responses: {
					202: {
						headersMapper: hf
					},
					default: {
						bodyMapper: uy,
						headersMapper: gf
					}
				},
				queryParameters: [kx, Wx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx],
				isXML: !0,
				serializer: kS
			},
			MS = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: yf
					},
					default: {
						bodyMapper: uy,
						headersMapper: ff
					}
				},
				queryParameters: [kx, Wx, eN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Xx, Jx, Zx],
				isXML: !0,
				serializer: kS
			},
			qS = {
				path: "/{containerName}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: {
							type: {
								name: "Sequence",
								element: {
									type: {
										name: "Composite",
										className: "SignedIdentifier"
									}
								}
							},
							serializedName: "SignedIdentifiers",
							xmlName: "SignedIdentifiers",
							xmlIsWrapped: !0,
							xmlElementName: "SignedIdentifier"
						},
						headersMapper: bf
					},
					default: {
						bodyMapper: uy,
						headersMapper: xf
					}
				},
				queryParameters: [kx, Wx, tN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx],
				isXML: !0,
				serializer: kS
			},
			_S = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: Nf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Sf
					}
				},
				requestBody: {
					parameterPath: ["options", "containerAcl"],
					mapper: {
						serializedName: "containerAcl",
						xmlName: "SignedIdentifiers",
						xmlIsWrapped: !0,
						xmlElementName: "SignedIdentifier",
						type: {
							name: "Sequence",
							element: {
								type: {
									name: "Composite",
									className: "SignedIdentifier"
								}
							}
						}
					}
				},
				queryParameters: [kx, Wx, tN],
				urlParameters: [zx],
				headerParameters: [Px, Ex, Ax, Ix, Qx, Jx, Zx, Yx],
				isXML: !0,
				contentType: "application/xml; charset=utf-8",
				mediaType: "xml",
				serializer: kS
			},
			DS = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: vf
					},
					default: {
						bodyMapper: uy,
						headersMapper: wf
					}
				},
				queryParameters: [kx, Wx, nN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, {
					parameterPath: ["options", "deletedContainerName"],
					mapper: {
						serializedName: "x-ms-deleted-container-name",
						xmlName: "x-ms-deleted-container-name",
						type: {
							name: "String"
						}
					}
				}, {
					parameterPath: ["options", "deletedContainerVersion"],
					mapper: {
						serializedName: "x-ms-deleted-container-version",
						xmlName: "x-ms-deleted-container-version",
						type: {
							name: "String"
						}
					}
				}],
				isXML: !0,
				serializer: kS
			},
			LS = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: Cf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Pf
					}
				},
				queryParameters: [kx, Wx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "rename",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, {
					parameterPath: "sourceContainerName",
					mapper: {
						serializedName: "x-ms-source-container-name",
						required: !0,
						xmlName: "x-ms-source-container-name",
						type: {
							name: "String"
						}
					}
				}, {
					parameterPath: ["options", "sourceLeaseId"],
					mapper: {
						serializedName: "x-ms-source-lease-id",
						xmlName: "x-ms-source-lease-id",
						type: {
							name: "String"
						}
					}
				}],
				isXML: !0,
				serializer: kS
			},
			HS = {
				path: "/{containerName}",
				httpMethod: "POST",
				responses: {
					202: {
						bodyMapper: {
							type: {
								name: "Stream"
							},
							serializedName: "parsedResponse"
						},
						headersMapper: Rf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Ef
					}
				},
				requestBody: jx,
				queryParameters: [kx, $x, Wx],
				urlParameters: [zx],
				headerParameters: [Px, Ex, Ax, Ix, Fx, Vx],
				isXML: !0,
				contentType: "application/xml; charset=utf-8",
				mediaType: "xml",
				serializer: kS
			},
			US = {
				path: "/{containerName}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: Ny,
						headersMapper: zf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Of
					}
				},
				queryParameters: [kx, _x, Dx, Kx, Gx, Wx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: kS
			},
			jS = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: Tf
					},
					default: {
						bodyMapper: uy,
						headersMapper: kf
					}
				},
				queryParameters: [kx, Wx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, sN, iN, aN],
				isXML: !0,
				serializer: kS
			},
			$S = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: Af
					},
					default: {
						bodyMapper: uy,
						headersMapper: If
					}
				},
				queryParameters: [kx, Wx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, oN, lN],
				isXML: !0,
				serializer: kS
			},
			FS = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: Bf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Mf
					}
				},
				queryParameters: [kx, Wx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, lN, cN],
				isXML: !0,
				serializer: kS
			},
			VS = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					202: {
						headersMapper: qf
					},
					default: {
						bodyMapper: uy,
						headersMapper: _f
					}
				},
				queryParameters: [kx, Wx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, dN, mN],
				isXML: !0,
				serializer: kS
			},
			KS = {
				path: "/{containerName}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: Df
					},
					default: {
						bodyMapper: uy,
						headersMapper: Lf
					}
				},
				queryParameters: [kx, Wx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, lN, uN, pN],
				isXML: !0,
				serializer: kS
			},
			GS = {
				path: "/{containerName}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: Ry,
						headersMapper: Hf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Uf
					}
				},
				queryParameters: [kx, Mx, qx, _x, Dx, Wx, hN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: kS
			},
			WS = {
				path: "/{containerName}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: ky,
						headersMapper: jf
					},
					default: {
						bodyMapper: uy,
						headersMapper: $f
					}
				},
				queryParameters: [kx, Mx, qx, _x, Dx, Wx, hN, {
					parameterPath: "delimiter",
					mapper: {
						serializedName: "delimiter",
						required: !0,
						xmlName: "delimiter",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: kS
			},
			XS = {
				path: "/{containerName}",
				httpMethod: "GET",
				responses: {
					200: {
						headersMapper: Ff
					},
					default: {
						bodyMapper: uy,
						headersMapper: Vf
					}
				},
				queryParameters: [Tx, Ux],
				urlParameters: [zx],
				headerParameters: [Ax, Bx],
				isXML: !0,
				serializer: kS
			};

		function QS(e) {
			return function(t, n) {
				const r = function(e, t) {
						return Eg.getTracer(e || "azure/core-tracing", t)
					}(),
					s = (null == n ? void 0 : n.tracingOptions) || {},
					i = Object.assign({
						kind: Ng.INTERNAL
					}, s.spanOptions),
					a = e.packagePrefix ? `${e.packagePrefix}.${t}` : t;
				let o;
				o = function() {
					var e;
					if ("undefined" == typeof process) return !1;
					const t = null === (e = process.env.AZURE_TRACING_DISABLED) || void 0 === e ? void 0 : e.toLowerCase();
					return "false" !== t && "0" !== t && Boolean(t)
				}() ? Eg.wrapSpanContext(ig) : r.startSpan(a, i, s.tracingContext), e.namespace && o.setAttribute("az.namespace", e.namespace);
				let l = s.spanOptions || {};
				o.isRecording() && e.namespace && (l = Object.assign(Object.assign({}, s.spanOptions), {
					attributes: Object.assign(Object.assign({}, i.attributes), {
						"az.namespace": e.namespace
					})
				}));
				const c = Object.assign(Object.assign({}, s), {
					spanOptions: l,
					tracingContext: Og(s.tracingContext || Tg.active(), o)
				});
				return {
					span: o,
					updatedOptions: Object.assign(Object.assign({}, n), {
						tracingOptions: c
					})
				}
			}
		}
		const JS = "undefined" != typeof process && process.env && process.env.DEBUG || void 0;
		let ZS, YS = [],
			ev = [];
		const tv = [];
		JS && rv(JS);
		const nv = Object.assign((e => iv(e)), {
			enable: rv,
			enabled: sv,
			disable: function() {
				const e = ZS || "";
				return rv(""), e
			},
			log: function(...e) {
				if (e.length > 0) {
					const t = String(e[0]);
					t.includes(":error") ? console.error(...e) : t.includes(":warning") ? console.warn(...e) : t.includes(":info") ? console.info(...e) : (t.includes(":verbose"), console.debug(...e))
				}
			}
		});

		function rv(e) {
			ZS = e, YS = [], ev = [];
			const t = /\*/g,
				n = e.split(",").map((e => e.trim().replace(t, ".*?")));
			for (const e of n) e.startsWith("-") ? ev.push(new RegExp(`^${e.substr(1)}$`)) : YS.push(new RegExp(`^${e}$`));
			for (const e of tv) e.enabled = sv(e.namespace)
		}

		function sv(e) {
			if (e.endsWith("*")) return !0;
			for (const t of ev)
				if (t.test(e)) return !1;
			for (const t of YS)
				if (t.test(e)) return !0;
			return !1
		}

		function iv(e) {
			const t = Object.assign((function(...n) {
				if (!t.enabled) return;
				n.length > 0 && (n[0] = `${e} ${n[0]}`);
				t.log(...n)
			}), {
				enabled: sv(e),
				destroy: av,
				log: nv.log,
				namespace: e,
				extend: ov
			});
			return tv.push(t), t
		}

		function av() {
			const e = tv.indexOf(this);
			return e >= 0 && (tv.splice(e, 1), !0)
		}

		function ov(e) {
			const t = iv(`${this.namespace}:${e}`);
			return t.log = this.log, t
		}
		const lv = nv,
			cv = new Set,
			dv = "undefined" != typeof process && process.env && process.env.AZURE_LOG_LEVEL || void 0;
		let mv;
		const uv = lv("azure");
		uv.log = (...e) => {
			lv.log(...e)
		};
		const pv = ["verbose", "info", "warning", "error"];
		dv && (xv(dv) ? function(e) {
			if (e && !xv(e)) throw new Error(`Unknown log level '${e}'. Acceptable values: ${pv.join(",")}`);
			mv = e;
			const t = [];
			for (const e of cv) bv(e) && t.push(e.namespace);
			lv.enable(t.join(","))
		}(dv) : console.error(`AZURE_LOG_LEVEL set to unknown log level '${dv}'; logging is not enabled. Acceptable values: ${pv.join(", ")}.`));
		const hv = {
			verbose: 400,
			info: 300,
			warning: 200,
			error: 100
		};

		function gv(e) {
			const t = uv.extend(e);
			return yv(uv, t), {
				error: fv(t, "error"),
				warning: fv(t, "warning"),
				info: fv(t, "info"),
				verbose: fv(t, "verbose")
			}
		}

		function yv(e, t) {
			t.log = (...t) => {
				e.log(...t)
			}
		}

		function fv(e, t) {
			const n = Object.assign(e.extend(t), {
				level: t
			});
			if (yv(e, n), bv(n)) {
				const e = lv.disable();
				lv.enable(e + "," + n.namespace)
			}
			return cv.add(n), n
		}

		function bv(e) {
			return Boolean(mv && hv[e.level] <= hv[mv])
		}

		function xv(e) {
			return pv.includes(e)
		}
		const Nv = gv("core-http"),
			Sv = QS({
				packagePrefix: "",
				namespace: ""
			});

		function vv(e = {}) {
			return {
				create: (t, n) => new wv(t, n, e)
			}
		}
		class wv extends wh {
			constructor(e, t, n) {
				super(e, t), this.userAgent = n.userAgent
			}
			async sendRequest(e) {
				if (!e.tracingContext) return this._nextPolicy.sendRequest(e);
				const t = this.tryCreateSpan(e);
				if (!t) return this._nextPolicy.sendRequest(e);
				try {
					const n = await this._nextPolicy.sendRequest(e);
					return this.tryProcessResponse(t, n), n
				} catch (e) {
					throw this.tryProcessError(t, e), e
				}
			}
			tryCreateSpan(e) {
				var t;
				try {
					const {
						span: n
					} = Sv(`HTTP ${e.method}`, {
						tracingOptions: {
							spanOptions: Object.assign(Object.assign({}, e.spanOptions), {
								kind: Ng.CLIENT
							}),
							tracingContext: e.tracingContext
						}
					});
					if (!n.isRecording()) return void n.end();
					const r = null === (t = e.tracingContext) || void 0 === t ? void 0 : t.getValue(Symbol.for("az.namespace"));
					"string" == typeof r && n.setAttribute("az.namespace", r), n.setAttributes({
						"http.method": e.method,
						"http.url": e.url,
						requestId: e.requestId
					}), this.userAgent && n.setAttribute("http.user_agent", this.userAgent);
					const s = n.spanContext(),
						i = function(e) {
							const t = [];
							if (e.traceId || t.push("traceId"), e.spanId || t.push("spanId"), t.length) return;
							const n = (e.traceFlags || 0).toString(16),
								r = 1 === n.length ? `0${n}` : n;
							return `00-${e.traceId}-${e.spanId}-${r}`
						}(s);
					if (i && function(e) {
							return Eg.isSpanContextValid(e)
						}(s)) {
						e.headers.set("traceparent", i);
						const t = s.traceState && s.traceState.serialize();
						t && e.headers.set("tracestate", t)
					}
					return n
				} catch (e) {
					return void Nv.warning(`Skipping creating a tracing span due to an error: ${e.message}`)
				}
			}
			tryProcessError(e, t) {
				try {
					e.setStatus({
						code: kg.ERROR,
						message: t.message
					}), t.statusCode && e.setAttribute("http.status_code", t.statusCode), e.end()
				} catch (e) {
					Nv.warning(`Skipping tracing span processing due to an error: ${e.message}`)
				}
			}
			tryProcessResponse(e, t) {
				try {
					e.setAttribute("http.status_code", t.status);
					const n = t.headers.get("x-ms-request-id");
					n && e.setAttribute("serviceRequestId", n), e.setStatus({
						code: kg.OK
					}), e.end()
				} catch (e) {
					Nv.warning(`Skipping tracing span processing due to an error: ${e.message}`)
				}
			}
		}
		const Cv = {
			enable: !0
		};
		class Pv extends wh {
			constructor(e, t, n) {
				super(e, t), this.keepAliveOptions = n
			}
			async sendRequest(e) {
				return e.keepAlive = this.keepAliveOptions.enable, this._nextPolicy.sendRequest(e)
			}
		}

		function Rv(e = "x-ms-client-request-id") {
			return {
				create: (t, n) => new Ev(t, n, e)
			}
		}
		class Ev extends wh {
			constructor(e, t, n) {
				super(e, t), this._requestIdHeaderName = n
			}
			sendRequest(e) {
				return e.headers.contains(this._requestIdHeaderName) || e.headers.set(this._requestIdHeaderName, e.requestId), this._nextPolicy.sendRequest(e)
			}
		}
		class zv {
			constructor() {
				this._rawQuery = {}
			}
			any() {
				return Object.keys(this._rawQuery).length > 0
			}
			keys() {
				return Object.keys(this._rawQuery)
			}
			set(e, t) {
				const n = t;
				if (e)
					if (null != n) {
						const t = Array.isArray(n) ? n : n.toString();
						this._rawQuery[e] = t
					} else delete this._rawQuery[e]
			}
			get(e) {
				return e ? this._rawQuery[e] : void 0
			}
			toString() {
				let e = "";
				for (const t in this._rawQuery) {
					e && (e += "&");
					const n = this._rawQuery[t];
					if (Array.isArray(n)) {
						const r = [];
						for (const e of n) r.push(`${t}=${e}`);
						e += r.join("&")
					} else e += `${t}=${n}`
				}
				return e
			}
			static parse(e) {
				const t = new zv;
				if (e) {
					e.startsWith("?") && (e = e.substring(1));
					let n = "ParameterName",
						r = "",
						s = "";
					for (let i = 0; i < e.length; ++i) {
						const a = e[i];
						switch (n) {
							case "ParameterName":
								switch (a) {
									case "=":
										n = "ParameterValue";
										break;
									case "&":
										r = "", s = "";
										break;
									default:
										r += a
								}
								break;
							case "ParameterValue":
								if ("&" === a) t.set(r, s), r = "", s = "", n = "ParameterName";
								else s += a;
								break;
							default:
								throw new Error("Unrecognized URLQuery parse state: " + n)
						}
					}
					"ParameterValue" === n && t.set(r, s)
				}
				return t
			}
		}
		class Ov {
			setScheme(e) {
				e ? this.set(e, "SCHEME") : this._scheme = void 0
			}
			getScheme() {
				return this._scheme
			}
			setHost(e) {
				e ? this.set(e, "SCHEME_OR_HOST") : this._host = void 0
			}
			getHost() {
				return this._host
			}
			setPort(e) {
				null == e || "" === e ? this._port = void 0 : this.set(e.toString(), "PORT")
			}
			getPort() {
				return this._port
			}
			setPath(e) {
				if (e) {
					const t = e.indexOf("://");
					if (-1 !== t) {
						const n = e.lastIndexOf("/", t);
						this.set(-1 === n ? e : e.substr(n + 1), "SCHEME")
					} else this.set(e, "PATH")
				} else this._path = void 0
			}
			appendPath(e) {
				if (e) {
					let t = this.getPath();
					t && (t.endsWith("/") || (t += "/"), e.startsWith("/") && (e = e.substring(1)), e = t + e), this.set(e, "PATH")
				}
			}
			getPath() {
				return this._path
			}
			setQuery(e) {
				this._query = e ? zv.parse(e) : void 0
			}
			setQueryParameter(e, t) {
				e && (this._query || (this._query = new zv), this._query.set(e, t))
			}
			getQueryParameterValue(e) {
				return this._query ? this._query.get(e) : void 0
			}
			getQuery() {
				return this._query ? this._query.toString() : void 0
			}
			set(e, t) {
				const n = new kv(e, t);
				for (; n.next();) {
					const e = n.current();
					let t;
					if (e) switch (e.type) {
						case "SCHEME":
							this._scheme = e.text || void 0;
							break;
						case "HOST":
							this._host = e.text || void 0;
							break;
						case "PORT":
							this._port = e.text || void 0;
							break;
						case "PATH":
							t = e.text || void 0, this._path && "/" !== this._path && "/" === t || (this._path = t);
							break;
						case "QUERY":
							this._query = zv.parse(e.text);
							break;
						default:
							throw new Error(`Unrecognized URLTokenType: ${e.type}`)
					}
				}
			}
			toString() {
				let e = "";
				return this._scheme && (e += `${this._scheme}://`), this._host && (e += this._host), this._port && (e += `:${this._port}`), this._path && (this._path.startsWith("/") || (e += "/"), e += this._path), this._query && this._query.any() && (e += `?${this._query.toString()}`), e
			}
			replaceAll(e, t) {
				e && (this.setScheme(Xg(this.getScheme(), e, t)), this.setHost(Xg(this.getHost(), e, t)), this.setPort(Xg(this.getPort(), e, t)), this.setPath(Xg(this.getPath(), e, t)), this.setQuery(Xg(this.getQuery(), e, t)))
			}
			static parse(e) {
				const t = new Ov;
				return t.set(e, "SCHEME_OR_HOST"), t
			}
		}
		class Tv {
			constructor(e, t) {
				this.text = e, this.type = t
			}
			static scheme(e) {
				return new Tv(e, "SCHEME")
			}
			static host(e) {
				return new Tv(e, "HOST")
			}
			static port(e) {
				return new Tv(e, "PORT")
			}
			static path(e) {
				return new Tv(e, "PATH")
			}
			static query(e) {
				return new Tv(e, "QUERY")
			}
		}
		class kv {
			constructor(e, t) {
				this._text = e, this._textLength = e ? e.length : 0, this._currentState = null != t ? t : "SCHEME_OR_HOST", this._currentIndex = 0
			}
			current() {
				return this._currentToken
			}
			next() {
				if (Av(this)) switch (this._currentState) {
					case "SCHEME":
						! function(e) {
							const t = function(e) {
								return qv(e, (e => function(e) {
									const t = e.charCodeAt(0);
									return 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122
								}(e)))
							}(e);
							e._currentToken = Tv.scheme(t), Av(e) ? e._currentState = "HOST" : e._currentState = "DONE"
						}(this);
						break;
					case "SCHEME_OR_HOST":
						! function(e) {
							const t = _v(e, ":", "/", "?");
							Av(e) ? ":" === Iv(e) ? "://" === Mv(e, 3) ? (e._currentToken = Tv.scheme(t), e._currentState = "HOST") : (e._currentToken = Tv.host(t), e._currentState = "PORT") : (e._currentToken = Tv.host(t), "/" === Iv(e) ? e._currentState = "PATH" : e._currentState = "QUERY") : (e._currentToken = Tv.host(t), e._currentState = "DONE")
						}(this);
						break;
					case "HOST":
						! function(e) {
							"://" === Mv(e, 3) && Bv(e, 3);
							const t = _v(e, ":", "/", "?");
							e._currentToken = Tv.host(t), Av(e) ? ":" === Iv(e) ? e._currentState = "PORT" : "/" === Iv(e) ? e._currentState = "PATH" : e._currentState = "QUERY" : e._currentState = "DONE"
						}(this);
						break;
					case "PORT":
						! function(e) {
							":" === Iv(e) && Bv(e);
							const t = _v(e, "/", "?");
							e._currentToken = Tv.port(t), Av(e) ? "/" === Iv(e) ? e._currentState = "PATH" : e._currentState = "QUERY" : e._currentState = "DONE"
						}(this);
						break;
					case "PATH":
						! function(e) {
							const t = _v(e, "?");
							e._currentToken = Tv.path(t), Av(e) ? e._currentState = "QUERY" : e._currentState = "DONE"
						}(this);
						break;
					case "QUERY":
						! function(e) {
							"?" === Iv(e) && Bv(e);
							const t = function(e) {
								let t = "";
								e._currentIndex < e._textLength && (t = e._text.substring(e._currentIndex), e._currentIndex = e._textLength);
								return t
							}(e);
							e._currentToken = Tv.query(t), e._currentState = "DONE"
						}(this);
						break;
					default:
						throw new Error(`Unrecognized URLTokenizerState: ${this._currentState}`)
				} else this._currentToken = void 0;
				return !!this._currentToken
			}
		}

		function Av(e) {
			return e._currentIndex < e._textLength
		}

		function Iv(e) {
			return e._text[e._currentIndex]
		}

		function Bv(e, t) {
			Av(e) && (t || (t = 1), e._currentIndex += t)
		}

		function Mv(e, t) {
			let n = e._currentIndex + t;
			return e._textLength < n && (n = e._textLength), e._text.substring(e._currentIndex, n)
		}

		function qv(e, t) {
			let n = "";
			for (; Av(e);) {
				const r = Iv(e);
				if (!t(r)) break;
				n += r, Bv(e)
			}
			return n
		}

		function _v(e, ...t) {
			return qv(e, (e => -1 === t.indexOf(e)))
		}
		const Dv = "REDACTED",
			Lv = ["x-ms-client-request-id", "x-ms-return-client-request-id", "x-ms-useragent", "x-ms-correlation-request-id", "x-ms-request-id", "client-request-id", "ms-cv", "return-client-request-id", "traceparent", "Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Origin", "Accept", "Accept-Encoding", "Cache-Control", "Connection", "Content-Length", "Content-Type", "Date", "ETag", "Expires", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "Last-Modified", "Pragma", "Request-Id", "Retry-After", "Server", "Transfer-Encoding", "User-Agent", "WWW-Authenticate"],
			Hv = ["api-version"];
		class Uv {
			constructor({
				allowedHeaderNames: e = [],
				allowedQueryParameters: t = []
			} = {}) {
				e = Array.isArray(e) ? Lv.concat(e) : Lv, t = Array.isArray(t) ? Hv.concat(t) : Hv, this.allowedHeaderNames = new Set(e.map((e => e.toLowerCase()))), this.allowedQueryParameters = new Set(t.map((e => e.toLowerCase())))
			}
			sanitize(e) {
				const t = new Set;
				return JSON.stringify(e, ((e, n) => {
					if (n instanceof Error) return Object.assign(Object.assign({}, n), {
						name: n.name,
						message: n.message
					});
					if ("_headersMap" === e) return this.sanitizeHeaders(n);
					if ("url" === e) return this.sanitizeUrl(n);
					if ("query" === e) return this.sanitizeQuery(n);
					if ("body" !== e && "response" !== e && "operationSpec" !== e) {
						if (Array.isArray(n) || !("object" != typeof(r = n) || null === r || Array.isArray(r) || r instanceof RegExp || r instanceof Date)) {
							if (t.has(n)) return "[Circular]";
							t.add(n)
						}
						var r;
						return n
					}
				}), 2)
			}
			sanitizeHeaders(e) {
				return this.sanitizeObject(e, this.allowedHeaderNames, ((e, t) => e[t].value))
			}
			sanitizeQuery(e) {
				return this.sanitizeObject(e, this.allowedQueryParameters, ((e, t) => e[t]))
			}
			sanitizeObject(e, t, n) {
				if ("object" != typeof e || null === e) return e;
				const r = {};
				for (const s of Object.keys(e)) t.has(s.toLowerCase()) ? r[s] = n(e, s) : r[s] = Dv;
				return r
			}
			sanitizeUrl(e) {
				if ("string" != typeof e || null === e) return e;
				const t = Ov.parse(e),
					n = t.getQuery();
				if (!n) return e;
				const r = zv.parse(n);
				for (const e of r.keys()) this.allowedQueryParameters.has(e.toLowerCase()) || r.set(e, Dv);
				return t.setQuery(r.toString()), t.toString()
			}
		}
		const jv = {},
			$v = new Uv;
		class Fv extends Error {
			constructor(e, t, n, r, s) {
				super(e), this.name = "RestError", this.code = t, this.statusCode = n, this.request = r, this.response = s, Object.setPrototypeOf(this, Fv.prototype)
			} [jv]() {
				return `RestError: ${this.message} \n ${$v.sanitize(this)}`
			}
		}
		if (Fv.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR", Fv.PARSE_ERROR = "PARSE_ERROR", !(self.document && self.DOMParser && self.Node && self.XMLSerializer)) throw new Error('This library depends on the following DOM objects: ["document", "DOMParser", "Node", "XMLSerializer"] to parse XML, but some of these are undefined. You may provide a polyfill to make these globally available in order to support your environment. For more information, please refer to https://aka.ms/azsdk/js/web-workers. ');
		let Vv, Kv, Gv, Wv, Xv;

		function Qv() {
			return Vv || (Vv = document.implementation.createDocument(null, null, null)), Vv
		}

		function Jv() {
			return Kv || (Kv = new DOMParser), Kv
		}

		function Zv(e, t = {}) {
			var n, r, s, i;
			try {
				const a = {
						rootName: null !== (n = t.rootName) && void 0 !== n ? n : "",
						includeRoot: null !== (r = t.includeRoot) && void 0 !== r && r,
						xmlCharKey: null !== (s = t.xmlCharKey) && void 0 !== s ? s : qg
					},
					o = Jv().parseFromString(null !== (i = null == Wv ? void 0 : Wv.createHTML(e)) && void 0 !== i ? i : e, "application/xml");
				let l;
				return function(e) {
					const t = e.getElementsByTagName("parsererror");
					if (t.length > 0 && function() {
							var e, t;
							if (void 0 === Xv) try {
								const n = null !== (e = null == Wv ? void 0 : Wv.createHTML("INVALID")) && void 0 !== e ? e : "INVALID";
								Xv = null !== (t = Jv().parseFromString(n, "text/xml").getElementsByTagName("parsererror")[0].namespaceURI) && void 0 !== t ? t : ""
							} catch (e) {
								Xv = ""
							}
							return Xv
						}())
						for (let e = 0; e < t.length; e++)
							if (t[e].namespaceURI === Xv) throw new Error(t[e].innerHTML)
				}(o), l = a.includeRoot ? Yv(o, a) : Yv(o.childNodes[0], a), Promise.resolve(l)
			} catch (e) {
				return Promise.reject(e)
			}
		}

		function Yv(e, t) {
			let n = {};
			const r = e.childNodes.length,
				s = e.childNodes[0],
				i = s && 1 === r && s.nodeType === Node.TEXT_NODE && s.nodeValue || void 0,
				a = function(e) {
					return function(e) {
						return !!e.attributes
					}(e) && e.hasAttributes() ? e : void 0
				}(e);
			if (a) {
				n[Mg] = {};
				for (let e = 0; e < a.attributes.length; e++) {
					const t = a.attributes[e];
					n[Mg][t.nodeName] = t.nodeValue
				}
				i && (n[t.xmlCharKey] = i)
			} else 0 === r ? n = "" : i && (n = i);
			if (!i)
				for (let s = 0; s < r; s++) {
					const r = e.childNodes[s];
					if (r.nodeType !== Node.TEXT_NODE) {
						const e = Yv(r, t);
						n[r.nodeName] ? Array.isArray(n[r.nodeName]) ? n[r.nodeName].push(e) : n[r.nodeName] = [n[r.nodeName], e] : n[r.nodeName] = e
					}
				}
			return n
		}

		function ew(e, t = {}) {
			var n, r, s;
			const i = {
					rootName: null !== (n = t.rootName) && void 0 !== n ? n : "root",
					includeRoot: null !== (r = t.includeRoot) && void 0 !== r && r,
					xmlCharKey: null !== (s = t.xmlCharKey) && void 0 !== s ? s : qg
				},
				a = nw(e, i.rootName, i)[0];
			return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + (Gv || (Gv = new XMLSerializer), Gv).serializeToString(a)
		}

		function tw(e) {
			const t = [];
			for (const n of Object.keys(e)) {
				const r = Qv().createAttribute(n);
				r.value = e[n].toString(), t.push(r)
			}
			return t
		}

		function nw(e, t, n) {
			if (null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
				const n = Qv().createElement(t);
				return n.textContent = null == e ? "" : e.toString(), [n]
			}
			if (Array.isArray(e)) {
				const r = [];
				for (const s of e)
					for (const e of nw(s, t, n)) r.push(e);
				return r
			}
			if ("object" == typeof e) {
				const r = Qv().createElement(t);
				for (const t of Object.keys(e))
					if (t === Mg)
						for (const n of tw(e[t])) r.attributes.setNamedItem(n);
					else if (t === n.xmlCharKey) r.textContent = e[t].toString();
				else
					for (const s of nw(e[t], t, n)) r.appendChild(s);
				return [r]
			}
			throw new Error(`Illegal value passed to buildObject: ${e}`)
		}

		function rw(e, t) {
			return {
				create: (n, r) => new aw(n, r, e, t)
			}
		}
		void 0 !== self.trustedTypes && (Wv = self.trustedTypes.createPolicy("@azure/core-http#xml.browser", {
			createHTML: e => e
		}));
		const sw = ["application/json", "text/json"],
			iw = ["application/xml", "application/atom+xml"];
		class aw extends wh {
			constructor(e, t, n, r = {}) {
				var s;
				super(e, t), this.jsonContentTypes = n && n.json || sw, this.xmlContentTypes = n && n.xml || iw, this.xmlCharKey = null !== (s = r.xmlCharKey) && void 0 !== s ? s : qg
			}
			async sendRequest(e) {
				return this._nextPolicy.sendRequest(e).then((e => function(e, t, n, r = {}) {
					var s, i, a;
					const o = {
						rootName: null !== (s = r.rootName) && void 0 !== s ? s : "",
						includeRoot: null !== (i = r.includeRoot) && void 0 !== i && i,
						xmlCharKey: null !== (a = r.xmlCharKey) && void 0 !== a ? a : qg
					};
					return function(e, t, n, r) {
						var s;
						const i = e => {
								const t = `Error "${e}" occurred while parsing the response body - ${n.bodyAsText}.`,
									r = e.code || Fv.PARSE_ERROR,
									s = new Fv(t, r, n.status, n.request, n);
								return Promise.reject(s)
							},
							a = (null === (s = n.request.streamResponseStatusCodes) || void 0 === s ? void 0 : s.has(n.status)) || n.request.streamResponseBody;
						if (!a && n.bodyAsText) {
							const s = n.bodyAsText,
								a = n.headers.get("Content-Type") || "",
								o = a ? a.split(";").map((e => e.toLowerCase())) : [];
							if (0 === o.length || o.some((t => -1 !== e.indexOf(t)))) return new Promise((e => {
								n.parsedBody = JSON.parse(s), e(n)
							})).catch(i);
							if (o.some((e => -1 !== t.indexOf(e)))) return Zv(s, r).then((e => (n.parsedBody = e, n))).catch(i)
						}
						return Promise.resolve(n)
					}(e, t, n, o).then((e => {
						if (! function(e) {
								const t = e.request.shouldDeserialize;
								let n;
								n = void 0 === t || ("boolean" == typeof t ? t : t(e));
								return n
							}(e)) return e;
						const t = e.request.operationSpec;
						if (!t || !t.responses) return e;
						const s = function(e) {
								let t;
								const n = e.request,
									r = n.operationSpec;
								if (r) {
									const s = n.operationResponseGetter;
									t = s ? s(r, e) : r.responses[e.status]
								}
								return t
							}(e),
							{
								error: i,
								shouldReturnResponse: a
							} = function(e, t, n) {
								var r;
								const s = 200 <= e.status && e.status < 300,
									i = function(e) {
										const t = Object.keys(e.responses);
										return 0 === t.length || 1 === t.length && "default" === t[0]
									}(t) ? s : !!n;
								if (i) {
									if (!n) return {
										error: null,
										shouldReturnResponse: !1
									};
									if (!n.isError) return {
										error: null,
										shouldReturnResponse: !1
									}
								}
								const a = null != n ? n : t.responses.default,
									o = (null === (r = e.request.streamResponseStatusCodes) || void 0 === r ? void 0 : r.has(e.status)) || e.request.streamResponseBody,
									l = o ? `Unexpected status code: ${e.status}` : e.bodyAsText,
									c = new Fv(l, void 0, e.status, e.request, e);
								if (!a) throw c;
								const d = a.bodyMapper,
									m = a.headersMapper;
								try {
									if (e.parsedBody) {
										const n = e.parsedBody;
										let r;
										if (d) {
											let e = n;
											t.isXML && d.type.name === iy.Sequence && (e = "object" == typeof n ? n[d.xmlElementName] : []), r = t.serializer.deserialize(d, e, "error.response.parsedBody")
										}
										const s = n.error || r || n;
										c.code = s.code, s.message && (c.message = s.message), d && (c.response.parsedBody = r)
									}
									e.headers && m && (c.response.parsedHeaders = t.serializer.deserialize(m, e.headers.toJson(), "operationRes.parsedHeaders"))
								} catch (t) {
									c.message = `Error "${t.message}" occurred in deserializing the responseBody - "${e.bodyAsText}" for the default response.`
								}
								return {
									error: c,
									shouldReturnResponse: !1
								}
							}(e, t, s);
						if (i) throw i;
						if (a) return e;
						if (s) {
							if (s.bodyMapper) {
								let n = e.parsedBody;
								t.isXML && s.bodyMapper.type.name === iy.Sequence && (n = "object" == typeof n ? n[s.bodyMapper.xmlElementName] : []);
								try {
									e.parsedBody = t.serializer.deserialize(s.bodyMapper, n, "operationRes.parsedBody", r)
								} catch (t) {
									throw new Fv(`Error ${t} occurred in deserializing the responseBody - ${e.bodyAsText}`, void 0, e.status, e.request, e)
								}
							} else "HEAD" === t.httpMethod && (e.parsedBody = n.status >= 200 && n.status < 300);
							s.headersMapper && (e.parsedHeaders = t.serializer.deserialize(s.headersMapper, e.headers.toJson(), "operationRes.parsedHeaders", r))
						}
						return e
					}))
				}(this.jsonContentTypes, this.xmlContentTypes, e, {
					xmlCharKey: this.xmlCharKey
				})))
			}
		}

		function ow(e = {}) {
			return {
				create: (t, n) => new lw(t, n, e)
			}
		}
		class lw extends wh {
			constructor(e, t, {
				logger: n = Nv.info,
				allowedHeaderNames: r = [],
				allowedQueryParameters: s = []
			} = {}) {
				super(e, t), this.logger = n, this.sanitizer = new Uv({
					allowedHeaderNames: r,
					allowedQueryParameters: s
				})
			}
			get allowedHeaderNames() {
				return this.sanitizer.allowedHeaderNames
			}
			set allowedHeaderNames(e) {
				this.sanitizer.allowedHeaderNames = e
			}
			get allowedQueryParameters() {
				return this.sanitizer.allowedQueryParameters
			}
			set allowedQueryParameters(e) {
				this.sanitizer.allowedQueryParameters = e
			}
			sendRequest(e) {
				return this.logger.enabled ? (this.logRequest(e), this._nextPolicy.sendRequest(e).then((e => this.logResponse(e)))) : this._nextPolicy.sendRequest(e)
			}
			logRequest(e) {
				this.logger(`Request: ${this.sanitizer.sanitize(e)}`)
			}
			logResponse(e) {
				return this.logger(`Response status code: ${e.status}`), this.logger(`Headers: ${this.sanitizer.sanitize(e.headers)}`), e
			}
		}
		const cw = "DisableResponseDecompressionPolicy is not supported in browser environment";
		const dw = gv("storage-blob"),
			mw = "2021-12-02",
			uw = 268435456,
			pw = 4194304e3,
			hw = 5e4,
			gw = 4194304,
			yw = "https://storage.azure.com/.default",
			fw = {
				FORCE_BROWSER_NO_CACHE: "_",
				SIGNATURE: "sig",
				SNAPSHOT: "snapshot",
				VERSIONID: "versionid",
				TIMEOUT: "timeout"
			},
			bw = 202,
			xw = "Content-ID",
			Nw = "Content-Length",
			Sw = "Content-Transfer-Encoding",
			vw = "Content-Type",
			ww = "Cookie",
			Cw = "User-Agent",
			Pw = "x-ms-error-code",
			Rw = "x-ms-version",
			Ew = "",
			zw = "\r\n",
			Ow = "HTTP/1.1",
			Tw = ["Access-Control-Allow-Origin", "Cache-Control", "Content-Length", "Content-Type", "Date", "Request-Id", "traceparent", "Transfer-Encoding", "User-Agent", "x-ms-client-request-id", "x-ms-date", "x-ms-error-code", "x-ms-request-id", "x-ms-return-client-request-id", "x-ms-version", "Accept-Ranges", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-MD5", "Content-Range", "ETag", "Last-Modified", "Server", "Vary", "x-ms-content-crc64", "x-ms-copy-action", "x-ms-copy-completion-time", "x-ms-copy-id", "x-ms-copy-progress", "x-ms-copy-status", "x-ms-has-immutability-policy", "x-ms-has-legal-hold", "x-ms-lease-state", "x-ms-lease-status", "x-ms-range", "x-ms-request-server-encrypted", "x-ms-server-encrypted", "x-ms-snapshot", "x-ms-source-range", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "x-ms-access-tier", "x-ms-access-tier-change-time", "x-ms-access-tier-inferred", "x-ms-account-kind", "x-ms-archive-status", "x-ms-blob-append-offset", "x-ms-blob-cache-control", "x-ms-blob-committed-block-count", "x-ms-blob-condition-appendpos", "x-ms-blob-condition-maxsize", "x-ms-blob-content-disposition", "x-ms-blob-content-encoding", "x-ms-blob-content-language", "x-ms-blob-content-length", "x-ms-blob-content-md5", "x-ms-blob-content-type", "x-ms-blob-public-access", "x-ms-blob-sequence-number", "x-ms-blob-type", "x-ms-copy-destination-snapshot", "x-ms-creation-time", "x-ms-default-encryption-scope", "x-ms-delete-snapshots", "x-ms-delete-type-permanent", "x-ms-deny-encryption-scope-override", "x-ms-encryption-algorithm", "x-ms-if-sequence-number-eq", "x-ms-if-sequence-number-le", "x-ms-if-sequence-number-lt", "x-ms-incremental-copy", "x-ms-lease-action", "x-ms-lease-break-period", "x-ms-lease-duration", "x-ms-lease-id", "x-ms-lease-time", "x-ms-page-write", "x-ms-proposed-lease-id", "x-ms-range-get-content-md5", "x-ms-rehydrate-priority", "x-ms-sequence-number-action", "x-ms-sku-name", "x-ms-source-content-md5", "x-ms-source-if-match", "x-ms-source-if-modified-since", "x-ms-source-if-none-match", "x-ms-source-if-unmodified-since", "x-ms-tag-count", "x-ms-encryption-key-sha256", "x-ms-if-tags", "x-ms-source-if-tags"],
			kw = ["comp", "maxresults", "rscc", "rscd", "rsce", "rscl", "rsct", "se", "si", "sip", "sp", "spr", "sr", "srt", "ss", "st", "sv", "include", "marker", "prefix", "copyid", "restype", "blockid", "blocklisttype", "delimiter", "prevsnapshot", "ske", "skoid", "sks", "skt", "sktid", "skv", "snapshot"],
			Aw = ["10000", "10001", "10002", "10003", "10004", "10100", "10101", "10102", "10103", "10104", "11000", "11001", "11002", "11003", "11004", "11100", "11101", "11102", "11103", "11104"];

		function Iw(e) {
			const t = Ov.parse(e);
			let n = t.getPath();
			return n = n || "/", n = encodeURIComponent(n).replace(/%2F/g, "/").replace(/'/g, "%27").replace(/\+/g, "%20").replace(/%25/g, "%"), t.setPath(n), t.toString()
		}

		function Bw(e, t) {
			const n = e.split(";");
			for (const e of n)
				if (e.trim().startsWith(t)) return e.trim().match(t + "=(.*)")[1];
			return ""
		}

		function Mw(e) {
			let t = "";
			e.startsWith("UseDevelopmentStorage=true") && (t = function(e) {
				let t = "";
				if (-1 !== e.search("DevelopmentStorageProxyUri=")) {
					const n = e.split(";");
					for (const e of n) e.trim().startsWith("DevelopmentStorageProxyUri=") && (t = e.trim().match("DevelopmentStorageProxyUri=(.*)")[1])
				}
				return t
			}(e), e = "DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;");
			let n = Bw(e, "BlobEndpoint");
			if (n = n.endsWith("/") ? n.slice(0, -1) : n, -1 !== e.search("DefaultEndpointsProtocol=") && -1 !== e.search("AccountKey=")) {
				let r = "",
					s = "",
					i = Buffer.from("accountKey", "base64"),
					a = "";
				if (s = Bw(e, "AccountName"), i = Buffer.from(Bw(e, "AccountKey"), "base64"), !n) {
					r = Bw(e, "DefaultEndpointsProtocol");
					const t = r.toLowerCase();
					if ("https" !== t && "http" !== t) throw new Error("Invalid DefaultEndpointsProtocol in the provided Connection String. Expecting 'https' or 'http'");
					if (a = Bw(e, "EndpointSuffix"), !a) throw new Error("Invalid EndpointSuffix in the provided Connection String");
					n = `${r}://${s}.blob.${a}`
				}
				if (!s) throw new Error("Invalid AccountName in the provided Connection String");
				if (0 === i.length) throw new Error("Invalid AccountKey in the provided Connection String");
				return {
					kind: "AccountConnString",
					url: n,
					accountName: s,
					accountKey: i,
					proxyUri: t
				}
			} {
				const t = Bw(e, "SharedAccessSignature"),
					r = Vw(n);
				if (!n) throw new Error("Invalid BlobEndpoint in the provided SAS Connection String");
				if (!t) throw new Error("Invalid SharedAccessSignature in the provided SAS Connection String");
				return {
					kind: "SASConnString",
					url: n,
					accountName: r,
					accountSas: t
				}
			}
		}

		function qw(e, t) {
			const n = Ov.parse(e);
			let r = n.getPath();
			r = r ? r.endsWith("/") ? `${r}${t}` : `${r}/${t}` : t, n.setPath(r);
			return new URL(n.toString()).toString()
		}

		function _w(e, t, n) {
			const r = Ov.parse(e);
			return r.setQueryParameter(t, n), r.toString()
		}

		function Dw(e, t) {
			return Ov.parse(e).getQueryParameterValue(t)
		}

		function Lw(e) {
			return Ov.parse(e).getPath()
		}

		function Hw(e) {
			const t = Ov.parse(e),
				n = t.getPath();
			if (!n) throw new RangeError("Invalid url without valid path.");
			let r = t.getQuery() || "";
			return r = r.trim(), "" !== r && (r = r.startsWith("?") ? r : `?${r}`), `${n}${r}`
		}

		function Uw(e, t) {
			const n = Ov.parse(e);
			let r = n.getQuery();
			return r ? r += "&" + t : r = t, n.setQuery(r), n.toString()
		}

		function jw(e, t = !0) {
			const n = e.toISOString();
			return t ? n.substring(0, n.length - 1) + "0000Z" : n.substring(0, n.length - 5) + "Z"
		}

		function $w(e, t) {
			e.length > 42 && (e = e.slice(0, 42));
			const n = e + function(e, t, n = " ") {
				if (String.prototype.padStart) return e.padStart(t, n);
				return n = n || " ", e.length > t ? e : ((t -= e.length) > n.length && (n += n.repeat(t / n.length)), n.slice(0, t) + e)
			}(t.toString(), 48 - e.length, "0");
			return r = n, Nh ? Buffer.from(r).toString("base64") : btoa(r);
			var r
		}

		function Fw(e, t) {
			return e.toLocaleLowerCase() === t.toLocaleLowerCase()
		}

		function Vw(e) {
			const t = Ov.parse(e);
			let n;
			try {
				return n = "blob" === t.getHost().split(".")[1] ? t.getHost().split(".")[0] : Kw(t) ? t.getPath().split("/")[1] : "", n
			} catch (e) {
				throw new Error("Unable to extract accountName with provided information.")
			}
		}

		function Kw(e) {
			if (void 0 === e.getHost()) return !1;
			const t = e.getHost() + (void 0 === e.getPort() ? "" : ":" + e.getPort());
			return /^.*:.*:.*$|^localhost(:[0-9]+)?$|^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])){3}(:[0-9]+)?$/.test(t) || void 0 !== e.getPort() && Aw.includes(e.getPort())
		}

		function Gw(e) {
			if (void 0 === e) return;
			const t = [];
			for (const n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					const r = e[n];
					t.push(`${encodeURIComponent(n)}=${encodeURIComponent(r)}`)
				} return t.join("&")
		}

		function Ww(e) {
			if (void 0 === e) return;
			const t = {
				blobTagSet: []
			};
			for (const n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					const r = e[n];
					t.blobTagSet.push({
						key: n,
						value: r
					})
				} return t
		}

		function Xw(e) {
			if (void 0 === e) return;
			const t = {};
			for (const n of e.blobTagSet) t[n.key] = n.value;
			return t
		}

		function Qw(e) {
			if (void 0 !== e) switch (e.kind) {
				case "csv":
					return {
						format: {
							type: "delimited",
							delimitedTextConfiguration: {
								columnSeparator: e.columnSeparator || ",",
								fieldQuote: e.fieldQuote || "",
								recordSeparator: e.recordSeparator,
								escapeChar: e.escapeCharacter || "",
								headersPresent: e.hasHeaders || !1
							}
						}
					};
				case "json":
					return {
						format: {
							type: "json",
							jsonTextConfiguration: {
								recordSeparator: e.recordSeparator
							}
						}
					};
				case "arrow":
					return {
						format: {
							type: "arrow",
							arrowConfiguration: {
								schema: e.schema
							}
						}
					};
				case "parquet":
					return {
						format: {
							type: "parquet"
						}
					};
				default:
					throw Error("Invalid BlobQueryTextConfiguration.")
			}
		}

		function Jw(e) {
			if (!e) return;
			if ("policy-id" in e) return;
			const t = [];
			for (const n in e) {
				const r = n.split("_"),
					s = "or-";
				r[0].startsWith(s) && (r[0] = r[0].substring(s.length));
				const i = {
						ruleId: r[1],
						replicationStatus: e[n]
					},
					a = t.findIndex((e => e.policyId === r[0]));
				a > -1 ? t[a].rules.push(i) : t.push({
					policyId: r[0],
					rules: [i]
				})
			}
			return t
		}

		function Zw(e, t) {
			return e.credential = t, e
		}

		function Yw(e) {
			return e ? e.scheme + " " + e.value : void 0
		}

		function eC(e) {
			return e.encoded ? decodeURIComponent(e.content) : e.content
		}

		function tC(e) {
			var t;
			return Object.assign(Object.assign({}, e), {
				segment: {
					blobPrefixes: null === (t = e.segment.blobPrefixes) || void 0 === t ? void 0 : t.map((e => ({
						name: eC(e.name)
					}))),
					blobItems: e.segment.blobItems.map((e => Object.assign(Object.assign({}, e), {
						name: eC(e.name)
					})))
				}
			})
		}

		function* nC(e) {
			let t = [],
				n = [];
			e.pageRange && (t = e.pageRange), e.clearRange && (n = e.clearRange);
			let r = 0,
				s = 0;
			for (; r < t.length && s < n.length;) t[r].start < n[s].start ? (yield {
				start: t[r].start,
				end: t[r].end,
				isClear: !1
			}, ++r) : (yield {
				start: n[s].start,
				end: n[s].end,
				isClear: !0
			}, ++s);
			for (; r < t.length; ++r) yield {
				start: t[r].start,
				end: t[r].end,
				isClear: !1
			};
			for (; s < n.length; ++s) yield {
				start: n[s].start,
				end: n[s].end,
				isClear: !0
			}
		}

		function rC(e) {
			const t = e.split("/");
			for (let e = 0; e < t.length; e++) t[e] = encodeURIComponent(t[e]);
			return t.join("/")
		}
		class sC extends wh {
			constructor(e, t) {
				super(e, t)
			}
			async sendRequest(e) {
				return Nh || ("GET" !== e.method.toUpperCase() && "HEAD" !== e.method.toUpperCase() || (e.url = _w(e.url, fw.FORCE_BROWSER_NO_CACHE, (new Date).getTime().toString())), e.headers.remove(ww), e.headers.remove(Nw)), this._nextPolicy.sendRequest(e)
			}
		}
		class iC {
			create(e, t) {
				return new sC(e, t)
			}
		}
		class aC extends Error {
			constructor(e) {
				super(e), this.name = "AbortError"
			}
		}
		var oC;
		! function(e) {
			e[e.EXPONENTIAL = 0] = "EXPONENTIAL", e[e.FIXED = 1] = "FIXED"
		}(oC || (oC = {}));
		const lC = {
				maxRetryDelayInMs: 12e4,
				maxTries: 4,
				retryDelayInMs: 4e3,
				retryPolicyType: oC.EXPONENTIAL,
				secondaryHost: "",
				tryTimeoutInMs: void 0
			},
			cC = new aC("The operation was aborted.");
		class dC extends wh {
			constructor(e, t, n = lC) {
				super(e, t), this.retryOptions = {
					retryPolicyType: n.retryPolicyType ? n.retryPolicyType : lC.retryPolicyType,
					maxTries: n.maxTries && n.maxTries >= 1 ? Math.floor(n.maxTries) : lC.maxTries,
					tryTimeoutInMs: n.tryTimeoutInMs && n.tryTimeoutInMs >= 0 ? n.tryTimeoutInMs : lC.tryTimeoutInMs,
					retryDelayInMs: n.retryDelayInMs && n.retryDelayInMs >= 0 ? Math.min(n.retryDelayInMs, n.maxRetryDelayInMs ? n.maxRetryDelayInMs : lC.maxRetryDelayInMs) : lC.retryDelayInMs,
					maxRetryDelayInMs: n.maxRetryDelayInMs && n.maxRetryDelayInMs >= 0 ? n.maxRetryDelayInMs : lC.maxRetryDelayInMs,
					secondaryHost: n.secondaryHost ? n.secondaryHost : lC.secondaryHost
				}
			}
			async sendRequest(e) {
				return this.attemptSendRequest(e, !1, 1)
			}
			async attemptSendRequest(e, t, n) {
				const r = e.clone(),
					s = t || !this.retryOptions.secondaryHost || !("GET" === e.method || "HEAD" === e.method || "OPTIONS" === e.method) || n % 2 == 1;
				let i;
				s || (r.url = function(e, t) {
					const n = Ov.parse(e);
					return n.setHost(t), n.toString()
				}(r.url, this.retryOptions.secondaryHost)), this.retryOptions.tryTimeoutInMs && (r.url = _w(r.url, fw.TIMEOUT, Math.floor(this.retryOptions.tryTimeoutInMs / 1e3).toString()));
				try {
					if (dw.info(`RetryPolicy: =====> Try=${n} ${s?"Primary":"Secondary"}`), i = await this._nextPolicy.sendRequest(r), !this.shouldRetry(s, n, i)) return i;
					t = t || !s && 404 === i.status
				} catch (e) {
					if (dw.error(`RetryPolicy: Caught error, message: ${e.message}, code: ${e.code}`), !this.shouldRetry(s, n, i, e)) throw e
				}
				return await this.delay(s, n, e.abortSignal), this.attemptSendRequest(e, t, ++n)
			}
			shouldRetry(e, t, n, r) {
				if (t >= this.retryOptions.maxTries) return dw.info(`RetryPolicy: Attempt(s) ${t} >= maxTries ${this.retryOptions.maxTries}, no further try.`), !1;
				const s = ["ETIMEDOUT", "ESOCKETTIMEDOUT", "ECONNREFUSED", "ECONNRESET", "ENOENT", "ENOTFOUND", "TIMEOUT", "EPIPE", "REQUEST_SEND_ERROR"];
				if (r)
					for (const e of s)
						if (r.name.toUpperCase().includes(e) || r.message.toUpperCase().includes(e) || r.code && r.code.toString().toUpperCase() === e) return dw.info(`RetryPolicy: Network error ${e} found, will retry.`), !0;
				if (n || r) {
					const t = n ? n.status : r ? r.statusCode : 0;
					if (!e && 404 === t) return dw.info("RetryPolicy: Secondary access with 404, will retry."), !0;
					if (503 === t || 500 === t) return dw.info(`RetryPolicy: Will retry for status code ${t}.`), !0
				}
				return !("PARSE_ERROR" !== (null == r ? void 0 : r.code) || !(null == r ? void 0 : r.message.startsWith('Error "Error: Unclosed root tag'))) && (dw.info("RetryPolicy: Incomplete XML response likely due to service timeout, will retry."), !0)
			}
			async delay(e, t, n) {
				let r = 0;
				if (e) switch (this.retryOptions.retryPolicyType) {
					case oC.EXPONENTIAL:
						r = Math.min((Math.pow(2, t - 1) - 1) * this.retryOptions.retryDelayInMs, this.retryOptions.maxRetryDelayInMs);
						break;
					case oC.FIXED:
						r = this.retryOptions.retryDelayInMs
				} else r = 1e3 * Math.random();
				return dw.info(`RetryPolicy: Delay for ${r}ms`), async function(e, t, n) {
					return new Promise(((r, s) => {
						let i;
						const a = () => {
							void 0 !== i && clearTimeout(i), s(n)
						};
						i = setTimeout((() => {
							void 0 !== t && t.removeEventListener("abort", a), r()
						}), e), void 0 !== t && t.addEventListener("abort", a)
					}))
				}(r, n, cC)
			}
		}
		class mC {
			constructor(e) {
				this.retryOptions = e
			}
			create(e, t) {
				return new dC(e, t, this.retryOptions)
			}
		}
		class uC extends wh {
			sendRequest(e) {
				return this._nextPolicy.sendRequest(this.signRequest(e))
			}
			signRequest(e) {
				return e
			}
		}
		class pC extends uC {
			constructor(e, t) {
				super(e, t)
			}
		}
		class hC {
			create(e, t) {
				throw new Error("Method should be implemented in children classes.")
			}
		}
		class gC extends hC {
			create(e, t) {
				return new pC(e, t)
			}
		}
		var yC = n(846);

		function fC(e) {
			return e.toLowerCase()
		}

		function bC(e) {
			if (e && "object" == typeof e) {
				const t = e;
				if ("function" == typeof t.rawHeaders && "function" == typeof t.clone && "function" == typeof t.get && "function" == typeof t.set && "function" == typeof t.contains && "function" == typeof t.remove && "function" == typeof t.headersArray && "function" == typeof t.headerValues && "function" == typeof t.headerNames && "function" == typeof t.toJson) return !0
			}
			return !1
		}
		class xC {
			constructor(e) {
				if (this._headersMap = {}, e)
					for (const t in e) this.set(t, e[t])
			}
			set(e, t) {
				this._headersMap[fC(e)] = {
					name: e,
					value: t.toString().trim()
				}
			}
			get(e) {
				const t = this._headersMap[fC(e)];
				return t ? t.value : void 0
			}
			contains(e) {
				return !!this._headersMap[fC(e)]
			}
			remove(e) {
				const t = this.contains(e);
				return delete this._headersMap[fC(e)], t
			}
			rawHeaders() {
				return this.toJson({
					preserveCase: !0
				})
			}
			headersArray() {
				const e = [];
				for (const t in this._headersMap) e.push(this._headersMap[t]);
				return e
			}
			headerNames() {
				const e = [],
					t = this.headersArray();
				for (let n = 0; n < t.length; ++n) e.push(t[n].name);
				return e
			}
			headerValues() {
				const e = [],
					t = this.headersArray();
				for (let n = 0; n < t.length; ++n) e.push(t[n].value);
				return e
			}
			toJson(e = {}) {
				const t = {};
				if (e.preserveCase)
					for (const e in this._headersMap) {
						const n = this._headersMap[e];
						t[n.name] = n.value
					} else
						for (const e in this._headersMap) {
							const n = this._headersMap[e];
							t[fC(n.name)] = n.value
						}
				return t
			}
			toString() {
				return JSON.stringify(this.toJson({
					preserveCase: !0
				}))
			}
			clone() {
				const e = {};
				for (const t in this._headersMap) {
					const n = this._headersMap[t];
					e[n.name] = n.value
				}
				return new xC(e)
			}
		}
		class NC extends wh {
			constructor(e, t, n) {
				super(e, t), this.telemetry = n
			}
			async sendRequest(e) {
				return Nh && (e.headers || (e.headers = new xC), e.headers.get(Cw) || e.headers.set(Cw, this.telemetry)), this._nextPolicy.sendRequest(e)
			}
		}
		class SC {
			constructor(e) {
				const t = [];
				if (Nh) {
					if (e) {
						const n = e.userAgentPrefix || "";
						n.length > 0 && -1 === t.indexOf(n) && t.push(n)
					}
					const n = "azsdk-js-storageblob/12.13.0"; - 1 === t.indexOf(n) && t.push(n);
					let r = `(NODE-VERSION ${process.version})`;
					yC && (r = `(NODE-VERSION ${process.version}; ${yC.type()} ${yC.release()})`), -1 === t.indexOf(r) && t.push(r)
				}
				this.telemetryString = t.join(" ")
			}
			create(e, t) {
				return new NC(e, t, this.telemetryString)
			}
		}
		class vC extends Error {
			constructor(e) {
				super(e), this.name = "AbortError"
			}
		}
		class wC {
			sendRequest(e) {
				var t;
				const n = new XMLHttpRequest;
				if (e.proxySettings) throw new Error("HTTP proxy is not supported in browser environment");
				const r = e.abortSignal;
				if (r) {
					if (r.aborted) return Promise.reject(new vC("The operation was aborted."));
					const e = () => {
						n.abort()
					};
					r.addEventListener("abort", e), n.addEventListener("readystatechange", (() => {
						n.readyState === XMLHttpRequest.DONE && r.removeEventListener("abort", e)
					}))
				}
				if (CC(n.upload, e.onUploadProgress), CC(n, e.onDownloadProgress), e.formData) {
					const t = e.formData,
						n = new FormData,
						r = (e, t) => {
							t && Object.prototype.hasOwnProperty.call(t, "value") && Object.prototype.hasOwnProperty.call(t, "options") ? n.append(e, t.value, t.options) : n.append(e, t)
						};
					for (const e of Object.keys(t)) {
						const n = t[e];
						if (Array.isArray(n))
							for (let t = 0; t < n.length; t++) r(e, n[t]);
						else r(e, n)
					}
					e.body = n, e.formData = void 0;
					const s = e.headers.get("Content-Type");
					s && -1 !== s.indexOf("multipart/form-data") && e.headers.remove("Content-Type")
				}
				n.open(e.method, e.url), n.timeout = e.timeout, n.withCredentials = e.withCredentials;
				for (const t of e.headers.headersArray()) n.setRequestHeader(t.name, t.value);
				return n.responseType = (null === (t = e.streamResponseStatusCodes) || void 0 === t ? void 0 : t.size) || e.streamResponseBody ? "blob" : "text", n.send(void 0 === e.body ? null : e.body), "blob" === n.responseType ? new Promise(((t, r) => {
					! function(e, t, n, r) {
						e.addEventListener("readystatechange", (() => {
							var s;
							if (e.readyState === XMLHttpRequest.HEADERS_RECEIVED)
								if (t.streamResponseBody || (null === (s = t.streamResponseStatusCodes) || void 0 === s ? void 0 : s.has(e.status))) {
									const r = new Promise(((n, r) => {
										e.addEventListener("load", (() => {
											n(e.response)
										})), RC(t, e, r)
									}));
									n({
										request: t,
										status: e.status,
										headers: PC(e),
										blobBody: r
									})
								} else e.addEventListener("load", (() => {
									if (e.response) {
										const s = new FileReader;
										s.onload = function(r) {
											var s;
											const i = null === (s = r.target) || void 0 === s ? void 0 : s.result;
											n({
												request: t,
												status: e.status,
												headers: PC(e),
												bodyAsText: i
											})
										}, s.onerror = function(e) {
											r(s.error)
										}, s.readAsText(e.response, "UTF-8")
									} else n({
										request: t,
										status: e.status,
										headers: PC(e)
									})
								}))
						}))
					}(n, e, t, r), RC(e, n, r)
				})) : new Promise((function(t, r) {
					n.addEventListener("load", (() => t({
						request: e,
						status: n.status,
						headers: PC(n),
						bodyAsText: n.responseText
					}))), RC(e, n, r)
				}))
			}
		}

		function CC(e, t) {
			t && e.addEventListener("progress", (e => t({
				loadedBytes: e.loaded
			})))
		}

		function PC(e) {
			const t = new xC,
				n = e.getAllResponseHeaders().trim().split(/[\r\n]+/);
			for (const e of n) {
				const n = e.indexOf(":"),
					r = e.slice(0, n),
					s = e.slice(n + 2);
				t.set(r, s)
			}
			return t
		}

		function RC(e, t, n) {
			t.addEventListener("error", (() => n(new Fv(`Failed to send request to ${e.url}`, Fv.REQUEST_SEND_ERROR, void 0, e))));
			const r = new vC("The operation was aborted.");
			t.addEventListener("abort", (() => n(r))), t.addEventListener("timeout", (() => n(r)))
		}
		const EC = new wC;
		const zC = "/.default",
			OC = {
				AUTHORIZATION: "authorization"
			},
			TC = {
				forcedRefreshWindowInMs: 1e3,
				retryIntervalInMs: 3e3,
				refreshWindowInMs: 12e4
			};

		function kC(e, t, n) {
			let r = null,
				s = null;
			const i = Object.assign(Object.assign({}, TC), n),
				a = {
					get isRefreshing() {
						return null !== r
					},
					get shouldRefresh() {
						var e;
						return !a.isRefreshing && (null !== (e = null == s ? void 0 : s.expiresOnTimestamp) && void 0 !== e ? e : 0) - i.refreshWindowInMs < Date.now()
					},
					get mustRefresh() {
						return null === s || s.expiresOnTimestamp - i.forcedRefreshWindowInMs < Date.now()
					}
				};

			function o(n) {
				var o;
				if (!a.isRefreshing) {
					r = async function(e, t, n) {
						async function r() {
							if (!(Date.now() < n)) {
								const t = await e();
								if (null === t) throw new Error("Failed to refresh access token.");
								return t
							}
							try {
								return await e()
							} catch (e) {
								return null
							}
						}
						let s = await r();
						for (; null === s;) await uh(t), s = await r();
						return s
					}((() => e.getToken(t, n)), i.retryIntervalInMs, null !== (o = null == s ? void 0 : s.expiresOnTimestamp) && void 0 !== o ? o : Date.now()).then((e => (r = null, s = e, s))).catch((e => {
						throw r = null, s = null, e
					}))
				}
				return r
			}
			return async e => a.mustRefresh ? o(e) : (a.shouldRefresh && o(e), s)
		}

		function AC(e, t) {
			let n = kC(e, t);
			class r extends wh {
				constructor(e, t) {
					super(e, t)
				}
				async sendRequest(t) {
					if (!t.url.toLowerCase().startsWith("https://")) throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
					const r = n,
						s = (await r({
							abortSignal: t.abortSignal,
							tracingOptions: {
								tracingContext: t.tracingContext
							}
						})).token;
					t.headers.set(OC.AUTHORIZATION, `Bearer ${s}`);
					const i = await this._nextPolicy.sendRequest(t);
					if (401 === (null == i ? void 0 : i.status)) {
						const r = function(e) {
							const t = e.headers.get("WWW-Authenticate");
							if (401 === e.status && t) return t
						}(i);
						if (r) {
							const s = function(e) {
									const t = `${e.slice(7).trim()} `.split(" ").filter((e => e));
									return t.map((e => (([e, t]) => ({
										[e]: t
									}))(e.trim().split("=")))).reduce(((e, t) => Object.assign(Object.assign({}, e), t)), {})
								}(r),
								i = s.resource_id + zC,
								a = Ov.parse(s.authorization_uri).getPath().split("/")[1],
								o = kC(e, i),
								l = (await o({
									abortSignal: t.abortSignal,
									tracingOptions: {
										tracingContext: t.tracingContext
									},
									tenantId: a
								})).token;
							return n = o, t.headers.set(OC.AUTHORIZATION, `Bearer ${l}`), this._nextPolicy.sendRequest(t)
						}
					}
					return i
				}
			}
			return {
				create: (e, t) => new r(e, t)
			}
		}

		function IC(e) {
			if (!e || "object" != typeof e) return !1;
			const t = e;
			return Array.isArray(t.factories) && "object" == typeof t.options && "function" == typeof t.toServiceClientOptions
		}
		class BC {
			constructor(e, t = {}) {
				this.factories = e, this.options = Object.assign(Object.assign({}, t), {
					httpClient: t.httpClient || EC
				})
			}
			toServiceClientOptions() {
				return {
					httpClient: this.options.httpClient,
					requestPolicyFactories: this.factories
				}
			}
		}

		function MC(e, t = {}) {
			var n;
			void 0 === e && (e = new gC);
			const r = new SC(t.userAgentOptions),
				s = [vv({
					userAgent: r.telemetryString
				}), (i = t.keepAliveOptions, {
					create: (e, t) => new Pv(e, t, i || Cv)
				}), r, Rv(), new iC, new mC(t.retryOptions), rw(void 0, {
					xmlCharKey: "#"
				}), ow({
					logger: dw.info,
					allowedHeaderNames: Tw,
					allowedQueryParameters: kw
				})];
			var i;
			return Nh && (s.push(Rh(t.proxyOptions)), s.push({
				create: (e, t) => {
					throw new Error(cw)
				}
			})), s.push(Sh(e) ? Zw(AC(e, null !== (n = t.audience) && void 0 !== n ? n : yw), e) : e), new BC(s, t)
		}
		class qC {}
		const _C = ["GET", "HEAD"];
		class DC extends wh {
			constructor(e, t, n = 20) {
				super(e, t), this.maxRetries = n
			}
			sendRequest(e) {
				return this._nextPolicy.sendRequest(e).then((e => LC(this, e, 0)))
			}
		}

		function LC(e, t, n) {
			const {
				request: r,
				status: s
			} = t, i = t.headers.get("location");
			if (i && (300 === s || 301 === s && _C.includes(r.method) || 302 === s && _C.includes(r.method) || 303 === s && "POST" === r.method || 307 === s) && (!e.maxRetries || n < e.maxRetries)) {
				const t = Ov.parse(r.url);
				return t.setPath(i), r.url = t.toString(), 303 === s && (r.method = "GET", delete r.body), e._nextPolicy.sendRequest(r).then((t => LC(e, t, n + 1)))
			}
			return Promise.resolve(t)
		}
		const HC = 3e4,
			UC = 9e4;

		function jC(e) {
			return "number" == typeof e
		}

		function $C(e, t, n, r, s) {
			return !!t(r, s) && n.retryCount < e
		}

		function FC(e, t = {
			retryCount: 0,
			retryInterval: 0
		}, n) {
			n && (t.error && (n.innerError = t.error), t.error = n), t.retryCount++;
			let r = Math.pow(2, t.retryCount - 1) - 1;
			return r *= .8 * e.retryInterval + Math.floor(Math.random() * (.4 * e.retryInterval)), t.retryInterval = Math.min(e.minRetryInterval + r, e.maxRetryInterval), t
		}
		const VC = "3.0.4",
			KC = {
				HttpVerbs: {
					PUT: "PUT",
					GET: "GET",
					DELETE: "DELETE",
					POST: "POST",
					MERGE: "MERGE",
					HEAD: "HEAD",
					PATCH: "PATCH"
				},
				StatusCodes: {
					TooManyRequests: 429,
					ServiceUnavailable: 503
				}
			},
			GC = {
				AUTHORIZATION: "authorization",
				AUTHORIZATION_SCHEME: "Bearer",
				RETRY_AFTER: "Retry-After",
				USER_AGENT: "User-Agent"
			};
		var WC;
		! function(e) {
			e[e.Exponential = 0] = "Exponential"
		}(WC || (WC = {}));
		class XC extends wh {
			constructor(e, t, n, r, s) {
				super(e, t), this.retryCount = jC(n) ? n : 3, this.retryInterval = jC(r) ? r : HC, this.maxRetryInterval = jC(s) ? s : UC
			}
			sendRequest(e) {
				return this._nextPolicy.sendRequest(e.clone()).then((t => QC(this, e, t))).catch((t => QC(this, e, t.response, void 0, t)))
			}
		}
		async function QC(e, t, n, r, s) {
			r = FC({
				retryInterval: e.retryInterval,
				minRetryInterval: 0,
				maxRetryInterval: e.maxRetryInterval
			}, r, s);
			const i = t.abortSignal && t.abortSignal.aborted;
			if (i || !$C(e.retryCount, (function(e) {
					const t = null == e ? void 0 : e.status;
					return (503 !== t || !(null == n ? void 0 : n.headers.get(GC.RETRY_AFTER))) && !(void 0 === t || t < 500 && 408 !== t || 501 === t || 505 === t)
				}), r, n)) {
				if (i || s || !n) {
					throw r.error || new Fv("Failed to send the request.", Fv.REQUEST_SEND_ERROR, n && n.status, n && n.request, n)
				}
				return n
			}
			Nv.info(`Retrying request in ${r.retryInterval}`);
			try {
				await uh(r.retryInterval);
				const n = await e._nextPolicy.sendRequest(t.clone());
				return QC(e, t, n, r)
			} catch (s) {
				return QC(e, t, n, r, s)
			}
		}

		function JC(e) {
			return ZC(e.parameterPath, e.mapper)
		}

		function ZC(e, t) {
			let n;
			return n = "string" == typeof e ? e : Array.isArray(e) ? e.join(".") : t.serializedName, n
		}
		class YC {
			constructor(e, t, n, r, s, i, a, o, l, c, d, m, u, p, h) {
				this.streamResponseBody = i, this.streamResponseStatusCodes = h, this.url = e || "", this.method = t || "GET", this.headers = bC(s) ? s : new xC(s), this.body = n, this.query = r, this.formData = void 0, this.withCredentials = a || !1, this.abortSignal = o, this.timeout = l || 0, this.onUploadProgress = c, this.onDownloadProgress = d, this.proxySettings = m, this.keepAlive = u, this.decompressResponse = p, this.requestId = this.headers.get("x-ms-client-request-id") || Gg()
			}
			validateRequestProperties() {
				if (!this.method) throw new Error("WebResource.method is required.");
				if (!this.url) throw new Error("WebResource.url is required.")
			}
			prepare(e) {
				if (!e) throw new Error("options object is required");
				if (void 0 === e.method || null === e.method || "string" != typeof e.method.valueOf()) throw new Error("options.method must be a string.");
				if (e.url && e.pathTemplate) throw new Error("options.url and options.pathTemplate are mutually exclusive. Please provide exactly one of them.");
				if (!(void 0 !== e.pathTemplate && null !== e.pathTemplate && "string" == typeof e.pathTemplate.valueOf() || void 0 !== e.url && null !== e.url && "string" == typeof e.url.valueOf())) throw new Error("Please provide exactly one of options.pathTemplate or options.url.");
				if (e.url) {
					if ("string" != typeof e.url) throw new Error('options.url must be of type "string".');
					this.url = e.url
				}
				if (e.method) {
					const t = ["GET", "PUT", "HEAD", "DELETE", "OPTIONS", "POST", "PATCH", "TRACE"];
					if (-1 === t.indexOf(e.method.toUpperCase())) throw new Error('The provided method "' + e.method + '" is invalid. Supported HTTP methods are: ' + JSON.stringify(t))
				}
				if (this.method = e.method.toUpperCase(), e.pathTemplate) {
					const {
						pathTemplate: t,
						pathParameters: n
					} = e;
					if ("string" != typeof t) throw new Error('options.pathTemplate must be of type "string".');
					e.baseUrl || (e.baseUrl = "https://management.azure.com");
					const r = e.baseUrl;
					let s = r + (r.endsWith("/") ? "" : "/") + (t.startsWith("/") ? t.slice(1) : t);
					const i = s.match(/({[\w-]*\s*[\w-]*})/gi);
					if (i && i.length) {
						if (!n) throw new Error(`pathTemplate: ${t} has been provided. Hence, options.pathParameters must also be provided.`);
						i.forEach((function(e) {
							const r = e.slice(1, -1),
								i = n[r];
							if (null == i || "string" != typeof i && "object" != typeof i) {
								const e = JSON.stringify(n, void 0, 2);
								throw new Error(`pathTemplate: ${t} contains the path parameter ${r} however, it is not present in parameters: ${e}.The value of the path parameter can either be a "string" of the form { ${r}: "some sample value" } or it can be an "object" of the form { "${r}": { value: "some sample value", skipUrlEncoding: true } }.`)
							}
							if ("string" == typeof i.valueOf() && (s = s.replace(e, encodeURIComponent(i))), "object" == typeof i.valueOf()) {
								if (!i.value) throw new Error(`options.pathParameters[${r}] is of type "object" but it does not contain a "value" property.`);
								s = i.skipUrlEncoding ? s.replace(e, i.value) : s.replace(e, encodeURIComponent(i.value))
							}
						}))
					}
					this.url = s
				}
				if (e.queryParameters) {
					const t = e.queryParameters;
					if ("object" != typeof t) throw new Error('options.queryParameters must be of type object. It should be a JSON object of "query-parameter-name" as the key and the "query-parameter-value" as the value. The "query-parameter-value" may be fo type "string" or an "object" of the form { value: "query-parameter-value", skipUrlEncoding: true }.');
					this.url && -1 === this.url.indexOf("?") && (this.url += "?");
					const n = [];
					this.query = {};
					for (const e in t) {
						const r = t[e];
						if (r)
							if ("string" == typeof r) n.push(e + "=" + encodeURIComponent(r)), this.query[e] = encodeURIComponent(r);
							else if ("object" == typeof r) {
							if (!r.value) throw new Error(`options.queryParameters[${e}] is of type "object" but it does not contain a "value" property.`);
							r.skipUrlEncoding ? (n.push(e + "=" + r.value), this.query[e] = r.value) : (n.push(e + "=" + encodeURIComponent(r.value)), this.query[e] = encodeURIComponent(r.value))
						}
					}
					this.url += n.join("&")
				}
				if (e.headers) {
					const t = e.headers;
					for (const n of Object.keys(e.headers)) this.headers.set(n, t[n])
				}
				return this.headers.get("accept-language") || this.headers.set("accept-language", "en-US"), this.headers.get("x-ms-client-request-id") || e.disableClientRequestId || this.headers.set("x-ms-client-request-id", this.requestId), this.headers.get("Content-Type") || this.headers.set("Content-Type", "application/json; charset=utf-8"), this.body = e.body, void 0 !== e.body && null !== e.body && (e.bodyIsStream ? (this.headers.get("Transfer-Encoding") || this.headers.set("Transfer-Encoding", "chunked"), "application/octet-stream" !== this.headers.get("Content-Type") && this.headers.set("Content-Type", "application/octet-stream")) : (e.serializationMapper && (this.body = new Qg(e.mappers).serialize(e.serializationMapper, e.body, "requestBody")), e.disableJsonStringifyOnBody || (this.body = JSON.stringify(e.body)))), e.spanOptions && (this.spanOptions = e.spanOptions), e.tracingContext && (this.tracingContext = e.tracingContext), this.abortSignal = e.abortSignal, this.onDownloadProgress = e.onDownloadProgress, this.onUploadProgress = e.onUploadProgress, this
			}
			clone() {
				const e = new YC(this.url, this.method, this.body, this.query, this.headers && this.headers.clone(), this.streamResponseBody, this.withCredentials, this.abortSignal, this.timeout, this.onUploadProgress, this.onDownloadProgress, this.proxySettings, this.keepAlive, this.decompressResponse, this.streamResponseStatusCodes);
				return this.formData && (e.formData = this.formData), this.operationSpec && (e.operationSpec = this.operationSpec), this.shouldDeserialize && (e.shouldDeserialize = this.shouldDeserialize), this.operationResponseGetter && (e.operationResponseGetter = this.operationResponseGetter), e
			}
		}

		function eP() {
			return "x-ms-useragent"
		}
		const tP = eP;

		function nP() {
			const e = [{
					key: "core-http",
					value: VC
				}],
				t = function() {
					const e = self.navigator;
					return [{
						key: "OS",
						value: (e.oscpu || e.platform).replace(" ", "")
					}]
				}();
			return function(e, t = " ", n = "/") {
				return e.map((e => {
					const t = e.value ? `${n}${e.value}` : "";
					return `${e.key}${t}`
				})).join(t)
			}(e.concat(t))
		}
		class rP extends wh {
			constructor(e, t, n, r) {
				super(e, t), this._nextPolicy = e, this._options = t, this.headerKey = n, this.headerValue = r
			}
			sendRequest(e) {
				return this.addUserAgentHeader(e), this._nextPolicy.sendRequest(e)
			}
			addUserAgentHeader(e) {
				e.headers || (e.headers = new xC), !e.headers.get(this.headerKey) && this.headerValue && e.headers.set(this.headerKey, this.headerValue)
			}
		}
		const sP = {
			forcedRefreshWindowInMs: 1e3,
			retryIntervalInMs: 3e3,
			refreshWindowInMs: 12e4
		};

		function iP(e, t, n) {
			let r = null,
				s = null;
			const i = Object.assign(Object.assign({}, sP), n),
				a = {
					get isRefreshing() {
						return null !== r
					},
					get shouldRefresh() {
						var e;
						return !a.isRefreshing && (null !== (e = null == s ? void 0 : s.expiresOnTimestamp) && void 0 !== e ? e : 0) - i.refreshWindowInMs < Date.now()
					},
					get mustRefresh() {
						return null === s || s.expiresOnTimestamp - i.forcedRefreshWindowInMs < Date.now()
					}
				};

			function o(n) {
				var o;
				if (!a.isRefreshing) {
					r = async function(e, t, n) {
						async function r() {
							if (!(Date.now() < n)) {
								const t = await e();
								if (null === t) throw new Error("Failed to refresh access token.");
								return t
							}
							try {
								return await e()
							} catch (e) {
								return null
							}
						}
						let s = await r();
						for (; null === s;) await uh(t), s = await r();
						return s
					}((() => e.getToken(t, n)), i.retryIntervalInMs, null !== (o = null == s ? void 0 : s.expiresOnTimestamp) && void 0 !== o ? o : Date.now()).then((e => (r = null, s = e, s))).catch((e => {
						throw r = null, s = null, e
					}))
				}
				return r
			}
			return async e => a.mustRefresh ? o(e) : (a.shouldRefresh && o(e), s)
		}

		function aP(e, t) {
			const n = iP(e, t);
			class r extends wh {
				constructor(e, t) {
					super(e, t)
				}
				async sendRequest(e) {
					if (!e.url.toLowerCase().startsWith("https://")) throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
					const {
						token: t
					} = await n({
						abortSignal: e.abortSignal,
						tracingOptions: {
							tracingContext: e.tracingContext
						}
					});
					return e.headers.set(GC.AUTHORIZATION, `Bearer ${t}`), this._nextPolicy.sendRequest(e)
				}
			}
			return {
				create: (e, t) => new r(e, t)
			}
		}
		let oP;
		class lP extends wh {
			constructor(e, t, n = 30) {
				super(e, t), this._retryTimeout = n
			}
			sendRequest(e) {
				return this._nextPolicy.sendRequest(e.clone()).then((t => function(e, t, n) {
					if (409 === n.status) {
						const r = function(e) {
							let t, n;
							if (e) {
								try {
									n = JSON.parse(e)
								} catch (e) {}
								if (n && n.error && n.error.message && n.error.code && "MissingSubscriptionRegistration" === n.error.code) {
									const e = n.error.message.match(/.*'(.*)'/i);
									e && (t = e.pop())
								}
							}
							return t
						}(n.bodyAsText);
						if (r) {
							const s = function(e) {
								let t;
								const n = e.match(/.*\/subscriptions\/[a-f0-9-]+\//gi);
								if (!n || !n[0]) throw new Error(`Unable to extract subscriptionId from the given url - ${e}.`);
								t = n[0];
								return t
							}(t.url);
							return async function(e, t, n, r) {
								const s = `${t}providers/${n}/register?api-version=2016-02-01`,
									i = `${t}providers/${n}?api-version=2016-02-01`,
									a = cP(r);
								a.method = "POST", a.url = s;
								const o = await e._nextPolicy.sendRequest(a);
								if (200 !== o.status) throw new Error(`Autoregistration of ${n} failed. Please try registering manually.`);
								return dP(e, i, r)
							}(e, s, r, t).catch((() => !1)).then((r => r ? (t.headers.set("x-ms-client-request-id", Gg()), e._nextPolicy.sendRequest(t.clone())) : n))
						}
					}
					return Promise.resolve(n)
				}(this, e, t)))
			}
		}

		function cP(e, t = !1) {
			const n = e.clone();
			return t && (n.url = e.url), n.headers.set("x-ms-client-request-id", Gg()), n.headers.set("Content-Type", "application/json; charset=utf-8"), n
		}
		async function dP(e, t, n) {
			const r = cP(n);
			r.url = t, r.method = "GET";
			const s = await e._nextPolicy.sendRequest(r),
				i = s.parsedBody;
			return !(!s.parsedBody || !i.registrationState || "Registered" !== i.registrationState) || (await uh(1e3 * e._retryTimeout), dP(e, t, n))
		}
		class mP extends wh {
			constructor(e, t, n) {
				super(e, t), this.authenticationProvider = n
			}
			signRequest(e) {
				return this.authenticationProvider.signRequest(e)
			}
			sendRequest(e) {
				return this.signRequest(e).then((e => this._nextPolicy.sendRequest(e)))
			}
		}
		class uP extends wh {
			constructor(e, t, n, r, s, i) {
				super(e, t), this.retryCount = jC(n) ? n : 3, this.retryInterval = jC(r) ? r : HC, this.minRetryInterval = jC(s) ? s : 3e3, this.maxRetryInterval = jC(i) ? i : UC
			}
			sendRequest(e) {
				return this._nextPolicy.sendRequest(e.clone()).catch((t => pP(this, e, t.response, t)))
			}
		}
		async function pP(e, t, n, r, s) {
			if (s = FC(e, s, r), !$C(e.retryCount, (function(e, t) {
					return !(!t || !t.code || "ETIMEDOUT" !== t.code && "ESOCKETTIMEDOUT" !== t.code && "ECONNREFUSED" !== t.code && "ECONNRESET" !== t.code && "ENOENT" !== t.code)
				}), s, n, r)) return r ? Promise.reject(s.error) : n;
			try {
				return await uh(s.retryInterval), e._nextPolicy.sendRequest(t.clone())
			} catch (r) {
				return pP(e, t, n, r, s)
			}
		}
		const hP = KC.StatusCodes;
		const gP = "The operation was aborted.";
		class yP extends wh {
			constructor(e, t, n) {
				super(e, t), this.numberOfRetries = 0, this._handleResponse = n || this._defaultResponseHandler
			}
			async sendRequest(e) {
				const t = await this._nextPolicy.sendRequest(e.clone());
				return t.status !== hP.TooManyRequests && t.status !== hP.ServiceUnavailable ? t : this._handleResponse(e, t)
			}
			async _defaultResponseHandler(e, t) {
				var n;
				const r = t.headers.get(GC.RETRY_AFTER);
				if (r) {
					const t = yP.parseRetryAfterHeader(r);
					if (t) {
						if (this.numberOfRetries += 1, await uh(t, {
								abortSignal: e.abortSignal,
								abortErrorMsg: gP
							}), null === (n = e.abortSignal) || void 0 === n ? void 0 : n.aborted) throw new vC(gP);
						return this.numberOfRetries < 3 ? this.sendRequest(e) : this._nextPolicy.sendRequest(e)
					}
				}
				return t
			}
			static parseRetryAfterHeader(e) {
				const t = Number(e);
				return Number.isNaN(t) ? yP.parseDateRetryAfterHeader(e) : 1e3 * t
			}
			static parseDateRetryAfterHeader(e) {
				try {
					const t = Date.now(),
						n = Date.parse(e) - t;
					return Number.isNaN(n) ? void 0 : n
				} catch (e) {
					return
				}
			}
		}
		class fP {
			constructor(e, t) {
				let n;
				if (t || (t = {}), this._withCredentials = t.withCredentials || !1, this._httpClient = t.httpClient || (oP || (oP = new wC), oP), this._requestPolicyOptions = new Ch(t.httpPipelineLogger), Array.isArray(t.requestPolicyFactories)) Nv.info("ServiceClient: using custom request policies"), n = t.requestPolicyFactories;
				else {
					let s;
					if (Sh(e)) {
						Nv.info("ServiceClient: creating bearer token authentication policy from provided credentials");
						const n = () => {
							let n;
							const r = this,
								s = t;
							return {
								create(t, i) {
									const a = function(e, t) {
										if (null == e ? void 0 : e.credentialScopes) return e.credentialScopes;
										if (t) return `${t}/.default`;
										return
									}(s, r.baseUri);
									if (!a) throw new Error("When using credential, the ServiceClient must contain a baseUri or a credentialScopes in ServiceClientOptions. Unable to create a bearerTokenAuthenticationPolicy");
									return null == n && (n = aP(e, a)), n.create(t, i)
								}
							}
						};
						s = n()
					} else if (e && "function" == typeof e.signRequest) Nv.info("ServiceClient: creating signing policy from provided credentials"), r = e, s = {
						create: (e, t) => new mP(e, t, r)
					};
					else if (null != e) throw new Error("The credentials argument must implement the TokenCredential interface");
					if (Nv.info("ServiceClient: using default request policies"), n = function(e, t) {
							const n = [];
							t.generateClientRequestIdHeader && n.push(Rv(t.clientRequestIdHeaderName));
							e && n.push(e);
							const r = bP(t.userAgentHeaderName, tP),
								s = bP(t.userAgent, nP);
							r && s && n.push(function(e) {
								const t = e && void 0 !== e.key && null !== e.key ? e.key : "x-ms-useragent",
									n = e && void 0 !== e.value && null !== e.value ? e.value : nP();
								return {
									create: (e, r) => new rP(e, r, t, n)
								}
							}({
								key: r,
								value: s
							}));
							n.push(function(e = 20) {
								return {
									create: (t, n) => new DC(t, n, e)
								}
							}()), n.push(function(e = 30) {
								return {
									create: (t, n) => new lP(t, n, e)
								}
							}(t.rpRegistrationRetryTimeout)), t.noRetryPolicy || (n.push({
								create: (e, t) => new XC(e, t, i, a, o)
							}), n.push(function(e, t, n, r) {
								return {
									create: (s, i) => new uP(s, i, e, t, n, r)
								}
							}()), n.push({
								create: (e, t) => new yP(e, t)
							}));
							var i, a, o;
							n.push(rw(t.deserializationContentTypes)), Nh && n.push(Rh(t.proxySettings));
							return n.push(ow({
								logger: Nv.info
							})), n
						}(s, t), t.requestPolicyFactories) {
						const e = t.requestPolicyFactories(n);
						e && (n = e)
					}
				}
				var r;
				this._requestPolicyFactories = n
			}
			sendRequest(e) {
				if (null == e || "object" != typeof e) throw new Error("options cannot be null or undefined and it must be of type object.");
				let t;
				try {
					! function(e) {
						if (e && "object" == typeof e) {
							const t = e;
							if ("string" == typeof t.url && "string" == typeof t.method && "object" == typeof t.headers && bC(t.headers) && "function" == typeof t.validateRequestProperties && "function" == typeof t.prepare && "function" == typeof t.clone) return !0
						}
						return !1
					}(e) ? (t = new YC, t = t.prepare(e)) : (e.validateRequestProperties(), t = e)
				} catch (e) {
					return Promise.reject(e)
				}
				let n = this._httpClient;
				if (this._requestPolicyFactories && this._requestPolicyFactories.length > 0)
					for (let e = this._requestPolicyFactories.length - 1; e >= 0; --e) n = this._requestPolicyFactories[e].create(n, this._requestPolicyOptions);
				return n.sendRequest(t)
			}
			async sendOperationRequest(e, t, n) {
				var r;
				"function" == typeof e.options && (n = e.options, e.options = void 0);
				const s = null === (r = e.options) || void 0 === r ? void 0 : r.serializerOptions,
					i = new YC;
				let a;
				try {
					const n = t.baseUrl || this.baseUri;
					if (!n) throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a baseUri string property that contains the base URL to use.");
					i.method = t.httpMethod, i.operationSpec = t;
					const r = Ov.parse(n);
					if (t.path && r.appendPath(t.path), t.urlParameters && t.urlParameters.length > 0)
						for (const n of t.urlParameters) {
							let i = xP(this, e, n, t.serializer);
							i = t.serializer.serialize(n.mapper, i, JC(n), s), n.skipEncoding || (i = encodeURIComponent(i)), r.replaceAll(`{${n.mapper.serializedName||JC(n)}}`, i)
						}
					if (t.queryParameters && t.queryParameters.length > 0)
						for (const n of t.queryParameters) {
							let i = xP(this, e, n, t.serializer);
							if (null != i) {
								if (i = t.serializer.serialize(n.mapper, i, JC(n), s), void 0 !== n.collectionFormat && null !== n.collectionFormat)
									if (n.collectionFormat === Cx.Multi) {
										if (0 === i.length) continue;
										for (const e in i) {
											const t = i[e];
											i[e] = null == t ? "" : t.toString()
										}
									} else n.collectionFormat !== Cx.Ssv && n.collectionFormat !== Cx.Tsv || (i = i.join(n.collectionFormat));
								if (!n.skipEncoding)
									if (Array.isArray(i))
										for (const e in i) void 0 !== i[e] && null !== i[e] && (i[e] = encodeURIComponent(i[e]));
									else i = encodeURIComponent(i);
								void 0 !== n.collectionFormat && null !== n.collectionFormat && n.collectionFormat !== Cx.Multi && n.collectionFormat !== Cx.Ssv && n.collectionFormat !== Cx.Tsv && (i = i.join(n.collectionFormat)), r.setQueryParameter(n.mapper.serializedName || JC(n), i)
							}
						}
					i.url = r.toString();
					const o = t.contentType || this.requestContentType;
					if (o && t.requestBody && i.headers.set("Content-Type", o), t.headerParameters)
						for (const n of t.headerParameters) {
							let r = xP(this, e, n, t.serializer);
							if (null != r) {
								r = t.serializer.serialize(n.mapper, r, JC(n), s);
								const e = n.mapper.headerCollectionPrefix;
								if (e)
									for (const t of Object.keys(r)) i.headers.set(e + t, r[t]);
								else i.headers.set(n.mapper.serializedName || JC(n), r)
							}
						}
					const l = e.options;
					if (l) {
						if (l.customHeaders)
							for (const e in l.customHeaders) i.headers.set(e, l.customHeaders[e]);
						l.abortSignal && (i.abortSignal = l.abortSignal), l.timeout && (i.timeout = l.timeout), l.onUploadProgress && (i.onUploadProgress = l.onUploadProgress), l.onDownloadProgress && (i.onDownloadProgress = l.onDownloadProgress), l.spanOptions && (i.spanOptions = l.spanOptions), l.tracingContext && (i.tracingContext = l.tracingContext), void 0 !== l.shouldDeserialize && null !== l.shouldDeserialize && (i.shouldDeserialize = l.shouldDeserialize)
					}
					let c, d;
					i.withCredentials = this._withCredentials,
						function(e, t, n, r) {
							var s, i, a, o, l, c;
							const d = null !== (i = null === (s = n.options) || void 0 === s ? void 0 : s.serializerOptions) && void 0 !== i ? i : {},
								m = {
									rootName: null !== (a = d.rootName) && void 0 !== a ? a : "",
									includeRoot: null !== (o = d.includeRoot) && void 0 !== o && o,
									xmlCharKey: null !== (l = d.xmlCharKey) && void 0 !== l ? l : qg
								},
								u = d.xmlCharKey;
							if (r.requestBody && r.requestBody.mapper) {
								t.body = xP(e, n, r.requestBody, r.serializer);
								const s = r.requestBody.mapper,
									{
										required: i,
										xmlName: a,
										xmlElementName: o,
										serializedName: l,
										xmlNamespace: d,
										xmlNamespacePrefix: p
									} = s,
									h = s.type.name;
								try {
									if (void 0 !== t.body && null !== t.body || i) {
										const e = JC(r.requestBody);
										t.body = r.serializer.serialize(s, t.body, e, m);
										const n = h === iy.Stream;
										if (r.isXML) {
											const e = p ? `xmlns:${p}` : "xmlns",
												r = function(e, t, n, r, s) {
													if (e && !["Composite", "Sequence", "Dictionary"].includes(n)) {
														const n = {};
														return n[s.xmlCharKey] = r, n[Mg] = {
															[t]: e
														}, n
													}
													return r
												}(d, e, h, t.body, m);
											h === iy.Sequence ? t.body = ew(function(e, t, n, r) {
												if (Array.isArray(e) || (e = [e]), !n || !r) return {
													[t]: e
												};
												const s = {
													[t]: e
												};
												return s[Mg] = {
													[n]: r
												}, s
											}(r, o || a || l, e, d), {
												rootName: a || l,
												xmlCharKey: u
											}) : n || (t.body = ew(r, {
												rootName: a || l,
												xmlCharKey: u
											}))
										} else {
											if (h === iy.String && ((null === (c = r.contentType) || void 0 === c ? void 0 : c.match("text/plain")) || "text" === r.mediaType)) return;
											n || (t.body = JSON.stringify(t.body))
										}
									}
								} catch (e) {
									throw new Error(`Error "${e.message}" occurred in serializing the payload - ${JSON.stringify(l,void 0,"  ")}.`)
								}
							} else if (r.formDataParameters && r.formDataParameters.length > 0) {
								t.formData = {};
								for (const s of r.formDataParameters) {
									const i = xP(e, n, s, r.serializer);
									if (null != i) {
										const e = s.mapper.serializedName || JC(s);
										t.formData[e] = r.serializer.serialize(s.mapper, i, JC(s), m)
									}
								}
							}
						}(this, i, e, t), void 0 === i.streamResponseStatusCodes && (i.streamResponseStatusCodes = function(e) {
							const t = new Set;
							for (const n in e.responses) {
								const r = e.responses[n];
								r.bodyMapper && r.bodyMapper.type.name === iy.Stream && t.add(Number(n))
							}
							return t
						}(t));
					try {
						c = await this.sendRequest(i)
					} catch (e) {
						d = e
					}
					d ? (d.response && (d.details = vP(d.response, t.responses[d.statusCode] || t.responses.default)), a = Promise.reject(d)) : a = Promise.resolve(vP(c, t.responses[c.status]))
				} catch (e) {
					a = Promise.reject(e)
				}
				const o = n;
				return o && a.then((e => o(null, e._response.parsedBody, e._response.request, e._response))).catch((e => o(e))), a
			}
		}

		function bP(e, t) {
			let n;
			return "string" == typeof e ? n = e : (n = t(), "function" == typeof e && (n = e(n))), n
		}

		function xP(e, t, n, r) {
			return NP(e, t, n.parameterPath, n.mapper, r)
		}

		function NP(e, t, n, r, s) {
			var i;
			let a;
			"string" == typeof n && (n = [n]);
			const o = null === (i = t.options) || void 0 === i ? void 0 : i.serializerOptions;
			if (Array.isArray(n)) {
				if (n.length > 0) {
					if (r.isConstant) a = r.defaultValue;
					else {
						let s = SP(t, n);
						s.propertyFound || (s = SP(e, n));
						let i = !1;
						s.propertyFound || (i = r.required || "options" === n[0] && 2 === n.length), a = i ? r.defaultValue : s.propertyValue
					}
					const i = ZC(n, r);
					s.serialize(r, a, i, o)
				}
			} else {
				r.required && (a = {});
				for (const i in n) {
					const l = r.type.modelProperties[i],
						c = n[i],
						d = NP(e, t, c, l, s),
						m = ZC(c, l);
					s.serialize(l, d, m, o), null != d && (a || (a = {}), a[i] = d)
				}
			}
			return a
		}

		function SP(e, t) {
			const n = {
				propertyFound: !1
			};
			let r = 0;
			for (; r < t.length; ++r) {
				const n = t[r];
				if (null == e || !(n in e)) break;
				e = e[n]
			}
			return r === t.length && (n.propertyValue = e, n.propertyFound = !0), n
		}

		function vP(e, t) {
			const n = e.parsedHeaders,
				r = t && t.bodyMapper,
				s = t => Object.defineProperty(t, "_response", {
					value: e
				});
			if (r) {
				const t = r.type.name;
				if ("Stream" === t) return s(Object.assign(Object.assign({}, n), {
					blobBody: e.blobBody,
					readableStreamBody: e.readableStreamBody
				}));
				const i = "Composite" === t && r.type.modelProperties || {},
					a = Object.keys(i).some((e => "" === i[e].serializedName));
				if ("Sequence" === t || a) {
					const t = [...e.parsedBody || []];
					for (const n of Object.keys(i)) i[n].serializedName && (t[n] = e.parsedBody[n]);
					if (n)
						for (const e of Object.keys(n)) t[e] = n[e];
					return s(t), t
				}
				if ("Composite" === t || "Dictionary" === t) return s(Object.assign(Object.assign({}, n), e.parsedBody))
			}
			return r || "HEAD" === e.request.method || ("object" != typeof(i = e.parsedBody) && "function" != typeof i || null === i) ? s(Object.assign(Object.assign({}, n), {
				body: e.parsedBody
			})) : s(Object.assign(Object.assign({}, n), e.parsedBody));
			var i
		}
		class wP extends fP {
			constructor(e, t) {
				if (void 0 === e) throw new Error("'url' cannot be null");
				if (t || (t = {}), !t.userAgent) {
					const e = nP();
					t.userAgent = `azure-storage-blob/12.13.0 ${e}`
				}
				super(void 0, t), this.requestContentType = "application/json; charset=utf-8", this.baseUri = t.endpoint || "{url}", this.url = e, this.version = t.version || "2021-12-02"
			}
		}
		class CP {
			constructor(e, t) {
				this.url = Iw(e), this.accountName = Vw(e), this.pipeline = t, this.storageClientContext = new wP(this.url, t.toServiceClientOptions()), this.isHttps = Fw(function(e) {
					return Ov.parse(e).getScheme()
				}(this.url) || "", "https"), this.credential = new gC;
				for (const e of this.pipeline.factories) Nh && e instanceof qC || e instanceof gC ? this.credential = e : Sh(e.credential) && (this.credential = e.credential);
				this.storageClientContext.requestContentType = void 0
			}
		}
		const PP = QS({
			packagePrefix: "Azure.Storage.Blob",
			namespace: "Microsoft.Storage"
		});

		function RP(e) {
			var t, n;
			return {
				spanOptions: null === (t = null == e ? void 0 : e.tracingOptions) || void 0 === t ? void 0 : t.spanOptions,
				tracingContext: null === (n = null == e ? void 0 : e.tracingOptions) || void 0 === n ? void 0 : n.tracingContext
			}
		}
		class EP {
			constructor() {
				this.read = !1, this.add = !1, this.create = !1, this.write = !1, this.delete = !1, this.deleteVersion = !1, this.tag = !1, this.move = !1, this.execute = !1, this.setImmutabilityPolicy = !1, this.permanentDelete = !1
			}
			static parse(e) {
				const t = new EP;
				for (const n of e) switch (n) {
					case "r":
						t.read = !0;
						break;
					case "a":
						t.add = !0;
						break;
					case "c":
						t.create = !0;
						break;
					case "w":
						t.write = !0;
						break;
					case "d":
						t.delete = !0;
						break;
					case "x":
						t.deleteVersion = !0;
						break;
					case "t":
						t.tag = !0;
						break;
					case "m":
						t.move = !0;
						break;
					case "e":
						t.execute = !0;
						break;
					case "i":
						t.setImmutabilityPolicy = !0;
						break;
					case "y":
						t.permanentDelete = !0;
						break;
					default:
						throw new RangeError(`Invalid permission: ${n}`)
				}
				return t
			}
			static from(e) {
				const t = new EP;
				return e.read && (t.read = !0), e.add && (t.add = !0), e.create && (t.create = !0), e.write && (t.write = !0), e.delete && (t.delete = !0), e.deleteVersion && (t.deleteVersion = !0), e.tag && (t.tag = !0), e.move && (t.move = !0), e.execute && (t.execute = !0), e.setImmutabilityPolicy && (t.setImmutabilityPolicy = !0), e.permanentDelete && (t.permanentDelete = !0), t
			}
			toString() {
				const e = [];
				return this.read && e.push("r"), this.add && e.push("a"), this.create && e.push("c"), this.write && e.push("w"), this.delete && e.push("d"), this.deleteVersion && e.push("x"), this.tag && e.push("t"), this.move && e.push("m"), this.execute && e.push("e"), this.setImmutabilityPolicy && e.push("i"), this.permanentDelete && e.push("y"), e.join("")
			}
		}
		class zP {
			constructor() {
				this.read = !1, this.add = !1, this.create = !1, this.write = !1, this.delete = !1, this.deleteVersion = !1, this.list = !1, this.tag = !1, this.move = !1, this.execute = !1, this.setImmutabilityPolicy = !1, this.permanentDelete = !1, this.filterByTags = !1
			}
			static parse(e) {
				const t = new zP;
				for (const n of e) switch (n) {
					case "r":
						t.read = !0;
						break;
					case "a":
						t.add = !0;
						break;
					case "c":
						t.create = !0;
						break;
					case "w":
						t.write = !0;
						break;
					case "d":
						t.delete = !0;
						break;
					case "l":
						t.list = !0;
						break;
					case "t":
						t.tag = !0;
						break;
					case "x":
						t.deleteVersion = !0;
						break;
					case "m":
						t.move = !0;
						break;
					case "e":
						t.execute = !0;
						break;
					case "i":
						t.setImmutabilityPolicy = !0;
						break;
					case "y":
						t.permanentDelete = !0;
						break;
					case "f":
						t.filterByTags = !0;
						break;
					default:
						throw new RangeError(`Invalid permission ${n}`)
				}
				return t
			}
			static from(e) {
				const t = new zP;
				return e.read && (t.read = !0), e.add && (t.add = !0), e.create && (t.create = !0), e.write && (t.write = !0), e.delete && (t.delete = !0), e.list && (t.list = !0), e.deleteVersion && (t.deleteVersion = !0), e.tag && (t.tag = !0), e.move && (t.move = !0), e.execute && (t.execute = !0), e.setImmutabilityPolicy && (t.setImmutabilityPolicy = !0), e.permanentDelete && (t.permanentDelete = !0), e.filterByTags && (t.filterByTags = !0), t
			}
			toString() {
				const e = [];
				return this.read && e.push("r"), this.add && e.push("a"), this.create && e.push("c"), this.write && e.push("w"), this.delete && e.push("d"), this.deleteVersion && e.push("x"), this.list && e.push("l"), this.tag && e.push("t"), this.move && e.push("m"), this.execute && e.push("e"), this.setImmutabilityPolicy && e.push("i"), this.permanentDelete && e.push("y"), this.filterByTags && e.push("f"), e.join("")
			}
		}
		class OP {}

		function TP(e) {
			return e.end ? `${e.start}-${e.end}` : e.start
		}
		var kP;
		! function(e) {
			e.Https = "https", e.HttpsAndHttp = "https,http"
		}(kP || (kP = {}));
		class AP {
			constructor(e, t, n, r, s, i, a, o, l, c, d, m, u, p, h, g, y, f, b, x) {
				this.version = e, this.signature = t, void 0 !== n && "string" != typeof n ? (this.permissions = n.permissions, this.services = n.services, this.resourceTypes = n.resourceTypes, this.protocol = n.protocol, this.startsOn = n.startsOn, this.expiresOn = n.expiresOn, this.ipRangeInner = n.ipRange, this.identifier = n.identifier, this.encryptionScope = n.encryptionScope, this.resource = n.resource, this.cacheControl = n.cacheControl, this.contentDisposition = n.contentDisposition, this.contentEncoding = n.contentEncoding, this.contentLanguage = n.contentLanguage, this.contentType = n.contentType, n.userDelegationKey && (this.signedOid = n.userDelegationKey.signedObjectId, this.signedTenantId = n.userDelegationKey.signedTenantId, this.signedStartsOn = n.userDelegationKey.signedStartsOn, this.signedExpiresOn = n.userDelegationKey.signedExpiresOn, this.signedService = n.userDelegationKey.signedService, this.signedVersion = n.userDelegationKey.signedVersion, this.preauthorizedAgentObjectId = n.preauthorizedAgentObjectId, this.correlationId = n.correlationId)) : (this.services = r, this.resourceTypes = s, this.expiresOn = o, this.permissions = n, this.protocol = i, this.startsOn = a, this.ipRangeInner = l, this.encryptionScope = x, this.identifier = c, this.resource = d, this.cacheControl = m, this.contentDisposition = u, this.contentEncoding = p, this.contentLanguage = h, this.contentType = g, y && (this.signedOid = y.signedObjectId, this.signedTenantId = y.signedTenantId, this.signedStartsOn = y.signedStartsOn, this.signedExpiresOn = y.signedExpiresOn, this.signedService = y.signedService, this.signedVersion = y.signedVersion, this.preauthorizedAgentObjectId = f, this.correlationId = b))
			}
			get ipRange() {
				if (this.ipRangeInner) return {
					end: this.ipRangeInner.end,
					start: this.ipRangeInner.start
				}
			}
			toString() {
				const e = ["sv", "ss", "srt", "spr", "st", "se", "sip", "si", "ses", "skoid", "sktid", "skt", "ske", "sks", "skv", "sr", "sp", "sig", "rscc", "rscd", "rsce", "rscl", "rsct", "saoid", "scid"],
					t = [];
				for (const n of e) switch (n) {
					case "sv":
						this.tryAppendQueryParameter(t, n, this.version);
						break;
					case "ss":
						this.tryAppendQueryParameter(t, n, this.services);
						break;
					case "srt":
						this.tryAppendQueryParameter(t, n, this.resourceTypes);
						break;
					case "spr":
						this.tryAppendQueryParameter(t, n, this.protocol);
						break;
					case "st":
						this.tryAppendQueryParameter(t, n, this.startsOn ? jw(this.startsOn, !1) : void 0);
						break;
					case "se":
						this.tryAppendQueryParameter(t, n, this.expiresOn ? jw(this.expiresOn, !1) : void 0);
						break;
					case "sip":
						this.tryAppendQueryParameter(t, n, this.ipRange ? TP(this.ipRange) : void 0);
						break;
					case "si":
						this.tryAppendQueryParameter(t, n, this.identifier);
						break;
					case "ses":
						this.tryAppendQueryParameter(t, n, this.encryptionScope);
						break;
					case "skoid":
						this.tryAppendQueryParameter(t, n, this.signedOid);
						break;
					case "sktid":
						this.tryAppendQueryParameter(t, n, this.signedTenantId);
						break;
					case "skt":
						this.tryAppendQueryParameter(t, n, this.signedStartsOn ? jw(this.signedStartsOn, !1) : void 0);
						break;
					case "ske":
						this.tryAppendQueryParameter(t, n, this.signedExpiresOn ? jw(this.signedExpiresOn, !1) : void 0);
						break;
					case "sks":
						this.tryAppendQueryParameter(t, n, this.signedService);
						break;
					case "skv":
						this.tryAppendQueryParameter(t, n, this.signedVersion);
						break;
					case "sr":
						this.tryAppendQueryParameter(t, n, this.resource);
						break;
					case "sp":
						this.tryAppendQueryParameter(t, n, this.permissions);
						break;
					case "sig":
						this.tryAppendQueryParameter(t, n, this.signature);
						break;
					case "rscc":
						this.tryAppendQueryParameter(t, n, this.cacheControl);
						break;
					case "rscd":
						this.tryAppendQueryParameter(t, n, this.contentDisposition);
						break;
					case "rsce":
						this.tryAppendQueryParameter(t, n, this.contentEncoding);
						break;
					case "rscl":
						this.tryAppendQueryParameter(t, n, this.contentLanguage);
						break;
					case "rsct":
						this.tryAppendQueryParameter(t, n, this.contentType);
						break;
					case "saoid":
						this.tryAppendQueryParameter(t, n, this.preauthorizedAgentObjectId);
						break;
					case "scid":
						this.tryAppendQueryParameter(t, n, this.correlationId)
				}
				return t.join("&")
			}
			tryAppendQueryParameter(e, t, n) {
				n && (t = encodeURIComponent(t), n = encodeURIComponent(n), t.length > 0 && n.length > 0 && e.push(`${t}=${n}`))
			}
		}

		function IP(e, t, n) {
			const r = e.version ? e.version : mw,
				s = t instanceof qC ? t : void 0;
			let i;
			if (void 0 === s && void 0 !== n && (i = new OP(n, t)), void 0 === s && void 0 === i) throw TypeError("Invalid sharedKeyCredential, userDelegationKey or accountName.");
			if (r >= "2020-12-06") return void 0 !== s ? function(e, t) {
				if (e = MP(e), !(e.identifier || e.permissions && e.expiresOn)) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when 'identifier' is not provided.");
				let n, r = "c",
					s = e.snapshotTime;
				e.blobName && (r = "b", e.snapshotTime ? r = "bs" : e.versionId && (r = "bv", s = e.versionId));
				e.permissions && (n = e.blobName ? EP.parse(e.permissions.toString()).toString() : zP.parse(e.permissions.toString()).toString());
				const i = [n || "", e.startsOn ? jw(e.startsOn, !1) : "", e.expiresOn ? jw(e.expiresOn, !1) : "", BP(t.accountName, e.containerName, e.blobName), e.identifier, e.ipRange ? TP(e.ipRange) : "", e.protocol ? e.protocol : "", e.version, r, s, e.encryptionScope, e.cacheControl ? e.cacheControl : "", e.contentDisposition ? e.contentDisposition : "", e.contentEncoding ? e.contentEncoding : "", e.contentLanguage ? e.contentLanguage : "", e.contentType ? e.contentType : ""].join("\n"),
					a = t.computeHMACSHA256(i);
				return new AP(e.version, a, n, void 0, void 0, e.protocol, e.startsOn, e.expiresOn, e.ipRange, e.identifier, r, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType, void 0, void 0, void 0, e.encryptionScope)
			}(e, s) : function(e, t) {
				if (e = MP(e), !e.permissions || !e.expiresOn) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when generating user delegation SAS.");
				let n, r = "c",
					s = e.snapshotTime;
				e.blobName && (r = "b", e.snapshotTime ? r = "bs" : e.versionId && (r = "bv", s = e.versionId));
				e.permissions && (n = e.blobName ? EP.parse(e.permissions.toString()).toString() : zP.parse(e.permissions.toString()).toString());
				const i = [n || "", e.startsOn ? jw(e.startsOn, !1) : "", e.expiresOn ? jw(e.expiresOn, !1) : "", BP(t.accountName, e.containerName, e.blobName), t.userDelegationKey.signedObjectId, t.userDelegationKey.signedTenantId, t.userDelegationKey.signedStartsOn ? jw(t.userDelegationKey.signedStartsOn, !1) : "", t.userDelegationKey.signedExpiresOn ? jw(t.userDelegationKey.signedExpiresOn, !1) : "", t.userDelegationKey.signedService, t.userDelegationKey.signedVersion, e.preauthorizedAgentObjectId, void 0, e.correlationId, e.ipRange ? TP(e.ipRange) : "", e.protocol ? e.protocol : "", e.version, r, s, e.encryptionScope, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType].join("\n"),
					a = t.computeHMACSHA256(i);
				return new AP(e.version, a, n, void 0, void 0, e.protocol, e.startsOn, e.expiresOn, e.ipRange, e.identifier, r, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType, t.userDelegationKey, e.preauthorizedAgentObjectId, e.correlationId, e.encryptionScope)
			}(e, i);
			if (r >= "2018-11-09") return void 0 !== s ? function(e, t) {
				if (e = MP(e), !(e.identifier || e.permissions && e.expiresOn)) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when 'identifier' is not provided.");
				let n, r = "c",
					s = e.snapshotTime;
				e.blobName && (r = "b", e.snapshotTime ? r = "bs" : e.versionId && (r = "bv", s = e.versionId));
				e.permissions && (n = e.blobName ? EP.parse(e.permissions.toString()).toString() : zP.parse(e.permissions.toString()).toString());
				const i = [n || "", e.startsOn ? jw(e.startsOn, !1) : "", e.expiresOn ? jw(e.expiresOn, !1) : "", BP(t.accountName, e.containerName, e.blobName), e.identifier, e.ipRange ? TP(e.ipRange) : "", e.protocol ? e.protocol : "", e.version, r, s, e.cacheControl ? e.cacheControl : "", e.contentDisposition ? e.contentDisposition : "", e.contentEncoding ? e.contentEncoding : "", e.contentLanguage ? e.contentLanguage : "", e.contentType ? e.contentType : ""].join("\n"),
					a = t.computeHMACSHA256(i);
				return new AP(e.version, a, n, void 0, void 0, e.protocol, e.startsOn, e.expiresOn, e.ipRange, e.identifier, r, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType)
			}(e, s) : r >= "2020-02-10" ? function(e, t) {
				if (e = MP(e), !e.permissions || !e.expiresOn) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when generating user delegation SAS.");
				let n, r = "c",
					s = e.snapshotTime;
				e.blobName && (r = "b", e.snapshotTime ? r = "bs" : e.versionId && (r = "bv", s = e.versionId));
				e.permissions && (n = e.blobName ? EP.parse(e.permissions.toString()).toString() : zP.parse(e.permissions.toString()).toString());
				const i = [n || "", e.startsOn ? jw(e.startsOn, !1) : "", e.expiresOn ? jw(e.expiresOn, !1) : "", BP(t.accountName, e.containerName, e.blobName), t.userDelegationKey.signedObjectId, t.userDelegationKey.signedTenantId, t.userDelegationKey.signedStartsOn ? jw(t.userDelegationKey.signedStartsOn, !1) : "", t.userDelegationKey.signedExpiresOn ? jw(t.userDelegationKey.signedExpiresOn, !1) : "", t.userDelegationKey.signedService, t.userDelegationKey.signedVersion, e.preauthorizedAgentObjectId, void 0, e.correlationId, e.ipRange ? TP(e.ipRange) : "", e.protocol ? e.protocol : "", e.version, r, s, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType].join("\n"),
					a = t.computeHMACSHA256(i);
				return new AP(e.version, a, n, void 0, void 0, e.protocol, e.startsOn, e.expiresOn, e.ipRange, e.identifier, r, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType, t.userDelegationKey, e.preauthorizedAgentObjectId, e.correlationId)
			}(e, i) : function(e, t) {
				if (e = MP(e), !e.permissions || !e.expiresOn) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when generating user delegation SAS.");
				let n, r = "c",
					s = e.snapshotTime;
				e.blobName && (r = "b", e.snapshotTime ? r = "bs" : e.versionId && (r = "bv", s = e.versionId));
				e.permissions && (n = e.blobName ? EP.parse(e.permissions.toString()).toString() : zP.parse(e.permissions.toString()).toString());
				const i = [n || "", e.startsOn ? jw(e.startsOn, !1) : "", e.expiresOn ? jw(e.expiresOn, !1) : "", BP(t.accountName, e.containerName, e.blobName), t.userDelegationKey.signedObjectId, t.userDelegationKey.signedTenantId, t.userDelegationKey.signedStartsOn ? jw(t.userDelegationKey.signedStartsOn, !1) : "", t.userDelegationKey.signedExpiresOn ? jw(t.userDelegationKey.signedExpiresOn, !1) : "", t.userDelegationKey.signedService, t.userDelegationKey.signedVersion, e.ipRange ? TP(e.ipRange) : "", e.protocol ? e.protocol : "", e.version, r, s, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType].join("\n"),
					a = t.computeHMACSHA256(i);
				return new AP(e.version, a, n, void 0, void 0, e.protocol, e.startsOn, e.expiresOn, e.ipRange, e.identifier, r, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType, t.userDelegationKey)
			}(e, i);
			if (r >= "2015-04-05") {
				if (void 0 !== s) return function(e, t) {
					if (e = MP(e), !(e.identifier || e.permissions && e.expiresOn)) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when 'identifier' is not provided.");
					let n, r = "c";
					e.blobName && (r = "b");
					e.permissions && (n = e.blobName ? EP.parse(e.permissions.toString()).toString() : zP.parse(e.permissions.toString()).toString());
					const s = [n || "", e.startsOn ? jw(e.startsOn, !1) : "", e.expiresOn ? jw(e.expiresOn, !1) : "", BP(t.accountName, e.containerName, e.blobName), e.identifier, e.ipRange ? TP(e.ipRange) : "", e.protocol ? e.protocol : "", e.version, e.cacheControl ? e.cacheControl : "", e.contentDisposition ? e.contentDisposition : "", e.contentEncoding ? e.contentEncoding : "", e.contentLanguage ? e.contentLanguage : "", e.contentType ? e.contentType : ""].join("\n"),
						i = t.computeHMACSHA256(s);
					return new AP(e.version, i, n, void 0, void 0, e.protocol, e.startsOn, e.expiresOn, e.ipRange, e.identifier, r, e.cacheControl, e.contentDisposition, e.contentEncoding, e.contentLanguage, e.contentType)
				}(e, s);
				throw new RangeError("'version' must be >= '2018-11-09' when generating user delegation SAS using user delegation key.")
			}
			throw new RangeError("'version' must be >= '2015-04-05'.")
		}

		function BP(e, t, n) {
			const r = [`/blob/${e}/${t}`];
			return n && r.push(`/${n}`), r.join("")
		}

		function MP(e) {
			const t = e.version ? e.version : mw;
			if (e.snapshotTime && t < "2018-11-09") throw RangeError("'version' must be >= '2018-11-09' when providing 'snapshotTime'.");
			if (void 0 === e.blobName && e.snapshotTime) throw RangeError("Must provide 'blobName' when providing 'snapshotTime'.");
			if (e.versionId && t < "2019-10-10") throw RangeError("'version' must be >= '2019-10-10' when providing 'versionId'.");
			if (void 0 === e.blobName && e.versionId) throw RangeError("Must provide 'blobName' when providing 'versionId'.");
			if (e.permissions && e.permissions.setImmutabilityPolicy && t < "2020-08-04") throw RangeError("'version' must be >= '2020-08-04' when provided 'i' permission.");
			if (e.permissions && e.permissions.deleteVersion && t < "2019-10-10") throw RangeError("'version' must be >= '2019-10-10' when providing 'x' permission.");
			if (e.permissions && e.permissions.permanentDelete && t < "2019-10-10") throw RangeError("'version' must be >= '2019-10-10' when providing 'y' permission.");
			if (e.permissions && e.permissions.tag && t < "2019-12-12") throw RangeError("'version' must be >= '2019-12-12' when providing 't' permission.");
			if (t < "2020-02-10" && e.permissions && (e.permissions.move || e.permissions.execute)) throw RangeError("'version' must be >= '2020-02-10' when providing the 'm' or 'e' permission.");
			if (t < "2021-04-10" && e.permissions && e.permissions.filterByTags) throw RangeError("'version' must be >= '2021-04-10' when providing the 'f' permission.");
			if (t < "2020-02-10" && (e.preauthorizedAgentObjectId || e.correlationId)) throw RangeError("'version' must be >= '2020-02-10' when providing 'preauthorizedAgentObjectId' or 'correlationId'.");
			if (e.encryptionScope && t < "2020-12-06") throw RangeError("'version' must be >= '2020-12-06' when provided 'encryptionScope' in SAS.");
			return e.version = t, e
		}
		class qP {
			constructor(e) {
				this.client = e
			}
			download(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, DP)
			}
			getProperties(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, LP)
			}
			delete(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, HP)
			}
			undelete(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, UP)
			}
			setExpiry(e, t) {
				const n = {
					expiryOptions: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, jP)
			}
			setHttpHeaders(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, $P)
			}
			setImmutabilityPolicy(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, FP)
			}
			deleteImmutabilityPolicy(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, VP)
			}
			setLegalHold(e, t) {
				const n = {
					legalHold: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, KP)
			}
			setMetadata(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, GP)
			}
			acquireLease(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, WP)
			}
			releaseLease(e, t) {
				const n = {
					leaseId: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, XP)
			}
			renewLease(e, t) {
				const n = {
					leaseId: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, QP)
			}
			changeLease(e, t, n) {
				const r = {
					leaseId: e,
					proposedLeaseId: t,
					options: Ag(n || {})
				};
				return this.client.sendOperationRequest(r, JP)
			}
			breakLease(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, ZP)
			}
			createSnapshot(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, YP)
			}
			startCopyFromURL(e, t) {
				const n = {
					copySource: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, eR)
			}
			copyFromURL(e, t) {
				const n = {
					copySource: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, tR)
			}
			abortCopyFromURL(e, t) {
				const n = {
					copyId: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, nR)
			}
			setTier(e, t) {
				const n = {
					tier: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, rR)
			}
			getAccountInfo(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, sR)
			}
			query(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, iR)
			}
			getTags(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, aR)
			}
			setTags(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, oR)
			}
		}
		const _P = new Qg(e, !0),
			DP = {
				path: "/{containerName}/{blob}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: {
							type: {
								name: "Stream"
							},
							serializedName: "parsedResponse"
						},
						headersMapper: Kf
					},
					206: {
						bodyMapper: {
							type: {
								name: "Stream"
							},
							serializedName: "parsedResponse"
						},
						headersMapper: Kf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Gf
					}
				},
				queryParameters: [kx, gN, yN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, fN, {
					parameterPath: ["options", "rangeGetContentMD5"],
					mapper: {
						serializedName: "x-ms-range-get-content-md5",
						xmlName: "x-ms-range-get-content-md5",
						type: {
							name: "Boolean"
						}
					}
				}, {
					parameterPath: ["options", "rangeGetContentCRC64"],
					mapper: {
						serializedName: "x-ms-range-get-content-crc64",
						xmlName: "x-ms-range-get-content-crc64",
						type: {
							name: "Boolean"
						}
					}
				}, bN, xN, NN, SN, vN, wN],
				isXML: !0,
				serializer: _P
			},
			LP = {
				path: "/{containerName}/{blob}",
				httpMethod: "HEAD",
				responses: {
					200: {
						headersMapper: Wf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Xf
					}
				},
				queryParameters: [kx, gN, yN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN],
				isXML: !0,
				serializer: _P
			},
			HP = {
				path: "/{containerName}/{blob}",
				httpMethod: "DELETE",
				responses: {
					202: {
						headersMapper: Qf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Jf
					}
				},
				queryParameters: [kx, gN, yN, {
					parameterPath: ["options", "blobDeleteType"],
					mapper: {
						serializedName: "deletetype",
						xmlName: "deletetype",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, SN, vN, wN, {
					parameterPath: ["options", "deleteSnapshots"],
					mapper: {
						serializedName: "x-ms-delete-snapshots",
						xmlName: "x-ms-delete-snapshots",
						type: {
							name: "Enum",
							allowedValues: ["include", "only"]
						}
					}
				}],
				isXML: !0,
				serializer: _P
			},
			UP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: Zf
					},
					default: {
						bodyMapper: uy,
						headersMapper: Yf
					}
				},
				queryParameters: [kx, nN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: _P
			},
			jP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: eb
					},
					default: {
						bodyMapper: uy,
						headersMapper: tb
					}
				},
				queryParameters: [kx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "expiry",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, {
					parameterPath: "expiryOptions",
					mapper: {
						serializedName: "x-ms-expiry-option",
						required: !0,
						xmlName: "x-ms-expiry-option",
						type: {
							name: "String"
						}
					}
				}, {
					parameterPath: ["options", "expiresOn"],
					mapper: {
						serializedName: "x-ms-expiry-time",
						xmlName: "x-ms-expiry-time",
						type: {
							name: "String"
						}
					}
				}],
				isXML: !0,
				serializer: _P
			},
			$P = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: nb
					},
					default: {
						bodyMapper: uy,
						headersMapper: rb
					}
				},
				queryParameters: [Tx, kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, SN, vN, wN, CN, PN, RN, EN, zN, ON],
				isXML: !0,
				serializer: _P
			},
			FP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: sb
					},
					default: {
						bodyMapper: uy,
						headersMapper: ib
					}
				},
				queryParameters: [kx, TN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Yx, kN, AN],
				isXML: !0,
				serializer: _P
			},
			VP = {
				path: "/{containerName}/{blob}",
				httpMethod: "DELETE",
				responses: {
					200: {
						headersMapper: ab
					},
					default: {
						bodyMapper: uy,
						headersMapper: ob
					}
				},
				queryParameters: [kx, TN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx],
				isXML: !0,
				serializer: _P
			},
			KP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: lb
					},
					default: {
						bodyMapper: uy,
						headersMapper: cb
					}
				},
				queryParameters: [kx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "legalhold",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, {
					parameterPath: "legalHold",
					mapper: {
						serializedName: "x-ms-legal-hold",
						required: !0,
						xmlName: "x-ms-legal-hold",
						type: {
							name: "Boolean"
						}
					}
				}],
				isXML: !0,
				serializer: _P
			},
			GP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: db
					},
					default: {
						bodyMapper: uy,
						headersMapper: mb
					}
				},
				queryParameters: [kx, eN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Xx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, IN],
				isXML: !0,
				serializer: _P
			},
			WP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: ub
					},
					default: {
						bodyMapper: uy,
						headersMapper: pb
					}
				},
				queryParameters: [kx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, sN, iN, aN, SN, vN, wN],
				isXML: !0,
				serializer: _P
			},
			XP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: hb
					},
					default: {
						bodyMapper: uy,
						headersMapper: gb
					}
				},
				queryParameters: [kx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, oN, lN, SN, vN, wN],
				isXML: !0,
				serializer: _P
			},
			QP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: yb
					},
					default: {
						bodyMapper: uy,
						headersMapper: fb
					}
				},
				queryParameters: [kx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, lN, cN, SN, vN, wN],
				isXML: !0,
				serializer: _P
			},
			JP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: bb
					},
					default: {
						bodyMapper: uy,
						headersMapper: xb
					}
				},
				queryParameters: [kx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, lN, uN, pN, SN, vN, wN],
				isXML: !0,
				serializer: _P
			},
			ZP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					202: {
						headersMapper: Nb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Sb
					}
				},
				queryParameters: [kx, rN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, dN, mN, SN, vN, wN],
				isXML: !0,
				serializer: _P
			},
			YP = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: vb
					},
					default: {
						bodyMapper: uy,
						headersMapper: wb
					}
				},
				queryParameters: [kx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "snapshot",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Xx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, IN],
				isXML: !0,
				serializer: _P
			},
			eR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					202: {
						headersMapper: Cb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Pb
					}
				},
				queryParameters: [kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Xx, Jx, Zx, Yx, SN, vN, wN, kN, AN, BN, MN, qN, _N, DN, LN, HN, UN, jN, {
					parameterPath: ["options", "sealBlob"],
					mapper: {
						serializedName: "x-ms-seal-blob",
						xmlName: "x-ms-seal-blob",
						type: {
							name: "Boolean"
						}
					}
				}, $N],
				isXML: !0,
				serializer: _P
			},
			tR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					202: {
						headersMapper: Rb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Eb
					}
				},
				queryParameters: [kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Xx, Jx, Zx, Yx, SN, vN, wN, kN, AN, IN, BN, qN, _N, DN, LN, UN, jN, $N, {
					parameterPath: "xMsRequiresSync",
					mapper: {
						defaultValue: "true",
						isConstant: !0,
						serializedName: "x-ms-requires-sync",
						type: {
							name: "String"
						}
					}
				}, FN, VN, KN],
				isXML: !0,
				serializer: _P
			},
			nR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					204: {
						headersMapper: zb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Ob
					}
				},
				queryParameters: [kx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "copy",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}, {
					parameterPath: "copyId",
					mapper: {
						serializedName: "copyid",
						required: !0,
						xmlName: "copyid",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, {
					parameterPath: "copyActionAbortConstant",
					mapper: {
						defaultValue: "abort",
						isConstant: !0,
						serializedName: "x-ms-copy-action",
						type: {
							name: "String"
						}
					}
				}],
				isXML: !0,
				serializer: _P
			},
			rR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: Tb
					},
					202: {
						headersMapper: Tb
					},
					default: {
						bodyMapper: uy,
						headersMapper: kb
					}
				},
				queryParameters: [kx, gN, yN, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "tier",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, wN, MN, {
					parameterPath: "tier",
					mapper: {
						serializedName: "x-ms-access-tier",
						required: !0,
						xmlName: "x-ms-access-tier",
						type: {
							name: "Enum",
							allowedValues: ["P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Cold"]
						}
					}
				}],
				isXML: !0,
				serializer: _P
			},
			sR = {
				path: "/{containerName}/{blob}",
				httpMethod: "GET",
				responses: {
					200: {
						headersMapper: Ab
					},
					default: {
						bodyMapper: uy,
						headersMapper: Ib
					}
				},
				queryParameters: [Tx, Ux],
				urlParameters: [zx],
				headerParameters: [Ax, Bx],
				isXML: !0,
				serializer: _P
			},
			iR = {
				path: "/{containerName}/{blob}",
				httpMethod: "POST",
				responses: {
					200: {
						bodyMapper: {
							type: {
								name: "Stream"
							},
							serializedName: "parsedResponse"
						},
						headersMapper: Bb
					},
					206: {
						bodyMapper: {
							type: {
								name: "Stream"
							},
							serializedName: "parsedResponse"
						},
						headersMapper: Bb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Mb
					}
				},
				requestBody: GN,
				queryParameters: [kx, gN, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "query",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Px, Ex, Ax, Ix, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN],
				isXML: !0,
				contentType: "application/xml; charset=utf-8",
				mediaType: "xml",
				serializer: _P
			},
			aR = {
				path: "/{containerName}/{blob}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: vy,
						headersMapper: qb
					},
					default: {
						bodyMapper: uy,
						headersMapper: _b
					}
				},
				queryParameters: [kx, gN, yN, WN],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, wN],
				isXML: !0,
				serializer: _P
			},
			oR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					204: {
						headersMapper: Db
					},
					default: {
						bodyMapper: uy,
						headersMapper: Lb
					}
				},
				requestBody: XN,
				queryParameters: [kx, yN, WN],
				urlParameters: [zx],
				headerParameters: [Px, Ex, Ax, Ix, Jx, wN, QN, JN],
				isXML: !0,
				contentType: "application/xml; charset=utf-8",
				mediaType: "xml",
				serializer: _P
			};
		class lR {
			constructor(e, t) {
				const n = new wP(e.url, e.pipeline.toServiceClientOptions());
				this._url = e.url, void 0 === e.name ? (this._isContainer = !0, this._containerOrBlobOperation = new TS(n)) : (this._isContainer = !1, this._containerOrBlobOperation = new qP(n)), t || (t = Gg()), this._leaseId = t
			}
			get leaseId() {
				return this._leaseId
			}
			get url() {
				return this._url
			}
			async acquireLease(e, t = {}) {
				var n, r, s, i, a, o;
				const {
					span: l,
					updatedOptions: c
				} = PP("BlobLeaseClient-acquireLease", t);
				if (this._isContainer && ((null === (n = t.conditions) || void 0 === n ? void 0 : n.ifMatch) && (null === (r = t.conditions) || void 0 === r ? void 0 : r.ifMatch) !== Ew || (null === (s = t.conditions) || void 0 === s ? void 0 : s.ifNoneMatch) && (null === (i = t.conditions) || void 0 === i ? void 0 : i.ifNoneMatch) !== Ew || (null === (a = t.conditions) || void 0 === a ? void 0 : a.tagConditions))) throw new RangeError("The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable.");
				try {
					return await this._containerOrBlobOperation.acquireLease(Object.assign({
						abortSignal: t.abortSignal,
						duration: e,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (o = t.conditions) || void 0 === o ? void 0 : o.tagConditions
						}),
						proposedLeaseId: this._leaseId
					}, RP(c)))
				} catch (e) {
					throw l.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					l.end()
				}
			}
			async changeLease(e, t = {}) {
				var n, r, s, i, a, o;
				const {
					span: l,
					updatedOptions: c
				} = PP("BlobLeaseClient-changeLease", t);
				if (this._isContainer && ((null === (n = t.conditions) || void 0 === n ? void 0 : n.ifMatch) && (null === (r = t.conditions) || void 0 === r ? void 0 : r.ifMatch) !== Ew || (null === (s = t.conditions) || void 0 === s ? void 0 : s.ifNoneMatch) && (null === (i = t.conditions) || void 0 === i ? void 0 : i.ifNoneMatch) !== Ew || (null === (a = t.conditions) || void 0 === a ? void 0 : a.tagConditions))) throw new RangeError("The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable.");
				try {
					const n = await this._containerOrBlobOperation.changeLease(this._leaseId, e, Object.assign({
						abortSignal: t.abortSignal,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (o = t.conditions) || void 0 === o ? void 0 : o.tagConditions
						})
					}, RP(c)));
					return this._leaseId = e, n
				} catch (e) {
					throw l.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					l.end()
				}
			}
			async releaseLease(e = {}) {
				var t, n, r, s, i, a;
				const {
					span: o,
					updatedOptions: l
				} = PP("BlobLeaseClient-releaseLease", e);
				if (this._isContainer && ((null === (t = e.conditions) || void 0 === t ? void 0 : t.ifMatch) && (null === (n = e.conditions) || void 0 === n ? void 0 : n.ifMatch) !== Ew || (null === (r = e.conditions) || void 0 === r ? void 0 : r.ifNoneMatch) && (null === (s = e.conditions) || void 0 === s ? void 0 : s.ifNoneMatch) !== Ew || (null === (i = e.conditions) || void 0 === i ? void 0 : i.tagConditions))) throw new RangeError("The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable.");
				try {
					return await this._containerOrBlobOperation.releaseLease(this._leaseId, Object.assign({
						abortSignal: e.abortSignal,
						modifiedAccessConditions: Object.assign(Object.assign({}, e.conditions), {
							ifTags: null === (a = e.conditions) || void 0 === a ? void 0 : a.tagConditions
						})
					}, RP(l)))
				} catch (e) {
					throw o.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					o.end()
				}
			}
			async renewLease(e = {}) {
				var t, n, r, s, i, a;
				const {
					span: o,
					updatedOptions: l
				} = PP("BlobLeaseClient-renewLease", e);
				if (this._isContainer && ((null === (t = e.conditions) || void 0 === t ? void 0 : t.ifMatch) && (null === (n = e.conditions) || void 0 === n ? void 0 : n.ifMatch) !== Ew || (null === (r = e.conditions) || void 0 === r ? void 0 : r.ifNoneMatch) && (null === (s = e.conditions) || void 0 === s ? void 0 : s.ifNoneMatch) !== Ew || (null === (i = e.conditions) || void 0 === i ? void 0 : i.tagConditions))) throw new RangeError("The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable.");
				try {
					return await this._containerOrBlobOperation.renewLease(this._leaseId, Object.assign({
						abortSignal: e.abortSignal,
						modifiedAccessConditions: Object.assign(Object.assign({}, e.conditions), {
							ifTags: null === (a = e.conditions) || void 0 === a ? void 0 : a.tagConditions
						})
					}, RP(l)))
				} catch (e) {
					throw o.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					o.end()
				}
			}
			async breakLease(e, t = {}) {
				var n, r, s, i, a, o;
				const {
					span: l,
					updatedOptions: c
				} = PP("BlobLeaseClient-breakLease", t);
				if (this._isContainer && ((null === (n = t.conditions) || void 0 === n ? void 0 : n.ifMatch) && (null === (r = t.conditions) || void 0 === r ? void 0 : r.ifMatch) !== Ew || (null === (s = t.conditions) || void 0 === s ? void 0 : s.ifNoneMatch) && (null === (i = t.conditions) || void 0 === i ? void 0 : i.ifNoneMatch) !== Ew || (null === (a = t.conditions) || void 0 === a ? void 0 : a.tagConditions))) throw new RangeError("The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable.");
				try {
					const n = Object.assign({
						abortSignal: t.abortSignal,
						breakPeriod: e,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (o = t.conditions) || void 0 === o ? void 0 : o.tagConditions
						})
					}, RP(c));
					return await this._containerOrBlobOperation.breakLease(n)
				} catch (e) {
					throw l.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					l.end()
				}
			}
		}
		class cR {
			constructor(e, t = {}) {
				this.originalResponse = e
			}
			get acceptRanges() {
				return this.originalResponse.acceptRanges
			}
			get cacheControl() {
				return this.originalResponse.cacheControl
			}
			get contentDisposition() {
				return this.originalResponse.contentDisposition
			}
			get contentEncoding() {
				return this.originalResponse.contentEncoding
			}
			get contentLanguage() {
				return this.originalResponse.contentLanguage
			}
			get blobSequenceNumber() {
				return this.originalResponse.blobSequenceNumber
			}
			get blobType() {
				return this.originalResponse.blobType
			}
			get contentLength() {
				return this.originalResponse.contentLength
			}
			get contentMD5() {
				return this.originalResponse.contentMD5
			}
			get contentRange() {
				return this.originalResponse.contentRange
			}
			get contentType() {
				return this.originalResponse.contentType
			}
			get copyCompletedOn() {}
			get copyId() {
				return this.originalResponse.copyId
			}
			get copyProgress() {
				return this.originalResponse.copyProgress
			}
			get copySource() {
				return this.originalResponse.copySource
			}
			get copyStatus() {
				return this.originalResponse.copyStatus
			}
			get copyStatusDescription() {
				return this.originalResponse.copyStatusDescription
			}
			get leaseDuration() {
				return this.originalResponse.leaseDuration
			}
			get leaseState() {
				return this.originalResponse.leaseState
			}
			get leaseStatus() {
				return this.originalResponse.leaseStatus
			}
			get date() {
				return this.originalResponse.date
			}
			get blobCommittedBlockCount() {
				return this.originalResponse.blobCommittedBlockCount
			}
			get etag() {
				return this.originalResponse.etag
			}
			get errorCode() {
				return this.originalResponse.errorCode
			}
			get isServerEncrypted() {
				return this.originalResponse.isServerEncrypted
			}
			get blobContentMD5() {
				return this.originalResponse.blobContentMD5
			}
			get lastModified() {
				return this.originalResponse.lastModified
			}
			get metadata() {
				return this.originalResponse.metadata
			}
			get requestId() {
				return this.originalResponse.requestId
			}
			get clientRequestId() {
				return this.originalResponse.clientRequestId
			}
			get version() {
				return this.originalResponse.version
			}
			get encryptionKeySha256() {
				return this.originalResponse.encryptionKeySha256
			}
			get contentCrc64() {
				return this.originalResponse.contentCrc64
			}
			get blobBody() {
				throw Error("Quick query in browser is not supported yet.")
			}
			get readableStreamBody() {}
			get _response() {
				return this.originalResponse._response
			}
		}
		class dR {
			constructor(e) {
				this.client = e
			}
			create(e, t) {
				const n = {
					contentLength: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, pR)
			}
			appendBlock(e, t, n) {
				const r = {
					contentLength: e,
					body: t,
					options: Ag(n || {})
				};
				return this.client.sendOperationRequest(r, hR)
			}
			appendBlockFromUrl(e, t, n) {
				const r = {
					sourceUrl: e,
					contentLength: t,
					options: Ag(n || {})
				};
				return this.client.sendOperationRequest(r, gR)
			}
			seal(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, yR)
			}
		}
		const mR = new Qg(e, !0),
			uR = new Qg(e, !1),
			pR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: sx
					},
					default: {
						bodyMapper: uy,
						headersMapper: ix
					}
				},
				queryParameters: [kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Fx, Xx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, CN, PN, RN, EN, zN, ON, kN, AN, IN, jN, $N, {
					parameterPath: "blobType",
					mapper: {
						defaultValue: "AppendBlob",
						isConstant: !0,
						serializedName: "x-ms-blob-type",
						type: {
							name: "String"
						}
					}
				}],
				isXML: !0,
				serializer: mR
			},
			hR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: ax
					},
					default: {
						bodyMapper: uy,
						headersMapper: ox
					}
				},
				requestBody: tS,
				queryParameters: [kx, mS],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Fx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, IN, QN, JN, eS, nS, uS, pS],
				mediaType: "binary",
				serializer: uR
			},
			gR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: lx
					},
					default: {
						bodyMapper: uy,
						headersMapper: cx
					}
				},
				queryParameters: [kx, mS],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Fx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, IN, qN, _N, DN, LN, FN, VN, QN, lS, cS, uS, pS, hS],
				isXML: !0,
				serializer: mR
			},
			yR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: dx
					},
					default: {
						bodyMapper: uy,
						headersMapper: mx
					}
				},
				queryParameters: [kx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "seal",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, SN, vN, pS],
				isXML: !0,
				serializer: mR
			};
		class fR {
			constructor(e) {
				this.client = e
			}
			upload(e, t, n) {
				const r = {
					contentLength: e,
					body: t,
					options: Ag(n || {})
				};
				return this.client.sendOperationRequest(r, NR)
			}
			putBlobFromUrl(e, t, n) {
				const r = {
					contentLength: e,
					copySource: t,
					options: Ag(n || {})
				};
				return this.client.sendOperationRequest(r, SR)
			}
			stageBlock(e, t, n, r) {
				const s = {
					blockId: e,
					contentLength: t,
					body: n,
					options: Ag(r || {})
				};
				return this.client.sendOperationRequest(s, vR)
			}
			stageBlockFromURL(e, t, n, r) {
				const s = {
					blockId: e,
					contentLength: t,
					sourceUrl: n,
					options: Ag(r || {})
				};
				return this.client.sendOperationRequest(s, wR)
			}
			commitBlockList(e, t) {
				const n = {
					blocks: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, CR)
			}
			getBlockList(e, t) {
				const n = {
					listType: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, PR)
			}
		}
		const bR = new Qg(e, !0),
			xR = new Qg(e, !1),
			NR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: ux
					},
					default: {
						bodyMapper: uy,
						headersMapper: px
					}
				},
				requestBody: tS,
				queryParameters: [kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Fx, Xx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, CN, PN, RN, EN, zN, ON, kN, AN, IN, BN, jN, $N, QN, JN, eS, nS, gS],
				mediaType: "binary",
				serializer: xR
			},
			SR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: hx
					},
					default: {
						bodyMapper: uy,
						headersMapper: gx
					}
				},
				queryParameters: [kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Fx, Xx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, CN, PN, RN, EN, zN, ON, IN, BN, qN, _N, DN, LN, HN, UN, jN, FN, VN, KN, QN, gS, {
					parameterPath: ["options", "copySourceBlobProperties"],
					mapper: {
						serializedName: "x-ms-copy-source-blob-properties",
						xmlName: "x-ms-copy-source-blob-properties",
						type: {
							name: "Boolean"
						}
					}
				}],
				isXML: !0,
				serializer: bR
			},
			vR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: yx
					},
					default: {
						bodyMapper: uy,
						headersMapper: fx
					}
				},
				requestBody: tS,
				queryParameters: [kx, yS, fS],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Fx, Jx, bN, xN, NN, IN, QN, JN, eS, nS],
				mediaType: "binary",
				serializer: xR
			},
			wR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: bx
					},
					default: {
						bodyMapper: uy,
						headersMapper: xx
					}
				},
				queryParameters: [kx, yS, fS],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Fx, Jx, bN, xN, NN, IN, qN, _N, DN, LN, FN, VN, lS, cS, hS],
				isXML: !0,
				serializer: bR
			},
			CR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: Nx
					},
					default: {
						bodyMapper: uy,
						headersMapper: Sx
					}
				},
				requestBody: bS,
				queryParameters: [kx, xS],
				urlParameters: [zx],
				headerParameters: [Px, Ex, Ax, Ix, Xx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, CN, PN, RN, EN, zN, ON, kN, AN, IN, BN, jN, $N, QN, JN],
				isXML: !0,
				contentType: "application/xml; charset=utf-8",
				mediaType: "xml",
				serializer: bR
			},
			PR = {
				path: "/{containerName}/{blob}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: My,
						headersMapper: vx
					},
					default: {
						bodyMapper: uy,
						headersMapper: wx
					}
				},
				queryParameters: [kx, gN, xS, {
					parameterPath: "listType",
					mapper: {
						defaultValue: "committed",
						serializedName: "blocklisttype",
						required: !0,
						xmlName: "blocklisttype",
						type: {
							name: "Enum",
							allowedValues: ["committed", "uncommitted", "all"]
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, wN],
				isXML: !0,
				serializer: bR
			};
		class RR {
			constructor(e) {
				this.client = e
			}
			create(e, t, n) {
				const r = {
					contentLength: e,
					blobContentLength: t,
					options: Ag(n || {})
				};
				return this.client.sendOperationRequest(r, OR)
			}
			uploadPages(e, t, n) {
				const r = {
					contentLength: e,
					body: t,
					options: Ag(n || {})
				};
				return this.client.sendOperationRequest(r, TR)
			}
			clearPages(e, t) {
				const n = {
					contentLength: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, kR)
			}
			uploadPagesFromURL(e, t, n, r, s) {
				const i = {
					sourceUrl: e,
					sourceRange: t,
					contentLength: n,
					range: r,
					options: Ag(s || {})
				};
				return this.client.sendOperationRequest(i, AR)
			}
			getPageRanges(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, IR)
			}
			getPageRangesDiff(e) {
				const t = {
					options: Ag(e || {})
				};
				return this.client.sendOperationRequest(t, BR)
			}
			resize(e, t) {
				const n = {
					blobContentLength: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, MR)
			}
			updateSequenceNumber(e, t) {
				const n = {
					sequenceNumberAction: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, qR)
			}
			copyIncremental(e, t) {
				const n = {
					copySource: e,
					options: Ag(t || {})
				};
				return this.client.sendOperationRequest(n, _R)
			}
		}
		const ER = new Qg(e, !0),
			zR = new Qg(e, !1),
			OR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: Hb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Ub
					}
				},
				queryParameters: [kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Fx, Xx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, CN, PN, RN, EN, zN, ON, kN, AN, IN, BN, jN, $N, {
					parameterPath: "blobType",
					mapper: {
						defaultValue: "PageBlob",
						isConstant: !0,
						serializedName: "x-ms-blob-type",
						type: {
							name: "String"
						}
					}
				}, ZN, YN],
				isXML: !0,
				serializer: ER
			},
			TR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: jb
					},
					default: {
						bodyMapper: uy,
						headersMapper: $b
					}
				},
				requestBody: tS,
				queryParameters: [kx, rS],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Fx, Jx, Zx, Yx, fN, bN, xN, NN, SN, vN, wN, IN, QN, JN, eS, nS, sS, iS, aS, oS],
				mediaType: "binary",
				serializer: zR
			},
			kR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: Fb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Vb
					}
				},
				queryParameters: [kx, rS],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Fx, Jx, Zx, Yx, fN, bN, xN, NN, SN, vN, wN, IN, iS, aS, oS, {
					parameterPath: "pageWrite",
					mapper: {
						defaultValue: "clear",
						isConstant: !0,
						serializedName: "x-ms-page-write",
						type: {
							name: "String"
						}
					}
				}],
				isXML: !0,
				serializer: ER
			},
			AR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					201: {
						headersMapper: Kb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Gb
					}
				},
				queryParameters: [kx, rS],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Fx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, IN, qN, _N, DN, LN, FN, VN, sS, iS, aS, oS, lS, {
					parameterPath: "sourceRange",
					mapper: {
						serializedName: "x-ms-source-range",
						required: !0,
						xmlName: "x-ms-source-range",
						type: {
							name: "String"
						}
					}
				}, cS, {
					parameterPath: "range",
					mapper: {
						serializedName: "x-ms-range",
						required: !0,
						xmlName: "x-ms-range",
						type: {
							name: "String"
						}
					}
				}],
				isXML: !0,
				serializer: ER
			},
			IR = {
				path: "/{containerName}/{blob}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: _y,
						headersMapper: Wb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Xb
					}
				},
				queryParameters: [kx, _x, Dx, gN, dS],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, fN, SN, vN, wN],
				isXML: !0,
				serializer: ER
			},
			BR = {
				path: "/{containerName}/{blob}",
				httpMethod: "GET",
				responses: {
					200: {
						bodyMapper: _y,
						headersMapper: Qb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Jb
					}
				},
				queryParameters: [kx, _x, Dx, gN, dS, {
					parameterPath: ["options", "prevsnapshot"],
					mapper: {
						serializedName: "prevsnapshot",
						xmlName: "prevsnapshot",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, fN, SN, vN, wN, {
					parameterPath: ["options", "prevSnapshotUrl"],
					mapper: {
						serializedName: "x-ms-previous-snapshot-url",
						xmlName: "x-ms-previous-snapshot-url",
						type: {
							name: "String"
						}
					}
				}],
				isXML: !0,
				serializer: ER
			},
			MR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: Zb
					},
					default: {
						bodyMapper: uy,
						headersMapper: Yb
					}
				},
				queryParameters: [Tx, kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, bN, xN, NN, SN, vN, wN, IN, ZN],
				isXML: !0,
				serializer: ER
			},
			qR = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					200: {
						headersMapper: ex
					},
					default: {
						bodyMapper: uy,
						headersMapper: tx
					}
				},
				queryParameters: [Tx, kx],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Jx, Zx, Yx, SN, vN, wN, YN, {
					parameterPath: "sequenceNumberAction",
					mapper: {
						serializedName: "x-ms-sequence-number-action",
						required: !0,
						xmlName: "x-ms-sequence-number-action",
						type: {
							name: "Enum",
							allowedValues: ["max", "update", "increment"]
						}
					}
				}],
				isXML: !0,
				serializer: ER
			},
			_R = {
				path: "/{containerName}/{blob}",
				httpMethod: "PUT",
				responses: {
					202: {
						headersMapper: nx
					},
					default: {
						bodyMapper: uy,
						headersMapper: rx
					}
				},
				queryParameters: [kx, {
					parameterPath: "comp",
					mapper: {
						defaultValue: "incrementalcopy",
						isConstant: !0,
						serializedName: "comp",
						type: {
							name: "String"
						}
					}
				}],
				urlParameters: [zx],
				headerParameters: [Ax, Ix, Bx, Zx, Yx, SN, vN, wN, UN],
				isXML: !0,
				serializer: ER
			};
		var DR, LR, HR;

		function UR(e) {
			if (void 0 !== e) return e
		}

		function jR(e, t) {
			if (e && !t) throw new RangeError("Customer-provided encryption key must be used over HTTPS.");
			e && !e.encryptionAlgorithm && (e.encryptionAlgorithm = "AES256")
		}

		function $R(e) {
			const t = (e._response.parsedBody.pageRange || []).map((e => ({
					offset: e.start,
					count: e.end - e.start
				}))),
				n = (e._response.parsedBody.clearRange || []).map((e => ({
					offset: e.start,
					count: e.end - e.start
				})));
			return Object.assign(Object.assign({}, e), {
				pageRange: t,
				clearRange: n,
				_response: Object.assign(Object.assign({}, e._response), {
					parsedBody: {
						pageRange: t,
						clearRange: n
					}
				})
			})
		}! function(e) {
			e.Hot = "Hot", e.Cool = "Cool", e.Cold = "Cold", e.Archive = "Archive"
		}(DR || (DR = {})),
		function(e) {
			e.P4 = "P4", e.P6 = "P6", e.P10 = "P10", e.P15 = "P15", e.P20 = "P20", e.P30 = "P30", e.P40 = "P40", e.P50 = "P50", e.P60 = "P60", e.P70 = "P70", e.P80 = "P80"
		}(LR || (LR = {})),
		function(e) {
			e.StorageOAuthScopes = "https://storage.azure.com/.default", e.DiskComputeOAuthScopes = "https://disk.compute.azure.com/.default"
		}(HR || (HR = {}));
		gv("core-lro");
		class FR extends Error {
			constructor(e) {
				super(e), this.name = "PollerStoppedError", Object.setPrototypeOf(this, FR.prototype)
			}
		}
		class VR extends Error {
			constructor(e) {
				super(e), this.name = "PollerCancelledError", Object.setPrototypeOf(this, VR.prototype)
			}
		}
		class KR {
			constructor(e) {
				this.resolveOnUnsuccessful = !1, this.stopped = !0, this.pollProgressCallbacks = [], this.operation = e, this.promise = new Promise(((e, t) => {
					this.resolve = e, this.reject = t
				})), this.promise.catch((() => {}))
			}
			async startPolling(e = {}) {
				for (this.stopped && (this.stopped = !1); !this.isStopped() && !this.isDone();) await this.poll(e), await this.delay()
			}
			async pollOnce(e = {}) {
				this.isDone() || (this.operation = await this.operation.update({
					abortSignal: e.abortSignal,
					fireProgress: this.fireProgress.bind(this)
				})), this.processUpdatedState()
			}
			fireProgress(e) {
				for (const t of this.pollProgressCallbacks) t(e)
			}
			async cancelOnce(e = {}) {
				this.operation = await this.operation.cancel(e)
			}
			poll(e = {}) {
				if (!this.pollOncePromise) {
					this.pollOncePromise = this.pollOnce(e);
					const t = () => {
						this.pollOncePromise = void 0
					};
					this.pollOncePromise.then(t, t).catch(this.reject)
				}
				return this.pollOncePromise
			}
			processUpdatedState() {
				if (this.operation.state.error && (this.stopped = !0, !this.resolveOnUnsuccessful)) throw this.reject(this.operation.state.error), this.operation.state.error;
				if (this.operation.state.isCancelled && (this.stopped = !0, !this.resolveOnUnsuccessful)) {
					const e = new VR("Operation was canceled");
					throw this.reject(e), e
				}
				this.isDone() && this.resolve && this.resolve(this.getResult())
			}
			async pollUntilDone(e = {}) {
				return this.stopped && this.startPolling(e).catch(this.reject), this.processUpdatedState(), this.promise
			}
			onProgress(e) {
				return this.pollProgressCallbacks.push(e), () => {
					this.pollProgressCallbacks = this.pollProgressCallbacks.filter((t => t !== e))
				}
			}
			isDone() {
				const e = this.operation.state;
				return Boolean(e.isCompleted || e.isCancelled || e.error)
			}
			stopPolling() {
				this.stopped || (this.stopped = !0, this.reject && this.reject(new FR("This poller is already stopped")))
			}
			isStopped() {
				return this.stopped
			}
			cancelOperation(e = {}) {
				if (this.cancelPromise) {
					if (e.abortSignal) throw new Error("A cancel request is currently pending")
				} else this.cancelPromise = this.cancelOnce(e);
				return this.cancelPromise
			}
			getOperationState() {
				return this.operation.state
			}
			getResult() {
				return this.operation.state.result
			}
			toString() {
				return this.operation.toString()
			}
		}
		class GR extends KR {
			constructor(e) {
				const {
					blobClient: t,
					copySource: n,
					intervalInMs: r = 15e3,
					onProgress: s,
					resumeFrom: i,
					startCopyFromURLOptions: a
				} = e;
				let o;
				i && (o = JSON.parse(i).state);
				super(JR(Object.assign(Object.assign({}, o), {
					blobClient: t,
					copySource: n,
					startCopyFromURLOptions: a
				}))), "function" == typeof s && this.onProgress(s), this.intervalInMs = r
			}
			delay() {
				return uh(this.intervalInMs)
			}
		}
		const WR = async function(e = {}) {
			const t = this.state,
				{
					copyId: n
				} = t;
			return t.isCompleted ? JR(t) : n ? (await t.blobClient.abortCopyFromURL(n, {
				abortSignal: e.abortSignal
			}), t.isCancelled = !0, JR(t)) : (t.isCancelled = !0, JR(t))
		}, XR = async function(e = {}) {
			const t = this.state,
				{
					blobClient: n,
					copySource: r,
					startCopyFromURLOptions: s
				} = t;
			if (t.isStarted) {
				if (!t.isCompleted) try {
					const n = await t.blobClient.getProperties({
							abortSignal: e.abortSignal
						}),
						{
							copyStatus: r,
							copyProgress: s
						} = n,
						i = t.copyProgress;
					s && (t.copyProgress = s), "pending" === r && s !== i && "function" == typeof e.fireProgress ? e.fireProgress(t) : "success" === r ? (t.result = n, t.isCompleted = !0) : "failed" === r && (t.error = new Error(`Blob copy failed with reason: "${n.copyStatusDescription||"unknown"}"`), t.isCompleted = !0)
				} catch (e) {
					t.error = e, t.isCompleted = !0
				}
			} else {
				t.isStarted = !0;
				const e = await n.startCopyFromURL(r, s);
				t.copyId = e.copyId, "success" === e.copyStatus && (t.result = e, t.isCompleted = !0)
			}
			return JR(t)
		}, QR = function() {
			return JSON.stringify({
				state: this.state
			}, ((e, t) => {
				if ("blobClient" !== e) return t
			}))
		};

		function JR(e) {
			return {
				state: Object.assign({}, e),
				cancel: WR,
				toString: QR,
				update: XR
			}
		}

		function ZR(e) {
			if (e.offset < 0) throw new RangeError("Range.offset cannot be smaller than 0.");
			if (e.count && e.count <= 0) throw new RangeError("Range.count must be larger than 0. Leave it undefined if you want a range from offset to the end.");
			return e.count ? `bytes=${e.offset}-${e.offset+e.count-1}` : `bytes=${e.offset}-`
		}
		var YR, eE = n(7);
		! function(e) {
			e[e.Good = 0] = "Good", e[e.Error = 1] = "Error"
		}(YR || (YR = {}));
		class tE {
			constructor(e = 5) {
				if (this.actives = 0, this.completed = 0, this.offset = 0, this.operations = [], this.state = YR.Good, e < 1) throw new RangeError("concurrency must be larger than 0");
				this.concurrency = e, this.emitter = new eE.EventEmitter
			}
			addOperation(e) {
				this.operations.push((async () => {
					try {
						this.actives++, await e(), this.actives--, this.completed++, this.parallelExecute()
					} catch (e) {
						this.emitter.emit("error", e)
					}
				}))
			}
			async
				do() {
					return 0 === this.operations.length ? Promise.resolve() : (this.parallelExecute(), new Promise(((e, t) => {
						this.emitter.on("finish", e), this.emitter.on("error", (e => {
							this.state = YR.Error, t(e)
						}))
					})))
				}
				nextOperation() {
					return this.offset < this.operations.length ? this.operations[this.offset++] : null
				}
			parallelExecute() {
				if (this.state !== YR.Error)
					if (this.completed >= this.operations.length) this.emitter.emit("finish");
					else
						for (; this.actives < this.concurrency;) {
							const e = this.nextOperation();
							if (!e) return;
							e()
						}
			}
		}
		class nE {}
		class rE extends CP {
			constructor(e, t, n, r) {
				let s, i;
				if (r = r || {}, IC(t)) i = e, s = t;
				else if (Nh && t instanceof qC || t instanceof gC || Sh(t)) i = e, s = MC(t, r = n);
				else if (t || "string" == typeof t) {
					if (!t || "string" != typeof t || !n || "string" != typeof n) throw new Error("Expecting non-empty strings for containerName and blobName parameters");
					{
						const a = t,
							o = n,
							l = Mw(e);
						if ("AccountConnString" === l.kind) {
							if (!Nh) throw new Error("Account connection string is only supported in Node.js environment");
							{
								const e = new qC(l.accountName, l.accountKey);
								i = qw(qw(l.url, encodeURIComponent(a)), encodeURIComponent(o)), r.proxyOptions || (r.proxyOptions = void l.proxyUri), s = MC(e, r)
							}
						} else {
							if ("SASConnString" !== l.kind) throw new Error("Connection string must be either an Account connection string or a SAS connection string");
							i = qw(qw(l.url, encodeURIComponent(a)), encodeURIComponent(o)) + "?" + l.accountSas, s = MC(new gC, r)
						}
					}
				} else i = e, s = MC(new gC, r);
				super(i, s), ({
					blobName: this._name,
					containerName: this._containerName
				} = this.getBlobAndContainerNamesFromUrl()), this.blobContext = new qP(this.storageClientContext), this._snapshot = Dw(this.url, fw.SNAPSHOT), this._versionId = Dw(this.url, fw.VERSIONID)
			}
			get name() {
				return this._name
			}
			get containerName() {
				return this._containerName
			}
			withSnapshot(e) {
				return new rE(_w(this.url, fw.SNAPSHOT, 0 === e.length ? void 0 : e), this.pipeline)
			}
			withVersion(e) {
				return new rE(_w(this.url, fw.VERSIONID, 0 === e.length ? void 0 : e), this.pipeline)
			}
			getAppendBlobClient() {
				return new sE(this.url, this.pipeline)
			}
			getBlockBlobClient() {
				return new iE(this.url, this.pipeline)
			}
			getPageBlobClient() {
				return new aE(this.url, this.pipeline)
			}
			async download(e = 0, t, n = {}) {
				var r;
				n.conditions = n.conditions || {}, n.conditions = n.conditions || {}, jR(n.customerProvidedKey, this.isHttps);
				const {
					span: s,
					updatedOptions: i
				} = PP("BlobClient-download", n);
				try {
					const s = await this.blobContext.download(Object.assign({
							abortSignal: n.abortSignal,
							leaseAccessConditions: n.conditions,
							modifiedAccessConditions: Object.assign(Object.assign({}, n.conditions), {
								ifTags: null === (r = n.conditions) || void 0 === r ? void 0 : r.tagConditions
							}),
							requestOptions: {
								onDownloadProgress: Nh ? void 0 : n.onProgress
							},
							range: 0 !== e || t ? ZR({
								offset: e,
								count: t
							}) : void 0,
							rangeGetContentMD5: n.rangeGetContentMD5,
							rangeGetContentCRC64: n.rangeGetContentCrc64,
							snapshot: n.snapshot,
							cpkInfo: n.customerProvidedKey
						}, RP(i))),
						a = Object.assign(Object.assign({}, s), {
							_response: s._response,
							objectReplicationDestinationPolicyId: s.objectReplicationPolicyId,
							objectReplicationSourceProperties: Jw(s.objectReplicationRules)
						});
					if (!Nh) return a;
					if ((void 0 === n.maxRetryRequests || n.maxRetryRequests < 0) && (n.maxRetryRequests = 5), void 0 === s.contentLength) throw new RangeError("File download response doesn't contain valid content length header");
					if (!s.etag) throw new RangeError("File download response doesn't contain valid etag header");
					return new 1(a, (async t => {
						var r;
						const i = {
							leaseAccessConditions: n.conditions,
							modifiedAccessConditions: {
								ifMatch: n.conditions.ifMatch || s.etag,
								ifModifiedSince: n.conditions.ifModifiedSince,
								ifNoneMatch: n.conditions.ifNoneMatch,
								ifUnmodifiedSince: n.conditions.ifUnmodifiedSince,
								ifTags: null === (r = n.conditions) || void 0 === r ? void 0 : r.tagConditions
							},
							range: ZR({
								count: e + s.contentLength - t,
								offset: t
							}),
							rangeGetContentMD5: n.rangeGetContentMD5,
							rangeGetContentCRC64: n.rangeGetContentCrc64,
							snapshot: n.snapshot,
							cpkInfo: n.customerProvidedKey
						};
						return (await this.blobContext.download(Object.assign({
							abortSignal: n.abortSignal
						}, i))).readableStreamBody
					}), e, s.contentLength, {
						maxRetryRequests: n.maxRetryRequests,
						onProgress: n.onProgress
					})
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async exists(e = {}) {
				const {
					span: t,
					updatedOptions: n
				} = PP("BlobClient-exists", e);
				try {
					return jR(e.customerProvidedKey, this.isHttps), await this.getProperties({
						abortSignal: e.abortSignal,
						customerProvidedKey: e.customerProvidedKey,
						conditions: e.conditions,
						tracingOptions: n.tracingOptions
					}), !0
				} catch (e) {
					if (404 === e.statusCode) return !1;
					if (409 === e.statusCode && ("BlobUsesCustomerSpecifiedEncryption" === e.details.errorCode || "BlobDoesNotUseCustomerSpecifiedEncryption" === e.details.errorCode)) return !0;
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async getProperties(e = {}) {
				var t;
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobClient-getProperties", e);
				try {
					e.conditions = e.conditions || {}, jR(e.customerProvidedKey, this.isHttps);
					const n = await this.blobContext.getProperties(Object.assign({
						abortSignal: e.abortSignal,
						leaseAccessConditions: e.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, e.conditions), {
							ifTags: null === (t = e.conditions) || void 0 === t ? void 0 : t.tagConditions
						}),
						cpkInfo: e.customerProvidedKey
					}, RP(r)));
					return Object.assign(Object.assign({}, n), {
						_response: n._response,
						objectReplicationDestinationPolicyId: n.objectReplicationPolicyId,
						objectReplicationSourceProperties: Jw(n.objectReplicationRules)
					})
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async delete(e = {}) {
				var t;
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobClient-delete", e);
				e.conditions = e.conditions || {};
				try {
					return await this.blobContext.delete(Object.assign({
						abortSignal: e.abortSignal,
						deleteSnapshots: e.deleteSnapshots,
						leaseAccessConditions: e.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, e.conditions), {
							ifTags: null === (t = e.conditions) || void 0 === t ? void 0 : t.tagConditions
						})
					}, RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async deleteIfExists(e = {}) {
				var t, n;
				const {
					span: r,
					updatedOptions: s
				} = PP("BlobClient-deleteIfExists", e);
				try {
					const e = await this.delete(s);
					return Object.assign(Object.assign({
						succeeded: !0
					}, e), {
						_response: e._response
					})
				} catch (e) {
					if ("BlobNotFound" === (null === (t = e.details) || void 0 === t ? void 0 : t.errorCode)) return r.setStatus({
						code: kg.ERROR,
						message: "Expected exception when deleting a blob or snapshot only if it exists."
					}), Object.assign(Object.assign({
						succeeded: !1
					}, null === (n = e.response) || void 0 === n ? void 0 : n.parsedHeaders), {
						_response: e.response
					});
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async undelete(e = {}) {
				const {
					span: t,
					updatedOptions: n
				} = PP("BlobClient-undelete", e);
				try {
					return await this.blobContext.undelete(Object.assign({
						abortSignal: e.abortSignal
					}, RP(n)))
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async setHTTPHeaders(e, t = {}) {
				var n;
				const {
					span: r,
					updatedOptions: s
				} = PP("BlobClient-setHTTPHeaders", t);
				t.conditions = t.conditions || {};
				try {
					return jR(t.customerProvidedKey, this.isHttps), await this.blobContext.setHttpHeaders(Object.assign({
						abortSignal: t.abortSignal,
						blobHttpHeaders: e,
						leaseAccessConditions: t.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						})
					}, RP(s)))
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async setMetadata(e, t = {}) {
				var n;
				const {
					span: r,
					updatedOptions: s
				} = PP("BlobClient-setMetadata", t);
				t.conditions = t.conditions || {};
				try {
					return jR(t.customerProvidedKey, this.isHttps), await this.blobContext.setMetadata(Object.assign({
						abortSignal: t.abortSignal,
						leaseAccessConditions: t.conditions,
						metadata: e,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						}),
						cpkInfo: t.customerProvidedKey,
						encryptionScope: t.encryptionScope
					}, RP(s)))
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async setTags(e, t = {}) {
				var n;
				const {
					span: r,
					updatedOptions: s
				} = PP("BlobClient-setTags", t);
				try {
					return await this.blobContext.setTags(Object.assign(Object.assign({
						abortSignal: t.abortSignal,
						leaseAccessConditions: t.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						})
					}, RP(s)), {
						tags: Ww(e)
					}))
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async getTags(e = {}) {
				var t;
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobClient-getTags", e);
				try {
					const n = await this.blobContext.getTags(Object.assign({
						abortSignal: e.abortSignal,
						leaseAccessConditions: e.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, e.conditions), {
							ifTags: null === (t = e.conditions) || void 0 === t ? void 0 : t.tagConditions
						})
					}, RP(r)));
					return Object.assign(Object.assign({}, n), {
						_response: n._response,
						tags: Xw({
							blobTagSet: n.blobTagSet
						}) || {}
					})
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			getBlobLeaseClient(e) {
				return new lR(this, e)
			}
			async createSnapshot(e = {}) {
				var t;
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobClient-createSnapshot", e);
				e.conditions = e.conditions || {};
				try {
					return jR(e.customerProvidedKey, this.isHttps), await this.blobContext.createSnapshot(Object.assign({
						abortSignal: e.abortSignal,
						leaseAccessConditions: e.conditions,
						metadata: e.metadata,
						modifiedAccessConditions: Object.assign(Object.assign({}, e.conditions), {
							ifTags: null === (t = e.conditions) || void 0 === t ? void 0 : t.tagConditions
						}),
						cpkInfo: e.customerProvidedKey,
						encryptionScope: e.encryptionScope
					}, RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async beginCopyFromURL(e, t = {}) {
				const n = new GR({
					blobClient: {
						abortCopyFromURL: (...e) => this.abortCopyFromURL(...e),
						getProperties: (...e) => this.getProperties(...e),
						startCopyFromURL: (...e) => this.startCopyFromURL(...e)
					},
					copySource: e,
					intervalInMs: t.intervalInMs,
					onProgress: t.onProgress,
					resumeFrom: t.resumeFrom,
					startCopyFromURLOptions: t
				});
				return await n.poll(), n
			}
			async abortCopyFromURL(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobClient-abortCopyFromURL", t);
				try {
					return await this.blobContext.abortCopyFromURL(e, Object.assign({
						abortSignal: t.abortSignal,
						leaseAccessConditions: t.conditions
					}, RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async syncCopyFromURL(e, t = {}) {
				var n, r, s;
				const {
					span: i,
					updatedOptions: a
				} = PP("BlobClient-syncCopyFromURL", t);
				t.conditions = t.conditions || {}, t.sourceConditions = t.sourceConditions || {};
				try {
					return await this.blobContext.copyFromURL(e, Object.assign({
						abortSignal: t.abortSignal,
						metadata: t.metadata,
						leaseAccessConditions: t.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						}),
						sourceModifiedAccessConditions: {
							sourceIfMatch: t.sourceConditions.ifMatch,
							sourceIfModifiedSince: t.sourceConditions.ifModifiedSince,
							sourceIfNoneMatch: t.sourceConditions.ifNoneMatch,
							sourceIfUnmodifiedSince: t.sourceConditions.ifUnmodifiedSince
						},
						sourceContentMD5: t.sourceContentMD5,
						copySourceAuthorization: Yw(t.sourceAuthorization),
						tier: UR(t.tier),
						blobTagsString: Gw(t.tags),
						immutabilityPolicyExpiry: null === (r = t.immutabilityPolicy) || void 0 === r ? void 0 : r.expiriesOn,
						immutabilityPolicyMode: null === (s = t.immutabilityPolicy) || void 0 === s ? void 0 : s.policyMode,
						legalHold: t.legalHold,
						encryptionScope: t.encryptionScope,
						copySourceTags: t.copySourceTags
					}, RP(a)))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			async setAccessTier(e, t = {}) {
				var n;
				const {
					span: r,
					updatedOptions: s
				} = PP("BlobClient-setAccessTier", t);
				try {
					return await this.blobContext.setTier(UR(e), Object.assign({
						abortSignal: t.abortSignal,
						leaseAccessConditions: t.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						}),
						rehydratePriority: t.rehydratePriority
					}, RP(s)))
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async downloadToBuffer(e, t, n, r = {}) {
				let s, i = 0,
					a = 0,
					o = r;
				e instanceof Buffer ? (s = e, i = t || 0, a = "number" == typeof n ? n : 0) : (i = "number" == typeof e ? e : 0, a = "number" == typeof t ? t : 0, o = n || {});
				const {
					span: l,
					updatedOptions: c
				} = PP("BlobClient-downloadToBuffer", o);
				try {
					if (o.blockSize || (o.blockSize = 0), o.blockSize < 0) throw new RangeError("blockSize option must be >= 0");
					if (0 === o.blockSize && (o.blockSize = gw), i < 0) throw new RangeError("offset option must be >= 0");
					if (a && a <= 0) throw new RangeError("count option must be greater than 0");
					if (o.conditions || (o.conditions = {}), !a) {
						const e = await this.getProperties(Object.assign(Object.assign({}, o), {
							tracingOptions: Object.assign(Object.assign({}, o.tracingOptions), RP(c))
						}));
						if (a = e.contentLength - i, a < 0) throw new RangeError(`offset ${i} shouldn't be larger than blob size ${e.contentLength}`)
					}
					if (!s) try {
						s = Buffer.alloc(a)
					} catch (e) {
						throw new Error(`Unable to allocate the buffer of size: ${a}(in bytes). Please try passing your own buffer to the "downloadToBuffer" method or try using other methods like "download" or "downloadToFile".\t ${e.message}`)
					}
					if (s.length < a) throw new RangeError(`The buffer's size should be equal to or larger than the request count of bytes: ${a}`);
					let e = 0;
					const t = new tE(o.concurrency);
					for (let n = i; n < i + a; n += o.blockSize) t.addOperation((async () => {
						let t = i + a;
						n + o.blockSize < t && (t = n + o.blockSize);
						(await this.download(n, t - n, {
							abortSignal: o.abortSignal,
							conditions: o.conditions,
							maxRetryRequests: o.maxRetryRequestsPerBlock,
							customerProvidedKey: o.customerProvidedKey,
							tracingOptions: Object.assign(Object.assign({}, o.tracingOptions), RP(c))
						})).readableStreamBody;
						await void 0, e += t - n, o.onProgress && o.onProgress({
							loadedBytes: e
						})
					}));
					return await t.do(), s
				} catch (e) {
					throw l.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					l.end()
				}
			}
			async downloadToFile(e, t = 0, n, r = {}) {
				const {
					span: s,
					updatedOptions: i
				} = PP("BlobClient-downloadToFile", r);
				try {
					const e = await this.download(t, n, Object.assign(Object.assign({}, r), {
						tracingOptions: Object.assign(Object.assign({}, r.tracingOptions), RP(i))
					}));
					return e.readableStreamBody && await void e.readableStreamBody, e.blobDownloadStream = void 0, e
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			getBlobAndContainerNamesFromUrl() {
				let e, t;
				try {
					const n = Ov.parse(this.url);
					if ("blob" === n.getHost().split(".")[1]) {
						const r = n.getPath().match("/([^/]*)(/(.*))?");
						e = r[1], t = r[3]
					} else if (Kw(n)) {
						const r = n.getPath().match("/([^/]*)/([^/]*)(/(.*))?");
						e = r[2], t = r[4]
					} else {
						const r = n.getPath().match("/([^/]*)(/(.*))?");
						e = r[1], t = r[3]
					}
					if (e = decodeURIComponent(e), t = decodeURIComponent(t), t = t.replace(/\\/g, "/"), !e) throw new Error("Provided containerName is invalid.");
					return {
						blobName: t,
						containerName: e
					}
				} catch (e) {
					throw new Error("Unable to extract blobName and containerName with provided information.")
				}
			}
			async startCopyFromURL(e, t = {}) {
				var n, r, s;
				const {
					span: i,
					updatedOptions: a
				} = PP("BlobClient-startCopyFromURL", t);
				t.conditions = t.conditions || {}, t.sourceConditions = t.sourceConditions || {};
				try {
					return await this.blobContext.startCopyFromURL(e, Object.assign({
						abortSignal: t.abortSignal,
						leaseAccessConditions: t.conditions,
						metadata: t.metadata,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						}),
						sourceModifiedAccessConditions: {
							sourceIfMatch: t.sourceConditions.ifMatch,
							sourceIfModifiedSince: t.sourceConditions.ifModifiedSince,
							sourceIfNoneMatch: t.sourceConditions.ifNoneMatch,
							sourceIfUnmodifiedSince: t.sourceConditions.ifUnmodifiedSince,
							sourceIfTags: t.sourceConditions.tagConditions
						},
						immutabilityPolicyExpiry: null === (r = t.immutabilityPolicy) || void 0 === r ? void 0 : r.expiriesOn,
						immutabilityPolicyMode: null === (s = t.immutabilityPolicy) || void 0 === s ? void 0 : s.policyMode,
						legalHold: t.legalHold,
						rehydratePriority: t.rehydratePriority,
						tier: UR(t.tier),
						blobTagsString: Gw(t.tags),
						sealBlob: t.sealBlob
					}, RP(a)))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			generateSasUrl(e) {
				return new Promise((t => {
					if (!(this.credential instanceof qC)) throw new RangeError("Can only generate the SAS when the client is initialized with a shared key credential");
					const n = IP(Object.assign({
						containerName: this._containerName,
						blobName: this._name,
						snapshotTime: this._snapshot,
						versionId: this._versionId
					}, e), this.credential).toString();
					t(Uw(this.url, n))
				}))
			}
			async deleteImmutabilityPolicy(e) {
				const {
					span: t,
					updatedOptions: n
				} = PP("BlobClient-deleteImmutabilityPolicy", e);
				try {
					return await this.blobContext.deleteImmutabilityPolicy(Object.assign({
						abortSignal: null == e ? void 0 : e.abortSignal
					}, RP(n)))
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async setImmutabilityPolicy(e, t) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobClient-setImmutabilityPolicy", t);
				try {
					return await this.blobContext.setImmutabilityPolicy(Object.assign({
						abortSignal: null == t ? void 0 : t.abortSignal,
						immutabilityPolicyExpiry: e.expiriesOn,
						immutabilityPolicyMode: e.policyMode,
						modifiedAccessConditions: null == t ? void 0 : t.modifiedAccessCondition
					}, RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async setLegalHold(e, t) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobClient-setLegalHold", t);
				try {
					return await this.blobContext.setLegalHold(e, Object.assign({
						abortSignal: null == t ? void 0 : t.abortSignal
					}, RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
		}
		class sE extends rE {
			constructor(e, t, n, r) {
				let s, i;
				if (r = r || {}, IC(t)) i = e, s = t;
				else if (Nh && t instanceof qC || t instanceof gC || Sh(t)) i = e, s = MC(t, r = n);
				else if (t || "string" == typeof t) {
					if (!t || "string" != typeof t || !n || "string" != typeof n) throw new Error("Expecting non-empty strings for containerName and blobName parameters");
					{
						const a = t,
							o = n,
							l = Mw(e);
						if ("AccountConnString" === l.kind) {
							if (!Nh) throw new Error("Account connection string is only supported in Node.js environment");
							{
								const e = new qC(l.accountName, l.accountKey);
								i = qw(qw(l.url, encodeURIComponent(a)), encodeURIComponent(o)), r.proxyOptions || (r.proxyOptions = void l.proxyUri), s = MC(e, r)
							}
						} else {
							if ("SASConnString" !== l.kind) throw new Error("Connection string must be either an Account connection string or a SAS connection string");
							i = qw(qw(l.url, encodeURIComponent(a)), encodeURIComponent(o)) + "?" + l.accountSas, s = MC(new gC, r)
						}
					}
				} else i = e, s = MC(new gC, r);
				super(i, s), this.appendBlobContext = new dR(this.storageClientContext)
			}
			withSnapshot(e) {
				return new sE(_w(this.url, fw.SNAPSHOT, 0 === e.length ? void 0 : e), this.pipeline)
			}
			async create(e = {}) {
				var t, n, r;
				const {
					span: s,
					updatedOptions: i
				} = PP("AppendBlobClient-create", e);
				e.conditions = e.conditions || {};
				try {
					return jR(e.customerProvidedKey, this.isHttps), await this.appendBlobContext.create(0, Object.assign({
						abortSignal: e.abortSignal,
						blobHttpHeaders: e.blobHTTPHeaders,
						leaseAccessConditions: e.conditions,
						metadata: e.metadata,
						modifiedAccessConditions: Object.assign(Object.assign({}, e.conditions), {
							ifTags: null === (t = e.conditions) || void 0 === t ? void 0 : t.tagConditions
						}),
						cpkInfo: e.customerProvidedKey,
						encryptionScope: e.encryptionScope,
						immutabilityPolicyExpiry: null === (n = e.immutabilityPolicy) || void 0 === n ? void 0 : n.expiriesOn,
						immutabilityPolicyMode: null === (r = e.immutabilityPolicy) || void 0 === r ? void 0 : r.policyMode,
						legalHold: e.legalHold,
						blobTagsString: Gw(e.tags)
					}, RP(i)))
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async createIfNotExists(e = {}) {
				var t, n;
				const {
					span: r,
					updatedOptions: s
				} = PP("AppendBlobClient-createIfNotExists", e), i = {
					ifNoneMatch: "*"
				};
				try {
					const e = await this.create(Object.assign(Object.assign({}, s), {
						conditions: i
					}));
					return Object.assign(Object.assign({
						succeeded: !0
					}, e), {
						_response: e._response
					})
				} catch (e) {
					if ("BlobAlreadyExists" === (null === (t = e.details) || void 0 === t ? void 0 : t.errorCode)) return r.setStatus({
						code: kg.ERROR,
						message: "Expected exception when creating a blob only if it does not already exist."
					}), Object.assign(Object.assign({
						succeeded: !1
					}, null === (n = e.response) || void 0 === n ? void 0 : n.parsedHeaders), {
						_response: e.response
					});
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async seal(e = {}) {
				var t;
				const {
					span: n,
					updatedOptions: r
				} = PP("AppendBlobClient-seal", e);
				e.conditions = e.conditions || {};
				try {
					return await this.appendBlobContext.seal(Object.assign({
						abortSignal: e.abortSignal,
						appendPositionAccessConditions: e.conditions,
						leaseAccessConditions: e.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, e.conditions), {
							ifTags: null === (t = e.conditions) || void 0 === t ? void 0 : t.tagConditions
						})
					}, RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async appendBlock(e, t, n = {}) {
				var r;
				const {
					span: s,
					updatedOptions: i
				} = PP("AppendBlobClient-appendBlock", n);
				n.conditions = n.conditions || {};
				try {
					return jR(n.customerProvidedKey, this.isHttps), await this.appendBlobContext.appendBlock(t, e, Object.assign({
						abortSignal: n.abortSignal,
						appendPositionAccessConditions: n.conditions,
						leaseAccessConditions: n.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, n.conditions), {
							ifTags: null === (r = n.conditions) || void 0 === r ? void 0 : r.tagConditions
						}),
						requestOptions: {
							onUploadProgress: n.onProgress
						},
						transactionalContentMD5: n.transactionalContentMD5,
						transactionalContentCrc64: n.transactionalContentCrc64,
						cpkInfo: n.customerProvidedKey,
						encryptionScope: n.encryptionScope
					}, RP(i)))
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async appendBlockFromURL(e, t, n, r = {}) {
				var s;
				const {
					span: i,
					updatedOptions: a
				} = PP("AppendBlobClient-appendBlockFromURL", r);
				r.conditions = r.conditions || {}, r.sourceConditions = r.sourceConditions || {};
				try {
					return jR(r.customerProvidedKey, this.isHttps), await this.appendBlobContext.appendBlockFromUrl(e, 0, Object.assign({
						abortSignal: r.abortSignal,
						sourceRange: ZR({
							offset: t,
							count: n
						}),
						sourceContentMD5: r.sourceContentMD5,
						sourceContentCrc64: r.sourceContentCrc64,
						leaseAccessConditions: r.conditions,
						appendPositionAccessConditions: r.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, r.conditions), {
							ifTags: null === (s = r.conditions) || void 0 === s ? void 0 : s.tagConditions
						}),
						sourceModifiedAccessConditions: {
							sourceIfMatch: r.sourceConditions.ifMatch,
							sourceIfModifiedSince: r.sourceConditions.ifModifiedSince,
							sourceIfNoneMatch: r.sourceConditions.ifNoneMatch,
							sourceIfUnmodifiedSince: r.sourceConditions.ifUnmodifiedSince
						},
						copySourceAuthorization: Yw(r.sourceAuthorization),
						cpkInfo: r.customerProvidedKey,
						encryptionScope: r.encryptionScope
					}, RP(a)))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
		}
		class iE extends rE {
			constructor(e, t, n, r) {
				let s, i;
				if (r = r || {}, IC(t)) i = e, s = t;
				else if (Nh && t instanceof qC || t instanceof gC || Sh(t)) i = e, s = MC(t, r = n);
				else if (t || "string" == typeof t) {
					if (!t || "string" != typeof t || !n || "string" != typeof n) throw new Error("Expecting non-empty strings for containerName and blobName parameters");
					{
						const a = t,
							o = n,
							l = Mw(e);
						if ("AccountConnString" === l.kind) {
							if (!Nh) throw new Error("Account connection string is only supported in Node.js environment");
							{
								const e = new qC(l.accountName, l.accountKey);
								i = qw(qw(l.url, encodeURIComponent(a)), encodeURIComponent(o)), r.proxyOptions || (r.proxyOptions = void l.proxyUri), s = MC(e, r)
							}
						} else {
							if ("SASConnString" !== l.kind) throw new Error("Connection string must be either an Account connection string or a SAS connection string");
							i = qw(qw(l.url, encodeURIComponent(a)), encodeURIComponent(o)) + "?" + l.accountSas, s = MC(new gC, r)
						}
					}
				} else i = e, s = MC(new gC, r);
				super(i, s), this.blockBlobContext = new fR(this.storageClientContext), this._blobContext = new qP(this.storageClientContext)
			}
			withSnapshot(e) {
				return new iE(_w(this.url, fw.SNAPSHOT, 0 === e.length ? void 0 : e), this.pipeline)
			}
			async query(e, t = {}) {
				var n;
				jR(t.customerProvidedKey, this.isHttps);
				const {
					span: r,
					updatedOptions: s
				} = PP("BlockBlobClient-query", t);
				try {
					if (!Nh) throw new Error("This operation currently is only supported in Node.js.");
					jR(t.customerProvidedKey, this.isHttps);
					const r = await this._blobContext.query(Object.assign({
						abortSignal: t.abortSignal,
						queryRequest: {
							queryType: "SQL",
							expression: e,
							inputSerialization: Qw(t.inputTextConfiguration),
							outputSerialization: Qw(t.outputTextConfiguration)
						},
						leaseAccessConditions: t.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						}),
						cpkInfo: t.customerProvidedKey
					}, RP(s)));
					return new cR(r, {
						abortSignal: t.abortSignal,
						onProgress: t.onProgress,
						onError: t.onError
					})
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async upload(e, t, n = {}) {
				var r, s, i;
				n.conditions = n.conditions || {};
				const {
					span: a,
					updatedOptions: o
				} = PP("BlockBlobClient-upload", n);
				try {
					return jR(n.customerProvidedKey, this.isHttps), await this.blockBlobContext.upload(t, e, Object.assign({
						abortSignal: n.abortSignal,
						blobHttpHeaders: n.blobHTTPHeaders,
						leaseAccessConditions: n.conditions,
						metadata: n.metadata,
						modifiedAccessConditions: Object.assign(Object.assign({}, n.conditions), {
							ifTags: null === (r = n.conditions) || void 0 === r ? void 0 : r.tagConditions
						}),
						requestOptions: {
							onUploadProgress: n.onProgress
						},
						cpkInfo: n.customerProvidedKey,
						encryptionScope: n.encryptionScope,
						immutabilityPolicyExpiry: null === (s = n.immutabilityPolicy) || void 0 === s ? void 0 : s.expiriesOn,
						immutabilityPolicyMode: null === (i = n.immutabilityPolicy) || void 0 === i ? void 0 : i.policyMode,
						legalHold: n.legalHold,
						tier: UR(n.tier),
						blobTagsString: Gw(n.tags)
					}, RP(o)))
				} catch (e) {
					throw a.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					a.end()
				}
			}
			async syncUploadFromURL(e, t = {}) {
				var n, r, s, i, a;
				t.conditions = t.conditions || {};
				const {
					span: o,
					updatedOptions: l
				} = PP("BlockBlobClient-syncUploadFromURL", t);
				try {
					return jR(t.customerProvidedKey, this.isHttps), await this.blockBlobContext.putBlobFromUrl(0, e, Object.assign(Object.assign(Object.assign({}, t), {
						blobHttpHeaders: t.blobHTTPHeaders,
						leaseAccessConditions: t.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: t.conditions.tagConditions
						}),
						sourceModifiedAccessConditions: {
							sourceIfMatch: null === (n = t.sourceConditions) || void 0 === n ? void 0 : n.ifMatch,
							sourceIfModifiedSince: null === (r = t.sourceConditions) || void 0 === r ? void 0 : r.ifModifiedSince,
							sourceIfNoneMatch: null === (s = t.sourceConditions) || void 0 === s ? void 0 : s.ifNoneMatch,
							sourceIfUnmodifiedSince: null === (i = t.sourceConditions) || void 0 === i ? void 0 : i.ifUnmodifiedSince,
							sourceIfTags: null === (a = t.sourceConditions) || void 0 === a ? void 0 : a.tagConditions
						},
						cpkInfo: t.customerProvidedKey,
						copySourceAuthorization: Yw(t.sourceAuthorization),
						tier: UR(t.tier),
						blobTagsString: Gw(t.tags),
						copySourceTags: t.copySourceTags
					}), RP(l)))
				} catch (e) {
					throw o.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					o.end()
				}
			}
			async stageBlock(e, t, n, r = {}) {
				const {
					span: s,
					updatedOptions: i
				} = PP("BlockBlobClient-stageBlock", r);
				try {
					return jR(r.customerProvidedKey, this.isHttps), await this.blockBlobContext.stageBlock(e, n, t, Object.assign({
						abortSignal: r.abortSignal,
						leaseAccessConditions: r.conditions,
						requestOptions: {
							onUploadProgress: r.onProgress
						},
						transactionalContentMD5: r.transactionalContentMD5,
						transactionalContentCrc64: r.transactionalContentCrc64,
						cpkInfo: r.customerProvidedKey,
						encryptionScope: r.encryptionScope
					}, RP(i)))
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async stageBlockFromURL(e, t, n = 0, r, s = {}) {
				const {
					span: i,
					updatedOptions: a
				} = PP("BlockBlobClient-stageBlockFromURL", s);
				try {
					return jR(s.customerProvidedKey, this.isHttps), await this.blockBlobContext.stageBlockFromURL(e, 0, t, Object.assign({
						abortSignal: s.abortSignal,
						leaseAccessConditions: s.conditions,
						sourceContentMD5: s.sourceContentMD5,
						sourceContentCrc64: s.sourceContentCrc64,
						sourceRange: 0 !== n || r ? ZR({
							offset: n,
							count: r
						}) : void 0,
						cpkInfo: s.customerProvidedKey,
						encryptionScope: s.encryptionScope,
						copySourceAuthorization: Yw(s.sourceAuthorization)
					}, RP(a)))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			async commitBlockList(e, t = {}) {
				var n, r, s;
				t.conditions = t.conditions || {};
				const {
					span: i,
					updatedOptions: a
				} = PP("BlockBlobClient-commitBlockList", t);
				try {
					return jR(t.customerProvidedKey, this.isHttps), await this.blockBlobContext.commitBlockList({
						latest: e
					}, Object.assign({
						abortSignal: t.abortSignal,
						blobHttpHeaders: t.blobHTTPHeaders,
						leaseAccessConditions: t.conditions,
						metadata: t.metadata,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						}),
						cpkInfo: t.customerProvidedKey,
						encryptionScope: t.encryptionScope,
						immutabilityPolicyExpiry: null === (r = t.immutabilityPolicy) || void 0 === r ? void 0 : r.expiriesOn,
						immutabilityPolicyMode: null === (s = t.immutabilityPolicy) || void 0 === s ? void 0 : s.policyMode,
						legalHold: t.legalHold,
						tier: UR(t.tier),
						blobTagsString: Gw(t.tags)
					}, RP(a)))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			async getBlockList(e, t = {}) {
				var n;
				const {
					span: r,
					updatedOptions: s
				} = PP("BlockBlobClient-getBlockList", t);
				try {
					const r = await this.blockBlobContext.getBlockList(e, Object.assign({
						abortSignal: t.abortSignal,
						leaseAccessConditions: t.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						})
					}, RP(s)));
					return r.committedBlocks || (r.committedBlocks = []), r.uncommittedBlocks || (r.uncommittedBlocks = []), r
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async uploadData(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlockBlobClient-uploadData", t);
				try {
					if (Nh) {
						let t;
						return t = e instanceof Buffer ? e : e instanceof ArrayBuffer ? Buffer.from(e) : Buffer.from(e.buffer, e.byteOffset, e.byteLength), this.uploadSeekableInternal(((e, n) => t.slice(e, e + n)), t.byteLength, r)
					} {
						const t = new Blob([e]);
						return this.uploadSeekableInternal(((e, n) => t.slice(e, e + n)), t.size, r)
					}
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async uploadBrowserData(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlockBlobClient-uploadBrowserData", t);
				try {
					const t = new Blob([e]);
					return await this.uploadSeekableInternal(((e, n) => t.slice(e, e + n)), t.size, r)
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async uploadSeekableInternal(e, t, n = {}) {
				if (n.blockSize || (n.blockSize = 0), n.blockSize < 0 || n.blockSize > pw) throw new RangeError("blockSize option must be >= 0 and <= 4194304000");
				if (0 === n.maxSingleShotSize || n.maxSingleShotSize || (n.maxSingleShotSize = uw), n.maxSingleShotSize < 0 || n.maxSingleShotSize > uw) throw new RangeError("maxSingleShotSize option must be >= 0 and <= 268435456");
				if (0 === n.blockSize) {
					if (t > 2097152e8) throw new RangeError(`${t} is too larger to upload to a block blob.`);
					t > n.maxSingleShotSize && (n.blockSize = Math.ceil(t / hw), n.blockSize < gw && (n.blockSize = gw))
				}
				n.blobHTTPHeaders || (n.blobHTTPHeaders = {}), n.conditions || (n.conditions = {});
				const {
					span: r,
					updatedOptions: s
				} = PP("BlockBlobClient-uploadSeekableInternal", n);
				try {
					if (t <= n.maxSingleShotSize) return await this.upload(e(0, t), t, s);
					const r = Math.floor((t - 1) / n.blockSize) + 1;
					if (r > hw) throw new RangeError("The buffer's size is too big or the BlockSize is too small;the number of blocks must be <= 50000");
					const i = [],
						a = Gg();
					let o = 0;
					const l = new tE(n.concurrency);
					for (let c = 0; c < r; c++) l.addOperation((async () => {
						const l = $w(a, c),
							d = n.blockSize * c,
							m = (c === r - 1 ? t : d + n.blockSize) - d;
						i.push(l), await this.stageBlock(l, e(d, m), m, {
							abortSignal: n.abortSignal,
							conditions: n.conditions,
							encryptionScope: n.encryptionScope,
							tracingOptions: s.tracingOptions
						}), o += m, n.onProgress && n.onProgress({
							loadedBytes: o
						})
					}));
					return await l.do(), this.commitBlockList(i, s)
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async uploadFile(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlockBlobClient-uploadFile", t);
				try {
					const e = (await void 0).size;
					return await this.uploadSeekableInternal(((e, t) => () => {}), e, Object.assign(Object.assign({}, t), {
						tracingOptions: Object.assign(Object.assign({}, t.tracingOptions), RP(r))
					}))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async uploadStream(e, t = 8388608, n = 5, r = {}) {
				r.blobHTTPHeaders || (r.blobHTTPHeaders = {}), r.conditions || (r.conditions = {});
				const {
					span: s,
					updatedOptions: i
				} = PP("BlockBlobClient-uploadStream", r);
				try {
					let s = 0;
					const a = Gg();
					let o = 0;
					const l = [],
						c = new nE(e, t, n, (async (e, t) => {
							const n = $w(a, s);
							l.push(n), s++, await this.stageBlock(n, e, t, {
								conditions: r.conditions,
								encryptionScope: r.encryptionScope,
								tracingOptions: i.tracingOptions
							}), o += t, r.onProgress && r.onProgress({
								loadedBytes: o
							})
						}), Math.ceil(n / 4 * 3));
					return await c.do(), await this.commitBlockList(l, Object.assign(Object.assign({}, r), {
						tracingOptions: Object.assign(Object.assign({}, r.tracingOptions), RP(i))
					}))
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
		}
		class aE extends rE {
			constructor(e, t, n, r) {
				let s, i;
				if (r = r || {}, IC(t)) i = e, s = t;
				else if (Nh && t instanceof qC || t instanceof gC || Sh(t)) i = e, s = MC(t, r = n);
				else if (t || "string" == typeof t) {
					if (!t || "string" != typeof t || !n || "string" != typeof n) throw new Error("Expecting non-empty strings for containerName and blobName parameters");
					{
						const a = t,
							o = n,
							l = Mw(e);
						if ("AccountConnString" === l.kind) {
							if (!Nh) throw new Error("Account connection string is only supported in Node.js environment");
							{
								const e = new qC(l.accountName, l.accountKey);
								i = qw(qw(l.url, encodeURIComponent(a)), encodeURIComponent(o)), r.proxyOptions || (r.proxyOptions = void l.proxyUri), s = MC(e, r)
							}
						} else {
							if ("SASConnString" !== l.kind) throw new Error("Connection string must be either an Account connection string or a SAS connection string");
							i = qw(qw(l.url, encodeURIComponent(a)), encodeURIComponent(o)) + "?" + l.accountSas, s = MC(new gC, r)
						}
					}
				} else i = e, s = MC(new gC, r);
				super(i, s), this.pageBlobContext = new RR(this.storageClientContext)
			}
			withSnapshot(e) {
				return new aE(_w(this.url, fw.SNAPSHOT, 0 === e.length ? void 0 : e), this.pipeline)
			}
			async create(e, t = {}) {
				var n, r, s;
				t.conditions = t.conditions || {};
				const {
					span: i,
					updatedOptions: a
				} = PP("PageBlobClient-create", t);
				try {
					return jR(t.customerProvidedKey, this.isHttps), await this.pageBlobContext.create(0, e, Object.assign({
						abortSignal: t.abortSignal,
						blobHttpHeaders: t.blobHTTPHeaders,
						blobSequenceNumber: t.blobSequenceNumber,
						leaseAccessConditions: t.conditions,
						metadata: t.metadata,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						}),
						cpkInfo: t.customerProvidedKey,
						encryptionScope: t.encryptionScope,
						immutabilityPolicyExpiry: null === (r = t.immutabilityPolicy) || void 0 === r ? void 0 : r.expiriesOn,
						immutabilityPolicyMode: null === (s = t.immutabilityPolicy) || void 0 === s ? void 0 : s.policyMode,
						legalHold: t.legalHold,
						tier: UR(t.tier),
						blobTagsString: Gw(t.tags)
					}, RP(a)))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			async createIfNotExists(e, t = {}) {
				var n, r;
				const {
					span: s,
					updatedOptions: i
				} = PP("PageBlobClient-createIfNotExists", t);
				try {
					const n = {
							ifNoneMatch: "*"
						},
						r = await this.create(e, Object.assign(Object.assign({}, t), {
							conditions: n,
							tracingOptions: i.tracingOptions
						}));
					return Object.assign(Object.assign({
						succeeded: !0
					}, r), {
						_response: r._response
					})
				} catch (e) {
					if ("BlobAlreadyExists" === (null === (n = e.details) || void 0 === n ? void 0 : n.errorCode)) return s.setStatus({
						code: kg.ERROR,
						message: "Expected exception when creating a blob only if it does not already exist."
					}), Object.assign(Object.assign({
						succeeded: !1
					}, null === (r = e.response) || void 0 === r ? void 0 : r.parsedHeaders), {
						_response: e.response
					});
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async uploadPages(e, t, n, r = {}) {
				var s;
				r.conditions = r.conditions || {};
				const {
					span: i,
					updatedOptions: a
				} = PP("PageBlobClient-uploadPages", r);
				try {
					return jR(r.customerProvidedKey, this.isHttps), await this.pageBlobContext.uploadPages(n, e, Object.assign({
						abortSignal: r.abortSignal,
						leaseAccessConditions: r.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, r.conditions), {
							ifTags: null === (s = r.conditions) || void 0 === s ? void 0 : s.tagConditions
						}),
						requestOptions: {
							onUploadProgress: r.onProgress
						},
						range: ZR({
							offset: t,
							count: n
						}),
						sequenceNumberAccessConditions: r.conditions,
						transactionalContentMD5: r.transactionalContentMD5,
						transactionalContentCrc64: r.transactionalContentCrc64,
						cpkInfo: r.customerProvidedKey,
						encryptionScope: r.encryptionScope
					}, RP(a)))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			async uploadPagesFromURL(e, t, n, r, s = {}) {
				var i;
				s.conditions = s.conditions || {}, s.sourceConditions = s.sourceConditions || {};
				const {
					span: a,
					updatedOptions: o
				} = PP("PageBlobClient-uploadPagesFromURL", s);
				try {
					return jR(s.customerProvidedKey, this.isHttps), await this.pageBlobContext.uploadPagesFromURL(e, ZR({
						offset: t,
						count: r
					}), 0, ZR({
						offset: n,
						count: r
					}), Object.assign({
						abortSignal: s.abortSignal,
						sourceContentMD5: s.sourceContentMD5,
						sourceContentCrc64: s.sourceContentCrc64,
						leaseAccessConditions: s.conditions,
						sequenceNumberAccessConditions: s.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, s.conditions), {
							ifTags: null === (i = s.conditions) || void 0 === i ? void 0 : i.tagConditions
						}),
						sourceModifiedAccessConditions: {
							sourceIfMatch: s.sourceConditions.ifMatch,
							sourceIfModifiedSince: s.sourceConditions.ifModifiedSince,
							sourceIfNoneMatch: s.sourceConditions.ifNoneMatch,
							sourceIfUnmodifiedSince: s.sourceConditions.ifUnmodifiedSince
						},
						cpkInfo: s.customerProvidedKey,
						encryptionScope: s.encryptionScope,
						copySourceAuthorization: Yw(s.sourceAuthorization)
					}, RP(o)))
				} catch (e) {
					throw a.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					a.end()
				}
			}
			async clearPages(e = 0, t, n = {}) {
				var r;
				n.conditions = n.conditions || {};
				const {
					span: s,
					updatedOptions: i
				} = PP("PageBlobClient-clearPages", n);
				try {
					return await this.pageBlobContext.clearPages(0, Object.assign({
						abortSignal: n.abortSignal,
						leaseAccessConditions: n.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, n.conditions), {
							ifTags: null === (r = n.conditions) || void 0 === r ? void 0 : r.tagConditions
						}),
						range: ZR({
							offset: e,
							count: t
						}),
						sequenceNumberAccessConditions: n.conditions,
						cpkInfo: n.customerProvidedKey,
						encryptionScope: n.encryptionScope
					}, RP(i)))
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async getPageRanges(e = 0, t, n = {}) {
				var r;
				n.conditions = n.conditions || {};
				const {
					span: s,
					updatedOptions: i
				} = PP("PageBlobClient-getPageRanges", n);
				try {
					return await this.pageBlobContext.getPageRanges(Object.assign({
						abortSignal: n.abortSignal,
						leaseAccessConditions: n.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, n.conditions), {
							ifTags: null === (r = n.conditions) || void 0 === r ? void 0 : r.tagConditions
						}),
						range: ZR({
							offset: e,
							count: t
						})
					}, RP(i))).then($R)
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async listPageRangesSegment(e = 0, t, n, r = {}) {
				var s;
				const {
					span: i,
					updatedOptions: a
				} = PP("PageBlobClient-getPageRangesSegment", r);
				try {
					return await this.pageBlobContext.getPageRanges(Object.assign({
						abortSignal: r.abortSignal,
						leaseAccessConditions: r.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, r.conditions), {
							ifTags: null === (s = r.conditions) || void 0 === s ? void 0 : s.tagConditions
						}),
						range: ZR({
							offset: e,
							count: t
						}),
						marker: n,
						maxPageSize: r.maxPageSize
					}, RP(a)))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			listPageRangeItemSegments(e = 0, t, n, r = {}) {
				return L(this, arguments, (function*() {
					let s;
					if (n || void 0 === n)
						do {
							s = yield D(this.listPageRangesSegment(e, t, n, r)), n = s.continuationToken, yield yield D(yield D(s))
						} while (n)
				}))
			}
			listPageRangeItems(e = 0, t, n = {}) {
				return L(this, arguments, (function*() {
					var r, s;
					try {
						for (var i, a = U(this.listPageRangeItemSegments(e, t, undefined, n)); !(i = yield D(a.next())).done;) {
							const e = i.value;
							yield D(yield* H(U(nC(e))))
						}
					} catch (e) {
						r = {
							error: e
						}
					} finally {
						try {
							i && !i.done && (s = a.return) && (yield D(s.call(a)))
						} finally {
							if (r) throw r.error
						}
					}
				}))
			}
			listPageRanges(e = 0, t, n = {}) {
				n.conditions = n.conditions || {};
				const r = this.listPageRangeItems(e, t, n);
				return {
					next: () => r.next(),
					[Symbol.asyncIterator]() {
						return this
					},
					byPage: (r = {}) => this.listPageRangeItemSegments(e, t, r.continuationToken, Object.assign({
						maxPageSize: r.maxPageSize
					}, n))
				}
			}
			async getPageRangesDiff(e, t, n, r = {}) {
				var s;
				r.conditions = r.conditions || {};
				const {
					span: i,
					updatedOptions: a
				} = PP("PageBlobClient-getPageRangesDiff", r);
				try {
					return await this.pageBlobContext.getPageRangesDiff(Object.assign({
						abortSignal: r.abortSignal,
						leaseAccessConditions: r.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, r.conditions), {
							ifTags: null === (s = r.conditions) || void 0 === s ? void 0 : s.tagConditions
						}),
						prevsnapshot: n,
						range: ZR({
							offset: e,
							count: t
						})
					}, RP(a))).then($R)
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			async listPageRangesDiffSegment(e, t, n, r, s) {
				var i;
				const {
					span: a,
					updatedOptions: o
				} = PP("PageBlobClient-getPageRangesDiffSegment", s);
				try {
					return await this.pageBlobContext.getPageRangesDiff(Object.assign({
						abortSignal: null == s ? void 0 : s.abortSignal,
						leaseAccessConditions: null == s ? void 0 : s.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, null == s ? void 0 : s.conditions), {
							ifTags: null === (i = null == s ? void 0 : s.conditions) || void 0 === i ? void 0 : i.tagConditions
						}),
						prevsnapshot: n,
						range: ZR({
							offset: e,
							count: t
						}),
						marker: r,
						maxPageSize: null == s ? void 0 : s.maxPageSize
					}, RP(o)))
				} catch (e) {
					throw a.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					a.end()
				}
			}
			listPageRangeDiffItemSegments(e, t, n, r, s) {
				return L(this, arguments, (function*() {
					let i;
					if (r || void 0 === r)
						do {
							i = yield D(this.listPageRangesDiffSegment(e, t, n, r, s)), r = i.continuationToken, yield yield D(yield D(i))
						} while (r)
				}))
			}
			listPageRangeDiffItems(e, t, n, r) {
				return L(this, arguments, (function*() {
					var s, i;
					try {
						for (var a, o = U(this.listPageRangeDiffItemSegments(e, t, n, undefined, r)); !(a = yield D(o.next())).done;) {
							const e = a.value;
							yield D(yield* H(U(nC(e))))
						}
					} catch (e) {
						s = {
							error: e
						}
					} finally {
						try {
							a && !a.done && (i = o.return) && (yield D(i.call(o)))
						} finally {
							if (s) throw s.error
						}
					}
				}))
			}
			listPageRangesDiff(e, t, n, r = {}) {
				r.conditions = r.conditions || {};
				const s = this.listPageRangeDiffItems(e, t, n, Object.assign({}, r));
				return {
					next: () => s.next(),
					[Symbol.asyncIterator]() {
						return this
					},
					byPage: (s = {}) => this.listPageRangeDiffItemSegments(e, t, n, s.continuationToken, Object.assign({
						maxPageSize: s.maxPageSize
					}, r))
				}
			}
			async getPageRangesDiffForManagedDisks(e, t, n, r = {}) {
				var s;
				r.conditions = r.conditions || {};
				const {
					span: i,
					updatedOptions: a
				} = PP("PageBlobClient-GetPageRangesDiffForManagedDisks", r);
				try {
					return await this.pageBlobContext.getPageRangesDiff(Object.assign({
						abortSignal: r.abortSignal,
						leaseAccessConditions: r.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, r.conditions), {
							ifTags: null === (s = r.conditions) || void 0 === s ? void 0 : s.tagConditions
						}),
						prevSnapshotUrl: n,
						range: ZR({
							offset: e,
							count: t
						})
					}, RP(a))).then($R)
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			async resize(e, t = {}) {
				var n;
				t.conditions = t.conditions || {};
				const {
					span: r,
					updatedOptions: s
				} = PP("PageBlobClient-resize", t);
				try {
					return await this.pageBlobContext.resize(e, Object.assign({
						abortSignal: t.abortSignal,
						leaseAccessConditions: t.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						}),
						encryptionScope: t.encryptionScope
					}, RP(s)))
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async updateSequenceNumber(e, t, n = {}) {
				var r;
				n.conditions = n.conditions || {};
				const {
					span: s,
					updatedOptions: i
				} = PP("PageBlobClient-updateSequenceNumber", n);
				try {
					return await this.pageBlobContext.updateSequenceNumber(e, Object.assign({
						abortSignal: n.abortSignal,
						blobSequenceNumber: t,
						leaseAccessConditions: n.conditions,
						modifiedAccessConditions: Object.assign(Object.assign({}, n.conditions), {
							ifTags: null === (r = n.conditions) || void 0 === r ? void 0 : r.tagConditions
						})
					}, RP(i)))
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async startCopyIncremental(e, t = {}) {
				var n;
				const {
					span: r,
					updatedOptions: s
				} = PP("PageBlobClient-startCopyIncremental", t);
				try {
					return await this.pageBlobContext.copyIncremental(e, Object.assign({
						abortSignal: t.abortSignal,
						modifiedAccessConditions: Object.assign(Object.assign({}, t.conditions), {
							ifTags: null === (n = t.conditions) || void 0 === n ? void 0 : n.tagConditions
						})
					}, RP(s)))
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
		}
		async function oE(e) {
			return async function(e) {
				const t = new FileReader;
				return new Promise(((n, r) => {
					t.onloadend = e => {
						n(e.target.result)
					}, t.onerror = r, t.readAsText(e)
				}))
			}(await e.blobBody)
		}
		const lE = ": ";
		class cE {
			constructor(e, t) {
				if (!e || !e.contentType) throw new RangeError("batchResponse is malformed or doesn't contain valid content-type.");
				if (!t || 0 === t.size) throw new RangeError("Invalid state: subRequests is not provided or size is 0.");
				this.batchResponse = e, this.subRequests = t, this.responseBatchBoundary = this.batchResponse.contentType.split("=")[1], this.perResponsePrefix = `--${this.responseBatchBoundary}${zw}`, this.batchResponseEnding = `--${this.responseBatchBoundary}--`
			}
			async parseBatchResponse() {
				if (this.batchResponse._response.status !== bw) throw new Error(`Invalid state: batch request failed with status: '${this.batchResponse._response.status}'.`);
				const e = (await oE(this.batchResponse)).split(this.batchResponseEnding)[0].split(this.perResponsePrefix).slice(1),
					t = e.length;
				if (t !== this.subRequests.size && 1 !== t) throw new Error("Invalid state: sub responses' count is not equal to sub requests' count.");
				const n = new Array(t);
				let r = 0,
					s = 0;
				for (let i = 0; i < t; i++) {
					const t = e[i],
						a = {};
					a.headers = new xC;
					const o = t.split(`${zw}`);
					let l = !1,
						c = !1,
						d = !1,
						m = -1;
					for (const e of o)
						if (l)
							if ("" !== e.trim())
								if (c) a.bodyAsText || (a.bodyAsText = ""), a.bodyAsText += e;
								else {
									if (-1 === e.indexOf(lE)) throw new Error(`Invalid state: find non-empty line '${e}' without HTTP header delimiter '${lE}'.`);
									const t = e.split(lE);
									a.headers.set(t[0], t[1]), t[0] === Pw && (a.errorCode = t[1], d = !0)
								}
					else c || (c = !0);
					else if (e.startsWith(xw) && (m = parseInt(e.split(lE)[1])), e.startsWith(Ow)) {
						l = !0;
						const t = e.split(" ");
						a.status = parseInt(t[1]), a.statusMessage = t.slice(2).join(" ")
					} - 1 !== m && Number.isInteger(m) && m >= 0 && m < this.subRequests.size && void 0 === n[m] ? (a._request = this.subRequests.get(m), n[m] = a) : dw.error(`subResponses[${i}] is dropped as the Content-ID is not found or invalid, Content-ID: ${m}`), d ? s++ : r++
				}
				return {
					subResponses: n,
					subResponsesSucceededCount: r,
					subResponsesFailedCount: s
				}
			}
		}
		var dE;
		! function(e) {
			e[e.LOCKED = 0] = "LOCKED", e[e.UNLOCKED = 1] = "UNLOCKED"
		}(dE || (dE = {}));
		class mE {
			static async lock(e) {
				return new Promise((t => {
					void 0 === this.keys[e] || this.keys[e] === dE.UNLOCKED ? (this.keys[e] = dE.LOCKED, t()) : this.onUnlockEvent(e, (() => {
						this.keys[e] = dE.LOCKED, t()
					}))
				}))
			}
			static async unlock(e) {
				return new Promise((t => {
					this.keys[e] === dE.LOCKED && this.emitUnlockEvent(e), delete this.keys[e], t()
				}))
			}
			static onUnlockEvent(e, t) {
				void 0 === this.listeners[e] ? this.listeners[e] = [t] : this.listeners[e].push(t)
			}
			static emitUnlockEvent(e) {
				if (void 0 !== this.listeners[e] && this.listeners[e].length > 0) {
					const t = this.listeners[e].shift();
					setImmediate((() => {
						t.call(this)
					}))
				}
			}
		}
		mE.keys = {}, mE.listeners = {};
		class uE {
			constructor() {
				this.batch = "batch", this.batchRequest = new pE
			}
			getMultiPartContentType() {
				return this.batchRequest.getMultipartContentType()
			}
			getHttpRequestBody() {
				return this.batchRequest.getHttpRequestBody()
			}
			getSubRequests() {
				return this.batchRequest.getSubRequests()
			}
			async addSubRequestInternal(e, t) {
				await mE.lock(this.batch);
				try {
					this.batchRequest.preAddSubRequest(e), await t(), this.batchRequest.postAddSubRequest(e)
				} finally {
					await mE.unlock(this.batch)
				}
			}
			setBatchType(e) {
				if (this.batchType || (this.batchType = e), this.batchType !== e) throw new RangeError(`BlobBatch only supports one operation type per batch and it already is being used for ${this.batchType} operations.`)
			}
			async deleteBlob(e, t, n) {
				let r, s;
				if ("string" == typeof e && (Nh && t instanceof qC || t instanceof gC || Sh(t))) r = e, s = t;
				else {
					if (!(e instanceof rE)) throw new RangeError("Invalid arguments. Either url and credential, or BlobClient need be provided.");
					r = e.url, s = e.credential, n = t
				}
				n || (n = {});
				const {
					span: i,
					updatedOptions: a
				} = PP("BatchDeleteRequest-addSubRequest", n);
				try {
					this.setBatchType("delete"), await this.addSubRequestInternal({
						url: r,
						credential: s
					}, (async () => {
						await new rE(r, this.batchRequest.createPipeline(s)).delete(a)
					}))
				} catch (e) {
					throw i.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					i.end()
				}
			}
			async setBlobAccessTier(e, t, n, r) {
				let s, i, a;
				if ("string" == typeof e && (Nh && t instanceof qC || t instanceof gC || Sh(t))) s = e, i = t, a = n;
				else {
					if (!(e instanceof rE)) throw new RangeError("Invalid arguments. Either url and credential, or BlobClient need be provided.");
					s = e.url, i = e.credential, a = t, r = n
				}
				r || (r = {});
				const {
					span: o,
					updatedOptions: l
				} = PP("BatchSetTierRequest-addSubRequest", r);
				try {
					this.setBatchType("setAccessTier"), await this.addSubRequestInternal({
						url: s,
						credential: i
					}, (async () => {
						await new rE(s, this.batchRequest.createPipeline(i)).setAccessTier(a, l)
					}))
				} catch (e) {
					throw o.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					o.end()
				}
			}
		}
		class pE {
			constructor() {
				this.operationCount = 0, this.body = "";
				const e = Gg();
				this.boundary = `batch_${e}`, this.subRequestPrefix = `--${this.boundary}${zw}${vw}: application/http${zw}${Sw}: binary`, this.multipartContentType = `multipart/mixed; boundary=${this.boundary}`, this.batchRequestEnding = `--${this.boundary}--`, this.subRequests = new Map
			}
			createPipeline(e) {
				const t = e instanceof gC,
					n = 3 + (t ? 0 : 1),
					r = new Array(n);
				return r[0] = rw(), r[1] = new fE, t || (r[2] = Sh(e) ? Zw(aP(e, yw), e) : e), r[n - 1] = new gE(this), new BC(r, {})
			}
			appendSubRequestToBody(e) {
				this.body += [this.subRequestPrefix, `${xw}: ${this.operationCount}`, "", `${e.method.toString()} ${Hw(e.url)} ${Ow}${zw}`].join(zw);
				for (const t of e.headers.headersArray()) this.body += `${t.name}: ${t.value}${zw}`;
				this.body += zw
			}
			preAddSubRequest(e) {
				if (this.operationCount >= 256) throw new RangeError("Cannot exceed 256 sub requests in a single batch");
				const t = Lw(e.url);
				if (!t || "" === t) throw new RangeError(`Invalid url for sub request: '${e.url}'`)
			}
			postAddSubRequest(e) {
				this.subRequests.set(this.operationCount, e), this.operationCount++
			}
			getHttpRequestBody() {
				return `${this.body}${this.batchRequestEnding}${zw}`
			}
			getMultipartContentType() {
				return this.multipartContentType
			}
			getSubRequests() {
				return this.subRequests
			}
		}
		class hE extends wh {
			constructor(e, t, n) {
				super(t, n), this.dummyResponse = {
					request: new YC,
					status: 200,
					headers: new xC
				}, this.batchRequest = e
			}
			async sendRequest(e) {
				return await this.batchRequest.appendSubRequestToBody(e), this.dummyResponse
			}
		}
		class gE {
			constructor(e) {
				this.batchRequest = e
			}
			create(e, t) {
				return new hE(this.batchRequest, e, t)
			}
		}
		class yE extends wh {
			constructor(e, t) {
				super(e, t)
			}
			async sendRequest(e) {
				let t = "";
				for (const n of e.headers.headersArray()) Fw(n.name, Rw) && (t = n.name);
				return "" !== t && e.headers.remove(t), this._nextPolicy.sendRequest(e)
			}
		}
		class fE {
			create(e, t) {
				return new yE(e, t)
			}
		}
		class bE {
			constructor(e, t, n) {
				let r;
				r = IC(t) ? t : MC(t || new gC, n);
				const s = new wP(e, r.toServiceClientOptions()),
					i = Lw(e);
				this.serviceOrContainerContext = i && "/" !== i ? new TS(s) : new NS(s)
			}
			createBatch() {
				return new uE
			}
			async deleteBlobs(e, t, n) {
				const r = new uE;
				for (const s of e) "string" == typeof s ? await r.deleteBlob(s, t, n) : await r.deleteBlob(s, t);
				return this.submitBatch(r)
			}
			async setBlobsAccessTier(e, t, n, r) {
				const s = new uE;
				for (const i of e) "string" == typeof i ? await s.setBlobAccessTier(i, t, n, r) : await s.setBlobAccessTier(i, t, n);
				return this.submitBatch(s)
			}
			async submitBatch(e, t = {}) {
				if (!e || 0 === e.getSubRequests().size) throw new RangeError("Batch request should contain one or more sub requests.");
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobBatchClient-submitBatch", t);
				try {
					const n = e.getHttpRequestBody(),
						i = await this.serviceOrContainerContext.submitBatch((s = n, new Blob([s]).size), e.getMultiPartContentType(), n, Object.assign(Object.assign({}, t), RP(r))),
						a = new cE(i, e.getSubRequests()),
						o = await a.parseBatchResponse();
					return {
						_response: i._response,
						contentType: i.contentType,
						errorCode: i.errorCode,
						requestId: i.requestId,
						clientRequestId: i.clientRequestId,
						version: i.version,
						subResponses: o.subResponses,
						subResponsesSucceededCount: o.subResponsesSucceededCount,
						subResponsesFailedCount: o.subResponsesFailedCount
					}
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
				var s
			}
		}
		class xE extends CP {
			constructor(e, t, n) {
				let r, s;
				if (n = n || {}, IC(t)) s = e, r = t;
				else if (Nh && t instanceof qC || t instanceof gC || Sh(t)) s = e, r = MC(t, n);
				else if (t || "string" == typeof t) {
					if (!t || "string" != typeof t) throw new Error("Expecting non-empty strings for containerName parameter");
					{
						const i = t,
							a = Mw(e);
						if ("AccountConnString" === a.kind) {
							if (!Nh) throw new Error("Account connection string is only supported in Node.js environment");
							{
								const e = new qC(a.accountName, a.accountKey);
								s = qw(a.url, encodeURIComponent(i)), n.proxyOptions || (n.proxyOptions = void a.proxyUri), r = MC(e, n)
							}
						} else {
							if ("SASConnString" !== a.kind) throw new Error("Connection string must be either an Account connection string or a SAS connection string");
							s = qw(a.url, encodeURIComponent(i)) + "?" + a.accountSas, r = MC(new gC, n)
						}
					}
				} else s = e, r = MC(new gC, n);
				super(s, r), this._containerName = this.getContainerNameFromUrl(), this.containerContext = new TS(this.storageClientContext)
			}
			get containerName() {
				return this._containerName
			}
			async create(e = {}) {
				const {
					span: t,
					updatedOptions: n
				} = PP("ContainerClient-create", e);
				try {
					return await this.containerContext.create(Object.assign(Object.assign({}, e), RP(n)))
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async createIfNotExists(e = {}) {
				var t, n;
				const {
					span: r,
					updatedOptions: s
				} = PP("ContainerClient-createIfNotExists", e);
				try {
					const e = await this.create(s);
					return Object.assign(Object.assign({
						succeeded: !0
					}, e), {
						_response: e._response
					})
				} catch (e) {
					if ("ContainerAlreadyExists" === (null === (t = e.details) || void 0 === t ? void 0 : t.errorCode)) return r.setStatus({
						code: kg.ERROR,
						message: "Expected exception when creating a container only if it does not already exist."
					}), Object.assign(Object.assign({
						succeeded: !1
					}, null === (n = e.response) || void 0 === n ? void 0 : n.parsedHeaders), {
						_response: e.response
					});
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async exists(e = {}) {
				const {
					span: t,
					updatedOptions: n
				} = PP("ContainerClient-exists", e);
				try {
					return await this.getProperties({
						abortSignal: e.abortSignal,
						tracingOptions: n.tracingOptions
					}), !0
				} catch (e) {
					if (404 === e.statusCode) return t.setStatus({
						code: kg.ERROR,
						message: "Expected exception when checking container existence"
					}), !1;
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			getBlobClient(e) {
				return new rE(qw(this.url, rC(e)), this.pipeline)
			}
			getAppendBlobClient(e) {
				return new sE(qw(this.url, rC(e)), this.pipeline)
			}
			getBlockBlobClient(e) {
				return new iE(qw(this.url, rC(e)), this.pipeline)
			}
			getPageBlobClient(e) {
				return new aE(qw(this.url, rC(e)), this.pipeline)
			}
			async getProperties(e = {}) {
				e.conditions || (e.conditions = {});
				const {
					span: t,
					updatedOptions: n
				} = PP("ContainerClient-getProperties", e);
				try {
					return await this.containerContext.getProperties(Object.assign(Object.assign({
						abortSignal: e.abortSignal
					}, e.conditions), RP(n)))
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async delete(e = {}) {
				e.conditions || (e.conditions = {});
				const {
					span: t,
					updatedOptions: n
				} = PP("ContainerClient-delete", e);
				try {
					return await this.containerContext.delete(Object.assign({
						abortSignal: e.abortSignal,
						leaseAccessConditions: e.conditions,
						modifiedAccessConditions: e.conditions
					}, RP(n)))
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async deleteIfExists(e = {}) {
				var t, n;
				const {
					span: r,
					updatedOptions: s
				} = PP("ContainerClient-deleteIfExists", e);
				try {
					const e = await this.delete(s);
					return Object.assign(Object.assign({
						succeeded: !0
					}, e), {
						_response: e._response
					})
				} catch (e) {
					if ("ContainerNotFound" === (null === (t = e.details) || void 0 === t ? void 0 : t.errorCode)) return r.setStatus({
						code: kg.ERROR,
						message: "Expected exception when deleting a container only if it exists."
					}), Object.assign(Object.assign({
						succeeded: !1
					}, null === (n = e.response) || void 0 === n ? void 0 : n.parsedHeaders), {
						_response: e.response
					});
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async setMetadata(e, t = {}) {
				if (t.conditions || (t.conditions = {}), t.conditions.ifUnmodifiedSince) throw new RangeError("the IfUnmodifiedSince must have their default values because they are ignored by the blob service");
				const {
					span: n,
					updatedOptions: r
				} = PP("ContainerClient-setMetadata", t);
				try {
					return await this.containerContext.setMetadata(Object.assign({
						abortSignal: t.abortSignal,
						leaseAccessConditions: t.conditions,
						metadata: e,
						modifiedAccessConditions: t.conditions
					}, RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async getAccessPolicy(e = {}) {
				e.conditions || (e.conditions = {});
				const {
					span: t,
					updatedOptions: n
				} = PP("ContainerClient-getAccessPolicy", e);
				try {
					const t = await this.containerContext.getAccessPolicy(Object.assign({
							abortSignal: e.abortSignal,
							leaseAccessConditions: e.conditions
						}, RP(n))),
						r = {
							_response: t._response,
							blobPublicAccess: t.blobPublicAccess,
							date: t.date,
							etag: t.etag,
							errorCode: t.errorCode,
							lastModified: t.lastModified,
							requestId: t.requestId,
							clientRequestId: t.clientRequestId,
							signedIdentifiers: [],
							version: t.version
						};
					for (const e of t) {
						let t;
						e.accessPolicy && (t = {
							permissions: e.accessPolicy.permissions
						}, e.accessPolicy.expiresOn && (t.expiresOn = new Date(e.accessPolicy.expiresOn)), e.accessPolicy.startsOn && (t.startsOn = new Date(e.accessPolicy.startsOn))), r.signedIdentifiers.push({
							accessPolicy: t,
							id: e.id
						})
					}
					return r
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async setAccessPolicy(e, t, n = {}) {
				n.conditions = n.conditions || {};
				const {
					span: r,
					updatedOptions: s
				} = PP("ContainerClient-setAccessPolicy", n);
				try {
					const r = [];
					for (const e of t || []) r.push({
						accessPolicy: {
							expiresOn: e.accessPolicy.expiresOn ? jw(e.accessPolicy.expiresOn) : "",
							permissions: e.accessPolicy.permissions,
							startsOn: e.accessPolicy.startsOn ? jw(e.accessPolicy.startsOn) : ""
						},
						id: e.id
					});
					return await this.containerContext.setAccessPolicy(Object.assign({
						abortSignal: n.abortSignal,
						access: e,
						containerAcl: r,
						leaseAccessConditions: n.conditions,
						modifiedAccessConditions: n.conditions
					}, RP(s)))
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			getBlobLeaseClient(e) {
				return new lR(this, e)
			}
			async uploadBlockBlob(e, t, n, r = {}) {
				const {
					span: s,
					updatedOptions: i
				} = PP("ContainerClient-uploadBlockBlob", r);
				try {
					const r = this.getBlockBlobClient(e),
						s = await r.upload(t, n, i);
					return {
						blockBlobClient: r,
						response: s
					}
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async deleteBlob(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("ContainerClient-deleteBlob", t);
				try {
					let n = this.getBlobClient(e);
					return t.versionId && (n = n.withVersion(t.versionId)), await n.delete(r)
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async listBlobFlatSegment(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("ContainerClient-listBlobFlatSegment", t);
				try {
					const n = await this.containerContext.listBlobFlatSegment(Object.assign(Object.assign({
						marker: e
					}, t), RP(r)));
					return Object.assign(Object.assign({}, n), {
						_response: Object.assign(Object.assign({}, n._response), {
							parsedBody: (s = n._response.parsedBody, Object.assign(Object.assign({}, s), {
								segment: {
									blobItems: s.segment.blobItems.map((e => Object.assign(Object.assign({}, e), {
										name: eC(e.name)
									})))
								}
							}))
						}),
						segment: Object.assign(Object.assign({}, n.segment), {
							blobItems: n.segment.blobItems.map((e => Object.assign(Object.assign({}, e), {
								name: eC(e.name),
								tags: Xw(e.blobTags),
								objectReplicationSourceProperties: Jw(e.objectReplicationMetadata)
							})))
						})
					})
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
				var s
			}
			async listBlobHierarchySegment(e, t, n = {}) {
				var r;
				const {
					span: s,
					updatedOptions: i
				} = PP("ContainerClient-listBlobHierarchySegment", n);
				try {
					const s = await this.containerContext.listBlobHierarchySegment(e, Object.assign(Object.assign({
						marker: t
					}, n), RP(i)));
					return Object.assign(Object.assign({}, s), {
						_response: Object.assign(Object.assign({}, s._response), {
							parsedBody: tC(s._response.parsedBody)
						}),
						segment: Object.assign(Object.assign({}, s.segment), {
							blobItems: s.segment.blobItems.map((e => Object.assign(Object.assign({}, e), {
								name: eC(e.name),
								tags: Xw(e.blobTags),
								objectReplicationSourceProperties: Jw(e.objectReplicationMetadata)
							}))),
							blobPrefixes: null === (r = s.segment.blobPrefixes) || void 0 === r ? void 0 : r.map((e => ({
								name: eC(e.name)
							})))
						})
					})
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			listSegments(e, t = {}) {
				return L(this, arguments, (function*() {
					let n;
					if (e || void 0 === e)
						do {
							n = yield D(this.listBlobFlatSegment(e, t)), e = n.continuationToken, yield yield D(yield D(n))
						} while (e)
				}))
			}
			listItems(e = {}) {
				return L(this, arguments, (function*() {
					var t, n;
					try {
						for (var r, s = U(this.listSegments(undefined, e)); !(r = yield D(s.next())).done;) {
							const e = r.value;
							yield D(yield* H(U(e.segment.blobItems)))
						}
					} catch (e) {
						t = {
							error: e
						}
					} finally {
						try {
							r && !r.done && (n = s.return) && (yield D(n.call(s)))
						} finally {
							if (t) throw t.error
						}
					}
				}))
			}
			listBlobsFlat(e = {}) {
				const t = [];
				e.includeCopy && t.push("copy"), e.includeDeleted && t.push("deleted"), e.includeMetadata && t.push("metadata"), e.includeSnapshots && t.push("snapshots"), e.includeVersions && t.push("versions"), e.includeUncommitedBlobs && t.push("uncommittedblobs"), e.includeTags && t.push("tags"), e.includeDeletedWithVersions && t.push("deletedwithversions"), e.includeImmutabilityPolicy && t.push("immutabilitypolicy"), e.includeLegalHold && t.push("legalhold"), "" === e.prefix && (e.prefix = void 0);
				const n = Object.assign(Object.assign({}, e), t.length > 0 ? {
						include: t
					} : {}),
					r = this.listItems(n);
				return {
					next: () => r.next(),
					[Symbol.asyncIterator]() {
						return this
					},
					byPage: (e = {}) => this.listSegments(e.continuationToken, Object.assign({
						maxPageSize: e.maxPageSize
					}, n))
				}
			}
			listHierarchySegments(e, t, n = {}) {
				return L(this, arguments, (function*() {
					let r;
					if (t || void 0 === t)
						do {
							r = yield D(this.listBlobHierarchySegment(e, t, n)), t = r.continuationToken, yield yield D(yield D(r))
						} while (t)
				}))
			}
			listItemsByHierarchy(e, t = {}) {
				return L(this, arguments, (function*() {
					var n, r;
					try {
						for (var s, i = U(this.listHierarchySegments(e, undefined, t)); !(s = yield D(i.next())).done;) {
							const e = s.value.segment;
							if (e.blobPrefixes)
								for (const t of e.blobPrefixes) yield yield D(Object.assign({
									kind: "prefix"
								}, t));
							for (const t of e.blobItems) yield yield D(Object.assign({
								kind: "blob"
							}, t))
						}
					} catch (e) {
						n = {
							error: e
						}
					} finally {
						try {
							s && !s.done && (r = i.return) && (yield D(r.call(i)))
						} finally {
							if (n) throw n.error
						}
					}
				}))
			}
			listBlobsByHierarchy(e, t = {}) {
				if ("" === e) throw new RangeError("delimiter should contain one or more characters");
				const n = [];
				t.includeCopy && n.push("copy"), t.includeDeleted && n.push("deleted"), t.includeMetadata && n.push("metadata"), t.includeSnapshots && n.push("snapshots"), t.includeVersions && n.push("versions"), t.includeUncommitedBlobs && n.push("uncommittedblobs"), t.includeTags && n.push("tags"), t.includeDeletedWithVersions && n.push("deletedwithversions"), t.includeImmutabilityPolicy && n.push("immutabilitypolicy"), t.includeLegalHold && n.push("legalhold"), "" === t.prefix && (t.prefix = void 0);
				const r = Object.assign(Object.assign({}, t), n.length > 0 ? {
						include: n
					} : {}),
					s = this.listItemsByHierarchy(e, r);
				return {
					next: async () => s.next(),
					[Symbol.asyncIterator]() {
						return this
					},
					byPage: (t = {}) => this.listHierarchySegments(e, t.continuationToken, Object.assign({
						maxPageSize: t.maxPageSize
					}, r))
				}
			}
			async findBlobsByTagsSegment(e, t, n = {}) {
				const {
					span: r,
					updatedOptions: s
				} = PP("ContainerClient-findBlobsByTagsSegment", n);
				try {
					const r = await this.containerContext.filterBlobs(Object.assign({
							abortSignal: n.abortSignal,
							where: e,
							marker: t,
							maxPageSize: n.maxPageSize
						}, RP(s))),
						i = Object.assign(Object.assign({}, r), {
							_response: r._response,
							blobs: r.blobs.map((e => {
								var t;
								let n = "";
								return 1 === (null === (t = e.tags) || void 0 === t ? void 0 : t.blobTagSet.length) && (n = e.tags.blobTagSet[0].value), Object.assign(Object.assign({}, e), {
									tags: Xw(e.tags),
									tagValue: n
								})
							}))
						});
					return i
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			findBlobsByTagsSegments(e, t, n = {}) {
				return L(this, arguments, (function*() {
					let r;
					if (t || void 0 === t)
						do {
							r = yield D(this.findBlobsByTagsSegment(e, t, n)), r.blobs = r.blobs || [], t = r.continuationToken, yield yield D(r)
						} while (t)
				}))
			}
			findBlobsByTagsItems(e, t = {}) {
				return L(this, arguments, (function*() {
					var n, r;
					try {
						for (var s, i = U(this.findBlobsByTagsSegments(e, undefined, t)); !(s = yield D(i.next())).done;) {
							const e = s.value;
							yield D(yield* H(U(e.blobs)))
						}
					} catch (e) {
						n = {
							error: e
						}
					} finally {
						try {
							s && !s.done && (r = i.return) && (yield D(r.call(i)))
						} finally {
							if (n) throw n.error
						}
					}
				}))
			}
			findBlobsByTags(e, t = {}) {
				const n = Object.assign({}, t),
					r = this.findBlobsByTagsItems(e, n);
				return {
					next: () => r.next(),
					[Symbol.asyncIterator]() {
						return this
					},
					byPage: (t = {}) => this.findBlobsByTagsSegments(e, t.continuationToken, Object.assign({
						maxPageSize: t.maxPageSize
					}, n))
				}
			}
			getContainerNameFromUrl() {
				let e;
				try {
					const t = Ov.parse(this.url);
					if (e = "blob" === t.getHost().split(".")[1] ? t.getPath().split("/")[1] : Kw(t) ? t.getPath().split("/")[2] : t.getPath().split("/")[1], e = decodeURIComponent(e), !e) throw new Error("Provided containerName is invalid.");
					return e
				} catch (e) {
					throw new Error("Unable to extract containerName with provided information.")
				}
			}
			generateSasUrl(e) {
				return new Promise((t => {
					if (!(this.credential instanceof qC)) throw new RangeError("Can only generate the SAS when the client is initialized with a shared key credential");
					const n = IP(Object.assign({
						containerName: this._containerName
					}, e), this.credential).toString();
					t(Uw(this.url, n))
				}))
			}
			getBlobBatchClient() {
				return new bE(this.url, this.pipeline)
			}
		}
		class NE {
			constructor() {
				this.read = !1, this.write = !1, this.delete = !1, this.deleteVersion = !1, this.list = !1, this.add = !1, this.create = !1, this.update = !1, this.process = !1, this.tag = !1, this.filter = !1, this.setImmutabilityPolicy = !1, this.permanentDelete = !1
			}
			static parse(e) {
				const t = new NE;
				for (const n of e) switch (n) {
					case "r":
						t.read = !0;
						break;
					case "w":
						t.write = !0;
						break;
					case "d":
						t.delete = !0;
						break;
					case "x":
						t.deleteVersion = !0;
						break;
					case "l":
						t.list = !0;
						break;
					case "a":
						t.add = !0;
						break;
					case "c":
						t.create = !0;
						break;
					case "u":
						t.update = !0;
						break;
					case "p":
						t.process = !0;
						break;
					case "t":
						t.tag = !0;
						break;
					case "f":
						t.filter = !0;
						break;
					case "i":
						t.setImmutabilityPolicy = !0;
						break;
					case "y":
						t.permanentDelete = !0;
						break;
					default:
						throw new RangeError(`Invalid permission character: ${n}`)
				}
				return t
			}
			static from(e) {
				const t = new NE;
				return e.read && (t.read = !0), e.write && (t.write = !0), e.delete && (t.delete = !0), e.deleteVersion && (t.deleteVersion = !0), e.filter && (t.filter = !0), e.tag && (t.tag = !0), e.list && (t.list = !0), e.add && (t.add = !0), e.create && (t.create = !0), e.update && (t.update = !0), e.process && (t.process = !0), e.setImmutabilityPolicy && (t.setImmutabilityPolicy = !0), e.permanentDelete && (t.permanentDelete = !0), t
			}
			toString() {
				const e = [];
				return this.read && e.push("r"), this.write && e.push("w"), this.delete && e.push("d"), this.deleteVersion && e.push("x"), this.filter && e.push("f"), this.tag && e.push("t"), this.list && e.push("l"), this.add && e.push("a"), this.create && e.push("c"), this.update && e.push("u"), this.process && e.push("p"), this.setImmutabilityPolicy && e.push("i"), this.permanentDelete && e.push("y"), e.join("")
			}
		}
		class SE {
			constructor() {
				this.service = !1, this.container = !1, this.object = !1
			}
			static parse(e) {
				const t = new SE;
				for (const n of e) switch (n) {
					case "s":
						t.service = !0;
						break;
					case "c":
						t.container = !0;
						break;
					case "o":
						t.object = !0;
						break;
					default:
						throw new RangeError(`Invalid resource type: ${n}`)
				}
				return t
			}
			toString() {
				const e = [];
				return this.service && e.push("s"), this.container && e.push("c"), this.object && e.push("o"), e.join("")
			}
		}
		class vE {
			constructor() {
				this.blob = !1, this.file = !1, this.queue = !1, this.table = !1
			}
			static parse(e) {
				const t = new vE;
				for (const n of e) switch (n) {
					case "b":
						t.blob = !0;
						break;
					case "f":
						t.file = !0;
						break;
					case "q":
						t.queue = !0;
						break;
					case "t":
						t.table = !0;
						break;
					default:
						throw new RangeError(`Invalid service character: ${n}`)
				}
				return t
			}
			toString() {
				const e = [];
				return this.blob && e.push("b"), this.table && e.push("t"), this.queue && e.push("q"), this.file && e.push("f"), e.join("")
			}
		}
		class wE extends CP {
			constructor(e, t, n) {
				let r;
				r = IC(t) ? t : Nh && t instanceof qC || t instanceof gC || Sh(t) ? MC(t, n) : MC(new gC, n), super(e, r), this.serviceContext = new NS(this.storageClientContext)
			}
			static fromConnectionString(e, t) {
				t = t || {};
				const n = Mw(e);
				if ("AccountConnString" === n.kind) {
					if (Nh) {
						const e = new qC(n.accountName, n.accountKey);
						t.proxyOptions || (t.proxyOptions = void n.proxyUri);
						const r = MC(e, t);
						return new wE(n.url, r)
					}
					throw new Error("Account connection string is only supported in Node.js environment")
				}
				if ("SASConnString" === n.kind) {
					const e = MC(new gC, t);
					return new wE(n.url + "?" + n.accountSas, e)
				}
				throw new Error("Connection string must be either an Account connection string or a SAS connection string")
			}
			getContainerClient(e) {
				return new xE(qw(this.url, encodeURIComponent(e)), this.pipeline)
			}
			async createContainer(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobServiceClient-createContainer", t);
				try {
					const t = this.getContainerClient(e),
						n = await t.create(r);
					return {
						containerClient: t,
						containerCreateResponse: n
					}
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async deleteContainer(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobServiceClient-deleteContainer", t);
				try {
					const t = this.getContainerClient(e);
					return await t.delete(r)
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async undeleteContainer(e, t, n = {}) {
				const {
					span: r,
					updatedOptions: s
				} = PP("BlobServiceClient-undeleteContainer", n);
				try {
					const r = this.getContainerClient(n.destinationContainerName || e),
						i = new TS(r.storageClientContext);
					return {
						containerClient: r,
						containerUndeleteResponse: await i.restore(Object.assign({
							deletedContainerName: e,
							deletedContainerVersion: t
						}, s))
					}
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			async renameContainer(e, t, n = {}) {
				var r;
				const {
					span: s,
					updatedOptions: i
				} = PP("BlobServiceClient-renameContainer", n);
				try {
					const s = this.getContainerClient(t),
						a = new TS(s.storageClientContext);
					return {
						containerClient: s,
						containerRenameResponse: await a.rename(e, Object.assign(Object.assign({}, i), {
							sourceLeaseId: null === (r = n.sourceCondition) || void 0 === r ? void 0 : r.leaseId
						}))
					}
				} catch (e) {
					throw s.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					s.end()
				}
			}
			async getProperties(e = {}) {
				const {
					span: t,
					updatedOptions: n
				} = PP("BlobServiceClient-getProperties", e);
				try {
					return await this.serviceContext.getProperties(Object.assign({
						abortSignal: e.abortSignal
					}, RP(n)))
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async setProperties(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobServiceClient-setProperties", t);
				try {
					return await this.serviceContext.setProperties(e, Object.assign({
						abortSignal: t.abortSignal
					}, RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async getStatistics(e = {}) {
				const {
					span: t,
					updatedOptions: n
				} = PP("BlobServiceClient-getStatistics", e);
				try {
					return await this.serviceContext.getStatistics(Object.assign({
						abortSignal: e.abortSignal
					}, RP(n)))
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async getAccountInfo(e = {}) {
				const {
					span: t,
					updatedOptions: n
				} = PP("BlobServiceClient-getAccountInfo", e);
				try {
					return await this.serviceContext.getAccountInfo(Object.assign({
						abortSignal: e.abortSignal
					}, RP(n)))
				} catch (e) {
					throw t.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					t.end()
				}
			}
			async listContainersSegment(e, t = {}) {
				const {
					span: n,
					updatedOptions: r
				} = PP("BlobServiceClient-listContainersSegment", t);
				try {
					return await this.serviceContext.listContainersSegment(Object.assign(Object.assign(Object.assign({
						abortSignal: t.abortSignal,
						marker: e
					}, t), {
						include: "string" == typeof t.include ? [t.include] : t.include
					}), RP(r)))
				} catch (e) {
					throw n.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					n.end()
				}
			}
			async findBlobsByTagsSegment(e, t, n = {}) {
				const {
					span: r,
					updatedOptions: s
				} = PP("BlobServiceClient-findBlobsByTagsSegment", n);
				try {
					const r = await this.serviceContext.filterBlobs(Object.assign({
							abortSignal: n.abortSignal,
							where: e,
							marker: t,
							maxPageSize: n.maxPageSize
						}, RP(s))),
						i = Object.assign(Object.assign({}, r), {
							_response: r._response,
							blobs: r.blobs.map((e => {
								var t;
								let n = "";
								return 1 === (null === (t = e.tags) || void 0 === t ? void 0 : t.blobTagSet.length) && (n = e.tags.blobTagSet[0].value), Object.assign(Object.assign({}, e), {
									tags: Xw(e.tags),
									tagValue: n
								})
							}))
						});
					return i
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			findBlobsByTagsSegments(e, t, n = {}) {
				return L(this, arguments, (function*() {
					let r;
					if (t || void 0 === t)
						do {
							r = yield D(this.findBlobsByTagsSegment(e, t, n)), r.blobs = r.blobs || [], t = r.continuationToken, yield yield D(r)
						} while (t)
				}))
			}
			findBlobsByTagsItems(e, t = {}) {
				return L(this, arguments, (function*() {
					var n, r;
					try {
						for (var s, i = U(this.findBlobsByTagsSegments(e, undefined, t)); !(s = yield D(i.next())).done;) {
							const e = s.value;
							yield D(yield* H(U(e.blobs)))
						}
					} catch (e) {
						n = {
							error: e
						}
					} finally {
						try {
							s && !s.done && (r = i.return) && (yield D(r.call(i)))
						} finally {
							if (n) throw n.error
						}
					}
				}))
			}
			findBlobsByTags(e, t = {}) {
				const n = Object.assign({}, t),
					r = this.findBlobsByTagsItems(e, n);
				return {
					next: () => r.next(),
					[Symbol.asyncIterator]() {
						return this
					},
					byPage: (t = {}) => this.findBlobsByTagsSegments(e, t.continuationToken, Object.assign({
						maxPageSize: t.maxPageSize
					}, n))
				}
			}
			listSegments(e, t = {}) {
				return L(this, arguments, (function*() {
					let n;
					if (e || void 0 === e)
						do {
							n = yield D(this.listContainersSegment(e, t)), n.containerItems = n.containerItems || [], e = n.continuationToken, yield yield D(yield D(n))
						} while (e)
				}))
			}
			listItems(e = {}) {
				return L(this, arguments, (function*() {
					var t, n;
					try {
						for (var r, s = U(this.listSegments(undefined, e)); !(r = yield D(s.next())).done;) {
							const e = r.value;
							yield D(yield* H(U(e.containerItems)))
						}
					} catch (e) {
						t = {
							error: e
						}
					} finally {
						try {
							r && !r.done && (n = s.return) && (yield D(n.call(s)))
						} finally {
							if (t) throw t.error
						}
					}
				}))
			}
			listContainers(e = {}) {
				"" === e.prefix && (e.prefix = void 0);
				const t = [];
				e.includeDeleted && t.push("deleted"), e.includeMetadata && t.push("metadata"), e.includeSystem && t.push("system");
				const n = Object.assign(Object.assign({}, e), t.length > 0 ? {
						include: t
					} : {}),
					r = this.listItems(n);
				return {
					next: () => r.next(),
					[Symbol.asyncIterator]() {
						return this
					},
					byPage: (e = {}) => this.listSegments(e.continuationToken, Object.assign({
						maxPageSize: e.maxPageSize
					}, n))
				}
			}
			async getUserDelegationKey(e, t, n = {}) {
				const {
					span: r,
					updatedOptions: s
				} = PP("BlobServiceClient-getUserDelegationKey", n);
				try {
					const r = await this.serviceContext.getUserDelegationKey({
							startsOn: jw(e, !1),
							expiresOn: jw(t, !1)
						}, Object.assign({
							abortSignal: n.abortSignal
						}, RP(s))),
						i = {
							signedObjectId: r.signedObjectId,
							signedTenantId: r.signedTenantId,
							signedStartsOn: new Date(r.signedStartsOn),
							signedExpiresOn: new Date(r.signedExpiresOn),
							signedService: r.signedService,
							signedVersion: r.signedVersion,
							value: r.value
						};
					return Object.assign({
						_response: r._response,
						requestId: r.requestId,
						clientRequestId: r.clientRequestId,
						version: r.version,
						date: r.date,
						errorCode: r.errorCode
					}, i)
				} catch (e) {
					throw r.setStatus({
						code: kg.ERROR,
						message: e.message
					}), e
				} finally {
					r.end()
				}
			}
			getBlobBatchClient() {
				return new bE(this.url, this.pipeline)
			}
			generateAccountSasUrl(e, t = NE.parse("r"), n = "sco", r = {}) {
				if (!(this.credential instanceof qC)) throw RangeError("Can only generate the account SAS when the client is initialized with a shared key credential");
				if (void 0 === e) {
					const t = new Date;
					e = new Date(t.getTime() + 36e5)
				}
				const s = function(e, t) {
					const n = e.version ? e.version : mw;
					if (e.permissions && e.permissions.setImmutabilityPolicy && n < "2020-08-04") throw RangeError("'version' must be >= '2020-08-04' when provided 'i' permission.");
					if (e.permissions && e.permissions.deleteVersion && n < "2019-10-10") throw RangeError("'version' must be >= '2019-10-10' when provided 'x' permission.");
					if (e.permissions && e.permissions.permanentDelete && n < "2019-10-10") throw RangeError("'version' must be >= '2019-10-10' when provided 'y' permission.");
					if (e.permissions && e.permissions.tag && n < "2019-12-12") throw RangeError("'version' must be >= '2019-12-12' when provided 't' permission.");
					if (e.permissions && e.permissions.filter && n < "2019-12-12") throw RangeError("'version' must be >= '2019-12-12' when provided 'f' permission.");
					if (e.encryptionScope && n < "2020-12-06") throw RangeError("'version' must be >= '2020-12-06' when provided 'encryptionScope' in SAS.");
					const r = NE.parse(e.permissions.toString()),
						s = vE.parse(e.services).toString(),
						i = SE.parse(e.resourceTypes).toString();
					let a;
					a = n >= "2020-12-06" ? [t.accountName, r, s, i, e.startsOn ? jw(e.startsOn, !1) : "", jw(e.expiresOn, !1), e.ipRange ? TP(e.ipRange) : "", e.protocol ? e.protocol : "", n, e.encryptionScope ? e.encryptionScope : "", ""].join("\n") : [t.accountName, r, s, i, e.startsOn ? jw(e.startsOn, !1) : "", jw(e.expiresOn, !1), e.ipRange ? TP(e.ipRange) : "", e.protocol ? e.protocol : "", n, ""].join("\n");
					const o = t.computeHMACSHA256(a);
					return new AP(n, o, r.toString(), s, i, e.protocol, e.startsOn, e.expiresOn, e.ipRange, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, e.encryptionScope)
				}(Object.assign({
					permissions: t,
					expiresOn: e,
					resourceTypes: n,
					services: vE.parse("b").toString()
				}, r), this.credential).toString();
				return Uw(this.url, s)
			}
		}
		class CE {
			constructor(e) {
				this.root = void 0, this.bucket = void 0, this.keys = new Set, this.keysIsFinal = !1, this.keysNextMarker = void 0;
				let t = `https://${e.accountName}.blob.core.windows.net?${e.blobSasToken}`;
				this.client = new wE(t)
			}
			generateGetPresignedUrl(e, t) {
				var n;
				e = this.removeScheme(e);
				try {
					t.call(null !== (n = this.blobClientForKey(e).url) && void 0 !== n ? n : "")
				} catch (e) {
					console.error(e), t.call("")
				}
			}
			exists(e, t) {
				e = this.removeScheme(e);
				const n = t.clone();
				if (!e.includes("chunks") && this.keysIsFinal) return void setTimeout((() => {
					this.keys.has(e) ? (n.call(0), n.delete()) : (n.call(-1), n.delete())
				}), 1);
				const r = this.blobClientForKey(e);
				let s = new AbortController;
				r.exists({
					abortSignal: s.signal
				}).then((e => {
					n.call(e ? 100 : -1), n.delete()
				})).catch((e => {
					n.call(-1), n.delete()
				}))
			}
			download(e, t, n, r) {
				e = this.removeScheme(e);
				let s = this.blobClientForKey(e),
					i = e => {
						let r, i, a = new AbortController;
						if (t.length > 0) {
							let e = t.indexOf("-");
							r = Number(t.substring(6, e)), e != t.length - 1 && (i = Number(t.substring(e + 1)) - r + 1)
						}
						0 !== i ? (s.download(r, i).then((t => {
							if (null === t) return e.call({
								responseCode: 1e3,
								message: "unknown_error"
							}), void e.delete();
							t.blobBody.then((r => {
								r.arrayBuffer().then((r => {
									ZE.core.provideResponseBuffer(n, t.contentLength).set(new Uint8Array(r)), e.call({
										responseCode: 200
									}), e.delete()
								}))
							}))
						})).catch((t => {
							"AbortError" === t.name ? console.log("Fetch aborted") : "RestError" == t.name ? (e.call({
								responseCode: 404,
								message: "resource_not_found"
							}), e.delete()) : (console.log(t.name), e.call({
								responseCode: 1e3,
								message: "unknown_error"
							}), e.delete(), console.error(t))
						})), ZE.core.storeJsObject(n, {
							abortController: a,
							abort: function() {
								a.abort()
							}
						})) : requestAnimationFrame((() => {
							ZE.core.provideResponseBuffer(n, 0), e.call({
								responseCode: 200
							}), e.delete()
						}))
					};
				if (null == this.root || !e.startsWith(this.bucket + "/" + this.root)) {
					const t = e.indexOf("/"),
						n = e.lastIndexOf("/");
					this.bucket = e.substring(0, t), this.root = e.substring(t + 1, n), this.keysIsFinal = !1
				}
				if (e.includes("chunks") || this.keys.has(e)) i(r.clone());
				else {
					const e = r.clone();
					this.keysIsFinal ? setTimeout((() => {
						e.call({
							responseCode: 404,
							message: "resource_not_found"
						}), e.delete()
					}), 1) : i(e)
				}
			}
			containerClientForKey(e) {
				const t = e.indexOf("/"),
					n = e.indexOf("/", t + 1);
				return this.client.getContainerClient(e.substring(t + 1, n))
			}
			blobClientForKey(e) {
				const t = e.indexOf("/"),
					n = e.indexOf("/", t + 1);
				return this.client.getContainerClient(e.substring(t + 1, n)).getBlobClient(e.substring(n + 1))
			}
			removeScheme(e) {
				return e = e.startsWith("azure://") ? e.substring(8) : e.substring(5)
			}
			splitBucketPrefix(e) {
				let t = e.indexOf("/");
				const n = e.substring(0, t);
				return t = (e = e.substring(t + 1)).indexOf("/"), [n, e.substring(t + 1)]
			}
			static lexicographicalCompare(e, t) {
				e = e.replace("//", "/"), t = t.replace("//", "/");
				const n = e.split("/"),
					r = t.split("/"),
					s = Math.min(n.length, r.length);
				for (let e = 0; e < s; e++) {
					if (n[e] < r[e]) return !0;
					if (n[e] > r[e]) return !1
				}
				return n.length < r.length
			}
			list(e, t, n, r) {
				let s = this.containerClientForKey(e);
				const [i, a] = this.splitBucketPrefix(e), o = (a.endsWith("/") ? a : `${a}/`) + t, l = (a.endsWith("/") ? a : `${a}/`) + n, c = r.clone();
				let d = new AbortController;
				const m = (e, t) => {
					s.listBlobsFlat({
						prefix: o,
						abortSignal: d.signal
					}).byPage({
						maxPageSize: 1e3,
						continuationToken: t
					}).next().then((t => {
						var n;
						if (t.done) return c.call({
							responseCode: 200,
							data: e
						}), void c.delete();
						for (const r of null !== (n = t.value.segment.blobItems) && void 0 !== n ? n : []) CE.lexicographicalCompare(r.name, l) || e.push({
							path: r.name.substring(a.length),
							size: r.properties.contentLength,
							lastModified: r.properties.lastModified,
							etag: r.properties.etag
						});
						m(e, t.value.continuationToken)
					})).catch((e => {
						console.error(e), c.call({
							responseCode: 1e3,
							message: "unknown_error"
						}), c.delete()
					}))
				};
				m([], void 0)
			}
			metadata(e, t, n) {
				let r = this.containerClientForKey(e);
				const [s, i] = this.splitBucketPrefix(e), a = (i.endsWith("/") ? i : `${i}/`) + t, o = n.clone(), l = new AbortController;
				r.listBlobsFlat({
					prefix: a,
					abortSignal: l.signal
				}).byPage({
					maxPageSize: 1e3
				}).next().then((e => {
					if (1 != e.value.segment.blobItems.length) return o.call({
						responseCode: 404,
						message: "resource_not_found"
					}), void o.delete();
					const t = e.value.segment.blobItems[0];
					o.call({
						responseCode: 200,
						data: {
							path: t.name.substring(i.length),
							size: t.properties.contentLength,
							lastModified: t.properties.lastModified,
							etag: t.properties.etag
						}
					}), o.delete()
				})).catch((e => {
					console.error(e), o.call({
						responseCode: 1e3,
						message: "unknown_error"
					}), o.delete()
				}))
			}
			copyGetter() {
				return this
			}
		}
		class PE extends ch {
			constructor(e) {
				super(), this.bucket = void 0;
				let t = `https://${e.accountName}.blob.core.windows.net?${e.blobSasToken}`;
				this.client = new wE(t)
			}
			blockBlobClientForKey(e) {
				const t = e.indexOf("/"),
					n = e.indexOf("/", t + 1);
				return this.client.getContainerClient(e.substring(t + 1, n)).getBlockBlobClient(e.substring(n + 1))
			}
			removeScheme(e) {
				return e = e.startsWith("azure://") ? e.substring(8) : e.substring(5)
			}
			saveWithCompletion_(e, t, n) {
				e = this.removeScheme(e);
				const r = this.blockBlobClientForKey(e);
				var s;
				s = "string" == typeof t ? (new TextEncoder).encode(t).buffer : t.buffer;
				let i = new AbortController;
				r.uploadData(s, {
					abortSignal: i.signal
				}).then((e => {
					var t = void 0;
					201 != e._response.status && 200 != e._response.status && (t = "unknown_error"), n({
						responseCode: e._response.status,
						message: t
					})
				}))
			}
			blockBlockClient(e) {
				const t = e.indexOf("/"),
					n = e.indexOf("/", t + 1);
				return this.client.getContainerClient(e.substring(t + 1, n)).getBlockBlobClient(e.substring(n + 1))
			}
		}
		var RE = function(e, t, n, r) {
			return new(n || (n = Promise))((function(s, i) {
				function a(e) {
					try {
						l(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function l(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, o)
				}
				l((r = r.apply(e, t || [])).next())
			}))
		};

		function EE(e) {
			return Math.min(500 * Math.pow(2, e), 5e3) * (1 + Math.random())
		}
		class zE extends Error {
			constructor(e, t, n) {
				let r = `Fetching ${JSON.stringify(e)} resulted in HTTP error ${t}`;
				n && (r += `: ${n}`), r += ".", super(r), this.name = "HttpError", this.message = r, this.url = e, this.status = t, this.statusText = n
			}
			static fromResponse(e) {
				return new zE(e.url, e.status, e.statusText)
			}
			static fromRequestError(e, t) {
				if (t instanceof TypeError) {
					let t;
					return t = "string" == typeof e ? e : e.url, new zE(t, 1e3, "Network or CORS error")
				}
				return t
			}
		}

		function OE(e, t, n = e => e.arrayBuffer()) {
			return RE(this, void 0, void 0, (function*() {
				let r;
				try {
					r = yield fetch(e, t)
				} catch (t) {
					throw zE.fromRequestError(e, t)
				}
				if (!r.ok) throw zE.fromResponse(r);
				return {
					headers: r.headers,
					data: yield n(r)
				}
			}))
		}

		function TE(e, t, n, r) {
			return function(e, t, n, r, s, i) {
				return RE(this, void 0, void 0, (function*() {
					e: for (let a = 0;;) {
						a > 1 && (yield new Promise((e => setTimeout(e, EE(a - 2)))));
						t: for (let o = 0;;) try {
							return yield OE(t, r(e, n), i)
						} catch (e) {
							if (e instanceof zE) {
								if ("refresh" === s(e)) {
									if (3 == ++a) throw e;
									continue e
								}
								if (32 == ++o) throw e;
								yield new Promise((e => setTimeout(e, EE(o - 1))));
								continue t
							}
							throw e
						}
					}
				}))
			}(e, t, n, ((e, t) => {
				const n = new Headers(t.headers);
				return "undefined" === e.accessToken ? n.set("Authorization", e.oauthToken) : n.set("Authorization", `Bearer ${e.accessToken}`), Object.assign(Object.assign({}, t), {
					headers: n
				})
			}), (e => {
				const {
					status: t
				} = e;
				if (401 === t) return "refresh";
				if (504 === t || 503 === t) return "retry";
				throw e
			}), r)
		}

		function kE(e, t, n, r) {
			return RE(this, void 0, void 0, (function*() {
				return TE(e, `https://storage.googleapis.com/${t}`, n, r)
			}))
		}

		function AE(e, t, n, r) {
			return RE(this, void 0, void 0, (function*() {
				return void 0 === e ? OE(t, n, r) : TE(e, t, n, r)
			}))
		}
		class IE {
			constructor(e) {
				this.authToken = e
			}
			generateGetPresignedUrl(e, t) {
				t.call("")
			}
			exists(e, t) {
				const n = t.clone();
				let r = kE(this.authToken, e, {
					method: "HEAD"
				}, (e => e.arrayBuffer()));
				r.then((e => {
					n.call(Number(e.headers.get("content-length"))), n.delete()
				})).catch((e => {
					n.call(-1), n.delete()
				}))
			}
			download(e, t, n, r) {
				const s = r.clone();
				let i = kE(this.authToken, e, {
					headers: {
						Range: t
					}
				}, (e => e.arrayBuffer()));
				ZE.core.storeJsObject(n, i), i.then((e => {
					if (null === e.data) return;
					ZE.core.provideResponseBuffer(n, e.data.byteLength).set(new Uint8Array(e.data)), s.call({
						responseCode: 200
					}), s.delete()
				})).catch((e => {
					s.call({
						responseCode: e.status,
						message: "unknown_error",
						description: e.statusText
					}), s.delete()
				}))
			}
			splitBucketAndPrefix(e) {
				const t = e.indexOf("/");
				return [e.slice(0, t), e.slice(t + 1)]
			}
			list(e, t, n, r) {
				const [s, i] = this.splitBucketAndPrefix(e), a = (i.endsWith("/") ? i : `${i}/`) + t, o = r.clone(), l = (e, n, r) => {
					var c = `storage/v1/b/${s}/o?prefix=${a}`;
					n && (c += `&startOffset=${n}`), r && (c += `&pageToken=${r}`);
					let d = kE(this.authToken, c, {
						method: "GET"
					}, (e => e.json()));
					d.then((n => {
						var r;
						const s = n.data;
						for (const n of null !== (r = s.items) && void 0 !== r ? r : []) n.name !== `${i}/${t}` && e.push({
							path: n.name.slice(i.length),
							size: Number(n.size),
							lastModified: new Date(n.updated),
							etag: n.etag
						});
						s.nextPageToken ? l(e, void 0, s.nextPageToken) : (o.call({
							responseCode: 200,
							data: e
						}), o.delete())
					})).catch((e => {
						o.call({
							responseCode: 1e3,
							message: "list_request_failed"
						}), o.delete()
					}))
				};
				l([], n)
			}
			metadata(e, t, n) {
				const [r, s] = this.splitBucketAndPrefix(e), i = (s.endsWith("/") ? s : `${s}/`) + t, a = n.clone();
				let o = kE(this.authToken, `storage/v1/b/${r}/o/${i}`, {
					method: "GET"
				}, (e => e.json()));
				o.then((e => {
					if (1 !== e.data.items.length) return a.call({
						responseCode: 404,
						message: "not_found"
					}), void a.delete();
					const t = e.data.items[0];
					a.call({
						responseCode: 200,
						data: {
							name: t.name.slice(s.length),
							size: Number(t.size),
							lastModified: new Date(t.updated),
							etag: t.etag
						}
					}), a.delete()
				})).catch((e => {
					a.call({
						responseCode: 1e3,
						message: "metadata_request_failed"
					}), a.delete()
				}))
			}
			copyGetter() {
				return this
			}
		}
		class BE {
			constructor(e = void 0, t = void 0) {
				this.authToken = e, this.requestHeaders = t
			}
			generateGetPresignedUrl(e, t) {
				t.call("")
			}
			exists(e, t) {
				const n = t.clone();
				let r = AE(this.authToken, e, {
					method: "HEAD"
				}, (e => e.arrayBuffer()));
				r.then((e => {
					n.call(Number(e.headers.get("content-length"))), n.delete()
				})).catch((e => {
					n.call(-1), n.delete()
				}))
			}
			download(e, t, n, r) {
				var s, i;
				const a = r.clone(),
					o = t.length > 0 ? {
						headers: Object.assign(Object.assign({}, null !== (s = this.requestHeaders) && void 0 !== s ? s : {}), {
							Range: t
						})
					} : {
						headers: null !== (i = this.requestHeaders) && void 0 !== i ? i : {}
					};
				let l = AE(this.authToken, e, o, (e => e.arrayBuffer()));
				ZE.core.storeJsObject(n, l), l.then((e => {
					if (null === e.data) return;
					ZE.core.provideResponseBuffer(n, e.data.byteLength).set(new Uint8Array(e.data)), a.call({
						responseCode: 200
					}), a.delete()
				})).catch((e => {
					a.call({
						responseCode: e.status,
						message: "unknown_error",
						description: e.statusText
					}), a.delete()
				}))
			}
			list(e, t, n, r) {
				r.call({
					responseCode: 1e3,
					message: "not_implemented"
				})
			}
			metadata(e, t, n) {
				n.call({
					responseCode: 1e3,
					message: "not_implemented"
				})
			}
			copyGetter() {
				return this
			}
		}
		class ME extends ch {
			constructor(e) {
				super(), this.authToken = e
			}
			saveWithCompletion_(e, t, n) {
				let r = kE(this.authToken, e, {
					method: "PUT",
					body: t
				}, (e => e.text()));
				r.then((e => {
					console.log(e), n({
						responseCode: 200
					})
				})).catch((e => {
					n({
						responseCode: e.status,
						message: "unknown_error",
						description: e.statusText
					})
				}))
			}
		}
		var qE, _E, DE = function(e, t, n, r) {
			return new(n || (n = Promise))((function(s, i) {
				function a(e) {
					try {
						l(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function l(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, o)
				}
				l((r = r.apply(e, t || [])).next())
			}))
		};

		function LE(e, t) {
			return DE(this, void 0, void 0, (function*() {
				let n = e.createReader(),
					r = function() {
						return DE(this, void 0, void 0, (function*() {
							let e = yield function(e) {
								return new Promise(((t, n) => {
									e.readEntries((e => {
										t(e)
									}), (e => n(e)))
								}))
							}(n);
							if (0 == e.length) return;
							let s = e.find((e => e.name == t));
							return s || (yield r())
						}))
					};
				return yield r()
			}))
		}

		function HE(e, t, n) {
			const r = e.split("/"),
				s = (e, t) => {
					LE(e, r[t]).then((e => {
						e ? t == r.length - 1 ? n(e) : s(e, t + 1) : n(void 0)
					}))
				};
			s(t, 0)
		}
		class UE {
			constructor(e) {
				this.handle = e
			}
			generateGetPresignedUrl(e, t) {
				t.call("")
			}
			list(e, t, n, r) {
				throw new Error("Method not implemented.")
			}
			metadata(e, t, n) {
				throw new Error("Method not implemented.")
			}
			exists(e, t) {
				const n = t.clone();
				HE(e, this.handle, (e => {
					if (void 0 === e) return n.call(-1), void n.delete();
					e.file((e => {
						n.call(e.size), n.delete()
					}))
				}))
			}
			download(e, t, n, r) {
				const s = r.clone();
				HE(e, this.handle, (e => {
					if (void 0 === e) return s.call({
						responseCode: 404,
						message: "resource_not_found"
					}), void s.delete();
					e.file((e => {
						const r = new FileReader;
						if (r.onload = () => {
								ZE.core.provideResponseBuffer(n, r.result.byteLength).set(new Uint8Array(r.result)), s.call({
									responseCode: 200
								})
							}, 0 == t.length) r.readAsArrayBuffer(e);
						else {
							const n = t.split("=")[1].split("-");
							r.readAsArrayBuffer(e.slice(Number(n[0]), Number(n[1]) + 1))
						}
					}))
				})), ZE.core.storeJsObject(n, {
					handle: this.handle,
					abort: function() {}
				})
			}
			copyGetter() {
				return this
			}
		}! function(e) {
			e[e.top = 0] = "top", e[e.center = 1] = "center", e[e.bottom = 2] = "bottom", e[e.left = 3] = "left", e[e.right = 4] = "right", e[e.topLeft = 5] = "topLeft", e[e.topRight = 6] = "topRight", e[e.bottomLeft = 7] = "bottomLeft", e[e.bottomRight = 8] = "bottomRight"
		}(qE || (qE = {})),
		function(e) {
			e.rotate0 = "rotate0", e.rotate90 = "rotate90", e.rotate180 = "rotate180", e.rotate270 = "rotate270"
		}(_E || (_E = {}));
		class jE {
			constructor(e, t, n) {
				this.pendingRequests = [], this.factory = n, this.creds = t, this.ds_path = e
			}
			generateGetPresignedUrl(e, t) {
				const n = t.clone();
				this.shouldDoHTTPRequest(e) ? jE.defaultHTTPGetter.generateGetPresignedUrl(e, n) : "gcs://" == e.substring(0, 6) || "gs://" == e.substring(0, 5) ? this.factory.presignedUrlGetter(this.ds_path, e, this.creds, n) : this.enqueueRequest(e, (() => {
					this.getter.generateGetPresignedUrl(this.path_for_key(e), n)
				}))
			}
			exists(e, t) {
				const n = t.clone();
				this.shouldDoHTTPRequest(e) ? jE.defaultHTTPGetter.exists(e, n) : this.enqueueRequest(e, (() => {
					this.getter.exists(this.path_for_key(e), n)
				}))
			}
			download(e, t, n, r) {
				const s = r.clone();
				this.shouldDoHTTPRequest(e) ? jE.defaultHTTPGetter.download(e, t, n, s) : this.enqueueRequest(e, (() => {
					this.getter.download(this.path_for_key(e), t, n, s)
				}))
			}
			list(e, t, n, r) {
				const s = r.clone();
				this.shouldDoHTTPRequest(t) ? jE.defaultHTTPGetter.list(e, t, n, s) : this.enqueueRequest(t, (() => {
					this.getter.list(e, t, n, s)
				}))
			}
			metadata(e, t, n) {
				const r = n.clone();
				this.shouldDoHTTPRequest(t) ? jE.defaultHTTPGetter.metadata(e, t, r) : this.enqueueRequest(t, (() => {
					this.getter.metadata(e, t, r)
				}))
			}
			copyGetter() {
				return this
			}
			path_for_key(e) {
				if ("http://" == e.substring(0, 7) || "https://" == e.substring(0, 8)) return e;
				const t = e.indexOf("//");
				return e.substring(t + 2)
			}
			shouldDoHTTPRequest(e) {
				return 0 == this.creds.length && ("http://" == e.substring(0, 7) || "https://" == e.substring(0, 8))
			}
			enqueueRequest(e, t) {
				void 0 !== this.getter ? t() : (this.pendingRequests.push(t), this.factory.requestGetter(e, this))
			}
			updateGetter(e) {
				this.getter = e, this.pendingRequests.forEach((e => {
					e()
				}))
			}
		}
		jE.defaultHTTPGetter = new BE;
		class $E {
			constructor(e, t) {
				this.getters = {}, this.pendingLinkGetters = {}, this.credentialsGetter = e, this.presignedUrlGetter = t
			}
			get(e, t) {
				const n = e + t;
				return void 0 !== this.getters[n] ? this.getters[n] : new jE(e, t, this)
			}
			requestGetter(e, t) {
				void 0 === this.getters[t.creds] ? (void 0 === this.pendingLinkGetters[t.creds] && (this.pendingLinkGetters[t.creds] = new Set), this.pendingLinkGetters[t.creds].add(t), this.pendingLinkGetters[t.creds].size > 1 || ("s3://" == e.substring(0, 5) ? this.credentialsGetter(t.ds_path, t.creds, "aws", (e => {
					this.getters[t.creds] = new ah(e, e.region), this.updatePendingGetters(t.creds)
				})) : "gcs://" == e.substring(0, 6) || "gs://" == e.substring(0, 5) ? this.credentialsGetter(t.ds_path, t.creds, "gcs", (e => {
					this.getters[t.creds] = new IE(e), this.updatePendingGetters(t.creds)
				})) : "azure://" == e.substring(0, 8) || "az://" == e.substring(0, 5) ? this.credentialsGetter(t.ds_path, t.creds, "azure", (e => {
					this.getters[t.creds] = new CE(e), this.updatePendingGetters(t.creds)
				})) : "http://" != e.substring(0, 7) && "https://" != e.substring(0, 8) || this.credentialsGetter(t.ds_path, t.creds, "http", (e => {
					this.getters[t.creds] = new BE(`Bearer ${e.access_token}`, e.requestHeaders), this.updatePendingGetters(t.creds)
				})))) : t.updateGetter(this.getters[t.creds])
			}
			updatePendingGetters(e) {
				this.pendingLinkGetters[e].forEach((t => {
					t.updateGetter(this.getters[e])
				})), this.pendingLinkGetters[e].clear()
			}
		}

		function FE(e) {
			return e ? "string" == typeof e ? e : JSON.stringify(e) : ""
		}
		class VE {
			static load(e) {
				return void 0 !== VE.library ? new Promise(((e, t) => {
					e(VE.library)
				})) : new Promise(((t, n) => {
					((e, t) => {
						const n = document.createElement("script");
						window.emscriptenInitializationCallback = e, n.type = "module", n.async = !0;
						let r = !1;
						try {
							new SharedArrayBuffer(1)
						} catch (e) {
							console.warn("Could not load SharedArrayBuffer, reverting to single-threaded visualizer."), r = !0
						}
						const s = e => {
							n.appendChild(document.createTextNode(`import VisualizerCore from "${e}api${r?"_st":"_mt"}.js"; window.VisualizerCore = VisualizerCore; window.emscriptenInitializationCallback(); window.emscriptenInitializationCallback = undefined`)), document.body.appendChild(n)
						};
						if (void 0 === t) {
							let e = window.location.hostname,
								t = "https://app.activeloop.ai";
							("127.0.0.1" === e || "localhost" === e || e.indexOf("activeloop.ai") >= 0 || e.indexOf("activeloop.dev") >= 0) && (t = ""), fetch(`${t}/visualizer/version`).then((e => {
								e.json().then((e => {
									s(`${t}/visualizer/${e}/`)
								})).catch((e => {
									s(`${t}/visualizer/`)
								}))
							})).catch((e => {
								s(`${t}/visualizer/`)
							}))
						} else s(t)
					})((() => {
						VisualizerCore().then((e => {
							VE.library = e, t(e)
						}))
					}), e)
				}))
			}
		}
		VE.library = void 0;
		class KE {
			static registerVisualizer(e, t) {
				KE.visualizers[e] = t
			}
			static deregisterVisualizer(e) {
				e in KE.visualizers && delete KE.visualizers[e]
			}
			static notifyVisualizers() {
				for (let e in KE.visualizers) KE.visualizers[e].updateDataset(null)
			}
		}
		var GE, WE, XE, QE, JE;
		KE.visualizers = {},
			function(e) {
				e.generic = "generic", e.image = "image", e.dicom = "dicom", e.nifti = "nifti", e.medical = "medical", e.video = "video", e.bbox = "bbox", e.bbox3d = "bbox3d", e.label = "class_label", e.keypoint = "keypoints_coco", e.audio = "audio", e.segment_mask = "segment_mask", e.binary_mask = "binary_mask", e.mesh = "mesh", e.embedding = "embedding", e.group = "group", e.unknown = "unknown"
			}(GE || (GE = {})),
			function(e) {
				e.canvas = "canvas", e.grid = "grid", e.embedding = "embedding"
			}(WE || (WE = {})),
			function(e) {
				e.pca = "pca", e.tsne = "tsne", e.umap = "umap"
			}(XE || (XE = {})),
			function(e) {
				e.advanced = "advanced", e.simplified = "simplified"
			}(QE || (QE = {}));
		class ZE {
			static anchorType() {
				return this.core.Anchor
			}
			static initializeUI(e, t, n = void 0) {
				if (void 0 !== ZE.canvas) return void requestAnimationFrame((() => {
					ZE.canvas.width = e.offsetWidth, ZE.canvas.height = e.offsetHeight, e.appendChild(ZE.canvas), t(!0)
				}));
				let r = document.createElement("canvas");
				r.id = "webgl", r.style.position = "relative", r.style.width = "100%", r.style.height = "100%", r.style.left = "0px", r.style.top = "0px";
				let s = 1;
				"high" == (null == n ? void 0 : n.imageQuality) && (s = window.devicePixelRatio), r.width = s * e.offsetWidth, r.height = s * e.offsetHeight, e.appendChild(r);
				try {
					ZE.core.Visualizer.initializeUI(r.id)
				} catch (e) {
					return void t(!1)
				}
				ZE.canvas = r, t(!0)
			}
			static initializeAPI(e, t, n, r = void 0, s = void 0) {
				if (void 0 !== s) {
					const e = document.createElement("meta");
					e.httpEquiv = "origin-trial", e.content = s, document.head.append(e)
				}
				void 0 === ZE.core ? VE.load(r).then((r => {
					ZE.core = r, qE.top = ZE.core.Anchor.top, qE.center = ZE.core.Anchor.center, qE.bottom = ZE.core.Anchor.bottom, qE.left = ZE.core.Anchor.left, qE.right = ZE.core.Anchor.right, qE.topLeft = ZE.core.Anchor.top_left, qE.topRight = ZE.core.Anchor.top_right, qE.bottomLeft = ZE.core.Anchor.bottom_left, qE.bottomRight = ZE.core.Anchor.bottom_right;
					const s = new $E(e, t);
					try {
						ZE.core.Visualizer.initializeAPI(s, ZE.cloudClient)
					} catch (e) {
						return
					}
					n()
				})) : n()
			}
			static initialize(e, t, n, r, s = void 0, i = void 0, a = void 0) {
				ZE.initializeAPI(t, n, (() => {
					ZE.initializeUI(e, (e => {
						r()
					}), i)
				}), s, a)
			}
			static registerLogger(e, t) {
				ZE.core.Visualizer.registerLogger(e, t)
			}
			static unregisterLogger(e) {
				ZE.core.Visualizer.unregisterLogger(e)
			}
			static registerToken(e) {
				ZE.core.Visualizer.registerToken(e)
			}
			constructor() {
				this.visualizerID = -1, this.isInDeletion = !1, this.didNotifyFirstLoad = !1, this.notifyOnFirstLoadCallback = e => {}, this.commonPrefix = "", this.datasetChangeCallback = () => {}, this.analyticsCallbacks = [], this.visualizerID = ZE.visualizerID++, this.cppEngine = null, this.isInDeletion = !0
			}
			static datasetEngine(e, t, n) {
				const r = new ZE;
				return r.cppEngine = new ZE.core.Visualizer(e, t, FE(n)), e.isV4Dataset && KE.registerVisualizer(r.visualizerID, r.cppEngine), r.isInDeletion = !1, r
			}
			static localDatasetEngine(e, t) {
				var n;
				const r = new UE(e),
					s = new ZE;
				return s.cppEngine = ZE.core.Visualizer.localVisualizer(t, r), s.isInDeletion = !1, (null === (n = s.dataset) || void 0 === n ? void 0 : n.isV4Dataset) && KE.registerVisualizer(s.visualizerID, s.cppEngine), s
			}
			static httpDatasetEngine(e, t, n) {
				var r;
				const s = new BE,
					i = new ZE;
				return i.cppEngine = ZE.core.Visualizer.cloudVisualizer(e, t, s, FE(n), ""), i.isInDeletion = !1, (null === (r = i.dataset) || void 0 === r ? void 0 : r.isV4Dataset) && KE.registerVisualizer(i.visualizerID, i.cppEngine), i
			}
			static cloudClient(e, t, n = "r") {
				let r = null;
				if ("aws" == e) {
					r = new("r" == n ? ah : dh)(t.credentials, t.region, t.endpoint)
				} else if ("gcs" == e) {
					r = new("r" == n ? IE : ME)(t)
				} else if ("azure" == e) {
					r = new("r" == n ? CE : PE)(t)
				} else if ("http" == e) {
					if ("w" == n) throw new Error("HTTP writer is not supported.");
					r = new BE
				}
				return r
			}
			static cloudDatasetEngine(e, t, n, r, s, i) {
				var a;
				const o = ZE.cloudClient(n, r),
					l = new ZE;
				return l.cppEngine = ZE.core.Visualizer.cloudVisualizer(e, t, o, FE(s), null != i ? i : ""), l.isInDeletion = !1, (null === (a = l.dataset) || void 0 === a ? void 0 : a.isV4Dataset) && KE.registerVisualizer(l.visualizerID, l.cppEngine), l
			}
			get dataset() {
				if (!this.isInDeletion) return this.cppEngine.dataset
			}
			set dataset(e) {
				if (this.isInDeletion) throw new Error("cppEngine is in deletion process");
				if (null == e) throw new Error("setting dataset to undefined is not allowed.");
				KE.deregisterVisualizer(this.visualizerID), e.isV4Dataset && KE.registerVisualizer(this.visualizerID, this.cppEngine), this.cppEngine.dataset = e, this.datasetChangeCallback()
			}
			goTo(e) {
				this.isInDeletion || this.cppEngine.goTo(e)
			}
			resetCamera() {
				this.isInDeletion || this.cppEngine.resetCamera()
			}
			resetCameraOrientation() {
				this.isInDeletion || this.cppEngine.resetCamera()
			}
			get minCameraDistance() {
				return this.isInDeletion ? 0 : this.cppEngine.minCameraDistance
			}
			set minCameraDistance(e) {
				this.isInDeletion || (this.cppEngine.minCameraDistance = e)
			}
			get maxCameraDistance() {
				return this.isInDeletion ? 0 : this.cppEngine.maxCameraDistance
			}
			set maxCameraDistance(e) {
				this.isInDeletion || (this.cppEngine.maxCameraDistance = e)
			}
			get allowMagnification() {
				return this.isInDeletion ? 0 : this.cppEngine.allowMagnification
			}
			set allowMagnification(e) {
				this.isInDeletion || (this.cppEngine.allowMagnification = e)
			}
			setFilter(e) {
				if (!this.isInDeletion) {
					let t;
					Array.isArray(e) ? (t = new ZE.core.VectorInt, e.forEach((e => {
						t.push_back(e)
					}))) : t = e, this.cppEngine.setFilter(t)
				}
			}
			resetFilter() {
				this.isInDeletion || (this.cppEngine.resetFilter(), this.datasetChangeCallback())
			}
			checkout(e, t, n, r) {
				this.isInDeletion || this.cppEngine.checkout(e, t, n, null != r ? r : "")
			}
			get isUpToDate() {
				return !this.isInDeletion && this.cppEngine.isUpToDate
			}
			restart() {
				this.isInDeletion || this.cppEngine.restart()
			}
			play() {
				this.isInDeletion || this.cppEngine.play()
			}
			pause() {
				this.isInDeletion || this.cppEngine.pause()
			}
			singleSampleView() {
				if (!this.isInDeletion) return this.cppEngine.singleSampleView()
			}
			biomedicalSampleView() {
				if (!this.isInDeletion) return this.cppEngine.biomedicalSampleView()
			}
			modelSampleView() {
				if (!this.isInDeletion) return this.cppEngine.modelSampleView()
			}
			applyQuery(e, t, n) {
				this.isInDeletion || this.cppEngine.applyQuery(e, t, n)
			}
			canvasResized() {
				this.isInDeletion || this.cppEngine.canvasResized()
			}
			get samplesCount() {
				return this.isInDeletion ? 0 : this.cppEngine.samplesCount
			}
			get layersInfoFlat() {
				const e = this.layersInfo;
				let t = [];
				const n = (e, r) => {
					if (0 == e.children.length) t.push({
						name: r,
						hidden: e.hidden,
						opacity: e.opacity,
						enabled: e.enabled,
						saturationRange: e.saturationRange,
						autoSaturation: e.autoSaturation,
						htype: e.htype,
						dtype: e.dtype,
						children: [],
						spatial: e.spatial
					});
					else
						for (const t of e.children) 0 != t.name.length ? n(t, r + "/" + t.name) : n(t, r)
				};
				n(e, e.name);
				for (let e of t) e.name = e.name.substring(this.commonPrefix.length);
				return t
			}
			get layersInfo() {
				if (this.isInDeletion) return {
					name: "",
					hidden: !0,
					opacity: 0,
					enabled: !1,
					saturationRange: [0, 1],
					autoSaturation: !1,
					htype: GE.generic,
					dtype: "uint8",
					children: [],
					spatial: !1
				};
				const e = this.cppEngine.layersInfo;
				return this.commonPrefix = e.name + "/", e
			}
			analyticsInfo(e) {
				if (this.isInDeletion) throw new Error("cppEngine is in deletion process");
				return this.cppEngine.analyticsInfo(e)
			}
			nodeInfo(e) {
				return this.isInDeletion ? {
					name: "",
					hidden: !0,
					opacity: 0,
					enabled: !1,
					saturationRange: [0, 1],
					autoSaturation: !1,
					htype: GE.generic,
					dtype: "uint8",
					children: [],
					spatial: !1
				} : this.cppEngine.nodeInfo(this.commonPrefix + e)
			}
			setNodeHidden(e, t) {
				this.isInDeletion || this.cppEngine.setNodeHidden(this.commonPrefix + e, t)
			}
			setNodeOpacity(e, t) {
				this.isInDeletion || this.cppEngine.setNodeOpacity(this.commonPrefix + e, t)
			}
			setNodeValueForKey(e, t, n) {
				this.isInDeletion || this.cppEngine.setNodeValueForKey(this.commonPrefix + e, t, n)
			}
			setNodeSaturationRange(e, t, n) {
				this.isInDeletion || this.cppEngine.setNodeSaturationRange(this.commonPrefix + e, t, n)
			}
			setNodeBBoxStyle(e, t) {
				this.isInDeletion || this.cppEngine.setNodeBBoxStyle(this.commonPrefix + e, t)
			}
			setNodeGradient(e, t) {
				if (!this.isInDeletion) {
					let n = new ZE.core.Gradient;
					t.forEach((e => {
						n.push_back(e)
					})), this.cppEngine.setNodeGradient(this.commonPrefix + e, n)
				}
			}
			setNodeTransform(e, t) {
				this.isInDeletion || this.cppEngine.setNodeTransform(this.commonPrefix + e, t)
			}
			setAutoSaturation(e, t) {
				this.isInDeletion || this.cppEngine.setNodeAutoSaturation(this.commonPrefix + e, t)
			}
			addSvg(e, t, n, r) {
				return this.isInDeletion ? void 0 : this.cppEngine.addSvg(e, t, n, r)
			}
			addText(e, t, n, r, s) {
				return this.isInDeletion ? void 0 : this.cppEngine.addText(e, t, n, r, s)
			}
			itemStyle(e, t, n) {
				return this.isInDeletion ? void 0 : this.cppEngine.itemStyle(this.commonPrefix + e, t, n)
			}
			getPoiIndex() {
				return this.isInDeletion ? -1 : this.cppEngine.getPoiIndex()
			}
			get hoverIndex() {
				return this.isInDeletion ? -1 : this.cppEngine.hoverIndex
			}
			getHoverCoord(e) {
				return this.isInDeletion ? {
					x: 0,
					y: 0
				} : this.cppEngine.getHoverCoord(e)
			}
			getState() {
				return this.isInDeletion ? "" : this.cppEngine.getState()
			}
			applyState(e) {
				if (!this.isInDeletion) return this.cppEngine.applyState(e)
			}
			get bboxSettings() {
				return null
			}
			set bboxSettings(e) {}
			get playbackRate() {
				return this.isInDeletion ? 0 : this.cppEngine.playbackRate
			}
			set playbackRate(e) {
				this.isInDeletion || (this.cppEngine.playbackRate = e)
			}
			get opacitySettings() {
				if (this.isInDeletion) return null;
				const e = this.layersInfoFlat;
				let t = {};
				for (const n of e) t[n.name] = 1 - n.opacity;
				return t
			}
			set opacitySettings(e) {
				if (!this.isInDeletion)
					for (const t in e) this.setNodeOpacity(t, 1 - e[t])
			}
			get darkMode() {
				return !this.isInDeletion && this.cppEngine.darkMode
			}
			set darkMode(e) {
				this.isInDeletion || (this.cppEngine.darkMode = e)
			}
			get textColor() {
				return this.isInDeletion ? "#000000" : this.cppEngine.textColor
			}
			set textColor(e) {
				this.isInDeletion || (this.cppEngine.textColor = e)
			}
			get showFloating3dObjects() {
				return !this.isInDeletion && this.cppEngine.showFloating3dObjects
			}
			set showFloating3dObjects(e) {
				this.isInDeletion || (this.cppEngine.showFloating3dObjects = e)
			}
			get config() {
				return {
					textColor: this.textColor,
					darkMode: this.darkMode,
					showFloating3dObjects: this.showFloating3dObjects
				}
			}
			pauseEmbeddingUpgrade() {
				this.isInDeletion || this.cppEngine.pauseEmbeddingUpgrade()
			}
			continueEmbeddingUpgrade() {
				this.isInDeletion || this.cppEngine.continueEmbeddingUpgrade()
			}
			sampleOrientation(e) {
				return this.isInDeletion ? _E.rotate0 : this.cppEngine.sampleOrientation(e)
			}
			changeSampleOrientation(e, t) {
				this.isInDeletion || this.cppEngine.changeSampleOrientation(e, t)
			}
			get showSampleIndex() {
				return !this.isInDeletion && this.cppEngine.showSampleIndex
			}
			set showSampleIndex(e) {
				this.isInDeletion || (this.cppEngine.showSampleIndex = e)
			}
			get activeSampleBorderWidth() {
				return this.isInDeletion ? 0 : this.cppEngine.activeSampleBorderWidth
			}
			set activeSampleBorderWidth(e) {
				this.isInDeletion || (this.cppEngine.activeSampleBorderWidth = e)
			}
			get camera() {
				return this.isInDeletion ? {
					position: {
						x: 0,
						y: 0,
						z: 0
					},
					magnification: 0
				} : this.cppEngine.camera()
			}
			getGridMode() {
				return this.isInDeletion ? WE.canvas : this.cppEngine.getGridMode()
			}
			setGridMode(e, t) {
				if (!this.isInDeletion) {
					let n = null;
					if (e !== WE.embedding || this.hasEmbeddingTensor() || (n = Error("Embeddings visualization is only available for datasets with embeddings tensors")), null !== n) throw n;
					this.cppEngine.setGridMode(e, t)
				}
			}
			hasEmbeddingTensor() {
				if (this.isInDeletion) return !1;
				if (null == this.dataset) throw new Error("dataset was expected to be undefined only during deletion.");
				const e = this.dataset.tensors;
				for (let t = 0; t < e.size(); ++t)
					if (e.get(t).htype === GE.embedding) return !0;
				return !1
			}
			get embeddingClustering() {
				return this.isInDeletion ? XE.pca : this.cppEngine.embeddingClustering
			}
			set embeddingClustering(e) {
				this.isInDeletion || (this.cppEngine.embeddingClustering = e)
			}
			get embeddingAddedScale() {
				return !this.isInDeletion && this.cppEngine.embeddingAddedScale
			}
			set embeddingAddedScale(e) {
				this.isInDeletion || (this.cppEngine.embeddingAddedScale = e)
			}
			get renderingOption() {
				return this.isInDeletion ? QE.advanced : this.cppEngine.renderingOption
			}
			set renderingOption(e) {
				this.isInDeletion || (this.cppEngine.renderingOption = e)
			}
			addSvgTensor(e) {
				return new Promise(((t, n) => {
					this.isInDeletion ? t() : this.cppEngine.addSvgTensor(e, (e => {
						0 == e.length ? t() : n(e)
					}))
				}))
			}
			get onClick() {
				return this.isInDeletion ? (e, t) => {} : this.cppEngine.onClick
			}
			set onClick(e) {
				this.isInDeletion || (this.cppEngine.onClick = e)
			}
			get onDblClick() {
				return this.isInDeletion ? (e, t) => {} : this.cppEngine.onDblClick
			}
			set onDblClick(e) {
				this.isInDeletion || (this.cppEngine.onDblClick = e)
			}
			set onActionMenu(e) {
				this.isInDeletion || (this.cppEngine.onActionMenu = e)
			}
			get onActionMenu() {
				return this.isInDeletion ? (e, t, n) => {} : this.cppEngine.onActionMenu
			}
			set onFirstLoad(e) {
				this.isInDeletion || (this.notifyOnFirstLoadCallback = e, this.cppEngine.onFirstLoad = e => {
					this.didNotifyFirstLoad || (this.didNotifyFirstLoad = !0, this.notifyOnFirstLoadCallback(e))
				})
			}
			get onFirstLoad() {
				return this.isInDeletion ? () => {} : this.notifyOnFirstLoadCallback
			}
			sampleInfo(e, t, n) {
				this.isInDeletion ? (t({
					index: e,
					tensors: {}
				}), n({
					index: e,
					tensors: {}
				})) : this.cppEngine.sampleInfo(e, (n => {
					t({
						index: e,
						tensors: n
					})
				}), (t => {
					n({
						index: e,
						tensors: t
					})
				}))
			}
			cleanup() {
				KE.deregisterVisualizer(this.visualizerID), this.isInDeletion = !0, this.cppEngine.requestForDelete(), this.cppEngine = null, this.visualizerID = -1
			}
			removeAnalyticsCallback(e) {}
			datasetVisualizationSupported(e) {
				return this.isInDeletion ? {
					supported: !1,
					reason: "Engine is in deletion process"
				} : this.cppEngine.datasetVisualizationSupported(e)
			}
		}

		function YE(e, t) {
			for (let n = 0; n < e.size(); ++n)
				if (e.get(n) == t) return !0;
			return !1
		}
		ZE.visualizerID = 0,
			function(e) {
				e.full = "full", e.lightweight = "lightweight"
			}(JE || (JE = {}));
		var ez, tz = function(e, t, n, r) {
			return new(n || (n = Promise))((function(s, i) {
				function a(e) {
					try {
						l(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function l(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, o)
				}
				l((r = r.apply(e, t || [])).next())
			}))
		};
		class nz {
			static cloudDataset(e, t, n, r, s) {
				return tz(this, void 0, void 0, (function*() {
					return new Promise(((i, a) => {
						const o = function(e, t, n, r, s = JE.full) {
							let i = null;
							return "aws" == t ? i = new ah(n.credentials, n.region, n.endpoint) : "gcs" == t ? i = new IE(n) : "azure" == t ? i = new CE(n) : (t = "http") && (i = new BE), new ZE.core.Dataset(e, i, null != r ? r : "", s)
						}(e, t, n, r, s);
						o.loadVersionControl((e => {
							o.checkout("", ((t, n) => {
								n ? a(n) : i(new nz(t, e))
							}))
						}))
					}))
				}))
			}
			static fromV4Dataset(e) {
				return new nz(function(e) {
					return new ZE.core.Dataset.fromV4Dataset(e.impl_, e)
				}(e), [])
			}
			static hubDataset(e, t, n) {
				return tz(this, void 0, void 0, (function*() {
					const r = yield a.instance.dataset_creds(e, t);
					return yield nz.cloudDataset(r.path, r.fetchType, r.credentials, e, n)
				}))
			}
			constructor(e, t) {
				this.core = e, this.versionControl = t
			}
			get isV4Dataset() {
				return this.core.isV4Dataset
			}
			get v4Dataset() {
				return this.core.v4Dataset
			}
			get tensors() {
				return function(e) {
					if (!e) return [];
					if (Array.isArray(e)) return e;
					const t = new Array;
					for (let n = 0; n < e.size(); ++n) t.push(e.get(n));
					return t
				}(this.core.tensors)
			}
			query(e) {
				return new Promise(((t, n) => {
					this.core.query(e, ((e, r) => {
						r ? n(r) : t(new nz(e, this.versionControl))
					}))
				}))
			}
		}

		function rz(e, t) {
			return new Promise(((n, r) => {
				const s = function(e, t) {
					return ZE.core.query(e, null != t ? t : "")
				}(e, null != t ? t : "");
				s.then(((e, t) => {
					t ? r(t) : n(new nz(e, []))
				}))
			}))
		}! function(e) {
			e.top = "top", e.top_left = "top_left", e.left = "left", e.bottom_left = "bottom_left", e.bottom = "bottom", e.bottom_right = "bottom_right", e.right = "right", e.top_right = "top_right", e.none = "none"
		}(ez || (ez = {}));
		class sz {
			constructor(e, t, n) {
				this.tensorsListPopup = void 0, this.activeBox = {
					name: "",
					edge: ez.none
				}, this.previousPosition = {
					x: -1,
					y: -1
				}, this.addBoxButton = document.createElement("button"), this.singleSampleView = e, this.indexLabel = document.createElement("label"), this.boxTensorButtons = {}, this.boxRemoveButtons = {}, e.play(t), this.initBoxesButton(), this.initIndexLabel(), this.initBoxesUI(), ZE.canvas.onmousedown = e => {
					this.removeTensorsListPopup();
					const t = ZE.canvas.getBoundingClientRect();
					this.activeBox = this.singleSampleView.boxAtPosition({
						x: e.clientX - t.x,
						y: e.clientY - t.y
					}), "default" == this.activeBox.name && (this.activeBox.name = ""), this.previousPosition = this.singleSampleView.convertToLocal({
						x: e.clientX - t.x,
						y: e.clientY - t.y
					});
					for (const e in this.boxTensorButtons) this.boxTensorButtons[e].style.visibility = "hidden", this.boxRemoveButtons[e].style.visibility = "hidden"
				}, ZE.canvas.onmouseup = e => {
					this.activeBox.name = "";
					for (const e in this.boxTensorButtons) this.boxTensorButtons[e].style.visibility = "visible", this.boxRemoveButtons[e].style.visibility = "visible"
				}, e.onmousemove = e => {
					if (this.activeBox.name.length > 0) {
						const t = ZE.canvas.getBoundingClientRect(),
							n = this.singleSampleView.convertToLocal({
								x: e.clientX - t.x,
								y: e.clientY - t.y
							});
						if (n.x < 0 && n.y < 0) return;
						let r = this.singleSampleView.boxRect(this.activeBox.name);
						const s = n.x - this.previousPosition.x,
							i = n.y - this.previousPosition.y;
						switch (this.activeBox.edge) {
							case ez.top:
								r.y += i / 2, r.w -= i;
								break;
							case ez.top_left:
								r.x += s / 2, r.z -= s, r.y += i / 2, r.w -= i;
								break;
							case ez.left:
								r.x += s / 2, r.z -= s;
								break;
							case ez.bottom_left:
								r.x += s / 2, r.z -= s, r.y += i / 2, r.w += i;
								break;
							case ez.bottom:
								r.y += i / 2, r.w += i;
								break;
							case ez.bottom_right:
								r.x += s / 2, r.z += s, r.y += i / 2, r.w += i;
								break;
							case ez.right:
								r.x += s / 2, r.z += s;
								break;
							case ez.top_right:
								r.x += s / 2, r.z += s, r.y += i / 2, r.w -= i;
								break;
							case ez.none:
								r.x += s, r.y += i
						}
						this.previousPosition = n, r.z > .05 && r.w > .05 && (this.singleSampleView.setBoxRect(this.activeBox.name, r), this.updateBoxPositions())
					}
				}, window.onkeydown = t => {
					this.removeTensorsListPopup(), "Enter" == t.key && (this.singleSampleView.applySensorFusionChanges(), this.exit(), n(!0)), "Escape" == t.key && (this.singleSampleView.cancelSensorFusionChanges(), this.exit(), n(!1)), "ArrowRight" == t.key && (null != e && ++e.activeIndex, this.indexLabel.innerHTML = `Index: ${this.singleSampleView.activeIndex}`), "ArrowLeft" == t.key && (null != e && --e.activeIndex, this.indexLabel.innerHTML = `Index: ${this.singleSampleView.activeIndex}`)
				}
			}
			initBoxesButton() {
				this.addBoxButton.innerHTML = "Add Box", this.addBoxButton.style.position = "absolute", this.addBoxButton.style.left = "10px", this.addBoxButton.style.bottom = "10px", this.addBoxButton.style.color = "black", this.addBoxButton.style.backgroundColor = "white", this.addBoxButton.style.border = "solid", this.addBoxButton.style.borderWidth = "2px", this.addBoxButton.style.borderColor = "black", this.addBoxButton.onclick = () => {
					this.addBox()
				}, ZE.canvas.parentElement.appendChild(this.addBoxButton)
			}
			initIndexLabel() {
				this.indexLabel.innerHTML = `Index: ${this.singleSampleView.activeIndex}`, this.indexLabel.style.position = "absolute", this.indexLabel.style.left = "10px", this.indexLabel.style.color = "black", this.indexLabel.style.top = "10px", ZE.canvas.parentElement.appendChild(this.indexLabel)
			}
			initBoxesUI() {
				const e = this.singleSampleView.boxes;
				for (let t = 0; t < e.size(); ++t) {
					const n = e.get(t);
					this.addBoxUI(n)
				}
				this.updateBoxPositions(), e.delete()
			}
			addBox() {
				const e = this.singleSampleView.boxes;
				let t = e.size(),
					n = String(t);
				for (; YE(e, n);) t++, n = String(t);
				this.singleSampleView.addBox(n), this.addBoxUI(n), this.updateBoxPositions()
			}
			addBoxUI(e) {
				var t, n;
				this.boxTensorButtons[e] = document.createElement("button"), this.boxTensorButtons[e].innerHTML = "Tensors", this.boxTensorButtons[e].style.position = "absolute", this.boxTensorButtons[e].style.color = "black", this.boxTensorButtons[e].style.backgroundColor = "white", this.boxTensorButtons[e].style.border = "solid", this.boxTensorButtons[e].style.borderWidth = "2px", this.boxTensorButtons[e].style.borderColor = "black", this.boxTensorButtons[e].onclick = () => {
					this.removeTensorsListPopup(), this.populateTensorsInBox(e)
				}, null === (t = ZE.canvas.parentElement) || void 0 === t || t.appendChild(this.boxTensorButtons[e]), this.boxRemoveButtons[e] = document.createElement("button"), this.boxRemoveButtons[e].innerHTML = "X", this.boxRemoveButtons[e].style.position = "absolute", this.boxRemoveButtons[e].style.color = "black", this.boxRemoveButtons[e].style.backgroundColor = "white", this.boxRemoveButtons[e].style.border = "solid", this.boxRemoveButtons[e].style.borderWidth = "2px", this.boxRemoveButtons[e].style.borderColor = "black", this.boxRemoveButtons[e].onclick = () => {
					this.removeBox(e)
				}, null === (n = ZE.canvas.parentElement) || void 0 === n || n.appendChild(this.boxRemoveButtons[e])
			}
			removeBox(e) {
				var t, n;
				this.singleSampleView.removeBox(e), null === (t = this.boxTensorButtons[e].parentElement) || void 0 === t || t.removeChild(this.boxTensorButtons[e]), null === (n = this.boxRemoveButtons[e].parentElement) || void 0 === n || n.removeChild(this.boxRemoveButtons[e]), delete this.boxTensorButtons[e], delete this.boxRemoveButtons[e], this.removeTensorsListPopup()
			}
			updateBoxPositions() {
				const e = this.singleSampleView.boxes;
				for (let t = 0; t < e.size(); ++t) {
					const n = e.get(t),
						r = this.singleSampleView.boxRect(n),
						s = this.singleSampleView.convertToScreen({
							x: r.x + r.z / 2,
							y: r.y - r.w / 2
						});
					this.boxTensorButtons[n].style.left = Math.round(s.x) - 57 + "px", this.boxTensorButtons[n].style.top = `${Math.round(s.y)+10}px`, this.boxRemoveButtons[n].style.left = Math.round(s.x) - 87 + "px", this.boxRemoveButtons[n].style.top = `${Math.round(s.y)+10}px`
				}
				e.delete()
			}
			populateTensorsInBox(e) {
				var t;
				this.tensorsListPopup = document.createElement("div");
				const n = document.createElement("table"),
					r = this.singleSampleView.boxTensors(e),
					s = this.singleSampleView.tensors;
				for (let t = 0; t < s.size(); ++t) {
					const i = s.get(t),
						a = document.createElement("tr"),
						o = YE(r, i);
					let l = document.createElement("td"),
						c = document.createElement("input");
					c.type = "checkbox", c.checked = o, c.style.appearance = "auto", c.onchange = () => {
						c.checked ? this.singleSampleView.addTensorToBox(i, e) : this.singleSampleView.removeTensorFromBox(i, e)
					}, l.appendChild(c), a.appendChild(l), l = document.createElement("td"), l.innerHTML = i, a.appendChild(l), n.appendChild(a)
				}
				const i = document.createElement("tr");
				let a = document.createElement("td"),
					o = document.createElement("button");
				o.innerHTML = "Done", o.style.border = "solid", o.style.borderWidth = "2px", o.style.borderColor = "black", o.onclick = () => {
					this.removeTensorsListPopup()
				}, a.appendChild(o), i.appendChild(a), n.appendChild(i), this.tensorsListPopup.appendChild(n), this.tensorsListPopup.style.backgroundColor = "gray", this.tensorsListPopup.style.position = "absolute", this.tensorsListPopup.style.left = this.boxTensorButtons[e].style.left;
				let l = this.boxTensorButtons[e].style.top;
				l = l.substring(0, l.length - 2), this.tensorsListPopup.style.top = `${Number(l)+30}px`, null === (t = ZE.canvas.parentElement) || void 0 === t || t.appendChild(this.tensorsListPopup), r.delete(), s.delete()
			}
			removeTensorsListPopup() {
				var e, t;
				null === (t = null === (e = this.tensorsListPopup) || void 0 === e ? void 0 : e.parentElement) || void 0 === t || t.removeChild(this.tensorsListPopup), this.tensorsListPopup = void 0
			}
			exit() {
				var e, t, n, r, s, i;
				null === (e = this.addBoxButton.parentElement) || void 0 === e || e.removeChild(this.addBoxButton), null === (t = this.indexLabel.parentElement) || void 0 === t || t.removeChild(this.indexLabel), null === (r = null === (n = this.tensorsListPopup) || void 0 === n ? void 0 : n.parentElement) || void 0 === r || r.removeChild(this.tensorsListPopup);
				for (let e in this.boxTensorButtons) null === (s = this.boxTensorButtons[e].parentElement) || void 0 === s || s.removeChild(this.boxTensorButtons[e]), delete this.boxTensorButtons[e], null === (i = this.boxRemoveButtons[e].parentElement) || void 0 === i || i.removeChild(this.boxRemoveButtons[e]), delete this.boxRemoveButtons[e];
				this.singleSampleView.pause(), this.singleSampleView.delete()
			}
		}
		class iz {
			static initialize(e, t = void 0) {
				void 0 === iz.core ? VE.load(t).then((t => {
					iz.core = t, iz.core.deeplake_initialize(), e()
				})) : e()
			}
			static deinitialize() {
				void 0 !== iz.core && (iz.core.deeplake_deinitialize(), iz.core = void 0)
			}
		}
		class az {
			constructor(e) {
				this.impl_ = e
			}
			delete() {
				this.impl_.delete(), this.impl_ = null
			}
		}
		class oz extends az {
			get name() {
				return this.impl_.name
			}
			get type() {
				return this.impl_.type
			}
			toString() {
				return this.impl_.toString()
			}
		}
		class lz extends az {
			get length() {
				return this.impl_.length()
			}
			get(e) {
				return new oz(this.impl_.get(e))
			}
			toString() {
				return this.impl_.toString()
			}
			columns() {
				const e = this.impl_.columns(),
					t = [];
				for (let n = 0; n < e.size(); n++) t.push(new oz(e.get(n)));
				return e.delete(), t
			}
		}
		class cz extends az {
			constructor(e) {
				super(e)
			}
			toString() {
				return this.impl_.toString()
			}
			get id() {
				return this.impl_.id()
			}
			get name() {
				return this.impl_.name()
			}
			get version() {
				return this.impl_.version()
			}
			open() {
				return new Promise(((e, t) => {
					this.impl_.open().then(((n, r) => {
						r ? t(new Error(r)) : n ? e(new fz(n)) : t(new Error("Failed to open tag"))
					}))
				}))
			}
		}
		class dz extends cz {
			constructor(e) {
				super(e)
			}
			rename(e) {
				return new Promise(((t, n) => {
					this.impl_.rename(e).then((e => {
						e ? n(new Error(e)) : t()
					}))
				}))
			}
			deleteTag() {
				return new Promise(((e, t) => {
					this.impl_.deleteTag().then((n => {
						n ? t(new Error(n)) : e()
					}))
				}))
			}
		}
		class mz extends az {
			toString() {
				return this.impl_.toString
			}
			get(e) {
				return new Promise(((t, n) => {
					this.impl_.get(e).then(((e, r) => {
						r ? n(new Error(r)) : t(e)
					}))
				}))
			}
			rowId() {
				return this.impl_.rowId()
			}
		}
		class uz extends mz {
			set(e, t) {
				this.impl_.set(e, t), KE.notifyVisualizers()
			}
		}
		class pz extends az {
			get(e) {
				return new Promise(((t, n) => {
					this.impl_.get(e).then(((e, r) => {
						r ? n(new Error(r)) : t(e)
					}))
				}))
			}
		}
		class hz extends pz {
			set(e, t) {
				return new Promise(((n, r) => {
					this.impl_.set(e, t).then((e => {
						e ? r(new Error(e)) : (n(), KE.notifyVisualizers())
					}))
				}))
			}
		}
		class gz extends az {
			toString() {
				return this.impl_.toString
			}
			get name() {
				return this.impl_.name()
			}
			get length() {
				return this.impl_.length()
			}
			get(e) {
				return new Promise("number" == typeof e || "bigint" == typeof e ? (t, n) => {
					this.impl_.get(e).then(((e, r) => {
						r ? n(new Error(r)) : t(e)
					}))
				} : (t, n) => {
					this.impl_.getBySlice(e).then(((e, r) => {
						r ? n(new Error(r)) : t(e)
					}))
				})
			}
		}
		class yz extends gz {
			set(e, t) {
				"number" != typeof e && "bigint" != typeof e ? (this.impl_.setBySlice(e, t), KE.notifyVisualizers()) : this.impl_.set(e, t)
			}
		}
		class fz extends az {
			get schema() {
				return new lz(this.impl_.schema)
			}
			get length() {
				return this.impl_.length()
			}
			get rowsCount() {
				return this.length
			}
			get(e) {
				return "number" == typeof e || "bigint" == typeof e ? new mz(this.impl_.get(e)) : "string" == typeof e ? new gz(this.impl_.getByColumnName(e)) : new pz(this.impl_.getBySlice(e))
			}
			query(e) {
				return new Promise(((t, n) => {
					this.impl_.query(e).then(((e, r) => {
						r ? n(new Error(r)) : t(new fz(e))
					}))
				}))
			}
			tag(e) {
				return new Promise(((t, n) => {
					this.impl_.tag(e).then(((e, r) => {
						r ? n(new Error(r)) : t(new dz(e))
					}))
				}))
			}*[Symbol.iterator]() {
				for (let e = 0; e < this.length; e++) yield this.get(e)
			}
		}
		class bz extends az {
			get(e) {
				return this.impl_.get(e)
			}
			keys() {
				var e = this.impl_.keys(),
					t = [];
				for (let n = 0; n < e.size(); ++n) t.push(e.get(n));
				return e.delete(), t
			}
			contains(e) {
				return this.impl_.contains(e)
			}
		}
		class xz extends bz {
			set(e, t) {
				return new Promise(((n, r) => {
					this.impl_.set(e, t).then((e => {
						e ? r(e) : n()
					}))
				}))
			}
		}
		class Nz extends az {
			get version() {
				return this.impl_.version
			}
			toString() {
				return this.impl_.toString()
			}
			get timestamp() {
				return this.impl_.timestamp
			}
			get clientTimestamp() {
				return this.impl_.clientTimestamp
			}
			get message() {
				return this.impl_.message
			}
		}
		class Sz extends az {
			get length() {
				return this.impl_.length
			}
			get(e) {
				return new Nz(this.impl_.get(e))
			}
			toString() {
				return this.impl_.toString()
			}*[Symbol.iterator]() {
				for (let e = 0; e < this.length; ++e) yield this.get(e)
			}
		}
		class vz extends az {
			constructor(e) {
				super(e)
			}
			get length() {
				return this.impl_.length()
			}
			toString() {
				return this.impl_.toString()
			}
			get(e) {
				return new cz(this.impl_.get(e))
			}
			names() {
				const e = this.impl_.names(),
					t = [];
				for (let n = 0; n < e.size(); n++) t.push(e.get(n));
				return e.delete(), t
			}
		}
		class wz extends vz {
			constructor(e) {
				super(e)
			}
			get(e) {
				return new dz(this.impl_.get(e))
			}
		}
		class Cz extends fz {
			toString() {
				return this.impl_.toString()
			}
			id() {
				return this.impl_.id()
			}
			name() {
				return this.impl_.name()
			}
			description() {
				return this.impl_.description()
			}
			get metadata() {
				return new bz(this.impl_.metadata())
			}
			createdTime() {
				return this.impl_.createdTime()
			}
			get history() {
				return new Sz(this.impl_.history)
			}
			get tags() {
				return new wz(this.impl_.tags)
			}
			get version() {
				return this.impl_.version
			}
		}

		function Pz(e, t = {}) {
			return new Promise(((n, r) => {
				var s, i;
				let a = new iz.core.IcmMapStringString,
					o = null !== (s = t.creds) && void 0 !== s ? s : {};
				for (let e in o) o[e] ? a.set(e, o[e]) : console.debug("skip null key in creds:", e);
				iz.core.deeplake_open_read_only(e, a, null !== (i = t.token) && void 0 !== i ? i : void 0).then(((e, t) => {
					t ? r(t) : e ? n(new Cz(e)) : r(new Error("Failed to open dataset"))
				})), a.delete()
			}))
		}
		class Rz extends az {
			get name() {
				return this.impl_.name
			}
			get type() {
				return this.impl_.type
			}
			toString() {
				return this.impl_.toString()
			}
			rename(e) {
				return new Promise(((t, n) => {
					this.impl_.rename(e).then((e => {
						e ? n(e) : t()
					}))
				}))
			}
			drop() {
				return new Promise(((e, t) => {
					this.impl_.drop().then((n => {
						n ? t(n) : e()
					}))
				}))
			}
		}
		class Ez extends az {
			get length() {
				return this.impl_.length()
			}
			get(e) {
				return new Rz(this.impl_.get(e))
			}
			toString() {
				return this.impl_.toString()
			}
			columns() {
				const e = this.impl_.columns(),
					t = [];
				for (let n = 0; n < e.size(); n++) t.push(new Rz(e.get(n)));
				return e.delete(), t
			}
		}
		class zz extends az {
			toString(e = !1) {
				return this.impl_.toString(e)
			}
		}

		function Oz() {
			return new zz(iz.core.deeplake_types_Int8())
		}

		function Tz() {
			return new zz(iz.core.deeplake_types_Int16())
		}

		function kz() {
			return new zz(iz.core.deeplake_types_Int32())
		}

		function Az() {
			return new zz(iz.core.deeplake_types_Int64())
		}

		function Iz() {
			return new zz(iz.core.deeplake_types_UInt8())
		}

		function Bz() {
			return new zz(iz.core.deeplake_types_UInt16())
		}

		function Mz() {
			return new zz(iz.core.deeplake_types_UInt32())
		}

		function qz() {
			return new zz(iz.core.deeplake_types_UInt64())
		}

		function _z() {
			return new zz(iz.core.deeplake_types_Float32())
		}

		function Dz() {
			return new zz(iz.core.deeplake_types_Float64())
		}

		function Lz() {
			return new zz(iz.core.deeplake_types_Bool())
		}

		function Hz(e, t) {
			if ("number" == typeof t) return new zz(iz.core.deeplake_types_ArrayWithDimensions(e.impl_, t));
			var n = new iz.core.VectorInt;
			for (let e = 0; e < t.length; e++) n.push_back(t[e]);
			var r = new zz(iz.core.deeplake_types_ArrayWithShape(e.impl_, n));
			return n.delete(), r
		}

		function Uz(e) {
			var t = new iz.core.MapStringObject;
			for (let n in e) {
				let r = e[n];
				t.set(n, "string" == typeof r ? r : r.impl_)
			}
			var n = new zz(iz.core.deeplake_types_Struct(t));
			return t.delete(), n
		}
		class jz extends az {
			toString() {
				return this.impl_.toString()
			}
			get dataType() {
				return new zz(this.impl_.dataType)
			}
			get isSequence() {
				return this.impl_.isSequence
			}
		}

		function $z(e) {
			return new jz(iz.core.deeplake_types_Generic("string" == typeof e ? e : e.impl_))
		}

		function Fz() {
			return new jz(iz.core.deeplake_types_Text())
		}

		function Vz(e, t) {
			return new jz(iz.core.deeplake_types_Embedding(e, "string" == typeof t ? t : t.impl_))
		}

		function Kz(e) {
			return new jz(iz.core.deeplake_types_Sequence("string" == typeof e ? e : e.impl_))
		}

		function Gz() {
			return new jz(iz.core.deeplake_types_Dict())
		}

		function Wz(e, t) {
			return new jz(iz.core.deeplake_types_Image("string" == typeof e ? e : e.impl_, t))
		}

		function Xz(e, t, n) {
			return new jz(iz.core.deeplake_types_BoundingBox("string" == typeof e ? e : e.impl_, t, n))
		}

		function Qz(e) {
			return new jz(iz.core.deeplake_types_BinaryMask(null != e ? e : null, null))
		}

		function Jz(e, t) {
			return new jz(iz.core.deeplake_types_SegmentMask("string" == typeof e ? e : e.impl_, null != t ? t : null, null))
		}
		class Zz extends Cz {
			setName(e) {
				return new Promise(((t, n) => {
					this.impl_.setName(e).then((e => {
						e ? n(new Error(e)) : t()
					}))
				}))
			}
			setDescription(e) {
				return new Promise(((t, n) => {
					this.impl_.setDescription(e).then((e => {
						e ? n(new Error(e)) : t()
					}))
				}))
			}
			get metadata() {
				return new xz(this.impl_.metadata())
			}
			addColumn(e, t) {
				if (t instanceof jz) return void this.impl_.addColumnByType(e, t.impl_);
				let n = "addColumnByStringType",
					r = t;
				t instanceof zz && (n = "addColumn", r = t.impl_), this.impl_[n](e, r), KE.notifyVisualizers()
			}
			commit(e) {
				return new Promise(((t, n) => {
					this.impl_.commit(null != e ? e : null).then((e => {
						e ? n(new Error(e)) : t()
					}))
				}))
			}
			rollback() {
				return new Promise(((e, t) => {
					this.impl_.rollback().then((n => {
						n ? t(new Error(n)) : (e(), KE.notifyVisualizers())
					}))
				}))
			}
			get(e) {
				return "number" == typeof e || "bigint" == typeof e ? new uz(this.impl_.get(e)) : "string" == typeof e ? new yz(this.impl_.getByColumnName(e)) : new hz(this.impl_.getBySlice(e))
			}
			deleteRow(e) {
				this.impl_.deleteRow(e), KE.notifyVisualizers()
			}
			append(e) {
				if (Array.isArray(e)) {
					let t = new iz.core.VectorMapStringObject;
					for (let n of e) {
						let e = new iz.core.MapStringObject;
						for (let t in n) e.set(t, n[t]);
						t.push_back(e), e.delete()
					}
					this.impl_.appendVector(t), t.delete()
				} else {
					let t = new iz.core.MapStringObject;
					for (let n in e) t.set(n, e[n]);
					this.impl_.appendMap(t), t.delete()
				}
				KE.notifyVisualizers()
			}
			get schema() {
				return new Ez(this.impl_.schema)
			}
			get rowsCount() {
				return this.impl_.rowsCount()
			}
			get length() {
				return this.rowsCount
			}*[Symbol.iterator]() {
				for (let e = 0; e < this.length; e++) yield this.get(e)
			}
			tag(e, t) {
				return new Promise(((n, r) => {
					this.impl_.tag(e, t).then(((e, t) => {
						t ? r(t) : e ? n(new dz(e)) : r("Failed to tag dataset")
					}))
				}))
			}
		}

		function Yz(e, t = {}) {
			return new Promise(((n, r) => {
				var s, i;
				let a = new iz.core.IcmMapStringString,
					o = null !== (s = t.creds) && void 0 !== s ? s : {};
				for (let e in o) o[e] ? a.set(e, o[e]) : console.debug("skip null key in creds:", e);
				iz.core.deeplake_create(e, a, null !== (i = t.token) && void 0 !== i ? i : void 0).then(((e, t) => {
					t ? r(new Error(t)) : e ? n(new Zz(e)) : r(new Error("Failed to create dataset"))
				})), a.delete()
			}))
		}

		function eO(e, t = {}) {
			return new Promise(((n, r) => {
				var s, i;
				let a = new iz.core.IcmMapStringString,
					o = null !== (s = t.creds) && void 0 !== s ? s : {};
				for (let e in null != o ? o : {}) o[e] ? a.set(e, o[e]) : console.debug("skip null key in creds:", e);
				iz.core.deeplake_delete(e, a, null !== (i = t.token) && void 0 !== i ? i : void 0).then((e => {
					e ? r(new Error(e)) : n()
				})), a.delete()
			}))
		}

		function tO(e, t, n = {}) {
			return new Promise(((r, s) => {
				var i, a, o;
				let l = new iz.core.IcmMapStringString,
					c = null !== (i = n.srcCreds) && void 0 !== i ? i : {};
				for (let e in c) c[e] ? l.set(e, c[e]) : console.debug("skip null key in srcCreds:", e);
				let d = new iz.core.IcmMapStringString,
					m = null !== (a = n.dstCreds) && void 0 !== a ? a : {};
				for (let e in m) m[e] ? d.set(e, m[e]) : console.debug("skip null key in dstCreds:", e);
				iz.core.deeplake_copy(e, t, l, d, null !== (o = n.token) && void 0 !== o ? o : void 0).then((e => {
					e ? s(new Error(e)) : r()
				})), l.delete()
			}))
		}

		function nO(e, t = {}) {
			return new Promise(((n, r) => {
				var s, i;
				let a = new iz.core.IcmMapStringString,
					o = null !== (s = t.creds) && void 0 !== s ? s : {};
				for (let e in o) o[e] ? a.set(e, o[e]) : console.debug("skip null key in creds:", e);
				iz.core.deeplake_open(e, a, null !== (i = t.token) && void 0 !== i ? i : void 0).then(((e, t) => {
					t ? r(new Error(t)) : e ? n(new Zz(e)) : r(new Error("Failed to open dataset"))
				})), a.delete()
			}))
		}

		function rO(e, t, n = {}) {
			return new Promise(((r, s) => {
				var i, a;
				let o = new iz.core.IcmMapStringString,
					l = null !== (i = n.creds) && void 0 !== i ? i : {};
				for (let e in l) o.set(e, l[e]);
				iz.core.deeplake_like(e.impl_, t, o, null !== (a = n.token) && void 0 !== a ? a : void 0).then(((e, t) => {
					t ? s(new Error(t)) : e ? r(new Zz(e)) : s(new Error("Failed to create dataset"))
				})), o.delete()
			}))
		}

		function sO(e, t) {
			return new Promise(((n, r) => {
				iz.core.deeplake_disconnect(e, t).then((e => {
					e ? r(new Error(e)) : n()
				}))
			}))
		}

		function iO(e, t = {}) {
			return new Promise(((n, r) => {
				var s;
				iz.core.deeplake_connect(e, t.dest, t.orgID, t.credsKey, null !== (s = t.token) && void 0 !== s ? s : void 0).then((e => {
					e ? r(new Error(e)) : n()
				}))
			}))
		}
		class aO extends az {
			static create(e, t = {
				dropLast: !1,
				batchSize: 1
			}) {
				return new aO(iz.core.deeplake_Prefetcher.create(e.impl_, t.dropLast, t.batchSize))
			}
			get length() {
				return this.impl_.length
			}
			next() {
				return new Promise(((e, t) => {
					this.impl_.next().then(((n, r) => {
						if (r) t(r);
						else {
							var s = n.map();
							n.delete(), e(s)
						}
					}))
				}))
			}*[Symbol.iterator]() {
				for (let e = 0; e < this.length; e++) yield this.next()
			}
		}
		class oO {
			static get endpoint() {
				return this.impl_ || (this.impl_ = iz.core.deeplake_backend_client_instance()), this.impl_.endpoint
			}
			static set endpoint(e) {
				this.impl_ || (this.impl_ = iz.core.deeplake_backend_client_instance()), this.impl_.endpoint = e
			}
		}

		function lO(e, t = "") {
			return new Promise(((n, r) => {
				iz.core.deeplake_query(e, t).then(((e, t) => {
					t ? r(t) : (e || r("Failed to create view"), n(new fz(e)))
				}))
			}))
		}

		function cO(e, t) {
			iz.core.deeplake_tql_register_function(e, t)
		}

		function dO(e, t, n) {
			return new iz.core.deeplake_Buffer(e, t, n)
		}
		var mO, uO = function(e, t, n, r) {
			return new(n || (n = Promise))((function(s, i) {
				function a(e) {
					try {
						l(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function l(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, o)
				}
				l((r = r.apply(e, t || [])).next())
			}))
		};
		! function(e) {
			let t, n;
			e.Metadata = xz, e.ReadOnlyMetadata = bz, e.open = nO, e.create = Yz, e.copy = tO, e.deleteDataset = eO, e.like = rO, e.connect = iO, e.disconnect = sO, e.ReadOnlyDataset = Cz, e.openReadOnly = Pz, e.Prefetcher = aO,
				function(e) {
					e.DataType = zz, e.Int8 = Oz, e.Int16 = Tz, e.Int32 = kz, e.Int64 = Az, e.UInt8 = Iz, e.UInt16 = Bz, e.UInt32 = Mz, e.UInt64 = qz, e.Float32 = _z, e.Float64 = Dz, e.Bool = Lz, e.Array = Hz, e.Struct = Uz, e.Generic = $z, e.Text = Fz, e.Embedding = Vz, e.Sequence = Kz, e.Dict = Gz, e.Image = Wz, e.BoundingBox = Xz, e.BinaryMask = Qz, e.SegmentMask = Jz
				}(t = e.Types || (e.Types = {})),
				function(e) {
					e.query = lO, e.registerFunction = cO
				}(n = e.TQL || (e.TQL = {})), e.createBuffer = dO, e.initialize = function(e = void 0) {
					return new Promise(((t, n) => uO(this, void 0, void 0, (function*() {
						iz.initialize(t, e)
					}))))
				}, e.deinitialize = function() {
					iz.deinitialize()
				}, e.Client = oO
		}(mO || (mO = {}));
		var pO, hO, gO = function(e, t, n, r) {
			return new(n || (n = Promise))((function(s, i) {
				function a(e) {
					try {
						l(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function l(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, o)
				}
				l((r = r.apply(e, t || [])).next())
			}))
		};
		let yO = (pO = document.getElementsByTagName("script"), hO = pO[pO.length - 1], function() {
			return hO.src
		})();
		const fO = yO.lastIndexOf("/");
		yO = fO < 0 ? void 0 : yO.substring(0, fO + 1);
		const bO = {
			activeObjectBorderColor: {
				dark: {
					r: 1,
					g: .75,
					b: .25,
					a: 1
				},
				light: {
					r: 1,
					g: .75,
					b: .25,
					a: 1
				}
			},
			eboxWidth: .02
		};
		class xO {
			constructor(e) {
				var t, n, r;
				this.options = e, this.config = Object.assign(Object.assign({}, bO), {
					imageQuality: null !== (r = null === (n = null === (t = this.options) || void 0 === t ? void 0 : t.renderingOptions) || void 0 === n ? void 0 : n.imageQuality) && void 0 !== r ? r : "low"
				})
			}
			get dataset() {
				if (void 0 !== this.dataset_) return this.dataset_
			}
			get engineConfig() {
				var e;
				return null === (e = this.engine) || void 0 === e ? void 0 : e.config
			}
			universalQuery(e, t) {
				return rz(e, t)
			}
			query(e) {
				var t;
				return gO(this, void 0, void 0, (function*() {
					const n = yield null === (t = this.dataset_) || void 0 === t ? void 0 : t.query(e);
					this.dataset_ = n, this.engine.dataset = this.dataset_.core
				}))
			}
			checkout(e) {
				return new Promise(((t, n) => {
					this.engine.checkout(e, (() => {}), (() => {
						t()
					}))
				}))
			}
			get renderingOption() {
				return this.engine ? this.engine.renderingOption : QE.advanced
			}
			set renderingOption(e) {
				this.engine && (this.engine.renderingOption = e)
			}
			get isUpToDate() {
				return !!this.engine && this.engine.isUpToDate
			}
			get scale() {
				var e, t, n, r;
				return this.engine ? (null !== (t = null === (e = this.camera) || void 0 === e ? void 0 : e.magnification) && void 0 !== t ? t : 0) / (null !== (r = null === (n = this.camera) || void 0 === n ? void 0 : n.position.x) && void 0 !== r ? r : 1) : 1
			}
			get camera() {
				return this.engine ? this.engine.camera : void 0
			}
			get minCameraDistance() {
				return this.engine ? this.engine.minCameraDistance : 0
			}
			set minCameraDistance(e) {
				void 0 !== this.engine && (this.engine.minCameraDistance = e)
			}
			get maxCameraDistance() {
				return this.engine ? this.engine.maxCameraDistance : 0
			}
			set maxCameraDistance(e) {
				void 0 !== this.engine && (this.engine.maxCameraDistance = e)
			}
			get onClick() {
				return this.engine ? this.engine.onClick : (e, t) => {}
			}
			set onClick(e) {
				void 0 !== this.engine && (this.engine.onClick = e)
			}
			get onDblClick() {
				return this.engine ? this.engine.onDblClick : (e, t) => {}
			}
			set onDblClick(e) {
				void 0 !== this.engine && (this.engine.onDblClick = e)
			}
			get allowMagnification() {
				return !!this.engine && this.engine.allowMagnification
			}
			set allowMagnification(e) {
				void 0 !== this.engine && (this.engine.allowMagnification = e)
			}
			sampleOrientation(e) {
				var t, n;
				return null !== (n = null === (t = this.engine) || void 0 === t ? void 0 : t.sampleOrientation(e)) && void 0 !== n ? n : _E.rotate0
			}
			changeSampleOrientation(e, t) {
				var n;
				null === (n = this.engine) || void 0 === n || n.changeSampleOrientation(e, t)
			}
			get showSampleIndex() {
				return !!this.engine && this.engine.showSampleIndex
			}
			set showSampleIndex(e) {
				void 0 !== this.engine && (this.engine.showSampleIndex = e)
			}
			get activeSampleBorderWidth() {
				return this.engine ? this.engine.activeSampleBorderWidth : 0
			}
			set activeSampleBorderWidth(e) {
				void 0 !== this.engine && (this.engine.activeSampleBorderWidth = e)
			}
			setTensorHidden(e, t) {
				this.engine && this.engine.setNodeHidden(e, t)
			}
			tensorHidden(e) {
				var t, n;
				return null !== (n = null === (t = this.engine) || void 0 === t ? void 0 : t.nodeInfo(e).hidden) && void 0 !== n && n
			}
			setTensorOpacity(e, t) {
				this.engine && this.engine.setNodeOpacity(e, t)
			}
			tensorOpacity(e) {
				var t, n;
				return null !== (n = null === (t = this.engine) || void 0 === t ? void 0 : t.nodeInfo(e).opacity) && void 0 !== n ? n : 0
			}
			setTensorBBoxStyle(e, t) {
				this.engine && this.engine.setNodeBBoxStyle(e, t)
			}
			tensorBBoxStyle(e) {
				var t, n;
				return null !== (n = null === (t = this.engine) || void 0 === t ? void 0 : t.nodeInfo(e).bboxStyle) && void 0 !== n ? n : "solid"
			}
			setTensorGradient(e, t) {
				this.engine && this.engine.setNodeGradient(e, t)
			}
			setTensorTransform(e, t) {
				this.engine && this.engine.setNodeTransform(e, t)
			}
			get hoverIndex() {
				var e, t;
				return null !== (t = null === (e = this.engine) || void 0 === e ? void 0 : e.hoverIndex) && void 0 !== t ? t : -1
			}
			getHoverCoord(e) {
				var t, n;
				return null !== (n = null === (t = this.engine) || void 0 === t ? void 0 : t.getHoverCoord(e)) && void 0 !== n ? n : {
					x: 0,
					y: 0
				}
			}
			addSvg(e, t, n, r) {
				var s;
				return null === (s = this.engine) || void 0 === s ? void 0 : s.addSvg(e, t, n, r)
			}
			addFont(e, t) {
				ZE.core.addFont(e, t)
			}
			addText(e, t, n, r, s) {
				var i;
				return null === (i = this.engine) || void 0 === i ? void 0 : i.addText(e, t, n, r, s)
			}
			itemStyle(e, t, n) {
				var r;
				return null === (r = this.engine) || void 0 === r ? void 0 : r.itemStyle(e, t, n)
			}
			bboxStyle(e, t, n) {
				var r;
				return null === (r = this.engine) || void 0 === r ? void 0 : r.itemStyle(e, t, n)
			}
			getState() {
				var e;
				return null === (e = this.engine) || void 0 === e ? void 0 : e.getState()
			}
			applyState(e) {
				var t;
				return null === (t = this.engine) || void 0 === t ? void 0 : t.applyState(e)
			}
			addSvgTensor(e) {
				var t;
				return null === (t = this.engine) || void 0 === t ? void 0 : t.addSvgTensor(e)
			}
			sampleInfo(e) {
				return new Promise(((t, n) => {
					this.engine ? this.engine.sampleInfo(e, (() => {}), (e => {
						t(e)
					})) : t(void 0)
				}))
			}
			static visualize(e, t = null, n = null, r, i) {
				return r.style.width = "100%", r.style.height = "100%", r.style.position = "absolute", new Promise(((a, o) => {
					const l = new xO(i);
					if (s(e)) {
						(null == i ? void 0 : i.requireToken) ? function(e, t) {
							const n = document.createElement("label");
							n.textContent = "Token", n.htmlFor = "token", n.style.width = "300px", n.style.display = "block", e.appendChild(n);
							const r = document.createElement("input");
							r.id = "token", r.type = "text", e.appendChild(r), e.appendChild(document.createElement("br"));
							const s = document.createElement("button");
							s.innerHTML = "Submit", e.appendChild(s), e.appendChild(document.createElement("br"));
							const i = document.createElement("label");
							i.style.color = "red", e.appendChild(i), s.onclick = () => {
								e.innerHTML = "", t(r.value)
							}
						}(r, (s => {
							l.options = Object.assign(Object.assign({}, i), {
								token: s
							}), l.initialize(e, t, n, r, (() => {
								a(l)
							}))
						})) : ((null == i ? void 0 : i.token) || (l.options = Object.assign(Object.assign({}, i), {
							token: "PUBLIC TOKEN " + "_".repeat(150)
						})), l.initialize(e, t, n, r, (() => {
							a(l)
						})))
					} else l.initialize(e, t, n, r, (() => {
						a(l)
					}))
				}))
			}
			initialize(e, t = null, n = null, r, s) {
				var i, o;
				return gO(this, void 0, void 0, (function*() {
					NO = t, (null === (i = this.options) || void 0 === i ? void 0 : i.controlPanel) && function(e) {
						(function() {
							const e = document.createElement("style");
							document.head.appendChild(e), e.innerHTML = "\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n  position: absolute;\n  z-index: 10;\n  left: 0px;\n  width: 100%;\n  bottom: 150px;\n  height: 50px;\n}\n\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n}\n\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #ccc;\n}\n\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n  position: absolute;\n  background-color: white;\n  z-index: 10;\n  left: 0px;\n  width: 100%;\n  height: 140px;\n  bottom: 0px;\n}\n"
						})(), e.innerHTML += '\n    \x3c!-- Tab links --\x3e\n    <div class="tab">\n      <button id="tab1" class="tablinks">Tensors</button>\n      <button id="tab2" class="tablinks">Version Control</button>\n      <button id="tab3" class="tablinks">Actions</button>\n    </div>\n\n    \x3c!-- Tab content --\x3e\n    <div id="tensors" class="tabcontent">\n      <table>\n        <tr>\n          <td style="text-align:right">Name</td>\n          <td>\n            <select id="tensorsSelect"></select>\n          </td>\n        </tr>\n        <tr>\n          <td style="text-align:right">Visible</td>\n          <td>\n            <input type="checkbox" id="visibleCheckbox"></input>\n          </td>\n        </tr>\n        <tr>\n          <td style="text-align:right">Transparency</td>\n          <td>\n            <input type="range" min="0" max="100" value="0" class="slider" id="transparencySlider">\n          </td>\n        </tr>\n      </table>\n    </div>\n\n    <div id="vc" class="tabcontent">\n      <table>\n        <tr>\n          <td style="padding: 10px;">\n            <select id="versionSelect"></select>\n          </td>\n          <td style="padding: 10px;"><b>Author</b></td>\n          <td style="padding: 10px;"><b>Date</b></td>\n        </tr>\n        <tr>\n          <td id="messagePlace" style="padding: 10px; text-align:left"></td>\n          <td id="authorPlace" style="padding: 10px;"></td>\n          <td id="timestampPlace" style="padding: 10px;"></td>\n        </tr>\n      </table>\n    </div>\n\n    <div id="actions" class="tabcontent">\n      <table>\n        <tr>\n          <td style="text-align:right">Query</td>\n          <td style="width: 400px;">\n            <input type="text" id="queryInput" style="width: 400px;" />\n          </td>\n        </tr>\n        <tr>\n          <td style="text-align:right">Mode</td>\n          <td>\n            <select id="modeSelect">\n              <option value="grid">Grid</option>\n              <option value="canvas" selected="selected">Canvas</option>\n              <option value="embedding">Embedding</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td style="text-align:right">Go To</td>\n          <td>\n            <input type="number" id="sliceInput" />\n          </td>\n        </tr>\n        <tr>\n          <td style="text-align:right">Dark Mode</td>\n          <td>\n            <input type="checkbox" id="darkModeCheckbox" />\n          </td>\n        </tr>\n      </table>\n    </div>\n\n    <div id="sample" class="tabcontent">\n    </div>\n  ', document.getElementById("tab1").onclick = e => SO(e, "tensors"), document.getElementById("tab2").onclick = e => SO(e, "vc"), document.getElementById("tab3").onclick = e => SO(e, "actions"), SO(new Event("dummy"), "tensors")
					}(r), (null === (o = this.options) || void 0 === o ? void 0 : o.backendUrl) && (a.defaultURL = this.options.backendUrl), ZE.initialize(r, ((e, t, n, r) => {
						var s, i, o;
						(null === (s = this.options) || void 0 === s ? void 0 : s.linkCredsUrl) ? fetch(`${this.options.linkCredsUrl}${t}`).then((e => {
							e.json().then((e => {
								r("aws" == n ? {
									accessKeyId: e.aws_access_key_id,
									secretAccessKey: e.aws_secret_access_key,
									sessionToken: e.aws_session_token,
									region: e.aws_region
								} : "azure" == n ? {
									blobSasToken: e.sas_token,
									accountName: e.account_name
								} : e.creds)
							}))
						})): a.instance.storage_creds(e, t, null !== (o = null === (i = this.options) || void 0 === i ? void 0 : i.token) && void 0 !== o ? o : "").then((e => {
							"aws" == n ? r({
								accessKeyId: e.creds.access_key,
								secretAccessKey: e.creds.secret_key,
								sessionToken: e.creds.token,
								region: e.creds.region
							}) : "http" == n ? r(e.creds) : "azure" == n ? r({
								blobSasToken: e.creds.sas_token,
								accountName: e.creds.account_name
							}) : "gcs" == n && r({
								oauthToken: e.creds.oauth_token,
								accessToken: e.creds.gcs_oauth_token
							})
						}))
					}), ((e, t, n, r) => {
						var s, i;
						a.instance.presigned_url(e, t, n, null !== (i = null === (s = this.options) || void 0 === s ? void 0 : s.token) && void 0 !== i ? i : "").then((e => {
							r.call(e)
						}))
					}), (() => {
						xO.Anchor = ZE.anchorType(), this.run(e, t, n, r, s)
					}), yO, this.config)
				}))
			}
			run(e, t = null, n = null, r, i) {
				var a, o, l, c, d, m, u, p;
				return gO(this, void 0, void 0, (function*() {
					(null === (a = this.options) || void 0 === a ? void 0 : a.token) && ZE.registerToken(this.options.token), yield mO.initialize(), (null === (o = this.options) || void 0 === o ? void 0 : o.backendUrl) && (mO.Client.endpoint = this.options.backendUrl);
					var h, g = void 0;
					try {
						const t = new URL(e),
							n = new URLSearchParams(t.search);
						var y = {};
						n.has("token") ? y = {
							token: n.get("token")
						} : (null === (l = this.options) || void 0 === l ? void 0 : l.token) && (y = {
							token: this.options.token
						}), t.search = "", g = yield mO.openReadOnly(t.toString(), y)
					} catch (e) {}
					g ? (this.dataset_ = nz.fromV4Dataset(g), NO = "") : s(e) ? this.dataset_ = yield nz.hubDataset(e, this.options.token, JE.lightweight): (h = e).startsWith("gcs://") || h.startsWith("gs://") ? (null === (c = this.options) || void 0 === c ? void 0 : c.creds) ? this.dataset_ = yield nz.cloudDataset(e, "gcs", {
						oauthToken: this.options.creds
					}, "", JE.lightweight): this.dataset_ = yield nz.cloudDataset(e, "gcs", {
						oauthToken: "",
						accessToken: ""
					}, "", JE.lightweight): ! function(e) {
						return e.startsWith("azure://") || e.startsWith("az://")
					}(e) ? ! function(e) {
						return e.startsWith("s3://")
					}(e) ? this.dataset_ = yield nz.cloudDataset(e, "http", void 0, "", JE.lightweight): this.options.creds ? this.dataset_ = yield nz.cloudDataset(e, "aws", {
						credentials: {
							accessKeyId: this.options.creds.aws_access_key_id,
							secretAccessKey: this.options.creds.aws_secret_access_key,
							sessionToken: this.options.creds.aws_session_token
						},
						region: this.options.creds.aws_region,
						endpoint: this.options.creds.endpoint_url
					}, "", JE.lightweight): this.dataset_ = yield nz.cloudDataset(e, "aws", {
						credentials: {},
						region: "us-east-1"
					}, "", JE.lightweight): (null === (d = this.options) || void 0 === d ? void 0 : d.creds) ? this.dataset_ = yield nz.cloudDataset(e, "azure", {
						blobSasToken: this.options.creds.sas_token,
						accountName: this.options.creds.account_name
					}, "", JE.lightweight): this.dataset_ = yield nz.cloudDataset(e, "azure", {
						blobSasToken: "",
						accountName: ""
					}, "", JE.lightweight), NO || (NO = null !== (u = null === (m = this.dataset_.versionControl.find((e => "main" == e.name))) || void 0 === m ? void 0 : m.commits[0].commit) && void 0 !== u ? u : ""), this.engine = ZE.datasetEngine(this.dataset_.core, this.config, null === (p = this.options) || void 0 === p ? void 0 : p.datasetConfig), this.engine.checkout(NO, (() => {}), (() => {
						var n;
						const a = this.engine.dataset;
						if (null == a) return void console.error("dataset is undefined");
						this.dataset_.core = a;
						const o = () => {
							var n, a, o, l, c, d, m;
							s(e) && ((null === (n = this.options) || void 0 === n ? void 0 : n.backlink) || void 0 === (null === (a = this.options) || void 0 === a ? void 0 : a.backlink)) && function(e, t, n, r) {
								let s = document.createElement("a");
								s.title = "Open in Activeloop", s.style.position = "absolute", s.style.left = "10px", s.style.top = "10px", s.style.width = "195px", s.style.height = "40px", s.style.padding = "2px";
								let i = document.createElement("img");
								i.src = "https://app.activeloop.ai/visualizer/al.png", i.width = 195, i.height = 40, s.appendChild(i), s.onclick = n => {
									n.preventDefault();
									const s = r.getState();
									window.open(`https://app.activeloop.ai/${e.substring(6)}/${null!=t?t:""}?vs=${s}`)
								}, n.appendChild(s)
							}(e, t, r, this.engine), (null === (o = this.options) || void 0 === o ? void 0 : o.controlPanel) && this.fillVersionsList(), (null === (l = this.options) || void 0 === l ? void 0 : l.gridMode) && this.engine.setGridMode(this.options.gridMode, (() => {})), this.engine.onDblClick = e => {}, (null === (c = this.options) || void 0 === c ? void 0 : c.singleSampleView) && function(e) {
								const t = n => {
									let r;
									if ("Enter" == n.key && null == r) {
										e.pause();
										let n = ZE.canvas.onclick,
											s = ZE.canvas.onmousedown,
											i = ZE.canvas.onmouseup,
											a = ZE.canvas.onmousemove,
											o = window.onkeydown;
										r = new sz(e.singleSampleView(), e.getPoiIndex(), (l => {
											window.onkeydown = t, r = void 0, ZE.canvas.onclick = n, ZE.canvas.onmousedown = s, ZE.canvas.onmouseup = i, ZE.canvas.onmousemove = a, window.onkeydown = o, e.play()
										}))
									}
								};
								window.onkeydown = t
							}(this.engine), (null === (d = this.options) || void 0 === d ? void 0 : d.controlPanel) && this.fillTensorsList(), null === (m = this.engine) || void 0 === m || m.layersInfo, i()
						};
						(null === (n = this.options) || void 0 === n ? void 0 : n.queryString) ? this.dataset_.query(this.options.queryString).then((e => {
							null !== e && (this.engine.dataset = e.core)
						})).finally((() => {
							o()
						})): o()
					}), null != n ? n : "")
				}))
			}
			fillTensorsList() {
				const e = this.engine.layersInfo,
					t = document.getElementById("tensorsSelect"),
					n = document.getElementById("visibleCheckbox"),
					r = document.getElementById("transparencySlider");
				t.innerHTML = "";
				let s = (e, n) => {
					((e, t) => {
						const n = document.createElement("option");
						n.innerHTML = t, e.appendChild(n)
					})(t, e);
					const r = 0 == e.length ? e : e + "/";
					for (let e = 0; e < n.length; ++e) s(r + n[e].name, n[e].children)
				};
				const i = this.engine.commonPrefix.length;
				s(e.name.substring(i), e.children), t.onchange = () => {
					const e = this.engine.nodeInfo(t.value);
					n.checked = !e.hidden, n.disabled = !e.enabled, r.value = String(100 * (1 - e.opacity)), r.disabled = !e.enabled
				}, t.onchange(new Event("dummy")), n.onchange = () => {
					this.engine.setNodeHidden(t.value, !n.checked)
				}, r.onchange = () => {
					this.engine.setNodeOpacity(t.value, 1 - Number(r.value) / 100)
				};
				const a = document.getElementById("sliceInput");
				a.max = String(this.engine.samplesCount - 1), a.min = "0", a.onkeydown = e => {
					"Enter" == e.key && this.engine.goTo(Math.min(this.engine.samplesCount - 1, Number(a.value)))
				};
				const o = document.getElementById("queryInput");
				o.onkeydown = e => {
					if ("Enter" == e.key) {
						const e = this.engine.dataset;
						if (null == e) return void console.error("dataset is undefined.");
						e.query(o.value, ((e, t) => {
							0 != t.length ? console.log(t) : this.engine.dataset = e
						}))
					}
				};
				const l = document.getElementById("modeSelect");
				l.onchange = () => {
					this.engine.setGridMode(l.value, (() => {}))
				};
				const c = document.getElementById("darkModeCheckbox");
				c.onchange = () => {
					this.engine.darkMode = c.checked
				}
			}
			fillVersionsList() {
				const e = this.engine.dataset;
				if (null == e) return;
				const t = document.getElementById("versionSelect"),
					n = e.versionControlInfo;
				let r = 0,
					s = 0;
				for (let e = 0; e < n.length; ++e) {
					const i = document.createElement("optgroup");
					i.label = n[e].name;
					for (let t = 0; t < n[e].commits.length; ++t) {
						if (!n[e].headHasChanges && 0 == t) continue;
						const a = document.createElement("option");
						a.id = String(e) + ":" + String(t), n[e].commits[t].commit == NO && (r = s), a.innerHTML = n[e].commits[t].commit, s++, i.appendChild(a)
					}
					t.appendChild(i)
				}
				t.selectedIndex = r, t.onchange = () => {
					const e = t.selectedOptions[0].id.split(":"),
						r = Number(e[0]),
						s = Number(e[1]),
						i = document.getElementById("messagePlace"),
						a = document.getElementById("authorPlace"),
						o = document.getElementById("timestampPlace"),
						l = n[r].commits[s].time;
					0 != l ? (i.innerHTML = n[r].commits[s].message, a.innerHTML = n[r].commits[s].author, o.innerHTML = new Date(1e3 * l).toDateString()) : (i.innerHTML = "Uncommitted HEAD", o.innerHTML = "", a.innerHTML = ""), NO = t.value, this.engine.checkout(t.value, (() => {}), (() => {
						this.fillTensorsList()
					}))
				}
			}
		}
		xO.Anchor = qE;
		let NO = null;

		function SO(e, t) {
			var n, r, s;
			for (r = document.getElementsByClassName("tabcontent"), n = 0; n < r.length; n++) r[n].style.display = "none";
			for (s = document.getElementsByClassName("tablinks"), n = 0; n < s.length; n++) s[n].className = s[n].className.replace(" active", "");
			document.getElementById(t).style.display = "block";
			let i = e.currentTarget;
			i && (i.className += " active")
		}
	})(), window.vis = r.default
})();