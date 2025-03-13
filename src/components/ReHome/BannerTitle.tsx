import React from "react";
import { clsx } from "clsx";
import styles from "@/styles/home/Home.module.scss";
import { ReactTyped } from "react-typed";
import {
  noto_sans_sc,
  playwrite_us_modern,
  varela_round,
} from "@/styles/fonts/font";

const BannerTitle = () => {
  return (
    <div
      className={clsx(
        styles.bannerInfo,
        "flex flex-col justify-center flex-1 p-10",
      )}
    >
      <div className={clsx(varela_round.className, styles.title)}>
        <ReactTyped
          strings={["StephenQiu’s Blog"]}
          fadeOut={true}
          startWhenVisible={true}
          shuffle={true}
          autoInsertCss={true}
          onComplete={(self) => {
            self.cursor && self.cursor.remove();
          }}
        />
      </div>
      <div className={clsx(playwrite_us_modern.className, styles.subtitle)}>
        <ReactTyped
          strings={[
            "When you have succeeded, tell the story of your journey with the poetry of time.",
          ]}
          typeSpeed={20}
          startDelay={1000}
          fadeOut={true}
          startWhenVisible={true}
          shuffle={true}
          autoInsertCss={true}
          onComplete={(self) => {
            self.cursor && self.cursor.remove();
          }}
        />
      </div>
      <div className={clsx(noto_sans_sc.className, styles.subtitle, "mt-3")}>
        <ReactTyped
          strings={["一起长大的约定，那样真心，与你聊不完的曾经"]}
          typeSpeed={40}
          startDelay={2300}
          fadeOut={true}
          startWhenVisible={true}
          shuffle={true}
          autoInsertCss={true}
          onComplete={(self) => {
            self.cursor && self.cursor.remove();
          }}
        />
      </div>
    </div>
  );
};

export default BannerTitle;
