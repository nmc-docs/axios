"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[55],{3979:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(4848),s=t(8453);const c={sidebar_position:6},o="Cancel request",i={id:"cancel-request",title:"Cancel request",description:"- Gi\u1ea3 s\u1eed \u0111ang trong qu\xe1 tr\xecnh x\u1eed l\xfd request \u0111\u01b0\u1ee3c g\u1eedi t\u1eeb client, ng\u01b0\u1eddi d\xf9ng l\u1ea1i chuy\u1ec3n sang trang kh\xe1c. L\xfac n\xe0y, request \u0111ang th\u1ef1c hi\u1ec7n c\u1ea7n ph\u1ea3i \u0111\u01b0\u1ee3c h\u1ee7y b\u1ecf.",source:"@site/docs/cancel-request.md",sourceDirName:".",slug:"/cancel-request",permalink:"/axios/cancel-request",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Interceptors",permalink:"/axios/interceptors"}},a={},l=[];function u(n){const e={code:"code",h1:"h1",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"cancel-request",children:"Cancel request"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Gi\u1ea3 s\u1eed \u0111ang trong qu\xe1 tr\xecnh x\u1eed l\xfd ",(0,r.jsx)(e.strong,{children:"request"})," \u0111\u01b0\u1ee3c g\u1eedi t\u1eeb client, ng\u01b0\u1eddi d\xf9ng l\u1ea1i chuy\u1ec3n sang trang kh\xe1c. L\xfac n\xe0y, ",(0,r.jsx)(e.strong,{children:"request"})," \u0111ang th\u1ef1c hi\u1ec7n c\u1ea7n ph\u1ea3i \u0111\u01b0\u1ee3c h\u1ee7y b\u1ecf."]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import axios from "axios";\n\nconst api = axios.create({\n  baseURL: "https://63f0f29bff1b45a1a444a00a.mockapi.io/api/",\n  headers: {\n    "Content-Type": "application/json",\n  },\n});\n\nconst controller = new AbortController();\n\nconst getMethod = async () => {\n  try {\n    const response = await api.get("users", { signal: controller.signal });\n  } catch (error) {\n    console.log(error);\n  }\n};\n\ncontroller.abort(); //S\u1eed d\u1ee5ng c\xe2u l\u1ec7nh n\xe0y \u0111\u1ec3 h\u1ee7y b\u1ecf request, th\u01b0\u1eddng \u0111\u01b0\u1ee3c \u0111\u1eb7t trong cleanup function trong useEffect. T\u1ee9c khi component unmounted (ng\u01b0\u1eddi d\xf9ng chuy\u1ec3n trang), s\u1ebd th\u1ef1c hi\u1ec7n h\u1ee7y b\u1ecf request.\n'})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var r=t(6540);const s={},c=r.createContext(s);function o(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);