"use client";

import React, { useCallback, useEffect, useState } from "react";
import { PageContainer } from "@ant-design/pro-components";
import { Grid, message } from "antd";
import { MdViewer } from "@/components/Markdown";
import { useParams } from "next/navigation";
import {searchPostVoByPage} from '@/api/searchController';

const { useBreakpoint } = Grid;

/**
 * 帖子详情页
 * @constructor
 */
const PostDetailsPage: React.FC = () => {
  // @ts-ignore
  const { postId } = useParams();
  // 帖子信息
  const [post, setPost] = useState<API.PostVO>({});
  const scene = useBreakpoint();
  const isMobile = !scene.md;

  const loadData = useCallback(async () => {
    if (!postId) return;
    try {
      const res: any = await searchPostVoByPage({
        id: postId as any,
      });
      if (res.code === 0 && res?.data?.records?.length) {
        setPost(res?.data?.records[0]);
      } else {
        setPost({});
      }
    } catch (error: any) {
      message.error(error.message || "加载失败");
      setPost({});
    }
  }, [postId]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <PageContainer title={false} breadcrumb={undefined}>
      <MdViewer key={post?.id} value={post?.content} isMobile={isMobile} />
    </PageContainer>
  );
};

export default PostDetailsPage;
