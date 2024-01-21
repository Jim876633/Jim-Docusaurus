import { useQuery } from "@tanstack/react-query";
import { Spin, Tag } from "antd";
import React, { useState } from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import useMedia from "@site/src/hooks/useMedia.jsx";
import { isDev } from "../constants/common";

const DocList = () => {
  const { sm } = useMedia();
  const { items } = useDocsSidebar();
  const docs = formatDocList(items);

  const [showCount, setShowCount] = useState(10);

  const { isLoading, data } = useQuery({
    queryKey: ["docs"],
    queryFn: () => fetchDocs(docs),
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const clickMoreHandler = () => {
    if (data.length > showCount) {
      setShowCount(showCount + 10);
    }
  };

  if (isLoading) {
    return (
      <>
        <Spin />
        <br />
      </>
    );
  }
  if (data.length === 0) {
    return null;
  }
  return (
    <div id='jim-doc-list'>
      <Tag color='var(--tag-color)' className='flash'>
        Latest Article
      </Tag>
      <br />
      <ul className='doc-list'>
        {data.slice(0, showCount).map((doc) => {
          return sm ? (
            <li key={doc.id} className='intro_sm'>
              <span>{doc.date?.slice(5)}</span>
              <a href={doc.href}>{doc.title}</a>
            </li>
          ) : (
            <li key={doc.id}>
              {doc.date} 更新文章 <a href={doc.href}>{doc.title}</a> -{" "}
              {doc.label}
            </li>
          );
        })}
      </ul>
      {showCount < data.length ? (
        <button className='more_btn' onClick={clickMoreHandler}>
          <span>...</span>
        </button>
      ) : (
        <span>...End</span>
      )}
    </div>
  );
};

export default DocList;

/**
 * format doc item from useDocsSidebar()
 * @param {*} items
 * @returns
 */
function formatDocList(items) {
  return items.flatMap((item) => {
    if (!item.items) {
      const label = item.href.split("/")[1] || "Intro";
      return {
        title: item.label,
        id: item.docId,
        href: item.href,
        label,
      };
    } else {
      return formatDocList(item.items);
    }
  });
}

/**
 * fetch docs list
 * @param  docsList
 * @returns
 */
async function fetchDocs(docsList) {
  const docs = [...docsList];
  const domain = isDev ? "http://localhost:3000" : "https://jimhuang.dev";
  const docUrlList = docsList.map((doc) => `${domain}${doc.href}`);
  const results = await Promise.all(
    docUrlList.map((url) => fetch(url).then((res) => res.text()))
  );

  results.forEach((data, i) => {
    // translate to html
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    const body = html.body;
    const time = body.querySelector("time");

    if (time && !isDev) {
      const timeStamp = time.getAttribute("datetime");
      docs[i].timeStamp = new Date(timeStamp).getTime();
      docs[i].date = new Date(timeStamp).toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    }

    // dev mode 取不到實際的 html
    if (isDev) {
      const today = new Date();
      docs[i].timeStamp = today.getTime();
      docs[i].date = today.toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    }
  });
  docs.sort((a, b) => b.timeStamp - a.timeStamp);
  const pureDocs = docs.filter((d) => d.label !== "Intro");
  return pureDocs;
}
