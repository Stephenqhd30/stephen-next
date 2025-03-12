import React from "react";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Space } from "antd";

interface Props {
  content: string;
}

/**
 *
 * @constructor
 */
const LogoNode: React.FC<Props> = (props) => {
  const { content } = props;
  return (
    <ProCard
      style={{
        display: "flex",
        height: "72px",
        alignItems: "center",
        justifyContent: "start",
        boxSizing: "border-box",
      }}
    >
      <Space>
        <Avatar
          style={{
            display: "inline-block",
          }}
          size={36}
          src="http://121.36.17.18:9000/trajectory/user_avatar/1782755477639864321/fdb36cdf568745efa7c73d68145be72a.jpg"
          draggable={false}
          alt="logo"
        />
        <span
          style={{
            display: "inline-block",
            margin: "0 4px",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {content}
        </span>
      </Space>
    </ProCard>
  );
};

export default LogoNode;
