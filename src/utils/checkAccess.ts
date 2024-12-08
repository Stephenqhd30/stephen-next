import { UserRoleEnum } from "@/enums/UserRoleEnum";

/**
 * 检查权限(判断当前登录用户是否具有某个权限)
 * @param loginUser 当前登录用户
 * @param needAccess 需要判断的权限
 * @returns boolean 有无权限
 */
const checkAccess = (
  loginUser: API.LoginUserVO,
  needAccess = UserRoleEnum.NOT_LOGIN,
) => {
  // 获取当前登录用户的权限 默认为未登录
  const loginUserAccess = loginUser?.userRole ?? UserRoleEnum.NOT_LOGIN;
  // 如果不需要权限
  if (needAccess === UserRoleEnum.NOT_LOGIN) {
    return true;
  }
  // 如果需要登录才能访问
  if (needAccess === UserRoleEnum.USER) {
    // 如果用户未登录,表示无权限
    if (loginUserAccess === UserRoleEnum.NOT_LOGIN) {
      return false;
    }
  }
  // 如果需要管理员权限才能访问
  if (needAccess === UserRoleEnum.ADMIN) {
    // 如果用户不是管理员
    if (loginUserAccess !== UserRoleEnum.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
