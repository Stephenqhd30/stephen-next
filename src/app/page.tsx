"use client";

import React from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { ProCard } from "@ant-design/pro-components";
import { BlurText } from "@/components/Reactbits";

/**
 *
 * @constructor
 */
const ChatPage: React.FC = () => {
  return (
    <PageContainer
    
    >
      <BlurText
        text="想要对你说的不敢说的爱 会不会有人可以明白"
        delay={150}
        animateBy="letters"
        direction="top"
        className="text-xxl mb-8"
        />
    </PageContainer>
  );
};

export default ChatPage;
