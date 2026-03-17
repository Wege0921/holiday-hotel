import { MenuItem } from '../data/menu-data';

interface MenuListProps {
  category: string;
  menuData: any;
  activeFoodMenu: string | null;
  activeMenu: string | null;
  renderMenuItem: (item: MenuItem, index: number, category: string) => React.ReactElement;
}

export default function MenuList({ 
  category, 
  menuData, 
  activeFoodMenu, 
  activeMenu, 
  renderMenuItem 
}: MenuListProps) {
  if (!menuData[category]) return null;

  const isVisible = activeFoodMenu === category || activeMenu === category;

  if (!isVisible) return null;

  return (
    <div className="menu-list">
      <h3>{menuData[category].title}</h3>
      <div className="menu-items">
        {menuData[category].items.map((item: MenuItem, index: number) => 
          renderMenuItem(item, index, category)
        )}
      </div>
    </div>
  );
}
