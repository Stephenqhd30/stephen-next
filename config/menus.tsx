import {CrownOutlined, ExceptionOutlined, HomeOutlined} from '@ant-design/icons';
import {MenuDataItem} from '@ant-design/pro-layout';
import {UserRoleEnum} from '@/enums/UserRoleEnum';

const menus: MenuDataItem[] = [
  {
    name: "欢迎",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    path: '/admin',
    name: '管理',
    icon: <CrownOutlined/>,
    access: UserRoleEnum.ADMIN,
    children: [
      {
        path: '/admin',
        redirect: '/admin/userList'
      },
      {
        path: '/admin/userList',
        name: '用户管理',
      }
    ]
  },
  {
    name: '用户页',
    path: '/user',
    hideInMenu: true,
    children: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        name: "用户登录页"
      },
      {
        path: '/user/register',
        name: "用户注册页"
      }
    ]
  },
  {
    name: "异常页",
    path: "/exception",
    hideInMenu: true,
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
  { path: '*', layout: false, component: './exception/404' },
];
export default menus;
