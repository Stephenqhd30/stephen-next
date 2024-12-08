import { message, UploadProps } from "antd";
import React, { useState } from "react";
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormUploadDragger,
} from "@ant-design/pro-components";
import { FileUploadBiz } from "@/enums/FileUploadBizEnum";
import { addPostUsingPost } from "@/api/postController";
import { uploadFileUsingPost } from "@/api/fileController";

interface Props {
  onCancel: () => void;
  visible: boolean;
  onSubmit: () => Promise<void>;
}

/**
 * 创建帖子
 * @param values
 */
const handleAdd = async (values: API.PostAddRequest) => {
  const hide = message.loading("正在创建...");
  try {
    const res: any = await addPostUsingPost(values);
    if (res.code === 0 && res.data) {
      message.success("创建成功");
      return true;
    } else {
      message.error(`创建失败${res.message}`);
      return false;
    }
  } catch (error: any) {
    message.error(`创建失败${error.message}`);
    return false;
  } finally {
    hide();
  }
};

/**
 * 常见弹窗
 * @param props
 * @constructor
 */
const CreatePostModal: React.FC<Props> = (props) => {
  const { visible, onCancel, onSubmit } = props;
  // 帖子封面
  const [cover, setCover] = useState<any>();
  // 帖子内容
  const [content, setContent] = useState<string>("");
  const [form] = ProForm.useForm<API.PostAddRequest>();

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
          form.resetFields();
          onSuccess(res.data);
          setCover(res.data);
        }
      } catch (error: any) {
        onError(error);
        message.error("文件上传失败", error.message);
      }
    },
    onRemove() {
      setCover(undefined);
    },
  };
  return (
    <ModalForm
      open={visible}
      form={form}
      title={"新建帖子"}
      onFinish={async (values) => {
        const success = await handleAdd({
          ...values,
          cover,
          content,
        });
        if (success) {
          onSubmit?.();
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
          submitText: "新建帖子",
          resetText: "取消",
        },
      }}
    >
      <ProFormText name="title" label="标题" />
      <ProFormTextArea name="content" label="描述" />
      <ProFormUploadDragger
        title={"上传帖子封面"}
        max={1}
        fieldProps={{
          ...uploadProps,
        }}
        name="cover"
        label={"封面"}
      />
    </ModalForm>
  );
};
export default CreatePostModal;
