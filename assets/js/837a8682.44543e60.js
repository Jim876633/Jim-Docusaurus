"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7048],{9330:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=l(5893),d=l(1151);const s={title:"\u3010Other\u3011Vim \u57fa\u672c\u6307\u4ee4",sidebar_label:"Vim \u57fa\u672c\u6307\u4ee4",tags:["vim"]},c=void 0,r={id:"other/vim",title:"\u3010Other\u3011Vim \u57fa\u672c\u6307\u4ee4",description:"Vim \u7e3d\u5171\u6709\u56db\u7a2e\u6a21\u5f0f\uff0c\u5206\u5225\u662f Normal Mode\u3001Insert Mode\u3001Visual Mode \u53ca Command Mode\u3002",source:"@site/docs/other/vim.mdx",sourceDirName:"other",slug:"/other/vim",permalink:"/other/vim",draft:!1,unlisted:!1,tags:[{inline:!1,label:"Vim",permalink:"/tags/vim"}],version:"current",lastUpdatedAt:1718173908e3,frontMatter:{title:"\u3010Other\u3011Vim \u57fa\u672c\u6307\u4ee4",sidebar_label:"Vim \u57fa\u672c\u6307\u4ee4",tags:["vim"]},sidebar:"tutorialSidebar",previous:{title:"SIT\u3001UAT\u3001UVT \u662f\u4ec0\u9ebc\uff1f",permalink:"/other/sit-uat"},next:{title:"2023 \u9435\u4eba\u8cfd",permalink:"/2023-ithome"}},o={},h=[{value:"Normal Mode\uff08\u666e\u901a/\u4e00\u822c\u6a21\u5f0f\uff09",id:"normal-mode\u666e\u901a\u4e00\u822c\u6a21\u5f0f",level:2},{value:"\u9032\u5165 Insert Mode",id:"\u9032\u5165-insert-mode",level:3},{value:"\u53d6\u4ee3\u6587\u5b57",id:"\u53d6\u4ee3\u6587\u5b57",level:3},{value:"\u79fb\u52d5\u6e38\u6a19",id:"\u79fb\u52d5\u6e38\u6a19",level:3},{value:"\u8907\u88fd\u3001\u526a\u4e0b\u3001\u8cbc\u4e0a",id:"\u8907\u88fd\u526a\u4e0b\u8cbc\u4e0a",level:3},{value:"\u641c\u5c0b\u3001\u53d6\u4ee3",id:"\u641c\u5c0b\u53d6\u4ee3",level:3},{value:"\u56de\u5230 Normal Mode",id:"\u56de\u5230-normal-mode",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"Visual Mode(\u8996\u89ba\u6a21\u5f0f)",id:"visual-mode\u8996\u89ba\u6a21\u5f0f",level:2},{value:"\u9078\u53d6\u6587\u5b57",id:"\u9078\u53d6\u6587\u5b57",level:3},{value:"\u53c3\u8003",id:"\u53c3\u8003",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Vim \u7e3d\u5171\u6709\u56db\u7a2e\u6a21\u5f0f\uff0c\u5206\u5225\u662f Normal Mode\u3001Insert Mode\u3001Visual Mode \u53ca Command Mode\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u5728 VS Code \u4e2d\u8981\u4f7f\u7528 Vim \u7684\u8a71\uff0c\u53ef\u4ee5\u5b89\u88dd ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=vscodevim.vim",children:"Vim"})," \u64f4\u5145\u5957\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"normal-mode\u666e\u901a\u4e00\u822c\u6a21\u5f0f",children:"Normal Mode\uff08\u666e\u901a/\u4e00\u822c\u6a21\u5f0f\uff09"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Vim \u4e2d\uff0c\u7576\u4f60\u6253\u958b\u4e00\u500b\u6a94\u6848\u6642\uff0c\u4f60\u6703\u9032\u5165 ",(0,i.jsx)(n.strong,{children:"Normal Mode"}),"\uff0c\u9019\u500b Normal Mode \u8ddf\u5e73\u5e38\u6253\u5b57\u7684\u6a21\u5f0f\u4e0d\u592a\u4e00\u6a23\uff0c\u4f60\u7121\u6cd5\u76f4\u63a5\u8f38\u5165\u6587\u5b57\uff0c\u800c\u662f\u53ef\u4ee5\u900f\u904e\u4e00\u4e9b\u6307\u4ee4\u4f86\u64cd\u4f5c\u6a94\u6848\uff0c\u53ef\u4ee5\u628a Normal Mode \u7576\u4f5c\u662f\u4e00\u500b\u4e2d\u7e7c\u7ad9\uff0c\u4f60\u53ef\u4ee5\u900f\u904e Normal Mode \u4f86\u5207\u63db\u5230\u5176\u4ed6\u6a21\u5f0f\uff0c\u50cf\u662f\u5207\u63db\u5230 Insert Mode \u4f86\u8f38\u5165\u6587\u5b57\uff0c\u5207\u63db\u5230 Visual Mode \u4f86\u9078\u53d6\u6587\u5b57\uff0c\u6216\u662f\u5207\u63db\u5230 Command Mode \u4f86\u57f7\u884c\u4e00\u4e9b\u6307\u4ee4\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u5217\u51fa\u6211\u5e38\u7528\u7684\u4e00\u4e9b\u6307\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"\u9032\u5165-insert-mode",children:"\u9032\u5165 Insert Mode"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i"})," : \u5728\u6e38\u6a19\u524d\u63d2\u5165"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"I"})," : \u5728\u6e38\u6a19\u884c\u9996\u63d2\u5165"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a"})," : \u5728\u6e38\u6a19\u5f8c\u63d2\u5165"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"A"})," : \u5728\u6e38\u6a19\u884c\u5c3e\u63d2\u5165"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"o"})," : \u5728\u6e38\u6a19\u4e0b\u63d2\u5165\u65b0\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"O"})," : \u5728\u6e38\u6a19\u4e0a\u63d2\u5165\u65b0\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cc"}),": \u526a\u4e0b\u7576\u524d\u884c\u4e26\u9032\u5165\u63d2\u5165\u6a21\u5f0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cw"})," : \u526a\u4e0b\u7576\u524d\u55ae\u5b57(\u4e0d\u5305\u542b\u6e38\u6a19\u524d\u9762)\u4e26\u9032\u5165\u63d2\u5165\u6a21\u5f0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ciw"})," : \u526a\u4e0b\u7576\u524d\u55ae\u5b57(\u5305\u542b\u6e38\u6a19\u524d\u9762)\u4e26\u9032\u5165\u63d2\u5165\u6a21\u5f0f"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u53d6\u4ee3\u6587\u5b57",children:"\u53d6\u4ee3\u6587\u5b57"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"r"})," : \u53d6\u4ee3\u7576\u524d\u6e38\u6a19\u6240\u5728\u7684\u5b57\u5143"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"R"})," : \u53d6\u4ee3\u7576\u524d\u6e38\u6a19\u6240\u5728\u7684\u5b57\u5143\u53ca\u5176\u5f8c\u7684\u5b57\u5143(\u76f4\u5230\u9000\u51fa normal mode)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u79fb\u52d5\u6e38\u6a19",children:"\u79fb\u52d5\u6e38\u6a19"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"h"})," : \u5de6\u79fb"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"j"})," : \u4e0b\u79fb"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"k"})," : \u4e0a\u79fb"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"l"})," : \u53f3\u79fb"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"w"})," : \u79fb\u52d5\u5230\u4e0b\u4e00\u500b\u55ae\u5b57\u7684\u958b\u982d"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b"})," : \u79fb\u52d5\u5230\u4e0a\u4e00\u500b\u55ae\u5b57\u7684\u958b\u982d"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"e"})," : \u79fb\u52d5\u5230\u7576\u524d\u55ae\u5b57\u7684\u7d50\u5c3e"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"0"})," : \u79fb\u52d5\u5230\u7576\u524d\u884c\u7684\u884c\u9996"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$"})," : \u79fb\u52d5\u5230\u7576\u524d\u884c\u7684\u884c\u5c3e"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gg"})," : \u79fb\u52d5\u5230\u6a94\u6848\u7684\u7b2c\u4e00\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"G"})," : \u79fb\u52d5\u5230\u6a94\u6848\u7684\u6700\u5f8c\u4e00\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:["n + ",(0,i.jsx)(n.code,{children:"G"})," / ",(0,i.jsx)(n.code,{children:":"})," + n : \u79fb\u52d5\u5230\u6a94\u6848\u7684\u7b2c n \u884c"]}),"\n",(0,i.jsxs)(n.li,{children:["n + ",(0,i.jsx)(n.code,{children:"Enter"})," : \u5411\u4e0b\u79fb\u52d5 n \u884c"]}),"\n",(0,i.jsxs)(n.li,{children:["n + ",(0,i.jsx)(n.code,{children:"Space"})," : \u5411\u53f3\u79fb\u52d5 n \u500b\u5b57\u5143"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Crtl"})," + ",(0,i.jsx)(n.code,{children:"f"})," : \u5411\u4e0b\u79fb\u52d5\u4e00\u9801"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Crtl"})," + ",(0,i.jsx)(n.code,{children:"b"})," : \u5411\u4e0a\u79fb\u52d5\u4e00\u9801"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Crtl"})," + ",(0,i.jsx)(n.code,{children:"d"})," : \u5411\u4e0b\u79fb\u52d5\u534a\u9801"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Crtl"})," + ",(0,i.jsx)(n.code,{children:"u"})," : \u5411\u4e0a\u79fb\u52d5\u534a\u9801"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8907\u88fd\u526a\u4e0b\u8cbc\u4e0a",children:"\u8907\u88fd\u3001\u526a\u4e0b\u3001\u8cbc\u4e0a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"})," : \u8907\u88fd\u9078\u53d6\u7684\u6587\u5b57"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"yy"})," : \u8907\u88fd\u7576\u524d\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"p"})," : \u8cbc\u4e0a"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"d"})," : \u526a\u4e0b\u9078\u53d6\u7684\u6587\u5b57"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dd"})," : \u526a\u4e0b\u7576\u524d\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:["n + ",(0,i.jsx)(n.code,{children:"dd"})," : \u526a\u4e0b n \u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dw"})," : \u526a\u4e0b\u7576\u524d\u55ae\u5b57(\u4e0d\u5305\u542b\u6e38\u6a19\u524d\u9762)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"diw"})," : \u526a\u4e0b\u7576\u524d\u55ae\u5b57(\u5305\u542b\u6e38\u6a19\u524d\u9762)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"})," : \u526a\u4e0b\u7576\u524d\u6e38\u6a19\u6240\u5728\u7684\u5b57\u5143"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"u"})," : \u5fa9\u539f\u4e0a\u4e00\u6b65\u64cd\u4f5c"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u641c\u5c0b\u53d6\u4ee3",children:"\u641c\u5c0b\u3001\u53d6\u4ee3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/"})," + keyword + ",(0,i.jsx)(n.code,{children:"Enter"})," : \u5411\u4e0b\u641c\u5c0b\u95dc\u9375\u5b57"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"n"})," : \u8df3\u5230\u4e0b\u4e00\u500b\u95dc\u9375\u5b57"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"N"})," : \u8df3\u5230\u4e0a\u4e00\u500b\u95dc\u9375\u5b57"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u56de\u5230-normal-mode",children:"\u56de\u5230 Normal Mode"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Esc"})," / ",(0,i.jsx)(n.code,{children:"Crtl"})," + ",(0,i.jsx)(n.code,{children:"["})," : \u56de\u5230 Normal Mode"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u89ba\u5f97\u9019\u5169\u500b\u6307\u4ee4\u90fd\u4e0d\u592a\u597d\u6309\uff0c\u5728 VS Code \u7684 Vim \u64f4\u5145\u5957\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u900f\u904e\u8a2d\u5b9a ",(0,i.jsx)(n.code,{children:"vim.insertModeKeyBindings"})," \u4f86\u81ea\u5b9a\u7fa9\u5feb\u6377\u9375\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "vim.insertModeKeyBindings": [\n    {\n      "before": ["j", "j"],\n      "after": ["<Esc>"]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c31\u53ef\u4ee5\u900f\u904e\u9023\u7e8c\u6309\u5169\u6b21 ",(0,i.jsx)(n.code,{children:"j"})," \u4f86\u56de\u5230 Normal Mode\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"zz"})," : \u5c07\u7576\u524d\u884c\u7f6e\u4e2d"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"zt"})," : \u5c07\u7576\u524d\u884c\u7f6e\u9802"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"zb"})," : \u5c07\u7576\u524d\u884c\u7f6e\u5e95"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"."})," : \u91cd\u8907\u4e0a\u4e00\u6b65\u64cd\u4f5c"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"visual-mode\u8996\u89ba\u6a21\u5f0f",children:"Visual Mode(\u8996\u89ba\u6a21\u5f0f)"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Normal Mode \u4e2d\uff0c\u6309\u4e0b ",(0,i.jsx)(n.code,{children:"v"})," \u53ef\u4ee5\u9032\u5165 Visual Mode\uff0c\u9019\u500b\u6a21\u5f0f\u53ef\u4ee5\u7528\u4f86\u9078\u53d6\u6587\u5b57\uff0c\u9078\u53d6\u6587\u5b57\u5f8c\u53ef\u4ee5\u4f7f\u7528 Normal Mode \u7684\u8907\u88fd\u3001\u526a\u4e0b\u3001\u8cbc\u4e0a\u7b49\u6307\u4ee4\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u9078\u53d6\u6587\u5b57",children:"\u9078\u53d6\u6587\u5b57"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"v"})," : \u9032\u5165 Visual Mode \u9078\u53d6\u6587\u5b57"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"V"})," : \u9032\u5165 Visual Line Mode \u9078\u53d6\u6574\u884c\u6587\u5b57"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl"})," + ",(0,i.jsx)(n.code,{children:"v"})," : \u9032\u5165 Visual Block Mode \u9078\u53d6\u5340\u584a\u6587\u5b57"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53c3\u8003",children:"\u53c3\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vim.rtorr.com/lang/zh_tw/",children:"Vim Cheat Sheet"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>c});var i=l(7294);const d={},s=i.createContext(d);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);