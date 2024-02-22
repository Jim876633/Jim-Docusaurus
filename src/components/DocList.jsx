import Link from "@docusaurus/Link";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import useMedia from "@site/src/hooks/useMedia.jsx";
import { useQuery } from "@tanstack/react-query";
import { Skeleton, Tag } from "antd";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

  const loadMoreHandler = async () => {
    if (data.length > showCount) {
      setShowCount(showCount + 10);
    }
  };

  return (
    <div id='jim-doc-list'>
      <Tag color='var(--tag-color)' className='flash'>
        Latest Article
      </Tag>
      <br />
      <div id='scrollableDiv' className='doc-list'>
        {isLoading ? (
          <Skeleton
            theme='light'
            active
            paragraph={{ rows: 6, width: ["50%", "80%", "70%", "70%", "60%"] }}
            title={false}
            className='doc-list-skeleton'
          />
        ) : (
          <InfiniteScroll
            dataLength={showCount}
            next={loadMoreHandler}
            hasMore={data.length > showCount}
            loader={
              <Skeleton
                active
                paragraph={{ rows: 2, width: ["50%", "80%"] }}
                title={false}
              />
            }
            scrollableTarget='scrollableDiv'
            endMessage={<i>...End</i>}
          >
            <ul>
              {data.slice(0, showCount).map((doc) => {
                const item = sm ? (
                  <li key={doc.id} className='intro_sm'>
                    <span>{doc.date?.slice(5)}</span>
                    <Link to={doc.href}>{doc.title}</Link>
                  </li>
                ) : (
                  <li key={doc.id}>
                    {doc.date} 新增文章 <Link to={doc.href}>{doc.title}</Link> -{" "}
                    {doc.label}
                  </li>
                );
                return item;
              })}
            </ul>
          </InfiniteScroll>
        )}
      </div>
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
  try {
    const res = await fetch("./docsCreateDate.json");
    const data = await res.json();
    const docsItem = data.map((doc) => {
      const matchDocList = docsList.find((d) => doc.path.includes(d.id));
      return {
        ...doc,
        ...matchDocList,
      };
    });
    docsItem.sort((a, b) => {
      if (b.timestamp === a.timestamp) {
        return a.id - b.id;
      }
      return b.timestamp - a.timestamp;
    });
    const pureDocs = docsItem.filter((d) => d.label !== "Intro");

    return pureDocs;
  } catch (err) {
    // dev mode 取不到 docsCreateDate.json 時，使用當前時間
    console.log("Can't fetch docsCreateDate.json", err);
    const docsItem = docsList.map((doc, i) => {
      const today = new Date();
      const timeStamp = today.getTime();
      const date = today.toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      return {
        ...doc,
        timeStamp,
        date,
      };
    });
    docsItem.sort((a, b) => b.timeStamp - a.timeStamp);
    const pureDocs = docsItem.filter((d) => d.label !== "Intro");
    return pureDocs;
  }
}
