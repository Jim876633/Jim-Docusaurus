import { useQuery } from "@tanstack/react-query";
import { Spin, Tag } from "antd";
import React from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import useMedia from "@site/src/hooks/useMedia.jsx";

const DocList = () => {
  const { sm } = useMedia();
  const { items } = useDocsSidebar();
  const docs = formatDocList(items);

  const { isLoading, data } = useQuery({
    queryKey: ["docs"],
    queryFn: () => fetchDocs(docs),
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  if (isLoading) {
    return (
      <>
        <Spin />
        <br />
      </>
    );
  }
  return (
    <div id='jim-doc-list'>
      <Tag color='var(--tag-color)'>Latest 10 article</Tag>
      <br />
      <ul style={{ marginTop: "1rem" }}>
        {data.map((doc) => {
          return sm ? (
            <li key={doc.id}>
              {doc.date.slice(6)} <a href={doc.href}>{doc.title}</a>
            </li>
          ) : (
            <li key={doc.id}>
              {doc.date} 更新文章
              <a href={doc.href}>{doc.title}</a> - {doc.label}
            </li>
          );
        })}
      </ul>
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
      const label = item.href.split("/")[2] || "Intro";
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
  const docUrlList = docsList.map(
    (doc) => `https://jim876633.github.io${doc.href}`
  );
  const results = await Promise.all(
    docUrlList.map((url) => fetch(url).then((res) => res.text()))
  );

  results.forEach((data, i) => {
    // translate to html
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    const body = html.body;
    const time = body.querySelector("time");

    if (time) {
      const timeStamp = time.getAttribute("datetime");
      docs[i].timeStamp = new Date(timeStamp).getTime();
      docs[i].date = new Date(timeStamp).toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    }
  });
  docs.sort((a, b) => b.timeStamp - a.timeStamp);
  const pureDocs = docs.filter((d) => d.label !== "Intro");
  const lastTenDocs = pureDocs.slice(0, 10);
  return lastTenDocs;
}