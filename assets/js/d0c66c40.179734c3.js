"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7430],{7750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(5893),a=t(1151);const s={title:"[Day 12] React + Jest \u5f48\u7a97\u6e2c\u8a66",tags:["ITHome 2023"]},l=void 0,r={id:"ITHome2023/day12",title:"[Day 12] React + Jest \u5f48\u7a97\u6e2c\u8a66",description:"\u5728\u5c08\u6848\u4e2d\u5e7e\u4e4e\u90fd\u6703\u6709\u5f48\u7a97\u7684\u529f\u80fd\uff0c\u6211\u9019\u908a\u4f7f\u7528 react-modal \u4f86\u5be6\u4f5c\u5f48\u7a97\uff0c\u4e26\u4e14\u4f7f\u7528 useContext \u4f86\u7ba1\u7406\u5f48\u7a97\u7684\u72c0\u614b\uff0c\u6240\u4ee5\u9019\u908a\u5206\u6210\u5169\u500b\u90e8\u5206\u4f86\u6e2c\u8a66\uff0c\u4e00\u500b\u662f ModalPage \u9801\u9762\u958b\u555f Modal\uff0c\u4ee5\u53ca Modal \u5143\u4ef6\u95dc\u9589\u7684\u6e2c\u8a66\u3002",source:"@site/docs/ITHome2023/day12.mdx",sourceDirName:"ITHome2023",slug:"/ITHome2023/day12",permalink:"/ITHome2023/day12",draft:!1,unlisted:!1,tags:[{label:"ITHome 2023",permalink:"/tags/it-home-2023"}],version:"current",lastUpdatedAt:1699949914,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",frontMatter:{title:"[Day 12] React + Jest \u5f48\u7a97\u6e2c\u8a66",tags:["ITHome 2023"]},sidebar:"tutorialSidebar",previous:{title:"[Day 11] React + Jest \u8def\u5f91\u6e2c\u8a66 (AI)",permalink:"/ITHome2023/day11"},next:{title:"[Day 13] React + Jest \u5f48\u7a97\u6e2c\u8a66 (AI)",permalink:"/ITHome2023/day13"}},c={},d=[{value:"ModalPage \u9801\u9762\u6e2c\u8a66",id:"modalpage-\u9801\u9762\u6e2c\u8a66",level:2},{value:"Modal \u5143\u4ef6\u6e2c\u8a66",id:"modal-\u5143\u4ef6\u6e2c\u8a66",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u5728\u5c08\u6848\u4e2d\u5e7e\u4e4e\u90fd\u6703\u6709\u5f48\u7a97\u7684\u529f\u80fd\uff0c\u6211\u9019\u908a\u4f7f\u7528 ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/react-modal",children:"react-modal"})," \u4f86\u5be6\u4f5c\u5f48\u7a97\uff0c\u4e26\u4e14\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"useContext"})," \u4f86\u7ba1\u7406\u5f48\u7a97\u7684\u72c0\u614b\uff0c\u6240\u4ee5\u9019\u908a\u5206\u6210\u5169\u500b\u90e8\u5206\u4f86\u6e2c\u8a66\uff0c\u4e00\u500b\u662f ModalPage \u9801\u9762\u958b\u555f Modal\uff0c\u4ee5\u53ca Modal \u5143\u4ef6\u95dc\u9589\u7684\u6e2c\u8a66\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"modalpage-\u9801\u9762\u6e2c\u8a66",children:"ModalPage \u9801\u9762\u6e2c\u8a66"}),"\n",(0,o.jsx)(n.p,{children:"\u7a0b\u5f0f\u78bc\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { useModalContext } from "@/context/ModalContext";\nimport styled from "./index.module.scss";\nimport { article1, article2 } from "./data/modal.data";\n\nexport const ModalPage = () => {\n  const { openModal } = useModalContext();\n  return (\n    <div className={styled.btn_list}>\n      <button onClick={() => openModal(article1)}>Article1</button>\n      <button onClick={() => openModal(article2)}>Article2</button>\n    </div>\n  );\n};\n'})}),"\n",(0,o.jsxs)(n.p,{children:["ModalPage \u9801\u9762\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"useModalContext()"})," \u88e1\u7684 ",(0,o.jsx)(n.code,{children:"openModal()"})," \u4f86\u63a7\u5236\u958b\u555f\u5f48\u7a97\uff0c\u4e26\u50b3\u5165\u8981\u986f\u793a\u7684\u6587\u5b57\uff0c"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u6e2c\u8a66\u7684\u6642\u5019\u5c31\u9700\u8981\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"jest.mock"})," \u6a21\u64ec ",(0,o.jsx)(n.code,{children:"openModal()"}),"\uff0c\u4f86\u5224\u65b7\u662f\u5426\u6709\u88ab\u547c\u53eb\u53ca\u53c3\u6578\u6709\u7121\u6b63\u78ba\u50b3\u5165\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u6e2c\u8a66\u6848\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'describe("modal testing", () => {\n  it("\u9ede\u64ca Article1 \u547c\u53eb openModal \u51fd\u5f0f\u5e36\u5165 article1 \u6587\u5b57", async () => {});\n  it("\u9ede\u64ca Article2 \u547c\u53eb openModal \u51fd\u5f0f\u5e36\u5165 article2 \u6587\u5b57", async () => {});\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u5be6\u969b\u6e2c\u8a66\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { render, screen } from "@testing-library/react";\nimport userEvent from "@testing-library/user-event";\nimport { ModalPage } from ".";\nimport { article1 } from "./data/modal.data";\nimport { ModalContext } from "@/context/ModalContext";\n\ndescribe("modal testing", () => {\n  const user = userEvent.setup();\n  const openModal = jest.fn();\n  const contextProps = {\n    openModal,\n    closeModal: jest.fn(),\n    isOpen: false,\n    content: "",\n  };\n\n  it("\u9ede\u64ca Article1 \u547c\u53eb openModal \u51fd\u5f0f\u5e36\u5165 article1 \u6587\u5b57", async () => {\n    render(\n      <ModalContext.Provider value={contextProps}>\n        <ModalPage />\n      </ModalContext.Provider>\n    );\n    const article1Btn = screen.getByRole("button", { name: /article1/i });\n    await user.click(article1Btn);\n    expect(openModal).toHaveBeenCalledWith(article1);\n  });\n});\n'})}),"\n",(0,o.jsx)(n.h2,{id:"modal-\u5143\u4ef6\u6e2c\u8a66",children:"Modal \u5143\u4ef6\u6e2c\u8a66"}),"\n",(0,o.jsx)(n.p,{children:"\u518d\u4f86\u662f Modal \u5143\u4ef6\u7684\u90e8\u5206\uff0c\u8981\u6e2c\u8a66\u7684\u662f Modal \u5143\u4ef6\u662f\u5426\u6709\u986f\u793a\u6b63\u78ba\u7684\u6587\u5b57\uff0c\u4ee5\u53ca\u662f\u5426\u6709\u6b63\u78ba\u7684\u95dc\u9589\u5f48\u7a97\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u7a0b\u5f0f\u78bc\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { useModalContext } from "@/context/ModalContext";\nimport ReactModal from "react-modal";\nimport styled from "./index.module.scss";\n\nexport const Modal = () => {\n  const { isOpen, closeModal, content } = useModalContext();\n  return (\n    <ReactModal\n      isOpen={isOpen}\n      overlayClassName={styled.overlay}\n      className={styled.modal}\n      onRequestClose={closeModal}\n      ariaHideApp={false}\n    >\n      <button\n        data-testid=\'close-btn\'\n        className={styled.close_btn}\n        onClick={closeModal}\n      >\n        X\n      </button>\n      {content}\n    </ReactModal>\n  );\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u6e2c\u8a66\u6848\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'describe("modal testing", () => {\n  it("\u9ede\u64ca\u95dc\u9589\u6309\u9215\uff0c\u547c\u53eb closeModal \u51fd\u5f0f", async () => {});\n  it("\u8f38\u5165 \'test content\' \u6587\u5b57\uff0c\u756b\u9762\u986f\u793a \'test content\' \u6587\u5b57", async () => {});\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u5be6\u969b\u6e2c\u8a66\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { Modal } from ".";\nimport { render, screen } from "@testing-library/react";\nimport userEvent from "@testing-library/user-event";\nimport { ModalContext } from "@/context/ModalContext";\n\ndescribe("modal testing", () => {\n  const user = userEvent.setup();\n  const closeModal = jest.fn();\n  const contextProps = {\n    openModal: jest.fn(),\n    closeModal,\n    isOpen: true,\n    content: "test content",\n  };\n\n  it("\u9ede\u64ca\u95dc\u9589\u6309\u9215\uff0c\u547c\u53eb closeModal \u51fd\u5f0f", async () => {\n    render(\n      <ModalContext.Provider value={contextProps}>\n        {<Modal />}\n      </ModalContext.Provider>\n    );\n    const closeBtn = screen.getByTestId("close-btn");\n    await user.click(closeBtn);\n    expect(closeModal).toHaveBeenCalled();\n  });\n\n  it("\u8f38\u5165 \'test content\' \u6587\u5b57\uff0c\u756b\u9762\u986f\u793a \'test content\' \u6587\u5b57", async () => {\n    render(\n      <ModalContext.Provider value={contextProps}>\n        {<Modal />}\n      </ModalContext.Provider>\n    );\n    expect(screen.getByText("test content")).toBeInTheDocument();\n  });\n});\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u50cf ",(0,o.jsx)(n.code,{children:"useContext()"})," \u7b49\u5171\u7528\u72c0\u614b\u7684\u6642\u5019\uff0c\u9700\u8981\u4f9d\u64da\u5404\u500b\u4f7f\u7528\u5143\u4ef6\u4f86\u5206\u958b\u6e2c\u8a66\uff0c\u5927\u90e8\u5206\u90fd\u9084\u662f\u900f\u904e\u66f4\u6539 ",(0,o.jsx)(n.code,{children:"useContext()"})," \u88e1\u9762\u7684\u72c0\u614b\u503c\uff0c\u4f86\u6e2c\u8a66\u51fd\u5f0f\u662f\u5426\u6709\u6b63\u78ba\u547c\u53eb\uff0c\u4ee5\u53ca\u756b\u9762\u662f\u5426\u6709\u6b63\u78ba\u986f\u793a\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var o=t(7294);const a={},s=o.createContext(a);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);