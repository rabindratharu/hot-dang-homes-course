import { v4 as uuid } from 'uuid';
export const cleanTransformBlocks = (blocksJSON) => {

    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignIds = (b) => {
        b.forEach(block => {
            block.id = uuid();
            if (block.innerBlocks && block.innerBlocks.length > 0) {
                assignIds(block.innerBlocks);
            }
        })
    };

    assignIds(blocks);
    return blocks;
}
