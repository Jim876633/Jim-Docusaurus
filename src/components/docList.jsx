import React, { useState, useEffect } from "react";

import { useDocsSidebar } from "@docusaurus/theme-common/internal";

export default function () {
  const [docList, setDocList] = useState([]);
  const { items } = useDocsSidebar();
  const docs = getDocList(items);
  console.log(docs);
  const docUrlList = docs.map(
    (doc) => `https://jim876633.github.io${doc.href}`
  );
  const promises = docUrlList.map((url) =>
    fetch(url).then((res) => res.text())
  );

  useEffect(() => {
    // Use Promise.all to wait for all promises to resolve
    Promise.all(promises)
      .then((results) => {
        results.forEach((data, i) => {
          // translate to html
          const parser = new DOMParser();
          const html = parser.parseFromString(data, "text/html");
          const body = html.body;
          const time = body.querySelector("time");

          if (time) {
            const timeStamp = time.getAttribute("datetime");
            docs[i].timeStamp = new Date(timeStamp).getTime();
            console.log(new Date(timeStamp).toLocaleDateString("zh-TW"));
            docs[i].date = new Date(timeStamp).toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          }
        });
        docs.sort((a, b) => b.timeStamp - a.timeStamp);
        const lastTenDocs = docs.slice(0, 10);
        setDocList(lastTenDocs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {docList.map((doc) => (
        <li key={doc.id} style={{}}>
          {doc.date} 更新文章 <a href={doc.href}>{doc.title}</a> - {doc.label}
        </li>
      ))}
      ...
    </div>
  );
}

function getDocList(items) {
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
      return getDocList(item.items);
    }
  });
}
