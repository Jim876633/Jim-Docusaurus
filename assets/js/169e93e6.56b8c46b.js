"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5109],{4351:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>y,contentTitle:()=>p,default:()=>u,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var t=s(5893),c=s(1151),i=s(5397);const r=s.p+"assets/images/day23-1-2cc7ff156c8ad10b353a23c1dfd67b9d.jpg";var l=s(9472),o=s(8116),a=s(8875);const d={title:"[Day 23] E2E \u6e2c\u8a66\u5957\u4ef6 Cypress \u4ecb\u7d39",tags:["ITHome 2023"]},p=void 0,h={id:"ITHome2023/day23",title:"[Day 23] E2E \u6e2c\u8a66\u5957\u4ef6 Cypress \u4ecb\u7d39",description:"\u55ae\u5143\u6e2c\u8a66\u7684\u6e2c\u8a66\u529f\u80fd\u90fd\u4ecb\u7d39\u4e86\u5dee\u4e0d\u591a\u4e86\uff0c\u5176\u5be6\u5230\u5f8c\u4f86\u53ef\u4ee5\u767c\u73fe\uff0c\u57fa\u672c\u4e0a\u55ae\u5143\u6e2c\u8a66\u80fd\u6e2c\u7684\u90fd\u5927\u540c\u5c0f\u7570\uff0c\u5c31\u662f\u4e00\u4e9b\u5beb\u6cd5\u8ddf\u8a9e\u6cd5\u7684\u4e0d\u540c\u800c\u5df2\uff0c\u4ecb\u7d39\u5b8c\u4e86\u55ae\u5143\u6e2c\u8a66\uff0c\u6211\u5011\u4f86\u770b\u770b\u8981\u600e\u9ebc\u64b0\u5beb\u7aef\u5c0d\u7aef (End-to-end) \u7684\u6e2c\u8a66\u5427\uff01",source:"@site/docs/ITHome2023/day23.mdx",sourceDirName:"ITHome2023",slug:"/ITHome2023/day23",permalink:"/ITHome2023/day23",draft:!1,unlisted:!1,tags:[{label:"ITHome 2023",permalink:"/tags/it-home-2023"}],version:"current",lastUpdatedAt:1699970253,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",frontMatter:{title:"[Day 23] E2E \u6e2c\u8a66\u5957\u4ef6 Cypress \u4ecb\u7d39",tags:["ITHome 2023"]},sidebar:"tutorialSidebar",previous:{title:" [Day 22] React + Jest Redux Toolkit Query \u6e2c\u8a66 (AI)",permalink:"/ITHome2023/day22"},next:{title:"[Day 24] React + Cypress \u6e2c\u8a66",permalink:"/ITHome2023/day24"}},y={},x=[{value:"Cypress",id:"cypress",level:2},{value:"\u5b89\u88dd Cypress",id:"\u5b89\u88dd-cypress",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u55ae\u5143\u6e2c\u8a66\u7684\u6e2c\u8a66\u529f\u80fd\u90fd\u4ecb\u7d39\u4e86\u5dee\u4e0d\u591a\u4e86\uff0c\u5176\u5be6\u5230\u5f8c\u4f86\u53ef\u4ee5\u767c\u73fe\uff0c\u57fa\u672c\u4e0a\u55ae\u5143\u6e2c\u8a66\u80fd\u6e2c\u7684\u90fd\u5927\u540c\u5c0f\u7570\uff0c\u5c31\u662f\u4e00\u4e9b\u5beb\u6cd5\u8ddf\u8a9e\u6cd5\u7684\u4e0d\u540c\u800c\u5df2\uff0c\u4ecb\u7d39\u5b8c\u4e86\u55ae\u5143\u6e2c\u8a66\uff0c\u6211\u5011\u4f86\u770b\u770b\u8981\u600e\u9ebc\u64b0\u5beb\u7aef\u5c0d\u7aef (End-to-end) \u7684\u6e2c\u8a66\u5427\uff01"}),"\n",(0,t.jsx)(n.h2,{id:"cypress",children:"Cypress"}),"\n",(0,t.jsxs)(n.p,{children:["\u9019\u908a\u6211\u4ee5 React \u6bd4\u8f03\u5e38\u4f7f\u7528\u7684 E2E \u6e2c\u8a66\u5957\u4ef6 ",(0,t.jsx)(n.a,{href:"https://www.cypress.io/",children:"Cypress"})," \u4f86\u4ecb\u7d39\uff0cCypress \u63d0\u4f9b\u4e86\u7c21\u55ae\u7684\u4ecb\u9762\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u5feb\u901f\u7684\u5beb\u51fa E2E \u6e2c\u8a66\uff0c\u800c\u4e14 Testing Library \u4e5f\u6709\u63d0\u4f9b ",(0,t.jsx)(n.a,{href:"https://testing-library.com/docs/cypress-testing-library/intro/",children:"Cypress Testing Library"})," \u8b93\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 Testing Library \u7684\u8a9e\u6cd5\u4f86\u5beb E2E \u6e2c\u8a66\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88dd-cypress",children:"\u5b89\u88dd Cypress"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install cypress --save-dev\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u57f7\u884c\u7684\u6642\u5019\u53ea\u8981\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx cypress open\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b21\u4f7f\u7528\u6642\u6703\u986f\u793a\u5169\u500b\u9078\u9805\u8b93\u4f60\u9078\uff0c\u4e00\u500b\u662f ",(0,t.jsx)(n.strong,{children:"E2E Testing"})," \u53e6\u4e00\u500b\u662f ",(0,t.jsx)(n.strong,{children:"Component Testing"}),"\uff0c\u5dee\u5225\u5728\u65bc E2E Testing \u6e2c\u8a66\u7684\u662f\u6574\u500b\u61c9\u7528\u7a0b\u5f0f\uff0c\u800c Component Testing \u6e2c\u8a66\u7684\u662f\u55ae\u4e00\u5143\u4ef6\uff0c\u9019\u908a\u6211\u5011\u5148\u9078\u64c7 E2E Testing\u3002"]}),"\n",(0,t.jsx)(i.E,{src:r}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u8457\u4ed6\u6703\u81ea\u52d5\u5e6b\u4f60\u589e\u52a0\u56db\u500b\u6a94\u6848"}),"\n",(0,t.jsx)(i.E,{src:l.Z}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cypress.config.ts\uff1acypress \u7684\u8a2d\u5b9a\u6a94"}),"\n",(0,t.jsx)(n.li,{children:"cypress/support/e2e.ts\uff1a\u5728\u6bcf\u500b\u6e2c\u8a66\u6a94\u6848\u57f7\u884c\u524d\u6703\u5148\u57f7\u884c\u7684\u6a94\u6848"}),"\n",(0,t.jsx)(n.li,{children:"cypress/support/commands.ts\uff1a\u81ea\u5b9a\u7fa9\u7684\u57f7\u884c\u6307\u4ee4"}),"\n",(0,t.jsx)(n.li,{children:"cypress/fixtures/example.json\uff1a\u81ea\u5b9a\u7fa9\u7684\u5047(\u56fa\u5b9a)\u8cc7\u6599"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u518d\u4f86\u53ef\u4ee5\u9078\u64c7\u4f7f\u7528\u54ea\u500b\u700f\u89bd\u5668\u505a\u6e2c\u8a66\uff0c\u9019\u908a\u6211\u5011\u9078\u64c7 Chrome\u3002"}),"\n",(0,t.jsx)(i.E,{src:o.Z}),"\n",(0,t.jsx)(n.p,{children:"\u9078\u64c7\u5b8c\u5f8c\u5c31\u53ef\u4ee5\u958b\u59cb\u5beb\u6e2c\u8a66\u4e86\uff0c\u4ed6\u6703\u81ea\u52d5\u5e6b\u4f60\u958b\u555f\u4e00\u500b\u700f\u89bd\u5668\uff0c\u4e26\u4e14\u5728\u5de6\u908a\u986f\u793a\u6240\u6709\u7684\u6e2c\u8a66\u6a94\u6848\uff0c\u9ede\u64ca\u5f8c\u5c31\u53ef\u4ee5\u958b\u59cb\u5beb\u6e2c\u8a66\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9019\u908a\u4ee5\u5b98\u65b9\u63d0\u4f9b\u7684\u7bc4\u4f8b\u4f86\u770b\u770b Cypress \u7684\u6e2c\u8a66\u6d41\u7a0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'/// <reference types="cypress" />\n\ndescribe("example to-do app", () => {\n  beforeEach(() => {\n    cy.visit("https://example.cypress.io/todo");\n  });\n\n  it("displays two todo items by default", () => {\n    cy.get(".todo-list li").should("have.length", 2);\n    cy.get(".todo-list li").first().should("have.text", "Pay electric bill");\n    cy.get(".todo-list li").last().should("have.text", "Walk the dog");\n  });\n\n  it("can add new todo items", () => {\n    const newItem = "Feed the cat";\n    cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);\n    cy.get(".todo-list li")\n      .should("have.length", 3)\n      .last()\n      .should("have.text", newItem);\n  });\n\n  it("can check off an item as completed", () => {\n    cy.contains("Pay electric bill")\n      .parent()\n      .find("input[type=checkbox]")\n      .check();\n    cy.contains("Pay electric bill")\n      .parents("li")\n      .should("have.class", "completed");\n  });\n\n  context("with a checked task", () => {\n    beforeEach(() => {\n      cy.contains("Pay electric bill")\n        .parent()\n        .find("input[type=checkbox]")\n        .check();\n    });\n\n    it("can filter for uncompleted tasks", () => {\n      cy.contains("Active").click();\n      cy.get(".todo-list li")\n        .should("have.length", 1)\n        .first()\n        .should("have.text", "Walk the dog");\n      cy.contains("Pay electric bill").should("not.exist");\n    });\n\n    it("can filter for completed tasks", () => {\n      cy.contains("Completed").click();\n\n      cy.get(".todo-list li")\n        .should("have.length", 1)\n        .first()\n        .should("have.text", "Pay electric bill");\n\n      cy.contains("Walk the dog").should("not.exist");\n    });\n\n    it("can delete all completed tasks", () => {\n      cy.contains("Clear completed").click();\n      cy.get(".todo-list li")\n        .should("have.length", 1)\n        .should("not.have.text", "Pay electric bill");\n      cy.contains("Clear completed").should("not.exist");\n    });\n  });\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u9019\u662f\u4e00\u6bb5\u6e2c\u8a66 To-do List \u662f\u5426\u904b\u4f5c\u6b63\u5e38\u7684\u6e2c\u8a66\u78bc\uff0c\u53ef\u4ee5\u770b\u5230\u5beb\u8d77\u4f86\u5176\u5be6\u8ddf Jest \u5f88\u50cf\uff0c\u53ea\u4e0d\u6703 Cypress \u4f7f\u7528\u4e86\u66f4\u591a\u5728\u6e2c\u8a66 UI \u756b\u9762\u7684\u8a9e\u6cd5\uff0c\u50cf\u662f ",(0,t.jsx)(n.code,{children:"cy.get()"}),"\u3001",(0,t.jsx)(n.code,{children:"cy.contains()"}),"\u3001",(0,t.jsx)(n.code,{children:"cy.parent()"}),"\u3001",(0,t.jsx)(n.code,{children:"cy.find()"})," \u7b49\u7b49\uff0c\u800c\u4e14\u6bd4\u8d77 Testing Library \u5728\u9078\u64c7\u5143\u7d20\u7684\u8a9e\u6cd5\u4e0a\u66f4\u7c21\u55ae\uff0c\u662f\u4f7f\u7528 CSS Selector \u4f86\u9078\u64c7\u5143\u7d20\uff0c\u800c\u4e0d\u662f\u50cf Testing Library \u90a3\u6a23\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"getByRole"}),"\u3001",(0,t.jsx)(n.code,{children:"getByLabelText"})," \u7b49\u7b49\uff0c\u9019\u6a23\u7684\u597d\u8655\u662f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u700f\u89bd\u5668\u7684\u958b\u767c\u8005\u5de5\u5177\u4f86\u9078\u64c7\u5143\u7d20\uff0c\u800c\u4e14\u4e5f\u4e0d\u7528\u64d4\u5fc3\u5143\u7d20\u7684\u5c64\u7d1a\u95dc\u4fc2\uff0c\u4f46\u7f3a\u9ede\u5c31\u662f\u5982\u679c\u5143\u7d20\u7684\u5c64\u7d1a\u95dc\u4fc2\u6539\u8b8a\u4e86\uff0c\u5c31\u9700\u8981\u91cd\u65b0\u4fee\u6539\u6e2c\u8a66\u78bc\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5be6\u969b\u8dd1\u8d77\u4f86\u7684\u756b\u9762\u5982\u4e0b"}),"\n",(0,t.jsx)(i.E,{src:a.Z}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u4e00\u7bc7\u4f86\u628a\u4e4b\u524d\u5beb\u7684\u7a0b\u5f0f\u78bc\u8a66\u8457\u7528 Cypress \u4f86\u6e2c\u8a66\u770b\u770b\u5427\uff01"})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},5397:(e,n,s)=>{s.d(n,{E:()=>c});s(7294);var t=s(5893);const c=e=>{let{src:n,width:s="100%",center:c=!1,style:i={}}=e;const r={width:`min(100%,${s})`,display:c?"block":"inline-block",margin:c?"0 auto":"0"};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:n,style:{...r}}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},9472:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/day23-2-f01798723de3fd7d80ac5ce661557122.jpg"},8116:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/day23-3-d7339f3e0c64819526934adb3e481db9.jpg"},8875:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/day23-4-7b95ae4e5d0459f90cabe0d82b712ce3.gif"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(7294);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);