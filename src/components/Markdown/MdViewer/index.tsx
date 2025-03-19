import React from "react";
import { Markdown } from "@ant-design/pro-editor";

interface Props {
  value?: string;
}

/**
 * Markdown 浏览器
 * @param props
 * @constructor
 */
const MdViewer: React.FC<Props> = (props) => {
  const { value = "" } = props;

  return <Markdown>{value}</Markdown>;
};

export default MdViewer;
