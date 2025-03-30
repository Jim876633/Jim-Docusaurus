import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";
import React from "react";
import DocList from "./DocList";
import Skeleton from "./Skeleton";
import Subscribe from "./SubscribeBlock";
const queryClient = new QueryClient();

const Intro = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { colorMode } = useColorMode();
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          algorithm: colorMode === "light" ? defaultAlgorithm : darkAlgorithm,
        }}
      >
        Hi, 這裡是 Jim's
        note，主要紀錄一些前端學習筆記，以及在開發上遇到的問題與解法。
        <br />
        有任何問題歡迎留言，或是寄信到{" "}
        <a href='mailto:jim.huang112@gmail.com'>jim.huang112@gmail.com</a>
        <br />
        <br />
        <div id='jim-doc-list'>
          <span className='tag'>Latest Article</span>
          <br />
          <div>
            <BrowserOnly fallback={<Skeleton className='doc-list' />}>
              {() => <DocList />}
            </BrowserOnly>
          </div>
        </div>
        <br />
        <Subscribe.Wrap>
          <BrowserOnly fallback={<Skeleton paragraph={["100%"]} />}>
            {() => <Subscribe.Content />}
          </BrowserOnly>
        </Subscribe.Wrap>
        {/* <ReactQueryDevtools /> */}
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default Intro;
