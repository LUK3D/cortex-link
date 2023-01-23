import { create } from 'zustand'

interface IExpandMenu {
    expandedMenu: string,
    expand: (link: string) => void
}

export const expandMenuStore = create<IExpandMenu>((set) => ({
    expandedMenu: '/',
    expand(link: string) {
        set((ctx) => ({ expandedMenu: link }));
    }
}));
