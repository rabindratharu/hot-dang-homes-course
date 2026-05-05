import { getTextAlign, relativeToAbsoluteUrls } from "../../utils/index.js";
export const Paragraph = ({ content, textAlign, textColor }) => {
    return (
        <p
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
            className={`${getTextAlign(textAlign)} max-w-5xl mx-auto my-5`}
        />
    )
}
