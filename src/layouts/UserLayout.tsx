"use client";

import { ProLayout } from "@ant-design/pro-components";
import React from "react";
import { Footer } from "@/components";
import { BACKGROUND_IMAGE_URL } from "@/constants";

interface Props {
  children: React.ReactNode;
}

/**
 * 用户布局
 * @param props
 * @constructor
 */
const UserLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div
      id="user-layout"
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: BACKGROUND_IMAGE_URL,
          },
        ]}
        headerRender={false}
        menuRender={false}
        // 渲染底部栏
        footerRender={() => {
          return <Footer key={"globalFooter"} />;
        }}
        contentStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </ProLayout>
    </div>
  );
};

export default UserLayout;
