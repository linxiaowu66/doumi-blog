import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogContainer from './components/blogContainer';
import CodeBlock from './components/codeBlock';

interface Prop {***REMOVED***
interface State {
    response: string
***REMOVED***

const content = "**该文章当前使用的nodejs版本是v13.1.0(网上那些分析nodejs源码的文章不写清基于的版本都是耍流氓)，非常干货的一篇文章，请耐心阅读，否则建议收藏**\n\n阅读本篇文章之前请先阅读前置文章：\n\n* [[译文]V8学习的高级进阶](https://blog.5udou.cn/blog/Yi-Wen-V8Xue-Xi-De-Gao-Ji-Jin-Jie-92)\n* [nodejs深入学习系列之v8基础篇](https://blog.5udou.cn/blog/nodejsShen-Ru-Xue-Xi-Xi-Lie-Zhi-v8Ji-Chu-Pian-2)\n* [如何正确地使用v8嵌入到我们的C++应用中](https://blog.5udou.cn/blog/Ru-He-Zheng-Que-Di-Shi-Yong-v8Qian-Ru-Dao-Wo-Men-De-CYing-Yong-Zhong-19)\n* [nodejs深入学习系列之libuv基础篇(一)](https://blog.5udou.cn/blog/-nodejsShen-Ru-Xue-Xi-Xi-Lie-Zhi-libuvJi-Chu-Pian-Yi-96)\n* [nodejs深入学习系列之libuv基础篇(二)](https://blog.5udou.cn/blog/nodejsShen-Ru-Xue-Xi-Xi-Lie-Zhi-libuvJi-Chu-Pian-Er-87)\n\n读完本篇文章你会掌握：\n\n* nodejs启动过程\n* nodejs模块的分类以及各自的加载过程和原理\n* nodejs中的js代码调用C++函数的原理\n* 额外的面试题~~\n\n## 1、Nodejs依赖些啥？\n首先，nodejs提供那么多模块，以及能在各个平台上跑的飞起，不是因为js很牛逼，而是因为底层依赖了一些你不知道的技术。最大的两个依赖便是v8和libuv。为什么这么说呢？因为一个帮助你将js代码转变成可以在各个平台和机器上运行的机器码，另外一个帮助你调用平台和机器上各种系统特性，包括操作文件、监听socket等等。先撇开这两个最大的依赖，我们看一下nodejs源码中的`deps`目录都有些啥？\n\n![](https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/nodejs1.png)\n\n上图便是Nodejs依赖的包，在官网我们可以找到里面一些依赖包的介绍：[Dependencies](https://nodejs.org/en/docs/meta/topics/dependencies/)\n\n1. [http_parser](https://github.com/joyent/http-parser/): 顾名思义，是一个HTTP解析器，是一款由C语言写的轻量级解析器。因为该解析器设计成不进行任何系统调用或分配，因此每个请求占用的内存非常小。\n2. [c-ares](http://c-ares.haxx.se/docs.html): 对于一些异步DNS解析，nodejs使用了该C库。在js层面上暴露出去的便是DNS模块中的`resolve()`族函数。\n3. [OpenSSL](https://www.openssl.org/docs/): OpenSSL在tls和密码模块中都得到了广泛的应用。它提供了经过严密测试的许多加密功能的实现，现代web依赖这些功能来实现安全性。\n4. [zlib](http://www.zlib.net/manual.html): 为了实现快速得压缩和解压缩，Node.js依赖于工业标准的zlib库，也因其在gzip和libpng中的使用而闻名。Nodejs用zlib来创建同步的、或异步或流式的压缩和解压缩接口。\n5. [npm](https://docs.npmjs.com/): 这个就不赘述了\n\n其他几个没在官网提到的这里也说一下：\n\n6. [acorn](https://github.com/acornjs/acorn): 一款体积小但效率高的javascript解析器\n7. [acorn-plugins](https://github.com/acornjs): acorn使用的一些插件，从名称上来看，该版本的Nodejs支持bigInt特性、支持private类和方法特性等等\n8. [brotli](https://github.com/google/brotli/tree/master/c): 提供C语言版本的Brotli压缩算法实现。\n9. [histogram](https://github.com/HdrHistogram/HdrHistogram_c): C语言版本实现高动态范围的柱状图，看了遍介绍，不知道为啥nodejs需要引用这个？\n10. [icu](http://site.icu-project.org/): ICU(International Components for Unicode)是一套成熟并广泛使用的C/C++和Java库集合，为软件应用提供Unicode和Globalization的支持\n11. [llhttp](https://github.com/nodejs/llhttp): 更加高性能可维护性更好的http解析器。\n12. [nghttp2](https://nghttp2.org/): HTTP/2协议的C语言实现，头部压缩算法使用了[HPACK](https://tools.ietf.org/html/rfc7541)\n13. [node-inspect](https://github.com/nodejs/node-inspect): 该库尝试在新的V8版本下提供`node debug`命令。\n14. [uv](https://github.com/libuv/libuv): Nodejs的一大精髓之一，提供Nodejs访问操作系统各种特性的能力，包括文件系统、Socket等\n15. [v8](https://github.com/v8/v8/): 将Js代码编译为底层机器码，这里就不再赘述\n\n\n## 2、有了uv和v8，那nodejs自己做些啥？\n因为是要面向Javascript开发人员，所以我们不可能直接上来就写C++/C代码，那么肯定需要一个东西去封装这些C++/C代码，并提供一套优雅的接口给开发者，于是Nodejs就是干这事的。一言以蔽之：\n\n Nodejs封装了所有与底层交流的信息，给开发者提供一致的接口定义。在不断升级v8和libuv的同时，依然能够做到接口的一致性，这个就是nodejs想要实现的目标。\n\n那么问题来了，nodejs到底是怎么将libuv和v8封装起来并提供接口的？搞懂这一切之前，我们先看看Nodejs的目录结构，这个目录结构在后面的讲解中有用到：\n\nnodejs源码有两个重要的目录：\n\n1. `lib`: 包含了所有nodejs函数和模块的javascript实现，这些实现都是可以直接在你js项目中引用进去的\n\n2. `src`: 包含了所有函数的C++版本实现，这里的代码才会真正引用Libuv和V8。\n\n然后我们随便查看一个lib目录下的文件可以看到，除了正常的js语法之外，出现了一个在平时应用程序没有见到的方法：`internalBinding`。这个是啥？有啥作用？\n\n我们的探索之旅便是从这个方法开始，一步步深入到nodejs内部，一步步带大家揭开nodejs的神秘面纱。首先我们要从nodejs的编译过程说起。\n\n再讲编译过程之前，我们还得普及一下Nodejs源码内部的模块分类和C++加载绑定器两个概念。\n\n### 2.1、Nodejs模块分类\nnodejs模块可以分为下面三类：\n\n* 核心模块(native模块)：包含在 Node.js 源码中，被编译进 Node.js 可执行二进制文件 JavaScript 模块，其实也就是lib和deps目录下的js文件，比如常用的`http`,`fs`等等\n* 内建模块(built-in模块)：一般我们不直接调用，而是在 native 模块中调用，然后我们再require\n* 第三方模块：非 Node.js 源码自带的模块都可以统称第三方模块，比如 express，webpack 等等。\n * JavaScript 模块，这是最常见的，我们开发的时候一般都写的是 JavaScript 模块\n * JSON 模块，这个很简单，就是一个 JSON 文件\n * C/C++ 扩展模块，使用 C/C++ 编写，编译之后后缀名为 .node\n\n比如`lib`目录下的`fs.js`就是native模块，而`fs.js`调用的`src`目录下的`node_fs.cc`就是内建模块。知道了模块的分类，那么好奇这些模块是怎么加载进来的呢？(本文非讲解模块加载的，所以第三方模块不在讨论范围内)\n\n### 2.2、C++加载绑定器分类\n后面会有文字涉及到这几个概念：\n\n* process.binding(): 以前C++绑定加载器，因为是挂载在全局进程对象上的一个对象，所以可以从用户空间上访问到。这些C++绑定使用这个宏：`NODE_BUILTIN_MODULE_CONTEXT_AWARE()`来创建，并且它们的nm_flags都设置为`NM_F_BUILTIN`\n* process._linkedBinding()： 用于开发者想在自己应用添加额外的C++绑定，使用`NODE_MODULE_CONTEXT_AWARE_CPP()`宏来创建，其flag设置为`NM_F_LINKED`\n* internalBinding：私有的内部C++绑定加载器，用户空间上访问不到，因为只有在NativeModule.require()下可用。使用`NODE_MODULE_CONTEXT_AWARE_INTERNAL()`宏来创建，其flag设置为`NM_F_INTERNAL`\n\n## 3、nodejs的编译过程\n根据[官网的推荐](https://github.com/nodejs/node/blob/master/BUILDING.md)，源码编译简单粗暴：\n\n```\n$ ./configure\n$ make -j4\n```\n\n我们可以从nodejs编译配置文件中提取出一些重要信息。\n\n众所周知，Nodejs使用了GYP的编译方式，其GYP编译文件是：`node.gyp`，我们从该文件的两处地方获取到两个重要的信息。\n\n### 3.1、node.gyp\n\n#### 3.1.1、可执行应用程序的入口文件\n\n从该文件的`target`字段可以看到，编译之后会生成多个target，但是最重要的是第一个`target`，其配置：\n\n```\n{\n // 定义的'node_core_target_name%'就是'node',\n 'target_name': '<(node_core_target_name)',\n 'type': 'executable', // 这里的类型是可执行文件\n\n 'defines': [\n 'NODE_WANT_INTERNALS=1',\n ],\n\n 'includes': [\n 'node.gypi'\n ],\n\n 'include_dirs': [\n 'src',\n 'deps/v8/include'\n ],\n\n 'sources': [\n 'src/node_main.cc'\n ],\n ... ...\n***REMOVED***\n```\n\n由此可知，整个node应用程序的入口文件其实就是`node_main.cc`。\n\n#### 3.1.2、Nodejs源码中所有的js文件编译方式\n编译文件的第二个target是`libnode`，它是将其余剩余的C++文件编译成库文件，但是有一个特殊的地方就是该target在编译之前有个action：\n\n```\n{\n // 这里定义的'node_lib_target_name'就是libnode\n 'target_name': '<(node_lib_target_name)',\n 'type': '<(node_intermediate_lib_type)',\n 'includes': [\n 'node.gypi',\n ],\n\n 'include_dirs': [\n 'src',\n '<(SHARED_INTERMEDIATE_DIR)' # for node_natives.h\n ],\n ... ...\n 'actions': [\n {\n 'action_name': 'node_js2c',\n 'process_outputs_as_sources': 1,\n 'inputs': [\n # Put the code first so it's a dependency and can be used for invocation.\n 'tools/js2c.py',\n '<@(library_files)',\n 'config.gypi',\n 'tools/js2c_macros/check_macros.py'\n ],\n 'outputs': [\n '<(SHARED_INTERMEDIATE_DIR)/node_javascript.cc',\n ],\n 'conditions': [\n [ 'node_use_dtrace==\"false\" and node_use_etw==\"false\"', {\n 'inputs': [ 'tools/js2c_macros/notrace_macros.py' ]\n ***REMOVED***],\n [ 'node_debug_lib==\"false\"', {\n 'inputs': [ 'tools/js2c_macros/nodcheck_macros.py' ]\n ***REMOVED***],\n [ 'node_debug_lib==\"true\"', {\n 'inputs': [ 'tools/js2c_macros/dcheck_macros.py' ]\n ***REMOVED***]\n ],\n 'action': [\n 'python', '<@(_inputs)',\n '--target', '<@(_outputs)',\n ],\n ***REMOVED***,\n ],\n```\n\n从这个配置信息来看是说有个`js2c.py`的python文件会将`lib/**/*.js`和`deps/**/*.js`的所有js文件按照其ASCII码转化为一个个数组放到`node_javascript.cc`文件中。\n\n生成的`node_javascript.cc`文件内容大致如下：\n\n```\nnamespace node {\n\nnamespace native_module {\n ...\n\n static const uint8_t fs_raw[] = {...***REMOVED***\n\n ...\n\n void NativeModuleLoader::LoadJavaScriptSource() {\n ...\n source_.emplace(\"fs\", UnionBytes{fs_raw, 50659***REMOVED***\n ...\n ***REMOVED***\n UnionBytes NativeModuleLoader::GetConfig() {\n return UnionBytes(config_raw, 3017); // config.gypi\n ***REMOVED***\n***REMOVED***\n```\n\n这种做法直接就将js文件全都缓存到内存，避免了多余的I/O操作，提高了效率。\n\n因此从上述配置信息我们可以总结出这样一张编译过程：\n\n![](https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/nodejs3.png?x-oss-process=style/addWaterMarkBottom)\n\n好了，清楚了编译流程之后，我们再从nodejs的启动过程来分析`internalBinding`到底是何方神圣。\n\n## 4、nodejs的启动过程\n上一小节我们知道nodejs应用程序的入口文件是`node_main.cc`，于是我们从这个文件开始追踪代码，得到以下一个流程图：\n\n![](https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/nodejs2.png?x-oss-process=style/addWaterMarkBottom)\n\n**其中标注红色的是需要关注的重点，里面有些知识和之前的那些文章可以联系起来，如果你阅读过[耗时两个月，网上最全的原创nodejs深入系列文章(长达十来万字的文章，欢迎收藏)](https://blog.5udou.cn/blog/Hao-Shi-Liang-Ge-Yue-Wang-Shang-Zui-Quan-De-Yuan-Chuang-nodejsShen-Ru-Xi-Lie-Wen-Zhang-Chang-Da-Shi-Lai-Wan-Zi-De-Wen-Zhang-Huan-Ying-Shou-Cang-54)中列举的一些基础文章，看到这里，相信有种恍然大悟的感觉，感觉知识点一下子都可以联系起来了，这就是系统学习的魅力~**\n\n回到上图，所有的线索都聚焦到了这个函数中：`NativeModuleLoader::LookupAndCompile`。在调用这个函数之前，还有一个重点就是：**此时NativeModuleLoader是实例化的，所以其构造函数是被执行掉的，而其构造函数执行的只有一个函数：LoadJavaScriptSource()，该函数就是上一小节我们看到node_javascript.cc文件中的函数**，于是我们有以下结论：\n\n* `internal/bootstrap/loader.js`是我们执行的第一个js文件\n\n那么`NativeModuleLoader::LookupAndCompile`都做了些什么呢？\n\n### 4.1、`NativeModuleLoader::LookupAndCompile`\n\n它利用我们传入的文件id(这次传递的是`internal/bootstrap/loader.js`)在`_source`变量中查找，找到之后将整个文件内容包裹起来成为一个新的函数，并追加进一些函数的定义(这次传递的是`getLinkedBinding`和`getInternalBinding`)以便在js文件中可以调用这些C++函数，然后执行该新函数。这个参数的传递是在上图中的`Environment::BootstrapInternalLoaders`函数中：\n\n```c\nMaybeLocal<Value> Environment::BootstrapInternalLoaders() {\n EscapableHandleScope scope(isolate_);\n\n // Create binding loaders\n std::vector<Local<String>> loaders_params = {\n process_string(),\n FIXED_ONE_BYTE_STRING(isolate_, \"getLinkedBinding\"),\n FIXED_ONE_BYTE_STRING(isolate_, \"getInternalBinding\"),\n primordials_string()***REMOVED***\n // 这里的GetInternalBinding便是我们调用`getInternalBinding`执行的函数。如果你不知道为什么js可以调用C++函数的话，请参考这篇文章：《如何正确地使用v8嵌入到我们的C++应用中》\n std::vector<Local<Value>> loaders_args = {\n process_object(),\n NewFunctionTemplate(binding::GetLinkedBinding)\n ->GetFunction(context())\n .ToLocalChecked(),\n NewFunctionTemplate(binding::GetInternalBinding)\n ->GetFunction(context())\n .ToLocalChecked(),\n primordials()***REMOVED***\n ...\n***REMOVED***\n```\n\n这个时候加载进`loader.js`之后，我们来看看该文件做了些啥？\n\n### 4.2、`internal/bootstrap/loader.js`\n\n**这个文件非常特殊，是唯一一个没有出现require关键词的js文件，它唯一使用的外部函数就是刚才提到的getLinkedBinding和getInternalBinding，这一点可以通过文件源码进行核实**\n\n该文件就是构建出`NativeModule`这么一个对象，里面有一些原型方法，最后返回这么一个数据结构：\n\n```\nconst loaderExports = {\n internalBinding,\n NativeModule,\n require: nativeModuleRequire\n***REMOVED***\n```\n\n**在里面我们找到了`internalBinding`这个方法的原始实现：**\n\n```\nlet internalBinding;\n{\n const bindingObj = Object.create(null);\n // eslint-disable-next-line no-global-assign\n internalBinding = function internalBinding(module) {\n let mod = bindingObj[module];\n if (typeof mod !== 'object') {\n // 这里调用我们的C++方法\n mod = bindingObj[module] = getInternalBinding(module);\n moduleLoadList.push(`Internal Binding ${module***REMOVED***`);\n ***REMOVED***\n return mod;\n ***REMOVED***\n***REMOVED***\n```\n\n接着我们顺藤摸瓜，看上图的流程图的一个红色线，`loader.js`执行完后的返回值继续传递到了`internal/bootstrap/node.js`这个文件使用。\n\n代码如下：\n```\nMaybeLocal<Value> Environment::BootstrapInternalLoaders() {\n ... ...\n // 这里的loader_exports便是执行完loader.js之后返回的值\n Local<Value> loader_exports;\n if (!ExecuteBootstrapper(\n this, \"internal/bootstrap/loaders\", &loaders_params, &loaders_args)\n .ToLocal(&loader_exports)) {\n return MaybeLocal<Value>();\n ***REMOVED***\n CHECK(loader_exports->IsObject());\n Local<Object> loader_exports_obj = loader_exports.As<Object>();\n\n // 此时internal_binding_loader的值便是loader_exports.internalBinding，下面的同理\n Local<Value> internal_binding_loader =\n loader_exports_obj->Get(context(), internal_binding_string())\n .ToLocalChecked();\n CHECK(internal_binding_loader->IsFunction());\n set_internal_binding_loader(internal_binding_loader.As<Function>());\n\n // 注意这里的require是native_module的require，有别于第三方包的reuqire\n Local<Value> require =\n loader_exports_obj->Get(context(), require_string()).ToLocalChecked();\n CHECK(require->IsFunction());\n set_native_module_require(require.As<Function>());\n ...\n***REMOVED***\n\nMaybeLocal<Value> Environment::BootstrapNode() {\n ... ...\n std::vector<Local<Value>> node_args = {\n process_object(),\n native_module_require(),\n internal_binding_loader(), // 这个就是刚才的那个internalBinding\n Boolean::New(isolate_, is_main_thread()),\n Boolean::New(isolate_, owns_process_state()),\n primordials()***REMOVED***\n ... ...\n***REMOVED***\n```\n\n该文件同理，也会注入`isMainThread`、`ownsProcessState`以及`process`、`require`、`primordials`和`internalBinding`六个C++函数供js文件调用。\n\n由此又得到的一个结论就是：\n\n* **js调用internalBinding => C++的internal_binding_loader函数 => js的internalBinding函数 => C++的GetInternalBinding函数**\n\n但是到这里，我们的问题还有一些没有解开，还需要继续深入。\n\n### 4.3、`GetInternalBinding`\n\n在`internal/bootstrap/node.js`中，大部分都是给`process`和`global`对象赋值初始化，按照上面给的结论，当我们调用`internalBinding`的时候，实际会执行的是`GetInternalBinding`这个C++函数。所以我们来看看这个函数的实现。\n\njs调用C++函数的规则在[如何正确地使用v8嵌入到我们的C++应用中](https://blog.5udou.cn/blog/Ru-He-Zheng-Que-Di-Shi-Yong-v8Qian-Ru-Dao-Wo-Men-De-CYing-Yong-Zhong-19)文章中已经提及过，所以我们就不再赘述这个是怎么调用的，我们关注重点：\n\n```\nvoid GetInternalBinding(const FunctionCallbackInfo<Value>& args) {\n ... ...\n // 查找模块，在哪里查找？\n node_module* mod = FindModule(modlist_internal, *module_v, NM_F_INTERNAL);\n if (mod != nullptr) {\n exports = InitModule(env, mod, module);\n // 什么是constants模块？\n ***REMOVED*** else if (!strcmp(*module_v, \"constants\")) {\n exports = Object::New(env->isolate());\n CHECK(\n exports->SetPrototype(env->context(), Null(env->isolate())).FromJust());\n DefineConstants(env->isolate(), exports);\n ***REMOVED*** else if (!strcmp(*module_v, \"natives\")) {\n exports = native_module::NativeModuleEnv::GetSourceObject(env->context());\n // Legacy feature: process.binding('natives').config contains stringified\n // config.gypi\n CHECK(exports\n ->Set(env->context(),\n env->config_string(),\n native_module::NativeModuleEnv::GetConfigString(\n env->isolate()))\n .FromJust());\n ***REMOVED*** else {\n return ThrowIfNoSuchModule(env, *module_v);\n ***REMOVED***\n\n // 这里导出了exports这个变量~\n args.GetReturnValue().Set(exports);\n***REMOVED***\n```\n\n这个函数又留给了我们一些疑问：\n\n* FindModule中的modlist_internal从哪里来？\n* native模块名称为什么还有名为`constants`和`natives`的呢？\n\n为了揭开这些问题，我们继续往下深入。\n\n### 4.4、`NODE_MODULE_CONTEXT_AWARE_INTERNAL`\n\n这个时候`NODE_MODULE_CONTEXT_AWARE_INTERNAL`隆重登场，细心的童鞋肯定发现诸如`src/node_fs.cc`这种文件都是以这个宏定义结束的。\n\n在`node_binding.h`文件中可以找到其定义：\n\n```\n#define NODE_MODULE_CONTEXT_AWARE_INTERNAL(modname, regfunc) \\\n NODE_MODULE_CONTEXT_AWARE_CPP(modname, regfunc, nullptr, NM_F_INTERNAL\n```\n\n可以看到实际调用的是宏定义`NODE_MODULE_CONTEXT_AWARE_CPP`，只是将flag设置为`NM_F_INTERNAL`。\n\n而`NODE_MODULE_CONTEXT_AWARE_CPP`宏定义则实际上调用了方法：`node_module_register`。\n\n`node_module_register`这个方法便是往全局的静态变量`modlist_internal`和`modlist_linked`两个链表挂载模块：\n\n```\nif (mp->nm_flags & NM_F_INTERNAL) {\n mp->nm_link = modlist_internal;\n modlist_internal = mp;\n***REMOVED*** else if (!node_is_initialized) {\n // \"Linked\" modules are included as part of the node project.\n // Like builtins they are registered *before* node::Init runs.\n mp->nm_flags = NM_F_LINKED;\n mp->nm_link = modlist_linked;\n modlist_linked = mp;\n***REMOVED*** else {\n thread_local_modpending = mp;\n***REMOVED***\n```\n\n于是modlist_internal就是一个链表，里面链接着所有内建模块，所以上面的`GetInternalBinding`方法是这样的一个执行逻辑：\n\n![](https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/nodejs4.png?x-oss-process=style/addWaterMarkBottom)\n\n上图中的那些`internalBinding`的调用，提供了各种各样的模块名，其中就有我们刚才问到`constants`和`natives`这两个特殊的模块名。\n\n这样，上面的两个问题就迎刃而解了。\n\n但是，问题真的全解决完了吗？如果仅仅是单纯地编译文件的话，这个`NODE_MODULE_CONTEXT_AWARE_INTERNAL`是不会被调用的，那么哪里来的调用`node_module_register`？\n\n🙆，就欣赏你们这种执着的精神。最后的这个问题，连同整篇文章的一个总结性的流程一起释放给大家，算是个大彩蛋~\n\n### 4.5、终极大图\n\n![](https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/nodejs5.png?x-oss-process=style/addWaterMarkBottom)\n\n上图便是一个完整的nodejs和libuv以及v8一起合作的流程图，其中有一个点解释了刚才的问题：什么时候把所有内建模块都加载到`modlist_internal`的？答案就是nodejs启动的时候调用`binding::RegisterBuiltinModules()`。\n\n至此，按理说整篇文章是可以结束了的，但为了巩固我们之前的学(zhuang)习(bi)，我们还是决定以一个例子来看看之前在[如何正确地使用v8嵌入到我们的C++应用中](https://blog.5udou.cn/blog/Ru-He-Zheng-Que-Di-Shi-Yong-v8Qian-Ru-Dao-Wo-Men-De-CYing-Yong-Zhong-19)文章中讲的那么多理论，是不是在Nodejs源码中都是对的？\n\n## 5、举个🌰(彩蛋~)\n假设有这么一个index.js：\n\n```\nconst fs = require('fs')\n\nmodule.exports = () => {\n fs.open('test.js', () => {\n // balabala\n ***REMOVED***)\n***REMOVED***\n```\n\n当你在命令行敲入`node index.js`回车之后，会有哪些处理流程？\n\n这道题真的太TMD像“当你在浏览器输入某个url回车之后，会经过哪些流程”了。还好，这不是面试(很有可能会成为面试题哦~)\n\n大家一看也就是两三行代码吗？但是就这么简单的两三行代码，可以出很多面试题哦~比如说：\n\n* 为什么这里`require`可以不用声明而直接引用？\n* 这里的module.export换成exports可以吗？\n* fs.open是不是有同步的方法？\n* fs.open可以传值指定打开模式，请问这个“0o666\"表示什么？\n* fs.open底层调用了uv_fs_open，请问是在libuv主线程中执行还是另起一个线程执行？\n\n还有好多题目可以问，这里就不一一列举了，想要更多问题欢迎留言(😏)\n\n今天我们重点不在这些面试题，而是验证C++代码是不是如之前文章写的那样。我们一行一行解析过去(不会太深入)。\n\n### 5.1、`require('fs')`\n当你`require`的时候，实际上nodejs不直接执行您在js文件中编写的任何代码(除了上面提到的`internal/bootstrap/loader.js`和`internal/bootstrap/node.js`)。它将您的代码放入一个包装器函数中，然后执行该包装函数。这就是将在任何模块中定义的顶级变量保留在该模块范围内的原因。\n\n比如：\n\n```\n~ $ node\n> require('module').wrapper\n[ '(function (exports, require, module, __filename, __dirname) { ',\n '\\n***REMOVED***' ]\n>\n```\n\n可以看到该包装器函数有5个参数：`exports`, `require`, `module`, `__filename`和` __dirname`. 所以你在js文件中写的那些require、module.exports其实都是这些形参，而不是真的**全局变量**\n\n更多细节就不展开了，要不真的就说不完了~\n\n### 5.2、`fs.open`\nopen的js文件就不关注了，最终是调用了：\n\n```\nbinding.open(pathModule.toNamespacedPath(path),\n flagsNumber,\n mode,\n req);\n```\n\n接着我们跳到`node_fs.cc`中，一步步校验之前的理论。\n\n### 5.2.1、`Initialize`\n还记得上图中那个终极彩蛋里，当调用`internalBinding`的时候，是会初始化对应的内建模块，也就是调用其初始化函数，这里便是`Initialize`函数。\n\n这个函数一开始便是给`target`设置method，比如：\n\n```\nenv->SetMethod(target, \"close\", Close);\nenv->SetMethod(target, \"open\", Open);\n```\n\n那么该方法最后都是调用了`that->Set(context, name_string, function).Check();`，这个是不是和我们在[如何正确地使用v8嵌入到我们的C++应用中](https://blog.5udou.cn/blog/category/nodejs/page/2)中的第二小节**2、调用 C++ 函数**讲的一模一样？\n\n接着开始暴露`FSReqCallback`这个类，这个在`fs.js`文件中有调用到：\n\n```\nconst req = new FSReqCallback();\nreq.oncomplete = callback;\n```\n\n那么这个时候我们就要用到[如何正确地使用v8嵌入到我们的C++应用中](https://blog.5udou.cn/blog/category/nodejs/page/2)中的第三小节**3、使用 C++ 类**的知识了：\n\n```\nLocal<FunctionTemplate> fst = env->NewFunctionTemplate(NewFSReqCallback);\nfst->InstanceTemplate()->SetInternalFieldCount(1);\nfst->Inherit(AsyncWrap::GetConstructorTemplate(env));\nLocal<String> wrapString =\n FIXED_ONE_BYTE_STRING(isolate, \"FSReqCallback\");\nfst->SetClassName(wrapString);\ntarget\n ->Set(context, wrapString,\n fst->GetFunction(env->context()).ToLocalChecked())\n .Check();\n```\n\n完美契合了之前讲的那些理论知识。\n\n接着我们看看是如何使用libuv的\n\n### 5.2.2、`Open`\n异步调用统一封装了一个叫做`AsyncCall`的函数，它又调用了`AsyncDestCall`：\n\n```\nAsyncCall(env, req_wrap_async, args, \"open\", UTF8, AfterInteger,\n uv_fs_open, *path, flags, mode);\n```\n\n之后的调用依旧按照我们之前在[fs.c](https://github.com/linxiaowu66/libuv-demo/blob/master/src/fs.c)提供的示例一样，只是为了封装，将很多东西隐藏起来，阅读起来比较费劲。\n\n到这里，💐你完成了本篇文章的阅读，也感谢你的耐心让你又掌握了一块知识，还没读懂的话，点个收藏，以后遇到的时候可以拿出来参考参考~\n\n感恩~\n\n## 参考\n1. [Internals of Node- Advance node](https://medium.com/front-end-weekly/internals-of-node-advance-node-ï¸\u008f-8612f6a957d7)\n2. [结合源码分析 Node.js 模块加载与运行原理](https://segmentfault.com/a/1190000014147207)\n "

@View('/blog/xx')
export default class BlogDetail extends React.Component<Prop, State> {
  render() {
    return (
      <BlogContainer>
        <ReactMarkdown
          source={content***REMOVED***
          renderers={{ code: CodeBlock ***REMOVED******REMOVED***
          className="blog-detail"
        />
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
