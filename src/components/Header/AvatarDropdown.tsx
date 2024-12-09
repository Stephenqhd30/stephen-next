"use client"

import React from "react";
import {LogoutOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import { Dropdown } from "antd";
import {useSelector} from 'react-redux';
import {RootState} from '@/store';

interface Props {
  dom: React.ReactNode;
}

/**
 * 头像下拉菜单
 * @constructor
 */
const AvatarDropdown: React.FC<Props> = (props) => {
  const { dom } = props;
  // 获取当前用户信息
  const loginUser = useSelector((state: RootState) => state.loginUser);
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'center',
            icon: <UserOutlined />,
            label: '个人中心',
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: '个人设置',
          },
          {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: '退出登录',
          },
        ],
      }}
    >
      {dom}
    </Dropdown>
  );
};

export default AvatarDropdown;
