import classNames from 'classnames';
import {
  relativeToAbsoluteUrls,
  generateClasses,
  generateStyle,
} from "../../../utils";

export const Heading = ({ attributes }) => {
  const { level, content, style } = attributes;
  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag 
      className={classNames(generateClasses(attributes))}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
      style={generateStyle(style)}
    />
  );
};