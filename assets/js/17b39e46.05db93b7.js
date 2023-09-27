"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},s="PUT",i={unversionedId:"http-request-methods/put",id:"http-request-methods/put",title:"PUT",description:"- Method PUT s\u1ebd y\xeau c\u1ea7u server c\u1eadp nh\u1eadt l\u1ea1i d\u1eef li\u1ec7u c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng theo ID v\xe0 tr\u1ea3 v\u1ec1 d\u1eef li\u1ec7u v\u1eeba m\u1edbi c\u1eadp nh\u1eadt \u0111\xf3",source:"@site/docs/http-request-methods/put.md",sourceDirName:"http-request-methods",slug:"/http-request-methods/put",permalink:"/axios/http-request-methods/put",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"POST",permalink:"/axios/http-request-methods/post"},next:{title:"DELETE",permalink:"/axios/http-request-methods/delete"}},p={},c=[],u={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"put"},"PUT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method ",(0,a.kt)("strong",{parentName:"li"},"PUT")," s\u1ebd y\xeau c\u1ea7u server c\u1eadp nh\u1eadt l\u1ea1i d\u1eef li\u1ec7u c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng theo ",(0,a.kt)("strong",{parentName:"li"},"ID")," v\xe0 tr\u1ea3 v\u1ec1 d\u1eef li\u1ec7u v\u1eeba m\u1edbi c\u1eadp nh\u1eadt \u0111\xf3"),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"axiosInstance.put(URLendpointWithID: string, data: any, config: AxiosRequestConfig)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import axios, { AxiosError } from "axios";\n\nconst api = axios.create({\n  baseURL: "https://63f0f29bff1b45a1a444a00a.mockapi.io/api/",\n});\n\ninterface User {\n  name: string;\n  age: number;\n  address: string;\n}\n\nconst putMethod = async () => {\n  try {\n    const newUser: User = {\n      name: "John",\n      age: 25,\n      address: "New York",\n    };\n    const { data, status } = await api.put<User>("users/5", newUser);\n    console.log(data.name, data.age, data.address);\n    console.log(status);\n  } catch (error) {\n    const err = error as AxiosError;\n    console.log(err.response?.status);\n  }\n};\n')))}d.isMDXComponent=!0}}]);