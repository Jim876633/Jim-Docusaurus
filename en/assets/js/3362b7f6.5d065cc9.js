"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8740],{10:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=t(5893),d=t(1151),s=t(5397);const a=t.p+"assets/images/day19-1-55f481f8373bca7dc0afa46da83ef1a3.gif",i={title:"[Day 19] React + Jest Redux Toolkit \u6e2c\u8a66",tags:["ITHome 2023"]},c=void 0,r={id:"ITHome2023/day19",title:"[Day 19] React + Jest Redux Toolkit \u6e2c\u8a66",description:"\u9019\u4e00\u7bc7\u7684\u6e2c\u8a66\u6bd4\u8f03\u504f\u5c08\u5c6c React \u7684 Redux Toolkit \u6e2c\u8a66\uff0c\u5982\u679c\u6c92\u6709\u4f7f\u7528 Redux \u7684\u8a71\uff0c\u53ef\u4ee5\u8df3\u904e\u9019\u4e00\u7bc7\uff5e",source:"@site/docs/ITHome2023/day19.mdx",sourceDirName:"ITHome2023",slug:"/ITHome2023/day19",permalink:"/en/ITHome2023/day19",draft:!1,unlisted:!1,tags:[{label:"ITHome 2023",permalink:"/en/tags/it-home-2023"}],version:"current",lastUpdatedAt:1699949914,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{title:"[Day 19] React + Jest Redux Toolkit \u6e2c\u8a66",tags:["ITHome 2023"]},sidebar:"tutorialSidebar",previous:{title:" [Day 18] React + Jest API (MSW) \u6e2c\u8a66 (AI)",permalink:"/en/ITHome2023/day18"},next:{title:"[Day 20] React + Jest Redux Toolkit \u6e2c\u8a66 (AI)",permalink:"/en/ITHome2023/day20"}},l={},u=[{value:"\u7a0b\u5f0f\u78bc",id:"\u7a0b\u5f0f\u78bc",level:2},{value:"redux toolkit \u6e2c\u8a66",id:"redux-toolkit-\u6e2c\u8a66",level:2},{value:"TodoPage \u6e2c\u8a66",id:"todopage-\u6e2c\u8a66",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}];function p(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["\u9019\u4e00\u7bc7\u7684\u6e2c\u8a66\u6bd4\u8f03\u504f\u5c08\u5c6c React \u7684 ",(0,n.jsx)(o.a,{href:"https://redux-toolkit.js.org/",children:"Redux Toolkit"})," \u6e2c\u8a66\uff0c\u5982\u679c\u6c92\u6709\u4f7f\u7528 Redux \u7684\u8a71\uff0c\u53ef\u4ee5\u8df3\u904e\u9019\u4e00\u7bc7\uff5e"]}),"\n",(0,n.jsx)(s.E,{src:a}),"\n",(0,n.jsx)(o.h2,{id:"\u7a0b\u5f0f\u78bc",children:"\u7a0b\u5f0f\u78bc"}),"\n",(0,n.jsxs)(o.p,{children:["\u4ee5 TodoList \u70ba\u4f8b\uff0c\u6703\u6709\u4e00\u500b ",(0,n.jsx)(o.code,{children:"todoSlice"}),"\uff0c\u88e1\u9762\u6709 ",(0,n.jsx)(o.code,{children:"addTodo"}),"\u3001",(0,n.jsx)(o.code,{children:"removeTodo"}),"\u3001",(0,n.jsx)(o.code,{children:"toggleTodo"})," \u4e09\u500b action\uff0c\u6211\u5011\u6703\u6e2c\u8a66\u9019\u4e09\u500b action \u662f\u5426\u6b63\u5e38\u904b\u4f5c\u3002"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:'export const todoSlice = createSlice({\n  name: "todo",\n  initialState,\n  reducers: {\n    addTodo: (state, action: PayloadAction<string>) => {\n      state.todoList.push({\n        title: action.payload,\n        id: Math.random(),\n        isDone: false,\n      });\n    },\n    removeTodo: (state, action: PayloadAction<number>) => {\n      state.todoList = state.todoList.filter(\n        (todo) => todo.id !== action.payload\n      );\n    },\n    toggleTodo: (state, action: PayloadAction<number>) => {\n      state.todoList = state.todoList.map((todo) =>\n        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo\n      );\n    },\n  },\n});\n'})}),"\n",(0,n.jsxs)(o.p,{children:["TodoPage \u5247\u6703\u4f7f\u7528\u5230 ",(0,n.jsx)(o.code,{children:"todoSlice"}),"\uff0c\u4e26\u4e14\u4f7f\u7528 ",(0,n.jsx)(o.code,{children:"useSelector"})," \u53d6\u5f97 ",(0,n.jsx)(o.code,{children:"todoList"}),"\uff0c\u4e26\u4e14\u4f7f\u7528 ",(0,n.jsx)(o.code,{children:"useDispatch"})," \u53bb dispatch action\u3002"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-jsx",children:'import { addTodo, removeTodo, toggleTodo } from "@/store/todo";\nimport useAppDispatch from "@/utils/hooks/useAppDispatch";\nimport useAppSelector from "@/utils/hooks/useAppSelector";\nimport { useState } from "react";\nimport styled from "./index.module.scss";\n\nexport const TodoPage = () => {\n  const todoList = useAppSelector((state) => state.todo.todoList);\n  const dispatch = useAppDispatch();\n\n  const [todo, setTodo] = useState("");\n\n  const addTodoHandler = () => {\n    dispatch(addTodo(todo));\n    setTodo("");\n  };\n\n  return (\n    <div className={styled.container}>\n      <input\n        type=\'text\'\n        value={todo}\n        onChange={(e) => setTodo(e.target.value)}\n      />\n      <button onClick={addTodoHandler}>ADD</button>\n      {todoList.map((todo) => (\n        <li\n          key={todo.id}\n          className={\n            todo.isDone ? `${styled.todo} ${styled.done}` : styled.todo\n          }\n          onClick={() => dispatch(toggleTodo(todo.id))}\n        >\n          <input type=\'checkbox\' checked={todo.isDone} readOnly />\n          <span>{todo.title}</span>\n          <button onClick={() => dispatch(removeTodo(todo.id))}> remove</button>\n        </li>\n      ))}\n    </div>\n  );\n};\n'})}),"\n",(0,n.jsx)(o.p,{children:"\u5728\u6e2c\u8a66\u6642\uff0c\u5c31\u6703\u5206\u5225\u5c31\u9019\u5169\u500b\u90e8\u5206\u9032\u884c\u6e2c\u8a66\u3002"}),"\n",(0,n.jsx)(o.h2,{id:"redux-toolkit-\u6e2c\u8a66",children:"redux toolkit \u6e2c\u8a66"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-jsx",children:'import todoSlice, { TodoState, addTodo, removeTodo, toggleTodo } from "./todo";\n\ndescribe("todoSlice", () => {\n  let initialState: { todoList: TodoState[] };\n  const todo1 = { id: 1, title: "Test Todo 1", isDone: false };\n  const todo2 = { id: 2, title: "Test Todo 2", isDone: false };\n  const todo3 = { id: 3, title: "Test Todo 3", isDone: false };\n  const state = { todoList: [todo1, todo2, todo3] };\n\n  beforeEach(() => {\n    initialState = { todoList: [] };\n  });\n\n  it("\u7576 addTodo \u51fd\u5f0f\u8f38\u5165 \'Test Todo\' todoList \u65b0\u589e\u4e00\u9805 todo title \u70ba Test Todo \u4e14 isDone \u70ba false", () => {\n    const actual = todoSlice.reducer(initialState, addTodo("Test Todo"));\n    expect(actual.todoList.length).toEqual(1);\n    expect(actual.todoList[0].title).toEqual("Test Todo");\n    expect(actual.todoList[0].isDone).toEqual(false);\n  });\n\n  it("\u7576 removeTodo \u51fd\u5f0f\u8f38\u5165 2 \u5247\u53ea\u79fb\u9664 id \u70ba 2 \u7684 todo", () => {\n    const actual = todoSlice.reducer(state, removeTodo(2));\n    expect(actual.todoList.length).toEqual(2);\n    expect(actual.todoList).toContain(todo1);\n    expect(actual.todoList).toContain(todo3);\n    expect(actual.todoList).not.toContain(todo2);\n  });\n\n  it("\u7576 toggleTodo \u51fd\u5f0f\u8f38\u5165 2 \u5247 id \u70ba 2 \u7684 todo isDone \u70ba true", () => {\n    const actual = todoSlice.reducer(state, toggleTodo(2));\n    expect(actual.todoList[1].isDone).toEqual(true);\n  });\n});\n'})}),"\n",(0,n.jsx)(o.p,{children:"\u4f9d\u64da\u4e0d\u540c\u60c5\u6cc1\u7d66\u5165\u76f8\u5c0d\u61c9\u7684\u521d\u59cb\u503c\uff0c\u4e26\u4e14\u6e2c\u8a66\u662f\u5426\u6709\u6b63\u78ba\u7684\u56de\u50b3\u503c\u3002"}),"\n",(0,n.jsx)(o.h2,{id:"todopage-\u6e2c\u8a66",children:"TodoPage \u6e2c\u8a66"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-jsx",children:'import { render, screen } from "@testing-library/react";\nimport { Provider } from "react-redux";\nimport { store } from "@/store";\nimport { TodoPage } from ".";\nimport userEvent from "@testing-library/user-event";\n\ndescribe("TodoPage", () => {\n  const user = userEvent.setup();\n  beforeEach(() => {\n    render(\n      <Provider store={store}>\n        <TodoPage />\n      </Provider>\n    );\n  });\n\n  it("\u7576\u8f38\u5165\u300cNew Todo\u300d\u4e26\u9ede\u64ca add \u6309\u9215\uff0c\u986f\u793a\u300cNew Todo\u300d\u6587\u5b57", async () => {\n    const inputElement = screen.getByRole("textbox");\n    const addButtonElement = screen.getByRole("button", { name: /add/i });\n\n    await user.type(inputElement, "New Todo");\n    await user.click(addButtonElement);\n\n    const todoElement = screen.getByText("New Todo");\n    expect(todoElement).toBeInTheDocument();\n  });\n\n  it("\u7576\u9ede\u64ca\u300cNew Todo\u300d\u6587\u5b57\uff0ccheckbox \u6703\u88ab\u52fe\u9078", async () => {\n    const todoElement = screen.getByText("New Todo");\n    await user.click(todoElement);\n\n    const checkboxElement = screen.getByRole("checkbox");\n    expect(checkboxElement).toBeChecked();\n  });\n\n  it("\u7576\u9ede\u64ca remove \u6309\u9215\uff0c\'New Todo\' \u6587\u5b57\u4e0d\u6703\u986f\u793a", async () => {\n    const removeButtonElement = screen.getByRole("button", { name: /remove/i });\n    await user.click(removeButtonElement);\n\n    const todoElement = screen.queryByText("New Todo");\n    expect(todoElement).not.toBeInTheDocument();\n  });\n});\n'})}),"\n",(0,n.jsx)(o.p,{children:"TodoPage \u5c31\u6703\u662f\u6e2c\u8a66\u4f7f\u7528\u8005\u64cd\u4f5c\u7684\u90e8\u5206\uff0c\u662f\u5426\u6709\u6b63\u78ba\u7684 UI \u986f\u793a\u3001\u52fe\u9078\u3001\u79fb\u9664\u7b49\u7b49\u3002"}),"\n",(0,n.jsx)(o.h2,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,n.jsx)(o.p,{children:"Redux toolkit \u7684\u6e2c\u8a66\u4e4d\u807d\u4e4b\u4e0b\u597d\u50cf\u5f88\u96e3\u6e2c\uff0c\u4e0d\u904e\u56e0\u70ba redux \u5c31\u662f\u5404\u7a2e\u51fd\u5f0f\u7d71\u4e00\u7ba1\u7406\uff0c\u6240\u4ee5\u6e2c\u8a66\u8d77\u4f86\u4e5f\u4e0d\u6703\u592a\u96e3\uff0c\u5c31\u50cf\u662f\u4e00\u822c\u7684\u51fd\u5f0f\u6e2c\u8a66\uff0c\u53ea\u4e0d\u904e\u8981\u4f9d\u64da\u4e0d\u540c\u7684\u60c5\u6cc1\u7d66\u5165\u4e0d\u540c\u7684\u521d\u59cb\u503c\uff0c\u624d\u80fd\u6e2c\u8a66\u51fa\u4e0d\u540c\u7684\u7d50\u679c\u3002"})]})}function m(e={}){const{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5397:(e,o,t)=>{t.d(o,{E:()=>d});t(7294);var n=t(5893);const d=e=>{let{src:o,width:t="100%",center:d=!1,style:s={}}=e;const a={width:`min(100%,${t})`,display:d?"block":"inline-block",margin:d?"0 auto":"0"};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:o,style:{...a}}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},1151:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>a});var n=t(7294);const d={},s=n.createContext(d);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);