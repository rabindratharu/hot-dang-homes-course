export const relativeToAbsoluteUrls = (content) => {
    if (!content || typeof content !== 'string') return '';
    
    // Remove the base URL from absolute URLs
    return content.split(process.env.NEXT_PUBLIC_BASE_URL).join("");
}