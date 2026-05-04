export const Paragraph = ({ content, textAlign, textColor }) => {
    return (
        <p
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: content }}
            className={`${textAlign ? `text-${textAlign}` : ''} max-w-5xl mx-auto my-5`}
        />
    )
}
