import { Cover } from "./Cover";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Buttons } from "./Buttons";
import { Button } from "./Button";
export const BlockRenderer = ({ blocks }) => {
    console.log("Rendering blocks:", blocks);
    return blocks.map((block) => {
        switch (block.name) {
            case 'core/button':
                return <Button key={block.id} attributes={block.attributes} />;
            case 'core/buttons':
                return <Buttons key={block.id} attributes={block.attributes} >
                    <BlockRenderer blocks={block.innerBlocks} />
                </Buttons>;
            case 'core/paragraph':
                return <Paragraph key={block.id} attributes={block.attributes} />;
            case 'core/heading':
                return <Heading key={block.id} attributes={block.attributes} />;
            case 'core/cover':
                return <Cover key={block.id} attributes={block.attributes}>
                    <BlockRenderer blocks={block.innerBlocks} />
                </Cover>;

            default: {
                //console.log("Unsupported block:", block);
                return null; // Return null for unsupported block types
            }

        }
    });
}
