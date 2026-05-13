import React from "react";
import { getTextAlign, getFontSize } from "../../../utils";
export const Heading = ({ textAlign, content, level }) => {
    const tag = React.createElement(`h${level}`, {
        className: `${getTextAlign(textAlign)} ${getFontSize(level)} max-w-5xl mx-auto my-5`,
        dangerouslySetInnerHTML: { __html: content }
    });
  return tag;
}
