import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import parse from "html-react-parser";
import React from "react";
import useMedia from "../../hooks/useMedia";
import styled from "./index.module.scss";
import changelogJSON from "/data/changelog.json";
import TextPronounce from "@site/src/components/TextPronounce";

const Changelog = () => {
  const [changelogData, setChangelogData] = React.useState(changelogJSON);
  const { sm } = useMedia();

  const toggleEvent = (id) => {
    const newData = changelogData.map((event) => {
      if (event.id === id) {
        event.isShowDesc = !event.isShowDesc;
      } else {
        event.isShowDesc = false;
      }
      return event;
    });
    setChangelogData(newData);
  };

  return (
    <Layout title='Changelog' description="Jim'note changelog">
      <div className={styled.changelog}>
        {changelogData.map((event, index) => (
          <div
            className={`${styled.eventBlock} ${sm ? styled.sm : ""} ${
              event.isShowDesc ? styled.active : ""
            }`}
            key={index}
          >
            <div className={`${styled.date}`}>
              {sm ? event.date.slice(5) : event.date}
            </div>
            <div className={styled.dot}></div>
            <div className={styled.line}></div>
            <div className={styled.event}>
              <button
                className={`${styled.title}`}
                onClick={() => toggleEvent(event.id)}
              >
                {event.title}
              </button>
              <div className={styled.description}>
                {event.isShowDesc && parse(event.description)}
                {event.isShowDesc && event.title.includes("TextPronounce") ? (
                  <>
                    {"Say it"} <TextPronounce text="Jim's note is the best" />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default () => <BrowserOnly>{() => <Changelog />}</BrowserOnly>;
