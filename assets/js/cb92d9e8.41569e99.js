"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6261],{7556:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>x});var n=o(5893),s=o(1151),c=o(5397);const d=o.p+"assets/images/day20-1-f616f8b297900fbe5cd6eff1971a1afe.gif",r=o.p+"assets/images/day20-2-e5fb72c8506cd7da68ac57c90418e990.gif",a=o.p+"assets/images/day20-3-d1dbb20fa971c4713bee44a2a1ae75f4.jpg",i={title:"[Day 20] React + Jest Redux Toolkit \u6e2c\u8a66 (AI)",tags:["ITHome 2023"]},l=void 0,u={id:"ITHome2023/day20",title:"[Day 20] React + Jest Redux Toolkit \u6e2c\u8a66 (AI)",description:"\u5728\u4f7f\u7528 copilot chat \u505a Redux Toolkit \u6e2c\u8a66\u6642\uff0c\u56e0\u70ba\u57fa\u672c\u4e0a\u90fd\u628a\u908f\u8f2f\u8ddf UI \u5206\u958b\uff0c\u6240\u4ee5\u5728\u6e2c\u8a66\u6642\uff0c\u5c31\u4e0d\u9700\u8981\u591a\u63d0\u4f9b\u8cc7\u8a0a\uff0c\u5c31\u53ef\u80fd\u5f97\u5230\u5b8c\u6574\u4e14\u6b63\u78ba\u7684\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u3002",source:"@site/docs/ITHome2023/day20.mdx",sourceDirName:"ITHome2023",slug:"/ITHome2023/day20",permalink:"/ITHome2023/day20",draft:!1,unlisted:!1,tags:[{label:"ITHome 2023",permalink:"/tags/it-home-2023"}],version:"current",lastUpdatedAt:1699949914,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",frontMatter:{title:"[Day 20] React + Jest Redux Toolkit \u6e2c\u8a66 (AI)",tags:["ITHome 2023"]},sidebar:"tutorialSidebar",previous:{title:"[Day 19] React + Jest Redux Toolkit \u6e2c\u8a66",permalink:"/ITHome2023/day19"},next:{title:"[Day 21] React + Jest Redux Toolkit Query \u6e2c\u8a66",permalink:"/ITHome2023/day21"}},p={},x=[{value:"redux toolkit \u6e2c\u8a66",id:"redux-toolkit-\u6e2c\u8a66",level:2},{value:"TodoPage \u6e2c\u8a66",id:"todopage-\u6e2c\u8a66",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}];function h(e){const t={blockquote:"blockquote",code:"code",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u5728\u4f7f\u7528 copilot chat \u505a Redux Toolkit \u6e2c\u8a66\u6642\uff0c\u56e0\u70ba\u57fa\u672c\u4e0a\u90fd\u628a\u908f\u8f2f\u8ddf UI \u5206\u958b\uff0c\u6240\u4ee5\u5728\u6e2c\u8a66\u6642\uff0c\u5c31\u4e0d\u9700\u8981\u591a\u63d0\u4f9b\u8cc7\u8a0a\uff0c\u5c31\u53ef\u80fd\u5f97\u5230\u5b8c\u6574\u4e14\u6b63\u78ba\u7684\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"redux-toolkit-\u6e2c\u8a66",children:"redux toolkit \u6e2c\u8a66"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"/tests"}),"\n"]}),"\n",(0,n.jsx)(c.E,{src:d}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u6e2c\u8a66 redux reducer \u7684\u51fd\u5f0f\u6642\uff0c\u6240\u6709\u76f8\u95dc\u7684\u7a0b\u5f0f\u78bc\u90fd\u6703\u5728\u540c\u4e00\u500b\u6a94\u6848\uff0c\u6240\u4ee5 copilot chat \u6703\u5f88\u7cbe\u6e96\u7684\u5206\u6790\u4e26\u7d66\u51fa\u6b63\u78ba\u7684\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4f86\u770b\u4e00\u4e0b\u5dee\u5225"}),"\n",(0,n.jsx)(c.E,{src:a}),"\n",(0,n.jsxs)(t.p,{children:["\u5b83\u9019\u908a\u7528\u4e86\u4e00\u4e9b\u6211\u6c92\u7528\u904e\u7684\u8a9e\u6cd5\uff0c\u50cf\u662f ",(0,n.jsx)(t.code,{children:"expect.any()"})," \u6216\u662f ",(0,n.jsx)(t.code,{children:" expect.objectContaining()"}),"\uff0c\u4e00\u6a23\u90fd\u80fd\u6b63\u78ba\u7684\u8dd1\u6e2c\u8a66\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u4f7f\u7528 copilot chat \u9084\u80fd\u9806\u4fbf\u5b78\u65b0\u8a9e\u6cd5\uff0c\u771f\u7684\u662f\u592a\u8b9a\u5566\uff01"}),"\n",(0,n.jsx)(t.h2,{id:"todopage-\u6e2c\u8a66",children:"TodoPage \u6e2c\u8a66"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"/tests"}),"\n"]}),"\n",(0,n.jsx)(c.E,{src:r}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u6e2c\u8a66 todoPage \u6642\uff0c\u5148\u628a todo \u7684 reducer \u9078\u64c7\u8d77\u4f86\uff0c\u8b93 copilot chat \u77e5\u9053\u6709\u54ea\u4e9b reducer\uff0c\u63a5\u8457\u518d\u9032\u884c todoPage \u7684\u6e2c\u8a66\uff0c\u4ed6\u5c31\u80fd\u4f9d\u64da\u6709\u7684 reducer \u4f86\u5b89\u6392\u6e2c\u8a66\u7684\u9806\u5e8f\u6d41\u7a0b\uff0c\u4e0d\u7136\u4ed6\u6703\u6191\u7a7a\u7522\u751f\u4e00\u4e9b\u4e0d\u5b58\u5728\u7684 reducer\uff0c\u50cf\u662f\u5728 beforeEach \u88cf\u9762\u52a0\u4e0a ",(0,n.jsx)(t.code,{children:"cleanup()"})," \u628a\u72c0\u614b\u6e05\u9664\u7b49\u7b49..."]}),"\n",(0,n.jsx)(t.h2,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u4f7f\u7528 copilot chat \u9032\u884c redux toolkit \u6e2c\u8a66\u6bd4\u60f3\u50cf\u7684\u9084\u8981\u65b9\u4fbf\uff0c\u53ea\u8981\u4e0b ",(0,n.jsx)(t.code,{children:"/tests"})," \u5c31\u80fd\u5f97\u5230\u5b8c\u6574\u7684\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u3002\u4e00\u958b\u59cb\u5728\u9032\u884c todoPage \u6e2c\u8a66\u6642\uff0c\u5b83\u4e00\u76f4\u6703\u7522\u751f\u4e00\u4e9b\u6211\u6c92\u5b9a\u7fa9\u904e\u7684 reducer \u51fd\u5f0f\uff0c\u5f8c\u4f86\u628a reducer \u7684\u6a94\u6848\u6253\u958b\uff0c\u4e26\u9078\u64c7\u8d77\u4f86\u5f8c\uff0c\u518d\u56de\u5230 todoPage \u6e2c\u8a66\uff0c\u5b83\u5c31\u6703\u6b63\u78ba\u7684\u7522\u751f\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u4e86\uff0c\u4e0d\u78ba\u5b9a\u662f\u4e0d\u662f\u9078\u64c7\u8d77\u4f86\u4ed6\u5c31\u6709\u8a18\u9304\u5230\uff0c\u6709\u4eba\u77e5\u9053\u7684\u8a71\u53ef\u4ee5\u7559\u8a00\u544a\u8a34\u6211 \ud83d\ude02"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5397:(e,t,o)=>{o.d(t,{E:()=>s});o(7294);var n=o(5893);const s=e=>{let{src:t,width:o="100%",center:s=!1,style:c={}}=e;const d={width:`min(100%,${o})`,display:s?"block":"inline-block",margin:s?"0 auto":"0"};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:t,style:{...d}}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>d});var n=o(7294);const s={},c=n.createContext(s);function d(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);