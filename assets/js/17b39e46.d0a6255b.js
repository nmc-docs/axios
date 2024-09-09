"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[850],{8008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(4848),r=n(8453);const o={sidebar_position:3},a="PUT",i={id:"http-request-methods/put",title:"PUT",description:"- Method PUT s\u1ebd y\xeau c\u1ea7u server c\u1eadp nh\u1eadt l\u1ea1i d\u1eef li\u1ec7u c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng theo ID v\xe0 tr\u1ea3 v\u1ec1 d\u1eef li\u1ec7u v\u1eeba m\u1edbi c\u1eadp nh\u1eadt \u0111\xf3",source:"@site/docs/http-request-methods/put.md",sourceDirName:"http-request-methods",slug:"/http-request-methods/put",permalink:"/axios/http-request-methods/put",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"POST",permalink:"/axios/http-request-methods/post"},next:{title:"DELETE",permalink:"/axios/http-request-methods/delete"}},c={},d=[];function u(e){const t={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"put",children:"PUT"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Method ",(0,s.jsx)(t.strong,{children:"PUT"})," s\u1ebd y\xeau c\u1ea7u server c\u1eadp nh\u1eadt l\u1ea1i d\u1eef li\u1ec7u c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng theo ",(0,s.jsx)(t.strong,{children:"ID"})," v\xe0 tr\u1ea3 v\u1ec1 d\u1eef li\u1ec7u v\u1eeba m\u1edbi c\u1eadp nh\u1eadt \u0111\xf3"]}),"\n",(0,s.jsx)(t.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"axiosInstance.put(URLendpointWithID: string, data: any, config: AxiosRequestConfig)\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'import axios, { AxiosError } from "axios";\n\nconst api = axios.create({\n  baseURL: "https://63f0f29bff1b45a1a444a00a.mockapi.io/api/",\n});\n\ninterface User {\n  name: string;\n  age: number;\n  address: string;\n}\n\nconst putMethod = async () => {\n  try {\n    const newUser: User = {\n      name: "John",\n      age: 25,\n      address: "New York",\n    };\n    const { data, status } = await api.put<User>("users/5", newUser);\n    console.log(data.name, data.age, data.address);\n    console.log(status);\n  } catch (error) {\n    const err = error as AxiosError;\n    console.log(err.response?.status);\n  }\n};\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);