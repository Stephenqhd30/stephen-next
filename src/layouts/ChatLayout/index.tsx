import { ProLayout } from "@ant-design/pro-components";
import React from "react";
import Image from "next/image";
import {
  LOGO,
  STEPHEN_AUTHOR,
  STEPHEN_SUBTITLE,
  STEPHEN_TITLE,
} from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import GlobalFooter from "@/components/GlobalFooter";
import "./index.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { defaultChatMenus } from "../../../config/chatMenus";

interface Props {
  children: React.ReactNode;
}

/**
 * 通用布局
 * @param props
 * @constructor
 */
const ChatLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const loginUser = useSelector((state: RootState) => state.loginUser);
  const router = useRouter();

  return (
    <div id="basic-layout">
      <ProLayout
        layout={"side"}
        contentWidth={"Fluid"}
        fixedHeader={true}
        title={STEPHEN_TITLE}
        logo={
          <Image src={LOGO} height={32} width={32} alt={STEPHEN_SUBTITLE} />
        }
        location={{
          // @ts-ignore
          pathname,
        }}
        avatarProps={{
          src: loginUser.userAvatar || LOGO,
          size: "small",
          title: loginUser.userName || STEPHEN_AUTHOR,
        }}
        headerTitleRender={(logo, title) => {
          return (
            <a>
              {logo}
              {title}
            </a>
          );
        }}
        // 渲染底部栏
        footerRender={() => {
          return <GlobalFooter key={"globalFooter"} />;
        }}
        // 定义菜单
        menuDataRender={() => {
          return defaultChatMenus;
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
    </div>
  );
};

export default ChatLayout;
