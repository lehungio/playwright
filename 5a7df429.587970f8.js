(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{367:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),o=(a(0),a(866)),r={id:"auth",title:"Authentication"},c={unversionedId:"auth",id:"version-1.5.0/auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.5.0/auth.md",slug:"/auth",permalink:"/playwright/docs/1.5.0/auth",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.0/auth.md",version:"1.5.0",sidebar:"version-1.5.0/docs",previous:{title:"Multi-page scenarios",permalink:"/playwright/docs/1.5.0/multi-pages"},next:{title:"Page Object Models",permalink:"/playwright/docs/1.5.0/pom"}},s=[{value:"Automate logging in",id:"automate-logging-in",children:[]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"Cookies",id:"cookies",children:[]},{value:"Local storage",id:"local-storage",children:[]},{value:"Session storage",id:"session-storage",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"Example",id:"example",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[]},{value:"Lifecycle",id:"lifecycle-1",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can be used to automate scenarios that require authentication."),Object(o.b)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.5.0/core-concepts#browser-contexts"}),"browser contexts"),". This isolation model\nimproves reproducibility and prevents cascading test failures. New browser\ncontexts can load existing authentication state. This eliminates the need to\nlogin in every context and speeds up test execution."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the\napp UI). For ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),"\nuse ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.5.0/network#http-authentication"}),Object(o.b)("inlineCode",{parentName:"a"},"browser.newContext")),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#automate-logging-in"}),"Automate logging in")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#cookies"}),"Cookies")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#local-storage"}),"Local storage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#session-storage"}),"Session storage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#lifecycle"}),"Lifecycle")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#example"}),"Example")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#api-reference"}),"API reference")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#multi-factor-authentication"}),"Multi-factor authentication"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#persistent-authentication"}),"Persistent authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#lifecycle-1"}),"Lifecycle")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#api-reference-1"}),"API reference"))))),Object(o.b)("h2",{id:"automate-logging-in"},"Automate logging in"),Object(o.b)("p",null,"The Playwright API can automate interaction with a login form. See\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.5.0/input"}),"Input guide")," for more details."),Object(o.b)("p",null,"The following example automates login on GitHub. Once these steps are executed,\nthe browser context will be authenticated."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const page = await context.newPage();\nawait page.goto('https://github.com/login');\n\n// Interact with login form\nawait page.click('text=Login');\nawait page.fill('input[name=\"login\"]', USERNAME);\nawait page.fill('input[name=\"password\"]', PASSWORD);\nawait page.click('text=Submit');\n// Verify app is logged in\n")),Object(o.b)("p",null,"These steps can be executed for every browser context. However, redoing login\nfor every test can slow down test execution. To prevent that, we will reuse\nexisting authentication state in new browser contexts."),Object(o.b)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),Object(o.b)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated\nstate is stored as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies"),"\nor in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"}),"local storage"),".\nThe Playwright API can be used to retrieve this state from authenticated contexts\nand then load it into new contexts."),Object(o.b)("p",null,"Cookies and local storage state can be used across different browsers. They depend\non your application's authentication model: some apps might require both cookies\nand local storage."),Object(o.b)("p",null,"The following code snippets retrieve state from an authenticated page/context and\nload them into a new context."),Object(o.b)("h3",{id:"cookies"},"Cookies"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get cookies and store as an env variable\nconst cookies = await context.cookies();\nprocess.env.COOKIES = JSON.stringify(cookies);\n\n// Set cookies in a new context\nconst deserializedCookies = JSON.parse(process.env.COOKIES)\nawait context.addCookies(deserializedCookies);\n")),Object(o.b)("h3",{id:"local-storage"},"Local storage"),Object(o.b)("p",null,"Local storage (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),Object(o.b)("inlineCode",{parentName:"a"},"window.localStorage")),")\nis specific to a particular domain."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get local storage and store as env variable\nconst localStorage = await page.evaluate(() => JSON.stringify(window.localStorage));\nprocess.env.LOCAL_STORAGE = localStorage;\n\n// Set local storage in a new context\nconst localStorage = process.env.LOCAL_STORAGE;\nawait context.addInitScript(storage => {\n  if (window.location.hostname === 'example.com') {\n    const entries = JSON.parse(storage);\n    Object.keys(entries).forEach(key => {\n      window.localStorage.setItem(key, entries[key]);\n    });\n  }\n}, localStorage);\n")),Object(o.b)("h3",{id:"session-storage"},"Session storage"),Object(o.b)("p",null,"Session storage (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),Object(o.b)("inlineCode",{parentName:"a"},"window.sessionStorage")),")\nis specific to a particular domain."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get session storage and store as env variable\nconst sessionStorage = await page.evaluate(() => JSON.stringify(sessionStorage));\nprocess.env.SESSION_STORAGE = sessionStorage;\n\n// Set session storage in a new context\nconst sessionStorage = process.env.SESSION_STORAGE;\nawait context.addInitScript(storage => {\n  if (window.location.hostname === 'example.com') {\n    const entries = JSON.parse(storage);\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key]);\n    });\n  }\n}, sessionStorage);\n")),Object(o.b)("h3",{id:"lifecycle"},"Lifecycle"),Object(o.b)("p",null,"Logging in via the UI and then reusing authentication state can be combined to\nimplement ",Object(o.b)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run tests (for example, with ",Object(o.b)("inlineCode",{parentName:"li"},"npm run test"),")."),Object(o.b)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In Jest, this can be executed in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#globalsetup-string"}),Object(o.b)("inlineCode",{parentName:"a"},"globalSetup")),"."))),Object(o.b)("li",{parentName:"ol"},"In each test, load authentication state in ",Object(o.b)("inlineCode",{parentName:"li"},"beforeEach")," or ",Object(o.b)("inlineCode",{parentName:"li"},"beforeAll")," step.")),Object(o.b)("p",null,"This approach will also ",Object(o.b)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely\non any external state."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"examples/authentication.js"}),"This example script")," logs in on GitHub.com with\nChromium, and then reuses the logged in cookie state in WebKit."),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.5.0/api/class-browser#class-browsercontext"}),"class ",Object(o.b)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.5.0/api/class-browsercontext#browsercontextcookiesurls"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.cookies"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.5.0/api/class-browsercontext#browsercontextaddcookiescookies"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.addCookies"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.5.0/api/class-page#pageevaluatepagefunction-arg"}),Object(o.b)("inlineCode",{parentName:"a"},"page.evaluate"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.5.0/api/class-browsercontext#browsercontextaddinitscriptscript-arg"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.addInitScript")))),Object(o.b)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),Object(o.b)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need\nmanual intervention. Persistent authentication can be used to partially automate\nMFA scenarios."),Object(o.b)("h3",{id:"persistent-authentication"},"Persistent authentication"),Object(o.b)("p",null,"Web browsers use a directory on disk to store user history, cookies, IndexedDB\nand other local state. This disk location is called the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md"}),"User data directory"),"."),Object(o.b)("p",null,"Note that persistent authentication is not suited for CI environments since it\nrelies on a disk location. User data directories are specific to browser types\nand cannot be shared across browser types."),Object(o.b)("p",null,"User data directories can be used with the ",Object(o.b)("inlineCode",{parentName:"p"},"launchPersistentContext")," API."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\nconst userDataDir = '/path/to/directory';\nconst context = await chromium.launchPersistentContext(userDataDir, { headless: false });\n// Execute login steps manually in the browser window\n")),Object(o.b)("h3",{id:"lifecycle-1"},"Lifecycle"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a user data directory on disk"),Object(o.b)("li",{parentName:"ol"},"Launch a persistent context with the user data directory and login the MFA account."),Object(o.b)("li",{parentName:"ol"},"Reuse user data directory to run automation scenarios.")),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.5.0/api/class-browsercontext#class-browsercontext"}),"class ",Object(o.b)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.5.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),Object(o.b)("inlineCode",{parentName:"a"},"browserType.launchPersistentContext")))))}b.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return a?i.a.createElement(h,c(c({ref:t},l),{},{components:a})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);