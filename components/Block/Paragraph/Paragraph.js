import classNames from 'classnames';
import {
  relativeToAbsoluteUrls,
  generateClasses,
  generateStyle,
} from "../../../utils";

export const Paragraph = ({ attributes }) => {
  const { content, style } = attributes;

  return (
    <p 
      className={classNames(generateClasses(attributes))}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
      style={generateStyle(style)}
    />
  );
};