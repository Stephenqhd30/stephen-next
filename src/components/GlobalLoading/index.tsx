import React from "react";
import { Spin } from "antd";
import styles from "./GlobalLoading.module.css";

/**
 * 全局加载组件
 * @constructor
 */
const GlobalLoading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <Spin size="large" />
    </div>
  );
};

export default GlobalLoading;
