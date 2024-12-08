import { DEFAULT_USER } from "@/enums/UserRoleEnum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: DEFAULT_USER,
  reducers: {
    setLoginUser: (state, action: PayloadAction<API.LoginUserVO>) => {
      return {
        ...action.payload,
      };
    },
  },
});

// 修改状态
export const { setLoginUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;
