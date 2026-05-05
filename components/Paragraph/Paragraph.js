import { getTextAlign, relativeToAbsoluteUrls } from "../../utils/index.js";

export const Paragraph = ({ content, textAlign, textColor, linkColor, linkHoverColor }) => {
    // Only apply link styles if both linkColor and linkHoverColor are defined
    const hasLinkStyles = linkColor !== undefined && linkHoverColor !== undefined;

    return (
        <p
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
            className={`
                ${getTextAlign(textAlign)} 
                max-w-5xl mx-auto my-5
                ${hasLinkStyles ? `
                    [&_a]:text-[var(--link-color)]
                    [&_a:hover]:text-[var(--link-hover-color)]
                    [&_a]:transition-colors
                    [&_a]:duration-200
                ` : ''}
            `}
            style={{
                color: textColor,
                ...(hasLinkStyles && {
                    '--link-color': linkColor,
                    '--link-hover-color': linkHoverColor,
                })
            }}
        />
    )
}