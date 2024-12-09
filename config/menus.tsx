import {CrownOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons';
import { MenuDataItem } from "@ant-design/pro-layout";
import {UserRoleEnum} from '@/enums/UserRoleEnum';
import React from 'react';

const menus: MenuDataItem[] = [
  {
    name: "主页",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    path: "/admin",
    name: "管理",
    icon: <CrownOutlined />,
    access: UserRoleEnum.ADMIN,
    children: [
      {
        path: "/admin",
        redirect: "/admin/user",
        access: UserRoleEnum.ADMIN,
      },
      {
        path: "/admin/user",
        name: "用户管理",
        component: "./admin/user",
        access: UserRoleEnum.ADMIN,
      },
      {
        path: "/admin/post",
        name: "帖子管理",
        component: "./admin/post",
        access: UserRoleEnum.ADMIN,
      },
	    {
		    path: "/admin/tag",
		    name: "标签管理",
		    component: "./admin/tag",
        access: UserRoleEnum.ADMIN,
	    },
    ],
  },
  {
    name: "个人页",
    path: "/account",
    icon: <UserOutlined />,
    children: [
      {
        path: "/account",
        redirect: "/account/center",
      },
      {
        path: "/account/center",
        name: "个人中心",
        component: "./account/center",
      },
      {
        path: "/account/setting",
        name: "个人设置",
        component: "./account/setting",
      },
    ],
  },
  {
    name: "用户页",
    path: "/user",
    hideInMenu: true,
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "用户登录页",
        component: "./user/login",
      },
      {
        path: "/user/register",
        name: "用户注册页",
        component: "./user/register",
      },
    ],
  },
  {
    name: "异常页",
    path: "/exception",
    hideInMenu: true,
    children: [
      {
        path: "/exception",
        redirect: "/exception/403",
      },
      {
        name: "403",
        path: "/exception/403",
        component: "./exception/403",
      },
      {
        name: "404",
        path: "/exception/404",
        component: "./exception/404",
      },
      {
        name: "500",
        path: "/exception/500",
        component: "./exception/500",
      },
    ],
  },
  { path: "*", layout: false, component: "./exception/404" },
];

/**
 * 根据全部路径查找菜单
 * @param path
 */
export const findAllMenusItemByPath = (path: string): MenuDataItem | null => {
  return findMenusItemByPath(menus, path);
};

/**
 * 根据路径查找菜单
 * @param menus
 * @param path
 */
export const findMenusItemByPath = (
    menus: MenuDataItem[],
    path: string,
): MenuDataItem | null => {
  for (const menu of menus) {
    if (menu.path === path) {
      return menu;
    }
    if (menu.children) {
      const matchedMenuItem = findMenusItemByPath(menu.children, path);
      if (matchedMenuItem) {
        return matchedMenuItem;
      }
    }
  }
  return null;
};

export default menus;
