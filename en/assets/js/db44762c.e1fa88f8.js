"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2339],{503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(5893),r=n(1151);const i={title:"[Day 28] \u6e2c\u8a66\u5b88\u5247\uff1a\u5982\u4f55\u8b93\u6e2c\u8a66\u66f4\u6709\u898f\u7bc4",tags:["ITHome 2023"]},o=void 0,a={id:"ITHome2023/day28",title:"[Day 28] \u6e2c\u8a66\u5b88\u5247\uff1a\u5982\u4f55\u8b93\u6e2c\u8a66\u66f4\u6709\u898f\u7bc4",description:"\u672c\u7cfb\u5217\u9010\u6f38\u4f86\u5230\u5c3e\u8072\uff5e\u6e2c\u8a66\u4e5f\u4ecb\u7d39\u4e86\u5dee\u4e0d\u591a\u4e86\uff0c\u9019\u4e00\u7bc7\u4f86\u8ac7\u8ac7\u5728\u5beb\u6e2c\u8a66\u7684\u6642\u5019\u61c9\u8a72\u8981\u6ce8\u610f\u7684\u4e8b\u60c5\uff0c\u4ee5\u4e0b\u90fd\u662f\u6211\u500b\u4eba\u7684\u7d93\u9a57\uff0c\u5927\u5bb6\u53ef\u4ee5\u53c3\u8003\u770b\u770b\uff5e",source:"@site/docs/ITHome2023/day28.mdx",sourceDirName:"ITHome2023",slug:"/ITHome2023/day28",permalink:"/en/ITHome2023/day28",draft:!1,unlisted:!1,tags:[{label:"ITHome 2023",permalink:"/en/tags/it-home-2023"}],version:"current",lastUpdatedAt:1699970253,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{title:"[Day 28] \u6e2c\u8a66\u5b88\u5247\uff1a\u5982\u4f55\u8b93\u6e2c\u8a66\u66f4\u6709\u898f\u7bc4",tags:["ITHome 2023"]},sidebar:"tutorialSidebar",previous:{title:"[Day 27] \u5acc Jest \u592a\u6162\uff1f\u4f86\u770b\u770b SWC \u8ddf Vitest \u5427\uff01",permalink:"/en/ITHome2023/day27"},next:{title:"[Day 29] \u6e2c\u8a66\u642d\u914d CI/CD \u66f4\u81ea\u52d5\uff01",permalink:"/en/ITHome2023/day29"}},d={},c=[{value:"1. \u6e2c\u8a66\u63cf\u8ff0\u7d71\u4e00\u8a9e\u6cd5\uff1a",id:"1-\u6e2c\u8a66\u63cf\u8ff0\u7d71\u4e00\u8a9e\u6cd5",level:2},{value:"2. \u6e2c\u8a66\u6a94\u6848\u4f4d\u7f6e\uff1a",id:"2-\u6e2c\u8a66\u6a94\u6848\u4f4d\u7f6e",level:2},{value:"3. \u5143\u4ef6\u80fd\u62c6\u5c31\u62c6\uff1a",id:"3-\u5143\u4ef6\u80fd\u62c6\u5c31\u62c6",level:2},{value:"4. \u591a\u4f7f\u7528\u4f9d\u8cf4\u6ce8\u5165 (React)\uff1a",id:"4-\u591a\u4f7f\u7528\u4f9d\u8cf4\u6ce8\u5165-react",level:2},{value:"5. \u6e2c\u9805\u55ae\u4e00\u4e14\u63cf\u8ff0\u6e05\u695a\uff1a",id:"5-\u6e2c\u9805\u55ae\u4e00\u4e14\u63cf\u8ff0\u6e05\u695a",level:2}];function l(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u672c\u7cfb\u5217\u9010\u6f38\u4f86\u5230\u5c3e\u8072\uff5e\u6e2c\u8a66\u4e5f\u4ecb\u7d39\u4e86\u5dee\u4e0d\u591a\u4e86\uff0c\u9019\u4e00\u7bc7\u4f86\u8ac7\u8ac7\u5728\u5beb\u6e2c\u8a66\u7684\u6642\u5019\u61c9\u8a72\u8981\u6ce8\u610f\u7684\u4e8b\u60c5\uff0c\u4ee5\u4e0b\u90fd\u662f\u6211\u500b\u4eba\u7684\u7d93\u9a57\uff0c\u5927\u5bb6\u53ef\u4ee5\u53c3\u8003\u770b\u770b\uff5e"}),"\n",(0,s.jsx)(t.h2,{id:"1-\u6e2c\u8a66\u63cf\u8ff0\u7d71\u4e00\u8a9e\u6cd5",children:"1. \u6e2c\u8a66\u63cf\u8ff0\u7d71\u4e00\u8a9e\u6cd5\uff1a"}),"\n",(0,s.jsxs)(t.p,{children:["\u5efa\u8b70\u5728\u5beb\u6e2c\u8a66\u6642\uff0c\u53ef\u4ee5\u7d71\u4e00\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"describe"})," \u548c ",(0,s.jsx)(t.code,{children:"it"})," \u4f86\u7d44\u7e54\u6e2c\u8a66\uff0c\u4e0d\u50c5\u53ef\u4ee5\u5beb\u8d77\u4f86\u6bd4\u8f03\u4e7e\u6de8\uff0c\u4e5f\u53ef\u4ee5\u8b93\u6e2c\u8a66\u7684\u8a9e\u6cd5\u66f4\u52a0\u7d71\u4e00\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"2-\u6e2c\u8a66\u6a94\u6848\u4f4d\u7f6e",children:"2. \u6e2c\u8a66\u6a94\u6848\u4f4d\u7f6e\uff1a"}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u5beb\u6e2c\u8a66\u7684\u6642\u5019\uff0c\u6211\u8a8d\u70ba\u5c07\u6e2c\u8a66\u6a94\u6848\u653e\u5728\u8207\u88ab\u6e2c\u8a66\u6a94\u6848\u76f8\u540c\u7684\u8cc7\u6599\u593e\u4e2d\uff0c\u6703\u76f8\u5c0d\u4f86\u8aaa\u6bd4\u8f03\u65b9\u4fbf\u505a\u5f15\u5165\uff0c\u6bd4\u8d77\u5c07\u6e2c\u8a66\u78bc\u505a\u7d71\u4e00\u7ba1\u7406\uff0c\u500b\u4eba\u6bd4\u8f03\u504f\u597d\u5c07\u6e2c\u8a66\u5206\u6563\u5728\u5404\u500b\u8cc7\u6599\u593e\u4e2d\uff0c\u6a94\u540d\u7684\u8a71\u4ee5 ",(0,s.jsx)(t.strong,{children:".test.(jsx/tsx)"})," \u505a\u7d50\u5c3e\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"3-\u5143\u4ef6\u80fd\u62c6\u5c31\u62c6",children:"3. \u5143\u4ef6\u80fd\u62c6\u5c31\u62c6\uff1a"}),"\n",(0,s.jsx)(t.p,{children:"\u524d\u9762\u6709\u63d0\u5230\uff0c\u8d8a\u8907\u96dc\u7684\u7a0b\u5f0f\u78bc\u6e2c\u8a66\u8d77\u4f86\u5c31\u8d8a\u52a0\u8017\u6642\uff0c\u6240\u4ee5\u5982\u679c\u80fd\u5c07\u8907\u96dc\u7684\u5143\u4ef6\u62c6\u5206\u70ba\u66f4\u5c0f\u3001\u53ef\u91cd\u7528\u7684\u5143\u4ef6\uff0c\u66f4\u6709\u52a9\u65bc\u9032\u884c\u6e2c\u8a66\u4e26\u4f7f\u5143\u4ef6\u66f4\u5bb9\u6613\u65bc\u7dad\u8b77\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"4-\u591a\u4f7f\u7528\u4f9d\u8cf4\u6ce8\u5165-react",children:"4. \u591a\u4f7f\u7528\u4f9d\u8cf4\u6ce8\u5165 (React)\uff1a"}),"\n",(0,s.jsx)(t.p,{children:"\u4ee5 React \u4f86\u8aaa\uff0c\u56e0\u70ba\u5143\u4ef6\u7686\u70ba\u51fd\u5f0f\uff0c\u6240\u4ee5\u7121\u6cd5\u53bb\u6e2c\u8a66\u5143\u4ef6\u88e1\u6240\u5b9a\u7fa9\u7684\u51fd\u5f0f\uff0c\u9700\u8981\u4f7f\u7528\u4f9d\u8cf4\u6ce8\u5165\u4ee5 props \u7684\u65b9\u5f0f\u50b3\u905e\u9032\u53bb\uff0c\u624d\u80fd\u5920\u9032\u884c\u6a21\u64ec\u6e2c\u8a66\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"5-\u6e2c\u9805\u55ae\u4e00\u4e14\u63cf\u8ff0\u6e05\u695a",children:"5. \u6e2c\u9805\u55ae\u4e00\u4e14\u63cf\u8ff0\u6e05\u695a\uff1a"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u5beb\u6e2c\u8a66\u7684\u6642\u5019\u6700\u6015\u4e0d\u77e5\u9053\u5728\u6e2c\u8a66\u4ec0\u9ebc\uff0c\u6709\u6642\u5019\u4e00\u500b test case \u88e1\u9762\u6e2c\u8a66\u4e00\u5927\u5806\u6771\u897f\uff0c\u53ea\u6703\u589e\u52a0\u5728 debug \u6642\u7684\u96e3\u5ea6\uff0c\u6240\u4ee5\u5efa\u8b70\u4e00\u500b Test Case \u53ea\u6e2c\u8a66\u4e00\u500b\u529f\u80fd\uff0c\u800c\u4e14\u6e2c\u8a66\u7684\u63cf\u8ff0\u8981\u6e05\u695a\uff0c\u9019\u6a23\u5728\u6e2c\u8a66\u5931\u6557\u6642\u624d\u80fd\u5920\u5feb\u901f\u627e\u5230\u554f\u984c\u3002"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"\u4ee5\u4e0a\u5c31\u662f\u6211\u5728\u5beb\u6e2c\u8a66\u6642\u6703\u9075\u5b88\u7684\u898f\u7bc4\uff0c\u7576\u7136\u5176\u5be6\u53ea\u8981\u5718\u968a\u5167\u90e8\u6709\u7d71\u4e00\u898f\u7bc4\uff0c\u90fd\u6703\u6709\u52a9\u65bc\u8b93\u5beb\u6e2c\u8a66\u4e0a\u66f4\u52a0\u9806\u5229\uff0c\u5982\u679c\u6709\u66f4\u597d\u7684\u5efa\u8b70\u90fd\u6b61\u8fce\u5e95\u4e0b\u7559\u8a00\u8a0e\u8ad6\uff01"})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);