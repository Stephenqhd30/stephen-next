"use client";

import React, { useState } from "react";
import { Button } from "antd";
import { ProCard } from "@ant-design/pro-components";
import PostAvatarCard from "@/components/RePost/PostAvatarCard";
import PostCardModal from "@/components/RePost/PostCardModal";
import ActionTabbar from "@/components/RePost/ActionTabbar";
import { MdViewer } from "@/components/Markdown";

interface PostAvatarCardProps {
  post: API.PostVO;
}

/**
 * 文章卡片组件
 * @constructor
 */
const PostCard: React.FC<PostAvatarCardProps> = ({ post }) => {
  const maxLength = 100;
  const [visible, setVisible] = useState(false);

  // 处理 Markdown 内容
  const content = post.content || "";
  const truncatedContent =
    content.length > maxLength ? content.slice(0, maxLength) + "..." : content;

  return (
    <ProCard title={<PostAvatarCard post={post} />}>
      {visible && (
        <PostCardModal
          post={post}
          open={visible}
          onCancel={() => setVisible(false)}
        />
      )}
      <MdViewer isMobile={true} value={truncatedContent} key={post.id} />
      {content.length > maxLength && (
        <Button type="link" onClick={() => setVisible(!visible)}>
          {"展开"}
        </Button>
      )}
      <ActionTabbar post={post} />
    </ProCard>
  );
};

export default PostCard;
