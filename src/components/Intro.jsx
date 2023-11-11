import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DocList from "./DocList";
import SubscribeBlock from "./SubscribeBlock";
const queryClient = new QueryClient();

const Intro = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DocList />
      <br />
      <SubscribeBlock />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

export default Intro;
