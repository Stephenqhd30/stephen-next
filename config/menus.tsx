import { ExceptionOutlined, HomeOutlined } from "@ant-design/icons";
import { MenuDataItem } from "@ant-design/pro-layout";

const menus: MenuDataItem[] = [
  {
    name: "欢迎",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    name: "异常页",
    path: "/exception",
    icon: <ExceptionOutlined />,
    children: [
      {
        path: "/exception",
        redirect: "/exception/403",
      },
      {
        name: "403",
        path: "/exception/403",
        component: "./exception/403",
      },
      {
        name: "404",
        path: "/exception/404",
        component: "./exception/404",
      },
      {
        name: "500",
        path: "/exception/500",
        component: "./exception/500",
      },
    ],
  },
];
export default menus;
