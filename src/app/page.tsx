"use client";

import { PageContainer } from "@ant-design/pro-layout";
import { WELCOME_TITLE } from "@/constants";
import React from 'react';

/**
 * 主页
 * @constructor
 */
const Home: React.FC = () => {
  return (
    <PageContainer title={WELCOME_TITLE}>
      <div>想要对你说的不敢说的爱</div>
    </PageContainer>
  );
};

export default Home;
