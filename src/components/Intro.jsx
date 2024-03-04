import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";
import React from "react";
import DocList from "./DocList";
import SubscribeBlock from "./SubscribeBlock";
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
        <BrowserOnly>{() => <DocList />}</BrowserOnly>
        <br />
        <BrowserOnly>{() => <SubscribeBlock />}</BrowserOnly>
        {/* <ReactQueryDevtools /> */}
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default Intro;
