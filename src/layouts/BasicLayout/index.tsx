"use client";
import { ProLayout } from "@ant-design/pro-components";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GITHUB, LOGO, SUBTITLE, TITLE } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GlobalFooter from "@/components/GlobalFooter";
import { useSelector } from "react-redux";
import { AvatarDropdown, SearchInput } from "@/components/GlobalHeader";
import { RootState } from "@/store";
import menus from "../../../config/menus";
import { Grid } from "antd";
import { GithubFilled } from "@ant-design/icons";

const { useBreakpoint } = Grid;

interface Props {
  children: React.ReactNode;
}

/**
 * 通用布局
 * @param props
 * @constructor
 */
const BasicLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const loginUser = useSelector((state: RootState) => state.loginUser);
  const [isMounted, setIsMounted] = useState(false);
  const scene = useBreakpoint();
  const isMobile = !scene.md;

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // 🚀 避免 SSR 期间渲染，确保 `ProLayout` 只在 CSR 渲染
  if (!isMounted) {
    return null;
  }

  return (
    <ProLayout
      layout={"top"}
      contentWidth={"Fixed"}
      fixedHeader={true}
      title={TITLE}
      logo={<Image src={LOGO} width={32} height={32} alt={SUBTITLE} />}
      location={{
        // @ts-ignore
        pathname,
      }}
      token={{
        pageContainer: {
          paddingBlockPageContainerContent: isMobile ? 0 : 24,
          paddingInlinePageContainerContent: isMobile ? 0 : 40,
        },
      }}
      avatarProps={{
        size: "small",
        render: () => {
          return <AvatarDropdown currentUser={loginUser} />;
        },
      }}
      headerTitleRender={(logo) => {
        return <a>{logo}</a>;
      }}
      // 渲染底部栏
      footerRender={() => {
        return <GlobalFooter key={"globalFooter"} />;
      }}
      // 定义菜单
      menuDataRender={() => {
        return menus;
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== "side" ? <SearchInput /> : undefined,
          <GithubFilled
            key="GithubFilled"
            onClick={() => {
              window.open(GITHUB, "_target");
            }}
          />,
        ];
      }}
      // 菜单项如何渲染
      menuItemRender={(item, dom) => (
        <Link href={item.path || "/"} target={"_self"}>
          {dom}
        </Link>
      )}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
