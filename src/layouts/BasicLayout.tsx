"use client";

import { ProLayout } from "@ant-design/pro-components";
import React from "react";
import { Grid, Typography } from "antd";
import { GitlabFilled } from "@ant-design/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  STEPHEN_GITLAB,
  STEPHEN_LOGO,
  STEPHEN_SUBTITLE,
  STEPHEN_TITLE,
} from "@/constants";
import {AvatarDropdown, Footer, SearchInput} from "@/components";
import menus from "../../config/menus";

interface Props {
  children: React.ReactNode;
}

const {useBreakpoint} = Grid;
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
      id="basic-layout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ProLayout
        layout={"top"}
        title={STEPHEN_TITLE}
        logo={
          <Image
            src={STEPHEN_LOGO}
            height={32}
            width={32}
            alt={STEPHEN_SUBTITLE}
          />
        }
        fixedHeader={true}
        fixSiderbar={true}
        token={{
          pageContainer: {
            paddingInlinePageContainerContent: isMobile ? 8 : 40,
          },
        }}
        contentWidth={"Fixed"}
        location={{
          pathname,
        }}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          size: "small",
          title: "七妮妮",
          render: (props, dom) => {
            return <AvatarDropdown dom={dom} {...props} />;
          },
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <SearchInput key="SearchInput" />,
            <Typography.Link
              target={"_blank"}
              href={STEPHEN_GITLAB}
              key={"GitlabFilled"}
            >
              <GitlabFilled />
            </Typography.Link>,
          ];
        }}
        // 渲染头部栏
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <Typography.Link href={"/"} target={"_self"} key={"logoAndTitle"}>
              {logo}
              {title}
            </Typography.Link>
          );
          if (typeof window === "undefined") return defaultDom;
          if (document.body.clientWidth < 1400) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return <>{defaultDom}</>;
        }}
        // 定义菜单
        menuDataRender={() => {
          return menus;
        }}
        // 渲染底部栏
        footerRender={() => {
          return <Footer key={"globalFooter"} />;
        }}
        // 菜单项如何渲染
        menuItemRender={(item, dom) => (
          <Link href={item.path || "/welcome"} target={"_self"}>
            {dom}
          </Link>
        )}
      >
        {children}
      </ProLayout>
    </div>
  );
};

export default BasicLayout;
