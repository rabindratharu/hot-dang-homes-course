import { v4 as uuid } from 'uuid';

export const mapMenuItems = (menuItems) => {
    const assignIds = (items) => {
        if (!items || !Array.isArray(items)) return [];
        
        return items.map(item => ({
            id: uuid(),
            destination: item.itemGroup?.destination?.uri || null,
            label: item.itemGroup?.label || '',
            level1: (item.level1 || []).map(level1 => ({
                id: uuid(),
                destination: level1.destination?.uri || null,
                label: level1.label || '',
                level2: (level1.level2 || []).map(level2 => ({
                    id: uuid(),
                    destination: level2.destination?.uri || null,
                    label: level2.label || ''
                }))
            })),
        }));
    };

    return assignIds(menuItems);
};

export const menuButton = (cta) => {
    if (!cta) return null;
    return {
        id: uuid(),
        destination: cta.destination?.uri || null,
        label: cta.label || '',
    };
};