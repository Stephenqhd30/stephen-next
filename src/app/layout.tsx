"use client";

import './globals.css';
import React, { useCallback, useEffect, useState } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { BasicLayout, UserLayout } from "@/layouts";
import { Provider, useDispatch } from "react-redux";
import store, { AppDispatch } from "@/store";
import { usePathname } from "next/navigation";
import { getLoginUserUsingGet } from "@/api/userController";
import { setLoginUser } from "@/store/modules/user/loginUser";
import { GlobalLoading } from "@/components";
import { DEFAULT_USER } from "@/enums/UserRoleEnum";

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
  const [initialized, setInitialized] = useState<boolean>(false);
  
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
    } finally {
      setInitialized(true);
    }
  }, [dispatch]);

  useEffect(() => {
    // 登录和注册页不用获取登录信息
    if (
      !pathname.startsWith("/user/login") &&
      !pathname.startsWith("/user/register")
    ) {
      getInitialStatus();
    } else {
      setInitialized(true);      
    }
  }, []);
  if (!initialized) {
    // 渲染占位符，避免 SSR 和客户端渲染不一致
    return <GlobalLoading />;
  }
  return <>{children}</>;
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
  const isAuthPage = pathname?.startsWith('/user/login') || pathname?.startsWith('/user/register');
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