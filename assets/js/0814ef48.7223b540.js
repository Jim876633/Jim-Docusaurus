"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4142],{4904:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var o=i(5893),s=i(1151),t=i(5397);const r=i.p+"assets/images/can-i-use-902c130aeced7b41c9dc53285d9bb2b1.jpg",c={title:"\u3010CSS\u3011Achor Positioning API \u8b93\u4f60\u5beb Tooltips \u66f4\u65b9\u4fbf\uff01",sidebar_label:"Achor Positioning",tags:["css"]},l=void 0,a={id:"css/anchor-positioning",title:"\u3010CSS\u3011Achor Positioning API \u8b93\u4f60\u5beb Tooltips \u66f4\u65b9\u4fbf\uff01",description:"\u5728\u958b\u767c\u4e2d\u5f88\u5e38\u9047\u5230 Tooltip \u7684\u9700\u6c42\uff0c\u5927\u90e8\u5206\u90fd\u662f\u4f7f\u7528\u5957\u4ef6\u4f86\u9054\u6210\uff0c\u4f46\u5728\u5ba2\u88fd\u5316\u4e0a\u5c31\u9700\u8981\u82b1\u6642\u9593\u53bb\u8abf\u6574\uff0c\u800c\u4eca\u5e74 W3C \u63d0\u51fa\u4e86 Anchor Positioning API\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u5be6\u73fe Tooltip \u7684\u529f\u80fd\u3002",source:"@site/docs/css/anchor-positioning.mdx",sourceDirName:"css",slug:"/css/anchor-positioning",permalink:"/css/anchor-positioning",draft:!1,unlisted:!1,tags:[{inline:!1,label:"CSS",permalink:"/tags/css"}],version:"current",lastUpdatedAt:1718173908e3,frontMatter:{title:"\u3010CSS\u3011Achor Positioning API \u8b93\u4f60\u5beb Tooltips \u66f4\u65b9\u4fbf\uff01",sidebar_label:"Achor Positioning",tags:["css"]},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/category/css"},next:{title:"Mac",permalink:"/category/mac"}},d={},h=[{value:"Anchor Positioning API",id:"anchor-positioning-api",level:2}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u5728\u958b\u767c\u4e2d\u5f88\u5e38\u9047\u5230 Tooltip \u7684\u9700\u6c42\uff0c\u5927\u90e8\u5206\u90fd\u662f\u4f7f\u7528\u5957\u4ef6\u4f86\u9054\u6210\uff0c\u4f46\u5728\u5ba2\u88fd\u5316\u4e0a\u5c31\u9700\u8981\u82b1\u6642\u9593\u53bb\u8abf\u6574\uff0c\u800c\u4eca\u5e74 W3C \u63d0\u51fa\u4e86 ",(0,o.jsx)(e.a,{href:"https://www.w3.org/TR/css-anchor-position-1/",children:"Anchor Positioning API"}),"\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u5be6\u73fe Tooltip \u7684\u529f\u80fd\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u76ee\u524d 2024/05/30 \u53ea\u6709 Chrome \u8ddf edge \u6709\u652f\u63f4\uff0c\u652f\u63f4\u5ea6\u9084\u662f\u883b\u4f4e\u7684\uff0c\u53ef\u4ee5\u53c3\u8003 ",(0,o.jsx)(e.a,{href:"https://caniuse.com/?search=anchor%20position",children:"Can I Use"}),"\u3002"]}),"\n",(0,o.jsx)(t.Ei,{src:r}),"\n",(0,o.jsxs)(e.p,{children:["\u800c ",(0,o.jsx)(e.a,{href:"https://developer.chrome.com/blog/anchor-positioning-api?hl=zh-tw",children:"Chrome for Developers"})," \u7684 Blog \u6709\u5beb\u4e00\u7bc7\u4ecb\u7d39\uff0c\u9084\u883b\u8a73\u7d30\u7684\uff0c\u5e6b\u5927\u5bb6\u6574\u7406\u4e00\u4e0b\u91cd\u9ede\u529f\u80fd\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"anchor-positioning-api",children:"Anchor Positioning API"}),"\n",(0,o.jsx)(e.p,{children:"\u96d6\u7136\u8aaa\u662f Tooltips\uff0c\u4f46\u5176\u5be6 Anchor Positioning API \u7684\u91cd\u9ede\u5728\u65bc\u52d5\u614b\u7684\u5b9a\u4f4d\u5143\u7d20\uff0c\u4e5f\u5c31\u662f\u9328\u9ede\u5b9a\u4f4d\uff08Achor Positioning\uff09\uff0c\u6240\u4ee5\u50cf\u662f Popover\u3001Dropdown \u4e5f\u53ef\u4ee5\u4f7f\u7528\u9019\u500b API\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u5148\u4f86\u5efa\u7acb\u5169\u500b\u5143\u7d20\uff0c\u4e00\u500b\u662f\u8981\u88ab\u5b9a\u4f4d\u7684\u5143\u7d20\uff0c\u53e6\u4e00\u500b\u662f\u5b9a\u4f4d\u7684\u5143\u7d20\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:'\x3c!-- \u88ab\u5b9a\u4f4d\u5143\u7d20 --\x3e\n<div class="achor">!</div>\n\n\x3c!-- \u5b9a\u4f4d\u5143\u7d20 --\x3e\n<div class="anchor-content">\n  <p>This is the anchor content</p>\n</div>\n'})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\u8a2d\u5b9a\u88ab\u5b9a\u4f4d\u7684\u5143\u7d20\u540d\u7a31"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u9996\u5148\u5148\u5728\u8981\u5b9a\u4f4d\u7684\u5143\u7d20\u4e0a\u5b9a\u7fa9 ",(0,o.jsx)(e.code,{children:"achor-name"})," \u552f\u4e00\u503c\uff0c\u5beb\u6cd5\u4e0a\u8ddf css \u8b8a\u6578\u4e00\u6a23\u524d\u9762\u8981\u52a0\u4e0a ",(0,o.jsx)(e.code,{children:"--"})," \u524d\u7db4\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-css",children:".achor {\n  achor-name: --myAchor;\n}\n"})}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsx)(e.li,{children:"\u6307\u5b9a\u8a2d\u5b9a\u597d\u7684\u540d\u7a31"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u63a5\u8457\u5728\u5b9a\u4f4d\u7684\u5143\u7d20\u4e0a\u8a2d\u5b9a ",(0,o.jsx)(e.code,{children:"position-achor"})," \u5c6c\u6027\uff0c\u6307\u5b9a\u8981\u88ab\u5b9a\u4f4d\u7684\u5143\u7d20\u540d\u7a31\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-css",children:".anchor-content {\n  position-anchor: --myAchor;\n}\n"})}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsx)(e.li,{children:"\u5b9a\u4f4d\u5143\u7d20\u7684\u4f4d\u7f6e"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u6700\u5f8c\u5c31\u662f\u8a2d\u5b9a\u5b9a\u4f4d\u5143\u7d20\u7684\u4f4d\u7f6e\uff0c\u4e3b\u8981\u662f\u7528 ",(0,o.jsx)(e.code,{children:"position"})," \u5c6c\u6027\u4f86\u8a2d\u5b9a\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-css",children:".anchor-content {\n  position-anchor: --myAchor;\n  position: fixed;\n  right: anchor(left);\n  top: anchor(bottom);\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u4ee5 ",(0,o.jsx)(e.code,{children:"right: anchor(left)"})," \u70ba\u4f8b\uff0c",(0,o.jsx)(e.code,{children:"right"})," \u70ba\u5b9a\u4f4d\u5143\u7d20\u7684\u53f3\u908a\u908a\u754c\uff0c",(0,o.jsx)(e.code,{children:"anchor(left)"})," \u70ba\u88ab\u5b9a\u4f4d\u5143\u7d20\u7684\u5de6\u908a\u908a\u754c\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u9019\u6a23\u5c31\u53ef\u4ee5\u8b93\u5b9a\u4f4d\u5143\u7d20\u7684\u53f3\u908a\u5c0d\u9f4a\u88ab\u5b9a\u4f4d\u5143\u7d20\u7684\u5de6\u908a\u4e86\u3002"}),"\n",(0,o.jsx)("iframe",{height:"500",style:{width:"100%"},title:"Anchor Position",src:"https://codepen.io/jim876633/embed/qBGRxjo?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(e.admonition,{type:"info",children:[(0,o.jsxs)(e.p,{children:["\u56e0\u70ba anchor positioning API \u662f\u4f7f\u7528 position \u5b9a\u4f4d\u7684\uff0c\u6240\u4ee5\u9700\u8981\u8a2d\u5b9a ",(0,o.jsx)(e.code,{children:"position: absolute"})," \u6216 ",(0,o.jsx)(e.code,{children:"position: fixed"}),"\u3002"]}),(0,o.jsxs)(e.p,{children:["Chrome for Developers \u7684 blog \u662f\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"position: absolute"}),"\uff0c\u4e0d\u904e W3C \u7684\u6587\u4ef6\u662f\u63a8\u85a6 ",(0,o.jsx)(e.code,{children:"position: fixed"}),"\uff0c\u9019\u6a23\u5c31\u4e0d\u6703\u53d7\u5230\u7236\u5143\u7d20\u7684\u5f71\u97ff\u3002"]})]})]})}function x(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},1262:(n,e,i)=>{i.d(e,{Z:()=>t});i(7294);var o=i(2389),s=i(5893);function t(n){let{children:e,fallback:i}=n;return(0,o.Z)()?(0,s.jsx)(s.Fragment,{children:e?.()}):i??null}},5397:(n,e,i)=>{i.d(e,{Ei:()=>r,gO:()=>c,nI:()=>l});var o=i(1262),s=i(5795),t=(i(7294),i(5893));const r=n=>{let{src:e,width:i="100%",center:o=!1,style:s={}}=n;const r={width:`min(100%,${i})`,display:o?"block":"inline-block",margin:o?"0 auto":"0",borderRadius:"5px",...s};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:e,style:{...r}}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})},c=n=>{let{children:e,width:i="100%",center:r=!1,style:c={}}=n;return(0,t.jsx)(o.Z,{children:()=>{const{sm:n}=(0,s.Z)(),o={width:`min(100%,${i})`,margin:r?"0 auto":"0",display:"flex",flexDirection:n?"column":"row",gap:"10px",alignItems:"center",...c};return(0,t.jsx)("div",{style:{...o},children:e})}})},l=n=>{let{style:e,width:i="100%",src:o}=n;const s={width:`min(100%,${i})`,flex:1,...e};return(0,t.jsx)("div",{style:{...s},children:(0,t.jsx)(r,{src:o})})}},5795:(n,e,i)=>{i.d(e,{Z:()=>t});var o=i(7294);const s=635,t=()=>{const[n,e]=(0,o.useState)({width:window.innerWidth,height:window.innerHeight}),[i,t]=(0,o.useState)(!1);return(0,o.useLayoutEffect)((()=>{const n=()=>{const{innerWidth:n,innerHeight:i}=window,o=n<=s;e({width:n,height:i}),t(o)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]),{sm:i,windowSize:n}}},1151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var o=i(7294);const s={},t=o.createContext(s);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);