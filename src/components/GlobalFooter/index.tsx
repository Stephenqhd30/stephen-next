import React from "react";
import { DefaultFooter } from "@ant-design/pro-layout";
import { GithubOutlined } from "@ant-design/icons";
import { AUTHOR, BLOG, DEFAULT_MESSAGE, GITHUB } from "@/constants";

/**
 * 全局底部栏组件
 * @constructor
 */
const GlobalFooter: React.FC = () => {
  const defaultMessage = DEFAULT_MESSAGE;
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      className={"global-footer"}
      copyright={`${defaultMessage} ${currentYear}`}
      links={[
        {
          key: "Blog",
          title: AUTHOR,
          href: BLOG,
          blankTarget: true,
        },
        {
          key: "Github",
          title: <GithubOutlined />,
          href: GITHUB,
          blankTarget: true,
        },
        {
          key: "GITHUB",
          title: DEFAULT_MESSAGE,
          href: GITHUB,
          blankTarget: true,
        },
      ]}
    />
  );
};

export default GlobalFooter;
