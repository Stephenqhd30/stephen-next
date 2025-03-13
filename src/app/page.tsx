"use client";

import React from "react";
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
  return (
    <PageContainer title={false}>
      <Row
        className="flex justify-center items-center"
        gutter={isMobile ? 0 : 16}
      >
        <Col span={isMobile ? 24 : 14}>
          <BannerTitle />
        </Col>
        <Col span={isMobile ? 24 : 10}>
          <Magnet padding={100} disabled={false} magnetStrength={100}>
            <AuthorCard />
          </Magnet>
        </Col>
        <Col span={24}>
          <AnimatedContent
            distance={500}
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
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
