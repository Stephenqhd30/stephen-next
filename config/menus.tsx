import { MenuDataItem } from "@ant-design/pro-layout";
import { CalendarOutlined, HomeOutlined } from "@ant-design/icons";

const menus: MenuDataItem[] = [
  {
    path: "/",
    name: "首页",
    icon: <HomeOutlined />,
  },
  {
    path: "/post",
    name: "文章",
    icon: <CalendarOutlined />,
  },
];

export default menus;
