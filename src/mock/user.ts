import { UserRoleEnum } from "@/enums/UserRoleEnum";
// 默认用户
export const DEFAULT_USER: API.LoginUserVO = {
  userName: "未登录",
  userAvatar: "/assets/notLoginUser.png",
  userRole: UserRoleEnum.NOT_LOGIN,
  userProfile: "该用户很懒未设置简介",
};