
import { expandMenuStore } from '../stores/expandMenuStore';
import { Menu, Menus } from '../types'
import Button from './button';

interface IMenu {
    menus: Array<Menu>,
    onClick: (menu?: Menu) => void
}

const MenuComponent = ({ menus, onClick }: IMenu) => {

    const { expand, unExpand, expandedMenus } = expandMenuStore((ctx) => ctx);

    return (
        <div className='w-full'>
            <ul>
                {
                    menus.map((menu) => (
                        <li key={menu.label} className=" my-2">
                            <Button onClick={() => {
                                !menu.children?.length && !expandedMenus.includes(menu.link ?? '') && onClick(menu);
                                menu.children?.length && expand(menu.link ?? '/');
                                expandedMenus.includes(menu.link ?? '') && unExpand(menu.link ?? '')
                            }} expanded={menu.children?.length != null && (expandedMenus.includes(menu.link ?? ''))} active={menu.active} expandable={menu.children?.length != null}>
                                <div className='flex flex-col w-full'>
                                    <div className='flex items-center w-full'>
                                        {menu.icon != null && <div dangerouslySetInnerHTML={{ __html: menu.icon }} className="mr-2"></div>}
                                        <p>{menu.label}</p>
                                    </div>
                                    {menu.children?.length &&
                                        <div className={`overflow-hidden transition-all transform origin-top ${expandedMenus.includes(menu.link ?? '') ? 'h-auto scale-100' : 'h-0 scale-0'} flex items-center justify-between w-full mt-2  font-normal border-l ml-3 pl-2`}>
                                            <MenuComponent menus={menu.children} onClick={onClick} ></MenuComponent>
                                        </div>
                                    }
                                </div>
                            </Button>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
}

export default MenuComponent;