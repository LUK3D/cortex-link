import { create } from 'zustand'

interface IExpandMenu {
    expandedMenus: string[],
    expand: (link: string) => void,
    unExpand: (link: string) => void
}

export const expandMenuStore = create<IExpandMenu>((set) => ({
    expandedMenus: ['/'],
    expand(link: string) {
        set((ctx) => ({ expandedMenus: [...ctx.expandedMenus, link] }));
    },
    unExpand(link: string) {
        set(function (ctx) {
            let items = ctx.expandedMenus;
            items.splice(items.indexOf(link), 1);

            return { ...ctx, expandedMenus: items };
        });
    }
}));
