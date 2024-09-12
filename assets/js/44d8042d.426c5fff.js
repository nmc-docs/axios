"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[81],{3523:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=n(4848),t=n(8453);const i={sidebar_position:2},c="C\xe1c lo\u1ea1i instance trong axios",d={id:"axios-instance",title:"C\xe1c lo\u1ea1i instance trong axios",description:"AxiosRequestConfig",source:"@site/docs/axios-instance.md",sourceDirName:".",slug:"/axios-instance",permalink:"/axios/axios-instance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u v\u1ec1 Axios",permalink:"/axios/"},next:{title:"Kh\u1edfi t\u1ea1o instance axios",permalink:"/axios/instance-initialization"}},o={},h=[{value:"AxiosRequestConfig",id:"axiosrequestconfig",level:2},{value:"AxiosResponse <code>&lt;T&gt;</code>",id:"axiosresponse-t",level:2},{value:"AxiosError <code>&lt;T&gt;</code>",id:"axioserror-t",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"c\xe1c-lo\u1ea1i-instance-trong-axios",children:"C\xe1c lo\u1ea1i instance trong axios"})}),"\n",(0,r.jsx)(s.h2,{id:"axiosrequestconfig",children:"AxiosRequestConfig"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"AxiosRequestConfig"})," l\xe0 type \u0111\u1ea1i di\u1ec7n cho c\u1ea5u h\xecnh c\u1ee7a request \u0111\u01b0\u1ee3c g\u1eedi t\u1eeb client l\xean server."]}),"\n",(0,r.jsxs)(s.li,{children:["C\xe1c thu\u1ed9c t\xednh hay d\xf9ng thu\u1ed9c ",(0,r.jsx)(s.strong,{children:"AxiosRequestConfig"})," :"]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Config"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"headers"})}),(0,r.jsxs)(s.td,{children:["L\xe0 m\u1ed9t ",(0,r.jsx)(s.code,{children:"object "}),"ch\u1ee9a to\xe0n b\u1ed9 c\u1ea5u h\xecnh cho ph\u1ea7n ",(0,r.jsx)(s.code,{children:"headers"}),"c\u1ee7a request"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"baseURL"})}),(0,r.jsxs)(s.td,{children:["L\xe0 m\u1ed9t ",(0,r.jsx)(s.code,{children:"string"})," ch\u1ee9a \u0111\u01b0\u1eddng d\u1eabn API c\u01a1 s\u1edf"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"method"})}),(0,r.jsxs)(s.td,{children:["M\u1ed9t ",(0,r.jsx)(s.code,{children:"string"})," l\xe0 t\xean c\u1ee7a HTTP request, nh\u1eadn m\u1ed9t trong 4 gi\xe1 tr\u1ecb sau:\xa0",(0,r.jsx)(s.code,{children:"get"}),",",(0,r.jsx)(s.code,{children:"post"}),",",(0,r.jsx)(s.code,{children:"put"}),",",(0,r.jsx)(s.code,{children:"delete"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"url"})}),(0,r.jsxs)(s.td,{children:["L\xe0 m\u1ed9t ",(0,r.jsx)(s.code,{children:"string"})," ch\u1ee9a endpoint thu\u1ed9c \u0111\u01b0\u1eddng d\u1eabn API"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"params"})}),(0,r.jsxs)(s.td,{children:["L\xe0 m\u1ed9t ",(0,r.jsx)(s.code,{children:"object"})," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 g\u1eedi d\u1eef li\u1ec7u tham s\u1ed1 (parameter) c\xf9ng v\u1edbi request, \u0111\u1eb7c bi\u1ec7t l\xe0 trong c\xe1c request HTTP GET. D\u1eef li\u1ec7u tham s\u1ed1 n\xe0y th\u01b0\u1eddng \u0111\u01b0\u1ee3c th\xeam v\xe0o URL c\u1ee7a request, bi\u1ec3u th\u1ecb d\u01b0\u1edbi d\u1ea1ng chu\u1ed7i query.",(0,r.jsx)("br",{}),"V\xed d\u1ee5: ",(0,r.jsx)(s.code,{children:"axios.get('https://example.com/api/resource', { params: { param1: 'value1', param2: 'value2' }})"}),(0,r.jsx)("br",{}),"Trong v\xed d\u1ee5 n\xe0y, Axios s\u1ebd t\u1ef1 \u0111\u1ed9ng th\xeam ",(0,r.jsx)(s.code,{children:"param1=value1"})," v\xe0 ",(0,r.jsx)(s.code,{children:"param2=value2"})," v\xe0o URL c\u1ee7a request, bi\u1ebfn n\xf3 th\xe0nh ",(0,r.jsx)(s.code,{children:"https://example.com/api/resource?param1=value1&param2=value2"}),"."]})]})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"axiosresponse-t",children:["AxiosResponse ",(0,r.jsx)(s.code,{children:"<T>"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["AxiosResponse ",(0,r.jsx)(s.code,{children:"<T>"})]})," l\xe0 m\u1ed9t type \u0111\u1ea1i di\u1ec7n cho response (ph\u1ea3n h\u1ed3i) t\u1eeb server n\u1ebfu request \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n th\xe0nh c\xf4ng, trong \u0111\xf3 ",(0,r.jsx)(s.strong,{children:"T"})," l\xe0 ",(0,r.jsx)(s.strong,{children:"generic type"})," (ki\u1ec3u c\u1ee7a d\u1eef li\u1ec7u tr\u1ea3 v\u1ec1 t\u1eeb server)"]}),"\n",(0,r.jsxs)(s.li,{children:["C\xe1c thu\u1ed9c t\xednh hay d\xf9ng thu\u1ed9c ",(0,r.jsx)(s.strong,{children:"AxiosResponse"})," :"]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"data"})}),(0,r.jsx)(s.td,{children:"L\xe0 d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c g\u1eedi v\u1ec1 t\u1eeb server"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsxs)(s.td,{children:["M\u1ed9t",(0,r.jsx)(s.strong,{children:"number"})," l\xe0 m\xe3 tr\u1ea1ng th\xe1i HTTP t\u1eeb h\u1ed3i \u0111\xe1p c\u1ee7a server (2xx)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"statusText"})}),(0,r.jsxs)(s.td,{children:["M\u1ed9t",(0,r.jsx)(s.strong,{children:"string"})," l\xe0 th\xf4ng \u0111i\u1ec7p tr\u1ea1ng th\xe1i HTTP t\u1eeb h\u1ed3i \u0111\xe1p c\u1ee7a server"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"config"})}),(0,r.jsxs)(s.td,{children:["L\xe0 m\u1ed9t",(0,r.jsx)(s.strong,{children:"object"})," c\xf3 ki\u1ec3u\xa0",(0,r.jsx)(s.a,{href:"#axiosrequestconfig",children:"AxiosRequestConfig"}),"\xa0ch\u1ee9a to\xe0n b\u1ed9 c\u1ea5u h\xecnh c\u1ee7a request t\u01b0\u01a1ng \u1ee9ng"]})]})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"axioserror-t",children:["AxiosError ",(0,r.jsx)(s.code,{children:"<T>"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"AxiosError"})," l\xe0 m\u1ed9t type \u0111\u1ea1i di\u1ec7n cho l\u1ed7i tr\u1ea3 v\u1ec1 t\u1eeb server n\u1ebfu request th\u1ef1c hi\u1ec7n b\u1ecb th\u1ea5t b\u1ea1i, ",(0,r.jsx)(s.strong,{children:"T"})," l\xe0 ",(0,r.jsx)(s.strong,{children:"generic type"})," (ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a l\u1ed7i tr\u1ea3 v\u1ec1 t\u1eeb server)"]}),"\n",(0,r.jsxs)(s.li,{children:["C\xe1c thu\u1ed9c t\xednh hay d\xf9ng thu\u1ed9c ",(0,r.jsx)(s.strong,{children:"AxiosError"})," :"]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"response"})}),(0,r.jsxs)(s.td,{children:["\xc1p d\u1ee5ng cho",(0,r.jsx)(s.strong,{children:"request"})," \u0111\xe3 \u0111\u01b0\u1ee3c t\u1ea1o ra v\xe0 server \u0111\xe3 h\u1ed3i \u0111\xe1p.",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"error.response.status"}),": m\xe3 l\u1ed7i (401, 403, 404,\u2026)",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"error.response.statusText"}),": ch\u1ee9a th\xf4ng \u0111i\u1ec7p l\u1ed7i",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"error.response.data"}),": ch\u1ee9a d\u1eef li\u1ec7u c\u1ee7a l\u1ed7i"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"config"})}),(0,r.jsxs)(s.td,{children:["L\xe0 m\u1ed9t",(0,r.jsx)(s.strong,{children:"object"})," c\xf3 ki\u1ec3u\xa0",(0,r.jsx)(s.a,{href:"#axiosrequestconfig",children:"AxiosRequestConfig"}),"\xa0ch\u1ee9a to\xe0n b\u1ed9 c\u1ea5u h\xecnh c\u1ee7a request t\u01b0\u01a1ng \u1ee9ng"]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>d});var r=n(6540);const t={},i=r.createContext(t);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);