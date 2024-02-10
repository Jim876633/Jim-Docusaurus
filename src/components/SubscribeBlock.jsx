import siteConfig from "@generated/docusaurus.config";
import { useMutation } from "@tanstack/react-query";
import { Button, Card, Input, Space, message } from "antd";
import React, { useEffect } from "react";

const apiUrl = siteConfig.customFields.env.MAIL_CHIMP_API_URL;
const SUCCESS_CODE = "0000";

const SubscribeBlock = () => {
  const [email, setEmail] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const { isLoading, data, mutate } = useMutation(subscribe);
  const [messageApi, contextHolder] = message.useMessage();

  const changeHandler = (e) => {
    if (errorMsg) setErrorMsg("");
    setEmail(e.target.value);
  };

  const successMsgAlert = () => {
    messageApi.open({
      type: "success",
      content: "Thanks for subscribing!",
      duration: 1.5,
      style: { marginTop: "100px" },
    });
  };

  const subscribeHandler = async () => {
    if (email === "") {
      setErrorMsg("Please enter your email address");
      return;
    }
    if (isLoading) return;
    setEmail("");
    mutate(email);
  };

  useEffect(() => {
    if (data) {
      const { code, errorMsg, status } = data;
      if (code === SUCCESS_CODE && status === "subscribed") {
        successMsgAlert();
      } else {
        setErrorMsg(errorMsg);
      }
    }
  }, [data]);

  return (
    <Card
      title={
        <h2 style={{ margin: 0, fontSize: "min(var(--ifm-h2-font-size),5vw)" }}>
          訂閱以獲得最新的文章通知！
        </h2>
      }
      style={{
        width: "100%",
        backgroundColor: "var(--subscribe-block)",
        border: "1px solid var(--subscribe-block-border)",
      }}
      bodyStyle={{ paddingBottom: "36px", paddingTop: "16px" }}
    >
      {contextHolder}
      <Space.Compact style={{ width: "100%" }}>
        <Input
          type='email'
          placeholder='Email address...'
          onChange={changeHandler}
          onPressEnter={subscribeHandler}
          value={email}
          status={errorMsg ? "error" : ""}
        />
        <Button
          loading={isLoading}
          onClick={subscribeHandler}
          type='primary'
          className='subscribe_btn'
        >
          Submit
        </Button>
        <span
          style={{
            color: "red",
            position: "absolute",
            bottom: "10px",
            left: "30px",
          }}
        >
          {errorMsg}
        </span>
      </Space.Compact>
    </Card>
  );
};

export default SubscribeBlock;

/**
 * subscribe email
 * @param {string} email
 * @returns
 */
async function subscribe(email) {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return res.json();
}
