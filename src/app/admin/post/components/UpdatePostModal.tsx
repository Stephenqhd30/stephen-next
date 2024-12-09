"use client";

import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormUploadDragger,
} from "@ant-design/pro-components";
import { message, UploadProps } from "antd";
import React, { useState } from "react";
import { FileUploadBiz } from "@/enums/FileUploadBizEnum";
import { uploadFileUsingPost } from "@/api/fileController";
import { updatePostUsingPost } from "@/api/postController";
import { MyMdEditor, TagTreeSelect } from "@/components";

interface Props {
  oldData?: API.Post;
  onCancel: () => void;
  onSubmit: (values: API.PostUpdateRequest) => Promise<void>;
  visible: boolean;
}

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.PostUpdateRequest) => {
  const hide = message.loading("正在更新");
  try {
    const res: any = await updatePostUsingPost(fields);
    if (res.code === 0 && res.data) {
      message.success("更新成功");
      return true;
    } else {
      message.error(`更新失败${res.message}, 请重试!`);
      return false;
    }
  } catch (error: any) {
    message.error(`更新失败${error.message}, 请重试!`);
    return false;
  } finally {
    hide();
  }
};

/**
 * 更新帖子
 * @param props
 * @constructor
 */
const UpdatePostModal: React.FC<Props> = (props) => {
  const { oldData, visible, onSubmit, onCancel } = props;
  // 帖子封面
  const [cover, setCover] = useState<any>();
  const [content, setContent] = useState<any>(oldData?.content);
  const [form] = ProForm.useForm<API.PostUpdateRequest>();
  /**
   * 上传文章封面
   */
  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    maxCount: 1,
    customRequest: async (options: any) => {
      const { onSuccess, onError, file } = options;
      try {
        const res: any = await uploadFileUsingPost(
          {
            biz: FileUploadBiz.POST_COVER,
          },
          {
            file: file,
          },
          file,
        );
        if (res.code === 0 && res.data) {
          onSuccess(res.data);
          setCover(res.data);
        }
      } catch (error: any) {
        message.error("文件上传失败", error.message);
        onError(error);
      }
    },
    onRemove() {
      setCover(undefined);
    },
  };
  if (!oldData) {
    return null;
  }

  return (
    <ModalForm<API.PostUpdateRequest>
      title={"更新帖子信息"}
      open={visible}
      form={form}
      initialValues={oldData}
      onFinish={async (values: API.PostUpdateRequest) => {
        const success = await handleUpdate({
          ...values,
          id: oldData.id,
          cover,
          content,
          tags: Array.isArray(values.tags)
            ? values.tags
            : JSON.parse(values.tags as any),
        });
        if (success) {
          onSubmit?.(values);
        }
      }}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => {
          onCancel?.();
        },
      }}
      submitter={{
        searchConfig: {
          submitText: "更新帖子信息",
          resetText: "取消",
        },
      }}
    >
      <ProFormText name="title" label="标题" />
      <ProFormTextArea name="content" label="内容">
        <MyMdEditor onChange={setContent} value={content} />
      </ProFormTextArea>
      <ProFormUploadDragger
        title={"上传帖子封面"}
        max={1}
        fieldProps={{
          ...uploadProps,
        }}
        name="pic"
        label={"封面"}
      />
      <TagTreeSelect
          name={'tags'}
          label={'标签'}
          initialValue={oldData?.tags ? JSON.parse(oldData?.tags) : []}
      />
    </ModalForm>
  );
};
export default UpdatePostModal;
