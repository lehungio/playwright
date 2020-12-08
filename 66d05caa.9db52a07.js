(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{398:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var o=a(2),l=a(6),n=(a(0),a(866)),r={id:"class-download",title:"class: Download"},d={unversionedId:"api/class-download",id:"version-1.6.1/api/class-download",isDocsHomePage:!1,title:"class: Download",description:"Download] objects are dispatched by page via the ['download' event.",source:"@site/versioned_docs/version-1.6.1/api/class-download.md",slug:"/api/class-download",permalink:"/playwright/docs/1.6.1/api/class-download",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/api/class-download.md",version:"1.6.1",sidebar:"version-1.6.1/api",previous:{title:"class: Dialog",permalink:"/playwright/docs/1.6.1/api/class-dialog"},next:{title:"class: Video",permalink:"/playwright/docs/1.6.1/api/class-video"}},i=[{value:"download.createReadStream()",id:"downloadcreatereadstream",children:[]},{value:"download.delete()",id:"downloaddelete",children:[]},{value:"download.failure()",id:"downloadfailure",children:[]},{value:"download.path()",id:"downloadpath",children:[]},{value:"download.saveAs(path)",id:"downloadsaveaspath",children:[]},{value:"download.suggestedFilename()",id:"downloadsuggestedfilename",children:[]},{value:"download.url()",id:"downloadurl",children:[]}],c={rightToc:i};function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/api/class-download#class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/api/class-page#event-download"}),"'download'")," event."),Object(n.b)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed. All downloaded files are deleted when the browser closes."),Object(n.b)("p",null,"Download event is emitted once the download starts. Download path becomes available\nonce download completes:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // wait for download to start\n  page.click('a')\n]);\n// wait for download to complete\nconst path = await download.path();\n...\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE")," Browser context ",Object(n.b)("strong",{parentName:"p"},"must")," be created with the ",Object(n.b)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",Object(n.b)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(n.b)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set or set to ",Object(n.b)("inlineCode",{parentName:"p"},"false"),", download events are emitted, but the actual download is not performed and user has no access to the downloaded files.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api/class-download#downloadcreatereadstream"}),"download.createReadStream()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api/class-download#downloaddelete"}),"download.delete()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api/class-download#downloadfailure"}),"download.failure()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api/class-download#downloadpath"}),"download.path()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api/class-download#downloadsaveaspath"}),"download.saveAs(path)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api/class-download#downloadsuggestedfilename"}),"download.suggestedFilename()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/1.6.1/api/class-download#downloadurl"}),"download.url()"))),Object(n.b)("h2",{id:"downloadcreatereadstream"},"download.createReadStream()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://nodejs.org/api/stream.htmlapi.md#stream_class_stream_readable",title:"Readable"}),"Readable"),">>")),Object(n.b)("p",null,"Returns readable stream for current download or ",Object(n.b)("inlineCode",{parentName:"p"},"null")," if download failed."),Object(n.b)("h2",{id:"downloaddelete"},"download.delete()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"Deletes the downloaded file."),Object(n.b)("h2",{id:"downloadfailure"},"download.failure()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">>")),Object(n.b)("p",null,"Returns download error if any."),Object(n.b)("h2",{id:"downloadpath"},"download.path()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">>")),Object(n.b)("p",null,"Returns path to the downloaded file in case of successful download."),Object(n.b)("h2",{id:"downloadsaveaspath"},"download.saveAs(path)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"path")," <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Path where the download should be saved."),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"Saves the download to a user-specified path."),Object(n.b)("h2",{id:"downloadsuggestedfilename"},"download.suggestedFilename()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(n.b)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),Object(n.b)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",Object(n.b)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),Object(n.b)("h2",{id:"downloadurl"},"download.url()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(n.b)("p",null,"Returns downloaded url."))}s.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var o=a(0),l=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),s=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},b=function(e){var t=s(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(a),u=o,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||n;return a?l.a.createElement(m,d(d({ref:t},c),{},{components:a})):l.a.createElement(m,d({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var c=2;c<n;c++)r[c]=a[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);