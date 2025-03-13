"use client";

import React, { useEffect, useState } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { AnimatedContent, Magnet } from "@/components/Reactbits";
import { Col, Grid, Row } from "antd";
import { BannerTitle, AuthorCard, MomentShow } from "@/components/ReHome";

const { useBreakpoint } = Grid;
/**
 *
 * @constructor
 */
const HomePage: React.FC = () => {
  const scene = useBreakpoint();
  const isMobile = !scene.md;
  // 1. 控制 Hydration 过程，避免动画提前触发
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <PageContainer title={false}>
      {hydrated && (
        <Row
          className="flex justify-center items-center"
          gutter={isMobile ? 0 : 16}
        >
          <Col span={isMobile ? 24 : 14}>
            <BannerTitle />
          </Col>
          <Col span={isMobile ? 24 : 10}>
            <Magnet padding={100} disabled={false} magnetStrength={50}>
              <AuthorCard />
            </Magnet>
          </Col>
        </Row>
      )}
      {hydrated && (
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <MomentShow />
        </AnimatedContent>
      )}
    </PageContainer>
  );
};

export default HomePage;
