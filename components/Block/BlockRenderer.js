import { Cover } from "./Cover";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
export const BlockRenderer = ({ blocks }) => {
   console.log("Rendering blocks:", blocks);
    return blocks.map((block) => {
        switch (block.name) {
            case 'core/paragraph':
                return (
                    <Paragraph
                        key={block.id}
                        textAlign={block.attributes?.textAlign}
                        content={block.attributes?.content}
                        textColor={block.attributes?.style?.color?.text || block.attributes?.textColor}
                        linkColor={block.attributes?.style?.elements?.link?.color?.text}
                        linkHoverColor={block.attributes?.style?.elements?.link?.[":hover"]?.color?.text}
                    />);
            case 'core/heading':
                return <Heading key={block.id} textAlign={block.attributes?.textAlign} level={block.attributes?.level} content={block.attributes?.content} />;
            case 'core/cover':
                return <Cover key={block.id} background={block.attributes?.url}>
                    <BlockRenderer blocks={block.innerBlocks} />
                </Cover>;
            default: {
                //console.log("Unsupported block:", block);
                return null; // Return null for unsupported block types
            }
                
        }
    });
}
