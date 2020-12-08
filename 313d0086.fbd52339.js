(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(2),i=a(6),l=(a(0),a(866)),n={id:"class-dialog",title:"class: Dialog"},o={unversionedId:"api/class-dialog",id:"version-1.6.0/api/class-dialog",isDocsHomePage:!1,title:"class: Dialog",description:"Dialog] objects are dispatched by page via the ['dialog' event.",source:"@site/versioned_docs/version-1.6.0/api/class-dialog.md",slug:"/api/class-dialog",permalink:"/playwright/docs/1.6.0/api/class-dialog",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.0/api/class-dialog.md",version:"1.6.0",sidebar:"version-1.6.0/api",previous:{title:"class: ConsoleMessage",permalink:"/playwright/docs/1.6.0/api/class-consolemessage"},next:{title:"class: Download",permalink:"/playwright/docs/1.6.0/api/class-download"}},c=[{value:"dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message()",id:"dialogmessage",children:[]},{value:"dialog.type()",id:"dialogtype",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.6.0/api/class-dialog#class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.6.0/api/class-page#event-dialog"}),"'dialog'")," event."),Object(l.b)("p",null,"An example of using ",Object(l.b)("inlineCode",{parentName:"p"},"Dialog")," class:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/1.6.0/api/class-dialog#dialogacceptprompttext"}),"dialog.accept([promptText])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/1.6.0/api/class-dialog#dialogdefaultvalue"}),"dialog.defaultValue()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/1.6.0/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/1.6.0/api/class-dialog#dialogmessage"}),"dialog.message()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/playwright/docs/1.6.0/api/class-dialog#dialogtype"}),"dialog.type()"))),Object(l.b)("h2",{id:"dialogacceptprompttext"},"dialog.accept(","[promptText]",")"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"promptText")," <",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",Object(l.b)("inlineCode",{parentName:"li"},"type")," is not prompt."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"> Promise which resolves when the dialog has been accepted.")),Object(l.b)("h2",{id:"dialogdefaultvalue"},"dialog.defaultValue()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> If dialog is prompt, returns default prompt value. Otherwise, returns empty string.")),Object(l.b)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"> Promise which resolves when the dialog has been dismissed.")),Object(l.b)("h2",{id:"dialogmessage"},"dialog.message()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> A message displayed in the dialog.")),Object(l.b)("h2",{id:"dialogtype"},"dialog.type()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Dialog's type, can be one of ",Object(l.b)("inlineCode",{parentName:"li"},"alert"),", ",Object(l.b)("inlineCode",{parentName:"li"},"beforeunload"),", ",Object(l.b)("inlineCode",{parentName:"li"},"confirm")," or ",Object(l.b)("inlineCode",{parentName:"li"},"prompt"),".")))}p.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var r=a(0),i=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,n=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,g=d["".concat(n,".").concat(u)]||d[u]||b[u]||l;return a?i.a.createElement(g,o(o({ref:t},s),{},{components:a})):i.a.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var s=2;s<l;s++)n[s]=a[s];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);