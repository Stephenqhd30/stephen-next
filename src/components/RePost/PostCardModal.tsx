import { Button, Modal, ModalProps } from "antd";
import React from "react";
import PostAvatarCard from "@/components/RePost/PostAvatarCard";
import { Markdown } from "@ant-design/pro-editor";
import { ProCard } from "@ant-design/pro-components";
import { MdViewer } from "@/components/Markdown";

interface PostCardModalProps {
  post: API.PostVO;
  open: boolean;
  onCancel: () => void;
}

/**
 * 文章卡片Modal框
 * @constructor
 */
const PostCardModal: React.FC<PostCardModalProps> = (props) => {
  const { open, onCancel, post } = props;
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={"1000px"}
    >
      <ProCard title={<PostAvatarCard post={post} />}>
        <MdViewer value={post.content} key={post.id} />
      </ProCard>
    </Modal>
  );
};

export default PostCardModal;
