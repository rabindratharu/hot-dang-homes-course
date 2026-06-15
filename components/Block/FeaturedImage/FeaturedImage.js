import classNames from 'classnames';
import {
    generateClasses,
    generateStyle,
} from "../../../utils";
import Image from 'next/image';

export const FeaturedImage = ({ attributes, extraClasses = '' }) => {
    const { url, width, height, altText } = attributes;

    return (
        <Image
            className={attributes ? classNames(generateClasses(attributes), extraClasses) : undefined}
            style={attributes?.style ? generateStyle(attributes.style) : undefined}
            loading="lazy"
            src={url}
            alt={altText || ''}
            width={width || 1200}
            height={height || 800}
        />
    );
};