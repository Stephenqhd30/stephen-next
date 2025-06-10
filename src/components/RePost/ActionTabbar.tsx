import React, { useState } from "react";
import { Button, message, Space, Typography } from "antd";
import {
  LikeOutlined,
  LikeTwoTone,
  StarOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import {doPostFavour} from '@/api/postFavourController';
import {doThumb} from '@/api/postThumbController';

interface Props {
  post: API.PostVO;
}

/**
 * 帖子操作栏
 *
 * @param post
 * @constructor
 */
const ActionTabbar: React.FC<Props> = ({ post }) => {
  // 点赞状态
  const [hasThumb, setHasThumb] = useState<boolean>(post.hasThumb ?? false);
  // 点赞数量
  const [thumbNum, setThumbNum] = useState<number>(post.thumbNum ?? 0);
  // 收藏状态
  const [hasFavour, setHasFavour] = useState<boolean>(post.hasFavour ?? false);
  // 收藏数量
  const [favourNum, setFavourNum] = useState<number>(post.favourNum ?? 0);

  /**
   * 帖子收藏
   */
  const handleFavour = async () => {
    try {
      const res: any = await doPostFavour({
        postId: post.id,
      });
      if (res.code === 0 && res.data) {
        setHasFavour(!hasFavour);
        setFavourNum((prev) => (!hasFavour ? prev + 1 : prev - 1));
        message.success(!hasFavour ? "收藏成功" : "取消成功");
      } else {
        message.error(`收藏失败: ${res.message}`);
      }
    } catch (error: any) {
      message.error("收藏失败: " + error.message);
    }
  };

  /**
   * 帖子点赞
   */
  const handleThumb = async () => {
    try {
      const res: any = await doThumb({
        postId: post.id,
      });
      if (res.code === 0 && res.data) {
        setHasThumb(!hasThumb);
        setThumbNum((prev) => (!hasThumb ? prev + 1 : prev - 1));
        message.success(!hasThumb ? "点赞成功" : "取消成功");
      } else {
        message.error(`点赞失败: ${res.message}`);
      }
    } catch (error: any) {
      message.error("点赞失败: " + error.message);
    }
  };

  return (
    <Space className="mt-4 flex items-center">
      <Button
        onClick={handleThumb}
        type="text"
        icon={hasThumb ? <LikeTwoTone /> : <LikeOutlined />}
      >
        <Typography.Text>{thumbNum}</Typography.Text>
      </Button>
      <Button
        onClick={handleFavour}
        type="text"
        icon={hasFavour ? <StarTwoTone /> : <StarOutlined />}
      >
        <Typography.Text>{favourNum}</Typography.Text>
      </Button>
    </Space>
  );
};

export default ActionTabbar;
