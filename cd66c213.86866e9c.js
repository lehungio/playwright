(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{689:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),b=(n(0),n(866)),l={id:"actionability",title:"Actionability"},r={unversionedId:"actionability",id:"version-1.5.0/actionability",isDocsHomePage:!1,title:"Actionability",description:"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button.",source:"@site/versioned_docs/version-1.5.0/actionability.md",slug:"/actionability",permalink:"/playwright/docs/1.5.0/actionability",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.0/actionability.md",version:"1.5.0",sidebar:"version-1.5.0/docs",previous:{title:"Continuous Integration",permalink:"/playwright/docs/1.5.0/ci"},next:{title:"Advanced installation",permalink:"/playwright/docs/1.5.0/installation"}},c=[{value:"Visible",id:"visible",children:[]},{value:"Stable",id:"stable",children:[]},{value:"Enabled",id:"enabled",children:[]},{value:"Editable",id:"editable",children:[]},{value:"Receiving events",id:"receiving-events",children:[]},{value:"Attached",id:"attached",children:[]}],o={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button."),Object(b.b)("p",null,"Playwright waits until all the relevant actionability checks pass before performing an action. This means that action will fail with ",Object(b.b)("inlineCode",{parentName:"p"},"TimeoutError")," if checks do not pass within the specified ",Object(b.b)("inlineCode",{parentName:"p"},"timeout"),"."),Object(b.b)("p",null,"Some actions like ",Object(b.b)("inlineCode",{parentName:"p"},"page.click()")," support ",Object(b.b)("inlineCode",{parentName:"p"},"{force: true}")," option that disable non-essential actionability checks, for example passing ",Object(b.b)("inlineCode",{parentName:"p"},"force")," to ",Object(b.b)("inlineCode",{parentName:"p"},"click()")," method will not check that the target element actually receives click events."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Actions"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Performed checks"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"check()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"click()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"dblclick()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"uncheck()")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#enabled",title:"Enabled"}),"Enabled"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#receiving-events",title:"Receiving Events"}),"Receiving Events"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hover()")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#receiving-events",title:"Receiving Events"}),"Receiving Events"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"fill()")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#enabled",title:"Enabled"}),"Enabled"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#editable",title:"Editable"}),"Editable"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"dispatchEvent()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"focus()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"press()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"setInputFiles()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"selectOption()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"type()")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"scrollIntoViewIfNeeded()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"screenshot()")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectText()")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(b.b)("br",null),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"getAttribute()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"innerText()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"innerHTML()"),Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"textContent()")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))))),Object(b.b)("h3",{id:"visible"},"Visible"),Object(b.b)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",Object(b.b)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",Object(b.b)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),Object(b.b)("h3",{id:"stable"},"Stable"),Object(b.b)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),Object(b.b)("h3",{id:"enabled"},"Enabled"),Object(b.b)("p",null,"Element is considered enabled when it is not a ",Object(b.b)("inlineCode",{parentName:"p"},"<button>"),", ",Object(b.b)("inlineCode",{parentName:"p"},"<select>")," or ",Object(b.b)("inlineCode",{parentName:"p"},"<input>")," with a ",Object(b.b)("inlineCode",{parentName:"p"},"disabled")," property set."),Object(b.b)("h3",{id:"editable"},"Editable"),Object(b.b)("p",null,"Element is considered editable when it does not have ",Object(b.b)("inlineCode",{parentName:"p"},"readonly")," property set."),Object(b.b)("h3",{id:"receiving-events"},"Receiving events"),Object(b.b)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",Object(b.b)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",Object(b.b)("inlineCode",{parentName:"p"},"(10;10)"),"."),Object(b.b)("h3",{id:"attached"},"Attached"),Object(b.b)("p",null,"Element is considered attached when it is ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"}),"connected")," to a Document or a ShadowRoot."),Object(b.b)("p",null,"Attached check differs between selector-based and handle-based actions, like ",Object(b.b)("inlineCode",{parentName:"p"},"page.click(selector, options)")," as opposite to ",Object(b.b)("inlineCode",{parentName:"p"},"elementHandle.click(options)"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"For selector-based actions, Playwright first waits for an element matching ",Object(b.b)("inlineCode",{parentName:"li"},"selector")," to be attached to the DOM, and then checks that element is still attached before performing the action. If element was detached, the action is retried from the start."),Object(b.b)("li",{parentName:"ul"},"For handle-based actions, Playwright throws if the element is not attached.")),Object(b.b)("p",null,"For example, consider a scenario where Playwright will click ",Object(b.b)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",Object(b.b)("inlineCode",{parentName:"p"},"page.click()")," call was made:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"page is checking that user name is unique and ",Object(b.b)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),Object(b.b)("li",{parentName:"ul"},"after checking with the server, the disabled ",Object(b.b)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}d.isMDXComponent=!0},866:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),i=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),d=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,j=p["".concat(l,".").concat(O)]||p[O]||s[O]||b;return n?i.a.createElement(j,r(r({ref:t},o),{},{components:n})):i.a.createElement(j,r({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=O;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var o=2;o<b;o++)l[o]=n[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);