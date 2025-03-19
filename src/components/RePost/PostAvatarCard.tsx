import React from "react";
import { Image, Typography } from "antd";
import { StatisticCard } from "@ant-design/pro-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// 使用 relativeTime 插件
dayjs.extend(relativeTime);

interface PostAvatarCardProps {
  post: API.PostVO;
}

/**
 * 文章头像组件
 * @constructor
 */
const PostCard: React.FC<PostAvatarCardProps> = ({ post }) => {
  return (
    <StatisticCard
      bodyStyle={{
        padding: 0,
      }}
      statistic={{
        title: (
          <Typography
            className={
              "text-3xl font-semibold text-gray-800 dark:text-gray-300"
            }
          >
            {post.title}
          </Typography>
        ),
        valueRender: () => (
          <Typography
            className={"text-sm text-gray-600 mt-1 dark:text-gray-400 text-2xl"}
          >
            {post.userVO?.userName}
          </Typography>
        ),
      }}
      chart={
        <Image
          preview={false}
          className="w-8 h-8 border-2 border-white shadow-lg"
          src={post.cover || "/logo.svg"}
          alt={post.title}
          draggable="false"
          width={48}
          height={48}
        />
      }
      chartPlacement="left"
    />
  );
};

export default PostCard;
