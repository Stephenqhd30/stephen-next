"use client";

import React, { useRef, useState } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { PostCard } from "@/components/RePost";
import { ActionType, ProList } from "@ant-design/pro-components";
import { searchPostVoByPage } from "@/api/searchController";

/**
 * 文章列表
 * @constructor
 */
const PostListPage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  // 搜索参数状态
  const [searchParams, setSearchParams] = useState<API.SearchRequest>({
    current: 1,
    pageSize: 20,
  });

  return (
    <PageContainer title={false}>
      <ProList
        onChange={() => {
          actionRef.current?.reload();
        }}
        pagination={{
          pageSize: searchParams.pageSize,
          responsive: true,
          current: searchParams.current,
          onChange: (page) =>
            setSearchParams((prev) => ({ ...prev, current: page })),
        }}
        actionRef={actionRef}
        itemLayout="vertical"
        rowKey={"id"}
        request={async (params, sort, filter) => {
          const sortField = "createTime";
          const sortOrder = sort?.[sortField] ?? "descend";
          const { data, code }: any = await searchPostVoByPage({
            ...params,
            ...filter,
            sortField,
            sortOrder,
            ...searchParams,
          } as API.SearchRequest);

          return {
            success: code === 0,
            data: data?.records || [],
            total: data?.total || 0,
          };
        }}
        renderItem={(item) => <PostCard post={item} key={item.id} />}
      />
    </PageContainer>
  );
};

export default PostListPage;
