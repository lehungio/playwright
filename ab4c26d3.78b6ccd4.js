(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{589:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(866)),o={id:"assertions",title:"Assertions"},c={unversionedId:"assertions",id:"version-1.4.2/assertions",isDocsHomePage:!1,title:"Assertions",description:"The Playwright API can be used to read element contents and properties for test assertions. These values are fetched from the browser page and asserted in",source:"@site/versioned_docs/version-1.4.2/assertions.md",slug:"/assertions",permalink:"/playwright/docs/1.4.2/assertions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.4.2/assertions.md",version:"1.4.2",sidebar:"version-1.4.2/docs",previous:{title:"Network",permalink:"/playwright/docs/1.4.2/network"},next:{title:"Verification",permalink:"/playwright/docs/1.4.2/verification"}},s=[{value:"Common patterns",id:"common-patterns",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Custom assertions",id:"custom-assertions",children:[]}],i={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Playwright API can be used to read element contents and properties for test assertions. These values are fetched from the browser page and asserted in\nNode.js."),Object(l.b)("p",null,"The examples in this guide use the built-in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html"}),Object(l.b)("inlineCode",{parentName:"a"},"assert")," module"),", but they can be used with any assertion library (like ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/expect"}),"Expect")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/chai"}),"Chai"),"). See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.4.2/test-runners"}),"Test runners")," for more info."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#common-patterns"}),"Common patterns")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#element-handles"}),"Element Handles")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"common-patterns"},"Common patterns"),Object(l.b)("p",null,"Playwright provides convenience APIs for common assertion tasks, like finding the\ntext content of an element. These APIs require a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.4.2/selectors"}),"selector")," to locate\nthe element."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Assert text content\nconst content = await page.textContent('nav:first-child');\nassert(content === 'home');\n\n// Assert inner text\nconst text = await page.innerText('.selected');\nassert(text === 'value');\n\n// Assert inner HTML\nconst html = await page.innerHTML('div.result');\nassert(html === '<p>Result</p>')\n\n// Assert `checked` attribute\nconst checked = await page.getAttribute('input', 'checked');\nassert(checked);\n")),Object(l.b)("h4",{id:"api-reference"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-page#pagetextcontentselector-options"}),"page.textContent(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-page#pageinnertextselector-options"}),"page.innerText(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-page#pageinnerhtmlselector-options"}),"page.innerHTML(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-page#pagegetattributeselector-name-options"}),"page.getAttribute(selector, name[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-frame#frametextcontentselector-options"}),"frame.textContent(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-frame#frameinnertextselector-options"}),"frame.innerText(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-frame#frameinnerhtmlselector-options"}),"frame.innerHTML(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-frame#framegetattributeselector-name-options"}),"frame.getAttribute(selector, name[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"element-handles"},"Element Handles"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.4.2/api/class-elementhandle#class-elementhandle"}),"ElementHandle")," objects represent in-page DOM\nelements. They can be used to assert for multiple properties of the element."),Object(l.b)("p",null,"It is recommended to fetch the ",Object(l.b)("inlineCode",{parentName:"p"},"ElementHandle")," object with\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.4.2/api/class-page#pagewaitforselectorselector-options"}),Object(l.b)("inlineCode",{parentName:"a"},"page.waitForSelector"))," or\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.4.2/api/class-frame#framewaitforselectorselector-options"}),Object(l.b)("inlineCode",{parentName:"a"},"frame.waitForSelector")),". These\nAPIs wait for the element to be visible and then return an ",Object(l.b)("inlineCode",{parentName:"p"},"ElementHandle"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get the element handle\nconst elementHandle = page.waitForSelector('#box');\n\n// Assert bounding box for the element\nconst boundingBox = await elementHandle.boundingBox();\nassert(boundingBox.width === 100);\n\n// Assert attribute for the element\nconst classNames = await elementHandle.getAttribute('class');\nassert(classNames.includes('highlighted'));\n")),Object(l.b)("h4",{id:"api-reference-1"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-elementhandle#elementhandletextcontent"}),"elementHandle.textContent()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-elementhandle#elementhandleinnertext"}),"elementHandle.innerText()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-elementhandle#elementhandleinnerhtml"}),"elementHandle.innerHTML()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-elementhandle#elementhandlegetattributename"}),"elementHandle.getAttribute(name)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-elementhandle#elementhandleboundingbox"}),"elementHandle.boundingBox()"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"custom-assertions"},"Custom assertions"),Object(l.b)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of\nthe browser. This is useful in situations where you want to assert for values\nthat are not covered by the convenience APIs above."),Object(l.b)("p",null,"The following APIs do not auto-wait for the element. It is recommended to use\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.4.2/api#pagewaitforselectorselector-options"}),Object(l.b)("inlineCode",{parentName:"a"},"page.waitForSelector"))," or\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/1.4.2/api#framewaitforselectorselector-options"}),Object(l.b)("inlineCode",{parentName:"a"},"frame.waitForSelector")),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nassert(userId);\n\n// Assert value for input element\nawait page.waitForSelector('#search');\nconst value = await page.$eval('#search', el => el.value);\nassert(value === 'query');\n\n// Assert computed style\nconst fontSize = await page.$eval('div', el => window.getComputedStyle(el).fontSize);\nassert(fontSize === '16px');\n\n// Assert list length\nconst length = await page.$$eval('li.selected', (items) => items.length);\nassert(length === 3);\n")),Object(l.b)("h4",{id:"api-reference-2"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api#pageevalselector-pagefunction-arg"}),"page.$eval(selector, pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api#pageevalselector-pagefunction-arg-1"}),"page.$$eval(selector, pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/class-frame#frameevaluatepagefunction-arg"}),"frame.evaluate(pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api#frameevalselector-pagefunction-arg"}),"frame.$eval(selector, pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api#frameevalselector-pagefunction-arg-1"}),"frame.$$eval(selector, pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api#elementhandleevalselector-pagefunction-arg"}),"elementHandle.$eval(selector, pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api#elementhandleevalselector-pagefunction-arg-1"}),"elementHandle.$$eval(selector, pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},"Evaluation argument ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.4.2/api/evaluationargument#evaluationargument"}),"examples"))))}p.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||l;return a?r.a.createElement(d,c(c({ref:t},i),{},{components:a})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);