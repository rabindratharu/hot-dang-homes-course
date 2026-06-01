import classNames from 'classnames';
import {
    relativeToAbsoluteUrls,
    generateClasses,
    generateStyle,
} from "../../../utils";

export const Button = ({ attributes, extraClasses = '' }) => {
    const { content, style, url } = attributes;

    return (
        <a
            href={url ? relativeToAbsoluteUrls(url) : '#'}
            className={classNames(generateClasses(attributes), extraClasses)}
            dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content ? content : 'Button') }}
            style={generateStyle(style)}
        />
    );
};