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
  if (data.length === 0) {
    return null;
  }
  return (
    <div id='jim-doc-list'>
      <Tag color='var(--tag-color)' className='flash'>
        Latest 10 article
      </Tag>
      <br />
      <ul className='doc-list'>
        {data.map((doc) => {
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
  const timeout = 2000;
  const batchSize = 10;
  const promiseList = [];
  const docs = [...docsList];
  const domain = "https://jimhuang.dev";
  const docUrlList = docsList.map((doc) => `${domain}${doc.href}`);

  for (let i = 0; i < docs.length; i += batchSize) {
    const batchDocs = docs.slice(i, i + batchSize);
    const batchDocUrlList = docUrlList.slice(i, i + batchSize);
    const res = fetchWithTimeout(
      "https://jim-docusaurus-api.netlify.app/api/docs",
      { docs: batchDocs, docUrlList: batchDocUrlList },
      timeout
    );
    promiseList.push(res);
  }

  const docItemList = (await Promise.all(promiseList))
    .flatMap((item) => item)
    .filter((item) => item);

  docItemList.sort((a, b) => b.timeStamp - a.timeStamp);

  return docItemList.slice(0, 10);
}

/**
 * fetch with timeout setting abort controller
 * @param  url
 * @param  body
 * @param  timeoutPerRequest
 * @returns
 */
const fetchWithTimeout = async (url, body, timeoutPerRequest) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutPerRequest);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle fetch or parsing errors
    console.error(`Error fetching data from ${url}:`, error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};
