"use client";

import { ProLayout } from "@ant-design/pro-components";
import React from "react";
import { Grid } from "antd";
import { usePathname } from "next/navigation";
import { Footer } from "@/components";

interface Props {
  children: React.ReactNode;
}

const { useBreakpoint } = Grid;
/**
 * 基础通用布局
 * @param props
 * @constructor
 */
const BasicLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const scene = useBreakpoint();
  const isMobile = !scene.md;
  return (
    <div
      id="user-layout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr",
            left: 85,
            bottom: 100,
            height: "303px",
          },
          {
            src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr",
            bottom: -68,
            right: -45,
            height: "303px",
          },
          {
            src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr",
            bottom: 0,
            left: 0,
            width: "331px",
          },
        ]}
        // 渲染底部栏
        footerRender={() => {
          return <Footer key={"globalFooter"} />;
        }}
      >
        {children}
      </ProLayout>
    </div>
  );
};

export default BasicLayout;
