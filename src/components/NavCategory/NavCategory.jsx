import icons from '../../assets/nav-icons'
import CategoryItem from './CategoryItem/CategoryItem'
import cls from './NavCategory.module.scss'

const navItems = [
  {
    SvgIcon: icons.KitchenIcon,
    categoryName: "Кухни"
  },
  {
    SvgIcon: icons.BedroomIcon,
    categoryName: "Спальни"
  },
  {
    SvgIcon: icons.LivingRoomIcon,
    categoryName: "Гостинные"
  },
  {
    SvgIcon: icons.ClosetIcon,
    categoryName: "Прихожие"
  },
  {
    SvgIcon: icons.OfficeIcon,
    categoryName: "Офисная мебель"
  },
  {
    SvgIcon: icons.ChildrensRoomIcon,
    categoryName: "Детская"
  },
  {
    SvgIcon: icons.PromotionIcon,
    categoryName: "Акция"
  },
  {
    SvgIcon: icons.NewProductIcon,
    categoryName: "Новинки"
  },
  {
    SvgIcon: icons.MattressIcon,
    categoryName: "Матрасы"
  },
  {
    SvgIcon: icons.ArmChairIcon,
    categoryName: "Мягкая мебель"
  },
  {
    SvgIcon: icons.CupBoardIcon,
    categoryName: "Шкафы"
  },
]

const NavCategory = () => {
  return (
    <div className={cls.navWrap} id={cls["scrollbar-custom"]}>
      {navItems.map(({ SvgIcon, categoryName }, index) => <CategoryItem key={index} itemIcon={<SvgIcon />} itemText={categoryName} />)}
    </div>
  )
}

export default NavCategory