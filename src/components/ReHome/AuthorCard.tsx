import React from "react";
import styles from "@/styles/home/Home.module.scss";
import { clsx } from "clsx";
import { Image, Typography } from "antd";
import { ProCard, StatisticCard } from "@ant-design/pro-components";
import { BlurText } from "@/components/Reactbits";
import { AUTHOR_SUBTITLE, AUTHOR_TEXT, AUTHOR_TITLE } from "@/constants";

const AuthorCard = () => {
  return (
    <div className={clsx(styles.bannerCard, "backdrop-blur-lg")}>
      <div className="relative w-full max-w-md">
        <div
          className={clsx(
            "absolute -left-16 -bottom-16 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-50 animate-pulse",
            styles.bannerCardDotLeft,
          )}
        />
        <div
          className={clsx(
            "absolute -right-16 -top-16 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-50 animate-pulse",
            styles.bannerCardDotRight,
          )}
        />
        <ProCard
          className="w-80"
          title={
            <StatisticCard
              bodyStyle={{
                padding: 0,
              }}
              statistic={{
                title: (
                  <Typography
                    className={
                      "text-3xl font-semibold text-gray-800 dark:text-gray-300"
                    }
                  >
                    {AUTHOR_TITLE}
                  </Typography>
                ),
                valueRender: () => (
                  <Typography
                    className={
                      "text-sm text-gray-600 mt-1 dark:text-gray-400 text-2xl"
                    }
                  >
                    {AUTHOR_SUBTITLE}
                  </Typography>
                ),
              }}
              chart={
                <Image
                  preview={false}
                  className="w-8 h-8 border-2 border-white shadow-lg"
                  src={"/logo.svg"}
                  alt="Author"
                  draggable="false"
                  width={48}
                  height={48}
                />
              }
              chartPlacement="left"
            />
          }
          layout={"center"}
          direction={"column"}
        >
          <BlurText
            text={AUTHOR_TEXT}
            delay={0}
            animateBy="letters"
            direction="bottom"
            className="text-xl mb-8 text-gray-700"
          />
        </ProCard>
      </div>
    </div>
  );
};

export default AuthorCard;
