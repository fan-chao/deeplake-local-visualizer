// Version: 4.1.8

var VisualizerCore = (() => {
	var _scriptName = import.meta.url;

	return (
		async function(moduleArg = {}) {
			var moduleRtn;

			var Module = moduleArg;
			var readyPromiseResolve, readyPromiseReject;
			var readyPromise = new Promise((resolve, reject) => {
				readyPromiseResolve = resolve;
				readyPromiseReject = reject
			});
			var ENVIRONMENT_IS_WEB = typeof window == "object";
			var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
			var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
			if (ENVIRONMENT_IS_NODE) {
				const {
					createRequire: createRequire
				} = await import("module");
				var require = createRequire(import.meta.url)
			}
			var moduleOverrides = Object.assign({}, Module);
			var arguments_ = [];
			var thisProgram = "./this.program";
			var quit_ = (status, toThrow) => {
				throw toThrow
			};
			var scriptDirectory = "";

			function locateFile(path) {
				if (Module["locateFile"]) {
					return Module["locateFile"](path, scriptDirectory)
				}
				return scriptDirectory + path
			}
			var readAsync, readBinary;
			if (ENVIRONMENT_IS_NODE) {
				var fs = require("fs");
				var nodePath = require("path");
				scriptDirectory = require("url").fileURLToPath(new URL("./", import.meta.url));
				readBinary = filename => {
					filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
					var ret = fs.readFileSync(filename);
					return ret
				};
				readAsync = (filename, binary = true) => {
					filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
					return new Promise((resolve, reject) => {
						fs.readFile(filename, binary ? undefined : "utf8", (err, data) => {
							if (err) reject(err);
							else resolve(binary ? data.buffer : data)
						})
					})
				};
				if (!Module["thisProgram"] && process.argv.length > 1) {
					thisProgram = process.argv[1].replace(/\\/g, "/")
				}
				arguments_ = process.argv.slice(2);
				quit_ = (status, toThrow) => {
					process.exitCode = status;
					throw toThrow
				}
			} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
				if (ENVIRONMENT_IS_WORKER) {
					scriptDirectory = self.location.href
				} else if (typeof document != "undefined" && document.currentScript) {
					scriptDirectory = document.currentScript.src
				}
				if (_scriptName) {
					scriptDirectory = _scriptName
				}
				if (scriptDirectory.startsWith("blob:")) {
					scriptDirectory = ""
				} else {
					scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1)
				} {
					if (ENVIRONMENT_IS_WORKER) {
						readBinary = url => {
							var xhr = new XMLHttpRequest;
							xhr.open("GET", url, false);
							xhr.responseType = "arraybuffer";
							xhr.send(null);
							return new Uint8Array(xhr.response)
						}
					}
					readAsync = url => {
						if (isFileURI(url)) {
							return new Promise((reject, resolve) => {
								var xhr = new XMLHttpRequest;
								xhr.open("GET", url, true);
								xhr.responseType = "arraybuffer";
								xhr.onload = () => {
									if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
										resolve(xhr.response)
									}
									reject(xhr.status)
								};
								xhr.onerror = reject;
								xhr.send(null)
							})
						}
						return fetch(url, {
							credentials: "same-origin"
						}).then(response => {
							if (response.ok) {
								return response.arrayBuffer()
							}
							return Promise.reject(new Error(response.status + " : " + response.url))
						})
					}
				}
			} else {}
			var out = Module["print"] || console.log.bind(console);
			var err = Module["printErr"] || console.error.bind(console);
			Object.assign(Module, moduleOverrides);
			moduleOverrides = null;
			if (Module["arguments"]) arguments_ = Module["arguments"];
			if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
			if (Module["quit"]) quit_ = Module["quit"];
			var wasmBinary;
			if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
			var wasmMemory;
			var ABORT = false;
			var EXITSTATUS;

			function assert(condition, text) {
				if (!condition) {
					abort(text)
				}
			}
			var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAP64, HEAPU64, HEAPF64;

			function updateMemoryViews() {
				var b = wasmMemory.buffer;
				Module["HEAP8"] = HEAP8 = new Int8Array(b);
				Module["HEAP16"] = HEAP16 = new Int16Array(b);
				Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
				Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
				Module["HEAP32"] = HEAP32 = new Int32Array(b);
				Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
				Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
				Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
				Module["HEAP64"] = HEAP64 = new BigInt64Array(b);
				Module["HEAPU64"] = HEAPU64 = new BigUint64Array(b)
			}
			var __ATPRERUN__ = [];
			var __ATINIT__ = [];
			var __ATPOSTRUN__ = [];
			var runtimeInitialized = false;

			function preRun() {
				if (Module["preRun"]) {
					if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
					while (Module["preRun"].length) {
						addOnPreRun(Module["preRun"].shift())
					}
				}
				callRuntimeCallbacks(__ATPRERUN__)
			}

			function initRuntime() {
				runtimeInitialized = true;
				SOCKFS.root = FS.mount(SOCKFS, {}, null);
				if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
				FS.ignorePermissions = false;
				TTY.init();
				callRuntimeCallbacks(__ATINIT__)
			}

			function postRun() {
				if (Module["postRun"]) {
					if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
					while (Module["postRun"].length) {
						addOnPostRun(Module["postRun"].shift())
					}
				}
				callRuntimeCallbacks(__ATPOSTRUN__)
			}

			function addOnPreRun(cb) {
				__ATPRERUN__.unshift(cb)
			}

			function addOnInit(cb) {
				__ATINIT__.unshift(cb)
			}

			function addOnPostRun(cb) {
				__ATPOSTRUN__.unshift(cb)
			}
			var runDependencies = 0;
			var runDependencyWatcher = null;
			var dependenciesFulfilled = null;

			function getUniqueRunDependency(id) {
				return id
			}

			function addRunDependency(id) {
				runDependencies++;
				Module["monitorRunDependencies"]?.(runDependencies)
			}

			function removeRunDependency(id) {
				runDependencies--;
				Module["monitorRunDependencies"]?.(runDependencies);
				if (runDependencies == 0) {
					if (runDependencyWatcher !== null) {
						clearInterval(runDependencyWatcher);
						runDependencyWatcher = null
					}
					if (dependenciesFulfilled) {
						var callback = dependenciesFulfilled;
						dependenciesFulfilled = null;
						callback()
					}
				}
			}

			function abort(what) {
				Module["onAbort"]?.(what);
				what = "Aborted(" + what + ")";
				err(what);
				ABORT = true;
				EXITSTATUS = 1;
				what += ". Build with -sASSERTIONS for more info.";
				var e = new WebAssembly.RuntimeError(what);
				readyPromiseReject(e);
				throw e
			}
			var dataURIPrefix = "data:application/octet-stream;base64,";
			var isDataURI = filename => filename.startsWith(dataURIPrefix);
			var isFileURI = filename => filename.startsWith("file://");

			function findWasmBinary() {
				if (Module["locateFile"]) {
					var f = "api_st.wasm";
					if (!isDataURI(f)) {
						return locateFile(f)
					}
					return f
				}
				return new URL("api_st.wasm", import.meta.url).href
			}
			var wasmBinaryFile;

			function getBinarySync(file) {
				if (file == wasmBinaryFile && wasmBinary) {
					return new Uint8Array(wasmBinary)
				}
				if (readBinary) {
					return readBinary(file)
				}
				throw "both async and sync fetching of the wasm failed"
			}

			function getBinaryPromise(binaryFile) {
				if (!wasmBinary) {
					return readAsync(binaryFile).then(response => new Uint8Array(response), () => getBinarySync(binaryFile))
				}
				return Promise.resolve().then(() => getBinarySync(binaryFile))
			}

			function instantiateArrayBuffer(binaryFile, imports, receiver) {
				return getBinaryPromise(binaryFile).then(binary => WebAssembly.instantiate(binary, imports)).then(receiver, reason => {
					err(`failed to asynchronously prepare wasm: ${reason}`);
					abort(reason)
				})
			}

			function instantiateAsync(binary, binaryFile, imports, callback) {
				if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
					return fetch(binaryFile, {
						credentials: "same-origin"
					}).then(response => {
						var result = WebAssembly.instantiateStreaming(response, imports);
						return result.then(callback, function(reason) {
							err(`wasm streaming compile failed: ${reason}`);
							err("falling back to ArrayBuffer instantiation");
							return instantiateArrayBuffer(binaryFile, imports, callback)
						})
					})
				}
				return instantiateArrayBuffer(binaryFile, imports, callback)
			}

			function getWasmImports() {
				return {
					a: wasmImports
				}
			}

			function createWasm() {
				var info = getWasmImports();

				function receiveInstance(instance, module) {
					wasmExports = instance.exports;
					wasmExports = Asyncify.instrumentWasmExports(wasmExports);
					wasmExports = applySignatureConversions(wasmExports);
					wasmMemory = wasmExports["jf"];
					updateMemoryViews();
					wasmTable = wasmExports["pf"];
					addOnInit(wasmExports["kf"]);
					removeRunDependency("wasm-instantiate");
					return wasmExports
				}
				addRunDependency("wasm-instantiate");

				function receiveInstantiationResult(result) {
					receiveInstance(result["instance"])
				}
				if (Module["instantiateWasm"]) {
					try {
						return Module["instantiateWasm"](info, receiveInstance)
					} catch (e) {
						err(`Module.instantiateWasm callback failed with error: ${e}`);
						readyPromiseReject(e)
					}
				}
				if (!wasmBinaryFile) wasmBinaryFile = findWasmBinary();
				instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
				return {}
			}

			function mergeBoxLayersObjects(o) {
				let objects = Emval.toValue(o);
				if (objects.length === 0) {
					return Emval.toHandle({})
				}
				let children = [];
				for (const o of objects) {
					if (o.hasOwnProperty("children")) {
						for (const c of o.children) {
							let found = children.find(function(e) {
								return e["name"] === c["name"]
							});
							if (!found) {
								children.push(c)
							}
						}
					}
				}
				let r = objects[0];
				r.children = children;
				return Emval.toHandle(r)
			}

			function registerResizeCallback(element, visualizer, pixel_ratio) {
				let c = document.getElementById(UTF8ToString(element));
				var elementHeight = c.clientHeight,
					elementWidth = c.clientWidth;
				if (Module.canvasResizeChecker) {
					clearInterval(Module.canvasResizeChecker)
				}
				Module.canvasResizeCheckerListener = visualizer;
				Module.canvasResizeChecker = setInterval(function() {
					if (Module.canvasResizeCheckerListener != visualizer) {
						throw new Error("invalid call on visualizer: " + String(Module.canvasResizeCheckerListener));
						return
					}
					if (c.clientHeight !== elementHeight || c.clientWidth !== elementWidth) {
						elementHeight = c.clientHeight;
						elementWidth = c.clientWidth;
						c.width = pixel_ratio * elementWidth;
						c.height = pixel_ratio * elementHeight;
						Module.resizeCallback(visualizer)
					}
				}, 40)
			}

			function unregisterResizeCallback() {
				clearInterval(Module.canvasResizeChecker);
				Module.canvasResizeChecker = undefined;
				Module.canvasResizeCheckerListener = 0
			}

			function currentResizeCallbackListener() {
				if (Module.canvasResizeChecker) {
					if (Module.canvasResizeCheckerListener) {
						return Module.canvasResizeCheckerListener
					} else {
						console.log("canvasResizeCheckerListener id is undefined")
					}
				}
				return 0
			}

			function registerWindowCallbacks(interaction_handler) {
				window.onkeydown = evt => {
					Module.keyDownCallback(evt.key, interaction_handler)
				};
				window.onkeyup = evt => {
					Module.keyUpCallback(evt.key, interaction_handler)
				}
			}

			function unregisterWindowCallbacks() {
				window.onkeydown = null;
				window.onkeyup = null
			}

			function registerCallbacks(element, interaction_handler) {
				let c = document.getElementById(UTF8ToString(element));
				if (!c) {
					console.log("Element not found: " + element);
					return
				}
				c.oncontextmenu = evt => {
					evt.preventDefault();
					Module.contextmenuCallback(c.id, interaction_handler)
				};
				c.onclick = evt => {
					Module.clickCallback(c.id, interaction_handler)
				};
				c.ondblclick = evt => {
					Module.dblClickCallback(c.id, interaction_handler)
				};
				c.onmousedown = evt => {
					evt.preventDefault();
					Module.mouseDownCallback(c.id, evt.button, interaction_handler)
				};
				c.onmouseup = evt => {
					evt.preventDefault();
					Module.mouseUpCallback(c.id, evt.button, interaction_handler)
				};
				c.onmousemove = evt => {
					evt.preventDefault();
					let r = c.getBoundingClientRect();
					Module.mouseMoveCallback(c.id, evt.clientX - r.left, evt.clientY - r.top, interaction_handler)
				};
				c.onmouseleave = evt => {
					evt.preventDefault();
					Module.mouseLeaveCallback(c.id, interaction_handler)
				};
				c.onwheel = evt => {
					evt.preventDefault();
					Module.wheelCallback(c.id, evt.deltaX, evt.deltaY, evt.ctrlKey, interaction_handler)
				}
			}

			function unregisterCallbacks(element) {
				let c = document.getElementById(UTF8ToString(element));
				if (!c) {
					console.log("Element not found: " + element);
					return
				}
				c.oncontextmenu = null;
				c.onclick = null;
				c.ondblclick = null;
				c.onmousedown = null;
				c.onmouseup = null;
				c.onmousemove = null;
				c.onmouseleave = null;
				c.onwheel = null
			}

			function get_canvas_pixel_ratio(element) {
				let c = document.getElementById(UTF8ToString(element));
				return c.width / c.parentElement.offsetWidth
			}

			function registerResizeCallbackSampleView(element, ssv, pixel_ratio) {
				let c = document.getElementById(UTF8ToString(element));
				var elementHeight = c.clientHeight,
					elementWidth = c.clientWidth;
				if (Module.canvasResizeCheckerSampleView) {
					clearInterval(Module.canvasResizeCheckerSampleView)
				}
				Module.canvasResizeCheckerListenerSampleView = ssv;
				Module.canvasResizeCheckerSampleView = setInterval(function() {
					if (Module.canvasResizeCheckerListenerSampleView != ssv) {
						throw new Error("invalid call on ssv: " + String(Module.canvasResizeCheckerListenerSampleView));
						return
					}
					if (c.clientHeight !== elementHeight || c.clientWidth !== elementWidth) {
						elementHeight = c.clientHeight;
						elementWidth = c.clientWidth;
						c.width = pixel_ratio * elementWidth;
						c.height = pixel_ratio * elementHeight;
						Module.resizeCallbackSampleView(ssv)
					}
				}, 40)
			}

			function unregisterResizeCallbackSampleView() {
				clearInterval(Module.canvasResizeCheckerSampleView);
				Module.canvasResizeCheckerListenerSampleView = 0;
				Module.canvasResizeCheckerSampleView = undefined
			}

			function currentResizeCallbackListenerSampleView() {
				if (Module.canvasResizeCheckerSampleView) {
					if (Module.canvasResizeCheckerListenerSampleView) {
						return Module.canvasResizeCheckerListenerSampleView
					} else {
						console.log("canvasResizeCheckerListener id is undefined")
					}
				}
				return 0
			}

			function console_debug(message) {
				console.debug(UTF8ToString(message))
			}

			function console_info(message) {
				console.info(UTF8ToString(message))
			}

			function console_warn(message) {
				console.warn(UTF8ToString(message))
			}

			function console_error(message) {
				console.error(UTF8ToString(message))
			}

			function create_audio_context() {
				Module.initializeAudioContext(new(window.AudioContext || window.webkitAudioContext))
			}

			function get_audio_data(index) {
				var audioCtx = Module.getAudioContext();
				var audioData = Module.getAudioDataBuffer(index);
				let res = new Uint8Array(audioData.byteLength);
				res.set(audioData);
				audioCtx.decodeAudioData(res.buffer).then(function(buffer) {
					let ss = buffer.getChannelData(0);
					let bb = Module.provideWaveformBuffer(index, buffer.length);
					bb.set(ss);
					Module.completeAudioDataRequest(index, buffer.duration)
				})
			}

			function create_audio_buffer(index) {
				var audioCtx = Module.getAudioContext();
				var audioData = Module.getAudioBuffer(index);
				let res = new Uint8Array(audioData.byteLength);
				res.set(audioData);
				audioCtx.decodeAudioData(res.buffer).then(function(buffer) {
					let e = Module.setJSAudioBuffer(index, buffer)
				})
			}

			function set_audio_playrate(index, rate) {
				try {
					const v = Module.getJSAudioBuffer(index);
					v.playbackRate = rate
				} catch (e) {}
			}

			function play_audio_from(index, offset) {
				var source = Module.getJSAudioSource(index);
				if (source != null) {
					source.disconnect();
					source.stop(0);
					return
				}
				var audioCtx = Module.getAudioContext();
				source = audioCtx.createBufferSource();
				source.buffer = Module.getJSAudioBuffer(index);
				source.connect(audioCtx.destination);
				Module.setJSAudioSource(index, source);
				source.onended = () => {
					Module.setJSAudioSource(index, null);
					Module.setStartTime(index, audioCtx.currentTime);
					Module.setStatePaused(index)
				};
				source.start(0, offset);
				Module.setStartTime(index, audioCtx.currentTime - offset)
			}

			function stop_playing(index, final) {
				var source = Module.getJSAudioSource(index);
				if (source != null) {
					if (!final) {
						source.onended = null
					}
					source.disconnect();
					source.stop(0);
					Module.setJSAudioSource(index, null)
				}
			}

			function playing_audio_time(index) {
				var audioCtx = Module.getAudioContext();
				var s = Module.getStartTime(index);
				return audioCtx.currentTime - s
			}

			function get_video_data(index, format) {
				const videoData = Module.getVideoDataBuffer(index);
				let res = new Uint8Array(videoData.byteLength);
				res.set(videoData);
				const v = document.createElement("video");
				const is_link = Module.videoDataBufferIsLink(index);
				if (is_link === 1) {
					var link = new TextDecoder("utf-8").decode(res.buffer);
					v.crossOrigin = "anonymous";
					v.src = link
				} else {
					var blob = new Blob([res.buffer], {
						type: UTF8ToString(format)
					});
					v.src = URL.createObjectURL(blob)
				}
				let captured = false;
				const id = v.requestVideoFrameCallback(() => {
					if (captured) {
						return
					}
					const d = v.duration;
					const gl = Module.GL.currentContext.GLctx;
					const texture = Module.GL.textures[Module.getVideoThumbnailTexture(index, v.videoWidth, v.videoHeight)];
					gl.bindTexture(gl.TEXTURE_2D, texture);
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, v);
					gl.finish();
					v.src = "";
					Module.completeVideoDataRequest(index, d);
					captured = true;
					v.cancelVideoFrameCallback(id)
				});
				setTimeout(() => {
					if (!captured) {
						Module.completeVideoDataRequest(index, 0);
						captured = true;
						v.cancelVideoFrameCallback(id)
					}
				}, 6e4)
			}

			function create_video_element(index, format) {
				const videoData = Module.getVideoBuffer(index);
				let res = new Uint8Array(videoData.byteLength);
				res.set(videoData);
				const v = document.createElement("video");
				const is_link = Module.videoBufferIsLink(index);
				if (is_link === 1) {
					var link = new TextDecoder("utf-8").decode(res.buffer);
					v.crossOrigin = "anonymous";
					v.src = link
				} else {
					var blob = new Blob([res.buffer], {
						type: UTF8ToString(format)
					});
					v.src = URL.createObjectURL(blob)
				}
				const update_texture = () => {
					Module.videoRenderingStarted(index);
					const gl = Module.GL.currentContext.GLctx;
					const texture = Module.GL.textures[Module.getVideoTexture(index)];
					gl.bindTexture(gl.TEXTURE_2D, texture);
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, v);
					Module.updateVideoTexture(index, v.videoWidth, v.videoHeight);
					v.requestVideoFrameCallback(update_texture)
				};
				v.requestVideoFrameCallback(update_texture);
				v.onended = () => {
					Module.setVideoStartTime(index, v.currentTime);
					Module.setVideoStatePaused(index)
				};
				Module.setJSVideoElement(index, v)
			}

			function play_video_from(index, offset) {
				const v = Module.getJSVideoElement(index);
				v.currentTime = offset;
				v.play()
			}

			function stop_playing_video(index) {
				const v = Module.getJSVideoElement(index);
				v.pause()
			}

			function playing_video_time(index) {
				const v = Module.getJSVideoElement(index);
				return v.currentTime
			}

			function set_video_playrate(index, rate) {
				try {
					const v = Module.getJSVideoElement(index);
					v.playbackRate = rate
				} catch (e) {}
			}

			function get_request_fetch_api(ptr, index, url, method) {
				const u = UTF8ToString(url);
				fetch(u, {
					method: UTF8ToString(method),
					body: Module.getHttpClientBody(ptr, index),
					headers: Module.getHttpClientHeaders(ptr, index)
				}).then(r => {
					r.arrayBuffer().then(data => {
						const buf = Module.getHttpClientResponseBuffer(ptr, index, data.byteLength);
						buf.set(new Int8Array(data));
						Module.finishHttpClientRequest(ptr, index, r.status)
					}).catch(e => {
						Module.finishHttpClientRequest(ptr, index, 1e3)
					})
				}).catch(e => {
					Module.finishHttpClientRequest(ptr, index, 1e3)
				})
			}

			function ExitStatus(status) {
				this.name = "ExitStatus";
				this.message = `Program terminated with exit(${status})`;
				this.status = status
			}
			var callRuntimeCallbacks = callbacks => {
				while (callbacks.length > 0) {
					callbacks.shift()(Module)
				}
			};
			var noExitRuntime = Module["noExitRuntime"] || true;
			var stackRestore = val => __emscripten_stack_restore(val);
			var stackSave = () => _emscripten_stack_get_current();
			var MAX_INT53 = 9007199254740992;
			var MIN_INT53 = -9007199254740992;
			var bigintToI53Checked = num => num < MIN_INT53 || num > MAX_INT53 ? NaN : Number(num);
			var ___call_sighandler = function(fp, sig) {
				fp >>>= 0;
				return (a1 => dynCall_vi(fp, a1))(sig)
			};
			var exceptionCaught = [];
			var uncaughtExceptionCount = 0;

			function ___cxa_begin_catch(ptr) {
				ptr >>>= 0;
				var info = new ExceptionInfo(ptr);
				if (!info.get_caught()) {
					info.set_caught(true);
					uncaughtExceptionCount--
				}
				info.set_rethrown(false);
				exceptionCaught.push(info);
				___cxa_increment_exception_refcount(info.excPtr);
				return info.get_exception_ptr()
			}

			function ___cxa_current_primary_exception() {
				if (!exceptionCaught.length) {
					return 0
				}
				var info = exceptionCaught[exceptionCaught.length - 1];
				___cxa_increment_exception_refcount(info.excPtr);
				return info.excPtr
			}
			var exceptionLast = 0;
			var ___cxa_end_catch = () => {
				_setThrew(0, 0);
				var info = exceptionCaught.pop();
				___cxa_decrement_exception_refcount(info.excPtr);
				exceptionLast = 0
			};
			class ExceptionInfo {
				constructor(excPtr) {
					this.excPtr = excPtr;
					this.ptr = excPtr - 24
				}
				set_type(type) {
					HEAPU32[this.ptr + 4 >>> 2 >>> 0] = type
				}
				get_type() {
					return HEAPU32[this.ptr + 4 >>> 2 >>> 0]
				}
				set_destructor(destructor) {
					HEAPU32[this.ptr + 8 >>> 2 >>> 0] = destructor
				}
				get_destructor() {
					return HEAPU32[this.ptr + 8 >>> 2 >>> 0]
				}
				set_caught(caught) {
					caught = caught ? 1 : 0;
					HEAP8[this.ptr + 12 >>> 0] = caught
				}
				get_caught() {
					return HEAP8[this.ptr + 12 >>> 0] != 0
				}
				set_rethrown(rethrown) {
					rethrown = rethrown ? 1 : 0;
					HEAP8[this.ptr + 13 >>> 0] = rethrown
				}
				get_rethrown() {
					return HEAP8[this.ptr + 13 >>> 0] != 0
				}
				init(type, destructor) {
					this.set_adjusted_ptr(0);
					this.set_type(type);
					this.set_destructor(destructor)
				}
				set_adjusted_ptr(adjustedPtr) {
					HEAPU32[this.ptr + 16 >>> 2 >>> 0] = adjustedPtr
				}
				get_adjusted_ptr() {
					return HEAPU32[this.ptr + 16 >>> 2 >>> 0]
				}
				get_exception_ptr() {
					var isPointer = ___cxa_is_pointer_type(this.get_type());
					if (isPointer) {
						return HEAPU32[this.excPtr >>> 2 >>> 0]
					}
					var adjusted = this.get_adjusted_ptr();
					if (adjusted !== 0) return adjusted;
					return this.excPtr
				}
			}

			function ___resumeException(ptr) {
				ptr >>>= 0;
				if (!exceptionLast) {
					exceptionLast = ptr
				}
				throw exceptionLast
			}
			var setTempRet0 = val => __emscripten_tempret_set(val);
			var findMatchingCatch = args => {
				var thrown = exceptionLast;
				if (!thrown) {
					setTempRet0(0);
					return 0
				}
				var info = new ExceptionInfo(thrown);
				info.set_adjusted_ptr(thrown);
				var thrownType = info.get_type();
				if (!thrownType) {
					setTempRet0(0);
					return thrown
				}
				for (var caughtType of args) {
					if (caughtType === 0 || caughtType === thrownType) {
						break
					}
					var adjusted_ptr_addr = info.ptr + 16;
					if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
						setTempRet0(caughtType);
						return thrown
					}
				}
				setTempRet0(thrownType);
				return thrown
			};

			function ___cxa_find_matching_catch_2() {
				return findMatchingCatch([])
			}

			function ___cxa_find_matching_catch_3(arg0) {
				arg0 >>>= 0;
				return findMatchingCatch([arg0])
			}

			function ___cxa_find_matching_catch_4(arg0, arg1) {
				arg0 >>>= 0;
				arg1 >>>= 0;
				return findMatchingCatch([arg0, arg1])
			}

			function ___cxa_find_matching_catch_5(arg0, arg1, arg2) {
				arg0 >>>= 0;
				arg1 >>>= 0;
				arg2 >>>= 0;
				return findMatchingCatch([arg0, arg1, arg2])
			}

			function ___cxa_find_matching_catch_6(arg0, arg1, arg2, arg3) {
				arg0 >>>= 0;
				arg1 >>>= 0;
				arg2 >>>= 0;
				arg3 >>>= 0;
				return findMatchingCatch([arg0, arg1, arg2, arg3])
			}

			function ___cxa_find_matching_catch_7(arg0, arg1, arg2, arg3, arg4) {
				arg0 >>>= 0;
				arg1 >>>= 0;
				arg2 >>>= 0;
				arg3 >>>= 0;
				arg4 >>>= 0;
				return findMatchingCatch([arg0, arg1, arg2, arg3, arg4])
			}

			function ___cxa_get_exception_ptr(ptr) {
				ptr >>>= 0;
				var rtn = new ExceptionInfo(ptr).get_exception_ptr();
				return rtn
			}
			var ___cxa_rethrow = () => {
				var info = exceptionCaught.pop();
				if (!info) {
					abort("no exception to throw")
				}
				var ptr = info.excPtr;
				if (!info.get_rethrown()) {
					exceptionCaught.push(info);
					info.set_rethrown(true);
					info.set_caught(false);
					uncaughtExceptionCount++
				}
				exceptionLast = ptr;
				throw exceptionLast
			};

			function ___cxa_rethrow_primary_exception(ptr) {
				ptr >>>= 0;
				if (!ptr) return;
				var info = new ExceptionInfo(ptr);
				exceptionCaught.push(info);
				info.set_rethrown(true);
				___cxa_rethrow()
			}

			function ___cxa_throw(ptr, type, destructor) {
				ptr >>>= 0;
				type >>>= 0;
				destructor >>>= 0;
				var info = new ExceptionInfo(ptr);
				info.init(type, destructor);
				exceptionLast = ptr;
				uncaughtExceptionCount++;
				throw exceptionLast
			}
			var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;
			var initRandomFill = () => {
				if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
					return view => crypto.getRandomValues(view)
				} else if (ENVIRONMENT_IS_NODE) {
					try {
						var crypto_module = require("crypto");
						var randomFillSync = crypto_module["randomFillSync"];
						if (randomFillSync) {
							return view => crypto_module["randomFillSync"](view)
						}
						var randomBytes = crypto_module["randomBytes"];
						return view => (view.set(randomBytes(view.byteLength)), view)
					} catch (e) {}
				}
				abort("initRandomDevice")
			};
			var randomFill = view => (randomFill = initRandomFill())(view);
			var PATH = {
				isAbs: path => path.charAt(0) === "/",
				splitPath: filename => {
					var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
					return splitPathRe.exec(filename).slice(1)
				},
				normalizeArray: (parts, allowAboveRoot) => {
					var up = 0;
					for (var i = parts.length - 1; i >= 0; i--) {
						var last = parts[i];
						if (last === ".") {
							parts.splice(i, 1)
						} else if (last === "..") {
							parts.splice(i, 1);
							up++
						} else if (up) {
							parts.splice(i, 1);
							up--
						}
					}
					if (allowAboveRoot) {
						for (; up; up--) {
							parts.unshift("..")
						}
					}
					return parts
				},
				normalize: path => {
					var isAbsolute = PATH.isAbs(path),
						trailingSlash = path.substr(-1) === "/";
					path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
					if (!path && !isAbsolute) {
						path = "."
					}
					if (path && trailingSlash) {
						path += "/"
					}
					return (isAbsolute ? "/" : "") + path
				},
				dirname: path => {
					var result = PATH.splitPath(path),
						root = result[0],
						dir = result[1];
					if (!root && !dir) {
						return "."
					}
					if (dir) {
						dir = dir.substr(0, dir.length - 1)
					}
					return root + dir
				},
				basename: path => {
					if (path === "/") return "/";
					path = PATH.normalize(path);
					path = path.replace(/\/$/, "");
					var lastSlash = path.lastIndexOf("/");
					if (lastSlash === -1) return path;
					return path.substr(lastSlash + 1)
				},
				join: (...paths) => PATH.normalize(paths.join("/")),
				join2: (l, r) => PATH.normalize(l + "/" + r)
			};
			var PATH_FS = {
				resolve: (...args) => {
					var resolvedPath = "",
						resolvedAbsolute = false;
					for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
						var path = i >= 0 ? args[i] : FS.cwd();
						if (typeof path != "string") {
							throw new TypeError("Arguments to path.resolve must be strings")
						} else if (!path) {
							return ""
						}
						resolvedPath = path + "/" + resolvedPath;
						resolvedAbsolute = PATH.isAbs(path)
					}
					resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
					return (resolvedAbsolute ? "/" : "") + resolvedPath || "."
				},
				relative: (from, to) => {
					from = PATH_FS.resolve(from).substr(1);
					to = PATH_FS.resolve(to).substr(1);

					function trim(arr) {
						var start = 0;
						for (; start < arr.length; start++) {
							if (arr[start] !== "") break
						}
						var end = arr.length - 1;
						for (; end >= 0; end--) {
							if (arr[end] !== "") break
						}
						if (start > end) return [];
						return arr.slice(start, end - start + 1)
					}
					var fromParts = trim(from.split("/"));
					var toParts = trim(to.split("/"));
					var length = Math.min(fromParts.length, toParts.length);
					var samePartsLength = length;
					for (var i = 0; i < length; i++) {
						if (fromParts[i] !== toParts[i]) {
							samePartsLength = i;
							break
						}
					}
					var outputParts = [];
					for (var i = samePartsLength; i < fromParts.length; i++) {
						outputParts.push("..")
					}
					outputParts = outputParts.concat(toParts.slice(samePartsLength));
					return outputParts.join("/")
				}
			};
			var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
				idx >>>= 0;
				var endIdx = idx + maxBytesToRead;
				var str = "";
				while (!(idx >= endIdx)) {
					var u0 = heapOrArray[idx++];
					if (!u0) return str;
					if (!(u0 & 128)) {
						str += String.fromCharCode(u0);
						continue
					}
					var u1 = heapOrArray[idx++] & 63;
					if ((u0 & 224) == 192) {
						str += String.fromCharCode((u0 & 31) << 6 | u1);
						continue
					}
					var u2 = heapOrArray[idx++] & 63;
					if ((u0 & 240) == 224) {
						u0 = (u0 & 15) << 12 | u1 << 6 | u2
					} else {
						u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63
					}
					if (u0 < 65536) {
						str += String.fromCharCode(u0)
					} else {
						var ch = u0 - 65536;
						str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
					}
				}
				return str
			};
			var FS_stdin_getChar_buffer = [];
			var lengthBytesUTF8 = str => {
				var len = 0;
				for (var i = 0; i < str.length; ++i) {
					var c = str.charCodeAt(i);
					if (c <= 127) {
						len++
					} else if (c <= 2047) {
						len += 2
					} else if (c >= 55296 && c <= 57343) {
						len += 4;
						++i
					} else {
						len += 3
					}
				}
				return len
			};
			var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
				outIdx >>>= 0;
				if (!(maxBytesToWrite > 0)) return 0;
				var startIdx = outIdx;
				var endIdx = outIdx + maxBytesToWrite - 1;
				for (var i = 0; i < str.length; ++i) {
					var u = str.charCodeAt(i);
					if (u >= 55296 && u <= 57343) {
						var u1 = str.charCodeAt(++i);
						u = 65536 + ((u & 1023) << 10) | u1 & 1023
					}
					if (u <= 127) {
						if (outIdx >= endIdx) break;
						heap[outIdx++ >>> 0] = u
					} else if (u <= 2047) {
						if (outIdx + 1 >= endIdx) break;
						heap[outIdx++ >>> 0] = 192 | u >> 6;
						heap[outIdx++ >>> 0] = 128 | u & 63
					} else if (u <= 65535) {
						if (outIdx + 2 >= endIdx) break;
						heap[outIdx++ >>> 0] = 224 | u >> 12;
						heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
						heap[outIdx++ >>> 0] = 128 | u & 63
					} else {
						if (outIdx + 3 >= endIdx) break;
						heap[outIdx++ >>> 0] = 240 | u >> 18;
						heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
						heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
						heap[outIdx++ >>> 0] = 128 | u & 63
					}
				}
				heap[outIdx >>> 0] = 0;
				return outIdx - startIdx
			};

			function intArrayFromString(stringy, dontAddNull, length) {
				var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
				var u8array = new Array(len);
				var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
				if (dontAddNull) u8array.length = numBytesWritten;
				return u8array
			}
			var FS_stdin_getChar = () => {
				if (!FS_stdin_getChar_buffer.length) {
					var result = null;
					if (ENVIRONMENT_IS_NODE) {
						var BUFSIZE = 256;
						var buf = Buffer.alloc(BUFSIZE);
						var bytesRead = 0;
						var fd = process.stdin.fd;
						try {
							bytesRead = fs.readSync(fd, buf, 0, BUFSIZE)
						} catch (e) {
							if (e.toString().includes("EOF")) bytesRead = 0;
							else throw e
						}
						if (bytesRead > 0) {
							result = buf.slice(0, bytesRead).toString("utf-8")
						}
					} else if (typeof window != "undefined" && typeof window.prompt == "function") {
						result = window.prompt("Input: ");
						if (result !== null) {
							result += "\n"
						}
					} else {}
					if (!result) {
						return null
					}
					FS_stdin_getChar_buffer = intArrayFromString(result, true)
				}
				return FS_stdin_getChar_buffer.shift()
			};
			var TTY = {
				ttys: [],
				init() {},
				shutdown() {},
				register(dev, ops) {
					TTY.ttys[dev] = {
						input: [],
						output: [],
						ops: ops
					};
					FS.registerDevice(dev, TTY.stream_ops)
				},
				stream_ops: {
					open(stream) {
						var tty = TTY.ttys[stream.node.rdev];
						if (!tty) {
							throw new FS.ErrnoError(43)
						}
						stream.tty = tty;
						stream.seekable = false
					},
					close(stream) {
						stream.tty.ops.fsync(stream.tty)
					},
					fsync(stream) {
						stream.tty.ops.fsync(stream.tty)
					},
					read(stream, buffer, offset, length, pos) {
						if (!stream.tty || !stream.tty.ops.get_char) {
							throw new FS.ErrnoError(60)
						}
						var bytesRead = 0;
						for (var i = 0; i < length; i++) {
							var result;
							try {
								result = stream.tty.ops.get_char(stream.tty)
							} catch (e) {
								throw new FS.ErrnoError(29)
							}
							if (result === undefined && bytesRead === 0) {
								throw new FS.ErrnoError(6)
							}
							if (result === null || result === undefined) break;
							bytesRead++;
							buffer[offset + i] = result
						}
						if (bytesRead) {
							stream.node.timestamp = Date.now()
						}
						return bytesRead
					},
					write(stream, buffer, offset, length, pos) {
						if (!stream.tty || !stream.tty.ops.put_char) {
							throw new FS.ErrnoError(60)
						}
						try {
							for (var i = 0; i < length; i++) {
								stream.tty.ops.put_char(stream.tty, buffer[offset + i])
							}
						} catch (e) {
							throw new FS.ErrnoError(29)
						}
						if (length) {
							stream.node.timestamp = Date.now()
						}
						return i
					}
				},
				default_tty_ops: {
					get_char(tty) {
						return FS_stdin_getChar()
					},
					put_char(tty, val) {
						if (val === null || val === 10) {
							out(UTF8ArrayToString(tty.output, 0));
							tty.output = []
						} else {
							if (val != 0) tty.output.push(val)
						}
					},
					fsync(tty) {
						if (tty.output && tty.output.length > 0) {
							out(UTF8ArrayToString(tty.output, 0));
							tty.output = []
						}
					},
					ioctl_tcgets(tty) {
						return {
							c_iflag: 25856,
							c_oflag: 5,
							c_cflag: 191,
							c_lflag: 35387,
							c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
						}
					},
					ioctl_tcsets(tty, optional_actions, data) {
						return 0
					},
					ioctl_tiocgwinsz(tty) {
						return [24, 80]
					}
				},
				default_tty1_ops: {
					put_char(tty, val) {
						if (val === null || val === 10) {
							err(UTF8ArrayToString(tty.output, 0));
							tty.output = []
						} else {
							if (val != 0) tty.output.push(val)
						}
					},
					fsync(tty) {
						if (tty.output && tty.output.length > 0) {
							err(UTF8ArrayToString(tty.output, 0));
							tty.output = []
						}
					}
				}
			};
			var zeroMemory = (address, size) => {
				HEAPU8.fill(0, address, address + size);
				return address
			};
			var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
			var mmapAlloc = size => {
				size = alignMemory(size, 65536);
				var ptr = _emscripten_builtin_memalign(65536, size);
				if (!ptr) return 0;
				return zeroMemory(ptr, size)
			};
			var MEMFS = {
				ops_table: null,
				mount(mount) {
					return MEMFS.createNode(null, "/", 16384 | 511, 0)
				},
				createNode(parent, name, mode, dev) {
					if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
						throw new FS.ErrnoError(63)
					}
					MEMFS.ops_table ||= {
						dir: {
							node: {
								getattr: MEMFS.node_ops.getattr,
								setattr: MEMFS.node_ops.setattr,
								lookup: MEMFS.node_ops.lookup,
								mknod: MEMFS.node_ops.mknod,
								rename: MEMFS.node_ops.rename,
								unlink: MEMFS.node_ops.unlink,
								rmdir: MEMFS.node_ops.rmdir,
								readdir: MEMFS.node_ops.readdir,
								symlink: MEMFS.node_ops.symlink
							},
							stream: {
								llseek: MEMFS.stream_ops.llseek
							}
						},
						file: {
							node: {
								getattr: MEMFS.node_ops.getattr,
								setattr: MEMFS.node_ops.setattr
							},
							stream: {
								llseek: MEMFS.stream_ops.llseek,
								read: MEMFS.stream_ops.read,
								write: MEMFS.stream_ops.write,
								allocate: MEMFS.stream_ops.allocate,
								mmap: MEMFS.stream_ops.mmap,
								msync: MEMFS.stream_ops.msync
							}
						},
						link: {
							node: {
								getattr: MEMFS.node_ops.getattr,
								setattr: MEMFS.node_ops.setattr,
								readlink: MEMFS.node_ops.readlink
							},
							stream: {}
						},
						chrdev: {
							node: {
								getattr: MEMFS.node_ops.getattr,
								setattr: MEMFS.node_ops.setattr
							},
							stream: FS.chrdev_stream_ops
						}
					};
					var node = FS.createNode(parent, name, mode, dev);
					if (FS.isDir(node.mode)) {
						node.node_ops = MEMFS.ops_table.dir.node;
						node.stream_ops = MEMFS.ops_table.dir.stream;
						node.contents = {}
					} else if (FS.isFile(node.mode)) {
						node.node_ops = MEMFS.ops_table.file.node;
						node.stream_ops = MEMFS.ops_table.file.stream;
						node.usedBytes = 0;
						node.contents = null
					} else if (FS.isLink(node.mode)) {
						node.node_ops = MEMFS.ops_table.link.node;
						node.stream_ops = MEMFS.ops_table.link.stream
					} else if (FS.isChrdev(node.mode)) {
						node.node_ops = MEMFS.ops_table.chrdev.node;
						node.stream_ops = MEMFS.ops_table.chrdev.stream
					}
					node.timestamp = Date.now();
					if (parent) {
						parent.contents[name] = node;
						parent.timestamp = node.timestamp
					}
					return node
				},
				getFileDataAsTypedArray(node) {
					if (!node.contents) return new Uint8Array(0);
					if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
					return new Uint8Array(node.contents)
				},
				expandFileStorage(node, newCapacity) {
					var prevCapacity = node.contents ? node.contents.length : 0;
					if (prevCapacity >= newCapacity) return;
					var CAPACITY_DOUBLING_MAX = 1024 * 1024;
					newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
					if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
					var oldContents = node.contents;
					node.contents = new Uint8Array(newCapacity);
					if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0)
				},
				resizeFileStorage(node, newSize) {
					if (node.usedBytes == newSize) return;
					if (newSize == 0) {
						node.contents = null;
						node.usedBytes = 0
					} else {
						var oldContents = node.contents;
						node.contents = new Uint8Array(newSize);
						if (oldContents) {
							node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
						}
						node.usedBytes = newSize
					}
				},
				node_ops: {
					getattr(node) {
						var attr = {};
						attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
						attr.ino = node.id;
						attr.mode = node.mode;
						attr.nlink = 1;
						attr.uid = 0;
						attr.gid = 0;
						attr.rdev = node.rdev;
						if (FS.isDir(node.mode)) {
							attr.size = 4096
						} else if (FS.isFile(node.mode)) {
							attr.size = node.usedBytes
						} else if (FS.isLink(node.mode)) {
							attr.size = node.link.length
						} else {
							attr.size = 0
						}
						attr.atime = new Date(node.timestamp);
						attr.mtime = new Date(node.timestamp);
						attr.ctime = new Date(node.timestamp);
						attr.blksize = 4096;
						attr.blocks = Math.ceil(attr.size / attr.blksize);
						return attr
					},
					setattr(node, attr) {
						if (attr.mode !== undefined) {
							node.mode = attr.mode
						}
						if (attr.timestamp !== undefined) {
							node.timestamp = attr.timestamp
						}
						if (attr.size !== undefined) {
							MEMFS.resizeFileStorage(node, attr.size)
						}
					},
					lookup(parent, name) {
						throw FS.genericErrors[44]
					},
					mknod(parent, name, mode, dev) {
						return MEMFS.createNode(parent, name, mode, dev)
					},
					rename(old_node, new_dir, new_name) {
						if (FS.isDir(old_node.mode)) {
							var new_node;
							try {
								new_node = FS.lookupNode(new_dir, new_name)
							} catch (e) {}
							if (new_node) {
								for (var i in new_node.contents) {
									throw new FS.ErrnoError(55)
								}
							}
						}
						delete old_node.parent.contents[old_node.name];
						old_node.parent.timestamp = Date.now();
						old_node.name = new_name;
						new_dir.contents[new_name] = old_node;
						new_dir.timestamp = old_node.parent.timestamp
					},
					unlink(parent, name) {
						delete parent.contents[name];
						parent.timestamp = Date.now()
					},
					rmdir(parent, name) {
						var node = FS.lookupNode(parent, name);
						for (var i in node.contents) {
							throw new FS.ErrnoError(55)
						}
						delete parent.contents[name];
						parent.timestamp = Date.now()
					},
					readdir(node) {
						var entries = [".", ".."];
						for (var key of Object.keys(node.contents)) {
							entries.push(key)
						}
						return entries
					},
					symlink(parent, newname, oldpath) {
						var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
						node.link = oldpath;
						return node
					},
					readlink(node) {
						if (!FS.isLink(node.mode)) {
							throw new FS.ErrnoError(28)
						}
						return node.link
					}
				},
				stream_ops: {
					read(stream, buffer, offset, length, position) {
						var contents = stream.node.contents;
						if (position >= stream.node.usedBytes) return 0;
						var size = Math.min(stream.node.usedBytes - position, length);
						if (size > 8 && contents.subarray) {
							buffer.set(contents.subarray(position, position + size), offset)
						} else {
							for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i]
						}
						return size
					},
					write(stream, buffer, offset, length, position, canOwn) {
						if (buffer.buffer === HEAP8.buffer) {
							canOwn = false
						}
						if (!length) return 0;
						var node = stream.node;
						node.timestamp = Date.now();
						if (buffer.subarray && (!node.contents || node.contents.subarray)) {
							if (canOwn) {
								node.contents = buffer.subarray(offset, offset + length);
								node.usedBytes = length;
								return length
							} else if (node.usedBytes === 0 && position === 0) {
								node.contents = buffer.slice(offset, offset + length);
								node.usedBytes = length;
								return length
							} else if (position + length <= node.usedBytes) {
								node.contents.set(buffer.subarray(offset, offset + length), position);
								return length
							}
						}
						MEMFS.expandFileStorage(node, position + length);
						if (node.contents.subarray && buffer.subarray) {
							node.contents.set(buffer.subarray(offset, offset + length), position)
						} else {
							for (var i = 0; i < length; i++) {
								node.contents[position + i] = buffer[offset + i]
							}
						}
						node.usedBytes = Math.max(node.usedBytes, position + length);
						return length
					},
					llseek(stream, offset, whence) {
						var position = offset;
						if (whence === 1) {
							position += stream.position
						} else if (whence === 2) {
							if (FS.isFile(stream.node.mode)) {
								position += stream.node.usedBytes
							}
						}
						if (position < 0) {
							throw new FS.ErrnoError(28)
						}
						return position
					},
					allocate(stream, offset, length) {
						MEMFS.expandFileStorage(stream.node, offset + length);
						stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
					},
					mmap(stream, length, position, prot, flags) {
						if (!FS.isFile(stream.node.mode)) {
							throw new FS.ErrnoError(43)
						}
						var ptr;
						var allocated;
						var contents = stream.node.contents;
						if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
							allocated = false;
							ptr = contents.byteOffset
						} else {
							if (position > 0 || position + length < contents.length) {
								if (contents.subarray) {
									contents = contents.subarray(position, position + length)
								} else {
									contents = Array.prototype.slice.call(contents, position, position + length)
								}
							}
							allocated = true;
							ptr = mmapAlloc(length);
							if (!ptr) {
								throw new FS.ErrnoError(48)
							}
							HEAP8.set(contents, ptr >>> 0)
						}
						return {
							ptr: ptr,
							allocated: allocated
						}
					},
					msync(stream, buffer, offset, length, mmapFlags) {
						MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
						return 0
					}
				}
			};
			var asyncLoad = (url, onload, onerror, noRunDep) => {
				var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
				readAsync(url).then(arrayBuffer => {
					onload(new Uint8Array(arrayBuffer));
					if (dep) removeRunDependency(dep)
				}, err => {
					if (onerror) {
						onerror()
					} else {
						throw `Loading data file "${url}" failed.`
					}
				});
				if (dep) addRunDependency(dep)
			};
			var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
				FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn)
			};
			var preloadPlugins = Module["preloadPlugins"] || [];
			var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
				if (typeof Browser != "undefined") Browser.init();
				var handled = false;
				preloadPlugins.forEach(plugin => {
					if (handled) return;
					if (plugin["canHandle"](fullname)) {
						plugin["handle"](byteArray, fullname, finish, onerror);
						handled = true
					}
				});
				return handled
			};
			var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
				var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
				var dep = getUniqueRunDependency(`cp ${fullname}`);

				function processData(byteArray) {
					function finish(byteArray) {
						preFinish?.();
						if (!dontCreateFile) {
							FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn)
						}
						onload?.();
						removeRunDependency(dep)
					}
					if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
							onerror?.();
							removeRunDependency(dep)
						})) {
						return
					}
					finish(byteArray)
				}
				addRunDependency(dep);
				if (typeof url == "string") {
					asyncLoad(url, processData, onerror)
				} else {
					processData(url)
				}
			};
			var FS_modeStringToFlags = str => {
				var flagModes = {
					r: 0,
					"r+": 2,
					w: 512 | 64 | 1,
					"w+": 512 | 64 | 2,
					a: 1024 | 64 | 1,
					"a+": 1024 | 64 | 2
				};
				var flags = flagModes[str];
				if (typeof flags == "undefined") {
					throw new Error(`Unknown file open mode: ${str}`)
				}
				return flags
			};
			var FS_getMode = (canRead, canWrite) => {
				var mode = 0;
				if (canRead) mode |= 292 | 73;
				if (canWrite) mode |= 146;
				return mode
			};
			var FS = {
				root: null,
				mounts: [],
				devices: {},
				streams: [],
				nextInode: 1,
				nameTable: null,
				currentPath: "/",
				initialized: false,
				ignorePermissions: true,
				ErrnoError: class {
					constructor(errno) {
						this.name = "ErrnoError";
						this.errno = errno
					}
				},
				genericErrors: {},
				filesystems: null,
				syncFSRequests: 0,
				FSStream: class {
					constructor() {
						this.shared = {}
					}
					get object() {
						return this.node
					}
					set object(val) {
						this.node = val
					}
					get isRead() {
						return (this.flags & 2097155) !== 1
					}
					get isWrite() {
						return (this.flags & 2097155) !== 0
					}
					get isAppend() {
						return this.flags & 1024
					}
					get flags() {
						return this.shared.flags
					}
					set flags(val) {
						this.shared.flags = val
					}
					get position() {
						return this.shared.position
					}
					set position(val) {
						this.shared.position = val
					}
				},
				FSNode: class {
					constructor(parent, name, mode, rdev) {
						if (!parent) {
							parent = this
						}
						this.parent = parent;
						this.mount = parent.mount;
						this.mounted = null;
						this.id = FS.nextInode++;
						this.name = name;
						this.mode = mode;
						this.node_ops = {};
						this.stream_ops = {};
						this.rdev = rdev;
						this.readMode = 292 | 73;
						this.writeMode = 146
					}
					get read() {
						return (this.mode & this.readMode) === this.readMode
					}
					set read(val) {
						val ? this.mode |= this.readMode : this.mode &= ~this.readMode
					}
					get write() {
						return (this.mode & this.writeMode) === this.writeMode
					}
					set write(val) {
						val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode
					}
					get isFolder() {
						return FS.isDir(this.mode)
					}
					get isDevice() {
						return FS.isChrdev(this.mode)
					}
				},
				lookupPath(path, opts = {}) {
					path = PATH_FS.resolve(path);
					if (!path) return {
						path: "",
						node: null
					};
					var defaults = {
						follow_mount: true,
						recurse_count: 0
					};
					opts = Object.assign(defaults, opts);
					if (opts.recurse_count > 8) {
						throw new FS.ErrnoError(32)
					}
					var parts = path.split("/").filter(p => !!p);
					var current = FS.root;
					var current_path = "/";
					for (var i = 0; i < parts.length; i++) {
						var islast = i === parts.length - 1;
						if (islast && opts.parent) {
							break
						}
						current = FS.lookupNode(current, parts[i]);
						current_path = PATH.join2(current_path, parts[i]);
						if (FS.isMountpoint(current)) {
							if (!islast || islast && opts.follow_mount) {
								current = current.mounted.root
							}
						}
						if (!islast || opts.follow) {
							var count = 0;
							while (FS.isLink(current.mode)) {
								var link = FS.readlink(current_path);
								current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
								var lookup = FS.lookupPath(current_path, {
									recurse_count: opts.recurse_count + 1
								});
								current = lookup.node;
								if (count++ > 40) {
									throw new FS.ErrnoError(32)
								}
							}
						}
					}
					return {
						path: current_path,
						node: current
					}
				},
				getPath(node) {
					var path;
					while (true) {
						if (FS.isRoot(node)) {
							var mount = node.mount.mountpoint;
							if (!path) return mount;
							return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path
						}
						path = path ? `${node.name}/${path}` : node.name;
						node = node.parent
					}
				},
				hashName(parentid, name) {
					var hash = 0;
					for (var i = 0; i < name.length; i++) {
						hash = (hash << 5) - hash + name.charCodeAt(i) | 0
					}
					return (parentid + hash >>> 0) % FS.nameTable.length
				},
				hashAddNode(node) {
					var hash = FS.hashName(node.parent.id, node.name);
					node.name_next = FS.nameTable[hash];
					FS.nameTable[hash] = node
				},
				hashRemoveNode(node) {
					var hash = FS.hashName(node.parent.id, node.name);
					if (FS.nameTable[hash] === node) {
						FS.nameTable[hash] = node.name_next
					} else {
						var current = FS.nameTable[hash];
						while (current) {
							if (current.name_next === node) {
								current.name_next = node.name_next;
								break
							}
							current = current.name_next
						}
					}
				},
				lookupNode(parent, name) {
					var errCode = FS.mayLookup(parent);
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					var hash = FS.hashName(parent.id, name);
					for (var node = FS.nameTable[hash]; node; node = node.name_next) {
						var nodeName = node.name;
						if (node.parent.id === parent.id && nodeName === name) {
							return node
						}
					}
					return FS.lookup(parent, name)
				},
				createNode(parent, name, mode, rdev) {
					var node = new FS.FSNode(parent, name, mode, rdev);
					FS.hashAddNode(node);
					return node
				},
				destroyNode(node) {
					FS.hashRemoveNode(node)
				},
				isRoot(node) {
					return node === node.parent
				},
				isMountpoint(node) {
					return !!node.mounted
				},
				isFile(mode) {
					return (mode & 61440) === 32768
				},
				isDir(mode) {
					return (mode & 61440) === 16384
				},
				isLink(mode) {
					return (mode & 61440) === 40960
				},
				isChrdev(mode) {
					return (mode & 61440) === 8192
				},
				isBlkdev(mode) {
					return (mode & 61440) === 24576
				},
				isFIFO(mode) {
					return (mode & 61440) === 4096
				},
				isSocket(mode) {
					return (mode & 49152) === 49152
				},
				flagsToPermissionString(flag) {
					var perms = ["r", "w", "rw"][flag & 3];
					if (flag & 512) {
						perms += "w"
					}
					return perms
				},
				nodePermissions(node, perms) {
					if (FS.ignorePermissions) {
						return 0
					}
					if (perms.includes("r") && !(node.mode & 292)) {
						return 2
					} else if (perms.includes("w") && !(node.mode & 146)) {
						return 2
					} else if (perms.includes("x") && !(node.mode & 73)) {
						return 2
					}
					return 0
				},
				mayLookup(dir) {
					if (!FS.isDir(dir.mode)) return 54;
					var errCode = FS.nodePermissions(dir, "x");
					if (errCode) return errCode;
					if (!dir.node_ops.lookup) return 2;
					return 0
				},
				mayCreate(dir, name) {
					try {
						var node = FS.lookupNode(dir, name);
						return 20
					} catch (e) {}
					return FS.nodePermissions(dir, "wx")
				},
				mayDelete(dir, name, isdir) {
					var node;
					try {
						node = FS.lookupNode(dir, name)
					} catch (e) {
						return e.errno
					}
					var errCode = FS.nodePermissions(dir, "wx");
					if (errCode) {
						return errCode
					}
					if (isdir) {
						if (!FS.isDir(node.mode)) {
							return 54
						}
						if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
							return 10
						}
					} else {
						if (FS.isDir(node.mode)) {
							return 31
						}
					}
					return 0
				},
				mayOpen(node, flags) {
					if (!node) {
						return 44
					}
					if (FS.isLink(node.mode)) {
						return 32
					} else if (FS.isDir(node.mode)) {
						if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
							return 31
						}
					}
					return FS.nodePermissions(node, FS.flagsToPermissionString(flags))
				},
				MAX_OPEN_FDS: 4096,
				nextfd() {
					for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
						if (!FS.streams[fd]) {
							return fd
						}
					}
					throw new FS.ErrnoError(33)
				},
				getStreamChecked(fd) {
					var stream = FS.getStream(fd);
					if (!stream) {
						throw new FS.ErrnoError(8)
					}
					return stream
				},
				getStream: fd => FS.streams[fd],
				createStream(stream, fd = -1) {
					stream = Object.assign(new FS.FSStream, stream);
					if (fd == -1) {
						fd = FS.nextfd()
					}
					stream.fd = fd;
					FS.streams[fd] = stream;
					return stream
				},
				closeStream(fd) {
					FS.streams[fd] = null
				},
				dupStream(origStream, fd = -1) {
					var stream = FS.createStream(origStream, fd);
					stream.stream_ops?.dup?.(stream);
					return stream
				},
				chrdev_stream_ops: {
					open(stream) {
						var device = FS.getDevice(stream.node.rdev);
						stream.stream_ops = device.stream_ops;
						stream.stream_ops.open?.(stream)
					},
					llseek() {
						throw new FS.ErrnoError(70)
					}
				},
				major: dev => dev >> 8,
				minor: dev => dev & 255,
				makedev: (ma, mi) => ma << 8 | mi,
				registerDevice(dev, ops) {
					FS.devices[dev] = {
						stream_ops: ops
					}
				},
				getDevice: dev => FS.devices[dev],
				getMounts(mount) {
					var mounts = [];
					var check = [mount];
					while (check.length) {
						var m = check.pop();
						mounts.push(m);
						check.push(...m.mounts)
					}
					return mounts
				},
				syncfs(populate, callback) {
					if (typeof populate == "function") {
						callback = populate;
						populate = false
					}
					FS.syncFSRequests++;
					if (FS.syncFSRequests > 1) {
						err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)
					}
					var mounts = FS.getMounts(FS.root.mount);
					var completed = 0;

					function doCallback(errCode) {
						FS.syncFSRequests--;
						return callback(errCode)
					}

					function done(errCode) {
						if (errCode) {
							if (!done.errored) {
								done.errored = true;
								return doCallback(errCode)
							}
							return
						}
						if (++completed >= mounts.length) {
							doCallback(null)
						}
					}
					mounts.forEach(mount => {
						if (!mount.type.syncfs) {
							return done(null)
						}
						mount.type.syncfs(mount, populate, done)
					})
				},
				mount(type, opts, mountpoint) {
					var root = mountpoint === "/";
					var pseudo = !mountpoint;
					var node;
					if (root && FS.root) {
						throw new FS.ErrnoError(10)
					} else if (!root && !pseudo) {
						var lookup = FS.lookupPath(mountpoint, {
							follow_mount: false
						});
						mountpoint = lookup.path;
						node = lookup.node;
						if (FS.isMountpoint(node)) {
							throw new FS.ErrnoError(10)
						}
						if (!FS.isDir(node.mode)) {
							throw new FS.ErrnoError(54)
						}
					}
					var mount = {
						type: type,
						opts: opts,
						mountpoint: mountpoint,
						mounts: []
					};
					var mountRoot = type.mount(mount);
					mountRoot.mount = mount;
					mount.root = mountRoot;
					if (root) {
						FS.root = mountRoot
					} else if (node) {
						node.mounted = mount;
						if (node.mount) {
							node.mount.mounts.push(mount)
						}
					}
					return mountRoot
				},
				unmount(mountpoint) {
					var lookup = FS.lookupPath(mountpoint, {
						follow_mount: false
					});
					if (!FS.isMountpoint(lookup.node)) {
						throw new FS.ErrnoError(28)
					}
					var node = lookup.node;
					var mount = node.mounted;
					var mounts = FS.getMounts(mount);
					Object.keys(FS.nameTable).forEach(hash => {
						var current = FS.nameTable[hash];
						while (current) {
							var next = current.name_next;
							if (mounts.includes(current.mount)) {
								FS.destroyNode(current)
							}
							current = next
						}
					});
					node.mounted = null;
					var idx = node.mount.mounts.indexOf(mount);
					node.mount.mounts.splice(idx, 1)
				},
				lookup(parent, name) {
					return parent.node_ops.lookup(parent, name)
				},
				mknod(path, mode, dev) {
					var lookup = FS.lookupPath(path, {
						parent: true
					});
					var parent = lookup.node;
					var name = PATH.basename(path);
					if (!name || name === "." || name === "..") {
						throw new FS.ErrnoError(28)
					}
					var errCode = FS.mayCreate(parent, name);
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					if (!parent.node_ops.mknod) {
						throw new FS.ErrnoError(63)
					}
					return parent.node_ops.mknod(parent, name, mode, dev)
				},
				create(path, mode) {
					mode = mode !== undefined ? mode : 438;
					mode &= 4095;
					mode |= 32768;
					return FS.mknod(path, mode, 0)
				},
				mkdir(path, mode) {
					mode = mode !== undefined ? mode : 511;
					mode &= 511 | 512;
					mode |= 16384;
					return FS.mknod(path, mode, 0)
				},
				mkdirTree(path, mode) {
					var dirs = path.split("/");
					var d = "";
					for (var i = 0; i < dirs.length; ++i) {
						if (!dirs[i]) continue;
						d += "/" + dirs[i];
						try {
							FS.mkdir(d, mode)
						} catch (e) {
							if (e.errno != 20) throw e
						}
					}
				},
				mkdev(path, mode, dev) {
					if (typeof dev == "undefined") {
						dev = mode;
						mode = 438
					}
					mode |= 8192;
					return FS.mknod(path, mode, dev)
				},
				symlink(oldpath, newpath) {
					if (!PATH_FS.resolve(oldpath)) {
						throw new FS.ErrnoError(44)
					}
					var lookup = FS.lookupPath(newpath, {
						parent: true
					});
					var parent = lookup.node;
					if (!parent) {
						throw new FS.ErrnoError(44)
					}
					var newname = PATH.basename(newpath);
					var errCode = FS.mayCreate(parent, newname);
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					if (!parent.node_ops.symlink) {
						throw new FS.ErrnoError(63)
					}
					return parent.node_ops.symlink(parent, newname, oldpath)
				},
				rename(old_path, new_path) {
					var old_dirname = PATH.dirname(old_path);
					var new_dirname = PATH.dirname(new_path);
					var old_name = PATH.basename(old_path);
					var new_name = PATH.basename(new_path);
					var lookup, old_dir, new_dir;
					lookup = FS.lookupPath(old_path, {
						parent: true
					});
					old_dir = lookup.node;
					lookup = FS.lookupPath(new_path, {
						parent: true
					});
					new_dir = lookup.node;
					if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
					if (old_dir.mount !== new_dir.mount) {
						throw new FS.ErrnoError(75)
					}
					var old_node = FS.lookupNode(old_dir, old_name);
					var relative = PATH_FS.relative(old_path, new_dirname);
					if (relative.charAt(0) !== ".") {
						throw new FS.ErrnoError(28)
					}
					relative = PATH_FS.relative(new_path, old_dirname);
					if (relative.charAt(0) !== ".") {
						throw new FS.ErrnoError(55)
					}
					var new_node;
					try {
						new_node = FS.lookupNode(new_dir, new_name)
					} catch (e) {}
					if (old_node === new_node) {
						return
					}
					var isdir = FS.isDir(old_node.mode);
					var errCode = FS.mayDelete(old_dir, old_name, isdir);
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					if (!old_dir.node_ops.rename) {
						throw new FS.ErrnoError(63)
					}
					if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
						throw new FS.ErrnoError(10)
					}
					if (new_dir !== old_dir) {
						errCode = FS.nodePermissions(old_dir, "w");
						if (errCode) {
							throw new FS.ErrnoError(errCode)
						}
					}
					FS.hashRemoveNode(old_node);
					try {
						old_dir.node_ops.rename(old_node, new_dir, new_name);
						old_node.parent = new_dir
					} catch (e) {
						throw e
					} finally {
						FS.hashAddNode(old_node)
					}
				},
				rmdir(path) {
					var lookup = FS.lookupPath(path, {
						parent: true
					});
					var parent = lookup.node;
					var name = PATH.basename(path);
					var node = FS.lookupNode(parent, name);
					var errCode = FS.mayDelete(parent, name, true);
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					if (!parent.node_ops.rmdir) {
						throw new FS.ErrnoError(63)
					}
					if (FS.isMountpoint(node)) {
						throw new FS.ErrnoError(10)
					}
					parent.node_ops.rmdir(parent, name);
					FS.destroyNode(node)
				},
				readdir(path) {
					var lookup = FS.lookupPath(path, {
						follow: true
					});
					var node = lookup.node;
					if (!node.node_ops.readdir) {
						throw new FS.ErrnoError(54)
					}
					return node.node_ops.readdir(node)
				},
				unlink(path) {
					var lookup = FS.lookupPath(path, {
						parent: true
					});
					var parent = lookup.node;
					if (!parent) {
						throw new FS.ErrnoError(44)
					}
					var name = PATH.basename(path);
					var node = FS.lookupNode(parent, name);
					var errCode = FS.mayDelete(parent, name, false);
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					if (!parent.node_ops.unlink) {
						throw new FS.ErrnoError(63)
					}
					if (FS.isMountpoint(node)) {
						throw new FS.ErrnoError(10)
					}
					parent.node_ops.unlink(parent, name);
					FS.destroyNode(node)
				},
				readlink(path) {
					var lookup = FS.lookupPath(path);
					var link = lookup.node;
					if (!link) {
						throw new FS.ErrnoError(44)
					}
					if (!link.node_ops.readlink) {
						throw new FS.ErrnoError(28)
					}
					return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
				},
				stat(path, dontFollow) {
					var lookup = FS.lookupPath(path, {
						follow: !dontFollow
					});
					var node = lookup.node;
					if (!node) {
						throw new FS.ErrnoError(44)
					}
					if (!node.node_ops.getattr) {
						throw new FS.ErrnoError(63)
					}
					return node.node_ops.getattr(node)
				},
				lstat(path) {
					return FS.stat(path, true)
				},
				chmod(path, mode, dontFollow) {
					var node;
					if (typeof path == "string") {
						var lookup = FS.lookupPath(path, {
							follow: !dontFollow
						});
						node = lookup.node
					} else {
						node = path
					}
					if (!node.node_ops.setattr) {
						throw new FS.ErrnoError(63)
					}
					node.node_ops.setattr(node, {
						mode: mode & 4095 | node.mode & ~4095,
						timestamp: Date.now()
					})
				},
				lchmod(path, mode) {
					FS.chmod(path, mode, true)
				},
				fchmod(fd, mode) {
					var stream = FS.getStreamChecked(fd);
					FS.chmod(stream.node, mode)
				},
				chown(path, uid, gid, dontFollow) {
					var node;
					if (typeof path == "string") {
						var lookup = FS.lookupPath(path, {
							follow: !dontFollow
						});
						node = lookup.node
					} else {
						node = path
					}
					if (!node.node_ops.setattr) {
						throw new FS.ErrnoError(63)
					}
					node.node_ops.setattr(node, {
						timestamp: Date.now()
					})
				},
				lchown(path, uid, gid) {
					FS.chown(path, uid, gid, true)
				},
				fchown(fd, uid, gid) {
					var stream = FS.getStreamChecked(fd);
					FS.chown(stream.node, uid, gid)
				},
				truncate(path, len) {
					if (len < 0) {
						throw new FS.ErrnoError(28)
					}
					var node;
					if (typeof path == "string") {
						var lookup = FS.lookupPath(path, {
							follow: true
						});
						node = lookup.node
					} else {
						node = path
					}
					if (!node.node_ops.setattr) {
						throw new FS.ErrnoError(63)
					}
					if (FS.isDir(node.mode)) {
						throw new FS.ErrnoError(31)
					}
					if (!FS.isFile(node.mode)) {
						throw new FS.ErrnoError(28)
					}
					var errCode = FS.nodePermissions(node, "w");
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					node.node_ops.setattr(node, {
						size: len,
						timestamp: Date.now()
					})
				},
				ftruncate(fd, len) {
					var stream = FS.getStreamChecked(fd);
					if ((stream.flags & 2097155) === 0) {
						throw new FS.ErrnoError(28)
					}
					FS.truncate(stream.node, len)
				},
				utime(path, atime, mtime) {
					var lookup = FS.lookupPath(path, {
						follow: true
					});
					var node = lookup.node;
					node.node_ops.setattr(node, {
						timestamp: Math.max(atime, mtime)
					})
				},
				open(path, flags, mode) {
					if (path === "") {
						throw new FS.ErrnoError(44)
					}
					flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
					if (flags & 64) {
						mode = typeof mode == "undefined" ? 438 : mode;
						mode = mode & 4095 | 32768
					} else {
						mode = 0
					}
					var node;
					if (typeof path == "object") {
						node = path
					} else {
						path = PATH.normalize(path);
						try {
							var lookup = FS.lookupPath(path, {
								follow: !(flags & 131072)
							});
							node = lookup.node
						} catch (e) {}
					}
					var created = false;
					if (flags & 64) {
						if (node) {
							if (flags & 128) {
								throw new FS.ErrnoError(20)
							}
						} else {
							node = FS.mknod(path, mode, 0);
							created = true
						}
					}
					if (!node) {
						throw new FS.ErrnoError(44)
					}
					if (FS.isChrdev(node.mode)) {
						flags &= ~512
					}
					if (flags & 65536 && !FS.isDir(node.mode)) {
						throw new FS.ErrnoError(54)
					}
					if (!created) {
						var errCode = FS.mayOpen(node, flags);
						if (errCode) {
							throw new FS.ErrnoError(errCode)
						}
					}
					if (flags & 512 && !created) {
						FS.truncate(node, 0)
					}
					flags &= ~(128 | 512 | 131072);
					var stream = FS.createStream({
						node: node,
						path: FS.getPath(node),
						flags: flags,
						seekable: true,
						position: 0,
						stream_ops: node.stream_ops,
						ungotten: [],
						error: false
					});
					if (stream.stream_ops.open) {
						stream.stream_ops.open(stream)
					}
					if (Module["logReadFiles"] && !(flags & 1)) {
						if (!FS.readFiles) FS.readFiles = {};
						if (!(path in FS.readFiles)) {
							FS.readFiles[path] = 1
						}
					}
					return stream
				},
				close(stream) {
					if (FS.isClosed(stream)) {
						throw new FS.ErrnoError(8)
					}
					if (stream.getdents) stream.getdents = null;
					try {
						if (stream.stream_ops.close) {
							stream.stream_ops.close(stream)
						}
					} catch (e) {
						throw e
					} finally {
						FS.closeStream(stream.fd)
					}
					stream.fd = null
				},
				isClosed(stream) {
					return stream.fd === null
				},
				llseek(stream, offset, whence) {
					if (FS.isClosed(stream)) {
						throw new FS.ErrnoError(8)
					}
					if (!stream.seekable || !stream.stream_ops.llseek) {
						throw new FS.ErrnoError(70)
					}
					if (whence != 0 && whence != 1 && whence != 2) {
						throw new FS.ErrnoError(28)
					}
					stream.position = stream.stream_ops.llseek(stream, offset, whence);
					stream.ungotten = [];
					return stream.position
				},
				read(stream, buffer, offset, length, position) {
					if (length < 0 || position < 0) {
						throw new FS.ErrnoError(28)
					}
					if (FS.isClosed(stream)) {
						throw new FS.ErrnoError(8)
					}
					if ((stream.flags & 2097155) === 1) {
						throw new FS.ErrnoError(8)
					}
					if (FS.isDir(stream.node.mode)) {
						throw new FS.ErrnoError(31)
					}
					if (!stream.stream_ops.read) {
						throw new FS.ErrnoError(28)
					}
					var seeking = typeof position != "undefined";
					if (!seeking) {
						position = stream.position
					} else if (!stream.seekable) {
						throw new FS.ErrnoError(70)
					}
					var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
					if (!seeking) stream.position += bytesRead;
					return bytesRead
				},
				write(stream, buffer, offset, length, position, canOwn) {
					if (length < 0 || position < 0) {
						throw new FS.ErrnoError(28)
					}
					if (FS.isClosed(stream)) {
						throw new FS.ErrnoError(8)
					}
					if ((stream.flags & 2097155) === 0) {
						throw new FS.ErrnoError(8)
					}
					if (FS.isDir(stream.node.mode)) {
						throw new FS.ErrnoError(31)
					}
					if (!stream.stream_ops.write) {
						throw new FS.ErrnoError(28)
					}
					if (stream.seekable && stream.flags & 1024) {
						FS.llseek(stream, 0, 2)
					}
					var seeking = typeof position != "undefined";
					if (!seeking) {
						position = stream.position
					} else if (!stream.seekable) {
						throw new FS.ErrnoError(70)
					}
					var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
					if (!seeking) stream.position += bytesWritten;
					return bytesWritten
				},
				allocate(stream, offset, length) {
					if (FS.isClosed(stream)) {
						throw new FS.ErrnoError(8)
					}
					if (offset < 0 || length <= 0) {
						throw new FS.ErrnoError(28)
					}
					if ((stream.flags & 2097155) === 0) {
						throw new FS.ErrnoError(8)
					}
					if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
						throw new FS.ErrnoError(43)
					}
					if (!stream.stream_ops.allocate) {
						throw new FS.ErrnoError(138)
					}
					stream.stream_ops.allocate(stream, offset, length)
				},
				mmap(stream, length, position, prot, flags) {
					if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
						throw new FS.ErrnoError(2)
					}
					if ((stream.flags & 2097155) === 1) {
						throw new FS.ErrnoError(2)
					}
					if (!stream.stream_ops.mmap) {
						throw new FS.ErrnoError(43)
					}
					return stream.stream_ops.mmap(stream, length, position, prot, flags)
				},
				msync(stream, buffer, offset, length, mmapFlags) {
					if (!stream.stream_ops.msync) {
						return 0
					}
					return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags)
				},
				ioctl(stream, cmd, arg) {
					if (!stream.stream_ops.ioctl) {
						throw new FS.ErrnoError(59)
					}
					return stream.stream_ops.ioctl(stream, cmd, arg)
				},
				readFile(path, opts = {}) {
					opts.flags = opts.flags || 0;
					opts.encoding = opts.encoding || "binary";
					if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
						throw new Error(`Invalid encoding type "${opts.encoding}"`)
					}
					var ret;
					var stream = FS.open(path, opts.flags);
					var stat = FS.stat(path);
					var length = stat.size;
					var buf = new Uint8Array(length);
					FS.read(stream, buf, 0, length, 0);
					if (opts.encoding === "utf8") {
						ret = UTF8ArrayToString(buf, 0)
					} else if (opts.encoding === "binary") {
						ret = buf
					}
					FS.close(stream);
					return ret
				},
				writeFile(path, data, opts = {}) {
					opts.flags = opts.flags || 577;
					var stream = FS.open(path, opts.flags, opts.mode);
					if (typeof data == "string") {
						var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
						var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
						FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn)
					} else if (ArrayBuffer.isView(data)) {
						FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn)
					} else {
						throw new Error("Unsupported data type")
					}
					FS.close(stream)
				},
				cwd: () => FS.currentPath,
				chdir(path) {
					var lookup = FS.lookupPath(path, {
						follow: true
					});
					if (lookup.node === null) {
						throw new FS.ErrnoError(44)
					}
					if (!FS.isDir(lookup.node.mode)) {
						throw new FS.ErrnoError(54)
					}
					var errCode = FS.nodePermissions(lookup.node, "x");
					if (errCode) {
						throw new FS.ErrnoError(errCode)
					}
					FS.currentPath = lookup.path
				},
				createDefaultDirectories() {
					FS.mkdir("/tmp");
					FS.mkdir("/home");
					FS.mkdir("/home/web_user")
				},
				createDefaultDevices() {
					FS.mkdir("/dev");
					FS.registerDevice(FS.makedev(1, 3), {
						read: () => 0,
						write: (stream, buffer, offset, length, pos) => length
					});
					FS.mkdev("/dev/null", FS.makedev(1, 3));
					TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
					TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
					FS.mkdev("/dev/tty", FS.makedev(5, 0));
					FS.mkdev("/dev/tty1", FS.makedev(6, 0));
					var randomBuffer = new Uint8Array(1024),
						randomLeft = 0;
					var randomByte = () => {
						if (randomLeft === 0) {
							randomLeft = randomFill(randomBuffer).byteLength
						}
						return randomBuffer[--randomLeft]
					};
					FS.createDevice("/dev", "random", randomByte);
					FS.createDevice("/dev", "urandom", randomByte);
					FS.mkdir("/dev/shm");
					FS.mkdir("/dev/shm/tmp")
				},
				createSpecialDirectories() {
					FS.mkdir("/proc");
					var proc_self = FS.mkdir("/proc/self");
					FS.mkdir("/proc/self/fd");
					FS.mount({
						mount() {
							var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
							node.node_ops = {
								lookup(parent, name) {
									var fd = +name;
									var stream = FS.getStreamChecked(fd);
									var ret = {
										parent: null,
										mount: {
											mountpoint: "fake"
										},
										node_ops: {
											readlink: () => stream.path
										}
									};
									ret.parent = ret;
									return ret
								}
							};
							return node
						}
					}, {}, "/proc/self/fd")
				},
				createStandardStreams() {
					if (Module["stdin"]) {
						FS.createDevice("/dev", "stdin", Module["stdin"])
					} else {
						FS.symlink("/dev/tty", "/dev/stdin")
					}
					if (Module["stdout"]) {
						FS.createDevice("/dev", "stdout", null, Module["stdout"])
					} else {
						FS.symlink("/dev/tty", "/dev/stdout")
					}
					if (Module["stderr"]) {
						FS.createDevice("/dev", "stderr", null, Module["stderr"])
					} else {
						FS.symlink("/dev/tty1", "/dev/stderr")
					}
					var stdin = FS.open("/dev/stdin", 0);
					var stdout = FS.open("/dev/stdout", 1);
					var stderr = FS.open("/dev/stderr", 1)
				},
				staticInit() {
					[44].forEach(code => {
						FS.genericErrors[code] = new FS.ErrnoError(code);
						FS.genericErrors[code].stack = "<generic error, no stack>"
					});
					FS.nameTable = new Array(4096);
					FS.mount(MEMFS, {}, "/");
					FS.createDefaultDirectories();
					FS.createDefaultDevices();
					FS.createSpecialDirectories();
					FS.filesystems = {
						MEMFS: MEMFS
					}
				},
				init(input, output, error) {
					FS.init.initialized = true;
					Module["stdin"] = input || Module["stdin"];
					Module["stdout"] = output || Module["stdout"];
					Module["stderr"] = error || Module["stderr"];
					FS.createStandardStreams()
				},
				quit() {
					FS.init.initialized = false;
					for (var i = 0; i < FS.streams.length; i++) {
						var stream = FS.streams[i];
						if (!stream) {
							continue
						}
						FS.close(stream)
					}
				},
				findObject(path, dontResolveLastLink) {
					var ret = FS.analyzePath(path, dontResolveLastLink);
					if (!ret.exists) {
						return null
					}
					return ret.object
				},
				analyzePath(path, dontResolveLastLink) {
					try {
						var lookup = FS.lookupPath(path, {
							follow: !dontResolveLastLink
						});
						path = lookup.path
					} catch (e) {}
					var ret = {
						isRoot: false,
						exists: false,
						error: 0,
						name: null,
						path: null,
						object: null,
						parentExists: false,
						parentPath: null,
						parentObject: null
					};
					try {
						var lookup = FS.lookupPath(path, {
							parent: true
						});
						ret.parentExists = true;
						ret.parentPath = lookup.path;
						ret.parentObject = lookup.node;
						ret.name = PATH.basename(path);
						lookup = FS.lookupPath(path, {
							follow: !dontResolveLastLink
						});
						ret.exists = true;
						ret.path = lookup.path;
						ret.object = lookup.node;
						ret.name = lookup.node.name;
						ret.isRoot = lookup.path === "/"
					} catch (e) {
						ret.error = e.errno
					}
					return ret
				},
				createPath(parent, path, canRead, canWrite) {
					parent = typeof parent == "string" ? parent : FS.getPath(parent);
					var parts = path.split("/").reverse();
					while (parts.length) {
						var part = parts.pop();
						if (!part) continue;
						var current = PATH.join2(parent, part);
						try {
							FS.mkdir(current)
						} catch (e) {}
						parent = current
					}
					return current
				},
				createFile(parent, name, properties, canRead, canWrite) {
					var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
					var mode = FS_getMode(canRead, canWrite);
					return FS.create(path, mode)
				},
				createDataFile(parent, name, data, canRead, canWrite, canOwn) {
					var path = name;
					if (parent) {
						parent = typeof parent == "string" ? parent : FS.getPath(parent);
						path = name ? PATH.join2(parent, name) : parent
					}
					var mode = FS_getMode(canRead, canWrite);
					var node = FS.create(path, mode);
					if (data) {
						if (typeof data == "string") {
							var arr = new Array(data.length);
							for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
							data = arr
						}
						FS.chmod(node, mode | 146);
						var stream = FS.open(node, 577);
						FS.write(stream, data, 0, data.length, 0, canOwn);
						FS.close(stream);
						FS.chmod(node, mode)
					}
				},
				createDevice(parent, name, input, output) {
					var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
					var mode = FS_getMode(!!input, !!output);
					if (!FS.createDevice.major) FS.createDevice.major = 64;
					var dev = FS.makedev(FS.createDevice.major++, 0);
					FS.registerDevice(dev, {
						open(stream) {
							stream.seekable = false
						},
						close(stream) {
							if (output?.buffer?.length) {
								output(10)
							}
						},
						read(stream, buffer, offset, length, pos) {
							var bytesRead = 0;
							for (var i = 0; i < length; i++) {
								var result;
								try {
									result = input()
								} catch (e) {
									throw new FS.ErrnoError(29)
								}
								if (result === undefined && bytesRead === 0) {
									throw new FS.ErrnoError(6)
								}
								if (result === null || result === undefined) break;
								bytesRead++;
								buffer[offset + i] = result
							}
							if (bytesRead) {
								stream.node.timestamp = Date.now()
							}
							return bytesRead
						},
						write(stream, buffer, offset, length, pos) {
							for (var i = 0; i < length; i++) {
								try {
									output(buffer[offset + i])
								} catch (e) {
									throw new FS.ErrnoError(29)
								}
							}
							if (length) {
								stream.node.timestamp = Date.now()
							}
							return i
						}
					});
					return FS.mkdev(path, mode, dev)
				},
				forceLoadFile(obj) {
					if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
					if (typeof XMLHttpRequest != "undefined") {
						throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")
					} else {
						try {
							obj.contents = readBinary(obj.url);
							obj.usedBytes = obj.contents.length
						} catch (e) {
							throw new FS.ErrnoError(29)
						}
					}
				},
				createLazyFile(parent, name, url, canRead, canWrite) {
					class LazyUint8Array {
						constructor() {
							this.lengthKnown = false;
							this.chunks = []
						}
						get(idx) {
							if (idx > this.length - 1 || idx < 0) {
								return undefined
							}
							var chunkOffset = idx % this.chunkSize;
							var chunkNum = idx / this.chunkSize | 0;
							return this.getter(chunkNum)[chunkOffset]
						}
						setDataGetter(getter) {
							this.getter = getter
						}
						cacheLength() {
							var xhr = new XMLHttpRequest;
							xhr.open("HEAD", url, false);
							xhr.send(null);
							if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
							var datalength = Number(xhr.getResponseHeader("Content-length"));
							var header;
							var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
							var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
							var chunkSize = 1024 * 1024;
							if (!hasByteServing) chunkSize = datalength;
							var doXHR = (from, to) => {
								if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
								if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
								var xhr = new XMLHttpRequest;
								xhr.open("GET", url, false);
								if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
								xhr.responseType = "arraybuffer";
								if (xhr.overrideMimeType) {
									xhr.overrideMimeType("text/plain; charset=x-user-defined")
								}
								xhr.send(null);
								if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
								if (xhr.response !== undefined) {
									return new Uint8Array(xhr.response || [])
								}
								return intArrayFromString(xhr.responseText || "", true)
							};
							var lazyArray = this;
							lazyArray.setDataGetter(chunkNum => {
								var start = chunkNum * chunkSize;
								var end = (chunkNum + 1) * chunkSize - 1;
								end = Math.min(end, datalength - 1);
								if (typeof lazyArray.chunks[chunkNum] == "undefined") {
									lazyArray.chunks[chunkNum] = doXHR(start, end)
								}
								if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
								return lazyArray.chunks[chunkNum]
							});
							if (usesGzip || !datalength) {
								chunkSize = datalength = 1;
								datalength = this.getter(0).length;
								chunkSize = datalength;
								out("LazyFiles on gzip forces download of the whole file when length is accessed")
							}
							this._length = datalength;
							this._chunkSize = chunkSize;
							this.lengthKnown = true
						}
						get length() {
							if (!this.lengthKnown) {
								this.cacheLength()
							}
							return this._length
						}
						get chunkSize() {
							if (!this.lengthKnown) {
								this.cacheLength()
							}
							return this._chunkSize
						}
					}
					if (typeof XMLHttpRequest != "undefined") {
						if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
						var lazyArray = new LazyUint8Array;
						var properties = {
							isDevice: false,
							contents: lazyArray
						}
					} else {
						var properties = {
							isDevice: false,
							url: url
						}
					}
					var node = FS.createFile(parent, name, properties, canRead, canWrite);
					if (properties.contents) {
						node.contents = properties.contents
					} else if (properties.url) {
						node.contents = null;
						node.url = properties.url
					}
					Object.defineProperties(node, {
						usedBytes: {
							get: function() {
								return this.contents.length
							}
						}
					});
					var stream_ops = {};
					var keys = Object.keys(node.stream_ops);
					keys.forEach(key => {
						var fn = node.stream_ops[key];
						stream_ops[key] = (...args) => {
							FS.forceLoadFile(node);
							return fn(...args)
						}
					});

					function writeChunks(stream, buffer, offset, length, position) {
						var contents = stream.node.contents;
						if (position >= contents.length) return 0;
						var size = Math.min(contents.length - position, length);
						if (contents.slice) {
							for (var i = 0; i < size; i++) {
								buffer[offset + i] = contents[position + i]
							}
						} else {
							for (var i = 0; i < size; i++) {
								buffer[offset + i] = contents.get(position + i)
							}
						}
						return size
					}
					stream_ops.read = (stream, buffer, offset, length, position) => {
						FS.forceLoadFile(node);
						return writeChunks(stream, buffer, offset, length, position)
					};
					stream_ops.mmap = (stream, length, position, prot, flags) => {
						FS.forceLoadFile(node);
						var ptr = mmapAlloc(length);
						if (!ptr) {
							throw new FS.ErrnoError(48)
						}
						writeChunks(stream, HEAP8, ptr, length, position);
						return {
							ptr: ptr,
							allocated: true
						}
					};
					node.stream_ops = stream_ops;
					return node
				}
			};
			var SOCKFS = {
				mount(mount) {
					Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
					Module["websocket"]._callbacks = {};
					Module["websocket"]["on"] = function(event, callback) {
						if ("function" === typeof callback) {
							this._callbacks[event] = callback
						}
						return this
					};
					Module["websocket"].emit = function(event, param) {
						if ("function" === typeof this._callbacks[event]) {
							this._callbacks[event].call(this, param)
						}
					};
					return FS.createNode(null, "/", 16384 | 511, 0)
				},
				createSocket(family, type, protocol) {
					type &= ~526336;
					var streaming = type == 1;
					if (streaming && protocol && protocol != 6) {
						throw new FS.ErrnoError(66)
					}
					var sock = {
						family: family,
						type: type,
						protocol: protocol,
						server: null,
						error: null,
						peers: {},
						pending: [],
						recv_queue: [],
						sock_ops: SOCKFS.websocket_sock_ops
					};
					var name = SOCKFS.nextname();
					var node = FS.createNode(SOCKFS.root, name, 49152, 0);
					node.sock = sock;
					var stream = FS.createStream({
						path: name,
						node: node,
						flags: 2,
						seekable: false,
						stream_ops: SOCKFS.stream_ops
					});
					sock.stream = stream;
					return sock
				},
				getSocket(fd) {
					var stream = FS.getStream(fd);
					if (!stream || !FS.isSocket(stream.node.mode)) {
						return null
					}
					return stream.node.sock
				},
				stream_ops: {
					poll(stream) {
						var sock = stream.node.sock;
						return sock.sock_ops.poll(sock)
					},
					ioctl(stream, request, varargs) {
						var sock = stream.node.sock;
						return sock.sock_ops.ioctl(sock, request, varargs)
					},
					read(stream, buffer, offset, length, position) {
						var sock = stream.node.sock;
						var msg = sock.sock_ops.recvmsg(sock, length);
						if (!msg) {
							return 0
						}
						buffer.set(msg.buffer, offset);
						return msg.buffer.length
					},
					write(stream, buffer, offset, length, position) {
						var sock = stream.node.sock;
						return sock.sock_ops.sendmsg(sock, buffer, offset, length)
					},
					close(stream) {
						var sock = stream.node.sock;
						sock.sock_ops.close(sock)
					}
				},
				nextname() {
					if (!SOCKFS.nextname.current) {
						SOCKFS.nextname.current = 0
					}
					return "socket[" + SOCKFS.nextname.current++ + "]"
				},
				websocket_sock_ops: {
					createPeer(sock, addr, port) {
						var ws;
						if (typeof addr == "object") {
							ws = addr;
							addr = null;
							port = null
						}
						if (ws) {
							if (ws._socket) {
								addr = ws._socket.remoteAddress;
								port = ws._socket.remotePort
							} else {
								var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
								if (!result) {
									throw new Error("WebSocket URL must be in the format ws(s)://address:port")
								}
								addr = result[1];
								port = parseInt(result[2], 10)
							}
						} else {
							try {
								var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
								var url = "ws:#".replace("#", "//");
								if (runtimeConfig) {
									if ("string" === typeof Module["websocket"]["url"]) {
										url = Module["websocket"]["url"]
									}
								}
								if (url === "ws://" || url === "wss://") {
									var parts = addr.split("/");
									url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/")
								}
								var subProtocols = "binary";
								if (runtimeConfig) {
									if ("string" === typeof Module["websocket"]["subprotocol"]) {
										subProtocols = Module["websocket"]["subprotocol"]
									}
								}
								var opts = undefined;
								if (subProtocols !== "null") {
									subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
									opts = subProtocols
								}
								if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
									subProtocols = "null";
									opts = undefined
								}
								var WebSocketConstructor;
								if (ENVIRONMENT_IS_NODE) {
									WebSocketConstructor = require("ws")
								} else {
									WebSocketConstructor = WebSocket
								}
								ws = new WebSocketConstructor(url, opts);
								ws.binaryType = "arraybuffer"
							} catch (e) {
								throw new FS.ErrnoError(23)
							}
						}
						var peer = {
							addr: addr,
							port: port,
							socket: ws,
							dgram_send_queue: []
						};
						SOCKFS.websocket_sock_ops.addPeer(sock, peer);
						SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
						if (sock.type === 2 && typeof sock.sport != "undefined") {
							peer.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255]))
						}
						return peer
					},
					getPeer(sock, addr, port) {
						return sock.peers[addr + ":" + port]
					},
					addPeer(sock, peer) {
						sock.peers[peer.addr + ":" + peer.port] = peer
					},
					removePeer(sock, peer) {
						delete sock.peers[peer.addr + ":" + peer.port]
					},
					handlePeerEvents(sock, peer) {
						var first = true;
						var handleOpen = function() {
							Module["websocket"].emit("open", sock.stream.fd);
							try {
								var queued = peer.dgram_send_queue.shift();
								while (queued) {
									peer.socket.send(queued);
									queued = peer.dgram_send_queue.shift()
								}
							} catch (e) {
								peer.socket.close()
							}
						};

						function handleMessage(data) {
							if (typeof data == "string") {
								var encoder = new TextEncoder;
								data = encoder.encode(data)
							} else {
								assert(data.byteLength !== undefined);
								if (data.byteLength == 0) {
									return
								}
								data = new Uint8Array(data)
							}
							var wasfirst = first;
							first = false;
							if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
								var newport = data[8] << 8 | data[9];
								SOCKFS.websocket_sock_ops.removePeer(sock, peer);
								peer.port = newport;
								SOCKFS.websocket_sock_ops.addPeer(sock, peer);
								return
							}
							sock.recv_queue.push({
								addr: peer.addr,
								port: peer.port,
								data: data
							});
							Module["websocket"].emit("message", sock.stream.fd)
						}
						if (ENVIRONMENT_IS_NODE) {
							peer.socket.on("open", handleOpen);
							peer.socket.on("message", function(data, isBinary) {
								if (!isBinary) {
									return
								}
								handleMessage(new Uint8Array(data).buffer)
							});
							peer.socket.on("close", function() {
								Module["websocket"].emit("close", sock.stream.fd)
							});
							peer.socket.on("error", function(error) {
								sock.error = 14;
								Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
							})
						} else {
							peer.socket.onopen = handleOpen;
							peer.socket.onclose = function() {
								Module["websocket"].emit("close", sock.stream.fd)
							};
							peer.socket.onmessage = function peer_socket_onmessage(event) {
								handleMessage(event.data)
							};
							peer.socket.onerror = function(error) {
								sock.error = 14;
								Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
							}
						}
					},
					poll(sock) {
						if (sock.type === 1 && sock.server) {
							return sock.pending.length ? 64 | 1 : 0
						}
						var mask = 0;
						var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
						if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
							mask |= 64 | 1
						}
						if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
							mask |= 4
						}
						if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
							mask |= 16
						}
						return mask
					},
					ioctl(sock, request, arg) {
						switch (request) {
							case 21531:
								var bytes = 0;
								if (sock.recv_queue.length) {
									bytes = sock.recv_queue[0].data.length
								}
								HEAP32[arg >>> 2 >>> 0] = bytes;
								return 0;
							default:
								return 28
						}
					},
					close(sock) {
						if (sock.server) {
							try {
								sock.server.close()
							} catch (e) {}
							sock.server = null
						}
						var peers = Object.keys(sock.peers);
						for (var i = 0; i < peers.length; i++) {
							var peer = sock.peers[peers[i]];
							try {
								peer.socket.close()
							} catch (e) {}
							SOCKFS.websocket_sock_ops.removePeer(sock, peer)
						}
						return 0
					},
					bind(sock, addr, port) {
						if (typeof sock.saddr != "undefined" || typeof sock.sport != "undefined") {
							throw new FS.ErrnoError(28)
						}
						sock.saddr = addr;
						sock.sport = port;
						if (sock.type === 2) {
							if (sock.server) {
								sock.server.close();
								sock.server = null
							}
							try {
								sock.sock_ops.listen(sock, 0)
							} catch (e) {
								if (!(e.name === "ErrnoError")) throw e;
								if (e.errno !== 138) throw e
							}
						}
					},
					connect(sock, addr, port) {
						if (sock.server) {
							throw new FS.ErrnoError(138)
						}
						if (typeof sock.daddr != "undefined" && typeof sock.dport != "undefined") {
							var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
							if (dest) {
								if (dest.socket.readyState === dest.socket.CONNECTING) {
									throw new FS.ErrnoError(7)
								} else {
									throw new FS.ErrnoError(30)
								}
							}
						}
						var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
						sock.daddr = peer.addr;
						sock.dport = peer.port;
						throw new FS.ErrnoError(26)
					},
					listen(sock, backlog) {
						if (!ENVIRONMENT_IS_NODE) {
							throw new FS.ErrnoError(138)
						}
						if (sock.server) {
							throw new FS.ErrnoError(28)
						}
						var WebSocketServer = require("ws").Server;
						var host = sock.saddr;
						sock.server = new WebSocketServer({
							host: host,
							port: sock.sport
						});
						Module["websocket"].emit("listen", sock.stream.fd);
						sock.server.on("connection", function(ws) {
							if (sock.type === 1) {
								var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
								var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
								newsock.daddr = peer.addr;
								newsock.dport = peer.port;
								sock.pending.push(newsock);
								Module["websocket"].emit("connection", newsock.stream.fd)
							} else {
								SOCKFS.websocket_sock_ops.createPeer(sock, ws);
								Module["websocket"].emit("connection", sock.stream.fd)
							}
						});
						sock.server.on("close", function() {
							Module["websocket"].emit("close", sock.stream.fd);
							sock.server = null
						});
						sock.server.on("error", function(error) {
							sock.error = 23;
							Module["websocket"].emit("error", [sock.stream.fd, sock.error, "EHOSTUNREACH: Host is unreachable"])
						})
					},
					accept(listensock) {
						if (!listensock.server || !listensock.pending.length) {
							throw new FS.ErrnoError(28)
						}
						var newsock = listensock.pending.shift();
						newsock.stream.flags = listensock.stream.flags;
						return newsock
					},
					getname(sock, peer) {
						var addr, port;
						if (peer) {
							if (sock.daddr === undefined || sock.dport === undefined) {
								throw new FS.ErrnoError(53)
							}
							addr = sock.daddr;
							port = sock.dport
						} else {
							addr = sock.saddr || 0;
							port = sock.sport || 0
						}
						return {
							addr: addr,
							port: port
						}
					},
					sendmsg(sock, buffer, offset, length, addr, port) {
						if (sock.type === 2) {
							if (addr === undefined || port === undefined) {
								addr = sock.daddr;
								port = sock.dport
							}
							if (addr === undefined || port === undefined) {
								throw new FS.ErrnoError(17)
							}
						} else {
							addr = sock.daddr;
							port = sock.dport
						}
						var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
						if (sock.type === 1) {
							if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
								throw new FS.ErrnoError(53)
							} else if (dest.socket.readyState === dest.socket.CONNECTING) {
								throw new FS.ErrnoError(6)
							}
						}
						if (ArrayBuffer.isView(buffer)) {
							offset += buffer.byteOffset;
							buffer = buffer.buffer
						}
						var data;
						data = buffer.slice(offset, offset + length);
						if (sock.type === 2) {
							if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
								if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
									dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port)
								}
								dest.dgram_send_queue.push(data);
								return length
							}
						}
						try {
							dest.socket.send(data);
							return length
						} catch (e) {
							throw new FS.ErrnoError(28)
						}
					},
					recvmsg(sock, length) {
						if (sock.type === 1 && sock.server) {
							throw new FS.ErrnoError(53)
						}
						var queued = sock.recv_queue.shift();
						if (!queued) {
							if (sock.type === 1) {
								var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
								if (!dest) {
									throw new FS.ErrnoError(53)
								}
								if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
									return null
								}
								throw new FS.ErrnoError(6)
							}
							throw new FS.ErrnoError(6)
						}
						var queuedLength = queued.data.byteLength || queued.data.length;
						var queuedOffset = queued.data.byteOffset || 0;
						var queuedBuffer = queued.data.buffer || queued.data;
						var bytesRead = Math.min(length, queuedLength);
						var res = {
							buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
							addr: queued.addr,
							port: queued.port
						};
						if (sock.type === 1 && bytesRead < queuedLength) {
							var bytesRemaining = queuedLength - bytesRead;
							queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
							sock.recv_queue.unshift(queued)
						}
						return res
					}
				}
			};
			var getSocketFromFD = fd => {
				var socket = SOCKFS.getSocket(fd);
				if (!socket) throw new FS.ErrnoError(8);
				return socket
			};
			var inetNtop4 = addr => (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
			var inetNtop6 = ints => {
				var str = "";
				var word = 0;
				var longest = 0;
				var lastzero = 0;
				var zstart = 0;
				var len = 0;
				var i = 0;
				var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
				var hasipv4 = true;
				var v4part = "";
				for (i = 0; i < 5; i++) {
					if (parts[i] !== 0) {
						hasipv4 = false;
						break
					}
				}
				if (hasipv4) {
					v4part = inetNtop4(parts[6] | parts[7] << 16);
					if (parts[5] === -1) {
						str = "::ffff:";
						str += v4part;
						return str
					}
					if (parts[5] === 0) {
						str = "::";
						if (v4part === "0.0.0.0") v4part = "";
						if (v4part === "0.0.0.1") v4part = "1";
						str += v4part;
						return str
					}
				}
				for (word = 0; word < 8; word++) {
					if (parts[word] === 0) {
						if (word - lastzero > 1) {
							len = 0
						}
						lastzero = word;
						len++
					}
					if (len > longest) {
						longest = len;
						zstart = word - longest + 1
					}
				}
				for (word = 0; word < 8; word++) {
					if (longest > 1) {
						if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
							if (word === zstart) {
								str += ":";
								if (zstart === 0) str += ":"
							}
							continue
						}
					}
					str += Number(_ntohs(parts[word] & 65535)).toString(16);
					str += word < 7 ? ":" : ""
				}
				return str
			};
			var readSockaddr = (sa, salen) => {
				var family = HEAP16[sa >>> 1 >>> 0];
				var port = _ntohs(HEAPU16[sa + 2 >>> 1 >>> 0]);
				var addr;
				switch (family) {
					case 2:
						if (salen !== 16) {
							return {
								errno: 28
							}
						}
						addr = HEAP32[sa + 4 >>> 2 >>> 0];
						addr = inetNtop4(addr);
						break;
					case 10:
						if (salen !== 28) {
							return {
								errno: 28
							}
						}
						addr = [HEAP32[sa + 8 >>> 2 >>> 0], HEAP32[sa + 12 >>> 2 >>> 0], HEAP32[sa + 16 >>> 2 >>> 0], HEAP32[sa + 20 >>> 2 >>> 0]];
						addr = inetNtop6(addr);
						break;
					default:
						return {
							errno: 5
						}
				}
				return {
					family: family,
					addr: addr,
					port: port
				}
			};
			var inetPton4 = str => {
				var b = str.split(".");
				for (var i = 0; i < 4; i++) {
					var tmp = Number(b[i]);
					if (isNaN(tmp)) return null;
					b[i] = tmp
				}
				return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0
			};
			var jstoi_q = str => parseInt(str);
			var inetPton6 = str => {
				var words;
				var w, offset, z;
				var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
				var parts = [];
				if (!valid6regx.test(str)) {
					return null
				}
				if (str === "::") {
					return [0, 0, 0, 0, 0, 0, 0, 0]
				}
				if (str.startsWith("::")) {
					str = str.replace("::", "Z:")
				} else {
					str = str.replace("::", ":Z:")
				}
				if (str.indexOf(".") > 0) {
					str = str.replace(new RegExp("[.]", "g"), ":");
					words = str.split(":");
					words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
					words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
					words = words.slice(0, words.length - 2)
				} else {
					words = str.split(":")
				}
				offset = 0;
				z = 0;
				for (w = 0; w < words.length; w++) {
					if (typeof words[w] == "string") {
						if (words[w] === "Z") {
							for (z = 0; z < 8 - words.length + 1; z++) {
								parts[w + z] = 0
							}
							offset = z - 1
						} else {
							parts[w + offset] = _htons(parseInt(words[w], 16))
						}
					} else {
						parts[w + offset] = words[w]
					}
				}
				return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]]
			};
			var DNS = {
				address_map: {
					id: 1,
					addrs: {},
					names: {}
				},
				lookup_name(name) {
					var res = inetPton4(name);
					if (res !== null) {
						return name
					}
					res = inetPton6(name);
					if (res !== null) {
						return name
					}
					var addr;
					if (DNS.address_map.addrs[name]) {
						addr = DNS.address_map.addrs[name]
					} else {
						var id = DNS.address_map.id++;
						assert(id < 65535, "exceeded max address mappings of 65535");
						addr = "172.29." + (id & 255) + "." + (id & 65280);
						DNS.address_map.names[addr] = name;
						DNS.address_map.addrs[name] = addr
					}
					return addr
				},
				lookup_addr(addr) {
					if (DNS.address_map.names[addr]) {
						return DNS.address_map.names[addr]
					}
					return null
				}
			};
			var getSocketAddress = (addrp, addrlen, allowNull) => {
				if (allowNull && addrp === 0) return null;
				var info = readSockaddr(addrp, addrlen);
				if (info.errno) throw new FS.ErrnoError(info.errno);
				info.addr = DNS.lookup_addr(info.addr) || info.addr;
				return info
			};

			function ___syscall_connect(fd, addr, addrlen, d1, d2, d3) {
				addr >>>= 0;
				addrlen >>>= 0;
				try {
					var sock = getSocketFromFD(fd);
					var info = getSocketAddress(addr, addrlen);
					sock.sock_ops.connect(sock, info.addr, info.port);
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}
			var UTF8ToString = (ptr, maxBytesToRead) => {
				ptr >>>= 0;
				return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
			};
			var SYSCALLS = {
				DEFAULT_POLLMASK: 5,
				calculateAt(dirfd, path, allowEmpty) {
					if (PATH.isAbs(path)) {
						return path
					}
					var dir;
					if (dirfd === -100) {
						dir = FS.cwd()
					} else {
						var dirstream = SYSCALLS.getStreamFromFD(dirfd);
						dir = dirstream.path
					}
					if (path.length == 0) {
						if (!allowEmpty) {
							throw new FS.ErrnoError(44)
						}
						return dir
					}
					return PATH.join2(dir, path)
				},
				doStat(func, path, buf) {
					var stat = func(path);
					HEAP32[buf >>> 2 >>> 0] = stat.dev;
					HEAP32[buf + 4 >>> 2 >>> 0] = stat.mode;
					HEAPU32[buf + 8 >>> 2 >>> 0] = stat.nlink;
					HEAP32[buf + 12 >>> 2 >>> 0] = stat.uid;
					HEAP32[buf + 16 >>> 2 >>> 0] = stat.gid;
					HEAP32[buf + 20 >>> 2 >>> 0] = stat.rdev;
					HEAP64[buf + 24 >>> 3] = BigInt(stat.size);
					HEAP32[buf + 32 >>> 2 >>> 0] = 4096;
					HEAP32[buf + 36 >>> 2 >>> 0] = stat.blocks;
					var atime = stat.atime.getTime();
					var mtime = stat.mtime.getTime();
					var ctime = stat.ctime.getTime();
					HEAP64[buf + 40 >>> 3] = BigInt(Math.floor(atime / 1e3));
					HEAPU32[buf + 48 >>> 2 >>> 0] = atime % 1e3 * 1e3;
					HEAP64[buf + 56 >>> 3] = BigInt(Math.floor(mtime / 1e3));
					HEAPU32[buf + 64 >>> 2 >>> 0] = mtime % 1e3 * 1e3;
					HEAP64[buf + 72 >>> 3] = BigInt(Math.floor(ctime / 1e3));
					HEAPU32[buf + 80 >>> 2 >>> 0] = ctime % 1e3 * 1e3;
					HEAP64[buf + 88 >>> 3] = BigInt(stat.ino);
					return 0
				},
				doMsync(addr, stream, len, flags, offset) {
					if (!FS.isFile(stream.node.mode)) {
						throw new FS.ErrnoError(43)
					}
					if (flags & 2) {
						return 0
					}
					var buffer = HEAPU8.slice(addr, addr + len);
					FS.msync(stream, buffer, offset, len, flags)
				},
				getStreamFromFD(fd) {
					var stream = FS.getStreamChecked(fd);
					return stream
				},
				varargs: undefined,
				getStr(ptr) {
					var ret = UTF8ToString(ptr);
					return ret
				}
			};

			function ___syscall_faccessat(dirfd, path, amode, flags) {
				path >>>= 0;
				try {
					path = SYSCALLS.getStr(path);
					path = SYSCALLS.calculateAt(dirfd, path);
					if (amode & ~7) {
						return -28
					}
					var lookup = FS.lookupPath(path, {
						follow: true
					});
					var node = lookup.node;
					if (!node) {
						return -44
					}
					var perms = "";
					if (amode & 4) perms += "r";
					if (amode & 2) perms += "w";
					if (amode & 1) perms += "x";
					if (perms && FS.nodePermissions(node, perms)) {
						return -2
					}
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function syscallGetVarargI() {
				var ret = HEAP32[+SYSCALLS.varargs >>> 2 >>> 0];
				SYSCALLS.varargs += 4;
				return ret
			}
			var syscallGetVarargP = syscallGetVarargI;

			function ___syscall_fcntl64(fd, cmd, varargs) {
				varargs >>>= 0;
				SYSCALLS.varargs = varargs;
				try {
					var stream = SYSCALLS.getStreamFromFD(fd);
					switch (cmd) {
						case 0: {
							var arg = syscallGetVarargI();
							if (arg < 0) {
								return -28
							}
							while (FS.streams[arg]) {
								arg++
							}
							var newStream;
							newStream = FS.dupStream(stream, arg);
							return newStream.fd
						}
						case 1:
						case 2:
							return 0;
						case 3:
							return stream.flags;
						case 4: {
							var arg = syscallGetVarargI();
							stream.flags |= arg;
							return 0
						}
						case 12: {
							var arg = syscallGetVarargP();
							var offset = 0;
							HEAP16[arg + offset >>> 1 >>> 0] = 2;
							return 0
						}
						case 13:
						case 14:
							return 0
					}
					return -28
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_fstat64(fd, buf) {
				buf >>>= 0;
				try {
					var stream = SYSCALLS.getStreamFromFD(fd);
					return SYSCALLS.doStat(FS.stat, stream.path, buf)
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}
			var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);

			function ___syscall_getcwd(buf, size) {
				buf >>>= 0;
				size >>>= 0;
				try {
					if (size === 0) return -28;
					var cwd = FS.cwd();
					var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
					if (size < cwdLengthInBytes) return -68;
					stringToUTF8(cwd, buf, size);
					return cwdLengthInBytes
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_getdents64(fd, dirp, count) {
				dirp >>>= 0;
				count >>>= 0;
				try {
					var stream = SYSCALLS.getStreamFromFD(fd);
					stream.getdents ||= FS.readdir(stream.path);
					var struct_size = 280;
					var pos = 0;
					var off = FS.llseek(stream, 0, 1);
					var idx = Math.floor(off / struct_size);
					while (idx < stream.getdents.length && pos + struct_size <= count) {
						var id;
						var type;
						var name = stream.getdents[idx];
						if (name === ".") {
							id = stream.node.id;
							type = 4
						} else if (name === "..") {
							var lookup = FS.lookupPath(stream.path, {
								parent: true
							});
							id = lookup.node.id;
							type = 4
						} else {
							var child = FS.lookupNode(stream.node, name);
							id = child.id;
							type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8
						}
						HEAP64[dirp + pos >>> 3] = BigInt(id);
						HEAP64[dirp + pos + 8 >>> 3] = BigInt((idx + 1) * struct_size);
						HEAP16[dirp + pos + 16 >>> 1 >>> 0] = 280;
						HEAP8[dirp + pos + 18 >>> 0] = type;
						stringToUTF8(name, dirp + pos + 19, 256);
						pos += struct_size;
						idx += 1
					}
					FS.llseek(stream, idx * struct_size, 0);
					return pos
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_ioctl(fd, op, varargs) {
				varargs >>>= 0;
				SYSCALLS.varargs = varargs;
				try {
					var stream = SYSCALLS.getStreamFromFD(fd);
					switch (op) {
						case 21509: {
							if (!stream.tty) return -59;
							return 0
						}
						case 21505: {
							if (!stream.tty) return -59;
							if (stream.tty.ops.ioctl_tcgets) {
								var termios = stream.tty.ops.ioctl_tcgets(stream);
								var argp = syscallGetVarargP();
								HEAP32[argp >>> 2 >>> 0] = termios.c_iflag || 0;
								HEAP32[argp + 4 >>> 2 >>> 0] = termios.c_oflag || 0;
								HEAP32[argp + 8 >>> 2 >>> 0] = termios.c_cflag || 0;
								HEAP32[argp + 12 >>> 2 >>> 0] = termios.c_lflag || 0;
								for (var i = 0; i < 32; i++) {
									HEAP8[argp + i + 17 >>> 0] = termios.c_cc[i] || 0
								}
								return 0
							}
							return 0
						}
						case 21510:
						case 21511:
						case 21512: {
							if (!stream.tty) return -59;
							return 0
						}
						case 21506:
						case 21507:
						case 21508: {
							if (!stream.tty) return -59;
							if (stream.tty.ops.ioctl_tcsets) {
								var argp = syscallGetVarargP();
								var c_iflag = HEAP32[argp >>> 2 >>> 0];
								var c_oflag = HEAP32[argp + 4 >>> 2 >>> 0];
								var c_cflag = HEAP32[argp + 8 >>> 2 >>> 0];
								var c_lflag = HEAP32[argp + 12 >>> 2 >>> 0];
								var c_cc = [];
								for (var i = 0; i < 32; i++) {
									c_cc.push(HEAP8[argp + i + 17 >>> 0])
								}
								return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
									c_iflag: c_iflag,
									c_oflag: c_oflag,
									c_cflag: c_cflag,
									c_lflag: c_lflag,
									c_cc: c_cc
								})
							}
							return 0
						}
						case 21519: {
							if (!stream.tty) return -59;
							var argp = syscallGetVarargP();
							HEAP32[argp >>> 2 >>> 0] = 0;
							return 0
						}
						case 21520: {
							if (!stream.tty) return -59;
							return -28
						}
						case 21531: {
							var argp = syscallGetVarargP();
							return FS.ioctl(stream, op, argp)
						}
						case 21523: {
							if (!stream.tty) return -59;
							if (stream.tty.ops.ioctl_tiocgwinsz) {
								var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
								var argp = syscallGetVarargP();
								HEAP16[argp >>> 1 >>> 0] = winsize[0];
								HEAP16[argp + 2 >>> 1 >>> 0] = winsize[1]
							}
							return 0
						}
						case 21524: {
							if (!stream.tty) return -59;
							return 0
						}
						case 21515: {
							if (!stream.tty) return -59;
							return 0
						}
						default:
							return -28
					}
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_lstat64(path, buf) {
				path >>>= 0;
				buf >>>= 0;
				try {
					path = SYSCALLS.getStr(path);
					return SYSCALLS.doStat(FS.lstat, path, buf)
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_mkdirat(dirfd, path, mode) {
				path >>>= 0;
				try {
					path = SYSCALLS.getStr(path);
					path = SYSCALLS.calculateAt(dirfd, path);
					path = PATH.normalize(path);
					if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
					FS.mkdir(path, mode, 0);
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_newfstatat(dirfd, path, buf, flags) {
				path >>>= 0;
				buf >>>= 0;
				try {
					path = SYSCALLS.getStr(path);
					var nofollow = flags & 256;
					var allowEmpty = flags & 4096;
					flags = flags & ~6400;
					path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
					return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf)
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_openat(dirfd, path, flags, varargs) {
				path >>>= 0;
				varargs >>>= 0;
				SYSCALLS.varargs = varargs;
				try {
					path = SYSCALLS.getStr(path);
					path = SYSCALLS.calculateAt(dirfd, path);
					var mode = varargs ? syscallGetVarargI() : 0;
					return FS.open(path, flags, mode).fd
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
				path >>>= 0;
				buf >>>= 0;
				bufsize >>>= 0;
				try {
					path = SYSCALLS.getStr(path);
					path = SYSCALLS.calculateAt(dirfd, path);
					if (bufsize <= 0) return -28;
					var ret = FS.readlink(path);
					var len = Math.min(bufsize, lengthBytesUTF8(ret));
					var endChar = HEAP8[buf + len >>> 0];
					stringToUTF8(ret, buf, bufsize + 1);
					HEAP8[buf + len >>> 0] = endChar;
					return len
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
				oldpath >>>= 0;
				newpath >>>= 0;
				try {
					oldpath = SYSCALLS.getStr(oldpath);
					newpath = SYSCALLS.getStr(newpath);
					oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
					newpath = SYSCALLS.calculateAt(newdirfd, newpath);
					FS.rename(oldpath, newpath);
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_rmdir(path) {
				path >>>= 0;
				try {
					path = SYSCALLS.getStr(path);
					FS.rmdir(path);
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
				message >>>= 0;
				length >>>= 0;
				addr >>>= 0;
				addr_len >>>= 0;
				try {
					var sock = getSocketFromFD(fd);
					var dest = getSocketAddress(addr, addr_len, true);
					if (!dest) {
						return FS.write(sock.stream, HEAP8, message, length)
					}
					return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port)
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_socket(domain, type, protocol) {
				try {
					var sock = SOCKFS.createSocket(domain, type, protocol);
					return sock.stream.fd
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_stat64(path, buf) {
				path >>>= 0;
				buf >>>= 0;
				try {
					path = SYSCALLS.getStr(path);
					return SYSCALLS.doStat(FS.stat, path, buf)
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function ___syscall_unlinkat(dirfd, path, flags) {
				path >>>= 0;
				try {
					path = SYSCALLS.getStr(path);
					path = SYSCALLS.calculateAt(dirfd, path);
					if (flags === 0) {
						FS.unlink(path)
					} else if (flags === 512) {
						FS.rmdir(path)
					} else {
						abort("Invalid flags passed to unlinkat")
					}
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}
			var __abort_js = () => {
				abort("")
			};
			var structRegistrations = {};
			var runDestructors = destructors => {
				while (destructors.length) {
					var ptr = destructors.pop();
					var del = destructors.pop();
					del(ptr)
				}
			};

			function readPointer(pointer) {
				return this["fromWireType"](HEAPU32[pointer >>> 2 >>> 0])
			}
			var awaitingDependencies = {};
			var registeredTypes = {};
			var typeDependencies = {};
			var InternalError;
			var throwInternalError = message => {
				throw new InternalError(message)
			};
			var whenDependentTypesAreResolved = (myTypes, dependentTypes, getTypeConverters) => {
				myTypes.forEach(function(type) {
					typeDependencies[type] = dependentTypes
				});

				function onComplete(typeConverters) {
					var myTypeConverters = getTypeConverters(typeConverters);
					if (myTypeConverters.length !== myTypes.length) {
						throwInternalError("Mismatched type converter count")
					}
					for (var i = 0; i < myTypes.length; ++i) {
						registerType(myTypes[i], myTypeConverters[i])
					}
				}
				var typeConverters = new Array(dependentTypes.length);
				var unregisteredTypes = [];
				var registered = 0;
				dependentTypes.forEach((dt, i) => {
					if (registeredTypes.hasOwnProperty(dt)) {
						typeConverters[i] = registeredTypes[dt]
					} else {
						unregisteredTypes.push(dt);
						if (!awaitingDependencies.hasOwnProperty(dt)) {
							awaitingDependencies[dt] = []
						}
						awaitingDependencies[dt].push(() => {
							typeConverters[i] = registeredTypes[dt];
							++registered;
							if (registered === unregisteredTypes.length) {
								onComplete(typeConverters)
							}
						})
					}
				});
				if (0 === unregisteredTypes.length) {
					onComplete(typeConverters)
				}
			};
			var __embind_finalize_value_object = function(structType) {
				structType >>>= 0;
				var reg = structRegistrations[structType];
				delete structRegistrations[structType];
				var rawConstructor = reg.rawConstructor;
				var rawDestructor = reg.rawDestructor;
				var fieldRecords = reg.fields;
				var fieldTypes = fieldRecords.map(field => field.getterReturnType).concat(fieldRecords.map(field => field.setterArgumentType));
				whenDependentTypesAreResolved([structType], fieldTypes, fieldTypes => {
					var fields = {};
					fieldRecords.forEach((field, i) => {
						var fieldName = field.fieldName;
						var getterReturnType = fieldTypes[i];
						var getter = field.getter;
						var getterContext = field.getterContext;
						var setterArgumentType = fieldTypes[i + fieldRecords.length];
						var setter = field.setter;
						var setterContext = field.setterContext;
						fields[fieldName] = {
							read: ptr => getterReturnType["fromWireType"](getter(getterContext, ptr)),
							write: (ptr, o) => {
								var destructors = [];
								setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
								runDestructors(destructors)
							}
						}
					});
					return [{
						name: reg.name,
						fromWireType: ptr => {
							var rv = {};
							for (var i in fields) {
								rv[i] = fields[i].read(ptr)
							}
							rawDestructor(ptr);
							return rv
						},
						toWireType: (destructors, o) => {
							for (var fieldName in fields) {
								if (!(fieldName in o)) {
									throw new TypeError(`Missing field: "${fieldName}"`)
								}
							}
							var ptr = rawConstructor();
							for (fieldName in fields) {
								fields[fieldName].write(ptr, o[fieldName])
							}
							if (destructors !== null) {
								destructors.push(rawDestructor, ptr)
							}
							return ptr
						},
						argPackAdvance: GenericWireTypeSize,
						readValueFromPointer: readPointer,
						destructorFunction: rawDestructor
					}]
				})
			};
			var embindRepr = v => {
				if (v === null) {
					return "null"
				}
				var t = typeof v;
				if (t === "object" || t === "array" || t === "function") {
					return v.toString()
				} else {
					return "" + v
				}
			};
			var embind_init_charCodes = () => {
				var codes = new Array(256);
				for (var i = 0; i < 256; ++i) {
					codes[i] = String.fromCharCode(i)
				}
				embind_charCodes = codes
			};
			var embind_charCodes;
			var readLatin1String = ptr => {
				var ret = "";
				var c = ptr;
				while (HEAPU8[c >>> 0]) {
					ret += embind_charCodes[HEAPU8[c++ >>> 0]]
				}
				return ret
			};
			var BindingError;
			var throwBindingError = message => {
				throw new BindingError(message)
			};

			function sharedRegisterType(rawType, registeredInstance, options = {}) {
				var name = registeredInstance.name;
				if (!rawType) {
					throwBindingError(`type "${name}" must have a positive integer typeid pointer`)
				}
				if (registeredTypes.hasOwnProperty(rawType)) {
					if (options.ignoreDuplicateRegistrations) {
						return
					} else {
						throwBindingError(`Cannot register type '${name}' twice`)
					}
				}
				registeredTypes[rawType] = registeredInstance;
				delete typeDependencies[rawType];
				if (awaitingDependencies.hasOwnProperty(rawType)) {
					var callbacks = awaitingDependencies[rawType];
					delete awaitingDependencies[rawType];
					callbacks.forEach(cb => cb())
				}
			}

			function registerType(rawType, registeredInstance, options = {}) {
				if (!("argPackAdvance" in registeredInstance)) {
					throw new TypeError("registerType registeredInstance requires argPackAdvance")
				}
				return sharedRegisterType(rawType, registeredInstance, options)
			}
			var integerReadValueFromPointer = (name, width, signed) => {
				switch (width) {
					case 1:
						return signed ? pointer => HEAP8[pointer >>> 0] : pointer => HEAPU8[pointer >>> 0];
					case 2:
						return signed ? pointer => HEAP16[pointer >>> 1 >>> 0] : pointer => HEAPU16[pointer >>> 1 >>> 0];
					case 4:
						return signed ? pointer => HEAP32[pointer >>> 2 >>> 0] : pointer => HEAPU32[pointer >>> 2 >>> 0];
					case 8:
						return signed ? pointer => HEAP64[pointer >>> 3] : pointer => HEAPU64[pointer >>> 3];
					default:
						throw new TypeError(`invalid integer width (${width}): ${name}`)
				}
			};

			function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {
				primitiveType >>>= 0;
				name >>>= 0;
				size >>>= 0;
				name = readLatin1String(name);
				var isUnsignedType = name.indexOf("u") != -1;
				if (isUnsignedType) {
					maxRange = (1n << 64n) - 1n
				}
				registerType(primitiveType, {
					name: name,
					fromWireType: value => value,
					toWireType: function(destructors, value) {
						if (typeof value != "bigint" && typeof value != "number") {
							throw new TypeError(`Cannot convert "${embindRepr(value)}" to ${this.name}`)
						}
						if (typeof value == "number") {
							value = BigInt(value)
						}
						return value
					},
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: integerReadValueFromPointer(name, size, !isUnsignedType),
					destructorFunction: null
				})
			}
			var GenericWireTypeSize = 8;

			function __embind_register_bool(rawType, name, trueValue, falseValue) {
				rawType >>>= 0;
				name >>>= 0;
				name = readLatin1String(name);
				registerType(rawType, {
					name: name,
					fromWireType: function(wt) {
						return !!wt
					},
					toWireType: function(destructors, o) {
						return o ? trueValue : falseValue
					},
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: function(pointer) {
						return this["fromWireType"](HEAPU8[pointer >>> 0])
					},
					destructorFunction: null
				})
			}
			var shallowCopyInternalPointer = o => ({
				count: o.count,
				deleteScheduled: o.deleteScheduled,
				preservePointerOnDelete: o.preservePointerOnDelete,
				ptr: o.ptr,
				ptrType: o.ptrType,
				smartPtr: o.smartPtr,
				smartPtrType: o.smartPtrType
			});
			var throwInstanceAlreadyDeleted = obj => {
				function getInstanceTypeName(handle) {
					return handle.$$.ptrType.registeredClass.name
				}
				throwBindingError(getInstanceTypeName(obj) + " instance already deleted")
			};
			var finalizationRegistry = false;
			var detachFinalizer = handle => {};
			var runDestructor = $$ => {
				if ($$.smartPtr) {
					$$.smartPtrType.rawDestructor($$.smartPtr)
				} else {
					$$.ptrType.registeredClass.rawDestructor($$.ptr)
				}
			};
			var releaseClassHandle = $$ => {
				$$.count.value -= 1;
				var toDelete = 0 === $$.count.value;
				if (toDelete) {
					runDestructor($$)
				}
			};
			var downcastPointer = (ptr, ptrClass, desiredClass) => {
				if (ptrClass === desiredClass) {
					return ptr
				}
				if (undefined === desiredClass.baseClass) {
					return null
				}
				var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
				if (rv === null) {
					return null
				}
				return desiredClass.downcast(rv)
			};
			var registeredPointers = {};
			var getInheritedInstanceCount = () => Object.keys(registeredInstances).length;
			var getLiveInheritedInstances = () => {
				var rv = [];
				for (var k in registeredInstances) {
					if (registeredInstances.hasOwnProperty(k)) {
						rv.push(registeredInstances[k])
					}
				}
				return rv
			};
			var deletionQueue = [];
			var flushPendingDeletes = () => {
				while (deletionQueue.length) {
					var obj = deletionQueue.pop();
					obj.$$.deleteScheduled = false;
					obj["delete"]()
				}
			};
			var delayFunction;
			var setDelayFunction = fn => {
				delayFunction = fn;
				if (deletionQueue.length && delayFunction) {
					delayFunction(flushPendingDeletes)
				}
			};
			var init_embind = () => {
				Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
				Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
				Module["flushPendingDeletes"] = flushPendingDeletes;
				Module["setDelayFunction"] = setDelayFunction
			};
			var registeredInstances = {};
			var getBasestPointer = (class_, ptr) => {
				if (ptr === undefined) {
					throwBindingError("ptr should not be undefined")
				}
				while (class_.baseClass) {
					ptr = class_.upcast(ptr);
					class_ = class_.baseClass
				}
				return ptr
			};
			var getInheritedInstance = (class_, ptr) => {
				ptr = getBasestPointer(class_, ptr);
				return registeredInstances[ptr]
			};
			var makeClassHandle = (prototype, record) => {
				if (!record.ptrType || !record.ptr) {
					throwInternalError("makeClassHandle requires ptr and ptrType")
				}
				var hasSmartPtrType = !!record.smartPtrType;
				var hasSmartPtr = !!record.smartPtr;
				if (hasSmartPtrType !== hasSmartPtr) {
					throwInternalError("Both smartPtrType and smartPtr must be specified")
				}
				record.count = {
					value: 1
				};
				return attachFinalizer(Object.create(prototype, {
					$$: {
						value: record,
						writable: true
					}
				}))
			};

			function RegisteredPointer_fromWireType(ptr) {
				var rawPointer = this.getPointee(ptr);
				if (!rawPointer) {
					this.destructor(ptr);
					return null
				}
				var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
				if (undefined !== registeredInstance) {
					if (0 === registeredInstance.$$.count.value) {
						registeredInstance.$$.ptr = rawPointer;
						registeredInstance.$$.smartPtr = ptr;
						return registeredInstance["clone"]()
					} else {
						var rv = registeredInstance["clone"]();
						this.destructor(ptr);
						return rv
					}
				}

				function makeDefaultHandle() {
					if (this.isSmartPointer) {
						return makeClassHandle(this.registeredClass.instancePrototype, {
							ptrType: this.pointeeType,
							ptr: rawPointer,
							smartPtrType: this,
							smartPtr: ptr
						})
					} else {
						return makeClassHandle(this.registeredClass.instancePrototype, {
							ptrType: this,
							ptr: ptr
						})
					}
				}
				var actualType = this.registeredClass.getActualType(rawPointer);
				var registeredPointerRecord = registeredPointers[actualType];
				if (!registeredPointerRecord) {
					return makeDefaultHandle.call(this)
				}
				var toType;
				if (this.isConst) {
					toType = registeredPointerRecord.constPointerType
				} else {
					toType = registeredPointerRecord.pointerType
				}
				var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
				if (dp === null) {
					return makeDefaultHandle.call(this)
				}
				if (this.isSmartPointer) {
					return makeClassHandle(toType.registeredClass.instancePrototype, {
						ptrType: toType,
						ptr: dp,
						smartPtrType: this,
						smartPtr: ptr
					})
				} else {
					return makeClassHandle(toType.registeredClass.instancePrototype, {
						ptrType: toType,
						ptr: dp
					})
				}
			}
			var attachFinalizer = handle => {
				if ("undefined" === typeof FinalizationRegistry) {
					attachFinalizer = handle => handle;
					return handle
				}
				finalizationRegistry = new FinalizationRegistry(info => {
					releaseClassHandle(info.$$)
				});
				attachFinalizer = handle => {
					var $$ = handle.$$;
					var hasSmartPtr = !!$$.smartPtr;
					if (hasSmartPtr) {
						var info = {
							$$: $$
						};
						finalizationRegistry.register(handle, info, handle)
					}
					return handle
				};
				detachFinalizer = handle => finalizationRegistry.unregister(handle);
				return attachFinalizer(handle)
			};
			var init_ClassHandle = () => {
				Object.assign(ClassHandle.prototype, {
					isAliasOf(other) {
						if (!(this instanceof ClassHandle)) {
							return false
						}
						if (!(other instanceof ClassHandle)) {
							return false
						}
						var leftClass = this.$$.ptrType.registeredClass;
						var left = this.$$.ptr;
						other.$$ = other.$$;
						var rightClass = other.$$.ptrType.registeredClass;
						var right = other.$$.ptr;
						while (leftClass.baseClass) {
							left = leftClass.upcast(left);
							leftClass = leftClass.baseClass
						}
						while (rightClass.baseClass) {
							right = rightClass.upcast(right);
							rightClass = rightClass.baseClass
						}
						return leftClass === rightClass && left === right
					},
					clone() {
						if (!this.$$.ptr) {
							throwInstanceAlreadyDeleted(this)
						}
						if (this.$$.preservePointerOnDelete) {
							this.$$.count.value += 1;
							return this
						} else {
							var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
								$$: {
									value: shallowCopyInternalPointer(this.$$)
								}
							}));
							clone.$$.count.value += 1;
							clone.$$.deleteScheduled = false;
							return clone
						}
					},
					delete() {
						if (!this.$$.ptr) {
							throwInstanceAlreadyDeleted(this)
						}
						if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
							throwBindingError("Object already scheduled for deletion")
						}
						detachFinalizer(this);
						releaseClassHandle(this.$$);
						if (!this.$$.preservePointerOnDelete) {
							this.$$.smartPtr = undefined;
							this.$$.ptr = undefined
						}
					},
					isDeleted() {
						return !this.$$.ptr
					},
					deleteLater() {
						if (!this.$$.ptr) {
							throwInstanceAlreadyDeleted(this)
						}
						if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
							throwBindingError("Object already scheduled for deletion")
						}
						deletionQueue.push(this);
						if (deletionQueue.length === 1 && delayFunction) {
							delayFunction(flushPendingDeletes)
						}
						this.$$.deleteScheduled = true;
						return this
					}
				})
			};

			function ClassHandle() {}
			var createNamedFunction = (name, body) => Object.defineProperty(body, "name", {
				value: name
			});
			var ensureOverloadTable = (proto, methodName, humanName) => {
				if (undefined === proto[methodName].overloadTable) {
					var prevFunc = proto[methodName];
					proto[methodName] = function(...args) {
						if (!proto[methodName].overloadTable.hasOwnProperty(args.length)) {
							throwBindingError(`Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`)
						}
						return proto[methodName].overloadTable[args.length].apply(this, args)
					};
					proto[methodName].overloadTable = [];
					proto[methodName].overloadTable[prevFunc.argCount] = prevFunc
				}
			};
			var exposePublicSymbol = (name, value, numArguments) => {
				if (Module.hasOwnProperty(name)) {
					if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
						throwBindingError(`Cannot register public name '${name}' twice`)
					}
					ensureOverloadTable(Module, name, name);
					if (Module.hasOwnProperty(numArguments)) {
						throwBindingError(`Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`)
					}
					Module[name].overloadTable[numArguments] = value
				} else {
					Module[name] = value;
					if (undefined !== numArguments) {
						Module[name].numArguments = numArguments
					}
				}
			};
			var char_0 = 48;
			var char_9 = 57;
			var makeLegalFunctionName = name => {
				if (undefined === name) {
					return "_unknown"
				}
				name = name.replace(/[^a-zA-Z0-9_]/g, "$");
				var f = name.charCodeAt(0);
				if (f >= char_0 && f <= char_9) {
					return `_${name}`
				}
				return name
			};

			function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
				this.name = name;
				this.constructor = constructor;
				this.instancePrototype = instancePrototype;
				this.rawDestructor = rawDestructor;
				this.baseClass = baseClass;
				this.getActualType = getActualType;
				this.upcast = upcast;
				this.downcast = downcast;
				this.pureVirtualFunctions = []
			}
			var upcastPointer = (ptr, ptrClass, desiredClass) => {
				while (ptrClass !== desiredClass) {
					if (!ptrClass.upcast) {
						throwBindingError(`Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`)
					}
					ptr = ptrClass.upcast(ptr);
					ptrClass = ptrClass.baseClass
				}
				return ptr
			};

			function constNoSmartPtrRawPointerToWireType(destructors, handle) {
				if (handle === null) {
					if (this.isReference) {
						throwBindingError(`null is not a valid ${this.name}`)
					}
					return 0
				}
				if (!handle.$$) {
					throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`)
				}
				if (!handle.$$.ptr) {
					throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`)
				}
				var handleClass = handle.$$.ptrType.registeredClass;
				var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
				return ptr
			}

			function genericPointerToWireType(destructors, handle) {
				var ptr;
				if (handle === null) {
					if (this.isReference) {
						throwBindingError(`null is not a valid ${this.name}`)
					}
					if (this.isSmartPointer) {
						ptr = this.rawConstructor();
						if (destructors !== null) {
							destructors.push(this.rawDestructor, ptr)
						}
						return ptr
					} else {
						return 0
					}
				}
				if (!handle || !handle.$$) {
					throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`)
				}
				if (!handle.$$.ptr) {
					throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`)
				}
				if (!this.isConst && handle.$$.ptrType.isConst) {
					throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType?handle.$$.smartPtrType.name:handle.$$.ptrType.name} to parameter type ${this.name}`)
				}
				var handleClass = handle.$$.ptrType.registeredClass;
				ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
				if (this.isSmartPointer) {
					if (undefined === handle.$$.smartPtr) {
						throwBindingError("Passing raw pointer to smart pointer is illegal")
					}
					switch (this.sharingPolicy) {
						case 0:
							if (handle.$$.smartPtrType === this) {
								ptr = handle.$$.smartPtr
							} else {
								throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType?handle.$$.smartPtrType.name:handle.$$.ptrType.name} to parameter type ${this.name}`)
							}
							break;
						case 1:
							ptr = handle.$$.smartPtr;
							break;
						case 2:
							if (handle.$$.smartPtrType === this) {
								ptr = handle.$$.smartPtr
							} else {
								var clonedHandle = handle["clone"]();
								ptr = this.rawShare(ptr, Emval.toHandle(() => clonedHandle["delete"]()));
								if (destructors !== null) {
									destructors.push(this.rawDestructor, ptr)
								}
							}
							break;
						default:
							throwBindingError("Unsupporting sharing policy")
					}
				}
				return ptr
			}

			function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
				if (handle === null) {
					if (this.isReference) {
						throwBindingError(`null is not a valid ${this.name}`)
					}
					return 0
				}
				if (!handle.$$) {
					throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`)
				}
				if (!handle.$$.ptr) {
					throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`)
				}
				if (handle.$$.ptrType.isConst) {
					throwBindingError(`Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`)
				}
				var handleClass = handle.$$.ptrType.registeredClass;
				var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
				return ptr
			}
			var init_RegisteredPointer = () => {
				Object.assign(RegisteredPointer.prototype, {
					getPointee(ptr) {
						if (this.rawGetPointee) {
							ptr = this.rawGetPointee(ptr)
						}
						return ptr
					},
					destructor(ptr) {
						this.rawDestructor?.(ptr)
					},
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: readPointer,
					fromWireType: RegisteredPointer_fromWireType
				})
			};

			function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
				this.name = name;
				this.registeredClass = registeredClass;
				this.isReference = isReference;
				this.isConst = isConst;
				this.isSmartPointer = isSmartPointer;
				this.pointeeType = pointeeType;
				this.sharingPolicy = sharingPolicy;
				this.rawGetPointee = rawGetPointee;
				this.rawConstructor = rawConstructor;
				this.rawShare = rawShare;
				this.rawDestructor = rawDestructor;
				if (!isSmartPointer && registeredClass.baseClass === undefined) {
					if (isConst) {
						this["toWireType"] = constNoSmartPtrRawPointerToWireType;
						this.destructorFunction = null
					} else {
						this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
						this.destructorFunction = null
					}
				} else {
					this["toWireType"] = genericPointerToWireType
				}
			}
			var replacePublicSymbol = (name, value, numArguments) => {
				if (!Module.hasOwnProperty(name)) {
					throwInternalError("Replacing nonexistent public symbol")
				}
				if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
					Module[name].overloadTable[numArguments] = value
				} else {
					Module[name] = value;
					Module[name].argCount = numArguments
				}
			};
			var dynCallLegacy = (sig, ptr, args) => {
				sig = sig.replace(/p/g, "i");
				var f = Module["dynCall_" + sig];
				return f(ptr, ...args)
			};
			var wasmTable;
			var dynCall = (sig, ptr, args = []) => {
				var rtn = dynCallLegacy(sig, ptr, args);
				return sig[0] == "p" ? rtn >>> 0 : rtn
			};
			var getDynCaller = (sig, ptr) => (...args) => dynCall(sig, ptr, args);
			var embind__requireFunction = (signature, rawFunction) => {
				signature = readLatin1String(signature);

				function makeDynCaller() {
					return getDynCaller(signature, rawFunction)
				}
				var fp = makeDynCaller();
				if (typeof fp != "function") {
					throwBindingError(`unknown function pointer with signature ${signature}: ${rawFunction}`)
				}
				return fp
			};
			var extendError = (baseErrorType, errorName) => {
				var errorClass = createNamedFunction(errorName, function(message) {
					this.name = errorName;
					this.message = message;
					var stack = new Error(message).stack;
					if (stack !== undefined) {
						this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "")
					}
				});
				errorClass.prototype = Object.create(baseErrorType.prototype);
				errorClass.prototype.constructor = errorClass;
				errorClass.prototype.toString = function() {
					if (this.message === undefined) {
						return this.name
					} else {
						return `${this.name}: ${this.message}`
					}
				};
				return errorClass
			};
			var UnboundTypeError;
			var getTypeName = type => {
				var ptr = ___getTypeName(type);
				var rv = readLatin1String(ptr);
				_free(ptr);
				return rv
			};
			var throwUnboundTypeError = (message, types) => {
				var unboundTypes = [];
				var seen = {};

				function visit(type) {
					if (seen[type]) {
						return
					}
					if (registeredTypes[type]) {
						return
					}
					if (typeDependencies[type]) {
						typeDependencies[type].forEach(visit);
						return
					}
					unboundTypes.push(type);
					seen[type] = true
				}
				types.forEach(visit);
				throw new UnboundTypeError(`${message}: ` + unboundTypes.map(getTypeName).join([", "]))
			};

			function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
				rawType >>>= 0;
				rawPointerType >>>= 0;
				rawConstPointerType >>>= 0;
				baseClassRawType >>>= 0;
				getActualTypeSignature >>>= 0;
				getActualType >>>= 0;
				upcastSignature >>>= 0;
				upcast >>>= 0;
				downcastSignature >>>= 0;
				downcast >>>= 0;
				name >>>= 0;
				destructorSignature >>>= 0;
				rawDestructor >>>= 0;
				name = readLatin1String(name);
				getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
				upcast &&= embind__requireFunction(upcastSignature, upcast);
				downcast &&= embind__requireFunction(downcastSignature, downcast);
				rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
				var legalFunctionName = makeLegalFunctionName(name);
				exposePublicSymbol(legalFunctionName, function() {
					throwUnboundTypeError(`Cannot construct ${name} due to unbound types`, [baseClassRawType])
				});
				whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], base => {
					base = base[0];
					var baseClass;
					var basePrototype;
					if (baseClassRawType) {
						baseClass = base.registeredClass;
						basePrototype = baseClass.instancePrototype
					} else {
						basePrototype = ClassHandle.prototype
					}
					var constructor = createNamedFunction(name, function(...args) {
						if (Object.getPrototypeOf(this) !== instancePrototype) {
							throw new BindingError("Use 'new' to construct " + name)
						}
						if (undefined === registeredClass.constructor_body) {
							throw new BindingError(name + " has no accessible constructor")
						}
						var body = registeredClass.constructor_body[args.length];
						if (undefined === body) {
							throw new BindingError(`Tried to invoke ctor of ${name} with invalid number of parameters (${args.length}) - expected (${Object.keys(registeredClass.constructor_body).toString()}) parameters instead!`)
						}
						return body.apply(this, args)
					});
					var instancePrototype = Object.create(basePrototype, {
						constructor: {
							value: constructor
						}
					});
					constructor.prototype = instancePrototype;
					var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
					if (registeredClass.baseClass) {
						registeredClass.baseClass.__derivedClasses ??= [];
						registeredClass.baseClass.__derivedClasses.push(registeredClass)
					}
					var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
					var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
					var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
					registeredPointers[rawType] = {
						pointerType: pointerConverter,
						constPointerType: constPointerConverter
					};
					replacePublicSymbol(legalFunctionName, constructor);
					return [referenceConverter, pointerConverter, constPointerConverter]
				})
			}

			function usesDestructorStack(argTypes) {
				for (var i = 1; i < argTypes.length; ++i) {
					if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
						return true
					}
				}
				return false
			}

			function newFunc(constructor, argumentList) {
				if (!(constructor instanceof Function)) {
					throw new TypeError(`new_ called with constructor type ${typeof constructor} which is not a function`)
				}
				var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {});
				dummy.prototype = constructor.prototype;
				var obj = new dummy;
				var r = constructor.apply(obj, argumentList);
				return r instanceof Object ? r : obj
			}

			function createJsInvoker(argTypes, isClassMethodFunc, returns, isAsync) {
				var needsDestructorStack = usesDestructorStack(argTypes);
				var argCount = argTypes.length;
				var argsList = "";
				var argsListWired = "";
				for (var i = 0; i < argCount - 2; ++i) {
					argsList += (i !== 0 ? ", " : "") + "arg" + i;
					argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired"
				}
				var invokerFnBody = `\n        return function (${argsList}) {\n        if (arguments.length !== ${argCount-2}) {\n          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${argCount-2}');\n        }`;
				if (needsDestructorStack) {
					invokerFnBody += "var destructors = [];\n"
				}
				var dtorStack = needsDestructorStack ? "destructors" : "null";
				var args1 = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
				if (isClassMethodFunc) {
					invokerFnBody += "var thisWired = classParam['toWireType'](" + dtorStack + ", this);\n"
				}
				for (var i = 0; i < argCount - 2; ++i) {
					invokerFnBody += "var arg" + i + "Wired = argType" + i + "['toWireType'](" + dtorStack + ", arg" + i + ");\n";
					args1.push("argType" + i)
				}
				if (isClassMethodFunc) {
					argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired
				}
				invokerFnBody += (returns || isAsync ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
				var returnVal = returns ? "rv" : "";
				args1.push("Asyncify");
				invokerFnBody += `function onDone(${returnVal}) {\n`;
				if (needsDestructorStack) {
					invokerFnBody += "runDestructors(destructors);\n"
				} else {
					for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
						var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
						if (argTypes[i].destructorFunction !== null) {
							invokerFnBody += `${paramName}_dtor(${paramName});\n`;
							args1.push(`${paramName}_dtor`)
						}
					}
				}
				if (returns) {
					invokerFnBody += "var ret = retType['fromWireType'](rv);\n" + "return ret;\n"
				} else {}
				invokerFnBody += "}\n";
				invokerFnBody += `return Asyncify.currData ? Asyncify.whenDone().then(onDone) : onDone(${returnVal});\n`;
				invokerFnBody += "}\n";
				return [args1, invokerFnBody]
			}
			var runAndAbortIfError = func => {
				try {
					return func()
				} catch (e) {
					abort(e)
				}
			};
			var handleException = e => {
				if (e instanceof ExitStatus || e == "unwind") {
					return EXITSTATUS
				}
				quit_(1, e)
			};
			var runtimeKeepaliveCounter = 0;
			var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
			var _proc_exit = code => {
				EXITSTATUS = code;
				if (!keepRuntimeAlive()) {
					Module["onExit"]?.(code);
					ABORT = true
				}
				quit_(code, new ExitStatus(code))
			};
			var exitJS = (status, implicit) => {
				EXITSTATUS = status;
				_proc_exit(status)
			};
			var _exit = exitJS;
			var maybeExit = () => {
				if (!keepRuntimeAlive()) {
					try {
						_exit(EXITSTATUS)
					} catch (e) {
						handleException(e)
					}
				}
			};
			var callUserCallback = func => {
				if (ABORT) {
					return
				}
				try {
					func();
					maybeExit()
				} catch (e) {
					handleException(e)
				}
			};
			var Asyncify = {
				instrumentWasmImports(imports) {
					var importPattern = /^(invoke_.*|__asyncjs__.*)$/;
					for (let [x, original] of Object.entries(imports)) {
						if (typeof original == "function") {
							let isAsyncifyImport = original.isAsync || importPattern.test(x)
						}
					}
				},
				instrumentWasmExports(exports) {
					var ret = {};
					for (let [x, original] of Object.entries(exports)) {
						if (typeof original == "function") {
							ret[x] = (...args) => {
								Asyncify.exportCallStack.push(x);
								try {
									return original(...args)
								} finally {
									if (!ABORT) {
										var y = Asyncify.exportCallStack.pop();
										Asyncify.maybeStopUnwind()
									}
								}
							}
						} else {
							ret[x] = original
						}
					}
					return ret
				},
				State: {
					Normal: 0,
					Unwinding: 1,
					Rewinding: 2,
					Disabled: 3
				},
				state: 0,
				StackSize: 4096,
				currData: null,
				handleSleepReturnValue: 0,
				exportCallStack: [],
				callStackNameToId: {},
				callStackIdToName: {},
				callStackId: 0,
				asyncPromiseHandlers: null,
				sleepCallbacks: [],
				getCallStackId(funcName) {
					var id = Asyncify.callStackNameToId[funcName];
					if (id === undefined) {
						id = Asyncify.callStackId++;
						Asyncify.callStackNameToId[funcName] = id;
						Asyncify.callStackIdToName[id] = funcName
					}
					return id
				},
				maybeStopUnwind() {
					if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
						Asyncify.state = Asyncify.State.Normal;
						runAndAbortIfError(_asyncify_stop_unwind);
						if (typeof Fibers != "undefined") {
							Fibers.trampoline()
						}
					}
				},
				whenDone() {
					return new Promise((resolve, reject) => {
						Asyncify.asyncPromiseHandlers = {
							resolve: resolve,
							reject: reject
						}
					})
				},
				allocateData() {
					var ptr = _malloc(12 + Asyncify.StackSize);
					Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
					Asyncify.setDataRewindFunc(ptr);
					return ptr
				},
				setDataHeader(ptr, stack, stackSize) {
					HEAPU32[ptr >>> 2 >>> 0] = stack;
					HEAPU32[ptr + 4 >>> 2 >>> 0] = stack + stackSize
				},
				setDataRewindFunc(ptr) {
					var bottomOfCallStack = Asyncify.exportCallStack[0];
					var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
					HEAP32[ptr + 8 >>> 2 >>> 0] = rewindId
				},
				getDataRewindFuncName(ptr) {
					var id = HEAP32[ptr + 8 >>> 2 >>> 0];
					var name = Asyncify.callStackIdToName[id];
					return name
				},
				getDataRewindFunc(name) {
					var func = wasmExports[name];
					return func
				},
				doRewind(ptr) {
					var name = Asyncify.getDataRewindFuncName(ptr);
					var func = Asyncify.getDataRewindFunc(name);
					return func()
				},
				handleSleep(startAsync) {
					if (ABORT) return;
					if (Asyncify.state === Asyncify.State.Normal) {
						var reachedCallback = false;
						var reachedAfterCallback = false;
						startAsync((handleSleepReturnValue = 0) => {
							if (ABORT) return;
							Asyncify.handleSleepReturnValue = handleSleepReturnValue;
							reachedCallback = true;
							if (!reachedAfterCallback) {
								return
							}
							Asyncify.state = Asyncify.State.Rewinding;
							runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
							if (typeof Browser != "undefined" && Browser.mainLoop.func) {
								Browser.mainLoop.resume()
							}
							var asyncWasmReturnValue, isError = false;
							try {
								asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData)
							} catch (err) {
								asyncWasmReturnValue = err;
								isError = true
							}
							var handled = false;
							if (!Asyncify.currData) {
								var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
								if (asyncPromiseHandlers) {
									Asyncify.asyncPromiseHandlers = null;
									(isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
									handled = true
								}
							}
							if (isError && !handled) {
								throw asyncWasmReturnValue
							}
						});
						reachedAfterCallback = true;
						if (!reachedCallback) {
							Asyncify.state = Asyncify.State.Unwinding;
							Asyncify.currData = Asyncify.allocateData();
							if (typeof Browser != "undefined" && Browser.mainLoop.func) {
								Browser.mainLoop.pause()
							}
							runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData))
						}
					} else if (Asyncify.state === Asyncify.State.Rewinding) {
						Asyncify.state = Asyncify.State.Normal;
						runAndAbortIfError(_asyncify_stop_rewind);
						_free(Asyncify.currData);
						Asyncify.currData = null;
						Asyncify.sleepCallbacks.forEach(callUserCallback)
					} else {
						abort(`invalid state: ${Asyncify.state}`)
					}
					return Asyncify.handleSleepReturnValue
				},
				handleAsync(startAsync) {
					return Asyncify.handleSleep(wakeUp => {
						startAsync().then(wakeUp)
					})
				}
			};

			function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc, isAsync) {
				var argCount = argTypes.length;
				if (argCount < 2) {
					throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!")
				}
				var isClassMethodFunc = argTypes[1] !== null && classType !== null;
				var needsDestructorStack = usesDestructorStack(argTypes);
				var returns = argTypes[0].name !== "void";
				var closureArgs = [humanName, throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
				for (var i = 0; i < argCount - 2; ++i) {
					closureArgs.push(argTypes[i + 2])
				}
				closureArgs.push(Asyncify);
				if (!needsDestructorStack) {
					for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
						if (argTypes[i].destructorFunction !== null) {
							closureArgs.push(argTypes[i].destructorFunction)
						}
					}
				}
				let [args, invokerFnBody] = createJsInvoker(argTypes, isClassMethodFunc, returns, isAsync);
				args.push(invokerFnBody);
				var invokerFn = newFunc(Function, args)(...closureArgs);
				return createNamedFunction(humanName, invokerFn)
			}
			var heap32VectorToArray = (count, firstElement) => {
				var array = [];
				for (var i = 0; i < count; i++) {
					array.push(HEAPU32[firstElement + i * 4 >>> 2 >>> 0])
				}
				return array
			};
			var getFunctionName = signature => {
				signature = signature.trim();
				const argsIndex = signature.indexOf("(");
				if (argsIndex !== -1) {
					return signature.substr(0, argsIndex)
				} else {
					return signature
				}
			};
			var __embind_register_class_class_function = function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, fn, isAsync) {
				rawClassType >>>= 0;
				methodName >>>= 0;
				rawArgTypesAddr >>>= 0;
				invokerSignature >>>= 0;
				rawInvoker >>>= 0;
				fn >>>= 0;
				var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
				methodName = readLatin1String(methodName);
				methodName = getFunctionName(methodName);
				rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
				whenDependentTypesAreResolved([], [rawClassType], classType => {
					classType = classType[0];
					var humanName = `${classType.name}.${methodName}`;

					function unboundTypesHandler() {
						throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`, rawArgTypes)
					}
					if (methodName.startsWith("@@")) {
						methodName = Symbol[methodName.substring(2)]
					}
					var proto = classType.registeredClass.constructor;
					if (undefined === proto[methodName]) {
						unboundTypesHandler.argCount = argCount - 1;
						proto[methodName] = unboundTypesHandler
					} else {
						ensureOverloadTable(proto, methodName, humanName);
						proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler
					}
					whenDependentTypesAreResolved([], rawArgTypes, argTypes => {
						var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
						var func = craftInvokerFunction(humanName, invokerArgsArray, null, rawInvoker, fn, isAsync);
						if (undefined === proto[methodName].overloadTable) {
							func.argCount = argCount - 1;
							proto[methodName] = func
						} else {
							proto[methodName].overloadTable[argCount - 1] = func
						}
						if (classType.registeredClass.__derivedClasses) {
							for (const derivedClass of classType.registeredClass.__derivedClasses) {
								if (!derivedClass.constructor.hasOwnProperty(methodName)) {
									derivedClass.constructor[methodName] = func
								}
							}
						}
						return []
					});
					return []
				})
			};
			var __embind_register_class_constructor = function(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
				rawClassType >>>= 0;
				rawArgTypesAddr >>>= 0;
				invokerSignature >>>= 0;
				invoker >>>= 0;
				rawConstructor >>>= 0;
				var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
				invoker = embind__requireFunction(invokerSignature, invoker);
				whenDependentTypesAreResolved([], [rawClassType], classType => {
					classType = classType[0];
					var humanName = `constructor ${classType.name}`;
					if (undefined === classType.registeredClass.constructor_body) {
						classType.registeredClass.constructor_body = []
					}
					if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
						throw new BindingError(`Cannot register multiple constructors with identical number of parameters (${argCount-1}) for class '${classType.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`)
					}
					classType.registeredClass.constructor_body[argCount - 1] = () => {
						throwUnboundTypeError(`Cannot construct ${classType.name} due to unbound types`, rawArgTypes)
					};
					whenDependentTypesAreResolved([], rawArgTypes, argTypes => {
						argTypes.splice(1, 0, null);
						classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
						return []
					});
					return []
				})
			};
			var __embind_register_class_function = function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual, isAsync) {
				rawClassType >>>= 0;
				methodName >>>= 0;
				rawArgTypesAddr >>>= 0;
				invokerSignature >>>= 0;
				rawInvoker >>>= 0;
				context >>>= 0;
				var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
				methodName = readLatin1String(methodName);
				methodName = getFunctionName(methodName);
				rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
				whenDependentTypesAreResolved([], [rawClassType], classType => {
					classType = classType[0];
					var humanName = `${classType.name}.${methodName}`;
					if (methodName.startsWith("@@")) {
						methodName = Symbol[methodName.substring(2)]
					}
					if (isPureVirtual) {
						classType.registeredClass.pureVirtualFunctions.push(methodName)
					}

					function unboundTypesHandler() {
						throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`, rawArgTypes)
					}
					var proto = classType.registeredClass.instancePrototype;
					var method = proto[methodName];
					if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
						unboundTypesHandler.argCount = argCount - 2;
						unboundTypesHandler.className = classType.name;
						proto[methodName] = unboundTypesHandler
					} else {
						ensureOverloadTable(proto, methodName, humanName);
						proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler
					}
					whenDependentTypesAreResolved([], rawArgTypes, argTypes => {
						var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context, isAsync);
						if (undefined === proto[methodName].overloadTable) {
							memberFunction.argCount = argCount - 2;
							proto[methodName] = memberFunction
						} else {
							proto[methodName].overloadTable[argCount - 2] = memberFunction
						}
						return []
					});
					return []
				})
			};
			var validateThis = (this_, classType, humanName) => {
				if (!(this_ instanceof Object)) {
					throwBindingError(`${humanName} with invalid "this": ${this_}`)
				}
				if (!(this_ instanceof classType.registeredClass.constructor)) {
					throwBindingError(`${humanName} incompatible with "this" of type ${this_.constructor.name}`)
				}
				if (!this_.$$.ptr) {
					throwBindingError(`cannot call emscripten binding method ${humanName} on deleted object`)
				}
				return upcastPointer(this_.$$.ptr, this_.$$.ptrType.registeredClass, classType.registeredClass)
			};
			var __embind_register_class_property = function(classType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
				classType >>>= 0;
				fieldName >>>= 0;
				getterReturnType >>>= 0;
				getterSignature >>>= 0;
				getter >>>= 0;
				getterContext >>>= 0;
				setterArgumentType >>>= 0;
				setterSignature >>>= 0;
				setter >>>= 0;
				setterContext >>>= 0;
				fieldName = readLatin1String(fieldName);
				getter = embind__requireFunction(getterSignature, getter);
				whenDependentTypesAreResolved([], [classType], classType => {
					classType = classType[0];
					var humanName = `${classType.name}.${fieldName}`;
					var desc = {
						get() {
							throwUnboundTypeError(`Cannot access ${humanName} due to unbound types`, [getterReturnType, setterArgumentType])
						},
						enumerable: true,
						configurable: true
					};
					if (setter) {
						desc.set = () => throwUnboundTypeError(`Cannot access ${humanName} due to unbound types`, [getterReturnType, setterArgumentType])
					} else {
						desc.set = v => throwBindingError(humanName + " is a read-only property")
					}
					Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
					whenDependentTypesAreResolved([], setter ? [getterReturnType, setterArgumentType] : [getterReturnType], types => {
						var getterReturnType = types[0];
						var desc = {
							get() {
								var ptr = validateThis(this, classType, humanName + " getter");
								return getterReturnType["fromWireType"](getter(getterContext, ptr))
							},
							enumerable: true
						};
						if (setter) {
							setter = embind__requireFunction(setterSignature, setter);
							var setterArgumentType = types[1];
							desc.set = function(v) {
								var ptr = validateThis(this, classType, humanName + " setter");
								var destructors = [];
								setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, v));
								runDestructors(destructors)
							}
						}
						Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
						return []
					});
					return []
				})
			};
			var emval_freelist = [];
			var emval_handles = [];

			function __emval_decref(handle) {
				handle >>>= 0;
				if (handle > 9 && 0 === --emval_handles[handle + 1]) {
					emval_handles[handle] = undefined;
					emval_freelist.push(handle)
				}
			}
			var count_emval_handles = () => emval_handles.length / 2 - 5 - emval_freelist.length;
			var init_emval = () => {
				emval_handles.push(0, 1, undefined, 1, null, 1, true, 1, false, 1);
				Module["count_emval_handles"] = count_emval_handles
			};
			var Emval = {
				toValue: handle => {
					if (!handle) {
						throwBindingError("Cannot use deleted val. handle = " + handle)
					}
					return emval_handles[handle]
				},
				toHandle: value => {
					switch (value) {
						case undefined:
							return 2;
						case null:
							return 4;
						case true:
							return 6;
						case false:
							return 8;
						default: {
							const handle = emval_freelist.pop() || emval_handles.length;
							emval_handles[handle] = value;
							emval_handles[handle + 1] = 1;
							return handle
						}
					}
				}
			};
			var EmValType = {
				name: "emscripten::val",
				fromWireType: handle => {
					var rv = Emval.toValue(handle);
					__emval_decref(handle);
					return rv
				},
				toWireType: (destructors, value) => Emval.toHandle(value),
				argPackAdvance: GenericWireTypeSize,
				readValueFromPointer: readPointer,
				destructorFunction: null
			};

			function __embind_register_emval(rawType) {
				rawType >>>= 0;
				return registerType(rawType, EmValType)
			}
			var enumReadValueFromPointer = (name, width, signed) => {
				switch (width) {
					case 1:
						return signed ? function(pointer) {
							return this["fromWireType"](HEAP8[pointer >>> 0])
						} : function(pointer) {
							return this["fromWireType"](HEAPU8[pointer >>> 0])
						};
					case 2:
						return signed ? function(pointer) {
							return this["fromWireType"](HEAP16[pointer >>> 1 >>> 0])
						} : function(pointer) {
							return this["fromWireType"](HEAPU16[pointer >>> 1 >>> 0])
						};
					case 4:
						return signed ? function(pointer) {
							return this["fromWireType"](HEAP32[pointer >>> 2 >>> 0])
						} : function(pointer) {
							return this["fromWireType"](HEAPU32[pointer >>> 2 >>> 0])
						};
					default:
						throw new TypeError(`invalid integer width (${width}): ${name}`)
				}
			};

			function __embind_register_enum(rawType, name, size, isSigned) {
				rawType >>>= 0;
				name >>>= 0;
				size >>>= 0;
				name = readLatin1String(name);

				function ctor() {}
				ctor.values = {};
				registerType(rawType, {
					name: name,
					constructor: ctor,
					fromWireType: function(c) {
						return this.constructor.values[c]
					},
					toWireType: (destructors, c) => c.value,
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: enumReadValueFromPointer(name, size, isSigned),
					destructorFunction: null
				});
				exposePublicSymbol(name, ctor)
			}
			var requireRegisteredType = (rawType, humanName) => {
				var impl = registeredTypes[rawType];
				if (undefined === impl) {
					throwBindingError(`${humanName} has unknown type ${getTypeName(rawType)}`)
				}
				return impl
			};

			function __embind_register_enum_value(rawEnumType, name, enumValue) {
				rawEnumType >>>= 0;
				name >>>= 0;
				var enumType = requireRegisteredType(rawEnumType, "enum");
				name = readLatin1String(name);
				var Enum = enumType.constructor;
				var Value = Object.create(enumType.constructor.prototype, {
					value: {
						value: enumValue
					},
					constructor: {
						value: createNamedFunction(`${enumType.name}_${name}`, function() {})
					}
				});
				Enum.values[enumValue] = Value;
				Enum[name] = Value
			}
			var floatReadValueFromPointer = (name, width) => {
				switch (width) {
					case 4:
						return function(pointer) {
							return this["fromWireType"](HEAPF32[pointer >>> 2 >>> 0])
						};
					case 8:
						return function(pointer) {
							return this["fromWireType"](HEAPF64[pointer >>> 3 >>> 0])
						};
					default:
						throw new TypeError(`invalid float width (${width}): ${name}`)
				}
			};
			var __embind_register_float = function(rawType, name, size) {
				rawType >>>= 0;
				name >>>= 0;
				size >>>= 0;
				name = readLatin1String(name);
				registerType(rawType, {
					name: name,
					fromWireType: value => value,
					toWireType: (destructors, value) => value,
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: floatReadValueFromPointer(name, size),
					destructorFunction: null
				})
			};

			function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn, isAsync) {
				name >>>= 0;
				rawArgTypesAddr >>>= 0;
				signature >>>= 0;
				rawInvoker >>>= 0;
				fn >>>= 0;
				var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
				name = readLatin1String(name);
				name = getFunctionName(name);
				rawInvoker = embind__requireFunction(signature, rawInvoker);
				exposePublicSymbol(name, function() {
					throwUnboundTypeError(`Cannot call ${name} due to unbound types`, argTypes)
				}, argCount - 1);
				whenDependentTypesAreResolved([], argTypes, argTypes => {
					var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
					replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn, isAsync), argCount - 1);
					return []
				})
			}

			function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
				primitiveType >>>= 0;
				name >>>= 0;
				size >>>= 0;
				name = readLatin1String(name);
				if (maxRange === -1) {
					maxRange = 4294967295
				}
				var fromWireType = value => value;
				if (minRange === 0) {
					var bitshift = 32 - 8 * size;
					fromWireType = value => value << bitshift >>> bitshift
				}
				var isUnsignedType = name.includes("unsigned");
				var checkAssertions = (value, toTypeName) => {};
				var toWireType;
				if (isUnsignedType) {
					toWireType = function(destructors, value) {
						checkAssertions(value, this.name);
						return value >>> 0
					}
				} else {
					toWireType = function(destructors, value) {
						checkAssertions(value, this.name);
						return value
					}
				}
				registerType(primitiveType, {
					name: name,
					fromWireType: fromWireType,
					toWireType: toWireType,
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: integerReadValueFromPointer(name, size, minRange !== 0),
					destructorFunction: null
				})
			}

			function __embind_register_memory_view(rawType, dataTypeIndex, name) {
				rawType >>>= 0;
				name >>>= 0;
				var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array];
				var TA = typeMapping[dataTypeIndex];

				function decodeMemoryView(handle) {
					var size = HEAPU32[handle >>> 2 >>> 0];
					var data = HEAPU32[handle + 4 >>> 2 >>> 0];
					return new TA(HEAP8.buffer, data, size)
				}
				name = readLatin1String(name);
				registerType(rawType, {
					name: name,
					fromWireType: decodeMemoryView,
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: decodeMemoryView
				}, {
					ignoreDuplicateRegistrations: true
				})
			}

			function __embind_register_optional(rawOptionalType, rawType) {
				rawOptionalType >>>= 0;
				rawType >>>= 0;
				__embind_register_emval(rawOptionalType)
			}
			var __embind_register_smart_ptr = function(rawType, rawPointeeType, name, sharingPolicy, getPointeeSignature, rawGetPointee, constructorSignature, rawConstructor, shareSignature, rawShare, destructorSignature, rawDestructor) {
				rawType >>>= 0;
				rawPointeeType >>>= 0;
				name >>>= 0;
				getPointeeSignature >>>= 0;
				rawGetPointee >>>= 0;
				constructorSignature >>>= 0;
				rawConstructor >>>= 0;
				shareSignature >>>= 0;
				rawShare >>>= 0;
				destructorSignature >>>= 0;
				rawDestructor >>>= 0;
				name = readLatin1String(name);
				rawGetPointee = embind__requireFunction(getPointeeSignature, rawGetPointee);
				rawConstructor = embind__requireFunction(constructorSignature, rawConstructor);
				rawShare = embind__requireFunction(shareSignature, rawShare);
				rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
				whenDependentTypesAreResolved([rawType], [rawPointeeType], pointeeType => {
					pointeeType = pointeeType[0];
					var registeredPointer = new RegisteredPointer(name, pointeeType.registeredClass, false, false, true, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor);
					return [registeredPointer]
				})
			};

			function __embind_register_std_string(rawType, name) {
				rawType >>>= 0;
				name >>>= 0;
				name = readLatin1String(name);
				var stdStringIsUTF8 = name === "std::string";
				registerType(rawType, {
					name: name,
					fromWireType(value) {
						var length = HEAPU32[value >>> 2 >>> 0];
						var payload = value + 4;
						var str;
						if (stdStringIsUTF8) {
							var decodeStartPtr = payload;
							for (var i = 0; i <= length; ++i) {
								var currentBytePtr = payload + i;
								if (i == length || HEAPU8[currentBytePtr >>> 0] == 0) {
									var maxRead = currentBytePtr - decodeStartPtr;
									var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
									if (str === undefined) {
										str = stringSegment
									} else {
										str += String.fromCharCode(0);
										str += stringSegment
									}
									decodeStartPtr = currentBytePtr + 1
								}
							}
						} else {
							var a = new Array(length);
							for (var i = 0; i < length; ++i) {
								a[i] = String.fromCharCode(HEAPU8[payload + i >>> 0])
							}
							str = a.join("")
						}
						_free(value);
						return str
					},
					toWireType(destructors, value) {
						if (value instanceof ArrayBuffer) {
							value = new Uint8Array(value)
						}
						var length;
						var valueIsOfTypeString = typeof value == "string";
						if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
							throwBindingError("Cannot pass non-string to std::string")
						}
						if (stdStringIsUTF8 && valueIsOfTypeString) {
							length = lengthBytesUTF8(value)
						} else {
							length = value.length
						}
						var base = _malloc(4 + length + 1);
						var ptr = base + 4;
						HEAPU32[base >>> 2 >>> 0] = length;
						if (stdStringIsUTF8 && valueIsOfTypeString) {
							stringToUTF8(value, ptr, length + 1)
						} else {
							if (valueIsOfTypeString) {
								for (var i = 0; i < length; ++i) {
									var charCode = value.charCodeAt(i);
									if (charCode > 255) {
										_free(ptr);
										throwBindingError("String has UTF-16 code units that do not fit in 8 bits")
									}
									HEAPU8[ptr + i >>> 0] = charCode
								}
							} else {
								for (var i = 0; i < length; ++i) {
									HEAPU8[ptr + i >>> 0] = value[i]
								}
							}
						}
						if (destructors !== null) {
							destructors.push(_free, base)
						}
						return base
					},
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: readPointer,
					destructorFunction(ptr) {
						_free(ptr)
					}
				})
			}
			var UTF16ToString = (ptr, maxBytesToRead) => {
				var str = "";
				for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
					var codeUnit = HEAP16[ptr + i * 2 >>> 1 >>> 0];
					if (codeUnit == 0) break;
					str += String.fromCharCode(codeUnit)
				}
				return str
			};
			var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
				maxBytesToWrite ??= 2147483647;
				if (maxBytesToWrite < 2) return 0;
				maxBytesToWrite -= 2;
				var startPtr = outPtr;
				var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
				for (var i = 0; i < numCharsToWrite; ++i) {
					var codeUnit = str.charCodeAt(i);
					HEAP16[outPtr >>> 1 >>> 0] = codeUnit;
					outPtr += 2
				}
				HEAP16[outPtr >>> 1 >>> 0] = 0;
				return outPtr - startPtr
			};
			var lengthBytesUTF16 = str => str.length * 2;
			var UTF32ToString = (ptr, maxBytesToRead) => {
				var i = 0;
				var str = "";
				while (!(i >= maxBytesToRead / 4)) {
					var utf32 = HEAP32[ptr + i * 4 >>> 2 >>> 0];
					if (utf32 == 0) break;
					++i;
					if (utf32 >= 65536) {
						var ch = utf32 - 65536;
						str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
					} else {
						str += String.fromCharCode(utf32)
					}
				}
				return str
			};
			var stringToUTF32 = (str, outPtr, maxBytesToWrite) => {
				outPtr >>>= 0;
				maxBytesToWrite ??= 2147483647;
				if (maxBytesToWrite < 4) return 0;
				var startPtr = outPtr;
				var endPtr = startPtr + maxBytesToWrite - 4;
				for (var i = 0; i < str.length; ++i) {
					var codeUnit = str.charCodeAt(i);
					if (codeUnit >= 55296 && codeUnit <= 57343) {
						var trailSurrogate = str.charCodeAt(++i);
						codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023
					}
					HEAP32[outPtr >>> 2 >>> 0] = codeUnit;
					outPtr += 4;
					if (outPtr + 4 > endPtr) break
				}
				HEAP32[outPtr >>> 2 >>> 0] = 0;
				return outPtr - startPtr
			};
			var lengthBytesUTF32 = str => {
				var len = 0;
				for (var i = 0; i < str.length; ++i) {
					var codeUnit = str.charCodeAt(i);
					if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
					len += 4
				}
				return len
			};
			var __embind_register_std_wstring = function(rawType, charSize, name) {
				rawType >>>= 0;
				charSize >>>= 0;
				name >>>= 0;
				name = readLatin1String(name);
				var decodeString, encodeString, readCharAt, lengthBytesUTF;
				if (charSize === 2) {
					decodeString = UTF16ToString;
					encodeString = stringToUTF16;
					lengthBytesUTF = lengthBytesUTF16;
					readCharAt = pointer => HEAPU16[pointer >>> 1 >>> 0]
				} else if (charSize === 4) {
					decodeString = UTF32ToString;
					encodeString = stringToUTF32;
					lengthBytesUTF = lengthBytesUTF32;
					readCharAt = pointer => HEAPU32[pointer >>> 2 >>> 0]
				}
				registerType(rawType, {
					name: name,
					fromWireType: value => {
						var length = HEAPU32[value >>> 2 >>> 0];
						var str;
						var decodeStartPtr = value + 4;
						for (var i = 0; i <= length; ++i) {
							var currentBytePtr = value + 4 + i * charSize;
							if (i == length || readCharAt(currentBytePtr) == 0) {
								var maxReadBytes = currentBytePtr - decodeStartPtr;
								var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
								if (str === undefined) {
									str = stringSegment
								} else {
									str += String.fromCharCode(0);
									str += stringSegment
								}
								decodeStartPtr = currentBytePtr + charSize
							}
						}
						_free(value);
						return str
					},
					toWireType: (destructors, value) => {
						if (!(typeof value == "string")) {
							throwBindingError(`Cannot pass non-string to C++ string type ${name}`)
						}
						var length = lengthBytesUTF(value);
						var ptr = _malloc(4 + length + charSize);
						HEAPU32[ptr >>> 2 >>> 0] = length / charSize;
						encodeString(value, ptr + 4, length + charSize);
						if (destructors !== null) {
							destructors.push(_free, ptr)
						}
						return ptr
					},
					argPackAdvance: GenericWireTypeSize,
					readValueFromPointer: readPointer,
					destructorFunction(ptr) {
						_free(ptr)
					}
				})
			};

			function __embind_register_value_object(rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) {
				rawType >>>= 0;
				name >>>= 0;
				constructorSignature >>>= 0;
				rawConstructor >>>= 0;
				destructorSignature >>>= 0;
				rawDestructor >>>= 0;
				structRegistrations[rawType] = {
					name: readLatin1String(name),
					rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
					rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
					fields: []
				}
			}

			function __embind_register_value_object_field(structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
				structType >>>= 0;
				fieldName >>>= 0;
				getterReturnType >>>= 0;
				getterSignature >>>= 0;
				getter >>>= 0;
				getterContext >>>= 0;
				setterArgumentType >>>= 0;
				setterSignature >>>= 0;
				setter >>>= 0;
				setterContext >>>= 0;
				structRegistrations[structType].fields.push({
					fieldName: readLatin1String(fieldName),
					getterReturnType: getterReturnType,
					getter: embind__requireFunction(getterSignature, getter),
					getterContext: getterContext,
					setterArgumentType: setterArgumentType,
					setter: embind__requireFunction(setterSignature, setter),
					setterContext: setterContext
				})
			}
			var __embind_register_void = function(rawType, name) {
				rawType >>>= 0;
				name >>>= 0;
				name = readLatin1String(name);
				registerType(rawType, {
					isVoid: true,
					name: name,
					argPackAdvance: 0,
					fromWireType: () => undefined,
					toWireType: (destructors, o) => undefined
				})
			};

			function __emscripten_fs_load_embedded_files(ptr) {
				ptr >>>= 0;
				do {
					var name_addr = HEAPU32[ptr >>> 2 >>> 0];
					ptr += 4;
					var len = HEAPU32[ptr >>> 2 >>> 0];
					ptr += 4;
					var content = HEAPU32[ptr >>> 2 >>> 0];
					ptr += 4;
					var name = UTF8ToString(name_addr);
					FS.createPath("/", PATH.dirname(name), true, true);
					FS.createDataFile(name, null, HEAP8.subarray(content >>> 0, content + len >>> 0), true, true, true)
				} while (HEAPU32[ptr >>> 2 >>> 0])
			}
			var nowIsMonotonic = 1;
			var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;
			var __emscripten_runtime_keepalive_clear = () => {
				noExitRuntime = false;
				runtimeKeepaliveCounter = 0
			};
			var __emscripten_throw_longjmp = () => {
				throw Infinity
			};
			var emval_returnValue = (returnType, destructorsRef, handle) => {
				var destructors = [];
				var result = returnType["toWireType"](destructors, handle);
				if (destructors.length) {
					HEAPU32[destructorsRef >>> 2 >>> 0] = Emval.toHandle(destructors)
				}
				return result
			};

			function __emval_as(handle, returnType, destructorsRef) {
				handle >>>= 0;
				returnType >>>= 0;
				destructorsRef >>>= 0;
				handle = Emval.toValue(handle);
				returnType = requireRegisteredType(returnType, "emval::as");
				return emval_returnValue(returnType, destructorsRef, handle)
			}

			function __emval_as_int64(handle, returnType) {
				handle >>>= 0;
				returnType >>>= 0;
				handle = Emval.toValue(handle);
				returnType = requireRegisteredType(returnType, "emval::as");
				return returnType["toWireType"](null, handle)
			}

			function __emval_as_uint64(handle, returnType) {
				handle >>>= 0;
				returnType >>>= 0;
				handle = Emval.toValue(handle);
				returnType = requireRegisteredType(returnType, "emval::as");
				return returnType["toWireType"](null, handle)
			}
			var emval_methodCallers = [];

			function __emval_call(caller, handle, destructorsRef, args) {
				caller >>>= 0;
				handle >>>= 0;
				destructorsRef >>>= 0;
				args >>>= 0;
				caller = emval_methodCallers[caller];
				handle = Emval.toValue(handle);
				return caller(null, handle, destructorsRef, args)
			}
			var emval_symbols = {};
			var getStringOrSymbol = address => {
				var symbol = emval_symbols[address];
				if (symbol === undefined) {
					return readLatin1String(address)
				}
				return symbol
			};

			function __emval_call_method(caller, objHandle, methodName, destructorsRef, args) {
				caller >>>= 0;
				objHandle >>>= 0;
				methodName >>>= 0;
				destructorsRef >>>= 0;
				args >>>= 0;
				caller = emval_methodCallers[caller];
				objHandle = Emval.toValue(objHandle);
				methodName = getStringOrSymbol(methodName);
				return caller(objHandle, objHandle[methodName], destructorsRef, args)
			}
			var emval_get_global = () => {
				if (typeof globalThis == "object") {
					return globalThis
				}
				return function() {
					return Function
				}()("return this")()
			};

			function __emval_get_global(name) {
				name >>>= 0;
				if (name === 0) {
					return Emval.toHandle(emval_get_global())
				} else {
					name = getStringOrSymbol(name);
					return Emval.toHandle(emval_get_global()[name])
				}
			}
			var emval_addMethodCaller = caller => {
				var id = emval_methodCallers.length;
				emval_methodCallers.push(caller);
				return id
			};
			var emval_lookupTypes = (argCount, argTypes) => {
				var a = new Array(argCount);
				for (var i = 0; i < argCount; ++i) {
					a[i] = requireRegisteredType(HEAPU32[argTypes + i * 4 >>> 2 >>> 0], "parameter " + i)
				}
				return a
			};
			var reflectConstruct = Reflect.construct;

			function __emval_get_method_caller(argCount, argTypes, kind) {
				argTypes >>>= 0;
				var types = emval_lookupTypes(argCount, argTypes);
				var retType = types.shift();
				argCount--;
				var functionBody = `return function (obj, func, destructorsRef, args) {\n`;
				var offset = 0;
				var argsList = [];
				if (kind === 0) {
					argsList.push("obj")
				}
				var params = ["retType"];
				var args = [retType];
				for (var i = 0; i < argCount; ++i) {
					argsList.push("arg" + i);
					params.push("argType" + i);
					args.push(types[i]);
					functionBody += `  var arg${i} = argType${i}.readValueFromPointer(args${offset?"+"+offset:""});\n`;
					offset += types[i]["argPackAdvance"]
				}
				var invoker = kind === 1 ? "new func" : "func.call";
				functionBody += `  var rv = ${invoker}(${argsList.join(", ")});\n`;
				if (!retType.isVoid) {
					params.push("emval_returnValue");
					args.push(emval_returnValue);
					functionBody += "  return emval_returnValue(retType, destructorsRef, rv);\n"
				}
				functionBody += "};\n";
				params.push(functionBody);
				var invokerFunction = newFunc(Function, params)(...args);
				var functionName = `methodCaller<(${types.map(t=>t.name).join(", ")}) => ${retType.name}>`;
				return emval_addMethodCaller(createNamedFunction(functionName, invokerFunction))
			}

			function __emval_get_property(handle, key) {
				handle >>>= 0;
				key >>>= 0;
				handle = Emval.toValue(handle);
				key = Emval.toValue(key);
				return Emval.toHandle(handle[key])
			}

			function __emval_incref(handle) {
				handle >>>= 0;
				if (handle > 9) {
					emval_handles[handle + 1] += 1
				}
			}

			function __emval_instanceof(object, constructor) {
				object >>>= 0;
				constructor >>>= 0;
				object = Emval.toValue(object);
				constructor = Emval.toValue(constructor);
				return object instanceof constructor
			}

			function __emval_is_number(handle) {
				handle >>>= 0;
				handle = Emval.toValue(handle);
				return typeof handle == "number"
			}

			function __emval_is_string(handle) {
				handle >>>= 0;
				handle = Emval.toValue(handle);
				return typeof handle == "string"
			}

			function __emval_iter_begin(iterable) {
				iterable >>>= 0;
				iterable = Emval.toValue(iterable);
				return Emval.toHandle(iterable[Symbol.iterator]())
			}

			function __emval_iter_next(iterator) {
				iterator >>>= 0;
				iterator = Emval.toValue(iterator);
				var result = iterator.next();
				return result.done ? 0 : Emval.toHandle(result.value)
			}

			function __emval_new_array() {
				return Emval.toHandle([])
			}

			function __emval_new_array_from_memory_view(view) {
				view >>>= 0;
				view = Emval.toValue(view);
				var a = new Array(view.length);
				for (var i = 0; i < view.length; i++) a[i] = view[i];
				return Emval.toHandle(a)
			}

			function __emval_new_cstring(v) {
				v >>>= 0;
				return Emval.toHandle(getStringOrSymbol(v))
			}

			function __emval_new_object() {
				return Emval.toHandle({})
			}

			function __emval_run_destructors(handle) {
				handle >>>= 0;
				var destructors = Emval.toValue(handle);
				runDestructors(destructors);
				__emval_decref(handle)
			}

			function __emval_set_property(handle, key, value) {
				handle >>>= 0;
				key >>>= 0;
				value >>>= 0;
				handle = Emval.toValue(handle);
				key = Emval.toValue(key);
				value = Emval.toValue(value);
				handle[key] = value
			}

			function __emval_take_value(type, arg) {
				type >>>= 0;
				arg >>>= 0;
				type = requireRegisteredType(type, "_emval_take_value");
				var v = type["readValueFromPointer"](arg);
				return Emval.toHandle(v)
			}

			function __gmtime_js(time, tmPtr) {
				time = bigintToI53Checked(time);
				tmPtr >>>= 0;
				var date = new Date(time * 1e3);
				HEAP32[tmPtr >>> 2 >>> 0] = date.getUTCSeconds();
				HEAP32[tmPtr + 4 >>> 2 >>> 0] = date.getUTCMinutes();
				HEAP32[tmPtr + 8 >>> 2 >>> 0] = date.getUTCHours();
				HEAP32[tmPtr + 12 >>> 2 >>> 0] = date.getUTCDate();
				HEAP32[tmPtr + 16 >>> 2 >>> 0] = date.getUTCMonth();
				HEAP32[tmPtr + 20 >>> 2 >>> 0] = date.getUTCFullYear() - 1900;
				HEAP32[tmPtr + 24 >>> 2 >>> 0] = date.getUTCDay();
				var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
				var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
				HEAP32[tmPtr + 28 >>> 2 >>> 0] = yday
			}
			var isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
			var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
			var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
			var ydayFromDate = date => {
				var leap = isLeapYear(date.getFullYear());
				var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
				var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
				return yday
			};

			function __localtime_js(time, tmPtr) {
				time = bigintToI53Checked(time);
				tmPtr >>>= 0;
				var date = new Date(time * 1e3);
				HEAP32[tmPtr >>> 2 >>> 0] = date.getSeconds();
				HEAP32[tmPtr + 4 >>> 2 >>> 0] = date.getMinutes();
				HEAP32[tmPtr + 8 >>> 2 >>> 0] = date.getHours();
				HEAP32[tmPtr + 12 >>> 2 >>> 0] = date.getDate();
				HEAP32[tmPtr + 16 >>> 2 >>> 0] = date.getMonth();
				HEAP32[tmPtr + 20 >>> 2 >>> 0] = date.getFullYear() - 1900;
				HEAP32[tmPtr + 24 >>> 2 >>> 0] = date.getDay();
				var yday = ydayFromDate(date) | 0;
				HEAP32[tmPtr + 28 >>> 2 >>> 0] = yday;
				HEAP32[tmPtr + 36 >>> 2 >>> 0] = -(date.getTimezoneOffset() * 60);
				var start = new Date(date.getFullYear(), 0, 1);
				var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
				var winterOffset = start.getTimezoneOffset();
				var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
				HEAP32[tmPtr + 32 >>> 2 >>> 0] = dst
			}
			var __mktime_js = function(tmPtr) {
				tmPtr >>>= 0;
				var ret = (() => {
					var date = new Date(HEAP32[tmPtr + 20 >>> 2 >>> 0] + 1900, HEAP32[tmPtr + 16 >>> 2 >>> 0], HEAP32[tmPtr + 12 >>> 2 >>> 0], HEAP32[tmPtr + 8 >>> 2 >>> 0], HEAP32[tmPtr + 4 >>> 2 >>> 0], HEAP32[tmPtr >>> 2 >>> 0], 0);
					var dst = HEAP32[tmPtr + 32 >>> 2 >>> 0];
					var guessedOffset = date.getTimezoneOffset();
					var start = new Date(date.getFullYear(), 0, 1);
					var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
					var winterOffset = start.getTimezoneOffset();
					var dstOffset = Math.min(winterOffset, summerOffset);
					if (dst < 0) {
						HEAP32[tmPtr + 32 >>> 2 >>> 0] = Number(summerOffset != winterOffset && dstOffset == guessedOffset)
					} else if (dst > 0 != (dstOffset == guessedOffset)) {
						var nonDstOffset = Math.max(winterOffset, summerOffset);
						var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
						date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4)
					}
					HEAP32[tmPtr + 24 >>> 2 >>> 0] = date.getDay();
					var yday = ydayFromDate(date) | 0;
					HEAP32[tmPtr + 28 >>> 2 >>> 0] = yday;
					HEAP32[tmPtr >>> 2 >>> 0] = date.getSeconds();
					HEAP32[tmPtr + 4 >>> 2 >>> 0] = date.getMinutes();
					HEAP32[tmPtr + 8 >>> 2 >>> 0] = date.getHours();
					HEAP32[tmPtr + 12 >>> 2 >>> 0] = date.getDate();
					HEAP32[tmPtr + 16 >>> 2 >>> 0] = date.getMonth();
					HEAP32[tmPtr + 20 >>> 2 >>> 0] = date.getYear();
					var timeMs = date.getTime();
					if (isNaN(timeMs)) {
						return -1
					}
					return timeMs / 1e3
				})();
				return BigInt(ret)
			};

			function __mmap_js(len, prot, flags, fd, offset, allocated, addr) {
				len >>>= 0;
				offset = bigintToI53Checked(offset);
				allocated >>>= 0;
				addr >>>= 0;
				try {
					if (isNaN(offset)) return 61;
					var stream = SYSCALLS.getStreamFromFD(fd);
					var res = FS.mmap(stream, len, offset, prot, flags);
					var ptr = res.ptr;
					HEAP32[allocated >>> 2 >>> 0] = res.allocated;
					HEAPU32[addr >>> 2 >>> 0] = ptr;
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}

			function __munmap_js(addr, len, prot, flags, fd, offset) {
				addr >>>= 0;
				len >>>= 0;
				offset = bigintToI53Checked(offset);
				try {
					var stream = SYSCALLS.getStreamFromFD(fd);
					if (prot & 2) {
						SYSCALLS.doMsync(addr, stream, len, flags, offset)
					}
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return -e.errno
				}
			}
			var __tzset_js = function(timezone, daylight, std_name, dst_name) {
				timezone >>>= 0;
				daylight >>>= 0;
				std_name >>>= 0;
				dst_name >>>= 0;
				var currentYear = (new Date).getFullYear();
				var winter = new Date(currentYear, 0, 1);
				var summer = new Date(currentYear, 6, 1);
				var winterOffset = winter.getTimezoneOffset();
				var summerOffset = summer.getTimezoneOffset();
				var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
				HEAPU32[timezone >>> 2 >>> 0] = stdTimezoneOffset * 60;
				HEAP32[daylight >>> 2 >>> 0] = Number(winterOffset != summerOffset);
				var extractZone = date => date.toLocaleTimeString(undefined, {
					hour12: false,
					timeZoneName: "short"
				}).split(" ")[1];
				var winterName = extractZone(winter);
				var summerName = extractZone(summer);
				if (summerOffset < winterOffset) {
					stringToUTF8(winterName, std_name, 17);
					stringToUTF8(summerName, dst_name, 17)
				} else {
					stringToUTF8(winterName, dst_name, 17);
					stringToUTF8(summerName, std_name, 17)
				}
			};
			var _emscripten_date_now = () => Date.now();
			var getHeapMax = () => 4294901760;

			function _emscripten_get_heap_max() {
				return getHeapMax()
			}
			var _emscripten_get_now;
			_emscripten_get_now = () => performance.now();
			var growMemory = size => {
				var b = wasmMemory.buffer;
				var pages = (size - b.byteLength + 65535) / 65536;
				try {
					wasmMemory.grow(pages);
					updateMemoryViews();
					return 1
				} catch (e) {}
			};

			function _emscripten_resize_heap(requestedSize) {
				requestedSize >>>= 0;
				var oldSize = HEAPU8.length;
				var maxHeapSize = getHeapMax();
				if (requestedSize > maxHeapSize) {
					return false
				}
				var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
				for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
					var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
					overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
					var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
					var replacement = growMemory(newSize);
					if (replacement) {
						return true
					}
				}
				return false
			}
			var safeSetTimeout = (func, timeout) => setTimeout(() => {
				callUserCallback(func)
			}, timeout);
			var warnOnce = text => {
				warnOnce.shown ||= {};
				if (!warnOnce.shown[text]) {
					warnOnce.shown[text] = 1;
					if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
					err(text)
				}
			};
			var Browser = {
				mainLoop: {
					running: false,
					scheduler: null,
					method: "",
					currentlyRunningMainloop: 0,
					func: null,
					arg: 0,
					timingMode: 0,
					timingValue: 0,
					currentFrameNumber: 0,
					queue: [],
					pause() {
						Browser.mainLoop.scheduler = null;
						Browser.mainLoop.currentlyRunningMainloop++
					},
					resume() {
						Browser.mainLoop.currentlyRunningMainloop++;
						var timingMode = Browser.mainLoop.timingMode;
						var timingValue = Browser.mainLoop.timingValue;
						var func = Browser.mainLoop.func;
						Browser.mainLoop.func = null;
						setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
						_emscripten_set_main_loop_timing(timingMode, timingValue);
						Browser.mainLoop.scheduler()
					},
					updateStatus() {
						if (Module["setStatus"]) {
							var message = Module["statusMessage"] || "Please wait...";
							var remaining = Browser.mainLoop.remainingBlockers;
							var expected = Browser.mainLoop.expectedBlockers;
							if (remaining) {
								if (remaining < expected) {
									Module["setStatus"](`{message} ({expected - remaining}/{expected})`)
								} else {
									Module["setStatus"](message)
								}
							} else {
								Module["setStatus"]("")
							}
						}
					},
					runIter(func) {
						if (ABORT) return;
						if (Module["preMainLoop"]) {
							var preRet = Module["preMainLoop"]();
							if (preRet === false) {
								return
							}
						}
						callUserCallback(func);
						Module["postMainLoop"]?.()
					}
				},
				isFullscreen: false,
				pointerLock: false,
				moduleContextCreatedCallbacks: [],
				workers: [],
				init() {
					if (Browser.initted) return;
					Browser.initted = true;
					var imagePlugin = {};
					imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
						return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name)
					};
					imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
						var b = new Blob([byteArray], {
							type: Browser.getMimetype(name)
						});
						if (b.size !== byteArray.length) {
							b = new Blob([new Uint8Array(byteArray).buffer], {
								type: Browser.getMimetype(name)
							})
						}
						var url = URL.createObjectURL(b);
						var img = new Image;
						img.onload = () => {
							var canvas = document.createElement("canvas");
							canvas.width = img.width;
							canvas.height = img.height;
							var ctx = canvas.getContext("2d");
							ctx.drawImage(img, 0, 0);
							preloadedImages[name] = canvas;
							URL.revokeObjectURL(url);
							onload?.(byteArray)
						};
						img.onerror = event => {
							err(`Image ${url} could not be decoded`);
							onerror?.()
						};
						img.src = url
					};
					preloadPlugins.push(imagePlugin);
					var audioPlugin = {};
					audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
						return !Module.noAudioDecoding && name.substr(-4) in {
							".ogg": 1,
							".wav": 1,
							".mp3": 1
						}
					};
					audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
						var done = false;

						function finish(audio) {
							if (done) return;
							done = true;
							preloadedAudios[name] = audio;
							onload?.(byteArray)
						}
						var b = new Blob([byteArray], {
							type: Browser.getMimetype(name)
						});
						var url = URL.createObjectURL(b);
						var audio = new Audio;
						audio.addEventListener("canplaythrough", () => finish(audio), false);
						audio.onerror = function audio_onerror(event) {
							if (done) return;
							err(`warning: browser could not fully decode audio ${name}, trying slower base64 approach`);

							function encode64(data) {
								var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
								var PAD = "=";
								var ret = "";
								var leftchar = 0;
								var leftbits = 0;
								for (var i = 0; i < data.length; i++) {
									leftchar = leftchar << 8 | data[i];
									leftbits += 8;
									while (leftbits >= 6) {
										var curr = leftchar >> leftbits - 6 & 63;
										leftbits -= 6;
										ret += BASE[curr]
									}
								}
								if (leftbits == 2) {
									ret += BASE[(leftchar & 3) << 4];
									ret += PAD + PAD
								} else if (leftbits == 4) {
									ret += BASE[(leftchar & 15) << 2];
									ret += PAD
								}
								return ret
							}
							audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
							finish(audio)
						};
						audio.src = url;
						safeSetTimeout(() => {
							finish(audio)
						}, 1e4)
					};
					preloadPlugins.push(audioPlugin);

					function pointerLockChange() {
						Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"]
					}
					var canvas = Module["canvas"];
					if (canvas) {
						canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || (() => {});
						canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || (() => {});
						canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
						document.addEventListener("pointerlockchange", pointerLockChange, false);
						document.addEventListener("mozpointerlockchange", pointerLockChange, false);
						document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
						document.addEventListener("mspointerlockchange", pointerLockChange, false);
						if (Module["elementPointerLock"]) {
							canvas.addEventListener("click", ev => {
								if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
									Module["canvas"].requestPointerLock();
									ev.preventDefault()
								}
							}, false)
						}
					}
				},
				createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
					if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
					var ctx;
					var contextHandle;
					if (useWebGL) {
						var contextAttributes = {
							antialias: false,
							alpha: false,
							majorVersion: 2
						};
						if (webGLContextAttributes) {
							for (var attribute in webGLContextAttributes) {
								contextAttributes[attribute] = webGLContextAttributes[attribute]
							}
						}
						if (typeof GL != "undefined") {
							contextHandle = GL.createContext(canvas, contextAttributes);
							if (contextHandle) {
								ctx = GL.getContext(contextHandle).GLctx
							}
						}
					} else {
						ctx = canvas.getContext("2d")
					}
					if (!ctx) return null;
					if (setInModule) {
						Module.ctx = ctx;
						if (useWebGL) GL.makeContextCurrent(contextHandle);
						Module.useWebGL = useWebGL;
						Browser.moduleContextCreatedCallbacks.forEach(callback => callback());
						Browser.init()
					}
					return ctx
				},
				destroyContext(canvas, useWebGL, setInModule) {},
				fullscreenHandlersInstalled: false,
				lockPointer: undefined,
				resizeCanvas: undefined,
				requestFullscreen(lockPointer, resizeCanvas) {
					Browser.lockPointer = lockPointer;
					Browser.resizeCanvas = resizeCanvas;
					if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
					if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
					var canvas = Module["canvas"];

					function fullscreenChange() {
						Browser.isFullscreen = false;
						var canvasContainer = canvas.parentNode;
						if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
							canvas.exitFullscreen = Browser.exitFullscreen;
							if (Browser.lockPointer) canvas.requestPointerLock();
							Browser.isFullscreen = true;
							if (Browser.resizeCanvas) {
								Browser.setFullscreenCanvasSize()
							} else {
								Browser.updateCanvasDimensions(canvas)
							}
						} else {
							canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
							canvasContainer.parentNode.removeChild(canvasContainer);
							if (Browser.resizeCanvas) {
								Browser.setWindowedCanvasSize()
							} else {
								Browser.updateCanvasDimensions(canvas)
							}
						}
						Module["onFullScreen"]?.(Browser.isFullscreen);
						Module["onFullscreen"]?.(Browser.isFullscreen)
					}
					if (!Browser.fullscreenHandlersInstalled) {
						Browser.fullscreenHandlersInstalled = true;
						document.addEventListener("fullscreenchange", fullscreenChange, false);
						document.addEventListener("mozfullscreenchange", fullscreenChange, false);
						document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
						document.addEventListener("MSFullscreenChange", fullscreenChange, false)
					}
					var canvasContainer = document.createElement("div");
					canvas.parentNode.insertBefore(canvasContainer, canvas);
					canvasContainer.appendChild(canvas);
					canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? () => canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null) || (canvasContainer["webkitRequestFullScreen"] ? () => canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null);
					canvasContainer.requestFullscreen()
				},
				exitFullscreen() {
					if (!Browser.isFullscreen) {
						return false
					}
					var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || (() => {});
					CFS.apply(document, []);
					return true
				},
				nextRAF: 0,
				fakeRequestAnimationFrame(func) {
					var now = Date.now();
					if (Browser.nextRAF === 0) {
						Browser.nextRAF = now + 1e3 / 60
					} else {
						while (now + 2 >= Browser.nextRAF) {
							Browser.nextRAF += 1e3 / 60
						}
					}
					var delay = Math.max(Browser.nextRAF - now, 0);
					setTimeout(func, delay)
				},
				requestAnimationFrame(func) {
					if (typeof requestAnimationFrame == "function") {
						requestAnimationFrame(func);
						return
					}
					var RAF = Browser.fakeRequestAnimationFrame;
					RAF(func)
				},
				safeSetTimeout(func, timeout) {
					return safeSetTimeout(func, timeout)
				},
				safeRequestAnimationFrame(func) {
					return Browser.requestAnimationFrame(() => {
						callUserCallback(func)
					})
				},
				getMimetype(name) {
					return {
						jpg: "image/jpeg",
						jpeg: "image/jpeg",
						png: "image/png",
						bmp: "image/bmp",
						ogg: "audio/ogg",
						wav: "audio/wav",
						mp3: "audio/mpeg"
					} [name.substr(name.lastIndexOf(".") + 1)]
				},
				getUserMedia(func) {
					window.getUserMedia ||= navigator["getUserMedia"] || navigator["mozGetUserMedia"];
					window.getUserMedia(func)
				},
				getMovementX(event) {
					return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0
				},
				getMovementY(event) {
					return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0
				},
				getMouseWheelDelta(event) {
					var delta = 0;
					switch (event.type) {
						case "DOMMouseScroll":
							delta = event.detail / 3;
							break;
						case "mousewheel":
							delta = event.wheelDelta / 120;
							break;
						case "wheel":
							delta = event.deltaY;
							switch (event.deltaMode) {
								case 0:
									delta /= 100;
									break;
								case 1:
									delta /= 3;
									break;
								case 2:
									delta *= 80;
									break;
								default:
									throw "unrecognized mouse wheel delta mode: " + event.deltaMode
							}
							break;
						default:
							throw "unrecognized mouse wheel event: " + event.type
					}
					return delta
				},
				mouseX: 0,
				mouseY: 0,
				mouseMovementX: 0,
				mouseMovementY: 0,
				touches: {},
				lastTouches: {},
				calculateMouseCoords(pageX, pageY) {
					var rect = Module["canvas"].getBoundingClientRect();
					var cw = Module["canvas"].width;
					var ch = Module["canvas"].height;
					var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
					var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
					var adjustedX = pageX - (scrollX + rect.left);
					var adjustedY = pageY - (scrollY + rect.top);
					adjustedX = adjustedX * (cw / rect.width);
					adjustedY = adjustedY * (ch / rect.height);
					return {
						x: adjustedX,
						y: adjustedY
					}
				},
				setMouseCoords(pageX, pageY) {
					const {
						x: x,
						y: y
					} = Browser.calculateMouseCoords(pageX, pageY);
					Browser.mouseMovementX = x - Browser.mouseX;
					Browser.mouseMovementY = y - Browser.mouseY;
					Browser.mouseX = x;
					Browser.mouseY = y
				},
				calculateMouseEvent(event) {
					if (Browser.pointerLock) {
						if (event.type != "mousemove" && "mozMovementX" in event) {
							Browser.mouseMovementX = Browser.mouseMovementY = 0
						} else {
							Browser.mouseMovementX = Browser.getMovementX(event);
							Browser.mouseMovementY = Browser.getMovementY(event)
						}
						Browser.mouseX += Browser.mouseMovementX;
						Browser.mouseY += Browser.mouseMovementY
					} else {
						if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
							var touch = event.touch;
							if (touch === undefined) {
								return
							}
							var coords = Browser.calculateMouseCoords(touch.pageX, touch.pageY);
							if (event.type === "touchstart") {
								Browser.lastTouches[touch.identifier] = coords;
								Browser.touches[touch.identifier] = coords
							} else if (event.type === "touchend" || event.type === "touchmove") {
								var last = Browser.touches[touch.identifier];
								last ||= coords;
								Browser.lastTouches[touch.identifier] = last;
								Browser.touches[touch.identifier] = coords
							}
							return
						}
						Browser.setMouseCoords(event.pageX, event.pageY)
					}
				},
				resizeListeners: [],
				updateResizeListeners() {
					var canvas = Module["canvas"];
					Browser.resizeListeners.forEach(listener => listener(canvas.width, canvas.height))
				},
				setCanvasSize(width, height, noUpdates) {
					var canvas = Module["canvas"];
					Browser.updateCanvasDimensions(canvas, width, height);
					if (!noUpdates) Browser.updateResizeListeners()
				},
				windowedWidth: 0,
				windowedHeight: 0,
				setFullscreenCanvasSize() {
					if (typeof SDL != "undefined") {
						var flags = HEAPU32[SDL.screen >>> 2 >>> 0];
						flags = flags | 8388608;
						HEAP32[SDL.screen >>> 2 >>> 0] = flags
					}
					Browser.updateCanvasDimensions(Module["canvas"]);
					Browser.updateResizeListeners()
				},
				setWindowedCanvasSize() {
					if (typeof SDL != "undefined") {
						var flags = HEAPU32[SDL.screen >>> 2 >>> 0];
						flags = flags & ~8388608;
						HEAP32[SDL.screen >>> 2 >>> 0] = flags
					}
					Browser.updateCanvasDimensions(Module["canvas"]);
					Browser.updateResizeListeners()
				},
				updateCanvasDimensions(canvas, wNative, hNative) {
					if (wNative && hNative) {
						canvas.widthNative = wNative;
						canvas.heightNative = hNative
					} else {
						wNative = canvas.widthNative;
						hNative = canvas.heightNative
					}
					var w = wNative;
					var h = hNative;
					if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
						if (w / h < Module["forcedAspectRatio"]) {
							w = Math.round(h * Module["forcedAspectRatio"])
						} else {
							h = Math.round(w / Module["forcedAspectRatio"])
						}
					}
					if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
						var factor = Math.min(screen.width / w, screen.height / h);
						w = Math.round(w * factor);
						h = Math.round(h * factor)
					}
					if (Browser.resizeCanvas) {
						if (canvas.width != w) canvas.width = w;
						if (canvas.height != h) canvas.height = h;
						if (typeof canvas.style != "undefined") {
							canvas.style.removeProperty("width");
							canvas.style.removeProperty("height")
						}
					} else {
						if (canvas.width != wNative) canvas.width = wNative;
						if (canvas.height != hNative) canvas.height = hNative;
						if (typeof canvas.style != "undefined") {
							if (w != wNative || h != hNative) {
								canvas.style.setProperty("width", w + "px", "important");
								canvas.style.setProperty("height", h + "px", "important")
							} else {
								canvas.style.removeProperty("width");
								canvas.style.removeProperty("height")
							}
						}
					}
				}
			};
			var _emscripten_set_main_loop_timing = (mode, value) => {
				Browser.mainLoop.timingMode = mode;
				Browser.mainLoop.timingValue = value;
				if (!Browser.mainLoop.func) {
					return 1
				}
				if (!Browser.mainLoop.running) {
					Browser.mainLoop.running = true
				}
				if (mode == 0) {
					Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
						var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
						setTimeout(Browser.mainLoop.runner, timeUntilNextTick)
					};
					Browser.mainLoop.method = "timeout"
				} else if (mode == 1) {
					Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
						Browser.requestAnimationFrame(Browser.mainLoop.runner)
					};
					Browser.mainLoop.method = "rAF"
				} else if (mode == 2) {
					if (typeof Browser.setImmediate == "undefined") {
						if (typeof setImmediate == "undefined") {
							var setImmediates = [];
							var emscriptenMainLoopMessageId = "setimmediate";
							var Browser_setImmediate_messageHandler = event => {
								if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
									event.stopPropagation();
									setImmediates.shift()()
								}
							};
							addEventListener("message", Browser_setImmediate_messageHandler, true);
							Browser.setImmediate = function Browser_emulated_setImmediate(func) {
								setImmediates.push(func);
								if (ENVIRONMENT_IS_WORKER) {
									Module["setImmediates"] ??= [];
									Module["setImmediates"].push(func);
									postMessage({
										target: emscriptenMainLoopMessageId
									})
								} else postMessage(emscriptenMainLoopMessageId, "*")
							}
						} else {
							Browser.setImmediate = setImmediate
						}
					}
					Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
						Browser.setImmediate(Browser.mainLoop.runner)
					};
					Browser.mainLoop.method = "immediate"
				}
				return 0
			};
			var setMainLoop = (browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) => {
				Browser.mainLoop.func = browserIterationFunc;
				Browser.mainLoop.arg = arg;
				var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;

				function checkIsRunning() {
					if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
						return false
					}
					return true
				}
				Browser.mainLoop.running = false;
				Browser.mainLoop.runner = function Browser_mainLoop_runner() {
					if (ABORT) return;
					if (Browser.mainLoop.queue.length > 0) {
						var start = Date.now();
						var blocker = Browser.mainLoop.queue.shift();
						blocker.func(blocker.arg);
						if (Browser.mainLoop.remainingBlockers) {
							var remaining = Browser.mainLoop.remainingBlockers;
							var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
							if (blocker.counted) {
								Browser.mainLoop.remainingBlockers = next
							} else {
								next = next + .5;
								Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9
							}
						}
						Browser.mainLoop.updateStatus();
						if (!checkIsRunning()) return;
						setTimeout(Browser.mainLoop.runner, 0);
						return
					}
					if (!checkIsRunning()) return;
					Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
					if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
						Browser.mainLoop.scheduler();
						return
					} else if (Browser.mainLoop.timingMode == 0) {
						Browser.mainLoop.tickStartTime = _emscripten_get_now()
					}
					Browser.mainLoop.runIter(browserIterationFunc);
					if (!checkIsRunning()) return;
					if (typeof SDL == "object") SDL.audio?.queueNewAudioData?.();
					Browser.mainLoop.scheduler()
				};
				if (!noSetTiming) {
					if (fps && fps > 0) {
						_emscripten_set_main_loop_timing(0, 1e3 / fps)
					} else {
						_emscripten_set_main_loop_timing(1, 1)
					}
					Browser.mainLoop.scheduler()
				}
				if (simulateInfiniteLoop) {
					throw "unwind"
				}
			};
			var _emscripten_set_main_loop = function(func, fps, simulateInfiniteLoop) {
				func >>>= 0;
				var browserIterationFunc = () => dynCall_v(func);
				setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop)
			};
			var webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance = ctx => !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
			var webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance = ctx => !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
			var webgl_enable_WEBGL_multi_draw = ctx => !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
			var getEmscriptenSupportedExtensions = ctx => {
				var supportedExtensions = ["EXT_color_buffer_float", "EXT_conservative_depth", "EXT_disjoint_timer_query_webgl2", "EXT_texture_norm16", "NV_shader_noperspective_interpolation", "WEBGL_clip_cull_distance", "EXT_color_buffer_half_float", "EXT_depth_clamp", "EXT_float_blend", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "KHR_parallel_shader_compile", "OES_texture_float_linear", "WEBGL_blend_func_extended", "WEBGL_compressed_texture_astc", "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_lose_context", "WEBGL_multi_draw"];
				return (ctx.getSupportedExtensions() || []).filter(ext => supportedExtensions.includes(ext))
			};
			var GL = {
				counter: 1,
				buffers: [],
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
				stringCache: {},
				stringiCache: {},
				unpackAlignment: 4,
				unpackRowLength: 0,
				recordError: errorCode => {
					if (!GL.lastError) {
						GL.lastError = errorCode
					}
				},
				getNewId: table => {
					var ret = GL.counter++;
					for (var i = table.length; i < ret; i++) {
						table[i] = null
					}
					return ret
				},
				genObject: (n, buffers, createFunction, objectTable) => {
					for (var i = 0; i < n; i++) {
						var buffer = GLctx[createFunction]();
						var id = buffer && GL.getNewId(objectTable);
						if (buffer) {
							buffer.name = id;
							objectTable[id] = buffer
						} else {
							GL.recordError(1282)
						}
						HEAP32[buffers + i * 4 >>> 2 >>> 0] = id
					}
				},
				getSource: (shader, count, string, length) => {
					var source = "";
					for (var i = 0; i < count; ++i) {
						var len = length ? HEAPU32[length + i * 4 >>> 2 >>> 0] : undefined;
						source += UTF8ToString(HEAPU32[string + i * 4 >>> 2 >>> 0], len)
					}
					return source
				},
				createContext: (canvas, webGLContextAttributes) => {
					if (!canvas.getContextSafariWebGL2Fixed) {
						canvas.getContextSafariWebGL2Fixed = canvas.getContext;

						function fixedGetContext(ver, attrs) {
							var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
							return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null
						}
						canvas.getContext = fixedGetContext
					}
					var ctx = canvas.getContext("webgl2", webGLContextAttributes);
					if (!ctx) return 0;
					var handle = GL.registerContext(ctx, webGLContextAttributes);
					return handle
				},
				registerContext: (ctx, webGLContextAttributes) => {
					var handle = GL.getNewId(GL.contexts);
					var context = {
						handle: handle,
						attributes: webGLContextAttributes,
						version: webGLContextAttributes.majorVersion,
						GLctx: ctx
					};
					if (ctx.canvas) ctx.canvas.GLctxObject = context;
					GL.contexts[handle] = context;
					if (typeof webGLContextAttributes.enableExtensionsByDefault == "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
						GL.initExtensions(context)
					}
					return handle
				},
				makeContextCurrent: contextHandle => {
					GL.currentContext = GL.contexts[contextHandle];
					Module.ctx = GLctx = GL.currentContext?.GLctx;
					return !(contextHandle && !GLctx)
				},
				getContext: contextHandle => GL.contexts[contextHandle],
				deleteContext: contextHandle => {
					if (GL.currentContext === GL.contexts[contextHandle]) {
						GL.currentContext = null
					}
					if (typeof JSEvents == "object") {
						JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas)
					}
					if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) {
						GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined
					}
					GL.contexts[contextHandle] = null
				},
				initExtensions: context => {
					context ||= GL.currentContext;
					if (context.initExtensionsDone) return;
					context.initExtensionsDone = true;
					var GLctx = context.GLctx;
					webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
					webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
					if (context.version >= 2) {
						GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2")
					}
					if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
						GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query")
					}
					webgl_enable_WEBGL_multi_draw(GLctx);
					getEmscriptenSupportedExtensions(GLctx).forEach(ext => {
						if (!ext.includes("lose_context") && !ext.includes("debug")) {
							GLctx.getExtension(ext)
						}
					})
				}
			};
			var JSEvents = {
				removeAllEventListeners() {
					while (JSEvents.eventHandlers.length) {
						JSEvents._removeHandler(JSEvents.eventHandlers.length - 1)
					}
					JSEvents.deferredCalls = []
				},
				inEventHandler: 0,
				deferredCalls: [],
				deferCall(targetFunction, precedence, argsList) {
					function arraysHaveEqualContent(arrA, arrB) {
						if (arrA.length != arrB.length) return false;
						for (var i in arrA) {
							if (arrA[i] != arrB[i]) return false
						}
						return true
					}
					for (var call of JSEvents.deferredCalls) {
						if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
							return
						}
					}
					JSEvents.deferredCalls.push({
						targetFunction: targetFunction,
						precedence: precedence,
						argsList: argsList
					});
					JSEvents.deferredCalls.sort((x, y) => x.precedence < y.precedence)
				},
				removeDeferredCalls(targetFunction) {
					JSEvents.deferredCalls = JSEvents.deferredCalls.filter(call => call.targetFunction != targetFunction)
				},
				canPerformEventHandlerRequests() {
					if (navigator.userActivation) {
						return navigator.userActivation.isActive
					}
					return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls
				},
				runDeferredCalls() {
					if (!JSEvents.canPerformEventHandlerRequests()) {
						return
					}
					var deferredCalls = JSEvents.deferredCalls;
					JSEvents.deferredCalls = [];
					for (var call of deferredCalls) {
						call.targetFunction(...call.argsList)
					}
				},
				eventHandlers: [],
				removeAllHandlersOnTarget: (target, eventTypeString) => {
					for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
						if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
							JSEvents._removeHandler(i--)
						}
					}
				},
				_removeHandler(i) {
					var h = JSEvents.eventHandlers[i];
					h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
					JSEvents.eventHandlers.splice(i, 1)
				},
				registerOrRemoveHandler(eventHandler) {
					if (!eventHandler.target) {
						return -4
					}
					if (eventHandler.callbackfunc) {
						eventHandler.eventListenerFunc = function(event) {
							++JSEvents.inEventHandler;
							JSEvents.currentEventHandler = eventHandler;
							JSEvents.runDeferredCalls();
							eventHandler.handlerFunc(event);
							JSEvents.runDeferredCalls();
							--JSEvents.inEventHandler
						};
						eventHandler.target.addEventListener(eventHandler.eventTypeString, eventHandler.eventListenerFunc, eventHandler.useCapture);
						JSEvents.eventHandlers.push(eventHandler)
					} else {
						for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
							if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
								JSEvents._removeHandler(i--)
							}
						}
					}
					return 0
				},
				getNodeNameForTarget(target) {
					if (!target) return "";
					if (target == window) return "#window";
					if (target == screen) return "#screen";
					return target?.nodeName || ""
				},
				fullscreenEnabled() {
					return document.fullscreenEnabled || document.webkitFullscreenEnabled
				}
			};
			var webglPowerPreferences = ["default", "low-power", "high-performance"];
			var maybeCStringToJsString = cString => cString > 2 ? UTF8ToString(cString) : cString;
			var specialHTMLTargets = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
			var findEventTarget = target => {
				target = maybeCStringToJsString(target);
				var domElement = specialHTMLTargets[target] || (typeof document != "undefined" ? document.querySelector(target) : undefined);
				return domElement
			};
			var findCanvasEventTarget = findEventTarget;

			function _emscripten_webgl_do_create_context(target, attributes) {
				target >>>= 0;
				attributes >>>= 0;
				var attr32 = attributes >>> 2;
				var powerPreference = HEAP32[attr32 + (8 >> 2) >>> 0];
				var contextAttributes = {
					alpha: !!HEAP8[attributes + 0 >>> 0],
					depth: !!HEAP8[attributes + 1 >>> 0],
					stencil: !!HEAP8[attributes + 2 >>> 0],
					antialias: !!HEAP8[attributes + 3 >>> 0],
					premultipliedAlpha: !!HEAP8[attributes + 4 >>> 0],
					preserveDrawingBuffer: !!HEAP8[attributes + 5 >>> 0],
					powerPreference: webglPowerPreferences[powerPreference],
					failIfMajorPerformanceCaveat: !!HEAP8[attributes + 12 >>> 0],
					majorVersion: HEAP32[attr32 + (16 >> 2) >>> 0],
					minorVersion: HEAP32[attr32 + (20 >> 2) >>> 0],
					enableExtensionsByDefault: HEAP8[attributes + 24 >>> 0],
					explicitSwapControl: HEAP8[attributes + 25 >>> 0],
					proxyContextToMainThread: HEAP32[attr32 + (28 >> 2) >>> 0],
					renderViaOffscreenBackBuffer: HEAP8[attributes + 32 >>> 0]
				};
				var canvas = findCanvasEventTarget(target);
				if (!canvas) {
					return 0
				}
				if (contextAttributes.explicitSwapControl) {
					return 0
				}
				var contextHandle = GL.createContext(canvas, contextAttributes);
				return contextHandle
			}
			var _emscripten_webgl_create_context = _emscripten_webgl_do_create_context;

			function _emscripten_webgl_do_get_current_context() {
				return GL.currentContext ? GL.currentContext.handle : 0
			}
			var _emscripten_webgl_get_current_context = _emscripten_webgl_do_get_current_context;

			function _emscripten_webgl_get_drawing_buffer_size(contextHandle, width, height) {
				contextHandle >>>= 0;
				width >>>= 0;
				height >>>= 0;
				var GLContext = GL.getContext(contextHandle);
				if (!GLContext || !GLContext.GLctx || !width || !height) {
					return -5
				}
				HEAP32[width >>> 2 >>> 0] = GLContext.GLctx.drawingBufferWidth;
				HEAP32[height >>> 2 >>> 0] = GLContext.GLctx.drawingBufferHeight;
				return 0
			}

			function _emscripten_webgl_make_context_current(contextHandle) {
				contextHandle >>>= 0;
				var success = GL.makeContextCurrent(contextHandle);
				return success ? 0 : -5
			}
			var ENV = {};
			var getExecutableName = () => thisProgram || "./this.program";
			var getEnvStrings = () => {
				if (!getEnvStrings.strings) {
					var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
					var env = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: lang,
						_: getExecutableName()
					};
					for (var x in ENV) {
						if (ENV[x] === undefined) delete env[x];
						else env[x] = ENV[x]
					}
					var strings = [];
					for (var x in env) {
						strings.push(`${x}=${env[x]}`)
					}
					getEnvStrings.strings = strings
				}
				return getEnvStrings.strings
			};
			var stringToAscii = (str, buffer) => {
				for (var i = 0; i < str.length; ++i) {
					HEAP8[buffer++ >>> 0] = str.charCodeAt(i)
				}
				HEAP8[buffer >>> 0] = 0
			};
			var _environ_get = function(__environ, environ_buf) {
				__environ >>>= 0;
				environ_buf >>>= 0;
				var bufSize = 0;
				getEnvStrings().forEach((string, i) => {
					var ptr = environ_buf + bufSize;
					HEAPU32[__environ + i * 4 >>> 2 >>> 0] = ptr;
					stringToAscii(string, ptr);
					bufSize += string.length + 1
				});
				return 0
			};
			var _environ_sizes_get = function(penviron_count, penviron_buf_size) {
				penviron_count >>>= 0;
				penviron_buf_size >>>= 0;
				var strings = getEnvStrings();
				HEAPU32[penviron_count >>> 2 >>> 0] = strings.length;
				var bufSize = 0;
				strings.forEach(string => bufSize += string.length + 1);
				HEAPU32[penviron_buf_size >>> 2 >>> 0] = bufSize;
				return 0
			};

			function _fd_close(fd) {
				try {
					var stream = SYSCALLS.getStreamFromFD(fd);
					FS.close(stream);
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return e.errno
				}
			}

			function _fd_fdstat_get(fd, pbuf) {
				pbuf >>>= 0;
				try {
					var rightsBase = 0;
					var rightsInheriting = 0;
					var flags = 0;
					{
						var stream = SYSCALLS.getStreamFromFD(fd);
						var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4
					}
					HEAP8[pbuf >>> 0] = type;
					HEAP16[pbuf + 2 >>> 1 >>> 0] = flags;
					HEAP64[pbuf + 8 >>> 3] = BigInt(rightsBase);
					HEAP64[pbuf + 16 >>> 3] = BigInt(rightsInheriting);
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return e.errno
				}
			}
			var doReadv = (stream, iov, iovcnt, offset) => {
				var ret = 0;
				for (var i = 0; i < iovcnt; i++) {
					var ptr = HEAPU32[iov >>> 2 >>> 0];
					var len = HEAPU32[iov + 4 >>> 2 >>> 0];
					iov += 8;
					var curr = FS.read(stream, HEAP8, ptr, len, offset);
					if (curr < 0) return -1;
					ret += curr;
					if (curr < len) break;
					if (typeof offset != "undefined") {
						offset += curr
					}
				}
				return ret
			};

			function _fd_read(fd, iov, iovcnt, pnum) {
				iov >>>= 0;
				iovcnt >>>= 0;
				pnum >>>= 0;
				try {
					var stream = SYSCALLS.getStreamFromFD(fd);
					var num = doReadv(stream, iov, iovcnt);
					HEAPU32[pnum >>> 2 >>> 0] = num;
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return e.errno
				}
			}

			function _fd_seek(fd, offset, whence, newOffset) {
				offset = bigintToI53Checked(offset);
				newOffset >>>= 0;
				try {
					if (isNaN(offset)) return 61;
					var stream = SYSCALLS.getStreamFromFD(fd);
					FS.llseek(stream, offset, whence);
					HEAP64[newOffset >>> 3] = BigInt(stream.position);
					if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return e.errno
				}
			}
			var doWritev = (stream, iov, iovcnt, offset) => {
				var ret = 0;
				for (var i = 0; i < iovcnt; i++) {
					var ptr = HEAPU32[iov >>> 2 >>> 0];
					var len = HEAPU32[iov + 4 >>> 2 >>> 0];
					iov += 8;
					var curr = FS.write(stream, HEAP8, ptr, len, offset);
					if (curr < 0) return -1;
					ret += curr;
					if (typeof offset != "undefined") {
						offset += curr
					}
				}
				return ret
			};

			function _fd_write(fd, iov, iovcnt, pnum) {
				iov >>>= 0;
				iovcnt >>>= 0;
				pnum >>>= 0;
				try {
					var stream = SYSCALLS.getStreamFromFD(fd);
					var num = doWritev(stream, iov, iovcnt);
					HEAPU32[pnum >>> 2 >>> 0] = num;
					return 0
				} catch (e) {
					if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
					return e.errno
				}
			}
			var writeSockaddr = (sa, family, addr, port, addrlen) => {
				switch (family) {
					case 2:
						addr = inetPton4(addr);
						zeroMemory(sa, 16);
						if (addrlen) {
							HEAP32[addrlen >>> 2 >>> 0] = 16
						}
						HEAP16[sa >>> 1 >>> 0] = family;
						HEAP32[sa + 4 >>> 2 >>> 0] = addr;
						HEAP16[sa + 2 >>> 1 >>> 0] = _htons(port);
						break;
					case 10:
						addr = inetPton6(addr);
						zeroMemory(sa, 28);
						if (addrlen) {
							HEAP32[addrlen >>> 2 >>> 0] = 28
						}
						HEAP32[sa >>> 2 >>> 0] = family;
						HEAP32[sa + 8 >>> 2 >>> 0] = addr[0];
						HEAP32[sa + 12 >>> 2 >>> 0] = addr[1];
						HEAP32[sa + 16 >>> 2 >>> 0] = addr[2];
						HEAP32[sa + 20 >>> 2 >>> 0] = addr[3];
						HEAP16[sa + 2 >>> 1 >>> 0] = _htons(port);
						break;
					default:
						return 5
				}
				return 0
			};

			function _getaddrinfo(node, service, hint, out) {
				node >>>= 0;
				service >>>= 0;
				hint >>>= 0;
				out >>>= 0;
				var addr = 0;
				var port = 0;
				var flags = 0;
				var family = 0;
				var type = 0;
				var proto = 0;
				var ai;

				function allocaddrinfo(family, type, proto, canon, addr, port) {
					var sa, salen, ai;
					var errno;
					salen = family === 10 ? 28 : 16;
					addr = family === 10 ? inetNtop6(addr) : inetNtop4(addr);
					sa = _malloc(salen);
					errno = writeSockaddr(sa, family, addr, port);
					assert(!errno);
					ai = _malloc(32);
					HEAP32[ai + 4 >>> 2 >>> 0] = family;
					HEAP32[ai + 8 >>> 2 >>> 0] = type;
					HEAP32[ai + 12 >>> 2 >>> 0] = proto;
					HEAPU32[ai + 24 >>> 2 >>> 0] = canon;
					HEAPU32[ai + 20 >>> 2 >>> 0] = sa;
					if (family === 10) {
						HEAP32[ai + 16 >>> 2 >>> 0] = 28
					} else {
						HEAP32[ai + 16 >>> 2 >>> 0] = 16
					}
					HEAP32[ai + 28 >>> 2 >>> 0] = 0;
					return ai
				}
				if (hint) {
					flags = HEAP32[hint >>> 2 >>> 0];
					family = HEAP32[hint + 4 >>> 2 >>> 0];
					type = HEAP32[hint + 8 >>> 2 >>> 0];
					proto = HEAP32[hint + 12 >>> 2 >>> 0]
				}
				if (type && !proto) {
					proto = type === 2 ? 17 : 6
				}
				if (!type && proto) {
					type = proto === 17 ? 2 : 1
				}
				if (proto === 0) {
					proto = 6
				}
				if (type === 0) {
					type = 1
				}
				if (!node && !service) {
					return -2
				}
				if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
					return -1
				}
				if (hint !== 0 && HEAP32[hint >>> 2 >>> 0] & 2 && !node) {
					return -1
				}
				if (flags & 32) {
					return -2
				}
				if (type !== 0 && type !== 1 && type !== 2) {
					return -7
				}
				if (family !== 0 && family !== 2 && family !== 10) {
					return -6
				}
				if (service) {
					service = UTF8ToString(service);
					port = parseInt(service, 10);
					if (isNaN(port)) {
						if (flags & 1024) {
							return -2
						}
						return -8
					}
				}
				if (!node) {
					if (family === 0) {
						family = 2
					}
					if ((flags & 1) === 0) {
						if (family === 2) {
							addr = _htonl(2130706433)
						} else {
							addr = [0, 0, 0, 1]
						}
					}
					ai = allocaddrinfo(family, type, proto, null, addr, port);
					HEAPU32[out >>> 2 >>> 0] = ai;
					return 0
				}
				node = UTF8ToString(node);
				addr = inetPton4(node);
				if (addr !== null) {
					if (family === 0 || family === 2) {
						family = 2
					} else if (family === 10 && flags & 8) {
						addr = [0, 0, _htonl(65535), addr];
						family = 10
					} else {
						return -2
					}
				} else {
					addr = inetPton6(node);
					if (addr !== null) {
						if (family === 0 || family === 10) {
							family = 10
						} else {
							return -2
						}
					}
				}
				if (addr != null) {
					ai = allocaddrinfo(family, type, proto, node, addr, port);
					HEAPU32[out >>> 2 >>> 0] = ai;
					return 0
				}
				if (flags & 4) {
					return -2
				}
				node = DNS.lookup_name(node);
				addr = inetPton4(node);
				if (family === 0) {
					family = 2
				} else if (family === 10) {
					addr = [0, 0, _htonl(65535), addr]
				}
				ai = allocaddrinfo(family, type, proto, null, addr, port);
				HEAPU32[out >>> 2 >>> 0] = ai;
				return 0
			}

			function _getentropy(buffer, size) {
				buffer >>>= 0;
				size >>>= 0;
				randomFill(HEAPU8.subarray(buffer >>> 0, buffer + size >>> 0));
				return 0
			}
			var _glActiveTexture = x0 => GLctx.activeTexture(x0);
			var _glAttachShader = (program, shader) => {
				GLctx.attachShader(GL.programs[program], GL.shaders[shader])
			};
			var _glBindBuffer = (target, buffer) => {
				if (target == 35051) {
					GLctx.currentPixelPackBufferBinding = buffer
				} else if (target == 35052) {
					GLctx.currentPixelUnpackBufferBinding = buffer
				}
				GLctx.bindBuffer(target, GL.buffers[buffer])
			};
			var _glBindFramebuffer = (target, framebuffer) => {
				GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer])
			};
			var _glBindRenderbuffer = (target, renderbuffer) => {
				GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer])
			};
			var _glBindTexture = (target, texture) => {
				GLctx.bindTexture(target, GL.textures[texture])
			};
			var _glBindVertexArray = vao => {
				GLctx.bindVertexArray(GL.vaos[vao])
			};
			var _glBlendFuncSeparate = (x0, x1, x2, x3) => GLctx.blendFuncSeparate(x0, x1, x2, x3);

			function _glBufferData(target, size, data, usage) {
				size >>>= 0;
				data >>>= 0;
				GLctx.bufferData(target, data ? HEAPU8.subarray(data >>> 0, data + size >>> 0) : size, usage)
			}

			function _glBufferSubData(target, offset, size, data) {
				offset >>>= 0;
				size >>>= 0;
				data >>>= 0;
				GLctx.bufferSubData(target, offset, HEAPU8.subarray(data >>> 0, data + size >>> 0))
			}
			var _glClear = x0 => GLctx.clear(x0);
			var _glClearColor = (x0, x1, x2, x3) => GLctx.clearColor(x0, x1, x2, x3);
			var _glColorMask = (red, green, blue, alpha) => {
				GLctx.colorMask(!!red, !!green, !!blue, !!alpha)
			};
			var _glCompileShader = shader => {
				GLctx.compileShader(GL.shaders[shader])
			};
			var _glCreateProgram = () => {
				var id = GL.getNewId(GL.programs);
				var program = GLctx.createProgram();
				program.name = id;
				program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
				program.uniformIdCounter = 1;
				GL.programs[id] = program;
				return id
			};
			var _glCreateShader = shaderType => {
				var id = GL.getNewId(GL.shaders);
				GL.shaders[id] = GLctx.createShader(shaderType);
				return id
			};
			var _glCullFace = x0 => GLctx.cullFace(x0);

			function _glDeleteBuffers(n, buffers) {
				buffers >>>= 0;
				for (var i = 0; i < n; i++) {
					var id = HEAP32[buffers + i * 4 >>> 2 >>> 0];
					var buffer = GL.buffers[id];
					if (!buffer) continue;
					GLctx.deleteBuffer(buffer);
					buffer.name = 0;
					GL.buffers[id] = null;
					if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
					if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0
				}
			}

			function _glDeleteFramebuffers(n, framebuffers) {
				framebuffers >>>= 0;
				for (var i = 0; i < n; ++i) {
					var id = HEAP32[framebuffers + i * 4 >>> 2 >>> 0];
					var framebuffer = GL.framebuffers[id];
					if (!framebuffer) continue;
					GLctx.deleteFramebuffer(framebuffer);
					framebuffer.name = 0;
					GL.framebuffers[id] = null
				}
			}
			var _glDeleteProgram = id => {
				if (!id) return;
				var program = GL.programs[id];
				if (!program) {
					GL.recordError(1281);
					return
				}
				GLctx.deleteProgram(program);
				program.name = 0;
				GL.programs[id] = null
			};

			function _glDeleteRenderbuffers(n, renderbuffers) {
				renderbuffers >>>= 0;
				for (var i = 0; i < n; i++) {
					var id = HEAP32[renderbuffers + i * 4 >>> 2 >>> 0];
					var renderbuffer = GL.renderbuffers[id];
					if (!renderbuffer) continue;
					GLctx.deleteRenderbuffer(renderbuffer);
					renderbuffer.name = 0;
					GL.renderbuffers[id] = null
				}
			}
			var _glDeleteShader = id => {
				if (!id) return;
				var shader = GL.shaders[id];
				if (!shader) {
					GL.recordError(1281);
					return
				}
				GLctx.deleteShader(shader);
				GL.shaders[id] = null
			};

			function _glDeleteTextures(n, textures) {
				textures >>>= 0;
				for (var i = 0; i < n; i++) {
					var id = HEAP32[textures + i * 4 >>> 2 >>> 0];
					var texture = GL.textures[id];
					if (!texture) continue;
					GLctx.deleteTexture(texture);
					texture.name = 0;
					GL.textures[id] = null
				}
			}
			var _glDepthFunc = x0 => GLctx.depthFunc(x0);
			var _glDepthMask = flag => {
				GLctx.depthMask(!!flag)
			};
			var _glDetachShader = (program, shader) => {
				GLctx.detachShader(GL.programs[program], GL.shaders[shader])
			};
			var _glDisable = x0 => GLctx.disable(x0);
			var _glDisableVertexAttribArray = index => {
				GLctx.disableVertexAttribArray(index)
			};
			var _glDrawArrays = (mode, first, count) => {
				GLctx.drawArrays(mode, first, count)
			};

			function _glDrawElements(mode, count, type, indices) {
				indices >>>= 0;
				GLctx.drawElements(mode, count, type, indices)
			}
			var _glEnable = x0 => GLctx.enable(x0);
			var _glEnableVertexAttribArray = index => {
				GLctx.enableVertexAttribArray(index)
			};
			var _glFramebufferRenderbuffer = (target, attachment, renderbuffertarget, renderbuffer) => {
				GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer])
			};
			var _glFramebufferTexture2D = (target, attachment, textarget, texture, level) => {
				GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level)
			};

			function _glGenBuffers(n, buffers) {
				buffers >>>= 0;
				GL.genObject(n, buffers, "createBuffer", GL.buffers)
			}

			function _glGenFramebuffers(n, ids) {
				ids >>>= 0;
				GL.genObject(n, ids, "createFramebuffer", GL.framebuffers)
			}

			function _glGenRenderbuffers(n, renderbuffers) {
				renderbuffers >>>= 0;
				GL.genObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers)
			}

			function _glGenTextures(n, textures) {
				textures >>>= 0;
				GL.genObject(n, textures, "createTexture", GL.textures)
			}

			function _glGenVertexArrays(n, arrays) {
				arrays >>>= 0;
				GL.genObject(n, arrays, "createVertexArray", GL.vaos)
			}
			var _glGenerateMipmap = x0 => GLctx.generateMipmap(x0);
			var _glGetError = () => {
				var error = GLctx.getError() || GL.lastError;
				GL.lastError = 0;
				return error
			};
			var writeI53ToI64 = (ptr, num) => {
				HEAPU32[ptr >>> 2 >>> 0] = num;
				var lower = HEAPU32[ptr >>> 2 >>> 0];
				HEAPU32[ptr + 4 >>> 2 >>> 0] = (num - lower) / 4294967296
			};
			var webglGetExtensions = function $webglGetExtensions() {
				var exts = getEmscriptenSupportedExtensions(GLctx);
				exts = exts.concat(exts.map(e => "GL_" + e));
				return exts
			};
			var emscriptenWebGLGet = (name_, p, type) => {
				if (!p) {
					GL.recordError(1281);
					return
				}
				var ret = undefined;
				switch (name_) {
					case 36346:
						ret = 1;
						break;
					case 36344:
						if (type != 0 && type != 1) {
							GL.recordError(1280)
						}
						return;
					case 34814:
					case 36345:
						ret = 0;
						break;
					case 34466:
						var formats = GLctx.getParameter(34467);
						ret = formats ? formats.length : 0;
						break;
					case 33309:
						if (GL.currentContext.version < 2) {
							GL.recordError(1282);
							return
						}
						ret = webglGetExtensions().length;
						break;
					case 33307:
					case 33308:
						if (GL.currentContext.version < 2) {
							GL.recordError(1280);
							return
						}
						ret = name_ == 33307 ? 3 : 0;
						break
				}
				if (ret === undefined) {
					var result = GLctx.getParameter(name_);
					switch (typeof result) {
						case "number":
							ret = result;
							break;
						case "boolean":
							ret = result ? 1 : 0;
							break;
						case "string":
							GL.recordError(1280);
							return;
						case "object":
							if (result === null) {
								switch (name_) {
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
									case 34068: {
										ret = 0;
										break
									}
									default: {
										GL.recordError(1280);
										return
									}
								}
							} else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
								for (var i = 0; i < result.length; ++i) {
									switch (type) {
										case 0:
											HEAP32[p + i * 4 >>> 2 >>> 0] = result[i];
											break;
										case 2:
											HEAPF32[p + i * 4 >>> 2 >>> 0] = result[i];
											break;
										case 4:
											HEAP8[p + i >>> 0] = result[i] ? 1 : 0;
											break
									}
								}
								return
							} else {
								try {
									ret = result.name | 0
								} catch (e) {
									GL.recordError(1280);
									err(`GL_INVALID_ENUM in glGet${type}v: Unknown object returned from WebGL getParameter(${name_})! (error: ${e})`);
									return
								}
							}
							break;
						default:
							GL.recordError(1280);
							err(`GL_INVALID_ENUM in glGet${type}v: Native code calling glGet${type}v(${name_}) and it returns ${result} of type ${typeof result}!`);
							return
					}
				}
				switch (type) {
					case 1:
						writeI53ToI64(p, ret);
						break;
					case 0:
						HEAP32[p >>> 2 >>> 0] = ret;
						break;
					case 2:
						HEAPF32[p >>> 2 >>> 0] = ret;
						break;
					case 4:
						HEAP8[p >>> 0] = ret ? 1 : 0;
						break
				}
			};

			function _glGetIntegerv(name_, p) {
				p >>>= 0;
				return emscriptenWebGLGet(name_, p, 0)
			}

			function _glGetShaderiv(shader, pname, p) {
				p >>>= 0;
				if (!p) {
					GL.recordError(1281);
					return
				}
				if (pname == 35716) {
					var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
					if (log === null) log = "(unknown error)";
					var logLength = log ? log.length + 1 : 0;
					HEAP32[p >>> 2 >>> 0] = logLength
				} else if (pname == 35720) {
					var source = GLctx.getShaderSource(GL.shaders[shader]);
					var sourceLength = source ? source.length + 1 : 0;
					HEAP32[p >>> 2 >>> 0] = sourceLength
				} else {
					HEAP32[p >>> 2 >>> 0] = GLctx.getShaderParameter(GL.shaders[shader], pname)
				}
			}
			var webglGetLeftBracePos = name => name.slice(-1) == "]" && name.lastIndexOf("[");
			var webglPrepareUniformLocationsBeforeFirstUse = program => {
				var uniformLocsById = program.uniformLocsById,
					uniformSizeAndIdsByName = program.uniformSizeAndIdsByName,
					i, j;
				if (!uniformLocsById) {
					program.uniformLocsById = uniformLocsById = {};
					program.uniformArrayNamesById = {};
					for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
						var u = GLctx.getActiveUniform(program, i);
						var nm = u.name;
						var sz = u.size;
						var lb = webglGetLeftBracePos(nm);
						var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
						var id = program.uniformIdCounter;
						program.uniformIdCounter += sz;
						uniformSizeAndIdsByName[arrayName] = [sz, id];
						for (j = 0; j < sz; ++j) {
							uniformLocsById[id] = j;
							program.uniformArrayNamesById[id++] = arrayName
						}
					}
				}
			};

			function _glGetUniformLocation(program, name) {
				name >>>= 0;
				name = UTF8ToString(name);
				if (program = GL.programs[program]) {
					webglPrepareUniformLocationsBeforeFirstUse(program);
					var uniformLocsById = program.uniformLocsById;
					var arrayIndex = 0;
					var uniformBaseName = name;
					var leftBrace = webglGetLeftBracePos(name);
					if (leftBrace > 0) {
						arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
						uniformBaseName = name.slice(0, leftBrace)
					}
					var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
					if (sizeAndId && arrayIndex < sizeAndId[0]) {
						arrayIndex += sizeAndId[1];
						if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
							return arrayIndex
						}
					}
				} else {
					GL.recordError(1281)
				}
				return -1
			}
			var _glLinkProgram = program => {
				program = GL.programs[program];
				GLctx.linkProgram(program);
				program.uniformLocsById = 0;
				program.uniformSizeAndIdsByName = {}
			};
			var _glPixelStorei = (pname, param) => {
				if (pname == 3317) {
					GL.unpackAlignment = param
				} else if (pname == 3314) {
					GL.unpackRowLength = param
				}
				GLctx.pixelStorei(pname, param)
			};
			var computeUnpackAlignedImageSize = (width, height, sizePerPixel) => {
				function roundedToNextMultipleOf(x, y) {
					return x + y - 1 & -y
				}
				var plainRowSize = (GL.unpackRowLength || width) * sizePerPixel;
				var alignedRowSize = roundedToNextMultipleOf(plainRowSize, GL.unpackAlignment);
				return height * alignedRowSize
			};
			var colorChannelsInGlTextureFormat = format => {
				var colorChannels = {
					5: 3,
					6: 4,
					8: 2,
					29502: 3,
					29504: 4,
					26917: 2,
					26918: 2,
					29846: 3,
					29847: 4
				};
				return colorChannels[format - 6402] || 1
			};
			var heapObjectForWebGLType = type => {
				type -= 5120;
				if (type == 0) return HEAP8;
				if (type == 1) return HEAPU8;
				if (type == 2) return HEAP16;
				if (type == 4) return HEAP32;
				if (type == 6) return HEAPF32;
				if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return HEAPU32;
				return HEAPU16
			};
			var toTypedArrayIndex = (pointer, heap) => pointer >>> 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
			var emscriptenWebGLGetTexPixelData = (type, format, width, height, pixels, internalFormat) => {
				var heap = heapObjectForWebGLType(type);
				var sizePerPixel = colorChannelsInGlTextureFormat(format) * heap.BYTES_PER_ELEMENT;
				var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel);
				return heap.subarray(toTypedArrayIndex(pixels, heap) >>> 0, toTypedArrayIndex(pixels + bytes, heap) >>> 0)
			};

			function _glReadPixels(x, y, width, height, format, type, pixels) {
				pixels >>>= 0;
				if (true) {
					if (GLctx.currentPixelPackBufferBinding) {
						GLctx.readPixels(x, y, width, height, format, type, pixels);
						return
					}
				}
				var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
				if (!pixelData) {
					GL.recordError(1280);
					return
				}
				GLctx.readPixels(x, y, width, height, format, type, pixelData)
			}
			var _glRenderbufferStorage = (x0, x1, x2, x3) => GLctx.renderbufferStorage(x0, x1, x2, x3);

			function _glShaderSource(shader, count, string, length) {
				string >>>= 0;
				length >>>= 0;
				var source = GL.getSource(shader, count, string, length);
				GLctx.shaderSource(GL.shaders[shader], source)
			}
			var _glStencilFunc = (x0, x1, x2) => GLctx.stencilFunc(x0, x1, x2);
			var _glStencilMask = x0 => GLctx.stencilMask(x0);
			var _glStencilOp = (x0, x1, x2) => GLctx.stencilOp(x0, x1, x2);

			function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
				pixels >>>= 0;
				if (true) {
					if (GLctx.currentPixelUnpackBufferBinding) {
						GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
						return
					}
				}
				var pixelData = pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null;
				GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixelData)
			}

			function _glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
				pixels >>>= 0;
				if (GLctx.currentPixelUnpackBufferBinding) {
					GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels)
				} else if (pixels) {
					var heap = heapObjectForWebGLType(type);
					var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height * depth, pixels, internalFormat);
					GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixelData)
				} else {
					GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, null)
				}
			}
			var _glTexParameteri = (x0, x1, x2) => GLctx.texParameteri(x0, x1, x2);
			var webglGetUniformLocation = location => {
				var p = GLctx.currentProgram;
				if (p) {
					var webglLoc = p.uniformLocsById[location];
					if (typeof webglLoc == "number") {
						p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? `[${webglLoc}]` : ""))
					}
					return webglLoc
				} else {
					GL.recordError(1282)
				}
			};
			var _glUniform1f = (location, v0) => {
				GLctx.uniform1f(webglGetUniformLocation(location), v0)
			};
			var _glUniform1i = (location, v0) => {
				GLctx.uniform1i(webglGetUniformLocation(location), v0)
			};
			var _glUniform2f = (location, v0, v1) => {
				GLctx.uniform2f(webglGetUniformLocation(location), v0, v1)
			};
			var _glUniform3f = (location, v0, v1, v2) => {
				GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2)
			};
			var miniTempWebGLFloatBuffers = [];

			function _glUniform3fv(location, count, value) {
				value >>>= 0;
				if (count <= 96) {
					var view = miniTempWebGLFloatBuffers[3 * count];
					for (var i = 0; i < 3 * count; i += 3) {
						view[i] = HEAPF32[value + 4 * i >>> 2 >>> 0];
						view[i + 1] = HEAPF32[value + (4 * i + 4) >>> 2 >>> 0];
						view[i + 2] = HEAPF32[value + (4 * i + 8) >>> 2 >>> 0]
					}
				} else {
					var view = HEAPF32.subarray(value >>> 2 >>> 0, value + count * 12 >>> 2 >>> 0)
				}
				GLctx.uniform3fv(webglGetUniformLocation(location), view)
			}
			var _glUniform4f = (location, v0, v1, v2, v3) => {
				GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3)
			};

			function _glUniform4fv(location, count, value) {
				value >>>= 0;
				if (count <= 72) {
					var view = miniTempWebGLFloatBuffers[4 * count];
					var heap = HEAPF32;
					value = value >>> 2;
					for (var i = 0; i < 4 * count; i += 4) {
						var dst = value + i;
						view[i] = heap[dst >>> 0];
						view[i + 1] = heap[dst + 1 >>> 0];
						view[i + 2] = heap[dst + 2 >>> 0];
						view[i + 3] = heap[dst + 3 >>> 0]
					}
				} else {
					var view = HEAPF32.subarray(value >>> 2 >>> 0, value + count * 16 >>> 2 >>> 0)
				}
				GLctx.uniform4fv(webglGetUniformLocation(location), view)
			}

			function _glUniformMatrix4fv(location, count, transpose, value) {
				value >>>= 0;
				if (count <= 18) {
					var view = miniTempWebGLFloatBuffers[16 * count];
					var heap = HEAPF32;
					value = value >>> 2;
					for (var i = 0; i < 16 * count; i += 16) {
						var dst = value + i;
						view[i] = heap[dst >>> 0];
						view[i + 1] = heap[dst + 1 >>> 0];
						view[i + 2] = heap[dst + 2 >>> 0];
						view[i + 3] = heap[dst + 3 >>> 0];
						view[i + 4] = heap[dst + 4 >>> 0];
						view[i + 5] = heap[dst + 5 >>> 0];
						view[i + 6] = heap[dst + 6 >>> 0];
						view[i + 7] = heap[dst + 7 >>> 0];
						view[i + 8] = heap[dst + 8 >>> 0];
						view[i + 9] = heap[dst + 9 >>> 0];
						view[i + 10] = heap[dst + 10 >>> 0];
						view[i + 11] = heap[dst + 11 >>> 0];
						view[i + 12] = heap[dst + 12 >>> 0];
						view[i + 13] = heap[dst + 13 >>> 0];
						view[i + 14] = heap[dst + 14 >>> 0];
						view[i + 15] = heap[dst + 15 >>> 0]
					}
				} else {
					var view = HEAPF32.subarray(value >>> 2 >>> 0, value + count * 64 >>> 2 >>> 0)
				}
				GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view)
			}
			var _glUseProgram = program => {
				program = GL.programs[program];
				GLctx.useProgram(program);
				GLctx.currentProgram = program
			};

			function _glVertexAttribIPointer(index, size, type, stride, ptr) {
				ptr >>>= 0;
				GLctx.vertexAttribIPointer(index, size, type, stride, ptr)
			}

			function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
				ptr >>>= 0;
				GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr)
			}
			var _glViewport = (x0, x1, x2, x3) => GLctx.viewport(x0, x1, x2, x3);
			var stringToNewUTF8 = str => {
				var size = lengthBytesUTF8(str) + 1;
				var ret = _malloc(size);
				if (ret) stringToUTF8(str, ret, size);
				return ret
			};
			var GLEW = {
				isLinaroFork: 1,
				extensions: null,
				error: {
					0: null,
					1: null,
					2: null,
					3: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null
				},
				version: {
					1: null,
					2: null,
					3: null,
					4: null
				},
				errorStringConstantFromCode(error) {
					if (GLEW.isLinaroFork) {
						switch (error) {
							case 4:
								return "OpenGL ES lib expected, found OpenGL lib";
							case 5:
								return "OpenGL lib expected, found OpenGL ES lib";
							case 6:
								return "Missing EGL version";
							case 7:
								return "EGL 1.1 and up are supported";
							default:
								break
						}
					}
					switch (error) {
						case 0:
							return "No error";
						case 1:
							return "Missing GL version";
						case 2:
							return "GL 1.1 and up are supported";
						case 3:
							return "GLX 1.2 and up are supported";
						default:
							return null
					}
				},
				errorString(error) {
					if (!GLEW.error[error]) {
						var string = GLEW.errorStringConstantFromCode(error);
						if (!string) {
							string = "Unknown error";
							error = 8
						}
						GLEW.error[error] = stringToNewUTF8(string)
					}
					return GLEW.error[error]
				},
				versionStringConstantFromCode(name) {
					switch (name) {
						case 1:
							return "1.10.0";
						case 2:
							return "1";
						case 3:
							return "10";
						case 4:
							return "0";
						default:
							return null
					}
				},
				versionString(name) {
					if (!GLEW.version[name]) {
						var string = GLEW.versionStringConstantFromCode(name);
						if (!string) return 0;
						GLEW.version[name] = stringToNewUTF8(string)
					}
					return GLEW.version[name]
				},
				extensionIsSupported(name) {
					GLEW.extensions ||= webglGetExtensions();
					if (GLEW.extensions.includes(name)) return 1;
					return GLEW.extensions.includes("GL_" + name)
				}
			};
			var _glewInit = () => 0;

			function _llvm_eh_typeid_for(type) {
				type >>>= 0;
				return type
			}
			var FS_createPath = FS.createPath;
			var FS_unlink = path => FS.unlink(path);
			var FS_createLazyFile = FS.createLazyFile;
			var FS_createDevice = FS.createDevice;
			FS.createPreloadedFile = FS_createPreloadedFile;
			FS.staticInit();
			Module["FS_createPath"] = FS.createPath;
			Module["FS_createDataFile"] = FS.createDataFile;
			Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
			Module["FS_unlink"] = FS.unlink;
			Module["FS_createLazyFile"] = FS.createLazyFile;
			Module["FS_createDevice"] = FS.createDevice;
			InternalError = Module["InternalError"] = class InternalError extends Error {
				constructor(message) {
					super(message);
					this.name = "InternalError"
				}
			};
			embind_init_charCodes();
			BindingError = Module["BindingError"] = class BindingError extends Error {
				constructor(message) {
					super(message);
					this.name = "BindingError"
				}
			};
			init_ClassHandle();
			init_embind();
			init_RegisteredPointer();
			UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
			init_emval();
			Module["requestFullscreen"] = Browser.requestFullscreen;
			Module["requestAnimationFrame"] = Browser.requestAnimationFrame;
			Module["setCanvasSize"] = Browser.setCanvasSize;
			Module["pauseMainLoop"] = Browser.mainLoop.pause;
			Module["resumeMainLoop"] = Browser.mainLoop.resume;
			Module["getUserMedia"] = Browser.getUserMedia;
			Module["createContext"] = Browser.createContext;
			var preloadedImages = {};
			var preloadedAudios = {};
			var GLctx;
			var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
			for (var i = 0; i <= 288; ++i) {
				miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i)
			}
			var wasmImports = {
				Kd: ___call_sighandler,
				r: ___cxa_begin_catch,
				Cd: ___cxa_current_primary_exception,
				y: ___cxa_end_catch,
				a: ___cxa_find_matching_catch_2,
				d: ___cxa_find_matching_catch_3,
				B: ___cxa_find_matching_catch_4,
				I: ___cxa_find_matching_catch_5,
				Rc: ___cxa_find_matching_catch_6,
				qd: ___cxa_find_matching_catch_7,
				xb: ___cxa_get_exception_ptr,
				rb: ___cxa_rethrow,
				Bd: ___cxa_rethrow_primary_exception,
				u: ___cxa_throw,
				Dd: ___cxa_uncaught_exceptions,
				c: ___resumeException,
				xd: ___syscall_connect,
				be: ___syscall_faccessat,
				Ja: ___syscall_fcntl64,
				$d: ___syscall_fstat64,
				Ad: ___syscall_getcwd,
				Jd: ___syscall_getdents64,
				Nb: ___syscall_ioctl,
				Yd: ___syscall_lstat64,
				Td: ___syscall_mkdirat,
				Zd: ___syscall_newfstatat,
				Ob: ___syscall_openat,
				zd: ___syscall_readlinkat,
				Hd: ___syscall_renameat,
				Id: ___syscall_rmdir,
				wd: ___syscall_sendto,
				lc: ___syscall_socket,
				_d: ___syscall_stat64,
				Lb: ___syscall_unlinkat,
				ce: __abort_js,
				ld: __embind_finalize_value_object,
				$c: __embind_register_bigint,
				hd: __embind_register_bool,
				N: __embind_register_class,
				Na: __embind_register_class_class_function,
				sa: __embind_register_class_constructor,
				x: __embind_register_class_function,
				G: __embind_register_class_property,
				Ye: __embind_register_emval,
				nd: __embind_register_enum,
				Qa: __embind_register_enum_value,
				Xc: __embind_register_float,
				D: __embind_register_function,
				Ua: __embind_register_integer,
				pa: __embind_register_memory_view,
				Da: __embind_register_optional,
				da: __embind_register_smart_ptr,
				Sc: __embind_register_std_string,
				bc: __embind_register_std_wstring,
				Va: __embind_register_value_object,
				md: __embind_register_value_object_field,
				od: __embind_register_void,
				ee: __emscripten_fs_load_embedded_files,
				ae: __emscripten_get_now_is_monotonic,
				Nd: __emscripten_runtime_keepalive_clear,
				Ed: __emscripten_throw_longjmp,
				Sa: __emval_as,
				Kb: __emval_as_int64,
				cf: __emval_as_uint64,
				aa: __emval_call,
				Ba: __emval_call_method,
				fe: __emval_decref,
				eb: __emval_get_global,
				U: __emval_get_method_caller,
				ef: __emval_get_property,
				ua: __emval_incref,
				df: __emval_instanceof,
				fc: __emval_is_number,
				Ib: __emval_is_string,
				bf: __emval_iter_begin,
				Zc: __emval_iter_next,
				Ca: __emval_new_array,
				af: __emval_new_array_from_memory_view,
				T: __emval_new_cstring,
				ca: __emval_new_object,
				Md: __emval_run_destructors,
				rd: __emval_set_property,
				ba: __emval_take_value,
				Qd: __gmtime_js,
				Rd: __localtime_js,
				Sd: __mktime_js,
				Od: __mmap_js,
				Pd: __munmap_js,
				de: __tzset_js,
				Vc: console_debug,
				Gb: console_error,
				Wc: console_info,
				Yc: console_warn,
				pe: create_audio_buffer,
				re: create_audio_context,
				le: create_video_element,
				pd: currentResizeCallbackListener,
				ff: currentResizeCallbackListenerSampleView,
				ob: _emscripten_date_now,
				Gd: _emscripten_get_heap_max,
				fb: _emscripten_get_now,
				Fd: _emscripten_resize_heap,
				se: _emscripten_set_main_loop,
				ed: _emscripten_webgl_create_context,
				xc: _emscripten_webgl_get_current_context,
				ne: _emscripten_webgl_get_drawing_buffer_size,
				dd: _emscripten_webgl_make_context_current,
				Wd: _environ_get,
				Xd: _environ_sizes_get,
				Qb: _exit,
				pb: _fd_close,
				Vd: _fd_fdstat_get,
				oc: _fd_read,
				Ud: _fd_seek,
				Mb: _fd_write,
				qe: get_audio_data,
				cd: get_canvas_pixel_ratio,
				je: get_request_fetch_api,
				me: get_video_data,
				pc: _getaddrinfo,
				yd: _getentropy,
				za: _glActiveTexture,
				ka: _glAttachShader,
				ya: _glBindBuffer,
				Ic: _glBindFramebuffer,
				De: _glBindRenderbuffer,
				na: _glBindTexture,
				Qe: _glBindVertexArray,
				Ne: _glBlendFuncSeparate,
				Pa: _glBufferData,
				Xb: _glBufferSubData,
				Zb: _glClear,
				Ke: _glClearColor,
				lb: _glColorMask,
				Lc: _glCompileShader,
				Ha: _glCreateProgram,
				Nc: _glCreateShader,
				Gc: _glCullFace,
				ze: _glDeleteBuffers,
				Te: _glDeleteFramebuffers,
				ye: _glDeleteProgram,
				Ae: _glDeleteRenderbuffers,
				ia: _glDeleteShader,
				Be: _glDeleteTextures,
				Pe: _glDepthFunc,
				bb: _glDepthMask,
				ja: _glDetachShader,
				mb: _glDisable,
				X: _glDisableVertexAttribArray,
				ve: _glDrawArrays,
				Oa: _glDrawElements,
				cb: _glEnable,
				Yb: _glEnableVertexAttribArray,
				Ie: _glFramebufferRenderbuffer,
				Je: _glFramebufferTexture2D,
				Ec: _glGenBuffers,
				Me: _glGenFramebuffers,
				Ee: _glGenRenderbuffers,
				tb: _glGenTextures,
				Re: _glGenVertexArrays,
				Ge: _glGenerateMipmap,
				ec: _glGetError,
				Jc: _glGetIntegerv,
				Kc: _glGetShaderiv,
				F: _glGetUniformLocation,
				Ga: _glLinkProgram,
				Fc: _glPixelStorei,
				He: _glReadPixels,
				Ce: _glRenderbufferStorage,
				Mc: _glShaderSource,
				kb: _glStencilFunc,
				Oe: _glStencilMask,
				Xa: _glStencilOp,
				sb: _glTexImage2D,
				Fe: _glTexImage3D,
				ma: _glTexParameteri,
				ta: _glUniform1f,
				La: _glUniform1i,
				xe: _glUniform2f,
				Bc: _glUniform3f,
				Ma: _glUniform3fv,
				la: _glUniform4f,
				Cc: _glUniform4fv,
				P: _glUniformMatrix4fv,
				Le: _glUseProgram,
				we: _glVertexAttribIPointer,
				Dc: _glVertexAttribPointer,
				Hc: _glViewport,
				Se: _glewInit,
				_c: invoke_di,
				Bb: invoke_dii,
				K: invoke_diii,
				wa: invoke_diiii,
				_: invoke_diiiii,
				C: invoke_dij,
				L: invoke_fi,
				Za: invoke_fii,
				$: invoke_fiii,
				J: invoke_fij,
				t: invoke_i,
				he: invoke_id,
				ic: invoke_idiii,
				g: invoke_ii,
				ib: invoke_iid,
				$e: invoke_iif,
				h: invoke_iii,
				rc: invoke_iiiddd,
				Fa: invoke_iiiddi,
				te: invoke_iiiffi,
				j: invoke_iiii,
				jb: invoke_iiiiddd,
				s: invoke_iiiii,
				mc: invoke_iiiiid,
				qc: invoke_iiiiidd,
				Ub: invoke_iiiiifff,
				$b: invoke_iiiiifi,
				v: invoke_iiiiii,
				sc: invoke_iiiiiif,
				A: invoke_iiiiiii,
				S: invoke_iiiiiiii,
				va: invoke_iiiiiiiii,
				ea: invoke_iiiiiiiiiddiiiiiii,
				Ia: invoke_iiiiiiiiii,
				qa: invoke_iiiiiiiiiii,
				qb: invoke_iiiiiiiiiiii,
				gb: invoke_iiiiiiiiiiiii,
				Pb: invoke_iiiiiiiiiiiiii,
				hb: invoke_iiiiiiiiiiiiiii,
				Ue: invoke_iiiiiiijjii,
				Pc: invoke_iiiiiiji,
				vb: invoke_iiiiij,
				_e: invoke_iiiiji,
				vc: invoke_iiiijiiii,
				Ea: invoke_iiij,
				ub: invoke_iiiji,
				uc: invoke_iiijjj,
				m: invoke_iij,
				R: invoke_iiji,
				dc: invoke_iijii,
				yb: invoke_iijiii,
				ie: invoke_iijiji,
				db: invoke_iijj,
				ga: invoke_iijji,
				ue: invoke_iijjii,
				kc: invoke_iijjiii,
				ge: invoke_ij,
				Rb: invoke_iji,
				Qc: invoke_ijjii,
				ud: invoke_ijjiii,
				nc: invoke_j,
				w: invoke_ji,
				i: invoke_jii,
				Fb: invoke_jiii,
				Ab: invoke_jiiii,
				W: invoke_jiij,
				q: invoke_jij,
				H: invoke_jjj,
				f: invoke_v,
				jc: invoke_vdiii,
				Ve: invoke_vf,
				k: invoke_vi,
				bd: invoke_vid,
				oa: invoke_vif,
				_b: invoke_vifffff,
				id: invoke_viffii,
				Tc: invoke_vifiii,
				b: invoke_vii,
				Oc: invoke_viid,
				Y: invoke_viidd,
				Ra: invoke_viif,
				Jb: invoke_viiff,
				Uc: invoke_viifii,
				Ya: invoke_viifiii,
				e: invoke_viii,
				ad: invoke_viiif,
				wb: invoke_viiiff,
				o: invoke_viiii,
				Ac: invoke_viiiif,
				We: invoke_viiiiff,
				p: invoke_viiiii,
				O: invoke_viiiiiddii,
				tc: invoke_viiiiif,
				Xe: invoke_viiiiiff,
				n: invoke_viiiiii,
				E: invoke_viiiiiii,
				Q: invoke_viiiiiiii,
				fa: invoke_viiiiiiiii,
				Z: invoke_viiiiiiiiii,
				$a: invoke_viiiiiiiiiidii,
				Cb: invoke_viiiiiiiiiii,
				ab: invoke_viiiiiiiiiiii,
				zb: invoke_viiiiiiiiiiiiiii,
				Eb: invoke_viiiij,
				Ta: invoke_viiiiji,
				xa: invoke_viiiijj,
				cc: invoke_viiij,
				Vb: invoke_viiiji,
				l: invoke_viij,
				nb: invoke_viiji,
				ac: invoke_viijii,
				Hb: invoke_viijijiii,
				M: invoke_viijj,
				ra: invoke_viijji,
				V: invoke_vij,
				Wa: invoke_viji,
				_a: invoke_vijii,
				Ze: invoke_vijiiiii,
				ha: invoke_vijj,
				td: invoke_vijji,
				Aa: invoke_vijjii,
				Wb: invoke_vijjj,
				Ka: invoke_vijjjjjji,
				vd: invoke_vjjiii,
				z: _llvm_eh_typeid_for,
				sd: mergeBoxLayersObjects,
				zc: play_audio_from,
				Sb: play_video_from,
				yc: playing_audio_time,
				wc: playing_video_time,
				Ld: _proc_exit,
				kd: registerCallbacks,
				hc: registerResizeCallback,
				hf: registerResizeCallbackSampleView,
				gd: registerWindowCallbacks,
				oe: set_audio_playrate,
				ke: set_video_playrate,
				Tb: stop_playing,
				Db: stop_playing_video,
				jd: unregisterCallbacks,
				gc: unregisterResizeCallback,
				gf: unregisterResizeCallbackSampleView,
				fd: unregisterWindowCallbacks
			};
			var wasmExports = createWasm();
			var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports["kf"])();
			var ___getTypeName = a0 => (___getTypeName = wasmExports["lf"])(a0);
			var __embind_initialize_bindings = Module["__embind_initialize_bindings"] = () => (__embind_initialize_bindings = Module["__embind_initialize_bindings"] = wasmExports["mf"])();
			var _malloc = a0 => (_malloc = wasmExports["nf"])(a0);
			var _free = a0 => (_free = wasmExports["of"])(a0);
			var _ntohs = a0 => (_ntohs = wasmExports["qf"])(a0);
			var _htons = a0 => (_htons = wasmExports["rf"])(a0);
			var _htonl = a0 => (_htonl = wasmExports["sf"])(a0);
			var _emscripten_builtin_memalign = (a0, a1) => (_emscripten_builtin_memalign = wasmExports["tf"])(a0, a1);
			var _setThrew = (a0, a1) => (_setThrew = wasmExports["uf"])(a0, a1);
			var __emscripten_tempret_set = a0 => (__emscripten_tempret_set = wasmExports["vf"])(a0);
			var __emscripten_stack_restore = a0 => (__emscripten_stack_restore = wasmExports["wf"])(a0);
			var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports["xf"])();
			var ___cxa_decrement_exception_refcount = a0 => (___cxa_decrement_exception_refcount = wasmExports["yf"])(a0);
			var ___cxa_increment_exception_refcount = a0 => (___cxa_increment_exception_refcount = wasmExports["zf"])(a0);
			var ___cxa_can_catch = (a0, a1, a2) => (___cxa_can_catch = wasmExports["Af"])(a0, a1, a2);
			var ___cxa_is_pointer_type = a0 => (___cxa_is_pointer_type = wasmExports["Bf"])(a0);
			var dynCall_ii = Module["dynCall_ii"] = (a0, a1) => (dynCall_ii = Module["dynCall_ii"] = wasmExports["Cf"])(a0, a1);
			var dynCall_v = Module["dynCall_v"] = a0 => (dynCall_v = Module["dynCall_v"] = wasmExports["Df"])(a0);
			var dynCall_vi = Module["dynCall_vi"] = (a0, a1) => (dynCall_vi = Module["dynCall_vi"] = wasmExports["Ef"])(a0, a1);
			var dynCall_vii = Module["dynCall_vii"] = (a0, a1, a2) => (dynCall_vii = Module["dynCall_vii"] = wasmExports["Ff"])(a0, a1, a2);
			var dynCall_iii = Module["dynCall_iii"] = (a0, a1, a2) => (dynCall_iii = Module["dynCall_iii"] = wasmExports["Gf"])(a0, a1, a2);
			var dynCall_viii = Module["dynCall_viii"] = (a0, a1, a2, a3) => (dynCall_viii = Module["dynCall_viii"] = wasmExports["Hf"])(a0, a1, a2, a3);
			var dynCall_i = Module["dynCall_i"] = a0 => (dynCall_i = Module["dynCall_i"] = wasmExports["If"])(a0);
			var dynCall_iiii = Module["dynCall_iiii"] = (a0, a1, a2, a3) => (dynCall_iiii = Module["dynCall_iiii"] = wasmExports["Jf"])(a0, a1, a2, a3);
			var dynCall_iiiii = Module["dynCall_iiiii"] = (a0, a1, a2, a3, a4) => (dynCall_iiiii = Module["dynCall_iiiii"] = wasmExports["Kf"])(a0, a1, a2, a3, a4);
			var dynCall_viiii = Module["dynCall_viiii"] = (a0, a1, a2, a3, a4) => (dynCall_viiii = Module["dynCall_viiii"] = wasmExports["Lf"])(a0, a1, a2, a3, a4);
			var dynCall_viiiii = Module["dynCall_viiiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiii = Module["dynCall_viiiii"] = wasmExports["Mf"])(a0, a1, a2, a3, a4, a5);
			var dynCall_jii = Module["dynCall_jii"] = (a0, a1, a2) => (dynCall_jii = Module["dynCall_jii"] = wasmExports["Nf"])(a0, a1, a2);
			var dynCall_jjj = Module["dynCall_jjj"] = (a0, a1, a2) => (dynCall_jjj = Module["dynCall_jjj"] = wasmExports["Of"])(a0, a1, a2);
			var dynCall_iiij = Module["dynCall_iiij"] = (a0, a1, a2, a3) => (dynCall_iiij = Module["dynCall_iiij"] = wasmExports["Pf"])(a0, a1, a2, a3);
			var dynCall_viij = Module["dynCall_viij"] = (a0, a1, a2, a3) => (dynCall_viij = Module["dynCall_viij"] = wasmExports["Qf"])(a0, a1, a2, a3);
			var dynCall_viiiiii = Module["dynCall_viiiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiiii = Module["dynCall_viiiiii"] = wasmExports["Rf"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_iiiiii = Module["dynCall_iiiiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiiii = Module["dynCall_iiiiii"] = wasmExports["Sf"])(a0, a1, a2, a3, a4, a5);
			var dynCall_vjjiii = Module["dynCall_vjjiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_vjjiii = Module["dynCall_vjjiii"] = wasmExports["Tf"])(a0, a1, a2, a3, a4, a5);
			var dynCall_ijjiii = Module["dynCall_ijjiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_ijjiii = Module["dynCall_ijjiii"] = wasmExports["Uf"])(a0, a1, a2, a3, a4, a5);
			var dynCall_iijiii = Module["dynCall_iijiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iijiii = Module["dynCall_iijiii"] = wasmExports["Vf"])(a0, a1, a2, a3, a4, a5);
			var dynCall_iijjiii = Module["dynCall_iijjiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iijjiii = Module["dynCall_iijjiii"] = wasmExports["Wf"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_vdiii = Module["dynCall_vdiii"] = (a0, a1, a2, a3, a4) => (dynCall_vdiii = Module["dynCall_vdiii"] = wasmExports["Xf"])(a0, a1, a2, a3, a4);
			var dynCall_idiii = Module["dynCall_idiii"] = (a0, a1, a2, a3, a4) => (dynCall_idiii = Module["dynCall_idiii"] = wasmExports["Yf"])(a0, a1, a2, a3, a4);
			var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = wasmExports["Zf"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_fi = Module["dynCall_fi"] = (a0, a1) => (dynCall_fi = Module["dynCall_fi"] = wasmExports["_f"])(a0, a1);
			var dynCall_ji = Module["dynCall_ji"] = (a0, a1) => (dynCall_ji = Module["dynCall_ji"] = wasmExports["$f"])(a0, a1);
			var dynCall_vij = Module["dynCall_vij"] = (a0, a1, a2) => (dynCall_vij = Module["dynCall_vij"] = wasmExports["ag"])(a0, a1, a2);
			var dynCall_viijii = Module["dynCall_viijii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viijii = Module["dynCall_viijii"] = wasmExports["bg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_diiiii = Module["dynCall_diiiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_diiiii = Module["dynCall_diiiii"] = wasmExports["cg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_viif = Module["dynCall_viif"] = (a0, a1, a2, a3) => (dynCall_viif = Module["dynCall_viif"] = wasmExports["dg"])(a0, a1, a2, a3);
			var dynCall_viiff = Module["dynCall_viiff"] = (a0, a1, a2, a3, a4) => (dynCall_viiff = Module["dynCall_viiff"] = wasmExports["eg"])(a0, a1, a2, a3, a4);
			var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = wasmExports["fg"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var dynCall_diiii = Module["dynCall_diiii"] = (a0, a1, a2, a3, a4) => (dynCall_diiii = Module["dynCall_diiii"] = wasmExports["gg"])(a0, a1, a2, a3, a4);
			var dynCall_jij = Module["dynCall_jij"] = (a0, a1, a2) => (dynCall_jij = Module["dynCall_jij"] = wasmExports["hg"])(a0, a1, a2);
			var dynCall_di = Module["dynCall_di"] = (a0, a1) => (dynCall_di = Module["dynCall_di"] = wasmExports["ig"])(a0, a1);
			var dynCall_vid = Module["dynCall_vid"] = (a0, a1, a2) => (dynCall_vid = Module["dynCall_vid"] = wasmExports["jg"])(a0, a1, a2);
			var dynCall_dii = Module["dynCall_dii"] = (a0, a1, a2) => (dynCall_dii = Module["dynCall_dii"] = wasmExports["kg"])(a0, a1, a2);
			var dynCall_viid = Module["dynCall_viid"] = (a0, a1, a2, a3) => (dynCall_viid = Module["dynCall_viid"] = wasmExports["lg"])(a0, a1, a2, a3);
			var dynCall_vif = Module["dynCall_vif"] = (a0, a1, a2) => (dynCall_vif = Module["dynCall_vif"] = wasmExports["mg"])(a0, a1, a2);
			var dynCall_fii = Module["dynCall_fii"] = (a0, a1, a2) => (dynCall_fii = Module["dynCall_fii"] = wasmExports["ng"])(a0, a1, a2);
			var dynCall_viiif = Module["dynCall_viiif"] = (a0, a1, a2, a3, a4) => (dynCall_viiif = Module["dynCall_viiif"] = wasmExports["og"])(a0, a1, a2, a3, a4);
			var dynCall_viiiff = Module["dynCall_viiiff"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiff = Module["dynCall_viiiff"] = wasmExports["pg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = wasmExports["qg"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => (dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = wasmExports["rg"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
			var dynCall_viiffii = Module["dynCall_viiffii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiffii = Module["dynCall_viiffii"] = wasmExports["sg"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_viffii = Module["dynCall_viffii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viffii = Module["dynCall_viffii"] = wasmExports["tg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_viijj = Module["dynCall_viijj"] = (a0, a1, a2, a3, a4) => (dynCall_viijj = Module["dynCall_viijj"] = wasmExports["ug"])(a0, a1, a2, a3, a4);
			var dynCall_vijii = Module["dynCall_vijii"] = (a0, a1, a2, a3, a4) => (dynCall_vijii = Module["dynCall_vijii"] = wasmExports["vg"])(a0, a1, a2, a3, a4);
			var dynCall_fij = Module["dynCall_fij"] = (a0, a1, a2) => (dynCall_fij = Module["dynCall_fij"] = wasmExports["wg"])(a0, a1, a2);
			var dynCall_viijijiii = Module["dynCall_viijijiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_viijijiii = Module["dynCall_viijijiii"] = wasmExports["xg"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
			var dynCall_viiiif = Module["dynCall_viiiif"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiif = Module["dynCall_viiiif"] = wasmExports["yg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_fiii = Module["dynCall_fiii"] = (a0, a1, a2, a3) => (dynCall_fiii = Module["dynCall_fiii"] = wasmExports["zg"])(a0, a1, a2, a3);
			var dynCall_fiiii = Module["dynCall_fiiii"] = (a0, a1, a2, a3, a4) => (dynCall_fiiii = Module["dynCall_fiiii"] = wasmExports["Ag"])(a0, a1, a2, a3, a4);
			var dynCall_diii = Module["dynCall_diii"] = (a0, a1, a2, a3) => (dynCall_diii = Module["dynCall_diii"] = wasmExports["Bg"])(a0, a1, a2, a3);
			var dynCall_iij = Module["dynCall_iij"] = (a0, a1, a2) => (dynCall_iij = Module["dynCall_iij"] = wasmExports["Cg"])(a0, a1, a2);
			var dynCall_viifii = Module["dynCall_viifii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viifii = Module["dynCall_viifii"] = wasmExports["Dg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_iiif = Module["dynCall_iiif"] = (a0, a1, a2, a3) => (dynCall_iiif = Module["dynCall_iiif"] = wasmExports["Eg"])(a0, a1, a2, a3);
			var dynCall_vifiii = Module["dynCall_vifiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_vifiii = Module["dynCall_vifiii"] = wasmExports["Fg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_iif = Module["dynCall_iif"] = (a0, a1, a2) => (dynCall_iif = Module["dynCall_iif"] = wasmExports["Gg"])(a0, a1, a2);
			var dynCall_viijji = Module["dynCall_viijji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viijji = Module["dynCall_viijji"] = wasmExports["Hg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_vijjii = Module["dynCall_vijjii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_vijjii = Module["dynCall_vijjii"] = wasmExports["Ig"])(a0, a1, a2, a3, a4, a5);
			var dynCall_iiji = Module["dynCall_iiji"] = (a0, a1, a2, a3) => (dynCall_iiji = Module["dynCall_iiji"] = wasmExports["Jg"])(a0, a1, a2, a3);
			var dynCall_iijii = Module["dynCall_iijii"] = (a0, a1, a2, a3, a4) => (dynCall_iijii = Module["dynCall_iijii"] = wasmExports["Kg"])(a0, a1, a2, a3, a4);
			var dynCall_iijji = Module["dynCall_iijji"] = (a0, a1, a2, a3, a4) => (dynCall_iijji = Module["dynCall_iijji"] = wasmExports["Lg"])(a0, a1, a2, a3, a4);
			var dynCall_dij = Module["dynCall_dij"] = (a0, a1, a2) => (dynCall_dij = Module["dynCall_dij"] = wasmExports["Mg"])(a0, a1, a2);
			var dynCall_iijj = Module["dynCall_iijj"] = (a0, a1, a2, a3) => (dynCall_iijj = Module["dynCall_iijj"] = wasmExports["Ng"])(a0, a1, a2, a3);
			var dynCall_iiiiij = Module["dynCall_iiiiij"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiiij = Module["dynCall_iiiiij"] = wasmExports["Og"])(a0, a1, a2, a3, a4, a5);
			var dynCall_jiii = Module["dynCall_jiii"] = (a0, a1, a2, a3) => (dynCall_jiii = Module["dynCall_jiii"] = wasmExports["Pg"])(a0, a1, a2, a3);
			var dynCall_viiij = Module["dynCall_viiij"] = (a0, a1, a2, a3, a4) => (dynCall_viiij = Module["dynCall_viiij"] = wasmExports["Qg"])(a0, a1, a2, a3, a4);
			var dynCall_viiiiji = Module["dynCall_viiiiji"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiiji = Module["dynCall_viiiiji"] = wasmExports["Rg"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = wasmExports["Sg"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
			var dynCall_iiiiji = Module["dynCall_iiiiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiiji = Module["dynCall_iiiiji"] = wasmExports["Tg"])(a0, a1, a2, a3, a4, a5);
			var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = wasmExports["Ug"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
			var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = wasmExports["Vg"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
			var dynCall_vijj = Module["dynCall_vijj"] = (a0, a1, a2, a3) => (dynCall_vijj = Module["dynCall_vijj"] = wasmExports["Wg"])(a0, a1, a2, a3);
			var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => (dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = wasmExports["Xg"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
			var dynCall_vijiiiii = Module["dynCall_vijiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_vijiiiii = Module["dynCall_vijiiiii"] = wasmExports["Yg"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var dynCall_viji = Module["dynCall_viji"] = (a0, a1, a2, a3) => (dynCall_viji = Module["dynCall_viji"] = wasmExports["Zg"])(a0, a1, a2, a3);
			var dynCall_iiiji = Module["dynCall_iiiji"] = (a0, a1, a2, a3, a4) => (dynCall_iiiji = Module["dynCall_iiiji"] = wasmExports["_g"])(a0, a1, a2, a3, a4);
			var dynCall_viiji = Module["dynCall_viiji"] = (a0, a1, a2, a3, a4) => (dynCall_viiji = Module["dynCall_viiji"] = wasmExports["$g"])(a0, a1, a2, a3, a4);
			var dynCall_viiiiiff = Module["dynCall_viiiiiff"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiiiff = Module["dynCall_viiiiiff"] = wasmExports["ah"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var dynCall_viiiiff = Module["dynCall_viiiiff"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiiff = Module["dynCall_viiiiff"] = wasmExports["bh"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_iiiiifi = Module["dynCall_iiiiifi"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiifi = Module["dynCall_iiiiifi"] = wasmExports["ch"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_vf = Module["dynCall_vf"] = (a0, a1) => (dynCall_vf = Module["dynCall_vf"] = wasmExports["dh"])(a0, a1);
			var dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = wasmExports["eh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
			var dynCall_iiiiiiijjii = Module["dynCall_iiiiiiijjii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => (dynCall_iiiiiiijjii = Module["dynCall_iiiiiiijjii"] = wasmExports["fh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
			var dynCall_ijjii = Module["dynCall_ijjii"] = (a0, a1, a2, a3, a4) => (dynCall_ijjii = Module["dynCall_ijjii"] = wasmExports["gh"])(a0, a1, a2, a3, a4);
			var dynCall_viiiij = Module["dynCall_viiiij"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiij = Module["dynCall_viiiij"] = wasmExports["hh"])(a0, a1, a2, a3, a4, a5);
			var dynCall_vifffff = Module["dynCall_vifffff"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_vifffff = Module["dynCall_vifffff"] = wasmExports["ih"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_viddd = Module["dynCall_viddd"] = (a0, a1, a2, a3, a4) => (dynCall_viddd = Module["dynCall_viddd"] = wasmExports["jh"])(a0, a1, a2, a3, a4);
			var dynCall_didi = Module["dynCall_didi"] = (a0, a1, a2, a3) => (dynCall_didi = Module["dynCall_didi"] = wasmExports["kh"])(a0, a1, a2, a3);
			var dynCall_did = Module["dynCall_did"] = (a0, a1, a2) => (dynCall_did = Module["dynCall_did"] = wasmExports["lh"])(a0, a1, a2);
			var dynCall_viifiii = Module["dynCall_viifiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viifiii = Module["dynCall_viifiii"] = wasmExports["mh"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_vidddddd = Module["dynCall_vidddddd"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_vidddddd = Module["dynCall_vidddddd"] = wasmExports["nh"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var dynCall_vidd = Module["dynCall_vidd"] = (a0, a1, a2, a3) => (dynCall_vidd = Module["dynCall_vidd"] = wasmExports["oh"])(a0, a1, a2, a3);
			var dynCall_viddi = Module["dynCall_viddi"] = (a0, a1, a2, a3, a4) => (dynCall_viddi = Module["dynCall_viddi"] = wasmExports["ph"])(a0, a1, a2, a3, a4);
			var dynCall_iiiiiiji = Module["dynCall_iiiiiiji"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iiiiiiji = Module["dynCall_iiiiiiji"] = wasmExports["qh"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var dynCall_vidii = Module["dynCall_vidii"] = (a0, a1, a2, a3, a4) => (dynCall_vidii = Module["dynCall_vidii"] = wasmExports["rh"])(a0, a1, a2, a3, a4);
			var dynCall_viddddddi = Module["dynCall_viddddddi"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_viddddddi = Module["dynCall_viddddddi"] = wasmExports["sh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
			var dynCall_viddddi = Module["dynCall_viddddi"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viddddi = Module["dynCall_viddddi"] = wasmExports["th"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_vidddiiddi = Module["dynCall_vidddiiddi"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_vidddiiddi = Module["dynCall_vidddiiddi"] = wasmExports["uh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
			var dynCall_iifi = Module["dynCall_iifi"] = (a0, a1, a2, a3) => (dynCall_iifi = Module["dynCall_iifi"] = wasmExports["vh"])(a0, a1, a2, a3);
			var dynCall_vijjj = Module["dynCall_vijjj"] = (a0, a1, a2, a3, a4) => (dynCall_vijjj = Module["dynCall_vijjj"] = wasmExports["wh"])(a0, a1, a2, a3, a4);
			var dynCall_iijjii = Module["dynCall_iijjii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iijjii = Module["dynCall_iijjii"] = wasmExports["xh"])(a0, a1, a2, a3, a4, a5);
			var dynCall_viiiji = Module["dynCall_viiiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiji = Module["dynCall_viiiji"] = wasmExports["yh"])(a0, a1, a2, a3, a4, a5);
			var dynCall_jiij = Module["dynCall_jiij"] = (a0, a1, a2, a3) => (dynCall_jiij = Module["dynCall_jiij"] = wasmExports["zh"])(a0, a1, a2, a3);
			var dynCall_iiiddi = Module["dynCall_iiiddi"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiddi = Module["dynCall_iiiddi"] = wasmExports["Ah"])(a0, a1, a2, a3, a4, a5);
			var dynCall_iiiffi = Module["dynCall_iiiffi"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiffi = Module["dynCall_iiiffi"] = wasmExports["Bh"])(a0, a1, a2, a3, a4, a5);
			var dynCall_vijjjjjji = Module["dynCall_vijjjjjji"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_vijjjjjji = Module["dynCall_vijjjjjji"] = wasmExports["Ch"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
			var dynCall_viiiijj = Module["dynCall_viiiijj"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiijj = Module["dynCall_viiiijj"] = wasmExports["Dh"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_fiifi = Module["dynCall_fiifi"] = (a0, a1, a2, a3, a4) => (dynCall_fiifi = Module["dynCall_fiifi"] = wasmExports["Eh"])(a0, a1, a2, a3, a4);
			var dynCall_iiiiifff = Module["dynCall_iiiiifff"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iiiiifff = Module["dynCall_iiiiifff"] = wasmExports["Fh"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var dynCall_viiiiiid = Module["dynCall_viiiiiid"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiiiid = Module["dynCall_viiiiiid"] = wasmExports["Gh"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => (dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = wasmExports["Hh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
			var dynCall_viiiiiiidiiii = Module["dynCall_viiiiiiidiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => (dynCall_viiiiiiidiiii = Module["dynCall_viiiiiiidiiii"] = wasmExports["Ih"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
			var dynCall_viiiiiiiiiidii = Module["dynCall_viiiiiiiiiidii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => (dynCall_viiiiiiiiiidii = Module["dynCall_viiiiiiiiiidii"] = wasmExports["Jh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
			var dynCall_iji = Module["dynCall_iji"] = (a0, a1, a2) => (dynCall_iji = Module["dynCall_iji"] = wasmExports["Kh"])(a0, a1, a2);
			var dynCall_jiji = Module["dynCall_jiji"] = (a0, a1, a2, a3) => (dynCall_jiji = Module["dynCall_jiji"] = wasmExports["Lh"])(a0, a1, a2, a3);
			var dynCall_iiiijiiii = Module["dynCall_iiiijiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_iiiijiiii = Module["dynCall_iiiijiiii"] = wasmExports["Mh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
			var dynCall_iiijjj = Module["dynCall_iiijjj"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiijjj = Module["dynCall_iiijjj"] = wasmExports["Nh"])(a0, a1, a2, a3, a4, a5);
			var dynCall_iiiijji = Module["dynCall_iiiijji"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiijji = Module["dynCall_iiiijji"] = wasmExports["Oh"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_vijji = Module["dynCall_vijji"] = (a0, a1, a2, a3, a4) => (dynCall_vijji = Module["dynCall_vijji"] = wasmExports["Ph"])(a0, a1, a2, a3, a4);
			var dynCall_iijiji = Module["dynCall_iijiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iijiji = Module["dynCall_iijiji"] = wasmExports["Qh"])(a0, a1, a2, a3, a4, a5);
			var dynCall_viiiiif = Module["dynCall_viiiiif"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiiif = Module["dynCall_viiiiif"] = wasmExports["Rh"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_iiiiiif = Module["dynCall_iiiiiif"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiiif = Module["dynCall_iiiiiif"] = wasmExports["Sh"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_jji = Module["dynCall_jji"] = (a0, a1, a2) => (dynCall_jji = Module["dynCall_jji"] = wasmExports["Th"])(a0, a1, a2);
			var dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => (dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = wasmExports["Uh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
			var dynCall_id = Module["dynCall_id"] = (a0, a1) => (dynCall_id = Module["dynCall_id"] = wasmExports["Vh"])(a0, a1);
			var dynCall_ij = Module["dynCall_ij"] = (a0, a1) => (dynCall_ij = Module["dynCall_ij"] = wasmExports["Wh"])(a0, a1);
			var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => (dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = wasmExports["Xh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
			var dynCall_iiiiiiiiiiiiiiiiiiiddiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiiiiddiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29) => (dynCall_iiiiiiiiiiiiiiiiiiiddiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiiiiddiiiiiiiii"] = wasmExports["Yh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29);
			var dynCall_iiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => (dynCall_iiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiii"] = wasmExports["Zh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
			var dynCall_iiiddd = Module["dynCall_iiiddd"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiddd = Module["dynCall_iiiddd"] = wasmExports["_h"])(a0, a1, a2, a3, a4, a5);
			var dynCall_iiddd = Module["dynCall_iiddd"] = (a0, a1, a2, a3, a4) => (dynCall_iiddd = Module["dynCall_iiddd"] = wasmExports["$h"])(a0, a1, a2, a3, a4);
			var dynCall_iiiiddd = Module["dynCall_iiiiddd"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiddd = Module["dynCall_iiiiddd"] = wasmExports["ai"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_iidii = Module["dynCall_iidii"] = (a0, a1, a2, a3, a4) => (dynCall_iidii = Module["dynCall_iidii"] = wasmExports["bi"])(a0, a1, a2, a3, a4);
			var dynCall_iid = Module["dynCall_iid"] = (a0, a1, a2) => (dynCall_iid = Module["dynCall_iid"] = wasmExports["ci"])(a0, a1, a2);
			var dynCall_iiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) => (dynCall_iiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiii"] = wasmExports["di"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
			var dynCall_iiiiidd = Module["dynCall_iiiiidd"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiidd = Module["dynCall_iiiiidd"] = wasmExports["ei"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_viidd = Module["dynCall_viidd"] = (a0, a1, a2, a3, a4) => (dynCall_viidd = Module["dynCall_viidd"] = wasmExports["fi"])(a0, a1, a2, a3, a4);
			var dynCall_iiiiiiiiiddiiiiiii = Module["dynCall_iiiiiiiiiddiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) => (dynCall_iiiiiiiiiddiiiiiii = Module["dynCall_iiiiiiiiiddiiiiiii"] = wasmExports["gi"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
			var dynCall_viiiiiddii = Module["dynCall_viiiiiddii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_viiiiiddii = Module["dynCall_viiiiiddii"] = wasmExports["hi"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
			var dynCall_iiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => (dynCall_iiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiii"] = wasmExports["ii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
			var dynCall_viifi = Module["dynCall_viifi"] = (a0, a1, a2, a3, a4) => (dynCall_viifi = Module["dynCall_viifi"] = wasmExports["ji"])(a0, a1, a2, a3, a4);
			var dynCall_viidi = Module["dynCall_viidi"] = (a0, a1, a2, a3, a4) => (dynCall_viidi = Module["dynCall_viidi"] = wasmExports["ki"])(a0, a1, a2, a3, a4);
			var dynCall_viidiii = Module["dynCall_viidiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viidiii = Module["dynCall_viidiii"] = wasmExports["li"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_if = Module["dynCall_if"] = (a0, a1) => (dynCall_if = Module["dynCall_if"] = wasmExports["mi"])(a0, a1);
			var dynCall_iiijj = Module["dynCall_iiijj"] = (a0, a1, a2, a3, a4) => (dynCall_iiijj = Module["dynCall_iiijj"] = wasmExports["ni"])(a0, a1, a2, a3, a4);
			var dynCall_vjii = Module["dynCall_vjii"] = (a0, a1, a2, a3) => (dynCall_vjii = Module["dynCall_vjii"] = wasmExports["oi"])(a0, a1, a2, a3);
			var dynCall_vji = Module["dynCall_vji"] = (a0, a1, a2) => (dynCall_vji = Module["dynCall_vji"] = wasmExports["pi"])(a0, a1, a2);
			var dynCall_iiid = Module["dynCall_iiid"] = (a0, a1, a2, a3) => (dynCall_iiid = Module["dynCall_iiid"] = wasmExports["qi"])(a0, a1, a2, a3);
			var dynCall_jiiii = Module["dynCall_jiiii"] = (a0, a1, a2, a3, a4) => (dynCall_jiiii = Module["dynCall_jiiii"] = wasmExports["ri"])(a0, a1, a2, a3, a4);
			var dynCall_iidiiii = Module["dynCall_iidiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iidiiii = Module["dynCall_iidiiii"] = wasmExports["si"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_j = Module["dynCall_j"] = a0 => (dynCall_j = Module["dynCall_j"] = wasmExports["ti"])(a0);
			var dynCall_iiiiid = Module["dynCall_iiiiid"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiiid = Module["dynCall_iiiiid"] = wasmExports["ui"])(a0, a1, a2, a3, a4, a5);
			var dynCall_viiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) => (dynCall_viiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiii"] = wasmExports["vi"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
			var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = wasmExports["wi"])(a0, a1, a2, a3, a4, a5, a6);
			var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = wasmExports["xi"])(a0, a1, a2, a3, a4, a5, a6, a7);
			var _asyncify_start_unwind = a0 => (_asyncify_start_unwind = wasmExports["yi"])(a0);
			var _asyncify_stop_unwind = () => (_asyncify_stop_unwind = wasmExports["zi"])();
			var _asyncify_start_rewind = a0 => (_asyncify_start_rewind = wasmExports["Ai"])(a0);
			var _asyncify_stop_rewind = () => (_asyncify_stop_rewind = wasmExports["Bi"])();
			var ___emscripten_embedded_file_data = Module["___emscripten_embedded_file_data"] = 3171904;

			function invoke_vii(index, a1, a2) {
				var sp = stackSave();
				try {
					dynCall_vii(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iii(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_iii(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vi(index, a1) {
				var sp = stackSave();
				try {
					dynCall_vi(index, a1)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_ii(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_ii(index, a1)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_v(index) {
				var sp = stackSave();
				try {
					dynCall_v(index)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					dynCall_viii(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_iiii(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_iiiii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viiii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_i(index) {
				var sp = stackSave();
				try {
					return dynCall_i(index)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viiiii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_jii(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_jii(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0);
					return 0n
				}
			}

			function invoke_ji(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_ji(index, a1)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0);
					return 0n
				}
			}

			function invoke_jjj(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_jjj(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0);
					return 0n
				}
			}

			function invoke_iiij(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_iiij(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viij(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					dynCall_viij(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viiiiii(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiiii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iijiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iijiii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iijjiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iijjiii(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vjjiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_vjjiii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_ijjiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_ijjiii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vdiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_vdiii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_idiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_idiii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_fi(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_fi(index, a1)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiii(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viji(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					dynCall_viji(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vijji(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_vijji(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vij(index, a1, a2) {
				var sp = stackSave();
				try {
					dynCall_vij(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_diiiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_diiiii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viif(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					dynCall_viif(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiff(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viiff(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_diiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_diiii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_jij(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_jij(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0);
					return 0n
				}
			}

			function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viffii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viffii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiji(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_iiji(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viijj(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viijj(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vif(index, a1, a2) {
				var sp = stackSave();
				try {
					dynCall_vif(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vid(index, a1, a2) {
				var sp = stackSave();
				try {
					dynCall_vid(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_fij(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_fij(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vijii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_vijii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viijijiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viijijiii(index, a1, a2, a3, a4, a5, a6, a7, a8)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiif(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viiif(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_fiii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_fiii(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_diii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_diii(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_di(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_di(index, a1)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iij(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_iij(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiff(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viiiff(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viifii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viifii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vifiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_vifiii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iif(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_iif(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_fii(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_fii(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viijji(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viijji(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iijii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_iijii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vijjii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_vijjii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iijji(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_iijji(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_dij(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_dij(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiij(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viiij(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iijj(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_iijj(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiij(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiiij(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_jiii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_jiii(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0);
					return 0n
				}
			}

			function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiji(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viiiiji(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiji(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiiji(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vijj(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					dynCall_vijj(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vijiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_vijiiiii(index, a1, a2, a3, a4, a5, a6, a7)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viijii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viijii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiji(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_iiiji(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiji(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viiji(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiiff(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viiiiiff(index, a1, a2, a3, a4, a5, a6, a7)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiff(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viiiiff(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiifi(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiiiifi(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vf(index, a1) {
				var sp = stackSave();
				try {
					dynCall_vf(index, a1)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_ijjii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_ijjii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiij(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viiiij(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vifffff(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_vifffff(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viifiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viifiii(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viid(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					dynCall_viid(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vijjj(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_vijjj(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iijjii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iijjii(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiji(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viiiji(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_jiij(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_jiij(index, a1, a2, a3)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0);
					return 0n
				}
			}

			function invoke_iiiddi(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiddi(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiffi(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiffi(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_vijjjjjji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_vijjjjjji(index, a1, a2, a3, a4, a5, a6, a7, a8)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiijj(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viiiijj(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiif(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viiiif(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					dynCall_viiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiiiiiiidii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
				var sp = stackSave();
				try {
					dynCall_viiiiiiiiiidii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiifff(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiiiifff(index, a1, a2, a3, a4, a5, a6, a7)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiijjj(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiijjj(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iijiji(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iijiji(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiif(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viiiiif(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiif(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiif(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_id(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_id(index, a1)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_ij(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_ij(index, a1)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iji(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_iji(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					dynCall_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiddd(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiddd(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiddd(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiiiddd(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iid(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_iid(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiidd(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiiiidd(index, a1, a2, a3, a4, a5, a6)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viidd(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viidd(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiiiiddiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiiddiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_viiiiiddii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viiiiiddii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_iiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_dii(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_dii(index, a1, a2)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_j(index) {
				var sp = stackSave();
				try {
					return dynCall_j(index)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0);
					return 0n
				}
			}

			function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiiid(index, a1, a2, a3, a4, a5)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function invoke_jiiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_jiiii(index, a1, a2, a3, a4)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0);
					return 0n
				}
			}

			function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
				var sp = stackSave();
				try {
					dynCall_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15)
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0) throw e;
					_setThrew(1, 0)
				}
			}

			function applySignatureConversions(wasmExports) {
				wasmExports = Object.assign({}, wasmExports);
				var makeWrapper_pp = f => a0 => f(a0) >>> 0;
				var makeWrapper_ppp = f => (a0, a1) => f(a0, a1) >>> 0;
				var makeWrapper_p = f => () => f() >>> 0;
				wasmExports["lf"] = makeWrapper_pp(wasmExports["lf"]);
				wasmExports["nf"] = makeWrapper_pp(wasmExports["nf"]);
				wasmExports["tf"] = makeWrapper_ppp(wasmExports["tf"]);
				wasmExports["_emscripten_stack_alloc"] = makeWrapper_pp(wasmExports["_emscripten_stack_alloc"]);
				wasmExports["xf"] = makeWrapper_p(wasmExports["xf"]);
				return wasmExports
			}
			Module["addRunDependency"] = addRunDependency;
			Module["removeRunDependency"] = removeRunDependency;
			Module["FS_createPreloadedFile"] = FS_createPreloadedFile;
			Module["FS_unlink"] = FS_unlink;
			Module["FS_createPath"] = FS_createPath;
			Module["FS_createDevice"] = FS_createDevice;
			Module["FS_createDataFile"] = FS_createDataFile;
			Module["FS_createLazyFile"] = FS_createLazyFile;
			Module["GL"] = GL;
			var calledRun;
			dependenciesFulfilled = function runCaller() {
				if (!calledRun) run();
				if (!calledRun) dependenciesFulfilled = runCaller
			};

			function run() {
				if (runDependencies > 0) {
					return
				}
				preRun();
				if (runDependencies > 0) {
					return
				}

				function doRun() {
					if (calledRun) return;
					calledRun = true;
					Module["calledRun"] = true;
					if (ABORT) return;
					initRuntime();
					readyPromiseResolve(Module);
					Module["onRuntimeInitialized"]?.();
					postRun()
				}
				if (Module["setStatus"]) {
					Module["setStatus"]("Running...");
					setTimeout(function() {
						setTimeout(function() {
							Module["setStatus"]("")
						}, 1);
						doRun()
					}, 1)
				} else {
					doRun()
				}
			}
			if (Module["preInit"]) {
				if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
				while (Module["preInit"].length > 0) {
					Module["preInit"].pop()()
				}
			}
			run();
			moduleRtn = readyPromise;


			return moduleRtn;
		}
	);
})();
export default VisualizerCore;