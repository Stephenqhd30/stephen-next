"use client";

import { ProFormTreeSelect } from "@ant-design/pro-components";
import React, { useCallback, useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setTags } from "@/store/modules";
import { listTagByTreeUsingGet } from "@/api/tagController";

interface Props {
  name: string;
  initialValue?: string[];
  label?: string;
}

/**
 * 标签树选择器
 * @param props
 * @constructor
 */
const TagTreeSelect: React.FC<Props> = (props) => {
  const { name, label = "", initialValue = [] } = props;
  const dispatch = useDispatch<AppDispatch>();
  const tags = useSelector((state: RootState) => state.tags);
  const [value, setValue] = useState<string[]>(initialValue);

  const getInitialStatus = useCallback(async () => {
    try {
      const res: any = await listTagByTreeUsingGet();
      if (res.code === 0 && res.data) {
        dispatch(setTags(res.data as API.TagDTO[]));
      } else {
        dispatch(setTags([] as API.TagDTO[]));
      }
    } catch (error) {
      dispatch(setTags([] as API.TagDTO[]));
    }
  }, [dispatch]);
  
  useEffect(() => {
    getInitialStatus();
  }, []);

  return (
    <ProFormTreeSelect
      name={name}
      label={label}
      allowClear
      key={"id"}
      request={async () => {
        return tags?.map((tag) => ({
          title: tag.tagName,
          value: tag.tagName,
          children: tag.children?.map((child) => ({
            title: child.tagName,
            value: child.tagName,
          })),
        }));
      }}
      fieldProps={{
        filterTreeNode: true,
        showSearch: true,
        autoClearSearchValue: true,
        multiple: true,
        treeNodeFilterProp: "title",
        treeCheckable: false,
        fieldNames: {
          label: "title",
          value: "value",
          children: "children",
        },
        onChange: (newValue) => {
          setValue(newValue);
        },
        value: value,
      }}
    />
  );
};

export default TagTreeSelect;
