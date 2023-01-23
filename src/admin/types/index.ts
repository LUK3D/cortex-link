import { z } from "zod";
export interface Menus {
    menus: Array<Menu>
    activeMenu: (link: string) => void
}
const Menu = z.object({
    label: z.string(),
    icon: z.string().optional(),
    link: z.string().default('/').optional(),
    tooltip: z.string().optional(),
    active: z.boolean().default(false).optional(),
    parentLink: z.string().default('/').optional(),

})


export type Menu = z.infer<typeof Menu> & {
    children?: Menu[]
};