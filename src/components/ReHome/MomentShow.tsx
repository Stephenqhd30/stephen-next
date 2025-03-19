import React from "react";
import styles from "@/styles/moment/MomentShow.module.scss";
import { clsx } from "clsx";
import { BANNER_AUTHOR, BANNER_MOMENT_SHOW } from "@/constants";
import { Image, Typography } from "antd";

/**
 * 时刻展示
 * @constructor
 */
const MomentShow = () => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.content, "max-w-md")}>
        {/* 左上角的上引号 */}
        <div className={styles.quotationMark}>
          <Image
            preview={false}
            src={"/asserts/quote-front.svg"}
            width={50}
            height={50}
          />
        </div>
        <Typography.Title
          level={5}
          className={clsx(
            styles.underlineAnimation,
            "text-[0.8em] cursor-pointer",
          )}
        >
          {BANNER_MOMENT_SHOW}
        </Typography.Title>
        <p className="mt-4 flex justify-end text-gray-400 text-[0.75rem]">
          <span className="mr-4">{BANNER_AUTHOR} </span>
          <span className="mr-1">
            发布于: {new Date().toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MomentShow;
