"use client";

import { PageContainer, ProCard } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { ACCOUNT_TITLE } from '@/constants';
import { BaseView, BindingView, SecurityView } from '@/app/account/setting/components';
import { Grid } from 'antd';
import {useSelector} from 'react-redux';
import {RootState} from '@/store';


const { useBreakpoint } = Grid;

/**
 * 个人设置
 * @constructor
 */
const Settings: React.FC = () => {
  // 获取当前用户信息
  const currentUser = useSelector((state: RootState) => state.loginUser);
  const [activeKeyTab, setActiveKeyTab] = useState<string>(() => {
    return localStorage.getItem('activeKeyTab') || 'base';
  });

  useEffect(() => {
    localStorage.setItem('activeKeyTab', activeKeyTab);
  }, [activeKeyTab]);

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <PageContainer
      title={ACCOUNT_TITLE}
      breadcrumb={undefined}
    >
      <ProCard
        tabs={{
          tabPosition: isMobile ? 'top' : 'left',
          activeKey: activeKeyTab,
          items: [
            {
              label: `基本设置`,
              key: 'base',
              children: <BaseView user={currentUser} />,
            },
            {
              label: `账号绑定`,
              key: 'binding',
              children: <BindingView />,
            },
            {
              label: `安全设置`,
              key: 'security',
              children: <SecurityView />,
            },
          ],
          onChange: (activeKey) => {
            setActiveKeyTab(activeKey);
          },
        }}
      />
    </PageContainer>
  );
};

export default Settings;
