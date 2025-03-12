import { MenuDataItem } from "@ant-design/pro-layout";
import { getConversionVoByIdUsingGet } from "@/api/conversionController";

/**
 * 获取动态会话数据
 */
export const getConversations = async (): Promise<MenuDataItem[]> => {
  const res: any = await getConversionVoByIdUsingGet({});
  if (res.code === 0 && res.data) {
    return res.data.records.map((item: any) => ({
      name: item.title || `会话 ${item.id}`,
      path: `/chat/${item.id}`,
    }));
  }
  return [];
};

/**
 * 默认菜单
 */
export const defaultChatMenus: MenuDataItem[] = [
  {
    name: "我们开始聊天吧",
    path: "/chat",
  },
];