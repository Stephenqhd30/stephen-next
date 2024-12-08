'use client'

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
 * @constructorpnp
 */
const InitializeStatus: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch<AppDispatch>();
  // 获取当前页面路径
  const pathname = usePathname();

  /**
   * 全局初始化，有单词调用的代码，都可以写到这里
   */
  const getInitialStatus = useCallback(async () => {
    try {
      const res = await getLoginUserUsingGet();
      if (res.data.code === 0 && res.data.data) {
        dispatch(setLoginUser(res.data.data as API.LoginUserVO));
      } else {
        dispatch(setLoginUser(DEFAULT_USER));
      }
    } catch (error) {
      dispatch(setLoginUser(DEFAULT_USER));
    }
  }, []);

  // 只执行一次
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // 判断是否是登录或注册页面
  const isAuthPage =
      pathname.startsWith('/user/login') || pathname.startsWith('/user/register');
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
