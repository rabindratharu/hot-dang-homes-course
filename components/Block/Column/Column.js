import classNames from 'classnames';
import {
    relativeToAbsoluteUrls,
    generateClasses,
    generateStyle,
} from "../../../utils";

export const Column = ({ children, attributes = {} }) => {
    return (
        <div
            className={attributes ? classNames(generateClasses(attributes)) : undefined}
            style={attributes && attributes.style ? generateStyle(attributes.style) : undefined}
        >
            {children}
        </div>
    )
}
