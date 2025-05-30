// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** doThumb POST /api/post_thumb/ */
export async function doThumbUsingPost(
  body: API.PostThumbAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>("/api/post_thumb/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listFavourPostByPage POST /api/post_thumb/list/page */
export async function listFavourPostByPageUsingPost1(
  body: API.PostFavourQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePostVO_>("/api/post_thumb/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyThumbPostByPage POST /api/post_thumb/my/list/page */
export async function listMyThumbPostByPageUsingPost(
  body: API.PostQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePostVO_>("/api/post_thumb/my/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
