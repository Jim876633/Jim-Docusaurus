"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6448],{1872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>c,metadata:()=>p,toc:()=>a});var r=n(5893),i=n(1151);const c={title:"\u3010TypeScript\u3011\u4ecb\u7d39\u3001\u5efa\u7acb\u6b65\u9a5f",sidebar_label:"\u4ecb\u7d39\u3001\u5efa\u7acb\u6b65\u9a5f",tags:["typescript"]},s="TypeScript \u4ecb\u7d39",p={id:"typescript/intro",title:"\u3010TypeScript\u3011\u4ecb\u7d39\u3001\u5efa\u7acb\u6b65\u9a5f",description:"TypeScript \u662f\u4e00\u500b\u52a0\u5f37 JavaScript \u578b\u5225\u7684\u7cfb\u7d71\uff0c\u90a3\u70ba\u751a\u9ebc\u9700\u8981\u7528 TypeScript\uff1f\u56e0\u70ba JavaScript \u662f\u5f31\u578b\u5225\u8a9e\u8a00\uff0c\u6240\u4ee5\u5728\u5beb\u7a0b\u5f0f\u78bc\u6642\uff0c\u4e0d\u6703\u5e6b\u4f60\u6aa2\u67e5\u8b8a\u6578\u578b\u5225\u662f\u5426\u6709\u7528\u932f\uff0c\u76f4\u5230\u57f7\u884c\u5f8c\u624d\u6703\u767c\u73fe\uff0c\u5982\u679c\u5c08\u6848\u8d8a\u5927\uff0c\u5728 debug \u7684\u6642\u5019\u5c31\u6703\u66f4\u52a0\u56f0\u96e3\u3002",source:"@site/docs/typescript/intro.md",sourceDirName:"typescript",slug:"/typescript/intro",permalink:"/typescript/intro",draft:!1,unlisted:!1,tags:[{inline:!1,label:"TypeScript",permalink:"/tags/typescript"}],version:"current",lastUpdatedAt:1718173908e3,frontMatter:{title:"\u3010TypeScript\u3011\u4ecb\u7d39\u3001\u5efa\u7acb\u6b65\u9a5f",sidebar_label:"\u4ecb\u7d39\u3001\u5efa\u7acb\u6b65\u9a5f",tags:["typescript"]},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/category/typescript"},next:{title:"Docusaurus",permalink:"/category/docusaurus"}},d={},a=[{value:"\u5c0e\u5165 TypeScript",id:"\u5c0e\u5165-typescript",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"typescript-\u4ecb\u7d39",children:"TypeScript \u4ecb\u7d39"}),"\n",(0,r.jsxs)(t.p,{children:["TypeScript \u662f\u4e00\u500b",(0,r.jsx)(t.strong,{children:"\u52a0\u5f37 JavaScript \u578b\u5225\u7684\u7cfb\u7d71"}),"\uff0c\u90a3\u70ba\u751a\u9ebc\u9700\u8981\u7528 TypeScript\uff1f\u56e0\u70ba JavaScript \u662f\u5f31\u578b\u5225\u8a9e\u8a00\uff0c\u6240\u4ee5\u5728\u5beb\u7a0b\u5f0f\u78bc\u6642\uff0c\u4e0d\u6703\u5e6b\u4f60\u6aa2\u67e5\u8b8a\u6578\u578b\u5225\u662f\u5426\u6709\u7528\u932f\uff0c\u76f4\u5230\u57f7\u884c\u5f8c\u624d\u6703\u767c\u73fe\uff0c\u5982\u679c\u5c08\u6848\u8d8a\u5927\uff0c\u5728 debug \u7684\u6642\u5019\u5c31\u6703\u66f4\u52a0\u56f0\u96e3\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u8209\u4e00\u500b\u597d\u7406\u89e3\u7684\u4f8b\u5b50\uff0c\u5047\u8a2d\u6709\u4e00\u500b\u8868\u55ae\u4f60\u8f38\u5165\u6578\u5b57\u4ed6\u6703\u56de\u50b3 ",(0,r.jsx)(t.code,{children:"+1"})," \u7684\u6578\u5b57\uff0c\u4f46\u6211\u5011\u5728\u8b80\u53d6 input \u7684\u6578\u5b57\u6642\uff0c\u4ed6\u6703\u6293\u5230\u7684\u662f\u5b57\u4e32\uff0c\u5982\u679c\u6c92\u6709\u8f49\u63db\u6210\u6578\u5b57\uff0c\u90a3\u7d50\u679c\u5c31\u4e0d\u6703\u662f\u6211\u5011\u9810\u671f\u7684\u6a23\u5b50\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'console.log(addOne("5")); // output: 51\n\nfunction addOne(input) {\n  return input + 1;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u6211\u5011\u7528 TypeScript \u7684\u8a71\uff0c\u4ed6\u5c31\u6703\u63d0\u793a\u4f60\u578b\u5225\u6709\u932f\u8aa4\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(2382).Z+"",width:"688",height:"163"})}),"\n",(0,r.jsx)(t.p,{children:"\u4e0d\u904e\u4ed6\u4f9d\u7136\u53ef\u4ee5\u88ab\u7de8\u8b6f\u6210 JavaScript \uff0c\u7576\u7136\u4e5f\u53ef\u4ee5\u57f7\u884c\u3002\u6240\u4ee5 TypeScript \u5c31\u53ea\u662f\u4e00\u500b\u9810\u8b66\u63aa\u65bd\uff0c\u8b93\u6211\u5011\u5728\u5beb\u7a0b\u5f0f\u78bc\u7684\u6642\u5019\uff0c\u53ef\u4ee5\u66f4\u5feb\u7684\u767c\u73fe\u932f\u8aa4\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u9084\u6709\u4e00\u500b\u5f88\u91cd\u8981\u7684\u512a\u9ede\uff0c\u5c31\u662f\u7576\u5225\u4eba\u5728\u770b\u4f60\u7684\u7a0b\u5f0f\u78bc\u6642\uff0c\u53ef\u4ee5\u66f4\u5feb\u7684\u77e5\u9053\u4f60\u7684\u8b8a\u6578\u6216\u51fd\u5f0f\u8981\u505a\u751a\u9ebc\uff0c\u5047\u8a2d\u6709\u4e00\u500b\u51fd\u5f0f\u5167\u5bb9\u5f88\u591a\u6c92\u8fa6\u6cd5\u99ac\u4e0a\u770b\u51fa\u4f5c\u7528\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"function getValue(a,b){\n    ...something\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4f46\u5982\u679c\u4f7f\u7528 TypeScript\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"function getValue(a :number,b :number):number{\n    ...something\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u5011\u5c31\u53ef\u4ee5\u5927\u6982\u77e5\u9053\u50b3\u5165\u7684\u53c3\u6578\u662f\u5169\u500b\u6578\u5b57\uff0c\u56de\u50b3\u7684\u5167\u5bb9\u4e5f\u662f\u6578\u5b57\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u5c0e\u5165-typescript",children:"\u5c0e\u5165 TypeScript"}),"\n",(0,r.jsx)(t.p,{children:"\u56e0\u70ba\u4f7f\u7528\u7684\u983b\u7387\u7684\u5f88\u9ad8\uff0c\u6240\u4ee5\u76f4\u63a5\u88dd global \u7248\u5c31\u53ef\u4ee5\u4e86\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install -g typescript\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u53ef\u4ee5\u7528 ",(0,r.jsx)(t.code,{children:"tsc -v"})," \u67e5\u770b\u7248\u672c\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u4e0b\u8f09\u5b8c\u5f8c\uff0c\u5c31\u5728\u60f3\u8981\u52a0 TypeScript \u7684\u8cc7\u6599\u593e\u4e0b\u521d\u59cb\u5316\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"tsc --init\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u9019\u6642\u5019\u4f60\u7684\u8cc7\u6599\u593e\u4e0b\u5c31\u6703\u6709\u4e00\u500b ",(0,r.jsx)(t.code,{children:"tsconfig.json"})," \u7684\u6a94\u6848\uff0c\u9019\u500b\u5c31\u662f\u6240\u6709 TypeScript \u7de8\u8b6f\u7684\u8a2d\u5b9a\uff0c\u4e4b\u5f8c\u518d\u6162\u6162\u8b1b\u89e3\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u7136\u5f8c\u5c31\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b index.ts \u6a94\uff0c\u5c31\u53ef\u4ee5\u958b\u59cb\u5beb TypeScript \u56c9\uff5e"}),"\n",(0,r.jsx)(t.p,{children:"\u5beb\u5b8c\u5f8c\u60f3\u8981\u8f49\u6210 JavaScript \u53ea\u8981\u8f38\u5165"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"tsc\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6c92\u932f\uff01\u5c31\u662f\u90a3\u9ebc\u7c21\u55ae\uff0c\u4ed6\u5c31\u6703\u628a\u6240\u6709 TypeScript \u7684\u6a94\u6848\u8f49\u6210 JavaScript \u4e86\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(6919).Z+"",width:"903",height:"189"})}),"\n",(0,r.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\u4ed6\u9084\u9806\u4fbf\u5e6b\u4f60\u7528 ",(0,r.jsx)(t.code,{children:"use strict"})," \u56b4\u8b39\u6a21\u5f0f\uff0c\u662f\u4e0d\u662f\u5f88\u8cbc\u5fc3\uff01"]}),"\n",(0,r.jsx)(t.p,{children:"\u4e0b\u4e00\u7bc7\u4f86\u4ecb\u7d39\u6709\u54ea\u4e9b\u578b\u5225\u4ee5\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/typeScript-1-1-b113f750b6c5675d82bfa389fe82ce67.jpg"},6919:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/typeScript-1-2-63555d353e9a969b8e837d570532390c.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>s});var r=n(7294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);