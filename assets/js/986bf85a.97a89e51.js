"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[244],{2647:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=t(4848),s=t(8453);const o={sidebar_position:3},c="Kh\u1edfi t\u1ea1o instance axios",r={id:"instance-initialization",title:"Kh\u1edfi t\u1ea1o instance axios",description:"- \u0110\u1ec3 kh\u1edfi t\u1ea1o m\u1ed9t instance axios:",source:"@site/docs/instance-initialization.md",sourceDirName:".",slug:"/instance-initialization",permalink:"/axios/instance-initialization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"C\xe1c lo\u1ea1i instance trong axios",permalink:"/axios/axios-instance"},next:{title:"Savoring the Taste of Coffee Amidst Urban Life",permalink:"/axios/coffee-in-street"}},a={},h=[];function l(n){const e={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"kh\u1edfi-t\u1ea1o-instance-axios",children:"Kh\u1edfi t\u1ea1o instance axios"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u0110\u1ec3 kh\u1edfi t\u1ea1o m\u1ed9t instance ",(0,i.jsx)(e.strong,{children:"axios"}),":"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'import axios from "axios";\n\nconst httpRequest = axios.create(config: AxiosRequestConfig);\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Khi t\u1ea1o m\u1ed9t instance ",(0,i.jsx)(e.strong,{children:"axios"})," , c\xe1c c\u1ea5u h\xecnh m\xe0 ta kh\u1edfi t\u1ea1o trong instance s\u1ebd l\xe0 c\u1ea5u h\xecnh chung cho t\u1ea5t c\u1ea3 c\xe1c ",(0,i.jsx)(e.strong,{children:"request"})," d\xf9ng instance n\xe0y. Ta c\xf3 th\u1ec3 thi\u1ebft l\u1eadp c\xe1c gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh cho c\xe1c th\xf4ng s\u1ed1 nh\u01b0 ",(0,i.jsx)(e.code,{children:"baseURL"}),", ",(0,i.jsx)(e.code,{children:"headers"}),",..."]}),"\n",(0,i.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'import axios from "axios";\n\nconst api = axios.create({\n  baseURL: "http://localhost:8080/api/v1", // URL c\u01a1 s\u1edf c\u1ee7a API\n  headers: { "Content-Type": "application/json" }, // C\u1ea5u h\xecnh headers\n  withCredentials: true, // Cho ph\xe9p server g\u1eedi, nh\u1eadn cookie t\u1eeb request\n  /*... C\xe1c c\u1ea5u h\xecnh kh\xe1c */\n});\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Ta c\u0169ng c\xf3 th\u1ec3 c\u1ea5u h\xecnh ri\xeang \u0111\u1ed1i v\u1edbi t\u1eebng ",(0,i.jsx)(e.strong,{children:"request"})," . M\u1ed7i ph\u01b0\u01a1ng th\u1ee9c ",(0,i.jsx)(e.strong,{children:"GET"})," , ",(0,i.jsx)(e.strong,{children:"POST"})," , ",(0,i.jsx)(e.strong,{children:"PUT"})," , ",(0,i.jsx)(e.strong,{children:"DELETE"})," \u0111\u1ec1u nh\u1eadn m\u1ed9t tham s\u1ed1 cu\u1ed1i c\xf9ng l\xe0 ",(0,i.jsx)(e.code,{children:"config"}),". N\xf3 l\xe0 m\u1ed9t object c\u0169ng c\xf3 type l\xe0 ",(0,i.jsx)(e.a,{href:"./axios-instance#axiosrequestconfig",children:"AxiosRequestConfig "}),"gi\u1ed1ng nh\u01b0 khi ta kh\u1edfi t\u1ea1o instace ",(0,i.jsx)(e.strong,{children:"axios"})," nh\u01b0 tr\xean"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function c(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);