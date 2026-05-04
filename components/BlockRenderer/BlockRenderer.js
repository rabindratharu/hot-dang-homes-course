import { Cover } from "../Cover/Cover.js";
import { Heading } from "../Heading/Heading.js";
import { Paragraph } from "../Paragraph/Paragraph.js";
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
                    textColor={block.attributes?.style?.color?.text || block.attributes?.textColor }
                    />
                );
            case 'core/heading':
                return <Heading key={block.id} textAlign={block.attributes?.textAlign} level={block.attributes?.level} content={block.attributes?.content} />;
            case 'core/cover':
                return <Cover key={block.id} background={block.attributes?.url}>
                    <BlockRenderer blocks={block.innerBlocks} />
                </Cover>;
            default:
                return null; // Return null for unsupported block types
        }
    });
}
