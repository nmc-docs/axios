"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[937],{3481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(4848),r=n(8453);const o={sidebar_position:1},i="GET",a={id:"http-request-methods/get",title:"GET",description:"- Method GET s\u1ebd y\xeau c\u1ea7u server tr\u1ea3 v\u1ec1 to\xe0n b\u1ed9 d\u1eef li\u1ec7u",source:"@site/docs/http-request-methods/get.md",sourceDirName:"http-request-methods",slug:"/http-request-methods/get",permalink:"/axios/http-request-methods/get",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"C\xe1c HTTP Request methods",permalink:"/axios/category/c\xe1c-http-request-methods"},next:{title:"POST",permalink:"/axios/http-request-methods/post"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"get",children:"GET"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Method ",(0,s.jsx)(t.strong,{children:"GET"})," s\u1ebd y\xeau c\u1ea7u server tr\u1ea3 v\u1ec1 to\xe0n b\u1ed9 d\u1eef li\u1ec7u"]}),"\n",(0,s.jsx)(t.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"axiosInstance.get(URLendpoint: string, config: AxiosRequestConfig)\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'import axios, { AxiosError } from "axios";\n\nconst api = axios.create({\n  baseURL: "https://63f0f29bff1b45a1a444a00a.mockapi.io/api/",\n});\n\ninterface Task {\n  name: string;\n  wage: string;\n  remainingTime: string;\n}\n\nconst getMethod = async () => {\n  try {\n    const { data, status } = await api.get<Task[]>("users");\n    console.log(data);\n    console.log(status);\n  } catch (error) {\n    const err = error as AxiosError;\n    console.log(err.response?.status);\n  }\n};\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);