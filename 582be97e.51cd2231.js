(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{359:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return c}));var r=a(2),o=a(6),i=(a(0),a(866)),n={id:"class-browsertype",title:"class: BrowserType"},l={unversionedId:"api/class-browsertype",id:"version-0.18.0/api/class-browsertype",isDocsHomePage:!1,title:"class: BrowserType",description:"BrowserType provides methods to launch a specific browser instance or connect to an existing one.",source:"@site/versioned_docs/version-0.18.0/api/class-browsertype.md",slug:"/api/class-browsertype",permalink:"/playwright/docs/0.18.0/api/class-browsertype",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.18.0/api/class-browsertype.md",version:"0.18.0",sidebar:"version-0.18.0/api",previous:{title:"class: BrowserServer",permalink:"/playwright/docs/0.18.0/api/class-browserserver"},next:{title:"class: Logger",permalink:"/playwright/docs/0.18.0/api/class-logger"}},b=[{value:"browserType.connect(options)",id:"browsertypeconnectoptions",children:[]},{value:"browserType.executablePath()",id:"browsertypeexecutablepath",children:[]},{value:"browserType.launch(options)",id:"browsertypelaunchoptions",children:[]},{value:"browserType.launchPersistentContext(userDataDir, options)",id:"browsertypelaunchpersistentcontextuserdatadir-options",children:[]},{value:"browserType.launchServer(options)",id:"browsertypelaunchserveroptions",children:[]},{value:"browserType.name()",id:"browsertypename",children:[]}],s={rightToc:b};function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"BrowserType provides methods to launch a specific browser instance or connect to an existing one.\nThe following is a typical example of using Playwright to drive automation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-browsertype#browsertypeconnectoptions"}),"browserType.connect(options)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-browsertype#browsertypeexecutablepath"}),"browserType.executablePath()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-browsertype#browsertypelaunchoptions"}),"browserType.launch([options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),"browserType.launchPersistentContext(userDataDir, [options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-browsertype#browsertypelaunchserveroptions"}),"browserType.launchServer([options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-browsertype#browsertypename"}),"browserType.name()"))),Object(i.b)("h2",{id:"browsertypeconnectoptions"},"browserType.connect(options)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"wsEndpoint")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> A browser websocket endpoint to connect to. ",Object(i.b)("strong",{parentName:"li"},"required")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"slowMo")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on. Defaults to 0."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logger")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."))),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api#class-browser",title:"Browser"}),"Browser"),">>")),Object(i.b)("p",null,"This methods attaches Playwright to an existing browser instance."),Object(i.b)("h2",{id:"browsertypeexecutablepath"},"browserType.executablePath()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> A path where Playwright expects to find a bundled browser executable.")),Object(i.b)("h2",{id:"browsertypelaunchoptions"},"browserType.launch(","[options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">  Set of configurable options to set on the browser. Can have the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headless")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to run browser in headless mode. More details for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"}),"Chromium")," and ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode"}),"Firefox"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," unless the ",Object(i.b)("inlineCode",{parentName:"li"},"devtools")," option is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"executablePath")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Path to a browser executable to run instead of the bundled one. If ",Object(i.b)("inlineCode",{parentName:"li"},"executablePath")," is a relative path, then it is resolved relative to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". Note that Playwright only works with the bundled Chromium, Firefox or WebKit, use at your own risk."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> Additional arguments to pass to the browser instance. The list of Chromium flags can be found ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://peter.sh/experiments/chromium-command-line-switches/"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ignoreDefaultArgs")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", Playwright does not pass its own configurations args and only uses the ones from ",Object(i.b)("inlineCode",{parentName:"li"},"args"),". If an array is given, then filters out the given default arguments. Dangerous option; use with care. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGINT")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on Ctrl-C. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGTERM")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGTERM. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGHUP")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGHUP. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logger")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Maximum time in milliseconds to wait for the browser instance to start. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to disable timeout."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"env")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),">> Specify environment variables that will be visible to the browser. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"process.env"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"devtools")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> ",Object(i.b)("strong",{parentName:"li"},"Chromium-only")," Whether to auto-open a Developer Tools panel for each tab. If this option is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option will be set ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"slowMo")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on."))),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api#class-browser",title:"Browser"}),"Browser"),">> Promise which resolves to browser instance.")),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"ignoreDefaultArgs")," to filter out ",Object(i.b)("inlineCode",{parentName:"p"},"--mute-audio")," from default arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const browser = await chromium.launch({  // Or 'firefox' or 'webkit'.\n  ignoreDefaultArgs: ['--mute-audio']\n});\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Chromium-only")," Playwright can also be used to control the Chrome browser, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use ",Object(i.b)("inlineCode",{parentName:"p"},"executablePath")," option with extreme caution."),Object(i.b)("p",{parentName:"blockquote"},"If Google Chrome (rather than Chromium) is preferred, a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.google.com/chrome/browser/canary.html"}),"Chrome Canary")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.chromium.org/getting-involved/dev-channel"}),"Dev Channel")," build is suggested."),Object(i.b)("p",{parentName:"blockquote"},"In ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch([options])")," above, any mention of Chromium also applies to Chrome."),Object(i.b)("p",{parentName:"blockquote"},"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"}),Object(i.b)("inlineCode",{parentName:"a"},"this article"))," for a description of the differences between Chromium and Chrome. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md"}),Object(i.b)("inlineCode",{parentName:"a"},"This article"))," describes some differences for Linux users.")),Object(i.b)("h2",{id:"browsertypelaunchpersistentcontextuserdatadir-options"},"browserType.launchPersistentContext(userDataDir, ","[options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"userDataDir")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Path to a User Data Directory, which stores browser session data like cookies and local storage. More details for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md"}),"Chromium")," and ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options#User_Profile"}),"Firefox"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">  Set of configurable options to set on the browser. Can have the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headless")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to run browser in headless mode. More details for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"}),"Chromium")," and ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode"}),"Firefox"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," unless the ",Object(i.b)("inlineCode",{parentName:"li"},"devtools")," option is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"executablePath")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Path to a browser executable to run instead of the bundled one. If ",Object(i.b)("inlineCode",{parentName:"li"},"executablePath")," is a relative path, then it is resolved relative to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". ",Object(i.b)("strong",{parentName:"li"},"BEWARE"),": Playwright is only guaranteed to work with the bundled Chromium, Firefox or WebKit, use at your own risk."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> Additional arguments to pass to the browser instance. The list of Chromium flags can be found ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://peter.sh/experiments/chromium-command-line-switches/"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ignoreDefaultArgs")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", then do not use any of the default arguments. If an array is given, then filter out the given default arguments. Dangerous option; use with care. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGINT")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on Ctrl-C. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGTERM")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGTERM. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGHUP")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGHUP. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logger")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Maximum time in milliseconds to wait for the browser instance to start. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to disable timeout."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"env")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),">> Specify environment variables that will be visible to the browser. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"process.env"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"devtools")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> ",Object(i.b)("strong",{parentName:"li"},"Chromium-only")," Whether to auto-open a Developer Tools panel for each tab. If this option is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option will be set ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"slowMo")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on. Defaults to 0."))),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-browsercontext#class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">> Promise which resolves to the browser app instance.")),Object(i.b)("p",null,"Launches browser instance that uses persistent storage located at ",Object(i.b)("inlineCode",{parentName:"p"},"userDataDir"),"."),Object(i.b)("h2",{id:"browsertypelaunchserveroptions"},"browserType.launchServer(","[options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">  Set of configurable options to set on the browser. Can have the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headless")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to run browser in headless mode. More details for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"}),"Chromium")," and ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode"}),"Firefox"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," unless the ",Object(i.b)("inlineCode",{parentName:"li"},"devtools")," option is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"port")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Port to use for the web socket. Defaults to 0 that picks any available port."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"executablePath")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Path to a browser executable to run instead of the bundled one. If ",Object(i.b)("inlineCode",{parentName:"li"},"executablePath")," is a relative path, then it is resolved relative to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". ",Object(i.b)("strong",{parentName:"li"},"BEWARE"),": Playwright is only guaranteed to work with the bundled Chromium, Firefox or WebKit, use at your own risk."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> Additional arguments to pass to the browser instance. The list of Chromium flags can be found ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://peter.sh/experiments/chromium-command-line-switches/"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ignoreDefaultArgs")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", then do not use any of the default arguments. If an array is given, then filter out the given default arguments. Dangerous option; use with care. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGINT")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on Ctrl-C. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGTERM")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGTERM. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleSIGHUP")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGHUP. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logger")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Maximum time in milliseconds to wait for the browser instance to start. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to disable timeout."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"env")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"|",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),">> Specify environment variables that will be visible to the browser. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"process.env"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"devtools")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> ",Object(i.b)("strong",{parentName:"li"},"Chromium-only")," Whether to auto-open a Developer Tools panel for each tab. If this option is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option will be set ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."))),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-browser#class-browserserver",title:"BrowserServer"}),"BrowserServer"),">> Promise which resolves to the browser app instance.")),Object(i.b)("p",null,"Launches browser server that client can connect to. An example of launching a browser executable and connecting to it later:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'webkit' or 'firefox'.\n\n(async () => {\n  const browserServer = await chromium.launchServer();\n  const wsEndpoint = browserServer.wsEndpoint();\n  // Use web socket endpoint later to establish a connection.\n  const browser = await chromium.connect({ wsEndpoint });\n  // Close browser instance.\n  await browserServer.close();\n})();\n")),Object(i.b)("h2",{id:"browsertypename"},"browserType.name()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(i.b)("p",null,"Returns browser name. For example: ",Object(i.b)("inlineCode",{parentName:"p"},"'chromium'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'webkit'")," or ",Object(i.b)("inlineCode",{parentName:"p"},"'firefox'"),"."))}c.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),o=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,n=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,d=p["".concat(n,".").concat(u)]||p[u]||m[u]||i;return a?o.a.createElement(d,l(l({ref:t},s),{},{components:a})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var s=2;s<i;s++)n[s]=a[s];return o.a.createElement.apply(null,n)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);