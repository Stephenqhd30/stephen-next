"use client";

import React from "react";
import styles from "@/styles/home/Home.module.scss";
import { clsx } from "clsx";
import { Avatar, Image, Typography } from "antd";
import { ProCard, StatisticCard } from "@ant-design/pro-components";
import { BlurText } from "@/components/Reactbits";

const AuthorCard = () => {
  return (
    <div className={styles.bannerCard}>
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
          className="w-full max-w-5xl p-6"
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
                    {"Stephen的爆米花"}
                  </Typography>
                ),
                valueRender: () => (
                  <Typography
                    className={
                      "text-sm text-gray-600 mt-1 dark:text-gray-400 text-2xl"
                    }
                  >
                    {"I can do all things."}
                  </Typography>
                ),
              }}
              chart={
                <Image
                  preview={false}
                  className="w-8 h-8 border-2 border-white shadow-lg"
                  src="https://dogeoss.grtsinry43.com/img/author.jpeg"
                  alt="Author"
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
            text="伫倚危楼风细细，望极春愁，黯黯生天际。草色烟光残照里，无言谁会凭阑意。拟把疏狂图一醉，对酒当歌，强乐还无味。衣带渐宽终不悔，为伊消得人憔悴。"
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
