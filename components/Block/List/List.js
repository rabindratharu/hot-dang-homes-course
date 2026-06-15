import classNames from 'classnames';
import {
  relativeToAbsoluteUrls,
  generateClasses,
  generateStyle,
} from "../../../utils";

export const List = ({ children, attributes, classes = 'list-inside list-disc text-gray-900 dark:text-gray-200' }) => {
  return (
    <ul
    className={attributes ? classNames(generateClasses(attributes), classes) : classes}
    style={attributes && attributes.style ? generateStyle(attributes.style) : undefined}
    >
      {children}
    </ul>
  );
};
