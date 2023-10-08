"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[814],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1881:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},l="C\xe1c lo\u1ea1i instance trong axios",o={unversionedId:"axios-instance",id:"axios-instance",title:"C\xe1c lo\u1ea1i instance trong axios",description:"AxiosRequestConfig",source:"@site/docs/axios-instance.md",sourceDirName:".",slug:"/axios-instance",permalink:"/axios/axios-instance",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u v\u1ec1 Axios",permalink:"/axios/"},next:{title:"Kh\u1edfi t\u1ea1o instance axios",permalink:"/axios/instance-initialization"}},p={},s=[{value:"AxiosRequestConfig",id:"axiosrequestconfig",level:2},{value:"AxiosResponse <code>&lt;T&gt;</code>",id:"axiosresponse-t",level:2},{value:"AxiosError <code>&lt;T&gt;</code>",id:"axioserror-t",level:2}],d={toc:s},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c\xe1c-lo\u1ea1i-instance-trong-axios"},"C\xe1c lo\u1ea1i instance trong axios"),(0,r.kt)("h2",{id:"axiosrequestconfig"},"AxiosRequestConfig"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AxiosRequestConfig")," l\xe0 type \u0111\u1ea1i di\u1ec7n cho c\u1ea5u h\xecnh c\u1ee7a request \u0111\u01b0\u1ee3c g\u1eedi t\u1eeb client l\xean server."),(0,r.kt)("li",{parentName:"ul"},"C\xe1c thu\u1ed9c t\xednh hay d\xf9ng thu\u1ed9c ",(0,r.kt)("strong",{parentName:"li"},"AxiosRequestConfig")," :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:null},"L\xe0 m\u1ed9t ",(0,r.kt)("inlineCode",{parentName:"td"},"object "),"ch\u1ee9a to\xe0n b\u1ed9 c\u1ea5u h\xecnh cho ph\u1ea7n ",(0,r.kt)("inlineCode",{parentName:"td"},"headers"),"c\u1ee7a request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"baseURL")),(0,r.kt)("td",{parentName:"tr",align:null},"L\xe0 m\u1ed9t ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ch\u1ee9a \u0111\u01b0\u1eddng d\u1eabn API c\u01a1 s\u1edf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},"M\u1ed9t ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," l\xe0 t\xean c\u1ee7a HTTP request, nh\u1eadn m\u1ed9t trong 4 gi\xe1 tr\u1ecb sau:\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"get"),",",(0,r.kt)("inlineCode",{parentName:"td"},"post"),",",(0,r.kt)("inlineCode",{parentName:"td"},"put"),",",(0,r.kt)("inlineCode",{parentName:"td"},"delete"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"L\xe0 m\u1ed9t ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ch\u1ee9a endpoint thu\u1ed9c \u0111\u01b0\u1eddng d\u1eabn API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},"L\xe0 m\u1ed9t ",(0,r.kt)("inlineCode",{parentName:"td"},"object")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 g\u1eedi d\u1eef li\u1ec7u tham s\u1ed1 (parameter) c\xf9ng v\u1edbi request, \u0111\u1eb7c bi\u1ec7t l\xe0 trong c\xe1c request HTTP GET. D\u1eef li\u1ec7u tham s\u1ed1 n\xe0y th\u01b0\u1eddng \u0111\u01b0\u1ee3c th\xeam v\xe0o URL c\u1ee7a request, bi\u1ec3u th\u1ecb d\u01b0\u1edbi d\u1ea1ng chu\u1ed7i query.",(0,r.kt)("br",null),"V\xed d\u1ee5: ",(0,r.kt)("inlineCode",{parentName:"td"},"axios.get('https://example.com/api/resource', { params: { param1: 'value1', param2: 'value2' }})"),(0,r.kt)("br",null),"Trong v\xed d\u1ee5 n\xe0y, Axios s\u1ebd t\u1ef1 \u0111\u1ed9ng th\xeam ",(0,r.kt)("inlineCode",{parentName:"td"},"param1=value1")," v\xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"param2=value2")," v\xe0o URL c\u1ee7a request, bi\u1ebfn n\xf3 th\xe0nh ",(0,r.kt)("inlineCode",{parentName:"td"},"https://example.com/api/resource?param1=value1&param2=value2"),".")))),(0,r.kt)("h2",{id:"axiosresponse-t"},"AxiosResponse ",(0,r.kt)("inlineCode",{parentName:"h2"},"<T>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AxiosResponse ",(0,r.kt)("inlineCode",{parentName:"strong"},"<T>"))," l\xe0 m\u1ed9t type \u0111\u1ea1i di\u1ec7n cho response (ph\u1ea3n h\u1ed3i) t\u1eeb server n\u1ebfu request \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n th\xe0nh c\xf4ng, trong \u0111\xf3 ",(0,r.kt)("strong",{parentName:"li"},"T")," l\xe0 ",(0,r.kt)("strong",{parentName:"li"},"generic type")," (ki\u1ec3u c\u1ee7a d\u1eef li\u1ec7u tr\u1ea3 v\u1ec1 t\u1eeb server)"),(0,r.kt)("li",{parentName:"ul"},"C\xe1c thu\u1ed9c t\xednh hay d\xf9ng thu\u1ed9c ",(0,r.kt)("strong",{parentName:"li"},"AxiosResponse")," :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"L\xe0 d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c g\u1eedi v\u1ec1 t\u1eeb server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:null},"M\u1ed9t",(0,r.kt)("strong",{parentName:"td"},"number")," l\xe0 m\xe3 tr\u1ea1ng th\xe1i HTTP t\u1eeb h\u1ed3i \u0111\xe1p c\u1ee7a server (2xx)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"statusText")),(0,r.kt)("td",{parentName:"tr",align:null},"M\u1ed9t",(0,r.kt)("strong",{parentName:"td"},"string")," l\xe0 th\xf4ng \u0111i\u1ec7p tr\u1ea1ng th\xe1i HTTP t\u1eeb h\u1ed3i \u0111\xe1p c\u1ee7a server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:null},"L\xe0 m\u1ed9t",(0,r.kt)("strong",{parentName:"td"},"object")," c\xf3 ki\u1ec3u\xa0",(0,r.kt)("a",{parentName:"td",href:"#axiosrequestconfig"},"AxiosRequestConfig"),"\xa0ch\u1ee9a to\xe0n b\u1ed9 c\u1ea5u h\xecnh c\u1ee7a request t\u01b0\u01a1ng \u1ee9ng")))),(0,r.kt)("h2",{id:"axioserror-t"},"AxiosError ",(0,r.kt)("inlineCode",{parentName:"h2"},"<T>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AxiosError")," l\xe0 m\u1ed9t type \u0111\u1ea1i di\u1ec7n cho l\u1ed7i tr\u1ea3 v\u1ec1 t\u1eeb server n\u1ebfu request th\u1ef1c hi\u1ec7n b\u1ecb th\u1ea5t b\u1ea1i, ",(0,r.kt)("strong",{parentName:"li"},"T")," l\xe0 ",(0,r.kt)("strong",{parentName:"li"},"generic type")," (ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a l\u1ed7i tr\u1ea3 v\u1ec1 t\u1eeb server)"),(0,r.kt)("li",{parentName:"ul"},"C\xe1c thu\u1ed9c t\xednh hay d\xf9ng thu\u1ed9c ",(0,r.kt)("strong",{parentName:"li"},"AxiosError")," :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"response")),(0,r.kt)("td",{parentName:"tr",align:null},"\xc1p d\u1ee5ng cho",(0,r.kt)("strong",{parentName:"td"},"request")," \u0111\xe3 \u0111\u01b0\u1ee3c t\u1ea1o ra v\xe0 server \u0111\xe3 h\u1ed3i \u0111\xe1p.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"error.response.status"),": m\xe3 l\u1ed7i (401, 403, 404,\u2026)",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"error.response.statusText"),": ch\u1ee9a th\xf4ng \u0111i\u1ec7p l\u1ed7i",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"error.response.data"),": ch\u1ee9a d\u1eef li\u1ec7u c\u1ee7a l\u1ed7i")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:null},"L\xe0 m\u1ed9t",(0,r.kt)("strong",{parentName:"td"},"object")," c\xf3 ki\u1ec3u\xa0",(0,r.kt)("a",{parentName:"td",href:"#axiosrequestconfig"},"AxiosRequestConfig"),"\xa0ch\u1ee9a to\xe0n b\u1ed9 c\u1ea5u h\xecnh c\u1ee7a request t\u01b0\u01a1ng \u1ee9ng")))))}m.isMDXComponent=!0}}]);