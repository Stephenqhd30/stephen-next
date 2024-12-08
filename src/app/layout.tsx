'use client'

import './globals.css';
import React, {useCallback, useEffect} from 'react';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {BasicLayout} from '@/layouts';

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
  const doInit = useCallback(() => {
    console.log("init");
  }, []);
  // 只执行一次
  useEffect(() => {
    doInit();
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
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <InitializeStatus>
            <BasicLayout>{children}</BasicLayout>
          </InitializeStatus>
        </AntdRegistry>
      </body>
    </html>
  );
}
