import { UserRoleEnum } from "@/enums/UserRoleEnum";

export const DEFAULT_USER: API.LoginUserVO = {
  userName: "未登录",
  userAvatar: "/default_avatar.png",
  userRole: UserRoleEnum.USER,
};
