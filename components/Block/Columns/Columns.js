import classNames from 'classnames';
import {
  generateClasses,
  generateStyle,
} from "../../../utils";

export const Columns = ({ children, attributes, columns }) => {

  console.log('columns attributes', attributes);

  const gridColsClass = columns ? `md:grid-cols-${columns}` : 'md:grid-cols-1';

  return (
    <div
      className={classNames(
        'grid grid-cols-1 gap-4',
        gridColsClass,
        attributes ? generateClasses(attributes) : ''
      )}
      style={attributes?.style ? generateStyle(attributes.style) : undefined}
    >
      {children}
    </div>
  );
};