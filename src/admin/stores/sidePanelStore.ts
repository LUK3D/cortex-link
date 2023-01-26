import { create } from 'zustand'

interface ISidePanel {
    val: boolean,
    open: () => void,
    close: () => void,
    toggle: () => void
}

export const sidePanelStore = create<ISidePanel>((set) => ({
    val: false,
    open() {
        set( ()=>({val:true}));
    },
    close() {
        set( ()=>({val:false}));
    },
    toggle() {
        set( (ctx)=>({val:!ctx.val}));
    },
}));
