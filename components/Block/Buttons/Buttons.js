import classNames from 'classnames';
import {
  relativeToAbsoluteUrls,
  generateClasses,
  generateStyle,
} from "../../../utils";

export const Buttons = ({ children, attributes }) => {
  const { style } = attributes;

  return (
    <div
      className={classNames(generateClasses(attributes))}
      style={generateStyle(style)}
    >
      {children}
    </div>
  );
};
