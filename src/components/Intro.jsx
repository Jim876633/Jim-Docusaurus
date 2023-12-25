import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import DocList from "./DocList";
import SubscribeBlock from "./SubscribeBlock";
const queryClient = new QueryClient();

const Intro = () => {
  return (
    <QueryClientProvider client={queryClient}>
      Hi, 這裡是 Jim's
      note，主要紀錄一些前端學習筆記，以及在開發上遇到的問題與解法。
      <br />
      有任何問題歡迎留言，或是寄信到{" "}
      <a href='mailto:jim.huang112@gmail.com'>jim.huang112@gmail.com</a>
      <br />
      <br />
      <DocList />
      <br />
      <SubscribeBlock />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

export default Intro;
