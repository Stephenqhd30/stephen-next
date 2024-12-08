import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

interface Props {
  dom: React.ReactNode;
}

/**
 * 头像下拉菜单
 * @constructor
 */
const AvatarDropdown: React.FC<Props> = (props) => {
  const { dom } = props;
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "logout",
            icon: <LogoutOutlined />,
            label: "退出登录",
          },
        ],
      }}
    >
      {dom}
    </Dropdown>
  );
};

export default AvatarDropdown;
