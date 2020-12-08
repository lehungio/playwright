(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return o}));var a=r(2),n=r(6),i=(r(0),r(866)),s={id:"class-request",title:"class: Request"},l={unversionedId:"api/class-request",id:"api/class-request",isDocsHomePage:!1,title:"class: Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/docs/api/class-request.md",slug:"/api/class-request",permalink:"/playwright/docs/next/api/class-request",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-request.md",version:"current",sidebar:"api",previous:{title:"class: Touchscreen",permalink:"/playwright/docs/next/api/class-touchscreen"},next:{title:"class: Response",permalink:"/playwright/docs/next/api/class-response"}},c=[{value:"request.failure()",id:"requestfailure",children:[]},{value:"request.frame()",id:"requestframe",children:[]},{value:"request.headers()",id:"requestheaders",children:[]},{value:"request.isNavigationRequest()",id:"requestisnavigationrequest",children:[]},{value:"request.method()",id:"requestmethod",children:[]},{value:"request.postData()",id:"requestpostdata",children:[]},{value:"request.postDataBuffer()",id:"requestpostdatabuffer",children:[]},{value:"request.postDataJSON()",id:"requestpostdatajson",children:[]},{value:"request.redirectedFrom()",id:"requestredirectedfrom",children:[]},{value:"request.redirectedTo()",id:"requestredirectedto",children:[]},{value:"request.resourceType()",id:"requestresourcetype",children:[]},{value:"request.response()",id:"requestresponse",children:[]},{value:"request.timing()",id:"requesttiming",children:[]},{value:"request.url()",id:"requesturl",children:[]}],b={rightToc:c};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-page#class-page",title:"Page"}),"Page"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-page#pageonrequest"}),"page.on('request')")," emitted when the request is issued by the page."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-page#pageonresponse"}),"page.on('response')")," emitted when/if the response status and headers are received for the request."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-page#pageonrequestfinished"}),"page.on('requestfinished')")," emitted when the response body is downloaded and the request is complete.")),Object(i.b)("p",null,"If request fails at some point, then instead of ",Object(i.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event),\nthe  ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-page#pageonrequestfailed"}),"page.on('requestfailed')")," event is emitted."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")," HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request\nwill complete with ",Object(i.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event.")),Object(i.b)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new\nrequest is  issued to a redirected url."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestfailure"}),"request.failure()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestframe"}),"request.frame()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestheaders"}),"request.headers()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestisnavigationrequest"}),"request.isNavigationRequest()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestmethod"}),"request.method()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestpostdata"}),"request.postData()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestpostdatabuffer"}),"request.postDataBuffer()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestpostdatajson"}),"request.postDataJSON()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestredirectedfrom"}),"request.redirectedFrom()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestredirectedto"}),"request.redirectedTo()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestresourcetype"}),"request.resourceType()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requestresponse"}),"request.response()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requesttiming"}),"request.timing()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#requesturl"}),"request.url()"))),Object(i.b)("h2",{id:"requestfailure"},"request.failure()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"errorText")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Human-readable error message, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),Object(i.b)("p",null,"The method returns ",Object(i.b)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",Object(i.b)("inlineCode",{parentName:"p"},"requestfailed")," event."),Object(i.b)("p",null,"Example of logging of all the failed requests:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),Object(i.b)("h2",{id:"requestframe"},"request.frame()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-frame#class-frame",title:"Frame"}),"Frame"),">")),Object(i.b)("p",null,"Returns the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-frame#class-frame",title:"Frame"}),"Frame")," that initiated this request."),Object(i.b)("h2",{id:"requestheaders"},"request.headers()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),", ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">>")),Object(i.b)("p",null,"An object with HTTP headers associated with the request. All header names are lower-case."),Object(i.b)("h2",{id:"requestisnavigationrequest"},"request.isNavigationRequest()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(i.b)("p",null,"Whether this request is driving frame's navigation."),Object(i.b)("h2",{id:"requestmethod"},"request.method()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(i.b)("p",null,"Request's method (GET, POST, etc.)"),Object(i.b)("h2",{id:"requestpostdata"},"request.postData()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(i.b)("p",null,"Request's post body, if any."),Object(i.b)("h2",{id:"requestpostdatabuffer"},"request.postDataBuffer()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.md#buffer_class_buffer",title:"Buffer"}),"Buffer"),">")),Object(i.b)("p",null,"Request's post body in a binary form, if any."),Object(i.b)("h2",{id:"requestpostdatajson"},"request.postDataJSON()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">")),Object(i.b)("p",null,"Returns parsed request's body for ",Object(i.b)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),Object(i.b)("p",null,"When the response is ",Object(i.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned.\nOtherwise it will be parsed as JSON."),Object(i.b)("h2",{id:"requestredirectedfrom"},"request.redirectedFrom()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#class-request",title:"Request"}),"Request"),">")),Object(i.b)("p",null,"Request that was redirected by the server to this one, if any."),Object(i.b)("p",null,"When the server responds with a redirect, Playwright creates a new ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-request#class-request",title:"Request"}),"Request")," object. The two requests are connected by\n",Object(i.b)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to\nconstruct the whole redirect chain by repeatedly calling ",Object(i.b)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),Object(i.b)("p",null,"For example, if the website ",Object(i.b)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",Object(i.b)("inlineCode",{parentName:"p"},"https://example.com"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),Object(i.b)("p",null,"If the website ",Object(i.b)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),Object(i.b)("h2",{id:"requestredirectedto"},"request.redirectedTo()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-request#class-request",title:"Request"}),"Request"),">")),Object(i.b)("p",null,"New request issued by the browser if the server responded with redirect."),Object(i.b)("p",null,"This method is the opposite of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#requestredirectedfrom"}),"request.redirectedFrom()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),Object(i.b)("h2",{id:"requestresourcetype"},"request.resourceType()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(i.b)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the\nfollowing: ",Object(i.b)("inlineCode",{parentName:"p"},"document"),", ",Object(i.b)("inlineCode",{parentName:"p"},"stylesheet"),", ",Object(i.b)("inlineCode",{parentName:"p"},"image"),", ",Object(i.b)("inlineCode",{parentName:"p"},"media"),", ",Object(i.b)("inlineCode",{parentName:"p"},"font"),", ",Object(i.b)("inlineCode",{parentName:"p"},"script"),", ",Object(i.b)("inlineCode",{parentName:"p"},"texttrack"),", ",Object(i.b)("inlineCode",{parentName:"p"},"xhr"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fetch"),", ",Object(i.b)("inlineCode",{parentName:"p"},"eventsource"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"websocket"),", ",Object(i.b)("inlineCode",{parentName:"p"},"manifest"),", ",Object(i.b)("inlineCode",{parentName:"p"},"other"),"."),Object(i.b)("h2",{id:"requestresponse"},"request.response()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-response#class-response",title:"Response"}),"Response"),">>")),Object(i.b)("p",null,"Returns the matching ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-response#class-response",title:"Response"}),"Response")," object, or ",Object(i.b)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),Object(i.b)("h2",{id:"requesttiming"},"request.timing()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startTime")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domainLookupStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domainLookupEnd")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"connectStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"secureConnectionStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"connectEnd")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"responseStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"responseEnd")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),Object(i.b)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response,\n",Object(i.b)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing\nAPI"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [request] = await Promise.all([\n  page.waitForEvent('requestfinished'),\n  page.goto(httpsServer.EMPTY_PAGE)\n]);\nconsole.log(request.timing());\n")),Object(i.b)("h2",{id:"requesturl"},"request.url()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(i.b)("p",null,"URL of the request."))}o.isMDXComponent=!0},866:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),o=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.a.createElement(d,l(l({ref:t},b),{},{components:r})):n.a.createElement(d,l({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var b=2;b<i;b++)s[b]=r[b];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);