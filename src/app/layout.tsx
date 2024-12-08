"use client";

import './globals.css';
import React, {useCallback, useEffect} from 'react';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import { BasicLayout, UserLayout } from "@/layouts";
import { Provider, useDispatch } from "react-redux";
import store, { AppDispatch } from "@/store";
import { usePathname } from "next/navigation";
import { getLoginUserUsingGet } from "@/api/userController";
import { setLoginUser } from "@/store/modules/user/loginUser";
import { DEFAULT_USER } from "@/mock/user";

/**
 * 全局初始化逻辑
 * @param children
 * @constructor
 */
const InitializeStatus: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  const getInitialStatus = useCallback(async () => {
    try {
      const res: any = await getLoginUserUsingGet();
      if (res.code === 0 && res.data) {
        dispatch(setLoginUser(res.data as API.LoginUserVO));
      } else {
        dispatch(setLoginUser(DEFAULT_USER));
      }
    } catch (error) {
      dispatch(setLoginUser(DEFAULT_USER));
    }
  }, [dispatch]);

  useEffect(() => {
    // 登录和注册页不用获取登录信息
    if (
      !pathname.startsWith("/user/login") &&
      !pathname.startsWith("/user/register")
    ) {
      getInitialStatus();
    }
  }, []);

  return children;
};

/**
 * 根布局
 * @param children
 * @constructor
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  // 优化路径匹配
  const isAuthPage = /\/user\/(login|register)/.test(pathname);
  const Layout = isAuthPage ? UserLayout : BasicLayout;

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Provider store={store}>
            <InitializeStatus>
              <Layout>{children}</Layout>
            </InitializeStatus>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}