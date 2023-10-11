
import CategoryItem from './CategoryItem/CategoryItem'
import cls from './NavCategory.module.scss'
import { navItems } from '../../utils/constans'



const NavCategory = () => {
  return (
    <div className={cls.navWrap} id={cls["scrollbar-custom"]}>
      {navItems.map(({ SvgIcon, categoryName }, index) => <CategoryItem key={index} itemIcon={<SvgIcon />} itemText={categoryName} />)}
    </div>
  )
}

export default NavCategory