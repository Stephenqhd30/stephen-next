/**
 * 用户角色枚举
 */
export enum UserRoleEnum {
  ADMIN = "admin",
  USER = "user",
  BAN = "ban",
  NOT_LOGIN = "notLogin",
}

/**
 * 用户角色枚举
 */
export const userRole = {
  [UserRoleEnum.ADMIN]: {
    text: '管理员',
    value: UserRoleEnum.ADMIN,
    color: 'processing',
  },
  [UserRoleEnum.USER]: {
    text: '普通用户',
    value: UserRoleEnum.USER,
    color: 'success',
  },
  [UserRoleEnum.BAN]: {
    text: '封禁',
    value: UserRoleEnum.BAN,
    color: 'error',
  },
};

/**
 * 默认用户
 */
export const DEFAULT_USER: API.LoginUserVO = {
  userName: "未登录",
  userAvatar: "public/default_avatar.png",
  userRole: UserRoleEnum.NOT_LOGIN,
  userProfile: "该用户很懒未设置简介",
};
