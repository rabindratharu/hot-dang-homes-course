import classNames from 'classnames';
import {
  relativeToAbsoluteUrls,
  generateClasses,
  generateStyle,
} from "../../../utils";

export const Heading = ({ attributes }) => {
  const { level, content } = attributes;
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag
      className={attributes ? classNames(generateClasses(attributes)) : undefined}
      style={attributes && attributes.style ? generateStyle(attributes.style) : undefined}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};