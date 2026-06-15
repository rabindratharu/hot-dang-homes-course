import classNames from 'classnames';
import {
  relativeToAbsoluteUrls,
  generateClasses,
  generateStyle,
} from "../../../utils";

export const Paragraph = ({ attributes }) => {
  const { content } = attributes;

  return (
    <p
      className={attributes ? classNames(generateClasses(attributes)) : undefined}
      style={attributes && attributes.style ? generateStyle(attributes.style) : undefined}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};