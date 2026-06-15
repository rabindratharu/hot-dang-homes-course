import classNames from 'classnames';
import {
    relativeToAbsoluteUrls,
    generateClasses,
    generateStyle,
} from "../../../utils";

export const Button = ({ attributes, extraClasses = 'button' }) => {
    const { content, url } = attributes;

    return (
        <a
            href={url ? relativeToAbsoluteUrls(url) : '#'}
            dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content ? content : 'Button') }}
            className={attributes ? classNames(generateClasses(attributes), extraClasses) : undefined}
            style={attributes && attributes.style ? generateStyle(attributes.style) : undefined}
        />
    );
};