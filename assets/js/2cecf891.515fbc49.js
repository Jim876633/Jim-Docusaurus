"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6985],{8911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var s=n(5893),i=n(1151),a=n(5397);const o=n.p+"assets/images/day21-1-2b87d998353856667817fdab48100376.gif",r={title:"[Day 21] React + Jest Redux Toolkit Query \u6e2c\u8a66",tags:["ITHome 2023"]},d=void 0,m={id:"ITHome2023/day21",title:"[Day 21] React + Jest Redux Toolkit Query \u6e2c\u8a66",description:"\u5728 Day14 \u6709\u63d0\u5230\u4e32\u63a5 API \u4f7f\u7528 @tanstack/react-query \u4f86\u7ba1\u7406\u72c0\u614b\uff0c\u800c\u5728 redux toolkit \u4e5f\u6709\u63d0\u4f9b redux toolkit query \u4f86\u7ba1\u7406\u72c0\u614b\uff0c\u9019\u908a\u5c31\u4f86\u770b\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 redux toolkit query \u4f86\u6e2c\u8a66\u3002",source:"@site/docs/ITHome2023/day21.mdx",sourceDirName:"ITHome2023",slug:"/ITHome2023/day21",permalink:"/ITHome2023/day21",draft:!1,unlisted:!1,tags:[{label:"ITHome 2023",permalink:"/tags/it-home-2023"}],version:"current",lastUpdatedAt:1699970253,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",frontMatter:{title:"[Day 21] React + Jest Redux Toolkit Query \u6e2c\u8a66",tags:["ITHome 2023"]},sidebar:"tutorialSidebar",previous:{title:"[Day 20] React + Jest Redux Toolkit \u6e2c\u8a66 (AI)",permalink:"/ITHome2023/day20"},next:{title:" [Day 22] React + Jest Redux Toolkit Query \u6e2c\u8a66 (AI)",permalink:"/ITHome2023/day22"}},u={},c=[{value:"\u7a0b\u5f0f\u78bc",id:"\u7a0b\u5f0f\u78bc",level:2},{value:"RTK Query \u6e2c\u8a66",id:"rtk-query-\u6e2c\u8a66",level:2},{value:"ItemListPage \u6e2c\u8a66",id:"itemlistpage-\u6e2c\u8a66",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u5728 ",(0,s.jsx)(t.a,{href:"https://jim876633.github.io/Jim-Docusaurus/ITHome2023/day14",children:"Day14"})," \u6709\u63d0\u5230\u4e32\u63a5 API \u4f7f\u7528 @tanstack/react-query \u4f86\u7ba1\u7406\u72c0\u614b\uff0c\u800c\u5728 redux toolkit \u4e5f\u6709\u63d0\u4f9b redux toolkit query \u4f86\u7ba1\u7406\u72c0\u614b\uff0c\u9019\u908a\u5c31\u4f86\u770b\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 redux toolkit query \u4f86\u6e2c\u8a66\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u9019\u908a\u5efa\u4e00\u500b\u53ef\u4ee5\u589e\u6e1b\u9805\u76ee\u4e26\u96a8\u6642\u66f4\u65b0\u7684 itemList\uff0c\u4e26\u4f7f\u7528 MSW \u4f86\u6a21\u64ec API \u7684\u56de\u50b3\u3002"}),"\n",(0,s.jsx)(a.E,{src:o}),"\n",(0,s.jsx)(t.h2,{id:"\u7a0b\u5f0f\u78bc",children:"\u7a0b\u5f0f\u78bc"}),"\n",(0,s.jsxs)(t.p,{children:["\u5efa\u7acb ",(0,s.jsx)(t.code,{children:"servers/itemList.ts"})," \u7684\u6a94\u6848\uff0c\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"createApi"})," \u4f86\u5efa\u7acb API\uff0c\u5206\u5225\u6709 ",(0,s.jsx)(t.code,{children:"getList"}),"\u3001",(0,s.jsx)(t.code,{children:"addItem"}),"\u3001",(0,s.jsx)(t.code,{children:"removeItem"})," \u4e09\u500b\u51fd\u5f0f\uff0c\u4f86\u7ba1\u7406 itemList \u7684\u72c0\u614b\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'export const itemListApi = createApi({\n  reducerPath: "itemListApi",\n  baseQuery: customBaseQuery,\n  tagTypes: ["Item"],\n  endpoints: (builder) => ({\n    getList: builder.query<ItemType[], void>({\n      query: () => "/list",\n      providesTags: ["Item"],\n    }),\n    addItem: builder.mutation<ItemType[], ItemType>({\n      query: (item) => ({\n        url: "/add",\n        method: "POST",\n        body: item,\n      }),\n      invalidatesTags: ["Item"],\n    }),\n    removeItem: builder.mutation<ItemType[], number>({\n      query: (id) => ({\n        url: "/delete",\n        method: "DELETE",\n        body: { id },\n      }),\n      invalidatesTags: ["Item"],\n    }),\n  }),\n});\n\nexport const { useGetListQuery, useAddItemMutation, useRemoveItemMutation } =\n  itemListApi;\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u63a5\u8457\u5728 ItemListPage \u88e1\u9762\u5f15\u7528\u51fd\u5f0f\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'import {\n  useAddItemMutation,\n  useGetListQuery,\n  useRemoveItemMutation,\n} from "@/servers/itemList";\nimport { useState } from "react";\nimport styled from "./index.module.scss";\n\nexport const ItemListPage = () => {\n  const [inputValue, setInputValue] = useState < string > "";\n\n  const { data: listQueryData, isLoading: isListQueryLoading } =\n    useGetListQuery();\n\n  const [addItem] = useAddItemMutation();\n  const [removeItem] = useRemoveItemMutation();\n\n  const addItemHandler = () => {\n    if (inputValue) {\n      addItem({ title: inputValue, id: Math.random() });\n      setInputValue("");\n    }\n  };\n\n  const deleteHandler = (id: number) => {\n    removeItem(id);\n  };\n\n  if (isListQueryLoading) return <div>Loading...</div>;\n\n  if (listQueryData) {\n    return (\n      <div className={styled.container}>\n        <div className={styled.inputBlock}>\n          <input\n            type=\'text\'\n            value={inputValue}\n            onChange={(e) => setInputValue(e.target.value)}\n          />\n          <button onClick={addItemHandler}>ADD</button>\n        </div>\n        <ul>\n          {listQueryData.map((item) => (\n            <li key={item.id}>\n              <span>{item.title}</span>\n              <button onClick={() => deleteHandler(item.id)}>Delete</button>\n            </li>\n          ))}\n        </ul>\n      </div>\n    );\n  }\n  return null;\n};\n'})}),"\n",(0,s.jsx)(t.h2,{id:"rtk-query-\u6e2c\u8a66",children:"RTK Query \u6e2c\u8a66"}),"\n",(0,s.jsxs)(t.p,{children:["\u8981\u6e2c\u8a66 RTK Query \u88e1\u7684\u51fd\u5f0f\uff0c\u9700\u8981\u7528\u5230 RTK \u7684 ",(0,s.jsx)(t.code,{children:"store.dispatch()"})," \u4f86\u9032\u884c\u547c\u53eb\uff0c\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u6703\u662f\u9019\u6a23\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { data } from "@/mocks/handlers/itemList";\nimport { ItemType, itemListApi } from "./itemList";\n\nimport { store } from "@/store";\n\ndescribe("Redux Toolkit Query API Tests", () => {\n  it("\u7576 store dispatch getList \u51fd\u5f0f\uff0c\u56de\u50b3\u4e09\u500b\u6b63\u78ba\u7684 data", async () => {\n    const result = await store.dispatch(\n      itemListApi.endpoints.getList.initiate()\n    );\n    expect(result.data?.length).toEqual(3);\n    expect(result.data).toEqual(data);\n  });\n\n  it("\u7576 store dispatch addItem \u51fd\u5f0f\uff0c\u50b3\u5165 mockItem\uff0c\u56de\u50b3\u56db\u500b\u6b63\u78ba\u7684 data", async () => {\n    const mockItem = {\n      id: 4,\n      title: "test 4",\n    };\n    const result = (await store.dispatch(\n      itemListApi.endpoints.addItem.initiate(mockItem)\n    )) as { data: ItemType[] };\n\n    expect(result.data.length).toEqual(4);\n    expect(result.data).toEqual(data);\n  });\n\n  it("\u7576 store dispatch removeItem \u51fd\u5f0f\uff0c\u50b3\u5165 id 1\uff0c\u56de\u50b3\u4e09\u500b\u6b63\u78ba\u7684 data", async () => {\n    const mockId = 1;\n    const result = (await store.dispatch(\n      itemListApi.endpoints.removeItem.initiate(mockId)\n    )) as { data: ItemType[] };\n\n    expect(result.data.length).toEqual(3);\n    expect(result.data).toEqual(data);\n  });\n});\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u9019\u908a\u4e00\u6a23\u4f7f\u7528 MSW \u5df2\u7d93\u5beb\u597d\u7684 data \u4f86\u9032\u884c\u65b7\u8a00\u7684\u5224\u65b7\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"itemlistpage-\u6e2c\u8a66",children:"ItemListPage \u6e2c\u8a66"}),"\n",(0,s.jsx)(t.p,{children:"ItemListPage \u7684\u6e2c\u8a66 \u5c31\u6703\u76f8\u5c0d\u6bd4\u8f03\u5bb9\u6613\uff0c\u53ef\u4ee5\u6e2c\u8a66\u7684\u60c5\u6cc1\u6709\u5f88\u591a\uff0c\u9019\u908a\u5c31\u5148\u5217\u51fa\u57fa\u672c\u7684\u529f\u80fd\u6e2c\u8a66\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'describe("ItemListPage testing", () => {\n  it("\u521d\u59cb\u756b\u9762\u986f\u793a mock data \u6240\u6709\u6b63\u78ba\u7684 title", async () => {});\n  it("\u7576\u4f7f\u7528\u8005\u8f38\u5165\u300ctest4\u300d\uff0c\u547c\u53eb mockAddItemMutation \u50b3\u5165 {title: \'test4\'}", async () => {});\n  it("\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u7b2c\u4e00\u500b Delete \u6309\u9215\uff0c\u547c\u53eb mockRemoveItemMutation \u50b3\u5165 1", async () => {});\n});\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u6e2c\u8a66\u7a0b\u5f0f\u78bc\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { data } from "@/mocks/handlers/itemList";\nimport {\n  useAddItemMutation,\n  useGetListQuery,\n  useRemoveItemMutation,\n} from "@/servers/itemList";\nimport { render, screen } from "@testing-library/react";\nimport userEvent from "@testing-library/user-event";\nimport { ItemListPage } from "./index";\n\njest.mock("@/servers/itemList", () => ({\n  useGetListQuery: jest.fn(),\n  useAddItemMutation: jest.fn(),\n  useRemoveItemMutation: jest.fn(),\n}));\n\ndescribe("ItemListPage testing", () => {\n  const user = userEvent.setup();\n  const mockListQueryData = data;\n\n  const mockAddItemMutation = jest.fn();\n  const mockRemoveItemMutation = jest.fn();\n\n  (useGetListQuery as jest.Mock).mockReturnValue({\n    data: mockListQueryData,\n    isLoading: false,\n  });\n  (useAddItemMutation as jest.Mock).mockReturnValue([mockAddItemMutation]);\n  (useRemoveItemMutation as jest.Mock).mockReturnValue([\n    mockRemoveItemMutation,\n  ]);\n  beforeEach(() => {\n    render(<ItemListPage />);\n  });\n\n  afterEach(() => {\n    jest.clearAllMocks();\n  });\n\n  it("\u521d\u59cb\u756b\u9762\u986f\u793a mock data \u6240\u6709\u6b63\u78ba\u7684 title", async () => {\n    mockListQueryData.forEach((item) => {\n      const itemElement = screen.getByText(item.title);\n      expect(itemElement).toBeInTheDocument();\n    });\n  });\n\n  it("\u7576\u4f7f\u7528\u8005\u8f38\u5165\u300ctest4\u300d\uff0c\u547c\u53eb mockAddItemMutation \u50b3\u5165 {title: \'test4\'}", async () => {\n    const inputElement = screen.getByRole("textbox");\n    const addButtonElement = screen.getByText("ADD", {\n      selector: "button",\n    });\n\n    await user.type(inputElement, "test4");\n    await user.click(addButtonElement);\n\n    expect(mockAddItemMutation).toHaveBeenCalledWith({\n      title: "test4",\n      id: expect.any(Number),\n    });\n  });\n\n  it("\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u7b2c\u4e00\u500b Delete \u6309\u9215\uff0c\u547c\u53eb mockRemoveItemMutation \u50b3\u5165 1", async () => {\n    const deleteButtonElement = screen.getAllByText("Delete", {\n      selector: "button",\n    })[0];\n\n    await user.click(deleteButtonElement);\n\n    expect(mockRemoveItemMutation).toHaveBeenCalledWith(1);\n  });\n});\n\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(t.p,{children:"Redux toolkit Query \u5728\u6e2c\u8a66\u6642\uff0c\u76f8\u8f03\u65bc\u4e00\u822c\u7684 redux \u6216\u662f react-query \u7684 API \u6e2c\u8a66\u6703\u76f8\u5c0d\u8907\u96dc\uff0c\u9700\u8981\u8003\u616e\u7684\u56e0\u7d20\u6bd4\u8f03\u591a\uff0c\u5728\u5beb RTK Query \u5728\u6e2c\u8a66\u6642\uff0c\u4e5f\u82b1\u4e86\u5f88\u591a\u6642\u9593\u5728\u7814\u7a76\uff0c\u5e0c\u671b\u9019\u7bc7\u6587\u7ae0\u53ef\u4ee5\u5e6b\u52a9\u5230\u5927\u5bb6\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5397:(e,t,n)=>{n.d(t,{E:()=>i});n(7294);var s=n(5893);const i=e=>{let{src:t,width:n="100%",center:i=!1,style:a={}}=e;const o={width:`min(100%,${n})`,display:i?"block":"inline-block",margin:i?"0 auto":"0"};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:t,style:{...o}}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);